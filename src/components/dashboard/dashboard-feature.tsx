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
    "5bKvr5Pz5ePazd5YNMo2kG2xtE3sKgNLaCgnCcgFgZdQUXTSLQjJZUpp5QuKPEUZqQbRLvXuySxKpJcAeFCy28qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJAyJ2VXD3YjW58ipDLHTcCzKF4pFii8kGgVNcB86phviJ1qERc1gks7qRnEfGxVhAKaGPETEfdKPaogu2sfVtv",
  "key1": "48sWZuqKACd1PRhjuncJkscHLRrgvXxZt82mFbB4P8u39RrPKB96cQjTPcmffBVPRMYvbqvCFTbcWv217xPyMszu",
  "key2": "5e94x8tc9uedXPUSDfsreUZaDtCvubM2h3R5Pie7AAJ57otDipQ6fD8ikFBU2NBV9QgUMep8D4gnEEJ3NZRv56K5",
  "key3": "5fNiShRdq7i7CUXkNjq4iUddNuxjK56P8tE8VdvLja4b8DRTRXzAybHey8GHVtdWDqjWWVZf2amCvrka2Pav88SY",
  "key4": "5VPRvYFeZJ3cnQ9fRAYiUCq8iEnPoHXXBpmFtkWft6dysFQbxfLjXKjbaocXP2QMwZdisWUNSufMSEzVSRgXKn9o",
  "key5": "3HAKpbXcsKBgkTXYZcW1nMhNsVnBKbcPaZBKF8rXDxw9QXvag9L2Ek58UgtNzpKknibCngqk8kDVGo4JdHkNeGqM",
  "key6": "cDmUZvTqjsE9FZyFGY3YVsoogYcPctjViVWh53JGko9emVvzLDfRk5qgniekwhoVDzjqacd75UrG68RLrPw7nS6",
  "key7": "2MJ7ks8sxczxPzrM75zfUnRNy46NSmc6zcky8DTC93F5vooBSgReq2xmimsdMD6DwBARU8uZbeTWW5GvfUJcxzwA",
  "key8": "41dHx3Ne7yweHv6D69iUr2SNPqQx5RJHCWe7RJn7mNQbba5jZdSSWnhLmxTMMjHwzcTVc96UhCP7EyvPMjxz2bwj",
  "key9": "YvBwkn9eALXuf9rN27TxCUrqTN8HRX1d4goKYbH7Zn4qKFsLXBDa96JvkiSXYuGse8uK9aAYjmmwwXo2DbCutoC",
  "key10": "4dRBYd2Bh6ZK6kmNs5QBDE4fT38xjGn12XCEP1JQqppNQavoKo3WxVwyBXt5do4dmy51UGxNertEARDHErKL4VBz",
  "key11": "5nWU9JJMX6LaLsLLPm73VeV6sY9ESEf5e81ErxzvGHGXDJjoZ8RbDN2JkreioFPrKyW7ghzAxCTV8SSdWsdUxeeM",
  "key12": "2rvydtewamaKR4VMiXPxfkGQCBSbwxJSp5WLiefWmeoNkNt2D4LamEqVijTMgPCwPK3LuksCVuAbXTzv7kH8zPk8",
  "key13": "6QMHWRaeBjbFqMTbs448hk4RJKdWc3swc2dmieToVYnaqFuGucQs8rTtBiwg4dgTabyB3iNXk5rYGumdvXn7z2F",
  "key14": "4WRXEy82JkTFUgrz7wUEnhQ1UccyBsLq4WazefwoxXr1RL73pJq8mAsCEigXUwS4Aqu7wHtjH58zCKrRHd2o6ebJ",
  "key15": "29ZT5T7gtohLmvneDjQTtzqqLgGzfPmyXny6zhjrT2Q2Wr9nhfgoxphjpqrV3LE8u16KpRsZNqVF1RzkHJQAaeLN",
  "key16": "4eB6AHHkimQV37WncseX1u4x26GfE65n1iXKJoDBwCpZL2N4QV9NJrSafvrQJ9zqY24NqDmwFgFHvRSSN1zhU7jq",
  "key17": "5pp9YeeddsiLVMnARbwTNniUtztXdLqzNeTW2pqbujK5BFbgAnKpajEYJ9mEoM387NNKACpHHK4kmBvcDCPC9KbS",
  "key18": "2LcKTGcvfRNrsSq8oDVAkPT91uyWBrQLzgw8XLbW4hyJHy2F9hnBezuMEznx6q2qNvNfjYnswV8uj1Z66ih8JLsL",
  "key19": "2qRpziev55n1GbjyurcZ7m2A6GtG2Ppb1axqxRGgwPTkeTyMMkj6vBTJmwXsjBCejTJMy44Fb8fuzTp93UbgBXz",
  "key20": "MbYHVLK9vxVceNMF5xd8mJ9GuAKMu7NHUahPPuD5pe4dvLUyZG6gav8nrkokPoa8xrgAn6qMLjJHgWo2ZdihYjv",
  "key21": "mUsKXr8JYVf4br69jsY9utnfDSTMK5YguJdS5tvyg9LnJzpDEwCQeJQMvDWN38bkCLEnX7oQp5AeLfkvGsawJWB",
  "key22": "5ME1vSuNdwXdxqQiZ1JUnYNSXFJhkfNwAwboA7RijtAtAV49UYTfqqAMFvqFvtczqhoLaorqd5jpDL6c6CDe5rce",
  "key23": "5ViHXmgx9FBSQKDBc5vybWqji5kpTSGqVT24anaZFYUx9n4PGkcS9E1iYsQeuzRzgeS4d4B1RhZUEtnjDbiZuzGC",
  "key24": "gWqyauEVHNUAdQ4RtJKtW9QDY54v2kh7XoQCuc8H8AMV1mhjsq9caC7YbtxBum3sb8cqqsVh8nUkMt1sTTAKzFZ",
  "key25": "5VKRbGSBLQVxiTJXhCcoypadEXpHdLzAk7A6KSsRnzc2tAz3GMSYZTJHceMH3o8UJUqMVk7tpXWyAsqDgaMpm1fh",
  "key26": "37am1TnbJL2zw1XGoD5WiKMeVyqf2uG3WmtsYLjdwuYjFEKNaMzUKbA6nVzYqoUBNp5vj41wTxHUiKVjzFR1TYQ9",
  "key27": "P7A8oYrhVDNGShBiVvMWn5siECRJemzYo6CYqSMmwQ4YvJmQdhstxs1ee4En3P9RXvZcC44sFmdgUgVgmKUkSUw",
  "key28": "3U1S5yQC17Q7TgAxNgxdqKLGwQFYiT58AKmSy4QsfPRuR2ixS3829oE8iAe7PXXnocogUhYgQ9RrcpK8FnFT5Qtx"
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
