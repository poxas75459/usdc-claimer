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
    "2CNbFmwk9pudQdt6NkiSHuTjekavrg6Z3iDYkZMpL7YKJpeevU3ncCC9MGykPu2GZUteVCkQSwTQgKVVHx2zgDm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iRdDABodgafLvNguS9DW6w7J8TCsh7xGLJaZngxZd819cmKsfe6aBgtRuUHdATFK2mXBMQvmdkfXoTTmW8TS4q",
  "key1": "39rcq4Ehx6hQ8jppXiag72JZzfKHEAA6sQC3jM8TZUNfTBzvszhtfFEcGmXR6pDQ34JLzuQnxufVtSdgjLEqdJsi",
  "key2": "ZC44ceS7hP7uQ6z1X6iPRe8ZXX73WAWyZPBYXNMSNm8RZ4YMCH1Ua15CnLdsxfMyLUXoEdcoF7RTt4kTFDCrR1a",
  "key3": "4tsxThD7sgPY8H7NorBqDivjAQAuEZoWxSE5teckVEAuiHNnVgLZ786U8rTVHV6Kd6CihaKegodzeSvE5gyKxLmv",
  "key4": "4jR3cMtQuQoz6hoC7xZMtrpBZX3UhqDUNVTkrnU5ZVEy17BBHMGxxGMS4VbwD5HgHdrcSpTHGJQkhhTcgUMUJG63",
  "key5": "2McrySFryHDeZ2BFFQ11N1ghGrpWwPDhgBfpaTmVk3tEfuRp6UxfRUULASQ1j4ACpwReP4HKZWJjUhkDLA1HgLLE",
  "key6": "2bFKR7s7dk4CCvVf1YrXVTRuuec1eUTBWcp7RtEnwJBSxv4hWeoA41MzDFNVxuZpcVyraaChKxRhPpt6t7NPtLfs",
  "key7": "5nwt173D9a8cfLX5h9hPNE7DtciqmkxsJjGC417NS965U8qob7xQKB3gKuDN3LH6GiyuXbChGruLS61nQYjUz5fN",
  "key8": "RMtTT9C25PqcdA7jmf6B29F1NexYH9xK94Dza4MXdr2k9SpZtffA2CCCoMdp8LATCsQSHtZL6V8DUqVkHHt9ADw",
  "key9": "679FoRqCY44etgysJZmvStSgGi97shy1DunMdSS5emPSBDhH5axFmNt9b9jHEA6Ggox3CMcsJsRp1E1qbXhJgazz",
  "key10": "31ipj9bKddXfCqC5hsuvccWvv2i4mJ7Dwx3TaP5QLa7yo3bsM3zL7bNAUAtxSYaA8nrDUQsaD59geZmYa2D3DVKr",
  "key11": "5zrmP7oX3BsXtLRaXtv5rjHm1JdU7EawG7Ufqxe5fv3Ng6edE6MAzwVs6j7kD7Er35M4m3gseBNTF8EEojfgJCvH",
  "key12": "3aMH9rkHt85jnGDe6B2Vd2b5UyoSA6oEid3WUCCnkLw9JMbQacgCn6YGGvK8yaUPJBEYAfT64wQW2VocAvG6129s",
  "key13": "3uMs2z3zZSFyvdQVccZm9E1QniAVHW5WhCcWu3YUZyM6XWvuN9xHYyDjNKh7X5UchX2EApCMKTfT8zJYGsz5C82U",
  "key14": "3dKvyBdQXARMYfVwr2Gc4jjXLvFYxntJDTMwjifzsgZmnU99oyjhyzQs5vHqGFw7DZQSCSdnSKA37AotC44zjGA4",
  "key15": "4GFwQu3yTbYh4rA2PEsAZVBPLiUfMcLYksvsK4nSiNV5v4VZZVhVfrRSfkzoFDsPXaRAVPc4si3q3Rn1U3JXbQY5",
  "key16": "2apwgHfJEVvwRimZB91EizTNgRmh8ZBdbC2Ug9kZ6egiMhLF8ohUQ4SzmAPQQSSHXgi5fmaTSmcYGEXuRpwn1jN9",
  "key17": "2S5qX1cWFkueXcJMkkxzsDCZVdgKQPCzm3t79sAKoLhaAoCj2N7E9bXyCWDWJSg338yh8UnaAP4JUkrX76u88sG2",
  "key18": "bBdGhUytkuWJbJ8Jnamt4J3anZSWiRZoGiB3YkRzJAcxo2v4J4hywPKwuFd5J5fFVFjeMYdnQptC2CYqCFSCWaK",
  "key19": "2KNRA2FVJXLtPBSU9LpXwjnnaoAvFVmFHp533wzNAgx7pzuSeUCU3aTPhgSDsS7MfJmccLay2YzxLxPsXPA2cmuY",
  "key20": "3tsmrdnC3eWuyVRBaVXVGpk3M9QUZyPLcrkGuTC92uDQQHFKKqJfWBH8Y4bHeFj38u75hRoNnpwPW1HS5C1CzWLj",
  "key21": "28rMW5EE6AHFYAas9a4XEWHANs9pc4ruwGWiTH4p4UFXgyomcXxDYC2b5hRqntMFcXqonpiF2NAEjKnbhF9B942V",
  "key22": "2utmBL3nV6eSb522rT2j2y7WoDB1JPE1UweeFxNJHn1bw7uDo9Zo7McDyUfKuXAbtAC39QbVXiHpm6Dn2BcaSZ9r",
  "key23": "GYPEwn9nRU5YTqXdW6wVQA98GQamFEWFqvaB53eMJQCgUYhP824FdMWGbDmNv5biDnQWcxkk9AfznGyS3CxfHjW",
  "key24": "3ajWj87XzAb638Stu6aFmcugSBhfHykEQAfJCWiJfuP3RYdTsAy7PdtEYmKyzf7ZegqpMpU3qAC3AZkKCuTGR73W",
  "key25": "2CzX35WqmrNCSv3viDeAqKrrS2Skyi7CR6tFdsA368fDgebRooXE1gnaKjMYVUiTyhiPUF6fV12vkwrZS592TpN6",
  "key26": "422GCvRz4vUueMVWVaSLHYF4EsxeBEd2Gr8ziFW7di6Q4Cjh1bHJVfLtRWwG2j59rgTy4gDK5Bmy3ubnjpM5w98F",
  "key27": "sjRAhUSDc1MBebVxFnZkEUbyqm2wMkvM6R3cGKWJ8vjt5mAWmsjXKRAjRecVU2rvqj36gXp7UWkHxCsnpumhJxc",
  "key28": "5vQgNAAMBf12BKyqsNyXoeKK3d7thiCvnGjJrouXc8KvdM2GHVNXDwGKv16X5rQWYtawi3NHtfSqtH7FTQAq8gwE",
  "key29": "4QcCbrMUB3ebB1e5G2q5mBZcZu9r51h1GVg7azvJhaKptYhQbiJMPmFc4VtFjfmYpHLN8T9aDL2nuhgTeCEufjLk",
  "key30": "KC1Nf1pHGgm7AKAqk942YU3EjPnwZNYoKzeQsrFqA7U19CXKhRUqDoUSLC4U3hM1oeVYLcH27xL1kcnQW7ofxam",
  "key31": "2DjeRypjBQsTEgrACQnYUrtehuUmC9s8hsEzcX4Vwrf1ik38RZe5csbWjJoiAfWYTts8Stf5AHPsbBdJ8CSwMPn",
  "key32": "3gCwjquikNq7LXgK7Ysg1UddKvaw9sMWuFaYVgfHPjdtifFxBgwc87coDXiSp6Xe3kEkhSqkoTnwHR6WyDW7VF4u",
  "key33": "4WkiCNxeSnrxYtkR7744M22vVAd86FRTSeV9uX29z4jn48FyKsVBYSZmQLXRyJEwwtPN1ecR4ppRXNAUWp8osCaT",
  "key34": "24UKVvz2vFUjee5x8htXwMvtojPTGKjhRyL62wKj8BeeHDihM3tj3Grxb5zMKqW9DjSLvz8MwVCUH9X6FBqJcNGo",
  "key35": "4t36NDGy8YADaGnYrvTXqCSYn3VKERwY1xVwRvYY4baQZrRuy28eazCyiFJEPQS5DAvZmNwpYDDF2cwoE7qHQrST",
  "key36": "49JXdqNaAngpCwUjyzCXZ3U4Uqzb2kVhMAKQR4tjZFST2nQN5GZHnjFvjbjCWcDRUgALdFHm7rbxqdGJzHaDnmJ1",
  "key37": "2cYXM7nDaGxfyCAV76gyrdDMnsCKQW5HFPEwBrmaxUQLB9r4xv1hCNCNm4TLWb7jFhDdSLAaEci2QJkoErtAenFn",
  "key38": "2ozehi9LKTpUwE8nJ3bc19cLEBrG87yN89EFGJYECqLJsSF8Pvda7YVPAM9E3yc2hhnWM6KobnZLeoXPq7YvSAGh",
  "key39": "5ZY6e2xxg5XDfioSKAi2v5WSve3t7ztLsBPUQJkYJeZyMcdGdoFVZA3QtKsF4GZUw2UQXUfdg437w8kjh3ZamLMX",
  "key40": "43XuYr4UgGKnd1J7rSLrXUpYVMPZSHDvUWMBcuxgtXUL3ymJPTWMdnbhXyKybAtcAkezY7WFUXRFX3p7dFSDpo3J",
  "key41": "4t4B66CeuvnBtN6SijwaxfiXb8S6FzZegEB4XmdsQyhX2iToRkmDf8oFPV6fbjbXCRLwMXnuUzBKeQWE5rGtCjUg",
  "key42": "4touCUR1Byfq2NkwREZzufhYCgFbtpMpdx9tBwD6ekFFceBPLE4auGPMY57q9fgsBmn4zXpTqfhUuDA8HTYip8w7",
  "key43": "aAuFNLvXeisV2ksPJZZAtxwWVtKWVFkpjGgn5fKhkTQ9Kfrk5KuHY2k3DdsvA6x2YfgDJf6s4NnXkRDPuJwrnhS",
  "key44": "2NgNArD5EYuhrQvygZS2arf9tEWmH1sWiXcQEz6dkkw3x3L83ydiHcWzu4XRQCi57FZdDoHgpHNxnHr2No88HE5p",
  "key45": "2Vjb8UAUohd3Mx6vi5MeCTbWt2N7uadRmFWv7HbK2gJJsP3NJ17qYxwSKM4s6oX1drUW5NMSf53MsNkDVVoryXJL",
  "key46": "52Sk8NMCimmdR4LAi3bMFZdeQMdBH8cU5mg2mPZTjaxRcyP2Sna4tYqvEvV2FZA9fU9btLQPHKMb4VqfaGDmdhNj"
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
