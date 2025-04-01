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
    "5ZmrjSZR7HsCzgbG4tsfXmevETervptrvWf9rMe2WRiWtWKyv5e4czGPqq8QyTAiiZYuEqXKs7osnKJHQTcEWchS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6zHV7cdS5fLeG7SGPSFeyfhfpBqsVdToygsSd8Z64NjY2Txuffshy7uTV3HR67d2BhiodyRkW6NEgQRHpoGZ3",
  "key1": "5eLNjKuV3yHHdwzgPRHM9msM3LiGfMmfqySRnsyDF84zGtXHd12QWswhCbcMb6Fmqo3uTj62Yvv6WfmBt5tXA4mw",
  "key2": "2mffpMuCkPTgefB4qWiJR2BqA6cnwY49cVSUdQ6BBFDcW4BDHV8KrTCoyvv631QKdyYXEoCCoL7iQjdFhTxMfcYt",
  "key3": "4j7dbJgfQpu8oZhQKSvKWccjLipMSmTyRwPG3XhxiTGTAAMxBzgP8r1qMJfdmpUL5W5iaTWGDor9E4BaanQU38SC",
  "key4": "4kLASkbGovRDAwRcJWuUrJS4hdRsMxpAuJgCvJ7RuHMxtqLKYs5UujWWRieWnYWkEFnFDXRPcpxy6UXuE1zQZFr8",
  "key5": "5Yy1TButA55hvsBm6x1i68uyRVnnXrxdsF9LQTHZRsbr2o9R4jVaZHMwquSqXYvXienLzNiJ5LyfPQ2MSWLH1X4Q",
  "key6": "78ekuMtb7ipQTcRwdc2HYyKeHi3S6Dbn3C7J12MrxiHpHX39rYz3pzxojfZKi9CZnoaxjTNoyt8QzQ6f4VUDk49",
  "key7": "3bi1fdrMhVYLkULeQoy83mmANAQhdiChEj5vc5Bzcf8QDzL9X8onXXP5WHsKzkhB2CGuXv3Sd5S188BqwWCa4WsW",
  "key8": "5zxpcyNGdvsSymnymhF8pmmexi4q8aFwWWtFEY2tpxJY1QVxipGgzrArSeUWR7e11XEtEiGcSFWBRQLoxMtTnNAb",
  "key9": "5kXsAYQ71J56BwF14vh4HzTungdQHbJmmPQAw7iNetvGaiw67w7n8Bcdk4XCNzoTSnMohCxebJRXMRRQdXTVBatB",
  "key10": "4xoa2G4SA6NeTz3e1xoUZv2eQZRaWu7M75rz5GQBiDZJT4VWP5BsWWy4m1RD6X2PK5DEpXUu7xnzjHJrm7nrwj3y",
  "key11": "3qsyFxqZNE6EAA7RFaSpfDY51gAEn5HxyAjk14RLmSVXoEPaCzSf8gWAqBJ3KwwXPEejeyXTKnBEATcTiZsVs7S5",
  "key12": "5kEmDn3NdZmJMDcDufm4rN6casFB1ySzXoszXjL3NKM4LL6rQ9tiBc6FtM7U8Pj15mcrKDQujCpeZUpUoa97xqEB",
  "key13": "42L7pPH5gJGu37meapG7kxZsv8g351473jxJYxuJwgHHfL8gzsP2kiijk6MbuMnUsGXFhYKfGHcxNhvT86AN5y1m",
  "key14": "sbNFV9RmdTHT3bn5TAFFLAaaB9keiW3mSJ82vDHUsa3caasfNK7duKxdaF96753q9EAEETzPj4kfHFxr2jB3oxx",
  "key15": "5Yi16bfaBtgkSPMo7jhDda78y4jpojtdJVvcdpSdudrGxbZPp23uZjpGWFixXxZha8bBhkpe29wgmHC1tuZBdJGV",
  "key16": "SwfqMR2JR6bszL3BGTDqJEbDa8QXidiRwYTdkXcNW2dVe8Tbm1UCvZAr8wSXUCEtzQoyBD3h2KGCDbDpC4SVonL",
  "key17": "3a1WSMQKXRoTXVoQUzUVjmk4xJADS3uN4NhewsL2XNQKFJxc6tz9N1Bihzc1q2VTwsGuP7sXdd2S9yVuBYYsTACH",
  "key18": "5jFh6PdfMph6oycVgE1bCanmdM98WyGSsrPWThC3WTsgyCNFvBgPPyr7b94ZC5aVRirCKQPdQhaFQciGxgVNubZj",
  "key19": "QMB9B2aeu23CrPZ7v4WSH7U7wLLnPRnUYmYnQQaieqBDey6brPrhPk6ciVceyvqHvFGyvYsesQD4WgnxSQwpN7V",
  "key20": "23Cu8ZKcv7MH8ezKzzg9VYfmTBmRBjt5UTfaZJakFUMrvvYhAkm6FEYLPGuWZbXiGA2k1BDSikFQbGYiYioiwwJs",
  "key21": "XCad9PvwK2aGAxJr3Utx3mKtHA7eMxjYQvxiztPT8ni2s4j6bAjU4pWniTZNAevDGgADv9TSq5YqiLhkoUGL3h6",
  "key22": "35XZ7wbs6vvvSEipcoju6kpZCrZaSZzdUVm7KiN4CXzvGHGZoBxYv8MCmFC5wo3CF1dAwfYTdpSk1oX9uiEMXGSV",
  "key23": "3J7A9UJhmGjtYB6c395VDRoncm8uync3gbdXy2iJ38UgPMNNA4tttq7n1cYkN2WpZgPUFXyGJojZpzKRaXtmRfoW",
  "key24": "cpZ4qBdjZsFqd4SkkS1iJeXDFk6yTq3GZMb36m7R4TvWbaxEU2AxGiU5q3iGf94dDQyt7styeGA6zeL8UxLStCv",
  "key25": "3zfGqoDGkQg9skLRgrfwGR7xsLVx7LSgAU6iGBPD8szvnnVPC4GcYg4eFbsVkmJWiCgvg7vBavfxsybYmz7AURup",
  "key26": "2sPWFe83SmXXbtBjkzGyrUiqcNX68wNcHtogL9GNDY4a3pudkZEDtx3xJQT1H8rpxmuCWsmNgN51MhaGB2kRpnNy",
  "key27": "d9dvQ7yaNZQ897iLvvNiYNKQsvknUjsL3VaxE3ZdFEKZ5ksA55xr8eeHbBPfCvTDzLVANCuVrBxo5RVCDcy4ELQ",
  "key28": "3yx9jA4ttdZFXzLKzZMJbJDehR2Ln1bYcXdV8XHKM1HB4kv44KFVisgnGPUvz9DH6KLVo9vkRny1CRiDuWMRncuy"
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
