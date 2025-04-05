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
    "RmnCb5pkbZs9CHQht4Ja3mrK1xWcjTwbwzVr8MEJwrBHxC8uheSAtG4CpkSoMRFMSz72J79o7yvSEsJxXaNkBVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25RkTg4URw8PpALm4djJeKMxZRipX9aV4uovrRt8ajn7717csgfW4eBMhDSF6yqbd19psLGC5foeUK7B33vJ6wBe",
  "key1": "icbf7P1dkvEJzGP3zgXchqsy1x1tUkT3kPieK5SFhAA4WW6n1MPs3MSEZjEDLLoksYuUcXP9JRakEB8F37UV5VX",
  "key2": "3Tff7MSiwiuFD8RUn5QCJypeSknw5DxU48DZnaAgpCfnCFL4c4S5TUY4fuQQbS714B5s94sHi25siUs5JiErNWbD",
  "key3": "2pMWxvftg6X3iH1de1eBrzQTEiEJ5oSh5zfDdrAT13HEbFUujhTh7FCjZDPkBNurBxxWJ9EubVH4JBgAHs5HiD18",
  "key4": "2NS6CRBMD1LRs2psGmesgAAXQBJoWZfTYkxinnqGzw5stBy96278c4AQjLhkF8a2wNPbUqPorZrUnfsKnUnBdpaZ",
  "key5": "4Dm17T5ACtVpHD42GjkJfpp2ui3cnQR4jPqedf1qxfXFFb7ExSH9Sw9W4RSV4w3Grcm1YZuxa3b8geeXiRXwYuKx",
  "key6": "2zyhH2nbV5YWj5X9mkBYDD7DEqVN3VhbGstykavkjzHEAuu1jSqv8n3YCFjSmudcbcVis5pYBQczTZHzAogpynG7",
  "key7": "3xAxz5sYMMnEEcwhJW5VB7WHtWmFQFWBA1eRa9xjbsi8YyRUQce7LDgbbHnDyfbGv1Q2GxWk71D5yamKyGXQuhv3",
  "key8": "53vPYPQAQmDR34PUE96aQzFujMgpo1qm8y4yV6g5vvDZ1v11AsvipCCTLBV7L8phmgtSSjW8daYRxxMgEJXRZdey",
  "key9": "4a9GjXaFuD1M95WGx7jheQmboxSrKqw5c9MaGyBmdm9ThrLirxy8EELePYKLKp5pgtTdp5ytzZzVNqHkbhtQNJZn",
  "key10": "27Az5rRhzbkrpfMwn7wQY5joo2w5Y1eguPhWYUFrdaqs5dA9y3sfV8u2jWS3REHhj21mRrx3b85dPkQLX7bXB1vu",
  "key11": "2j3fFZSdHzqE42c8kxEww7Suk9YCXBF8VZQdzL9JUWDvmvFjTuToZa7x9jhMy1Ea79HCsqD1n59e2PeDqXWE9Fwb",
  "key12": "4MRVKtpJ74FaAi9ZmGFhWWiuT8KRu7GpX58f8np1xtyy3rPZbC5eBBmFgN9oRFkHJsmCFYuxtbYvPanyznRaJorJ",
  "key13": "2AnaRbXis5g3sysnkpeK5qGCYuza3SwSU17jUKxeRTwiREzbFLptwokgpD7tsErVXeKFe641yWsRXW33xmeReRDY",
  "key14": "5zKtHtPwXhjnEJuuqaLJyFUKZS12QRB1hJmvaNbQnGSQxcCsH931YkNvqLg854L6GwGc5GTgrmu3Gob1SzuUj3uT",
  "key15": "J8fe1oUM3GABYZGTB4PQthSc9p2shv5ronvCZmaswdCuiL1asPjvqUeGryEnPbAz9joRy1B9DDncH3WqydzWS2D",
  "key16": "3NWqa7C8MTxRwGqACeFxrjS2H5tytfTrM2jww1WimxshPz1fD8tXkFUHFGeQEVd9fVFdhiHAFdNFq5cpaYQAqZZM",
  "key17": "w7z6wczQskddbppsqHFUsB5yJPNmzo7mTnCfE3TuULTvQe5TqihCui7ufQ15mMYdWQoikT5NakPtGfXV1HhT4k5",
  "key18": "54wP2ERAdKxReGK5kwH9t8DFoTv7v6p8xQG7wMvoL6jn6NXhZE1DhuKMXQ22t3etFgqnvGVJrWTWudNm38aN4JGD",
  "key19": "P6LKwcRFNPkjzNXCJCaMEpJ2Sg12eHTCrsTG2pEmcabnVeUWgWXeUkHViozp7j9hb8cmWmwPM3DNdPa6tgKJURB",
  "key20": "6rbPuSLipxgoHXzHupiRK2wQTqecWkSbENHsPGiLCXSQDbx5N4BSK4Xg4BcnX8ijUFzmpYioUfEsVCK5XyJ7Ti9",
  "key21": "fKxpdtT91pNZ64H6BBoV72VSGPzG7pbdgZjQaNpAHxzH7XkSWjSngfg5siBJGe6Tj4YkVuk3zM53WrnSx378xFY",
  "key22": "3GM7fY8WU7R1kqWu2rtvWcurkFTcNcAdNYUrecWjRowgSyDSkDquFztYhWteCjs7PUGmmF5WQ8Qvc1ZYni78oLoy",
  "key23": "3oY7J5zxNRuarPtCY4NNA8XpkFuckQUhTwAZaHmSFHdXMHjQdvSncJYdufm41uv7FRvTYKM2FfWxh6JMPGkkcVxp",
  "key24": "9N8X1Zi975jHe5ky2Rn4Ed9ExMnuHVBZEvpQDKsKqhkCi2aZYfJjZKGTFeNRgtyLaYMt9Y22heSmFGfJciNVA2S",
  "key25": "nE6UZgw7TdVJ7zLXrFvBd7uCos4gbY2BVbFxiGCfcpgrgrPJauwPvWTRhDPHUAH2rJtrmUxhg4ox369paFXBnaV",
  "key26": "27VmQYDBFqL7bqXHi8xac3FyoBERvoQWMenmJYbYw6QbMAPUBys9HP9CZSL4brbYRMvzzxow3NniyyBGrQU475Zv",
  "key27": "2RoataWZLYuCBPPJXZPtGo9eggAHLNdNGcYFcAZUj2zDXGwcVNsz7VTu9WKcTrUvxZzD8moaroFqVuUAMMSgAvmx",
  "key28": "54GBZd9dwAuGdLkciaFtJx5QhTQWYv1bw9BPbeSL7pi1LMJEhCGpFuXA7YbYX4GqxQLAthUN6HzqDYQtMUv4wRtw",
  "key29": "4MDYud295od1hT72svCMvTMcr6VpB6cgjY9QWS9N1yg8TDYuh7H1todKypEcHLuebS84qGqrAFLpZLmmXhv33H2L",
  "key30": "27F1dfXaGBt2v2RQ3dKakfghpebr7Lgg81ZJyUJXihbZ3kKtMVDboNwZACC7Kjf9NYVGqqatFCa5H7DwQUAgL5DH"
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
