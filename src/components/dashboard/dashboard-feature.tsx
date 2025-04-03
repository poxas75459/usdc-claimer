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
    "ymVcTAVaJoA769otBX8ysc25cDSqTszoCtvby8dob2UBsKBLU7TRtwQQ3pVEmvdtn2XrkjB7GZQhKtA3Ry5Dmou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F4G2hHVTiy11fKUcm7nRvADEw9o61aSWpNomMWyoY9h4CAeJVbchDNoPGCA7uX17q8Rx9XFNVgwEtfEQKQDBEWV",
  "key1": "38YfQ3Yizjk9iqW7iGikcnr8UbYW2wnBhM5RDwJvVbeEW4rGyMgrGBANwge2G61oNNGaWGssfHffY8hX2tiN2Y8K",
  "key2": "4yv6ZF4gjPGeGcwo2nZangr5wWbFgknAZ377UJJXkfdEsJxswioh5vYqtwqihvW6HC23LyovYDW8snK2B7pnNBR4",
  "key3": "iA4iuAa8oFm7SUwp4nk9LhpSLAEJVQK3cjcMY8WBxGTuVZArYYjASM41W6Kbef9bjwmVD6dUFjme5pc29Ta1pQg",
  "key4": "3Lak9zagxJX8ZUn9nZ7bjSdAMDuff9V9E621TPrF5J72W5EzLhUEkDe7h4u4ShEUAYJRh6BNgjfrojBFDXVyPTbX",
  "key5": "47Dn9jqePw78s6FKEBRhaoAadR3WNor7y16rFqX4E47VrRXqnmR6gT9dtRe3cctnkcCqeUX2o9jvtnqymybQd5a",
  "key6": "2TzgRqkKEeyZqbNhK3VSeUyuZjMsz3LwVLEybhdH5QJbvFxpoM1CXwJSyntfauhqieUuLSZJkwBSV9k2fiHx2FrA",
  "key7": "33KxPQ1RNKuLVo8QREnHEhsU1owKBgbxVzE8Y6fKAabSw4CMVSYCYjtQhpRsoYKXbPf4L4Y3wtD8xyeo5VWVAj5L",
  "key8": "5fmfQ6agbinyGS9JvA1B4tmc3WsXY9VeaS3X1396nwMh4CQBRELr8Z6fdvRE88oKKNDg1SKES29ub25z5aF9zvHU",
  "key9": "2wppwfTts6uQVFEEXB81eRcNxbFKfC1LDBBPeBuvBh29UPSJrxgPj9MHwVPXR5qxY5v4wzQ8kBCcv5g1BtAk7hJr",
  "key10": "xVGuKPVF12XdgLKQs1zqsL5KhCiRJF6uzkqD6W1d8mjjSGHMUSUJ6YwQ94h1G9BNS8FzJNDhBcZ2qmrMikyvJdc",
  "key11": "JxmKFZrCnpGyzHFv9w1mRebE9uUB9Vvtfspu2m8tZZ7eFfn3nkVzB12BLo5837KpxmQNBfnLdDDAdHiQwLzLkM9",
  "key12": "4NbbfsNgiUU4GGWaoKqyN32mkqEXvMNfjSwTQPy69pD8dcZ2oNX7VAnHLHfngf3ijwoZYWDrNsqehyVbxo2mLGM",
  "key13": "5a2brg6h2BQR5xEKPhFoSWPnC9rHctC3ZJugAsu85VCo1AsteWQmyiwWfPLkvFW64x2FZW8rX7rY3WVBujETkbtS",
  "key14": "5NhDbU1DMxT58cwJthbrfgJkC7LCVceKHo1AiA7yE4EmkEaRxwYNksqQiQG7hPh5TCJ9gBfF2A7HQNNtvqbPfGFq",
  "key15": "2kK6rQgtKzwNexSZP5YCErtPW7h32js4YKgWLD1K4rLPThqHCJSyFrT5GC8S96faBLvgkHmuTBH8GKuyjHWRKtJo",
  "key16": "2EoGrn5Sbv5vMvQTHKbqhm7vwSpeShhQPSW923ejFtH899uUeNHKWUzFGSYEFM7whwZg89zJiLvoS35RThbEvCSs",
  "key17": "3vtDRz7x37DbG2kFfbGoqZvqyURjFGztRkCphpZD5syUmWKruNNV2qLs84LKVEni7Uy7mWbkn2QBLcjGyiYyx9LH",
  "key18": "cAQKY2pc6BGJ4T7agVF6WmmKz4nCcgZTDy9DGRaR97FKY6D9aDQbmw18sh3XfU8Z4mMBBgUHKNJxtZoTzuR8co9",
  "key19": "3hLcGMf2Y8e846UD9tWBr9Zf3NwZSqRPkKpFNcv3BDu6Tt6qNGRtisBM4nqse4JA4NhN8YfnQpHKQ8E2W3ZufbKJ",
  "key20": "9MopsPsYseAi3F5rMAj3WnCpvCW86CgDgRe9aVbqoc6f1zVrfb2j149c8Dbd7LdxeEsC5P4E48bHgwHDoSzuCBF",
  "key21": "39H7a3AwC3YDqh7aofk27757dph4x4Jnr8fV1onnusVtmJn1yqc6fDYr48gdQDBrzaxM2CaJJrEJH2MT4H79U78H",
  "key22": "5Qz6mbhN6TMYvr98SULhLijBH64DY7ccTn9kgKEDydZY6BwH4XwLa93ZxfaNgVE387pWjvtSvmWBVgBYqvdSsUF",
  "key23": "62Fh4qNVEKFj71soUnSqWkFpyx1NCiCSK5aet9ytEyxx4XP7Gmuw1FJtRhP7tsgAMkCoCJwmXjik1GsrrxbAxXVJ",
  "key24": "3q49mQSpJTxCKcnvyzuFCeZKsMrzqLCE7PrYeUNnXUqDRc4gxnNwEUxnj3SEeb8okKbgzoVPUY9EDW5pBSiMVgv7",
  "key25": "5651nQWmmrnUFUMV6g8VJmEhrEP7wMb2wpvfkmyNLr9xEESka2mQeBEs3z2BhgUHvTWKMYeQGQgkxUdeuCdQ1chT",
  "key26": "4cuoUMQMR8MikwC3KDQHuxoTLPWycamXjHJ1SY34wkGkuRKkqeQ7u9F4AziwcbxzQqtSFWNgRZE5oqcgfU7STmt6",
  "key27": "EwbYZzh4yfgk1T6adpM5HL9UVcHnoWPzZLtzzkpTxDG9btv6LPFnioMiEBv3SqonRegY1J1xnx29LTWd1ABhjfC",
  "key28": "4fdfEJ8PGeLa1owNQi6EF3aHZhYwuGx1B4k8sejKxKrkvQB5iJpgjebPFmkpbXjxhp1AMtCj91L2BRZEXKAUWShS"
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
