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
    "2JD2B43zPatCbK5UvEf2V4e8YrCXxhbBgZfyuBYfMe5TnFLDkcfxEs48r6TQBWbT4KF6KzGxwBiPWLANCqHDiL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RftHJbwWJAoLzFfyKrXAaBqmLNAQRMxM7foK8sTmAwA3ZtERdPH8LFYQZ7NM1gPoEkS8H9trwkHW1t3raefyUeq",
  "key1": "663MnjE5RsBDRHnDoyZ83a6qFirENUHXbeqGhoSUFDWZzjUdYc9uvoD1C51zzyumrMGF1HXzKLVPCRamcKcb8yTN",
  "key2": "2kGoUB6aqvQYPBbAzXnuft6Sgs14gRVTstZM3HwVBKWq2ZEHz2PcQtoetyGrgRuHtkhniavnHigwBh1nwBVgxCBX",
  "key3": "61UaEHoKGjufmvUivCSNjuKKL147fXSZ8rAYbeH1EYcUCSQJg3rSCZfZw4vgk1JSm5JrGhdA5kNRvJJxqdxEjbGn",
  "key4": "4e3cW5JSXrx1CtDy1rvjVDmUHkpb2HC7rYend2jhi1QMs9XhWQtuF8sd8Ay8QdDCNLuydW3q33PzcST4sU4X5jTz",
  "key5": "2bSyJdRnyx3tz68LdYFHrFGnt8iziaXfFxuCmMSVMK3NNLakswPFspYqaqpbxBJGVZviYDKbnCvnbdAJtnY4599A",
  "key6": "364dMgHuCpG2yGf1jFifMeFyN7PkZMztfgWj6EE5ccQpEtvteTfTjD4XpqxY7LW8chPPi69uYrMwKK3G4Rm2w1w6",
  "key7": "3ztcwq96V8zMRudKpVCq3MuyVYWv7hUfQvuSyJGQvwAUmXHcp9Rn2DxrsEiHn8hmeAZDEY7HzYvZLChSYnsd9Trb",
  "key8": "U7mJo41zNFnU3yzKfaSuVjKPWV6tsaiES6JLbX2MEYmYYuZAe2UfdRsk577Vi15cjAUsmDS8hX9kWHVsHDZMtng",
  "key9": "644ArwLbMRqpjzuAUeMTP3nFvfMKfmL2LjmbMifFk5pdmkDwGzfAxjMV2JFynJVxYcMaqo96XU6LeVEkaf2vMEwB",
  "key10": "4VGHaRbSTrpREevcxssBP8cYTm6pHnkiAh1FEg5qnEUfE2KGkFMZL8M9k2MPEGm8yKQhnjXFezuJBqxJ1rmmmz1W",
  "key11": "5hC4HpvMZcVko1fHEp6hGjW9hRuuNR5G14ETMDK8uHm3fJ3RseWsmWDwgFaUqzdxdMoCFqnVAr3ux5xmv2M1tGsC",
  "key12": "42QS4smmokii9BLWCaWJgLRdMkBLEVrv9QP3viXfi2YCQMngnx6YX2Wf8j7dQ2VR6Rwd9sqRWXB9wWZ42o8Y1p8u",
  "key13": "5Kwn5xvdZ2yAfAAoL7bf6fxWSHRi1WnyYVno1kfm5LxzqqeCf3j2oixk3ubWyWe61qNW2nqVmgeGAXZ7zV4zoHZP",
  "key14": "4tXm9v4zKWqSXd1CgAfbbynMVWqeo3WfQBnEnnAaX8LLskLf2NjApXxTioscXjLMCiAyNnofLpJtLrb9qgj63ZYM",
  "key15": "3Y9XpdsYMgsKaa3iabm6xMu3CHXRwWA2v8hfdJC1AYSzRTTCYNBb7HDSEMEevxCDYh65uSTQ6qTWLDwpFCMsNUGo",
  "key16": "3ikVvMixKts5pTa6beeuC36jCcdY9H4cuxa3pnTGTyaFgEG5A3WDAucivGQS5VWyJLeQUzg85wwRRxp8J2LHts4S",
  "key17": "44Ncat61f16EKe7RSjJywjrDckM6bQhTahZDGaQmzXfKQeijWkGJ5sktxBDKoB91Ge9gLLPiEfQKoLuTDEmZdTKw",
  "key18": "36eTw5z1MVCnRrJMjst1WzsgM46geHdG3r1rZESYkiC6wH8UQnebbfL5PhsatVWbLPpWSrcTDRaHy9n1edz37sbA",
  "key19": "1qo1Nh6tYHS9ERJnMwvPTT7k1XjLgLnNcbW3ZKSKT9LpHXgUZsiWbhfdQQVsPeuZieHJ5YTSXFzjNZdXDkBUw8F",
  "key20": "NSQG6eNMrEHGbe9ratV1iihQMc45K3PdZRtD6LtekozZQ74w7tvTh4cLXY3fNQW8ZL1fJ2QawWoiJGaUfTabVg8",
  "key21": "5fQutbzfy7iqgLSUJT31YUXXpXrXDDqciTcdFEJbVCahgM3dc6GLmZczEVEA1TnXLLGcRmVDKcnBUQnyPpkZ3frz",
  "key22": "4u2vvgRC3N15rYYmRiG38364u2vAhSGfBURiAcV2u2FMwZhEJB3DBRgqtyLgJsxfxAHuTRPoDSkS3mZGx89EZtJp",
  "key23": "42YGULfFdP4ENtrVdzG8CfUmRydWLniDDvDgjZWVASZ33x5ZD2RwPPqgkgXwFnk9HeEGPfvhz8YDTiKrFz3eoiT2",
  "key24": "bG3VAVSvW12aP65542VZG1kaiJWCtEBvq8xrpaWGWfFETEZoBRW1Sf5VfiecyArkzRVMuzNL8GnFs6zfSqFcGSX",
  "key25": "UQ1VV1zVMKqG1r2EAVsrGKawAA54m8dt8jGrBvj2RC1hV5SoRxSQkrDsaYb1MfGcrYczU51DFykSwgZUFkkYsdJ",
  "key26": "3SjhpW6pJYH82oyLujAPqgGjxmGxmw1fxSgPjW51TWSgwQjBvqPLyGfDtcqNN2UGQ6bhWDvFromoHFHfmoDw7JWM",
  "key27": "5MwXejiCAuiiXcyBktrAXiLj4b9XE6xaqFJsFaUNMPrN252nKtjepQhiHjYXDZav2RULZNzmfwFjmmYG8FzaqgP5",
  "key28": "3zt87hg5tppCSoyo5iMGFHTHnEXdotKv4En6Sto7A1U5dgsgL7Gboyji1k2H6JBekCD5NA3cKdG51NuCuv86Q2kL",
  "key29": "4o6A3euuyox7XJv3g728atvhms6ExGoRQ1pCjGik9t6UJTh7xe5poR8saJ8WMFiCxwhZ2cP1aWucqR3oRLksfPjN",
  "key30": "2sttx6f74W3BDFPJU9W6dPRnwcn8wv6PQiDa2xoabunf8bKTETJ89hkRhUvSRbwhLV4JtW1Ra1mV3jiVBuo7iPcs",
  "key31": "3HzNyhZ8YSvBMPZRibFBm55fxq2EJXbAQ7UN8GXSiHZAoMRwhQvveZBuXmgviLjdwGocZ7d3jkcMJsEBusbgk1e4",
  "key32": "5b1qTEB4zBCBTzRvBMZu5HBdmHVQndLK8Yxrsj6eozGBGxbYwUh6dyeb9acqyUUDhJCckvhSpMn6BKe4wBjywR24",
  "key33": "5cfvv6NCU4bDgMhKyJSZ2gSsw399fcw8cdPaKSQDp6P32bp8okYHGWgdtUjtPWCSB7MFUeGUcB2roFJBCvhDfkdY",
  "key34": "2AUrzS9jKiymdp5MtTqGoW855FnhKaPJ4dqQuwG8kERGDY8jD6b4JVn2dPiH9yuGwwjmj4u9RzdhjqMzYJvKj8HV",
  "key35": "5y4vuM5WXvLi1jH7VTwjB18vKUcSCViHL8ojXpo3ZWa4RySFLvfpKofWGYjhqFmq19YHWfdxWeznKMvYqoKD8bw7",
  "key36": "5FHRFG9g3b6uADVaPpS91B53UVGAoDijSfhZNcfDw9kKYrCMKnKk5k43WjASnUqGyJtqXPK73wS1e4hNcGTaVxR9",
  "key37": "4WkAo3voLdaZsjEGGyrZD6SDvKWJzNCzVvUTA3QVhcajQJxCcEWBMWwtUYPW7cABVsWQQFMjZJWm3n9bJGTEXPKG",
  "key38": "ZJQRByT81PQQaqDFKvZkdVyN1cMgYwdFgGDyGAjttPfYRrrjag8qsdYKcituHFkDEfLc4QPssJMRFKzaecq5F7M",
  "key39": "64oCcFEFGZJh9W13umUJS5PdcqGgqgxJ6Wf3XgH3jUqqcgXy9zyLrXetu8vLhTvQzk9mNw4EmNQGefpxPHCHjYRg",
  "key40": "4GT1JGMxQVAVftAjm1GcxoFmywysxH3wFxSdszRzWxsbATgQx7fnHFdVP1raNx82RJSv23syVwdgff1vka9WxEao",
  "key41": "3LU9qoyqQT2MGGDUJa5LUSHvhAK6oVZo93zfUbKzmq4N3RK3dasDCm6GCrEvwwBFcudYR6jD1Ntv1PTvbbiPZXPC"
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
