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
    "5xrU1YWCrk4aG65mHpEjczRKmXghCiqk1E7F9Y3HkMtyqTmygGiz7ubjQ5wwmHp7Sh5oQoHWyPfNt9XcXoW7iPxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a6N5JhoH1u61ftiitvbBxGKkQWBh5cKZyEQa9tJTYBeCGNRDygR2Q3FxwPsTuBw7HmPv54agj9te76ws17dmxgY",
  "key1": "cE5oriVqNb4x8fV4yZLWSCzJFMmDPRWyYGDCnD7fUsor5edyMwoNrsEM6RjWW2b5WghCVpLszuqiCbELaVpY9rb",
  "key2": "iotfipiuLEGN9DEd38qL8ELcrbRc9Wti4jaYUjgyMRijgAmePoqXYwJzFyGcGDzfojKt99fKJ8Gn44RLXst26vP",
  "key3": "4Jrh5oBLP4Fk3veQqcxpPekAdSKbgEjMzVzyZDA42F921sqyko3cPMjjKDw5oQX3ihKQNEyAFwALeJUKya8fvUZW",
  "key4": "5zGAcvCBeHVSNwJY9cEV3kSkkkvia74s4qADXNKbCNvyU5jAj4bFaujch2QpNGvGSvuxV34jMREDbaGViwQAG55m",
  "key5": "5W4RdczWEqhQX6P5Dc71G38FcoayDpjQTf9P7BafNsQtKwNdmBRoJyNbenFsmFrm9WrymkZ2FAqhDLTDxbksPirz",
  "key6": "2zp4yaV3YsAtrdbKfJPQgafmJFFc6Gj22qXzCgf1MwqRVZoiWc5sLQ2rjzZGNbm65mtr296LDaLSVF7f7GFZDiqs",
  "key7": "5upPZqjux7VpvtBGGHLNpTcLmcZ62Zh4AfXZGgurXA1NPUvxfhfvoNK1XqDuccKmRxQZgrraC8to5vaRR7wntDux",
  "key8": "3uJDkkmDJVGiufLR9dQeyogTxt63dJLbdb6cVgJmTAjk9sy6DkmGUwuaLuyffGawezDEMC4BdMwDG4imneQvje2s",
  "key9": "4ifVuTqf6VQLQ7doMsujGRm3WAGYu1YzL6FyaW4Te8unhatNb2dPtokHqsH7BYeqJEqnvduw6rHSnUWtrfyxkgmf",
  "key10": "2UMGHUhiiqe6kMkPU4opshviS9fxqbgz93kLJ1e9pHq7u6WTsjivA3bDNCcEMJY3wbjAnPXe56RndaparGUBmqdB",
  "key11": "25723GXxEDfXtCfJctYj4xQWV4aLMGsVQ6PhVaPniy6uz76LQ8pbxjjJNz1iwcz29wUyFPGNhc4ZThUZrCmfAD1V",
  "key12": "5KRwS2UbZ8DgeULLHDc5dyZj9ea8SHeNjnxZDhv9JtTdWgYWG1G82c56rN7j1q8tMcWaeniEpvhpFN9CivW8Unvx",
  "key13": "5AHQLSpHBBESscx3F8LxbLNnR1Lf6uGndxfKuDmPaz2bA17taChrYnF82Nd782GnUu7kWacGXod3Xz2qjA2sJaKD",
  "key14": "2kthaPA3aprNiwBaJa4ZH1KwQZeoUzcLrPrQp6zF3bCpmX1TJ1fB8bDyd98TyvtPoNpG4YMDQppmDG8cYev7TH1U",
  "key15": "rkUduQx2KhYXkXu28xk3Ej5pFEuLqgx7AoW8wP6B3hR4Ny52PUSu9TaJyg1uEYhfpHq471jRX2NLrW2FRKznK4u",
  "key16": "5SMNP9ggaGWuRfno89LBhZ4StPbzjeQqB5jnztFrNRp9ssbjuexN6x7JH2NmAUe8YSnZnfnLFNGeeiyXgjnL6ePS",
  "key17": "4SV1CfZDb5F3im3CxHXXwHm6VkSM1oRGF4RsLx2z6UmoQFJmmzPsN3N1NSebHjvXvqbVAKDAjz4J7ZgoQ1P1LWBH",
  "key18": "3DLbjjPpNinGNK21uYjRfft7F42ctGFv9huweDkugCV8pwrVnDBSsiGUWwDdBJPD7FivdcngoTR27sZR6ep8SWmq",
  "key19": "2sqc2LAAvoujCcot9vnUCLq6hew2vKnhnMovrxBuDffo4vxzdhtWSihxEiSqQsALQPvYKbuofTzdPsdW6ki6vzVa",
  "key20": "3Qhp99KNXYwY917SGGVpTLCcdU2NhTGKr9rRhv95TVbjBDZmCKJS2HQFmEoKVHYcgMzdqCrj6K1wZ8v4ATGeL9hB",
  "key21": "tod9tDPAJnqE2smnoBe5Lk67ohCgXkPCrqkxey9zsQemSgH8uKaH2sSqQMSc7LrTrFsAgit5dYMawEoBS81qnQu",
  "key22": "41gS7JzoM6t44MQMDVBWwBfF6K5n4v2CSv5ZadWbtVJFqhazEAzogENu6ZnJSDfdQm1hRdYXSW3CARRhuxDozUUz",
  "key23": "44xYrJCani6fypDPrwfwUaY2EskjGn1L92bNCD4GDRa84Hmdt33cYsjtz2FbY92fyrNbtzfvoaiKmhCDkJeiddfR",
  "key24": "5tTkuwoMEUqUUpQ4L9etS8ZKKST2cvbPVE8DtkLHsq8Ze9kFWRyJ2Y9DNQfZdFb4YXyS6DGnzDuq539qodpYMGCh",
  "key25": "33gbubwWvBjuRgue654hP7TESu2UuQzUndBLXJ5pTsA3ttWDvY4pG5dBppshK3dH7hfLFuPtLDD9G8r7shN2SWDe",
  "key26": "3mo6ALXBo3SbFcJ6C2kt7ojq5haFDjCY353X97HCFGZLY8dwi9hsa3WuhaZZoUnCF7mEd5eKRzo9eQLsaNeRtS82",
  "key27": "oqU9ibDgemaPtiHwaAEgvCUJt2ZdqiPZ88R9ggQR4zErYwskpjKrtB85mv2R92JwrigY46F5kTSUSngooy6z9bc",
  "key28": "m9wvbCZRSz5EfC6smJ5zMp1dMMsdQ1QghJfm2UxG5Kc6FrHe7pvGkLhrLzrrUTfFjgvDdGLBmRzR2dWppgVCCyU",
  "key29": "5zWhRrkYRuy4ogeu9fJwvxFjuBHSGfXK4kSRseCx4s3bjKPM6r1S6UQUPCqYhLdiu4PXKyc1nXdeNt2FUkn1kRGf",
  "key30": "5uhoa4zhPmgSMkWswypwD7Y6SpkPgeU1Z2JadktD4HbxLJi1LcT3LsB716c55T71VL8ggNu17owvKugBehYx2aZm",
  "key31": "3bv8qCq7xch8EDBkUL6zHpXk2B9ZDYf5HLAhmw2zDjbDcJ5FhT5uksswB65wDpUjAZyFZSbDQP8LWjcWGagov1J4",
  "key32": "5MRt7ozRf2TkxS7cJHQM4MmTGyNShUD7qJyBUpdVBs4D1EHD5dmpCBDhzAqqVV6BmG1hkUo9W1gGkEdLKkFwBMBB",
  "key33": "4DUNEittPB9xg8jpT38mC7Bh3HCPaeHiEq2GABwSfFqzyy9yDsK1iU1tqXuV843Yjz6xxDNersm3m3aDETvpE1Bc",
  "key34": "5D5kcvwQMTEoVpJ2tquP99LphC6HLWfCNPyCMQR6w36sUoLdo7KmFn7RtWfvpbqji3GFZ2QUv69WYZzF8jxSyGVo",
  "key35": "PCG5fsFqjY3uGv1DxfR5QCfwxt7ZQfJTuTqhcEyNN4TYQFXcN2Vtj7CKZDJqqoWhmbVJ6vhAN6iuLCfgAUfTTgM"
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
