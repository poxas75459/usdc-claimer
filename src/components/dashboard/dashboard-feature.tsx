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
    "2VLoFg1TXJHDA7JVBnnD5SdTvHUKzEHm42ujqc7BqA8Hi8XBqyWWmV9aHdGeEbnisZevhKhfXdWNYmzLZ6oGGKMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkGKLZLw3up3JtsRHEYAiC5NGAJ1xgEBAWb77FG24bg4bhS699kidPo6WysV3PxPQHduiCiarSyK3Jav9HCDtoo",
  "key1": "48xpL4CReLjvy8CBV5E6KFrR4vN8yyu7W32kBv6GFVoADXMZQWaMkMaRTd7a7dZyyqorq7b19afphXakaUGHtxvM",
  "key2": "2S1GvhnZ1UeQfKamf18Qj4ZSVKmAxK75rZPHz7FyoxgCxkTa41sNPE525vgdvpTqiCZaAheuQwgoENqvZLVinkvA",
  "key3": "4LVtDMXD73Bi7HwwTxxsStaETEyuSjHLZL2TALtf7zrMgCsZCxDiUxo7ngE7KAYdMFqSW5AbzQSRv2h1pKtkwJrK",
  "key4": "5ftgwZK4VkvVkFchJCzqWD39wkGHdfK35SHQLpBJERCZLBDypoCiGEg1SMZrbpuJkDy9LcyAhQt9whnybtbNfEUM",
  "key5": "3WgiUrz7QSnW9gynrnDzSNDUDJG65Cb6yGyGUsNysvdMYY6d3VmG5DkXCGiHRiV95hzKfQeSWvxQZsTrByBgRP4n",
  "key6": "AfGWsXh2VzAk6SWHQBCCtKXWKZUQuV53EvUS9qmg3JqMYKYBcZa7b3RcTxStS2QTMinhs6n4jo55y1cPxSUHxqM",
  "key7": "3zqpnazdMyca64UXiLreijKujek8K2CsmwJ4SWpfZZNyYQzP48ruunz6Tr6W1YJasHLqfi2RkauwstKUkMUD7tNH",
  "key8": "2VxjwMuQAZFcA5gz1oeFaYy8acZtrCKhay2a5pM9C7bonG69KS1TTav89CMUggjYxWusVy6umFR8yG39pYQMtZqm",
  "key9": "4kvMGTB2Tn9Zdo8QFhKhsNhVxLXsPydHq79XwTMtP8Uoq6QM7U1PurqmorWRYGYzEmgYXwgLsDQTA92aPBaKt8pX",
  "key10": "3ibZJasrGB49EhYkzo1BHNnUdLy2Hed6Uru4xfwYt5vq3AvTQhDnjju42kKMjw5dANBBRNEe1JuF4t4oMbsAfYLq",
  "key11": "4qd4JS3uBfUyMwvLtSdm74aKaAXi1xCMTw4FGaLqqhnBUuUpft5vV7t6Zc7nMkhUUACANk2fWQR42FVXZoyx8pj2",
  "key12": "4USjhSfRdrcGAfu9HFdoBEekMtnY84fKTuqsrsPHL62TAE4mdWapc8sTyc8tC69QS9XgPn8kEr6Va33FSVFCP5H6",
  "key13": "49y8EJEUYjciFFDbuAKNM2w23WktoMf8L4AJazH9Z8VBziNAnh56ueiEQEpxq9yAxv5sRX1svnfud6miXfnHpp9U",
  "key14": "3RauAHy3Bt1u4DuYUgxuGpSrjhGyTauuZuibsRZk51J7DFQ5EEWxptP7XcxHb5ET5i6cCvKm5DzomGBu8nCggMVL",
  "key15": "3MzkQbMCTYa7fJKoc4ZsVumsZpwGHx6qAZcWSipRyTVH5TchLkZ7WNCnPqc6vAwj1cq7KJswCFm5Pk3RRqdaWJ2s",
  "key16": "MoCNpom7WEM8BF8Msr6WTiYq6G56WSSXCidDa7NGJREjAFeG33T3SBjCk28ZRaMB33cjzT1hEy5nyEZBBgirdtu",
  "key17": "3dNXNDXYivSRhf9bFAJ9axdXmFDvnWJ4Q16hVhAdc7MH3CQhAVJsZjXSfRkFnC6T6iMMwUwLWGcde2DErsQEBhun",
  "key18": "4RhuNqEZpREu2PTZXj6tfhSn37uqXFAKQPBQqqqHjm4iMebLkHdzMqHu53irUFDUnmABGfPh9rznDPmD12qu21SR",
  "key19": "4XhZXdEGuCEbyiXAoBsqw2tswBBMKVLPMt49NNfMp7CXBuawjivAKPN6Bk45LBFEEmcFduNmMxLqzHxrJyhr2zwW",
  "key20": "5LE8eAYRWAqijigVGpMg9KY9oHMa2ZExbqW11H2fT2SFntGJDe52Wx79RGF94vcEzHnWJV1JpqL9LE8WwnTEH6r7",
  "key21": "ZumpH9J8QxjSFbxAYKkuJ9AQ7a8HJDRZs3AypKXYEHX9LN5EER27odxmv1Mxd2B65nvMm5LnQhuZVa9TFtL6CyE",
  "key22": "PvExYwB8NN84CwjePeEEgR98cepZwLGJHVcUatkP84BAH6SRiVkkDoME1v2PwSQUWT5LzQjAhnvL2a5AgnajHRz",
  "key23": "2CmFfcZKu87L3QTHcFToGBsLJ3E6i4P2Br1AeJDyZA3dYun2XpamH6swgoKoZqnpeCBbvNxmzqgb3dxEcba2AZUG",
  "key24": "3Nsi2ve15hxYJUu9r2khMMVeEfZFn6BnpGchcUshiNHVgz3KgkZ4DKGLkQuPLncYgG5vB2G2NLYBVhqDJdmBRrMR",
  "key25": "2N8N4aiUrb4WzyYohx3c3LweqkQDBmm9688wZsfafyeJdFXFyaLPR6i2jCeJXJ3EDXAupdfFirKufM2s28dSV2QG",
  "key26": "3rYiVBkLdJfjWjhcFtbadUHWkywPCs4b5S4Du5GZKLHiSFQGCjMh9ReSGw5fxwHyPAc5vpsBcm1Z9B9jLuBWMZRG",
  "key27": "V4jhAsMR7nUnBwNY5G4DtYzV3gTHixpBMyQSHaJ7gn2MS1KekDBTPQ9utyE3doF9kDNbsv9Vvhopd1ahnnwTh9q",
  "key28": "5G5hK4DvLtLScTePktjwMTMFfGnWeThFs49YG8nsn2KEqk77BEKjeon6YMgy3BKwu4r19puEW2kVLmfZjfcjn1v1",
  "key29": "34UoVHxcB8DYNJtseJ97JmM6atAWsLXeCjQ5fRXnWf1JjK971F4kkPGU2kMxZZMDnzaGEQc6ja4zwoXsX76ukfZ1",
  "key30": "3ADqzLys4KUptpL5H7WA8eVLcGVCj7tbAAoXSMBafdAx4J9f8Msap7Ea8VKTj3tovA4SYbwSZrW656qiEpKykVFE",
  "key31": "3BN2v81tuobUWfnF5KfBm17GfH6guhkKQLLrbmYaUfGpdhFSBkJjKDBb8bvPb3pEeX2h7cyvTvKxCEbJMJVHqvsW",
  "key32": "5dhaLboruxfSkwhwS3TXsGtqAXg5xAjgeWZrbFRzyye91E4YKFKHKZUQws52QGdb25hd1b48XKUt7GHR7E86vynF",
  "key33": "4o6bRcdvwUbdNtmxrMEEbhCsEQM5DompdBtvW3AoSkSbWB55rpzu8B3GH3o3mHgCSE5LNyfVJKBgg6YExXCKUPmP",
  "key34": "2svJJ7R9VnMVgk3TDfTk95nk4RNY3NMntHB5ktHLZ4TMrxwGtopDLnK2yFG2tpZzwpumULLVQVLbe9GHCgmeQorS",
  "key35": "3kytx6M5WT1aM2TB54ta3Vggx7Wc32MvdDVpwKCckvagXhE8qzw1Wxp4WbdsvJjJvJ2PUL2arFvHbAPCVR9xTT4u",
  "key36": "A2J4pn7LZ6UvvbcMACNPT9XEQ2AbirsHyWqre5EUXTb1qWB2dELE1JvqdZMzNtnm7cwJsomPLCtzrkoyLgXwShD",
  "key37": "3yzTWrprjXcKpCNaAhCL7WrVjtq5h6YoSyKeVV5BEDmb5Ye3mKCbfXMYNC6EVFU8XeteUpmaHjAcanj8DEyDL1T2",
  "key38": "2MXkkqahXnxxxebhTXL4V6kFZEYAGPV2QWd2SbD1xdy5Dpb1pz9VsvGyXyn4cTjUKCr1cG4zroXimN8Lb3TcYV5F",
  "key39": "5E7bv6qsTH1XfoFD6yjhD1x8Ya3D3gGhBk2FN9Pz3BDR5syyDxyKC4ztm5ddq9BKDv4PW7NvaBA3YzbLnEq7jf5M"
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
