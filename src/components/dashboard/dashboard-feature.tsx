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
    "2NGgpFqKjSpWuCMG6rvCiTxmHnWPv1RPLy6MScUR8ou2iohk8sHgipM66S8FdZkYpvMCCCMYyUiSVKYBeRMdrNCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBJFCUKXEh5dN57E9J2X1rqxFLtGy9iTEtrafFxBpVn5MTUwndyk4Cbbd7GUFtthVRKUCU8Wq78u58VngoKKUwj",
  "key1": "21S9nyAaTzp4Y5qyft3KStvNy1yQhWGqY1wcGM3Epxf9R3QN9j3CLc5zcWqPJLTh4cTSZtH2JixM7vZqZwDTK3VG",
  "key2": "5M33gnNZUAYmjA12YT4WZTePAkbYwqut9bK8mSLxMnQooraR4AAi97xtzZP5Zcm4fE8XvaNpeXetDJfi7bo2EGBV",
  "key3": "231JJfhgEyiRScaYkfuPzzSGTpXkQZWGsanma5Wb8mq19bXsjRgcTKUxLsmcjfg4nNnLAPWW86fdbkERN5byTLwq",
  "key4": "BN5GxEiVY5ubYXYnYUraNNNCVJPzL3U5diGzea3sMSqVfd28do64QyxHP3tWem1FQRD5K8W27uN6JVbDPWS8iMJ",
  "key5": "uN6BxkJzkJw8ptSdqZ3qSc8tkQKveTwCDYfaBG96n7HYAkDCGFkprQT19sXpbMuLjv4X2N29HAjJTKeDk9CYxtZ",
  "key6": "3JwgzbuMbBoYu9g2W3niNCDCpS3SBHYh2PiJf8D83QNUvk5KgBPpF2uiJWbwixgAhY4S3XPMa3LcHNpbCPSMAkQm",
  "key7": "aqAVrjLdpREASg7rDd9Bdf6GhHbv65q6pngL4FK2noWPierDowjsZwREWBwbj79WYcMdvHXmwa8nbyVgtiERvii",
  "key8": "56U2doAPZaa7kq2YMg3Ww3UMxGkM9VGV9LvXRnEqLJjVkZKrSCtUmtKKgZuw5EKN5idCQqEVzPqQkZe6jh3SF8K4",
  "key9": "26UCu5YDX6K4jY2x22P9xJWkBcRRjZUHMWyQJD2FtE3V1bd2iVmgqmiamAHica2qBR4Bf8X5UrcWJSB31E3DD99j",
  "key10": "35ftHJcgyYm9Fox89E9aJnhK59VsmEbnnkuoyuFtYsyzGC7DXrnFQ3eeUdBnyrCsGgdUjK13qSwTY5YdZKM7gJr3",
  "key11": "4g1BycceMaxyCPDuWKjejanBYHTPQ8qcxgDDUkUtvdSMNwzTPimZ4Ao6epBuDWJVyF2wX326Aq2PXGS1jawYBz31",
  "key12": "2bytW2KQSMe4tthxjwo2pJM47kdQxSspdsqvqbiAungmpbHucUKSaMYpEpxf81GFwjh2Y3kKGXK4XPaLHqbtKQAM",
  "key13": "4sn155PUi15mqshKtNHBZFTGLup25Uc3X5x8QYCPzDSM33nbLSkWuU28tZbCSdedpusP7cAnkK1uLUjGt1PuYmv1",
  "key14": "4eiE5QWsiKkf6kHQYVj2hnh1CKbuXKiu5cHuAgvXR4FK8cLLuZeZ2wT3DqcWm13Z6EhpEA97Y1wzCAwGi1Q4rzbc",
  "key15": "3ouQufvjehzZcuTtNpfEDJpHPgNT4hb6N1pukYt1kJtnR1Pve6B34MYHMsPyhdTLgdDyBEG3SosbcMVcjLDMwhdd",
  "key16": "6mp68MPbidH1YqiayjUjpcA8sQ6LbspJSPZ5PxMcB9mw1DRbHfyEaFAAS4QLETTKsiVRMqj4w9St8ujtngm2NjA",
  "key17": "3SxfcGvXTu46z77rThBq8HmqPT7EATGznYS18zuwCFQAy9r3w4778LCTPDGC2nTB7rM4tKpb9wJcx6r1LBexug7C",
  "key18": "4KckoNFficJsTfSGmyrzBZrkrW1NHqnzJAGbfvLDtivf7wQ7YYs6fjSMFK3w1Cr2vXcU6ycFZz6EUGWi1eb2HXRx",
  "key19": "Pn7LQa55TyW7msXK3N4ne4nSTf8x5HefnrNHB4YiqtXzaHB6MzkW9qcxKb63Dru3jC94j6YvPKbNVov5dxPA82r",
  "key20": "2JPWFdHN3i3iQ9F7sGEfT4xsUXmo6DynjF2CRyQTX9DT7QETngbaQ6TKonLatYGyhJUpsCzsUDAUBsJCow3b2hCV",
  "key21": "4MxTpHrXWQeupe7srJZ9hmp6ZsFriZc2ynikpVTrfp7fFe1JKUDHp9uM4WyFxTCqr6eE1P86HhmddouGcJD8eDfR",
  "key22": "3a4o6TpzMzQfv5PKtWebtwAwLU2yQn2jXX5XSEYhPU7qDakepxxE8A5VeQbMtGvRTdCmZST139iW6atjtGuNUBN1",
  "key23": "2Z3NJKkhB5cXjyo9Ss6FNySNm4HDFPbquwi9r22BjvLiw8djRgfw32biPmJF53PNz8h6T5FNrsUNbd9Pp4KtHLct",
  "key24": "4z8LWDG9AffWdFL2Qt18QiS2gjYmrLYgwdeWtsCDUcyyidLfsM8KDe22EMo2ELvBXGUwRKwJ6sxZSANQFbbW1KJo",
  "key25": "4QedvdRXQLnKa93vNshpHcpWAUFuGhHFh8diVHaMVGpjJZtMbBWwGDK7f3Zd1veGyF6icMzm34W6G68MV8SmcZJe",
  "key26": "4vCbcVvDd6KKwmgG1VRzUBiQ5Zai1bnezXHbyoUta9CQuBgAti5qFEV6rcQ29auoH8HqnE9NN1jRjnJcvxqTpFW5",
  "key27": "3RHboZK9NxZzf4Ehv3A6xtWMSv2UMF1RjAJad2s9DCNNYxwWLnQEeVzxFLvHThVM5XCFWtUiMGUwtPACEgF7uvu3",
  "key28": "5Pdy8XDkHApPZskBB58QKQfX65dQcobUKe3Ta9r5mb4oGJfw1C37Bhc5KLjRVZQukebXqfvJTftEcvg9RNGnc8zM",
  "key29": "2WN5EssCg2wffdNzY3bqFnmpeANTrMFCvNLygonyi5PEWBv3MLCEEu2sMq8KLN8B3U5oQp7eZHfoNDdq4qQCCxrC",
  "key30": "3KQn1WBE4QR7DSUmqm5wFTKwB3yWzmkMkZKXjie1VB4xiXDZdQsmzAtGAnu9T3yHpb8HWe7nrK8LMixVgdPcrBha",
  "key31": "no4WypkHymR2K1h6k9RBXkAAy74jiBuKpaeewPHaKzZF1zpFAJJEZRnUcngbpMWHBvJ6QbhW79M9ekSDVWT4MSA",
  "key32": "3QbJJXaz651mtwx2XZiUv29G7smMJRv2TgrdyhX3CaD9YZq5PCrcvShy1LbRuaRQYTQLCmqSj5n6KyWbXi8uWSfv",
  "key33": "2iaSnjyv6PUsDNEUfvTxbPua53tNPAjS597AC8xKoUEFGo3UnW9qrEKQKgkYGjhJP8dXcy5pyCJbqVr5NH2q1BYG",
  "key34": "3G6exKZGwxFWqgqa9dBEy9KMNDJfe4hMeF83nKhTA2ShtFan6D3EXjCUT7RsQ1BkYfwmJp6betzsw3APTjEypXTh"
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
