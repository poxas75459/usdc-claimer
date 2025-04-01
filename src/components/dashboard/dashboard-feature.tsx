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
    "3Rpd3vv1WsrN68LSbazbp8yf6YETXHT5AraYyo2YQ5xb4no2qMhiBZRXgNpCAkHmusbrneCHYUg6CiLr38To2iX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3is2cfotbaegHf8xRYuC5CXWCMDFcvcvBybJLpEepEjt9q3QNovZ1zWpP2MoMFf3g5YhVL2qEJre5pxzz39CCcs7",
  "key1": "4n7NeAw7WmjXYkWgPHV5Ap9ZyhBrV7farsUYuoc3zbNFFAarHh1C5cT6GhiUC9ZprTJ3Y2egVL9vW74qnt8NKKpp",
  "key2": "5V9TgrCjjUhaoDYKjKkeF5zdRRmyzjRsQJUNUUMWDrKEErsXMnxFBVtMZG8vLauQEbyLvAFZ8Zggfznecsa58FfG",
  "key3": "4jo4MFWP7iEvWjuXfYfWACL11mM4fLLncs6JVoAm3tM2VYophvjFxCDHvPm9VwiL9WymFQt2cQPXSNF4Zx8F3Riu",
  "key4": "3xwgcGVYwkV39sPE8EvXRuzZjS2psFCnpbDcshJcs1gmBZ92JTDx5QDzH97Jsg6ieEZZiuofQ7b2VCMvwxJkAj4f",
  "key5": "4AruH9n3sTQBRuFnhmuxgGA9d3JdRAGkJMxMfNWSGhntVvZHknR9ZKkTEhQVUDqjD87sEPnQhAojX2emtZcuk1s4",
  "key6": "5N2sdAEh63YDNejdg8HyhfC4Efg3zbX3yCASrTToGkcJGBgd3joMDu864B5s2veMh37NegonCqxECbYVNREvvAtM",
  "key7": "3mnasj3oZ2YndTbqAToVrruidYRPFN9Gw1r6BpfzjRiEBEptLcQe2wenRCsQAuNFFfXrbJBnSejSTtC5rUkd5pzo",
  "key8": "5PbVhzsbAKHHNnrzrHSDdA6vG4jWkPycW1giRqFrfxsZp1B67MmXmLsBA8x7SR8ykWcdDP4M4cM8fcsohVig5kto",
  "key9": "4uYCnnNW6pH7HKZqaUuo4J64RQ9rQnoyrgX43MchYqKiAiNfxZTdWG64yb5rEpJZCnqAtQSYSrfoCNV8fudNTPvZ",
  "key10": "5mrGqeqyHzkuRRe3VnJfGVGMvU1UhfKicGCHYrYKYSpLLUV2eUijosauYiHtvY8mAhmJoy9Ak5gQXrxDjt4S1RmS",
  "key11": "bLTESXLzGGFPkhX7iACoFatQ4jfM5Tn3AFdskfnehL2cxm6ftEZC5kkKqjPoKs8fdooRxzk3wGL9bDo1tG2qMTo",
  "key12": "fii7B3ZPb2Poi9kn4tysXDXp2pHoLEAdqUUQz5t9fG9UuMESfwfETxdgvvfjWXWGRTgm5KvF7D3XhbZBoYdADdd",
  "key13": "5Mz3ZPHWJpvc3Nkd2F3psXxBC4YiPeokmtUkApB6MgU5jALm3bjsrwW1vfcTR3aFjKjpXan7onofohaZuKaRYK43",
  "key14": "4YpSy4KL1uHdC27Fs6vAqfmHcPsddRYvZxP8pwGTrkMQGhQadf6efvBM337C52V2jHhAD82AQi6bocy4ghzybQg6",
  "key15": "544zWWGU3dN6a3GhtihJRWFDxGt26LgwhiS1V9ohNNxSponXacc9ZSEWaoiCdoWA8LneTEDdGMUtx24dVhqtxfKD",
  "key16": "2egRzeahjf1iWepkLEmB93SgdSRySUAChg2fnfj6eJ7DGX1DZCyZTa3fDTuHRF6JCsTgqnSzswXyvtCKmJtAnac1",
  "key17": "5kaUQTb9tmaRrXnJoyey3oy4WejNFAiBpsNGUzYrWHu78rNNeSWFKr1SJLddMsqWEhCQVcsiQXPiYNrrh2AoGNYJ",
  "key18": "2Ghy8ev7QCmGQJxipVz9kWHy2KVrpKAZL7BcirKkEUmnLBzoVnLfWNNhMjHbyKbhtq9Mmcwa98jYJqPkGwbmdLYB",
  "key19": "5Sq5rrZRpasJz3Rb8CLEiokLoZoGMDe59BYAWxH831CpToo8nBKEtCfZuajaVHTSAUbBM3vxMmftakmfU4KEbUYR",
  "key20": "2NB6Z7iBNCgPfp8ahNUbryUWNch44woi6LkhPD1LovUp2zyP5gLGAdJKZNPy26ZZdssigB6abhdmSBmfkYvtFUAC",
  "key21": "BmpvkNmyoLbK1vCZ8Y12cAXDRJapxPwUqjiMpxWEp83jmPgXSwp3FvEWv2ogisspsocCZ9k6dZwHn7wcYv4uLTP",
  "key22": "cHG1G93dvpntqLbeTxeMcP2xX5HG8XD5PZtuWmMRBidLE7pgGCVdbFw53Tvh2HSKqnWe6oHSCG2vLoPoYC6aqx7",
  "key23": "5gahbzpbTyfKpBCafST6s7vhHZhdrMQTo4kPbiChXVUREN84ahN8i6XjUi3Z4tuoJ1nW9dUdDigeEVWMwRGWVr7V",
  "key24": "5NEFHsE8DNNebNdAyo2cmgefLSK48t6RuHTMi83mwQthGWwxzRPZ56T3yrvZPiyaPw5Bar55DofkUxz49kWVQpMA",
  "key25": "2CJJMQz1gDn27vxbA9ykzrSjEpEB2tmrzS4ai6HtUTkCivhrtGTedtq4Cx9nRuv2EZuHJHqdjJcyyvHm7zYcrnaE",
  "key26": "5h8u6rF58wRtrJBQKvHrfsK1WecprRGatyQANt59TuoyZSC6HhiSwXXxw7Fukua4WgA34Vxsm3U3QG5ZsJ1rGohh",
  "key27": "3suZsQTpxSCSvbDfhmu7jQZQZ7u2shAUmgryax9G2E6ah9fE7rZ5HVXG27VcFv8XxdqFrfDmL4L4nTcHMMzbUV5U",
  "key28": "RHv5Ua8PXqF7nKzGowRs3yB7M2Kxdg3racvurrFj3Qrw33oP7KP9gqeWDyWFjUvTdEBE2h4GGUZnm4bk5oxmjgc",
  "key29": "5VyNTxwucQsttqcQz7RZKPzjW3vyPFpYdkB7PuNgKULDEzp64HUT3j54uVrFWzD3YcT9GcuHcM3YMZgZeKZoRtWv"
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
