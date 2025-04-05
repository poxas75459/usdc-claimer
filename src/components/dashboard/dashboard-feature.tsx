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
    "4A7vpRamMeb9BA3csqs7UoTYPN3kBsjCtsCPotkpMYwBm1mXppJPr7o9Q6eFaqyEykiBmQkuBNP1mpLTopd48fso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJKyWMkBxZ9ii7EjMPno3857YEosQeaKTDxAf47rs2WBsn5pP3v1EoNkDntcrrTRMCSppujjTEt686ky5J98ytr",
  "key1": "3vJ7GADXvUyGkxo3rHTkPF6RNRpZsBCrwZNwMpjgTTdgkRQYXn65tenULZV7esfLDaf3Ed9S2ALYTdA5QofAZyc9",
  "key2": "3qsXMvZwhBw8fjJoBmnEofofoUPb9XYKh7ZcjkPumrmoV8E7WfCqtBhsm6sLvnAAKiGyZC1towzHw1fGmHU8oR9N",
  "key3": "ged8ZiDGRxeC2P5aTHSGNfng7CeUbRMYUCGAbbmymr2uuGYULmb8dSg1gLorJ1XPBn6YqqU2qUrhK6zVv8YNHrT",
  "key4": "3EBb3xUtbupoVDcV9NTq6iXidjBtkrGdBQAdPZmX25TneswpZtbhVMAgCvzbKk64GRCSEuShQ2aQD4nLv7LKyyGJ",
  "key5": "5FZ7UaGjaSrwDQDfd99HC6hBQzd6PnjcKSd4ZQ9GX5hvdZHE7NbLoe5E2SRn2CWPbtjLxbsZwGD3piQLQLmco1Qy",
  "key6": "fsksiiAhJmweuh5X8gn3fSHqwfwrKNv66b8EETPFZaqwNsuS9Q2L1nEDEJwqa8mDyM8dNt4eaktG3wKg5enUU5F",
  "key7": "2AboTBSM7QecJn6sHdp6ceP2ymEEQpzAsSwE4Y1d8oCHdziuJz24PHyUDJvy3hGBSkyEsS8VnCPzTR1ZLwrjo5vN",
  "key8": "rnov9bSyXhGcVDBJ6ETm5cLB21vcsix4ADodJBa2A6S2TRMX4a2Mow4pxEeoqmEsgyMohbJw5BQr5EvnSwqR4Bv",
  "key9": "5cXz1dXNRzRsEQSXk5wR6CQ2zBSiB79KwgPbs5ySp3MmVNvqj5rzKAUH2oJSVRvrJzUj9UfzVoWN4LLsnKVzzGBX",
  "key10": "3X6ASujfuGQkXfnmou2325yP3oggRdpQYmCbForAU7gsZ6nmyYH5YEpXmoQcGR7UPs4y3AC1CD2VZRTxjqkqZDEa",
  "key11": "4RKk7Fnpvsgzy2yaVGm15Lrqvi8JXbPErWghN3HS7NHm3qAT3bcSQcNc64z9Fyh7WiWGUu7piTJ2mbSHiEsK3sVA",
  "key12": "2L3VmyATALDDgXypYA95U2bT41SiPHqBUXMSNKErqoEfMGT5CHBJ4SMSgqv5bE3uoFrhypP3DHc3MzLNn61ihDqX",
  "key13": "5H1ic8M2pwkLLDhJdQXQ24Wczb1Lpwkt7wNFKqakHFuJKkjXv4PcE9WuuPLfrwyXpaKFT9TY5AZU9fVr358fVnHA",
  "key14": "5USy515TtacaewCghTvi5vfD27WWJSZY7TuguykTkxKxZXW3XLc8Y6y1e28r2bJVjrfpURiwnPyC4Ver7jKeFBHb",
  "key15": "5rpiyXJvB1LAD7nVD2AuGGCpEd9jKdbvasYJvQWoQ3APUwW1XKNL7uLfAFh4Ep4Jhc6rwt9LW6UMdDLQ319pAjTc",
  "key16": "2pyH7nvDFQRHgKaqHVuJYcG4YNkXLc1YZoCsmBURTHG38cs6XTBtzj2CjpBm6xJ2y3y2BE6P5r7PAyHmGhnbfbk9",
  "key17": "4jexYLSyonGWQ6q7RpJbU6wULDWkmRMpPvRVK5xHj8irwmwpQD2pLudTST43vynFtdV8x4CfTy2uKJf3s2i9KfCr",
  "key18": "5MRMdMCieF8x8UP4jLos3KM4X47F7Fz38XbnVrFpd7K9Pr9dCgL4U5C86WNxAxEYEXsoHp3iu1hSSSJxtGksZePR",
  "key19": "x6raMF6PbJzJLjqFAciAEqfyTRg2vP4BRTXMXs5sLPRMQkJe1v7Cs1hp8gkWPbuHMooQDcujscDky73cFa8GFCz",
  "key20": "2hknjXseCHGDEngVspEnog1zUetDQ7umJuyEh1Mg6omkT5VjmiWjoYaoNHpGEWFxXFw5WhkXycE7pnN8xrmzCjNw",
  "key21": "LAdvGdwKhfj76kES2rKDLe3Bk4AbtUBv51RYFRRYi5PJDtCeFJy32tsTFFFoaLA1UVsSoUZkydTwx4idqCsS5JC",
  "key22": "4q19WoFi24WJbhqPau3XvjFoF2c1YM9nETXndiVY1TyUXtUZZKdJez6c6JKYiYMJZa6WAWa4mmTjPLhxTCigRz8U",
  "key23": "5ELAYvUgqcKHwLrWPkhsfqj748TNrS5Vch8xJZJk9muVJEUtkTAHkAGJVYUcV8vKcup8Died6g1LK4EmDyEGBJ2c",
  "key24": "4XLcQVEPVd9YH2hJo43JWzx5rRa2bEdBH6bQF8LNQNrN89yEG8WYtRdJ5LtBwvC4JR28RrgZ8dgJWT8w7CdcEc8H",
  "key25": "2yhURs9HbSjcKdNzzVkYxyAeWt9wpXMVTwPXphAQ9HXGSMKsLwqZBkP27mvxagpBSnqX4oKsSNhhoCGw5wDXn4xL",
  "key26": "2NwgxkL3erGevw6PRd9Q2H3hJ52xARfqRNxUYkoz1B7rpmQNLDXvfaLfk5BxyGyagSEWs3g5Evybd2sTw47DgsE7",
  "key27": "nTyHtBpGCokDHfiWWtBG6eAhQt1bjcPb93FxjW3VQNn47M69JmU66R1cqvpV9JJcuoS9C4ra2N6Aax7W332q7M6",
  "key28": "2jxFt3SrEgHPr4yHhQmhsXDw9pSqKSNBJ52nMRXb44KWacdZWmBiGUcazHDppgjMtvPPxqaitWTzgMhSVc4yW79H",
  "key29": "3rToVVoseAMk4NS8r3eStztErty5am6rPeVL96vybRJS8YjfPvXaEAcH3iMtFrcAc7HxvJWRyHnWiMVwoM7hVZgN"
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
