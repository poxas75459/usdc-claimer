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
    "o3We4RCmzJ1V9qwRGNtaFCuWjxxyXKjBUSf9KBsV1pK8v53pBhrqyr7zLLPYxrFYDNdponG8QcYnHV15zaotDoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVbjsXFEBk1actiN8xmRdfxDh6XSs8qHb5SYvrBdm8FR5GmVqVzdd7V3fecpB5tva7RbGDqUqxC7wFRuLTMSBZf",
  "key1": "LgZXmQcJvA5DXRDz9DB4A7B2HEP2qmHZfm5dZ915yS8Y72poJZ9X2WLBp2tTwfSehTRUz7YkYrphPXqrLy2ZC55",
  "key2": "1Tr4xxJnjP7Z7UeuK5MtBreybyruqCtV466WUcs7eYVEEE5LDtfJkVVGx3N1zGfTMg1DXTHzAs133q9rZsnKLLS",
  "key3": "PL6iR9zhuD5bZjjTEMNJ44qcndY15sTkStDSLHFNrCu9Yfck3dCv8Nu6pLLZZNdSp1zZab2ZRJVAdNtjGv3L7Uq",
  "key4": "4rgULx2XnLyZrhido52ZtD3pabJYAS6Bcr8NRLZ9jit4UBXXmJtc1KFdxLuDZUad4XZDiFeJK2TMCLRGYL6Vv5QQ",
  "key5": "2C7mDmnzy1uvFL4g89H5JcBVK55BP4SAAG7pdCCW6M1drP9AHJL8m3Jn1E8vS2f4zxe1WeuaxH6S46nkzQrrJkj6",
  "key6": "5z8Mf7oFj8SDZJL2jpnzT5LozWA3vfSAGPhWjkb39LtnvtZonhskDYkohGz3NqWY4h1RyDLTTNoM7SjsjAv7YM1T",
  "key7": "5S4jD8CeB6Nt5wwzYtkSeMDXoAw35YJT3gdSBumhX3bgF6D13yrgkYse8fUNkEUu9pLzxqDVMC13xB8W2XGvrKP7",
  "key8": "5UZeVkcz261pUc4kfWu1Aqs5mb3cmr7Zvp4eL7LqUNMwW1hTn6VrRrxgtrGfKvNgnBhkqLPZF1CEehGVmbRwmgXt",
  "key9": "4RksE2SpLaSXkiQinmgMgNNAhBbHbzAewmmt7CX9bTa1wS2rKQTifakNXjJrqbBWMWeWTzWnqyaLVP3TdTLFe5TR",
  "key10": "4bBCMbiaUydi8h8M429HqLTtsszr8BkDi7sxKGNwyLEkVCqNoEWAQMyquYtBYZr7CcScQxund2uWSTZ8u46kNFob",
  "key11": "5aqvxCs4hgLe3nxXPeQqGyuLKvcKWkWaNstKHTDFYeUMtvRHu7u1Cxc8uq6bjhmiZgvXaoSZVZ11iToWaVy1xiBc",
  "key12": "23TEwSzHsNs1ArtJbYAegTMXsXwHFTeoPNoP2yMyNUCEAVtYRJBHYQhcniFZ3VhfSPvcCv7WcfZrDGj2u3DeLP37",
  "key13": "3Wkd1xzkgd6uf2B5AXLq3MLqgGRXcr5zPuoB7qAzQuAREaD82NE5c74VzJC2bhwLmBUdct3qA6jPHhZMuomqxNAd",
  "key14": "63e5kMEnfqEGYuHN9SVwGNygmNqQTYM8HPGQM9waVJVivReaEpwntt776onmEyebrJAc9VU8r1CqT4gvbzdzduhT",
  "key15": "5VPE1T6n11SFvfEpiz4ifcCfFppdADRkqjshpuvcm2mvzDjmfWQMVboNwFHAw7ENxwRubvHts9kBieFvSv5P2heg",
  "key16": "2z5fCDGbyFcRiy69FAALMBGw2zzpwUZf1KwnxTPKoVioY6JCosQsJfhWVd8y2o1MMbhsYSNRQq1p4KchQtyn86Le",
  "key17": "3ZVLk9HhJGSBDzv94gZNciCGSPjfuepvS29AqeTyNuwStxEPKCw1yDLSWXM6hhxoZBFn5hKcBpkQ286TR8g2neUb",
  "key18": "4dxg9yZKE7nZWHz2e9p2sX4doVCtau7GW1NqGQ1zSiAheKu9w7RKMrW8DdV16g2qAdXHo8t4zxSv519y1SdsnAmV",
  "key19": "37eWE3uVL1CyFqfGKxJcxS9UwtTVgcxVfwxsAMbaJnuRbURzPnPVkmCViNs3DosLFT1XGQD4Lv7nJqQkS5RCPtjG",
  "key20": "Cdp7a56s4UvmLcpyuRN3A4cYp9fhC5PVdnCzKC2govDy54zR4i4V2kfauQJFSLRoaJFdM1TwBf9kS46e7T1GY7u",
  "key21": "f8siF8Jp5iCqd9kjBCpcZk2FmTv8r1dJTjXMZGp499BijXVfYKB1yxwhSxnBrzf9fZB4iEDfN9CvcTrrG96DkWL",
  "key22": "91jxQCzx9EACZ8Lgbv3RXNsVWZzVHcAdWFM683mYi3RxRmRcsAytSHUpKs3oEQBniMGBjkGyj8jTue3EF49j9cK",
  "key23": "ZkiHGVcQCygPvqy8NAP5aHpPyQ5xe8M5NozMWXB1kxU1zG7Zqh54Z5oiXUvtcg3dUh9Q348kJQMmhofe2c1qJW1",
  "key24": "4iuMyXFUBY4skszJ4LAKTg5wm99QunSWyLbSi2c9n1cCY2pvvVCQd8qj7rp1ed5Sgn13nk7Di194YTHRunvmc2Mk",
  "key25": "3BGnCgZdaDnbh5E7HMtAGP6zWYw1zAPsNDunhcgqyJAWwtHNp5kJbkzwp5d7suroCdSSS4BYS5MU39Vfa7KQnzfe",
  "key26": "2eRMd6jfTiTeP5gz1vbGMU9CxCuJUZWynLno4ysznMnwFViatKWprcpCXEpZLinQXzmaXwf3pdzL2H7h9BcCNpM"
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
