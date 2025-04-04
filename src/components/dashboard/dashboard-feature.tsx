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
    "3SLzjg5QkyyhppgFgQZac12HbZBnvpxVdJRUJbRrCdFVJkDefjaVqFP7PJv6cqAwXRugcDroD3mA5y6cWY9FATdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZx4xLKkFVQboGhG7A95X6UXgiBVi8ECtAWkiKrRNNF8WJQNQABGAbLjz4EhoTe7ZNtirVEaWnm5nVP2EKA6uqz",
  "key1": "5ngV9DRoQ3dT7tHqbkRLatWP9sd9E6BUFgmcbQKkCfBbqyPX1X9pecYFpDuavmHyA15EdHZ3XFG2URDPnkVhfgi4",
  "key2": "8w3MkXyY4BZbvzgVtqs7UqyXDCbvnKNAumwQ6qGDiSnzciQxU7xNDPECjVsvr9jAXXzDFb9PAP3X7yYno9aVWCH",
  "key3": "5Vs4cvkmNN8J286Xsaq2q2SEzvMaWoNDkhjMSGwFUEvAxENq1Puz1ozFELi96jEAUv8x8gDqE5wg4enRMxWKersn",
  "key4": "5YVFi6TmkpNi5rj89WHh9GvrnM1TgJZ5n8rG3BqSSpGPDcDpqTAvuoe5PxKDevhV6bgzRcdURR4RZDy3gpK6iB4p",
  "key5": "5TakHPXg6i9cPtKM98iDMcKhMW7m6a52KxdGXjKkyi21WE2gtRJzQFz3MWYZX2x1TVHSWU2Ek6KUy977Jn7SG3cW",
  "key6": "2EpZ9F6M8RfW3kVjmBkp6wBYVQGZjm2DABifdnHsa5pt5JDSjWaKC4f9HoFWDcw88MTHEoMCQsEPSD75PwZdu8sW",
  "key7": "3B82Z6g8tzvMKLyqJWPyNkg46aK9sxAJqbsmUfr3y1UbGKeQVSYhYdyRt45yeAUtt4x1HBDRL2wqwsMxRp3q7Gcy",
  "key8": "3wu8Y7nmrDji6zqEpmeWPzDqkthhDD7Pkrw4iBDo5xALvAeTXtR4bcsBsRntRNvuRPmVB3ySMyPRLYFxCY5cUGaR",
  "key9": "648PC7h1ufTXa9Z21BGbbvkpKZAjNjcgA27afLw4e3qfBUqmAz6Dmuxhy44rao3rNce4P41R78bK87QGDr2DhVXj",
  "key10": "3X1nG5MTSxjUWRi6G9EvuMii8JegWyeJLCkPw3CvCBiryzss72JiKkcqUhSjW7mfNCfMcELntZSfQFfqcZoehdtg",
  "key11": "2xkNz5bV1JLuoNkYWZuGn2Azo3zRkvhpMwXUfi8zLJ9Gk531vP9FvyVJy6Xn6czdqvSrmCvbt3usVsDKzwdTKhns",
  "key12": "4AX2mKfjQauUpVCvo1KALRg5ZMSaWVtDfj9Zh56jyzHhYaL1fn82e9XZzZpe7PwCM7wxAeJWCNmmJ3sncY14CcWF",
  "key13": "5bcq6JQ4PpwJ47GTq6EziVKz2Rq8AE3Pe5FDTM1nNu3hAmNgwqs5mX3PQPNAQ51sXDVGMkyLx9Kfhf9dohcfSH9h",
  "key14": "3BC2tjrhkwYeo6R25JHSvF7AdFpvZ5ZwvBMg8szFaibPQ1E4qy6VmRZsmkRKZsJZMwMX8Lx3aTrdHBNyc3tUeZp6",
  "key15": "1hrgKoqKvwzoco2YuFezE51EUXy7AYqBYWdeFn2jz6XzuEiDgjaXkb2dQ89KEGdHLRvspnsot6NjckbeszMQeU3",
  "key16": "4AuNrRXXtG1Dtqo2NAbA5GFLXCFjmA6HS8V9sTvS9kL5zRA22akBSobUU2CtmH9ADVjVPPP9YzZ8L4EzbLf7z7tJ",
  "key17": "4L62aPoebS5gBurPmnP9MXjTSnwc79PefRcyUSyuh7HkbJt1XUQZEqUEhinzfFun8o5N16xcyf4eTAv5c6JRBApk",
  "key18": "4BpbZa1UybTLmRWRUguFxyhJx3Lx1P8pCRGqmF69yhGUhnMHteMLMk1fFX42aL33xP87NucigdEP2zuG15AtrBhS",
  "key19": "5Gnh3Z1juhhcVsKwQuQR1ueaQKuNUtHcQ7GfxHaVskVhzNSBUKFfmbrqemTkHjVUH84j1cvrWhwY9xCrdgyaMJc7",
  "key20": "pNYDUuYv4gaRyWgb7sxRvph8FgicfXGN5zahJfEgNQjq6vBzfjzRSFUVMT9akHBzLPGb5W2mn1Nsa8L7RSU8av5",
  "key21": "5Dbqmi2gMGbJFG6T9enhtcE2dZBHxzMjfQYeKmzHRkFKLRYsH9Kwv9q8PbfLCMgcV47UbhHyuxxewhe7NuZrPNLb",
  "key22": "5wFQhpF12Y4sLS92yA8FmN9Y24duteDbfPbxznHhHAGova9LcTgJv9ztV5B3FGFTqTzrA3GtCaa2BtCQjngzZCMg",
  "key23": "GxdSeWhuRcs53SiZs11HMhm6C2MEkENmnLnkQZgg7MzhiHZPeDRz6XJXBEMk6oqwTPWeat1y4ruS3m1FJUzEeVR",
  "key24": "59QvBnYX3nvgFsfQNfTtbwquVdkHg63NJHK7F4uz4qWdu6MH3fQDFJL8UqcFXsNgcSM7KkqoCJWBvX2S4xH46fQW",
  "key25": "4XfinfYEC8qbogsRqfGp6MmY7nViDt91PnSquvgmpxpBLpnuBFLWufhN6V8BsHYRTbVFx66b43gpL6zp87RnJHCV",
  "key26": "2JzKW3AYoEbRqfmxxDCM5XyuKRJADChv4968V8PsQJ4Zkiyp69AByC5W4iSWFMJrixFjuyov4Ee8z6Kbg5egPFPR",
  "key27": "DVXhzTi4nUtXkTjUbo7sRaw3qDUnWqWccC8wBukd5khuVnL2X5tu4xFN9BtppN4pna4Nfbfd5VE4TjgKYHi17N8",
  "key28": "3McA2EGhJwWKZJSR21QTZXFQCcimGUrLeuVCP3vJP4ZzTKZcRg5rN4SreFE9HMSVbTJQXk9NHH7KBYLbeCTtHHzT",
  "key29": "5ZJ1VGAWq3rycKHSktUZAWihVCcr59KrfVWJRpEcdiWui4kkUShzbBQ5jeZ6KEejZqYFtrHySUYnfTf892kXkore",
  "key30": "jh5HqzdUQWVFvneTmJX7ihyWwa8PMFDSypo74XbhyYYmE1cALWMtUx3uNh1SWsYuiyH2L3zuifb91UFpaMqXZm6",
  "key31": "2u5zyM58asDnDafPpPxtd7e5VERLag3iDEBnPBxkfiqUWsXzLHRd6fHhm2ZSGUicjujMMtym12f6rW528t312YKc",
  "key32": "HC9n8rF11bpf73jS25c9B77buoG6CpvZhWU5h5qtPpnajgzDSeXYmgVPLjRuKz5ivVGCM2S1GrmeGYUrLwyooAy",
  "key33": "DQkTVcpn1zZBCPMWcagJK7NGs5r5MMK2cho25z23tbWxC8ywc8sPiwr23rBGvJw7KCdrhjF3DCWAVDUcFtwfp2f"
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
