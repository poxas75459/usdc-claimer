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
    "5yC6oU6WyCsXioAQ5DZAkf5SC6gcyZJnEPEqcJfiMM2y5Zbnko1ULC4B9PMxZaspP3TrcomamHANFUYGFrU9pFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdN22atz7SD8Vtgy8buV41WzYeFb2w231RM9rKNYLpftCgpbahsniT9Y4PtrXcZsvsGmD6dahBSgXCTGTTAqNAo",
  "key1": "31t1ZRSuUnemdkcU1oSMkxFiCAcRDDpLow85RFMdH69uhRBoouDyZrGgeVyTroZQ8djjhvgJiGYuAypgetzsMK56",
  "key2": "2UZbFPnu9skktMCif81jYQYVhyY4wiop5r3cf1vAcej9M6MqZz7iBJtZ5gSmPC9nmNwFbMsDbTkajxJfVF9aXvdo",
  "key3": "3k17rRZy923zqFsF3hMVYdBSRBhSmjPSVKcMGgjz4crKZdHLaGQmSPm7fQschf9tiCnHX2fLfwcbukYZAXfQnQdR",
  "key4": "xJKLHhQfMvzvQNB2Ce6GWFaDeRZzEnVZFGNRf6TUrsPWPpmDvqK2jY1xSWzxbztjewU7TsNz2wLWMns5AfZNC2p",
  "key5": "EF7VdXcoZwpjxyT9Ewx6R23pvNi2fedaxQYQ7BMixdY48azL4snPQisQpX9S4T6Nwm2Yu1SK73QYCe6r7s71EXk",
  "key6": "HWezoo9MDLCYTDMAFXn6iVt3B7D14K1tJB72Qv4HYK2yNJWG7oyRuaGSw87rKg3HUtMH4EuqB2uk2FKG8VDT4NZ",
  "key7": "25ShJJNNsLJkZ3fudmq4i8Vox1KcpfoEZGRNws7qeK22oQ3tsg9qKk8SS3knNxxf7WuEEK5z1DAqKKtzsXLrHpSV",
  "key8": "2PmByWJS3poWpp24KHGCrrMBkaUMMM71mBztCAinfFuoqakusXRzWuq8FvB8ELSGx4FFhim5x5rwGhDNt4S4Tyju",
  "key9": "55SM2B6wu4wWEALjwEb7C7kxcuqCag539WmPeF4Wqt95f9fwEKeaPtJSeSqr6wempf4PArgtaKPC1nghLQ5vAFMT",
  "key10": "UB1Sgqhm8xejFeoiXVd3UJwYTCMLPNe59cC8zQwf36f76MFVaWogi1nzXDK5i6vNvvGstACPkSuuTYraToMSR1s",
  "key11": "h8SmNT8dH25MrKRTRPHRwqhQquzpRKKPs6WpvqfaHp7ntHa4TYeppjA51VkMU2XcWSMafgGzDvFxB3RXdszHHce",
  "key12": "5btxTPaNmgUiNGd2FD9HSs43gZp2RyYQqLHxgTEaeGb7kDpuge4B23ChJFFBtuq7TmBZUoe6cvQaHqZDPPhbfruK",
  "key13": "44c55Pkjvgh6RsM7U5TBkdqh6hkcgKSUprrcGdyLFQ3mpJ1uPmCoUdh8ubJn8hgc8oVzU9hSt4ofrwJwtVJqypwK",
  "key14": "5uiM2cvugnWjkk2yYbDr9ruV71CrvMrzZ3WyXkuxHpNDijQg6VUrz8mMHdSgQWWypoe3VRFx3TXNWJTT4UVUJhsE",
  "key15": "4hjaCcWJSVvFJEQjuGNKqpnW9XGVTfeAydVFFqigpzMP77p9EScPqGkwDPp9kbrqnEc63KRChz9aJHWod84W1Kbe",
  "key16": "2oG4vJ75UpEVHqXHj6e7dpwzcmh2Rcsxw76apR8NdTupxcQtbxSaG1KD5YQxZFCfXpedVR5VDGnFwR5EZ4A2RiXk",
  "key17": "2qwYz5QVmychXGbXoH3ZAp7z5UWqvy5JSUnon8Dok377trJiPjPg1KZrkRhCJNFRJRrNDAorRCgUAjXRfhz9YFh7",
  "key18": "2AWrASo5KrTN5QZfevZYqL8pihXqqJNaH6SahNfnkJtx55R9WTt7VehD2J9YsyjJLaCKF5gXV9AAzgGprHQinxP4",
  "key19": "59VyXjM7nnNRYaaL97fgwM9rZAgRALKiwQpekDSgmzUx75Qw9PxYxVbC9dxHC7v4Gr7No5cNJDuYZxoxQuLBQkKY",
  "key20": "2DbbmgysHBBDXDbuGfhepu5juqDNeW4eyM3ZETmPbK2H63cUugnP8xHeZLnwp65BeNJXrsfMTumHixxPHVH7DtuV",
  "key21": "4PPGtWDcCpYMt7QQYuDDAdMrbtcirF2Z5amKCo8cBgvCHA5Qkj1VU1XR4h3fLQsSyYQ17DU6W3uxuozDGvF8KMb3",
  "key22": "5ZaERXCc1AQRfp8hd6xjSGAfb7Eyz4SEj5KUeyS13XWKtiWRKeknEPkVv228o7VCcBRCe2bDrDGNsjQocTcjoLuJ",
  "key23": "mu6sBnMnWVBTZjtg1KioU2xHH9G63Gmxd8yJvGVCZbTaPA6fRc6C1i7yWnw1kX1kA2AKSBKB52hGHvSTHjs8DGH",
  "key24": "4xZCdvtaVAi3TtZS38Y2XQw8ESDF6MTXe3v2jx9FNbKWbSDDgCjW7rM4ncx8eUpAy6zbzhQ8g3WBWdenjmGhAcF5",
  "key25": "4hJmPyi1TfBfZUomqeY8m5TdP8NR2gQZdc3aCw8ybUS9rb1p8ngGpQ7THpnFE92LTjm5uiFZP2Qj7EPb679D4bvQ",
  "key26": "5ADMGRs7oWrdoYtuxdNLzvHiQrjJCAP9S6sMKC2mSjbMPXnXEEtapNwmLGLgvfxe71ktxi9X74VwgwGdQ9r4ixHQ",
  "key27": "Re9XzuuN61N49o8XpYNTFrpgF1Bu3uf3ySoafq7p23i3eKdaW7VwF2vuGPmHFLKv6FBasuzyj9WebuCTvyPePJb",
  "key28": "2w9r86QciKExAjDdpJ3jSqWTwE1WzNzUbreHJgYvAJjjpN5AsYwb28iG6yTMJJnLTZ8DjRrMnAFSGGDh8X9eSy3e"
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
