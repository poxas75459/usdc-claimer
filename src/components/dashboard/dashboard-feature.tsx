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
    "3BrWJDu44sGeNaVjkwnLFSmn2ogwWGgdeNUSyLhxyvnAZmxyXG6LEqkbSVevRsUf7JfxeutPFogaGzMNHEmCLYY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "knDJEmwwsYDjkk4VNZesFEFnHReDNRsYtttCycCQr4vcCZT7Kq1VghYSKF5SRs3RTvEtfiSrLmgNpRajTnHNEf4",
  "key1": "5eNvfw8ga6DpfSa9JTFZ8cGPEbBCvXBGV5d5CYYo6fDgQQCmgEaWHqmayPjyXpuvVnptcAu1FVS9UF4u8DuVJpqv",
  "key2": "3qeD3rA1RCtDdiYchZHRtWc6hdZ9vgA9fJrfA8DDs9ZfvsebMvhpnrXAv88dKpLFFcnHGjC8vcenFy9AfnqEmpuE",
  "key3": "3iyJdXFoTWxcTwW8TuTBksjGYXeV2UWQiapLEm9DmzwLcY9f7R1GNRs4bEmnVtVrJwhv1EEpnApbT1A6wGUWBzE1",
  "key4": "rfgz3GhxAFVdjFRwfuYWzMGRXSgag7yWEWWMdmMtVgyYHhyiQ3r5fy8iT28HqmbYZZwWEfigQU5qj54FVcK6WLk",
  "key5": "4R93kHr6CN33nXb8LGEPW1WGFizXQLXCZQPqG4mZavXoDYf3j2NuthpdnQZLWWVTvNYNnCcDYAWqxn53Jx5HZP5v",
  "key6": "2zezcP9FgcvVoECiuetWgMZCffzPYBakTWe6bdyLFw3DxBU3KxZC53MYZnyWRpdMmnf6UVR2Norbm8YWZV1QRW4Q",
  "key7": "2nMooxsU3BYhjnqNEbUHuHFL3U46u3Y79Sx6K85mXXvAWGCdo7BVRXfPdegUU1koZ27V4JxtUsJhe1s3TEp61trX",
  "key8": "rzyj1UAzUd9vAxrkutTbN73jtFHjmQRA8ZLqCHYir8zdwBqYtMHYM6nwW3qJDLNHDMoCczVRLEt4rK4G8BwNmFh",
  "key9": "4p3Mxx8yQqbAQiC5w6YopKHoehdQ7g7t6GwhwHyURnn8rHirn3aS7S1CgjccZUUVsejX4AYFKz28TonyweEQiFki",
  "key10": "3wE4PJryUgWcAesCSUtBdreY39LMWbPjEmQiXXZT9jogKnVY5V9kJ93ndu3UT2VrcYeFcM3mQfvWwttGCuX6H1uk",
  "key11": "65Hp791LiKiXK1ESmrc9thuFK4BFx8TnVri1e9Pvixr27g85B9UriEiox1T7nzfUni4cZs68ug7iACd81WeQCn3",
  "key12": "2K4mHQT76v6jsCVrgyeF2y9v9zgR18WcBUJAPbYg6X3VxDQdvVC5t6VgM2E3rZxynxEHBWS1cwaesge7A21CtqJ1",
  "key13": "3PBuZAs9EZU7f3WcVzgjKkb8hp3vE1oC3GsKiKK6CAZfd9t4pETtMUHkYfeGoot6perNk9rLq6cqjiBsW3JMLJ6E",
  "key14": "3b23VJYV6cRyXLymx2re6rqZnF8cSmrSvSZCAKiFkwVGyCzM5EovBMmiJAbRmELTmng5xFEYAbjvikpsiEo2zpG5",
  "key15": "5kXQnnahQGbBxMneUEzUXXNX3kCEih6jCpmQMeNWhUupv1eGiqCpSAqPkCSoxjRv1KY4BKaAddqvLTG4YMVhEbYt",
  "key16": "3tk8rYqvnE4kVHS1TXAmgcEw61kMZXxjU7Unavd3SNekrqmLwaBNqTHMwhgLftC3zhpaX3KGDKqqTVadnHsuttbe",
  "key17": "3H5deX389fKVmmmwu6Fx1Yj6EtCk9DevAFojL15r6atRxDw9YYLFUNKsDxdPiWV4jv3KZwFjbEXDKiRgR57XQAYb",
  "key18": "3ceF5X8Zh59cR7RXzjmgUbzgQnEJycNoSyRn6iqgGtspGgi6bS5mQEh9r4WU7LjyNvJAwr9UAUoc3UyfLiVvUEqX",
  "key19": "uYmjBpX2eGakVF88KkddNJLaKvSWZTTuzEaP9ynbBetLkoPzBZcim96wytnLtBjYH4SaZtvmMwpusHTRU9fU7q8",
  "key20": "4pcKcyYXHk2ujoctYAxFCzp6awWARTt1wosKffPSUms2MBFRhMpXZbk6M5PtkDQU2BZC6dmrwhswzxf1yBra2xYk",
  "key21": "5BbgvErrXkHiPyz61f6mCmJsjXAtw2zHYHqpSY34A27KjpnUvgLbeKd4KGVnaVWNeRz5EEehr2rqMvcdnBPRP4vV",
  "key22": "2gFD5QquWgThBgei4EcS3usuCxgQtjS2aN4JwVR9YLqKWjQ5nAAXjYH1BrZGYkScySs4t54b9eaimwiiTy12thJL",
  "key23": "2gfkp37p1aQNPrxeYiNsqFoYYtfMbTxdoA9k2j9grVKeedDfBWAYye3iRfjRT4j5XdVZjN5CR6YiwwLm4GWCf3pH",
  "key24": "49P7AnV3HQgjuJKzGGfNWQJWYtzJZSxE8AvhJdvAAunGotp1DMakXA1cw46fEbz8QgFfddtmqykRb3xtJgDAS4F8",
  "key25": "4WzN36jDGcDedFEf5i9g5GqVnMiGp6dnmvLe6h7UP14wVCTk9Dw6BMpi2xDajgmfDHCejHHkjQ9NsfkCxJTh4a7Y",
  "key26": "4ZwbW9JX11e6K6K5RHNyGWHTa1FjpwMek5SK8ePAB9TU6ZukUmVtKeQt8Td8W6hSkPHkMc4Dmof9YrSEy6nKdmnh",
  "key27": "2znKvfxQyBLNm9FqeQrhbxRNgapWdToLssotJEwq6P4K7k4mUdJMHj8iDFDbN2tKrT2S2JgfUktPvgLLGVW61bDG",
  "key28": "47ttFDjD4qNyBzwkgXmHMN9sU2xkFXoF4MXH1e9kmQk55vi2CCVSqp2weXdTQutTJWsdMTYCv2BgVmzoGziBFsHz",
  "key29": "4T3JjpEsqdT4oECsFfVXMvQeY6aGJGSoggoWDb1JdE6sDLBtZbkxKZMS8NQYc7aWf4RrzbjwT24L4d9qjJSco8ss",
  "key30": "Dst58ms2MN2QH3suyiHwNezRUBBm7przV6oUUZh3eC4mT9X7NgM9DviNU2Lhq6YnkUEqofSkSq2W4DZ6hCDC5Yi",
  "key31": "4qe2rA7Wb75PrziiMdVAr4i6hKQdjiyxcZGSQaWNkMX2DDAbTUtpAh3e3cKGwPt5yim5p3BRaDwivACB4iEMyGsb",
  "key32": "5jYzn61pkz2ydusdJW44H2Tt29yt1Y2XhRhxKqtEJwNKXCb3oafzmXDdpG4wVJY6xSD8ma315MmtPoFAXYGdRoAC",
  "key33": "3qaoeLX1YrS92kJ81wDNbYLCMQHLo1Set1NQ3vo4AqCwvnaU3mvszS29wVF5VmCXP5pmgnnSFAeUUUN9nLnDYdbE",
  "key34": "3neCvJC7SBkzYiYathC8vpSFrZRmiXpvFVosFy5vQU3xfU44P5oLFhsrVSmjJH17AjXTQAVMU1br2n5a1PwsEFpu",
  "key35": "5cWMrZLsQsdmFJtuwRiwhuNWstYCm6iaWeyfTLfBFZQfWN4BF82tZ24czT7qVvTPTkQxg7CrRDNqnDQAmEf3LYnA",
  "key36": "2HvzC9ky3y6VekZzTE4nMKaF2ySPNUt7ezEaXGAA3f8eV8SZXdiLMq6Cao7CpZXf2SS96hycoLFNHn1vsNZ6YYwj",
  "key37": "527CsVLGWeVnXKnkYkLnu1mKdGBjpRcAgZaHQn4PzWf3nXyYSrfcpXwsPRP6XVRSpY4EJW1GUCrWkcUy86tomvFC",
  "key38": "5fRyyaQKbvxy21o3x5QdEUq4gdRMBfiU5Lc9u6TrpbWLJZTahyA2Fq9tMnFW8zktc1pVroxBfHp8fGYDLbtRaQKZ",
  "key39": "3L9HYjTWSZpYmz8f2txisdysApZYF2nkrzzfSsm64d4tjhPxvVELpYqHaDrnhmjdjLuyfSU6kzzTc8qWyPRgDeD7",
  "key40": "2zvkruKRz99nyrBFmghCyUygk612naQdMnxuJKeU3WMksPCFmDSwiXLsDnux5TdvDwEFsouGFWkMiSyjvBxw6d5x",
  "key41": "3JEt8xaEpbHgjkPWiaW3KVUGgnz4AGhTkLyEUJaMQ4Q9TvtXxEwKQKxL1pPzgprnohx1LmxgzmgXGRR9HxArmUoV",
  "key42": "3gqJ8gZL1oo34PKFwiV9yZSfXPRiCb5mwjseHw6Dxsvazo8CG9ULbSTd6GSAW1h6F3bk84GWChWvnVwE1PGWzb5J"
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
