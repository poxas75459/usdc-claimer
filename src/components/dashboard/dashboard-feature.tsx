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
    "4NdcDLum1HU4TX1jhFaNAqui4QAou1RRw49Szi4FnZEvVCfyHA4TE8bMUvJmR3yQvsLkzfvarNLyqZ5s1umiNj4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPzWfDmUp1RzJBYK4oTx8EKyZ7xEJ8CeEgPPa87e72Yv9CD9kMZth7HyXNrdfx6FExFqVXAx2iqGyh5Bn5dUwAi",
  "key1": "425pvbYHVKpEY6719xZHmQXuGZSTdV6go2peWbYessQJwnmZxWunYpyVKYY2JKEeXyuDbjBWYoNTfSCbjaR4xnEP",
  "key2": "3WJhpfEy8rB4g8YieddMz4Cy5kaju9Q7DEyk3daheHE9a4VCqc914PTxbRG6dh785f1ThAicLtSPKobnY6eagBQc",
  "key3": "2uSzh9tuC6CdiMC3i6fVp8EdqDW9SJwreThxZqvit1wysVXGg1wY5dSfunCBAkaqA1RG1RPwYesit9TEfRQzMG3o",
  "key4": "G2BD5gxtSAUNBTFhz2rFXg6eGxPPwEMKnwnY7MYQYeeALahyLAm4MWHGBU8XGgj7PrBGFTPSbBYmfv74YF2kv5M",
  "key5": "2utj3Z1rZ1z65HQcjgJAXgcyJgHwK2VbYL48Gy3F6hKrArUxN5hD7zUc6nuPCYWk631NwPgPRgiRfroqgf2GRcaL",
  "key6": "66eXSNQmnRUXdswdT9NgHbyhxe3bPJZE3MMNFUWoKNGHmAqmg2XMiAYPeWCZXWPsTLcxPQ8NhjEV8U7x1ydfsi2d",
  "key7": "62d9KA8Q3MBw2Mx4VQGd9maQWvX6VS1wtXDwFfwuHSiPdpwunDLAoRndVpuzz9EQmgLPXUkvX9kLFEY6TJjkGjTr",
  "key8": "5UzN6ics91HCgaCMUMWCFfMrJYxFBYbhSY2BzXCm2Z85WD6WSUF9At5b3rwfPfWFHxuXPALbDLKZFr95Dgpev3y8",
  "key9": "4oAPUC2Vdi3JwxxeRV6fdNesPRnwknatAE2mhZ3gveo8EuQY4skuC54X32GNd5Qff3CThPFZkUfoQzt2iW2FytFu",
  "key10": "3HP76iBSspzn2ZauVjfbo2tgP4dRioNb4pTkH5zenWcEjTBytxJALjUzTDi55mLTs7fa5J6m5E1wXpCtuoAPbwEc",
  "key11": "4ySKzBiVZUK51iitNFbZ3qvDCT6z6VR3GkwnRCrdJ5yP2VmifsvMUZhTk3aqo95Fe8svX9NfkTYLb2g48umLc4TQ",
  "key12": "7UhwroKAcxXZ9FgtK9LFzbZv2h327uLrA4be6y4QpRyn1JQzT71oYQakp8oGazc3EufLaK4NX3TAsavRZjoWbGD",
  "key13": "j9mnR2zL1HBAurN1y56MkypbXJrPnZhjUT9SLm9YAaaBXD17acS314PbEkZ5TivhDR63q2srq7ZmeFueMGQmp8e",
  "key14": "vApN8vBDBzXT5qy3mhUyHfPub2WYSLehhoQJ8W7ZtBL9wH3D4he7pTVDYJyKhJWQAeZ2dks8NDtobeA73AJX21m",
  "key15": "4JJajMQxYyupWsaecNKSxXLscJzgq9ni9pkV5UCct8bDphcDjiHHrWQpegqyJibMZ4fmsEksHWQna8RRXm83KKEZ",
  "key16": "3DnNbmCzpAdE4bcU4cAD1mUvAbDynu58oHuNHYNxGUtQaT5i7swq9Q1NUazVK9o8vzXe7h7WgoZexBEfMmp1HGgw",
  "key17": "2kxjNkqszqgod5wBbvgmDVXcbTdHm7LLUH7joSDz63J5sG7wmK3hAVyisbfgunStzc52HqrxJXQATiuNhtysAdRe",
  "key18": "3VPZaYjNJmKMUdC6aToebFe1HSygdr76gu5jLKHpsipCuBdFSF1BY4HFCDjYqy5jvXkqMk3BMjfSz7py6Sv9eQgq",
  "key19": "5j3XpcmzcihJZ39w63LygRNHZ1sipJFoujSTWjfH3hBSSw5SVBSLNektzXPATXn5Cgy5ij4DhHfLsPUUFuByXPCM",
  "key20": "3J3cMX5qXBXPWhF8sJqxeLTb8NiQfbHP1vUSXWGdSgxwXZq8qL3ZDZPKCnkszDAn9sKEPhEKtDFdfob7ixu6Zt52",
  "key21": "4pFSz7BnYyaMZUwHYoSyqDJcGeXwWFFJYWkEe26Fp8YbqtbAqzVKz4QH4hvWFsCL1KVXtvHNc6qVjAKKJMVxDe8y",
  "key22": "3857vezNK3MAo2fHT23W2NK5P351MeNRzJNLaYfi68MtVkmpwKJJCA6ggpeMoRUGUmec6bSYrSayLUTP8QYYENyT",
  "key23": "5bDxscwaXsnG1Z9CVuVeY2JqdxSWf1KuHwUkynE1xLiQ1no3yNhKnHFfS48TabixSXFwum1EExRD6TgZfxWFs1QN",
  "key24": "2D2HsrcbXEnSVHuNpm6iLSr62vLh5qnxPzzA2Pee6XKiWmWvWFbS655EAdhKvruwbcjy75VbZRF6gT2wPoCt6zay",
  "key25": "3RESJJMxd2CjHUn7BTTNZcnecz4JMu6mMJ5TX1EHbA2srWqTepzJfguHUh8R37CSUJCa9ExcsyxFswktt2FQm76m",
  "key26": "SfX1P3bYENeynqrBtPiocFg6QPQF1dkG1E3oof6ZaSULEZ2wrHgQg4KaJyJEjfhqLCVLVVFRxXkdTzXN2vyanNY",
  "key27": "5cYvuyhGm9EpsyqiPB2ApYTPU3bCSEUJ6qEkDiHaVXXTVnu71WpTqASgXs2k2V3Jhwvu7LvZ1RdfMuhwZofbJtpV",
  "key28": "3D2TtKz3YBiaLGcjzH9KJU7TGpFKzFj22fVJdsajNbxDN7kZ2fDTTyvXitooGRaT7LAvAvYNX9HUHT1DiKruNKGF",
  "key29": "3KzLEmU52gix2qaCUNBqhjUFD71J4aVbQ4r8oJkq8fZSuYZr3Ayw9uKiH6GYPs7uebHEcsXxcNN1pehQaXAcUi8t",
  "key30": "3SE9F8m17v4DhSSJCyomCurra4JTMsYZtzbogj4cJKNDadNXLSrT4iarTXk7h2ZTjM7e7rb8DFkUUKS5YzgtUseL",
  "key31": "46KixtYxvwugxZfZRqWeemiShJ1dSDJ6wAa2iqcxZf64cpuJBP2m52CBGYhAADrh1qtiN8r9bcS9rjWvH8r3LCfe",
  "key32": "5oUJ2R22qEQ9kBJEynhDVTge3HYcUtkP6v9zkmqp7i6vufZqR3qHVtLGie2wHwnuGtLKGLTJqoETr2pTEAsnsAUE",
  "key33": "43SvTWnvwWL5QFoiWHSRxeXF1DUjSPymRgFk5MEdiix7YD8TrBg8EzNAexNU4d2FuAYEq6t1dSaHS9vpsuFfp8VZ",
  "key34": "58xMcmMpgoqFCuzpu2WTqR9ZpGGDE23RvNcsUaxX9S8hdrHRkY8FcaqrckyAPwGk4eJ3Gax7nntLCdKczBfDhxMh",
  "key35": "5eECWD4jTAAN9MunsKS2p6EFrUQf3g3ZiSZESewX7jgjs9GRi45Aj6yRHWxAFpsd73DMMQa6AsMQPMqVuCUvaDXs",
  "key36": "Z7ZMixVZVusxYJqRL3ASpbja3BVcBPoFCi7n8Po4kSb6JprHuh9BA1ChnVwKBrVShdPxU8bRPzn5xXMPhoCC1GA",
  "key37": "39szpYi6HXnkwF48qVkfaaisVx5m88Uqb6oYbBQpR6sYM4DhHkn5k8Sd1PS4guiwoBwUuqLBzQx28BxCnVzmEXYh",
  "key38": "666nNL4FESUz8gmGQ5Qe4awCCYA87WY3BwDd7fGeN9AW3m9rFk7zdPKnPNyZLGkQWrMVua7pzzRY8ZXYyVsHey8J",
  "key39": "4s5A2puu6k52Peb9d5vbZp8ZGKBox5kx7gthcT3xigyvk6VEW6bSXxxJaSghboEVmjUsbBap5aQjkBc36eiVWGDD",
  "key40": "2yXEJYqq74UiyPBkJq99hR1KfApbjYxjEKi13Kr8mzCRbgpVoKuR2m94fesh9VveLHChJciWRjnNZwAAVFUf9PkT",
  "key41": "3vdbVT51KUB9MXEnP29RQ9MGd1cwEQdAUDqupuhQsDXHW8gjQbT5qTom3rhjKJ63Du6RqPk8TgTvCj4i2rbYdEB7",
  "key42": "475Y9D1jLLckBqx6VG8PvQGyWB2QYexCStk586hz9ttSAZCcE3WzGYooZkcbhWoGJoSJunkS7KwUvzkBr41cycoX",
  "key43": "3WvZnYiu9yqYT69Lus1W7tPruPG4gvFG3GCffwM97jggbFYbeunQ4AR2vjSM8WY3d2EisVQtvvGEV6STSxEjydwo",
  "key44": "qLNZ8dBw3i4G3oScUN2yfSpQHTFY9QWESJv6Mh5mjHdiTmjuYZUP3X2DoPeNXAgbmofatqjpMFkHHjAzfw9tqRU",
  "key45": "DThZks2bKMGiwsXUBY3pWPvmDE4YCKccf7K5rs7be9DMuRPinCdVhpku33wWpj1ZXK2vp2ZqR5aKuBiGeFCEUfu"
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
