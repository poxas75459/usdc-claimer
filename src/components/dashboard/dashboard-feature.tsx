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
    "8Nqmb5HVdN5wxLpDoHYNqErnzF6mvAbJ4FQWhBc5ojUXGEyMkmsnu1ZzQtca6VtsbxHWwDbwXAgAaHRUyCvMKaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EBL4yEk4nD3Dk4GD8XaZT9PctFCR3MQ6XVvqkcftPuxbbshCdHTWnvuHEuFaVct8ffyihVsGcPQ6rKNHoyczq4",
  "key1": "5HbnjxHw5g1Q4JHrF3mVGiVTLJdXVx6bqeQndeS5rbsae51QBhSF45eFTNymUenEXCVtv7JMRARyy1xVq5RLYs9A",
  "key2": "5hEgiGEdCarUzT3sMZuDPGB1KzWt5jRjodRXDeccKk64mpFNhVXYLAXUHDvUJKh3me2z4ygceiYEwGTanFxw4QFQ",
  "key3": "3h7b3pEG7jvxuEdBfN13XwaukjA2LkuEwWCcC2mjWbwMHfGXwiERe3Tgd5JdNYnndtNidRXHgHu5LmVb5RnWHX53",
  "key4": "2ZBtKsiJ2nC54JispcXwgtWnKBaxoW4KmNYpvZ4QkrLdu9vJNhf5vzPWNu2HBfuqnaNFJQWC9TQKRFKEu4bsqVjb",
  "key5": "56kUq4ZM4E2whoviJiKtaVjCya2zujwTrUhJ5XYzGc3MTsx3UHYM9NW9MexMwdfheQCvvNCMLyqLUGdG9Uog7nBt",
  "key6": "2tF3cajEqrw6FmhKRP4stZkwXL3Kbs2TvuRLQQwU1hU6QZ54UBKUJTMarrwqHK2ffJsjYQDtsxAEHonjtUGVbBQr",
  "key7": "5pDZmfiScSrvMYmVQTVzCvok7numPDv9UCkuew7Zic1NHMx8Mnuc8cJCa6FATqiqPf894Seqkb9DbQ5Z5ifKPJH8",
  "key8": "3MW29wDzLmb35CruiZFTiF73UdbLK3cvjo6Q2axd4aJ4Vp9sHckDhcT6m8xKpCeNLSLNz7WWaPgAcrphj3gjurRz",
  "key9": "3kwwMrp9fBmeNKaDmNLAyhruNboyL6j4rBHFTfKibpaRWiDUVAERvRJVfhxRYhWdDm4s8K8QZq9GJghNrJTuMBCt",
  "key10": "49csLyrkbeo6zrxNWUQsHtzZDLgxqXMJBW5EwaxvLRfEHtDnbT6BgpY1c5BUngMmzrvBHjGR2uzyw6wjeaDqVfsv",
  "key11": "pNfSi9jKcwvhiKmxnunZK9gxhyXUAyGHRrcQzxejxPfPhFPjTDiDbXNsv3bJQw3FvY9b58rDkUJm3noSUugX999",
  "key12": "5TpsZxQzDPbmTepouKiJQDreyo7J4xaNfZcYPMb3tcskHC26jAakZMorVs36zg4UZnd2C18Y6Brq7NjG6onrXmyu",
  "key13": "XMiSPQzHYcq6xz9K97fyHnnBU7TCk6EDsJzQgyxUJGD1avD1zxNQtYjeYBy3eNo8Zzw2cEbmDABVaLSRt4yc4wx",
  "key14": "npchfN4jVD7QEULdQDEzehRkTFGKChLJWPrWFDbtXBxKrt21ecsHGpS9FGGxdtGAAeTL8zF3sbbbRRw9kavgo16",
  "key15": "tmAe81x6kkSE5mPwkJsXNHFVBgYnmW5GQmKZP5hRqEnp1YNX2TTqobHS1cXDpVYPcTW17Jp3j89imczYsuQGk6g",
  "key16": "3XHDw2KrbfiBBiUH2Pw6fSUyfCKYu9tqqd8sQUusYsbvR6sycE4R3gG8qy7p9mJ7W13FZYJwHVdS8kydN9AoF963",
  "key17": "5MrJQTvSDiZRLVZx7Z6VbEdivdSak8ujSAwnpcTAecWFLCPyBrD5iYZyNMScrr49H1xTmUMoU8Yz59wC2Kn7QBGQ",
  "key18": "4QGEStGQSBTEkqxEWRFH21kPvMd88uhNTD3imv3FCgYdyYtR7c8EK5AR1bhcwaAByvmXLEVY4KnyDo2XHgk9n4Ug",
  "key19": "569RCEVHbEKSC8WLHNM8E8ECqMaJxd3aNJQoyriXFSvSfdp5XqUBVWDhFPsLKZSRTUR1Up3YgpjuQ263jYZkA9gE",
  "key20": "5VaHKL8VqcMHHgCBVL8sLPiopXPzEM7hHN8FTVCGWQyriXWmUt6LV3Tstm3mrFCzotyAPXdUx7tssTS4QgxGrnxi",
  "key21": "61YvrYBy2oLTrFiJ2KBWjfsHGfYmMFarZ6iCaNGaTuDQ6x384EkPVfoQN8PQZ2X3kL1st2G2X86c1rut9o9Wcmrs",
  "key22": "233cCp6nLbmc2DrPJ7SgPpUxsNdVDfzmos7TB4KyKLeosNaCQid31FgJ75gk9N6TRuinUMni1gFjnv4GMWUxC2jW",
  "key23": "49Tm9MyiMwzSN4B3DfBNwzdUSB64fjLbH4HBL4zbWKoSd2SLrwFbFymZNf4L1WeHZwoLMuz9AqzwCWpnkWH76Dqd",
  "key24": "piZhB9QyKTAJHZtvER2hXvE6hBcJTCMpoN3Uj4GBRZ23oNeLAwZnyv2gorr3JfKft4jeQZSUFB9eC2XKyzsFeDu",
  "key25": "M73UrY1uUEqbidsgev8xUZsDAPA5LQzzGjdSa5aM9F9rSYdN1mgoJc6WsBmxuKYLteq1X94iEuSWYCDLU7eP6FE",
  "key26": "2En6NfbhXk5sL6drTsqKdVzHAXaK6fqaxiG5VxWNiTb3CFPTMioea2Dg31828NDeQ7JQ3MM44DPWSxRAYtGxuQnm",
  "key27": "8ow2jmjKCJdbptERWFzcefUZVCjG33Ua1cfX7DrTfXM2uNmok887ih3v1Zw8KyyhrQchCJESNzts1BRPE6NT19Q",
  "key28": "3gBisTx2JMQBy5BXv6M5rdDZae3c9tW1xrT6x1JpgHP4FXFSyRd5Dji7HoB1y84b83x5iU1fSWUcme27LRmZr1Q4",
  "key29": "2rPWWaZycKxAcLCBJ9mvu2kpYzcWdN1JtZQxDUnz3zTK3nwzPrjAze8UxtxHvHeMv5kgvQ8ebvLGA9jwD8VXR7E",
  "key30": "2HDJDUFULA71qvJEjGi1MHkmCW9EnkY7d9Zn7SSH3e8icXPDX7y7VZumNRLotCHLMQF1Se4ZkzKzzdC1Jqw9B6RM",
  "key31": "2JWXLokHqDpXTC8YkiTgBNdCz5rX9u3qHzu7SGBkwpnXV54jBd9vkJBY3jRH1qmrirkLz6jCkevw4JYhWbgVTSu6",
  "key32": "2dac1AWoEWkVD6RUZzeTMYDTAtFvZ8asaZzpuuLhQnjN5BdBCuoPg7DaB4Eat47Lnv6Cev7ywTx5L4YckT2LFooa",
  "key33": "5Q2gduxpc6HjbDZUaULZQhTfUj4FXzViqUNsGdGRzgDJyZkC5Bgx84yhmF3XsT7ueyVez53tf1FeLpjuC74sapaj",
  "key34": "2QHKzJmNmasrZqg43CiGc3gBSN79yN6b94Y4BNGmTz8GeZpp9prtrSy2U1wdSBGgXuMPsyuS93Veg2pxaHKpsKkA",
  "key35": "2gNht4DoNw7HrT9K8eXGRwzb7fAQLD3ssF1782P5caRHTnoqTTHjTdn6ADVvKEzF67XvtZdtccuDqWTgsaJxECz2",
  "key36": "2GStm6q16iBVrWXB8Ar64y3TeV459LeXuEbUYBEbJTrWwshnkjBkA1RBdySm8M5Uojx7KqGh4pvJ27JnoFMZXntF",
  "key37": "4aHesma37qnVSDuxfBHnxiNvCzFGoDrzor2SLZxnRdfn1aURmHnqrfKy32mks59t1fVo8iVCMwn8gGjpuXTU5im4",
  "key38": "2yKCHEaofP2JAuC6ZzHaBPiho4bEnfzw5MoEuTePtivcNe5kW1moZdLwuGxRs2WxoiVh2a6qSPW2o42pEN4uLYsV",
  "key39": "3VmDbUSGtWHFc1ZqGCS3eL84xvhRNTa3bfaYDPvPu7TLPRykHariME4pT5z65umB5RAzVsesKnE3fxHLZ6TfYXsR",
  "key40": "zvifbuRy4PWM4c5zzTowBpfS4wyfQ2cNwho1FAzcfim7E4rEu5Afr9rzXJM7Ef4tSVQAkpyz9AHfnyeZWBR4gfp",
  "key41": "2EPYFUQQW9gDc5VgsTAMi9Q7RMx88faFScT2Nbe3NKvUpmPyZZHagkEgJBcwUpnyqNjLawswqWgASxicWEPWFC4t",
  "key42": "vbFqAG2mhTuSDWbrXt4xWfbpKU2gFsQUATXXEVAMBYTVjnQEzvHAPCVMnyAR5V7xtKes5Lo3Fjax1Yw7QHZ9uwP",
  "key43": "5nz7X11Hqzpqcgocs3zuNfdQqqRkXVV4SmWWyHoaXVUv8JPZ22tRUY8st9Ax5zNeJgV6Fa416yRYyTCy8XHDQd7S",
  "key44": "46ELvHCJzdMC6qpAnZGM5uZ4XKcF4eAVmFMBfaPkLX4yo9z8EAZT4W5v56M9A7tTD8dc1qS5vMgyGmLZe6dJ9LXY"
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
