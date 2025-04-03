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
    "3YErkYRwEuGGV1hAtpmukb3pbde6NGABFTb2g64ZNeCrJGsRFnNKTEeC67vj6gm7B849GQudNokTUKFpvidKPA1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4viZmurPwKf6RAJwPz8K7HFM7R1RY6hiRtA4i4X6ZkLx8eLpTYaPzkVqmLXQ7ZMRkjKVFv4fTWFTQ8UoaKEHfEE8",
  "key1": "3Y1a6NKq58Wsdsxcmep4DBPB7Y2rd8ns3abtLh3Lmr5zdqTYbYBN4Tiz3RA1FpnWv5BsXVdBUDZiarduG2zS1oAq",
  "key2": "5z6uECg5usnwpaED2ihfgkvYBtjyvbSMC9ciDyiT4JDPdPo9Ttn73sfuyeM2CWHU5LHCSfGvdTdepnpS5Fk1Unr",
  "key3": "2VCmmWu1xWxn8BqPXja2svPLr1b55y6eCAkF2FzoVHvD4aDoCYgWDzHt4E3XthVR4kxHRPWhqRkruWQyuVrt3Qi",
  "key4": "77oeFpP9QSyEemiNcDNxXYpdpkdKfzNk5N7SjpsEDyuxKYu15jvPEwWg317EjPLPRFmGvevCQAVkyrK9YtRzaQj",
  "key5": "4haCmpLxFcHndMC4kYvtUk45ia2B7ujFnA6KnyQTZ4oJCmr4tTXfp34sFi85eiUb65bFYZeww4MpzanLUdy5JZaZ",
  "key6": "4man73VbWPCxpSGBUQtFNy2y6cEs9tj4fR1HMVcfPRXxd1qcZccxRUZtLnNVbEydtC7e4wc2i91A8rHrhYbvnfCp",
  "key7": "5Ljg2pobTC2YSj2CXCJWVSUgDFS6RZo5Z6nGq2PcVAAb15YMtTnYYRjcLyXQkfZQJm3anKV4XiHGbrew2JVgvwX4",
  "key8": "2fdzCnXrFwo5gaKJJ8nNKGWBjzci51SCbk2PAAkmZBKtvhQceNNGJHHm3Teq6rZGhxKTecDEbgKiY4Dn4GaxpcPG",
  "key9": "3cBDFRpP4UNdsevUCc3Aiu1QkHWhpX9gKtagsCCwK4ttnVeQg9HSGZUrgNoLuXPpZMsEdKoAWdXiLib1xCR1Es7G",
  "key10": "29HiMyubwKD2GyDqAJNMWpSFQFEeMMLZ11Cu1Qs1NPiPFTnwkbAYvn7XdjgD8yRck3aedajiA7REjzv6v8oEfgqx",
  "key11": "2sQjsgPuViAGyWgaczeLN4U8zMvueD356r9PqMCG5cMfnasqAFzRzP4GJD1K8eZwVGw2MYKT5oMmsEqr3W1ixRVy",
  "key12": "3ww5yMmxqWt9nDmKzRKVZKdZhpX44kf9BJAz2AGQDgtexGYDMUoyXQNHmNPZzyVSDV6S8eZBHupA7Ac7WbJXUqAp",
  "key13": "3rW4ZqbEkDgaDUeoRs78FR85SqPRkSLf5kRCcFoq7dx9zEEoKxvMfpG2zMhnBRADMrJkgaB2H3HbhBrDzcSv1pSo",
  "key14": "kYHgbhn8PFQaeGeZFMmoQLvTL1zCw4AiFBkJCDpdMhm1roK3SdjJKCSk6HTS3A2fCVphXKCRcdH2AJHNca6kKrv",
  "key15": "632FYQ9zcMDcKo8eGuvuGP1bVrXa8qb88QFR1mhnU9Mm4XDduH2xewumupYHy7kx9pDTWTcpRY3cVMqsjdozuvNb",
  "key16": "22KtQy6zrGsnjeKT2KGxox1SWc6kXMDyv5sbQfQuJBRppWBcteDh5GV2yWKk6cg1ABTkTbLuSjo5kxCGjm4gGrN6",
  "key17": "4GgiE8dtufNfSGNTgUhN545FRGqMrqfkxNsHnkqksP4EhbaLjpBZPNdCgqZn4d5ZhFXNsdpCKrwfu9R8Yd2H3L5r",
  "key18": "4FCN5LCwrbomRxxAB9FoSXHCBib9uB7wDfEpDQ4t7xbYgn6UfQecucn94ZtqC34Qe4zBeDSsWBjR4BbcpSNwyDuV",
  "key19": "3neDEWND11g46k6WxfeDxic4GWpmeCwokst55vFfo21QxPYrtbnswoeeCafLniqt8avroc7r3JSs2vfuZjQovqPD",
  "key20": "5GKH1N4hj7MgFiZLs4XGL2nxwBNX5tdk4p77wjzCV2ro2QUswigihXwYcJURCHiTN7EsuWkLfQ4berLDd6FxgAwa",
  "key21": "4dnMtTpjCeSqJ9Fieqo2eELeBFvFwH9e8UtP5JT77wExzkTBjcm7qUDJSBBuNxgtpBgGXJttUvuGU6cZx5JPs8VS",
  "key22": "orM8ox43Ujz1r4iGgAGZMELUhiWc9ckP9rf5KgUS4ZowDXrzhUXctHwPXJakKZ4ZmuJtza14MmszUr9AMhPvWdy",
  "key23": "4QcSd4rX9aBfxVWGxVMNxnxFkWxYgu8dDaLdFLy6RogjybZ3cfc146HmB3PBSUPtLpDSTiC9KSsdjXjC7WbD4YoD",
  "key24": "26F11HvnmodfYg1vowTeBfQNeeLWPAymeJgBTH8XaNWpWdkD2hLu3wNW6keKN2x7jAydxUzrBUwAM8LtNBL5dBJG",
  "key25": "4kWhfLiGv1sam2Uob6eQ5nJbEaT9qZHHC1T1nmgivyTPHpJFUU6RkoGA8RstZATnUR9df6uL1hEYUUmcFZw9cM4z",
  "key26": "3crJeU82Rp1gEYCgf2PXWPCFR8sH6C9s3DB6auianuYanZYFJByoh2TTAfgPB2jRF2MWQ77vuBxPkSt8dBHTTLLG"
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
