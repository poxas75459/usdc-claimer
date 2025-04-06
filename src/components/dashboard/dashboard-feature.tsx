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
    "52hTf9EVWVeHtBDTm2jbEFAWeFPvxReJ6xBDULgAvCNrYHYAek1X9qrn5cxd7tVdh9rrWQebzW6TW38fPSSrqBb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EnXFEPoPpMqJiNdJUeoe43dm23fD8wSSK84numEdv8Yg1imgeCpNGaxueSkpWn6ibe7RFkc2mcRBTJ7vJw8ynWh",
  "key1": "2RWyqJJKx7jtTDNDDTMNLFEp1k2L5ECrwoLaXAPR4y64s3jconyGATUFzDosGFkzWEv3VTRWTFjFj8rgsB5WuyEn",
  "key2": "5RNevv2K9khe7YXLuxHDfLKoNtWQmFRYQyrK7N9a2YS9Eq4AqHqtn3KsFygPvqTibpeM91Gsc7YHwvai4H5UMz3F",
  "key3": "5uGrmAmj6brvffyHEMcnEvGWTojP2CDhfCEaKjWTpQfRAZefrjAdCtpxogMKsxR4FRwpATvnaAkfEvhcT9NoV2bY",
  "key4": "2Xwq6FAAyEkzUfpvLSRh3gNQC17rwupNgE6NUiL2LgG17MHf6xiqdm1Ngms7xVyBsK6zh3AdBL3zB853LMCojhMY",
  "key5": "47Xwb6iiTmvSDNSt8Tejh6T77sADmhgDYk9EgzpcwE1jYp2CBXcgH5f4GmibpodUjTLDMTN1fT12jCvMkLLAoPeE",
  "key6": "3qyQMB4rm1RxNzVGAhkinj22AR5VLNnaUQH5oF6AxGxDiqxEi4nbHWWXizuZc4RJwd73QDYJhvyAaw98Lg6xusE2",
  "key7": "2C3wWCho6WJXuKcwTXK937RfLRZvsQbh5XdJ7St96d52pB8Dvxv24YTtZeXyaxBje2WSEQjsUaG9fdfv4diS9Ccn",
  "key8": "r1nBJcuXhjKpsBZBXoryqzHwYxFtZznxsBnw2xvabgEwUo2mu9rAoeQ93Bz7c4DnyafcUQpQNmZwCNVBgPoLpLU",
  "key9": "2hzmarVHQwKEoR2MovEcEwTH2RtrCpLGddUsMMsjAyZvTgBYPUPYZt5z1PDtBtrStGS8DBFwF2LeM9AZe8JS6TKj",
  "key10": "TT5kgxz1bFvMaQUBZNRDu9fGBFp6fYiJ3PdFRW8YR1cxE6hyouMyjcwGUXjC3iU1jrA5rqi9xUDKyXtRCK9ys6m",
  "key11": "pDkrGc6s65hidVsv4HRSHC8jKm91fD6fu3BnZkk9oJMegR3wPchr83fPTUtNtLhVYbHCu991tdtBjprfKcnBR2v",
  "key12": "3VMBAEC8UYCBtFfXYhbC6KHzQmYfNAd3kpZkVRGFUYEG666piJ5dBaWSZPes5gs8yg9DgjCZtPxKcaywVyAhzCPx",
  "key13": "2Xmp6qLrcsT7EiXRjwsJs2eTFHV48R8uYmgXNAZ6gXfF93czigmfeTbJ8mKVsCgJLmPvMEXTf68Cd67tvsz3hHgo",
  "key14": "3Lju7ndECujaoP6W8FyZdw5ExHBrxa1NUmThnrhcHhrfaNGy4iNHzAyeZKPq4XFsMa5DANNEzH2ZmAeJLkZg7THA",
  "key15": "jMojseQfWnBJ9r9C3XoJexyPgjw6vkz5rduUJNg1E4LFhAfUcwgnQnqvf7LYTLGrvoWSjMHimLdUfu9hqxFjScR",
  "key16": "4cxgeV1Dw3epQYH5SJt5HoudGPSd2rfNzvyp39Gzw3qHtx12YHhx5Q6gSxDy7MnnYWWbne1pgXmQe5GQh94WTCkv",
  "key17": "wrhzL8uFBUw4EfMe7Vgfk46nrh2YsAiMJdCouxSQuESJ1R1gypx4TRGvu6asx7RZFsABjLaXWdGRwGi91tViAeC",
  "key18": "5c3SeQmYuNKJcAtE7KkA7Ag7pJ9hUbtws7HL2U57tJnanJ6yYy6vrdVW84TQvC2xsnVupZWcrRw5mJ4vZyuybtPm",
  "key19": "63qKJEBAfLoSYTcgA96ABQrfWSsiUqdfA8feW7eTz9GKfgNq8sUH1bgEtB48XLoRJMQMRU8fpJ7qN9nx6SGZz2JQ",
  "key20": "rD4pgjyKEfrv7JrrCNGBUBnGsjHa5HuHanf2FpPHM9bDLdnpXb7CEg9XULXsYLw8uGh2A5zhTTR7nrPJtd9Q876",
  "key21": "4t46vWM3CjhhnoHD1hiBhD9nosfiaeKCE2d3jgq11b6poeZRqVbEZBr16AFvS8RPpdRzTk8t9nUyTbTHUucY8Ap3",
  "key22": "4tqhnzwBvaE8PN579K8PZP5h2t1XPrBNvkf4871t54K6GGxaxjHYktGFk7VUFeuRXRL3fE8TkGfoLA1XkMhvSmVR",
  "key23": "2QFoBGB7ES83yEQFFBfNLiA136Gs8pS4mzRG5SjCrGMAjisKnNkFaVpKZkcDziiJN9854McAhEv8Rxmn8gVmdxow",
  "key24": "1HpEgAeFd8ipZQemvHJs6DZn3wzHiLHMJu3hSiGKK2tcEkY5epEJTL2f3GioDwM8u54noome6i5dpSBskdkTYUF",
  "key25": "642QznPBGN5ZoDuTNBikXZC8W5jEGm3x57bNVttPEQSb6pm2G2VVCM9TWiUVZsTLLJyrjXgDquMNgTbK3P63VERW",
  "key26": "4NckM8ZsYye8UkGFMx1UNeSJVic2uTwopJCwjDnLAxJyQHuk9MFDRcctwvbmJh9x4kjkWc3ipUYLVu5Zjgk1pysk",
  "key27": "4snActJwzRBDpmZVTN1DvNrUpYMEhW2Rc5npFVdRR5jfMv8nyoWqeWv92pnZpsBkYqsMSmqmAiusbrcvnbfngLyE",
  "key28": "5heD33q3eFEdvY1qvDLxuGg1QDtPigifJdcAt6Dhtgq6ZaLAah767GAiQydwQsn8ZUvf1qyw2Ad5ELAUuFmk4HFG",
  "key29": "56d6xZeijo2QwxkVEKPzWvCQAfe7LGQnzLtv9ij1SRKVZhQaVENs6GLpriRiuWMmPG1ftfXRdzYBcq2ujhrGyUG",
  "key30": "TJWmpjMTWibyhgL1DUiSRtBvme5E3X5Tm2Pxgdfa6HnWBTW9knjBVLbridRYpUw9QHcGbpYWJ9bAmeH8sq9vNtA",
  "key31": "2vYXxL1oiAktKLTTEsJHVWDLdJjkVVSDPNKjkUcPGYHcbKLQYkTNDJQ5qLT5YmSLYPe9w2BdJnn1hPc7QvaBcA1M",
  "key32": "4DzUwEf3wwjWe2t6joZJ2UWvAuKtvGkwQyD2N4KhTo2Fgss4ox1UUwpH6ETewdnmoEfhkxZPDBScauKXDR2G31mZ",
  "key33": "24tBWSVDUB4pUTJ1WcVbsqieArDv7K1z3x17cCmfg6EgCnDCoaamTfzVGW4AbAJ3HLyspjf3utbxkrQsc7wCLpKg",
  "key34": "4Xj1g55SinQdg1wPHWR2NuG5sRtkWdoQwnA6B9jzSTrxHnRWL43DtaqhYDuZjUf2g6PJyE3BV9waG9U942nU2rwP",
  "key35": "5zoy4E2efSdXEvmks9BmmYhfn9BsA2R6rzc1DKBjqPFuwbtN7n1pz3bzbmWvnbEoHrshk5sPSMJcrKDUvhU2Bhge",
  "key36": "doZwGwcodDJDzkVKxMu4jajaZPywaD1KirSyskdjsieEQE8P819RDwjvvpvHxLY36CphQVWCqyWogoLF5WYRjGV",
  "key37": "25wHfvwcwfgsgGRXkkjkmYPpyqbxaiSqMSpyXXMyrUjUSd98aDHWzXq8RHYseNSkTSKv2MJJmdyQaDBGB5mYCVRN",
  "key38": "5Fw2Vg41p8bYUwrrMt13rivaz6cBPiYdx3XJw3DGrKaXrvJzGwuwDPa8upPHQ1isTUN4u9mVW4oXtNmQSDeNHwG8",
  "key39": "22gSVFgPXSL3hEXi4iGbtxGENunmfkwJSQ5P62ktviDXK5GABPYiEJXfW2eyS4BVKw9MMFxEdoXC6Zd4GSrryUKk",
  "key40": "3MzJtGRF9GgEujmxCv56D4X18emCg6GYfC3hLYPaCfVXZEjBmWDwja3zARgf9R2oBLdFLrtGangjWnghTcYqt6Zr",
  "key41": "4LhtqVQ16MCTXpHSdsPALZKKV6PsjMJrtDsLk5ErE3KvqREu2R7g2GgaZUSgpc8LtuRXpC2CpAMwGK9ZQVqovNQ6",
  "key42": "4n4EbjgdWcYTyfYGy2kL7GFurZ79SaqcrYsjQyxxMxygXisPQWCgwG8i1ds66X6a6iWFbSeKGhbHE3Ke3pRExQxz",
  "key43": "4E2CqorUEYwWBUNHrWUaar79rWDjBK5y13LD67kD9xjgg1rJ1mrxUYM3TNaij1qHYJq6MfSzYnDU7VbAZevouyDL"
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
