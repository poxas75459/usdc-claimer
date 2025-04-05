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
    "3VqPuoj4RUP6XjsXwS7ChcusLvwjxS8TRU1L8YxQHHqpAAjZE4VuUY2Z2fV7f6ukaPstbF1FAfuEVeNK365PRsMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zax55VFJvcjftZYCGACAB2yC6BUAQceSB6RY2CuQmdGavWbttzdM2vhpo8Uah7DMbmrSiEefnpETWk598Bjqvng",
  "key1": "2dqewzQGKnEqY16KMoWBpJUtmAsGiKst7HTZXeHVmGwp9tn9m7wr5TuJz36q9VhgnaueQmTLoVsiCmtSCkwD87rj",
  "key2": "5K6kiuKBBaCYBHR2oipgFTYfodDgymNquwhMHfB6d65mhTxqTRMd1VqXBbV1WNGXKZN839ugiwSScdVzprigtdFn",
  "key3": "25xh4rpQJHqYiT8tKFPabNoEeU47jMMVDAkL5ujTpUn3YZtSkLvWJL9cVF7SunQXE32ixLmkDPqda3sn4q15Ke1j",
  "key4": "wZ8QbJSwJUxmg4me6Vd9c4TqQkGor9PPSNTsBQGXEboT3uCCkU53N6zjXEasz67UHN533iW8JV7wh8bb4qaaHWb",
  "key5": "e3BHUEd8WmzJzHanhnzbQzE7JqbgJQnEnpHDhuxHKoznQ4H8bJzLzhouHZNazBtK8rYDHr4NE94XohPz5MRE4Wi",
  "key6": "4jV4Z5qBBvP6LjuZF4x7uHKh7d3DZwtyvsJ69YRh1KER7yrdaHKSwhHaVZAZYs9WcN7GGXjw2gJ9iBgZNQ1LcE42",
  "key7": "3nnNBWe81gLKydGezTiA7gHKgQoqk4eMU4Xz3agXtVHm1vhk9WJx63JBHLma48MyW87nsRgsF4wRVWqju6uoqrtz",
  "key8": "5aJRXStqMcNLhUUqvebi6tiBtyTDn6wDCBsgC6uWayMJB7a2LeTK5VpWJXKpZGLNSFKZvjWChK8X76KVB55Rnbf8",
  "key9": "nTfods8hQ54NYFqfpW8bSpJT14YM8rupghVEoHem6tTXq5FeaKEdCNPRqGuA5sv2RSAtsjBVz3dFTt2YcLMuzEF",
  "key10": "3L2FYoaHQHKhZDNvDbdQE7JRHpVpVkaNKWhfMXmfDSYZwSBarg25KjES2xt6XMkkbTkhTmpg5amzcL3mTdACwKzN",
  "key11": "dgrDdxjnEXzPPB8uy198573Jr6aR2pN14WXHTF5fMBk8hnDotcZmRwqy6g2RYAqe97e7wegSXyasbNWXEzwf2a9",
  "key12": "3Spte4jABSqK7QdAFvFKbEYZXNEKtgmPShDyRtVFvtDh1PRPjRSyXuAKLAGduwABU6EAHGmp5aArABLrzQo1vuN3",
  "key13": "64ZjwPB2MYXTXSDk51wEZtvQ96U5AznmF7kP4ptNQBrezXowZkNFid3ssdN2jCVtS7Yd2Mk2kDf15grEr5HhNrPc",
  "key14": "4mxdpaoxa5WaXPJUswgA9o7SaFRgpEf9cL8sh8fa9z1GsTYJjdR6LyozFMmvJ8hW7U7t3QYprdQKqeN7qLEcCTps",
  "key15": "TP7zxAqvrRQrMWFSFmU4cLw7uAm4DZ7ZdL3sqwUpJqKpdujqq27uMEmNyo9ucNigX13qbdfmF59kDX2eSsdqEGn",
  "key16": "3XStPfVySw37yZS2hbhJEsdPifdhXERiM3wU7f1Z2tBDURbTwdqyS7DiBELgYQ6fd3qBhqvrFinHLTgjDaCyP7yp",
  "key17": "5ZqxmU8Vxoz516GZcFfeZRXT71pnHPVGgzTLkWhYtFrHur649SwAQzYRVsT5U3PDpaPSWxFVtkoPSPDgDeotqBrg",
  "key18": "4iSF1APJpfrs7LsmLQ9TFC6PSg3nmV5sPQ4Nf9yJVuTQxBNA6V8D2mCD2eu1fDDBGZkz3VkFHeY1mGo5uFpRYVTD",
  "key19": "2mDtkK11KzpWVuVMn1QxXVNRjYcH4ayMzuVExQGFuQFvA3BRDRvRToLpxSDKWMGDt9dSgrRPYe2W8wVefktVaXsK",
  "key20": "6VxcmEtV18dL5hFM8Cfh9np21AUzGEufnLTHNJnDuXAxT59FMX3SrURC6MwHXeCmxLGYbK1ZoUw3LKLF1ggcgDA",
  "key21": "2R21xoesPSp3TcMmpFJUwNZk2xuPo6aXsk1GkDh5MuxnBvmvvYRL8NTRQ8NVxvzxd3jy5EqzXupj2cPSQxZ4MrxG",
  "key22": "3FqR3FmQ4sfmp6zZpzAtuLMh4GJv35nRMfsknjQm2YHDw9GKwuBo7kvCiyzc9CftxYn2ji8yBANbJuGD2pnbtegP",
  "key23": "97LURbW6A18MJJFpYvQGUt4Ts1N6npwvFxm4A7j6tMBFFq9bGLioz3QaBjd7MSxyzMipN5jgbjVeTBCcVii6qBg",
  "key24": "jWkCmgT1bieHVPVRhKLQ96qNZorYKm4UYHYKxJJ6VefiWf9YbVmCmjzxSS8LyoFB4BxCFePcvy18UYnVse9hYo6",
  "key25": "2Ktx58uo6J3nyRp5M7XnGnMWXgiv7oSFvKo1baG4TtxWSCBMiENFPFY3NjiJ9GEpg5ouvU5iPwcX2HQAMTcQBb7A",
  "key26": "dDvobksC9bkJUtPxGbeYMUqLJA1ykFNtDa93UXGkcKunyeSS8CPxkEz3FyJQxN789f1GBttBPrU8HyfghRhqHBF",
  "key27": "5j2HgGrKe6NXuK6FbDZi3BfhgeeksjTuzuuCMyauFYevZEkK8PjGp7MLpGbwfh5hW7oxwDvCL63wBmEPk6qx7s2t",
  "key28": "2nKqa6cBw3TyNK7yrv8tL3v5CP7oc68GutwBWLF6qdf8F1HXBUaKRv1gKZuYjn6CvA2EkT3rakrkz2KYvngPDR8V"
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
