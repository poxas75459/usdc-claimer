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
    "2Y4UyTKfSudhh2fnjRQJbUpL6y7cxA36qm9nFigzXJaxsnNEBmXm4MDhUZ2FwygiLwx8KXL8zGbrQFcGHfEYdMFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFzvz16T8knKZUtR6oZjNpdXYw5WbwrGp1WZ7jXToFEE2VSjZV5zMYJ8cr5wUhgkmAW3rTCU9USz1WsBnmVfyui",
  "key1": "3wePfjnmshTgdXnqDzro3qkSMr8fMLWWWQigCPWCJLR4AyEbeSozm7YB96EfjSrC4JjyBZH4nB1nUCoQSgTgDF39",
  "key2": "4JJVbbKG3959ihEnCuQnbMNjCqXgu2mYDA9jVNsrugJZu393psfmzNSopYjGW5nMJ4wAHtpJBh6DnYx65jegtY7Z",
  "key3": "3Up2vA9QmFB6qHuNAAvEZsPHZNcmbC32M5exLZLFDSXavaRS64j69Pcb4ARevENJKGwqtxh7iFJMtv8F74BnKKdX",
  "key4": "tjBMDcK338qPsey4m3QXmrwrrCeN7m5Lp1uncvJGyE9mb6idGWxqtC4pVJdYNwUB1TPD5ntxGVnHFzQ22Dwz5fY",
  "key5": "XMhFqubfiVNtkHTTCJ1dFJxir4dvvQ355j5in8sx1CS13K9mF5z5BLucLmwLmaHet6CUiQFRuBKxRYAP71qaRUE",
  "key6": "3iGchpLvyX6dP1r5Cu3rJYU31SUCBTZAXsc83oS56KVRgqVtHvXfCskbdgwTFsQf93ZbQabMMfp9U5HRbRrVFkAa",
  "key7": "39DVc1683e4jxaiXKgubkoJxTpRYRTAgSWiYitxGrYTjSqF9yoHW9jh64Ng6zj7E5Xarvn3YuhRoxrJ3ABe3AWk2",
  "key8": "53bb3q2svVtfmw3xpgQupZpRaNjXJtZbgKEcnvYPPKjrratKbFjGf19xCRFM7the263cJtELzkFXFqUFEXa9jTrq",
  "key9": "atbBdsedyhyz21prW628BApvquCStTM6zdRCczY7o4XtkU9XuiYWx9FJh7bCiDrVFdtrLPeXdvhmwYp55ztmssH",
  "key10": "3qJQXo5WB35y8zt3XiUS4Aw6L396HSyGPekWt19JuiCn5YXp1S1A6tfGhG2jBLVCWZdW8pUWTM5AG7eKnufmz2pf",
  "key11": "32wKPUvm9zq9U65zJd9kW5v21skZzBGK7hYPFtRX8ce2NWTBLCgKUiWzVfHqYpTFGwSSa7LNjxt6GfquAwQdWYqs",
  "key12": "3dQhJPbwyx2nA6ocSu6rzpNZbJacbjRjYcX2WSjfBpE9kBpjQi4ZDYZ1L6Fd7z7SXRmLPG5KQesknZ1UKazjo4dh",
  "key13": "4swuCEEkE2ThDUqmY97hp4FkkfWdYm1hL1RqeSpHUm25RPwwr5HswjoRnzSMC6DpRRXSrgaS1nDANHntV3tFBFAE",
  "key14": "3Z2KFtSwYEkM2oySPjgaFP8qdQwDdeDjJw5s9SggJ7ZxNFS5MnfiaHvbWqutneqxGEZJezT7DdYGT3tDbjX2x4Vm",
  "key15": "iXetX4bob3xU173PjnoVCjnf9eSU8UcrR1V7gds6r1YsPPa8bD1f6v8M7mMqxoDL9kAMCJsdRy2fsxnZAnqy2CQ",
  "key16": "3kB17sqrtcVhXvsofYV96oitTeJ3qNuYpdxNg13DFEg61T5Syy13umBu2C24aTcRiAawvvu6LvXRLyvLTw2Ep2rA",
  "key17": "4z9KgrEaayZzw4CtTd7kusBSjkzShK6BRuebJ1KwQa4HRLxxhQ9iEUXgCdh9iFNqMcNEZbgdygAWjanSWPWvWZZJ",
  "key18": "2ELTBGQPvZWnHeVkhzoRmwu23QMpGhZcQQ1Ubg8nczS91Hjz53aeEXdLgwiEjJQ6H51scf1jmKivW5EAUtkkzus8",
  "key19": "2hK1cSqcA5qgkai3iDrZRLnWAVQTYSYdvzE1Eo4Zs6iQTAA6EvJkqjWCFYvE2xvQCwwUeuUBJQqj1k3pjGXumcY7",
  "key20": "56vDPAkEcb9H1Hv57wH3w2HQEwCxoBjWPdjAz3ozqoWLnrnQUAVYnm8cGvEfGdaGuRznziirpGor27KdewqPzj1R",
  "key21": "2RLrGFn2KvqzZgVjdrExhpvEJ7E9BMbttE7jB3gLftMRMwuLrdaAdPQExKh1N2tqiALY8k4Z2JgWoRSJ85aRQZTf",
  "key22": "5bq5qMJok8EiB3JxEt7Sa3zW4XuDw31We3RMGyXZEr3CRerJvtfWgJ3q4j5pb2tfyTSsw6tHFDZaGh6ZvwEwT6yd",
  "key23": "F1cYe6C61at9jiCN41pwWDrcvDVTYfw27sGCiPty9HXWcLMtb5SKKSnHnUeg9yh44v7pNYYUGNiRAQcnQS5VG8M",
  "key24": "4kPqrG7dVzWYn31Sw3GMuFXMJdU5sFSHbDASgYVX25bhAAke2WaEtG3aGrTafXDh74cwo3cCEDkh3RHZtk38Czfs",
  "key25": "5uZiMSwkkxz9WEj93AMPFF5D3cZeZyjYLR2sw36oYnmVNh87xbAxjwLtZnGHq2yspf48TqKuX87ysB4wbVqvcmwf",
  "key26": "3ELpZ1B4dSZhaDVTtXyLST4uRmix9UErGa1SYc819ScsFpYpJA6mJxEhghoL5QqmS4ZJinoSM1ec78hTGg28SBwv",
  "key27": "H43RKhiGQJZs1JiH5daMWY1cXVpNH692J9iMCkwGXzgieffESp7KuKUvaEtR1vJmTHgWAiBmaurPzpSZgaWugJV",
  "key28": "2LYZm7CQkLkVcwuZxFbcAKtWDSXB4Dv3MP2cWBvs1teuMiK8hBuLK2B7NKnWS6bXyys1sx4dT7s24Cz8KjanoqG8",
  "key29": "4EbvEVgv9qQzKb8rs7asxT79BVDwSwjKMeFjZBtuVLEtGyHpz8NTMMMoxzPf5xQSXJox7SsBkTKdTdozjohYjcQb",
  "key30": "29JHfNXSXxk4AJ86BzrQvNqShDEyeDkJCx6Gm2u1aAPedVPa6pBpCWaraLaMx24uHyipSGtmKB5k3D4yWavZibYZ",
  "key31": "4VpA2ShV7H716KfV817eBDL5MtHvRTcwAvkimSgTY9sHJ1JEQvF4HeaAvnQH7wqS3XZnaKm7VBRQGJwk2pWiUJV5",
  "key32": "47FZAFmhNxJMzWELgfPxjKfEkYmTHgbXJK8PveLcKHeLHSGQXUGgwUhyyadTHGf28fxQLj14USD3cLYCNf1S5Eft",
  "key33": "36SedNaSywKYi1jUTDfk2BBsGmwrPwzu692A4F9YaTyceoPjyMoc3xyNEQJkoojoG8zx1bBu2ekxeXsymz92nQVR",
  "key34": "ZfhtZudyqQm2LS6PaFVkFo8muvndnSyFsDMjdUB5Vds5xSzNEJcD9f6oo3hACLsJnpufuJbPmD9jvPJDSJuJsqx",
  "key35": "YE3GGKbffAa4UNBBfnEmoyzgpH4UMX9mFimd3Mnotjd5t7CVhESLX5nntkLVNAWcPt6a6sUgL6DURXtfUx5TWUP",
  "key36": "2r3wLfod1VRqHiYtVU9fLTYhf75AmAdzzNHFvjzL75pMiogN8e6UfQK3ApwjGGGz1arEpdGEmBQpGRDNEnBFR2Ky",
  "key37": "kgK6yqwW5BJE1bdwVQMCRsZTTbp76ZBrWBe3r2eG7BtAB2crsJFKxhd2KzLsSTdmXK2yxLhKWtrYHyS4QqAo247",
  "key38": "W97xigf6UGguF2VaiLQfUvUjj8T3YfNS4Y63Z91o6eHnVXUyrYYxAviJpLJDVAg9YDQ6gx5F6rXDNhQWz7JkxzV",
  "key39": "3AT1UJgSnAnG1YLW6w45yuWuzHTRtYt5r4CJZCN2w9Juqn3Mkubq5QkFWJH6kVGNP6VoRWkjMWWcRhnFMjvMuepa"
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
