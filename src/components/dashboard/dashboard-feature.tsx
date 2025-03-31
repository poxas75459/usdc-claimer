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
    "5BmFXPcLUFv7VdNpsvsZyG98Xsr1JWj76CXFWhWAkS4tFQrhxzq9kQnFwpMqp3CmVdPrX1VFN1CxkvyPcCwdHkAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1HQ17gaq2ZRQrN5tWzthzSJErQG4kTZ5Ho2dSFs5QxUVL9S5yBPH6aF5Z7gjofNR1WnzGm3nMmr9QEsmQ7tGFD",
  "key1": "33haEDrXLMS6ZjRs18qtuNFpWk4ZpWynLT6xhcAHuFbu3eGFPGa73LUiJXczXYMkxbAhss65LaGupC2aKitL8o3f",
  "key2": "3KP7Qxswpf2sofi2ftbCiyJTegJ3zyoxKysGQMP2MhisPGYaaHmfM2bPisjwWtHytw5DjdwfPD4v29fXxyjP5v73",
  "key3": "62U6arN4jrbPmgSX155MYsTsGW2WD3UMhVcfYx3hxioVpYxoyNLAxoCH3AQEjSA62wieZqA6e7pQL7MpJvyMLYZd",
  "key4": "2WKMSvJrVFhJZbFNNeNLuPguusrSAaHq5h4FCCR4NaBEs4pnkY7n6VZhSmsw8pswRWdBGH6rX3driU2PF2urB6wN",
  "key5": "2DcFgBiZaptuwqVQWJaYcBveUhwdaNQVEC8b29fWQ9BByTZ6X1Lb9LhymnsSkb7dewd2kxZaw9PsK91XRw4MkNuT",
  "key6": "3to6YBe5QZAU2o8JksaZZBVV7h72sgNoXwTJ1JD2Btx9hFotrsE2PcvjojWc4kzgANMzaE6mRnC32n8KP81GcB97",
  "key7": "cWsuazuH4KeihhjKgLritotCjusSf5AXUwLZkuXzYN6Aw6Ebuwvucmz5SEe92osYTMJ9RLkHntqyPVfnFP2N89w",
  "key8": "3JenDiuTgyjh3ZtdDxBVUsD5cxrnbmjP5VXV4yU9hz3hubZQjDAZ44D4YexcpiABFuy8SkMFpJKJYv76dbT9bFjG",
  "key9": "nargLcucGz3Y2eLPjWhesS5gV7HhWyQS2yvVrHbLoNB83zJRewYreX94yATDKGF2s6ZR1UA1BDAyzfEm69kUVSD",
  "key10": "2uGeqYPicEbTTSjAxEVjCXSsNjjStawEDGEcTeozy7iwVtzaSJneJRFue1D3yc9piFS37x3BJddRgiho3NmcRhWF",
  "key11": "47bWWtJsJcxbjQ4WZUCp5uLENzJQ1wNncEZkvgdSDfPse77DGd7RRtUyrnXWHaaUhSGg7efFkbsfun3yFdcsjKxS",
  "key12": "2a6UVR1zKGCc3k6uznKDDQfLKrnqqTEERn2Bo4bcG2i5t8EK9xSBsvhcM3dBtdwciKwWSWnx7AGGWRzZmuFZGemJ",
  "key13": "3Xn17J7vGg5QpfFjetKnRC3WYmNAJPSDBX51RVVSmzQrF9uHbP4yagfGpwtwZZk8UkKCpiqoXoJqjUtXgqKF4PmC",
  "key14": "41VpmbemsxbpXrzRQE7irNgEAwgEVFcJP4FVd5vk5ZQ45owX1YefBfjbXeNDHtrguDhVZs5Q2YU8o7fV6eGBVRXm",
  "key15": "5p3pXmydUWQyr13w17TMuwkjbgCBL769T68vVpb7ituMPhiPrQ86LcEom5X983wBgpsWtxGmCsUdEa8oJAaW2v6g",
  "key16": "2wAZjz7pw4PrcKrghBYbT3sj4CftM9WNLGHLs27N4LzKxAGgQJeMEFkAKXwvn2tkZ6tuUQ5JxMqaosDYc8BnWTcX",
  "key17": "3wgd4WD6p8UQsu6wcn1CgCRa9XarjeKzmzDMuhoSUSDxzpePhnaYTzF8hp5bN1scVFfe7XzwzREYpDMS9WMNnKwW",
  "key18": "5pzGfBTLyPN18xFUZ77r9jybG5CRT5gDEUEkBgCiNSwWi2sikrhEP8cpAH6audwwvjrWaWJ2ZUqqzvXX1JP4unWm",
  "key19": "2c9sENatTKYdjHr7nijnsoiYMCVqQBhMYjy3xn8irQzbvin12rLGRvY5jZebpcESWUXYs8eLFrDFeRqmVy5oZ9Nw",
  "key20": "5pjDKCW2maoPFg4pEPrmnKrKzWZH5fhS1ZJxfYBgwo7PoeETXkr73pD4Bs72ysYvehu9zr4EtAeopEM6yxUeZVc7",
  "key21": "39SSkLP6ksZYH7xExdSv5Fmq6G3gDjhzPQzgdZtVG1MiRcBJKCVruEdM6RjNWGFa3zpXzbNw7hqTkXPh89kTQqTm",
  "key22": "3Wsa7vxoePo2fJoYZV3ZDWzUNASgu1F9RXQDhusUtuTLH7JhWGKySw9Kr68dwVsd9Xzz8VeHcUyKLLCyzJVFGFm7",
  "key23": "HfBUco1iQa4YSd7TQsdb7KLU3p6CNTG7aTXbwfERXetuHppmcHsThEGNA7VrRMMA7TkCUEuLCdnrNVFy8wim6w5",
  "key24": "REyk9ube7tcG25L7DqvikAifhJg4nZU84GoFC1n8Cvi9KUhp56swzUouCeXAS2PchhXDNW4oCdF8Tqpo5Y6n8bi",
  "key25": "5rxVmseovpNvt42pmbVyHHGd4LuDbRizbXsoHfvnwnJJSAxce5e8TN3acu1p2qYWy356pFBfkjJPkPFxPF5JoKmE"
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
