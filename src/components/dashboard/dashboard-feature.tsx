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
    "3oLp6Nn8TZ84b93BUE1hpjw9thg7b6yrWkiasN7UurjzrzfprNGKrqi9o6VszDQgQrqLjQ3YQ3uLebqpXqKUS9FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPxUa8xQK1HATqVeHM4vvy2cxRH9usdj4oSq5NfSHMs9nNqtwAm8TnDCvDPp8yEgwonQEtgKqUGX5GmnLRLXHjR",
  "key1": "5mhMLU6hv7Sc9iQZCHQ8jmr1UJYjwUoeXp2APc8wNh11VcfBRkMpgqxyeogcLcDKQQJ6JwamrKkJT6Sxn9Aeyzuh",
  "key2": "2hWnkGdYjiCUwLMgsxwQDYDkRRjqMUuuabrvPeuPfzFpvx5VvsJR9X34W8QBDmHC4S3ZuBqb1mbqkpQuHpPvk4TZ",
  "key3": "cmQ9hptYf9BFQf4jKvq9CJW1D7eu5kmwEtZwWXCubscw71cP4seJCVaVcdVgsEdSJ1zuuc5dWvfm2s21cxcqE2b",
  "key4": "2xvEfBymyydyy23xdBKrNXkPigzzAJxMyBUwwXt9P7sCjLWA5qn1vMCSgt9137Brgzfi1zdnehagXwohuF11HNTZ",
  "key5": "639fS7kUbJLmgQ1RntLcgp7S3RJTixjUKXxwRP1Pu7pdJSwLEvWeeaj8ZZh61LHRFQ65Bvav6KH2fJXyCe5ggcLw",
  "key6": "5YsfLXGvDTEGYkAdDRq1cREJ4CT43zL2LaEauLLPT7RQ8SsqySYyuLMU6oT2Ecm4he1HwcG92ZGLv6N8x1VLsgHE",
  "key7": "5WHxYo6HEXKBwKeVYF37ZwqakRR35m7wwQ4gdbFoSvQ7UWprgP799bwB8pVrme52BkUjfHZ43xqgFgvrxgZSxyk2",
  "key8": "zW8Q58HoWp1CayfwVt2jDXRyrnJAVT5q4kwsKH31YtmREhCRbShJRU1RTTRgh2Xt1i1Lu492M7qdoaXuLm2Z2fm",
  "key9": "3Vfk1S7o2esLv7AdTdTbHKNJuRVRd4FfNFgT665zsvrqk5uMuuYf8YfDH3Qdoj1QiD8cFbnD4UDiecjMJWQsQuDQ",
  "key10": "4UBKMXuGdXfoVmhUpgXTSARb1S7Lg8gSSZX1jAr1gudW1qmHNMmjsrmBvDKSEarPWgAp9K2zeNNFTjyiRJA1M1RK",
  "key11": "44mVhfNz31xyWC49JTvWzYykNGw5TAUS2wcrjmpSsAoMo1FU5SUs4uYhLon89FAJ6c2AAR42KnsgCutjrYGnYmrL",
  "key12": "2kfiqtTF76QZ1ddYqT9zoGC1taoezQG4bUXFvDxMBx31JxBEgXdbjET1G4vqboACV1DQHE1CqUWC1yhEYiciMTCy",
  "key13": "36VsrwYq1ukBqN2ZYG8BWvMq7j3upYFUH8aeWuGTVsmbQuv3WdRik4DjNkwLKD7qonJcLLAnaXgyzk3TUaMMF1Ez",
  "key14": "5GzZQjhyVoaFud1SMCxuHGMaNpR3JqL9t9yPG9HPi7B5qFyqyDkKFqq8BaxWSGJn1gqzSPbzGREF4eSLduinbCBB",
  "key15": "2vg98p3FMiao4nJwMpEVA2FWH57HS9dgMa8LBUv9uL7BYDnz6aNTbZU9VhnkM6HFT5BTFXqC3qhfzNDD7pPHAdrz",
  "key16": "5WaqxPcGaPg89qSknSZmWA3ZAuvpzaPiCjSyYGxqYbEtCy1R8g5hmG19Zw5pgxGJH9HJzxXAMUCh9nar3JiVEk88",
  "key17": "65QPn8TFWupYWvPSf55qpNYNsvbNQhyW5RNhCHeYoyZ9Ma3CZja9WE4PqRxoBrSbN5FPpTaWAezDhRgMbWu91KKR",
  "key18": "53ixNaSGQqYYARgmtnmP7nLe8qjRPHEs3LZMkFhvJs1kRbbPZHb17oefRs189gWRu86PRCoS7nHyixFDTVW5PLJQ",
  "key19": "oxC8QF9Mo99K5S2gAqYdHvGkasM1AiHPMppFWWDrfVVCZ77mPFN68SbcYuDfvvhj8hJSfV2FKRcy1RzcShz6L9x",
  "key20": "4odBBYSe6bPKzirD241FiwuEL9mzNjZDHcwwgiYk19C5fLEvfU2GJ9gGkxtF6o5eQXTqV4oMpvgUGs4NeL34MkQw",
  "key21": "32rE7SrUyWvn6uvjYYzDg9CtuTX5cdfxEdH54Mbm7QBeqdiRkcMQhbiwhNUAH2mqhRh5KQdn2WZuuNfmZkoRLwbb",
  "key22": "33Qudi5oqQMHESZwWwYYxAmVtmyUVJPsjzUXB3HSGmGAV4aKGBnGuYw59xPMUg1qx6rNyJMgCaTakcvRgoX36ujQ",
  "key23": "2k9MqVNJ9NkhFPTXiRNr1x4YjymfLmC5mKCoxyaUoGXDYge1VUGstSPw3QFh7rNFvUdr52ANMRG24RsxXdgMAmSY",
  "key24": "49Edm37ujtv6y3KyHpR7LU28FfNV5WykvW34ncvcSDD45c62zNhGjuDYrqJnJRiV4mBWsFevWNdGoB5AWoJMjtmA",
  "key25": "2uRDCodbNwhFzr675nsMjBcLhczVmX5mvQhStXWtnbtXXtWQE9SsGzxaW1Vu8xhkBU3Xi1CwgajN72RCEU5wt7ZT",
  "key26": "5QW2VRWjjN5phjuC1wk1665fCxxdQDR1GfBMdN2fFiryoAdFQtw5gp9rTjEj9q38EJ5417jPoubbZSPsnCDQhGUb",
  "key27": "66HUt5QusuxUEFym2kPksfYREvKawwfmRVnPbs1Zz7mrAGk3G8ubAAGGaHgP4T9vLqtd4sdXMwrqvPwVWfydT58z",
  "key28": "3H9ttJzbLCWorSQqGA6LxTNRJahXfVJPywRMDbg14fDEqHfvKZq5CJNgRM7URwtV3moxZnLfbwBt2Zb7TfUemP3k",
  "key29": "3rCtGhagcS2gZBCtGLJXUUUkTY3xT1k3fJjMbp5KPTi2zNczvsuozMM568onzrwLNZs1syAzFmeeeW9SJ9C8JAhE",
  "key30": "5BEV6Ga3YsKj9C5WALRqgb8FtqmcG7WsXZHiP38oqxrTUovuypX3MZWZEqporEp7kAP2WriFGkZqQzvswcMNSGT7",
  "key31": "7KytJVyhBNoiLJWggje1MSA4qhk2HZnkMXiSVEyd7aNH9c4mkgjRETv4ssXu1F54H9u9UPh5PQAfRC3DVDKvhQZ",
  "key32": "5iPX4qDMpZf5HedsR9zwzat55vsAn92SM84GeH2uEETM1nmKz9eeZ4EXJAwY6GrpKoWdJWgZED6NxXRUJ1ZmWraY",
  "key33": "GXdtjJn8tP2FMwRBxz6P9QhZbUxVEyZD2jYsiVJyVC5MFiVwYA4RCN423B2MiMmuKAc9ZvC7p3kXcg2NnxsUZk1",
  "key34": "4GJ3nZSMPaxNJSDmhQAxtoxWYFkV3ixu9LyuDC3G8wFLpyfmUHSXXG1hPJkAghLFDPx3dwLUEpjoB6VW1zEtrak1",
  "key35": "3wCkX4L7xXCU9X4LivnTZdeCH9TiTU7Ewoh6Fr338pYF3x478CjYHDAPXQhy69uGgUUre3yfvo5hM3wdt8RWaFpK",
  "key36": "3Ui1AKamY4jiALBEja2AvHx2RKFBHyCkxKZspjn1S1St67LaiE4vE2U1jXP1aa1P252PoB61qWEUbxEn2zkxiSiU",
  "key37": "5yZAfvGXYfqgXRR1svjzoe22hN6g8GrkcBS21S8iM93rvRfKMVnzRaQJ2PrxMSn3dDtbXNWsVW5QWUUa1ad1ufaY",
  "key38": "3F2t9z2BXkpg8rwHuTzy3wUSWAUjwu9uAxYBdKCVE5G6f3cY6px1ZtteE8WVZbBAJJi9ykxLrJBDRDJdC3Q8kMkm",
  "key39": "5v1wq3MM6SFezBSkWEEo6Jok2NXynErqaNJbYPQNgnaoSMYyF9tFhLVThXxmLLBCFviv8jukn4LVNUYoFUY38DYJ",
  "key40": "5qi1uUsjp4PjWxxchweTo9KbX1d1YwLRC4G1eEAt4oYJ1QnQo1hMwp9oLqD8PXKwJcAgxmZ3SrokcmHhRjmdx5Vz",
  "key41": "5BGtJwbTpvGoXhSw5Ac9nuxcawqAj89fRwjpX2en3qc76fPjNRrSMggps3XHyRSJ2ff9eupcFBkXQaVq5HgYcQB8",
  "key42": "vMFyAMLUXnpCvsedmqc72WhL2479DaVwpgQA7Pyiy3jSHWvmn89cYStzhiHmWxgPbgPBv5mwQBnCJX3afabRf4r",
  "key43": "4b8THJSZN4Y14La9tJ62JxqThMSe8C6DFLtJ5LGfPeyy8wNzC8MsatmGHAjkgb1nSUGWEgwp1sBPZ3uzXtVJW7sF",
  "key44": "PbMAedLF5RDBU6GdgJoXaL7uf2jjENJDT1Tr2B9m8wrQVx1kupw44pSbUySZLX7d6iJD19DnTmbbRv2c1b9CgCU",
  "key45": "2SidPQhgEfYTqMeYqMRg623UNmFnHpFGQrLG9o4mEe9LDHgP7bXhooPGXP8vWDUjZTW3rbELFvWMfTe14B5fQDL4",
  "key46": "4MBXBBgYiRkVWwrrztawJCwuksec8p89qxAYvck7PvMBaS6UomW1XikVZVzjv8DN1rLrgLvqMeKVRomdqPBiLb5m"
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
