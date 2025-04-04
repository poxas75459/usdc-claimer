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
    "4pHSahZetwBejsUJsjKxGt3tAw8TUTTsXVM7CmujVb1NpHUUrVr1nxTkLwHz67YJtsCbQRR8HrXWNioCHDXSJv63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fG1b4vz6s5VV6aJ7bzPEsPbZT8r55UXzSM4ftzJb3uoBhVeKKbiW5NjbJmZZqftpZ36KEp7iDLthJSb3j3EnXTH",
  "key1": "4sFCDYYp5bU9UA7jtJ5uATpmHKVpthoM6mS7JQRv2ZTs8FxBYcBQwxSLDpAG7skqzjRcBWVRTmJj7JxCUEmyKgxM",
  "key2": "gXMvvD54opjcjPHf3bADiW4yLoeoumhUvGDJEFdC8ctJFWifQk8vtFYRD2hsLKz5KymMxyKR9kuM2mMGnyXzpwQ",
  "key3": "2M8RD29DD2XcQzfaHpawhyQeHtdjUy5DoRB9MXErjFLJKhZgvrVZYms4Ckyq8NUWYUKX3A9otkPJwmqeAZqqyywi",
  "key4": "34cUqESJdTout7VBkDGng5K5BR4NDvxuF2WV3FsLir8cQoLVSEm1BU7yXjVmzHYTkmTcHkjaDWSD9RwLQsXSmxWX",
  "key5": "4FZ713E3DRmbioweNMkyTLgiQ7hgKiRqLX2BwKFS5rEi5cKv1nupSLYi2fPV9WZjCypyrFTdVfojtXkiiXwJjmno",
  "key6": "3BYGmrAjp8yvne4iWKyjGjPZnPeZhd56syQxdeWGmJRKbsCQxWyVRk1fmTp7dUB48fYyi6jWfXN2CsCw6MjRsx2j",
  "key7": "65idGaKJFW2ASCKbfNYzDRW2V6ZE6RjJ5UegCg8C1HZ9oSGL13dfDof2Z5PXdi23VLg9jStFJU17yqqkbS84BCmi",
  "key8": "2YLrJGVGSNBXN6v1RbgJo5rBUWYEXPaUam4X7DFyVDEX3JbXrucFxEUbZuUewA4bVZi1FW6QfyVP8X3sp7naPuTj",
  "key9": "488BXeyDjvDmZHFgKTFsAVfp56MSqJkJDeiko25dgiMuorCz7HSQmaEnUYz9zNzNm3smq6QRxDH8HCLHDTNWQaNE",
  "key10": "vCSPZUC4wf1hhkknx5F3GN6SUYLi1idHbm3DXHJALQMkGFZ8p2RVf5ZhndDYQj3wskLcevU8rB4tDE15xyWPUmu",
  "key11": "586mwnpQrc7oXHJDsutSktDQ5cqC4VuRTHUNgoyphs52KF1Hx9ZK8ibYL3aGifC3xQ1PEzFzZtWLDKm65qD7XR2Y",
  "key12": "5eiB2ZhFe3VHbrED9jk3Upp2Kjm1UgbUAujQuEdQ54h9uAVgxmLLGEWtScc2aYoaCfojnJiK5NfKz6RBVQB78tWW",
  "key13": "5YbP1SDx2LmSFrHZUCa4Jy9CzZJVW4MydeKjh269sY5geEXA56HSHR8a2REVRRH3ghvBxu5vQLNtA9NX8yCk1LJH",
  "key14": "VTwsDVASkDkKPDCDiyqaxeQHLeWtynbdrPXpN7sp6yJzuMy4nxxY2rvqdWpharF4YtmFwXtWqtKb2rGQLoF2eWH",
  "key15": "3W9vTg5xRNWrRFtnojvVqDXZDqTjqTCuL9vY8AJwKbSCqndkTTiK9oe9Evkeh9H6FrCyUfRwVRmRLvsE6UTKi2cv",
  "key16": "2otuRWjwR2cfpeEoP62QztEzHZK7xpoEaGFdzthQCXWfS2ooFWpGB4qGQD4D6okPvxEshqXdcUrsAA5LjpdcU8H9",
  "key17": "KkcVpK9po5FufTQx7xBs1S2NUtNJr3NCscc4vfWYcjoKpjs4h1cJqkiYoxrYrRAfdAwMFrX9qQxuTNzWZ9v8x4b",
  "key18": "3121h1z8ZdzPj6ESYRSPKf8icuUStDBmULeVUYbfaHU3FCxiyDpP4s6D2qu2T58hpNYpiLMWhT3JTcuibJkwaZ9G",
  "key19": "52nwV7E7czhVfqnLDqd7yH35M9S46dab6qPbFUkowXabrPwShr1FhCvTvsV2BfpxyWftQEd1NRnQuBwY3TR8ehsB",
  "key20": "4SuBKvtdAhz6JoRetj44PJRjqftfiXRRVQf2xzoe9PETC7EN6wBU6eu7Cii2smxRrSTz2LAqfqbCRYRyu5xj95FR",
  "key21": "2EaL41xXMsjwRpBPamyW2nZobmn3E8ancgyQHkC3y4sE75W6SmCwYEkkbdf5TNvUBNWhGkbFJdgtGrBdLwiqrnT9",
  "key22": "3CoyqHU3ratxkEHAY9jniZ8KiKVAQWmu31JM5VhuPUrMWKSkdkQs2V8NSRMLunue311vKQ9TTmAAjEruLteVJLAx",
  "key23": "YKRJZX7nSwxhEyWr32EUG4ojy4hjnypczLzPQX2s5TvzfwefPzQDsTgkWyLbNwNk9GQNMdUbXyx8ntNsQsq4GWT",
  "key24": "3ak3wGyg7tNiZWKvPj8mK9RR437KN4evEuC4Tvrtg95G7hsEYqtfCNeqRm3ybyz3nE5EWLyGESDF4SLvns99sZvP",
  "key25": "61cCae7y8EtEsgfugWLhaTjgjvgp8L4VCrzLDzoCQedDHApYNUimYb34ingvM9FgGi2w1mNgYDExjQoN191AXDWn",
  "key26": "54NZcyJgp5WpQN2aDAPjqEgzr1VwjzFzTXN1MS1ESPzMQaUQ18YkWLzZcJthB4pvcmXVMaSJsjCQPqWKKEWvQEow",
  "key27": "57679BtJwenaeTHAFK4PPRMfvXGqVAPKwqEarP1y6o4DG8H4KoLYcP1NpTWeiahDw1XXKN2gmg3h4vsjogEr97v5",
  "key28": "5P55ncb9ati2Td33boUYRKhPsjFK7UhZsm2W9U8ohkhjDzTfAANhg4fpMy3JSavxXGe1JH2EGjVX1o4obM59BEFU",
  "key29": "3H6uUmvNAEMt4Z9GQ9EhpqHCT5KJHBNQZchGEp4xMKmr4XpRYmsdDNDfRaFPgPuB8dKk2mr6XZ9sfMHKUtjX4x4G",
  "key30": "4RnV5Xi7wna4NuvATYvBDx2xWYXMhtHohHCHFEDZhVAPJYXxmzNJhk2SRtHfwue7j2EhvAdVEcHPeBdbuKXXBHC4",
  "key31": "44hZnFiqkbWHK4CRnyHsy9oDUaZ5Z89NxwQEUw1SWzvY1LQicW6nL1DFvRdU4u9bDqWGueDXGsLcLyiKW2REp7ju",
  "key32": "4PfeHoc3xCvbZwGDQ9UTaFaoDurWnM8iBnPpqQqW9DQ4VoYpzTWD6U9MJZQyrd7sjYBHf1yWghCoTFku2Z1bgAMz",
  "key33": "5tMzoiWASDsB4dk8yiuPoD1vsLnvxfQeb7dCsbpzWamc9xC8rT2BQHJc7qVwaAXXf1CsTVqe18mxAgxuuyZjYJ1a",
  "key34": "B2ouR3U1xkfAYABE3pdwdFii45nCADmpf334pcFnqJ71fSqZ7yFrPQHN77GmVcHEFVqgP7CRuTmmgfQqvUDHc2w",
  "key35": "4DkQPBPFCf25QFoHfessSYrKp3b6QKFvDpe2sviNmpENysPXCHBAdRtuH6aW7SyMJZTUCigXQZ6pmQuQznTxjZYk",
  "key36": "qha6R4DaYdakdigvhULM1WfrSMZcNUNxAcrw6nYYPexV9haKoYwy49BKciLXdbGHur6yoUeVLiYatu4RHVCfJmT",
  "key37": "3VWgszK5UBNTLSHrkeqbrrePQ4Ps1UQNA2UYf4LBP75NJGWGwYNoD7Tywbh4smpTjz4J1RKWpfERGM5swzraESnc",
  "key38": "2LZAtGgchGvBL9QSGhCWcP8D3BJHGaRcFCbyQ8RJdyXoXzuwCnW69fW2n2wjYAxbhtbuJsfFyYyPWv1tCfW9mCNe",
  "key39": "4fS7Zgb1gCDB2PgzL66dQsSDabWH9t6WESHNuU7HtHVecAPt12zLcC2YXcJELrwbj2KrW85YHETaNPad2bAmm5AE",
  "key40": "27Nvd5eMNhFT4BiLvXZ4zbCDZMRmmNW4U5164HdufoV8NDxAaFMdZRHUtCTi5GPHnTjTeEnFABFQ12sokc2SiU1Y",
  "key41": "2SeQyi3d3YYxhbqsVX7CRb8yg6yLDtxSgyUM274LBACs2be9rcWjShh7gcftfHoCKHfdrvFNGzXmD2JnqCfn5npR",
  "key42": "2goRLPEtkLv3hisJLvUkgV8w4wuZCMBHvQSK8p8byYU91PU84fCYFBWBVbMz95VKwWRjbHf2SgUJNvxDHxh8E2Vf",
  "key43": "2b5kVVgC1RJxxcTdXr17hT9YZpfuZY2aG9szRJVaKquoKZSb5ZAwqQb8AEQjDeqvs3uw6z9FKi8yFGNaPy3hD7xg",
  "key44": "zmQpYMf5hdnbZmpqorjM3VPcGubDgNRaGucLifzdp3uiTtMJh8r1U6UDEWXeCSREyfXunngkVr5HXwPTeptWTkt",
  "key45": "3cTgyqzbHKam9Hdjj92WPdsxGwbzquiEPgts5iYtWagQz7zLvaf2NbWKLX53jJhCRhqoJ4b13MGgtMaoFKD1qNmn",
  "key46": "5vTRn8vgPV97YuknjhEnnVqiTTKXVe9N9nz7dDx4SGstjmv3qLTZ75xigB3HRbQzPiuC3wYx218bFjd8SfbkbRTg",
  "key47": "36k5b7omAF35X1vGRK2tG7JpCfdN7N9KXXaKApajZqFMD5mduTBky9dEmeYhyjGxnKrWrA3BkLW8qkU3uwLLCoVd",
  "key48": "3cayGKmcwgvUMVwMw5zGxMBTgKKfabAr5WevbjkJDTzPRyyzCd6WXvY9Z8KgrH3SUdiePDjG7PMXzPTJKqTa3Ha",
  "key49": "4AsXvLQpdskSqFFXqDuG5pqcjp8LgsUSrdfacFKnpdbz5WR1aT9UVNhfoXczUmCtUE4VNWNECDe9M5BzhcakMkbr"
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
