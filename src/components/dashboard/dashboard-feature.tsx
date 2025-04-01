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
    "5vxP38ZACmqLneW2cynDcqXDApm1tNgsYCMCG6x34PwMNXJE2LRz2nZPnA4ghusRL2sRBybpmGYbArWsFpAdD6Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537GRUkgziNf272zsLQaaCFbroK53XnuDdM3RHAe5aKBA7sV6WgeDanHtz3v7JMSa2CfEb7Rf7KvY7mB3EJMeyYg",
  "key1": "CDzVmT2m5A91rTLkB1cang1Enq7P4cvVRa63wWQBf892kUNP2z7neAMQGAmaukJTcACVbt5mL2kXhUqBnLPR3sJ",
  "key2": "3GFi89rNphHejvNBFCNaPaDR9SoFtPkyXVf3UiecfJwwvBPVeu9tx3JZvPkLcDjfLE6Pe6pWf8ZfFptXTCAAQzLB",
  "key3": "3M9p7v62VEgk72C2FTo5Af5UxDTZHoM7ZJKVNoyXg6jRANvgY5uvCCYDbMCyPyqYjoPSRXRDVCaSxtH2Gx4LdC1T",
  "key4": "2ZNokhVeFGeyTgwHjE2bstdV3bgGLhyQ3bYH7eD6WszhufsYKZRTTHMqAWUGUsdja9fVeaaACG4fUEJGk6x2xyUE",
  "key5": "2hegBpf5o7mtXLaQyArCdNUuE3QurvdxyyDuwvxib6TrWnyvxB4Kz1fdu2R5rKY5x54g95jnHBpvM6LxDqAnhZwh",
  "key6": "4K6jxCaBQcHNK2Lf4ftEFqDx7mp3uUrcXMoetSaiwwyrHB14NdQDHHgWbVAvze9MyHJJ58hP3bMtfgmr3pNnmBGG",
  "key7": "48ZLQDsSUM9gx2x8NmijBTuZ5LjSkAP9KALR8CTxUhr7jtW5aiij1C9vH4ZYhruPrD4QJNTqCKjLWwgATv5B7aYD",
  "key8": "61n17Y6ufSkHViSPsKUNZrix6EL2ZLoYWmEC2LXPPa9HvJa5LnQQYL3qUCvefGCzYDgBiSqH5Qs9gor1mbydVd3i",
  "key9": "2Uq8HqtTtFES5gavEMKf3piraXAVqyUpTixXBxBfeLXMnTErK1fdFmnCqzES6213mNUGXB5nqMv49h3WFFzPmXsJ",
  "key10": "3jGh3bhjZVVgTRLuWiM2mKtM1qtpfAEubzxm7Wr7U4DZC4SDSJLU2asrSecAtAMshyC736vUc5RBBepuhj4ueqS3",
  "key11": "65G2TxM5kH4oXegu3RYgEPGf6CxeZNam2b3hEJktPTGazgDCWZFJEHiaW9iTx4NGRvESTYu9hUbDpNXHyfMG3mHx",
  "key12": "Wii6DDN9U8VXWsQXjTBemeidunTVvszUgFdLPicv6sfmC8AzMpF1PtJhY1JDji5225d8vCj2xXNGGG5djsALeuV",
  "key13": "4QM8NrM4Ncqh3Dfs9vtg69TJzpjHr13ELve6Rj7NKknaQarakffQ1meK9woxrYVHDGp8b2YLfb8e8ZKEY4WKs1TL",
  "key14": "2LAEbtzxKn1DPxWXaowKGTbALqByfaBcJJVpVaF6GmNfQUmtn2VJVJrKb39PomfAeHBbEVKqkQiVoD7okJKvjGEn",
  "key15": "niVqFeuHx3wAcd5rUNE4Evrgg7opJmo89ex2batMuTvwfCnh2QfBd4Z8QTB5JNa1vsna5vSXZQjrX2um7Rhgn9J",
  "key16": "3BxVFpWd2E38PCymL9gkNMCFr6Jb4YJ7kbcer8TfbaWKvQjH7bEUk9E7pUtxF6RDxeZGYtVqbr4aah3AXSa6vkUM",
  "key17": "4HLdtHyDMTdKPpUXZuzKNFsvKBekpTjHHs6d8J8jtZuLeCSduYwLxnUyy26ihyovpBaicEhPH7oJKYrMDeETvvqo",
  "key18": "54TnNB6b7cCTYiDr44b73WgnyarCopnhZ1Nt6pw6q2YZFGfbfcwuTuKUTUmBBo9qfKwXj9F85tPXBDbpf7iud1BC",
  "key19": "b8vU8xR8DM3i7j6AfMLWhETCiJh1ncXTt1HTaYqHJTJEd46YyqB9a9nBPaEhR91BP6z6xBurkHR1i2mBjCw6Bkz",
  "key20": "eUxDAYYWJgZXaUo6fCGKy95FVQcoKpUTwKiChjYFbT9pTcDM9T2GEHJnVXuk3EboHm9GvXDksMDTSvtkFq71Mod",
  "key21": "5RFQmctBpm4QGgJdWpFNiAdvtdtUvNF794krkw6t7hc2Vcui7nQYqXv26W25KYbeK9JMun8mDFuvx86uekUXoKKC",
  "key22": "5bFJ7tqgucgitK1Xux3sThcWKh9aoQ6sFsomDaimihuXwuF4Q2ypLRhtJT4teu4VGGRdycLtfhnDpDprfFzhQtwf",
  "key23": "2JZSAj6mjWEfr8jSbfLwdjmQU1yBHh67NXFuTo5MeBQfecf4FpkAgvrT3AaA5b96R1eg4yLpVMQDDGtWoCCnymQm",
  "key24": "3VSyAmCycsQe4W7z7hGuqfGCGsqud7xQmwch9XyAQixCK48WrroYJNKkWW8hpXeWpVi8Zxeatuxu8mLNngkwnu3E",
  "key25": "2FjA8DbkWgVPFzWWgwwHk5jQV3jfmn9MGB9px58CeubozWx8iGmm2naHdcLGVM9zsCpCQ2RBspxBtXJofF2151eb",
  "key26": "4jhAjCdGy5TSyj2jcpdbVzzqcP46giTudFjT6zx4xj42YPQZn9MwuqwYo4mTW73iVMamDwvmjkkstVuKimTQH4Mq"
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
