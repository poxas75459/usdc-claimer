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
    "5co9XuGCN7Ch7rzM29xgDS4c6RTHE1nZXAX6XvHW66VGxCXRG2tuvDTZm6DQ9rbbj6P9P4EUGqn6Dnz8jfcRe84X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEVfRwc4bZGNPHNApQUUDVhgPQAZ2v38nijX3mM7TdvoxkaYNwxDhinaQEoRw22YnUGJgdy9ivmqBJ97j91sXhh",
  "key1": "3SHsYtKKpFN3i3v8YoGdh9MsYjJYZqTrPCvywGHgpYUsRSSMr5N2gMFQDJ4GwKqQWHcD3zBc7X3vBTiB9tLAceqU",
  "key2": "3vSs67RdvJZYfbrx1s3ym3pRkuyGQWeDYUYPW8sp9rTQvZG8YzALLmMeQFyktJq3mJzAKnEL3ZPePjUrWk6kjxWP",
  "key3": "5S2tV7GX8542Tof6rwk93SGXhp94bvGxHSQWi3UcUYkjDvZ4a1httZ3yeaCeSQM9AZ4XmSAYLjxTmMugCVk7EgqA",
  "key4": "5EL4zT3dnSKY7cJzZ75WyK6TWo14oRjY1g4BwKTv1P8hkk8jGv55k6pKpbvMxat7E3p1h2Pof726dtZV9fpRpmkM",
  "key5": "3w5BVWebPuSFGTMTr7qmtFopXkhHuf8bMYRftYirh8dT3mC7z4QtBRZ48ue9UJPx7FvHiD6CDvs8MBpA3Q5RDQAA",
  "key6": "4RAqpv1nGD5Ecev4j3BwGmxpkStTj4tCe617DjPwKi3h6RxGsVtmaMVto4U6rWjyZeDZATvTt5CdhK5Zo98xZcR",
  "key7": "ejX8crSJyCov6gRr23Z496FFArV53zd7GsHsxRz3u4kNzFa79qUHBbE9KydkV9teTPVddnLvXzh7LpNGZsnFJRV",
  "key8": "mcDJU3ezk87VdQBVpPC7uRiSSWyAAJxDKc7tnfD7pUa9rRwwpdwbnSPqQdpFsDfDxPwv3Mvu14vVk1t5xcaHcJL",
  "key9": "5d8Rh7UikiWwaPKt4wk6g6vhoGtZsiQrhtbZdFPXj3kqkM5qvikQoEhhjJK6DZt12ASg4xFQuLqaTiPt9Ssyahuq",
  "key10": "ctTyiYiNLMjjVw2NJDeZ8U2JA5kriyZvZrMmpC91dyMbKf2fPaAHAMiMkKBuhHdY1xmKm2BjkkY9tuivWpGjs3q",
  "key11": "wciM3TGBZg9U2aVnjCmSPPeLGyZ8FMYj737YW4gP4wAuVQkBfKQDYt4KkrL8jv5Kqfa9igCDqEvRQZakUuVCa18",
  "key12": "4AW5PTM4NeXuQBEcbkDrt1kgHyK2Lv9A1nd65QThYGS5xd1vNZDNfs4nXVwpXk6r8QL9dwXTnU5RF5wSzad5BDf4",
  "key13": "3NpQ4MMGoXAipQeY82QXFHkEk3q6XnjYJnJZR4sFE5v12rnonEA54b6yjYhK3PsEyBn5ZqqJ4uJdZQoWQGR1iWA7",
  "key14": "4X2RHMS98CaT7a8Tg1hAV2SiBT2FsQKRngpXsXDfQeNw1aZBQQrmn6Z7zddPHYojADjwPHXXHZkSHqCD8tU77wVq",
  "key15": "3c6kTdCqn6x58dUzwV79fzrU9LERYZMtb3Us1t5fuafjrPTkVvyHEdPWdcXgytt3b3ZZvDm1V8nfXD2rKdPmgmvh",
  "key16": "551u7JiGTns1WwBFjFbQze9nxxvwkPfHKA1nNsBmcM6nEPpo6hvHnWNNLzZnZc3Kz4wdfgumU69JogsUPrigx89C",
  "key17": "5XLPZjyW5FVYdsLH8JrVW2eW3jYdZvxdWmcXzrFMC9NDH4YchsbJt6ngGR8rj3DfHqu2xBvZ9EEzNc5mcjZ5umop",
  "key18": "45FDAquUxUy4NH4LUE4ztXFe2op3MJg2RFM9RPnBT9DusR1jtR3iYm45UCisWdwtfHdcjJpffREDzru7PT9uHX6N",
  "key19": "4Y5ewnVgxCLgz9PU2iVNcbkZjihtw41ZnR1sDGfvbwLwUwbZ2B5g2aGg7XXMqodmpSVomxdM4mWJ6NSvowbiVKqy",
  "key20": "2EeWQCWLW1EdEqSixZXWwggfoU8HzKjUNcXoR4qxNQQxu3ia4uw6YJZvHrV8pd4FezuXRWxsDyFYmmyikCQn5Xmg",
  "key21": "5BZrYX99oPficARL5auRiKiP4NrABBhergKGvPf9Dt4A1xEahDnkRqwyihD5G5z9XWM5z8NQyuFSc3XaNyCJA98o",
  "key22": "3y6rUt9nykSPM42T7f1EicWKv7iZwQfPASMNfSDBtixFRsirwGoPTh9haZrKgar8XbV4WNeZeD1mbFdqH8xmsXmA",
  "key23": "3Gk2AVSN5PLvFNwYgpHtTduKTQDUYEkX8R91ETmBFBFo4qaJedEFbFqxSrkGBsr9pu3zcXGm8WoNDpmqK4RkZrwF",
  "key24": "473vC7HSGwEDahJueiU5SdmRGFuxuC1buMzf3CTfoywzcvGdBdNn66xRM7EZXZxyWkRUd3fgyFYrgtkMuxtaJsv5",
  "key25": "4vECtPnsJ9SeoDBPyRMTgxZqFxW3GovgiLbqAJNWmUxG5pSamqyWws7QtE1ht5VogKKvY728dek3ocPiE34mmhgy",
  "key26": "2CWsTWk1rSA8RMsxzbYtBVdmeANhoXBkUKovQNPDKyyjJUfSLakNhwTqG9CHkYjru3Ki19fpzjj6Cq4NynDCaocq",
  "key27": "5zMBCSqKFrHZxxZZhth5wDEn4wyogZ1GbEphUoS7VLCcRW6FuR25xm4AW1PktPhZAXxRLUuVo8nq6y7nmVdPdT1B"
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
