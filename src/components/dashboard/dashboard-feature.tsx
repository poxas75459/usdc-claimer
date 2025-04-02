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
    "4MVQ7YpVw89jFxv7JWwpMvDwfxg5T2fGx7o8JFwpBPnrh55ifcS7yXa2fuMcmDGcjUGJhD5ZE4qTsbK689DmaPph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogbGZoYgTmkhmcQfkmJjHM5Y5CRZJa6R994rxXuaM4pQaXtgmxYNNarcRFtxdJZhpA7iVVVATCjSgYf2oDzEVDw",
  "key1": "25Z1hrd9T8oKKHq51hy5LfLimtf9DPNsh5HS1tw1ZTX3KpovgKgLPUmyLw8fc4zxqwR76WJ3jeFqc1DkeM3McHsZ",
  "key2": "3iJQhHmrf4MV2cVwymTo4eWd62orGygUTjKRqEJ9ziMfSBhWTR8Gy7mKSgaADhNr1oARXxpRZ7UMWBhUQQGpWqw9",
  "key3": "4PMqkYco6rfARTH2zG24hkoALrfUMjhVL46h1QtckSqod4T8yr2pUauaaY4bybUgsTLiqqMAAFDz8hJoBw9BbiJL",
  "key4": "2Lke16648tfzmpka3gskvmtusBbkQmuPQP6VVLtjQUZxMeqe72eqZiGgaFG6VM7p14hkpWXVpit4t3nnjkG7n43k",
  "key5": "fr9jeP3m1DrKBKwEudu7LXsLXZuowmd8XJ12EPGjxuHUHeaWAt6Sj9VoYRUhccgLE1XCKZEJVyW4shhRZA3yvwQ",
  "key6": "2sGediLmPHaHQqR2Adggu31ngfxXTVCASv8tYAHd5s2rfNErjNdchzb67h2XfSvgC7k7kF5ub3KuL891gsQePS9w",
  "key7": "25ue1Xdnmxi96xzbMm2dzamFqwAP617AQDPYTyweqeTVne4gDSzYdw2eN6X5ZXXV8oomv77f42duEdPSv5nTLHM2",
  "key8": "37Zs5oEqGTQV2a2oVejuqQmPBnQEjjfs5Aj56mfxHawrMMVDLzTKZwcyXDxpt4dnmPNeM912MdsKcaRgp5nTgiUh",
  "key9": "315ZRFCdBpkJWehPBXQoAXKhyE35dQ4bHHAt6vFy7NRkvP3QnZvVM6uKX4gAcz2bEbsg6VUHPFyS5P485wbgpQfY",
  "key10": "246xChqGD9dKmr8j6MhExNQvVxqatkTmNy2ptFdmk4X9bFakE16wQzgATGruPGJSwNytGdrmPULhC9Ln4EZqodxb",
  "key11": "52T5pAjz1Tb5WYGWdyAJZHQzg4FsYVr4NNBj21DyxPtpR3cbjWntQ9Bt4qAxLkve26ZFqkRrxX58XsLWPUyy4jxu",
  "key12": "3t38mKfNtx14jm1itDmnipzBG3wfeqBTXoapQkQAndgdBwLpEukpuaQpTkuj4G4LmpQi9Y7NHGxwuVAiYEsRR56U",
  "key13": "2hBXSBKyjnCq7iCLmL63gwyJkcRjUBtHX4aRmJuZRvQ5NyMNqsaFRmkyrcorVy5SMH4CD6c4oyYAHcEQagquyhnw",
  "key14": "2zF3sa4k6Ry3iCyp8tMstEGurNLxxzAnqZCrPcr85RKY1YVyVZJwq5jfZ5ny6p8JZnComHHXd1YqmfjVdWbZJzzP",
  "key15": "34Hpww9PvrEbSu9MdBqWhwGdadQhMtSUs6M9kgX4GqGffvp5UJygJqNv12C411zAaBVNCi82yws4fDzxz38sFSSe",
  "key16": "1299JqZw8tE5xfMqsjp2Dwk5sqPsdhzkVCxD5YUtw1b9Ytm98F62MdN9Dn9RgWYrh86zLKfhKH2as9bW6FFHytc3",
  "key17": "4kmRgpDkM4LdtuAbvRpkiMztihcMQkbcbnB7RV4MCU6b6UGXgUUp2BkH5EWgNNo2zyJCjy4uTW9KDz8C4YcPYHBY",
  "key18": "43zk9gbdXVwMargLEHixjmzNBaWs8tBL8LptWVmyydYiUjE4UU6vTm6gtxRfu87PQWe66RUd7Tww94JB8vYufkeP",
  "key19": "3EZMmWn1JFbhVQCH9UKGQEY8p8xLaJz4YY3a4KAuyh119NVyFVEnubEsz9gQDVtbez8YzwnaaCeWt5g2mhyAQXzb",
  "key20": "5qCpJ2neUEsN9zFZmeqPbDqZ4bYNjg9JfEbkUqategahiZCZCBNMLn5j3EKwn2gcWqDkjdynxRtDR5WZLeUMoQRC",
  "key21": "3xZNTWpRTqoUkLVWtzayiN4MSPCKhS6RFWDcEVTUucuMJM5TRqMy81oASdsEPWiNQMtLg1HEP3WyWofoSyDpkbYB",
  "key22": "3Zz2EBsBGTmpwUbdstwHqCmT5ABpZT77yUCbeyPAzyoKefZRAw6LZtYLu3ouvJKcWAW8ChaBpa2EAXjmveW5W725",
  "key23": "NV5bGrSHXWCHRwyoTvATZLGXRmmwrE6pXM6RfVwRzqWiNggvM7Jk11c6Nv2F1WdgSLEGk7brbKRhKogSVL9Bzs7",
  "key24": "4uNmSGunmnN9BWgeRBY8cnnUzQ7Nujb6jVY1SxiKkimCo3D2WMNTtP4AZFV1tKyx6h31thjHJPnUjfEDEip3D3Ct",
  "key25": "23Z9MaEkEjXsurY5DSrcJQAm3e9r2aank3CmyPLWmz1ZsPEoy2uXP7RYyA9kyMGwYy69XwLf9YGrmFfdqoMuKYZM",
  "key26": "286GzDKZQr1QTFXRHhUA3zygiGWzCzMsW5jbWypnH4uu9dd9qohH9wSJ5VDDRRkichRTD9dtEz1FwxK718vnPt9U",
  "key27": "4Jt9FoC3z69f2dAZPoQ93t7eyR1gp6mALsk7cCdrn6C8STbMBsmfUFnVjVyDNVa4oLvpg4d2aLSk9E7xCsMgb9yg",
  "key28": "4hdSHeegWUSgeZHRGw17q7La9fAAYRtosC12y6LiSKH7RhFnxS6LkmCGvruLutZyZD8XZNSXqT8A29VvFWabAUTa",
  "key29": "4qLrsPdHpknKpn1wweMU3iAqyiq3hga61fYg5z2E54KD2PJxT847PLKru3U96iTqxSPmBQT1YjGnGV4MLBxxXM3q",
  "key30": "5KRbwearWUJ12KYze1dndYqAXGx6M5fka3yjvKc98H4VKxgCqQRPh751dpmwsR7bbSjLxvZJBFStFxLRoKhDh4Lo"
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
