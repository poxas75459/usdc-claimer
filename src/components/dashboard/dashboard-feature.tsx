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
    "3NGzaR5S6smsv8y5vFPmHQX4rCVSjiynrwJDtm41wfAegEhQNR38zUBsLXnurXjqZRDiuUXKErFasDgQgdjiJPD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obcdLxi1ASawmPq28QYqW8rjVdAMm6WJ7H24oZMDjJpgiHpjWxM7EGJebupwZ9b3184hVyxz5bcjeuHW3Dh5sRS",
  "key1": "TeYsuQdJBCXQiM1YKbWSJcBb39ipdbdrKHVQPYKhRvL7cRiu6a1DWtWBd6E5HXVHf2UTC9PWwHX1zSaexSvvbc8",
  "key2": "51XP34iv9M5XkxJMQyAuqa2Ao2ixDmJ2ijLxHysUBVGvWZtMoH2RSkcyTCas87mwnRZ8S4xpUTWU1nzbu5uKGrKw",
  "key3": "qux1G3G8BmJDKMUirhHJRcCJHDhiiRDce9b5bi4uigHHveN94Rd7oMuPj1xt9Usq2pvv5BGhyyzKDpBg1tyA1NL",
  "key4": "3BD7Pjis9Lpn99DUHnpGSveiuqbFaXhLskpsLYJYN1TvM93f4MeT6iLHmJwpCAnYGvGRpzHheVPvXahPBZn8SoHx",
  "key5": "5RqKYrmiDkufhjGLYYtcGqfRZoceLvDy6kcnxK1xuukAo7Yc6x1U9wBeTJPk7rCyT6A5ijJSFEx2UDodGxTEkuBg",
  "key6": "2s2QrtSKgNbRuGswS4xChc8H7XyYxBNDbvmp9z8DXHYuDFGUc2cxywxUAxZ6fxqYeAzM2t1hyMKVoueGPsshkYQJ",
  "key7": "24hmRqvyAwrKCKhmmgbnS5Mcc95YEJ6RbBjgFiRzLVum3Lwc4FoC11YkqqUbqhTy1r1wW26sZMNUzQ6T2UE52SKM",
  "key8": "66mMFenCRYU4c4myx5GTqFmx91FKeWi3i8zhd3vthNVPvi5rSw3fqDmswEXTHPEYBoTeMEuX3jCu7QEscU77JgQ",
  "key9": "32AbXxzG3h2PryEC2by28YZvH2ENU6AfVVknp2Fio4DmPdeygRTH9BDnQhwDndFNL4CsiVNt2u7GhuvzdX3osbN5",
  "key10": "V3j1qq23tMDv8GQXWJt41BRmisD6cTupPW6WsVFKwCN85MQvrcPRTkPth6RBGTyCGruJ2VuBKM1rMuWrm8yLjxi",
  "key11": "4C5A2dabmSaBQmVhFcCeoK7yb6Hq2iDm1WboYJ81bZmB229rWKRGh6rgeJL63DDWqnuRkWfVbLLTSZC8a4DVT7bm",
  "key12": "635hue71zDTVXVxyWgqhrab1F282GKLfE7bGEX9KekPNe412moYxd5HRRQfxCEVVVgXDQQwtixmB39ZnqEm2iNZG",
  "key13": "4uLHzJLWS6h4rKXkioxQFzoKau25MaGk4Zi5tM7eSWsgsXMH9rVmq1q3RDSWHpMZ6P4uibXTGUsMSpoe78bvn1TW",
  "key14": "3BdoJnbaXNqFqRsQeLiyjZXdH1LemnHEoCwXY3bbyoe1dWBiKQbV2nsLEg2GHWeX6m42YKYhT5KAbb4CAtCA5SQc",
  "key15": "37QyJH6yBsTj33LxmVGhA8zs3Cpmyw2pSAkXrDRmYrFsipVuiegSdPWp6SZNGXUdkgh6QTPBVGHozjX3xiYoaC2B",
  "key16": "4Y7V38Qnv5pgZqeW4VznFb6ybC6KJGqiyqajTJL5iZGZHX9Rpy98nJDqQaaKiKbPqbshRSR19xeHuQXFu86uEggi",
  "key17": "viy6xDv8AZ7zXa1a8w2X3YrRcq8MwLdMnmoYPBouWpHBvbtCkTpwB2yf9zAkrZ9JNXQHrKDgjGMXMBoFSYzVA4x",
  "key18": "2H8uiw9SaP5pZvCnZzuGZYRnmay57jghL5UAMzATuaz4z1yvBMjtQoRU5nyLCnfNqQowe2CuEbdSZfp6kbici9nS",
  "key19": "2Y5VER1Q7pK9SddetSje8WDsQCxuM4vTf36W8usPzgNtZSY6V86JGLBs6yHAzxNVyRBXM5fqj6DqWpcdU35q3gko",
  "key20": "3kvPEKhuQn8mS64uSE48okWLuftfs8rSbJ7Tgj6Q2ZYSRbpVj5AM5M68XivzqzNtFN6G3rmg3YeAhYm3bDH44wiC",
  "key21": "4tA3EPXcLV79GE7f5PsW2XE2kZUGEqhb9DFKSXY7q1da6JfnY6fnTB6DmCGF6qoUHVpPj3ziKo2FN4q4jCwDFRZt",
  "key22": "3KZCNWEGeibXzz1qhLuUzyGb4cvDAiZE3GgS3hieURZcAQVhqH7mvsbsRKHEHs2hW7mdAbKJDfFJKDkmD4kr3s18",
  "key23": "2zXEzQyy1XQ5mxpZVEi6TpS7VKHkN6zbbvwutiv77gy5Hfg6x4YVg2WLFPx2gpa23fd5cRRpmZ1jMQ7RoSuP2Zk7",
  "key24": "4Nj11bxguNTUZ7rFhJw6uZQGn6LuDSUqr7x1yLEyeR9smKVUtggkqY9kgM4uVFsw3WA3U1He8JRQ9JLiEJBRYbCq",
  "key25": "ePafWM5McNWb1LJJUurmgFreLLfivw5QQHqL6YwjJidjeuYeJYqkKN7UUr1tjNKEybQuNTrpBpD96ygNYcf7mBQ",
  "key26": "5QFgwAj2PyHAtJEhEn7sd1PEYFLZjhnPmdBvsU62J8TiGmuJLxCQQ713DkXiyaSvNghZHf5FXRE51fAu6CcXKkyC",
  "key27": "2niXezzcoabPBQtk6CCMb11UoqMrWu7mLHUTvF8SeCz24PfUQrHhV4zWpQRNKW1mfwVfEdPnaPkQ9NZcgCZneaam",
  "key28": "3dFo38AypHW2NAzZTQ1FdfvFjDmeyavVeYg7f6G7NfX5xRDrQhCmWJQ2gejMTRzK3vgiQaTB6AwPqReatW5B2Kjq",
  "key29": "x6rdCFWAuVEHo9MhhFSm7nfdAJya1byHLfhQSXcqSVfrHgxfp8STLko8kqVZ6dGiupafGG2pnNjxutrWNmrSRrN",
  "key30": "53nW8ZNGtvuq4hSp2Vr7r6FUDHCdWNZ2KVGGBjXsjiSCtZBBWVeGQzQ7oGCQDeoqVFgSjDHzGUFK7ja927KwKn6E",
  "key31": "3HVuR45Dx7G2jAyo1hk5fyTbJpqpdGfgaCmkd7aLtgfhPnyfBDPxrVjKPjoPPTq6mBPXeSeBeCCmM3K9J2cH4YA2",
  "key32": "351irTFRpRPZHj6BvD3PbZjRDFnC8zBxj4NoxvNno4JgkpYyMjBGtENeFBKorezjhVZUZjWYti9ZH45trpGPUfez",
  "key33": "64pnKJZfpgaTDbKHuNo2V4PcWuq3QcJ2gEE9y8eTQbzyKUdKntVHSdyGRbVG1VcQZiWehAUX9yPT44KKWqB7h8qK"
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
