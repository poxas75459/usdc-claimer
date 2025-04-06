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
    "24BqPcJW6CPiLR8j9991629cMJPmTBpHR3UN56P2gExfxmKpyK7BZ35XwFMTLVGCMb111PGq4Ez5x1hPT4FFhyLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358tr5WsMCX4veeqMUd25eWqompqtbGHgpmHDThfutJsBDkdKqJ5dXEjzbZciiKUyeSvuC2oB6FisfprMusEiE1T",
  "key1": "4pYpc9zudASvMe7o2fsgGWuQ2KfKRYqsy8pz9pPszimm1sXce2Q7DGHkMCSuxRQBzjPKGkymh962f4t82XLojQG4",
  "key2": "YLWuDTvPn5FbW3v2NgG72u9WUjE7XWNiGiGo5ouZ4NMtKdspcmRpkQ3hQyJCS1TrTxR6ne2DeJtfpxxPVt5SDAd",
  "key3": "5WkYuzJ9QEYYnrNRGAMVsdzXoctohqQybrwXkB12ekKummoUJcA2WESsLGSrrx2yrY6ErQocKdzP5r2qeYwkeHpx",
  "key4": "ovhcHdpiyAEApWWRgcWcyckC5V4vpyqbcgBWQQQVSTqK8j36qn2whQLxHeqpHK2Ev5nDPMLZr6KEbUZLTiBPQ5N",
  "key5": "5gHsy7rs47QXxCm3UVEzGRpzu4qTiiuwyiXA9o5fvLBf2Ud9KUxV4d9LubVZm5fAaygwf6AHGeY5QpPCWzqM8iXm",
  "key6": "5Tf2h96Phn3FVnUD1Gf3Vpw71teN13zWTvGbvBEgfbEmD9Yrr1ykb4v6mNRc4htxxuoQo4NzyhhNRPh1vGthViyv",
  "key7": "2o8tV91ssZzLpKNTcUqm2zQnepi5nbSksojmH2RmfTiQ8JWhGLqmH2esrPfPdeeVTpPYErCpWAnGraejb8VSVpaH",
  "key8": "2vrgJ8voygE7T81NKTwYStX9Pnk24YsDwCG6bratFCAU9MFT6NvpLfF8VD3QwSCx2R87Ru5nVW3NvJxgEfe1AzEG",
  "key9": "54p4fHuEyjZpWf8s6chw5yxBzhNG95Tu4ibQZwybkMsiZwbWMphGEh5UJv5Qds8UsGedoxhispWW3F3Bo6cdYYuw",
  "key10": "3MaNzZjJGMb9sA3BGjxSTsccadQyvyFqDWSHgPo8tgute7adQBMbyoLrMscAiXno6ty16bKQ12M5nSsuBb5Yj6wc",
  "key11": "ehwy5AiTziA3SG318NLMLGt8VW6XxMY6ucdDqCV79jkQodxycrSaAoh4THtv9JWpmMZcgr3UL56pCdyxWEPnfpa",
  "key12": "5XmAYJwasZnuVUFGvbYuKVAkjY1SEGhWQHYPf2tyR5AESK3o5rZ7rcWL5VjHFPTmzDPX7kJT7VLePHpQiHvhXoNj",
  "key13": "NHWQhqAsE9KRjkvhvncMbuUvEY4ENDdFFzjvZGJHR4RKUqHJRmg79AaM1ZbrEdiKwqDbZbr7Tg95jpJ8hhPZDcE",
  "key14": "HDpj9aFUzt7Ct55j46q32Rbr3F4QUrWQmpZrmLcrvxTX9yM5gdWUm9VuLCmVN7taauzmKqWmT314uMGSCzjmudf",
  "key15": "361GwkxaTtnMCSj8Y5YH7zn7x8pKzpPM5Mnmq2D2D6PJUuE7NneBvKL3vQCyNKiWoaCpYkEdnib7v7yvUwBRmeyb",
  "key16": "2Xs2AAwqAfWPp98iRRkXjc1Fk7rXRkX4Qu7h5fJbNz2fWSGajK9zAkHzxdZQQpS4SCXypqKe3fV9ZwVa9mcK6AYB",
  "key17": "2TCVE8e9iv6f436n7qiE85zBs9PQ1e23JQC8Nxq2pqZ9FfB3e2Zqdc1KcUwq63NcmtMCTNpYHzUT4xBsGHbowj4L",
  "key18": "yqoMNzbDW5xuPEhhDvSr2YNJqF1qp96aPkkjxjnjqNnJRSLgLUBftB3pNEDsMH4k5Kq87qHpDJw14YSbH8H6obh",
  "key19": "4WNiqJ4cosyk3MFTj5Bx8PkH5sDi8ZEhUqxvBN6qZ1KPCqx4te5S7QHqTx9NYjKassRB8JeB38dvcY5DN65fBday",
  "key20": "4uVupdPfkzVV9AkP643z4XcxPLSbEKwxnmDZ9iUxXXFgfUwENuW22cR9yC1NQnUTrtc93jdVP71xj54atM1tmtBh",
  "key21": "p5t854DSzQCmAkh42b9tMw2eRZtcYptNSyZWQoC12vEbwxLnSeMkFqBYq6ieWDMwVpYX7cu75yEMedvwSPB4uQX",
  "key22": "4tirTdsX8kDqcQFvqVnWMG3EzeNznNCgwn8xEsf9rBfSEYhLv2b75PBFP9UuBcoKT165PQM8PrcTgzQTtLiWyhoP",
  "key23": "2DcaKaeCPtwGoCWhq2hTrr2rfNUjEqJ3iDuAHjRKfqPVceCbm79vcNJrYaEQsve8Q9463o1XFubRBgcavp7ek9N7",
  "key24": "5GS9XmTQLafBRnihythvxSE1FyXUfMgfbLAUw7wsLrQpLzkwdXY3ASXKAE6fRnnxpQLN8Ru2z1ktehnoK9NUNVGx",
  "key25": "gYWiqctCZB6CTMCBC6dDVU644dZFod1gWUYrEStv3wMJKg9U6mQm1r2AYJ5Pvf6L4U7SAAbah9QE1oD8jRTgGG6",
  "key26": "4CrH1emfB498sj5niwuawwEeXRUyoAkX7VhSUjky83qcVXconjtavWGRj5of74CwtCFTeBynVVxZFyx9LvbA57Cb",
  "key27": "3LM9jNWeaswoJqcoS691gaxmWAYJrwag5JiHvoj8gkBwPne9hd24jGQnsoanjK2nyZjWFiSubNUEzfaDJnonYaD6",
  "key28": "4xkd6BRueshoRowimdDUTE9JuePpE7k3TsMxEVoED14knBrNegtLB1HiuMrmitbBMxaDYerBjuZpP2AcFdfgKz8j",
  "key29": "59WF7vRCLeBRotsD3sVfhws5AG2M43594Gzcftx1ywicom9N6SB2qT58zZEUx2HsxT1H8TpRfF5sciug67bGrf4d",
  "key30": "Pqr8Q6H87EiZtcSSKSi45yoPcRsdKm6z6aoviapbrNqwgRfdf3LeMeJrFomSdVBqFdNbAp8NpzAC7DnzPKg1UHf",
  "key31": "21fj7fB2axA49psoouXcXi6RULLnC4NJ6qVktHMKbZ3YdYVdQyHaz9xZZ3J5Mz9qv2C9AaurR5vT7aa447Mqwntq",
  "key32": "4tQnB6QnXfRvUiXULMJUPBX3cD1bbZqU6S7u4T5NkVz56aNFnDnh43GGaUGmb2YhbQHqR9bV6xhQWKr6Hz6T4ig1",
  "key33": "38D6FryJmH3rnjhNHEVJfdaShyyRnsZPSgCbK9yxpvg4wjrdBUYQWpoAexPPNCfjy2bYJ5YyrBf7VSJGFtRdnu3n",
  "key34": "24b52WNHovmq1tKz5qwk1rxKABzy8TcAzgvpB8gt8phMcNDBerxDidsn6q8QjGhqbqBCb4KwftvRvgzXtyWRyVtA",
  "key35": "2oTGLuiDEXqjz8ZnWejaHToRoYY1v89s268yMoTnJmN2aWtrDpR6oav3SCdD1VgRZG6dFgSkFJso1kV7WQaLqj6G",
  "key36": "zNm1zztvvdWWr9vdCStmjquX8bzPRaH3w2Lx3UDzRdCoZTN27Eqqift5KuZD7TgZxzMpDdG6iJVHYrL6KjkmVGi",
  "key37": "5FzcV8mS5QY226PSuMHNAZZu7z2qZpkL4Q7T9f4L9pnrdU5AJAqi87xfqC1vVbN26aq23m9kj9ygYWfqCyWUkTBN"
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
