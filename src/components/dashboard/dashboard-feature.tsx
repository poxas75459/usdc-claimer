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
    "anPPbRC1bS5rBDEDBiqe3K5RLJ7Xz31M5deatyjH6XbYECuGrdAR3S4iHhHEBhhBfv36eD8cS9KMM3NcFBBoc2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wSDr1BYwrK2bqBb5hRuihNFj9i3a6VHRoWp3AKU4fM415DKJEdcXet3ABeCEemeP7whpe1TYtQhwQMZUXv687CC",
  "key1": "5FTNVhbxtTMaWakqLvYNpYFYrGFCeGQrLcjcjud3jv9uJFcAxMC1V3jPgjUVgCqx2sZyJk8x4axAz6nmCDxULGJQ",
  "key2": "35dHXTT4FYVS54toHqc9DPTu59eZj4CSkQ7b37MWVT6BwDfZ866NSEJvNfXCMRzzQh99YoLmdhYwp8A5GNiHexc2",
  "key3": "w8BsAi96R7X9fPiJp7JTx9c9PCrqCVv8DhNxik5o5htZXjxmaUvGUpyiY9wLcZaxJgpt9JDaz2RYBk3Fgr43YLw",
  "key4": "2HaqBaEWvcyp2wbadJphsTTPDZWHTRKHNxqdSnQBzWf6HQWQx3tmE5oTgcVJ4UyjthHp4Wt283DjaymPA99ShsYb",
  "key5": "SJQb6Dwy38WsekSGudAmZtdEUv9K6RbfgXLbKo58rrznix6ssqgfoiSHJALpYJyJpXcqn9p9CjVH3YhUhFKvJ1F",
  "key6": "54JZE4kPVKra5jC5RYGREAmYuyqvqJFL4ct3GpQHbbyFRtXn5uMEYV6bF6YouYschWXhRqa5RXfwDRaEXE8FFRUL",
  "key7": "4nBftrmNYupUTrfaL3C3NRQVDK9mnwjuKqcqyaBF48WeiGrbxwa92dGyRza8gQXgBa3CNVgh19KMbShKyNZMiFGi",
  "key8": "2x7Rwf88KsmNDnjMuhheDAw51YStbaN3SQCUuCF3cE3A6RvSTkZ2fBoawqvkZSvX37SsZsRDJXa4Ti1213AkLgWz",
  "key9": "4fBLKqkrTcfMZCB3GpKZohkBgdrKQFoFe2eM3beA6x52e1qsyBEceNLWxJ5ZwGvhmPW8VmJ6c5v9TVEZvQALsY64",
  "key10": "3Dea3fZjHDsT8hn8H4u2xaEkLX8bXRSiAYMVuucBQBvhKodA6rJ9riuJ1BFzpHQSFoN4V87jmgstXDswhEDPv5VL",
  "key11": "5WH7B82cPpe57dvjE8tPXFi2v588zhU8Yu8DmQoVMUqibLZLVuQL6z6fMEinnwfcbMtf7wM9Q7zwuD5WCiK1hYbz",
  "key12": "5aCDLdjCcWgMRXWBAuDkNDfCetYH6smb4mNQFi12X8p9qDLiZnwBfvWZCGKPbnJGjLw7pRi7BBaTcHqbNLHWdPVy",
  "key13": "3jMeHu5a9gofb3sd5mHwCvTR2LY1LY8TqhWJumWUS4WTFwdwrqqxkysuMyUGfYaFARsPUfzxPZZpNiFkEWbg7rPb",
  "key14": "2RWVhSRN1MSUL1krwjm2hUvBxMMNMnmRj4c1fZsKN1yvnmkKrWLqRUywXtyVFvk9KLWcim9T7cm8mBgKC3e1dj5W",
  "key15": "5BnW14Hc567bUcwFZ45sWwx8GadFkkxYDCmnhrNNbUk3rPNWVQgwd1vUQsrvmUWTraneYAMUyGKrz5jfnjnCFEyr",
  "key16": "vHThhMZb84qWoeU5iGs3wZxfQYjVLQLwvYrQEnZwzZKVUFmfZvihzi1eLgWoVXX1VNW1H1R1Lg1xRMnKybWeKFq",
  "key17": "5ruuUcFjvdeqN6mCo5BswzEXoDuYeuHnQ7EMJHYUwd7L24shPHNyyAy3oqQbFyXU828dzT8CZtQzBQhmpAc16VUV",
  "key18": "2DtdWejvTGRx7wEfpUoxereXFLhJtwgUAwuqrrAHMQiUrMSNvJjX3WAynM1QxcanBtu6ZjYnK3ghnGMDqgsdYfk4",
  "key19": "54hvWpZG84g5pvrUqwHC7WLHTgqSNavWQJtfEDwLo8GGSpT4bRWXti5f76cPnEU1r8vf5T59pE6eTCsmty86kJMR",
  "key20": "ExemZCgEg14zH652NNfeecFmpW48pBpULfbkUW94NSfMHTYYii4eFzJwj1ZAy2MxofzvAL2q6KPmuZJ43X84Wei",
  "key21": "5FH9MYVB763M87Tk5jVjzcpri9yfpvsWAHbLG58aqMRoqMbYS9nfcG76BhUY6yeNicezEL3EmuFTWw6tV5bS3NXg",
  "key22": "3oijDaX1awSoWVfj7SjvHvieLSQbg2zd9N3JMgWwou6pPoRnBZxEU45wYDkg6p6NKTnFbdewQJaR5kNFMA8idKP1",
  "key23": "3kP5B54hzac5X73qW61BbhX15kWxw5S4BQSpkZEEHn1Vuyco7RaP8xxJJtnYEJCZ97NAxu5w3uA6NiNd2JwgxTdB",
  "key24": "59ZtHcUe3RjfwUN731DLkfJR2xPPXmwvxyRFyCNLDFDbYp9qyuXrjj4eWFLjA3uxhRHfGHsWYNty8gWYkZEpqWB1",
  "key25": "5PCyFS3nAGmMQMAUDNeXFsnGXh5MKaQW4tQthVGgvZtJzegDwrUNMQteGnsMzvvFAp2F58sHk6CaLddahYDx8yJj",
  "key26": "65axhKFAzqisY1BhdaKu9aHdKQmaSpDWqsntwKe9caKp6BHVXceb5nMnTEop3yA4ytFY93EGmz3U9K8qcFSgrqGX",
  "key27": "CwM9bVKr8jewtBTiTCxozDnKUmH7Zwgki46rUv6R3MC7MhcoPYsSPkNp6z2ZUDHF3wgsSybTQCSjN23dVyoRkmA",
  "key28": "4r6NRswNxwkrUmtZcJxvWsmZX3pPpgC5RP3W5oErLx7bvWFJL6E2xpHmggp25rxSu6NbdkPvZCmsFcutMGn5duQs"
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
