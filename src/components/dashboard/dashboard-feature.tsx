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
    "1osBeuaCEXZxCAjJPCj6nGfP1jUFH5nysYawikoo4tmEKKpgKdsV42Cr1ye5HUrnJbUnNMD2cCHqpizZNg9mPoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ex2t5nNpPct59tvjgtnRpQzDAbg7vKWNJNyWLM6WeTwg1yhshf2cMwi5UKnWVQUihVHyCYz9NNzMFg9oRH4WgER",
  "key1": "4oqyG7mERDBkoHHByNCF537s1xBUPN2MPnzDZzGzffmeJj3yhafktQbTWgak3veUKKgJXJGgBBWwoo9YfNM68JLP",
  "key2": "2tGt4A7WfguNB7ZLezY4QvfB3SRuFfTMvYp19LbFDDzmUw8N3JvaASpwKjP9NBCDAndLA1Ld9PKaiSwhqiDFQe95",
  "key3": "57uR15tH9KeAvbaE4FuNz3yXxhVQhHLUd9HrLcDDHv1KuSSksL8PBcQHBfMJbAd7fRaAhWFSiAJ6zSA3dcfmSzWS",
  "key4": "2G1UocfR5vibgdkczh799b567bdKcZ6iFqVKhWQ9wHDVJz781h46JSQpvVc2A8mr1S2vK6Qta7jzoBD5kysNau7u",
  "key5": "479y3ES3P79pPmdAeyV8gkwhAaj8UECVWauNYisRuiLdoWWf88bpR2ncvTXbY2usSUeJeBnE4ZKEoA8QWq7jhsEm",
  "key6": "3FfSiRazqVNS5sZeBgTahJtfi1sWi1XfTyzcPnUnFWQiXWLKyNJsTSmg4APPVWxTzD4xMwGHrqwgExC4hWubQECS",
  "key7": "4UQQK9HGK6a7JGMDhSzfgNR4oM16oR2BdhiPpQrA5CYiM8xNKzJwNF4Ky614sYx1JhkLCqQeH9Ni7FMHw2J1bYY1",
  "key8": "2DLkk2NefFTTDpB8GHFiBAXTWrcBxXs51MjEJnV34MRjKDWYxERswmFVqNeP8YwJB9LZ8rDfgBaAoPvHYaviPyLV",
  "key9": "4ursobtNALizr8F1WnVWq9xjAhLTRJRYAA2n62gZq9uygP5kBtZcPEKnUjSqPtzcwLFhb7a2bE4KQYvk5uBKYc1T",
  "key10": "3dB9BjFsLTddnvqnJa3PEMfZMRTvaagbA9eBmipdTJAcc2X6WHJdC5ooENNSbmowrnw45QxKmEjjpZqr3ueqRQxe",
  "key11": "34k2HRycFUmMhXmiYTAZbSnM4SDACpMiUK4BP5v5pcSsh3pmm7bg6JpjszyoD2z1P1jmWZYwnHvJgMCqbQjTks55",
  "key12": "4tSvEKCuA7dFN7igrQRReEvo2pQESzTXeh8AnVBdVnHmUgnMyyP8Fi8BEVs3Zfgarp1B4g6CsFRcTBC37ih2KfBu",
  "key13": "oLnDBYgNCMd18Zzrwc9Hvge5VL4EkAYu4fSkSVvcHQXd5pbitU3RCEjXHTCQY1LKsvqJmniSPAck8ZJnzMF1USo",
  "key14": "49H9fStaapL2SmyvZPmxv1TdKCnRjFpE9Y5vgiuMN6dRQLoLYUaKoVPNEj63jTKAjrwq8dKsmW9JLs4PE8j8xR26",
  "key15": "JCxuoxowVm4YACa5gnT7C6ANbLrY5gw4StgNjrXsRSsF8wbEf1iBo1YQAva2jXnJzzoBEPNDdWHPvYnieRYM58v",
  "key16": "3VmWEdYaHm3wiFjrSTgXQuAT2ooUA39mXsKUCdz2FLcSNvHDukESAX2TgDvMCaQEKb9AJibdp88h3XF3kg4bemZZ",
  "key17": "52Q4P3bpmvGqP6WyF1tQbS2k3Ws9MYzaEbVLRDCfhz2raP65YLGfq6bGXgrtaXnzFMWEQF6BLSiehRnRx4UPMNdq",
  "key18": "3UuiSwNNzh1DeE59iU4rFVfJoywZMfGQFxxeniipk8yAN9VbJ2vHyRbVcYriApM9RRafd4kRAcBA52F6KCjjS7kH",
  "key19": "3tpxsNwZ4ucFbMQL6dtvcaJmQHhPzZXBAUA8UeL5BoJer8yZGsU8aGQgprFfcgmqgP5vd2jwKChm1hjGv8U18ie8",
  "key20": "zKBQrdvYjBo28ZrmA9BMJvvvagYukcDSrbhEikNNijVqPFvCaDvgwNHA69XyUaXFwfncbLDKDiTYmYaRvQYqu7r",
  "key21": "22Sjq5ZUSM1qTGhhDRvnx1oVpRaj7wC6RYyidNv4VpLSGixuVbDrqXHcaYdMLDu6aRb6u3TEC2HCgG7gddLMWh9G",
  "key22": "3EeQyB6uEDZypDZZCq7ATcwMbzdc2K8koTR6CyHDhowxJBZaH6N4vcYS3xN9Y1pz5DeaVKApiJsxc3XPWw7exUMD",
  "key23": "Q6zvaEDmtxWjc17EhQKA2RHyfxMD9h3GfHfJqQBNyTchG8havfDnaES1pKZbrYZB8fZnsnRXm93gxHB4V1KqAM5",
  "key24": "2vCN77z3pfwhksQ7BPiKFUNdCKDtTQaFWJVSidz37ZdCaUssgKv3KccqrCTgYGhZ4W9H89M68E5rHuxwj9Qd7hFa",
  "key25": "52ahdVoEBTwCxDgASGri6LVzznZXzhdTY9iMxzRRkRgxHFxuiGefAVY9XYmjcvZYt5vjJNcYe3mXhdrP95eyYx8Q",
  "key26": "4b5Acx84RaVXcUpDTBMKVZKnMFSLUAb2HcTNChuW8TycnrrbdE5dxAXitUDH5Hb1N7qndA3cJxueRhqvjRErSALx",
  "key27": "2QKHo7UK3Mgzz4SiN9dQd7NDYFSykzez8uSguRqRhVw2mrhes747q2JigoCT56pAzDA6jLAacCCHMMDPpz91mxLu",
  "key28": "3HmZ7eCXiW7GynMtYvWKFfv5RqBCt3H8e8AAW1RLgAvdgHRva5Fguo7tcRzkKBmUXDHRBg4YfGSmS8U8k4YXqcpc",
  "key29": "2Ams5kyEBufKBCdg2QiPYJytdHKNm4F3REaVneHNRW2LoKTofsrkoeXs5Y7fL5AXbhyYSm75t3sfLgbfrgGQbBWS",
  "key30": "22CxTYU2CVYKdmwwGqWsR6P8HBS4yLQYibgHWVqx51KbaBC9pC7Mw2qm8gvFrYE3Wjykb35Drb2LKukVt8HLvLYC",
  "key31": "4v3qLgNFSD5J3ycwBxnLagJqu4T755obwRhew4Qeqes5KMLpAGNgP7dSeCrEfYBrhPDEtvFWVmjyGyvYjetdH8KF",
  "key32": "4dhsJPNomzyn83iLAdaazLSsBvK813LNpcNLMVGmLAgoK4tEbWFJCP36mNv3rPsr3v81CcdWMmeXHMiP3DXoC12t",
  "key33": "53ZNmsV5hZV6ecH9bXq6VvZqbpyyqf4tGvC7hGWuD9o7dRwNVupGXd9z3PugunKEWwK1aXqnPayxeSCTrcYwkGWv",
  "key34": "pgRFo48wKWQa468q4wh5yuE2q2TzAgvbSz3gVrYoQnycm6KgjYzSWzE7LuM8TX66bBg2Gg577nJ2hkPbMEkgKJK",
  "key35": "2dszwexVgPPL1YAE2Dsey3mVvLTi4eXrMy41hStwZWaRA2xjgBfPBAtfsxtu9YFXLA54QmkMEJ7pWcQciQjiMSiL",
  "key36": "66nKpuH59hSiyFDHrBUfo6Y9v3ca8NTkEsc9KXPaFumLqQF7SCPP8X8cL6KaQFbwR4f7GWtYT7Do96M5yJkdpvyU",
  "key37": "65dmZkk5gfWjQuwxgqf6t4mzaWXztDHfVA6diqBC5txHH7Dz9eHNAaBye9QrbTkBCBSkT9QoaTpzcr39xd35CB66",
  "key38": "2pttoFwk1Xuec9RTcgPY7QKPEsbJL5KZycEuELoUcQGUkyVcKUP6YHKBAijyB2KZwKgHqSQJdiKsQWfMme7po6rS",
  "key39": "SVYEkoComeJESqgNzJ7Tatm8K9U2gW5tdVKoeoF1cYSWozuA7keJmbHDBAUu6NYGWDaYzenADvcmvW57cPiHvq7",
  "key40": "xFL4t8LUMHv7tqFUxFL9jBWoWd411rr9xnuJHGh4Px5NXnstnQdWWVERj53aneSRXQxCWxErpQgn3USRDUjBoHm",
  "key41": "Luhqiw8drX9ReVcJHYfXdhS3NaedbcK43vuJdyjph4yk1edBP1X99F32oeLKUCPA7gx4kH1pXeUs8qCyPuV9x45",
  "key42": "4Yqz3Lu2yUzriCLA8gGwDLa21J5VPSCrKfATjHDH2veG11VZ9ggb1BoXM5sK8HJraXzwNU16sanrSVyKjuSCe5eq",
  "key43": "3cv4f8eRLprodW3tGiZTFD5bvKNXZGcs8wj77kk3SBjyWZRm9P2TKcW1H9SMJEb8ggEKRF6msezwq5bco84nu5Tt",
  "key44": "5sh2iUEdzsw3bLGLdX4LgGMYBAiQiLo8FhwUXakUvAXPDURA8H4P8LcWC6vCYq4e3BW8wCBjCVKLrsSqUbxd1zVW",
  "key45": "5U2M1iyAiKFrrdZByvveBURmHmGsBEtfLKG6CFZfHhCLPAtviuJH4StZBz1ySWDQ4nevnBNau1AvRVo1xSAJs2FT",
  "key46": "yKLzkKvYnpe4ewtNbENoWMA6GE8dyFMgx2ifaVKGwmM2tS8ixjDih6tdNJQSiHENYvTBKzCeZRFk91Swieh4FRC",
  "key47": "UbJWhgjALpaJ8boR7Ax82cjPuYzWR1bvGFBx8ZtH8xYi6yLwCrZSuHbxPN1ooP7Dn56Jw8gXtvckT5D2Ma8tLBw",
  "key48": "3w8JgXxAC97VfhB2h6vVRW1d6GFZVLXY882ggi7FNNpCNaR4ctwHuyiSn8cJrnMGq3Lb531NK3kTSQ6iRp9Wg2Qe",
  "key49": "3pscK47h8Wy6bR5UCBdAW2HoNUrrVSscjoGMzSitof1rCJFxW4zShZ9v8SqbqaSxqwPwqbxdLULoiRzyHkApmKib"
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
