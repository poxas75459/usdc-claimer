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
    "36Sih3DoMmBHy2JPEFhRKS3eotdrawMtxJBpMKTsQZQqjaVWk2MN1yssEy1CCzT3tLYTUe3x6Ux5GFSJxceAb5qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3359U5MhtfKU9d1YHoXj49QwknXnNAWZvewxUJKnDC2dpGeAeQ5CW3y7DgKU88xDHuKCQ8upNVaJLojzM2YemJGx",
  "key1": "3awXNTgGPMbycVWR3ETv88dwhZAa9A8zNf2ZV5nZCfTf7RUzeSzJ6LPEKDYy28XfmCoW1Ce3n4zZKCXEmgPgL6Dz",
  "key2": "2F6jDqGtGUeJoQ5YPHLi6TdhqVsDJZgxS6NTLnAGi2NXEYaaSrjD4TBNxLXZxaseUY79adasVngLMpWkGVgrLkZj",
  "key3": "43iYWMyJGbYSM25te6Kr4AcyFCDAkHnUDELmGdAnvNnUAzZm6ACUgu227YGjzTK4dAAH4ocQvr5XqvtdHzHEg9Nb",
  "key4": "4syGh7nyd7GnFm6wpYxKNfCXKsHqrbUsMKTJatj1v8sqp82qAFeVVmZNj6VYJNC6Q1qda2gaRydezYTR3XiCXZeZ",
  "key5": "4QFn9FXeiUfBkknXijV4exm7etgbuoPULudCQbFTmLDAjCaZwQu9fKrw29nuUBHKG13ASv8jzkR1tohEyKMB3GND",
  "key6": "5jR7Mfepn5sYJbuwfLfgk84eJMK1LzU6PSGsocfGJQn7m6pH898zkWGSBEQycXgaRLHeT2F56j9VipTU7cCvVDqL",
  "key7": "5gjqdzSiGqV8G2kA6xFyquwV3hb96wSc1ynfUeAZZAAPrnSDBmBYarZjfQpeD97JZTcGHpk3n9q9iZm9ADSyUkMo",
  "key8": "cS81kXudhpFAKxNfCc8asGpnq22nvLCizDbpHuwCrse2anjDqufqPHnUF38FekMVTacHMKZQDejWTsd13pzbe1m",
  "key9": "5kGH88F68u7ppdHNgNvVzXcqdWcFnWTngkzqNcmsKDQcHy5YpJcmh1Rf4gXe8kRUzTRCENzriNp1y3juKjDDXorH",
  "key10": "gkfBLW72TB6ik9ZNxXLh2VZgrLGk5vJLcjqgKXYUHRYfkvCVL8Jq8Bv3FZyKybjCV1L4n74tk1nWc4dQ5N9hvo9",
  "key11": "42ZRMyfd8YrN1PoqUGKtFktYcXATxcCT8uuuzqnHJw2VS5ymLGYHqgqHJ8ycCknMU95pHohTaoxvsNdft76FP3ZD",
  "key12": "3xJNJg9pBmVenSmqcS2RR16KA2KQNsEDyUL8go7RLUDqVeqjYUBNaniLeV3nqK3D6UU8vJJnGUDmyRTYaUoA4vZK",
  "key13": "4mTdHCtkXVawiMqznZSbCRgwriQuw9uHdG6dFnicEJo1xinYHkkU329mhZPAjWVGtCuQ7iwBTPedNVPQiHwVejcg",
  "key14": "n24MrhdiKVDAxnZZduV1Y3AAcSirHgVn1REuTgTx9pvyFRPYkPaxZid17YEut4bcThrFiEApRXX2LU89gwCv2gL",
  "key15": "rJ5YMMz2knYJGeTg9cSKFno6jVHub4q1MugBzk51RnbQikLhL2wAxf7WGXJwSHKdkxKBYfRkGzHvPaiNzkq6fBv",
  "key16": "bvcEV6zzsGR8N6sGrrAhCyJ865QxpkbTgSRw1Ym13LXxzyGqWC9oYzste479sKfvw12XHs4dc1sTGF5w1FCGNfY",
  "key17": "32h5EceNAaEL9tcLSntuKQ1MjiKCY6PUzrDCK7tGQokcVp4wj9PjPGXRCqKHP8JxqKau85FVHvYeJDJE9dj83wVG",
  "key18": "3pD6rjzpexSgX3ZBYT1YafoqukqpVEW95j3yZX4sgg968F8cprUNKtd8mkHVPca4sifPtdUcDTXXPtRKkiaAuCKo",
  "key19": "5SeM8sSRUQrZQUjmRrfCuuEkWKNEz74QeBzocier8A1fGoDh5BebDTH64hvUfKrVg1woZ8GWnhFsayYk6PmcuHXb",
  "key20": "374Viydskn9SyVevCTAgrnpPypYCSX9twjTy73ia3YPiHvQ4qK7962bq1RkskEqzs14ym7AjFP4ddDsdmque1dGm",
  "key21": "3StAYF1Fg26KXwM7dmFxojvoFzQ1EXrrDMF7xFtXKrqnQVceKeiqW1u8BSLA6uZJdv8yziSRxh9SanU6UySnPfu3",
  "key22": "4XfqjPQ96E3WEwKuM19A2ai12VE5pFmdcsZqAow2pkzkFZRfDLeYntPPnynjBr4ou55ZLLUq8966bPmLoN8R3b5t",
  "key23": "4BzojoR5yh2yqpsvmNAta7CpGGmBzWmNtcSYwEdbPRp9Va7igofwV9HNNfcF8PxskVN3XFkh33THLT5daXjTycqf",
  "key24": "34Sk88Hg4q7o3vnc3WDzvqF2UqUHAbqLcGgDt6hBMF6jttyErDV59QyFJLmaq3NqGK2gDYi7ETRobpjH9RNsznuK",
  "key25": "4cMn7s3L7bVBT3AS8FSLtCfMgHRpGc4oV22FtikD74uT88BCQxhVYhfYwCcHkjFRxPPS43QyuHdDqNirDzoS9JHU",
  "key26": "4JZ27WmzFh6BPDB4BfW7tLeStTxiC9NRYzHhRkZfYJEt14XRSnQshdMZqHHP6XcMRFb2RyDeHEKSYU1rhP23p6R3",
  "key27": "2x3JZNukvtxyGHFV9fMZDSqhUPmtoKy9Z4ZUyYbCAX9PhDDsqMsqtNZn1YjaZ72AbskD8QraUd1USv2vjWRaYH6D",
  "key28": "3ETFM9fP1Z3cpXp1dAiC2NRMn5i9f4hMA2KT27hJLPBdq2TSi2bR3GBTxWghGZ9s9wwaFoi1h82WdsffVymBhpCj",
  "key29": "2JQphoBaRUVFC4v8AG88nNsg5SSyerW38SmFxxUzh61LFY174MU9Qy7zFD9MRK5MWskVCeaRgZ7kfXffyoiCZkyg",
  "key30": "vFyVDojQ8m5F8i1j9qBso4bDi2sHq5bZFNo8BKhVhb2PM7YY654K92CRfktzmgMWmRdkd8yAkxccVjowKkvdMDP",
  "key31": "2zX1cBcdzx4VTDgmToXmVL6xx68BmoDQyFLP775JqSCvCUpR79ULVXmPjevE5fq4Wu7FhWWRJbJFxpFNR2umejBW",
  "key32": "4aaN5dUZZ2cXDFfa26Uwa3VjY7WHpv9vzQRSCvYcyUuP2xaWb8ZWGNumAV7WN8QgBABFCh8GtGtw4ujzjZ23rg5i",
  "key33": "8C3zNrw8QeDoJcP1Yq8ukmrpTfzy9GScgSb1A2Qny2GM6oMY8yh7jRBX4bv8pcbUHw1ScGg1NuXaNHcNXaybHmq",
  "key34": "5Tx1XYE2sS1T2ibCSdGuxJBg6QyYG5DRMF5GsyifdQsoCWeGVNkW46Vrgc5WQpUEsv9W4dtFtBRML4xvJpc2K4A8",
  "key35": "5gQ9fuMbN6hjdmhpnZyNwkGSAV37kGKWVAak7J67L6wXaEaRt2W5N7D8mckk7vKb9y7qHQmG9FeQrVQ28aUEGcKR",
  "key36": "3PPxRDPbXGLFyoL2dVEvNMsQyhbJUGY3hHWFXCocRhxxe67W8bNDgS5AEaD3aLMQokTvT2BqkqA3XFF6R1JNYcQD",
  "key37": "43nxdxWH57d3LU5dnR5RLN6HDXF9HA4ZHZUUeSj3t95dC97Ntsnk836MKvLpjV7XNmnhDMxD4e9JjhETx2jKd2um",
  "key38": "ZKJ9ActTKQhUFh8L7cc4c9VMZ6SnGu6XZGXzUhGcwMCKwomPW6TL1XoVYK2zXkLW1Gk8sRn4MYV6mYM74EmFsTp",
  "key39": "64n6G9c2ed7FQMxPjEyzyjBFLAZiccpf5Tfw2DijZsENk4hrcYTnaXkM4z985kv2oymxfxsccezkaoW3ZoQ1JNZ7",
  "key40": "5gq5VvwoaGbzFS1NPhCJGKwNiJNzbaMD6qugvFv8URx9Q9nuwfU5r9ndAtt2iXZNGzmDf8mCvgyUoTrFRWKVJAMX",
  "key41": "4XL193CpMQXKxWSsqKjhG1ZVUC8ugr22VoL25zMk5Xs4KeyJfuukSDFP8bGrMmz2kCmK5ao7Aezspa1orVRres1i",
  "key42": "4G9ePGPPHvmdGr7DqWxjjRbXLdjXpoWwBHtKSJcjgQygHa5ezYviGneibVzph6TDNbJmGaF9JwcbK8mnYB2FaJhQ",
  "key43": "5ivpHzTints3Wfg193qtdt1GZporcZUBhLxyRqfMwMZXvDdaXpKtZqwfKXkbqWqLYK5wzsSUxpz1iGSpwCGps9o5"
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
