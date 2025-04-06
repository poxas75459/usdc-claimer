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
    "Avw8tGxT7Z56Jvo9CNfkQS69tsSQpwPohfvbyRT38PRWbThAKU11XGLXUJzXMgpSTgFtw8M3j2kyC9kbwEr6Txp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58R8LGVNX98rtszPh6RJCMn59eqaZHjJ9JiQQCmDcuacYpqCeNW9cgzqAXkx5ETMYX3RJNeepHGcHdENdkXwgg7d",
  "key1": "2KViH3f7RqiwHMiJwDhm6JaSZQjgheFeJ7c7KrLYa1yJWA2bKKJraHg4VhX21rrMfbzqoYDPYMUMGjdkLPGvnyLp",
  "key2": "4HM7cvvLZyFK95Tw4FqqbSe2oxqxpiayakCYWtXP52219sJmLV9aEuX48StqufKmR8n7rppKDqkHjAcGhXyCA9o6",
  "key3": "673FjqCJJe9HSPWaYPj8c7TS9Fkdb78Ged412k1i9YURmTxFdY593YwhWy1eLdtqz5vbozoWWDg2pt3mNuNGBwCQ",
  "key4": "2N8ajV5Z7v2QVd7waZQ42qVVhgJUFpYv1qx48sVDzpoR28aEpVQaNb7tG7f9YpSwjoyL5MXoc9THBG8GjikXH98b",
  "key5": "cTMW7JTNsb88xgDQvU6Uk6CPwXgQ9cNb2B9uuMYwk6Fd1sJTLCcWocgfg8gViTGVxXtT3N6GdkhLk3KHxrcFT91",
  "key6": "363jWmnfRK7C5kjEeWhKbaTxusS694R2mKQkGk5ontopcG1xXECgkJ6kQFcTLyN3upvQdzxVria5opTRnP7GSkY9",
  "key7": "W7YdqhmNR51KUDCr8RrrZe7Uk3n8eNmk2B5AfvVuh5kVsJrezyhqc7V9VofcZAXmvEMc4YoRi6hH5dE49jvLtxX",
  "key8": "5emXexwmrXZaoAzAfoSg4XKY5KjLWoQ9pwv37VMgKEDxZFDjG1h6CBjWqz7BiKCcHGjM4TZ7814Dfqw7hc5Nw37N",
  "key9": "5Ctwh5pM3F23JBHMkYs6GJbWKDGKxRGmBQNYnM74XqgxweUb1nLqRrahYgKagHA47SDSzkNecmRFn5EmP1k6Lk3j",
  "key10": "4Cn19qgxCxAfxDrr4X2FGPpYG7koW1Qsug9iNAi2aZYsFzR1kw6QiDAjohnHPYPAV3b9ETB4AQehMM9Hapyw1eUi",
  "key11": "5FejSHAut5jt6tGdF9fwtNvxwedQwEF8BQJrMC31kxmFEigP2aXL567ozM3h67M3yS4HquExkiuTUcCi2HVLjs1o",
  "key12": "2uYrbCo4BiqjDFsyHMhR1xmzKNhiGBuzRVswAkPHu7iV8sCFVtMb3CnCNnGZTVBbgEJbLfAPxcXnewtGQioxjatL",
  "key13": "8ufNZ8vVB4iTsc1tXBexupeootctY8aMDvoBZp8JnyifiMochSU4BS3bq9AGQbc2TTvYx9b7f3MeG1SWiwp1sEm",
  "key14": "vm7G6wryr6a6UgkHaBF7B4t7N2jHT2A8nBo3ac8hauLrMYTGwfTeWkFZsjbVLNqxQWD5Qip3E9SGxC4PBHhY2NS",
  "key15": "517ktKwGKnVUwvkuTEuMX8PavWRVFWHwwsCZuTJLuaoikvvneTmGBJ8N8jueVJnQdxitjbv8MxhopPCGtd5kz3Hv",
  "key16": "5owq4UkV3rhgXT1t7poKSCfqZGRi2Jxct4fwjmtuYtfdq4R1YaRRHc51ugzXgHEN91RSiRrFnWA2pw2V2ybuYc2T",
  "key17": "2uvF8heDK8eZLJurwXQ3M2je8oabZT6w4CVyT164ShBFE7M8XBCdQXjtXHUfrS2DtbQLGE6PeP9q9BhXYaSq5ghj",
  "key18": "5x6DUxhn1ipjZfByGXNjBtw7NPNdfGKmRvy5Bme5NuPxPcuXnrerDpLND4CSwkAnyed3zjM1EaqYrECrYq1FueSY",
  "key19": "4hDF4Xh2Diehkn251wLByAsFBNXgZZAug9C34AGRoWMW7ARUfiHWUJk67qd95xyVJWVWM1TVCbJEmzSAXtinEPa2",
  "key20": "62zECGPYRACx9ZqP2dJohHLGw91BhwTyLPJHSkufHarfNdKAA6C61DgcgJwWqmEt3Fx48p4xtYFZiDHnEVKeRPoZ",
  "key21": "57Qp1gGFbayhiyuDXNM6rQpQdNrHYSPLeeSEuzagJ2KwFD14nzMmTNyQ3tvKQSC1TTX6LMYpuoQmTAvcv9nXkoD3",
  "key22": "647sQs1qCLSQHs1DfVwRrya7s7pm5BNL9Xa3VtSdxpuhLvNUbZH5qMBAR97pxwKgKTyREDM2K9ebQ3giqS5KPBFk",
  "key23": "5LQpP464cgLc4JacsTNhgft9PgjYKxG6z8ivgu24gFBC9bD4s3psKaZY99H3ZpN3hdLoaw69i8JhjiUJ7D6afBcG",
  "key24": "3Q18BU6K6H3kquQED31qLYv1FoEydzVLezSxQQxjpCwgM5sWnLNshL3WLx9Z6zfPgX8HV2bD92FUGdD1vdrmm7vk",
  "key25": "3zptEUxigw7QShuekuj74e568RWPRhhfDHBAZuNXKj6PsKK3cdqjHG31sk6DJehX9Frcs7vgJzz9bhEQkxV4eT3z",
  "key26": "2M29wdRA8dheFihPbvJkdpDVMYbUzibP1vyrkyUEXciWt7u6AcJfkTgek1jq7GTr6yBGzD82AWkGHo9FyCkhxhb9",
  "key27": "4NgNoJVCAqyHeHQqTr2rxQCK889yEfBpGfsAAaKyD52tjxRb8YGnDXWC7MB4e91JLfjuS9njsNYMhXhUCs6QmgSM",
  "key28": "27eHrMoV76fGaEnCrL12Vb6k2soVJ7eVkQuQqtgycLTyxjDZ2qdj7MrBueSoMWzJssNjCnLTNArUvL4FwXq1YNaT",
  "key29": "Z6HduH8PzYmLpaHsr1G3mA8LvJpkGDetiJe3phRCi3V4WCyNhJcRXp5fvLf4iz3fRujAKAQuTr3pWb4WbKXbhha",
  "key30": "Gf72fv3x6YAfxw4Qxn4PFnTc3FfCUrdYxAuUF34U7kekfQMdBrHxqaYrGteFdvsQjqUAjimo6FYbp2jYgPmFYuy",
  "key31": "5JKTMiRm7BJgC9riBM5hv773u1D2uqSqfwkKE4a7eXDccf2MxM1C4s6mqzsu8KMrCDKZghanhE5Dn7TznqdmCYHX",
  "key32": "MFy366VsXWX4MZjUd5zRQcTdoNywmQeq5DoQrbJUWfDfze1UurQQZcRFvsypcuTuyhxpAGvHMXDuDHg9suaYk4K"
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
