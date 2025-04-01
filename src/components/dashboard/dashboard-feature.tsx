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
    "2KUMMEVM7dw4SaFNomvVTRyHsqDwQeSMbfK8znhAnwhzdgGFHRmX32nmsWQVhyY2JJb319YFuxbASEqmkwKKovbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tiRQYnCKJqMr1mJyc1oo9YzGLMCXPEZMhPwt9iP3TSxFA6aABP27TWRn3fZqNJXdH2EvR5GMGgDoiqiXrzva8m",
  "key1": "5csTa2UuS2R4CFaQQKHR7DuEFoBtRfEW6w3McHmMhfg5QLE1qF1VhKdWUAyvjMHqZVDEf2GtjVXttADs8yDZaGUP",
  "key2": "5NdHkGgbkdA3VsKRo4wAXv2AABpgdkweVe57DjCzzUZcQoJcW47whX9ya5avVBKqcjcxEJzsr2KGPbYRCWbxiC3F",
  "key3": "3sXdEc3zCz7qZEoLuPYcNEZ6AQsxL4a78ruCoS5PtoTWAFUx5PVAsrHq8Sfkm6HGSTs316UFBLnU4G9snzGLhbVQ",
  "key4": "3X9ppzLubz7ZnWi9MaQZgAdft3Pusov2zPwKZrTpXfH4FxZP6SfHLFL6qme7aJsc9hYasQcouqf76qTQ2CtDEJYy",
  "key5": "4v6gKcow7MjpBQLvySu8k4Ufjd2TyQXJgQLeHGs3Ea8GSJwivyt5N7VZhfnbL9SJzhq5zy3ryfUZhDxccsz3bb2b",
  "key6": "2FSNCHeEgqsEZPaK4M5F6DPoyK19aMjEs8N8qSaMfp4YvPJNRiLYrad1H9WYM8Gk7DaS9bUrDKtoSF44ixXn35iz",
  "key7": "5jpFjUg2FV5qnkSWfM6cPudNM2bNaS1URfA66wKHmopFHARgSEFS9cqKRHpMR2Keg3RvjSYtKc2tjtw1fFtHe6VS",
  "key8": "2uc5JF5qnKhEHvgR8d18G1gYm2cZ1WaL1M1tzDLs4518NmRRYr51DqkN8f3mmcCGR8g7yMqsfGJx4r7drVyBZquC",
  "key9": "4VupUvmrRZrUBMLK6YsY6ZkcBEFrdiYF3KrR8oUdL49E33mXJbbcp6gBzKTqbCLENChky7VxXAYML8JuNPsq6Lpy",
  "key10": "43LkhpRPn52YrdY5SpHvnV8iSamN82WXwEDZ5iPbkDtuLipG9R7uH9V1LikdzLxXcqgiHz8CmKKwCFtLyqA1gMbQ",
  "key11": "5eYf8vVpUbctF6Y5RjXv5bWpYJyFr74WanumCk9vEPJuqZzrj6oJfFPgibXxAWbohE2WPJstjrjR5dWG75zZY1mS",
  "key12": "52SXvadUjucAB8sHHpqrLYmLHXjbVJNgSZm2tTmY942JEz3TUw9CnL28KiJKyLPtXWgFukLTXNUeLXc4G199W2kp",
  "key13": "4gdshXiZyiFz7sVHXUeCgWjxwp63dX6psYrV3Vzx4NBu5hFtV4pB3DsSxZM9EAw4NJ27MNLdgS5cchsYireC5G8N",
  "key14": "5mnzReQdP1ZKMqaAN8xKFvxQFT3n13NYn3ua7vMpMJu4AmKV73q4HdMEsgsXHQHinvUkKSE2sJWXsT8BXGbeEckB",
  "key15": "4nUYVpEQJ2rvmwHki57N8yfvJzQo3p1BM2Tx9psNQNnrXX1cnv5GtxmAFSmH4ZNua34eTBTfPLw8LLrbzeWVqhzp",
  "key16": "4WbTX4awq22TR7ikAqMKpSdtqTq8tScKMnC1StKb9YV9ATqtEA2ducomdV94ZWNkrU9ata7cMSZa33QvmhCfanhi",
  "key17": "4EWJ2pTzipfF8N4VzNCc6Txk85EfUtRqdkGGVCUSxE8jHSmehv7v1oay68zC1fGt8cjd4cQ2czjGPSGYLyqWE43k",
  "key18": "4FWaxwWwY5shKuGyCrBSJWrQLMAMTi1A7s4DzLnf2XcLHTwRB8CwBca11X95vhB4R6xRCwufMbBgR5xCdUg5XyB6",
  "key19": "42sPU6HFPPKmg2qB8mJYcnQQCJ5XbJmoU1yM3om3gJXWzPdTjRWSHF1czF8M5KWeCiynFRUX7bfWpS2jSCGe27Aj",
  "key20": "FHk4WPQe8LdYb3y4sPHaxmNHouZqKQ5ScEMvPem4ya4FwrVbsPQ3ZCzadgaoWFoDvEkYng9b5oekYP9WELGxmiz",
  "key21": "5DDruogXEe9FKqiuvVK9N3WhKckVcT5DrZbo4zCFLZv1o6F8DSPUvpFn2qmK5dfnqmwt7HaUk5AodskyTewFjexy",
  "key22": "58S6424xv7RkfBwahDTSK55gs2pMsgxHR7a9TeyqgArxobHSBdcThzeFsRHvXHqaThrfiaWo9kogPhFtiHYq3C47",
  "key23": "vAcEHXeLMLZumM3ywqHVBXnpDFKqrdQUpbuEVXBkomLHEwgfYAWoJqDon8TNSGUCe3dH7xYfVu42CzgvqcrTKf1",
  "key24": "3t26MfvXjexdC2zY6ygqiftcswcBpeM1H2xrNKxmGpNmQPdgfzkq1Se92xYshjDtBRCwSBFJdATUj1S2Hx7WJhYH",
  "key25": "3aRsVtgqFHnYNsXsyQ6eMjYSdBnpr9RQAURdvmQdFPCvF576zzkfx7rpFAeD1BotipdgAZ36LAcVrLfkHsXsz6Pa",
  "key26": "3g8CNiLAi4gHVoaKzV2FpMqWCDsrjBPEXDq8ffM9eNUhcRbxqjh7waZYxN4QQW3FziAisXdwK6fR3CsTtpbbkGMv",
  "key27": "3PYMSTaPqCmvP1fKNqC6YGpu4MAzVM9hsX5WdGpQFWqkVkYP5Mxz1t7GwqpXvziczCyqpfJNbDrvDChUX5omdtZ6",
  "key28": "5tuCou9ntzjGTFHK13errMhvLcqCrWFTbX7jscrdfkNViHsDdVevMhtE9bx5j4y183CYTwYegJuU9Cpmh439Ufud",
  "key29": "3hayEtid5Mn8BsJJ9M5m2PS6d3wQj3SafNcKmje1h8HmmUXWzbKCDvTgEM3rgph2DxP9outJFHLyMJShQ9Sb88YF",
  "key30": "5bqd93x4iDWBWxa9kmdf446xTeQWWwjzNKPxHDimPHkcVzYpeEtGuKuee2hYLUuWgFnDiwAxDP2qxBxNsEuvAnvB",
  "key31": "5zZHWqE8AX5CY48gstwYktiRgRYZ184ATLA9GH4T36nWtyy1qNAkH9f7YRgJJSwbKPmMQnZsihRYntk6hadQZKtf",
  "key32": "GABxf5PWBu5B1E5dH1We3m2WD7XMWVt2JCbPP3dzbQN8me42pQ3aYGbxje6dmhTTerN8AnQrMzRHfYKGaZMci3C",
  "key33": "2nafxbGe3xe21CwaxHhTWrjKSMvcFUudANtSHrnahHMrRXxvjF2XJDA8Vanpw7Sy76waK6HFbavQWidb75HPBx6Z",
  "key34": "54cC8ALYKp6fqTp71VvKetcwVdAPLokekyGJonkCVxagXZ5P6EJ2g6wtMBYUeuNFko1dEvGumm6KCWST6VvLuxUQ",
  "key35": "5hLV1ACDU1t1mUuMBgH6BR8V67hsRhXPzURg4HCdXWn8NTUgsD5WZLCMZGf6VmzvzSradX2Q4XoiaBbN8PbfySBA",
  "key36": "3tWSjgJxwUsYq4Rn3ksNKLFD6iJhUWhPxAyqptda8oMz3DAQEiiQJfWtpbQ5A1Q4xENriFE2HSvDCorL4fA7UwRh",
  "key37": "5dv4hsJVQi1gEMdBada4uUx2cb5LvkXxrffuMTAVjDiAiRejCCk9nU7QPMpWuY9qZwgdt6YDwq9e7w89SoJJE9Wk",
  "key38": "3WmtfcYmasqscEdFThDHvQ9D7gDRR5uctagCZ5EowkajrqkgooeBTcpMoLbDUEbMMoZ697J9KRGJLmGTiEFrqNd8",
  "key39": "WLPrdBcoPrWJMkiQGd83ZrzeZ6ZWokYXY4FFvyiWGieaxosLn6TrvschwV9zqoXe9BfhgqiUWLt9SkfJMG6QZNQ",
  "key40": "3tVNqTRyfyTLw9Ei1R49ea554nrsHHMVBdomNNRHeWRK7Ro64stfNP2JhzDuT77uFVZSsuzxJWZzMhoemcesxSXV",
  "key41": "eQkcazvUXRVfBe1NYDb4QzYrzy3kLXKsALxDtGYneVm2k2ABVViVWQh8fy6kUiqdjhcid6yApT8gmmdJn8NhZVr"
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
