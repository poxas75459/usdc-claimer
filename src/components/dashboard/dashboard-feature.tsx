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
    "4R2KELNqz6EswcXc73PfyvRxETXJ5DiWu6boKK8ckBjMzvyysyQDHsGteNRdELNqKy6YzmraxQQuCAwqqo3tmmcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8SYXGQkrLgJNFv4o7xm8A7mQ7bppGucqSsF6aYbzeLdEBRdXWpa8P9iV1fJ1WFc45PwEN6thg94egATJQjrAhPc",
  "key1": "4qmKBjv9AmzUBXxvNx6UZ9XXTLRxtSfRV6A66G6oUiTcVWren43dYCPJ9PzgmDxeUq3U48GZmj2oHoGWWVjdUEU8",
  "key2": "vGUCTymExoYy6jaJ2Heys7qBhtM3KdGwmN8vctYe6dF3f9oXFW8vZbKdZPMJvJ1DvR7sQHMFK35kGfxph6njkxK",
  "key3": "5L1dsPjUcf8w733e2URiUF7z6jptJBc3ZnEzUzPEKhrhQAtwuenNc54KfDfLKWs6TBgXXPXYMToLvFmF2Q5BVcvc",
  "key4": "2omsQQgEJxmoq3DGd3iVbjr1k4Nrrjj3xKpJGrCCWcHAJJm3tbmLaCq4DZ7JWfLiEHGsmUVRDfnGUAxMsEKUnx54",
  "key5": "3oXgCgnHTwVAxp6XQiePFJx7y9ZCmdDbejgWXeyPWk2UYr1iP77JKVBDZVY6fBXjsnz8edR9DZtTvubAG3g9nzMF",
  "key6": "4Fd4QqcDj6wMaR1Y9uDN4Pokjvex9vD7AMv411JHhR3G3ijPF5zHGmpkSBwJBetGyUy2gzR9GbaFF9XG3cyDc5MN",
  "key7": "3Qa2GFQe63LtBv6P99PJJDrFUyv8SXyjx9muJZubNveXccKbkRRiawmZV2WgGX64AEqRK6YkzgCgprE7urEUd3K7",
  "key8": "2MnPJVcutAMVPo5ZTyei11yeKmrsJGd5F8NGxji5xs33NEx7X9chveEcX8wsoFPaGNU9sBkQFcTDTfbsi5ZtfTu7",
  "key9": "26AwF2s9okVtB4yWTtDeMgKEVetRovbmBy29odHGuPpokemh7LCaXtej1t4AjVKAPqJ3DpUNigPM3pRe1VYRk6bS",
  "key10": "4p4PtZBP6rdTcPLUSrsKP3xnjuvC1fSH34hZqMjbFhG2ZPFxLSMC9PTwd4ui7optZ9GRyoeaQSvL3UFWWyKVPQMn",
  "key11": "2Vqho5AHvr8YFmDUuBM7zMdsLgxCsroeVsHgq2kgGBUFXu84gkDoDVAT7hgmX14RT7tPhzyPhTBVuff2E9cxPBev",
  "key12": "2Xjo2BjGpfgN9xWiBXUQYWBTuLXNy9q5nQUcXAXP4xgyEym7hpqJVUuFgVTfBWh2Qu4bbQd8fgt8k9akwi4wRw5z",
  "key13": "26kZUzb7X4pjjpXfC8tEECv1xNNiwFE3iTxuqJdrVf9Nzbm55nsjNUSxutvkeSHzWo3hrUsiS7SLbHxcRGGRE5bc",
  "key14": "4R9eeg7n6kjc2741uBzXFybjHVbtisPu6AS57Nwm24aqan3VMVGL9AyPdhBj6xDu5iQ31KCFvHUD8eSp45DrAfkF",
  "key15": "4Mdv31iYKTzJ63rety3DW15qAfFaG7Kr32aHcWQyxtZ6iXFEdmVQywDmFdbngFr5uFnLNFznv8UfPwQbRGAX8RYs",
  "key16": "5Z8WwHonBnPkXZTRtgoK7iQEt5YPhscNgEXqXxkeiGpD2GqghrWGecTSBeaeXwrEgRuzGpN5dFw3gm2rvwK5Vk1f",
  "key17": "2r5ErQvDTNarQyUdowe6vBzEb1cdoS2u8kYXUgWNKomiWWsvog8n5RytV79Mgd1oLPt8WTBj9YhoK5C7yDiw5LgD",
  "key18": "5ksF8GAVU8j6QTf3YYX8VSHecxHdMHDnpLmmFdLXVt9iCZbBLpcL7u7AtvGSVkdBK9ND4pQ6iV586QcadzbGtye8",
  "key19": "5MS4GHfZiECXx4niwajJCNjkeuEPhZZ4VGUvYPhXqFiWHafdWvJYiDfek4nHbxtGSDSzWm31bW8QGxR9une3fsbR",
  "key20": "35oqUPuDNuzqVHoaUPXNTkqZfCV1p6ZV7xbEN3PcfxXXhU3utwt7xLPXiAhaNhRCk6TFGGqZvZ89iwDszbUt64nC",
  "key21": "3sMCya9w2jRy81Y88VH5yaQX6LPmym42Wpy1sUSDCuP7xA3AvaWUgWBSP9n6PBGaFJFZEuBrqMRGmkFd6wTha7t8",
  "key22": "24wUvw3znSxBYoV3wAxwBtreno64cryyYxzeBG82jBKtMccYjmDVvycKbteVbvWLxWH2G7ASveQfUNv9roSAgNac",
  "key23": "54SiaNMR2vy4M1rAJaSjfxBmeNYwV2RD42Mkuioe3Uytxo7D8ssY6XnN4JknJnuWxUw6CoZAf6zYtfLgUMLMWbhv",
  "key24": "bJRu311jEcWUEKVQ3ZKbyZ5uXVzXemNxiJMVf1Xz9Qr1MFoo3jnZb37erw9GdqG6Sg1vHRzzjAmdjR5w2qFaS4j",
  "key25": "3DjRc28bGKYKkdTtVqWugFL2tsgxWgMBdhnfXtxPmYXCtkyPoRhpLFg6ttXccnsTk3cKSsxMaPuG7SycWhoQA3MH",
  "key26": "2nJhnaoT7LUFGe2gWo1byxYVxSN84Xr5yEpvtqAJfSg2xirVUL82biWoSACi6U7gmKW3je4BwCxmbvkhviAqtxpN",
  "key27": "5e6UMJWtAAcXDBYTSVDWtpKYd2T8xk2LYvqfLia5Q7E5DKwyk2LtoSG37ESfFbsMtU5o9GJLvv3zPkNF3Hnq1vXh",
  "key28": "2z8HjnDMJzyuz7EqdtrhnTQ5BdwP1UJBatPVrBgP6iwaZ4zUocH2otEjiXEYB2kdJ75B8kindL8UnLqEmM4fLpAN",
  "key29": "911exCw1dbisq1HDqEkAEFFAQV1SG1RG6eSkXkuG4NNWiUXBiWmW2MYkcXrfcRaUQNWPtQH4NDJZsDhxLgA1Wm2",
  "key30": "5RpFcizZBk8rR4HNSnLhk8U5cbBRYxCATXS2BRvkndhpq5XhCcmCK4T6TRm55JDLELbVqQcozvafsPEcWr41zgdA"
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
