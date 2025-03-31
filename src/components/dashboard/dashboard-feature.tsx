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
    "rkuyESGET6hHW4fy3nJ6kKsEm2K5VfXtrgKBPa36fR1ngyj4q4SB6QMYTquGMV5oEzeYPDQ5sConTWvn5oPr42m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWA7tJub8nQW2F6gcL92sh7q9T8MbCqxe2Z7kVWAfugG9nbBiwVWirH7upXkvEwqRoa3pT1HCWafGkHD9WzxeMQ",
  "key1": "5qNnbAkAwkTZVZtYiWd53YoJcvpjE3g4oUPgkmCdsGhSMQFzUA1hkiDgq81egKbPikre8GmG6KJAF2JuP1Eyp4pt",
  "key2": "3vsjafxUPDGCDyt7c3qW2FiWfbi9fC1KdwnAazsiwmACnfTKGXunGipBdBqWEgdqZvPaaYLFPeqML1eyTqNcLuEs",
  "key3": "4jHKU1Mm83iqBLfYbr5J6bWdVJzZhJt6rSdeHuVJoxLLkf2BAY92euaeB9nzL2nY6egMNuRtUQhFEhF9sgxvV1hL",
  "key4": "4SibtszxpNhwYqmSeQYeorn8JJtWfXjkWSAEMf8P2Sec1FTzeHpvQQbdyavStmBbuTvmBuu1TowY9GVLmR6bT3dB",
  "key5": "4yaYPmF4qdpwmWvABvcfLR8naxVVW6Rj3UB5bKKLiQYf9hbRU4pX4kwYMFJ6RuoWYYaBGdEEgWAxqAqdCpfRoEgm",
  "key6": "56s4fzBN2F61ARTjS4G8GgvpLzKv6UymhZPpjUJJD6Rp2ZXaxgrfEkN38SGxhaCB9gaUCZC2r9gukY2ecPiLgxKs",
  "key7": "3xBdWaM1GthCkrE7EXTENRF1YE21KXczS5honYTdNievEguZxQGgSTTUGUCYrpjpd75iserWVc9nsFEvLjwGvLfP",
  "key8": "4L7gcJLc4DhcML7fFpd2zpmCCWeyRqkXFSP7g5MWJH3Dg2rfJ8RycKYzFUGftH12Fto9WDL9EbxpZ9A3HbFwvnku",
  "key9": "WFuR1Hh1tkD89SnUUqUhC8WrRwRn2ornrPSHkpB2mB2UuWo1k59ipYa7Q7iRN6P48kpdpjpfiXrjHCF3RE3JVAo",
  "key10": "3egfJEBzZU8kBLrbLkwjNsZXMGetXhj8CuYAZwmHXVPGC38LjR5P7S5ihFzMVGyTN7FKMJ2JHeueNEv5ABhXhErj",
  "key11": "3cuBGiFRPzjDBJP3V2pa8aNMfsEjH52sX21B3V9z3oYxf5ZLArqUm2P8U7VhEVNVzWtdbRVHSKJ8r72wdyH7nuEs",
  "key12": "557SFrKT74TFwoyxcxjK6Uga9caNiBfJwPUhpE6dnry69hWkWviccPKMemZ6QCz2DkRFt4GrLqWtYxHrUakYzuDd",
  "key13": "q3XVS9YJ6kBoT6rZukgsbd8NQsdh1URRZrMDf7zw6sAePcykzPaLRYS7TiUJSbFXXecQvvTuQHzLEj43xoW4VFf",
  "key14": "2s7fYSUZ5NpHxtpZWBRtriFiYKDD3eVfFxVKPMySAFr7JScukA9WjqFqeEeZizVWWPpM9mrLD8af4Yoot1AZsiUH",
  "key15": "57sy1JvHGxnRPXeyUDtzKXXDUH2s2K5BVXda3TT8efD15S7EJeMGr9Dde6sGfS5WbNSRLtyMz4URV5yrJiaDSTNf",
  "key16": "2WGJh4dV3GbV1BptwX3dANuY5uGd9inCQXSHqCFpSAxeEfYEBGnyP132FFGJ7EyMgLM9S4wxqdYaydrrDgjwMFxo",
  "key17": "bH5y6FMH94zHRFvPu6hS962VN6U4qTxXPTFDwcmy6BFqXzwst6Xw43fPfNb9gLEdbNAZyQRpCJqd5BoHuTSRYAs",
  "key18": "cBhTWARBrE2Hwnr9BV1quy58ym67Lv6JvJWkEvcBc3d3pZJe6zHo3Hr79ky48TztDubqddwVsY2MsCQrhCstbVw",
  "key19": "5GGs6bmBigGxgJdx1vQhiDbXpojB3mYcKNdViFa6ubK7o8Y642Fma7RHEMh1VFkW8ez2fVheqFkddH13M2PxBG1w",
  "key20": "2qqHs47PBqXw3UdtbM6wNfWa1T8g7mbP1aWfFPb2abJeRRSrY742m1zhUgRw1REumbmRNQHtXhJu9KfnQM7e3XGB",
  "key21": "4mGUg17dVibd9NTpjCnZZHdXQSvywgpxxfFnjsRMsyY4vEdoyJ6QcmKGhFt93xwY7cGDpkhE5wSTJeNQCewGzgLU",
  "key22": "2f9KgmnsFgnfaQYpMvTyS952X9pkQPhUTRHBhLYBhBN1tTXa858FBZ9Ujm8Hr7Cpd2fwqk2DDQkupnJqeSDNicDc",
  "key23": "4q9rADDzEs1GejtKLhKErr2RDmnnUud2xRQwigotcaRY18NgVkMVSf6CcCR9rHsovxNAUWnPFPfqi6yUBZ62JHrv",
  "key24": "2YsjyfRqvs7wQgFn5Q3WqmEscscBhKSkZxiW9KcTQNrzN5DwcKuzocfgPFMmRSHdictyGH2guTaL9s7XcnmVjEV4",
  "key25": "4pL1GEq8GQy82BH8UpbNYU9CxZEu1GqGy1kJSAG1MmoiJ16UMMrppsjqiesuaSeUmeKKTWYQgzc4UWE3Qdm8AFNk",
  "key26": "4YJJrkb7ioVRWkLbvaVoky63S7PRynAsorfmszcpFJVc2TDULqRV7BsgKJNZwWq2YYQ1AiNeZ4WBxqa7ng9EaL1w",
  "key27": "2sYoFmKRAMNa2w5oJjTYubTDH3uCkdCNVTKTgpc3dYxxo7EE6GZfuB66mt4gvkxGjAjCBcS62n6PSGVQjifrVWne",
  "key28": "4wpfUCSP4DGuwHnEB3fwNvS6jg2ogoXEGZpZMxDMBjSrVEs9C7w23z9gqKQ9sn1kcqTw69QtiiZacAYw2DT4F9fi",
  "key29": "mseDnoy7oF21QyvvMZDG694KZdxPDzAxZ9JWY69Z5sVj3Cv6yqktAU7mw9pfNoeff7RGeD3dQtYTd1GXWhAy93y",
  "key30": "551D6ygu83AaDYoDyFbX2DfvaFz8scPVM27YgtZNaTt1b2LiiPrnYUS5KswvaEN6HvmNAxozShWMNv9o48S9GtJg",
  "key31": "4zQrRv5NWKUpRWBbBWSqz7tQwX54zWbYwyBQyMTt37GykEKVb776nX1w5yhoJnrvZVn15EeiAsffURRTWNxvdVaE",
  "key32": "mwbWjnpC1SrL7EqfU6rXsfApdXjwZEL1tFTwgxKZS7KzXCj9nSo9Wn6QoRxW8NkAZtfZQ2wDWwiYzUtFRTWQrkc",
  "key33": "4xczSQR7WTjCZaLMCgqj7cb6jDUJ2eDjsU5gaeyENFoetktV61bmMURJCuWpDV8tcSZd1VrUJBGqaQrvqtSXvpYc",
  "key34": "4VvpeFwndWScjrcSanHw9pCuvZVdH35YX23QAgm9P1UmDcJxa3FMMYXbQzp4iKUKkVupSGdKYf5upuL7UBTBPpFe",
  "key35": "621EaLCuQTsbEN7KEDdYPcq3KMA9vVjYhntMMjJx44xqLewMAUsY4wkG1EHgzq7sQWTXs5fUPh4pSWkwUF9aRjZH",
  "key36": "4XXzgwytbEPkKKC7Bh7RcgU7iH1pB9M1GLbgieAVHA5Frufj4pPyAmx8NivoG3Qu7ffeiix1Kyunjcyw3uHrbtKj",
  "key37": "3j6AcRwdWrsKm3mAzURQ4oMHfjy6gnq8nP85GN5df1Fc9q81d2S8hwTnQGYiyYAf2vrN2bH926QaNFzQkKuEtQs3",
  "key38": "5eBFK5VpR96LEBShvhuqbSuuAaUQovvfay3AaGM6q8rT72XuTcQpoSKzoZ8cr6qYLbfsgYxBsh71aYdgepJdyKEE",
  "key39": "2cM6xHQhioahptE3scf39sCtQb7kCRMFeXiDaYPQuRk9K5Asf6n2FeHGXcBGEZUyt3n4wESusUSsC36Jc48uAyCn",
  "key40": "2gp1TcdZiHSSVbJvWJH2F7tNrnoySG5H9m9FSxeeMawstbUrpU1kYiXok7njFN2eEqSXifsVBiwBVaWnmYkxHkhb",
  "key41": "giEHZLwKt7aRzBmVAFYX5EeRFhwMvCUBTJNNervZ3fqqg1yBGWHuLk6oTszmqiLZsjZ4PmDwDCd8HCDYghQbmDj",
  "key42": "5q1uyjXbtCvk85VoNxjXUcFM4pizJpudxseKepQf85hdZaSVNxL7d29ZRMkTDzXFedupZ9nCQdPARELyEXHEhrsR",
  "key43": "TVVcKgmTaoyXMAeQmDQvEpV933AqNX45ogsa4Dn8DhR1PEv9tPEyctsdfUnax5tsKFVJpuaEActxKm8hFd7N5Sm",
  "key44": "2eX8tjjyEVjPztWU6TarCRgzBt3mYVvsQFx4tjZgycg4d95Rksk77DE75tkagAFw1r2SsGRB8MhuU7SPvjovYF6a",
  "key45": "5Hv5JExJtqTXuoDw7XvUPKEKYpUMWTHxtaPziTi9h274Z1e2aBf3ym9igW8Fst8QoWA32zoHyQY4fUTic8FU5iL4",
  "key46": "6Goa3gNqzoAf1GJKjSncTA8ZoXeDNzYE7gSnhJnNf2uDGB96uXNvEsqsCEGbHfYQkzQ7djozZcsyUPb2kU7oqGw"
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
