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
    "4wuCqPq247TxjiTfdYZg7orhcnaYhEwmSScmRhidfWNZtD7pHzhQkwNvLinXV7sVAcAF8uMGAn2T6MiwUEm6AAuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKjKJJnBfS7gS36AneVN7SzrXbSf7PmNVsV4WvLCamP2dZKJVgdygyiS8NHfdJgtVpArykPLymrCs2VYSiGLLjd",
  "key1": "gL9wDriTZHAmurmDRRmGKdwMd2NgdAX466ZAb3wTNmF7TYVXFEMD4sVHkcneZK4PRQynBQhLQnQ3QqwFyv8Z539",
  "key2": "5s24BBqUF8nxVHYNufHYW8i2pYwuHNsk542nAeSupEJRrUV76oVk5iBFdcTqJjUEt6FXHxwwCjwyb3LziLxUz5Rb",
  "key3": "2mK8DfXUwDuaqYWD5DQcmCupsXurBxXMEsg2E9cda16sUkr5XLqaDnNjm56naqHRUMtcA1DE1NuRdssppyGJFCkF",
  "key4": "ocySk5mjyBaQf7E372D1gVw1F1FcNueSaZSf9Q7PbEJ5Tc3bpaYm1pTXmeL5eFFcYirKg1s6bEFAw9nmk7KkLsR",
  "key5": "5WsL5LUK4yihAvVvEKshNWKvGqE4JebjXqPcm2ADZtbkjPsuLTuu4KN2UJHXMhuoE6qZQaeNKajvQZduYqpnnFy3",
  "key6": "5x8a7RTHKdLhecYwPLxWQ7hZCXtTocjs4Gx9oS5RdZLCt14sfXanMMkUAENFQVUDfTDaharJ6RdASfDbGN7FaTVU",
  "key7": "2ASp6BqZJZRchHrvAHU16d4iUXAwNKYze8LrJYsbMYNmXjdJFdeTEXhgkAKSrmoFgAHBkjRwmo9GCbu1K5mDh56r",
  "key8": "4rhjka8y7wQaGetieNuv5UfKUN2tv1JdgQC2wC8CrHTEoBiVSdWN4nZo55qZJjurThYoiBw7BV8wvWTDtMt5xYjA",
  "key9": "4WYoCe8y5wFWvXcsqsy4aDnjKVMohouuAhvK12EfGikdoWJ8vpB7Q7SEzNn195jc8VxPmvP3AMbnMYurDLmy4Fhz",
  "key10": "2uDvPFKp3uSXU8pdVCQsUPWCVCgQFmZC2XHHfcjYiC4Xu5rC7seoNSiAZnUonWaHuZxhnRHi7PNoSaBLGpd7M8B8",
  "key11": "5JovM2WiV1fqDmZzDkR1ucy1RKMsiaLGjoc8exwQRfd3US4J3v2MMcC5tef9eqW7ucnDzLKVBp5tQfJtZHhYN9sN",
  "key12": "3p8rDpEwfBX4xcNPsQbuGCqbZhXarN8e7EzzcNeKKuxZ5dNbC33xEVSv6y5Gev6gJspqEMp7c9gj6FyY8txwnCoy",
  "key13": "5w3dJxpXAxfkvoMLCh58pexRasmRr6FUdWdvato8nPGHbJaF91zGTDsYsLGpQqnJFVbivDUhjdes6h3tWqgPtwJM",
  "key14": "hF3YvuXwv9BSFesY7bHfnWpDK2jgwZLPsddN2vQh7ba3Hwpc6ZN7ojqwyBVnwfXfdyKB6JN7F8NF52CyFi9ZoqQ",
  "key15": "4vLjgkMv84TvHyTHfN24vSc4kWcKLVasjQAfUHsUwuKq864LjjgnreqcZVmJH9pKgrLmshMwLH8dnKyMno5r3wTo",
  "key16": "99FN25pshgNAmWVB8MTidrZPt8MLiuT5JWCKSgMr32unRVgxVg925C8bfK2c8iTgmQowvVk8eAa7yjEuCBVv1fZ",
  "key17": "5LQmgEyiimdUydaVQtpjKdYsD88gHqDFZ5cfzPfJo3VBGKczw6HAVY6NTeksXLqinTy86mooiTpAY11h2Qep5YXK",
  "key18": "4BGkqQMmaKzHxrnrDNQkEQ9cHwtRbrXtTTYLvkA11b2wsZUfvxYsFw3z4jrzpzUW93bg737UDWzrbhBH2Aa9o3G2",
  "key19": "6HEhjm4UFvsSDsfjYNkCnJpc476ubxmdytZ1Cva9tdziieSXJVqGi3BZ5vz3UCtBLALYu5Udh88smWjLN2Yhbrg",
  "key20": "fCyWL6UTeB7FiSHZArEeW1QKdmGZYEFxgEu8erKw3ukdtxFN3QZ9a9i2Zg3KKCd2pc6EPP4bh2DZf4qgB67c1Qk",
  "key21": "5k2JZZJXm5U14r9RVZz6tga2mdJvPbTuUkC6xehY86jafLumVQYXJhvqG5QNFPMYV2mreSqvByuVi49gdDt8n8uK",
  "key22": "3suv52t93uRk3YcPbKCK1mJeB2otqgfz9yS4AAKi9eW54yERcJ2zGpi3RwM6ZUje4wXVMoyLK4enLq3T3eSunYrU",
  "key23": "49nPVZK486QVc4ud25yQRhYcrodYKQhQjcdwQuAajXwKQY6tPHdHC6Esq1pHwU5m1EvJpZFYiA1k665J8DWAiHEf",
  "key24": "3rJZYHM6McobcNqksQeX42XmtnSzrxjUhx9cqW3ZXFzENpBZ3BY6tbduLE1hoSKrBpQnvbSjyscx2fi47ZYxngtX",
  "key25": "2ug3eShFpbWMSNG3AitnWdXgiNb2bPJMVGChU59XG9eVtKc7ADWX437QRCwj7iniaiJAZKiWUkmbCvq8nGSrHYtE",
  "key26": "64e1ZugJnv5ujnkoamqM9JRxbCAyX21RTf62ZPWexjU5kmRtYwfavbx9eTCjhaGp3NrfN8Qzrer12BdBvrhF14Af",
  "key27": "3385VDvrqfRecv2jWHMzFGvrrYgHr9jUKVWoHZAjTJ7HYXo7c5RQDBhqv4gxdHdHuN2mzoPpp5tqBzuP4douMGgH",
  "key28": "4KoLzddBmNNyJZFvUYcWhF3uZjG15MhiYzctZAQ4L8E5kmWyb3rQ967DX5VwAQ8B79vVfWciH9cxnvbqxinh66Up",
  "key29": "xjJucv5uLFRd1m6D3mmpXEHqSNcUQuyJkjW9nNBPAakorXWtpX1giFXy8mTkYKvtTP4ZX39akzKv458mQ3un2gA",
  "key30": "4uVLnAAueP71i3T5spDqySEAGqNsyefovknhHqzeU14LsUVZvzvd14ZZbBb2ttXRtYYhvsdutYG5Uq1G5RB31Ugv",
  "key31": "3gKCDgKiudcbjynHNayKa1LFPzqNjmfJ5zRNMpPsaqWgBihTdKCn81PuLCvyUugAPGWZSwXuybKKwG52XMEasxUQ",
  "key32": "2FzbjcW2cts7kJBfG7spCK6pkYWnfn9bXnLLRXgtYaGYF66f2qP45PPPwMv2rkSdUi4dMkLU4qwN68VszxnrNVmr",
  "key33": "4FyfzNjcuyWn4RS4WYWiB7hgad2pfhxDPznRMBCpCsox9HUayAd8JYDiZWy9XXQbvk9zD4ubhuZT8XiDSjbXsxgG",
  "key34": "36RXYW4vTwy6qgJYBuxKtPWt4uTwSiJFU4go94mbXYoXNW5sRFvx9uBaTKDEbodH5yV9xn9MVRATYL5hWZUqyTnt",
  "key35": "2hu6GW8vytAyRnUXdmPmbCDmY1eraYwpRAb48hwbZYiMHhXtb5GMotQm7MGBiuwUx64i6btbk3eBLPMbmq2ipnbC",
  "key36": "31UWvyURgBdF1RfYMDaBF8sdCnEDH9ht7c7mk56wLv37DN8uQ7MoPg8WcHZ7bxtE7M3bRbMTbnndLKNt2Wdckwgb",
  "key37": "4SQB3sf4eP9aTHfFYksBccYk1LgwdHZf5KCbd9WN1qu3efiCFLswQ41VHDHgVGrn3d9iijAn55we5NazXTnn6XGg",
  "key38": "5rQLCRb3XrCk7NDpaUib6tBNdKiMWJMdFKq8aArDZwuVPBVgWfZ21vnvEf5NeCFtx2F6rFg2htK6kXJq6fqgmVHd",
  "key39": "2AqHubRY78kpLt1zorGoMrBJYVvqoKPbnh2aSBeSnzbxUuyuoTyCg22mKhr3DZKdJJeL2u1t9ej3yzH8smxrQBNu",
  "key40": "VqYrEbUQKLQaZDgYcEo4vNCh7ToeWV3jFnzezenQa66XBv8zkew1H43Te1irWivrQSKNjXhw7FM3kewtf7zJiiD",
  "key41": "4Ejf5UhczGQSiqeGswwZN3JsG6q6hmT2grxU4oRNLCs8eVj7moPiS9WKTamV8QEWuh2W9A9rjNPNDAwUy2vH3ZMq"
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
