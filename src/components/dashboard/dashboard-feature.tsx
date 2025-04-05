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
    "4mFqZbvE2m21Lw8F5hUPBESwVbof4mYgvdzAn6hNa1kr9G1WXZbxJAg2XZn5UBw4LVUiSoVoYzSDTTbWSJ6f6pY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSDEiuyTUW6SDruPWXXLt38eoHZ58UgeWR99At7pNNDToMfjmvPu7QaQ5nEXks4WRXEgvaWEVJ3MY4DBcVg81VP",
  "key1": "wP7jiSMhUC4y8WjJ5k6Bm2mDx6hBKrGq8vtNBJ78YVyjuUhMjYpkXMTNsiUSbsEGFXtVnp1H2Fpf2irRHnJtUM3",
  "key2": "2bMZvYcEyDCtutWhtcNLHB19gobFbHGp5dqC5j1pd7vusazD2Qgfqu2jZKr5KzNuoXZbut696CpVpfaAffcbZRwV",
  "key3": "33QFYdNZ9ehnNcAu9FbbS41zBGStQUtTGXAXNqMj6Qa6PimLPJhSH2zqkgkVb1jyyKf3rp5FSb2XYALAQaqUHZPB",
  "key4": "5zeTm1tUsMitiNQkMjVyYzxcpEHZdu451Ro9c1B8h11my4jHhB3GvPkKLyt3RXvo8MsiGHF3UxA8N6WGs5iKcrLw",
  "key5": "MPwxnLB14CQo2wu8fvQVMocBEfceFaZTsgiiTfYUBwGxCg4ddjAUjLk6mRgdWGK9yHrEj69xBWiNxDaxyCkRo4T",
  "key6": "j995Tf8kkF7vywXU4VK7Ut1LN1FboAEMtVjxnAgBuNCA6Gh87XCtEwfpH52W9c9pJFTszCSbDv53UML12Y3pS5M",
  "key7": "4xCnxX3tPnrutYjevYhd4d5Dx9dujv6DqyjBKJSxs3GETABnsnqUxEqEQ2GMpd131GkqiajhHzoTXcvKpm1dcoRF",
  "key8": "2sLG7widt1JAi6qJhL7c9x5cWrPT3X9AkSjEbJxCkXWrxjVJgZ6q9eqfxBfdFnNpAX3nNpXBxUx3ESAiLrQ9ef4x",
  "key9": "3hSCUu7hcKFUgGdqz464L8S27Upv1SoRmQiPzgNDkc4doGov63YpVfdnryfRZQeRZfYRi6SPw34UwTg7GsxP5tdm",
  "key10": "5VZ8sf7pDA9UA8UHYDaP93ZPrzUpoUmo9J7MZ3Ar1JH6hyErTqWaGptLG7xFYQZ4XtGC5QsD4mQSy1LTpRTib9MS",
  "key11": "2Nu36F2VxC8etKWzxCba6GGDgVpxrwP3pLNmwvjdYAo2vhubE5F7wdDcYynfRp6YkzNxrrjYmWvRRySLLRjx33Un",
  "key12": "3LopfKwywqc2nbyi3jxPHA6DyZcjR6JjKNDjSERjVrsjGEUGa8yDMPkTVsSadSa7moDU7cqdbqNGeeCjoBaroU5U",
  "key13": "3tM99qcYBgLTRKtZjf9iGEu5XbVrvue7SVbGuVbLc2HuPWVZLy5rw1ud4T9CpgadLZ1N8FRkzqoC1a41kPkSWhEX",
  "key14": "4DWE6AGnxk6n2Njr18GsNVQFcFCnmYKwxyN4hhWw7C4Q9vhxgWEcJKg8YyJE4HuSdC1ASHi6e3pZDWd8Zh8Ufb2x",
  "key15": "5xM3G5fPV5FQEF2tofT6t3UoHUDEawsxr9RwWq6Cni7gop8Dq5PHDcZTCigR1QhsLAGR1XPiYVmzwKXtR6GbV7ec",
  "key16": "4u8LyPtz1DjFyFY1P94THuGDLV8rmLiit4hUVRFKk4cBrdGAd3wFv7G7sm6oGGRVYzvFUjQhfNAKwnXVgFWrw4es",
  "key17": "59WQseR6nDuLtbr3Q3WKc6HeDrmTCRQLC7mQVyWY9WCff6AZfdr7DsDmXNkZ7rxH2j8fNvaGZe7Ey6kBD8FHLTLx",
  "key18": "4D9PGej4955y82wcPp7tWwkJ7L9e1RM59BUSD7K8TtvPRV2piDYav6n3ufpQHebewnajTH7i926uWQ2bkWamq8st",
  "key19": "57nXJPe9GXxw2FNPbYmDU5SzuwoDkHAVFMofedx1xHMJr13PDeoTSHCDM3C4GaCxiBkag7QxVXqh6JnPPUJeuyzP",
  "key20": "2Bumc1NGrs1bnTJWNDe8rgi7CWyRjtvVV4hHjkhxyWsVmC8LokA2jYE5Sq7d3oQ7AkLy6TPHNpD2HKdo7uhPgUuU",
  "key21": "kxLDMnwqCEEqEhVKTmWSNc4kQmWcZunPJw1HPi8jZ5VgEKVZESrWxQpoMfFUTgSVXiLnpB499sKcSERtv5UYhHP",
  "key22": "5PTC3f7Gc6eYoKEdCLYzHZ3J61LYjffwNjMbwyrL23vpSQhSg2fjbzpYi9exJbudH88iLkDbzuW6X7e6pChPhKDT",
  "key23": "5SUH3k9XWQa2DRtjG3hHz7gM5LgA87R2c4VScKpSNrpJJ2SyYAaQgm1cHbHc9ckyEoDpkEW53awPiVAWAb4dfi81",
  "key24": "5X7nBvV7RSQsyKUsMiuxJCDqEZUMDyq5KCJoVMVS9NxTKsAEmdwXTS6vBnVQnHoWgC8suLJLHkthi1RUKQzNNBz",
  "key25": "2D5Wqt3kykW2dcEGjsuyBbkJESjDF1sJLyuVW7QqDuYUaWzRkUPLoZaoPTf16Pm4ZkU26eStdS7J6soigDmtfJew",
  "key26": "3ZaSPpNL6BWrP8BXcng4Ua6o7zm26TkvJbAiFpzfj99DCuvU2yeX4Zwj5XPVgvroWczC1qKKCoeuPf2sp2HqEECY",
  "key27": "MJBEU3pyoLho9cZeuaSfk99ssnTx91JXhBSyZg26NPPQ72kdFf182A2pN8y3hyguicfFgpoV2H3t2wQw1Wi6Mac",
  "key28": "X2YMzBxXYGoYcCnfqSSWhSdSp3McNaWidvSaA2vSNGkLtXtpF73eFF5edmJBC5T6hstMrKf7naUqx6YrS9C3LBZ",
  "key29": "3f96AyYG8Azxf8mtXPBSat5UmY67AQXfMn5pJVCWYS4xST4nVv2U9MkHLAQGkKX6nxxmY2P6mFxBvM3vMFXx6s1p",
  "key30": "jXBnGVXA7hoyzzqohBscJSFBPTcSsQDj8zwCcsjVqHfk2yrGGcaSUnn5UuCmbXfDLMbtGsX8hRdWrH7HaYQxQoj",
  "key31": "BVXa82cBLLKvZD6WWX5sXP3cA6oCoaLecHM1sPNa4zdv6hDzsVx8efCqrQEV1oFT157zDwrTpFqtZN2YXh6f5E3",
  "key32": "2hh1ojrtErLKSgbqzh21vxTNHRw7uwB79Kxo73dpdimZ7oFNtyfEVQonbXZmXErDjNjdxBFrvihyiZ4bG7LWtPX4",
  "key33": "2ApU3D9k94VLK6bWgVjeNSHoUNcUuYsBnRfWxWLDdb8vgyrwvhDacUmQCyMYBXMmoK5WkYAs1yz2rmeVQ9S2XdY8",
  "key34": "3ZdTJzYzTBDs5LhRAUkxJYoZKNBq1ASoANu37XhmwgjB6Y2skS5VDUgDQccFfmxFRU9CTkeb3WfoDzokyuppsayB",
  "key35": "m2oZxCPeGVteHv7NqPkFtAYR7VZnHKa7Q56tKvLk2EYBwJtYbWwqNnHuG1KsgtVuLDHztH9RoAVk5kEHTAnw34t",
  "key36": "5h1bSSj43CFdmPNK3Lw5VLnSHhBY53GLYPSo7PevDhp7bwonNsWJZsDDuVLz3r4XJDeEmN583UBfBT7H7UUi67Kf",
  "key37": "4egKEF2FDBpEPeHu7uZjjeQKTaovEZ4ae3iB4GfkiuQvNN3axjyt7iEaGFUtyKQARQWtW5Cx7uXs9kRFzkCZt36d",
  "key38": "3uugqdL9uaUT1aRvUtAvioRD87a7pLJY8e3jiDfRAkuUdzVe6EWgapVFEP9BDF9yYy7dwuew1LEhqnXeTF4ngYv7",
  "key39": "2VVNofurmMKULqqL8mFiYb4Qv1Lkb4uW3DJfSRGpzQLtbcqr2m1hZxdw1GHafDUtMDcfsJhUt5dotPhxCk5n43i",
  "key40": "541dw37JiLdRTtp4UyvfMfN2FaKjovC1oKpkDkB6evVZpykVjAVPvReJcU7dUZfFovDoupHfxECf1GJ6TKKf69Nt"
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
