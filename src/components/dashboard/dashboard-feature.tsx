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
    "4wXiBBj2WZGQHkTp5Aq16YgB5TWjJtZgMWftb9KvgiidwRDfqMihxnZy6HkPvQicZrE7MBvTDYJhoTUETHTQ1j1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwUDynLAhpNTui3uW8X2ZMKe4VkEGYbJQRJ4tQ1cz9c2HuBzoFnDXauiho8WdjdYdM9v8eZHejvJbJoS46KceTL",
  "key1": "4LSKEs3E1DcJ4nDP5EVnWvRHkrYqv4pxShCkqGGHWrJ1iuUKML7CecqXfJLYufdkCsighr5rJw9MA2JN1VW9E7zm",
  "key2": "3GJ7D61QLQKR4cKpmwV88BJy2jUhKEvCUyAaybsFxqay838HqEHeGapZU42PvJVH5WpoT41ZuRx3SkGYi4Tak8YL",
  "key3": "4ncrM8Ej4bvT8rvk8vfkJ3nAG984oroJUt8fny2eawpC4db9f4Ws4fapAQutxPpvRSrNRwSWAJYXNU5yqmRdDMJJ",
  "key4": "2KNH6TKJAYf62XnKu75ggqFJ7YbLZ2eBx9qDJSPJqMd5ctzqjNspgMYHvd4qoj62Va2UYEcA6yHJDiwftmLjm81b",
  "key5": "5V9nyNf198z2CThSAMcY8JmWRX17RewkRhpzgovaFRM8Ty54X9V2Ho4WB947cVcG1tqBCKsG9mvRsLmn3yv4ZuRJ",
  "key6": "37zJ67b7W95dDzggGhNftVto4U22ARPqMn9uEhhAUuJeDt7minaZnYsCnhydchEmFDShV7ViPgscSJHJHUkuFUM5",
  "key7": "P2sxCu6sGMX7FV8pz1JWsmYBDNoEqvGGo1eufTNewkinur49iZHvq7f8XrWe1Hx6JF1QCTkoEDVnu277NX1wJra",
  "key8": "2b9Wsn1BPYJr4stfNGPHqVnQhDS1kyk2i9w26SZ1BQ9xoeANMvoAknmmsnagPARuJtZUC1mMhWCJSMFtgzRv1Jwa",
  "key9": "4mddz3WStUzhdaDgtv8rqBc45gdaadFfcB8YonePXYvMuZRaBmeruAgxu43GoDpxwpsVarfpR245TQX4pbuLonMa",
  "key10": "3yszW3MvGYLB2PZs37qsBDp8iUsbL9c7sN3bMqG4YVYqgZJ6eTLZN9FPQF9doT4AdosidGSf6CdjrpkiCowoWDYW",
  "key11": "25qTbcwrcrLKHimUeVBCwhy6Me3x2U152CFYR3bTcGk4xunzuSFmB5tBgM47nXeWcPsD55PfoEXfxYJTLErBQDvb",
  "key12": "3r5RXPswdVcnVhRnpSSHvkFvWfsEWaYoNcevZGVGGRCdyYRgt7KFncqqQ2ZjjQPVYC1xhPuoYGX1pXUm6p38m4Nc",
  "key13": "57a3ZSFredFhLZ2t9CYSMSwvud2zA2mq3fdrFCum6zGLeDugD3Mzu7zek3m7T6rPYFzpC5pLWwqrVRbtmQLN78UV",
  "key14": "5Hq97rCthAAzAm1zkvxY7zDkRiYPHBmarUZXcaLqHk5MVaTwQeWUtTozgMfbRDGKLdtDy2SSAmgiEVVDwrkPhnPJ",
  "key15": "1qpRsLdYreFZBir6SkbVaNMfWT5fBDGneh1EPtZZkVv4kDvCnCYkRtdhApwzL7kQJzVnKtCNdstcy34gTaDQoiY",
  "key16": "3EeofsVg9sN5G4D1UmTeR6d4wvWfikYLGGkmFhTWrSAeNE4hJAD31Mk5RJeRggEECVo8aURUt9cmb9zs3XPS3Eru",
  "key17": "2aviMBy3oo9darh66qcZSH2qDHPkiSZ33pYae5wgZkn5snNHWRrtnb87993ZsXmYJf4rzg5REDNvC2gzZBRpAtou",
  "key18": "5K6quJpRkLNTuQ9F3A9QeWsL2LKcLMKWokJ3FRGEo98MMNjfWiFBvbxUco2DSDzGXNVrVAjktf3ysweNxQa3iTYh",
  "key19": "NLwu85Rmj1MQydccYAkrtiXuU2eyyBiN8DKdMurk9tgLt1oiV1bNMYw6jk1uMcJRRvLnqRkKw5KakoW1RWmyRWx",
  "key20": "nBtWXquSUe7Q1hbrhTXqmKa9xuyTnWpySEf2TgjTp5L2C7E714eU6WqbZCK8nNP1rcJuSYx4W87TEVg5kSuMMkP",
  "key21": "pB7houVhGMgU5mwKPyYyMMmWFaStGLjTNKUWK7u2qNSrg9iZ3sY7axBihvhR687iQK3pBee7jC3Bf5pVgcRh565",
  "key22": "qQrEyduDcGAoXh9ytKDwVxFYKdgvPPHTfaaYAu33k3TWrzVi2Fjwjku3nsf3AUBkzXt49Y2QUidizs7fuToPqua",
  "key23": "4HEYf63oqczrUCJJzzyhUNB8SRxynWJ2UPzz4rotG7dcVxgpM2ZDjRHHzuUz5J1LmMX1Uft6USq5YDS6j4USktr9",
  "key24": "4g8WH9sh1RNkY7K3WfBHuERemVzJpiUKCaf1a828JGB41bzDCJZeoJEA9mKT9zT1PDAnaSWFRbNt5Mri9KsUDXpr",
  "key25": "4UxQVzfU2pxUKjuA9fRBSLBiuAxAX1zfQYVGRcpzFiA12fimcVMcmBgfdAjrTqD1oRbJmGqpfkNmUi4VuHphowpm",
  "key26": "2RoAqu64xzowx4y378994Tqq8epQuhHXmCeGyqHjgNE2GiUowfoLUTp2VofqL14WaYkS9KanvE28oaBaWqvRaYtf",
  "key27": "2pBaAs9CQ1kNkvpUU1QnspHsEdJUGfzNZqYu1LmokXL9cuKrytbg8tQDoWLp83i4bRgjUUwpZrCLksrXqS9SNnm",
  "key28": "Hy2JBFyQJzQvRnSApNthS87ZLksZVGk4BW9djBmx8BWQziSXngL6we4LpKx6CJnphryLExjNUb4sLvVxX8aGL7X",
  "key29": "4bmMgGUmmXEB5trHZn6QhKqWwN3Qrv5AGdAnvyzGv76xSQGyFtwuUnRdqAS5VqXLwEZsJjUhXdboX8U96f6fT4RS",
  "key30": "3NjVY6WZbxoEpdabeSAm17FskJhQZkBaKZKjgMkL77Wiansuwkib2msPz9uMMd7oE6EW4AHqB8exujnhi8xzfo9V",
  "key31": "53iuj5Y69mP4rPatuFTvS1J5ZZB4ccJaoXT92vjW5hcVRaHTHrckwdzyCceTiWLUFkTPHBeaRqZctqeSVw74F69y",
  "key32": "4KqyFN53aNx1VG4NudM5NJkrXxa8cXh4EvGMfzY54SqWKgHP536HX3iCTWsXdcHYteYtwZxBotKzVnYVEmX5Pksq",
  "key33": "2z6Vrr7CDW9Dw1ySNmtxaKw8z1ECPGJi8cJXeS5NfTreamG6KgvPW4h8ZRy48dEN6UxNuYMzvUeAyPkN1a6Vpe2a",
  "key34": "2Yw1bjYrQPMbJ8SrB1wZxeP1MiCyPCRTrbJSPU9YJ8zGxFq2uRyhofXTzvPiXQpKbjd8ch93uCQE7D86rv6Z13Bh",
  "key35": "54qyF6Hjrv6nUnK89BdUzrqzuPPtgorBWxRrd6aKnqxg6he2PhDJCV9qtuYy2PXsVRLqeQx3yLJ6h7q6xZjJS3KG",
  "key36": "4K4ssZELrs982JkDvWSMxaEm9Rq6DDLbivmhHcUzrTvcnNooYTLAG5MYCu14r5VPHnTA9FayMNidZijQMiMpE18q",
  "key37": "mqn5oc1SU7Ct2Dte3vuF6RuMc74ZVK5G9jV6mm1v6AEwsMBmPtveXRBoCySqm9gDRhS3o63vSxc5vhrD26pKvrn",
  "key38": "329ZZ4PdLxrEWPKjeQQPFnAemnBqJSFYJHvZZcm9WJLMHGNzUSAyS643X1vFppCgAm4Fw73RxND9FguzK6Ai31y9",
  "key39": "2uuA7ERzNZBMhsx4DU1r8MJW6Emg8RxAig73oKAXhe8kpXwr2vW7zqvXJGezuJdoYirHWNRU7u7V3sTCA6f4zVth",
  "key40": "4e9fZ4rojNsM7VHsVcyJfq7etZaqB7EmGM58ARB9fK9LeQ5cM3tjfSLN1J2nU6PP8ryz9ZW1LL7u557sLb6nic3i",
  "key41": "52YKBpcfK4wjo4r4kAQ75qyksEfuJmPx3gcP8Lt393ojzi2d2HZKMbbVCDVaji2DVT57erzDCthZyksghW9GumFc",
  "key42": "5UMQ6Jscy3js3RZK8yU1B86xCWJ5yeSEgv8mzCtWNkUkALQ3xoiLqC4tF4baAE9bvrhqGPHJVuJ3iW7PtuGfHoKD",
  "key43": "5rkNcvZDRkfDPwXpZHZd9vZC5cY81t3WnV8yKf2CLeFxoXyCRFJQ38QrbZgjvNapmbPRn2yw3gZbd6UV2YvPSZuE",
  "key44": "4Lmsb27S3HpyGFD4Nhycc5QTYksKMF7P9HZdRGL74ovCs13SReWqWvdcSizG5ayWRwf7bQU5igQYxf74LuZESrKo",
  "key45": "25aAFNb6iz8vTe1gLM1g8RPtE66dS8wRyimZ24xn3H26YcDJwZMXUoMvfetR5hxhbrR6bXs8AUyA5Q6Vk8S8x7p2",
  "key46": "4yA6RU6E1QG3V5DnY6UBxGqaeg2UECHAsFAVdhTu1PmjmxQMpeMd8Fq7YmKJsbij9AZZYQmANq7mocBRZBS3Jppz",
  "key47": "4e22Hm2keF5YPZxzzTXyBD7geowyHpHNvk5ipaBP14HabTGidjRYrJWUWnfDP1rXGbQYPL9RXcMExGDreikhc789",
  "key48": "33xTa1Jhm3e8wBbF7vkS5D9C42yKELS7tJJEtj3teQvjTQ4yG9HomyPjaX7XDTkYkTn27naGUo6i1ar9PsjwmpR4"
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
