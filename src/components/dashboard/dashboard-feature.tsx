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
    "4ZkNZX7H8dfqHrbjRHP1arhuKWNkzjWFqpwXsGzTxMjeQmg34EGG9cc1oYnWnLtNv7e5DHuVCof6ep6wDf4K7U6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcPTbnH8K54kPddicvaCHTTYj4YcsT5SekFdKDPCme4dTTJcGa43aDGxcc12aa81aiCaNQnUev33U8QPNHXi1Ux",
  "key1": "52FnS57CYHxqVBYjB5Rx8K5TBFjo2Qf9NsCaxQJHkkJQzz1R5Q86GETsfRHj3wXjnXTCbuifPhGLfn7za49KWMf6",
  "key2": "4m4aoGFsAYv1Sa2gBaNExcn5DY2fppbzDnGcWgNwjgPUso3VSpAYAD4EJA9hTxur8Ugveh399QPsKJ4Re1erpoe5",
  "key3": "4yuzaSnwgdphLDJ4xJfMcYGbxqSfCn5TCpYWq85nTUqamxbdmwtPVLgUgq7aEx9n1d7jUw1qzQsYH61ZHjJ65uvp",
  "key4": "5SYL4wqnLaejUi28uz3yhp14TXKhehcGmKxAYrv6wJB98SFe85WniHvW834C671YBMFjVTyb5h2EFDTUUAbG4iHW",
  "key5": "63JeoUrnNHpNeEYwzMgJ64p3C7PWbCVcqXSxJARsJ7BoUuYum7hVfXvUmjrznLFJjghwVd3eCnFDixR2PQLUXuT2",
  "key6": "47Ni5VdSyT4x7ePoJdgBrCrMHz46ZvVtEHskPwuyL6EUyUzJYXZeTG2LDKgubBzGTeWg9wjR7GVZ6x5mzjTYsuhj",
  "key7": "5SbNo7M5A1cCsPVFFcppo4r7hnyMdjJ8FGDQnmbQbeGqC6HEsfqC2aNpLzC2W548RVDgP11pDMJrPun9JX9fuF9y",
  "key8": "5WrVXrC8aUo3uqk9FZXU4DmhAqpv1NHdMjKKTMJ1GF7tR3c3Ej6N7tTvnBYVjGNyzBjEFL1kWp7L5R4LQCCuK82E",
  "key9": "54QEm7CcsEUsqmMAd9MrQ8YZkcmT7Y7Rdz5ANNXKBGuoaACpDoEcSMHkvo5n3hjpqoj67XsjERcQTqnsyNpHKbia",
  "key10": "3xeYEbsAe2wwWYaWSazT5UB6ZMbUbMMvGYjzJCDMfwnAQdLWDVhJwaJVDCPAwmH73CcKA8dCmu9FXKN8KB32Fe3U",
  "key11": "2YZTPPZNRdU6AAYrCF1Z3x5bYTh6Vz6apEVRnTXra13LvYDagho7UmeG6LuW7EJKYS5RpWbT7sY8uSMVCWYzQ3F4",
  "key12": "52vgXfHNJgtXjpqjostkEPF9uQyXg8vs9MX9yCy3BEzcDuN12CLP9YuLjTt6kqZ6i8HeASzqNFPAJfCBWAfqRqDU",
  "key13": "RYAwjNh9QoMqXMuFkmQdkhYaXY7fDkEUdi6NTwCnXTL8uBRY5NgmE7WdmyQvkCLciv9F36MyF29fnAkzTcWxg2Z",
  "key14": "5nL6W9ES7vvGVj1waedk2hrMpFxaBNwYkr69yYqn8aaWxS5JtKhr11ZVbiPWwjccXQnUzcT4oSsdaoBsno6Tt5nY",
  "key15": "2jQwt4UihUmAHNhSaX6a11vvTVXpmk6Pf4QPqBGCxX2TSzBw97XbxUJowanTSsjQiTecgtXCET9WQ8oyxoxqbW1S",
  "key16": "aXX8VM1s3rDzvL8ziWPbvc4xEc9BEMdztwEms92i8HXPrEBEFibpHnwpJmREvwmMBL4pc8HiBDUn2mhMP1moBMu",
  "key17": "3qVg2fNLwcGxNVtvcaTcsiGQCoJdhgTFPHr5FnnwHZ2fttzesS394G3gv1kvVQVqxFYAqmqmmHZiiEnp9sFVCBPE",
  "key18": "5kNWbkQvUaadV1m4quPeCKMwXWQJaLsCN8oduqV57JkkAnREcZcVRrLpksMBeBCFfsbUcPmMNyLmxVM6GUTgLAmN",
  "key19": "2XtxJTZQASG7ihFLpBb8QrHDx1KSnPi7AfLEUFa32FYPM5fngYG1hv82Ys3hvNXtbTPgvL2v7UjxQbWEYLekbftL",
  "key20": "5mPLnfZqRspqEwarMppbNyLcBWKjUSvxfe2kKKq71yYbymdFg2Cs516vDuT84gmGqaYv1sEGEd3L6UhBAV47Ri8A",
  "key21": "3ndZtBQJgRtNk2Y42vwtkLzoLTsmLpPiY83Bbc4LRtC83UocBDxF9Nw3gNfJyfjRZHK3YjNnUVQMNHKMRKLYCbTG",
  "key22": "52afxqBDAm46gpxqXPh6gasiiGHUbAwo8L6b1hKnfACKcuGApoFJgiBnoPimJSbCLwZ3HcDQA8nVfXtX2xrZ8MES",
  "key23": "5e48UZgYuPYRzEUe5bsEzZtXBrMcq4kWPYDRLLvcJoBMujr7Dugqq96dpfGVSMr1WEfPBcDm3vrjRkUQ2kcdY7Jw",
  "key24": "TuyZvJWhqGS6mCTr8R4WMsnGoy9qFhrrkHem9b8tH7XMYZhheSRJA89rPqSGwAvnAt7gQanpBRUsWPsgBG6DDkz",
  "key25": "M1BCZGA3PdQ7qGqkWb2xdzFANHnYLwzGj132RqxKHCSr6gCdyeUUqdMTZ1tfZWonuM2b4tVvVpogPHTwPQdfJ17",
  "key26": "4XLavStiBs6Pd748LR4UL4BYqAQ64zpxT9LFz25FFqt3jXV9MKL82SimfW5Hmbk81fQtcqz8nYhphnvWjuNrgwTm",
  "key27": "2XwTe3iMQqUZgm2PKavFC8Ta4RoZuhfkAbn9Ur1hgc6f3MxTwrzyM1HFKqqeyvwFuiaQwybdb58Bi5kEdABwq33b",
  "key28": "3VvRLVND7yEBH3UjFPchMVqfsmEjpnHBJMnxJSiXXr2ds2ddvH7sGTnmR4bSJFk7NQiA6TvczdDfDxWD6BJh1DRP",
  "key29": "51jGey9SX5aeLiMVTUSK1EXoYzLf1PSWaXJ3TK1idnjz6pdnYoU4ZiMpDXVfQUxa39CJCcWYDTHpf5GEqcY1aY9g",
  "key30": "5q3nHds3uBXT4cRZL1oGrPFL66bFUF4fwB2ACZWT3aaAz85jeXGmG6CA694rsRSkYkZdh4mfLvDpTyH3oyiQww2P",
  "key31": "2iTujkoVDb2Yj6JxcPo4XbewQWSEaE67uGV4TpwF2JxrNR3j8NXxZes5969oBJqZJysgv5zQNRBmUJ5ZnuwPsBwi",
  "key32": "43ufDX8qBbjdJqggHiqGBX3yd1B2KpYZavAXCihuCex36A3BAJ9c5vbN28vdrsAY4f8AFenyDvzPYZs8xq6oexNt",
  "key33": "5dFAJoyydDFaryeSgTkhEh7yXSZTcDbBejsLmczj1AhtrfFbiiBMvWTt9xBdPF6Shbwg6qHLiDYNo5bYYHUjNxRD",
  "key34": "5vr2n2gct8jxecxzvTpkKaeUwCdsuN5ynvaQD9DKKV4QXJkuEbrTUetefRpp83auzgo92bcFmvbsHZ6zE3QgBdLs",
  "key35": "24bxsew61VuFjfQPL9MvGaGPmgvku7RseSafBctZwK6ZknsHbgXT5Ys6fVPsRQa13a13RABZjHdMiAfr6Z8H5nvk",
  "key36": "63wKTn5y5GZVS9mVyDBJbN7HN59beawEHvwsyXA5QguoeSMBWSAVjRs7Qn4Qgnz4UQaFc3662tTZwR3nQoxWAyHe",
  "key37": "44KQaiUdzJX9HD2SM5xxxdE7RrRxcUyDJziSFjUmZYgM5RZTq5kxvoTw11qU9WznPPkf9Zb6jJA7xDqi7qpVJUAZ",
  "key38": "3C33MPt1jNuV48L2m69RApCFSnqTZhogvrku1LoozSBgoj16CfCMjPqHgXwvhyzusvpFVRYKCfqzdZDwx2iZa4Nd",
  "key39": "3u6ro4nT6tLYqyUqx4UYBkYir4EQNxor1iN3GtG1qLVWWerc2NQUJb2jmqX9g74rhe8JCLPHqKnLShDninheDcjc",
  "key40": "4Ayg6jwiTted1nTZ3aJWEwNuzqn6M9ZBbvq69q7GH8Zs9gCVyyX6Q8mTfeC5gTfWrjHAEEvWsfGe84heYy5cqRLW",
  "key41": "vogJiwzVubgKt8t9kQgDhZ2LXiDWRsfAeTBrxHBqGuFaLQuGudBR9cp9cVw1ZE6PUnREYdSw2tAyrAuvihbW4BJ",
  "key42": "4tTVhs7BmdSYBcvvD4LHEkNARbHcCRi7KFmjKsgYTKwuLQQ9vEPjPDcUMEuPMCxZe3sD3Y4Jc28PyufxN2MFHogZ",
  "key43": "2mVbdhuDLMU2mjzLjzABdfimWGQncREvXfBCgdCzjHJyPvKWd26HXaCtbgyvttct32BB1EX4e56Cehi2kKm6L2k3"
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
