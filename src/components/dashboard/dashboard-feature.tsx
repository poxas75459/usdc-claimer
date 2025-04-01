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
    "5jQCfTHfu5oJvSjk1QtXTwxJWWUq59i63DjHiEQiAorKLsJG8fvY5pbYEasgUWdEycUn2RasNsBZtmLDaxCwNoqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jk4MBDoeqbS39ntsSdiZsojbsdF5YNUXY6Uv2oWukVbLii1P9141xjAb6FgqEYyh8eEnCZ7NPhPJEMDPMAYqqup",
  "key1": "26PZBxUxNaeBC8hcNrym1GVRYznTwePjhFD3aGzzNpLcj1fFzMmBDzUpf9vvG6LQuK3T8ELufjcUM694Yt9uZ5bX",
  "key2": "5fWGhqX8VX7fSJ4hkUigkFNgaLRm7Xo4j6RQpgzryU5gsc9s6rUJRXWeGFmvC5RAxQxhSUXEHBj1mr1xBBWjKcmA",
  "key3": "2ba83fqmqfVq67LUZG96zZ3E3BmbwbgUk5RJTNrqfyHyVDoKJAbwAQQ4Mz1KEdSCogHL7t27oJudAnLYVejDxHRX",
  "key4": "4cfJuxaLZjZ7Ba3WMLUYiSzXMk88RAqScGdkF7jVBN28vJDEfLJgZVuVUgtEPVf96163XaK23FRJxVhRATaRWK81",
  "key5": "27FoeG6DwjVdFSx629g4mNHw9VbzVG2WTcywTREnF4LJWWAqDn4ijWY6XD3ZYH7hkpiQM5vTdfndEpebJZSi7jtz",
  "key6": "wUDt7mKWHN7LgGu2d6HoXuuyZ7vA2Zqyv2Pp5zWbtn3B1npnxhK2DDi4duCxy3gEagWuuhP3MfJJcZKQbJpwmj5",
  "key7": "5oXDC46HxVDTsaQSZ2mkmFdEnhSPKhv6RWBELZct41WDt9EENa2PGL5GMytTYpSMGb6jzEasqGoSinBLdB4SNZYr",
  "key8": "wbG3VohkoE8qRcDXRJM7yVGVSWwWYzFRFFmXZyJdNG3S6SKi6KHSHHB6mc7xmxyGxgK3TXShU392RV3EBkDYPhY",
  "key9": "bmXtzADQovAcBaoiAiaGD5ormDjZrUnKBkNMBz9Jr9MRHShoKsKhSpvTNz5ibT19R7FcjgCmiX1u6LkFGfQUsWV",
  "key10": "4tRXdDtrjaJiTJH9jfPtJX22TiMhJgZetfyBCnqSd6yzgPYyia24ZQ2BDjbeYrsWDNu8XBgzmVJoKacjko4sXV2C",
  "key11": "4sKTdbpHdvVUpNqbetczTBD1MHtKsiwTnUkWW723nyZXQzjEuV3aNAxLdNkhuPFDuvM2ZhcA45S8dvcd2ZcDkLst",
  "key12": "2gBXdVJ9tQrkGzc5iMhwGujPsiA9p3QEPBohuSrmGqpKPvkLdFxRudNMWFYZ1HfcutcE8JtPDzBumLLFquHANBaU",
  "key13": "5pxcJDrQKyJude9PLLhjmfUT5q5vPHSq4846bjUHQyiNLukj7hqhwXsKtqMNz9A5Uvx66MG5r3ih8LwWJqNoxBpa",
  "key14": "5ULxZtgkcFidYSs9xSFSQjB8Ps9LN46zuvdsupsoEaPsagvYx3Ypxdijwcri3gNPtr9eCFqjwGuYsW9ah9Rs6xjb",
  "key15": "4m8fH8QNoevvL8i3E8GJf9QjnWToEM97KiGjJkKK8Cvi5fxSn6hdpGfGz2jkAV84qTVJyQH5rpk4sg7oBS9cCjqJ",
  "key16": "4KjkF4HaeW5GMW8MWacEAizN78TycvGMpvrdhuWuzByedvX6RKKtrf6kdwgrAfVmy7Aa7gdHzZsYjQAtBA1s2WJ3",
  "key17": "4pjrU3ra3h4XLreWj6SFtixes5qazNDNtdP84Fv13m6FKRNeSbRZb9NbNwWP3LNivqDmY9peNViUR9mLwTtbrYB4",
  "key18": "3ARSzDrVSsHxa3wQRKey9RVMZfiFLbgGjm2HpXp7hwSx777vXTvPeaDHCiMMCVCN11y6sZH2F6tr5KodKyUGSoec",
  "key19": "UAkL2aByvmW9TiG6cBMyJyyqs11jPTNwJubFENGxNLWnzPiyh2yfHJbjaUybxoaD7UbQnndc4uS86mCqFnTwtVg",
  "key20": "3cSYjtbARLs9rJcNHys4BMuEwQcawnZGzFeX3VSsSkbtYSZ5QYAYwZWAMunRrdKC5ZZ3HZKem1GP95sHD2TJMSx5",
  "key21": "5biLUiLJhnVuPxuoyRnD2AVquGGaQptPyhb8TRtsRTa7BTSrcBnFkGAaWP7y1hTWXwmsENddvvHCUEmCfofh6bxN",
  "key22": "5cjtXHNt2WLKtNdu6xAwyfW3UDNPyZXGjpKc1c6U2EypxjQtkMHFSbAQjhokbiRT1GSPTnea3SW58GUP5g1r49Ym",
  "key23": "4eJj2rb7D7LvTRuioPPjoCh2r7uNgEFuN9sHFdfcbVfcSwvoL7WUxXcnV4ThArRvmnrSRwFa1uwdaTLgefrHjjdx",
  "key24": "2Zc378gPsXh95Up3QEheZzxXRP6X2XEUTbPdwaPkBEEHcmruqj75X8daD4YCHiVhMGSK3T8vPSYPpm3cc46Pf9Yk",
  "key25": "5h2ufEJ8z17icARLFa21yESVARPyL9jU41ogfg4zSV72bADL3zzk4iWGcRdc6RJzjSdrDmmVPutpqnTqXMBYd9r8",
  "key26": "2Wt4h3AxFCfc5EvyumHLx7vGXhv7FktaEuNmDwAUD9GzCPxvqnTcCVH6eN4Df32i7Qs8ccWsx42GKpbepRdGdx3p",
  "key27": "5qqeXVtZMxFngtHfcoj7XH3YdQCvgFD8swhhsJ7TbXCZa51nCzqbvg5TmJBytDYesmf1yRQJr7jRUZGcc78YZb99",
  "key28": "ovnZCaVu89sHwoHfD1aWzJ2pnSk7yAkUtwnyYs7Km2LjA6wDk9bxFaFXpMU9GEtMuMtsDJzUpbmKkVCxA6SBd2Z",
  "key29": "5jmaygRdvn1FwDQALVp3GsgKtoH8m4B3LAJow71MbyZ49FyruWzK1fGPapcB5qL9ytB3hA5ry69a6q2rczGM9SVH",
  "key30": "48wUwvEXaL8pMCT5D8qPog5BN5XXSrPHTwy8DB6wJNhWKgkEQYMhZNfgbUM8XAf96L3Xz1EXHQecLmppZFEuZ1bS",
  "key31": "u819m2MYJzNzUYV3BbiYuJt5Dm2L3xr9XkVZZuxBEYRFEUzQhF4Yvrc1bgNYiRpjCP6XuAFEP4Teh7ptxHKFWoX",
  "key32": "MpjDE2JPQppxL69UhtcuWWLn6f91DhojQZu4aRG5sJSS6miUNaDuJFA4psT36PY2w5gFSXcikQZMjYLHYtqCi6g",
  "key33": "2WbMSiXJjHnMF7pUWvumYHYwdARK1vpXhwsHTPZGMPy5sfsrHtCay3i785eH1NMeDmXp9RbK3xKkWGmEmWs8gxXn",
  "key34": "3PzxsjW42d72SqNvFGvgaLNe6Tb8z6iHQcnAMJj69zj3MzWmvTXamUMo5kPNhQU4k7xXxQREmGTrbLU15jdhTAEK",
  "key35": "21BhJ6UFzP8KE3kxVh4P2TPs76j6EveT8UbZv8kepTJ1JBVEMYjkengzJLmAJoMV9SkgN8puGCPt6TFk5vDawR5Z",
  "key36": "36v4NqF327LcsAKvGcZDZtHis2FjU7eyAS8xzNxjh9QHaYgsxLr77o5WenxkiTGVgCgMszuxbK7TLn1CzHRbXnDJ"
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
