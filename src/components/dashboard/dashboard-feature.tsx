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
    "4uokftPKuE7gneTFnfAdXe74u8NSmbwMtBjVKSondtsaLcKjWa68nPBCaG5iYPxLVRrc3azPRH96xxDu2rqeittj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvTw2syDGaUC6rsUBBWuYT5WvBRbmEAW4P2Xgt28ohKTJjpjJx9LzRcQWqftPmtUdLfuvPCp46nRADrXANiL6Hk",
  "key1": "iiwKVFPVxVBRPL9eGzoSvvW9VqLi5wCTB5SXCZQYt4FtNCLPXJqWTAhhPBbyrH5M2NxFhmkfZ18CAZLyaCGFLmP",
  "key2": "xz4XXHZRETto4oF71AAR4oxyjFLyPk7LmAyKcXbgErPWNMpop1VVaYP3s5KjgGbsDVmgh1m4VxXwiWrcAtmRRaa",
  "key3": "5msPTPWApfMtJoG7uyxncGYqjRyyfLKiwwRa1reKmqMw5FEjJY42No4UAtkAXrmPvuDZXH6Ynro8gtNuEym3gMKN",
  "key4": "2gvF9xTEqS8pivLqvoZEbv9xMcVdwaFvha7QXsb9YocwiGfG3BzUAAYQpkfeJVNy9GoX2QK5KGhcdf7CBmr1EDCR",
  "key5": "4GRBrewhTgDcGAurrNMtTgnsD2u1v7jLsPSBLfwYDqSRAJQhnsvqPgWpCW1vfuANEguxn5Yu5fUzAnGECWjSGbms",
  "key6": "4fMzqhQoCraUR8x2Mxb94Ud4aK4LZDojdVCDsNtt2z7qUMikKDKCk6o7phWt1EsUiPTXSQnDXKjNMpywi93hsgAF",
  "key7": "o9zKcU73GUbBBeq3CeecCnRdB1hZadEZRY5Yt58wcbu5aNvEmWquYZJ8oCuDcxYsd33LzmW2HxQneKumudccbMy",
  "key8": "5PJEfCnRo2K9qwb7DtRAW4wQdZxddphnZWECJcpybmzbnwFQG8pzkdjkXqvh5jGqhrcinSMnJxBxkbFmswbYfNKn",
  "key9": "4kLyAeyMP7uHHnu7JZthMjKjjChoH2kdkFXokwMDSQ5GzJFvvyCvoHYYPBkfN2ovLxin8DfXpoVZ9SjpG5ugR4km",
  "key10": "2s9JifXGNxpDVgJHMMF6rr8y3aY693MegnKeedrW8V55vCBEGdv7ZVYhm5jeRma7Pky68jsQ6hceCmcn7HBW7Zs6",
  "key11": "qXffnkWSeCtGETFBMcjeFskCC3EvCjw2tug8RxdMJYpJXhhWtEFYDAtT1Yjqzr9LPB2eKGomVPCe3u4jeCTaUkE",
  "key12": "oJ3zj9Mw2mRSptwDWa45GKPayg4xQrUrYdw7KPRp3BLAhFCuWAphsC7eEicYtNwpcRKofsBy8xmzNPfP3UZ5LTW",
  "key13": "4RLBrPtxayUrEDQPGYos42jgChgVExCXocMQrMwhhn8jTmbcij19R7t4R3dnsdj6onybRsMpabJuUT16ao6RGRR4",
  "key14": "5vt4BN1KNYQbhgwDVnrbG65DnpTjHBVTdtbhg8WqhcDCHYv1nGPdvoePeHqedWHzw7cdodEqPu1cUkq2Czxo1VCA",
  "key15": "4kPSgqrpVFtnjTsuSz4R8nYwkNurcyrjyZ1eaHRs3S9hXCi34jYjKDGceBNBWTnD9kp7G8RdDyeorx8tcR5UkfFo",
  "key16": "JoDwfVCYt2EFsxrc21f8K41Hey5txfng9zzVSCYLpocWP2doaA1MKRoBHxAVeuWumE5JPa4k8zH2mxfH9KB7x5f",
  "key17": "578adLFZiEUJh5KTbHRAC6bC8e5ACzocm1A5vjj9TsUTJ3yFBDEiQRwGq3QKMRyqy2wv7yesL7owaLNHgxUpvAcU",
  "key18": "5ZdTgAzkrMEtbivMsjULbuKDUTuBKVAGoWVzC91FwDj21xCKSJmVJhcyWq7NK2vW4woYNLBKZFjWGBmhFqCKTTk3",
  "key19": "2rCdJWEt119pUSvWHiTUxYKCxHN2P9gPNifHC1p6Q9AYdem9FPuoMoQr6nbAFFmPYEctnx5EDgjsAWnP9Brrfav4",
  "key20": "3GPfvzoMp6psYApffFRjVabRL9YmGrb4xo99igpvgLLvJdisaWpuFb4e9dFwn1fCCZSZe6HYhLVBQCwBHavpTA9",
  "key21": "3wKFzA2e6nBiGWg1WhiWBABgtSX86dZJeVYDazFdgKe2grfrTfmDFyfTFjvHT8EYmnNbq27mjQCenWEnNJYis62z",
  "key22": "2VUQKsH4TMwxobMEh79KrmuckMGdiezRuuH3tusFt1kSi7KqfqHgypwdSwnBEFThZCuNEYrwAQ8GyDiNcFrQYeFi",
  "key23": "FetRgHAbdd42hF8BMtC8kSiSeGgScWHvo3iPQjk3yu79znucujCPW4bRRER5DM53MfWgUTygz5uMWYc8sapD8T4",
  "key24": "gbyi1tkDP5L1pYF3g1pbdrfrwTPurDit2CQ78HXAbyxPL3z6ex5cWmpp4HNHV4EaHydviyuoWsw8PXeERRGc2D2",
  "key25": "5n2CCPuLMHuLWEyTnJxyJ4DWn1jVkJrq7DKMma2wd8czYz9dcKyDvmSgt73SJUNXLtKAS6QySTJTRmrLWPwwq54J",
  "key26": "3MtVG2CEnQh74pmJ6qhz8h84ixdr9ovKjFsatKgAUn8nPJFcwFguKZgqCB42xWmREYojujfh7yXAckAFamT74rQ",
  "key27": "3NF4FYRtb1nzv2ZjeY6TFLrVEMwTkQbJxdAzBWjjdPLrPaNuoWzhBWqn8Wo9274nS6n9Q5EqSXAM6KapkA41uPKm",
  "key28": "4TN7A2nkoZ9pYFyWM3i2PHd7PhCBxM5o74qKoj9DjycuNzJwiVrLcooh2PHAjvw1AFPtqzFgxg1NMaD4adVRqbXQ",
  "key29": "p43AzVmmj7JZ2Zscmpptmkzj5eFmAwqEgyyixPfJXRrGTdR4ZXdSNFCDZQbxZ3Ls78LQwBGyzbZGSBaV17JAajz",
  "key30": "2GPyqG8dDdCVFh15RT1NVoFJT1nQGCh1HY2VEnJVCtJnPi4AL77WqwTvCMVQ6PhGrhpVdR8rCWTsBW4CXAPTzeSE",
  "key31": "22aakSgcasHrQiNjayp1MgWffE9ES9vD1kJM9yAr5onSXtmH6xSHAAXsTZnWvaKzzSR1TyGAKmYUeg45nukrAEAR",
  "key32": "5VfR5VdXCiS624zzGp8q3ahd9JfcbyLCKmMQa3kFKeHX1fNnjY9iTAWp1LTugczeksXVBr7C7qpojKf2k9UXjnBY",
  "key33": "2soEeaS3pKVCjogMy34ZYWcmMCAv6HeTfAa2FXaeYiUSipB6tjKDLXSK7CiTVyBSgd2Qqz4j8STWS3SpZqm2zZ1w",
  "key34": "3ss7HFUAng1Z1TD41CDnptzXahHxYgKR68o1iSSj2VhWQwrusuZ5NsVhLeFNrgnAjtNBnrcNVMseZ82eAJYsTmev",
  "key35": "2fK8HSQ2fbyFnmyijsFAUzrpjGSuhbhvftSV42aej1LgCsjzmAudNQsG4xTEtT6w7bhTFtUQB5N77zA9L1n8PzG7",
  "key36": "4eFkYpmgeVwSCrsqmbq1wJiZmMs26vGYuEaM1P4pFNFSTvb6NpnV6iQFvxj5BjY2uSyG5DnFJVTRD1bCnV9jofNk",
  "key37": "2WEiq3aydSXeaHjeA4tCAG9ma8o1hocUc2wxwWSKPiJBrcHWNnjB7i7WvYrKfmBoTVCZgDhpKzH3bx6JakwFpbTC",
  "key38": "WQ9dr5LU2JWzGyFEvtZZpnSNaGg1qsP8K6ycQzths1zHFYWnJFVzD2iRcbcA6T3hnuAe3uBmvRChmdZFt9o3eAF",
  "key39": "5YVLr2k91nyftrxzXKGXGJhiQ7UVgE8AuB8mt9QQCk4XNXhPNbkq2YcvPJ6eBNQss7jsppvTNwk5eDYaj2u4X8DP",
  "key40": "6Da6qbGXNcAWp6d77BtvCGREpwAeeyy1KHcS41eRRmGXBsyaMh6KTieaowMqWoL7dDKne4v2EhWdhoRtBapBKya",
  "key41": "3GUBFEC8MxAMvKs1UFaCy6KHaM1Qp7AS8d5hAToPpZ3wcztA7XGSTUQYNzYrYMWnWutSP7j6wMtuDhFLpHWkAQB3"
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
