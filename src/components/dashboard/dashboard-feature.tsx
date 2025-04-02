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
    "2ku9HMjDh15MrEZR5rJKHdq4hgDdR6bf7YcuM5apJYUsWdgX1AwLe2HBupHHiXcbBDVw2zUcsQ8Tn8D9CfUhdgHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SbUNp4DLLmzuLwVMnNos4jAxjpLiSvPCFTgH9mgzFReds4GRXCH6s52DLnjvQT8bzuTxFNvagKF74C4gqoJpM3A",
  "key1": "5QztE7NifHzEHmJqYfGp76fzarsfG7KDvLakzHfqX1oMkey5CPwPsc2tEsRJnhMcH9TkPttF9pZ8tpcM24uVJbEZ",
  "key2": "4p2fAveiu4NpD8PELdEioHGyXbHpyNmVQDq5j94ykhTQXqSVMCrAdMYVQ5NSBeYHrybE3RcnhHUhJ8MNQ2s6DA9J",
  "key3": "QcpB7vPXmVF2AhSG634HeNUHhVZsKrpsXW9BYAw4vduZWK4j4Vom9pi4VdjzUVMG9jqfXfNBxBwkbukHCbeUPje",
  "key4": "WvqpUYpdJF9eqBqFXWJFN4rwq2b42tgck7iUyMwnSJ5hCfuMLT39n9upN6TMMQxAKT6LieUZRoZe7f2r6Fx2Cjg",
  "key5": "2YuCu9P76LxCWJDaWisakwQNjtJDhBnCwBCTEEdka3MWjXMhTdiaEJSSc49R22phHQNueRAHAzT68HdDzyFYJBpJ",
  "key6": "2iwPQqv81xegUynDPZyXm2UgMSuAxywhTj6NxxPnmDikYfeux5zZTx398iTHsWbSen8Myz5f35mvZ65cqAPQUjss",
  "key7": "3CYj7Ezi89LDDh4aqwkBoh1EWMcYX9ab3WScVP7uTgEoSjCMzAVcwz3NgJixWwSA3RCTbtcSVjghUZXuLDzVAvtB",
  "key8": "3XfcVWENUnCUGiNNSnYWDNaV38L5EuqsP5NucZuoCm31bChUo9ot9dBVzAqRdNzi1kBvGsPYMHV8eDtApRmvviPN",
  "key9": "5ihkwASCZ3umbT3StEj9JY2jj6cYUyv1JhYtFdw2LDQewshnriJPUmWTwj1ztK6B9BbKNBSnourkF3XxHHtda7CW",
  "key10": "UpWF6GxGK8jPLoP7Yg62mCAK9kL1u8aVWwAHzZDHZRM9D5fudfC67UrHeVjqLWmoQcaiJtZwgLeqdEVU5uYEYW1",
  "key11": "1259oCWMY8oWnCypkiT4Ez4VzWNXxZL1U8AnrVoEs2dUegSCzjSrbfiSYCr5FUYAS9D1apf2vtEuWdE1QgY88bTq",
  "key12": "TEZpgXEgkFsYnzQxEskSuTsqmVtbVSkKvRMNGQpzZNotHrtCTYpS7Ge95Swrd2ksZerSu6V2ENNJdMW3RkpbgSp",
  "key13": "UsPWMaoDxMaVPR1ck9xWpGyCTaY8cc5Lx9owzdD95yRwp2Ja3jr33RxXvFSytJtiSGpenuEtn68eG3Dp6Na7i7x",
  "key14": "tZx5f2WKccZgVeUtWPL5bVK1wZqtk55pq4MZtYqowL1yiR6d9Nu7yDbvPSn6AQdbCauDUu4n9iK3erZ6QavPi39",
  "key15": "3DPmmdBKTHDTTSQrQPR2GKozhZXzu7VxN8cSHoWygamKwKjLPRQxf7Hnx4Neo1WnVtZ2ZH7DRhoC9NADcJz5GvBe",
  "key16": "EzWAindY4U8n811wJCJKrv5caWswJ2yDBMjWo2Nu8zS1MHv1oPbR6uHTantLwdsdLExjESq6HPhhdtV4P4ct2dx",
  "key17": "1LgBkeYpwJScBLpXPEad1sX4zyuNbBTJq5vEoHjrrG4sUW4yFd5dJNg6XfcNpCkywTWXCxSsssr9RjnKaY4BP1R",
  "key18": "3c7yA5GCdv7NNiSreAAhUmpgQEsQx54KrpZMxjuQa1kxzBKgT3hD8NXD3kvyTSAHsq2aQ5YyJ5YQy7ScqnAcqgxz",
  "key19": "2KJRWWRauTdguP8cSqSZU5zSNgKC7sYvoWbzMuAa47PD1nzvibFgbZ9Vroev1qSSN88Q6Qnwy2pWQVbGtyiPmzkT",
  "key20": "CS5hR4dCLkyTYQRYzTTLzAMThM9hPyRuMaEKqy9uwSFEJXEtSabugsQu9JBtyC9e7jch9VhBUZvMFKz56of6ezu",
  "key21": "3nwnmQRGoJHLwqm8GfuoCJfhBSHxTsAhRoHop3Jib5CZ865iHQw7bUcafqPuxARbfeRZGXXxp9W9x3Qw9LiSAR4G",
  "key22": "5oDoyvGLZXeM4smYrWfFAgB1uJjefctNDobh48H9jTD21NJ1uRgXTHgrmpPdqMBK2n5ZGzdKPnfgGwZkvCYVykam",
  "key23": "47Lk5ZJmy1qkgKsTYS7dPstdpbAU8vTSm4W8zFrXY571cKw37Ltk4wYp9reqX2R3mBVC1i4c9qXVHfhQkt7aDEYP",
  "key24": "3Xj4FuFtRQR6tb8yTePLUS9GpKpwctEM67VrNbrPC7cCbPw9TTWNtSiN9uXEqb3gfNkciVqTCc7AMNRtodRdU3kD",
  "key25": "54DQMeprUvz61g448BB1vFGY91wGRVdL6rvNQrRwePULRzj2M5EZntVMZC5ov2e5TvjzkRwiGonCYqeus3Qxe7gm",
  "key26": "4Fyaq6Mdt76RULTvQzNLVfFPMAGMEsBJzpUZXzcKuGNRumkpsR2TFiK7yM2H38vDN88cq7HioAWBNUFeneDR6YRZ",
  "key27": "JTyLkG3EWuavnsdVB4tZn5MZ7sM9xbkffbJhkLCe6SJna7949mHs8yDfbn1shWeDzTTfhijtcTXHXSpPUg4pQ55",
  "key28": "5g8FUnGwXkFy9rJzNa9rwf9vinV9Af2rZxS2Nbt7Tkxq3MkyR8MTiYj9fDTSkL7szWJFuHaJQd2cahj2foXWhVXA",
  "key29": "4e83UFC3p9bDPdDktsJBjiVYpaFKYhNThjnKux4ywjpNaEQYb3ZpMww9QJ1tPJ7KjZX3kpbowuQjqCzkji4NyFnV",
  "key30": "5XSKYoa7kvvjC6qcQTPHK5Kg82fBF4jAYHX5KCNqV8y8ZuQQawJzJktHnzpJsvcbWTVnUyaiNAMWHYLRWUmWEMM2",
  "key31": "27DPARdnDQdNK5RFLypAJbHqaCQaX4XXT9TTZtJjSwVsRPazEFbPE3d3WpMYn73MqPyeSByHMUTRcui1DK2JaRMJ",
  "key32": "3CTMNTgqzxfic2bujTiQJHSWufRnphXfgaWeN7kYAznM7bbXAsHQ83jzKai99AZnmUUTidvCAiBcyNpK9FgjD2Tx",
  "key33": "2jCxtuZPfV7p7U6BpPN77AVVceDi7KaygHCqV6aBD1hpT3kpj7tBNNV18D8MeeaueyvpHVoLriDoXyeG7Aozvjf7",
  "key34": "4LzKLbsY3zU8iv4Nm13EW1cxyxMhRL9WHW9AU3PqQwdF84sFt2dRz2on11sFrqQnw9MMgBpf4k9A479cfisyDCq",
  "key35": "xtZgoput9c9N8dNWUue38UGU4zVVK9DktGuKRfYSxsvDJbHJvk6DLK9DctEbPjvDgPZfGrpHoEkG2SP5JVz16CC",
  "key36": "4zfTLy1MtwfnyENDsH5bF4AVdCYHQYkQjuaxW6kDnDf3veVDqRSwFovS15S16bboDLkzon3zq8jDXKRZBHL9UbEf",
  "key37": "3s7kgZJqDJpg85iTLXiASabifKTy53b6eLAuboEWPH4aUKZbUVyMoV36owp1VxDQ1BGs4QMBKzf5PVZwcBLgggSz",
  "key38": "3LVs2UWPJCie2REMU3Es2gvTWYJDH17pZejCA4smbPtfNM4dWYvQxAEdVRro5zkVZ29t9BG2YuM3o73TJg2q1vsD",
  "key39": "3Frbg7sKUPokwxhTvd3UX4Auh8XH7KyCU8K2fYRe3QFjxkS1hwMGZ3SZkszhzGbbCQbH45LHMxCAntQx3JVznvbm",
  "key40": "3yWvYZxFfcq2PA5X7ZUGovUW6NBhe3h1oE9jc7kCUZ8nzme6wyvUXSW8vJQNipFbwpCc1ExyLnAtcKTHc4zZ6Cti",
  "key41": "3ajWnJ3kH36jhniPECh3xZmz7sHp2YmZt6dBjXsUHcEw3J5RKnKGetX3Lbac9kwBFbSqmWN2eCgKAboSucn7iMFZ",
  "key42": "3cUpLfAZURWyVYQ5u6G2tGxYjniYKzpn6wJy8xxQGf4q4Mq4TjPdhEwAM4kFnoV1tVGTy3pfpLDAJtE6zjvSEkKp",
  "key43": "4PRSPrF9jjaY6J7wmnZGCKCvNcchE16gHNQLDuuocCCoUySSqEt62NBdMQ5qSeqKggjk9FuL6RcoWk7114snkhqD"
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
