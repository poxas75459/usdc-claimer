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
    "3HR3N7M7qrApJ1iXpVjN9KcXBMdFsM12FvUL7f624XReVRPPgpSuDojTAtoWVpkmzTWQ2G1skgdnR47ZfkinUvjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQHpKhaFpf7dvRqFdSb5GmGH6zjtQnzW7v7ojWhXwu6WaPmDbZDkfRpXG7nNY77tR9w9HSriHsRXcfbzQCtG1cU",
  "key1": "4fwxfp3iHxA5vFmreCySQPcY7tV8BMfL45MTci2SMtCZRnhr3ozJH2fHmtSYDZfFheVkfkLVBPnrZz3v3S3c5wG1",
  "key2": "2msvo5juUKYyBQjc5NpSdgr7EMoZUm3Yt1QRnmm89PeNFX6uws9qeRxAmWCCoeoLyrg5ayhUnFED3f9ir2XGbMdE",
  "key3": "5h7QBmnrtDaJjjJXKASCNASPt8ssJoe8tisjZDkbSav86jLNgUWFtAnoQXJqnZ4JDrLa3oaxnVmsQuks7d3mXv4F",
  "key4": "r3jdi41no3Ag3NGaEtzcURcixKNgRA3BWVhkEvNedJCTC3EiQtu47xcwPcaLu7YjEiqspcLWBBWf9GT4LSWJPyZ",
  "key5": "59xKQGiNVoqnWczix5qCw3U7qJjDRpVjR9jmoJ6V4i31fia6bsQ6VMdJ6TcFKAwL74Aougs2JJ9myG5SEEfJ5HPR",
  "key6": "2Qxy42zGrwiwT3PeQWitmYzmcV3Wj2qtTfz9zzNkYNotkRABuyDn3SGba897BqJwPpU1zMbapUgWKacJw1kgCupM",
  "key7": "rgZSsboBf2cmowkRUaM6Yng23Q6Jwg4o9ARBmt5h7s7TBujEoiqYyPbaaSKiZzL4mEZW39SsXmVHfE9rtzh3m8J",
  "key8": "5gWX3BXycrei84Rw2GU4ZT7W3K7aAwnH8bkZNxgUX6R5xsv1amw57m84TjXajDuVcxkETBpp2B6Vgq9pNNSrgQXp",
  "key9": "3YbFv9p38iVikSSxNouFEvHCDWYJUZCsfmkE9DjtHCXQp9maBcNmfTMBnRVS7BNMoiCa249rXWjNJYq7Tef1rvwf",
  "key10": "2yXBScJCU95LYLbs9RQzE81WYNuhRerJAZpVz4oLdqb6K8a11td7czVRuQD3sofmVBpxX9FEfVefqdH7fB6un2YF",
  "key11": "ggLWuq8dArkw1MvjJVQaVzAZxSUGjvi6CrqLZjRyTczDKNp1YkoNGf7VCXnDgvY57Hk6MWLC9X7PQjfqt77xobq",
  "key12": "k9mpYe6zWiqwPjYXXsuPv9Vw7WxH7BFcHRPsLo1z2qVeTf7QnREb71R135kxiMENMD4iuPgvUXYQgh64jkgQgaz",
  "key13": "5Ks8Xq7AnRHBfs7dLqKoupUjvDYMcf9kdmiL72mskyysUSFBMRnUWikipWkgeGNw8YpLsKJuVa8S8cGHucrQRDh4",
  "key14": "28krkckpRDnNHjq5BHYri6y1ChPVsfZxdR3EdbJ94FncuCna6wfBM11r8g653wCVe378Srg541TtvJsWjZH3EMcT",
  "key15": "8R46XD4qnMhbJuu33WeqV8sL2bPY3FwteZjbcpv2BC14WSNBzv5WSBCdJo1zzz7Gn4sM35BpkVXiykUXziw9cSG",
  "key16": "5a4U9tuprwXZdj1fF1yGrqd2mYW9DUTk22QVtEp7SKuyFn8o3ZdczscM6P5xRzYrXG221JxVfh6LhMjmWzCv8wCC",
  "key17": "63MuBQH7k6pxWjKh3DQhpND1TejjPbp3JazC1cp8o5FtKm194kiLSfwYaZfrNgb1m8j7mKMBe8j8nXwNbzmudpdw",
  "key18": "688QT2LqhzhtW7jYAMJYKCJkfYjaBG4hdCbhfUxtawwMqEUWv2J91D65N6zNj8LWrA5zhGmsUwEB6NwWjudJF6J",
  "key19": "3RcBpKmMNkwqbvYLqZ9YGmXtWiJmdYkXtKzYT6xDpNVQY5ZQ91WHwWj3RUBWjQFX2SdGM6GxFAthXsMm6d16YESZ",
  "key20": "5NigcymdGH9eTiYNw9qL3SGMRw6ukiTHKBMbLwRdqRNeLdZcyupcdc5mCSLaMiFCwsbyArw7oR93gShj22k336F1",
  "key21": "4BgYMf1aRcDgPFSrz8TguXn6gwV2ghq4Nd1bKK6tsc9eHeK1N3RV8i42heTWvteEYyvw4hEJMtWRhNHCQ1vYCgvs",
  "key22": "2QXeiX2YXNpcwffXcEVFJo5iPTce9HjmD1gPRsjGSgccmgWM2sqspmQPhyDab5PseLV4e6qX9RfBtvydC8jUVBwS",
  "key23": "2xCXe8gHrLDM4TFZu2MBh76UEboWknhzPEqkZ5bVjtFXCaBQxnobCVuJgrMbcC3v7pNAcKDGkU6puGnw9KZNXbjJ",
  "key24": "3LeHYwSu1qqYYgdCvoFETuVHqQZRQjKTKVaKQekm13oBh7ehx6LeJ7qjq8up9z27qbQnavWPtM4cdMQivgqhvZC1",
  "key25": "QoWH6m87wAjYFWGxBYuYbAGhJDAJjb2xobcVhvFCcqEQW7rKRio7pwb5cwB89zywVmj2T7nCDif7T96NqccYaZb",
  "key26": "3pwfTNW3euVkJjhqUyxacVSd11cLjYGqQKMbVnpzAyYsnV5HuPBq4cZQcZqrX6ntixRkHq4uf6rC8wCsJuwNUYq5",
  "key27": "3KYDyJiXbnaaYtRT8L5XH8UF7PUf2xjih88HKgiy4ys4sCdgWC4XUxuVYzTQavScEToHdo8oBK6QdBunn8uX3cGw",
  "key28": "3u5xuy8q6w5RZxugfeYDnrr4gztkxL2LpXivi4UnyzhfkGN3wQTuRERMa2XvAbw479iDSEohjXUghpb33Dbd4BVt",
  "key29": "3P4kn5RLKwzSSPSRhLTZxAP3wnNCACLaEzzgEpaV1rspbRY3V9SjWcfz5xwYXknqw67F7r1ULgE89bvcKUuRReRk",
  "key30": "4mgEjvEM5MZcof66Pvv6pKVHjJyRnbGNLMbrfAtswpzVfo4P1PKYzjFHSt8CvG24BShH4dCRAzApzuvQpu9hi5jK",
  "key31": "3FkSNi3Gq4ooXpWNcenEBZu3yy9AVG3WayYvHKkQbrpxkMMNXBKJUDcqseM8nZsFGQJmVxzCpSPcQmgZnW2Utv9y",
  "key32": "5pjLHhHzxoqpCVv1z2AfJciRjoiPUNiJGakbupnc1gKFXMTvDqgtx6AN76CKr5HfQ6tthL4M76K7HgkpbvU2UJWq",
  "key33": "3mgNfG7mBUWEbmEyucpMuMiDZLc4hQNFmmgSw6EXMMp7oBmboQHihLw2kRDkFaez585yeRPwsiRc3sCDarMAvKg1",
  "key34": "5ATZnxtdEjt1ozoYU5AUTnU23MZwyV3os6NRTv5ppYDDpsXsGPQUGB2Rb7fSVGN4Mx1fM4zKqjmUwfkR96WnkvS6",
  "key35": "4ThVXJRNEsnWqPtLwfQeG6vr68F4LCS9DWKCbDmMTGStXFZNbV1ZaidgtuFb4qyKaVk8fWsHSsgMW9gow1anovwN",
  "key36": "iDiyaTJwJ4hhsCWFwfyZ8rpJu1Ko5H6rDUbAWBNUXcF3iQwLCcvPPJ4P3KxWUogsvQPR3KaD2FiAVEm4MjeYbk9",
  "key37": "4StmhgFBxYoXQW3BhrQxGtLCWbrmgNGgEt3rHKx5jfxcs3JCxyYJc44xd3nm2yBvP8PBHKSodiyzFqFsL9WCykNG",
  "key38": "3ZjzL35yUfVBJXyLasBLwQBxA8LoYCPLQ7BFz5crfS3crWEA3kCUctQ8xs6SiARyLXTJqGveuXx6kQAbK3LAAQM",
  "key39": "236oGjLtJumbvvPXBuVkXak9SmLeYx78TcGcz7Ct3PkXXbo71QH3128dggRniojZktNbYrDCQUstdugehAydb1jg",
  "key40": "2UyzaSDtCiACVmKeppoi7isUJRrzuZVY4VwrojDuMWGcGAryQdYmJkVgji4Mn6cJrXzf6Qf2Qr4mcp1sg44fBBVp",
  "key41": "52dW6GXkuhEenhnG1bMFasEB7Upa5rgcs9NZ5YNTAVtNvHF1KmC9v4SsHsgXyqcxNL6L64sV8dQUwCkUh4ih7qB1",
  "key42": "5Q67UBCztP6uV3wzMneS73Jm5NLMn9PQgNbavXMLeDHZrvasGV2M2BhziCC1DoUo6FQLRRuXHmFmCGUoRFGpo9x4",
  "key43": "3veC32FT5hAUoYmWuaKZJ5BrPEfnBGrNUCG1zuvukTGB9krnqAZjcE7YnFdAYe8jZo3Yb3hEW6BGssQxAbFjKQzm",
  "key44": "2cZxX6cZdjUsRhgzKQKSs4KEgf2BVhzy9H2PxBmu3Nwa3eh6gZvAJbFWJravam7ef4ve8q6c9cZrpZZiTNmdh44j",
  "key45": "7xMcvwjx6SkErDxN4AncHmTPq2t1LMvBviuhFhSQrbnvgLU6XCxKiKPDnGWxPkHJrrzA6nwBbmvWnm4756tmgyh",
  "key46": "2MQKVabRZuGRF11sTFPt975ZS8ydgNJfTRNKb4bzU5nDdQURGgoYe7zNiPQnrwqQaKV6ZFyWeJ4VVouG6oKbfdFS"
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
