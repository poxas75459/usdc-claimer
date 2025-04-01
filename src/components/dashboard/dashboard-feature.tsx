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
    "5f6Dfjiag8FW5xmcwZ7BVXzhyQyG112Wp5DpmgFCtsDZobHfh4yD8iF15R96sHWdZndJcV1MonRhxrsG7AGVy9Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyKPbpGRgDZQHJbcGucpugFmH17ZMoBFWGxZkuiAfC99hzxDsMsBSvDmzxdAN2amDthz4z25h3jUoMJkBdK5LZw",
  "key1": "2umL7TfQct7VJy6JBmRHLpKNrDaEbTspCtd2c6d7ystBWu2GrYvjKAjttybWLg4Wwcnyw69FJBmqp7FyNji91aiP",
  "key2": "BoDJHg57UwJTjRUnNgUfVsy6kd85HmHYRt2o9QgX9whHyw9Mf74mqUYY35Zvz5GqQB7iHARskp5LXShN348smJM",
  "key3": "2PjgcaRN7LbkfvVrzp3GpgrHDBLHUgRmDNakEJBK4FBg9d799Xq1A6h8LbpywRxZL7FmsvixJnhqPioBnuPDSkaC",
  "key4": "56WqQeH3ESVYWr6Q7jf7o5aE8NHACNuCiTpT1tU4ciAAjnaWL1WsCHPmPmUz1oEXTrk66RkgjGDK2pBpuGTkJ9Vc",
  "key5": "dazVcohESb78jzXCeuYphMWqo9U1BWBgUESVA8XuQ7ozEHAsFoCquVDCYgWKAt6pEtnrpc1DRUiUTR2DYfe6qDs",
  "key6": "3yLHeQsv8ZR617cFT5ArZ1RCqnQLKDJwmYGmnQeegKkTcmgyG2Z3VkkCxvfPUSNoDE1tmA5kdp3YjXENX1NLBD4M",
  "key7": "uTYLJtZSEKd2FTeYWPYkyTc4cwd4kKpTv82s494SdQTYsDWuVpAzCMdNNzeL8RTcWLSZ7JaTFMoxRcme1awReat",
  "key8": "3i3GQ1bSaF6ewyBGwYkz9ZU5JvLmWgdS8aKZhCvZK9EzrFQ7jwKiFW8kJNGWvnoiXe4AZAG3TrAocQ4Zpz26YcxA",
  "key9": "5GuRPmTCkaVVow6EYguxcoqfga6Lr8uV7jwpXNt38Q6fSHzqUpLU5zHvnY9UPQA8jWJad9LWtqjWzH2hsoJnACrt",
  "key10": "3cjS3mePBu9P2VRAQyWvbjwozrVbvjoqvSKKtLfKLW9mmiAoYmvHZUso2VedqAwjy5gzFSEyHJik5wUvLLMi7Uay",
  "key11": "5obkiBcPBrChgJo6viDj2xEoZjM1P1bzrvXRSUoihy4Jqv5VtWooi6suP6U7MUMzEHGa9aKrVVjfFLtSJ55yEwkX",
  "key12": "4kpxQ6NdFn91HkN6maECW4kzczj8TaR2ZaEUAdQt2eHMfxm3CWuUbM7GYuuCPh7QckvArkMSAKFzD3f1HgWRXHRW",
  "key13": "3zxVsbw4UcqpD7fSS69t53Jd8g2SgFLt4sF21Fzg2dcSUrN9KrBrGEgwzLtja72Sjb1sHuK5vNaenrTyjYTrjC89",
  "key14": "fvtP4WyNBPjvENFsaxGQ797V7Masro5Z1AiTyQtEVPh41AyxTHMMoiSjbncb5CFjdVwnNnL8hs2L9NERtddHuuD",
  "key15": "aGASMZVWmBdFiNzeNoArPakWw3Qjx28NcrzKvfV2FKfspdn8pKgU3hiAipCbMD8ZG1AjMERFBqN2tQ51HCuK7ep",
  "key16": "4zeUxjWvQ621s5SNgkn2Ur1fRJ54E2TjETJ1fKBjJ3xsZ6xqfvrVJxkpFUwSSv3LbazVVfoHkbHexKvP6NttjCDh",
  "key17": "5TonPqgcUs7RcDPdTj4ovVNjDBm1L3NQk9MPu5VJ22yU5opruC9hqaFYZo3HRzbJxfzkhBBUY8NcngB1rT9zU2T5",
  "key18": "2MMHZCTpx9HjhnyfSAkMnSBS2BTiKne7uf1qvbgRoyApRuv2AXvWMbmZvaMjpgoDo7XnK3s5AAoPJWAiGypchpdw",
  "key19": "vMDF8k94gujvWC4TTwt7Kbc6894aD161zGS3SPEFL2eMvpL8TwengYpdbRMx9DwcK4YgdHPzXYLvG34tUifFwfW",
  "key20": "31gBFPvPGdYZ4cST4sPEhWUX1Hxf2omC7gsq1ecU4eCg1V1F4vRv341yLHXiiVUp1Ffg9UaL53r2VTJjxtf42Fyo",
  "key21": "RBKhnyCrkEyUEqEk9MGo3Fjw9E5VRieMZwuhnbb6AEzCo7CiSiYf9Redrj42ztt64tWq5JdAPbxZpxdF9VWwpNX",
  "key22": "2iU3rrfeXQg19KMtbc4FEWuxTyLCpGd6F5w2rnDTaS2D8Rp8FAXHmYd2SnpAGigZYtPv11njMnXUyMzfjCST51Ry",
  "key23": "27pMvvvQMDt5auh8GEg5dcRoZQspe5rSpU7CJtHxUYh5JVCsUrjNAB3vJSW5A1dkvZ8qcowAfDioztJTftaXuzTL",
  "key24": "4xmTwjfhHKpuNns5LMbV2LLTCHp1ZqsSfspqbsLB1mSRQJeFKeS2LtFqhC7U8MrvBP6XznYnx4xMmy3b5JZJChxK",
  "key25": "BpEr34TZuVQZb78K8C4ciKNYogjepScCK69VZmTwgmDtJVvu6VpiLNnnpMpgiZ62Rndk2Baj5psGPjjFw5rF3Ey"
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
