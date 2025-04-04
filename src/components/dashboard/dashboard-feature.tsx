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
    "LryK9e37fG1Rb9LKbm8XLfqYiDzbVdGzhbkSCEKpC8Fa1BUYRQXWSLTLbHeE6eLL6Jk3droNWhyjkuR3KvQ3PLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cth8bD6SRpgNjN7TumuxT5xMWWCU3xJCpoWL5WwWVCbkaCo9cEs8LMEt8a2N2t8igkBKLZdamyB8oVPwd5nntMq",
  "key1": "3TRXdY7yByZfyeiksK6mg6wMvcXRqg16qbhmD8Vo9qr8VW3SSXdQgoUwCrqsPjGSjXutgyXd798NYus24GBuasnu",
  "key2": "n5axL2SJgokioFqzkdhH4BipbMiAYE5Boyx5WhEcqTJjtiS4Uy2MU6Tthrh6d1pdA8zmhQsuNkPBzJbpvjsLaJp",
  "key3": "3oWwBi2aZ2yAExfHrgJGRe2Kuvk6o4enk5kum5iL2Z5wyzTScof8FQPhobYVS7XqHyBXAtzfxnRj6wT6W8s2jwe6",
  "key4": "516csdBG8P9yBUAnhH33YQdbEWPjdA9zsTyX2bKB7DeF3vRTqaAVWhNFj8jYgr6MnWw3ePnVzBfoyseZoNPru1sQ",
  "key5": "AB7aLEUz241dcGWj45v8HLzkA6fFB3DTjk7G41fpzxoqqm2FgQHMwzCkYDHeeRcgWDtsW1Rgn8AAtgVwom7qfPK",
  "key6": "4M8ukHzhYXD2cn817Dw5GHDDJGJxvWx7z218wHsYJHcQCi9jeEtfr2JRyQVRMVsVe8D18GRKG3ScQovhtsECoBvX",
  "key7": "55WcMScD7qvYFruhPw7Kfk7TDfo3KXep22fYYmyHPaq7jgrY4M5xmDC48GJ8Ug57agew8yGJvqhKCnATSuon63jQ",
  "key8": "3K9xV7p1m66wUytdxLe9K8qkx8tpNiGhdPBmgMoK7fR6FSgpboYjhqhuBfMV5ornSoFMPG5bGVoP7k4PVYNW6c4g",
  "key9": "bH4fwdS1HPHJxx8KN75eSZ4593iMhTbBEWwtZBbVRKFYiME3r5VbbMZDzXdC87H8N2pzjco4sz2nBz45CnUHMgD",
  "key10": "4w6qVA125hB7WKpunVdQq6tt7H6MJ9uX9SwPxtumwZq2sFwePskx2UHzxqDokLHpdgMVeeLyNxYgwMH6PZq7iu4F",
  "key11": "3EZ8aeXNrLbWEmFWKZBD42LtGbnkV4mBx5KWEYjJDScbvijftwFvwfUGwsUiabb2XNe7afmPcVTYrLYyjavvYAGn",
  "key12": "KR9qiCntAwAQ4i4p15EfFNcTsSTHy6Q1ozBkfjcFDyxksUhutJHVuFswNe2vxq9K25ZEH3m8AaAwkU2Po92WHPo",
  "key13": "29nxhFUgHQf1HG5nMabwCs7AxRrTWAN1cnFYw9s9FSrKZmMTrL4YeCdv1xAtpZinbijwWTSZnLYvm6rDPe5dAxiu",
  "key14": "5Cu7C2djZ9oDKNVaiBZVBA2oonae1tbZBXjEdqXx6AtN3VhoeeuULX8e5iGRtL4hyf6pdEcq2Y3gfqHRKS6iBPJg",
  "key15": "4ZjAecWzT8qNg85jKczffjDbsu4gNQi9BBNddwzc5yPajCdQYYRboyVxm2wjGQDErQZcMZjdo4iG6GDNXNaA4Qf7",
  "key16": "okLhpvy7uMEMQvGoeerZonhE923CYUZ9s7aqJo3Yvhbxwa3av29YoHqycDkfc97LusneiUAsSXuoc7uxJePU2ek",
  "key17": "37yNfouQ3CnpsRi6hJajYENPdksMd6v5MTeW98QcbYPCCnR22s2u7sdbPwDDyPHqhfxx534C848ApsFkRAgmoERX",
  "key18": "ok3VHeuXCYyHFMfFiwXdeF6cHudLDAJJ2r7j24vAfmFapzU32ixPWh8U9r3hLkNHxPqXXnsxWkKNvvsD7ZnPR3N",
  "key19": "2svUEddtB3UH8Hoa4XkZ1T6jGY1f5ewWogUasVWbuwrHAH9tJVMtufpTmBDRWYEPeDxfTTBQoMD4eKzDUXJniJpS",
  "key20": "3fuZ3P6EJYNgS8EZS1X8WDbkxXcgA23iYnppNa6uV3iSrPQN7meAg8ka1KArhvEAspc6zTUD8PCzpp1pwjm7RAVw",
  "key21": "tfnx5Cnake3B9SWXeLCujYhZKNjyTqCCBJ34o3Xkcw61E9Sfqz7CnQ3vTfRJYy9yWpwzy8hs3D9RbG5Q7g4vhQG",
  "key22": "q6nATDJe66xqxJeSfrJbwDGDPwiCmp88WVD6djJN1tTJmsEZA4uYn2zxtqK2zDXzck5nG3gEw67RfFSyywvwWfk",
  "key23": "4EY82LRoGMimL2Cs5u5v7BcSwuKM4EjUK9XrG25udRNyx9weYtw7zkCxgsjiGnKcTs3geBHS1jbdeqSYiM9o7bN",
  "key24": "dzCq7B78JKwS7ZdSF2Cwif7qRv6g7YN3UJxFPQqZVvLLJmMjPF3ksz9tgXC8xnZb4bgcRsEv8GKFszibbRATjrN",
  "key25": "34C17SUveHhNKh3ZoptdtZZW9p2S69VNUZDYgk1gcmLxLfpZcUm7huX2Seu6uintjbpi5q7iytgEhKkmm56bnGGW",
  "key26": "5VxEf59yomLzCoffdUXnehfNUjsbXWqYaN5SEVbHoeQqEtQc2eqjSPAsjLSze9zDfBREcxaXvZCEyRQGdeijxgVn",
  "key27": "4zNne4QDaukZGPF7eLPSZfAAoECc7xKzghwwtc7w2xcBNbzY2dKD3MbW7vTD3VPCB2twnt2msa8Y9kmXrBwPTzuy",
  "key28": "4C7B3Lhka6ncRX8NLNiLEnacfZyiyLePjRfFHBXVftxiauVmfxV69iTxRdYBzhvXwagShnktsjSh8jMDziBK4YAQ",
  "key29": "4DoY1yXSEFcXSyAYAazn2HWJqA3f7yo7MFmwRKYKSGxQXJu4vvVB7DZiFm6pQPBcH7CtYucdvATDAMxCjaBYYgA3",
  "key30": "5mgB3yY9wranXn4CatjyEBCWwJRpjMWSJjXfnvbDxkaquSmAtqn8Y2VHAPw7dEMVRW2CZaKC8CYemMwaPjHBzGSu",
  "key31": "4Q8CYGxuU44ER4e7ttDdoeVy1hXp94UGhriZaq7xx2TunDvNqFt4yKbUr25aXmcuEK5TzZme9vN8dsFywTE89Lmp",
  "key32": "n9GsAoaFrDMCCSHHJ9oUSkzjHYmnxus5p3yWEqbyY57wNGuaKQnc5JGBKdAURfX7q91En5AmaQagXCqd4ftjQSh",
  "key33": "2K8A1kTeJgUsFsKdvpzfbreYUd8TUdXrQ2cH37PK6sgu6zGqrVKcBuaD89ruQZgVxadbxWMx5LLo4Jqdheg7jeww",
  "key34": "4hU2Pv26uiom3EFr6b1Z4TM7ZgpfNL6dvzo3GsmfqBpDKSdFAbFaTZurhscrp7zq3qSMKn2HHzif6r9Fv11vZ1Q6",
  "key35": "2VXhcztj3FmdqoDPu5ivcSZ3HpQr5pY3sbztp7qM7oixcv8RgJgmX5X9Wvt5BvR9XNGamCFVrnaZmTsDnBLvUfVf",
  "key36": "3o4ZUdTUrzCFp4oQzSN4zco1uSaiwuwqUHxYng5iWFVSXNDH9TmQAh1A2ve1d7oHcvRq2Uak1CAXPjcyoh6mKmEW",
  "key37": "5QMz42vCKY8rWXyasmBHKUcG5T9hjBknq9Wrf16Eni4aJkDHFMCSHvanuyagyyniyYxvs6Sb6vGTNrzVR9CGuksf",
  "key38": "4tdaaAZPbXTJipn5suzAA7KEoYSo5tVQycrLCCoWy2DB6zrpRwi45fA8s4dDnM2pGKvJZV7QkWhQAxwYk2CCMjDS",
  "key39": "56jM6DTsxvJgPu44tSWLqi4CSRJw4LZr26vNhmnDPBSpoCozwGGVAcDm5k5qeE7qoBxaxEmJWAQ2AQsTNDGsHuEX",
  "key40": "2dsGrRJFLfbbkm33WprmWf58YejQpx2LRdwGVYmnTwYR3mRfccA1fr6eG5yVS2GwGEJPycKQK45njACuJksAcaGA",
  "key41": "5eu8eUFnTXcsaZw9McRMBH2fuLjKBPK1sXouVqDk9tMvGwJXiiaWuLX2E6D7zpnTZUuoxcCoYgDMeUsasqMzahFq",
  "key42": "2rrffjE6eoU93QbeTFrZ2m53G77upKJuZr9tQe6WeyDKjfrzCUHXstoTXmMdJtCU4ronUQ7idD447EynXXrtGuLd",
  "key43": "BCw87iKhYVuZjkAAF5svdBugzBzrhjqAjGhhmTi78jjGmnQD44nsNUYLPjEYatdxPH8qGxxFhdTGdVs5Si1AeVQ",
  "key44": "4HCrtypTJ1nj2nv4phr2eqU7BhgsqVHWnnVYV46kQFTNjr1n8H6TyhJQYwutTiTBJggBVZanBdRJB9MLVTDdJgZc"
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
