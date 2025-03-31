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
    "46u44pPbSDyZHY3rvhq4wdVua45iGsHjpgcLoN9sdXY4SQgQUQpd3ivx1Q9H8qT12Uh5oc2r1JcxQJ6F1ero7Zhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCPpAK3mkZxQTtk8772RnXQ6EnSFP3KyRV7dZFGWjXeXnMFapV8TZgukiYw6jdMwt1tUV5HhLuWYggYzMoMfJG9",
  "key1": "VVfkmvhWWQyr73ce8E8RqNLhJWMcr29FmjBy3KebgCDuyMwRckf1Fu98Zqwce4p7z58iPMHjFGQCw9i7BdUhtQf",
  "key2": "61P2ZYdhwr6faj4EqYdyJUpS83bHNE5mfWtPPHMehdwoKdCGQtU37g3sxrf3QD92J8BGHeNDfmiZMSoo87oeWeEw",
  "key3": "5AHcQ2ZaLWyNkgMDcEKFjx3UkNKSuzoRLDC8avi8mhy1e5NRTBfjFjgggjTayQHTZLZYfKSvCDXqF6vSAv1sisyu",
  "key4": "56hvLsm5YuNynXH5NDyMm7x7rn7XaXbkz6wPQhPMkQnnUfJp666DbnSLP7ZCSZdtf1dtAB93PyhRmVB7sg1kUHSX",
  "key5": "5PP4nahNt1SyViQezTtNM8zGCF8afTqJjVamssCtZhxZiQdkYq7zQhHGWM92HL7mpFpqfP43m177Gov84WtvGhkc",
  "key6": "bzPyAqebR4dHYrGt78o48nW9nxXJyPYasxbpC6i1KZFgxNB1ttDCaXdJppqxpfasYYAhLV5QrEX6NYEkPhBdw5V",
  "key7": "3scmTj7Xyidc61x518jWxJBPuvvBJAAoji9QBpApSmNfR3pSXadZMdpPuS4CbMi9SkVECS8V9n9Bdu31a1Yu3hFy",
  "key8": "3cksUpDtvuS8BKu1R6ggnKw62nji93QVqZ6pKtoVdgx9ixgQTrr6KP2RMvY6DUuEArgb7CbtakSJAYaZs79ZTVDg",
  "key9": "5Fa3nVvxgEqVTABabC9HEYkBiMDBFqJ1scXYg1oHTQpCtpipxGPQjk8W1oAaFzskWYkEqqU6Au84cJR5kz1uHr6M",
  "key10": "kkyCcwQDeoNUPAqKiuC7gKWogpPpm7t8Y4Agc2r3Q3A7Gx63KfDna5W2Gq32qDsDVnDmy2bLFhrjRj9Ani6ob8d",
  "key11": "4AwgSqm7PZDRu7UeYAjLGiJnbm3ZwQMhwpdt6xt1b9EMvc6KJe3Ex3dvbA3hMsn2nq4u6gJDc9gKFJyXm4jbRzWb",
  "key12": "4ze8zdXpdcff2kmhKWUva82sckvqFNMkCZ2K9V3a5N25utjCwwmLymNAc3Rp7qZZ1B8D5gjPnjinPrmZbwcX7jTW",
  "key13": "3zXoGpVS88YSvu4a6LbGvqTXn5WNN9DJomkrQmZfexjBou3dk9saHjQnCHWkPR9JPahnfKXENKA9oYY37dB4znGF",
  "key14": "aSwagR9FHDezBFRvAo8o4LRqAFUDP7TnfqHgjEd5ueuGknh8VetPo9Zs4W3KWvea6d4Cz1C55HkN2DSQKBVXqek",
  "key15": "3yDrf4EzT96U5opiCRJFkMuo1ACYcnB9ThmoiMjjU4UUai8D8kUWDQBDcd2KvSBQDnKwCDAWavf6pPnYjL1WCqzR",
  "key16": "4T1XSb3zN9iAVxjV2fioML2QAS49eb5BfZQkX8bWdVXw5n2ecDFgq2K1RS8njygrwk3XjFJxHgHeeeAQdMTCcpyo",
  "key17": "5NnYSekqvdp7TA2v7igwBB3dzMrw3LPY398j6wvRZgu2MTY4FJ5yLyfBgvonHKtHho1w3HXa75AxYSNtjnknGArR",
  "key18": "38xwj8d5gZP8nd2Rkn9MzkFMqvQstreCSgT6SpZZtx1CQWrvUyQC1DE9URJUUCoyan61aikwaUjtZpkf4xSAegg",
  "key19": "E9Wq6jQrYUHegeNop8cwj2EvWoA9EkT1tem1wEL9xFhY9SefB83mi8cVd7ewXDDTh4STJR5gGu2jSe6FqzYDnK6",
  "key20": "4Anyr9vNDcdvV3FCMmQU3NXUfGjUKNvf8WTLw6MtV9vcyScNJvJFwMCtp1F88h9mL378zFdvDioExgBGY3bNpTKL",
  "key21": "3ZXh1bPp2dZRcV8ZfwtRCjgBfobr6ZskDTr8J5DUCRkt7iExCfumFmYVanqt4cn2gvUrKPJeJQUs9spDMVPnRS9u",
  "key22": "34dsNmAhH3TvbyTnfnumpD8TSSrWPFNdaovC4ffyFrncmn2syNtmY91J69qJ5CzAKqmzkyn1YeSgowq6gGygWzDK",
  "key23": "519uAeTB7KaqniXDN7hVBm4qSHk5KQwU1EE87VeSGPpCyzDhs5Zc5ciGz9B9gafi2haLNfSPRvoYNs61cSjcyUvQ",
  "key24": "2ogDDMvCDAcVWcvP8RGwi8S177PvbiUB6fhWcBy1ZaRvfPLNvcEYcsHgDDzziRYrBjeScZoLybaHQEi2vPN3DbuC",
  "key25": "3s1WkeeknKxhxd7sBab12iDsvr2utXX9wZku5qvRFYEqsWuD94arwko9BWq4FgDyZJZxoRZr4LtgvRccTRQr7E3e",
  "key26": "4jnqeHQiqCEyQNW3sZqJ7ym7u2V7YryoFTR4fDdizrZod2ScWq2wfUEiHTsZirFp884aWr9CHE9n7fQcg7k7G8hN",
  "key27": "TWnneBLpyEqkfgnVZop4HdM2Yab9oLxF6yn8Qfu4a2m9re89qgTHoGfcr2WJZAAy7Frg5DgiP6NMg6hJLs45fy8",
  "key28": "2vpWdzki4XZBwii89Y6LaNQi9KyReEfmVtnNpLgWboZbQBmBdnmuiEJ264xD9JAt9pmfcKEE7SguZDdwEBNixdjR",
  "key29": "2Wz7RPKX8Ao7seAw5CRnbtaAVUTocu2XYkxdDMKUwVJSLWw6BhNysVmdVMWe7MsNHHVzJkLZz6zLvTM45fBGsdMP",
  "key30": "5dUm1uURc8NNTSkazXsf8yUCCTEa1uSbVXms8MB7BniTTsUZgmjDBCa39FGdRQtqSY3FMHy3Br9EfwAUvvR97BoL",
  "key31": "5MabDJnXbvgFjCuKhanD3K63VsbdQPoRf4AiSRsX2DXNzq7ccvWn78jmPpbFauVFAudAGgmkFo4uMhFwxcqqj7fW",
  "key32": "4qykkGXdwWKSyEB9XXKYNoqeWx6DKr4uf5TJBqWH3jALC8viuD3dsBYC6sxir2MBuKGx748TXfws567quMM34Qej",
  "key33": "5m9JXu94T6xaaDMn48gqEBRmgxBrR2f5F2xwYJZSEGKAefRMSfYQap8VRec4hatvmRAozenWMEcdjxerLQwMuDD5",
  "key34": "3Jmhyc5K2mZ6vfiXscNBdtGYZX9fbnRyXrPMFjnkwB26jo6Zfq4J7JvBDPZUuTz7V9uEG7ezRSpvdXLV3gayd3St",
  "key35": "2c958bUJJPF3PkrjEZiPLPtZqnXAgdoEi43UbGjwQ8yvjr74GVSbMLCSPM7tstXSrVkBub9vB75N83necjDYTwWW",
  "key36": "3Sqh4f7VLFJ2Kj9u1rqCBGRia1niGW7d1RQAKUAXicnB8Gi3TTNcQWefi1U3wqGYgZSDeaSxp246mh7KBS2Zb7Ew",
  "key37": "WcvkZaqkhKcGNZtxoAAxn1STgV5RhEFbAHBnoz1NhKPxr6vXk3ZwDHwLk3DRv5Y5DzsFrXNAhRosiJELaNsPhXA",
  "key38": "458cFtYNS1EvbWdzy5KTKWGjiU1KAefqyUPC827baw3teKPmmTZA6aRScj9raTu5sWquFGxeztrB2xPpkr4YnCum",
  "key39": "564KnFMPgLfPEpQnH6h6ve28U3TH9jRVdEpvZuFyKARbTA9kCeECAeE238MJtssNYcQCQ9jUSTRy94h9tNhBQiJz",
  "key40": "51uDsH77esfb4Sva1cRHAVvgtV4kq92iC9wMcvSepWSKfpfkUNUaBcDKfm6DwDxX4HgysqzZkRdaV4YNek5zJT8",
  "key41": "5AvsRBcQXgCeME1rzRPc3S3zdL5utjwpmYLXRLRLUGyWdSytWZgYRsJMU57nip4KYJc9FaYCPcAEWrCbDivr1aKi",
  "key42": "3bxivcziuodznzmnhuqAEyPtyaXSwEc9boTbs9CyNYQWbD16Eftn9fh4YJUZsofs6BrfJrWfrEemZZUMzbzdMEKW"
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
