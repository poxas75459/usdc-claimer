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
    "44BXttTR1WZfV82AxhcG27Eux3Lf3bjVwQAwidmV51qq3Mz8c9YTiUhn1HSArYok66f19smHgigMTVw3ScXiQ3qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRdiEoBTVmCbpfabw1xnuCzQWifkDkHfLkhtnBeFmKYknU8gnNkmmWyA9V8YkP5MYJ1wMuvMiwFz55V8Z1TAeAY",
  "key1": "5Tc2oBkvWAMTk5g385783yQ49dyy6ap5YQY1KLNJiXGvvzrE5Yzn3PxFYNaSZwyosdjj4LjfJQFL6ToFqoR746oK",
  "key2": "2AqjoRyrDJyzL8RbegEXPM6TAHyW1p3KqwU5fX7kmoXJ5263ssCbGCezFYsY5d5Ax9fWcyYdziJQRD21w8UGpWw",
  "key3": "5cRdDBxSojCQnywGFyPskvdht7F5mvyu13mwwhcesthcrzsoMbRCmqTCYkdPS1BuyEtiVQPtFPo7d8b4gZsXSJpX",
  "key4": "4dV8wokwyQ9ReKLAL728813ZRS5BYuSum4fzc2JTAEf7cdA63dQ8HKVzUKJsty2L4hYKre5d4zwVujVdNEEPezEM",
  "key5": "2U7sfq9ZvfNmG3fhkuLynCbk6YtpEwbxDVGKSDLCuXfT1FzYk3m3Uvty5nnbjU2tnXoQb39BZmAYKPhNtek9ipgq",
  "key6": "3C5SmS6K2f6YqsHQHH8BKooyFXZDUdn48uLrURp8694af2Q9q4y3SDfNW8fFou7dxAG9HCBtyWL6f3pbJPNrTV4U",
  "key7": "vqUaCCyC7rQZoPdDv9zKCXfkLEx7AFoXRdQQFywpbdWqd2N8gdjQCGrs1vkBXu8oMrk2JFSYML8mGacJH4Jfu9A",
  "key8": "5T3LXXWWy2YdkLeBcJXHep76GUQVfpSG7GGrbMMwrpQyre1RhQfYfeQ496Wxu8NUsGVfqnzND1x9bNPhgLW1pQM6",
  "key9": "4zrwhDFZuG2H4cEvYW4fCHw89jZVg9eTiH6s4W8yQqUUp7P1AtsKUQcnU8MNMey4SjaJFUvWoGtPXF5bNM2DCWF",
  "key10": "3tafy7UkQfHFgMsVRWgEp2Q7SSqkQRereas5KZa2qQ2Z9j75ZYoSmjTLjguHs7ixEk9EWmL5xaY4wXgXZFe73fTk",
  "key11": "5SSoWAsAfKLzwtyF4T8CbRQUpoGudMZkwot9GRqKEHF8juQrurijbdpCk5LzYQkR4qeKoU98xVHarLB4WNGS1tCo",
  "key12": "3KVxNQwS4tcdprJY9V29pNGxfu5ddvbBgrqSdezU7S7FiP5ZRLvCFVJKfy9ETp23mSBELVxQYrgMYMM4DGJy5YgN",
  "key13": "4pZP1tA6BnbbTovMQaL2o2zZYjB7uziEuXXtphaCjwsz7Wav1Vy5UPRUDa9TScZrxtevEKgpsKfNTH2d22WvQ47Q",
  "key14": "4eh88Fk3jcA9fXXQKbidDHGWBjWWTiK8YfqCDcsxLmDskfPVGFURpYzE9v4AmVgqxXETYX328aJaPd2wMshyzg5J",
  "key15": "2Ku3LkcnmSvGpC3RMHSV9D4tocLFvas8itZcbuESVcEXMUQg4NpcjjjNV2UwP9cuD94C9GUVKWdq6XEesLUMe5sW",
  "key16": "2724NoWeraXpqycreTA3zHPBSRUCo6SCkiFagUJeKHaiyscad4nuMVb6o9MdTUxeD1mdKjG6Xs8j3KgVgwwrE6Jn",
  "key17": "4rtHrydkR6ACVp28WtUmdiM24b9dw9KhKSLxuSHtaxqucZykwXttUNcqfsjMWqyAkiwUun1EhagXSM8mDQdkbjpX",
  "key18": "uHgRUGQfsRE4DtsyE82pZsDE4XCb1o7N9UwhfK6gjpo9CC66UfygLboBGUMqLGb4JakfbH5WRtJ2F8CA6jLXGeG",
  "key19": "acGtcCRRNEYw9bkSpUr6YX8WELHHtqDU6iVDrYwj8HSK423jACFS4rN2kj4pgFPeHK2y8T2byaFLHWuuYxU1Frj",
  "key20": "3XjKCRgSjtDaGXGqWbeVvQBfSvedxjC6GA8CbrfqAYHVGLHWRps6xAhufUZtnHwzqUX8dbTZNmnEjxb5jVaxtmqb",
  "key21": "54tWq5soc1qD9ohDJ1GSsWnqRQmugpHG59po1oAWLfPMTV67NMAVqhj3oNRK6FMt46xY1LTC6TVgCtJ87oAgMxmD",
  "key22": "2qwkPi9pk2L5Npo3Z5Xj7xymrB166EjR9sa2JwLBvucMmtkBeaGH8wJcbbcvvJ4cVfxEo24MTkGxYTqRQYqrRf7g",
  "key23": "4NDcSrqL9tjUTXcee71pWxbqLjBjugJu4R6XkYMzw5ZtkZ2AdS2WhYxjCDEHnRU3oNsKSBi77bSj6YpVdnHBuRNR",
  "key24": "3DAEErG4UmNEoMZuo8dehFDQdyxs2rFbijGQTaENXD99tWmK18XwMtqNx7beXz8CZtjY4V16RZYceeXbeBud1ojz",
  "key25": "3skMFiJmG5DP3hZxrorQTSwSoj22VHyFFPan13rh8DeC6mP6ay7cZeW7TT9ncJNc2T2d6Ta2ioSw2zPYfKu1DrMn",
  "key26": "VpuDKZtCUuVvGgUz497NY4xJXyrX8ZyYy9zcpYvVnPFnT1mys7dgbXRfyUEQ9HE32Rxx45DPVntqYd2z1zwKy8h",
  "key27": "4HQHQZrtFjUSMiSHLwknEKBG4JvjVPArZ7Y38GLjYoHJk8HDdwXaZsUN5yJGaRxA6vAA5ghEfxuBKpSPkGseXYnx",
  "key28": "boWHoLRmtJBGicmMVaefSHy3h6iN8Xum4FhAa8ryuEdSxm9i1BpAur8DCTUtE8rTkLSBQe8fG1BAGiK1aVkKMtK",
  "key29": "3eUonpo9hc4tXdtQoGy1KZBDNTFfQ8B1ptLDGDbn7zBVg7mR5QqUqCFn63foR8NSW3fMPaJJgUhWBYYF9G8UqdqC",
  "key30": "3TUijdDA54McMH4RUZKfCzYfugraqBz5swcZMKCpv4VM7V8xzK93Eg3SjQfmFpyHbG9XCrTckHtYubJFcGMx2U3r",
  "key31": "3ovfiYvRken2nA6BL5hqsFD9BqfzChXuhKqpkdtdNa11wsnkrNT3PQGPphuiMNmPKdKFvMEGYBPNZdeQpvPCFciZ",
  "key32": "1dDGiAf1wWiQJkqHSmhQFqSGdgkdh66Dtt2XDDm8dRov1XYhTVykQ6xKXANXYiWFHWTpuTT3CgxnQiT4vdzwPmL",
  "key33": "2wgLA8UVCcxPLuARXnHdHcQf3dtLWU1BChpNxmqkF7wsquitGeW6DXq6J77dsozpnERrUT5yX1dYieRAhCZrnFAw",
  "key34": "2PKtiQt5YCJFGochtJcTLo2KkiwuxoKk3AUpq2aocQdrKYFaEmc3LWnNWZTMi6uTufwWewu8KjQvwHpsHtmG7yZw",
  "key35": "54at7ARu6toNQU4TPFKsPYn1BxX93X7XFW65sauXmWwgG6wQGQJtqUpX1JBPkDX6XYw5MNfmFodEfwz2hfLe55Po"
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
