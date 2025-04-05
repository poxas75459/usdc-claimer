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
    "4AaTQVjoNnLZKyE5QbTF9cN3qTcQqXDhiPj3rBdDm3A3UDeLacfmzV3VS9zuEcT6zTF7JPmuvXmTFpRqXnX8eRMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nj7fwPPnMFSsUfGfUN86UKBbvZaYSxJrnjTSuciBJ9ScQEmBKkJWSivNdCunDhqdd23aFJc5bjns81z4fENbXt8",
  "key1": "4VN6632bvYuFncoLThvoJiu3BooE8PrnyzRsa2SGrASDSmjRpWpa4ZXs2qHyTtea8DXtZzqDos7WWm2zwd3eymXD",
  "key2": "2dyczgudiayBE21chWQYCdDbGH3kwpJbaJkAi9jRvK2AeCrVNztGhSWcnVxa8WQU1RALYDNh3gAa8rPtg9JjvEP6",
  "key3": "2HKzNLAibtXZXwifBZ4P62BKhLbxBhZUVwD8FsVM8rtRanpErJ4Ne19V1KR5K2i8VYpwe8sF5k4fSPLzdyUJ6f8S",
  "key4": "3wzSitT2hLygUeFzJciYQqkoJjWyvxbrPW2TbmHLKsPUhtk6qF3GQp4GRie78weW35uqQiqYmGv5RL6gzytCkhcM",
  "key5": "34x24cADLdzVk69NbZj1d7KyENKSS5Hji9r85bBdykoYXyLuzBbxf5AdPbKWwJePWiP5G8nrScdUYdgBJx6oKxzr",
  "key6": "4p8GxrxYdCC7DyhDAB1h6jU6d2kDKasc1px4QckY8UwjLEh827QszQo6H3uAWKvUKmc5f1LkFAwTqtmPVWCTDZBv",
  "key7": "rmWeEbbDQmzKmRRSwaaW36imYCtYnzacVDCmCHqpecaoX8PDZZJuDh7pu7UE9U8T2DwRUgzFFajFMupyASPgcW3",
  "key8": "3SM5qrKVFgE1syMnmzdaKgtmm1gK3atG37gCGSwMVBNDsN8M9cuadpefzYK7JyJv88oGrUXxQB8vNssAwhUQxnb9",
  "key9": "5Es6TU7Gt8hUaiS66LkKdsEfEFhLz3bNycsgSwsLUCipsqFbk2qeejpYtSLVamhVDwfnVxztNV8fhht89zVUykkj",
  "key10": "2qrXwLcnKWbmMc34YGKCt43jZW3AcgqqgovknjYg9AMpJg2fZwTPQnnwNZoJ6LReQ6FNby12BnE3d9ZoLytXzvjZ",
  "key11": "QNH2n11E1y8ypaydMb3Xij5kJniCyNzCp3FLW98Y34CPgz81bW9PweTF1KBHNQqzDmbiHLsTQ65Mkcsib16g94v",
  "key12": "5tzFzjbaBodBExSYsParpYKSbUCDREr4d2vGWPvp1E659N2TxMRufsAGMJpTA7BaaW42NcX6m8j7UuGme4viBD7Z",
  "key13": "H4MtVq54yc3cF8jb6WNj9A4z9imR6bDMaTUiJwadiaHqvhL6fjfSfKypyqrCsuc3ZoENvAn5ard74nkDQvLUDrh",
  "key14": "vvSP9H89Si3PaTPF5AzyrJyDsJMP2ad29KCKBkMrFxKcY7qR9vGbUgfsy1Qve8sgiKHtvQ1ywyEe4YKB7gTShPY",
  "key15": "2Sfz9ewmkBQRUtyt1GoeUUMzB3LwUHdkk2g6oEfDkqq459CLvnghfbKuAPrmj3sStUHAjeLZTbh56FouE5r4diC7",
  "key16": "59Sih7LrvpToHSHtkfVMM1TrQZHit1LgBF9TNWUcBZaQFanbSTQvG1DWzcs1o4xKBNwAZ3ygo8aRa88mwhC4FErL",
  "key17": "FdVWV6e3UoanqUUVqqNqxFL9kaRo6zeewws1iVQaA2e1XB8ne9T7xNqeFRUQhefbRE2orNsYabHTSqbVnfj4rsa",
  "key18": "3QyrUgNcaS24xmDeTCBSAFfngMMfEjerKWQJiXjcpnipvq71Cm6A9xDyYZk695JFM86BVAFnWDJA1Lvpy2H23TW2",
  "key19": "YGvik8BaqzyeiXraz4qEmVQzzyTsiVUvMUaFFjiBRWpKSdT8WDyx5goL9DFcoqi4wByZ3ygUSVdTorw3QN3RMMq",
  "key20": "3kuSfGmHUvFqJ6AFS5XzxwApW8633iGT3qRx1xrgRCmhMFLmVp13eEAr6ASypf4JNH4aaKE3YGrL6eyZEhGXBK51",
  "key21": "cjrg7jcyMrTS8EckdcUhqy6c3yNtbq9RgBCdm1Jgfo2CYKvNCf2SocHKib4ZhAEJaLbvsei8j1zXb3LzriV9FCS",
  "key22": "yEDgzJbUHczydV3wqf5MW59nigSCKkccbs71jKyL2SSbFjQE497qaKZnrTEoo33BrGxu7HxcX146DA6ZnhW35CK",
  "key23": "3xQemUhWPctAv3Wo4TkpffY72mkkUHPYAVQWMW2Y7PaifpG92hZwy8F4AwFU8ZLdzW79VpDhe9cuc53h69wZ7oUX",
  "key24": "33oriXi5iRDJqVyW2BjumVC4SekTYNEa7thcRs1QhYVdb9gejfFAcZEXjzgcH83anXt3ahHYhWfMEi8X7m1ygdNm",
  "key25": "43hcNbAPcLFcudozBCeQdjEtTLCmGWWkwgGKN5f6HSQyh6N7e73HKVhEyH2gGgz6fd594R4nKweTAKjKEXhLV7G6",
  "key26": "3YttnNHrkzxJix7HCHy24saxk2NRpD2mBFAoDEAQqbJhaf9YzpriAVGtLMpBjr3aKSGVxEieyspbbzj8YEXcXMCr"
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
