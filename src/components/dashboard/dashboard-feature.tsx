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
    "3TpbdDcGM6G4j6DiLtqKFjiXeZS8cVEoXFk39dqXBWYBUvLxwGCXun9yBsKfBWowvJoHsWTZCTWrZnPabCCqZ3CS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJNV1wqNaeAFCqv43oan1j6CaUR93CEzZPwmS1YFzPaKVvNZxsvTwUsJKYkQwPqZVAHN4jziNhftrMssv86UEyt",
  "key1": "5qcirbVw4gk9AKbtHWEzxe46whqhSfqEzKtxwv1wDtQiQDheeaNey6BaFeAf455FurNNncBoHhXBoCF4AeTePQ25",
  "key2": "4ANMtpQryiW3kCv9foua58EH9WLpwxq5jgJiirUcRwNc18pbWYLYaDoFzSTMmHa26ZA5EjbbuXyxNLVgNvYrMFYY",
  "key3": "3qGM68vBD1ed9bC7rDCmMwBYh13jTM5DpoeK8n8gfDUAnHYTJkbegneMo5NscVAhqZxxQSoAgdSDntNe7xtpjgSa",
  "key4": "3nGLyPGQ2yGDB2P1R48qbwr663u5jmecqXBzcsKGdEc9AWFGNSBA28Z11Fp4hNwsYsjMTXNWJ5m8gteMb1ytfQpG",
  "key5": "3W8Gwmp6hKBT4xCWYVPtKaEKzfKfh9b2D4caCovQLGsxQCX5XPPU4vAMoUQuhiSy2JnEjPDDMBGPqWHnbcHk1SzJ",
  "key6": "pBZNditJm7TaUCNkES5RamDk5RQ2ypqDgm3p2DZSnddtJLCeS8QX5rJUhM84EhgmwStiYR8pbKvkAwUkz8Yw7s2",
  "key7": "3XRbCLgzb4kPpcUCmetaCpq4yDvdMyGK1wEFEgiNhaSBnQjt79N9sTx8ghAZ7H39Vhn8vn2HYRSis673rrSZMiue",
  "key8": "b8UojXwYL8QgNHj6wu4PDeyvmzMcp5WBw4X3B74PsscVM4QgxfLTCbQpRxTXZHShittthQzHdqwfYt7MyNtybW2",
  "key9": "2LTX4HALGAtG8udMMarUHiqyGVomiEusMYTMEKHSKz5A7ngKYTyEV7tLjdv7WzdG1HBnr1fsZzraBECtWe4zud3d",
  "key10": "23JN59meVtcrCH1ttSmyCpR1MCwxBsTDqbdGFYfZkVwMHUytuowW1KKzXNGk4wzCrcjekPwLNDbHCCWTdXu8NRjC",
  "key11": "3HinC9RXLpnnKfqnsh5UwhntgRNDdkJ14W35g425yYsZxnBvWvx7upaCMm19pvnxuujNvWxBJunsmPTcHH4VPXcj",
  "key12": "4hqLh6kD9LHrTjBPxwDz9Tc3YudiCGnBrH8X9CRyFVREGpiRfMiwzcm9iaBzGfrB4q5Rwz7SwTCWVMEd8ExtvNiW",
  "key13": "3YAvkoNRy768DisPPAJySv8RjU9C9tUjwtNLzwzrrDghESYugGG3wcyLfT4f5Qp8g9BAPCK6SwMQjvGFF8GRDzfo",
  "key14": "5pw4cgsF9Fs1APpGpuPE3iHK1QHBGbMBdECy8sk1yYa1F131w7Xar31xuFuqjxFTNM2U3q32VuxSNbRdTRwZatvB",
  "key15": "5sF1vW3fhUrhwQ8NQ8tVmoGQAWBNEsa5NoiZFJZK1eBC27bzwvPCh9zRaScuEs6A4ZrawZpdVNFh4fw9ZVYaAJ9n",
  "key16": "5vq4asXUbbaH4Q1xYYoMA3UqsAvJrHP8NcjiHmgkoMNPxCcj2gujyZ4cYuUuFGH5Wx4rna9PiWiZFonz7AZGUTJg",
  "key17": "4Hc49XvhYhV4fga8JpoSEWkrSncqDx8bCqbgy22KmzntQastHAeDPmHHq42jDBPJMzYZNib4jV6NXuLLtHDDX8UF",
  "key18": "5KYKgjw7cYg9va19mYqgxvoLz134PDQm2S3SuUbkbM6A6PMEKS65J3WBkwTqgxoBKfELzcbaPdnjYajus5mgT4Kd",
  "key19": "4XJ1pEcyRetHHuP595gSzRB92JnhNK544D81NRemigLwQ42df8yE4aX5SXyTVXNjzswMNvMjEh4FgqxZvjjE1QSp",
  "key20": "5VZUWRC1TSLGv48PR17Yu4manDetUGx8LATu24G5bs5emxbEeKzFJ3ZArhAbubGoS4sQteAXB9kdM8oVqheHedUP",
  "key21": "5uMDZuGj8Qbrra4kkStUbGRrm2bf1wzN4fLJmZdnDhxwZxyGQX4rX4qAm3Phme3PzeubWVXmffvfkiZ7ndHHkN2Q",
  "key22": "3AMZrhYfhZGGWh7UAJpbvB8kRT66b2wTUHDpzJgKiEXhnRibome2VZ97Z5eAyKp8TAfgVmtQroXUQ9SnJfhxxF7e",
  "key23": "4UmLiqZgLGTzSvBHDsuJfwZTQbnyKNBYMLHLvxxJ9rBGs4zQQHjfuMoxf8oj62wUpqnoQ5yDpDdw4bEYxdgMpsJJ",
  "key24": "4ktff5AX75FXZbSDnsoaBt4Lu54TQ8dnfiGZnyCcgbPzPbqrRRCUitdCUoZ5ti9G2dUQc5i5TcnHaNQfzNMk43y4",
  "key25": "52ZJFMv9mo2isb1goWeDcadAzF8Zd8s5nb4Lc2rYFchCqofox5N7SZhvinnoERC3KJpZzGJGR4XevAho7gpkq6q8",
  "key26": "7ESGALvXRcmBCKd1LPMeP788FRSUK98UETSNQQYFqbiYGvFJax7wHEnoDRXU8RYGbcjNneG2PAe6Ui1EgZW4pG6",
  "key27": "5YNwfbZGZosSkc7ygZv27t3KupeqiYnuYgZaQdwbQrUyDnXbdVFUvk3d8hBWj5pidNvy2sD4yP9xRqmqzM36J23Q",
  "key28": "31DLECwSLYEtAktFrztfUdtzGzYA3uwMbSHP4hU1otHtHR5pf3nQCq8DXFarM4wSt811KqGBX1ocMSUMeFaPHXDy",
  "key29": "9MAV8LVNKHbQEm63jzfV8PLcqYd9NzxBydehtYVaf5ZX5gwmWSSJgcE5wMnjatHWSWVujGbMbAXGAa7pW2fQo7u",
  "key30": "7pibRg7DP6E4cpoCbCGhZjwhR8Ek2boTgtxknN8wbcVYdAt949ozEv61N7TzUNNxdDbg5Do5oo4Dyt7TeRRX1qu",
  "key31": "5hFuXMie8pHm2cUwU5HEngWPRvUHV6wLQ551uBS7CpRe7Wbdfmj15QhownG4QK1RCFEDLhhYe7nFcmqq1TtrTPoP",
  "key32": "3xRfGqDa5S8KvLNFGc61Xo3dcP6x2PEk7Y4SdJMBwBESaNhJDtRFmSyYJYy6i27WfQ27NPXELAPhJAnAbMK7neyt",
  "key33": "bAtzaVovyxfmQUMTVAvjpd6YpZjr9RGimm1kW5o5HWUe4EZ17c4wfzsMEYbRJ8woEReZnsbMCmphZ5Xb2s2Wbhf",
  "key34": "5pgVXhE22Jf7H9ZT81f5KZ37Z89FEAx74amkzXxEFex2UES9EEyjAUCwnmqofPcZYZ8GeBhicWsB9KCHLVfxa7QK",
  "key35": "4XmiFW8kkRrTPfRkXzYadMPkkpa26GZEq68bMhCGBaQFqji2JUtFeJmKj1GVCxaCFba8TTrsERXCzd3rN41TxNMm",
  "key36": "3xTKiFgZUstWgV69p6JzJaBBjc2j4FcW2qsrvAaVxCDp9osEaQCFLnMW27Em2nRweiuMTj9YGA65zCvvtbpkTtQJ",
  "key37": "5eZFiA6TzbPF16Ftai6ndc8qJiJUx91z1T5tpLq55FjnxrdGG1qKEbaXVYnngCb3uoofSriDzjxFdwTHXANGfgTZ",
  "key38": "3BNja8MyugfwuGLWro8XGjVZz5Pfm3eBrEBmwuvrcTw2DBWz9gK962SDMPXwhhP9tfYZ3F6JKK3yGH8MofCaEx5z"
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
