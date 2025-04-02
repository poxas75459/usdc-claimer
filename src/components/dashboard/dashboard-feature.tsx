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
    "wRkkF96XryCFJxzhcw6sCjUvXS7KhzRtfZEayHKpQ8RbHuuUwy6iJj47eMFYTEitZpZTbzhbSfbAZ597n7X3tou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKB8g9P3EMKGDPM1NLTS2FYNdVFPDyNTaWFrtEQYWt9kvnGEB1brqbZn5EydcPr53TNSyf5rAtheKaXBej3c7V",
  "key1": "cfJMRvCdbP9dtWtvSYq1s7u6Bpc2FwCotiFvF3v8uBSsKyfy2c28afvmidFAmFdeJgLi2b8HE7kTNPds9RegcdJ",
  "key2": "4dGCTpe3UBBLNJpq6dr6v1VXRwH2vQRtwtSNxcKq9mHitxXhFX5H8qE2m19iPuWkSTzU4ktohB3meFdTXpkiQLmE",
  "key3": "2Mk4cQLaYUMAX2gYzWZsaQubtFF9wiVwwb3znSDFRubjvMs2SPCK5HQn5gN1U6AmWbE6w7ZT5hPA1yc2EhCPt3Gj",
  "key4": "5xdgWhaDS8TLGNPLryUdWpCByTcxBst9yosNr3SPGXWH69eAetHdWvaixEf1azvBTdbK3B5b7ehesXnPZjruYbgp",
  "key5": "KAKpCkH6Q2Ca7J5LNwTYC384pbE4257hLxcYuBV66qLYg92D25TUePG6zVWT7s93ZbeRsAqKT69fCz6C5rU4Um6",
  "key6": "5kw28uoYfZem1BVhrXnstpT6kGEpGBNhqWeHDFnxRsgS4hA5bhfQcEYcFxhY1MScF1t95YCdZH5jWX71TDjjvP5z",
  "key7": "67DrPdMXAYawv8KYniHycnggXtZZnLAZLaUyfyTbFx6C4iViYqAvc6rUtSv8EVmBCwwTzUyaQdRp8caXVjrqCLke",
  "key8": "bGLXSMhiYjqXScejvHS2AuMV1NUvcH8Jjf45sozHxGfxkAAWDRJmsACJ9ybELwoPo7VtuUCkp4KD5dRuN4R2Fd6",
  "key9": "SJjVAc8ATHvwfYCDp8yKB7MCr5e3y3s7Pg3B5BTN85zQnrc4ZnBrWm4b1niM3Y9VNU885PMtpQcaHed7yuW6Vxh",
  "key10": "2KbEBrqSja3BYxrKGZoeCYZrc9T8oVhYYZCwfkk1dUJgpenZVENXFMGaecqbfZmenSQNUSumrvdVjSzKB17YsXZ9",
  "key11": "3EmDgcV8HGsHgexUvD38dVEnKnMfZtE3odCmEanWZxUuv2v2MKBzCAK3AwLoid8oeWLo74avLa81QagpE8yXJoqS",
  "key12": "tsYk5R944oASratwxCX37Y9UW7nodxxN2yyru2U6pgXYvxTiuFEFWzw7jiHjuenbGpXgioCHSgHisxvnsRxLFvq",
  "key13": "4TsqE4nQB1rgzzsLgkxEsSxkAVXYgbdvqVuyZsuVfGVdPTshZ7ZYGcw4H38a3BQWs8vSDwQnwD9htjZKWMbmgfzh",
  "key14": "eqStBj658r51hGbYrp34PWzQfzF9mNGmohJLME9hBh9aGhP89AzVa1j7SUAwoL22ywdeZrGWeTxuYXfhwUWFXnT",
  "key15": "3E78SDvKPBNNhw2E5skq6y6S4Gdm6WkfsYbDbmRtTGkJtJz4VUSzaJcd1GqfEcAWRH2NjsDpm2t9Fh3RECN2Ho7f",
  "key16": "2TjdeZZG6mbJxDybMufQnRPZaaHGogJQCS76qeXvbNnSdtPaYWhR9gmQGrWDPK4kLz46tU8M5RKnm3Em37cVXymV",
  "key17": "24kJHc1AP8dUHVacgco2BQECV1gk9HsKkucnXiFmv9HjRJMa4crMNbMAuNqARoxkP7HqPqf1AvVFYKn6FjXHH5V7",
  "key18": "4FHxZ6jMvygH88r5vHU6HXriveRUe7kBAVThEDrGYtcnQt614qUMKQBjZeUt8oe5PCoe4hzF7VmUu7tf71CVY2Be",
  "key19": "sheNKsNU6hwYyRMsofGrZSVBaUs5QFMxWB2zY3zpWscQxkB4oQdn733rFHXaKsgM3jTqmtGzaTDhebStMU9K2Zi",
  "key20": "qsaXHmSjB1LcxXCmx9SYu72kNfuUqgCUCWJpLNd6G1PGLgPw8CyWQJD54vXY1bfRZyWfA48RhmJHUe17UsuWK1X",
  "key21": "62Ms9Hv6ULcKKJqtJL5pxUMzfF96CH4pWhzDLbCmFfEQTnusHi4HpXrqGmq9scASCwH6j72P3aDc7Xbs4xhUVmxn",
  "key22": "2nwYa2vayt214aPECd3twMhi67xytne5LtEiiUhWBHxjByTxKyKmvHZgZZdvBCfrHfWFkSM6z6LAZnB5jbDoZKxb",
  "key23": "191vD8F8Zxn8saFNYhEmEfJizQA3A5yExL9VNGK7dmkqnYoEbq52Yv4jBASChUTMnkKzZQj8uAADuL9EVMwfFCE",
  "key24": "yzYoaVVQ2TGjNgUhoA7PnRRoFLJkf1zkY3dxPG2rcHtzzBSXNT1yYvatW37NT2HxKHj2SACN5twN9dkV7ttMNzP",
  "key25": "miqzxuFWMZWWzoUGSAnBfmgEajjDafqZhvU1oVFUhLbrmrkQUFcvRo2UiqZNoPuh89noMhDdhcUKhjnfXsPESHb",
  "key26": "Jc5S6pSSFBPLdad7F7T7gXJSED7MxqiaJpECvcvvyVocEvjJe3N3uF9iVXMXzxJfBSL8P2mjLCqiZALrMivLXEH",
  "key27": "4KSLsvPYgUMGWqdqsvR9vSeCHLZ3Vkgqm4GJtGbKz3gbxjAg1f5rvvWCybrozi8Z5iEoi6TGbygjrWRY8dDZcX1d",
  "key28": "5gPeWSkHg7eNx5R8UYQXAiHjmMR8W3ByRNzgG1WAu9nshFRwp2FWovfdd1XNLE5pVFThEHptkKWB6vanBrj9jLAw",
  "key29": "tLCGrFCWYjRa3kRFw9c2ZH7T8SL1m55edNVSCpB77rEz6VFBUFFPm8dYk4edr4PwsHUqfeee4YKPqUdwHXoiGD8",
  "key30": "4kfUJPrzgSYPQyjsvrQEdZg1hxxmwcqY6UiCRbkZ3uKDphgMadTSXA21c93YdxZ7j8q3v75LB66fVQyxfMsjV2vP",
  "key31": "4qKvPWb4VYN2H7mTEPJgj6DxrM6LJxGhxp255jHM4HisHcK6Vs6CVY3xT2pUCVFrRXSZ3R67o7y3VvnsLrTbE2QL",
  "key32": "2mVDV5WFtvg7JXFsfyiXurfEv4EHsAuJRGCvju7kanH6bjtg4L3kbLTfGupwQPz6M962ETv2zPgBMbaDYyRYTCLp",
  "key33": "2VfuBzcnKsUNajv9wwLoGyr7SFgt2bQtYoW2SA3axmoQQQM9SVEsTuHwt1Whdw6dgPJ9yrgCpydxMTZi5hsYJxu3",
  "key34": "4T47wHdLSNKhxwgeqqCi2Xg7ajJh5tGsMTWxxMHF6szmgdhPkwSWXDTcxREmvLYRBGL4hFe4zJjXWJgkntx4KDQL",
  "key35": "WjNxZisXexGCjyHTfFULLLLSEqH7r6gcerfj9MzoHCCKwFuYb31Ud3SRvNDWA2tdL12eWfEDk6aSXeNiPx1ASHs",
  "key36": "4s5AAmK8ndyGNDh8xEWK1udSLcx99vzFtXEGvhu4ziyD6zTkx9EMQv5pJgmhTt5pRzBAp23YVLLj6m8SQLVhpWLU",
  "key37": "fZqe96QAq2B4FPLFKiWPbA9BhXc7eZUv9mu15JF8KbfGdKX77gSMRvbNoMLB9xAqnEwVHMMJVJHzHsQkA7MaRN1",
  "key38": "uEkg5WFq2BAP2HSzzinpos26rP6CT5ZaB9qumuEdhMyeRVqQYaVnSENF8CK7Z4VdpiCujbEWmjs9dVdXZjaAstF",
  "key39": "2YxjyudNCibpN5NEYodY8YwbgZUKUVuQ2U5idQD33yGqKmvdqFrmpkLSXiW2GJJSMRQ13WZEoqPmBbtwwPokC32V",
  "key40": "2maJ6ryiuhTR4xHidejWn8ywt245FoBEvF6Qu53UcxXGGtYjN7fK5298bMyBJ2GbXvZ1orEE4abCW1mf3s7wgCdF",
  "key41": "5TVoNuYTcocQ29gkkuhJpCfXo7FfLFL2ysZoJcVZdJZt7ZrEYFPMoPed6oiC5mNgcpeS5wSQ7joy6dgczVvELhmp"
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
