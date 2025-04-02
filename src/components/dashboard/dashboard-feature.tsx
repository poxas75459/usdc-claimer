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
    "56wdrQbdJeMzmuXsWoRpJPrBVKorovwGahxT2A1vttK7aWEVT3eC82qLi2nV8g78DGUuxzLZBcbYkzuUJ44yUcC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sp5wYkw17YyGeQ97mbY4Jt4oq9b8M3h1V4vChACYo4WjBW9M6Mvm1FFRW3uEB377fCYQyypDbzkxZaXHTuKbAiP",
  "key1": "2CAdgwxzB6CmmCcikXFeocTbgkBT1Fih7dZprTRo3Q464ctvK5DGqXSzk3HoQ4TUscTZ2h2MHawWZrPXqmX8zKoi",
  "key2": "ntLPVfCyNspLKkGCkoCSgQsMuS8FXZRq8tmbvMW2vGebHPEB9vhF8EjNyFB1teQyK38Sovup4Dfn1kGZfX42aun",
  "key3": "5YR3h6bRiJEFx2h9twHMEUALiRteSeZEnzzo7B6R5YE9uC1DhCxPWktCqeSXKAgYRt1qFBJmKbwkpoKdHgy9qikm",
  "key4": "4L2wdV33J9CGG7BRiTCyXPXKpHSkTfZs4uiVhzvmUktpk45Wi73jqJipGKTKrhdeshH92UmcrkWt4Q9KhiHz1H9p",
  "key5": "4Bj7H7FEAZg8Zre2auC2bmYqzzQDVRx7bkdK1pLSWEZqJ2kx1SMgTqHCXxCkPNhKCGuFSkbcQoHsLYyLTkXboZbS",
  "key6": "4XxEj9rsNmWB4GSvbz6ShKGTgDYbVyUYjt76QZ65reo2Q4cmT3HBibWqNvwjcJxpWyEkvYdj8uR19hcKxcquSpHT",
  "key7": "4EN96zcCPxyfShZFmnabwWi2hSyoBLCaAnHybd6CqZ72ZpRVf7GsuhmQekrDAKr6dYachMgQuN1YNbFp3C2uAvNE",
  "key8": "4Y87apTickRbSdSrkVMEQqSdmLzLnW6En4eGR9cGT1dNJVRxRfHrPC2Rj9JvkbBvTd56FzYuhibv3K1ui6FQu4w2",
  "key9": "4o6SHHy6qzNLTpYNoEPGaWmR2qMpjMRqVHWtaiWmoaN98GLac1oGQFUsCgtoATnAhsUNup1DdTTgrzCWxAC5fyfn",
  "key10": "47zWdwZKw4sMSfcTkRBApX9cCToBBYgELcavxoYzTh84JQWpMkqzRaLUjbQxyhQ8RupJXiUXsMZTYzegw7qbjQyH",
  "key11": "3WJ2RmDiJw1x91CJgPamZ7BWoL5EUagWFKUG1Fg8q4KDXrpRCs59sBs6tsL57on6UMrpBLMcWgxJcFjZw63SdUGd",
  "key12": "FZ5mVnVnYWL5AFZiLvgFaRMh8PRtUTLY4q1DeLaEbbz5UajzJMB5AmLJdcMkw6RQf5ZnqksG8xL3ncFhp4qkJGT",
  "key13": "3z7Gu5sZKREvx8GVNJaQZt3xVyHesvbpvNR74ZTqZRFgXvhNWmxjw3TyPg43cJ1Rcy55BXnu4bqKFbSeqCYJXGxY",
  "key14": "WY8Wage2zBMUtgNuxVCwKmDpWgmBPV1W2yFoG65eJfsuq1uU119JyBzZtYwxM1BZRenWUi9AWt6M2f9qLaQCm4L",
  "key15": "4N3P215tNxbQz2oDiJcimMvYs32voDd35PwnzoCcz5UPGHu3Pr2EuEerHKKSN1fkBGz2Ph2vfGY2atnY1QbEztpv",
  "key16": "3763NHRHiHvx4BP2mHckFVwS97KCbv41YgCXsLKwXuaR1gBjX1YACoTfqPfPQUfFKK24ZDv1NGYX89xJstiEqrQD",
  "key17": "5jeCs2ahMuzKHjP7rT9SZT2tXotBFmfrHFFwB3n7t2kESXCsGVv7kMtxWZmscz4q2pbZMqgGq2tEkKJBE4cN5Wcy",
  "key18": "3yVUnA9zdaqqaaaK3NaxC5CStsNTK5CZw6UvxybVhBhUDHkrRgdaHEqrEXcRUznbzShCZSRX9soboZRjW9hyy2W5",
  "key19": "gkgQCCSbmnCFcaNeekik2fXftvL2MeNMghpLZF1vNpte8A7jRte6kC8jJbQnu14csdtchcH8GF9kZhZ9HvB19zu",
  "key20": "34qdi3uSDzUTw9NTDi3mYz5FZae8fUrB4agMAWUPxm3rfi3dTzhdzmSK3oTgZkFewkYmAGUPfwPo2TA2JbXS8Kmu",
  "key21": "5oZBEKZpkVTE24UNwJ1VdDwqZtv7LTCvnf1hAV49zqhEQ8JT5UDQbe6zXWbfAo5PSCLowZj48rQ3Mo2dAHS7z4G6",
  "key22": "5vm4Uw9S9q9UTQQ3X1vXsAZVMb3pgioYQBs8FQDTxoA6Fo2EojwaLJAHF2YTg5J2MacQJe3YvPqoSfb4MVhJuXo6",
  "key23": "2N2BHzZcjPHuMwFTKkeeWeNE1HJANut3QSKsFWrGZfsUoceJXwV4ezGpEHNqEpjGYVyUqVJpXKriDZ6bhfUseqZP",
  "key24": "3N95YqnHswZJwFuxgmoBy2sUEzk2C6BvTe3njPchuwxKtaePT1f3VnXCGcaTszHfR7FzHJhavRxKbNCpySSMLTin",
  "key25": "5xVNJPExMXieKBNM4tjAiKNauiHTUcgKhQEVRxPZuc3BuMRkWAe6iXT1jVfyzs25AyTMvfhgyXaCd2WJURHFAgb4",
  "key26": "LogWzbqAfxfBtCmgXag1QMsb35behXdxuHDDcXgNfyex3uHXRZFaqu3nhxJVhRfGJHm55iXUptQ3qJtTdzY9H6u",
  "key27": "3oK4mXohANWNGaPf1NJA4w5z8v2mKva6xNzeuKtGEYcaqYH6grW6HciZzUAi4yeKiE68SSjJRKm5R5xmjhNieZ8Q"
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
