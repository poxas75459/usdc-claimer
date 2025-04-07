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
    "5ozX4GRYVPEFQJomQwCVdS7itgqDqxTThCJt9pQVoXMys7P3hPyNaFeCy7D14NT6zzLE2NtMYCN1KR5rqx5iZxai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxm3CeSjscjUinoKvTyUKMQnkkgAo2ECiMjdm1KsudkeAmVTz1HRixMBtzZJAqAsF4vVK8BZYqSNCqdhmuDVq1n",
  "key1": "2qMYFNUAqRFMWkUwzmwP7ApfmR8wzczRcXK5hBCfKoyQ9KWq8ScoHadrp5g9uYB8Vu9J2wcGJPmui815mLi2YssQ",
  "key2": "4k6uEDca4C3ei2oX5QhSUExcySUd3uWB9aj17pDNRwMXGBLzxpoHqzbs5eUdC4Qu35BtxBSwMb5jVkjAJ5wmeWCF",
  "key3": "3cpSF7tQrKTPLyGC1dkZystANy2yV9LmujA1xbRnRK6bysKtb7Wa11pNbdo9S7mY45hxhM2qwYVF8UE1hAiz5Dy",
  "key4": "55vxPDPKmZvYzUKwiFbUvLQC2cMbdnVke4wfBAxC1Q4LTbBoybzcoRZdiwpSkkyztQQZY9egnLtJ3CT4C5agsP1M",
  "key5": "4pcrDCQpgpW5Yw3F73JJx6eCUHrySUm8bQ3SeAUZ1QPbEYnZ7sEJQmmDjEJUs9s4dMDtjw6oqh7T5nEHKbqB6hcK",
  "key6": "vYLGTWgGWKiiSz9hLEFDsRa3zwVyZsWAeVq5YykAZXGKsQjm9bVSbg32mvagkt5YPMJc4XRTrno4vZjVRTkkj9A",
  "key7": "4QybTdtYrQg6NgpU7Hhww7BXtnFWXgia6ujwzvttuCcYECU29jgmUGu5JnQAqfFXTiAnjtKeEHSsjV72KbgG6n5q",
  "key8": "3gnE54VThuWt43SuDi2JjAxsfDiceNebeXjkvZv5KNg5yimPaMpf5rXjtEzFdm69SsdKgqbof8N457dBWKxxYtk7",
  "key9": "5z9a2Th9bBHpaYYApEEEC8DJ2Z4Go4ExRGPVZVqaL4QTcH5YAtq9HU6CW64eyJzVRhB4epyzy81WxbtTGGjocx4d",
  "key10": "5umuxdvNBNDf3xwscXtGB2kHiFHQjimsLJ3XHf5qFujQqxKaxKqDt4aEMrfS3MFKZvjhKK8NqdiCo6EPXNd8zCRe",
  "key11": "CFbssNLqUEBDjFxVPtgcSmraoxwGY1xXysuSRXefFpNdHw8a4pGuw4QiNw7wMTjFyQHUeD66xdXyn9QTz2VkuXf",
  "key12": "3NQ4dY6oGrkGbJVoRNtbXwmpxyU8wkpHWttVD3eJrDqam3ZKnk8zZRVBvGVzhkPbk57LUuNw9jtBEBSodQB7UCe7",
  "key13": "3wPw7CJjjMYj1jomzrGaxAJncM2toVuUCePyuwMuxEzCp2rYTKZYNiP8bT6wmxmk2aM5Kk9TtAqFLugXDRg9zkD9",
  "key14": "221vmVgLC1hUVtax2iQTBU7TcaZxL1PdsoBJTeNfp1FnxDozdVH85HE68b8FPiSjNrLRZ3C97g4zRDx9cNjJ7wBu",
  "key15": "5JMcY1u8yk4taN8z2zT2NMPHCJxXLugJamNh7oHn3NizHcsUXWkF9wXcwCaLUMSQA67xSwqowcdHWAWr2zsqW7it",
  "key16": "2nfrBzynvaFCjoCJHhetevMsageuKivXabekq8FBdUBcX853uYqZ2QaXbtkbvHBdv73mNxJAoiniueFYxsjEDbos",
  "key17": "Gbw76i8BP8enrgX8fsDDw2k88MZ9bzS99xshgadP5TvqjThzxUJcEKhwmPE33VjGhoTpwdVXuCkyW1rh9izWTfi",
  "key18": "29HFB7p5TS5xB1HSjh1ssyDkdPdxBy2nQK76LGAuJtRd1fuAQqK4jRyCj6H93MqFjN4xKMoKnbyhBp8EcHXKTNTK",
  "key19": "urxUV44vmqPcPfe8UB5towpNm4UYQwwqpqxz6QPfb8KHv6QTbM4QZ91oxfvbTp96WLHwxNFpmwzQiceKhXQ9Ukb",
  "key20": "3pebersCNHKJfX9YuBaSLzucPQiCrFSDGWo7Messdy9y91KNxSdCqzESGKRQSymLpWoVFzNSHrCur7C4NWPsE94C",
  "key21": "p6U6rQLjruFyRMqwS8WJc5PwvmVhWLJdNNA3WUQ3Xm2duPC46AT9qUufwo2bDVpmLwmMopwSRnoGptPXDARkD2b",
  "key22": "3Rquv8yhL5y3EfPjsD1FPHeTkrmQ7KFVtWsXt3G5bAYPndJtNEffRGKmj7PEyeBhNC8n7YSzZs3uwM6WLZ1t9b3X",
  "key23": "2BceMFPidTb9iES7RkJ94qayXeAszmmnZjcrjMZJ9eLescsp2cZ3D62e72tk2BG4Xh391ksBZGNp5DYhacQiMKfM",
  "key24": "5fnS1jHgV3KEiNiqgP1mZFBGDoFdd9jMigucSXQjGwj1VVY23naigwCKPW8rLaR6tG2uFKGDDB6FZo6QNbrUWUCa",
  "key25": "2B1od3TtLwvorowGesMBRgLXgL9etNuTgqFL4BZ8UADkTg6miSxkA9Gca7wBrVX1mdbcJXLg7aePCq85ivvNq87s",
  "key26": "4fKCsK5DoAJoDAyktjyTp6cLwMx9AQC2nB1efWjCgyduaG3fJM8FJm4shXNvaemVTxvA8HrT4WF3XyHs3fu8XziV",
  "key27": "5Mh6uf1Cvt4aD3ZUX7xFcbhnLM48NtMQYmU4YRTEgj73Ds7su4Fwrvyz7wVg6mAu3sKf7KasaiBKVwyMsgHeAySL",
  "key28": "5LTENDaxaUiRnnu478Qt55aa3zv1A7N5AniHnvJardtpzkHwBPrKVFtTg1Tqh3RH3aKVwyurJJenuz5PqN3Dus4q",
  "key29": "4XYAbWsvQXL1gWgqYogCZ3zPPfXgEGRW8MGCwhvgYFk9z5FZnCW4hyzDLdwYNL2dcP1VBcHxyC9JEuFgHEBYx4cK",
  "key30": "2xJaWdbiTVGUT5xv3DUiSUNwaqpnkfbj2qsF5X8JupmfS8D7vb73WEtpWeGJGDkx5PzD3tWcB6N9wdvteUTBGrB2"
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
