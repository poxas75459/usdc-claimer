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
    "42c5gAProG7tj49PckbFN8qzGCA1wxfj1haZzVBn87uAmbNXSCNd6gGfN4QAGL6Fb9rmNja1AXjWgbVRvv3ZvSkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fLJVFRYbC4bdFK25xAT7S7CrmEedZpMWismcM8yG8oRpMgpcdSR81Tq5hubKkALrL4SnQmFcH9u7iwfCa3fVKdp",
  "key1": "W93QGf3WywmuhVbAjLNaDwgy4ivKK65K5h8JXUQWcserqwBHM2qsWfKYR38geyy5JcA5wahYgGmpAXZzdmxKpbR",
  "key2": "1BRFKT8aqkTq3mFAHBFnyrdFKMovvoQrx7N8WFg4mpnYrkUxxxqqRQEW4KoXmVb8cupLmugf1EqbFsHTfYpdov8",
  "key3": "5UrGTvpCTfeBNsG87DaExBrcJQz95vEMhJfFNxfgbwHT8DYuAaCBqCLGaZimNrzyfgwB9gKtmoQbh6ZJ8QrnzEpq",
  "key4": "56sbu82MteiuAnPCqMDBfPL9QJLT5AZewVHHHVzqRpAuiGEcj3uNuoyHpFfAPfCQ2iSb3JJy4qpX93qPfoqNk9xk",
  "key5": "5GrDS1xumCokCPL1NjYAZz3CcGQVNayBhWZMEUhfDKZoiVS68nikhogvzpFQUTZfMDgSom3t35aKmmzxGQkXth5s",
  "key6": "2wGHWpozqE2Pc6j4vTbUrW8c32YCPKk9gomBEEptSzQ1EgZ7Ddor8oLQjJoCFkSHacDBZAAtWveR5eRAgBjdvmTL",
  "key7": "5pigGrhKxXfkKoCMxK4HhBhfif1bLabTNRcP4JZAWiRXM2JVXVmchce9TykyENmWuVGsgmddh1oaEjQz6pst5Wr5",
  "key8": "4ATRex3uNTd4yZrJFKMC6NHF9FMJfgzd2NkYfo5m54C6HcnLYw7hzSP7wHCeW9Ux9CGC5asHoiVRTgnzd3X2M1dq",
  "key9": "5ygpjoisQkxbPJLT59QiZcrPbV6vLBqTgwQVsB9ErvZZzUNYNhDj1mkq4cK3ZkBPXUaZi6atG7MUownuTokBnGTL",
  "key10": "XzG98WmkLpejQBJPMBQpAyFAGVUnbicSDUJC3Q22D7YFDExLJtLJYthw2d4Ra9v596qNHDGfSq1mFiYu2CW4qkr",
  "key11": "5oaGrZgiQwmZXciT7AsPv21GgawD6umFV5ZGi3AEaLQysXjEywfWCL2JgyBR3vXmRz1WWPSz7qkC6dKkRkm8MGqL",
  "key12": "M9FzvN8HGVCEZJ1GwCRk1QZuQ6htdVVmgb7Yjj3tHn5MWuzfNsRtUbWwDFT9QnkAkEidgytyWzBfuf8doghvwMc",
  "key13": "3KWPFURDVF9ttA9xkFTPXzTobxAZWWKyAKFk68e23Nexkhdjm1Ub7tGSSbPzcX7acxoK4r4AQoUvkygNkpeUoxyA",
  "key14": "4TDadzxQo2JWHrKCPAoGPEftZUqdP48Xri2tab9SrBigqnRG978kpDWe8MDM8PS2y4SScZNwBBXSwLAtgNz5HfNv",
  "key15": "5PM415w6pYDiKAmRATDKLReos9ks8ihWkuaa848VbKA1KRHXJLsmp62j19FyPnSgo3BYF6RVr5cLqJG6Tx8KDiFN",
  "key16": "3xK1sSiS31vUYJtohPyCm8q38SkXE6a8wZRqkrP2fijH2hn75RofwwVUS2gC9ywgnKsAWR3eF9131ZB2uBBojNxd",
  "key17": "4GB4SfizBd1caJxwrWMDvg8UNrAgocTGdMCWYzCDeJSPTWTjFQFtWR6jmQGoGMZjGy3AsusrPAeodyQoHPw6HYmc",
  "key18": "28NUrBvTBYoxawxNkh1RbY3yrUevNsCevQDQkDFijRC9M1NprAxiiLSAxeVbsGZ7M7xe9kYUHHShq8cMv2i9ynQa",
  "key19": "53UcKbW9pyRH3MNK2qz4wtAumHJefm46viYTLsAyfY8hAFkEoawDVi4TiFzkJAFd8LLU2pyyr4bML6kQcEEgrKbR",
  "key20": "2e3rXtBrqzuFdHC6ERgvuogEZxgwVcucwr9AToTs2XGArqtG16yEfNZuxxyoyNet1xDGbseHkgFZejEWw9KhvnfJ",
  "key21": "3ei1dAtoKaD2C5KcsAixp9W6pHTYkWsh4bpttfvhsViYPPovHXSpeKjc5SrBdStmHirP6AztsQC6DhZAxaeLf3F1",
  "key22": "2PqREVnKE2VpXNL9ngJjUWramEyju9yLqfVKoPsXJ6hVq6jzSJvtiuXPsm7USpNYeKNb8Y9JW28eqEgTTkywmFMw",
  "key23": "2ch9ovxGWGo6Rg4u75nEzygqNknnMPcSbARtaRoFeCUeFhbLEYJ3AFAtfViPQxfwbs4KrXbG6bRGnLiuP5xawhDT",
  "key24": "2LvpBDbCheQaiDDUjPmuQNBDzC2Has4kDAGPkG8Uwpx788VBx4uTJ2PBrLPyJ1KLAxBGvxCBr1kkAgeGe2m6nq7i",
  "key25": "3bui9oP8b8nG9WYTxupytxh2eX2P1LD1AFpQ848ntpZ3ZHcNK7f6SLCikkKZCop4G8JSYjmMzzRuFHY7CPR4At53",
  "key26": "495mN8J4pctHkbSWwzKyL91SjHCXhD82dbhczDJcqz6AMizAR5bKsAcuYWCxAhpbreDveDWudhuDQy8tjfVBh9r3",
  "key27": "2PqkY4S8T6WKnc9vGrtUwNxXSRMUsgbgY81iMJPkgMpAg7hyXdUC6CoCevbVcUtNBSYcbejiF6MQ6gWXPvMKVeAg",
  "key28": "2PuB7F62AHX42FJTBTcML12c6CGYPRUJDDGJGrmwGjwStpBU5ExTMo4FRa7ykkYBEbK8tb4FxPCaJy2ByBbXVRyV",
  "key29": "42VcVCQRM6AYnUZsZ4PHNoXDC2RB7mVF3EahwfK7hKpEqpA8n6C7FsxonwoLb3CmKCSVZpqngUjsezkKpuWsisaY",
  "key30": "oiT1UmuCzBFsjzJtDfsyhYYFEvMe4YQL4K47qzPrvaGmKoWRpZ787UXKuwHBxgVSgT2bVDv1PGBb3b4YgtTHFm4",
  "key31": "2SDHWtgsVmPnRBwNoDgsLPQcdaBZSGrLwiPgS5iLcK6PssZ36zhRCaQ9s1SqDaK5qSLuJxVwRBLHskfdSH7Jj2C2",
  "key32": "2gnxwqtig5itbA7YVKMUMZfBuBJAtFbqyiBXiW56nQ3ibANzzoonxN86We2C9yx61fJb3vkCaT9Y7SMpjMR3QgLy",
  "key33": "5ikPsj7bzenr168f7HghZW7H8evgjsycua5K3xwkAed1uPtpMGULwLeYpTmPyfgoWEYZDegN6yhRNXqcMJtrQnJm",
  "key34": "W3muBpeJQLbXpeC2ej7MxXWKHGMavuhcCCfBJ1R9kXQwmci6fTCpUHQCoWWHaVFiDE6TDG1Abx1mrZ1XBMTzKNx",
  "key35": "4W6W8DjzmYYWNtDyqLiP521efPoGmkQcGqwLz3sznVujkijeWAjZSFbpFCcryL72nKCyURyCkZVrC8YsbbwFBqiX",
  "key36": "5WFwrtisteSP7ni8Ee6113EBvhGEnjezgycZnuV1S7tnVbxHpsd82pEihgtVMJ2rmvzaD4gFdDmbsqtMFbWn3SDF",
  "key37": "2yusti9zPZxFPTjo4fK6yWcHNXZn55ySc9QNyXMHTz6kmEskhqVqKrWrA4TKxRPgbjMUSbtworR7f8RN1aWT4Tnd",
  "key38": "1k9UDaSmE3x7UhZC57QHTZXPFg9ByYBtLUT6hAHPRdNjDTPQZxMvTsqmNAEUqCyV38xn1kDVFAsG6RiM7WwS9Wi",
  "key39": "46ztE8UBGQsiCx6f4DkDUaC3Qu8V1TW6PzWUBBUCJbgV2vUSR9FvtY1WyJVnCkVCH7vgqjYoHRN6h7oFUx1iPfgz",
  "key40": "2o26R9MJRzz9wx9YspTwk3u2xuHxrWzrrUAuXy8DtWR5Q9MvtYB9k59ccMAvGsaQqAzNk6Maf8REXVKLWv9frrMY",
  "key41": "5Zr5iRL5LCvWgrJZaimXyM9fCFoVRJqpUeXGAnZqryDdVHkNUb3RnATUvoE2WMgNyECNnY5BpRSbQoXbRdeFfGE5",
  "key42": "5FBYGA1UNZM5p5HsEZ7NeTpMN84crmSXPaAcUVdebWh1TkLTJZN6qn9nZen8168vu1LvpMSpkE1HAyPsY6KJAaP4",
  "key43": "4KacTdQQ4rTdrBpJ698cg11hsPvaqbBRgWqy7ZMncHkLdV1kjkCqJZ5mZSyMx3ZAsgEQhyT1UqbLGqjbMhfCT3tp",
  "key44": "S5WX22CNCtDYLXDaU889mdzZnXGKmfJUybaZZYzghzxS2NAsQqZjW7yeRECEyDwqKGRm23jnDYeW2KxySpVsa1v",
  "key45": "4SiyRXQ5hBAtSD398XRhvJjYzKQ94CEvThXKfuyNLP2nQUMysVGqNmh2a27oGzQEuTrwArYe5virhqa9GajaSsQV",
  "key46": "3mKsXVk4FwRUWVQEPKg5bPA3uMYJgWYKuWLgdnCX8HJc3dads9hnq3NdEDBg2h36mXnwC1vo725v6mLHoEsYZspb",
  "key47": "7KUaasDWdcmN5gqsPwMYp6rnqYC31jrfZRH51n4cgMrc2yb4txcM9cFRk2DTnYzeJWZrb2cDnPShAd4C1Fu4aJe"
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
