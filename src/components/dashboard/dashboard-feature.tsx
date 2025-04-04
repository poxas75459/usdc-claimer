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
    "5kdDNRkPgu8Eengftt24bXndaNeYokpPAdPEeZSC4L1CqkkAXnWrgASsFFZBtiFojmrMwRBTvwr4ta7WNGvkiTHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HtV1iGee1jF2eFMLzwt4zT1ZK9p1DsuumY6uGRkK8kfNQJehQgRPL4GokFqYYFcHLNmDxmeXmZWZjJJpPUoVbWt",
  "key1": "vQX3YTo6MEKCXbDS7gQ8hGFw5HcjDUzuHnSBW34CtBLHTSVHs3UnMBEccMx3QpPSb5M4DLSKmy7boqxBaTEfBUC",
  "key2": "3p4saETyPBSscCG6pH2parweRa9CgCabRKTshwd9Hv1nhfJjzJUybQouhMr6Giugaf5CSmJKaEbAH6RgLPt18MJC",
  "key3": "3nUTJ9ZefnnkLqBcv1z2gvgqvkYjLrXCDhXYDWrMAHdATNDzp9hULsFeDkSDsrog27AbHKZp3tTcNSg8xxmDVe9y",
  "key4": "5qqVMMSZwhdVAr1XwrdR3kvdYJyYQnCdkaTS8oRdk1D4maDtYuVCuTBCxRHVUtLybobPWXAyxWF7c2dQAHau2xs4",
  "key5": "4MonpL4AkgzmW1fZCQNdtk9S6ecCeN74az1QHxwdNG8LAzdbGo4RtFhLUAzV7ZYaqfu1Shq2NBEjFnMz5AHuc1ir",
  "key6": "in7vUkNRLMy6VZ2h6ANoekaT7V39gbQiecS3zyQDC3TcchYgmNqUbroSCjywwFEmVvgpdCWThGhcMBHMfCgyE7h",
  "key7": "2981XPcFPTpAUYD9uoVrK4Prj2xZHKYy7wcNf1eLGhUusaUSg3KvaWNxNVYCn6UGY1NNyYqaB77ffCGdExnFrLNE",
  "key8": "5g4WVzs8YqofHounoLdBZGtR1CQtof5KCtvoG16Q8pbNCRx88TXEP6BP1nNtfTjozMbRL9TZYimLY2zEd2BAP3mN",
  "key9": "xFWpo659Q5WbtoLAkyqz9kJVWPRhYe7P8rtxTaNjXnWjhNVGP1Y84wzKbzvfYMDuoRnNiMU8x4dy8umh7EHuySq",
  "key10": "32b73RxTtPjcNJKp9jC38BumcZCGuiQnHrJK8yDGxgUazpYgS9SoEYAFUwWFysCTjtvXY23TUTf9iZVgHtGhQg8X",
  "key11": "4Lxm8jrLTVBhGHKHJKtxzwzKtDWzJZnn6kMzLdrzHodS3GuSMmn2xX9Q6J8XGNXyHpDgH5qKQcgRH7CsQTZeH2xR",
  "key12": "3XvSmKycy7cYaGgFcne9Lxyw32BPBWANHaQJmVt5avJNUp1pvQvrknKm3oEiioBautG4Bgx9Esfa295vPwpdps6F",
  "key13": "57SSq8HrbKw9n14xYpNtznjcTtm2hugrEeocznzSxRRDVfjk8r575Rb4bwgs2NQafCmZmfwXEHGtffeAoVE3Qgtk",
  "key14": "QUVQTTcv9RDTgAr8Reaqfz2KjoPDjTfT6FizpGLaipserio9RwHcWKbUWZFvurzz5AQ8WJor4WPKkS2dZeEWyE6",
  "key15": "3spdAW3PEBuFSgbMEcnHDrfeFBHJZoPEGNkU4bDwBt1k7A5AnAnHBvJJ6b4GidmGUWdr7zfk2htc3qGKU6sajZu9",
  "key16": "39PeBNbPxMLvezgoM8nZtdMucmoRxXvsf8PhcA93TtgHx11gUh1ZaF43YokzAHWYqCDVtD57zTzBPmYy4MqVgvJE",
  "key17": "5xmDf7eucjU5DQm3LENVhW8FeGWx45cLsGoFAbDEHi5p2m9oBQRXwTFMSgxqV9PfAKE2EAyGqLW1HyLyYdr4yx87",
  "key18": "2kYgUnhAKNS5k4rLNqfVMcYMj6jzpyn9S6jfwc2q6nukZAvSMYLFndrgcikjdrPfhTP5ro4AR1AaxH1FJgTmDfn6",
  "key19": "4V7HDpMjhJrGLDNwgv5YkaS7zbXQzVwtzEZQ1DZqoZ2TEe3AwgVVPQfeaamvp3eroNpg7xv5LPQC5QfSTcKAUgqf",
  "key20": "31BcMtnAP89B4dQMqFW2YnqWpvrrFQwfFzdrCMWxDHk7UaybGZ3Sroe9dz3sF6BHXpi9vJUodz2CCuC6iybj8KGW",
  "key21": "5tdcAAGNetpPLFhp6qqXKWfnYrG38BEfm14yk987PrhRk1jL8YdnuV3xcYjr5J5Ns3vrxxrLDSjgaam4r7Q1uibN",
  "key22": "3K16iC8XdUzSu5iXCkhKtyDN3CFpQ6FzGUF9WFT1Y8qpvpNcHjSctJeUgPGUG2mC88Xha37NytYATQzCLSKu6SMM",
  "key23": "3Xwz4MFRpBxFowDDNpiEkB6vVc8SBJGCvBsfULGTpCqD3C37ytpy1t97wLkCb4yqrxpTqWMMvoFCzMR9iLje2jQx",
  "key24": "5RTDKpiEEbzttUkRoTpV4MY7swf5XHqzRMrse51JhRqs1jLSSSjSmsfPbvwRERwAp6eVcp6JQ2hz3sBpHELje5MC",
  "key25": "5ZXmqo2puxeqnyvL5XeHabVBuK9c3HF2uJPJ43uakLmJtBysgUzkabGpBXsej6DkPEwDAQTPsBjPdoiY4UQUWd8A",
  "key26": "5hfm3QZx8RC3w9ny7aa4Z3SM2aJDtDC2N6pbpoKnXQzzJPeoYhdmPwSauhALJzHJqtpsebjSLsyBVFhb6EQPfkiz",
  "key27": "BV9ZAqyP33aidsbSCEQerQnB3XtZrGGxBQCmT1pgLtWMgsTr5aKT9AZYLL5hbC97oLRF98MVcqV6EMeJczyqU7u",
  "key28": "4QREnaMGEArYJy8d4j52w6JAAVNsoJF3cbXdMvcCzcNGxQihFj2ur9Q9Mk41Ahvu6KDaDvA7WT6GTHvipyk45FQ",
  "key29": "2BuoFAMJSu2DtEHmEwPhQi2ugEv317zZoMwJ9puBUUzoHoCTg7WwmqRwkc5Lj7o3FCP6yXbQX3sJqd6Efmd3JHsw",
  "key30": "2EsaUxudZK3KE7tdUKDg2CDhpT4Fj54Zzk4L4m4pX6MtzruTZiQstcB162ma9GagCzhVqsUbxdQzW5HTegm7hy2z",
  "key31": "3m8hcpdQZxWDjmeHpFb9kxTXRhtMRes2bgQmVrCFhf2GXa5nVfpmMwrQGzmD9SLvRASn8XaFocL2njNd2uaTMkRW",
  "key32": "3uG4tY5EHFy99FX28c5gAgr6xDqDFQmpXaYpjLVEuoFUq5bZmDgMoXVFbqRmxV24q8n7r1NaNmdAqzPPXdQN3J5r",
  "key33": "mQxmjjoubA6zfyKJTG3vF5xCuM4y8aDGL5n2q7Tq5sRKwTLxmyN69tWLgc7KD2qUiPCwp2P6C6qSnELDVdFwEJE",
  "key34": "2Z5irPst6oLEC1LS9CvmTucFtpBFqQf2feJmkDBxijHMujqMLX7qLyUqZxCDJZeeJs98CBTaL1DWhMC98AVthk3t",
  "key35": "3W9WU6HWhBxtQs8ZaN7CnpnhEjoxDaCr68pMcz82rrci637p97HwwowfxZzL2WtftRQfFLFpwmPTpnBbZ9Hkh4yz",
  "key36": "4wEjrT9h8tdwB72ky7XZyBymL8Ah7o4qVetT8y5ayg7QJuYEtaYjLpEUfWGHdf1rdqyH1oo2BCrKWtUxLaj8Kkzd",
  "key37": "4HeUJ7Z2WYF8m65VeF2oiuonn2wZeyP2QXyPhtoWMSb31DETTxDtCJUoahYdTz9fLyzUKUjakK47mR6JeaXBujQQ",
  "key38": "5m7wQJ7aWYEbUn1v3qidrGKDUZDQURSN5eau9S5eNoLgoBYrK8DH2u8MNu5gyJtVxKdpQWwBwp2YXvouNiWpD5KZ"
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
