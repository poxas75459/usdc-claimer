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
    "45TNzuRhwZnf4CSpsegznf1AiDYdkLtd6CGAgvPCgJxtWDWN6ByCyMCaRaaMSdpSY9tPjLTeZaQUsbtjfUYtg6Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nxeHMtQit4C3BTK1HQ8yhgeJdt21FHgCEGf7nQZaLG1CznwetX5gkLuF5hDwu36bBCEd2XBPGKWyo7WkANWR4aX",
  "key1": "4rU7VqxUwZ91TfVoQhAR2KgtV3QMJftN9NMJx55qCMAQX6b148sev7ihDjNM4NK1UZ8icRuGCY62KXcGNw3E7kfD",
  "key2": "5CF1KNo1iY6EhBUPcNijH36SQJrweaCcpMVupUT1XymgauHTp6rCS7A2QZQWxcbLs3ze7HNh1i2fBk2Agzkwg3tH",
  "key3": "65JTv8PEXLKev2HbFqmM4REH7w9rpqXW229NWiUUNpNw4mnBCTvUWCm9JoMpdVH2oHxkUP8hDCLouyegHyQhQ6YU",
  "key4": "L4mX2pGt6Hh5bEscGq5dDojd4jTDJ43YT866ATss9nKBQVpbiyBVrcD32xQdUWpPBWqx8vAbWgDTnhxNsi33kNz",
  "key5": "5MNsMtbMNrwvrjRaHR6eMiKDgQB1cgYEyqHrAo8us6QoD18HD2TTAnxBovRKzeKeBQWpmwFARpMCCFryhK81ZfMt",
  "key6": "cxQE3ihQwioKZ5zLGLebVDnyapXzBNo6qGbeJ6cweMUoeVJokySdpmFNBoCs6pYuYpPcp8h8RjhF6kcR2Vx81G5",
  "key7": "3h7rUyBUhz8MV6nzKwBYySBhLyCoRf598yHrsfNPh4t6E3ghKoLhjhaXSibrm4v9YfXeGEKaHQirENnW4RynNu9b",
  "key8": "3CwWZi9crsMeGeAHXtAijzv7osGs2NRpaM7Lug8Lf71J824AtRVtEdgqvwyaMSDQfwtA2yehcnvMjpyMyQnqQyN",
  "key9": "5j5n37EbNuGasGwh4t6wr2ujn6w5SaHGG6FaRBVx44PpEqKLfpK7mZtcG1EXDoDR9hwaP28DaxJynFoewFXesTxH",
  "key10": "5b5LXCyvz4B6LffcHTLs1r2bhV4mDeoix4Qkh8vjEB1jfm9b4TQQfsnWYeAsudw4hBvAPTMZXAQNNtsJnxQSRsQu",
  "key11": "4vRDWk8tmPoej7kzFY3T7FPUho9bp4Es8PAJ5A5GiUBWLxpQEnUoagESJQmzjmioX2YtxPPYdtEFGSWb9SWmdKX6",
  "key12": "8uwjvLrZf6GjJ4hGL34mbbn9rpcPg46XpeZf83S6RhvwSNZNT5Jb7BZNvwXD5o6TtFKaHt1bZ7q4ABy3SAkK3zc",
  "key13": "3f9MuD3m7TD7qrrsnCcDiYiahPd7wmNszjJYCrHfsZ1EkWNMpcR9vzxBRaaNK3n6z4PpZRYdYGxQXrKwTR4S25b5",
  "key14": "3ZrQCspJpHMWeWRLmeZmUBvtMCGoxJHtidfATxsMs6ezEyC1qWn6pYUU6YvP3B8cuhEKyQMvEDYxX8ks49xKmitp",
  "key15": "3r8SErPpu1zJGjhhSwpjsUHPhV4WvpYAHE9LzYbrBibFwXZSkcBzS74Ac8SQNSxMdAQRgASq4udejsZLW4Bsx3Ma",
  "key16": "4V7g53UmD5w5aYVRkW93KnFeedtWpDTdhMqKvKfFooY3ZPq45rDrYeb5BdrdD4rEj3zC5mX2TQKb5xSmH1g38iPH",
  "key17": "47X4rSz27w9sNx8heV3Mtsyu5Q7f6LMitm1gXN5PFrDH1dJ2jDjtXNBRjYMtiW2UcLcUqjPJAtSZ68seC9oJhzvd",
  "key18": "5zzPUZgkpQF4SiPQjCJ91eidaCMwuVSyUZyv81WLkJbYewCF3RuMoLbrpxtnTEvFFq6xX8E253fo63frH7tN5GWT",
  "key19": "3QVXw9FXuLxGvcqZz4VsraaobpaGFGBE3dPj16vFfoXfwMFvvnJu8WxBMp4uDaqAjNSBUeP9X9gBX7GsbngWr5e8",
  "key20": "mkKMRWDPkUHoVsSVDeZ4pVi2Cf5KztMZy1BojToeomtGe9njLQ8yMtPSQfLXSTv7kdiUadVCKqyqczHjE46zNiz",
  "key21": "2khHyP8VZnUzyAjAGLUPo4GsQXt49fGtw1mkbQvYam87M1Bwf9g9T9xriLxCABWkjmZcj7cNixiY7DtvyCuAiV9T",
  "key22": "5wYGmrK6nNCSX4j1eEJn6FnW74V1Mx4Lr7VjywFokemz5aS5Y2RaefPLvFsaLzFAZSCcNh3PN4vQUN4JQxaDMUZx",
  "key23": "oVhKSSjW6UJHwHv9NaUJ61eZaTpxJNgoC1hYxwXmRqswrNeHiD5RqQnBNpYvmZEsx9ZdAizwsd9BqAUV9SqchcA",
  "key24": "3zBa36q22xmxLt4gsxc2YvHfXpBDwoBKVSZ1zFjs73236pr9ZadBGTowaCrfYEDPavAm5sENv38ydYU8qunLph3E",
  "key25": "4CVcSqFF2baKgEHmDYJZcGbKSUrUfQ5bbPJ1vCww1KoGibAFdeb7vB8jcWLvbHR5vkYPaS8VwkZs1BS6GUgp91q4",
  "key26": "2mPwi83XCkofhnAtPgvVk6Q3eFWRAhSfXQZ5aMHW3FNr1boZnDj4Aktisqw4ycpKjkedkArk2Gs5abUr9xuU9vz1",
  "key27": "3V1nqDpW2j5FFoQTZScyWVu6MqWfWPTWRy1M1YHA8cBZL8uayKA1uHVmyDdxTtDJv5L56EzJVTgcR84gA6mzp6fK",
  "key28": "3Po4cZW2Rc2Jfii3ESN38BDPV9X1u7NgiebwWhSPZiTTTV36NyZwr69E4cpdGtk1qxrLvBcoS2A5MpNFZmqzkcSQ",
  "key29": "r5ArtD8B2EN8a4QEJJ5LqA3d2TNGdihszNJEcYMyexvT4S2AmvBp4mFHAtaH2ZRiQW15dBGvRp7sPL75rFnWWU7",
  "key30": "494WJSByfDdwipNUcTm5wZ21fQ4b6oiKbcfNovJZj2RgFXbwVQPmJ972GtTMCP67NMdY32GaDARzFAuLPCUQDZHT",
  "key31": "39HjE1bLn1KgkC62X5BNFRc5WZaPEHceoez3kWu5M8hyuSoDsD3scpRqviBfKXXWPSf1nkzmV5sizAz3myruwXz4",
  "key32": "oYHQXsB2gCM4NAQuVp1wALnjPjxPqEcrPFoHmY2p4LBFaVeaz26iqihLbgCiRpJutSwM47wJjboBUtbzeZw988t",
  "key33": "2shzHn33zvXMUhxaKn4Pb4p1etE3DuKAspYPNiPjR4phjiNm6DtDdNYUBeJJkNnEcxmGQ6fasiLjSPK327eNCH4y",
  "key34": "MHM4WzqRnyXXzgmM7YDrdWme74DBUzWHQFK2LyoTcQb3iXGredjRLjKLv5MWyioj8Szi9MFSmziMUv2WNVULGQT",
  "key35": "426UCCxAJ3UHMWRMLKEC6y7Ny31z4VNmnMcDyZdmDohM7gZD4HtmVZSVpNFRVXpxr2XW7GqYDF9sLdBZznhw3Cn3",
  "key36": "44zBZz4qs4RACGziWpX7TrYo38LizjVLPkERWaU7m7HsnDnbrxcMtev8XqRYKv3g2e3Y7TMtVhSvfvz3nhWJmJ1c",
  "key37": "5bgh3fmt4sZMmfUE3UncJBafJwVVQh5fBeCL7YnieTMwFEMBq8sFFDzzeqeJMoCfwJdbQoWNB9drSpdNPYsSHcrv",
  "key38": "3K7CSkMLpRuCnGsekfc11mL2Vp4RVqK89KW6qa3qTSqfHVvtjVSvprkcNnvpoJgrZvhMCiaQQpbVqrby5bp4heSs",
  "key39": "5scK6kWhdW22MADCc563afreVzGwqzh69KSee8EPiC98pN7zFiVcjTQUfLoGDYU1Rn1SqbRm4ySVwMWGAxzq3sCa",
  "key40": "5RbwkQRNnE3c1AC9vGbi1ieVMNeYWSGbu6ayWi89m5tH5dDkcaHbnnqqukQEQLW9kks5mZAjSmo44tWCw1qC6GWZ",
  "key41": "2gpnXMXsFPQSePp3tjsDhxpqSYysotTJw7kg7hszoNcWGQNZKzta17UGQUyYtv7QgnTJvN6uPe7rPX1bBYUoFHRN",
  "key42": "5cG3dxHp1vHVkvx7v45cXwhs61wyWx2vnG5YKJrVL79Gommn6LnGkfjK5Hu5ib3r5k6FVTuRkFHhQ5UJFv8p6xLy"
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
