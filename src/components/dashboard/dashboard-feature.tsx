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
    "3ntyowFR8KyfddKWaFgBrduKgKgMxpu6Ham5QGhSKitDZm4vj2R21AU3yZS9orrs2HzNnHC6rHnRbdRqZf99KY7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w95AdKeHkRg6SNeKzYnfKZqYFX2Ai5sMRsobSQM48oyFQbPkFcYykstXhEYa1DZACEZC6Zk6i5dAXEri4m7iuJS",
  "key1": "3cCFMCM4zWfaXNHpaHSm4AMvqi8tgpBLKsxojWzvy7XEmhpkofYeP2jiVFqxbtZhknbbdXqpieMuv8s1b5NUZjMW",
  "key2": "2hw2SRFsVQRBs5YQkGWijFj4xDXFmnkf2Y56WYDd11eKHPvPbpnA7uZFzEh8zHKEPrL6npFRKEu4PSqRoBya1C3z",
  "key3": "2zu317akcock7rDZjCb8sYC4KCNBkHBoU5K6YwubwziEoC5Luqz8M5DAokLH5Vv9cLVreSWTLaCXEPxsMDutyATt",
  "key4": "pgNz963Mpt94qF6ki56jJrLmaNq5wtEeeggSnr18EdaJqM2gB9cwqE6DfAf9aHmhBi2yDHp58J8X6f5HYAdBCdS",
  "key5": "3KSJ8CZxtiR8hdcXZoYqYhiC8U2rdwoukYDLjgWBppoGxHHg52odHUQ3y3Zib1c2iMWK4dBwDPa3JUJ8kJiF2XAj",
  "key6": "4BPaHDcX6merd9McEoxG3kUDu5wUwhdsJjRvs1bANjkuxYeG1MoxD1P4WWQ6Sn8WuhauHPyqbcurVLM85kc6vrGt",
  "key7": "23uGTCSkevMNFdmmHwfP6rRxgdPbNoDQ81nd2hauaCii4w6Ngby6s8rWzUWHSUpTAp3Cqx8gcpkJE6jgZsNtBhmP",
  "key8": "3962aghEmdJZBt8kuvi9ehx9oadrQDydv9gaTYmPcKYEykgN9nsxui7gerX8o6ixKKPq3ShTDT461QqCxkss1PVp",
  "key9": "4skqXHo6WuLnHsbNH3TYabDokoiobCFv3sTgXvTRwMgxJF79PEz5ZgUri25m1GPPKRSxhKGfR1Q3ANCthCYJQGiL",
  "key10": "5nm1TsNuAAVbXbX5kMi716uBAaPWY7gdFD7FGPRurdYsDjqt8y21WF2bgiGt7aHbGK1mo6d4xyFL3PsN2vuhKHVa",
  "key11": "3rq3g9uWFXKZgKcyy735gKo6ZxPt2FJHK875rM1bPGCz9mbggbA48hJTBXoeEp8KFzZ9DKsNmjEHMcLrWaGZzB5Y",
  "key12": "4Ltb3J7zPE7FhNswQzb5obnojdVa1s4MHe49exe4uQ75PouoeurT8ktsx29qnwZsqCpnSm16VhALJGP6kmDh9bXk",
  "key13": "6uLS7cPm1CQ1TbUKqwPozJzV2Hfzux6Sdv2THnCzSWYQXyWkMgPCPC1aD6v1wrTXr9yyHzFVKuunW8HDagWYvUP",
  "key14": "3nrJxjV3XWrsjCDmxQLdAq4EDicRGUUJ8zSLvbyWo92qsZRsrVuMQZBmMNat3cZ96EMHjrXWRjM5HAtXzxLnyN16",
  "key15": "517zSAnjfJxk5pGXGL1gdFvS3dngAAmhBvKc45xVeGpWcZwu4Cs5QnXEW9hCC89KcrAR39S3T47M4sPRoah4ufau",
  "key16": "2zmechMgcgn1hKUSM2PDsP8kJDhRpjGRoAUz671f79DhMUPBoohs9VWVc11hqPJA3vQQB4Dhxo8nNbuxg2DdYqak",
  "key17": "4YtdfZs6XzJrsrxoTTjnDuA9KHtWfey1ioayCPXx5oSztWe3yWiS6MLcFiQLcDeTYf13Fqa8qcGoh1Bhwgu6iejS",
  "key18": "4mmNb8FwAPLoUMY3WHgomxa16GeG4W3AZD4JpkiJtWyiKjDcJ1NurgEmpU9pZnwVVHERULtRLtopT6AaKspM5vpK",
  "key19": "46AYUvPVc4NBVpZYmugZ1Qvcw1QeRpwcWZ3YsuE36NmWNTtLAaigrfJ1DFBjNhQkfSy14VKj79Zznj8c8LGezoCY",
  "key20": "5ob6VUfPkmJurLuAhcDJiLC7Z7h3USPH4r5BAFSimxydNSmFpyMP1n2r8A3TTHRh6wmugu2jfAAwpL6v3ctPUk69",
  "key21": "3z1aaFkp25kWmRHk1QHdnypbfPAMWsd8Y9rZKTRXf9Gtkj5e7ojfrU8LYHmFDbEwd37dsRrxwCvWpfazACKegzJi",
  "key22": "2tFCu2bcjfxKg3CufJnmg1CRS7CD416tvDfYGUjdf4qQ4ouwbauVBydvPUqcKZs6PzpJP2YNf9pTk9YiuBfptwcr",
  "key23": "2ZU2dFkhVuhfK4PK5DB4Fup8e7LaKkFVbGz5hfMiqVJXcyLAoT6APp6qXKWugF4URwow2iiQHXHRpPvGWb7ACiME",
  "key24": "51vhaZUe7JzGonK3kAATnNsnqArErngqAUaMdAv97aSHr34oZJkgLWbphQrfWSkNL9XBEhvmiiFes1BuwHKKKsXW",
  "key25": "5cMTRw4iRzU2zTtMDaweAvNzMTMkF4E1ryRDYUPNmtaaeq2zzx92KHof1RNhYL2z3W7NcQBQbjCMvnqM3x1NhffR",
  "key26": "3VyxmGnESCnkxA2L5X9Sa7FQaQKzerxkVNyXMBc7C8XZYrGFaqKZrcEBpuEDbEjAvwripvDewAxsyftza7SKUhdm",
  "key27": "5ygsPhTBBd7JRnhawEFBRCMiqSpPMjj4S1CxY7wUVUzAya5i8WgDDLaSK6QP2F6mAfjSgqbwrjtNuNehYBSYGiA5",
  "key28": "52eUN6VywgxTW6bF1NWZQ3NbyJ8MTXd23geHRBCB8EemnQEF1zgEzYcz8fWF2ShZ8Z9Y6pk8gdyYHuCawG5Rdvzm",
  "key29": "3kWHjxDDtU6W6PLhXQDmWHAX1uAqf6yYXb5Ve3wNdaXFXLEJ3WU1Mes4D4L4gmXfCnQ893kw9cCffGPGT91hzhFe",
  "key30": "5SSvgjGdCw8iPNo7FUH1tUyLs9NU9Khkkmu1oD7DgpNaCYXR2wVrxWfnFevtxxb45QLeQe7KLtMXvUh7aMKknNgZ",
  "key31": "2sUYnkrXsVbbcBhF3wHKXYF72gEszfuupm18asDbLnoZvhZrVjF1bpZtcdoeEM9iGrtb5Vwrt1UXTnwW4avTXokH"
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
