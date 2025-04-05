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
    "jdULd9pKpBsAaxDhdMcbagFP64FpvKQxuywks5wzWx7nzDdGdHAzoPGDe6mdsJ8WH2byKBZMoNDSTdaLf96KyP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mss7fSpXA9MMWL54bWFYUmNQciYsW7xBtWxJ8PLpBK9bRmUc7aDqhRHDbWXaJMZc7Reipp2gUgN56nGuCLENT4r",
  "key1": "3D4h1YcTkoLsiCkWHDys3gnebYNyaYxM7E23qxqLqpLPmRfD1CSxVZ7rgX8oHXeETYs6df6yGBfGqbwmtU1sP7Ft",
  "key2": "25CFVvF4jZbyoEwVLuv3pi7Gq488uXxcEcLxXidaBcFaeLr2c8KHB4J3FPYK91YmtxJLaKbHAZegoUkhjRJhN3HB",
  "key3": "EkGj4iwKLCLJ1rFS7yATKGr3FqRBSDAXH8rYqFYkwwe744HAiq6Svr4sAmUKMg4BhKkaQ88JxbvWkXb7a4ZZ2E2",
  "key4": "2cqk8AiRfK1zvs7fg88YRwt99WsH6yNY9HcvsRU7XXaMrRxEJn1vpBREdT5pH7N1y5gCDfjfnPwWszbWdj3NqzUE",
  "key5": "2ujPmtPYB8SXBySHcZnTojacBPJYKDChrkDVzjiFuYZGFYwEgimJktZhxPAbbUWETXprBZGmPH6PeDDcAGgUbSgo",
  "key6": "4hBVGZnmqnGq35X8WRRH7bsoi7T8pyMT6aH7wA3kB3tE6eLS2fmRRZbuz5nF2pZLR1MJwLCDFigRrxCdLczauaCc",
  "key7": "2oxN3uJboQQTeehbRTDCkdTCG4fQp6eySqcs1YyQxbj6ppWU6rCySZdTd667JEWA4s3SXjcp7gjYqGdCwBCLkxUb",
  "key8": "47yQgVWAdwrtjAPCChheb1oq9EFt6zPTnpTtym29DY4xiD4M6wsgMv2EdR1xdQrK3T8CTrsrU2rUdxPhjDL2QqXE",
  "key9": "3MbcGjbJJErogRT9NsYjs5nN1kgcjQ3VKyEcqMKM4aeh2dJ8hLC5cDZEAVanD16ajLpBTNWvjSqddiajsG7fjboV",
  "key10": "2SqAfgWK2Ft1R5CMvKgcxQcbpjBE2PAra4drwBpKyaWqKagfWigRYKocdK1vyuXutoMntwxHfUd3qW3Ur5ccpHGq",
  "key11": "5baHNhJycj8goCXgNRP3MXCxbeYDh1HVP2y4nwbZS8RSGRNASpSuDPT6bQ5pJJb3otxZkeem5A5VBT3bQzHrpbvy",
  "key12": "3A3QzSk7LHne9yk43RN9MSjhffQX6Bi9GymT8iKvaU2yMskMNTA3Z25EZx4UTNeLzFUtmyXD1t81x97nZqTseaxx",
  "key13": "4d5xcgahHKLfzrK73bwcVBjEUefeoPF5HGCDiqHdQvJQ9QB8Xhiaeg7f8sohp8ogJDJQmyxTkfVni45Ls2YV2FP3",
  "key14": "4iwBNrCWCktAgN28u5NYSp8q1S39kbfxujDcpuMDNrzf7gLUxbVzEza7opN8tiMGG6MX4fHN93g64Q7eocsSAj8d",
  "key15": "5gZrcc8Qg4h2vtvYxhzMYpmwSQ2aUhZ1gXyKG69NLc16EuC2to2iFWtboPk5CYH2UNgSDAhFDKRheiyYP6Lkrrtc",
  "key16": "2GWyey4Q6cdFkDkqS3xU7UF9CATpAf1NEdhXPZjMWznpReR8YpkfDYrfTGgu7C7yuZAfNQkH329ADPZn8eNJNMBh",
  "key17": "4aGdZ6SVqxPwQYLzKx1sVDG6vCWtyJP7RZrXSm5qC76sboZ8ptPRv7Crx2QhvaWeacFvdwcDYp3SzdycNeQrdtFT",
  "key18": "2gQr15cmNUwyBKRmkgeuxVwMbK31vZUCtj3mCw2CNm2fQCDasapr3Sy5JVMJfzjdcFy64TzvwGZePSAH94YDCozP",
  "key19": "NpkN4TKSRCegF4ZeELGpSdZLrSQYQwfpjP51dJpL2L9ES6wkC77ibW1s5DFzeFdM2sX4VBRX3MMvGCzJAmtC8Kx",
  "key20": "5UUxKBaF23MqK147XnCBdyFv9CfVZ3C4Wg9wPzXtqKjuj6Vi8b82eJaYMzsmzkC8Uzt1tBw9XJkji2cBf6KHzQ9T",
  "key21": "34JftPWpAqhMxM3bfdyDLK8rtbBc4Hp8dzHVWnmQJAp6DovPHLsJ15Da1nkjE8qfUb4WE5KMBhgZxUJaAaSdrHcu",
  "key22": "2CHE2Mxe47cbp4vAZcYwq1SHLiiZNiwHTXXMgFqkr2tAefcTXW6Dy3r2MGc2BRARmXvEgH8MNAKK2z462jS7VaGE",
  "key23": "5w9PAowQHsDvgzLTuBXzDXas5afmG1riB85b1GGtK2cvzGHR795s8xBby2dZ3kQBZLG6eau6GVooZ6XdZbi7jY8f",
  "key24": "65Z65vJVKqxCXiS1AkabR4rYmkB4DpW1AhBdMYKgtkcEjiSxB2SRWJe96QVk5aTzUrxFjyFvb93w3xyA28zvYuHE",
  "key25": "3ij5tDyTrPzr9QLRxFnyi7cLAoZZbxGhHWzk1A1Ro5j3NaSseDyY9QD12CghhXWF8zzCaUZWcow1T8sdmQF63EB8"
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
