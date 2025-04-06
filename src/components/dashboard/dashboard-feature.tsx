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
    "23Td2Wydvxzgu1byTQTMc3XiN4SfiRz29u7bvVP2jzaDv6ddfx6G95EQWNGhc7ESSWkrLacZKiMJ5SnDE2br925X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mdkcNovhkVna7y4yRWRMet5tUbBafT8caX1T2mPAme3Pn74mEZGZv3L87mE9eR9zbBW7PzU8cREVKnRWWgj4nW",
  "key1": "5Nms3qau7SNRPxNi6AkX67si64ZbCaZmFGQbYEX5M4EcPXjRAf4Ts37ywBRQzsHSEWap36sr2QDpUstbMkXqMwW1",
  "key2": "2F9QrBSnD1fbDtRuvNR5MReGdi4ZdcXCHfj4yaQeZeXKD4uVBWat7BMr5wxhh9hXPh6aa7EaPhEBbiQQhnWnWMRQ",
  "key3": "5waX1Bz5dXgLrsguvsqAsSqHyzYYzRmbEjYmFLJVyJL42gqNatjcFqqQSYMSn3ybfqJHspJCA34gRPwniZmf4Vas",
  "key4": "2EVan6KNTdCG34baZspCT4D2MtuHY3d6EB8QtVTcDQwLAqvQWDEcBp5whA43wSft3C1m2BZJbmUE4CaPJ7XLnndw",
  "key5": "3MrS988eHQYbipNcW4oL5SEcu5jtGyoWfiBxqUHiEAvtJyTQhZpdvxT9azgZMfoV3ZRoopYuWAWuVA8DYaegVKDi",
  "key6": "46vgJdA2h3LdMcrRSiFCc5E1Kv44G8HvK1rPAdH8asjvWBAfjtueT7fgPZeCSC2dNVpUhr5u3bH1e9DJu9WQj19M",
  "key7": "5eBCyiLDFc55AChGuY4mvvk2BPYKFdYNjn4abWSmwXagseYSV9LHkmzNRHVG65M4Gz7kBHi42ndvZ21XbUnrFr1P",
  "key8": "4vxPJDtqso9V5SweLWqYcBqc2pB7xRpomtayESPe1RgdHH8KhH8W6RCVKuCr3tTmVZjH4HqpwDb1MxeDiKbFA1L5",
  "key9": "2Lx7J3QohkhU5djbmoSWigET6mnbGSG9EPKQyukNWR4xDiz6AsT6XMqBVJBsSucUQH3rr546v1TtyRSoY8waTEU3",
  "key10": "9fEcwx9GZ4cs51PWGaV3on7BafEzCeXtkXreDbuHJCHiVuM569LnZsRqkTEV7JeWAn4b6YrFXZnx2H4cjxJV2qP",
  "key11": "5ZLR2XVHKi4h2CZg6ZYANx1z6RGe1D71WW1xQwa15gq47bJr8hjgLoiEWkpcJ5xASncQPaFN1terNCQWZG7eugHw",
  "key12": "3YB6Gf2vvuVoAc2p7HUKxVSQmBsdfRur2rPjxTAKC5HsaW7rA5Z7amuFUpzNJhvYcPXJzAuVBnzu91n9yhGNpXEF",
  "key13": "22sWNzxF634LS7MbpjUb3t8QHQypCS1C1m6fKNPt4faAAANKb8d5sBXaghvCojF3CtJfoE4rXLVwFL37yjcKL7jH",
  "key14": "2d1HhNYKXN5dyQ3guZA4ZCnZnapULRh6bHFnpPBGboetmgw9HKqy2kBbifoDPmkQTgfN8Jdw5oKcohjQQkTGS4f3",
  "key15": "3ciGEs5FQ5JhiRsJYPwyF6rZkxgJzQvYtLUiyghpPeY7g7TTfMjf9KrE65LAsXFG58LzotGZMsDKk4zurKDTnTeK",
  "key16": "66VCfCjYCZ8f8oB8TKMncnyhzhzLLJmBEhDfRug9jeUnj1J5cjMEjR1pBnqYXbUcK1AuHwJWi4J1gJj4iwzeNWDT",
  "key17": "4igchG24uS6b5nHoA6uR9epTGjbGkJsYKfA72GY1MGwQ82CzpYLx3BGVya3HN23ZT4wjPgsh1ry5V9UfSNjJvmM2",
  "key18": "5dzc2FBetwmcAkXxP54suSmUdBuVTBZE2PtmYakknDbNyJ6tprCMdoQhfr7hKwoRWc6F6znjU3tWDdDpcCvhf87p",
  "key19": "5EGkwETTXNBTXChNcD72mFpRBDDLAxmUHGcM5bfyhPfJCsxm8ZNPSGnowE4NxPs8Xi9nJfEDcFd75ukfmNwD7vs8",
  "key20": "5QSij3a3bdLP1DAxSLPRJ8CVbRFiv16MtvS8AU6k4qta18tgQc3vXvpSnTqgPzosYXmf9HPxmjK8uKPx1g8vb9EC",
  "key21": "3RC9MFt3jWxRket3fKBy9B6Pzof2tfCykFZhhf7aXh2tQCjfR4qhKHQCEDhUFC1MpsYWt21fZng4zYjPLPkaHXBb",
  "key22": "43s7rrzoe47pMQqzTH3qQ2yfr9jXnXCzMspi3GwV58d6vutFVGLiEvtCeMWGTXCddp6hATQgv2kgScCq2G3AZUZ9",
  "key23": "62b3gNRsLt1wCvrdjf6jegJu1nPpwRWpSrhRm3zWkuWTSxWQaUjv7i7NW4NFgNzrxxhENPFreHD9YYwXuWVz7bwd",
  "key24": "2vTVz7m9sD6pB5RAL7jo8c1y1DjKjSxC9dBdbL7PVHb5kaCGMQbPQbMyXhAjQbZZDrfkgibwCpQuz3HQfAL2CR3B",
  "key25": "5nh91TurRx2DiEYZTH6ab6i4DqPvycMopLb1DBxeQkTjXceppWBJ4aFiFECz5kmBgsjPXodv6GJGx2jHCJPzCV9",
  "key26": "4vAFCtMMBarFrPyrrUv8uww59QEDXHnj9bcFgSSUXvGFXfeaUH88fW4XTweVdv5voMKjHvTMzHCHXp7sA4FjqztA",
  "key27": "MCvnQH1VGd7hwPQmKQp8QHnu84kDiAhJizC1u2u92s4Q8QqgpvS8FJCPJVLnxnumMgL7wMmG6U22BZXvdhJG9Pp",
  "key28": "239vNBJA5a3bX2SEiixMw95ro92b9guDbYunXVasyZoVD7gQ262CGZtzFhNLYqYfVcKut5PYBLbZXemg1JHc1Hg7",
  "key29": "5vq2aBcut1TJ46CuTUM1NUB8fNpGp6NUmZF1FYcDUjV1BNH6mw8XvTYSFdDSMxwQhqq3sxZN3VcggiB16LPUjagM",
  "key30": "3feXTg9V7H15Dcn5AQJ8yq5u737X1iwDpnLTvP7bDUuX7woxs9VCpYbQt1PaPk6PorAUoVsNNBNbGYrdVanrvNLc",
  "key31": "PGbBM58A1JfPiGMPJn33N9Gwi7CBqDTbMBYAmFsh4uZxHJw8hDLDZgMR99hexcVSSUMqSdi5gG7iqu3iXtUeYT7",
  "key32": "3zawh8iiyWRYBHcFAJ5n5guzFnBm5SK2TszcV8hJ3Xr27wwWSWhYYPdpKQxKWg6Xasmi3t5urJW37h6y54BBUbh5",
  "key33": "3ufRCTXniwo9sYsauZ3VpKZR8XJz3zP4ZBZLRnQ3JSnUkVHBMKrWCeqpgmhhLMRxmxYWvquibagFjEZ4t6mDG2R4",
  "key34": "567PzqvsVPe9JwaW11EjgDi2oo3WCNwqcNpG7fMNP5or4qZiUABqfQ2f6huT3ytpFTKN2VUTK9xfL9DK3soXNxQ7",
  "key35": "ULr5TMUvQ35b2bzhPqqqmLSkyNx1eWwxTLSJYjb9PUybMz8xbLqEXmdLKj8qM5RrJdSf61ZNtk7EYfXrv6aXePa",
  "key36": "5kWNLWbCdvBcDLx4DiUGby8nCEoGAfYzUAbCxG31N7U77YCCM5Miwx4dDWMXi2iFB1xC59wqvaPmQ4QfEjL5iH9t",
  "key37": "5mu6N8R75PTRo1PrxHhWc8tvrjunbn9NNdQyowWBWufDfYyo7RRJJ2XQVMa2vQPPnMJz2sgKZviX4nEHkJJn8Kq6",
  "key38": "34ofnxxb28mjXVr1MwRMLRFzMWJd1EkK7EqkMPoHMwPZySdVRPMugpJRfH7yVgWnmHtZ6YqRFRTpB9fHPFwwbUUc",
  "key39": "vcKioTf6cHALKEBeXvsLM6KkSZbTcXnJ71r8bGFM1rd7GgqXkmMdX2Sk9u7GuinPY2DBMRisx8BoyauUuJSQikT",
  "key40": "38uvfU24DZgciN8jjZ5fkePwhHXyrznZcHwT44kpvcjHKupHE4VbGfVVptFEQhhHmfsLPGXMvvczFK5JJVaPu8vx",
  "key41": "d3u6YzbG66BMX5HcAEctFDno6uLeRfTQYUkK9F4DtBG2a3Yx74ahBcVAdEbTnK4qgRcRyKx2xhSf74SWBVUC35b",
  "key42": "4mioWCGnSEL8oHm6deK7nrw8RwAPa3B2Q6uDjUBQviBFHVbTCzzqf91d2m1Y6Zhuk2G9NYinwXCC1UNjDTEZLR9j",
  "key43": "3tyqgLJR1o7NzrbDL15nbTDqtfPpdRNwWTKEi1ubbC8TWFJq2WyXZ2Z1NziBRdRmEP27JrDTYBNL5J3VzDDADJ3y",
  "key44": "5ACpf5EDySBAF5tCPXyECkeMn794Ym8azPW6drDU1NeSeMNFeHzaXx73WzBescuSgdy35dePdu4QfxFCeuRfa4VV",
  "key45": "4taTiAZc6aQhqcLdZoQ2Jz1KFZTfoaUhAEEj3mKjwNnYKcXaxGftYCWNeR86debWudHyZ8nfuiUkbtX6ubewLf6J",
  "key46": "4PJuWaLnLhHFSwTvdvUaviDouzn7kSxYTPqcu6oUo6mMq8Zsyg4xH8EC1yJSPkGxgBQ74UTfFiy5uzsyGA7ucPSq",
  "key47": "4iwxycJJpdbAfRpuKYY5pyZ5ELXCgd8xjW5MX54M78piKWHDAJG9u2TYBbyZBVqUYdzY8SeF7AHQ2ZCWuzxizXTP",
  "key48": "4KjF2CsaKsDjmuHFVMrAuGZJxnVpsgtRKbuBM2wLfafosUR3GcRiUBMRy7mhXcfMVxAQCbNi6qvm8RKoKXs16kz8",
  "key49": "55gu6Qi2ekSGHMKjdH6sHVNnyMDn1NubAee4gofP4K748SVSvF63SUtzrFGLRWPS7fXqPPgVkEXXNFPUsTjPLKGW"
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
