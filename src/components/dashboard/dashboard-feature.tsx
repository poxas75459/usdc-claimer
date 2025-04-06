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
    "NvraCCBKmEy33K4xioyq5AtwxqyS2k54eJ9uyFUDpS1FtHvt6wUnZdBgqZtbEQ2pMF5J8wfQWkMxxqXJC5q6MxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJvZMrPdeKMm82XVJUp2LfUxKfCuEeLAZeoXG7nWKrEu21ngVbvvW13VUNNaZGQWmUDwcm6N6Fx836vyM8vnfPG",
  "key1": "25b2Kosy5ePp8Vdk5Qxm6cq3oxjFSYPys2KPkkyn87osHZQfBhXPi3xNqAC6bRiBqA9dcbSaS6w1gLbMd1AtQYX3",
  "key2": "3q2dzAMSiPpPzHmzpciYmJ6PHHFPavR2FHw5RsRCh392QTrPUHdPD5GtKjpoP3Bs2j9e6C522YMZbeeyJvVKELKk",
  "key3": "8Rn37r2dNJeQLDMc6t2H8iKevS1hxjEDujVGwANZEdGJdAHnk5e7j5EzKSamr4LWV1VppeoECwkucVcYcNHvRc1",
  "key4": "3q1agrHyKMNaV74HW7iwJMs2QWE2ACDEBRbsQePH2YSbRiuAnVfryswCDQaHYVFUzCpMGdub34mMb4drN8YzPXzW",
  "key5": "41uAMvatniCzDUW7sjqphDB17dBr47EN3ijgmaJjRsRZScotDg1UTwDNdXd9xAEkC25qRzqkcXrsUjCJq25GAgbR",
  "key6": "23KJ1HmVEk1UqyGHs8MGJfv6W48utPN4TzBL9UgeibAwGPcppeKypnZ8v7YaQuPbQcbKpC9yMNCeoKC9CPbM4sYJ",
  "key7": "5wWA9TiTFbLyTGAipKCG7XR6kAnr637G5Xw1ct2SCQX8okwWHn8SWcU7wySJndRdvAziJbNpwDXejvskSRML7V25",
  "key8": "5S7R2ZWPmjDaKz3t1UmH2qhaZhy98w9D1RFfUntxo8tkLs7AK5w3xUq9JN7AZwBYSjF7b8YYEfv5r9VCxCHH5MuV",
  "key9": "3En6uth48axySY2AReY6SK5bupusDqk5i9DbgkmEAkiHv4XQBkxTwcE9PG8uKPuBQ9ZzHbPwra82CW9vg1V23y3F",
  "key10": "4bA38cCF4gdqunhZ5SJFJTVaqmLDzBouYPRawE2V6kYEh55eoV1hVW5ahXkkYtR1RkkvEL4XVePaLiYk9Q9tvm7X",
  "key11": "4aB5NdNaArWwcYLADbpSWEnguP5Uvj6bAJ4PxjgqYrdTFd9AHiqpNqjcY2irxgWgufj43X4ek1tyt17JheGumKxL",
  "key12": "NgS6yZtuajomrctLyhwywS39ApUik9vJXZ41K5N6tpKN1NpaMqEE4iUoJ2BUKtnnaqErFBzKgChJCLbuuxjWJtG",
  "key13": "2zVpwnoienAfUoeDAhRFdTBWjRCm1LG6oh2XHpgN9G1VLYpGuc8u7r36fSzR2pRhCdYdUk3UuryLnKC18vFGaBkw",
  "key14": "43nrkarGiXcUyDXitNvRtRmV5L3GqohBfSBKkiRXDN64o9UY66RQFf9Z9XiVxsq2WWz4h4poRdpWgRLbjdDz1EdE",
  "key15": "Y4Z7QBiayHR4ADT2CX19D8xK5gwPconnAnXEGfvkeu6c5kGJaYHF87GDMLu4kucfrnPUDpewkz5meCQ6Wbi8AB5",
  "key16": "ftzNomin9YSJbCmDqhDd4PCC934zgr7tQkHBx4qu76QKAaphFGhRvHN5ik9oJfQymT2nJcpYW8h9fYFkmdMCnfn",
  "key17": "2NZ16zZZRRxm1xnngVRTEQBnpmy248eJy5Y3Lq8s7dtqN6E7Ym6mLvmjQopDJTcMsVNgoFNzHYbbRrgak8HzbMEY",
  "key18": "4kWhXwPRLUeitnxSJNteSUM5bAo3jL4ubTSGbMXjQ9QNwYBRAqEH44kBR5ZgEXSNByWtRFfMTpQV9AB64jCSEAkF",
  "key19": "rqqi4M2a1pBBRRKiVeXm5ijfgJsrQuaua1PJw4WsiPscyouPsGxWASnXbdkkcdU1g9KWroL79hjUid27G4P9v93",
  "key20": "4sdPXfihAMNj5XTaX9KDqexJkWWEFFtyf5pNTRNb7umfBhALCX56TPDub732ZZLXtWeVpBxTGVvm2rXtDNZYvgJc",
  "key21": "2cYbg42tcr5K1KXygqTkpnRYD6xffzTHPWRgAyRG4Li6SkxNeG5ojYND81WYuCHUFQUxfmi434aG6DHstjzJrUUY",
  "key22": "3avpuzQzWiDYGeBDrQysECB5VZEhx7qbe1Hc4e383JtbsmdDRtJoLDGpHkr4xYU4cPCLnT6QB9Tvu5qHGfoyL2iL",
  "key23": "5sfQnHkJCoNWrsHqqttrMneR7vaPE4SvXQK5YPhybfN4nLMyfZkcDDeXEJThF5VkT2nqBFh5oPDG1nT51jWVP8n8",
  "key24": "4bNJrdCs4Ts7N7MLX6piz16GJRTH7F1ZwccSsVfV2P9vj4RVjS8JYpCC979yRUwMsmQk7dtiTNGo9dHpgoYvi9r1",
  "key25": "v3Zqtjat5nX5y3n4Gdc4xLmzCgUPXitn1gwQFmse9V6jzabPkNkLwuS3dDQaK2F87K9QGKH9MZYGEBPVsvogK7f",
  "key26": "596SnuvtppPRk4quJhnD3HxUxKwBcsmzn3RnbqGcVmJ7eXoZX9iVagZoQK14uLYFgvbbTaXKPkCijQmHHZXcGZXM",
  "key27": "4CbLShVyuKmQsnmNPQoio9Y69KNuofpE394QShkvvwkjA77tjbEtRghYq4seckaoJwYHvRD2qQQJT711SKDiCMqx",
  "key28": "47Ci2Rv5VUfSL7Kec3NAZmV9nvzv7mLFXVAX8YBHoAjs1tYj7cG2NsyQ6yUnzF3WCgsiZeM8pTfBMXNFcZFAT91P",
  "key29": "5zkb8pz8caj2GodS3nPsKgkf38iDidfJcBBT6VVFMaARyaahZBX6Tq4isLU5QQLuBjkQaqmnDkAbSHeq9kaf8nMF",
  "key30": "2JeEEmGH7LPgMABXnQYkgKZEhgvkHuFN9oiLNa8jwqjeeZgeQ31aJBjuG4Xijz8FHTDdbb5XhcMA9ecF8GVm2xDL",
  "key31": "4bVqEanSG6gVBhWmN2Rcyec3LjjM1mm6o2Y8efycawYSyjXVTymjeesq1TriXGSySErhf8q4558P8iZue2VAyFwx",
  "key32": "2kN8fTf9tkDyrfxMeRi3kyTDXd1S76BU4GGjJiHxpyMBmoYH1djXVSmAAGEJoXQDXfsqrrC2NQ6jbPcKHPucemWv",
  "key33": "gp7GDiSTMuRcUhqWHV9dy6oTh7vjUDSYsHRHwi41AVvM5Tk44CBv5bBbaNr3wq7c8enRAZW2h7DfknC6xRcsvmN",
  "key34": "5gUGFpZvEjTk2fuju1FEDPze1MeYRvSewNtGGGEZE7bdiqygs1NCEcoEs266rfzxRMFGFNzHyrA3qcuKDJA5x2bA",
  "key35": "2W118yr3NhnSj2f9qj98cVbuTjHwJsygJqZJxxg91WgRoMGDrVTEWT8kcGdFsJZdjmQeo89X5yTUCBLj5P7mCTj",
  "key36": "5167KRxMj8AfzQRD3X62uRyFK7hfJzpaE9iLYejn2CFccAf2d1xNsnucCZkhWJ2ochvdtwAtJivCevc7V82keDhT",
  "key37": "3JGRmHUZJdsj8S9oqL4HHHfsbzrYVon3Edz4gvdVV9BBuGHjoZDjYdJq53ypNNX6ZbnxXqd1Yf35Y6mWeqFeepav",
  "key38": "4vj3QJpj3HoeiioL8VCnjosMwD7kgauZdjBTGGjitN9SWAYhSDzxm7FSpw9XXneztAvtfNXUBgfqWEPBJfPLdFJU",
  "key39": "PyjXe1WjYEpStohN77QzsnB9k8tyt7WjrMHWu9yBMb2sje8fShwj87faqAT1eyhxLPqTg1c4S2WVqoCX9wbpYqX"
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
