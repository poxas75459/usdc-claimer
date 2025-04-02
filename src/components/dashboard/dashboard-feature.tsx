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
    "2S7x7h9agPQ91PoEPKwVw9xZPGb5M1L7X65ZaVzvmTPfAqDWDfQqp9shLnaoEaCSUfTi31AU7qbLeCpsVif5AEAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GJ877ok1rLYpAC9bDAbZSP53NQVHdrAHecq9b6hz1gyvhE56VZBUFX8JvS4Y3GksnGvKM9SGZaWHHP1aJBpmncB",
  "key1": "56bhfiBUcNyo8kfaZweL6vunwedivkC3LD1fJPSaCwuSbjQQ6QSYHZPPFinnm6ZtoMdgUsSzJUfPfLN8wjJ8bsLJ",
  "key2": "28bQVfouUM9U41JLCXyhtXriLZ1uisPiUL2iGVRs3Bv8mtrrXvh1QvEP48wEUsGuK5mic2n7Z8qmHrXyfqhkefNc",
  "key3": "53Xxqnhtw3JyRCuvxfehcoF6eqsgF9W1R1Cg6XGVYjGvzNaszqZqqQchwJZ4TGJsZoQUMkrMtj98ZdGeifzMU6dV",
  "key4": "eDop9qJTeH9k4dpPCKGAabSSU5MabpGGnwTCtsrjbCCvY6fCaC5wfkpFTEPJ7b767gR1511KQfdL3u2ZVJd1PD7",
  "key5": "qPiLPuWofDJPXp4T1tLN4fBb11F3x5ruLMSpsarKXv2agcUFxm8zz4NBzDzE9LBKw28ELRyaH9AzwyYNyEHmk5R",
  "key6": "WakTQgin7G3nsRXYT3zDLo3etMNU7RQRPk8LV8P1a2JAtjkeMEHwL4pTJytqnPgMzgMpQyX29bRu2beFv9LsiWy",
  "key7": "Har2SLA61VRs6fGFFqGbauiT6TtrtAP5r8HHjA71EMbqWTtsdo7LAQWCwmqGWY9jFUL4wb8quKRMUFbhF3847Ck",
  "key8": "2iZJBnFwqRDPQFjf2XEn4psYDPVrccrfvnwRHn79D8ZXtWZsn2bE78LQe4z8xrvLAMnyQaKuPx6vUsZrN6NfNwM3",
  "key9": "4ekrnVTYn6P6hwFFMShS8TVFYi6NXoe2dw9DLaG3gAiumyETPzjwdyEC2Hqo611X79hD7KHAUwDnqAb7RgBxQjMk",
  "key10": "64ZnDZgu59bREaTnWgjdDaJr9wZANruha9x4E32hL7b1fMmEdD4GWq5h82otMP9mHPoJZcUJUH15Kj1krdi4djm8",
  "key11": "5Fn75xZP9QD5vfrhCf4zoYqvMQw7gefBXCGxUGhiJ33q9oDwUu68afvU2zDfKiQTb5xZjq5znLYjousHctoLhxfS",
  "key12": "5xfnLYGKegp9jYHbX2ju6qCgzQnb6mSsVVTSYiJpxPB7b2kCSht5LnSZpftDW7N55pGQAGpea5MjciyQZrUD5GpK",
  "key13": "vNo6Kfq1ZcvXLVNXTC18231ZsVRQN33nngFoxmDhpN7HtRY4Z9nD1rfAVZmkVxfmjLChzvBDZxruyAEJSZXg3oR",
  "key14": "2wXfFmXfNbxo1zm2VHvd4bswEkAi4N5qUfs4xL88NyMRwJWY9MGx46Y45vUMaJyk4goaCfSVpsb8erzKf8zU3ZGt",
  "key15": "4Qz8XbdKodHToABURxx5rQhNszDRpEb558gn6YCrNCpgr1iDK8pxQ6baoyWe3NSQ95ihRVKaBchLt47e6yAP8Axq",
  "key16": "rW3zKKJJQ7sQaC46W7cT1ptJUkRWBJbHiFwDCXSkFfLAajyFqWGm8qwZNfv1kZRPyX84uVcy1A2oiAk3D5fJ5ya",
  "key17": "KnrsyHdNw6RonwVWTjyPPGJB9oYPxuDCsFoTCqVcfcKoMEcMhmTSjc2R1EkQnHc8NSwDfeMwzqxR9jVpBL11ReH",
  "key18": "prtnWjxZKFqpGysL4LBKrD6Km23tXmXtoVh7wKKALCxRPojYXJad9Tnn6ThJCawypv1iXfSW9wHtGQFzno4yNFD",
  "key19": "f8X3jSy1cH32DMWT1bLeYpYuV3kbSCGyCEUedQTA9CABde2XJukp6vbiTRbfLt4MThycZxgbojwbJCm2jgQT8nc",
  "key20": "Aib1hAissjHgkLpz8aUSz1RPMUqMrSYvpwWe4dLUJUJpNgZeyQUWiYjr9spEXLwNGUf1kVx1r6wn4RNMt4N5MyA",
  "key21": "46j5VAo4uAvi8Fk4WxBcje1MBJ3cggQVRGHuFTdQPnVHFxgVfA4QQv9DUmjQtEapqcKihZsEikp48yYXhxmxjzdE",
  "key22": "2SZoYEXxMsv5vA7TjSaC2CCXAQXe9WcaSAn2KJUzpvizmr9L6NSS5BLqSX9VwiAP23dBhtJWavV4dRVqj3HqZT1t",
  "key23": "vjizJVuvwm84EoJiTiYG3sZisynMFkJGXZmfxWujBCvf8MaLdbbbypaeJ7232XWuWwfeajqVGg52Ntzu6bWkngF",
  "key24": "4MDzBE4b3pLGQBUb53LJvcsbSHLSzCB32bnkUjt5nk5AGc9jPDRAkmC6ExuH9aJYKfnobY6VfJW1hQtRD5yqLfjK",
  "key25": "3XmJDtVzZLEwqygdWoELdngny4oLNiXV2gAmwUDgLk2G9EcLQs4vH4oaw3kPKNtyFmgYpTjkMdY7YN28b2jy6fza",
  "key26": "2yFbYBVE1foqqjkgmTjhNHridC8Y71mJbTbnbjqQnkJAekRjGw3cAgrYEEGWihPFffzDKw1yBMQQNYbYh9w8fDqr",
  "key27": "VECczkqrCdSjJbcJHRWqJoYgwaap8mVE6U3xLaSDjNDrofw3gm59XcKpapXSs7VYBaLrVshP8x6v4ZW5w8KGSpE",
  "key28": "Phjg4Bpb1BrMTq8NVt7h1XviZbq6ai9rZK1c8wDzZXTLAvtFQVznwtqT2xAsVyeN55SCSvETqZDNjsYx1sfuE7z",
  "key29": "27j6HzJ39sLhMEHLec6RqbxY9neLZtM2ZeodGLeVSCJHxDcMwTsXRWsKpkUPWBjKiDyiCcpy6fDGrozEWeTrxAM6",
  "key30": "x5x6NyzYk3EhfPsQGJdb37zKuPbJBKqghdTcnEJ2W1VHwFJ7U7yCWDwkM74bSP9sytCTsGfJVpqkf9qMgrQ3Q93",
  "key31": "2smQfsibUauqitWxLfKogAgQjEh6EBmPyW5RGfusbtCmRFukRvKuwrKpoq5jTmsptTQ2jZZuFGec87bovZm6ERuU",
  "key32": "2rxmJcYy5VNSEyJxhpnUAjq8xQDFzFsBCtWWPNE6qeUdwLqKizAEzC4AdwrLvy5UwkuhKY9bsbxt81V9ji6UaqTc",
  "key33": "5QjUsNC166UngQJcXVgQBdKr3XwrGbXPMCq5j3EP8DPoroTX7x5u86w3vtLHJu1jiCihXWcH2Xj6BnFYzBeq43YR",
  "key34": "3hHrNcksMtxcmMSv5RYQdpuyNEeu42zVfeK9RYW1rupqz3tLwuNyWDtN4f7nb1gwetrQNFZBTkUsmpQgdoAtirJ7"
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
