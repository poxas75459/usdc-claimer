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
    "3YzhmRJFNJda2RmnK65oS2BfsCGU1TaBvEk7rPBfYBvsE6ivqXhfPLcsnhy8P4k6rQ1vZHw1DQet7uWN6BDo3XmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L9qBkT8EQPKrAeLSripNq26fkG9Qu5Jy89xiZfnB51wbY9ECqGdgX8QTy7nV3PJHMPq12qy3No6H8ygHagBKaZA",
  "key1": "2NFdZB7aFZQeYrJkmjqYcuaZYoihAJmMi9tWh4ZVWzzLsCgxF43MN8zLZrF7mC2Ua6zWdutMgaRW5E1TnH4Rbec7",
  "key2": "57b3zQoYYXaUTLEtc49kdY2qCh2HtH15RTsEXe3osdbUhqaREFm9MzMypcZaWn87N3Pg5CduB2wFQvC4XK1k97mu",
  "key3": "24o5crorxiHdvvMKM4iVsBbXq1UybmwvC5CPPQoerp9RwYgddFBye8eQji2nfjxypF4WHkSdG3QynGJgan2uhMXA",
  "key4": "5bXhZGJzUVQQrDL9tQZVFb3r9XorYkHg2ER6RawTVCAmJFxZSCoLszdYegqwgW4AP94MQUegtVboGSEuy87tqHXd",
  "key5": "5nBC9zvnWXFwnriRgyhkvXPHKpf9EUFkWAjyrRvuCp23LKctRQL7ndF1ENKp42dr6wipRRFqQviGurGjQdpi8Vpx",
  "key6": "4MB9nKpzQ7s7aXdEUXiGAKJoL1tuicqQGFeMXJ5fFvV5HCcZ9KPJz6FCRDdX2wFDZBB5G7SoEkWwRZhu5LpcVYgi",
  "key7": "3UrbkULJEbgScHw1X4ZXtgfyo1cCws8sXFvtLCXijLnyY6UxMrBiYNZ7RquQpuSPNx59UwJ4XVHxa1i3zBBqatyD",
  "key8": "2H4RWAgzJ9FhYjpsfvmdKQ6dA5PRV9ukWCYmX7rcRnbHDSkyyCfrDzMxvLXqh4MRexExzxDPxgiuK1wjLx1RBkze",
  "key9": "3fEGLbopeu3XKE9yiK65MDMeU7xWz2NSEoTWNAoZeXX8uCf984haxu19C3G8drfhVBSNEC7WHe7ReZjoZAoFvg3k",
  "key10": "yLfYbF26fznozq7jj62BrJ2c4Cw7ACBWkAsRtYqKXKQv7qmEeLxgHsYdrSS5NfoUDZSqMUKUcek1S99QwhVBPT7",
  "key11": "44ra5yTL8s6RK6pBfkZSC59JbhyWR9CeFMsy5cBkMmYgf6aGjWQ2i4FywSmo2Ryipj3RzfnnUznPqmndbREKZ36Q",
  "key12": "4EpK6Uv9gGbhL3RwZAWuFtnjtenD44Sg7H3e3LqMKTArqNYZoPDRs4YjgWGsTMwegWknCFVSg9hRfW4smPhQUTxi",
  "key13": "4sCeQxFFv8SKvTBdthG37uusXkt9uNKGT6x9g5TZN8nLEYDsboMVxsXQA3eSojKKH7uUk9yoZw5gQ6VmHq469Fne",
  "key14": "5CjfG2acATCkK7j7GU6V6MM4LwCV7rnqdB27SmFTtAELk6pMe7hUfpVEEtc9U4iXZJoa7iT15Rsa4YrcUaa9yqpY",
  "key15": "5gY6bik1HjGAG4tk6XY2jFVi7KFe5CY3CKhK17rxmPgLaJ9ArckSNygUh9RYyvAvTUgficmuhEyXfozYdDdHtB36",
  "key16": "2u2WHsj7gu3RVwvEinASbay3TgeQtuRMqBo82yaLwRtf31mWLvtcLicHDG4B5x6Eobt7nQUrQwM3zt77KfhtBBSE",
  "key17": "2dHo46fFUeWvwgu4Ao6qW1Mx8qU7CG4H2p67qonXPu6R1x8zyjfeqpwx2p16xwnVW5hpMLgvSnY7Y1zDigN92iA7",
  "key18": "3r1Pm4Nbk4Et1cqWPf67nZQHE4exSuC7MSGE6A84vJ61q5VqcHL9cirW1VoWDcsuBQmWJJ3HnZhwsbDEH2ZXGHU1",
  "key19": "45ZHtx29gqNctBjeQ35TamNfb3PinqpHMk36crDf5cwxy3ujMzndhuH7ca2jrFQQhQMD5uafkMCY1TnzxmrRbjrE",
  "key20": "2koicK6TvQzdpYm7J15ayfhsaDos7P6PYXYra67tUWmCN7DDPXnTovhtcHnYws2vSoUuVQZK6eoJ1L9xBBmPG7bY",
  "key21": "22LaJDsGuaQc291p9xjGCxM9ESgyWBFzNHZCKRMWhr8q7c5k5cYqEYpuLmEwX7zdzBMJqFAVYfJYX6qutCjSQ9oL",
  "key22": "2uXUw6HDQmQ7tCouSyg94PoyUCVb3DEjpkApyyf1KvbLzU13tyHNRzefhqnQfXix6HGH5gt7wQM9G3oBrWZUkHCf",
  "key23": "3VEw3NwPe7UatSW9zkMb1AoktAVPRoRoE2oqRsiu6jPAHHyeh9YFvj6sQsGY7bVFXwu4Yo5jzktmH3o3ERgr4z26",
  "key24": "3YNVBf1ytPfQVMejxrDPPdnLi6z7Nm3bbDsZXW1QzJCfjTRMyhu9KdsfkZrwtEfxmL8cjv77Kq4SMB3cb5nbZHT1",
  "key25": "35c8WkCTvUGqVNcLw71W6GJhTexa5PFzdhKGgtiHDShF3tzPPGTXFTU4TdDPiQaB2WdHX6bQqBETNGbJdBYAzZrV",
  "key26": "275wF47tGSNXYRH5rgSRBcydst5Z9JD7zG2CpMgbV8F2CXJuiV53C4r9PUqRQaXMtF3jfY5zWVCNMvHury7yRaNV"
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
