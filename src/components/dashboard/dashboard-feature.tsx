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
    "3CJ2N3tw1NLxgQJSzE5k9t7oQ1rRWmKXvJFvoyRrDpcU6Fj54nxZbSTscGX7hcxvgDKwzM6PukxYCKuivgQYoDsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8zQM43pvK2f2CC4ReY83aRPYi2F4PycsziJe5X7wZoQuUe8tjLbDbRQAr7nkmDjuydd8ChaAD8zDxmioUDiDbC",
  "key1": "2dzBXsrVbKi5eGmbRyEQuF4Mf5ht3WSbtRKmJ8A5C2BhA1UcD6AGQLAUdSTDtKrxDZXcSHg797mzDWGEtdbZKSx5",
  "key2": "4Yoc65LanaH1msnNgfg1cz9Ad5eVBE9B33uT1NEoVn7jgxbxTxNPLdqo1KLgxYVtDrjsUWWPPbqMRMHaqWL3WUVZ",
  "key3": "Gdp8tHxabQbhDpTajxccAoEon5TZPMZRJvyGDFqnq4X5wf32215x1oTcc2Ai1Fizgf1NkCCKsw1rR3paFrzxK92",
  "key4": "3Ge9riNcm2E4E8vTZDp1ANLvLdGVpziuh4nR5gUnMVUzJPsJ2B6adroGiJLkeXAaY6VXPwBc7sLaiMhuwRsFweLw",
  "key5": "27RRwi3q1vhVcBuQZ5nJvT3awQWoAGAC5jqN5SoC8CotDbTjFYsSoPQAesxG1G3rJgvHhSc6BQb3fimX1AubDuUF",
  "key6": "5pZKw7mfYkZK6D6CJ9XLBs4UKrBH4C7spcxx2wKGdAZWWGQQNbUiYXiNLXB4usMbSRU8hBgFdyWcAVJTrrsTTiKR",
  "key7": "435AZjUVjEMrrT6C9s4ZyJJ2KF2LsLzBUougXVwxqiAoX55L2ZYDzLeUgnw8PPrcBvmPWUontpfUChk5rjU3HGq4",
  "key8": "59i8nUuWrA5352vpZfCPUNWYYMHy5L9wTjP5ri1siqCsVUC4n88T8uabvQSiTLnuJz2hUqSJFmhdbko7cPMvWB23",
  "key9": "5qzfdjC9kJ7aSPzdNWeAVfi5cRpyke9gvpXRmLxsvL2GoahTevvJDV4cBCSUckUdxWfW7T3FqJCGMPKfnqFnB4bJ",
  "key10": "3susgQ78o3saPQan2PDHifG6cjD6XMaVVSF6FzS9BHybb8JkwfKzFMBzEGwAu9Xbo4H1jqHGyeCMnVnen2gVct73",
  "key11": "2oNb6MSiLH14vLLPGQBKthkrQcAQPaURSWGignfD8ytwqTUBE4e4oRb183CFD2j1fMLSsY8PpnxL2TV3WWKFWMhC",
  "key12": "qfJG3TM2rQ5Wk6i2invjPRCYH1Cthf4D96atsMKHaG3KFPgt1B4Kkk1DL5eJaD2cwhqVWpezZcPRKFFXyehkijy",
  "key13": "2dScqHSEsRk3DdLuaKjUv9jcKa9pH36fmwzMyi1hkW6j7sviuyLGBKNRv6nRKvDwuTuNGd1HTSQac8Ccpa2m7LiD",
  "key14": "2AnWK1J9quFzvjDUK38oDq3mmztJ7jM7WShRzQmCTZsNkJUuJjycaoYTsRpkaQavFBKazfSPdaSaEKp1dsDMnPix",
  "key15": "d2ZRXY3WuqV1jfCUudHb8mQcFuqEKZLYxvcshCX48HRUYrrAEYwCxCPsQvgcFdvj9Hrn35w6xwcL2wuNK6M1H3Y",
  "key16": "4ogXoehZ1orwGJbPoxeAhax2pHQXBjA45VxSwino3ev4nDHXfTyd4b8Pdbe713tBQBc4mgTgpTUX91j9VmsGJ3bi",
  "key17": "4qkqnrVY42THtUa3Qdk1VqJ2EvNrgQCpqdJRo7uU38eavMB2tbpozs8YvkAXqLa33KnXJbkRkbcNQvXpw65W9niF",
  "key18": "2kjUNjHXbvKR9jY9nkRFbXNs1xjYi24B3zZaUVyzYowNjdSTY1KF1LwqZ3sXN8q1vFN26ob33mptBvfWnEvM4ERz",
  "key19": "2G2PRNMygMjmuohLtnTx2RhNzZA4oARtnHF7XGiV2tD7jt8h8Go971tiST78Ay5NkaTJZt8ykkmprnhGB9gdcYvK",
  "key20": "4Y2a6ay7wAYB1R5ZKc19VxPc2kReWpCuLgY1Zq2JmR17uV3VhxtWSjEre2mf3HEUtAqonj6hR2FTY8uM7Ve1XZ54",
  "key21": "5hJP9nQmDaU32wULrchSBjau4HYbDst62iAmbfrPNQF1cXkUMW6E4M8cr5aPqUH7gSBqPSegkmj6WpwXTcNdKysc",
  "key22": "5EfDpRpWCLAhVN9fWyjBTyAzqJQ8YZa1uSYfYirjmMCT78bj3vV3CczGMpMnJHAig4Dr1JfJX81HwW2PapbuXexY",
  "key23": "4KjFQS2z6YWRqJAMaREkFwWTbGjNWc7c2ZL9Qre1ZDjbS3V8qsoLAf8QJyxh9uEXGWFcda6XdL7bN5sVh9nL6fxi",
  "key24": "4X4RSZDkGkbsVcqThHrm6tXqaMECDR8HAhL6ezQi5iPXbS4CSsSRSQfHZinANc7wywrGB1YQDtJmGiomzL7cidD4",
  "key25": "V4vzH7rfHSpdxm5TAZikxR6aWYYhbxMGiZ6j6Q8k7SxrWGhinXV1SvqR6AYP7vhrnvLmkVWDYz2g3eM4tFwXEHE",
  "key26": "3w9a6kfjkTmXu8E1aEeaS4EfSQ9XcjptPbx37Y56GkgdskQM5CMFpy9qSug7nonQFmSfCSRMYfUVgGkWgBQ8Lm6x",
  "key27": "5a87t1yKEXNAqgxwJXmzjNMiwCgfngGCEKqHyqLSMhALiRFEnPE9Mo7ehiwfBeSYrfnxEBoKZGKoxJQZdyqeinUu",
  "key28": "669ptLK4WaCrNMAiMNfC1uQY9nC9gUMTcy58ZqJgNWQFxjSnCJMUGmCFH5jCyekQaM8yuzdbZgRpX4ZUmxhyb1pg",
  "key29": "2ypFg8gz3n3uvAbTL3DYrwVftZ98KU7RHdqaZqhjWU7BGcHPSN2dydUKdaLgv9wrD2efdGGzMVysL6UWUtKgCM4E",
  "key30": "2VAjCHyg8bTigTtAbMfc9fX9ohkFo8r8QeMfcNRhEGFzLhqjQnAbr3poWdDmjM9VcynVHaeirRbYNaVvU7cf27G7",
  "key31": "5kpghbnPNoVMxRuBHwjJQfn1jER9DrzZVmNASQ8ABct2iptGJNDjgdsAbXYvT4R51ynuW3EZuWDoJ43UnSSBt1WP",
  "key32": "4xJ3cpQTAq5umzSXKwzsieR49eejZzZGdfdmAtmJNy8WXroZtRiiA7ETcZgfyo55wTARXeDGa9DzYB5qqMQ5sq7X",
  "key33": "5aUu5ajgbhQnaTiuFgSdMS5jDQUZkgccN8jyrpMUJqcE911Pw1KHm1TRjgRPMUWBGmLCaF3icRf7HFJ8affeCyvj",
  "key34": "2KpWAffTQbXbFfzhcwebgByjorw8ST27cGDepM4ZnvwGyeusNwksujiiCAGG4HE85tTu9ZgrJy6WEyLU83KgZ4PK",
  "key35": "3D46d5UTRZwgtf7ZoyNxTUySk6T5hY5AcBAC7mdbTti9S2BE69nG5SXQCEpMEmESFm1Rhz2yviPx3RGfNm5SGonF",
  "key36": "gGf3rdBT7FVeznTno1YCpqxiS3Cr9kfR4uGP6YCPGpmHYkZ5dVSmE3KYYRyy9TSjhyEJAW8dudnPc2RwCQYQTEj",
  "key37": "5FWH7kkKGPiZvWjiM9rB9TktDHkr4VcQZKU5JG9fcdBbLQv3pHvgLk3yqf59unrpnXYjr4tReN1DTic87faqVt8B",
  "key38": "2ZPCtCDFTH4PhwWjGHRt18ef9ZpZ9BKsyQ2TJDfwoJmRnzwGJXwLjYo91rKk1bD1WbqhYQoLoVwMwy2PXMt48QY8",
  "key39": "5ictwYG4hCYXaYerF1kWiiGcvC1TZQYvRhRfs53qd5RiphrQqtzgsAYa7MAr74P9KPAEffssSvao4SYa6jF2Tf9u",
  "key40": "zAEtc8Acn2gKv9gukDdzguAqSsfXUVu2GjuGnA9hjzZ4xzosV53oHembSoxBRioUksY7honpcpFpNo4hSniAZuw",
  "key41": "6WQA1uiewmKb7khk84Su8s49dZ35vkuCvbLGvQtT9sXGNMoTCvWkY9qxuZkeEAdKcMeQpqzZGhgjstfaeiCyPeH",
  "key42": "4ME2ADDHTvnApv8k2pGW7EGVbNjFjcVLHye7yQ6hwYgwmNi9Bom4oNMtS7kVVQr2od8HRbuoAr4fggZMzPBKVdDS",
  "key43": "2r24awTMcgaWQaTejFYd3XuBavebFJaNJ4jNB9QghJwLmnPsCs4SLf5qchR6jExWcgeMMckaRrbqBg6v3UuMnUgZ",
  "key44": "2JzebPi12vVvtPSsLsWo8iTDAv4gNnBt3u8z76RbqkvukeCUUZtpKDaDNDd2E1hzvcSejbXDsGTbNEXy2BBY72Vu",
  "key45": "2zq519gVwYxPFamVDrz8MoVo66AFMXvfhchZhN4yEHW1Q6KhW9uUCn5LfVZoWV3eEwbc5V6vbBposn8N1Q7YQYnk",
  "key46": "2qaMjXe23sJ7pgu3RE2i3buUFcRXqv7L2DmKBPmMYgPhFCGSz4Y6uyUrXceH2TqwBcoCRWkvYkG5TVU6K4iqBDcX",
  "key47": "wzCquipx7JJsQNgiPZbyWfzL1f4C3nFbkmR2qGGTRshA5aWBuAGMKhjyG22rm6MqY41T5Lt7XiJyAmVBeMbyGwH"
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
