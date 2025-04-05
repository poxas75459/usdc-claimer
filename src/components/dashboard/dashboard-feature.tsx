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
    "Gg9Ls1fuU7r49mU1kCPPXcLCozNb692bdkXv8zSGHypF8TFchFdBdB7u5ppuJcBEddGqeXy9v322KEqNVrwU6hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2HgmEfme4SxEnNxmxe7madzSUu9nEd8WRZ37rGibNsARCnk2aN4QpsBRmP2ZbRZwXBkrck9D8AWRjm5xLJ7A5C",
  "key1": "4DGEaGS7bfgowaCSxyjJfjt8QdumJFiTYeQHa5vghL2Wre3p3jkHMRDEeTsQeLiuw5FivthnmC7rgzJ1Unzv6EkT",
  "key2": "5M1UrsX5BiMvxR1WBgprimdtCy8cA7k8jqJ5ZGYRfavnozHs6nNmFHkSEFMZKWJsn3RvfGKw34V59RBMGCmtjtbP",
  "key3": "TwdwrEYkjJRkXndGSwVouN4A5sKdXJ7TwtfA5a2GmRtxQBd3D3747kcwo3ezkASk38bbqHx5rdjgvbNYut1uzpc",
  "key4": "21scSaQpAJ8q68mXCLmLecivxVK2kVDrvg1Kgar6BWNQQwr6KveTorRvr3RUxV5vKkcEewXuyrjXizT1bXUvncKw",
  "key5": "67Eu3NkU1wKSLqNoz32sULb3GcWSiB8gtgUkXaVswBVLuC5WP2paYgrjTpCJ9VMXZwsUpF2zDztof9Xdn6ZBgQhk",
  "key6": "3daCp4XWonTzrhEimdFNwewdxGvgLj4AXqn5Uqz4eLgb5DQaQd8oSEHfNwbPBWYqM75UVbp7DhNPxM62FxNgwdD2",
  "key7": "2tkcRQA7pouJR8Tvj5HSkuQ7X97cL2DprjQhoP9sG3EQfEXBgGbbhf6tKu9eQMeYwh4VdbBaRgqy9i3AaDgX756u",
  "key8": "6VTx2jwYM6dPF8qP5SAbdx35zgmF8eKoWo7c9XyjfRiLwGv6gcmX3ZJJZDzdfyvjkaXV9vKBAS8hkZXrKUrNpmU",
  "key9": "5YSEBinaa2e2CwcVevCCNh2NvUyGwiY9xDvDcajQzcLHfsC2521LJF7qdYWJfp9Z3YRKg7s1BMNHwSUVwh91gUoB",
  "key10": "3hjLgMBFSZBA91QXSdpjvAzPobZS6CYWkGhWojrmwZswS8ikoXs3TBV9Rh5wex6EtvcHKj6Sdn7ZiDUg1KdQCc3d",
  "key11": "5dm5r78rYfKdQWMJ1epkLeiG57Fh4QfvbrJpM4pWhKJEiys6WigStX6odZnEozusecnTXGQLWFseacgDJJVeHDiN",
  "key12": "3As3NHGr824pMypGKa8tBRh1yKhywMKr7Jx6yv4E5iewwrDD8HyAgd8VzjGTihTMYYnGd7dwwMva7sF5Hp24gv13",
  "key13": "6RDpsoDGe791imYkQsq9QgbSAZBmaEHFqjMVjbfVrDtoJWDGhcpFbeSDqjjxyiuCNmoGF8MjKS81SvDWatBHoTY",
  "key14": "4Jmv4tpYCdGrNTUATFpqze1BWvrLGCyv2YwwBjKgVPbTieD76s6g4JGJL7xpaLcP7v7PeW2EFvk8FfnpaCYp4i2a",
  "key15": "3StS3C8vmNYNvAV12PXiDG31HKWtKTbnhCqxYVQHcbbXBw15F5TCCjbZ81mrZkpsyGYHDWfsC2vQdZPJwitZc9HT",
  "key16": "5Ueh4MjTMJouSH5ZsTnTU8U2xV9BvLKXCb1XP2ggJMBPwGqCK8BceJKEaGWvq3FVViJ7Dsn2R4mHfJK9NjNHuKg2",
  "key17": "2CEFesL47AcgJrD2TvCd5ZsZ8ubsdKXPUhusxazpTL8tUmGiwZipuQXfk3KyKtG1m21EPSUSRHHsdLgm5HkvJ3Mj",
  "key18": "5x9gwdZZVw4iqUExcwKCEUiqfcu7QGcz4XBdcF9vkPATub1pTCLSRqe9EwcMJak78Z1DQwk4wM7rbxvokKS7hzMf",
  "key19": "5Zu9KD7xjBzGp9SsnsJnHWFKv8Wdc4jWZM7WgXNcre2mkNNAVRegf3YfLMZWovsi4GNd9j5DnYimG3mgqhGDc4sy",
  "key20": "4hfaGJTbXkxLDiQmE5YkR4HhJUmZomxZ9izTgfrti4Fu981V6USAUKvegUtKLuWKJoKkjE2FMZUVUBm9KAjAXnaa",
  "key21": "62wJk228bTdgAXMX9JudLWyxiE43waThhz7jbbPFSFVmGouMqh9WPYhfR7iAFF5fpPAyRgMb99Empb5bfJoKdBTp",
  "key22": "4mMqxvkoydTXDbVZkgRdbnxFFeFTgtFh3nMZCedHhdWhrGKtxfdZLL2AjiCGfYV5v32inmfAhULGF43kDrpmo9Ak",
  "key23": "2aRzxQoMJjNasejUcWPWrLCbJnirv5zraj7gvwwX368pd2xmb1c28kfanihSWRvyAnLkNH82rV5gm1rpi9idSPp8",
  "key24": "4c8D5nFr3GdjzPNNBvQK8VX1vF7wDTTzNWQ9j4P28dK4xgBr9VNAgbDfYsdyUBMaAJX2ZeooNmjT8eM4o8SpYMjr",
  "key25": "2NBRqf4YTrHAvLhsNmXurC8WHZWvVAw6cReowo2q7giZzQEsFvxUbJWHNp4MdiF4DeXRKs4NUGSWe9R2vEfaqbcr",
  "key26": "5GYBS1isgKPNaGLNABv6u3adk8pWWBfAQw49siCpqCz7E5av6AHJJWDqh9HeZm41LjeS1QV39y6CnmeVJvFrm8Yt",
  "key27": "4zwEZV2ZspbDxKSCCcbRq3f1Wr3GWWqWm76eCu4B9eCUaBg12gipnLzhxigqggRT7UgSwk1Dff7pPLmQkDWVG2kB",
  "key28": "4dc42Wuav4Bd4UHJtCskwHyt6hhfgJE3JTLV8dmXLi4tSCvbjSEpGjL1jKMR4of8swGFuVf5nEFZbeEdC3NgP4pQ",
  "key29": "52M6Y5AFhnC1xJ7yJVpHkgVDPs3uowQx4X1H9epgy88iPW5hfSyPrV7BVLeSuZv9skuqXRRp9o3A8t3XP6Vhs5Rc",
  "key30": "2duDPzKgPsv17VXK94TQi1h2CXE91F8PLFNYCHntk6eygGYDcQKtcL3Fi8nPGoa7bCBFEQZ4kFSJ8RUhRSboTSVu",
  "key31": "HJqbjD7QBiiy8Jw4NfLYrYjiA5qcFReSta1yKNxH9B5Pzt9fdRwsQ7aoHCjvif86c7xUVLzL2tRR1Nd1P2zBkqs",
  "key32": "3GFKQhZ4Ti7uKHjMzfem6gwfUhHs26EM8J7Zua1H8NKEnyz5qX2HzEk784b1aRgqWc4Dm7YXxu3g1rni8kqtq1iq",
  "key33": "4BvyKS8aKPwWt7iguYPBDc4J7aRzNW2n9aaV6FdQkNa97manfySwmbR1dUo6WwiFbxZp3hdqkVbcxuxpTNWJhNdT",
  "key34": "26hwKvAtsCCo5hVdeyFy4d8bEq9SApRuMKyG2NihmXac3xX9197uHe6WZWQkxyDYZVDzaQaTwx6cLf6Ti9s3nL8r",
  "key35": "hWufkrLb6jwDmqAH5o7WoihA2CKq2dVeGpaqaSkY9RMDd2voVRJMrgSMHUaPkoUuwgP9YuAp8RMevYiq6bz4KN7",
  "key36": "4CgZjFzKU215roMv2CevFSGuoEw9NM3FddpUEY5HqMV4ZW6TvLoijWrhTtu1NKoS9gDZvcSGv8DvpqpMNx7Jm8FR",
  "key37": "57QC13eVaqqP7h1XzPJdWQj6Ndh72zbCaAkCKGSbqPVBVraPxSy2FnfnVPNemxrg1P9MVQ4s1kDT9NQvCMqEH8Mb",
  "key38": "2FTduvyQtA3AFrYE6ZZh2Kr1U92hPf6fEhZrjexRLmg9iiXaSwftR7PjtPdwBc1V3NFPcp9PoJnNadSe7vPf6WPM",
  "key39": "2r7HNZfNaa8Kxky8RVSHzJ5LSBy3WvScko4ftgPA6ijcQk37mThz2rywqpAdG4gmVF8kukGmyoth4einvLaKC63W",
  "key40": "4bpBh3RYbvb1k2spKqrkF48v7iRTS5svcvAMkUdp9mMJ4bRJTnXmPbFdCrWqddP83RUUYTkefB3z4jsry1Kf8WYZ"
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
