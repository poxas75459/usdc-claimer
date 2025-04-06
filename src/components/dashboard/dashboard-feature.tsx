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
    "2Q56BVGEQLQ1Ydn1zKypUbiZdg8LLpSA58AU1sLhScnJM8h4gToc5SJ2S9DbnCxKFX621N8FHRcQMPAyEj4VNvGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AiLLhb2LJWsWVFETxA4NqUWC5E35SRUNe4Px1EcdWVcYFyJGr8yyGdddiK86wYyqT2sU5f4Y2m8KB1wnfw2YYka",
  "key1": "3DUEaE73UVBKSw62mg89mvpH2xoWf5CerM9YXFtmGpivmmf1aL6S3ch9midhekFDdgEd6VosdqsVhQpuPhRUqCvd",
  "key2": "36P6mzRsFZSH9Z5pQsCYbt1PCD2iZSxjqu1y1LsePWTziKAK1DaC9uPLVqjJyywe1cfrVHKgoyiw2PeZDgfvPTGi",
  "key3": "4NSykvgtnXXwtSbCtpd34ev87HaAqRzssUArLNCkMQLLWozPhJy6S77ruiAq5y6hV4LBYNk7VB6yj8J3EXrLpMTJ",
  "key4": "2tj5gkCmXV3HRCdPCkyP86AJ5QJm3qLzERHQCKU7fAtN9cUCDxzXg1TYyAs9Rhk5ACbXWDREGSxZ37azEDzcsU7v",
  "key5": "2rf4sqA3FvoxG5oQg1orEsFP2oh367ibahYySD9FnTaB3wZeffgmVR5EcMBkqe6tCpxAhyBSL9XwSDYWNFMmDFbi",
  "key6": "27zzxQfApYJpsYUi4AtPAp8AVRKzraLYm2baL3rx2KnHDt23aTfzsMyBuVNUCSfWexEw4UenoEc2uTMQ7UxZXSBf",
  "key7": "33foeiWFnrBJSGVW7sdU74txyiXwg9bjoTYSjoNUyPdq27TnqCEB1H925CETnfRC4dLFYTGoXmnZcdEqj1BGUQBi",
  "key8": "6xuMcyn2Eps6RQFR7m6ipJ58pKKyCST9EydBxEacUSuozavnScpcWw3vdpZwvrxounNWnnNrBu6v9PPqHCf1WCa",
  "key9": "38mR1tvtqZgeuzbFaeaKEsHa3DpvZ1pQomzpkT2HNwiwrAurT9sGSmdjQhRPPxrR8Dt8RUv2KuKDne4GRiPvxDDH",
  "key10": "4LM725qMcu74mi6LkMU9RzowRdLZHT7M9P8XrcvsGm4ayhevEzSKFd9nnAWaqoiMq3kZKZgc422FpKcYLQ1bHuHh",
  "key11": "568SHKMUmPtP3fXovAuQ7mJZU8tZ6XLAxydTcDBQ29KjAB9gpuKo2nK5TWWqBcGuw9ViCCs1d6Up83MXh9akRA4P",
  "key12": "fmxFtxvnqU46bp8C2feuzExjTLJhM4iPkY6AGHbBE6p5EBrajykNscqwzm5Ks72QRHvb1XSDXLomUvrxaaQ8hPq",
  "key13": "HmxtFE7U6PKDMSZxYRvqBYDB7j36Zvoq2KkTRSz6uy9Wt8wNBG55oEiu2ScTmtFkSegVdEiJ8eBpqmEJn4Jrd6Q",
  "key14": "Mzrav86fnqRYM171XoSfpzRnbUsJQaEBLpaH3HEHW1bSzoh4oVgSoQbXmeKuQ58gsdZHVt3jirQpAhcC1o4CcT7",
  "key15": "zSbw6yzsX84kYiN3kvveFpSHLaF7Jz34s4NwENiHveNpMNF6bRQetZ4Pkqu6CnHy2LuJV38KKTeAsHGhpgJ1j7G",
  "key16": "5KyqQzhqrP5DaD1qACdUM4xFmEp6K4xY4cGWiEbdbwKq3abBgUseJFTJa6T7gWNYXUKto7qbgUu7pq9BwsE47US6",
  "key17": "2yLer291AhXa6SqPhhzLB5bndjfWQMrb8v9tmye3RZmFBMtfqYa75NgdfbDKWhXXAWbNx3aYcQF5RWz6fvpDbGmN",
  "key18": "bCFFt6SEb2X1rJ6YxUsi2gDUnHEcusydNbsbHwB7dFLJqUQV88h7eRCoaZV5ozNgTW2jbWEf2xVDtRHxZQUR9c9",
  "key19": "5R3gbLLDks3M4VHFgnzpnHXXsG3so8MutZjqDNMcVqTFTw4gWzk6LqPHgGJEWScUdUHsRTSAyqyfkWfZ1eLfm7Cx",
  "key20": "24WRoqLv8pwx5LYaftxTMHP4UecnRTL1P7N7iu1ZQRV7QA4N7LQqxYEaS5qf1HpLwF9iD7Hbubjwn7zSBsrF3Z12",
  "key21": "2bjBJNgKuNcbWyhhPyXkwzUz19U57M4TJYHoMphF5f1GwC7DMahWdL7Hz6WtWuG4S5twaqXEigcLtHuGsoqDX7bM",
  "key22": "3aj6eRyun6Y2k5ZDy1zFvKeV3QqQuHbLZZggxooZ3LUDifJb5Qzy3MytKzDVe5BLv9htDjHBA5CyiJXAZNbUHop5",
  "key23": "2z88AFFxnrLcJ6RnsDM7kHpnuC8cRPbhvwQkSy76Cixgm3bK3hVy6ngFiKDDsRSSSyipYJhG8dD4mNXm4n61MXY5",
  "key24": "3TVrs15GuZTop8KDEZf5AGfnwxBhwznrgdNgACSbWeiESxB4sPG4CyKgUDnVu3iAqNvxzKwcss8mhUnL4znX6Xzi"
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
