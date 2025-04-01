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
    "54be2aPPzjbBw1VBH6w2EDGA9Lrr4ZPWWdwjcqiczuMtRZtaLvc3KyNoXazEJdHLyXa6gVvgspnoKUFFqkAWjdRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALpkYJHYxyiMd96SEkQ52igpF9hZsczt8iDQmd8jr1L9reamYQ9AC53nsHxkQ6z37Gem88jBKLwfdxeUxE8UZjb",
  "key1": "3jxW7zdL5VngmquZDARzNdCfu6yWc885eLhPPr7U6owvSLizxfFFYUDF63VD5vHn5CxCnzLnY3v1DoLk67jJ6bca",
  "key2": "5gukcuBT4xPwNnG1Q4R8rei4gdz4fcpJem3AggX4WastqbyAxkZqTKQPjo3t1c3S8QCzNo1BEJjvaaP6ymJfQc81",
  "key3": "4SSGMyMFUsBzsG635Qpr5B6CAAWM5HUZb9JE2g9Ds33XCzepw96QKEXMDmXaNTsVvCSTFYAh4LSABj4ZRAot8bUS",
  "key4": "3buz9YdT2B7VntvBLFRmcDJgvxWNUdKTzzdHe1VRZgbhWTYjub7efhUohmmpZqXTi3ZYAuV8MeurUuQ1tWctsy4a",
  "key5": "KZd74ZB3ZRnc9kaaqB36dqhNLVaKN4ijCtH4qA7zuZqJN9VxEnVZNPnrdEDqiszBiQSC3TVEG2WTShV9xZ5xk2b",
  "key6": "3icS1t8FG7MR3HqJxQ2LRMsJwDohUfiFsqcvaaY3gk2kHbkdcH4RnhJ635AQMiLCuRsWQBg4N4Ab5Z6KTnoQKu5H",
  "key7": "55X519L2gfyrQeWemjVdKAweMYDc9hMb8jQa7mYv5ztHzYppai19eW2Zf2g2AFnM3oQKBihSKEGHPb1SfnRMogjV",
  "key8": "3kmLjbB1NteZojuq94C6QdAxC869UBD7hbH26LeiKJ8XWNWhpisZZod2rBcq7n3WtM3uFLhyeXnW44nycb82AfB3",
  "key9": "4MyWVAyYgYdJnMxkHZhTiufEgyLeN4LtxbSN4A8QYNR2UCcFgcNz7qEk5CmUtmgwGw3NYdZ2JmbCwjm1uxJfWyUu",
  "key10": "gLJGdWrYCKEuJrtLqGhdzp9S2HD9PzDiQ839uE528DCVkSENfUycf68VEndHkNTkYt1MU7H7uNLjSejxcKonyMZ",
  "key11": "5XeyZQY11d5AqvvMwN52qbNYj9LC2SSw9HBEVGwbFYG9kbk42RcE3cAGEyBHzHULDXCTGgpiNe1X8bXwVMf3v3uq",
  "key12": "2M6gb2zndqFHaU6QkxrrZa3MuLwGRUXkXGWT1iAuddGuX8UynfUvxHoRZF13e42QSp8NBok9GRo2vrSSZAGWKViH",
  "key13": "eFfYnMjqPCE552znNwV4amxWyPTo7w9pFpi9gf1q1w5tSYKYsP1CqGM8Yp965nEnjHPXcoFJgpdn7pEirhUygdW",
  "key14": "4NqicqDxULnWgJJHk7VGLo4WPRzYJJ1MsG8BiD74f6bNxkyzBQyR1AgzM678166ru3NtvGYuw6ZWuduj5w8JNPtF",
  "key15": "27dd1yBjSJeJgzQjUK4nRGCmALwNkDLK6XVEDExRGivtnVWuWQyTa2yVo41oW9CZgDTM2VbX8zKxHAkXjow4w7Lp",
  "key16": "3dNgvS1DdemdP3aKacjauKfdAqfyxFge8HNJCSamkQpXxq8pK7kSM7dCa6hccPB9SDkikFXLMuXNnNvvgjZzw2EA",
  "key17": "27PoTudwJzGqdN2qj77KxBda5cwbXDTLa6LsDrdPrxxLB6prfioCwbZtRRJ3vzXUL9ZfDz2nWJQXDwmvteg9TNCH",
  "key18": "2qo2NFhbfUw5iAVmwj7NQ9kRzNs1JGALZP9tbGdHHxr8mVhy64cJ8pYtUnCwRH9Hmytqg5utgJYoB1nu8nCMZKxH",
  "key19": "2rRmcqu1vgVqsmRezssyGw9Q2PQCMiSuGozTYHfHB4Y2M2aBY6WkK3RbyMuS1yEAPpg2kBCXSepDW8uaU5j3vLpk",
  "key20": "44P3kXq8LjXtHVcgPYnkQoedB6eRRE8Di1Cbp4Fobgq43poi2uXRAbWeP7jDHN9rUPAKwhDuC77hzzMT5Fh6GFxg",
  "key21": "1xVvyTiaABriHBgz7rB7f2KTQnqfnv1eMwdAFSb14woP1FCPFqnqhq9rZ8V5DZpbbEWMTVF7UbjcjSLYgs8NkL2",
  "key22": "54zDXofLdBx7CsGwJXSMcr63idyUkjiN45pjBKqb1utbP8M1hbFihr5YyZBtJci3RNfAP7cB1eHwPuQCMpBD8hoL",
  "key23": "4D4FgPDDNYrJeEyTTTtr1jPBicFivDyGUJYeGkckvJrDoZJYzV6aH95Pxa6iopUGiCoL2S9fZsnhPRnqTp8RbBsz",
  "key24": "JsKTwoHvAWYAVGjVYv61f4P3vBLcR9khNZP41m1Spx3eFZmrxB7TQ4LVhyAHpDwXM8Q4K5SvmNsHEkdGWQvFJgu",
  "key25": "2se3eSLXw8RMNNfu95o6rwJgiRTAmRAmKCRTCsTF1UG4Eqfcp9HMFqtNtZwWrD4C5rbf1GzXmznj1gALr3wak2ij",
  "key26": "3pg689FJpNv5gNiaZ3mhHD2bMFRwWnYeqTi1tzu99DuDPbcsVJfa8xa4Sw81SS4Pp1QowsatFaKZGmU9uTY6GrWt",
  "key27": "3DgwwJanJY7QzkaDgEcrkJVroeZC2M9MvHL7KrRFpXBbfS9Nt514Q6dEEM6NYYdVJtAxoTVdKET1dDTkA6MAUosB",
  "key28": "5Lf3hHLgqTGCEkj5KoPPxYaYYHFuJhUonK1zF5gu5HAKpLFxZT3dVFcCh62N7fR5nawxa3RwE8EPin57myGnUdcF",
  "key29": "yBYfhYJooDQ6wpGVw4TQEyuBKggmP2oEj8HGSMmGv3RU5RSnnxA3ym4qpXbDrQoqQD7h9edNRFHUfzhZkkeWyq1",
  "key30": "3YRekmq8G4myMsGYf9YXeepXpDp79MubBGozAoMPGmH5tRn8C24wh81grjqoXuNe9pQ1ad1Phs6CTVUXnkka3T5z",
  "key31": "3k8AQMtobuCoqe2UgDELkKpcPj3SYUA8b8DKTiTN2xejD9xJPaxok5itjP5ewYUb5X4tGv8BMUkodRpFy8n4zACd",
  "key32": "4Ujqsa5g61mrmgCX4R13haFFfXRj6VRomBHt7VBCdfkPgQGPLKUBiJHBPpNe3kvhnAe7c1nuy1RFj4kXk1zD7Tfn",
  "key33": "2FBjP3KXzghUewkNU213RbLAMq8QYHhDYVLJT939eQ6akaSLP6TCewbf5cPLRP5RwK6Jcbsq5Nfb6tvBMmQ63Ej8",
  "key34": "67E3YNknrx7pkaToHbXAEE5XsWKerz6q1J8eTR4MsuoEReuvHqTsaLxVJJr3KqJEVmwibkZPW2GG65WWGSkxkPDi",
  "key35": "42AGu2Dm61TUVT4TeMQ892Jo4n6djxsqsxxH5oijMoyVGZGcw7ENrhZRgwhHaLpVTxzmLax61X7DdaQTgo6WbjSR",
  "key36": "5whroki8rN77qfmjqMeGThwtHkB62sLsVchaSJtpiiEba5ZGpuHxiMfW5KWmTATrrb91HP5pm5ABhVzdhmy6nMms",
  "key37": "M3YCyFNAPK9SLvT8XBBekWVbZaoGwmh87Sp61pbBC762N8BBf46pq5rKPMA7BLsfhtJ5AdqRLYMkKZKSkyapdzj",
  "key38": "titJokfjgUty1u4rFgcdBYQ7cjpKz9ZkeQDtsyMoamVNRsDC8qwMKomqryxWi6SUGK1w3jSX7GKHwYoXt1paM9L",
  "key39": "4uLsWR2sVRWv7Qcyg11JHZgMHhEERfyvATnNHp1bxiWLoeFDNnC52e4ESwzXmmczzqNkrn6dVjLz9vHZ9HaMLVrs",
  "key40": "5XjmW8Da6KqNaM3gPHsPj7Yh1sYvxUVMz41xJdDoyeoM3RUfxp1JVdt39Q5116XZVx6zMEDkDHvqu6RwLgpamvXU",
  "key41": "4S7GgnwW5UvTbdbFeQXmwttfVgaMBHZZPHQGxtE8DPDWVTxT9KbZBHkWwg8Avveci3j691D8n9qaJc6hf9Xfoq46",
  "key42": "29T5pC3TfGF1acBTsnuEzkLEb2Ej8nPU9BUxYaGCYA6epYvdf8JMCRfp5QcUcaxMJR8zzZxs3rFX3CiAEJXJLvnR",
  "key43": "5eKTh5oXEUFXJhNYynaFHJkVkt94qpbxSsYbKRe956mG556hX8Jed21dgdqP4UchXTk2VYXDcK8ZnPLDy7BXkQyB",
  "key44": "56mRT2eWRx3hP6u7T99Wcg7yQR3v9PLKStkTJUPfFeD4zxoGkEnhMJojnig6EM4KQFGxNizy6MfwjfkswCTBUUGL",
  "key45": "3344RxH1c8MtLrWBRjDxDKS6Zz4TiAxyfzRaFaDSTWkFa5dmPFxX7Dizms6aWbJzESx46xAVxKgN8GSP9KHxhaS",
  "key46": "5dr4rsd37N33jakGxDPjS3jT4kkkhX3NTHk7NF1nXnUvRfYekMtYqN67eXHnGrnsFqPbMRtPRECNzWv7udjwer5y",
  "key47": "54SKWdj7dUVxrQ7rKvw6KFtN8jb4Ricvy794xDPPjYFzadYbtc9VKLKX1LrzArhHU3rFVp3ma5Sr38uBv3emeA3a",
  "key48": "4yX4hWZpgwTtTY1i8gkUPtmiLGfT5afDKx49iHEN23HVXVcuHjajcRCRMgz6jGpQUdHLBsHCMqLDwGBy3CWFWhsb",
  "key49": "3G7pUQ34ZUVFw2Fr9kmpsEPQVZG4HX7yaKKyEVTyf4H46pmfPhZj9cg1R9BffBupM9EXPHnxupLRhvDY9vRr2bad"
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
