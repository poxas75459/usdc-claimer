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
    "z6VEzjZZTvnDGJDLmed5LBSDDHNHBBSRfRqpimSNiPBC4SSRxrs7wzwiy19kt3VGUR16XnYN7nWa2gJNTwSWcND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Er51hZ6eBCqFdmj5cAJwD9BJtbqtUUyUhgaKnFWk8CsAZFLH8pzF9td5ocNZ7CwAPMYUfekRaYPUGHC5XpXdWbr",
  "key1": "crSmsViQ3GaE15LZTDXXR2vMQX4v6XGbNuGtG3Ty7JYcbAZopFjy22BTYxs4WudaR18nxwqAzjUmdtyG7XDWoJB",
  "key2": "4CgmSwUC6EJtiDKP7QCj2m81E5ZUSJGtrKkwnPpDEtFtJE3kw4PedUmbiNanTeaL8Av5br3rnxJTSpYv9B8oE6V9",
  "key3": "4rfzMRzqneUsGYbJ7EFrXCTgJM5dkeEWQWq5aCTPoeS1UuhNEoMLsjvRWnVkH2sxRZbPeZM4JXLV8QQTB2R2cpKP",
  "key4": "4hCmuWviSadZx6Na5d39xkACzdm2kAdQLdJGU9CZkQjyAQtvhLyiVz4mf57BBK6Wo675ZnsGRwktF3VQLUfCviHq",
  "key5": "kWKuHYPkm8oW2cpsgRCk8SQbCf6WRamuQazaEnBYaHm6ZB9ESCspN2kP62ifi69fqQ7Dm561taXmGHhV5EWU4cr",
  "key6": "4TPNGP9jiN9Hfv4ADFeMvmn2C8TBjd7FrkitUDWQNi6uP5VFxJQCVgVVAJ7eJ1eujD2VTuKCTm98CcuXijLnmYSu",
  "key7": "4GLCAzgy8QDW2Um6wi23eyrkP2y6NapEPe7C6TYXdQi5WcHuMtD4Pwnh9QqozSFtzuHS5xvfxdm6Bn65xjXhaf4j",
  "key8": "5uU5bdZ1w5mNa7b9anvoenDDbGdiaJS5nVducDkycoiZyffLqYAbt27cjFFvz6fJZZ38QarcUHBYHhf42Pmd369y",
  "key9": "5vdJnZ2Aim84GbxR7xLWzWEx9WDGogMumCs5DvugDSxt2hS45sWQFZVjQ6NNNqtVMuwLcZDahxywRL7n4GSeDMgC",
  "key10": "3MgXEsEJewHj4DdeEhUypoXfofZV5pHYuRrd7TLitKTBERfXfA9ZPDHbmkLB228wJX7y5jChU8D8brM9zZh8NTTn",
  "key11": "28iBH8GDyT4E2uhARZbqc3isLE5BSVkpo8izS9Veh11qA3pFWrJxE15WNV8mJYtwPUWiCHY7fWbFx8r2TsKMJczu",
  "key12": "3j8PDpoTqR6otSSS6jaGciMFXU7vLKNSQTED2ZsjTbx3M3ccbvNNKZKQGexjnd1TnBQSLc8McLVDtr5Bqrz2cArS",
  "key13": "wfmZnSNobFeM4jxMPqPfT8Mh9wmk1HaQQm42ADRK2caCpk5Rh53tx5ep2AAeviTuVMH4nXTgp1PMFCY5RHsa7wR",
  "key14": "4ipahdNaQLRAm5txsKmytxVVNEy4wtz9ynKhTKTbiT5Xxkx29jHL5XENjEQCBA53Yb3yNjBvKppru2rnWyrqTsTX",
  "key15": "5bKYpLDSj12dGRPEmmSX7Gj7fnHddHqHgLCkJdo3N8gZJR6WmGPrjUwiCepuUUZsayfho8LxxXhWQSPJjjCyA19K",
  "key16": "2ZPVoXwb9c3YNN4ZrUy2vdZBp6RA8QsZA3RCkHzFi5rJKSAhHSsmFL3iDgJjJ3aa2xKojLCqU6z1Qc4MqRDQeQBd",
  "key17": "QqKLN9PKPWAcdXeBKeMfB5BUDHxzEZUuizpbvak67pMfxk59bc9NLkysS8th3zjjrUHRx1FJV8F5TAKSQ5tz29r",
  "key18": "3AeDmgtWBnEY43q1x92Y4LRRjH1ovqLK18Li61xWuNAYJi7kA3hB3F9VERFYtXeTy8uS71w1KBeNH8Nbd7as9WM1",
  "key19": "5TZwg3ugvhzcDtiLGCUdMGFhpxJPPnvEuV2rJiY13M6eLpAqCETwimHUXYJcM6CQgSai3PcTvfijvcmxNudycvF6",
  "key20": "ghg8CKpQYHPKhG4aBPYg6rMnpc7d8utNGTtea2pLVD3AcJaDwk5uJgD2xoXwgcgxjNRiVXwP3pA2KdUdBWiyg8y",
  "key21": "2CdRpsdFBPjS64cCFsbEas6MoNfKUPx5JP2Gc8WjS4hg3rnbAaZKeDx1hS96rXa9zyRe9ucu2xkwReFkbkrB1KS8",
  "key22": "Y3JbZJfDiAfk7icPwQjNVi5Jsqdoa1hjXcngQZnX3zikPBE8wYxd4hMwWqQPaY2jRG6bB9vvPURoD8wryY6Y62d",
  "key23": "3bhhHy6GyjmVvHZebSwoAyPT6fJ7jRSfTB4nxSs6UbtPYwCjo1iqDWEkDite9YpWZTd2ZG1HfPEAp6HxsvrddWbz",
  "key24": "2kEkeDpf6uqaD1ZLxhadANrzNAEGpL4vWbrHixJxVXpEVbSkrSEuxzUXUVZRGgQxWQHDjf7vChSEDNq9z3hC4GeK",
  "key25": "3aWhPx2u9FoeNsjhG76nBKvzKidyHb2QMu8Sqmxa1USHv1xhNmcS2g6wX3PB46cYwuwVrqXGXpLqsVdiMx5VSbAm",
  "key26": "3zHbn1nwdas7jhEfKx5RDqJ3uajJL92yy844FqdeDCgmwAMMDUzsjpq6JSiMueU8pZKnxhxDySKWASaHADx6WCf1",
  "key27": "4LT6znDvz4hD1Vx5wXwJq7mUbfAtKb6Z6teDVaBYSg5H3KhizjQRfJboJq3C9Gm33RYtMFNqMDLndVjxaDcK9VVV",
  "key28": "66h2yBkC2aFt95jdgZMxY9xQYdATcGDnXFVbdxB14ytnrBuUDv9G6wFEMxJYvqUaXU3bY2tnwGhcrSEiWT4BRXzC",
  "key29": "4j15wnEHWUjADEoSxG7wBFZawWxviSrpgtuMLXuTsZXavgxJLegyGXmwFdtfXZwDbhKoSfMmaz8dTCSfDmEtDBBG",
  "key30": "3qozLr71ysnM2PpaaCk1RmFAx2Tunz4oSLn2pe42PZ6Cp657Y22JQpW2JR3c9ni7ftNP47wSp7fqBaqhJ5jRKqE3",
  "key31": "51E3B3rBrkrQYkG9HpKWKyEs4ijGm5mRVUGa4W9iLriF6KVpiUjNZ6vSjGTwq6xZmYdQu2tSo3kgJGvfABHpAs58",
  "key32": "3QLkQvRzt47q3j69e6NU5ffQC72YFEGFNatPHezYEiZXfeQdM2sjBzkZU4irZyV8CP2bK5fA3mTVepU5iDV1wGuu",
  "key33": "3TpPZGiw97fXGvgnquP3dWzwGDwYuduBkdMXhs8cZ3r6wU3igsEii515B3Vbaf58JCiWh7MdtsEZM79AiNJw9fc3",
  "key34": "3SQD74ge7KN6kcStxoYYByQWZDop9VJwMcfnExr14hVC9Bzp1uvN6aabXVZiGRrK7dyqvkJZC3kD4Wcbi3dNfmgQ",
  "key35": "2tedAutkFTxzjywDQqqhajreXSTLsEzU9Bf8sqtmooTW7VuqzY9R3pgxrZsSk5oH4DG8jcJPREdnqKVxpYevgf6d",
  "key36": "3XvkCFW17bxpeRMKR7vdpbiU4WKpKpdaM6mcY4Eh6x3jbLHpSAdAyPAGAPc2e9y2dHTSywFrAiALLjAVYEHYoEYg",
  "key37": "56Z2SBXcWQSMTEqbALixT3YFxiuqtmZ2dMFhaXc2GPybhYdNeJnxrbBUBCpYaQBxDcih78VzAyZCe837cAB9bFML",
  "key38": "4eHFvTWKLXFjC8SKfXLeSTu4mZzhobjA74LR4Fn4dyus8EUUYTD6TT5rYN2oJuHNMsSMpkNBEDHPuuFdBMeCupCL",
  "key39": "3Z1WrFUP4tJt3vFJyK1KwtfVvi93WwbffgUDGwjgCuA9c22ufY5hsLaDRMTNzEFHaaA3jWLfey9gKfnQgehL4nSr",
  "key40": "4NyR3aHuxdLrJySZp1cCXS2ZCruEobC6uvbcgcG3tXQ154CzU8a74NNq9CiKSUSLbDno7KhaLGzPZLoTpFX1cmQe",
  "key41": "4E9dFyzAYSLBXBURToFVyJV6c7t9TXzqsXk6kxbKjb8sUj2pUVQ2sEdo1MpvR2gpd1c7SHVYkwSQBDwTKhsdzxmH",
  "key42": "2FrSPnwNjTLecavkhNvsqHKtvAPPW8fMcpYc8YzN94d9XUgemagQfcUsEwndboU1Etf8GQCr1JXsPhFFqah2TCi5",
  "key43": "HQKN5aGiLbTDJauMvEXrxHkDg633stQZ1AtKAXg6o9kpLQ29rbZsJH7iczYVv9dRLdkap797kYC9QsTrwuyqgiZ",
  "key44": "5kJqCVA2FLa4GUDfXPUWsc2i97EVdS2dvvcAFcjstBGGRZzsFLPkpf4ptU5yzp9DzRpu6YvR7rhanGDyxSuhNZkS"
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
