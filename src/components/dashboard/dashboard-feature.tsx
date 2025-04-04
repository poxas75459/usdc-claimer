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
    "5hvKcLeWZy1LFgc26KSvJbYp8o4P3GNXURYmEWWRwVfJzQ4afyo8pAYUfYrXgz98ZRJbtQTvQLvv8Syz4sWG3C3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNfYsGQCWeXLdq1kwujbD43drJqMtxgabYjWJTq95Wa33UYcbZFarbysJJ7wDrPmSjwkKb379GkGtr9Jsbdb8F4",
  "key1": "YKuLXXuQTdKAGLi2SGS92WRqA1aa7obTqXnmQTjNrz4nXHMWFFGyjcMq1DDcu8W3PymuGQYiQ6tCnuFqjrz9eu1",
  "key2": "5QumqnpKyxCvLGqkxvgSjYpPY7odZLBUfdWnN5fNrEoEWuUW9QJNP3cwdrwchNEuX6zsHoYnWZWibZntGe3wP7dB",
  "key3": "qanaM3QxsQfSYTK3dTkRt5tDbG9UZUoSxsk5WAd4MkQ2eM1BMDT8mu2iXysA5ALsS4F3HufSzLB9UGYmibtgWt1",
  "key4": "hRt6rvjdP5VnuyteeyofSmMsniJKZ8R1TnQj3Km54SMS7kJX5i7dGE4dNoMHisxuaKRsvDeQhemZ1bQPbyAspSP",
  "key5": "5rUFGJubaoEi62QRgkgBxsx1wk5Bf82ry8XYSh67PsYRKT7vUqLEepvS7NufRExjuYkiAFqQuoE7DCCJ9vu8LsWs",
  "key6": "5SFiPRW5R5znf52NpxWDTzN2WWL616Z6fdScRSVPXga6cKTRidnbFxVCccxubd8xSe6yT2EtiMaE4ZbGvqfBxdZ9",
  "key7": "2pF5po8o1dL4Rno2Ufa4LhiQQSt7SBVvGrkjB8MBLP1HY6H9kxa5pSzqjmvuGWQ72p1XCtxJAZSzQFPZ2bFwZJSg",
  "key8": "5dwW49d8y3RmnyF9hSyw77vvJBwbWiCtKi73XWDh5BzqXK56oxC6ysE4w26vbpQG9sWZCkcjcyn8g3MRe9LuT2BU",
  "key9": "5k8C9gZH47VVFdSxEEUT1ibApxhSRNTDKsvVowAJpSGHbHjUHGiZNRHzgfQ8W7AKkAUi1JQRVwK1veZvvtKgWo6M",
  "key10": "3zqnAdWS2dWgZNC1Guqn2gYuhWo2i6sZ8AMAznZRjsAhDES4GhM13kFudRZCc9EtAo1NiumLkEB4dAZBXYn1Eiti",
  "key11": "4Vs4VnU4K7PwbrgaJmLcwpKq1yXRise8pqSRvFee7f4zETdUrJUC5yRt9eU9xzeuwKPtYeAW3qwegmGXx5LNA3NQ",
  "key12": "4aXsXQcDN2QUxdHDgYRDCtwJ7VGgeyCLkD4HghCezWj1afW8hRhn9zshR82N8TWSmDCYNxSu7yhnt2MYYpAd3bmu",
  "key13": "2m9X5MeB3ATCWioh5uVz4ZnCBVMsuSgmiWNitCzAyv2XvJCxbexnYji4UdKTD6FqJUtNdHYC6n3HUfikpSggbd1p",
  "key14": "2LVGR1zqvFpqvbYA3GurW9vrUkWJ1UuMPU4AdKfzipmrjnWTkTPQGNw2P1hRhECWXsXHzUfrJRjiT17W8us2otmu",
  "key15": "jHcjpCbxUWfqrMCigNPXYRUvqiVqS2Arhk2phaVisbceybc7MAeShDCNpYYQPbzZEt1dbc4j4HpE36Kq4qX38En",
  "key16": "LRxpHnCfnGXKkhDYxnDY4mbNsHquA5RmT56g2SZPc1VrCX1uk7qCQYBCPrwoPL7jaPqY81ffrB1reFjPaCo6Ptx",
  "key17": "4ugHkXqVmczoNsgnT9WRKXC8CcArthNinhVLgbnwdqucdsEPbLWBUgkCQuHzsn3ffb3PnNakSkpjgVWTMgVM8s46",
  "key18": "4HPDTGwUfxByte9P4LcZcTExas5YYTrURDVHPi8waoAxNdA4WmotoS2ncA1WyZWr6nqPkpJTCdQ3w6Y6G1qwbvH4",
  "key19": "Y1Wn7Hi7KVaNQhJKvXkGcHA2cM3Fsznfotxi7EMdcWMm2GC4Dcp5dFbAKv96ZyAXNajFUZ2kdSzEbJqKiuNKNny",
  "key20": "43qKAg8cKTDUJSgDX24JmTQU3Pfg2Bn6FtHknBQKs5Lk21dh9knPML865LJXP7kPuogv4DyGEH6M7M7DuhevLUyz",
  "key21": "5eg9gHqQQ4kNV7fk4jGtYH1xks3pRNGNrUTd6mJ2hoqsCSSGDv8gcVvBgPdp7kdVo5Vj9uNXT2VBXJEJ5Wmty4sp",
  "key22": "4emGCetUfk6qvwGcwMXQgsumqTt4qJRCRXEpeeaDevshGKfBxGXZWAxP9zJ7TiMmyvHiiS3gNSnrudAR4NoXedUS",
  "key23": "4DZpit8Wu6W29JXguKJe85zEviJaNsS9zjNwH76iHYmCRBSEZKLQ7ocN7CPrgn1AGoNf1N7HB9UAYpjdcvzNtZsK",
  "key24": "3xkjC6dHscohkbiydRuw8kBa6wYGf2QTbY4bK4C3xdQynBCZtdTKSC7YA73SV69ETRxZFJQ1cRFyCsRdWRUxNXDr",
  "key25": "ZQ2AegN8ysRGoNT7geeUJsrSwmbKMAZ6Tk93kXFPiDHyBCWsUnogVUQa5HAVcLYbWSXQ787TrtHcYYrQPG8yDKL",
  "key26": "5hnTUQmNXhmjeCdkWvRfibjfn2UzxT6mxaJ4sf6w9VRaaE4qmbMg667SkxTee6kPiYtZC6ehCy6MpsnLMBufMsnM",
  "key27": "5m9rmA8dRtpEhJgTNSMasGdSJrnHbq2mfTbSDmBZJi1gQiicLGRdwDwDurbEwYRmcwVgV5uQTcc2tMSyfYruGi53"
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
