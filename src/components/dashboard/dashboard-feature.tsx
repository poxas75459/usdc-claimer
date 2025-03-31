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
    "5Uoc5pxt4eUm4nUfM4bvfVUESzQYb55qedAvJ1puSqHkdQuuCN4FXaBTwPGyz56UzU49PWkegX9YE5PeKH4dfbD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpBXD4YBWctMqHZ6X2SqW6JShkhZtmyM72TGTpTJqPyqbhmjPDKKq9NzWEhHqmi5ZBQaFvgkKo3cBebnU35e81T",
  "key1": "4bs5xnW22hhtqSfkqxhYprkRTq8PBTgm3poGMUVrjTj6gni5uabQoBapwR923yQDJGj1adK8xiMUQhtahzFe3X72",
  "key2": "4CvSdB6fn6KLDnyiKFgdjMu28wckwJCTQrgQWYoG2JG6zTR2YyfkGbQCMfjhwVycqAqKq5bLWY8uoMmdUoHYvT5H",
  "key3": "p4izGQkfo6Ha4H7HamUVtbvkiGzuJdU1eyrXcLkHkCZqydwkhSsxTuriVWn2JE5svZEnxCGRMZjVGanGdUca9um",
  "key4": "TUFvxHqhg8xLEunpAMVJK8GDULLxyfe4haujKAB3miizCpFyC7KWQwrcdD9JmEUBtE4c1vpGr88EBjyknQ9nuDC",
  "key5": "2RDhX3ztVqBxFCiRksU8dyDMiD36P7KRHFSTotatAq5GmzbH2tcQTf2JP4Aorj4Go2Uu7qr99atpLiE6BhFY6nXo",
  "key6": "4TobWVZGjxQv4c3w4PpFHWsKA768rnemznb5gYWac4X3qiJ9PgaPsoKJnyXa5F14fKE9EeVF6F8Mnkzv2N1vGqQb",
  "key7": "h2JMw6uNv7z2GeyPx1Q4YhiQsefvdjM8H9fDjFpg6VUBBu7nB3uVEvbcibfn3bVoYWhMAC1nRAnbW3pFYYmSH8Q",
  "key8": "2j9BQbafTEpTT6Aji3bNo7HGUDkwaFWyjvkZLEQpuk2xamYWUc4xHgr9Jq2sTJ5kQh68ERcNTm17e6R7wXmeXoLh",
  "key9": "66HaLGuebrJfVL7SVjpM76JNESrFBiQXgLHWEeda6112xi9HmFvW8p9XZk2roDUiiycoQMtUi7NQCzJ63ByQURh7",
  "key10": "4xL3KKD4vKHNAPysimwsC1CnFt1PuqDuveXmBcbvgyduEJyMZHr9qkLVv9bS1z5znd9Ep9vVmuQ9XNpUCvgf32nG",
  "key11": "2RqXmJp5UqG1EDTHXSK2Mqt4HD8X2KZFMGJus84kaRuwMUftvF84uMKsw8AMxYftVvqSf3ToFtLVy8d1x7nSGx15",
  "key12": "3AJPwx6yUWvHc7mez9ohg5eMaSyGszfC7WUNzzmGk4uzATWzqm1LTqMeUP3KcidkEHJbUpkMfnJynw6QVWAvb8Fw",
  "key13": "39SGfzez58773aTbJFdiBWk9wRXgXFAdyeFFwbeMAMWa4yqr1VmyanbTwtF8gu5ZDP9beQc4RAXfFQZYvtVKXz9W",
  "key14": "5fqKaQ5JXVndaApzVQg3D5ZqG4FtvC7RBQjAvM1wcF3AXxbefJaqBiajtoEjF5LdxDXNRYoT3Ctd8FV4EESAbDx6",
  "key15": "HJSG4qynSNKmqcwCS1kvTf3ctmafSmbqfe3hMFqUSggKogXgHwVigWz7oAp5NsLubYFCHfTPpJG2KNFaPRkStuh",
  "key16": "5cYg3VUuoyJmvux8UNtjigaNsgktbVrsTmApF5N7LuMfzsVycEPmBv1LwnCdQhAHpKraaAmM5HkjLcNWZF73s7tG",
  "key17": "62tPULL8WzwPh7kAV6hfwUwzkMsqDdh4ySNyUMQCc3aro7G1hDDvwrR8R6DRkTrkFVmuw5sZghAZMdTNskj8pUTm",
  "key18": "3XVNs49278FXUnMwNaA9QxamfwjH51m8yr3jPc3EaDcmQLDsDeNw3nokCFLR3oRYyhYBAD3rmfripy1eM6pVcmoC",
  "key19": "3zzNfBDinAS4GBTXnHvmuv2fWRVEciDZPTTcwz9jNFU5icnYZMvYiyEuFZxnmNRX6DZkcCo2fY1mPPFwMJbRMYnZ",
  "key20": "3hrFXUi28rJEBZKZXK8Cf5iiAssfGH168mSDCs37E5symUiASGecqQPWaueJhb2k1U1jCvevcd6HmLjhbhvoB9Zi",
  "key21": "2aVnYxyhnAgLZPYaw4quoujqyMhintpbiTQRsnE73ppYdG9GvDHK8ENZBNdyZGkcr6Rvv5ZJh7jM7EAy2J49piZ",
  "key22": "2PzMoZz3meDfJGSf6VxPgDbvdBPb5iRWrq7H9nAJ1zqD2LSaunaUtEdhXPL2YVsNUwTsbK7rsZYGqka5N28QGxmp",
  "key23": "3hB5xyHCcZ8EWJRpJmgfULAf5Ei8CCmAnjj8obyUinFSC1FcNF6kq4p9QDvVZEQw16S1E8Bhx8sZMmsp1r3XRA7i",
  "key24": "EiQwBa4pTNbAdHumxtorqwBhsoi6dVJUHZS8jNi5evpH5un5gbsfXFRhXmcMggpK4LwmRqqgAX1BBdGE4TdLps1",
  "key25": "S6LQ5VdHRzQ1vgr4KQvu9JeWR7AbRjXdEFzFTrojwwqZkGj5vyGWAHYhzevk5s8i2AyiKM2MwQPxDuoeD4muChK",
  "key26": "48EiwQoPwX4Q7cbohzcvESJzD7dNQNeJae4nsxp1156QCoiYxae9womJwonciyV1bHyUTCuvUBY4Sxn5Z7wezM7u",
  "key27": "RmfAkczw4Lgs45NmBNsCuVfdTKnjAz5MS4nzvY6BnxPBkyJQsxepx2BTWyYeiorGALoFBiQzEoa1j9Sz43zNMBq",
  "key28": "39kTf8UFqvLutX8zS9T8oZRSFwc1Supv5oxdvf9y75FY9yGzACc4ZwWHBUxT2M8Qh4fndNGYjqFDZpbuMg8jZ57H",
  "key29": "3AXkhTkN3LMytiEMVvXRiwJWR62VFErT2vUcFF9ZZ12SotgssLf83429tKszZEpoxhRxCGMv9MYXoEUaHHDFdU6A",
  "key30": "5fcJ8vP7oQREgsURtfZXsbCDqUvXcdCC681687Av8RRpc6jz7VA3uHzSuHAZCUzT9hw7j9bip29SuTyQbVBERo7r",
  "key31": "5A4C8oVLBTyYVD1thD8dNLR62MW57d6vMXFJaEztstYnFms5Zib7oCeQkhXNMcT4aYyV8HYLx6EJFESjxcWbEUvd",
  "key32": "5WchHRVxheuHfkmchSci6zfn8jP2cHKmZmTPV3zVeJBbNXLKzJYigmohyZVeQrcxQHLkcCzHZxTmSCGXwZFHMcTg",
  "key33": "4hiMoRoVzBULXSPoE5nufHugsoKCM5Vf7Kp5WQ5GvmzbmVJbLFtmnFezCjEx3i4eZJzYg7q8j4kQmCfE1TBHYhiP"
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
