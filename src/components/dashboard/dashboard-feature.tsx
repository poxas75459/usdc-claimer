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
    "58Cda5vnMzrBmJ7dmpYJZt8TaMXJihMY1x1fQB8o6hNne4zne7WrkUNDM4hAyTSkmwZXUXtm7XJjzHWgwuFefi7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPFq4tESAPrWkGzTouvKYop2cJGhm1V1enaSLNvAzY8pH1AQucrwSNtfktBY9bDhLbdLsmytL7wn5g5unFpmrZb",
  "key1": "29ex9voy9TxLvgKdxVkXfMeKLUFngLGqPe5rAX8ZF8VR3KXAVEyHa3Z5fdoLoiKV1Yi8BCqedk9CoP4DDUkFrtjJ",
  "key2": "13dW9nEjmyxz981azkC6uK9EW3to8oqK2d3GwC4Y5WGYzsStPqJMhT2gZ2a7HR8JWSYbF4t9UDC1fWD3w1DPyV6",
  "key3": "5aV9GunfR4cpUArjLzjzzyU3DYUFstPLr4hx4ECf1onj8wEekb8AQd5LPgXJhTNJ5d15tLGTopCmuzPEW96KqPkz",
  "key4": "4A4WVEmMDN1znW5JbzhgRgEp9BhQP6nrnMieuEcA2xdSnTao7cnXRtpMN46iYyp4jYH4qCQ4QMQAm1p5TryDDPz7",
  "key5": "2ob56CfwA7ibooadzjnPXozCtL1W9hHz6wM4uQu3r6TmNvACHMZzfbBXX3J2ukExnnid33Ask6D1kXkgh76z9Tp4",
  "key6": "588vhijSjbS8YQCVUtBR5PurrVjn3oMUDxTBynCZvaKBH6CxHG78bGkbjf81jPR6x7C5aP9EMVYrz8UyHqoSxQ6E",
  "key7": "4sJhDj8xqbGSP1iDH43n5JyfriDecDmdb8s1Pf7wSHcovAtTojxTVDwLaVwCsensDTnMQoyVoKYZWX8Zj4DQ3m49",
  "key8": "4G9oSxdiExxTbrWX9vFbCT7wCEe2GRs32ZxDWrxPHg3vfsk7ktzFWFTe6yugcMLovS16qbv8dMsPBYca8uGhSRdM",
  "key9": "5NJzJoEMdCM26ky5H3aPikFJ4K96VTLBTLg2oSU97gJt2bxDFEmPyrcBScZUbSn3aEFhVS2CRczKR7Bng3F89to3",
  "key10": "2jeMAS45i3dAYKppEKy2yjweALgeb37EcVnEYSx7DRk9FQ39Fj8BdyZpqP8MoPZMYrZPEy7Q4CDxh6t2QBavjRFd",
  "key11": "31mvverGkixpdWWcAVZDeDPnzpGkTp2eVvHAQqKEqjjXgtye514cn4KxTTzFRqdGnYjdf56DM2Vb1SRG7ehY7J7u",
  "key12": "5aaKguJBveMGV6mvdHmgZTrtEcPbeuCmbSGTJZ7YVNEh841osrbN6ZvQ4TUcJQmPwK8oKtF5bQYfmLsqMGr8HXN",
  "key13": "4JJ6oo5S6nTtZV4ZRqorqfrQjxn3TnhXii5ccTf6HGkDrHDQHdPAwUzGtmWFXckLzRN2Kt1sn7BqHCDM7YNdVZz6",
  "key14": "59hLjNeYh3tfvZyhV8EWtPRKsP3u2uxEF1dzpyxY8WhKovM3ahg4JhaitTxzBmzsRjnMtHAY2rLC6aDDivWK6P5n",
  "key15": "53pFyt71hvtd4qdUQg775ENZLBTKYreeVfLfM6qPFwjN9tSRz1wdid8E8GaFeb82ortdfkEgTWetkk4YSuLvbABE",
  "key16": "2ygFGMbuxd9pqipxoTAXL8EXwLPFLQqg9wqTR97sLRdbzUzsQhXXM6yPzJLZJ5k9kuhsWganp8smuEWMJNoKb96z",
  "key17": "2xnxNWJRux1cqU35dejgcXX1tN68N9ofwtv7xyNE1AHoXbHA2WFRsgon7EEmw8szbL5G1JyrQYUPLDKSN7uFgBtU",
  "key18": "1cMtxGJDwoz4UbjvXDAHAsTbS495e4oaV4R1GxQZsdiyNVPPJ1Zc5z75icVWXSBa2SidGAXnYddfj9rt2qFdDx2",
  "key19": "14ofVpmb8zY6KXKgdXb9arkH2gw15d5kZJwKYGRTnwyQC4KaBif9XnxFwXxqpn9ypCHPrCbHRkasL2wG8ghsNrJ",
  "key20": "Jsgxij6yRLxHRQwUaCh7M7hTXyNboedQQvy9ShMZJxt86tB1odbwAax6Z9yzx6m4uCJWHSHzsvmgfqpeoUAcp1E",
  "key21": "3sWkFLCkvj1Vwp5qf5GeUQkxjQ7dNsWVxcuW2bvg2xWjmUMAyK84Z4CHkiueZp4kM5VNBicvKLc4Q1M95jstt6wz",
  "key22": "5x1J31dYxujmPHAc8U2WTqhcD1dKgkU7nFshgrCyaCFXtumXW6Bem3JYGko91NUeEDmyYfRnNE65K9d92UabVNQL",
  "key23": "3FX7pu47zSSd3RnX4cgkmuskRKn5mq6z9hrnPnCRpeJ1A1jkE4HyToSUJXH7f4VRmQVmN5yo5ufYeQXgRs1tF1F1",
  "key24": "2UZhBUnVLyMrBXJw79qZizCKXFJ4v2bEEfAyJNxPCdy4W6MJWNqVX3SrMhtcrSq3jvALwShDvCGLch717BFv7pXy",
  "key25": "KQcQ9ELpSnfrYF2FR3z99rTHMng3wpEhp5F8bDVne2w6oJG1i1oBDdoat6eSnz7NX3AUWUpVzs88xoVXccLh619",
  "key26": "2ZHX98v8aSGgcLiZUdAig42Hh8yMLqWmCfoaRBTALMu6MT1dWgAD53n7EEMDcK45cqeHwnEHmxVh6er7x5aWdiBu",
  "key27": "3W7ahYYoWvCH5DoyBwDS9RvcHtLWXvycR3fo5reZZn3ZYUMEPMZzrxGyCYPtrDVd61eQ7AJkFHrJnbUxBGzqQqyu",
  "key28": "4bTUSQwcfjgQVPLicdr3mZLkrJ57vR945T2qCQuLg2mVm3H2Cb1RshYX3XFUFtphmdEwCH8ui4Zg4hP2m3BL5bmb",
  "key29": "4zAhEdwTqGhgSpFNFjumW5ptRw9dRCiKdr4FbCwSf9eYjmDGTSeZ4kvCScLtyJtvk7uV3UK7ghd4kM6iPvLqfbK3",
  "key30": "2gBp8jxuwxyjKTsTZdtu9LkC3sngBecEvVqiHVW9RVQX9agNjvWT7Ar3SrdzqxjxLJeXJzeaWowhJV9AzrGEmpVD",
  "key31": "2J5Vtei6JHWpB77Hu4S1PWZ75wg29p3wFhJjFayM1gzxxvL4V8aiPXxjVgu6bKEbTwgBEnfzcfgwcBfc9zuTeFqb",
  "key32": "3Q8CvpfsJB9nnqpbVF7APvqFiM5oLYt6nr1CSRbYgpPtHs27BviAuCiNapYhXjpPXwJ2gXv9g7FQTHooeo9c6mxR",
  "key33": "4asCWPaDwFuURwNX3FpuQAgmhKfWeMS4wyg9VvKa5kRAkFn5sSBJjC5hdZkeMsSiHtdNuigbykJSt3S3u2xuGQdX",
  "key34": "3suLHEXFonCWG1gQKdyWAQ2ggpNFAD18qm21ByepM8r2Je1MNAV4KbHD3hfY4dUhNEDjE1Px4hQKwgY1wAt7hQtU",
  "key35": "Gp6MgLRadGxwsgxHANWvseN6EjuieerPiJp1GvTKDUiyvnCFdjRcGduGh7hUsqQ5yxuPyfxFHWyeaovQjpBC4uj",
  "key36": "mVzt9nJuBiMbpKAtUSvayDUPgxsQutK8cNYTPGaNPJc1q8xgA4v8CsXK8cE3CER9kJehU5xa1eJETyTD845GuuX",
  "key37": "2qMdt4xrJiapPrgBXBy8NkJWVXX1cHXGPcAPiFTi4gG4j87m5ZV495HwoXrKXBBCC5CryA3C75zJLmw7TLNbgPRK",
  "key38": "4zZL2eXWL8FCWXQLVQzboh2QjXV8SXEEJ9jRf4W4nbPKxQwWQJPrsiydodx2z3z7vGMTCrkRTduyCEEQy3Hgcxox",
  "key39": "5HGxUaKoASvgp97JmFKkEuSgv6Mw67xV1BUDaiN7FZDMWqyUVBQHVM8DmCkrymJd74JUN5cFQNjmKUvhbtCP1MJz",
  "key40": "5PWLXVtQRLs8p4Vvdq1CLuCW2mMs3zfCT4ZAf3b5BZtotvaM2LNLrEGvvx3iTE1jCBpTH4w6z1RyqdQFW9gdPWJp",
  "key41": "twgwx9aGDuTcvFU4ATGdeLf9g8GNPmXFVA5SySghcFKppWnA4HveNRVP2kfFmBoU7miLJ51mhUvkucfwRntdKJD",
  "key42": "3hLYzVYnaohaoof4yLoyyKToktR6J71Kfc8kev96PZrwT71ZNNHPmDnXW2nhc17rs5DCs5V5tyGr5LBX9EMEseBi",
  "key43": "5UwVQGF9XLXFiVUBEuGocgcEhg3cB1Q4seQMwUxuGDotnLYjuUSnxWzKrf2CuzZ7mesCHNhGF1HM1ciF9MaKnxJD",
  "key44": "4Mx1z8oK87V642NJGk1Dt1aDQ52HWGa9joxnJLC1SYPxNvyDmbW5cNhdnUNeS6DKDr6JEJUFqN951HvPci756SEp",
  "key45": "5eCc2MDahE3kfuJNbVQZfjGXwciWvL5x8EtvMWiw9vLswFy4LR4KxwDonZT2kN5WNZeEWLxckF1V2KSmvsCZyZci",
  "key46": "AnA7Pa37VPjRMx4BeVbJuBH3pD6ceiyTjijFjGxk1T53T6dNBWaG9UKUwjjsxo2R5KwVVQJ2YqgeeTVZU2yz6S2",
  "key47": "Z5D64LDJt1sPkwKWkV2RvTGqKszFpuTsxvrhZVzT4Kqiwmgzer2oiYmbHtArnnMuKmSrJXaLsX5kcg4ycffXZaL",
  "key48": "HUc6yzuMjaz2rQ7VXFJbVHMhVjjykqsq5avBMfBhvTpHimjPuPY9NafcxKePQwm9zxUL837mmSbz2LsbwEGM5NV",
  "key49": "2AjJoUWiUGiWGfce6iHAXt7YMzAbvk56fTG4VPUwRUHiEqNxvdbNgqr6tcxAnrTLuCdTmkKiHuD343CJ9KLd4A6r"
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
