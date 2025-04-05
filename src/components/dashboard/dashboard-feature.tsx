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
    "o9ZvnfYZHYu1bfE5Z6hasJQJGcUwdNL7WNkdziaiwFKFEoxPQfxx2VY5Xcay27dYNrBfoNsZSWsSyKTkis6H8PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmLezztLppHVN2kMJZ3fJk33PrfSk9qZVBSg72SdfkJYukrNMYwLeH1BfdkUMDq4sdf3b9GCas4mLSNL1dCv2BR",
  "key1": "2C5QUEwXyC8xAWqY4pqLsBES7BocLxDQcvr1MuqnPfV8vAyKENep67sMFnG3WvJU2tYDofh9GenDY8faetEJCBto",
  "key2": "61HKtAubai4K1r3oNzdFQfKsrx3QCByvkgg5XB45rQyyDEBh7RBQBco1hvA82cRgVHQQUgQogJWbjr2RAWHaND8f",
  "key3": "3qvHW15XCGZbMFjFfVoEL7d2hvRidXAS6Un1mQkRj9QJiUFTK3CduRgr6NCFAR2Zm3SMuRkMJXP5NjxYgvfnenvX",
  "key4": "5SdoaaLFRouNCzEECcSVC7iFDbQW6UyauuYWsfDkGeVy8EMUTngqffGhZ3zAY1bp22NL9WLPGXvWbGgueqNkvXiQ",
  "key5": "Tbt8Eg4xupvEmsNPm7i13h35Pbn85cPL8ApNvXmHmRmAg7PeDtCneq6DdwDk1uZNT4x13gRYfdEqJEiGxXAQgXa",
  "key6": "2LS3BG1ByvEtZqXxiTwQE9Fe4ffTJTuJv5MsTYTvDd9UTqWD2LVveQM4N73DB8BvhvNoaiJkbfLhnehGgRvuFzkG",
  "key7": "6pZxwBCW2Aeet9JzKPEX2yR6CChjh9BexXPeE9jDiGfdRw1oSw98reynWmq5DjrTHrqeP4w6eomrLmBrcoFT4vj",
  "key8": "KzvwPkNpLDtnajUUEELFmi6TLvKxSEDpGrJTiBXggmqTrkACwKAxZ67RNUXUQ7VRvEHq7Wh6vwDeC8XCUfYjbTS",
  "key9": "4orUYgLhnSiUQrdaasAQdL71qFuZrYG8k8cRRnGTqQaEf7X4mBQf8mqQQ7HM4bw1e7UH5evna22YqkdXV1pbWP4C",
  "key10": "4tajqFnwjtxZZrPstQEdNdXMJSU5wqWigd9mAo97VNEwHsprQLJ7wJ3h6y2oMzKkkN4FNaUBZWLc3dBC7QcswaJT",
  "key11": "2yuRirHgaqq1ak3w1DHbE3ohTFiXCDMzhZaiPPbbyobYjNedeEi5oiaVBcqvqbmLyNKgvyBteBVweYGcGxSKDZyU",
  "key12": "5bKHiwVvBuZd6vfzgTq4focoYrZcT9AAh6D4LEPb9rKA3H7kFcxvwE7yKkLEiAhg1LB8iGaxgiD2Q7D7n8uQTi5k",
  "key13": "67MW4PpxHYGTB5pnjn5Jaao2v9WpnDiS9giDi9voE5jJGgsmpUjtyfx6ZYv9FXLkcvFNyxkKfg4wsdTndAn6XgWD",
  "key14": "2UtV9sCqw7deB9exDhRPCTZBGXAtovn3Af75keocbjmNwTmEcoaDZLvf8Y3zfZ1yxc8TdMnFM4oWGf61oEHUZZ24",
  "key15": "5NgKrZyaMuVnnCtzrN1VF5FYDbU1X5KzzdGVcFCQEpiemejgoamzRYy3Hw7gbysymHBo54juKhUsQeyE9gRGTbqS",
  "key16": "2HKsynDPYBtcp2H7E8WiJY1hL2LgGpQHrppRZoNvJLphnE53mi1WNkVA8ZJdhE4RwvC5csk9gcmuPrATTu5JoePS",
  "key17": "5gGqkE1fLDp72w2ckLPZPWsADzRpPaPDK48TkjsGMt7dvNueSoQ9sWum5pCN9nV5dr6ZuoA95FmwK1h5hi5yD6YN",
  "key18": "3eRrkSebRN6rdvTHzW75EGj7onkAckoU4p2V2pyQeQCvamiHEMDtF7dZCfUZUiNyKuZsTWoz8Wfm78nPXugwkJrL",
  "key19": "4DhYdBMynH9tTw15Vzvi48AQ8g9dadGcE3tp7oGpEh4ydXbNmyEQYJyUskBxjzUfLYY6a6xKjKiCBT2rEJAUKMzP",
  "key20": "2At3o5fM7sHk45DbSDQBvompToUtLLyyQWLHe1SJ1QYx7TS1auLzYUHdDpLgR2iTFaaNL5EDc1LcsZWcxLtwnQA5",
  "key21": "5PhZuDNSsCj2kbpuvhRL8J5FBX7D6qbg8Y2MdH6H1n3k4NxqaJwDGjDe1jqsJH29VyntFTrEWXLhD5hH4JWPgA4k",
  "key22": "3iBS9qqYGkL5TyzMky2Ne99PUdUMTipRDNuUsHZyBUG2M4VEAzcnf8qvxzqA9mczYyXttKWTRpN5SvvGdLJvTAdt",
  "key23": "2WXfywbefibG8YT5a8MyArfjto3adrsNFJ8fgUuZCEdTgMRxst8pwm43Xp4YbVPDFNQYV6tTDwAcr6NWksWi4m5R",
  "key24": "KRDggHhvD7qECVUEoiCA19uNuHHVy2ngVBrnBGBqoZDGuNZSAmSv4n3BSEhiQpVB5x6MwGPgAS1TETxDXfQ9r65",
  "key25": "3BrWNZyuedfXnzREiJckXNkJqpEEabadDbwqLuVLoaRRH8gRhqkwyUJzJVhD2SEQxtUaC2x1Ef4d2Q7SgDEXyTUT",
  "key26": "2QRDihBfSVMHQhwcNaTXsg95XyyvjCP8vEPKSgGFuVXnvgfTBPi6AfUKfV4GFA4MY8VhNQByifRteS5Kp39WuCUx",
  "key27": "nvpaibTUevqhcqjLXtnmQs3fq53F15wL1hwSGGr41mFJBrZLLiSvdD4zrJaDbwfeBp6fwM3zsFYC29Nn3bxfnoX",
  "key28": "2G4hrH9hkFMLLSwsG4ThcbhSMREz2NPhM1TUjq4AEa73Wc4XfHNuAFUYDaGauSL7iwLybB7q8f64nmkxwNwmF3vS"
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
