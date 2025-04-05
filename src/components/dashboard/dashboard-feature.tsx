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
    "3dXWLBKVjeBz2JiqTp6VB99SzsE8Ucmhkq3o1DwqNFt2sf11KPUqCEfhz4FPdQaTHpgD5gUWoLfC9xRDehTnQXbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzv4XNQt26U4TdDkWVxBu6XVcRmYopNDzyerQhFhtJLggpMYzNZrU5GMHbyAwUyj86H9ULyVVWzek4Ac2pimiYp",
  "key1": "3o3Syp6RACkDoZabdWzCbbLXwst7BNmbJo31GZHns9LYY98N1vMFmQEEH6x6jWv1F8HWtwRYBxHXfJ1coHkVPGUz",
  "key2": "2MGgPg4oyHAUL98gRMe2W5QkgLc3NNxrh5MyaF3FWzH5jvCxN9Lxyp3wu7UPocFiduzYmzRTtchjThQpYie5zEm9",
  "key3": "4xSBtuhHjjr2TBqsTJGS4Lrgvy69pD16YTJSk7zu5qb8niMN8F8jVSQV58YAqq953e9XXnJnh5oLVMLy1BrqvhqV",
  "key4": "5Jh2NHJ5f6maPvTeWNr1Sb4VtVhww32nsAr9q2i7AZgEo7iyMGDRwZKkG9pqCqKe41zioBRRGtKxd6yrGoeus24X",
  "key5": "4W3S67vzbuu2h6Lovpk8fkGaneLoCpNqufYE2U3giQBRUGzPUK2MTMF9dGwKMqEASwX4ZiNrEoiHRtQmnPSM9FPN",
  "key6": "5j74nw8q23cvqPz5LmmgHMDxW32oa62WgYNWH6gbcr1tqctbYc3wABxqVb4G4XyvKcgCzKsdpTzZDTH2ZdjcUGyN",
  "key7": "4G6Cm3P6qFuD5UFJwLUPVtLkV5vL9GaXfLMgxp8zr5rjR1Ce7RNFWuH22HVRZtmRACDBVguKtSU6BBXqgJ9Gs3rh",
  "key8": "5zevcgmh1MXCbdX93vue9Dwpf8JCMRqiYLtozPm2pAHDhpp7pjkamRG5fECihcytXZ5x469ug8AZhYfQpYZ5kcDZ",
  "key9": "5sBfbgXCSUZePN7T3tRJveGr4DHZ2xxK8jd4NBBKV71XuJ3RynGrxfVzPZ49npvwGyCzRNuQTvoZh9ffjif8Xa5o",
  "key10": "4VY9bxe793pWVZqc1nhFu9dARa8PsVVwxviHfsSGAw3RyUEVSJYfbZXh21s7KCajwbrjexP9eE4KMsqDRTHf2MFe",
  "key11": "2m8teao3tLnRdPP3Rqn8GkJtWAB1hV2gm8menuuQsN1Xw6YzYGYKqjyr4B3HCKzhzJ7UYotJaFtdDLjuR7z1MPQ9",
  "key12": "3ZsCci46ATxM3zT8QD8fTGsNQapyMnfiyW6ShEFqfEPLVhaom1tCkM731pqCQrVuY2xSXJPTBqkmT7Fw21hRnbm8",
  "key13": "6645rLSPpwvPu9x2K5SEyyS4CkzQx572nFFAQzfp2t7WpXqMsDVUrUQg6ikhwZ958gZ6G83CBaVntkK2NJ7z6NXQ",
  "key14": "4BqWoTCg5jnGxxhx97xuD7UKmym8ACpnkNXDk5SknkTB7Cso3r4T63TYZfdxZNRHtsUSkHK5ZNN7ta7Pu2AisA5M",
  "key15": "U5BfnnwXhSwpbyVyPi3dsd2PkNakRJNaccdYeFqNnqM8zuqWXQmZfh9DdxJQnmsGNtaqut3xwSo4vh2TKLaxDqp",
  "key16": "63cEtQhw9GFUwxbjLVDzRdNz492sEoyTUfKv38L24cXMWH63KrqiHzsY8SXF3LQgMgWiAxxkYXkFZqaN2Bs7JMoM",
  "key17": "pfMpYn1rfcM9qvNXJPbbP3W4Hkps5kN3N77UfbZa9dyRvkepyP6QLotyJADbturEHsgm4MefzTPu6v5Wwsbpfjf",
  "key18": "4NAtFszBA98Ju93NfsZXJXJzFndnuAzryfUhjqGemyF1rfBaTjjWAwpWzYZ13GzTiD2aQQ34G5ciAEpXAQsa1XaN",
  "key19": "5M3iMPV7ZyE5jR1qQndjmryBVWPZqptFYMbnCVw3avUUnQ1BYNFm89j7NwmadeFUqFVj3FuS91aJsRsX1V8DMUBr",
  "key20": "BnUpgJWV9hL5XDZgj5aHqFBKTKDMmwd69rTqnPt84rrPi8xNyXCMtckTr6LC3AZsLFpFkyiZa7Ea3oEDeruJ2aS",
  "key21": "3bLwbuGrEVztmqJzq358rB78rsTNwikh7jBxXWxuJ52RHdVJ5fDGpjyCRzJeQbjBXA1WffnJKkbyj9DhzkoxU1tK",
  "key22": "2E2hcBfSJCvXF11M4ZVHYMTUNp9xSZCKT6zbf3oxiaPPFLCj6icrjrQUfujaRuW6D1wfgFMb9qko9n6DvnSvnNYR",
  "key23": "2otSy1GxZnG3KYMjgAz6biC6Grbjs8VTpccGua2EerHRhmyqvLjU6Ym4v77AT12xLcj5QPG6hffpFTQ6sTcAuZgo",
  "key24": "vcfsr55BTR6mWMugWqbKHhsMUStuLJ85g8FT5fo6f4NSoqLJKA7vK2vfZtevutFWXyGNTHZ1taRV7KBQQMdhwKm",
  "key25": "5aMa1ywNqsF66BwgkpmxkAu9nc2ug1N7sKwSxk2xR4PZ1YfdEjJhtKgP2huzx2obfjMj8RrC6SU3WwooDpr8Kcxj",
  "key26": "2LF9QGEo5XhzdW4VFeymvz21L9ir4RofvTkBmiaFCL8GsB34WBJU9jXHff8GJss1U67vc6sJDrZBSC6dBJdxfSTr",
  "key27": "257FCecPkgP7YtKyiGRzLZXz2vefvSNmjPe59YwKghRu1YpfNEdxPA6D3ez7JbVgAgsbfMUB29zG2sBwDzoT5ghb",
  "key28": "2pDKx6KVDtrq1rVFLY2a3H6HTjnjTDQjsfdJQFi1PxyDdVyWN9EAhnuFMftoGnycqWu3H49AXxdoWsb4SjktFj46",
  "key29": "4fkPDv8PEEWZo7SxH6vpz1qnqgEt7VLpb5zWgPcE2xYmfpw2Q9VZ17P4EbdHjV3CAEqV2BVhpn82vHzVurLcqmwv",
  "key30": "2TPDJ3R7eS6m5nhRpuxyqNcafR8Qn6U7mkf1UGZZb9ya5p8H6KaatTf1x8XzeH2x7eBaC8FJgRqWnBfwmJwcLJg",
  "key31": "5FBf8rEPjENsCqCeVN8ELjg1PFX82CNjiR9JjhfNEFUbEqMQnsd2xEndzEMCvUQYujmc9P8PXQTTnd4fFx53uQzo",
  "key32": "4HkzDLGFaRGJnGftieetUukTE4Er53k8GCRqxe9gvmEWD2to89UW391FgHJyA8Fdrdwaq9qEbpt4VLKz1ZfuQcrb",
  "key33": "3TeL3B8pZmaF4VEEmHZkwMkBxmAtLeUnTpcCLb1auxYR3qstAC6Hn2Xoa5GqYDTs9mcRCGB5Wpd5fUtPZtBMsQyV",
  "key34": "3onPasyKL3W6887yHcqh8s14dcLimCGQyAaDiJq4gbnNFfrxbbwUcsQj8aeAf5k536TqsjssqjeB8CNwtSGuuMyg",
  "key35": "BZA7BNNaGrGB9q25efxSNSkjALsHrYnKEiwix9m5xj9TBMc9kPzyPuATqdvUuo4F8icfK7N1CsyVSxXJpX1w8Tn",
  "key36": "38KpebwzyDqQFTstcwHdrv1rqbNQCXhbfgs4xxKxT3D4YMSTHtApzwAgaMyRnGbLPDLZ34tRFB723hQepEi59r2z",
  "key37": "5pJC7m9sY8dT9kRZufFhsEJoXfpbmkMzm9M45VMkcvVtX496RxKjyxkTGsYgGZEx6vPTCHGNkpYkznkhRyn69nD4",
  "key38": "5hwmqfY1m6NqFEPNpadCL1i4TFUHbRuT8VgHXj4jDb1E9CSbVunsTU5kzMJxwtknGHUhJhfaYGBEDc86rJi98B6R",
  "key39": "2zHVazmNHdj5WSPaw7QsJTeCoPWjoDaj12NvEiAdNzZ8urJ9iwpoKKMbc1diWmngkuvBQEjkVmsvuSnucevXBTT9",
  "key40": "3tSqyGpPJt7C5guLWu8hzGfa2vnZdKzqjnfkAb1gTXr5QuhxrfPP1z4r6nGk1s2PRpqn7EiwEYE3QbmfJ2qqRxYr",
  "key41": "5dVAyYXpdMB6WRvzbhnmgGYyJUPB2k6rRGf1DvCJWjbfELxr1de6rTCCsVgbGCGiAaKQCnFuQaSZbmB4KtLruFo3",
  "key42": "5cMGDXk8MLmXVGhFpbcgxYv4rkzqznNf1a8Y327wdEYDvG6sBGNH2DHvNWufoiC3C86mt9WxBaJUJcBEPW98ES9Q",
  "key43": "53THBDz3opysAJtdQcos7GDgSfCzntV19nrFReBpM59twW1SAFHRitPLbwcyVxbV8wgxUQkwxMowwqRMvYb1QvZs"
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
