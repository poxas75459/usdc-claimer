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
    "4WtPDw75Rh42e8ayK57ssvgJN3w35cuoz8ZMyfZBkk1kvm1LjZ5pgybBAooTo26NBEPk38paFpb4kzzqMrynWGg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GX5cfxqKYYC6cvXcg1YgeHppvm6YmPrDPujnXh9Loup5xPjyTewU7fvbHNU1oFRBh6ubiSGV9nDyhV1V9iiNRgs",
  "key1": "4hmj6cn6zz396HgLAyTZfJX7CsTw6Xcx68b1WJzPwjapsSKaCmwaPJYvEuSjjaJHJXcf12FEwCAWbwPZmXmHS2mL",
  "key2": "3LvzzuLPndDCQqK8SuYUtJgESN55aC6ySsEcfmuRfnN4WMJHbHDuXjDC8VmPbpFUzmcnjLFidUZrv3YGUN1ogCLB",
  "key3": "5381s9p6ULaQFDDWEfggCyjaHA17Vt98R7Dy5dNcYTBJe9rCfhMYLu6MJZcGB7yiUrqjBAEc1wzjURf3uSgzdhsA",
  "key4": "5iu3x3CzEwL4v4mnXAjuTv5VHDj9FtDUZStSFpr3mf3M9VtYHPKsKfsikdmwLF4vp8hYwLFLD2M1yi6xKToKJGgU",
  "key5": "7SewAxLe29KNTaaxiZSYrCcRDcdgej3zGwoUt8TxavnUjSGrKqkieGHCpvXot4gCqe6TPB3FvH1q8AKxtEAGhiC",
  "key6": "ZmbZNpDRTNpj8vVwC1bfN5j3sqgCfUQZ6xQc3ipQZP26Cwgdx7nmao5Fp3CGMGtw5N3v877bZBoZ2yUy7TMToah",
  "key7": "43gkkPLc13n3tsyFtowkNJQ6HqQXNaqh6DzbLsqNDaHPQLckWyS94HRHev9skMSjhKEXRaVjPHbiyKTTZph5xuVC",
  "key8": "26QTJzR23fTcdVXnAYuJdNgzpMRpdsEbgtY5MDFYeDPmpphhkoVZ9nZCzLUY4fk2jVMBgraRJq8tJQ6rm9E9amGN",
  "key9": "3UdZZYwSM3tJMK35vuDKJP8at36GEbC1jP91kLac4XyUEjBLz3EvwZhVnQ5KSFwmaNF9Z7kU2Lz5iv9kug1gCiha",
  "key10": "3HjfbRDTvv64kNaVZkt86cytTtT72GFnV6XhvG4SVZHoXpi3mKCgbEycFkrviznakDQ1pCQJ1bBTk1SEx2BbuBKm",
  "key11": "2S4dncof7hDzvkRuGNkh6x6UBWqEnVaqJ29PFhiDPe38t8yviUXoeijq8mnkfuCbypJhnrieXPPwYqm7YAKWGdKS",
  "key12": "Ssx6fDm6Vnc98HZMPjvsA3AwdqSkTxsoD171i2ydLQj9djJ1Z6LucHrfgcUvAL7uFLpEtF87LsU6mjvtZRtHjJc",
  "key13": "gdvULNpPQW4FaKWUf7ArpBnWoRGyuz7m4P4aoCX4fLJ4pFu8hBqeSn8uMmbXQfDVErzqz1bp1w35JrNKU7QeyYy",
  "key14": "5xQPCPusvHoMm753dBFN7hmFKngc227eWaNzaabcoWijkis27Ld3A9uWyFeTXhjpGbf5C2pqcHDMj2swzkaExnRJ",
  "key15": "5fky8T48bdCFtpxwF6cPqnD4kdA9nsxBvikmp1V311Dy5n93Hdi6BFPUTKi4e4BfAA2c49bPBFQ2HxT3JoLYHSKc",
  "key16": "3y37oVLnx4CEZnGo8ZNkvUVLJ4xLtRQP2hrUcwaBajtE8ZqUVzyjusHYza2sYq8pjoQtBkan9AWmpD4qaXFvFBng",
  "key17": "3DYXT5CcZLvjzdPgtPVpKB5p9QbdfNbdYy2WxnZXNRKBFStdtdx3bU5eqTe5RAMKkoaZegxUFdKTorMEqKPYMyeH",
  "key18": "4WgdC73Qsmc6mwPfhEW1zqGzyU4CoZC7ZarhN3yDy2j1NNnSL11TQTfY8LY13abUGQ5YYEc5SLeQzaiEToM7iTYD",
  "key19": "4ckUKiTw95KwKoSRY5kfr7ELGLDUfadHRoqwkYe2rMRhABThieMK5MqAe4rB8MYjTTckrwndPWQoqpgxzY8TRtDa",
  "key20": "2fQQSNCHmCj57zh1AbRJLGFQauQRJQRQgFLGnub7VLvf3CxoyJGmRJmqRo3gJUQKKy2P75sAYdRcug3mpwHsnE64",
  "key21": "3eB8HQHSCThvsFe7x7Bd8HSt3UwtPzWHWoqL3jUH9yQcB59Yrh7iR4LmiAfLBdXUC7Psq76jiGvvSUn7JF2qE4Xe",
  "key22": "3Lx7tKLbgi8FQGGD9ngYd313jBYCrNMfqXEJp1pDUpB9UTYYQzpJz4BHY1VFgdLZ5XqVphW291QxgApzZjMvxZdp",
  "key23": "2YSLtP4ZymxyCwYCrcDyCrf3aW8HU1dkNd18vUdmwAm3L1Fuyu9bfvASn4xLWZnNAGH9YC96My4QRtkg6xrbvc86",
  "key24": "4fMWZYHDtxFQwWLqVeonomcuzejnDeGryWMpUnRMNFTmPFoN73fQvUK8vEVAtcVQaoZasyzGZcTd2hJ6UYnKKaDJ",
  "key25": "3DzmtEsygXP2yNSR7jtng69SxxCiaC5jLiN1yZ6zpDDUoy555LPZVGcsHUTiTCwpLXmuKbZBp1SYCsw2f5Ume9Q7",
  "key26": "fBgXchSXe4a7vCyNLGjtv3EVz2hDNoiNjATPAJ4khdjkjpohVq7FvZdCJHMpWWyhM9afgS9nNKhHJ2mHkWqzKWX",
  "key27": "4XwDXYJLPxQwFeLWY1bXX1AeCsFxbcw6qSrzb7FocoCfk4kcG9gTkfGXSGhquHNfPooYYCsDW9aPu84raQDdFTPb",
  "key28": "5nNmdNKQn3G2p7hhwZX8XZvK93SpX9oXkmBKwwHk7XVwh2AvZ7WkfwFW7taoxyWetRNkRQC6qm9ANjBtgao6L9hw",
  "key29": "2v2ME5CUwhSLjxTEQo9cJYegsTLf23KfsqNsbPu8o8vALtaF2fSMBJf2sEz7sWPMDaVWhEoSTZXhexBHKdAxzFgd",
  "key30": "4XwoQ6f7xq96YWLeRBtgdCrokmbKtQmsmUBgchD2tbWQ3oQz3JFPLcbLKiqej8us7nHx9Yj4yBzqFKNJKDYJryT7",
  "key31": "hgPY1g5MgbaN1N34paYEQii13fn32VfiVMu55FXLPHMCRioVNiK7Z65Sf19brePMtnXg1s9L4PnmWpfPYzQrwQo",
  "key32": "SbE3guJu69oHMvy2zwogLfVjU71SvPvqu8mramZ4Kz77S3Ex6zaqtGXSRodGGbnVpY9Vp6aXUdMV8t1GqrhRm6r",
  "key33": "46nrCPKZK2vq2UvVE6mHihVzVMCiQTSe9qvtCM9GFSq3H4fp3Uky1SfiQeccrkWKuxpTgHAYBb4UdSvWGZcTKtZn",
  "key34": "2FrmormeeLUMzkuvBpZSQRzBgYaCt7wKb37m8965FZwUk9LprmFmMV6BEhWAeE6Y8xXcq97ipwhf3C4PvKk93P1F",
  "key35": "4Bd2jKAvWsJLe6yaAHmc17ynqV1seXSuLTsnFoxhteEp1uPRnbAnYS8eghwZoZieNerPiSg2yyLcQxr9cLM79kPd",
  "key36": "ZnswQK4AV3DwKtzXYGApGAQiePtE8ddaxaJ5Zuh9FPxw6aABtyfwffnYTpAEpYNUptw7DdHPcBg293B1j2PQAWf",
  "key37": "63NkGr4UcPXkeaEfyPZx7ZBWU8tYYCi7KQuu6bcSqqfRbkXUWSbYeCLpF5cGkG1B2Z5DBL5qzy1KYBMzrHvzwwyJ",
  "key38": "3nZAYt51smMPc9Zv4QUaHnQcp4f2bNsiH9vdzCBUk9yDfzZqVZjSPvY7wDE6DRyCzzETKKFVqVF5CrxC65ur5eJ7",
  "key39": "kdQ8p1LinbVWQHR9Th9HZ4dbRwQY47mmYcSTEt8mxBHiMZcL21vTHUYnhUwDofWHXYjyT8ejNwKFbykwDosjccN"
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
