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
    "3VM36RKqURaVqAH9GBx951GLd8JPZLrKrtgikRfP6XPhcZxCVSV2SwEut2qp5SY41uJHMbTj47K13Lc4Png2CGkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tVgQBTQXmETRyLuCDonYu6CmxDGjw62gEmDLYZb14qZX8UePvHtJq1a2dhoVEBJaKBHZm6XAeSN2T8SQdT3TLr",
  "key1": "5v9kAC9PN6Qq5Z4jHTo5HYPsJ3T76VxVvD3TzDGZqsaTViCoQtiskXaTMb93GHXDY1sunCpCirGmsy2Rst6BBPBT",
  "key2": "4KsTqs9rSuXykcJeAgBdB86XhJY2D5GxTEvWydBA3SedwbsSAAUQvuiiZB2yRirvMBNcne58VTK2B9bMAVkiT5wH",
  "key3": "56XjLxZGeABxBtLKWjSSUSVqhTTbqojjyMoQZL5Kbw5g1LM3e4qQyMjxc47c8h7zL1C5kdo3e2vi3TwzTGrAhjXG",
  "key4": "53Vje8pPDV4mbTGk4cHyyBT2RFQucVj14NkLGyHCNM4X9DU3B42WWUDB4vfEcJJPgSZ5NfKDM3kYTGiuU5w5vDfr",
  "key5": "2qrdFRoY3kHwbVBGv6etsEXgDVLr2ELgzUne5jD2SJfNMg3WhMcvMNaSodzcLENHNxz342HTo8TvBky1m9CNe6nW",
  "key6": "5bZUoZg38L3eSy1KCNG9uyKEpLx9QtJ4aAKM22m9pZAsvqKaKDXGJ9P2guMw7XCJujbBF7AH21hzbN5BWgbq9ez4",
  "key7": "338JPf47P7yZtciWCDW7bFmpfCbSQahAw8Te77Bks6eiPTTw1xvVeUh3Ri9dX1NtA3FkWHxRZdT1Nqf2DoJ6STTt",
  "key8": "2rPCRj8DnryrVoyqywnhMiUTEFjFroQBy37iF9FTacE8geKKjUvCpR9Hqx4ZPerCJ1tUrtiGnyeWq7QqPvew1m6q",
  "key9": "47PrL7Kk79RyqBJkSBFtywp5kCGrQ14CA6fRhJ55Cncz2tLc33midXjkZHCvRU1tHBtH3CjaXXtBj1joUGKmGjr3",
  "key10": "52VjhADf2rY79a9toTSB16SJ1aaYp1bZD6yjch4hMJZhLGkgX1r3Te3RdCDgfq1Wun3nkTJrd8HdB5YHNSQ1M6Jx",
  "key11": "3j4sUNmabMyWMuivp5AbTrKksJDRfiUobGNRVzJkPC1ZRNfbimPf2xfAnuLqTcSgHbckcpMBDeinG27wSTk5jReG",
  "key12": "41NmhxDW5V5L6vPw2igQcHq2H8DJp9yhZevC9xArVAj8UhKF4bsDM5QEKEgpT8UABtfYHFUriZca4GpDdCe1YU3f",
  "key13": "67SJ8Wd2Zt6FaEfNEtGReYckTLAEqdQzuo6sXs3r2mDF4s5ChLKQ4WvH1pSS6BKUkwK3dpJj5kaQMnqyp4T6G8Bh",
  "key14": "b26KgsAgx2rkQqRFXdogPhkBUGDLehXu8RZS3qK7NuAvT3epmHPYNk4XM68QwsAzJBYzL7gvhawvwbKMrTqK2qE",
  "key15": "tvhWh7NBrDidgcrbpGH3GCEzm9H2dwJyUU8a5ZK8aYbJt3dp74Gq8cygscSK4dPGKTALMNPmvgQkH9PMNDaw5Ka",
  "key16": "5DsWwCcwnvRwBgAuVzmCChWLYrAkqnsDAUF8xtKW8HXTUochyWWZ7xkRymgBqidt6Zm3jxZNUZoyFFUQzMeoUnnQ",
  "key17": "2omJebUV4sSKb3FmKbbSJGT2ukt6Gng8CVV6s4uyPVnJZ8Zt2Vm4sGDXXeDgwe7k3BkiH1g5T3SF3aFVP2YsctJm",
  "key18": "4Yri8Vn5sHiZw8N5dMzbCYiFdszJKCAebPMayZkRutymN8jpUmeeniiTM1sZBzfpF1jxUPtjwHPMiSmpcTxfhcu1",
  "key19": "3RrZwdLGu9eT7p7qPrMbuS13tMJbmnRV15uaK8XLCD3R7vzRjC3nNatSpvbJVNn1a7ggPXC3aVdskDWeXgST6gwy",
  "key20": "5rver2QmZpG57MNfKF3AjHp1gbG4n7qZ4Q9c9WQUWP8kbiDMbb1EmuQ9NTxZPvQmtq3BYK1aoDMMWdrhrmKU3drt",
  "key21": "5WdZeqzFUnM63JPp9hWrqvMzoZ8PQ43uqN7cj8sY2QkPSgajc99xPmGxBbEJvv3nKLDBZ4hk3QRbi2VQGFzR141W",
  "key22": "59zjYP8LcVvuCt3Tvi8z5pXKJ7CYZycQJ2P1PFwzYKisk1fLeiqHoGdbBV7C4KQmMd5gx35NsDThmNfts8zwcNhG",
  "key23": "4azUdBgipHsFdAcF3WkcKYRdoiJCkgWpBNX7Gt6sRJufv5EsMpa3JoTqNHp3j3hA8seEEECimCyzWPPhHMRHND6e",
  "key24": "655RGeJctPxX3xQ1p8g4szoTNs9HyvyawJmdsuWvy2gydJ33GvSdPdEJCJmZKbX75fpm3tUpq7bjsELcCG891dLY"
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
