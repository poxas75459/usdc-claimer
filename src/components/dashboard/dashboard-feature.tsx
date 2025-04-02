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
    "4ZgdRPcCqPBEgVff8xF8ae2YUzXcRw12ezKEs124cktqrHTF3vFxCPJWzULZnqFkFswHcu69hcBxzG3jhUxzhacq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EA1nF3A2PfD11goyBJJj6WmX3RR1sjXDsM87xtwoc597yDyeNf9xJHm4NFMDJwtvtogaF21TakECXpDQwXET5XE",
  "key1": "4WLeNrdeVVJKuEHzayRJLnrvgMCvahinUDLfejmhPK3W93tAGXiKBbni2u76REoUEDZV3LV426n5q9DPhLrowY5n",
  "key2": "3SnxZuYg1sfxiLLPFmcCEHu6revNDjxP5GsBtdWHufL2agbUiDxxE9hLEWTncdsULEVMHJmVjJKVEnSJoxjJb6oy",
  "key3": "GSCvdLtrcNKjXrkFmYkWH1M9HT2sn9xY4vnPXdCdJsbdgcebw8YnzhTtzmx76VzZEnvKsczemdpBtcRn8HK9tpd",
  "key4": "4NvNgrQ668fgTeMkAL9y6JnvqMzEY9e3zssa71ZAQbycReudRSaj4rScbcHKi78ERtyxUNzqtJhPfPhBDM73kZJR",
  "key5": "3LtZYDAkWxSsHaWfFDzJ7ogxqyWYwqQENkP1dXGLh5XY6UsbYJpXbjJKmrnrsVSHDfEijptvfPEk2pw7rDEsotMp",
  "key6": "5to6TGUBSQcJHNBTY4kKtzTJ5eadWM4gEpj1gw3ScrnagHfqrwmpbgqWKFyHhdECkTeoTGrwaymZoY4rKDTPEQMb",
  "key7": "d2N5KbCrAQfynMfw3KHwbwqQjwoSvUMZ5NnitDzFKrmJvWS6tBkFcKqByJWbJ4gpqvHUi3y6KYMZGBeh3j3myWv",
  "key8": "4Q1UbqheRNgHtGUu8cZUK39xJNwFJGiDKFb2XjYgHKoy1pvu9AifzDQNcEKbMTxWKKWtG32KL15LJqXg74SdpirU",
  "key9": "V47YnUaNifM6GqovsJaPc4E6gVMX3mD7HHP2uoEmyafeUW5LP3niFrG3K9tyc1P9Rcx1fxy1Q8CU9GauLnTESzf",
  "key10": "3bV6VfhCmePPsDB9KnTd16SdLNr1eXMQSPGkcypk4CDNuuvhsEjKjwLpVFBMC6zXQ3LLvBAmrZCKKnUnn9dKih4J",
  "key11": "4hfJkhX3yeEe5tWCnUgJAP8ghfBGevs913qq441o3cQJrDdGG3b4MVNHJgKmwhty4S9k715ZSHzTtUtQQz4EL65G",
  "key12": "3XXfajkQLdQxEboarsHfvuCZJEUCv4Rz6cwSk6BaWfTbNQuYR3dovPUojXqHunbMtKP6324MdUXW9qTJpLaKGFad",
  "key13": "5f9Qp4y1dBG2eXP8g6cjh1B2pyKrhpHUHzATebasGw29Gy9t1JuQQjSspV76MJc2t5aJf4etTps8pDAWfSR3b7me",
  "key14": "5485SBhWJ15YbsT9kQ4J8CA54uPqMtuFoi8GC5EZwykRx6wtDYYKqvfqA4KPAcZDLbVJjZbtyRzbvDr547RECAHN",
  "key15": "5NkdJrf9GxHFCTdid6fbFRRsyYMVVtoG6hgo6T3TGaMmbxr9wgUr9xi8BWUbDc98UbMy7YZmUHz4RCeFqUNJQVQx",
  "key16": "21jWkhKyGgdgJ5h3vu9k6QVLyXSM5ZMoFzji4KriLuuJqw3Vycz8517GQHvM14aqLuPL8gfUrrczr6ASUfhY3mu4",
  "key17": "3jr7uSEpnN23UjZKPgYJYNEkG5PPQtJJQZbezu59LEegSZGYVpaeF12c7ycK3oPFPZZPFvL9ibNbQ6GBiB975xdj",
  "key18": "45erEDb9PY9Uob33ndr1LPfSkaUEi3QwJAa1RQauibuDWzs4fAE8JDhcch4bHrZ2wtNvxtKGE6hhWjw9wdpN9AoX",
  "key19": "JFSVpFfcUGGcu7iEvc41Nz8peVBgs6g9K2vWkMeE8qQBdfrSQKCyttgyZ5iQu1aDKMo9j8g4mkn45chunRSL5pq",
  "key20": "2ZSrFGZMygW2A1BM441aqWKZnN4iDzBYFiXZSLHyA5LEpmWM46KNDMipKtay6q5hwGsEyXp6kXAuXnmamn1mV5Jn",
  "key21": "4nmySxFRy5RASy3DbQUdzEZX8gYqqVXom5H3YabJ4VnMxtty9aAFWuHGz5B5qZcipXZ6bvTYLzz7XsQVhfWXc8YM",
  "key22": "4iAM4iKRbCxywzRBMcvSDV9ZjNymjSWvTaoQGLaEPDgEEUrawC67nGG2Y9qNWBE3dnZmEyEGnwFgr7i4zZoB1JHx",
  "key23": "2z6xjN4atZYdWaKBJwuXgtx8dTEdzqHd8dbX72NN1q2z1USzP7v43auTVKkBJ5c7d7ZN5fdS3hF7LEtfqKHG4PRZ",
  "key24": "2DJUMiRgatQF5eT3S3cqfP99CA7HKFgyit5Qnz8TrWmzWYnUBDnBP2m5cBRPShJ45cq4KtuJ9P5FNKbJy82CUN29",
  "key25": "oLfXTjBMUWcnk4MxrjDimydoaKGdZJwEjfgUGD1kyLioNEMqkipoQZDGRB1FhXGAqbAweeDTeDxD9WAZkkH32vf",
  "key26": "3eeA3BWYVCWbcRcKM7JdkLQKBxfb6kdsW9g3ipHguJC5kwPfGALHuKWAPeBroRaqX9Xp3RfARjEoeCuL8Tg1jB26",
  "key27": "5zvY46XBGyBVF4S3QmKUuoWZ7gYx5SXk9GzK28f3Hig9fu3i8r89je666XRPSnPrh97oyJTtcpRQnpSRLTyb3yAy",
  "key28": "TUgYZrM1bwp1zsGSb1yKiQDsJWJMWppM3XY9B7rgW6w66huGuF5vNJxKiCAc4oiAQQqWmudYLsRyiyw9pxVbeXt",
  "key29": "3WdWBownaoENS3wnwWXtWsa4vLvXLpv4XYscDmSLm9asYXHo8q317vCiJtUH6b41mXy7MsHaaJUrSadALCyLGBe2",
  "key30": "5Tdf53kfsr2qW5v6BwYnfH1oDihn41Z3pVQSobLcCWATBHRYmcmgA6B6DpaaKuyyqzGQ7ACyiHnL76pK5fDXPaLr",
  "key31": "36aD6aoXfVpwUYQuqRu6T3pikttBygFqty4oaa5vCs9ALiVxshThB8dkvEM6RcwjhxFnqrg2Z1qU3HWNJY4ZsH9b",
  "key32": "37XisvnSd1G9bZ2947ethKLwLD1Zo566JWYB4CCYTkTJmvUNahQAhwzN1L421UAxtdZ87BUThv8BLAZya31BpbWd",
  "key33": "DhscwtnQ8fsTkgvC4BTDVRQYu4J4oP5DkcYSECoLKQdMgr1hMrncg4VNEMWnby7zA2ANYRbwe9Xsyp8cxGegMQk",
  "key34": "QgqhcqfdBT9ofu5Z7bZJtzusYhWYZ4pfDhFRtK26aFyMjTD65cavLoxNhqSH1MhuPfNWcyt6ddZPBZ6kXihDG65",
  "key35": "5qbo3BNAxeWtMb3m38y7srH6nvFfJsXFCSQeoV42u7qrLHwRskxy5TAE1WbvMUuhbtoiqHQZ37t7v29goF1RxPW9",
  "key36": "2Y3G25A7GYGc1Udm79oFWdXxV7wHF4ouXYznryQWPaiLWj14isY51KKhtsRcazLDRHBECYgtF3688aYi6TwKm6C1",
  "key37": "2uddWQ87JRkcAAux8HnERKXYBiUcK45Q6mbMsUQ568xLERD8sBpZJTmaN6EgKUyrkFPF1xkUjxRAwiVCUNwebg3p",
  "key38": "5WTjkyefhjKdy1xy5achobp3DNCvJzHVHuZoRyjoX9CuZBphVeFir7YsC8p6yhSjDTEnZGCx5AzYG6bUJ1c7LQMk",
  "key39": "Vnyofg6kaZ9VjeBZ9P3gowBRzHwRV5g81BrQAPTQFnUgw1DLJTxxkb77BmfFcvJ3eW2FGxApqZNyzdELe5RuXVw",
  "key40": "3TLNvMxwPnUpd69gN8ARnkeULM9RjRdLTKJxBjychtGCcjTtZtnJ9u86HuJtNebJxkVZhCCjqspSQpVNXEfVDx3L",
  "key41": "ABn22YvgFRTxRbpUCYaTnCe69ES3oeascTdgZ9HsD2YYNqiYuKYZqJA1fU9UpoFWNgVWU4RYM3ccBr3mG8yn2dD",
  "key42": "5WBD1MM41tCoRt4rdJDXEbxKLoJU23eFCMrFBB4tn2QG6pKmvKvxmwLdmeu9XRVCyQAyqp9us3sZmUrZbQ4bu6vA",
  "key43": "2qA1BsY6wBStb8bEACBYnTPDX4cZufjzgr3SgskMJEAR5jvwcBFL9QbCDirXdwJVhqJTb3J5ospK3eb2FXtSrdZn"
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
