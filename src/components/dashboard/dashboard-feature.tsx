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
    "5tr2AJyJYZUATEYRsT7fCkb4dcUzhpbcZrUv3XafRTU4KV6o6ofgGLiFzTNKNUEMz8j1Zt1pzvkx1TnMfW18rv71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyQachBdAanfVY1grmigZEgfsgqk9a8AiRPvemrkxFcQ9S6EmPvnF4J2FEzeWKCdPDrZoQmr3xnpB2rGyPR2HoQ",
  "key1": "3hzZ2xxW7LdXbMW4TDcUAdp1gCNt22QdYarz9WGgqQmjn7EQ5nV2Py2EvHB5FSBeRr9tbvmx94DzFXo9btGLvAKr",
  "key2": "24xoCRMRMQMq5xVCohVhNy8E3FhsFZbixryo4BeNzprUnhQXe6idnEAtXa7tt91TgMqABunVw4Kwzrnk7wSxzHAY",
  "key3": "3R5rUFjhSyJcoNRe6LDUNKE6dioSH4FrjXmbTh69YKEZxwzETbuhcTrcF172Z7GT5WBHxXEoiMyZSdkgEwTUwF6L",
  "key4": "23AdG1qS9imcKttoaRSdQofapvMuSmuubAkx2SchALj5T8Cz3UBEtjmfmnZLkwFgHyhMih1fjMyuZyc4oXNN3w8c",
  "key5": "3vgr3Sa7oSSrto9PjNF9AVzn8U7EiQybD37gfVnSpBf3RjXqxQZPceVvfA1jYy4apvKjSwbpmCCMWFCAYQ5PXSVf",
  "key6": "3M37216Bdi7PycMa3RzoVJ8rAtpwxjgxgqGHVCtwE8i8gWDAPAtwFtvzM5zMsYnwqZr1CQfzkuPD7wt3VvkKgv7e",
  "key7": "4uxZiP3pQzyjv2aDNwmvwZ27yqeaJHTM3KsnHqfBee55A4fpk2J4SreZFWBLyhLT27bUreyxYEXUky78Wr8CxZEo",
  "key8": "SA1GqzmCphBYHjwe9ZhXBeYA3fjdpuNkjtuypQL9rxnPa9Qv4FMCZVDZBgKWRnED31C5xTPJxRouzxbahdgVtEj",
  "key9": "49arsr2UTgkBWcii1peSSbRZeoXtUuS71YdYRYtKopEyP5im1PYLuTYEWBkdzDqRR4fXrWGCCBRbiKFM5NAKPk1C",
  "key10": "2Meq3tSqh68jJEnU5JhJnVT7iUtNHWVTYdrpCychigjGZUT4nDs6HQx3E2cFwhZ4zRuSw9gqnkSFeEKRjkD1AFY8",
  "key11": "4rEmsD69LLfPWK5xkBhR6gL3CM4rcn9BdurpcXybAqyb1igndUkvRwVwkLXwitdx5oSjj6CUdgMLFCFM6SpAhKg3",
  "key12": "3gddY64kfCSR6mJi7jL65Fu4iuHaFGs7VcLASfCyi2rum9U43sHoCHGYMn53qh43HktC3B47g2mshVwLbGuf3TQr",
  "key13": "2KTQdPXZ8cd6rFPHesv2dtdaquJen3YrEgiiZnKR7fSfBbm6Hf7WU8vydbb2qqXZAGfpPgPFVnVe77MdaxYsgqsi",
  "key14": "5xCtkZhNazUebQ1CwZS3LFdE6Tt9L5TRbDmNAWmB38MvtNZaxG4kTzdwUtPrhELr24QswywDk1BoC5LwxhQ6oDvx",
  "key15": "5gNZsKRNriMwgDEkHUze6DQcPxdHZX7wdjm1GZGz9hQiwqVDBBFeJd1jpScNHSDEjpQUSwcAHT3Yq5WAfQ2E3Y1p",
  "key16": "HTSMnKVMDA9swdv6TPd2H2WAyTTNgPXQ4hrE1UKB32p8vd9roprQWUjN6M8id2aXTZGwb6BZNVWi4E2vgRjbQGC",
  "key17": "4V27KE4sDvrABZqpSU4nihre32FRXpg1rPcEjj2g5aZCx3XQsn2yzpu4RoVyCYrxvBk1jS2WWWJDRTCLsfqMFq6P",
  "key18": "D4JXp6AApxBV162hGzr1qiCNzj5VgVahbBx3Essq5ucpQ5gqm99j7NWNGMWAf683LUq47h5YbtwgFGcmWaFfrE3",
  "key19": "5RpfEZ71yMyZLHB5HF99xSy5f9JHpiqNWx1PdLFL7vBKvkLqsGsPex8rYWKfM2EWsR535ctkHUafsPRnysbttNLt",
  "key20": "4HqgTFtaPM9V1j8emB1bJittoJuuH7rXBmuzao86fH74yMx5qCeDHzTMhffgstke4FYXKQbwyw2TWpY8C4ivR3UK",
  "key21": "4c7G4Mcrwp1QXfJBZfqugVAMP7C97QqgEDykmS2gqUbGS9FYL9E2aQexfU6ZHwro2GkTHAnGersjMhRtEDFk9XAH",
  "key22": "Nx1YDxj1ZzDF5SaazTSq6kxaWndEx9aLGmXktCLq1yjJPXk7CcfsD7GHnkBz5TshVgj9og7ismdceeFfPVC6Hx9",
  "key23": "2pkfPT6LXLK5uQNq5fAXvrqLhCTdMwd4LSxnDSvTRCQHRNzTaWEkAYGCam6NaxWNAAnEb2qYUR2vmzDSx6zrSMmj",
  "key24": "39dzWeAJ6pmTCpePvVMrZd3pZHMZA2oLvKEdjc1hGVJp1WEYcKrko3kJDmei5aCTjhJAVAk2Z8oktMpPFVywRfUB",
  "key25": "5j4HA7vskzhUpzFdiAkWMdZzhzhbuXxtYqiifZALf4NCJWPQ8fihYPkquaUMCxThFbaFZEQvBMyUKB9ZBXsuURvC",
  "key26": "2cujHFXV8bz8FgS6H5S8Jr3DJN15WedXRfS9ebUy9whTcQF4JtmTQEZvXP6ZT1LhkP5qcb1PMV25YLb8avCjkvks",
  "key27": "6549AE5nMFLjnH5zizDoipL4f1XcBRnpg5BfPoaGckKrrkECdopPGhRGMiaY9MDbYmHUe6tPGEd2b2SvXJCNHZE5",
  "key28": "3yWu9A1AP4zAgqBLabSK8fRdRm4UdqZeHw8ELuKMXitnqiBEMouqge923enytryqTXknChskMYjzAJeDkdqdg3GU",
  "key29": "5MkytiQovGPw3seiE4srQB28bXRCLNQ422YfiQBgZTd7p3PvZAXtvZNnrCKuaNmMiRo9QVkYaB1UJziusbN2T2hs",
  "key30": "48YgP6WJxHNFyxRKTPvTEao16BmcwgTAX1iQPdcD1TX4Gv21EEMTq6Aqhjpyd4M6UA1F81t6Mps6c4LJ8BahGnmZ",
  "key31": "577V1o5YU9Kzob6fPGYTSXWHPr6aefuAuw7NRjoKn6ecsX2mPeDRXcEXbEFAweyKTFNfkbuj2DqXVtMhdg7CXk9b",
  "key32": "445wyzXyRJrAXHukR91LPFvHDsKZBn5pGR7dhmg2MnnsxzfE5ZxHBpKjB46x888zhYX64r89TBeTZwbzdqLfRE1x",
  "key33": "3T2Yu7qzSC32VZ2FprrykRbW87Huubb7Y1vMFHM4ibAfpowbwouP41ZsgWGtinyyBJdAUyGiPdmwhP2j8QQ6uESp",
  "key34": "4ZnyVTMzAu6pTnvwY7u2KywyfTPJYvkYPCs2CJUs8EceGjyQ5Vk7HDBXNYdgq49Yb9i1fcdpRUPtDp5Wiu882ZH2",
  "key35": "3W4tVxAn27qnhsLQz81LVnbH4cqL8XnzXWRYC3RYWSKdPxqvTTS9WYM5FE1Yux2sd1ALx6B9UMJXECLaZN4XLfq6",
  "key36": "4WCqoJWKSU1NSyTzynvxAc8xciZdkESD7J5ZPLxoogQ83ZM7ZCS1MUu4cpjfzRAHwWMSL3xpYS3HupCzhCzfUzCp",
  "key37": "61RAQm4SvxR2in1sjXoGMuWPGLCq7TDJ9Dy5PwdzWpqNtc1i6PmoCpcpwo75swtDcUhN3h7zF5zwtCSjgsWWbT5m",
  "key38": "46JWadmBT6xgskDegaBBdbvSTbsknFzbH7uEHnvmhUcpkTXiTd5UdSW4TQmz2RYuhYgV19oyxGnd81rUWuHJnU8G"
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
