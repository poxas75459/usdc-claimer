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
    "3AdFFfPoiV7ZxsAZpLwKbYTEmk7E22t7xKpk45frU53ABSPs5S4J3shAe66oQ9RhBpCb6uEgHTSAK9H1FNFHtioZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559h4FA9GfpjBq4TFhGAZ2fubk3iaFKTdzjddpYvDjfeM6vK34MssXF7HvbSHmwEmbfVvrphp8jGVLcDgBweUP6w",
  "key1": "3LYX5vRaLpppTaBW5R42LXruXzfyWRM4xDQkXzbHqXUkQiEaRQx4EU2tD4Z2WCNGWJK4iaHDJzZbgESvBjhdHCGA",
  "key2": "38T3cbJxBCF7Hq8DyEZr7f5o8VVyFddchQoTrcd62aNhJoJBbSufRqPe8fwVj4UfmkkFiWHLZT4BayFUnmh1J9fd",
  "key3": "2EE2JdpX5pujdiai7Xj5XFAQUaA1zYokGJnAj4iWYaq7S6L9dER7brwvLZqgEPYQjijL8thadfwt4p5kLCBPTsoj",
  "key4": "45bsaMsRRxvtjyFebPLc6gHdAdCuWngVX389ssvsw7RVZh19bxZSQ1JEkZdpGqmwcG8jgjNN3nSG2mTsLSuB78Ei",
  "key5": "5tfv1JqKVB3BZRtD1gmFen53dZdD21MXzF1dRGpZC5EGqXmGSqEJY9kogZMfrLGN6rBMq2N7MmtdM8GgWdb3vRw4",
  "key6": "8J1djPZbA2qJsnorvi7X7aN49wTDr1gFfjD67a3YmJcft5KZK3jf9HEZ7i5vPzwGbzRhLZ5pwWoKXKwxosbkGfG",
  "key7": "r3SbSWxA9T8Nvao8PsDE42tj4Ywo119SDtkaVKPM5gmZgYGuTga1sg8wZMpbNYRejZaRbe6YgvqtAX67v1eZzfD",
  "key8": "5NrxE31vxFn7mv4hyve4YB1jaSHendkMagF1eWVkm2BX46H8Y53jVrkWgmEXxk311QoGKCWtbuzXCY6kMRBZbtjx",
  "key9": "tqPA8oRkEjMNvaZUYT7616C5XTXuZA7VgtkJGB8zTbHTtM8bNtxDwbhEXCtVUKd32z67wBDm7vU8mEAQ7ixkFFJ",
  "key10": "2tZK7NBQ5MFfoyg8iUe5yK4HZYxf838FPAvZfgGuuJpSBw2UtWfxupS9BTpMom2z1A4GNy5BGY3cfAeowbVrSZ8Q",
  "key11": "37QLEkUECKzFohNk9rm9SL42mQRtMgzBEdamnLweRuiYn7sjRS5n56ud5Tz7qAyUpPjjJXVPB4JVCaavP9oQhJop",
  "key12": "dRfywSNbBAKAde52eKCcqfoHyQzwRPGA7abKvZzNWHiCdFpeRrFZwufpdukMj7EekLH5YtHA6x8SxuUUt7VN2pd",
  "key13": "3Xe4SGDJEG2a33MtYsYB8tLpkZ34UXfCV6MgmoQqWTGAqYQKjtyyLg9zvGn26B5XrqVDc6orodnAVxc2t3qwDqs5",
  "key14": "4Hra2RGsoNqoUiaeahCwsPkWwJk3289vvKgpUY3HgT9Gr38xDhNX5C8mQbed8VW1AZMcUgtsirQbcknvLaouXAE9",
  "key15": "5ixQVBCgg6ziDTGSf19KfVEWgLV8AMpGu7fPQ571CN6TVD9PCQK5GGtA5wwsg6mE7ztK6WiNZTGywJHKc2VKnCXa",
  "key16": "FMQZV9P11SAqUEK8VVVBNk1WfPB86vU9h3BNqBwKLi6PQdnvTzcpFACMvKqoSbGGxSVnh2XD3rNUKSQbSHVNyNs",
  "key17": "3hXLQDsQiG6ZkjR1TW3vvvCecGZekdNXXGmuCgG3K5X1R2hxY7EddxdnkhQdsPwwn6UeXWsm79eVLzXy8JvaJbW1",
  "key18": "3f9wLqQ4LdLHZ3DwDQxVbFXi2cnM7C6LdMN92V3vtCb2Tkiyxqi97oxSeFSHeoAAwesx1kbnx5sqdtHk4WNNfAnh",
  "key19": "3tKiEx1pBzQECKNTaiH3x8NSdid1Nirj289rczJi1trF91XfqFDJLJAGYBHBqG9MErNvEEmM33NVHdJTKynS7AJv",
  "key20": "3YXPwvN3YqK3TvnGjTEyk7P6isVBA4zDebn9XkjvFsHoBSpwYKR8vqSUa5k97GxoeqtDmgoAFALtEKXAQWdE48EC",
  "key21": "2dCbuee3YRGTNraDnbC5zrvMfYvDzBmYZ3AgoURx3GW8wfnVzwjshhkq4shyckPZn8pMkdVa2DRZmoK2Be22xAgn",
  "key22": "5d6ZgLoqf3yYf1qC2CryfNGKLoRAEU3DmbsYeAQ58bkcCFpj7izxvxe1yHeNiZR77WbRkySK9pUZDKqZUoaQDcwk",
  "key23": "tyYQqTSopxDG1vV5vkbrghZNsju3HSDnf9BcfpgDmEMqg9wB4Sv6SbocXxUnw9hGAW4KqTctuBokHN45PARs8WX",
  "key24": "5Espp1FjAj71bUkVbR3a6ViSgkLNG8fp31iH6ZgXftiZqDn9UvBzRtFrgoXByPRmSsdwKXWTuNdw8z3XZ7hdBu1L",
  "key25": "3g8Sb79e5ShaW8iETdHoirgX6PXXqgpT4R8HWxnpvQoxYQTT3VwQrztun5JQCsdgWKCbQuY84Kjkh2X6UERch8vb",
  "key26": "ymDV5tUHfdXk9bjSXX4nEjFab4kgb5FTGKq4XeNR2fAnBrHH4XJ96svTpxfSy97uEShTAAMRWpiqUXUdemNaagz",
  "key27": "5HK8B9whVktC9m5kVWwZdx8WBcTgDVv1xgN4hNLmHmrdz87mRVdUBPZUJj845yiZzUg4yyXripq6kYD1q2b9YjL9",
  "key28": "37oGoo4N9KPPBjJRiZmgNPz28fagYjgTQoCFPvnGeR8VQvJQxAwujMsBo9PcCNB4ffMXxoh7RKnNyKWRQ3JTwVZj",
  "key29": "2xGmL1EMoAxsPnvP9Lboi9C88M4BpRvCPZa9Fkt1Gv2MN1wtQMxrxGTVQLCmbTA6Quo4Rt35FzCCYamoSfb6rafN",
  "key30": "EwynPhwpq2veQYguqL8E7VoQrbYsAj4GPbBnixZ2ZZ6wVZjpBXaJiXiRFjabtw9FAnwaYa5kjYamxYtGm9yz6Kt",
  "key31": "2SstvYjUwATVAT9xBg2xryZo5arcGtYtxLYjcPUjw9rtzi2VZFCaKeWrQVAqLtPfUEgjSUV4Ce3JidXYjkwf5znd",
  "key32": "5oapAyft1J8SLiehjkQ4oRE4f9h5aTw8vXtTj1be54uhypmBB4qtRRaNogEwasqRkMVAnLKp9L2EMY7akuqBTvrz"
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
