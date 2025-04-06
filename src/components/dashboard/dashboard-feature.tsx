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
    "5ngZPRvgyG9RM5YUpZAoCdAo4XBaZupn6zMHRujBndoxvsyfueQ57T9fFMHgyuF7BJtyJy7KpqfTHcQZw4Noxp7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKtVTBsDC5mFkUNoXX7uyPrRdrYM4oAmPpqBVKdKCMUGWLmtgqg3Nv5QBtjkVNtv5m62oAbqhTwTSeRVsBy7SoL",
  "key1": "5GJ2SaautLHjUKNFrRovg2SZ61FBWEDNRVVovVgaRQA1tpiuEfF9UCZapgk2oRXww41tYMKJBZDPZddLBPjTmNkx",
  "key2": "596BGLTnzG32v2wCeeYQQ4gqTaBoJknp5nsE96XXp4xPeBaRk3S9n1UiadY7v4hwi31QGPNHH3qNrhp5XuUKGp7z",
  "key3": "5g5u2vJAyipQU8rJaWvYsrzfH1wiK54GtGDFuAJHWPon2HeMvUGDRj9NygyKRraKTCtM4wwuCMFjgHZZUygsZuHE",
  "key4": "2izTLC429g14k6EhHaRHmTBvmHMJqedJo6x6szFD6J1eJY7AzRt7NkYTKCJb2Lw7ypJ2FjvXuuhGQhaTqfSf1Upz",
  "key5": "kLsXdqQDTcpSiPPQyAwThbxXvZQBEP9GvQPVbypWcCEFgjf2br8hKbKtgPXTT2cNQchhgHgZ5uD9EH2Ytv85x9k",
  "key6": "3Lj6Ub7BdhVgwFSkWZrX2Y3hxSLc8CWTWp1Tro7uoHrZB43QsXWsjB1Ja4UoifgiSFQDrka5VVexcdcuPQH2DpKb",
  "key7": "PiSUeneDTmV5KFrFzGwC6uVg6NZpY2cUn5QpWXGsC8EgkQJzfsfWU46VixE6tPMyraAhrUXSsuRgksB3PC7ySRU",
  "key8": "3AthNB7uGFEzLS4uPCfnv8KFSeaLj2zqMzbboH5Y4MH8VSaB46JLFBe79XSrg2EgUAP5DtxtivZk6sL9t1yipfLW",
  "key9": "4yF1tb3Dj7YQggxbzSxd5khmzyFR7hnXM3uESyGFuVg9LPdM2euB2D7MTLgee2GiVJey4WpTkd36cYptHoEgBagY",
  "key10": "2GvDdT8pjLxvcb1KVFdbR3J8EfJZvRPUFuzJ2fUSXGQxfGtU6UAD8QGtWKWfZ2J5fuvA5fY13TAgqnQfyyqLbbBN",
  "key11": "5uQEvjxUTSUFtksAsRXkJAbbWPyv7qXGv8VMu1N9KeuKQQTAGbMSTWizySnzav6h78NkgQbxZiVV2twChGEiV9uf",
  "key12": "3cfW3bebEPPUFEuseau9GP9JvQNSBEd5aWhjYNGVtrkcfcMJ2skREK8rfxGiTxw4P6JDNnBe7xjre3Qx41r58afS",
  "key13": "J8FJNsUpEVCFJiLPKZ6KqMcacn58GVNAtfpTEdsn3NYUzyrg8DFjHDaqeZ6bZUyh6K6KuuvrUg5ksmvFAKMURJ5",
  "key14": "4mHVmMEWQajcnhQ549zB9mvmUvX4WWRejg4bvubyR11afmjWEMZxpSCghVUkofXYJ6p8PmXinGKDPiEWmWSFWncg",
  "key15": "5ooB69TNsRREpnFRpnSSZz9xkNbF5347Fuiin1mU5LQit6DDFWe69TxH29KgypKNsFebXREbNiWtmAkeR5D72XDo",
  "key16": "5AUkfToB3ENBe21kV5BUFNFcYYogWCjJa3p2QkTLrDxP3ZR5yCkmHV2h4uw3NeNdb8VFjDvNmXm1KohBFnmWuh6K",
  "key17": "3rcj2HXZsRisZb6HJn9BANmLMcnVsezjXh7MMXHncBtv62uGBkXkhSMm9qG1qyDwu6CGez4FamFyFgNUqWdwkMs7",
  "key18": "3ESByQgDXRQWVjmgDw6YW1dPdBxDJcPSCU7Me53dkCBSAJbYXm1P1yYM2t6zCPShRMiwme1Jh7DW7JvTQKKttw74",
  "key19": "31uBDvu9JUvuMdw9wFRgnYVcgomLqFqPNQxae9wAoouvg1pJjpweFDkujdRQvQSGoBzFRzcz3Tv7CkxCddtPzemu",
  "key20": "u562XcQqJC6voJ5PvQm1VeyWNxw3a5mrrENjiASuJwTimVU9gdnoMYahPdhDXUEMu7QTmYgCfhraraN2HGAf6pv",
  "key21": "gWZa9nmHCD3KmCdE1yCxMTNEgv6yxccrjATR5wVn9qjWrxcZshzf2vBSaZBY6DV9uDTTTpfnN5qE1iuHiFFDQdg",
  "key22": "4ByGjBByvNfzzMUH3dW5kTMMLAWyi2nNiDuMd8sopBXnwGf6mNQNero9STAFzP5mo9UKgo7yNvhypCPPkSQRZFNE",
  "key23": "5jCucJktMovRxZJEQJBNRmHAja8VmxAhyNZLLVW8YEARq4cLn9cBzrVxjLHrRRizxQ6o7gGuaBRaazDxGBrfQ5tK",
  "key24": "nLZcm4am6W2bvGjiv5VbwLG8DxDQT5N5CQ8zfgwGCXxf9Q88Jeb2dpjCq5Bn9fCxnoGbFHuRS3UB6VexoCzQcbN",
  "key25": "2wtibPfCiHSVS33KVifDrYDE6Eh64tKxCnydLK4vZEdrxPBn5JMgSctCsjikiHXmd2tCDLwVAsH6QjR2gfQDxmiL",
  "key26": "3xwPmXMP2n1cm5vRTgbtwbYNHDU2HneisZ25yYTndnb2wedaw6orBD5rcnvTZNB9ZybNmE8M1WL6ZbPiHnBd3vJ8",
  "key27": "3DHqXfRXhyATdccAsgyGA3NGUpWoRXjBCFdWZwXtm2iiZeeDWRYBPxNxK5btnBvFNNkK7T6dWykDt8qi9EYYn84X"
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
