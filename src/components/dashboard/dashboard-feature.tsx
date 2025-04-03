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
    "4y7tGoF5sNLYvGGeq3frSAZ88N6dmxvcys1xehaexRyjDBUGzQ7HrXzk8GrDmNDRqJg88PnhXJHEqonpxHrhebhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8YngTwir2ZxyqD6A93iGbPyboFxtDavrTKe32rh2APpYDGWkKGZg6jL1vQQuHBKaXSoEXJJwV8FCny3zjWd9qh",
  "key1": "4C9AfhECy5gLTeiR4AbcrKLpayui3ZDavgXY7jgGW1y9mPgvc7meXrrxks3pBCvtmMJA18B4ALQY7UnXFdcdUSbA",
  "key2": "6cjdhFkDMVBT5yY31JMeDWAuBuCYMTXMaX1RbnX2j87MtEDMk1Eg3kHHs52jjo6mdDzu28HBzMWdXuH7fZCiYPp",
  "key3": "2xW7tisjQVH94JPeeafLkUXvvrSWNmNRhLNrdZJoaRD2ZfKs3EDnXZXUb3xgm4BbPhEez5m25v5HjdUat7E4bFqD",
  "key4": "QBio4pWCyBShHjaptrBKL8RZuXHLixJZk3yE2Q4zx1kpDDVCdCwKThqqLEEpKyGqfr3MSCvfNDUNYfmZmaKq6TT",
  "key5": "jYzukg4ePxyha2NFEr6incTVR3WVuN3KEvFP6rpQKQuXku2cUFdy5S1SeSBSBT849r6n6FbD9bXwJvAKtVMbKg4",
  "key6": "5D3Y6RFuBVK1X3BVWwW6uMJFPDbTDXkuFJgAUB8pfRLGbaUwjgzxETPdMsmmwyqgtQ6SU7UGerfiEx9ruoMm5T8G",
  "key7": "3QAkDeDHTqZatCRGq9Nrzt97bBWkZE1Rzu87LmDqUE9k7XNXWk3paRFJvoVonPtwdz2FEx8ihGzNouTdsLnhWfZC",
  "key8": "4ksqJe6sbGLrC9GwC1TTpaiFHAAmbtNvesPx5XZDteNEfie1MZPYnR6bHec9oFfLBqpfnUjPC6JEGeiJzTJ4xBTf",
  "key9": "3nR7MV6AGDJqzn7dE9DbL4t7REz8R8aRD6QFJ2trBtap8JdS8CYYYyzhEPRdkC9fCgG21N5tMVx6qK5GhxzDVpkP",
  "key10": "45wywJqvaruewEFWaa6hPiNK5Y8j7Fj61Nv1cn9ecsboc5cbBA2PwJAbCxyKoHs9ivHntMteiVAMp2LrK5kaYk6p",
  "key11": "3rmAYG3uZX7CZtGJzgw1BScFK3St64a2MdnG97Sa3ZtL7q19d4fjCPTaGkQnKD7pH1FHBR2R6Trosb1MmWK1JNUJ",
  "key12": "1CmsnPSuJDNyWeheUAJ9EVV4iFNAtTW4ZBpPKpWZaX7L8ZcMUjhudy1NjMmttwyJ9QtyAhHuAmaD5mHPP2VfY5k",
  "key13": "5uubvNfkwHJ8EgQYQU7Btayh8a9hRb8tfttVgXpNG6osnaJq9auEgVyGAP56ebCER7zQU2ob8dWGFT8oyeGsiKue",
  "key14": "2jyyJiNX4JMux6HUMMXw8Z6jCePERu6DkCTA1zcckRwgQZxNuPikgjdp6SmLYy8g1eF3QFssqfwMCQeJTC92daJK",
  "key15": "2SaSf1JTP31bL3woR7NjsFs2USLaN2Xcm8cHFTR62dpscMQK2oyc7YNbqdVyCxDpPKnndv1Pnfsp3rTLwcaeuvCt",
  "key16": "25FMmtXZcd2wxto43twa1hFURdr8oRacFLLnHEMSpR57ALh1LyfwVWghcN9gYddrX64UEAPTJSf2YT6yQkNf4HFv",
  "key17": "2jjb37m2WfDJgQ9fpB8BU7ezQtvtir64mSKFAPbiPoDUm5vyQH6NsoAVniFoJRLTgGnCERrQkWpNFoa5yTpLZhes",
  "key18": "38sNiLvBuV2jc8cNJmnYbQLLJDwVuCaRLHkzevHvk5airHBc1ZNqmX2YFAmAWtizLijjiEtHC2gzWr1WH3zinfqN",
  "key19": "5ChbW7Fo6GiuaZZpbHaGudrDP4iDb5zjQiJ3ZP8P5go7cnRsEA3hpjU3DYmmgnHJtGqKTgK3jfDpgAoFNYF9UaWF",
  "key20": "4GAzRdDdUkgaR6HfyQbiNYKwgkMLtvYmezWoc4qVuENmkMhKSy3rX824eNai2z9XjsGCsijcLYeGRUDVnu7a9Jqf",
  "key21": "62m5xV5LJLRHWzxJkinw1tsHR1mpLYAm3LWyFViMWW3Zw3VXAjvpji5YfQywKDdQEJDSJvsisfhshEsgJG1G8NRL",
  "key22": "n6JBzMMq1kqR1R25wkxpHVbYZm6aViDTLuXtKCeFR5nN2L7yDu2EKD8p8HYRYAwy2KfVTHLS6up767Axjg1PfoG",
  "key23": "UdeWwmFG9uQQZ5XYRDWjQ5KqiUCCMVDEEY7TtzgQfLLgWvYzzoAYETwqdGVzqmuexZKDtv9u7irYofWXHYamAXs",
  "key24": "3TiSb7iPDMkyeADa7L5L7rJit2fxNbRFfyEKUbsM9RKHSig1hdyMM8a88Bx6sUktbDhfzQg6grirLFqKeogDCYjf",
  "key25": "2fi6VFNNC6vvgnEdcAeGryUMiymoesiSSCKzVLdNhw9iLMn2sKVyUMDGaFQSq8Yxxig1absvZhfGENhoye84Lbb9",
  "key26": "4ysHY89rTtdNUjYR4sAqDJC6ZBXtH7kSADcJ591chfajq5RHGfztPuz43dkRyRzdTxnqA9CJbVLwhyyzzJ9Zhu8Q",
  "key27": "9zde2i8qHE7ZdV3NmPT4qYJbZ2C3bVQFKWmMkoZBwj8bDY78QsQn6NV9F7JDKiDEr828FX7EWUEv3USaas4o5g6",
  "key28": "CCFLZgHL1AFjF9xEtwJ5YLee7vns1eXhqktJ5wcvKSBn9K75ibVBhDejXWS3VT7vN2UZwdhxcvoEoGQs6oggkq3",
  "key29": "65AYbPYfJujrYitKceNrTCVghW6QbWhnyXaSHuA9Xh7MUG41k12U75MfVEDTdLfHFtaenAUFkU2MmySyDgQVGLzm",
  "key30": "4Vpw4aiivFbzyjwypSkXDTybqVFPDCq6wGEh5v7mVkqGA1nPgRWR1W17dJxBPh1d9QTdHzRNC5791hyMcudJmnL6",
  "key31": "DnBZGjeBTCrdYv2hnKEvKHC1N1T2kjBJrVK6ZQZbVrW8VJoYs9pSepXXyQ6QAvbnhgkbkYZJAAYucJFTjK22ydX"
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
