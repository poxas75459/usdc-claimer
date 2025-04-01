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
    "4aLVhNkHJc6gSoxcE1kKMMqPuS7At2itjr1Jr9mXNkEFnezUDKXYqVk1CdPhPa7rX96s2zkzcDxEBidPpJUKoYAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjujBnSiVdLsVC5frW2RNa4kyVRqVNCrEwfYNFWvRSEvx2vmiQtZ3uQA6tfH74pi6i5RFtMCFGqWaR4FUXHYkTT",
  "key1": "5eeWntT7LnE1xri7HXfMtpBMDA9S54xTDs1TV7RUvuVoizJVsUVD8BEeV87LBzH9aDTKi1zvzYn8DCPitkve9aKd",
  "key2": "2wLuxcsCUzvbsW7766ca8Nh68XCGyjDZGsihMpftgk5s5arBNbTvKyd336BbSvCmaZhTaX6D4pK7uwxtmjfeCpAv",
  "key3": "47Mkv9HZqFda5SAGKChC3qWMkrPPtpYD3fRkGojT7TomWNnLi98WvjsyUVJ92cC7dTymJyqoATSBs4MxvvkNwY2b",
  "key4": "u6SqqJWvkVoCXkCYgyAtf1U21QZzahme2cTWFzWLNKTbS3C5j2jp4UCdgk9rhMF37pXVHtmxjJekQH5yGSWHyvV",
  "key5": "3stcQPJHeuh5y4cpdKjwWNxu8CS9AHHjLsFE2KB1m7vq2LhpsYhNfpfwuh7rM9B3dReNiQ7nyjr2pH4LJpvQuNYC",
  "key6": "ShqX7CjiMQ39uikAgvrhD1seCm8WZWT8fT5cg93Btfgx6bX3HX4w24wpAurdQh1T2DY3LwFoqB7rWmUx6fcutEv",
  "key7": "DF5Y5zpFaNxe8VNvqh7jv5EoZMuBcPPjqPYauPjwLicWMGS2w4QwCT7fhNuuNSEgvEBMnAAMySRfaVKGdd3XarN",
  "key8": "42kzzcDaGkME7oMqosDtTNXotnuxcBNwXNU852USVBUq3n8okbyBLb2GhVhYBQMMSPV2GpVwtrAfKmgvg3FSFvKr",
  "key9": "3V27F7HUXic87haUXxXzNfPjgJxggijaQTDmS4oSqZPYtNg6CVJiEMezH6VGXK1EjomXatKzzrduunFy7ASrz9Dn",
  "key10": "2a3XBHHzV7X5nK1ZRWGCt8SutGuYB4jvGKXxZk1UDtZTsLgCrEtfdwstqYWe91E81hxc7jD2Z7iJwVRuRaF5bmRe",
  "key11": "2PA7FnWnZXN76aiuSvBibjDyJ17pj1QfhcPuryVVynKnj4wkVz1DbBvvPwbdSbAjhQ43Msbsp2KqULjJLGdvCXd4",
  "key12": "419CHRfZ3TpVit71ccrAL49R7GWcYZQdqrhdjxSGxjS3mPrCCyJUQ362RChy4z2esYaGAQs7Tw5RgxDnmmA9VcnS",
  "key13": "2Fiw8G8q1eaYbLrtEfX7XVTupRr47fNq2QByCyHfxQnbJxNfea7fLwNatMjSSDJsDSvCeFsSixHEUzsYVKfXURns",
  "key14": "QWRPk8xJLb4smiNKLgDDD7WDXnM6wXiDYoWar6kJHJ2hPv6G1Z2KNEWZdZfQc6aNtrFDTjByw8BJeQtUD3dUiT1",
  "key15": "4CDY6F1A7J6opvRba3YQmyGwpZCViYT5jUCqd2XsGoXL9wmdgbQq8L1iawLniUpdaX8LVzm7frig3m6QewYCn76d",
  "key16": "1i7yDhpjdTiDmUfXBYq6JZKFf9iktFLNpRjYGEEuZuaHm4MNesSHbZv4Cajf54j1LbThRuMPa1x5Gkre2XynLvY",
  "key17": "2qxu3Htip7hb9cFcZdTkvpwzbnKanfxdCZrU3LXrCpSPBE9jbuFry7zm2F1TsSNGe8vo4CDyZaPXZceMbQXtCHLP",
  "key18": "4bjD4Go14M3ZJcCofif4Rve97Kp9ursnSyfR3MAjmsQYzUVHfnyviBgEDkCzpiFnPWR6kBbxZNQQSwxL6dQP2bmq",
  "key19": "LasTMNsGi8bGcxX3CdonhyzRst5NGVge3ADsEDi194Hnwrhf5BGMSajCB9ym1mby6gqYt7HGYoVUT6Yj1iKoUpw",
  "key20": "JZAJqNMGionpTfepaLcspxpEV2ADxzLCBmAxUJRixJL8UVkmHxyNDEJ19KXQG5gX5e5vMhJwxzgJyqLoBQJYwHe",
  "key21": "bRYS88DHoE5CXK3k3sm6umary3F7JMAFQayhdzePeGrUrRtRMpo7tnBsFR8HzXEqK6SuYtd7V7aDQ86TiMpMc4h",
  "key22": "3zpXUb4r9ejJzKAc9qH6iPeorpxCf19Z4VjsrZuDSBMyD9Eb4NpR5sXbLZArao4vindhgVs4w3sZJBywWC3mGFer",
  "key23": "28Qp15zc2Cm1eqY9W5yBmpQNnhG1bbRVRaQBMmtSzd6wowR2jcEMBcTcyjHTBkfVUKkjLsG6DF13j8rJvVFijXv3",
  "key24": "51j4zWnG4P3xBpd9fPFEwf4RNXEQrpkVRzirs6R9qn6NKYjB3CeT3EA3kLWNJKgpZEZRrz9dbuCTepCF3ASAZGCi",
  "key25": "64Wy9Rhy3VncJ1RKheSSbsgWfZ3xnSSPLAh2j8FmhAF9yKBVJzHnC3HdmTDfvCoY4mbhHaqvf7i3Ct3rUn8LnLhn",
  "key26": "3gWbeG47iizRFr12DuCLZC5BECJZcVGskoeHaoNoSgYUgCuGVDQZJRLMznYsVux3tNRt9NAK7Lc56WP8zaWuLQvT",
  "key27": "3VQigtke2ZGtLSoszohUR3msGVSqmifpPP55jTme7rnn8porDhDvveHrmwDoMRN1XhLE8Vr9Gh8kc6B3zxyW4baK",
  "key28": "5TjJYbBFDCyT1tjkNebct6C3d4J3bjyeq8wfY3PbvaxQ79twasrncdMJTNAXYNqkgecbFQvnwXj4zVXMXHnCZu41",
  "key29": "9kCrPRpfkDNaukP61iJFPwrRM5avkDSUKisr6yF7vkjee5JvD5YGAiu1D3rmjJCaLfijAu1faFn2bBKZU2RQb2R"
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
