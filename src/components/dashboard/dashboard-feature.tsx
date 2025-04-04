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
    "4NwwyJ3hGDLN9JonQzLYe2umJnezPw6FeFGfTjiHndwJ9HGsmhRbxb4tQmtnARWqVqNHBbXBaFrHqsiTU2DRpp7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQTkL79s7TnjSiZBFhSL5D8e1kaB6hyNPsSK88fuBxAL9yYEaTCx5oSkrsTCmz3eeFm54ZHsSEPqFZinxiJYnak",
  "key1": "2oDZdsaXAhCmRcT9Tvnf7gZzkCyDkEuqyyqZNbqJnDhNWsmPNz1QfHfUQyyqTfnAZh2ayc9tgkXJjkE2to5ukrX5",
  "key2": "2XNVFYKLECAJecZpmDPBq7z91fFcqBrLRZihXSnGuLiPuL79bwLU5pDFCqnGpdexhB79mwJwQfvX9WGZ9P4QbT6K",
  "key3": "itSyuDq32YsUm1J86YpQLiB2PVZuvcyxyizXKjGB94qAafKQovHvzyMrfp8JQQSq2rQoWkRMVNBzL3Wk16Uu64y",
  "key4": "3deWUt4gXokM9aSHxGc8ZiXgSDVx19Q5vmDF36CSkaQM65QhQK78pUEVJJx68PtrPUeP9PvsYgKBbu3r2SMjP94c",
  "key5": "X7Ps1TpMTyNiyXqiWerTitfyWpdqZofcsgCh2ck77dYBg8FSuvRGQVs86XAwCQnG67mqmbDDhA8v8HaNFuabwqh",
  "key6": "43i8M7cZFPoZXs5boV3zMMPPiNyZCNseSoEXcRLfcb1d8up8GHVAgouQ5UXm1UpDsAP9h3GqtpW9P3v9c5hecJzy",
  "key7": "31MXf8p5Cbs89LLjQCn7F9QGZpRsJsS5dxHQ2UAtxbGyBE7mWacrZhdTMycY4LtyBrWiLbZSqMLDi9XLH7RDYzYc",
  "key8": "5HFguVkvapKq9UpWUkSsMcGS5wpZG4V7GVdzQeUzUTaxHkHtQNQuujayYz5JaSHXMVt2JUkbXLqXnMnfW5vcDURK",
  "key9": "2bUgzqs5Mjd9MGoY3ZnUTCQckCJ3zDrck52oLpXLr15E4VgJdVQX6s5iKhHYeYrprZWLeXJo7kqZafPWaWpGu3VZ",
  "key10": "4xELfrNuvguQ5Fk4Hneb8emY85tHffvwrM9UPhnJZRidY9x2EreUFvoAfS8qbwz3UeTeBSozdUHZ6idsR63a8AZj",
  "key11": "5347gjiuYXHxTcgsi6NMsYFRsHopxQTkBkT9U1xRY4eJr9HVADk4Hdi97bCu3q8fHwe32aGkNuQGkzxVohPFyk3k",
  "key12": "fMWWQj6WoSMgz3UeLzhCyC39UZePmb2kJL9aKEqbhNsM3fPHCEyjssb6HvjTCBPHCLyx2FM76Au3h9VUDGp4FBu",
  "key13": "5sNnYE4mzfJwisf3xE2b17c4CCyg3iFfBhcCRFe38V5nNCgDAopMMTG1d9Vo7BFScemMnaqk7d1tw5XMJoGUZpzJ",
  "key14": "5LudFB398PswYGLuG1T9VVSzoYXbCj58op5pXbWJDWabHPjj9Tvs9ehsF7fYZvbYtPYymUHBWxjqnz3MXXuTa59V",
  "key15": "46H1DWoTGAcVRPJZZeR3pjPvT3Gxc6Vkjx2HxzfqqsY8DU8i34AgWDXfkEdf1deoQtwDJJT27NSo8LsZTNz8bz4u",
  "key16": "xGdhxuoLMNtxMH5JYQaMdufjKDzD18LAMnVvShMYxb8ifrFJDT5BJDYqtxkHBwNNoo62Jbeq8rVXYg7aaqhKZwL",
  "key17": "34s8XNVqDDULtgNJMfgHr2hFjy4G7fAXFoF2PCK7dxLVVFKPESNpx1A52Q16haDqX8Ud5PQni2VLkL7zfQxgkiZi",
  "key18": "64dD7cjY7ucG2sE6ReCM5ADn9qgc8YyrrbvW6Dns55niTfk7U6TxdLxPYg3QGE9cPKu6zdsLcPvygaDcE6MoYyAH",
  "key19": "2mG1t3FkgvZQRjhhYm8YNEvqvHTcmDh4ZjGUCLPAS2jHxF1cSWEDW1ZkEjWWH44pVNVGMRuUiTChF7BHGppkFtzS",
  "key20": "5YkNmX5ihNBZJLbEet5dwT8KCDnwk5vP5v94QViyR8zGAyJWJK4x7qUK3puyxJTm5PMj2FBCoCjgJGWTsSjHMMQY",
  "key21": "4xdtqgbWrdXzyuf2X7xJs4rH1PMNR7qkyPWhUctFFTbhDJb2G9Y2K3Q6R6FXViZWf1tWb5VouPqYtPPSR3fRmk2V",
  "key22": "2PsSw48PoKtxp75y81dBfGgtc9Gk7G7qj3XxJU163uhU7x4ED7Rqt3X1NhAa3pobkuhcRPceV5rGGZ6AGPSNdrAJ",
  "key23": "5zu55nwpPsuwityWzDK1Ky6vwTfeunSXb9LjiS7py6se3viu7F6RxEsPWpgPSkygMTA3nyNSRZF5LXDovVwqiqAr",
  "key24": "5YYfToRVj6zS5WmogbWY6m2P5c6Hxj8MwPW2o2KZAjRuAwHtkba2M5VWbjkR53yb3vk3DqoxUWZZoJM5GwboyQvm",
  "key25": "2E5TUms4m3Hb6dRjnDnkx4i8wr32FnsaZQxW13AwCEE69FLwXVpwCfTKhGf8XkXQ4mpfctpCLsxR58jDRruta7s9",
  "key26": "3G2LLZANo42MZ7fjPQ1MvJW5QnxboJixVQsTNH7XqAQqoaMapHjLtrUvJEDKHyHRw2HMSipKEx4c6uFMswpsTT4M",
  "key27": "3mVSZwZ6jreGKbGMuwk9nGmNfh2YGtUprE4yWKab3ymuvLUP8MUpkh8FW5gGdgKfuuD1v3KekCzMzCjsh9UT6cEG",
  "key28": "3JGfJo9JRdWkyyzB2N9tccBCcocVAqczDEreg42Q4eUtryBJzWYXEdM89vHHaMBBqsSUYg3QtEa4TqssvQVAxQUU",
  "key29": "3DqsLkXTnawQQ2aRmpVzwoy9uJarenoAEySGmZyUssiDAyMZ8fJesPKnvnG67LXMUH5MPGSD7ekSfnegxJtZC3kW",
  "key30": "5mtjUrZi32fMzJK8jva7HzA6Ata1tyg5yEVxWRaJBSciSRwPvjjJqTDbqYAHvbemXs7KF6ewBWLyZG8P5JiWnVdM",
  "key31": "3knrbBMA1URHYi34aFdxdPjcZ66xE3u3p5hdr1rqhzSAmWBmxiYhApY8Ad7mfkUVMNeGD4B1PYbn9GcwjdqeimVZ",
  "key32": "3DfoaAAdxRtWprKK9kqxWTJnCY1ZFWkcZMhWJPwzLhg9sZbH1y6eYeP43bVCBEp6KdaCQnQWkxwGi4DF68Emocg7"
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
