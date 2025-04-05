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
    "36WbytoknGXbRAygNx8uhYTUKpcrnRuq8SApCHB5FgiSYww6YFr8BAAniHemzHMg7fNsUDLszEbkcHQ6VqgZEDGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W57FUtJ5oBKFfi2BHRV8wS4rq44cBow5RZwHKcwTLy63pCfwHkXbaYgiriNoeDiecShNL774VSajHE3xeLG43gj",
  "key1": "4o9y7YThUNXLZrCfXpt68gcL9yiC7ykSUa4yuBWdP4wDdBqrzR3jEY7FaxWJbWqGC34Jq3ZzRWx3AbsZkckBeUj1",
  "key2": "3KTke85iNN4Ex5V6ij92RFN5jWed5NFaPazwLCDvx8DzdHuutMu64Uo6WduGR1zZ4oBzH7YHwrUPK48byrKXGMBN",
  "key3": "4w5ajoBDrMSmn3aH5M5rRJMnu2Yw72wGVHH4xsSGz4pxti6D93JXsFWTYMupPECk3LoKcafYRTMy93ET2rx1Gt9",
  "key4": "36crkvUdKFRUCD2n6aGPyBLrKtsV5UGJhaApkKc7X1ek9DHG8gqSJ2EhTRCiRZPXQxktKbwiavmdYTzQ5fx1jASL",
  "key5": "p7Z9y4q8PVUBJQ73KUafw6gRJEEfJDtj8DqxK2fM6xo7z5aKNf1Jg5Et37ZpMpnPtVQ977bDa5k1PD7Pbq9a5Zr",
  "key6": "9MWBT9m2YN4hda4Aax5Uaky21nMYXu3n6KE8LiLhYnMnHC1JNrGi53CYSpNmR2JHb9qBNwekk97p7MCLrjoSYRh",
  "key7": "4RAtvwkCaar3DtuEh4pqmrvviRniprTMnJTmthNtR2x8seGHtQSaYP7s3oJ4XeFfJuwijcmTFGbPH8kynutytB6J",
  "key8": "57BVJjePmGHqgHzfkVesjfnriL5ke1ifmVMTgwWDMDSiNWscC1g6TtTuzWT3p9ANamiUV2M1HYWAfTePVCNeNYiv",
  "key9": "5xxsskNmwFJUcdpB9Boe8xj8z8DpVa3pE9L4iwB1SLK976McDc8k9NXtwu9MyCoTJtm1zBbyL5GyvQ13c8RN2yS8",
  "key10": "2mRh3m8xEDypRviEP7Pz6kXr4dRntKg1dU7A8QcSqep4QAxNZtxyMU8EMzxyX6zqqpMWBg5T9aPTJvXTVz5S3oYf",
  "key11": "2aK8FqHCMdajXYkxX4tGLubHs1uuskD4E97RMtrHCjW2ois1wNV2zD33ANJZMQLrDQtm98ceQcyK2fvbcQPm5xtW",
  "key12": "3P4XbiCxqPQ1H5Zd2uutnhsKAFEtpJBLrotk8tg5bv8KwErshuZc1mGEYagKhd11JXGpeqsNq3fhptyxDTXTzVx1",
  "key13": "5CLkRKtB2z7kzQQK9dwf6JGjaHqVjkUhC3CviczKPryNZZkhsXJCHngZhBaqNnd9GZLo1xNPGcUonKm2gF5i4GJS",
  "key14": "41gqbv4eZhfUn4cojCyJ8HnU22GswzsqpgXgLCb4q3EHXGBXoMNdogKjY2do5vPjqGSZw3LzzTbGiEV6VnXNcrqq",
  "key15": "33dK8zKAxGGqgqv5iuK5wDvu6Dhs9t8evkoL53BVCt5ahBD86G2JKyNFyx4ghSqZAurqykpvNo3AmeBZ1aJhkjks",
  "key16": "bEy9jaPobPRAHpn6R2KGMYiMdRKN3Pb6cQ6prwmLp6dzkVBTZ69EQa1Wus5txacByJjLimfPdduKFxDKYahdLsw",
  "key17": "5kGtStaMNCZkxPV95runn1Nrt3ckucjz9igsU9arg2QpPZ4UfJNaJ2QWZitu4GzxWCAh8LGGt6FroD6G1v3Qiq9g",
  "key18": "24SSKm9zNEMJ8aEZaPtSuaPeGPococNoMcmdYnvEJ3MGhG5R8ugxmYkyros17iXRewUEidomQYxeAJsjD6F5PH2Q",
  "key19": "5YsCWXEZj8VKXNpt939TTy3R627ajPq64i2UfWKCzK2DwHYVzBV64cejjZxdEnWkzHGyH8sftqe6Np4UEAGA6GnY",
  "key20": "4wSnCxogs8mY78Tyt3y99155HPZ5RHEnHVGffoxh29TCfogfjCLdrR9J6FQ2j3tZa6MUjTczHdTSZoUpounyUkaH",
  "key21": "5t97WyfUjSvw3dLszq8wkr5xN3D1XPB7WcfdmLQYetLqFjWGUr51p7ScxsdAWPzbrqNnc1GvqsfGMk4BHJcienKU",
  "key22": "2xRnrnf1c8SZW4r7JZQYHGvnonvd7nWZ6HemJ51HTyWK7CSLMbFeEMZxTPTjseBJgQqaQjT3obcFsqpLqFYgXL1c",
  "key23": "2uhStrGdDKGVg2QgCAk7xBqQ8o7bfYYkeSaqnfvquRc1uCaLwWMhJ7GvAr6ZMorz65vUGW6n2bW3M5tQq1kfLVra",
  "key24": "4phHrJ6V1ngieUUh5XQJzKBuBuhfhBR12edp7SwcWdczpyrE5TXkxXe8oeupqCXX9vnVPrNRjXPJoLGzoTYMP5ov",
  "key25": "4b1vkXPQJDK2jsWtnUSNN4bcj2dr4vMo8kytEeMp7fxni28PqUJ55quiaYmS3WT2ogpt5PTXVV6zJjbFgHtPLjdo",
  "key26": "4k4jN6rtdusnxvTDsqo7jZgE9XetupGSg35sieUEhJCam13eFjRcq7AGbW7eV89995FreB1cvusSWD5Ac4bf5gMU",
  "key27": "3qzr9wpcYD6UFE12s5SqPu5UZzGxPoGUwyc1z9qnJ7tGwPBzoCsNAnu75ZU9TAj2qVXAnrLn6dHnQRsgv697tmCU",
  "key28": "3DNLVVTggDXY18LQWP7cr24DzgewmoCxcEcJi4fzDPvxFeeRFYgEDQ4pebaoLVZdrMPgGk2VQt8ZbgZxuvCvnZcY",
  "key29": "5Jj8Yku8avfy3PRsyyWuk99SQa7QxpN9j4wDoYsmF14uANFRadBczeGKH9f1gNvVBdScoCWzZ5pKEEGvnrcX8Gir",
  "key30": "TYfaQzApZxhM5332xiMkWD1bG1iaSJrghdgZENPof3CUZW4vkgLHJSxzheirzSsi6S5C4nxFoDXYgV3gEMykAg7",
  "key31": "5g2pwWkQR9geVoMXMpr2Dps3jdV5uW2hiYirxeJj7piUxnFV8ryabDGUAFjJ2Vp3cMBQxxQk3ioJBzH34P2Ef2DT",
  "key32": "61AGpa38Ezwc7vFMsLR1uWabjRq43YTV5CNob8Znq7s91jVLEFDyzGyn2aVHJqCyFgJ1AiF89AxqZKckQfgJmpVR",
  "key33": "2YjfMq3FYMZ5QhNhp3zYE2HNRKrEZ9sSKibYWXDjWe4hHCEcA4jHE554gL4G3ATrjp4mXFSPM51oMjifvW16d4oJ",
  "key34": "4c2qLtaPmQx91jMrFvBA88nivKk8FvA9Q6ukTQwUCgX23gYq3JA4diGhT6sgrDS6pX9fPrceKktat5fo7GWutSza"
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
