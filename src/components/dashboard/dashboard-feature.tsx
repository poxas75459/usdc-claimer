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
    "4EiYLdRGBzCDAKqGsLkH3Br6ZEbyzRGWBvhPL8JYBtDbPybjJp5vjKLLZ2YzjAr3Aj47WfGnf5m4agwr1oRJUMGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNMwEeQvTtyDithgCanposUn6pZsDkku2ZPv14wHizK2hYwiHaho15NPKW2H9drTwQvcLe9DXQZRc3tGvb1FhUV",
  "key1": "3UgL1EYgL65icy4ecqhauFWTMBD5o1rxgASPPAsCKwEDmFJ26E21WxoRVEdfFTbk1hCeEEo4BVumpmbHfiGcnFfi",
  "key2": "4RtmUWcsATvRaVysDbmtD2tZdzrQCuTRVVqvauz4Uso8Z9Dysg41PMHC9M4D2dz18ykbTkJCT82M3kv385JAb4EJ",
  "key3": "54mTsyQQyPXWJisSxEgs9WAEeN14W5jU4AgsB6pk1seNraNNtQMLBYHQD1Cx9npPiB1mx2pYxAkvAhRXdrpoyQRG",
  "key4": "2U2rZfb1YTLkYt2mcU89HTvyatTq4VLS8kmkWgBY3T4vLXpncoLc8wZPuWBf2shMeT5W4ESne4rGytNQgKZ6do5N",
  "key5": "3mzmECRNfPxKoz1Kk99ET3gR7STs7UA8mcEWSce6p8Ncwa2KfhCog4hSoZKVuFpHhjmKpM4ECM7Fb4G3ujLFQ6dC",
  "key6": "3nyZnRBhWs8NJeohrvRQbEB3de1BQ5yn7GFZU5GU21Htcd3CfTXpo9cbgEvZ1ELyLrjKAhBpwnP8ByYbg6XMg61F",
  "key7": "64ZYhCymD7S3kxS2Evd4LkaoUqWddasC5N3AMkHJRyYbXotzgUeKixFTJwGJ5rPgcXxk75hqu734Y6BmzJATZFht",
  "key8": "K6rKgH9wk1zm3RqH72f5njN5AueUry6HzcW8urGyappGYXfcFwn3j8uBRUtUtik2V3PmopzPRYBX3prTrgSAnEE",
  "key9": "2MjLk9btCCu9axqXhHchf63jLrnhsiKxjsZWWf94ZkGAWRJwzwFRFTC42EmWSaxLoJbKa4FprpYAMcBYZcdYYPYM",
  "key10": "3uWhmAaLQx3RWxqDnKcjcL7KewxnAn7tiN9bXBfFghT3uUbKgi4oaYhdjUftzWZGTgaKKfFSWF2ZsSNYciGmpnjG",
  "key11": "3wMmFZQc4iWrNRfJi64X8aMBf83ojSXb6p7DYKMJ8HpKEdt756KtZNidTzpWo22Qrm8a4ehwy56aTrpQDpMWPDUX",
  "key12": "38TkzgTrdZViB5J8KzTDmnKoGc85F6dJwYUgUXz9CqS8ZWSHhK3vDtbVaDUKLYbv8s46o5jPQVwWkc3h5uxnmofb",
  "key13": "4GGbwybnbyCFWQdkWyboiNRhgn9XzMcKWdZmp9AiUTVvVaQ5Yh8VKBeRuj4Nod14h7f8Y5fWk7WbD8ojL6H5tkLQ",
  "key14": "3ictx1h6DqiiznubgZMJ182p86iESd3oop2jKBy4Q65d1qvKVTRrtzyECCZ4dR9MZofRYH55Hr3o5Ac3NAsXvGtQ",
  "key15": "3kmhpQaTvszbbFpfCGWiKhJWveombcqr4VsriBBf167qoU6SD2J2zixJeTtBGYNKDgxQ4SiTxsUm6jyN8nSBctxm",
  "key16": "3116WMZ3DMgmBsFzHxSPZWbZfimfw5WAR8A64Nf1AeA4eyUivxubwih1RuT4bq6tyWLQSnzcXzsHrX3rDCGBWZgL",
  "key17": "53g2FEZxffBeMeXnt4SFMGXKazZsYLBNen161nzBfnxCSoEin8CTYWYnfJU4rRaxSoKLexbRbSRrjJmziMYFnshz",
  "key18": "3Ub9nqMJGeaBkiU6usPBJpZqiCZ1vr6Fz5uv5ogvheYomJr5BaPpzctm5zxyeUGHNxVJ75uYULos9hwrwQ2ysBVD",
  "key19": "3vQEU2xpwtRuRQXzStpsSFwJk7hbyB8Gf4EujhsKLLSjr7ehKKZi6H9ohykbC1ZKmSKA4Z2a4NbjvpV7m28odCE9",
  "key20": "29dBnQjrJev7idHvbhcAPijt4SVUiQr7um6Am6ec1H5tMQGYbhXpuV38B4K7Sb8WnQysAEV2is5copTQG9Gwcg9q",
  "key21": "3U9VRrPc55hoRBWJCyq5t759TSVexyoeDLN2E8r7GXAWXmE8hySSLbNtF8VqgyTJTK5jgPMEDRQN35XZparY5N8e",
  "key22": "39VWs2UW8Mh9UaNuFvVLGWgZAYwzTzn2udLNzY9ETyUx9fuSsy2jep4Ds3CED8Nvp99ep3Lh4cPaSsT4FrscoVL4",
  "key23": "53yVSurevsSioUtnH1Cb573DKe4tKvmNxhR3wF8q58d5DjU4jRMZHcaXjcQ5jHfCF7UBSRNegg6wYN9xcTM7Yg3d",
  "key24": "432PLiYr5qYsSeFKgnXEDQSRoqNNNcV2b8LvmbUyf3TL6bWZkm8CZeTrQBWzWGiVeDKeWiSaFnkhbW6BpUceH3xK",
  "key25": "44q2RgCax5eSj6cwiEx2XpJdHUV8X4K9AjNwcqd7Y4yoCHXeKMQmcdz41u2Gmc8ECNfWXKzhR8Cyc6C37xZt5FsE",
  "key26": "kWockj4u1oGxEkUb4FHUYG6x2y8CZxSKUMst5SRr5Z4V1EoZJZXfUxcYGYmr7ApMhsNyiwqMLU8F6617MdCN3dH",
  "key27": "185i14x1sriB2bWAG6behjSdgyetDZtPH4GasAMztvbF469cwdA8qZpeTg1Uynd66W198BjBoXtgFEWTxKZxVYN",
  "key28": "4T8pMUYJxfE4nhVyoMeMtKtd3vtFAjFroZjQusQ394vubYACBV7xxd7R3SYuuvqkXBNwxEWjdmoybkFR34nEF9TK",
  "key29": "21w2LZ4BRuaofCc99inQ319fEQ6NWWpoobiSDB8sp3w56hXhKnejUubTiRDgL1CNgighxEC8yykWFUYP1GduSZcu",
  "key30": "5FA15y23xctPpPjJoYygG4mzxfxAFDZnDEHyJEXbTq7n4ZQXEoVvnaSMubkz6tNeQVH3tNp5YH12WmmuVkxVvW1p",
  "key31": "3NbJDpu5NLVdLCpGyu233Cf4zE1KpWEBnh5iJXsQMzmtg7W2bvB7QK63hzDGr8L5v6x9pDzQez3ipnthuHiZcAxp",
  "key32": "2Fq4eKq2mFVrbaQj832wCQjtTjzd64pwUPQEMffKyLm8uJ7p5eUJDFZBpb8hfViNJBnpzazdvJTNo7c2NU5Y7At6",
  "key33": "59rtBdNSpYx2ZV4VnvztJYx6WcXovAXoNJ85MVxAM1HqbJWM3QYqcFg6sq7v1EhTk2T1YkCxHVkqFjAkm9YmZTco",
  "key34": "63RdqbvKEBwY11AeLRnz6MV7u4VxXDDu5ASfepNX7VmXFng8vVnuzyT4YQTntKiPhTE7XFhzdUE7znMiRJo12iZc",
  "key35": "2wosX9DiNXhxwXe7KirtBDthKJHF9TU2VPz5mpM9o9DSsJAzLh3sy4SBhp2VeGossjZxDcEGZXWQVbCwQkML9vs9",
  "key36": "2Wcgxix5V6pput2aoTPSJ4zeUpKWKZWGndXVZvMgeYjJcwnxCjWce57abbvddwKqV9rHMjceV2DQASgXHxPqo6w3",
  "key37": "7yXoUjZX55rarsjaeHh5b1xRxxGq7TyopCDwdEvPtCAFuwsJRgSKfT2FjoDSYJE7cSSSutKtrTjBP4fFH19ymCH"
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
