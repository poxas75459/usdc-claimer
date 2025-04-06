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
    "5QKQReKrusXoZNm9xmCtPVLjvU8dLANuneH7T7J1ydgz5s5TbkEd1U5EGDTVv3A6zKFRZVcAVCFtW8PYYikdupBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThvKaJdaBXYAca2e5NHiHHiaPGsyfZU4yHq8eCiKTGu63vF8AQdRAhKETvARWc9FJs5JbhfP3EV7EcQ3rAm7NuQ",
  "key1": "2EKPHpcuPGtNs2n3zehS1FJ3riJ5izeVr7amnspHztYYo5XudwAoXjFGtmsQ1YWvqgrcc23cQb3YhkhdsekNUPLD",
  "key2": "3WDtQc8s7yNJ4uRgw1Rmvh21ozsnd3xY9SRW46mfHFouxMAmrdJxQrRtPbV3xYr8EEf1j74Ho83cs9G27Uoif7oY",
  "key3": "5YkcnfTTtvzmwrdHdD8GKmegpCAs2j17ZnzBiYMGG2Wvp4RGWyqj7P2HG4YfBe8aUS8CSmuzQWJ734VVKxnz9tv1",
  "key4": "3vD8C3UUry1hGzs93LWwR7ZDRFbvZHDjy1NeemZNvKeDT4ttjJarGWaqjSU1JRcsjeUmYNDivbfKPowiEJDr3ZBR",
  "key5": "5nh9cLUJWPC7wUZirZ4ZzrvnjVGs9a3VbuQMGMXeLwVE1z5ZpD7xNvGwJZki1WCS3B9CmnTDi8M4pmjC95xUxRcV",
  "key6": "25Ub76kWvQ3MhvUsSpGEphGY61xtHXQ9TrXd7dohc65MkRE7aH8gEwr6nz2meCmuxV1piPR9Fha5kaApE2cBjPWA",
  "key7": "2wBVNxqUqLp5wWgyyZYpE12jCZ7ByrSyJH6Q9JwiSozxChNmXfzMZUd6Xzd6C7PAParmy7Npi6U4TG6682rsW3ma",
  "key8": "1roiAbKABBedCCLzx8NFV2Ybrm5JKYkBxbcdQ5UyoYjTicPnruHgdXxPqwvt5YMgipwCUkGMR6AE6446Y8knYQF",
  "key9": "5tRsxR59bRNQTjSrtiqjHnFJ6VBsRYZunq9aViwpA5mN4oTKwAwrz3QRitNJZHzQtQBHqhHPKs6WYYdZSSAbvfcL",
  "key10": "amfWKMYEbt7cZWXsZmEGeG6npVbe7mQWVicEMEie7kVkVAcjdhwq1ssH8xp5ZAEgaku1bncknitAERQGEiVAbqb",
  "key11": "129wsT5Nm8DczdGb5iH7kDBWg4aKRAoV8SvoXgbgbdswZiq4s9MaULaFPxPq4ajF7QqkFRi9yuQLfMvi842nK2VS",
  "key12": "FBCtvEwbA1Tcdg2LmrtrkdVEP5p6RYSoecEFaztkG75ieicJSdVqRMPSHFnKDs5iDyUd8bMe3JR69z6pqxCbXDo",
  "key13": "3S5PiTYv75iv8FjiTrwirCysDDGcTNeLahjZjw6UE5UNHXpQqAnQRz8nvxUCpHxYgLNgKM5gCwNSHAjjdhHzpYq",
  "key14": "2da2bdeDR2fwqzzXYnzPhrqpdfH6zBsTCHfByCW7njQbWvN83Pgb4Yzf7D72Hbi5ZWcwmxnvDj2qsVwk9wVzewPx",
  "key15": "5GaLuamSBF3qNXRMdZN3Ac31F5NgJJ32BoeHUkCoLSFpyU4d9rzHEvsaYSTwDgPNBSNYTa8Fh1feLxGJrbYaNN3z",
  "key16": "RBTvTqDvFyrJ9EPyxEegCpiVSjkCTXY3hXvN2CXtoMwVFP9v9p13xP8DrFQ8QXTBRb1tDKwcWEZSeR7RJFzUbR5",
  "key17": "4jAZUminHefVepCtZ8vB328Sgd1eCSWKZJbZGxz6GAcTVLDiPXWi4hjRN64eeCZxkRoCX9rv9BbnCQR3VfVXVvCq",
  "key18": "4RpMt5X6wtZ1aTViPQDkV4iCwZrhftWqHsKcdHgtycsyo7BWEK8r2rXa7AYxFWfk4Zg2FYVZRsLLbnQmR9JJQWpJ",
  "key19": "3fjU9pZNWmy4eywxhcLfv7wporboD1F92C75ACnAnbXjpKu1VfsnKEWLUKPairdzfqanPczuzT2Sxrvy73vmjCJW",
  "key20": "4tGMGGUXBSk6ywXqq6EwgxdGF9nHPbhEd2wDnZWz3sf8tmNkTayRbLCseoVyv9YJhkZXWfY9xo7emVKthh6rDA82",
  "key21": "21stZzEVy4Qaa2CuS8UMcfsXCXbd8D31kKJCgzY9hsVZNm7sNhzgjT5oxHzP56fTdZKbpttC7d2bHzYrBbssEG4r",
  "key22": "2CrEmPKxJXZZy2HDtqSMQ4HQSuZJSb3Ke4r7Do6fhnV5UWsRrCGjs9iW66sQHdBMPfhz397TGZ9Y31Kf22BKvPq2",
  "key23": "3ZE4zvHy18XWrHHw6ZrsNLM232GdJZYQDKAzVKDf49eoARJjafEiaPw3XHfN7rtBQgCRG94v1NXXVv51gpQwtmpF",
  "key24": "3JFicPXMBz5AMNRKZmLvRLYWeJ11sZJnck5fwu1HSKphn4cGAJQ5y6exUNjnrJir47Dan8C34LjY2qg9mjUJz9ih",
  "key25": "i5x17B7iz1eAzdqKfMpBt8hQUuypTcb2B4N8gT5DxXr7gyo5eFQ7aqr43f9igT6Mmm6gt6ktf6eoiVeCqjq7gPU",
  "key26": "2QiRS2bVzjQMCwxUuHL8n2Vr37kUDonDiuMsWyMcHYhv6pxVSEkKyqtow1vva699pGcXcNRPZ52CCMDV3jt8CN6Z",
  "key27": "5GS3ruA6Gt6qQe5ShSiAAo5Hx1jv7KgpJbyS1oJmrXHM2jzQhTjaWPN7TcR2PCv8dUrCcMnawrVsRBDcJv5z6CpX",
  "key28": "48aJZfoWZ97T17c4ep3bnyGRRCiDdG8QDd5mEQgHd2PB78TPsgT7oA8oDtcec3qYY2NdRrX2h5BFv9QzMQJriEWk",
  "key29": "3SSoQfrDi1xf5cGxmPVzGuSjFUzrEnTXFF33GPtxqEbUAW2qc5RBbw8MRPaxQ32FcsqXtgixn63uT8afz3cJ7XL2",
  "key30": "4gLiyPsminyhuhPVExSqixB6A46wid2GGWsTD3MJUonjpXmNBpt4hSCREjqNdptPEJbtR62CZxXQpSUkQdzS51x7"
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
