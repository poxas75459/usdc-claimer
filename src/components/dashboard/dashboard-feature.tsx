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
    "5WXyCPGuHPXwkNUEQ8cNvRD4tDkkHBjTLDh7dFaw5EFdpYNwMn2CfhHayUVeqvytAUVXRYA2uogSFa8Ja6raWUwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zut2hgUGFa25xvXyEQkEF644ZL4VJYavS7w4MzjkhigKzi93B1kUMAY1kpXKWZr29Zus5Nff7yjP2ZywzjxNtLM",
  "key1": "NNeMTi4q69Q7uzKPo3PGKkWBzhVYjdcf2d8gCaJzJ5gb9BH6JPx1rmAnweGQ1AAhhGCRFHNPVnLhj9ud73x9VLS",
  "key2": "3g7DN8tQXKwM1AnBkEbk2QHf6vnsaRbPwCaAYbXZJSM6hzRsevdx2naMvgC4kmjKh6ATUTcoPq2rDpeWirCk7Xar",
  "key3": "32cotAvjDbEqTnV4Cy21nS3V3J6nrDp3EoukguWHVtBFZJMKNtV85UVDmJJfUU9s7bEX8y7Uf1WX6KYNMKAYHaVJ",
  "key4": "nkq6C9GgWuSJwHAoPTgYjoFoP3JTkm3ivrtLPf2cuzhSVpQ3wmKmatBo8RJsnEW6y8SoH9YjshWb7EYfM5y8cqR",
  "key5": "3zXMdnHksDHYmW9Rh2Xow9BQNQc2sdm2WydRMqgJVb51mYndsVJ8TKc146angBZKRy7eiCZ3ccvQqQ3dabBzeXT",
  "key6": "3F8UcnKJ9SCvZDLURsHUBLL4c37X2ZsosmkcqfiNeCrJTmtGC4Nu5RaejiVPqDmtjcYTWEqxhgc1n5vgoWbxvDxN",
  "key7": "4y69WoTy5My5KmJEvK2LVbbUkBjyU7xvk3K683RQUfYMQcW7Ns5eMUaxNJU8MEjvafFW8tfrNWRg9vPSmztepAR7",
  "key8": "ppPdM9tuNGR94ievGVpS67F93SQRVeusaZ6nyvMw64HQTZ9bLKTYiDModyhU9CpCoexjtneSsRi2RfpnHygyu1K",
  "key9": "4ZNCvTTrkZkF3oduDyowhmbmf1FkVYvTLJp2Sispjk9jGXcpzdww5MnthjWdkc6j1uoKqzbqZfXzX2b77mpubwjk",
  "key10": "4yfkSoCGpoJDCgvosa8J2rK251rJbvAfiAvGQQRmsdLJxt8oBnCVikVRkBMWs4AxY9Dn5MUxNVJA1xKevzg5Ub4P",
  "key11": "4ecmQwYuDKUARbXt9kjeq8PJrwmDi4TB8UbbHG1pi7pwgfwYxmub76QTmfKRk4uG5qPbsjWXAB5BCCLXbiHLW8Rf",
  "key12": "4pYfq9Su8MhypzEu9NMNwQsokJgyVtWf8c2RXovtVF3doJA26zEpZxwjEWgj36GAkcTYKkuP7Fr8CKQ6i4EtrqM",
  "key13": "3GsMk5JJhUCZqTnxTT8sugyPTE3keMtJEJw1SpDodR4PYQAauD1pjMYQvpVfXHhiwF3eHb8SVYrS48KAcPxruXi2",
  "key14": "2NSGHrs8PmmEdPcCAjatqg2bQk3LQikxAV5i2g6px56dMx6kteEeWRy9rXxy62TeokseKeypVT7SVETTzfFz2mod",
  "key15": "3q3tpFBGdt6jTm4tWny4hrMn5sdRyQwoXXVHwRWVggNDGpfp3Z7W2o2WW6gwTchQ1xv3DwSBHY7CYYGP4y2nwczN",
  "key16": "2KQ4yvQCiLGrL5XfwkCFUjRRWaVzjvsDLrZqXcj9E13EWyHfijNX5pxYK33p5UTHkbmYfTckuzaZ4TtDYGngEcEg",
  "key17": "5JgbPTCSbtqqyUZBMbm63BcJ7eJ2TzkrXR5VG8x1sQuJ1Sr8dCMuJViAsTfan4vJ2DTaVsDtBggp8JyWX8JoLDGv",
  "key18": "2eWHAhWHNJJUgBcTzYy3akxfbirfG3ypnvBGz6kSbqm71gXU5TaWk38XyacviBofjjNG1WujfE8UR2cDgugZ6htu",
  "key19": "2qe3R9PYUR7UWV5iqZsCCGjaP6i8uPk6KbqKnKRhkKFqLQKkdoUmCnS6LXicaEpw1V9zozLqvuBNyrMzycepoRg8",
  "key20": "4LYxJxiCkFVDJas3veXHnTcdgRwNM4RbsnbQDT7gWkVyBfiWYfXAbWVWe7SivdbbLu34k2qiZFvrTCTAZgnv2fhD",
  "key21": "2LY1DorgeF7ANh3QW4AUQdPi2E8jZNHENUUf4eNWCUY9Zi4jespAZZpZz8PLTWvRCjHUYzwQTgvu4mmUasak8wwk",
  "key22": "5wv6CGJGhQ7EsZZsbNpgaPUj4P2R7zKxufQ6t9hGKt4seVhFTLUwx9LBTPZxxuZyJz9EGbTioUr9i8C6pSznGFDG",
  "key23": "5nYXtHHTTi9GDaEh9LVNiuTTCHEWtCfS9yywPb6WCWQpw4ewA4f8QzqeMPVqUC5YE7E7gVmXNMmggLu9o9J9VWmS",
  "key24": "2EfUVr5NtUfTRDz7ACRVi1Tr9MF5MHyFgyNaqU1eH3NEPGU4ABW5Z54UwTkfNR7wfzp7sZ1pPBmF3vzUKBttBEAi",
  "key25": "GGiW3z212MGLsaM5JP231LbtWm7z2CsN2XUDSCWKn5FyFYcVFDDKmCGTTs749xGPd2AsNjeebe5Rz7SrCWbo74T",
  "key26": "fpE9GqndaU7eot1zZWqri81cDe9Smvn7P6zny6u2oLwEuRJVbyZCQyfwHFd76sgdBpeE3zQTVSYRKh4wRZVv69z",
  "key27": "5PHQgYqJEXpESAY7pXkKQWBB5MJJQEfjRQf2DgaXbp5ns94Ro7S6CwZmKppftXZTEu4CWiYiXNSuLwfs6jNNeFS4",
  "key28": "4aj8FfwCemkmgTdCNtdRG1r7H6zTqF22S1YqcqEBvwh3DVvKWcbYv6KSaXguR3Zz37xCCgLzo3DWsadtgPfeoBQX",
  "key29": "5FsrVA4b34VyneNkdodGPd5U3V7SunJu6NtaMDFUQCNvPZgp51vSTG6ocuu4i56YCgx89bfziuZcgF34nyMqxiLQ",
  "key30": "3hTP3HBC3Tj3CWtgnZBFMx2TQnpNdDvF3rTETtGBArPGhvrcGZ6jbrRn7D1TPKH2P5wLtEjjchUjNZ7tszXuWUqS",
  "key31": "3KnZLNpcEaK1viaPByd4vmCTcNcGfRTYgouB1v4TH6aPy3TtoKu5L6psgsjNCH9GrTtVjvakSWwJgADpFNg72ASJ",
  "key32": "4KsZYh6iL8cdh9WMMJegGTMyhNGqYFGvY9uwJezWvUMxziXHYtfLEX2qLnqsoNZaMarmoCK41pHE8WvS8VP6CeBi",
  "key33": "3HjCNBtQ1HAL4GcC3zYD9SXhNpGdZPUUQkQBHA6RDsx5DkpUHxUfbEQfTfEE8Zx6JWb9CSvf4nVU24EqVRj2HqaN",
  "key34": "4WEgbTiMVySDQuXeDoNMMmKEC3ADZXJyYW7Jzn4ttVFGfvhfNzn5fvhMEGfXvkqmdqiung4hyRwd76guWvyYx4ev",
  "key35": "2pAMWFfKwqUQ6DCRYsBymKYtGoWtuSjkzFt5J69nxreVUywng9GPPxYQgMvrochq2gYLz89tvfnDVY4ZSkyGmG2s",
  "key36": "4DQEpG3ym35BsMenGkEYLS1RrMQGzHYijh2Zo4zyyFv56N1b1oG7Crjp7TXNHyA7yRd6CVvVZ2nAV1VZ3AEFkvaD",
  "key37": "2UXPkTm4s3PkpwCTzu5XW1yQhqVDD5ThCbPxJpexQpL3BWWSTxD5H7dE2UaF2NeTZfKYfjcbJ3am94SYojEGPyym",
  "key38": "qKGP4cx5dunqFh4feqCmJbuhSBzkwwkB5vxgZt4r8bqk1sEpEv5pk5u5yw8DUwibxeN3sMPy5Rd1vz71ThiRpFb",
  "key39": "2JoAbQM9Ez5tdif9sFRmHA4XJkSyRYQbf8Bcs8CXPHyspvNxgPSvmiv6Ah9T9sMu3aEbuz23KtuT52AxtGLYueoH",
  "key40": "5LESNjtoNoLpxAAjiaa8BsZxRuP4A8eiAaCZbJ4tjRs3PuqmH4qHmee2nE5Dhb7vidK6gD1pCfkV6ZzxnhZqMVtk",
  "key41": "3QSyJqNuzFGJGQRB3soRsvs2jLrRVguLNRsnPe73Vo49vzLZVZh3MBwwa8bzFZK7ALzZgpNuzUDdZoDL1eA9D6ww",
  "key42": "5ZRiMbFdXvtpkbzW4XtPq4RQFbQckkEiT6VGGTPJ1oRfq31Xbk49L5M9UA2oMZdSzkFayb4ybkG23wuFeQsAxLEs",
  "key43": "45mLz29Tb8oQhdntSCTQXXkUA67pMpqDJyxi9krreL1y2pD9wbgru8vDeWk8RwTcTDy1L2a2JkQhS86u9gJbGPzc",
  "key44": "33haz6egcBNTHPQQwgKWoJfZt4Eig4orMQkMBjE1o3sqR1DP39qnubrMqLw2V7d9fzjZCv3rVoN217fFBqbrfXKz",
  "key45": "tsPPJNQRT3vp7hFamzgFJXBUUBcQFL1k1qhY8KSpWFUgUrrpjF36Cs7w4QNXZ2HCPbeyem4UbTH6CPy9Q8H8cmF"
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
