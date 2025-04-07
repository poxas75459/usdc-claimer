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
    "LhrtY6JLvdKXa32znQhbQUgZECo1kqTdJSLGUno2zAPe9JH64waTZq6wwWceCtaEwmD971Vt3svNQHy68cRpoYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxwve67BcUvWYhCbSnzfntQ9KDEumy7mKEE1wBcnwGJxZH8xXeSfjj9SqqUBonwDYRpUHukHxi8C8sSxPRhZBho",
  "key1": "2CuC9WGokxcuCPzjUpSUnJVXeAPn48tyUEqTRxJbHmXTDxXQnPDGRRMJMUv3Hsw2ayRNs1RDWZgj1oX7x2Ri1SdG",
  "key2": "25jAFxgTTTrwW7duSyqbYXDGwd7dpDdQG9n9xYoLUidBxAu8BSkvHFBHWzHZ4LofvKxVUKTREj2YGjFckmpCUwV5",
  "key3": "1NhDoDbLp4L2DqhghEquE3tAZfwUBWqNxT7qUauVxbjK5oj4qtx2pD9AK8MLr3vJoKswkW3pSPfJabaaRBTkdEm",
  "key4": "54gPHE5EQdVvDwWiWKQeaXZXhkB3WPyLfskbCEMpFtocKYPydyG7yRbT87HibQeNfoW9hy1PfGQvFTcajmhPR3cc",
  "key5": "it7bYvQN9Tkdw6NdvmiM9oRvw96XNB49bwdKwrakaktr1HUUK6HnVpCEvgnJr99uXbsTsJwQGLFebGe7Ypo3QJR",
  "key6": "2G7qGWRqAZzFZzy8GyHTkXkeaV8dPBD9HVFx3PjYVGQNEv7orsp7aE6Yq2bYpFcD7iCumxg2GBQjgzx9H4wVBDSg",
  "key7": "3sTYEN1ULPJzzuk8cYfQTeREpfUf9sTTXnTMBqJ3vax4JA2NUKrfE6p7nmze4qmNRgjd9dbrWbtaKF5TQkh1abP",
  "key8": "4qfkoFfzbRpWy4spkYs3Y5ZGFzvtJEA41D9gACZS9foasmYuaGDCWzYwcBzSiELcyZP1iKGhGdG3jqPeQhe6qSDH",
  "key9": "EDoNrpKYssqkNH6LAdmmfq5q9RVgYTH7H1qwDABgW52AQmRQ8PBxrGQm8M1b7fx8VJMdYHks3BY6YQSo3rTLRQv",
  "key10": "3CFWtqkHAyQ8zX6XjNhdbVZuwvcjeqx77mmaXTbgwbgWPYPGbhgMJXE75MMSwjXgUUoujnzxoB5HENdYgdanv2L3",
  "key11": "xzahySzKLP9JaDUuSEqZVhDwQt2dy5AHJkTAdGcamWJAVNmyw8oTqKVv8APnb5mcYQunbiqsX6wQAwV5HypYHZr",
  "key12": "pEuHf81NUQsYiJQF6UjjV7bSm564Vu2cXmUad1pA95tEd4ojSX3mr2dWY6dzPhepx4Do85G6fCXKLhwBSNAj1fE",
  "key13": "2fQtENoRYHKmLVtQR8VoMiMiR8A5dH685CM9QmUoSCmz45yAAneFCYuxJyr62NyJPjajzQbVMiW5EfTX3HQXCm2m",
  "key14": "4awtTaXCkVVujqXKLHLWP9eCphvv7D9qQLqofee68DqoyNaehVysoYJq5j5jUiPW2isbsjRi3N2tYwEa69YPRZEV",
  "key15": "36jPKHiiUoACuipSQFQuvCcLXFXDwfMb51X51dgG58biC9zGUSDXHhzTxuywxynMDehSkfwbkCVuPX2NwAMrmJgC",
  "key16": "2D5HDaU2YZfTqJrNaaQsWvzDDsYrLmc44cbUiRcKNqH7KnRR74CHKPnJrzPkV1fHzP2a44natttentfuYs5LPRFZ",
  "key17": "2HfJsx8HjJdjdD6B6b9QhDZgpUF1wwmduPiJvvVGWWgDpwBJTdV963irvDhefFxyaRrkjxPCR5PzyKFrMi2iwM75",
  "key18": "9rSWVD6JHeHREdQZwyXgWURMiQxycFN4v3Tze1ZtnnVe1bGLFLhBJ1LSoDS52gzzJ3xAA9KtZp4yJSWZZsev8XU",
  "key19": "3cU8ozq82eDTegLK3Pf656q9rFjXuTNiR7JJs5tG2uthLWG2gin4Bn4nPGtkQequzeAuLUiU2Je32Dzb4pGobWGG",
  "key20": "5jBLPEdwAe8VDF2dXmXSThf96XBV4NzyDzvXEuWK9kFVkzsheANdMqTyrPMAmBsLtou7pMDc4QeQxCZSszieDxfA",
  "key21": "5Tjz9FLC6W3MQEa7v2BHYcN2cipBQG461HCq5MdW2s26uhq1x4tMHXiw4exrfc4pd5b86PKEDsvmY8MSYiHWsugd",
  "key22": "2VAzqAsQDV6VMH97U4aJY3jUFdT1t94NBEBuCpyt4CdKE2uxTRJ1r9daTn96ppZYHySX1qhMhqjmredL4YgFKwZs",
  "key23": "5yxnd2Lv79MMnMkoCCZ1gsLCfvqjKtzh8zQbPNvyeLuhD6MtwaX5h525zZMtiqHpXG8qjWEixUtYjBkZVLuvtwpP",
  "key24": "2tvsKqZPJ6KiQKFTa7H67yhwvw5VGs8M6rzyhmdqbk1G1EAyZSstTgeni8SfF4V3vTtPpv9rGpJRvYs3z49LXrcb"
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
