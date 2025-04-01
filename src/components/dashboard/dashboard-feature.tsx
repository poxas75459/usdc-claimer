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
    "tLKrSysjDstdBowufQN63KEpkXbW6Co6YsWZ9KWwyHNRnKnLCBpp822voFDRYZrpXpMq9MYVhEH9udBXjoWUsHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvjXVLnedDn2xM9t8ycAwMkxLrZ4DM2Hdm11f6xYwBaLiDASrxAHfE5Pxh7fWUqHRe73nWXcA3nE7TPSA5fZbrS",
  "key1": "4LhZFUg38wKKNLp1E5Nd65dFBz664uQ1h4thhS658agoivQQjzDPssWDDfftmefamR3thheAkqYSHaXhns4Unori",
  "key2": "2cWg8JWrjrBarb3DZWNa6Jfvy5AwPFMBnhMvVhAsxKEhrzqza2wSxKHuStgLgUQmp9ZVD5wtM7mNGmHoQmjk5Xgs",
  "key3": "4dZNNCzGXsx9YBjErpSiBRw2MdRa7Expjx71VFN7fCraztcFRmgfYh6ZEBgMB9N8RnGJo9514HzgvXhNWbintyzm",
  "key4": "3YaSzu6maVKXhcKr1aunm4j3MqimRXUGBUDGsM2TzZzf8xi8QPzAaMLVXWfk4WPDEmcY8U1yZSiJEvNG9tXF14Ys",
  "key5": "3dA88zBJcFiKVcrz9cdiRiqzATPCLkmUKKWBLhK3p4n6D45RQn1YmAFaMw5tw7RhSAf8KFJvT7zJLATnNX9n2b6T",
  "key6": "5X34zqDx2M5HuXfXKcvPV7nV6uDaKmdgdiFL5iwd36AiKbu5D664cWS6miNgxi5yzrLmenHhpbnWsbP52J8UD3Qu",
  "key7": "4xapSifYpLQRnCRADuzaQke19mjvu7uhtSmmUoCUtij7s4dXFDpjkdg1eJDP7Tpsn3nwt15imiJrEN3Yco1AmFgb",
  "key8": "MrUg59gWj5gQZmbp5TLkFuDvhEs3i2ZU3x5HCj82pLouhbi9BhuadFn4gYVi3McSs9RP4eaqViRWerWua89ncPJ",
  "key9": "3AGSPjcJgr1bFTQWadQ3cougN1FHrGx8MEvnX3q78ofcsVsSH1acD4Z2i8o1VcvpP8SQX9g1yDQWSsup1xYjw1Qp",
  "key10": "4R7uUqwNqrk6EhAdr2QKBHzuiwfhNt4xGHjiscrqDKpEHU41jmVtSu3DrL3LJXQQPigqskzWpx7QB2Y8y5DREEzc",
  "key11": "2M75Hj7pjPr5xfD3y7MZqaoKLEWVxnee1swg3xqLbc55mPiHYxFSYpA7VmtgyU92M1Z1ovEeNLjrXu4GZetY3d7g",
  "key12": "2JqGykBUVgh5qXjjw5pQDrJwR6MVLXncbgRmLQSJBLdtRXfWuf9FLdwCPMM9N79x5Qomu9DU8dJU1FNnpXnwoUg9",
  "key13": "hrxwsMuF1vXzjYKMWmzQC4cdj8uQb2feFMSf2pdGh3ed9v2yjnHekXBf1AohwVoEUftCgJj5uPSq8ge5x9X2Xwf",
  "key14": "3Ti3ZcwnPJ9R2VH1BcGg7442Lh9UQ8YWrh15vJseT26LHptpE8QCU4pBhFQhcVJuC4UCHHMDyzCuzswBWweuaqM3",
  "key15": "363T9NVxyM7ArsfU2GJRK7RyqrQ6H54Y69NCnFLdeN11Mw2PQPKSyT6bE4dnuev3sBGa3hLd6nYKq2BdiajL7Nax",
  "key16": "62Xqrqt1UHj6epQZ8kaP9EutRiSU4sE462Bc3b7Qhtks7KHykv7zvrm4SbZ53BKhAd7oyMX2EADphcEiR2AmU4iu",
  "key17": "3SBw1T3QDt8XpwVh5Np8uWZX6RVLV8psbtWusDvar1qZQ1njVDrBXp9E5A1TkFnAzJrsJNtdBKx8Tbd4hxbFsskv",
  "key18": "vUUZuzLFXGfWxPsV8EjfowFeNfbo4mxs9iSXSQFyWiP6zXPxdGJxPBdZwMrBQuUw7gR5K9RZK7BWkQcbZwWX1q2",
  "key19": "2U5MqW4Wr4Qf1PAboYzeoQL9gUToqjPhW7tyLykGQSM8BY273r3SafG2voVqNPtedDMGTdbz4mvgpxKZyGTGXfF5",
  "key20": "5V6chA4xfUyn4nYXiJpDM82CwFCJTVca12u2ksZj1QU8GRCUUSsTBLoZQvNDbxfEgfgm6ojUowBxHHVLDQfkphnQ",
  "key21": "iTAvuYFCqZTGVcNcSE7VEzvRaJG991pZsoCqkwWNj3W2eViKcUF3ji1m7jhXJ7YxPMyhLi9u8KNbeJ8J1SiQKur",
  "key22": "kt8hjVoiF3SrthNvFFfbtHufVf3oP2j36LQCqcrXnjjYWw1px3R5px9Wuf8vXgYgFBjxHBgRPopyLokLePHXp3D",
  "key23": "3bWhytSWLEtZs7mi7BipvRo6K9XijP4fYwmgXHoyWzartdghWb5yqBTx7HdUyinc4Q4QJ6UQAYkWq261Psu9Dfo3",
  "key24": "2LE97rrXwqxZQzUP8YpaBewvQCGGHp7aZQxw2ohcrPehf9rHB2Xpjex1s6DMnt8v32WaCS9hzk6E5VdRebNuTQ95"
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
