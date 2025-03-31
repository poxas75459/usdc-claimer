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
    "28qmDhXG1FDzHvGCcUmUkiSAncMNugdBKHQ4BSFyCP5bjATJZUfQr6wZGXKcANLdgFeYB5jFchXG6FTLebHfbGZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21TciK5zkzgueCMntHwXmr53bRRm28HvoDwyd2fnQw5xsKD613TJ9Pbs7aDiHRgLauH6r5skTxjbNsq32QR8ssRc",
  "key1": "3ZHkuU89JXryXZ4xZ6f3P1QSncJcuxUwmRpv6Zu3h5a2qhfRBMTk9EFVJUemhrUz68Lb9h27fSTaWYuUZB7Vu1b3",
  "key2": "2qBmMoHk6kToca1J44tN3PsvojKV9uTzbt2KjqjfT3LiG6TeS2hBeZksrA9xoy5oZS1cQyG1bUGj9D2ZubrrEvG",
  "key3": "5garHTPiLcCdEjHY3MVQDdADEvVf3QRdABcsxqdHsde4fHGsiU3G6uttSyVf6BeU4qhNqkNo1V9PSMPEAFAjPAbb",
  "key4": "35f3htAnpcXt41SRH27DrZuk7zXtmdZjbu7Tg7wcd4WyRAdW7UHprirHy5kARHtg3LeR8GJ2jTceMesYKFrrSa6m",
  "key5": "2coM53hzmLEQmjLu56hfLEoVMQqsxJtoLFAMWaBNZKYdEhp8dT6RHRMRr4yhcyp2PirSG8vcFg8Udk7LsWrus2ej",
  "key6": "2ngqRtpSoq27tSPJdSX4RFz3vbuqZYpHhwrk88h3W5yhBMjhg1tnYRZgxxmPAanTeuJpJqZ9Mf3Uhhou6PxYXxPr",
  "key7": "eutskhww8u5V3TLqyQUTdjLJNE5xyqvSwPYuNrdvanKvd8kG27gY5DubvZjtjLGEmjK12sGXrkXKHS2YzqFnZ9Y",
  "key8": "4bxz7QxMqCLACsNpHRGxjSjcS1GRFdQHZrq3xwoZxNmjLiEPJRBUrw9JTXyMgmNESD8uygqz9G4r97DGUKLHJF89",
  "key9": "4ffE2hEtvccZTjkfar3MSxjLQUSiLiTKBw3a2EHJjKqSeBhhN1QuiUhLs9kBXeH6XhTfa55twBVwXomd9v3VzBFG",
  "key10": "2be5kJaagpN6BMXNzz7qmi1dPxYZ738Vo4N2fHAdCnrtmX2VyeNHWsX5n5e3GsaozE8onMaBm8JSEdaxKFBVwMDn",
  "key11": "65wpEVC6eHdmUwfx8bp2vEAerwJTvW4NcngQ4sfJ2wopaXWbCkLEAwg8soxF5w5ENpB2qKxPpu6EbVs7FT9zYsFF",
  "key12": "4qrksm4KojQKxdh4aUD4xs17MeBXAdT4rVmPkYY5D5J1znHwWr7MMLq3MNsDVdAyoj6QaGqRszt2YnMmxoceJUR3",
  "key13": "67UqF5ZJ8HuumLk215Luq817HwgC7CPjLGfUE5SAKxpFj1KkCVLDAJPkLCncMHD5sxou1tQmrQnKdn7tTYRu38Ce",
  "key14": "4twdGDo2LoLi1i3bUZBUZAM8iC75Fo938tmbnsm8db36ZfNLY7mHAHp1i6zxo5a2Wi4RRqw3ZxQxJzT1bA6rvJ94",
  "key15": "33Ujd3o3juDFuYWLvyfrySavPoGQCEwDaUK6nR716V4FSZ8VrYvhYs4U7nN932LnzUZ7QLm7GM7tVdhLfxAaT94P",
  "key16": "ec6U6DPZb81B7PBivWorz7YMhw3Re8KgyYTPStJQYD4LcqjmYkc4tbrtwH1wb5Uh7fGXh2rcUqUveW6STULtUBU",
  "key17": "KjdQmqx9VusudEG3tQ67cb4hD48rm8rwpUkNeCg7nbVcSTqJ7V1KGsXEeqUZrCy4Sp1M9KuvQAf8s1AQg24LQ2A",
  "key18": "3ju4gHCitxKqAVEHsd1m1AyibvWXEvNZjUgurpxVuZBCEaoC6T6XGHy4JTaURsba5gzjisJX61pWntjMsRMaSTef",
  "key19": "62egR4RHg9cyiZmbdKFTSZj9MUwqZgppDYkpAU97PqMiLci9vSiBvooJ24mRHcqa9a8dZFBaEqtUoDV1kXUcVmjk",
  "key20": "4xMVxv8XRkXvUANkMokMfg5bHwDHhgzwu4PeyUKFDqx2XuXjyVk2MNYmq8sMVJPfdTYynn7RNPZ7fozZUBXtLoQs",
  "key21": "3qmcQBzdJtWSz5X8bs9vZVNgq8DxYFUaKZR8cJFfdFH1YbewFfjwmqEdHtMoLCdux7jxYMHbrVWMW4wUKqudCw1r",
  "key22": "7c3MWQcVzYE3dfw5e8tMoBCp2pyKC5UkZjqWqimkYS3oME39Y3FgnpobGF4fBjLniQzFt3dTvvxGvDuAResJTsM",
  "key23": "59RzgVBizTRS8vEESzDWW5WWnS73j3h8YupUq1qhnAMJoxZgLphXdwmUJzzYHo8aTZoxV2Z1cq6HgnDz8AgFffYc",
  "key24": "3DkxUzPm7Be8Wtu6qMhjF4JPp6znbhHgztPpGEvtGZreX9rzQBddYz6vdCGTmT8jaiddGHMrqnByWnRFzgQ4V8WB",
  "key25": "4f22S3ssJYLg4jWArWDD7cj6YKsrpUswAB4Xaji2CDiGaFeZcweKmmKJwTzdS5KVJuJ2ZvfEMPrRRFZtkBmtMHwW",
  "key26": "2X4d3pyyoUBS3nGfCQF7LKF429Me1nYqwTyJ9WQtN15tKc15p6oKa1Ra8ZjrFuwKaUp618Te8f6hWLwrkModajGH"
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
