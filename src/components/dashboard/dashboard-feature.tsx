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
    "FFo3RvpxwRhKC1zT21KXY7Sip4wSrgWS1dNstTsHR8zHN8poFDghHPkYqA4GbRpHNxLuScxFUfP2DawjNJxWPk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUWjK3GVpbw2aKkXNUh255p2T7uTwptrTXgcT6549kofknL8jGpMcxNV23ejmLq4eEnGf2tb4DEM2vAuWJpzXgj",
  "key1": "58TBGuXsNfGUceWSZriC7jbkcE6HMstnufn9qKJKDYK2vrZeGBTXMpQxR4aUMcbHmzeyvCVUsFLoJ4JZTJMdpn1U",
  "key2": "2128hoFmQBJMDFDQzDLckoykSYMb3ZxQgBzby2AuymmHjJVvFUM4LTDVeduddmu8vggZqnmBRFkq31hwucwsbR9J",
  "key3": "3Wdw6xxcdGwwjdkNmnuPDtTs7mTe4YnCKw1rivtToTfXCypRF5RCuV3PPWbE8zgbzZpegRC69T9NYVUC2fFsv5yY",
  "key4": "nnYRdmh567mTeQJf5nV2pdA8r8ad5abJbfFde65PFzVk86452kUupmg3EFfWQup1GFdmZgZ4vzyYtGy6jFidS1R",
  "key5": "66yLfJUFwc8Mns9J3AVPGU5sATfp51aiWXXkJUnpd1FzejQhswX7RapfYyvAE8KT6x2YShE5rvSSKaDGxnQphSpC",
  "key6": "4QvKkNma2TV46PHfNXWwhrawm3GRAMrXsoxCJqHYE8yhZtwK3GrR2WG3CKf734uTyERq3hWCezwYpCBFb58bobZC",
  "key7": "2ZgoZ6EEjicDoaHxJMobHhQC9RZ1gRo6pfMHn4UxYkBYr6j5QDvZos4QY5L5TLfHJSeEYAjUWvNJ3RiH3pPnKnL9",
  "key8": "8XUuwAbctgaapnyFP1wiMYna6eLLXZh9MxLrkSfahZzyndxPhSHcgHCXhG3rNWgwo2BGZjNbqF7qXGQGJTac5qn",
  "key9": "5GWBAeB7xvNXSGqaagraSiTFuuSna83qDouwmbbREFgaSD7yqzY79iHKBL8EAfYe1aU32uZ2REC3VEhpzvTpSqoc",
  "key10": "2XxQfsTQznR34go2MKNyyP342i3QtawFZXVPoWpwcsWTMSmoSsGYKZub3vs3RSwUSF6BP8oWpUJoikypoTPMXPWV",
  "key11": "54RvWrvTqh4ETcjDzTJ2zUfzqi217yCvohNFJEK9UE8AcH3ZdcjxrdKsTtiyJDmXuQMBJiG5X5mNMsaQ2tUfznhx",
  "key12": "2tvqb861WWL8bGujCqcNGkV8vdTaiow588p5yMbNaa44Pc7gKsEDmy5vAP3Vy3RWMTAkzhxjLzTTnukL1Trx2hjH",
  "key13": "56MyhVMgeJQbLoorTDjAXtmwiUzPEconMUKnwDtbcpLcFSdcEoNxTFQfgDYoHskqp9ZLpTgn1RfBW7kBXLxCZM4y",
  "key14": "3YTJgjWGmuucn2mXF53joErvHQUSVgz2kSNtvKCQXk82y9zYqyXSdZwjBj2wqn5gBF5fTovT6RvpJLYzryzP9Zeh",
  "key15": "369o2avxTyWagfxD6zB22jU6qoPSbPFGMhmc7yaCoTxxC7XNwHD9cb5kUksJxQPD6AbPRSkTnUeQybsZgfuHQHZT",
  "key16": "5D1FGbNt2PsYZsEybjrqBcyaDs6k6NaVX6pAfMHh6pbQohGiXuKiPx2LCfoJGwm1cenjiSqMBWUnnWfaqR8B3wxe",
  "key17": "5VB54CeTnM1kLmFnjNLsi4CtEYDe8w49izZX7Q3qejikKDugm5FkbpbYkPK4AWh77GXuP9xE6CTuRuJcQjUVso3g",
  "key18": "DJSE8HDDzKYkZszVrA4eUpwJiq1YS19ydLLh8BEQQHhVutxVvxMYjXVS8AGcuL2M1cbqSWNSQ1AgrsSNhvW8mZh",
  "key19": "5W1sGZ4tESTpLyd7QVMur7JQjoDg3pH9TRnL3T6qbYPtQVefGy4B1Hboi4imQsjpk5xJ8h4MM3Y7ec7wWYdPM4Ju",
  "key20": "3aswMb2tfVLVYgm8VxC7GmzVX2yMAEUnrysd3cUk2KqQznFuVekiJvPuLTEu3wZQMgrVbwJWQdazotDmanwu5pJg",
  "key21": "2aB1pgxqHNLXBcMKQs5UCW8aqkbsRWqMGL3zsg2AvHqjfoLNymTtqcJwBWm2i8y5MnUcvc4ga2MeckA2VEaK7MbT",
  "key22": "s5gMYx9XVBnYBEjfwcibLbw43y9ga6XetBEYYkWJ4jsn2pNuLkXTKW5EUQGp2rkA6CD7JSUZcxGz1hH8cp8LJ81",
  "key23": "5SugRpoe5X2uEPXkNq64MEebufa398XfbgZXj5HjMPoCcrg7KfS7Lc9vDBVVzRf849ZM37viS3ZoeZrBFKoDrVcL",
  "key24": "3BWTWXVWguxVrjRbzW8n3PRnoigyJDAT5QSpnQ6L6UKQ7wzLF3GWvyQvuVTbB2N7Qfq65fDLJzKhR9kVPmxF311M",
  "key25": "np3fzKsmpv8VLxEC7QzSaEVBsSFWW4wyFwxVP4q2n8s6UJE1DX6Khmje1LbjVVdyYcmGGsSy9LXGQsqaH3aCN38",
  "key26": "52jDqCmX2DnUreVMpMnWm3aMDwnq8oTLZqJ29tBYRomR2MeWv5vKMc8XQ3ivSUM1ge1Ef9F9rUZW4xwp9L7Kos5p",
  "key27": "RrJ7EVCBmZPe9RR5zhpqvmAKqGqRpmyzfHM4zyg24Z6k7BRxXNuJz8Ch1r5aQho53ocMzXX4MWgXD91yQ6RVYLD",
  "key28": "5yN3nXWwcGvPiLfJsVzUne5BtSALMAT5ykTYUMtTyB21EQQ2tyqLwhdVb86ggedvZyH9kxz2iphSCTeBWiMxEtYr",
  "key29": "4jA33AUixEDXaicE6HrYJVEokrkYZMWoFgxJcWJWZf5bRbAXEVfLYyuxfGMyjFfbyBHTuWf4kwGHeULZeMXjAhQK",
  "key30": "2oXrpmnVfkEZh1Mj8yo8wt1gxyJCEpzRfuX11AtYSBmmnGMGnenG3kio3xn1zwPoLgB2fPPqtTJTDXZEdiwQQnWD",
  "key31": "53B5cH949zkKx9LiECQa8HWm3oWohv4rwbTeYG2QoA92xHqyVuQYdHA8c3FpS1eEyzN1Tk4QcT8AVNm1o7epzeMq",
  "key32": "3Er7s1aVtYv4hNSHt13wp6Hi8m7SGf1KQvrrhis1CPAC1SiuZC4t5WPbcqB9PiC4rTNeGiJfe5mFRtsYga5FQqpA",
  "key33": "EVbcAdzwE4c3XcSZFnhySh8Z278fbmVcaA9kd6MgTJQovr4fftpWHpbBPGnAoYUFeJNfbYwQMzifWmVGoucCCZK",
  "key34": "PjJRPhGQWvgYacXdmf244dbeeaAQ3ayKPjH28CXtP4U6Q7FWaG5UhTxPgnBBYtKPhbxBMBHPhU6ztQLYuhofJg3",
  "key35": "28e7W8TEb3DqdxYtkj747cBJPDBJYeTrTCQdaFTJHCVAo9hV39ZdnDhsx29eG88ywcJPg3wuhSxAFXxjmUzmaBwj"
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
