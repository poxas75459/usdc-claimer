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
    "3wEDDHCNxuXM19v6hYuS4DAye55r1vxLgzYe4XyeaaskFSPTt6yhYELUTZDDi1qKd5X3q2QRp3iy2jTCTUWwKyMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZDZ7dA5Cnpi6Fuv5QXNBsXBCekizSRuwfDe2TWEpFqnTUpHoJ2NGxBkjTr8wJk5DyqM5pjchGbXBthCzWagPEE",
  "key1": "4Ebwpc7aeBHF92pktJLqrokgXSifSEvxR9dd2FKyRn75GgEtbk8ptvSeeNCtZoj3KL693VZdHDyXazGRtn57Eu7v",
  "key2": "2ubTsbg6zVT1V5T6Q5GuDL1RBScV4VXqLRpTs8eqdAa6hCZHEhv4x12P8FjHS57WhFaoYSnKRN8sDd6oHGbYcQFX",
  "key3": "4rRPTQNdFNEudxYyb1e9PLYopFyvXZGv4t74dChFwWk28B4T4wxBy2TJUzKrM2uiCB6xRogPxCbrdSEp9NtzKdRC",
  "key4": "2T43nfeTqoVmx2GppoZHgEAsrjE15BqrUyP36fvapJkGstnBXNMJCMmigVbAPvKhQNAw3oaAhrNUrEYwbYqnWxKm",
  "key5": "nPJDvsJVp8UdFgi4fDuHoxqEUszh19KZC6wirdLJsBqrhFESr3sUn5MovNHnyXqih3yrF4ZLD8gC4kNAUf3aFMJ",
  "key6": "61ZBBZdKeLdd8wN2UMuMkZFRagpVmhYdX2Ycfwr72JKdL8dWddVxRz4EFwUrbiAbrQ7a1H3EcPHL1sYVH63161bv",
  "key7": "5bCB2MhjcKTgNj1HUXUxq2KJeagX9BCVaC7LDaETobMm56bMxwMqfvpbEySs3XrgWr12xkLZdEdUsu1kyo8L8jCW",
  "key8": "2w9iLA6FV6aBhdZydxxEqmnDasH4asjjPbpBWivWLxJYEr8STZJvorven3Kv4fr9bCytyYChVQwQ7d4xqNFtbQ2y",
  "key9": "3AjZLXYYPTBqZeFeMGEC9cYGGjoNYn6XE8E3vLmx83jjtG8aNAnmEuGMDYXV5a3bmV5TZnJ9UR77gG4VkowewBeL",
  "key10": "23M3GHEeAjjidqfAbBr6ZbhBRpWz7ursuT8zx3Z23rwQbAw9wNxjQ3CUbgS1Nq1s3faZVjRN2i18itEfBrZnr8Pv",
  "key11": "4PrKBkb63x3Dm49Ma8qaX6mCcvy1WpkgvP7GHyMa4oPV1fYAupJ6iRtmdgLtMPPhP14fqPwBA8GGKozjpudBnhGJ",
  "key12": "671ANEGnvUmJknuPqjYndWdA1dXU3nKtr8X48TuWsLFWj8vRSWyXydM7hEEjS9yv8DZKkyKDpdA8S3cYPghE3x9W",
  "key13": "2dFUTg3mV3U7sUAqngbQfB7bXxHKZHyznbyqEgA9odBbjWd8yHuL1GKTASNRX62tsXtg6LAhFGcZisdK5tkiPemv",
  "key14": "2z2J12RUPDAa7s8Sbsb2gcKDHQezuEDaZnCmoVgaW7PHczENYuMcuheS68zDLarMqPJ5nqS8gkxEAGhwAikMhqEo",
  "key15": "2YHWY589xs7CNNBFrwH2N3LKAhXRrqGN6ysPs9uvoova6JBxHBW6rt28UA8hpA4FzsMP2bK3mgCNax7Y46sZABEe",
  "key16": "B4P2WigVgQ6Feks5dwz968isWAsi2H5LY3u7xi9oNPSWC7MsL2rPpHLhE7KcneH4RevmqBpZxqMU5MbbEZGFRCA",
  "key17": "5C3uA3ND63XZD8PUHoLYyzM4sTV6H8xRe37gTNjWd2u9v9uLtBr4Z9tj9Nu8WW6WFCVAYZZBsjxLah1i5KYCAzGw",
  "key18": "5W6oFdk1UFoGXcBt7xe4SLZrPi2Chu9xmjg2twH37Y1C1KSgneydeFdvX4RdQu4yMvUkoskrqMq9xVFvx6w9UQQo",
  "key19": "45wrSh3PeVBoB11LdPPmKmqKMqvWewdJud5ji9Af2R3oD4MaqTikBFJrKQpGcb5JXZgdTmcaW53E3b8qQJjYg4qW",
  "key20": "5A14LcnKQ4mD2MaEZ2tCRfPCinCv5DwtJeNgTk4w8p6nQLyHLYQTX3S1avyWhrL2Wb4GQQ2eiBXd8BYdtwF3jxfU",
  "key21": "RotysZJ6afMDL8wmBFnZ6NiEnTduiJxavG9PcFcYGuWGj5EPxFY7EkS9c1UnqRh34V5CFKqqAjDwEp4zUYxpCwP",
  "key22": "3hAgbLPk97FnAAVAzy77XeuMiPpJjPrv5Qvzkys3LycR3MhDf9hUJvyPhMjUpEQN8mKQnJ7ryQct8x5ST71bWfTW",
  "key23": "5QBeEH2maiMvf9WgShdFYvhFWaD7pt988qpS8DZAvZiZgZSSFJyobGkgMAcXyd7kaCfyRTzVY76LzLZoaRAoinX2",
  "key24": "2vGQqK5qnrR4pDu2WffZEMeQvyvx7ZWHgaTm6vHHkM8rQoivDyQUiWPqxJ8SjPbzeFtg9oj8dEA2JXxm1RLGYtCo",
  "key25": "Cdde9m3TZWiLvKh6FBXTyaNWoBwq5Q6oXHZ32RyvyaXytePf7sf1qB6BMhKwNfiZcx11vSez7iWq8EVMEEju7DL",
  "key26": "33iK9nfHiPnbgbonDCrtMqrZB11MFfA6ZfuPvPrgWCg8rjEyZMGFiMoV1Nr7tpYpgGgQK88FR2mL5YXLEpyjjKxj",
  "key27": "5LSi2ch224Xbi8CcGq9jLGX7bgMzBy6fu5upLW98WZBZ7aXxGRfeJ9rp2z9gMZLvuMyRJLowgKNfEjEHTH4MBdq2",
  "key28": "4aP8jsky3s2sm8fjFCqzk3T7tzmMueyfY2RwjErFoJYwrWZ5ykXV7tFXMZkRFrBELPaq8dDbNj6DMhMC29nZVoxy",
  "key29": "21cUrvDCPLFN7JgfiskeD1xdr54HToRQ4wNMXiexcUyyhmCZLkrK1MeBajTWjmRKz6m3UNnumTxarKZbKvowZ7dM",
  "key30": "5pMEsjrhBkvCVFSZuqPJJwYTEF3nGVGb9nQcbAktmhheos3AznvDxAbjPedESE9zJ3NyJyJu4v8Tk4YFmDxt8wkT",
  "key31": "MXw2B78fadNe9VsC5xBFfYRN8oDBFZ7dmQFchk6Tpiniw8okaRjccLUZmKwvPS3kk48QqgKoz6zaXR2cCJ9AVsD",
  "key32": "4EZwstHdoGMXEmvbnV8jvQnVZAbGrKZPpCkErJXz66t1Jjz8PkSYF1awogvmGJ8tXh1ty8QuvizSiZg2ecxsfpMb",
  "key33": "2dsbB1yYn9h2AjoGy9aVK9A9CkqU8i5ax2wsN5GUnNqUKYY2W2ooBXhrmChXKTY1Tv3pAkiCumYuKBUZ436r1YKs",
  "key34": "FZ1PqXL3yhefkGJMGASn24mwJGtWCJvgVWqQG1tvw58ynPkQmFC9SfRU6rkpWKjSsJTXgN9y69UgRiLBRopodcu",
  "key35": "5YXsiCzJrrGdHw6arkjnvMFSRf1VBk1GjyYcs8uyuKXgu4FSSsSYA3VxfZYaFnH7hcA4Ue8GqBKFqCWJJjQYRuvC",
  "key36": "3Bvp9AJQdrNoHRyPLsi5Haic4yWcuRegssvAgnSkECBUgY7g7P2CQrLkvgpYvMAkqskDm2VnzrSPVWUJiSgU2Vyh",
  "key37": "2fAa9krJD1ij5Ljcsam5CNjf99YvTV2BW7auyDM1SpjgE7URgADxQJqniehvL482r8T4cWXhN93CQYbRwLeMwUzi",
  "key38": "53xpSRPGvqFSEYpUAGbytG464k5adgFimcjLX8xdwV4HMgjCBuCJaPANxKZHCGXALjbyndq2s2j8i1aTSja23n9p",
  "key39": "5MDaEHEtVx5rRiAFKtChAVTaNneSxfp4GaW1zfzzyc5va6YaG1VTmu5yjAqcUoyX17Cwcep2A6x4pSLVDgzV3gwm",
  "key40": "52Sw3ofnYAJD5ctj51awBNadpxfoc4o6QpZqQB9LgBbuFeCoCV1MHjQeRWxvSHg7FfLBL2t3xhAuHX6jcuLiDBLU",
  "key41": "52JzwJZt7BpeimVUSHpjLDebPVQGkGo6RMyvz59ThnoU4FLJvECVtEt31rjnofjXXwqmCWMdKVFjWuX2gBhy8jh9"
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
