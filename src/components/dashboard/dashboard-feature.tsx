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
    "8fzJvHg9HCwjkvmp1X2ewjadjUGcwTXHhrb6QsmuBeDqiUPFHt7iLpAMwUQLC8U6cc2sQZczFLERnGiFc4bnVxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cusjkDbz9gKMt9uDpN3tRoFri9df5tK8fosH8LQbrFTorHYDdUqpnGCmYXdczQAPSjcm4YGksMWdLFfR3uhNiPV",
  "key1": "2fFCYTKy7DR84fR2wbQ45ZhujuwhJZoN1c4MSsaeai28HVsysusdK2m9vpDnz4z7ttogjXPo1H3CYSzh5ruo3Uax",
  "key2": "23E7gwChna2U5W2u1EdD2TCSHUkcebTcP3jzR5Pn9gmMyTsuurpRdQsJ4dF84kYztewNWT7Uufssb97SarRbMUKV",
  "key3": "23TXJ3DCG4kWG1ZoLVkxzLE2EFVoJb515cedQMBxjdsmoZHqp6mA2TPGMFsrexkoG28KyWRbyjarfdQR5pf6SexK",
  "key4": "5QYS8Qw3iAjWw8bxJ1B9Fe2UipAycydJ3awvttNv3NAnxLbdQV2LGDPqxkJKA8XaAumDi5EeEcU9Ff3xYokjrLEa",
  "key5": "hwW5khSgUXXEwq4QqYrDFzJweqvnYtUdp3uKXp92LppwvdjgeZokK7y6ujRK1mb2Gf2M2bj5BuZAVwEhV8oPB9x",
  "key6": "4QjFvb4ywWViwgKtJ5UeBhRqYMUzyoD7EFXcP5qmBa6EjywphUppSEAB6PJGDejPr94yuA9mDZzgryAWFo1e8B3V",
  "key7": "qgwK2wKkdAre2gXPK32FnSKRfWcFhCAKdb8TCLnpGadjrz6P2mes447R8HG1q17PPFkehMoGnxCVAffSdHaVtJX",
  "key8": "F9YA6oNTBqufN17sRSNzmUsz7Jjekr9HotabRkiw5sxfb6ghpVwriAgs5Up5AZmMvzit4YiyhpiDzPBfW8qbSPF",
  "key9": "E1TEBkotfrxkSs5atRk8hZRPQMS44SoQ8g8Q1qsekbu5eMJEXCfa9DPgqfpKQaoDQcYm5GsqvSscyKZLE8rCgGM",
  "key10": "4ELkE6KQSGAVA6KmyqyorFs76Uh9QkZV1KhfKkUTemWRwzL3yuXHZ1EWD4u6mkniS7H9CJCa8qcMNxPdCPaPi9JS",
  "key11": "5m76y4KNZ5ep4pD33kETQzNuTU136g5e8Et5B48fpdrrgykhKSHoaoDkY8rCSwoZ2FJFWiK4haiCR57oKY2EJy1K",
  "key12": "3GchEHFiUGsLUMA9T7gADkP6gcUxrrfX2vmKxRcp614dpgfHij9p9vimCkQn8kKLUcPJ4scFcRR5wyLt91pueqTd",
  "key13": "54694FUqzGN9xHJw8NnMrse6QfF598GQKGxheQ5g8mFn71D5veqxKmQwUQzQc3B1zUCQUp4NTZEx6rMEzYQRZ2cm",
  "key14": "4rGNWAT8kxEXHE22mffCM9DxtpCEpSojPT2f9mHoqW8oNYidEW2apwTtQo76v575gcndf69Nh7wjtj8pQXVTM6eh",
  "key15": "2UCdrAXQCsQmmzhKBmU2SnhYEf9cwg5ewSaB6QVvrvY3B55Vv1vG6uirQ6AYAYvwZmmZ17mtexeCEu8GNivhxEpw",
  "key16": "4CANnJLFLsvPmhew8FNghdwz1Hqx9HFxCz9mhQquwmGW1eVR3aGNpqeGAjC1V78vxyDsW9xF6a2zwAxN8xQy2L3G",
  "key17": "2mkCTBx83JryMe12V6713Vp4umDdNwShRC62ZzkKGCqibtcB6cs6VvqSHyqxhN1LEVnjNK3ko5JHetAiqKgGMXvn",
  "key18": "5LM4P9kMmLpRJV8cRB5gsRJQZ8LheRVbR9nhkTRfZh6o2zNbx1gvBjpvXrVceGAN5wMx27UugJnr4YFKwd7is6sQ",
  "key19": "2k5RfpjdRNvSNmqtZRcNKjWgY7geCTqyZZaxPumraBMVXBk7MsnzjbhJqfJyUZa616pjAhWrGJKRagdJATeoftYr",
  "key20": "49NH6aCvZAzR9Qr17jZsMMmSqFv9yTVYCK7L24jEex8vJNovPBLgHWDm416PAgqssYW95JtjbTRvatwa8VvWni9F",
  "key21": "5cQjeySmCQ9k8nRfCGYBaTwUJ7LBR7SjygRwV3UaVdTD8ZJ8CJxvweUqLcpUTcJaAZMwZo1T6zVCohj3UrhMouK7",
  "key22": "2tZm6EqDJK6Y6w3dHC9BZZAXrnsu5uUU5fMw23tGzXAwAdZeiHBNM3E9EoeF2CpVTcxEuZR8uBxGcGb3WG9LraDd",
  "key23": "PgEusNtM1yWqhcPjqRVpUxNFbh61Hvc7chJPGmpeLDAe5LevcRh1KRS9BsVmnCrrMjcoiyXiskmeMFQsvakwdWy",
  "key24": "3hiuZbbQL6aogvaeWmY6eyrHfUgibBowds89rREPWprYgq1eHWfvGYVmjzxgFdu6azrjMbVxp18BCq4tXws21pWt",
  "key25": "3oUoa9xKfvcCZ2T75BDE76UETTu7cFg3tH9GXVAr2USEg5NDT7gDStZwMQycjioKHvxZ7vNArzNMquVmW5gvpT3K",
  "key26": "4hXaQ13VUU2WkCDuLd35C8gpDxNhxmGuxUj4Q5xUxabXF75qqBXVFZAqFVffgi14PECQrj1AhjUV4AUz3SrbBFg6"
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
