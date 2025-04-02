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
    "itsSXGfA1ciYBbWSuMPHRRd5uiBv7NJgafX6nEbBUE9C7EWrwJwoPCVRccy7RzcJZRUu8vu1fdCWd3DcEie4qwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7NgiSweycNNYXXjQht9hRN9k9twFunGatkixDEJdHUqY9L55KRdzwouDxAnoHub9AF1MunJW5twrSonLn7RJtu",
  "key1": "4n7e3y9GbQuoGSyihZQdDx7gBkcyCsGsSjjm9t5vxxA5TLNubXmxEr797gHRXQ5Ke594QZDnChph1mEnNr6gUD6D",
  "key2": "3DurzSciWisiVJvwytdZG7vssWocieuqun5Qs5YCzYgU5b6mqwFV87Gh6nGp6WQXA2g9rXojYLJ61EPc3EiEt4Qn",
  "key3": "nJKQ4JnPpFom33escFdvWeJv9sWh9FzpBvoE1VmTjyNMipTCfRtPTRLCEYY1anwAyUudiAo4zwN2vtp3rQSqoMP",
  "key4": "2tnrN3uyat5oFkHFpmi7Vr1H3kFrtpSjsVxBJZBGhiUbGvN7MqaPuP5yRd5H8RNwojLK9DcXyGwvRpMASAphiKU3",
  "key5": "3jWcLijibHREvt7Fie5XpBQfvHFGpWWhuYfrBBDUnB2UhDZ5Sj69uYctv7ddtPzTurxQbXJw1rs9PqRynofEqQoa",
  "key6": "3hTiYJk3U3r4XXrTWYdR4HFfZhvqBsLyWjcyxSVKFV2P4yTBTadgFq1Q6LmzZ2k6BS9iSzX1AFWH2VxoTDpGUYv4",
  "key7": "GpX7WtfTcQ3EMykhRgGe8EUb2NcySaAuEL8K4nXmtxsjoCtjZa1er9qo4AtNrD7sH8bG3pRVXLyevictZzu2Zkw",
  "key8": "XFuXNa25UxLAwid7x7Vs3xucyfemPPwgaoqgPBw7KYbzx9cFyYpCXAYWxPpgaEZdKRX5F5WPUiMEtDEnTezmaKp",
  "key9": "GDiP84MkozMuXvFcV2sARVArMQhuTX7JTB2ESdCyzER1eygD5JEo8NZSw4s7co8rk6RgXMkhwdSm4KeLt943A2U",
  "key10": "5GZtGZ8XT5UVWj4oGr4o5LsHx8rpv7yVnKQywB4FwUG1Txk5hqTYrR1YEsX7tbfXUkp7WjNn9vcSPA5y7CiuqNGj",
  "key11": "325E2Fry1hSue5CbqgYVrthSibLZ3YzgnhqpTVDhXXh7DejBqw5s1CAX3278Qz7ntNDvBMfmqnRkgDUWNmMNHUBa",
  "key12": "3t5SwBM3pjeRZzEReMGutASayDfxFi1i4CYammzVgyXoVW5y8C4xvR9xBhsreQ7zGm6AQ15S9LxJNiTwAA5NCBmz",
  "key13": "2RuzZjGYQiGACMmdW4JVkivdPwJj482A6ZmhnmDDTBwPZBZ4UUvQ1CSTBWcx2GFJWsGhgSiUrPmbAMTj6cyycaNJ",
  "key14": "2AQ9DaD17j9XGHHfPEpFwJf26LCwZuAL7xYHn1NnmPfoDpedzTtj1JcAKYfsE5Xj2atqngoWczQWpDGrKg3zyJtn",
  "key15": "332AgvFf5dPfECpTWz8KioEHHbMEqN7wSmkPbogeNdM6gXJff5nPvC6A76PeKQQPrGXZK7aCuhggiWx3o8ybrY44",
  "key16": "2u8PNtB9zb2iWvw67EpGJkqhm2KWzp5H5XgfaBihk6FJHTxDgYahesPvYHi8hiBsbuPDLzift12kK25MEjsWkNbw",
  "key17": "AWKPcfYye2FHQ6vRq5ysxVpkC4gg1wSJtsD79udRdTu7mt7FEJpCPAZ9odtcb8czW8ob62ToutXyeGv1rMBTtT5",
  "key18": "2WFYQnteoQvtD7VfC2muRnrws161VWXdQBqKNBzaZ7o4xTAm39HyXYTF9ErkymwDKAcXRvCqG8qXkWw6KimxdgsP",
  "key19": "2svpoaRPtfXnqBznYfxxC3ZshWfNZJNsohjTkVrUkj6L4BLCL4bbgNgPVJSp6xQU5w5WaPMVKobgG8feqkKXgeW9",
  "key20": "46PCy91vaxTh4oh1wZ1B8a1muwLYVKXk8iordXDviPiYcYD2YV7aN3CgCHSgr8U4PhtXpT9Sk16NKF5cqszWUkbh",
  "key21": "3fDNkYby7HACtHHsN8RoKWhHZyYtAUdpLfAk92diKnyGvS79K1CAwwFx8wga4eEAxj3jjaLQGE839XJ4mFBTXWPD",
  "key22": "4pganzZJZwvX8pP9zVeLwwNohYRhud9YrT5fK79KsDQZ8jwpoGP8dUqcsKvFjRVy2TYu4PKRrwmjPHsf6pX82oQJ",
  "key23": "5m8amCwtVaLd32aWCPSiymU9x7HZVTAw2eNBkwVFygA5AQSTXYDmcNsBryFDmhSMhbgoYnaYEzSzjUdEXiyuiT8E",
  "key24": "53zQAapgRrJXoSCcMy3xqgw2XzhhMffPSLjeKzyWDv7uEKGxyosTwpiFxzLq5UtTRss14CtFuXMWP4Y8Z81Z8a9i",
  "key25": "66Haw9HFNQpL92t4jh2PmQsUhfUD7NjXAQGhBoie7ycC5vW1dRP7eq4XoihnzG6Qg22TnSVU9YC18ags2DMQ3EYT",
  "key26": "RgMCmE6nLKt4ppXkKFytsNLhD7d5Q4LfYzjUCSE74X8gTAUUofok2WtLv2oMmsdKjnayoVFKh11QdTAZxMy5DYc",
  "key27": "2131TijtVfg1AvzhosMfi9Ga5bZ4VPVGob54xnHUSwPejzZ1c85rzQz9DtuqVrEL5H91DyqUAn8zDtRuB2g3Tj6y",
  "key28": "wmXewFn12HRSuRuhSvUnTYe1woiQZLJQr9tQzRgDFkBuUaoR3QPT19yziYScwDd4bBU2CD65chwToE4ThxzJQCX",
  "key29": "2ygqhQfHaenxXfk6dQoHbYX53pM9xFJwe6sH1cHEaTYiendwP1vfREajLzZVmJhBBvniSQov7GRQaARmxHCEAzie",
  "key30": "D3K3d7sqwZmxEgq2Jy8TDhBz9dvx9ugnFb6Ty78RycJ3dReZprYewKM6paosJSAT5cwZCaFXipTkbvpEjBTPAar",
  "key31": "3sRnuXBgKruhKi3fkYahrhMD8vAfpTxj6xUkWRrtJWyErCfV1AHt2ansJYxwq7Vrbfuaf1Pjeqt5T1syF4zf7xMz",
  "key32": "47b6kB5K6cBHNTHkNHHWdderj5f5CUQ6uhCgfqv5cBQpUFUpYpojruhWjp2QthsXVhekKR7YggraKMfCq8AR4cUA",
  "key33": "66nen33WZJWFF38z9zgGtmxqSVJNDXWQSfZAgjKjJ2QTSoMiEUx3LroqCtBn7GLmnLFKQJBbEX23DuobJKyTpGfk",
  "key34": "2qxPAqDchqi5DBZwSCDYxAxwEJXeJtWUbpyTbVxXGKGh4ocM6GZArMWkQbK3RV4xczEdcqGatS2kn7jQa9VKZMYp",
  "key35": "4pChttBpzEjDHCtNWekQGQTTogFYWsLu3rGMmzEYG7TsLrANKWtsWpg9GDDgWYHdg2VhegLxeopvD2ocyXtAYdN8",
  "key36": "2p4A3ep5hoRc8VmcBDmWg7LbwupWe6CdegwecCfxJSuMwpio46NgFCCUx7Q9eBKUoebJvLVFL9FSn4NRZ4bac8iR"
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
