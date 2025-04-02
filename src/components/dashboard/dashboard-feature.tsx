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
    "3e4sUnJd1Q9oipTPWeYzuwrTVDmPRtjJKbgeehREwxQ32JRvqKhx9oCRTykuaABRcAAWmtsFvEiyi3n5H9VXCrpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUUdYERwPbT9iMh8vUEdgNzhk1LAKP4ajofG1GfbGR8DXhaqx8f3Fzh6v15BW7T8ptSkwU6Xq2wjoQ4QEQXiiMu",
  "key1": "3yisjGPUwnx4fJZ5udq4CWqioC2EGRSAa9UffG4ezYCQuDqT6dxMmghrqn1XxgPfqRzkiiK1dZ7wnqQFzMVP4id9",
  "key2": "QH7rs4h8voJAa316WgHWi5tog1kwQVGSYoUJWFwMCNKp7FB86Nvo1DxPPeNNumBCA8GqvEXb9vbvf5NCskpFqRR",
  "key3": "2uPCC4eFr1Qwco2qQYoZA7rmFdLrz8M3UVhWXkWGw8G1mSkd8DD2w8gvWdYiDkko2KjGm1FxGGG4DCXzmkywdmeL",
  "key4": "FjeQ9CD8EBPp3siwFDTp33Jgpqc7RKUfoptZpBxW9nV3VuC77pGQVdQga58CigmVANv2GBrV4evCZb6gkTdKVje",
  "key5": "3CGorjvE32esGbiTt9Qn89ua1ZszjGToTwV165Jj2X6eWd3qEvBa8UPsfyE3LDkS6eJZQF77aM6SdRt5ywdmLD5C",
  "key6": "2jhVPgKPfpCNTgWERvycRVqFznMCUvEAb4QTV6BiHeeFGFDaS1zL5KsEwhhBQyacEYt8suffNjuMSN6cFNrX7shR",
  "key7": "2mP4xprTNseUGJsH1TZChvrPbzE6D4LtrvLL6M6CeR3fcGVRjJcnfy3HVvH2uXt6n6PkfMt3NxXWEfRon9Xd8QVo",
  "key8": "NsNegwsU2i6j5nN7rkkYRcwJbpA77vnTX3ytK72UTmECUAhD3okkt7A4yUgTe3aqi6cnabF1k5kQtxTATteRPGm",
  "key9": "5aqM8VR2GsfzZHZiifMUAwhPHLddaHM7gPS4ziC3uf9ggHDLwLfCqZe7nV6BEQcPD5iQHRurCSPErhuQve5hBsCJ",
  "key10": "pSXhhxnH8qKv8npJcKtUJYhUpyMSRypukMopKvwRhKYdZfhXAmaDC6GFNowHfvSxUVbMg2jshejsZm6xF7jFX7C",
  "key11": "353qZ2ycipNePemTn9MWM9hLmwUxCQigDBt2xXrih8Hti1HeumyDACFCuLwNd5VDXkMBrsRgPLU8SfmsW7PH4nxc",
  "key12": "3UoQmNQBUnkwpPhxWFo3gxFrLGcJduJGaTZdtPudHXcW76Rfnghxm9cbBAAZ7zuFSDdrhRZpu3EadcNP861thceR",
  "key13": "3Do6powc5vFMC1LZx5GGhSWhYfo1PqLV4joydA6tZANNFu5TS6W9HtAvVXFiye8x6d4ocptoyJmSfLjpHAqvk8Gk",
  "key14": "4kgY3mG8HBLzP3j8v7za4g8mfjhbGP5qiCnBitynNhZgfyStr6HLCTgHzaJ8a7V4Y7yeDttLfoUBzPj6zgBQWDHd",
  "key15": "3RR6w2yetY2c6U5UrKNrwUPaMcCkMLEfzAC5pbMJHRb5QAaPHY8uvic3xtuGdCDAnpW3u5ciM1oQNTJFfz1trpJG",
  "key16": "4C3jRPswaEZqdeK3sSQtB21SQftiUS7aPfiPmkyuGBAyoQL1U3eNrznmebTyFJ9XJxHDNd75o7o3yRrYqyquVCcs",
  "key17": "26cyaDAV84eUPVCgCVuXe72d6Js6nRm6Z2rxYNyn2TP8gYSxuCnJw7FPkaojZFcwYpWqbejunV9xXg2VQMMCoUsM",
  "key18": "2MorC3q8vAyNGq74suzaU8XqsHrscGoMgob9toSTgZkwXzZmokw5WCdyLnm8oAPQ7rT8XkMi1YJKU19dXLwyS9kJ",
  "key19": "3Z5fmc7nGXotHyzf7EXqUDZ3kEe9d1oDPrvhUBZrGGjLdWPsAXAUiMcW56vMPsYYQtHtmjQkGwMjq1JShMg9rDQf",
  "key20": "Z4djRrThvUz1X9bU2DRckJTmaXLCsVQ6Q4LrCysgaamPBQctTcMK8jtJ2b9Y1Noc6aC6RxSvTejE6rngEKLtLSQ",
  "key21": "457Y1EXsk4vhNCwXR4z9yZHTxF86VKNu4G2FdstKL1p2ZEpZMgKPxRLKjX3PtT2evhKieo8aVhbwhNAVRbpqdx6s",
  "key22": "5WnHLjEnpAeVYCegS4UtvKMkXyKhcSuj5XnZbKVHbP8chdy2Sj4yjoDE84aBPEbP6zngaFzGkohSwnmBqVqY5fvt",
  "key23": "46thGuWR2r5NYvBptAYUbQHeb3iyG56SanmgnoPSmUjVhWEWXLcntbdA6nRJbFAL6MaU7C5svadSTNKnZqs5hFtV",
  "key24": "5GYTMSX1Ujq8vhd3nDUd9tEfTHqCCJgG8peZozts819yi5mJN8dYdv3Jic6ACi5Rja6wM3spa5hkfiPmY941ei1U",
  "key25": "4ZGfU9TcbExi19EkZ7PTE7HqobHykWmbw4isamX5aGci5wwcJFv9tNMh9ahpVNQuWtma1FfnYuDe5hdVQMNoFFEK",
  "key26": "4w8hB8UNjQhxEfe5tY7enUQTdRNQEvfoH2aqsfxVu5yekaBAAUStagskw16EPZCMMkWRUsKLpd3wBjEdbc46vhT",
  "key27": "2LnRzoSVejbgzxbM9JTcZum5F3zfx1WCoBc4NcCreRc5MEKoskyA7VSDrfrwNqBTRSK4PccMwSX5b1PhU5NRB5Ui",
  "key28": "3JmstUV6zCDQgoBSXvGbNSZKfaUvg9LVfVxrb1tSuyo3exkLWhhTNQ5DsxX4vD6am5eL5jVWQQgtGwgcr6rQf1Qj",
  "key29": "2h3Hhye4V8sadcSmqejAPDQDPqtk174idgWWSnHZLUhbRWVa4nswEqoH5bAAqvkUus74aNWVxpYho2XcRDv7wifx",
  "key30": "3xriSBiFrdFUBnfyDdvv9JHnr6i1v13T7HzC46DTyLqms2J96qxAuSGJPCFhX5gBfggTujdKmfMob8qBzWjHfEAb",
  "key31": "59k3Vdw55Qt4tUZfFqfhe1u5LLu5DDrMBhE4q2UnwJxce7Dp1AVPkmp1HZVom6boqx3mwuuQBP47gGF7QM5niYHN",
  "key32": "5heS774TBzCBKkqGPmycJ3HVFB4bYgQE8hzUYJMfyP8wyfCLF31K2L3VFihQJpFJiKeYoicFfec7DbrdcAZje9x5",
  "key33": "3uRDx4MwDLB9A8YpxVNbDtuYjuaWHdLfTU479MrQAof5uz9zxE3MTfijXjc9Kjg4hnGVC8LD9UEVyZSot3arBhHf",
  "key34": "4qLZTDdXZNcwYz3GJMtaSEsdx3nBHtWVDGX4cWD2fz8CDm2Kg8Aieo8hPudA9dtj4j6Ao5JHWtmEwPHhqeCqsTwu",
  "key35": "21LP51FqWwJvwVm1LQHVfBeR6VaUAfDo4Y1HnqqdX5ATFxKXBhS72aUCMKVPr5vCTFcBEUH7DVcahfTQBcJ16ksn",
  "key36": "2jdqxoapk2JhVTqRcaFgwJKvYFqqQwkLcekFoTvQerGfHvvhEN4jtgCfYyTXFqFTvyKPWSXRRoEFbhpjhpAYPxke",
  "key37": "5gf82DFsxQnhfmin5xPUvCyugcUrkkCe8U1MgEWVxFcvGmbbqp4QNuY1stKxq8iNVWFDqvEYjLAP83CEqurnfLMy",
  "key38": "2wxkENsEsedjbo7utY31xfhFccMzTGZ85TAEpndn24b1uKRF9LT7VaVKXJ2DnHB3cCiB2RvvZwUR5B6ftA7WAKmd",
  "key39": "4yPECbkXMoPMjdSnFbQBmx3KXQxo2q2zRcqaQqhWZva6pedinKct7bxQVbJsNuYsvkT8mQdeUKkYjjyVKruRk5rR",
  "key40": "4tSfDcEhQzwLes2qrxo11RwSss66T4AgUN5BjQ6459Jn1QNHsfTfcuBsfP8WaWhyguSyz94v1CxJM3ajiGzYuG9j",
  "key41": "427QoS6KwJA9dVBzARQ56sxZL5nrMS8brdiGkuY7epG4Cxw7Vam4icbc6Lr2H2C4vm1koFrDgbctnUwRjcgzyGn9",
  "key42": "23UistA1kAdoppVeqnaySchVUiy5F4KWsVp9PfbjFCCbQRvo9BxfU62xMXr8sXMp4z95CHUaCPZ8vzgLMkvJwJZN",
  "key43": "2of6ncNhJY3G2k4oshTCze3QWT5qQ85w6QJMFLFxEKZ35x4eA28G6PWpK3HaofZGjsE2HE62bxyvcxQtGkD8jqvS"
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
