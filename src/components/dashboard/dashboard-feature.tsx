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
    "4drHrRyvfsWoTPgM31GX9RPU4kfLZ2Qgd8SLcsfhzYKUE7eQixosXGvfn5mVBX72Gw262Qc2qRLanawe4JboWAQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zv64tqTkzoWTqskE2bmnQ5SV37GLart48Hw5dh4Tk4cuJy6Qd7PTyhVTbFocWC9Btq8tAFVuJ6Fb65mWjDMrZXj",
  "key1": "4jmbrUDq8hLeVYNHVo9bHj9jxC3meLEybmWgey921mxgHsqJoQKpdstKjbo5G2xjhDAaRN9CUc6JgDkE5QZUNDC7",
  "key2": "vZxyp9wTLnNFm5vVaeYY4PhbD3YUa9u8CHjTD26YTmj3tvzgpGpWs4iEpFHNnh1FYbtPCLDBwMnHgAyu9qS8cTd",
  "key3": "2F7YupRhg1Xf87y7VhbtpdsoJeWvXgTVjyWqzr2CtwCdvWZAoyiZz66kfewkY5DyhdUQA1b1dq8xe2nxDUryLxMQ",
  "key4": "5hF2yo7BRFjqhqbUfFMbE7eJzk5b3x9T1F7sm6DvrWXCKcni9JV81Uc69KkTUPsCUUCHktX4woYf7c4F2RURJ4Wk",
  "key5": "HSARaxd7PtzPg77J9dzgUsjrLPAZPrtLP71KJSKTo9txevHirqJSzs5AAXWueAbc74ssu5vPN4V6KjnTJcCJQSD",
  "key6": "21z3AcbXYuoMAfUQvXepV81CQBtMkxGXbcPCrrnt5t3RyorqbbeGbskG4JVY4V7rAtR2f198RsV4d4WzUy86hk4T",
  "key7": "25KpVJur7RGbDTu35PJA2TTaBc7V4tRXf6uGbekPSN3FpTL14GkrVaUkuGgpR3ZK3DBPVJBFv1Xo9HkLwuWvwEht",
  "key8": "xEn1ePXAMD8ffz83cepLikhXyfr4eMdwxS2uvbA9RDeWqHUXohSB81xRy5x3GjKeHLwigbpB533Lf5RTWHXDaoJ",
  "key9": "5TTBJXEygmyPGQFuYCXptcPLsFtqH7TXaEH9HqPaagmqShzLdh6Mt8etf1Er94iqBcqoSxurSDBKz2kxt2fm4X8H",
  "key10": "3YnN7C8cAxNBsxgEn3vu5vTDHZjb8dTJ45sv6dEo7vAwvbKX8fVMRm1cBxK1K3sTGes2fd14KVdVhk3wdTPLCZj5",
  "key11": "3698Ke4VuEJVeoYrgnc4og17J7UuGiBTXSjuZSPwAx4VPxiLseYRdhkhLrdFButGdGXXXHeWkfiBauzBtR8dSXrV",
  "key12": "2j7PJ4f9CtaDnhhueu1HtMmn6qEX4Ej3RRyHJJ4HTWdSmvjet26cKzDHQVmYzxfQM1qJddbSouQ54abf4rmuAN2Z",
  "key13": "4jGs3yDHb936RTFemZijSzzsxoADqSdMJMfrsJH25UCWcmzaYMEbXWZngYpiPsRy8T7AJhk5BRJofw3MfnoVc9T8",
  "key14": "4vCcQdEB2LQbAZc2s8UnZNN9eB62GeikMQNCRBUMuhSEEvThcMKFXQQHunfFMQ8LX99nH8gcLV3kBKk652jX8Hrn",
  "key15": "44Cgq8exU8yh3itaPn9PpDn948vQuqFWvcenftQE8SM2hTTmLkUkys4QSvrtQs4w5xmrmjHPLUkfxbApRBBybvB9",
  "key16": "3qzZMgbmQqAprXMv1JijGfhCQkdkBbVcCvb7obp8aMHvegfUuuzwJTe3nqSUCJz3RNkdGCyS2hQjBG4gtR4TPCjw",
  "key17": "3x2pCxhAQSWYMUT8joMC6c2T5vNiHdpT8zJUxwPmqRT3KasbCE1JXFksq9NTbgLvdQdiQhj2pzsa65AWqpqFaaKS",
  "key18": "3SgU36NphRvp32cZDUWA2FHRknjbhFCsvhGWJUkTADazceANtqMLVSwjcMrW6DuUXr3zJStypobaHDtf77xzw5HR",
  "key19": "2fdnaR1Ue4H9eRZLZSrEqixRXx6Uvoa5UoFzGtAvNMRxfH2aGomFn7D9t55D6kfEQmTZCnqeoAadV8ViFb1248za",
  "key20": "4atrD2cbeqL44exji4RAqa4R12anKQX16wqk2BGQrd5j1Qi8iCVrheopqA585JcVKWmh5RrioFmfQ68DmkJUUAty",
  "key21": "49eaEvpRTcd7f3tfKoXHMU9GaSUBMbR8UwsgifUPnVwAkY4m1ceemrkD9FyuKt2Uk4vh8DAXSQLBemKbm2nNbJ1r",
  "key22": "5tB1HkAtgQmLRPSXwnZcP3c7ZRdMecGZinToqgHjEnNNBDdnRJjLicxEbA97FNsYifTvFeDBC2Dj7ZCNDcpJPUWE",
  "key23": "64Wkbbzk3gCXV7e7zHojafbrSfywYPp7HYhgRHLxGuCBJtHiJN5dUQfddoVgJ6uoZvHAouuR6fAwG316qHm6YaXu",
  "key24": "391YrYvnXeRLcL7mtA9knZceb1zHdLCsyPdvRvYxMoFPHn2bDCkJFKEHQ6wLQ2226HApWFC45NcdGNv72UNVWLCT",
  "key25": "tQCGfUqefNEgpbaXYRrUYGhNqnWP14bjBE4c3NYjYcZjgbN7AYykipcsdAXfBKZHDRin8w68kxbjDNXJH9hHGDT",
  "key26": "3x5QounwBSfWWyXUR238vaSEMQFY3E35Vce88H1W2tVUUnGSsr2e1pqw9Hr7a61TGYgimMP3MsGUWrNYZ6oanXYB",
  "key27": "5Ubn597nHezDuosc1xznitGLq1Nn1wbAikkNkyPzdKVVDCM6bUJdAoDGykWXPC6YFvVNaFArVm4g8Hu7qJKPHPBS",
  "key28": "36o3vifKx8CtHpquy5U9buT4ab3DNYy66HBGy3bTaxu17c3NCMrEBDpYMdogoG2G19pdXXpgFNz8joKXUpHRbRZW",
  "key29": "5qBiKtUR3EEHHE9LFqafeEkZqpJws2rhRptK3QNVz27MB5P21Phq6YMdxw6thEh4r1aRLzEuV58wVY7tCPMUsiqW",
  "key30": "P2Cc2pesEfXjfon58A3ARagpBN35nj3uFefy1BXJPt3TX3bfyVLLmnxMSUmhj4Yv4Q9fZAcpBe2XmnGeoEo1rye",
  "key31": "z4Z6nFkhhB8mQTdaYTWJYi7RE3FwgKB6dNBYJbBph8m8xwYBoDTLwJktHaTHukBxWte5eUSkTwWNUnpZb7DzKft",
  "key32": "4ERgdKLd8JkZCEU48yVZLbRV4rbyqT4wpFjLADPrjVLDUCLTYRJVh4qdyZNzfyiX9TXCmkHwTajaUDN6H7ciEoxk",
  "key33": "5VAVGrrUxDMAzTP5AAyAopB9GbxtPig7tsRLV7QbQiqDqXFCB8SgSgFBwgFAh6THQLeLmBqnH3Pm4LqkFJSogFK6",
  "key34": "5xDBS5m7DnwLop1nGtLTnDtQBQ3zLVds7Br8L8m2Y68bZtwvU4UELnqsJ6mXTS2ax39h6hpa736AeKy6KjJU9zCK"
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
