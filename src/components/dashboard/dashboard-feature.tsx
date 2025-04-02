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
    "q33W8aSxkkpmhyZU9Pfu8imgDVSiRnr889FnXDLi35SS2KMncrQUu35vTfmXFnH7xAxEjvA5GJH4gDEU25MpTW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ep9d4c61htCjTqbDssYZnq15DygRCPYxdFfEGbRHt4cAPy31jNoSTFFPJNFhCP184GFKMjGw7fom3PcMUrom2Ly",
  "key1": "5AJksxWyN1VxkJtKUeANAaRXkbXHaLXimhD5kwhf1c7WCSB8548Q4kyBWrT9mfmnBacA5qL6Ufm964XkomaACSM3",
  "key2": "3KumZGFhA6DnmRVQXgA5PTBAGD7V8k1NjQD5Em8cppcQDZbxUbfBrRAtu4oEAJ2KAuWkKVJRHNxNMP2VLiW5jbmv",
  "key3": "3yv26Bq7yRfnmTgc1n4iFKv8J7iQwrcyMJnyaALAmq15sEvsnufcVdTLa4nrRfhuQ8RdEV2CxpZ7yhnhRXA871mv",
  "key4": "3t3hRmmLXq7d8vFikZWcrt4Bfnw2xfxsJasr8ZpsDpm6oyDx4w6fWksZGRPfrJYp32ibYLLhhcvytKhZMKvDduG8",
  "key5": "44KyXqJQkquMUUkAEaQkhBW6vCQTuYdkiwNMAYL3D5mbvvC9uGXAc2LooiV7N6vDFRbEf46DHqcR9L51wvQNh2BM",
  "key6": "3Sk1yCcS9i8RiWU5u981JYd7HheWr9AiMsd5VweFZhaQkPyNAAnR7fzvBX3xR3QymBCJ4ZGjsrXwVyiyB3cktPVG",
  "key7": "5Ws8pmMXE5yTewH4i4KUfaEVgksenqAuCtH7vRj8to6BhLXq9QAFSBTGkXnJrg7Qin4gP5j5S7NJwgg8A7GHWond",
  "key8": "3AsUxMKn2xhW4615Vj3qMToXfVRZ6ZZUonFT7pcbsUg1Byps1j67j1NmdpowGVnJfj9K5bgAhqwD2f6g2VHbSgDt",
  "key9": "3kmrkWZByedcDpEYD2G3LRWopiogPMaMYbN3993BY9XX8voYCon2qhEVdMAQr14WbjjCLtCsNcptczid3SCNrcXn",
  "key10": "3H7aheV7LqKCLWBnQJWtuvWR2EiKwPNsKjVCLsjjWtzar7fjfEVn6PV2KtfjmGEhjaxsTSRXkjXGdxEg87wNHjoR",
  "key11": "41FisvNENs8nY1WpCrpFTkbZpE62KsnyZmepA4gPNx36A2mUck2rd8MWiqz8bVbkcnsx9zf1r3HoCB7jobQVEQKJ",
  "key12": "fGLQ6CAE8emem1ffhEVTWe3BJCB7yzdgLbd12GXJWJA4LYB3XVhf9TXeyhVs1yqrk5XLv4wwxpC7eLZaF6ygDLp",
  "key13": "4nnHJWYNeyKTGjEr7e1tajwyQc9xRTcbdXH9vLtohcLCNVGBvLTbWx3ewh5xShibzNh6fXkVBHrL8NjpbncedWJZ",
  "key14": "RQduN857CJGkdm57XKfTpVfUxtKEctKodxC1FLi8Fuxrzu2jKW9Edv1rFbpwdK37XkuSQBAiN9CDtkQB66h7L4z",
  "key15": "3kynLmCefdCVH7G8EfzTTLa5kZZZGBHuyqEoL7PybgLeC9949DTHQJTpxCBorWF5J8zbZb5jDbPz2PvuPMbbntAQ",
  "key16": "3deEWa5dTj3QXgMxS45G7FHPgjbCG9EUwSsWs67uvxp5bykJBAigGp8io5GY5PFq5tmj4wKw47eFZGpLfic8USrL",
  "key17": "42pPZz5C7c5DwEybEGhnXWFRs4eeTWPpAHB9AiGscqdCPYurWNBLbBtBUHJhVVWihh7MnWagifJHfZuWq32mcokb",
  "key18": "oTY8e86R61fKUh7khQ52kJhXunH2uKgoT3bfZgPB2XTYunCPjMmKYqWdWEYn49kzArRPV5WyjCBxcGgJpwuNroH",
  "key19": "PJigGUQsTnmAtyg2L9fQNsCAjXKjggs6psBguas2ZSb3ZgZQ7frgH9upumq8ApYCX4bbYxpuBgpTv4o9nc6FNRe",
  "key20": "3vZ2SsaQcHzCYY9hk4xdjCumjuYC4YHbMgaJANL83F8ZfRMYpuBg3T57X7KXyWcWuqdQQJpEeVkRYcqhUdJA3zzL",
  "key21": "34684FME2EBxAKLpkyD8LjHJARXdwGLeurod6mSVDijaK5GGp7tjm7V2ByohhwbcgBBBiJBiCnD5Aszkxk2jRh3w",
  "key22": "3UrcUjBDFiYDWwa6ECshwZf1WqNPQ3Cy7inhdiN1LFznVwQKHXxfvFzezTVLn4PAoPSUkXTyRQBUKPYmi9kkWVdD",
  "key23": "4ahxPE9cNcdmXiGefGNFmvjWs4RcA5vGtwSNQQMAUAb84XbwCFvrjvZw2cxgdhd4gkSaAtnoxGPyc9Z5Jv8qC3E9",
  "key24": "gxW7WCbSDyvSTbNqg64oYY4jqSYjRtKcb5HuYTuA5xtc7RRHYVQz17XGrziAsMYrUwVa88dtvjoMwNeWFA27Kos",
  "key25": "5oBXhqX6n8bYtpKY892gVnYbe1uVUG9uUqvin7oXdQMh9nJjCWVXtmaCMYKaRcJswmKRX1AZ7r7cdH7MRKMHoeNd",
  "key26": "3EXxGJSQsRGZcS9NQrNt4sisHFes8AB4sCbd8Y1FHKqQZaNTDcGU61wvNjYvEnjhSNrZrQFn5oawuEbkGVaSc3Vo",
  "key27": "LDF3c8or3mpHUXdgvfqyjgvAfESEZ8T1SFqMHnVXNFewvwJBgbLyFqr1pc65zyuzzrsu3S9aZ1unFCMztaohC5W",
  "key28": "5SCMsGSTyPVD4GV3FXV8BJBBDXJhKFgc5N3q7QLkGGHojQvVWydTd5yukvzNUbCe5QyHFc7DXMWgweKCnEVcWHZN",
  "key29": "3FkKzPkbYJhp6Z8Q86ZnspnuTdfcTDBEmB9J47rU5BWkUvRLRRgqNXqJnjyLUJJZDnzLLiYTSMxo643F2tx82r5N",
  "key30": "5sKJbBJPPKYWC7xXxAU8NmHAp5eFFXHPNwYaxCQptuJJEX2ogBU86TSWJtei8tiB1oCpdX266f71ZtZ6iMc7SMN3",
  "key31": "x6Rj8jqWpssbBkw5H6TajLGERMj9D1PgDEWGByjqEj22o9UP7rA3FyHAxDnb9CaiF4PAetSeYZJnP4Nbs3qMXza",
  "key32": "3gWntSYAhAJuZfAxayDpSq2fNHcoApCvVQqW61y87Wm5P6wPPjKNEy6YgZu7JAeBmFi2wb4yamSgrvNjge141msG",
  "key33": "LJ9hZtAKfmpqwyrB4eR7JDjYfheLbdGcpWZvHmKhfL2NpmzNxnokb4nvhRDD3gdEPG7E4VfvEbDXZECvGRJooc9",
  "key34": "5Ze9xfSvh4aBb1kDUz8rRsJwx1DFYKS4NMp1ua5JdhBHKCxwP4ZkKa4fnj6RaGwwwyW5XWxZVQR9JhmEhvMyYf12"
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
