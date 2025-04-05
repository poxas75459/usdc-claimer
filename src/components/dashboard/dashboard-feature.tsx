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
    "4uLS8QLNxXgbq8tjw7z4zTzmg1jpE3SHKBEnqYdxM9JYq6zQhpoa7PcuPidfBXtm5cDfPJ7SiFM78tXJbhCmisbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M2pN8kFouuKsdJjYSxhc4m4PwhH2S8McM8nrXzifBt1K8YcgyiX5iiskEKdQuXt2JbmVisRoV51ULy5XjVNtui5",
  "key1": "28wxsHZw9BhtethfZfkUa7cWvTPwMazSe6GMUp9u5V7T8vBqQe2ToNPt5nUTcTfosMRYQ7ZhuGcK437fYJksd8UQ",
  "key2": "3HfzeYjkgSRA4o34yELKciCxCwwdYuS2gubnG3ZfeJzHTPDsvJmodHfjycrxbTa1poN3JFujZYZf9fJ2JPpqMMP2",
  "key3": "53Njc8rzVzRfb9xbQLeQxysy82kxnBMeX2YkkWNMd1E7t8AEqcZNv6hB9FWmPpMRRG1HvTz5HyfXvNDzqikXnuRz",
  "key4": "4H1hMfdWERxpkCnje2RDtsm9tB7yVAdmYSHLdRVFcXKoCqJNAHiePs3RLx3a7iK4oJJG6KgskkwxSTskd46iWJ5N",
  "key5": "4jkTvDTQzLZuRDA2ERXYTeZcadyrSjFxwaTBwkPEYBws7ojKaW79nV6zfhuXVV5U2t9ejWURkYoXcj7nyP5gREQn",
  "key6": "4J2GrFrwP1SazwQj8AgnRxkiVcrvfBm1i8koyEvYkPvZym9NWgV7RmN6XUSLpuKCd73XSy8Xh6cQjqVX3YCXUHV1",
  "key7": "zFCPyx1E6eMQsxc5cAGM5GBazPJzBj8uRy1kQ7UUuUuuBU3u5RNkH1LKDgiP3QaJ77GGpBvkviF2TvEaRZiKKUu",
  "key8": "5mh6mC1tgrgUMiP5Q45gxKKKSH8c721fJxkhgYw3H8bDsD2CFogP7wj9RZSbmTubaG4vArJwkyqeM4ENWDPFo2S4",
  "key9": "62AFsEkfg75mEQXacZw7VxeU5AAq5S5ZD7xYCxEdNCWVUXJRxtjhSH7biz8S8YU6KRpiHbdtUmzbwE2bKMqQVTN",
  "key10": "5e5sG31UcqRQTnwG5TxXohXHUeb3tegNEU5YnWcLes23rL88jcyoanjdsPKrroBJpNHV2qHQoPg3qRaN7mPsezUa",
  "key11": "3YU9XYB9hPVm1znatgmfhmpRfjuqcTmBrwzGmwsUwcQ2NxZqKpu8P9L7uPEtY9iTmr7MqnF2mmfWqTqsPavKDj6J",
  "key12": "2E6fdRorRDUxetyw42sY8SbKoVFPRXxXHzZY4xWvBiQqN4uziXffHT94AiEBUAeR29D5gSU29HsxCXn2MkRHhb2P",
  "key13": "4fwrJTcoGLf7Df2oUcotqyDDWW4AxZVQmwqXGWPnEuyzm6SSQBVA1VFaZ5ta9zCWDXgVTAGEdqrLMbGVpDQ8cSE7",
  "key14": "DpkTMf4CVtRDiA6Zaia6yoKcHQYrzvdyyQ6rAphTKUZ8AD3DJFhBG3jmxjWatTFSZ4wfK4fVzTbhYVeL3NhMMFi",
  "key15": "3p6yHPoSmTp3mo6G2WDbJKJhhjcuuENvyFsSe18bkEGS82Xfmx8d6P2sRfG3ja9v2JrHWq8bTzWnT1MQwMecoRnb",
  "key16": "26AMqqDmHfmYRjiwqwhmhKebumpXByWoB812z79rL5ZpM76YZtxys8RnnxPkTCDqJZiWr1kzjwQFcP3Kj4684Ti1",
  "key17": "3cvqhhVov84WLpLtmdtWeZAp9qKogyZL5qZd8PxtJdhtzAfj855ERjm9E2Zi6NMFyhBwzN7S3vNvBM9RXzBD4Ugd",
  "key18": "5hLShceW7EoLYVAfgHdfx9oF9aaf8q5jWmDV8hTwMmy1NHN3BLpZeszt1uXtdGiZ1RGhYZZ8bbhZxLhXxbYmhueQ",
  "key19": "E7iA2bndVdoCPSWpjtq91q6unJFzGbC3XhMdM7y6BDd1XD49ANPW58J2BD15BEd1RUoPJZJvfMBJcnE8LMAoEr8",
  "key20": "2C6gE83dCM9XP1Nm4GUfFxWUq9qsViM1ZcNfLjtsaQgHmSMsuoz3LDAY9tNEF7xF37gzyaehEQFgFeAMwtnetf67",
  "key21": "4AWJv4LsSY4tWP2NZP7B5eLLc9N7o5PjYJsvGfX2i4W7X377iKdhG7EhmvBLDHJgVgNvYHZcyzHGhWEuhjHkvJwN",
  "key22": "2bL3h5vLmrvJDaheoaZWn5HbgpsH49CUwx3F4dVsXo6Rq9qSCDrZ8Yomc68XCKgLoCw9nQL5WJBNtkNtHMCfSgxU",
  "key23": "tU74DEHFZxwP55esQV7spEMs2CFxnLZcW8sJijKWY8qeseZReHZyq7fJubuhH3nRb3uGxVPsudW1sTb8rjuERyC",
  "key24": "3j8XXVfyLbiGkLbnBUCeFvnLhLmUxCCgFZCNTx98m7qxGqvDy6gb2uGriKTQm7KsGsUaJNVQC8JLb3kpNVbVhXve",
  "key25": "n71eYSfa2cRrjhPwLxurFMZvH2CJhJvv7T23EcDBsEyFNkwdEzH2pDJHYMHPj3b3nk1RtLxamRm9Z5kKm9d6EqQ",
  "key26": "3yckod4mrLDEuB42JgJxchrFLc4wnD4SWWUQY9zVgsFV8X4NxbDXhyEosJkWtaqci1eQFATb7n2ZmAWKZEEzGUmD",
  "key27": "dAe54uv13ZJ4LyRTHq6oYSGcn1w4Edzx26nZtUQAfQchTFHXqJDCE9s3gF3QpgQ58HRtaMpVwyaMQDd7WhriNXe",
  "key28": "ssns8VxBeZEtPRCWwyvd3PEZXZ7LPiP5ZFHP4Yqqn6JXiLtdkYieiKe25ats3MPhVf3BDcSM68Xg4aWbcvtw6M6",
  "key29": "2YpJpH9imCgoDPuFwT2UtgAVo19QMdTiZ5nDvmGngdqjFb6tYXEKayR76m2zUsdodinWNTir3soYFCHhyBD1RaXj",
  "key30": "5KmwUGcNPhnFTVWvRQLT5aFj1waiQXUS7R4ykJ1ptPin13yECVxUh8NgqjAMAqwiFMXhLmaJwzHzVEX9XAqkg1hy",
  "key31": "2U8DwN9JB8zpbvfVu7crxQ9pSYBNBHv9FSuVASWdR9BU4HQeRvTkqT357HbWV2Fp14p4eZMxs6zNeTfZtwbSykcS",
  "key32": "4mEuW91rVBWVRFtwtQXjUE97EQr9mBz59zGCjGhtN7q44jPGwaEETs9rx7xKLj3Nexj18A4SM4TeimKtxbPXQjmK",
  "key33": "43qyTKore3bGTPzRSwReMWtkxaYaaVhwspVQyfNqk1cCHbWSPy1VxuwzZWipVvB72uYkSJUFcgL9g8Qh1QoULN5V",
  "key34": "K49fuae2szFaSRrLiGvdcGXKQeHHKJMDdQCtAE7mcRgR7CiV1rizrGMgx8y5yiddyivyXKF1299pdUxajsRC3NE",
  "key35": "4GEGjAjcogVfPcRwpoCggLR5UaAc8BPPyiL9uKTMEL7SYe5wsryQWYMvd2yzLZAsUYgfqq7uZ2EaAGtkUY6cCTqP",
  "key36": "2x1f24cU3LXSs8Z83oJ7xgg7Z831mGvQeAUndsRsRp4eLJjKtbkwEyK7U1a7udsCr1fhmBWLaJGqnffauf35seLP",
  "key37": "4CDXwYjN18z5iHHaNEKQSWFHPSV9ASNLPXkw4yZrQK3Uuch1vtW39arEydyvhdKXnc2RwmAj2MWf56Es5pXt58cv",
  "key38": "nHE8NGjnDVdQybFDxvtKwYve4b27ZhWP2EwNJ7xubriBikTnQ3wAyUeKRR3XcXRvHx7iMj3zakGZq9ZpHV4CEa5",
  "key39": "5g4CdiQbZU91yzrY5CxvrJiYQC5idjFjdsRa69rqEsKLT7Jztdp6VrRDBbz2vR1KiBoMbDz2mC7cJ34W1B9n9FuF",
  "key40": "4HfUdtU43UPnFxNFUU6Wv9TErJMFAEyV4nP5aihqNkH4bs71NNDi4CThkg6Wri67sYidbFEVU6JA2yPvATm4HM4K"
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
