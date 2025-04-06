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
    "3tMhPW2rSwGWjg4xAwgYwZcizCm3T9icXY5VEF3DQG2o25V4Uv3jfr2GUNsh7ZCmygeddD3Ci4TaPuBvwDbuUaz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yb5yt2kcq43Yxx4k8hBdxJqe9gR4XVjqG5pUqW9bhwwREFDdPFFp53obqWS2QmxfakzpoJRHb4WPKpseWzjtf54",
  "key1": "4EEkg5p8Bp2n4c28zWFDJfUWTMknPKjB1pW6GpD6HWZmrFaSteDe8zVb7d2CDcxiWuxk8JqnghRHt6dPz2Eqrk5H",
  "key2": "38DGy8jmVMPzYrgYiJYqFq95x6CZPrxChmGNZmk3zy8nNBaHaUMczUR7QfQK3CKSPV52AtrcPF21j1gcrQjhagAM",
  "key3": "4AWquLKh14ddVguZtJfTbACbL3dVwqSExaAwzYrN5d3WWZ6r9Tc13MgoTk6p7MnGtBQFpJHmkNP4vEPBjRdTD7oF",
  "key4": "2vrha5seUgtEZZiYyfQVFNzP7Y9KueSjXVZ5CFLioGhe3oNpLWc372Xkvax3XBz94hMHurzJeJuGPt4zBAh9s8HA",
  "key5": "2tajuXf78hcD8UJHFkrj5KhcNmZ1wz4uG6wKTdLy1kDHwr2y8crbPF5dpSbrCVxVivhZUvr2ECpWyCutacjp7Rjx",
  "key6": "BxTG23RVNtzdat44EthnaR8k2FvRSiw4XRzuLr8Feci8eKcQc27JTWA7dTxqSSeQQhkgXU7qiWJoUVr8ngk1vKm",
  "key7": "DRfcBEL75MEf2dGwfW1Pw9nna6NQuHJyKrJtqTiv2U7PwmEd7AbP2XE83xMLYvNjgaa2X5wmP38NABFYVEnd8uK",
  "key8": "54ZL8X1BzTJ2ZJ1c7LCbH7o9o47WNFcTouK6TKunozeQBvpLXRzvGFXSwkBTKexsCFT3JhV5rABYfMXMbmcrafy9",
  "key9": "3MgDCuziG9Du19tuydRuNpX1ckjzu9ohG3jqrDXkbtUBAPkVyAjJYmy3voJtgamaHjRCTiWZZUxzTKZwbhq6fGit",
  "key10": "jAkGY4QLPu64THvSPH3DsM4KuNCCFrzVWGbacyQVaoNL2SSttkh7c29Hjzq1ZTP6pMe4K3iFjDnrwhhxA48Y9Wd",
  "key11": "3T28ZN5C7Yc2Z2F6821W7mny5AE56Xw5r44UBDp3FJe87gX2j3DfM5NQtYYEdGFfs9RU1AfnAUdov3HheTx5eYL6",
  "key12": "5EYxqsvJDe5yp2u817sKGYaRthFyoJA9p6itkAzu13armbqnHU4BKZhYx3nzawEYRQeGTWydt4f7mdoDxXDyNU3k",
  "key13": "5eEt5zeV6QfkrPxq8R1hrbgTw4CqNjDSefcefrjTst8v3tPyPCqhahGqm2RuLpZMfdf1xQFMXoGuLqSyNGBHqhQr",
  "key14": "3uP4JRbsrhso4VpHo7MH34hDHvtNicvTndDycRdT3DPv3zyoJ4vebt3h8fk2ArHd2pR94GVw7Q5GHwh3WSqznuic",
  "key15": "4ydv2xtApstkc1AEYhhBoszttG6AC951pmdeqRthrip6DEq1aaDL5TS2wCViG7KWeXYLBJpDdUL5XTV93vPdwKub",
  "key16": "57WVqEweGXhYD9Mjy3ALeAF6bnKwwi9dN7C4cWM94R1R54sF5G8MJrXjs3KKrZmk7jvrZFX9ABZnV4J2eAVRNQT2",
  "key17": "35Y1CEicRt94vNycPeaT4mhfALuY6iikCoTBdxXScXqkuFCTi5MGdmfnbCj3jMLNYqPo96GVACmdmT92kVMgT6aR",
  "key18": "3jtVagRp3te3LiJBJ3ckFef4LVLp7zDUwar3gMwaSfyYj4PPS7wx5ur514Aaztt2VMeiz9ywwHy1Be19NdxY7b93",
  "key19": "2DnqCAF1d8QP5yihQXhEoxAFTzSibGGZMNf22DtRUVctRKsGCpdDgqKJRLSMeafRueLATJLRuUPEix6ipSfAM34w",
  "key20": "4nyuQFJXJZc7MEAk89fishv8ThsB82PP4Q6BivsoEubuTGCHem35PkcXXmRhtnQkzTGZhEmuUfJZAVoThidcmncJ",
  "key21": "25j9J6vG97Z5TMLZxb3CGCh1y49KZCUs7He2SD2Qf8ubDfn1Dv2ZdouVc77jtdHe4qGSGP5Cypv5iyM7xXoM9Log",
  "key22": "3JDrZRuapGqA9z8cHtDnyA3ge85VNVfQyWJjZu9jDd6FhXf7zp6sFMHM6zePPDf88fqPJukDj5V6tE8WzpHtwFp5",
  "key23": "4epTTdDoK28nQDxyPqrqKr3ABDuX4x1y7pr2JDLG8aNTwRg5xai2cnPDVmkRk4gHfeSGF6JQszYhkKET8QzaNVD8",
  "key24": "5zKdXiKGxrRcnK6rm5gBuvp7L2gQjzWJwHWzoRWGpUbBrK7W3KdnpHDdmLh7WymYiU3jANceshj5Bo3TkG3CDrQB",
  "key25": "65pDTq4daLhLcP7H2M8YHdP8cMkeMLsthfcbNVyP3QwPqnJZxkmn34xZvd41RJNqetxVcXkfEkhi1kvGJt2jLXye"
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
