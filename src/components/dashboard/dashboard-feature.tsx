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
    "3JTyPsoiMQuutbE5YWQysFgFXLAraFGJryGxfXyWmmrBNwmLXbg5vfFq9jkeaKFhineJsHkoGdy2kwKAYhpqcNsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "st3c4ZdxCDq7Xb2Snvky6t5cjsAhuNjQ8wLosUnJ7PtMaFDrybh7oYHM5YaDyMghxzYjmHER4f8CPuLxUf8yLfy",
  "key1": "qKrs4deAgLBDtZ29PMbt1c6RFjYrD1XHitp6tLfuCniCWejTnE6ujMzH6gP3vjmVd8Rb8s2JGmXHMhsEzbeCK8y",
  "key2": "3e1r9XBmsHjZh36KHk5KUzMoTsc8rWDYuacQaRDw8iXUq3g1fcu6rh4grjPGUyanJpiUNd4vLwuJCYb2uR3KZZiU",
  "key3": "2YGj3AHGwDezZxC6KbgwqGrnyEKLsMASue3NHER6wWSHREjkrzqikiyQBofrCJVHLC8i2jVom1LyFYTaPQ4V89vm",
  "key4": "xCmLZEiSfeS2h8gCozLzeUQDM1dLSBpdP6voTZPH3aDDaDqDT8WPtQPyZ8G88zyFjuy4RVfFGQbBvwCuN3GWeDL",
  "key5": "22x1PxZJEQcPY4rniGm8xfmGFFqtXbF2Qy7XGYSTiYEU8JSfFxxqRBw9Qz3eNV4nDqE55j3guvenAAmsWCxcttpp",
  "key6": "4HmzPVTZrzQyb2KULLcZrTou9gKNXrhWRgGoTsKDUSyj2ztNVkoRuhL2X3NLBAjp5r1G7J27mvVBu9Xcm74jjSLB",
  "key7": "3Ugoz7JpPDsihKjHAEntWPLw8J31ReUSFK2bA9sFWWurSHVWYJNXEQ2c1wcEZYvY5jB75bjthb9enCYYKgs5QLYj",
  "key8": "4cdsyiCaBFx8rY5CRBbdQ5xvMcpTwRGUds9VKrBeSkGz7qGbYsyFK58tPe9YooJGoLDxfY3f5Mfm2WNrm2qxfgS7",
  "key9": "3ur66CmqMAdPmGDwxWPporSdmBfB3XRCJqAWftpJ72quvhcjkgV7U7BWteni9uuccfvdszayPQabryuwBPTNL15D",
  "key10": "3PEdxo9ytYRXwaC1SACFLGzvfEJJvBKNV3LG64iah9oAdnFXQ36xEVcFMxD4LR3MWzwvDFDGJFcoaJ3fsLFWF5gh",
  "key11": "5x9i2r7goLbUe1WtDGb3fcTxSLkBpXWi2jAsdUwNprvNti9TNCuDfQUUg9CBbdn9a2aBdu1H6cpwErKQnqmT4m1z",
  "key12": "3raF8SnVwjDFzLnpzCPicm25LpjgVZFyUynUWShTyoMbKa9GKU5tNjyDHGyjxKQ7QukFqc2s1q3SQZ8x2aTVmJi5",
  "key13": "8uzMhn6BiUMe4WT1H7VRPYRarRbWT4kjR8B2d8dtzoXYRRcrfC2EPVzyi7vR4zBtuYKusZKjrdbdq6NxRhSPKac",
  "key14": "zpXghUvcxMwp8EfbZUZrmeTL7yyoh6KqEPYmr2zfrkZPp6ACCkFpyPQZ2beiCyY1ib28dzkNBSYTayZv8gH8vJu",
  "key15": "23apmNWsoVAgzW2eGu8h9hGfvCeJjfdL8BjEy85B7wA9MgYYMoaXXJFKW4CyeVykhJLAQUz7H3h7LC3SE8bdRyhH",
  "key16": "4knzWikMKbvMRBisDhjydVuQhQ7MZNZ3ExDnht3ADC32GQ1cHybSjNA7P5n7UxeXNtfemkp5PC9Hb8zD7TaS2CPw",
  "key17": "3Ba5QKPofDdCXDV9HCsFyXLUu6Hdd9eavq911ShdgLEqZcwt8UVu9HjQWbz18NSsjaWySBUmo2Gw684pyqJUiYSC",
  "key18": "dBx7FTj46xxM8sWA5mbwnK7gQyXPgLPSzGLRMtuGZ6xX3kBMJ51FarubDMEGuDWQ44qj7hbx1p4h7r64XQ7axev",
  "key19": "2iNNvQmWMR8fWjn3eZyqqtvDb5nQv4fYD2nVzMXpVb1gqVAv8pntKJGnjF8TXNUycjG5rCAtryr7ihPFoAbYbzn5",
  "key20": "5EZSdVHJrjmuR6mVujJPtmAujFxPrx4BCEmbVNA9aAjrU9x5NmSUjCTcEXaZ3nN6TYgr5NvNBhvAqMzqkdsPF8Fw",
  "key21": "4nsEEMAsKY5r4gvwfyNhs6YSntdZu2AsyQPdeWVz4hQahV9h3FANxAq4KwmphbmYgbB4Mw4tvzo2x2rJFvXkLHti",
  "key22": "55jqppR8TCK8QRJXnW5tnpncyKDx5uDVKtFr2Dkw9eVpBEWdG8fVZuz7Dov1LjtoBEP89tBWsMtPEoP78unpU5qb",
  "key23": "2SaHD6knGXof6aaS9daTog5W5ZBK9piSWRk1x4WMzBPBRNskFWyTafLh2Qso63GnMDery1EfW5hi7rbYZsNDRyys",
  "key24": "4DrzkfqnFiKWmUy3gFHRY3RBpxjsSYAHjRN87SGMhrNFViK4L1oP9jrdggHETJPdUkMP3GGEtudoXyLbPq1hxPMY",
  "key25": "5yHPUXLgMNUGqXwUAFfHoU3zFY1UKA4u6KpLXLFWxDsNXTjaatYKv6MEHBdV1TyTYkvkH6zik7JMCV4FpFKL9d9s",
  "key26": "55kXC4B26gVYHBdd6Aof4M2fnfdGXgR8mwQUTvvcj7xvXRRfYWRWvsZX3AgyV7HQyw9VYV1V3hayE3geD1zT56aw",
  "key27": "51QAxsJ14HEkG69NNDK58p5LnNTrL5fNPzMvYcvrNLkVKUTc5HGfXZ2mfTAsM8gHRB8u5bwanSNTSsPR8tcJhZY9",
  "key28": "4bagunUUgkyFtSDdZfzt67Nrvcm6WssCkop9831sak792xDN2GecrcDC6CvUMBnMZ9wEQMLLPWbvHidg1KvX2GTK",
  "key29": "urCLoY931Sqkq9TPbFvfKHzsYXABwD8zke4MPzd6DK9J8yNLtMzAWPhAMXVfcCxWcLR1FBYVDawHieqNEpNuEcg",
  "key30": "4ukz4BCp74e1PuYG2sNFHj2dnk2ZXvsBEsrKdFvXMioKaowvrYAyfsRMu4bPbf4NUmdkD7ZTLmLPvPJ4EktqbpW5",
  "key31": "3j89Y6GwnxioWspGJKU9adTAsYhFVS7171xdSM2JdvAyok6PRsmCjkRA37w4Xirx1Lf8jEiqZ1kRuZkZk3SvGbMR"
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
