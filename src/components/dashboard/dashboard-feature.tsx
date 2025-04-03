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
    "MEKVAfrUqSLKrkKXFSLDbrkTZB5wyTXKqbWzhuokknym7BFA96Ywa5tSHKmgh8Uq1ZTehwV5E2X8hgbGRji3bXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x595g8HuAM5NVBp5aZ6rmihacyTwDBAx5WjMXiy8jzZTnFY8pkaK1d2asBU16JgU4bbr62v48eqR2b6MUAPijh8",
  "key1": "4bAXxMSqSepNGXFQP2AMCisM9hSrpuNjymUzgbNEA9iyKvYLwsFqpKPztUZBqusAKkfczTQWMvZgmFX8ocYjy3V5",
  "key2": "5PvFFNh86nJDakRJLyHoXpRzyhwM3JJVSydEjGj9y8JnwBNdYphz3zsRhnru5PddoZKYsqDQ85LK9VWSuN6trGs4",
  "key3": "5h4ShrwPRXszjTzZb96y6mPQs43eU9PyBtN5yheT6reekMfNsLEYhTFFxrktr699abLfF3oy3avfEH47FWPdBFpT",
  "key4": "3uY7HsqrfF4wQdWiL8p6hX31WTZK8nJRgHDifwNqtL6j1upSXnGVgu8ieRM7ySAWvQLFyG1xBGWx9S23jcFvywht",
  "key5": "2zWS9kXEyLJcQ5mksJ9w6g3hX7TUsHinAkm2KPq4ML5UPwoHD8tUEePh8V2dQNfV3HR9J3fspwJqe4sdudnFHe2X",
  "key6": "4Zho6ZuRHQ9ZYyKeufxAvgJzvHtJooEahYazXKEDuDgcShoxT8PxQn32hv2XCrXGEYgB8dHUKt4Zm5m7UvsK7d57",
  "key7": "q8ebzTC8JP8SHRuk4gc2x6MWKxsVp7LJiDP7XxmEGE432XBfuYSb2PpnhD9QkyKWEBGvD6WSujhkEhfeuquz2Yo",
  "key8": "2m3KiYWVY6votmgD8E7aGLTvERwG24HkPu3VG3dMru1bs34RE2VbYNMp1XnohKLzQ1wHn5Vd2Yaa2zRqERxKZTYi",
  "key9": "33fbneEg22dT4FVyLgsErrxWZeVQaV1stvpwPR5MwTb46beeuovnSbgrKtnY6eXMJ2Y9uJaL6vrtLDyQtLbPAfP7",
  "key10": "Yj5n5GfgfkCkMkWWVrNL9WQgCzznovKpGKEWyscer3JTdTTXPNj1U826vtFEhU18doQwBiGvg126YA1dQ5NpQmb",
  "key11": "5evPbJsMK4VM422A3Db53ZMaGXp1xMS72sUhr1f8hFuyQVg6Zvs5ncXakawnkc5uA7tKKQTRggv2AQjinpowJ5Z5",
  "key12": "5cDGoqL3iR6zHgnBSwimMQsFXTxaVFQM61sy8UC2wUQRvd5TuMqHzQ6kwuKzuTWHdVmkqwVY7gWhDyARPjtAHiiA",
  "key13": "3ScqJw4UnD96tVNRExnzuee37Wo3M49xtL6vEu9TeKSpdWThnqa41LVPBF4PvWBc2Ph1jc2JTdXGgZ6U9t8MGWRP",
  "key14": "64NzPoqQuSo6rcYaBJ7VyC7aSYJCJdusoR22FY9fWmE5CDeb2z6e5oUagjujpegkcS19E6ZG7fvQb8HCJBYuZ7S5",
  "key15": "3g5C5t4GNUdPXsnzn135SybVXFd7WVak7XFHRkbTABeLXHjAQFKkXJ7gHC5rBWTkxwA9xh6fzGBfmvDw3YAnnyhv",
  "key16": "3kpcKW9xBoQ1ojmLJ2R8yCn8mUzL9Xyp4V3ngNeLgT6X2pp3NFoqZUXQkUbGeq8xtfnyjbqbNCdeXtaq8zXi8r2",
  "key17": "4zQ8KFEgBPTEoGavRWqeYEgTWC3KBvwmyz9Thxgng2xz4bV89JnoGicQtzT6H1nnNNRGLxHwPJgUmNyAH2pT6Zir",
  "key18": "58yERjL94iMejAPs3QcsANGv8mrLcgaPY4ArXEzqEMYMDANQELc9mhusazwoYbedKU1xDFL514BNhgjqb6mr7ioB",
  "key19": "2XyrxyPoQSNgbG76anjLjC8QX8peohSbxMxAfx1rrZmL1Cjb67eKXq6nxzfXzxtXS4VNMfBUrs56QqW4aPavkUgY",
  "key20": "5BGQSuPfaYfpqRGfna7SipUfdmsVPx1JR86QjjB2dsMY6DeobcPsPqgYgfsta8HxHZruyo5mKLD9eRQY4eSnCtpn",
  "key21": "66DMtxdDU7yXmX6ejuP14NnZKPLj9hyrN9QQVfFgw5needHLQ5y1qAn3mtrjRhqsGBED5mcfs8j7sYtgSVvNWUVr",
  "key22": "u6Rq7U7CyW7TyNZZCPwpovjZABdW9hTXHj7sVDJ6iEWzwEqHizJ9ncJ22mvyoPuov1SsR7iLjKVDMdr9g4tdMY3",
  "key23": "5hxFWmjUQLQzyVpbdw7D7NQUsSiT2nj1oxKdNF7cxCAkvXPm6mEhk6ufBwM8BRTGmywqjGm9FbGGktieydeNLDdh",
  "key24": "3nmupQUMG7FT41uf1UwTkERvxDJF7BPNfKLEVvkFcGoPKFYXua2QRXt4BBqNBSE5w7Wzm79i9pdLfkUe4dxPCB1N",
  "key25": "5CvcGjXShEXeVhPMhCMbPnA9U2MdLK84gdwZVSh2F35DiwwmQLTZwGrjy1Km9CqLcrBxUL6NA2GDKJae7aCb7MdF"
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
