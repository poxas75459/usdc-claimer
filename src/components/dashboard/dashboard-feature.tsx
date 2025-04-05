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
    "3D7R2z5QaXw1WKR22PS4jdPTQ8DWDRDb3RDsy5W9vA2hPre9GGDq5eVmq36rVJPDBB9axzpbtYiN9zsQe2LfTayC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmuRS7ZXyXyJyJ3PFeiUYtZehgDxKSEWqNGz5braJfdwmgLyeg6C3kGtBePoeyVM7sA5pnZ3BxunLkThxz6rwqQ",
  "key1": "3EjtwvgAuePcLknazYepCze3cp5uchVdZG9XTVRHyxLqqmjPW1eZEnKE1UJWEAYx1TsqxQwQJ2ZZmzLxUk4tuXAH",
  "key2": "4aMMgSvhnxx61jW7tSJaW5XWtv6DsHm68in95PsDAxhv5cr5VAg6ibSUcg9WMpcLEa6QKHhES9axtwtkhFpkgdTd",
  "key3": "5q6H2gsq74SiZS2yJ3m7AoEisHekWpvj4ukCBKrrMvKDbbKfsDMyP6pmXUHVSQP9tNSfyFbzj2sTtDMcVzAh9oPX",
  "key4": "A9tanQ8i4BXShrPC21AdXVE4zspTJti9prmiWBy33DTdwv5jX4THkZErf5howVpEXDM6iAyLZCKsakugydzdsMP",
  "key5": "5nEaDeH4nJAGZUpSm4aDvsbJqGiK18auoB7FQf6iBNia1TkheRsGXDiAFyaEtEbbfiJFQAATPMxVaJGBAEWyMfNm",
  "key6": "2LJmWiffYYqNrA2nWJmEXtehNU7UXcGy199cjDgmFSfZ4xmg84SffNwEvE7xP3QfCPTsqJ2FWVcv1PmKJbEeAfDa",
  "key7": "2h8BNdDxct7XV1EuxR7QpcKPLEco23vMadmWBSgwTfYPqc4J3KX5ocAfeyxr62AaQoovNzZdm3Ag1eNtewk5tDRH",
  "key8": "2TK5rvqtyPNwNFpNWSmWwAgHE7xCmtAA5zdzGvkb3UaTfXfKzrrBLh13HLiDmvG7TwWvwsxQrkdx255BJU8NJti5",
  "key9": "5Qz3Nw6iaxAp474uAGYLHRRjUTLTRvnGLxMvKjcs2MQCZDyH7DK6hqDsqgMGJYBNpU59CzbABM2wbDBHCMem8xBG",
  "key10": "RNSk52wgnSoDiUvAqH2DTEVVFhb9RSYoRUSSaoTXAJMHX8QEqeGufvRRaDEsRo7mtpJFiS36RhDZjbDmDB9CNYa",
  "key11": "54WB5fLZkLmMWLiKKJvoPxQxXwXTQn5qVkn1tYkFS5uTmHxkncpxcKBBf8NoXWS6coQXGNLbis9JgjKMWpg1awi4",
  "key12": "2e8MnGebMYE5iwRce9hpvyRr2iyNyMzVnAZuV2tCbRRkvW6hCeoKiie5xLXJGbUoG1QhptsCddA17LDzmJVhoSJM",
  "key13": "5KqKibuWgPBVbcgKiYyHMfGvXxZhEtpzCh31btgaqTPQKeUnP1aRb23nEuURDdmSowvqKUqwTBBELsb2VCJfUBbX",
  "key14": "5yYKiP3fHPvY2LB6UUFmWWNNiKGyjiK6FSp1TwDYmuXEqA9krK91A2YbGXtTp1c6tsWL3HkyWK31Zi6kXwq6XtF2",
  "key15": "3dEHDf2HGKFDMEWS3FEPXzitPLR85gJy9uR6CyJBNS2Cdx5DhHHs1nmgxDDaHKosgyqDnwYSR1wNVEGJebHSW8HD",
  "key16": "3UAhWF7Ynw6vrWLBwJSWU4Fz8RpQH8mvtfFZNipMRPTHeukED2FVufwZzBJ1XbfrDPN5rML1dNPZe7hiM82FpWN7",
  "key17": "5jAj1tUUVnNS5TZTct1KaTNcaspa8Yiw7B43hRGXeXzZJ5LSeNA4EJiptoge3h5z68Bz7jtuLrtbNNjpa4dF4ndE",
  "key18": "3QQ6tZ3dnLqnR8Rfkh8gbqRqdZkSSoMqW1cjtYMEixUMxC4kywJDCuhx3rZnJCYSwcoUSXHz4DPFes217nTm7mrz",
  "key19": "4ytce6EyR72o4BV5UCUZaGD6uSqnCk8hEdfuh8n1GW62ox83ptNbBvUPRnLya4GrTjUNG68St7e7JimXzcm26gf3",
  "key20": "4w9PJpGpwxvJYW963zfkUTEC69pdGYUQXu8QRt39QwWYGbzFgm8MHyDfrvnURaSJagaX7nX5S16WPMX4SUcqbJqc",
  "key21": "2ky2jNonSdhoC24GaoqKsMcigPhV3N5NpMiQQENxr2Tbdo1Hx7uZoDm7FozAi9tigSsrSFZfPQBTnZYaHWub33ms",
  "key22": "58S7cnnLhtQ58rpP4bLE8sE2wBRTUvsYcj3cfQNUs3HkREjuj7ZXToMz6hR2UQxReVsTe1bBFHj4nWkC6KCuoM36",
  "key23": "4DknrYsG8RzAATSet1P9MFKN6M1gxuhMUGaZBL7ZLfD5mhxkLvjVqpoNEZeDZfUguvdBZsMegLuH12VsYnrmJyfy",
  "key24": "5KkAnLDC65Hgaz6LNFCiYUg3zy6RfNAo47UrbUVYc1B2DTjtgz6wiPT25jcgyUnePD4FXVDwFz6PuCNmPUErPHPt",
  "key25": "ppCFJz1uguLmNpAqzGZ2fVQgnAPqJsEtPnAgMmU5uUq96E69SgzM4uWrSH7cWE7TDaSAX6sgLyXZ2JhxF1DGQzD"
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
