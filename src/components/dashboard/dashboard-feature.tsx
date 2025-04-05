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
    "4BzPNujUtxVkRqESKoHzbjGgzRsam2GMkd5acsN8qzPfgCiKNrbYfJAtUcSVfi5SSUHecd3n9Pk2sCZ3BmY4uFLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqZ22eP7tNehwkRcpnUgE3aJp1YcQ3c1Kr8WQNyj8q2LjtqXo3hG7FFk28oPVrHoSDJ7oix6zZ5wXxQCL2xJcPc",
  "key1": "5foEPAMr7t27CkVS97kdkUYu4VNjKw4Qzv1SKz5tdFNoRF6W2UnXbNEds31MXtDuqyjy8mxWSUNEKUjNh5GcCkAB",
  "key2": "4zdtCx6TDUAsnt93SUZtHLGSF1Cv7bmLCHXqzMcXT2krgAUYC2KEf65Zd7DfMVsrTb2Ahxt3fAsxNZZLHsfEEYy",
  "key3": "4AegQMP2uGvqhKUXdtM2po3erDp8q6A6LKT1Rw8ucvZtyEf1EyMydAUreK7ayHmtKKkVS4Cm7PeRy132YJstxCE1",
  "key4": "4WNqQFix2mgNjNXZ9B44GobGtWFSWf2x4eHLmwfsAQ8RkMqUijGFvyeQqMYLRDcwweLDbyTM9fKchJYMz1whqmNL",
  "key5": "yVYW7iS6HGYjPUdusgvog7JmuAbzGnvdWr4jwuyxoxxAmCPYRZvytpseVpqkMwn12H1CVNeChjGu2eTAKLJwypn",
  "key6": "4PX5uM1y6pLkAiEiYcHdyENKsuF142saDWd5meBmANDKDWPv4KPP3SEGY9toKLyLwu7BJoHCrZRj4fBXJa6Td4Hh",
  "key7": "5X93rXPAiN3BjrCZauNxpfPK4pxyPpbt6SEVXnpmbof4GUF8PNpWn6r32E1z4hEy67cMMcHh8huQXdMXLmn98zo",
  "key8": "xAgKwMCYmr6BK3fVYjgXEaXe8WFpaeiT5mZGb3tM4anHGANT1U1HkzjRvm9fdAAVTfdXjgqwk12v5GbytZ5tgGZ",
  "key9": "zgYNXixGePgtLNsRQiU3GWEczWFVBBzL8ZqLzU918FBrgMqE3NMcqwq6uSFCpxoD31nwBij8vqdup8xXXi3jx5g",
  "key10": "2fDbD52pb4himcaGJtwMP8xgA65GFPA7vPCHRxN1waf5ciVsmmANuE8THpbKyP9resh86zQRu8uQFx4o6vuqFC1j",
  "key11": "543bS49K9SE21YSQN3vBDsHs3Q8cmVuNYRtnkC79F4EJ65Zqz8ZWxazv7FK4tjYPd3trirsZeaLm6N5Huh1C5SU6",
  "key12": "41qRHknyyir84PqGLkN5D5aBrVXJsSA91jXhHopNNnFCkkQHMVj71E9fZVJ42dnDrTu4aFsgi886V58xzJp8YKpX",
  "key13": "2CnoWNPmAQJ2waSPEbskVKktd32PdQJgwYuTi3fbFBFxbViVPUvuSCs1HV5AkJ1bv2m7tFH6hF9iGxYTtk57A5k3",
  "key14": "2jR8ny37aHMJ68GR1NZDHaYf4ygiBHpUuqSymx7tzk7sKjJNJx1T8zRQnZsL5VUVbA1WkzpnA8YQVTyPDFDTWoJ6",
  "key15": "3cDDp7NwcLU6QWVPBBWtSCPiv5pWA955L22Wg9UbeCWNgoGu5EuoVxCJcV3fY9z1RvLQwm3oUuiyT8sKJ9uv6Rhq",
  "key16": "3d5aSEjkwy4ArEVMCKi8igncaiYT6HX58ZsJvMygL4CS5PpnTjqFfUxvZewxaGQ2oCq9we4LEQNVEpEQVZazvhw7",
  "key17": "3MXmr9A7dCEbGqwBaajrFcmZfusHhHg7EUuSxZxVtGnxdRZNLLu87MVMsEafW6aiVpUYimYhQXgGrPE7pDWFnmWk",
  "key18": "5w6QSqceRM3uFXANxEsq7BHNfNs7FVbvZVPqCQ3bkuEiuRSZLtMYqhkrutJrX8CnHcmBDEUwZz9tte7E8E5dyULH",
  "key19": "4hRTTxTLQMXFZsuSWPqssyzwVw9a5vpJAvcNMRsR51kkvDJZf3AfhYaqKTmxJMBoShNspbaPWGkQ4srtyAYjSkem",
  "key20": "4FJnc6eMvAQwGdAxvRtazNPRHmpc2VvrFrUHAv7UCetBQtLZtdSGBy6hzaX7iCUANsMZbJrMND4mFMs6roWi6qRF",
  "key21": "31x5jM9Mkt338rjgguUSjbm47u5i9sNivEk4XaMp4D9xcHFAxqbWNcimxdjAJweLnotMCPctup71FGPdviuqoJMP",
  "key22": "2tX3cZQr5JxXSspKuvfNi4HA3rFuuXjemWUHK22XP55K7Z8LyfYpWp1G6fV91fM2sZeBAtWr3tyX97qbCBLgAaQj",
  "key23": "BbDsoGhE1oKVEwMYPjGEAjEREy533CcyHD69HJ49y9pcZSFcDMQNJddhzHZ5jk4hj5yGXDG5gp2K9FF6FBbMZ5J",
  "key24": "5yTcri61CuDgg6J2yCK9UH7hAQx6AajSr12g5TxLcqkpTG8zkztt4AnPfy6sLdKBDDDWjoJmu6LWoyP3X2RNrAgb",
  "key25": "3nR6P9EBhD5YuwoJPb2Gguntvb7wapv7NGxrm9gtcuDAXDGWPKxeVvZMfj6HHeQxsyxcMn3j3hqJ5ruUvPWXWUiy",
  "key26": "22dGvxpWBW7iqc5XYL2j78jVBvotVEHw3hSkdaVYNpm6oaPkM8eFWPemryBg68TUVZCQ52cvZywE1mmwTp65Fcp9",
  "key27": "41qgjdfsrcSRqe48dXEiSWykDr4NV11iycyYwT581NsifF58hXgq6DjWvAtQATtjogdHcAPk884x2koiJSSjXFtP",
  "key28": "664YJCQ9A4eeYnpY1ca7nzyf3iuNDR6esVakDVZajR866BDcFcTaknEVznu2yaVNps8wpMjyvi7cAJ5Fi8gDYY7x",
  "key29": "64bQ9kdjeosmRdtpiPgDqx89uoGhgPLeen8Lj55BUxXSmbhExN5dPJvwRuJHj7Cpz6wENo5Ma6DvHYHLzBiKVQgE",
  "key30": "5xgqQ31cDygpSsYBeXn7oaFY4XCzA1XG1CUqxfJHB6a2b8qNPTmjYgseApNuupkyQv3woA67NJfhreciKQD42JHf",
  "key31": "2hvmJwQELgUWakZoM8rvkmDniXthSwpaNTKqMSZYsjNm6zqWSvUxqQeVfY9fU8K6x5H9fUjMFVxfmHnpiJQbgqVZ",
  "key32": "xxxxPQL4b9kRYC1XTiRwwwkfyzc5gczkg5tWZNtMZEbyterxSEQah4FPv2CjjANaEDwATf55i3m5K68jf7ZXav2",
  "key33": "BDZmzC112NyoZkNN8Nrx4WGVQzH6FoPfm1pyG6Pv7Pvk97MmwuGWfJgc8eLnxN4sjX7V74wMHLgagdMg9431VPa",
  "key34": "tjrQ3ydQnkYoYD2DyaS6XosQNDuFrGK6BQrDUzTPfTz9vwe24UDbeVwcBmh3THtmhRE5bRFkfpeBvX9JEyvFzhJ",
  "key35": "5Tn2StZWPQ4WsKoTJYkMNkLHRzu3JJ9MyTosqNG8mzLC553mYTBk4GxrqczayjH3vH13noQWi5ewpDrUd7u8Jf7F",
  "key36": "Qz3PBNGrbUVogzWtDzhwHNzVARk8HEGKzmnAVLnEKfunfjb4VUTCCfbAzRqVUov6x89JgLNJjzRBYETSuFZP3zF"
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
