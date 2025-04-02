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
    "2FbcJYbqnthSqPgQ3i4GLtLzLcuMguPUtk7wBPXaZLoQj8qTWSmS8Xf3FVPN2fwMMQhh7RfbS8vTwrY9izTh8pGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDmBJmS7RVzXS3gedQmFiTYXy21n4zJYGf8mDzrENffEHHgJzCTvMTv7TeHvG3kcmsrBcmiPiUoPVMuG2Tiip43",
  "key1": "NzWmuBtZuE7qVHAunppbKWU3QMmQh27SJpkNm83dbazB8Dxk7SBtf3S234kyVMjt5SeK3eBtPnCex2TCda9pn2B",
  "key2": "2MPNA1Dx93Z1a1umamr5Nu3KPK8rCwPQiBCF1y2syzP8VpRHEZrSX5MGCxpKF3iPSfggxsyRc8a1nbyPrx8wqj6",
  "key3": "rmJJqTHbDj5jGx6s8h2gDSrQ7t9PzGzXi21KHXziixgbSPH9bQ1qyb7uo4fMP4igP2euy38yshH5UNXio7ya15a",
  "key4": "4Da1erMNSz7s6u2McJbMatsEShy3AZ16AhLdLLNwLQ9JmA7WGpZbDDSt3r4WhQmgputrswh9mirFqNdF6wuhvTz4",
  "key5": "DJiGXoPB2V5j3rRsfxfn46RFs3yhXA9dc2ZZaXPF9ba9B2rT8RWmw8CYsRxno3W6fW81AR3Ba2sPtrjxQCm8oKm",
  "key6": "2YiH15QJDooWgvMXXh7o6AcZt4un6uefPTJxgPaGYpwf5ZNRas94XXcZsuoyNgDYUKSU5gyXYyMBXSFbWr5MxpKe",
  "key7": "3x9XQoYV5Yte35dLnAUDYwkVQLWRsamsnzsogbEj8zJrbzc2BUfnwnrgQGZxbDiupr7UbDg9Skpk3Ugn6RL5i7yq",
  "key8": "2UmeCnhBWjqMXKt8pGuC5cLPBj6DpmTpn8YiQEtAVJuvEc6v68Z6VtLAsuguLEdRBnmAKLyagfeec4PnzMXsKYsg",
  "key9": "3FtdpssWkp9a2RTWgmbnBViVktNmWaNN7jpgV3ivSNiAkAx4d4NNSp3Ctq1LspZNtn5aDqTZq17r1GuraYio18sU",
  "key10": "55QE53iiAe7yUBGWfLqaWyngbsdnXrqKoaBogPr8LhPaKVu7Lqeygga8Z4ztijqFcxkMg7FvyxBPMv7JqTj3Pjth",
  "key11": "3Ur4u7b23hDPfHfqLb9qAGPSfZC5nJpiMQbZRvxhVzmQ1bkVdTvNqd7grNwo551weH5j23JwEMC6tfbFv7CP6C7j",
  "key12": "2PuXNV4j8ZX21ayDq7SDc8LpCrseBBm4vdJ9BxNvpGN642AkSZGWKSXmdSoeWxynReDun8MM3G7Npqj4YfZv6rV5",
  "key13": "3yocENnRjpz9YxESmSJZB3CXcCKVZEgUKFggZJQWozDU5qRtzbW2VtF9yqkG4j8mSMxLQVxB3wbe72cAhCa14ceD",
  "key14": "3ZgGiXpnZqK9yiJycEVeQJQNnX19jPTQokGiikKvLYM1a6bmHLT6G4VmYVvwZrVZfKhguqxr5RX5HXctu5cj7Lm8",
  "key15": "5sPDrbToQkTCrwFR2xmHRj38qav5DwrJCSVHiGTW4fXEtYLnatzZx2m3PJjHfRGEPkmMJbJ7w5W7hHbaA43FDryP",
  "key16": "5g7FGL75rkzqnsCfNyME1Cku5kEgtEe87vFFbkQ6at7TYBsZFJxHkU6aehFrN4VxorM2nDC3oHjU7VXEDPzVja9y",
  "key17": "UKDeAc2AVWKUTUvFxC7mq3thrPtuWFNsn3JgiUPhVoRpa1gkxq3mYQzZVDuAquPPRE8s8RU4iGx4eK1qkVR6CNS",
  "key18": "2SDPaGQ7Au8QFNDYeJ1ZmAqPHb5P7rq931K1yh4UcLMMU2M9iwqCeWn6fRqRgN7iAS3hCmVauUmvQv6NZo1BCMt3",
  "key19": "2UyvtaVp5fBe8aignBiK3to7iRXdCaYLYzNwBe4N1qjpetZMn3fMcrRSWoNCmEpjSaC7LL6Grr5qkqsbxrDLRzES",
  "key20": "59E9HPz91uv5Ha8i51pHt9Ar6QotG8ANf4AYVu56v25EJTGAhwitfGR4zwruvhe8RjoRy5mGf8Vww8qZAbA2cQz4",
  "key21": "PG31YwfargPgM26hcq5HoDbMWZU6CAEpoGwhvwba94HJFW3y3r8uyKSfpJngbbVShTRsPNYZb6JgeRKTMb7suBj",
  "key22": "61gWfku4dGNHNoX9RnU9wucHwhsoDJh8u5Kik8mXrsBv4oQqPdZCQci8KDay8HdiK42f8HvoPLta75cG1ninniuH",
  "key23": "2juzFD1UojygMTCM7F5tCBAK3Apvne5Bj9vRTLq9tx9M5d6SapR3x5DE7pG6piEvnxWSPcWvDYbALm8vrzNAi18H",
  "key24": "3wjs8YKTEk3vq7BmweHxENSJ2v6VB2D4vpEyCnY8sgpRRQAo527aPv1899yhCEWxdEffR3BhLsFUbACEta1bgEko",
  "key25": "287Qgc5caBjid1RTebV1Kv1qaHiwPumiJTJnmQmV71QTq1GFjF9YJWvqCarhiJQ7kcEsMiT7SbWfpD42fJpHa5Aq",
  "key26": "3sNs3z3cqRiBfcUghjYE9tWZtANJZrqToYkgUfNf8TW2hRda1JQhV5ASy8aaactaLNEVwsMT7Gz3MuKcc64Fx8Rn"
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
