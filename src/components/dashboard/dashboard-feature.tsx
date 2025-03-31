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
    "55V5Pa39s1HD17qohAFsxyEQMyZfbHJEmByhjxWTNjMt9xswWAAGyLXy3P95w8pj67ip9ce25BQexiaH1Lqh8wgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVBfHKeVnNeaqc5gNeHrGbmZ68FEMe37k1Bg1yNQUcd6fTWkCzvHuLXWMTAYfbaStTM2qjNFQU16hdh7pgqAC9K",
  "key1": "5oGyMqX2qEgChS4hYNi44d3L5Qmxm7KZzGw3CeKSQ3qWC2PSMhk9SPQcschK8stAQjCbH6iix4mbknuVHFTSwNQS",
  "key2": "2WYeyXFVxGS7LVwdaFpf4zPnNoBB5bHr9RSA5PvqmByaupvueQQ7mcrMbSzTS7AuxW3jowbDwPxj2jPUrA4b8bxW",
  "key3": "3Yn4NQTCo8wkAWg7svwUCXFowqH5MPmMbKKDniYT852o9CmVJUh5sRyhw7cvJu9E3ierDyrp9HawJEqRDqYBu6R3",
  "key4": "47wzQW3UZZ4hZzpZHyq4Ch75oVwaMLG2Jwz4E1Y7rArHPgK5C4qx7Wd4MKG8ts4ESdshCkiSqtQZMChkHDWgh7GU",
  "key5": "2jhymzn76ryL3yeSWbGG89Ks9HjCZRKdi5rXvNVfDk7qhoEFmn5VnB9kkXC3PDB8AF1FMJyERh4p9fcaH2j7dFbY",
  "key6": "4pjCtae8X8oxPkktk8vy2Xf2URAt5ByN8KrvLDnbQsuNaUoLT5NRizzaWTY5RbdfVkcVq47wKAoAfYFU6d62wLaJ",
  "key7": "4yaU5aS3cgxSXW1g8wadENevq99buMBG4qr298ZNV5gmVJ9GVCjfcGvWFKWZBKX36dkR6LtBdeeZq2ikrbJZyQzj",
  "key8": "4n5Vvsf8v6DMu2uEaRfihwW697qpGH2yNfX9r7jyS5V7sNeEzoMdF58ZknzJEW7twTWAhNHoc6APPAWwh1scTi8q",
  "key9": "5RhV1KD4Z4gVpyiqw1yiqHuSasMLo3qQm869RMSg3kzrZSqkAymzaRhvrdh1pJxisKrZWTZcbpFm8uozaUj3GboT",
  "key10": "3soywnfCyRyyF99nv4guxXnq8nBMDMFGBr6dFYf7b1M5XH5dSaqsdbPBzU7XNHnXnEj8hvjvCJA8tXB8Z5GZRFHn",
  "key11": "5yah1e2H7h9tiU4RUe6sWgjrHY7Qx44ty8XmQXB23UwKfcN5XmBrHRM2Y6nsCtXm8LmW1NfuycKhr6x8fQHMaKTS",
  "key12": "3cp1qMQPJ6kE8EUVhsg8g3WyciaMamGvF3L5CfG9kaqsLunrqN6MyXXvTHvXD94zuacuPJgp5PAeJNR4zFwnTSyu",
  "key13": "CGzfK3Xja7XMh1m1faGaFLD1URfH4fFCvAw9ky28RB1eLkaMbQvGMmaPMazybDtqwbd1qah47FA2FaidjBxpZHg",
  "key14": "3DWFibvkShtM3CxhH2SJAZ6qNWA1BWn3Ec2ScDbQ41FCyK3E8kTn2cT5oYyh6ziL6E9eGg8CoMymUotZMHND9ocd",
  "key15": "4ujRF5BpatwKyZ2dRx9MwS1tgYoN4WhRTFjBVQYxjBRqP2ggREwBod3VLcbgKCQvBWYLGHkvg9q1xRJS98E1cg8L",
  "key16": "3tZhzGk46JHVT1RqmaLcc55Dp9jW1jbjeAgKtmHL286u8HyMaeANfomEZyfR9xKSPbN3nP7egJPXznejrCYKhwdV",
  "key17": "3HHs9XaPf6oFpLKt4ijX11p6r9NohMijU77y4gXTCyMAHtZPw1YYePCv7KizSxWD6oKKF2FnFzobLNr41N9j29zQ",
  "key18": "67iYrhxRp2tTGjdLBypabJ9NxfqbZYx4BKCd2CiqBJ2mVBAbp4uZXHcyWwmpJiBMUJDxswRtjNrAAsC5nwd963ov",
  "key19": "7uP5KhPN9UZydVZaiSQgEbEnhshiojJr7g7JAPYnQamjeATThQkSU6Ad7Pvoi474CWK8MZ1JfbnzwLNUsPDqojx",
  "key20": "3CJcmY5VGR8oT9NNPXrMi36hKUusPUcg2MNedtmewvVj9J47QXtRAiNKWtUGs81QGX8yM7FgLaCC9RyqGbMoR2wc",
  "key21": "iurz5pHsX2R522qL5qMv2hpSPCi3A7BN3omD1ZMjkXhz9hMoYqLFvRGzHQhScdMxPmqbdQtTcZ6GtiwC3uNbki5",
  "key22": "nyCHLrMB2HeoUMFFV4BWpeaPg43pHR6LgspvXtM2iHnj5bnN4XHaRmVmR1BwELfSRwJVXoH8qY69bzGQLcDbX1H",
  "key23": "5QoyWmGtr5oXySfLcki5EycLjZn2vyqa3z3z2dgXDEXfm8e3N794Di4bPxQQKyummsY6xhMuinEiqoFA9FpwANss",
  "key24": "32e7scKS9nchtgZ9bHRGQnKc6M2jbSYvWM3qZ8x1vSgFpUKX7RQ4uoLhWm2JRQpTHCHjZDM6GmwHJsKoigbUktRW",
  "key25": "47pwqb8w8QGDGqawddmMvcvis8XmRN6S8H7QAQB1gW6jTGfRdoQsMvQf4Yr7ntJ8MZDJtUoD9LJwYfhwGVWATmHi",
  "key26": "Y18mQEYCy7p62kGR9ebCDkTSpqtFFyDkXw1PSWaZdm5PV6uZThJ8Ss3KrfftBz78tohpFq4M1C5vLaxX7Ysm72K",
  "key27": "4wEWL8CvKde3V1c6QTAkdoNCsXqJPHgpZ8huSwXSLVZJJTFN4sjozZ9xYWt7LyFcEv3gX7w6vZTm7jyk6aX71Txu",
  "key28": "QE9jFUfyaWsDaQ3VzrSPQr2rJmMjh5HaNPg69vExCwhTtwBBDyuiZeZNeGEwAVwJY3b59ZT5me26UEz7Gnmu7HW",
  "key29": "4vBb7yZt4zavCRCBZ5pTKXggHtMJbqKwiXUQYHK8h9n3haL4SyjKnGptBCQFem6cniVxMRTJD4HPCfJihbEgC7eT",
  "key30": "2vYTk5rTz4D4EZjE28wHkQFHn19AMcAWvfjRULRUS3MV7DCJDvWYtQAbK6KmERKngUL4NgizS2X8q8YniJtYcp3r",
  "key31": "28JscFTQrLdS7u8rA36cSStmedga1kqybwvggGEuNw7pwu33SP2TmjM6XwRLEPZFh2x6YEBjPPCQNPFgvLcifvmV",
  "key32": "5n5VAs3qKhTZkjMyEVcHawcyFDbiuB9ZwiHv1jifdJcYeAmZifV5yByHvpGPXc1Y4YwbWh648oAwhjAfqYSrCQNq",
  "key33": "3n7UUJGkfHELnns3a5HsCagXpoZTCtLR9hKjRtvzTcrT5KPrHedVSaU4iVrEbn8FmxB1htGpeusAtcTwyyDVvb7G",
  "key34": "5vpJzCYWkQYhsGeb6vVrmVzjD54YT3WF5DCqVZcHfaxfAGrQ1UPYMw4Q4idcpy9dknHSNv2YWpiQZL3qcwfmJmwF",
  "key35": "e9MiXnu6jS9SvYnL8D3sqyGSG8Mu74bSneSWRctj6De1t2z3w5yPL588MhCPaP7FRjmLGxTkGdcvNqPUMCwU8sP",
  "key36": "5cPyaR2BWFiqtQBboK8ZaLLNAmowxk7F3KK8HBE6QMYiqgFFU91XgSpuZmvcNAQV8gg2dbNjo3pHivmL28R8ak7J",
  "key37": "ZWgwDgWFvTt1ESCLU8b8F6Xvzv8vG8qj86whWi4tSBPoyjtjmLvSn4bTsWDXRVAhWm9vEwvHKUTJtveLWkSqbAE",
  "key38": "2gjwpnQxbcrhFAzQ5MZqJzvnCDmerxQ94hMnzeVJ7T29QYeBNTzXjQYyTvkW5RSEtE6FaSCe5hUwBXNkkBVZtwqs",
  "key39": "2FTaL7QYkphdzg1gSuoGj19fDSRLu4Vn6oPK2YEzx5cG6mJSQ272baVvPh6aDQnSdvXCraL7djEkwmWg9RF8Hnp4",
  "key40": "c2HnrSMhfxeqETYmDLpfgTJiJ7gA4E8dxAfVxKPWdj8aNzCJZiScpNNk5tSr1uuLcUGfE1hwLrBCfs832oWX7Z4",
  "key41": "JVLgXNAg81sc9JDNKkSf4KtqWA5STzVYj22gFfNji6PdVAc8iqBrQPdzpn1PQHC1wYNrvCgdrF4fXBJRyn6Xrmv",
  "key42": "365crYFC6CZbe4svz2n4rJNTqBc1mkXKQ6W1Q44XpMZ85bn2iNj8nBTFEVhXUkKUoD2c6LMEmkidDwHtB7kaLh7z",
  "key43": "5siXVA6RqCAvFsVZ3A4XRs87DcBYuLqHRnurhDMXtHgNe5nXUoc2cD7JzzEsKyD3tPiHaFbBzbZS2dAMhdrur48d",
  "key44": "66Z4NjtvYbqkaBrWprnbfTuBEaeKrE2fBn6zRvgr8VA8Cqu3WorMcs3DcQxTWseHeXtkwZxkRHk1Lz8At8M4AqJU",
  "key45": "37Ny88BNdo4TbcMbcZ4qQq1TstRcirQRCwExtrCePuZY1dpfCDX8pgisrWEvt2HDurQjmNSV8kXXYbf5xSsGr8zi",
  "key46": "keRMyvKz9vhvS78Wu7MS3yWD4NA1cgj9y7jVxHQQJnqPjW2pQKxcRLnqKkGVC6UsPCXoPjHWN52mMT1v9BFU4Vn"
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
