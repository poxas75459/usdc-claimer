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
    "4uB3GdU7pzHwAgRQArmsTHegZc4nSFD2QCbCrjAwbuszqmuDp2Ru3kGgHhEUJgjqzabJHyHhLcKjFFsp9C98iEcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTKd3kFeLNngPGLRf7yz74RtKWQwf6h2AW7feprHLwy9Mijre64YzGPz9u8PWsMQJHBhsEacYhASwef2VpxtobY",
  "key1": "2GckzaAARcLcbk4Hn4JUQqHSBdFkWqPd2uHQL5dFHZpmPsfN9r5EBk3BrAcWLafg6gw6QcuKAafvUoo4WNiChK3x",
  "key2": "23PFaz1XsfkgbPr7X7TTtjZUyew7xQiqDDuyhH11chMbwwgjPM3ZjJCwUtx4tXGqFVV3RQVBAJDvVWJgngs7qzkz",
  "key3": "3sCzTfSoYuQiDfLNjgzNHu2CC9pFSje67RPvUVYG3xsvWtyyChUTfs3yqVJttx4F8HwptZVK1GFeQVUn8Wfxo8Di",
  "key4": "5bCphNzzD84V5hGKJUsWZT9QUh8ctyfdNoE6SAu9ZtR7YzKDMG8ctkBFC4LhyUCo1tbyweEAJLGbjWhDwYi7P2NV",
  "key5": "4Xp7k7NfRXADQDshfm1kx6Kz9aJdqk9dprcR3w5EALkgeMegfQrBZf8zexKpfnesEMoqkTMBTtdi9QR2Nd31Qf8h",
  "key6": "2wsyRZsE5BpXMGcBy3mZjJgB7oVPUxGB6BMDCMVqQRUewkrVdhJDMCgiDNs1KNtPAY1bND2iRcYadXMBrT1Gc6wB",
  "key7": "Fr3ZDMdhhHLxxpTmBvgezu5QaovvZhiwNrvSNT1TtfquTUodBLrTyAVhZKuKCTnMLW74ZWidoE6o7HekFk3KSuN",
  "key8": "4HCrYsTZQVFuGtfszCSepSSQCxQLngz29bdiAeGs9DjQnzEQ85iTRZj9paypAjaPMRgPJuB3yxNK6FNTnWHwHzCs",
  "key9": "4DNZztuHQQDMyw7kAUQesiKQrWRsQzJtQSbJD6tM4sx7D3dfAJ1kWbpSuoRZdQAndPNefwSu1PsGVic9TLmemN9J",
  "key10": "52o3tkT7PT9nBaPJ4Sz9T3T8DYn7uXeN9iWMh2RB5Smxqagt2aurQdGS6zN2c6wbFL2Z5TBX7kjgNRr66Jm25EFi",
  "key11": "4iaqWRyxjyu6tdU2fHwYEDwJUnRbkb5NRtNDkZTD8JQgMFAEttcdQecKX5qrGNGPEiJ7bmKZ2U9wCzvBGG5qU8k7",
  "key12": "5fXHXCtUGmtDeMuvGHnsNUcZyBjnToXwjpshBMpm4YJg54sNzB7U7KBf1ue33d4r4mcA4Lnby9d72d9JtBrGpaki",
  "key13": "31tfSuW1SmKKSGBkofxajHEx3hMXrWvKRzMZgLUNxkQjonRvgw4W92HPQHuWXQqt5PQ31FG3QPGj2SX6CH7fSKtQ",
  "key14": "4us4joT9xPdmXizg1gN5kXj2zKL7Zq3WCvzq4bsdvb3pKsHsUzmstk2KdDjjJZCYrQTY8wjdqzThg4fTDeh57jYc",
  "key15": "otiGbxcnj4FUXKsQhgghddF5iPnDdP78AuxkpCruHScqYEUuQBCyADg7cwPhssMAc14MqBStZomeYWkVaf2fMDh",
  "key16": "4CEkABkZLuxufAX9kRF3khqTqHSjo5c6hP9fWFneEdpxRG1kTMmSQB8537CKZSZgTXpKKp9jNLf8ppZvWfLU5M6c",
  "key17": "59WjWX2LD9ab8jkDGDdv3ufsmCV7qqQJY6SPjGBkKoTMC2FU6CY7GFXwmh5VdEZLjuXcBNzCnf564TSfbi6E56za",
  "key18": "3nTcYUuw97fVNuVz5oSC8Uvdn8jT6Yi6xkaiLoSwGoq1wkhpui8h2i2m4Y4ip2sdHXTY4WYifM1vPgPRDCrZoRwq",
  "key19": "5qJBwYgVim8qRCi6kMX3tW7Bn6S4JG53QM3pWj5sUL68eLky94XpotxiqVQPZERmbiqk7FGAYpujgWdexrgxg1Ei",
  "key20": "2AjkoMCELA6vcryg8oQPbEt2Pt1qRfR9kgVYE3g9ZeiAcuD3jEZMG5MbL556U8baQPDCdKc3WNBDtDWsLgWNywGQ",
  "key21": "goVJEmT7GXwnixHpyXBLA6k9WrdwzXbqWa3Jn6fgDGUSVoorSZaALqaVJ5xCwkZDFiLApAhsDzxeTY3isAjm5Bq",
  "key22": "5dZoRiZGcKBZqLiRMwrFyJAkCPj4NnnJrndX3QioUHWgQBmYTAbzh9isbDdgNJ3ZVjWsfpGenKqQkoFatVhLYDDg",
  "key23": "5rXX6biC9t2F3qUocNphXUq3CL84iQB28WTRPnH9U2tp83TyWHCBbU1zFh8qjc21XrRB41Dszzg2pnh41hyyecr",
  "key24": "29JT1jHt8HZ5xgnFdVsPhpmSQ9RhvbF3yCdYQJjr2T4fonzjhKfYFuKFTnZfgEH4kbERpYsj82zgnRzUC26Zp7WS",
  "key25": "4rymDfuutds9TzPr7zFsHC3ofiwmPwhyUiPv9wBXqhDuny8RQMgYxQcW61AnztDx6dmf7ueDP6P3Fab4MXaCqAwY",
  "key26": "yk4jGaHJQCdtggsCexvWAPGcDz2YtfMmWbuF3ca717yfZv4rBPBXp6u1R9ejfZZ5FUypLY1J3cQm7gKmevcATnb"
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
