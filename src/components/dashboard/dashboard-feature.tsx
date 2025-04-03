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
    "2cZieRa1sGXntpmHqMo2u4EyHeej4Z8vwSWtxBN8AvQrepYRHTQHkzxawtes4oCveWUrMLZinjUFhTiBAhkoN2H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mb8tm3dYa15Hj8Gjvqss8CnMGwhQkibTwh3qf1566qabQMtx9XtfV61jCbvqvNb5fcJMk7yeH731ns49Z2L5bS",
  "key1": "4rEB1eHAwQiDpxxQddeVgRYnG2st6cZzD5YPdcTBgUzzBHrivW884wm84xnn89qo5BSEcY9C6W5yggh5V7GQVX2u",
  "key2": "gzCXjgdgVPtZWgqhQiq9MdZehxnzb7WSTZiX9fVc7bNxdbL3whMsmM94nMTeXwBXpGg56rVCSf5cVXGH1CkDRZc",
  "key3": "3KAjnibamEJs9kJq1c554Tz3tbJaupVTRJtbXGF3bEi4Rcsyutn57BP4adktR25j7JrDshPEM4ANPHPKiA9N6Zuj",
  "key4": "5Aa6DmscbjVo5sdLhK5MFX8D1tk8vyy7MWnDQJidMj6wRVufh6vABH9s1MAfktmYknKDvpBtYaEeXK9pbZUjqv4p",
  "key5": "WRdsYZZyh74s1xAJNDcbrC98haAHinuSDMKkynJEzDrpGXBdpXGKfPWnmCP9GWaV33MtXDoxLfCSA8T1oPxskR7",
  "key6": "5RmXNLEt1hRWDJSE4owMtzJaa7xf6QXq1DQAC4grUgzBin2ZTauLheSNt4iLuy5UGhuGDB8Ynt2uNFbMdEy99Lxr",
  "key7": "4LXu9AG5hGW9VdMPsFEepeHRWeZPBdCRV5bpxNhsVm3sAP5BYBSU1sjgpLA7JCocKXcZLPZQLdYzj9svkJW3yM3Q",
  "key8": "56gercyh8EPA54Q8rFE98We8nKPgBpmh83Di3ERZwmCcHkCLBjsgEN4Uut1CgwZGX2ACuECqP84nLFSA2tL54sh4",
  "key9": "5TGcwiShfM4D4Hs1pATXgoN2kVYXE9MyuntgoWJEK1CmJWri4AYzAsyAdgzf2g8JMjR9tB4CGtD7JBv5zARnwkHM",
  "key10": "QjUxnsWgAwiq6EGAJQjiztnppAkoBP5PERMktcekeEuoDJsUdsSRpnY5x8KubWuYhPFcK8JabAbaTeAHNYD6wWv",
  "key11": "2sxido5MLyJjFw5qktBxRbUZge5ucL9KieMupoqPWJ1d1CWtmfnB98vowQFmhHjDjQakNiNUsmQAno7UZsPBopHc",
  "key12": "7UnAYzZE7t942Tf4xykYT6m6ShSiV6ZUKdq6hx51sTa3ipAQD9GB8vTHqfkdQFA8wY9G9bWKsWehqJ1dFH6yTni",
  "key13": "53H29faU41rDqvmmdhNobWz2WdLpjdtH5uPsPFVbq7RTGqPsnWNhRY8uMy9JYox716BaFD2SRckkoLi28tprZdib",
  "key14": "2jaD5LpZjEzdfZygRVVzBrLqctDPHZZF7vNSR5scJ4M5MdGB3K48iuayAn5GEb9WMCQJZXjJUyYZfYpoDSKumYWZ",
  "key15": "4MsufsHvnWBdmWUGSQn5uUqbqSS9VpjenpBJvKpWaFEk4mYXtWgtuZ6WG6yFngEAV9okbPyuSEsqSt9DcYpVCbtL",
  "key16": "haoYoftgEYGZitGXrt7bvfMpPwYMErCVXkstKWb7UfJDWktSG2W7zxtdPdB4DABWf3u1AULjH7D4JozPGYDJQjP",
  "key17": "36nmXqjxJnt5RxG2aYS9thp7d1MT4qt5Dav32rak4NQTvW43b6NkvxYCwSZJv92QvbZU5hVyDsnZeHFEev9VhRut",
  "key18": "4ngyYqXFo119u8twQ3Cpip2KxvyXrFvGbY7zVNrsTyoJv5tNFLTJDarZecSNCRG4uhJ2ViH6BJv2zTZFgHbRfKYu",
  "key19": "5rE2V1EeXeYEyVJ5DiADGUjfFmeBqYMihnD21yhW4HqyQ6MCqXSespAVURaLBzi6mSQ8XPC2ipYeaCpyUbMALD9",
  "key20": "4FPmqUpCfuDf4vL51UdkQTzD88PmgDf2BNdsGgX9CUivGKFL1GwTMxmULHMLuRaVesNBugZH5eQu2PL3bSUY5pTJ",
  "key21": "3pd7BCghZ8fcM72urZCiSQTBK5wreU9xx3anecNjwvVqwoGWu3ZaGdYd5MtmiZuxfSFvMhSzzd6L1VLD8orGwWvL",
  "key22": "2nHxGoSyUthBUPfMTK9Gjpu8Q9yNhtgdCeqvPDU2yZ6LvoZuRWc5bDKgCMDFeioKpWQvv7wWSGR16dfczxYiaD5",
  "key23": "BTVdH2U2UMAHsbAQwJeB7ZZSPgk75gtnyULWCu8yUhDjLp9RuLjtPSJGqnJenKe9mx5uEQ3AVg1VPmdc3bb8M6t",
  "key24": "3wCGTs2bVWrogtVDPdHD9V5znoLjzmjp9KHcKobDdnPU6Z6zoXyJK5mKK7ceHibtLtpaop9aJ2XVXSbwagik6bgz",
  "key25": "py3TLJ4hkDY17zTyCaAEopMMDbs3Tadhp8tR8w8N7x2BP8nXhV8Bxr6k51pwdVtKqrTKdNTxBMv1rqDCzdA3NDh",
  "key26": "5GtMpvaGeb6FRTAe3dyJiZiUtyRBqLjGb34pWUNPy9QsrBX1n7oPhs2Ku3GYb8CBCrr65VixSaMxhJyfcQmsyDjt",
  "key27": "X2v2vQ2Tyr7DCJdCKtLdrMJ7oQjLprYJcEGgBudwwfzBkiLyb8vUsxhZKKJ3YwJKBGHcvSsYG7aDXpn9Utdv6WD",
  "key28": "5kmRZ5LawJef8AiJqEx6PXWfVhuRnfZiwCwaVgmiou4fwHb2rzQ8tB7FbTJaguMyswNJ1on2AnRZapB3ieM16zuk",
  "key29": "2BMbARNGqWrn16itc6FBpEMz1rXtjDRkeXBcbL1jWBmginC9RXMqkR9KeDC7pPxPpqkhhjbS6rE98BA3uvXRYtXj",
  "key30": "5aeJkJ3Rxh9j8quptecbm8mp4RKBpPb6gV1v79d15kScvh7sd18SEpfc9iXexWHYs9rYkcRMoQg8yUXqbHLHyw9e",
  "key31": "38SnAkxhK2BDNSCPsc4P4Y1k5Esy9ukgg9XEK6E4nUdJ78u3BUthE3x5FqJG62q9wgtzPhymEQw33dGAaVVJnRkx",
  "key32": "2dYhh1TugeuVCy4ANnp7zZrkFSSyf7jhkvtJxXLK5Enq1VGEXiaUtyKf65ekcFAUjfX394hqZdNDGRmbGcvjVEPo",
  "key33": "3wsF9gsW5k6R4E5nDXsz7rM56hbMQWi4wdX3BuzdgeqKjCZvnubnXiM8CP9iSmiAQNW7S5snwT4v4FSxHCMuiycD",
  "key34": "4VauEs4q9LLjALAwzJckqB3AV5FUi8sM3CZRMwfJsUYCN6tx4s4UfWaGLmRzUZ9X4oZLdr63pG36Y8MY7uGUsKC3",
  "key35": "34Uzao3Me1o4Fzh6oKoAomk297woCJtmEPorCQn5n35PyQBybRrKAqHc2VoEp9n9v2jeYddEsJj7crDuzyeqPZnW",
  "key36": "4F6Mcma3XLihDXWKQZQiwRsx3Pyv2mxAeSmWh2qekM3AMa8j3utDcjXpbEUsxrE2u7ohNTpGkdx4wySFvPJhVGZk",
  "key37": "ARyXLBWwhCu6QnX6onjz4GhAmrAVW4JVaTamHpkHB6xZpCaxEgdkJNG7FnrnmjrMjs1kjmyghQsDWLcG2KfmriX",
  "key38": "3EtzMRjmcumWfmDbq3nhQvNWDSqNjXnZVwVzW6uUWCtk5v6s5AnaPWwatvRMuwSKhw3s6RM8w4p1DbunBozRby5F",
  "key39": "2MKEvT5RRQSsZobr5rRbyF71KiqEH3yPR9ZiaAvS1B95PBZNch2EgL36Pg1MCzPxpz7L57CtcMF2sT3Xv6FhWDgb",
  "key40": "2jGZ3HnvPkJvfBiRsipFdtsKkYopPoRqsquC7p92Uou1rqZ9NFTUapoLe7Cz6BhM4zuAzGmNdJmif9J86vXEa8yJ",
  "key41": "4w24cP71G7bXYXYMD3YYnoaB1XrTE82mHBk4fckkrZNPw5tjncxzdN3WFipq4Jgpb93QeyPJoBNYpgAqAf86epTp",
  "key42": "2xbRmkYrRh8gkBVixafE4HbH4aDWbcqFZbr2omjgKvusZjXwuqocca8m1LZ5DWR1uywNJx3M2S5cgwMcrZjsSLQL",
  "key43": "2XG2VpfaE8cTCoW9D997wtjHFvtD7mssgFj7Tgvsg3dFgpHSyZcMXr32aPW2LSeTq1P1Xf4puEuojznvbttgEvcP",
  "key44": "2fwBkEQHWoi85oM2n1q37ehaqxXc3PR6UPRSrXGxoJPYxfjTG9ZL75SjqqojDuGYrZPMD4DS9ajHvZvAXEEScdQW",
  "key45": "49qfCrQmfjCQgbV9qyTH54b5jKk5vA4vVeMtM4zsiZjr1E4fp1tVjhyxsu9xFrfkRpwWYRPAWAqMweVNgfgsX3Xr"
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
