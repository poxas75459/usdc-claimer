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
    "2AjNSDRebnshwz5tSPsCJPn5nojfWUfLrfX9nzugHqvD1hgJYDa6GzpR9xvUuvoWgqwhGvDY9Ey7xkgUxBu1n83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eP6aSCnRkVFcFHkw4RAcSN7V2Xr8Ji4Cav2QerJ117cwJbkZvxs1GJyWwhNsYsktUMKxskzJNYA2Fd2oQMiHRwC",
  "key1": "3RefBMHBhwsa2rK4cVQQ7VXny7Xyhv3yrEswm4RnRy411z3YeyK5zycXTyEtNr3BPyd3S1LvLFy5Qk3XKs2uPXSm",
  "key2": "4guPsMH69sPHx6t3jghF9mqkfJasLpTuNWTQGJNtNCyCCJgs36BYDMvuYQa9Y8Bx1zRzUwPTA2baK6YDi2gViCwF",
  "key3": "6nnR4sKMB7FXkveKW45qcZfPn2jZy2M86SRDTtquNGramHVdAiqaKbJQZWPtU2SJyXh6NknWtg38bdWckBrHjfW",
  "key4": "uZxYtkfJeCHMbUJurF5AXsHdx6Zvz7qLvBtBvCMHnoFzkUrUDnu7tDtEWvwhC1SnneqS6M5UAewitgcEj6joPH6",
  "key5": "21sNfT6LgSEk7GYfB6mk7hSkBDBPsguqygYMTJGhWFPgBFcUjZihNgR7W7gsdY8gSMvyTo3j7mygzmnCh3wf4iTn",
  "key6": "2cYcumBRUM9oo8mCSVr6sVGEvUZ8mMtQHpYcoe6Xm4J8wRYx6XcZqojQNz4MxqAKUhVyw28RhF1LpCMyApLWG3Zf",
  "key7": "26isQZzi97VkUZu8V9QMQr5rDihu5SJHVx7GSZTiwXDYR2FjsoWnbFhrTNA5gKKgYFEE2xyqFfqU3B4SGMNLzzCJ",
  "key8": "5DVK5V3zgJSPiPZ6y7NKK9iV43aXSFsj9bunWEsyd5Qx4BiQGMVXiitf3sMzfTazkMbJGAQ9BKoTTq5NuKMViGLF",
  "key9": "2tWzvAtcWp3dbBKMv6w5hLKUpSNFgggp4aWmcbCVTTtzcEYBNo16M3BGEcDkxx3ZDTLs24CC2tcKJFzZEwcYFYi3",
  "key10": "4YnPZTVvBTKzy4dQCb4xLxpELZqe5duRm9nQyeuJfamhSFo1CVUf9j3WphcPwVnzZ7a3pLGQKkHbuXXCJwe3RYxj",
  "key11": "4YHJAWKvUGbpWaBnYTU7N57ynsDatSj7QHEqByaaaYxz5TyEztCa1oobQGcpBQrpPQU5CAqrU4QS8GKYPgsJrkbh",
  "key12": "5DtD9A7mjGFCFSqBJNhEmHTmWPhYVL2AHJ18zKhsvxLByB3dSCMNVSAfi2bp6mjEtZDANJbkMUvNXRXnDZwyCX5v",
  "key13": "5xgDpwzS9FUsA135ukWjPgQCGy7a12cVcQd7CK3vLpyyPmdUcut8n8rL4Z9bx985vr8D4puo1uXNHdxjCDVsPtr2",
  "key14": "5ATaUdSujHNgTYYoVRb2BPgAWHVrR7TZ2LPEwFQr8s13YXNDqiMvojSKgcEXYBCEbaueCK7TA5QFoeJNArP7CK2F",
  "key15": "5Yqfvy7X3NRQKXHHRPN3QgDMDcetRNcp1tboA1oXLtezQJcyZwFsqzMZ776LQk263xjSGSt3DEjxYAqWregsLrw2",
  "key16": "4TdFUmC2htUxPkcVgyPUuoswgbcXbNyyUC6gZ5Q2LMuHjc97bgpf9GxocGPumWLiAbNXFYQMXqwBke24va7bjjki",
  "key17": "4fBXhFUu2ebEeQyHrh4PgaFG2GSPz96ZWnbb9AzrpPmWLF6MGrodnerbGxLFfLnzqVBc1vTqWEkMgzcKxgEDTpiU",
  "key18": "5j5grCz2vYL2ZuAw26QVJ9B9vSdHRC3YKpMq5AKPkvhVtpXUcSyZJLcpZyAnqjwXVPzfbbLJktCkvnVtvvnopzrG",
  "key19": "635trBnYg5LqpMmyN1T68DM5TSHHCpJxLvd4YtxC5BToPyv8AUXH44hBw9MB43psSDJ1X9zotzd989ifKY9mhUkJ",
  "key20": "3bLwiRJzhN3BvMHZKfan5LSHaN86T1VdM3sFAPspvETAMBVFfhSLztmUVmvKCaMUrkVpVPSeBCDUMTLAtxjQBNp6",
  "key21": "283oJcnXPC9TziF9jCHHCsq6ZGmcSCZYg8KGHymTMk9ai5vDJVU1TGpq9c5Ukcpgfr3wpsrPrKAF4Ma7MD135LTx",
  "key22": "4X6pdq5aoMEF4b8wPJWTFbyiNcr3gm4c5pSTKkVuZgr5UJx39GBFuMaKejpFyKy7CSdQ14NnMk78TUnyTCfH54Zv",
  "key23": "3hqvmDJd8BUcKRv1tKgzGfaQ3gTEFehW1YtFFimTPpFqHpiQYxttwfeo4HzFfoV5xqu2aMTHLLJZkbiQsM1WR79r",
  "key24": "PTrkVyyKMtwrrxA4dJpXz5edn8g3PqGLJDHEmg1g6TWdCUiz9LshWGK2FyY6WbPMZPahr4kfQJENvUUt8yZjknj",
  "key25": "9iUD2qHoGTGH9iJKqCvK98ZSgjZbVddrYYfxU5tATY9KMpnphCujGjuFhQYnt5taPTUpqqLJL8egtpugozZa2Vj",
  "key26": "4i4WwUsvX918aQSXMVBdFYZk1XrzCgRHmxJdPRXN3Hz7vfcmkYJVbZmA8wu846TbtL3wvcLsjodoQhMskJ5iuH7f",
  "key27": "5HuxmHHUpW2ws4mpaJ5jtFJPr1kMX5Ro8KSCwRsqp9JKo8U2fRJVpNaZ6qMxzVzFEHicp3NmUTpJ3BoqnTnCNMQx",
  "key28": "5nxWcZfqQVai1nEBujg91Rjov1vuud94pAS1bN3eBUvfGqcxtNR572yVHRrsYisNFodq1tzGrhisGw1DwpGnRyQg",
  "key29": "53GYfUQPDW8yHTPQy6vD4nspWrE5MSTK5FcqYfVKfq6bb3a5d6mtRhyp8SihRj5fkqGRqobGFNV5b6cadyGMwwfB",
  "key30": "4JQwxeimdrjky1SAaADevW7y3nYjeD8nfnkmJdGpbYeTUnXoGefRkRyW7cFBiJMQm2qzzonoHeYkXUD7DmQF4Vy6",
  "key31": "5BVnci3fGTk6VRRTYTGe74Kw2NbgH81q7ieJwvjNuZ2mNoi9u89FmZkoDrc5Ldc16PbmJ9uRA4KuHfGqmUSmYvAH",
  "key32": "5aJnAyWGt7xTpb65BvMqqrFXK7gAtKEDvhvpCWwgQXMaZ5c8QW5VTAMiQhcN175Wb2sW8C9EK6GucJgLvKbjNsSF",
  "key33": "3VyMzVvkutNtdQqd4arXfV7C3K4mgZoziruTxjgy78CMt8tQDJuHDvTvgyUhBomjdAFYXihug5XySCBK32xH8NEk",
  "key34": "4CPSe5fg2Hdgsw3nDDRuEb7hJYWwVTrzmv9XkF2putGuXV2btMj82av5nRNQwec7HE6QrnSczRh5BPMHGJhgRJ4T"
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
