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
    "2E7VBsDYjiunymNZ9yh9dNjkShpbdRhHLoWTxLqrZGPv5HbaD5T6RhzqwR7mr7Ue3V1Y2FdZuTTKqGPvtmM6bSfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAyAVPjZiC5BR9cKBm1qGwmh1qKnihiiV1KdmdxY3yazNLR7FMqa9cTzKFNquBtUQBqs2n4kCnZSAeC4ym2cYgt",
  "key1": "3KF6nHkjS81h7deR643b7SAzgGd5oh5KfQtsc6hsCwjEbuZPFzsycTwXSG5XMsQhh5ZTZ7NhrGGabtdenDE8PNjo",
  "key2": "4LBysK3vJsoLN75b4944arXtYGXkz8wiRdBsipcsZCLwzor7P52yP6Edcrp9Ypy4VRxFGDbhVoZWjxBV2QznMdvZ",
  "key3": "dDFtkHuHkkc3dHKP8PrbV97AGgVznni2UnS19C3fc665A9HVT3sfXV6zVy44PN9dCGmKUr2Eo12kGopd84qkAj2",
  "key4": "5jFfAc9sEW1psJTocfRJ4FNrNAnr441Qygogr5PbLu8U1SYodbDaVehWef5gbMMUArW16UoDekPmFMXdvTHFF72E",
  "key5": "3G54HkFsyreHza1ddL59WnpwxoX8BbtLDsFxXn5rUTcYNgy4GgPc7LxnpgmG9ttMQdLmeN3afAxGPt4r8gs3kTYc",
  "key6": "2iwTMHzST3hv8rRojuLc5d1FAfzXJi7oEfmL9yPV8v6szmbJ6MrA6DSiFAkhabBZ8CYUuCsnZToARiowYrbvjH36",
  "key7": "4D9vvhezQwPFqvZKAfWTvr6vp9o23ZtTvmocywFE1eWwPbWTVaE5U1yQvzEyAkqvsqmcctzDzB8Z1agVGmkkhqFj",
  "key8": "5dopJqdqG4gQ93UFf9b91BNdtPvKqhNihqihKAc7VztSXrQHfC6Jxh83nejxMEZq9bucNmdupe6EmV9GQYL8vxKx",
  "key9": "41zp3W7vK6JjAXvqYtxRivoWfqrUM5JPqZvNgfk91PmL4DfrneR6AoYEVwG6fEtkrBe26cdK3qifufKfjpEpCpcm",
  "key10": "CsJQf6PBvpiSuHqHjiJP3ZHx31ySVSCsWtJkdV949d4Z7FsHU68mKFKCaZZ28hRyGumcRMs3xnQoRGPVMdPJKGF",
  "key11": "2DuNwQTdzf3vwxF1MvUpAn2sUt8cSvAv9XiKvYpibQHJaEUAe3HgAEaAUST3fBRcUF3HsqjRVj4VntUkVHudMRRu",
  "key12": "5oMizQErjw89VNYFGqJq9kvs4WXo772fha6KHWHypEV1U2QMoiHERE9wgK8pjSTgNvKNSh72C5MqdKqhkG7dTpaH",
  "key13": "5XdP6BfDbHTS6bn3ge3aQDxyZrx6FkBZKPNMQSYGbr1sHzK4ppwTeD8CfhSu9m9Q2vmut4rh9wHG7koVzEWbDcs5",
  "key14": "4myP51mNTcAzQxzhHtq5fNj7xjQ8UYWZtTUFJ2bU4gme8NQobCvMzJVZt4N9h5EsM6d3DVPorns62jt47iXpCh4A",
  "key15": "3HoYG4ngiPr7g7HDaeHFpbtJzAtRrGjt6eHcGGFYy5chLrYKPdhvDdh4ZvDFEAaQJYVqVmMFN9EiKnVT3FYAXm7a",
  "key16": "52n99BhQ16hCXgSfx4np2MUq5kxxdS8X5ss9ZPf5Ri3rDVx6qknFavXmP2S9LViwmTmzxHddEnUf7GkyjcDaitVD",
  "key17": "2Q6MTBRUmzWEha4qvAjPeKeCS5twddL6xsitue2HwALqRTD3LDdRqZWQduSmB6iY9NsHFY7UEVrJurFckW9zxnGu",
  "key18": "5u5Sj1qVdKt2tet1dDtVHTdhDvnoc26w8KhCjQTjexsdBA34a4hKD39Mgv7zPNEubAmuzKtALvjM4EttzvATjtXt",
  "key19": "4omSwNshpZyZqRjEeMZt4s3a5LavCtkFJpiCA2D4DjyufFhaEgrUAMRSyjhnKqr43YDr6NGrB4Xd2oQ7JEterQj6",
  "key20": "31cymzdK6D7zvyvGPUh7FEQxp1FtJ7JA7gwMQ7NCzTeZiUJsG6iAVFnQPsFasjS2DBwreidEsc1L1PKWCHgGH4Mv",
  "key21": "P418BSSwtzgRBkoKErSpsvnAJYLgvPJr6wJi9Rb6h4abKh4B4au1yYTwTCX91QVNTxRt5qQoBENwJ7z3iAF5JWH",
  "key22": "4W1MoS28PgFXfqLjGLjbdAoezcBuppYQwpUCgS1fwmqv2D6v9MBpxD4TzYs8C4B7RbJjEtiTo3RuJw4GbLfZthWd",
  "key23": "62R6w2VGGRKrShW8F72xfTtGuwGNXFhgZpTxTdYg6dLuUb8zEbPcsfF85Pb6xrGTJdTir7vowES3mfpQaxgEdrxH",
  "key24": "26uPsB4Y1FTsd927iPMfFoz8vv7QHoWBCHVvtv8JhRVEga4rAyZaWfjHVEkPvGBCQDWaXTfqxwNZXLqE66LEydNU",
  "key25": "5rZsv8JdnFU5ksMrLmzZoMm5bRQHiKgzUACq126h3a1GhhFLKPRzWFou912Gjr872hvuwThcBuRcqE2t2C56cRFF",
  "key26": "3Dh5v1XkASj1tK9izfjj61nV9mk1KAftH215QBMXESQHybg3gr3s11bzX9GAYK9d5t1ELocRsDsFykpDZsnnDz8g",
  "key27": "3R3r8V3owH8ZFvPopPHeDMHbVDKeUhSQhoCWrEMi62ysW8uX4FoURsdeSHZA9q5ejQdapy5P82vcoawikEu7AGzn",
  "key28": "2wANEAYygUQsc5eY3ugcr395RhgTvCuVSLCXXG1dPmPZXH3Pt6Ga8CJQpoQtETZEcpgysJLD3p7g9phw3rkqYzhy",
  "key29": "PuAsAs2tngakNQGXGnZ1brWFra28QuiWSm3BTL4ReJHXhV9L7H3rY79kAPFA2qU6WEeTB5XqeLKLLQgTFT6np96",
  "key30": "A4JaoaX8HNZXWhPpjHUka5K5YZBYmdTcMuNKRkKKbPyqtjBqQb2ywyERCmtUHdT9xY9J2CLQwZa2ekpztZZYVWk",
  "key31": "5imyEXKrbqhsyKhNEN4DSBvqzk2fcrBQsJUYVAw6q5oBZLCrD7yyPdF8jhUBhrTxseoDXhkURZJg9CaUfSSvadqP",
  "key32": "3pUSyygU36wdZVrzbL7ndrBwNN9hXNNKgXAYur3qBJGVVQcZjzLPr5i4wodKqRWXG1ZjXNfBjur8XpuUCFompuo3",
  "key33": "3bcbVpcwVJj8CNFWqzTDNrTT6vKCugiGizKEZBqzFkwhaCorqojgzNSyK6Km249RuQeYeTEDTRz1nkyKsFkyjU7J",
  "key34": "26Jj1KLMxFQMLQnDdcij785CXyyuX9FEwfTNUB6tBwJdKvrQSbZ78Z8HoNPKcmCK685B3Hi5oymB2LXjv71ufuEK",
  "key35": "4jSxDDCksNvJr2Rx4nDJi4LSHgcsnzKd2EiCmkCdrmiXYLYvb25148TWB7TXqydNuRUyjWgRavRNPk7M4UcVHCw9",
  "key36": "2P5yq1Ef4c8sRSnkej16noh5CdNSaEwHotYLKkoFiYhmqfJ4S2w5sUt6YBJst9LzSUfeSy1QKUFLq5HXuvZjXLin",
  "key37": "3B9h7KZTfZvX7mW9x8eWXpMpKKM9PTWH7cHEqPsr4bjUhuAMF8Fn854WY5NawHEK3iKtbqoArwrJzpNw4msKKp5P",
  "key38": "4SUrjiDEr4vnVJKiJN1Ee2f4dpQevp3yebWLjuMR3gXWxR6ZCGPvRrfHMuoUnpb8Xk17p3qKSmoddv1SdSuUj3WV",
  "key39": "4iSAQm8xd4tcWwrrGneasVTQY4M8uHiUwaZYtXzGoF71BxWXDpH7EAh575jfjsThLxsbjZeQAh7pgkXdUwE8cxZm",
  "key40": "3Y9Us8WV3SrfN491P34Az8huRadZtu59UVZSwU5xbdEpU5upvqok1rnYM4vZSEkXn13rP1h5vdTLD1c1j5kyqnHx",
  "key41": "5R9jg5TAxnVMLkwhfnDHomeALCLxweLBTBE8ijVZdu3nMTUpDq433TiUFkeTcz2zkudPX5VE62RhM3zv5pFixy8W",
  "key42": "2FiNWhK3wTGJTjGgN9ZsxjXDNv79gKYMQAs4wuPfks8HWHaCeLuaLVA6pcyF7HwgrmdPzipayfDrRjqhGr81keXf",
  "key43": "3FYm97YYkyjrTZJHaKT4GuX7zyeZE7uKRFbrGhRHbk4QRQCYixauzA32Gf7dGE1wZGRudT81Cc7QufHFMxBfvphB",
  "key44": "2bPmkZanjgTWtWrGRohMoH9f9qvk1Bw8zDVo7AumMUDfNUvKAKsbG5TNCKTYWysAjfD54gvB7mhGGco9GtwNLV1x",
  "key45": "iNxCaNmWPT62Fa5G6DMa4c4sfzLxpeyCBsuktAeUxzZEwLSmyWLfsUwnCNEKgxZEAzFR6taf2Awn2qM7NTirH3D"
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
