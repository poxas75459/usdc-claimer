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
    "BW7PUUidASDE916fr8P2WMwNEKQXiTbRBwjZ9PLptMjVA3xFG866U33RFsd7zs5BEAmRjEuSeJEyrL2uxFUNndx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CiTTPCRfRVQtVcfuCUoomWrSAfhbdQAqq71uRLayCAZcGq3SrHDuPZmFL4d6Nw2V2zXkC9NqhCkPqo68EgFAkk",
  "key1": "bRv559xsH2NsbtDoh9uVYZhHoqTJsVpyQVjy4ibqFJw1mAPCcyirixqeDgVFhzdYe1Jrzu1h2ygkkEco15M1QLv",
  "key2": "314arLNjurQE8AUnkqyBKYsP8UHGd1cLT6QnHkFBSoGx1JmXSSgN8tmKWVYieRKt73og5Rj54L46AHoX8j89oEJz",
  "key3": "3BaA9nJRF6sT8x8khkCRhvsRpGTk91NNiLZaPgV22xViMs3ez53dvsEfkX7w4nmZ3sLgCjVmx2mUFC5nKoX2TMvx",
  "key4": "48EqcAspK5bfwJfrAt6XLRkGwSnYSw5cNYBMf4F5Jc5v292MPQpzHj4QmuihaPu6gZyyHv4C7eyEWhgHN6Rk81AZ",
  "key5": "2Fvv8PdLLd6X6JwsHGwr1F2etYn5F1xJMKpte9QnGi8bwPTPvXRk41yKGuqA5AHegepLJxaA6oU5FWoFqKoV5FTZ",
  "key6": "3NMqjD6ZpricP4odkxUfxjnX1fSpm66eYqca2NmJe7jc2JDbWESbANw1gMuchbyWgRWNrMexDgofzvy5kqxz6va7",
  "key7": "4pqM5QqRqKBgRuWYn9LeipiJ6mWnjRCbJEuUkYgrK63Lopw8GyCkE8dAu8eGnbvJzfHU8MYPfSMHzCEYoo8vxofT",
  "key8": "3ZTLPMPhH5XbKf6R6AhzbNMRLWERMQfJTTPvLCygmQFX9ktn829FWuddzEBqpBNggi6ZWcyr6kfiHQegTdubbXCd",
  "key9": "77xXpZSj4KyfDfxo9bqV7MdMC4Ux3YLUBQ3y6mq8PJpFdHQPprRdFg1eTNK3D6Cozu28jnum2gRy15L1piwwRR1",
  "key10": "5AnSXUqDHazhSeHTb4n1gse2Fw6SCfbr7G8ibZJp2N9Ducm1ev8ruyCbsfwwZTkt9DcAE6uS3cSQbSK443rBATpd",
  "key11": "hk5j49hSu1Z7fbNw2fTwkRwmBxmFHBMMFsddjL1EKGq2FmXjsncvHmExA5ouD39TRi8rALfwTJCmNpo4vbeQoNZ",
  "key12": "42stiZXHiiESfE8H8EoUf3pQjmbtMWTi1bzj7McRaG37sw2azZu7FHU2EvaTPkejBpWRCkfJWCXcTUo6KdXcFRoz",
  "key13": "yfKVNsgQpFcs5ntg52bgjBZFBNcHuPdn6DyQW33WGj2uvGewQB5n7QmACgiSz5RtUS74FxyFUqEnAvg5aA99EVz",
  "key14": "3H6BdCi9CqNXCRMjoSRv353dUznms8i9jUK5rM9a6DMtKGZUKFJMojU1Xv6ezqQaDiws4qFDTYuVkpVGGpTkjyQ",
  "key15": "355HQsmuPsGYaEPPEEZ92zqWmkCpr84pw6mzsksogY3KwJbH557YfV5hQAmhUxU7iSPeXvVGaj7h37wzWVNK7L4T",
  "key16": "3faFuz9TH3bYQnofzS4Pnw4PsNWxzfGPqVHPUnJteLGALXmirVNdVUrHua4n1LpAzfE3Khme25wAr9aQKHmcZhZf",
  "key17": "2orDEfUNQNazorhHj6X2sDAvyNVV5xDVKX76E1nvi2eFhfkgQBJvxbnAPV93d4r67B3jWjEP3hoJtpSBqgmgCYjG",
  "key18": "2kLw9wcX7BNNMMWmNWREdbGwbNcePhD92frai8mkE6aNVDdPqsyBCvwgFuk5Qf22Sm9PJgNqmXuSoTkJwp5PvSzK",
  "key19": "4hp6qiR6ewhzBUQwCpK4gcLGP419v6iD5FV5X7tEkuKrVZ4zC8VuRpR53pF8VDcJifyZLC3vB4X48Jjxccs29XaQ",
  "key20": "376v5XRA88yhHxEtweuopwrnSTUGfyChWjfAyh41UaYN2c2aqfWuvtX51KvMKnWuQXdv5fKn4ko3WdZZCf8Nq6A1",
  "key21": "1qEoQeFRuycQwbCavdLXo723ZmUTJFpVfZjDVwUvk9dGXTucXEuVn4qbcwYnayVcW7fjeLJRcSexzJpij7XFtmh",
  "key22": "3KdsUC7KZkiptkrmH32ETVMNLYYbZdsahhBnAmpF1oZEp6QwY8vC7E7B48d1AgcGJRdvu7GNaxNqWb9ER43CjWUN",
  "key23": "3FhpaSipYavrVfcETupxHSyTcnk4rk5SmsQUcxbkyYwFPC6PntJ1CUKB7spGgt1WHfPDRS92gV4Dzr3tLtseSDLt",
  "key24": "6oQv51JJRin7mGVVeYNHWP18YRn4eh2xa2vudMBDRQhs9LE1YYrf4tZheQCXGFSwecMpkdQhzQDMiRcy4r9UZLf",
  "key25": "23aCigHJBuVjGQNc5ZW9QKR8bGBL2WvDv6QmBTRNkHnuJC7Fn8Y3Cqd7kuSNYLmZKUiKzC7w1LjLBuUqvfi9P5ex",
  "key26": "S7EffVaiajfK8Kz4emjhG3sW7qQbP7Di2iwMuh91w24XAKuofzaGMVxdA1jKp9onR6XtBhbXiQTXoZSMGGAJLey",
  "key27": "29P9VV5SvD1EpVjCh6fLn5YE9Y3BBgYx4vfzi2MtghS1iwboPm2w9TzJvR7QHmJsR7a37crjiWtLu5Q6HeFyWPvd",
  "key28": "2e8kQqkcWUU2u6sc1tAuY9zATjhjBqt5NqEAgBnv9113NTjVT8yh1TfBd2ZuMBjuUGkAcwMiFUxjbZkERTMXFoaK",
  "key29": "3pL9ChyznZCZmKpAx9GP6V4a1VpLUw9nMSdZwM5HCzuXrxVVMYAFAXdp4Mb5Xd5cS4Y8sLaqfVCvco7pk1122WC3",
  "key30": "2oGv9pU2bPCwk7JaoPiJUzrN8vHoJdqkDDdRfJprzmgfupLbH2cGwx32PUwaRnNNfCjotZsmS3B4cH5Z7apxrZ3X",
  "key31": "CcqbNSczcjcqZSegEKv29LC2ifh5aUrBiu3j2w2mTFyuZ1izHRHAoZmHrKyd23wGSmK1thTWF6rTyrj7n9RTqTo",
  "key32": "2FTF92CHnik76pm6TKYJ85pN2FmZazoPhV4C28umGmzttHZS8NR1W7gokTyETzeKmPk3XC4PmEw2s1d1yvCGm4z3",
  "key33": "4KHZprXTNjofVx2Z8uLxihyKzkzum6Ai6fCngVs1MQn2VsemZwHN3S8NGUxGpZDbWi8JkJiGPdsEmfjiFDJiNVRc",
  "key34": "392M7N5ErbN73CHUxoPkLAPoLasAPtkkmi2BGqzCCGS6AYXzx3XosdZd2VcLWnkmfhHu8RyNBFvvfo3tYaftotuM",
  "key35": "24hHPren3CxNSbXZ2oTRUBEgVQz1DWogMmAXg6rHKVHYru215pfkTnpFc4NPZz9GNk3VEuzbdeBQDhXi8BWMHUKd",
  "key36": "26dZxV3GTa1Up9WxwBUUNGq7DTkzB8usw1py4j5EhDy2Tc8rKBtgryJV7FBz78aMTBaDMe8fvPFw7VzkwfdukF5u",
  "key37": "r79Cn1vKrWQDAUpVavc4SNUs1umePhH6kseioA7vNZSZcxbkpKEHpMXYzCvi31UsPDMbkLPo4m54rgkFbEde9Zv",
  "key38": "4KKWqBCv1o8wnGnDYA2GKEvuYTmeQGgEF93JRSfFgcrR5KxeTvto2xkXHkUVBLKH8X8DxNizvR1bCeKHjaWdxbzG",
  "key39": "3UYJmaooSZzcEQCn5v5yHiGcHjJxKzQSFcxAkHRstcQUppKi3u75S298ChNSjfkmJDYJaBUidwBkMoxi2h4fyvMZ",
  "key40": "2kyvr7QMfxKoKzHHs4Te9a2AjsJSmAGhrcGmQjybmZTT9N4NZ2vEdCypRFgTnW2KgZ9xYFELCWL7RxKdhH2kPQwG",
  "key41": "MqbFbKa4qzCGMJoZuup6CXu4MCgvEyyMCs3iP7Y3PraTwnhWLxAGJ5NKamJiEeMrA231EwvCYct6wS6Xumw7rEC"
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
