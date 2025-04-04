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
    "4uVyVvcNcLF9cpwdx1RnTda9VVqgxc2rdJ75D1WsittFSjocFuUSCfonYACRgTmnRocUcYuxLcVfwp6vn8p3uM1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w56zXhAQZnnz9TVz6oftorUx1kMUtDwVBKqFXv5cMkcFYQTqyd4TWVP6u4zcY7eoVB6bCbPug8uPQy7FQPM96oc",
  "key1": "JErym3HWVWWn9vTF8oRpLivGg2n86rtcKq6GKhkgDDyq81J8hmk8jNWXn4X3qnxJRPXRdgEeijjutr9AgDeDM5o",
  "key2": "2njTTCcPX7gUWKcbHDgPRtgXDA83EAQQvfrDVA9phgiQf6dHwMFnrquN7SLNAzhSbQYLCguP2CJUpJ5gsyWFYDLg",
  "key3": "2ixjcrJ68LJkyFmiAQEGDx7iWnGKKw677ktYaH9XCfa9d2y8E5oiSMs9JcBomwbNq2PQofBwYnGXXZXWXVyaHrwx",
  "key4": "2T8pitnsnwXvZQtX1eBJ3cZJYsFLsv3H66N1VjhxZAnsbcpFe61h8B2knkigk2wxs7DRWGHRVkqdVDwP6VLwESrn",
  "key5": "34qLWLKv7EBW8BUk74iV1tb4kzeotA5reLVwXxoBzsxUkYk6gkqRvEtNU7xWLzqvhSDhaZfYW7skXj7cPMjigamu",
  "key6": "3bZg6i3pwCju6Z2N2boZ2EWcoHbCTeGk4u1td6HvuZj2p5QB2QLwtYi4zxP2B3yWs1DJ55NUxMPA8WSsoHSX6WLp",
  "key7": "4N1B49i2eHymsoxhW5bYEwjKQPR8azXjvw2yzyir6fq81YVhL5oBQSUX1NreM4v2mjetTJFL9Se3CmnjNTqdtpFN",
  "key8": "5nvarWj5HFhR4LrYGCNTXCphXZfkqmZyM5bwd9xcaYSewZFfwrepS4A93kfEjeRRXzcJ8dYeqX5arMHBWdLccu2k",
  "key9": "58DsfXzkJRk7a4dJ1m3Bx71sktniKJuZ8BNvbiRHZoxpVcuwBk26TGP1aKL6MD84javZ4EX5szWfLLUfF3ZMQhkt",
  "key10": "5pZUuDiSnqrgwntHPwYoTcHo6di6WALAYjaG2LvoifBf86QyiHgvkPwd3t87vY9rDdwEWbKWJkdaaTM7mWz2WrBf",
  "key11": "5wGjLGGEkcxt9GyjUcVzpWLGuJbHv6oD69Jdj2zWZfg84phzaBrx95r2L7Ljc5wdqUs5CTBXLbTqMAz2XRH1DE1Z",
  "key12": "pEUPsvz2K16yXpyWGVuBHhHZCL4q24q9gCb1YR8RK83YQdpeftKCNewakgaUGRrpvzfobsq1nvSS919uAeqPMgd",
  "key13": "4VvAUzSyPXoWpJSMmRuQfK3x5SsojFiJwXwVd4vhXi9EYJrhPAUTh1bLAPqg1CkP2yZYNVU817nHp47gsTU5d6ia",
  "key14": "36V2u7F6MZcZq6sB89woKBLVDYNwVuaDBhrJw7D1redgyZXXa5XFSvnUrzpvLmHaKtUZ4hRVx6F6YbJZhUB4RJiM",
  "key15": "48HyGHAVHfExjNu1JCiTBddtsTurtwF3g8D1K8LzFJtRjd2NATFwujsLGFfzGa4P9jENACLbxJJLfFV9vCws3xno",
  "key16": "iK4CtWmaCiDQphMwRXr9Zq9TjZDnkA6cVMRRWzStLR78DkcrFcZ6nUZwhyKSkCNCmULYPGgWubTdGsg1sciWKvB",
  "key17": "5UVkAGssngnSApK5mdYWfiFFKdxV51qAPTSLXGvz75KnrUvFsC2JGw9KPFNhWBDLat8E1nszEm3szAzrGt7trygG",
  "key18": "559JdJDtamBnP9a61XQmN6iGw83bLpR9PiUpQEE3fy8KvGJ7aMyBrSgg4QZVgmec9EoCtwopWv2NPbck5fqxkjep",
  "key19": "24rSBJmVexeqQ4wouYXX1ApD1RBHvETCssZFA5Y9uDK2kEawX2PqiBHwE6rAtF8Qa1aJkihz8soYGMhtnFUMEo5R",
  "key20": "2VSHrzq6TX44vRq1rBpsd3r5fiz6LBRpAgzjmEg4Lo9zGD6qR14VM7o7YhYwEpEAFpa95dxdRM9fpAmtTrAMPGUi",
  "key21": "3Nrv4ZRWVMwfMugVcNpma5Vo3prbPXpyv1arF1GR62Lty8FcVAquPwHRWeTRCLuLE9fhNZfgPD7D8X94XRmJ3G1B",
  "key22": "67XC84mKTrAZfcdH1FmZ9rCHN3Qj1Utm86RcsmNVtjkWyq94pm2TFTXfnUEKGcf1pJmwkWMUP8MDCqXXuNyJM4SW",
  "key23": "54SwF5XRUE6oPapj7fVf9msYRqwDPrBaT5okiBVHMK2TTjZynoZMN5GQmDD7xCmH3Wp7UFgckSSWjwc9RSKiBvwA",
  "key24": "2ZjFADX7pG5FFaPXFTgMv7QneXCuUKheiDREvXTpEmXJz9yFNNG2imupz3qXip5349T6QPqotBy3HhoycNznut8U",
  "key25": "tRcvH5HC8m8hfon7K4YUzn182AcTTJGuZoAYDbKKYpE9HDyhwSdsX6XWDziFT1cWW5RUfjmVWuJkvRyoHuid522",
  "key26": "2okqEhXWHvjAheRwRLvAvtfowd5XYEdcoXfAZ5MBeQruxN9qdzKiWDcPBQCqt2J8GhPjwj8F3DZiQgDWiMdrZsQJ",
  "key27": "WATL2ucv89ST85bctncmE8cguJo7ZAcqYzbN6JEXfT4yGHMcQySrcAgHaEyFGTQd5iQEZMhrgpXwQCNyPfYcTKn",
  "key28": "67cD5Q4VXYguQzx1nCBkxYAzCf9TYCuTZzfAe5q7KfJmYQdxPED7qmRzxvth2ZhU7rRPwQ96varZyue6BLd7atxV",
  "key29": "4Z7Z1orfePW3tEeMF2zGCw4GsieGwLcie3YY3nwneCpj8zEire4dhF3dafXCdgUdfVhAQuSZcmE2SA3ZEUvoMYGD",
  "key30": "2nmGwWhsSGYZueiH86ybPckDv2ovNqukC6vDayd8m5Sh9nzz9wEzqPFEqkqQBhR7PR25ttUa7TQDrSWNLXJFofyy"
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
