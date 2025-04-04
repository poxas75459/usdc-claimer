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
    "4kpHQcvPw7D5zgf9GVM7yDkXE5oHVBkLsjaEZU8ehFRZNY1yH5y7k3nNiprd34PTf6mjr5XLw99bqEqzBN53KSFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51T32g7n584oe1VJ9tDxB9RMZYW29z3PiGhbBg7CyvxkaUta7vS87MDMFFrNN9WwaXoWX3gJGqkcY6BX8ewAEmQM",
  "key1": "36hNq22Ecv7vYaHxSSXAebUhMi1ckFH5FJkrVCvWRpW1GLNhYwHajMpgCbb43Qs8DUGpNZN1hTc3jxhLdxuRUTvb",
  "key2": "zrfBW1wBa394n29kW9afhL3HC4jiju9PYwsDqxsoX2CpDMWLt8PjkPzJG2TcKYG5rZYkMHbKZBAoVEzZfTQ7xCc",
  "key3": "5Lb2oAzbZGmjbxS5qRe1izHYF7RPCfL3Uys495n2NtdnSRAdYZcEgWBfa9DXJ8WnMGp3vaXuGsDKzxHJpKeNLKRY",
  "key4": "APE1kzGSq2LkdHkPifoSBpC6h3fU2x8Uf3VpyjXBXUkF2YPzk4sezNvaw8oFkkp5GV3PbZ3uwW7BncnYRfNLC4g",
  "key5": "5eYeFdYgP7WufFQwX3rwaSj4Y3MrRgitLHGucxTtddBh7BkGCy4xmFBmxwuLWsnVRFrkTWtpqthU6XrepQBs4PWd",
  "key6": "46AE7jwMALxQF5FyhLgYLYRaoj7K584W9TG8XnAe688LLobzXZg3JSKSgsJYv1YPtcozFHZr7VRdjdcHygZdAeRU",
  "key7": "4MSC1zggxDwtG9iWG8oFVrTh3KYqH6q5azqTzbG7jyQkqeEHvyPS3bAjQ4gk5wpJ16Djkr1KxwhnGJvpa6ypeWtG",
  "key8": "4x3aHnkyS64gDg6FNGjV3r31hmUUGNH3B3NuLtg7TrwAxLPEw5E5WKBaiCqx8To2t37gmy6V6aK7eYUghCaY2YWw",
  "key9": "3KPfGbzy3XyW3sGMJYyfjKZrS9Zv7FCVoH1LJky5bopGnceBDcb2XNrKT5PCY4wezmPh6bN7oJZZrdjq7tfUvKJo",
  "key10": "44Wgyv3biJbAU1e8FywrUkzFjD4vvuCC7YFy8KP33T7ui7e45VHxPvbnztYtBDWbeyoHArAYr47z8gy7oYLuxnkE",
  "key11": "2bgbdmBYvnMkSfskUjf19Api5D2edeq5qnDbhUuJeDRYY93PKJ6aUUEph38BLtALm4TxsL3exMjvLL4REy2VmWsB",
  "key12": "3kpbM5j44Lnf5LjmgTNT6yHvBpoNzh56emy3QT2APYYz5pwzFFE9aQj29kVG4EaQ9TT9PJy5U3kwX6tBCGbQQFsq",
  "key13": "rWqNMdKaWGSS4BxziP599oFLniVJKyMzqBcp4MyAot4QEVs38jSm3nFxVYSsMzvVBAAP5udH8d3WRF96udUm6sn",
  "key14": "3FuRbBjPx1XTBszRASAnGsEoguRQGRPxHEQSKU4heuiWvYBzryT4pRGTLfUYd1MS9kNvPHSinpGzKCbnACEwoBNX",
  "key15": "2fKP4D95F9BXw98yvheo51nwpYYQSFiCtjB7y1jenNij7tcaVUsnCzxZcyWmsAwvZ16KrD5iyWr4VKqnKfiXW5sN",
  "key16": "5LoX1Sx5wzSCFhJqNDnbzB3qFTCRB3swUbPh8NbNCL8CABKt8QatxJkD1j9mTDJZJqvidDyrUmtDUegD2aVkjGfU",
  "key17": "53eiNYKG4bWoZBiMbHrENGDdGCAhbwChE6jpfTo26VBUXoyt2gTNf2KwUe7DNg1hYVQ1Sn8UcBgtiRXLuQAVmB69",
  "key18": "34Cg95DHX6bLxaJB6AdKyWV5xNp3oBmpXvUHiJ8Yu9U6aJySTbGM6DGhB4qAJewaRou3oYW58CFGQ82MjkABMEHR",
  "key19": "3VW5sPTD6d3BP51igF5V13qNubLBrtD6qT9ghJso6cjKAtXhx4GPyLSKzqWSRN2hr9J4C4sQtAQfYoe1HCJBxXX",
  "key20": "5ywvBUGwVMe8C3oMXmz5RAN3Njoo9sDDTb15pH3yH35EXf1g73SJKWY7xsZNV9rNq2x3GoQ1h5zZDeQkvU1YxTNa",
  "key21": "5Ri7z6KKwHxnyhGxm3oUw9m4rr6szXKb92tgyxPQnxA1PmvhPBhxpcCUCTJYEANDh7NzUECA9f7AaV5HQrhtFycq",
  "key22": "4gmh5fztxf2aBTYYkogSa3VLuDFEVBMRfzZ5mLQpW9mGeg2coBTCPGsAfm7udDEvYgd1FNco4U8KdXjiBtJegNk7",
  "key23": "2RCvM5DTUAtC59kaSCcR7L1E4UPc4rpzEKoQ3FpbGnkkiyQhQtxdZQvRUAREyUCvX4cDZeLWUBKZyyPQtncj4CG1",
  "key24": "3wS4pSw4MqjV1rhwpVkWSjjzZ6s8qfKP7NCDjtrf1FAVgkkFkxVnTsh7sBw5sDNPEjPGuvrY8Jzyr9ZsxFwGXMpF"
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
