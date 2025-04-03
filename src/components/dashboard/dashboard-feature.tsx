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
    "yuSjHxFz7pURiFi6C1D1uJZNKLTaJykZowKkFXQz4GTgm5pA1CXyf61bimz8NrUiiZVn7cKJRSk4TFseiujobPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iok9kCfuLXwcuR6RT2fb76xj72dzSFjVjhTDNStGnfTRXb1P9zkSv2wUKyhRFKQDN1Y6HhxTxKKvnN5Gb9SS4hP",
  "key1": "22WJV7i79epnCPKL74WetcfSdvzvrNAA3JWbxGPvziFtFJ4EnqdNFWPXp4xwAoACnM95uWk98yA9oa3uopZfVWrx",
  "key2": "4UnJBizvcauE9Y9FQvCJeqMCmsC3hsrMmvZ5aguXFVpTZhzwMpKGEydanf6tvYLpCZq7Ums417XtAXeFez36bbcB",
  "key3": "4wE51iU17zyRExVvkm8hUsVeXxbTGz1Lu5KNsW6R2Zr4RoCv2oHevz8jaEjoo9GAzdJj2NMbxNHDQEF7nV66b6Ao",
  "key4": "2BwNHMfCpF5yG9iBq9ju8JG2njexY9dezPRBz2SiinZJ6cTY3PxjEHKwNEqxfBdGXc7uYRpQiuZQPT9XLsAw61gh",
  "key5": "35YhUsK2qzp5io3AiiJDAx7BaWi54aaGYavx2P9jbYoEDFgQgoKDcbW9e6XVnPJUYsm5hpcPwr9WdT1p1Lc1kgnm",
  "key6": "61ZhCz2zCt7G2eNrRaamKCLNTB3oJfgwLV6mozzf8zv8KNi1xZAeL94SzAYF1L4TGE3nAoyjzviPwRPVKUTeCW3s",
  "key7": "4keHSWk3wiNpNaqcBncRyqsW3imSjNGFY8Uo7qdTCcYmTeVZcrt6qsuE39AWYjCCF3KxH6yf2yqcFZobqWm2UZYA",
  "key8": "4PQLdMmf2B24XJ15Yy7jtfvh7Bz4QtEHyp6gcdoff6ijcyB9PfD8T6BFzbvBUh28uGGcnm5XtoQ2vTBLJoCkvmaj",
  "key9": "5Qn2ZYrmbsETLrL9i3x9Njq7ypBKZ6rnqauHFyBQYDVbxgGBEAYykJ3aiFiZD6Z3RygwDnDsXMAqRPKSc5QEomHP",
  "key10": "5s1v1kTHgqhPeegPzFCngztdJBqKAxTiPBFbwoYnfGtZiPihTpM7eJcmmbk4oB5aTgEp1zjNwbT4GEv6Z7PkyZ7i",
  "key11": "4DokX46cnpa1VSthW6zSzP4vj5Wpf1MgV7ep1cgoutuNt1GphHXF5wS8be6PJK5ckY2wcXeLiddvbJvgwLmtK16B",
  "key12": "WcjyMjqL6PEmmjVre6tt3Scid6fgBeai57ZGHTstQtSweW8eR9p3XP2MQMQezSs3c4bwVqsRTfrcyKm9GeGb8t1",
  "key13": "48HmMp2uPxNmafqhymYpHMaLxzi6N23wL7TGtKN6zcojavJ6CSsFWkt8ugKwtQP8iPHW8b6akU8dFdwWsiiCkyGZ",
  "key14": "2bH2DTV6nfTqkGsYVKtfztjph4o78gKAenyz4SL1uuwRhJ76n4hSrCRHbbWEYr3JEoNmXemAx8AKXA5AHCixLh3y",
  "key15": "5mV9pPdauyCnfixbYVBDMJDrVm27rBcpo9ri6ttwNGod2C6s1G28batLiMBwmbia4XTSe1eW7Wcb5n9dbKiWdfUZ",
  "key16": "42QJzEPbeev9c6p2vaqDRmh1H4Ujrdp32bQE53wDCc2PoFZGPCjG2a1Cgx35ARQwteZBHLkrkzWJiA2ANqhcLHTW",
  "key17": "3BrLcYJ8HjGVMGdji1zLPKwUnyRsfB2pZfFfBqy5DTNJDvugXMJpSkqFYrofjAfbCWcPWUBQsFgc6zg2BMyCNjt9",
  "key18": "2HQCSCL3UiYqh9yjHoJgcUrWuNYqUE7PAJC4wtYQpwLPq4ef3mz4gh22AtgTJs1UKNRqCb93gzv4pKJPH1ZpihLw",
  "key19": "h4f7MZK2BkVssXyvKmTEgkJu4Dcwyt5igPPSdwfeVpCEgsVwN97Ki95drkteCsVLfP97sBAwmFziveR9CvqdY6h",
  "key20": "2qwVotzSAd2iSjKiSh5657yEACxNVu9AJCDVqXKJYKoioqfw8zLPq3mUUcdTrdvuLv1xzeQbWBwqGUaKKvnRP4L9",
  "key21": "52jWTSdoAmE1ZQLfZWvGHeBBEvJv2acV7ya67abCBaLUgb2vn6HPg2g5bLjwfSA1Rh2dUSQzHF8KNUnReCNv6J7G",
  "key22": "3icuyvMjHd8fCm7GRRsZwfqZeMYGrUMCMXgRd6P5ZHDXvhNy53XZWiPKsrvVwYdn2bFciFfednFPuy8hrmh3m5St",
  "key23": "5SXwLWyXL9FauGYrqbhkxEg6F8Tgk1X9Kz9aRWTjYjVsboFz7thiuW2MVmEo6BKPriUNH7fQaYv5dS4ZzvDbLKNn",
  "key24": "SGzb8r4wdjNTA382num6R5mgGrzy5w9EH115i6kxxKaSju5FM2N9dEXiBv4mnsq2Cz2WmDcRK7ponDSP6TsLN1t",
  "key25": "AbH8ocRu1YgoYwxpVB3kof3Gz5Sz3yBu39yAbH9aJbytBkMAbjfpYUfWHGdUudKzckpVQLonKbwzu3e9uoFVXVx",
  "key26": "4G5WMhviSNAVb2HuHFjvVPmNPTXR3oaeLwFiqwpgmogYCcdagJUkN7QwvH56yDmeouybfUqNw6CgX9ZJyZ6pcYpW",
  "key27": "55fmU6An5Z7KVeDj2yUiuw11jKuYFgVdpRWB6fsfoAk4Lahgqeoann4r7WDrdacX7kTHx8JCfvUJVt1chVKgZA3q",
  "key28": "4jEYS6repkjutHa4Ph2EeT6xd8XxZakuxGRyDoKMmvzu5eAjpbmrWX4xf5ZgScFCdDfNoEbDyQNe9PfuTtBEpbmY",
  "key29": "zXadVSf3Mfsd4ybt8AMoW1jSbvCC6TxQTVB9agTEV85uK2FyhtsMjWxfj7Zsw76uYiKCKFnahakeXUafVhuVwtg",
  "key30": "SVP28HUXvVqn8ruhtCoksgoo6iQf5gk58fi9St5uBk2h45dJtLkEHpQSC31zduP6RV33QrxXwPZAo1Q8KUvcK85",
  "key31": "2WoNsqakQDtugC6RTkFoE4pWw75vWUhQBb7JJncT8KjK5kKG8zeRqNyPyGc9Qg4MsdTjfoyZeh9FRZ8KSoeHyWfh",
  "key32": "2jB1awnZGShvvzPeyRsFP4HtAvPTcxr73F1nFTgn4Fdp997iaDmTecrQHpYFiKzRr1vH1Jb26y9LRSJ6geCXfdWx",
  "key33": "knqxLKaSk7yC3nyGWqYPVZMZd6CUdJj2DNu81nLUP21egcdvYuHvYLHLT3LQzZy23E8F74FsARHJC5gkb6ChDQH",
  "key34": "5UVYk9EqKJWjCZNcHzzomnAnmSARRTkRR9g2RQbNrVsvZtzsnVkgxZacrQ46JxQFMeSj8p9Vamo6mpwe6gWqchcx",
  "key35": "4Fk3RWr19ThB8WvR2KDgMnntdQQt54baxHkRXCWeDVN4KHVrsrWpasnJNHcrk4XNKBCvWeHjXKD5K5hy6LQcMtfx",
  "key36": "4U9Z55Y3d69NBr7uwXfz7trSdFV5zUrdLN24TA7Gms8tjBjY6BmcG7Dy5wisQVoHgRV5pZADNsr45j8kVqbwbAN6",
  "key37": "5CUeEp3h5yJQT3JeHvUCyaecoDRUvY7XashNSzbB35jXMUUD17JcdpPy58ooebPtV2Kt4GhSTPFwQGs7CdFrvmSk"
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
