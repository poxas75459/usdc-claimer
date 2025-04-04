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
    "4jB2Xx7nx9UtUb3jNPhNkUxxoWvAq5Gq3KT4FHtaU7m7tereC63V93wHgeiJJr1rcGafzHcffhEp7T6uDk8CNQH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSJtwihwz56qD2g323pD7keGnacLgGag2S6CvC2hc6DHY3gBYHiFSNdsE7ATHxD2QhYhfyHVrJysPhL9NDHrMud",
  "key1": "4gz4rp8svH6M4nPThoGyn1im9RXdBftf2BonBboHmHKe6BnWCLX5Ymvwfyd54aP9pDXuP4TyrLP6yBc3Sbj3gM4o",
  "key2": "hB4dLUMiqQfd48HLoPZU14rJoPZst8E8hX2D5yh55y7WhuvXTJ3oDp4zK4eM6HbxtkcaLwYtY5p7yxoiKJpPSsF",
  "key3": "2sCLRQmSbd78dwnLDy6fkmvNF39nYuaAEGEvoG16sJ4SQJgQkpv24NF4cmFJYUsgFwTzFadFdeYkDemsLqThjUBk",
  "key4": "3Hwo4EPvR14gSz4wSuMN6a6HRbvnEALKKoMhUPLXrVpkGkcRJHWXAxw3LrSmaUbVE7QUy26NNr5CXkixm3xnQYrF",
  "key5": "39UrhjjP3noK8UJb1HKLpidKqFqvoavGqy9PKMBqW1kG1xxSuaHiueDRbaQABruf4PKQAd8z2gwKbeLNZiHbvoAc",
  "key6": "5UWz1vZKoo9gPqMUwwVptcCNJ9Fn4GSDHyQ4gmrFuuSP51MwzL9ufBy9ZYMT7RrBf3fuAa9houUpePekMExFNPTL",
  "key7": "5L9y8NTvWQFcRvH9ut7BDYXT3h5xHnNRv7hNfPJMbvX7hrBdVn2FZnchbjN7DQ9HGBuVGpNw4i1pVaS3XTof1H5v",
  "key8": "eq84C6gRTJXSuc2CRxs5xSEXEKWESc43eNkooNyCyqiFLjgVZWPK4962kDtvjqTqM6wsM9gDkLbRU6zXtcTTS8w",
  "key9": "4d4hRaksDYXwWf8yZQ3TRvEp6PzpUuamG193XhR1UE2XqRPeetnAH2zmBq2V2JGpUN3bRTkLPBThLJzaZy5D6nJh",
  "key10": "4DWYam5GoxDQW7LUVXBN55WLMc8SoFrJM8NBa8duLJ9JGSEBUvnmjWDNKwsQfALP4stRr7HVje2HFx8VP5GTfGKY",
  "key11": "4Gs1czfm1FbX9fFnwpGFWKRnCdU9AATSML5KWzcGpY8T9EifibEu9c4eKSWzSbMqDGtMyXDyfqtQdHj2YkKxWY2X",
  "key12": "3ZedkUXbCS9Fh6fU133D6KskCtuUvfJUyqDTat7C35uF3miqGkN7xQNyLWbgLwTk1ALUfUDPjdJUayk5vHu7SQhK",
  "key13": "5skCZuusJMu7RWvVQ2bknseeU1daR2UBbc33oJXt3aD4UQ2iJy3rCCX9noiWLnCUGmPL8UXhVW3qzctPpwewBeiX",
  "key14": "4sBgvNfhgGuXzmCgji3g79pQVAELtPVv71Y2HeYyt43NCt6EBVUQZJFGG2ATCPwMqrDEMgMpnddwzwwgBHNbNfVc",
  "key15": "4ecHfBtWpfibyVVqAEU3he2d9g4cFrAgLn5m8FQXpZFnq8wqnq51ryFaBbp9ni4QLtoBQPdMHoQWysxXDLmE4y5e",
  "key16": "5KK3FybXy3JvcT64bAR82Pun45KNLaLYGPC5Jop6f1UbCdaUTK6dxDBcmQtQkeHw3fai2E51q12rPjqb2xbVSTKu",
  "key17": "5sEDPZnWTymiUWfL6wa8CFfcYhaij1A76xpW8xDJSQCWmMZj2q5KrEbd2oEUnWGZL1PchQDbgE8aCHfLzuXhTCgf",
  "key18": "3UCAPNs4Rmt5PrqyPHkgpX89iMUsPQUzkjR7g4EifrVs1CmP2jYZeAQhNm9ejSEV2YyQLQHtR3v8rN8ZkaxfzuEG",
  "key19": "3hJXaQH5qSvMTMg1upJRCyHUysNmxPo5MZLBEEz4ydmHiDfS2yk7AUyALarS2vpXzAetzCUwme3tQY6hNt3LyBKv",
  "key20": "2mh53Uqbwso49MrtudYCRNQYyp79HHkLMK12V3EDYkV29Ka5kCA6rgW95Ppdf833jv1Urgjrc5NNjXLgPhdYRLmP",
  "key21": "FjKYakSj3Xtn2SB6wqEDsy5LY3qD3QAbSmzbkyvgrK79mwQ8EBnWJZjyeEf7AYkXaPTiQnEoKqeZZfK5xCUov77",
  "key22": "4fWDmmtBF2PPwr2VwEKQecgPVdvXkJ2ipGfCXeMpZvy6VcfjbZ8Hvt9Q2cS63QpqzoGuxc3ruvfLUUSJMcnpUVDU",
  "key23": "5pcBFyJe6oNyfqs7q5QgvsToV8Nyp9jWhBRTEtuAwnquH1k8Vr6dVCpMqnum6nL5erFzbLV4y4UK6NFbT7hx9ei4",
  "key24": "3j3FJSRC2XhHca9sRDgNJx7wiDtJY4rDkST2NMiWdLChSJ6Yh8bXgkB8Lgf3NnaqBQte9bwiQEcDc5Gj6RX549vg",
  "key25": "47KistWPYhPYkfKjNVEa66gg88DvLoEfS2fX9ypFKCojTmjJBZZqSLcXBFnz16YZA38dDiLyEKjMDFm4Z2YoJLhC",
  "key26": "2TG4LQ7s3gBfMWSxMHLWawcezEByVuHyUkYabjqFyUtxTYgrBG86AtCGDoRNfMDxg6niiMu5thHXePfWVVucFxeC",
  "key27": "59m5cAn98ck368NpdYkrhuk7o4QMVbeghppRpqkuJqCPf8G9d3sgNEShJ5fUj2tvdyTDggv4WiyNN8BVdwAsrRCd",
  "key28": "2JxhGP57oyR5Mk8xW8dETnckZJwD5HshmUAU7QznEFDGJdAeoRtetWRm4EKgvpYMcavtLYtyqDqXZXdEcu51iU2f",
  "key29": "SDE9ewFqQY8pgFoNKdUTiU2rhSjDyEsgdeXsZ5KMK9koRDb4mjxBYwNCe2p9isCuL2Rj3sagnJF5MFEfsS4H7Rd",
  "key30": "yVm43YppXPmvkawh45VaEE7ECjoqFuXhN2d8YjMPCkBAWjJomp74CC9gFvSq6wQkvUtLnrUTGUmuMMXVcsPE6oe",
  "key31": "4F5mA2DYS7Jr8JwgjSQq8aEEmURHWvj6ygRmS7AogdTA8ATE9PN1mvnSNmZesJU4fA4rEyZX9rDffV1KPLNh1Sdx",
  "key32": "2bBQweArkE67qozEuheJruxdYrHf7iE5pE2NUVvdZJio8neDUu8bHgLjcMdsRmbJFkK7nXooTPsKqPn31EZpRVef",
  "key33": "5SVThZMmuWTu4KZgXbUBZK23PgeiWM2yxVqgeFnAbaKFSqckW4Np1SfYTz1QZfe3vUGkaoe6tErxmqZZtrv4Chgp",
  "key34": "WEuaz6KH2UGv33H6oyq14vRhALfSjgzTwNaFHmiS5LB2rzKa6gtd28Am6uDx2LESb6A6bNMmccKZ8TqZNjxx54t",
  "key35": "2bCqLC3nLQx2NsZ18VQMtGGeKwn1Kf5gKzNc1AZxr8kzxwUBNXk4ywJBwFxtWn2kh51U9o73hT4jXnc2srEqZZrV",
  "key36": "2ZeQQqgkryY2jQoh1odqqrUfYamsjkybeYhJ76p8v3oSN5h6iAJqrsgEUVBaC4aurSM9Ra1RZ6m4P4jNSmirYLFY",
  "key37": "BpTZe3QKfMNjrpcAKK4VmnSfeGTpEmAmhcP4aBJAEvSWFGSFw7e8eFGy2Vau4na73v5Z9nyBtXJ9ZvAPcrqJ7qs",
  "key38": "4ZR5J5rkavv2AMRea1VWLjdUYPbM35AXh8FNsH2aBNoQ4Evc5Jjx7XaYdGkDD2sipHUmSgzck7KWyv9Mq3FABf3y",
  "key39": "4D5Eb9vZWai2iA11gtnMzHfEvQB2zVzWjj9RmMdJF8VdqG32RWos4rzvW5jFucDPmxwh9nGZ28jn7TNNkgfTcrg7",
  "key40": "4jiC5M7ePsfj7nvCtVEsGE5bi51GqDEXT5sgdABZpKjbGv1aYLCajU9VHqihgEoGjKVD6km7n4JZFgWJYyekbwiB",
  "key41": "3WuCmdvvrsP4aFkqPzyMXZz9sRjPLzdBwURdz3oMB5Jq1rn4mMHohvALbRcvk67tPub178zRxzyJVucQKtugDeVc",
  "key42": "5KAHebmLGZHYy7pSCsM9W8fUyiAL6L7vnkr9rK22K4VEBk2PbcKGnipcFgU6GLE2TpNqfqUtJGfd7Abdabtvkr3g",
  "key43": "4aZy2mi6sh4iHsGdJWJPAtKwLLdw9fcxNePxua9Mfyzby9XFUJSXbbdxBYUP5iowhkZ65oHdtdPqv2PmZqnNuRjn"
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
