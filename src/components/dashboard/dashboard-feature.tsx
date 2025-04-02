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
    "53FzbbYooyrD7GXANr1mzzrXjofwMQdCpfbA2ik5cbpMqQFFNnyVofnWUCPBvvLswQ89nd7gZCWFsnLSgyAybxFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmN6LjWjJVfWtt5xTFxoKRvRC85HvNeCtjgML14u18Xs78RAVaqipn2YNRTt1d2nazYMvALyU7DzfUdXtjSayfn",
  "key1": "3Ege5ESAnxVm8nhFE5RKZLow2vG57bX9mbk14Xx84LkL2SSUcVkCacVn8yXd6XYGMLHWbpAf5YN82eW3qRTaAxMk",
  "key2": "CPA6ftB39gF5WMkPwLmyjgEbjgqtDnut7NVYH9x2nbSJDkaQbeMnZpkZrKcdvoEmedQFdWrim8rfswN7AJ65L1N",
  "key3": "oGJ7xjYEGWereD9qvWRQVLJLqfnDAQGX5Dbeqse8ShEwAM82H2NHeiGVmbH1KS5BdFHpWQFvpVd7Qiu2kk3ACiJ",
  "key4": "zmKcFqTknhZPzdc5jfPpV8zv6Hd2rL6xp9vwpmKeBZXK6nNSUwdFMSZmTMVcoKDQENaBLbTBioDtmjCjVxdKJvA",
  "key5": "H8iMMTa5nRgzkpfYNSkNtDq43iJotGuXYLebgtz6V94kjzmQoZdK5UP9yJETHtwjpqoZC7ZfArRPfpq88N5458N",
  "key6": "7Arui8hLG7aezpdHV3LBkdiXs54X1BDoMupNb6XMAct4rtqD9ojtpTmgxBXtPtxfxXFLCrrbabfrg5UCcbuDRmT",
  "key7": "3HirwGZNunygY6hik1dXA5f4NdHbAoWNgfnQRwCDQZKwQBTiLtMA6kxdDDAmwscr7HAP5mfoVi3JnVbWFjDrx5ht",
  "key8": "1on3SrqqWA2tiZhbGHL496fQ7Py2PYnfijGLJ4f9qvfKukUvb3f2pVJ2zdh3jryqng5CUnscDX6t9EtwPXaK8bG",
  "key9": "26QZLt88CTUMWHS3L35gW4bFRWKMWKEBPNdosQLTu5gHDGyi7bXLJSPHW5QynRqMqsFChdZRtbbcgWVGCTViLX2c",
  "key10": "5DShyMs5nNh2EKf7Tt6t9VwLobAuYYRM6cAsD8mb9K3sh26YwVUWy9Xa1WpxmwfxxRqqhjvL1h6VSoXfJpaLNHjW",
  "key11": "4bU3moe7cWegT8AvMHMq5QBvefeGnNQxUKazHUgLRU41XcNc3DTVcvbiYZUc7zUEye71XbgyiVa6wpovrLRYGH8R",
  "key12": "5qY39a4vz66FXyHqtnM6dXcuhPjziZD5AZ8UEWBz2hoDDnEdDKhScsi3k1rcsW16whDZWymRnYBP8nC7u8B5LSic",
  "key13": "4f3gA6JoKeDiciekhfZNYTeA2UnEgckupaTf3D6VPBxQrT8KJ79Qn9sTJKSejDpgAz1n7aa2RYGM9TX6yiUpjWeS",
  "key14": "5aJ73a86SNng1REUxpCbtfrehuTdiPj95CtATabh54kUsktYpdPL6D32zVrMQwS91mJ3MdPVG2cabgSW8YaeQBRy",
  "key15": "3iemR3WhofLuHaPNnku9cZRZcQTsZyctwhLuAuqUmDAzBuvhxjbFCHXhyqnx8Pbkc3zByDsWahKwmMTEBURfj1ZA",
  "key16": "5TVtHc2yH6oLapNgVHhujcJ1PHTzNJyZ7zVp2y7yWsHVxXhyweQ7LEAALXqg1HGSnQZj7847oDNxq75PWPFkoPvk",
  "key17": "4KkaVgwNJ2hPDEzb1zeGs9Zm8uc6ZJZSTZwZ65U2RCxZ9mMe2xt1jZ38WxdENQKApMzz47z5aTMUJYt8muybTSB3",
  "key18": "46QoMJTzm3McuD4ceuxD3tTKhitD23MZTkZTQzFZS7dBA1bcPcw4AX3qBoo2oaJCnftGbNZ1geLL8jCabqcupUhA",
  "key19": "2tbNhaiEePEeoY8NwWXXkAkhHcxmk19rAXtKeNvCTpWwhZQcnoQvEbS3HnfV11pUGM8XJFyvvsEB4WYkPnDvzX85",
  "key20": "5nHxpSpWrdYcvdtNCaFohGsXXJHvZZnVgVusUHbLR2hAKdAh1MDWMPXgytHDaW2h2GEHcbZNcvbdLRwMu7nf4rmg",
  "key21": "5REM2SKNCMDwWE3GFnCwDDt3sdih8XuewPB67Z31DanW6TL8uUA2wxYto1rEWnb52FbZcvHfoTyRaFppPTWMaEPp",
  "key22": "pznr8BKrjw6R6CFXgU6JGeRD9z3VnYZ1XbDpFivZhowTejy1vkhN8Sw7J6dVnMoNA1JwPVgxtJpSiDTUevhDeja",
  "key23": "3aZwn4Yn5XqpiAHWThUmSJjATE5Lf3EwSNKd6618xrAyfE2hv8ZTWEn7jqia4SYs7E61MEX2syRAhFC6d3VzSCHU",
  "key24": "Fa7UKL2zBZcxXen1u1Q6ADKi34rjmE8TFkP9uRafHuCGGf9i9ofjzgnVNmZEnvMg2sjtAB85nhyj1nbzwjrdFoU",
  "key25": "4oWjgD4L7nY3oX8ZeTjtPTiahvcgcr8LrxJT5TbTWttuTjoHx1Ke2Rd85CrWjjc5i7u13n5XXoXDVcoq26W471jn",
  "key26": "3bZji8ouAWx5QrTWWCNCb4NZh6zv2PRDtb8tH3LV1DJsofoJieFCVaGnBsGq6GxCkZ7dcg7Uv6bTbUaxaPyQRinU",
  "key27": "2Nu1Fu3A2XCGVYmxZXia2w4GKLQE7cTJMvi1etgW4F455BaiPvsretRNVNGbZtHsgF4wL1hgBwanfP8QnpCt6EWP",
  "key28": "51xRsS6Jq4CbEuq18eYJNA9ziDYd1u8jfzD2ETZb8tMMSHVDVpmbe41NDS3LwwiaJH6CUm4ceQBPGGWPpBjbCzTn",
  "key29": "2NxYcRbvVnurXcUJD1wKEBjrdRMM7kRGoZibRRdT58FdomM9GHwVUmHSJjQVSWLFwVx8RbcPxYFswfMyNBKznvgp",
  "key30": "3td1xQhRzFDyCSfGPYAXeUMKA96GZfCGSEewcZLiaTSoozPKf1DiwNvHtymACyH3NbzTqzFMZqGe4JNd6FEP2fVW",
  "key31": "5x99k87dZt9c65LxLZh8npg14NfxgEvRdXTcafFqyJGDAxCAzXwDn2sCFvfdB4MRA2cLFbAeKEzHcwznzV5aVZdy",
  "key32": "4JFCYJ3yYf2apDpdgfVTvJ2eWSEcmMEm1ZA7hSi7DuBf8G5xS7o7M3PzzE7aKJ2tqT5Fsj85AV2beS7pqiqtpA3c",
  "key33": "44zmjuhdZbPjTjc3nxAj4uHa44M7tqouEkkyRFxyVE2wiaTHsSqNwNSTuk8BfiQT5wYZKgFu6kfP7vryNjXVn1hD",
  "key34": "2etteVuYref1gfGsJe85ezsXiSacATa5VjHDd86uqp3aehxDNEpxWQvLBMLSgycobgeCozDpLG7wk4tdYLmF9igk",
  "key35": "B9D6G1fUYYqzQWthxHMjJtamPSUi1wLVkfmgj6tNi4KpsU9YQV3wMdvPdbtJu9aLnLmf5ZNmfJDM4NtfFbgbpD8",
  "key36": "5CZv1jvRGgCnudn4UWPpqqud9uxTBdC24PZs3az7az1VYb3xXdqrLgGJtHterJV7vCt5m59ZNYzA95DoDVSkgkSQ",
  "key37": "fuZE1mJAV3qBq3GXCEKeVPv3cf5m1x5kgaR988FyuWSxtMZhyJEMXymyyowJ4KSi2Y6zBJwi3DMq23A4aTwCPct",
  "key38": "2AZNXMw9gCTuLJER99iVZYs2MtC7VqGPUzJTf41p4Zr4EBTakNBkgtBFo4ZyEkuVdxm3ZMtQ5UZsxmsWyAR7Qk88",
  "key39": "2JNtSANgbya5Kt5s3pq8mDunPv7dQRSNWBqCAX7op4SWY6N8kijyqVXvSBykU4gWRxT4WSFQVEW4LCqJ6QD9ZqWH",
  "key40": "45aCXUoddPLxh21UEUgUKhkWYdzBKudN7s86tRhuuDjhg6RTTNPtC5AApx7VqiVQM6NgFdZXkXQfMgx8nuf7aMW2",
  "key41": "5DHXY4p4KttWBZdRuwxjrEiFhvgQCfBYvGPBnEd7xeqHQsVkfTxPm9piZaShQwZ2iZnFnB93YGRRpDMACHs55b11",
  "key42": "2x7JvMsZSwj9rcXcNFQ9rXQiMUt4WcDhTusiQxdDsMJeeSdC1yXVhYUQz86g3nfHLpfD9VTmNS4E5MyZ246z6M5B",
  "key43": "3R7R2gwwdhhoxn5eEeggJZ646XyZUoiGqytyb67mGdRNbYeotpscozoRTcWX5hAbcPV8gRzzZGfmvnezxaiGRFKs",
  "key44": "4zSc4e3wYomnP15ooBP1KtaSgzPtkTdvikCA8z7LexQgyU9GEY7HsxdPv1FFJBUa7LM542pF2mAYDchWrti8mEsW",
  "key45": "2KnDiWSps5kmCzKPctLhjRCmM4dPDZfwUzT2v3WM5rL6rGWhm3YVwYLWHixTeGJ4578w9pDdXwy7Hj7UALJmfZZm",
  "key46": "3pjSfSBD4Hb4AU3PWMD83LpoH72yC4o7uvkz7d6XCCSqbJodwz9mDSUCg7Zsw8Jbm6EokMHimMDoPJMk1iSnzAa3",
  "key47": "23i7ZkyY7SL7R6vkd1LBQ3XbwH6i3WTYesZKfSNAe7S1TaD25urJAcaSgVZBHZgYhbY3vM4Vwg7FLt1gkFjG3ATc",
  "key48": "65dLcp9fVYWcWCj75vDVAKNTy41pdhq16ReCWHpgMYT8biGM75s9jEXeMVkCT7vKN6gkbzPCLET4ShTRwtqiH1co"
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
