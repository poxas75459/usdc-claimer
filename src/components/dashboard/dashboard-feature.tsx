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
    "2xLW8XaXkJDtaWZzsfdGbpoE5sRKicYzkBXx5qvz73A5FvuTYLjUr9W6E8P7WZSqpeGoD1RPm7Pzm8uUhP16RX1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6ee8wRbLGPZn15xiD2ENiWF6Sk3dbxV2bVRNbDfXC9Q5CJdBufn8QF7Hkxo23zLsxhcuLZm8JWggfA71AswLWf",
  "key1": "2RRuf2hCFKaJgRsScKu63gcwvECavHMYp2jY1hvEfW7R9jWUtm69yykBvpL4T7CwjnnWUfFskEroxTtsnLtpraHn",
  "key2": "5j5Nmqn8TphpK89yUmBnurMmAUCTg7Scc1H3ABCv51dRS8kAE2JUnkHKAiWEyXTk3qHN1UhMfiBUQZuk6iyPcWY",
  "key3": "4nhKVWgQtuJaXiJxMMtVunxa266qmK4knz4hFhxWmp4dcZiKJkK2AQDurb2GrmcAr77Arg34RAaQEfgV6svKjkM4",
  "key4": "3VsQyBvFBbv4WKw2eskEkCN7tkMXQ14jgYiFTw9o6ruj374k8BZ8W3VEhevD8fyPBWFcykmng76ZmggjazWQN5rF",
  "key5": "38zWy8sLwjiB2TngaVRMAaf9LmTVbyz2ztK8pHnsU4SmCxBorwpLAv16vi8pCisy6LY1fcKPeCAQFvnVRpZQftNC",
  "key6": "4bFoXp6hhVxDQn2SQ2NqzfMTdomhs1AfSYckafkbEjzx7e7Bhdj91xDYq48kAc2SpVWaDwz2ce1zcr3kzAFHSnAx",
  "key7": "5WM7KKmjdyjkWekBKu8f74XsnRzzjyUug4n7J1LXTVjTQ4fQujfCmnskBCpzP5xKN3giaJbLYqYMEVR3ysK52sP3",
  "key8": "4VcerwABf7xbtRd7fk9GnLE55EBxdGar8Ghys9JeZFYwDB8zcg86JgtV7FJrTzqsVHqD2z8Ctgdz5NassMv2a9nK",
  "key9": "3sFJXWAgzSfckxDs38NkgHfTroskBVuZAENyp94Uxi7B6VAwd2Zy2FUpBjhocTsEFfhxFsuTXoy8VYYPLcD4LGQR",
  "key10": "4vHftemxvWDJ1M1Uag9LzJxgomW4RBUy8bT1LFiJbyoM4HUCQ42pEWYoKoNvLDq6a78UBCwES7AY6mU7QqBkBd6c",
  "key11": "K3GZCqfCQetbcLemmLFEETsodgP82dgnRdc3QoxPDfCX8KccJHj8PPd45H2pVZqXD7778bueX1nPeCabwUepYX3",
  "key12": "rSf7ALoUtaHosD8nV3e6CKu4MhuCD3Dn16dZvq5auQ3Sr6TdNm7TNP9U45o7NqzhuhwGaqtjQsfEtbnoUz5Pr7A",
  "key13": "46u8Lun9ghTKpEjJF8H5wQcGoHtPwFBTBX9o1TT6X3GfX4ViTLzgRS8x7bAanZ7jJhLaQdkkxixy9oVswVoxhPDa",
  "key14": "4o2wv4C2KW2n61PPoAUHWJAwwk4ADLeCc7XaZqFa6pXuYDwpXTAVgzx8qB9SrdLJ8qwvph6j2X1oWhPUHoH2HymW",
  "key15": "AT3QbUS31rm4zohq4pXj3JNFK6QPiyJsYEMU7qkGp2YQRw5dFx9hVwybP2aF3u1beMMicdbMDXmGFm9HYyNz4sg",
  "key16": "8vifgHaxaXR7tSD4BTffEcNi5dS2jgYB97s7sdQU5BZHqYfcYhv5Pq77gYdHP7Pr4LZBsdKS18nH84ZCE9VnSuY",
  "key17": "2AAUpy2tBxLrXTqcaXUwVE9mYo6gDiXxZ7f4hnjc1ZqQTtnAZH1nH98XFyY4WxGoYx6AyFbzRAC6AqQ882GuiH81",
  "key18": "5EYmBWy39ZF4NEiWEy8MqCRrGiNh685oGCZxYVFXKJggfYRPEtimXmS5gumd4bpEykPkEYevaDqFXtkhG4jf3EpE",
  "key19": "3wRWaoVdaYCDcrCghY2pZeZGgNshPt77tWkWJ12itsCmxNe4BqbHbsrEigw8woozuBa3aQQuF8EdKw7nwjXqHGbx",
  "key20": "4g3rePGr8GiWmD9JBPa2QNMMSBa5fysQfgYBTMaXkwkqjGnLtboNHSimKiducrPLD6DywGeKpuHoZxGgcN83CYcc",
  "key21": "5yjVkDD9fzjwYg86okVv8AZ5qcjPLxtA61bh77BoLq8KUggkxswQdmBFWR55pQqA4YxKm58aDBAFB83zDaHvyy8r",
  "key22": "4Buq8LQ6DQmSjjtn28Ck9hyBNVaWpxYbU8gD48WdQnLX4GEcKNTka8hhdhg7P6D29VSKYbppj8UJGoiHcxQXm5fg",
  "key23": "5jdpHsu5EWaMmUxRgBqZyC45dpEdffD3kvkQUYd1W6T1xV5DnW6N15M4yjYHCvKtkxS3ix8svPVD8ZAwiGcP4LGF",
  "key24": "3EVZQ53wvVxoorrqZhijxeWmTRaUnxF8gLi5LsSYMkRnj9UM8xFfZ3BpCqaiAmYAv4GHmSB7wufYCuwMQWWHNCbZ",
  "key25": "5Wx4JKyfyZmh1hDoiHriiRX4bsQ1s5xamRo8FuSSfAEY9apmbYroWP5du5ToFHwKyit74TQRdk5sJjsTiXAmvtcp",
  "key26": "5bTrAjLuYSTwjd44YM2GHZ6pm54Jga4nEKirY56xCZj1m5KWtomuUzjkA49Q5pmyAg2o8Aj9smVd7MtP8uuSa8kB",
  "key27": "5LhbaKNGUjH3fEKpqKNm9GYRgSPeKipZUmBo596CaALhG8jEA2BMRjLrBCmEo7Yjnn5XLadV1rHhBk4reqNjuCrj",
  "key28": "TjmN18YWzFKujkeWL9XETq4huWGRtXfJTJzWzFhvRg2qSwu14WiZEWCBjsCMsgC9LT425nJy6uQ6TwWnJDgCAM5",
  "key29": "2k6rvXLUb2RduVy4BJwu4ReGPRvDrF5VLZDEbMJ5QfTrYwx8JECqvc92cLrudDG1gBq7GMt5KAfjwZuHYwHVatVP",
  "key30": "TegfoGrbVTV1j1DXjUEjHbGjKbi5sk4AU2CmY3jjqZgEQxSrXFD5HSitXJf9RW15sALaMtkGMoXCaVr2CSnmmJT"
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
