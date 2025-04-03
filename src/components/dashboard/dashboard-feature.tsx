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
    "4Dqr7pJEQSympVLJtnmca6o3wDY4SoAZg5tDEbtmkYT2trBnnhUNXJPgroWtm1JRuUCs6wEJZEQvTtKbqcgPsfWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSM1eWnZZaz5SQ5cwebungxFUvK8yJALx8Wu4oqEMwCBoVo6ipmyGLDBhJ6png7CyDw3nqUJBZ5UtECPDSDd3hr",
  "key1": "2b1HfYi5NbhRhni64tKf7CKQ9vHaSz4A2MMSmoMcjg4CJmVNqPFBTcfufBN8WzZP3bPieRkXttLt9pKBEJ6ZVWhM",
  "key2": "iykadn6EMDUB8WG5Smwvo2XRSqpze3t21Z3QTi75QWBogU9yXStADhdsCW1AnS66Y6y8WuJgMTVmb4N4toJ8uam",
  "key3": "3sCPnFCXF86dGWMh7jkJpnN7ftjTH6rQL6UJSmC6j79hMZUYjyGuSu6LGsCB1uN5ywge7q5ExTqRwKUp6zSfUP2h",
  "key4": "2xY3DjGapeLnGSSqJJQMgCzmjomTHEkjHXiQr4jedQLwEsjggtvVpSe56GQ2uLZwSBSWpk2drYzUjHGej75sPhUJ",
  "key5": "3VEZbudmZrfBR24Rx4Zsj3K3fZTShLNB8TpNJwBF51q2CxD1Sefmw2SGsQtwRjNpPSWQ2bE5L3jqbHuQCYD6PVcq",
  "key6": "3bGXD6DqCPSdTdbgF5ATD9Zjbdr3S3jgPy8nNUKjqPrjneFR8Sw6Nz9i5pLKu6GpnbBR8gA7XFxoQYWQLpSDczR6",
  "key7": "4RPPp9Tsn4CuYw292oQvfWRowE9iFfeKuPh34PiKTKyM6TQsVfecXsRwCikVEkeoor2AP7or2pTk6Kny7h37UWGT",
  "key8": "5Q2iCHyzLHPvQjuRHm7jRVNoVvZa7P22YdiAsjYtsuFw5qQdu2PHjskapC64TJFq5dDZUL1fBUFUxfhj359vZ26p",
  "key9": "j4TNWstsPo1KQqhtQQpowNixCAnnCgUdS1yhYRkw3VFh2zb9Q56DRW1ihLbuUYkrCXs7iY2hGx1tHMvHCZ5BUHf",
  "key10": "5YMQx2mBauSReqAo1MvdG7nZPYGRHHg8SGhgPfhbL6vW4Rq8nLDzHXUiyLakGTAsXJn7hcAxFz8ah8wyHepDn6pf",
  "key11": "nGHPnFwjijbW8cuQV5m7JyDaF3rkSzEUXRSquEdQAgGAafGSKC9KtouPfqKj5kuuWUPARdXgQyvMZv7x9Y9Niqn",
  "key12": "37DhDwK23F4AcYzvcroGU72Qb5w74zXHCs9MXeP4vACe9H1fctzAeVZchxTu6z6g48wiv6mUMXLfp12ic76dUEYo",
  "key13": "2TyzZdubAKzPsM7W3hjqbjPeuG3wBxmXq5ksBPHNSLibYaaRQkV9DeLMHgN3L3YfenMsonzQrC4k1ntgmVuavvHh",
  "key14": "4uuZJQH2ws5M8KRc4sVJyqu2jQjbDvN76xoquzPGs5iEoYtgSSkwgiuMkS6tQPzr8BK6GoTKtrKomzCtDBgJmUzb",
  "key15": "4zQB1DhkdrSF6ZVS5rFegDxjHsGVhquzF9rqv2gv9YN11i59xv8Npx2u8Lzy5zFPKvjnRBXARUHWWa6opuXfNacG",
  "key16": "31feeErCU9M1h7PBwUYUYr9ZFQFMJ154kFRK6MaTLkJeDc5gVR2LHyXPcUi4PMaCz87fxLgAf5X9ZkipQ4gFJyWd",
  "key17": "2w9nP7wZMtxZHbufkK3JANFRy5XUVXKkU4hea7QaJFroR9oubuSL54xT1zyTL836MwVx25gpyuawhdoBaXFNZSSi",
  "key18": "3rq189DRrjPGjdJb2pBQSbGD3LnSJJg2ft7STc85k856TR2acZmSvKz8c6bb9imAQUeADZuHoME8viVmvarAw7o5",
  "key19": "3kx14MnS9UeVVjRawEmMRZKtxXQfjX4uPPzwjGCDH4CCDEz8UG4FN85bHV1VEJo4rynvFtt2fE7MaqpDHnNXNsRQ",
  "key20": "39kQVC7ek6cTyxReSECLnHkrE6NyyReCHF3SSnRMxgKzX731aCbksxNnQdtraidv73fu67cP7MUmrZhgSSEasaaY",
  "key21": "2hqdeDVJaqvA3uors5ZgGwtxVkFvu7etcvWAepMTR1LVfhrFPLaKqpZQLAibFf3maxJCTQLMV6zHi23te4BTzhBh",
  "key22": "3FSWN9axpTiRh2ofMv3Qf9T8VQmFK2Fq443Bka1w59mAtFrnk927pDk78P5iAZS1uetCyV3UhjMpksKn24Qk1qzv",
  "key23": "5uNHfYAapPqUkjhG8QqjxmTm3VFhNFa5ZnsKNjPyn1mPMH6YyqrtKvSmaiS2AxYXBPTSrbNapK5q2s5ZC32E6fXg",
  "key24": "28eYLYAcSoHsv7R4tASB8m39rdumnwuehviP4ABBsTCx8iMfUUwyuonYJyn9FR7bae2zmhKS1aE5LYRpEdNDiKHo",
  "key25": "5Y7SDLjvN5VDPc2xbsjrWwxPpT5tHUzG7Z3t6N4beYV4qjcnjY28sL7ux7qrnEYidCq3Y3Hh6G2VayQYfMSx3fJ2",
  "key26": "JjEzDVc7k2Mw9kUT8hY5CbPBCoZGVRjdKQhPfDLpproqWxuSv3WvK9KCW2kvFKZKJBbJimmqgeSaSFrwNXcudtA",
  "key27": "XgC8CY3HJVYw4pg2U8fEn4bC9aWRWeMCPD2EXCrLseNfKB2xawhDs75AEBaac12wsZLPvVyXesrYP1iNJkZEGhg",
  "key28": "8coZWzTyx8e23DqqgV4La78THddCpG1MAy8uXXSqfqUYwbBrJFSZqgQZZgqiNhRUbcs7dJZSSBp3ce27C97hadM",
  "key29": "ThJfxzLkgmeUyXEgLatM9UtGKtqCGiWoZys988hq9wSBwmP64Ua3GbBQMVaczpHmLrwvGBkq1VxePktPe1goBjw",
  "key30": "2pUTxQWDjw8bA5YzA1CYUqohynQtnJtYfcGn3FBHrCXkQa3hhHYEtXpti5XwbcuEXYpfz9w1HbCi3mnkM7avqgAo",
  "key31": "8SgNWrczy5rhXMNbU9nXTBipgRj5EqZaxQ2QjeSwML2qijDvnaAUqnHV5Fzyt1WoXnD9b65vRgAWyfRnCUJq7iV",
  "key32": "5oQXUkifKYVWsdrvUtQ4mKLE6GKTWGPSgnKGFAVvWnvsjvc7QPUPGzKDLfj4LWbRTwex89QXEnERQkLJVDAU8mDE",
  "key33": "62WQq2mHhZPb8m48SN2FoXAwLMViqUVkEAQczt7rPuFstL8vpNiiKsy2a1MfD4hUGTKqjwqk6otrfdiaFPrWwCrL",
  "key34": "23vyHrH7mTvpjKwxZo4yGe6TiCDh9Qw43CVRgfEizzV6aAPUvKuLitsCcY1GYKB82sixtpos813fAF7yMUQ7GxbD",
  "key35": "oU9kQeWZ1griRxuWJp8carKLx2UTcAxey852Rw12KMMeP4wZKAe85oicaWLSSMiyeW1HUXiJoD5urYzypv5uP73",
  "key36": "3BQYr9jFqv12Y6RZ5bxPMfFMPTSEaxAgEFBKRDoUnnFo7ioagMXtamec668a57p3TcfgUdPFvvnQ9W5BskUMeUNH",
  "key37": "2xTu1bqg3xcGBhg4VMW6xrAENuuL3azryrvBLHeSoQfFpi1F4EQSfU97ckdsbu3AZ9iHmrWs3Sdd6MjoozL2L1yK",
  "key38": "HK5E4jyyduWZ5qqeR4QW2DTmiYbs3CCJh9UMfKUk2kZfAm8EdzcBcpz8uK3qw9x5Zqrcihs21i6Yqncfgw62kNc",
  "key39": "3LPFytN3obwLLTrr9zF5aHmx2F6w1H8uL1uVcsxDqwAJvauMdVsELTWWgbQJf6nN3L6gLuAdPPWyyr56MRrKzCvd",
  "key40": "46Qyg1q9xGYUGcQ6RWo2y2QUVXh8japHEUgxxgwfQLBAJymMRpj4M4akxEeDmV3ticgjQG6NNRvAZgkTghVyTpZm",
  "key41": "55w1Z3xGRZ3k2hgPLJoD9PkZksqK82DQwNDtD3maqu3eyhxG2PPVx4THcT9DapsWQHgTtVncCWCwKNc4TdwHaqqC",
  "key42": "3jyxGSCHp2gdyxh8YEVL7U7ebxfh8jYn7bgGABr6RJykcJAFK1cVQaqpaMeczoYgQTmKyenmQuh7wmaMcSompts1",
  "key43": "5DsH7f7HqQGmCmpT5gKfMv9QMKVadqna9SW8Bnmc2R8bVM9LckngkwGKG7a3UsAB5EXakQMFmHsE643LURj3Qewe"
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
