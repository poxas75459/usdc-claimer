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
    "5bLMNM68skTcVUYVgNkgESCGKUgXeBXAAjK3BnDkH4ZtaqHUckpQuA3a9gr3e3G58EuhY2W7ozCBZ7jYEAoCkwzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2prskj2orNZDJZdBe7RL35r4PTgGJJ1RzEZeo9ZyZXTRRiepdSqZWyQYg7wYofmDnh6ibvqbPkSVgqZhC658ygNw",
  "key1": "5KwnRoyJVCfNx6maqQgDhuVPTqEMDTas5f15FSLAm7wr1ycdSdHSt95t72Hrh2nRreqX765G3ThmsuJgvpbgYQQA",
  "key2": "3dYmbENBLQHH7pLzQdmsG8qhGCCAbeayfPunx6mqaVbAsFxwTpcpUV5nvfDPJN6pgt3P1yafzNnuLydnaAofCj87",
  "key3": "2jVquWDWq967ChczZfctouq77sNcksxnvmDxVtPapj9XfYZomHkBNa6ax434yU4wHo37xb5pppNAkbK3g6CDKCr8",
  "key4": "4c4fLkUnp4TrJqAsfCZsykvxbf7ZQ3aBk11ZjoGavLGnrZJUyMy8ZYKCpqb4vEiYyv77uFwPTy5wbDKhhzhgti5d",
  "key5": "fMX5E9bKphyVLDoyCsN6YaMBhSp2c5BtzBxzm6xwXXdv1R7WXU4Arzd8dFcnEP5xnfc7u4xgSM328UDPV9Ak3VD",
  "key6": "2dq3VMVpDeNv1mPCv1g2BizamF4nsasF4JkFJbRyqZXtELPks77A49wMgXFLbULLSYyMcSNttu5Er6oUGmj6Bh6i",
  "key7": "3gpd3dq9ihT6UzxFsWvt4aAhiWuyGYuNxffJGcyv71ocBGAdhh7Sr1HLjJE7m5TdJyjNNfuJjicZwvKK6MiKmcrV",
  "key8": "2vLyLpPBNA2V3DGbo1vosdaL3ApiGe76kSsyYE89vGkggfaFiyxNwELJDeP1vckQmowy2bTY36vHS7RibgbKHAE1",
  "key9": "2zTmwhTBCKYEpoNNr54vcoHEZK7eyNDqeEewcpCR5kw8QAdZyY8C5WmcLycJ5NgrvkFKxC2GtCMXxwdnsyy5eBu5",
  "key10": "4HyTW7UwVp8zswHs6ZuSUSucmhVFiESFWSCyciJQGDHQmTUU6ykbftD371KcwdKUHd5eb2CGvtt6cdzgNhjtSimf",
  "key11": "oEARezvGnfotQEXkBtq97sxqXmechUWzJ6LsuAJm6YTYC1zLvw4mMMjoLSQwLn27SwmmScdEpNKNWXuo3y3jrQy",
  "key12": "3HWBRneu9uPeHqaH2yCRMoirarrQLBjPWgXzAWWvh5mo24xza4wtyjLScSKUmAqX2cX4WfSo9k44oihm7F1w9cSr",
  "key13": "4CSBUNoW4qx1BZEKWfnZ8kntfA9jJoTMNTUwuH8qnSKzSapEPMGsYJLyJUuQEuXTNg6BZ9bBPRGR5iqK6c2ZgSN9",
  "key14": "5toRZwXyFAEYgCdJh7riHT8LhCTXkWHVWvLwjkkHsnC3rHVPAz6fJZNDQJC3rXz5rR4dFakDdvRJio3Wg8F2Wdar",
  "key15": "2GVYFV3yNKo1vYKxWN12j2MiCf57HKuUZUUxZhocRXmCZEZQdVDcKVvdPUmLBgJZvjRcCkSwVBV3dug1upMeJjzo",
  "key16": "34mN4xUoLZG74GLbSChKSD8WJNSv2qxiySmSoW88h4tUNvQZSmrjfjGgWfHMHYA39KtdVToSFeV3whTp2yPWTNiN",
  "key17": "2HN5p1SXopsjTbKqxbvWFhrogN59CRZjMsQA8WE1idZUjVeNhwvtAT68ionHLvdrCqS9feLcZzZQ7NeSCaJSsiKf",
  "key18": "3JSjgSndejdWenW8QaaPtufCEtuCod9mLZVyaJcSoVUh6ur8eLaj4dWSbW9SiEpPSBanLaVyJXreDhn2VomQCWPu",
  "key19": "2rBpjZ7gHWqGXSi1fe8JDV3mQA1cT2iydWoNMM6cHDcigRC5mDMunp3rVzFYRmhwmSSP8Sy8PzBRdyy61crowEzV",
  "key20": "HLs3UUav8o4j15HiYX3McU4HhnD36agyMfRaKHNnXB41FRhWpyi1D5Qrj8dzhR65aqu99UoBTCHGdAq7HyhmMne",
  "key21": "3b5d4xaXkMihh5bR6nZhBvAAeDk8uufbm6zDepATCLf6HdxnNjGDmH8eYZyJcdCUtghcTvYdq9zKuFs5Q7Tnv936",
  "key22": "4qtDdD79zcmPK5nJA5weyLsyzqNHgWPra4q2FKcuHixXNFsYCm1dgGUfjiT181beK7q5n8GUtxeKuHrcgR7Y2eyq",
  "key23": "27XwNNJW6skNeUQi8qWCTx946zVapix8x9oveQ4qacNG4RNVxq9GDCuSLYQ4D7mNomFNbrFMboEjaGYJxdzNeGGg",
  "key24": "2i8UfTUxPbgd7ZdakcHCH2GbKUoa8uUub8T4x6YmXpuk3MxpaTfv5JEm5sD1XXXEuqskHJa5BkDWVPTNh2rM7u6X",
  "key25": "ZrYNCbf9gr5T1aTZqSv7nUG7wK728uZy8Rz6WWewxYxNGn8zVzfBz5mVBqTMpQEc2RaoT9NQmz3gEPDSd1Fe2C6",
  "key26": "3wjtKCYPvi521zku6HwWkaSPwFDd7DRpMSEDDRjt6kFeT3BGvf8oWqdUkRTL7V7FpoVGPvGiU6Mv13inLVF8VbUT",
  "key27": "32PNzJRxAAQ1Ecg7gqGi7EkFSPFb5BoxWmtTDKiDuXuGUHGvipYwY52YxJ1yPLAKHTEW8eCQz8DiDQABdEVfrK3T",
  "key28": "5QCvigj1kVDVb6B7XdvLAAqAoBSHiF7KAroPxAEwP239rC3gRYEbNBXKg1oBfxdDtTdfe6g6JxhMFwWyDi3JqcyE",
  "key29": "35dyvUadcNpe5KtZ3Ygfc1Pr8WboLHRjTcBqqDt3HBDju3gv6FxwyxWGt2s4tXM9WDqQvygQvdrUk2RVapxXXkW3",
  "key30": "KTj77zEcirsRv9SYok2TQ8BfG6WBkTcvDt2xNP7ASCnALmoCmT4XtgvvpJcSTrrYv1gjzU4StMM9APpD7PZbEnV",
  "key31": "mH1b4Y6s1NiieewKF4VAu9zEHakcmWvDgadtph2ckcGRzSUpqpU83aNHcMzTd9NTDkk3TCyVj7NcxcXyistnRBP",
  "key32": "3iJSLootXSn5jDK6rjZm1RdZDjkwYNUWW3vZxQ35L42s4AR7FKEc5Fy4EXhXfWZDDffhDzdWuhiEMuVR88isXQzC",
  "key33": "rZCKCpmGdJ9Xj9KHrLXgLg5t5JmDSWsF9w6euMXq73YHtaTNfhwc3bfhSLGABjL7WKuosenmpWLJEBfv4REy1Zj",
  "key34": "2yX8hbehPcX8BTBi2S8CHvixq6tDJGb77G42nCoPGrvUgfonEoahtdftT1GWopst7uppWdgfnH8Jjgd2q3cdupVJ",
  "key35": "5QQJ4ZQiQfB78dLbcXAU5JgcFPhufrGxne7UuuqdZe4UHW9a6uz3qy17NcSSuz9MDJacfBBALYaaTNQNxqGZGMdU",
  "key36": "5Rji69MFYZJD2arYUT9SytSfZviMEuBBqBw8Nnc9GQJkw9FN4GS9TySiZTkJ296KpSzSbksVb7bnRwQMx5ib5PiM",
  "key37": "3MtK1VYc54cMvoSvef7JGzXpwhmowQCmG1ynyRw14VrWqxSX8yhPLo6eP83pbcP4He4fb9Cv5m5jeYY7QsfEu4oa",
  "key38": "2YqqchMPUhPsiRETENYW9SUpXFo77rdVFAskdsYLHYhde9kYagbySTWnMPPk4iLVmfhbeUqvSkGJkqxUVe1ubNxm",
  "key39": "4aAfai6EBHii9qRL3YZxuKhf3A42LhdwrXkUHdrmK983wvDSx6R2ZH6fxFUbzd7S6xJb7pUhJFBosHiy3T78MmRc"
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
