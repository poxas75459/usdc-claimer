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
    "4E8s7787MGgEHQaWpEWavwj6ym2ZgCuzZqH9Zi8QZg3axEYqvLnM1RoHcB5cy3VyR5BgaqQwHYfB8aJAGGBQQm6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfaB6vYikP9cjTauHdigVLxPYaVdfjngdghzJ2Qz8F4zFiq3QLcSGcAGmmnatwLSV6sKnBq5cTe7e8svPSyGTBQ",
  "key1": "31z149R36jKcWsBzmfi2LFzSaQDK6j1V9TjgRUsdqXGVuu4NSAVgnVN9ZBQvLTeTYMoF6yeyZ9NxMD6UKfdMMnqN",
  "key2": "61DtNweGPqv1hWA2PQ2ojyJFQdGVLAJu9BDLfQP53VbPKKHudgsBAkHAJmWJS6FgsCcWjJxG3eVxPGFGQsMomdro",
  "key3": "3chfQXxXqs3pCmM5Up9SCCm3o3bmMB5yQmZVVsaUanz6P5gVD2Bf13VgCDgfBpRJvZuF6jhnQdA2uA2yAixeMWCf",
  "key4": "3q6GZKU5MihTCUTy8VedQ3ZNVfkZLywdw5noAwMvS5TvMmLFWZFcf1yDGvmYXtWXc5aLCUtNHQc8X9Kij93kk8SM",
  "key5": "ZsfmKYERYi6rVisaU2heJWRqvMzp8PnGPmBgTrH97FFpo2qn1BCzU5ryF2RhjbaR2kezwdkaSKjiJ52HmarHDHd",
  "key6": "4XN3ozimLcVynpwaDJzfBcPxKMHWy7WqV9gid9gtz3gtByq5Kmdutfmv5Ut4TfHf1teDVqpuWq3rXEz2Qdr2oYYv",
  "key7": "58JtPeT7fkamSshQdSSaFPJVgLg6skUGFmqnP3TU8Uz9b4PKQiigtZyqSfWW8qmEJnFp1jYJnC1gUJNjwdSW928L",
  "key8": "ioghq42P7yer1AR76v35c7sQxfPKfUXQBNcJ2FQbKBFbCzwkAAkfaPWmrSmrByuqw8FLaZ3862ZQRhM6sLAZtNg",
  "key9": "5UBVukpo9RYMtdckEcnYTrHoeSpZAmr3sjhLF1nLDWxSuCtdeaVXncgJRKePvFQ78WZrpKLEHmaGDus5ugUJYNJ6",
  "key10": "o1D153Do38n7GhQnt9Noi71M5VHQTYL1uPzQdPwfmtCrye98g1Z4gNyU7uYWf3R5xNvEuFM9TnvMuCQmGuiz5Bg",
  "key11": "t1GMZRbbEuBFf13xqq5836V3j2m93ayRdMUrLadcpGrgnRffPiRWcPDzYbJP448C8mr4mp8UcrCsE1ZzeuGc6iB",
  "key12": "44HVuLFoBkwz4myDDz3vCiN6hgHFytDrdtsRJN4eA2fP7YnJo2rKHyvdC9b44GCatA9ZrahjB2Rm4aepRGtrH9xc",
  "key13": "4kQfyiYzZNz3MHyin7uo8EGY8uL5Brm4jnNrvq39E4EhySneCjoysfigzHsC2xqvUKiBe2cQfieBgdg1wYDJ3Zgy",
  "key14": "5eSeNQDsns6BeYHyWAjVfVx82NjJNkmbf6DNehav5wYzReSQNHyNiTsx4nb562Jvn5jCWYC5E7MtWfAyGaz7tyeX",
  "key15": "5SdnFsoYeKd9MrPpQ6kyXHArga8gYGxpQADkF9vVa4Ufao6aj9BdhhNf6J3EKUbguUS1wLTL9x91wVupWHJx6PWR",
  "key16": "5RbeRwdsML9ArhNRw89qhWtzK8pZMadiUXhkdF7Zvhb1gGdNvF8JuG47jmDLm5uL5gVemzwETsukLzdsPuY931Hw",
  "key17": "2rdWGfTde78fdNNW7MpQLDL72HAwSNZNieZXPJ27THMEjaqxYJ9QVsvrFjr5ruCq1dVgTtxzNKCnfr9pJeViKfdn",
  "key18": "44UekP8AjpwakudAXLzqVpFTarsA8rQLsatr7vT7izr475CNiSRAa5V9G68aPT3QstuT2e7N3pn2jradaFXTVFN3",
  "key19": "5NLngKQNHzn2dYfhifGckgCSzAJohDieDo7TWDBGT4o8oUs91uxu4yXMQCcAW253T6QHykhp9aBWzk8JEnafvbZP",
  "key20": "5WZN1hMhoxXKAL54zafgGWCJkoUPs96RwsVqnWb43jWU57fa8vkzix4qMDpkCND9YH58yUqxSaiyfu9aEYYpQjBp",
  "key21": "cM1phJ33RzzJ2rhaKDcfhc5d3bAFgGKo2bmVguStLHKrDNFv1Pu2Y1ZTFPVbCyy9PxB2wKLKnk1z9pZqmKyiSTn",
  "key22": "WkR379Ucus5rPsaEGYcUWM4K2XZZaw2rpCoU2Jj2F8p3tzGfQNZ5PKTqvPypgVz5GyNsBmJVb3cWGsFTxKXHQZh",
  "key23": "3ShBjNYDMicCXcfUkhYArx3V9rfnHwnwirqiqUjb5Fe1zzhTQvu5m4qR7dpdCiR8jYUdHrsn68fkew7ybZ1J51ER",
  "key24": "EF8qF5mzqmCLAWWvSvS8U6C9Gg6CKYnGQQP5T3UYKc9DQx5LhC6yKwpBv5L3v3JVSndB83t6mXexyqSsR89xvqi",
  "key25": "7ydgJKp2As4ENVfB527jco6BHKcxGZsWt2XYGxPcnMwCyUvwbrhwAfXqicVdQ1k518buaGTFDDuXm8cTUWLL34K",
  "key26": "26ssQ2c8Fpjq6TiXMYsW9PqjgUPXpYGSTCTbzxsLvXfP28p5ZpcHphDDRbfzH1LcFh4PmhZDMAwcDfK6uVrvHjcb",
  "key27": "8CS3wjNTZdY8onvUpCjE9FrE84mG3EyU9a51cMsyuToDXCoRmMcs7wHrzha1PsrNCQbdwoKbeYWktVA3DdQjawE",
  "key28": "3XTeh4a5xTkt3XUE6iKQ8DL5NY9hZKecqWhZoPzDaSwLWgzRTqsBTovQcFsNqEf7r486yiLYkjQX19iTHZ1pLJH8",
  "key29": "5C2rdfnobWkiaV56EsyutdqsH7gM8UCDvej3hoRifM9eZYPdvc5wg9wN6LktgU87dgRbgGRkQqZTEH4BRWWwDcjw",
  "key30": "ZtGEQf9aevngLSooCujo3D8hLt2HbwkWAeyZ6zkYuyx3c5PCeRZihwuZtqvVcGePqzPMn7NGtrb7XgQpKoFqbBT",
  "key31": "3AzgfwagAiQ3ojQ9v8eFGqStBPJJYBfhRWpGVimjnPvkW1PuBfDwBSdjTUpQ7SLneFYMegvKu866KbShvm9ketRb",
  "key32": "2UwL82jk4gusKZx1fBqNPdZUX3yWmsqqnH6VkkX4jrvrMEEWu9UqJZmNdUUhPrMhjhAw9QDtxw5kxd416PZdjbLG",
  "key33": "2Fdnw4qefuduQ8ihvUqrQeTweaG7M7wMh93Rf9fCezpx9mB2F6VhbA2w4cZg1bVa32saUxh3WvDBPtBnLmAvewZY",
  "key34": "464aAohEuQnGTtVcNZGddi4QsD3B9wrxbfgZXVNoRi44sxbd7AiJAioXiWmM2LRVnYUM4v4NSEHWT4VHEu99eddL",
  "key35": "5vTSGo7ZETd7pPX7BRuRSJLium9BFg6rRGBcQC7QeZ3gLysUVeRAmuYgDGQ4YfZdhHAqaLQesmdSZxo2jKw6CH7Q",
  "key36": "62gnMjZWf3uTBPNoPHYeLhZQHhbN5YDFjr5TknwhNN8hW9EXHbSuqMpPEHBs9QFwLeMAUdc3VWbCpau83Uevs2H3",
  "key37": "EXCZGxCox2veiubVUHyaEHLsUPVEM3v62N6yTANPMJBUjsfBMHxf2qfU5wzqZg1rVBkNgyj2FJQrsS4kWJuPCD2",
  "key38": "3HbBbXPhQxv74NdfQQAAzq9kfmRzWE7gzpFYhhsHBD3AMDYcaN7yaH5eae9E2AxVoJvTe5G2MXeAz4zeSX3dqLVt",
  "key39": "2tKnA7ju8TwBmeA6AhbFsKeNjoemTgYBjFw4TwJkNVzeqEbPMH5FaWP2V4x839SeDr3cqxpuic8brAnWhLvq4YPK",
  "key40": "5tB9RyPk3s1BcocnTnzmT8m6YFyshNUj9iZULRihDTNrrz9r4YprQcfs2Sxwr5vTiFz4hxa39zmLxiDjXahKA9k",
  "key41": "4HQom7CWz1QCfrDj1wAnWjnkaejYpBJ1dvngcaVcJtxtYsdqR85J8gpKBDPd5AdoDQKt9Ghzcwh5PBkPJzmfR52G"
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
