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
    "2GRMtprMzmtjZTxxLm1wgwsrWaQS3xSnPv4tVJJWeF1x2ju93735ydg9DFV9P3yvWRmkFTCkCYpALvwt7xVjqp4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAHB9FwG7RQWLkBbRa58YrBiEypZtKQ7xx3t2sT6z1eS9oo3nkrgWALK6fNLnakzmv2yBYAT4RLHFiirsxHr41W",
  "key1": "4PDof86JswJtjEUd8yyP7M2aqMno76nt8bMvc1GYxtnvPpESbLanJSnbB33G1NvXNQ68L38JGcjnr4LC822bUH6a",
  "key2": "QBUvWbdVpCvjhta63GLbr5TZ4xe8GC66sx5EVAxqmGmc8FJukQF78PKnsC1piqiv5Rgqmreaohp3LakdHjX4oDt",
  "key3": "xkvq9s4q3W13ad5ELqWrVavr4ZioAjXdcS4NMTjefEJfb9YXzQ6Gw5sbmpAKUgeEVK6bPJGAjsJcTcTzkMkKf97",
  "key4": "hC6vmkRXGAHMQMkSZitGE8h8KGydmT6CCbCV2NefKsoLohR2CDYyxREVmmBTyYapwCWTqcgbKYdpX9FBRbEs1Fc",
  "key5": "3taAhpBC2Da1kDQbU8ecabn2xvLZDF6CXHqoFhd7CHdA63UDsWAEsXcWwDvWEA8tvREqjHnnVDLH9kt2U5BK3j6B",
  "key6": "4VMmydzFQ1uXpvxGgzCk2XSV3sVXLBXVwTUYkixS1qDCohvvWTNpdR1tqfkH3DhhgiaiXpoXtQgg1vHFYFa5r9Up",
  "key7": "4o5SZXmUqRFRRn9zU1311kxvVkFtHgkxd5Lvfjsu3CupHGEyeLrh5E3sWp6CzPsvLXFrNfvZXoWn35CJymCyWnYK",
  "key8": "4rF5uYeSv1VQYqmNA2veQbS5Hv1nhs8juZUXH9zDmPhN4nrxjiiWmfRp1BcfKD7TTf7XjS4NA4eviyS7Vm4ndEru",
  "key9": "5sNJyodxDreZ6fXGGfqfpFecEYY4xCa2iLYNs12CPtHxmDvetGdQrn5cATFmZxGw4RPwhQN4bcez7PCEUf5i1Bj8",
  "key10": "5j7ef1XgxHQqg4MeV6socexEhvsxVZyCBWKzoQR2oJq2YoydbbBBsBhw7qEaE4iF6JRo9kUnTXe3SMin9kAhCWk5",
  "key11": "vbkBqectnrh4VAcmpmdBUBwQ3BrW7pb2HTJihrJNyTZc51GDHaZL5S5dyN5sCzAwFBYNzaeepBBa4jYK6ZdTxwn",
  "key12": "2FLkXzm7uzsXjkcqC2fm5GMqCfkByPmoiT8bmX2d6CMmD8NXFCPwkCUo1QfuBjzD52Fv1TAY3G2QZ2oj1nQFXaKC",
  "key13": "R6EXbGPnJcd2PJVbqccLpd33WAaKxnsBQJrCjxtDmQSnHHTpXW8LKRc3aGfxyPDFehFYCP6WBZBvwbofXzHodZz",
  "key14": "gryEtY2mcY6jJSAeiEvYehFFxDmA27tn8TtocmRByaDcY4UfbqEaXVddD3EUyEXWTHbnicDaYysBY71GnKHEfSg",
  "key15": "4n4cNsZytLhZUTwJ5mTpaRT1CwvjARoAU3Hmvr1633RZxpTk4SvmRao9EZf63zFhV9duZV4eM2nxr8BsWQir2fHL",
  "key16": "5zsR6uVdvQrtUVSTyJSHVBUz7QMnbz64x46TZz1PCDwM4cwYiyikUiiouZZEZX6fv7RhfdUdonQPUWtPsK9prM2F",
  "key17": "5sHZ6RKYxvtfc5GBP8GXiHZr6JaGXvJKTLbx49yLjN25PXFzuGDbew4hossLQeLDwgt73QmsRJP5GVLjURJLWEz1",
  "key18": "awHX5DhnXU8CnsYkC79UEfbEZWM4eN3AtvCpNfJ1deyjVC4XibTuK5bRDm11pbgF82me3o14Lt8dMWSq3DHitAF",
  "key19": "5tCF6nAeQLVuTV7kGhHGPk36xXa86F8yQ36QPVVLahV3Wpn4MRNiAgwRaq2ezxc1PpjsfTys2ticGzHxdSqc4w9U",
  "key20": "2yUVqT7ftfo8k1LiWoRPjyQHiiBJdDPhtsXKEfiCWrp8M4o4KRYxX7qjkTbn1JaezmkXYNJGrGYkQB9Gtwr4i3Yy",
  "key21": "4SHvPBi15QKYM74K9meix9Pxfj4gHvYufM19nf1s3C92UqYSdrSX5u36oXyJ4x75tNFGdLyYRfQqtXJMijpsH9Jm",
  "key22": "59BRiu7ijRueYfXVw7RXqxvYbVD3WNR4r5U7qWD3PjbUXdu8rNBBA2vpf1tG9fRyC4smEukdVNhmzEyRNxC1ritV",
  "key23": "gz8Xyi7uHtKoPiJ3H7fcez4GSYqtxRmLPtU4xGWrXAe9YP7QhNbF2DH6xxDZEqaQS1AYjbiHrmUhYw4jjuCqqNn",
  "key24": "4KhgKKBHtMdf1nqcqMS75YFWQDtcLC6F2QVrxKojcn2nhZ4ryAiDUkx1Av5CzDtzJGWnSoV3dMYKbx9VkPzLE7aQ",
  "key25": "5rZqLah8gAnJrNqTc5oeK3v1oeHKFgRRyx37G3gxDcvqjuU4yHTGfR4wKMnHERQUuWJYMe8ZVXFTm9hcDUJbwZGn",
  "key26": "4yYZpkZiURodgspeZgEworGRoVU4uyiHoNCEnLWw7FuRE5n194Bvbbibi5si89ogGcVkqEtU2XxAUFSicvtD7fMn",
  "key27": "2LaNhPi9AMdKuEj92Awks2d3gMivkZb4mVSpg22r1fLBJ9SftQrmzGNYqcjSpGVdKefh5k21R2NSMS3foVYceQdk",
  "key28": "4qpTw88Ygd8LZLapBT1zJoxTiZ3XhkHx4HHrjM3bvk7pj43fppAzjzdZ8YswCGo2Rg55nyZj8j23eYAVfLPHcbf",
  "key29": "5mht9g3hrdskYL9sNfaSwdTzwM5fLN8nSp2FUHWxormqu71FMJw3ha2yoQVRcYJ9dRJqJAaYNTB4eYsorTAAUQ2E",
  "key30": "4xDody9mp94mLhS7DVQoVxek8sCPm2zFk5Sid2CSQ9KZqwKh3EnPvGKB4d6JmeFUea42LaeSY34JNEwXjUEqZi3K",
  "key31": "5U3P4ivMfPuPKZEi2iTPHuq7QBq8DceC3RY5eE6DaeA7ZQqqTnb7zrEm9dyibxjTDZ9Cpu8rNstJJkeXLphwKM3M",
  "key32": "3ebFf7ayqHB7HPyGNNhSHMXsL3CVrF8FWDLXdkkcARimpWv3PsGAJspMuCSD1cb813VtTpaW2FxByFvvWFkHUmGt",
  "key33": "4vdGVq5N9RvYDEenwuAPHQFuu7AjbJo7ef4hnwnFEU7bZWLXU5bsfJmUFCBdQbcjm2h4LTtL4oYKanKWEY2UAaqT",
  "key34": "zvmQ8CmDZpTiTZUgVr4cGEfad3pnEQtYGyu9zCaCSskrkGpeZi8wPHteXC38XMbC4ZYEcQwuaypLsxa3xHoHFja",
  "key35": "3nH2DmSZ1FdF8m4CjbEMMqy6FgjzKiBg1dZ6fj1C5xWrZfUyy3vzQ6sPuYFosVqbhvc4eHK7SX3UdaiYQPN6uJXu",
  "key36": "3h7dYvPhkngRMbi6nPgUis6rVaB93QE3gTzri2QkhcQXhZKCeEJcoJVrTt9pLjEwLi5DxTUtxQVyvEtFbVzQHBGF",
  "key37": "5Tnaa4kykoy6MdS8NgDgaRXM3YcsaFReBsqqyRoWEJTfS3Ant8uMkNNEiUrrupfvLEVmoqhiSqqXZU1Q6FcfXVkT",
  "key38": "22noTaCcqZVQP4AEM9m5fdyEAj7Bp1gAREsVb6cDtj7uNVGVSj9RDkXHhKkA8iaviqhWyvZWMPZsJ4hkaj37SM16",
  "key39": "ebXXaigXQbCystrgUjFH4awTeMmpv184yBzPo9kMjbrL4nimoVribqr5uzV5NexD4tqRyRMehCsffgjafPnGGuB",
  "key40": "5WvRgUSKGX5pUMncKmPZnRPHCvjHtPN2wom8MHgRbnakTGKgLPM6Cmy1MuuRQbKNcvJ7E3sfFaoABET7nAAH3oSx"
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
