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
    "5zCw4q5xe3h5uc2T1bfuXwo8Xc7k6GgjnDxRCuCcceQRU6kaann2Fnnno91uCkivzN9iV3qsiYJfQdZruVbs1W3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFZ8qKuZbuTbS67JFoJVKPmZFQhoG8JVZURvQv1DZYtP1C6uWpoF99bXiS6Si9o3VEjjquSRHo2kWPxibjbToaA",
  "key1": "4wqs39W6vdr6RY8XwTHQBW2AU24AXPq19XSgT29TTyX33B7RJim2f5M9h1VQqiswVHYZx2FNDYp2F31ZEzUXNNK2",
  "key2": "3qRC53XsBTJYvSKoQqAq4bNbdJFmzpgbZYEMpneUy5FyQsvTYeWMEnTfhZ1SWHVvX9eKMEZDYo8Rb95bXkUkWPvc",
  "key3": "2sXvs9HjZTMdB3ZfHnK43SvDBuVKeJQ1C6K9Ui3N1am9VQVjnMBTSP1c1uCvmfQiEk6gKzfWDCK42A69UtN7GbDB",
  "key4": "5REDguupawgxPhyUFEhpJWeRC9sU9TjgwrFrx3mAtDYtnEubUDMryNpuLc7Wg1WgH6wfhJzJtwG75LaUP2iGVSvf",
  "key5": "3jmRXcLYHRynq5g8uhmv82wjYJP513sQXpMbLfgroWmm4eg6uqxTjgdkZ7HsApq84ojGi6rToTCFeEXEUVzhXibP",
  "key6": "4z1g5irL272hvfwetVZfDtUT52THv8crj3Cr2fRVqwHuPypSTyVqcRgTx7y3v546CE8R6CP2Jio2WLCu1cZzqMQr",
  "key7": "2Ptx7kAyNtyAGJfAwkEFgcEFMt4U6LAtWfAhjmzqqH6siizYCghvuFvrH6Dc7KsrAutNvZDRWsgG1Hbbd68W6JGe",
  "key8": "3Ftoj8Ap8cfuVMrdAXvHYCPoD3hcx1zYfW5E5F8QeXUXvZ465rFZvoDHumUvcU92w1QBDCLsZSLQE7Tk9GrMMrk6",
  "key9": "5w7Xak7CREj2m1iJMVdBFNoMxZr9orFX8mskFvLAKx2kKje9wyih71fMvciJi7Dj4MuWS1fkVi3vfxkLB5hz3Hvj",
  "key10": "4npmyP9SDsCePQUYeMYpATPQdNpwWN48ucJQyJLcShQKev4cSbnKjVn8AZBidLSNC2WTPWHeVQBEk556we4N3Gpi",
  "key11": "4t2qouLYMacrGD8cAg2BGVGTcbt3ApC8EsvzT4EpPhkmBbd7K5nRrgycfWQLjCrJwmWeVpdcYD9qA81LjvoEnVe4",
  "key12": "5katg5nrvWrEaz6Pid2HD57LDe7edExwiirU2uQB8oD4Cvzw6pA14nArG79McekfGXCkvfr4fMP1YctgfecyYP2A",
  "key13": "4YkJUapM4FJpTiqcmtSsUDd5M5P71W5LidGLYyK8cfTqY9ooM6paN4CT2H1R3yCHzBegfdmppxR1aBtzxPk7XyTz",
  "key14": "59sXX1YsnGGXcbpiodJ8dZAZBibwB2J28xbv4ywKYa2T3rKLSw6L5ZxsRG5xbcrrooE8WGXJZLNpV5VXnUk2YqpK",
  "key15": "3aWjzEZGBRjZy9eqXSoM9A2LJaKVRcpd2JRQ7XaPSTVymBqVbLsc2ygPg7TjWnZonKRFH4vTAxFtEy5imKVSQRYA",
  "key16": "53f64x3PJrZGwag9W1W9nyM5veiEkGSMdtvrWpkC5bKss1hnZRMfkh1c7j9ntm7947ZQ5cMvqt39CwhpfJajQ1Ry",
  "key17": "61uYGx1or28nCjLmW8CLC7Dz3VZNuRVqSAgseqGhmrEudEtTaUprNCicDdzntb8z21RuHoGg5PtKHP5WbT5b7E6Z",
  "key18": "3NWL4Tm33pHn87erZPeULnQYQJBjXiL7ywRZW4H3Hf3944ngCJ7hKtbKGsPSq8zzFUgVZxZnnhY9NEvbDBDf88Pb",
  "key19": "3urd5PpW3x2NY8iJxypmDZ4Keei7uigDgdbC2RtFjLSM22kCYLkFMEoxGgMoLv6Y5FcSQaF5NLdbEt5szhe5gbRv",
  "key20": "4BCE4ZE3eKa34LAPPPVoVfNGHVeyiZobcads7BGQdAazGYBsrUmo1sgyDYv91ZATWDF647oCiKYCuo2cpkoLuAs3",
  "key21": "2jrFcnpUDsSWCTwprJcX3u6S6sygAqmdVB2pUbf5WQvKz1wznwXpfpeUoqhTBu5FYJnFDuZpBnqTryBGQ7Hr9nHo",
  "key22": "3wJRJBs3P2Jg3YYahEd2bRCtnH36biC8j6LRLfka3icoKF6uqTv2F8u2zjEvBQpg2m3G6iDntvWCWJfdZN2Gon9Q",
  "key23": "3VGpRKGvTxbki6VvmMaVMopRSAEA6pAC5esxxbh59uncB1mCQd5vBBjQpq7EZXhPcQaKGPUXTA8MpBsEhAL7nR5h",
  "key24": "b26z1MVYXvT4Apnk3A5tEey4KmrCTB3Enpz6HJybmTacPm1t1ic3CabJF3fasRN9sta29s4ZVKJuTdVQ77Hyf7n",
  "key25": "KnHm5rKJsrhGbyurRQFQ293dmRSecQn1JCMnD1vWVE1arKVwNby8iLA3ijPNZSMjsrrgEBAmUZWau2SfWcB23hm",
  "key26": "3pqPVfk3B9upGqv2vtV2eAgKoyz3K84Qvq3w51EF26o77VicvCpGKGYLhBAxnYH3dJSGirGKNaJUdjrcaxkN4VQF",
  "key27": "EwNeqNMBS9XxzHiwFHqQS91KrLGUphUTNRFeoyPxf7AK36gwW4KPUbutgBym5QQ5JzK9MUfNC2o2KTr4R3zaQJP",
  "key28": "3XJuL5X1m36TQfKwpiyPPmkFkwa7vdc6uNAUbzRWpPTqhGgByRy7uPY25fnEMcEMcAZbRw4cvh9puPXaToHg8DqC",
  "key29": "4xMe3HQCbnU9NnbaGmTseH2JTC7FjJ9pGaZzJ6RS5CQrPX5pzcogG49bUqVh86LD7PEvzHuxBS1Y1j8WD54KNRPd",
  "key30": "dNuttppQ3pdsVTCM47fsBF8MtKTmTm6FU5Zs2zjqN6qgvAEXtTZmubdbkKSSQCn4vS3HUJ4PTjj1riwvD7TZUE7",
  "key31": "3rbHEtzERMhdquuZHwzX6LD1NeyruFRonF8tTz6DBMyWsqf9E5RxHqZ2FcakQ97BFMBj1csCC1P3GoGSbPGcJ6G5",
  "key32": "3NnPxiazacKTAsMPMG6WUhGdXhjYgwJwLQz3LcRfuaaQXKiooPJSe5NwNqKRWx5B8m1pgMFaVKVxKAA1hjGvpZA1",
  "key33": "L4e9161mYkf3hFm7fRH2kvfRqjaVAHhuPgSXieX7nboy28STHGNsS5SCJ7sBVrEukfMponiEj1E4vq4NhsoLcKL",
  "key34": "L3BLiCvirNW261DK9YoVXguEasnBCj3JFCML9afyxt65WkmJfnr5SVKi4B6sVRd8gUNgQnLwwjABa3eZwYsFifM"
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
