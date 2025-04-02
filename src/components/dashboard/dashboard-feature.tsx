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
    "32xfGdHgiDYSxQ5av2cfoUvxmVTNJ6v6PLi7ksX7EV5eLETLsaQCqneY4EBP1GVosBYiPkCsMxVv25WfvyD9CoJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vZvTWQo2U1kDMg9pZ8soyNtJF5RCksXgucuBWJwymY3XmMDTHiFMTFvK36TkxTiKJ1xuYFMCvuHxQtFxZwXKMm",
  "key1": "2RAt9NbeMHfUABNVfztySoT1tyttQWqQp6d9eRvVGiP61dsJWRWyDXd75W3iEJypu5vHmAJESCy5p4GtXcU8hoZY",
  "key2": "5gt2Kctx4FWW67xMeiAm11tdMw5TD5kadPHDStGUWKYFMSdMZjZxsaeNSN7qCXFLLThuEBcCRdPk3J3qU1AATFzz",
  "key3": "2tmBh11bNPn91ohhP4FUbDY2Juy98gcMz5VD1pJpg8RjPj5dT5ppab2V7sdRkBUvbYqjCfgU5f7QsBeTZ6JLvbY6",
  "key4": "5Grw1KvsKGNDieYY9stDMyTuL3cQKmLqkuaycYvKenssKHsctGhf6Z29yz26hpoYZXbxkTTjs6R2QVwN1qFRe5KT",
  "key5": "2jJDggLEyodEZD8GfZNFQEAh8jMnWusf7B3Cwh1D7nwcmcTPpUPkogT23d9g3mybeJw3RsYjnkonW8JF1g3VmtUG",
  "key6": "2gN3hdrv6BCoeuadEjj2z7gLitrhm2QLDAXchh45oyevzq48LqLcNVSTKh3kQib9bPfEMp4tRUTVTDksamx22aRP",
  "key7": "3DunPax38XykCe3FyRM3P4T45uSVJBghsgZw1uczXGywWfLjQcoPofRfZpEPUcLvHbGYACoRoob2Uhsb46Nktj9v",
  "key8": "4UoqbHPkoofpKggzvEfqgP6k38VZxjYTKNV13uqT4SoPwfCgHw2sQTH667YjJvpwZFHkrET3GXkrbZCa5cypED1a",
  "key9": "m7y8EmbSi8FjCa6GwNRBUBBjQbazetHTsmRZxM5J1dAs1xzWdSsRangSoEo2y9Wov59iBfuTpWshb55wNV6RACQ",
  "key10": "2Hs7riFqEhMqgs8mmC11FxTLFh7CVNZzvmb22E5DZ9YyQxDpYn6WvYLTMkZKwo4grMa7P8bTS1ck2dfYonnwzz4K",
  "key11": "2c2VLJk5fYNnTy5JFTcvAVP1F9mT2mgdkoiguuRJMCZzYzmcJ8UNe66B8V2kzkSF5LDApNY1HS7QMPixa5ECWeht",
  "key12": "3aw5z6WHCJPRaoorEC8V5HGQdDfg59oYjQUEAMeBztsppJT43jLvgjaWziuAdU7VKnzdPtnw93CwTbG77zxaECgC",
  "key13": "5ckPsBscrK2Uw65LMdAf4S2Eq6AH6SJHecupM6kRJbPvyajBMmZSDgTdd6MGHX6TBkWdDfZXvAqt3dcvoq3km26U",
  "key14": "5twnuqYcnRK7r8krzopggBptWD3M56EfjsswZvJe9V55zyXJ9s9xQRaTMxmsmVUhwNTyrchnHne6ymhRG4M6MYQH",
  "key15": "24nxWCxzQhmSga43XiX5fVkUqy7sqnwVLxEUwZUhZDaeojJK7JiNSFdQrfE2QiSQJx6cYFoxADJT7R95kUSNrHD4",
  "key16": "3kXy3dfUwbnjgpCviktgyogDf8mihvbdKh5DuRjqmhQ2hjZ8BJPaXkt1Ri146ysZSH3eAjmYkVPWuguPyyRKJxE3",
  "key17": "4PskbzMswRKBwfKNSqbkgKrjK5vWNckL5c7qDgzvgUxp7tQyybKhjyfcaoniL1HAFpqJi1evgcyCijqziqxXjzrM",
  "key18": "af6QdhJYrh2GYHMdsB3pWiJLLCW2wXtSGksMGzwgUZaY7zn6x2MbdDt5ruscURkqYjh4R3RBBcTcXqF7ivWVrBT",
  "key19": "3W2TePmYQxwwF9yuQBLNYsFxjrSQrtVfHTbCLrqrcazedn2rszHZg6RFgeYnjoXyQFtm4R9HuEBu6jjoXRna7Myn",
  "key20": "noHN3WGb3z8MASGb6zpy4cDYJMtnSJGqxvejXj14bEoFYkQPGhakguFnM1Yx4CkJcVe5WWLLCnVHQqqPFKk4dSp",
  "key21": "2QQVyyXraxRdGzGFdvuYstxsnohV5WQs6ThtX5oDSMtYNdopJY46MciW3Kzd6fVxGsNUpzgbKbA6fzs4ux4SaZpH",
  "key22": "2zci9gkwmtXwFQcu3zPeVXTkFjovKvWHnLWk1uDRY4AkaHA1GDPtmVidYzS239hqWSADGysUL8KPcSNU5TvXuit1",
  "key23": "3yNzpQ7HPCJLuE7ijMWQTiQG2S1fEjKNpmx6fhV3UhmAotLMNMhC3nAMBQMQTHdsoTMGvR8Fow39LFzjFJzXKcnE",
  "key24": "5VL3mYFYZHDNV6q5eZ1F89NWXgXyYUS7TPVt2kXh6Z9hUxNiHBzh2TW9e6QAjbo1Azuuh4Q7nDMPSDBnjBsaNGi9",
  "key25": "kmZsKH93MLPZCJVw1NUwnHQEmPj8xgKPyJNRbLgUD1ZeVBj1GoD5mXUd4h7uoqWh73RBMR1P5cvZxRDy3EMSgGa"
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
