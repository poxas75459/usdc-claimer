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
    "yu82epuyj9R4ZKagdNmzLnXZbuhCG58PgeKrY4s3JSn4PXpY2Sc7dR7vaod8T9B66bnE6ncYE1oKssPh65FiKLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scfBDFXVm8YmayMvz6DGJZmJW71vVMAjcNFhC6jMmr3FXBsFBq4xPEi3uWfxWsUJnGAe47UCTva2PDTYqMjXksZ",
  "key1": "6CNa2jAuqakD8D3d1E7M3PRjt9Wz67qZgQixFA9cczgJpuipTa94UZXFaNfYQmyrYukTEd3Atwi3Kqt3gzkA3i3",
  "key2": "61PNigYJHXTTLtfVdmdteQBhes6daEWC87ESSUq8pqGama3A4UgYNzsh5NUuH3TFpKJeUuPgRRKWNeftJWNumxdR",
  "key3": "3EqMfHCtHLdUAT5SnD4uEgZjBvHbgTH2xe7gy2Pn6dmuo2EMo4fpwHGDDd75ccb5NEPy5BM1gZKzWzBpgY9tQ24A",
  "key4": "2HQFSWWLCRQgEWCHdDB5by6oP2h7u1EvJLR6eWN1nLde4n8Apf1gxG2bR41dQps8iZ2ZMMoGoAoseDzGLU2dkWmc",
  "key5": "3sUveGKB7Huviw3kqpuSQtYn6CW54fp3oDdkN5iMbtfbVHNfMp1dkMfNz1Aeey3hq9cAaQWiDPYKPgudzpyuELu5",
  "key6": "AX59u9JanicFdf6TM7jSgBr7XYAhT2Q3dBBFZkcferfCFK5WGGCufZYQ5ApNRPBdRWv6QMkGCJJSCErp39cr15e",
  "key7": "4HfLRshbLLAbSwTpmWgpB4wifmo3mHsVjwCK9xqjzFeQeb2iQJ1WaqabnZMMovFRZFVGfdWXeQ7dH5knvq19Zcmc",
  "key8": "tcdWBXV7CotYjSHLhZPttz4vLwDXxbThxjv5y71MZvr8VAAL2NYvVWKcJt4ZrGR28qDEVM2D9uTS27z52pH7c1P",
  "key9": "4iE9igXhV47VUGKfSvhEB36YxK3FgVjhgeGecdA1GWn2rCWp1pUhicohUzkaxP3b35br6cz2dxbZwnXbhh1zHVQg",
  "key10": "5cLEhasG9odnaJMuLwbxfW9biqjxGJx9VeREc2eYFdMk9W7ku4gJr9QTSGpqYHDgjQrVc9LH9ycmDJHiDRViWaGb",
  "key11": "3wsGorZ9VQMBp87YHfrDhHXDfi4GgG22NihzwmhGinDXb2odV7Ew6hKEvj8w3p5rCSeDpmyfVGTB86ZysTMnhvY6",
  "key12": "kK5jQACg9C68p49eT4jp6bWW3Ba5cFvH9Rk5RgkLJvHK1jCMNyoZjP1gqHhVJSGftKKmose3cgZzniXn857WHFP",
  "key13": "5gLHjXrUvAvLdDcS8TH7PMbP8zQv4UCadJJtkDeXjezu4N7Bxb3x7mkSDE4ELZXbcqgem619riiA5cpy3WTyWay",
  "key14": "3vvcmztescLjojwNzYHFAwkqmbjgdWrm17fCiBHpp2da1XzfxFq2YVXsrvi8TZDPqTNpjzR3kJsrGejS7GpjwbdF",
  "key15": "38qf971NZVFhJwQn24mqJ7JikSRsbFH7mMzoy3VPHjJwdvk9hH1NEiEsnGvr93QgZwC8JUehLtaFXzBgKrJtdZaY",
  "key16": "3VYE4VdG9iQhfKWGvjm8hvAcZR6E99Eqoiej35NjjP4QsPvXjqyBuukHi9sVcRUR6A1BpwMYKfnLsVbV72BzSdY5",
  "key17": "62WrS8fnjH5UQ7eN8hb3ovTQ4LyQ1WP7BUKUcyRfuKWzV5nnfb3NpxPoxKxPYGVvZ644qmV7EJJqjS5hCsvzkPU8",
  "key18": "4wKG3itME9z3MGsR74uBTEmjbMDha3n1MW6eJ2SFsZv9ukQ9BcNYUHM1AwHPMURHThn3zyYUcLstHoBz48UbMsLB",
  "key19": "591eHH3qip2yqRvaWaD4y7xpcmcbxdDwyqPP5Arc9fYAumkoYeaM8KUr7iauoYhDBiLwSVY93V9H4FtFNTjQ2yjz",
  "key20": "3Pqm768mxjkU21iFm5rsK4cztNALrzFUoJ6SU6LMjUjSpF5SNgCyBrpfhvn8nLmF8TsJMPJtzfU1MRvkai1Zj7k5",
  "key21": "3rUEhPFNc6aQ6XwY5DKyjKaERx4KjpsYeYRJQsGwXSpKenGMaWYJGntXGHso2HCjzTh6RFWeooAAMbts3ibMk4qH",
  "key22": "3CnQVjuUWuT3UMUJnyswDE3BxoeshAeG2tyFdfDfp85KuBnnUJkMBYZ6wUUhf4ZSxrUMSxYW35R65bQDurpU9U55",
  "key23": "5zCmtgy47eETJq86qRnibYdKCx1yrU4e1vBciNk7uPLFCsmxa6eXQ4wQYXeji1gq27ya8nM6oqGL4seTw2SmiYMt",
  "key24": "3kEtd7snSu7ySSU224opnSYp2u2LGZs3b9mWzZcoA7VMsoiUb5y2JTFQQuEg2JbstCX2gv5kNaMT1c1c1TgyjRqm",
  "key25": "4hiSzYVud9eH193uTSh8UGQNNegpMGdih6LMv6ihXLA3tKFedXzZkkXS7thYvLywQh1Cv2qRFe8bP1HeL93hBmBC",
  "key26": "5VhaMVgy7t2twrFxUiMqp5cyoYZd8TzpKeGc3WcSiLh9bQV8V8QeRe5dNJGNikVsmMJkBJMJQMqj96aAtFaa8YUn",
  "key27": "4GQFSTNdzpq23xjHXzVqtjm1PKM3NkQFNYNYWuPJWbRzaJaLH8vVYNPKw7h3bs8oNQWbmxrx1DZw4NbtbfZ97nH3",
  "key28": "4WbNd2FG3TVfmvHyCEvDnZCtyn2Xu8QF4hBcS8wdiKKMmGXZy1TdMkLSnTZGToEPMSxXMZCZAFE715vnfiZK48ne"
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
