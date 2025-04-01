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
    "2QSAeYeykVjJ78CL4Nh2ehH3EsVMmrExXqBsbyN5H6MMqooBZAx8Lbvv7FtYDb4C1MeaJjLuC4pJXmPiLZtBHZpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8isZmoTJ1jevmZirosy5ifDocaqLBUDJv4YFjCFbekpsAxTaRWoqwv5DPqG6RW9FeNa2cpHhYrnDuYj8VrHkNBK",
  "key1": "4EfBmpGVGpEZYV3pj1c9Y8hsszM9zFyWzEG96h4CK658cwXcQjnPmjyazfZ5cgcAJPRnqZB98ViGW2gVbj3ceHJi",
  "key2": "4wRNLw22Vzi2JBhegr1ifwV7sP8smdsGVBgAwYAXT8zNeF6Ne9A34ABnp7frgiYg9Vv1J7zUegQWFfxWBa34GnzH",
  "key3": "5sgMi9D66V6VZzjYmiEh1G89W9M4617G7zELWQofCwSVmPvfKMmYVBVn5YM7jaD829WGrAYtHXE1Fu5kvSPQWubv",
  "key4": "2JzDrJH6aa2q5cpASrBVAYjsAETwPcToRiJzt3yemDDChP8c9EBoeiJZdfbAk9gbNjFjPe4sirLpQEnFbDPYiuyE",
  "key5": "4rMqDpXWPUJ1gCgqL9ZZR8pHpRcw8o6GHCzfmGiXJjTb7FdbVcT9tnxg6SM7gL6cumSkswXBM18aDPE45kUSRKhM",
  "key6": "vSWpHun2jmyw2BqruJfRvibRV8dfBHNF9NV2qexYMBSbMYzuL7DWMZCK2ZkcEF9gQjuafKeW29Fui6NdHx6BmBU",
  "key7": "2Lt3yeQ8fxb2aPG7g3LwiwhGX3g536jnRJHYcthe4KYGDUkLdU8RWpMpRCYkGLotcu2B6TicRTq8b4axQRfNvMtD",
  "key8": "8WcuXWuCMRoiTn4KXn4zAxdUfDuRyks9WPCg5n5qevjkmT656V7vGivaPVPsauD2mAZvS3MrrbQBA5b7dFcmYtA",
  "key9": "5tSi1VYfAbsM2pecFATSQwPac8jxVZefQUVEU67CJUmZSae4pCFP4PCRk38fu3cX5B86HM81HvsfthK4Qa2o84Qx",
  "key10": "BGM4HZ3946DdUuf3TpWQpejvmJfaJoYzo3VPJD1u6ftg7ytrgZmBnzMacUUq6TJ1Tr6WB2pCj8pur8RwA2oW14X",
  "key11": "4BccMF5NE2bGtqto1XDZSiaf9ejN6RthhBWRTqN9Ns2UhmWCDPhHnuUpdWYWbQsMkd2HeMZdgkLodtrNTPWW2ytg",
  "key12": "2rVfgPfEDAe81TU5rc23iqB6YWTghwGrB7gnQzFYm19jcnVhPrrtZ3WpSBDV1wXhDsxh23FvVPCHK45d1wjuscbq",
  "key13": "44j3NfMjCCkSDR44g7VQbkbjkd8GbSs8Zt5mHCGm2XMqES3nAcWs3kapxKuyQeh47eKssaqhLtXnDNAQoPTK6VTN",
  "key14": "2jzvQEEmyG28ddXscT2xCesAbdEhfjDXWGMehoH23xyWKJ3RPvQvQEg5mnPTd9gXtxdJzgRf2vWNPxypARJ8qXVx",
  "key15": "3JpcRfFwxJbRsUKpF2XFFbNHyGnv1PsFRoW2esKAcQbnqqXrDDg7QXfj22fuzkYwu7R76gZfFSG8uV4Qgv49CKbK",
  "key16": "YzHy6JUgP8dtUyY3TsZGx4k3Zbe1bCCwNGH6DUb76XVFHVUYcWMwA5rscvuHTcEZm4K9rAky2BMdiCpHe6i4khe",
  "key17": "aHkoofSRXC6tsu1qRMZXvE17eHE8LsBmnABVy7b6gNkX4CbEKXTudPtGg9dYyeiHjizqSVXCC3H9B6wG3YdVaS9",
  "key18": "4s8ju5nCEgttRB9EeoYHduipYJx66jyXzbCDr7krveSWby8DnWKdhyLX3af7KGJfVuwaLhgwNk9D79CrAHdhkpEm",
  "key19": "3kbu8Z6VM3mrJff2jaBhBPDHLcc9ANsWcm6qVPfg57eqkFzzj31ZwdamSR2fBBvoUNh5nZgvRGfqAAP2WoGEzxGQ",
  "key20": "47SbJe1THmJNkMQw5mHLMDgKVp9zRvZQPkiDKtWYNZajCmcrruFQhPAi2F6agLzrDk8MypfH3wYPEhSZ5UDjgcgr",
  "key21": "5on3jzxJibFGX6QQ7mbjgfD2RASp6yF6r9Z3AiDK34ZcAfUc6GriTqmAjf1eAaPEEjWSsRPGJPp8RfwZuWnticLK",
  "key22": "5qfSNXFmZUGTL2ExkMHT4APyUftFx1dKuAsxdY1odTuyUPq8LGL8MzMLh8mjGwjKiHawzf3ajirf3dRVcZ948Vz4",
  "key23": "Zc1DFYtWzM8vgxpuVnyP7RKDLgbqXMxYCbeXfbpZXfea4nqjP2brJa7kqUJAcX1MC7z5Kpp31fwyiuTork7Jgn8",
  "key24": "TnaZV8YJdqDk6EZoafZH3oWXJgkngMwitgp7iKFe9R7YXz3H1KgUcQfCzSHqgbiSgwAK11TG1obNmiyboAHngav",
  "key25": "2cjKiiXdYKAAcKbiRx7f8NbS2KYqAN9mi6RpjCDF7nDiB3qgciEo4vXn7vZtxN6p8VDRvxLip3Kmp1T4xMj3WKT",
  "key26": "642RzyBYEEabMqBtzS3rPGWQ8sus1kisJhKk2samdNfT3gQNSDHkkSJtWtGfhFBXjKBBZAxQEs9r16EACRhuyEoP",
  "key27": "RJnSiHbfxK4MmLwC4nnG5ghKcrALgEcygFFRVv3fmvrrz63Mvg7UTGqzQKT28PnKVKqjfXpsxdPyXRHhyr79Bru",
  "key28": "9zuWnbkCbZaFRqdVDQSneXnpdKMo7Uuu7Pfgc6y8KBUjkNKXcewP2H963h4daLHi8dPs4y4PpWhF4DqeY45aEHc",
  "key29": "5XRFiFMxGfjGFjqQd8u4ejKbPkLBDHMpYRVGh15UHFcabuLUJ4VLxuNmxGbaoh2HBuLg8WMYceXG4RKDVf9tMtqa",
  "key30": "45KPLb3NhYi6tK4zqjM7CdrJMZqyySRYRwcfYEHp2375VeyXd3YA9TmuSBcvqUtPTeA12aWuAs5WXw6FF1xZ1j4n",
  "key31": "347sm3yrH5KRgBAwsghKXqoyvVusWX5oM6LVDYvEAXbBiETZx9zs1gZmCUJPdNrX6oP8FQKeb5LCCCnfanc58FQY",
  "key32": "48HX63DW2dEFn3vcXKi2QZy2X9k11YZu5nUe3NBZp8B71mz88Jvrn9bwTUkYzNRBDS26PTJT3YDjrk9NYdhSj7hN",
  "key33": "RyoiFszknLp9Kw7fwnK5tEKvPGnLFg3k6foFRNG7mgGzHq1XA9f58gGF9aB9Uft4fYGb57q2Y3AWU2TGcKRRWqU",
  "key34": "5osgRrqAFTpn7PNW5UwcphojxhfMk1mMvDvSgFKqTF2JFb3AU4UC8wDazU6irV7KUFzFGE9zpiJ7BLzDJe3Gkc9b",
  "key35": "4xafVo9ojszKgoVKjG7U4o4spB4q2kAKVpdAsejPE3rwj26wGeffZYhSiWGXcZBPd9efeAdhr9F2Vip19DmiB87x",
  "key36": "4UDb8S9fVrC6neVHuUbw231GQKWvEyE4dcf1HBeDb37qbfhiHCoV3fPLRZsqMhXYX3V7MjEK9o3pinQFkRCy9vts",
  "key37": "2Ve58aZuW9mMKqphEG8F2LavDFsuD6EcWY5MU8TgWyhTH8FMVSyds3CEZeENtsTpq4m6k4yJTKztRFXxLaPF3kJ7",
  "key38": "5thXHSyE5WkPzpXvHmPuvqLN4SEerTNrSKqpzKC1E1Q7guptdtpX84ghERZbXACytX8HzhhNqPkqowv2Nyhi4vMy",
  "key39": "5cDrYAtZ5JmMdwcQZhZEpm8T9ErRw3wx9hoKb1KMGtdFvUBcqF2thSPoTQckVjuDXDeV93cCw6kXFZjYCxr21YwR",
  "key40": "2PkXLEVvgfrUFbKBZyCU9cngEyY8S1PCAdJWAHcdLLQSVfS5go1fqENoQATkeAyG9G9yzLwWqwNeoXoDZpwSskGL",
  "key41": "3RRB3EZiydPZQt4QckMKkP3fTpjQPd9TvyYugxQQTR4ULeVB5nCuvV8mk9cSSk6GkfdWofYQ7kVFWN5QLCdVG8q9",
  "key42": "31q2GvqVsW4tVu9BAD6aA3Egn5zRaodwE5F1kfxhdFuxJKQsXpUbnu9u1GUhsMF1JZLWNPufzL9n4dRUASkgCMeq",
  "key43": "39uokRMsFAunSf3QS2zopqoU32jrTSg6YnnYxZoG4tXRoBLtfVye2FBvAAVzhpGLUn962xbebPcjpyRyFuGScQ1H"
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
