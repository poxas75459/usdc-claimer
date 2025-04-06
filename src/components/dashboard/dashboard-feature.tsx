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
    "4gnPMk6eVzXxmoUbjdHPhJHNm36FdvVr84PQBTPrjWJyfvKEemgd8emqjub2rw5FJjRvXJE15mokjL6fBirQYowa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbZA7BBWrCoqF3o7FfWeGoL4v1B8FGy3G2WzKUmi4qknQcvSXRtVEfrttxJRCWGSN7SPqg5TAdiPoQpbheGRvTZ",
  "key1": "5UF1hqyQ8eNSEWh5BveWoKZzhtprTQYd2QfjpoZpjjPCtBtUE5yFgz77sc76sQ5iUSeVC6nKGo3LMdKArXJdTG4R",
  "key2": "3XDHedRUiyXcMs8kgCw3dQcejWdLgEtZ1Di9jsfLFGjHX6f3Swz19xewKSTwA7n22djEtL9sTu97yKQGikfVHGrZ",
  "key3": "3CcKc84pH6w9esUVKyKMNpDcoFDrMXcbF7g2JvGLvZoV6DS9B45vJDyUbRDs8HEk8DP4ZmexbmTYap9VLt76Fak",
  "key4": "65DiFPesYGXXQ2NcEFMZ6yEb9jktHRZFzNBq877UTFtYUJWjNMYaoMAdJZufE8gQK6tf364qqSNhRFXprt18YpVD",
  "key5": "54nWXrwF2JF2G5AQJncUM4DdFpDkVeUtXAtnCE2FLzKkSmsKKiXUn5SAnkrrNu4RgE2Hmk6iEZod4gEm9CK23e9d",
  "key6": "29M8HU7rtQZUrwp3CsvCmWAt7F6gMdb6aMppBmAEhRi34DVNL7dMA9FJV91W2KHGpSzua5zmeetXEMVMF9SYjs2Z",
  "key7": "mBNxX2uozMUrKsZ6zc2ZXharaSdV4UPtxr4mfxnPNBnj92is53Kd2jxmTe78HPmzJdymMV2z1QCcAm6Kx2VdnHg",
  "key8": "2ESHLuoGwy85ALBmm5pe9D1P13TNNLzbM41Nxk9dKmVWggFBZwDVLssxaaFqJHgMCr19f1ozcnugS6FXm1j41Uit",
  "key9": "o28Cs74KhQ1yhpYVmh2Ugt5rttjmS8LseiUqbozkHZcKn2JhXUJuLx3HuaRhTN3n4b8Ayo8ybXuHVWnB7b7aygn",
  "key10": "3oAPYmGkQQLwiUoAwiVVgVxmjo3x4aiYNwuTgCKtarEmuid7psDMuVGRGdnBuxM4aAejCKfmyhigRswV1zUhXfiW",
  "key11": "tSBUnKC2RW5U4ZAuatWhx7iufK68TsjKKgyNg443V1SU7hjypgJRYUJKj5VosKkMLKohJjST52wd6h6cCXYGmzV",
  "key12": "4KDZ58KW8Kr21No5EKrUf6SQfQJHS7EtrvsFe6v8DMLkAvodg8dU4NECvqWMgnb2pDHUuK2qbiYmyvtshRJraEUR",
  "key13": "22N2p5CTPd2w8BKtxZJKxMbaoiUuaCoypU4d3csVKDp1Bik5qZJuDcVe6xY6YW6VDzTBxarnjbDhLWu2WC7ykN4G",
  "key14": "3W2LbMGbpMdQ5VaqNzHMNhS2ZnFRzMVuZ31k7P5uPsJxxNwj9mYKB1Ch2SPHMMNadfv9QDQT55nuLTUGSTZh7qjp",
  "key15": "4hNLEFW9ky4vS8bvhw4vv4SKR7eRgRQF6pNLyi32HZHNcDssXHvgi4dXW83zFbTWErRHYcVJaQoqMCuaSDSQFeKJ",
  "key16": "RCo3kn4wDkBrPzgzYwAST1oFAJs5BwAUifpjh5RtoduxkZkbxAdwV4z2w6bNUzHK8rsikQYRXXWDTYvtTqVbxLU",
  "key17": "2M6eJnxEFwWFdh6LiZSM2buBRGRzNrJdqdnJGiooZQpqJrqoAZBvZWBRR9Jix5FHJtb4NvakfTM5SgcYtxNJFp3h",
  "key18": "GBo1zej6RKNpjENgpEKE6AjiHiicWBscsFXNNbcgX9ggFtRKT1dJZehw5bg1dLgpGjZwRnBfk23dnKUVkwEyfKK",
  "key19": "271ATv7LR3wUCJGrTvsSNCch3HHyzyJD19zQmE1KhjoX2oCCdEinS9wnHnpRRGUe5Lbg5PL62ritXK2372RsuK8o",
  "key20": "zyqxEmw1B1pZUsgNdt6rzJwx5LmxrvJLaPGeTdCxYh7tnUnLBroeHFsDMr21fzuE6msvbYnfj7sTkcSF3DMB19X",
  "key21": "Dwt25MY8gthfBr9Dy3yc8Gdgvq13Qw1ai6WJVLY7nViRbktTjLaDtUn9JNZG7xgXcDRLoGqDTodw7PJiHbTqoph",
  "key22": "WScSiyLhaKJKYacQNSrWULUHLE3E4dxodNDgBKP3Zb487Lw5wEH3Mz9Rgki2yPzzBTjyQrRE5rQD7xTfUHcSSUY",
  "key23": "4Hyq5t4AwLxa7pWxaC6VwDttLPNvjRzNy3n3d9fFyyTVre3Vm3mmYjF3JWxFDSpxkxBhV87k1YrfgqV1GM3yL2pa",
  "key24": "2KFy6rMmVRibfCaqygT7oMyKr3xh1QABUCqMqqMnTKiCD45HJxrgQAAhqxrWfu4Tef481dhWmhHtXYoCFeAQk4xL",
  "key25": "Ky5FC7LLyx9oJbkuxftFTWYtHZzWtCLcGKwcFyXW6YdZX8aTSEwzXvAqbkM4U1dpy9KCYm89u4D3SagiWWXAD1D",
  "key26": "2p5bapypLMyRqURTnz7pCwNzFvv6Noh9RXVPfiuJXTuMBCUR69Rej9Rn1xoP9JSsK2PvaBWG1ngY6VuFkNNYtLrG",
  "key27": "5W14nGtPg45fSxXZtBMGN8thYXmAour8Nve33hscEXfCRvxmTEfoRQtAtUppLQLJevYkcCRKJc1RyQJk9bWvsCt9"
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
