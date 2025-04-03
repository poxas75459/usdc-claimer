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
    "S56Zpn4jgZAQwpLENJPzaVLEesXxVU7z7wqCwp7xL6Lrgo5jSBjBonkDjeR5PwXvvQQV3dEJ8LnXeewqyf4iAE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTU7x6xVr9exhcUPfJ4aE3y4V7zbCNjkskPabbEAWfU2sgX4XSgU99oGeADvSGCtXkKtw5ScdMAxnRCq7LcZvpW",
  "key1": "3iut6DT61PDVvFW8UYRky6WJRqH9THvSAkbthVm1SsWmt4xzgcoADA9ENhSwY7fzVjv4TR5vFBKD7RkeaqcgXLx3",
  "key2": "4NT9JDkB3ghCcengVGZdabqmivrBUFo3KweYfVvtYKf6vnqQ8q5tdjuurqtQmrN9YqmkoyzKPkKwaWPecZNrVdiP",
  "key3": "53SLAS7ZwcajwkmZwnUkmDSdacoi5RHFPJ1YYDoFj6mCRTFF16pQaFbuGPCXK1BWxBSoDqp9wpD9GQdoMYPJQiFv",
  "key4": "547fH1i2rw3CBQujpUjCd4eba9Hznd4W4ohpG37rQTt7PLbaiVDdNx6Sg5Wig18Hqxmem6mfqSxr81JkmGu8WzMq",
  "key5": "5pxVr2rEKkDDBoDG9Cv2rQ4wYojGpnNTXsAZ7gZnCJpbjD54UhSyBdwAot3tt5zKPSiLdrYxnBkPZi8AdMHiF2d2",
  "key6": "3CNqerJx9hGXSDL3uHsnmF7p2CaBkYttbWDZCLMdx2MQQotxdbVCG2SUDxVMnRoMMPXmiaGBskY75AWDqghFsS33",
  "key7": "64uyacv6baAAy6piUYcRuN2e9cWDqP8X4BjqrCMUvE2xGP8sPKhfEERz8ZioYWAeMarSQBfqdnvEdtgYGMGizNBo",
  "key8": "2L35mjzuFCjBUXVZUc4VVjEBZ1vZB2zwLBvffaDpdheummgarnWuVDh2SBvDMQfgz1zaet5c9BZsR4TStPhvxR9u",
  "key9": "5K3BR3cuKVfNyJAWCrw92F34suHRpvWcXqibiPQQUNp8PutsGeYeeqtTBSQYyXYo12X7k4ddpDcjPwjVwPvNAaGY",
  "key10": "3DdZjp7QSGE1rwunj5GDZgcTU7zisZQXA2F66sUz6h4CQA5zTLN3MFZfuPKdHfrdfVJ8E9VXk2R67fCRF2TkT3b1",
  "key11": "aeTnBivwvU4icGNXAxDarShzGrQh83jHr7Z5b6YEtQbDXC7xVdNXL97SeZMeXAZoiriut2oM7GAcFtNFVLWSP2m",
  "key12": "4UNwPHZQtm2TQDE9UsqJCUG6M9dFTi2c5QhnYNNi9AMHBeNdNN3Sx9PKbw49sBhbZ1dRyVtvzRXQzXC8rmcXLtU8",
  "key13": "2gpjPazMNt23YaLyZM64XHL1XN9pWjpeZskPDCZrQFSKoBjdRFUAW9LpyE1skCduTJptakxnMwxvNYWV5Z6s7FFQ",
  "key14": "s9f3CfYz8B8BBRQskWywTdfA7eAcAhwxoEDmsBZzzfeeiR5u2ve6apdtW5pZRXUPjsVuo78m1CLMB55UECfiShH",
  "key15": "29fs7XxjwVXYsgPZyHj41r7hXwGK7TcwGFZzhYEv8S7Nar5mTaJiDWUF7HNeugiFoxSi5EprWtTWC9t3136zozzA",
  "key16": "4QtYKaN9GUthuoQ3tNdRkEbNBhtTKmdBpVZyLKAbz87PyeK4goDzmGHjBrDJzAdEkCPZ2o5q8i7LpDCAjTqAvPhh",
  "key17": "5hHG6RoCeVqZjQrrLTZRDTpGTKHEoLnLhCGWcto61gbJjBenC8CTbRGXbm3WEjNVoXo3rTZfGg68qQsh4WXafvh5",
  "key18": "4GKTEdMtmx6hQRYzdDwKvN6KzoKbRHdf7v9DL9osFPe2FUtjmyfNY4oTspjicNuBtC18wSiuQ76eypFMZvf6h3UL",
  "key19": "4QZhKGksjsvT6sDdez9YaDW1ByRQXpcqTCMH1rw5WbCGriiWgxKLesT1toho6t2HvLoEx8ADJbGNNjkx9MQyTTkp",
  "key20": "2pA6yPgE7GfpRGW8BALRPwqsRv6cwzXJdGupBR7bPu84zV8WBYzpzy3jmF87HSwJzRiz6GmFupKk5HQ1dszrkg5B",
  "key21": "66396hAz7V1j23tkLXYNcUjSBf7rKbpdC3XJPZvEAbEN6kEAw7twZzHGxZCxPKy62K1ueep3yrsBvo2h972JP8Co",
  "key22": "2EQLuronCW21AX94vRgVFcfXJktjrSasePctQbByy4nBdZv3tPmAtyVyGJ284kBo31GdcSpEx5xhqYwQLt4wVJcq",
  "key23": "5NaLqB9pWqqrdh8MRvhcph5n3KbpE8Gim3bjSy4SNqshRm9ZENd1xHWsU76z7EPuPbHGR8ERDFsmNQdZyZhqQzCV",
  "key24": "5qVRMVio9Yunb27RtrNHKpHrGLgdDspCoZGzXuhGk94BrcLF7DjjXbcQKB4UxWk2jxz8ryPMBCoWZ269BRFo7cYN",
  "key25": "3S7ao9Pse2jSbPxwbHvCCtMuKDfbrAyb9nskLqYC4rry7WmFznx6X3WLCptizMAqPJcDRufUyw18U3FMNhyQNvr",
  "key26": "5Kz8HZMprbkCmX4CrRi9xzemR4Pex42WhRUDGAAyUNVWvQwpVz63i2jAby9pYixUWYuh77ptj1ESA4EUYYz8w7Mr",
  "key27": "ZitrqkAtEVkdE66AaSsiPd7cAZag91x4L1xXncPz5sY1nRK83DGgVUkk1DqqEdnorAYkA6VfgVQkcxasot833bP",
  "key28": "2cUVKrZK49PgUXhN3ABHyoL28a94em83xNNFCuD93dq3rCbWfqbi2LjSykBebiTjCmJW4JTFUMaKwVAq6VAAqwRL",
  "key29": "rCPwQLuv3RTezJDfRShT5Ugfzi5JbwYbsPiujYEadDHcbAvdNtVU6iAxuEYHvQPAx5FXdcP8b89zKLqhPfubvHS",
  "key30": "2TCmhLXun4tY3HFMQXgTmTquxKmAkGD76K2TWKv8rQbLqVbxTURkD4YgRFKbtKMsAf7AuQ4tijVD2TwhLyEbJYqg",
  "key31": "3GKU4hwBnxdEy29zZ1nkrq6ZMhFZJZkAZKumLsjCBkz9LrKUqxnLnHMSvmhsTZzSY7TmVbgmrTLy2YVGqmc7Rvg",
  "key32": "54n8iMKfcSirFXQfqu3Q8zw5Gji2VyAFLMQQJZxjWPpQNEXQa4W2Wkq9r38cDUxwVHrvCgqtYvVRuSBnXCi9AhPs",
  "key33": "4dTZhomHQwzWaH9rc95rDptVYXrNZzAMPVAEuUWyWoHrgGd7oT5BZKBZowMRYtd3PxKqrobEiuAbimq5wJP2thZ3",
  "key34": "vKAF7T866TdBDiK4VhYbfby2Srd3XFBPNSAng6R4QcFDpvoCySXUfTaQLcj6pTwHxBwcpjwGRZMarDrJgQtS1EV",
  "key35": "4pE6mTxQqVwqEvvdDG7PqMcd4gDy2EfX3SpXST853jhbQQMynCF9z7Nis6zHif9zn3S66TgDXSxxKWdtJ2QtJHkA",
  "key36": "2CYkx6UyVLw2JX5daZdFCDJFYPEfaVkv9s1HQ2HnWbEakyb1qjziBZRTrHf4qW12q5xu6HsqfLLP1cXH8WSuPkLi",
  "key37": "2am1DX98EBupnZETYduhsYQqm5uDnYbRTSibNAih3BQP18NcUC8UwkXrU4Lzokyu9yiyKdoaHm78So6ZEKKaMb2C"
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
