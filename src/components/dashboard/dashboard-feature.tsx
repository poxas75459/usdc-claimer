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
    "4EUJAVYfUzRSBEjuLVEf6JDjUgZnmoSbPp1UGoWbCGDJgaDV78QC1CEUYHmNuyUBoQo6xrWqsMtLuR5wrSaGg81i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGBGxJXipVythiSiShbRk1ACYV4BjfFeEXZh95VLzEzQ47hm61aodvk9EyC6eSzowNc7PXTAvz9m5fdiDrnpgAn",
  "key1": "4yrAdnzfVksV5zsHjpD6VMaYaGVsRqSkQqXo2hVe5EKSVA8dADR3pjnHVbZxmZntxzH3CEptFnYe6uRX6obwKkAM",
  "key2": "4nbJKhWzjiEhAowWCZhHr4yKmmDiPg1NXezn7te3QGWpX8SnL73NxVm3Mx1ZbLFbLbAhV9dL1v2t1ZS3ybRFCcdL",
  "key3": "4PTAM9BC2z8KgWpSzE8Hzt1VHFsLLp2ERBdusB9ffxr3Lsg8emfEPCBnYfpeMnZGn9uaz2eB5HUua4ERMnr6oL4F",
  "key4": "2eNtrCFqFsupMyJ2XvYATnp18X2uzGCpqBqCoeNF1C3fC6bJ9foi5XQ51N9VSxgzGN77NWsW3PTMCwmQ7BJ1TPUs",
  "key5": "5N5m5uF6eQmjb9yaY1yFjpC3nMp6Cijke7egfGdvNUxTEvZwk8995xvQvhqD34zeg26PxvH8bAqFEfrd1feYezSf",
  "key6": "2i4dkGJaA5GauwooSiEfQQfmgvf1rXiRh3F67AiTbHhVzw4q75cUWu57gFgzVvPpg9KgSNQSECiP12btUm6uiT3V",
  "key7": "3HbTGUg1qm3zKrDD1RYDB9pZyiAgCgG9fcdhDYko5DU4xnPmBHDbT18dWtqEb6aze9qVKL7tWXzXVrSFkFnwKTyq",
  "key8": "zbawm2howJYappJCnHUAhkodQfkc71EiXh4nSRJRKeVYuuP8qAQzgk88zZayYfahLfh9WsnRci6iVAgXw9yAr8i",
  "key9": "5EVJm8kngsUfFY4ZSoxcGzdMmTHqRzui4eDftLWQfiqn4328ErvwNVkyGsbaMWsiiwZCdkFsEcwdVvhwiUa7U1AE",
  "key10": "2T221KCuHHLkXGXNseeKn31X2ZuJWrUYJSMMG9wGAKdqGVuMg5zEU631QU4T2k65DPnHazzopHhY6t8ABV6xWepx",
  "key11": "3DmstSm2XDyxcErJ9NrBm29DwVrF2REhNJHkUtuXSwtC1Qsd6rfQxtwHxzyXNJ8KB9djH4iXSTAHvbPjU5pMSM9a",
  "key12": "5CABdmgsEzy26sfdEGGuvUTcdfGsXvEm9NikBLjSN2RyAoTqEnV9oabg4EDZdzGUCsSFyASCzLez15dF1jiGAHzm",
  "key13": "4yNxyWHaX2AxcWkBjiSH1AW6j5zb97fnvYim5ar5dyYTwnc9jeA9paES27WAdeQkdTBAkbq2Wx26zuULXXzUhQWG",
  "key14": "erjULMjydx3ktJqh7UASTkKTHF4cqjHa38kbYJzwf9Xqhx8yngiVMmgUqVUowpp59VXytSnMS6SMFXtA23GX1r5",
  "key15": "1mXeYRkgkQBx4Bz5NCfMtj9gy38JxrHHeRcuQdfx1e23PKj7pikzqAvEK9PQ27XdecMvLKMdpmJiXEWWgqesew4",
  "key16": "5ToHcVtDExpPVXQvwLeKdCTzSL5LgS9NXYJ9y54Q8fTxeikAgr3vkaRnMnPwws4ANYALS2QFEyB5zE7CzP6H9UzF",
  "key17": "3obm8GMLHjovpNW1ew1S1WHvmtE7R4LW2chR1uJ5YFh7n26K4jaaPgQ1QAwK4dpjbJQomhKLNRNC1JtNgXZy4z4f",
  "key18": "4BFcRMdNotQ6WMDJZEV9NovFsP6XXPCxjrEMoxSQRZBPvvmwVZjRVrc4WKohsZnyChEK2icg6sWjxxzha8AnXzFA",
  "key19": "5RkLTMyeba9rKMS2yHv5E9SDftavr3tdtwzLfeEBPP94WabFTwSmnuxdjxdUoeY1zgtELzd9efTzjJJqqUC2LBL5",
  "key20": "552ZJ86sFGdYwFr4BFfbGxrcSCWF4p5ut7DkSZGnko4PmpmedPMa6qcc9zZHUeG2h1hVD5NhusRPr1wZ4wtTh9YR",
  "key21": "2ViBrPUvNRrSYFjkrBNLCaYTe7tAVGEiPkCNk4vCt1wt7Yjn29r5mNU7JasKnw7BaFkxNdYHLeA3pryvuFKzX1Gp",
  "key22": "PuJkmx27BFPptwJXwhgocF2v2MzNqQfwudKBEHFpqLTLfyAc3EArg7cwm47tQ47V9ohpRXH7af5RftEjjsrAC2M",
  "key23": "4gSggD67rHX1v7gqvSaJrW8aJfgLb4FKWUGEhcVtYyXyC4HYCgEQsszhSGrjJc9w7hZWKT9FRBi3EX5KuXBRuGKo",
  "key24": "2bXh6bZpR5jUAS4jVdaNpDKwiDa9BtEtTmSXyX2w9YwQX9b4KhXsR17guHH7U2Axsvb22z11NjFko8h8LUoSPbgE",
  "key25": "5vhSSH6BMpoyxbAhwuixoEZiaTvEgirBRqhG4tXG5SydNYfRVVaWHddxcfd55a4iGA2mont5EgJnwJxSezGy5Kfy",
  "key26": "4B5yr6yeLnZKQj3speHgpTDnknJPWADr5w5aB5r2oKYArV9nMdeRMY53udv1UTbK7jFt2p96dKL4CLZMyfh4Yv7U",
  "key27": "5dno3ELeU3DxQ34k5S1iv2b1VsbriXrN1CodyK3xb4zxpbpjYN1tqUps1uNVnm6XgtpW7SQvbMaY4DPUNhzPEAXN",
  "key28": "NBzxVoj9BUtmKspusGghmTQDEY2RbWUBAmTacSiDMQK9UFRxLizK5JJuQrDBwwj13G3fpahkFUayvzwXE1kedrx",
  "key29": "4BKjAEVzJgTKd6yzSiiYfDwV9EAgFnV3pdNdASH9Mg8aQavTomFCmhusNPCS2Fu1L3LF9U9XGLf85YKer5NTSPeY",
  "key30": "2H5cLUBigQ96hRjMviovmAnD1SL6x7afw55LumwZg7dU2e2N8TWKawTWfWFrETTWqotTMqE78wDWLzmA5DwuUMmq",
  "key31": "Xd6URKMdHFaUxAMeiTfwWhQNQ4t3P7gKCYAoyBpSgdUGn2t2sTaEH9B6YwoLTH6h1S53wsq1K1ZJFNN6wiNPmKN",
  "key32": "2F516sdoNH91jj94y8Bw5mk8EQBeEob74aPbUgWMguyUDvkFmSQyxTCKMthTVU4dyFH2dfQKyzW1GUc5G9P6zVEk",
  "key33": "3nHYKJgmKsCWVZMXpTj6XRaQZJ9tZifL9LGkrXRDfHbuygv4nBzhLJg3U5fDkdFhrhgs4krANzaPYXK2yCCZKyY3",
  "key34": "5H6happxhzwWfc2upXoKDY9FN1zQkaRhUnDH2sPr19p7ATZ5GmfuRX61sbzxjhLi7pHAHvkUqADrtFknsSpQ2iDA"
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
