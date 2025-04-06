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
    "5fg2f43YYvMCN7h6uecdwpV8vH3kaHAGevwQWM3sBdM5cuUFwXx6bUxqwoZLyWpq6pkGN5RNomAwmSLcv99KAnXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1dBgHjg2R95ikbye1z3RahzpbuCDVUVnci2E5Q5kLX7p8HasX61kGvy4mMzPefft4i9jSCS8tcNHMCKS9dZ8Hn",
  "key1": "2fFFCqjssS6ixTF2tYQrQYYsyN3iJ5HJ6Gdy8Xng7zGmEVHmy4y9sEwE3hwFnV1rXmtZkKkX5dMdxiNdg637vUP1",
  "key2": "3JUBnjKQwwsowk8997BLgJWJNW9ZAtFHBtxj8q4JmCq5gD8pVpkd52GNyRwA2CUf73BYK2gwY9iPJ4fdoVjk2uQb",
  "key3": "3j4JDjLQnGx9oqALAezJCtARShXox771TuLeyT2NyzjWQcspueHYcqm9YtZbrz8XvKT3469PWiQnLocB4uGuQVQm",
  "key4": "2haxCJZjzG8JjkLs1Ae3wjrpeC6sNW8yfY8jLD8UsSsrR6Cr54xkk6hetfcBP93sM19iQA6zeqbTsEGbvkEGwApz",
  "key5": "fjHPvVSWvpjCTvrSWEUrrkARiAoJQ87gFS35wE3RX4MMjcqNtB8wQctRqDrDh5xT2tKtjN5oiskkrL88urLfD6N",
  "key6": "3nFtajKtAcKPGBJWfn1QF9B7DzLpacovVjqGHvsEkvkSfbqa5cubGTy9FjWwNJ974HTunL5AFMn8ampmLurbWiR8",
  "key7": "3eYBonwzGbQ9DP9kaNH1unRHiuhJZVL2SuJR615roiutjkQphj52bwapaLtYxHFHoX4duYHEj6xq27ZMqGmERg4c",
  "key8": "Thwojf5iJeERySCN4zJPGYxThRj8SJnAhDTCeDG2qaL1EmMaViUoziLrf15ku2kKEDftVwGcvyr43sGmoAGQwMJ",
  "key9": "5ag8sSMWz5KQ14ZQwutiYBzfzhPePoaCzeexbkzZnX5JNZg9T6fDtHQQASB4oxNJtbEmCDhgjMCC5xbb5jrPcanh",
  "key10": "25pxmRUvbusrZ2GFubngZ7M2k2Lu737HsGrGKuYCxJ7rKQkyktnvn2Dg6MnS74b2edJzjixgtN9ohjhqeMX1bXLn",
  "key11": "5LYoo921ZRkW1rdgWKeHAKVSwFE5g8Ag7Bvgpr13DT6LXAKcPq36VZNDS5G7rmUWeF5aWgjAgrXURZbj3u2f2PMY",
  "key12": "57AzdynPRnEqzGWS5c5XsdCnne2yK3g1hwhjak72AeMrNcRm68X19KX3bRwseogAZFuf2yzuxNqSsEArMZwdTr8b",
  "key13": "25oSb9HJqp5Bem6S2mKEYXt3pEkU2Yw5Y8MGBEwkfBY3poJeWn3V7YCXfhy5purkN8ohNCuUYeHXkKqzdXfoP3i5",
  "key14": "2waaUuXN6cgpHbur6yKCffCtStC3o6ssZmHA1Dm1L8udanCUL7nkJoWgiQfiyws9vuxS4rZzpmKR3PAmRfAbhBVZ",
  "key15": "4wg6N81XkYV1cvWJLzAyLaMnQP41f4a9gtVcy1pExM5Vx5a3ABcNy6s7wN9tTuwzpkDiDC8oXtUCAQNNncYKWgZs",
  "key16": "3BFJ4hEjsQiBxGgsRgQSs5ozpCrNMgLda87E7CxGn2w4tXBqbzgS2adiTVHZm862rP2FZSjeikDysYQxEcds418K",
  "key17": "Sem6b1dwe8CFo8ptxUHchzcbriKZqPF5PQNEGGKeBFYEcorn7HzcbKESzr4cgwzGxJtB67egikPzmVkTdd7u7DC",
  "key18": "4HeqnnFVQKBLBHQgG3LRyrAyEDog8QLMrm53Xi1coWoKXzX8h9DptzQzyeq4XhydpwX2McHFaEciKDFT4i26YgBF",
  "key19": "UzxX4oDm5iP1aTzDAtSf6aqnPsUP7WizboXGPUPAs5X1CbyvFATLCtYeiM6xLsSfGKVZ1JGLKW3QeS2tA1g1dp1",
  "key20": "Nfs4T5GBTs9sg2X7CLhLgyirUYPM9YRDeF3y91TRZAUghiNR9GAyHtpgWqLX2cg7H9o1nzinSWbEEz1tkuL3oTm",
  "key21": "WKuMbVNx3omz2Hgi7yV8K5PCGJkxX5pPrm3zjzrkdYb5TKyr4jt1d8eoXD9HUNtRrnBFxypuP24jvUaEFTnbWQX",
  "key22": "56cam7CKHCUr4bg823TEwMLU3623dNCdDs4mXVHDMR1uX8oErnyer6jgtTmnh5jg2kfEMpJimPEXKyTYZZo9guyh",
  "key23": "3JCUZbQSo35UqYec82ToFG3Y8WA6fRwiPYPxvBLDtkGNyiDnfnV1ZAgAThSTEg89qiG2guPpHado7oCYvirDEqVp",
  "key24": "2xCGQfKdNqxd7f7VmkKPGcRbxgKZzMcsXNVBtiGhxf35BaE93dUDuTEFFnn1Ws9VsdwuiSceXYEyCLTRbBRUQpzs",
  "key25": "G33yF6rYrtZN7cHmbjtCFB36RNxKkGmCDLEsqD7TJ9WMFc19yiXHgrRAkDkJeCmqNZjUnU4YxJKaKebtKZgWsLw",
  "key26": "2gZ9R1KgnWp7SAMAeGqVXm7UhmgrCFcVbMLzEGfmbC3jjtjs7cNFMjccGNR1dE5GtTaL5kKzcXJ7WvUSmn9WnSfp",
  "key27": "4X4AZA6GKkbnST44gXKVFhQJhmYyvUUALhsYXvS3mVkTYBtiDy9K7AkqM1iUsnM44bLStzHpbmGUuDwVFL6961Zj",
  "key28": "5DYPE3LzYdi6865SsDc9GMnCxKHDAVEkBgjozBzNuPGtNRCrvPXVtzKBZTWjkMzPGZji9HzKFBWeRJGg9oj6UPwb",
  "key29": "22c4QexVJBpvmmdG1mTwou6dVRec43TRWqMFDTEmkFk1cucFBECuTdxdZDK2TmQR6cTTptLRfiCyzeHvbfMWPEQF",
  "key30": "4dzTDn1L9Dyhr3SiU3nfDCxjdh9oYFdgUVnraRVvEdSDvPNyrssMGBFbmZo6uws82Vot4m1V4LrjQjvJvqPNtb5S",
  "key31": "51G7T9v6Qi3N7beD1LLBB5NweVc5h7Hhb5nAieYneVpkWqpkrmWo85wEDbPg5rjRdghNGgwokNZyuMiHNMK9h9u6",
  "key32": "66FneEF6A7fanxgenTEdRiALsdWcw9B7MzRgofajsosnM5m84aNu1kLs2iNVeyZw6sBkMv57g2gSpcqdLRRnHVVM",
  "key33": "2S1T7WkNpMQLn2RUf6s8rCxWaUBaYvbcvLoiMjE9GWTXvdCTRM2qg7sSxEKKX82DQYrLoFXTKGv1k4fGD7jFPtLz",
  "key34": "oHt229SMhtUDLJP9XhJDzLJ1PPnkddce2sonSU5hR8Le9C65cCGNQgmrRZ1sojB2BvfVxaFyFJgBEreyY54bjTU",
  "key35": "4U3BwDAThpREVjhRrG7ntqHmMpZxdes76pqcA44R58hueyPLRwuwRPQjS2AV9szZ7aJEEXJsfcFSGTaAAsFgd9bg",
  "key36": "5n2qgi2xPQsRro4aCu9qcJaLriTMgZzxAaa74gagqkivEZcNyd1hLQR1nDFZYWamucpf11BVQow1zP9Vc2MK6KdS",
  "key37": "4JNc57hpxc4QVYtDqMMAdY1LnrJpCoGQ2D4bQCkCfXzeEbBg5CzKShmwn7GDzgaBeHmUgUpnpYkz371msgUjH9Dn",
  "key38": "q5L6gfsZW5AUitzrcVsPYha8L7bVzSZdXPGRwobkAQwn9AwVx9UTTwHw3Z8FzkqQcEQ2f6bs3Wn2hUswKnREw44",
  "key39": "E6be88yii9tMi7GqKPGiApcCpKSRyQp6HjDb9zuGyfTex7GUx6xyHDr6m4q3FjXDmHG3qLpRTZp7XEWAHmeDjwG"
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
