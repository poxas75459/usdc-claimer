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
    "4Bq2G72qnzbBpLeuTrnJRGG96D551Zo7pDCxXJdygbnajXuwWaaQ15SU9TY2fegR5Yzzu4NmE93bhQ5sPK1SsSKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rB57SN2gZtZS7w1mtVhwD22qr6QA1eL1YbDtYiLT1bh7nGYidXWm6FW9SZ67LcWRTFLU7kj11jjLP5DaXHA2GN",
  "key1": "5zUUc3zL7Pbr2ZzhivX5AVYgnr6ojo7uhZxLGM7HpC8aQ6D354fM2KJdQS9qXgeBNJ81GjcPYQRDjrShWrQ4beWa",
  "key2": "4kgMZ4yAQGdjM9AAwioVKgNYWcsGVGF826tW6i7e8up97JH2va5pWvTTN4Wcnikibjaew5Yo1Vg7fELuWdAdsDrq",
  "key3": "37zJyGoFbf4iYM3o2YcbHRyq4EtyRvxQnLCuzCrxsgZXVMwpjPFE7kyD6G6gaTAgnMUvbcna8qiTazkW6hRKaVQq",
  "key4": "9AinraNnDNt8bE5p67QddyzcMGtocJ6eYnpWUx8yaEpjDMRatgG8ufBC13UxgcdH3EjM82Fd5oxfm3zABtMSaUH",
  "key5": "5ZPNBj2r1KtGcMzH3ZqH9W8GVxVa8R4odqAVXTwYMi97jr1UUFqduFjULEnDNEpznqbJjqkSpXD7wgQ1Wj2rTaDf",
  "key6": "3ieBMvAST6zm8DGqTNqDaeUVXvEixrbTbvmUgfsGkMsK2ukNo7aMsJfeYfgDA4AozNQXKSW2wZ6M6u9sDhHTwNee",
  "key7": "2BYc1DFc2f6jT4Pv8vUxkuNCxDa2FY2SpqoFfmrCyVkovGswRBgR7THEeErBpdwAQ4RRqQgmeBZgFec4SGCyAFBW",
  "key8": "gaGndbCRLJyqX4EuQbJrZa37oAmgye5kGJfi2T9uDQ7Qe5XHGHhzjh5xxty7TvBZwqHJDGEWC5gs95TCxqpWE3n",
  "key9": "3kcTiF7AA3NE2xRv7GBfxtNAcQrTar44pWzF7L8W9seTRTCc9haakXqU7EnMCLinZwQR3tuNbiiaaWJcsVWQF1ib",
  "key10": "4rdDQsTcYLcTtLMux21BAfCPwXjj2TrgPCoqj1PrcKqrFCUwo8hhJApRCKtY6AeTYBYxjDi8unLv6AnpetDKgSXt",
  "key11": "5emsa6w951JMBug6fpj2UUesM4k75TJoy5oX9mXifU5HkRrouhdjnpA6JW4Eedzg9k3SC4b6YaA5esfMYn5R28zo",
  "key12": "4w97gdg3E6rJnU2kRqkaXSEnag358p4omxZnJmdS8xdxfL1B6xGc5z4busUsjM2r9RGRDRBxxKPWC66Pmgvxjpjz",
  "key13": "2wtHCYU5E9WqyvEycZFayJrJF5N2ouLG3Hd7RWR6zu4vk4gxs8HGZ3yHzmM5jnhn2nuz5HKVdYJr42o6j4RwFaKq",
  "key14": "3eZwzhikSLnis7ne6rSQTvpH7XAUy2KimLf286b8BccEXxzmLQ9bqTAnJKM8C8v8Ed1MPjL88Ujtg7Hy1kZNWJM9",
  "key15": "2LiLACv1P3TyTPTZpvw2YWMBz9fuNwKe4F4BXdTBwG25sXL2fDXe6oGpre17V5aoVUDKvdyYAEYuLyfwKDurveU7",
  "key16": "5Lk9WqKEHQP8aptB8V6ZwCA1wu5PcT8Xnneahr91XsRwfMiXiXZJK1GGAHbU9PcQ8MfBp54YixGhSmMLAj1kcybw",
  "key17": "4Uv8jBjz5ys3wToGDXeBfp6U9pX4zkXr3pWLUYq5DjmQDn4D3dwQc47rLVXajgSGwbYpBspjbLFB2nc23N7HCdHC",
  "key18": "3hjxoPKmkpdcHAK4qgZ9yS79CbaEYVM6CTXmcZc5WP2o44Ws6QnDJF91e9tAXrseSFdyQPFHdf4ie95WAgFecBTr",
  "key19": "2hX7xrwwsNk1VPPbLS72wHhSqktjBPLHtFpoVBShHupSrdWbRacZMciterYXuYJEJvvTUF2XYwgbdpAiCGqEFPkk",
  "key20": "qx8HwN7iunuSURMd2N4LWTc2iRDKPetqzwpnervX2PXhwCVvDB2gN2wej4Tpfx2uUDorCPDjwsB119C9of1j7cm",
  "key21": "4wVX8ak8xTXNdZaZJWs3CRopUw8c6n3Erow2AJSPAeZKebtcNJ9tPybt4e1kugfue8yLRbRKguf1MRkTXCqbkUu6",
  "key22": "5xCXNTHLJdzs1AwswzQjLc4qCm6vTJKmJRyD6vdhCzUaT6eDCAb4siB3vpK5fVwdZ4bkySSy3Ry8NXYQ5MUfrBGu",
  "key23": "58RjrF99c2oPGBFAqdNWT1qexUNGqFGXViZs3X5yhCmSdKHgZ2NXUbS2VQEcwjU3yqjWirAXZVqBBBWhw7gfNySk",
  "key24": "5skfr5HBLWuGSK66ZmdHc8uCd7WSRUSzKSFQ7BucXAFCnbPxRHnHUgEGkt87aLt11UrQ9iKYCA5iezQ5LTRQXJZd",
  "key25": "4Wieb1oUTQ71uc4BTBwzHk8PrjbUU3cEHBDxTXffuspvXZYZyQjA5irVmeiVCwzXhHQqr64uRWdthmJyam1ZErtZ",
  "key26": "5W1PCLNiKSZ1XG9RRVHZ2icjvMBHkXcZDqYYc16qWvusJhFSsYBUcRMV2m5xtc7HpQ3yij8FyB8AWAd5u38xtVas",
  "key27": "5efTKkDCUxbaG4uj7g1TUKWTR6kajbWboDw8vSqteN4Evpre6wsZXqnsRNzoLH79bv7vEiVHyM9J6KR4VU1XBbqk",
  "key28": "24gNa1orHjQvkqWwWkkZKsbP88DraBR6sFA7TAGTkRM3AzBDSJ53rBnm179AfS6gMXpzgfFSVQQP7zG5r7DVjNwJ",
  "key29": "3ugosHcqnZyk18uKyjWpqie17Zp7SBa4QnxYmo93HhxfdEDtwHYwtGG3iacWgv9MEowV4EyQ5BpGjTMJD2sYEs7h"
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
