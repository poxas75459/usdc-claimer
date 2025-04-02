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
    "4RKmedNqZXveFRDABrULwrwUrQSGVswkbmGnNxqaRSE8TPVZ5SRmR2KpB6Jksb8puWgRZZX8UqbUWi8bb8EQc9qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExRX5Y7Sy3WaHKLJjWJXFNnnbuu2NWqrzx2XBXaDVvw45DjPHHi8eV2iThgBebd6TCCWYug75Lo27yuScu78drV",
  "key1": "5Guidu2N5D9DS4wFSBqjjiRPnVZZNaPMGNyakAoVpVJhLBuThYGZpAKyKtDm7JfXvgS6kXFdwWtPW8cMcUQ9bJi",
  "key2": "xmuNbULnuJdbrVQLSjWaNN7XC94vUHoTZnML1VMdQF5vb71Ji3gyYmvvJyidsXjRLp2xDLk25TjPsSBey1Nzxdy",
  "key3": "YRHd7GraVQdJ7N7NGaogTUjPexCXNt4J4WGsq9DTFXqN9LruLnJ3dQZTmn1wMoG9iGDGWDT1pVkmhFuBiR6zn2m",
  "key4": "45NztnBACXYj5dGPNLbHnBeCasiCmYdHTZVSWR2f7cYqvkPXTJEh3iDLRfGZpxzZEmg9ANvz9axeJCpH6ZAVUckV",
  "key5": "5eiJQ9QodF8qAzA1WAq9gRdCG3DguUJpSCgGfwpKoHwCP83ffMV7G8dhjodbyjFKhakcd9PafFZ4KXxYiqyzNa1k",
  "key6": "4EE8UMUCqW7DNjEFwJnfEHgGeQPUPViNxC9hTKQTgCVzgdkN48vbLhS2E4xzivB3rE7hmkaoG9sG5pFpUEM9Sjox",
  "key7": "66a2jzBCFe8cCikvySsR3uyuGs7VQ5kyCzV5aYeDbRKNPDtdu9qwqVwueBYoMv3TNrk1ydGTEAJFhtjyQQjDGD5M",
  "key8": "5tsxvUBtxq2szpVbCs8xvt8ddoMM3xZ74xzeqWR1ND2h4CLx9BFLy7oNqqcSf5rav9jdYuHc7B1kTJRBcZ7cmHqd",
  "key9": "35kiukxWpWjsd6ukiY2x4BaEy5uACq8wR31sgZ2FHp4r3eS849prYTGz4ZEMfWeKasi2u36rkAXpj2k74kaVKFWh",
  "key10": "3Jfxpmdor6SNgqWLXAULGuuPvozLWHDQYhMFPXSqt9UoptxrktJpRvBHzZ1erMDa4CEEQBV5J86SEKNVXn1SjAyr",
  "key11": "ZV7H38wM4FKhYsZzhb5Hq35F7W6Vm1VVYAWQjFHgxQTmYnnhdXzR8F8P5AJdVyd4XAVScC389SHJZcZdFDDGnke",
  "key12": "67mBBDRKnWwseugNYnpqoXcY3A363cFk94kusmLr9qCyzKMqdByLPeAfz4RHMiez9TyrbnwbvaXpysrhwiF1Wvxg",
  "key13": "5G9oJKQFzwV8rEPA4ePfRXPDtvzMxjkXa6VtXgMrH6MofAxFu9nNT66dycikrJFoZDbN9bSMMKzhLLwjZ7AzYhbi",
  "key14": "5oVe9sEvGVKoCC2m1Feevcwy1HhLYM9BdvuPR9N3C8iuXSESCX35dGExiNUEkRFHTbpbYiDEirynhxA4KXBkZbQ8",
  "key15": "3k9mu5ptSLc7jLMQuV3A5attP8uLpoRYFEGJ7mwnvLzwdonWeUim1QpHRjHXFM3GyMqFEdcKgb6erSoCRkM2oCF9",
  "key16": "5EbcYEuWeBjANqAKSGdE7bN7nthA8RPj5PYrSCPLRiFJUrgJ73EJKSeij93P6K1oTJ2V47ZReJE5jRD4VgAVqrVa",
  "key17": "qew2387DF2LZWckM6ZCf9bJfzqfbsLX5bMioXKDdkTuGvFc3CD6hmuFHpzV1KDCvsysAxtLg9zbRPC5KB4o7ja1",
  "key18": "2r44ariNC4SuRxioWGxuFCmDE7NGE8HMWAmL2cfXXQwJjnp6hCckxRpdYSEn3sscqXqeQnKdWX2Ri3UcxxM67kUZ",
  "key19": "8YJ3xfgRApxUJXT39Svk3e3TKcRaNRbdhC6Cy7e8ncnoyC36WqKHCvdi6TuKgTF2RCNpf2sApQkg83t84abCVfc",
  "key20": "64XxgkivXfPW4J57MhpFxtMRgs8Qztqu66DGqLq7MyqxXwRnCu3uvMWEi2nT6qVHqonazL94fEzu2EBt89LJF7YS",
  "key21": "CYPKH9RTyYSihany8rSn8XyB7pPrHN8LBx2LWvxutzQFEVuiwsu77RCGpwTKcvzqa6gRbwEkXPYMrjQ1f1qj1TN",
  "key22": "2qPmTHygdpRcxSo4vaa6J7847TLmZFDZPTDtL99tfs1my9eaipj579oM6x5fRJvyFEKRkb7zAg4bUDetEvLpktwf",
  "key23": "beb7DdF99KzK1nFkReqR8DVfUxWoEoUEqwJujZA3kZH6RQxadPzLfk8pNt6VewWFtZ4vR6e9hghr15g64tegAW1",
  "key24": "3Pq3Lypw1ZTjqbcHKz5ZX21XP1bPq2FT1ehnPBiRoADF3eBbhq9PBN5YdZhUoKajFgqCxTZgpExAUK6HyaQuQ38e",
  "key25": "3xXhbBzMADzDNo9E7R1pSL278F7WAcECMU7g8L4ofaUDUqvUc8JTNaQxpR1gmjvFJyX6DmB15N7n2o2DhXvbdrvr",
  "key26": "35SVqWxjTJiJV6sgS43LuYdGrVxMta9AwEvSkq3TwRV4Mg7C4B3JEooyYxGEBe2zkfqQA8ydKnZEqcvU17766Asb",
  "key27": "3xSWrwb2UrvrHarbv5kZWKTb9EDQhtUpV6nbfr5wmqnQgvLDYYrzEz12ANSK1g1Bweaq7QMa7rFT74Ai58G7KVCx",
  "key28": "5ALS9MejFVRYPzVMJkVtLZgsAYri4zQAogm45VK4JAX8PKpBxztr9onN7yVd2cmAame1SSaTJxqFejZombEo836j",
  "key29": "5SunJjNtv3k7u83fQCGSGw1kVVGSRQnTQeQ6iH39hWZcJLs3rYGcprDyedTeB96EYXkapgsqHRg7zHUTfhUCHcCf",
  "key30": "4CfXXevgYpjXBr6MdBrdmwB77srJ431o7S9GkEBpaLkCpqxLawpLUfZoGXF33K7XDBvVx3zRhmwxX3ftJpcU2KpH",
  "key31": "7HvD4bXbjmTdWUhuP9syoaGdnPENEsoQ544V4WgR8t3so43eH42rcRoNEDuDtzUWhzwDzvSsaQkcn63bjyD4xkm",
  "key32": "5PWaLC6Bhnqm7mHKmgTzWmd2i9uFfWRgeMG8yQA6g99ypjbcxzQaWv7pmtvHuex1HV7qpFNSd7wsCLCL3hn1Vtp6",
  "key33": "4m7HbXrYVeupkN6nSFUcGT23731NdFn5Rbd6mQARSV5nx3rhCjCRcVqroBPfiyVQrFdE16aM941ctesTPv23QyCa",
  "key34": "5VNRsFSXFkuLs8tBoYqxdAmWnhUgu7yn2syqPA58gR1KXvGLbe97eFpBjLGbRMG14SAnECNsa5cZEVrSFQwFHY9f",
  "key35": "5fLUq22D1nc3GvkgSYoHJFAKKtAdUzDZUG14b7tueoxvKUWvVKUmVVXo3eJi4WdgXcqjY76M1LBcMXhpMQ7agHuo",
  "key36": "4hpqCZriThgxCPgbLjQB1HjacHKMqSoMWfTbhizUTktUMZpbeJ96wUn51pSdeBPg2qfGpeQ6Y8SnEhY42PwbZ1Kn",
  "key37": "4pqL9yDvjpuFvSuwnzvJjs6wuqqgQ6aUqPW7smXbf5RES1Hktk84hPW7b6B81ePPq4ZPK2tfWLCEwRD2HasFteVS",
  "key38": "421AZFtrkqWnyaTvVqy2JoCxyP93Ud8KZVPwBHgiqpp7jLTt3NGXXLLzokomC2fU6i9Yuexiwtoj493Ji9Dn2Ngx",
  "key39": "5RPEKrQYawvpTg4n5ZrETamnPtuz1XBwQ9Q8JNNwDqQeih8tbkDZEgwX6XmfXuqEXdGXnu9Wvg1WjvqLEZ66A9P",
  "key40": "5wbDPcQWAqqbJoximY8jYPB8utaeRaGM6kH28fgD1bR8pZaXJ1VyoW7tpTk3KEZ7o7Zaf8Ev2ZiXuaEkcF8BBSzf",
  "key41": "4kVFkx3qihwiGP2P2oSLdhczEKNdCWCXL5M1tqwFpUmUiSvCUrfk7T7YrePjh4Rdryvrus9W1QvxetiM8ceWE1zX",
  "key42": "58YD8kynyb3kgaxTNDBx73PbCXurVq7HoHJdHeb22JZoJ5CuRWeqf66FwtkwNYpt3cwS5S3msMBKrcHKsNckyiL3"
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
