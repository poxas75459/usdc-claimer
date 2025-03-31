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
    "4ZSrHyL3zam1rMKanrLjPtmuhh2Dm4476ij53G1rQyHpzsxqxiGzY1a9GZSofqbENML6TE1Bn1PSj8WxadT1K42N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tegk5DdKJchDumG277E6vSkaPLJdmKpiDYXBWDoAzRg5p3W8fg6xgM7ao9iEzSutbzVyDmqoWDGmFB6grqz8QUn",
  "key1": "2M4TgP8E4nK71U6qj52hXmgTQR5xPutrjsCJcsr9dkKr5BzPKzCCii3DZ1bycrDyTSrqAorAyaFhMuUeMnTMhYYJ",
  "key2": "3NhjVo9y1uiWtSho5zNZmvwxDK7M1CosJ8ekxtvLjEQFqeavGruY6Pdtjgy8H96GGgwtPYgAVTVCi5ZPjdAWpyq6",
  "key3": "HzvU1wM7ENpuSSar9SuT6CxYJ7ZGPFFBRvxXGm8cFMJ8gW4HGfH77KW7qaJw9zSKoqXnKNzbJxh5qG9whtp1uqU",
  "key4": "5RTsAxKERJgfe2mBCNQgvjvKf4KRZ1qdt4XWBewE8vzyLQXFd7hYYkFc9VFqntgW5iADUikPEBwGQJFwF11rRMxu",
  "key5": "y7vLdrwp7Xnci7mwegsXuMhtudMtDX55VtkykG8ZVLMK8b47eBjUMw9UCbXJzWQ14Xp8deBnCX9chNEgHbD4fjC",
  "key6": "3xjfGDJoXkQR4xboEf9MRt7MfsjVJsPh6t3YKWbiz1Fpd5DJFfmLfEbWXMZ6pVrSN1BnTCrhc2T5eS3VNerC34Eq",
  "key7": "5PqFKeNzzWDeoeDoCxZbEqfrX4iLpLo6yxRa8XxPDkAk7LX9A9oEfRkqb6ZzcAYWThMfWLbGWamrd1LbxTxgGisf",
  "key8": "3dKmxMASFfNjQ8XpQ8MZU26NhdX8BnPE8N25DazDeWbFxNcnfF9tBV19UNzPSV6e1pupcySHjrR15NtL1Hoh831P",
  "key9": "5ShLzACNyS2b1xcWD8K4uF7wEaQDJKrNF2DQm4uamY7dSXZidJFJaLpvEbHc8r2973Mk8MYeRkZSy941X5xcpAvN",
  "key10": "2tAbd5Xrp9sfYhyjcuqagjtZY9j4YwnDAp8VzpXpAVqP8uz5zisKpJaCeJuhgBmuDAGy3FBhYgrzt3sn4D7wRPFc",
  "key11": "5EyY27bfhrqMB5inqLAnHJuRpSkXiwaViL6RgYZdrwCU6nVCMG2NfnypxziF4kfAgbJ2PWAmv6iz7QksRQznbhVR",
  "key12": "dkQ95fn9LozrWwsRJJ43Y3Ci3ykQcnRQiAdyBD8k1oQr3AEpF4J2H9ua2gevx6iRENCzm8BPpkVqHas1MfAhSnS",
  "key13": "49tmTLxiKEKByLTzAfTwqHGETuDJFzTU8EdLy6DZk2jijwBL8e6NN9pZxtbkQEBDG1v2f9zM4sPm5fYVYZRAMrc6",
  "key14": "6W1npDECo1hwDgxbJvPgFm7GuVF4ccRqNi3pxQnceJ288x8hZnufW5FtVAvdgWATdSNJ9ZqNTReM3jWox5RCoC7",
  "key15": "5jhFVYdSTDX2VBBzYxVFJgNHKxTzY85pxpfMKXyRHhnDjLspafbkZwjAJBR1mymu5ZZn4mDw6MdqmJoiVfKEHtAw",
  "key16": "y97Q23WUSMpNFo5u1yUzo2gm8E6iRFbHGHF8iEWxAZbsv1GJVCgyp6XrX7yzNJ2GXUhasCuQtbE67chTUuym5CV",
  "key17": "hk3o6pqMPoC6PQgsSRB37k9B5esaDS8U9xZepPoWhknzjXpX1agdemGvvkgkBWMhTjsG2xJGbdNcDJ1KdLgt92o",
  "key18": "F3vhFv4o13sTfQq1knGiDtUFgU6BSVMGnEnE7ZhmTHKrBJk9L2v1feRodnuzSSKG5Lr3gHCQQLCHusQWhGo2DqR",
  "key19": "47mjDU5K5Rz5ABTpoKcAexnJM2XLSQc7xfgQT5WFo2tiSSnYAdkUnWft1x5286Dz1X3jL3JmfAZEaVv72XVxysjL",
  "key20": "5knqLtBJEwmLPmr9AXPYyTcTzcrWTuoRroxnMH7wgtGx7WhDCebUgcgP6KwqNYu6rHxEDFDbuoGuihcXZqELRS6",
  "key21": "4LLrALu2rHm2LqdP1WWJdGEV3iaagzDHKVjQXZARhnyTNEqHbtFa1cL1GJym6zqtCbGfbEiG8LzV79Rp1FgtZK79",
  "key22": "3ixV5MzokiJ1B45EhvAdwEarz5wbdKfPuoBEDHcYcvfEHDYZVxRp5dsaxpvoeoF29Pt4aZPutvEe3NvYJBAzJ2fQ",
  "key23": "5UHFxHLku2Pva1shJojXM36MbiYepekvpWaEwLi8VNhCwPTrWpTQKqEy8XpuWDhEVz7i9DJydWWouRmb5RtQwGSs",
  "key24": "2DtvuviL3vtYXPH6CYYvcQExFkAPFS59wVagjnBy5EJgq4M8SaHKv3EE6D3q5bfWrJeHNFsPkEd2MPpYLdgpqwBN",
  "key25": "5GgDWYfDPnndqxasnVycdiqvrFWnjShBTaHHBSH5HhB5jmWnhXRzeAMudkHduWvJbBd9cbhwkPDApSS5SWwrww2U",
  "key26": "DFxwdam17WYZHotAZ1ymTUv949QUhQg3MoUnK5qAjrFXqUHUUHpdXbbP3ya1SMqkK8Ye79vEDNibZ1ko7baKahS",
  "key27": "5tiG8BcrD6JZtgeo2YKeW4LuqKnRiPGDwRq32UeR3Dx6D2gBV4HwrzZWxAceLmg7Bdj49LDmSkJrvCbuwQcbTTYw",
  "key28": "2pCZ4FGpizi15S5kxAvB1qwrddEhMzQAaMSzZvaTYaMprgGKnrLj3XJ1nC7hNm23QQPHu6nk2BNTqn243Hbi9y9F",
  "key29": "25ncKeaeZWWGqd13eJLtFBfFFWcG7DJd2WnLDM3JYojsQPAZaRSkLkkdMup1x93bpP7XBY1ejTqRNbpkMTiGohQB",
  "key30": "56LMw7RXHwmKwTUZpz1XZbPF6ruuVQVaA1jgeqs8W5N4NKGtZK4e3ww3cgGxqMMNwpddJbVBoFxWfwEP1w5R8qiL",
  "key31": "5qQdUg2pyGRxShsuCWb8Ahooe4RuYC8iCUBuBT9Gr6qKMfTZwPMmUWRgNPzXBRgTRjSk6HPjqhkZykRZh8zAMQs3",
  "key32": "nZ2V7LYY3fa8f4NvXs5WnPAF5FPGhpghiBcHc4JVsCGeGCbd5UxxBt4AMsbgrVL21GJkjrnhBxCx1xJZLGCdJs7",
  "key33": "4nZY3KB7JMdDKQV2D3RBV7rkiB2pCcnZ4t8kePq9aXPGDex2Bb6ZhWnc5pQtmwgVFHMS2BDutybWzh93Hvbyc557",
  "key34": "648NkdQM3MBubaHPdXd7evmU8vD8ajs7SonzbtHeJ2Z87pb3xFD6Q3Gjjap2pY1EMovTtprMQpXKbxMQnrvY7q1Y",
  "key35": "5PyLE9Gb2ddsPGmutPM7JAbMA2aD8ZYSdi3TFFpGuYEvu4Xj2H56AJJXaJo8mNw9M2ezmT1uWFZ2CYJ2E28gg6tB",
  "key36": "4AWXuurYyNbFL21vCwvUnLExAf3kDk5FFqNjRdv6z3fJgAZnsZHZHTU2HLGygQvGX42UEBR6nvSJF9q92dd78vd2",
  "key37": "47rZHULae52twVSJgh99aiPgy55U6WrpMgDZNJxxER4AfQVyQDC6ueySFcPe5v3ceevcsBeZiTbnBXiz7ZCvxeAk",
  "key38": "2dCjcdTaqfUoet4FYsB56n5ZVK1tfx7Xp7gVpQegLcRp6ugJKLVvwtwzVA6MZVKjZ1XYn4ADcenQawNnBhrnGBSi",
  "key39": "3qJxnnZisvbtBYeHAJ74JbdayxopfWVHWjf1hFRhw8M83QweWAXUtyixBYF1FctHqy3brUU98dLzKipcc381EJ5b",
  "key40": "62BsoF9B7MmgJG3odKYWRVjkAJ6dYG9tQtQdccGBKW8k6RF3qLse5yzGv8iAqPCk8B7HfycJitbHijrhzpFvNuTc",
  "key41": "2pQphLNXSsvUhwXjHNqzXLbi8p65ChuEz8NB7oFYtoHihevUPM9uR8kZFRNuDENN72YmXDwgrYUPzBJ99216zEjz",
  "key42": "QFurwijGkJ8qNR3QSioqyfYeTUnRTh4cdFecRMCeigYd6a97Jqt9LC4NQWApDAyQjo5kuvkK5ibewYGR7pHvp5E",
  "key43": "UuSXxqFzjqN5p3DSRd9fm6qF7o4uAGc6jWDucMyQnAe1Ntpr6MWKrF9CPDgUJw22UdfqjpJ2zH1mTBnuVYQAbF8",
  "key44": "5FCC7aWagtKhBFSif93xqsEVbA1ENXERnCwMAJjr8eEjPMVcJc1ZFwdkMakvbZ1Sr648wqoJ7t6NVASLQ8JXiNgk",
  "key45": "3kHyVf4uzxGiWgskACJtmZn6qAkhwqejAxqUL6vj5Z61NXNDB8pX6y3BsCVccuSCSkKMxX1NTof9HHNj5zmrRGMw",
  "key46": "kQMJwVhFsGP2QJW86pRsMP4QJMSuokoMe9CTMUrREn2g3icCut6e5KNdHhS1ou9qjnAc2BJxKWmVUKC7KCPBwGD",
  "key47": "4PrGc5C8PSWniQTzypwis2Lc3DqVminLSp2kJcPfdeW35TsFUotJ7RpdhJgbCFUN9QET3acha6CDZkZRqJTq126d"
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
