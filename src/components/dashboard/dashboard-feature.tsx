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
    "43Dzf7nHFfFFt6Wdr8m24wtHBtxAC3HcoxCuJvFyT2SxRL1q7e7touoKSgix7miWi243nBBQA6EuxeEQSo5z657m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kpqpabhmLfwz6s4Syo9bQwLCPY6i89usZnH94VrgDoTSTa2CeTWzqYHExoTaNxcKQjH4e12nJiCkh1cciKXGWf",
  "key1": "2jZ9NZU7wkqxbZbBQUPZhgmSvvAJmX1qNNNyBocKMtSq1Yz8UbppGaKk6RkBmE96EULA1xDawrKkEgBvfXcvnPNa",
  "key2": "5MgA92NZr59omhXL3MQSB1Q8cyUdAwtS35DvqJtdKc9SmSXqtZoqtFUvC2HiftZSPwNvTmLrVSdH7YaHbLWZ71AL",
  "key3": "zbiG9Le2wKmTqJ1Cp3VXo7VXTjtp968gSF27KYXYZb4yVfanJ9GQocxNhGJdpZ89Vva9wBMNuoNuu6z8RU8QKLx",
  "key4": "43RFnm4urH8wN4UAEQQkMmswZK1pRCqdZRtVixN47Vopee8ULysEw8CXDJXkxEBiwwvD7iX7dPXUDay2VG3bCzno",
  "key5": "4tztF81SoHK6BBzb3Ge3fqQKrfgUcoqskbv6MkAmCU5NGFhUJUyrb9Z71LAZTYtQqHP1WcjL5DUbq2NaHUuiz3Bz",
  "key6": "5ND7sYaLqimCjXDK5QeZCwpu22EHyN6dbGUGbEXPvsDiYn8AotoBvNQVaa42Xsa46sVPmjoiVo9rw4xTNwTVwaGw",
  "key7": "2CYnCHfGHP61Ks5DMW7RdQuHdi1jce5LnNFVxv2c9VSzQwf7SbJKxcPpQrYp2YYioJf9swaU1fL5nWQNx7m6M6Ac",
  "key8": "5NDFXLDfMoZXY5x279TZSsGvcbKM7cDSA9tTD8A5NGgRCdsFuoPFHvWvsi5r2J8wdCVXUzs11HYkqBij5u9UTftm",
  "key9": "67GFKNo4eMiqtet5ENTvG9RSVei1x29zPTSgPpDv5by5mRetJvdEmAxKq5CSKn2RoyrUkJcf1T1XTR4Bwp8pQW7N",
  "key10": "2CCYMCFbPVJPc17D74AGaZVJxADcUEtHst49Lmk2VQAqsizVfN9pV8Zy4CU85zPwPPXaEX9mdi5ogA78d6uEjMac",
  "key11": "2evg369TaVSYoCD4NBs8UpfTX7WWeRTqaqRzY2fFgQx5uAXRayv8Wfx3HrX2X5XjA8Q5xWm8Hp7d9MwWRADSTHjc",
  "key12": "2UvTrZRF3auGzkxxE7ApYVBua8AGMbJrMyAwTHeGZP6hBbryMtM5vtEtC3APNBEfzArTBnfGXrQySCzr1dXsQUTt",
  "key13": "5xSWZsNsefc1MUTkX2y4bntzz5m6DgH5E2uBSfkH4yisLdozprWsyLc7aTMDtk8W4aQjR6qNfJCjogZbLm3T95Gc",
  "key14": "5dqQTwmFXMUvicaqJtF3RT2VM4hAQgoEscRZACKfMT1w5V6rEntJqMjhL4goZhx5c8sPjEzX6DxAe9SRXUiyf5BJ",
  "key15": "4MSjJEtLTdiAA8D21NRWkMWScogKvZMoGGFVz9LrW8fDabWW9LgfTS2X1a1HV5qG5pZciThdc76sEE2oCu5UQ2s3",
  "key16": "5hbsnCSYttsg8eohyg7HDDEduQE7ckCT2s7MXksWbJEa1wgsuyVjg8UmaVdY1JHaoXoqxRQzHtKKyiuCukY2R3PQ",
  "key17": "31EojfdPDocaYKKq9Sdf6qCyhHsEofEz2wTomNif5ef5u9T9PwNaGej4EeFMnSNQNq382rja6piBATQXhZBbXRxT",
  "key18": "21Tf5zE2Qq1C5L4A1Z4v3mstHaS4Ceg93QJMLz53YVFpX4NNCHHxzz3C87uRojetBsNrgBt3Hxtw4cP1Lj3vRvbZ",
  "key19": "zJH6jMtVB1WYGvFYWro2JQjvMRPNEjguAimZHfTMnnrqXxC9Pm3VGgTcEkJPEiaPs4FkoL9hviWLGRtMo3GaDiH",
  "key20": "2PvMZyB5m1fQvaNSxEG8L6qYfp6zeih2Gqcoj6EoQMbedRRoVcXRiSmVJpfnadLGsKX4sFBktXDRE4pSNBEk4AoX",
  "key21": "MNqqXeNHs2xWc7WSWWqQ9xwQahbxkKoxt2DSchRYxVCKdC4FqRVsKEW7zD2s5ypbWgGW5nGPeJ8JBgPtpDGyknc",
  "key22": "2QuivhqXySDaY28HE3MwcY4wvPztWJPFWh9xL3NTuUCizGM6Gm82mo7BoitM1mmK9KgdP88pZvAFSHuX1mozYEsa",
  "key23": "4oKceW4v3wPeZLJvpeLKrmUFn6gJW6d5qYvGQbMWMmxTEnvQn7TcUGxn59kS9yYfVSVoW5jCUAysXVzeHLcvqkSi",
  "key24": "5kAfTYryyFmM7hf2ZHEP4tynaSrYLJNGnVPUTqy6ysxBbLKtfio3FhghHd6TQjcofTpRcntWM7vQGNpzcqcCRYT9",
  "key25": "4bnowWMPYCMxDiqWfGjYKfEcyW38y66u16Gr5dGwSLCXiZ3g4rvnYuZ2dzvXzECqZbnPNFosoc7aWdxszZRnv3At",
  "key26": "64iEivSVfLPALfsXADPw7v3yXj8ofKhaxrtpcHsxAUoYqrdguj37mKm5hNKLhzfHNk8oJSUEsGfHFV2hPAxfgFpN",
  "key27": "Uu2XtbtBoVPtAMaV3bhaHxgX9hkTUVieooL9Qrx6BNPS31s5P1vShog7QV5iBnBNJ8zfN2AyQFV3bVcYCYLy6GN"
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
