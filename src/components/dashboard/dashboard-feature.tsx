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
    "272Gj1PVeAb9FbxxZ5rPnUeQiUhuN4XocwH3J5Nc6kqP9etsMaUF37Qff2frN96WvLSnAKLkyMwYbGjzKkM9xsni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TheQSmzMpxezSgyFgLYY7speSYBtKQMuhEED55D4aXgWVM8ZrKQGmuVjHFAkfdiDU6Ta7QftnQBxocLX9aek5fH",
  "key1": "5Lgq8CvuBU2sBA2tr7gkFTQc71kDxvNAdSiKwmHB3Ubvf8TMrirbgBFSdWhLvHbA5qGKubFwLJiCPxffCNZLTQp6",
  "key2": "254zBSf2XGjXoyitBSrtK7DsgeBjFXfPNkBWyTFfuKerB5wNUHXTybwhhn1S1VaGGsR6uRZriSSGn2ytCmXBBLY7",
  "key3": "462b2eveN5cGvZnmEW7BGUgmWUXYFgszUtqnVVADqdnVjbyXhUiQqVLsp9J7Jot9ynTP9SMMJ1yYiMWdx1mVmLKo",
  "key4": "5DJjo5SsLJRWfzYBKAS6ejwq5g3q3fDjpEHQ9ftgj7qSdkE4CeNemf552i8GzW4ACZLhTrPrK9BYjjJjGMQybcL3",
  "key5": "2M5U3CdHjJJaudqmKZ6UDPD6Tdz3f5hC1KX3jqmXauPQ1rboB7BZqDi4jdwP933u1sFRjUPzyvqzGbUU2amy2FgU",
  "key6": "53NQ5h9K1QnamyvqMYsWUjc9mL41EsG3PC73Tzr9Qxg23oXqeUa8Ji8B79EisjqVU8vS5LsnrHKhXefVKEC8WEnM",
  "key7": "2EB7EwtdanEnbafxs6mNzXB1XuXy5eExZuDnPz8Q6gwGjPac9Zba4CfDdh16DfYtPw2Zg3qbm2ms77K5XjC6huWB",
  "key8": "ucR1KCi2JGaAK1Fz5tEHkkeTgQM6TZuLTcbfb8VAcMuWLuQLkjgfzPJbaTzKhXX9b4mesEsr2FnZrLkJns4LU1L",
  "key9": "5TRh5HSdHKxBb6kpAuYxzVf8drpPZE8VEsbWmt8PJ7wT46HYpKectjmVsUfwZ7nmgearMpdX3nNeU3bSpYVL7efJ",
  "key10": "7BnnZ2rVd7rE4YzRuHMjH1nn4gfG3CAA7JUBqt3uZwhcg2qsVyWRvN1waV2vQ8bmABEoMpy8SLaeZwvBm3LiYdV",
  "key11": "67iBqp6Sa41aVf5wqSsFR3eFbyCQLC7BRuPE3oWejdaViHzGdMvwuFM9s4apoHgbg55yA7bXc516b5QGtoZe9SG4",
  "key12": "4mz4zaAb4xY7zrQEFs8bz48uFMT8iJCir3C2C56JNBN1xd3PoMSHSmh5P8pgaKz5RcWxw1sCfDd8mHvwpreunxar",
  "key13": "5rJNdWEnNHUeac996NZkuAqSXRagogHWLysVHbZBMbmCgxwwf28J5SCZKqAByHq7UsjrqqopsejyamW6hgSpncWn",
  "key14": "2tPZckZXeUcApNWrAfU6psCJ6gpW41EiBbXR8fKJARnFj9QwJ47deBmsoywqgPS1gEJui5rrqcHdYrewCfPGhckK",
  "key15": "2KJ6g9NPG7ADEsM4CUCX7BNpeqewTTy7k3TcpQtb8nN1rc6Gb1f458rZn6tQjcSYSdctg8wWDGDPqnT1LuVFYYus",
  "key16": "3gLUKCvnUG2YdZiMmShLGgFgm2b2hLL46TQguZnRAZZfgXkWRsCWLyEfEnv35YYdEo8jyhqp1CzeXHuv1wbbyUDt",
  "key17": "3wJzzSqse6HV4nQkDx5qhrWgo2fA5zhgFyK7Yh3sTbVTpd4Uy42w8MWL2BWou7GATfnjMR2hKGyrnX5RxnWUS2G5",
  "key18": "p4NjhcyY2pwrCKuEJxZgBLw95syjUt2N3DuvEQbA5bQt4EZFUvxDFHyzFbFrMSu5XroAZRruzsKJauXmGWFnGnb",
  "key19": "3gk7ktxoLJbo7rKDLej8gXyHkbddeaC3mVHzZhui33BhgLAbx3DAYgy5S8o8sm3Ww8wdnoy2Zpde6e3oDoeBcry3",
  "key20": "5wda66ejBwBu94FfVthY5Bf8cY6TX1piAJ6gu6iDP87VBtAnCCsvuZ6feGCy6sAFHRrq5aMJUUvEA6qTwyoqB5Ne",
  "key21": "358CaEYqgwL2AhobFh5HS8SwxzG5d5rZoNYSS4DgFLJXjgF2ryhApNAw5jFVKRMrzVJbm1dTbpAupYpuqQhpQJVF",
  "key22": "39TpockrrY6Bwxkx9XmEkuAF5wMeBhQje8Sc6mqygMjLqyRZ5tE7kLYcVvdNQQG7HGxzimyiqA3dLLs3HLoNdbwB",
  "key23": "2dKi4wK5wjEptKWEByH4J4SRH9VsWANubUYCpaDhcaAapKEVcKqothmCXEMX5ZsuSwkq6nmYkcMjBkmN2KMB39AB",
  "key24": "5UCFd2uGiwXeCZEgCVnLP9VVQnQfAS8vQrEP1Cm2cKD17utjG8B15KxGvcTRPXBm97aecMNFQ11hNsZ2CXFgEUe4",
  "key25": "644nYUindUCr9Q51uSKDQK4vM6za1F6hWoGNvYhw7u8MJDypJPBksUxwxGeuu8kNQhZXadGUmjgPCaw1X3E1US2r",
  "key26": "s2h7id3mCsseJ9TZn8HJfmZ6k5ZXzfbayoC5NLoAuWqQzpc5i2ZodZmbHaSjN7SCGftBo6S9oGKbj5MUEGVJfTi",
  "key27": "7m3nrXGsD3M5xCw89d8ASMP9Tk9vBv19b4uCCKNNn4nbhXV98Uu7sAtFK8xESJLVWAb6vTLxZqdpqtxSjHapCCw",
  "key28": "5Lh3xcUn99AWYKAeESdxJJafXoWVFrkLc2THsPDGn7c9Pdh5LZ8bVGrvRnW9mBvm33CvfW3HXhZwTAy8LfvUzAMT",
  "key29": "akgRpiDR3D3tdaVqCA5FhM7fBYFUDeyPzWTx3eQmLnagUDSvP4oyqfoJnNGDW4KxgNMv9sR5XxmzWGpG8jwGJai",
  "key30": "4wQzGG88c6NxkLHESyXBo23mJb9QWgsSzmsVuwoQwskWQTcHiNqBteeZXqNBTJWa8WDec3DYvo5KcvX2B9BfoGYo",
  "key31": "3B5uyjFiicwkM4LCPsBLb4t9D7cVkzsW6F4TJCLtkGA5QVFsThBf2kkMsRHxRKcfh2Anyt5T4KGYdHArb6S2uVs2",
  "key32": "1PfDTZGxTsWz2J9L51kmC1TbFS9JaoBgD1xWiuLr1oXFP33bVaG2w3NSWwdEui6zQYSSCXfUVHBTH7hh2B6GskM",
  "key33": "d9Kk18V4S1xVMG34Q8v7SWyzx587RgRsz2Dxo3CFdx7GM1xch6P3XAAMnSFJH2JbtEaicJ43Uv393uwWJ3sP3t8",
  "key34": "3sSH3u2FE4yaBUTFYTtX3DypTazMmEg7VmebPNvhbaP59n7jTv6mbqs379xGL4eNBAtssQFxVhN1w5G77Tk4HCiZ",
  "key35": "3fyLbAk4CcnH95sQzYmy2e8JagUdcSNHKdH3MrBAqHymkJZuh6GKRfq6QxLpr6PR3HyfxqTynQMjANYA4o5hpbzm"
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
