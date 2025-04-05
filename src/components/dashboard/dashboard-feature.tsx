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
    "5CXE5FGenbD2SJxaQncx1cGLExeiwAmHjovLQezC9ftULpa6UmVm3gbcpuTGqjBfBCXYWUo89gz4jSMw7dgHR3Cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hmnat78ktJ9TE3gGEYFiufEpgDz4xYhaevwfmyU8YzH6dAwaErAuY9ciqRxUw5jC2G3PhVq9dYXtFfG78LTpxEo",
  "key1": "488cFXFj9S21rup7aBC9oTS2Qq2RLgAgUsgznyLLRcTQqmW1F2cNLXpBaxd9khjykhn9oBedbyJBsVayN58Lfxqd",
  "key2": "VSpxwSuFU5ar4ACWFgCrJwiLJ4rg5tw1sMBZW1yxJXTHLhwc74FQX9aAiWkqWVBsi1F6NtXZsteBv6CZ9eESoNf",
  "key3": "2xYMnWeQ2uyU2fnxiJLmDWxZwXga3UkBYhzQiQPgjWXivigBikEBt6Cx464qwi1yU9R1aHufKKZtvu4kzDrpUj4g",
  "key4": "49Zughja3t2GTNeTa3WWhXjhmMmJeeYyhfgBSQhw45WFaDgzrweFSWVJfLkDTm61nbtzRUDmkaKQz4ANLWWG88Aw",
  "key5": "5oiyE9tX2eeP2hWWJup5zHSjyLDMBcz8juUm1HnWktBJ4AvVaGAEMpnxCkGzWukicsiexqHngyypVpmqUCCqdqKD",
  "key6": "2bZnDhCSPezRE9DtVPSSX9FiRm9o4h9PxXd9VLDiU9sPvT8jCiFs4A2rsLuKio5pQVyHZw58j8mGEuL5DD2nZ8dK",
  "key7": "54b3qgdoFjvHsAjtM2EH8RfVYmnraxwf8xR1n98Lq43Co3sDWDkgWVfiL2S6qCcgqUSKiVqPQ31r9m7v8URr9EDQ",
  "key8": "2zdrEe1nXKhL72hWij9ssWwwR8SprKGTgEDv8QJZcNPj6fpbfrUC473UgqFujQTT4oUowUkCHkjkL8i3gBsfdHX3",
  "key9": "2ofYV9pW2ibuxsQNUoqf8gRmbkTcZQPrfhBrftr8Hxm3ieq34aCyJKtZc34SV3bhUVC2PmGzrV9N99RsCb3vS3xF",
  "key10": "LKU5nBM9kCzPmGdNtqLoKj7K1k42cg3ckr3116HxsMxMomJbroNfbLpcHaHNCN3CXXjcaevRbMJJUb1NN5Knh1g",
  "key11": "42RBAgcBg7JFw4Pb9ncAYLuZDv2qSxdTHtmSJnHvp53haJivE5dUuTD9FzcrJwe8CzRzoimJGP1j3utDAMKbkWyA",
  "key12": "gdKj2tsZ2BWLxfp6rKoKyshroaZcYEwmnnapAzy2DcQyYn23aBw82PZAaaAuVavYTGEf4Qj1c7pBP4ogbYaTFhm",
  "key13": "4rhje8pJEh3YvTHdcAYi1JbCs1fS3pbepDzBWgKAmBnEXZQeQprwnj4nCLpW3US9buZB3CwjWt3iRjweajoqsFUq",
  "key14": "Pvt3C7nRQkitWb7UhTL2LJAZM7eZbqP6YGk8tfgLDKxDTT99VcYnEni5hAwd9k5JEaJwJ5qrF43hd6prWPBBeYF",
  "key15": "22MX4RPCjvJYW5qieMnRmhy13dGZks7L5RnvoQtqtteRMat4YnbfhFHXye7NAPnbssQhg46AeF4pJhGpzx7C9cvN",
  "key16": "4GmxJvuHfJw7miQpf5mWzvbm9gMjFgqL4aLFMnq1hG1cLUu1zUCSoaHZePVQrb4ftEHGrVncqCcsCxti1t4f5krt",
  "key17": "5GSTnGjiapHhdKna74RbZBR4waD9M5GgiGS9gN7LGhw7dDTQuouvw2Ty2XHCAkLZVr9i4vebBNq893pK45GnKSYH",
  "key18": "3DzJcTKaBGLSptfSAFpTcPCKEiozze4TgjNt3o9fQ65Qz7u9sQRuhtGRY8LZUcMRXH3DELUfE9UysvQTZuoPn9Aj",
  "key19": "3BUL5EAvgq14omcZrGaSizy9rdwXt5L5aCjTVYtaVVBqMeEeRgZoxUSeeki1dSYdmZP54FxyiPZ5qnctMPDwRBXH",
  "key20": "5ksNfqmGDDR7rv3ZvNJH1X2drVC8KvawHF1wjkMgsddER6RZMdarC63wg292VQo87hakU2zf3SiDEiNFzvJiCEcD",
  "key21": "3EgD1xck7xBBqjKWAcdE6AVZQK59b74NJ1mNu1LPyRLpkeEHwfpc8HyTqHnt8oLicYeMKBMLyiWyjVhRd4CwyRH6",
  "key22": "2eezs78yNoM7evvtmRAaDo2TMtFKatJnbviusmix2kdfKpD2FpcX2SsJyzNyGUoXbv8Fk5GK7X8ZTg5eb8DRQZaL",
  "key23": "3kcTqutWvncDqrJ872xko6VKgKGrhTE8gMvLqmiWbxLbt9iU8XCsAMwAXJuvWHDTTguoupHVXUTV4fdkhcfXgcL",
  "key24": "3sWiGZbZuQNwA4YWG2Md3cf6cLcbAojm5tdJPsE6cn5Yr3jgpZvFyxZqT6xZ1kJmHvbfjw6bGZmbV1aZ92xjsZvS",
  "key25": "5y2sEX9HtrZRz4jFhjJQHTE2E5cUWPjBS35BZpuPyPz3shsB8VztH8FFjacfu7pBSm1XPtf77E7fZLvF3w67pyKg",
  "key26": "4hFdo2tY3vmfiedSvkqfbUvUePrrAo2Zp9Uc6HdhTn4yzqgpRcu6tnwFcrdY9d6sBLdyZNBg4sCWYFYFMmRqUKXd",
  "key27": "5ZN4g4FjWLG8MSe4jubg8o5jf5d9aLuzi9812NPR1ZRqxb4a9pwaKQHJtWocSvhYNMKAw7jBnQvmgbawhaKwgua2",
  "key28": "4QNMsE3jD5o76yK4xRp3jmDViCWVzz721hqQWCDEV5pGoRhqvRHbJjsphJEwceNyc3LWxbL3zGLLNxz6yGKQvYcp",
  "key29": "42F8AtXRzEBKqX8caoLivVafN1YHrZGW9GH4VyxVX9tbsfHNjWTMiCrYSr4BXzzva7a3xKxDiGHfjBHxk27D1YZQ",
  "key30": "zcUUMPheucKXf2yZ5d7r5xFPNXZzLEjfMBxDL413gqZPXtMMDQhamoPt9AkrPsxTpiGcB8YLWTCzg1nTyPffvx2",
  "key31": "2NH53bYWUYQjy4yBeB1CZm69zfK9LgKT3fLTPpocdaWRPPbkcYKZ4846PSNBCuben4eahGQRttj7CvpBZP9htACd",
  "key32": "42bh7grGZtzmyZb2mFyQ7gTahooTc3Taf3kqW73NcLkuuRj4NsXhMmQvPsxJR5X14ztKXqLmkqyz84xk4RQvyrxS",
  "key33": "r4y7FdkEq8YQkM4jEJsbSn6kaoLKE8kjUTq6DMSxWSaXD13BzFrczn3tdwe3jqMbVt4dETGAdDtcPAReq6zDfd9",
  "key34": "T59qja6iJHTYxEBAaWXh33qmaPFqnft932WSCKL2WXZGmJLXh1EcfwKJTmunoinGMCHyDA2CxneEtsrrAE2ghLU",
  "key35": "5o15YkT8zkp6Ra9vDQJ7hmyf9ecC5hMHqKwygQvHfCdoe2W1ufCmGKK73xkg82vVW5eYBvr6JsZqfG62LQHXEkHX",
  "key36": "3HLWoBV8k8JbY9KpfXawt4LqNSYTv5SPo88CuhsXQ59YZFWmqMv8B9qFxe2osxBXdimdfRRKAaqTheX1yhDAMoML",
  "key37": "5WFDbMLZoB991DjsuETnmv81isEXt1uJijtjDmHSKVfc8tA6EfeK2V7rFh8vmNdhL2jpm7q6tZSDHf9YHu6Cgu81",
  "key38": "3RTEyTUZ38XHDoTYPcNtym8c4XZnkj9wqWGoKorNp6BGxjRsAr1EifacJqW6HTS7HbHNQ6scxsScrkRoxCgv18i5",
  "key39": "5FyfkSMzJaWzfgfF4VBCY6M5VRPr2xoiSsRLrosEtkiC2ZvavDXEdWLi7QJ5bThQgBhWfMvNgyXxzuVeAqEuUbNe",
  "key40": "67bckP2hTs5tqhA3ZdEzmFAUfrhzSWNxcW6C9s4qGCTQz7MSoTtkpZ9h8apzFPHphVBUS48r4zPVxpsUBJYw72mg",
  "key41": "DPS5whwgdjVaT1TbSuaqySQGDWXGxZ6MVt5BHpPbcZtLGJwwxEKBBSfg3G5faXavxzLZSU2AK1qykmhKyvzNV5r",
  "key42": "5FkxrFtKugKVivrrAJqAJtrfw7V3nxmskyc1nRdc23DQQ4ToihaR94ZYL4PHctdaKJLxNMEnG52ZHdW5SsumRMVb",
  "key43": "um6ALLPdqVCr6XdwMMgJDJkXQy43Rm6DWiqWJVNCGeQuXpK3AzGq8aeZJTNRQ8ah7tBfTBicdUynz4Zrxnb8qV5",
  "key44": "56FAALsf9t1kwNz19aAJGw7MdQp8c5cWqqz6qnxitJMC9aW9bURyHbMeu3LKr8yP2bp3wKc8XottFFvHWrdWssy6",
  "key45": "KXakuxHPCSuW6TqNLaixZuABa7r4U1uPfgMUSfbnQEKuNXiCnfFkSC2MGksHUMka1ZRbWQpN6kiLjGRcHVoY9TN",
  "key46": "58iUJxd5j8g2umJf6peFTZGPH8yhi2ZE1FV5jUSpzNncSbS3FUwVnxsXH1CxryX8KJhLifa684LxoLNTB8VLKuNK",
  "key47": "3yxZj7fMrKRXRpdg4ECF8RtmjYyQvuua6fz7wnB6YNev8KfMjpfvV2vKfbuA78xWR91W6yKLAfnkBkx4PE32GqE4"
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
