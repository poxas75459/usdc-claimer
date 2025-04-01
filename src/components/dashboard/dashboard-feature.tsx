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
    "2m9Y6F57mAWHUSyU1KvDrTP9uAxkQfMFB9Uz7Fdz1Vx6HJV5GTjvh8hLMCDaYigwPPzPd375ssz4WxvN1dpHj4cU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5VpM3iAYH1ESShYyFZcbCPuEwBnsa7DGKtKzH6BLNy57AeepRcpzfzDtZ2aFKD6LSNGcfjaqp3Ubhx1LY5WuFt",
  "key1": "3Sdc6L58xnc5STkfguyGaFSZpH5PGpMYGcwPowrQpVQnca6Wa5aqaouoHrsGspe736VxUTB1m64tUHESvahRViiJ",
  "key2": "Zev7pD9G7YkZfCv9LwPd48KfMmbfAQjaG2Xytjg4PPbPntbmtMRfEHJ3QSdaZf5dmhUgSovaXouNCZokEGbpCZp",
  "key3": "4NPgCcT2XKCCbmCPNvUBjNCYG2Ns4etMVzgypmFXXTYvgfux6JreZ2c2tEoviG1627ByzgipqJYN6gZMPaagyxs2",
  "key4": "2x16SkiWrkztSKbiMUwGGWr7ZFjmpS6fhSMDMZQc1U756Cu9GB3KQ838b5BZR6M7qNiGSj8QjwdFsJ46ipWcdU8s",
  "key5": "2Z8irhNRK39VVnrihQvbGUvuW7aMkM3nwW6seZJoojrtWrfNQhXZKig6tMRYGULBZuzkLS34AQQV8D6AizP7iyrd",
  "key6": "5HBBuuKTDsLTfSY7EGZrD7vfdwgrmLoMK5dPxmBiR7WNE3rTFot9PPFTxC1keq2zd8RYn476APM2NjmVDmhDS8jn",
  "key7": "2HnsehnpHC7kh3eXSnan5e83PfiA1uxXxqRMRDGVsYn2adCmfmDcY9bMjRMMovC6jpYoKYjqiciRRuJp7W6eFjUC",
  "key8": "4BRjPy5Y7SZavY2TvBzPmhEfK4XhtYf3mg4xUg8DsH5rXpFh32H95ZoJpUNqpB3Jr4XXGEJzQUPTa6hCcY8zKcmv",
  "key9": "32osVbEqdesSj13Tv9ueYSiySZsSJtLXkoNwvn8mN43fNf1odEjrFoP3ATGQePBuaBWdH5eDm3cwdxDCKRvEzWmW",
  "key10": "5S9keAyNpR3BUwit6QkZXY3BLzdUh2k6raJAcVGzxx5M6Mco8o5y8UrCZdkFWMqhCRc2EktbQ189x8NyKfcPteRy",
  "key11": "2C795UmxygGz4HgYfgEZKYbzNJsAbuKUS7GqW1fvH4QRNtbEAMWSVegXcpfVgyLtJtFyaNJy5rAxZEAYGvfcctmg",
  "key12": "2mD7b4bDGKV3vpnNT3Gcwq2cvFvLzC8PPnr39djj29VD1Mb6r8RRsfvcKnrT7njY6o6cBBH7t4tRekcmGXRBXSTo",
  "key13": "vB1pkBsHRJTRqJzozF1ngksyKUMf3FXEhfkSou6RdMBX8X9i4tgXXfzpxE3f9hBeoGkj7dJVSzhziRaqfxv7bXa",
  "key14": "cr5T2T88w2Xn5ybgZraUgPr17K2QqPkDeYWgYFKi2fyiBREFhopv18WuWYjpHwsj6xCdsxoihWLuKuYSJczMYft",
  "key15": "4toJRyFLueGZbX3KhrUjNJP2snhgA3knAeHkH9JPRbJAU4HozfHrGYJoemYRDsUNCAAg7Wdi5PCYgVHVrkoiCZH9",
  "key16": "3BB6UMHmZSz8P4yp3tqPwwZjKrycvpczNYK9xqAPeYQPYDVkuPuzsrPsUgxt1Sd43dJt5PNDKP5ZFJj9r3MmCf5n",
  "key17": "4St2fahb6K92vx69Qfc58Z1M4Joi19C1ami72fxBmgSwycXsQAQQKF4zPwQzfiaAHqpekYrGcWPyPMR7gyVEQs4M",
  "key18": "43Rg21XZAg1MkwoBHppEsAh7cErWNn6q5d5zxafae1bHnVvhYDiW8c9t184EHLEdDvoy5sLShhYawxpRiuEqP35c",
  "key19": "2S5yUzvXmggpzv78hvcFX43JBwYuBMSujJC2CEj82xR8JUYGe5AMtLb6KstHSgaDVoqFAF2Pc2aFzSgvqKG1SV6q",
  "key20": "5FJXYCVrUZygXQN3xKoTi8yM8MBF6SdXVP7iZVgo3QG5zwHWVvbC7ZgcnuaT5HBjkAMXPGmYMeviFKxRbSF6tvdX",
  "key21": "4ntSXQYBrTZ4xtxbwojUA6ye9YKgogbi1d5qPA7oK2sUzFUxSxsC6hEvFuH94M2Xbn2ZG98gfTf3k6MqqfhbMF2S",
  "key22": "4Ycpq26ZLwqmDEff1Z22zww7sTsaqjHwCz2McxHXMS4AYcJbsaC8dF6WJPKQ6mjLKve2LcrTWGvz3haEdDaiaQog",
  "key23": "2TwmNSJ1S2YYEYrZRferTYspcsu9fbFyfsNqsgM7MikyoKkBEZeU4b6kzgTj7T6dCinRv25tX5vfUaDWZf6SMTNW",
  "key24": "2xgLwzVdRiyHfasuSNfFUn571auaXz7KArBtztBrVvicEAyrU6n4fXERohTJSQqTcUb6Ea8Yw5YqJiirthdkbNUS",
  "key25": "4jVGVYosskCgpZLaE8FLMrB9kjVctiuYDY8oYwrT1wvLATBoGPSgRpif82e7zGstVAewx8y5YtCz91Puys48ZP7Y",
  "key26": "2zqfUVd3nnRBnAy6fS8bpwJJrYvCewSegV7EPbWgjApGdciTYZFmn1fJWNeLvan2wMiCm6JFstZW3xFiW4yeGyve",
  "key27": "2rQWx8nFUTZvPLmWG4ywMgEVmxFhJTjXqFwAtBrMod844FRnfdzaPMbHpr4abRpo6zYFNzT8sWd6HTFwBQGp6aW5",
  "key28": "uXXBgmbLr4fmuAu7hDHXGNsJrYPtXHZcwb7MvA6on7qohykQfLU97zznoYp4GN9vn6LEzXazQ7McDLGXxvkhtyc",
  "key29": "TcDjkEC8zF5oupsUenLjpKRKpj1HRmXFeyWdiqZQNuiEG8HP31rRe26E3N3ZpfR8oxADwfoZ4tehqZgF8e4Nvus"
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
