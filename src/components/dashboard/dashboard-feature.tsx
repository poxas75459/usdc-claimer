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
    "4qRryyRSMgH3cc3f9nwZzXJUP7y67x4FtyCcFqQ3CoYHzTAEKDepQptJv26PrDonvcQK5Z2xHZZyVwSDRjwVQSEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbdE66KBZhZDaDS3QZXXHUZVP4XEGC1qjQSkUkVYhj7hGVQr7jg65FgRmgLDVdk2FatT3StKosnyjeoeLwvjd9N",
  "key1": "3u1zS3g62HU667uZUPjx4Cz69hthyomaoCyW2N4aphPcFLjaCJDbAzQ8xagt5rp1e7eeREnkLgqLQJ32tBDfsxNo",
  "key2": "5F3UsoTPtPNZ9DvPHyXosuUu6cXp8R1eSwYTjViLgdJ1sQRhugTxi1gSEiN9eBeryv3uKyVpJZCpsB1tcfeCGTyL",
  "key3": "2MLFATdig172VupFYfAGud8cQ9Yp7tirhHNi2aBy1GAVdsfFT9aZBhmfhkdtrZjKY2ZkKNZqUvi19iN2oWKaPD7X",
  "key4": "2bdBnd8Y1kBPoqaNGNnsg4PBkkuDhzJcvBLhDgwRoWq1YJgGPJp2F8u9a9mLZf2xFDJjCSnaGEg3iZaTcf5XBNHo",
  "key5": "31jj6yrJ4FYTSi735rLRSAzndTxk49dpZCpHfxZH1r3FMaGRqALsKub2WKLrsWTudczK3QmxZPghkLJ4buJ7LkiS",
  "key6": "2cCCkRT7TRhnKbHesURMmbXtdxWtZ8GSeSMPBN8Po1pABSVraYPPKh6sQR8GqA823XDCnWrH7327SnrBqUwDWFje",
  "key7": "3GCAT18jVemZmdu3YZur53bfRmYxrNxKYJd1sGWAXte739PgdEa39pBUfgk5xW4Z61LjuqXGLCc6YgCxYPmKzi1Z",
  "key8": "4X9pjR866LSCdSuUkF3R8CcmxUQ4pDyMdeqchairfHQ5MC6DaTRiGGmyNS78F7DwxRWJuMmHneRtetPvGXeCV3jB",
  "key9": "3wWQFf8udVdXrcVPKqZKyd4QxxyxyNijbSAjVv7MxUUjS7VTKf6r4hqe35NuxS25WfBzm7TQ1FpVFbfkV3UehGLu",
  "key10": "24Rxp7irFn1oMaHUXfyEMHnATPWD2e5QJbR2hLoyjtdiNz8UxzCM7pNDEpfAHwA1MVvfhbs9gJHbhfeRRjhgKrcz",
  "key11": "59CGZqQUkF8K4RSQuxApWLBse2T1FVHpw5AmLYxHjWC79Brweo3FBAN3hhLTBPG1CQmZ29Zn7tynpMdAVYT4EyPc",
  "key12": "3iPLV2XyoQp4NA1G3QnPV7PfCFCYoujuyiqnpatgwqUvHCTStQKYADnAojbhrhetVknzxj1hZZGZSfxCzx3BYvH8",
  "key13": "p2nyUKfNLKZBGsfZ4b57Mhwgwsu1dUDgqx7FGhTEJYTW8JXRQk7QSwHvwYDpTqmTB5B2xokzqUKxRhq6W6notxK",
  "key14": "2qtPbmanzJh1uJBHjk8fUDBtTSBGM9hNbxtwnBAmXdXdwScTyvL1Fw76xR2jmKnQsbTnA82cHXrtorsPcyVEepX9",
  "key15": "4n1sG7rCh86tvFuA85hP1bd7BzUsTPzj6gqPK9pJt2JiuG6r7LHcta2WqSnYqMtfcsQxYs2UdkMXrcCqZyc9k5yu",
  "key16": "2CzKKfn5Y6Bba9NE4tZx1XMocgYwnxHiYAg4eqtgRnkkHgU7J6hvbyu8FjRJXDaxZ5hCaiccJ8Gx6ntVDcpDohy8",
  "key17": "376mmxLkKiZMJTtvxEfrxxFFw9gNsQUVEUbvvrePjvDfmcjsNFyvcBHQd7d5ewwtgDazQMZnijydvEQrBT6EevME",
  "key18": "3oKYtQKkVyU8wACdoELhGkGQBkiNACb32mTR2ee8tAibm1bAQi4Qz31jFDF4m3QDYTmnY14cUxHcB5YDoED5DDCv",
  "key19": "3E1C2srn7wFMCV1uArCUEtuGJgYLTsAZPSaYUrV7vYZFLZppZGG3GpR9BZ9BtkyfzPSVcaNvxk6uXc6PEwxyV8ub",
  "key20": "5HeL4BfyDjvn5ZeTUnwD57fHgXWMWWNxVbm6QkGZDoqeoobkbKusEyjGrsJ3RnWCB2qkGkL9HGuK8VofTccrERP6",
  "key21": "5BWZzBjt6aDP4qaeCGgCZYSMBaBJm9LGqZYvPiST4AV6kmeM7un6CEKHhTr4bSjRrAtgRMLHQocFdaepdhq6vpVv",
  "key22": "365ZwidmmwAG8oMokdQYS7whTJbdrUCf7KVBAELG4RdCmMeNiXgbyaXFP2jyWadJyYkfSnFBNYqMMc85QFZZyZjR",
  "key23": "4SxVWbaZ9NdERCkUmgbJN11mgsYQDsLUvaWmnQh21FbsMHzYJypprWfX5SWbseuGJsU41fN66nhtLY6Qidw9bbXx",
  "key24": "3ULePpQwcqLGAVTDjBgkeEfi54S7K9TzF66PChNgtBY2UgeysgooP1WcAYgWorkdDsEByudWk3AJHKHsxr18Lvhb",
  "key25": "2NhxKPQz6256q6r9zZovLBpBJMqcf2Qim3WafsruouKAfVuAbxgL3pYu4a1uFZV4fwj3VH6nLgizujMr29VcJK6c",
  "key26": "38fC1YpmnjFbqVFTJQ5Rvs8h3aoywPqhZvs2XExWqoS6fB8U9BLNNiYyAZfSteFi2BwvgrNdXMRpyw7VYjUCw6b5",
  "key27": "2fFkWf3XWD7zL29VKixFed35vsiPbxrGA1QCFzckkoy4TdL8VFmeJa4aV3CYgKAyDmBt2qihEArAYTp9ya1uDaHA",
  "key28": "5rqvuTpVcggkPzLzvP5YiT6x5rNY8MJURHEhedgm2ABGTvpNkMEEC2YdzwXFGZ4PyVbnKFvWpkiLiQVcuyLNbpoX",
  "key29": "5NsiSnTz6mYHHGLuTiYGB9fiSfiYj64DzkNtg2rK2dVRsrVwZ5xDXgkqr8aookfwJoUmJZRJmWwvXHmszsquZJVX",
  "key30": "3KmoJ7WSGFZ868tjz6ZBMWKC1xT63YK5mYCagVRWaVDbBFNzp4pSTVeU7G3EEFUnjFNT48Zg136rRVWyswn2ueS",
  "key31": "3xp7N4vgojXAg3hdAgoQLWQNTcv7K2cTBPHuVBBy4Tzy4WFjMatrxDu2czcTfYHkxajhy9gW3CuGJJE4DMnAXViX",
  "key32": "5fheBc7sm77dHyDrfBVDrZavWzgNwi5kGK3EUqUj6Ncm8cvyS6XiX6pJVvf7ZBL8d4fDYvSnJkPRWzp3Xtbxe64j",
  "key33": "5mw9beX2Zb5vD6pyKFeQ6U5zcAcrSMH8uzyZ4MgWKy4FgyUSctgrgRiYXyJqLwJXpHQRBEtgrdCDGCC1eymCB2DL",
  "key34": "bK5xLP2ARdYzdS4mwrTJazvrsY6NzkzDGuf9o9MSSRiNM3iw6itEveQ8xkDBnt2WbFmvvffVFFvds923tVkejJd",
  "key35": "3P1GFXF1tp1VBPeZxjJSxgfYMYk49XeMyA8nbZ33nXod7FrdvFTjWVos2xcQjRBcZq15PcDTrSqiRSDDhszMTK4W",
  "key36": "5uHQQ66KpGCfS61GsJ46CNATDLVD9aoQmJ3Z1Bd3YadjKSDyxLUSiSVRZh3CZ5fX8LRzfTTXa7sLgajHtuMoZBvF",
  "key37": "5fB5b7DGzV6dBwy2SGVLakpAGd2UEaPnp3E4DyY6JVZNZWBXV4AYfghULmFNs5Bkf2eEMjJ8ujtr9jQT8GovWLXt",
  "key38": "5wdwup31CBG754es3oFV94aBG1cLqy68gB3yMsepUNJDwzWJUwbPe7VyMnFxiP1MY4hVhcPYdSvUVKD6n7Qca7gj",
  "key39": "2N4upf5uMSqTmSTin5stUynxFnTugppLXYMBqztutrViyaxyhyywFwrivRSXdJj2gBUZ6Pp9J2TozKp6aGG7qTv7",
  "key40": "3XSNZ2vZqbKpwkhkhxrYbwE8amgn3kfZ4zhrMK5dE3ss1vEg74L2gubxmZe9zf4pURHLukZgUpk12wi7p5YRbxpd",
  "key41": "2YDZqiYvfuqFscBaLyVnDDhKf3yjk67dBvtCQawoVtrQtp1heHybPsE7EH1mKG9i7awx6pamg1yiacZeH2LfMCRJ",
  "key42": "2rKfJDz9Pu7XH1CM8TNFFN846WvGSLYdPMVeQNHFz55U1NnEqxJrG2qFCJrJsLRWd7x3sr8X4srzGZgAETUaJwt7",
  "key43": "5iqdooUZjbfdbE1VhQFReAcZXQgwa3taHUEZREc7VpFASFRqE6KAmxd9oz4mm6TddxV8t7iQeF8NAD899P7MDXwJ",
  "key44": "653ssjW6KJm9b9xbXKYhg6RKK5KfxgqSdHHR6yNKKa4PRdcVh4hNRNzja3c4P43VnrvJTWsSEqSgDH95P3eLM6ck",
  "key45": "3H3smmRrN3HFFkctpDVJMCGafcwUG3ViGUfBUKf4wgktvywYCd2rPPEEMtVQ6c459wg1fEtf27KRwjmzcU2TBXk2",
  "key46": "58gF34TdWT7Yjw36HBi6m5QVHVceGWESMw8SJXG5HF4ngT8fkCHuHsfe41onQuw65GYbThHM5qUeVh6j1cv2Qhdv",
  "key47": "3VS36LXQu2gMcdW1X3AL85jXpzHgz2J6fbv6F84vFtNwZJWLhSpcaSKxfCYANLBoEyS6TjaLkAvmd4v7iBeugBZa",
  "key48": "4eVRBCU5fhsCb4qCCX4vwQGcaaSY98jqFzNxhrZnad2gUnCoQ5oJFqMSo4VjU2G3HhLGvC5zcSM47ZZrWzyCtFvy"
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
