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
    "2a8Bt1tXWud7AV7AUkuwYz4TtxQQ6XhhPCT3vHXD9BfxvAS1Bgu1DkPLr5NLYYB6bxcsxdThznXXpV2aG6K8hxBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492XZenTyneDS3whQAWYnMD9JxKUt2qa1mVs46XMeuJnspQgiNgtBytAZ9XDoR2ZcTv82LkxyWKPpELsA3n4Hzij",
  "key1": "3bEyMrgNzr7AmWsuHLMDv31YuSeXFuzBs6h6jW83Mm2CzSLgtGfqKfrxTAzL1LE3qJ5Qhtmyjg7Kf2RxSZtnkSK9",
  "key2": "2gKNwXm856o2BNe2zay7J4ZGWbtXxn1c9G7RGN4N128G9pzmPAUSmLuih6MTYfHdinMY4ijNFDyTHDasTprZXVZN",
  "key3": "4P4DV3vvGA6kbcEaNFPfrbczsh5Q9eg13M7v7w8b9ugLTA8krySRR1iLeNhYpXg5XuZF1ZWms197Ap17L5d81znd",
  "key4": "4dFDcGKsHd4BbBhVQHnzUJSvSEo1vhK9d6fUWpJJpcD4PSV9yVHjDhax2K7M5619fyGFFEHWJrn62PQNuuuPndYe",
  "key5": "2ob8CMj8SrohS86hQb5hQbHrts75GdxcdMySmr9tPTy7p7GVxNfBstPRSpbZyu9WsDLgEeyhQVakFDUvGhaXwQFh",
  "key6": "41iunzaW7PdCeES2Mn4odmDZozBPnqtAStKxp2JzwK4kmaF2mT4RaMTt8BcKFM21BDKEcPeg81kWZTMz6zUxuueX",
  "key7": "Vy8zoc3F2HgSX4vhcju6xWAxPoXs6MuCfWY6HdT9E9Ly1Bzx4uNG7Jk8TCpNq6NSWqVUL3n5ViB2wPhma7KU1hv",
  "key8": "41UFDeRhvpAc3HnZJJttKr1yJvK3h5a79TJVbFaGEKhK48f3umkjman2xgvPS265QXsrUcoDCD1MzksTXiteLMtM",
  "key9": "42Bzeord2gPtFinM7yY8HkMMt2hR8HHJibCz1okNV9t98GrFyH27xeMHyR9Qy3kpogrrVRZQKgxqFtDVC9MymDiN",
  "key10": "3q7Z11mGj75dLfUQ9LUj9J9YTaoJPHhdcf9jzsNBGVrrshbn8DDkVPDMY9QcEeRLRBhr357b91qVXTGX7doJEpRH",
  "key11": "2kszQV3XnhMiVCvdQpz1MqVC2pVwLRJVNYVKen9haNed2ZeGkEsJnUFC7KqyK12xfnUwUr9Sdksu8W3dUu37a6fd",
  "key12": "4oqg5r5CSEJWKEfUYivRRb5fvBtFoLEUke4aX6aVphsUbLC3ZW5rDwy49zjr6fASm9s7mhuMrNMcZJdhxM65SNzb",
  "key13": "4LMYQdfkZ5Gz1fyN91d7v5q2NS3Rr54RHMdRqtBWba9T3UJhAaFVWGfatgPExjv9p2G17y59zGX5rgDSPUNjTKKV",
  "key14": "57TgZSCeU1Y4NGHqs5CWdjX8tZbfD9EUSNARcp1QipJEUP1xJgWnH6SunjR7acqNeNqrUMA5qjDza2hGUTSTpdew",
  "key15": "3Ejc5quozevFvmiKn8ExKRUCYngjNzKE9aTAwCh28qNQw2xwgnPMaC3DzqxZMRGtqk6FuyUX57H14qzsVx8y4xH5",
  "key16": "5FMv7uV3SnxgMwhsd1TryMTSRAKKb2kybEwdcZE1C8L7CgAgVtR5JLpnCY3xbZLJygpgpUTEo758NJHAsYLD8DTH",
  "key17": "5doXn6zCS3VpEx2buNoa5EPCQSPi26QY7KuQwVVtNb63E1vmqwgXW1r8bbhMuvqS2c4h3MwLyNhgye726v3mkffy",
  "key18": "4MWdsfqss71eyXBnQ9hv1f9SrjGDfWP67Hv2nh65kWydj8RGdqJMMHkTwN2yTziukTRyu2gcHaTAqz1KHDrMZf9S",
  "key19": "n6dJn2egbV6SaDnHUzbLYTFQcyeqDG6K2QifbNXn2CJaAHxGx85qd6Tn6hYttoJkoWJ6r3ptbq6651LmPb9eQfc",
  "key20": "2NWQR8PQ36v8fybQVLNx1f4KmN7va2b9fwXYEuSdbMzo9a2rgKxeiWnnxAroJULcnJDRyy8p1BichvpxmAF1dQwF",
  "key21": "4pLBAFMugBM8XZ9gD39rhW5DrKPnM5ZYahGLnb1ma86cfX9oN6SgNfAazBgRVNZqFrfzJb7SURmhukDXaeydUTSK",
  "key22": "3dRLK5xQisgb2dffZazyphRtexVXzANdFzmTYNHCyquNmH4vVmcvnoY3KA27pvLmowL49r1WbESUft6aFfa6cUbp",
  "key23": "33G2vi53mUFJohHAK34kG33jDFKLJipZ7WbFX6zq2JVpbtDrfuUE4qVNWuSRLNnfEkgBgcwq1tPBzZFBjyfPdGBJ",
  "key24": "h6ysU2KpXLPHeY7s229krDPXgCMfdenuE2baZ6gnEbYBXN5VzZjwcLtKPwG36rrokXhsE6XTuBj6kwjcLKi4PBj",
  "key25": "2GpuyuDMnDKWguVHibcPffESXup6ofmyLFytmw7QHqRtJHEGAcPL3nyDdrJiX4E61q4xEzsSwnqUE6sJeyEhgh1a",
  "key26": "69e6SNCEdFLQ8bbgKPTFpfdGUGDFYir3FSQ12qpSvPNMSF2NwU52Ya6i1S37pa5uVcwbtBVjUdb2f7JQ7aTSHDi",
  "key27": "4W5ZDWppmfYkqYNRD6CQ6PThKiNQPZnq2sz5BGuhgxTEVJubwk5cgBeEFWjz8TdbRTD6PKDoM7W2STzwJREPscGg",
  "key28": "3yRWFfjbXFhijCYfTPezb19ZEZpnyW853qi5YLetRxUiQNGEMv84Tp4uSsUxJxswVrTSVR2AM61ic3RDTBDNJ5xX",
  "key29": "5q76aoHPZjHmBejiwCTQahg4qUB6eTpBnQaQQgLWwksHCUv3GpoAZGHiyrXPNM6VmFkLtRXBciptiC9o2pSnVZBu",
  "key30": "4Lm4XagBGRf3yiMGBKAjWRgRMvtm2hxaGsqDkrgq5G9zoKcckDf5PBLbwE1Qu8ZfRgMoVmZ5rK8LBt6zDuaYmCFa"
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
