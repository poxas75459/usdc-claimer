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
    "4tLTth2rSqEnvRj4JCx8SJRhkujvWHL6EqtaDny2yBadz5uQeZ2iCQfi4GYJEoxtYfwJUYCAbfrNtonajVmZizE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4ZCiPURFBHzc5SdYdd8UyP2wSncN2uGjBMiGy7hTN3ciCUcZBMAe8EfMcfwJHZUUCZe7MWkBaLzAN72uZ8ugTn",
  "key1": "5mcPpewXLpiaYUSg5z3g1GK3Q3V5Aj53RHnD5xc5a37ehTTN9CtAi6ZPtkaYCWPHkKdBrJaBpB43ieUew1Bv6GJv",
  "key2": "4oxWV3TRp4Rwa2oFJ6b5yTWKgPmDWgrRWGrjqD3KGrGnZf8oqhbSdRUYMGYNqrPVneTEFKz6g2xc9VAAwt8sNn4S",
  "key3": "3RGKg1qSig4TKHir4feokeTEQ6rQt9r9B6dAJQEz8h8ZH7o6nUcFq7A63uegeZvjqwkiVqgkneU4gaLJJpQEJg5q",
  "key4": "58F3Efu61FwRV1JUta4CEsPafdGGZfg6S6YJ3zw23BduqQny7zh3r5qLTjf6s2DxxDU42AmYNbDLxct2G351kfnh",
  "key5": "2LMJZsmihBJd4BWrnP9iR3uBANpzutiqm8SEhosdJsZQa2k3LsyBJEH7pzzZ9uyWN1tEjjWzcxqWFoP7NkBW9eVq",
  "key6": "nruNSG5x1cZE5LigCQU28Gvpqo6TyJUZ3SyeRYksMfiadVLtUQsbv7MpZVVS2M1pNKnwJ1JkUKoHfAW8rCuCwex",
  "key7": "3i76L3jQnk4bhaDrzrbTVxKJbVt4onpEwqvmdNAytTRFXnAP9rgarLMPqW4ZghAVRVpWh5DxuUNjMni5p9Kxetim",
  "key8": "5CYWVpb1ZLmGNTxWe5x63LdBMhhBYcCedTRvMYf11Ay3qN6aP5Z16CjwmvMcXfe3qmbaJJxSgrpfF5Zoem3H3oda",
  "key9": "3FQFu2MUx1qyN5cNpsfejnpfu5TvFfBeoekvYV3rvX15FbeHFbWNfHkNLmRokVwGrAZDystKv6Mgx87WzuSVwpxn",
  "key10": "3nUNs1rGRnm1cAvKNpuYQyBWo8gRNLR81LY18ueH25LBSZ6PKAXPavAfoTMcz2JjwkPEzVy5rzeGT74CGpUA5gQg",
  "key11": "2kYuDjRLutSTn2ZDauHUmkf9HiTR3w6xBdqvuGBkFjbsq6w2oUP86uG8PLLvXB6EsGkGx6DhhE2BdSxDb3smKtvz",
  "key12": "29EcDzrLiCPgV7umRsdVNznYmsk4wfHQuQP8o5ftoq9YKrooiKdkPESB2jSHGDDp328zh83X5Cotnv2EhEfXAteZ",
  "key13": "2xqqE7MwzBakQdoAXBJhfZsg5rgg3vPkobjFNUweZMjgQ6UNXPK2nHPnHa2EDiLq751XydREN1V3pswhawaBCTCA",
  "key14": "4Arheuxa9AAwAkyWzHhGaUdawKqufgBUvbJmBydCrjZdvD5HVdstXuqHZwEvnVr5ZRbv1Rsu2K2saoC3dtfU3kzp",
  "key15": "2iGKQ4R1B5r6e72PsGqcaL8iXYhsfhf16Ua7K8SnfAAhPzoWscqJWN857FfNYwczL2bYdXzbFPZdG6an3PFV4bD4",
  "key16": "fEkk7H7LA61K5nvgfSrfo35ijTGCgfDszxSg68QfYCqiSjMg9Sk5yC5dtCvyoZcRtbXMuzQmZDHnNUok6WjvCua",
  "key17": "4q9WEnxJMzv3Wgkty9LiL8rbBCwTFRR9nySgY6qpS7DAk8Wruci4LGdmCkj1FvNEJrd1G3VB7jGNCUkCNSpWjQtp",
  "key18": "2F6DqGScATq468MKkc8H6zPPLy6Npdty3zbA3zHWmyKyLJUVz33tLmEwb9929P8SoMxPiiQERKJzc4PRo2uo7fT6",
  "key19": "GfGamGWiDaBtJMqQanzZ9eqGuD6GPR1AYYYh5WRkacS2HewWmhcK9nFa1hzwFoHK9p4B9DzNe4stddgayb9vx1Z",
  "key20": "4fr2a18rni6y3XF1fwwRbXis8hDCAVdbBjmkX7xGdmK817KFzWZwf1MmqMremDVqqu9BJ2udBQ4o6wQWxZjSTHeo",
  "key21": "3WrXuvNXbASioRHKssAuMpnyttXs4MccXS2XVqrCYF4VoR1JQVYQvu23CipxNPCPSMRYFK1fxuUCUmpC7aPDX8Ue",
  "key22": "4hn5GdMTjMDNgigCmdHmKGjHLch4JDzY792ANfPbFqzDg3WUzVsUE2D9U4FbmTmr14jqvCFzZ6jy7iEZRwxBRfkL",
  "key23": "KMhZL6jn34aYmDY6fqrET6hw3egoYscyHySrHcMKW38bhwa5bnxtmcL1UGnNNjvirx5VgTekXRhkTUquwfuQV55",
  "key24": "3gRnniC62Wk6ShCkKVNDC8dpn13iLJ2iWasCdbJ6LBAUucAmHUtmiYD4Z1NsxdEGjUV6gCu2qgftoyxe2VCPRQpg",
  "key25": "4KnWw3YkDvoCKmCFmsEcqL6UwQCKTWyYg7HWghGi7wBagmay64G7xqMTrb8x7Smdvaf7ySha83bQKieNTEpURgbu",
  "key26": "XaA1f6s792r5cUg27wiGcpzAF6wtFMsU98tpFNRfxz9TgSXrGH4mt35vowKvWiqifise83sYBVyY67Gvku8goak",
  "key27": "5Gbaca9VZe1vmkWNV11xTpknfr9GyoGni29V8dWF8UB1ppCbHLmSxc5q4pDehzJnjxf6ECJFH7J8kkK8wTcFRxEA",
  "key28": "2DEhDpNGT8KYSzJaTFQg6Z5VXX9fTZTVJFRbHYNzvRURmDrmxiTPuX5jZPZEYGXzXzn1dAuRivg43Vs6TRJLLiDt",
  "key29": "XUKMAze5iQLsVJooCcyUovwGKPv6KWJvzyuMvfiedN3LWRXbtPXvy1SzEuqTMkpAp7fapjVZNTdEg4BwcRHsQJo",
  "key30": "qo571Yek9uPfrhxKCfXW2Ap12aJZJapNBpFiCnQAfXEPVJZnRKnQoCY1CTASXrjiJiRo5B5wZU5c3sY6ekjQDHr",
  "key31": "37NkXmxJcU6kxMR2GTWEBJDgnq1YjuyXuT7cjVZM2SXctrukRJHFSRLmLA1ZmdUJgPfa7s7i6zPk5iBkDmB3xyZ3",
  "key32": "4T8qjLu3Y77Wxnw5xjVr2rJJLCWbC1iZH1FeThoqYNpSCb7LJ8YFoHXd6aVnrLbsAxHKFCZZBHSwSuxgEzc6PTKw",
  "key33": "j2BsPoKFTAHRYRkLD4Q4hDProYYFWNcnvMVGULpUozCzLBx5Pccu3WdRzSkxSZFpuw6MiH7hbRidLujmyUTK5hf",
  "key34": "8rD1LokhMUQnF5gbFns3rAFBLgxfXFeDivY9YG8dxTjrj17VsHKamjSSVVvfK4TJRKnbUwYm8B93vRAvg8LJgk8",
  "key35": "4vyqspA3oWDYWjXMR8Qmxq9PshBh7nVF3zJ2yBVqLg62YcqNycYiNUgUzwsguDntW8DBn9z3LdD2RNbYRBYWovLu",
  "key36": "5B2og1bPfs7V6rorTyhk6nMBuC2siw4qVDfxsZmWDq1sSChnazZxu4p1KQc2qk7SqmK5pgQzDycHv3CrQQkDopM5",
  "key37": "4kmnTirpyxTB5qdrxr3LaUd2D6Mtnx3rcqdNa5FBXM8hpY6fyAkoZiw5nNn1WDLUabpyRyWsfAjv7Q47rTuVzToY",
  "key38": "3vGA2J97fSyraj1NBJATgDTxKKuwGGqUyKcDe3KUVXYh7tP4JNcr6dBrd9c1VczP42BV28Mbqgt2L58jNrzmKfAC"
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
