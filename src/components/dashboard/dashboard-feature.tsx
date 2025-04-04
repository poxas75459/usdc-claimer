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
    "5e3WkvUwdzrfRVHeSGqkAFCuGeR74Qd1C1fYNuY7eZNjvEwgyi6oTZjAmzQCQob7yDZ8PsbQPj9YQjNVGnYNd4Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozGdo24rvbGSonvpqADQ6NTTsv47fFmoCXKhSejRfpr7AA88jT33Q7YSXQxKLZHU1qseUqdTD5woebktruaCg2f",
  "key1": "3u1KBqRNZsBsy9JR8iG3gsKg3tjzasn3CrH16mWuXjh7AgAQxET4mhhSBMJy6xz7zy48RCiKBvyv1Am8pz8KDN7P",
  "key2": "xMQrcS67vwobxF1mcd37GWzqa2VhRhpYYWac7s9CBA7LrgSnBYky9WWi6djFsocUYuME8oVJ7M5bQRehu19ZRrF",
  "key3": "27kZbsNyEDYyLP2muWKnmP7hEsSggfckf3TFGr2cd1rrEcK8VbHhuCmHGi162umbdFFGQywV3XMBTxBBRrWAC8xi",
  "key4": "22i3Q9RyHjfgDYMHiNVu42u9RobrGKqdfFAgDW1GiSdwFnB1uqQdQK8zCXjopEKdSFvUgD7GiRdc5j78VUVDVsib",
  "key5": "44vBbTioFSVPuPJFnb1xEqSU5uep1xMdryPJEEnu1SZhzcFyhi5NCa4rzWG2BFmSsuetjarcXAiVf7Z5cu4ZWUQQ",
  "key6": "2zTbk7kaCDh62DV4y7ChXnNn8xSZEJhbuewyotqncc2crF12xq8uHUcP793rmKg1kXonyby5dpVkbiDHh4E2oaF8",
  "key7": "2PsgPGauRmRv7HPKZD9ZgCUDBj1aUDRtC8CSgWUmiWrcZv4pXuBQSnhPspwzV1zNniiqsdTcfz2X42k3XV53ZM2B",
  "key8": "23DbiiRt96EL5RNoHPeQsK6UkU1F466QW1qMzU8GD8FhqpKQpAMcVUSremNdPfH55pLnheGhV9BYUVANRXLXo82b",
  "key9": "4AhLin1LBRSDNmyXNgevuVaE95m4iv35MoPgff1GctkL3NKXs3SPzbcDrMgsfGqZm6Agi4PRuJ5rdfgjiDEydjgE",
  "key10": "2yCfk9kGRUGp3KUbocvETShFzRayg9851czRH7AK9VhFvntFiHskAfrLbeXKWgGYmwh9DWzd9TB4uVDbF4uiCTLk",
  "key11": "5HSGSThcNVDRE3M8QkWf52ifq1UYVksbSByVvu3UtunXaxkbUEgWXMHnh21rhWQ6Hhjvz9jWWifzEpGsqZxk4fEA",
  "key12": "AicwbP2xyn2f7KGGcKY5tfUPTaSJ7FhjjK2iPDTkJ56Vpp1nBBg4dTHH5SmKaGLkkTdMxKaP71oc6bw6MooV7Xt",
  "key13": "3tD2AWpT4SqMTR7oquk7pDwnVA47ecFGZZobdri4GUeTYjGaGqc5NzaM9ENpdRVHVn7ow24Khy4WkERPm5swbMjN",
  "key14": "ApXnnqxoVSq8T9BMQUzdKBz9ttadsqygB7216GC91QSYqBGMURhwx1kDNroCMMJqxvd5sLRRDAPbLQu9Mv4vUJv",
  "key15": "5oFJUppopXcayE24T8cKfTnjirnezeRBZApEwbEGHKWFSLC88rya2MLv5vtRBahWFsSS8FPHzWSmTCvnSvycHet7",
  "key16": "3ff141Y9TUbJneu14ELvnDWtXbQhUoRF8HjTE96pHR4VwGZHCrJWoDzopGySgkpmJEfNxyLJ4LLb2o4kBXtuW3RH",
  "key17": "4gETc96guWUtik4b79xc9iZPECFLbs5wHRy9RGeEcTi2GDEUAj2sP13LGT2JkETwhG87FPxz3d7kFRsM5i8QrfQG",
  "key18": "3NWu5SUiV1yjBDffuRnM5JjtKKdqVdu43zFf1QsdETbgrvTjmeuyvn3MxKmSB8R4hUtGTSFgv7kkw92yEimwWtaa",
  "key19": "3ua8PNAttV7Pe6ZUxXE2ERNw6ES1rwanCqTqDH23RkNgeFLGpi9mVc8nA4xosR1RDvfBhG6QVXhP3XBN36UwXpr",
  "key20": "4zHiDYkEq1nxst6E2ETGuJjzGZzJ5gF36CmJu9uSD5dYchnD6nyxZ5LM241bGg6AUvWKKbp3SDGWy6CrpLPE7eYo",
  "key21": "5NbdYduBsv33AT9KNMiB79cQVpEWt4uqk3TKta3GX9H7mcJbcEaUThkvcRGndJ3xGqK1SMXRZXCtwKwH2GGRFGL",
  "key22": "5W1fb9Yd8UfpmSCDtPLwy92m5MnbcSKWQJRuQtugXhbn3vj89WfurctjKMWqzJ9zBnt8WenDeFyZXjNuoaifoC2c",
  "key23": "hoyUgZdeYTg3iDAL9QYpESfexADP1myKjQPgBBJ2KJnf3u56XgWrt2yhtdJgVshSh7chC6JzLAakd3JwzvK5Ucq",
  "key24": "44EjHEez6m5h4thSmNxrcVRQ1YF4L3pJmxV8JRKSM7bXKqm12gYDHzU1N5K7iSxhStk5717yJ9phQEzS4iq8RQ29",
  "key25": "5SBbYHqF81JatCifdFt4L7TjTSAgUtJFyPmhvT8cKKLdowumUKjHfXTS942NKRxKitWNAyP6gQFMFfpKoJu94Reb",
  "key26": "2kWarg9uMGwjdRUPDVyxec3jbFv6SsAw12TLwZoCqRKkmiJPc5xjiCJiUPGkCBzSdvLL3REZxsAxpoNFA3fwkxbJ",
  "key27": "Zc4qH47tNXPDUBED7qUosNiv7iVTCP1EWbH4yyHgVGN6fqxi3LUQcB8xpukHNZ9T2V9TZ1hb9Gee9xX2P5uZXAK"
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
