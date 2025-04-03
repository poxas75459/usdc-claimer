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
    "4W4xZUwnzZzoLDrnnJReZfjLeQJ3qkU7muLw511GHHfXphn3uet6T9ame6SNADfxUNoNpHmccijEYwwMENQjvtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kz11CYsf76LxYwF5VmL1KNT3gNzdeMiE65TBH317kBrYDXV5eNca1dspo8KE6qTaXxAhVmNWMYEvaehJhojkA4X",
  "key1": "3RsQAgyhvw9E5Uucu35EPyaQwBnWzCsrHLst2SkeAsQVgtQ4Wyyx1qMFC5NEVjBVRwjXim77gncqvtnaRvMD66xS",
  "key2": "4iMNKp44jpfx18BTqFLuZxVGgyd5vc5dXFQVZYFYjNWCeo4j8qSqHX4ggNrLM2tFy5kynjKiadQ1ZBFa5iJqBHRD",
  "key3": "5GbqyPTVBDPDHDhtbZ6gMdnt52YmCRdMsxgJ3fTq6QtLSbMgeei1YDZMs5Ea61TKG7RfWKiGN2PN8HxpqdXcCyfa",
  "key4": "5PxYEs4U8CMFSMNV1W1F98x57R8UAndWwbK9PjMBTnfee3xCm4u1BYCzWQgVCAdd2nJST6U3ghBHuFAGKG84o8cS",
  "key5": "mLLpErVPHTPZboYREPMGCMZYaBTMANo9rGk6DdGjhSw7DPuS9oPqD46fjx7JsxKDUjtTJYQzGVSJ7ndABCA2kgv",
  "key6": "3gd3EKPmn1bx5frscSxYgC4FVAJpjA6rsNEt5AhoR6ecqwFEhSyDbDFRXUuqHfV6G8GSYp9DaBwpUCD8EQGhApRz",
  "key7": "wDxJzDW4iB7Cx3abXnd1ZmSG7M3VmHzwtm8Uy66Ep7b1aZNgCqQ57i1CQdbiyKrwmfe7BwTyk7dHyaXb5FQ6aCH",
  "key8": "4oDNtRR1fBDQm7hAhvb95QKyMEXBxgGkBLBK9GqDwPPjWppnpZ4xeNPa2MezddfAAdSWn51uqw2gg5TBrKnhy2pZ",
  "key9": "HxfQMS65wCPcYbLfNtykrFSSQqiJes3bBPitcM1qfLKo3EYg36VfQGbMTKBV2b4gEgVEYQ9tJNHAufP3tTsLcLr",
  "key10": "4juVRWEw1NGFVoHWgLDC6TrmZBuz8F8Hg9CzX3XpBLQLp6EReJEt97dEM9xrmCRYDFRJVxY7bpu3yf9LCR6XnmZF",
  "key11": "5RNHnGQsW7NVvbNS7Mj8PjyxdTQgMvLx94SBPFjHXFXcfTHYHd4KcnuArB1UNZUvkc5MtT86WknJMrAfBmXD4ivE",
  "key12": "5uM1Nk4MPfrwq15kstedrmQ5DQcpRru2GACm2oVrGgw8e2GsRXWXvRBeB1Fy6HBNcbVnvcaDqBNRLppa9euaxPku",
  "key13": "CFMXWWNBxy3nDiHu3bMqRgwjtg65s88DBxpedwzhTb5yhBxE4FrHoESekr4umNN6MnzLEMd5eLY2iYSNBEC7NMR",
  "key14": "3GQyi6q4AMDFdnF4tVkSDch7t5NE4pMv6LWcQsJhB1THieAxf4aWdS4YnTX1P5WtPYJnQvTfNh7stTdPAj6RNbMY",
  "key15": "26LYfuMmdSEovxQTM8Yw8EGFgwSEj2mhsPo1HZzqvFurrk8m9gDbD5QoyQupdsp3hkVxytbDU1uiD71nakg5FKGo",
  "key16": "4L5opq4bHgW1L8peRGcsMniniekBP4C3h2d7gckz81ZXv3nZgE49TPERZMZBbzPwhigsBnraeEhoDkn4rZssDZQv",
  "key17": "jyHctF8wS2gNxXXyekWffkQm1uowU3fgAp6oLMcPpKm2mbmHex6HPHrSiMGvRB8zfBDuAgJ1VjyG1ZTpseBisHC",
  "key18": "3WF3NuNiTBq7Ua3kDvgui3iUXqHZMxnbnsbeYDdfXoWKaypZpzaZdrLSSF5CJjTX7KMYw8wXyGdnrpuAy2MPFivH",
  "key19": "4PBd5Yz5763wK7jEyNHvXXQMYyonKkbTqMKERD7xPRvorKaX2HSXjA2LZ6YPKLMY4kw2HRKqWytB1ck7K8njt9La",
  "key20": "5QcErgTd3CsJ53CwAD6LojQurWEbt35z3C8e3fsXeUfesqkvkP1X4zVKv9mshdiSZCFcd6S9KLMJ9wmqHsiJS8Cr",
  "key21": "2Z5iP8x3kxihqzwf4eYgcMZUxFbGKbx5JvqMtUPmAur29TjEzJV1K5HBQ7UWRYyCLyHXUtMHVQP1AZhq98HMP2a2",
  "key22": "3WG1gMrKPg95Avtx3ib24PMh3cr1rNqgQH4vw3gUpEkdqZwiK4xA9UbDTD6bMZCy4Z6fXBKGuFknoagdcszH857o",
  "key23": "347p74tAqxV1zNwAKxteCc8QaNqvZm2g58SzHw89aMNqvri969BnYv8aJjEwLMCiV5gzsnva2g626o1wY3g432by",
  "key24": "63Xuz2y98WVMesi2uwNT93Ky3RPRH2u7fXmeonbQCqEkgezWb7MCtL1KaYsFfnHF5AHHXkGQBUksBWEUU33Xs37c",
  "key25": "3LW1gQHRMZMmLWxYkKSsAMESrq9ADJ35XupcyWjhqKTcYfp85x5yB2EfAA8bvZeFXpGkWXnqkLXKLx8DR7Suop64",
  "key26": "51iCJ5HVMYfw9zX42vq43e5Vv3W2wvW4dqHcDXk5YDWsTGuEqModKcnW1yEdX7aHQ4z9HHNLXZLR6s3Lo6j7wePu",
  "key27": "4DeguM2BPRnfTQMVS94RzKTxMe11R2VuDkE1fr3acezs9F9KAK7WWyrC39fiR4t4kdxWQWEsAunBrr7NrSh8cwQq",
  "key28": "53mFhnPV1Hvgbt59eDeFZAZY9z3YvDhMrZkFVifwCD2uhUnbHrfqof2y7NS4L3g2u9wmbswdcVeY8fKpphKoNDbg",
  "key29": "2FapRxkGX98Cah65YW9ZEzujeFi3o5BQe5BFGaKKQx1bjTT7Zw8fqu6r6y3sji7c6BzobQ2Tp2cMsjG82iDfexPp",
  "key30": "35zk7amDgVjEkHRLSyD45xt6dCssWL3ai7qqa4fbmDKX5GvnKGw78JLkLSm6yAgawuu9ifbNm5FXHrQP69oLYyV1",
  "key31": "NWfhY6qPZ1Csf35HBqDNoB1v4sQGxMpfsME9vkJdPXvc5VGvACUhKgK9zaE6BMRVq2TtoKWA8mXCYPceW3SFaJC",
  "key32": "2XHejtu56oQMeQR85jaHYYjrXWWGYA8oJePKccZctjwXwgffnjJ6Q3vGBfw3vicyAnwFQmxAdnuvAkE38jrfq8F8",
  "key33": "uyXV6Xk8afP8jq9xH7TmevodaZupUxmLMbawrbbyePX6um2WtBHA7GokH5Sa4uGtp4V7nkrHX2anNmTgrUCuGC1",
  "key34": "322RBf1wPZoN3YLL3Jcw2eE3KHJCh8vjTBTHueW237dHhBzJZCGetwqAGLf52Etoi1KyjaCUU16pn6kS8X3b437i",
  "key35": "4Ts1NxALWjJji1qBcggMxoEEeLTQPwfAhLJMYNUYC8mzTxiH5G3GYcJVeXEitat6b1PRm7Z8bzfyfYvDn7LGtfXY",
  "key36": "26Mwg81qNFwutkqcwqh6GpeDTEYVUvVYgh6Jf5wdbQUaJWnA3T4UuXX18ozgnM9Z8J9bXZpfNQMaf4vp36kAQc3h",
  "key37": "3dVBA3cFi6AJ8CocZNq4SZokxurB5TNou3LVWriEfBXBookgpCRnhJP8Wa6kpumPEj4G64HK2ncivtDqSRvvDMS7",
  "key38": "3ptDfTx6uXYpobqGycjtwDWb2YAKCBEg4AWhkcAcm94ocvYAowQLpH1oJ4Jsz7gqHRC3J48xLLAz2HsmxFNU4Hsz",
  "key39": "4VDQ8HGq4Nv6ebpeZwvuEUdLFx1LdqHkswLLDQziHoqHZupYJdPHMfmfuEAaRXXCeQ99q22T3sywM6h5SYuBpyxj",
  "key40": "5fCgSyR2AtSMo2tb97xDnH9xy91HBgUwJvcLT9H3Bq7r5xLbVm1Hktbgi9DcgZu6dv8sSnw7JkKwDY5GMfc1Zjdx"
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
