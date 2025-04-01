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
    "5vneLTgFPvtm59uCoiReGSqFDz31C52hJeuJGDBPayX4QpcA8bVCXBNzCcHFnZNS2vVViTmk2bys9yB5GF136WCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5THEhHBnQ5cLzYbbJVXs9fjq5QV2G58wKKkKfjs9uvoisV9uevyN9PTSuGde1KhUAhVjeDN6KTud92LcXKAufjuy",
  "key1": "4KLAfTLjh2DK53X2umToF2LmNywz9sDpewAcMNZA5r1DUqbbX25qkc15wupfQngqKKWLarRtWsQoyH875CusCjRM",
  "key2": "61Jjr9j3vNxQrHkLCNEzebBv8tASbJRNaBThKGNHntzdpWg2m9GZPudEraiFuxW72BzaNGYtx456f9Hcog5w7EMg",
  "key3": "74KsTSeAavBQk64ZW7Dr3r87fnxgZX7NdgnYzGW7PBUXBJJvkySoFtRJFkmmB5RLYDt4yTaTui1ZnBUWQmqzXBp",
  "key4": "4XLxHSVNbo8NZDhqXJwQkru4r61XH1MC6wEV2WXPH3JUa45oseaNdun3oenbgtGTdoDPGYkoTtbsiDyC5Re7Zz7H",
  "key5": "PxeNtuRCFqnhvTEQdqyNinf8oLnCoDUWpqPucFzuf9mjGH5sfCnTCnR7xQd5XCMYLWpTwvZtTiREN6BhJYi1sTf",
  "key6": "zBYhyvv4wZ2hosbhmQjyB2qV7kfWHZZPaBBdfo6YYihuLyHrUK5FyNUY2H2erZiU5xH27uyUVZsCCum3ngzTxEf",
  "key7": "2bBh1uaZPcn92fXKnTKTLXqnEVExDD3kYi9yvPrEhAh655ii6JyLp1Ci7XTEptjMzduJ37NGfqAFYi4BbWG9dvy",
  "key8": "2dwG2JQKfy14HJL1fKLXppNf366ioue1s6God2JBabdqdBwiRRqtxQNBNT6LReMQ7921a9AzjPxadkYCyCfexNc7",
  "key9": "n2EZCa6t9KmMiKUn17DiWYqHb1DJKMfsZni7dtkF8JfoNqaDvi4y39zHGnrQVACVH6tPxMCZYbmraBMQQ91a6oA",
  "key10": "JMsD3YyS4gGSR7wqJBTNZUu45k5eDsTr7LXNoMWdomLhTsepDxjbhddtGS3QSDo6VbGfgm5x7gn33r9Petqu8Zy",
  "key11": "7Z2GYNK8hKUVgA6eDptxCfiMQWKznFLaxnhSZ5atWfRZWSWXQwedBxHDqiGAAkXhaB1xoKsTCmbiSGpSZoWGLjE",
  "key12": "2fxH3RQt3euK9mqw3icmN7tAYQ7184eZ9T5DvUnXcM71Y1K9BE7T7veZse3ErBPw3Zmo1iBdM7seKURWb3zThZxF",
  "key13": "4LweZS1riu5c7VJGdaEewR2Hvsv6LQa4sHKa9snZ4akVKcrA7aPUCtQ22GhxXp7kemS3i5D5NXgnPe7bXmTBfTvQ",
  "key14": "4xsrVxCkTSUhcQJdVuF5nKXY6tNTVitt3vRVV9gRuG8rMDXfoVXdo7zfBiNjUNmqr8DMkanJadRxLM2HYNo5Ebbt",
  "key15": "2FY4UBkyUbA6GsrMy9kGGcFR9neBqH7V7aHBBL8WLtEFF4rUBNWNBbckTkmoy2HWy5DNAgZSMdNDpMuN71FtvhyY",
  "key16": "2JSiSUrUXW1CTeR62Ww6X1THmkwRjK3huBb8abxymiMMCkMD1zSt28b7dNAhwPr5xgYj796e7dbtcLMqxuh8nXck",
  "key17": "32gVgF4sd9HdVnGHTir4zT7XPw2SjD8YBEDRqY1fRYJMFWoW4Zitfd5i1FBSqdLd6QE2cEYik1PmZxY4TatUbQfT",
  "key18": "BXvmVvsRj7VQECW8xLkAE1D9XLWT8VvMhgdT3YNxovnmiHRvtbhQFYcbt96aqLKjjhqFCMCfj8cmQ7LAMikQ1RP",
  "key19": "f3J2TWqQTyQVnuRFo4CT23n77XWVhv1t3XDWVPHCNpQJwpoUb8cUqzSehgV6i5ZtZQ6FHgdbohfGt4MfqdB5XL1",
  "key20": "5gppHJmvvRfPcxgbXhVhhAyYeAzbs1n1hwVYxrFhnmqGMRJXyud7jqtvNtf14VbswiX1DD9QbaVN84JkkSW4VPyb",
  "key21": "5Aa2mhQEhct3qj48HpSgfDiLJwtGwu9q5wzhx1vCkvLXRBkqnVTMioTGnGs6YKz54B9NnVNunXFgKXHdMsFuym77",
  "key22": "4ehb45Q7Whhm5xGniEmXokzX9adFzzESpmjhBcvS2WXAeH6HCQk21pe8YSD3yqP5mCnEPSv4MCUnspkyeRs2R7JQ",
  "key23": "4pCGgsrPHEQd41VXxd8bqKRCWMoPaksF1vwuYUn9huCmqK17fo9wFo2mZAM3hC6SYQKRpzWNPmAJekMxTkz7jEia",
  "key24": "2h85CrBhY21zSaNGLEhnP1JMJX7uN4QgyVMbydc11yBvxjrnxB7eYXyrVtxpYF4VppXXJFhcAbGmPG8sDJ859rCR",
  "key25": "3Wi2HTg6jh99Ph2o5MRACEQwaXPXG8BkSUomQ5PU5HY3fdEgAXKJWpArXk7kzmBjNdqmKHd9t4zZG36YWwuKw5Kt",
  "key26": "52G92vXV9hLdcWDCWXaByKP9UZSy9ECJXVsBGeXSMdPx1qrRWTFwZKP8oGgAU1eLn1p6JRhokcH5sHw46A4yV8Vy",
  "key27": "5vejeghhr2JgxNfgKmQQq4hJ2PYHyWSnvFPqgPngsTD7KhfLQ9CXvdmQQYCMEaiZLaQpfX5yoauzWajjtfLfURHE",
  "key28": "246VE5xWqywuePoYJ5b2CJ7ZvbQT8xRNeucGQLx8Ej5dh9PgKhjeZJnJsm84aXC2skryxu4HmdwxzrW1zQPv74gm",
  "key29": "37Yshk17WKS7XKvE9eWYYHj9ycFGdrAKgxSxoEA7Kzd8YGW8HzDoQ6bK7E3PsxjeUi97N9gP2bUhoV3QeiZNQEiG",
  "key30": "57YNFsB3QHtqzn9zn9crx4EwZL9AwXVXRxME55adEiGAJcVWWU2FPJX8njJ1n8PjQLG3A8ofVhMPjGeDt7CyN786"
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
