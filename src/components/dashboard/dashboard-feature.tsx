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
    "5zWEEB8xSV5SN8FWV5wNPjXVNjmJybypAWvUpVbQHNbsKF9kgbcwTzY2anwyN66Mh4mr7cuu44ZoJXS9ZPgirZMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GsTXrBoWxGmNShy7RuzhAjsRPcE4MFREjhzwZtotd846A3KLBjCmYBprbigaYfwou66Ssw8gwaNj2RiEkyjbBV",
  "key1": "5EqfK3nBSBaZbnPMqaEhrn12UL8HLhXW5vKpJEHhaSW5sKaBf51XAzLzy9aS7Kw73cngYAJ9BVFuFFb6SKoRhkRf",
  "key2": "4KCUksfdSKbJHPPVZx4dg5VDkUjF4gwmaR5u4e6BMFc64XR4scBEtwmkyX4UhdbcyAJFogxeb64CBKWmuLqb3XLW",
  "key3": "4NM8awyK7gDoxtCaRkWaR7xMhqaqvQVkMxGGiMzaNna6W9ceKHpHUrR3XUEGUnexERuqGKxAGM8RkqvTJ6vwdjfk",
  "key4": "4W9q4NRdPhHMYbFDySjuK4uFuXqU2wVhJPUSjkSqZe63NZZv8T4DDp3YAwQadotuREqvGamd9MwzLjCRVs27UUFA",
  "key5": "3nsDmqN1awEvjzLwV3DJTAq3kLg6sGrkduUAeTYQmSkx6KMrzJsHtbv87zxanhVgPGV1KZPXWzV6kuYPna64eeXW",
  "key6": "4cc7FWV2MwgTqBiWmPgysvgUz92FKCfwZRkQ69rKaKnnYQprmWZSxRrkB1SM4bZYZqwjoCz6waLJi27Q7KDv9yQL",
  "key7": "34SxBz3d28198myoUFtUvx3kum2QoXmzqQaughzimGL9fGaDqdcRoXf424LMMhC5749JsziziThko4R8DwPTM1Uk",
  "key8": "3Gp1kCTKXHZnd7tbmoCeypwMGsmVkz6kXHmgtkcwaMzGNoNAAjuzEs2PRC46tdzLfFkxGQ18U94QM5o8p2BPhmPZ",
  "key9": "4pbFc4ufyacCLPU81JzHoFso55hbGkGuJnxzVQTHDqwtTrNmr18Vf1jH9erGQamD7xxU2sKRPYrm9mddXKGyerer",
  "key10": "4fM39K7MHGMaDBsEKW22zoKvsmUG3AjtsyDMmL4s41ktUMDVcqJXDApUnFmUQNUeSprLvCSgaqsJ5S7YHjPaUVHZ",
  "key11": "PaseLgsK9BPVNjZbfL2hZo12jrwyqgutb3A2Mu8q5fGPqdGuQQTb9p14cD7tNprX1cygwW3cWEF49hsuhQhgmyG",
  "key12": "4GPaAtTYnyy7eTwgKwExdjV5C5PaGrb25zHUZxYtRUBrJgFbbZ8LqAAFfofyW8YzUk8zZ8vp89PyziqfqzzjzM87",
  "key13": "43xRygtVVstbUwB16vvQwQHb5ixv1LWKWy4fYy3gEVCk1PoisgbJ5CLwsXjNuUvBCTQ1d4rcxuKAhgY4KmsZsuEn",
  "key14": "5b6GGE53sHNpnyWmwkMdcWBx1b7jGS1BSZFjJkxjdBqtyugeUYvq89haCMXoX5pu56HXFYqbiSio3wuu6GPT7kzk",
  "key15": "AwUjNLggg6ud544HmKEYwGUmzySmgH7KRrMsNCfcghYu5FH84tjom1JiHkGnKVSe93uLkjHpNwcQ8RnmhdwFdp8",
  "key16": "3qE17qZfJ42w77UBpZP9aw6Ttbdke7pd9Me5jfJuuySaqwecbHYyUihv1Z9uQyUoyPohzbtw92KfDTeoCDebL6ut",
  "key17": "2h6pvaHM6p6UywnnbbtT7e3TmhiFfXr8rNFAxaZ5nCEHXpaq4hmUM7JDg1AhTGLgwPV9cpMiWmhagWEDiZ97JvKn",
  "key18": "L4TZsiJz1rzfA6Abc3vhYSoeRCB4u8xZ5JXNujQn4xKQKqQsLZkkDQ8CR1yhuKLPASWS8cYfHMcH1LpxAnLzgDe",
  "key19": "5ACLWzx2jjdeDCohcJRPGuXWXUhJ7wZ3hYAsHUjmytrAwNVDdLLF3KTAP9uyWpBZ2dYbGgq2h6TahFm8WL8RzycS",
  "key20": "2UjFXNvLgsef4Tq5naDwD1nhnwuw5MwfPdzdhRDAsCEEy2s7AaitDJyUgUb9xQeaQbamMFHutMfqBEW42v9XieGr",
  "key21": "GiFbN1yvMYxZWeek9nQqxZxmMDjMTWsQFsGM7Vj5ZLTuYkp7TQfoLs2CzEN6AZFiBz33kyc2akfUmEWVix7PZuQ",
  "key22": "267Beuko9incV29QDAc51LTCXerumnZyp2TnX1EDdeuhnHosf535Dcm1MCH5LmxXgnZeUV8knMvtFMLsFn9MGMqX",
  "key23": "3Jg9d3p3tahDYCjusVzxzPyWc1kjqZqjzKmFvq3SBTkBKererHSRQ634otAH2WuoPrKfkMGNy8WMSdiGSN6Fjcmq",
  "key24": "3cVuHWXt4rVkcTHWnD4uytLddXDqwNCqm2teSNtsZUZo1gssMKxqSz1ZfRSbRDRb3vp9VmVj7Cg2jkqbXxzsW1vD",
  "key25": "gd9iFZ19pvmWjTCsWMdZ6pMCa4XxtJGuEzckU3DDPFE4yvzUHBEqHDfReqM5RjFmcKCewUwaHewPanwvrZCejFB",
  "key26": "55w1pi7nsvDDoVBZeUyx15xJGQBxqkAFcy3qfrAY1Z9bq4Xmzen1VAGdJkQADYAdrxAjqkcYXTtmDjAPoQYZudod",
  "key27": "3S3UZwcB5cnB3add1jujZz1DdTo2haQas3KTHxzJz1DDMJpQtKgcNXvR9ZR67CeCxyapJRyZkBcNpGw77NnPvbGL",
  "key28": "2VKEaFeEMzM63uPHbUBJV3NrzGYaa2dX1ycnNLEmGJpSBNp8hptDvJwFknt91uhsZWMPX3apjwQhoKwriVBgHFzg",
  "key29": "2AEi5UJ4paw3DQUvSbjEhwNU766DJBoBfBvcxG1rmhsFsb3LtiP11jbDM6PuH3YnD2GSVFXhp4aQjviAr7zsL4gw",
  "key30": "5TqWkmhmfZv1DPj5AuiLwZq8A51V9F8DfpvNiQ7bdtupTgFPV3vqsyfpujLEhvyTW8KBCdPiS7ioLNB16UfsiuoB",
  "key31": "41Dk3Qw7crbAq7DkaPMNCdrKDqPcNuxwDA69aFP3E73FaYVrZygPtWjTPB7qULB8vB4HRPDK7geYU5QB2hFVAXp8",
  "key32": "3a7eCoRSL9iKnGsB3fFzVeVmmzm98B9qjncjMCkgLKhJxMj45MsEgGR66FN4KF9zQh89j1WXW58oKRY4v9nQvLVc",
  "key33": "5TQVWbxjirrR35qkf3PDaXi3biWExQiipCeMGiKxRnyVs23RF1gfKwqS9vCxZ6FvtBzgwuEw1zvd161jHyN2oU6Y",
  "key34": "XpAnwkjVheudnRhz7h1wgUQbys1qKJwn4r7f54Aa7TnfXkM5XZXc2QQ3qYjRoGPbmAxJB6nRWBrt3fPURPseBSP",
  "key35": "5WUi5yYkpSjG72851J6xbTYHb3wa6bvJWMFUSPAZ9AYQqm1T9Yo7iF8vKutz9Vb6o92Ls2BMJCEeCv1wMoXfyazp",
  "key36": "bebKjY74MrtjySqJ6aHPnaanuVkMxREGeGWqr7qWSPtahKQ8ErN9SVmwPan54TX27d2xxnc9YVVJZZc9Lof9B8S",
  "key37": "xxBPXsXk2TP3ZfErhXezu5C5rfhNq5gqKJy1ZLPph91BjprYv2YDWdjyu1BtPmxvz8J5VhhEWZaSBE1PjsfwrSq",
  "key38": "8w536kngATWJoJugcPR4iMSnmnRLJENfpw7HYLoBafgDxaKdVTb9vVysBTUNeojC3qWYboxwnJTe8fCiPpD9jSJ",
  "key39": "646L1onZrzUmp8HYyPhXX7qPoo3FSLxhXBmJWnuCpgvubdbXgYK4M9sdXr2ojr7iaCZWy5mea4U5TwJvWJV9QqVN",
  "key40": "439fKAuunFxYJ7g2tEM7hS6iV5NPMdpeDBFxqGzTFXGjut1SJZJ3xZ4kk78fxisGiteQMT8aYA5kqv8uFYLnaoEG",
  "key41": "gusUTAXMJpvWik6K7rSV9BLAgAouSQG1iy55ngAfEQTZ8dktiQNRRu6pTi4ktXbWcSTpfMs3LRBoauouuUqXeiJ",
  "key42": "4BDmDMhPeQS5YNCiGC7gitKmeVta4gvrcpvzbekEyGaZeRiuSgGSa5kuuFKUxng7AsJCScQDJVcwueRWudkTb21g",
  "key43": "2Y4uKmiVyQsys47XZyLDHU5wHu38cKvTVtfwjAPA16wrmzjnokpc5dLbfAAGt5p54wDxDsQRbMRbnkUHwKgFQ3kA",
  "key44": "31VzCGT6vjPiXKrrrBHJxDocS2djXk2LDf5Y9UxBmv5e6McPcGzmdSZG46Sis7Bk9JsmKZm3ZVfxEKhz2gXhBxZF"
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
