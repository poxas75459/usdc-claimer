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
    "2CJndauYv1ksawmg6RAMrZ1zDVv2WPJFzL4NJoX2YBmDCkKgaQ2cQxDsCktEhv1rKwR7cvbDCunKh5BfDyF971yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwfj3ApeQY4h6qFpj22ufHJY1FrGeHJgau1tJhbqwbqTDySvVwwoUz4B6MsLt9WXpPpgdkf7fHfDfmvjFrDmhuC",
  "key1": "VJGghQuENbdN774LAMA5csNbvzuQSqPsyLnSoki4GZ1VvyYY7E3saUrdGeofFPjfYyyAQ8a9yTMMH9AzzCdJK8g",
  "key2": "55mxoQ29kTkUpxYdXPxNop9L837bQFvjK3HLEnWnaMpnvDSPHZVgjc1G1Q8iWFJchuT8NfoUzeS55Q694m1MuumH",
  "key3": "4t8PU2i7fS7isDmvv96xUKXvhPxfuvYu3BQZMBcVeuCHGkQSzSmVvU6Rs6ME5joCy2dNKFgGtLCgRSMx94ULjrob",
  "key4": "2jr3QiAng7egeJpFyGe3Wv8scVtkEi4yqkCkC1jSkXn31evWFmdq3uuzjDV9Bx42K5sCZwH3NYgJemFAthu7GMc3",
  "key5": "2SBwPbFkDoSWE3hzKeiSdN6vaaReBbHZMfgpjArsXwkVVhfqMxAGatkMrBkJFgbP8VTxRUpwYfJWSfY3ShUupW3C",
  "key6": "3Kc5b4ajy28zNM6TE4PZfu8D77tDxW5zm1wvoJfYEVaLBotJGddk34v3NgktQWVAGBR4J7Wp5v4JSbbaGzTgqHqw",
  "key7": "5MLwwPtTSN8omn63Vy9efHh6Xs5BS2qxiZCSkck5cP9SigNDYdBpXnLyNP42cAB79qTeSmVWbPAXEoVK7eK5MSzm",
  "key8": "5C8V9hhDac3dNFZqR41wUNH2Wfz9Fh8SW5CxWndq4DTwGMXufgXM4ajKLAe3DCiiwixN3e69fGWsbzAA9UcJTBfA",
  "key9": "2DggarMpYN8KYhoRAEoWjSHFqGWVCHZy4HrVyUw2W3Xeh6gLyuif11zPtfzL6cFpZBCAFHAqf96b9wVDH3YRGGRE",
  "key10": "5Mhm6NXyg7Q79P1HvjpPiLEqh85fGn2Na1yC5pWzouUVk7uEmPnVnG88Bdq6U91ocdfKCLdgr21FGepKUc9EMeFL",
  "key11": "xNPSbPgKEUbHDihCi862os7epxfdUGUCY8y9kp8ejgDbRpWAEWw5nKTkm1GaVxrKBbrnziqFwcRK3PNMdLg68EQ",
  "key12": "5vnazbQUTrEahDN2vtwxWVBwBrTsDuJrS7f5Mpsshr8wXm6GH78EHEZz99eUUmS1V54ZahRcduYd2B9gGMLwHLA2",
  "key13": "3rSyw6KLEhrxGbiGUSvNncBwwbXvZk17yTgV9Gw2vroQYAS1h9bwuhb8ZM8wiFdmZA4V1iMsW7zjYg5ZnL3gBbgL",
  "key14": "4CHyaaKMficgVRtrUdYmp6GSJ7tfikMyUbGJ9gz9CatCuNnsqg29rTDUV5f1CRpd9673S12DksVVeHC1T7ymiY7s",
  "key15": "5K5YGN23wDQmKrFLGJNt6xeCJjWZ6XGeeLrotSkFxfPvwisxGU5iEi1Dw3BeFK4kKv7tTLkhYyjQqAX5bsNw2pRY",
  "key16": "2yuZLPt3tGth3sbxMHx9cGJZdw84ez7mkgKvRgPa7CgrphFeqmL9qbPEhAVWyyxp8Sz5PJ8j29p97NxSKjXsjC3e",
  "key17": "2vVfotRFsdHa6A8jfrCMZNF7x95WbZxCFMYk6gWvcs23AEbnkK4ecfYqXjNfE9KsQHo454g9SWQJcEuMkY2WF3g6",
  "key18": "5JYEozkm7MJKQhMS2czSqZV4MMgFzXMJoKsk9FF8oU6RDoNQUV9ZXhsHtach232N9WKAp42HBQJsUhyKyZqufyHa",
  "key19": "YaXLH6xbSCB87BEg7AWRyDk7PNnommoucDNQ3KcQKdAwnzuAGdgUpmFVMYekGkPLRPMFUjXBBWuQ85YSeWpcajA",
  "key20": "amsVCsoWxzmTy3UfMTY72h8ptztdxGbe2JkRcSEuA1nCBnizZ1TnKzpkdnRA6Emzy5vNLxGSDSRYRiE5idPUhMu",
  "key21": "57RtKSRGjc1nzZMGvAkn7o8KkvrpYrPt2RDWfFx7mv71Na3D1EVDqnbNgPRZsbLpQGr2jj2GWHF5xBk4yJcpxned",
  "key22": "4rtft1oCFaRw2AF5btPmAWYmCKZpZ95LEeyj3LPPgAmPcfNfTcWV76VTDktMrWPyCTJ7Z5oqrNZKzEp1dso5Escg",
  "key23": "2hoSE5NnTrtZmiJhAxdEzi9JtsrTSnXAFq2TZ3mGkJFQhLtTdh7GAG3YWt9Yr3Q5UudXipA8efRzRzWy1oiFoYz3",
  "key24": "UFosDuHqUxSgEfX1mBpr4SjsR6dVpaHv3vVWsHY91eMzmtGk4vznp92YZW49zPRPpykaqEQAw5nHSxXhToN7kz3",
  "key25": "3FjjzmFncbXc4JEc7Be9unpz8ocJUjh1DfantdWZeRCjXHBQ4eFjHWQD6BL1UHxjSgjj1o5dcvLr27eerdiZEKwF",
  "key26": "26fv73LjdPqZCbWz9hyfoWXDTeLtZMBKcWikg8337GtkDP9xJB641g8ANU63so7BLRgN2T782ReSEKh77k2V2g7X",
  "key27": "wxyAd4XuJe34LCPeh2DMYobruaKsEb8ke8opthMejQ1VeLZxSat2bCyvRZHxQv1idwXzrFYiYo1VEuT8WqaHF2Y",
  "key28": "5xJWgvhWmBSFn427SgrtvpNXB7XmSGaQvgpkiPWNApmhbcwhVEoBpHQYPtsXNoA9i2qWbPeZtepoUgGA7PGqaosq",
  "key29": "nTp5vgSPQZZT39DJ6hin5MszimbAanHUi4LgmdwjzTjruwS92keVPU7auAq5R17CYPCvAyGcrwpeGzgdxMm8KLQ",
  "key30": "4dawLSd749Ahux4hBhr6FinhsdDGbR1fnkHtmHJFtCFeQSRjpRweJx4L53B2Q7eh1kSdfBipBiU5ibLFKLwB8XMv",
  "key31": "ZNC5bGL8ST3z2wy8GA6RjfJyhH6MKmfgiE9pzHt4mtPkmqAELme5J7EvxBqvXn6nyLK8U7PjrEXaVsDGqFci2oo",
  "key32": "5PRZHLn9SkUdmMULat1eHvGgM3psY23qQaRG1viXwAzfQyL8gtuZQoCnqKDCEMkzU4ERTWHENjDCY6AWXfRzkvCY",
  "key33": "2MYJwXCGsJGYEvHzzg26We1srFCtfwpsm76prDbwu4JAAh47BPL4rFv8XsR5tUcjtKdqMwTcEck1Lk9431jGaDtm",
  "key34": "2vSttkoGNugGQKt5p98uPYWNtLKws6FFJ8jk49fEC8BxwS8HuUKghkDfkHVzuUCf1swBVpNj7kU7ghqKHGfCNAm",
  "key35": "42Wqu4BgeLMuQUVvzJhFcrFsu6d5a7Jpoq78JjtPNNQn8UD7F6v9grBhajsppre73EttwvtyTNhXPRMR5P68PY7y",
  "key36": "3Jo5p4FwD7XuMbgyGjdebd3JdXVMYG6xqfTqMMiWQdc2c5zYpQozy1xmytDMexhKZQ1m9g8M41218Nx2AxTtDaSY",
  "key37": "4CQRi53S1NeTZUMt3CCXkaa5phPF8KnrEgV6o3pgdwyMcjJBs2ZdSBE3X6ABPmH9wf3Fm4Fmg7VV4m8arMzaTkQQ",
  "key38": "4jf6vunxQiAS3PJBKo7B1DhGDfafLvJWKGZBDvYi14ZEcJA8gSEpHSmYd1V5Vew17MvKc9hKmB8EK7wgktJaxJin",
  "key39": "2v5Uyh9uaH3WeDn58puQosdG2TcpCw76iTfaNJhtuDQKJksmddeF7H2cJnQeWvSyHwJazZ8abmJzJs55vm1mFS4c",
  "key40": "2YNWMwwrD7pqe6vcoLh9RpQfcuQpLkSYvF7YNEHxioWdcxPySUM6sqepf94oQJs6oyeWPRjLUzuB76RFdX44Nqgx",
  "key41": "RJjUGe8Cfzm76xYkkTwC6NmdZtvh8V7AX62gWUbduhJpooHgahPT79WgpPwP9DVxjoPZJgzvQw9fghw2DMrDkor",
  "key42": "39BiTnrsPKAEvndMDGgZjcn1AoFYDcubBicofS1XubxzV925RMs6Swb838GxB2DWqYwoezZ8xHfK5KJ7GmBcTfh6",
  "key43": "248BSL9wB7KowdxmRRTqUmTKhcPv1HdJoEMQ2ecnu8dRJPsq9GPeSBNQZa4W4txbjfGrNKRXFRZni7hPTqFYzSf6",
  "key44": "5KJC1mvLKHqrMw9ojwwoV97v9ZtNRamyTsWsMhuFqdvWF3vLaLqnafZtbEyb5u1xnW9UzPTCSTErkp9QXpeGVcJr",
  "key45": "2rg7A2mFEGLHGqdwqqJ1NJckx4fJkQPhcF1rgXh8cq9H33nEYoWGWxb2D9WWMBPdyV7aq9PqKziSPCwPPZhbFhVv"
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
