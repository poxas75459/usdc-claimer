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
    "iyMZxLCesRhS8hc4mgQHDTM8DVwPTpxAjWMZRnXn6djLhxLJYJcUks6BdBq3GQkVJavr89HA8oTywatqUUtyue1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkPbbv4dTS2NeVW8jNn1PxgUrHmU3aoLHQPDUFMqm58wz95oipMhTfSprhNTuWp4pUBvDgDHUdMy4oCQLsQ2htX",
  "key1": "4gzQ8yUgsNJDoYAhDMqCAvP9CzUR3XRnUFz6HLgKoTWTQ6RafmpTA24y9jqMgprkUMvKfYo8W45AFHz8XcHNPhqk",
  "key2": "3cEm4cNWB2hQmxDxjoPGBidgYb7Voke86a44ieWoRu2AaK8aBf9ToXW4nv31y8Xt3LBJ5bauL4YN67K2p4r8EQSJ",
  "key3": "ME42eKnV3piJnRLdoaXQNvVR2ugCVwZE8nroQLW73jU1YMWUbR1vgEQSGkdzxMTZgjTfXyjeG4BqhaVZA17aYUw",
  "key4": "2X9rk2D3hhn7sfhx6Z818ikQFmvbkgwR1FFvqFaMA3Q79TdWqYNRiTtGqQPbX3jFhqHQXBtccNntgmXQJtPhSptW",
  "key5": "N58T6AJU9nxxm7VVKzEyPQAWbBR1pzjP9vbk5Ja796uBQLAE5W8HTgNzTHKGHdfzo97SGsHPANTyHtKN2H3rRD8",
  "key6": "X3jLiopX4vmLTmxFYE45qzKWqWPpC8xzxDn3op6i6g6bWc4MCpUmuMAhDkMTHHthJkw6JWKasek46kDWVyyUC4F",
  "key7": "3ZzLdG1df9qJBYghSUd1XDP7JDoDWCedJ6pnmEgEW3apvNghTA3SrixXSe4cTi6P1CjgnQNt9Km7ij45PSdjrj5w",
  "key8": "37G1aNk46r2iFTCMLsFpEvJvwuoHDcAn4eQUjhyvbszDm2si5EcJ9aNs6DmjxeaWCGM4JP3vP1gEWkUPHv49J5T6",
  "key9": "2841R16JTiLaJ3amrgQMFpg8vBeM4asuDTb2VcJjZTcX5rK19T9SmqpFUyKfC8vm8LhjiwsFCjPnEh5p4BXRBD9u",
  "key10": "apNzXvF6gYzYHWq9a2nM4mr2JVSuVCd2prDsZWwBncFEo7oBaMSxvFDEZwikba8DscLbaM4iNVGv1Ta7ZCLF6Qp",
  "key11": "2dm4FcSjJKEDSZ42AcT5P7hNtegMZoHnFpjAyuJE7rjqYt4LuhWAauneAcSQ5spfrdKguSutciTrZJ1ay7f31k9b",
  "key12": "aJoixQ1h4SmoBHHx9LS5Zua3dBgrcmwAphmGaqw3FenDdZGSjkdA5ToGkpGbF6JaBQwKemtoXJECAuwub42VjSh",
  "key13": "3o3MT6gLgETPnSkLg3gfcv1DtLpom6uaYLtnZXLLrM9G3AsL8x8ckDRejZgGaMbMLvfb3D6LJuAztZPHAhsrrodz",
  "key14": "4sw3xoGkYNdEUQGiSfz7qjynMUghdubDrzwdqHwf9cmaDsxNxWWSYpTwjhUj3Yu1VPX2TFPD5DgQv6oHzTfaLqyz",
  "key15": "3ECHiWp42XV5Pn5XHj4D1KKAt6crpW8FDaBAWs5xrWDn4Nb6X4pJQ5SxU5Pj6YZcL1TjZEMXWUAspVh2rHo3PpQs",
  "key16": "66StQY8mqVBuHwXR42fa1ysytXN9yUrmvsTRx7P55RZin15jNUWsPjxrPxuUY41jKX8hNo5u5gePcnXADMxxsmjU",
  "key17": "3DKctXmhg4C8uaDAUhsdcYvQSRUncgUhBHQHv3X54Lw7CtrUFUijcDZd942BQCPgVYymwHqkh86seU8kscSRSpbM",
  "key18": "3hGfnQzKyYNsYX6mf9Euv7mPWG1AfUYYEnzdTWEvB493oipZJC1ZtSKDeUL6Q99XwTVeWZfK16xPzChkuTMkSwi9",
  "key19": "yyvPoSV9TgKSPPcUYxJfrryhNtkNyQ88MhMCXNMaRsbRXhHebudvuQCWx5UjqSsVpjk56CFf9VscGZgJhzA6NVx",
  "key20": "2ksLHwyHXcPuB9UjrWf9n3kSUvQBK6FTqf1N5FDEDiLG111Vn3eJwG2fsKvSTtiZTpT79ZASC9DdYNFL3y9itnGS",
  "key21": "2isPW6FKDBcUnFfqXsh5Z5Zm4e25wMe3iF62NYARpMytYZ3Lav6ZWW3L1696fGSHiVFEbkvtRiLZYRxb85TDAwFq",
  "key22": "4NC58L5Wf7LtC9hgCevjfNxrj1eE4z3iLLjjF9tg7nY35AWRmeNwzTLMysgWS86YhrFCfgkim5sE2mg8qJ2jTcbf",
  "key23": "4ffAUvu8ZMebG6f6GnptRq92swWrpeUowTU4eQc2GDUTdNoUQQwq82qJvQSJ1MGQMJpzPyyxWvmpH2UxwBTCov6s",
  "key24": "4MaR7MZRNuyhviRFjNa9DuYjRnhGPfCirjRuwm1d1ycc4rJ7yaPmS9GiQKHRwY95yox2gjVFsw6urYSm7XhXgxFi",
  "key25": "2uymnvCtQJCuHu9YajCzXgRzguLpNMEmtWz8xS8MkmBifdc96ZMg6zD7aUihx5opvo5gdx6oAvzT1FDj1Hydxgqw",
  "key26": "29exUVVDTxCqXG8aiDuCzTVGfhBhJnU48vbnqy6VtoNYXabvbe5KoSNHJeU1wMh8LvPavKoiCsMmvs7fWDzCc7Gi",
  "key27": "4wexYqBmRymLjaUtTuPJEzizdd7mCR5RRJGKu5bAoWLLtp3SfTUxBEDPdCdya1hrCzhaMi5DVj2AaGf8a9CDHi4u",
  "key28": "3uR1mTzaK4DSYwmZ88TsHgiVVVuZnoXMohWKdRtm2JoekQNNJas2ys5GSvfV2D3SoToFXAAho3oaBsTcJwPEBZo9",
  "key29": "5zhCKyy7sA7EYJYffkXUpxdVmFEvwJ7NLmm3ggihQaETNJ9CXqCreysZdmFqg8o6JzvegXTkQvreJxjFt11V64GX",
  "key30": "2u4sbX9RcHriD7g7NfoxPVNuN1erjH7onC647ChAAi1N9v4SBzqdi9odihNHCSDaxDd7ehSuj9yTAaKawa6pHss3",
  "key31": "zW6mx3HBfPxU2dr8zjSUCZGkGxpbLFTNXdNeUCVvV9EmMSnFPb8BkEqsgpkHAqHFeq448HwojW4SfXQf1GrQZpj",
  "key32": "2xeo4YQXDe8Ew9HKfed9MgrUb9yNFcR8L6wdsK6Xd3sUrrZ3tLyejRjwhT5xx1TpyijAiWXBUR93MZpn9XDsWf2q",
  "key33": "327dQ2Ei69w4WmpHRWpNbnwubWN2RKPbLp1sTmaWKa3BzktVPK2ajbN3TeejMthcHVonA1PnD2LTtYGzky58WvTp",
  "key34": "25usjPdbGkarTxv9BqcFAAKL1sSRNUSHApVwdAjimzCzyxLGLgqscGSjB2nMuAxvMrMuFjnQerzyvFayokYzG24D",
  "key35": "5WkWAv4EcBgZXkucCo9yZN2ifmG2iBDiEjZL1ebUuAsgtfGAw8yDAoo6b8F5wAChibb1rrR7Mt5zHZ6ggq91ePVp",
  "key36": "31ppJMgSJbPpD3R1Z4QZ2VzJPvKAtS6DjBiqmLNf1P6TbCGDdobyGA7smmgfSsL4FcGycSBSZpDqpJi82Z5qQffM",
  "key37": "5GPFVLkHVpQL7yA6vFHAKQrz48jsz1un1qhhoAN12hajcrE7PW8Rqdog91omZQViDWTbJZKhZfSNGhbExpnJ71oL",
  "key38": "2TUMm4WSZgJzj2NGvA5tsJYe9Fq3JUARhauVNMRyuqikyUU8yzvuxZKugsf7nRsB8Jz6BCTGy1tv6hKaKy9aEidZ",
  "key39": "3KCrzhj96is6zLCVaVBPBobcG4yHg5UEmHFhrSvdwbKVuFUEhFLEJcsK6LA6QB8GwFRKgsXBvBbBcZRVVZjiuAmT",
  "key40": "3hsPqg7qMMQJVwYAyDEfVBG2bJR72eXdFxiYRAUWd1m9rhAPJF29wNQ5XNfSnVsSkwVs7Kno7XTMbtHidzeXHnKY",
  "key41": "4Gp249mof39VCtupPELJHuvAcohLQCYMGF1yvLjhF5dfBJKwXSWXTYHpSD8yV7QmAbLBnsrUvadiTYau15k5hLBR",
  "key42": "3jAWAdT3X1qxnr4MfDfoxCLAF3GFqBiiNLW9YsqCijm2hq923vXfzfxsf5gTyY6UDxe2nLHx9PJ5fmGpu88Njqur",
  "key43": "2ThVvUREDFM5McjvNiwNvyoWWnfYWDCYEqd257JjaL8Z6sYQ6ZMVzkyg3KuoGM1ofdXb7KpzbeT8QaNkgPKkJBZz",
  "key44": "4wmSyKE4WjKkgTiM1n6YRZ8jdbSLRzdfBweuPmtgnoRQsMJuHqqQWPKBxwsR1KoQKd2KY7nZDdk9YkEgFEcf7zG1",
  "key45": "56mq1vt78YcaiMdB3zRjGrVCoGaYiwUpfkaoqHCjSvJCwRBhRsPzejFBtTMDcRmqreEjmoBWwLr4iGxW7W5MwQVs",
  "key46": "3H2mM4CbwWriBqQ295TP8qH8PkG11hTUz1PcZ5Woo1mzkt6d6HfCW3TzcQgtPWbPTFitFgSr4rMrQCwde2DiSBDh",
  "key47": "4LioDqR3FqR2QrFjK1m1DQY5VNd2nA3n4UU1gWskdqLUSqvsAdk81VwpiE83NZqEAZHviyRtinVZuJ1jzUsBxGu3",
  "key48": "4h2L6BKud1Zk4WT8jHiy762FzCXhjQEZsGb2BmsG7HKLcC61X56naWQ4aKJGMVaJuCVZLmBmicjNvcPb4gU1Son9",
  "key49": "3KLeNw2zkuaMNVbN15ZqL5qvqXo4fVVkWHt8faDhLK1jeug3KRVJQKSrRkDYWCQkHNc5TfLEyquZNPH9WSpDueMR"
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
