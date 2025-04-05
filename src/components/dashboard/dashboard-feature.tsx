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
    "4xRni3mNx217L3FGNuAowhALcEerFqB7hdvPJmNeu4W43iwvA3V7xxqcUrq7EnNtEsMXi9uA6iwwCCgjuABVdXpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DoRKDGhfTS4VTU5UHLLLjnfpM18SZNFBeFixADqUV5PU9ycLy8grmwoKLrdm43DMtu18aTphtmYFmtGy4n8Geei",
  "key1": "5ouWksdqVMgBxXijvC6UBje9PWMHbc6X9rnapap5HHvEAm44gQU9g2MvQ1oin1jkAvqaQs7dA1LwfXraSnJ65Q4y",
  "key2": "5D1kxbEfxR3VsfVPNhEGLmvS4ozGcQceZAPHvgVaJ5WxfFtjXktQrtTmbS6tNAbZ8p9Jh5FWVSPwRwZKzpb2fMna",
  "key3": "bAScd8hEA9gcLD5uB1Jui92Gt1qnR7t2Qv6hR5VZTaWix5Fj75aiGYpkb3X9drNCzeQXpMEnR5NAwxi9GXsu74G",
  "key4": "65Ce4hqQcAyjBZ37GyqnN82qPmPmoXhuYWXhzpuVMnJQg5BturUcTX519SsEAzH2h6WooDAV8fqYYbZgaudPGeW2",
  "key5": "4e4YfafBVU6egq8oU9VjWUgx77QxHCsD8zhdKued6oBwCPYfm5UsyJoooL3RT5fCfyLraxAzZSpetfngPa741x3V",
  "key6": "VpSrtuv9NCVevzGcpdxyRZcGNhWRAhtuki6ZAQjhUWt3wWFDm2sQGCYkLjohbfbnp2PzVnbe14VErNACW4Uru8U",
  "key7": "4KnNyBkWgMpwY7GZZZjXGYnBRpAcgYAYMjNWvUSkb9hr9yaoVUDq6V5Lp6n5zTS5zu6Pm8fWZVbQRmX8d9GQZYqr",
  "key8": "3gNxTtrUW3hTf7KJUEyU4a277SitdczBcWv1Gn1rA72Sr4kwrWBxZBCsTNytr49psvWcXuxUgj2kZFncRZa4VfSX",
  "key9": "j4tGuwXVnPh9Ne5HZJ8V7cSgxJkvsZjbWrRz2PhDq74mnH8VMXor3sTSqB6D2EYTjX1VWF98P2z2EG87kqJBuSo",
  "key10": "2P3oKYaRCjdX5DVcZYMeQaB6fLUWbaiuzvbLVZug9geV1nkngG7Z8PyppSCXQGaZQjMCkFApPNdJhA3biFj9BjSE",
  "key11": "2eRnioRMZEq8aEGKBjzTaP7XVdKc6Fk9cyH3Vq6SDWWmAojfAqBwfch3F1FLmTg2ayPbvCQzfofpucfrwpJ3qLQN",
  "key12": "47AjUVcBA4yE5NGQGjTFZxxSSZt5qY5ym1xhDs1Ty9ikW2fURnx5xDeGoXEfBwwVxbcNv99WJBaNgqSFn99a1XPq",
  "key13": "5xFCHWBastc1fgZvmWBDZomDyXy9ocNnsipQnw2ciuQdDfbwqaqNEzjbQGwEqHKQUsKwLvx9Sw9GNbZUe576xjmt",
  "key14": "3xv8wMty7hmh6eCPeVzvJe2WfCk96WXHHnqok9hH3bEsfF8LMXGecSq6hv46idz8kZ634Yg3CsUv48z7CQg5PeqS",
  "key15": "4NE7yHtX9gigtK9FR6QNmnog1JXBQYXjp7Pi9EPE42DYbhAjA2S53aLBVvqwQUGfNpgKd5xfKbvBMPycunDMVJVv",
  "key16": "3noYSkyfARGzBLV5deWRpPG4xP2stsPJj5UF2Mxr2TP5ekvEraNSByHA3MjWZDcymWwXSJGoFRKKVMXoTu6ukKqr",
  "key17": "DJREVVMepAcvVcyd7jyj3RUSC6JSDXw7psmoomGGmm6PGoPqJ2GAcsn56FuFeZC4u41sLkngbYZdGX7zuVSnrmZ",
  "key18": "FX4ThRYRofAQMVjoaxdanAEctmEohCHqqckGEebbp7Jh5cMfeaMZjikgV8zixb6WUjxX4waosTZSFEJwA2sqFG6",
  "key19": "36izjZwNUY6QJLBM5AvGShTY5coFbYtDjnnu9xW6vVpL5ARx8PXo7DmXZvz7FLESCaWpLSBdTfxRNUZNTQsjBUYZ",
  "key20": "3LkLxdbAe4sH24hZNdKZjUna13bV4jhzwMawZenuYW4G2UPHEK2b14DFVLUHGVA5rF19RuettUNA9garKtxztLDz",
  "key21": "dBELNqBmA7zX8NJz7yVoroWg99uGWbsyq6CEcC64xvNRwPcDzVkqAF5fFf12m2znrjv8qktjRCczMJHTZpieEWs",
  "key22": "3ApkCY1Ly9RVN7s7kfn1vFdiyMKyVCpW37Ea2C4bEBEQheQ1CNAgtvisFVuXu88csumL7GdiV8HtkEJsTHYUFDgJ",
  "key23": "5VpL6GjpqLYD2MoUK7dVSTZhj95nZBFnK7RxDg3KSYKzHu7DTC9sbGfyVugyjtTu3L8YnieUrZo8wPDkPGEHucW2",
  "key24": "2Ri99hFJHW6nHKdS4S7VuSqZWjKAXLZR4eqP3FZHvmJUD1oJHRxbgFFGZtDmvbfU9GeFVnjSiAD1H3UHoFWkAE1k",
  "key25": "zmkQd48uTRRh3A6UZfcKD7szURVoeMm9TwQsM3XaeXjqT2hMeXT8yarhuz4N7zAcPixshZM1oBJsCigiUQX1rCQ",
  "key26": "3gtcYpPqop1oMv7p2s7PBgVWxtvNWKWZZDCncFgxn3BvtHKDShbxefT96LmRZ6J6GBZXDF3UBrxraRpa5g4RhXY"
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
