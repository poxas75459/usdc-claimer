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
    "4Qu7ZCRKsf2DGTHkanyXQWTw8fjqCiBzFx9xfjR7F78nW57WWdjVHSebukHkLvcSXhVdmTNuY4cxQD12xiFLf9Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2miESTVXuhwvLqNhff6MTcefBDawPmZAYB2dpCFs2mov7HGrQ8bG9NbJbEVpcVbX8hiUawBzMivG5dUPFCMKwoH2",
  "key1": "2GrE8VKFeoTC3MujueXJSe3SDeQdgDXqvXrgad94n9nrqkwGXpmFBd5MXkxTce1opxhabnn7VQzfjKUN1z46kUes",
  "key2": "5tRJBeXnJ2zSdAMooxCLTbwmFDJH8pgvWQ8Pt4nkYcYpyVaFjTpXadMuwCQpe5TbEZP53BQn2KNdA3WpPpjM8XgX",
  "key3": "5u5d9ZbEPzFLmCfwLiKke4n5PxA8KGQAdJL3PGiHBYdidq1AXmD28TnAfA1Pesj42dfQPvsSESH7yLgV2iocmgGd",
  "key4": "4SCyj2qhXPvJDohC7mZoF8Su57T1F1odwoUnX7SXunLoHSe1bK7AQQe1pwLpa4byntj3eYgLAgjoDoM2rZDgM2HR",
  "key5": "3KNPPgm9bjEs3DQtCziVcpYiyHP7RSVz1D9tCg63uadWhRKtpsZ3fVL1MVaZcDis7ENsno1emsoa843ZFUvGpy6e",
  "key6": "5aTzrAEJNWdMCvEXgfNqYWTAPdujF8UnUk1p5NZ1x8YXpwEWBFbcxN4S1D3mhsVCagpahg6a92Xzznc2jv68STbZ",
  "key7": "2qFr4j4m2G2BMEn4UEdnYpdC1rWfmVGernu4TTtcCt9sMhCbBMMjBMkThmABS771S9uqYyqPrGxq9NY94C5R5feQ",
  "key8": "gEqAW59SU6WKQhZsu8FKugZYPEAt5dZbGYpP43hfNsJmt1oDQ8P48AaW3H1vuRwmVA2pMncF2sPEugV4TmB8L9i",
  "key9": "124b1S9yZT3J7qR2X4tQbg6iDfNrkjSsR1ykc9CVcVyS34FgmMfZQzRpabYY7EZDf6PpBEJqFUMbMWzSU2Hfs5WZ",
  "key10": "KGd9k1LLuyxUj18oeSs8U1xoxa68tVVRA7idVKkVNWNpDu4UHjCLeKA727QqC9mjJcTXtiyHayTjL4xC3ZuTG9t",
  "key11": "2aZkbJBN3aJZD8fn12Nyr58bh1cj7p16HfD3uQfE2UoJnJW9yBqx66VVxeFih3kM44HZHCm8vxGciooXitns4fXj",
  "key12": "2Zp3hKfTiyK3HHwdQXN9VYr5phjANc3G6ZReGTPb42QaV7fSZL881Pwipde2jD72Wy27Msb6Hz9pRN8vTqwoqJeV",
  "key13": "3MGzQCV1e4n9Jd27NZZw7DxPbf6WpoubtrVMsjmxCyq5vkXk9yky2YPpbRBboU7m7dKoruVm1N4UCy2SFeHNw5uR",
  "key14": "3nuNcnE7nvU3NtkT4tbpaUouUMthrfmepiQKVQyEnycjLBAzjRztaHvYwQy4eiXtowqH9JRthJhXrXs1nBvKz3KX",
  "key15": "3GmtUz4d3gdBk6Rm7J9wUQjbRWZAUQvELiQ5dqQpmJm9b8WNKGs6HyKB463mEPVFZcuXK9qRs2AhxFXHeKR6Ro9L",
  "key16": "2QNbDJCgsVdhDQ4tHH7KK6hvEhzrbhwpDDtGKYxENLXkitZ5WBY1XokEGKuqxygihQohWcihTpXKr8y7PvU3DsLb",
  "key17": "451n4ybZ63zW36MssZPg53TjjferAXEN8cUQjJFsH1Bmaa5zavix9RDJj79E8wxXCcyhLECgcu86UusGWwot3mp",
  "key18": "3nkDamu7QooEpmkdn1dJ5vs6eDszGGszzyJrBuSi8KwZcSoh2rJcxwz9HArB89VHu8ExkRY9ct5g8MTsT74X8bCe",
  "key19": "416RiT4zxxF91NMsjMeaD9p98Y814Ahjqhhp9gQ4XesJhFWPcUgPoaQqSSghepVyay3Rj6sZYoLhdz7Z8zjZgpfQ",
  "key20": "8CaQFfUW7rGc6DAkqFuewecka9EeaC4WKKoKpkcb91NuNTdumuPEes4NcZAgJF9pwdCuAnwpGMtmZicdPTu7kz8",
  "key21": "3am3wnyw5eUK7zPrHLZqLcPRfSSopgzFZeszoqs79hcBQ6KG9AVeTg9cDBuwt7wFa9rApVEDM3KB2Du3DJUY94na",
  "key22": "5Z5orqDkEp7adZzpvEukKWsYyWNgwzM7a592Dnxf29oMqjxrx5FLgoaCZjKbCD9KHFVtu3HFeEergXKEZrjp6V7v",
  "key23": "3Et9bFFYmmwh6L26TBPAqVi3PX3y1JBW783jn81DKsyQdS77kqt267dtVZ3AU2auMUfX1f4n7utXctPncEoE6AEv",
  "key24": "w3NL1uvWeF7FU87JYZ3Ueub3gXkcd5bAb3LxtZcR7zJpag28iDbFKsuA199nRnu6RzSP44UTqz1MLgh6PxXMRvz",
  "key25": "CeJiVbQAjGo7E6Uw9UAi7TDtZULgkrE5Z9goR82Wpr2y4sJn7LEAVYfot2esvfgExow4ZkuhCj4pyMBH7g2Cqij",
  "key26": "47L1eq7Mi9sS6BuAHMskg4BZPGrrWoPHErvpHSJJDYdhym4zag5mZjNx6kbgLZdKed49qz4NMXcwYm1T87xLKFjs",
  "key27": "43SUcEcVMHKWVSs8zhWAG5VEfYB3neS72iFMQNJCACwD3uxg1mJgGJers5Vt5mVozPyCcm1tny7P1baEWrjrTEWW",
  "key28": "3UaqKA8ngfdtudoCNxV349iKGA7LT1JCKY8ytum8JUzfJoKN1VUfAwFqXDF1rwZDziruY5P2hZERjS9ARqfYfHu2",
  "key29": "5uwGyM72zmqDsX138KfWHWUygpH2babdKmDtfJ6wLfS3X5V1Urxs6eqkgamxsYHybf5h7RoiQWDXosHTkRBeUAPP",
  "key30": "455feFEPbJC3kLKCecqaD8gBPJkhxM7Xm4JKwjJt8UpVcbcHSWGK7fWScGTSLjRMYkqpRrZpDExxfWe2xsmgSkH8",
  "key31": "3GassWzsN5CXaQfg4h1jvRi84BuesYtqPYdoEcCUe7YXLhy3wQF3qUfCGoHEA1WQVd6qRUWgw3KYMRBVhwgJm6GJ",
  "key32": "3P8RRSGc9AyMe6ZbP6bF3GKw2PEBn72cLtAQboUTECyzdbF3YjkCnoCZBPecKg8z1pgqD3J2HL2sKGpHU6gUq5gY",
  "key33": "5JtpCCquCDLsKgcjWeVrFraHZaexw6wYQysiyY4RMLiTDcQCmAeqqHGeMsAf2Wqs7LFsdBytPVSBSwf9U1gVraeC",
  "key34": "23ZTxcCGySp1KsmzTyUTdDE29LMRjzTb7hf6vFrcnv9GTRZZvuijutJ1iT7At1vGKhBZJP2g5aZitgBcfZjgXs3Q",
  "key35": "2r8dH3anHiyULvbf8nXDbbBJXm4J8pXm4ppHZBD1rmBAAR1NAJ8XMitwU9utkYraoFrkGuNfpn6YRCURB84yo9i1",
  "key36": "2a3u9q5df12fQK2SihnEnkitq2oiWxriekUKjjLcAA1aWJntbCHhogGemi7Un745Bwx7TQtJcFN2yF3cd2pg3vvj",
  "key37": "3o123UPokrftWgmxhbkgRehsZAkBKqjeG1YD63tCNGMHMuDcYjarHB1S5z27RbqT49dGtcbjAJ8wrUjNTWrZj7dC",
  "key38": "ndULp84bCzBq9zKFbRiDNbSGaDBug7HkJNhEF7qNFV65QTm3HYPQirH7PzfsJLs3wq6BGWUqDeDWvpUTM1RorvH",
  "key39": "4HYgv3suyGGTQVWzEwAsA7EM5jSuGN3JXossvpUUA52yTsTkgijvezhKNL1FcJh99SMEsNoAqYnARchB687Cuo4g",
  "key40": "5gkZaqT7PGJoEW7YWKBn6FoxptbzDYn6F8qTX21d4ZgvJWhgr3fd9qsoJyb8iiBNGt89JHd8Tsndfwa1NqmZMK6V",
  "key41": "59iqKRzmt6uxaVA4oTdsGLjp6sUdvrhyz3akJcwpgpSzRqUVggF8kSr7qyVZ48madwt7gwQ969FQDgEcpzNYokEi",
  "key42": "5A6kUxd1a7dNDRS4zNaw99eNErkKWFkVx6RQkZuZypQmCd5MNEEb1xAmvXioSQHDUo5HHLHNU8WwNQcu2T8UTFsS",
  "key43": "2e81Mo7UCYdM7mocobtTiAo1pEDondtW6qs91mgyTu6BnX2Ue3ww5RTWC4673SigvDNHnKg8CVK2yVqgDX4Ux3kf",
  "key44": "2HDk8qzUvfF1stZy3CiVMLLmKTrPcTVesHHtnotXBMooTkLLaxiXYPmAzrY5qdCXjK8s2XGXeBTo2kQeC1CWRPfJ",
  "key45": "5f8YPjWe3XH1SPXm2ZEwx2Ny5KjDg6QgTHD86uEK2urAmrn6KwoPKndtC3SyqBAQ7QjHYdUp6gQxXpB2M3J6yZ2a",
  "key46": "3TpuUaN33sz8foAQJ78RoqiUsCEL37uAr2LgGsokxVLKWmyT1p4fAYYAj3uhn6FET6UVrNqRuDxisVsgqrGsft2A",
  "key47": "znzmEh2of9P2yK8WSaemtQ3TnCqKxmbqrpeP5tcv5V2p6uZRTSDf8mWtCQuA9YEkjnJxGcXyXfVptAPA1t3bpFh"
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
