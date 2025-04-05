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
    "5bMFcZPo9f6hSnbhv4uXDEYysiTbjTUdXGbwqJLRVKg1mmzc4d1itujEziwRja1b9H99CGrCQtxWdP1Qo8WsQWmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QdcrsFd2kZxSsdEkgNLVkssrCuuzw24wG1vavZwoWpqg7CFXNoe7VhjhpapAfgy26Tuxo2wSTdAeAkEGcCptdT",
  "key1": "2YJpBFUAsn7tfS9B1jxs2vbWRSaPY3ZbuTaQBXwn5VyktZuZ1HiT7vgd8eiMHVD9x7rrVPRKFQA3Xk6xFQdwN3Qe",
  "key2": "4cc5ULNWKFswsVXBrcgAPC35q38MUYYiiqrPyoPpnwLm8LtdK4wvRfBxYX3AztZN8ju5zBEMAY7enyKLkpyBY3wE",
  "key3": "4LJdeFMnmoHxWXQsrZNatWTVJw1TB34PoTnYS14VS2YkLJgeVQ3iqJKMb7cvdZLHPFgqsWT8hScanQeUewJ5QnWp",
  "key4": "3nSp7JwDdhpQC1VR5WEodnj1PNnRoUMjwdsHy8wbLQBzMmA2Y4RiCiSbNLjpD1SxdftnenxjvDccE3pDSox18R8Q",
  "key5": "27xBbhKP8BmqXt7ULnRT1RWLAGECEr4xs5j5BhtGWsnjBivqfVSdtGQZXzDLcnWg2DeCogqn4JDsMmfawmkJzLcJ",
  "key6": "44dJkk714mUS2H18WQNYdUNjxV7Y3uVWbuqWeuvZ1vhPKm33PTQ1LcUa3zC9SSdd8XoczwRTA2gJ449aSDgq6oyp",
  "key7": "34wMakQ7gHCgzeNqonpbVyog4HQEtfDKViJXKYXcm1Wrbh64XB6XiXZx7WWqWqe1c9DGVycB5B9VQMFNQqWQGCcg",
  "key8": "2B9BRHGvoxjPK4dnRemaYRYc8716Pndp416xRvrrfm7U5NuoAkiqdGNGdnGXgrKa2DSjVcSu4FEmQrCSSTYJvDyC",
  "key9": "3e6y9P3b6uMm9K32xpTVBVyHfrEkkcL7d7gpBAsLV6PgxMwyCDPpeiv8oArpQtcLZZYCMaPvirzxD7dbWX3od1Wz",
  "key10": "4GNMSvjWq8tAXE41a1NgFpvEjzMaDbC8TLjfQemMNGaJT3NeLfGFZ6mwKFBEn2aVZnq2kKDKMccfzuiorYEwGyL3",
  "key11": "2J2QYLGAyq7mrPiqygsgusdKxTnkXpcNxek4rep5Qoa27Rt4TKhrqv5bBVQDufrrddbov4iVUMCxTZPhwcJor5dE",
  "key12": "3Ycd5EPjnPsFuGkWdRycyDfZoRwwb9Z1irA4M4tMDvX2ykTYgV84JFvPMkMh9svoEa8sPGux3AH8jq1LYJyi2h6S",
  "key13": "EsNn5K4snh1PKQ3wWfSBjxJ2vqDrfSD8AFEb91nhgBeW91EWz5f8iPcMCfjnb9myTi5Dk1izeYsEw4aBBKfFGoJ",
  "key14": "5t6fV9yoxBZX4bLrnaHCQzSTsu12UcfWjEMXhBPC4zZpAvj6CJZw8kxwdA45mwHb19K5fnMj3ZNtMaZMwjPRDw9u",
  "key15": "5wKRPr4q52BAqDQXUTxZiDdHx9ygiYSFWuq1e8o3sWNCtkNKqVX9VCeEvTLkrtKyUnb2YweX1ruWH7uZkDyM7AdJ",
  "key16": "4uTuPajXtLx3dd5Hws5ARSUxu5AfnLzqyfUexD3FvLg6q7QcDMJTdSg3KZEct8EDMLeU3BhECiuZAxk8HP6zhHR5",
  "key17": "52QCmrdPLtgxuNrVqgVaqUWQSufiE3VVL6DX28d6CKqyC331YqfmiK3mNxZh1Ni6R5s5Eu7tNfTB5TqRSPPk66xC",
  "key18": "2L6Wz9rG6zrLTBZrhYDvT14azRGPHdCMYFeW5ZLWyD8s21JkVCu3UBU6wxNnJDmznNG4nfAZzpQF31wLEZLCppw5",
  "key19": "4zdqKrnueoaz2Niu7C4cpxrW1dGPqgsLkkRQDwYou9cmYwLZr87hSSq1pyJ3ov8QiwTN37o5MNvyZ48XvdoFKGaQ",
  "key20": "5FjegbkTyUmfQuFSaJz81BWgUGLpuKdh5y7Vt69grbrnxFUfTQyqzgfGWysmjXjcfabx3L2akgHnvyLe4wJngsKw",
  "key21": "gcwZ2cxR5fWJqdCcBaurTCn6FcKvctQdWguGAye18PriX8fKLAqecHjh2n8FCQkfaDQGzT7KwSWRD77Jcthu68M",
  "key22": "4pkZWsattzvoiRbonMHpELtpg69hYwhvPpKBf29cGfYo6hSc6MCYuozqWkqpPsu2DhXe8JDgNeBLzSPdgvHAFYVL",
  "key23": "5EXGzPL7edVJqvW7wS5ojgqzqxbu6d8jFiGAwkwXXXPpX4ZLjXBx7VY4Z8gNS6KDQEtcqrPHNFY8n4TkNATMZyg8",
  "key24": "4jxNSFLfpYzWKbh5d8C5pS556jhaFrGgGCcoH4R4W8DuVYZRC9CS4TsyLjjvXWAU3NYDKTGavwRKgxfao8R4dq6J",
  "key25": "2LwFwLkEfreyds4hDCTVVNPEs9vk8VR3eYUCnQbjuXPUN5M1Bq24dQQcewed6bQujcKyvXh3UXF3pDUAzJwefTVE",
  "key26": "5XfcxTtH26gLyNhnWkxevMTYd2SXaneAR72RTBEiVY9VjkyMgqSo6p3kPBVt2rGt328ygdJUnZNc1oLCRg8pwyKW",
  "key27": "2Swb39RwgM19HSYgvFz6qjjbURGpPogoXcAC829PMKmCNxU1fnDaKoxdVT3fcYqpock4KsySzGRz5N5t7sRroy9g",
  "key28": "w6Btu1atLZf3eCZ3djsLYYSui2DPHe4fzqJbLd3QomGeUC9i346HHuA8B3PGiaUPHSEs5WP44PD2a2BZ7n3RDxy",
  "key29": "2AEgrci4x86t9eezaHEGhi16zRcy6ZUAqadyJ8aMCvTJeTRqpYrvEY7QCnXT5tsGYazT3krf837Tk4CJ4SEgCWrm",
  "key30": "3YXJJJYNXvxwiPZGMLv4H8EjRez4nnRPNMhM3Rcou8dakBQ4LaA1uiyrFWnsnTNLBLYqgwM1mRE9HWZShzjf4WiB",
  "key31": "5R7CukmFerywS6bpUD6hsxdhvAhU1EZTudJuD4n7nP8Bzz8t1onU2vzRgHH7HQnTxuYefzmgY6wJ8RuVrS1CXJJP",
  "key32": "26tCMewpN6DzZjWZWVqVjFtANbhUQKiA5NjYt44Rw7GrRmfZGGeRxRzDVqTYTV3yywtNtCpmaTxhJveZ5PqtDBMW",
  "key33": "A5QRZWJxDhWHHwmCsLGN5iUVJ3JDmVui2gGyTboYKUR1TWPGaDkScqwA25r12ca9RKia8bNiB5YkXxdeP81bGfy",
  "key34": "5orxJXs73nPcvkuBc5ey7XTm64n3m1p2s9FSXpZjg1QTHDPkrLpmaR89th1Jco1QaWgBPwLnmy999QJNDaE2W1nZ",
  "key35": "sqoG8Yd7LSBQPs5B6TpXm6zyX9jRFTSVk6PpWhg3iCwud6oeFFVu9WnHwxqNgsqiW9adFcc1xtTWuk3v519ZoPE",
  "key36": "2wfbDvNVPyiyKvu8RuW92bTqqFBKiPZdeaX2P15qYdbfr3gbe5HmvGEk3CWPHD9dGRhGvtvKfYcefaQy7h7UBddn",
  "key37": "46zzJXx6b4knkiBj37case2G5SRfBLTn7KadP36AyMBKFw2yzZZg86oTSg3A7zS6LeiEBgMHuman2gZLF4Gs8335",
  "key38": "3WV3LV84g4LXa7XdrUKM2J8JyJrTqosfNoByYyssjbQ2RG9g1GXRRF3pNbJQifknzbb5SsvYRwowpTTyNecpque4",
  "key39": "3kminSbuChjANTKmbd9wLfjrmbiaa8gXbY8fzDx5SCo9fZCrkCy3Qp6DqBpaWSu1WZca81sY7YSQ6AqunAQfxNef",
  "key40": "4AERARy2Mha8pLHTEWU7Bz3JvAR58qpbUdsw4sy5kk6odmwaLpzK7MYaJrMAYeyhuDbheudrNc2vLtEcfng5BK4c",
  "key41": "54nmFMhK2pawpMkwRtsgVpr3NCMw6Eku5sms8ot3uR1fbE7VqAHg8CpStMfPYTm55epnY3J7CGe2o12ejrLjr15Y",
  "key42": "48zE6Si3bJj2Akpnc3AjtKRjnjzo9nsTsZb8MGv7skQ4NSuXBrvGde7v9AkEUXbgmN1WYZNhHChcM6AfoRoW6zu5",
  "key43": "4H7aazoEvopMBSq8afL4RGBQfSdzAM77q5ovqrZMMYqUMzTy2oiFQpi9tTdHFyogHBy6WsdqFK4iAnzwcY3LjP1J"
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
