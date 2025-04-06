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
    "47CsDg9BGmKKB67osanqV5Ro7ydzWaaqe3BiU8jVwtzrdwMmWPUrYWJ5sodnwkvr1prqFB2yCX7HwvVw2qqEPwr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iKLronLu7H2968V4jND47bLEvJP95JekkEwQe3S7EHmuX1KThk8RzkvjH7j6w35DE8qCxW4R56K9VKHj68MLvtz",
  "key1": "2DPUMauydo7fcueo2R7Hyw1hhFRGox69yBsnEPKazP7B3E1pmUnWxcoiTkmUZu3Chj1k1H6Jm8ZPNVNtyYUwqeyV",
  "key2": "2qVgyC8UR8jWgy6eMaQyT5Y6ib2cJKS9TNcQKMcXPGTWLw4TAXBJizw19LxHJbN4LCdFWiSopsJBB77dEFFDiiJG",
  "key3": "ej5xzWbjTK7584EUV6KvXrSSgJzjaaEJm8Ga1R8W3QVpCRfjHcGFSsPyz1KA83LKpdmVWm3LcA17qFW44LstFse",
  "key4": "2FrhBVVxDTCfWYbbaqrc8A8qWrDfv9g1dvLgWLDJruDtcwFDXZKRFfHjFbJJEaoD66hvDFmUGPtFXXTjW1Poh2oK",
  "key5": "m27JVgwLr1cxNVCHSEceKmemtu6vxyQpr5Lswm14wYoB9mB7KchpifaC2sT5gry4wT32PMnoe1QrPgvyW56yQkF",
  "key6": "5KYPmHcUhdK8Sf6iaUfXPVeiF6mozLdHpJVHCYQVNn5AbFuZFCMVekURNoSzQ6e6nudeP6S35UYDiuQ5X9P1tsch",
  "key7": "4oTvcdzJjkwNXekT3KysrqWbjqSni9RKf5rEAPazTfBPpfSfPJ6Lt6UnbnGYbBmLcGjaifCJzEb7F1Vr35Pp7xZc",
  "key8": "3LLQ1J75T4xVTahidCaq3HoX8YPPohLVBiazeEuwLUuQjGqL4cEnNPQBugN8CNFcN1YDADDrXMmXTUP1pBqpbrBA",
  "key9": "5PcCKmGwEq7DHAte9ciyqfKMNYLsfrN29thfbtTYSfbuZfy9FbzofguXHxvC1KN6XW1u549SMiRmooMmJMwdKtbE",
  "key10": "4dCkcpWAFt9Tkrn8s5twcGRkgrJ5LDGd9ssZfYYQV68rCDWJADWmBsmh6YKbM1h3NXUrDP4MgaPgfT3LTX8Y8yTC",
  "key11": "5kBvkemtBQN6kn9nQPyAtJ722vQErRasWGXkSJFQEzN6n9R3Cns7sBHEfDm2XfcsJWVvyVEtcNe8dS32Q92MJb3W",
  "key12": "4HcCpvQDLdSsQLeQSq8hnUvsALWHJ9RrCrUjHcU3QN1ikYcaejwGS7iBYMHJ2gzHtwebaXfaLr5EtSPRYDakY23L",
  "key13": "3w9aa9XAGDGsEb6BkV5ECSH6AdcYpfDu3ngekeQDUCwUm5UtJYJxARSmWj7SU6pfk6MBuoS9T48yGCJvPdrGGn9d",
  "key14": "vk6cHYum3RzgehM1PkDnoMRJZBtHgjp56uK4Ttm2BkbYjSRJ3mhvbvR7fn3XouwT9AcfX5ARQdiTKFtiuaGcKVM",
  "key15": "23Ukk3gZahqrbJx3gBVskfa9EHJ7o6PKHv1YBcYYiaXMaYRB9euKJu54X5auMU6Zm5PDjvkm5d5CPacBXTK7Agee",
  "key16": "5rSQ6fScP4SCWzYqJ5ihEc5XTXZdn6y4EiTKbmcv1BRXcuwzuxeo3suvQERFBtpRGP3ccUDDD9HCNoRN62nDQWZY",
  "key17": "2qhFH7ntUGPqwN9ztJGGGZ1FBoWJJhWTGatxQNpP2zaa8dpj2RiqweKFLsC9Md2Et8Cqw2QzYQH9fJ7qAWdHPAYC",
  "key18": "2dwdZNCv9yK9ULaT971Mg79bB8eH82CekzyezkdQdnV7KJW86PX9ekG8CmyZovM9S5tkPnWRaabzhd8dj7An3JBP",
  "key19": "MeHdf9bLbTsfiGDENh5pwLzztfVbv5WHD6jtremY1eH8XKaMjo9tXVNHdsVFjBifpe271U4AwkQEictSUGBijW6",
  "key20": "5s4DvoiPXw63VRhidYXc8qZpcxBG1zyzyQKjfdGHrTfmLtBXGivmgdSJteUGSp4CBY9evQA6X45XPyrNkmgiv6G3",
  "key21": "23T4vbMHk8xrZkkjtV1xnnhEhd3Drut4LtKQRX6vZmppLUFj7HYjW8dCnrLeReGfbmJ4HPRpkvM3oyQnC9iG5kWa",
  "key22": "22iV4YbRkDmMxuYTz7gUrd3pp6aA84Drm3pN8XreYLuwZLi4zmRfwBYDtcU8YM4qJAeYSq5ASKm8JGrfF1DvmS5p",
  "key23": "2eKuvJ6Adef8VkZNPL2rLu3bmY48BXo7k7msQLxbCw1jXusNbzv6M3xNyBUiWZRGsSBzoFi6zwAaHWivJ9qeRcez",
  "key24": "aHRhSBCTt6VvS7a4VSa2MpE1RkaDsymegBhdwdfZ7hdMrxbjUFbtRL9YUGB8d9JZqDv3XPUmiU6Xxs5tdkaimvU",
  "key25": "5igeAj7L3vkNRez4B2cuRTSWJ6zsKmTSqLyqyiFEr2wMDtkk96VcGohWUM6nQ97W5iLveEM5GsXqV4cuRtptkVXV",
  "key26": "hQH4UawJpaxeTAyZS2TCaHKY3LHui8bxuREMtszamGiRv8BJi9faipNVTvvzrskrjCUvGLBikZrxbDjsw4E7M3e",
  "key27": "3hkbTTt3HbasxCxPbm1F2sheCtn7hV4pcLFgvaUFXSEmvb4DEHrrYuDJftaZpPpGDSvDvgbG587JMEXpcsMdHJ1i",
  "key28": "2Tqwv2HnHwDNFfhS7bkpYb6xcWpwnGiy3nVDfdYeRdoxTg8hLsPosDYADEH2hVvv5rAsT6rxyWMnpvYPjXRsQ6gB",
  "key29": "2ZvikAXEo1N3VKW8VJzAEREN9AxUf25dgr1dVNk7r92T7hyUx2HxAskEePGayjEPHMuP7D4YzhghAoiqnYaHeqGM"
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
