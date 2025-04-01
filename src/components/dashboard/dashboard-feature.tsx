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
    "49ktftCu8MpVCGGZqP8n61qDB3q95qJAbcFmnN3EcVzP64rrq91dU8UBrsRFfbwg2fd9fHCRauc22AFq3g4y6DPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLxrT6Emavt4PvS9KdJVHhTUVGUNFZUjEdWuDKHZyyQXuumiVSkCXiRrchmG5xVbGP6feV1RYXY25UjAa6e3Gu3",
  "key1": "5kpt6fk7WNQyRauXADwYW2BGr7SCrpxhk7yKfEPKZrpjYWf4p6nJFTP3MmVgnVg6Zm9UPdTEK4tc5bkaYGgim8Eq",
  "key2": "3FsqnEacp8VYe7NpbkYBnWhyRCBTLR9ahPnRAF1BEQ6JYzRNic3yBNB2g9JufWZAXmkzXTJY4h3eDyHuQHYL3pS6",
  "key3": "291iGqgsVzHfVu6awGBpzmGmUBVSPP3XEGcTyVobiTJ3Vrvvp3A8K3pgiY3eQpZ8TqctHEqt9xEn62LqzhHkiSmu",
  "key4": "3NrZh1mvtT5WjqJZgfzWijuiBbrzPMFr5pFVgdYcx8Xu36g6hgi2qeznGmFCPbLifUy2K9yLuZcRK57vwovUwsPz",
  "key5": "46Ko7g1PhgbpatrBFFgXB5KkdRNk8ebgDchazmzUFJgozWGeqhNoRrAFwAdRGU3VAn3Fz3z24Ys3CgZLeQVDvXa4",
  "key6": "3RTd9C62GaKZfrFDHq4KAFY9rjbgd4yMkv589bMXq69YE7WpmnUpTScsK3VxdtB2oLZjsPHhLrdQw6syCApDxCop",
  "key7": "3CZSSUNvFaSv6hZUr6nP8EWBdYKhDjZ8v28kwr8Fpyj6hWyS1HtcwtbLf9sv9eiiu1L4DYCk1cNex4P7S6YhKxBe",
  "key8": "4zVhrDTFD6pHigZZCvXmhs5V8njDqnKPUQP9yyx21FFZCWS3vSfvnhCXpb6Dwd4CXftLZssyLrE3h3PmhG8WL8js",
  "key9": "5baxCmHpum1oMLgTDodMc2T6Y6rRceHjniHU1SKKPfPGJbvU4fiAyXF6kZqbfyHVyrhiJFGXryPrwhqiYsf3uxZw",
  "key10": "5kDXFNVPzx7GkHbn1rWdMsSWD7739HRnP5Jc7FnzobwPdYHABgiPQ3ZMbHjUcxvAPFVkJrVeuTPLK1DSfX1ejjMT",
  "key11": "2CfJwKtUq9rVmYxkNECyKS4c573WGzw9wn1EVkSceusFi78yW9AG4t8NULhD8WEda2vxzUM6J1dP8AHkPaVKVUhP",
  "key12": "4mqft61qbfEL7dLiPUVKEqZHQdVtAfEbUnUKuDMMiYkMW5YyeEDJvJR22E9jEjdLyPZG2fCkNW6ERPujkTqQDDUS",
  "key13": "3oBNsLg9c65xUPH5sMDss4etrW2MtZ7QGSo9iyyNbC3JvTJeJwxcQD4R1fY8PXiRn5uxtN2LLQHoW94FL7f7Lq4h",
  "key14": "xCtR1k4oqZnVoLqoTQdvp3FQyvDXPErM2wnVXZyeLdFrweBKeqht5bz4bhNtM8DTTSB7t2CFVMKKs7K2CewaDAK",
  "key15": "664com8ZVpAQR6gS4Sfn6jzK472jf4WZQpXLELoT9MSLjeqTev7SYns7b52hDPjRxdM6wP6s1MVHHw5V3HKDttk6",
  "key16": "549Qd63Q6e55P8R1j5hGyLsGN7TvmwUHhHRmrwRFKMjH1gvgJRBp6StQ7EoYdN5itvmP4mkz5kPNeR6AeXqdLbyU",
  "key17": "4ePURxd3Dk7C8Y1mYzXETieg49L2NqN6P9uH92TgpbonqpDBK3fz2xfYZ514H8QxCXqqBFwtwupezm4mDhnn3MSF",
  "key18": "4hd1BZQa9PBtuyQ5yRABnZq5asMWpWNHUEAPoM8xi4SURmRgg982aDD4sYT7D8Ah1Xoq6oM1jECiQHmDqfxpdrEH",
  "key19": "5bCrCXD3Ys8Z1duTNpXYu1sZ3teDWYjQS8ZPp3jJX5jm2iLiGMfZP5KKQMdnTm5D65aVgmeztYci8QYAXp8EU8bz",
  "key20": "2hua781Rwym2cxDuQnZHHAQTMCa8pnzsPtKw6uWeVbB2ioHg3Jd1pvuiT2mZoAgKBxsZwnRjGguGaon8ThwYHn53",
  "key21": "DkRgqYnWkpfgrobUA5xSHrkza4zzMzj4htssShJE7Rf66ohdY9wWALotfkMBjjgkWP7kEmi6BcmkRpzyjPdjPM2",
  "key22": "46H6EN977qBDUmH138ZUFAv5zmMhq1Rz8G26gpEBQZ2mYrmejGajXsXTeYtAfoj7dFKU7Pgob5tTRicwqoJipptG",
  "key23": "2bGw16Z8DVFyjZqmUWeUE6j78VNa9Yr65Mnc5zAKGqic4ez3zn2wB289RTT7XYqWJXMEp5evkaMFxCAADLS6ieEN",
  "key24": "3Cj4wauQ5W78WDLj7JD4bvCJ2t7xJ46vL8a6Y72KYMPP4XyzpbB76AoNKmxop5WVyPUPfXRcayEbw1fQCDcvUZ5k",
  "key25": "3PcGwx4dQypZeLWTTrDUTH4YoEsbSHJsySto9W8f6vMMacSk1GDtBDb5wTTy9Axgk391L68FyAR5Q6kCk8Z7sE2N",
  "key26": "2WvSRhS48KZ43uW66aHks8Ex35erc5t1pdN7vsxqnrd4hZHn1aLxAjdb7XBy6UzyuwX5c2Kxpf7T5ciEQoo9KnG6",
  "key27": "4M7C7Y94cBbBum3kww7mrDq6k8RkresyEJ6q57q8M9UDFxHyNDm1TGD34geNQVtwwvKZhrcBQWkra5MXr2Srv1yT",
  "key28": "49FE6BAd36A6jskHSfc1iFdtK1duSmbATd92hDRcLFAY4NQZE238o7umTeyuZy3Ps1nZUXps3SNvriCktp1bqMsA",
  "key29": "4Sxge5XMWPpXSGgCYbRbg4Pbw3YTUQXrqHFf95rXYbw3eToVn2GtTBBnHPAE5SZoiENBxLQ4tNuRoTayygyvPuJR",
  "key30": "4heqeAwZQb5bxSFrQZaBCwMAynDZ2aDbbBFuffMEwcM2BmFjEDuzf87mNbGMFXYEezk7UTKiAWkoDccfJa81V2hY",
  "key31": "4DLGdTsNufj9ePktVuydcjUo8CpkdnbW4W1dTZh7XLC9joq5AHjCLWZzeVRn6Y7ZsbaSLMFN79VJaZ5KeBnrQE64",
  "key32": "2P9s38LuDA2HkkKDYBDZC4hbDzU9FJvjfbF8ApLnQySMbd39pWdtQsN4VZsfhh1trpkNuUbR6jqUExWP9fsu4gip",
  "key33": "DMEWrGoAnzer4KMSyiJtRcg7qnAmNXyiq8qXDF7W4UXfAzSWJGcREo7S1zGQmubMNWp2LKKDrJzpFZmnzXLm6fo"
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
