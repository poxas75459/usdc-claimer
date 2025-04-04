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
    "4rgaii136yR9ezXJp8oKFD8akUqACmazPmrgyZuKoTuhDMEyrohSyuPQLHXxivJtsm1Aeu5FhCtqz2CyKcwxVeGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EDNxf4Zq5FjAz9ydWecAbzzCRCjSAMUrGhyYNSeVS4jfkv7vcpsgp6t3c88WZQjvri7TZboLQGe4eUcPRM2NHgz",
  "key1": "3CauS9J4XMkVXjLaNiTKAdn6EMCjZjjCehXKdFjkBJCALdxcUeGvDKUuq1ymNBwX7kHhkuJ2qMHuhFZohESJ3AQr",
  "key2": "4cpqAykQYwsC8FBKfCaRDzdzjkybUX5SAQjwe38biWHUuHP4SyosnX3B8eyvQmZJLJGihCLrRYDsmU9oiMcAjC3X",
  "key3": "3RmshQQKy25nJpjwDgDnxSL97PgKGp1jcorBDxyqtLSd24kydDEu1xA1CXwAi3yZ7Eqy36BBFVQvHy8Ta6iHR5Pq",
  "key4": "pe2ovwoWzM3bWq9md1NcSqxvF1jynSajYJCx5gNKjtJKzHECH4iLtq1h86XfY9BVideW61zqU1Sm2DUJf1Gy5cT",
  "key5": "2tKw994hsMp3fAvnBH51YgQE9bVccfKQ1icnjtt2XkZpMA77zzvHzJh6r1TznS2gBKArCUseyNBVMSB6rtp2gbtD",
  "key6": "5tgmes6jW8SEPwK25VdLnH1KFu7zU6WdR1Y6uSuvoLc42inTr3gY5mrSkYrr5RZ4jq5BxxfGBHSvuy374ppBKkxa",
  "key7": "2onkLVSZCyb4DjUtXLeMMmerPKPfx165Edpu45q4iithyhQAU6qL7vmLeb1qGQVMhFywubDcRQb1TwQPSeyE3gVo",
  "key8": "2pcDmdLoFqWodd9DXRMKbJC13iW8ezoetQFi28sXzZVHNdTyfH1zMnVEozy1wWQqw2pxP1YLFbJYoGpqEfAN3hCS",
  "key9": "2U72tmofGjANz5T5wQ7MBNG2eugV7BjpUZ7CMkj1GEDqrHSDyxsgA6wWdHuaTXwAaNTe8qk1a1XrzttPVVkV1CJN",
  "key10": "5vo7UcMgtZyfiBVssgDkaqM53dBmo1yTfH9hMFdyu7DpLWNuuxrQJB2HBVxZuVYxMLrkHMfbmaz7BGUoLti1Zkn3",
  "key11": "4pZEDeZkZwZibFdsUVMWjL1wp1ZcvaxprhyEt4WhPQMLjS1zZG5u2HmXmbnmY7JNMQyj4xVSUoAjajqV1CB7oUXh",
  "key12": "M5JD4QVJ8bETnsph4eJtpGpyJHenSq1EXfNxF7eBb51jeTVW8fB2bhc3142nXshvA7z8T6iwZMGrKX8PPvMcVHj",
  "key13": "2sheGPB6E54tTwm3XXmwtZYmjYhwjF43Hjpa4bhdyJMFhMtZwVVU6j1GqeJqFbuDkDGV1oRJMCmEa3RzmAE4ZXPX",
  "key14": "4KDCPEhS6MshgmH2obk5oxPd5r8RdY3nVMPswwJJkSzubSdzpCmhHnhvYVsVKTQtfzrMq5kEHhMRMHWvYDUqM15p",
  "key15": "4FBSbxtaGNN3JcF66NZzbKVSZ7aoYvLLSmNNHohX9noM7YNK938sCrzVNeF66MjJKgqDirnXHvLS483eEthtrJcE",
  "key16": "5BCiJpUfSencecpn4gFMaaDngcSGL3nimYYStoUXCxV7qjdHY3qEQPh9ksMQ8hj3Zcg1jDpGQSXZP4DcdL24sR87",
  "key17": "2ivDfRZ7bQFfPseqoHfXN61Muw2YyfPfdKTLM1XsZ2Y9r2J66nPFQNUNENF9jf274SsRNfSCXXxtMupgCoEKuD8L",
  "key18": "61pqWdkaMcKikkVTFog8Lw3QuvFdK5EK5WBeLKWjBXwPXkWnY4guowgBQwBNJchm6oN4mJDWxAxabkxTLEvR5p3g",
  "key19": "3fQr4PsVpSnrEHiFEhkZyzt4vCjiXZiNNbijMHSeybXyj9Jsi2gegE6rHPLud625ZdhkGCTx3a1dWXfNmkBNu6EZ",
  "key20": "2dskPmkyyoDMpVkbgVHtxj11EfEH8VmVrqQ2v1H9grYobL9ejXteCPRjtffh1GHpGRuRYeNvAtxsynyKhqAz81YN",
  "key21": "5hp3PyME8Z7ZGf6bg6Yxkqfkyirmd9ax9XEKLqfVUnknpz42n4DXmuc4B6E9UzEbrnaaHqjgkDUL4yAoxd6DFUe7",
  "key22": "YvFzrwoBdDdzWSiCijbGnDKSrGNYqswhqEatBxs5mKy1m1Nn3ndAo7QifyXTYp6Sc6rmBkAyTbe377TsCbcmb6T",
  "key23": "5XHnSy9MarFFxkb8erUjFPEym8DiF2qpjrLgyYi78ZeTySFxW2gBF7kiK42PifiSkPFPgkxskF9WiYDDprthT6Kk",
  "key24": "3qb9koiNzpowQLcaKCp3RqJoYS6ZW8AttGR58ynCL5g7uijCkzxt49sKU4TSAXVF3t4wT41Fnxupf6idqeWsbmN4",
  "key25": "5yrXQ98LbkbdyW39LfZQWHkXuPYi1cpnUvSZ82pCCMmgkgBmBYYSA4dx5gY89VeZHXMpGL8JSEQ2AahMtibFkMHe",
  "key26": "3f6dhH3jouprqG7X1VAm6Y4ky2h5zw36TV7LPtLarxZZXiEB1AfHzePbPXcEbGapwN4bDizKaKRk1XUWS3MQtJk3",
  "key27": "4AzQTdomwu7SjugsV9jKSqbmbAZA89kujBMrbepLQZsWBHEeGoH6Pc8EdEB35pknCcQwyanNer2JuzTgRFpAKHN3",
  "key28": "2xuLocCeQdcxqwriFLbQTqCcVcCdyTBPnz2f8bdR5weuRiAgBP7TMPzVUgrVCvkhwjnBL8mxErMdwKdjAGfyKmVu"
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
