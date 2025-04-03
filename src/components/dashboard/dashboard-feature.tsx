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
    "2fXbYrTKAaNn18smyMzpBiF9XNQS64sAgez8wqrekMQVnTErrUnY3HyHKbu3hBk6taz93xn4jkQaTVwW1KYAsco8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NDyEYcYMXgWCADkiinA4cL2QPdGgYqwNjPpHnzp87nsp26JyDEegdSq8S9KsKTZZbq88tWbUPu7kE2b9SAruLb",
  "key1": "4zDVPKZ584TXHyUorZqajd5XCRhcLRBvrGDwkeDgKNRJ6PhnkiMNCZJNaggjy7sLxgV3VoeqWwrAHuzx3WFY2y47",
  "key2": "5fYkd7KwjSavGYKKwBagSnr8W2PHRLbDfZBLNLV7Wk5SEoEHGRcSbSZC7DX4yNA1b7j6QDAqsLFoT6Rf3NZwM68n",
  "key3": "4HbJrb3cTBMSPdry5rZKqCECx98uuEQEtgUq52cEsiY6j9zJffnxEV6GchYsc4vBTmqBssJHCY1n8svfc2ChDGpX",
  "key4": "hiYz7dozZzZzJpkLtnkhgyK1jmWYucgJArfdsqgzVPNXrK8BzHdewVhk4iyjMMKkHM1JNSuNbrVRPJJtJgeXadF",
  "key5": "26BqaNeLnUa2eKYB2DqQReRcv2sXyiTyeDSuHrRvzezw29Dtfic35DnisNskzLm3YSGADnVV2cBmL2Jeab3VzF7F",
  "key6": "5DkQtpvaamp776Ng4VcAyELJ59TRbK13iPMPKtkwBwqqZiB9YP5XcrQnTQwr9pppJ4yv8tv6JBJM7cX2Kw7birUD",
  "key7": "43FEb4tBJ5ycfb2prHYgfsfQxwKEkM7Lf8haHnbBjQUJMKkTvbcq3PMFuPqaQQnCVQGRd1NEATTgPkJwKfQEVbkG",
  "key8": "5pyFbcgmwDoiNH6YAFyFsKUXNYC7h9sP123QpDk5Mp6iLk8ZenZpjBFU5RwgzYrjuMfUJ3Gj2wXFTT56io4dN5G4",
  "key9": "dtps6opprdwgKWNHrUHXZ5rSnpJvYr6uBUsatiKyDUxuqcrj7xGt9oMJCz65rLP815un5eF8fQUoPWvPSSbogZS",
  "key10": "5noYF9LaJSAQwdGmbBXwRKqkbvwXkFr1VuW9y2VgahJqLqhiPpfN1cXZ7k3PYQJMhRGWxFJKhGZmMqVvJWbBGEvi",
  "key11": "2xVEyVkRipGoQVjcmMtW3RTFJ8HfY4n6CStJrV4TuczoiQHSvJPB7QSuGRzdFCDNJ5fYkAGm1GKLRcN6Qy7Pg9ww",
  "key12": "M5VYj2cdFGwaLKo1CoRFGFDQpinu2RTNbtGuuZcuj1vCUWZZrY3eh8KiM8VZbKA8iVjNwgdi4UeJ49KkRzpYeES",
  "key13": "3j2GpfuEu85bNvkVmHPqxhFcSzgZcLhByhKTSSRvEYo5GxoZ46rLyFNHag74wbgaMpcRqfMLKmNqcNw5K1wxag9z",
  "key14": "4zfaZ2sip5sSHFPBbctHpGzYZsCRb2ug9SgknbNAfLeYdRxEjGGcuyh3XdjhKdWUn5F819YEJwbaGR22Z3UjCtjG",
  "key15": "25zqynKjwhKqX43pVzmpa9q2kobUnHUhGDPzG3wNLskUdxbwzBFjuNS9NKhqCLQrHfZTDBMy7HjKSFo2VpX4qewC",
  "key16": "4bYkJW66UzaQC5e6mBs5r5N6BTtK1v2dZex4X4QqBzhzHa1U9M5r4L8G7qLBzgQ4y4brrZypTLnRasNpvKhxYr1w",
  "key17": "577DwwQt7e1ayJtytZfkrh3Ku4vFEH7pyzNT5Rmizj8STpLUYFEg539HYh1WSiBLjEeZAXiJLNdQo15AFWBkWiQ6",
  "key18": "3jjP6EJSQ3Wud2BHYa8pTCmqaabuojrQA6JtTCHj7hAFaFBM9Bu1YVUVZNTnUpXq2HFxtXQa1iF9MdUAW82zPwqv",
  "key19": "2iXd4Tyvw6qpj2L2PunSxeDah3g6UFE5oAa6Ue5PxNh1u3wWN7LQR6D4Ti2ioTdJWssWBFRteJmSwvkDpM9kGdb6",
  "key20": "4RUr3coCReeDZjxoBVBMAfGuJxVLbPMEcJ7AJWEwi6KzczcwX6WJTwNLKmDLZkhT8vm1GJrMVTU7uASnDubhZF6h",
  "key21": "2PEn1EY1FjkPxk6V3toSfBYBVf7m5QcugP1h8zWNQprwiyXgQSUHgdwrg7tKDJho7vXre1eWRTdePwb3P1FoThte",
  "key22": "5naTDkzzVZv1UGALoXXLmQAmmkk8miQ7pgNb15giz7Wstv4HJ3Rdo4yDYQD9aLS7cKGHpHSUu24ohY4MXwzYEK4F",
  "key23": "43aFi6qjS3JFmCmtUS78ct54LHGcuy61264AejfaYvyynTNBwiuWfX7dVpzs4eAv9pitLv3VWMzdehJSXTSec7R2",
  "key24": "3FRJAMDrJgpxHfn2S5kQr1rZ4Jm1aCoxm1bQiLQ6DFCj3JJd3zZBYCJPzqqgdjW9L899eKXhkpQy4CzNxMNagTeg",
  "key25": "634FAKrCHic2TQaRBBscFjutUcwQEoS1WddqRLDnxBLrDAAJBsftKJbPr8SM7dmnZAqW2gwzhfJzS1GdEBPGXBg",
  "key26": "5fDH8vtu5Lpttwj61AoKf2naCVQF7nLLD5eSkp48Cxzmvh1PmB2H6MwKnk7jWwjtWGhtsUBWXJfN5LoEnvr8S6Kr",
  "key27": "3RHNci1YK7p3LRKgrDrEkVr8HykqmHisp2iWqmXgUdVLbUZhazDMSYVe7ZJSQCiCRQ2WzRA7yhW1XN9JTnP5Eeod",
  "key28": "324ws8cavEM8UuBB1JMwVzBkLKdAGTgr224xBvUTfMKT9HWZzXcxkyhJcF3Y7dRVtL2aLNrwoZvuAEUFpW5zjU9A",
  "key29": "3SoCqiHJgtwdVyNPMmUjPCeQryweAcaqXoXTGeFfif1XN7SidoWSzC6XtnepjqwVWAeBGQoeUgzNZDe9hJue79vq",
  "key30": "3LeKLQKXCVuxTNJKUFfzt1ckDdb154Pt7knamMacYr9qJSp8FnJRB59VNpdTUC2rR8ambecmFvmvrpu1UFmCEzWY",
  "key31": "KG9uStQW3sR5mhjxUjPpQrEwqij1V9Hy9rDD1zQVsLWLGyCRDrURVY58uAGxnhBGbUZ1fFHskMsvXtRJDwMtyou",
  "key32": "3zbqLdah6CEZnwPfm9Jyai3Ar4Dbzf3MCyQjWzjS9LfSVxn85PpSAD3Bgo5NRMXbxDRojD1hVCsLtLQ1aZwNr8Nw",
  "key33": "2BEWjdA4uUKs3z9gNM8hzHxXHnUTYXdVJ8ppZ5uC3W4i4bNuMQtXescE3Fhxcxgxp623UCFSFqJ8BfGW5tG2sU2V",
  "key34": "3vDACdYqHTZMZLbDj6FkMgJzGuSeK1Qz1t86rSSQxA3HJNVKvhz8eKvj1YY8VFxVJymN7HxrtFzx9Y5L5QRBjtvk",
  "key35": "4UddShXYKSzuHacKp7JxJauea7RiGkys7gJrVFDdqhDxuP5VuoobxNRUuoSX3rDcosLDYqPUgigFdU55QvNPyJVJ",
  "key36": "5F79bRS5dPqoy1BaHm5mi5KGLVXrChLk5zUcmyeLbQjc2vipd1jqobD4hVegvURUnyVsvehtX3vTUxTXWDKhXh7N",
  "key37": "n4Xw8yXxi52NsjGfSonauUeM827qztATkxtyksEcv2Y8V6iqK48PDxwdmDAqgB7bJ9NY8RdZP6z3o4ww7tCp4oq",
  "key38": "M4mj8cVoSE9zdnfQQxj1jYekBcPgArR4QUuzmhH1R3jk8RcHbTVBGHhAxZ946N1zeurg9qgoJp5tY2yazHJ79UM",
  "key39": "5hTdkj764mi8xU1EadmMgvoUzRBj42RbcPNDtzEohvRqTRHXQ3aMbPWgtibZ6ypurxXAxsr697HJgQbDNv1PZ5be",
  "key40": "5ZBtpMUEdWxWLP4WBUVFEGhtLUf5svjNazw9x5xdgAfLBudc6FaLCt8u5A2Ts3r1LGLT61D92ZVRy7Kk7CPy9CsQ",
  "key41": "gAvB12aiEWvapGuuUXUkSTAHxhAqrm7RwBTMYC7vSWL9AXgWCP1HSCqVTuvPpm6ijPrq1XcfTvpWU6nu36hRDBX",
  "key42": "4YUufFaKk8hh8uGvnCnB5GAjdym45gPF6no2y34PrPogEd5j77js7o5TtC93KwRhNHBUt8bFirkEtMuDS9V5tS9A",
  "key43": "2CWhgERgQDHJ7HCYdX5CecPVhBBYu3t3Xw4fhehpmqHj7rDTBPRBsVZQxwqAx1ga4xgW5dpVBxfEUkvJjaTkQDpZ",
  "key44": "41dZBr4sNUBb391oomMK2LVRmEQ37uhxzFZaJURpxBq4eeZqK7G71dEMkrinzmJnSXB66cgW5kZeMg7RHKLpJMnz",
  "key45": "3HBF6ezeDjHKYdpsa6syZsX9RUR4NWwTy1jqX7jHhfpRu7c7X3dqbLmPr1AqZwzaSTg415xxnkucJ2wdK9s3Hy3p",
  "key46": "xUQ3sztVpNzJZhix6MzgpDyttpU9HSmYx9A3HMLts3sEb9y5xiSZxucK62gfqpkE6X4L5NKLWAoRorgiVcq3tVD"
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
