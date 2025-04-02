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
    "5YtWDdreE9pH5iar52YnNonHSry5Em8CWoUW6JQT1etJaZCUTdKCcuEfVYozfFZ3iTYA3gKu9jq25vwuS9g1hwWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M64pVkUkjx4gQHmNd1hMPADLHKC5Vj1Tow5Nn3WLfDcFaRegfA6vYd71XWs96Tw5bfTFRKS2SgZjiF4eZAdUMps",
  "key1": "3WFtpdny8wnyWvJu99sZDP9mku15t9YhSnbBoPikUCiEzz9jYhDLqgszNbdPedjC7JVxgk69q4GFAT2yPwAtXrqt",
  "key2": "4XD1wU4A5GihBSitdq2b2ptEnsrpHYirGjgqoVibBwXwrbxRJNoeTAoCoqDFzjUzRZuYUsXnpC4fU9i9phEgTCaX",
  "key3": "2NrTgaipi8S22GQ7JvmResysn95SaMzfmzd4M9YduVgFuddNX3EUXJXNFAqCow4P3eoAeZQGu9Hi9my6kfV9qrCx",
  "key4": "3tJ1d6mmnZ5MJpGm6CUAZJ9Wwkw9Qmd3CkEqXMKP63QqUFPahQoTVQdS3KPQwV1Lc5zbJxTaThRdi4YeNuodZwyS",
  "key5": "5uhrbGksbop4jQ9Kb88YHTznLxF9buPfxUUjTBMci5cY68WEDEfkX7kTtoXZqgSFJrkR4RR6VtEtFhzcpVDZMb5",
  "key6": "kh9AYXLv8rXsLoGi6ysHqQDq4rYNShfa2mhwrM86d71fZa2Q33WU8NXdHfj5jQi2bGVrWxMwsBqdcokr1J3fgRx",
  "key7": "65qMgBxJZJX9wL3oWLoTt5FZrLmdCJpLQFoM9ShoWb5duLUdoHMbL6hsrjXeqMjE7UAcF1kipUqavuzZ3MTduJzh",
  "key8": "5XjdFNAv94FXitZU1W8kF7T37cn62cxa456yVhBZSonVz5XxKUsZ4qJYVnarXpyvs2skXzxpmQiUzeCe8rJiS1rk",
  "key9": "bKXzRrkmsCy3HmCKuTGr3izuzVVFKEogPAhcUow5anpMn3mVotGtgVD1FvMYgxJBqPpLG6sKHpDq8y28fJ1N7dJ",
  "key10": "3Moj13JLJCDkP8jQmjY2jokb7afKZMewXVv8DsFyYLWvfhCAprzDvu3thUsv8r63tdbYfkkTe1mV5WYbx7Ac1NNe",
  "key11": "4HVatBagDWVGumki22oNPkPTJQqszkdUrBdbKjfgFy8c8vnAgwLq1wapwRmrWi7nDQF7D7rurvT2E4dGdutzNLqC",
  "key12": "4DXyKEZqairgrhA861itRJwNg4N5bKNsyAD9UfKsqrjv8hpTkTz83yDPrXv2pVEKN9ZVMCdaao9Gvhp8FXAi9VBU",
  "key13": "5TnH4DkwhJZ3jWoBHjzStnLLPmTEcuuBHWCfG7n1gVEe3exoFyiFBonrwy5dKLz6WdAjGLDeR1Ykx5TCYd4zowPx",
  "key14": "2JDC4dRKsvZ2kWKX4hiEbRb98uMDkegW2CRsUuX8LP9Kkd9b8NNhRgKy2mkGb5YJhXQi4KwSCqJPkccApcwCuRM8",
  "key15": "3q9mHbKtEuQ5otRM9yKZSwqT39M9WUuiYWkwNCbPQ4Lmyk4Tvp5tX2bJDe771dVfYJerVtVCdWqNWwNHjPaApTkx",
  "key16": "3LoiH28128MASHDewjs4RR47DfZHvvrAJzLH7Z6TnGH9hvRW1CeYADMejs9cytJ5zX82wNpsR9L4oqvMyToDPR9H",
  "key17": "7vKyH9iXxfScRSRVarMWzrdZ1rVVXtpzZCPkTQT7A5zbJnZe41krKQavMYoVDmp5sg2soFy3oggeqPH9AXxy8Ge",
  "key18": "2tmJoByq9A2tNYSR1siCuNPAUfg9gCJAWxYLF9CfpgPUuc1r3vmoc1ke7hyeMd5at8TqLTmEgUTD4ih7t6wA7y6X",
  "key19": "5wxxpUxSnAW62CwnynNZCPzbq4EBrgK2wkKVDeVCszeDtXmkDWu8zTNsB9re9kqo8pDkK2N64tCMYHnBCoWBevUZ",
  "key20": "5we5Ei7aTsiAEy8BvaqdJWunAZ8WgQRWTNYADsVuvFXSsWA7wBgNjMpbt9NVTZSFj1Cx2sVpeG8SvK2cfkJxJhg9",
  "key21": "nzVhdKM4AmJzFAF8GauwJk2bAdAyZX59HpfG4xLDzGuT7Zd67T8sdkwuVNJS9HNS5SLQbQdpBawicGP9fSQthxf",
  "key22": "5D2qdPEoj8dRav5HbfzGVHWyPHajGcmZKq8Ab7PDLq675d9bycQhbKFounXSW3arX78rGrhdwm4RMJKqPdeZb5Ln",
  "key23": "2SF4e3HVdhLDPywntqaw8QufV75mHxk3BTycgxFcSRpPzmKz1aKcTgdFs6yFbNHV34dcZUp9WbRhhHADYUaCVgi1",
  "key24": "uGdFLpKncGuXJnpxwRnVrvEUTJbKcaatZ1mMCLzuDfK4zMsA67YjzMZ9jVo3QbxBrdsvw8gx6zkQATwPUbTkGHx",
  "key25": "2475Zugd5HBeZAmmvuskJ5muCoSdjWmLGUMDAhhv2Re2p5PMPbTMn9QqoVhVqUdsMuomjqJ8YymcsK95jhxUahxr",
  "key26": "DobVPukcynrJCecLGJgSUYknhDtGKNdkNJXSNJJs2ic4oFNsWdJrnEhkFQ8xmX76etkNDGNhXju6iYUtVpNjy2y",
  "key27": "3kreEpZpGDEXN55ogTJwF5VRkUgM6PpVH3WmVFx7YBYtsJA3eaQYmvKKiqeaVstNdRXxC6KgoZnjQ3s29nJWyB5W",
  "key28": "3LbwmewwtE9B5pKDfWxtNBRSikL1BhrXFwzL6QLFTYobcWeifmd4U4CXF8C7LvcD6dfYsFqb7ZAgLk7TwRUJc9Bs",
  "key29": "5gxiTmds2z7vGcyebMUtYgTKTxMDt2DEMkrZN6NfPCMLsuc1tKeFT2vwDjjKgJ1iKLAtxuctaNFadbw9Gj9MP9JF",
  "key30": "3U9GnyUQvUW7vgkCjChtEN4kryoDQPKXZ9WLutCXyJdaVdmmivQaZXu5u8VCA8pHvd8cmuUtJC4QGFaHwzhHs1Wp",
  "key31": "5dPtC2v29zxJr6a1RdrYqkwc3uQfPZUEfBU9G2Em5ScDUUer4nakcAEZjDJ4Q1f76Evo1yjArn1iyjzCLb2EWd75",
  "key32": "4b3DMXREPcCeB7p4S2QS4Uuuyf9tvrmk96NWJjagq6LTzs8Uk5uqdbPgsqkCK3HzYQ32HPm3s7AyEyh8DrRpMUFA",
  "key33": "4baefk5zBNvfftv7wLHyzpxQNY7mWCVFP5nTb2CaaZy9FwpCWW2GYtPfatqAaTEDQhEmYWFCZbEAHix5144eTYPy",
  "key34": "3pjC5SA6qzzq9hXjz4JKrS3f6wGAe4adzZeeEdSLs6LPrpLJXDjxwTBTEdQ6KzMtuhGQTDiizfN2FvYQxGKPChk5",
  "key35": "4AFXYzfAnH475DF5Fu6Bh9DRj5Z1aC1PpsLhTzZoUTUZLZXajPoUcjtyBB4i1yb8FSyErfFRftxgzvjGEr94TGKc",
  "key36": "3SWM3A5C2xspMLafr7ktYw98Tgu5RsWceimNMEJ45426xHT8eAR4hd7v179cnsLtsNxmQbSFQrWvnVVMvrpcWcH6",
  "key37": "4uT9Xg4SGd9GDRATnGjM8eBbyLLdPz6ZzMiT884KgnhT8xuSp5DXoqoYWa1ut9bJBje94C9TmiLQVd6rm23LPj79",
  "key38": "2w1NnkAQeaEcMihdwdp9QKdDgHFr1FPqPsUMwHHPy5ZaTJcvfeQcSePDVJ9XojNtQuBGGNsHjMEvkDN9GEh4p9XV",
  "key39": "yVs6nXzqH7mEDaxe1R71RiNg6x5o1PxruYBDNDLnbdkfztQkB1G9qBXTa8TPvs4wk5KoZqEyEfPdbR3zCDVYKiZ",
  "key40": "66LEpomaBhn98MRWEeKQUbVugetJeXcyb8UaAHgBfMqBNwCEQjw4ZXV3G8MysSJujKTZQBwbZhpFhRWzqrEdc86X",
  "key41": "44ZWnhf7RmKWHutyd9g7W7AaBaGJQfJMVMevPtg3LL9vKNVtLvPYiJkASb8EQhKNwNV66sHUP5yvJEt251v2eir1",
  "key42": "4FHDBBnpZ1DboCruWRsp38UNhNqi7Yee2QBNd6PJPxDHe7VcQZP3tTpuNi1ry2Nuq5cm3XdaaMRXgE483yQbMt89",
  "key43": "2qHC63bdyKyHEJkdAtPK3YF1DJFEKCYEuotbFY5bxdpwWynZzFZagVnsGXjaFge4zPNJ8omZHBusnshsSMHSV6F9",
  "key44": "5Dmf1ajMS9RKm5zbD1CUoyDfUJGn6cC9N8gta5BGT6twVLAUsMrLDBBUVZfP97xpkZ8BEhxEhu9PfEh291pomGqP",
  "key45": "5VEUfWiNpMdH2fzgAUgEuuLQZ1Z7Vi8fP5wViutxjP1ZE64bkRD3KVMmQ6mZuLK2EFPxqZrWEkTWGsvtZUhanKoj"
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
