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
    "488BEPQKA7ThJMdnHdQr14Nskpb5c3WE4PgZRpK8zSthzV8gmzDiMGi7kfUrxXrgANKosojaVfH6MFrsJKgpeiie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WEbEG5dTfEtrf8UVpQ5c82xtr7utrKwcqo7JQxEYJgGRFSsCM795M4oEgQzDFiVHAD9DLrZppu58hxeNexaKGgp",
  "key1": "DJrQYjzFxznpivb9KcGa5w9rVGCrBMuV61MHrvrdg2Rfe4radDQ8VkAD8rQ6jg94KuxaQy1HKJT3Gj6KXGTuUEq",
  "key2": "5yHbTDVkjnXxYMJknH4jc2MQaDbLzE71fFcsHDkyymEDzr66orhfeXFkgSpXeJJMwD4LxYumCssFA7vw8Rp3rAHL",
  "key3": "2hBSZeHmPHQ1fn6Taigy8PTYnJvZSBnrQFoNQqTB7V4gz2H67EJAkqoJqXGQvUgsGhR8sn7QWbZ68ThoYv4uFWbX",
  "key4": "5Gv2yhGyVAUEJ82J7jPVUaQ62oETskvFCTBipERL1UfMbBymViTANvNj5aHM7ATYgqfiAZyqEe9KR3piwAN6KTLw",
  "key5": "5mXBY79zHiimwSHe4iBx8zuaxZTvKTcuCdxBdbTcaBJPV3jsw7T6BP3xopTgaz1t53uEGB2QkjALDPvTMZvr7Nmk",
  "key6": "UZmUu4HL3vTiTSBJpWjuWMGSvVGm7MCKP7uPeXTnSd6HcduYxtMZAskjCt2Wbqgr7i1LSSapC88EDc4skcCHRNJ",
  "key7": "4aY58szsajkGWtikaHVRp1xw24MfuutwWsHqpqczxLcPFrUFDoQks5LbC1RWRr1XmiaP2qhCJ33zcaad5gWAUtJc",
  "key8": "2YuwWkEGVbgmmBZPeb1pN9935HkeapV9hbTzvgjiESFxrP75JMpddFcHDgWGVE7zszQrU8EdUnmrxY2U4Hr62aN4",
  "key9": "26JpfzkXBKagRPDAKWCspTeVcUy1vxqvoaenTSnxkzKwTwTFfBa3B555jjjzVmY3AqRNJzT85e6YapSMQCej8ZGb",
  "key10": "Cp4ZZ9Q25QSEfjCYsTNTGowtymL2bk3HyZppBt3oPem1wwWoUeyBVnaHi5zAGCyuiuFVGipZS6vKnSqwhygTdnb",
  "key11": "6B9rcixJF4d6SCbqgjFGNbzjFsdT5s3hnb69zwZwrnGSAbrqNLqyjrj9JtYZEUHp3cC5ygo3xZjS44XZzPSGtRv",
  "key12": "4nXedj548Lw6VL8CHQH9pHQh73zxgrVVVe1Ahi5x4LpEunBre4DciWyQZmyQkYzE8NKttnQqcgGMxLSYrCF4keFz",
  "key13": "5A87A9H1GCVGS8YPa5jW8LByiHNikJBhGx3e8P2U8o7tNFiz8xyW3e7tAuZTsiYycGXogZWUFeR4k8ZqagCHZ9n2",
  "key14": "3qQz2K4DnhjfgymiSqBTkyJuT7WR6MrAy7D7jk8MM4VdvRPy9NvpbYNfiySwMyPgrqAUGwzbqjCrHFXGXmKwPBnP",
  "key15": "3uHt2GW7Ln8vMU5M5frvav8hzP9p1dn2dDfKnbv4UsQXiRtXMsNYcbkE8Vj21sSxrNEj98nFEh3DKqvM8AsW9gSh",
  "key16": "RqJND3hK9DGmB5KdxfWVjykuY6qsard1JUs3XyveT4Y9nAQVCRTWpswsVtaoJsguygFN9b7LTkUBmjeueaH4pFS",
  "key17": "41gjQrKQCHVhoKMeKg2gxhYA7CDbCDYZADdAYJD6QMYL4MQ63bu2SM1JqzGmfw5edwMxQ5Cytj3FTABV8uXQYSpT",
  "key18": "5J6vYvnvGUFWrY1taq8Ej4p5rfPuEA9mPSctNHMcCR3VCHXoYe77ux2fm4cr9CoNNzzVf6YBkPWqzFBfRXniW3WF",
  "key19": "oz6QBwRfzzQziuw1jGKEj1X3BETKKTFaDWErSVMXJg1HR7zMdLkREtCDvAPsamA6oXVinAVFF8uCfZ3gWqSSjoP",
  "key20": "r7Ysa51DLge3BF8PBkMW2UrsE8DvfQ8pMGK8fukzkqfZjs8aFQdrS1sGmNoQcQauUPGhGwHLHXXAcDSTrqCFfKU",
  "key21": "2AWszmB5PjwrhJyGXuMynHiFEt2grpvkqSBDr3LiW6t6MrL4Eb3fQPBbXWb4DJJJJjHGWwTEbMuDq7ERfMe1a5e5",
  "key22": "2HcdDU6y9LCi6JscrGhHKwzQ2x65aAaTc4n15KSAsFqjbbuC45wwbj7AY3d7Ha7ecfZNRk4aAMiqp3r244CQBNFd",
  "key23": "4vEhi6uUMMzZtasGBNVFvJ8i9VPoeeWtFhdBGgzMNS7o2xcJQTqbqqPZcYhZQwLpAgMhWwRzuMC1FUayrQw6ey2S",
  "key24": "3aSpfjywh8t2e198vEjQxDoQ5FLFGjZKkjExatdyhsSSCfF4bP2gv5JaGC25KGKXvvCaZYt3yBLeTo4wZHPM35hF",
  "key25": "3a1SncTWSEmgoG5GucJYB8g1aqQnzotWj4d8eLRTzykDgYsJvWrSJF9FRpaZza7gzkyjj4c4K1hp9un5R6D4wUoY",
  "key26": "2pPBJHTW2CWjbD2vx8hcCMRxzP2VTaQHSpqAeBXAv6fgs3WtToCphZTdibzHxsHwnjPVZRjH3khC22bszRNa9NpK",
  "key27": "TEJxpHTgocn2Dz1fR4ZuFJL44SyZ4C3uEJUSfqLZz3M5U7zmnWLdDb2zZ97876M17Y2hUzSZErioPYWQ5v7HsEX",
  "key28": "5tqipuTSn7H4h4AGoFdCLoAFves8CSgnqMir9kUGPKLnUEuPiu6NGf7r8vUv3WsBhXcKn5UdrQXQrRhTnsR3dULe",
  "key29": "2UmYHgyvEwEkr9WkeEC9FdufdsztDKVezk4m4auEXeEUzzNKssaCsZxGiyMrbEU1zu3NdMrAm5SsEq8BHAzgvh4W",
  "key30": "4LnEgL6Fmfoo7ocrJ3AEWcndE3SzzhSmwhEg6ZQ5XnVKaai63A8UehhoCTNKiebcXTXdMH3JK7YbYf8UZna2GSDm",
  "key31": "5cqb3tEmQug7KvrMtzVUkxqjLiiMhrszzA7TBabcSYG11jRkNRCb6opKCy4fFvnFWmH1bjzdzCJ2o5Rw5gKQ7UC6"
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
