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
    "5vQqAYPxjc4aoM5EGP8dstX4kQuW2DzuDbAVQLNFuXk6VtjJX2A1bYTi9bkDAYfba8vVDAhrvv46zssWUt8xH8oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2snVV9UtppreULHd3aVDJMw5okdnMkVwu6QTFZg8virpRRMoyLPQ5FMi1hz21fzKFFcNcJaopejeMVbAE4DJUFLd",
  "key1": "TPF4p8d2Tz8L27Pzt7UvR54mhPwmLrHUbjoU6zyrqj2CrBbovoSg6VoMzdPWwnTnGnvm8MDr7gToErgmmAq93EP",
  "key2": "3QGHcr78Gw2gioKPFFfmcYdw86YXssykc7KJQ2AV8sfHUai5iCNtR8BTHHsALQAbim9A8U2z9TVkbrWdWEVX4YvC",
  "key3": "Uiv8ou9NpTSj33FKaAaJnoAsiPyoTjVDYi83WyH22R8oDZs8vbn5bLWGDKAFBBGSgpsXEEwfQ7SJQU6PfBPWeD3",
  "key4": "5HUDqiq885PcERrQ1WVvWuWdMzNtpvvApjUnPSx3gXaisPMYbNTMVHGnCTBCtbViqYHvnfqXbMZzfJU2MmV7xfWR",
  "key5": "5kMH6focP8oNrJ4N43fvX7TRCVP48dZ476Avp4dz8Km3TL1YhJVaBPYKMDes7ToMvioyu89LAx6ABQarfR6CcE1L",
  "key6": "2pXNuptE9GbkA9gcDrmKY6bAeTtD2JPpRmQ4XGe8SPnGdjhvSsjJ892koLn1KtPWjk9MaY7hW7okYGhC3PFjad5U",
  "key7": "JchaMuWetvpKkERdQ2XB5orHapoQdFtWdN2dDNMCg8iXuGN2suqfi8CQQemzME5wTdstpCaYck7ZXeXkib4UPsb",
  "key8": "h4BEvL2QeLK3ExmTweLbekakc9BoytLeLrbWe15w7MXKXLBqgw1ajLxZrPt8sQAhPyE1WEhT3LerQZCZpC3Nq2p",
  "key9": "5HzfZzuMtUPT7oL8CKMucWHWSwJj1cV6TV4LDJ5hMgVYVgmjhVNVpyvkxSvpBPj1kSfqeehH9CCWLNCANCdnMJe2",
  "key10": "boCmiWokox18WTF6T9HmAfgjLGo35fvYML6qBRfFX7TyUQ9KmFDVkP6PMuSYWA2HpRT5NgRteMUyyaUgEEeQy13",
  "key11": "5ZHNPDpk3DggKvZRKe1K7UZCRnej8X4anMBKvpZUaMUruCedyKqrLp6ySgP891gAa7m9Nb5NsRSpFpMW1D4gvt4E",
  "key12": "3vPKmAyAX6NqRa74Cbo5ahunBKr6HQ2BjZtanJrLafVBfd2iUPdXqHEJBLDo1XSCs47WAo3aVzqsV7NHB2qYuLRi",
  "key13": "2hvvCRRXh9gZ1ZvXzjmUAuA83kZuoM6MZgF9Ah3f9n3jHx5cShFFrg5Kr75PB5yBe39uTMKRGqR6D7Uo1iUSqV6G",
  "key14": "2M2NWBEwJDUnECaZDTrYNLVq5KrXCWw2WfLMGLNBSZS1T6BfowfAeBAWSfBitjpQ5yNpUbSFwD6PuG9SrfQwz41B",
  "key15": "zFJPASjCZ4HZ2CM5pzu83Z1payc78dFW8onre2Z1qH7ispikJ2PoYRrdx3Vg1LNx5JJbRWTM88kZSjWage5hHaW",
  "key16": "23PzRd2ABtKhQtwqavDquq9NykwtncV1YNwBiHwcpGCJWJPLFBm4gShetnaCVdWyghaA4p5Gq5tJkJ6fJvfUQKQ9",
  "key17": "u6jFx7tzNd82zuXdUV6UdNBofhyg3ojNs4S5G4Fx86N6nbLtpwKWqaMo4CAoQgQ421BdmeHxbtzHXqb9A1iPKrH",
  "key18": "4zxo285C4gUuApvWSukMb6R1jxZWxKfXhQ91YsUkhAcmfuoUJqQ5gUhexbCAcuzDQJwgVC929B4h1btwoWa4MaGh",
  "key19": "fa9EqXeuqRNNYwYBssx3C4sNi4nbPwdf2c2AhwKejW6SPynSpRn4hQSxF53cUoGiBTScx4aYGbioTEqNPqQGpCn",
  "key20": "5FUDmWU7J2Vy6MxnfE9imXm7jmibeVzcTG2VBaDuqfRJsgj9XPn5JhXeVJwYjRR1dmk7495nyKLg24Th1KpvnLi",
  "key21": "62ecTHjz2Wx4gmW4AYUD74Y5krWzC7fVyf5xbVH1SXCv1dW5R4CXLbbYhHrj3rFYaxJ9g6Jyv1g5dQMJ3mPWiJAX",
  "key22": "QLkrYrDC1vdxzczjWU1Bo11RXpp5z9NC9LzJZE6i6zfdh4Xqn366AjtuwuWHChcVddjRimMxgYFFNamJwbcaFqX",
  "key23": "4dWtvFPLRWbcPRmAM5GDFGtagKXm8Rm93Qcr4pt8EqmJiUxH8JEh1LuC8auM4PePsHetMpDhdJ6LCvt4b8e4hiPv",
  "key24": "4C8LHEC63gxma2GFP9XKDPjnfUFn9eo9WDQifsFm2xYbuYtFKS71PcU9aArHK7yAsM1EBpFgBZY8KzrLSdyYhkge",
  "key25": "5b6wg5ymiTCTeCe3Mtf3RJJnhKeG6MhxUcFKub6wht74Vd94URJ19ML2KBjryQdpeN6RT8FTKd8y9WryGWZYYzZ9",
  "key26": "4Z8JHYGw8hv27zcKUTZmSuDFr8EqMwykTy7n4gJpNkgSCvMBjRfYU8TsDhC3RFNoZWPJzMwMGSq16fytnBmsLiVs",
  "key27": "62phwzp8p2kdsinJbNmCxwZLnCnj6ogEvvucnJxvRfvDb7LkFTqVpdQ5gXq8iE8nmG6h8TGCAqso7sahBuSFgyFp",
  "key28": "4Qv9i7LJWLseoKJxTdrAfYacsPa3duU7Usiq2URQDmzk5QfKgky8peZJe3DmvaeR62ntjzbQbYThsVPupNPXZ2Gx",
  "key29": "4ibbD61VhNMCwWH9ZM6EgmnoTLfXHgqoejZzbsp3FcCTfzxDF7MN5nupAeHcqba3qpjxn24v8wouBC2R8m4FBsfz",
  "key30": "5nrN2jspQmqKhh1nbod3aWha27fsf7nABshfK4DqfEKcoEs7ZdFLTBzP3sNPdpQzVYzXeDxeyufkFEbVjsDRHcUi",
  "key31": "4spkaAdH75SMUYXWDVmxtd5XVNX4CauZvNPpAQiswQtWtQeEwmbeopQEgi6A37UgoxtWAzVgmpyMPVSQq4vFDsyM",
  "key32": "3ESicHvBeGDPtk5TXnG7f5MZS1Ee5ZRdqe7zJwVRBKxzHW15MUA7efteUTa9dcKQtxNpwyNJ26M44nJr8Qntcc3k",
  "key33": "4BQRsw1SPZRTdFt8FskC6eiNyZdSsY6ADrnq9WAua7shZFyWgpJPvXsWKfUYGHzpkwqaUr5jWjKZ4ZyUsgF2GVLt",
  "key34": "aJFYWxKy9ngeUMXJw5swHDnjwf39CuC9vLAAgcDshxSMiF8n9XdGoQghXqgWj8fAqujrYuUZ3a9SZm8xcyGpkya",
  "key35": "3UYzbvUDA86zZXhGhQ2Bc2j4VSuRBDFf43ZKtZHvxk4cXdt6Yw6mkDenQWRPGqxyMEVJurS5A87kVHyPmUA1Ejnj",
  "key36": "3hDRf6XEZTNejtzGPuZBpLm8qpc1qzMUz2nAWY4KYhxoqGMtmRGaAfiVMHtkd4XVho2ekR2w5H9LmNFHkSX7Rv76",
  "key37": "5X9DAggmvYK9k1DC7cjoT7LWn2UJE45McTJnhwVEKEdPHJ51t6vGz2XC72yUFau7jygVCmHKseAQhZFsfu7s8afJ",
  "key38": "z5fV8h6gihwmxYYNGgBGNNeFEtGki37eHxjmWT3GmBNvzbw3bf834JVLwxB4CZ2qMWrwzFoALWoKqktzgPRLiHg",
  "key39": "2Q7645k9dR9auLaNWcxW7RPo3A7zaeqKcjKQJXnGuV7c8JgsnnEtWSBS9EzW9sVpweqpLV1Xgcxd7HVC5pPDE12Q",
  "key40": "622C8YZRofjwYVfhXBHr4bMvimhXognnBqp4DQARfDf8TpurzX7iRAHTABhDiJTgTUWBaSZvxTjiRSq9cC8hY6jj",
  "key41": "yHS1yNDXaXDaU1ZQe4BthAFmYpuhSA4122q2Cg3LvZsFUzeFRkj9MxA9Fg4qy55kP6GPjLGXk4siwP8AwjrYVE1",
  "key42": "4pEt9VxrwE7eWixbE3JocCznck3dSpQ58uoeYP2SFraZaZrxbqW2BS4cKFir8CG9zVah54cW3Nmn8F2EExogeNQi",
  "key43": "x7onqh1JBKYBZEmphaLpvKsiwG4ZNKkDxHpiz7PMTXZ8kzcqvmf3oWLSW4Gbr5cp16pNqp9gGVb39KL4S2RgYkr",
  "key44": "2cmWEa97CPgYykxCocxwrDWjVjAYhGEnHUf8tBBmr78CZwwrYRaesbyBvRdPRdoaU7Fquw2bSbMde6tzMohm3X1k",
  "key45": "5QCC5zSRY4utZgowi87SLmGkv5kJKNjhQbpqpbETpfi9GyVokX9Ca3YLd2nFqmmkheY2ySp2ZpRfjm1CcKscVBkh",
  "key46": "5ExVN1BoPPHPP7og9o1vKdkYyLiSJZB6ioeQ9RtEEudoezqqtNWPnWy8UGyUhHB3axU6iwcw2vUquSnkXa7iVs2p",
  "key47": "4NPqwV8szUePZ6xHdhWHLnXWqaD1dRJzmbcQmePuHvXVPJYNCsnFVa4pWA71Yo1JZ8MunBEhbFdA83PTmxmxFFRC"
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
