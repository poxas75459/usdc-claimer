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
    "4WF5WhiZFmGgD935EtA6YHMESZsuorAi5MmEZuQ6Cvdje1JTKQCUxjkob9bzPMj9t83NAtfZVuwAfgGX1vKxSgZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywXfdJbzxTe2kWEm5qxWr9H4XPUsCtTb2gCdaZfnHRC27WqfS3TDJ9GFpe4jTEdBHhJmED2BCUAZL6W6Qsk9bBT",
  "key1": "DBEuyyLdSJjfkHqjRTXbruKH7TTGYC48eKHQp2F7CTaqvpprxS12vPWgTcNuQn6aSobTM36gh9t3VnZfxYAKNzb",
  "key2": "4iWr5MZHQEFUvxHAq7B24MA4ZMi9VBDojLvgLXVo5cxWPyo6cTgZit19TJCHHBQvJ4381mnJ37k1Kna2KZT9kavg",
  "key3": "32rNfW5b116yncEjBK5cwCsMgEvcwzhXtoS2jorwvEeqzFs8p96RPNbhwzGPzPcEKGDARomXiBc7qupCxPdLHqoK",
  "key4": "2oLs8d4vUnnpAhq2wknA6jPrSoEAz6QAvcaWC6A5tp6YGhYjh2Duc3CMS2vACkTaTKUTPMvPBYa6SCmy7NfaP91T",
  "key5": "3janjXrPdKaX3qiyWWQmmYFiw1STmCpdYbwLp7Z4k3NugaQptp6SWuN5kyXud5FQEA9Pge45hrjQnTkx3uFHoneT",
  "key6": "52vEkndtx5yGDJqR7iZQyisyVMNRFXr2rhM8f76G3xyF9XQ7LiTMXTMq97coVLjq3jQrjsTwdKzuJ5yJ6B9idocA",
  "key7": "5yDENZhnLvwhmDkwSkgWqmP6xCA2E52SJ46NmMU56uzgNAeAsL3hcZQgLCgQZoBGonMmqXzdrcso8aQDJSXbX2hY",
  "key8": "2x7pJkEPjm3Lo6Q5qpiBUQiDLaL35CGcoucfvaEJwR7oQgwgfUhGbcVBsKPfpV3NosJG16cXoHXADCpKbBUkWdrt",
  "key9": "2LFAsKMUGbwfUgRLqaSFFz7tsM1E5baWr8ufnRsdxx9xZ4hrTTZhrtPKAx5wFqshJ8B8VbABMACs3pcQ1RuvbB37",
  "key10": "24kJmVmPThHBUkLePvsY8XwBLPP6ZX3Gto5weAwbDLAv4h75wNh2fjw7dWSbjiHaNegNUSapnVPzkXXVSbTRCsGu",
  "key11": "2U2PicJyC5ahagDWhr3dcC4RK5HHMB59FqerMZBbRYk8t1bsKhwNbrKb5FuF98wf4374DE4Q2oRe4iZdhBLq4REZ",
  "key12": "2AfYRrj6B5pUDm1MjFuhdPZz9k3RAoMgPfx6wyCsiWAch9yFNp5shKPPYDxBy7hzwKTQk1XNgaw7BD4n8iNWBzUq",
  "key13": "4P9L5QCT3haeEvTPbbVVYmHNmqqPHMkXSYG4b8XAfri1rNWXhyqzyFwCYPfPk6ZboKoi6zH9EkcgPcC32nEx9Ziy",
  "key14": "25EkxnpJf3D42czuRwDM3rvo5HYF3JerzDciAz3S6QK7nJ2nzafszVjBrMkKBQ6XbkzFwS86kczUhE1fraXaW7Uz",
  "key15": "3sH2dzMrRoE2Q2Go5iDAbVD7RwApdYZsmyvW3UuzECXWwdtKYphAAzHWymfgpyL7DiF7eVMNjajBtcEJRDtArBV4",
  "key16": "3uJJbF31BUSDawCPc1tWQQT12HzgTgw1qKtAWHgRsMf5STf4APgMceHboVp7catA5Xt37aLihgfwpJHhx4uBkKj4",
  "key17": "2XsUZfnAcpfqNtnzD6QijWmbw9JFjTbRMeR783vj6D5VoYyhoUawYk8EHvpADgN3cYG8Dko6n7yPXcZVaYarvDt2",
  "key18": "49Jst2HM2rEBqNXdLvSAxfhj8aQDNLmUR58XotAPVM4Esd6xPqPHLeuFUJZTA99wxqB12DDZE2iHXbDEaDdFDrsj",
  "key19": "5QABYpr2tjcsXDHAagTXCV51jvnXPFEQd6EtCVc3bNPJwbm4keLZz3Tkq38yop7w6sn17sHYjxsXmU9Vxt42nLUH",
  "key20": "59GjEGmkKGMozvUwci1GskXjN6bSXB4iti3944xCHnrBB62ZFE4ysexECYYnkPxwCHU8zKxe8J5NUnyapePx8iPC",
  "key21": "3s6xmb1dfGq96hhgtEPR9R37XQjb52GsYF1g8Lq8S7jKVqwSAo4MPy2u8Qj31Z7gQQnm1Gbt6cPfzGMf4UvyQ5s9",
  "key22": "2dvujGDs7agcATtZfKVQYub5TJwMYQKP2Cqj5x2JkTHpBTmp4U8ziko9r95gYsmfGibzjcRC3h7e47kugCgAD2LB",
  "key23": "2ERF4pQSbmjBUcv6BN9To1k1eUnwmuJMJ86M7cXdt8JBkRRjsNDrnkDs3HMDywVyVcRvnhRc9sdHvWgPU5isLWd1",
  "key24": "2NHUtXRnskQZ5MMRQFrewnRTQWWv9WYbCQL6VXA8pAeqPMxm1rgLWz1ytWS9QyWG89D4finZwLf2CiuJgVmzfg8N",
  "key25": "5omZYmD6kLJv5LD3Fn2waYnvWQmbf2t2RjTTK7TSwWcQ8emFt3LYXNZLsWKkPq1kKgVguWBor7dqCAG6JvTV61zN",
  "key26": "5cLXTyqDAXtgsiyq3B99HoU7kHpmGhmb6fz4jSwQuxK3UJgtGoxkU3VawohjrV84yxjfDFeKcM1sQ8c6STheXXGR",
  "key27": "2BLNhFiaMmR6L3MYogvvabnGbM99HnkcjijuduLQr5r9wjqm1DYGqTLQUtUNzSac8834hkssg2A2KCJeBHRFX1SJ",
  "key28": "25N4SVskznxHRsYvg7Cq1jntQ9Wfyyyepo6oy8h9RiVYSu84LVAbfFiMiU98AgZ3xf1Gj1tBC6GetiboBV78uk1F",
  "key29": "3LU8FxjecFLE5XaVhKqAuZCZx59DizfJWc6JRqhhCGknrAK6DjMyWC32F5WcMJWkwJajtxQkEb9KxDcgC77J4wgV",
  "key30": "4kCSrSfJfo27hvnt6fdyhZ3rm1rUwrbmTQ5mbkpHwuaiU6u1wfAQ2c6BQFDs6PR8HwsUTgqT5n7LNB37J1ygUbcY",
  "key31": "4w7nYnEf4qJNUdHa5UWWSX79UicvfTD2KkNwz2VB31Sqjb4J8jYEeowmuodzvGkHxL62R9iUg7QyEYBpz1d82d4n",
  "key32": "5Tnk3jeMCtQX8JdeeZxf1bk4Eyp1kcnsTzLAAEorDMX4GDXhW7YbpVJ1iCTb7ZSxWw4KwfjvjfRy2GsAKni1rsUp",
  "key33": "2qPmAiaAnyLBiJGijo85nAHKPHeVT5UchsykteDNneo8ceU4MYMY2aBWP7DtEv5NQqzSaVwAjWwb2W8jZAedUie9",
  "key34": "3nYre19sj5kEZEoyMxbXdMmqgwef9dTRXANEKVB67xsggL91bJQSMPxTkNKAW4PMsX8hSitSaEa7EDcZis2vXAcP"
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
