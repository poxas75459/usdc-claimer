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
    "24THJYTh28dHSQMRyf7jcmz82M3KH1ak6LtfVhm2urGGdP7HtczXnsWVtdCkB9NempDNRStRbDM65DgVcAGcpgyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VnQmyfsbiYPvq2cgrE6kpWE9aQa5RwkSDXbEbvaN8pLEBUYYqiCp8saMaDV77AxPSuY2Ubo8ENKBfRwDCmz5iQF",
  "key1": "2XtnFuZzh1gJpErFwseXXFFMtuzFMeJCE87yjUr6uia4XH2rjGQsRRWQqX44txtBPgfiEYH7d94sw4pBk6y4cGcn",
  "key2": "4Vy72Ku3TX3usXLW3bjqdfCPEhW3o3SmkExDpVaKCdNmD3ZWV44Qtia6Wftfs8yCMBejq2uVX8Dq7qaS6CqbiPzW",
  "key3": "XF1jrY4K2v77BXmsKxMiapQwgXMyHWTELXy3jhZssdypDRUNrDdzPc8nQ3JifAkxAjymBxaBzviUeD6Ze1rs4W3",
  "key4": "2trBzsYk2cTLDpRbEZUPR4sjVPnvYdNjF4hdGGBpUbTXLncwtzkjqC8eurPm9sndjZ2wuAnbTaXEzZ82un3aEVvT",
  "key5": "5y9P2Gszs1KHnpQLDeTqmTP6eu4z2Z1DLGPAmXXi6RXwVZK1Rz4jsLqKzt8khxAyP2fmK3wzz1QVKZbJn27ncc84",
  "key6": "2NzGA7acEk8HkxNXLmajCF6HpF45Q9UfUwEPRmq3x8HSq18oqHE2FQgR5vRrauPjsFhtcmB6LCt174XMpW9ufZwC",
  "key7": "54t5K3FLLvXAH2otayftPRFTTduG4xqRpxEbyJX3C6NWJbd79DKZk86RBkHRP3P14v6FpBc3CdRo3Swp2B7Px89S",
  "key8": "4LbhCs1DePbDJwKi8AwVnypgxnxMCU3z62kH9FVGcxv1axgLwvrjJWLrz1bqqa1jPEC3QthL7wuuCmNE4va6vKkH",
  "key9": "RzB8hCa1vLRiCSeFjSJjBfJqKXtdkF7MBSErA71jzVgPS8kYefFk25p9WjSZ6GomJfA3ZkPVbns2XVncmJzDQB3",
  "key10": "4hF5P4ARLSFe4F5nZ1z5WRoTc5FGWJqhoWgPxRoFEvdzMqzFwnm4FJ1stpF6NeYNNyxz3KuZ8VEABSB3c9vGTGTQ",
  "key11": "3t6tv1WAED623s5Lia5TERKTF8ZdQbx39FUsS1YNpBr69ygps8BVaNnVnf2XJxLHueptmC9iWyKB5GNk3JKnsiRc",
  "key12": "23J1VrbbfvcxrJg491ZMTAg1XnF7oNRSqNDcojo1txCBAeHjXZTaiPvZPZz1k6RE5KoMVedpsRtjLEnJAgof7icB",
  "key13": "5HxyZY1ukyM7222bsFVm7GLtTHS7GsBb868TxZgNL782kTSF3Z7iemEpH18ix5rNsZcRZPTg4MCkZLdKLRGx2uCZ",
  "key14": "5f8xXXhWDL82TeyAkbgJwxPYHa1u2PaPoa9bEZChK54peaVZoVhj36vJLxKPFTBrKWqjPsEAYak2z1goKgDxB8wp",
  "key15": "2eBheYEt7yGp6wFMtjU6yjrBC23ZksRAg5dDL23LTetW5E3miPX8egT2Wna5HiLR1AegneTSAtzwnUPoR3HaywLF",
  "key16": "L7qHGiuKxTLo8hYxxLTJ76GuKe8Kha8KzBFFdbwcsYsrpgEK3zaeKY3Z2vhEsBt29vnM5DsPS1vQ4NA64Z7Fhx2",
  "key17": "5a8Ddg2YHuy8rusJtipPBMbFCn5oaX67fafMH6iDukSWbexVFsMd3dNouLjfHZ3VgRrGAjFhExLLjgZvYHDc5Ger",
  "key18": "5FYH8mRJn92eFYghU2k3A7W8rQNBAvkfTb9y7YrTb4a7YsPWwdJCXaXYYfixLpr6zuzZfNyBEVqx52XhAstnT3KV",
  "key19": "4xR34nWqHvjHUv311W3ifnKS5UufZYDYTf2hijKRp9XTYGHDSEHQ3ktJpzqqmmvjKVNrXD463ybC78D7xYrMb68W",
  "key20": "3nHbFUFpYoWE7W5kSdyQugrP7b2Booey6uK2GVqTf35UUkuuUBLzZ6RqG61kjYfVggXa4BzJmcU8vgRhw1qrPD8E",
  "key21": "2ddXAKzJuLTy1Mxjky8dhCjn3L1brwNTVGD8WaX6w7nedgv5KqgA6wYsBgdyXVwx6D46g9DuuRVvD4dUvHnyATob",
  "key22": "3oqXnGCqjCCZsSyXngixa1AXLe22Vda9V4WQHBYJnN8sVGa1Cf2DS3h6Pmx17CtqbA7kUaCXmRnAEC5pxScHnimc",
  "key23": "7Ry9rQ36Ccxty6cFfpDcekgyF64dE39XhpfpGFZYNxWt23oRJgvdhuoFzezCJxftjp8gasMEj81sT6AasmZD37L",
  "key24": "2kDCeuyjsGvbiwRu9x2PDzE6MNmCxwMmZ6qHRuP6d5vXUSnPakAXHGiKRYwyYE5kRueqez2R19nLKxA1e7Mjn8XV",
  "key25": "W7nsvPX9qubiCut7JMsTkcNT6thmaJkDJhSG28nDKEqbUgdZRFVSkjS18vMNquAYezfEERK7rHyNKW7t58LrPmG",
  "key26": "5NZSnAAxpedtHNMafEu64BThCcNmgvFcJHXn2Ci8BLAochEoC2WoYKuUS9Rbf1F5rLNgipfhaBGAnM6A4XETWYMc",
  "key27": "4fz5vWoXBU4rC9oXGMGQdFPPVm3ZjxWs8GmfPYssZqjejqSgwCijWsVpJLGS11mKsZeA1RSFcMwPzzN6XFWq9Gf1",
  "key28": "2n9ysh1fEmRqJEZMXTpCVrNPKUU1HrKMv3pUfEm2qKis7H5fRxQHuWiaSxAe4XzFeBzxLskANwsjhLtXYuhfGHnc",
  "key29": "3ESoEd1V2Z6mbUQ9CtmpLdadRDsVMXzi8jDhkJNiXmSRhRvgChuhEhhhbqXjfXj7f1fWBcKrQQocSdKekoX1Y2yK",
  "key30": "3ZM2NBapXvdsthTPhXnV19AsTg1e3WPQzunsCrK9hMf7e1rixwcVHWpaunW8D2Vpbj1eVSFLZALykiGWZQw46QMs",
  "key31": "3CcgZ8qNJzVMYFNxAocnLbGNnQLwWiPofrEHE2GUSRNYsvhTpRnE8iMeP4Nj1k1BZAwnroSU8V5r6U7WzyFLLLmR",
  "key32": "4SK8krEJfNPVZw9uzv5KteATxBwUS9Dx2VcMtvsgeetps3ANZYkouRyevYUj119NqVKBGSXTjsb8RuK2rL5ugVUo",
  "key33": "2cGSPPBQ2LLjbmPa9bFzwNRUMgioRyCvKtZRG4Jk88nRSM6S1se6uDr2651NZtqHDYXsZFxay8JvBrK4yBxF7VFu",
  "key34": "EMhRwS8DSzDGZuajUQchWQ7rQC41qSGQ8msDRBQMS13qsts6CDrf7GNLLXM2WEM5kFs4zPVJa5AkEeRtV9ZprzA",
  "key35": "3wtLuUxtZVZwPSp82Tk9M4piPF4KBaWzBCnBNJLyTZ1v1oea4u9SYxuSp2dWjaDJHadfNDnd19XRB2yhHrxDAFKN"
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
