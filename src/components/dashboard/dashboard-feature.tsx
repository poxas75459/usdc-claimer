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
    "4Wokrsbbu4uz8K3wFo5Vdyc7y1K8hih9CYvAYUwomPQ8sjCd49dbHHMpgoFJkEbMxm6pSJc3roBnZJgtohMdJ2Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5789J6WBCRdX4un5P7ni1pKk3XTnCHvrghSfYyQeC7umup6jYkmGBvGVQ2nAffubUQM5pwYnPXdxjfVxpJh4AZLF",
  "key1": "2AYZnfSxtmLeWSdmtYh5DctKfXYbqdHCkYdvqSTPnbb5PF8KEPUMZHcpDribZ82Eri9bFV8MyyWYqU6VU6Fk5bb9",
  "key2": "4bwHgeU7WdsSfKqaVoRUD5No6hawY8EfV3ZJV5RezXh6f8avFt6UxnbbR2AVEBc9jryCS3dwWuMnbzdAEJaoxnxe",
  "key3": "5GgUi4XLbeSqxno24QhYppLijGrFvhimYmcunSYQdRGku2SsuuM8dAUm7Gcw6LfAEouF4HjkPP8Cgi6vabdybc6R",
  "key4": "4XVX9uWMgw3wVrCusYtaPAej4rPi8ndCHpv2xnPf1x4YJYfhdgmoy6vMCb8mj44kLtqmeGv2o9Fkmw3qaQxUvrBd",
  "key5": "2n6c1cyou7XDwZRZN5htgCK63FXnMfDZXy7bCh3S2jninZXwaYcqngx3Hg3PjPXQB9rEKFV4P1YPfjbk6N5uJHHF",
  "key6": "3FRrXTLLSMW6qps6RkmuongbJNsMFC6jFbzaZsvzZpFQMeetKnisZFzXSZGNq1xz5nvhv9VVmoz352iiMB6kR5SQ",
  "key7": "4mQswGLPs5yvsZd4qceVwYt3YgPnUrtNJNxSXd88zMih4tn9fVkFPRhSov41Z8QBsdg2XMhibmih7JuMn5uo5hYF",
  "key8": "zxCwTz4NFR6Z6cRiYu8PyutdStquGF57Az6hw5bfmEhqntnyd3UhddTeRismg5cLGnn1hwkqUi9KepuPowNd8jS",
  "key9": "4JpnZZ2ZjxoAMAwxNJtPMi2vTJTnJZQReZjBFkQWjxfHsRY7Z78VJGMB51T3AwhNkybFNHwTXNtMnDzTFYBHiNCt",
  "key10": "3ZHbhzVusiUQp2FfdjxrqoSr7ALWiuYFds3vUo6X2JThGjLe9k4fgvyKS2nMbvqN7oDoECjdPc86s8nbkfhMTerr",
  "key11": "5Lo8HGUmAWcorbgoCNJYbA6ysckCRVtL93es23jxF87SR6deqeAuCSSa9vhGUnoFmrMVotT5L1Edm2WiFP9Ctjgo",
  "key12": "2S57LTCWef4nQz5qRzJJ2L11cuEvZPNhM9HGJDoCnEYAzaFbmxrwpHVVPGiUFAzChwfGwYd92Pt3Wx24C2d9XD9f",
  "key13": "4fS2RfZKcmCNUjMp4pjMyKAQLGcnezmLwJyvcnD6vSGNKAeguqr9mBqLSDpFKLQjbr6dgZ8Sk5Jf4BbFCiSqyVqS",
  "key14": "4UZEkwje8ovDtkdyampoJFhmJuXj7NCrfybidZ18yCJNaW2yNrtCU4uaFSsad4ak6spZxJygEx8mBcFGDNdhd3y",
  "key15": "21JAytyxbXNcW5KUqoyM5tnFcekGt2arFroWdz1NCDgVHxRkawKUuVCXF9cdgbnBhX7cd2CZ9yT2XeaLwvZxqouZ",
  "key16": "347kqj6UEerUgrfR1UJcRCnUA7xgK9jKsLEFmbMjHW3Q2ecmnWFmspQPd1P16uEXefM6z98A1rFv6tHVqpPUGAu3",
  "key17": "22nPQRUVp8wTwkxZkYJSionahCATXVNcwS4X95vWaGV9AAFRC923TAt6S9eSxpxSWMwxjbksgFiTsvSeC5xrLTmM",
  "key18": "veQ2tXue4xXhZtTivYUJyjjyZVNMLNvcqzKjZGWyQZp6aQUqR8XYe56C2JLW9Yqpu6wu6NjsPrCu4e63erUUdut",
  "key19": "36oR4r2a3ERWhwPcpkMVfNh7HagnRgxoYBTwJUb65DZNakcxFMvgEbjVgA6figCL3n4FkgMLPYQPRzMdiCmkJJwy",
  "key20": "5j3m7pBWxEz4Bey9j3zosAPhfiLJqwTLG3hfPN652Nb6k6p7zgA1AMDjHeUy8epZU7GWxkBFc1nGHqs2xvKYtuzK",
  "key21": "2nYAG6bntVUa5yY9ezdg7f6AtpQCdU4o2jaSYyacFYxm5eEWwYJ3teDUqQ3Ba6bLEAM8GJ3x5gA8tTGjh4WRws5L",
  "key22": "3cnP5ReexJZWqeCCPU9PX4L4i1NhtbhK4AjzAcDtMrB2hVo6ukkBWJvKmKeTPv56tgX332aKWEML1hC84UPgsT9H",
  "key23": "3iNvggyjG2A37sUurQarC4jxX7SM9c9N77xEmJwa6vJfZGJUTpdrBY9z8qaYntVe75yLNADTmooi8Uj7Fzi2ocdF",
  "key24": "27cuAimjqyNuNZWcv1KN3PzjJeJeX4dEmh6ax1rtj5sZ3C699UKiF1qtfvdsoi686mtercnVXRY2GK9ZF3pNBcq1",
  "key25": "5tSsZy2zJ4APEJdHXbqvEx9qW6TJMKh8ECxvDVKvNTV5kbBdQWXa75Xi3apkfA1owN8zDGbzFrBjWMGeWtXruody",
  "key26": "4dr5WBMAemesUFSa2wGVSFcPZ4BscQfKwmqXGB9UAAVgQ3Hb69sxq57MQR43qCzXdWPxy7nVYVgkPWzUYuSHhv5o",
  "key27": "4hs323oAyGgwonJfY11qQRSPgmi88WYmeodpt2d4pCL54wd3HpvG7BqfrRB195PTzpVHMoeKSKtsq7mMVH816RLV",
  "key28": "31qKtttwgQ6vACBCkEDoRsPVNxN9ku5ev8YhQSKSoSL77GhszNFrtiLqL9rdBxK5MLNEXwkXwVJKgQ9G3qB8AY5D",
  "key29": "2EXuTkBiyeeVwgfEVrVMMyrnfWyCNLoRDdTJRs4DermHzZ3HBtFkuZVTXKMBB6WAoipTcaSpBmZ7cj7av5LdimJm",
  "key30": "3HnQ6kkirLrmsY8FLzVBDnCb6Cn1i7mL974184ypPvU2X79ooVds8C9MEgqcMEEiFXww6aiq6ifrnNVtjTHmdNMQ",
  "key31": "4UQsUeBBBHyJvERcEt6eJtuVj6KMqYcHtiXswvKjJkVdQetqukExEB8YZ9rnaRun2MEfNsyQR5wkcUPZiXwW9E7b",
  "key32": "2nNMcJgA45i3LP8KGiKFG4voWQ39giDG4PpD2vHF1zZ8BEXPM84e5MddozyjFuQ4LkPof1MeyX5dLK3ienayvkHb",
  "key33": "2Rr4mGG1kJR5ZDBo9yPT1FxJoF6PgV5BvJKjg2SaevV4udqP1HEkSW4BAKoCe9VDHjKLRuCEnkHRcQLAFqpJzRLq",
  "key34": "2rTZnCHN3ZKxEQFsdhg3qk6sqwSz2Eq7G7GxyvDf9wh522itYNdX3Zj2nPK2o5cC83PVow2cdFTFHXUBU6dxuA5W",
  "key35": "3XJMJz8A6ukdqRw4UXP27aBLXg2mKcp3cHB4kaRT6oqdV6n93F5bMzBuRpEhzExqLh7uN64BMVVwhHsuv9KDTTYE"
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
