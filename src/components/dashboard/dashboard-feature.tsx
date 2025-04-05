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
    "5KggDqTrzG5nuQoqMENsc9SEFhXbQ9VMzep2dktDwpBRGhApWeCKKFJs4MYScacxNu1AgJYcyBrvPJnQXaC8rHF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcegusWGces9FVyNcZL8f5dN8Zp4JaCxDNNgVBhabZ9PSjjmNruBiB2NA7WgaRxDS6ZGRFhtEvWs4pCKA1Atm4K",
  "key1": "2NSW3X6VcZUJv2GDFfjnw4L4hVis4uEiEbSDt5QdWehnfXB3G6QKP1wWM4YfYbZhEVA75RWgekDBHC1YFQW4PoBg",
  "key2": "Px4J7sWDLEiELq7Hv6myJN76jSeHqLnQ17H5mf4jfSZztQkYGLDWgz5DumTQoeFLDSj8vWLMFoA2mfCNGj7XfUH",
  "key3": "UUW5YiKHkCpQbxqTxSsCRiovtyjp15ngXzavHmeqpFiPKVhB7GA2Xk1jD8hTV2PQdK7YrEaxcPKdWXnD7NsL3VR",
  "key4": "3rjUP7PLyZX7AbwjEBNXfqTdAEKcHM49EYcJ5L1Yi6GitpjkRXs1YYvMexFEd8bAdGsBMGALxddD6F77DZELcbHs",
  "key5": "4QzmUFfXa4z7McPh11xivYYRgccKkqH8d2NcEbHeuvNrUERMKZxZfhz1JdL5Bvx6c6HXqBJjFbyc9g4vmnx2u3aV",
  "key6": "2Qyc26eRsBgPyPpCFJ4fVzM4VnNXa6hWrdzZXTpPuzYWKL5JvN1xC5S5rbckR33UBjj5fMK6WTCoc3kxacvH6rKa",
  "key7": "34oY3kgp8bZjzm6P9juaFMBtSoWiqfN4Y34t1apDVD7fuXzhZjNkGW85sp73VCRThYnq8wNG23h8hozekgPCrvNa",
  "key8": "PFKk5sni8jGgYTjBMJdrjPFMdywVnTVrUpbdAapwGfBK54dtsoje2FFc9kLUNAEFrWgh5YcDZWyz9uy58HknMMR",
  "key9": "4YnRST5DZYuPJdb8GsSqHxigR1MeahxzQEPRtckUpN7XFH7j4JekXPnjx8FV6BQdbK6JvVvYVHaaSoaVpVhqf3wC",
  "key10": "5DwPvHyekDHpWHfacrsoKS5TP2RkW1Vz8562dzCUsHTH7x8iqdQKottLeuiLbvBxXTBFd57WnM7f7w3QGeBejZtd",
  "key11": "26PPjn5UJmdf8ETVmYq8QzWP9TsJoDtq14aVphNEUBDCHB4cdXfuxB6e4bAdZJGx7uQF9UfBUkLkS181JysbsutE",
  "key12": "5qYD1ZMnRkiESr1b3Zpch5ky7AnA9DGQKuuTtvEiKjMtU7buR6MkhFfSrbBovN44w7tLWZNmgZDcNYa9cwrWbHts",
  "key13": "2CGDrRWDAKVjcggkKqQjWePasiLaEMqWEeDxyznCPnDh6n9KwC7t9WAExsHBvxwLsBLytXuHrTArZxFWB41iCPF4",
  "key14": "2WRQEoUFupD6wPRsfgibzx4A9Ed3q4EEaPdSdXguFtRZRov5YNSrURRy9CLD6jeKt4tgoRu8EbG8F3vW4SaayubU",
  "key15": "6299dFHym2ef5qUG1jTA4fEUfLykm9WKmgg8N94ZpmDNLZrutoKZHnmHwLs1EpfxHXszFWgTLZwNicnj2oNj5xiZ",
  "key16": "3X9LPCd8UsnKBPYd9EPFW9ThqDz59LwuUcqjGGKCJavsfofu7Zppo7TKBwmDx3v6ng2YX8XQJVUd4ukHMmnrLHdF",
  "key17": "4BUhJUqY5MAWWMM1ReuVqSQEJG56qMDn61eECXyRVHjYVcZNvAwHqUd4gF2MReRZoNgKe1QrjsEcnE3q3JXPrhax",
  "key18": "23GM3vLZdT5mVAfLh5ALCoYFburHdTK6GJouNbAS8fJbrrbM8M6fcWGLHyzUQzaiXQ8QLEKWhuzvphdybBZCSgjB",
  "key19": "2exmkfoM2kNHxB1dLdEBmoKtPccj4BJNrUsjPYRgqAV1UcyRohGZB2hg2dqMqEkzzryr25o91sovG2g83gedvjgH",
  "key20": "2Rpxonb9f8y4LxTaVxhLXAhDeyFtU2CxgEkxbWCduCwTgr5FfvytTWCHHxodEoNoiwhhoxxUdZtknXCSYjgV3Gut",
  "key21": "2Yws3H5RfBVcdypHbSMcXpmFktmLupZNDJx1nsn2NLaVZj2frpjvhDsM4sWWJkyerbhZZSNjq4kHXdkKQEUtNvca",
  "key22": "4bz42Uru6i16Fbk64UFjEbSwiP9H6YpZpNdqD7rJiJsoffecL7dPPXDbmk7sRLNvK3eNPyZRwZHgKCVNumYb4DZy",
  "key23": "4J5i32SLpfJ96D76b1uUm1pCwDVSt2vpX8GbTKujqdcGLSF36QJzmcQ2wvh9gHjyANg1QrvemKbGW1b81AVZbN2Z",
  "key24": "44MYCdaXBP1jngD2vVZjHZUk51TQDPsd4Efr1aNJNf69KTBEMkPygfGxdmXXPGG66f3YX5FBaHjx9pgSLD8pRuTX",
  "key25": "4tJ7ccwPp2Td2B6BkoMMn1RqSNskCWKmy8An8Mjhu4B6TPPzX6146q1mcnZJnoWtW5t2vZLt8cVXcbijjiU6T99T",
  "key26": "5qzeCPTZz6ChKiND7N5QXY5iatRf2vwJpPJpKNrVqqFLBLarW2KJZPV6oBknnbDroeWhSr6q1v6taiyv7DY7k6u",
  "key27": "4QxVwyPZuGs1HkRDfTdt9jWj6An558A79s4oPJYLCHqsouVQikQaAS9y449LNHpWb3Pwg6FeGrRNYjXxKzSC9Fbd",
  "key28": "34UMjoti4yepgrJhGPwDoaBsxCSHuyFhuMeS2m1rLN4hTZgqVq1CSdTmdBzKf6TPRBEj8RsxCH795ZmmM2kvg5cW",
  "key29": "62bVsmBmj9M94XQ9jqwBQ2NeXKDEEcdYbw8LzF7qGW2Sm1AeT4U3JYkRKttHUWT1Vea7Xv6RWMYoJyubsLpmNBT3",
  "key30": "4dViuapfZGgtqazK6ZeM1kPmfydULC4LDvBBrnq2pFJDEeF1z6W1pSxEVqGonHMsCQ6L6Q8EMnTa7nmZ3Mse7dMW",
  "key31": "3uJrKakBrxc2ibDR5pBTzC5kcCZtkFyaHHiAMAtpNkPJ5jHVdUUwAhJiQHNWRDkKQgr7Du7eMaZ833BNS9f6MqbW",
  "key32": "4R32Dk1hdUJdGu2dZs1FNZYaJreSFSj82Tqh1Yz14VzwZW862Mz3WTdYrS2N6EbeMaCNEKHy4SL2UrPsRH2mkop7",
  "key33": "4uwhcmZwqfqL3N4YfS2kfKYn6aTrNziALntx7xsL7euohHbWZTBtkD3pLs6V8JeZYnjyfCLVaSWGUAhTXQRvTs1S",
  "key34": "5oCpiYLZ568ZyzBBdJnojNxbtPcLNno6WQ1D1i6AYnKBdAentNwtnhwnRYfiN9cAKtVitSF7R2ya5DSR9k3fk1xy",
  "key35": "eqK4Mc7v8Jc7ewspta3pbykY2P1CtFgYVLeYxJcD31G7Ur7RfrWNBuw2CPLXvQphLBCpus8aMqBAmQFRg3TQh2n",
  "key36": "4spR976JkJfnuKHYX9qr6TvtoDChYKPickwX9FC2yuHUGyV8AsAv8MUCaPa2D6zMtLGVtESU5dGQKE92xXuUmBRU",
  "key37": "23nMfSvZrdQHtemGHo4Y5X8Wvo2LHv3GwFg774ky7q2kBy3bHqQEaCfMNWLRsmLqZxu9isnzwhwk5mVk4CohD6VJ",
  "key38": "3PuySt3zNoUNAyyKyYzdNYHbL4p1hanqDwt8s3YZHvygRjjwVWRh1AAvE1Ra5PpHXNyf2ohmaRZF65geANPjwG3v",
  "key39": "2NBjbr8FvzEr31iNkgBku8X5SSFdwkeSFYfhuyTGj1xfm3RChcdwQHHjWmN55oyu8aAKUcjSnfjpwm64vx7qjbZb",
  "key40": "2AkaYo75bVG4bGU6zuL2hS4R3hGQx6fY6o3UogS2XqzSbgMCBE7Mnqg5v4Dqx6MMFKqxmmunMyxK4YvbQVjctKCJ",
  "key41": "62vugzKuuep4Z9XewaLN9mAdXDaAYSg2cQ1kByogSxJcQQhNG5Ho2yS38pSiwDptfdBdpUwW3Qj9TBqVVAf3du4s",
  "key42": "5HtnkBdHCAQz9NkhGZJa5vb37GtQXazm9dr7q6ZCjTW8mahfmVjUwwaAyys7e7QtJwa199aFAddVsaMS5fzNueG6",
  "key43": "4JGK2gycnSAX2Kd6ySkFtdbqddxy9UBW8BFHME8YpeTrWihnP8VA9u1iRh3VRSqMiJ9tPwr1MJ8aVgfHGH1scfUv",
  "key44": "2WVr74rYQY1GQxMieXo1BjcymmdgqYCGqrPyCQsdLqYKMVBaQTbZHSvkRXUYJaZCnwGMY7UiTqJXHgaEmfJJ4rix",
  "key45": "qfwWUKKB31t83SJzjWRqKsJaccbvngknTpytWH8ZviyPf9fghTJh6BJMzx7ozkNen5Worq56shDmctzMM9GMz2R",
  "key46": "4nMArLsmnZ7szadDsbwHvx5xzEzs1vrHnPaoTasL1geyohBGNqpyLmBa97w4Fehsphz3K6humS7GXUAXmsDVtsiu",
  "key47": "2s5MoWMV3dKcDcVCqiGHDM9MKf2QXBcfrTH2ipwh5MmfuFKRdVcHs7fBuyFaQjSarZmWQ27Gj1Sm5qouZkqqJieh",
  "key48": "TDC9E1Q5jk7Ghf7KNLKE4yF3CykQ2Htq884zgScVrC6p1tz5rbN2i6dKGHuXSZnBhn5LGeytaXETUxyXjNgN3q1"
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
