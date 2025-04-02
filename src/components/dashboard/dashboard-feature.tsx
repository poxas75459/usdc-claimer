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
    "rAbNo4JLpFct7Doy3crNV7bG4Z7zs6btH1ZfBQzeQk6TkUbiBda7KiJ9VQkBRExA9EmUjASG1G2ZvSD5AABxDZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uqo327wLPDLs17wSKcE6HbrMreYN8ToWy78ouoPUphZof3nSuTKAotxEzAkuAqkYcySboW7KUWK1DkR7GSY2Bht",
  "key1": "4PrVpquKP24ozLbfLzNmqYxtnGPR6ZtocFkF6McGQ1JssadCrVVf5DwGpfLecD7FdeFJYuhnb1hFjTf6MSGZJ58m",
  "key2": "58szjNHZDYPLnz6ZMbph5rsQiXwgPUAKZzoc6rL8EV3h1Br2yzgAiUFuhQNmyt5EQVyCthYTbHeLQRQHQdRhWBGT",
  "key3": "4TibAfnkuGkYs77dRPpWfhbpsY4TuCLRyJQw3vBdCopUZr6nSjhWi6GfhVX5fAD72xea3LEzU196FGY689UdT43j",
  "key4": "2AbKRPFe4c1FQRrmiReRHnJHqj98RGUdS2fVDGVjMhdM1WXAVS58oW8aYG42tCBspTx3MEavvNnsucgXrJ9SZnmn",
  "key5": "7Db1AAeTcaKBFSWxnYS8GKRhFvACiKjNexGxwZykY9wHZACpQjkDRs1UsT4keLZLUFdk9Yz1EWeMbzu78wf7PZ1",
  "key6": "3ayeEb9kyEWy1vGeL68xuLkbL3LWgm3Wpjps2gW5zQTyDV5e9jxHnc4Bk8PTmiJ1oz516n5UTM1fhpBM3vxhkdut",
  "key7": "3ybQkNuRgzEiD26cn2FWqjimq9oSFA96n11wRLwVdpxP63v94SY9dbKZ5Cvbu59vwbXp79DU8kR1whDK9oU4uGB9",
  "key8": "5mDCL2oL7nekpR6ZeQGW1tdMHFiDm6gRojRSbYtEw7qB1z6mUvzsHPsJCRGYzU7NeBzgkQendFNwcv2zXg7D1NEY",
  "key9": "2TieDrTkyBYY3rq7YsERtu5UYF9H2WGDUeSEsThPNXNHp5tydS4z614fxmHbGgthSKGzrRvnC2B9jj5VJdQ5Jktk",
  "key10": "54sCXWhzi3UQ8sMhmWg5QRvbH8gdVwW1RqnJgWRtm2S3iFhpTf1Kpqch8xe4MED1kvLnkZevwFkstahrtu7VryL9",
  "key11": "3ayc2kTuP3TCZvEnprj5mewT2bis8JopJpGvusv39c46H3gi1WvvWFbTTmF631WBDp88nNnPcXNSrrcsxDEFtnc8",
  "key12": "5yZCRepdmBf8yRpuF8unSNwe7N1hms5Jj62VVfJP3DWEP6UWtgCF2PXYP5wX9sYiPFqVWYzGU85hkY6yEy7vmbhH",
  "key13": "VqGzSCDQzr3m4qmhpch6Frr5Xd3RH7XN76vrfFvgMhVPUKkNc7Nqm8mw3jACRASYSCtbm7r9bgzmCpYhtWdEmEe",
  "key14": "2s48AcNvhZeT3HdN2S9uLW1ieyXwzeHh8vfZSeCNQpQxQnxQsb9cdyyUmjWVU8jn76RpWJpyhLP37WAYSWSaonFF",
  "key15": "5ZZAyEa1GFw54B52jY5m8GAy4VsXPndiMe7pWc2rgNRsJx9YEMSv7cst1483e6NYbjib3tsBEWW2jazVdf7vpkwv",
  "key16": "3zUgFoJxKNGN2yE3t2oSCdVTXkTdzH843g43puzCSzz1BhZENDWP9S8qzBDJg2P2jHy2HCnGMffPWvWKy1p7z4Kh",
  "key17": "3efokcKCBCphCzTuHW7fxS9ZTx17YifoK2vPQ4WDxMUiVYB7DJwkVfvYtVtMVM5a7d5DTi7iPY3snnZbDBi13BB7",
  "key18": "zZNPEPnYCd8CeBCHQ44T86CjkXyHryJU6WeSQAWy7b4kzNLxbAWbmFUu51oub7AszAEUXN4iwgTFqZJdeVTSi3S",
  "key19": "24sZFWrwzdq8aSfkiNYAZNpq8pyay164JsxJnSXBikhoMaDBKi85AbWGQ1HKVE6fnTtSyi9Yuz157cEqMgpEBAG4",
  "key20": "2RUAyLaYHR9ct8PxPvjBNaL6NXYuzL1XMws7mxnYhUG1Sy6FEhiuQ6RgmyC7E2kkzmB8B9dQCMRmd87pACDwF5Pn",
  "key21": "4eD7ybNDsdQwQCaLqV5NdZi1tYRZJZaoFAgAJdYT1xV5b1ZZCTyorFV7CsU13ALRo4cjGorL5o6JVE3rw5i1zX8y",
  "key22": "PwNQVVD8PQFZQsxBGCRysMGPE4MWPXjY8fbrfzaezL7y7TnRk7C4STmkA3VumygbL2efsHGzMDParVX4vXCCYjC",
  "key23": "5uuRDLvi5rQuKVTgp4Ng8n7HqV57ZXFwAWcn9mA4WFfLiSPjR3efCr9hVjdt9rXAorpzLgZyWgrqN9GoceUs9qDL",
  "key24": "4sMURLK1FKSd1G6A7B6xLcWwevxXCJviAT5BzSTjDtJLXXaKzcXBxVqdNNi9JpDiiLUdFBVKuXGrc3r9SMg6rp7H",
  "key25": "4ub37JPEpKzeBchp7GsLL721e67pj6xS9iENWP5ngspYvq19paP2C8mTUMtC8cbrWCKTVcu1TUMk3UtDqLH7SgVw"
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
