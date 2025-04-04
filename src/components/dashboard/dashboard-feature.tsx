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
    "zE45bvw6UQymEhfBMGSQqAFbZ5RBnHxNuXz7nRmb1E7VLMbXXkwkKbFLyY9dq469BjBTNiMJrghYprgdTLzEsW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65joUuGy7r3hgF5M8nwbodYWTtVAa4jaCxUhim7Nu8Engc5b893dyXy2Z54dVVwXk2FLujjFyxdYVNj7VnRW3haJ",
  "key1": "49gDv1ksXcMaJzxgvFWmuHterggRL3z8TgzBKwZ3hyBSkXpRxpRLQVvVn9cHMoV63K3WgkvcA73C6C5riYi5zVpa",
  "key2": "3BoHcfycTNT2FNy7LrzQUtdxEVrRGe5VkEtHgetPVvHWuRSc6qaofyU7Eyz362WbCPTHdhfN9LeC7W7nLJRrFQJ5",
  "key3": "AcjyyTeb2VovumqqmN69pMdTN7etRTbxKuJB1X5s2swYaqsXxenz7jDRTEgyg1DGh3yEi77W9dDLdqMN2qVYmgu",
  "key4": "5WMWAu7u6JMm46sHS6ckDUwXWfJbPCrUtCjphRRFnNg4SKCzEmvTaF6c8CUYKu8GgPUWFCp4hS96u2Ani2FK18uq",
  "key5": "JERg266tzYMPV1L6KQn8v7qFaRySzkdegzdrpgBvgGgS6H8TT64uYfGMAH1LP8pRVxKUu6E1BGeHvehjRtx3hFi",
  "key6": "5jYZ9NPhin5i859oJRm4tKyy86FWgMiZ6K3sXw4TGuRv8iwH4BTt4zKXjff1LkszipLCa3C3ioTTkQUEqrngi5jG",
  "key7": "5GgYK22hykgMPPfPNEFHVqrkPTsJ6veHka4zzmH3zBRcKmYSjWgXpAL1bvFauofr5EMbJY6vy2vbdP5nAztjb3b3",
  "key8": "4cFUwaMBirsSj8qLZViHVMNH7nCr18Hd1Y37Zpmfhi8M2vvA951GyW28FaC7MUkyHJksCPQt4gCq6WL5ALhSHZrp",
  "key9": "3XNoBTL3K8iAdzb9yRkBRKEtMkyRUFxS6WWhJ3s9VFrqcA3mi4P9oLXLzVVXmtmZtb77DokvMP5C1hzATx37dcM9",
  "key10": "P4iXiFZ1Qx44Bc9h7pUDtxZKPJk7yWoTbw9gXUCFbV3hv991C3njKASC78VqS3y7eVzB6C3AXybmySagbzEt6oc",
  "key11": "5dsVrJiw8kNxzBhPTEdVch9DXEf3DTsfVStRAmL49DcBm58L2fxdukmSBucoEQkJQYJ1emUTpWPFHQb4P9VWGDcQ",
  "key12": "3HK8mWNiVaGbCxvsp1hMHfPnfm32UybTksVzWZeiE2YsZNm8piw8EtkVNFyNhProFaWorztG7TXGmPZUuRRXUP8V",
  "key13": "S1DM4YiBRSuPnNYijRFngQjc6gehCofVhfTVKkLeDuyEEaxy5DhBRZKFLwFiSgNtRdJCbqnBG7xP4CZguhfsaQL",
  "key14": "5mFDkd5ekMH8KDS19xrgwW6d3yc6di2MwhjMLM64AmEVUUuxjZr7YoLj8oMYQf2drn49CS78DBxVnzcxKJr2gaPC",
  "key15": "s55e44NhUZ8xbHpQNn3wGaJNwVdwVLDZ6ELecLZa3eNMcsGsgHWJMsenkQDxSfMaXBPYJ7gjynQxT8H86Qu4g9q",
  "key16": "39i2XDjb9Nxfx7qwYW9u7XskmN2k18nJgAQFK6xhB221CecB6aTu7NFkqAtDLt4ebAtoKWZudxc9BWkpfGFn2aig",
  "key17": "5rBVEjprf9nHPpuWpLjNmyDDa6GmaEn5YQ7J8GY6XL6auRc3gk9b2dA3uEDRc914YHFyCaYVRmFPjNUKvyp3SnD2",
  "key18": "3WNEJiknu57HpZPZsMtMz3AeLKUZuNnYyhz7Gmb3qL9LSuVYMM8vcekDaijZeFWjoMSzquzM8wwYforpUHW6yeLp",
  "key19": "4WFtdJgn3B8kA9ubUsyEBeez4eJ4d3g3fTkkwvb6GwxUJZrkTRCyf2BxvZ3RgV7JAFsv895PJPi2KmKrEvGATdPU",
  "key20": "2WfEdN1MwNReXY73xQppMxwU4XNf47UYCLdTiMckzTKYZjqfwboPaR8Ki3STgHchxtNXBeQgahBJLKXiiMcuuEhL",
  "key21": "42ZyhAeuJRpUgCBq7h9Ss8R36BAdX1ffLSwqV5KbZXYy6y9u3cwMXD3c2ADUs4KfBGQ2Rj7hukDqxHwGz6rk6Gzk",
  "key22": "5iYf7GuKeNo7YnP8o5ovmjvEPje6nfC4tRweW27SqeRrRQZJoz7AL9BdUPZJtNfbLeBjrD5dYhebUucp8wpnDZC8",
  "key23": "9E1DyVBeqfhf72RcANQvUJpCfFtG2W43fnREZzx94pTQA4x44jN4JhPWHrY3DcTGmaGamqpUQg9zctaCEtSQYzJ",
  "key24": "5VpZHr22XTPHfRovpYCDbR6uXb41rsf4XdcB6gTizQ1MpfQjv1JzbjTaXVdVoMfQPYUngy3QyEKKViEbEYDKKG5C",
  "key25": "4yHBzwTYad1rGsiYfDMLz5rAyyXr1tFiQekdi6CiY9nHZtWvh9WEbcy77NMLpUw6B34mi62h1mNyyZw6ZJseip2N",
  "key26": "2FHCUBqiMi7XHQDseLW53SSE9yBnyQoSeF8c2H6AqhZyPsTjGQDMTyueatZ2f5EHz1uqf4E21A4Wtu8JMozc96fG",
  "key27": "37faPkJABZ1JjUCjAMTcsDKPVyJrQAJYJD2V1BWzDMYjtKPYAACUX47LNNHwzCrpeU377NPbQJvHHZ7RNukFnNKP",
  "key28": "7fc4zHtahXxvQNeiPQurFQHgCAUnzaP9q9ynaWgERrbYPbDa5Z4YRoEPWvT3DtaMbQxCEU81eNSy1xkLGDqeY9o",
  "key29": "41RM3hSdubx3dGNBySupL7seMhWMW1j8Jg1mjn17uSECH3ETg2vyobVp7U4djhWRXG2LGXgktLNUkqr3qiQsYxcx",
  "key30": "3Xn7WCL8hZibd9J8sJSRYV887EWXnjoviLySUgxQJdn7QLxpQraaaWNtr3yMUEfG3YidGuynHCifPBhbNPfSmH23",
  "key31": "4jiFTwG1P7YVhQmpDAYStDDVTUHKXEMGj6WhHGxBhS8i5RSGKNcEao9BKkzjnmVomHntoLnfXWJxNEhek4bmrzFs",
  "key32": "2N19afZTPSr8XkNE21iStuXr5BcejnuuRcvy3DKfETktYcmpWqeDS5PN6MSJTiq5GzZwmHkV9izAkGu9mMYDibFJ"
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
