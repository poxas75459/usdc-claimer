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
    "c9Y8abopGnpmiREiTvifTRYjtepZhu9kkNrfo6U2cfqPoMty3kNsACKcKyAR5FcYidLk17HCTXDxqRWcVa42kXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FF9yuPk7WUm8cFYG5RYdHarBUmbaU1SPGqrqqh6ExPRdLiKWFWatabxjafDEYMDCuxkcviCJ1CaRzULDTmnQKqo",
  "key1": "63CEcj4DoL9pcmfzH5c5NPojmC5oCKEtJwYjCYg7erH8hruHzat3dT6pJpHaaHTxhmsy4w9VK2kzTTbeyuUCr6DV",
  "key2": "5AS6Hd1gPSusVzGBYAxZW9wVoXqRKhitgYPWqWoGtkjEZWtxUJjJGpDq9b7mgw76UfpkbgoGYzQaJGBTznqCuED4",
  "key3": "3MbL3tT3qrCzeVBEwKyukePWWsKMLdnUqARCJFiyTiNeQ39pNUzgCV51pbDSkhsepBLWU2wjnvHwPVnFTcyEXHcc",
  "key4": "67A7VhVxExXJggZXBXAfdjHD6zk8H3X2bczDLRhDWXZufXeobuqEMfMkmsZ5hSGPn9bYBUGuvQZR3BcW5ykp4Ztk",
  "key5": "5A4vMMscr8WuoZhFr1tEC4MgKvErkhhT4e3mWzoYAXhPyPgtL93X1RCwCBMZqNiUZ9cEztG2oaiXvg4eycWeyPVj",
  "key6": "5KpPfMQAG2Hrs3ZBZKhaWEccVFpbeX18CzoeiBUssm8jBm5F7E6cDwsashHwHpL7AzUU4mxPC6oHACMzv5En7ajH",
  "key7": "59zJcQyqbsaJnzJkBYsN5DBCVLiMzrkGB9eVjff1Uv1JrWUEL6XxCWbWTdDqJADiSFn4aYTDERVn2MdBTmK8GSRm",
  "key8": "37HBqdTqLQo1wLoFiUFm9icne4WohW9Ae1z1aL8g1fdAtr1kTzdGCgw7bjxudnuAzditzWURqJ2QEKrhvs3oR8FP",
  "key9": "4kQDzFu4fTCY4iYNGoBeWEQvMg3XF5FvcRJaosN3hVS1EHZG4DQXc3oyoF9i3FXaWWksPxuayLMFyAj9ZbaduPSK",
  "key10": "3YrwzfXar4RRVG8CT593Mg4jMeo4hokRco8KNgnkG8bR4Q8WyeqvpcDpJ22wL6aPrNqZVy3vq2Bm9eU83p46Kd4S",
  "key11": "f7ok2yTmnvwguTyK7yJgKyHNzb4vq7VwnrUTUAb9DVt9uFLE98yKgn9manDQS8LicS6Rn7RBsgwpAFPB6tNU1Wr",
  "key12": "3vwCa5XC5wJ6NvuBU7aWFMkNtnR3r51qvdo67gWPhSagjYC3fdhzb6DFFFqVQJYd5A2g79G7xTE95dSgYPZBWfic",
  "key13": "UuLPRDPLpRbJomAfS9kw34eLEAKM8M4o3TZ7r6vp9TZLesYgxTZrp4na391UFGNjWzMkxcPznKmnrvjVBTWs6sc",
  "key14": "H6n9oskMfgjqnUbrnZFYVvsBda2uJWzxFYJYKDdoaXCLbV1TJukkfyujxdRVN9bypKD8LZB24GUUSsfhDUiXySc",
  "key15": "4E8edLaf6Zesskj4Rk7UZc5kaVyMgDYZyeAh5CCnLA53GV5DcEMbFWik6HBkBXuEtEbMSF2Ewj6uwhFaCkrrYfVV",
  "key16": "66uHECkCDbiZh6wkdZhoUdfQX6u9vVPWcb2hVUvZ8yBXVH8f11G16d2mmNCMg1tq1dz2TiUzbvSUhNxBj5zQp3GJ",
  "key17": "iXrzgWpfLaHaXvFFKdnnDY7pwVye4XkJDAfzkk65SfvLPwhdarM9ukYtp6L9ZJYwDNJ9hxt4huTqwKQ5HLCBYHB",
  "key18": "2Z7RxerAeh39ttCVFHGx8FXoqubaX9Z2kcjKzHGMvoVbP52PYuNtYFNqP745g4Mtg6SZA8jmC2j5CFbouNY6GvqS",
  "key19": "JEmP6unMEDQWpFtDCGStwbdrvaZhVdByGgrDEMyVHCKLUogy75LdkC5PWNYdoSNEsNDpQ3KvAschPrMEV92wEiG",
  "key20": "4TbhEiWDsGG8wp5TYvsMcAwsUYDJM6cY96H2fm8YB83mRnQ6NS6xqkTFmEZnuXWAjqNHXsavZNtZn4Z996jiJxJ9",
  "key21": "2WmuoiRntdEJVBxLLmweb5UYK3zzXWPfKyuPgUE6ByRrEgnRZyALTDuwLkwv26h7hZxFsN67174uGnyikWQhmTsp",
  "key22": "gmpho3CXFAtto7W5J2HgE4pdmchq1WHQjo29mTZDQDpEAUjxKiYLFF5uXrihkznvWaxu53giXiEm6sajeq12BDp",
  "key23": "3DRB8ku8orovD7nizFUdMQp5Dw44pQ2LxM5siBUyd9Xx4BEksoGKg98JwhJ3xvRwMYXRFGofBuwyWmtMtN8SrqDH",
  "key24": "24tLqoXt1pdBhSZ4zUPsCvtga2xuR4ZrgAPKREBKV8sjcs7Cbj8Dbxv1AaZxATEaYKfE5ydesKzFmjF6tCZ3FQLq",
  "key25": "V4WQwiCrQ9vtA4Vi22hDnf8gGRQDtAYjq3uiqMYdqWLkuSNMk1mqXFzAbCaN3aNSMXT81Ukhy2hGzv1kHCCkixX",
  "key26": "4Qr2J3CsZDxP9KjTB9sTHjat3KnG4M6y62TFGpCSo4QgDqD5ghF8eiD9iKYBjsFCKiVuS4mjoV3jv3wuhsAsAnFV",
  "key27": "44UiNZZKERaa3F9GDVQTHr9hmP9Dss3gL2tka2XNEu7sTe6oW1oPgmVGYPkax8H8BsbG62e9beBHQehWvG7rMpN",
  "key28": "ajTB85moAEungt27mKZwU6aVvrEPidGfv9njNgaQXHorZtAkaq84eozbkTRNT8oFrS883iH5kuSiyZwXmKxj2Bj",
  "key29": "3gwYzaEZsQyB76D5kZLeYe6Qv1vDUhHdL2iTzSKm1CU7XzrDANCr8B3TiNgpznaLGkqAu8gs3vxGKq2cUCz6ZUB4"
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
