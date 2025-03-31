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
    "5cv7pntvvJwGwdCkT11ZKsnbE6JkZ633Ds4XZzWeQ585dGd9XNaEv4HLHA2Aa42h7KkfP2p3Wi7dpTrBjEAtzmCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gXxeeSJpLBR5kET8j2tqQwcRJsBYR7TR3bDCWiVvBbmcSRCaRmM6jM8h7TGmHRwZsbytVqC8BV9t4eWWvZA8Xg",
  "key1": "HyNCncVdFbvKEYKkZEQx2tH7keGNixjzQiMZkDGNz2fAcCaUjBhCxRLRpqyrJWQKbMCnnFRMUDEppko1Ubr2JY2",
  "key2": "3y8ezvPh1Z2dar7BRtfSR4BUhbq5cnCagmyWyv3fV9BMG1kxkqTW2g3CmQ4EM6sL6Td4crsJGCyG9ifgu9WYLCDH",
  "key3": "4pbYvt7PCdQmtmqjLUu4K24k6JVY1pdGhGm1jWBYLnSfn9LTj8TPeTPUg1AqHRdEjPSWQVDJnPbPPiSFkJCXNS2r",
  "key4": "3FbsTjQSzoZXxWD9qmMQuL5KJQdXrbCEsBw6fJtS4EzK3nUyxnj8q6vokJpWocJ6czHvajxhddAWb1DVV4xLVsVB",
  "key5": "2beRCzeFZ8i876XK6YZQnftugvxLiRaPaBVN5hj41Qa4eH2UYkaGwVqZfmZrSYwNfVNUHeB1WaUKy4omKiAiYXdR",
  "key6": "5EMidxy3nmK5qL7KuuBmS3LRbFX2Gm43qb3UcHKV2oMv74wJ3AtoG5E23gH2gc38dhPx4hV3cunDSWvLMWRePjqj",
  "key7": "4npVGzJFQwbYSzNx5hBRyCxvFHTQ4q7FFeuqAkep4Az4eB6XZvbKVL9srH32WGpEFnSZQFcw5gKn9uAyxowVuk7S",
  "key8": "3HQ6vhybr1rRsSjGq1Y1HLupEaTj3tCJ5kBYDuZUFT5r4EQP6PQhTUoPWdznEjhZGiV7o4mND85oeJZZ1ZnCjiaE",
  "key9": "3e8SBjct28zSSHHqkKMCbaUNPExtogoh44wcdkTv5odaxkR1t7qvyWBgPNq8fXbGR8qy1YmELPoWDGLCcViypYCL",
  "key10": "4WZH92XsDxRT21EziVLANxuFX8kgNV2SUL5zuRA25GzNL7MJeeF3e1zLFu1E2dKDRTyA8gTDL5KavHn3B6kWx7LL",
  "key11": "R8km2ncH44T37b3k8E6atrt4EuHFLxJt5dG9Hm48dZfzi6CuRT9axd54i2rYqiNgdriz1aSdxAjTTpVEqMEV4nP",
  "key12": "5nG8gyd79H5Q2toeCuD9G8aHq9m67PKWiwBnEBmpkcKev7Yu3CMqMeV2rvkaZA1WNy1VZo6WHFQfrRn6JhtfPrJQ",
  "key13": "312uufyz8Ljdw7187gFVXf71sjTiEkbfyr8vJ6URFFjUsdAppGpDabQFrWC6AWbzy5HHDKBP6V9w7duDyq2wYwvo",
  "key14": "3eQqi8uQHCQyCPYpYeN5EuBjZdFcZzL6yfYtMVJSK3kG2xiE6b1GJb9FaP7jJRcHDhWUr5udyMm7wXSynf3Yezim",
  "key15": "5Aw3TUiL3J4pdwMmqwxsJAQPxGtFNFhiQ4pbZCrGUz1TokGTBJVhUadrvuLEe6n5rYARt8iuteEQGMYcCL2MsV5N",
  "key16": "2Q3yqq4YhR8w4YnmgrobjEYMpnmjFtg98XhuJEL5g1tc94wnK6x9Un9AEJ8sdeckUeVGrTuPFFeM1u9anKc714pE",
  "key17": "wa4XNNSrKEUMfNpYtxsogNTpDfXsdskhLQkxbqi51FnCpbiYFpEijWLPSCDTbYrC4HFENPtFzBWjyJhTvWkzLCP",
  "key18": "62GBo9Ftnh34ctgruCw3XTTtKC3Qegw2fRRi95m5RDNLJUW8oHAYrSpf4B4D1VbsUCpDg3FSG6sgD435ywhJMdjw",
  "key19": "2tus9P2hRmKojhMemmdDd8Hwtdya8RKLrH3KKJPN2hxYC9r1UbE82DknLJTbLGGDKdbZiciYKfBj4VFGXfxAB8dq",
  "key20": "21DPhd3XmR6Yjxbd2qKAfenPvapxgXqcYnVtEDWb4v7ddXs9hnhMb885xPNXucDNi6o1KwKPS4N8CyMRC23PXrf6",
  "key21": "2Np7ZPMDq764sC8QXUXruzaioE87v5DRDFKwLtmo3oqzbNaSodXset9LPaVFr1KQzxTk8Mmnn5jB4NjiJusqWv22",
  "key22": "2pTuT7emHvufyuGi3QaayVEWF79q6QTXvDv11DYy1sU1uqBMiJvD64FizA2hiLzD24ULJTcayn14dKiDhr8Ph4Yz",
  "key23": "3LojemgAyrDBSmFzjYUBaxdPDHRRdvvovAgkStWD8CZXi4aRtDQDWzswxh2pyZpPUZRnfvDQ8oDduYV2UqQa3kQN",
  "key24": "Z3wLCYruJHE9xkWn7KLBPotnmoQPH7WQyeAZbUyRHmsqtdZCL3fz4TosRAG2KfoSgXKhjT9TbKzvcBqGinPGsAD"
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
