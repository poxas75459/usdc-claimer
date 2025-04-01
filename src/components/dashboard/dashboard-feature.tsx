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
    "3GBKmAAwfPeKyhMGAg9svxy9mYYS52fQ49UYEdbKtJaN9sE2ixNh82qx33g6pXgA12Gm1GqxdimsZKr5iwejyWYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xmB3bKuCVgHFC8rFe6FNLK9eopDwtSVBuYAK11SD3aC5wfWV6UP3RE9i4vxiiitSJS9w8AwTkfk6Xbw94rRqXz",
  "key1": "57iekgFxpyW9ms91Skwy6zv8u4HMkms8AH4UQGLxwtEyfVPiM9cU19KTd37gkPWDxxyjvvqbQjqiMkJdzYNbwAML",
  "key2": "4vpzV5CApYJAGT6jiPQ3rQG4n1dhHZRas4oghLSysfcKwW1zM6hHVQc5kKKb3B1ef4opPkNruSAie81SEb2Kd9i2",
  "key3": "4EAjSwnVXZ97Ecmgvygm813w3RdmzaB3Fmydnt1BNDifvEKyKBXtraM9qrQ6fpaNonrb6Xeeh4oB8SgPXPXnYmBQ",
  "key4": "2Np1Sbf3ThdWBLmstopUhwg4cuwKMssuoWJsFAbya2QNt2zf4pf3fY4LVP1SDM1GvfURniiHGawcdecRG7i4tF6i",
  "key5": "4iNnuCyBXwdgcS1FzgvW3CYLLJpwXTWrTEXYB6dfzYhYHjY4BEb7ZmgBThg4qNXcvgy5gnRnfUCFSTwvCzvZKRkw",
  "key6": "59dx96HhnXG9YmQ2wKCzMC9GDxXghvA45JuVvtHmgPN6y57b1GQDVmv7PMLKUfVYAVrGneKcXuMcEdKFNN6TFMWy",
  "key7": "4xjuwe58Gi2GzP5ddHjcQShdB933aKgtW9rmrZMv5hFboVpH2gRNFREo3sJbwi9LSAhv6ABLF9eeEmaWDZ5qqnYW",
  "key8": "3of9rPx7z8N2SED5aFe7SCkou36x1veJpDzfoRAu4vYvLVodk7kZAc7BY3R5Mu7Mxs3KGyovea7chiAhv4kr4gPR",
  "key9": "214sFAoLaDZSUx1ZvpGvESMANUmZ6vMAsFHTdQMoW6srJTmaxGmWR7eUwyqrHngSU41d1bC2pik4vjP2RSZmYoPo",
  "key10": "2D2VkgQRmyZn9mQ2vnxy2m15tT9AAfosyos8q13BXZXcRVKqGQZcYjyhymCiesCgFui9s7LGV7RVUiyQbgV4Zo1J",
  "key11": "2yj23RisxR1V4sCy9PyPSCab9yZqq8CSW3TfPNcrETRTggy17HhamwPjGTesj4sSk4Mq5MYGC41cFNhNqcvJMdaU",
  "key12": "5gkrzuy11D2qExmUhXVVhQer4aFYdq23oQdLgC5x1JMWRk3Ep8Q9LPRgp5LP4wUVSzv7FP7RiKiuKfEWQfBzWkiL",
  "key13": "4zWvf5QG4CSgobbfEA3TyrCYmGNAsY3TC8skupi1gnKhbgxC7HrLGp9H4nK6YhfJcWhnD2AgqfZg8hJbZGhpaWk3",
  "key14": "4Ug2GKGmwd9m3QYdMCPBqpjKHogUJNQNmhAbWNMv3jUbZoaADdPjRxQYuteimEnmzGKHM2mEVS66y95nNzQBAxzP",
  "key15": "5K33wMNhSGhbaPtAoj1j5K7kHLhXTjj5MZoPuW9qwmh1jLdycGXx9UQ2qzZGmdmsjrtVd7XjjQvdj8XwPRyoxU6r",
  "key16": "bmjvFNtdDj5KwXnwHtEtDeBZ2kbTF9jRigpc8V98amRkjfWY5LFRc646Q3YReRJEwqvBUqNPhmYoLPwqiFYSygB",
  "key17": "4oHh1uDSZGSRJQkB7AGCu1WboBggxLEba1vq34hNZaVLwuGLT9tcRexk9kfwaLzAi2baiYx3yRR6p1hiuzog65Jg",
  "key18": "rmx571mURpCYteNbGUFGktRQsdzBeK9tC4KPSTmjZRfe7KmRDrhTUNVHWadPZSDRok6pLEgtoTvPEvmSxGSMmhz",
  "key19": "3tRZykZS5w88vYEfKzxF1Xgn6tGeEr7tB46f1jrCaYjwk7ZTPmpNrtcmWsCLgTLurdShchtc6rWDWKgNjE2ucHh4",
  "key20": "2uEhpfiuNNJuoHYP7TbaAB26mK889Lvg5Pmu1pB1wfMkEGTFGAdkz89fj1zTxQzSXE7YDLmWn17kTbpjAmArjPLZ",
  "key21": "3BNyFdgm5ZhErTcn1mGkxtGEAKwuw4RKeipmoMWfEq65P1RBspd24Q9VJyqsHoZzj92BGQaNkbJwbdmZGaAWgVrK",
  "key22": "5W1TerHo3Q3s7fuAxeWsrpbveih9nmppT4NGFmZ54kqtYQyKZAzcxkUDCp442KC8QfPNVLb7RtAXa4YJn25BZGFX",
  "key23": "4WUaocZnwZsR2Fs8w8iHKyyQLBrqerVDnxFRtyBj6Sxr2CCdVnXFbykxpFxtYxVgcXfdWn7cfU7NCp8Cib9DxQi8",
  "key24": "pyVHgotGgTwFhyhmyfUenxWwLSs3KBokEkZ3U5ZFo9cZ1ZYBwonFpoQecCjvbK3UB9k4rNJ4XCiMeyEDDLk6P7i",
  "key25": "3JSTEktBUkdANxaohbKjMMafkjH3tE5jEiRoD4PWoMVQeZ2sN2DftXzmnhiBtKGi7nPmmvs9gwm2kaKNUKbHK48V",
  "key26": "4iNs2xvYD8rPmchioW3Zm1AhQoW2UwzCTGMJYMtWaAM4yUHJEez8yVMkkBVdfde5dHjgvsKfknx3ob2jZ5GYz3vr",
  "key27": "434RPmn5kzt6ZJ44D9Kwzrw4DEEo6moSHk7aJnRfPdD8UBaQd7FsXxKqW441MH5D5Rf7xhac6MwkAKWSPYhK1HPZ",
  "key28": "2XTmsvv3q73Wj3TB3ZU7iVSbeYG4Fg7HysWJnYnqMpN9nyF6vPzuiVHYdBMieMHtxn1MavVYcHFLdGukV3W3YHhi",
  "key29": "3bWKFzXKPXtZhvAuvpTu1v7YHevrsZxakHG1KtZcjU1Dx4aRBRH3nFJvmm9VjP5oHHvDpF7vRMmwRatwgrq5LuCH"
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
