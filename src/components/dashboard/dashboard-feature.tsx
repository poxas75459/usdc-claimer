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
    "59TUW8JxDJi8u9rRREmsBqTyaW4tHG4UyaVYDmLGR6fmPmd2LhxysJJxrURBXyW44mb8PeDXBTgmtvwifpmk1LH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyoM8ppWvMdaDhfT1hXvaWK6dC5NKmZfX7oymJs2FAd7H9YnVBjVBCZeqWSPUcNKDzV1t9myTWVguU8a1KDFAmx",
  "key1": "2C2qGgPCDDCQG82oRvd19r5zPm2JArPgDrdZxgxaqkhxmnMeSmyLtaU9MS9vsmxFL4hogZnuEignDRQgnDUEJseu",
  "key2": "4DCocfABeUgvVjVu5MvHL1QE6HXzJdP8ed9Y7vL3xptk5KiFnxVj3RxS1S7PMjdUCm5FrzYW14aHtWDBLJtieWFb",
  "key3": "3gita249euCNoxND8UqfyE9wpw9DRiL6yngDUPfCvACHS1yJjF5rWHzvDEXuXcc1ZVcHfAf4tSCew7Mpa6jwY2HN",
  "key4": "56SCD3tuFCxUBPoGuB4aabpfL1nuyKGtLyHZWpm2n8NV9EjzsGCrVLfpo16RnxjiTqbL27bvYxgLEkgcL5C2ohdc",
  "key5": "GVkZj5hQSm9n4ViWWd3tbkALHAcnsrK6eJu6Uzr1FFnkSWq96qyV3ZDiYDPTUyrbHNPg2ZVb8jwAoyLEgU8kfnc",
  "key6": "4m3Bs8xXJRpf8V4zpKKFb429qM3qjLWTSNDNZGjPhHjyACkAkse6N8cFtehKoaVzQZrFmJ8CkveV3PoUgSKBtBfk",
  "key7": "3a3pntut9coHAg4qFSiksmX4FmozeWddFZktCnRdY6MNiD7KSKR4HTdAJWecf2HsKSnVXFmaN6CBwS2zKjemd2ng",
  "key8": "XhSnMrK9dNPLpGDPxz5fMShsTUwE2RE4ufv8nxTHMKgDeEntRxiM3mxzrznoRP9um6Te7MV4ugbn1zshWBZMWV8",
  "key9": "4E1ojKgYpwot7bjREXndU2ibXdLxjoq3wy8nCFQNt4BxCbpz9qVXw9DVoiBCTt4ETHo6kaEw9LkaV8xzfWb5dThA",
  "key10": "3qXXyrMBZb4MU46YXCUtPNYWSo4ih2hKjA1d1eVFkeK232UQmLfgHDuq8guPqsf8Yu7BFfd3r6URnv8PsNmwQriT",
  "key11": "3hdqfH4nNJ73q7jaut7ALa6Qjzu2j4CApfHmr77u1d4FmsCA6PyA4mipzXRzLAu9RzpAHVY49nBjCyqzMT4ddYKU",
  "key12": "hFEzq5k5MpU135J88mL7YZsKkCrQbQ1ra587CKTUR8dDerTTGoFPE8frRTtzKU8WzqT54WgbxBwrN7nVfm531CT",
  "key13": "2xo9jEnki9HsnGeRYsZUgya5zm2xD2BrDm3AXtQEj9yVUSRCMFAzRYULMZJhyJ9tFyAWPpdSq4dyiXqadwRaEnVN",
  "key14": "431VByrn5UD92s14D9HVtCtVoDpeaTBZmqj3ycdGAKZHAedGmAKiiKj3U133PDN1YZVApvb6WEP6Usg6LdK7jxXo",
  "key15": "5pFXchjCZSNiP9zCimdtDra29qeeDf8ZSAQVHLwR7D8qMCM8xxzyJz1f7Gt8DFRjp8LL9GaVr6h8btfVj9ELRGdp",
  "key16": "5VMDsTuvVJ68s69d8tMmtrVgFHk6k5QEM3xnXMzuzRUPSHQVoA5tQvq3eBHtxYTKRs8X8wp1GA5zfSZunNFJ8c7T",
  "key17": "4KCjJk2m2tSwceNyAH1gCvnzT5H9hHpEUxhRWSCTnyobqo7wCtvGura7aKPhYgWjrAZaoB2BqJLVC1sn9tvExnKf",
  "key18": "2v4p2RMJJdV4NUJimaodCdQ7HR9Rp8928NoZC1bgZMGVVVyBQNZqzdpM6WJ1wJ5h1gXDn2jVRV3PtoQwvEZf9ep",
  "key19": "Gp4MK3RE7NkebEis7UABwujpXURc3N8X9XX56trMnmM8eVgnKKUCzcGzgkny8WdbcLZak7gy6cab7gigfRcxafS",
  "key20": "4tznDPR5LW86YSuFCMQeyZvs8YTX3eBM9iGmwMsPLuinLDQXJZ4AuWHe4txKGXDK9WY9kh5wTrQmzVjHjbE2GZtU",
  "key21": "3TV8smMnb6SGrpLwyPTxuDGRMexxREFPANPfyei3wgjemNbeQhUAPgaWWx6iVjXVeXAi1m5wff6qx7Dn6tDqHSwB",
  "key22": "4atFtzjwh1Joqft4ztmoASq8fceUvnV3fGyAuMQpttfmnPhXAoooLzFsiz5VR8bUwU6RrC2hGn7TPCzjKQLJPXvr",
  "key23": "5TvTnPFZ2LfACBEgToQm1NuVYnashhQCpi49hfMPfceNbVTf1miDXCF7uLXEA81q6qDoPiipPjZNd1uLGja1tq1i",
  "key24": "2ScEgAmjSKmerpFwdwXVjzfHJkbRvkzg9rMezz7QvuCeMHq2J4ZMvE1Eik9FZzxmTyZuDUNbC7mPyMN2yQHouffu",
  "key25": "5UNqRgTi7KugLhxUjs3j3Yu3jmwmbBULxGPhUpt2ycvunYjGYAduc4sVygnxGqizkq3efVA5zazoy8ZX4Nc7AogC"
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
