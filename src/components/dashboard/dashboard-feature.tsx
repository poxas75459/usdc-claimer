/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2pdiAJJhdogcpXJM3W1MG3zeHRazzEVCR8JSFNVDYZUVcr5pMqqezQfF78G7rxeNNdB4ndxocjoaVShGRAKc9ssK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2PpfhEbwkYYWrhvGHBE2nh5exFqKyWoKNPfSNG7ssERvxjouXUBpuNhZud4GRZvxtgLKEhB4bvPdpheH89cQSG",
  "key1": "4gf4zHs8rjDqbE91X5bmJ33h3Keec4CYBoD8X2ZJftG2kAdNnAQhxRETvK48Dbo1ehPH4xoQo4q7sivKmizWvsxJ",
  "key2": "2DqTdEis9ZjDveKqMVvf93gRgQv1onNiZNt55k4a7TFrV1MdmZmqeTxD9SndfaBEjd1gk1qFiztu8X9CKLuUf9aV",
  "key3": "5X32tG7Q81ddG4GiLHvXQ5gZf5fiRg4BXQ9vt9xBVzqbhDdtFXMro7pHAYJtURzHZLjmEUaSgBXujwvcdvvV6ey3",
  "key4": "2D45ckMtRr4riBnGWArzpuEFRLzwiiqrMkFnTgZyQzjvnuUzAwJsycjqNsmYZtw6x5NejTaBucbA6e3fj7ENE6yU",
  "key5": "4TDtiRhSQ2P4BeqCfSuqNxd7cYyiA2BrinZhBpPxMG322vfby5tkFbVQkBjBGtFiJv9u7Y63LTQteuywMfb9BAx9",
  "key6": "21Tdrumoo3BwS1EZuEh6eJdhSCG2fnRgEnn2cveAte9VnjBCuo5Tq1jWDB6wQtA4Rs8LXsNjgJwWXxxBdqusbu9d",
  "key7": "3SPMkk7WGFjVVxLAsqGwNX79uvwcEsGXTsTEkqyqJmZUDDJjK6GPVu8GKFToNLJQmdwtXcYP6DeitLHpYit4zmH6",
  "key8": "sms5ib8ECMY5K2aQj1jESkrgh7bf7iex9s6QkejhLrh2va5qB2D7DjjRimYVV7uYpQqBk6UTF8yUFbRc16ZVeT6",
  "key9": "M1SbditFCgvVkL88VQQQoCFHJVowNBAPJeN7Pd8z1DC7rgDMixAy5aQof1Cu8yAExC2e62BFrHqR4nKoH3Ee3rm",
  "key10": "5UtX5TmoNpF44DdZ81aCSEiE7Je19qhsXN9NH2SqZt5LZCjjPV4Yz94vBTy9Gy3PTJy2geu9Y38yE27XVtUxCNBP",
  "key11": "4oh415ZEUp6jFSq8e3TmqwtSsG7A5n4bFkTy93KdXwgh5a8rkrY3FPLR2JWKxvFEVub9nkkSYExRytUXnueRuS8N",
  "key12": "2Y3w4ZLAjnLpV3FhCyu6AXTffe4NKJHfkmipw84xsR2RbcZR8VWsYukPWkcJP2w5nQxH5fiL3zuYAhzbX4KBuwTG",
  "key13": "3CEwFM9gT5mBPVKBh6WvBVxWSFyaMRaVoX7DmsL5d6BDjbfbwEXM7oGSfFFUPQWpvyycAt42ETsMUsh5PZuFKZgc",
  "key14": "4JxTxGUNgVndtG5NzPWTnJ1YD9e7a6hDqbSAYwshCRNKTuBY6hDy13SB1o78WmNuDNHc9eRaXLoaS13aN5wxM4Mn",
  "key15": "N2H9p9PLmwY7YarLEnNHd4UpNn3GzPFnsF5BZ6y6jA6JAR1FAndcbgyfs1oaTbwnBAjFhKqhbE9a5r919SorAv4",
  "key16": "39q2MoghgYNMVMA2EpWyxmav7Gqm3QrMUTcdBcmFDKLeuFUUbdTLxLsELGnAiKrwYYGxZZ7cSxn6kP9L6mmgojFw",
  "key17": "3CdyR1RwpEHJvD4jfocaEFsCULu7LUyamSFCuc1r1LZDDpPgsFqzpSgwMaGKZASM22xzmN541SS3pGdt1c2UCkAA",
  "key18": "2fZu4it7ZLhUB3qJWS9PuFL5kz47eqQqvW79QCZUmw5CbexFmiTvqUvaUzFaBj9siNhyWkCaFsa5Q1sPuTJTtgtK",
  "key19": "GuCXHrmXhGPXQsDrFGqcLhT2HhwGzXW4mDYQoqSmVAUpHw2xxyCXvcFatrYzWPmHNRxvNXyvwqvgV2M2wgABcbW",
  "key20": "tXvTXXKhK7adKuAqeA46yW6726Ku2dQLtNBj78oVyZZn8FcNGBkxBMK5KseAeTdPE9fFrnF2DWkHoqfhPG9Lhnj",
  "key21": "2itGcE8QrxLEBgWgo7ndVjs7FgMsGpYvxHpfYkF3TBt39kxLW6KbzXMpkhtAvLEwknFiq3HJ9QdBscbZ8jCy6MTa",
  "key22": "2GDiry4Bv6eKhbpGxJTZNPTKWUGwEtHLnYq7SisnBEbKDZUnaU28RyWj43ptoyMY76EoTikHryXaCjxDAtGiEXJX",
  "key23": "YLiD7kGhVFyBwTPsA8Ds46sJyQQsfpcoBH3LuYeVgttELZ8FTrnpa5Y842TEUdo6jDttxQfZazbWQLhBZ9eF6y4",
  "key24": "wdfkNX5rYHZMNXXCNQNZV8vAjjbij6NSu8aNyYpnatLYnkwP6971jvz3NLDsMxjJp8eZopDANepNw5XVSX8VKDb",
  "key25": "5eoRe43gcMzTb8YAp8ipbfTSFSsK15ypztwQUmwLofbjHteMQdtTp56GBXs52jXtEQ35WBLPv5Aq5WceeNWSdJ5e",
  "key26": "4R9W4j5fMgV6ZYXpF4wWR1T22U6AxubbSEBP5kp3AbyogbxQ8BxuyigMGwiJ6ZarvLzjMVbPY355KtRhshcDgRVd",
  "key27": "53UuQ4RK4JeuN7LfsvVmvrkfdZyemHvMWNCJjz8E2b3483mwspNrToKeJA3G5iknuFAJHuvYyCTHXtHBYYm5rHWE",
  "key28": "3V2jzxYiJztJt85L38NzWTYczi1EUJH3zokKCDTS1iBMvJC774K7yckzb18YpoNNdqzbr2zMjG3iyhA4KbpsPs3f",
  "key29": "4gF2ymcTEyocNUuZvK7Xa43eQjaE2hEz855t5K3iwKcYLrUccfvkEkKey8jy1gfj3rRmujYgq8GrtMzXPAWf7crL",
  "key30": "4FkhFnGrVvdDpY4TGGGjgzfCb2oopayJ2Eb25gAzNcVDHTa9tDB4YWMFx7RSxYnFHbGJxiLzyLbB6uy3cVLFyQaz",
  "key31": "2pi54fiqtKAGPm8dNc6XSFQbPduVpFyYq6fDis7yqdzL9a6buheeQNwGPV5sGyzbCMTJqxPNB3TvvjrrU5CttGeX",
  "key32": "tDDRPz3gWAjBv36sm46YKD8c29P3MSUXHsQKdt7PxEh5AtdD23rpuhjxL9DykvPxpcmjGaaCqcet8jwWYn5btcu",
  "key33": "4h6dsoi3s7QAMvsQCvc6wHXTSKayLKjNTyjp7mBT7D7ShcbXKAx44W4F9ALwgkjDuYWrYSapBwVQ6StRzcnr9DvH",
  "key34": "3RHWaCGEKZ139xf5i4ifbxS33QFStEmicSQtgBSrsQidSbyF4zD4mNe2Mzt3PQNzjVwF7Ja3mYxKxYW6UkUANCdw",
  "key35": "JJaXG3tZG7fRju6sLZhfrzNWTu6sqeXSpN6c7HguKh4JbNj2sbZZfGQrcLUqGy8TJNbCbe9jLarAHBwoXKpyrWB",
  "key36": "5F1YGtSAFtmiTQixx5Wu57Qvg3wQjFkYqufEdTVVh2hmF1gkcF4Dm8BucDBwpF6XyjCMC43cwB4tZ7LBEpfgRKQ8",
  "key37": "65otj9xpZP8dBzz7LmidwQNgisihu1Y2CASJbXnLUGS87jGjk32WLQgQRFNmvx9UrLiDc56VnWeQkE5ZaPudzMGw"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
