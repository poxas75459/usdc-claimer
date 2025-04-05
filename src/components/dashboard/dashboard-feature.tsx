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
    "4bYwYC8ezNBPGPQUmMHGGquTkw1dkecLqdXhPuBnPUDpDeABHLUbmdNxMsZdAFk9E6qY6YGSPVtZ2fHLbTnm9aDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fp7BGP7jy4zmdpELjRR5Ajs7nBoVRfG2BYkUpQt75Co3ixTXEBgdnjs4oBaov2RKURAnhCf1BqCkQCnt2BDYHfd",
  "key1": "3RLbbqrCxgEo9wo5k1CCC1cUFxUFxo8kW546TZGE3uWVBCFLXaqJHQiSn7YZ2JwRX2ZCo1PrHgMGmAK8W699fWY2",
  "key2": "36A3uavbEvFwZDnHyoAFfx6jTjUsV1aLmDrQAVWU3EcpqPu6ZZ6MqBE61shGQtoh2tS4axZNcuxZhEcSEQg2QKcd",
  "key3": "2FD8UGaw2bgQuu4XbW6FsMGBGq8bocTF7UqN4wTqe7KavYiGLeDShroZaK5GiVDdKBUriVYgp3B7xSKsirDgZPpP",
  "key4": "4YLxV9eB4rH2DoR4GNYJPoTcXAZxi3t8Jmt4BFydVdKADWiFskMkx7FC6XPQQuZv2APSnb5Dm9HB3kU4eZVCW4Zy",
  "key5": "5tNPTCF4W623ExZRjPJohDoCtJ66fvcd4yZVdHx5cN2A2B5TCyyqmwtje82QXDnGuE7juayEb1FrGK3yY2FHsaw2",
  "key6": "Qegu3UFRaNNbuRhbD8MwHJfPVL6T2oigVAvx14TA4x2o6cH58FLPJwi8kZ2dxuo4QYBmoNjvjbhqsoS1oY4ZUWF",
  "key7": "RE3FVmksWcExNbuaqVfVkD18nSyao594L7GnU7aHniSjHi18Jn6PwU7DMwPjy4LHN38G5xgTT1Gp8rqEdxrzXeQ",
  "key8": "5U7APZ59Q2N8RXKgi38WvmMxDZpwyDrqBAXRHnA5FMZTF4dmgyUTfrPpYLTwCRSSNTXjtEMDUaBfp4JNvxTpJXeA",
  "key9": "26CaaMDvYxS1pvje51RZK6wyaRUCGnJhomBq39Ctw7ttnuQy3HhnfHp7xBqdyUfD9gsMcVmxf7bwZoMS5E6WAHrz",
  "key10": "WwpThHx3uHNS5cVBMgTEufZohGLScA4bR98cHGttFtkUkZBzBvgb5ujXsBhTwpuBPW8d16moHVjsiL3ZN5zcuaR",
  "key11": "3ReKpPKJ6mZqGs3gwiv2g8zJSFVCN4eVbHzoqzaQdf1nHPzHWm5popVyCBN1RYqvpWGR6N9KjdCFx3J2si6kVMxh",
  "key12": "3vv5vpVNZgrtQ3EVPGwZiuMkN2LU9PhodJR7pAEpdjQjnxJa21utmEy7c4sNsQVJmNcAAjwBV8DaHWgHMwxxz2Em",
  "key13": "4GcBqhbkV9k6ADcLd9FKm24WC6HEqPS8fcqa2aM4NNEMVqxEbqTTAfvaWTXDB2Ryfq5aQ9iWGY42RMSHFA1aEVTo",
  "key14": "robNYxiqBsx3F3F1JAke8Guqx9wgDjnLYFDqHhX93Ux3iDpNfQE37SrP9PokcXHALbjxiYaWUE9X5io1tSKqg53",
  "key15": "555ZeXRt7X41aZy81zdpeUWaAjb4dWjSAVThXygNnCjnwz5bLhAYVScrLeGueq3D8rGssweKYGeb9ZFNjiSLSrng",
  "key16": "ksop5Axt5noHrkwAVptVWrbgk8F3tZL62awEhMsjADVSVNY51BgBG8REvJf9N7h26jseWgno5okMEkor3fENmhg",
  "key17": "2zAPXPWEaCQxNNsDtgRNEtthzysRAJ7m5qDC3iR9fyu4DrS7hcGCZsm199SHFfoVqw48T76NU87RuCXwKMZPeCdb",
  "key18": "zoQM96MUbQsbUVLBRmX8CE7a8wnsKxTY9NHSDf4Y8ZbtywMVPb3ehQsZnqgnkENr6qLf2PWvGtRqPDpb4nig1kd",
  "key19": "2TTx5Qb1U7dwBGt3uaTpj2kLwpMoykaCZmCQpPoU1VtjZN1G2y4ncjxoRjU9Co8YzNipW5AZK11QjRAvjqowXwyR",
  "key20": "4X26fxoSKWnbUveCqXqMtWdisNqprZA3twAwmBJvCJXH6dgVnDFS2KYt6aMwYW9br1Nty8FBYQFRvB64ZzQemD2U",
  "key21": "5dAx3tqv4Pf2TA7XJuLcn3cSfXw18BanCERTyB5gip3yBxokfpbefNAaT4dpYQom5LJhdp81znxU4rVjMfin8JwV",
  "key22": "3rKddQ4X8gdWBBK8L7TKNaUWmWijJUaTsvvXYxjHzb57mXoS1navCnL8ANhygqLyZiQhUyJGGFt8bpaReib4mVos",
  "key23": "3tTVjsz5SPS9qqcsd8subqQ36C43iqNtvetro9JT9MBiVhEvq8dN8nfeq19h3EG3bskZxTPg4wkWJTMdkNLMX6vK",
  "key24": "4w6aMcQdqDAWhLmxRQ2KWW3jURnF1ZcpDhaKf5JbMXPYiTNrVVXvQdwXDqTaoW7UETPkdXP11xwEeA3r14D3wFWj",
  "key25": "4SFMPAiwUUUKRPsPbr7JZydPf8nwuVgysBDMuYsfMpFY5Mb9P443vNwstkK8aahR3aRxPC5WYypforyrbMBdZZEa"
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
