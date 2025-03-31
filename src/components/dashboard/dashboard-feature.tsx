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
    "SoqMTG8mhzhAv7ijiDetJiyShwFPB7zQQr5r7LhEvvPSVEwTAn8PG52ca5h3aJRio3FvZGaVzdRfofpbW71RzLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ztpVvuArgZdPVcDp6tdkithMFBhrgV2Ugc3Fci6qq7vA1MUkwEsqW3X8RzZ5htAJXa1RyFyCkScBN9PSyyK3p5",
  "key1": "2aiCY5kBYjoaJTde9m7jpfjsa9ceLXRQz4hTpzjH9EjbCim9CCeYcLVkHW3zrC5WgAhZHQPxU3TpkoSEDLDfPiRZ",
  "key2": "uPE6f7Rojo9xJH3p4yiUN4Ef24zseLtMJacmUy7eNbwZEyAaP8Zyvm38G6sRK7nmm6yyAzTcwhreF9y1mCwxukU",
  "key3": "66PzE2pTMe1xWrMAJ7zkXxQwGpAeNbFToTZegD7V6ZKePWyUGrcNofPrkRn6trkmAm9rAH7oHiYV5WJdPi5xXdrH",
  "key4": "UYkoBNyEw722fgkhADDtCVeDAcHqoj6rXABR3a2nkDMzV9qn2epuvKq6Fjb2WcWDU5sfbWFah4Pz7MPLfhugpuQ",
  "key5": "2wkUpYgCfKJGiGH8FAUPin1U8A7Ao4tdaMJ9ophtvrNnerpvtRz1G8pQeeFw9c4wJB1XCwiTGv39fqJkSNfc5RbJ",
  "key6": "V2JEEznoyQoW6FadjuNLqLLfjJboP6hvmuQQuPSJqi3mR6vxP9a32FD4B9nDJzhnnQCDexrYx5haBQhJAihBNQn",
  "key7": "sFNCpGv9btTnitLXcqoQDXpi99Dfrqsx9eeaX3TDihyWxVeUM5ZvyZkYRTMXzP5VjZcuBgpT8CoguaFWPsn21LK",
  "key8": "4yQbqHNdiVG9mE8QTLF53wKkanpvipNMCuhUgPM1QsuB1jSNrb1E1YY9goSp9ahwLsdoymVenJ129r437eU1nyRE",
  "key9": "4PnnH2sFH92oU8fzZhqyDfyHAayooSQrU7M1sjZ2PpzgmveShi8Yi8ixYeB9jScxMjQJkYrFUaxHpcnKoBDeVr4Z",
  "key10": "D7www6oMqefbnAZUngSBRxjeaXVP8MqBBvNTeSoFN6ir18uaKB8zSWrngeKGf5X65nyjazWWumVUoPcmJpPkKPa",
  "key11": "3TDH8Hh1QLDAwbUm5Hca7is1E1EyfHsQc7ZQucLQbySfZ37dh58QVPpGSnG5sHy7ZgtxSyYxjdk6n8rJab8PN6aU",
  "key12": "5qZFGqjqTMsoLr6FHJAFQLR99BkmuviJRFUjeEPUhZTB1sge7ov6wzkyg4sm3AWSLeR6cqC3rjpLcdmESD5eNrBk",
  "key13": "4F8h6FaCfY551dx2eJhNQR72xgqjRSxwRSbXChspJ93oEwZQFT79wrubWUzj2d5eR7d9BfeFAtnbZULDDqH7UFQY",
  "key14": "4kE4HHRxtftAmX1yXvNzh3A7m4nZVBw6KT114bxZYMmxibHdDo2CbmvBjPXFWSUoWsgoANvNzY1XM3N4CETEYkPd",
  "key15": "5VaXJK9P6ETdze2WTYd3d6aMdGfaj8UA5sjF6XxLWtqw8dRsCzWVFYuTPjn2xGEEoPQV5RHGNDKbd6RmdDTPp8rR",
  "key16": "3uH9jivKZ4pUrig5J2CDa7SnViJteYCNYY3GEmd5hgVuRWak9bebmNSN3YWh6fzL74octwgnjQ5vhWBjCJa2FHLN",
  "key17": "3rZADGe9oZiPyfDrWS1MekVSZennicdyMHbZ3uzkWDHCFKF3tfcwkfAgfru6bXxiwfWhbNgH9xKCFZFb8M5jfcT5",
  "key18": "R9YuDxXnxJvEuCdepRZy1cUMoNcE12rjT2k2kroKX4txSZd71fp59TBUSDYmE7BheAy85wVpyLDfFcGZRHXUgf6",
  "key19": "67jw29Ub4pU5A7wMno8AWHffNeiMphG5EtAFBxzFmbxpeNsJFXrKzwtNcgRFQ5cqkdWnb86g8GKEqjgT9ZCb7AQ9",
  "key20": "3KFkWzGcLKNU83LHS6Wb112V7JsoY74Nrw6oUaMhXWj8nzvayosVe5pNMU16U8VaZDdBCA1NZX3dDBNaq66LaNtq",
  "key21": "2HzX86LSaFpwRFB7uy1VQYabm6tM1ajhtUHmbB4BSy52S62zSx2E723LB6QePGjtJizSAM4JzvCV8KY14mTeiH8e",
  "key22": "57xqXrhgF9Z9Lf6cf5avqGHPQ3DMCQRW5giySymwWnPSQEpmUXCF4Ui99okduX4YH3hhx7rHNGDCm6mz5pkQo9j2",
  "key23": "Vz1qKwNkR13xbvdprVMutk8upFgYhGTjieutbPWb5Bnw9rHAYvTvYyKcLLHm1Bknb6czdn2CsBqBUtNha5VwQ14",
  "key24": "5af4hbLnmwauRURgqK957uhuvszXmDNGdyk7JbF8XzsFeM49vMCHLKHuMMFLtBYPxW2AGhvqhTehvCPwhswLqF2W",
  "key25": "36wxFETfsuYZTnxqxTyicZnXDBwi1r6zCHgZGAzrafzGDwXmrE72L6tXsvhBhJotE4V2q3NSPG4hiBQY4XiHpSkj",
  "key26": "2Zer72qV3yeRX4WZehhnNja86qM1tXzCXLboiDEkrY25nvrf9mCDEALNVGBroTqk7cPVDRANaWqymTgAT9MD5zgB",
  "key27": "3rfmgnpeTwBXXfyh8GcayhTLUEc5Ko5vgnkwuGVY8hT6sTkSLxDGFVi4jyujTX6yjbG9LcBpRrutonLSiXea8jsD",
  "key28": "4MW5Sjf6KsBfWBqzGxyiKQwojcXUZnkLxdd6njAYDbLLNps1CiuYwbGhcVdU8vRVL2Rr4fv4r4wso1tZPgQWCKcd",
  "key29": "56dosvh5wrbcEMxLAzp3zuwVRcoffYwxnd1v9jjQ8E2FFJS7cAPjwciYYPBtev3pN73wqE12TjDuCDyBkQB87BKJ",
  "key30": "27JBWm1jLQXAgrXkT5DYr93URjkchaBoqmH8vBBmkLZsxMg8Qt4Yc2HAMAeL14CrWt6AV3REauGCYgEU5b19kvny",
  "key31": "dBEcx2iXmV82rLmporgSVNa26BUUce6dR57BzjUX28PMWqB1fsqRBhk3ScBVW8vA9Th7Torxfn5Qmr7JY7YNhPF",
  "key32": "37PJoV4k1o26fQb1L2xF2UrWFR5WrHxNPupY4wvErUtoNZTumpUmZN3guY7CQWxPZR3ug2oq6vUMYpUABeE69vQn",
  "key33": "5UFkfMQ9FGjrsB1Ys7YwHFVVytbMthNEUgLZVw4JSB6or1o7Vigj4ZGoH5ZrSgbCU4yhyez1CdkWAtPpEEfcRNXp",
  "key34": "2mzkz5cZiAhGT1VsWHTJ5gsZaTiDnj9PBFWftJ13zYsCGDWLAShEWMMjSDqPSbcCD31t6suxjSwDQvFMG2D7uCfH",
  "key35": "NgjxMs6gEftpCpxpxjkmmDnoBS8PUzosTd2rr4XUy87pU3moGkv5en8QenZ7vWy5Wqqp4m4hBn9yFGAkHjcXTRH",
  "key36": "4btU12M9kFfsxZ2utTg98iHA1o4J8cL9c1rZiiLKoHyaKJ1GV9j9iVpU4bA99aMPmVQS6CCsMJtZNgpGcDxnepJs",
  "key37": "pSk53UzSh31LHrQgDD8wzKpYARNRuSBLt4V1sNvVzHXCZCkvGjHdLTS8UL1vAKC1Yddiof7FkdSKxD9tK5zuSJS",
  "key38": "3SLwTFGEKeq4Hmz5egGmh3mAqc6PhP1G5N2B3Pk14SbNuJWhRC4HFwCSFHgB7NQGFoeza2UhXZUbrfYyQgrU7udE"
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
