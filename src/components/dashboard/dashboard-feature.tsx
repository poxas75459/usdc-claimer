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
    "4zBzPoaFjV5tzTZviejyxWFErDX2MzaDrEXVAESzTnVJCG2xqfoo447qUW96P2w5Q7TrYaHLdEn6MLzNPYSDTryG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gyJK1HfwSmp6FC2DkgDEYLLhsjAy5u7Fg8r9y4SuGCeEX9RfarU5zrkLF14wCvtGs9D6afz1DbYzxLcYPHFD4M",
  "key1": "XNS4SR7BUZdBoSvV2K5GPU6GwWRyQuvoErUyGxn6Jjo1FhHrr9qKdXd5ppa7vva6N24WGjrJYe1xRY379jqL9HT",
  "key2": "LXouFN5b1NEi8ZwjvPys35hH268t6LYui8AESqu34KTvNSNp6fgpN5MqDtefBdpk5HbSKpcc7yhpWr3SsMJnwsR",
  "key3": "4xwosudJKZLGTjTDJsUj6sDNNcSxkTsGwQ4jPxh8NtpwQGfCXHqKJ5QP6u9QJyR8sLxsniCubV9d8iTcr1nRcnxM",
  "key4": "5QEeCJTvNkiDn1tvbXTxpFBGMXBLjcSyNB7LkuHsvDjX8rDgLmiiCZB9aKm3EEcAD5jokttd52hS2bQ89QhKBN1B",
  "key5": "556Ngc1sRMUV1dxK9DM1G9jBDUtmaTLnef3nVv38Fu99BGUaqdu8SDU9kjkF1CScUZajcvGUWqb4sEhcwsPMgpuk",
  "key6": "5UFhjMD2kugg2gpnBuf2BuGrM6QtLbqeVebnsFGwWpJbpjKXXCXk6AetaKqmL2X87ddejWCn9L4gpNiYW4sqzfKK",
  "key7": "2erj7BWpLjNHyakp5zz3VatNeMAZUFjKTzqyt8VF5DNAVZiMeTHuuuthXG1L4Ankzh7QKdiKAsf7KJsHLekvDE6X",
  "key8": "51sEEsPDFR3s43AzNNvd4YACVrEMxx5qBD8gpbj4zpMJbc1AvZG5kaDM2a34B5FwZEHgwuSQmjbVXboGHxnDYLHr",
  "key9": "2R5cQwPrCpVgDbg5Z14AS8WzaBBJwZspMAccwEsk6M9ZhDcZZQr993jkJpnrx212jUYP5bgkxXMio83cDGHS1nnp",
  "key10": "2G82wjhQqYan4uetNEmJeuUKA1jHmjYqSDekf5FDabhdyvcZSbQc3PSoPKLgp817zhgXRRv46p3u7ABHPFFa5Z94",
  "key11": "5kiMCRC7JnRvrczeSf4y3egwQ56jQrJdUXsM9FmDr74jeHcBEWR2M4XCQvZVy6tVtzCjBcWQoWhZbrfTSd5x79Tz",
  "key12": "3jMtACRE73CR1CzcfoKrPcK4YaXcoigbZC7jFEjjfNZL7pUTALjsYkKCYj3Tz6ipGUF3QheVNvtZMNJorEsH23FW",
  "key13": "2xAarxHSeLduEi1xHuucubdHSmNayctex32zdUUwGQg78mpKT5eNjh84WTcHv7sgwVqxRbuznbB4ApAnAMaV317i",
  "key14": "2RbdJnDeZu3JxMJxWV138VmfTmJu9LV1TCtdRG3Yg819JCjHRbWauJVdj5TD7j8oGHRLoz5JnaD9SZfZpj6nxf6N",
  "key15": "48GzNygNm5wiwri4DrmBPTsJfcu3zxqrrnjG4KgaP84vehXVzGVyCqnXF4eYurgEEmsLS3ZhDufUHfnnneKqwgJX",
  "key16": "46v6Udoei46X7uJPHCAYUFerbMg3TKEVMj1bJwWtU5fYwPM4QA2LwevnPV4DKW45eGUTu8mWGZUJ1MbK3wAHimEy",
  "key17": "4e7JM61Tqi3fXL5k7HfP2CUJvmmVsMYwn7N1oM2mbgA1vhFT4XxQq5WQDLar3BKyQzzV4CekLiA8mjD4KfC4Wwzh",
  "key18": "4yBuVctYyk3BLztgzQzF32HExPodW62AbKq8nXYkRLJUY18PYubqjMqG8RMCrr2cHFv2KmAJTuAhoxodTuY5jVVw",
  "key19": "4CgmySFb2DTGm1kVKqRp1QabsSVGC8C8aD9EirbGo7CrNfRcPuRBseQqNy2yd7abZTzi38vpr8bQRT1wPxPap3oo",
  "key20": "RKwhwdnwCj8EKhDdExu8rEZ1gSkBbvx6ngfrFpCBp3B7syPFTacDra36X4BXpeorhbJWsCUgjvWtRNA7GMzPJTn",
  "key21": "hbPauyXD3e9mcK7T25ucX83HTczpUnhwCfKxi3DekRKQmd3Q3YpcTGSmt4UsAgqWPe4XsKRS3f81r1Qt3wQrsvJ",
  "key22": "2i54hvdRh3bFynqAp8pB5CWC5vgqfbCpbyMRmBWtv76cydzyaQ928Sg1rLzcZVEeya2xGKj6gS8xmGTPhx72a3Cg",
  "key23": "2q2edv3Wsod6ctjLuG3XokTm48bQ6qbioDnnT2FHoa2gkyFyfYFYEAmANpAiuKaBKZZqPT4dvn5QhLxMa6VuzVJZ",
  "key24": "62MHXrYayDEZ285MvYov4jFYuA3GmN9LtewMzFBLtiYxUUt7YhjtKT12KF7NkFoKxtW8iDpuYF6mbWCpeWprB2an",
  "key25": "2gzwdp8sHUYUdroeRRK1M6ibFdSheMPUCorXdZykLSDvZoNwevPzTLf7jBA5cEoc3PYDFzf3WWGdxCRCju4nE2AJ",
  "key26": "4mNptGm6G9Tt8p31oFy6cjXrnKkEzqVXLXvdZ8dXWV66rSTPT8wQfoS4wvibuQt98fUFcz2aUVJjzX1WyTTSN7tZ",
  "key27": "WEFu3xHCjEcvWeZY5caZx1kxpwBLgP5Jfg8k9wG2bbCJzFtkcXGaZpCAy3huCFsRBmSDrWH2uebiZxhyVHdEQR4",
  "key28": "4ndNTsqfPpM8vQppRPGV1SshhKfrvdha5PUEf5gBkqygHVL78gH6DMHXEbHakUgNAiESqhvUS7MZtJaVjX3UHbWs",
  "key29": "5qTQvTtbDGAeyo9f8mtNG7wScHQPutgKGVRbX9QmthD8sjmSZZSABdiQdqCoBhaewLf2c1xs5J1nC8rKCDPTFfMy",
  "key30": "52YihjKvTJLZhVaAfR2kF4a3khoyZDD2jmaFSucPD4EUQfzenYRCffZVHk7Yc5H8UqcGmafGGuwm9Q9AMfgukNcs",
  "key31": "5WZxMU37kurongM5jkUFuenm3Q2YLWAjxLSozQ2hU9ZHWfK4uziexdGrx9Gic92dnD8qFovVrJth8CZ6L1yV3Hdp",
  "key32": "4qsD8NyBWUwFA8qagFnaar4p3zvgJ5wi3d16VaQfE5SxATCL5ZLQUNdyT5mVbZMBME5yADTmpHn3UnkdP9zVdAzZ",
  "key33": "AcMgG2yvMra2GqzStiNKP97iUkjNDYbfCQeYK3bZqRFDVbEEgtHSsfZpsZ2D3hkKzj7soy2pFLcDoVmfcR7LBp8",
  "key34": "3Xk9vurfo7pJXQTgVFYMqMpU1LJxqPKyFJHTBXnEoNGxGFVRzveE4eVDLqK4i3nTTamu7Eyn9jRbnDcHRnESJZza",
  "key35": "2Stzb7CfERWrCacpaWQ5TsdCFiqw3TWwwS55bPuqX7YZKRsJpsb5q6FTbNhVs9Xjfmz6kxoDSWB5JoCQU8hZNxFU",
  "key36": "KDz4STKLKai6SafP5WYtiUtYQi59Q49BAL4uax1ZgjTWdrWZcWAhpxW8ey9igGQ7odGrsuAjqyefeZL7jaLZc9a",
  "key37": "65E9tst7k3bjVSuGXzucpDjvRnWskc688tDzHXjx8hhtH92xdAaCwPPvCqvJLbqvvetmyBy3ShyXZmAY3rYyWRAu",
  "key38": "tugkagU1Hp16HPMtG1jnzCZ8A2YPnsxLZYXoRFyuv2fgzyy4GaHp22LXWhC8Uz1ehaw56jj9SHuPf6Z2GZ4XK1T",
  "key39": "52ghsUy2KqTXaXPPURLCiRhm7JkSTNgmAHvrefhYeRTURAbibF7hfxRt2B2e6tWMHyDF5nvqfqjRkkkpLvb6jYE4",
  "key40": "UugU4VdcoYUoi4YHyDt73obhzHahKu1CLKHbxDe2SYwD2D54Q8Qv7kCfjaXqiNEdM13psghwnFmQcaVH6H6eUwi",
  "key41": "kW82dUNrrfk3TkvLBNDHv6G4voA5eqSVVzqMkDA88or1b5GWCrW24rFoUMX7x2kTgNd5zmk8gRGtdd5fKqcTCwb",
  "key42": "57e6Gcj8FWyBj1qKerjYkeKPSWnP5kJNK5jTQx5Wcq61VRvC7kBDy8ZdYWZiTZCioKQA3ANcHPaKCDt39fu8VQD2",
  "key43": "aDbMXwLKYunvLnbcpz1Qv23rBNWo4hozwrpH1esCcUaPiJ8mKAWqs3AifDJcD2UoHNpLHb7eUgV1WAyfMRTfVgF",
  "key44": "LkAXtQsFES8s87TRKPv8bhcDkGJnzL1hP1gyjLLicKztYVneFWTeVNiAT74wiFzW37tP825YgikdrxipoLNi3vM",
  "key45": "4EqDCZzrKCKDv92uyWTiRgDEEprjS2epiUiBhBNfBiQKhfnCSCGEPDf6FM4ETyePUqz74WYKrFwbjxmCsotGfrXs"
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
