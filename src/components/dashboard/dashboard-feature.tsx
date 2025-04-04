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
    "2fZi4wVR4TbUPYpfgBP85xq9YKsvKDrB6HjuzMsQxPJ2hoNKEyFC9Ahj3yeZDExGahSPyZp2CfXcBCbMLFdHVo7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sx6btrURoAJbQM5C3pzPAiGaGMGJgErSigtuCkphrPx28yPGVRzGyfww8NywWjWpaTmvSLvuGtnjYTnGn4FiVMy",
  "key1": "51NoKXsxmAw78Lkev1mrTEXdaD354jga2XXkefkZABwmuNXJqbrJb5ubwrdSP4EazpkuAG1NkfGJHqSHFPK4DK7u",
  "key2": "2phL3z5RMHeXrokj8Ge9BHFie3Psu2FwgKbFRnwHrRrEMrJegSaifGXxSa5r57LiHS9YjxUh9ueRRRkCFYpfVbig",
  "key3": "3VVamqGpEHyWRuhaYThzZjH7khwH6QQBvhWA45EmArLhAdTiEhA4XBvVwLrG1zR7egbQfkzJYGYEcXyAbQSWsdnd",
  "key4": "62sQGxiPGTJJPCNt9YupHsTmpe4DZoikraYrx762UKfLrhr6ivCK5PQHx18qvXaf2ZrJ2oSV2F5HHEXPrNcpXuEq",
  "key5": "5khmVnyWLfRvuM7ZVeHv8Hk2utJNjWm3UhHH6zCVRdRUkcMMksW7FdoAZDnpzLw7y3L4C82HCMyTND5GrtJzm1wH",
  "key6": "48KVmbGas9FQNFm6FxPos94U86eaPFBQzkKY2ak5S7EUWwyDa9Lb2owpBWTYbWMiUBUHTtt4jaSvwKugvYo1sJnL",
  "key7": "5TdgSedQyZAqQUTj2Bj24eotH5cYA5yBXdnVVX4MvohbPQPMgFtYigaGzsQgLZurQfakbo6Kvgz9nQA975rqBgV9",
  "key8": "3JqF3WemFwv2pSeQReK6iNQZokRdJh4znFBbo5p5aqiYzDTj7dBpzEk1kqfKB755hV8RGxhspDJic2Ggwd5QKHHm",
  "key9": "3EPgCNh4i87AeSDEeJ7qr9fhKggfeDy8tJimqaYFSm7SeCqDs9KrommhstBGFP5Gb5FQD2uSkeFTnPQRtt9d8ve7",
  "key10": "5Xfi7DXaM5eKBUsLGtdCUDcvKM42mL4ANMZag5MuGAFfuMPYwXkHGXHiMMkmVVVnsnA8SZwAEMULURN7DLNK1x33",
  "key11": "bJEA4aFTyhBwb3Lnnib4X2vSQwp3Kfg3h7vbhjZLeiPdb5shcPU3CNN4TWHR3R2RwZPd9H73mBzEfpgZ3XtmrUf",
  "key12": "5GCffzCzxQi9uP2afPBfBL2LeEqcN27jHXAzxn76yL4NbeWTHLNtzQmu4PLuVLv55JYVbZrbj8HpdCTpCgRRGcBe",
  "key13": "3w3bfaTheUkAAE7oPxSqZrEEjHCN49aTg8Wct78s5kNC6j63Jm7UsarRhiyyeuQYMuqaqxvq7X4Cnfa9y5CYw3pJ",
  "key14": "27Uvtxi2M8ZNSCx2wdwWUbymCgjoHrkFGNE4BZvXokawNfqdV797aCrtrVygneesrqzGif15XczxriiwokYju3Hw",
  "key15": "4U4Mxt46ZXdeKfa6uyNdb9ttPCp77tm3ebkMqPqe1848NWZM48RgvHXD5ogE4hd4S1fTcwBaruan7DFRJZpN6ZzD",
  "key16": "4RK32QKXQfpNW6dFoBKsgdVrYeb2QctahZ68TLA7TuYwAm2eK92CcYyoFyjw83RH3NNpMeFcWfVaHmuV6qk8sM3t",
  "key17": "wZPQa7Ad4dMXCVaiRXj8HsWzaPjs9dGfWtPDykC3WquuxNTKzsnFPAp8aFTqAMKjCNoYw1oAJ882ZV1g9SB4veT",
  "key18": "4j7NHFLxGYBGSy2pM6ejKhTkXapmybHMbChzuCnnVmDvekHrkwXwcNSQGhGdY8tfTBy5t7QaVEKsgcc9VjhSPgPW",
  "key19": "48e5rExqvbZf7rW29sQpw64zxjxqE3FEYqupfBjaeyx4epH4Uw1QPbGSLTQu7Hx1o7XsM8hbk4AJiMBMUyKp35SH",
  "key20": "5ELw5pKBHho8o82NURTkPVKV3gDpkRruWp55Uf73MVMymkmtmd2AZBbaZEDF7BB8BnBURyCxZKauLPgcxm5vAvqM",
  "key21": "4w9hf9ptqdCTkewKcJcF95gvEytQhvjck2swxExDqtEDbJPL31C33EwRT1nWYFdDKFi1iP24yS97z5cGSt3hfdWZ",
  "key22": "5uMeqcJ3nQsLWbQ2DpcCkH7F8dUU9yt6bjbhCo3iWcDkXkK8oTeq1WGWAu1YSpVbHmMNTWYdBMvqog4AWm2zxPBr",
  "key23": "3mdK3PNhK3wqd63MaP1vsQiASjTPh9oCeQv61QqK9U4hYamtMhPgmGcNkCdySeaUeDHWj27tgqZBqKN4hHQzq6X8",
  "key24": "23tLkBNcuAh2cB9yJGwBVpqzsMeQvL64n2tLBNcnS1BEnKF3owbFnNN7Syr6vPPCfmxAvTdXK3PZ5NMqpy4LoEJX",
  "key25": "3JRLtvJuWG7dNR415NYa2xzeFwmtnfY167oosMy39x4U2rUVSoFu6WrULp2RSJ6uvt3uFwYqN8eP6U2bYf7jzVq1",
  "key26": "2cvJjwswn7hMvRn6wiZ5Seew9z8dEY2tHjoKKSQcNQQJFTUJ2MQpxeT8TKry1PfBQD2EW8ZFxQoV7RrHB7RyemFA",
  "key27": "5iJtJVTYSKBQZTjbxW77C6sGyS8hcX3H1io9bLhVGj79Mn6cYjKdR1dj8KGhuQyMuyyB1XZ9GpVEPYNTZwyhh8gD",
  "key28": "2aCHduzGu76ahbNzAYDV1w6m98iWmBWN6NqEdERtFkahgLFj83D68ViL5pwu1LuwEj7pmnyLrp2EL8EVZ4bGEZdK",
  "key29": "5rdSjWxYuUYKEg8x5H5ktYbsfM3MoTFhctHSdAeUPYtyrDZzQDDpuRvAUL4vh7CApa8Gf4Dz3GKZhRPFTnv86sHw",
  "key30": "4QHMXJQNqLnXJgatnv1PNmiHUCcX3ZyHNnYM5xLqqha73FMBbQ3BUn9UndgvBzb3HwvhvhHn6LHxbgjS5tSF3X6R",
  "key31": "4tQkTXVnrdYJHXmusiZVGQReFiQuK6q1nZ25NLjE96saGttQbGrofUQUwmbjHZYJaHReJKrV7nGTZXUaD5sVJHqP",
  "key32": "2USbvf6akcnmgXZN6pfaLSerocd2XjuziVpnxn3NrB58W3mQeb1zf2hJkZ58VEa6GVNyosHgQJ3fgjbfWePACyGa",
  "key33": "4n4NrDnPRjD5egTWLzrqWZLTjeFuUB32tCb8VvWQHrLFkDgZDDDoH7Dt8pnXY8T4R5W2Pes2k4Hc7tpW2Kdf9Jjq",
  "key34": "4BwVsdxm4x3RwvUJ8JmyJxfeABGzeQHTgx5yu4gdwG3Yr5njCLN3vRfC5XihtR66BLHviqc8FsGHX6cctEpz1VSD",
  "key35": "4v5oHyUdcFTEAzsRHrivb97nBDSCTDBESergDegubVroDA6hiLXeVTEsdrzSL2JZT9iowjg2Gf4czJQR1d5RYSS5",
  "key36": "yFWK9rxC21dT4vh7Rv2WHkYj7DfrbUnM8nqKxFo2EHa7vStDfwPipHyGVh7jxEGigdQNzxPeTdT3YLvSt9BxDWg",
  "key37": "5b9K3Tw7SaVtSi4t5vqKnmLG6pPDjFCTbciuw9cq5AykhvtEgA1sUbTPsmAC3927sdFap4psNzkXgXoesCeGuJkQ",
  "key38": "5DnAst5b48gAY5pnKHEiXTBDfAWBD4PS45KEfcoUBosnBn6vqLDELsVq2YfKUFFPudGzsaZQ29kEpSFappPeJZhN",
  "key39": "4Q6JiWcV3eUgYPJu5oqw3oVy9dUezzBvh884PDmJjqiUKTyyHMoQzhtALrdU3pTqV8LQfdEmJomp1WPVYe6fosDK",
  "key40": "dZ5KcMygDgJFeeu2j9oQ6CVLuw5F8yWJuMUwUienBn6Gx1EvnYSxJb33i1qQLiYzW4Dczi9QsHFocMgHeMb4Yje",
  "key41": "5v3GWx3V6vrhUhL9z3CnNcBzoBiX8yTZZuVadPZjeXGBG4fugmhZxhS5p6VsQRi8WmV8J9P7fYLrLvZgRrPGHuE8",
  "key42": "4nwbV3ELNZfRqsSZap1h1a8ig2UVEWmkoYBRLzkxQP4SJXe2adR9U9tdzv1jMRJjoE529wtM19hS9jkx4o42z4fX"
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
