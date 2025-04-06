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
    "3buAmPWouSLXNbaChs72fTYjjNNWG9UtcuXAgoFL1A5mnbMDa6WYNuudRm7oY6Wu4srYAZq2B5pxLzQBmrkDKSG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npBh8XYshqhvphnd4a6D9WvT2BVwtYFSVEJVzANRGiVGp8cGnAhs9MAs3p4Up888zncoWo4hNpFWDKxJu86vPtS",
  "key1": "4LbqwzRR7a2ESXt47xF9bUbT6uimQNwiiCFvYRdPmkkXMV1FWP8XGQWwa8aUuqX5y5nQ8uph9YvHHiLKMYRkrA2T",
  "key2": "473zZJ27UgQCtQbLiUx16bWpxExb7nR9iSaSFx2aeBnmumyEJRW1LRGs9GXVqg1SD1xx6qNgdqoLMW813Ztnobf6",
  "key3": "3m74GBJfu8GcsuRwNnakzX9A66wLqYSajZs2K2thjT7NSTYpbXmJRWGntwQUx57V4KNHHe2Z5js9hbh7mE76aBLM",
  "key4": "3tV8yTmybAsca7Lg5zQ2SorMXmHXXwrrB145KPsg3rph3u4Kj7fLWhNmdhg61TknpKus2N8R3RZQCd6YvLx6YsHi",
  "key5": "5V53LNGeFqLDR4hbWxs7LfFTSRzcx68okmY5qnQszBYcKJQEVg2weFGFApJC7Rqskx4UDdcahjktcuXDCpzcEe8p",
  "key6": "2UVPXdnzpcvDuMcMEMD5gxHuvp8bAJUrPTtVV3FGRHM9fCBJjL7FySgN24utu9BnxHSa4DZ3eN5aMnYGHHvo7QmT",
  "key7": "5q99aCcJeew51KX1GEDiJbqGef3mQoHQd2A74Tb8LrV4DtnF51zCUET9n2o4M4kf2b1bzJb5sHH53tJ8Y7Mm2GLk",
  "key8": "63HpXn5Z666mWLZz4ttmykRjnv8xCTQiqjkqRSZq2kEAqKM5QSL2ZYmTVAVvumBiE39m3NqfYHcz5TsUeVC3xohm",
  "key9": "2isUekKgfg47HKJFKb1eZ3vmeJcNGRZHj8yoBSeVSVzJ2Z2xJK9FzDHxxjLLpYDz6xUUP7Qgva7jtMaBeo9Sb4V",
  "key10": "3PGn7cvhMWRYmhtL2AZ7d8KZGhH685WYezkd9MGxCNySUhRGfARs6xUPpRJRLy5YieqNV89exNgEbyKeeeWvvL4i",
  "key11": "2pbmHmCrGkroWDEHrifHuKmwMnwGq7ES3Z4TZa97vmHUZkutpNEeujpJd1eASPLFrxzDuQnxNwxzXi5AfYhS15pb",
  "key12": "s1GMznhbuwM8uWCx2TzpWTJSHEFoQVqoaezDjbWkfqM2Aiwy4WV95DH8dyKdG8YPgTv5dNk92UjoSr168DYWKDc",
  "key13": "XYgMFPJDjmwpqQ1MGr5CEzfE7f6pCRqhedDF49kVfaGVyZJiE48VdfTDBZkSZaWnYpuJSdN6RjeQqRDseQWCgf8",
  "key14": "267TPrKapnQ3QYNT6Hoa1Nao2T8PQW9BHgEWEE1r4ccg7v6GTtq8wXKFjTH9Bu7MsH25V1Hv5oHrGwN7gfEm3i9m",
  "key15": "3xn3LgpMQym1NcnxrfBHHAXcf5oemgnGMT9k2crMm1WvDsi78iLZ4snppN7iPoVT7i4XtdKJDpgJ8MCqRQkfG43K",
  "key16": "3mh32ML4VnH3iosVqqLrbkRhZRr67oM3YTysD7aTAXxLrmDTuH57dhAAmm7sa92qi5ges5vepZsk3P1XdRDruNDP",
  "key17": "hV68oiUAnPgy3rJFLaRzCujZfuzXXbC6m1gnoBJkwRSQexFVNJXmuiXXoZH6odwHtdgSiaiqpo4DrmPQVZwVaWH",
  "key18": "4ejDFhaoUQKwC4STjJe6To4eTZWQ4mrqv8mNU9vB5HmmGJKuBkFjCLX11hr6coRkS28igeeWHFZGu4LfqTsmShqQ",
  "key19": "4z2TW13vEf7q6yfv5rkW1RfhiLpj6ScoQFW3xJR8Kw2jCQvk2hbbTKN31VujdEG9C2q1DWb61W8XZVh2tkF5FELs",
  "key20": "3C6qjw9QB2vnJeMpu3znbtgZnWet2UVZq4bLBNoY1fkbdSUTGhLvhhCscnwGCBDnojLzsn5FcXU4P7nVH89nyXxD",
  "key21": "3eMn5RqJYPgcWhgmbqpUbFw3jUYjb7X2J4u8SEPSAJ4BjkoXZ34h7xhLkmba13mh6TVcyF1vvXB6v2uYUWDp1adZ",
  "key22": "4mjEJ8uY2jdbfPpaTeBC1URHFQ5CvkdaVGe6eT142c4Ue2uJGwhJsaGoFacxk6VJbQX3Am5r4uhJws1UkgAH4iXU",
  "key23": "4NL1oEvV8S53Vi7PruMrhaVEig6Mw3449hsPa78H56DQqtwULt6NBcBJQvFEdKHNsVT6Kfq4KtnXBhMPF1jJqZGB",
  "key24": "4UaxnytjG2bZEZLDYL3rjtHC17D97LSzdGBchmhuowVEEsKDxFm4sFEQQ1fFShnGMptPF3ARPTK1T2TNjYWLysLS",
  "key25": "3w5rv8q6AGa73exVt3dwSh9CwgiTTziVhcXQeDXZdKU5L4Ws3eBG53bXFQCxbxm4VnKzCs7SfL8FPTo8eBYKgo6t",
  "key26": "5CW8GQ3EPKABoLVaC64bnwqmrbNH5rNWvUvsDK9uqzVsu3TEbpioaZr5EX8zKfYsLp1Zqga2vZorQCzUfcVUdqXA",
  "key27": "2XP5U53ymuLa69kXufUUATQfAZNp9ugu8zD7gfG8kGXcfeWnaJEsFBNLckhckGyH9EBkZEiCEZoRshU5wUc6d466",
  "key28": "5biHSVPdJ5knnTnQQdQjUFQ3t53bxQMAiJuUASPaCjWs9HsoXpcL4vWz7CNwThd8u9couLzs85wtErhsGxFcxYRL",
  "key29": "3ArzdTLVQuiMv7EQmuGm7BEAf69XP5wgEADAhGcvPLGSA1F4Y5HaJwwRvpzm711sxCgxqzp11ABJMVwvUtUmL25a",
  "key30": "4tP7BGCaiEtsVYuVCTKcMPE4AED4oTAL4GM2mywLHEufPsJGGM2JUpJjcbszZ4JA7k2oHvruAgn2S1FYRsx4rE1r",
  "key31": "39Ridd3Xsr2bnFuXi2N8ryfabsfv2omWFBYxSU6KQrzEP55SJ5TwQ9Qxfja7VT49mTsmJdBMPc5iDTkfGJGGVYb5",
  "key32": "VEVyU1ygvmKP9tGGF5rpkVHyVKzhvUzp8HA7uvoqfsdGfuo6e4Jjkme3LXsieMsbN4nQDCJwEoY8ijzqCPg4xYp",
  "key33": "61rYXzjmCZAfPqZ4636NJKjCg5pe8vBXS34FrpPBzogrHHp9knc7KcbRD3jC6sx1pKUi1aqpqrfJHekepoVkCYku",
  "key34": "5bswfxCnhD6KcTkGYLgGMJvRYrTLWQTT8hK49hpEhw3XUEeAizjQrXvaeH6gKoY7wTqd6jSvSucncmd9GiPFsHqf",
  "key35": "3ZpvgEXJvrFokoZdvMVRkC2YusMLTTHVTUUfGmTx9C7tSiHigW6BBiYCf8wUcm7vdqec22HfjLozy4Wczhohdwse",
  "key36": "nuVTC3swTNVrNo1omg1wpyfghTXTTum6hTV4MouvYuWmNMGmED8jLmqjnrPAaVuJQzHKCzh9iKsAMDoCdGhg6KL",
  "key37": "4mUn67ucihwDMYiGKFWaLJ3fZhpLcn23VTHNNdrEDLbH3Det7C9zut3D6UGyjrjm41NGVEQ2hi2bvWLJ2JdTQqk5",
  "key38": "4xaBb2NYZRcTU5nMzDqNFR7XALB5ZqPzKckh2nCvapcH7mn1bjDZ2GUcy6h7mE6mY4dgKE9Xp69e3Nf9MZ6KoJVQ",
  "key39": "H1TZSfvtHb7FoAToCpG9LmidTv7XLFUnDt2eeyUDximwtQdZ2CgQLxxey3Duc5noRn7Xs32BDJZ85WYgScgdNUJ",
  "key40": "2LepSLuL6N5wPdbbhmNdC881FNqJrwBjKt1rDq2PA8EV1XBoiipoS4HFSzwXwEhB9YgfZpcRNzMJipy7DTFHPjnH",
  "key41": "3YUQ9AG799yiZ5Q3DHyk6ZDwaSRpGs94YNEb3yDJ1KT8pVxeoq2HTCADkdoGyq9hNaJBgK9E26XQAJ5ZEUZ9JYeg",
  "key42": "4FauXRZ8DKrnkZjVErz35wzWKuvb1LV9jzkynP75isEmMyhJWNZZLaAp74WrdfnvU31qxQyt4JxEa8ksPwskJcCV"
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
