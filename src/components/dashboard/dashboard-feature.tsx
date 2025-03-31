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
    "YPWmgfjTed9vKCqqHQbgCKnfFXowfLcM657dcF8cr3ueugSsDSxft7WEAKmE2N5LpAZr2Nd1DGzJ6QLdRTZsAfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUuVrbr6tNytUgZA7s98pijR8kCbyRqyLt7XBJHpj4NkZpqb1X6h861tNmWUwriA1wxgBB9GbKeK9C5vPSZQ2Jp",
  "key1": "4oEkb7u2TgoZUBu7TCDN1wac4nkmhauveNS7TXwosZ8XU3D18TFEXk2K8BTVAj7SKZFBcTg4eMsRPrgBmTR8HAZw",
  "key2": "BbtBbqHEwx9nhYt1fqyJbMFpPeosHhYwnQxcdQN4YE9PRx8ZFYswqeaQhuTTe8QxJNPZ59N2tzenvAhVgmpLDJV",
  "key3": "4Fi8SynKC3y1yiqYBaEZDkExQ9Kdp72ce5fvuMnTqQjxyoXPKsFQpt9g6vfKut5ZE5ymkGRAMcc1NR5HfqHZSXdM",
  "key4": "3EqeCVLQ9sEHLhoaHJMUF6FP5hRSxsd1UiWpbR4iRW3b1VrQzct9CJvEdre41LNuLuu9B2LuDSkgJdBAaqpG4rgU",
  "key5": "ZE3Do9KwLSX1zPiSxuqsNzVAWLa9JCzT1UWajnyMuBod1NdHjk6GJeAvX62cDEAEyh7MXY22oaNZsSghgSzuFzW",
  "key6": "65Q5VcAoMkqayjpJvB2QLbJmh4aLEYNFzyZow4Ef8GVZ6VA9VpEaZRLyyjPJ7bo77znS2GfYGpPiUpQDCN5Q9HfC",
  "key7": "3ahxrbH2zn1KRizEZCxq9LXJ1MTvc9LTee8kRfyhcBHZPB4NW1aLcsmmZvb6xJSphTkhzBrCSqLCThpn9b1ZgbCT",
  "key8": "5JGuH57VoYPZFKxycRd8wLkVhvwgNDcfiEQhpypYFkP36QBW4KQCC9ME7bB2MNy6NPsiAVypPovav8kaBYb6LFr1",
  "key9": "2wSSJgAGy1T7hfKNmkFStw7RU6ABJpaRda7QJZNGc8YY7exTiKGEDW1ZPSrFKYqKNgGGnd2xNmFpiMvWuXsh9WBZ",
  "key10": "5rqLBwJmbK11RV9oCtx9JjhAwdFXjgGVxGnFTp1xUWJq3mTTexQuvxVrgza33TwBLUVrVZKhPoV6xTLH2U59gBJw",
  "key11": "5RJcQBq9iSzdWp3drpRZSNubbWt79wkwuyc8KXzVVs8SLT6hpnnfC1WCgXsPaRdpLhaj3a3yYVuJ4nruJHhwiaQM",
  "key12": "Zhj2TyNu46LFMvFtKTJ52daqh4oSc1B9MYdkELRthnxAt8ExSAYWFVnCyFEQdQnmKwa9RntDwfMfJBPe3hfMqPd",
  "key13": "515FcHE5jJoZsMctUw1tD1CUFW5tyrZDPAQGJCuURYm32hSKWZc4xCjjyG1BPNjAebQrnMaSZoFp2NB252v22aS9",
  "key14": "35XeeZt5xASngz8Cg1QqMkZAuYHBH4KkBoq6ekG8BF6f1LqinstB2HAsRCkxZMNAa2g7teTe4UnMo4rUXs51N3Mj",
  "key15": "2oquQXEwZ71qvcs4mJVM4JBpQCE4hTV17pom1Lhn3upshRBtk4bNUCLeUF5aen83mkgEyzQz5dF2PPGEAVpvJWsN",
  "key16": "5rJfjPg4A7WgLXp1V4Ebad4cvetVeKrgJCEPYNqzvpupTsEsZXfVwpoA6JRJCn2FBxRQRVpnWLhXNCixiWr2TSRa",
  "key17": "45qpiv6JgDwhHs8AhMNJBvwTd2oAHUHpGuvrbKNbdeFvasmgawz4yzB5CEquYbChym64SG4mQBUC3HKnjNK6n96o",
  "key18": "4eLQXW3qEjCQN9uZuBCdguPo68FrnUA32W3BF4CGEzmuJZdQuK1HNAFaENhKm2TPq8NQ7jvRnQNd7u8R6jx2oaZn",
  "key19": "3SweKEPfGMC93hjk7KLkQTDK6ByNUEduJM6ZmYBpjTTGmJqCaAwmqhhynycfyYtnQhD1MqNxDnGbvU7N4SK6ezSQ",
  "key20": "3Xvbd5hszP8ZtHDNyt2zA5Z239GaYTbTgLcRaxLSwygrFEaEh5DKGJJK5aEwXwfM5yKD2fKS3Z46eFnZzUx6BMpM",
  "key21": "5qWd1Wn3mw8XcPcu7PTJeJpJg52u1SrLrnohaRJKUBo2Nt5jTVwE4BtCihbJvk8HJZX947XvJFvMmcEFTnewLkuQ",
  "key22": "38z3r2HJUXSUSKiShtuiQt6vfznKQkLUYqZiybxoJ8mPBgGwqLZ5zSSJDDYERcVe6BXibGW7jMs2MDFk8pELxyyA",
  "key23": "2pfCYDyggWqkRjLu2ZDi2SYG5kgr9vAvaRRyoSN3d1jZSeQ6YHMHR8yYUWStmqP7swKsTeK6RyChiaezJ3D536pH",
  "key24": "3CkwPHgptzHdcUwRTSstomeWC43ePkJYBse9H52Aj9C44ajgFZyDdxQxsTqXpmGVmiWcEwjLneSS87knPnZth5u2",
  "key25": "3ob8Wo3BJ9pMUPsKu1rF2JpbH4q7NmqfQC1BNnH18NczdBFvpzXN1x3T6oy1PqCStkvBDH3Y9VdHoUzLHaXAooVw",
  "key26": "5JqHY8B2XqNjDNJFfW5XbEeSr6FKbeZkgbqmiQVStJjL17gVX5JDnvGiBDDHtYR9ZJyZieduVEe3SMgxsFRYXkkH",
  "key27": "4cxxPhcVtkWnYBCVAswEgzUw3rVjQkwiybcvZoP8ZcfZTTyNGwPURfFVWXbiHuQrWCBZ6MjpmNs1Eo2btuszzUzA",
  "key28": "2fYzVTnKKmvjSTjASC9TAG7hdyMRjk3Yw77L5RkPnqE7D2pnSWU2GqBhJ9xFEq3t3675KYhDyH8dGgk15eu8idtc",
  "key29": "4EDY4uh4sQ7656dEtXRpa2hgiBD39PbB7nAAmVxfJNK9QsnaRFsxFGbYHqegWYEzHwd32vKVTFVMMEZ9VCfKKpP8",
  "key30": "2BQeoLvf3j51GyQHwqTNzgZpcV9EA3vUTWfh5uJTaDdwDZUyo6noeYjdbePLPWUEqT1bMcaNRMc4jnnzsFcXU87M",
  "key31": "25q2b3mtxGudJKDPTMzUPnMNssPQ1QuVdmswXybeAut5F7zy6enqNSQRmuoARNZDccC2eKzRS43AroFeBtqN6Zqk",
  "key32": "aBKEbD3EpdU4HgCHH3dYLra18BqcHhk3xvmBwBsB2bHUz4PvKkcYMowF7PsKXfxHoTsJ3Z1G3LjJSu2fmfN1Xbp",
  "key33": "5W1CL3QUGryR8Ga11bmBHRc85Qah3wZcEW4yfoYYRNzBku1HnrdszcLtM9RrJGk2GXBnd3iQ2Jg9ggLVCY1XLyWa",
  "key34": "48KGAxoknvyfMf5PbQguNVd9s8eTPK4TcgPzs2osUuqgo5DELshvLFis6iawEBGBaE3ReFWa1rmHcb6G2hqxtXLh"
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
