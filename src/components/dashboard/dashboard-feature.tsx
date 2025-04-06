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
    "43famrMcbJTo1o2Zx7vw8YD9CfqcapSjhHydMUyMb4DXyYQfPA8pyVrqbKoAN8xvPgeePDA1dzQAhqordVoRDNVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoGsq8FUQ4kKqUptaxZdvZksJa4fw8zmLUBy7Fzpkk7Km9zAkdKmqewXmyg6iYEg36RoKbF7dPydSuxznVAUsXh",
  "key1": "3r2KXRYVcm6iQKiGpTPuoERJt8uD2BxoqLVTr6uL6SNGq8qd9vjdwm2VMsuwBB2v9UwMsQz5zXmM2ziiYCUtkdiT",
  "key2": "66DJTEGUPWo1nz1h161qBR6PoMpQM4LAfGxTRTpZwqQVWURaTJV1K7X3YbCbHQCq9PUVKaiqV8fEi4S4gJXivd9m",
  "key3": "4f3VBmPLEmG4ez5PdL29qtoNN3vdqDRRtxYTiyBSnVcFcAhhVnJdwLW5WtPgrkmerbtaTEdPNNiCdhzLgqfwvFog",
  "key4": "3hnxA8EWCEQ4PhtDb1i5z9tGAAFuoyLUpDLe4GqTw1F56xhSM4uyMXPvNkHUr97MsqCRFU2H9cV7zS6aE5w5bZ64",
  "key5": "DkEuqeiHpaZBU75LrsDsFdVx1eQ95mNDZLCj9aMhawy6QWNcyZLTzN2WtfYpA1F41URmm59tPRSgKjbm21BajQZ",
  "key6": "3P55kAanEux1P8LWGkiGNeQDv79gAa5EwU6BK2b5mzYe2ydFdMyP1BNjp64iHxg4TyZiznTdET8xsEYgERih6NJu",
  "key7": "5pLheAbCWnhr4J6dJdKtHfqbVTKAay8XPyS7YnUeFhwyz2EoaeYGXW1uDdWDWdHXW5dNWYZhCQSkN1q4BSu1BH5R",
  "key8": "23MtgqVG11mUeGtzFuJXR9Yjz7T8BnioTQ2yjx7GqxjaKVcC7P84e4uR8W4w7Bjkkq6h7hLmUVfD85iNCuEyNLym",
  "key9": "64iTYAp1BVLQLt4D6zVz91cJhuFFVqgCAcNGV8XchhHu8bgCm4sJLe7qq9SBmgtHPZrVbQBWvu5dkV9rNTBQPMj7",
  "key10": "44LvDw3GwxiNk7omA8sXoT3ToMazWzwhXcBKFx1u9L5Tqo2QWmpu5PjzWRD41ZXRXS4iFs73ewxUrCsnWU7M68k7",
  "key11": "5qE6usZja2FQFXk6z4iJyWqmApZmVju4wJWY3ZnFAMTrweE7YTs3XgVgeD2vwoY2W9Zr99siBrRbX6uTN9ErEBia",
  "key12": "pimEsxZJobGu1JeHVWGewbbvT1Pz6ecHz51NxxnBGC6ZuLHyJAe3v1x7Z5Npf7adHA4isrqpTvtHaJKov5Ti3t2",
  "key13": "3jNq31KQmKWwHSHpBz55DAbfKR2QbKuJwoxbNocY3k9RzTphhcnnAUv22h1cgBARQx5MTnmTzre8v7AFD32NArMZ",
  "key14": "3cCeCT7n5YoFjBuEbLeHwDdZ5fSjsHqM9VYrF23qfV2aasJCeBxZygkB5cMipqocfoxwJc7KUpgHRmXwsuJKNWTH",
  "key15": "35Lu1sSPvMeNzQm8aFyfjw5ZNUZrzm3EuXV6KKQajzNhyLFXviQhTykppQjFhrexnCM4WJVQrfjeMCiTHZk67nxT",
  "key16": "2oKa2guMahTWdRmxcLpLP7MpNjMVBvUPKrZZwh3RD6i4N5Zmf5123G2x1PwdPBV4bPqhxprs32NcCEEdmpXav9Hk",
  "key17": "4G8xFLZrS1CQiB5MFNkJsW58ggpwXNFdZH3p4f8Ph6U7zbWGEonFdnh4ocFTVF1UBHyAafpLFozNVNNy7iMvAhC8",
  "key18": "45sYgiLW8vMQnTyi27fmYrkneV4r7JeQgCzEPDDTCnDAFjR7CEtheFrNXL9PBV4Sng6M5yUPSJJMo6MY13kaZVUP",
  "key19": "kKt4yUiKRgJzRiT6zM9tnz1JgjCHtKYrqbj32UaH891es8HzML4rGZu2EDM2dUT4CxvL1iEueMeBLbXPyFYVK8n",
  "key20": "2aPgsgYUaSFGgDzcXFRwNdrWMuvo6Lue7ekc4kFS5MxtmdgwwkaFknJD7EcpsepGkrXD77HAcyVQf5YRDsCz39Gp",
  "key21": "64Vy52tTQtsp5Sd8e6Qqiyu3qdGErcLVidSGFbPbGNMyGjM8k1iMg24GXQu6YLUNc1B49DA1oARx98519L2pLHoR",
  "key22": "63B839wSfHtiH6dCZLGQYAZHGxtFC5RsUauDrP8D2Ujx6ELEpM5uBW29y3TyXWFBux317VFnJGxRzQ2FxHrTW2MM",
  "key23": "vsrSwSUqpkswsbVnuwjbxq5utvRA14wnPwHFGKi1hXNB3E9jQZnVLTH37gcrMQNGFM91JUUTwzgLki5CE3juy9o",
  "key24": "25EKLJgmGAfq7TchpmFoPtEs8yTvi3NhmzweAhoUP661agZDd9LFWgZngtmtEazzxhXdKJrHF5RfWAiqRkJJmFNA",
  "key25": "63hMmm3pVFzXv3TNTHdH55qgq9eVZybXraGmhsrm1P58dqg1WBC6fWComtTMGe14B6ow1LbJTAPpoFjHSXTgpZTF",
  "key26": "5grQnJUHYkqDpys6gs3ePxuXwt41Az1EM3i9ZzYXqUbML1Uf9jB3ZizGrt9tJL4KtpM5uFECTQHtnNzbqsceWnpU",
  "key27": "5WzheQHuBciTVjJkoX37FmukuYkNuRFbzqNBEQFHWSU4uzLh9kTiWAM8SFfSxmjmyhHW5MXd95zdq8JbhEAvTSsV",
  "key28": "2c8Hp9ZbzNYbZi6exZFBApHL6WSNYHf9B5kJLikAXmxFuLqujX5wtD1ejfa25YFmxDbHJYJDbuah4f5v8sRcVRta",
  "key29": "3jzCQNGyH3tA9bmnyyqN7AXjeTMtDtnAnwp3gGKTaddyM1NW3CrQV8Sz392XaK59pn7xCMFLHBJGxP7Big6xyuVX"
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
