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
    "TSkUZe6M2odGWw3zaMJXAXvM7yaTnkwF7p3eZPcVNQ1AjJMX8HxHaA5hLBNGdVSyqgrh4qoqghQMN44gh2Diphw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSsfF8YY3faaNMKN6PVFN7awcMMheqRWjDhnstsvJVD3eJ4bnbRpEzPPya8kD14LtawxKVDDB52mNkibvcK4PuR",
  "key1": "es69ArNGtp6WbHRFiX8yhSyaan2eGVLgsTVpNmWMRj1c33ccy59GY9k5BWJqa3g8L594eSWL9SQZiXMxXLKdG2B",
  "key2": "rk87n7dKpL6wJuVx4ux8MgWj8px8sRkUUxQQ3mqo9wjtnfB5y9vrQsBANqcjozuH7vTR8HHoBaPTN6VSqPz4Ait",
  "key3": "kPCg2Gk88osnVE9GBjM3mEtHcBb5jso1Sw9uPYVNuCx474j113iufcgnPd4KpcVs1LU9F4yQU6SBgC4zJNkN55d",
  "key4": "5ssNxrGXy3YxvFcXEHCNBb4SoWsPqDsSRfh1Vn1MV4KQgzydGRoGtz3sWyiRfTsAifF3wKJ8d6xL5hXrP5cD7mQD",
  "key5": "2mq41KbeXeoDq1iNh4qDyRo8g2hBLVrk2UvXCDmxAxnHPsgpfta6CSJ4mA3SYHbFuJjxMWbwiZqjxMefZMc7Rkps",
  "key6": "2THLQDjpHS5Zgc5kPFxR3hCgwfxzcuecrqeB8wNeEtp2vPWTSodtsyXgWFdUHXJkV17LiZpCLebVYnNs1qbeMQwn",
  "key7": "4GDmyHb8k2MqvNJJ8EnUcfVXfAsvweJAMQdc8NrSbTYHnjwUo7du3mH7VB4gBCDPhQKghkym2RqXyDtWmiMyyWVG",
  "key8": "2kxn6H3jXQFK5bHirxSG4W9Gi4rZVeS1zadgPG1bgrJYwD123i2eWirCPNbrXWrifqW7La5WCJUmtbUFaiy45Mgo",
  "key9": "2mJfZMK5MZyhT96yzvGcxXAGybMaGGHCTB39a76WKXRUUHjBxJgczjveyyGrFUK2j9Kk3KPABmQ6GvEWyRPgaBiq",
  "key10": "wCRSAmfK69pxidR8pRCXfvT1mRMnis9Pk7AHjZTiZu1N2cch2Rn8eEdXgczocTuUPD1B7E7dA8AjkA9Fg5mFntF",
  "key11": "29JZDjPXvmRoUmYQdBviXsu83g84RZBLa9o7L9tA9fvdz6Eqjnxj7mn3v1bofuXdhXaPwKRVdMaGFX7LQgjoXC7o",
  "key12": "ayrwdqmXBtre8iS8BwSPSE3wxrJnddpAp87Mhtrmary1xSHV5u2fyCshmKfanHrbprDYrAjBm1VKyh3pi1PyVaq",
  "key13": "LLmfEdaWWZcjGeaiFCXGrfPE9dVXtvWufnSKp9hL3F4d2ERSvcFYY5nKn14F4VJHShmtRiZ6dP9XsGVBXa4U6Mc",
  "key14": "2tKiMtmFBN7KWsNVoUSMPsdpamoYntmegQQnBbff8vSquLUcS9XuWboFu917jCaDUkbQwWSi4BNYtDvCW2K8SM2L",
  "key15": "ceDZHXJvKGwZuSzBSf5u5CPfc3cD8BuBq2zmJfAtRAVPtarjLPbhXKzNt8TTh9TafJrrVzg1q3pNg5utPn4KUyA",
  "key16": "3NS7heEAPiqsyL2BrNnuCYt4Eby7yPPZb6vCaCrHjUxwwBVZSWaM4VREW8ULGxjxzFqpKbopC2fkna8zyfvCQwpY",
  "key17": "1Wy1MMnmc61UZwfFnahVHBca8hqutFFFhE2WumNCCdYNWR8n7xVgDWrn7qJQWzGz35o9ySZdehFciTyazG6E99o",
  "key18": "5DaiYh3MmEKqkiKMu446awyJvoRD55oTW3wRvJm9ACPVG7QaWWGkSB7yeS2AnHnCWs9HSUymKQmsgU6BYMZArfpC",
  "key19": "2CERdLQDBg5h2vw5zsagegqViiCsBFy3W2vTY7MYduGa99hCVQsDhwWNJJmAA2yLxbTyQKwdS5G7rzUCw1MFCD8h",
  "key20": "4TMUcFJG8tWqEKEetgsUjXZrA12wXyHMNN2MijFQxgHmNw4FUq3TRn4rHFUTqjASdMVPnYa6dZuW8oG4k8jPKtig",
  "key21": "2gEdKQH83hQ75PdE7KWbz1AppEQrrviMZBMrYhtZw7z11r6jxfp8VF6jcBzPBvA6YwS2ojzdv9vb8oDC88H6xqgK",
  "key22": "3xGmANVMZqSEDoYHaqwMhJeWKq9p8xUEG7C3pk55EBE1ZZT3xHT2jrmf5CrC3NP37xYShmL7uhUBTrXRPgfeNgpZ",
  "key23": "3Abvp4VzLDYdpJ4KPiuvjWUgDViGLosbwXdSUf91YDGafsJ556ArBksfuanD47UQELDNofPtKHaJ6tyRSKrWoxgE",
  "key24": "4SMjWgeY5TopAmHqke8Fw7jYQD1fh3EExtSMVnWzsRfPdGASbGzhep6GJ83orPXkGb1wTSgWQhneYeoYk36rQYH1",
  "key25": "4LYDDMKPGVxkaNuHG3pyRfikfAmswQ2MYuSpnZspT48tBATTRDp5GNzEgtaXtVhjwaner3Whf6Q7yd7Wg5x2vh72",
  "key26": "3Q9B75FXsLuz7BiCd3SAza4okmVnXdErbvRQwq1JJgWzbHf8txxdofzMP8525fN2yzrPZ4DdLhfARfZi8yx4rY39",
  "key27": "5g1HPUPznEZrJJuFwgt6UWWkMhZqctw1mmBnu4hc9wyqzuNxNWbvEfSYngCow8GqfvEAcUZRPDqaUJwHC86m3V9h",
  "key28": "vLaeH8RhznPhG4MkkeKT4vb2b43SP1CMWL3oL75q94JoXiwr6DR5RDJds8wh1gCWoZkM6hakg9UEokn9GHuoZ48",
  "key29": "4KPu3GkvhtdxC4GQCeKrAqqB598hegBpcwk3p1dqvn5QPcAk7ZG41t9WeNoypAKtp3yVxrzcNFnwdYvFNmJNm41W",
  "key30": "2ProdUeWd9qGpt7etJGWvJmPf1mxrA1A1sLPPpaGsWGe3extLbT1R2sxxEgdXwCg6d9ieSuHckTrj4RpYYPjgg3D",
  "key31": "44KrcNWR42TmXzHNmx1tv4NHiSPs1N7txv6Yw3KmzSAMAeDSFHtXLSD4u8izcq6R6oEhhfaJJRtczqDmb75xdgC6",
  "key32": "36qEuYJotHtbn3mcmHCeidu1fGP6LCtum55J3ymv1ctwMbVHpdnqpGPn3zE3U95VNRx2cX6TVrJ2tLHp8NESf942",
  "key33": "2Vj8tB8pZcr7ivX3ETxvev4foQKaCA9gUTKoEVFt2LbuAQw3sq8SXHZqw6eVsHtqndyhwQ86vAcZDYuejb7sJRvr",
  "key34": "2EdcUidWgV4ss1a4SHu7BFGV4xrAgcgoGW4FHGnC5NTwiyoDVsh9yfWPtWmNH1ELf2YSVHYD82V6ui5Km4SwDebE",
  "key35": "2cvukMZavwbDxovxarqyAaJVLoacnSLuiBfWjWQnU5y3ywH2jrqVPLKucyszqkzHrijp7GXGVA4JsL8JnZttb2JH",
  "key36": "5oGpQ6WdjwzjAyuVDDU9p7crv7uURo8c37k9MPMuKQqkoy8nf9FcPVGsnHfCCSujRJVC36KQmzB3Jzci9NXP9BmS",
  "key37": "49qSQ8gbPas4EE6amjfkYcgzV29PUHy1hRgavikQ7FwKya2udVombKKCW693iSNJMYsit8jWigDL2AmnJxjzo89v",
  "key38": "2KbphVkZPPPCwZmS8HWpGg8T7qRdjCmCPZ4vVcWtkGsuJdi8XZUWMj9mnhdGNsRMD6EYNagQYmq95SU4VGVkUbjf",
  "key39": "4VvbmtBQ9edc4y97HDM1P8SX8tnJkYcvdg2LviSK6JBKdhttAcT3LkRK3kBVddYS8xmrs6RFdF9THdyyvWksxZUa",
  "key40": "49UAuRUMXZSFT4npqm86k57eviJWk7ckX22iY3Jsintw5Y3oQBCN1XRMzsqLutRjs4mWnxMWgKZ4Yzz44kAcZwak",
  "key41": "31ZkqvV2KMcneoEANKWb9yMXsEyrKPdG4NgMkTFnJ2MeYHvdP959V4h4nKMdzMmqZK7TqBsmEPUx5XbHE6BUgKD4",
  "key42": "4sPcU9crWmAG9ACHDuGjtGkt18y118Kz4ExzcD8oLxQYRzvJ9TuLMobV9NfVyV9Kj6rTvg4WW2TxGtka9iU1uLYx"
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
