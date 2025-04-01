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
    "4GSPxUyUwxMe4uNoEaSxJPUbyc1YhAg99AmZc2y9L2Pt9idU8NCRk8pS48QKZDREs7eREAxgaeKCmcvgjhZru6JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuSkQae8gBWc5Nc7jq542tbm2FetYdZCzzkYyXoRhQBgHBxfquovhhMoijNZsVNXUBwd6b9eQGv1kNoq9SAEQY2",
  "key1": "5UWJ5nDQ9wefGHXBV3jGq2HCQtYsYX23pRhZ271pVmucMgZCfD4GjCsejwzLYfm7BU69uLR3iLoTVPoB7FKYqV52",
  "key2": "27uAihKHzo6SDyxsGykxSY25mG5mrnhhS48FwiNQpwi8m9DQ3X75b4jtncbDjnsNSpAui13hKVRkuktdXCPuhxAz",
  "key3": "3D4hxqkTHCixFw1xGNsE6KJHRGLxXNm5cM1WUrCKeKHb8yMVuqikSGXFo6Uheq46Dwg2xwpgDENjPZYGcBjGbaPS",
  "key4": "5SUp9P7nLAaYuQpvcnuZgLm1ADAL5eY6ZGG72oD8bm44xxsptvZ6mW2MAck4gpTrbjDQX8QQ7xmmVD9agKGcpRnr",
  "key5": "4Ndg4heCjpA2zqF3WxNLvQNorf4TB7snTsVHYb3oiYByjbEDviCwGXpXF3reMEeMp2wPkhRvGX1vfLcAyhgVHo2U",
  "key6": "zLC2ckLgXMdBQajXYZtq1bfsVtsDtD2smBubusdvhhTwi82Qwj5mHk3kbkBmsU8W1r2P3iWC8Q4m7cpCUrmCMea",
  "key7": "3f3jyk2N6STHwoR5c69zNibB4fsFdNyy5G5iuFuVsrL5FaJuTaDtkxccQakXbbpamognucKqbVJBXRCpmd1dgs7m",
  "key8": "3chkwDyio6BSPUfpqWc6uteWitGTTSEUAjPwc5ujzZYn6aoFxPqbQMbsdkwJuWYiaGQAtQAz4CZzKCMTVEYpx6fq",
  "key9": "2Wn8H4x9zoe98q6DPc5PsczGWeS1smD33Daes4U36riK8kHEQf4VwGTU3oYdwS6bvoP1NyGoidWWnzMJuEUz3Mo4",
  "key10": "HtvJJbxa1eevztJXnAFSNAsT79vMCwSrHvsj4Awa3P3fGoCJrXM86iQEUBBoMCXSPEFQPw91LYZDh1sSR2dZmak",
  "key11": "2rdbPDQUpzCFdbQMpVrvKfjk5QQq4idh68SvPcrwZbRarW9dBkNiedHKih33r53kB6nxtp7Kk7G1dJcu5yhVmjHR",
  "key12": "2oJGY7TommMy2NXjt5rwiATtb3AkkT1awCQaJEDECMyjBZ3GmCnQLkTtbyVHeEjssQmUUjtA5kjtKn3bBLYFzZjg",
  "key13": "2Pb4e4QvT2SG89ziqmr22uYyLtNnhmsB9PhJLm6i2ymNP8XqmZCMgPteKJJ3gR1F2rvrawWmV5N31qGqwoyteh1v",
  "key14": "5zdtTW58R1RHP17riQLHY1WjZdL5MtVibtcdHAbQNfDCN12HrPLScLUv39Gdj1kYrK3N1nccbM2PJ66UZkyMUrJa",
  "key15": "2KxdLFfE1bmnQBYHn4C4q5EadcCTLkwuFNBXmRSYipgTjo2dEqo4qJp2dE3gcP1MjUPUkKSnExetKpgEzyU39c63",
  "key16": "48Mn4HSigC76pwQTU3LxdXzNcbXVyqEhn5FtamEXAnupowGoEWp7CmijR8rimzyE3r4RpLMhhYTNbNKHjZE2KvJB",
  "key17": "35DcscNmECZ5GJJ783rc66t3qLPED9KBWcWXodsnuqgzjcspN72z4umNYBqdvWgbCs32LzGBNrDTdX9SSh5ydQAf",
  "key18": "UfMZEMHKiB28HpRaGMq6WD9ccsCbw2KiKWW1nouftVSUFrLPaAAAgGo4kn35QRMqGJ3bCybKYkx3XgvcBSFZvcW",
  "key19": "3ScjBD4H8PEAEWEq7nNDpiMDPeYpzha6P3aZcJ2rRNBvg3hA6u8M5VV4XhdYf4nNgqTrXAeKENakZKmfPpHsXceN",
  "key20": "3nMmNVKGL2WruwArhLT3UJvRe6NcvngHrmTKJ41e8vrftoks7Zk5J1UPXdmHkQphXSpwuJqm3ETPUGNcFSengQpP",
  "key21": "2Zuw9j3pmQTR5CGC1XkwA1BkfhdWBsTzamLYiB9KVQ1PSqpoqayoHBpXmCzaxshC4XknPbsyCS5VkVfRXLDQ2hzf",
  "key22": "5PNXGnqMu92iiWai5yrWaF2oqjzoo8XEPG2tJ6ZR6BJPGdQGWDDpQsCxSLEe8o8qmgCzqz51jaMEpzentEKmPhKp",
  "key23": "66mWraDeaegHxXgXq1Phd89ShMtvwvU9F1xhuBuYNiv5Qdiv5qjM3PFumCBLKNgZpd7NntXs5oJrXey7DvnBfFGR",
  "key24": "2UZXX8LpiYpAB6BqMNqJyMTEY7TxMuCwPC1jHhswp1GjkmYg8gPVAKXPhFbmjZDBCGpyLDZX6RQSvEMr7Qi5Pm3A",
  "key25": "4MTG8X7c3JsRPYP1QZdtG5SSEVemTtTXig3bcw1KLytKWu3tWfMrAy4JhNtwMb92C5esvP5QoJSeH7HQerRM6dt2"
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
