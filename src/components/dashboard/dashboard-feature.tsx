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
    "5YqS2A2oAZMAahJqdTnSsgV41UMPwYygWZAiX2qeTZnXHh4KydqwqjhudqYD3Dndq33rz1reHjxp6rbiyUviKjRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LADJbxp8izj4rQwfGuxNiwUyLjcukGDAaU4pMYopmRd7XUAHekn5sdW16Bdwwd642vn63FwdqEQDkKM18AB89cs",
  "key1": "5UzASGeQeNtTELY2fT2PyV69c8Uv3RYd2QsJDJc8f9UFzwUXrqUW3Lo4EB8eAt2ZcicMn8shnYPiUsHcHbLmG3vt",
  "key2": "3PNM3RqzmqdyVimDz5Mhcdn7fgMt3tG15X55YVvMXrtyVSQo8z4bDWRnPEDwpLFyGt4kCPkCYzpv494F2xnkrzFv",
  "key3": "aPKv3ahkCr1wDLcrx9AmBjxwsvq35VCxKviWNB2Y9vd9Pe9UTqU5edDKUo1SznV6Vj36Upya7KnX2z226RwTxaD",
  "key4": "66bt3ZhsuoQHfScP37yjnDnLTTzCwvPLgDcgMvcdr6zAjoGe5no7sLPpFiFH1qRusaidcBRVc3GHedEHgo9NzG6t",
  "key5": "2qRnUf1nwpys42i4EufQARcNnH6QmtFB5HeCGVVN3E5zisCH3oJ4MJWnbDDXmzryh11drjB6MzDCqQdqPCpBTH7X",
  "key6": "2AEEqc5zLrx8tgsdZrFVLe6W3Lf2zC4F7CbbxvjrsWsWaFQCHgNndT2DiwPqgXvAYN7jKQYD5aSLyup6NGrVqfVb",
  "key7": "EgtFpU4Fic8GrhBGtxGNJ9heUDgDfWNNtTBb8sgKXa9n5W6kCtsFZcxt6RP326j3aHn4qt3rBtM2Gf9Cu7b4Hgc",
  "key8": "2oHzMAUDSiq3xX8g8YdW8frM7AjjTmdR2yUY5R73NpsCmC9zWStvyzZ8wEMymMnHn1HNqMu4b7mSbK43xRNYeC6G",
  "key9": "2sy1cLJizFfo6yRrg9wEt6W8GSvXmDeWSaN3NS9QbNtc4hDML9VKqukMPdawdPnTsNJATKZ8f6zEeoVJqqoJTZPe",
  "key10": "5iYJgMvGG3ESAFk87BVYfq5gGkMz9bJGQnT6DjCd4PDwhfJJXMdWgdt4pnm2ge711NufrckA9Q5dcFVLkvPwGnJ3",
  "key11": "5ikbPPqiCUfWymsH565dhZ8a1rCHrSPod7Lu9Lvy6VmAgxHmmirYPthxHCcpkarCQbThwcEFuo7wSCRRK28DDFFB",
  "key12": "ECeMTwv8CYkCw5LWGzxpFpVb4Rmbi6AK13FqomebjuF1Dvmcsa7AedxPH5AXKk2L6iLCTFMfrkw3zbCbEUZaMp8",
  "key13": "2XcjWR1XYJnHhzPka2Qy1avjzR9ZfZfAz8a3WauNiMyevXM54HPnmCAWdfAtqgTfqdqDcEz3BDxCTXStTC4VFYGp",
  "key14": "2c2WsTvTfMx5T1p28EmRQj4JjKFEwuAnBYbTutVSBRqGMEtandyWMpUkWCRFrx3guteP3WBXukrM489s8DRzvqim",
  "key15": "49jkoD4dGjWmWenBfTshyPBXHbQ5AEPbx53qHXmET7G6EWJ5De8RUukFvpY1uTKfdkgd2Vjfi5CEiXMUvB5j5nFS",
  "key16": "38rDzXdCJ6PUXvaBwHZjupzD49Te9287NNDHTEN2xuQcgrmGzEVK4itBSReCXN1qGurRbPNcmYxQYKTGEitBneGd",
  "key17": "5WcZ8FtLur3gqnAzBqMTkc86EwYRrpB58eovAGKKWewY6PETVjfqvWagxxDQCMnXuNuueTTUfNP9K57BmsUcmZXH",
  "key18": "2VmFrXCdGvGddeqTPkx6MsLtF11RQzbedN2irsMYTaEEmWhV1n26ybh8DrX1CykvBLSU3VCVEwQFJEFk5BKftWnr",
  "key19": "2q8mDWjXQER4y5e9BqnZk5mmES9kmu6LP8Zer59QQhqC2mkeFMHAgK6PfZiARzgyibov1oP456GSmcGSeohdWebZ",
  "key20": "3B38eZFKBwJTWhS6kWu41e5ZqTVxvcnY4F8rDiR5jSDnstdNc7NPBT3e5NrzPgVdhRyxH8YaRgJwSBpJwC8UpKB6",
  "key21": "3dxmXCnHWfrtMMi1RjH2ko4yq2E9BXgUccHMe8bLMv6DXomM7HseVgW5G3BfbSfgvESmi9xjiXp5VREPTdFeRDcU",
  "key22": "33khEYN7GkHJy3kppoyNRW7RDPB5x2JdWDnTiCDm36Py5a4rbq9orP7dgurL8699zPyuCS3EieBcfftbQErVUHj5",
  "key23": "2SACzXN3GZXBAdCZfihvRE4isyZGNvN7T9HgLRWwwBaLSUs1WUnwURkGo8nbQY3YK6bC6AWMzqmpyvU4CPLjXMZt",
  "key24": "4H9PYQTKH5BodWNfty76SxE5QsrmMfK6FS1NoZzJqkHZHirP4cMKqtmt75zamm1yKTNYNfUi6xfaXKcEpot1a5wN",
  "key25": "4dNFmp9ZTTqGaDFyQh5yuzHaFSHijp61kKy11JoAnqQgup4d535BPkkjSBXsip65pHGuhtEEiv8XVxyzYz7zRFw8",
  "key26": "3jXQQYxRiKpLfFFw2UQbcpa6zVM34fgZ2wdjFfDsXjYsjrKkEFtD9kPb1TsBEs1UXqcWxKxrkvZaS6SWkJDHx4k6",
  "key27": "3R2sUEk9rzCFn6EUvXVyTF4NDfmirDMBveuUjxiBErn2ckTmqabHki1vSDQaPm38PLwQ3vvzAB7FNtF7fkoHuFyi",
  "key28": "4XQJKdFXqwtf5Pn6DP8Ndf3uBJmuaM1qpq3XNxDi9YqFnGYbYzoo3dfARxrAnJeMkM3AakxdphVmzvJgmdGFWNRX"
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
