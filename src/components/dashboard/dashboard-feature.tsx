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
    "4qXDEKGxio86dJ385ECaUcxYvS7t7WSTN3deykMkppDfJMYjsqeZ8kNkJpLQXcKyXKxGR8K1QpVvegTBdroiZJxN"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3fPJ2SMXpHeimgjAebqnj3fMFmvmxR13LknR3EbZ96AsoYS9NqYwo39NnkP92Z5Qha21iD6G5biYxGx8XXn98Kp5",
  "decoyKey1": "JVVRQr4361tLcznHNNYVRChafTgDZA8sPJ1WNANHGnmBmVhXZpzZG6mrBfoHyhY8rEbwSuQ9sqJi8PTsRVMbNrT",
  "decoyKey2": "4ceL149pXPR8bhffb2te4KsT4tEG1MVKuVQ81xrxryBKgmr3JYy8B2Ee4qNz8xCAsJ79tppvgPo1pHuD8oFuxnrV",
  "decoyKey3": "28DJa19U8T3vzGYdn5WSKYmuYqqh9MRqVZfmXuEUjCsmo7CQhQ16wLd9Ty1eJRJTYoa2eAh1ihuzXdM14UZnKtjn",
  "decoyKey4": "6645JDgQbgi8Xvp9wSmrxgxuBxv8HEy2KoMaa6bUFfFkDV576tWz1afP38axgk46WW3PwDNj8MF48ZwCQWEZnxoe",
  "decoyKey5": "3mDS4hj5WTBdD9zanbU2N33ArSkuTewUMF37ZXUkShWyimpQnnsnUmBqaHrbxtzxyXX57SsiBQ7heAThr8YNciWR",
  "decoyKey6": "EhgdPoJo9oBYpwwo1F6AW5DaFMwBcMm3sz5NingtAfnNeP8iPvHxeUJWSeKZjDyGDhV2HrZcy8aCcZne69neWMh",
  "decoyKey7": "4qGfCm4kRoCcpv9Ana8iktLPky8NBBKxwuTjpUGPVDmxPDD1Rp7bmSxToE3J8ey4eP1aZctZVf1CWvQDFTw5qqwd",
  "decoyKey8": "5Y8hy2LoQzstTjWvi1FTFsm9hGWcP42C3GzqAdKwUonpfkAyZ9k9pk8yq542xAFEK1q7hYrhqheXHadWMzzARE7Z",
  "decoyKey9": "58RRucbbRhkG5rPPUttHS5ZDgHE7rQMq5Y536vkiHP3JsA59nRpLFYnmgJH7bkJEdmE5YXnP9QwY29AN7PVkdFk1",
  "decoyKey10": "4Ub2b7yHN96T9y6dnzajJ1q7LGskEUxULimkp4ofRFjrQLAbV55WfJyHktuQdXDS5k75YBbpa5sLBNmodxWVztDQ",
  "decoyKey11": "481CstJ9QcgmPGGp8fLMMdue3rQxa1mTPT1U6kyGdHKoavfn82YPrDyPeuVNCEVYfmiPJDX9YN4SY2dY43W9BdDf",
  "decoyKey12": "3NT4LhHXBbiepQg7vYHqaaw39LbHUJ4jEhv2UQpJBU53xq3XCs5UEXJJeXRBwKUsdm9Mb9iZywjzhpoFKY5uewrs",
  "decoyKey13": "2eVynVZmgQDMPkbv2wg45WdD1bxL6ZhJaY3XbyyVrNDteTaTKHu7iLWozTp68C1y73oqxecfQo1rnBPXg5z6uhJk",
  "decoyKey14": "3mxRQYq2rvHjsfJZfGyqVHcN2b4apSvHDKrdNhzBgvgawo1RytaEGaPF1yXCgQtGzzZ113jahQpdYbovxtC7L6si",
  "decoyKey15": "5gNM1KWAa7Lfp42k9kCCc12uEVv6So4p6kre6MM9A5is1KZjC1mQdsQoEU8yZrh9iPQGdfYUspewVmUeQXXxTTfx",
  "decoyKey16": "3hYgbYkgQMJYXt6J9AX1qk8NRhY3L3ZPRscyxd8z1AdN3qjfLJ9mm1ugmx1LqF59RCKbLC6hzhezz5b2hoJypZuK",
  "decoyKey17": "62E3tRY5LrpdM3LWX2vFS38KRnHBqn7nDEhm8ihoLQAooBtELqpbV8z7JbwXmC4gJbT8p6dPV8gST3RrxSiuzb1W",
  "decoyKey18": "3yCaceSTYmxjX6hoH8p8yDvJVnDoe2YdbmNGhPmRGvadWuhhevBZqoo2WeVSEyjWuJPUDCDKczmr3kpf6yHFDQC1",
  "decoyKey19": "4fauG6s8gYeiSbsxUcpfcFwwZQ9qhdrQBVPeSpq4Ss36mdSZXTttVxh73hzFuu2u4zHg2xHwJb64TQYdnnEC959p",
  "decoyKey20": "2MVBHmahRA4ueQd6Ur7S9wbtTtjNutbkTYKv7mmeiwde9UbNjRCT2mtwGUCFLHBdWi6f7qsg4CG3YuDFBSM76vdr",
  "decoyKey21": "ETDiAoqrKeQhNTSYd26VsL2MtZFBX3TD7asusjJzUDryGarRPQ9K4xsv7rZtFsjRHvqWUYUTCY6Smd5ZX8UX2EF",
  "decoyKey22": "2o7i3FVx7sirFP3RPCT4cJJXtswW3HgfVZgBZhsqTKNKvznFfpBWhZMZjmCA4HmG2wLYVmBuFbf6wq3ZMkitCTUH",
  "decoyKey23": "5XkPxqNBZCDegdZecxU5gVbggmBcUAQBUH61qdbjfjc8bYGbKakwrXgEfVMJ4Yqp6nzYL2aU5AMYKaMRZFAuC2Rv",
  "decoyKey24": "2QA87juickAaXys9rwNzDuU519shTQ5eZWxeQNM4fEGMhqbFBQf8udoWx86r6zYAUvXuGefEkzeq4uchqsZDWArH",
  "decoyKey25": "37sLzh7ymUVQhxH8pL7vedJcPyNPvywVf6yoFSTbLfK1cs4P5Zwy5QA4Vyb8afXqmzJuhT1yN7RSebUcYNGytFaA",
  "decoyKey26": "5Y1Gwk8Sme42AoYanPbLCdTcSsDkdz6HVUWAkbPJfFgKA1beESJXyyDkSZL5TmjfjozsYFL94jxRy7vjs6FtTUQD",
  "decoyKey27": "3WX7rDmdXmg9hGa9fewjJPmWxnBmdFVjNPB34DrqtERYpzguFDzaTEvdCtFCnXYY9p5eUNw6gDPA6iYFcGVe3yyH",
  "decoyKey28": "4EXjx4iHy248hVJtWrTZ6cj2vu9AjD2uQgDM2Lz6QWbR8nDXJakUFe9Tv4iBfABSbHxfgeVMuiBKdvcpYfXNT7XS"
};
// DECOY_KEYS_END
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