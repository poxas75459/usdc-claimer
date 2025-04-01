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
    "e7kUUWq1pQu8XjUPpcmRpCgdnKw33FcTumr66zD73qriXwCrVg6qrp9gNUeV9oeGaYbJANu5cnU77GneaCeWyd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZfRyvtZvbCB7D6oC995YzrBSFWfeWDNaucF2iTCBT8LZpEYDn2u85RHG8FSdmDs6kzH4GWQvKkMeCqKdtYC7xV",
  "key1": "3fD5EYyD6PffGZ3MkduhemGyQEd3auz4owhk6HH4tWZucowKsP1ZEEv8YNkEiNnF5WJkw36S927WRQ3EivY86jeN",
  "key2": "3ieggdgUBb1g9BhUQk5teaDjhMGZJxTcwucWndmyBgMdvVa669hUBun4ykKEiAUmJRtfq2oa5Cbp6yiR89Qy7mv8",
  "key3": "5ka3sfkBH9ALSKwPvcngKN9YNLbfnFvSrgQLqrhecFDKnVsbP2YbrREuEcvuub6APZan71VzciiDxAt82n8kiYqr",
  "key4": "4cBHcYa2YJwNTUn5xPtX5Au3rQ7y7THEf57Wniwve1u4JhADAfKLyHGbRb9PV2xEvVEaXh3BkPXhZdeUDDeUKjoc",
  "key5": "UurBDLjSG6e35FinYCHALjco8jiahproG8isZiBdbAPrEpKaXqzjK7CBXr2WCzVXw2rAURh3FuphX6USPoK76hL",
  "key6": "2R8v8cotMd5xVT8hvnLTsgGas3N4SZmbPnKJJvZSBW3DSSSHSW2bE3oMQbaX2oTC7gLpc8CuAmPzmkwLeJsHz7ei",
  "key7": "UanSi2449LUo6tpGeGhMKWrpnehFxVFHXTah1fqndKRVMZHT2BQjcSLeV3bi1QiT4dKKkFtsDE4Yx8K8kVRJM6S",
  "key8": "wKjsijHaNNJTEzsidZbygsZ358AXVYJMCunHok7DkkxW1iRZyoVvyJvj474dcSaiqQDN8Lx756aL4h1hGizZjVN",
  "key9": "3znyWD68NpGfkjVKDpq8sXwbHtT9e35KU5M9FSeaV4VxBhtu4EXcPAmpAG8TYZw3D4FAEYeF7aXbje3rdBjihcA2",
  "key10": "26CFhEpCAeQrYBMyLaD1qU1vbA1xmePgb2tF9xLJbhLzdj6gpoNR4taDymNBJh5NBm1uqY9f2JA2nGXwav5S8E2F",
  "key11": "3iFQ1StNQUSzKNELhVvRkWD3JMjk7G9oDWWZY2HvSZ87v8kLvw7K1bYYNSqtyJ3yP8NFHhFv5YMuW11EyT5Reiyp",
  "key12": "4PpN7XPBrWw5VLHo9Soe9zSPAPrgnAQwtGgiyRVAp4cpdUuABzQ39xiNgkJ2inr8zyFd1izCq7XyhKHFYtoFGW8J",
  "key13": "3grM43VD2qzoEtDRP4oCcUGEZz5WvJEbsbef7MSEXnzFWnr1D479z2PhWNuMSsQq4dh74YFTrQo6f8Qcv8CMxBmz",
  "key14": "5QrLwyvVSuHFkRRqe9JemmkWvzH4JbzZjeCCErqmxxMWsqBGn8RN4tmBjYymPALved5msFRAjP1F1qjDDoGaUCQF",
  "key15": "wKtUb8Z4o8wGrjHNYxaSFNXJ45sHQHZeA3ou5JPSSZzXD2HqQB73dez5WgfB64gjxvjde5iPhpL1wt1TismC2Et",
  "key16": "SsKAx7SAUywt3t7umUebj1gCkSYooHmhveWr5pRpBJ2PrVnHhYdXYNh2FPmj76Nodou3x5q1fqnkP4wG8tBVCYA",
  "key17": "fAg59iATa4yTKzyw5SzYr7KVc4CS526EudHKShv49HJBHKhPmPhei6sRvisuLCHsxi6kdfcGaMBVW1PMgpdf4M9",
  "key18": "61BSfCFcsD2cz2JgSuonSX4RFrPMq4vi8kzBGgYVQE6s7d8G22W33c57cVR5fpArLtjzdTr9tVjvtdt2L7SAXHHA",
  "key19": "4fDbXZrZXAQjbDBYnnq5Ns2WCeqCPCSBfdDucRdZTXQtwtKPr5VpYHoVdkW9AGPmU5udMM2ZK7jZCLBirZmGBkui",
  "key20": "5TDb9zhmkEtxjwkPqHwBPy5uu1pABdxLLMw1uiYkZLVmE738M4WWHKJDrZGKB4bzKczKTtqunVhwNKeCqbKrhEQT",
  "key21": "zBTNvQpZNwZPYJa7pVKJgyLUTC655c2PPUhCZZ6QNkUhUseBRLrdL8oaFnmKTGHZEwP68ke3rbMmrkRMUfizsoc",
  "key22": "4S1R61CFvnT2CQ4aatPfr3KZBEmoiNtn6JJTzcxvTrknP6wo7Pi1k4A8mueNzGAmUiEqiip7PC9KuDxGjMibg7nP",
  "key23": "2J9irLHZ6c4YkEyL69hqpPEfnFSdMBCYWCVkkzNkkNvuvp7VQqYd6biHU8Kce1nqeN9PL9w4A9cbtGFWYCq1sQsd",
  "key24": "3xRRRLWezREx9hPqiddHdMnNET2j1vUGcaSEvsbeGCTqWcuERk2orADdc3QwQk8mta2NZ5BRavh6re153iMTxRe3",
  "key25": "2fHiYpRjpvFRA2f4cbQvmKiXLs4UEoGyba7syTsV9aY1sQ6HomGkDsKwbECGfD46Tw3HMJKqLb28Gayrw1wxQ8Lt",
  "key26": "4oHFBrhHLkqoLhEAq1qkeekjL7G14Pe9rSXkgJ6abep2a67YS6r47LRLhcwT9uPgoKF8mJVXNexa5cXdRibRP6Ez",
  "key27": "KXbXxkmEs6fJ9GrutP5GNWez7GP1EMLNZZ9Rswb2NriwW9rJTSVHvxTk9E6Kap5cpydZ1KueccTSEgiEtDKvQ82",
  "key28": "23VC2rQw9ruqyRvGmTjJ7zcgs6uGwFG7VqfrwkdaVDsqt73ZaEpXkUUhZb1Gc6g7qBmUPh2KePX7TKGGFFggwdie",
  "key29": "3Vrtda7aNfbwbT5C4M3hobskr8CJj1xRgEUMtFRhi3KEf3AwCtJTiVtzZs5vKpvP5rUfjgwpmabTax3HMafLfNui"
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
