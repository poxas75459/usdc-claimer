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
    "3qbGJsES5N6qGVXZ6mJD5YC621WrDxeSwCJsG29cGvtUdomWBCs7jpQrnSERu2SRwkiRyKqpA4KMt7pGXJ91qGCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T68ZG4k8JEEWtr4Q8DGc5PuHTZ9ft1qhRZMF1JG4tPidZDbw5VpQsHcMMQUBrmMUczPPxBj8tvhzr8twJS3CdTo",
  "key1": "5f9Es9uUakit2MP3JpnsdCbztg5KU3ARZ3ZUSvrx1NQZm9MuQ4r7kxCKXdNLNME6GT4sjjrWHdyQD3oG2VmqnZXq",
  "key2": "5JZ4YzTtNBh4g2VvwEVi44vbi4GGSPDGiGoeMtQP54Xn83VHHQtzpVA732HQoXxXgkQ7ATZX2XUqhruXkxoGLqwS",
  "key3": "3YADZ2UfivKiLufeByWD7Ye2eJakU5DXfj8LSxPeJAxSB3Vaciz9H8QJQnLWAtgmnZ6Si9ErxTPFiynjAq3TgMew",
  "key4": "R5g99GMQE3k24VkxykYy2NEHDeLZ642xaUcbDEAaq3z92ihqvoJpMcSySEQWYuA8u29fhpXf2SypSEUZNMiyshw",
  "key5": "5Cy45RgyBuzqtocQcoBweF5TVMs3CYpcdi1qDuiRAS13MbzL4B1TtCVGMMBRCYpwBWE2DkP6MiLqWCoe8swFoA2n",
  "key6": "4GHQ5UpvnkUzURJmzjVBjjhg7ahWyPxB6vStMRg73gfqhtU9xLRtZTdsvkKbm3KBnLhDNHstLD6TUe5qvM6AG3tB",
  "key7": "TyCyhSmYE8511hET9ztpu6nwFE7pWVsMEFcpAaPbBtxEMfLLbu2NGePdXzodNyEYvND5F8WEwtDoQpaJqZu3LRU",
  "key8": "2TR3BE4Ms9TZoT8T4RsNirZ7NTy4M4eZAzoCaEAkZnj2cQCo2amBnfjFtvwd6yLCHC7coi6dX9ktRDX9aBjuxo4X",
  "key9": "DrGD2Cgieg8jGNboVTcVxLFSMAdmVuo2BdQz39Fk4rp5c6kAzqjDPpVhMPPUmkPPqbfTw9WWRmtqAAQgYhBJiMq",
  "key10": "kGRVoYMiibvjSw1azPHCqPvY7HAU3r5RuHB9qobpUQGtxkmxyXXTh9iNPY55f7k5xqHP1BUh3Q4bGULD4d86fqW",
  "key11": "3TSedvfYYiEz9NkP9YoMtLXcb88X6mdob9HjKEijV92VPbqjG99et3HKUyXEUyN7D3za6E8dGM4dzdCQgB3UJxeb",
  "key12": "7bXMF3nhmh8CYtLEhu6B5BrcJ8dzP6jw72ZC9xKqot1tsBsNE54sB58G5XpmFkmZZNmpRffaNZssEV1vWvD2g8J",
  "key13": "21yYrwiS5xubp8uHZjFPS3bVbkVU4dAhqqYtVUnTMHjudHrXRyAjK9HgjKUkaVJm16YnXzzyV9AfyUBZk7cggRC2",
  "key14": "2j2p86fqvZSRT92kmRhXd1sVLPq281SWmGgwM887YYafkR27HbqGime9C8ANzvr6ndafHpAPdocEzo6GDa51BiQx",
  "key15": "2VYroD8yjEqQniuPe1bZB9qUtGfcEZcnDwwFqH5BX96r6hSfPpprHbpwWr2jMREvUauVsozwUvFEB7Qw5xJKtHoc",
  "key16": "nF5vPjz7yGCJBY1LKym7K5Hqn7SqhjVXkU7NYfsHw4Rjxx56LqUCf1FYnszRxu7wh4jN7iedn9S4SF3MRPtneEP",
  "key17": "2qMLFfCjfPH78LBA7eHBJULCGhG4txYwq2iArXvJLp9dQmXAVjZRwUfhBpkKJ9k4mzHQkvXwoAuG79JB72RcfCTd",
  "key18": "3rKsWWi3EpCnTwNFepXyvx5fEeDF5QVa9CgNoiX97HKMny9mPvvCjSXegDZs3qdRjz68uUU8Kw2swAFDTdxbpxyA",
  "key19": "2TSG3ar4yHuinJWgcdvLQ84bdApWa5QJ5JF1PYP4WWjAAGn7cQ1g9zHY8MiQTA2Gceb62CAWkgyiG4mRZyCGunoh",
  "key20": "51XPQom6kb9fijDdf3T7rWE4KDrCj8zYTVFPfVYZdA7xvYh6kF311A8oaXuhTxz9BgsyLTr18PFmsvhmoMsNbD7t",
  "key21": "5P1YsqcnSZwLmf25wRuTrSGvni52eXjuhtwUeJVkNABF6QV9DXLE6ikKNMyCjYgwpUqtNrndonixVdzh9LRP3sMc",
  "key22": "ZLhhDsxK44TsZuKeDttewVRRmH6n3foEDSxre3Zvwh1XVWnezqxR4KtNYcifSjZ38y6Hp7arwZPhYvhADcYN49W",
  "key23": "3ocWpKWYCik2WWN9ywAN9mvJFKCz4Yiy2fB1PBXcFvpJjgxv1MNREH1UQsfYLK3MDoprFRAEtwUHZGzfBWRQ8ZRr",
  "key24": "KLa6xGPosx8HyzfZT8oJEWs5dS3afAYWkXzLuEEJ9mhqKRAqojdzyXjXdH3MLTBeDD4P3pvDGctxqmbELcWJj7w",
  "key25": "4T1K5bFJVup4tSUdJ6NQ2agiYmTpHR6yNiEGzzui5cPubyweSrKCQcb1Q6Sq31dRccBHxz8WWQbCbTsVobWSsQhm",
  "key26": "3y6zhgcF3DWS1jk2JvSaGwkSnMijJ4UMBLsQjhvnJjLEjszQ4PaCUQ4cJPL4ofNguN2FL1BbkrfPe6X7H1q2BkEF",
  "key27": "M1dsQK9rMvt2geVK8UbDnodLmptWpaMpQjp3Vc5cUM3TciYZvtS7tCdyxiwuQeDz18FTYT3D32ztcEpsY7P3TjJ",
  "key28": "5tFh5XzMK5yYrCXJFcbLPNK15iQ1aakDm9sPr1PZ1c8ZLt63MAkShvgDUFdapfvqFFtKcyMF6epX1by5mFzvajee",
  "key29": "3jUqzKCFPCtgp87CCHig2ECpSzeKYwpa8MLgTHUtTZVyvPc8Uh4v9UCeWdHCxsN6rLhvodPXkiRKVAQxCWuM85Dx",
  "key30": "2z15pvhU4STgtCRUqUrvSj6wggR8ZXqnpXoz61MLwceSBb13G1UqUk9UVznnCK92FixiZHWih84ZRUDGQcKcz4mm"
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
