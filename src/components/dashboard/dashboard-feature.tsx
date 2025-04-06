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
    "2GmMMzN5Nm7X9X7sxEmC2MxyGwz2RT1PW878GZeKssGHiuKUpUrUP1EtiRwcfagDdUTPHfAPnLsyf8fwez1sxX8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pvX4QK12XcRAyWMueuL26XdHmqTC15P7NXgiQk7kLy3xMSV9ihJLh7brEW2vULDwFkg1wXD4cSYQGz8MhtzRPW4",
  "key1": "2y4fbNambTY88mDYRHTNXKLrFFoVeamNFR9iCm4pw8iTXWuGKGZMvgpZCXFTtqFRPbTYym4Sy6Yq2mcQNvirWJui",
  "key2": "4AFtnBMZMBYFoZ6DBuC9GJLVUpM8Ht77tSZFNoAaRG3psckSWX4aXTdTumyyKNWPXWJpBPxkr4gP8nUi9zqZJote",
  "key3": "3yrv8bWbfauNgUaoCa4WGEWqEybqCDihAS8Kn2X6jCDvSf23u54fcYJ1gQFAXwB4PTMuU58e6oHf59wxdE2M8Uqp",
  "key4": "33xRooWWyc4eCpuuFJqbTMX9D4eZAja1AkATvN3edXRcZCr9R1JPjZs1993juJJzhrupNNADkHHoEj3qCnSgGy8R",
  "key5": "ryVQfTKxRaox5K25wsRbrhBELz2zSLUM88vBDVcvuev2KcbHKVBGpTdwy86hsxiw1YGsjMhV7dcXkVNNLfGDapz",
  "key6": "2sUPnzPG1ptdjQC4SYEdQy3LU33t5zT77W6TFnTGLo4oucBZWRiFT7LbU5WXu4ErHJ2H5HqX94D2PQuJB8nDbax6",
  "key7": "2NsUu4CPhhFQzp4ygcKoyDatPHog7rxSCKdVM1kBNZjNW5bkpZbQYSxyhN2AuP9o3GNFHWNxjwCxRhER4HuXwQKr",
  "key8": "5tWrjrXhgntaU3NpgZZbRRUWyJmCwuQx6wquotkxzu3vMwEcrXsb2NDh59oZggvmDd127fFseqXR8ADDD1UuXXQh",
  "key9": "wmeoJ8DbhL9BPya2HwoPcMiJ9HJnBNi4CajXqgSPqM9VCmUYtUmxTbbDtyv9q8bBGLehdLLn4LTcVSmeGyDLnL6",
  "key10": "wvMSjzkzCPhwWzsgtmov4sqDZLYqSEXPotdAwVtDUhxGMZcTmX7shNae4cATz6tpRjgXDhSSqgUNsrZuPxcbX9m",
  "key11": "3PVxzQhrkYWpuqq6BUirxowbULLixTYJVu554GsdWWEYB5mL8nFK4V2AwUBPmNskbBSPVPHpc2QdKSuFbDeWaDYr",
  "key12": "4vfaASUgJs5Tqs3mTHsxSdheupMpPGKLBHc1jicQcRWNMo3oYuqV3ptudNah5yzFxqrJuum6tVHBHwp6Rrfry5Tw",
  "key13": "4ZmWyRx8KesGRkRwKdPwNADis3fMgUpn4YnSAiVyc395rMMc2m8cqtgiEmxvpzfLXu7vNyxMnDMMR5uCgDcCB3h8",
  "key14": "4yyh1hmZ1BE1Cjpy2NPSfdFQY2mQSvDZASU3KfojV2PQACgfHXMMjLew1Cd4oqSsWez7Ut8u1KCtsGANjeYyoqbR",
  "key15": "5NHEpmVZ1YoCcnEQuKbcSV8CFCHMLKJMbJwDbJdEdMtubmHLJHPYxMe1NpDhmFgAisf253CiPFdhkUM9mSbcYHkV",
  "key16": "5CGs69FqgW695EfhZ1PQx8g2yFqsy9LNqNRXAH1ucL5E8sBm4in763X6ruTcB4bme7194bRdiu5dahWMGNSLfczs",
  "key17": "kmQYFm8XZx4Tx9rAQ4ZBe1qHrZk35GAUnpzm3BsUdKSx5WFtM1LwSTUdGYq2F5R9C9WurvdSJvDLWz2ovtHbCub",
  "key18": "4ZYz7N3vNcXXzuSrFNeKwcgEqJvecZGdVU4r2rZBCPHUwnT3MKJmzbi49BqgKkPVLh4A6QU8z67eEEEa21MarRnz",
  "key19": "3xJS4ZdvnK2oj7GYo4D711X5gqEBW7mehRM7fPez9aaheTLUP8pCXWrswE3SPdkzj1fEDn6ha3S3NGN5Ro9oPnnr",
  "key20": "3daevua7RUTkHpy8MFi7MHjPZNLG8S7Rp1yUNVunXfkFwTWQVuRPKDMMjrAqFjT9oZtLHL4UmQKV7CjFwQmnVUxE",
  "key21": "3b5JmVegcEAmGj94N9D5VHhoR1fv5KoSnN6DPCekSBSEnxj2cDKkoU547zGrfsZ2hky1WXWUyfbBYuN9kdD4FDvi",
  "key22": "3aeVtjQDjqsbWEk7AU4yVq6yA8QJyjNTjssxUKooAGkNzTa2Lu1pnUKQE4H6ZQKNjuJk7GB8uv6csWxzYrWPuTiy",
  "key23": "2mAkpE6QWGARXoyQXu57Bj75VrXdUR4ieSwN2MD1dXMJug5t3yKUrf2mSQpApXwjW8h2kGmzKTPU42GuDnFZChTN",
  "key24": "4vHtsiuz25sgcnRg3ZmYQQQcpb6SKhKytuDiCAuFqqci8eMkaivBKjiyUD2aUkTiyW2awpn7QehUsmpDqBm4fAnz",
  "key25": "2djGG2QHMMJ3GkbVrJjca4kgYxZQaRRzLo5FePKTAUHWDLhYYYhbzMzLy2VqkBLWjHxSjekRz5Fw9cp6gb3Ly9QC",
  "key26": "5SWLXUUQpVvU17AmTP6gxQ2FJBLjRaLtRCTe7KVwn1jdWw5mNyiDzFccVqLgrukEQsAF7DkGMpLF41bir1f8JSuo",
  "key27": "Luco3QYnZEZtfMLnekdTtSscpfhQ7BVT58gxG5cnVbs9gUR563thUS3DB2Mgn5KkDgevrtoaDEt7ooVR79iRkmX",
  "key28": "5U6QiD4UUghjtPJbUCE5WgAjgJZVvzFKhvHqL6QaJmJPokTwwRKb2Ebmph4uZTAaWAEVaXiXkdBmjhJpWsC7ypbs",
  "key29": "36YsPo59kg4azWsd5XviHNnW55FUguArJKqudaoTHozFLJmCUfchd73K7RVj89FqqavYCPrZB1bf6azkPRrKJUZD",
  "key30": "2NawVv7HQCFtjMrzKzsArL7m6ZtnfbX4bmqHxZ9zfiAu1jPmKqNXzHseozrFTJrTJSG2NWTZMiFZHojdz8p3D2Zh",
  "key31": "4epchZZtMkpmdoyfHuS988uAGkuPMr8ZK5h2qvxBGWjHu2UDSK19u1Xx6K6KYVLiQUVogHJH4MmyoQKadCjoVCGP",
  "key32": "4EGAZZ4z5nF446tmdkwzfV9SJtzjrdNqdiG13r4F3dTGCnMQytvyzi5L8Rm8BQZhGwG9YQDkW8s6YmzXHLYtrDjy",
  "key33": "ZsTYTHwmnWyCTz8E7RjhFqze7eAahefCjLsnTJ2PDkfXQwDenE7PiqyGRtA8YCtPfuCrQ7NqTjsPnWzEYg6CrWu",
  "key34": "2XTetivTPFU1QYvZTWhsb7SnvdRacCTpa8ZTqCpXTpFKowHaaifzERs3VZqLA3PGdBYotuhHYju78a6QKnk6cd4E"
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
