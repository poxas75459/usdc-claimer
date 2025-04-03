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
    "XmqkYiNbmv5VyTnVfa1GWaF2JhxKgcUg5tYgJSDGQqpQvNu6ZqdH2qG4guRY28zHj6bV25JSCGACTarY3BsYtPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATwqgqX18SJCCmsecsDEzxkoJNhMHe7mu6f5YTPSfQKPkWBHV9nMceFiCgJmLRT1oNhCbYNpk3hRuE1HEYt72tz",
  "key1": "5Yy5LpmsiACabtm5MdC7DuAsDBgCGsawqynEmbPbgvGhB4jJPVpgGXnXjFgowkWYrZDtrZ7gNXxzQbEGBVQ583pP",
  "key2": "5UKgZchT5sugkyHRutgALCwxNo4xUTjwbCx7KjvmpLghN3AqRQdM8UihrsBi3TrHsHxNY9Ensh3rSPywHPcQU6tt",
  "key3": "4fd3HfuF55EEvFdV19acDWdir7SCtMaoLuTYhE9HCC94Gbo1sbQ2W7PY6gyZCCYSHh1yXsBHnePzmKgmaBfmYCGL",
  "key4": "3UfLTTGTZbNmuEM5n6ehDe7SXLAtaFkSURMjyevqzce5dae7pHWprBsTBAyKfGRLLK4rb9zqrXvobwMSJyx5Aqhp",
  "key5": "tTxN1VL3QrSkhUa88Qr8tpNk18K56KvqfBi7JxpnweJTPcSk8wpUcz2FKabykvSk4yeC8Ld39mTWhMSUvKwtBXZ",
  "key6": "4A3BkZAJ2sVWGoAgyCQd5sHry4rkRFvp4PkugFKJHByNsT2drkCmPD9q3mTupsC2V4sVWBJRX8G371r2xteZf6U5",
  "key7": "3MeKsBcnDnLgPLmEjpKdNLS9VojuqSBMaYrEFhjji1aeoCvrBruv246jf1PtXPZ3UGoCgJm3DGMfbafcFEdgXhz",
  "key8": "3tGNZSBqiGB4jgPd2UgbTX4ddCMiGPgMUdhn8ZSbYWebgjtDWarsjT1RgoeA4q666VxtNEe4vEyhpQS1bxkGVVSk",
  "key9": "3rdEJzribcX8wq1isCv2SJLiXbjGBMhdQ6tv9zHmrGc2s6yGoU7gDimPjnJBuWG3GdqEkJPVZePUCMa9KvqNxLfW",
  "key10": "2zEbDMwJsSp7ZdUpTP4Z1HHgn5ES6rV47tEAMh9fij9qeSDVBXTMQSYuiG4tjta2r4uuuQ7uDBHfEkqCBkCkioXg",
  "key11": "BsWfHQK7EnLnyRRQzPnyEGXrJhp9Pwh3cU8ASYcTAs1rbPBu7qBAeqE8bziWfEeg5eHXPpPNXXdvMUHJ5h6zm5M",
  "key12": "xRFdrwkFXk4Dg39cM8x6fzT8mMbMWwQk334w919EA6XM7tuHd2jzhjD5VkJPPyHCe3jsSzrwk6RkYUhmY1D5je7",
  "key13": "5D4RbRqBHVMFvVEgE8Go4NDffAZx1o3W7MjYxrJsVDQa4REM3rGyji2dnWqTJDmsrW3CY28G2cDGX9WQejY8h6h5",
  "key14": "wRyiQvBpdZoD4UWeyQzqEKhqFmwesUopyN3bihjhPnfawKEx5uMx3nPebWpuUZe65Cs4vcaBXcLG6wx9t5ceEkj",
  "key15": "5AWsWcT1yL6k6MtmFFad18SLyFhEK7VBJH9cBCEC2fy9CLdZBvuZt85JUNjZtRo5mJFa5Y4PK2vyg7Qx43Qkxm3v",
  "key16": "3pie9xqxQC2LGwgejWJigJU8muPeHR95mdndsMQv1BiztJ6oi2eE7qBFqaVicrsmyTUXvBgYBFFMY2oAjfiF1Hmx",
  "key17": "46PeykRiEQZyMpTD3BDDqpAdCP8PZRKivYZ1RDUi5xCvCvYQhYZiDtf4WswCHR2UZgxBAtcTLtsSq9hWwHgqSnJR",
  "key18": "4nJddJ6GwG6SJoKH7XaC3JQXZjYs85d7HvtafH4UaAqZ4s7mXa5j2f3eTv7jxav5xASEfTDrF2KPdLV6Dw52dNbt",
  "key19": "Gce6PsgbWPX5he5ziQ8658jfJ9oDiQhh4qwTjT2Hs3amXfBTQW1hw2dSXKtzkieh4bQiJMzUTG7W6mwagRq43ng",
  "key20": "GzjztorSZwUF37JGp8D8R9a1fgNZsPUEJ4ckWsusgmpbdoCmE95NuVZVkfc5wLMWyp33ZUfefshsQS42FETeAA5",
  "key21": "59CBCVuDjGeUSPdtPkPfb3eRsGgAuRhViEVudbvXKqTvvzmbAcRBSFRwhMWAD8zjCHkKeLzYAv1TjBkihrAHpnRe",
  "key22": "551KRkMb3cA2u8e9KqZicLGEDKRWpMCFcSzw8Ex4hi1XDRY3vV715HgAu8hERKSQypmsJ4toyfubAXXMPk32xcWY",
  "key23": "fhKUPaKixU1uPEgKynuXUEwXVwjz7mMA2RbTP4nRoNjpr3XWCyCaLQ3RLNd1f84R16t4dyxunqo5pfySaMXWtas",
  "key24": "3L1XDPMCbm97uGWNm1UZMB1tW2HEMx6m4GCfv5vK1JRPyodCuUG1fZjFVrA3WjE5fbwfCsiRbKGHuFpvpbLSutYo"
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
