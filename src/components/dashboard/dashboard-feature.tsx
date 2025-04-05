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
    "5LiKnjgC78bZmMTUpm5XjzjmknVvdXX6YDZJ3DpbU2enrERHjuosgmwx2hVyn9tExKaknG3xDrhMySgyApEPz3oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2uKcqJxD8d2RMbpBvsjbkfLx7Lg339AKimvLdAwGK7F47cYGmNxMBQe2AmHBFJUY1AMYSEHkwJSSxZAcaDmpBR",
  "key1": "48oFR5sdmHN8NGfDto2TXUmJLhuCBxZtWTmrWADoMpkfX48euktqpX2vECb9ZYhCPT6ueq1vxxQ2UQWfLcQmp8CQ",
  "key2": "52YapawMCHwxE9Qk4U8S8fsjbwbjKeG2LYNReRtvkmTRcF2Sbq54mwuDUP392JXfHHGnDTeTPi2bL3ge5dd1tkKs",
  "key3": "5zZrfopUmHETw1xB8QVRwSMBqMs4UHXgWpRas5Rzvvh5yeqdULf6grxMdaDd7v4MfZtEr56ZVNyYcE1mLEMZuq1F",
  "key4": "546hdPmFmtLMaR3wVdHLd2ocwLReG1kEg1jAFwjHyqhcYhXVLNUjGVg91RAHUfSrFNQXZWG2TJtatuAsJAYUe6f2",
  "key5": "36SECjJoCgznqhoFw3PpmgzQQirMJMi6SHC7DB1hxWDzj5P7K7BHum74zaSJK7bG2zc9H8MGVrzWUWz2Nszvpgz2",
  "key6": "31Zf7zedAMGENQyddPd144AZkpasGsEAaeGnotdh4wAwMuoTVT2oB4bfVbgqtzAWh1QBVMEAN5sYEFaKoYroY6UE",
  "key7": "4aJPj7nWvZK6z1VqyMCxh4iResDcmgrh3aF7uRC5unfdQsibPz5Trgn5xg9Kp4z28P2mgTpY2LcNBsFyJsR1VSXf",
  "key8": "enS18kvUxMW5s6MUFPTHmwUuvsZX33QzpRK6y53P1B7jJUi67Z1KxmVWwLwNTeUiM1ePpWVV4wu9mUWx2WPsho5",
  "key9": "2oaLW5MPZp86fiWKSJnZdsiUyqWPj6rMF4HzVUpJHiJVQBDzECbhDmBmJ6QmhY8t4U7KUDg8cSR9LncS756WK29i",
  "key10": "3oYoqK5YLDr1BPLgH9mQ4oNdAkXUVKnphfNyNVdV3YXakuWK9e7QsRdjNK9QvmaXHiNQi2EC5urZBMyjdxdsrPE5",
  "key11": "64LVb6vqTybfvYwvZaUjecDMtvW8XcNo6pZJAEggwvpmAwp2YSx6uZocsLbxmzmmt1pcJvWDJ2UrKJSUXzAttZRv",
  "key12": "oouk3eJ2RKCHFj3R52vBtnD8NqJMBq4VZehb5U24VWMejVmUwyzNkeYvoVfEjt4NvayEvNuswi2BnvowLMxQnh4",
  "key13": "2iiMjwJLEJsrwEwW6PPGxDwqJLcdVt5d5J6CEJXxP5sYcqW76ZWgv2tXgMhEcMJVdRBjYZLUsa5Y9XshSt9P6rPD",
  "key14": "7xWNeum1HNniqkLVx1wu9R4TyTJFzYBhfAapSGWhjezFfiSACw2VPAcFmskbHJHM9YHE7LE8tXvertsWGP9Wpjx",
  "key15": "2WZWaQyL1AXM5JWNTMXXYnHQfvL8LrXi2VVekFvqYxid27sAGDnckdha4bqUPGdSxcKqEVQtsmUVGuATxgwj39Gi",
  "key16": "2bajPdrkgivtzWZFMujgNUUsWXwNhKNZRcr8PjWHvFn9nDaDY9kq8T2SsC8VMgV8qKZyAAi5UQ7tHQkKs8rgUDxZ",
  "key17": "iuCpQXNUA91t9oAXHrFDnud7Gr4JGreZAMHDusAe7r44K88k1PjUPX8MscCMvM8dJWLiPq2HmQYxrsZxcZvE7Vp",
  "key18": "Q83US9TtLuvr8bXziGEcLWRVzd9ftxBcv9Bw1RZagc4qrHSS4mNThedu8hrxxYnNeEdMksta5eXUcnq7GaC44sF",
  "key19": "2CGc32DTrncUHVW7BdabT4YUkpSkiHTCH8GwqQbGLytpXbwzT8SqLzg24K1mybKApuK4AAqm9DcVLYTZEsnwr3wG",
  "key20": "3oAruTDDunbE9L6od3HCMCyBuKabHndgn9cVziGH6HuR86NefgKNmFFJhzrZQA11aoSkZUn7WV4Kg6WNnzYCCC64",
  "key21": "5FR9DhcPyagSq1DfTa9cZwSejsNWQjpH9A8JrPYGiGZbLMkYH3xQPo9UBnjS9pFx2cZHC7s8HU5nVzgfGA68YCEm",
  "key22": "5c4TcHqq5d6MD6MZPMPHb7jo3iLUh5WUx9ty4ZrJXH1zA7yLrWTMi48s9j9429DsrQCBWnaGt6x4HYPu97RKG2q5",
  "key23": "2VYFdaHxKUQ2aR1NTH1Y9L1eyB4V5xFnsd19KyrQMdL86AeAFWuZDQKe5Ah7QUjUMKP2uY1DeK2Sv61g4JtdrT7n",
  "key24": "4x9X4kBWopAu8RbGw5JhK6ct3eg3cmcjMWrjTAqbGCs31dmJvsjhBfrTTiDN8kFx1d8UczGzUq2TQfXX7W3AC3RZ",
  "key25": "5677Gf591Tvv2wpPRddG16Mwi3tyGCfAQCj5NpT76WFDLFyEVdDAL87ty1YERaPRQ4r5CAKR4egGaes2Y7n24oNG",
  "key26": "47XuWqNFF4gUo5ZrVe53No5qjDa243xdQkt2HdmUf4ggGuHSR4eSGL9ZsgQExQ71Naf8csWV3fjMzndSA7W33Hs8",
  "key27": "5euJ3bswdRtdiKiBns9owvt59Vz9HiUWRpq8eNR4k71LyFFGo6YsJBVk5QZSGKfBQaqh2B5cF1JeSYD2CRHze3oQ",
  "key28": "5c59DVBSrtKb4PmEy5naKzkWRCmPHHbdbA2rfLHEEn1ti51jDsMiKFqn6v3EUGuUmqinvHstdmt7EZZkMC8sSVBX",
  "key29": "2tV8C9DdyREo5TnRvkqzdy1SwtJVwFeSoL5bGUhWJxqb2QeYX6GQUE2qsihiTzv7H8XwucjPtKdmmbevEJS12KLk",
  "key30": "3T8Z1mgP2uKFQGNosCAX4wpuJCD4hZjg3rYVVSfWJiAtsDWC5VEaiDKvwKvW45VhAeDaHaWxfWJTXAN7CFyQa6Vx",
  "key31": "4vM5VStm5q3PyNgtqbm33efmMHkBNncz7K9mcAHP4TXFXFf47EwkPAKpfNp2HwkcCZSYjs89bXyXomTbSUrvRNS9",
  "key32": "5oZHHEKBGao3Kcpq8TQS3JeZ53k7XVaff2wvVXaA2cRbRP7rBC33gnCfSskiQHnPkqb2XzMEYz1wHSdHM29nqhQN",
  "key33": "3vVcPr3QWpU83dMVxauz8ChEQ5uqvgcVHE6BHUwJDYvJk4JX7mKgmrvSqVaVQD61Yk3uK6WhAamSB9eoiD2MHpSG"
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
