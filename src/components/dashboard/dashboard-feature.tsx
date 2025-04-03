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
    "5FZbqNWQTayXy7dAny7HAGUcfhwXGMoh4x9GYyJ1Zqz44MoUQTQZgAjgu4UHwKhk9TTkyyHX8ambNgP5uf65XRdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcSiZTym2tpyCZM6Ad8mh1LvXTHCpFnWNJvEqaCVULmbDZSvyFK7YLJfnH8mkaxBZbMpwKsaPWWkFpGGkQDPhsT",
  "key1": "26VUXHQj3xJgtHgMuNJW4NdknhERLdRTEH4fpU6QPsWb3oUwrgAjb8c3WoYoLoTDyBeB7cf5jtFcavpm9U3CQd1M",
  "key2": "5Bwd3s4sYDojxwoDbJYegB1cKtEyypRFSMMPaVLBtYYwmLNC1uK7dsdTYqfqjc7YkvY9y8VJCB1DK3ybJnkW3KxS",
  "key3": "bHhJNaexRf3JrqL58tc8Go2QnUtjRjRnfVgu76PfZLbGYd1NufWyJ6n28sJmWRA6gkK1TD1gpz6x98pEFuNT1Wu",
  "key4": "5CM5iwZXpyfBWg38CRGvZoGbMH6MAPTqjJ6e6vPBfbJJew8NKu2ePNtog26Q8ptSGMLQazTkwUPmWcdh9t6t85Mq",
  "key5": "3AyUnfhZxTtBBwhQytBweAP4C1biFAfFjWQb8Payffpm3vkMnVJ9AQaXyVw3J5VfjViPKSJHecRXETbCaac9eKGz",
  "key6": "5ipHrqXh6xkphJjf2qdaVxfUsejvAUtvmmreHCP9brXCZsc9owyTcwkydKNgyZge2t87oxZXttUBJhMrSTfD1csy",
  "key7": "4u2iCevVva1fp6kS7Ga3rD42aQToXfxJcMR5eoeSJiZ1kSdxUSfhgutvjaF44oMrHRH8CanH6egrC33gToeuJve3",
  "key8": "3jJGyhxYZMjwUMCdAoE6ATFNPVJh9wcLjxJiyZKNFMFEYjZdgSrvJ1QyQ94dwLhpvFjMm4NJbpyXQkGHmMVHbm7h",
  "key9": "2m13AbbFyrKHcPuZRts7ji4Uyq2m1cjtmRUzcd1MoCcUBCRfbbikfLvkvpX9ED7zGLeZmGx8S2H8GstEMN71EKkm",
  "key10": "4rwwjFNnnzHmMENdHRmwsR3UyNoGRF6PQPDxZEiVVYKnBGieGNWzh7RBfiGsyCyk3QRfj9bQ2kSRLEVRxbNhVsho",
  "key11": "5yDoJGVDTetjGtUgneDZycRShciWPJjtETLbfe4JYEzy5Ac4LHivqMmVmfBQbfuP1NWEw3yK3eeWiKDcPSM8bqQP",
  "key12": "4X6XZ3PqqEN3jaipWwjMhkmKiP2FTnui8294fGEvqeHkDQsN8jiH5hdtsSaxzQV1jMpDaMAjo5pW4AnaCck1C86w",
  "key13": "4xbmwMaVdpSojKQXEWMMwSANqhJHpzuAhk65Xzd9sGqhv89b3buY3FKhEzvJigdrWELKQuwY4BwtRhnja9LpCRYD",
  "key14": "K3yBRy4bCMa1bsnVWAWuWEUk8W6wmiBLrVGZJyLVK5pay8TXmY4EEGWLabCPCbqbwRWjKS7YMuia68LfVCfqWSp",
  "key15": "129YdqSnCqHaenhq26gwwqhjc6YCajMtRnpxaayYWhdb4tWVNKsNgh96eyfekJYGR2FonyPcPuUTJcW1732g5dm3",
  "key16": "28i9Uzg7rYfkBTqVZQ3wtM49FYBHPDXHQPVFpibJGS6SdkfAqZnLBAJqdUBK2J4SdJvtaYD1qJDSRbxc6iKDEqi8",
  "key17": "4qEg3aS6V9G7qvJG42bfcnKuEyaUyYiJ26ouzZ8jpbbtq6GYy8ek9BYDXcQJuAvJqSwcrMUqJkBNMTUyFFhYiejW",
  "key18": "21sPbaBHfxnWUYZ7Wyp4Vtmh2sCbhxKDap362EGza53eChbDC9Q3NwtcshXNrWf7eBL5dbqTJfayVTgLtcpw32vU",
  "key19": "526XFXwcJ7KcoPNy4pc3cf5Ad89YomPb7Ps4M53rfsu7jXkkZYw2aZj8xQAAFSkrabJfygZznT8gxaML2XVkqGEW",
  "key20": "5rLgUA3RxuDUsMPfKfh47rB2tGrZgPMUhKArnv5sJMhrc9TNThUui6AMntXNUJHgVZ7XGBaDQpr66EMXPft9vJwj",
  "key21": "3LaGuYfV2KckPvXFc2vrtyUNzuAPhQWyAzj7v695iACG7FgX5SHDfVHc554juKBzUzn5kkf6bJ9zzWnqEtXPhVXP",
  "key22": "3vwQiXAKTspzkmhNHWaHSLzYSTqsMkWstPnhwuLrtVdeDdoeVUGSVZcvpQhaWUn988udhCU8tUj12zHQVQxFyDwt",
  "key23": "661T7skPSjTAaM23WXuapZud5ZUUGTdr93iPpB2oUFxoHLyFBapUukV9vvAkTzB3wCsiAQaLM9yi1GckgLhaJ47T",
  "key24": "5PWpR2jFGhMJYnZYerzoBsHCGPCNhzUiz3T1gZYAurqxY7Ai8Pvqaniy9Q95CCbGrhvwTXfijPomV5TeSscqR4QX",
  "key25": "5jbUMqZRERBWjfHadvxSySMDaJn3EHvNdK3x11qdCfhWH4SBa9c1FFutDwv712NDtPhk17TxDCmg6H1aqrw3JVX9",
  "key26": "4FAmp7Loyhjqi8Xy8h37UYbzGHKTcgnUpBhGHTa6mo9QHAeQv7kAxx7EER38wX6fkHbqYEi5snPccEZ7eyPTLwoY",
  "key27": "3UUmFoFDHHufQaLZrMXPmYrTqE1wkFCrP6eL4ifjgJMeUuzxxdF2PC84xicAN7o9sUT8oLAJ7A1AazC6Y29oiRHT",
  "key28": "57mu5WCtXVhBGi1DAL35eb6H4YR7BwTNj9pyEn4xuaSfKcGBvXZiACnGAfyHKApAxEzYkM1rH8v1TAC6snqazxGh",
  "key29": "3mevzckHYZ4zhK3LsAtEcLGpYg8cnodeRPKRXeZuapvCMgdHYh3ng91bQfSeUjq4CKG75R1WhXyvv8dQXSfUPPFj",
  "key30": "21Bp1UCtP5xdZW9gdWEkyC3jasq5oxt3SA9rXwP1vyGhxWzhTGjYun5P7GAgQ1iz3CypPp9MoGvQKMdDToBMRW2B",
  "key31": "3Ni2uXw7Sy3V4g3NY1j7SqU5AbFUx6xS9TG6rCipRsYMuaVfcZMqQVM5zVbtF8zyFGnAYuCDrL6honDgfBveCSPz",
  "key32": "2X9LQ47NWziyZuzBNSAo3XDfXjHC9dNUEtFgrfbXag8k72H5TFhvwvooJWFkxT5UmeP91sifqxnYUiZZdbAFssGx",
  "key33": "NbhMJ7otFoZjH6Ekf4NtpfP17s6Jcy1YfNTZZJRrs2aGReEsbFuCrVPxAh2NoupTVGnNQ7PuvhP1v7jrF31Ufnt",
  "key34": "GHXJHWBYg52mw4SkmYpNyFJVSEvXwAXr41V3vpnYJrAhHZJt7BGerqAr6UjUMotbcfKEmqhqVNdqarWRrXbse1Q",
  "key35": "54Z2xZsvK9aGE6qGFd2waPT7FiFbsdrnKDtacJanDQ6j83g2HYdZ1w3qQBLVWEUBJwpPPi8RZfcSHav2ohR6XLW6",
  "key36": "5znjaDspqWRmU56neH7BwoH4E8gFmWCJG4NVFvJXHohXb9RaALZJoBcLUF5MqGtkR2dy7frg24QVoSwG3rvxaobf",
  "key37": "62APBRThuXEYHYC9PMEvhk1AWAbx1gwgQjmBvTgX6cedjnXWaudV3pxHaKywczjfMEF9mAoQvw8tfxwSKZMTCUJj",
  "key38": "3YQWPiKf1SR9yBBLsFTkcyrAEa8BNT6yZv5tvsNEGYPU2bscoCaBEeHQ2sdrNjArFJFEeafc6mmr1fxVvds9rEUV",
  "key39": "59ofSihyyn9tcQBkAkjHXSDnKV5z2mtzY13336FarrTmvyRhJJ5VsKfWydGWgfmWZVpaXJRMp6PbymN7vqgidFwp",
  "key40": "3snCWZVyYGNy5WGukjk2HKzzJxh6Cv998fEZVuVVDbWiehDLCHC8LaKrJ4pUKPEeviNrPypBwjKfkaWwU5PKVSFB",
  "key41": "3a1c58FzoAedXmNGhHboz6mwpxPyBS2Cj6Vb8S7MEqQkebcNB9GaK4MHLeM9cxCzs12Sp46dKwS6vWTeHZPTNvwC"
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
