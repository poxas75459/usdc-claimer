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
    "3WnJBYLxrNoN8cLgeUtsenoFfseukPs9FSLHeZ371KECDW5CPqSPoKj675JjuEr1wWA7ZTHgBADSUaEySLyvHdZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GScp8LqwomXScA1W6BTqKoyQpYQq4XvnNyXo6GApyzR55NFwCbnin94tUsbFBfH6fcmVU5o32rFbpPcJDyH2Ey5",
  "key1": "fvM13BCfe4PYtUrTXyM96CxTd2D1f3BhnYEN3MpMobjnUGAkSMBEWMtZk8EBPvhyqHrEZNx43XNAnA6GFzejqWS",
  "key2": "3f8n6WAZFnuQ6aieH2xr3F3hqsGTBzBerM6vAudhw7Jxsc4ZS2cGSZvd22eyiabTNvAXUmLRhay9tEMj9dhVJyjw",
  "key3": "2xHzuHts324CKRaUmBmkQhLp1zCYVqfKza3ESiftXs5DugNso2j2dVvkx31uyXcxG2DJ1xXPhHr7knd6LLT3yDKw",
  "key4": "3uvnXqUKTK5AjYZSDCGXf3AmH9n819CUZBbQWh4DA22QuLknd1vS66TGy3NVtZoSKd8g25hjnvziJSzj9ua6kdRM",
  "key5": "2TNLXMsCV1HtSj76nzodtTebS6y7hL9fVv38kktmTAqY7cWvKmGLfy3tWW9D5NsyLN3x6Fz3ncp7GbBNaQW4HHX7",
  "key6": "3LmyDuSEGJSRBJ5t3rrgsLPACGjsa3gjLuVSrjWncG2fgCHby5GE8b4CZDXi92YvKiTKBPLLuQpoRbEfzKCpK4Pd",
  "key7": "3EwjfqJswa79diE2joXVZ9j5CSStvxRSzXYex6AQ4xohdwQBR4h6MqLr3hT39UoudwX8gjwHkQTx4AUSxpMNZDrv",
  "key8": "2iEeUt8tKqjUoBzXGyzveVQYhSWaubPpZT6Lp36BDadkmCBxsUcrQNkBjCt8bnVhnxQvSZsrv9cgp9jBbdDUnxpT",
  "key9": "QzJUJmZBgBXJkWvgHzApPYgEUAm6B7zUBxcLAAat5BLQL1EoHm97S9kFyoTh5doUV2FPVm8UFcUbbuAebdLFdca",
  "key10": "3DrzwvVQ3d2s97B7P5aQfTHWHkZ62LFMbiMhwF2S19DqGVUXYDgnw1Zr7AZcDrr1Z35a3JMVx67VdAZAnVGCHQKZ",
  "key11": "3ph1VhDwNHLh5uRwCYwX2nxCxXUBZo1pXFDgDkfeARctrq6WiuVdrDyJxGAJw5zzuNiuW4ebBf64he7YYiaSA3ay",
  "key12": "62CKArKpp1xZSqxq4JT8LGty5gKY6mWM3QnygmKGbYUYtiWDEXA7fLexiDrhN4vSBauRN9ugAMUyuHAPvzEyvEUJ",
  "key13": "Pbh5mgfiizpLb4vYumEZnZgXqi2xFE5VQhvTR5ACmzkr3Rnmfvc6KbT5zZU8tLXJSoHJFi6YGajazRCnHzKmLwq",
  "key14": "LW6SJYs92vEn5jxDefpCwNdpmtxS4Z7Zx1avMG1xdau5wQwT6fdVbxQFNxEc6cC9yqgA2JxVsqtcB5HYoCNBQAz",
  "key15": "8sHhdoDAQ8nxW1vASAztHXizXnfqJYZuDX4EDMu1M4pwaQzVts2vESU8D3ehYWz3w9VT6R2D99PFFrn24RfQ6i2",
  "key16": "WRNKLuXGdVDE7LGjWMLChFLgAvU85zT45pnqWongo7AKdrUn9Mh1JJbd2j8L6n5eQmHqo2zvf2xypCRAqBmMt6a",
  "key17": "3aHne5Jit5SfZ1wJRW45wRbbX6jM48cuxhxZM7NL8Co233XMv6Qf7rAwiqaNT5Hcjrz1vJm1be3sXXd9aKHw3d2z",
  "key18": "5fKBsuPgpfG1UKX1z3N673VA1ppqLzvM7K4mgH8av3dCmuMi1FpYnyHbAuA51xSPEffPNvQTuxPcPCC8okq6JT2f",
  "key19": "4p9eRqK91vu4mdAmSCeEc3gYAfHPBqpakcPbWe9kPVYgc4hXEm4fk5VqBnpxBu9CRrwvRskXsTHn1nuccQahzEkc",
  "key20": "4HasmEXyDaZRFmRGUgfTLYF2WM6mS8w2n16VzXr2G6fcqhib5jxnt9c8v24Vz3u7ZshoQqTHjfNfTAQxdMTM7VC8",
  "key21": "qQZ4saAgaqSCCc8SM8t7jG276bTMUZAYn7FFFVD818vRBg99U4of42EEq1g8678QjfuRYFHAPggwW9x9aU6NvuU",
  "key22": "3VRWoq11bj2o8gbEFoUp4qdjEdaMmr7QqazqycL2ZZEotM8LhfzDkDXmA7GPhkUnjjz2udWkdCBhMCmd4Ba2JX4s",
  "key23": "3qbttUsqbvF9ZkCCn3YebBQgTTqFeQPuEKodDZogr6GtS3Z8THCdP3vvVsNiaEaDtYYfbcsr1zxtdfSd9U4TaYAa",
  "key24": "3aNvLEcmCANvjDqDRw2fQ9Mqef27ESADgtWJ43hCXQRvkvA2u83TCkWiDY4nPqHNyfaoAXCu7Sf2uKkfATu1ToPN",
  "key25": "5r3qgjk51PU4nsh68RuMZjNThUDhy9vP68h5mHjQq9P9JPd3eiyXMb59SxAN3AtXACudsBa9LpMR6SwbQ272a3Xf",
  "key26": "3g4Eg3nvpU9qiVwKzkBjp2yV5ij8eTAERxvaG2qAx4WwqUg2wRkQmKBgREwQe7VJ4McfhN6rNBVev1z2EqcMjr4f",
  "key27": "2Epwub4C38EvZMbSo1b8Tuy35y8z3n85TNuefconwpaUgtfABr3eXNUEbneo43Sndwb7B7daJ64ebF8Q9P5cen4M",
  "key28": "2mv3mbhh7jKEJtCeWzafyP4VNPW7rW7G54TYqEoprW1bHkRWMumfUFPY3QCZUz5YZutMQ8JGMDj838mH1j59RxZd",
  "key29": "4bXYAPtUBkmWFocjPkqRkKywgCdjNaNNg9aPRk4r8qB768kCMQoF5wizcafbqREhjJd6HAmx94bFkzZdALWQUDjV",
  "key30": "4mFVzBtegAxbpsu32rWbU9QJsjXkp1dNsMWXHL6f9iXrxuV8o44pye9PYYjwUVKZSiza9j93FGRbuTNxwiAzNN4R",
  "key31": "4jpkJWESmZbVqqHW6BEKzJjer4PQ89EpdrnryNFvWXg7Dejmx1KoNmkS9D1PNVRtgEzJHrZhLUs14ZMQJ624cfqx",
  "key32": "583Ex34mgZmJEeZfxqc4baFaTLYCcg52v7BHkZECeH14QvRRp8RaWPgAGwYV1mtv6G3hoX2cmSAAEbdkkk4qH17d"
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
