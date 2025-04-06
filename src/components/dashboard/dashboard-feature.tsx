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
    "3uiZrAZ5yumd9pMdGjRxy764af8d7rUYiEex9z3STa3EaS4Vs4ujXVjY4AhuVaYSpC3DTihGZpkzujfX7bHTkjPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfFwfpQNRrGERQwPMkeVZHqwD6fwSB9Atyni3T756tdCWpa6MTzsiTjcUjNyyJDXZmPoJMipPYGcqnXNezrhDRr",
  "key1": "3AyUfhoQ8Y88MCdh3quLJ5HdNMULR5DrkfDBDUpyuHW3xaXvNEp8mWoeHhcKju2z11Z8yvBARMV6tNax6qAYLb4N",
  "key2": "54XnF2RYPoyYqJ9NcXcGPjmgWjc36EE1HLfXTSa5TC3QY4JbN4gmXhgbCadxsmEZ1PRquCnEfKQyo4QmtVNCrJrg",
  "key3": "d1Na4FRSvtWsdLvaXkQvo8FwoJtWo3kaEsMKUx8a9DtyzXdextvAcTjLMcdteMECfZrmMQxaRh8tpGboXMF3shu",
  "key4": "5Ay3u5VP6d3iCo8t3hDyTmyJcqxnenxFMzwMde1ZBd5s842zb5bN5QRndeZ5y82PgKtg7fc5jwFz5rrtjg5Pxt41",
  "key5": "52mCpEiNDZeFVqhwCUFmRTCmiQRw6JZXe7HZqgLQxXKFgcJznKk2DGBjZjn2Hy2WKYNjhrLWVQYqqRyPKU1TQ6we",
  "key6": "2QpmMJkE2YwKwnJfwudVNusZ4193Yd13b86CbnDV7wMaUo2o35PmxvdHqQqjrYJKR9LjqRRzv4WS2YSKPKGmQ556",
  "key7": "4KE1zwixtyd6soMJ3TpQES3Cc99JBJ1bYfNuNBfEjXXpZj28j98YPkRDCKyCbhKf7NPcLZEmHZvkmFPyWcB4nRAk",
  "key8": "3kvDoxM1LYWxNybLyDiQfdJgVW5ERbrQWGWBTMUCjTYzLHYHN65fs56jCp3oecAHqGDs721UN9x1hBWSgQ1bvFrX",
  "key9": "37sHZwahQifoJuvsxTLQEGSHnYtfiEfCP2mkHv1Bg9zH3AxXRx8mNDp3QBNFYBPptzDq2kaogk7RM4KVesznMABb",
  "key10": "3LQQptHPBdc1QQRjLDafg7d6qx99LQEtG7xcCzwrbttPKV8jidZF2eE1XbvndsHQkDDVrsxNfeBguasFdwoLV37j",
  "key11": "28MfbfJvenjHWDPACVPvXEp4BSCHgL38bCj59DeGjuvBFXzfJhrNj3HygNpAWzDv7jmhDN1BZZMM1sKjf54TurfZ",
  "key12": "2LRTxKo5rfhAW1PUKgzGYks3EYhVHe9Zm9tEDX3VxV7LPVNsApQeWMcuwjmbCeEKhPdAd7eBrUmUAZdEesNdKGhz",
  "key13": "3q4ATGSDcaKSRMjfEmZ8GH88nFX9pVSfvSrMwEyXdGbSnpTWQ4YPJrWtufxA2q3qEXukKCzJzUod2h3SfDoAXetT",
  "key14": "5va4jEnXwsb3kmkEZ2NQvY4Na5qo8ZtS2kxiVpa5LBinBBcNZ7tukmib4jGc5cK1DjHZZwJMsG8RLjdRAtSTgSvx",
  "key15": "QryyEYKf7T4HYzJMRGrL6grTJ4LHd3iNMkaebp2d1X1rarMdpeeePs5SAuoe6VjLcCe9ZEqqTkyGC2wd3ExKJxA",
  "key16": "41wvBDEspUZHsk9x3iPE83G1rvW25bc7bpfo7dgAPRwmHAbxmwKod5PBPWDUKCMjFiqrwrmr85QRpCxNKW4wMyig",
  "key17": "5M3zXtUSpyoZyQ2TSNFw8bdjLTzz7pX5jmkPP5fCyMxfGk2cfVQ8MrP5EkGZRkV5rD9hJxaa46WugULPiAhkK3XL",
  "key18": "3v9AoSvpp1zfakDvq1w9LAAUGwCjPwCGWCmGpuYQ7zZKSUnDw123g2Rb5g16DXbJzGnJee1sTzBt63LLawr3rP4q",
  "key19": "56jShbupKXZygALnwtpGH1EB8hfCERyGVXeJV34rFuQ8gTQQbtwzhXEUGQgrE95swBBxAaHM54xdEJpXWV3RDv99",
  "key20": "DHnfkMqPAnr7Z5g6BqkPPcuT3zjmtdbSPabfDSV1R2TC4BnwYzHTxY68kQg8vv9tt2dN6AFWHe8MAEQHdyXQfvY",
  "key21": "5hwSuZUWyPxxKxtgx4Rx9NgmNjrvR9iRVABRYAMCphXHS1wa7sZxXGSckxgPVKyvk7h84GzLeyRL5WW1esM5pibc",
  "key22": "2TJEKBxTYWzZCvs4AxQAkP2R25BtUjurrmrA8smWwS1iLmDzhKx35XadHLexxS52qB5Gm3Zmq37ExrevXZvXpP3J",
  "key23": "3AW9Rrti1sL1Jrx4NPLAXpomYnpYxCGkXuuDETftfNaqphNBzW74o1437XsDSKmwp1CzSPGdpfPV9JegKfPE7wmt",
  "key24": "474q9f1fhLcSMAAi2pktFYSt1m1Lpw3fyEur49NER14LjEZNs5xs2qgBWxNzaviyewQeYdhgta4ZUxRMhQCCLnVM",
  "key25": "5eo6FNWLr2KM7umH8XSYpq4gwuyQWMGWj6Th2EAU5Ga8sTMZjSo38ok5r2N9z15sQePDzwrDR5eNiC5A5LDWxsH8",
  "key26": "5SG9KrEwUpkKuMNFpmYFR3VMiBZX9hazLa613wyGbkqtSLVuyMta3qSHrejh5kL85TkeCBFhEdBSreFjQmsfK68P",
  "key27": "3gQtnJGdgxDjxpCXseXdigXhsc5DbCatg2TeWWne9tR3vuz2gevisbkZVjSiKmUEJaFeDS3QiXWq7oSbvUyTN6yJ",
  "key28": "55sfg98bu5HbkQAwj2JLAr7rNFj1611JWajckkfyWk6ZqCtQnF9jH2RKgbm5tfoqfrSSJCtbZqarHEd9uFKP6Xv9",
  "key29": "5YPw9T8Brayc2TAZBRdUZcpwUQ3fKy4q3kPJYHcXks2vjpPbWcUZCURSB5oPMDdx9UwUH8GaSX5BtboTqCjEpZTZ",
  "key30": "3fgBL54Fy7eRcST3FEf7JmSxNRKAB68uSAEma55fKpxjrNKi1DCgKYwSDjB2ZdCho97vQpHJ9aHNUiF9Qtpj8wt4",
  "key31": "4DrchY5pejLxkrDH2PQCis41n7FG39Qxqsvpsr1NsjCba1STBtqjXXD4WmpxGZ8vSsaVNyAtZTQS2wtUph2JNkKF",
  "key32": "5ighc3fste3pkeoh7NtAkq9hGVfjbPTxguvehivw4eghJSSX2muffYFCVBNnWtnJBHstUGcu794LgyHHbYdkcmXY",
  "key33": "4oP5eR5WqGakNBP9YHsDscBPmQLvk4bEV4UewBkYNkQdYK3pqxt1oiBCiBNVSXru1JnvmyPGrrqEfFwe4fhYks7T",
  "key34": "4nkCvQ5tNmQAbha4jTbwuT9DCCL65gvp9QhkFgXHytqRGqduSsDdJ2ntog1T7QCydKyb3Lk7DnC4C4xFQAHwer1j",
  "key35": "ZYSgHpKfktrcpoBVNm935GhNuhaet8mCViodT9uvH8M7bGqVcyqd35taw9xpk6s876S72NVSvEmS7wNogcuWdgX",
  "key36": "3fDq3yQRkxEkN6xKHdYmECCeNwkbT82kEW1SKf1pKhGq78Fbn3dPK6drMJSWgdJAmqrrX4SxNmaP2RfdKZ4BMfFa",
  "key37": "2DkmFELnABeQtUHmnX67iyyyWFShBGoEWAnkDTPVBTf8F3SDUWddBy5ofFvdHfyXDeT6zScq5qtjtpqv5XNfYDc7",
  "key38": "2EFvce2hNxyWDgDej7zKHyUDgfVd3eoMPMJMubtMvDsfPoDMUWPhaEPnrU93YUQ675kUuXj3Xnj77MKtBivLFmHa",
  "key39": "5UQ4vrmz8xSH5MaeYtuT7P7rDyf2LmKrD7zq6b7Ps7eXouxs8u2vcrSiHh9eD4Q7n8Rhxwka7eNhstT5CTaMX9hj",
  "key40": "2gntj5kUogCf2NqBiAzbt8mJ1NaPnHLeKfRV9gNn7krWLZXVzp8rvHbiMZfAPmGjEwTCnkeBP6nrWeTrUCLNKuxD",
  "key41": "3tAyfGQ1JMm7VFAFUg4JBSqmsubguY4koTn6sm8Wz2Kft6okXtXLCkKBDmSZryQUrCcyXu49C7gS5ob1vHNQFb3U",
  "key42": "5KVACEwtGNjh1AYWBVduG6qPpagfCJhrzUvCAYGKm6KCuyZ2P8RduNbbbKauP2GkzFE6LJkjNKRYEUJAYg1FLbZo",
  "key43": "5tNXtgNAYLXCyeTisW2nrRqTDnkJnh3TfkBJ3BG6YYkHaL6Q1kS2PwqqDgb68cYm9tzjxTLpNvLDca9J5BZcnuv9",
  "key44": "4ki6ubnem8xM2HkyTJQdZN4ssmQECdCmKQ1Ub7R9ueAmER1rgh2EYmU5x8znGtm4P13ycJdo9TiaFyLXV5hVuKVG",
  "key45": "2eMKDKWbJ6iEoktwG8eWz47JRzfPTw7thWhB3WNzwxJJcMEZ8xokHSktotXa2fsfrsLT6Jvn8pKfMXDuvjvAmfdD",
  "key46": "4HTeoXd7qEa2E6ot5UGff1F4RdTNUpvPSGsF9FFG23hTr6aYbnm8h7NoZcZ2Ldxds3rrUGz2gJJpf7hk9Au2MaXE",
  "key47": "4b55CwzZdScbhB7Rfuyy6vXJ1htxoHxZQBxChWf5Mg8jjd2Vuai9k47M9Apov8eZJiDAMtaQAHzEDwXgp4m3ZWGZ"
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
