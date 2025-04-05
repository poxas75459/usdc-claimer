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
    "38Yt8DXcDXJ37H7YJypGUVYp7XGQsi4xMSrmK4ZCLJbnfbcGHD769jDmSrwDuJcrR268emzdUHUt18Umx9BAWa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEDBoQ5kDitBwEH8RrcB5xHitrUtKUyTpVwdHYwB8trgBc9rMNgaUa6YwnkLsAfDP8aJ7noMapGNj3HHGjpEeGM",
  "key1": "xu7WUCWdoh3cozywKp2kgZ1d7CrRKHKNwDzeAMS3omrGa2urn77GiuWTBfxRZ6kY118ekxnAQPRPCFr1NWUYsZi",
  "key2": "2urdYrH2ELzBYhDW7K575jLH1S58y2BUtA2qPbfBL1Lqnmmt8u1FDBPhcqrEzhgEtJwoktV8LNytKgEQaw5Z2gjX",
  "key3": "5NUwULp2aeagtEQrss2fPyfVA7cymP1HDAG6H9hRwAZXURJs4ZHApxcWVZ8nKsEdYHpHWKi3qqGuukHFrxq2Q6d9",
  "key4": "5aGekLFFS81ycjAgsb6xW78xaVHz8nbjJtPAz6ZyC6z7BRoEn8w11FFALZiuwA22tvMoocesR7dcxYvhfRYsFfdp",
  "key5": "3BGJ53CRDresTpZBAKtELLc8uEDejCvLhFBHEHRN7QyzCxTWQi3YUiKqCUy37UF3YavRt5fRT6SC1Nfi28uURw8L",
  "key6": "aDMn4bhuJSA8RG9oTzyAYi53JtNTX8Exi2otADn47qJZBVAfnMdXkTSws9bPr6UtghRWYCpbcC56UJtJaCwirN5",
  "key7": "3BX8td8pvW6PY2ViZx8Mf3HkpG6XWznUQG8ekiEBWX7L6Rh6EoGiyVAv5ZscmPFbqLcKM4NqnRKXh8XcT7qKFz5E",
  "key8": "2gLGHQtFX45ZBrYVdbCMw2o2VvJkwb1x7JoKFjK6cUVVPhifSYFx6SVVYuVsFcfxwNxbsTN3wjsc582ydNumJtRz",
  "key9": "5WNoHFLugB6CVUCdQyiEuruL8iJweGcZqmFxgedhTTayjeucCzRc34JenUx4TH1rZN3AQ9bsD6q7RvrdPngtEvDg",
  "key10": "37n2aeNyQMmMbEJPVc2ojvZW5X9n4BGgQR8RMt8qQjCLFksAPdsG3kWu4XrZyVRkA1hUerKxrQB1httZibmbf8sW",
  "key11": "2vEdPBX47ecvfuf4ihTryGM2Dtf5usRhHnfjBjiJnXzuiA4XUtAabEsuNTKuf5hB4K4nhmqjFTYfbbmu1qEnTqZE",
  "key12": "ZThgH3N6LYSJy3VoT9T4a2rZxW8M7HEeBcB8mBGSetuWrwT6t215yXVx8Wm2eUm4cpmKSgc27Ah8fKNjJ5V1JYR",
  "key13": "3TwaN86cH3nLBmaCPDjH53CaeTrCt1v6T5AUJ22uHy8uxLYG74yxbPAckqeGHZBnrvqmfzkoZL5zoD3kPcRnve41",
  "key14": "4LQ1mUVY1R5DEZ5adDWvARQERWcLPWGatyrBJviJhDQNnxQyfRkmvABJUeDqgaS1KyozgRvRrbj9rd3ZfhG84i7j",
  "key15": "3Sh6AK4FrW7m7wfYRU3C8KNEsLxMAQ3q2XMxroxTi1tAeGZV7jJqHhjJBUpZgGyLJs3T7W4rag6gTnoKbkhsTuQU",
  "key16": "3rTJxyEr8FY7xjm6DDPt5yJav8m9boFrVc2f2yBYcxZAZLKMUGToutqANZab1ehcFqxvQpLf4qyparSofqqm93dV",
  "key17": "54ZoS2fyuBPTYgmycFFpnBZJop7oS3cS5K9AjY4YmzopeouCn1hLGodGTFLEFu2NqcdJE3oYgQHeLPH3ANDzs2WM",
  "key18": "3GFzivcWVpnaUfE2teARFqcZ88n7xuykJikdvs1uSr2Cm35ByB53iDemWUxoJdDcrefNsqJaAuhy1ajDid9bV1rF",
  "key19": "2bCtF61md77mDCo5VTH95vRox5HRLVTbAeCFu3n9P2TWAtAN86vd6xbqoBoXV5BDqAnQZMVxFkHcfwxm7yKRzvv1",
  "key20": "gvWoTyx7bU5eCoLhrXeR8i4RwRXKEULJMQ2mBQitvK6Vv2iF9r7MRLNWwTiJbwwPkkQSo8GvogZj6Bb9ciH4R6t",
  "key21": "KgAXVSNEKx3AVMeXSWemsjTH7aMfxAFSzr6HnyDRj7Pj7DmkQUKX49yXHAnQfxrhiFspbAqysqG6f5meQSrsa2y",
  "key22": "55gMryJX9kWfW9aW55dtGDfUk4iWScaj8EiMQhCJWdyXqQihgQiq9CjwadKXG26eo3uxssvYtHekjYS7qC5Mt9mv",
  "key23": "5CK7FN2wU9nXCpih1Vk9Z91wQUxz85h1gdgkAnGJejKV7dQT8whFdh4rnbpc27bH46R1FtbNt6UhBcUvJUitWEyp",
  "key24": "4NZ33jqpCbQKnzu4ea9NkECCF9HPDuJyMuy3RHLSbubHUojDHjgybDtdrpRm9UQgtNNFptjf1KUVZfdXqyKf3Y84",
  "key25": "3ZVfwwX35CaMkSWA78ixJGMsvdacabCCZ6ZizMRXDQmTP3NnHkrqPURJWZaaoXCDiFM2EFWBYsRGY9McJzu4G5Tc",
  "key26": "3RVFUW89EqNgGc8uLWUnDp5NhAXCfLbDYq3W1YFydQ6dQibHpVFaDnWP9w4cMNiX6n1V78Vf7uqXRSdRLhdiG9SN",
  "key27": "4ztQXp76QmLAKR1cTvr4VUsMXaQ6emMeV2HMKayvcCZZU8u2NgXAvqRw4GdUaQdVWXL8hALztESsbUk8iXQDNuf7",
  "key28": "2sBhcp4B5TpKkrAVDbujsB7X3hieD5SAAdMVEi3w2Th2HRfXz2bqd1rtM6nhDNNcMpKV849mHN4Z3z7w3s8ixynm",
  "key29": "2aHFr3oByMzuk8ZU4FKapuTpjtULnuyAoP1eCEWvearauuT41t6sQsvo2oSKLJxLVc9xJrKYKh1gLNjFRM5Gc7Yd",
  "key30": "24j6eVQMxBwzjmRZpNo3bthQh585FAJARwJB7nmAeS1GzTJ9AFVFctKuhGo66js7DntWuvxe6zaJbzDsAhjdHrEg",
  "key31": "4x5fEBDGdHHXh3TyYT95S5RcZ4kamjLueNtpdmQj8APV4VganaLaNM3Sr7NWFjznMmzxoHimuwkQ2wJhq3PTLH4Q",
  "key32": "2k2nNQUN3cGx8EDBy24AAUmzVMgQ43bGNuQVnBUzPbqSPHgCtFQJzW1ftWexqpBtJj5SnM5uAMJsinqiVgkC44EC",
  "key33": "s7vWaywkJ3NXCamY6iCMPLBGh28tNjEEvJx9ifGz4KXLLKX7Xnj3NwdUsfoz2MtF6FpMA8mKGLJVvmPdPwdfjS3"
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
