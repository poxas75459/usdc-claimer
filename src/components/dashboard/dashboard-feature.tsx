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
    "2NJMQrMt6gywRuQXwNuuKwPGbXGBQZv3uTZ32TXUY7P7PWXbfsHcENwJZLYqLmJj99R6Y27Pu4mByEZwHXUYhaA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XfqQb7wNVDoqfb7A1pwk1CKD7Rm6dGLvAWiu2bWeQuddmCZgMKpTLpMSunM3wEP5wP9Dpc6eA5wwkNXnTEhtqWs",
  "key1": "4J3wZQdAHhZHDVmJnGJo4kiHQG2VjzvvT1Y7UnKTMkAvhKzbQpTMJ8VEsx6VDPM7R3ML9oSRqjBdmybz2LUsPXQN",
  "key2": "54DaN3KyhF6y6nFjNF3tuVG5HFkEkxu7g4ak77VU82TkCkBkg2Y2P1kK8sySMZsduGhXanx66vfKF3g7W7PEK1vS",
  "key3": "3i3jgip9GB5zvJxoNhvZHwWqhVE13QyUwHuEPUgzjuAZe9A7orZWfKTzfhydNckMpfH3CaQSU8Uto6wkESSEMAgt",
  "key4": "2g12WLYHWj5wRip5TuUzTrsxVj8J9y5D6VRQTuAbuEcsKcFLrST6b3p7GuyT3xK54U7n336CRgp3YP1C8LAixoro",
  "key5": "4reSqXXDPTEBhLpZ58yFgRbpuLHKrKo9ZiT1qFFW6Y1mJnojCMrZvBRPCHAeP8TLrFgVANm1uFiqYhPpNXwcT7e2",
  "key6": "5ZBPZtYRpkKUjMcYTK8WetQLtSjek9YCHZzq34TRtfY2KKdqbrgQ1aZXqsiKfV2Mihr1mPZFfHeTEAgX9w8B5phH",
  "key7": "5SYzQxW7yjXvRMTYJARn4saRv2CVpT1CnfMdCCqX2LGEscR4jvxfJYyGQYcVwXPS6rpHR8JRPqoyZGk2NjpJQKXh",
  "key8": "NpNBz2oNpSNYFMY6qzF6ePRYsM8X2kt8JVna9Ufu9YVLF3yqZQyqBfLpJ4T3hqDMvbDD5rr7x6aMo4ZaTsgSwXi",
  "key9": "5j1z7RtTt4QKZzh9QR9YgSXiqhNebVt5DXoyTzz7WadsqBccJSSq1qMaJ3WLVn1PUH9Me23ZhYwpDXu958kqDJQM",
  "key10": "8HPUvN2StryLHNSQLbANJAEGgTuZVBc8LYhtnwAK48U9AaDiwktQ8MRoGz8KDpY2WfKBMCaFaRCP2yNDWse1jfS",
  "key11": "5CR76wdPTyYgfzRpkQwqUBjv9zDRRBjcfs18Z1KaA6APZJesURkra7HBTFdbpb5Q8f98YRaEkipuFTLC2mCRuKwE",
  "key12": "Sx85WDWq3tMRiyv5ynVFDRiVetCTyE4hSixDqwumNTXLNbNRfLj7Vyv7b3wEPuSQg6YEDffk9zYn2Je9gnephLA",
  "key13": "4VVnm49Q6GZ4SJRkNjZsP6cgsgPbGuT1epMGEbz4V9H4rjx3VjxytCmN53nFAmwRbnjZRSxzi3nQx5xtXWaAMXDH",
  "key14": "i94w8cGSSeUtPsYcERq1SVo7FQqYXSf8Uq5fjxj46H6GhJ89XdPXUZCeM2B5GoYKkDEW89vxmy5vLbHfPW1kVHU",
  "key15": "4zbnQUhQLwdxNQADyVzU7L3Xnx1y1gbYoy73kULNtC1PEXr3fkjBKurREp6B4QLn1apWReoLgC64pJhpQpYXMzJk",
  "key16": "8NJcfKm1PT8E8wdJtPttgAiKiJHmNJLiuE1gdQcRA9RJSPD9gUbXCsaB3HPjqXub2kVnG4dMhxxUWf8HgjEuAcC",
  "key17": "5foWAcAAM9gLkLfrh3MT1C53WitdZnd3vu2RUGgNehWSyJyMzaQ1x1n3zkavZDpxDkkC2cjNjaXqNyHP8jrqodGo",
  "key18": "5enRUbaEU1ef8RsazBiDM63fMxAwuD9fiQH8jMtL8HE9pHJ9mVPsuDzotDB9Wiku37YhAZsiYvvu7zuvYys5iEYf",
  "key19": "252hX2bWfSCVqXkm5iSmjZXmkmzfiuk6G5bgeKw8xLKA419dXJyQj8UaXNPXjzdL4QiuTZdGryfSmmcyeB8U1wPe",
  "key20": "5qBGLtCNwFitegC3Dd6AJMa6qCCbzzLeQhoNKPX6wnqGjrnXnk3R2xZUqJRC2f65YZSSW6E1VrMigdDxZJqGZwKo",
  "key21": "LJaPKNyzgjYqTECyFz3qfcEXo3WPBHweuYuRc6EqSK9fyAA6tjB4ENRuQgxn2nGpGxe5cnMXpCK5DA3cmJwUpKx",
  "key22": "4KmJHvPT6CBczZEPUfKd9doTRNjQqrvPAPLmnMMLP5cPpaJMZMQkeVA6caPowJdeRgFrrLkrFeYArfatL511XWCa",
  "key23": "2q9XNKE3ndtJUYraCxjNRWadUhxxw1y7m5RTET7mRwaLztbJWmDHt45ZQRgcQobnEft1QKbhp6jWgU8B8JCxtPF5",
  "key24": "3tqjY4HJnb6kzU2VQY3H7eoMYST8cC2P44saM98e1MVuhZEeyivNhAaVmftfEpXcASucjCbCjRAm2UpoNPzuvhi9",
  "key25": "3dyThbL8CWSZrdZCi8cCGj9k2JzEsWRdq6KEd6enXTsKBUjLvBeWxb4c14kPb41TuQ86YN9s7o12t9hanPgsxe4w",
  "key26": "5sJ9YhfkqMUnb9ZPNu5xT5hyaRHhdw9AwoQW7HV26jDHVACqvuCdKagoVUB7U5dFJfPs56HBiAwKv5KJ6vb7tSTZ",
  "key27": "5s9Nj2CNK2Nuj9NnE7L3J4DGzfs66ym15XK8VjKsYCNJuZHjVJXZeMTgZB81XUkNHiUvfT66TRuXaMw52J2cQVwY",
  "key28": "25yGyQS4beWvo1GHEqAswko1wUUShEzKwgvGwmNLPSzec4fTKogs6Kitn3PSPfcv6i4hRD3t7cdApEzVVAE8wUvZ",
  "key29": "2VYHqAezPeksh1VR2SsfhQy44CDYt1x8zDCgPbiCNdFjtcrcqWdFW8MG9khPJyXjofkmXW8W4SUV94R4JpWDkHvo",
  "key30": "43ZC3vsFUUTqWe9qDyAKamH4p3dGA8ptmFjvPtVSMMKcVyBs4fS39Zb4hsX5DgcZPnDBnqNJfhbYUyum3e6JDJuU",
  "key31": "3ZZVLGDekxk6FQEtS1MTQNtxZeGf7H6c6FPtEfPgECDoGbTocUunv996Prrks8zq8YxHZyaehr2528CVhqTpDtPi",
  "key32": "21cKuQKuaoipJUunPxsyV3H5eyMfGCsGkxJ6d5ubkBLS18WhdRK2mWJWjZ5nvNSyy42KCPPBoxb7HXZzwcw1HgsG"
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
