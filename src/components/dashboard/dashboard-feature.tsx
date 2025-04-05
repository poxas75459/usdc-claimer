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
    "5GAVewVp5S1yKshjS7YPAsc94761Xs64mtyT9PP8Wgf4zn1QTDgPkPNukGU2WLieM9cthnx8QymEoua8sQm5qjEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGHY11RdHWWE7QuagFj8pFqWdzZLbdcCKXJKrK16tVLMxt5KW8hmoW4T7jYWtuACEghycqgLPNoXcygCnfc6riC",
  "key1": "FGssRcsXkCRE9t8BgaG3zeY3RHDCBFwYz7P8h1jDhtKXVwvnHmrNg7hkzQPVZw6ShX6rkgPVT74offsGHtgjGcY",
  "key2": "2CZL3foQMNeCNhJQfXgDdoXx3Lo6342RHuG1shg8o2ftM3QKAWKFFtir2pZWp54HPH7wAdD2swSUToofRrLsk7zp",
  "key3": "2RYD5uEgPHZtrTEs8jMKDkDL1ddKn6GiAbMVsoHrBWfpEAbBZCtzLj92xdTEjNmjYYqqv9Fp8M3PQ1BSfxkSjmEJ",
  "key4": "3sdX4KyFMABeWvdVJerf2rnm9oTD8awPMfdyg712vgnHnDo2FUw8hJyLWocWpC1N9AZUnRXzbiK8kTkCfejxJSxp",
  "key5": "3u1gWkVnNf1Gbxt5h3VBXwBmuJJL7YEiEhKKuZKhgqcaSetxCvLRVsDiFtDbziqgDBBAM8w8HQUimfho8Mu5HHhx",
  "key6": "LdWeSJegw1y1P6Zywcfo9HHLNKmBs4buHiqVSR97CbM4LsUpk9h3xoHiyEZbeQKjuXNbByRCHsE9sWf7qHnmBqo",
  "key7": "3HmNAPRmkqrkiEr8WQWmaJLfA6wSaq6StJ6nNteuPJwfTWjxT3yaT2TH212R8ktS4qwHPvp9oFLJy1fMaUnfxLXm",
  "key8": "4cckzGQ4JeaoG63yyMb6RjajjkzUNu2VitVNVEcbz9qNKd3BdPdNAYcfzBrmKy2GRLiRjTAAqWBwHoWGVUsq4oot",
  "key9": "64LCmgFd3PHS2aidQnX9WD1e7JfK45fQtRDhuN5yTwjDEC1QLNy8g95t7vj4a8469wH3LcWZtwmhjBaMctVWKZP7",
  "key10": "5VGqtsokwEumSq2gQgBqqkWwt43hLFxE3qxAqDC4d8JyqLoQE4ZedgRHxU7kLS9d2q9musgYzJ1zoHF8yXQSgchG",
  "key11": "5zDGq9jsKzzQ62ReVUdHXSvcqWvGEQtrtFd7bSeo3LMx2JNtf6DH1rtcU8UYBr5YN1yE3DR16aobCKhMvuFgmXzB",
  "key12": "4rePzXkYUFfW9FvAmQ6fffCSmV1iZYBpFsiCobEn976S7FNNjYdk4dRUGEFUPxvKUEgomJdzFd1hPL5fcQsYPpHb",
  "key13": "2bYUoMcWn9hXhsjTcL8NCHDjmDuG4Rf5i2hUmNAiN9HA4Vb1qXt1xXuZTDPVeqB6fCXck97AnXL1vq9EZbqGCoaj",
  "key14": "3YaEp6n2LY3V5CrUc2JkuNXkTq4er9BoK4s6RVoTiceNxegQq4rZopWfzsSwRKGt3yopFBJcBWiWdVuSa4H6TcDh",
  "key15": "4WJe7KyzkQAX8mRmtMAh3b92aaMaUyJnzgNX6Fwwmd3wqzi7KPxfYjVsT98HNHAPV4FKoiAuKbQzTuG4KvURKLjW",
  "key16": "kRM1NQydgakDnffaCBTbnKG3RJv8zfTZ9UkrcSAJbHXUzBwQxuX7QUWdfVwMXQZLYSi2ax9XhcTUq7or1cnEGFz",
  "key17": "4D96MZC8rDKT1N6M6RWc6shrZPEXoCVMuDtRAoTF4zvUMhPiHiJATtR7Gzp9H3Y8AVxgg3GeownbfXVTvdgRGFeM",
  "key18": "2Ca44XcVJEuAiTY2h5EMRhz4vdP8KufCNizig2q2gPwzM56trriWgxjsqnvSLKoYQLav3S6FaaEGK6kUwPnUPz9Z",
  "key19": "y6yHb1jU6p1WA6bBcu3YLjpjV2DkZ1LEZEEWZnKfy425b3vxHtpdriqd73susvJ25nb41nyJJK95CgXC5541Aoe",
  "key20": "37bCEKJ7tQ1i58mHPRVQnYZ5sW4BmQFLuFqyvHhoHa1yqyZnE6LRApXGPm13GMjFAsmwRb9KTXF9csvoaL5wkKDB",
  "key21": "549h6xDsA4D5vxeqCbTDetbLrmyYiSBewv5cQpAh9Rza8tCAsJr2wk4gcuXKa1CKzCpRoKSHWgUYDed5ieHjkgwg",
  "key22": "4N9CLK4jPSiBhYEmS8vL34Rt5MmHgzehih7U3uy3LUeccAQoaYLmqDekKSkxdijCDFZNLbsNUtz7p3dYxU2K1sm1",
  "key23": "nZz3bhW4z6XXcw4ZAYhExik61DLo7rxsDEDghvsJ3DMnNhS8XH3kQy3XCUVbYyW1j4PMHQ8raRwsCe3XZWssLLo",
  "key24": "UhJCmc9eTdD1w9Qy35Z3zy2DZc5LZHbTFCx4CdjFyX7RL5kwAUSB7oyNA7wcBez1yiiSTT418gMVfs29rnKVaDP",
  "key25": "5ZS5Wpk7y7MkWWzE27dUyDb1UVdHu5EGzYzmeJXDt7swBysH2z6FM1rGUrAb4ZMUGkxyubQDEcyM1xbFWYF2xfyE",
  "key26": "ZZYiWkx2wR2XPFu5VMSZtXjyupb1yT9gCebEvdNH1nAkQGxRwNvmVU9UGSN6DfezicMGZf44wgrhFjtkb94Y8Un",
  "key27": "5bMJMHuG5SXHV9NWWYwxv9xkFvQzzcc9PoA8Y7UMqkfzNED7QSnrWmb62diLGRnwdKsaQ13y5zTibmyXTijHqYz4",
  "key28": "56KjN3NMigYtsp2nCRgv6iuwNd9obE6sLf5j1EscDFj1mHr7L6r7gc6hYXmS4qrvfaA6AkoDyc1yCxV5eAxj2QDu",
  "key29": "5u1rqjj9rKsFRsW8ZB5b8t1yBtsxSk81xrCnDQXmVDAMJXVdGfnKLpuebjVcHncUkaBYgkJUppgPxHVWjP3tjXh7",
  "key30": "5xYNFXLVPHpVB11sXBgp12JzVEKGLNvj6taVnvxcmeSk3xp1LoD39jyFKxLQFuu8wwVmLi5v4cL1QxSW7y7AYWhk",
  "key31": "2JuvReNjd9TipiQo3zLyy83LNxt5BqeKw7cpwPCXeHmmpqB4agNY9geCLRe7Vzyz1omzE23otoCxLT3SHja85ztq",
  "key32": "3zs8FsSquMWzqC9t6khuapB2kxkPzrQWKBbDDT6N7Zawtzkco1t8BKNuMsz66QMWmPATURRzNQ45oCnd5FDmgxYT",
  "key33": "2Q3TCMHWKChoYQw9ihKqo8zArLvKvJxg94mwtGTyjvg89BkQs3kcLHfCeWPa2sug96N1D5p6T9x6eBsgfcxTt8Cr"
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
