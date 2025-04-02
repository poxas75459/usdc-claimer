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
    "5bNMJn9WWUtuYUC9p35c5FzPrVEr65nVytvVRrtK29EQeZEHAtZdBaWbmgWbXC2vyUrAjo9uiPFUfRP2n6ezoLVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uqcci2ECxDNnD3HdnyoY1BMxcC26KC9R73dB3HbXcQhTvRzogfyURY6xVxxbRsWipTF1qhaw62PmwnqBYyoT8wq",
  "key1": "3UZHrZ24VHM9YKJhccxuU7TjAgjkTzYgyAvjHuPXNwxrh7GVi77hdD5jsvPKdf8zYB5BXade5yTvqBrW5dWkxVKs",
  "key2": "2z8rqe3U2RVkFmBKLmb4CYdXJEs1yn7m8tcQspyaPb5SbF1Xe9EVF6Ymmd9GxTo6Jw4Y96Z2D584khRby8mVWyf3",
  "key3": "5YRRMuUVAsX91RwJ8F1SgA2NYfivex1xjb5yCM1nb8i87wyn4PjeE2pp3RBbvaZehDYTiz8RfczhMB1YfwArnZYP",
  "key4": "2PnJU6n2XNotXd89UD1acQu8YneiQS56Lq2GNxXbYDZddasibM2nYXU7XTQuGSzZZ9NjPtfuTUdr491Nga24dom1",
  "key5": "4DssAVYrHsgRB6gZxdbxuD5EpC3XfFChM1xQYYBBpGFuqaTUJFdsCtpnHkSEMiX8HwTjjpL4G83aAnAFzzfX2jpr",
  "key6": "eQ7o46uC8FoCaaVJqj73cqsnJz6f3GaNRe63EjHwRCKJJEj3bTfUU7utv1pxs6MR76WCVYcPYMjRGb7MPYcMJMu",
  "key7": "3rQzCZBThKJLRr1B2tfCdYqmmgeTunfEZMRzsC6csz2xvFX3QzXH9RtnJMnRMPCQoxYeMRRghpfw7zQuFo78Bkvz",
  "key8": "3EC2yFbbGpTwZG5UqkJX24TzaegsZGjVyHyx8JrNaTxzbDx4SgGcQH1iAMPSYmMnEif7hnDoQYxvkkuct6F9Qwme",
  "key9": "46DktisPdMaXuhpo3pRewtkPASge5D1R2ugwgj1Prnv3KVS3uA6ifYv9cKX4dFbHcbrT4vJ18TLVLMADCoQUNjFM",
  "key10": "3NKoPcMupj6MUPDfa5VwvJMUWv59wVzkiZuJ9xFzUQqqjJqtS6WC6UThhZB9GqJ9gQTGpt2foapSA1biiM3N6ErG",
  "key11": "3VRPkKtxSNrfMdLiVChJZ2hSUuePE7d1PcgrtAyPRPwZMA2onNx6jCdHVPkCJuLgDUy65onwM3CDrqNbp2rPXGUD",
  "key12": "szeFxzbuLHcWd3sYtwD7qyWd8wcV3V7LwnszPSH5nS8Uw6T5HQdZfqVvKwuj3WmhCXfGRKvgXKqi6SbRgYHw9RY",
  "key13": "rK42hV8GuGW3474FBSvLJxRdBvSzRtpfZ3U1WcvU6coFsDxKy8XZLwJ7qEyFXoFDog1GoidVbJfwwkcWKDx1A9c",
  "key14": "2DMM6CdrUYe6YoWxWb4xuSpDnhu87kc7ALFKhrvWmZSAkxxVRej4VkspQyDLUbD895Y2NVxnAZxNqW65pehuVops",
  "key15": "2r9yKLSb7APC1iGXbkeen5p5C95Ph3ECtUceR88xpve37Jz7J2dERS6V3C9brzS33gBmaVeVgvRM7dHH2d3hwJkJ",
  "key16": "4Q1JbSZ2nCzyzTmpig2Mbasr5zdvcaRjx4EEq6r2AX4SonUnJLwXqr1efiZkeeLwnGnvCPUUd5GDMoK2Ao8kDKzP",
  "key17": "3zMawmv2rQBgDGkxsosvx74aXsaFvz3WWAGLvfSqHA8kzXhqwrp2cS2uKMzPpvNw5SXTmSaLniAnXC15nPLXPneS",
  "key18": "3QjWZoRPcTccu6AqHY1c8WvPMHBDskorivXuhVokXiSJgHxXbCMY6jooo5SFtW5M7saXaaHkb9fZcKmpgkNyyXf2",
  "key19": "393obuSw6qv6ccwSZTswV3nwdPHkEpPEeNwxgpNfQM2rzc7jXLKXkyKPLoVnGJmR4NeyxG2CbBQuNffTYBiPm5qn",
  "key20": "2PiEd7DKmM9rLz4STodGKR2RLaZZtS1ktLaAwHkyNLq3rgKKYqjv84ZRxhf3V67Ts4BKvDYd8P5VuFwdABE1hfu7",
  "key21": "5D19fuoEpU8rstzQku9uDujGRYgJNtmYcWkhGHjo6eshRhTde5LfbG6gjgiCDX8gRhx7sM7LRqS6igPDbXBihPWb",
  "key22": "4hrHqc8e1m29Bm9RiWWuMK2X4BfFd1GiM1HHXP4KzWBoE4CK7UhRWnpVSehbYafh6V3fhwmLnb2zM8sHbgcHpubP",
  "key23": "258q3Vi3ozggdqc91WZ7Kr8LCPuM8KVgUykTG4RASPPi5u9HNnjLfVJGo1Wp7ziLchY4CXbz6ehtZubdn2k5tBNy",
  "key24": "3Znt3Rtvyhmngcd69vq8MNYh9dW3774yR2GuJutkRQJ6MQHN7wwkRHY1nQgaHekzWSJQR58g3q3afBALT8kZsSDX",
  "key25": "3TuxtT2vS7nVZ6j115RBnv6kshwjvUnvcP7dR7Nc1MSK1Eb98ajSHZCG6nNFgypnrFyEnHB6PKxijAb4mt97iCQz",
  "key26": "26SoVV43WZ2YEycJoF56h8LPLu19c2YfqbCNwENH4ib9pmVNy4GhdgJe46MaKUexhDa6R3MgPMUeh8LZytRrifWa",
  "key27": "3b3S4KPNqNJe3UL57Fv5itjtdddGJGsgDUEC9Jrr8AhaaBeEkW7wabDA1aKeY9kJo41L1AHdnGBLNjnmSSNNUSqu",
  "key28": "2udk6ZD8FGsRGVEMBdDqE4FSusCdD5KphumyiCQm3mKnfcbXxBW5XHLRHLymdRFdmKv8URrwHGdeFEJoTdh8TNZx",
  "key29": "ZsBMaSDosM3CYJk24jLtFKVqvfjudWe3P3UeQDbtwHy9CQKnTtyubRKKmaQns2QuHDKPF3YFvMJeNau2YJQq4Ah",
  "key30": "376qADifg1KR7gkVgMCtsJvbGniUvzwzm2STSvUZ1wj9m6i3AwF4shQ2bqkh578mv5PenLBgf8HU5KCsRnBY4f5w",
  "key31": "4RsTSeFafEqy65jHgwDSUuCHSCUKcSRk17fBMFgzr8BAk37wqidFnFpYGBKBxmwdoy4zndW6xbV3P9NppX24tqyZ",
  "key32": "2Dx8PrN6cSRpQ7VjVwyReDbQCjeLk8F3L9Fwrjv9bLmznMi2oWcimRrPoXtoq36CnN4uke1t8muziDN7jDXCAjP4",
  "key33": "2wdPucczNsZgjNTk6AzvQScKDFRs1UinFinyKnUFvdpRM2HtXyZRQ3aeYEFJBhz4hi72a4fDJQdNCNT1FHKuH7km",
  "key34": "jQuw7NW6hdEjFszZ4SENsusFUWz9WALBUoGm8Kem1rmcVCj6BUuV6WG9szqbKMJNmsvBMJYm3spk7fHAAyFaJpz",
  "key35": "4nCQr1tL3zRxxBnNFrv8sNwda84wyyqzneBzR6pazpsiTz7Xpe1ven6ja7ov4CEFdoLCbgai4ms9WuNvdzvtF87a",
  "key36": "3EaysgJNMcib18Di2qiUx14fPA2TYkXGt4jEiuhktfCfCQfHfJ9CDa6LitdFtNr7TRVVi6Sz7d24mxDi1sDL8Rqt",
  "key37": "5JWrMGZPxkYA3hygPbDCSkR3qptC7VsjoFtPydpissV9jbEpBkQ1oUGC4V7irmPdpsws8DhfbKziCtjMgMUG4QXG"
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
