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
    "5QrJW7toFbh2rTieVQciH2Unqv8WRhNWMnHmKFfbSknFENEuTr1BAFyq9FaYcfN6FaNXZZjDpNddNp8SLoeuGJDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySEnqfhh9zMaAj6sbZEeWNCEL2BDi2Q7LBF7EvBdn8e48VSckR3awhBi6gsg8JMDRkhCNaC1XKCXY6TfSnSYwPk",
  "key1": "ourfBTQMLJC2wrprEbNJKtgKgu5BKp5xs2qaDSsb695nubD1naMkmuScmLEGMu88bPzTo4Gtu9waAq8nA97VA6Q",
  "key2": "4wDYH7YxBj1N4WYM66nZf91dZHPoWWdwjSfknXEnxfrF9JHEoF3u8X8qJPpovrEfA6nKtKD2814hPAUkbAar6b6F",
  "key3": "4UsKR81a2PArd8fX1Vx8fMkvG5NRVk68u4nALoZBH8ZtAydPXzyxb217VcFAyLk2Tgujd2i2mwtueiTXSX8fcAQx",
  "key4": "37bEseLng4BeB7G7qJmNR5C8S5BA4y9Z9ep4MRxPzxq9EA5jAaGX78tbpkGKrfvfcg1s3x66rFcY557hdJzeLNS1",
  "key5": "4JnybL3tUeXuoodm88ZZTx9TWkcxyfMYc6pAEhoLjRpARdaTw39Am1Rged68ny4tLwQAwRRaWjSx6ZBSVbFCeynQ",
  "key6": "37bAUjRJL1uJdt9JcNCWFmwGC8At7VjnZ88NyY15jpzfhpC5cHxs5fgyVutT7Hy5Yi1ck3kEqaTvVVc7LwzQ1JnY",
  "key7": "38nz3b9dvYSXn2M1bsF1TtB6s1VotFPBChjf6jZXQYvJZwuKbYWN3xcHmPB8QNskTfr9QU493ApXduYTz44yYwF6",
  "key8": "3ivpg71kA2jCcpLo1pDMo5UrZvjoMsZ7eA3eYQNSsHiCKNVzSfUEL9pPEkbE87pahiXjXxYQcJMM4T4t8UT31DAU",
  "key9": "3qS9mVaBARupAJe9C9fTaXtCeDgD787KYwkV8xNFxGrjerLUMQqGunmGmtw4nuwwzSbkTAPYpYXmEVFgz2P9BhYT",
  "key10": "5aFUFB5xeoS6R6C4vohP657Ajz1EgmvqP2RBkouJKUyVLuNz8DYNRK4xBhRwjeMhA79YpJio6vtRgHY1wEd2ch4n",
  "key11": "5NxVxn4a5ajDsiPrPLiU33QqXJu3JYpQA3CM7VP33T8g6yRi54naC8TdV2LMJPuWizEBWhiVmjgGWtzWnMQtwDk2",
  "key12": "49xtGXobZT8PnnmexedPfnf4YzrhSKMqVT9ZsQxusGP1MaxhHdV2P33oSnvkfDcvos8cb8AmTs51uq2WrDeQZ9AB",
  "key13": "49U21yvzSiJTCCw5ZR5bcC28S7usW39CByPEX84ZT9Wrp4wGCLJUnij41SUjSS5hHZPLwaLj1nZAD7kHrDGaoTZ",
  "key14": "4ARAeSC7BgqhttwgNUUQLaTawN9hHBB3SATMww3UgGwjEmsVemWpdvGmcYjVGBjDVGsBPJFnsuxuqLrXfbYfmfWg",
  "key15": "5hibN79TR4NLzujniHS6gWbskKqfJ5wZzZvE1KUnGLLWHx6C6FTpycdypFZw1sk2kqJRuefudq2GxYEHFZbKPJUy",
  "key16": "3JKKeY1iA36yo6nj6DN2n4xiHyp8Ws1koSYSPX4RrzDa5HcEkmvgjzXMFun6QpKxTJDDjbJPhsKQJr9L5fLLeDjb",
  "key17": "65ZXfkT9Q7Qx83E9JmadpTrVx5y9LwjEQVLZPZ7TUQRAjSWNGqAH5it8GqixhBvpUAUTBrWs97rmsFwSyzRDBcNS",
  "key18": "2T1qhf2xTX6EFqBcFGMivGtWSHAChS5uhiQcRVjmeZF6hxSpLjkY3tRi97Azo6NyVYhvkHdgibsm2ArG2fmJJn8M",
  "key19": "4dTQJeCTqnT9M89evst8mxEv3f9SE438ETpNQEFag2eNceNtUUgppkRsghFrpGputcgsYh66fWDnWtp2pwGMdT4r",
  "key20": "s25Az4XMjyCs7xhMbv4WtvPCdFNwioZjazu8qmsTs7TFUrZvtkgcYkhT9bHzrQzjVykmqV3GY3rnfCMDh9UZvHY",
  "key21": "2bjNdMQfDwmHuierPXVNNKFXAexTBXwniqED7ENF5vxfPY4h6hw2A8JffVG7TFRNaTt2meNGyZEdaL1A2JNZECQD",
  "key22": "aXwhqwdHNmJN2kG3zctVJ2rwFB2DvPCYzJ7Vnh6bt5dYNThXgVRwRUAzwEQVi7ooTaiWuFRquHrHUBwRreTXshN",
  "key23": "2nJucjk4VASmLCRyChcSXwC8xHQz73Hx92EzSsy4qjdYSKukvRbfNDnufaqBqhiJWTMATvzzmdRQyGpg8GmuXHuW",
  "key24": "4g9nUp7v7irpNFrGj6gAAxu556cDXQqaDPVP2wD4TLTwiyrPmYg4SnLoEzd3pFbBKCiJFUBtjHy2fNjsmAWUtuSd",
  "key25": "3VzE1sRyjtA2CbggZw44Ppmzgj4ARA2fGgpSTJSHWYr4fRfYMWkqQG91D2vH5ZZQ2d2FcyBThzrZgvXt8jF19wsv"
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
