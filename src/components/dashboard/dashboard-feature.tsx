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
    "5tV8rzWteBD35hyKgMrrEaiiwLsvXKCsXWkvm77Cnvv6TgsnFXnJ4CxTqjFW8d3UMGAD3m5w2WpTJXBCfVW6J6nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdFUfN2aXx2LifmTxaKMTidk9e4cTDY63Gk4q37VXQSPu9BKgEWz2tVjEGewAtqSPQWKfghA5UVJ49LCGTqmnL8",
  "key1": "ureMVzhsDZpuW1FFdbS7GRL7xbZYd3R23LcZBzxbfmnsP8MszAfawCUsdXr6zQ7743ozcoYbdvzaBXwEN5AseYM",
  "key2": "26pWCPeQv8gBoAKRhaZxriMe9xu6XCvM3v4gKPYt3S7tBawqRfw1pwDqJxFHyWzcczgKYW8H4bR8aQqEBzbLtask",
  "key3": "KYRtqDjjNi4geYe9v5KfqC12KWV6mGkhUAdtaj8BNhcbbLKpefRyZYc4koiEZrDrGUMsUuCAnZdBaQwp7WvueFx",
  "key4": "2gRxtnSerLJn7RDTuJgxbBLwpYbShN5zBLYm5hyHb34W9PwRVqphKyAxaNtkFqNu3NM31DD44FTo3Fm22i3Uyt8T",
  "key5": "5Qa3HfSAYZTsVJX3cwow7zj2fxShTCBGT3KF44uBGv5EyApf9x1uXqc56pYUjhkCWAVKRf7NihiADGQQtRQcuCrY",
  "key6": "247Ca6i6khqQ5t7N575cmvjhATkkksFyj3ozXvN3RNBwcUQKGT4KmrR4tArzEjTbBpRNQccWAFRMsXF6TkvjwaTM",
  "key7": "2uJi7FnA7GMTWCctFhqK595paGysDaH5k4iEWSg75JoiQq9BCPasC1iphHVvGu8qLmxqiMCTGvShvnpNyfue5HdU",
  "key8": "2MB6CiF4Xn23ANsRJshcjfwuZckQFWyPPrgWbspS8XGXDcaSV3A31uwpaMzQq6ay5raqpCcPAfVkcffk3fFQQ3uA",
  "key9": "5jtGBCtDJoakTPnMCF9A4RRKNAEEZkGVzcgeqpTiVm2gSD5KDWJNVFC8rU9tUZEBY3DoHjKqzkNRLivFHMyJrh7D",
  "key10": "2Lkx6k3V4cE5APYDt7Lhe34mayUDjT18sNnjtM8pCf1GkXdXQBnVBe6HLVdnzY7Pr6yU1mbC63uY4hjUkhNdhxVV",
  "key11": "HSh1s16YeBoQnMudoU79m7Vc9g6DPA1ZZ4DpDTPD9C7ZqFP6JUu2csxAokf2yyrXNbieodznq38e1GWZxpdMvdC",
  "key12": "4NQPuoEkTZDNsT55mxFXUeZJ5ygDNaHYza18EtZRZaFoEfr2bksHB3dFCZ5LFyxgUN9dFMYre7t3yExhRS5G71bH",
  "key13": "3rprADivX3wZdXiDAop2eMFT7J6nsho5SCRdBaKBrNNLcLU8EVT4rXnogRFaMXCgLPgw1SmFtTsBWWh4ezEHQBgZ",
  "key14": "45zsYSc3yTuvHtxKkCQkciTUxyyJYSnbKnRFZ8LpiemyN9pCM1mrnjcR3yEcqvkrNjiVTCUyvYvzTEbLifNy1dFZ",
  "key15": "5Y2N8b7UYWV9SCcck1ataUKXWV5MLyVKjz5wh6HVEfBcrgciShcvnUesHRYrWgNVKJ4Dg2Ryvo5JJHambn6uHjNZ",
  "key16": "64udR9DKHSKoPMVfb3CuWfg8AiTxznqw598amtK6hZsXhY3VNWe3Y3ziDErYrV64pT6AHTa4oALBTCC73GU2DBGN",
  "key17": "DxwGb3RjFzGdqyX7fFv5hY9Ex25GPfp4saNAM1dgwFRdRjaY18exoTkmhf98Dh6FY1ERhNoAie14Qc5oPcfanMV",
  "key18": "APEeUVdVqFRWGUfnUerRUidkryvDFTrpdVTWtQBTzFUqfPUdCvoicAN3pEYYeiVjasZMNHczF7y3pqrBGxnRTrx",
  "key19": "29RFvheXrJM4vAVfbWLSsWVCc78pGRQYB2rJ4viZJAAC2nXWS5un4oVv5jb71dnMHtGk4BmCEZK8HZ7Gc3yNRwh8",
  "key20": "P8h24GFjbivg2cMBNiLZez3LGfcfW5LqmnZyQvonHkiYkuEszG6PcBkXvWGkLScSzFXV6Sss5G4JFhfQ5WzWN2x",
  "key21": "5ycX6ukbpt8NPiqo6zn5kCzLRH4unDetuW31rRAnvdeCLiDtCQJtbfKYT1k22ufERVo79NRCTqsu9m1siZ8XAMnb",
  "key22": "KvutUDBqzJtN7gvTv2orsKAeSWVoeTmXPC5F59RFfe4KeKQKvEyXyQjt2gVLXEVG7K7oAHYAoBfmTxmTyaLQvBH",
  "key23": "3uij94qn9MdYcT2zSaN93dsf4pohjdg6eVxrAVcxpTJsvBN8R3DXbsBYucxg5ufeC9QxtSNJSjSUA2NRShv4sbdq",
  "key24": "5T3reP8rRrVXGix5P5do1yEgeQroxeVFZzy6pt4FxxxWziBeJJGhUGxyKD869JCd9gY6nVCEv8fsNAiNMFZewNEg",
  "key25": "2we2fTQXySU7FyLzruxRsHiTjDTkP6cGeycHNd7jXZLSyiFDAib8exQPg88L7M976fcEKMjqDBJYy9XLkGuzEabF",
  "key26": "3sikwVEXVvwv1gSuMcwubj64UELtQ9985Wiu8SsZwin5U44WAJ6JfcQ13biCoZqj79xryNX9MEVQqq8Douak87kh",
  "key27": "Nt6t2vPgwKoSQ4kyGRm9GbPaKY2s6NXQr7VDKE8TBHUYVjYhgRxYDvLA5DSomDMw52XW5NjkJZSZfQ2Bxgun3P8",
  "key28": "4dQYD5tkpbTF9waYyDqwTiEwG6hojwxnD4xeC65EyTnX8MDVbxMUtP8ATFY2rFcLSz3fYkaHpNbte6AypeuQUVaV",
  "key29": "37yLxWeJJ93gCza1gjYHvfoHdihPCiFsR4SrqXSZcXy2TsXG4n5esQR351H7Vyj5LCdwDiPqZN1nY7tWAx2MKqJv",
  "key30": "2U8oLnn79GAe77eLcrJnnJfN9U5vyDe7ycWj1yWFXCvdqEY5XcwZ7HgaTywApdKikdKLVoHLGqKNXdW78ED69Zc7",
  "key31": "d48kgTzuB7TpL8p4uUhFRwQzMMkSNaUfKyS8XzcnukgjhKjurf3CDbwx2itYZW6DU8buJXvXSNYkCqMnxVeHgmr",
  "key32": "4fyMdHFX6NpJxMggRZhxmUtBj9NqZziENHosW7z5P6gAf2jSaz5oUmazz1r8E1qnyVnXhVfgYYGLfw9pBWgxdpz8",
  "key33": "5Qcq3QSCNhQ7Pjg4FDVkk11QkE4WBSkuuNv68j3RazVfNiwN6SgCCQgb8xCG8zsxw8H3EJ5PE7zXuu2Zrn38PQdy",
  "key34": "4ZGFPqMMYrPdvM8hJY4Hfhgxbec7nFDHwDhLFSMWcThCXNmFmExGwAkcHXnGpqDg83zvvf5w5G7sdjkUEE65Pzms",
  "key35": "3MNwtye1ep1jho1X2DjQqQ26GL8Nd8Yanh9YptuhuDXw6eMKVPGZ672sfQ8o5pzP9XrpvQY9eFdhSbZQn2J19vkf",
  "key36": "5pgwhrt8um7EJUe6yqzJRDVQSWQCAur9VDZpKEiNjXrMv7gVNnMvsf1QabJpWdrRRhN3zEkeaeXMdUEMgb65d8uL",
  "key37": "8PvpZBXCH3tqi8kcp8vNfTysNAxBkgjHcUGQr6vCoRn3Nm1pYovphQe9hwpEi51PiMaEWRLgNRP3YozNCNtcVQS",
  "key38": "2gAUoTvZ5n9wNuGVuCvoKCdmbGy3r9UCevj4MoW5sa3B7TkDW3dn69BGvkTVHKJ7ucbN5YoqYbtpZGPCZFMmbX8d",
  "key39": "FfDVFaBvJUwH8tffHvGfyg1VWn4ovTCKsSnxB4FbwWxDBdtiZRpgbdPo9Axy4UDrJaBEFk6jDrFrb9pygMJdtYQ",
  "key40": "5XdtFxpfdykzkYSvmJ7t9NtfTCGx6jjAxXkZxnv8KRYFZy23CfVd2VEkCGAYy6zCaJAS3EoTfNwMQPpfsRXCsyJD",
  "key41": "5N4RjBRbwwYQCsVNGFFebA6sYiPZKC7kt5hvNeL2rro2gkWADEsvGsFmpjhxmyM3SampN5ka8VZnWrCRnAYhw8Sm",
  "key42": "YLb2RDKnUQQfeVemRyX6B2SohTz71DcqjBMZPfKmoQjqnqg4WC8DNGHRgdChVb7F8YiiUnyUnSquFux2E17p222",
  "key43": "3BenTDNJCWhFXEmuaizFjoSxEp8Kxxne2wdZ4DvoUFf6T9Q5yebriZNvfTdnFsfq6uAXATAznX7H85uduZucAqXn",
  "key44": "5U7CTMc6Zg3VCpLHgoTzZG5UJ9eywc43UgSNSPuD3G9PTiLcRemxWS4izKEzgbrp5u8GcPucbba5wQho44kvKc6P"
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
