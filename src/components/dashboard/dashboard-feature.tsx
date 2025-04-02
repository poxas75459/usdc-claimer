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
    "2gzwVChdQajgJ3cvgxsqKjR31wJ2nYD57GgcrppbTExH4TMWnRM9aVCS6nZtuxbg44q2vRBo2x5v6sTseXPQdB5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Ld5C6koQ3LLxEbL4nnKAFmdn8SdMuvZN9EUyeiWDeVoYXu7Mt4GVFnniRaeoFzCbWNibyg6E9kKf76wMRksbyK",
  "key1": "3rfUXjwUiecAbc8CAsLVGkVVTfaAEFjqaqUx2GoGF3N9vEz5u3NJ1JKSEQZ7jntwqHsLpBg9kxdz6Lg6j4k9KGQg",
  "key2": "4QjJu3KguorgDwpvKzWHDWkBfkoYmKXSVrCMc54gws1ZjnggPASnoqbJHFxmQwP7bovY8kL7Q5qdmsxawmFdpqHa",
  "key3": "4YuzULSiwbr8GjYzLKSgUPrULxFRHpBZ53Q6RCJY4bem4caKntPP6d6tWjxeQFvHMZwVX9CLWipMdbZ2QsRencPX",
  "key4": "So2okxzjprQSJriqicMgFUDvjuwHof2e3x8wAtks39Ns4yCYgyPy8E6sNQPTHtVMAd33V5AQA4DLKVrixKPi8p2",
  "key5": "2aQXwg3gbKZHYc3rG3wjzGDYLGRA4D2BaFWssqsCw8J7N5xBo154WDYyDM3SjsgsQWHa6sSSgCxBo24XZNparXLm",
  "key6": "4vpFCBwdxFEAEtKtu51D6BLF15DkTDJCgCLy92zxymjJmZh1iKSx9vGvubRF1rEkahmmCpUfELBmeyViVUag67eC",
  "key7": "p1amjtrat57rzFwsEqajrZxZ34952BLdiYS9m8AdpR8YLKdPApdiWZ2WypzyBnhFBrTyiQSVoGysKRsPYinzbyx",
  "key8": "5XKYpRgXu49whjxNxF3mTGhtyjSFp8EGd4dUhs3gt3yPUZR9ipCfxfdrRgnmpgjo1DxiwbqJWkyjNVuC4cfvfNys",
  "key9": "3UPQfAt6jBi9MEKg6tUQgBuYeL5SWVfKcQoTQf1N9SLtxmegGJoR7k1yi1SuUpXR2kw5UZC12LQyQUxxModR7h9k",
  "key10": "2rJpVfQTpveTJvGBeTqHVASh4CzjKwnsKGMxB3YuDDEiCUKpqy1mvZQBjWNo6QCKmXvHLvoth2R39vyVa8NtGUoF",
  "key11": "2s18QtBzkGSFz8qGnWmYeEFGoGFFxhrjPrZwv8kPbfWYxtUPqRtqy6Pt3HjY3SddQsKMfdwzD8yjc52cGE1fqkVF",
  "key12": "4GVndNxGNQA6pbtxBZPGa8kiMuJLQVshCM5EDRcJeSqcyEztYMThoVwVE8xfEotrEbn9LazzDcenkTg4mmYqjzmj",
  "key13": "4cUchHVpHQLat5v2AXAQZs3nJFwha3RzAXQYDqMvmAsoiaJGLaivMmeonhXAZZ63z73aJH76zPuvr2WDfWkbKthq",
  "key14": "2tohZw61JTr7TtgoEEpedjxddkeEzTpxqoJ4cNmbcSGcdWXVTPYa4EHv1HE5TsB6jGL52i2JrKYJtQTL1qRpGiLW",
  "key15": "4vS3jzWkdkW11AZUD8Yb77WZmnZ1NYJx7F5GqwMTnpeXVufbZkbpMn7sZRVtLV5tAnpYqtGsAWBdLk6U1VqPZ4ai",
  "key16": "vtLLbuEim4DZQJ45RNWruUL9Bg4o9BqzvtJQPyknWXYKT3Tu65Lcf3kcWyxbXZo8sLWzaunPbqgSBPnteJGQxei",
  "key17": "4jTE45ZWobXKvmnMpNpzMpfswFVYJoFmBQMvV8cEix7xvYuRAmkaXoyRhWLYvdb9gAEn9zdays51oErp1Mze1wct",
  "key18": "61yQQzZQu83uynapp4owChJQXD7CUF2q4rWzaswoXGn98a4UkeNv526ypc49FVcx8Ux4f9QiC9YTe154nY1vBBpB",
  "key19": "2VUEVEDT3zEZgks48yc6ovq9UTQ14ezG4XFAVaPnw9rznBTbqurt8ec8mmhNFT7TExn8v1Rk6Xogi5Z4j4WBTTV7",
  "key20": "4gHc3Hq61dg1Ckm5fieSXRH89ENXNrdzQR26S7AipoTuc141UqX5GNjUw3W1HfPmje6jKzoTVRiMfUNPrQvh9Xx5",
  "key21": "5dnKMvx3AYzJTxA7B3bCKgPRGvzwKjQbcea55pvZ2NZKoNZkATjAyMpKUPChFPZLs4tQoqMBiEQ2xBkdLoyDUZNy",
  "key22": "3fEMuoXBg5FYpsHohsUQvseXoMrNDy57KdcodGRmRgTAZibyW3P2bPq1dcTtsturwtMefDa5ud8MzDAa7Yvbza5V",
  "key23": "4K5DnGbnozUpABVc3kAfPqEN1a1jCkXV4fX8xehvMv71tDQ36JJKLvqmDP9yeJ5j7i7iNRCHy7CLmZ2piuT1NeQP",
  "key24": "nPBFweL6hz3bAJCsXrtsAJA12JwJ5zgxZL7Ve8anQgReammXSD7dUuVPDjFSzZh1o3a2jvTeSweqtKRi2RbS2h1",
  "key25": "5aHJ31tNSWDAQWFRVz64wCFfkQHWL3Ex4mtT4TmK9yXw9ETCtbp5MeyC32PaewLMDyceA1ae4xWvjmWFPZ8uzoVD",
  "key26": "2bBqt4v58uJuDnx4n1iMwU2LBPHzRMWps6En8fM9DW3tK9BbZ1FMG5H28FGU8FmEAosEH8NTWyycYiQVRLYYhxu7",
  "key27": "2VLd4gxRDNgD2JHBM2HLCT7om7kRcPRKsqT2GJkpg8udyDEAohR7SM9nbyvGzy6c1GG3cgvaAja7Gb5BiMpaWaeU",
  "key28": "432w1EJJNqT6qaj7vod9xHzKPfrWTBQQPrRTD1aZfFr3of28iH4vwdXwyuWadUGYSkoEi8hUHvHv2DLjXZgpVCwY",
  "key29": "5isgiv5CTH4rCSZjkmQCboGu5iRYPVP6oupiM9HdiJHg24cc4PFUihHvWmzj4Fj7HPus6MJ3T6fVSWw7H8PBFCQj"
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
