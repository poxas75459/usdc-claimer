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
    "34w7qQMDNao5J2taZ1pCaLRFz12mRnWFWWGkXVX4VnCWebDbVFFRNkshZxSaBERbD6kP699KNUA5WpvyYx6YnLQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BREKNRK4NssVvRxLghppVUY2CtVUNKDUXXbRBhJsUFn2N56mBjnuu8MLuRTVJKBvsfY7Nn7ASZNZRw6QubF91CP",
  "key1": "5xGxTimQeDyMMW5KtSvEFxp9647WieMZxp5aN3J5ge4i3d9daZfcKjCDhMWMfyTTwoPmGiHZVCAFDwUqv61EXXTa",
  "key2": "5B36Qa5rnookVj2962AsuEjSB59WZn4T8RLXSC3NbyKzZ1gu3sxhKQUL52NLforovwjXW7UQw8And1gMHUbDgFyK",
  "key3": "2j4iLiRwJ7WZJD6BxKmnJgjtmLgzsMigWiUcgEPv8ZV6djYvwDWhmkVAwYsWfrz22CMM7XDgQ7uGnsf3AkaAw8fH",
  "key4": "3drgpQjXptW7WMdhy1VowTiHVa3WdPSJ43nqj5HwKyotegyGF1q2Mja6Z5mCjBXpecxaE9Tt5LVUA93Z4Jeugf5J",
  "key5": "2SD4F5Y2kt34Pw49mYx5rzL6XGi2Vyjw3R4cuMZzDMLrhcnP2jnnQbTQLaSprqtNxvM2PspZMvZnGS5dKZmv9uRe",
  "key6": "4DhTzwYmr8fmXiqBpuFjNWibFtwwpbKE38T6MvZwt5zwkPyUTph9zZudsfVMVeQHEdGQCg57kFrdNwuELS4oCHfB",
  "key7": "3hEUPU9piBwgSSYT1M5WPzBdM6ZNoHCRSVL7PWve4cQwr6U16Zv9s5WiFuxEGBsmHdpbApmnq671MnPFetaRjy2Y",
  "key8": "36x5pzzr8Gy5Vfb5KJpi6ghUpGxcnUyzseXAmZ2zTXhQaXdNjyNFrycCT2BVSPFrwJQJeR92Fzng8trdMLvWbevh",
  "key9": "53Zc4Eu19Y1e7cDFeWJ6sLDbcErbBkTvrcsN1P155SLRbMNTV6eBBb4DNEq52nXkcZmvjbJqngrGdeEaa66cx91B",
  "key10": "3JsBfazsNdd2ggFdGhDBonVEygYXk5M8Tr7avTaYbxJGUuRocL16MNEgajwMDQMUH6jM1bXdusBydsCE3sFbSXv9",
  "key11": "2BiUM8xnK1zZvtS3u3wuW1JoX1HBoxFG7tah9nHvFoZB9wZSYDi6JiQd5f8Y8ykpQKsq9VkxJ5cdh645yqe9hMcX",
  "key12": "3fFVfuQf4AWDkjixAiDG84dnHDhooCs7LpJvuXLwgwWTRUJtzhFoMjRKBnv6KuKiuYJMDYq1qarViFsC2wVnCqEz",
  "key13": "U9gF6JUPxs8dUjJViWzvDEn38dUtJGFsdQB2YkxvLazkAVF6Xjz7nApyNoVUiaPcsFSHX46dz4vYc8zaoURSjmu",
  "key14": "3PyRVjepafsX4teUN2cbzmG3eDPoP1sS39dzepiqjhrj64uQqBCqaAoQH7CKjUSCvmFKeL73CdHrVkms8yRPrZXW",
  "key15": "4CbHfEWurtAwmvcXADxPxCUXxbUu88WNcAyV5Rbn1g15C5mArPcza6bC52Gk9YCanR1yuQxXPsFoyVLrB2sNDRXp",
  "key16": "4JyL2Grkcfp8yVVP6dzZ4TT6jsHcxF5o6nzn9LHswq1MGzdFLiE4XobyrQirBKxsJgczsabhqU5sGibgh5p4w1iF",
  "key17": "3KSJtX3ZdArSNqRmLgcuQciMBAuAbBFy8esnYcpuE2bsPAL6FWe8PZYfEExUCqe9p6LzPb2rGtZa6UsyXN12ncfD",
  "key18": "XPqdcFrG5oFF2FUVbKZk1mtys4FmcQJpBMC3N6bTAepzaViw9qswtTxnyMAR9Upi7spLi3ttSMtuyfdwni4BzsB",
  "key19": "5xpK8i5NrRzfrURKHs8pQPPypuikciTsPYzTEqmZ1aQdhmpDa2jZVHosXRRsSuadhyxVUfMPXyeRvTg8voRYSoGc",
  "key20": "2fbffLXi7cut9rQVyWSzWVjFnvqo27FsydUBkzySkr2myu1Nc7C288ngvSjAm8NGSQDywNWiYvmvTWEViJxJMEse",
  "key21": "5dTAs9rh1PCcrczPPch1LcxpaATNrFePobExyY6qVpZjzezxj2nKwwNfSydXtRL8i2ox7Nn2CJ5VQsSiUQ1Bn9KV",
  "key22": "3qQpvoYjT2ijkco74mBQUm5Ckvjs1ubP1Zoc6sf3r1KwMa6DbrJNKk2y8Vhzft1B3v8TVDEdxazfQdXhtdYyu6wX",
  "key23": "5fyU8aGNrpZenj9mRxUsLHin36DBTdk4UDUwo4G1Wuqjb5F17domLpUuM1D3xkutZHiJyxpXoJvwVTmvTnVdSSMt",
  "key24": "4NtqrHRLcGwGcj4evgcu89jKdtt2mCey7iVPrDPWHLPUUBQsJGpp4uuH19ZXCTMyyoDxc3hTdoWreXyaMzbVAXvz"
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
