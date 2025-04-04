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
    "tyuy8PD18UiQLQWkZqbzF8vW5bBGHB37cF2uHCMJEyEya9P2Zi8a5gPZZmhaPWknuuc7cqNFqRT84rzaaZBE7L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mE7Gni8gXhivgSM8jpsCG9A8S3fTwz9Nh6RQ5xx1GufuYQc1XLBpL94facif7iR9aGQG3vSh12uqYo56UUtgA7",
  "key1": "4YndzFunpyWyZaPuBeY31oudBrqXfTTaS392oMqCMkGAAnQ9AA9dF49ebtaQF2xZpZtXpK9aFhwxaz4i2zz2Woz9",
  "key2": "EWgLNL4yR7ixvJ1Z2ckPcrrcC8LuR9FexSr4Vv53R2UZekFuJ8PpYTERAeVKFWFnveVKkWAKKEfF3VkSF2Cq8KD",
  "key3": "4aywp23wXJwTGMHbwQtrxLnijnN8tZWsuhPjzoySUbcCcDSvCnqxkvUFiGN3xpa5d4XSs1vKkr6drxZZWuqB3Veo",
  "key4": "2VJ9DVpoRxJk4v92qLGGDZKuQJZ6sRW8oaFCgmFvyDsm4kNz7cPz4zX7Nv1drpHpnssnp8KyFnFjTaE3qGiRHK21",
  "key5": "47pTzD9ABn8YzUcNnvPe613D2Z2jHZMt79jLQGcVffYqQotnKKuEej7GHjYvxmaJP7rCt9vEcDd1jc7SSjRXwATg",
  "key6": "sDCbEm4xCExW8fucRpbXkX3ZuSBZCGwca14WtYjDirdc7m2TYqMbgKT7rn4zu6KnAbvHYRAKu7peCSs57oVeReD",
  "key7": "P8u9tT69E2hF3mokQBjgeBJmGhXHXSUuAVs8pKp1cSwmakKCQrwppJrWGLNvYrkXWeMjxoPZAnvWNmakrtDs5mc",
  "key8": "4Q8jiqaPpZJzGAXDYDqTEnzBU8KB2HgoygjSUaQ5tnBsLRF24rrJ1TinBganXLDq629QGYjdWKQ8doUmpGiVrCz3",
  "key9": "eJsHHQd8eeFkz5QYETgyZtYyLRgmzEdSXBUkd9yA9cvtLxGbkykyW8sRJbcexEh5gGaCm4E8XE2h8HmpdzmPffd",
  "key10": "5HuTwdBDey3cWyt2TGrxbczNhFkNSaYVfK1RcQNKmuVbFHaBpLq79jNXGtsU5TmrVhdaUVhQym3UQ3Dt1kwoZPx",
  "key11": "3uxu8o6iX9gRLJPd8pMkht5jhTiLRBbi8FtCeu4Euf3swkbQ7UsN7tv69eY1Kk9ougXKMtmXsW7p8WRoYc2LSeyn",
  "key12": "2zVtn9SpUyrPQ97mCj9MsSC7r1bww38aFfhy7KVHQ7PtQFcxgFib2fvsLjdAViAVibsQn3i8MUNZiyuDHDd7zN6S",
  "key13": "4itE63e33ckAUXjXiNzWNomqqTS1MrFGZhQSyQREtCW9Tqehv3aaARiLK8dKWx7EXBkrTNPhkm3U7cGxYaCVFTM9",
  "key14": "26tGoq6dZ5JBDVwi1GdyJ9VitGui9Yi1eKjBPLVzdCBdCsx3KheZuVkHqshqhgVcuegqG9LZqXSZdJzZsrPeZHe2",
  "key15": "5d2KaFeiW4Wha4NcZJVmdQnBKeoeFvpNJf5EqQd3JYLEZJatJHLh4VqmGL16NRYZJFxkDEXpX2Dxwe8vEhcjEjGb",
  "key16": "c3pD8p5gWUiJ9vMGAqPFPxW4Yf9Mqr3VMzbCMugg6sUAaqfriAD3tFd1m2WVzM4qJj3XansKPaddakcnQcNZETL",
  "key17": "KSWVwv9GRzcFxNq58risdWPLygzYnZ1BxuBy1Xg4TYdSmhrMBEyiMeoNQn3NU61dPZikxTJsKmzCMe4GsNsyvYw",
  "key18": "4bG2rgdSkm5ugvA68W8YGcoWBb99gX95PrfXFw9wqnsLefQQq9UYLDggEc4Qgeu69Lwxe9DfgFQUVmzTDwnZ9cvN",
  "key19": "5XV24c76gfQXZms8kmpPr78EyZtxmNQYKD9hwXryFHcqP8erAvqZarYsm7tTssSNA2N4kSGfj7GL7mTERQkmE4Pc",
  "key20": "5Z8XsYJJmTiQ9Y8j4JpdHSWCr6JX5WZSNnMhVUo93U12qLTmETqG7132QttwLGCQHu6vuAFhRhJ7yTPFxEtuKdw",
  "key21": "2D8PS8b5GMuqjGbfgjgRfSUR9hfB3Ggyik11fTniEe8SsTkdtb64wPCQx5E8cdfxFnsQXR2xbhfLhgfRtt8dcBsj",
  "key22": "K5MjtbFM7fRZXtKXLHVyC2JeQ7mW1uTjYZANdfrYpvw1Vsa7UtFt345SegEridJKcQJGWdpjD7U8o6nh9LUVgt3",
  "key23": "29yWyKGNKkDQPtgNhRvyfv7MUq8kgudGWJw2fEuLGyqTxEVRjxjugxbMq9LbcrMiY14hYsxhdxJDNrayKmEEwK2H",
  "key24": "3x6qVahLV8Ez2qS9mWnovFc7K3tj6eJJvxGyFpgjxYaPg5AgkVACz5yCH24q79jnDcnxLoN87JebvPKpoFBdbrgS",
  "key25": "2KaX9HtPKagoLoY4Q3MM4vLhBYrgY6sDxCv1Q7pmURusYbcUf1XG5WexdY31PpMGJtG4xroY4uHxrnHHSHdWPTuE",
  "key26": "4TXf2CCw9f5THtqh3n59GnDTqum2qvCt93cBTeRmHUtAt9gCY6iGgvDB4KKUjescFyWYwTPKxJ95pkW4tbpLh8Bo",
  "key27": "2QXNE18LDmsMcuhcbUCU3nt4nXU4gvJgnoP1eg11Em9T5hGyjzdgt1YFSZcGNErqMmL2B7EmtqS1wWq12ELvNBxg"
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
