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
    "4BHgtwPdDWvEbVW9XzSsURySaFfp7PZMN2HMU3iZiemPSsTsdf3r7y34iQvdq5Vtn6V3y1sQWkGrwamqH72QLtCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAbBKkJdrALCpwABo7TZ7Ls8HsfrDYqrqM46yDno8EbGf6xVB4iHx8tGL7SPBE4VDX7A7aeSsboH16xEo3hNH54",
  "key1": "5yrtrLtuhKg7gaoDz6eSGUq4vuteSwquatqUQpTGLKhEGAJiTRCuxr2FKQXELED5D3h3Lae56MMdvSvEcfoL56mt",
  "key2": "sd3hFf2WkwfXH2LPK1tsrvYYdswFYir6VL7UKYc1enLZ9uZJLJgWC5VGmgMACsPpweWAkQFxLttM6uBYE3DvWHR",
  "key3": "erwCifAyuCn2J8fojxfkR6CWaNgtLkiA8TcsHhSmE91RLegRUdmgLDJ9jbkKGYiR3axJaNnsC4D4NJGqe1DBWA1",
  "key4": "4Bq1fr67Zx7UWPABu4BHNBas7wtPVYXRwJ9vkP99RiP4cSKs1hohJ8mhh5t6ZZQNvLnjiiagZmL4tgXoFMUjGCKE",
  "key5": "5UT1ALFLjuc6WQC4pitDcvCQbcp3GiZRhjmPX4RybMoSuvy3Ro8tfp31wFr23WmoZqi9HQr5mEvSryauHjvMvg4y",
  "key6": "4j4BxoRPvWL7ce2aNiNqLrP7eZ9gRGZQDVkgWcEsauX9WgTJ4h25iGikuS2QhAQ6vrisR7kPHVLaEtF34tvKDcDr",
  "key7": "48RVXkXiNmjouSzyGfezvNCMyV9rj5atKVx8JLUq3xcU6HoUHXZcpdgwoyrvFSZo93akFzp49R4UAiDsgJqafJQr",
  "key8": "5WRH9cPABHNwrURouTVzVNcp5U4ALtB96fvL7iyfcpYn7mZWGcRGUaQnVRNq9RrsHwLsjtaoX4zN778Xw84d7tBj",
  "key9": "3b1eJHjCKR7bmD2NP8QE91Pgvzfe1YSqiasf5Jz1CSpvAJQnoTZuAJmq6AWFhWNNgW76WFLayanq2hk6DLDFwwPG",
  "key10": "45F9qiRDsbpCfwtq72d8Jak5FRRNurQtb1aMc2edXqAmwgDLVZFzzWMXQw8wHrk7mqS7Y7N5Vv3RaT78hBg4mPdA",
  "key11": "4XzMwDj682UNSw89RXTHBvpENpGX8MF2NF14titfPoJtkXLm2SiKnDcdchAYGHxzjVE7DB7bUHjBsu8X9iEi6Bqf",
  "key12": "5oBpSjKotDAi6W5eu9q6bNKpXAeaJH7C33UnY9v5aUVXTZ2HKqo6ufwsJi4s8rwTP7bAsH8dV3sbsG4czhsKCZ81",
  "key13": "5povNvu3fK6JRxHU2vxCsnusqAXeAAmQWQiW6BNSgLvCp3wYraqYY2pPC9Lhb1ocBzS6cqWzTEkSY46KGXNYYUxc",
  "key14": "3k9cpb2fgT5tGp1HQruJAsucxTNCbDnrjJpSKGZFZF75J3rLGvqXeypn13aTRfXpWpPNkDpRNf24EXWZWctgpg5n",
  "key15": "3ui4uf3tDtS7ihMp41SpxSSrBxWy1NkpaQeNVLBMCxTTnsxv7EEGzpfKAbsVNba4afm1Kuv7beaUQVqisbPLNxmG",
  "key16": "2xtMfSZdFXvRFGiJpzX1KUYSijC8jH9uE1vVKRZY5mKqh7cdxukCWHKnXuqersLjWFq6Y6DXDJZnzZW9eoVUYAFd",
  "key17": "4yYmVPzB1svSKzdVdyANn4CNxk2SYa9RbraH7Dj3ZSYKteYmDLzLG84fT8nRz9A5XqxQN2miFnK7Xpba4HPUBat8",
  "key18": "MKSUBJgG7huDW921PBYauXRKXgLEUYBYM5VyyMPEAzdUGL6karKksFm8Nvb9nPAFoPvFPJmREJN35WHxBAzM4w4",
  "key19": "5HZ7zarxchKmhFzo7LZZ4ZqoGuWTLCYiregGioPa4J3nrSpL7Rod84Lm4kWaJRq5APhDXe9syJ3RCto2zvSqAfFy",
  "key20": "58Kreazazxks4J7gGiwsSDADhzC94C1SmRWLSvmtLyMQNx8baKRh9NNg9x2CSyaek8L96kFuV8nZ2qFqXmTiW2Ro",
  "key21": "5QAbNZ6nTV1vu5Rd4w9toKPXWEfJ1J2xq7KfsL552tfU3q9Cwtk5tnjRUVjHbmDConLP2bJoHgYaMudnGWKKUV92",
  "key22": "5mqgQg64FVsccy9VZTSsk5Wofio6RXACBp3jEQQEdGjUKFmxL9R2ymLZ3j4SfUa9q7tcLkmAo66cUYzzEZZ1p6XS",
  "key23": "4QZnD9jHCFvkhNPR84ME9rC8hGGGrjwuD8hEAqbnrATLpnrAYTTFuDUh2BM5KwKNVX54G3j83NnKowXHtwEXh9A1",
  "key24": "2HpyeDzDNSEfsA9mmoetU45zMEtnySqXbUqT7Xycpe4DLTH4xwTuqkvNTDtTsqciJm4Z5htaWKKQLdxPvH4U7bTs",
  "key25": "5mLuhcaeD3RYYTEJkiHP37hsSFuneGt3dGL1Z2eqmhYict48bq9oXxftrbwfpELDmJQ1VGTCGUwWXrRSGrFHrJ1h",
  "key26": "nfTYpXZWLhjT4EZY3RUJWacQSMjcC9cECNETJA6MFQKi7K9gASoPQYuNS8zNcFCyxZvtBSgYLoWYPFB7W4dPxy3",
  "key27": "4R2YaLrSivzfHrea9i5D6CeS1dthxMpDrctCh2EyWTw6Vj1yLBcWp7kt1j4gYgWN98KS7B2tTarq6XvA3b5NvPiU",
  "key28": "5UC9WrqGEUU2CczQQp1ywVUCM5Vqb3y28BMzftodfcXBQG5gkpHF8DkkMq89aDDpAragvQcFMiWD3crBM2oLaUJZ"
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
