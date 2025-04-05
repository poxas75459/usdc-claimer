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
    "65jaB5LUYKQCiPHBQGWjU5diGx6BHXYcXTwuHnAD5XRK9NYpHxLNjefwoE7VQQzmWc4hxiLDBLjy5qcr89ctdipZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRQP973c4fzxAqA5zCXEcEyhgbPyp8X1EZF2hBrY9jvacKNBjq3Mtw8Yn2p2RFAh5NhmQtc97St165UNHp5gRQ2",
  "key1": "2XypiaBFTetoDWCVkxcHHHJM3AtsHfHbGKfv6EXjdjKGpLs2uxKu9X2jrM3nLguL9Caa7QnZUYHQy3qoGdzGqB89",
  "key2": "gAvA2SVKk719oDVhXbpuNwfRrQqurgxHccxJv7PkZew9qPgdktLFMxXfgytiXNQKLKEvyd9MRtVp4Yo3nJwkm1c",
  "key3": "2smcWkzcQKL5pv6yCWRLN9mR6nzzMLunaq5JUq1av2mhVTnbKRprJ1RJ2J23g92S5zKYbKS3JSnvTSzBESfJxKki",
  "key4": "65LEuRksyjAzWPbsyTsbrBKMXnPYg2xdU6ssSst9f7xsqKHvvDZpBH3hLPQZHziLXBi7W6DxdwtT5yzk2exb9DG2",
  "key5": "5Mv7maeusQtgD3eY6JSendNxHmaJ5JpmyFA61ziNmZHB5RwfD6Viuk4bw3fzgTPyJeAEB9xWA9RxDPW3GjuoCGTh",
  "key6": "4bLtkWhwgP1g7FvMMP3WsbCHToMiNZEwxJhf1EpdiYa5hdtt1DQGZPA7HxdBnYjiMTRTXQUa27R92rJBZnxqEDh9",
  "key7": "3C9tEGCnEKRCvKD39F1bYb3KKWEKLuK18tg8x8WLTTTwkRBTCxfEmQ2jikYpHXUE7wrnnQW4H2HbzmTMZjHQEBzN",
  "key8": "4zm4dPHvWCRfkMP1CfgpjpzauFQinZdin5zktsAwpk96eJtpf3jh8USSC6aP1w2Morw3x5j8ymGzejbtmssZHYbv",
  "key9": "3qBrhiokC1vaBrAVU6CZqJhuuVhUk7bwx7tHCHduCpY86CppFXRTX8nNCynEhGpbNtbmCDVNNrr74YxmMMngTWJM",
  "key10": "d24GHnPtuvN8H8ChV6HG6hsGYpF4BXWgVFw1gJVShd47viFAR2fk6audQDeH6ArXw436G4ZrcNYLPVU9AQQ2b7d",
  "key11": "hV6aQHAyg9M6LeymE5rYVqDZNk3eVg9K2jT14SQkxPSxEtuh1bPDCW2Q8ePdUsoJmzY8W5MJdc1LAh8w8sapgRg",
  "key12": "3uapJp68XwLpc4SV3YMrtii6ecDjNhD6gN5kFzpL4oL3FBZDmGY5GAesbqPVDApELTfKCTbAfQmCNbnSrVveqM3",
  "key13": "4jnk4S1tXQiDgbMZ1QfrmbLnoA1GynvzALi49bmEgDkawcqk2MoAK8u55edEaf73nFv9qrXJJvXcNGpnEBRcpgcu",
  "key14": "5bKHWtr4wBFXt4FrSm9z8xHFNi5FWposhP2u5Rf7fBoiBMVyaqB8LGY4rJzgCNm6xt52LTh8GiHMa1eSjFAmcv6M",
  "key15": "5WoHSVpFtGqCA1mabEEWU9kfQjHVB5SM9LNxbFJRF5NbUnSddRm4sCWekLxKSYzRtSHXKEYYH3PE3RtTaR6K8fMc",
  "key16": "5Dy6jdJZ1exprmMxywV5pY2YVp4E4YCUGRbyN6V9ZyfABhNvNZyvrTvYwj43JgdbgaZkNgKXHVYy3GirhqJP7YPX",
  "key17": "3kgQAxTzMcVwKJvcebAWFpqm8q85bonvQh19ohzLDqSSz2M6ptJvPnoK55KzNU7PQQHc1vUeg6i7ea29eHUsXNNJ",
  "key18": "46TJJLuUo2LqxcFrKvRkK9ZpPu79vAwVKwFSss2erSCecuY9joWdZiH2Vbjv84pK3qEmPWwiX3B3UBtDrWGU6HyH",
  "key19": "63vXnSB1iEtWBm7dUzYrtQDNyBUiUrPzeLHgLWFHAXpF7GgWGqq9zfQE8VT7FqnH2V9FpnLxgcFKDV9PYkZUniXP",
  "key20": "5yb8A93koTRnsQFrS1SeJhkDhPBsLp7om78gtAuqLEGfoR1ogaUyYLAbpKR26EJxT11cNCWVLAnoVeDcyukEzT4z",
  "key21": "2yjLGVvT71J3pkFhQ5n7cCXWvfvy9DLeJrbE2hZ4nspDWuETc1bwV9CvDeBLbHnpdfBnwYv9Jbmxy9MMv8CaujBp",
  "key22": "2qgL8i6debcoMyhf7yp3EE4axhhdssdpdPjBkWCwUMuX4ji9D53E4SREAC2mEqBjKSzu6SiFTyNJ7YraUh1rbYJU",
  "key23": "2Wd483MzY5Bpnf8AwPQJE9FUuWGTKw6GVYQjB58JAPrQQTA7ZTyQFQ3Zr8JVnWpJyMTvC3Uo8sutt8BngHxQYwwH",
  "key24": "64upVM3tFHTngDXtHHGV4aErUhTRHakBBe4mSsdVsG3WPXJNMR6qWVEQvyCDAp7CT9LdTCuQN3M6B2QkVvcwPoZD",
  "key25": "57qBeWAgybQcFnsBZvvyep2vMYrrgBGNdAYdCjbwYsVrGirL1JWF7SzktQCQgS5K5wRTYKYYMnCfhkP2RRBUzqBK"
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
