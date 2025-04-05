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
    "3Vh5xzr4CKwEcHZKdPYeraBt9TALVeKFR2MLVxNKReQh2VtMQCzHGWoCJcMXJa5KDJ1yq2LxXmf6VtFSN5cwGtDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3FkN4szR5xs8HWCuZ6qeafWPeNVmoTxiKvxMsiYLm8Tx1M4fidMCAem3xhmetkczNxdz8ZM2TivJVFC2UGa682",
  "key1": "5r6wv4YuL9hLP5bp1WVyvFWEkNSHmeGYrqiNM58bobZ9uoQVC48MbjjmK3gNXk61wayd5gbGkX88GvzoKz8Grwx1",
  "key2": "y8bBTyez3h3PMpa3z2cMV7Dqew5w3W4rdewZfYrjjGDG5WYTB7eJRZcuQg9UT42MBg3KFYpVbg6cng2pda8E4v1",
  "key3": "4xaQtEVhPSPXYHh3BizkseBEhSHpTLWD1P1xBvD7eTFmZrnKMye9Vre8Nb8S585ukykmkFnqiAwNmjsnWFdbj5pz",
  "key4": "4icPtLTweeFc8ThkvW7kz3icfXSEJ513A71b2CJfXD8AkQHmjjTRbxF1pS6fyXYAc4ef8UZ942tBvyLcevj16NvU",
  "key5": "3qQegp7WdknToB14i9y3AY2c7w8rTVCDpAS51M3bCyi6n6TE37VMZgUT9fKMo259FsVzyTBaFJUJe9fvs2ANKbJQ",
  "key6": "85Ah6TxEFJHQMeMNDRs3rJLP3rqJxZEhtKPzq1QGbbHrKxdHNxzsvwmPUXUPrp4Nm3KxuzYwM1o9SMWELGaKHPp",
  "key7": "39cRz8VBwPBgMB8YKGVqhFPiTB7gx37c9JMK9ynE27jUBuevTz8v1K8qiQCBW9y6SmvspKzNWneYpjcQxpQXtSSr",
  "key8": "34Fqw56wXmR5fywnMbQC5xzL89wSbMn3GFmBbHD2PoKFPYK53EECXRwNtaVDBCYanpodF4xYK1BSUrXBvw1orsdu",
  "key9": "2oJH2kKEtFfamMqGr4B4ZopSXpUTepxGz1LoNvxP77D6xAaPEyW5D6pbu9j6QfT9jpioFkPXB6BM5YCHLyunKpdH",
  "key10": "xWSEpAdCkqpAXQPt4uceivbGvYvwvmth9p3zWvABHtHU1nnFTTPshaRXGPKXX4hmdqsLj2jfj8iaQpSo14wSa5c",
  "key11": "4QZ1msyw7kPNsPeFqcXWyV3a8JGCF14obozWpyJbJy5fFGfjcKdoUexrvEWBfEfcSVq5BngnCnjjTgcR456dMP2m",
  "key12": "5qgwEtPfr3u5odtMnXpxWDNULNKkvwL4XtqKvLDSx8ZVfQnYD5EAhtyrysCPsHE34LZP6tYQBGxrPPdgE2EaQYYx",
  "key13": "66xbWPo7md1hKGugg5q2bEZ8rAtBZvoXgLo78RB6NM1EuH2pGJHSuWddSsr1DNGj79rN7YkLSjPAokrBRipRgDTL",
  "key14": "2hgWShjp8CxDcbpypxgSuKYv2HGR3rjdu5A1v6iuU41HKz3sEn7TLX6bxQ8dUfRhqG6VicCAzgKqR1VHM5WLNKUS",
  "key15": "3eNuo3XwiTDMgwkWq6RXownAvGqoHMA9hNe4PaGCyXMABR84ERAmzGKYbtJjbQ8hdbKiWHDoizZo7VRCvRscSV7M",
  "key16": "4GbYURzZr6EtSmUiDZjhWtwBo4mDJ81cXBfVvCScJsked9uoU4heu5ZUw3tLuCoqwQcSCCCnnHYBk1MmK7oTpPBe",
  "key17": "7To5rg4HKp5pYtbJzS9LDz6BjeLzEoGFkTEDi7ZT74PMdW67eA3VBW1VJPChn3vgR3WGLDcMS6cfDXxrdvYgoBg",
  "key18": "4mJc9KyEMMGUSRY9U9Lq3Kjdcf58BbRMTXLFhXa1UVUJBEdFzWstpmZfNfMEokrF4nTExgbreEC9zQrfQPrkJeRE",
  "key19": "xVLrmKeJGizWGBsTnc785um7QuJ6ebhKN2WVesh2sDn5aMXwCTtbcSBDxSbQtG4sw1pSEc1zE6eRzK7AGyjg2o9",
  "key20": "C3qjQ3FJKL1568RKJZChznFycAV45AnEvYYapWNNn7zAT6o3dU1eHZBNZei2WG753JRg21om2kJCzyLnMd9HMkP",
  "key21": "2pGA4d93fuUugrprPsC8VzQrSZ3cBMv8nNtoxrVoz4cGRgvpZvdGjcdxnDDk9btYLJzhZ9R6fEFyRNg41JKH1M6k",
  "key22": "4ofh2b53exaz5buDM9K92stXLpySJes8eeBxein84BHunUraa52fq6pya2mhELMyQriBR69u2gS5hd6xHrk8zPv3",
  "key23": "5aiLFewnUkpAGSkcFgztxba3tsyi3EzqmRB4tUzj8MD17WRkrcJ6DcCQQqSaLXd5d8pp5AFkx397wPmWMw7GU41r",
  "key24": "2yA8vbdgrSUFkm6f9mVTZrfgR8nMUtc2QQNZVdgjpPKL7qjgEatMnGHcueDKCWkiGMBCJxV31nkdsVMY3c7ohRko",
  "key25": "4RYF5SpggPxvzqMvyagaxjJBx5MJwFobRLMeLcRaZWTZpeA58fKPWjgwELBkL5BzJoxTMMYsXi9xemDmYyysCohQ",
  "key26": "4iw9uwySpKkLPFCCMGJp17ourkmBCkMesaWYGWbjtvGmWb11U1rStmgh2aav2mvt9LrG4BxjSg92qg5US18kHjQ3",
  "key27": "3nFFCnUX7s8czTczBKcvEqbYdUDarnZJHtESm2FWiCCRcsWoyPPpReTo1KpPT44CGnuBLks7oVd1jaxTRk8Feknx",
  "key28": "2BtdGujE39uXN5qJ4KuPV6YDsmzc4N5aPQ67KVQxNQ9c54Vr4qKFJ7RzCrcqJoG7kLHizdzBLLX4KWDRaksruruE",
  "key29": "4U9qeyQ4CHuci2tDyQnxMcpQXitVpLqdXSdMKidrEx9SEmL7q7XY7YJeUPeWXc8vowtpTYB6HLvRhYyT4s67YxSH",
  "key30": "3SAdnZn7nkUX9Kcj7aS7aKStDRj44sc1PoicPALcyTANBLMSeSRo7k2K9EYwuMkTp5ZrfugRfUf9FcThrnWsJ8fR",
  "key31": "278fXXz1ThA5pDdE3f4htjv653kZHsDuEEjDX6y2xoi6nxGS6Jd2CJXUDbpFUgHT2q2hybemLJV5QGRtZ7BZXtMC",
  "key32": "3QkN4EmNfD1y3WVpmEmb5NnUritHw29TwP4tyrcJ446fBxowGQq8u7A9oHGKaKJLRLb8VNmxq6gZF1KsN42bfwsE",
  "key33": "54NttoEJ5xa4j6Qtdq3s2nBTSAey4DgHB4Uqf9GDH7qnpvdyqAjVgDzZW2s3GZhFK2BZn2NQH6BSKsQ7THDmirnc",
  "key34": "snRRjTiewNMY7Sr9az5aBZmgAhSm97qKffTJvTzjZv4F4QvDnUjiPufViLrb7wXxQz11QSTTo4iadUxtzFnPzeK",
  "key35": "3Npi48Pq2EpxTrYPCtpwpuAEr54kLm2RHp38MTkMHRt9oEVszmxRqk6pNE2qvhhCqAdoKxbNRZaLf5pjHLAzqDzL",
  "key36": "445ERNWwt5GHoA5oiGscwD6WzfhCH1gfeqgYwoeSyvypVd53nMczobcdNbYGYDhQezAG8GAkFSpP5pj29Ykuy4ft",
  "key37": "c9icdknxgftvvKjqEJCtJQEC5DHE5t1kSPS5WDvDLinQrvRiUmsfL4wsi1MkXBCkTmGW9CuAD2dA38GAwcuzfmR",
  "key38": "2SBsb7t5TcVwVR4zzoMUQYkRvQjkorDLfEKDLNc4na1AfEg1aKjcgBp2p3y5WmNQZr5rtK1n4BJ1xyvFac8qLB1j",
  "key39": "4Bv4xu9nNXADV48c4FQSZMYCFsK67d8FPvNk15Bna5eCDZ2v2WXrJMULEe168QcHcpxxaHhUHK5WL9PWx9NcNsfy",
  "key40": "3q4RdCVS59ttkUgi2hu1qQXwQcqdvoMJKeqvNJvEGoE3Q7tmsWd1c5G96mT14Zni8HPUiZkja9PSvkJUptHjNjTg",
  "key41": "2TnRPguGzpQhiaSBNTxNHjtuBAWPBGFemiV2VQu6ph6zq82UrD2wvbq4YHCvHzTZQSbxKwKpa422Z64NSLR7QeFn",
  "key42": "XvEUs2oPPphUcmdNoxWPH4ersj57i25MxWQQF6MGWK5m1kiMbDYooSraEVQYfcFPbfd5FEryPd5ouvGFrHEWvRw",
  "key43": "5uGW7rUKTho23boy5hNBXNKbTziWbiAmP5v1DQgZndamiNGubZ7r9gme7xFi4kg4oxkN6mUnArKFnqRaPvdMhys5",
  "key44": "66Sac82MabQF4J2C4SKUKEr18tvJF6YyXn26UGCuohB79G8LU1WhsTykLXv9o8a4ZS9Ag3Z7GiwAgB8n46NdW5US"
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
