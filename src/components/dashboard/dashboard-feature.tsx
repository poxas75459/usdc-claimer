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
    "3fXhfT8wUh4n7SzRVxvGCskFLJHrmDwgMTb9paiTaL9eyL6h471etgAHr3B6ZscxcVoU9DPKPMBB2kGgyWsjKWhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3krTQdk8TeKcTnmN7Uee4avvAzdezYiSyeUK3PcccUHJbjKN9QhepQBPpKE7ij5ujXnfrMNA33gMAZiEwgFHMc5v",
  "key1": "282Fp2h3f4GXdiMYWJTEoda8BuJ4V2oYs6XP2KW3JRTeJzfaQk2N7aM7ZLsG82siUhMcwXdNrjkJvn52izfZsP7u",
  "key2": "szEs3H822aSLWVe3NXq5qhp68NEDZc5VTkqMY3yYkr77FvyLNJWb4dFkT21rAUFUfdjhmdKyQkgAzXHiv1TBevL",
  "key3": "3gPDCRU2RuNjtUqRUGz76baKqoQft7Yi3fM16hcXULzwM4DhGn8gGyLiPfLiWkwdMxeVpirtoLt5yGAmaVeuHpqW",
  "key4": "2MosMyaiHHJiihNR5vxdNXpMfYckjDjiiBPNG7esPJx6ufHJimjtwvTGwq14kiD2Pw4ddRVoKewN9AQHdYjp5Pna",
  "key5": "4bGVAnPmeWa8KfGiLoYxsHd8uG1vyVSY16QWTathTGhFWAMf9iUYC6UUsnz8RXhHUjVjHtnPMCgoCr7uohcAryJy",
  "key6": "52XV8vSKxorS1RBueoeoWtsb3T92V3CoMpivvyam32wV1JeJuLG7gNZyGkJ8Cs7HW99Ea5qXSLZ4fJAVEUdnbuzR",
  "key7": "GoKRUqE6r8GdRaDVPFiZp121AfU43KYYN8VvPY89wEtd1HGfuXseZKejcq1BxyjoeV7T5mMFFbRG7R6pnrV8i5r",
  "key8": "mBRL4upd4QwwkFrchqaHi32i7MNCCSaMu8aUHTDavUZt8ehyZ7Q14qyAUxb49J3Khx1BJCYt6mqLgR16o5AY1rg",
  "key9": "2Mk8F71sMVkGZuFbS7dYvMUoum5ZVsLJ15rgAqHQ7kr5FV7sWXFEvdUmuGGnx1QL6uTpzpDYJprsUTaXp7DWhDV",
  "key10": "4oe6h7Gm6Bzm2AnsTvQ4HxuZLHK4sQqDRduYGDhpPcV91jcGmQYeJXmDRGUpYHrjfTAhjrcJzWRX6LsBako249vM",
  "key11": "66TMQipxN6BmtUY3noieoVkBEG5BZRHHbiHeWvEN15ZsDqD6YiHu1RSbENqT3PpP9WCcFPtmxevYr6GzeETJWaRk",
  "key12": "onec99eRTm2RwmkDi44p8ThpcChXqSPnmmAgMQCBqsn3oPdvxs6ZcSz1MggEY9JMPoLZvLhFPenU7BzPHWtYDVc",
  "key13": "2nLejmfi2MRpEbvrUARXijVfNxZxmmbhF5X5rEyjJCfvJRY5XQ83VnPbPRV3aG42vPkeMCWAKnQ2GnYPs3pmkxSd",
  "key14": "4n2aPtqAeNGWXnsB5Th3SzwEqYEqruT8nczPqLuXTQoy7rue73JGDNVtUUPibVBexd3RFXSVzQLsweYZkurhFk2p",
  "key15": "4qjrrCw8T6mYWZVMwqy2WPeEkt9yu2C97vVmZntQUWwpE8icUv6GzPgQ6iWLj6NSmtLpn382qu1DkaFswfBcrH3h",
  "key16": "zQ5emiBd34KE9uzcLN4EksRz7HGSBDEmUbfezqwp3iD45AJ7U2uRap8ChkNhGybXir8Cv1GwHHqF6jeRsy2bTEC",
  "key17": "4EyTJgfT8huwmn1G3t5V2JoHZNNQgQ2JSswJThvaEXhAMq74PyeLBncgRNDqH6V87paWukLvbXeFTYdQes4kSscJ",
  "key18": "ZkT5xD2wPmGk9YZBnBnjg3mHdi24Nw4EHGkBSHHKrQDS4fVxMnYjGZuakJAQbssFpRadRMupru99LgY2pjgWz1D",
  "key19": "YkdBr5wkQvHfjXyV9Ycjh5NQL4E9Hvyk142meVMeDuNBMiLZw4AP9epzsmKkVn8vjBMweudbqBYcn1PyC3rnDLb",
  "key20": "dHjCf4CStRCFM4oVHeaPNYUdjV4oj2J14nDj4mr347proFXgAmNk7JwEx5D2fCaD2ky41RCmWwsGzEpN2EzfS7L",
  "key21": "26Zcvo7jLPmPPuikVY3MMW9YWYjSfrsG2cjUYtmTnAHR98uspLronBczErvqCmrehKK5WHB4v5otpcveMfU3Y7Bn",
  "key22": "3mWapisdq3LUC5NQHZpwkBZ4DvN8MmKX3WvpTmHYuEHYSgAf6qDm41mTVYuCeU15t2STSE5jRD5AMpoFx41UfRdV",
  "key23": "4qNVCPNQ3jM6dXR75EJi9s2BPZgunvhZsMb7rLRhBfGU2ndgnHm6LkJ4ejBvLw9fTBYR2Pt3fGZpE5aPCnVxrWjb",
  "key24": "21acK5vMZn8KEE7AMunENWYK1StFGRTFDwLp7aPK1tAYPC1GMKK1sLqyf1SovKPAyS7zz2bVJxFaWQfoiHAU6zKc",
  "key25": "4UvkKoyTxFAcceKFkvWbGCMqd5WWCvG8hvQXz2JFQXoBT77AkLaS6Waz3XycPXHEKR3HtN2pGciaP9ZWyR4gai2v",
  "key26": "2996cv9eywmu5ps9EB8MBpzZuFYsdWTJmrUHnBBZpZDsiiTEKZczKXtp7Z2Mc7MP6TYRSXUUaMacJsE9tPPM9s41",
  "key27": "dWmFvxbyEQgHsEAArWyq3WPQhLWsaqS4sgRfXqXnoo1x1QtATVir4iPX8UyPtqBB2Mv79RyZRSqzFAhax4MiHCx",
  "key28": "3auX12TsHx7GifHhbVc66HRqKcBX3arnKq6tvNb92LnXfWeAsivSQ1vyefCtTwhByYssGhqtfEkS9Aq5njrP23ym"
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
