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
    "3NjiJSNVbKYrNKSMnMahiwkhwQWt6JgoUR7aGNcHno8yvtEaBN76FfxUcPFpGcdv7DkCN6Edvi3xDXi7mz1WY65P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PGPJ5zrti5B6wkFJY4seJ6ukHDhx7XTefkYPmfh55ojyfAPm9et9gWUC15nkFccNzFDLn9Szfmva5TPmaD6u4N",
  "key1": "2DvZPbu28HDDx28YD6Ssu8MB6dCcBiJ9Cdpuvht62vtvNg5p84EnSmHEFr3NEDELSLkaSpn78EG11HWJaEe7FNh9",
  "key2": "3bWkeWFtXgNqURYfiRQ3WU8bNhHyfQk6Ur7B8p8cW4e8oej1eUoqjKfL51Kx3YgDVi8Z6VLUpvMGKJ7XpG4VFMD6",
  "key3": "48wXC8Vjjm3pzsPsoNJZBM9SJePScqbaM35vH3oNkknyinq2megydjJC7TbeTqmxfE547oE2cm6GFepT4jiWbHQL",
  "key4": "2kC5bbtEuMLxFFKZ7jZdEyLkNyHydVTesSz1dvhHrTCWGHuiRJFLGxvqxiYUXR8p66TwmpnHB1M5miQK33bwYJam",
  "key5": "4Tfipwym9TKgUyJqaC64n2Suefk7yxcnL2K51J2ceryNm5txfy67t7JBYjMpxvpddD1kXmGt3eWeknjJPWMWHrei",
  "key6": "59wrpSiZ8rLgDarWSMQVzm9rgTy5F4aDAvEYFV85nyxCMYjQ8zmeaSpnnotHjpdReQyXMvnJvwiycy6ekYa6GEv8",
  "key7": "uf3hNyaQLt8tFLXy9LjSB34mkPbnbFj3RgNUGW5D8B5fmvoSj2VNHQtE9F4BWjDRt2CTbX8aBETDYajC5GfcJWV",
  "key8": "53jszc35JwxA6Gv3mQhqC3p4HvQgsyRhk5tHnyH77V8cyPBZUGbjSW5DJPXewCcJfWeyaXcmCseaTbYTmioD9tk",
  "key9": "4xxCRc7biemCMYrTpycuPTYzrqTTdF12JnAfFSeEuUsBKS6TCpJbbdhY6E8n8D92uqMUfjqwVvqtpMjCkbeDpo5M",
  "key10": "fKesKQjLtgfCrV64ym7LN42EfKWAFNhTHLJxRJJm6Kom4MubzK8NMf84NmzYLuPQ3NAcZzXELoj5tZ2vJTDiTXW",
  "key11": "2tCN2r6UD48EPG7nHNSc31R9PJ8Q7KtwNBYAxUK6Tt2mNFV7MhMkkE3j7NjrLzM4f5eozfufCqNRoH8niqpohtgL",
  "key12": "45iaxCtp4kzjrewRmRpiR2xARBLNNfLCgntEipz1yPoBD1CQaBqB9nLkRb7Bi3KBi5fFcZgVLehNiqrfbfNWGAur",
  "key13": "2sZ1mizNx3grQ3u4svUQiC8e6aQbg8KTVWdrfiYkBuDwk9g4tTGV76x9F2Xfapsga3o4nvgD1SZSZNc9CcAMJgse",
  "key14": "8vSuLQCZKGkE4pJDL9APeELbaDdApogbQsq62UK27Bh46qC3NckF9pA61QQvsKPPrgmr5S92Bi55uXd3Hf9QDwn",
  "key15": "5p5HvREbgJekbHfkrnZVVLGKMkRtJQUSGTzagAeng2s6g77znbs5Y83uVnnw6oVjJMm2fBrdUgbF7pULxJkSqzQp",
  "key16": "5UfTLh3AKY4tUYLqbAommPjkUEjbND5trWCDQD49KYxqD64ZnJ3PNHmxfcYd6U3bbUeh35eisFyTLKU686Bvq1v5",
  "key17": "5Tw493kGLCoZ18cMFEeXqkczc64w8JMahgfw2ZRhxRAz5HVEZU6u9wLQkb4SBwQuyhf5T1mPVDQGS635JZaP3APY",
  "key18": "4hMjmhmRAFY8y91KNbWXgwZmzde3eq69Jzj1PZePtiMB1rFbj8VT121NeDBTU6ns2ff2Dc9rFRV16mjp5PLZqCcn",
  "key19": "38aaUjvN9mMji7DGkm7yRQjv4hEVq11SzNWNrXBKnNCFqq5oqGuJQzGDjNZ1J7jzVyFTpKDgfHVZVoA8TdRbyhfH",
  "key20": "56pR1ySyCv6L9hyYu65aypr5FSsG5J4yXCSN2UrSLjdVEEjQpvmDPVn79KNmiAXXADRFn1sHws12RiYPSeWBwUqm",
  "key21": "51ZCqJjkuPt3tCti7xvkKnfW6zLi3Y1kXuuNANKUsdR286ZKeYtWFn4LHtWWocZC5kKSTfKpA4cTbut52KJYKoHj",
  "key22": "26EoUXcZ3rcpeQUR4jMXvTYmANVQTCQdvDzjQxFEEwqThWfkt5d38ZEo7dkKkrnzRM8sAvdLq344kUb9EJ6tV1w5",
  "key23": "3idqPdcceDQxx7BJyhktf5bnnV2x3vVq1FQAGGJntWH9z5FMtacVmoR7QGAJCUQ35nk2Td4ExHv6r4g1zQyiiTAL",
  "key24": "2JMd6Bih1f7jj1UtGiFcb6kAHYSDEvaiqVp8xVrvghFvA8zwBWWheQSA1JGtCubGyAL5wF3M1S7GRiukDBVhHsbx",
  "key25": "2CYStz4rXvDeRu3te9PzZWFFReQDax8aT5S4XNpKbyGfgqYxqD4adMSiqm4tUC99w1N8z97tDQGQ7fix4fDvdtMY",
  "key26": "3dd7kzwVCXLk4YCg9L8jLPnm1MrTbGwcMEr5TQkFtLySUsbBvUZex9MowqbiwgwUXJxzQQCuegmfMVXjsCFzHnuk",
  "key27": "3ZbZaseKdCTB18e8ACewniDgAuPF8GRmVn1MUAbAtrWVF5LR83Naz4f3BdRics8koRjaPf8NSd3bNHqDexnRaNdj",
  "key28": "kcrmetv4PrJwcmCMuT7JjPGKNzPZALe3uaAT61Mxzt2gBQw9KfDQ8jNntpQsoLifwD9FbK11VQA1NhSmCeetFP7",
  "key29": "2qedPzrKjPUfBDb3P3TVoffrrpKLnP8H1a9f3myFtxRiZtb6vmrtmBVMRGPRDRz3VKwr9nhBbJesq8x3HCiL8pMz"
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
