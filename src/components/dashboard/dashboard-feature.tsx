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
    "2nj8ZxKU4sCNFUQPybWiPBnTGCLkhqGZvqQTiH4TraasPkZdFaS6ahMsSEVnBv8fqtFyjL1KKR7XtZFUjMgwM1e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whD6D7XeUgBKwrJv5Mv3MvXx4dy3BxMH7RJc1VGxHxVDDHFAiVcwPB6X795ozNCxjY15sEV7Qtr8TkBZqy45CWh",
  "key1": "29BZGNat9J9V9SdWEmzsXHSAK4YgAonjzTWqUjkgEn9NB7HiDhrYUU1DekgE9nRmRYt7CQKAU87r22TYd2Sx4q31",
  "key2": "2WQzD8Lzs3zoHKNd8dfGCbjSHKGfd7Ljjs2bTaBPFdBzmbLvmuBK1S367YE6CwbVBexNsZbMgEar63GNfeZecx8t",
  "key3": "2D3iaGsqQJkXqjfmgN1RowssEmzcfvi2LndPX4QLXb3NgoAgXJXdFCTeRMQ6FeMQyc77QUKKJjz6Y8uh9WPZAYJq",
  "key4": "2oaJ7HB4FNbwZ3r9pYanThPjLyPhHC4FwDn6ak6hzHfAAukw1N8pUbHrvMtYB4gYjRPXp7JbewkNyt9grMrAmbNk",
  "key5": "2EuYeaWiHF71btNZ3sZdBuxsy6uBrboMZbmn1fs8qs7eEDRJS75iNoU2oTXu35Gs4hWhX1zgabe3mVnuNnZ2wEE8",
  "key6": "61kCwDWMudD2jvLG2SAvdFdQEFoEpBmSPnJwzqbQWrvWokP2GAoxboJMTtzctdpm9rREJdupkwpeKTFSysGFXR3G",
  "key7": "25ygtgZz15cKg3stZXED2jvn3HP6kBW9q597U4x2i7o884MAXb93W4MzzpjWX4UN9761hwyVKJVPpN5S4F5oPiM4",
  "key8": "4jZ1owbwEwEGydwroiLezBh3cfgakRcsAbqh8WRXgayoBLtQZRrUP5n9D1aVWnz6NgK6cNF4N19ACCRSKRv4a8Fz",
  "key9": "38b8ZzhNxQc2QNGfC6koR857PquuaeAJe5HiAGwzyNVZJKoLF2N6rARaY99nDmteCv6Rppf94oNJgd6uccHGDzgq",
  "key10": "3mjQydM3vRzzq6euiAcyUsNZJFzHCQk14Cz6DQvtLHehv6XjTZnFb1Bp9gp3JX9NXEhsVFQEUQj8KQCurPKxga7b",
  "key11": "4bXfuaj6WPFRE2KnKfht7zwyryVXiXDtmYSy5EF623mxXXmJe6diAi7JQcbJZ88Jj8X23KaQVmhTUyQDxGUJns9H",
  "key12": "2tGDDACRb32jafmTVP9NBtaMm9GWc9iN3pRKb5228p3Rc7mJ4PLiJCswENBz4c4CBS53CueqaWPY1vTsyX5TK6k5",
  "key13": "5GPdc6GddxaP2Yxh5tC8A5EBLGXwLiBkfUH8W5jNKQz8Pvians9Nk9nWYMfztPvvByxUXsK9eqiuiPS54yYUicdd",
  "key14": "3yYjdQR8uaGue4w9QtAsZAT6DVfJotv2gwDktZfAD46gwQagmZiZb2yL1xGgTssy6c6GMC5peuaGABh63kmauTW4",
  "key15": "5QAfy7dx2px7G4BERVEhsAFU2GbBQ9CjoMP7tkGaeiVDzn48fyDtbuQinpPaUikXHVUfAixKUKWAzRejC7hSXG4f",
  "key16": "9y6R1gBP6STn9MSULLm4utM1dNuNiDSjGSpfJCtrqRWh5q8tnKYpSW7g7tY67kmw2ebWN7ZUF8bJD3bcHrgKfeo",
  "key17": "58yr7bhRBjLmNq8g4z2BAUQW915K3shCfYSKmf5ey2MaZUsYhgUViXtWgiCuUpZLGthNSCwhpnkqGZtH6YrHisEB",
  "key18": "44HSdZ9QeRM2VqH2bKBHBrguXi4HDVrSs5QQKEvSzfjgBxtWWyRpA5krNXpjCEPtkw1rriu729oTbqBsqUt4c6AG",
  "key19": "3qSiqXb7k76SNX4CXvcZrrFQPNffSftNGhQb8VJcF3Sv8CQtngwmYhPE7SLNkkR88XhfjXpRhVy1oZds3Eh9uAQE",
  "key20": "AgvPciGkbJJCD9CRNdpvomHWtFv2du9AhgYLsR2Yj5WkKgkQ9VTrmMB8fi18FJninG6W8kmBPPMKSQhVWk4KgiC",
  "key21": "4FfeSWBZT5RyzY9sAATZZ9i5yWdbKwmcee17F26cQsN2WsTKw2soeBHcrbAULJC4DXQGDN53pHqNRx6gH7x5yyhK",
  "key22": "4GzMPtSK2zikJdRkkn9aAWS1NPuU2KjetJGWqDNVhXBTEZ4dCAfpCTT63W8zS93HrPQWm6tBRWv5J3C4HPxCqDaJ",
  "key23": "5DFxxs7F4TbhupWCXjV1Vk26HS7Vg51kEbg1sq1W7PAnkzxCVjvJ1ZvnjE9w2iMN6t5xAYmQvPQnv8wQp82cEyw6",
  "key24": "5Ge6CtqNWwvfYGFmFTR7wGii5QRwKpHeYcpNC7Ju6Q9b2Zvw8RvLZkzkfu2zBijQWBnVavaN1EnZH1GNTayqcnPW",
  "key25": "23bKH7dBTZDzzeAxE8K2izhH6gtK4UwSbLRVE6YvJGdbktsk2YNGKdzT5J8AABg5dfbpodeoMdGR92wSjcFE2uLH",
  "key26": "3t1pzJ3VvTvKppttZzuaU2QwtJ6GCo2mXmXWmeFVhoYcA8sREvP7eD6UHqkJg6UzuazTYynxnJPZFhVZ1TsoLQrM",
  "key27": "2SLHfS6pzhJdaCPEk5AbfRo7Tge7vxLWV1411DstmFTdsG6Ln3PsnMie6aC6RJARMNjjNcts3PEVTV8Mg2MXdgyj",
  "key28": "5TJF78D6drQTyYructmJFdBrKmbh8y7poz6gsnYskEsEE3mR2Pw5rbNkdAj8CVmS9f6pEeJ2SjnjfgyzsU6hg93W"
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
