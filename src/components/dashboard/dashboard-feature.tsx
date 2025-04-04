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
    "2po847L53tVGGUdxHJSeYvVBtJXe9KTjEyU3QsaNQ1UQiuwDkPFRvffGNQCLJTiVrsDjcF54MgSXX14Xu6Xf4ve8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PTaWfvq1m9yZmBmRNXJZaYgozR72rC4Z6VW6fGx7Rd6p5W8nkK1diW9BKJnG8hYPpNUNswbUCpC5QUhV4ebbjRt",
  "key1": "55oLmAyZghEdsqr8ACeUTbSXootBwJNGQfQDBWJ4PHSrDC9qEUrP4oYHHpMijQuG7riytQqCa4szhZXYE79XW78",
  "key2": "xTVbJuu2eKbHNtBXgeyUs4NNEiewdTCKkwD8nCJSdsDET5VjsyeQMQGywbiLxnqfbkFKu4Qq9ohh5BDrzArYXvW",
  "key3": "3FDKBJbBFb85HiD52Xvj1zAAPoBzCbZug5oSYxqu3hifmJeRQJSe2ruFfKJ2RGmiPu2BAYJW5Ex2J12jkpKNbGce",
  "key4": "162nbW5D1RWzX9oLCysCkuJQwSwbsfuPspySnhyQQTPVbVf9KJ4n3gsDoCEuzziRV6ZfnamRB8iEdYE7VvkuJqy",
  "key5": "3XT8nPscPASusqnkz14RDvZzP7DpH3n6Rxh5sUzSnFezuZHTJpN7G8hW9ea9aoNLundbyZgDR7C8M8nVmZYNnCGE",
  "key6": "5RvMvspADAnoSpVu5eV7AeiC4QJdG5EovK1N1AVRPznYPGenv5yhEosTh8BCWVRv3uqADyA4XkX6YE1ZC5UXdUNr",
  "key7": "2FAvGNH3aAE3XWwgSC3eoJg56ycfmZVy7JfocRLwkAfqVTPmCLoJYTTbvX1DJQX9nLg3ryqqDc8Tyd8viMyupiEn",
  "key8": "AWVbC9eR3vecfJAAWmQj9oDwkQqGQCKRLYA5Wmy9W6cg9Aw8xmFXAPA9VZTBNNVMMvvAx2Yn2up33fa3FZ9Lyvj",
  "key9": "3avQwGbDh3r6zb2Du7Awq1xfGP2qD6yDzHzxhFVRDnJbic5MpsoAGyYS8EHHchoYJuAYnrDpyZHiLzgzraPkP9r9",
  "key10": "3AedHxkzeHCdE3PkxXJDYbwXcz4EemwZLjcZ5UMBJXhgQbHrkCerinivBYeHMt4sys3eh4tPqb1n5Y9tW3vu9coa",
  "key11": "3fHa3kvPrjoQ4dzoZnGFeoeGDxuLsr97B6xbgEibFSzKzz62Abe926rEQ5xcpBsjryaw1aAYp5whryQV7kF6yoGu",
  "key12": "4iaZexGZmVpPZTns4psZX2SPjKD5y758KzRYZhDivHymF4SKr5ti6MY5vMkoEgRgrAaztokuZGsF3K6r9VE35P6i",
  "key13": "2HLiYMyfrM7jMPuDFxDXBbq4tSHp3pWCWMTNk8n8nDEvrsWrbJMg6yYBK8Ge8m7T2YBb5cePBcNjecGiaKn4hwxs",
  "key14": "2cpLHCtHT6VUy4NpzjeNzojTU7xjoF1qJnMbH7n3gVsf9MZebNtQBzj8qFrnPeyWs52urAHZaf6PNDaumJnxggtM",
  "key15": "2s5kUreD7XL1U3quAu3KPuGW64VmQh37ohAneNEQ6hkzVjfqYa4sVCoL4WWUAL4ZHU8UUBsjm4P2KZbaUa6SvTaR",
  "key16": "5U6doMuD418y3nfB69ktW2BqFTTi79CJ7eghExpjVhMLMRigpf5CekjpkWvmsbXnCWA9GBricVt9uNjshii7GTeF",
  "key17": "3sjAS5nwPXH9K44YHiuvpyrJSkxVBgsjwBooTQg2qegNfr8EL2QRQQke1cG6xDoEKHnCgR3ZJ2pF9h3sThrETGkJ",
  "key18": "2Ee2PBfBnNLSkz3ZH5RL3pZSRUo5gvWqDB5nAwQcgAP3RskBhzwLeivHoM49zZif19v9Ru5FLH4q6DDhZBnZLXmF",
  "key19": "4VS3N4ejnVmPsJgtVenwE5AnyMM8sUTsCkoaJzv8iSjNq82yuc7R8h91oXfpAAyzWPwp4tqdhNrkTGXG6KvSmVAe",
  "key20": "DN5GmP4FN1VzX6ipEzKtHkxaa1cvSXDBVQJHS9mVBHCauFv4xdhaaHUaJvhaUD3KAkFaFN5ecvogdEC9G3wQGch",
  "key21": "3ztUhPXJEk8zLbFxhJAJn6zZDp2txtb9ujTFgcuwV3wAe4LG99msT9xPJwhNJawutkUZz5ynuSvnhG22ENCpeHFq",
  "key22": "4pLDDvxTgXzXSCUuVJTRydLy34mLUu7BopmxD2UNMAXTAJYUHqfW4FoWZ8n6GaTnBNy6EayxHwGwkTDPeqbPyb6X",
  "key23": "59guRX22943QFQNZwfEdiKoMRSttRGpQUJ2d8NfbDwmuJP2221zQfeadtvJCEWxgH81JT3a9Gx3UUjUtRw2oNU1a",
  "key24": "5ZFZgNzqqawYcRpbFvGw2xMLKkMmBttYnEN9tE1ZPYifvFisS7oR9woLHuUZ261aZL7uKpEyU18tX7eQ4ypp2KKz",
  "key25": "58X5syaXPrvuc7f7w28mEek9pxWCLA8RTmMmAscz9kET4qnwZozgC3y8MnDKJZjD9XNmqnMeBYnKdfvddgHrtVdV",
  "key26": "359RBpdELXoj1crCXduvjhbZw7ZWef6LXQz7wLa5sYB5bqABNKNvPbxmA7HpVi3kkkXSneDhtR15yFDApKpSFAQs",
  "key27": "2He25QG9inSiicERFaCuxiE1Wfx9LY2v3AS2KPQXARvgN1eXdPsyGrDEzN7CUddqQX4iUfPYwqR6yYfwqNQg567D",
  "key28": "5Q8ZnUwhLxsRcnyUJL8pSdbNUMW29NyBgAZ5cdVUEq19knnM3HrDhd2SYn9yobhjG59aEuRGisS2F37C79z7Geex",
  "key29": "2gsNW9eN4dC2UREHzp8rvqbA1Jdg1zw1nuPv1TdUxgmoKqf5638VTj8mbfUXKmQgdqZSzsdBMF4E1MkHuns3mfhJ",
  "key30": "Dv7hv16GYep8hamgiiKMrYHwHQ2aPpVjJ1YXUhTK5HfYagDhqxUDgPWY7AuoR3BopUV2tkk5i892wi7XDFh3ED9",
  "key31": "3BfKE837whbAHzx3ME4LhTVqN932Aqz6oQnKCSjHdmrEaXw6zN6do1mP5TeDMen28a9zpBopnYPAk2ygxnDSpdb",
  "key32": "418VswJpg4vUUe4QPp8xtrp1Mpg9aeWPCX3vw37gBgbyagpijTLq9yKc6NDyT3uBEdzzizSqQeT6EniqH4ycvAQw",
  "key33": "4DfKuXVg24wPsMATjYmUfHTik5GKLuSMQMEvNB9SpCSm37G6GNqs79SwP4t7R7KR1gDpSe7VUdoChKGuQwQYbG8X",
  "key34": "2z5Km5cTHBMUvSMkf6Ae6cTPAnxyUhagJPeNJTjp8WVAwHSnFsUx9oWFkY4cBo5Nm3D6RW3U3jxhxWEtzmCtnUZC",
  "key35": "63cp1JMkHA14YCZ9gZ3NA4JpTt373GdpWa5H58DtuhAJMBw1HyaK3RqKC5CkMwyy1EQm5SSomARqDKmiRet1Zkn6",
  "key36": "3KMkcJLpKC97EdmRmasfhDQuJbhLmqUgQzdoakDULzokRsfLhNyGvepgjXi1AFBDgetYjLUurs53W3dm3Hg9gi3G",
  "key37": "3nDTAwR4HAWZvRaTST6PsdhdhPT98CvmSDxW9QUuXkqSazWUunruWfJrNFnQg8BFA8sKhTdHjKYTrJ8Fv2ppYs2e",
  "key38": "5Myb14LUKCiFc4hR9qxifK8A549xpbLe2afSrD8vS1X6BRQLWvML6yEQgYkc1fPCd9sYQqMiYYk7mgsFsDSyCgG2",
  "key39": "3BGiWKiDFhwtzV2uQg7fBqRJ4SeCZ2HupMefmQ3sttbECpMd5sgXRfXkmnHGjXr3xr1KwMpCUyafLyNUYnaaYepH",
  "key40": "6FLBy95HLLLAnTp8Uei6AjRtbas4p9tEGB1niGH4CBi3H82Fe4mL1u1w1vkfkL8yT4X7iz9jeRWkHS5mcqyzLjz"
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
