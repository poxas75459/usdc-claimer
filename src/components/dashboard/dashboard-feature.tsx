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
    "2hGeeNeoHMUNSdYw6xXEic1rJbbTLzHRZrAzt6RUXBgKBrnP62aWyjtzyPfeypaPHZY1DtnBWPoCPFqq8Cifjwsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qCaABvSPY86XpfoHVtDELD6RWRaZJBcyFq3jEJZNshDRJGGCKpb6A2XwysRVnkjak8kjN6rtMoQbeEioM9SgDhp",
  "key1": "wfq7WAetTHkoKTGjUockPTwwZB5ejCrydPPBzjiGBnDDWAHDwWRteCVEcp5YAL443ykEsV5uUHjcRxqaSDiF28v",
  "key2": "2t3Ph5CMDx1eHzt98w5rQrzvFqu1NMau4tdveWgoWCf1m5Ymhg7Ns1U82XZKwu3JMsvNDZxDnYSitGXoHjAEEBHW",
  "key3": "2CH4aCDu794cHcPtfPcYH28PqWjULmPHD4eeitQ3ibFffC5Wgg3L3EtFwPR6wN74iiZadidFvYyZVHwAWoJEg1qu",
  "key4": "5esaHXru2tYH1e22KAfEmhdW33LUon2eysY5H9XkEAZCYrKbQh7VL27Y3AECk785vZ9j4V5jS9iG3DNWXdsNR7oF",
  "key5": "4g3W7WdLZUMXkYFXSSSiznfJcRUMuFeZnmcuw5TWf22hKEo3T2tse64kaQVx7oBsAnSZzRgvi6MvBU1tAKyA6bEx",
  "key6": "5ymdFqThFD7PRVwRmvVjrwzfTsNqEGe682PKzxv4Mv8YtmQWnnio6K4va9yTaGSFEPJw5nFCQDTciuNbtr8NwVvR",
  "key7": "5KnZo6bC9oPrZMP9J6Ks9GxBCQmMutE24uLEc2pDbaSyzq6oRyVPComhZH7kdASheNc8t8DRstBxe3zMYQHrsvM7",
  "key8": "5D1htiRxxJzyAr47TqAGZWYMPqXmW2N4rJW5jQNsP2JixvNiXio2prjtkwgCpTSzf8wCcZAhW9mbkZrDEhP1Lift",
  "key9": "35rNLiAZMerervpxCfn23LCk26tTariy4tLYqaC7kBdQ76fK2TpYF89qKwC6czW5xGJzJbUv5cYH1feSaxdYJZV9",
  "key10": "2LaQbDrchD8nYqqK9rNm4H9KbFbQ1UPp2A1RtDuEUpYAZ1Y9HkCcq4RDzEFEHtkYFVpQdpujRV4z2j3Bbo7wPtTp",
  "key11": "4NALmUYmf89DWCDKqHv1G4KCYDrk8vs7JGQezWjjW9eAKohVr98EwL7yrQK17HfwLjMBNDGjehFZwfLBBUPxsomZ",
  "key12": "3sQz9hWiFtLN6bhGCiTMhJ7XsKqbgPG5mZYB9e9RCKT4iS8qKoYkad1SZG2E2Y4zFj3zwFpNBovJEModYjiTUXCs",
  "key13": "35yquN57CavCWnUse4mTRd3CfaEV8zzNiNrh5FN6Q96V13Zpvb2Ei63uZhujZDi13WndP6Ppx3Q7rB7JeerEFHkq",
  "key14": "2orHAGE7ZUmd76Gv1RD1uAEdgXwVni9K8CJRaT1HWNzvAnDFDpDhwFGny3dQirbzSXd62aHPku8wN7Ed9PDQg1p2",
  "key15": "2BSMHRbyXjVYfgKv9cdH5Gicbb56B8t8zZU53wDcjqvcXPW7ZDAhDDx73XiMShipJT867DqU6VANBshjLGmKH9nu",
  "key16": "5Q2Kf9mBCEa1zARWivNz4rNaC5ocsrNqQN5hhPUBuc3E7yVmGyKEYF8vGT7YCutZjkkqrYz3B2SnJewBjdXkUYSN",
  "key17": "63zG1tAz1zKxdo1AhYFT6i8n8t2xmekn57eBYVchgfmqjYMr9ZtoQDuD33SA1McmNPFEfAU7EkDmYia9FrPkpqWm",
  "key18": "3khWActL2HCKds2QpHvKn3F4Qo7RTh4SMYr2ytLQe5Hcw6Dzb6akHurYzxk3oHEjHJxdmgovfnoVYVRMJbHeDu3C",
  "key19": "4HscXXfXydV48ePQtF3QBBTYhi2TKVxpXWkpcmhnArdZifhuXuCZVBwHngo5esd8u2mnL2BAeKH4QYagDCBWLgRB",
  "key20": "2JxqtuunCpNXAVngW3dxPu36zqFyMeWHC2jZ2tcf2DyudUob7whJHbymqSSW83fKimMvEN7Dxq4MGNb68GFPGGn4",
  "key21": "4v9tYLmZfX9CnNdxd3cs3etEjyJvvc2WUud5aSEa2kBMTiBakynmpmSFBrQRDJAMArLeqexYbd9KFwneTNahxG1p",
  "key22": "QF44GbLBVj2N97a51suJQzfYEgmP6k2WNiKcPHrrrPnGb8nB685ZQ4iEkj6DBTx8DRPogKm6kAGWbpSg15q3tYz",
  "key23": "4FugNzF8jbUwdtHUUdUTvAKB4yoLDy43zZTgPywnsoCyx48QncPwCuxJbumkApyTKcMr1MVLUVxt1xLbgPYWf363",
  "key24": "3z1WHy3qk6J2Fne1HwUS4nBESanrUqwzdb6aLPMBExkQtC31EtrJ8YxkufiLZNnHNSu3iz4sd6smp3MMrjTUDawP",
  "key25": "f5W74pijogpwmk7fjyNHhqxW7JyUmYaxT3Bjbjd8trST5YDfMPvL9xj2QA8W6aKVxA6WwjYpsQ7LmwjTCH2HDEn",
  "key26": "2oDaX4Age1nbBcGz3MxjgP9HfM9DmJQbfHC8PechoDNg5KUKgzyznbemGHvy2VFNLH542agFEvRqRg73xVi95P1",
  "key27": "B1GKXQMeuJAc2otT7XHTWZeyX8pozSsJYiX9MJNgtFaGoTDUTJQZvabJCGZq6PYVr9DcoHTPR5WvHiTyV7FQ4Nq"
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
