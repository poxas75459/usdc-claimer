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
    "okXFwMVUMpvLZ2jL6qc93uEGDs5prqwoF5aJXZxVCoECxWQw8U9TfZtdivjiWr4qu6YiaUNfuagvDdEm6dEQxHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tr4ZTnTdbw2kVujY4r3FUL4Sd5NsDTrWYynYgqidtgKV2h1b46FUfBXqM9Vq5dyrqbapSZ6as8ZpK5Hisc1HTUk",
  "key1": "5aG4uR1ir8NFVm7s2D6j3HmSndxJPWWpVVNiN2jRJs8gxdgpbgpW5QUfwCfdEoGKtq2yQdbV8EiUPinHAt77SaSz",
  "key2": "3hsTPZw3ew7cso4jeVjCEPcvrqnSVMZtCU2CnSPGyPdB8a3defy2A6T1LvqcXYrwaoJEmjftcNrk4997XbqnDneS",
  "key3": "5sHMhjvUq9B4G259PzZMDrpVoqCkvCCVQtnke4yoEMNB3mKhQzAUw83SV55VQwDHztYNgT2gZaZ6ymXowFMEgptv",
  "key4": "4iKHoL8mkmoSjDUmTCKsjZvK7ezKQ3P1z9uZV2Vg9jRFSRbiv2KfRdmuF6Qe2K5W2atPjCNauwJDGEodq6eUh8ab",
  "key5": "sHt5aXGEaH2iuq9zbUqsNfk2dtZipqrZiCfmPJFLsX1epjfCwKb9QZw614D3SZDRbxmjNHbs1Tr1arK6akJPeuy",
  "key6": "2h1S9YTMWHorYbsNAZVGXmQnA9PRucCmCu9pmXbMKJHJ37KoLou6sTiWoPxmgxeqjkTaqFGTiUZjgkcrmN8Eq8uM",
  "key7": "UZ6MVEUvwVmXVN3LocqwBp25uDKYv1jQon4TxrMeGSdXiAhk7fzRCNdviDSnTuTUm1nJfshWry4xpxUrXweha6H",
  "key8": "4fp8bKtHpwygnGDBNeWyZwu9PaHE7QqPtzBd8c4d8LHwAiWM2V6TfSmXmFux64VgnghntxS6AE35U9fSW9XTmMuF",
  "key9": "3EdXoydsYQVKXtcMETBqyKXYpySHNAaA9VNgMezTNA8UuWioNd1zmGFai6JwDoNvGDYqFjuBeMttDHDDaZampRZm",
  "key10": "224qSQaRWmMEqZ6b3AAFCZ779Zz61x1atXQbzFWHS6PqSYpHXxCZeeKx4E7D1Xnw22iALurvAuVfY5WiaEqnaFUZ",
  "key11": "4mrKcByfZ3iv7teSLcKvH9pmfwRKYXXx7nQHHcofE8i5hyfVbHDS4At6c2tpbXZyvYgCiAEhZCeJ7gfVDjeZjmhc",
  "key12": "ByKYe2jXgJCpc2CALTh7N5tZgagVFXXt3ghzVtJD7GNvC4D9m8pC7n6o1GKWboYjnaovCjb1iCJc2G964yuEJMv",
  "key13": "2p3R2MLc2SecBA29xQKVCg4SzeYBCa1szLnKfG77wAnkW1kx7dDE8ioQDFjBn84bDWpxwJZLN6MNBu3UgfRKLQRP",
  "key14": "5x6BBV2YLaKbNT4a8E8VDRaSSJVqXPfDjV8w3vKfqzWRWk1hhqmoH2Vaupz6WDVXPZPS6YqPc9D2wT3V2qkWnyZk",
  "key15": "3wNidiG4pkFMwFr2TsmqFuc3hBYLW91ZZC5BRxYVvipyVCCMjC4VFk2h2FneStPsr2ymZV3GCRVHVffpBrdXbMUX",
  "key16": "62vFq5RCphQtb5Kh4kaKwuBtBT7VX2TnG7HFsbM7XGZh7bwfvNKbtenyv2HrHzAaV9TaGXcPt1uUGE6rnJXsY2Sv",
  "key17": "z6cn8gdFxtPc5ChCxK3rnSCqLNiA1sngjN2dAzwsgg6Uo2ca27u4xLsXMKgaUU95KFGZV8t5kvqEoYBwqbf3e8R",
  "key18": "4cTwptUxN7sVbNdNpBQACN4wQr6N6uDp2wq9JzE7eSWDje7ae4yKamCeupHknQcvfB6t2XemNiupGxsgsa3zp4Th",
  "key19": "3oPA3qSvErhJ9swSZokEYPkcbYEeJo7gVTsuoaMaJ36Bkw5ZhQ4phBJufXb292vYLT7eRj75wpeApHKZ3STT1JT3",
  "key20": "cnqmhkveuseRwyFEsR7hnW41Eiw4UnLNFou1i74yiRq68KpaZeE5LW2quopwotCeHNBhSTDhadErfFemCrzygaw",
  "key21": "4eC5sC23UioL4anvHqgx2C4H7jAKg75YAZScLYHLLbk29nfCbvvXDD8z4aVifE2YNEuu2XZibHcSCwcAF87VZP5J",
  "key22": "LemKXTAqx7xYvLxZq216hBgS8xynFfpquYvz4g7C1pNrc1WsEwa8Ffnw7SFh1Eg2pG8bsJmTTYWmbYLCAtSBzoU",
  "key23": "3VbiZRmHFXmu7gchvFcBv7jbX1VXaCkd9vcK31pNMFjmmRvaxUzmgDSBPyV2EdVmVWKYBxJMZpYK6kA5nizFgpBH",
  "key24": "zZxSMucMVVdqxZMGPpu8n8JXMeWSGySSMhjJSNr9v8CSuE86DQTBwAc7FozpPJgT3erTCTFyEs8oDEgEToUQCSJ",
  "key25": "2eJN4d6HSJ8Koh719QvTAx6r4FbVSTnEnapQkarUbY2eF5gfbqiLPLFuhhPjcL5YmcWgg5qyJEuF5cc9hMMqZqRm",
  "key26": "2DCyZbSR7XJq3cgCUmaXxSor8vBbhmMtPmrfBY1FFMQdeViKmhMT1jrMvQMM1AY8Y3fSsA5pJi4B6PEcUAGEn28h",
  "key27": "krKSovSkD1QLb8ahKWyLwH9bCW1oUVK7YhALLuEuwFfLdSSJYjbHE4W2n7PZq8HDXCpD1AEsdH9ywwUErER5251",
  "key28": "51kDhf9jMhVrKzdX9fnLYF1K2yujUBupmw8YFWyP1yV1iMrYn7kzFUtDcHAMKPzF7g2Ubfe7RvoGJneHZyhTYJtK",
  "key29": "5Rs8SneD6R7Sy97SvSYhXjn9ZKBrBMasY9rF7EfdrbBpsJroM55adkt9h2MmeGZgLoWianLgBH8DEtNxvnTtdP7n",
  "key30": "3xmFrLVuM6LiZQ7Z3NwYLow5KrKGsVRRdjDiDXye1Xi6Ynjk4hthHeqszfZ1wRWVRZLNXvzXinT7MKXVQEG4PBV4",
  "key31": "2NTSSJG8h61de4MdM1Jo8AG1H2of9ymuyuvzPqYC7TtT1iVKR7koPMqYxVbC7CqkSLagB8MWeX4F6VxSTt4sL7dD",
  "key32": "CscqNspQi8NZ1FbQ1gMTirwrKb98NeQfEsCkYF77jhSZQdPbU8ZsMedzcpw2SUasR6TZSYKPkCk5UFPBKnXgxaU",
  "key33": "2viLLEXSofabitEZNfP1z7faVPCJ6EaRa1ovhHuB69Y6VGK9hb2stDwSxWHuUQ5FwNSsvTiQBwKRCx3biB5xmy36",
  "key34": "5cT4cacfTT56Njnbg9rBrFt5EHN6pmYZAKnuw9Pk8LxReKB3Ccq5mwePQyURN9BDTqUDaRe5D5xKdFwPX3tGdtrN",
  "key35": "47kVeWrFgJ4dVTSBGK1gwkRSubdXTaqVCYnugfg5L3GUbagaWmJa5RHNXo4q3EpV89BPA17wGePQJAcZbFa6Xd6K"
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
