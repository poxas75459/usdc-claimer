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
    "3scNZpaMUY439JbpdrRze5jpbpp56orGixkEkcppDUj4omqakR95ZyDC3mnjagavJzXb5c3zmqFuYQ4jxYPubwnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ePzhgcD6Gkagpf8yyvezt9MqwCrZWovLodNozZozCym8tJA1dVmevuCornHmjYK86waiYbzZ2aQwSAYiCkeTSH4",
  "key1": "2pQp8Pr3v45Ahih3wNvQ38gJDZsfvbbSLN3YF5H362Pz4qhi4LrESVcE2qLBSUyDg8X7ihebF3NQ8ECoK5qAaAEZ",
  "key2": "3qeUm3gHyWgj7FZcE8yfsWPaw5aa7Eq7qdyFTxZnGttBTSGHkzrh11pSBAzMk8Y2Yk3aokSAbKwb1QtHh3VsLv8T",
  "key3": "4TquJtthiNvRmmGYnR8gfuRNoJBcgVFGXtsFfNDFo7NiaL1zNmfnrMbetVYWV5ZLnA7ivYa2jSzf45F5i13fB3WZ",
  "key4": "5ZzDXXkmUdrLPGWrZbmvHirWmQBhF31MrfvEDszumN5wESrBCSNFjq4XdBBeZBUUFHuj43xNKWQcEEd83preT8Sc",
  "key5": "3ESfZFNmRhknXeYwHYRgNF2SNRgTW9aFq6HErrd2Y7gB74jCpc5X7BwDPSqyvhBf1WEqS2bstTEaMpYgLBHRJYu9",
  "key6": "2NcAD9zLsptEfhPXu2TdQpoKsvJKgKYTBaHsZtqLGPy7yQB24U1Yu29r2YDcBWs1jJiFy6YTuCqkG3Y7WnhZschY",
  "key7": "3WvgV5TSkbuncQtDXNcALfXnFtUnJMMgcjtFANNyhAQyDfxk2UR3KBJQWkuwjg5QWnvNUhLRYUL9aBmxKPjj5FtK",
  "key8": "5GfZTeE9jXuryBrgVKasDq9pE653ftsinkvunZLcLopfemZEzokJeSnM7JDCz7geruNFBqWhBw98creiS2ovjiNG",
  "key9": "HgCDUpo8QRCd3keTqkBrBjMWmCNPqdfSRWWRaRqitYGD9JbvmGGaZeuXt9aT4q2o6RvGLNkvbV9Q9NZnw4wFHNV",
  "key10": "2wCUVCjwKeqQqxYsAGPccoxF7UypMXkFQGwgmD7znJUfshiZFTwVZLD3t9ck4qC9FjbBfpWWdWzNHtxdhGvThAAQ",
  "key11": "2oayvVhUHDUm6KStQ8nPRd8LAmjEFxfracnw8p4MhkVeaYhxr3vLqAP7fMYddSLHu85Vc51dwu8vYx3eWLtw4LR2",
  "key12": "3opMYWfFfwV87RaATEgKUgYJ5qhwD6XjJsw2Mff3Mz1mbHZm7UwEAuVd8jC6waURDKZUL3LHs7yewujKiZVgVdvE",
  "key13": "4g7UtBg32rbJxbUp6z9vfyQiSRSWG1gJuqY3oAVpziZF3yRTiKJpuYRMhfYMEVcfoPet4CrFs1RgGpvmiaQZ7cyT",
  "key14": "vinsZLRVmQfA6T3auP154Li1VxYfjfPkpsFDp9QBr8J3PBGWhhukgdrtH6qdjeuYc9eYW3ivrpCDXJVsCnkTkJV",
  "key15": "5P23EhqGAALfQSz7fSC9YhkxiyySgR8DeVcjqJk2o1YfC3xiezeFCyP6quHapt3SVaemhGNsypjevSojn8pVLYit",
  "key16": "5twP1wWuCdngw12ws3h3W4y4SZVdNNM1KmdWBX4az83azagJiMbkjuzjnSEtq6ctHna7S8zyuHg1Ha1RSmay2LKb",
  "key17": "iNuiMUBNTWv8ju3c6WHtCg71cCU3fZ3dyjThuRHKwsKTjmU3dHZ5Z8J6GNJa4xbC6oy8qYoXQiTdWZxnFfSWdss",
  "key18": "2Jr2U9iXk1cRRs3hcLgrPhYAfXtcnNorFYuWTp9SPkpetAHNrSz5jHSfoC7jXorZTPQ8vrkogSkAgqH63toanbmv",
  "key19": "5GA3hj8rYnfkSShHyU6cU9rxGfy5nbxDjhhG2AwNHRJcPK7HBd9zzXkbTEBr6TZ1voBHM3c1pxwFcTLkSzna1UrM",
  "key20": "4NNDEwvPyZQAaA5qXBMiwvFErSsSLrWBQayRduYLNZF3dmnJtBT7kNxrFRXkPoCsoWFoVuWtsxweworox424y8sK",
  "key21": "5nanev9MSRJhTaXta2dvUho73kmBStHKSTDkFuMoL1dVGuaFo8Ge68Mg38j7DoLBinwTY2QEFrufjBmMo861ZKjq",
  "key22": "3dA533Qp7eurxRXWXPbtrXmvsqQ4L2Ve8fbZecys2eBLQmNbc3cNrV6vYLchsfrDeRx1xp42ZPkjMPHdniZ6v95W",
  "key23": "5EU8F2UGhUiQ7TZAUzY16dvCmXjGDWGTdgGvnThXWqKGAhoq9rwcRJo3vxzR6HV2D7LWJ1RZd5CmNrjL7RwZxVa3",
  "key24": "5v4JgC494fmycHJURNLbaRH3oUfDsJAmgbovMAGSmsiYXbbCiKXcZ7PX7zpQTCk7AemETkjFQqfFaf2UsFLYBFJJ",
  "key25": "2WpcieZD9LLenZ6YmnqYwmSiMRu6z1xF2aM3n5eSDtvseiwAdb4jicXmVVSrXNTmNxkQaQBLpJZBk932CSJzyUQg",
  "key26": "4XBy1up6YV3tFoDH9ZzWTMMR3hWkX8FBfiurNRaiD8Y5dYUqYxPzrnaGoBdQVFuJtfbTC1MqhD1BejtzDS8fTaoB",
  "key27": "A67pPsSA7pfDLBZxFXWvhjQWEiP5t5ETq7Hs3fVJrK4Md3NUmt9dgvwmRgKaAPjnuaVk8y21omYktmgbi8QB8jz",
  "key28": "5FX6Ya8SoYCtTJGBN9W5dkswHxYBRLWS7nbLtp1aV8epNcF1E1MKsBCGdv71Pf6BZaJLJ1QF4uxiXmAGJPHpReiC"
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
