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
    "5ZcZTAmJWvAKCHspUbuYKkt9QXk1AU9knyPBzkEQ9K1DRvpLFnoMNq2tSkAp1ZwdDd1Y7rn1S1PVMf4erVUrQGov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhJfNs5t4mFw1KoTmryMeBoyfJpzHU9be8jsXgnAndmxcPszeQtaXnfSQ5PWgmkGURv21EhZXy7zVmRHkaE1nbf",
  "key1": "3wKJLXtK9DCTd2yVDYySAiLJ3gXtoc4RRfCW6UcxdbeSGStnK2BhK51Jbh4C6avdJLDnDVX5EY1Mkt285PayhfJZ",
  "key2": "5zHCsq6iMZ67VEErS6QRHso3DTGdMuKiwQqv84ZtYs81KCSgwCqkfQzz2oBhUbASdmJVTxYEZKArmSQctpLTt4Gj",
  "key3": "2cNkAnjK6bNTZbNxizzuh2FyULJkqzHkTtN4MHBS2fZGMHwHCE2fcjTMxuKBh16kPro85bwXhX8EdMNhrKAxsNuq",
  "key4": "RYGzAAi1xGhhgUimd1aWF1pmRAwE6HH2S79qzHhhVA2KqXmz7DxTDvrmTcJTE1ogHDxH2qBHXjJreR4xF46SUKx",
  "key5": "32uUYhyhhZrTus83GJPFuGZxSUzteph2u4cuD2d8XvejAx9kbMMM4EZyRjvdwrpZbTaMVsqKLXpsQ7V62tSKVvig",
  "key6": "hSjzWZGHiPrYpRPk515Li5ZF3KSvTkpYoRmhCMGkEYqw9Yxg5ahogidog34Fpy73cbGMup8SxXx57XcGZAVFiK8",
  "key7": "31BLucCzSKQLTtdA6z1PiVRzh1MJgwTbhTFNT4Z68nVsGNGTBkyezT4vDptfWnmqLwkxRdnmRjMAueS5qFCUdRPh",
  "key8": "3N9xh1f2X2fNNBEMKwgzJi5r4mA8mJNivt7A7tZ1ricwGJrH8pZ3QMxPFa7tqAGQ4yvotjBrxuXcwsH6T3xAr4nt",
  "key9": "3YtcRzwqjciaSy7EpvY5Jg28FTzYkx2znRq8J62EqwAXBMHX3dTHkgvCHurESPyTjahQexgx9wFUiqycDkA5EizZ",
  "key10": "3qmrVZ9Nh1HpE79zVm7FC1qKFdFsnStJb8nNVGbEyjVVgX6mx4hnGi3UN2JRaUo3SUL8gggQYApD3XdjnpwxW1SM",
  "key11": "3bkSpo4Pe5LSfHmGsV4DPeZhXn8DPazvUVeG9NLkxyF251bgviwf2rbgxWTsV6PZTK3iNy7aSA1PrLRfx3H6pXKP",
  "key12": "cs9CPp3vGzXLCJh22fJrTFiCBt9WpjiE6uC9buaw8wmJwMG9HZwqe6CbkkBJth33s1rod28qtQoXwuMHtjB2RPg",
  "key13": "4SykqzCn8XXgUdRoRXvDAr1AH6dzEoMiGSZPExBDCamqd5Dev4uwddmjZ3o9itJh8U3VVtnFtAPard3HwwKTKP8X",
  "key14": "FGGKUjve5gNzPTu3QgtdU7Kqnst8QFXEgjpR1sY9Mx1kduqwrS5EuxL1sKv7RUwF4K2hgrHsP5L25yGMr7J5pum",
  "key15": "GFumsd4EjNqqxbL5Ai7LtHXnRhs2k24X2zks3JSxzCTDFM9sgf3m6Cj6iQaKrdFqi5TNKuBf72US6qEZggr9PM7",
  "key16": "2rfoy2p9svbEKaWedknT6QB4ogPcWkMad19P4oxN67PjEy3Uy8zvLpUc1nAdZewkaN9Zzd2TDcMqKUgRS81nFsto",
  "key17": "sKWevGE77eDiozsqrjHfHwiJWmnAFpsHa4io4oebB4zs2sw66j5VEEX2PicjjUu8Vdi7rUenpCVLchvoMStBgft",
  "key18": "2A8ZoV9gcviAvYhaf9NU1pDTjjw3C5tAB8ENf4SFHJwgeAKoirpdji2FcR6F6hAsPfBU7raD5no519AZRy5d1onU",
  "key19": "wAm7NbceVLiQ6RfE3DwrqMdPRiNvJLhPUj7brfZvJvAGTuniQ325FPAdEy1YhieFH745vJa1c4bZn9LaDh5kasm",
  "key20": "4P3sdLYEY6bQoLbmJk3De8vVFS7RUMkWa3N8pKS8vWbwMqAds1exD9fG3CScKBy3YaGJ8BWs8uVvqt25bnWJgJee",
  "key21": "56mZSy5maZeyT8R95uqn6ogZCoWHopPZASTLwgQqVMgKqTH3WY1rFZb1BQTwW16qRFzggruR5Zsg6ZTfgwcRUp6d",
  "key22": "5zDeZ6fsbJmxvSaGn9sdBBGEweUVJ6TddcscvXPFzPLugx1Sts8gRojmS7YRNszjYgKii7Zfj7xcGDqGUL2Ydk9B",
  "key23": "43QdgK8UJjLB4AUevFwFQTY8Fin2LbPNhPFb5Mz9wWaUkFk7ZGhqaT6Zemrwqu2JcoRPrBtgs4KHZ3kXNQqi6oFE",
  "key24": "4LLAnKZVGeMg2Ebv1NZVHEtbXpUGboWSiTGUS1cZYuhcNdTBcuK4KnBf322ZiMnkLMkfAmDvQrok9xFJ9DePAmuc",
  "key25": "5pFciEAtnt3qQJHdFZKU3EJpQ42g7wSN1TFM3jgkcpcBBUhYNNVueQJ5KVV2w1h81QpZfR9JcgVTCrFN7uTBrPoS",
  "key26": "MGGwGTktFyHFwTbshR9FXuR1ZiYPDd5JeF1DQC223Dh4KZHXx2PUhn8HWGj6aRSRNpRsrDqMiXqkbjZWAaTCEh3",
  "key27": "5Ci1zPnr81uCyWv8fTD8CDn4rBweixhVYDs6vkZXsGNouCZgKee5EYQa7Ypi9Bt4NDnKeTfuXRzbPNN5bhLzBUae",
  "key28": "2HeBGG2PhKBwUDJiraDc9vNUgSq3ywaYpmgcA6QfB5UbXz4NxtnpCa3jU1vbaMAZZWGLujjygzXrHtdTCK3VEAX1",
  "key29": "4g2s1fc5NdcfptqstutWbySS86rDvCGKmYaQvRAFJ1h36pLQVjw2dQ3Bu1nDMvPwKz7xVwAGeJzKU7JLqp9c7ywg",
  "key30": "4f8ij32H9LW3ofqb86bMTjWtMLjPNPipKSdmdHryfiMhEkXS1ZmUfsSkz8vMxtbCsV2iRnRbGhhNdWXNENz6c4HR",
  "key31": "3xJvddPgRLL56gkS2oZRj12SkKEgCgRF2oS4s6BmBj79PTZoZPSA4xqDCus9hqvuspftBTr2FDQzN9gVFdUZgsBV",
  "key32": "3BPesApW7YCULJoWvLEzYexJ6ciE4PnZe6N1j9CnHEzPgMxszjTV7jZjuAYNKucrJWz2anyWuNPg8DnZPzsrXQ2z",
  "key33": "2Dnna3RjEVbbsy9KdYD95r7XBrXeWGdCz21SNgQb9joJaiBKv2L6g3Rd4KoLdUgnmz7jdUBjTFht4geKzLXhUzF5",
  "key34": "5QWnPLCrAYjiva7MHvbqAh6V1LTKGw1brNiqHG7ZERjNALnbt1SRhCRvWS7T97Lof9CJh2E8W28imL3VjGgS1DWY",
  "key35": "4BncgvF2a6K5jW1xXGNTErrRBw5mvDKExRgxSnSwXgxhtHBYYks89DGRWt5WffbT8x4CtDNWi4PYpUzZ2brqTuZK",
  "key36": "35U6qudv9vZyoJCzM4TUMCV6gFpzYtfLMFPmMvFskH3n9gjuHPZAPTBysGGkvFmPzk23GJym8cdDc7TdQ8pMEdjW",
  "key37": "H8bTenZJpKt7dBSNx56WhJ6bHtN5srfTcb8PFgUiEGkeBvuhL4qgknYKrTfYqQr5ASq97fTuzGVHrZVEUx6iT3K",
  "key38": "4s3gWa1Zqg8N5TTJYiPjFGLgipAErJQ7iAuZbgohuvAHckue1tZwzyCmECtqCPEdTXniYpZbUry4UM3vzYvoBMCp"
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
