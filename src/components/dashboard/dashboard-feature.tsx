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
    "5tUrr9LQ8EwDZrmvn4u4XbCEc14STvXZCoh5JYG4HXuNa7n1oinjkFSjquKmHZktH6zkBTEV1VesmC4B25zwRfvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCWVxnd4crGg8dAWzSpGiAr7nboyKgWNXXtkcJVBRtwQ1VVDtfj7xdGE1bR2icAX3776EP9RZzw3gakEhbrPUdm",
  "key1": "4NjKDJL4d67TAmTZM1iw8PrZTFVnVm2DgfeCdGHcQ4oLZCETfQh231qf8DrzT9J2z8YG76xJtUvafyxVkeMVxCvm",
  "key2": "asoHBzVXkRgAjSPk3VDSKnJG9h1mGiMSr5oJZ1oHDKB1mxHQrc5BwZp7kTivQEasFKQispqDGkhxtuzQF7haBBc",
  "key3": "2m4bJCsgV3yHY5WTcYnVeNgUmK7DvTFEQZXtNgPuH39t3uiq6pyjTFMfvAAAXvYiQmXUEoWi1k3wBfbwGYguFds3",
  "key4": "4FN2SY9bfcpvTnp2HbCW24UYjSLSwNRK1qBA6Hrf1BmcXwom5sVQHa4BhH8mwCerLaFc4QyHY971JwVH18qSbWWc",
  "key5": "zuhZJutPPrf36A7jfA3HDnk8hqxeWFxJBw1c7RZDdoTaisyNdP5TzDXYfy1PoRXfL7atsm5cWo2jEeNDHh4uEkc",
  "key6": "31S9ZMEvd1CDoHsv8ME3QbJPsL7bvJG31ikga46wah5U5ysG2U8x972oizgARn9w5fQ8AamPWDXpX51usfBjAopb",
  "key7": "3MNnLhxNAmNtZp12GHgdVcs85dC3dkpk37ycQ3YsnxV1a9JkSLTKy2Nxyizh4wTm7zY9PpeEQhVWAZ8gBaqh5eqc",
  "key8": "dgjvijA2WDscVgnVJy8PQp54c3PGRXznWZXhyqhjzMHwy41Qw5irUQAjJoghKi9M3neAubDbK9p6TJhG3RwBfL8",
  "key9": "2W3vSyXzZP5VmhfnKjL52vcHZ6XBEa9A7eosgtR7ZjGe738RsLeGBsZkXYkrL79rW3oT1uw4UGbjX9yBZpxxFk3A",
  "key10": "51Jnf9N9TbQAuvixyvV9FLzT8LpV8EtjShEjq8gtSBWXFBpkuoRtJnt6BETXyv1NX8xHfN28oCQhqDLwuwWAw9MJ",
  "key11": "26oisHsHCZgMLa1WB1r6mzoZhft3QVC9fEU4MWojt91rw9XeEvui5jZ1Cr4YZn6iPPWtnfZa8BxwWvZURBruFSTL",
  "key12": "48KviqrDtBJW9d1EfB8wm8zV3xommouecJPf6KyFE8RoBaAVnndQ5DpVBrwySN5fRCLUGmUhwyZDGh86o9FY8B1C",
  "key13": "56KzBGFWAdRcMA8NGU9tc1tAGSBNyKVbnKsHDGXBRMdjuNGvjU1WM6ENgDDD1qRMcSpVmPyJZd3a2Bqz5RozmCZa",
  "key14": "4fexevHNgYHYm1McnYrE5jFeC3WLxPGempXyCUubo81h2JYJ8u85bUGkrFnWGrAN21afwWikGctwG7JJsmNUQxEH",
  "key15": "5rx4gBuEh386r61smRJLT5uuRZT2CqdEsbs7ooHegEVGp9AZb4S8KH57a2WkdLdvB89uLTreky6oeh9UaifR7rDD",
  "key16": "46DnHWAHY8snh5b7YMDrStjSm1ymUxsJQgMxMGaJ9qi5cuALxfFUJrcV8PtBTVHEWCND5RFb4WC1ph6R6pqmutTe",
  "key17": "3Cd3Q63uJytTPzLuT55mdFhyM8c5R8rpRzVnbCBaeGUdkEQBNWHZMHRH22BFtdcsLSiYEiBnrqcYE4ErNu9DyHjF",
  "key18": "2VWQTgxgVAtieT1B7FeLHKa8caMkvKw4gRSvexphx9bXhUP1RUN36PDTZhnXzzhHKwRS6sZRqokhuLhsksBuGZYN",
  "key19": "27pUvf7AnVbgEbHqVhwUsBhRK2h9NmaVAVpPz66QawTbpR6CE9x4wVuFF7u7oreCtQZnr99zvPudgP5GrMvFyKE6",
  "key20": "ySXnkpJStMXigLAmRtTGZK1VaDiSk5GU5HiU31nnoTbwSuAZUTxXpJsh8Dy7kmnAx256tjtBTCh7s2uhFqvtz1A",
  "key21": "ohdrGhmb343riTXYmH62NicCiaW8ABh9JPkmw4eh6xqHCBRvENDLVBnnjDKmvKVbUKMANKVSsfrtkBVR3tmTwFM",
  "key22": "57Z5NtmhNdKoErGSqewkEu9uLqmgrVqB2PcFv5iv7XxFwywk8FBRky2MWiMeE4BguE1GJ2j46WsvHB5PazPzu3VX",
  "key23": "4nY9C9gp8kS57z9Wez2nN3ekLngjaz4o2kXhx8BwZQV6h6RMfjqiXaaWQpZpPgNjaYLC6BMonfUNXVqhZRahgk4n",
  "key24": "MtDj9SZp4ApA5yLEH3LyyTRFZRVnUB3HjpwtvwATc7B6vT3ycgbxnikHqqR3DyUc6Q9vucouhFC3xmKPCqUffTb",
  "key25": "4XufofsstA6J7hYrT6cWoavH1ToSJKbQnW5auFmhaWnDWKrDvUk9X8odNfhbJgFyYvQ3cy4n3WuS3EaxjdxhCwpH",
  "key26": "2riaKKE5uTC76V3U1R1N4VEJKyarPTgNz7Lp7GT1VbV2pkGoPtMuWopeJkRkw8EkB23fXNGcCeMPLQM3RouVXSDk",
  "key27": "2KuVqunS8xS38z3KyRvyTFNsphkdgPJ3gjTzavvy26PiNksWdQJMq7JR2FNEqTTwhqE4jMrFZ5m272L6vBTAepv3",
  "key28": "NDU6Ah1utnwKWQvZ19dUkE5rWUodqEveFkQoMMEJmq7P1zXyxPvsH8zX38gB9MGXLdL4LwPN8S1BTry36W6PSDq",
  "key29": "2PQyC2wi59vhyAh3nmFGTmHKm3sMmSciHUxeKSXe59P7ByYHiWwjTZhGf4ehjkKqaFQLQZq9L5Tdak4UXEwBcfcn",
  "key30": "3WjfEPS8MqbHSqSwrWbQ6xe14aaR4h7quNtun7EPE5txrLMGxYWugDrvig1SKX4LpjUevfRc2znE8QFArbESm4uq"
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
