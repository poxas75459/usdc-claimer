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
    "3U2pFLjn55yg5VQzRRDuAZvYbS4R6Kfc3wDRzBk43gJCyUgxtEvYPaSac2nHozUiwA4CfqAqM3mzfv8vvrz9c74s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBcCRCRST52kwC9KEEYoH6Uj8Eg5ZeWMNnebrqkNqZriGSMz9VMSjbnr9KzUkd7goCedBKwnPqxX4ABG9Tq7o3A",
  "key1": "2TGoLwP71ViA2mt8UyMD6DRsaD7fttGTcdv48RvFzYA3EK6zfq5rktGrGd9FhF3JQmjkxoZrGyUdgvd3zSXNv7Bs",
  "key2": "2ferRqwxCP8fc18t2p6RHBdyQPEq373QL88FvW9TwSiteKaxQXCHVEFKGcJNQq2Hjg7JStgkZEeysYBot1LvwPaR",
  "key3": "5EdcrCwcUh2iRUY6Nrk649EU3csZGdzPkFTptoEEehvj8V3efdycbJowk2Ze3oZLdpsAmo1DxtUBpfo2VCE6cZmC",
  "key4": "3xoXwnyX7nP1nE96VbA964m61LRw3G4eN692ofChg2zQHLB78viMjNhpdf7dk1i8QuBH7GQFewY3pNHrcSyAbBKB",
  "key5": "5etvotkSJxzct2ph4NYtKZ72VXJ94mgKNr8XuXcRY1CZCMkuKwLzep6dX1rs4jn3DiMbVWtqGSRg4XJzBLoiTLZ2",
  "key6": "5jX2JUv1VTxgbkE9e2qfUCGVm6VqrjZ1qXkqrS4gWKbjPTF4LqomUfUnxQyn4yad6i6VDpkPSYazR9KG1R5mtA2R",
  "key7": "2joqDUavkdYgqZj2RZS7Z92vKBDDEYTqXTui3dAiShmgLQiLn5hBYAunuDWiJPyzaJycjZRYfVXZnJPsgnDZ5usW",
  "key8": "H7jbGX4JcaBKpuZwki4SSokEsYZCZKp9g1VXksKFQkNaJXaEPdN1fPy9BGfw4KKJ1DeDRmWT3k9Mn1CqdDyRWpj",
  "key9": "6tMshRYXMLszPDHf4LjArPt2JU1yqVkRirxp3KDkK8yV8te2QVc8G8Eqd5qjKCZeMDbdqV554FABVLFo2a26PVo",
  "key10": "3QxreKd1BdYMs9sZ4qnWLvoa3hU9K3Nmm6PwfwpRmv7Mksc51CAraEepiJotjfR6GHa8JBsgLTprEYzExbAooDPW",
  "key11": "5WHabctab4ZW4HbCsXGMLJ3JQUdNdhoScfTB5btuQ1F4j325pqJhU6njBNXswqJC7hihsWaioYEVoFFemRcTobD1",
  "key12": "5YRq94JbpZEBaoBQ4FXExQs4RFsz75N4jHuLDpscWSHKwdaQWknUArxMM512hsBbbYYodcnyTKcBxQfp5MUCdzFw",
  "key13": "2DjW4ZLMUaXcEjD4PTkgNmTVLMfhA6p962M44TG7sX7QBzqWxZFGPAe1TpyVGMqrvc1bei7nZkZUP49TCbPypF9p",
  "key14": "4WfXiMvYNMWGzwNUMf2G69pKyPTMGG8LJF312Sdbtv8GiRLzsx3KvR2EMhZx5nkBfghPTMvYfWfMip1uZsuw3oQe",
  "key15": "SkrTNTMoNWo2e3AUTvoFm6gAkQq1f49MZZ4WRPoQry3rFmXruYFaMUirSJwL6uKTEs2FH5osLJgvbdrhFFt1W2a",
  "key16": "iayRNQTQU9o54gin7hJmifNYKewcTVNcWcQSGykPEYvvNCHDyibUxHN6S8iksT93z8JK6JRpGXAGFVxTTwVBxN5",
  "key17": "2wNSGsxdyZZsfyGcCyw8c6WzG9wtUCx7atMTzJRaRujiXypn6sExd3vxqCZSAaFKNvfsz2xyAjBeYikDavQuhabH",
  "key18": "3LmTruTPhyM9xQkYmzR5rApWFMenDEJzGV6xddPxYqPWoQXgrhcLmXUa9w3tuNCfVJb82g2DN2jXuFnRwYbDdopT",
  "key19": "2oadpzXHbmqp83q9JtM2zPQujLs7wRGBSzY6VXoGPC2w8rXmPHyg35CYCdU8EijwQKyLiMjMPPshmZ1YTBmggewE",
  "key20": "4tqDMebuBdzj4ZytZabBqnYQF2bPVpPTyB94fdajKAXZqunjnvNPBpYbwgvuoDts99tEhny1nUq45ekYYJjiXZCW",
  "key21": "5y9YwAUxUghw4xwuwxQYvxkbVY47w8BSSqeGbdkXZ9YyNQfAVuZzNsyKjQARwrhEuUhJpqsQVnRqXjt8b4svvhxH",
  "key22": "5awkVa6x4ci2v88o6aqGXDcdygDpNQoX91rVt6umUu89sc8omJX5YK6ggtgqHvn3SnoXgLpcSdUZYGmBDYUkM1cn",
  "key23": "3ByEZouhTF1SfwWfYpqrLzrer3jawm7S9Qo42AvujFsmzHVuhpQgmR9AtBEP2TQAr1B6Ygk1zGndbWYeVQRynKcV",
  "key24": "2GPwQq1FAXWcBBfh93CWbDbU3CpShVDxLmcXmGBowMABxZvk8vd259FssBNqV3mo9y62HiMGPAc9ZMAeaxBN1F22",
  "key25": "CjMqugTGLqrXdjCpACgcSyi7dJKAeKcigmpwfsdDWYupX4MvLjm3iPowynFXFPzhRfHGcuJitSf4wKj6Ci3qmLN",
  "key26": "2LCEGFVakKjjyzemadrmnKbeDfGFZXgeVFHrRx7wej3LNohZoUJgNqB2oVwrqX3xmqzsCUuXHRbvroE1PUkss4ze",
  "key27": "29V2ur5jkBK2JFwmkuAqpjBWdjyF81Won4MzxuD2gPMRCSuDuwt5b1AjGM67HZ8sgcv7pGzsz8xYNvXqjUBLc2Ha",
  "key28": "2Fus5ceMTqoML5p5Y821b3KWt5kYHaDTUEBsVanxCx4MDF4ydLChCKaVcyzeiSamb158ezHUJC7y2bXSXV17rcw3",
  "key29": "4D2oBKYHKnBVYao8w2o3VB6tXqWKbD5WPwXyexLHzPXKB1xLbV99qWPmpNN67YGq3TNW2qQp5ANjfrQ1faRXTGpm",
  "key30": "2Gy6fHzTn7DMnfaAAvSvwFvjw9FGTdSKAtwAeiqZTV3khjy93kDnBDi9zuT6KbugkbbYiK4Vif3oAsKecgmX8t2z",
  "key31": "5TyoQBjK7nH2qjGd8YnhFNQfkMK7HDavXUjphwstSEP5SforKQ1Tt4CnaXEDbLqXtGKgXbX97T2dNH1w1yqo1nxS",
  "key32": "4QTXuuM7vEugughd8FduouS5RtzYjooDz8wJ7u3yoMQJ77x4LmbYmeVaDiXD92XKoDxhVRjdqBaATAwCYj47pk8b",
  "key33": "5XVq6MvcYboCaVKWw8oJZxsqAyrH3LGX9o3ZVuL6bBavMe6fRgmYtxhmehwE95GDZ3YKcANQWtnP2U7vhpNpGS64",
  "key34": "4JZ5bPqPLHuLENCHNavEam54gDBzfmdZT134yEyjtQ3MqJ4tane3N94AE7pVaWLmpTkYK4HJmwhku7eAztgQ4p4d",
  "key35": "4ztB91dqNGrhdzWupujrVjgPvkZbPZsy7SMowWFXMwNCAqhNUj3NmD729Zh4Z6gU3gqR3fV1q23ykV5Qday8HLgM",
  "key36": "fhQWZ4aJs4FohxDcXcxvgNBaZrP19nh7pTNG26R2Y3XkPy2oDdTc6sRSwj24QwujiEXc3G6gV4TkwaNwzD6jvtK",
  "key37": "22jqe8zeofdWYgBguH2D1hWbgZqNH3u2pQdCYH1oNf8C61yPLMDL3wrZqvEUWNFQ3aoQySBBemgqtVhox3cWSN78",
  "key38": "6ayraTWKQmgg3teXN9r65m2eZCEsf6YysxQrSaEvfYH31BWmcbqFo9nnFVbe6V5P6cQ9GrZxxExamqQ3aiw88bo",
  "key39": "nTT318oWRRHfwQe5phkmWGbSTYd2GnNBSRS1LoHBs6uKC79WNmvDqZMZh9wvUfavWNJano5ukEsVLcmnn3N85m2"
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
