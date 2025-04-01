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
    "mCxRgMhye7BqBPPC34tEPDrYjDK31r1wnwHk6wVDu6ZSNm4RA4uUKfrbBtivMHGKVKz64jpj9K5JiuXZ4WSuuM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unBBLHRsp2i1eFB4RqJVfDYbq22yJ4psnZ16uLQTGNGzsUSj24bHjdcoZmtShYdqEMJGxZCncaSgfJG7c9C6ywZ",
  "key1": "2EioLCiHH6dn4NcFwnojjh9qdQJ8HikiwXQXxXABkB6oM6oDCgtJADZbof6iiGgddo67JDgXGAZBQ76wVKX5uk71",
  "key2": "6oqvaGbpzmxc68AgcRq1S2QfUCrq4JoFEpTixEt3oAGpaMJKGWSbnAiGua5esTFEQPBABFWRnpanW7w9KypPEzA",
  "key3": "4b76yoJgJZeSPZXhtenC2iwAaFC2PHp3dLpzq7c286MGmHzhmawXvS6Ujrs9MgSkNgAuGdhffgWcU9XYkT12h5R7",
  "key4": "3ghF7CXDkHLVZmzNFVemd7qB42S2pVdAXp4MhfZ5tafsLpNk9TjfXuPmRiBU3rCZ1avBMv41Vt3eYvjBxhCEk77R",
  "key5": "21xtTbmueMf2RC1qBqsuygvrZ7fx8WC6mTde6V7eGZPoMcj3qgsCuWAVUcUKpTGozyfhNYwyGRkSrpiGC9Kutq9F",
  "key6": "3qKDgzvtFt9YxauaoeF4pyMuVxZwbNKZwVv6nWsdfW9xbv6p4H99BLXqkqX8Xae3Z48dV1NAfPYP5e5rozfZrpZ9",
  "key7": "LKeba1WPvbiLLwa1BaGoq39F3UV8vmg8W6H1wbkd9nkvLKskr8w5BDRArbBdM7Dvxv4fmLCTz5V7GwC1eYMhE2P",
  "key8": "57bUA7ZnpbxF1edXYjrT5QD93KWSf9oJ35aMNBqy2pbDdqdaSRT9m1DQAWL3YyuRgoNiWEennjevYysruecQyE6v",
  "key9": "52bKUT6zSjX5DMYbqNpXwuu7DAW1r9MqqyScZC7TVeTbz7xf1TPLTmy5GQAGMqxxTuS59UY3WKytbEpkkXhsT18i",
  "key10": "2Vw9s8cJT9SFvSUAxkriBccWCTaZyfhpQcJtqHKTY2Ah9aXY37jatP6gZQSoUTLYDpegJseASwen1mMmN4Zjyatm",
  "key11": "2XxfEFGjM9wMhTEUs8yby5jT9gYC35ZLtsQ67D4ptTHt4MYcK3iHeY9dejHZmoMRKyjuw9zzcSDUo96gzDoaMxzi",
  "key12": "2sQZ7ffEADacbBTTrW5rmZvoVnjQ36sFbqCMNFn7XBzMsnWMdUtSqZnWfgoYfYna9svBPBfSiouAroWoWwyuibDc",
  "key13": "bjuTVKEFexYbrVxWFt6jsaWGucZTVP2uuNvQvy7tfUhYKZ1hY427gNNSgknNzqTQ7pJUhUBfVJx9wjCfQpwSwc5",
  "key14": "5TYNtYbMEF1uKH6Cxc4CWYmDx7QamS7Y6JkY5Te3ArY4Bi6MYYaQ8rqtpK3PWBDPUCScK9xt84VmvTgx1D5H6MSy",
  "key15": "74sPt1Kpwd47bxeya3t2V7FEhetoCZaD3V7AB3CkjHSpZoJZv1LMd1u1PeExkrmwSwWYDBNbWxjD6Kym9BZhZDw",
  "key16": "4nTsWRTnByJSKa7MAQWVExMcK5yqt9GkCTWict77rtku6PqNzvoazEAJdtPgdDVmVUJQSdQPZNrG15qbGov3K7pW",
  "key17": "3rjh4nc59CtJCuSAxoKvaGea3gAg1CDk3VTV9e9qEyFdXPLWuRNTWWZhDXWBcxHzzjDhTD3snvAEyXeZxkACjzQ8",
  "key18": "2cYwzfjPmQtaYXnFUTPkRnZLwjTe1k7iSDVBb4wijhwkg8t4meay4QgTfZ8gtZuojdrWzM5NNi2mUiQxBCG8WkyV",
  "key19": "5soG96En1gyy1LCR8X8h3Y1Jv2BFSW8SECnc7QdDs65vPteeBYdwmAos7XPTL3mVtgZ6UpfPgAXxxrk5JR18kbQK",
  "key20": "21csmBjQCuV2SswgkKDLEoth44h1saVgYrmb4cv4zzonTGwfCgmDNW7qRaoCaP8hj5LRnLK7va6XaKh6kFgYGNwr",
  "key21": "3pxr8Bt599B7YS9wa3oJnGj4o2BTnk6f2WLpift3cSKZ2K91XYpvVhqjjPRittLNUvkAAmxBJW6Gj7trkhHMWcxX",
  "key22": "4oCRdp5uaXjWGxQq5kQMkY3soNxNyBRA8SefhXCTCGCKtQdVaZRbbxxRDnCR6F2DABWdtE9Pjdi9hGPDkCV1wDCW",
  "key23": "2r2ThT5M7vU3w1A4oDELBazPbHAQeZyWoV5mY7neeahhB5cyxPZt8XbPG5RaBmKZBAHV6WsXR5pLyQ9tFczaqWqe",
  "key24": "2E3UffHzBDinqESu69Bim5t6eZhukGPEqHoFmM3aQyV92HgqW1dZjEy2NR3SmMxyHFw7oE2kbLVH8oXWW2z1B3Pv"
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
