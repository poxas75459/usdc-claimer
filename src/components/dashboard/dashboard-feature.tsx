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
    "brf2EWWy8r2u3Fvbs3k9iQbBp38UCSLKcpjQ7JhSjAAhoz6mbgTeuZjC7GgVL33rdZBA4s2fLS4JGtSpzS8M9QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFnFLDfmVTBnfp48LarTzhjdkfEDwKMUeHEYweeMPf9u5ETfP1y2jEy7DxGMwqukMTTcEDem2uH7sigaYje54X7",
  "key1": "3g57yhQ5MWo1sxVHYTYcRi374ZiXJZk6ArM2Cngwgm96bb2UcnCyy6CBK8gBzsYUpXS9DrUcVf2CVj7KM6bcNjY4",
  "key2": "3acEQCArBitGKc82ndNFpEZoksEpxmFr31yiqbgYy3fsQiB85ZRDwjFeiEc8xGqSRtLf1ubfETzRWPi9r73JQQjU",
  "key3": "3z3vgVQ4QZcQrnwg14qvw5e6NkvjeCyZjLcH6r2GwG5xMxL3ywNxJ5XgudR9dsPoPZkojaytqgprCxFf42a6mtmg",
  "key4": "2dJGiQzUj9BdwMVbVZcEBZK1ZY62aPbmDGmtS2fnxrP9a3UrpSqFZXrRtgqdmY3MHuzDk9ehBhtqaewHYgMeE1Zj",
  "key5": "4VfkJwPeDN76sRfGk4UxXG1x8cWJMDqKBw8ZhpTKPF7WWmo9p27V2YQ5RrgBjxnFaDHR4Ghzbn9YBdBCi56e3wu",
  "key6": "zkoR8FJmjgobRQhjXe5q9RqWLG6CKzeHn6SgcNsGXQc9PUSFYrvspJq1DRybPvfYT6AyntjbL7Z4XffZRs6vcQk",
  "key7": "NdrpQqbzCyWTjJzgyoXVvyo2v54Bj3W3JPRrxwVX8GTAZqx5BHjefuECasSGZMNpjFEKkqpM1fde55SDgMwphWX",
  "key8": "35b7SLMXaNWVNjeRih79uk6Fc4XRWyhLBxyyMJwwjdqjVnr558XM8zCD3KEwKV7H8vktCr3AZTGUu5XdsvEcbi3y",
  "key9": "4WqAU96dqqF8M4gQwNvCon5DDFjNWwMsXWwYHjkSoq36L4uffsA5DiQidSKALJobBWDT8zFCH3Ea13d1FQg7WGZW",
  "key10": "5ymntwPNxjBVnu6QayKqADMZJsz3hYfhRfTPzdZkoSck5MFwjYfeG6DZ1SdfCwTyJGpVztXeEAnpRgEiTvbHQcZC",
  "key11": "4jh5MtyYu1D6jGRBBKYojrijgftkFf4fPKXf9hc8G2XmturWvgYSxeAmz26gn6NuNRVzesBTbb1C99xQodJzTp2A",
  "key12": "3owgjVnLefJWgHQGVsS6djVQueNbf4Hc4ExJqaJZH1Z87cd5UwrFRG1nbDrxoFGdgPjGdL6ixrMp3mfuryqTomkt",
  "key13": "3kWru8nB4qQofGvh18GBA14MuY8cFrxXJVnbfoM4yieQvMJrc7uJc2DtmcF1DN1kQgmt1vijMeSXr7Tm8vNKbxpN",
  "key14": "4xCfcCKkrM3TC4dppav97gzEL73i4HgpA4XTjr9tiv276ozxjJk4wNQ5HnhN76fekdWYu5V3seAWwRtuhXhPFZbt",
  "key15": "2mvA3vpvzSP2QY9g86sjCQiS3tLMFbdyB3LVFLsoqAxX8UzXU56PiGaaqcxM3BVrtRBsvdgrpw5pXcFmyDsgCKbi",
  "key16": "3KATinueKdNepCVpsVQX83VcsXxE2kpk7j7XDscTATfrKGVgqHit7YTr639UKB1wFVyrofphbtXHQutcJGZmfXSi",
  "key17": "3PUwc5PPkPbu4XcWxRbCBUBcKHUbTdW2ZAUfxQFDDYkRYEjdxtn9zhSGPYcB7RZ7Vjd5MWH7apzuX4mXheG88Eoq",
  "key18": "RJqFh3v6pQL3Gh2eHgL4p3xB6x7tz8ayPfcmAedbWkRCvhbpc1Jhi4qrFiJzNtHWBtxHodCgLnMVVb4qngwotrX",
  "key19": "22xJBhWTKGwvLCgaXzrdNrNQJ8d2x1V6mUwmgzR43gFyhQdbfu1Pp7noJYJ4p4WzvdhVhs5TNAgfHzkHxaithVyV",
  "key20": "w6hMaHTojvUqLucfbPLpyQs7ZAFLgiLESSEeuWCQND7RUR9XWVWBYxrm4RUeX6DJy34N2eNd7zsiYr9D47HGLTt",
  "key21": "2wnyomCsmV5e47zfJd3i1XCyKHVT6dxjH2MzXToR3zf2Eh6kGq3xbps9YFZ6yCdpttxMJyK4MsyWMqfZ19b5TJ6J",
  "key22": "3uWX15AYVxbnJeTW5hDTSGZwmNdfrNQwvyLhLxo8aKedxLV7svWr1K99JByQ9wcsWpD7o44obSQ2FvYN5YiVE2JE",
  "key23": "u7Ax1hnhnfE3TANPjKzocU69QHmSKtu3LFbCiKi773gqwaekWuBs3hvHUbFF5aeojNtiUcG8gWaa3TqGJMtF9W7",
  "key24": "Pt9EfCnetBXWzm64DHmepEGYUd8zFkzVKRh63p2oA2XAFjaJ4xyy3wChgsS2XdCoDV7vSr4Vu9Fwh4bFRzTjb7c",
  "key25": "4MZdmEfAnxACT9diQagRQW8688SKNtBDq8cLC29wKxem1zg9GFErzm6VY5gPCmNCJY23meQQErtebCtu7cuUfAG7",
  "key26": "5gqiBgAKj6hU8dYyRmrHZ8WJDMpi9bSzryqSFanBDgCGgjL8X4MrN3RNcw8Ur78R5JU2eyfJMixnQWpjFSs9q2Rs",
  "key27": "eto6RJqBtCKoNvKEinpWRe1rvBtjK3DJtUe4weWpoURqpbcJFx7tL7SRvQWEDDL2nHdumobEUdZnra9A7gE9m5o",
  "key28": "64Eu9Fg3XFfSf3iiEHw6JXWrB6a1GjMz8buDBZEcn238F4w2opU1s2KoCUUPrkatHXGrF3toPUVgFgZDuNKPrnaV",
  "key29": "5YgGvypGuFNiVC2FxbcpZUs6Qo9E7Mo7br2ME8d6WcwAZtHNhDrt9jgmnmdQmBH5LDjKWoVmoZJh8gvbXTfihPQb",
  "key30": "23godxuoyzE7kE6koDHqBAzwoNatwqbkvF73MV86nDbcRznLEyZeVqXYxPecJBWr4hbpV6YptRuJTNWmwjudvwht",
  "key31": "4SSj2i3tg4JHEjqdkJJoTuo1PtxHQLWqVwAMHYf5uSyoMjCnin4aroVPLrv87vquNBvdGBJJXDfMQUC1CvQYfCt",
  "key32": "vUhPguAsnF6PSReRK3oKKfTFeKihMhSF6kH2qR1o2P1yv2BmYpVs9iYfwm1SF1NS6A28hsWt8uE89j2SSHPdPUe"
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
