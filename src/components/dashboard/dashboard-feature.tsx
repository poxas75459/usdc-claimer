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
    "2qyJTJkagFpyiaombTf9U6vKGdsBaPUdDuWX8NXPoS9WrCf3ZbNQ1M5JfzsAvJxTrg7sYGoovjSQEqBSjmjc9bEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AWPQz3CS8WyNsahERvgG4FTNymZECZAyuGpYMzjKJR8amHeyemFYxLc95Ncs12mcbmH6fQ1fvzo7P3iXh62hnT",
  "key1": "5JfhNC1jxtbcG53Rj8eav8sRwQrvDXdVpe9VbsrpBfuRhj71dabPffDsTfJDJuqYoSTe5icQtspyz6PneQ9grNeT",
  "key2": "5KehZ5qBSozyDYdXA5w7sgofMWpL7NAW5c5LfpoFKxUY22jR1jUdfAUs8DvtqWeppoJ2SRdzwQZwhAoMBA8z7TRn",
  "key3": "Ar6XJuzi1TkaHnyWT8zDi1kVu2yvjpfPin98yAtoY4rHH6SXWVTgbYDoa9edMAQLhAdTm43fAVpERc98sESbuwe",
  "key4": "3JB1VCQdB7PeT5HuBr8EHtaAEAsdKKV9fUnJXw59kTGi5rWTxqXek5gAG9HmNCw9zUpTWF2Wj79YwKQPNwE2LXfW",
  "key5": "554XBhfuuic2JW2EbFPruG5ga4aPML34sfUWwG2ZYFFcUKdLxUWRccsd31CDA579mtuxEMWPd46Fonb2d9h4PfqW",
  "key6": "5VdPWQRvoZTjwV7Tk6bt8PEz5gPQdhrSV2w3xiQf5dWGGTdzroFURWnwjdrE5RAoc6UWWGUa6ZDiaJKpyaoVUngv",
  "key7": "5nt2DFNPHgVGLXXBSfbd55XqAwcWaigLF2WSaJg53exDy5JF8rR73zzbi8jB7ReNjCoeDrwdpyNHoswE9oJ2gMQe",
  "key8": "51qGCMP9AL8e5arhEqmvCNMurF6wFTJhGeU56AgJAiVJvnjiddekZgDbK7EAsFUYN9rtm7cFb3nY8ErZbH8ZSpjn",
  "key9": "63QdK84BgTApadn7jDsodbJtS9A3BPSPxxS16pTbRCG1fL6PSv8Ad9nXSEEQW167vPgSFqejPpJCMXXVVTz56EfS",
  "key10": "4aiu8WnTQQqr7W4BwbWsjGKDrVhqJnx2YCkPWRvVnuNfCwxmymLeBDHsA33d5oSs2KXFJ6HYAr1WvNjLjBDBc1wc",
  "key11": "3XyRCcTipnhyx4SrEYhDUXm3QRXu9XciBSPR1frC8EWWJQaGchrD9uB6CvuLyyGUpWCgrqhexqJ9kjJzQrzhFR3t",
  "key12": "yYduQeSfEoEEKy5xi2eNr1QaCG6kLEUU6RBvRuRfEeshjiNEqR97PGCt3ypKLjgFyCUYyPMRy9pJaEncHbtVTUW",
  "key13": "4QmxZuCCHtrHTR1BkoADem6kHGVjoB6ZbkfRdJ8SHi4z9vwCYK3n4EhcDLrSDfh8TEr3aToBgNYghG1fyseXJJWz",
  "key14": "5HZXSH1w3cJHbPzCNVxFdTuqvAXShv2HWTc2uVjmTXYWxDYJfZRYPggoJ7H2ZAvTFM2vpy1E4ZbR164q86f6zY3",
  "key15": "56rZJFxAcrgnApxcPhPY81HMDm57Nve6sNTaXVB2ybZ3QzJ1XctgtFHgpaKy1PpuaNs6MnMKq7po7TQb4vihu93z",
  "key16": "5LSp4DnGMH3Cgkv41DBbAvxGbFf2TeQ58hTZFQN3s3L614zrEUA1wNL3z39WKMfagBYe4skk1LRn4jUWTpi9pn9K",
  "key17": "5mTEXdArWz1pMLX8cnLpsBigy3tztzJdHUkJQKT3nA11yQUsJ3oJxw8tacs2LSSUFDyWixLq8FHUpQk5859r4mug",
  "key18": "2D4YUqqugTt5ZHKJ7RvyNKE973Ly52vAWFTFZoWW2YxKeJnfa1TWVRRLVh2XB6pvQZdFvwPqL54uKeAmh6Susm8v",
  "key19": "xBNvie5WrAGJoLH1SD5FtqGtgPUKoAT4iedJ5UHTDAMGYaAZtZTQ2gGfWdwDvQt6y1V4iGoz7UULoKsU2uaBVqy",
  "key20": "27HMiJZsAvZeaRZU3Pt75d3AKtTi6PG1DfQqgCTJs6TP1w7mbjhTntEKmTiVYGDbzARmWWPfbU5ppqHrEBuxgtzQ",
  "key21": "4yhYtScgAn3ydxYX6JTQW4RnhUBbpiUAWNbvarGii93qy4ox3Ya5bfnKrvWJUtAFDtd5KivTkUeZb3mwc9CcaF4",
  "key22": "4ZX8kxsxeX1a7pCXydixs1P4NMKgEnAEDK87D9PgzwyTW7vz3NFt512iaVbBriHWmbD5nbAJ9m5DzAfr4xARcZFp",
  "key23": "3MQbTmY2xkv46QUahmpZKH17fxEyFwR9sCD7FfYhiUg2X96dMtcMAqUAgFiWCe9AuhpyQ3J2eYnNq1kbZppuRYXT",
  "key24": "2qnpZydLmotnfNmrC73fRQKE5zkeSw6Ttot3uFL1Rn3CqK5Pq35NRWsZR1gbyo8Sk9Bh4DTDCPjc4CbMj87EHVdn",
  "key25": "3LjexRB9grwqKbZPjWX6tRtLzAUabbcRsSWdXwPhDQ3TwsfiF2UV3DXjvcwk718FEUJvR53ViSXHx13Vd1yrvLpY",
  "key26": "2f4U7E8AyS4AEoFwZz5jCiWyMWZGgtCj2x6VY9UXkcgKpd8KEegv59nU2MPJQrkggDBRfPDbSt4W5WCn4rVEnYfY",
  "key27": "2SbWpzdQhTYLQFyN6EFCCaQiDnVmmCyLTHYtkXyLJXLVwZhTJeUHMxFMPwNJyDYonfdeH4tVccuLEQ3PGvboZBNF",
  "key28": "Zhagf3tJkUGQRXGmDdEnv7z17DS1nSwfZ1zQBCPDeVfPb8BYCVZJSNZfKHwLA6k2fxoMB7QVFPdRZSWhXRJAv2Q",
  "key29": "zt3tPKetsXdpXVe1WMPWSNR1TXqFiNRq2n2GWaD9dxHzG6EARLkAt1B3NiZykUQLWpd6vFGrWWjdXYTpXYjjCf9",
  "key30": "38usWbipWS1RQQ7rvnbpxUwATAxW1hf2AnZxHbVgNxRT4VxNtAZXK3G62kJvLZM8nq1yd4dduZVUwJ3nDe9TaSWR",
  "key31": "48Vr9SzQyeopkcGM6FpDpCQGQrFeLGCP9wnNCMC6Z9W8LEYNejtZpqB1rEn5i3XwNfYn1mVWrXKycSZ6YW5yJdn3",
  "key32": "4nNdMRuq1zMUu85PStzbPBt9wsEuvpAa4MMtj9QF6sUmbKYxyyvrwRbu3Ypd45bBqpBzPXHvRxLAzgZrfnYxQ673",
  "key33": "3GjaHicSFgYprzstx83QuJc4Hvp7saXTqhiE4dd4DVWKgpCaikXCBdbzBYWzfMftghra1RjbLD15DthuKyeon9dy",
  "key34": "5D2oQZVsKsBXvfAD7As3tWc68XmnDiowJ8YmgXAJFJmzL92YbqtGLkrStu8HYyCZvM5TPhM8LcwJkN2jF8oLNyuW",
  "key35": "EVVg6pk1WDdY3ma2m79AuLmiXLc5T6hesg3jGPUueXn7E5VTa55XpTtjZJTjcrukHytic1Nf8ffD9F4pCJqFhAc",
  "key36": "5PkUSHjVMP1aKUXFH9ZVRybjjPanSdzNH3eQZHHYsokbU6wcMhXAFJPMtudJFAtBNArUg7jACLQwmiDVHqG3mLm7",
  "key37": "44dPvfaLXG5TGZ112D7epk5YuQpeYmYQ6KT9HRiv9Vzq17nAHfqScSHYqTA3MWNbYKUrbXBowkVqbo4aK7vGKVkx",
  "key38": "3bPhuXVoM56Jkai3QQguCs4fPQSCNGtff9yPALvUdQWJPQpjuEES2w8xpPSzh314rK7n76FoLjCU7EaiHaH4Ji6u",
  "key39": "AkEoRqsn118ZQhUANGGXYt72ReuRmxiVt6Nenmtx8iXGUowJ9qQvkj6Deb2fV9Vn7KgkoUdkPWtU9eDDcvcg9CC",
  "key40": "4AK4M94AKjrz4N8Bq34pvwuut697cZCAjf3gpY2fgbH2UzeG65UFr3Hyx2Vzy3jEqJ9PhFiiyXgoYYPpUCKuk4rf",
  "key41": "2jStbYRhSvNtesr5yp5AiTtnWV1cMEisbfABsZvMsTXn4NasQ24HeryfSVybVp9sS1V3pGMhQSivzGghAgjSeNqK",
  "key42": "3VSbLCJYMFRj4fQC9h27BXu1qAVZhxSwWx4MiHFE4ApNsv1ZZQXM1yb97VYNF3PD9s1vqxaigFBjH5RYua85pF7E",
  "key43": "124tiv2L7BcM9m9E8gF14pZryjv9vCrqt15nSz6Bgqgx2p48ko6BYcwpGJiksG4oNb5t1VeCg97xigXXyP8Q895Y",
  "key44": "2njrYkMUvveMqzFbfaDRK1ZYJJ6yZaVKhdwUCP3CbEC85P2d6KC1kcH8h2SdRYWSB5AhTFCT9FgvefkRLffcFAXn",
  "key45": "RMz1HLrsRshzxn598ojBhGQeSagAe6MLLytH2YvPZsQ1mVwM1WJhxSQZhCv1PQ92k79xPuvzG8VuAeV1eyHTBdT",
  "key46": "5ZDqjd3pKKaGrR1LuBb3kPQ711YgbFBi6BCUJQ5efZsvs3UCLQT8y2xSy55vBZ8pMZuMd3CvRT1zLtjzn1Zh1LmY",
  "key47": "3oisi695TUYCq8rTt4oZsnNWK3kLVv8KoJyUJTsUh9WAK2tKwD4ZejdxCqiCYu5czqjEhPZX6LzXEE1ky3FcmWah",
  "key48": "2dbsNVVGPsnQD4gHwviXxhzhDs7TrZxBouTwLgt5Ah9utAxtncwu6iVdRAfvHmSMB9arViC1VezCS9Xrf5MXDZvQ",
  "key49": "4EFjzxNzg7oDRzAg7grrGyzHeDriQRJykeHfQnVsYNxWoHQ4FyfrhJB45BMSHrr6tB4GjkSkACGFY4S84CoBFNbg"
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
