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
    "5jsSkG1PNdprpV9ndLyLdwx3vtoHyzcsLtnKBptWGSZMxFfDrSvZrVqkijiR53H9SCQdE8d2aQXRpvjtjrCBrjA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JqnBbxYVvQbNxdc5wvYru9Yermk9DmHUngzTexcGWicqzFtfTC1JYkzwy1GavERuPkkyDeuWt37Ps63NGy6asQ",
  "key1": "2XgSpeteeeNu4AEgcdmDU6HSWgDoRRPPoVdaLnngQCw2PhDVzZNRrCz4mUd4Rnb7yMkH7EQxwGjETA3dW5hMHPTo",
  "key2": "4A2NjhxB9ms1JRFXaQwBKjWCX7WRSRCNgpSWiLNXZfjKHbT7RFvzwN7LSrLQenUZju7MaGjHkC2qypdLN22caL2y",
  "key3": "3urWNMAp7Foizz364Kzy6PXgtBXXxwbxqcoWuCVwuQEtrhXNz5qsCo5PSzifx2j2EyW1njhNsU7hVru4KR5iespa",
  "key4": "5wJBaiJdhzWvq99wSVXwmMGTNkzTuGyoF3AB1oC4qRP6wnU4ckVnTriL5HMUofmi9x6MZ3ccQ1kRwd6bySJa5Mnq",
  "key5": "25cThaPrNd9Ai4SHywqEPTjxbJgrsjEBMDMfwcn3WVeSh4Q3fs4bX3eKBtvmtNyRCRdEmGFYLUnE61guu8h2uggr",
  "key6": "wp5kLJ78F3Luy7tcLdRHfay5YEM6TpMFyeDKb5UQWekTPUSeYZ9JGZthMArkL5nty43v8jijku1Gp4duVcwfiJV",
  "key7": "64XupCK4e5FrfkZ6SKkfLkVygVnbG4ymgspdaGgb4jRBqLUbx3Ss3wZ6JgXiHjbDkS1SaH2JESZLFNxcGZPzX1Fs",
  "key8": "4hWRhmEjFmrj1RD4zTbwESosWsk4kpm2Zo9gg5LLpFc19CWFP39Dho1XMvaE6xEDqH6H6VhnYqY4rHGiYGoqafWU",
  "key9": "3tvaPNE4b9JFQhwoAEK2DcDJ9ihnZkv2fDDDidWKyk641d6aSnqzjfceSDAVerhPn7NHuuoNm6HRch7QiwVTsH3V",
  "key10": "537TcrRz5z9y8YJwS5NSbpeS2Nq9YirxqMoFSX8yn4bD99mvsdJzt7VJhpsZ6dmqch971gotBdspWGd9QYrGXzb1",
  "key11": "mtd7rh3h8XoCfBW1vw5npum6Up9JaFLBQJDVirwHLRoT2aPxgBs4xZWFxyCGJCQU2Ck2mwe45wz7THxAHmfVQLR",
  "key12": "4CW3egsphaJAarW5qAmgFT7Lv327btzpKbKrW28t9awHLHrx4zQFanZKaedmqa4VaWhVTUi6pWjQu7w1i5qfQ7r4",
  "key13": "3HMmTzMGE7UidqrLcXrSBGm1qvaXQ9dyKTRLm61cDz2Ypp1BKsVfwFkj8ySWJisQAHubx6EeXXsdphttsHXdE6mf",
  "key14": "KXeEJnSqTFxewc2BAVDb8FBSZPNkUgn5hR8qJJZbjhnvbxG9ibuHXhrLuFyjJemqKxuTRYcomCRxPVoUA4kMSqF",
  "key15": "4AXmyTKadq1LqqCDWJMnaFSeQaKaFtVjp7sCS4RFzkBZDe24mAZRbw69MtV9Q8byChm2fzUAqAtSqEKVqgUyV1V4",
  "key16": "3URRrGa6hqLMxMBo2bGsUwzE2VjSTVKxYFYNBS7mfernJTyQKjeA4nxi1H2482QadCJvHCA4mGtY7cAWX26Qy5QK",
  "key17": "3EXRHa5nN1y5um8i9usdtoT5tZsNFegiUUinVUpxFgr44aXnamaLq6Ygprccv6QdCbygvc6kC4YwzkVRuD3oby9b",
  "key18": "3RDzCUPEkmjTWW9FBGrhzxH3jZfN2sNcRdLdpoEsM8tukEQGM3amaySWqxCcjE3FyaFMmFNCc3UMZkcPLua5xabc",
  "key19": "qk7RQTvSGyqvrHe4Mc5sVCkqxCqtZc2DLVnQFjHYtXdrYpc9nxf6Vhq1JEFNRbMaTg9PHd8eUsUdEfJ4S48fQh5",
  "key20": "2MpydKtgbC2fjqdPwzReM6Nwxg6k8uciVkaUeuoA4SyypvFChXX3KyzieqsPJapCLtafKkntggPVg1RDCr3gAWkt",
  "key21": "3QsAHvmKfnzmnGjPYJrHv5V23DxHkfpMESKuc2oSGdvs5H6LhPLSJfYmkbvMNukrgVY16BXSfPm5ZGxkVM1ECfA4",
  "key22": "4fSUoYDthzVHRf85hnBN8sB3dK54HoELe6jepoUZja3sn87N1Mgs2aMJa5B7X4is2zWKviy4sAqLLopSNzUu4Pgm",
  "key23": "4FuHNAoEUc8jnTaFg2mziyVEcXitgBCMNMfYmTPtuFkDwLoAYa31E5fHQwBuxFG1nnFXz3H9TME36d98yTXsJ2YV",
  "key24": "2WG2cnwP7Eq4ZtuPQpeCyZ3DL1gBUDSMmJSzV6tQE31UUqv5pqK4jSvkxzD7NNkXiRJSCfSdBeBd77dhBNpUTs5B",
  "key25": "5aoD4dgwmRQekZshWBBUCZrTeoNSQg3a98JSCsnDKhLYq6G7w58oeAVewUk5MLuLsqSdZKEpxPZDwVserCnVZjNk",
  "key26": "49u2WfJBfB7E2ve41csz8qMzize5QZdQV1EmCa5TkeHmaEguRYsvjQAP6djeY4EMtcc3jaXyGWK7HMjxYxVuS3gU",
  "key27": "3yoTEXjSo5NqmkEVmM8H59Yuf99rAeD7TC2rqxTv56ovahYEbnNRBKXXpyM3KAGBeHLUEdS2V9CsNbyzZQxaPbzt",
  "key28": "4H1r8hDxQvBWn4r2Mx8vHBmtyMZDSYdZg4g8n6NLPANJBGmCuwrnKbVq2ZeRxhcg4m3VvfAaxyg71s87Rt4iLdj2",
  "key29": "3nZFTSPZcqR2jP7G3c3pEDLTSX54HQvBrxQL3AyRtAxYSQaPSxy11U11w5mmfab1gePCp99GLzssFcgJSVemU4g7",
  "key30": "4WGtdjpCcyAA9EdSm4nsuu6tSUPw7FhCstGtDMLmGEkdVUymvgsvKCBxfsDHJWJcWL54AsgwhrgnE4QqBHDD3SfB"
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
