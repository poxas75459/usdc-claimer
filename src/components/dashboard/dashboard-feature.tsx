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
    "4i8Su227U5xF17mdXSMKdcSsEiwa4AAVHq9Fm33FyRPZLjKV9Jkr7SLvA1dHKxdx6WAWabvCZKtoitmYwH2do86z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EFGqDj6icNSXtGVsF1EALwVZCcdNx54E6iH6hduaw969qCG6vwh8eBbECgYDSCL6sS8hcNk9fSLeBVfdpJ4bK6",
  "key1": "bKyo2on5qVdq7e1pxNqsFGocdDpw4b7gmc7v7WHohCxjjzp8ynPoWw7u2ggrifVRZ9aY8VbD2eYciPEZBT6sP4h",
  "key2": "4Eq2anTpRqvrj1xgDPTizKEtVK4PrkkKhN75f8yj5Hc9AsnhjSYe5giMeAbPc9VWGtwByBGyhDpGZhjQSXUommN9",
  "key3": "39NR6duNZZH76sHvQ2BkY9hTHY6ex32Ba2Bo3Fg8kafNrpj37LW6GXeNiH3iL98v6V6DELY9SgbFDkJ7aDSfFVLi",
  "key4": "3y7vd4BXP9DaAqaZPSVb5bvRwD8MHqDMDeHvRoQ1cMgepBpsgXeVZERtcWTsbD2JTwN6dVumthrGV5cK6nPGLLw",
  "key5": "aqFN23ic6E81BNek3dBDKHBBAE49ghr2ro2917VNKKfzQVQgjktiRXeuXAL59cmKhQgj6XGgrzaaMXRYRxufpL8",
  "key6": "2jkpQ9RP5bN8LKGhpxBLQMurPMsB2Z8j92nbmogWB42uochbRR8UM8XimCKedvThiaxgJcXnBe8rX88V5rEcXY5X",
  "key7": "3q2TbzWkELMRgtbRDy5ZHLKbeEzyYHkvGoE4n5o66aGxhbEzdhhB2m3ZdoAKyyJtpLSV86VhFhbww4wZLy3ADzSA",
  "key8": "xhG2xDMbQH9ok99eMYhmDhYcehxWFnry6pmfLdUsfh8Aye7CzMjx2k7yyD1ArvsSLKcryfb96wXW4DzEuLeStvF",
  "key9": "2FcPnWr2v8RE7dMLyg5PzTRaVpAp6AYLhFFvgaS6UqGXXFosihRys6g9pEvq5Z92wL5NTxA2pLDw4UqfWrVYyTwu",
  "key10": "2xQ1UtLbkqUwASjg8nbAqea6adtQLXELsVG2Gs3NdPC4pumSbXfuVmct7iX3uiGG5s83twXyDRn3W6ZcywaXEWT3",
  "key11": "5vDydCgWxfASknXbVEtJhLnLFJwUp9J2zXjTd3tqe49cvhcfZY6u8MzYK1VTanzUxu67gBxUgZB8Z4enjQFpx5dS",
  "key12": "5YhN1iiJ7ta2uRHopuk7hTScddpDTZ46n6Y1K9XfMZNnU6jQiGPB6HJd6kLo2ootvtPShxgDAX5MKyrymhDnQvML",
  "key13": "3YrS534HFA5FxBX3wAHEbiroXEdXHPTCKGubux3LzpXeT35qDax6v3WTjuFWDy3QchwdUDWocv5ahCt82E3YjUVm",
  "key14": "2zdQj5yeKouPAXGVT9WMELtMaGNiAJn2KX64MwfnJzj2rWCZKA5Cypx6UutKjp2dCVzGsyf1ZAuQpvx1ruiqQtNQ",
  "key15": "2bkJfqyNP6ejFEmQEbYeabmvbysJcvHnCfYnebLiTNobBqxfPyNpwpbWDU1biXCRnJpXhWgsQDXpyFcpn6tjSzbV",
  "key16": "5ay8imiwDJKu245wtKozMXrsQFNq96JiZFRBuKvKhKSAkKtbqA7v9XyPEU4KsNE9aMwvL4xjqYZE17PZ4gYgf2ir",
  "key17": "3AeoBTaEF8J2ozcza8xBKxskaJZjePx6w4NTqyy4M5PpAkf3rkUdfUh9f7xQwjifWnKUX5j9S9CZ9e52GYq8Hdeg",
  "key18": "uUYnH8EQrp1FMQisjimBe2rr6acaScti6xMz1A2Vht8YEimkroMUtCzaWq1vMaP6yTzQ7NQVSYVpCr1Vqr9ygCB",
  "key19": "3CDTtwwhYmVvYTtgdf5FQBfyTXw2fyKHUqZkffPuwA2HLMSpLAGbp6LxkVsebb8JLpMaNH1Wr1ZPPnehHwT44K9d",
  "key20": "4JkgdiMGNhCzDrDeRLvomrkMgvvrLPXXdBJ9TYYt84NNU27vak3AaXempz4FGBa6pBYr5S2jKMaNDTVdJM8TNLRW",
  "key21": "312VqhV1spfKeNJ7AeXv7iKMWVdGRQHs8rn9GYMKEd4mdNnS42P6kyrSQdyV9RFAw7t16sUgBhf7LgLsfscq2SSH",
  "key22": "JA5uXQyekJz1M8A5wwGbr2f4JnGUw9FUn6yvRRoN1GfCWAEBMJr2inok7VaeHpStQ5A7dtuRbnWWPVK5cpwToHy",
  "key23": "2STouuCoVMJEv3QZ9Xm2NMagUo1ErFMeZ5ApczREK9fkiQQSj6jnXzxadNzNoJR4vP6AEq6wNRdSTe8BfCDXyNh4",
  "key24": "5g5iwoMbmT85tPgUWJij7Zwd7J9xSGDAYkF9JLqX29TGSsZx6nGu1pzGdCmqq8yGVv4Can1fFo9Gm5iZdkrx4hW8",
  "key25": "27ZhczGTCX3sEKLFNGik22fcPKiMSQWDzwGgkUUPEv2CRXqqWkJ2xL5sy5cpkpmaSxxkN7fD7rq5ySLV2rNRQ4yd",
  "key26": "5jeAJsnF3WfvQdPd9bzWSkFXrJ4ZzeptpzGqmRnVSLAKeA8WMAq69fxmbagRRGM8u2NG2epApf9oH7Sj1netH9sy",
  "key27": "5w16YhQ3XNiCQrAJsoXZ19E4YqRQn88gNAnqLfF33Y31xMZYiyWnf9xuCQhAEx9NhqH1PxAddg854tvWAfcUNRok",
  "key28": "QfE96EeCd6Mg89oMVFAQnyVF6UVBK56w7qipfxy4ksEE6hKwjqt87ZP6YbBRZNHCZXjoNsGTxnkqW2EB1G6Wx6P",
  "key29": "2j42nwyDwkG8231C89Eem4P8tBqhaqYJjXuH1FWJFUkjwqZ7g6T9M2bzSVpxZxDJGw74czyrZLmtNJta7PtYAduf",
  "key30": "3wJ4Z6STcTVjaTtNdmyYK7e8xhnsABrSKi3mgYEuqb7PztgGsqDHHRfwC95Soq3fishnQfELK5f3XMXCULCYG4xb"
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
