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
    "4N794sUoVwd3TTyZcoeBPj19ZAw8u2tFAxjYZprDeSejq6R4pKBvPSTE9duQq1e6PXbM3qJWYbj9joYaP2WqR3aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqWWaDLdecNEH1hB6xeqduEmkzGfLanVQpd39vb1HTQqVBDiiPBXE2y3RWfjHpnQDfVb8SksVrtNatyWykJamaz",
  "key1": "WF3nHeaXJZDsdVNHMLBgjQHVmcVA6U84yFaLqHqLgnDntwrKiawjXvYV2LU7uAqDgyto3R9tX5JNHLA9dZmYob1",
  "key2": "3QCdsL9pP9HcuPBUwHLfdCs2EnUv4ScyfAJr6r3q9bapkcCtT2AeWdC2La2BQWc6HcaPqeeXwmwast6bnFVnmzJa",
  "key3": "2QfV1hPqfhKYGAtvfDQw181yfyNf5tytXvutzA4ThtohCSQTdbw8xjsnjYHcG6CBkuUWNuVgJghVDSVCCoyDEE8r",
  "key4": "2nJ1JLEG7o5tdLmVT7xKg86bzVhrDbXh164GQUPRqYu3ymduyS5eh6i65xwc3PzZRGHrW5u5k6s8Tuc2kpur9MVR",
  "key5": "2jjMuxCMV5PwWJe8H1TjWBPis8DteXfJHNcTYNjpLKYnxbFL8cCs7ynFMbi6nmWHhtn1Eg67NxP8XJzTAp8atSN5",
  "key6": "wTRFc9oLGCjUsjy3ZbNQxZ5fGA6QJnyErSp7cxBDPwH3WEEkWToYNjijndaGbHzd7BefvAZ1FwU7C5CC9a8t9Yg",
  "key7": "nh6bLzcLXKov97yLudtshiGfwVXRvS9yQvTZDHwSF5RKGGWHjb3uthQKS3q34Tj3ZeANG6ZMGCbxm1YEZ7fZcPY",
  "key8": "2tvs2BhA3aB5aUoa8ZoC6ozCtchqhxrm5q8MH4NwrHP82EqbhtJYP87D2vMae8t3SZa5XW3UsRumC9gZxNejgLQy",
  "key9": "3Y4grfMqsCr9V5KkZeZRX66FwcUfaCapDhBRyfDoaequWEoNMa5xyjpZeDfRqRc4Mfea2n4iY92fJXNMDUfRJC7e",
  "key10": "4vC4NYQcgF3qbDsW9SKRcoMFa25NL82Vsv3GmbsmDAJLe1czdzL7BqiG9YMaEZnaQzMLFEH7qNt3XLMQtfyxErBv",
  "key11": "kXcWNcy9d71nnkPQ6vjuKNi2nBQKKR6hJ4vvwA8ibEJ7Lzk1QoBHGT1mNK9PdbEYHviF36m9hkuwMnPftho7ip9",
  "key12": "2LyJHr41Xs9RwME6ZvxMhxF1LFDXxAYcppGgGLkt9hMGwU2HTpH8aEKoe2Awin5QSaW3Li2KzibTeMtN7ZrrvnYT",
  "key13": "2S52RiTB9AnzLLL5GEUjF5Rbbp2eqSsSYiJQqmCNCAYHYW3oB9xZD9oiEajcir3HoStDHnubY6FffV24jwabR9Ms",
  "key14": "4R3JMwHUzRoKrUMWcYyRnXfgwe9BuUB1H3XKN8afs7vf527yK87MjdCjPA7fZc8iUVbWAbhGwB62UDDB5J1LKVCQ",
  "key15": "TXpD7Zq5AsZR4GyhKBbUcujfPrGNnrByjuEYZRzWtvsheQqafCt4msTCxBFJud35HnV8CoNFpwpEoMjDFoxYnEC",
  "key16": "4BTbKL6K6Cw4PMN5jUwzxYCuHeaV9TJCCRH6gCVok7ogDvVa4hXZLwePhfBvJ5o7hHY2kG9iVdr5FwG2JMAMorAD",
  "key17": "5TGR3LAfYMuhSUY9mjvQmMx5iRhpCgTr6Rc66wpGtWbNjUvP4XnLCLfkojLAUdEWzmDjbiwaDw1ibFrK25nys5ND",
  "key18": "2djFh2NPqis4U63ArHw5UF3DAvK4sLHZqTmJTxLNASpPNj5guKo6zn7m9Ajgo5ZRkxbzJiRDSbZQjboESCEUxRnM",
  "key19": "5hrhdDbJmeLWmo6mTBk54W9bUmNkyys4TiSBKNxUSuWJdGneQHqYoDgRfN292RWEqUkC8vRZq1WufpiJeRUs5ByB",
  "key20": "5ef4YGkL1ypxM3iy7mgB79JfqQ5fee9YD5AcVEvVM2odUDna48HB1JvQ1xKdfcXhg7zcUanz4SYo3nD7Ta9AAQM1",
  "key21": "4ZR6i8ZKYZiVKoEZHM7eDgGUeNtr9K1XtXhX9prg64bXZAoJFnPWyj1tqCgtkCGp1SnzaVgr22466kHBdCZTn8ox",
  "key22": "38tcbseVWhDWjc8TRCknGryLsWSteXFKrrzpcTEc2bMr1JnvLfJEWTjDPtyg8XF2v4C1EsALXwToUyAFJEK8J5Lf",
  "key23": "2ZP9yXt9gTxns8tj5vK6bejtoyDLGmM51eRUJDjeyVKTXRYss1fk8PCFRbpp6NASvgrxhzzxEisT7eCXEszK7s56",
  "key24": "52zzWePy3P6bhKdYNPGSBAkVRG53rTxcnpJQ3MiMrWHkc8XMCjkHnviXgTQ96fwx2bqzbamA3C358CGMmViyigpT",
  "key25": "pdTfrc7kFppxMEUzRqz8NyjgMv9FkumvPWy4S96GCTkHRnK1qCBFJ5EWDHioeBHFsRXRnTd6nhcRFPx4PbQLpvp",
  "key26": "2DHWUDC75wBtcM9eHE2mmQ5GEuDf8xGQa3YHwcMeTGmvyao9dz9aWt7htLQcrqB8F7v4CR7ji53k5L8tuxi87moV",
  "key27": "464eY5M1pd4jDMJ36KFtaUL8tJSoGHwV6rUX7EaLonXw4w9qTd7SozfcWPLdMK7J8Nzd36s5HoTPJzgQEBKnzQnK"
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
