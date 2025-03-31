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
    "2qMcMk4yi9Q3VmWWu4dNPZLhr3mKytBx1NQK9GQjLhbjfueehis73dk63ZpdnDTJ2bW1n2dUvifgheoXfj3LS9tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nVpUTeHnnJuAKARCu6YDTS6KR6aix6Ny2t889xd2Wg2A7qm7En33prtwEJfBrLU8z6RvUdvA7HKtSYkxBjJ8A1",
  "key1": "2Rvay97SYWrKRVZJ2rpD6TRok8KNY7KqiSocxoRN3X4A9mEa1AY3FjvdxCdCzeHn2vLgvL5T6BusdDGJ1BJ7Eo8t",
  "key2": "3obxrHoZmuyK9JwCcG4Nh8yvZZPSbezRRXZ5pzdqxuehujPL8MSsCPCQYYeF6scbXscwXu2r8BHXJd9gx5CYzGEF",
  "key3": "3587FDPG8A2pxAuG7CuAUvh6itsrb1iy3hN7vWAg7HwKCxH7YqMD2DQAthaQfTpJyFdTHwdY8wH6uVhRZGpbCHAG",
  "key4": "2zA4rThBLVEVUcJKVVsEDtZq7mqNdvP5HXj7Y1UP1d57R7X5PpiFhuJNQgC9ctcH6iYigUoW9RFsegp7Njv4WfTU",
  "key5": "piPLqtJpgyr4KxTk5UiQg68G93bLpspGjAedRgCutBzMxZCJWTnpXdLSfSQZaB388pnTGeuyPfwxYDkhauQLsvz",
  "key6": "XrxGeBUTk9iRQdcTxAWWc9k8y2pWPZcnNBDGHgtagB5crqcgotLzQZzbcuhCDc64zFQMoHAsmYBMnYx3vKaNhDS",
  "key7": "3xSSHGTGf6fobAa43dZMCFJoVGBLoXGt3iUiD4Ao8jr4gwAfV1kzAwKHHhuu2nvkYrVy2Fqw8sQufYTpFBtb3AQi",
  "key8": "574YxkkEjvPZJEWK8FZJcBguKUNBwF3jmoSerokG4sRqyRvqHDoNkessizCFXVGMHoVUpvXpu9Jv35S9idZAfnDR",
  "key9": "2cJ6FdjVLvw3Vq2z7skfXY5GgCnzBiRzZ6ENM52yvuL8yTjKCB4tasUdMsoPC3CvgFmLQ6WBN1W9tN5tiQdm8y9w",
  "key10": "52LpBLAAcfrsZtCR8dvjCmUyjCY52o9gUJFK6wvZ7Rt76rCiuHNkut96xUrxvJz3zmM2R5QJgvXi7a3fFkDZozy1",
  "key11": "41SUHAi2jDez1REQ5RyorK7TWtp2APNSJ3SYjDtaiPUwJ4XXBEbAi6Lep1x7ZfF4qgBziQECo1V15F2Z5cKo7RFa",
  "key12": "5vuR57x2Efbmw4aPoTmxFerUwHUoaxGoKJFiYokfKTePVC9fwcFiY58oVL4Z6RMsmPxN5jTSbo449f54FHYW8NjG",
  "key13": "2myagVhhTCabCq21N9CYkVzVqJtzwKotHZ3XshertpytHnECcaS9Ez4rZB3LGFbteJRzvrXnJEeMPc1DCittju1y",
  "key14": "3UHzQGuBeEiFG6msJxzPFsRweNcF26eoPuW7bM9CuSpv8j4dW7qrYs3pKhUxJgxckaozYkZ4yn14E6D6KJMc3B4G",
  "key15": "pUD6dNLHfDdLmmEZWRzCxWXq7z58kX9fR6gfFaqqYKSDT1bi8XbpdUJs9uf9jyLyQapDCsEVC6vPeGYLXagXuTd",
  "key16": "59JHAtiwV4ymPvgE5vB8mproK2rQWP6L5NzHgzsibY4FJY6pkh3VMXhcLywXevhsQrTiJtjts7iAqv1dPxWcA2X",
  "key17": "21jQjnKo8Dub3D7jE4A43tApU139WeZVLiyrxxG2YVceLrmcfoX5suG3wnna47hS2aHZdN3t5WGUKavfb6jHeUaF",
  "key18": "32GngkyFnWr1o7VzfgWKE1R54rMSAZdsvHZSGAChH2nNkZsNutpjHZLPWpBwxvTJKyqycm2wQQTp8BCG8bxxmsLa",
  "key19": "3PSwzSeMBTPoJeoBNMnfiEBg2UceMCaSoV2rQm7JXPGWpAep16ZNqTfLEK9iX3rFYZVAYHyN4KYeuyZfkR8gEWDQ",
  "key20": "43Np5LR88ioLqPe3ML8Qaj49bSqdpWv6zjZZosqmBXtbciuxLjNesR55CUowijyjpg68DSmWPR9Tp2WbubLvfwtT",
  "key21": "AmziGNoCxopsKJyhhMYBnLWHSfCdiY5biqNTiB9KxgcQVGVbse9yXzARhr2Ds6753WgNPtVCqCkgEwSDgaKiZtM",
  "key22": "4wq9yq5LBoagCY6UYzmTMiX2EBGdeJz7xpzkdwJoYLhSL1kbRwe6YzcgziRuR8Ripoy9j2py23PjfoM42ER3Ngyq",
  "key23": "2PJJN89o9ByvnDhx8tsrEM4z7wyoNMHd9N3HJ2GD4U5jwccW8aoDYjiMoyZ91JRwBZkBQQcDaFBaH6GJPp8poZvN",
  "key24": "44GWWb4QybfG79jrk55MHVrwxG6Vath9supTG2HoozbptyFjuUH563W6y3aNQES3HArmKGsfoyzU4k55kCPorQjb",
  "key25": "2VnSqdp2vPJ2LDuGDrBYBMkyTqFxk63Rt4nUnM7sRJQ8J12Zz3KacxoKVSLD7YmYpVZQfvESwivn7kkUa3U1Amdj",
  "key26": "3y9k59ABfuBfzDvoBqb9wLo3qL5ZAqEEL9qW3dU4bo4cwfrw7Fr3QzwBMnAf4aVYtuAA42SdBLcuWPpCcqpmhrEP",
  "key27": "2TyJ7eGF7xanNgDVtDeTZdMveXSkt9iykskMF9edZiTKiz51J7Wt3zffkyc4HejZj738zoFVWGPJ9sQoyJ3V1Ra2",
  "key28": "2KW3tfg3ZhhgBKLrcrpZY7bmfXKETC7XkqDjHtQ9UQiTuAZMKj99qYBw3e2nmkgN52t7uFS8U6QPYERvQvp792wV",
  "key29": "25LayVygtBgD7pHei5jEaU4e7acaDECkmBEr4X1jXTG8wgcaEunTCuUWKx7cT68wis7tsT8s6ujhmm3UBiH91NVL",
  "key30": "3XqraTw57LxCg85auv7UhGbABYXFEVwoAz64UbJniEK5BdoGfDSmpS55ZHdrLHqqwzrqYkJbqj2vhQF3Rk7gCZVa",
  "key31": "sDCL2ckyYRJewyCdCSjU3Jf9kmxR1zjunNQNMqDMx281WQKpTvq7Wp1LnhgywJFkAdJuSK6HkFjFUd7m1A44qSA",
  "key32": "5Sq95eP9pvGCUB5a6z6mexUZaf7ze73ZAySAp77pFFgnV83tDo7H8W3b1BaNdeKMyNeyupm6eSBYhxtrtSWQ7Cvr",
  "key33": "2C4bpmC8ChFzyJv9janbiGmnaWH6GihSGQgcumy5skkwzaYQXMM3y7aiAnmu3BkyaQeDEcPBuGMmtRbqWUZ4vzPg",
  "key34": "4dY4yDewRPx6jh1sWAiYatF4NSy1KXdEtPqRfXWYXkReQzCfMS3wJhy84LcoDxaLChSDbtGWPnLhgPeMHomxAHfW",
  "key35": "5fA1iymquG8K9xyGrFB8Dbw7daoF9ifDrtVTUgUyMScPJ4S62qBJJ4Gpip57EMbtQhTFnznYDKDFNedhZHKyUy1r",
  "key36": "3f2L8hvZ5Xmh9CRjwnuGkxgUxdX5DVu7cL5nHiofNH8ZZ1gqqEd9rVwSeFejTLpZd45oBj163jJJxd9dy2MoETfP",
  "key37": "53cFxCoWzkfRbaxNakrbgtQrqDK6THJw2iAndZh6gjkf3wDiYmyGGVLoz7rM4HbKcBsqNPnGPSNLcKoPYzxTXVbc",
  "key38": "2p9mTan1CUpr8nBUqawMpUcyBfWA9o4auFAbdXx4AwbDWgFuuX7E1g9i2uBN3avDLyjg8RJwEZx35aGpMLWqg9px",
  "key39": "2SyWL89GEEhQKxgw6DLp8JAMXR1ftPeJC1xdbDSQLcKswgqEFRoRXMQABH7tfdi8ASBULGMZen4D5Fhv1ZGtdB46",
  "key40": "5esVRjcDD71FmVAxX5BWDCyfBuhfi6m4XTidcNKBvLRndScAejX71VXYEEDqqFV9xRhmxf49vL6jCdX47EdvCBMh",
  "key41": "4a7y3oWXKaoLWzyJzzGWmUhwfCM4TB52XFTJefoQKiif2yJigPauFADoDcMDU3vH8Tp3N3AiRBZPD46RZBK83eY",
  "key42": "5topEc2hj4i3FDDP4JcmtjKDYC2S8bGEzphcvGCtJnnBdHwWydaMV6VRJfntoT4KxrYjbb2ZyAybo5oejxE6SxsT",
  "key43": "3xp5nvbZd1foBz19H63A9j9fopQzFF3U8cubMPbax6T3T9DYy9zg9VLS52GnJ49PU1w8GhpekRdnQJw3bXaftTuT",
  "key44": "XU27jfPSzZohR9uJCTCbaWkZSggwrtcv4S7sR5R1bWaatvzMHndCzEFDdQGr4C8hT5y3A3aMuPqR4C4JrPtwKSW",
  "key45": "5tJuhxR8jqb3b3dzQgKGwny7AC6aMFPBk52pdja8VUwfFq31N6LHSugqmM46yDafN4kV93WDngTjcG5R28gcUpek",
  "key46": "RhMZYDbDmLpVqnPFowRKyqyrrYs76rWQjHMuXgnJ6JP2RgJdmZpPt5Dm5ZfLLo4yJiJq5G98JSk9gSFQif74qcN",
  "key47": "5agMEVeoZJnD6BGqQ1EDAYirLZUxeED2gRUe4jSEubSdGoj7LeTHnYXnMp1ngNjY7yaLPwW3YNuU1D97cYaBV1mK",
  "key48": "22WxPEfesp6pBMr6HSiQHm2PJ9oDvEC7gHCDtVrHG1ZKzZqQHbrrQ2xyXJ8pZ5quxk5UjVHHQcJVNPGDcxvBn5En"
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
