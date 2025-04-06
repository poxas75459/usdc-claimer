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
    "JQ8MUVUSaxC4ivbYoTEH72y5MS9Spx49t4akT6pN5f7MWD5Spcf1BnmkaJCXC2XuyWtQVzBkiasSvehDetTWfUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262SxZtSro3Aq7JgMVD4ZYXFE5n3DigcLbGytomoo5qrTetHv7MW5xXzpZXx1szRXvXDu9UjuQoXVERK7HPLkjJW",
  "key1": "3P7gAD4279ts3Uxd2MGkKpN5fgPgAEneVH1dgkGeFmttNTnj3aKv6D7EWmvbPP1iMeaWdVHF8yga4JorE2yrv5u6",
  "key2": "4smgyeDyHz6Q2DmYuSo1ACbmDYnpVj4TGQRTe99Li8iRU3M335qCtBZeHwwt2nK7xLt1Zc49obsRWvnLBYxUpnx8",
  "key3": "UyYMu8dVjc3jK3WxZ7g5DsNwtTJ2deNGeMpzB7j6TB9jBhRve1WtpVGaKig287vJicdQXcjarBvyXnjmpsARR7P",
  "key4": "2ic98ssLT2MDTmbVkhQXcGeY9UemzkF8vfz8vzj4ziWAXw7ibdx39vSiPeVxU58Q5AveUTYof8kB1QnF9NJJQmTi",
  "key5": "4o57dGSXtLwaK3mfb8zUPdtJAJzPWbtWwoubkuuhcwb3NKRWYp6xa2sZmdsKRzHFXoKL7ViYkYTNaxqXSYCLwaYT",
  "key6": "2K9kS4fV1wPbRuiBULuphNFtMNXXSr995kHpssxZXktCwy9sNACLzjbSvinvKDFz56MdSZu4mAbqPTzZx7rTbvSg",
  "key7": "4LvjS3CgmwwF1G8NdWxixxTWkAXgQT6HKvMFvdd4ctRzmXA8WjxYqgVMYkKA5sDhXY9WXhochCD3YFcv5J4X89k5",
  "key8": "39NAMGTTHrsTjrW2igzs84LDCRU8vZhByKZWgmhCPbXCeheCSf4afcAFxvvvDiRm98YLBe8pY8nUZjn4tjSA59Wf",
  "key9": "5omhvWa34sftcLBirLpoAW7hM39UaZpkuoVS6C9T1kQm6N5aUatRTcJ4BdPQoX6W9Ek8aWL7jhb3kESWifpyDrhs",
  "key10": "33txZ7P2Ew2osDPEbw5UoY6RAuHUh6KYripL24bmBNzY5sYUxzt4WpHxND8jdVxLqzTDmakryrSbXu8pDNAa3mgt",
  "key11": "3zvhAthHWs5PdsFSdbroxTQNHfyHfDnZ4wRTAi66biiPBKpUC3saUhW9ZLiFMZtvu95siK1DrT4ZQcB2yv3SZGDm",
  "key12": "5t3KsVPndmgXP3DBcwuAo4Sxqonu62cVoy4QAs975zp783YVZibodkfhDwh2uPj58hT9YQv7fQuzU2S212USzXX6",
  "key13": "2fRCtjnh86YPXhVwW1vdVxPMGxHG24bkcWynQoLxp4YWM9uKrHymXU82RpwdrKZK5wLf4t7v1PRtKLvkJ237A9hm",
  "key14": "3qGtnCUktP4DcwcNxvvGKtG6ea8jes3qKncRVsW6F4bhCzGWLxeHDqFYnQeSHxE6Dkyh4Mz9uXEUSdWBczEptm6y",
  "key15": "364792Qe8x6UX1U1yAw2MGeVdP4sE1nPbfy2FpJwp7rDCzgHTxnRp5QFGdr9ycCApzipgF2kRPXugMawWF3StT1n",
  "key16": "421vbm5Dk8nJ862FymSriPCTRRudPvZ2fYvGVyRjPRjC4tSX6rW6acPURShxzCG4c6mpg4poMQAJfHeLiob8CQwH",
  "key17": "4WgBgzCFzfmivs1LaZ4hcAKmnwq375jghBqzAvSg594Mrt1acanhSX22CSsAcZZ1KNajUiBnr3MER1EUiJ667JTQ",
  "key18": "e4xHT14nMKwnaxf4KiTacCa55bFktvro6FPvvYiwsbhsHafBKiEoZhAvxdFkACEiqxMmXQ7tnSktqADeep6aRuD",
  "key19": "28j6bcTVGKMHc2ino9j1kBNpyoiwZjAGegZkmWVxWV55SkX7K6w1JmXqVTydXSgtsbrZqT1xsCgN41pBz6hqFtoN",
  "key20": "3Z5CMPFiTr14QNXs2iCVAbsPrygxLTxu8ED7cndgx4cXzXT3FkbiNg16y9J8Btt35g7BkRhoGZXr3vDrckMPG8qG",
  "key21": "42gaS7RA7SscQZwefELoYsdwAmnFC9e7NFmNA8SD9VM7b8d8cLuN8M9CtTugsgdP7YnkD5eJDHThUy5yURbfMKZG",
  "key22": "44LG9UoxxCBvErcPj6uEzkqtwJzrN4t42ytjFqaW4qyTuA3HTyFo4EsjTL9aExEz3YywocECHiuejPY5Fo5D5LGz",
  "key23": "2yLnaqRgmTkaQrxoUaFXufRHG3ty7mKuuUZJTnUpGBnavgcZE2Pu5BdqUxbLKwYLvAQ2ELqBZzMyyTQkKcn8remm",
  "key24": "3Km7FheyjUE3CHEYpuiv4H1i81NFRWq1ztTtriSz3wg2dGfbxHpU1svUFXrBVNxPz1r1ohCnGbfcR1eWi4jFyRPY",
  "key25": "2mVm3Ryx4sr4cy1bQZVdi3dvckXEYgNnsd9Jq2jWun7ZwdBAexmHhTp4RVhH7ScUTKAK42wUfeq5ruf9wyjM2zJ9",
  "key26": "57pTf6zx9ZEQeyVpVmcjLBDXvpeawDZdLHbRNDVWcebAFHLm8WfLKK167WWAUAt3hSmMUEwwdtE1LpBUEJ7bQjHH",
  "key27": "3svq2v7UfJSA8odPnzWYs7UUq7YwJRkfZNPFuR35WXbnCMywZ7y2ashENyvAovQCmjoJ2jeyfu2zxUbKFkSsgYfe",
  "key28": "2H8zuwfM1J9Zr6JSQwkHtTLgsnc5qgcrcDhz4LaFnrynbCfzkqQesiggs2mAHVPqVYDVKuBxX4XeSvK3bUvEPzMV",
  "key29": "5DVXG1oqpyZ32BmYYbbcpxbdNFcLhD8eHHtUEQcBMhoriGvkN2ZvwyfbF8LokMJExpj1eD5DuKgfGNbAJo4QGd6n",
  "key30": "kGvCBy7VdbE1Mnx7kHfq5eLPZAuHLpLEAF5DXgPrG6wDs76X3Jxw6RRdBzsinkwz67NbBfV5VG1Q8zTxC1chatX",
  "key31": "4Sn2Rapa4drosXcJZTpNS8dPNeMarHi3nqwWrY1mVsLiDQ4ZZbkC9GTEohmRBvrJnmuxZSkz1bXQiW7DyD2Ej5Jb",
  "key32": "3MbzpnETmwBgxGzE26tpmHNN6Kk4cG5xDirQKz8gDdrhNPxntRbBYL9qTTaiFWS5hzNpbrpi2GCHoFx4RQXRWgjZ",
  "key33": "33PrMwSKJKmfYFVtqbpq6fyVspnzakU6Wh1MvojWwx8yMqGfX28FbEjW29ZZs5PzVRjxKwYdf9v3vWBtgxyrKE4g",
  "key34": "48epktU25Z3Ku9jRaqLmudJz1bEoA9nBLVCW2Zv7Z5Eir95c6xTHfN3Tguc77gRZS7HqyUdcVDzU54C1Tn5tZdGd",
  "key35": "3W4sAhVFH9c54n1QGdTbrihmBZA7JKqvHohJeb4tDqRuzpekk3q1RzNFpZUWcrw8PGDZjCfzGdD9ba69ygZxNn7",
  "key36": "47E9TbTssBbCn88pCxM63SXM8FEYC9HijJumuTbjmsNkCVZfpo7n2d64Fwguy2ccQ5GJ428W8kg8G1od6Pi3qf6m",
  "key37": "2sahnnt5jKXdXe1BVvrN7Gwqt9SB7sManKCzwvRTATDfkrcjnn4hzG5uLCDHzp9UwvoQRy2G29XeLfUQhdMb7Rx",
  "key38": "5KBcfjM1Zk2SXQBNkmsCMbux4RUaRtfacE2QggHyk8W4srYhvhSTMd9iFu8UTp6SWXHXn7GfXLpoYEnMeJK1bWzL",
  "key39": "4GhZLtSjgQT3Bk2DTins9LtDcnMheKsnp7cQA3SxsFxPUsF5hZhEK1NKRELaULscGiNLmSiXrnK9dJsQqqzJUXkA",
  "key40": "3fHcEuEPJqV5hEdU8b788yYyYYG2frZojBYXJgpQ84iEdkjH67s8yAk6rahERSkFcf87btnVgteB91Mvt3FFoWsP",
  "key41": "31v2aHDdQsC2RQbHLiXX8waAHBPfe52LpL256bKBHGDeWQaAyfsmNb3nstHUNXgietFBt4Yk7Ky1rgdTGDruwAjb",
  "key42": "2TA2WcBGVTQ4qKgp3LNGZkEo8k9YLDYJAj7ZnU6KQgGAMfRBnN8n3b4MQjcDHi5jMmkFEL88SJAupjzbYgpEpai",
  "key43": "4hqAcFF6ddTCGwH1sKWVoKx87fznuyLehHt8h1nhPyhz4KH9coLAJqj3JvaJ68zvy2LaaP3UFfmiMV75SBYP2X99"
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
