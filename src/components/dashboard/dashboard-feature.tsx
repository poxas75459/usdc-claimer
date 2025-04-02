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
    "3X9fRgy4YwQEt75MEHw2qEkwwLmDt3VdK18Ac7YTp2PaB5jveyj7wZBzSbS1y9aZt1CPyCpyUmCpKW2k1mVj6cXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FSknyx8DkLsU7xU6kipPudjXcn6TF3TcUjVrCoc6mBMe3rxXfVMzwyc9FMjE91y1W8bsETw2Wf5o4UdsVMwApon",
  "key1": "2rPw2mfRFuhkGxMNi1p7zig9ur1zKNyP7XamZqdvBQhkSGqSRiuc8wgBYhjoBcHR5QpJYQDTvANE88jqqHEz475G",
  "key2": "qXVpH6XFpRT7QB2RPJBMM8TxTEwKFgxzaoJcA2J1CGR4mfA1gdbDSELmJbCjJEVBnvZR4jXHoFpXfuJ8EUex67y",
  "key3": "38Uw42pAgTRouZp9BUYCNov3iwiVchUJSUgrUpMJE2SBGpa3JRt5gMNftBEACTQoq7PRuFbxVtXcCnWEQJGeGVkk",
  "key4": "3G2BMfBJzLv4z3HvcKTH3SEuwJguvcuAE152rehw8skh5L46qFgT41roNhhMUmFFrMNMM1Lf94MGq2DnxvphVJRd",
  "key5": "3jcttAV8XxGegwDFhfwVUnGXM8X77CytUv3TQSyDARUSr2M7PjbJtvr1SZ15GmeKiQm9WGMnrJeDsLdEtcbcwAis",
  "key6": "UZC8xXLbCMR3wYf8GfhTfP64zPTrcK2FZa6Yibhq9P6RSmXG1qQ6vH5iZdPsWyKHLKott3Eu8j8kLt7ZoMSSDJd",
  "key7": "5n7Kg3DVt7DCQD8eeHTTU44M4kXuJRcEocyyq5uqm9USzuY2pgFSEZKN7tRzcA9A79tZeD1bifAmTwqMyYVrvU8m",
  "key8": "44rYSeFyFKj74HJ5eb5NrNidueuAt6KsmrT5V9zyNpdQccg2Rhix7g8XQ3qgyUqiukJ4fEJYBQneyhHsNfsqQ5wy",
  "key9": "2xMe7C11p7DZFz9gWYFx5rQBNDxWJXycaP4VdBZtUqPtdeAHxSQn4TLSCXqmujej8SNZgEswCz3YG2jWrziAMnxV",
  "key10": "2u59tpYTXznq3i22pq9C6FKkwwEMQcXytDzLecqX3S7UqRa4crcF2oMETYu8REzW1KBpKgAsQ5a8LpjZoVr8akpv",
  "key11": "5pYecvezUKbkkqZSvfQzeZarTTf9zA4VC6s8SEYb6oskagv3dhvbxYv3Xmen7i8pt7deKagc3cPgEiKdACMS81bK",
  "key12": "39ceGZ583jhcG3Gz9KBv1UEkYiMbEaRGNYcToinRtmsRrJnjxCiMPnHGXM32DVRZM4W4LzaA2KPNy8R9QgYijN6G",
  "key13": "5p2Jx7E97Z5WDDrMRGb9t2tFMMdX8miwTCBUaw3knaPm7LBN6gY1XsqpA8rcdUyf7NSAeXwa6aAowhvDrsXzHffj",
  "key14": "4HNk2SpB8SU3UGX41dyNj7qpn21CtnCyZv4ArdyxZifZ3aQ1SSdRrzRvRntQkBT8HYhuNhfdCkjpw2GRKx937TEN",
  "key15": "4V6Mc6ozcGwiShZeL5J31vBQXuSFYrNquKxDTc8x9bqVCSFsryDyT3JGgrLpfvN6tMNVXoXHghtfvciyWPFLFj8J",
  "key16": "3kE1yKprQH4WPPihLp4KGkvDwo84TtTFBxbkt32soPJtnTkueTKFb1GdEwWdXJKPrRi2YUjtnHHkeSvq6KXVoHCF",
  "key17": "5ngx6T2U97MBi6quhdBot5CRLegnYUN7vGCg6GUSo4Ej9atAimZeTkmcFAUXdwjsefWqRH2E172RwZMnmfeijCiq",
  "key18": "cFPf7UJ64fjV2cohrR5TAz6iqF3MiFum8MK3P8UK2HAA6uhYbaTkM3QSm8TFHKPQFbLFP2sVFzEQFS4nKZy9n6N",
  "key19": "i74JQVABb9LqE1NLddXdwyNnrxHqdYwekeDLD1QcSyEEUsePTRqhrd9FNTa8QGh3KqM4wNkEonX1YFGzp6xV86C",
  "key20": "2cAXxBw9qoHVQADzK6uYgavx7UXfuySYxSWEeUDcvf1HwH69kQvJkG1rXT92T6bUtwMCdMwdaxYDqN2VjeKsZxZS",
  "key21": "2NxMKSdvVqMR2oJ9JQsAhU9kxhz25tbw5tdPMC6cfassythmsDwb9MVXCgSK9uCMKQBAJCsR8ggouhkA9Xmi9qMF",
  "key22": "4QDE7ftLvtH1rb4S4ua6Ts36cA9tuvWpYNxxUoFtoDf4dS1wgWfSrY1y9N4HeKXGeQ85sdS7uqNaQ9CrALNs4Pex",
  "key23": "3GV87A4vPMs5EL4DDN8gcYuWV1MVtLDZcJcfd15v9gnhJpmq7VqBDfiLLeMK39N4qNuDEqKFZLWTtUB73caRm8Nu",
  "key24": "3A9xJpoUTv6NXkrR3McDu4va4cmeqXmuN6sqg7mAiQuEDFDRjjddCNiNXSJLoT7kB31EDorYFRNvejjKPQR7qY8t",
  "key25": "4ZUhXRCGeonrmvDkh4XkrheUE9zHRnBftBACFQEeezGGfN7hbzWTRXP5ZN1C6idM8QmXkYLdPPfrHxSbbDiJWHUG",
  "key26": "5vgafRJMGxkdFt4ixZGT7RXgRYGnccBge3xXHhwPxCsb5gDSGURMxiKbELUsY6m69k9nbes2xiqoN4Se6ZyFk4Gp",
  "key27": "5U9LQKcEgzFyuPjK3w3WieT8DL4ee9psoWg7jYmK27GBMey4x24Rv8o8u51EhNXaEEwHDFHh1V11tortySPuBnBn",
  "key28": "2GsBejty4Fmvp2LJep7pEpEAVJhGWhYHa76RjGgzo2GkSNNEif7f4aqCCqVtk1KPm7VTukVTnMSpK2EByWE9QHNH",
  "key29": "5yagikDUuz1JQjg61WrABK7iVnPUQpCoaJquaGLxi8ky6QKPWgCgFuUnK5dXvutdyTotEBsiDzoB5EsqE31NARH2",
  "key30": "9SKQKvTBJmYxmB3wVXmks4WFeSSWVhu6Zp1R7rfUb5TwkFJXUgVxgJbtdausn1ds3CcocbdkhGS2rRkxiEiwpSJ",
  "key31": "4WYpRdXkVgwheFe2tYZC3zAY1TCRC6Nf4vLG2L6H844faLwZ5dZg7dPL55NBih6DXvykHwoN319iUDdwzejy1nJg",
  "key32": "5DiEk82sPQavfyw4duqq8w6pEcNfVFqsMGu4rEiWP4VUsKLjbZmYuzzXC6RCBFvsMHW6g6dhB1CKY9zXTGnRcQWM",
  "key33": "3xCVrtKR3Ra6hefx2qaJqFDUxXA8xbjJYf5XTfvCpSUZsuJ7pPYdNgEhRXtx2NY1iTLbvk3B85iWaHuo991B2Y9p"
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
