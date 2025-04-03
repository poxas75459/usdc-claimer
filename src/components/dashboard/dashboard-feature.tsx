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
    "Sf2e4qYvWpdHfnSBqWvEP6AhkmUymye9khqxyekfGNWHqyK6sLmYRcxv4gPuZFTRDXXEUJqEm6Y3JNf6V1E49gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwwCWPnxG1ctYnCKjDxdKyAtbpjpue52Jv3jTqV5hcfrE2Cxjyh6WbB4bQ3qCYFmPCHTHqYnBJYCVyy3v1Z5dFy",
  "key1": "3uquTKXL6xkDPaQDRvQNKFhVgJcD7s6aozTqBavwRtC2sQg9bRThqbAA7DaT8R7S923GMBERzYBdHFgAg8pZkUZg",
  "key2": "PZQU6hZ5AmTURaq5Rx8DNh7jKGhnNYaXCE3p2973vP6vee4oMjt4V6MnrN94mYq7DU34aBNGMGPs25nWdECdeJm",
  "key3": "5NrJTxuFe4xF3MDW9ceS77rxL1VwyXpPAna8eFLpnuddx7roXQ9866BuDGP4XyyPigEJsxjJDK1kxzYiHxhUjXqS",
  "key4": "5yBj7qiX1rsv5NoAzvmZDtd7vqwTmemXSJFhgrNUyyXumBsTUpYUj3gHCRX6DhpV3bazd8GoLddMhoSbcTwePbMe",
  "key5": "2bRH8iZZmEWTmk4EiHPUVGra232r2aaUmKmb9UoP9g7ASc2naRNHXPg9eLouNj66n6ZQxRNfW73574mZZMRgdk14",
  "key6": "4x1d56Aw9FF6GNbi5GU14MhaR9zyJZbpFUHQeesMc4dD2q1THAHdUGNTkX2NTdQ8VLh996RfPdiwzQtj47brWisR",
  "key7": "2tLTB8rFC7uPe4k3c3fQKbqjGTH58kTfmxqVBQjnQk6XDatN7ufrWQFrBjHRWaPA2myWih4Z85gvDabMnPs4yvtM",
  "key8": "4fr2E4j6QN4xaGLmnVzsEg34D76PTsHrToPCADNyf1NETD3UhZhN4JQZ6CHa6iAQDUPjkqNko6aTN9e3Wt7LwK3r",
  "key9": "5yMt926vmjbxhRYGVvAUdU6TVzNLFMAwfhYSEh1mhjopvaueNhvv1nQSfrgymvzAPgboUUMYW1c88qg5puhb1yzs",
  "key10": "2XUYVkPhUppbAzP3DNojsQchvBweHhAmPbWy9Q17jkhkC8GtaMa2iTazEziAXEgseJ8VuWP3vPcePUGWEkAEPtq7",
  "key11": "2THK6TNMKcw9yhXPPXs85rMk5hmchLuLapkaW5oPUgDbgoTKvAvcZtsrvs3EBNtwYNumQP6mpuFya7QWf8PsAk7x",
  "key12": "228T9ZNmqM96481rBQ32XrqaLYLBYF2VrLBW138XCNEbfAN4DGrxAr476d4Bdyo6aBnVdbYxPMH5qXUH8X164Ayi",
  "key13": "rjXcLrJzHksDMkSm52uvsbgnYVEfVyrbL3pFiVz8KBoUcLjRni2kV3Mg3eW394sTYsapW9KU5jA7z4NToF5Ksk7",
  "key14": "5nWKyRzyuimVAaBT8sBH29jSGhLqSFFKxQzSsZ4P1qrzqbe3r66tRpRubEyeENCzn9PDc8E8F7PhmQD4cKXHPFVk",
  "key15": "4oxv6b2FXxjgfG8sPTL5KXXZfaQE6zUBJW82jHGjwWp6HrLpd8ioAAqZKyz71cHEeeyBiBVSprZDxg7E3QsqbjB1",
  "key16": "sjwbTpHMjRLndqKRzVY3mXXgxHLujW3QL8LV51fhXQGPQRRQPWKpBgdAyehEQtPg48YpeZ6wrZTqviLQX1yPSTw",
  "key17": "5AgiAA17vR38HCYaYqGsEAEqNysb3MBoETE8f5F7omscLi5h1seEdsLTDDQ3pZXqCCDCQqByjpQg7HQ8Msknopbp",
  "key18": "2nnfjQndyBqG79LYk1VB1bCtq7wFvj1KA3x8jkLwk5D4TUbyYTsRG2mtFumZHe3L8eEsY5xYBaakQsphNfqzR2mT",
  "key19": "H4vQtRNgYMU89FBztMyTYotQqrqj1DmmxLHAqQzvKG2aQ5CKfREzsvggwUi3RGB7YGkHZmtSEf39WmVSrtjvJjN",
  "key20": "2sDLmnMykxS4KVFnQByX5G87CerV4dyS4RdmLRMTVVTbuH62WRB3G8jnUqSvsqoCW96YHwDW7wAxoLBd39iT8Rp4",
  "key21": "2Kk5ZMd3VvtVkWLGKtzhJhDrWyJFftnqTiVoqMQgS3Kvrft9yprXNcAsnxEcKNJiU4XuyJHGoGqR4z1CJBcaJsMt",
  "key22": "2TVoL3iu1xPeWeh6mDJWr8M7XRPurYDLNbRyzPNLJ1WVEtmcf4Jwn2pGypQa8g66LqXLkZ4C7SzdhNhUBthbLP4C",
  "key23": "2qFmVz7s5T9RjCrPTv1bytXYP3oxsZiBaGeuosEod83Nv1ZtRYEzbnUShHuFYg51pFmDhLKpoDfkbbhvJy36CKsC",
  "key24": "2X4GUqGkXJ1s47EBreHcRpaNoqegGgwxu74L44MsMGqg8DRAVJBdKSRyZQDQ2mHPcPDwVyFoKCTKJU5ARsXSGNd",
  "key25": "3UUsNENczpP1qYM9cYiAJYGBfT4LMoY2CSRU9cbv6zqdwGb6HghCojMRrLRQDio5wC8HjFeRfMtwmChQAQx9P33a",
  "key26": "2c6EYiqfJpX32bnsSywBh2BqqfmHm11jnkpW6swDv5xs7mU8t1cqM9A4Kq6JzMFBwvEBjGHwSTc8SzYtizczDJ1Y",
  "key27": "5TCQ9kbsowg5fZWZMjM2titVcLJrzjCMLAkHQHMjbNKL3b9KqRHDn6ZJ9vkxBj3SsFTJ3ptCugWXP4XuAmwNvCqJ",
  "key28": "2zdD9EJE7jv1Jznp9BzrT2hGHBZfx3kD4ThJHGf4PoZYKap2Zyk2k1PprFLpzLELVjk14beRkeUxsk9vhMx8oaoS",
  "key29": "4msnGUQ1eoyEDBcmuqjpMAvZufDDR4ivJ3HtKPDUtYzbv4UJYtJEHKUuND4L4NHoTqiyBjH7UPieR1JpKBGN68sC",
  "key30": "3tGa8MRn3HjMyB974MhhKcaz8kzHNLKBtgUfQaWL7PpHGvvmS4TEjC4euXyyboy5BxkinGB8WrExjQPuV9a4RFY4",
  "key31": "iynkoRFzMgV2yhb2TpArzHgrLSCyEnW5JFyEhe6GXx9vR3keYaXVa39hD9qj49hu6BZSi1jJvSG3P419WbxVMJB",
  "key32": "58qN34WS9hVnKMKEcy662qySW5ocLn6hGTSyndz5UnmjHiW39HfmfZL3KNeWhEQrUj2hn3Gi7mSyHNQZj8nX5QFC",
  "key33": "5pX4GrqbdcGxgGARG9zuKoKvFLhdzTAMzANkeMBC6acvMSzY47ZsmY4sJYCQitiK8T54thMwa2SYaC2gfKth8XL",
  "key34": "22Gtk8138oAabh5P8iQoqKp1PpdZAN9Xp4iTYMwiGXyZi7w46ZHyjv2szqxpUhkkFVk9mhYPGLsdnDAA9VkqRjXN",
  "key35": "4L6Y5UTfs92PMochvfdRbETCZDWtivBMSpf7n2yHbThC8mqMETLmV19sKk6Fv9Z9xKby5UQVk43o19eQPqBtypkr",
  "key36": "3WxcBrrFXaWyJiAP8hNHhu7dKSQAfbqv7mCnxF6yxanDbqfwcyfZnkz6QdgAoy5Nu9axvTErzM6AUFWvUV2SHyVC",
  "key37": "55K1yHfjSy11Pf3M8msFEK9FfZNscPqA9bqJS6z4H5WmXkjhesz6mMHFvB6UARRps7kHiZetNmUjp6nQTzknJ7Tx",
  "key38": "4xVyBFRGUvR9hLLiAboar7rrUfJpBKjVudQuDG6Fk74pqH6ydkFP8JU2LuSS136iomYVzukgHEKu9t4vU4ZNWSKP",
  "key39": "33jbnMe2EGnBrgsyYQ7gedaPpoT66DQJBHvV7xgG7gALERUoGfnghLVhyGQqcRqE4sSBgto3ApthNrKopznmpCRQ",
  "key40": "5LzmnaoxFCpDgJghYfZsGpxewtRKm3CHf7uk7PgrFbwqsZZKPhwhZDyxCXKYNVYpBKrccokXPDoFBpBMuzeYxrj7",
  "key41": "44FZW2Ly24CVpACc3tg65ZpHoYBU7ERfuYkFnrx1RqAZayPnfu87vKVooqwR3md5yhu3Wjz8ZPENLA4VqR5cN9BG",
  "key42": "3CnPHWFC6nYoHiZ2rafwV5f4KXXTKSP83FEdwaE9DqsdNmR7gzWRsRC2ogA4pTSxFhdYkPsAMYihXobGRbQ5fZaH"
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
