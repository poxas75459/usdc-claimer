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
    "4bytg6DyjuuywS8BD52paPYAW4m5jhfT1rVE3x3aFXA46f8SobspWMQsFLdSdQsu3LT5nn7sxsyeU9qWdWBMktEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFGd69PzUzRkhASA8di2FMhwWHiVXdfSWkqQ8rJ2937e8WG2CXwD2aRnLCywKi5L8YtuLtTRPuGCdxnpKzS5iaZ",
  "key1": "3RmAKFFYEK8oAuXdY4hgLHa2Q1Q37PzELWMJt63hsCHCxDyMVWjZ6ic38HdJbPWQjNxKRwWadZSXPTRkXNfRjok4",
  "key2": "DTM6LsHmWTXNXKakvnQmztFXnrTWSydq33KKbB2weLqXxcZkAyLM9WKc6Dqhnb8QnR4oCK2Kde65mNwZYetgQou",
  "key3": "2bYqJsTJt71NiijaH2gmFJt6JNqPhHLVFSCQD4ZmGt2XC2a6rwg7uXTb6i2txrYJ4KkH1NX5SaCSsdCAfvV7FTEm",
  "key4": "46vjFTYYaBNpgB59ZTKQzeqcJradGYnkx54XFH7zcyzVfRZK1eDFoEcw3c9wHkvm23Fnhzqui4ePbVPshQwba1VS",
  "key5": "3znNADyVdFxc8knfkVFBDDiLQ2N3vQt5DrqZLxGNkNbkJUrDnagrsjmgsVftYTs2CR1Ze8znZ1DDLuG9Gus55sAc",
  "key6": "369uv2prNuUzz6MrhRYrkSQdt34QNzpxN9wYpAvfPtmqM3a1upcCEqC1kknvxapgNCogoYZUgjCahAufFg1ecAHM",
  "key7": "631hgAE3R8sCqWSArVCxQ8qL2wsxWYjEsqKq1znvBgPpP1LcpAqYALEfNy51einZSTB9Ux9WoDrhPiHmPq5ZLggA",
  "key8": "2GFr5eTDTrupzgzZiRfsKH9PWdLawCDq2x83exq5DXbQmnWrj51gT1WUjXQqSDLWVVKYdXZT6psRY4fQtuqzxQMg",
  "key9": "3dVX8FkMTPtoa5tVxK7Wh2e8GrcTRxTm2AuWn7adUyLtH95SCFZFKYAEYUEoRyi5yEESqjsUNgTDZM3XKWPb6nTG",
  "key10": "cqYrMnZREpdrbbxDEYDLNZ2hiqHq3FPTBeKgyBSisKas6Dc7EkzafeP6Cd2xQGxtABx173EeeuWJuwcfmwHZrw8",
  "key11": "4M4zdQY2BzgbZJPKYafv5yAtGyDtUkypa5YVSAzu91EJ6KcctNBrGgDTfN6KnxcyDXGohC3mzfraV2tFYhhNQyC8",
  "key12": "57wwvcP2AdDcxD2Ub9vrLBwq3DrtR9ttdF3fRTvkMMdRuwonmPuWcnctNdEKV9hV3tdTiFQHJPfsr2Bpaz3w2LPs",
  "key13": "hjMQ5vc74ktLs8iABV5S47xAG7Cz2SvroFPHkctMxsUrPGq1kn4ptDmcT6hDzRVvKB1vEF498D1FLcmCKtJR9Qf",
  "key14": "WZhKn7KLoxCZxmYLM4Bu72zHortw8xqy7fhoBp8EsLzWB6TRwMEmhaiqSQXkXjtYLzmdvBbj6CGXUkTPBK1QRsE",
  "key15": "5j89K5eDVnk2FjDmqm52t5DQYGD5uNxqJ386pA9EvrfVsLjbCL5whHb9DBm17AWBQUt9peq2GN11c7fcvUuJk9ra",
  "key16": "64Z9gA33DSqd3zjCnJrBzsTRarcu9EtzdgN7LKo7nsnWT5E1wbw1EGGCpsd615dhnauUZ7qqSv6e6xrXGzexsaL9",
  "key17": "2jeTFUCmumEtaVFXXythFtYzUTTKxzdNmrbLd9RvUtSo8wThxhnYo86ne2VyLaP3V7UVsyA4PcJtDSojBnhTRV9s",
  "key18": "3RqN7QuP6cRkvngBcAxQwGw8UhWzKycmJ4DKMyQnGcuZtanxYxha13N7CQx7QCxX2XB7ZjDh1NvS4w3kmFdSMpZG",
  "key19": "5kwXzJkeKuT1zWPtmxTQUsSS88NPgCnBwyKUFWgJ37rhFs9vcs4cZ9wxDzhKZz4mJWRCRtu54MFqcBrEye9GagG9",
  "key20": "32jAiRRSfqrE37YXEVxitADjCmxjtmPPoVEuFLfqFRpj6UUscavHZbDoxGLMB7mnA5k83mz4tGkeaK5viLyvPMgm",
  "key21": "4mqjReHHDtXM2EDRphTP3FmZQ4qBdJiGqGetVeYfULPq5uEicTrVJEi1Nr5bj5dnxTKA9LayTJ9FmMVN6H1JWMp",
  "key22": "rui5hd81kz9EPrZ9NTo5kSffm7qXUDUKeRrMoh5xjShDmCGBceJ8Zmt3kd86wPpqA1mPPQoDqDxU9eZgLvmjdmu",
  "key23": "2T7m5YiK8bPNoTsrD8thsC8qt5cppxsJ24iMSJyc4tZVeB4CJy49FnbrRu6c7boXZZYZQ3srU291yB9FVzDiPiBD",
  "key24": "3gvx4Q4gVpFxiyjW7nQf6miArtu8GDWqqW9m5xGgiSe8kFskDFBUZ9QrqjMG71bwujSNYneeVbvW16Uq2UWPzWJ2",
  "key25": "37CogXoLR9pPgR399pThgMoAkLsCnkMnHDuLW1jXLEJCDLTrHRmcDwDW6aDEjWTzPXK2fQAfhp1WmVrDnRtWXhrK",
  "key26": "qeKubR1Z3qLJs1PruL5tV7NduChAgBb69icgRGGsgLhvHSTZ63iPud3QBGJ8pGGJbkQ6Mj8asbP3ZDDL6Z9iT4F",
  "key27": "5AtFT9VAa7k1kxfs8WhheKHUgETm9JArobcL1g1YU5xqcPV3c9H9jtBg7YjrT5KNBQvtdYv7QYDubmHps7cqEuWf",
  "key28": "5eRFbExgPPo59LiaqxwFAn5hUqJxeJx6Py1HYkh1wg9ERj9CCdZS9RMtV2HsjbdztixHXLdazbXxyJqymfwBhS2G",
  "key29": "4MoXT1qqJHtUFa29vfDfbSBEMzsbCcoNnoQKB9qqbLE8ri5TfxPt1CXi2k8B7FoJTm8uyNJkvLx7r74mC4VW68TM",
  "key30": "5WVzYPKF8S2wDq9dZa7i9UnPpgH1xL29XfhzWhiresYeWFLqQUsFQYZVArUq7QAv7ayYdQimsNtbBo5uHRMqA3kj",
  "key31": "3EzTqyDVVodvRarxWmzfvcg8HXKxKe3mt9Nx7Hem649BDzvXb7b6gQbofYwY5bbnV25WaNBYDAikFj666SedNZAJ",
  "key32": "4dQUQUYNFmT5XRmtcvR7dqXfGLfEAinPewEgjwCCTtCzESgtjJyrT2emVf4eMBWrFh6bA1scXDBn5GazjgLH9yWA",
  "key33": "3rjxKvs9R9tNT9RRpecoyDkRxoQPGMnwkr5u9tKQKL8ceg4FWEFgVciPS83wEuavfEpEnKba3kJJnMdb1yu3Eikc",
  "key34": "5iyhCU5ey6NPXxv4ixMBSqDdxQxqVcsbsybkTR61Fvr6omtJh6oJntTUpwBrYYT2t1RScEKitk9nBmigtSRv6Gym",
  "key35": "5KAPjSu7YAGmzdnU3R68xdd8eSpCMkEeozgfYEKCiou6UyRvk2MJZ3dSV7LqFvTdFjKCsYHE8gaNEgzVBJgLtY7m",
  "key36": "53AgJfSbqKaLmkYJFFC3az94xJErB6K9DzoULQsK5qirzbWNmKFv7Nj27vAy8TszUp3dATH1icXJUW7QgyF6gsDo",
  "key37": "5PBU9QVuWpfc2ZYhhyESoR5y8xV9u1qh1rQDjPrr9LSipJxRaQEBk7ATa9r9dPuLzK2vUvZpymtGgQVsba9WXtJg",
  "key38": "28WGSLJxEFSGP6qdvV5vxa12UG4nikPfuUyohyVMeTAsNE5gqMzdTxuKyVsgDyqkLQtz2yKdEh6QpxTW89ips96T",
  "key39": "48XCY92y93VnmVwqB4ytn1ErD5KJjiYsZWqH8qUSKirMZ3gPfz3yMagx5RxQjhXUtw1L2ndw76uD9JGKksZGxqLs",
  "key40": "5yhdBFc9h5aymWss3HYqQkjSAqbm154k9UnnKgntSmDrJ1WhNjKheRkw65MdFx5WfzUpLv7LaYJm9UGgGKo6ce2r",
  "key41": "W1VdQwSemj6fCpGPhTWEXZ9s8f2ZeK7oTNj2MxfmA9Ao6mt6T5P8exVbQYXGvjsY1Qaw4WnnFZgEytmMNT7Aybm",
  "key42": "2qHSvfx5xqe9yA891UN8Y6jwBmDZkmWFYqdwvfbTeKcjcdSTCV5d4dYr4SPYR71BiYodGNpSBjAqHskkpNrmBT4o",
  "key43": "htQV1gxdmE1wpYy52gkACCouKVhWoYKNoRtVDu6NNwzrpd8LSfDn6r4MJWYuHmGyoojUh6Le54D8TxQ3bNA24Bx",
  "key44": "4VarTFMnkmqjpHZWRHETYEeRs5DCRWoBwMgAWJpu8C6JaHna66JxgyQdiSJ12BXER3vitfwV93exm8rtZUnhHdzW",
  "key45": "25dDRyqdyjiLcCdqxoYMPGjDvPYDRa538BytYevmNabQrsBvf6gPtt4c7S7z6T676xXraKdoUg6qcBFarNGoTDgH"
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
