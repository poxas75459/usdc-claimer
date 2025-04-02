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
    "5Ae9NvZ9MARHr621LD2nw4xBAVwXux3Yv1nj4SdJjFghBDXeZFVfJ3QujZ6sLf5TQmVnNjpwfa59qaTK7e96ER8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cN3UbzGDjk9M6mSxhtc7XQNcNrySZaLP54wKLjriCLesHThq92Ebuotp9zQZeQgmyVaJUYVJ6HTmX33FGqTP14V",
  "key1": "3YwY8hCDFiEsnmbopSByBtTB27RugCCSmYgxpFvJrusdxk1oBbirunrdxvEjRbF7tAFkSC8kggsep9jAZ864xrL",
  "key2": "5j4J73Ppv353UDAD6gUY6yZ712JAzKNwvy7R2waMqgDPyZRb5PZiMcRXmNPKxVgiFGeVgRqfRQb6uG1335N75JnE",
  "key3": "RoAe61xHYgyZ379qRxZyni9y5YjX14ziCuW81MZVXfrk2sGtv8L9uwvfkvWXuJ1kPJ8wM1fQtB5reWjZ8TdcMi5",
  "key4": "56AZLwiMKs7SV5C3JHT9CAo16guet64zY2FYacWsDk1gQEz7hgT5EcmE3R8ivSeytoXxco5dtTRAezWQCz3wRVHY",
  "key5": "3q6TjgEfSALiT8VRTAHquBrmwDuRJhnzV5XcRME15hoDLqVYvur3wHLfnL92jfnMSryRUeJNuodYdtZEYmwayEWq",
  "key6": "2Z1byCoU3Sb9w8z13g53PFJB9gVHSP3GtvnuWASEedxSeHxjS5qBmC4QGCrP4RPrsQSVzp1xP4g2jaFNYEe6e3DC",
  "key7": "3Z4cY3m2ab4UWucsbe4dbZju8te4VEA1dPKijcH3nQVbW1xSWCqSahQsfLHFfcaq7bVzoFzxTPh42N1QfhQdQA3Y",
  "key8": "4ewjzPjPQR6p96swUPiDad5EsCqS4Dvz7c7QQhRU6S82cg86KsPKHENoMrtfF6PE99h3ahLjJ5SDYiryz5fR82rh",
  "key9": "57YdigDwRpaN8ps8uhRzu7Pn1mpEYN5pqkCHdMDDaUY6BuzgjRq699bTWaL5yr3uA26jS9pLjhCXAsarAzS53isd",
  "key10": "3uDCsz5UkJ77jKVxqRQAR8475P8VAzSVW8WQpBfQBzmep49qDo3NnL6EvEZFPcD7LN6bXxsRmQukLnXgFEovdDyD",
  "key11": "412S9V7WfCC739acW8sxMF2oMR2z92Fjt8sFTQg8658qHcEhnGBegBW4E1vo8jLbevcSFt8hDxEMB9koZTubVcNh",
  "key12": "2QqBCpEv44YZpWru5H7Hb5eUkJj8UTSKGhXNUVVRCQ5YprQ6gF7fU5r8FZPcPLD68G5Y21PeBuUQidK4nkE4pam1",
  "key13": "67RR5aUGi2RuryDAL5JoEKKbZCYVRfqPt6jkvfBMDjv4XJvK9ost3MUBN899f569d63eRVmSSDYyLpLsieAjSmvg",
  "key14": "5hTGf6BB74fMro1YFAiq3FTDcSgUUEHi4dq3Q6w9Ghg3in4JBuN8PWNQ1oUYvTFnpysfbQU6FdQJTd8VfhQuUMQF",
  "key15": "4utr9KKYQSXWMbGffMN8hbytsDRsCbUV1rzWBqsY2W7m43n7dKYuAM5b6uGufAMojg1nib3D4wMnXPztHC2RxFm8",
  "key16": "37LDrTTB5AY7CYDPAb2wpbN3LFCEkahoUqFcaZjywqFwB9WEyXKpkh4muDz2w3onc9Yn5Nc2doZ96JR6Dwfnz84a",
  "key17": "2vwiQ4rrPN65KMuiDEcxNTeM8bRx29QLjpnQRWwXhVuK4rb58RWTY21N6BhRe42n1VqQeRR374tffQmPjfB5UWnW",
  "key18": "5tTmtPC76Ez63SAa1sutQb3wWuo874yDFK5RCNiFVboqCGiJyTNecB7XSgk1e1X1oSQKDhM9KzVp9WNswe6QRo5m",
  "key19": "LxgJG5VmnxSzVv1Rt3ix97ySqtoih4xBNRJBJXSdv5qH7TqUMhGSAzf71JsTYexbrpGsVAhpKRVVN553L9xGtMW",
  "key20": "46UkYLeT7tqZmLtdB92stMkHEdsRjcu7ZEVoYE8FAGpDwn39bzGDvYyMy6gNmtiQev4oASEUWrErGdV64jjw52fw",
  "key21": "66hH2uHUFprCMsshuT1XeHLU9Tps3zpyJZiM6S5NzmeJfhz3uGZzHGFZGAB7tKKA4ZDk6cMSxth3nrfpwmkW19ak",
  "key22": "5rBLuiK5x421LXBxcdW3fNrcPXhZnQpM7rCH333ASZYAYifq8QSAZoXVBq7fpxoPdSG4yvziVZx5dNLbzP5y6FnK",
  "key23": "4ES9Amwe227dGZeXwMNjMBuJBmDiTZrVhmqe7NAuQDfw2UJqwkdNbrX23AsJ8HBkrLAhAJsbQftqKEd3kZf61tB3",
  "key24": "3jmNjyhv6N8zj747uBeickkpFQeMXLDnFMx3Y9YRkbTkCmvrCRPRAU4Gbxc8ggjqbumUZB4ZE4zEWT3TrtvGmCjp",
  "key25": "4tA2mnuwmY93sYuLEgGhyYbB9zyFm3iTGptoCD1sbUQeGhwCWLjHQDBDiBSndJ3AFBLGCDfKv13uTZGioECVnJjS",
  "key26": "3KjKMMQPahBFvoADP7gStrwexG19W578Q8MZrtFeUnwiYvACeBM6NvUwe9do7gEQu3SWHaLcAkjuPzsGN3QtMRg7",
  "key27": "3t5ypa55H5QoNSZYZt4HcLuKaKYHUwgNqoETypLF8iWcss15zHiGqGtGuLYkxojLDAXTta5A9F8k36rf42we8364",
  "key28": "5rPnVRth6XbChN6cNpB6ZnMeyaZurwKpFgkVfFjYwULZgANTVpRQFncgYfrBao2wVeNSVbPPWxicQ3asHuDP725C",
  "key29": "5p67jseSSoRW5UJgh7pmWDrLj4C92U6H8ywvTy8VuKSygB8xTevrCz1Y57fPUhdsyLpComDEFuR1p3D9xZMoY6gk",
  "key30": "4SxzYHARnBDdk5nzYC4mvGY8CtTXn7LfxxbrEvfKTUHSJwPXsapotRFw1ZADwSwAXPhe5dEDwr1jQgEBQTSX66yq",
  "key31": "41UzxNo47JtsbAHSrsbZehCqBi4armvN1TSmDAwhbYZGYfoRNUcz59CFavEeYsBgkC2L7sZoBmAgcAkfarMDDsNY",
  "key32": "4bGhRVWjeNyAhPqVd3nVpnMLxprKeqJneaBfjt4oYKfSmtKqrsRos4neQBNu7F64Tbr71KSNRFqn7mZnsK3z1uJ6",
  "key33": "8aTCK6AGH6GGGNo1g1vP6Az4WHM145FVB5adfGwJiSLMyL6ZCT2uui5fo8HXpxJdguqRw94aAjgjh95XsLZni3X",
  "key34": "ERbn4hfLtdMNppTdH4pt7TtNdsJjN9wjrdiMZN6cCt1qTDXtzJsphpZbmF1ij5dnSgmbPNMfHsGgY6H3BhPwjHS",
  "key35": "5xrTkYRSJqgkpCY8SHxkbaPhE8n5UzJWBNvNhx2N3Nkmwyks7GneXkQGxiPRWa6Z479AUvw7HaCHdPXtpS8bVD4v",
  "key36": "41tphbrrJuB1cqYk7Di3yRXnmdcYqyTDDFuLUee4rsvuQgyvyvKGJKMQEh5dnGzGpd783EXxzq1G4zkxWH2M3DgG",
  "key37": "648mWyDbyShKzYYSxEuTS4MFBtEyKrgedbRB4duqxDhEMNveSZNjpkX2tADSM7JFui59WyJ3ihQRmPMi2gDCw7dP",
  "key38": "2Ha4H5fW2eg91MZhoaDmUH8Mwm34ogMU7EbRz53frkM7JqSxpRaudZLPxqQiTgTVPWDsKNAGAnJYaHN6iBy1THer",
  "key39": "3g3rpN9VjihW3uCRBiD2bP5XE7AXqvuu5tTR5c81knUdhZCQwuPQG9xsZaNuEqefotKBCtPzttQvZAev6MJNrp5y",
  "key40": "4PBEVKBzEoAGbpFwUryPNwvCHzcWbCnfaV3WjNmwVQcSHtcZNkSMa6P6k1QayK97VyDajtYN14HeKgh97jtgTSnX",
  "key41": "mgCYMQmQba7F2vZ48rcihTwqphH6ifFFGKB5F4oifPEnk6Qt6Gwaxn4oaxGipguVzeeX8PxYaHBFgnUnp1mxqrZ",
  "key42": "46qbQ7Tb7WvLw31PmPS5PxSh217XJfUhTSmchLBtjjuc3Lhw2uXuMjoMuic3tVhGAaptHyqDcAfrKc3tW2sM3YT",
  "key43": "62TdjwgvntHQeKev1ZG3SSF5EpngP2ydkNYduqcEHBGxvR13yiA1a1RooLG1pkuwL6RWXJ6UD6PmKF6Xi4Mfdjnw"
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
