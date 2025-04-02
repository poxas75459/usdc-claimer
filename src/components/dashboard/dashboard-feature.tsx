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
    "66q1j38LTTnRHuUMDPcEVupTj5J3TzrEQC18pt1YLdn1J8ZtiM3dxKkPDFXdFGdZYspENVPWbqQxHknEW8w6WcLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDVJ49MhbUB2ESpXMqtFWdsgbKcZdJ8236v88weXq6FCxChREw4hpjSJgAXogrri59wH8vtJaRMqU3uuy8E5MR3",
  "key1": "5UHPXSRQTo9VY9RpYf7ApvvcJYTcdGHiZm2woMfa8k3gniHp5A5M6CKCtXZVEAKqcvfUXJSU8ENW22e51qf2kjSF",
  "key2": "3oek9ewpUncBHgerNjMtB1X2g3HjCjyKQi2SzY23QbEajgtWFUAUu9iD6veWPXqEriMjyaSyq39bto1DAVuQb5uj",
  "key3": "V7yNeGbVM7hvDafY5gxLhVcKaLztLQedb48v2X61zkS3UDfP4QECYcbLekTMwdirzW5VpksnjSNSw6riZk43ru7",
  "key4": "26XL6jM5yUZRXtKUfQj6hnENApPCCqKw7m23C1eyP18gcEt4Vqeg8nZUiQKfQRBsAgqxCixuWd9M1eKnVDiArtf7",
  "key5": "EwwudeE2vNRU82FxALMB7DPst33D21CMA1JnjtioBQF8A8ZjywJbYRwvvUuwzin77qu2KaiBjxb1SebQPNi2KPH",
  "key6": "epw6wizsQPjxfY64wPWD312FVtRmbei3FPwU7mKhDYQNbZ4WiF48Mfg7u9Az4ZE1KqxyPBEwe1wzMWRUaKvFQTw",
  "key7": "5zTcW2kYAB16kGYnn5TgqkMAxLrsbdCAqXvUcWi18rkSGo1mnQ94snN7jPWMmn3aYxH6Ezo7Fxu3WNjVUN3rZjWw",
  "key8": "3y14j6EbVE6N87zZaHineFEvcigjzBzezApRbiji1QbPcHzwTirPTee7EeVohupcMhjW12mRuPDENVshexLjgkBb",
  "key9": "3XZiDgs15GuvSQXJoaSNMkpfWJbpjdC2vFsSKJyg8hqkNuzQg98Y6jN2Uupp946q81uJLHkFzH3H3xyDux8Vmv4H",
  "key10": "4UDT9iFDFTqxRkjDcCykixaLSHoN6MeT1or7n8UNUAqVbQo1EvSG4qBjWLGV35deiuv5eCwSbmQgqsn5KYXJbfZg",
  "key11": "y5dNj27WDQn1g3YW2QFZ72LWK4XFn5Ttwp3G21rZoLiAu8jKv4tusiLuccTT4Az4Bhewg5rQ8uMy4QkkJjqq43A",
  "key12": "6in8fbspG5pmzE2JPidTggJSUYwy3rKXD1DaCL4E8Xjb6jmqqU17y9bJC2veuiZeG1DCZMHNPDC1uH2WriVPYPg",
  "key13": "3ZM6uSkyCfTpyZUWqpBBscC1Rv3Vd4LTReXGWD4qx3tDMSbjtFPjhkTGaHvLJZV7SvRF5NPfzR2zfJwwhjam3HyA",
  "key14": "38yGPsL8zAZivZ8nsE4fik8aKRghb2FN6bN78U2fe8xp3C6PJZUwsMhobKsFkJGd5zgBP7MiCEUkTHYnbCeF2fwB",
  "key15": "595c7A7SFUnfiVjj1M3cXh1AVGWHo7rrS17EWGcPFcwk2ob2QGnrw7xxKcxCt7dbG4fYT4JuLS3uusr8FSTSWowc",
  "key16": "43ghMMFXYgzXUrjJyN8VF671PYSMJHcisTYCwfWufCC6DZV9fFiX3m7M8rKGs5jQWA1L3vAQavNCYjaj2praQV73",
  "key17": "1221sDmj8QKSBmUuJ4yYZkaDdFSejoNrHLcjuU7de1nB7F2PzDb1zF619d1PYPE1THvRxWDXTu4NW65a2rmsNWLC",
  "key18": "2ujHE7dcqM9dfuXhL4e5BWT2bMRa3ogvtqMo1ASJ9c8uYByzVa2vNS9wdRdspdgaCzBEJBxwJjYPQFLxfndQ25aZ",
  "key19": "4TJk7gkcwyRsNEn9ZhQZRuGEXZXzwCQZrkxTuvWuNcbeiKapSNRrBCRGy5nkvU9gZbyFTaGbTRogT97s9aPetU6D",
  "key20": "ZWoKwkdRmpQ1uzT3NsbcjWrZnmPKngVK1NqAFQp84e6F6f95sSR85D5og7fFQBb7m85jMmVutNgUACMwwxGgkkb",
  "key21": "3LBHntRuMTPddUu6aMSJoqQ1fFtyBDM8LGXMYMvm48tKhVYxWo36GRALnuxwHQ2N7ifZ1sm7G3GKXP3zNwyQuetP",
  "key22": "4DWNPSuCgffEz6tJNKPRosbKE32hjyNnKv6cDmDdjYVCZpPB5Y1zKW27GQKf374hky4MG6FhiPsgXS9xbidpk6LS",
  "key23": "42y8U4vpWz2yeichUVMw438Hn3eaZanyPDRs8ry37hJ5YFhdaovAzw9jVVBrbiHHuVEPomdfH2j3cfEpSSAS2Ufg",
  "key24": "5Z77Ni4BDwerZRp5pzbtt9PePQpYUMXtZWqu1HjBMsCe6iWQYYCdnCfgv2BZmX2ZhcmixtjNJjzNrtLbgKHEbhgW",
  "key25": "2XiUF2rMbhj3KqYUzifinUZrr7BDtv4ENNt2xpk6EoZBFBAH9GpjGt7pjuSe4B9udgJzctXmv4RPGFYaZSBTMdoW",
  "key26": "pyXA2QWoAZ7kX9PvpQMxtiC57BQ52CrxY22KWmj9qfKrTf2Lb3jt8TMKgc1j6j2iSkTRFBcpn5P9HHvkFToym12",
  "key27": "4u62xpFxxjXTr12w6uXm6sgPxVFqqrAGM5WSpw1zSd4GNMxgYzuj7XLSz7d61YGo2yv4h5SiF22TvWCTPc6aTjA4",
  "key28": "4xvgFi8gbH3y2MbhcEswMo8596hopQ6LVh1TBFXqt71jGsW7qo4282qzQuNtNPAUsKikFDyxCKNTHHK2PMyycbNP",
  "key29": "313z52Enns4W4nogMwdVXueU1sCSabLnnRNxVM5jonPSXCJKFpSAnDp7D4U5AQpXKpRHYpqtfsRPVbC9yJHpVgFk",
  "key30": "zwTe4p3V1ijSrEDDTrAcg5K3gUYgP7A88vcwQAGwodBekd4fcpffExKsKLvW2ABZtjJo2VsHrJNE5z1s6jE12fk",
  "key31": "5kwbSRowsmNbtuZvP2mkrorPzMyNNQAdd3aKz7xTsEjpSynHCxdgqjANMhMFo24YXSMNoHcBSYyhA7H1FJkp8Ctf",
  "key32": "9hbRzoEZGgNLAekpdy56xAvu1Uz5sCW2rL9jyJGZ6NFNW2BrYE4Gv1GNAwgkNWxo35gw32tVfCGx5rcc8MfFCAw",
  "key33": "3vkrgV2M996zFJg4TFFYsEFMihEfpEYWzbyVKc9tRN4wqXTQA1fTuvP9X7kpULMBpLZLkuktk1qtKrvoBpnuxqhr",
  "key34": "4avAYM1y98X4axD4sezLsDcydCJjPxNu1YycehDUheyy3vwFF7BxQUU5789ZkFzo6HZ58E1ykEwBEyfw5c4iZfga",
  "key35": "3wLdpVvn3Pn3Pgr7mxHazGVcfPzTRyCe8gKuruBLoyTqGPSa3Qz6dcMfuuCGtFTMxs21unWM5uk84wzeZ8RVVr9J",
  "key36": "354ZJHZLRRUpuamKTW5eeSNu7Qp3kdqVcKHc1fs1gAvHxg6Ts8HAXr8NeG1w2u3w57TYdJma6LnVd1dg2nT3chqL",
  "key37": "L64EAZRqpdGB8o68LmQoMTGiegLLZ31HEhZ4n3i4gBPttLoNHybZ5wYshMsrXTx99HnveMazgqXSerTpzb4Kq9V",
  "key38": "rt9s1vw8UybewkZAd8FsNj6gGdhyid5yZMjLNT7XVim8412ZxjhU2Njpx9dS3iV4jmHAxcaAvciesyGiGGbxdkg",
  "key39": "5gaoLkTe4Pcwj6eTJUYWHbLcoScAW4hkLoH3U4QDK7yJ3ZFDmVXxdJ16KDpaWrmKYKBEtdnTvw58j7YH4VcDCoPY",
  "key40": "4qveqEMR74mht4grTMu5nLzbyRzdenKGwh1oAL9JyTaZZ1ogUYr345TFi9bjGSmkhvAtKrxUirqycM2kNaYGX8Yz",
  "key41": "3YtTxoYq5A719XJjaQHcSYqZadVif6USrUzXioqdkbcLsWwFHggNDJuk4TrhcDR8c9EVtwwMz6fuMZnijeSYZHr9"
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
