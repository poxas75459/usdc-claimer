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
    "Xu1AfkJvZvMAE8WJHqS7zQMGAobxQYKYetJoDyZe7gHD7g3Yr5rubi6hmSb6Wr84w3TjHmuQYZxShFYZgTafyze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43VmnqpJ2uvyAJS1KGN5N4tjnKYg8SA7dqJwgmG78Mx8ALVBV6yU2jH81JCNPeUvfa7PvWNFTMwPNWgyPLS8hA9",
  "key1": "4ojBHFF73DpvrBVbXKcvZzHVevutSZxWfEMJLYy2BHLwnufMHLXiwHmgp9xYy6ckTyiv7pLwMgfRxRHNLwjacAsk",
  "key2": "4bgsW9Edaoj1iyFb6oa5KQYtaqGMTNFN7s8dLu1qTJJA1RBBJ7hNVEvmDQfrCCXzAmNpGVfivFisvN9A6QSDuBSk",
  "key3": "2HQ85nXXLE9TYBvLGyhMpc73NdXdyq1KNXe2sJXxKAnWqp4hANngxZaHMj1RBoJZFDZrS8QArdUBZTd13uBPJcve",
  "key4": "67FW1pUqXKJhMy61pnkR55z11Mz1S74ZDUxYpMt3xHQdDhr3LHmfUYW7jvW4B43kSvZ7g5CtKWAGt6XTd3Kp5hdU",
  "key5": "5aPZuh2CJ5jajo9pkZoxj7ioxqzVdbgocqbox1pgpyykiY6yKLrBsf3c4tgqYsohuVgHjSndiXdtdrY5r9Eos4ea",
  "key6": "2png7CU6BV5fTNAKfCutAtTq4LENYUzL5dUoHooK7PMi9RV7JTsiFbjYH6AsPEnFbU2tEchr3AsiDxzK2CfGP19E",
  "key7": "4tmPbrnVi57sYzCJ1LWXzNekuhhML5MTGyrB4fVanrQTRnNsiECD98t2TGQkmyf93FR6iXhYjGscmtnnnTZd5CTH",
  "key8": "CogmSJYgbt7BrNQAnEHiHAMiLTF1SDvT9BuzFQFtX99WrnqtV9rWg4U6LZFrVJfQ7LBdEWBTbz3yWscfQAjWLK5",
  "key9": "3U7CWwYTfNRMYVFxYRUt29PgKy2BxEV7ChJQRCE7p8X74svZpacN4rQ7auCTrBgGSRMr4zNzty93gzom3teJDFjq",
  "key10": "2p7iviMCfycaVm24hEzXA8R9Rk9iw8W7PgPokTRLjX1hDmAg9tSV4rVZmjwbAhB1RnYdpPMh2Hxf1LunF9eHF32y",
  "key11": "2VoL1hHncd5nfryKoLpekT38ZH1BZqTYveDTypBTok3rNgW48XLwbES4KqsQ9ZfKjxFRvNgoThFfAnWDDNJ2NKGu",
  "key12": "2sApFEFbAKQAdeS4FakuA53qyo42MTYkPfmagZ5C8qRrZie5Homab2Svq2JzjpC9VNYvyMepGhYSmrMuHy2uTUMf",
  "key13": "KanwKS51x2zNiD3aQhPH5QBuiQUGY7ommr3QtS9AmEwbo8cadjotz4mydJ6c3WFSXRwVpxAVcaLoXFYVEujB8AY",
  "key14": "48Y7CWzev9e354nnM8znJRY718pvKDx3ehz232emvP6d4oGodTY3qjBxHrbwzru8qHTy1LVrXwY4JcN61FJJXY21",
  "key15": "5BaCgoT97vgtAQoXKQjWizJaCzgPwCkurXpurWfysuxp6F5Gx9RhhrP85ngw4C8ZJEaUwmDRsPpSnd1FbGSYHDAz",
  "key16": "4ch3t3sbaaka2dUec89L3fwL5LF8TcqmPHDnuju99eZB85xMjY9jqmQzdGgM25SF2PV728jbN76akLHki9Moyqga",
  "key17": "3fuh1zv3tLBWP4TSdWBcaPx9hcqvHSeBvbXtRG4muUefvdDr2Dj16KhXNFyoyhjqkrp3o4YtcJk196ynf7yUsDUn",
  "key18": "4SkeovifwTH9wt3v63C9TTLHsU653bjUiQ5vCLutBxTFecidfNTydrqtXJCXpXR2hF5kkuoFCzEPxtCNTFYiYE95",
  "key19": "2Vn3Nq2op2A5g3HJFq3N2uNZFK5YE1oF3KpFRBhAQ71tdaRKUuZWZwLXzK6zHWF7DpxV3a3n94T9CdzdHqyTe9Aa",
  "key20": "3sJE6SrnYJDegLLRmatAHCnsNoKn7GHDRUXifou8fbAtyaciQhKhL2MiD8UtMQrPWJAaM3qkaksNTiynm9amvrA2",
  "key21": "4sTYEQuQph2fwvJL3zNFDQiHKDSnaKrqHkp2emfpVht9gPpGas2Xi2y3Nvzq6ZcPLfrvRjc8H4LY269k6KpqZgg5",
  "key22": "5zfWuWNsmXB8WGUP8WGcmZzadUZvF9k8AihMT4m1D8ifok1KecLXAicxSrmDiEb51cLf33cvp754r76XbzzUZ3iG",
  "key23": "5AmDW9KgRyaUmSeKx78ft6xXT88ZeP9eJyNMrE8EDxGb42iZV1XzjrZ5JZVunh34rrULC8bGctauVS7bHSXSwZGM",
  "key24": "2B3tRik6CLiLsGXzq7MpQXzu6LNWtUftoiKE6SPgnHD9oo8WAQ4TtowaRPvA3fDG1VoYDV2tsn6qLkncL8oZz86C",
  "key25": "53upGypBejkehfWFx1eVSSLK7ZPcgYEBAWmgASDpq5aNgH7ZE4DhZWNopppWupgXMAhmF2TJDVTTemgfwi8uHh8c",
  "key26": "5FGsu2Z2MRi9zVX4qpkHpmNCGD9LzRfMF5rk9HJJv9E2JnkhoHAAa9hNNBT2qaSReSLHihEqqAsJRCEJK8m5UTuy",
  "key27": "3EkNgsKCKvYV6pKXxET6XKt9aUCVFNcx8erBwUr8gEvgkwBuyU52EU5q6QDRC7qMgy1H9qeJ2Cuakxg4WPuizBaQ",
  "key28": "32kbqDAX884r2U3z3xzym1YcUH6bqZRpQzCX2RcFHVWCJ72Sm5E1DiWngRaJgKx7GWbGTD7T3f9XfbN2qmkJDU7r",
  "key29": "5eGQJoLrKCkhNRDYF5J6wtLdhpdVf9K9tyR3pWPb3Z2ywuLqwyRG7nh91o8S9CBxTH2Zs4F97jLagkQYn9nUGy15",
  "key30": "xeaTMiMk3Psfn3karXgWD5bkNhf7inzFFQFMJWxuAZZt4eLUkkckMqD9GtxWAenSLQNgg6RWKLLRMyuyfdqQtDN",
  "key31": "JXqng9dxXyGzTsGztk3NheJKAf5WQWV7u5pmPeicYi1aNKti3s74MNG1y1h5cZ1Ax96B71YZ212KXrs81UEpAAM",
  "key32": "2mDzxmmtANFwa9Te8ZnRsXvEZnzEkHPx9As8qdrHBy6LAMD7fdy4Q59Rr2VkqwUfApSt9kKpeQtMnKDAQHVmnAPT"
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
