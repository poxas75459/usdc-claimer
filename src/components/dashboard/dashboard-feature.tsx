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
    "thYGvVyGVfAdsiW3a2j6G2nyEJdbBbC4cBSPgGFW9YgRThk4E7mdRwo88fPBUpdzxp7eyWK8dazRhpiT24Hu9UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W2KWznKmWPc7FNYJsfQUSypsQsCVgmuk7fPB76mrp6Vq6MPBAFVrZVrLweKQVBd2ZMeJEqEYfKzV5ft343Sknyo",
  "key1": "4ypoiyAFGK6Q8ARPEnPys9BjQscLgXNG1yhaTYm1wy2Y1YrqHf3cmBaw2TB122bnERZEtdEcpdhoSXZVkR6Jyxcm",
  "key2": "4vnj8QgiSECwCzAnNdBoJzKdRTy1Mr87zTazQX3qtTLMg3mMz6pWc697edWJyWxfLeGSuCb562FNrbkng2xQb59P",
  "key3": "9zGaJ8ZCYzyDZL9358NF4sew7ZKP3FTtysAKMGg1TUgmAJwBbvGqRTQFUbK4EvydaUixUe2o5jZrYmS5hXdJMaA",
  "key4": "2cydjLD5BFf4W9X1RFsvz2pGCxoMNjg7B4K2J1isvPPhuLb5u7zYdPpKdmBkZDf1u7bkek4PGC9F5edoGk68LEUC",
  "key5": "G3dvxunnv8rtyeUQ9e1ov6euqcap3aKipPNbFRVwzkCsV5puEoecsteZibBia2GavwQ9qQaiAkxZtQFnSBkk8Wt",
  "key6": "653dfW5i4ZnufBFqVu9zG2FjxnWdsVm2WN6MR8DmBCBnHtcfHHFpsYuNDkZdzVnRQAeeL5GqDrJyM86BTk9exdJU",
  "key7": "5yVpVmDR42ihd54RgjCMXLpMwUDeqiZSaTxXE5P1vJWc2pHKXoeGGsd5jd1RXiutXC77JAtcwLPLRxYufnFg8eoP",
  "key8": "2rHuEjik7okh9kedB9CiVjCnp72Jc2VxJtSofvKtcF8hQ8oimdAnF3NoFwmx3XH674dce7hzxvKQEL2NcHsVfXZh",
  "key9": "2o35SRsxJPPMVJFQySwtuLsZzVqyUXZ4oeZQ4AxtxiM86kSB42DyGap9Gtgc4aWqAqf3DkbdErn1MjLPKJCbroyG",
  "key10": "44izBVc2DowV73VrxJLM17QWsNQUXEbPFdhFputT9yWc2aK35dhg4LfNZ8UcrpAwc4FsJFpvK8m8dw2t3yTm6DwW",
  "key11": "5pTPFLRULKtefibNvemPpdT4SPdH4eVMgjhoU1AyuoSSUKVFyubi55gdLmmk7RBBjnxf92RmAaSUik2iWxAwqQP9",
  "key12": "59q282LSFR5ZjX9X6PYF6fN5YekDWLTm6ADktJDD5JKKuLFd7oqkoo7ZRtFpBffPtbRUMdi8hcgixHpY9qGz2qZ9",
  "key13": "4C3gU7bZ1Dihjg9iLFLeJzwa9fV1A1D6ZJkC4ztFzMWiNuzC6Hd3zHm18rnxEieqWqbNwk7MAi9u1tHRXBsQ1vcR",
  "key14": "1oR3USnRP9hyDeBFYCs6RXd2Zq7GWQ79G4aagVkcWbV2cjvAVfaVxw59QdznBb4TdV1pLC7yzH2MvTBtjFHZE7n",
  "key15": "4SNo8bxkAVbs3vaePaGg8AaMHJ5dScei9PRDLLA49jAnDo1t43v3AVuWCXXyx6vg9545oAFnmdLk8wk1vWLx5PUX",
  "key16": "5Drheu5GXXK3iZo2yfPJcf11K72XPoPziAYe5rdRrMv5H1LPdbvhkgR5wNXRumUsXC39noVVS8mAtAQf5zYoNW4r",
  "key17": "3HSzoYa1BMce5nxcVMBYuSy6pAuHF8qGWrTaqQ9cFHgo4dxT9pe4bLZnTqdLSw6a3Mm7N1FL7fZKNLcMdm5N1p3n",
  "key18": "3GmLMnuc44TQNsRXsZNumRpfrfoR726jRMiiE9h6X7vmvhKS8aJ7fVjfkU1PGpT3163n4edk6oytVPRiZcn4k7SF",
  "key19": "4t8VhekKVfdG35vvxGQpUzW8gWqqpqDYHm34uzXwGJmkWUawircYfMKVqyQsWxaSsUMy12B8x9qVdzXhNVZ9kCaE",
  "key20": "1WDb2Np8YE4W2obz41h9ARpyGjNYumKgj7o7ZHeoWhBvov5M2cHBQ1zf34CudkzF57n3eMEBbtpC3iXeQN4UQHf",
  "key21": "51jPFULfGRmLybhXad48r8T2Md19RAovryRR682937PLWYXTKU12Rq7aYHpkkTJUy6YGazL9nYNgCjruvHi2fdJy",
  "key22": "3cViMWMQHYURZYZ4RWjVWRidiaDNJMMqQkm53WTj7DT9SXK5QMcR36GQ6yJnkerzcpcFhmRFWkqEKQnmFhtYp21z",
  "key23": "5Kirs9SVbVqAFaC2g8WVM4NuvN7FCXTb8jgtBRF5oQEuDpHn5dYA9QD8JE6C5raM4kvMy7mqKtiDewLcvpCpqU3p",
  "key24": "2BMFfxazrUqEmSapJCKmQyZmpXshvvYCLesYveKEzXYiAGreDMzqxtQ62sfFbJ9pEvyGtbzzj83pdsCnvvYaYTw1",
  "key25": "1MEH5yvpJnr26pSxLab7ggjzoJ4jLCV7wp72oqiq3FGN7iYtMRz5CY84CKiG6i1WQCBLJ3FFFWiKftAtQxAmho8",
  "key26": "5evXfnJmETdUxeRx8oLTjDhREAvZomUgaqvBaLDYq1AMSwuEnL7LGrpmi2hK7yiHxo4UNb9idGSHpUENYXfacR89",
  "key27": "3mqNrE8SHzrMNxa7sdrN4sdFPsERPHNygAYUYkqxJFWcwWuPn9eUfAa75Pbcc2QVsyAdb2j27HFBqoF94raEQ59z"
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
