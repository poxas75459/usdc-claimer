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
    "3gw8svNnSLHreGd8Rt4zBSKyHgsdG1V7hEinDNUcmJPTD8MewdAH4Z2FnryEhgpZyrjx1pbGKHWveehHqcD9hjLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dafVEfhnptq67xuo9aF5NBBogd3yPUzLZv2VWYM9AY4dbfCmiqssqtqzQjmf6wzek2RMJ5dx7wHLSjfoBPmrJPM",
  "key1": "4WZ7fZjdu7gZBByvS5qa4zBAZdffJ7Ne5xvwTwbJzzhcMh12sRew5fZH1rQmTCUE4hh9Ni5w77n8Wz3HA83akibu",
  "key2": "55PED4ogTshoXe4miiQLkkUbE2EUxbbSpKNG1p4QG9q58yntdHgJgqzRstPWUYyyumtdR42iHYC8pfMo4yzeaphb",
  "key3": "3ohZRuwRhCfoRSwjcR7EHUVZi38x4jXZE4n4i32wGArZmqAfHiNNgop62YvmUDTwj6pUXn7axP4wRGAkyhhdirfe",
  "key4": "2pSrs3JagXNV4KTRKXxmiiS4QNGLuc2fHF5q34qyswJ7zsEdd8xbvQrRGKeWV2xepcPr9oeTtvtC8Pm7sy7dWGwe",
  "key5": "78NGvsFFQ592Z56jy4LV5oBbPYPTsEoExAb9F7GQDySgDJX8Q4mVJANPwb8LumEqgvVsUQ6mfUKjyaQbGvQ8WR8",
  "key6": "2zEx7u29JW3vrqPDHaCcLuEs4HMfDxiSDqASCPLp8B53jwpX7qjZZjqBKbDMmdQBNqxTsUbgnaefhB2dsMRUKo1j",
  "key7": "2e2q7yXxWQrNBjWyhMcLVTxHZbuYr168ak1u4qUwX6BFFyammWveymR5mfVL1wySwoAcbYyATzzNSReuS4C415p7",
  "key8": "4pJFGDC6E6uk8ov9KeZxSqZ8hPLr65hUY6ica2SQTLoDyuJMa2as4GhZfkP1E5rgELbX9eKbn3u95V9K9s4HNj2",
  "key9": "59zR1rkNo1tmZZ9qhzF21K1GDFG3JWQiS6tLk2xeSuAzthnSSJjevjENvHPtsj1yXerkDdX43U5xJ8JmvV18GQrr",
  "key10": "3vdiguMaX5Df26kAwxamHJA9vgSEsyn7rE443DZYici11Jb2XXuXnP9SBMNu16aSx4tsh3TuY39AbNBhfCJh3CDN",
  "key11": "xRr5t5TN5K57kbieuAFqGHVgjAiXAy31KwpFFRp1zdnj3qSSefTnitjU52PC3FZN57aKdR8DuBXPqP9ayuhVfcZ",
  "key12": "2m8iqFrsQeD23bFLk1BcTCPiAS4jnFHMRrF23svBTGpXhNLon5ECwbhzbTFxnk2tbcjHxWPjCmAtzVyooocvBEMm",
  "key13": "KY2yGmiyq8gCY2whtRpu8ELWc8p13Nc98uW2nScdzUzsUvBNjrkNt2Kjyi6KoesEhtZyWMQYtN2oVqDoF2MGgAt",
  "key14": "3HTYJds2aUgUdgbahVSVmTnjxMQVPy8sqzj5naXQjfWNtT9zdFjftkNCuupaEaPKwSsJmupCad8ceKQMamYy71GR",
  "key15": "2ii2gBJMPDFcCd4kGW7exzS1j7imAdJUxzKh8pmXvPxVoN2n8UHPPs5zVHi93e7R56sgD3CzfvvXLTgJacHCQ6Y3",
  "key16": "5XeH6xgznPLo7xqXaYt12h7AoL4tzWo4VmEYPAUAfXv9Xk2a4XsqhxA2HDeve84jZSHM7vzCTJF5MYixtLAVeZ3y",
  "key17": "2FxPNSKUjUATmWFqkrWnLgsSuXfsjNjraUHz9vhKxrZfLXcrSXGkDfAcSa2SzrK4nvCAtbuzLXiZuY4GWFqnqYd3",
  "key18": "4HWD9dimUk5FkytMo5P9ketpLkRVfPzAqy5oTyV2ZnKmJ5WHc9F5YwsatPTe8RWoJgGWmCamCLvjNbPuWxSGEeca",
  "key19": "3WXftnETnbZUg2rzc36VvX3AmMGazFaB1nxGmYhxxYEQpy7PEKMsPd3dR7rjHUxW1n8cpAH7QYu8BcEAos6beu23",
  "key20": "4qxvUDbg1SW5Ucr6KrvDMjengFYb66bKZbuBWYBwMTU7JxgjHSTkcfp5ES8sQk3Q5mJoP3AVpCqmPKmAhVPmLKM5",
  "key21": "2fCquLYJRqaCTQUQ2yfCZq4kEQXuTGAkNyVG4MgG2KTACttgZ7NuF2qxhYM1tNhpvsH5izmEc91rx8DKxW4GGu9x",
  "key22": "iVShbcgTmSgAk9CZZ1Y4oX62ANU9H668XCxpghjS51Xx7MFdn2XeTCXvcCZJijaBjkKsJcvZMyBJSPbvpJXBFZC",
  "key23": "4dCkvuL49cryao6zQEPhdvS8buRE5XQfBEthRzXb3pBCjiQ2e7oSpRPgH5Nxy7WdzV9zbGG9GemKERpbVRMoe4HM",
  "key24": "Ryt3eS61f9tVhBtFRZQjkkRQahcGpd9htfW7RnpJAKReRXkYuqDzW64WnpGZdo3CQbnkM12KYetxo73HgK72cxF",
  "key25": "2wTNHix9UGT684YAUxyJVuG3WNW3a93LxTsujB9C6bBfCzsv4bRw1E1ArdxjirUb3iyg9VXeJosUwBR5AomhZ8kn"
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
