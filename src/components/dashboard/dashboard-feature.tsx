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
    "4n4sQsvJ6gn3HgW1HbWqRGH82w5EusdG6bfMowF5KVEd5YsQ7L6ZSyGidFwAMsXiEWfBq7doALhVDw641hQnmbit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRNWSbyFGwvfH4Dc1bs49ejCZSMppkz1YKy3sf1FMfuhMmBPWZ29T19GnW3UXY2eDoZrg1f5WRKeAhPKBVMv2St",
  "key1": "5VxafRtbrNVmQGLTEae7VJC1jS6HWv2pNrtQ9eTXwowKnDYP8ztr6K2GNuhTzcYzaAsXKpAvvDPbxKdvcohvdga",
  "key2": "4y4pDi6iT9adno4nB67UXTsqpYaD7AUsjwZPLsvESXbT8FuWs5Z4spwpLkSm7deFQXrUQYbCrvEctUgWx95XG9sR",
  "key3": "5wzwM1vSAjtS27Xtaer5sALjhze58YHSpfnaZeEH53h1n7e96RQnoLD89FJQHJAPd1omioNvpmXnRVM3xQV5eHkc",
  "key4": "t7YRQJCQzUEk1BJiS6QW7erkfxS8aj1L7sjhA9ep82SmkY5JMM1rVaQHxDPjqr78DsxseewUMdVxeP6t47TKPAx",
  "key5": "ZkTLaF4moXqkvmjjhG5xEt59HbWGo6ZRLDP4xAswJEiSaXWXv8iTyDkeghRGDK6tPYrQj8a1D3ntkfWB7P8BuAG",
  "key6": "zjZV7NwvChLcdn5mhscLnjsmpshWntSYVmH6kzXkn7dc55GBpK4J4qmEhK3t5VhPPSfot9tWYGPoQWnq7o4nQ33",
  "key7": "PNWASFGfUQUgZz7Yh8L6stRDDepLgCSztxPfSAWZbSV4TA1qRtSZEf6cweEJjA9pfvHQ7qDsHqjKVF5NV5qZyFY",
  "key8": "3GuAfyMpDZtjFAJ3enVFUmp98U3p8SWb8eFpqTqm3cL69YEmkwYmho525q6kGpenrJEY5M5HjSX7533nc5HC2xr4",
  "key9": "4H6Ls4UkUijb7KzUuvpggaz2Tq57N985KKdnVqJ6gjmr21XPxosLDiU9iBB6fMg542FGWTBpiykJjdt2JhuK4GxW",
  "key10": "3stdem252LLzm7E6hUcEa88JvC895NQdif6t52PxVnBz18qjKkUPd5FvKwAdfEAS9QcSkfLW4Cy3DwjyG7nrZrEJ",
  "key11": "5WrEX6PfrmDGR3WneGuc1ELiaynU8dL34grWFwNPWuQgfBNf5w6DoQfSnGqeNa4fBpaUyLj78k17WxogvvF6Soey",
  "key12": "4X2YsFqYkNavfyHaNZ5z6wPWRZzeaX4dsLWBFvHFR9c5UmADeiiJpAme4vhoj7LgAL3PRGyex4TkwMtp6RQqFx4P",
  "key13": "dr67J4g7UMho8xd8H8GtseWudVmmZSns3Eoe2XwHwBQUs1o3ZyVAwbAK6zWTJtvnmugHqdAs85KWaBAnqi2WELP",
  "key14": "3ozR21DFp1nGA69kScbdD9Ghy38J82j41BKUoLcjBhRfKrExsuyAcMpDHfUvUCZUoCN7M4eAPk6PE4u1hq2pmfRY",
  "key15": "3sL8yWmsgkJiWwH62i7UjgBBiZzZ1u2y9sfnKcNFyqCXsKiXJjr7bgpQ4TUcJ3YwLmdYpyRdAb53txQmQHH8pPYo",
  "key16": "5Nz4arqbdG8EzeHi3ByN189DE3fXT3XwbpGy56EpTBrMZvHxBoG9jwLwYNN6Fys39PvycNtpYdkYbtzVZyWDdLQ8",
  "key17": "M96vfVNzW5Zg5qQ5MpZX7MFPDMEt16xAtwVTJt5STp672jFMyXxf4GEBbFTBj3VqVdrSsVEcUA8gwE8Ts6Z4nDR",
  "key18": "2ryr5zSWf74aoRgMeLdTpEPhdAav4J7D5YQCoHBPJP46qChViRmPhzCgpPtcc8LCBHDwSSgH8Yv3rWbssuGXkND4",
  "key19": "5fFEYjVeUDQJExF7fnkxZ9HBDzDVj4kfa29v5pS9XfWEsj8RtVkbf6fa1TCgMUcojfeCEhGCEG9q1FzeYBRxJdJz",
  "key20": "3BNXbWuUqGusG3f8GMh92xWocJa2XBpmCuBT6AqZCy6Zf7D5rM3xPkQ8JVRn4fYj5Hbmfvzj4zTc3NXQR4eiy3JS",
  "key21": "2noRaiTVk8dPKAUef4A9MS9KGEeN4cnLkoiK8Wk6xsHcx3WdCbXNpWrKPbcJJ4eGPTU3xg1e4xuZmBZRLDwxdUFj",
  "key22": "2xGr3aWHGZr9StBSQASQ1iWYXU4oBVVoJeSWvALcyShhvhL6gDyziPmDtZ2oKr7bJCmYQmGnVe9nLU5HDPi7qCtY",
  "key23": "29vmQYCz4mrsPjPF6o4nXzJ1LLNLdJFzHzUgJSidphAvrsZZbW6nTj9xhejT5piuo3hGiA8Qfeb6cWeS81Vn6Nzv",
  "key24": "2kLZMAirPkgYH4DGFmxVuu28xhoPd8GTPB5L1UoVuRYBKvWbeRmNxQKQaJ9s7pThbxGCSQmC5t8xJNzQCJKafBd9",
  "key25": "43a8Y5chSXup6vNhhNbg9961gnqSKQYxnE3xxBs7NRF3dEFrDFmfuNkpU4cDNSw4ar6iogJtaxqp9nBeVC4WZcKZ",
  "key26": "4nJJrpzfwVBGY1RiQm5ueTyBqFKaYVWMnxkMS4GVZgDsS7bST4LATtd7M5m78VDfxS9w6nwnzByDgRSJj53UbG7w"
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
