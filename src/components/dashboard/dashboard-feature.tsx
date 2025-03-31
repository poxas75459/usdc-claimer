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
    "3fH1USqqYFqmwYuAammpEUYD5AwsPPziHSVrEEuHhqoU1QTfNxPdWBPQ7PU2HQjhjbQq85yyhBsCNg9yF4ZUDQm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnsr3krMmuNJ7VVR9CKG9kdBLQQRuPMsL5HRk1rx1W5QDTBJRZsi9G9RLsA98t38zmeQBhr7aCsC3J5EbyRkb2C",
  "key1": "2FbYcbv7GjJz5xP8QWuCaGqZGJjU6rE6hKbti5VEGY9vRiMuAtz2bhuY15UukBD2JRvJrBoC2h3cyv7j2t11SLZ",
  "key2": "5guoca42T1Uh536nGQ37kHwxWS9E7kLU8yovPYjcJM1UxTVHMdYijuiV2GeympzL2M2JYxz5HNMFJGVCd679D8Ur",
  "key3": "5MqzinSi9xYbDNzsSvYAv1tU5fVg9JeJzwBVxHs1CK5cysbNmc3HUFS4Y6pHaEhN4fg55fAQY87PansxqHgT2ZfV",
  "key4": "TTeov82FU3TbHEudpSESHopqAhnE4RGEsewHcswJ3RFtdz7zLaW297AiMzJkBmdk7yXA71CchZw1TVMP7RqaTGS",
  "key5": "4c19ivysJpHJmMtTrcbogfebH5VHNRfqvtEtMWE3p6vRNdWpz8BM79xaDsw8ArrtM9eqwxme9otnRgPtQPDcsXGT",
  "key6": "2YYEseeEhaSz7fmLmm7KDERp9uSmkjAMENQjYh5TPwBSKNMgvQg44kmuMpbxCqFpzhSYZUJimmXPJJZDVNpG4cSx",
  "key7": "5fxLbSdnApbAMykp29FUnEi9BU1t1oCPFTgec5LKPg5E7NtbhsVZMqW6TGPAPDbpmetTPfbpEZUHHfFYbNRwGSK8",
  "key8": "2kiwi1gpkBurAjARD12tcpgCKpSmuyy3ToRGvFLq83Cfsh2GPMZXENsWxsPKDmVSo3GVmHpVS6FkhN3hwrPhGdc",
  "key9": "gCffJB7KAVwJxQkFT9jBrNHVDRdBdPkZD21CsfCrWbD9fqCNX7FGMCSEPPEhj8vqYP2hmFYEZXT55arPTrcgiwW",
  "key10": "634KiSr7QPaE9e2TydvLi3ykJGsSv9XAgmRLwiMyfELp3Sq2ymKquXnt3EVVQBu9o6rUS9fr4Hdw7GSFvgrXhQNx",
  "key11": "5xU6mcHKSL89RkxvVNgETf6Dpgddzj4DH1VMgmYdHrDctHdv6QWVVNtXapvGtgKDt1JJDAFv4KgDJ8jP5riujXPb",
  "key12": "4cWr6YLbiD1Q4a2fHRnQ6G2Vm1gNTEqfFobDfd21A694ogcYATXigveYzAjCRD9FgTuiMZXi9VZUwjFKHp345tsx",
  "key13": "23uUhdi5WyumPjyEFP8FKPMdd9jvR4w1xudwTXTxJbZEjzewoiMmRNqmZ1DfWobck31gzbVHRt1mYm6xgw6H8asN",
  "key14": "4o28H1s1DtdVhkc1upbanvxnbczN3NNKuS3JNNG3RAdajrSe7bTznKHEC26avk7PM2HekFo3BYMEijqGbpWzvKPS",
  "key15": "5E2CktEvouUxv6VqPHw1fajmi54vgx3E9pvRmTMnKpUhFwXJz7qHBV7V7kr6bnX7nHXy6tTWDNFCgxTch3JZn1No",
  "key16": "2kWkUNa3okBt18dXzUy3Te9z5UAYdKGeBmjotBfvpP7yrU7KTNRPJwrDu9Zgp8563SNF2Qq1gPQGvkbi3chg2fBo",
  "key17": "2pYTagKkenqQa4RzgrEYM4WhmVDkucApPRQMarYdMipjcTFRvc4XbyG33vSvEJmbbuswUagvXCUgLn3hMKQkNtAS",
  "key18": "5NaSuvAKYjNGSzhsjACWD8Vf7nYqPZdp4vE3HgjTFmmXyoLp325dpbX48uxHnHxWind2ug6xN9mvVDpg3gwFbJb1",
  "key19": "2RQi7iap5N6WUFFHCWUpxMYy3Uf8o24a4E5iRQzUpswtdVtNpLR3gisrXbqvGRHu8rj9iqxFfRFf2bRLshyBGEfZ",
  "key20": "5iE68r3oQe7KjkZr5NqgZVFcGkknPqdcArx2M5H1gfQHAVy8ron8QMAcwFBn7szxJCed5SFbEGQ2Sq8NUuadCvp9",
  "key21": "5vK5cGMRYJUhrYVgEAuWLLjEH9mqLrjNL58yUv9wqDn6vwYZsvAVeT87yvCjcPPX7UvmbzQSZ7XatawvpcdFSdwP",
  "key22": "31vumNEk5ckDHQwK6uNwkfPdej1YonKqEDf5L8rCLTy9zEiwgxLodQqM8rqy9yyiV7Et49bXy6NzrA21bhtdKHmB",
  "key23": "7hrEb7RTTDn14oQZort7jNeAmitKPtXfgHbbHCqGBiaCAtA4r14eb2nhvXeA482baaxNaXoQ8nwBZTDMCwvFwVP",
  "key24": "5cuHpDVvAYtoiAj5TR8SMeD3xUngT4uvUXGCa28zoXsaHYCyAFm4UjjC8NKqj4mbr4McAz6A6EaaHZCCzZk4jAR5",
  "key25": "5kPkoQKC8bg8mB7dRUhDPmR84AAVvU55LrtDhXoYPeE12cu9m2VMt4WTtuviEymozW5Yz1cKWYY73bSqZWTFLkzs",
  "key26": "3LnZVtgFS3EMdqzjmqbd4ubNZJedTrTrLomKQ4rAuT5bitgMVR3scFELPj99gBoWfRFve2K1id2v9VzSBr7tkwip",
  "key27": "3q4J2ceFdURgNatQUKj6ULPQ9kPLFC4KPKbtTJVtQakx5z4gcWHM8EGas5VUjpRPTTBP64XaU7ZhnGQhmoZrSqyV",
  "key28": "39yYNiKYjuQXt2o9yKzgbsjzVPBQaruY4dSR9jzeFWKEBYRahxRCqZ9odTxB5TxYvtMgfK2KLuHHc5YgqYaGKXKh",
  "key29": "5QFhcKLaBfhU1LoPQFAYKkYAJEQfeCRwzvabFeFpJ9fMmrGvxBhYLgTp35yJDJpxWWNVjuhcgneQJbhvJp5gubu9",
  "key30": "4Kmw9gMcDeUGkWqrmKxVxWy25XQAg5whzpdToGCvMSDkXVMwQ2TSdrAQMNobQpJVEqe1VVmGLDzNVtCdgLf4VQwx"
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
