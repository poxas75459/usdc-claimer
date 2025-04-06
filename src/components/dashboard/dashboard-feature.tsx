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
    "2kCECsPttNpNHZonUeE6VXRDUjqyw1pfPwWMNXFxpsAzAMNta23oSsMgToEx8s6EAJQWj5tmJj9eDmDGafqmAzRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1HSdNUopq79YvAkPyxsCsAnKeGLLv2mLxABnhr3noGYAjZDsyH5JF4wnStqovRxcKbNpb7JJDrPsMXG1JCSzM7",
  "key1": "3We2YFn8SFjnyUJgZGdW4WMokq1ybnaNCKTDqcrqV5HuhcKcuopnV4iTgKAxZe69GXzSiEUUbjQ7Z7wDB4WFmnax",
  "key2": "4n6QFmCpXgSzwCvxGEdQqGSVdKowUVoBZEA7w4A68YUNRknKsPyxSm51tnt9A9P1sWNDHWmiRkYKn8CBR8WgWLbK",
  "key3": "mzDCkRNcsX3qTwXb4s1p8JRM3vKo5cvKG3UsjKpkP1SahNQtQV4YvUFzk7qCykjzTLFpUbupNEHnrVVkMaKAX6S",
  "key4": "Sqc6evjaCE4kzTS9HKJfiZxZ1ijENZ93vxu9s8xzSicVs2tzwwjdtamhPXJEEA5SnM4495o5VqU2aYKREVHayjJ",
  "key5": "3advmQMXfsVJT4PqnNaAbP2nJeVtSx4KAyrHxURLqKdGz8dCqHdQi7Bh2jn8oRMHhw3nU4xt6XTuTnGEDA4Kt4bM",
  "key6": "5SSiCc78KqZz7iXMNBde8sUPCuip8iFgSic8mVbEWc5S5bxTAwmE5jtRMjKUPCvZvZpVi3BmtqVcgTT4b2kUtbCu",
  "key7": "2vj6tdT5Knoh4gMwYH2yoSn8FSizor7Z7GFLnN5q4fn3tme7ZDGhW4FBfASfwZTwyJDxYpchEYvonHWEjVrn3Sgt",
  "key8": "3Uso15MCEyTqZ649DaxUPW1y7t5g3tC3gACtDE6X3QjC5rQfZe5jgpYqtpwCzPvcRFechBWAiNbXFJzDTCLbJuGT",
  "key9": "32V6C7szRMoAyqQHgmgdf6kNdPPQR2sRFttkjAznVEP1kT5SMMxxV57DKyRCiKGJciRx3JAwcJZW9raHXnRsHaA9",
  "key10": "3kxJYFMDSB3YV6z7zVuq6MyfN6jUZHswfkUBtShHDwLBmZd8GVGHTUgvLhFLpJyz35jpvoKekyAyC9DmD412wbWo",
  "key11": "5C6XWSqxRwcSeTsnGfdNjff6GcenqEC3sBmmybsUx1DXzVpcNbCFRiJ8Ye2fPFeHyWjejtRdHiDzKtK7RvuZErrC",
  "key12": "3M7Hdh9EWD6WHjZsMyJVAegaS9x2aV7gFWpFHYD87YKaFVwtyvneecP6N1AH3hTc7wAfdSnFNhTmsofq97Q7guqW",
  "key13": "2952yVNxVZapj1v3KETakPjX5HbrQeSu6MgtPkvupTvbwNkW7uJBRXzRzNphqT3wctY6khsHifXfhKTkzKMT9Rw3",
  "key14": "5SZ9bwdmnE4rmkYn2xaXQ168DuBNNA9qZ9gDwy8bpjG9wY3rQvMh41FpEa3deHGmPpGhUGgnNQc2jf9XVn4kxPSe",
  "key15": "44xqZadrZjnNDYYFdvpDBBL4SofvfRDQTvHX5HPBkhjw6aBscjTxh7vzw77akACsS3cuovUTFChiL4xjiStPXR61",
  "key16": "4AP2gHKsFkQU3noH2dtmQLHE1BpE7ZdNCuaC7RjwqQSTh6xo2cPLsvrEhEMpvvUXm4jYKy1jVayKQqqKyeoAGPCJ",
  "key17": "5PoaRfo7zMpYkXqXVyAfDakXsYEV7rd6rqNJFp9DA4QQQGxYfbqgdDJrvM9Xjy1qeizpidvbfYDbVZHPxBzw14ie",
  "key18": "2Tm1hZUiFPHxbe14RjykSfFzGoqWss32Fpmi563kzE2zCykewSnZt5pyui3gEtKncdXQ1z5pnKM3BDcYzKyz6eiL",
  "key19": "2DMPFygwyXRV4q5fZpAP4f196uhQsSif8qg4fVWCzSMNSPWPiP9nkB8f2FFZtjQfNeLm55cxPJ4BKxhNYPtsAW5a",
  "key20": "5MPsVS7YT6jQyVZTtz5HF9oJJv4u8ahDwbcGUDiWSAZPFhA6nFfskq9Gxj7KdaojXrRmtGdHuk3gmYGGVYefXr6L",
  "key21": "2ADrb3KGLuMNbmUQ9CUeLX6i4VaNoC5PWEyynFiVfi7X6NhjK9vu48sQzcYw4ihk7iFpkc1PYVvPyuah3SmKe6Hg",
  "key22": "JpL9whDtSGqPyou1pvRSDJtWM4xqS4ABs4PrxYhW2NsSG6Nx38WGCduKT87K2DNXta9jtQj5uNbjBnn3sgWXWVC",
  "key23": "5pt9Mpic6FSkEaLDEECWNP9CmM31L4XQHSPKC6nyaEyNX7DJrkXbyWaBREdD7hukPyxGtbVihyt5aKVR8LTuXrj5",
  "key24": "2QRL91vWyzHwNuorgmXHJdDeqWaPwakwPuejjh5rJy5yYaEBs6VeF9FbaoxL91s1dnCB2FHPjmUrJ3v9ywTaKysT",
  "key25": "5tbECZFKuTJXmyqzrz7kYk8848xauvyvmvB5i7fL1GLjBMj3CaHUUfBsmuUc2af3XmkkXwb1uvpS41Pao5o9zR2p",
  "key26": "5wcMaoaitFE4eUra9ScEaxbfZc2Cxxfd6DdGJh59pkjbd65bBvAMqSPukKm9PW4ejwhmSJ3i2FmgtFwUveAZkh6k",
  "key27": "4FD4upj1k8wQQoHZ19PxtyHjLkTGwWzHQY4CWvaXvTKPrq9C9Vxc4VzPoTevH5rHSjGT2NYgLy8VRCYRbxLvZW1X",
  "key28": "3J8TcX2acB9N8mpqW9fywEbhe1abkJVgAec96R7Paw1UdGgMGbxfzd1kjsUrTiXaFXB9rdfgSYjE9gnitC1MbqLm",
  "key29": "5aXiFDpTxctj6CpJqQQt619WCnY9De7c2JBpyRqPvkSsjTYqeqBKZu3XyBe2JKzvESMs8Qg3Dj6iu2NYu4FKxyyg",
  "key30": "28cse9KQg2hCeYP3sMEeanQhgAm3APUSXnPybG2DFspYbuHhhmLG9ZghY5kPVe8D2XXfGjof4vcvu67GHZuGecic",
  "key31": "4GMaXJEiPZ7643c2WcvDPtwCCKgU6QH3JQtdPnC5e1HvPbsqKmvCXxWhDDSdMcRW9WoPpVjxDUHLEx2TxUiJkTya",
  "key32": "4eiQNeYf4HqgZvxJwsAXREiZJvjmsjMVSMPVK33H1CnJc1yfnc35KWL9wnJ6rNAMj5huvk1aZEhwMwHdp5bWnBmr",
  "key33": "632eo1gaMeSyoZBDsDcpZtfL2sdBRcLVwNxhqYJW7xnSzTy4XtFyvmimHcssrB6DPMoCceAX42Feh67yhQj4uR8L",
  "key34": "nC5yNm3eYMiSS5wSWuVPgkXoRSkZDUKKMyKmUYbDNNeQjSvNMbMLck6Hv1emTLLrDqspTfpzefxDGBhFXqSS84H",
  "key35": "5bH8hGs9ea11FSx71zMrQKbk4KcSc2AAVodFazzKSNZ6d71yCPu4AtJW2dLFUAs1ijvfoj2tHL4Gv7jpCGZuE2n6",
  "key36": "CXJr4fTo5bzBLcApYZA935aUSoQHLhQoFCV3jixku8nYWs7cYmqFwi452go6BnkByGw8vP2JxVwzyj4Sv7S8FKH"
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
