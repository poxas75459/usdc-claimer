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
    "2ptuG43wbWMKfXGsS2KrX2AjuZR4PpU4mSjL1wJFy5nzFV5LpewWB4fCUGmtn6WiXV4rk7zDi96iWcwKurmQfagn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sq31Rnfz4qzQWMoqZGXg7JQXCCL1XWNPaJxcuTmY1U8AV7EYyLAfMQsn3wYKv2ujbm7AALzX6vpgEhRJCUCwdk6",
  "key1": "3xyM4T9ZUngDWDLXtZqkene3RG7jHRuuL3kFp7Ecv4Df4Gb6SKb4Tka9fU1MjKAA7KY1EwEE1Ff5c6o2r5mww2zL",
  "key2": "5tkJZnzdRb5eExY1NwhiTh7FrLLnzXHJP4DezYe9XYysXLTWtoKc5v4Ai5on7odt2gHyyjA2uEMiAidptkwQwbfi",
  "key3": "61riBSeWwv2sL8eLvPzvCWZm3BFhuxBi2h1uvhHLScgSkfDBwteDmwY88aDoJ1nxLwJi6RUsaiE1mXZVvoog82G6",
  "key4": "2dcrN2xT1zxsiyMSuttawVCWhEGqSM6ttNyioETZHatsDcPFwWtM44B28cQ9ndhgzfT9i86g5m9Tmfk8342dVCz8",
  "key5": "3xrVh7vT1MQyGhVt4Zkrooa9fzrtG9Y7bYXdMUbSN2SH42iDAbJhzvmpHroTf2LUeBQvoGa3g9YhuHpARbEqE7Sj",
  "key6": "4jiZHHXmppqMaVvipPDTW7v6FLvTARda7mP3n9ZrLBYSD5UiSvcBMRw4rNbdHS4zLd4gPhEfemrLXRZZk3kiyxoJ",
  "key7": "5hAkgeLNogxiWkExDj4bhDD7wK8rF4Y9P2c5GVd6UBThHEjZShVnt92UbMC5cfWvbxGZwa25cWPqAKm5naxiQVmU",
  "key8": "2Bbkf7XPC8rrEi5R2PT4dKqcb1SZnis78N9YG92YinKV6JxW9XA8YSFdaiYThaCYX2hC516FS3Z75PeFAmKcBGHe",
  "key9": "2j4VRvtf1ydqCU9CnjCma4wEaU5Dp6CKXGoFeKscMByb6pJS4sRfn7d4RhtajQ8zkzs9SzVbSRrPQaEW8vYyUuUB",
  "key10": "2pJS5NZbnwbWcZzPGTo5jNtVHjM2w1N83ymbjo9KxJf3cnxPn55hipWGcbKuRYu74FBqURGVsF4yWzbkXMqCVcUX",
  "key11": "5KEK3WYDzixNEGk8zTfqK2kcuZWx2Y9fu8N2KLV8GqFL18aNPUPonrnqv6x5x5LWrMPYz9vUybzQCWEtTjor1hwu",
  "key12": "6TK5hqetkrn91AU26bVaktukz51czxbTktA4QtPAygVz6EFcTG54nrEGXZ5EDdD96hF3MLbLhYRN8hXnPwaR71g",
  "key13": "2YqKvF3CWZgTCrdTcxmkqsvjAVeuYzVdmKLjwiWKryqHghGXQ8RH3iaCCQryYPvJ4Dzr1Ha8N4K9Ryy4dZ81xBSr",
  "key14": "4ZNkAVi5gVWKt8mgfPAMuBGATaauvkmqvS9Uqyb7d1r3sVATZN5WPnyC4Vy1wcf36xEn5Y84Qxm5nQB6mBBMW9im",
  "key15": "5rapL7SbdSudQjCCsERdyvYWsB2d2HZTiP2ZhfxYWnoVnGphy73JS1Az4Srfd1UrSccbRitz8ZFiCQrXmJWnrBgZ",
  "key16": "4LUNPiek8nBj3far5EonaETxQsByoDfFpaSwxukrWDeFtJkromzYbtFRnbm2stQ3aHwMwYERN3jDWjZ9Ar2hpdtP",
  "key17": "3eC59AZMZkYC1r9VQS46wDrgvcMyPa9kWqDW6xcwGK5mBbDaDqABtG6r5gHKhiJWTuEWHfAHKxXeP9jhP1d8xP4N",
  "key18": "236zziTrrNjb1Wf1sixhhiiAdtUnJQnbWyEAHL6F79dCwsBjq19pQ9qdUiAjhKkLN7Vph38ooYBvQSZKzEQwrAC8",
  "key19": "44HWNF4SbNKkKuDLGN3NgURP69cAmgMTqRUWVtowGQRFscEJ1VBnaT3bqT1MYJfabxA8C7zVH3aNfC5dA6xiXXeX",
  "key20": "gdC6S5aTsZic1FkTNy6CMDFNf44Ynkrff9z88cbXE29LxwppR6xJT6s165gaTF3EUjB8rsbUn6mMDk9wW7YBtnS",
  "key21": "4G3mVvWyxpRDFSuKXrw4kfzqQj6NHF9iusxUpjJZKCK1LCfcde78waQawAAvpqvz5VXTge58boLbXEnujjAaKhoz",
  "key22": "2gimxJvE7ZaTZY7dccqX4bYjCWnh71WKen9oTFZCFL26tPUUJdTb11ViLD9QXVUj4oBrvEWkpcBtoFs74bkVEU1F",
  "key23": "5PGyxsKtUZc5TGcYE4vLrTNtuG34Tu3cEhpVJofHDtLUt9jkKxn7xjYDRoE2vYjC2VT92tSd6ciNZojCr2SqrfDE",
  "key24": "5Jz3oUb2fASa5q8grBxJvJdsX8YvVpJq15dr2H6zonESEVyQEGegZFZ36k88pqKtiiZRAaAWsk7xQZdegujKNPjm",
  "key25": "2c6AvvgGi9szikCpFGLub3K2KPBfipmKT8k4QF9A5W9zq4hY6QEw8QnRCR2a2MhmZcRuBE8cSMJqStkqEE86vSgV",
  "key26": "3q2CA6qrBTWzpbKrLYcyaRYbT6U6KfBm6rHRHgqJoHHUWiS4erRG63x36MVmxX1NWaQCMo4Ho4uyFtz5itA5V5ro",
  "key27": "dxRHQ8CLhpwdtbG4FCVpgn8qNsKkbDPxmWV62a9fdGAey4WK9cb3E3GWftPmL5ievCiHFLq72ERaY5jWMjSfLG3",
  "key28": "44gPuy2ZryMNX4iKYUMJGUALFWd2qgsPUA7mGR6HA67TvGsuXvzmhSFsnbcUVUWA5yj65Tnmz9ZP5KbzohRx8eiT",
  "key29": "5eQRSa57YYof73Mpkimqbp6JL3NwAU57nTL9x25Cr2YabBx2qgmHqN2Sk1PN3sRBeHvNrJYBiGM2wWHooochxyN7",
  "key30": "51FDQerwMKwLDD6U5wSiBQnAAjm9dUpaRRjeivZrhehJK5vNgam4JD8DYNWY99hBwzdMZYYoeYniR4Zm27QYeKZg",
  "key31": "3dHr7JXvrTHULfdtkeT9Wk8mhfNDx5xuNYQNtSeDD1NRyLZQ5vk5iwZcuwtZLE4mn8EKW52Mndx1HM2Dq3ZKD8pz",
  "key32": "3mh7FCEjB62mG4bn1ZzC2T7FW8ozUqyEJGLsMscHCEtysighZC9BKcPhaGVmB9M1c9JGeraBGPrdeBBE8hk2hPMz",
  "key33": "4KUwxvBgcT24HFfmrnCf9AZuQF9tQbzSZWXzk4LpruPT2UhP6HaKekqQc7kJUkTxnjPWnZVk1cXWMRH5jqcPMnak",
  "key34": "4WPqDuU4f5xw9otonvENw3WtTRVPpbrsbXoU6ykXvH7adSDhRCMTTSNDcPfxy2h9MtKfeUojwx1fRHiJ178o5mW1",
  "key35": "4UiQUTnSywugYTgfKjiWVME2KLhQb4ejju6GPXY6sedTJnwkSnUHtFWTzBT1UG4VjMfzh16Wncw5J9wmLna48GmV",
  "key36": "2aKFkmTNFa9CGsmtdhGvdkJuCLfYyx5aEqPYQSv2t6XcfF2hfa5x3C67gkGB7JunL5XmxEFn8F9cRN1WC2CH5zDj",
  "key37": "PuPfq2UTPexwLzJrns5mi62i4xccmL1i6JifJiJ9LheGsjjGBuvUawZoJYizaeutHPJ6hrswSKXNKRECoZx73nd",
  "key38": "2e4CuGV25C133LDgTjAw3Qn14Qj6So6GZcQ4AHsGHTC4szd1vjmshcTzHbncJE5ju14B2CMJasEYsUAYHPp1VUKA",
  "key39": "2Ji2q4iaSUC8KcmpnodPtWm8Xr6yYcA5LDCxpxv3wmEYGg8C7yE9tXBPJAmUQ6LRBZoKk1pgPzZPf6z7BEGR2w7M",
  "key40": "2juYrcdsDTfdVHDAxpZMK1ucQsriV8j2USKKK9Q4CnFacSFXFqj4tHruDufekhg6AoEWAnUzfMnu4BkjL4jAywge",
  "key41": "iWwm25xajMya3UJVEwEQFY9vn3wUA4vV5eHR71EaM9kXJqQ7ijF8fwqjSmZQ22iREmjKQLWn9cKJnmMSF82ea9X",
  "key42": "36JWgbVcnFDAqLNAw4HiVV1iwC7Uqc2zXxnZhVU7xDXXMVRQGP5K6CZNG5BrTdCXxPXYB8UvGcgMpi7aweQsXnGa",
  "key43": "2PUEPVpVBcdSY5uhNAZTZLV65B7KJghCAKHkHVrFE3ynJjUbLuMxq14CoQK8gxDr7wNjmv44yX6WAJHNupW5k66A",
  "key44": "4QWF7Dc7pR1oVG4cMsYPYD3XzYjrB2tiFcyCPgyR74s78dG4yXTf4Dp8CrpWMJquMgJst6r8iugtWUMSkMrjrZEA",
  "key45": "4MEeDbnBayWKKGDiHb7gApRsx8ntDp8Vaiovuobw8ksPxprXetuo53iSFjpDoRowd6nwbq24GiMKTYiivEp9ymw",
  "key46": "5mVVgDADy8dfBL3krRiTciPrsx4WhyF6AztoBizbtAypsLFYyP6WKZTHpUNjsDAaAtVmwpuLha5Hx3RR7V1n7eHi"
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
