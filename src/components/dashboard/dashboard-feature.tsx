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
    "VTu6C3a2jec4NjJYFu8uSrNr2eWtJzLYxH3gLRujtioChV8PGzE69EdZvzJNZ612Sk3xxo5ZmDmr8pCbfzbAwEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KhoxV6wqrmA9a2fjV6ifSZckgEyVV8oVANvzw4z8BF7XnDRe61Kz7MfpKjAgEo4KsUxhKMravJB17rCorEXFrFQ",
  "key1": "2xJnFG2zJ8rbsNfUHckFgh7W6rqu4nYzAKeE7B6gW3HYFq2xocoFxin98mMRh1AnS9DHmX3RsketunZRw9noKYv3",
  "key2": "3Y9dQAuL5w2q15rRoDwjLXi8NUGk2iN8kqHTxZi2H8GJL5MYQGcsFsc3vfNJhmgX3fGc16DeBznLqNeBuwshGqDH",
  "key3": "2tfywu9G716H2vVbBsDqorPWermvzJrbD1LriF4FVs9DQQLtQrovUNCdXKysHpge7xMy8s1tCAPaPgu67xrHANio",
  "key4": "5pbjH3vUH8HsLjgGjT62VwE1AXcF9eJ1qJuRLqrfgewccmz4PVdimy9mMfMTVawqRiMbazGYCRLTVy4uQ8PALrAo",
  "key5": "55dADbSHdJyxpABBnXGYgdWAATT2pczDAcJXDbvTRGQPi1WhC4e5cgNp4eZQfj5Mgd73rvrJQwMDpqgLjYP5aKDL",
  "key6": "5RKjAuSf9LcUsvRB1a23qSVhqBekKvLheyBFzFyRZPHPmuvQnzaSX7yH1kFuwKh1cvHiFFKiw6GRpo1gLr9k6113",
  "key7": "51AX69y8GfU1yBfHPRSwCDmpPu25U2Egb2MFgmXFzsvP6bpm7P2H17FytPVmyMzV3LGP9QWJspP9y8gYroekyykf",
  "key8": "VVTSNxHQM1NSjptwmbLbN3hsa88vvsRBY5Pa4f4BrBcbvMtQ6aP8JoyTNeypiD8ewBRokvnbsksgMTFfKyY5qCK",
  "key9": "4aZo1hUJ9Z2CsjYYgqjJSjYHo4XMrnbvCPf9vUbMSF1djx6bxza6Qs59Mf61kWjCbw5kSH9dyHWgYaSPNCveoAf9",
  "key10": "Kh1dKa9or6maUpNSLNmzw1yZF9T3xtuFUY8B9ewoRCwJABUgHh2R4oYBbFHMu44XNohvWa2Yh1Sdrdg4gaAbfh8",
  "key11": "2hx4TkoStueV6v8z8iaCot9NeBrMYVoNdn1dywRtf1Wz6mvWhDf8Dh7t6nK68QZHCU8fCLZrZHp1G4wpWhu4Pt5D",
  "key12": "URQDEAkxo2VqWXTUSBDULzLgNUUDvNiao9DvJwz7jovs1HtMYS2ek2TseVfyoS6ZkaCKsqc8TcPoyeP8rwj9bP3",
  "key13": "2XX8Sjm3UuV1Jwr4EmHmkE96oUB1eCMwQUtR42gxdSGN9obmDcw8zBpSfeQgCWoVNNJPrt9JRCCCywf932zEFn1v",
  "key14": "2hNVnMtPSedqsmaQecmNmZpHitZoRHEH9wcWtcWJEDFwRvin64VbJiY6bht89MXznVYaWW2E5oDfTsB3GwFUna46",
  "key15": "ESWXR9GdGfeCqEBRyEMN2XSdYToFrmuaikxMVAtt5VxPvo5JW6fj6qEKg6ngUFu3YvbgTKPtBjEdpWiAeaQWMcF",
  "key16": "4XLkVaumNXvSKVezH9THnGpv7GxVFuht9vDghgdk1otx5qAZkA9z1dV6kKSFZH7PdNRqLHGru1YZTPofkvEy63rA",
  "key17": "2FbJ7KKpqfuQezy8HFZydsn13wGNMt9WNWAs5mZL3xiGWqKRmfJNTiwrvySJMi7u1nhyqg9ncvhAy7fd5Nw4YYLN",
  "key18": "4vK4iuibmHqNqeoBgqKUAMKSKcF61TK39vdFFYSb2gXTKqkkg3RMyY5TpXMkr2uYrQjeU4ph7rKbaYLGhTcx2pJW",
  "key19": "52C4fCJ47DkvmZzzSTo237bcdacDCQVhnWUWxMFNhmweoKNiAoLMidGiDJS9Vd9z5CZ9KWSNLqBX4aq1SkwZzZBH",
  "key20": "5Jk7thSsBRAVEetemtBEUa444Vjdm89gd2nPyaHKdMhKPDYsiiodrvYNh5feLxKQGCiSn5UC5p9nwz62oyhwajoM",
  "key21": "5kjmFjDUF6FT2Bd1LEHPp9pEU2Wp9VXnVUpguMBg9wFeSe4BVXUTvqHkrcc9wuGoWvyGPLZvYbAx7tjZ9E6sMRHe",
  "key22": "5s9Djs1M21HCPF9dmS3V842Du7dQ68E313L3YfQNmNQNyRTveNZKhoFqHZPzzhHammyzPiaV1nXr1GaJrJ8GQCVk",
  "key23": "5Agk695aJJWxyhjW7xA787rJcjivD6ejj6GgLpJCs6VUmiwLFtkuC3no7bUxWwZZ2VKK7hiXUeD6Amwo4JkzGeVM",
  "key24": "5Jm6VFTSCcx6ebWSEpigfyEgTxQifBtBEfztKN7J3J3WDU8xoVXkyTnrqvHR9NAUBhufpjmuPybUEyvv7DqV5JR6",
  "key25": "9J7ZELrpojtiiPBAdTgaEnYguY3aVAntEr7UeW7gkLKgvEgfBs1RBudLmXcUNzV9a5ajNoJQPbkSZQms3xSMTkv",
  "key26": "3hwiwUQ4CYJSkxAXuMK6TMPFYTVuefHPNKwC8b4jjV3sq5FofJDc11qV2aWdMRMtPXBccXyUJVaHgcASkLu7xGxg",
  "key27": "9iDAumq7GxQ8uocAP417in6DghnoGHkawxJAYhkcpTf4rk2ec39QtZj4LDivkYHdqXLKEhBXdLMHiA1GRGskHjo",
  "key28": "5bCvkvKDC1e1jjNSDZrN1cBhUioHwpgBD4uSeQraGLLt3jqGAJ3sC99DNgV4osRXLhahHPyVkhfmwjbU4nmzxz8E",
  "key29": "XN5TU9oG79qVdfBXcKWvj369yVcxQ436L4bHznEwR18vuBDaU6FKCJzKq2mtuXemsr6crW58saNhi3S3bUKcPuP",
  "key30": "vVvSrxoy8BzehPsTqfkYUCVaCSitYNvtqVF9Z2GhLbAyyULb6S2mJuvp8BRsNYrgAGUQ4EhaXpnydrSgWSZfQLJ",
  "key31": "CfGFjX3WhssjQptoAQMwZf6JVGb8XRXytJ4L4cBpC1VgAUSrRM15maxN41F5JepBCXXbWSvJf3duEoigBqgeXUr"
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
