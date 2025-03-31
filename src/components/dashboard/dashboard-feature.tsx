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
    "4xCwzxDnLHAHsxGKnwg2GX6jiCKcv2Cfr2VrvmaYaQHctz6PNGxeQ8VtQWEXp78VX4NJ7NQDEz68KtkPBwHPwPLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onxgbDFRNRpQrrrb7tne7aFb2HwhTEME3jrUjqby7UcF6tY2dRinc3CRYrBFhvwK8unb99zi66iSovrBaXdx3xV",
  "key1": "2cnacxG6UJZmeAH8rJK2Bs5qQWJNVcH1Uf17sPiDXqQ27exAzLLbfNoxMko52jzdb61ZfzSCAufksp3QoEueLkKp",
  "key2": "23pcKFB2EzvBS8zzDQS9764tgDUEoH3ntMwnpjWPFsAbBngpxAAAnfct7ynTRiTFoivVNGJDfuSwRXvW1XKBAgbH",
  "key3": "3S96mxCWz2n8TZAGyDtb4agF83afG79uVAnMRNsW6tb33YERtym9npD1Y5Ppondhb4VmrJptDZfumbv6LRp2hQ2h",
  "key4": "38jWpWXBcERjmtgk94rsHJEEvMNFs3VQchEg67tV9VMPDLPrX3AsFeicqDSTvMcCxv8x8pqmaPqRbbEd1eVfHDq3",
  "key5": "5QccasNWrCLAXWMvKwrfNA34EjiPnoLStqwoqdNe2YpYPjR66Jc5DbyJa4iD4mDc2mYQDQKXHVSZcfyNqKNfswAW",
  "key6": "4JjFfWXy5A9iHm5pJSp1Wj89DgaonePAfCkFs6DXxtu2Sh34um3EqQJpxSnexVFevZrVhmT1FpjLjwnis3FrCW9P",
  "key7": "3hqgudhRaup7jD1p1MuZraLP6yyx53JA77JBgwcDfiJUTk5ESRsJ5yiir7gKuZswCa1hpN3xGKcgPBGTcyFf6coD",
  "key8": "5dixvvTUJWBVkkma5SfJXcM37nXFcc34NVCQy19pPwKEmzpSAvk9FtCP1cwYf2hBwY4JCdbo3h4j89B37EJ5maDp",
  "key9": "4M8sGnXaLfykL3bFb7zMs4GmnzSkAS3pLkqbJyVQuLPCuNznCnjqzz49bu8V2t9s6MA4gbDQd8Q7tfMqgqpS7d9E",
  "key10": "57Jv82QUkUV5yDfELkUHaCexFGPXnyihDoLu9jutWaxHDV64oh9bDQu61LZ2FeD4fUgytkqsoxJeTiDdHvZK8ZdB",
  "key11": "2vCHE8VPdaXcgMqMzew2qMD6GFUc1T9EYFA73AQ1sb453Cg2mV4LP3qYjx5jEkMYuf9piCFnNMyrjxMsNZH52NHS",
  "key12": "ep3fcvG6n1yz3zQc7wJGaS2JH2EHwMu8v8ZKR9WMnFsbZjcnZUPB3Nju74b4r5RmAbqA2rGuUbJbRbqKSDLpBi9",
  "key13": "3tKky8dWtMf2GBzhje6XcpcdKna8LDJAUNB6f4tTD2x8So9RN3Rh6yjxhnX1aQsEnU4T3YhNQ7Yx8UagB1nW2wq4",
  "key14": "3JwKwMVfxkYQ2JoK9LXnY4jVWu6tLPKKGSdU53XRLb7G3ZwAu8PxT6bAYMk16DRvht2TDqCouJNDYEwZCdBwJoqm",
  "key15": "2Vd4WDhanhT9VnPRvSVJkq3og4QdYYDRjSmc7h3j6FEZtM2Kv58svGxaPW3NTTGVgCcize2Wm1XVGhDaRLoGAg9b",
  "key16": "25NNzXVPtaMuwUct7uDBRJP23XuZv1Mttz5f2Ns14WCDoPnEkEBnY3akVtuPqKzx6FJ4xHtLpVhpYDtK3T7dnMJv",
  "key17": "4zoMak5vdUxCiKyEBpQX8x15GBRiE3YS9KbCRQ1NKhn1GNjwNAVkov7Z41Z5e5HdGcsHszHKdG6o7yqTsctSk5Gs",
  "key18": "2tMANmebNSDtmRMt6q3uCfcpyH83RzLBZWBx9RMf9iAQ3dKXcuVUsnneJYmG5JZKxwTSJLzq4yNjKVfbeJTKWAZg",
  "key19": "3vhHaWKcXYhBaJfE6u4ATwBx4vu8co1YX7RHU4JXzW53Cs1RjoUjZCD6FUdWnVeUccw3hTc1A5WRkfLrHsSZkBe2",
  "key20": "67gAJALro6DpBdQDn2Sc3TkFnu9y8dnortFVPhEAaWDC2WQqmVrNFGY4U1zoPczqtspuwhE4f3M8ZFJsBuaiUgk5",
  "key21": "2LAp6CLvAUQt3Mds8TqST1M68ogzsbcK6oF2mvpyPhRZnyZd7r9PGUGzF5QWPFnQaMyeAfYg8w7EaqBMf8RvUz2",
  "key22": "3NeaT4PwRPRaWLR6pUXHs198ThtToZH85pLb46nQPP9qyVccVAijdf82zDNba6idKcAiH2eseU67i2Ju1kfViPmo",
  "key23": "2ZEiQvxqPpaRT25YAPA7XtAGi4Y4K8z65Gzxz99ZjzEgBJ9AoCAob5ttvMqwEbLZFiChcrzAdABWTqpcuJDUDiMZ",
  "key24": "3su74S73oGkBB4vSBRN3gKJFHqDhPVrc9BeSJUdoNxk6n3N4GLA1zd3BSsqgpajbyJVR8Sgf47Yq8gRo324Qcchb",
  "key25": "MCLqgRdHR1zA2eWTkEahpXThEZSBtSWszuvXHEFwog4xE6GzFq6eMNC5ixJMni1X56WLiWJcCHpvM66SirW2HX4",
  "key26": "5omtSQbUkiVR7x5EZSzUVZD7tRFEjwWJCdspN8kJgFJJKmZZ27WToSN37p9gKx8gKygDSAE5wo27d8breEcKQ4yJ",
  "key27": "2BdRdSL8buYtZpKxh9d6a2S9z5NhWZ2mCDhCkkWMfpVdEM9E2ZxrRCmcmCN7MTZ9TpQV2ZRbgmv4tRmRJg8omeSS",
  "key28": "4NK3wyEPBJUZxNkd9sMEoVHXCQ1CtnszqwNMBj9Sezo5hc9MQ3gKYPrCN7Bet17HXfgzfK2TR3R1QkAJ14KLZPN1",
  "key29": "vCKoGxL3ZSy76zVnUVkwHKnbgeSn8R7erehXZpKC7T2hMb63ZgHdrRmzas6N7FoaVrkAH3yEoeXLxtwgwcq87TG",
  "key30": "4U7uV5bmRQjpMHLzuWpavf1KaDp5owwC63YXJEd8Hae2T2UtJjExxbnsr445xkLmtisQ2KZhLKf3ovfQD4NdUqW9",
  "key31": "5Gf5CwF5LnQU1MqNHTfDMnkggoNJEJhAZtXcSQCy8BG8jrvCAJRbfNe3BixU5unkG4pijo9T3LZLZkAJ7WU53mBN",
  "key32": "iE39AhnbuAnwudr5K9AZc5gjtp3V9VfuzZtcS5kAeszFMWvPQRwCo4nTatbofWRqy6cs3Xco2Ty3VP9G1XBMat1",
  "key33": "2iGXbVGwkng72SBDoCwJaUuLuaZbpvoBK1Fx4ndKJz5up1Bqqjbc3Gg3wZ4ypvCYyZBeS7F7sbEikfXVZFKaoRYF",
  "key34": "2x2yaqrsBf28Pz8foRs38kswfVP5PQ8F87qEtWvLmaqayNnPQ41LLk64RZmp5mqUibDaFVgCfwvK3ztbJ5UA5pwq",
  "key35": "5aBotb8rTxjXpZmxnHbrKwUe5YtQNSvWX5dScBQZgSmfCB8ku9S3bQ72MQJ5CUdC1aHZ4Qf1x3WaDu41P8PGqJVm",
  "key36": "3BCH5ihhsaj7bDDrXsefSQetZoNxJzgkF7vTCXKfA3cmjpcMspxZDyRPP2i1DPSvpwFtnxEf4FzC1hcBMnWpzRF5",
  "key37": "4sNHx8k3mRqP89wVDmd1cviroxVZp22bMDTWeXD9tEFLQ3k1kSJb3M9KjZskWW1x8uDRA13NdpjtZcxEiwhgqMj6",
  "key38": "3GZ83jzuc4XS5LrJeff8Y4bVNttvZ2yhjMju3X3SmUJMoevbbe6Rf7RmwhWpyNqDbSYw4fZhTHHkER77MmwVDVrd",
  "key39": "56TnkjnRLVPZ4xQAKRZgoGda4jHriumkKHqVjU1TQksqpUrFpEk9nVxWwJtm3uM4vdHUEZC4PRha4hQEkNT7rzDc",
  "key40": "2rDAPPsdFSCconSmopyhBWMTTPD3yx4pj7AczBXs3SiV2uAmMv4N8bKQfX8iaxWM2gdhhsn1smBTdXRoYSXfWDnv",
  "key41": "5F2BhCiDgiH6qMVEWnAxYmcz7i2Ei6XwVTa5zY7HZ5jor76QdpwvdbrpvXzC5bYQ7NhipH6pocraqSg3x83QbeoS",
  "key42": "ULqpe4hmQ6Xjag6Nc2DRpJUzTWq5XPcRzJCVXWee1fN5pQhYgcEE9svf4QJbTTPNxmfV3UjdqDhZgFZkS4bx35v",
  "key43": "4uqdnmzMsrJYNEgNgeng51JFadPey7mLNGBucFeN3442nsBXkj2YeMjJqk1B9xzAAUtVmNDibsrW33Q69yJyXzBg",
  "key44": "4654Jzc1KptH9pfh1kmt2LpcKLzrniN7f6bNuAdgBhmfHSB7BVd5Bkth5R6GG3Tq7hdod3aLRUzAyugax3vSLSXt"
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
