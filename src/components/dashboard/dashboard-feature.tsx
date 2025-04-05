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
    "4KiFR1G8qUersqL6THSLs9BX7xzoR5ipa4zMH1P7LT7eQPYh3ENnVPcgT57RYJZAS6YquwuJN3a813hAKRtQsoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgr9wTZ8xVRivdADKeYwe9ej4aJ92EM9zu3kH17Ah9ZijCrS4kvMT1tri23hKfHBvGdre7q8Gv1cUBzozjFN7Pv",
  "key1": "2hqW6FrkkHo3XBmZ9QT4aPuHsKtG792eQVw99z9NW4ZigAGs2PpLGgN3xYk3PHwESAGUCSANutzbgaMXSpgmXmoB",
  "key2": "2qrCqK6rkFSxsGaedABwHgkYWj38VsNbEv3eu1j71TSqa48hPWaBULN2TkGkS2FJK1a2X9yerb6KuYxLqhehYj16",
  "key3": "3TJnB2cy8hhWE4heoaFB8sXoNenQmvaBTqPGYCpLPSUTkwBi2kQmcgywxmhaCXBUuQrT5K7VBdn5UHNqyJwwKgVt",
  "key4": "3h4M5qs4rzsYXYBnEqQcVio1XNxhF5bsDZEdcedXRA6cJV9Xogwk2ZrjzWNoCyKaBrYxUkkQB7L5GvRFnXK6bvMB",
  "key5": "5JwYFgxJEt4YWGA9Mz5j9SPdbptdzAdVZXdEryBi2MES9hAArNo3GUHyNip3GoJY9bw5XbqbQygm5k9VChefSYPP",
  "key6": "5FZfYezokwVBtt5P5jG6dazjjigQQ9TkDWVeCt4Qjag4p8JPE1V3ChvgRerrBLk1aw4cKhQ1vNEa843ermAcGqxw",
  "key7": "a1sBmqntGqy9aTzmgQ7pkZmLrhT6rDmzEHXTGuSV3Vb3DyFUJ4ffdtPG4cSQZfSKD8aVLvHwKSnyoJCxLQ3H2P5",
  "key8": "2AChGA6Y2x2YsVEcFvZCdkuG4ePpAdzQDoAF1jnb2UvpiTmTMNtUwPbiwvp2ivbzyxnkyc4vV4LtNPPgQUTiiz5z",
  "key9": "4xcA2wNpsasfgpkszjNWgYR7Tpo6aKiJXusEjKhs3VxTZFZVb8AemHK8ChSkCZzGvBCcKD2vdPkqmxUbWxcXuSxJ",
  "key10": "emhXJGWu9946CLrSzJBBJRAis4xttQD4HT6tcBnYmka1VRaNTMmLjmRiHFSBxGZQzZQyZTmpxqXhKETsNfDeBUC",
  "key11": "5kH3pweDUMqdJ51PxaBYF587FVoqFJzBm6Uk7MdwcJU1Dxo9gGxRGj1U2yRDcFqye6XqUHLr2ELDUGLVAwifujw3",
  "key12": "2SfhFSTuC2CQwSyGXAXGjm9qA8TeMgbbKqdEkTuEG3vFQ1g7VxieDhaBGAgc8qC2eQm52yHAH3Hy1efMF5riKEKS",
  "key13": "4jotjrTvNvTTMa8t8mLT71oERuvbm15uivmqRp6h1ekpVRJp97o89qrFPhNmHhsNtB778AqejeE87ouqAWrJ34ZX",
  "key14": "pWT17VZsSncKUnYRdWatZWwuKcLaNH6YWDSfjEXGPKd7oamY3oDpmn2i1tTNYtfRKkixtfUTgm8AvFtNqEBQPVA",
  "key15": "3MxYW2dCHRjDtNFrg36ySKbip1j2kLyWMfKcVm7W2xPTAz9GVFgbVTKLrL2dr7er7GaddHEcM37wMnT5FevC1Nsp",
  "key16": "4XzGFyWqB3NzWMYHXUZLCu7kiAc74jY5Ua1fhLLoLQHGTtFs8VLMnxpNwtPUZSwdJAitfze6uAFxgsnQNr9CsnnK",
  "key17": "3jQWbXD26mXApdzdt31XM8javNXVC5ahM2zc9yvPGePHECg6hQanKQpAnojnDA8jGEkaAQb7EMPKEa29z3FnvfoK",
  "key18": "4SAhn9aUoaqtwdLb53iKNvruLcYiNPyccrcEbFXzBT7J9fuykAU7gMtJAnZYAyckGGnJ6LaRQasY1jKdkmq6YyeE",
  "key19": "5aucnW5fWJSGHPkALGcTHVSuVy7hhphNuUjLeGiWA9mVjtzEnhN35Z1HZU6P437MsEgoziwWBzrzMQQi8cUDZp8R",
  "key20": "63zxZb4JdRmqrU689rCDSkP64n7oAkcMTQmQDVr5f2CTSiPsBqi4SdEv2U591ShML1JCeuaxutnbsjtfg7zGP45o",
  "key21": "2oP1DBafBMztRY8bUhJPhLVa345dBebQw5cUYoBwfb47Q69bCj9BW9YTrvCcqWZabUyZV61ctc9ZgSiWhXsyR6nH",
  "key22": "28nGS5RonwxA5fKF3QPjg8LDSjdRBf3i5dNThzffFH7pMQrtxya8Es6dK94nRoBAyGgQCzVaKdyy5K9dPW8hWm9N",
  "key23": "kWZ9GNSC8Hkxpb26JmqG5JFsRx8wSZjYqXu1PhG18uTPCNMb6p82SR4jKevEUo1uFQVM8h5ksReyWJ7TBhmrWeq",
  "key24": "4JA7eVRkccjFpmeZg4bKKiwfw9pxK42mzFjjoZ281Pby3XSUrba6esC3udrp8YfLBAn1LhkKGLvYhF5tcGU5RuY6",
  "key25": "xBbDXP6PW6qggC2dwZmSwX9vSVM9jDFkKyihRMAoLbjKwm4mw4X6KDnNsSic3YeTCixdWZR8gioqMgxAEdnjfXW",
  "key26": "3L71nPtkY7oLNff9T2Z5hMnEgkyo8QUpZEeCmEfCdjWaqbQGtAdBT7h6yAnnX6Qrr98NX7qA13Vivq2tPt8oZ8qs",
  "key27": "2TP6N2oBH254THKhoztT12P3Hu6aFCqqrSFz64mbS12e5VRXMyMB8Q9dRdVZHczuBPcCMJm49Z9R4QU5bFH28EtS",
  "key28": "47wXcEm4sAmmZqKWkEHxubnh1CmhiBcMTd7ugHRpjRdfeowYiqmKrg4prHjFFUCjMHqKSdkjRx9RkXjKMsRrjxVX",
  "key29": "5WTspoJPGi66nwdqT51Ds1qQsVTHZEdevj4mGkH2YkmZiUVr7Qcat7iEK7o5Df6obYpbo69rLpPpxDy7zXfBP3Qf",
  "key30": "5t9q3Bo2Xq931DWJes7eV77HCM7V6UydjVVXc7P84hGT6y8vLtzCScXCRiMCQFe2xmiKFMgHC9FJQnhsjFmdhUyp",
  "key31": "5924ERFQG91zXwSJuvpn7bwtCPDxZZq5vRYXLtibwvdGXSW5n2NcDsaySRCVp3J8ijGy1wvTUkFh3RoBZMxZad2D",
  "key32": "4uijJ47v5WtXCAcwGkhCspjPVNZLwjpa6Bs42duWpEKg8o9NLp8Bujnwf7kce55MB5sbb7BD5q3ynKdXw457t9e4",
  "key33": "4aBcyJPtR4dixnKYZqHPjYZV5vv2uqny4W7h8offh7SvwaJekVRZGr1DRgbuRXiWzzJkTYdhBbpTUcwmr7jtkxUf",
  "key34": "3cm5L8EAvvgegwczGTsuaanWENEPbJmNeLy6jd3cMpCNUKk4HBNQPWCfAiuPjCgn2593SxRfbUYuzQTcpmcNj4pN",
  "key35": "2V3Xmv1bwvHka3nTVdLAXGefNZFCVad6t73CTGHcnzpCGpjMEujicbZsF61zyegj4ytuGBgjoQZuHZ535x3CLfYw",
  "key36": "5Q4pV68MMFUPkkuvornYibQXMwuwyhz8W2HjwSmbgrYW4ugDkhALHMakjP8QyzNkgwJmvj9wPHtMLRdwJwfBHchh",
  "key37": "2emDzw2yHd6jCUNhQ9W4QgZPthvoRamVAfi1PrVhcG7SzNBmfoRJwh9W75ctUxZxkZrEB7jvAkTqSqw2sMD4m2an",
  "key38": "67dyMNZrfL69jamoWqPm13DshcCpzzTiJdZWMtHK3Ciasy4VdSDj63P3Y9AKbma3Z1mgrvkD1Y5NFBKFaKRzZPX5",
  "key39": "3bKM22yMk5WbFjV2rcHMNsVDQZAspDVtCBdi2tJEE4o3kPEVhSYtcfwuqSy5fXfFpVT6EazMVBxQCbJAMvXJmsYw",
  "key40": "CBTfZ6sK9Gf6hFNCs74ho4vPVieAzMjHQhMnr7Vjob6QApaZCsfwbrLpL2HN1HVtQNxj6BGasKq2VC84et9az44",
  "key41": "2qDDjenPBn4vjHoCZ4bZjDV5YgnWzJmdP1gtKfRbJmdVUrgtJMz7oK1JiAH97nwipv9bHc9Tgp6cWC8fD3myV8vD",
  "key42": "2dk5HU12efYwGzA3kNKz6De7J4PS8pEgjQSUDVqcyq1AYpVkHqyLkMGhz9DPLtJUa9hK9X8urp6dUwnZ1VMbQwkR",
  "key43": "4xVuQEhrPxc9mf7MCsCicQuYAouvvoZRPiXiFXRuLvcu7GFSTt9mUBCUigXm7K7g2Jn2Qt7xr9Doe3UNqY4cjdqd",
  "key44": "3PiBmsEavapbJt54CusZCYfhV2maaBAFLj4DdzJwjTWMwzcDVte5aq89qDRdMD9s14J63o2NFQgavWRJRHPtqKBz",
  "key45": "4xqaL2f7ghRYpZzmBiiKydA57oBGkEEGLPV4vTwFe5wdf75dE5t2W4KqUeCAD1QzHVwzCWVeYfdyW7oKLgBiPztP",
  "key46": "3RApK6UQJfmJJNvnSojrQuR6hbk9yAGMi6QiCWbaYffGDMozCUoU5HzeeXgZsxcCwejPYkiWRpFi8FbesC1R489g",
  "key47": "5UtiZr7EHXetg3JA9CKgNSsY59gf8A1iM8BXhdmoMv6sNDCmrtRnR51BmSbMveaySP5r24VJxW86exoCPt1NCkQH",
  "key48": "VbBuaBxXtGZx7W92s8krNv34VZrQDgey5YeP5zmfrDtJechZHPPqtz22V14SBXddEX7AGMMXyCGivqamASREYup",
  "key49": "5hJmwcpDQrorvMCurEbg9RxwBXXA7UHrJvLDZg8tPRhcGJRVG9RVfTV85XnaJizc9HSwaFUnv2MrWuKtDnwPjZAs"
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
