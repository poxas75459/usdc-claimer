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
    "3zBzSHAGKmYtALkPQ15wPiKDguev6Sj97MU5mYXQbCr4JARphKttK3T2vAYBdh6M2DyYtpTzgGG6ehCFqfdS6bed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GgeVjtX8kBKNXGmD5Hji8xgsUCLDriA8QSzUcgiMrqRRCgN3NmcwNeetqmExQmPvzE22UC8HhqhioGJHkXJXP4",
  "key1": "4E9gKyb5VT2rUH1XTxBxMhKBBJusZcnuwY2PAH2H8N8yS2SvNXYxGToxVMowTq1SqvAcHb4zzVqamrtry8phS6gA",
  "key2": "5xyjFeupBqXoZ75Ee598uxmcgXgrggWJ19LFQe4tEwmbfJs2tLgw5wg8SB22cNRA4Y3jfQHUVRKaVFDccB1G3Eha",
  "key3": "23xM185kNcsSNuYFqJz2yMjnRjL9swxdAMSjmDpWwvfnkFiA4emgXxwVYvL8qjTmQtm7AF5Dd1hMFriqU4oNxNXH",
  "key4": "ub4bYMuhUCoZKMxdEbU93B47gkMYRxHFGNa92BxKwNFcnLo9tF3NY4nwmXuE3VCfMLTqKP7PSRa4Et9G1AwiwDP",
  "key5": "Tyob3nM2tsn9ww8M5yJSmXiPVNuVA5wvQ8XBTkihWSWigLFnbmtcEHitbEtqvwPzRkmt6SHKmXCyqiRjLJzGXr7",
  "key6": "5YP8shb9rtjkhUfZrctrP2XGL5Hs53KwS99Gd8NTiNGmjVsjaP2tGDeVU8Q1qx5cV1DxQFbTZMfcFQjXnEWfDquY",
  "key7": "5iUn2uBbwDsV49kYoMVj4FyNqAfWyXbX9DZNWXTWNVQdDHFwzjA1Y1v5YSUJzXKjq95iKK3yp3Qy4VUmndWwzjhm",
  "key8": "2BsogNpvguu1DW88QkYS27PuCoB2wvLCPC2d3PyLcQASxQBLHE3aPWR3nqvQzRV5r8Y6qXasKDnRM353dcj2eg28",
  "key9": "cmj2cbv75jarAbav4zcWiJmBrWkKpvq72xdM6J2YkRTbqc86UdAJ1q3AVfYNEXUqPUGVppCRKyztsCgbjghke3C",
  "key10": "3CVrXVvZ7eUvmFquhTVXCfhwLh9uZysC7qSfKL8spYq8C3CfSmLnx86g5b6US3kWLxiSk9DmGfsyNMg8HsRjLUcM",
  "key11": "5HT2tnpBZQuj4WUYf3zHTE2mh2sgbaVGMZSmprtcthm3LSd1NrQvQXxujj6vzrghrTcpKMH17UBeXrhhKNc3iqGB",
  "key12": "2panwsH3V72Pi3vv238rPaTztk84Cp1GzBLxE899xh6yxcNguXjfRBbF4Z9xyqMYAoqrUxfqTe6qQYyuJwBqBkdi",
  "key13": "48FAHgdfmaqvzWLuZpdmFXhgsjJGnQqtgMD7E9KkZPebLfjQB3EAnqE2XeCnVP8SaypkKrWsGSUpBrHmnag169jw",
  "key14": "3o73dpHsxRxYcarhxuiXkgFr6iajFnSy7BFT4gn65dshTQ4gaxYPqLzRv2rMMjMokwCe6nTJ4NEkWY7c1fFGJHcv",
  "key15": "N4WT75HACKDnAiMCSJX4XAqNAeeKf1KdF83YsCKeDToD8pxxdQ892hAji1seYEw9y9bSTX77GrayWn1Yiut187S",
  "key16": "4Rn3x9y7iTfZpmMy68LqG1muL9eH8WHeFz29exYS3kvhUK1miKtDWgkkWcJTGYe1RYcTs6JNuo2vGQJZj4m8WdY3",
  "key17": "5RMmfj5JnPqx6K4pmAWQbC8eYzifaBUic7dynjTKGCXyEnkRmKWF1ppdD3pM3GUB9oCJrPMtFRaJ5ERxNAT75w5N",
  "key18": "5xP3dV2erSGKXHqTC4spwj2k3DXYyYE1RjeHRyAkFWPsntgZD4GN94L68NksGn2MzWUdKxPgLfR1gyt66mNvQ8Sj",
  "key19": "49X6BD3f4q1VPNzgpjicfm29FJ5jTJsQybncTLoKeNMtRSdFLSFBDYTgJeAVsGSuVPjoZGuECKEnD4HUU2r1WRTu",
  "key20": "2YE81mgqVmTFZyhK4AzRNYM92Ezrfn9QTPzPRvX2T5L2xX8HnBNA3S5G95piKuNUqfwj6h8vjLaneLy8onjGWWw9",
  "key21": "2REPQsAFfwjt1rQtRsBgrvhFGYTusPz3hr3gzvTKqUUPUr15SN1mFY3NRZv54nvpfjpLMUkh4hMQPSLeuNyLcgX3",
  "key22": "2PcC4GUAzoVUNToB5ayBjTz99tCDc6BNZswKuzpazpjHibAp4SnYEoE4mfyLxJLnyyU1ZBb52BAKLdZ7ow5Kzd6",
  "key23": "3Jbfha71FzhFNiqbLvVn6cGGqPYh6BmqdZmQQrLXnn5SjMLeuYgC4w54Xje4dbDP68W1xteX2njh1wNHUAfNLy52",
  "key24": "3865RwTmrknJMSt7y8ifTqA53SRswZjncZUsbeEE81Dt4uut2yNkVSCMTLrDqZTs8t9V2uKSJAaxzViLpfhGgWpy",
  "key25": "4zQJAiNMaHcvb4eUvAvR5Sgo4swkDXtvNtPZPzm7Kbp6eiR2QfoTCrXkWncfLY7qNdisgWFvPwMMP1hHDYR3YefS",
  "key26": "4g3THwMbcZaNjDrviDw7zUA3tGSfNZrZ1BFqf86Gdhf2hJobpqYMRfNLjBjvrdRqqvDDopGYJT7aKKqE9AecZi2s",
  "key27": "2r3NvQUqL2YPSMu6GhX5QhrCjWn1QURuNmK3iQ5or8QA13kuN3u28jVLyAmHGa7bHRHoZqq39fLpfk3r4V5MM94r",
  "key28": "4pbC6SrGfVsPaWnyVoE5wVu6jSnz7ogYWGzdFpYccdw9Fq7cwXKxaVbP3oFzXwsAA24X3p1Bv1KboKw8FHVYSPbf",
  "key29": "5KXgYcR8iJbmSXCyVHqAwJfsUGNWzBHXck6VKDgFZFsSCDpN7x82nVm8vm8mnMHyvgbvtBxH5ZQnFvnW6iM6rBsi",
  "key30": "5Lus5eA7GVfHqzvgBYg2DYdP694Bt2NimCbEXGPoiQYN1VinZAzeANfH85kbzR6EK6SWBVa4MkLBoBQbU2atVfzg",
  "key31": "27GDmdHTPabkfxccdAAwk3bWzNSiFvkQpRu55NqEcbSqav5nfquchqub3pDSbTtzEqTSYDHNxhaVk5tgAJcmmPWq",
  "key32": "3yV6567qykKAF8jXGUFcYgUBqPcf3X7oXJqGxVWfghcUughyPo4HA9ciNkfZNtT9kzW2awaJrp6HQuRRWGWka3io",
  "key33": "2BWdbJHMW1jUyyrSdR294fx5v4TPMnoXdVe4PqXAi1ygVyxHSEDYUrVK4GiPJd4XSAgqAqi9uMNGKHQZJ1y3Zp6r",
  "key34": "3kwSMaWL3RBsNA9mQVVFgY2XTaqkj4GBxP6hweDu6FqNiWeUKQ1VDSMAwbdmoXDaRCkvggRP3JUy9QLHDHC282Px",
  "key35": "3aSKzUPyPAiaqkZ4GeVMiHRnMPX7kd63rFzqLKYjumGj2aPdpT6jiub7uVUf1tKVHk52xXL9Nd3uVRNJDPYHpvot",
  "key36": "4WUuKnPM5pzPKWPbiAxJbSNhN8ZEB7CYnMtKjP4GvkqWgFGz7dgXETGc517CD3B4bzN7nCD5WohqLDpyVbYqd8U5",
  "key37": "zPCDprz52hfeNZUTRKhJJs8uA5vUTFPjguJXSbtpixcNxoiZtUphRV4Y9KjJSgLKkBVVMCmAAyXELWshYXu43UP",
  "key38": "5qFweJBvmTreeatjyWviMGCL68BBFST7FCodkJg85Ebk3M1HRJAFjvAyjdhNNGqSTvDTHg9fgPGxyrY5dgg6cbDa",
  "key39": "3kRx6jyoB7yP7f8stBoMseb28S1bmcMiddG8MZZpGesdxcE68HrSwAzT4Y1PCY97Sc2QzzacKJvnmucUU3VHctHZ",
  "key40": "3fB3aaDXgB93MShuQo59zTh9VmqohDZAezeNzZztUw5NfKQHSE5dB2gx5KSePN939Epycs5nB8JNxoQKExVcqNPT",
  "key41": "2yq9Cwwp93vgWkY2TM2rKPC6Qte6WTvRhW8k3ezyS2ZGsvGS79aACgLGuCab1E3dZV9MaMa9QBupJc76BSSCHjfk",
  "key42": "3NpRVqJB2NbincJC2FNN68y77aY6GiAZdfuWjYX7ERg729vEkbXHRXkDtUwpQ6kT3vXD8NqKaCFdsCfqdXaigmcu",
  "key43": "3uVhScC4Zu7i9cJuVJ1iARFRiFZTDS4WgSnRKyRofUiZtXFYKG5bnPFmyy3qKyis7mD3d1bQfRvVLVL5LbFtYcL"
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
