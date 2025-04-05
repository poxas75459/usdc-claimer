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
    "TpAnt4VxFqyuHJJ2jaFZPPSZwAAhtQgjb6eBNoSK2EV3fwC1tb8DKmmBtGVr8achFPBUWi3AHPh4DELGjbkY6pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqzAFsjLFFm2Hkyx2iCFLpRgdDqLgS4F4RN7CT74aeSKQ8XBbuMvLbuf9woMRXPWEL8gFeVw7j7kaiQA7e9DL7y",
  "key1": "5hS4KpYMrKPCeadMowVCzURTMrGKDu8yx9bKXHdm2qppKGXYbydZpSnF9TNjgZpfJUFN9SFMjXfjvd7aS6dUvMjg",
  "key2": "14G1fRFt6R86naYY219roG9FCWwsWJyMqMN8QJauA7YT1PGMiSENxLp1Ni7P7oiTHowGpcBBcq3gxTwDCMgqTFh",
  "key3": "2Y3NL9GVdR1WV5Jj5S5kQJ3g7peBR56VXWAy8FQ8SDyGkBY9d7T7PUmTe2xMD76etsUdruTF5oEK8pVEX8DMxgmD",
  "key4": "4jdNSH6ieq6o1Rt9x9PEBxmnvGehKZMcZrzbGL9TLREdg2tPyzLFN2jJg6XG9ShwW5sF5uksFzZ3KrDFmvTsstdB",
  "key5": "3H9riCS321pb4TSgYMwvz2KtvZ76whbi8tFzNGVhbjuSJaZGK5nbPZ2tur9qVbwJryxbWVhtfnUNAtjZq2XETEMo",
  "key6": "2ucVQAKDoVVGkjKg2vEc63uc8Yw6PmBtTrJ5zCnGf2imGApjRWcF6kDnjnfdmWU8PK5MsY2L76LjajvzjNvXQW9R",
  "key7": "25o9APsfgMnkGgEDFnwZ8vSxkc96JjvinhFaBJk77SPUX8tq6qSMwyCrwXjjwLWfGr2Zm14L6eKX44Y2yWN8yy7g",
  "key8": "gx6vjL7RTeSSGA9J282SVW8KLeV7CUbA4nteBgLdZVmsTSi16TENdp3uZHCnyPL9VtftBDwHYhzAvrq6HfvcHGa",
  "key9": "5L1m4oRtRFgHVaQEQ5M6apq77Xfua9vPQqZjBFDVJokYVNcz8E9TXDMEb8m43j2VGXsQKMXeAafFrfQpYFG8E4vH",
  "key10": "2u9gj9ESkfxPKdFYaenTK9ySieujpHGtcjo4BbFkYRxXsa69vdn3vfAgJTYtj7EbxHwCKcoPuHNtCSG839dLaYbe",
  "key11": "21G1pYEAeimJFmNGxjnP6iyrojLmMbSL6tQyJF4sCpPjEx6bnrnevbmp1ZByburcwiW2z6HgtjKPNboqfgrcuq2D",
  "key12": "4HyYp2YW6wAPfanSYUhpTve4DwAnZtJLvSfoWyPQ3uttdRWLB6JdeM6RNarWVBP5Ycr7HygzQgwtUuUUSjDzbJgD",
  "key13": "4rEJjJaT6KwikXdjfQbpjsNF5bWkHUyJa9bTap2hwLK4B9UF4bGNcRrv4c76thbvbMg1miRnobbEfvpedJ2Pvrxu",
  "key14": "1sU58ZaTgGVmCUEC2CX7Qa56dtWbB5iV5CdQkTtG64TaECgzfSAMzEdBapnWcSagVmQwJjxZobWVZh7ssx9AbYc",
  "key15": "5nDmv9EmQWQi8octzSAbueeGCtqUsgiyTezedrQ3ss7gzEZyJ7KFsfjhYQd13USLrK3WvXQe515jrqtaQitvrEdm",
  "key16": "5m2S2Pf2z6BazvUw6anVv1QfQA1nd4u8U2NDAHM22jc5zG7JHYKVph2JYrp5y2dSL6vAeQEAL4o2fuASCWfAMvqN",
  "key17": "5kjMzr2gbpd38jhMSEzYCo6wHdi5YH6qqiKc3acH96B72YtQLpEFKoLkKaWP8m83zvDnEWUhirBiYgRWLkQ7s9nx",
  "key18": "44g8uXEoLdQea2PtD5g6EwVVuLhsRS6f13ukF1aHQEhkihkxvZFZRcRSK6fpV5ZaTgg1esKNqvkHfFZepFkESMR2",
  "key19": "3Ev8JL32CUNLyduwDS3j5uafUta8ncdy3i6uzNYqG2q9g7Zp81nStUFxaFJ4D8UWrFtTbSpdfxCYEXdZAhX76sHs",
  "key20": "24sVctLHP8YzrYcQfwdy3K1q8qVXxD2492eVTWrsk4UozGgG3QxE9FgEh3g7497nx4C3F6fNoEp1M2cJw2yqr5kW",
  "key21": "48jYprPowPH8FV1hWvALLupaaErnebq6z4W252PnQ7SF97TK4JxhWHmgA52j7oLSTSHMFufA8Qz8TGiH66HBzb5m",
  "key22": "3d8DTFxMvfYexAbH9nXVddvezsb3SYxfeLgsFdwP7uZTDdJt69dUkawaTkX7mx3kzBiLmBeCxr3TyFSwLb2dAX8i",
  "key23": "2MKgCSKMXToatBauFNxZT6qUiqjvjfdVCXgK8yP6Z5FXh5nHaYi3ipkCTeWHf5CRTNVZ68AD27AWzLs2AqjpKkn8",
  "key24": "221TVKH9FwFYtcQ5ESDV7WzSi6xNzxmSEebT8EfCtNhxdLAopia1GxSLPHWB5bgGwz6Ht8674cuYyAdQeEgRDt6D",
  "key25": "3KNE93V37JjhwM2ucWYEJSYjhyXxSu2XFYNpoxzEtPj4x2mgLZxU9Gggfxw2Eig6fT6H6je4EpJfhNfQcQBozmd3",
  "key26": "5S5HkzovcxbNtHkmMpkK4Pq7cpJ8gViTmZvCc1MRpkaZHYyBRfrBha57siZ79TkfhufBzzp9mps8FkFQAiNWh24G",
  "key27": "4oqNW9VLemojovh3Zt6xHWwjcd4R99Vswck2YATnVW52F4rEkQoG9wdwxnJn9pBGmYNpsNLjWd994qu9JmFfog2h",
  "key28": "5L4oTjmyxfJnJk6YXRiXNu9RMdzWKMPmWMCMhdGQxcWZqYxEBDgjcwo1o6RsNQFnTzPR1HDdvzWiGVdVH76s9Tk1",
  "key29": "57mF53gaaNqAazqreBQc8mPubvULuqLahLS2impuP7xEJH923tT55jwaCoQrNs8Vf7rfWLP5NYLgS124hCdwta5u",
  "key30": "5o3nWvNnynxYDHPS6nmc2adFV1qfvPbQqFHqSim9r8CcZqXCnvRK8SvBBxZJM1LxmLFkxh65L3ifuFFhX2mr2L3p",
  "key31": "J1JGjaApPQF7azhSvrXshqfbheDAucN99CCnKJFAckCs8nd4d4bM9VtMuLEnTXt8bHGeJ6QdYTWZMQxXnDKZwoX",
  "key32": "3JqDGbDFeZUQW1XoTnJhKqVnfYAQD7t7y5sWq1A9qzsB1op6DuiaobMUhxWrTGWmRBWuZZNWiV6tkmkaH4hvBGSg",
  "key33": "2Y5VWsFrkcFV2o6d1QJm8PENdSvihPHQv7r9AHAAhuD5GBDtYwe952XJCJ31eJCo4Dor4Pr6kz7Ed4FDBSBxoGkZ",
  "key34": "4LBkPDaf48ssFbD9nnbuKjEVsgHznz8kMoMmzcNB2nTapcN3RAbpD8VoijFhhHx4QZ2DqmEMzRYqSUH5WNzoRrmY",
  "key35": "3VpTdEECCyh8VUC24njKwxHeEb2aFNAoWVXjhhEAT9gbWNxR9gcmu7UHcuAGbRy9jkakqQWXdou48rjqGspWBK2X",
  "key36": "47ZwPQ8iNLdW5MZzMKGHsriFSTBzx5Zob6Y9BXkh28BdEEFdiyPEeeKus1RmgpivtFkjrkPVVQTy6tW33diuMNrc",
  "key37": "3wgrRYdSN89AFXjz78P8m5AApNZBiacmUkRj87jNmM4SwYZ1dx6bAZQZhsGv9jTCqtDtasTvxsfVdro6pg8imm1E",
  "key38": "5jDsKESSvH7wUFDECwp1KVme6kQosQYG536LL6bvH2eV2KfTW2xZFmY3BhYg6UUDmRRHqWoCfoAX1LqhJfLzzXNG",
  "key39": "24KY7iYaCXZWMZRGqaVA9EbGhvdGGdCyEMyqcCpWPVxG29cqYsUKDoG2MDaUAsagQuay9YJZeHXkVzr1fyxZvvtf",
  "key40": "5H7cRURcaE1KS6rrCXFCCUL8CDmJZ4jp68GQ4QA94jR6F4Z2MM3ShVBcsPiaTkkYYpP9DJ84UQ4ZDcTD4V64BN3P",
  "key41": "2rTaQoyw5hcTCzYEAXqEgxoXF8eR49LMzv91zBf5dcAeC75UGjgDJafTv4vKR4Wo9E8Te3BpptSehzU8FYAiPynR",
  "key42": "mFbkMA3kq2txbuKfVWUe4tVy3M2ca7rEL1mRvEQ5bK3SXygaxLKU9CH6AvPUrdMJ32MJXDoiWXHHVoieza5M3SZ",
  "key43": "4sSUk4A6AUNbtcrejvPDqMsiKabycVDfNfRJbJaGUsBJCNwewn8VQf3oqxcrz2F9ba3QyVHLyabjdR9vDTNGH7nw",
  "key44": "5EfhuUVsLwihnhGWA9zdcnMMGhCkMy93Jw16tmht9o3yqzFbRw4YqZFmLXoxeK6vpLke5fLvrhnmh7BAFwZ36V2b",
  "key45": "227Rvgp8BCZKw9wGa3spu1MGgyWZs6dSsJzTiEpKeYmuWname9t7vNn3vpdL84U7QYMVZzrkEuaHYHbkAnwEedQ3",
  "key46": "3hMUZz7UxQQEYsB6PQ8LYJToA6pD4AUvqdwph2Y98YYXU9dyJgzpzWhATeXxz99pcHNgjf54qNQ9FNkAPuK9MnGH"
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
