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
    "64iT83BmQkPYpm4Pe5C2jQDbHXdtiH2wSdagTTDaQhidCiSiNgknFZj6Qp79AGCdw8KhYLE1F9EWp8ybEx3NH8c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ts2nkJEoEcgox91HUTeUMdBffW7XhRhTqtfWcc5iyusYWyKQY87YqUtvBssc5R2EuNV2xgACN2nHQJh43QkHGG8",
  "key1": "5GeCu7NCFScPMShVVvmanvg3xjYYtvUf8ZBsxtVfzupy5G7qdDZ3Qv3xNxMVHTsq5suRn13x3jjUzLs6a6W2cuZ6",
  "key2": "21sXtamUGZ5eYwsFzTJfd1YtYbysPzjgASckiLMr5EU7j4WMkf8VrH8R7kqacfjwQ53DAbDZQ2N5g8QgGKVZmcPS",
  "key3": "4H3hxw3YdLPSUD5azpG8ZTF4mDQyHxGUfMShGDaH6ycgCVLRYi84D7GJQtesFzQysM2MVVEPCdmzhGsqKtvsAGCb",
  "key4": "4u5jqbny7wCFxHgKVibzS1rPUx44cnfYdRTxSUFjcQMTpJB6Acwv57YHTHLRaerL4YmNYpyCAiFf9qyJeRnyTTZK",
  "key5": "3uc1yTdQvfWnLpuZNqEi9Hy2eokDoNaQVWg9QfemA4MmZDVfUA7iZe7Y2yCW7JhzGQ4WpRSE1CeXxMGEjjcTVKPV",
  "key6": "2Uoy7tb6NaymK4v7fKbPUunDexZ4AmhfHqUSF2qRSSvZS5fwsmq3bYLZhVY5dMVkndkVHYdUdFQGJjhCznsTXtAd",
  "key7": "5FyjaWc5Um5aKHX3Ho4kKWijzC7Lzs4XmSWKdZt3gZCThve6ma6L8fc2GSCa1ekNq3BhzzX3zCJPz6cCcY84ZTmr",
  "key8": "b4VdNXQydxQnG4yhPfwigePaup89mb8LFauHoyF4M7Avmj4aZvJdnkMeBqrys4EUbJcCm57sv4fTN35fwb85QBP",
  "key9": "4eD8rPv6hgd5d4wnT72Kc4HNHP1YLPXh4zDR1hRLkMCeo8GqNCVRzwfQE4EN6cUtgtbxSQDiQjABuBkrS9FxpssB",
  "key10": "NApN27gvd2rn6L8Uy6w5xxNvwkGVf6ZovBQbo3xUJBVGU83YDYYRyDfCTyxLKaFkikXAhzrxZhJdysWdgd4cpeD",
  "key11": "3bCRvtJ9Z9dVqBrfKxyoSsrGMK8aBTAdxyxkCRSD7RNMyGLNZNRgHDoNg2ABCyWPhKrKmxHfmyXN2WCpn8rJfpeC",
  "key12": "tsYqsR44hDr7JvSTVJM7mQ8t6UvLsKUcQz9Z4nqiHa7Ga7Epkhx9krFXNgmRu1f4pAWJtuCoboBDKryJpFuUJ8b",
  "key13": "5RszyawetCyRzySt9L3R457yeAJSwReSy5Hb2yH6p8tVhNiafk94C2pead5zD1oQMmpNPKTHbVEcoMDPAd93noWB",
  "key14": "2uuiNiUTVcwtsToHYqCZm1RndbmszZVhoRGN9eDZMdxb8bRNiRsffikTJnSZVAM57eEQbMGCuozZYrX5K1dGG9K4",
  "key15": "ikzP14n1hneYVt2NgYZVUU3CmYiLUes8eBcni1Ktc8LSAv8iNT5hWyZbXB4oNPbNe2BVXJigXmLyRttG4n3YoDg",
  "key16": "vnr2T4u6zDaZTxyvXTN4C832WZo3ctEKVZLnsp69EswzTRZjWnfexe7rPbk9GmoPE1quDkJHZV5UHJiQA8jsQRp",
  "key17": "3wsnkrTX5VMzDxnsHvFkzFmXFakxfhsoCasRdLtWXdtgBWibJdZmxo8WXMBGqcfbEEmEXvqKzjS59Mz6Rk9WXybN",
  "key18": "2cNUNyzBTdZFybG6XDWWj3nnRbhfmsKCkbr3kMZcqGF6m4GcAz8gzG8k4TKkisYWwTzwq156bBbFcxUwx7jHcwKq",
  "key19": "5nok4iwYR72tAn74x9BHmXe9sSaruVwrWfXoH7X1oeMKJyeCxEqEevoh1APmAHq5D1ZMAN3StGS6QrBuepuQiG19",
  "key20": "2bKxUenXnSN1TW77tKWe5eLtPypBJ3aAGZQY9BMNWr9hTC2LwEeYxQCgsK5hjpH165Ue74QQydqfTVEg5Esc27pr",
  "key21": "4TCS4ePk9nnHLoC3SzJ8fZYeL9BCZdMjbyJVSQWmZYfoa2JD4p3azg9qTjnwHwEseYMdxh1BkEZRgBrDTjCqBPF7",
  "key22": "2ZfTUBsv4ViEvB2pygYDNWsacBDRFX3kauVKq9S6ejtF9Qu5nWUhTnV3u5FfSjszBYgSGHfEZ6ovbhNAPng2jL7w",
  "key23": "97RB5nR1oEZjSDoJ12gEGQTWoyJsC7YB4kzvo3n1Y181JcyqCaeEMrzM6fX3Ze9SBqCPULUhfrGpZHrpK8pt32Q",
  "key24": "2NwpgTGya38tPXuztWWMttvwXfUwyEdeEqmMbJVe8UaD7UjZxw1tqZvTRjMkJH3h24TrzmASos6TyeoWpD6UUVXf",
  "key25": "43L2GbrbPZceVNzv3ZAacoTA7RgEPVwjJt34kCrdySSDUEKisjPGt8pUMJBnbTom3rzLtChMach9ESBZqF15r8dt",
  "key26": "3QYyKnFyzPJCWyMx9jxKCCm3a57yZ2AAFzaqyn7vG1PAn3uiDeSfCFwp1uZsJnbarjh2mB7Cm5CS7i7pq36NbHzc"
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
