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
    "5FA7FvZ2162cbp9KLbBVW65PHmkMS7XvEGT6x2do3zQ9insGLANJQ1Cv3wtx57q9ZKtfdRWQ1psrTzW6Dc55txLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lmpdog1ARD6ZbxcCsQLRUzATfQc9cKXBKZBzPKFqxmf9LeiNdyYwc31CTVAE9M8aYfRMCkbBkJZutudxDAMMBGK",
  "key1": "ajWko47jYMioxZNJjmYiFKnMBwBFwb62SUaApaz8CNn1mu4Emtxhaf3m7NWFdP5CRCcju1MVt93gAaefZXrijGj",
  "key2": "JFQJijQj1oVmxcUbtD4oaVPSse9uHUY9Je5c6xNfzmxzm55Cd71nntSTsUSs9yUD4iV5vHsT6eDvNhZTnRDSViw",
  "key3": "22Y1esPfArXPsqThE3pX7ei5wYoAUfzXkh68D9Q7HnuQdFPigzisSvvtbxmFeMv6jWyStzH55FaFHEYZB7RjzFWs",
  "key4": "3v8SkJYkKwFDM3PHmvxyFGxng6wg2W8CXaHS1DZeq7H6oAwkXd8TihJpUXHbfPcWwvotsRemFP3zLxh2KYDyNkh4",
  "key5": "3MHDX9Y9dbSAmwW32U2SvrwemHv2RrH5qEvUxTon2AVoQYTZcndw6MPM1mfoVuk9CiykyR4TWyr37rjMoTVPEWV1",
  "key6": "4dzwvasQSAkPVb2qm11NSicUfVxAyoB3iLibuK3Q4qwpJLuCMrBqoyBAhLUD9YLKHV1fTrnJDFAnMcLzMAh4Ut2P",
  "key7": "khmTwDR3nNVhLxj9M9eixqLnvrZZp7wJtuhKbHbpaiSpUCrXHURqUCDQYa8bfjRse8Nq2oLJ3dX7WS9f4fAr7AV",
  "key8": "pryDFdQZzm9wqM7HLDaF9vt6yNSe45TgrwCConEKWj6fBGtdCRP2kfuajSqfYuMJ2f2i1aGoovGFYwkKenum3kp",
  "key9": "3MBSfLEk3PkMgABRJxe5ea1hCHPYac2WMdCRzbjsWamtXUS86YniqsyCmyY7rRaRy2ET99W7QJEW4KyKQniZkFUX",
  "key10": "PkwSJNEfftA3jLfyJp4wBGhmM8vWbtXvH2PBk6LByvUSFWH1oW3QTsLL1th58Ea43buL76EfpqcWGvfJzeWu3uq",
  "key11": "3jgWWayZ71URXn5D3UtV3GTA4bmD16NvqhcFfqw82SViszg2N8JdHXCVajGb8i2vifq7Qabe8wAcSJEeSVX4P2tS",
  "key12": "4acKUqueBFcVj2anCcPfJmdi2V6dcRPYbNcz9y2xTdqXeqoAPTQUPjXzneH2oWfPZFApwBNWmzyL74X5fk13AyyB",
  "key13": "4UpHVjbfeHyGsPzbMrXGiYBGG7w6o2WudbeDBdA13RUQvGkJG2kAieHfeo3WsWuQDm6yehHFFPvq7x46YZQiyQ1b",
  "key14": "3smNQ5rsy12rwEgksGGYmtJnSDZqAiNWqywg7goStLmb4h18J7bNqFs17PEdfS6YLYK2WpMG5JC7Hk4QkdePpGfL",
  "key15": "2oy9TUSE7hVhfS8fg1Co3KBUNRvAVw69TLaqDyURSpFAPRUGYryjF2WjU9oMPdvr72gvgzWC4BCMeeQDpLN2yFE2",
  "key16": "34MQSXQzNuCUK23hznsHXCU2PwgdBkmLUEdJuUPfX529vEqpTX81NTTKw9kzur3fKzQNJArqxTnjAvJhZp3cnRBL",
  "key17": "3bHQRaLheFNSrhQNQKRWJKcAYTHxkp7mDZc4sC53y5gjNTgVenwukF8uGaVUyp78NQBAcLP5dX4V4gxqn55qfPjh",
  "key18": "z2Xg1hjx3D3ooHnZuxg53vXN1viWzEHL4PEi7WmZ8JLTcNdyVLsJAsv6mnJ7SwYe3PtitCr5prmKqCL6LoZepyw",
  "key19": "5qG1aMDWKgwNvtm72xNxAztxUT3WDT1UHGMX4sDRF2kmsFdrPmdAx3oX44z3UDPSN2roSrxKUKYcLq9s2ray4mV1",
  "key20": "68D6EwMEio4LzCgeoABhgLL4B5rqEJ9ERYcnWfBDqA34HyapqBUH3ezH3sofmCgGpYCL8E7NKQhsrspw7BCEGYw",
  "key21": "4AR6z2cfyiydhYYcYq5nDktP2Cy3tWTRRTAxBVnCs3TQbJznwbsbhq4XHn6MtjYVAz7GCPYZZMQcyBrP6GW6BCm9",
  "key22": "4Wx1DGK8tG3GCPkCNtW8KhdAuFwBjv1oGNCUiVdy73UsD6EKKGcfg1axnJojPVHxyWgeU1do1QEngHkG2g9nMkye",
  "key23": "JRXrE3SvtaH2nuRDjkAFSeuqVADsyATRNNXRekDTJAk2rBtw5sYH2VPXsuXc7QcvbB4rnj9kmSRiBfjvK6nUkf6",
  "key24": "uQrhk1KqZfTzgxhvqqtFokRdCg5zjQcfRVptNm1a7KjS2nft2ZFVa4pYgB8CeD9YKTvi59vT8U9MvY3yWT11HzE",
  "key25": "2eWcKbQFVyEPAZJaNwhN6XYk7jExv7zk5S2WYsTGycVfXRtXqxMyk4RFEs896TStd7t15WB1gYpqdrMWTYgX8FDF"
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
