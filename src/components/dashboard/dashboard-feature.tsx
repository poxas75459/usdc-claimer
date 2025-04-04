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
    "4KK1r6jSa2E9WyEVFEK21rhHGdv2fp2W1e3wyLppxo32mww6ZdRxb1DT8PmEkWqS4Xo41sr2eQJB4CDKwmUNdUiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4PwWzXV2kwdgLttsRmM8vqSVnoZVqPBcsnHwB42n9ww89xc4tBz8YCiSoceAXZcUUejMWh4ifdSksDLbcW3po6",
  "key1": "35Sy6Y1Wmw1PkiS92yMw2xv3ZuosKiTAPdCv9fVL2wchNP4EFoPgpATxAYfTsEQWkZHE6gGM7N5fJUNjc4HhYSeY",
  "key2": "4zLLXKpzSWKKao1aCfDkrM5TQ1155j7zRaeLi4kCtVhESNEjKbSrdMPwmW5TYKQQKg6gp6Sc9puNvL87ThJHvtJZ",
  "key3": "CbuToWPDxFM3TnkQKiPbV7UxyaZkWdmvZpzd8mUycSZ33GLzAhvsVS6yRjotfgQkDjA58y8piqq4wmMpQgnViXt",
  "key4": "mLdiu7SuycDgschFoy21yczK3A9b9KcCePYUWUtSAjEfGk9in8oAcNuxxedWJUaEqpNrqCoZTmADmWeiAGJEUL9",
  "key5": "SQCxD9qq97jLg9nMUajoPtsHjZCHe4wPu95qinacSx8fDVPHe2tLqgigmst4mSsj2xUm1yJoVgNwXbEkJtQMLyc",
  "key6": "5L2EYvPdmff7KVJ7vs8eoHcipivYZ2PAPVSDiRQYYEiUkMXeoLGyuXgxa5spCkmo8bCK9tUp7hEtfbSpGLBgiqmf",
  "key7": "67LQkBdop7xFxX1cX8m9Lhj2wqfwZFQM6BmY4AYpfxumNDqgQhmhu8R2NvqTUoapXgX2nngr5Nemn4RPwy8Fbaah",
  "key8": "4GMqMFUeKW5mTABieQ182oNw9K8UFBohEtCZ3KuVBLmgSMSzyq99yxPAjMrYZk56NVR4EoPVRCbvZYyyzmAs8TGF",
  "key9": "4KtCQSBrYmwxT9fTAV67oXGA297YpaG1UB13kyhUDg6vm75tEaTz9YCzb1kXSsiNXezzaJL7EQL1K3eNnNsgZx4t",
  "key10": "3Mk7o6shjmJViqUMnLtGaWDChV1KnYRfKCHQXfD3HaNyhxf7EGiBXHx4xMuRXsqE2u9cLMu7e4UtraDKTaRsgdiC",
  "key11": "29PAaMjGTYxtRxPfqNao2tMZZfL1RBXUDvBbJKZNhXSKmgcpbSfahAxJKtKoJ5eD8nRey8EvwPcPHv5Dv4wP7F75",
  "key12": "2heo9HQKLVmWYKBZb7d1fj7rpqgihzC7UeXsbdPTsYmL2Zns5KPQ2No1mnB8CcW9csH4daEtsr77r3Vv2Sa3dkux",
  "key13": "fkzMpo6h4n9TXKghwpxgEGdecRacD74XKSeRTfreXSzh6o8dkviQqu8SLFzBh9YaQAbXYEmCLAQ6Xs2vnSgDNaM",
  "key14": "1VHrcSmJBjStkLr3cFoPe9PUQD1SHC5tU9QTVCys61ov5CuAt1Lk2XAh8koNTe6SPRWsjupajNgJ2sfgzTxDSXA",
  "key15": "2yuXb3utvtGgJz7tCakBwf2svS5FdD9E3otoqD6bwyZsPSz3RmDqfCe4BJd52xnSen2AQbANoUjyQpfqvpKMsdzP",
  "key16": "4gVrmViHZCf49eQVqAy9U4PFQzLjMwVNeJsPNAFN6dg1QMxJhJy9VoUMKaSKHbExPfPBYA3ix7LzYrzHWg4pQagw",
  "key17": "4qzzQMwbCoXhHjAAy4sw1k83ynLvGXijPtbY3uY8vN6BXDFFqZSJxyckPfqC11hLq2VbG19pA8z4uxhEqmkMbE5n",
  "key18": "3CJPVd5J5NzQBMnkSdfmzQQjjdQvUPsM97CbzEjCVrAVFua77jsDjrfoQZmXC4zd7T19MUpT5u7XJJz2GiCtyeZv",
  "key19": "5FSXD1FRnvjy1SF2thfUc1QRDm8VdZ5iSuSdpnB3avvYKpyueETQyvjvNi2KEtayHQzrk71vbfCFqLyZatbL6719",
  "key20": "4AmNSPrR94bsxfTfQ5YmBvUxhN8j8UXUa4bActif83nbcPJEcU6JSjveLWH2P4vV6kgcMPsJUtyAZrWx6QBrZomm",
  "key21": "2pMFDYFay5fAddJrDuoP2Kd2PAJD4hVZWsMwJnduueGekKw1GPCQ1ojueghTDpTxVz5zSFcEfP5oB9vsGk6Nz2Gf",
  "key22": "3BqoWQub8j7SAyYy73Md4gLyfqQxhqxZYH8BJBPDeUedqbBd3puBtfQ89vLk2hyEDXSCPUzJPBs7aYDi7UvTqXGc",
  "key23": "4NMmHdC1SD5C77wtdQRbE5c2j9JTKmvNKg9yCHr2s8Hqokx2WurMUpEWyZsQDHzUinJPUZEQS7iPAJbyS9mH4CBs",
  "key24": "weXxJoYwGtRmEDrcw2i5REaMQvaM5mmb7kLtEYd5SYG3ytUbZdmpW9kiTD6AhK6aoNkJKJPemc7qWhwfbigJTN3",
  "key25": "65kiiCwSggpGrCPdUqm9SjaREUW6EqUp2rUjcwdCVXyanrMxngFvztnr7BUts4BPiH6sXJ7Mh8czUoKiafqA6ov7",
  "key26": "4ioBB4MsVFfkieJetY8XQJh4n5LEhpJFzRo1vYggSBhMeGfL2Ag5Uzbb2jL8Ysk1dzbHPZPs2aaSFrtfBbWpdt2q",
  "key27": "5V6wQ9Kkj5MZ2YUQM6GGZuXBqLnRYFH8tiTGmPC623oUH9NJEwmsvb4q9G5xvJ8hdNyFGMx28yoXs36q2tctQ1vs",
  "key28": "4FxQjwFDYGghDjfT5Woxz92pKWgEQ9XEEonRTouAzdeLamZQLfNoGW96iQGKkz6T5wrnsGtJFx5FDGi1Rjo8H3WR"
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
