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
    "wPepftP3PYSZumQf9qsW4cwFgcVrnef6GyX4NrurtTSiAaBFMCssJjsypvaNjeSV2hgDegzk6Y7Xysf3vJ4i8LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h35ZzozN5XtVJhxuSPW9u8FxJN7Ka8RBs94hjhYrZguR89queurUEwzE6PRfA1H46tSmQsMcNGxTg9bVHaN1B2G",
  "key1": "3LXD33eZfJmsLJotv7gHbbCgpM5W4ofVciXbE69r5aRoAFDuPtE54yxANC4Gia43eDdGPfmy9yhUrzqdwaYBedKL",
  "key2": "3wz6qFJe8QYiVNL6twK5WLNaqYr7hkp7M1djsZn5PDaxRi6vPuCnpYe8hRxKgPHmQSZ5WVGGvDcj8Yug6PvMWm4T",
  "key3": "4UnLUqXQaxifbXyBCrBoysKkZzumhzLXV9j6ju82ksBHTLeWj3B9FdTLpNFyKjZNGCPMAMdnn7XfAjnGvyqkPkVj",
  "key4": "28Mfvy2uma6uCnQtSEeUNPVpmX32a53wijwojg44Uz8XTz5Aw5vnKUV2D81ePtBMCCwJGkmAFj7ftnfEjxX7hJwE",
  "key5": "5n6eniScsqKtQZdpTwFiE8JfWruY7QxBbKiM1F5zWiigFjYE9sMDwsp3VUgAQY1B2WYQW5s2QW1SQ7Cg64rPbwN",
  "key6": "5s1VXopJkdXJoEu2Hf4EGzvU1CFqjaVuB9WthijLH4JTT2EL1xVK59iWYTv5KL4q65LQoeWcgCkWtbN4Pe4Ao33V",
  "key7": "oAgmPspZ4vMhBZNGb3pCnTexWJG53Vfpv1AbHZ8ETtqPuiQson1G4L7zbcLM9ijys7L7h8S7Z2DkXqdJEQhq3t2",
  "key8": "2pDfrRtPPzKP5tdQgp3kodk2JmAF2r4Gu9kJE7G6wTf6YaRx2STgYUqFjWPurwUJK6EErreaCNnd7CbBup12X3VE",
  "key9": "3orcXiLGbp5fwRBDGxbZ7UV6Nk4idwNfacSsRMrysKm3f5bKUsSCEdvySuBL5j3EDuJTG7b6g3ukXTzJ6yB9CXpj",
  "key10": "4hEAjsJvmoNiQ8vCSUC2kTSebZCr1DhML2UDbH1MS7CdMttVtKgNLsLGEEP1DUSfx4x6aZPG1XAoyq1HkasHfXU1",
  "key11": "QShXV2JJJ5zk8t3mMEiMwa5NPDSHFS9FZb3TRVkwatDsLksjB3XN8LvPtb4fgqF8EuSwt674YDUVwZtBGxguT9w",
  "key12": "stJAYQnT3kSw44TUs6s7oo8epSdt47EEw5ER4ieKRQgfCdkLiZWj2UdXxRyk7kV7ZRVVRmucMkUYQDkU2EznAc5",
  "key13": "vPnZTMToW91R8M7G1s8ak5FdZxw2JvgqXFbusYQGY8fTszGRyoPenFMD8stYLyrWF6ytDX3knTQjZBxA8FJom4p",
  "key14": "4fWJYaCCNquCKZXtUgLfFwXzFCdjshJadNJBdUDyGuerNZvsFDNcmf7U4mBRjS6RAiDGXr9M6iBFDZAtjkTmduPL",
  "key15": "2tLuyeeVYcfA2HSfF1K9h5dFhJYo4unEoi59wHxAvLmeFK8UvJ4tuDoVPe2bj3QA1zAn8nhDQPSptrakrZZa24hb",
  "key16": "Jk1gdYxZ6T9U7QMGFpL3FFH7eDZefNMXyBecEvpWEYSWL3WxDfQ9mYcDYQnrsvWLSXZgZmjPm8XBaAyjZcRdFLw",
  "key17": "4YJcguzivWcbgbhKmiTpbQvPnJcB5AMBbNba9s7qrR9xDS8A9Hv192RcmpvdmPys3NJsLk7FEKNAVWQLzTJbjLYG",
  "key18": "4QjBjdFxcXUWYgmffUDQyV9otjMNV7r9uWr3D2R4umNLxMr7UWiZR6ML9HPkcQfiyCSyhx6LdTA16MKSxRbh1Ruv",
  "key19": "324ZHtoogTv2BNtWkEPB5oJXjymp3hW2voYZM4d2snbhJvoQRvANMKGBj5X3APUMFfuFmMLdj6ap6kVX6DBpcbZ7",
  "key20": "246fvTA7bRUci3buo4yJNxqwLfgdePQ9vBA9AcATzhuZ147j8eF84qUujqeSAYXh8euZzDrQKFy6iETdCom6UiRx",
  "key21": "5iokZMsXicyVLdnZuVRxgiBQQTYYg8PHoCLQmA9vCrhZvwrSvyuKtiTSC4toNFGW5uA5rFuoY2fNJMvQczcQ6ykv",
  "key22": "3t4EVrBPtpsqTFpEaySNvZ9YmksoWwHJFcz9cAGBNufwCbAG3vxX2tsg6B1zdPgXh52eT1pZVv63YQiEJVGjsanf",
  "key23": "2AxBfm2RrjSm4mbV4pyX1AUhrUViE6NkyJ1PZ3gSfj16Hbq5vagXY6h9LZn7SbNjYg3nPdZuTFBzCmqcRDoLr9bx",
  "key24": "5yPyBxPzkQAvYxJrqkrkTo1q5dNUWZUcvwATJV6WDrD1KbwG1RyDu6pKe1XuYsUtdtLY8CWhXhQJR1PV8mqfAFNc",
  "key25": "CHMe1WMjDZWP9js8Nd6LkYE9dF8scSdxhyuhvYDijCWR1m2H3ZGrbSa4pJoQF64NAt191T2946StUbcKfM8Sh7F",
  "key26": "4QK2hbWgP2s8uzXTH3t34aab58ooHcXPz23apNJUybiBZZTuiTqU8qJS7WXoqg6a147j2hPVCoBzfe1m3MH9Vhq1",
  "key27": "5MPxkJRj5tCfVGzsL2skoqn3x6yNao6yygGY9q7wZveqbreWPoM6qMjMn8yJPasVzfefLxHFpwLtinUJLt8y4LkF",
  "key28": "36T2CY4BfPj87mzCwf2sFjMg2AeBT6WaqyBx4XWXP5bXcAV2sJH1M67DqhjQyUBC9sgW89jy5ShqMUnWGG48JHEa",
  "key29": "22nCGdXzPGBono1qWDmFU1AyY2naFZM1bZ4n7pZiNfKtTnYcgAk8wohre1LSofp4eNuCDGpNKYtbq7JrcWqrRLVy",
  "key30": "49ytFaPTxpnDB9qxKF59VvZdcHpWEjiuXkXobRLaB9o9EdDPosWZWdo5Z4ZYoEA5dFfcJ68KVffvB1whRCkufUug",
  "key31": "3xznmHuidwyWj5sZuDgE1u95S7NK7C6yPHYJmGsTF2T9VY3kLwrWTn8S9WRVq1H5CgrjJJYpDbqR37dwLeb8QQ1N",
  "key32": "2uk3Xw3xDJQfkXn3GNwU2KZ2rRRKZLvVG9MzywpMTtEar4PBLTiBNNW4Z1YcNhnhn3FJAdZmNJdaDRwmwwHXHAPA",
  "key33": "4XPWmQA4b1f6wzeuAu9y79ouUayFDAn614Rn3puV9R5mE6RKL8fhJQxtBz4vtwwgB62M5eFedrGeSBjUnAXTtDB",
  "key34": "2UHZUE3wxUbrxrzV8xLtH6nL1RhUpgkFwiZCauFqeNZWa5WCkAVWkgDo1jssq7odppEPen9TP411861yf4cgjRwS",
  "key35": "55YRUiF3t3Zn5qPPFGRKNdNaqeM3zoxmq28tTjQ9hwF1ri1gWRb6eMzCkJjkHyDWQvY8avujA3SEDULfD9esYJyx",
  "key36": "3sB4gYcbaRUV6cfUJMgswUhBoDQTMxuhLRUxrWM2xAUcRT7mKAa9BdC2Q1tMLDaPjN3o7eStCCKh4LewZna9VLuZ",
  "key37": "4cGbYJokqsB8Bb3N7CK3wQ5tL9zoE2cpEQZ1pbeCQ47XU2pgWSJpj85qJ2KHUhfipGh273bTxmE784NSwnx5jFZX",
  "key38": "5i7sbxxZQQwdQG1BaGXATaqYQ4bYUVeXcybCWuCFEM9uP23Dr7TvpsbbpiiMux4wfughnTEa7i8MynH8ALbtHL5q",
  "key39": "35tBTxB3pBH2j7bbfVnKdTdwNcNiLc4vMuj17FbKD1ya6ZHgN3ZM6BaDAuZC3BSCGKB8xpUANVkqLzy3w2y1xcmt",
  "key40": "4qgZdiFiiC5F14ardq13P1u5CUc5vMqps9UW4pAjt5cz1LwUWRJgMS4c1fcBkJMNMkRQ8AxUyVYEc3qWw7mQppnE",
  "key41": "5pzARVR9iBbX1h2zY3hPjA3W6DTVTiPHtZX6XnvDbymPTCqdrdtbuADeqCu7M5jG8mR8cPYdr6s9YoYZZo2mZaKN",
  "key42": "5ePezqPYsTStGus4PUCqpfL7M2GjRXkmP61UVv4f1HdK3GkcaWx3jdB349vEGTqLCisx6DyzDnn1mtmyTt5r8Ec6",
  "key43": "4LHfV92FtyavGYasCF16LjFp2VQThKgHngSrnw7PgDQXyWwXUhhQ4jhyed7ZJEAy3SfzLoztauwrPqcLL7okM8bh",
  "key44": "65zdRHtG2fd3kqmeQZQDJ9ahhJaqgWszHV13FJV2Xkc9Fkh5nFGJzLTqj11P2E8qcQeR1PXrBaUKhPJGDdzp2B5C",
  "key45": "EDRYnHX9g44cZWf6ZQjBnsVwBGipDP9nef19JkaQJUKqWxjrG7PcH5EvHHALPdEi5vNnaDtfdo2nQ882GGs2MuS",
  "key46": "P2zBiwgVy58Rt3vs45V94hDrtcdNeqQBENUAwCppQbK6J6zHGQyb6czK1zEwsVTWoB3m8MYCUk8XuWigbwJVDyE",
  "key47": "AkZoW92bgkT1srzCfqYwyk1aJrhedhopocKzx6wHdXCqxN1LmTahi1rEn76hFaxdnVRsRWLMJwhQzzdKSdTcL5T",
  "key48": "3uCZDQX4oPMwXP6v98B6zQTHb3yfEnuQntnraACV57RpAYJV8Ed3QmiaMewoehsAMbtjHmKPQVuVmwx34wSsY9p3"
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
