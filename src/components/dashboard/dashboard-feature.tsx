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
    "2cat9ezdgvF1itqciZkAzXdbwnN1KVurDbPAHdPeXtKHwX6QupnF6gXgVYW1dpyEiRTJ1ribT6cU86ekTzMSd2ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWRLGKFzzDbzM4sgeEyx7v6yidH4gpaYRRJ5nKqiGT1Yhw4n2Hb9QN3U4fynFRj2fWzF7xc3v8WJcoGP3CGk2QJ",
  "key1": "22dAzxeMqwthhHYeFh36ceKtZf2Vey1K9wXz27QVQj6z7fcCDWZABCXRoaHK4V53SLQqYQVstKN9YSsCfrfsJft5",
  "key2": "4Se6w3X5yeHYcKW4erUh2YZ4iriJ2KXGC16ngfE5EEw7rztAxmn5tdorfKdJE1gKErfcPwJyAF97tDEcwR4Gw6fV",
  "key3": "3q9sfYGCrfJ9dVoA8GmMVw1jFcF2uMcZh4VUtTyj2hkCrz3iVB4xi6Fiyv4VpUhoFoB6vNyKpP28H76vL9gEfQJi",
  "key4": "3b9ABeuvnGmB4Ah9Jw7LGXyGRyPXPw2egkoSQ8rVRMpZT8a6KmjjdbJByCBAcF82XbJzj7i2gLmS2aY8LEbFtF6y",
  "key5": "4nd1oNgsyCRq3eAGhGmZ4sMEAFTCEDHoLM9gFiKAFWnapkRZtkq9MewuwucHiU7Hu5opoJ8r9bmcTcdJk2me73Eb",
  "key6": "3yKQC6G46Mo3crNEmvDGTadMuQKsz3VMT6tckHsXxnP36P6xbLeyjBJbAKShmg9eFjLZkuDPXXfLWY4LZyz5bkZb",
  "key7": "3aBwCrqEu8ryd6TfzunJjHUExYLEQ6XTCUpkZXVejoKzVxqMnH4cgo4Q7mwSLXswXAVXApRS1jhounr5dSqnCfui",
  "key8": "5ktrWU1TnQbQSEVz9tiduTdMSGGP25cadrsQNW75zcBubo59C1ucj6t1PYvmcSZLbWUNcx6HijaemZzzh8u39GWt",
  "key9": "5jqGYvyGtRPykvAitPtYojDpc6HnZb94GzM3TosLbRLkRJCmSuEUx3nebUVoT6oVDQbUnxcX7oH1xWWa9u9SS86N",
  "key10": "2oWTpXuMQfr9T78oM2KBp8uVJBJNM1DsEdWcvVNQV2sXSgSeVLGtWyXgtaaX8L9jnWcKsLMprH2kgjChy37DBXre",
  "key11": "FZU7CC34xw4scoxe5VpK3qt1LW2XrAeQm63k6HGzRXJQSYjEiUfmVfUAoHmBcc4V6utZihqpmWXkHBLLyfw4SDk",
  "key12": "5iHGyhQCsQ8xPmvwLEkNwNerspB6zjVDxJcNkq522m5DbAKexHvduUT8sCN4wE3aok2deZ7pKzLpDVFq7C9NduFw",
  "key13": "4BVJjcFTuthd6zkGKhMABJDcbwM6CGEoGVEUin5rRBF32zWhQVosCKHYW1Xe7dTD7pAeYF1T32YGbt4KfE4vCiSt",
  "key14": "4VHP46BaaPWqCq5ii9A3mEEwt3UA5VQULvbdZw1UTbRzXD1TL2CQUdLS2ZYzEvJ1ShZh1U3ScpU13aBhmMtpksxY",
  "key15": "5sJxGY2XMmicHyFtgFF73arJLjKzx3eNSzndoBbtFjyTzQEYKkrmtLZJigPWe2Hii2wnFxrqdhSDiD5T2PrLowm1",
  "key16": "3uVRsohyThNiUDjAEUFbDXNH4giwhrbrtLAESesAWszWgZau71rJhUC48Lyg5c4uhmJ6kCCHYsjCnnvrUfngKQCt",
  "key17": "nX9W6uBuKTHbdKbf4SaYb7XueLsgYpVgHLVPaNAFnVY3zaKzJyxMvoqAvpR9b2w4LzUcjxYPDUxWuGX9uBE6Pow",
  "key18": "61EKsfTo8gmER8sHKEoEGvFKesujxuz34TcZA8fM7ow2pPiAqpSaR9XhGbn7TwQPAwxgQrc17r7Ksv7vGED2qgek",
  "key19": "28Z5EkgcH3xW1Nf1E6dqfexaTyAVYU2NCzB27oEALWiUCXzqPF14EAqVugy3rpSPSd4VNWirWcFb3XELub1w3XhD",
  "key20": "2Do4Xok9SMq6fbpn4puKUgQnA9NzPCexLANEDm4G6W1F9VadQqFuy5QwjcomgP6VEFW5tKyRCrpNM4d4rKZfBAMA",
  "key21": "282puqSzGAYq4Hfxg2tPYS8TBU72gzfUE33KFuW7aDfZpHA6p1nrEQdqmKFC2SuoNAECo8XXzZ5XdJbeTXMpKrdr",
  "key22": "4UvV7KkGMq8xaH13mwYhUKNPwa2Kq66spKySNjfXbZgQMKnZxsVrafRRGudcT5Rqtm47Jw9jiEQgpnRbwhG7CSpc",
  "key23": "cHFqLpXAHTpu1i8REENYcz6Ca6mj6RgucJrUQ2faFxKzVDSPQy55sxPBevNhddMP3R18Z5Q1UUR3VyDph3fUZ2U",
  "key24": "c1AdKPeaDRy8tdrbLzYcioM6W29PMcVh2vETHexPBmfX2HsSf2YBdB5paZghDgDWNGsFEHQ7ZFeqNiGaKw67F4G",
  "key25": "4hgCjUhvwFGHaEUBK2EPxBFtU252LpR5QwvP3FMpWrmcWWCNtYypShn3jmuuv3DoXo8SZ1AS3NLC2g8qcVA5N7HX",
  "key26": "2zi75fBw88Ux3BbDcvZWH79cQ3wPQfs2Zao9o7qGp6zTJanWivn2uwnBqYQs7fqHXj53rzpytd7xqkzHJpuueHFZ",
  "key27": "Vhu4tCgbbpqMiio3WUFxMCL5nVerVvDK4MFWg7KeGuyrdqggt9Hfue3gCkwpqphXEDQvz8A7DaD4muhvTC12yx2",
  "key28": "4dh3Unu8kBn1Y2Fxa45jiuvmbxRPAC3g2fmuV3wr7EzHncdwUfpZjvgxyHABm6Y74kYxDuEzA8w91cMY3wTo6Fmf",
  "key29": "5i4RT8z8mCpesu2e8svCxJLNH25xP7JMBWq9eCkiVgL7oGMWv1c3fRSbpqcSR5KbXgYp2UdFSJCoAaFk3YTKsDwK",
  "key30": "32FTwf8BZvVkPjtwRPWUM25HHrLxrHMZNxv51oiVh6GwQkYtNWX8WLMYmedTFbr2q3pTXKp3pvvYn1GSUhJ88eYn",
  "key31": "4Hx7U56WMEp8vKzguPmeYtavgBt6F5RnURcc1nsJLCWnBCNd6ModeXQ5S3bWankMz9BQVq31vUFBFtnmAkvvmGrT",
  "key32": "3eZHj7DBCSKbfGsDByPBRGywBPRJ7BY4coX2Lth8omiHmNVZSUkFe4BDzBTa4V4Sdvube2YAmdxmtogSdwhMjxSa",
  "key33": "Lkh4RXL4KdfGLpUncirezboUZAuW9c9MyGHcXPgZUVQ7Cj9nkAsj4p4WfiBj3GyQ9e3hieWHDFEaECAUKuSH2WS",
  "key34": "zDEPt2rWPBv4ma28BksyzpETh2euX3C5fqzgiNHcxGGKfR5bK7yMvEMypsRh9dRULSsYCe2G5CHFwa4gXrHdN7n",
  "key35": "bCPxThLJcg8aBj49t8rAXFwujjNEmG4pfNBU4VSRR44L7GdVBnDE4MCSitv7AU7PGQyEdK5fBHuAqU69AFGw9qy",
  "key36": "5rv2pYBvjxzFNwVKNBqL7zwkVphNACwUfsKPiGUrFRfTZanMh28jXKRjwdqqeC7Q9hH18b27rGxACpJWK7CcanaN",
  "key37": "5pnDgJpZHNbp2fqhZUgxf8NvxNhTNUEMdkBh2245rqqnA2PTQ5trbKhmjhgJrtghhqKHaE9q4ohcAM1QQtcFDvd2"
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
