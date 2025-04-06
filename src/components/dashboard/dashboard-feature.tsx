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
    "4iKqbPbEvnWow8Rnvk8bFY4kBDKJb2VnX7o1Qp24vwBiAxhEaenEDoMYiYRSMcskaZNccG7iMhXGZEuXZoTriL1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgAd7KwHp17keKDQ6ArSGefvRrCwnFP4Ea88eG9Aa8wEL9XMidDBNgKXELuWAb6w5rSLzKyc7X3asRLHZVs2Eg9",
  "key1": "tSRVRBECdi2x9hVo6LpN1s16KFXE1WxcGZ5HK2ESrzTZsXRcsdfWuSADmPRC6VbRwycEayQ1evgRoPJ8WabC9g2",
  "key2": "2kamkzg8by9ierCjofvV3sYTZbiVzkgBygNUh9v1WdPaKtio5tunPLjCoDeCNMpHLeLSB55yjMHzvV9QvfSpoBpe",
  "key3": "yJMvNo4JuT4gM7DddNySduJB6WDbyPcMUDjNGvifuzhqjb9QzAvmxUrNvJQES44xvRN8FgSLdBLVRujH4k2F5Zi",
  "key4": "3GUabyBBCNvBzZeZpJ8XryiDMUeTyr4mEjThaUQjUrnTapA3D4KPWfWtpdqrYzBEjCfrhwJDNzNN5d7be7UCToWJ",
  "key5": "2UdT7fmxUqJJTSLxwqjQ6j4qaFTqXbdT2n4ik2PwQyxNE7m7xPAM28gNqpPz5K2oq7PKgCPyUzABTwMUUvhmD3nt",
  "key6": "3RcJbEWDpwHqvKN3EgxjgePUQBC9uc6Lm4jSUdTbyEMFzkgb8FQddRtPkUoBr7M9gXbq5esVS3aYQM1Frg9mKUdb",
  "key7": "2dAvvBZRCyQvn4PK43J75TBCfoEacrCx6db7DssaQcPcfreHEc3optEeXjwF5MWHkth8gkcUGVPGVaqhSjSMjEFV",
  "key8": "5TM9ad7Tm8dXgjE3v13QJi8Nq7FACr7kLAepPLueofhqjpJE7a69gVeCRCPnFjZGVAFYcFLLi3oFHi7ycpY8HJsY",
  "key9": "4NjGxFEDep647LT2sjQddAkz86UTsxaX71JSzga6Q9YudQi8QReL8Uu5i3gCS5k6VAyWntxrrGk8B8EXLSyBHw7r",
  "key10": "3wWCLv5yqppEHrxxQGWLZYoCuaM9s5Ek744N9GLGoP5omNJSYbkScgqTKnbRK6oXh71uJzEnW7f2dostMeyBAX8U",
  "key11": "2ZuzLFxBjLHh211Z8oquH7PomBnang2yeBvJvPRag4rebZJDYwcdGbHvgYBsq1YXK7Ftu97ef2DquxNW1bbv2yUC",
  "key12": "3sDPjkXkoEpPMAxyf62u1BhesnX2FGh4xxHTb8hM41ERv2rzBwh9EhKk74q8UdgecsF2XADK9CkmXot815z6F5n9",
  "key13": "671soBoKfBuHQxqwChsuZLwXQjxUGesDAqZaqiv5HY2vU8WY9XC3D8r8EPLAbR13XH3uTTdsuSKfnHPbWrMnFtUd",
  "key14": "pjqfsXdmYkQS2oWQ56CVnP655FEszWdxD9CwA17YRektNuNvuTtGP5kfeNvEncAxQ6EE6q2gNQKWgNzgRFqLtye",
  "key15": "2CKGSTZS4Zfrk1XxY7LfRrVhMr8iZSnnovpN6vN2KYxSC9PxJCVy8JfcBTeQmisVknK198CiBgnqySmvymzBznVS",
  "key16": "3bExZ5PovkBGQPVmbHetTaZfeanW5jmW2wYNLkKE8c98ZwRsndPk1Xo3sgzLAYM6BMHLxtU2R4jkMM2okfYAvwDB",
  "key17": "3dPLHvt2TmVbF1gn1mqTBY4NMHkeGTE6jEzKseawytEsiDqZEWuhYRUcp6wnVzUro1y7JziPt4RDYg3SKWRTH74R",
  "key18": "4NRpoEZ366FRv3JzRXGUhYMyFwxWhkjnK5YVj7jPgvCFRaJmwySGN74m7rnDBUbURw5gjLdARYWUYoGqVCPaKEvy",
  "key19": "2gH7CxjaAcQRQyDxP4UtoEMRjFHoZEyseCtBVxLjUSt5RYfkhMKs1YajKKED8Z4dZdxhJsmg7zpX91rjRWUDyah8",
  "key20": "2F7Hfc1mqHPgWptm4QW3X3oAzjfa8mnQTbLDwANYUVv6PmeZA6TNQqAmgNs2JM4me89DVuKH5vgxvxBXDwHwuXux",
  "key21": "4LsWgZ9tBK4XxfAYwfZU2ttKP9ijzVukCNifmfeyoHakPMFsGUTAZdSXjTX1E7ahH6ctZfYNeKNjoF8RG5kmqXXF",
  "key22": "4AzS5vWCbVLoWJahSdSB6pDdASo8QptZSTsMf2k6uzHfz293gqnwP77wBWwP7Us9GcX7naaBF2fS1gUJY8988n16",
  "key23": "3SCANE4Lj4vHFpCtJ6FbeoR9NgzWehsGvUA5QeCob1ticWjq75qqXEaNbB9Yv6jr6PFcD3FSaNFr3HxzNhxVHy2j",
  "key24": "2rujFsWuR4GQUJAXeykmR8Cdj3hCTkppWbUku6kzXFxTBSfvbXc9qh6BvW9FCDC9TPs9b1Prfh9MycePANugREWW",
  "key25": "SQSzbtVQZcyMqoy4KojUTbGtpGvyJ7ARLnZVuF5o41AahGwsTcX1NNEdfyBsjFTs4dw8jw7UE93DWvGZhVbW6UK",
  "key26": "5K5ragZ5evP5rmHdfn9iqqgwf1E9D3bwPgd1D5UhUfUchm8WVKyiuk7htN5sPaYEZ57Y7aaribwkpMTFQp7KpEpT",
  "key27": "4uwNydJ6oYgrCF4trV4x2fVKsEZiw37jNLGjzXirhQFfY8gkHPQq6a3N1exfggaXTHjBbTwtW9tMmhu1zSZZiiEH",
  "key28": "4zGYPugAZYC9Fnh6Wt2PEjuBsZrF8EoDdN9CSNDKsnbjSw15ecHvJ1cz3i4ecLjQG2BtethiAY3LrAw41S4Zm82u",
  "key29": "5ck7McCKrYMtUcCvxpCwxGUJ84xLtBAKEf6ZoVoonFZegHtRRHunyGf5xe3gdqTZGFasRbDUh9G7UUeubNZ7LjKQ",
  "key30": "5ThC7UqaW5BknpcTev4ed1CA5qrgGzqhSvHxe8HKF4gTmNQaAm9etrwqZ4pGVQNYiH86pcEKmiUkM42Mr2dfAWWa",
  "key31": "4vMALusAf6bnpNerHkuoxayz31ddFxz1uwc343qHwMttsa6cbYD8agPmveCQyBeh9NYdSJMUDqGDrzywpLJLDyxm",
  "key32": "4vcJe5X63iMPFv3Zs6inQ6CyZBx7oC8rPybL5fM5QRf1YXdPu9gwiQALXfT2Ab5swnDgLxQSp92GnrLyxYteA31r",
  "key33": "JkCqSWdJ1yKUxuBYHcQ9StMWAzk4R2QeaTQqbh4WUrEjdwd4AmmGuJWaDXXManD9GaCtbpvh3hs95RVu8P6iB1t",
  "key34": "2yHHDw5v6hcjanrTi51BHGexud6QV79z8RvwigGZM1aA7A6xXJuc1MPcnwk5X7YH37W2RwKsqZ5eWQZXFaxYdNzv"
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
