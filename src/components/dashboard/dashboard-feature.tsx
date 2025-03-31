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
    "193dQZ3jCZ6zA3rB8sgQjZXa8eGTrrx4PzR4gqPrHdfTooQh5f4iJER5LuQUasrQL24FZtRts13wfHuqHwjdZ7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNFwnjkvHdorvZGZHwz5pfYLeKdTVhmv1YCtAy8cwdMcmoF4FAs1ugz9eHAov35X8zRpm9kWrmk34G1bHyaxjrA",
  "key1": "3LpDaLRQm9WwmjwiCTeZNWu2jYygAgczyxaYGd6ShzrW7N6FuYtZ8jbRqrA2vwg4KbZSa8cPPEYV5GfxweqGbrxT",
  "key2": "3ybQGVgCghNbHXEh6C7PHr6t1e8QrgnQeSJmXFcmnr8wzr5eKFxD7VrGS87nfeMp9MdfFbVXj3wrXFnznBKSxctX",
  "key3": "4q15jBEU7Kuvx5e7fPGwpTdwGghAKW3Z561BhfdNLT4MMmnJa5YLSRLtFtDtuf6RoiAtYpPa3m31bxdyKUUHYtmm",
  "key4": "5mYSjuEukwWTSwiACx1vPM2A98EWXjrdH4UzLWBkMeJbau1v1nu3BVYRFHgxpBfUaLHMbZjXtnS9VYNAKpFJPjbu",
  "key5": "523dgGJmcfBrfHJpRmLc7Szptz8dkV6gLdshWQADYytQPVkvXbR7o76cAEoga1hJ34iJQM37rzCun2gCxVafbXmm",
  "key6": "JnRWnZCopu2rGRnXhjY6gGWDixNT6tAs6KrTod7EnDvLbeoXhtWQzjEX6s2gGG6Pi3E71B4cC7ZiQ3DtbhLBeYC",
  "key7": "121HXs7DLr72ZJCX2tBJHrSSSMEnw6miG5fJitT5q9jV5auGR792dJLCBApad1ptRb7oyMs8SHc4MfYgkSzQkGko",
  "key8": "2qekHyUrAc8B3h4su4uxRQjHbLMWczHDtRHBi9F8aHD6SDTNy1Yv4BW6ecPhy1VPHyXTF2aKHN5r4R6ezCNFWmmu",
  "key9": "5vkwgatbDWQZDVhQpizC87MnhtGi8nm6Qa4gpnTB46Avp2oPpK3rQsNGYtA7khJVFJTagvFCxxTod4p3cXJRkysL",
  "key10": "B5xn46jZuiChRfZbiKi6EEsDmJtAWZRdKTph1QT7FqmCqifgfoFcTEYhvny5UCACSScTqiMtUTvYqqYrwfy4KBP",
  "key11": "2ah9dYreBahP9WcXe1Js1RARiXeUJ4Wbqw17UF4MpUFw53LoLkjPPiypD81GuuaM6HXHj3AYNMzu1xdKqvszJVBX",
  "key12": "5GqAtHtdqnskf5dR935Azj5FjahxNZMhds6nUkk85jxpa2VoqVBhTqYtFJZSnuoFkMkMo8yrGxSyNGFYgGpYokuF",
  "key13": "5nErYCJACkqv5esUqirpQhScr1f4yAECuxyrbfDnuPUPXFybZDFdtAtdsPwzJ6NK1cV5xazruM5MYFGT2cgs44pr",
  "key14": "4n7yGppPwQNcmTuiuQZjCBAAm2U6hMc19bZppUVSRMkxQ1of2iSbYzPnuQ6cjFe2XjRmsMFPrxjoQkJr3t7SXAoA",
  "key15": "5W7gf7ZWjAeg1XzGdbdVaxHTAFoe7ivuyjcLCzmSSJk1HHGRYaV8KYY1Qv2pgnZspNdPiaBUsRtc4iH6KWShtLUp",
  "key16": "4XebL4R6JNfMNBGfnuDzaPLzdjjDQD4Depj8KGN47S7GMLGv9hKtv7HTHFUvaRwkz6DbuwDQ8pYiY4aST4vKH5q5",
  "key17": "5pWbTjzvJmYzyuRqyJ73hSEWy2Tga75zmHz665ysCEW2EhQiSgq4WZZdeTwbuFgV1mCESJkb55snLujtMgWakdEN",
  "key18": "3AFbpuCdGx6PU5bCKqJRZ3amBJ7Y4ZyrS7BjhsVDXY81u1qNS3diKr8D23D9qiZukVydmRo6nTj4MRMyiDEEdgZt",
  "key19": "5PnQjizWx8B7JUi4P1r29qj5RSQ2ZR2qcsSEqSYKKj68Rdurp7mZJpnYUGasfUqwiRJ75pBaLfcvZHxRPCEi4Ep9",
  "key20": "Kw7Eh5NThdF6AaYNafLVAZcfeVmKeNmBTHZC5h515SjY8ek3Eprewxv4TMiVsT4WB129XYDxyEcSpjXZxmiehc3",
  "key21": "3EQGcgwnGB4FZmz4kZ9Q5gCGRPhbLLEgCXpzQP9krm1F2wG2NuSzYeQgzZaLSN9ScUPwmkUG2nqRCBoAbGWc3wzV",
  "key22": "4RQZvL95XgnD7BYbD4gjqKLE7hMe8XMR8gGw1Fka7X5fMqn845P1ZSimgxcCd4Tst1iDPMvC7YKF7bHaPirgqGVp",
  "key23": "gCL35PNXLmM3smqn2UCBAY2Mq1KYV2DErAqskJm3sZ89GMgoogqeQu3mCmYNiQ1LzDDyewTupHHDvvsfo9eXSPD",
  "key24": "2g24XvL9eyGCtdBKFAkrtj2MFGr4Rrz8DSZ8fqYKRtvazjT8htqaZ9jY85BLriPVdsH3XqJ7ZSckn3JhsAFezWKK",
  "key25": "4gjUgqnAHnVZzjtbsGPmfU7sefTQCh2L8pLRdCMMZhrcZGZfhG22SiMYG8gnvXSjF7rwmwotFiRzKGmFgcH7qFEc",
  "key26": "2BfPAVYjWoB3VNHhjZp9gAqRpa86GsTcVowLWHyj1DjgF79mfT4JnR1SN8CRcEZE9WbD8XzgxiM3pdoSrBxpj751",
  "key27": "2nMgpswCqvTtiAsSzRaR9QidLhfUAt6yUyp3VNkukJ6R2K9TtTXwjcTEMnNuvTyahtgjp5H8LrzEsU2gq1A3XWsW",
  "key28": "TgoZE3QviYRhaicNpq5FNSgzuKc8sttL5NVBwpHUNZy1mXhjeFQewoVrAjLUMngfYV3P9BWRwHwYQUyumyCQ2XY",
  "key29": "3seXMofsUSPdGESAwqRNfNVRcXgGqssReNhVgst3fPrjugnfCJ7tDDvDsSkZPy4vrJ2Zm7qooKMThMaViJfm8hJU",
  "key30": "4hdHhciYhLiNW24UX4hKwEC5KLCH8EGfD8VWLAT5qYWiMAneTeBdKFCuLUmBVZsRSRGB6wFvqmHVAyS5aNUrsk4F",
  "key31": "3nJharRLQDZF6QwXqRYQkCD7KbHCnDRNCdqVj5fn7MzhvR8ZSqYNNtpzLL5KUbmqfN3YNKDnM2C7RU9MXaJbNJoi",
  "key32": "2r4aKzrZN3ohH624YiVf4fytTnfgk5aZg5AAKVupE342UdtQV8ye8v487QAFH3xZQk2Rrsw6sAi2FNQF5khoziCX",
  "key33": "5pieeTkm6om5sBZJWBFKSWWPAPSwd9fDCaBTMKHAnRmAEkkyKUFcTDNUEnYtHxtTYKxpg29k1pWwdMff7KcooatD",
  "key34": "5Ggg9KUe7vL7PaSfoceAsyCTc9NDQy9vStjfQ9w2j137p6co8WaCztJt1d7N3JCeUK8487PSgzvAGZuPVgVTf1C3",
  "key35": "4Z2mhVB7mez4ReuirHsAtFY1nwJGXxUFvAcfD9bjSabZ6hNiFJ1E1qBhARdZQysGkZFc1k9BFQg9DfdBpUj8nYTy",
  "key36": "3g5EhoHrmDoxmw1rG6tMy7mqHJ7xuU88MfxTEuzJFw8Hk5v2K5mVS5h1wUvKmeEKSpR9EuWGehXvvJWPtSsxoGCH",
  "key37": "3s3CY5mB4vB8akHn6krDyeej6CTJ6DCwmNQMkr4EUS7DB216nzUe7oGUL5iXqLFWuaxR32QGJCNZyZNnvgoeFjaY",
  "key38": "yULsziZxCBMH9vqjzVXkSZW41RVbeCnTW9iwxa42pA2CgJVzSCVm9schVJVqb1D8JVc1nhbx65Aj4Ka8g2UoVrP",
  "key39": "45m64LjvtJe8KiDXgoXqwSDTHYJudDULpen7ZKYCh5itgdd89paFcaLB74V7zrxZwHrQAf3epUHwhJBeMmE3atiX"
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
