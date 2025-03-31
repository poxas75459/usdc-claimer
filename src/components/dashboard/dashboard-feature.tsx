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
    "5Un7qXjaVDMr3ozuoSbyKa6edn96fHx74o8kJoYoqxj4Kkm3VDfmQr7Tv57yzC5FizVXLCmYwrC4JVfYjdAYpX6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuMkjpX2HSXkw6g2EThozCHAMxTTqNkNHg87CDays7i6DHefQViGdsudiCDYBx4ofaUQ66TzufgU1ZEJvZadsaJ",
  "key1": "4xQzJNfiwXVNHQy8WPacHXffkXKEn37VLyadWLx1J185qULuNfPiteSAFkPxUmnyjggf1jyK1dBQ7GU5GEvN92Nq",
  "key2": "2MeBGQrwAJxxeW7bDNYhdBHNViTfnJ7iFtAgNQ72Vao9tcapA1F9d99WcptdypmcR62PQ6QGvYHMcadiQZvCm9Dh",
  "key3": "2RF2FsmKiLTcbboA19niX1EzxcZrtTZF4PcwhNaFV3tEUnKxWhsWm1HXLMBbsLT5ZdbqA7Y365GDRmLhWdxfo6dR",
  "key4": "3t1LHhJnVTZjfoA8WcqitpMKo7UyTkqzvcUBE1TvUBYhXqmB16jv8MYxxfXYkaBPnoTFwz3W3jd3juK8tAANjkyZ",
  "key5": "4EYP2d4armE7APrbkBgcUJQeUmGGEXcPPjGXYytCvEkKPP9WniRYQSrHkQE55MzjhumBcr3cLVEQDjewZDeCPvjy",
  "key6": "5e1HEhWA7LtJ1RCMCB9cDef2ZPXj3UtPNqkEb2dzVPkk8wxooMtG1q4caFRxkgqcBbM9KLCu8baRtfJ3iEdFi1oV",
  "key7": "3XRuB3jFnwwrXqBsGuGrdnJq83LoP3rQ9eHNH2L63QtY4B1wE3xCYpj2kPkDM79GQGYyBPa86kkaXEbs9YdUjkZD",
  "key8": "2NNmvXjvP9jhDq3RAy5adCXNBfYiRRaySfQ6i3UFyVdVPcYHdC5ErxczfzjftrfuJdRMuCquKrHM2xCJKtHpmtVQ",
  "key9": "4nLz5n7YVDCAAKhN6jaofV7A6Sy2sXAwu86xnE4iAeZiGw3c4Ci5LcGTAFRZRbqMBuQaSvxMGy57Jdjpt1p57FzX",
  "key10": "2PwEPaGsz9VFSwV98H3gk7CHGS4V87xFQE4ZqgnG3CLT4eRcwYRfr6hBo8QVLDTwj85Fe9T8XN1sQN3v3riNMEN9",
  "key11": "3XUXjoha6dDSUiF4KkW7ah2xcWZ8VhcCz5THAFC6Ui7rdrwhZtaDaXnnqfVVbSkQMuZdZ46mhHRnFpBq9fmCseNJ",
  "key12": "5gH2Ygo2uwKN5ReCQqJ8d5U5Hoghx2YM9kdj79sE5kJUqFqr2CYfDNZQE9DCHYbN3wRNNZ3bdcYZ6mGAw953MgQs",
  "key13": "2z3cExqfAF8yZdL7oFDXVnEcMNGnJrxsTGoZrhycX387RJY965NHHtq8AHz7rzH5tPXcucYr1uPvXdt95QVjkc5F",
  "key14": "3HAf8RiYRMEHVWbpuksn4fbZtFQ33sEqT58taygDrfi2TGvFBdBboSxwVZUMBGttxTHUdTTcgMm7EaXg9AUgT5jH",
  "key15": "5T2PbmZSyhp6MxqzGLktfv1FqD2ghhqQ7GMvqngwJW8WSaucQWziU2jar5ViSjP7372GSsKzmpBxTrT9JTpeyL8M",
  "key16": "5WMKXQbTEGj9kEXxjuvhQ7cs5GvbtKR8HnNJfjZf2pKv9hV9eT53YEV9PfMEagD5rNrY1LeTmF3nTVZEwVDv5XFj",
  "key17": "sA8wFY4gUBVXtnq2nh8ac6zdQyqWohnxTwQJPLaAi7sHykaLvfgb6QXyX5qSZisAQcrCNvwjL712GkcXk4UkBNn",
  "key18": "NnVQCKW8wPanxhEExPUfssKmLW7JsT828HXgpFF7tkWdGwfhw24DnMUC26RojMWkEGVGfDQT997ADVhva1mrumP",
  "key19": "9tCvU6RCuxrLnWofZ3YRuxj1m6CjEb5N7hZ8LeWu5FoY7e1Qj29PRUepKwaU2jtHvn6DotXNF6DCtqNEg7fBKXG",
  "key20": "A6X52diA9PjugNq1eQZARcGHY56C9cnfWy6t6ygrsESBNFk823GMzE9SZaHdtkULaA5eSuhKFAyjDQZWP2sm1SB",
  "key21": "2ghgaTKFxn3msLFBfrM5cdAvcuPU2ZMTL5KNBZ1ebcaPjrXLBBZ5zvRb8p9uYW1xdV3caJH2qgGqewjF6igfbwfk",
  "key22": "5ALYFRZtZsQd8bVnaHik3YGAjsPmrQzPHQVJNGks77jXeNP3cvUAfJfj2cA4tcyF7mqK3bhCwCDohoWgzMkeRXNR",
  "key23": "5No24U5somfKCyKCZmv88g1w71MZGn2KzsnVJ2abuGrf28Qa2tZZxHYw2tetwnRDvdkavXL5nMmsEzy5xTfAjFKd",
  "key24": "4MtGMpoq1ZKpL45tZxs6Cv9q1AWbxSDPUgCFWZhQ1UY48PTCDFY1MHeCuqz85nxHAPjbKXxm1grUbUY7cTN88vh3",
  "key25": "4cCLFLYavfLPZ3WgBNqovvedRCw18yZkjLwUg12fBeUtdVwSvxVcpZnfyD4b2n3SifDyXhupcLaqeytCtiUZvH2M",
  "key26": "5VNNPBXjbSSAYuzaDEskcDvjSwvnQMNHDLAVbPnBgSabqrmopYiWmyRnppC4y8wogLktNbfmm9V39kjGNNMCSEYP",
  "key27": "2cJ7R4d5vg4eEgNcyeNFkSiQsU2Vv9PsHCa2CMCBMdgEJLs2QJcA1vH1K9BSg4NRmziMcHe1BCwWCu2wmxBzE29Z",
  "key28": "63tidiCtMPqk18Fc1PnQwBzyFb4V9YcZgfGpsbqGXJnJVSiQ5zUYr4G5tYaZxd9pHp9KMeyMYm7WQEu34wRQHKMB",
  "key29": "5WpqqeEfWweYRiGP6ZXyDASkvN3yp7iVb1SgnDqixRrVKty19rSd2LB99XMQbDCmq1SUYZo5M8SjUJy3ScHi1w3P"
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
