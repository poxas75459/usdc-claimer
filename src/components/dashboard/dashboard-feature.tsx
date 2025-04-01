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
    "4sBqRfkXsCxjkE2g7jVef22DFQNBRo2MpegBeFMufMUieMrmhAq6X8FGc8UHCbMZvFjiZdGDY9cUFBuxu5Wq9QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBeejePBf4cPLaiBuGfPdGMzFSRvz6iY4AZMHvNgRdJcMsesc8ExeSscjJ2Lz1KFtmrZh3rrqycsLt1yaiiJPrs",
  "key1": "2j9MU1rXUsmNH1XjLN3a3vVy988tN5FrUSEjjLNw8jJXVxRbEQGDD7ZEmyUuzJ26vqDvD1Fe3EUNDgs1yZn6dKyo",
  "key2": "4uEKFZonKVQjj6vhUxoVvvFbZn1RXXsk85wiF8EechKRrbEdHH7azHtqP9NzQFQfqNwDAbjxm8WAgr4PK4qpqrPq",
  "key3": "39kBCsQ1djXNV9kVCoCGQ3tFtFSu4A1vKxi7e5yWZWtBk1LHZxZXz3UGmTanJUpJnZH2pgC8GYLk1ARhxru8RUHB",
  "key4": "2Ttb9svcMjVksBLxwSL5CdzLbJGTzwfSQq9doj6BWuPrJyoWsRDvhX7kYbjftMcssq3dfTWPs22mTxqYaxCtPa2A",
  "key5": "34bk4gHM4X5XC6sYYX6Nrf5PNcRvtQRNnoU6fv4hVfXLNNS9vqQiVWMTm2UqfxUEy84hFYyyuXfnsQbA1WDhqF3B",
  "key6": "2M8mtLDuV86b6PZn9JTzxsNGHAvcQToxeCu7yy4uh98V883PFL94kDfVCkfqvjZ9Scw2m7rqpS5rbZgVEie4SHSn",
  "key7": "Y97zN6rdCPAWuSX75vwajV7JyheDzemxFYciNJR1K7HDbTgxR8JrLLnW5orPHPbFruV3m3uTNXyGB2ziL6dEWoT",
  "key8": "677Qotmo2ai7zuZpvuVb6pgjZc7GdyyFj8yxowp57hdCtumdGmkVxVAMu2aF7k77ftXNRYuxrf8Mh1XdD7NYK4Pw",
  "key9": "4eYyJnNPWx1fh6T6i37k3j3wMZMGv93byW9HZAv2Mh587aCiQVHT1MtQGK6NWyJcXGgzhHQ3HfEc58rWuLgDa2Lh",
  "key10": "2vUQBroEgMyEo3yR33bM8W1r7eZgiqw1YxADxGKc3jH5hjL9W6QtEb31ttZzWCGSJpydPxv51ofWtLYs3rHBaT6W",
  "key11": "489gw1D7CBUEjbpu6nPqjFXRoPD5z4rAGFV9vdkEZzJBr7PXX8icqEuCV9QMYyxEoaK4TqZNdzDcjfWNorGht4Y6",
  "key12": "3p1ozdFvBAgbtPGv2poTArm76wvG5aBcRgN45wWFuCm7GgDqbqB9bLJADDnJuXcWcV1Ey1516Dp5Do1GHMD7jWy5",
  "key13": "38hLZFCSiSSth5FdHkeFMxegPLGuVWMSwQ2awM1DfCHtxi4gLcxBtstNiYgpT5sPvDqjFZHs7YSQxiwayXEH5jwE",
  "key14": "2nXyhwg1jsiGwD6NRbzDq1xPoeFZQLP9KWKk4bwbPQLxFceL8y8c3AjW5tcjxRfsGetV3pWyZ2exsixUL81HkKpJ",
  "key15": "2yVnrLuaKukzL7H6vznJqctiLehivAiwEDtwy22X5wDL13fwGRuwtqAZeKFWnPdKJHUfbG3ZFZP1cCLG2qt9trbu",
  "key16": "4bFeuX9N1TRTFXmG1RQMZH6dNsz5mfoq7xTviZiBktFB85Uk1Cn4rkYt8xqdNNGjoX2cfX4Xzo4cRojafUYmtwSU",
  "key17": "3GuetqciusRkSdxuScYdWo5Ma2DFXtB64xKNshTUnjQFcCAcCqjYTTvpPvQj25xFsGWWPcJAfQ79W2Y2gsfBhf8X",
  "key18": "34BQvQv8oKvKga31HBFpFQqz5VjwZd8WSBrjwDDGoU4JW1emdM981ZosF5XSYxjP8fS71mUmrXRWRpve4ZtD9cVP",
  "key19": "4Q57vgyEgPxm9mzRot8yq35CyCtsfCJeEczFZLLpzVEQUxTp8tzzd9BGXkJsNDudSL4xRbZ9BPGkQorzvACWawFC",
  "key20": "3zZo2yMfkBJY1PLv9DyreSmTGTJxqchpHRVUW6Czd5jbfwDkfWmWugHBCi79oV4DPnYRgaUwozz2ovJ9s6TCEwYB",
  "key21": "3QSF7wjzjAxEh8B2FsXjqcu97n2nJmRihCeeQPi8s1aNuV7ahag8ffhgoJ9HXeQsxdjQncamQ9F6w1LuBSG3kUq7",
  "key22": "4hYUAG6w4cgCgBMMqzNmES3RLhKbQB915QxkVp5E2MYvVoVy6c2KEG4Q2onZktvYCJ2aUi6nw1Su7i2eNxZe2FWV",
  "key23": "2szZou5XiuvmSHLdBfuuTC8rH2srKNeACzbVqebRBjTuakNnTi3N3Nm6iZrbabfeJqxPwiyGh8KcZbxyAshBQW9s",
  "key24": "4WmoaAqKbW25xU4kWrHm6QSNNhsvydVG9xG9nktiuVv2KQ76cCAv6FVGR7Yv56ytypdYZJe6b1PLrovCd5jxN4SK",
  "key25": "5VRsW5cHnLzeTYbWskBuqTBQQk8vS3nuqFcoPgoH7Ns575Rq4SmG5Mkb1YvGitv81FGaueHqAJBb7P54pDLTy5ZT",
  "key26": "2dVnR6Lsdpd33x5hq4h2hFE8ndZCyf6YcgyScQPWxPmsMCjnCFTBbvJpimRf1VSVzCCHti3n482e9B4FMEPoMpx2",
  "key27": "5snsqVn7zC2HHm9cwr8fhpBoJuTHy5iXQzfjCUy32rxDc8AayeGu1oYLxR34GqbMyf5pPQ5iG35onFwLTnreQkEL",
  "key28": "2sVg3pHDqhTkgmNHg9A2Rxu59PNrLxA81ukf3XTbhk4FR5Go2ALjGGV5i42R7cKrpkLKDFH8dqtP3MNvHrdg3vUY",
  "key29": "5GyNtfByiUBBQqHYixNyGRpcYR7MRdBzEheS6kQ6hdcpikWMTA3KnBpENtNf9PD3iNpQ5Z5Emk6SH91Q5vDyoXLT",
  "key30": "4ArMUwT5WCR4ePd7X2HDCkeW4iNJsUgbErcSD5GrGwDrAesLXN11Mq3pbNn14byY1aZe6MzW1PcrXkqagfS3mDrv",
  "key31": "5tGwPSj2pvf8WPTSWYnTvp8Km5B8bNRgoekPLbpE1YYdRKgQKBFUtrFi1PFWyZ8PpQ2Qe31HD6qGK3DeDc7He4oz",
  "key32": "3Q1p73KM3coyi49mEg9RvvQ6AaGpvd9dat1h6uLUDwzioATswc4thTifXiGyibXBpLa7C8DYC2UnbZNU6yzek6Yc",
  "key33": "4LrTez9DUVtjsrfZxfs2jutqDW1WQmSmL8dZA9QENFkiuqc7WKXAvqku6cQveUips7zxCKbJb8Xj3cdMy3tCi2Vk",
  "key34": "5twsqWP4MXyAQU3atw5txJ3UfJhXF39xELTrZuYajsjJeoyymEbTNhzreea29P7C8gKcvXRt2RrYQ1amaQYAqNNJ",
  "key35": "22KohNqLbk1cZTB4RLNusDkYakGF33pviU8kxoW4sjNuGSbv4f2HAD5NhZVaWN2CwhxH1EgN2qskz765Erd5MZoj",
  "key36": "3qHwdQhkMjkt8YWXuk6c3hhdMaH6mjRSMkNkijzXdALyDVPCqrkBfeajf3RWczoyzcbXW4tFofw5MgFFFBxakUkQ",
  "key37": "3dEwgsX36gL3uMdaLfAXt6qdvZdxDbF7XmFaPWodpB8SxNEpRyz39DS9eNtVrumRKmEM9yY3tDcGS6fH9hXmJkML"
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
