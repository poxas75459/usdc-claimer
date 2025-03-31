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
    "8hwvN8rywTXmt6De4m3eeH6QJNFy6YkA3WUR4su4d3tGZvAjL9GHcxwf9vS5Awxrgz5ubCyXKHbbMe13foUU78V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSQiJP8o4wd9j4dzmn8bHoWWcw2xmidLigQsFGhYDYtwUUQwp333FnDxXWbF8HTdfHEbh2nfde3ZSh7x4Y5sSkS",
  "key1": "4A11ZyzXkgNBSkTNiSHgMXnaj9DkXhHVDwxB45p5dvbFrSrgDE6KsAsc5Jf2KQzENYZz6iMYuHWxDiRvArtq4Xrc",
  "key2": "3qhWgWAch2QNzmwJivjgx1uqJKhBWWqunudzwUBxnhn5HBmz6panUtVxEBmbE4mnZaWjkbBddvuhRV7hyNiDpnDB",
  "key3": "fN7wQFWgvQCqRRsGrQWzBwV6dLkvWX2M3q1dWdPLP2noJo32HQypKBUgqyw4kLtLKGMHYQto52pfcwVG2ThRD4e",
  "key4": "dTLZLJC5knUbod1FLR2B5B91x7mgikjVhqTk9ByXAnK42BxFpjSE8KBwy9oe6G7Q76n5iDCD35dzvLKGrQ1AjX4",
  "key5": "4qtDVRxThQ63UcUqunvWwf24iEi3SQhAhsYUfrcEudPUf7BJnGJz58wDAp1fBAJpiqgHwy5nSCU43tr6giHe9Fax",
  "key6": "MPd9CDm4fWVErPqzVhHGNNgwCWqraBpd3RhYRZ5dtWsg8dsDLcJG2YhSgKLY8xvEuTGiWyfVUGZTudvrLpMZDn9",
  "key7": "CY16EpVE6uNK157Qd7jNzEeW83qgt5GqeDr3K5AJHhpuLWQbheRuGw5JZcMgFYkJjy88D66mHzDhTp3rhwdx7k8",
  "key8": "3V4B9ress2Sb18ZM52TS1ho57WFK8VKffFEKzBho8Coe7aQizqnzA9kXoHcMQhC2k6q1sc7XmNots7q8f1kirTXY",
  "key9": "GxgQck7i2XwEZfT5u7hxM71vcJmMEE24u7Kj6nj9MYQhSpw8nmDuoEjqDMicm62ZGXKrqdDs4tc4SeQRA7Ptidj",
  "key10": "46V7x91rtUVunq3uQqkndRDXz6wBLwqdLVnz8uE2Mnrrfhed94TgeBYxaK1EAZNx26mQpQjbUzhEnWcxKRkuyoeG",
  "key11": "3UwicENapPVJozoYmY5HKwu5T7tZsTbsVS5J8JtCSSbiYYgYS4zXmupvt46oFtrpUAFa9cy76X8xEoZyzQxKW8tP",
  "key12": "278yAUVUzxBUrXuTzdrYQ23z3SfTH2WB3GAR3sZkdAdzQnfQyMqCkag3VcrBAuhwkYkztVT4ZujZvJon4Ci9zBvQ",
  "key13": "RpzvuVycD4RdstmMjA77vv87UW21r8MGNq4vkEfVUbR3iex1QrsFns7tKUTfeNH3jHwNVTfjXFybZWofNADzdzM",
  "key14": "52exuhh5zuFdYoXGmGRDAd9NYeHCiWKQjjjJ86ZU5NiQYosRjMGRwPNz2PSPhcoohduBmJjPQYapej7cN1RNn95v",
  "key15": "2uQj7UpWRNNwEmfppu3Mta7kS8na4arUi9axchhgEET3aW6drSghRSAhUiUbiup31RDuZQtF49J2DotzcPxo7Pjw",
  "key16": "533fxUgLnafpn35f1rCuSqSNHwzC8top3uFvZkjRUJ45bszb8GUyDjJJZ89s7Ng1H2F1o8kHAASgoi1nfkCKEMXK",
  "key17": "3XY4kDcXPDzqHKi1vgizuHkPD2kSLJCTfQdMemE6HX3J7mcaFaTfKv3DV2tvirmov9DCCS5NPEY6FuqgKFKA5EKT",
  "key18": "2hQeVYpoBHvZAndHQNNcDSC3X8zSCXLsQSE5KN37Vbg943RDmKSmajbUNXrCK75xEuUM11XQXQozqG8FBRtcCx6q",
  "key19": "2QzDeTx26qCnW7swVQh3bzt7ipuKYN3QwxXtYBhj76UmkxpX9c2F3idVi99tPSwXcTgP5nUALjEF2Ro4MYCwAjep",
  "key20": "1fcit1BtadqGfrjtXXxTmUaPqnT1cNLKY6z76S5uiSudxggFKLReUya2xz4p5f6FBHXDK8RA6cLGKggY2fphZub",
  "key21": "2yx5dvDtH4udGCWsXfhAmBGqgiUuknVm8uGdtm1RVd1GSQb4Qz8M8MWYUPbuMKFNfwd9vDX3MXRJ3ciNrG9s7QuG",
  "key22": "UnRhAEFLT9EpdLDvHojxGromLXy98yD1crdd4Bpp76KcfFj6b1KL8dTYtZhWwB6ScQ5sGzc1SNNeBG7Gyn4KPfY",
  "key23": "4CrvUwaUmpSBvctS8B6Pwdm7XJgMVyUpTcoLZ72bkSyUVtaFagLGmMK81XgK6Exp6ZqycLKMJXdBghSPsXKFahwy",
  "key24": "5v5P7UKaRzkGt5i3SNPhujFovrVuxZXbdcCegcbrHyia9ffmts9sxHq5JvrbUsCnwho4W9iDcLM1QXn8yAdNaqVH",
  "key25": "2fGCcvXf5pLmAAFTAbk7eY3z99vmwsLc5CSWoUDcYdeFKJYQT22jWvZ7Q55M3NYQsqv2C1TTXmZDoxWcW3XaahjR",
  "key26": "3tuyq4dnxHo6oofbMPUQBrJZxnmLa6QE2c4UcVx7YJTH2ZTnAUaCovviise2bVe7Uq4kegYmYJcusQK7fT1jKo4a",
  "key27": "59ZQXVmjWzmfTSujM15f67Em37w5UoPYhMnZVauehGkGdtBgHKyKUTkVmTdFR3sqX2GugagQoHVApLsdtxFV1rkE",
  "key28": "SLhHj15Fwtbm1grdGuvBxxb6fUabRcMowVrSNEbRDBBJdMhKYu117BVesXgRvuPhNPiofTjUFzeJzJBc2MLK5t7",
  "key29": "vFTLMFCRnfFtnouvzrtHyjfYsvaYczjE1QBjnPAtATmKB9g4MphPmu7K31FV81jqVEzGDhsPDD5frZ3EcFwrJrK",
  "key30": "4Mw8QvwskoPG2aFYs38ppBGgbGhqYya7Bt36xFcp7KrJJNrCwowCmoqoRY2rTXe8EBAHtqam2wBW9yuo6gyUy1LY",
  "key31": "4Y4Zks7wGLS8WEzR62zNQxkTY2o1wC6zsGMy8HwU9MBYbpmiF2Pt7mRTD2vf79gwGArGE7DhgKoBG7TCkP8a2zx3",
  "key32": "2hYR9oX6pqPFUXzkPsbgbcZfkiHMTkgLcGHmbhctEkjMsGe5rxakDZUEcx1YYNLHNLWqDRN8JyBexit3VBQMYTag",
  "key33": "mNYbT4m3Ej4HVAiXeUu5G1UVSrfEbDPxNH76AGNjvi34CZwrGMf6vXUHA2x4EvNT1Uytv1sdJDCxgQwNJCXwXCa",
  "key34": "2J57mrymr4mdLtPMGdttRKhULzXGMGuweV3XNK35WQUzwWAEk6PgVW6tn6A4TCA4AuDmfWmtYAqgkkugLDsULhgp",
  "key35": "4QCPzzuGQRperwZei1vnJVyLkjbFHWxCsCgiaii7LW6xXnF1PQfFWAhLLBSvPUrg33fZHEjcpJ99KKubdGPjeLi4",
  "key36": "4k7jRjmJS751HgsxM5BFfVGy8gF5qSYNmP9YoPzYxmftBUcJYsRZMjiQq3ZMLaStW7btgkscrMvFiB4xHzryA7nT",
  "key37": "3nUopPoBcLpS5eY1JY9zZPnwV6HPuDwwMcubvQh12unuKoc5W4A1uUTgv1mydqPVHBfVWXzNN9WZ3r6F8zGxDVeN",
  "key38": "Zcov1fKAoBmDyy6KtW4osj6abmvAgQ9ZrTQBuwyQb3gwz7auji1XQMTqKpfkM3Sn1CdhmuxPQDyXuRhNmB377ti",
  "key39": "5b3WxQPtSK4hog7GcZY3CCqEp4JnpKc9fZWH4WzgBjFtMn5uuWCVkJAr2uj7c12kV8bwGEYGKtKt8pvD8Tka7Fc6",
  "key40": "5pR1tMkW8QUriVQB2GJaocoQouKX3akR3Q61mcV2i2G69pV4FQyrJUm9AJFZEBBGJEw1zcmrNSTsqKuwmN7eKYYy",
  "key41": "uJG2HZeCVyXutLiRVqK3i5tS9muN8A2pfR7nTUzBi5U7VwpZM9etYem7TsJsn5VQwgBEDV42CSLE2V8NwLDsoYQ",
  "key42": "2bUf2CxDzUdKpgCVC1UsuR4h9McyFXtjBTgxtHmULjynU97qnCgsGeiZv9ZrhKGUc1S6SzWNZk7fejm2fcsT4vnz",
  "key43": "45FsWm1Z2qNboBRPiB8gQyN7P939Di1TWNYkEsVRwpJczUf5xBBm4j8wdWKGZQQAF9A79qGxTg3fko4ixoFSeC7x",
  "key44": "23tTsCiFGB1yaYcbf4MppR13ViSmtaUWHpA8vJUuZCYGvceuLb7545kzAhzaUWCdup8eNRUHjiSiTmcfCApJ34MA",
  "key45": "2M7i8Dw8sSQFPH8WtaESBHsfJDLQaaPnyCYfcYwxQiTzcDNkC4wfJkcRvGm2JMpUK8mK7PVcB7vsDiQKLLqentuk"
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
