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
    "2G6UegKk2mGAqjNMryQu3KatvvQMGSsDeDxQXhUC4ydpAW12SA2P8WuBifyrjUs9RERfGfTZktujdVmRTDo43qM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hV1p65X8tuAG7gNAGmarHwXpWdeS7TeP6gWUoshyfCzh4BiZbH61sM6XrErWaEeA7FebJB7NqHKWR4PXzJShTtF",
  "key1": "2h4NzSPVwHjwZXcTsx76LucpvLuQ9sbSDwch7aehpRjAEZD9kkxtdG2dRxPDNK3TTdqxQ4QTFefgHo8wSzjPZTTe",
  "key2": "qGEmq4yQrpRY22K4BkNdVUfu7LCsmFQJaZFUkrNj2zNyRt1R47YYg9eYcERaUFJdoZPYTiFxqTvzFt78kcngrxU",
  "key3": "4EB3JjTU4SRHF66p4uPKFZZ2C1WxPDdbQJZRzh6VBshp8vxnmRRRVMacTVFHTUSdUPmGaF5XAdAdJ9xuvhnsa1qX",
  "key4": "5d4w356fQtJnqieK6YqapV4ALukmQrzAeENZgECJisGj51VFPSyy1yWbf8LAqXeNmJVy1Q9NFc2pAQiJT8nQ6isr",
  "key5": "5ZZ2Zm7sqt3ksc6cJWf32wSaE22n7oUehHqUgKFi7VF2dJoeAsUd7LCmFSfxUEW7RRCavNxWW4ANDaBwAtsvdgoY",
  "key6": "3gzdD3t9p5FSGjWcgmLaAgTx46iaBWcjW56mY2gB29HHVqn4m4GUb32q4ug2nTS7kwpRt6JhrpDBad8TZBi2h3JQ",
  "key7": "4AVNkdY9Pmc8unQ3iUjhLfm7mUXtfR8VJeo8JpZToictTJbTCvwhFYBo6uB3gZL7LQaDnNgyoBvZqRHvvgUNCHrv",
  "key8": "4DXh6JHnJUh9UH67q2w7Jdb1MwvUQtmZHq6Lub5e8Fhv5xmkNR6xrPQ8P9iXKCGudDUdLkVeKCFKRQmMy3j22dbB",
  "key9": "zoVMk3zQ2geCzaBweyCqPXXgXbErbAQ7RMmiWwRPZAahTNzbLnMZ7qEuoSsEFwkrm8iEyFbksnjN3PWoDqxUgiJ",
  "key10": "2ayWfCMWeHCQUhaJUA8fNvAoj3eYuczM182JBqj9ywHzWhCRyLgDKzkZtUr7wuEa6t8NQeEatRTyb7PowsFym3V",
  "key11": "3eNiC4ouuTxmLgdmC29go9jDBduUD3VGSsn9u5R6qLmUkN8KSyyo8w9LnSTKP8TzTWxR7S8oSxPUJJpC4G7sXnMG",
  "key12": "5vcsjLQKoAAqaV61FHcnEoiAwti38FAAh3GWbfSSwCtaCJueX17WHaYAKJw5JW4HYNgo458E61sCTi9gfyx5vT49",
  "key13": "42eZqZ25FtCocMgZH2HMPPZwuZtkT75YXQQDhEQojQodkV4cWphYMZZGwx4tXJwBV1Y7mW6sZvWQHoCETi3QXgfN",
  "key14": "4vKEZiLKLJXWKLAzSibkP6SisrupKVpA6sW1m1WVRpuWQarhfBcshTPrjFCX2wjs6tpTFcj2q811bj3uQgJM788u",
  "key15": "4HckEyTvEKVsCHu8PbTV27SHnkk8MwWEWpKYmhceScs81TFSNYsQwiwaGpwx2i1xAytn8VrRTkBVQeTTBs6KumLs",
  "key16": "41eS2x6nQUHRCut4zNifen3RCp44hd96HZrVMSKwFTzJSGgbv57Bv8TctjTVAgWJ6hKsArJhC17Y1rWmi3VBM2K",
  "key17": "3oiGoVwKgC7BDqCwKxw46bT9Vn6E5FSd8muUngpsrDEdsRBSXmbrk1W17qSVAVQ73TcmdKKdz6eoWipXMwssgmPp",
  "key18": "Wau988Fbo1sr9ZaXAwuWkVKh5NJmYfWsDnc4HfBTLD6VXauX2rDEkEziE1Yduwq7Vd2ks7vQWd4XSETCtrtGTm1",
  "key19": "5CbFZ7KFXszoNqjzErkZFvaYDcKEWJed7YyPSZdKoXBGj2fxebdW7yGc8bPEJWqjbMLyaPwiwpuF3ZCWHnAuq9x4",
  "key20": "4XjuPt98y9QMMJMrrscr9QvSKzdXKgiNRXQVL6om88R7ghwuNmjV47zjpPxEaQhvv13qrdNkPExKRUtpR1ER1e3X",
  "key21": "5Xvv1mzdQLQwvCZxdQByj8yNsLdioX7eisfU7zxjsTSwAUu3R65c9LNqjEp1oFdDLXWmQVNksGxjCLLRRUdb8CSN",
  "key22": "hwuBygQMrnXuHoUrw5TDAkvKwXouJFfgRUm9xfoP2BdNyDVfMJNj7R19sCmgepzHwbm56qkd6HwDX398ap2MBAP",
  "key23": "ufkbSDBcn5b1S7c4b9LpLJEce2UAwdnuUPTtCGUfH6sg3poq7PqZ6PC8gCwAbsEPonKZpiaJr1DoY5B6U2NQ8Js",
  "key24": "2EeQq8N7VotDgUtaxQyVmJWTKCaPhEeQe1JcRkGY5KJkk9KjCwa7iE5ZehYC8mmqQ69AVdEer7gDJ57xkwVCHbn7"
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
