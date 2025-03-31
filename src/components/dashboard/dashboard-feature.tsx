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
    "THzUsH3S8mkdnzxBpYYeDAU6p77BDfogjbpxKDJ1N12SquLmEQHfN38QwC8YZsgodfaczkCJ4C8Btk9oXP5yBFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3hSMKKySVoqyEyswn1zhQH6HwykrnsCEyhHqN6QnY4kLhBozwCM2SdZNLNqk4uXeZuRSPSUQW1iPCfZQATuxRR",
  "key1": "2MyuDSRmP2CYxk4pM7dbHkuQdbCiYT6mt12KJYfZQ9pAA9GLX44HKjqd1YUMkuhhxnaXkgAAyB6EgV3czwaci2A5",
  "key2": "2U3GQPDjRk7uYtJMEhcEJx2xQFMrWbDZT8FUnfSCJcNYf7uZNyfkqMoNesccbAKaaM5y8ShXgRRJdeTuSqFbn7Px",
  "key3": "2ff7WGYcoz97tJy5k2xbfsuYu9udaoLhsxbVnai7EoDy6LFVfiuUFY4SiGUKQYQPMq1o6aab5i7tXFzaWJeMJsB7",
  "key4": "569N8ZvZHh3oEk5VhWC7Ev2yqkuac6wPR1xAsQ1YSQjYJh4iMmwoBHiPDyPhzTJY5ZTU3DqpvZQK5boYoTsUhYLK",
  "key5": "5WUTCNBhPdgsA3rJ4ubKSG5JpowxjJm61msQbzVYgCb7cT8m5xtm7LXJrFjSSotxaHsoWmjvFUxUe7Gx1Q19rJQn",
  "key6": "4dfdse6KAzXTcphCbsfLpnJAv2yAwoLgozyehdSyhsdrXwPJT5Y4oP6ttEp27fGQUgUfHuYBvaDoNoMtoRMuztFK",
  "key7": "2CfsUGCpei4vTmJ2KaBTgGNLJ5uZYNXnuRfbtMmSC96G4iFcohkKfGBwo9SSuTBXi5Xx29eS6eakNYjWeVV3Z8NM",
  "key8": "2uiNfrfPYJjByrHRRv8RBLWeB9AjCdKwapG4zkPwVB1ZT5sY1AQM77RwEUHc6Xtr7GksebXZjeRtFtpHGC6KjZzw",
  "key9": "qxWbxuoV6eAXfFenzWiVRBt3RD3LsPvS7LaNpKw5HnKdwJMsvouiUGinLvRv1MV3RW27bWvyx4kFwVRoziJn1po",
  "key10": "3A1Sa62BycW9eRwH82Qf7DKKSm6oqM9kENeEgXk8SFhQhFJT5bnA8fEz2D2Kg17AEpyDo42W3QdNRnDDQPqwJNwj",
  "key11": "4JP9Ur7W1cwPAriP1VsaDNkVPsJseG6zum3GKxa9NHVL2CyjZh4XqK8thxUGqmi2vFBi8Fjai6oDuZbA45t1Pxw4",
  "key12": "2yrnP9QKY7gaAZwNY6T11zzUWZ5WHyxzFHGvs6yYkWSnKBJFvuUic9x4GMPSdbX8Pj6neHopeTzaA7QFL64uJUDt",
  "key13": "36jgAyK4bWZo32YWkVUoWumgNxHBcwLEUbEfuDoS88eKpW86NqM3Brva41GC99sPVnhngJgty8MmvQAvXxnwuZtz",
  "key14": "3y1zBpcGiSaG5inRLxwM6YnjNZ34bRGSpdwqtG8zqHN9RzUmScSCd7GneJ1KF8Aht9NcXLMjfQDZPZWAevkrWZe5",
  "key15": "5VdCpT5CKXkQRsFFLayXknZUa5Jsrf9at1F7gorYZQ6VFn9hcQs9paPr14MnH6DFMfTFWgF7LsK26uc1gf6g5GXJ",
  "key16": "2iAqjTaBYH5b3SiPcL5SoFeAmguGUN6hjrkC7HAfv5DbG7fefyhhyY4Y2NCoAizw3tL4beJj6ZL419iGnTojUwaT",
  "key17": "3SjTR6so2asTYGfmqZScvQ6zvqyVacE3vEFXk3DxuuLZF8cqc12tK3ASnEaPJTweZzdxrM5poatovfKDXFvQabGS",
  "key18": "4E4w5xGcCb7WfbKu8ZFFzQkJmeuQmrHVBSQK62pKEJ8DJBMFYBJY7Xea8ynJhJsaQsGGzf8EQJBr1HpdbAvHdo49",
  "key19": "5oqZocw9Lr8u1wjTKQ2NByTcxeZ5d8c1u8whpL6HGbNQLwZFbqjEG2jsiNqmbvUJmenronnKyaTXenqemkHQGyb3",
  "key20": "4eSqKDZxS2gjCUz2uHRoFH1muMSv6MfXssY7FszPBTCsELcfbyG1mhkeNn7VZUaiiA8hbLFQGexQs7AFT2KzebFC",
  "key21": "5Vic7HZePvi4Vn4G9T4KomiceLznuqRhSHs64ogJbga2QGNQykxgbpzFqddt1YFWVBNqtVTCdFTcF4AHGuPCgUeW",
  "key22": "5qa1mNY15dScbgZWPdBrouWXYKtxnd3QtEE85LznDQF3fLFzjBiuUrT3PZEJCVHHahUXzNsZJnCjLogjkPNBYUTM",
  "key23": "5b2yAxekkgU8kC3x2PbG1dbNbxJqRcjC25eJFw9ZkQ3GXgY4Wx3tCzWgfdLqGR4PQwr39Qz9wfgcaKyw94iSupND",
  "key24": "4PtkCKynHVMEKaT3s65z3rfwCfQLv3aXRkpJTH4AGA21jEawRNktREFnir9scVixJQL65fqJNbKuLdwwf6SrXGKJ",
  "key25": "3sRFxtdS7HPxPYxfaXGtZBS91HpueoNtjxPMRy1Hym7HEGEP2781uc7z6wuQfn5VJbJR1WsozvAZi72fBoHUAHYQ",
  "key26": "4fAdJRcij8MTNv7ya9jwvTUusDo6WgxGBBAuEUjSFnrPWFN27j8Rn5SrRsAmySCu6xy4mMfSXBrdRBd4WfUhYNxz",
  "key27": "4iivCsTh4kzyjhtvaRyPQcWBaNuWCFTFb8jsdNiaQyc1vkHaq3oAx2x4TGgZ6KNsCgq3mterx9crcSNWMZS3K2c"
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
