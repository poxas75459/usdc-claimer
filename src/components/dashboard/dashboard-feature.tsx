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
    "4pZnEXpW6C6go4qQ4eTrSrQ89YYKFpXawoYzms6nscTJT1EN2fDiCMDrbdLYtW42vLyLkRxA39Pj2huvfasak27v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESokESFgvbby5AB1kTn4GZUVJw55M6azT3rdxuCQGBRtULja3nt8WcddLoZHq6LT1GL4RstyXkLS6nZgkoD6VJB",
  "key1": "2fUTUcxXWXE9UrH7DEbAVeBAFDfPNf7xfyaq2P7MooeYanvDNJQQ8kTv316HdgZw2pUNw4TB5pRqm8HZXqQc5SC8",
  "key2": "2FP8Fb88qZUbNLwQfSuQj7Skg3GM5G9GtQDamiZEzXXxDQt6DuqvJEgzxYaBdiwyeGH8TRCgf8dL2AxTrmYgCDVG",
  "key3": "2tABQ6LrDsYt6tr9edHjXmgYzVZnVKqKkYNWNLx7TCwnJyHKApEeshmrAcZxhysGVYbND59n11AGvJZGLm8fAXru",
  "key4": "32vckd7y1eqjKo17VXYSbkf8ycCmgxdeLDm1AE3Js7MtJrZ6VurbnjaWpLHsTRxSYhmtTX3f8R8fMHsTykozgcMu",
  "key5": "2rJ5GTrFbq9N8efF3syGaaRM8i3eRSyGX8uNg5zhCtf94MPWAWv7eWPWn7NJkYFek552bmqmRRRnbVuuUtGkujSe",
  "key6": "2t8szYPDG3RawnikJwhicTt5qyw5gqpZ2rEFNf5JHj3BJ4QFvVp7wCg1MLAsxW2pqKJJrgMqCmLWvAz8aLSwmg3P",
  "key7": "4Vc8f4akg7U58CUKTr7wvGz7vZ18PgobNFGzfCX6BqY4bq9GRfUocsUyhZyuNy2MVDpve64BoVsBmAMrtAJCme38",
  "key8": "3MKnouegiR8PKoPNkwbzGYWKJL4bBUCi5XTD4saL33Nz6JGESCvAKM16GKVbYfjHQKeiW8DBENH98NgQAmZbePrf",
  "key9": "2C5cEPJrQzaTbQLKhQPZiZK1DdJrWpzx6vq5tA9AauEH57yY77LiygoLqZmsmpuSXmXubgQa5n6eusK61f5pgAW4",
  "key10": "22tGsj9YBFtRYtT7dgnVsS2ddDFWvd2RSXzRiRWRVQRnZecSKqdAc3y8UgG6S34pC1WHKoV4YoG4sSi2UJ4UD5Kf",
  "key11": "5wzsRr5VdvoDh4JAwnxVhQJmfN5JGEbN81AAC7tYLqM66rCQaJYrFc3orLaWguNmPLEAtZLTXvCLT2yu49EHhQ89",
  "key12": "3tWU8sXFDnX78vCpUZBSbm82gPLkan2ACif2G2UzWw5AXvtfxdbtu2g9xt3BaVuwtaBswtTpxRp6UoGxEmKSV9z1",
  "key13": "JSEkBmDyq1JQEVCiMwBSMjdh36xfoq6sm13eiaAjzCCrHv4isi37JCogXJMdTxFi4X5Tc877RDRTHYFdg1obA6M",
  "key14": "4rrEo8CiTwwP89sdPZq8uTbuW79NxDXScuWki7ijM8oF14LqYNRXPvRPfYPBxZ6d2XD2owY8J98hFYfNL288SCxk",
  "key15": "2TRj82aWWurqkbVy57RqH89iLSKNFpw4GtsQhX6fNnaBamfnTJ63gx85qi6qnEPbZ9M9SspYTqvryDBqakyVP67F",
  "key16": "4ArusJhBmbYkBmWdiSzu56qG9GFwJKDf9hLjp9NjnG5WWPzm9cwFBev7yfsCnKUasyD2eNAZL3MrPGKNoJCShLER",
  "key17": "guutQYZX797iuX21EzLpppgwjoqafZtBWLPJpnCy8Thntkh2ovMdvZY9CwjPVXWDeuxb237gj1jsjCjwyjY3SrU",
  "key18": "4MMEDnY155D5FBPeqRyfc1anLk8kWcWPKGUuUoF4FRteZzYRCKTCT4QQHk2JKb69zQYsFQqt2FL7bPzFbS4nVSAu",
  "key19": "L14Tp9VUU2djcDxMsYnRDccrrYkVqHGrDBEdRD6xP5HVbwEWqtDfr69eQ2Nif6Yuk7JAL4w7BNSAgdo3PzXoVjm",
  "key20": "5aAJqrJfS6r1Y719v2rbuyCyp7ppyHKpFozxxv3Lwz9WdYY2bfKBxfBqQCCXXv2L2tRFkAx2wsDxrdPqXThgyFv1",
  "key21": "2SrzCzo7jyz3BPmEPRPenCaxwrSjZE6miCsYFHEnZM3vsgY18YhSVsf7Foc1e2a691VQh726pN7g11ovRHXGJvX1",
  "key22": "5z564maMGbrZRF2RqmfTz832ttM52fLUVC7ELhWPmmeyZaf2JPGCpRBwYe3siLGwr9MnjeDRHQD2vMgf27GSXxZk",
  "key23": "4jVsaUKbpYGm19rUVKM6bsuH55he5T6YxNkHw9MxNooT9nRMDytKx5oanXrsekwxVbzx4me58dkyvfG3d1jxsqhu",
  "key24": "3fpSfuAyF7Q3F1bcQ6EhUXjUKUqCqoK4HhXyhGgEs8h5aJdWPPjLsBNW8AnX71sDMac45qXZKs4yEtSQhMZRB3r9",
  "key25": "3vhs8jS4nHacfVJrzHPWeZn4C33hJVHVmRpTL2LkWoccUBoxsaQfYQoRtuMZEum83WzuKGVGxA7gd9zNpNqYTzH4",
  "key26": "4HkYWSaaNFBu7nGcakXqtVvhG1AnQ9EFZc2i6tMXWyJYRhcdAfdiJAZ4Eb9R4uJ3bKGaUuMqfhEP4YX2XYH5meS",
  "key27": "5VVrojS3b4GeahnrvN892zqWaouoYhctndhHQW1wtnQ7CbnwgnMXkU7fp7kYofMSz37vHhjdfK8dyGQwqGfjrpjQ",
  "key28": "5nAAZ8XpfbmZvvhKRR5Rhc1sVXJZiUWQgLreFCxQPwTp9YtuBcpxkFy7EdbtjEyGgr11EGSy2h48x2fsUtLnSK3U",
  "key29": "2o6opygdTsikBR7qt5VcRg4V6adsxMvE67QSKMNpk4xka8Qa7jJCMvLBh4qti9dYKtX6vqyraoBwLhPBL7zjGLxA",
  "key30": "4hXYJFEnA2Uz34z99QJ3Lxujtu1fsqvH1y6uteie2TTiaofxBagDdcqoM27bVUezfgXjTCcWfrcPQ1Q6hAbMLE13",
  "key31": "2PJiiRWoP757aCqgPRqjtBt9tP2ARwwnzWStfaZh11yQRTqpB8DbPjgP7MV1fazLfUczCVqkBPA4bohrZKVVnBCb",
  "key32": "y3S6K2YiMY5r6BPovhoXoz2FuAB1DhJAjQnKRQae3U6BxHjF9JHENEkPy2JjFTN5MVVNs1DKAV6A7F6xTCZ6qN6",
  "key33": "5mrFV6896WRBHMNGWxDk7z4F5fNSShvbAPnoiBQQLz7CB5mbYWcFxKXtt5HmLDw5uWMqzfnnUiJCvkhBjJeGtiWr",
  "key34": "67XWAV9ikKDZLPMrfaLnYmMp4PC22bAucG83NDAQST6mtSH4M3SQYwUvY3B8nBntmo36UaeM3BRcdeKphoTv6rQH",
  "key35": "8BpVxhNAuw6tHQwn4qaqcBfwyDdFPy2TwoW3cV3ZmkSKgAuXMWxqpnWSiWZ52M97RYhiS2rqjWk1PdwPD69vdiQ",
  "key36": "8o2LfBuDJYBL7KVbnZoZYRMCSqd87xiXBWKQyb541TyMhzfowH2TgjiKvoLDdJQs6VJd5N5XntnhUgnnfkpeWtc",
  "key37": "5F6ihRnjRXToWkZB18J2vYkuhnZLZbsX5MmyUFhE7TqVDcW74yxFFJBSeDjREQVGdWCijXVxhFN2xHDTFNNSsYhp",
  "key38": "3S2Gt7qXrfKmuxkfKK4bGBiobEBX5mgkuFzH5hUKmzBRD7Aj8W2UqNRASqxLwVjttQoktuuXYmPRWuGtaJcAScNW",
  "key39": "2UGzTDBC6X3yHntNxn9poYusBJCuQ7vRJNL2xviHBjiaGJQTEgPL2RpSwDq7mGefU8zACoJUwXhGTxzcmCvXoP1C",
  "key40": "22Ao69H8utbJPKhdacqTjx7nPw9Vk3zL2qSqS8W1Hkh6wNQFxjT2B83kTAtGqv4ABLkEiJteBF2UwdLrsGwwUDi4",
  "key41": "5kic73SpSBXfpnSUXwpC5PkkCCsQ5WCddjVV2TpWtPnkJsKQ5tMPYTSaJ4Hzw66edkQRbH35YEk1UraQ2J7w5UW7"
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
