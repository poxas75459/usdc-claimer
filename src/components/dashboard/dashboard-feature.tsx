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
    "4pAF2y9C4Tu2GMtXXRQnnGqVj9LoAB3Yxhkh6Qhez5bPuMWPwWQPDvbd9WBzfYcPw9UZKrNfT7hbPWNSsGaxu2jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EivpXFfTb83ug97uQfetw8FxnAjhBuZe2Rhis89NQcgH5YuYubk8CZnpKsmJk6fuNBDUMazhCC8R9wmFPXroPw8",
  "key1": "594PEXwneBoZTNvxKhuQJFt7gdzygVrwQ4Q9jdf8jSFgHWjiymjdTBm9x7y3N5Fx3C2hkKYNVWdc2cpUe7t656Tt",
  "key2": "29GZvxRWFrhvGUCC3y5iH6ka1tZz9PTQgF8CGSDWLJKZyQEFq6XDpEaVFZh2RSNmcjJGcEL74agTAoDqGpLf1ont",
  "key3": "5ppttT3vV9YZfsazYYWfytYC4yBcvSif1ej3EDtb3rud3NAc9BpyZpatJPjgkMAivkcEA1NPNRxJhiCrXCxWBn2Z",
  "key4": "4hRp2q2u49cCKcuJ9XVHXUXA8X2yTWFrzKaJJSD31SPMMLzK7j15vzVNfjBasRBjZEaDAR7GXy4FhqPSwpJNKHea",
  "key5": "4sVghnDNEcYBfscPDRYJFMHQKmdcgx6PM7R8dvxx429hzLRJ8pQFntEYmpHXn7FKH73sohjecd1g86R2qM6AoC9h",
  "key6": "2wbhEMHg4YTrUYtana1BRYwvNbtcpetSqD9NynbcbHoc9SqFPaYuL98auNEb4Af2dVDjfW5WB9xvDqohVXdFobu",
  "key7": "2KdwDRzFBG6NPewQqRdeHzcSGUDUe6Nid5hEMChbvR6goy8RwsWcLXiGj6nLXeKu8k11Uk8oPr3nopdmiJJjxgJn",
  "key8": "5HD8jRratZnsBJeQCJpfELgahq1WUw8n34tXi4vNFv2Pb2nimfQSJnyWAFmwSBve5gt7mGkiRNUR3H3RN2xe3NPv",
  "key9": "5YiQC1ZmcB15gFp3sjS3AQHyhiVzA4CHVXRgZJSL27TWpPpo5adGvNNWUX8bLhqBJgkaRgAL3abKDwm4rDGqnXN9",
  "key10": "28FkqpTvtryuixjPWp6FfJwWAFv4hC3tFfVSjtLJSYozSH1RmwxEiBucoBP3kJv3SPwjkAYjTtJfdRYV5F6euWCA",
  "key11": "3H777AtoZhQbeWS6hz3uyAvrAFUnDbBEK8CHCtBegkfh1GNeMdnn77Co9Bs4NBV8Wuc2pB818i8j1qEGspsmjJju",
  "key12": "2PDVYTXhFkWSJQGnGf98XpvLautR3dq6LH14amPBiZkKF7nNzqfRmaL7BcktMnadRLvYCwuFawi6KhLucF57uMMM",
  "key13": "2tSciSzfsKMYtLuCA9cT9JbDJCDbic3AkkWqLBNw1WVUzTnFau2WyqR3ULY2er4LSgsajd2eawTmHxEvpkUu7ia8",
  "key14": "3dtTYCXoayaffzj1AYV3pm7WSyYLFrohX2qPBMU6HwPMKJVEKnUV6x6y3iKky9ZCCssA4ktUDRaETgo36EiRrHWm",
  "key15": "2j86FLrnjWLoZ1nj7zbyhrY4Lbj62Kb5JG5g3z1vxUWPtzE4FhhLG7BWPzYSmDB18tUUYpnNKiBeePqz3S2x79X8",
  "key16": "4G3K8jb6Xz8zgxs7ixmRyvwCcWFsFKcZEfoRaC9TevVWRNPN7Nw2dpKWKiQ84fZpsYGH1RFSZkgRE7s5rB45WVtY",
  "key17": "3eVZYVrQqWG49D4eivfk8S29p7mFsf1ReHsPXigry4S3N7rDtktKCag7TpgfbGiS6aw63RsXcN2V8u9M8Gt955r6",
  "key18": "GF8r7pXmk8ddhAS5vZzJcgcZEakkQmwEccXeSkZMutEVEC5nTHnFStktWS9HbQHREi3i5vrzztVYJLnRoxtvLnK",
  "key19": "4iRfKRCuteDTaaSLmu1zXBx5xRjGrNGNAfAFBmZFVDwjo1NmfKQB1F8LmaCecRZJRJtoeY1b2fzycTaLg1QRxCCq",
  "key20": "mfBCw8c7bhnz7xRSB1pzndhVwGqmM241nnupSKEedN2J1PpJDsjodpKkDJBtd9WdiNEJ2FWvww4EfxCdT2C5XLp",
  "key21": "3NjKYys18kmTt1MdmDhAKV82QKwgnhFLBB8gmEgqMzhDSgS2wRnMudTVrzjHmjTboTyX8tZmo73rBPMzG3TxQZ4e",
  "key22": "2pNYxpsTqmwD8ggoDpEBVJwBBwUh7xAmiAhiAHh5ZbQAbsMqrH68onVuWx7GrRuMCJesmdHN3xYc5yvrtfNq6zT",
  "key23": "2Uo6TjkRtyDCncfybNQAZHKfoS3RWFrbqrwBWrnoW9wCpqmfsLNC5bNokGXFBcvzQ72KibNnBgyLSpZujsn6XDob",
  "key24": "pULQc6DxcvMc1kAJTLWSTdnsMGtZyisb8miXufXXQiAunQVag4NnAqkjnGFbMTMAMua4gXPjVEYkETSVGnYvd1X"
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
