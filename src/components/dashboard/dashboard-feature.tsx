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
    "UoUZHk3BjhwqJ1Sgg9poyCm22ARHT7VJqy5pVpPudTe7A37GkKwaotHXprNLqEifBXQfdd6eMWqDUzrrF6fxUh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "528bckGQ17BGDgh9w2kNdPLpT32jTrCdfbthydsQcdza8qqhAtpkpskBEMDz7qAzYaHBkHceLZ3tEBkCf2eZBTDk",
  "key1": "5JPbu5HFd1BgnK5YQccNvTaJY8Rg9Tx2Q3kNmmuN1i1QmZiSp1h6FhcSSiCHmjq2zbfxSiZnq2hpS8AVMeVFhLub",
  "key2": "5MUaktyVLqCJfizcRrGR3NCh5rbXPwgZKXK6KsvuEf12eivzSHLgotBgFRFMiMjy6D518g5zNuF3AYtDVzqkV3dh",
  "key3": "3tZsXH1wLE8ZkKeiMomHM5t5ZZNGdGAhZ2ZwvMEh6RAkXwidAkoK2fjWTC2WzPTqePUAsXtEZewZ5mokyz1TmXKy",
  "key4": "2VN7Nj9AXP3MEmm9twGgeftvMUvGh6pSdakZ4PR6Lf7zdyk339qvHCmrZ2BvJFmpMjR6CrwLSsDt5KY3Hw413XUr",
  "key5": "3GtgC2t3ZsdTs2gfovkj2Jzz9H937DqqyLo86kyM4nbKUptaWCYNWsAEPTEhXNpdwaN3vjLgcUhuq1SSVrSQw6fz",
  "key6": "57q6nxn3swbTnJkSKfvT5vbdbNP9XK6VPMm3RWiBARdBuEvBAs1pJ2etEp71ESKZssSy3s1EMMNPQvcPvsKFjwTM",
  "key7": "4ZvPhHgo3s7e1cMayb4zxWKAZHRufFZjDF3e8jmRVqQweod3UC7UkSJhmcHWSfMLg2BB8Z42gCyD6zoAGTwDhuqz",
  "key8": "entZFZsGaHN7fKi4hdBz1EwddhreEF5e4ofNhYqhCL54KiV1Ks9DeBeBW8HpqT6m57mHhuH2x6ETJQfuL45Adk4",
  "key9": "2jV6DCDVBBW5HC29wVJmHrQYdCWLAquqSmr67V6UqiLq1o7T4awVwpqu1qQwBvb5KWER3nwh33W7Bh47vXHQDoBr",
  "key10": "42pXghcrQUw8u7SBUKiJRNaDa5aEQ6mQZLLG6mP3gGCsuxipmF16fTf97DbZgKq6GsNpxXFRmLgfZhXDSr1JrDeF",
  "key11": "5YLFzbDM4iRqF6Kv2YuuPeBNArs5y3H2ge5pTMxk6GRuTg8uwrXKfTZgtpWVTPtG5yCRpF3yWLBTiPn7NnPGJAfx",
  "key12": "4zFR6xLSJwwUNZQD2pXHTqn3ae7kTEpYGdnLEzwYFvqZeBVH57q7YLxH6L6esYbvyA2gTzww2JWp7mPNSoMt5iSk",
  "key13": "5iCSfRPcFye63snt996NqvA8dCbwsawqpTLqHcFbWnhjVSZh9d8HC68R8tG7DXkcgEX9nPQYbQDr6oXcarHFNWvi",
  "key14": "3Bk3Tdy4Hmv9isPYgG6aDiyucFCxqXvMnNBT1SweX2tv45j39aqE62QSa66ihdNEv4w3Y5StZFPgJs1XgqQ4b33D",
  "key15": "4JDcWYbdZF3mKaEijGpiPNHWFSSwtK2aqhLE8RYrp4gcLC7f4AgjQJViZcanL63s3gzTwNoqDqpYeu2ZPWM2zCGo",
  "key16": "5E3AWBNkdk8TJhZzHD9TNL3UvSby1AZszFDzwJPh4cT6t64cgUKPsBKn4gYEJiZaMSoiPgWnXRbmNtdSgUohECdj",
  "key17": "4Mj4VQ9nJHqtJ5u9dhDYgJS2bQ1mixqLrSuP6NWQxb7XBdTeB89d4ayUZYKv9miPgRvJqzNhrKco4r58kGzD8Qww",
  "key18": "vrvrkCY7zUM3cqc65twmS1M2RX1FMwjT3xnrn3NtfL2pA5Xn3SZ7sn6NMNt2FMCegLCBGvZuXB33m7AbtpMEKBR",
  "key19": "59dUBxmDkzseNA6wTVRTw8izhrQHCSeLuNDrg4NrCDmQ9zg5w88Mih3fUBrTEBw2jTPqt98cd8E599oqvGHwWBaZ",
  "key20": "LeHvp1RAm9LMp2Q1jGR14sVtBpW5rVPdN4RKjHGAvTm9Wv5VBHWRpegtQZer5jPJQqQBRSTXW44B3LpLj6WUv8q",
  "key21": "2K16sDvvsHrzsNqzwQVVKRwDDZKWrHHXBf6gXpA6oKpMTXygeTZzY1nGTVpKdmoooDmme7GAtL6A95kU6LgFZXYF",
  "key22": "MQevpDqSwhC8mzMVDuNYR6SNfWCo4Un4hDxVk7AP937P5Dhsn6Ta9btKmgmXLhfk9Vea4WETCLp4JiWivR8LHmM",
  "key23": "xtAEF8o4sb9iwTvtKzh18LgrWysEBc6oUkbp4wePQ1PJkks9bt9nQKAuwtRkuFE1Fc7J8bDAcwvoRmpzjr2pdBy",
  "key24": "3eT1W1UuKE3bcarjp7YYuYHjAKXPbfDnnGQRXdZQxjKqredKuna73V5MZhhPdXstp6bGQ5FYBhyRzzSgmDTPQybZ",
  "key25": "4MoVHh2gPDox6EbxJqubx5KnSyajNEvTkBksc7dAi7ExmNSF46NR2yJSL2raFeR83TrWacrHaL9xY9raRG1JkAtW",
  "key26": "3msp5ypWVtQzuhaQZXjf9Ebh2wQtcR2pUpAMWhYFUVcSoYmGHJoW6H1GBHVuKoa6otWkdFsKwZWkE1Hw9ygXLcbS",
  "key27": "3TdGzQfzL84zJF34JnECK2jftm3iVs8t72fyGpTSYqa6cSpFG3SmfmACaBY46Tfn3qaS5yiNtU78wov4Z2hDHUTF",
  "key28": "WiMWoYPsCTBQV9oLBaAausSmwh7wR668FJSQzQvMGFBT7Yc9YYiGWNCpJjE7kCyJhWVDFWD9ev3CJDNPMVyUVnE",
  "key29": "3qVrkXGNaJWy19SJ1BHeKdX3q7Qh9SpWcRsRzjEk35NLjEqt6JrY9cAuSokhz8PvxR9kyfnuXUpJDizVbidyKPjp",
  "key30": "2mzBHt1dXP46epEyuwLWTM1V9YDorfWvDeuiBLCucLdk5k2MiT6FX2JbuA9HmptoACwb33DsXGbTjsTrKq3CGUdH",
  "key31": "5ZkhSH1MDbfuwg9ihmCssshYb5wSDcp759Q3mnycDpTScjFyFsh5iujAeFL2JFCHzLK8axCcTQeovtbU3ArVSv2V",
  "key32": "65831bPB3UsVK2q9WFgaBPoqAzzJTyPXzXnxGx5ksXxHVkspX1UG54i4fLGb8XZqxG4HEErB8DcYBphrtky12SAf",
  "key33": "3eaEDnUmnJzacqh6GyUuXUY2TTe8zyQZG3Ybpn8YhLCg2G4LWb5qmuZXhcJ2LTHqGfLbiYVii2VDFCcLtMReGHug",
  "key34": "2RxPcMYUwRWS6DqQ5saHTPmUsnbHoLULCFLWjATwT3eRQ8sigoC3P4LrnTE9LMDba5XNMXqUQbwVnEScd8NgGkM9",
  "key35": "435XYEKYYrhZYi9eHsQBxNfDYqCzBSMB1iEB11Hpt1r7KHhADipJJHyFJgbSMJ3GwaWmt7pdwXFQz5eq24K6FXGw",
  "key36": "2hZuJdxQ23aSXxEtAkDc9YGtmin4VnpnTevu8nJ85n5TT1guqp9rnYS4GqKgFbazKHMgb8JuaYsM4KhBQjnVyDAD",
  "key37": "4Q12XnnCmnxPGy1siEVFRQ8AWvNiZhTzy3EwGGbTWkAxWBhqYniWakBNzExzBhq7fKL2wm5MUswjdgq1XX1nbX9z",
  "key38": "3mpsCziv3VREfzAgrTKK915dSt9LEqqypE4fA8niLdE2vZBUcDqmbq9k5xQNdsAj9fMcg1UZq3nDURnE9rF9RCNT",
  "key39": "5ZpJED6EJdHhEFRyGPR7w6pbiGW1a3gqyUyfAauAC1A8RUTfdxZUCA2ZsvomhziQasQvahDHLdteExrstZQEgBpr",
  "key40": "2TBd5Ty5Y5yWU6u2dPxu9BcF3qxMcaVFkVTturEQYDV3yXAMdCeA6yhZGTLiTikEy399iQwmcEWrN1T6oSYPRh3F",
  "key41": "2GaMpqCSEkUjsZqangoXZdWmArE7qF5JmN29wxvShXpmMmrb1JFa5TWkMBWv7uo8QnmfmQBSYNCjWLuuSybvFKgV",
  "key42": "2b21Rf2Tk9GtXEaqAGZdv6F86JiJpBMX8J6QK8nz4qZyMRW12fkn1RHsteGy7J4SNEEZs4GHKtUw8Hnz3RhRyUES",
  "key43": "51c2gqfdCEdsd5oZYC3aoKkZihWqVLPv5bNiyFa2YyEG6neUHJKaV932aqo31oTHRFbhBFWpM1T7Cnvmym4sFUtx",
  "key44": "3EBsW2vnppBoJeww8wvfzedQBBsRgr7LFm4FytmRrUS3pgPohH9u2WynEaGRcc3fGuPBocPxRrN31fxoX1JnHSDV",
  "key45": "24rSMTm8Qf5xn7foCCx2pf7UeiQLvZzVcANrgrKKgZdkJ7SuxrvcLhe59TpSh7MyJ1WjheUyTGNQUPNmQXfvcpSJ",
  "key46": "3s8JgJtgq2b74Kvtu7EgwZGWSfLDLALNE71qM8k2BwvmK7pY9cF7y7AzPhP1EMJv3gWG8ctY7MUQv6xFU4fEyMrf",
  "key47": "5Vh3uzD59QHocHc6wY7RRNun7NkMvukSFumTqb6AUPMy7G98ijs9puE7ZEAdk34eocvw3hv2UBBgE9UqCVV4Nw1P"
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
