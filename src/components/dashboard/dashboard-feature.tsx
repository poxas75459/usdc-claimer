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
    "4zQDScpdEtdD2YRV2VesBD6UmP18mxoYG2q4gmQScTt4JBoLGvJBY9w2nW8itrwGSg3af15jnwnjCK5qfgRCWZsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9DTeHdwhrqydNiLNs9WhS7DeALx8oQEhfxQccbc6WztqEYC56FmmUkGkFfe34ceUztpo6yHJSjQwYk2afQDrp1",
  "key1": "gmnMDBBeGQuGBWdt26eUsUrikuJ2DkMbPVZUk68irJuVnAfaBimj67X8hXKtuKx8rdAtX4fc7VQhQJAvSSLir9z",
  "key2": "5bFj3WUp4BACEQvFMzPrnGK45wNZCJ4Bnto4JmniXCz7PVb6ZUX6HsQLmD4u81WuM5tQj5CPGeYwcNF3eQNe5nSM",
  "key3": "FxAWdvHiR1XHLG4fZKoKrzz8XNaQ91TFsopXB7cFgkWYnRNucvJaF5CdpEtuCzrnvgJY8crYcruUqwWezz5Ahsj",
  "key4": "3zsNJiLSEpEFPMHfKxwa9R137NTu9ndm167H9ob6YobTmgfvhwQ6YFtvXsTuSDEbhuVEskDwjBGD5TFHfJyuUWgB",
  "key5": "4BLQq15ifMS8jHeqvpcDQjCNMwuiu8NpCWGmX4bZop3e1vx9Eprd8wxsHNLEMKcCskXMzfy1bHx4w64fxqCQL4PP",
  "key6": "2qj3vF1gBqt2on4aBBy2iTBFeYTCpTLAtRHdQHTzCwoMihsTZJBYf3derzXM23zsbJskTMKVZwjCzq8TzrcDdmZx",
  "key7": "3j3iN6rGS1D6j6m5P5uouY43ko2ozmAAGmEyLenF17TywNi6M6KfmbEEHRXfrnyjdbnikQC7itVSsv1x2CJFWzvx",
  "key8": "5byqzxF85xjCxWUCJMQ6j2rwqrapAtUqebLov5Ukb6z8Ua1mNzzZ45F4VLSmoM4EiskYUoQpgcZWCJ2i4WuBrWpX",
  "key9": "5g4rxGeKgH4bWmBUytT81jEBLnbLgmaY8sN3ERcCVA3xrVDZmQ775K2B7fc3J3bmZtciYTXDq6TcQUBwi4yXcyP4",
  "key10": "2wtj95TfS51c3vJw8qnmYSXuQGCTQcUjFBNCTFYZ7LEWD7jcYJV1pisqWf25YyoQvQ3rX7jKg9aQ1pwszwcqVQWM",
  "key11": "3miK6uVh38uZcNZ2vzV8wPMMWcgVDnFwwsFAkFJCqnuwsyXEqfkSAkzV6GdNFk8LRo7qUChVU2UDMwm5KsUJ5gWb",
  "key12": "42YSkeffgrbvXrC2mep48MAhr5QtLw15Tgen7AzZNyoWnu2YDZPcNyk2WL46y4SXT1bggCkHS4ipqNzqQxkDJotV",
  "key13": "46DesYZKDFXXoHvcbd45qYHx6sDQBgijodYXsPPZvxYeK7B9K3CUm5z6pcD2ZcMQpiiW8TFrHH3he5H9gwLsnavw",
  "key14": "ECSRjMhJFDoTkbLnYVPYhEQMBmBxcvRJ8krvLcDi3sdk6SnpwBARxJrpKJ4FLhTqjswWSdVseZ8BGnXyTrh8ddY",
  "key15": "3bosrCoMUQiFnsDdjoXqaMkasoTvT7T2bq5BbVUydDW733hP3mte3znPfK6TPzfrNoon45jhdxdE4eqChSZei2U3",
  "key16": "3fafLrRn93omvYAQEySKZHNuuRCBy5TWfd7U5ocXgDTbJggr14AmMPnFodZfaddFcPULCwrvKdm9rfbtWnh6oypS",
  "key17": "a3yBGtLtT4kGr2iNEJvEhkSzvLhspJ7z7pExhy2Mn45fC2xAK1wiqd5RnahzWgqfTtc7mbSMK63GZVsXgJHa2zs",
  "key18": "55WoXZcL7CoitJE11mEUqsG5qsF7T2XFD2eZim5rNeeCVzqUZ9uET5kfR6spFmhXgp3iMCtBDgKZK83Kfqv1jime",
  "key19": "56awx6sk8KjJZfM6JDV3HkTdMn1njYcB23H69toEH7Cq7KVuDeBzm9ZJznhnqsqxHcTAciAqhTH6LHCJBPiTLc6F",
  "key20": "2cdNMNHYD3Sic2PurpfU15D8iy2u6sYptrQ8pbsuGLy2HyXaGVw3gfrZN8gsQg7FJqER8eJiXvWDgPTpHXXUZ4Rv",
  "key21": "3WNzuUXjzrYfKGJGEh3Ke4jkmfKfsTQqh4hWYW6f5D1FV59w53GHdzmvKMUmGgNT8hSiJaRAnFL17K8FCWwc7z2h",
  "key22": "5JzzWjdGq1De1Z3LemoeE4DNrfnXYf53StaM1rXZCLcKKipeweX5H59n8dtW1qE6GwEbUiCz3JP1YkY6fEJr5Yw8",
  "key23": "3mzJZAuDUjpXfb8XLtHQftny5QkJ6cgUy4CZrYhDYeyegyYz867P7ptdojAcBdkFNmwxH9bE9EuejF2ngktd75MT",
  "key24": "35LKzFowCRh9hwWEv6eve49Ev9TowddNQWYSAFGaRkfW3g6j3HpMDcPyQ4tBREG9bghYFUFUvufepH5FT26LzyH1",
  "key25": "52Lusw3w2kMJY23b2HexamcsMqDLRe491sugnwjDmNuvEchtp52U3vJbJzkR8mrD6zLLyKJanHyDPadvgQBH85WE",
  "key26": "3AbHsqGPAn7BAo9Z8kncTK8jk7C2h7vA6HvGu8uwP7hhxGxSPxw3EQFp6wbi7W8vQuJxk3EtxhgdqGQGmej1nuL8",
  "key27": "4Uer3gGjzGqVfgtELcURScJ9XmS482uvPB9ZpxdRxZjGQzbV9UFuQnjUGBqNjUFrohRwYEG8fZxABJ2HbQVow9ii",
  "key28": "2cNcLy8V8eKpCXx9LrEJafuRAA43LY7VdN3wn44Un5NESvKy6PeWdZ5ScH86sZHq4psnaX5tUBJohnSJmtsTdxZB",
  "key29": "4tFpAmixWGRC8mVJGmGSkS18TWEDekhxH53j4RkceZkQ58hiaQN9A3WTY6hNTuR2P655hXXQ6onM2DcF1BMVmoyR",
  "key30": "Zaxft645iiYvoxFDVwt3nBXLJDR2bXwnLX5Sx6dQnusufUTmpPPZAFsC2PkfRotV8YXxEBe1hsJa4buFQc3DaE9",
  "key31": "21TGwDueEENZAHzARG8e2F3WuzSXiLuW5Ja9KdZV6q7ZBdwqtg9i8P5wyjQGktkLKCtS9Xp8XdLfdvSXeNA7W5Ac",
  "key32": "yY8a2jCoX48cPRmKg6YaKEpU1TPKRrd7mHzw7xBf65fZkUmkohaUSUT6irtLMeTKhpCQnWvmfSZkpAvyqtDmj2D",
  "key33": "62CYB7r3JQ5qPA9r4ywGx9oop9EYfyVAK52rgTUQDUCBHQCK1maLwVBFHqiGR5WWmTGRMvNvTWBH3fowmDjNoFXh",
  "key34": "4GANEdW3ZTyfZTfDJjHNADSi7YmNR8iVeHwuSvUCsGLxjBASZsEm9T7vX1FS4Yb69Ni2J4JXy9AwCnGfyqszpaVM",
  "key35": "2BEWacHSz5x6BacefKeyUxFKKMVUYB7akmSeuZ53mhTUMwHEgsGCDofpCtQnALn4emR3DLz6tuoncRoWydNZt1ux",
  "key36": "4CNygjmrwBQ9Ckr5EnnfxmGib1ReTqbyafzxLdgooa9z6SoswPJdJXb5hekkequiLYgeW4kpjaGUyixXp2gVp2id",
  "key37": "9u5SbguK8eeqYZBbugnbgJ359Z55JidtBEAqbSr3CFZrXrCMwtKLTTxqzVntm6qUjNqRcws2yfL1zbYXqwc4oHf",
  "key38": "4BcxqjhQ1CSnivsWSbEPLYZTTzzX45S6MJEgnsPJx4Hh6b9UAqXbHEFRF8iCeKiGFJNXVw6yuDAwypsyqGVsmkqy",
  "key39": "5vuD49JWQbLyrbaQZa75Qig2mYJKf9qPDhu3RpFjm2NDonqjrvKw8vvyZQ9dQLn2RKRTCRT2cdcABiaGqv7VbzhE",
  "key40": "9GL3KnuzNPkpXma511vLYLJNrhjPLkqJfrgzPhwGSLDWyNmMd6o3SBthVZ8ATvb6HZrg5bqfKBhqv64xPWDonG1",
  "key41": "5d7pNQKJ2EYhUWzpnoq1i6TqDgChAVsZBGjgf6rvKdj1rHf6cxA9mfkNkfweu9BrwhjKygvgUA7C43BMU8gRXcEK",
  "key42": "52G8JuuaKrwEUJDxQ1wFVifsH4tLbQvbMMkg7WBEYmAFiWbPsiDxVV6RkTVtEcpJ1pVb3T3v8xEttTqXbwj5h49R",
  "key43": "3V54XNCTeHTYdpuhst4RkKHn838xFcoQU4TMHdy7NiHmFiX8y3KknmuUsrvNBELtuxMdT1iJGra5n8znvDHF7PDB",
  "key44": "2Cdq1JA4L3dBgk7cmkHgU4vS948uZwt1ipxJno5WQg1e1CxaT2kfowXsmaE1hyjPEwEQUy1eCGav8rDczXEjJ9qL",
  "key45": "4UNouaejYz9xy3VWr6pQspXUmUE1W5DXuyWebBjd2G8XayEnDvongaBcJzV5L7eWkUruGz3bevHemecp7YLM3mB5",
  "key46": "2cwRXHEXsBCccz4E1RjBCg3KUQEbik5BCJz9FjKon52GsmXjURj2rFGk2mHNtFesXQvvgUapRuxGbCvaQzMHiGA1",
  "key47": "5wreEoLSMgKG9VfcCfmJCts4zSuKipzrRh1CzeYSbvMMYyKyq81Jm8uBk9deoMbB71AY4pkAiy59oArufAXZ9YUD",
  "key48": "5Rf2oUcxZeou6MwPTR7XhqoTUYdALLs98LdHX9Cp25mTN12Mh59ohaPr5ZTg8dkYvx71DSq9yi6vGPKL6VtbJcGq"
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
