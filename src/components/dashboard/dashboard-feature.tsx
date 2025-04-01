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
    "2yfet8sZRCCLh87KR7Yw7RYdv72AXz1GULgjzmwgY4w2QeaueJGxFogtiHtH45SaM1JhewSTnz3oYx47wQAheBYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3jdQciwK4CmkKv4uxBR5iHPofrVRmpFgmy2SSvem6NUTJ6ZVsNNL9WncBjLnz6h95YLhujEeDXKUDzofvMWKZT",
  "key1": "5uhduUaQzLo1YbsVwYwf9XyktihVZz3TVShrn2zLeuPGhxqyE8bNDk3V61a1djtMqzPxRJksiGM3EEasTid18vjP",
  "key2": "5KLgjrWQB6aShytf7rEhsQs1Ph83BMwTAKnNxtNdRMy18nQMHfHmAaNQvh2XKkyXZqEKmwuMorrDHcPkSbg6JBB1",
  "key3": "2gRqygzwrjCYv5TR7QZ1z6Lzd2585ZJRG3MEPMQk2oGh6P8PUpz9biuCRJk1TzPE7gofmgK3wuTPmuXNcf4eRVfx",
  "key4": "66FYheqESogsg5WSjPk6KXAMsf5uvrvAJTc9mHnm4BjT6cyS4WFEXM5P4U3gW6c5dH4iac9rzt5B1vPw7z2Agsmp",
  "key5": "5rNAyqZA41Jj9CuEVdup8qfi1z3XTMt7qaREDgfFbALYeH3BqF4JJixFj6tgW3kvFUVUGtQspZZyVMvHkkxRFe26",
  "key6": "3cLcC7jQLgZiPGau3qJVLutxtzaQMv7vibRWbAyyvBY2qh74Qc1hrNkLZuRwU5EiSqwQR5JNPJorLZDSjah8SuYz",
  "key7": "25gQu6hBpQ4WsDefzAGXD6AiaXejzcVPstFNWTNpR7uV8rr5dCzomJS4LBEbeqb3VWZV5AFhVA19Mcf5AygTQu2n",
  "key8": "4sX28VB9VZYhYhZBq4qWmNd7QPjt8MuJEEoPbWP91LMRv42J5m75PZDEMbUpXT61JbhD6ebr4AktCdawu1D2Ut9g",
  "key9": "3ghPAyKcaJfu1QFwjtvMNUCEhc3E8xLQVGWEqe8NVWBJM5NpitpDxKpB5Pohqv3EUEpWatyggePhQCTXUxN2fixM",
  "key10": "Fv9PTAuanmnvPFrggSwS6W3Kg89fGrfSx7bZghc8mtqdCriPVjn5uK7Ccp5jmhW8vNxRZrtoFSdB1CPqmAhrnY6",
  "key11": "2UACgVPcbuCeCpdBwrtChZ2SgUJMN1D7cNwrxvFQUHD1XYkN8YRXdmFdRmn6ANDVjAzP1P5xRGQXCUMcqn2Nhzqt",
  "key12": "4AziEXgHhXnuDmmykupWJXYMkxaKhj5a9NHqu6V5PemYdKUjjhRMXTR1eoSSYZZC11mbWNzhG4QFfMpamRqdBAHQ",
  "key13": "248gJUdYK8AG2rBqEgRMZq6Fe4ZfNLE3PxfkvDsum3gaY8u9SnZggjTQtDkjp4KZwFAQ56ruHZVaHrVpw5QyiAMk",
  "key14": "5VFcYomrbtFh1Kiavmt89gDNJ762xH3ASB8rScZV1xJEXPWgudtF316LGYza9b29CEBR5TxCCNKsxz5ACPLXNAje",
  "key15": "2Pnu8vuZr7FtL1xP2G45n9CcuVVoGJk9rVmGKDoX3mNmgTsZZD6CqsfnP1WaUcAiQV2LUsR2CzpFRUc9VpM5YQaW",
  "key16": "3suVnw6nopjoQCAQMaVorHxRd4tJRwu4FgcRUb47WwE7padDPk16dQcWqB2vTCGvk73cEycAezBvq62wChGEJdXk",
  "key17": "ab9wSAwUK3MiqpwELxdyLSN4kFrEdhr3Yb6nqJm1MFDQJoL5pgUJ5J7a2xamGAuTrkfnowEUvtAJkzGPNyPPUku",
  "key18": "5xTd8KfCjQYEM2Zxj5bxbLhRWkNTE7SCbs1bR1qDv8zoJk7PmDt2hSkmaj54yy4Wym62LaZwEP64vRX9PQndSqUX",
  "key19": "5mi7TTbTiLmHpdB1ceA1FdmpetaH44khdooxiBLjDiUZ4ePkLYLPr6n2NsdcvbGWBY8KYX4K84sU2HQbaQmXMMty",
  "key20": "ybsffpvAc8E89eMTUbegBTVyfWdRumfHYHoj5anBiLnQNxYeGLGpfcTSCqqe87Vj5y1jj2KSBCvrdCDV3J94Leu",
  "key21": "2ELbVEK763YMS2MNYyQDvEjVy2uiJ3CdWwbBX4NsCNfa3bxRoBoF8Ahb9x4nUkA1KHWEuho89dYwJfptHNmDZSdj",
  "key22": "2bdGCe18qLSaTkeEFLHdc9B2kgufKnHYTyMkEJcK948u9u89KNgR3MePiKP6RMxo87tLLN27vuMEedXUeQZa8kFK",
  "key23": "3WavQo6Uw7ZLV7wLtGdi5vEe98UqDBsf9282m5hG4wnopbwHbhNVXNX4Ah5CPCDQF3MtddUPLJ1dsZKT6vBhnP8J",
  "key24": "DEWgh4Fmcec4dZi1WPRCW5cDC3C54yABcfu2hmf6KiJUevhKjxqqYRF423rQH5EGHxjdGHa8oJ2nkkMmmCdnYzy",
  "key25": "2UX8amrDv8eF9hixGnaiYvEP2rxskArLr9xiU3xvGgLoCxfxDdAohGoUaWMF7gHyauSjsTHouTcKrFus2cuaPrge",
  "key26": "45VNvNWbGahf9fHJPD3qZgHwkd9ZtGzVtQf3iMYbUxsh3eTZvPamh1rqbHmsNYnwcGAzirq12k3LQqn2H2WZxHaU",
  "key27": "421t2maQC5SfZEfSg5sDNEfZBFFWNFPJqyiSNbd4id76TPEJ7G7uxHLKgjeYnwH2b5ZCiC3MvuPxhpG9XhZtcBvS",
  "key28": "5STarYU1FX8oUAsDcWY3B98DpPonEPUz8233wzyFCX1RbaDAJSWbzg8WSSAbbHQqYPRuy1DgyuQpQdtvw1wyk8AE"
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
