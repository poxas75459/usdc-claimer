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
    "45PSYy7WBV8nd7s5tYyjJmHGuwxD2cp4we1ernWBFVTbUfeWELTxUPGtdgeyKs36v875EpAJNhYVue2ZqCtkA3na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wrfWz1ycwkg4qy6m8NPVtHpqYxxttQS6KHrEhTA59HQLiS8neTEWttgDTVxqHASnZ21SaKykPsGbY5BB9VSJx1x",
  "key1": "HFaAMbo9Y2ZWWu26RY9rh4rq7UCNKzN3tAYQFTGriKnHpgxjaAYMngWgZ3JkbhaNhA23ZaaPZiaZQgmxCvLoRgQ",
  "key2": "2b31ToasuimtVx3aAhj2UTMEEbqMofHhuiUfiNiKBB25xFeLG9T5LdZ9CpvXhCho76sHkP9cBdJQ1zZHHhuxifDM",
  "key3": "2SMwXojYm8PF4Dsrj57DBWr7Cgmj7QWfG51U3gMhdW7iMUktcrXpnGHsCX4T4Kw6W7RizDtEeAz3hJm2GEVZ9UxT",
  "key4": "wiVSnZWq8RVyF3R3MLBoN8BdaihT7CjjGYpPix5zKHuYBKXQ5hX4rhWpV1gAmsk1eXELs7qfiJud4Qq2aLLXcQC",
  "key5": "3nCN52U9eoh8Tii6bmD9ebRRsEyiVbujXjjk4nVaYuKHVDniwrWW7JHKz2znbqeioBTzK4H7Vh5EyWmM8nPgZtyJ",
  "key6": "3grKYZVuVt31N3V7ur7TykUvRsxyULfoWJ7Eg36ktCBgs8VACKnCmcyBskTTUPVrnWBC9DQHs2eG97jqrvAF21pY",
  "key7": "9BFLWMDKkJKiQoDxznfzJsESef3i5iBYkZPuuCuAmC44mRGVXCJsEiMGDRcC54QqrVWD8JteLaukps6bcKy2wnx",
  "key8": "5vcBNhMBJ4RkcQZT6aMZenJ9PbLxhtV3sH6nDf3YqkVPMGNbo9EJui2tc4ptVEECSdvPAGYEeBYmb2A53XcjaZtj",
  "key9": "MvFuoaRwwHTZR8Tpktu6YLUJceTWKTPeydexxVz9VTTxxeBpfwNXxnPs5aYP7B1i5b6gjdRHA6XT3jYCT978JSb",
  "key10": "3LwdSAkbnHTMrkUNrqP6bohHoUh71QKQadRbb9ehfiivn5cuMHatfUUwZ7jnogD4fmCF3BNfX3n9QzMrS1L55U7V",
  "key11": "5nxhazdsCUDYQZ3Kyvq8Ejo3c99TFs7JeSodaSQMJMM4pL5T2NbHVoeGYoSWz9nCGz5KQcKQ5cJXTsJDDdyhsxWU",
  "key12": "2dtbyFn2ob773EGKevDxbSLnZentmwP9vBPuhB8dDJUSrGJDFx2KqXvYLn4GSND6HSbLhMMm5Qtay2Fqe6huM5wz",
  "key13": "5yz9BgXhzK77QnJA7WL9kfwxGkLGjFFpcNAGqrna4QN2DL1SGdZqBTnCgU1TzrEtt2mRSaMPi3cwjejxdFZTp95q",
  "key14": "2tsNTN2Q4AAqLMLUf1jKsS6g45FuwnxSoFgNtrbpYSF4VmrCwLmGqvGgNJXsww14bWSErRSBybp7TTuvXeTejoPE",
  "key15": "4bN2c9rDcZifdpsEUtwUXnGofC6KabwH2aV7Fu8wd2AWc2z23FTT8QwqHGJGEH5agmXVXn1awuDnq6Xi6tZpet8Z",
  "key16": "62J74GBtQdgUe1LdeKeiUFffQE9ae7xuSJj9yaJArYLcYySJhN9zjmJMc7fPuAbZxXwLL6yVixTp4bzQdNxLWnHz",
  "key17": "5CF6qYv37dXx8ES6PMpERpHdp7SUVWMmAzwwfEZAqEtXwiHTWviWq2r2hAZqZDzwESQs4zEDw5sekoop5CFM99hB",
  "key18": "5GgjMvKvjW1UM7Dcx7pY5WxZmCXSREL3CBxPCJSkAA182HBTnVgoFiG1fJU55oVsSnKEaQzesMe1fcxMcqMJx1Xc",
  "key19": "3neJagmxQcBA2KppAvaiPhTBfqVfsssqtYyQ6pLYJNGhr79Bb2cZ2XEr4F8DL5DCuabKGsV3TpXpTF83WiZpP6Rn",
  "key20": "4dQCdxnZherGuEMWmwNUi26kJzsYVnvBuDVNefNzBY8gU4vhVAMiCiThCrWAXMqmW47kxQXT14cZLAKGskTgVnc9",
  "key21": "2q9msedTCEHXW8DxhfpBNUZoxLyq7kmSnNWnHtpd7MzTPp5GDUGyW69tXdVT9aLFnmBMugK1XCgr9GVodSEXaucY",
  "key22": "5mmEQ45wUv5qyyLex6sEKSSqgyiaTKas7KRPfyVui1S9JzkrzNgrqoCMtQX3cmd1KBWtiMyY9hHRgJnpAgyAp2se",
  "key23": "sNXYpxEdqUheKjVdaik9wApy7VSXmBzctAiGjDcsrLpS9dsnbjgFJvFDZGUTQCkrVYcHm3Qgr8gDnfzNYXavVYK",
  "key24": "4VmUDQBq4Gft9qFjhLKqRv9thMA9dgGiUKY1vfaS3VoPxaqa66AwGd4GLSEkcBtFgXZQCiTggnRVtDPok8WuY2mK",
  "key25": "33CkeCCxPmEfQ5KTY7UD7PgLsGTbgznJRoqcMKpbieGKWhaxeSpXMkfUB3JibSTXdNAynzjP3nKH1tnYKPZoa3Wr",
  "key26": "4Cn2ajAxa5SFuw2uZzCodxkiKTGTyWFvuvgfVvkAtnNHqGhmgQzwZhxabmw2S5YhBNqQRXFeqXMRzfjfK17LYwog",
  "key27": "494Hr1W9gehnH5CgJJMiREbJc5p5V9WwkYDHoJ6yP3ktcGcBaEodGEEuhsc3oHuxNHe5GhcJM3bQ2DnHRezr9dNm",
  "key28": "2QxHrKdG62Pa1QybWTFs9uzVAGmRbno58G5kxv1nTKbNUTyDRTvgvKyZnq8DAKSU2yyeptHbh8fwSP6fpL525JNS",
  "key29": "33k2WWvmRGQZEYA71F7AkWy68UXT78oY6SrRNiJ1SoJApQ9wsJH9UQWLbnz6CQgnnFuE3V9GSqX53XrP6FnFtRZ6",
  "key30": "4jzqQkM1wLHC5WHEwvsvXewiPt43TzoZCFfacStCxq9peL7pkVX9yd7WTji22BdKt3NmNDFtTk38L4ixAqGAASSf",
  "key31": "3pmSAFqcwfHmEtZjLCVCWMc2gyJhhizS43RjK6NiNS2KntLCGi37isqQ8eWYV8spq2ypgqgtFc2ZbaGkUn655fs8",
  "key32": "2QvuJ7EkiwhiduaEiLWtgA93evA5hHQmau6aiDPY8443B8C8uHb9HrkrwZ2X4CPLABVZHnH3WZwfunAt6oDuSGy4",
  "key33": "2h6nioz2yCh36Xpwa4Vf37LRnR6Hk8dimrWYaBZJ4aaDnFkqchoCK8DTA454Zy93URCES8YzbquhwWSzqX12vCZJ",
  "key34": "zTEH7sCquHo5Nr4VnAczasJ1Xuofzmyek5XYER1dvWJ4DxwDWuKSmTt12mt2yptDen7Bk61bTk3g2ipFpH1528Q",
  "key35": "3xFrjYAL49yQni6XicxiZweYNBwkHqehpw9f3o1vYV8vjf7cZdspzhGnPAWFnZL33WiCCDRrA1vNfJCN8VvuRigb",
  "key36": "2vNKMgc7CxzCbViQu2a9o372fDjb5BCpFW6LHTCsAEvEkRPbuno2GzCJtDFHj79AKDAZNiiyTyYNF2XfrChxtA5G",
  "key37": "4iC7xNnu2wGtNtxztAyjie6yaCgGDJpyYtpv8cP3sbjCU4YzAvSHY6AcvABj1rd2Tvy6FFzfEVr9FpKcnEyPZJK4",
  "key38": "4hqAyzu6YTKSa6Fza1HqVwmsrkNpGm1CKqLn6LYCn3NZUJJwvDgcfmEk5h64iRxv2EWhmfnw4AzXEEdvYShvnkC9"
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
