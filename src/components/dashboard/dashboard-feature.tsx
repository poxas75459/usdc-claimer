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
    "47m5pi3VHGdox8vPkAoSnGHGSmn93HQNMxkxWBp9NWAZBDNEa1Qkp9ZFjBPFzUavoubvpKnZKgBWdNGExCFYquQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8n28rvkr8hsPegjxqGeRbs8QYEAFvTaKpszZkimAG4nPto6yyKkQVqNjQ4Ne5KZDtciDVBqUnV2pA8cWJgt3bV",
  "key1": "5nHzK9BpB26aMDEMKwoUpQkxmQiUv6YxSNdEACzrZM2T95BBie6AemuT1XCWxQYijJGTFSXwDXRFzX2KFPMr8gwV",
  "key2": "3amYYUEb4QKMWENuUGdTiTm4LtGYNUk7PX1dqvUBjzBB2ugph7LJ1HCRc2tixzb944iikXj1cKL6Q6JKYgwxZBXZ",
  "key3": "58CoUavioxF6EK9h7hNU5ec2eKm91YJkrieGDDaxot4uiNhCoH4KEXpn3XpwASaKZr8bHmBSPGyVTd5bysatuLBb",
  "key4": "Xd4uWsY94VWZQvjDyGXPcUHkRL9xzj7Hb98HGfUTWpPhawJVwKr5zkWe8WCCgMyimmACPAnAPDpiCv8kVk5y5Qw",
  "key5": "7dECWmYWSvRofaL69kqw1APHkjYDAPxmSiAfwHodYP5RKrHnz7kSa33EjghRPj2WBR8oEALm4scX2mBUmxXjCZt",
  "key6": "WNMEpowZqoCEjKF1UDvmnvjmBJ2a5GHxV2aR8ysny7972taeZtQq573WZhBRW8hwdwP871cfoJLMTN3tZHZPqPK",
  "key7": "uWpBTyQrMSiMGLbwKqt5juf82HDs7RXYcAVQAmRimELykKZS35T7BxqE5upwsbNjEvMaVfVei1bgR2q8hnSVgF7",
  "key8": "vq5xQRWRbtSkCwXex63RM5qVAZfoHcccdqdvZB1sUmB3f8df5wLGWLr5yM7KecZg9MdaCiKqAgdf24C5Ycy6v6N",
  "key9": "4mhEjVDs48F8XRafLx5uEai85UYNMxR5vDJ54XkyRRBvdCSY5JCqZzxrZCwndib2ACe63NMikrr6LmsKS9VsLcBm",
  "key10": "4AJAzPo67b3aqei3pUNznPcSevhM57HKpdxcDuaUYiPjwFetBN46WFoM8gpD7tii7csmJfdfnmFpiLLWMn5amqzG",
  "key11": "5x8CmWNSMuEwieVzpFwSQccbePUdEgRTVax2kuR4xyoHjAUtTi7nTJWpYj3971KQuPZrAsiDVm8L9YJhbsijwvMz",
  "key12": "LRDFuz6nAqbByDCV8YQ4aRDp6eWbDSU7Y7gmhLceN2DNrpT5Rdao8tt6qppQGNgq7TxA6AiMLPJnVe6wnRkDqRM",
  "key13": "41pUmZAzTn6wAWSharWj2KyjrpFxzPxncpgG9bNa7orhDyv9voxBbk8Ntiievebdqkiw79BC4GMMoJ3eWAmTVLEs",
  "key14": "2kPoEg9JjTT2C664o5BkNkdibimCaekjgYnRbWZnAP7S5RbpZ7EqRxZK3HkQsMG6LW9JLgLntg6GW9xoyAmCpwNu",
  "key15": "4pJTDm1gKEFJodid4KX9K2MWrMgRip9RWR3HvJae6eMVNxJ5mQHwm7MsrgrktX2mcdWY5uMoN7RBNr2fpGLXntbv",
  "key16": "28KGgV1GfXkhDLichtfF6svzUHnePFd5VUS1dJMtbutwfNVhJn24NdnyAPeDKbDbKD3ysNUfaedJzWUCMFrnAfvQ",
  "key17": "4bnctkdLUjuJdLmZ62u5bwJJNWEz8V1a7WQDczEiFdeQPRScc6bL8v1LmfpQJn9jjiXY5AuqwrGGFkQbWPxP5kvx",
  "key18": "dqb97s8KTWsNk24SNqsEd5MRPd7jGd4FmUaNzfZYTs2gTRomr2m21aNLAhvvrjECVDECb2TLJfgiVx9RmcScDXq",
  "key19": "4Uu1pFt2s1r7rzLFjykxvbWbGJRcmN9uM7BctV5s1ik6KYAmnkMNc3BcqDV9d3G9LPWpNp82BM4ZC5MJXBr3vy32",
  "key20": "2XZy9K7mXNzXkvTZhGAnmGy4BNUX4ujNekxNzATisUUKvPYUkmtgcFkpWLwJBZoiHk9euv4mBuhxL7UF642xKqEM",
  "key21": "474vbjKJK6369gzAHTfWQFJWyC61K8b1wekX9JG5LMqQ5sCHv3nKoUPqafqUvBUdYU419AuwaLEfEBxz98VNkbqH",
  "key22": "259r1CoX6xP8fCywpki4ujMa1jHQdYBgBKaXDjzocvEiu4ZxNK7ipH4wT9QU3qqpruHsZPkWACZKTwaNvjt3aYdk",
  "key23": "3qSvNwG2QQSaZhxtnn5oi4C9CQpR9cwHHchC6WAfMNaSFcVzE96URvJDjUEudWWveFptvNaSMBNV1XfXYiynEQMw",
  "key24": "3SWAoCFfU8c1WJY9grJJHvku2Jkg6XACMtcgKpkP2u36WWVXrfnYVgzdengA4xCAEwSa9nv9kpBhvf4vP9UbWzED",
  "key25": "4pRHcUPmDATSg3ZMRNFEt8kup6tXaYzdymQZnGAxCBR6oP4GjJ1Zhzuz2WP9mWBFdCFPNKCxsVF5ezygJtTv9drz",
  "key26": "2YfSrbvkiZxGxsoHBrffq5jHHUPG5G1JQf11q1hkTapqZTpBtHpGUpTgeXpoDVRpta1ZKrmjLhDD4pNdbP3vXjZk",
  "key27": "3ZrwXwzBicgExmkjypbnQzg2ThDF6Ld4NCFhtySw4V65vxFHDtiiPTNRZDzMeSzrJUUuVZiQkmvYLoS3VyxaWoH",
  "key28": "4mCoUqBw7Wx8Mx7xvZENAShbYFo3VZskeUKUDyfcQfkra5ADavCZAzubLVrcS7mecAx5FYxWpBh7QNWmDoYc9GTu",
  "key29": "2tMjEnHAGzho7XyJ9u3iZ3BRkVtiDfyF8cZkbB3MLUW2bHoAqgi4a9dEqdfqTQxfjqNiTGkfT6JXEoF9Wyd91fpi",
  "key30": "2Kovu7Jc1GF3XDfNsDJJWk7cUWtW3eZxMXDeBk6WZeAG82ydQJr1jWpugUEk4Bc6GNtCPw9TrNdH1RwRDGwCL3ts",
  "key31": "T9G47qi7wwRbaeJt2VBNRK9iNRze4bhXgayhkCvPwbVk7uTm754GqoArCbSBH9MEUvkbi1ntHzYRbMDv8sAnpyo",
  "key32": "522oUpnPmjM8FH3fEG2LXRM6vMXt3MX8t29fTfjRoHDzBQEaf7abGhsV6CDL9vg8igd2eMJ3dod6Z6Q43peWsQyp",
  "key33": "2VuuPdPZijXrFxwohjSqkGq4ys4FzU42DALzyLzB1hKnFqEQ3nkSpH2DrkAPZqLPowRPqYLUoNdX99s6KadYDtYV",
  "key34": "5G1ZFtKRnN3fNgQCcnpTMvY5eEpb439gnn74HHtmFZmFawAjJ8RaJW7uHeFLhNvBfgiwHJmLrbjXBdV9XPLkyaVM"
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
