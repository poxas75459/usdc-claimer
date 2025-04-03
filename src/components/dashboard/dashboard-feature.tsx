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
    "3bVk4ri1yo35iP6MJx8QvTuPEjSHrJ6ea7eAaBmm5BUDiBc36nBfYHRXNJLH7GECYaHxVMgQW1qqedLs44kScoG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPgPaMQMSGqFNQoZveT7dCAELaYz4j97Y4t2zbWQSYTch8KV9p7jVG85XuAnt83cfXoGh5Ddw4PKaNh6nNehsBY",
  "key1": "3XRXKjSE8vRTkYsBgMiY5yifP6R4H5JZ4hQtBG9iAPpbCn3JUtGrTGkf4NoBEWrz7oXGxSW1TahG2x84PAicH74U",
  "key2": "4VEBdS6tjMhnMgJq6bxAzPZWnKpzrPnQLJfHkMNU125xeZn9gd2UzJLP72BhvcTRNDLkLvE46roKWDsG992DWW6b",
  "key3": "41Ev71ZQAGy71VDBSxorBQxfCvpqbRviVYwVQ2BWqqrXaLWHDeUgxb7F7E8CTBvS14nyjMuiFGP7i2jJNWCV6Jfs",
  "key4": "4nBg6hkAHXBib4sXSxb96GeZvQcHbbarTMU6oGrX9RcgCNpm5StXqRkYWLSNfyAMXRB1gFE3MZDbA36mCU7a8CUp",
  "key5": "38ZmdrPy5TGKwAjM7bfhTqfmxfd5AW4kVWUkXnW3krsq9eNDPZeneXfEu98PYNMcoBtkZaR5GrEfmdATxKd85qna",
  "key6": "4cQy8YFwK8m4xGo4wypKNpjbEmuSVb5SB2WnLofa6fcjXuZWc8WF7Ki8q1DyEGg5U7yqeH2LLy3mEeKWKCbeQZaY",
  "key7": "5D7kAJ75fxY3HfZkSonfSmHpbS6wY2Rmfp1yThfkeoau9pLmnsb3RQfNUrBRmNYeuBWV5mBV685Lj6BtTSnQK2QX",
  "key8": "22puwZbMvfhVQYEzT76Ctu4GBkLvkX4X9wfEiuJ3Ppvny7Cazgb6UGQsDRt9yxk2xhxszsg8SrmmneY8bW15STjh",
  "key9": "5Vc3Z7XnkJVgVSLuFUw638P4mmWgryHYTwdvXpXkDFfcA7M37jk7vWozTACe25LdGutpJDtdma46pdkY658jzZb3",
  "key10": "3fXc2N72gJVFDzdZen55jqH65b3scPCKsUjGCzCDcN4Y5LasHm8SsY1C7Df6Fd4P7DS7rg9PxQH4TEi1ZTi1GwdM",
  "key11": "NaYm8cNcbUTA7g4Ur4ECTyGdahkbUPZv5jsqFTTkYHiLgUdkjdxkoF8pJPkXw2HZxVyMNBSVJdiXDA1km23twzA",
  "key12": "59hdaXV3psGAjrNoQ4iVv6h7kmppDx3oUky6CCnpMLZm2owWWzNkm4WQG46YtgCxDCDJs7eABBtiEJnuk7dVQCJn",
  "key13": "yZ3Von8R2daWYRPEQA6Y8Fmh2mYZ3H4DrZTcJhwEp1tFhoGB5iRcoznR5sWjaTiS2AZu2DrpcSdSWyCBXcNp13c",
  "key14": "3e7m6EgcfT7JRvENvhrC3h5KRSYWmjamhQQyTCgc52tcTva1kuzagMzE2oSLx1BsEAnT9rR5yV9CVm1Xr3eAJdZL",
  "key15": "NnoHYEvmVpZ12i3F1YoTdYPfw71XwGqioKpT9SSmS4zSLShAuY8L4V2yYM5Rn9uerbykB2PGZstswVqLaXb1tJ9",
  "key16": "3QAJJRUDyWXkRW6tQrAWBW9CJ1oBbWZyQvd7TqBrwkLjAWyfrmGva1VAcUxh1haAxg4LEyN4rfQetf4YcvWd1rqc",
  "key17": "27W5JK5czvhcAymNAviNfCavvUu429GnsnErigUQqsiYyt2zsdyrivr3SD289RXvK5r5ggyiZXR8CUpfu7Yg37DX",
  "key18": "3XyLgaD2nNDwDAnootnFef4iuomGRM8mspUDd14YVK8iD9NTvaFBejc5TKysghtzXiW79j8pz6WRurzAMv5mGz1T",
  "key19": "2EhmDdTUCjRtu7S8w8QjeDTZ7vU5RDx2v98vUZboCRMyU1GV86czg5xRYXtD1C8BGbhAzKYqjjjF6z6zRzvs2LE1",
  "key20": "3ATs2Bpw2KfTTSzkz6nnwgo19pMPjbq13UmoawFxddEPEMUmkoFs5xvyfKa6uoadb8XcQmiYG4py2eQ6GhpVzSJV",
  "key21": "3CvMNuJjgPPNyecUnnZYAqEdbtbhs2ZYAgqhDhxskqUMJf2Yco7aBDHrhbCU9cmeqQRnWc9AuXKrR1tgRX8ADSxR",
  "key22": "5i9VHiT3zMfU4zFqgjaV9gNLrNGQ3LQrMdTX95KGVWsSyMMAZxxMZfN5eymiqqTUy4cFXqLBFuwfe48NE8xEettb",
  "key23": "4ijHN5vLn7LFVZTVYuAegqnoqp4emN2X9xMrtmphdaoK3wwEfgYM2Bvp8oMvmhJ2KjnZe14BDXvV5L7vShdyNnZm",
  "key24": "5yDoFtYQ2aUA5NnV26bT1ZDZi7HWS85G53m9VTagERU11BaSGFkZadbfek8LGoqnXYTvwcAzSBKuFZREaghwAVhZ",
  "key25": "KAJk2ZXLoowFyhnDzn86WjVUErwovPPRRbm6JVcpngNPuC6DzoxBVr48htVMtJjXjcAdxe4DaPWBBbSVBQCLGuM",
  "key26": "2fwkDr9v8JFdaeHC9t9E3FgvmXg8hqW6sLz84yqDFj1HYoc5YP4tLXusZGQf8dUkztLjNb9Z6i3xQmVc5jFUSwej",
  "key27": "S1724oJu736SVHRdqVctEQFcQBrY8xzHZxHoVdJjH9tmeiK47CtWFCKJTMtSp2uhKRwTgYx8tZk8QU1DcL5oUuB",
  "key28": "2B627mmBsYCaEoMnnvNT78XJhxEykdprKPZHQSxyNRJEggVFEtoMTztzRATD8ApTebCJ9jUC5r9WFkLTJTnZFNpt",
  "key29": "3fqaSCaxTcLvqxRZoi5tHEXoT54W7DyJrwagaCfEUUZF3xhMgiFrDQH3tS45c5Be6HHAJHfWJpQoZgqwvqKNnuN",
  "key30": "SCR89W6mMECzVGRHznmb38i56mgEherFaSPNQMwJuTwdfuozRecW9PiJ1T7QTUEW4mgXvVKHw4EevRyWM3jJrAL",
  "key31": "3hoqFw7S5R6LeVxMPeWQ5x7LgQGsqpX3RpsMA6LFFfGJgDXxiwjYAMkeJQNiz64954N3PktzeprND7qxA9oeMVRd",
  "key32": "3b3SPJw8U31cByDdipUAy88s2cc4yTAyYPdmg9V6QF7RHdW5xz4SP9TUnMDt4KjUut4EegX6LMkBE1YV591Kn1bU",
  "key33": "3gUomZtGu1K8RvbDsXRTgUxY78MUkVrF1AH1whmkQWnNnaN9DrHpd817UgtcJ8zPG1eucHNAbLDNLVj9cvnj23vU",
  "key34": "2a398dmkrzn1uRGT9frF4RrL9pNnKJk8V6jyr9bqXmiM9a8m6G8jeDtXwmyjvquadUjwgKjWgUhyT1dat3n9Lcrz",
  "key35": "4uAcFB8Yah74bEtNH8bPaojSUrWmiRzVj1sMgFpKiAgDzURT4Q9iXNtMPGuXxg7BqxWzNXAe48bnTWS94bZJdbwq",
  "key36": "Nfzy6VkVWDCxb3ChW5n62CrwQPp6v6YWzsXdhcWZQ8MYLCFz4cdW6fA6abC8we9Hg8HBYdRi65c1vkAJhLepVAd",
  "key37": "2CF5DcTCrS8ydrh9y7WbDrKh4PrB2kPdxuFMMWqtJLkd97TCf6SY2ciDGbWY8aVkkznsFhCxFK3CbQS4ypYBdVsk"
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
