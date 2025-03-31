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
    "9QGuSFBgZDxdZyWiiT4rrcn61hGdCiV6CUhKS1fVPkpPoeDdUwk9WMHLvCU5UTbSzcMHPAEoKHmCpGEantCUKDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnWUS768uRPWCqnWwDbVU2ggNQMBAchXh6pzQevpjpAKaZ6tS8ytTn5Ah8bH8qraKffeNq9DYBLWwJPtYA1SHFA",
  "key1": "5vt5s5LdJZ37JQMjpMsMFphnzctXsafADrP4ebk29E3nZ2qsCH1GRgjRr9LB9Kwuxo6WMyaoAz9U17cjiTd7yymz",
  "key2": "25Tg4tmKcFegjDj4RRqUc8R9EY3tvrbLfBEMM6mhGjySchDHi7KmthR3QriwcRAqxLGQWxLvozoDLU8Dm5rmJTKf",
  "key3": "3eRqP1sRLERGrWDrYM61c1HGMiuMwbAE9bh2p8UUsRzhKChEmsN98jRaPtwnqdo2TKCCSfRwVWnvJhGwiXkwqyZ7",
  "key4": "24a6Dn3mNfEabsrMsRhxa9dya8r44vSxMvebu7ch8bsRLGhKprwzzsCo17bUJ7aSNrHkdk155gGMK73ubgCojaer",
  "key5": "2zmDMDmwFAb5EvgKoib3cGn3ogSjD72hsYrdkCAvr5yvZDVvWz96RAiffkXJqiKg932KPsbTa6Y3od54vpVyTpub",
  "key6": "3iJC52R7UL2n844QPoTijybGzrVTJW8AUoQrRiT8EBzLYTsS7xEPCX3Fz8XfDW26kt4oW6GuVfR63UZgp6r2ZQin",
  "key7": "UnAGBg3Pos7dZRqRP3KH6WLJjFspAZm342jLqWc6CyEpEQKcXLnYjEB1Yy8rShYgeDzvCfEwpPgXMG5F1FzWhPy",
  "key8": "3x9zXXJ9L2qVW8jU2CCJf8ymAMEJdT3QaJtuQoYke3SyNyidprSFn549p7AQTwQNicGTDzpJDvRm4CsY58erfJRy",
  "key9": "378X75Ys5sgXsi4VU1qXGg2cFs28ndLsxeh6UL5cn8hYYHS8d9VUejRLZAUPCKbgScqQwpYeGmZ1q2UsUFLBivRy",
  "key10": "5PTtQacwLVgJqZ7jtCjFTKqYPcJ4sZh4zjnYrJvPzKNUbMWMoTreFUHGhXAATSN2wt4jU2jvsWo8V8HxrFvLT4L1",
  "key11": "4RwM9USqHfXv5o8BRgkps8PNJQWKYUSdaCHZsrswqsNRKrse7HnqrdBLKFdP8Zg1ngLAL8iymX5RZkygQFQAAmuz",
  "key12": "4rXGZF9bZFaxs84MB7hB6bB7MtmAUhTwj6PRg24UenMc5GywVQBBSuNSSBvEHzmjtUGE178AAj4o8ASau7Ud7ZDu",
  "key13": "bHf4cB8eMHqNZwKMgSKNKTp5RF8Lfd7Qyqs2YVxZGSKEXBzYvxkRRa17qFEebcPMpaP4DaLpWBRwKcYezT5sxER",
  "key14": "4rzsAPMrzVLA2GSwTvh8jDR76GAdKVvmWbbEuv35wDv1WBBHvVoQHrYyYRPzmFaKeLNsGp9wzDAviA7cHYQHk6mM",
  "key15": "2r3TUKC7CJXRMsDXENGaU9w2U5Rt2Mtad5ZFAN9PcbFkj4wgYgUsf1kCYEEuVccaz5NbQQ6tHs3wUAigVzUTzKaR",
  "key16": "2i4KCFvWh8fnVEh3291ntGtVJSvvEFEmQUjn3TcSCiMnZksSES8E1eWYqtCdGd6BmcJPzucTMSvdjKQQcxZisEiy",
  "key17": "HnehAbJkUEX779JtG5iY8zNnHHXmhup9J3XjsE77fsR5NqvUnEb9fEZxbgJUjU4WXDc7WJEDeD7PykVKwWnYod6",
  "key18": "2vbjkXrXiW5r88Ftuy97rcC3ogjoqn68LnB8KPrRiuNYVitH4efS8u5qasV5G3gH9XLLg6vWx2bRpKmTXCdzouQS",
  "key19": "2pnQ8SduSYycWBZQ7DV7kEoX5FdKZfhxrUXj62VUCRXqdUqLqWvGaJPiQMLXJ5kzscEXD9Sh9HoRKqhEgtNd5TsG",
  "key20": "56d4XbmNeu475aDdzKRcGZryRjCbMTNSbdWY3aJBRvz2GiwNNyorBGUsyGEU4huX7fj33tqFZxBtG3rfeDQTRJE4",
  "key21": "4ixqR1VtiTmHpfJVCqJbRSP2PjUdgjiBhaAAYGnHSLynK9873gx3Jm9RC7tuPQBnsBPmuc815sTC5V6y6eamhWpe",
  "key22": "3dajaHx9uFFnoqiNjQo5PTTC66NrdtSM5pYojSUQ3rviVFC98r1AVLu8aUh8mfyCeujfkTf7ZCRXniJN6ebzEM9h",
  "key23": "Njg2VsXrdRDLUTY9UWEAxQhHg3ek8MAJgsSv7KAymj6r3GRgoiVdVkpd6zEVqJcHTJbLa9CwQx9qynqcVm9dcK7",
  "key24": "2F3ko6GBguK5dCuN6URUMWnCLms9Yf3gH5gTeX8Z7FAzwrE77YztaxQeYyB32B7SoSg9E3NHG1uQia6NvJ3hK9P3",
  "key25": "2Jvs3AF25ZjKkfP9B5KYJh7fx42bZm8h5Fpz1CoqRkrMAUtbX81EeKTZbCfWZcpEFBnbYQqAcrAfQzuEwAa2bdNg",
  "key26": "5vrW5f1MjwsDDR4v1D3pHNtK9oLhXUo49jmBucwNC2A2waMWbsvkc1FhmGcQWmNRfX16CcRKMUrjFfDjMYBQ71sM",
  "key27": "48LUS4f14MEYoDroVqL4TsRoZkSvSxUgMRr6QRFZRP2kQgDMAsAJiih3pAZzMDJPzZy5TcCTVd3agqUdTZxVKeS5",
  "key28": "2sxC8ZPDa3fbDnWgimZ46ToMENoLJYCLJ43XUjcfAJ1S2W7Do9Yf4amG2BJxf8n5HFJAZNXDRBPuGHEc8yyvaYUX",
  "key29": "3bv5xvhQA93tFbzJ5AttnffbrbBzWf5vXjnR5BMVnt4SPXVxMaS1Xr54JdnAAbRVJ4KgbNTJmX8dosPwWpyJy3pu",
  "key30": "4dqAknU54R9MUDyFsWTixT9HpTMzy6uuf1rAds1m9dLx3FNQC7XqBqFFKp7EsMmuqEjXoxgZKxeSDyZWmYHfcDqZ",
  "key31": "4T5T6nn2bNFVZBh6y6itdMbPPSsfZfZXcyTwWXaqcgdx2yFhVncpC7ig4VLrk72ZJX7nSwjTKauC12NLKTSsHEQJ",
  "key32": "5Jr37LVwBNSMSWevyz634GXsuWC5TPqaUF1g8xziayPv3tGxmbJGVfbH2KBB22ygvpRpaQt17yvt318PqEZacNup",
  "key33": "2YuHaMRJeSHk4dvCYKBWSxh4e3Nahnb23e28FQij36PmTEeLdc2TBsd5C2HEvdGHHeyyMRuYA7NJviLG3d4S1Btg",
  "key34": "PNSUrMA9xNUQLxKP2P7Z6g4zqifjUUZ5KydXttavovoWhXAai7pqobxM49qw85DmoEoJAVqmgSfhzUeYEak9X9q",
  "key35": "3DRRiysSziaFSPrAQT3K3jJEgsNjKhv1Fom4TWHue1kzHCvYPrJNaTZ6DKHSqs57P5KKUzuUkgYEVGjG1UaeT4fw",
  "key36": "hXtDMVfjEtJwVYGZZt8XTpPiZWbd69yEHwfn1RfFTdii4pBbSN7VpGdVtcvEKinXLqoohtjtksLvXx8N2eG5B9n",
  "key37": "3QAc2oPRmmm5KNVRQDYtQKCQE4EKe5kEAifnnrq2tEmPtSrsA7SpmRWUVUtwMrYa5ZQbCyacw9F5vSopqokx29LT",
  "key38": "5a7eUwmhjHwoHC1cdoHvHJoG36r6kQq6gTQ3DDVykWgoRyeCt3YTpgqtuaJAmMQUPsjVwcAd7Bm78ix8AzhHJsxQ",
  "key39": "2J2cu3y7qwDkXYwDix844ftx9Q7eRLCHND1EMQeAsyew4oWoUjKmT9FrvCj6YeWS9stpe67p6SXwDjjmtRVkWSNi"
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
