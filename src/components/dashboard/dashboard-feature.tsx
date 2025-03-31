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
    "4rQgVLBQUxaHNh99YMp7c19G1ydwQaMsKkmzSan59S1fCt61HWyLFcn2oZwDGSXCn57fSzUvtm1c8mXzaqHsUAYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h81F4yALJSRaan5UeDopqA8NsHgB7uNs3jk4yrhnW9xPMpPWb99erABJyALXkTmFyAbGoB4Ch8EzeJm1zAp6h1T",
  "key1": "5wFeEZLH6GFgtDW8k4HKgEiwS8hGqvtLBefxPrETGaicdpv5UnEk3MuHWW9KYQRjJTDYjG4pEBFqnU6YPt2YytyX",
  "key2": "6quz19t4iyYiHnxoDNe3WL4CYwBbrQLEgZ6qo8TQSn1nfBvDNTKgHRB6QzEmcwXxuwYjxAJMWb5L3U4Rv2CsFDk",
  "key3": "EtazDYz2ePP12qMA7ixLSJaTYXCNc1MjZUDLCLTuzC85qnvJEc4gFRvSSD5va94r9TK24djEjwvEeTQnVCsHDmf",
  "key4": "3eRdQYdzF6GkXKi2j3tJu5bY2wgkiWkSXh2mECykCnwAbVbvKde5iNYsmuXm2AN3jGk9Aw9VBRQs6kd1LNRXwDjU",
  "key5": "4MTDJ3LNgdEHLhgPxAGqPqF7NjAkswKgbk7biANN4aBqFjjNX6fCeP5aVNXxMqqF8ETT1iDdD8tuW8v8hgKUkgF7",
  "key6": "2U63xJK9je5GVZiQZktwFvZGHAJFZjPVW6ALBBEVqfTzqb8mU4jjdmyqnPfoPeZxyo2DjoQhKipodLRDTj4gENub",
  "key7": "5MVhyCLZLhkmoKzE5j3i2ZPghxnRdHSxi2kG9TNWyHVSNAbrr93cKZVwpGAubbhLr14UVcrdpiBAtJbiGm5gkkeZ",
  "key8": "2dQKibpwfQudognDjMKKZMSWNEzw7sWBYoNEBdQufeMwaRYn2WfabMsGnKjn6CRVjBEPStAKc4tgNVFJzpoqP62e",
  "key9": "2a3HyxEMCHwrauzmCoE1DR8iNnBwAELxs4XFRSgSpZasKLEnTxk2DR28kYAwF1uvyvC6NqwwjEj5M1zZtrJiFSS",
  "key10": "6M36rMphVaBGJA2WQP7BHXashEwnWEZf3BUxwthucx7fFvzCsu9ss7SECzUjdbTE9BeYXRYkbQkHmQGkifahFdH",
  "key11": "4yYfBoEj1ouiGop9EswW4keo25UhAdyA3gzqueM4awPZQzBbrXeK662rcEEEKhAUqtTYzxPUnfRBjVQSBAQieQg3",
  "key12": "4RgnVsM3xBMdJbmZDUTYf4ufc83nxnBhfQ8cunHhRqfbV61uT8BKPkhQskdhVdDzPbP7cTyst5QgecqCG9tDC21d",
  "key13": "38b2iaf32hb6G7itAeLLPEDKN8uXsC3QYAuAZjeMA8ESSFsLMUqQLDDL4yMBhE3Aidey6H8bCwFPwCdKiU83Apvv",
  "key14": "4nViUqoYjitvPGuomAdzRaMK9UncxBhYEZW4e66smm7WFxukP8QGGWn5xTJNsnhYFbZzkwFkbDJHHsjRtde28A2R",
  "key15": "2dEriQ6PxE5heJpEEBbnZm6vDqf4VPBXXh2cQCMASXWVNsrX4ydzHEVRVbWoNo6ZucH9K9uMGxMeeutvmi8qeLbq",
  "key16": "67B5v7hBoZxgDubscgaahdK6a9XrxUS952ipcyPRQiE7opXkBHek3GF65BXi93BBwaFqouM2GEDoMkP385dz5gf1",
  "key17": "5wNWfLiejPPmt2vWvQp8QNiDMF5LZ4gau12HL9mEb1TjzmpRCCqZU6wyb8DdXzd4YDBumvagCQt9R3X6LJkisrUm",
  "key18": "4L2Vz3fWptaVRQdLH16W5vW3ptfHtbPds6AYZ9CWWBt5geRTYhfPXyWmGggKs7pKLHrNNL1FrGmWc3Dzoai9u5RE",
  "key19": "3jHwGRLM7D844w3v8ZhAMmvFLZKxfB3nCiHmHke3PhdfQbvdZJVuwiYLkWPhRj2E18SaXJbkeesXborNn7gMK8zW",
  "key20": "5m6Vp8VCvQM6XPXVmNhEKQm9jBPYjHqMFJmNYuMivcbm3YmBZ23Wh3xZo9CT6Ygkp9KeF7hgZJBhQzwr2L1aJStq",
  "key21": "5YS8LdHLsWEPVsXMv4wJp6vuPsHrX6ZV3vvVyA2Askyh8h5kAAhPnVkcu3YzuKfredEmRHEUhwGHTsEVP5aWS9Ct",
  "key22": "5kEq26dn6PfKE5TP4mRoZmt5qN8MhkG7A2a7kCQajetRYyR1FpHKoQnVq56fhVS3pwCGc2Su78EkifxHtJZ49QJZ",
  "key23": "2p8uFwd8rUP7FUYNpnsG3vPxSsrT8LVjwkf6PeK2N6USQXYR4T5CqAwEu3EgfhjFu3TmStMUmZaJryjX5SdN9Jbx",
  "key24": "2U4BUcnMa7QQhehbkKYVN4E3P42Nen7QQjBD7QbhdjWKa8p2yBq7ctfNSZvx5XmeamadbxGxmhAkdc6fHfQo2sdE",
  "key25": "5WdRg8PDoawdSFUPVcDhMMSDj2ZfVMrgjiC9xM1moYvBrJQhJ8mc77WKyHvdkYzcaMMuEaBf4h9xy96AGji4G2gD",
  "key26": "22HxR1uY66vbWqN2rab5nidpZoE75dcgspzVbpfFYFRskJSPyP2UPYHt9P2gedaiwiEmKdggpP5Mk3dMCa3XTDu6",
  "key27": "FhK7x4M3zEEsCxyAko28kdpsPUV7HkEyUkFA7xNLQvbt4vW9it6AedJYZEAnYhTba1cSkbBYaLue3n913BDWzwG",
  "key28": "5aZ75jaUcfmWpDGiNEZAkwEeJ35auGaDtRPQADX4mP4G7wR8WqnXKJRFeJr7Yspg7MJ44sjwpSwKzdhLF2hyAdC8",
  "key29": "3FSB9gEjiUS6QvcRg6ezTfwgu556PrrHJa4knk2u52fswZRd9PJyWJRVuqPfWRv7nWnRAJBqmVX1BToM7aSkoXAt",
  "key30": "3rdQ5rT4p8NnXciK54zrTKpdqMWLY2AmYiqcg64gyUYTSTrmJn63YnNQrnD2T4JEyLa2SVdGLDXtW5mTNcQCp9eY",
  "key31": "2FrAqczYhAXoJeQXKpZw1PKutzqcca3cUQPL5jP828vfEa611Mpfja9H25v32Ju7kUPHrME8qeZSP7nWwoazi5jB",
  "key32": "5UN2DPVAj3kebQ73HhwugV8ZZS4emZAjqmESmipEPfgC8GW3un7MZq7T2vDtPoXPxcai5BdxtKmSGogw6r1HrHoN",
  "key33": "uW5FSYjx6iAJmPLKbU8geW9QqN9WpN4jL91wFp6zz6Ata7Q5BnhdpeXgJsajmKZVW7CkdXvARq9jY4YcQNNCNgt",
  "key34": "3uotFignGxDjQNrbu4CFg7GgnYC9F2pCBaZTP1JiCDPrCuc5funL4ysHdM2w53uFjQbMbAuTANEPpiyC5tB88soa",
  "key35": "DqPZ32VtMy7MUEqYF5YqrkNi1X6CGmEgfdepYvSRvU1VvcD4ceaepLpetDqzS7t3xLeq6p1mhABmvfLu2ZBSJev"
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
