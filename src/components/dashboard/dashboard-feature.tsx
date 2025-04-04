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
    "Et3pgR8TDAA3eSKS9eZ3e5FQB7t72ESZ4TXF4CQcPAASkxMNdxsjkpzr9AGJy55nXGuHEcSmC1HHKC3GYsDtv8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9GqYENSzgpzJ5QaSRqa4aof3huo1FicUyX5gYWhujRxA9FMHZNkiUtFeWxeuSXGar42wSshcM6733wUL38t6ds",
  "key1": "45hqY3wyTvoaZDpwcmMDv9rJ9jhCoQXjyp1SRLkaBckM7v9tHm6sG66jp7t6hkdm1Rr3sHaGESKQKaiyuW18UkM1",
  "key2": "3NsECTYemhrg9YrQpDPCJ7Ze1qYd97nMcK3aocTYjjKVSmKHP42UbqTwH6o52udW6oQ3Qttn37ugiLU3kQU6LyAD",
  "key3": "4g2fu5ycHF8GKoUMSPhTBfstntUjctRRZJtNbepMnEXmEHomyfFLz3Jxr3YFnJGdSYSRNzwuBd5mDTUfz5RBmUoJ",
  "key4": "5QmArKstyyk8dKHjGpAyQErGfihGaediqhgw1KTToJ4qZXQReeSpdbFEHPY6wvvcPaixxYf31v7Y53Yao7HEytQs",
  "key5": "3pKu3ja6pthSvdxnEZ7b7MafZv8tiqWc98mPpVQBLsCVht81X6m6Esror31DuwgqKGLy3wgJ5K7HzSSqk3viuije",
  "key6": "45DWWL1NzAPdSLUxZo4VaexH4d2DoPyKyYaEQBHUP8AiHWbfo7VyyBC3kjFtXswnAHsJuG5zgfPYfsDoru2MQJEx",
  "key7": "2veg3TXrdktG29rNm3Zg55SKNKK7udY9RhF7XSM17UNpoFRKfnGosZ7zQwPzqHXgStdN96Vx3xvwBXDc8rtRpXdC",
  "key8": "2HLVP7xQHqHQ3W2rVdmnsi14L8TXx3QHARy8HkpCcWTaHB2u9hNzWXD8sJvUZwcn4H7WHkvCW8Lv3NRqW2qiSZd5",
  "key9": "5dXTHp8zQQR2yQtg3oUpE4V5KdLQyHZ4nrWZH9X4j6guKNG54Bi7VEHb3XreiAUc7V5CsVaYuYu11g5fJm1Udxzm",
  "key10": "5qjEc24ZGuVtimrETovCQMQiAMbB6Rx5xrE2Z4VKJt2bVfdiaNi8r51rnRvUX22D4JUQr7HDup1CHsgYYkz7h91k",
  "key11": "5hvaprwjYAbNm4gBUCHbxUjqJsHTUbt7kZPJZrkeU3ZALFUAYhY7Ny81C1AiR5n5vkuK9pxXWhoRJrA4ydHL9vgH",
  "key12": "35yJqBc4dSEvJsdHvBqUGziYHtjWkrXhNENAm6KMSF1hS7SfEnEn4F6VRaYPqh32Y7gL8GRVZTjka1xFPTu4TffP",
  "key13": "56Vpj7Zb9ejtmetcop6cMgZNQKRGrEyTunUSfMwnuBP65ynePZ4nQVuSLBZMLHUyhUWpFQ2RuryeZCY6rWYde1qf",
  "key14": "RuJb1SVEEWgx4JFe9c9srmfFgLqjVKLjEf5SjYd8gHmdEpuYZ6WFzLsQ1ad4D15uzUQF741pwZKYhDHEvAcpVFN",
  "key15": "29FgogZgwHMMjj96eKqJCKW6VBcWqpdF6cwpyqszN6Z7wreTxgDck6aZEcFnU8NGXAHqhZC23xYwLjFtLuLZkxDL",
  "key16": "23zyeE36ecSQs5usEVFTP3kku5jSZwnDL8Z8VFsSG5mVkkAPqi8NtZ45RNf6fgtTLmgaxj99zqJoxX1peF7Ay8RD",
  "key17": "2Zx2w1kGSYg4sbcD194dFgg2XggbiBw3MV9wuj2y4fiJUhvs1VLR9LLin4ZbBG36F1ZuMjQbnDMnjC3f3Uqt9sX6",
  "key18": "5aKccbDaPCQ1xNK3t2vsX7v8JcF5QJciQrKiy8dTBG6y6vT1E55vhYLvjz7p238tgwLG88is4YeAwHQZH6DEtXqE",
  "key19": "27XEUzxDNuybhoKKDTaHvG8Gn1vRJUoNzM44xn1wkwBiAyc45yqbgMy1oaH1p2cskBpacE9n6Bx3ibCpALj4L9ay",
  "key20": "3pVneRwXiE9kJuU6HMtu9eHLSj4ruXrAqEgYRkXB8Jy1gCG4txCdCgjgkSkJJ7zEyyTPzDSZsNMkQzrdzvxX33wK",
  "key21": "K81jC7eXDHghH7dpkUS5phKLXHQzZNdfujQ8dHESYESmBPDay3o4uaPhCLbcACgb6szJAJj5P8UV87Thf3BseEa",
  "key22": "diszWqFFd4UJ5tTvjB1b9Z8JNU456pxT3rLNaznigZxgcxCKZF1qhoZf3bqUZYyWgpiwPvvTYPCT6iN49ZoxtSd",
  "key23": "5spPYxNBjq5fwKzgSXVTUVFD14858MaVoaerCvbHEnWdztqKEDFNKhaF352ssE36oCHxQv3n7gwRqrS8XsLUHSqS",
  "key24": "3V15DGUmJAeWvJjvWDe6GdUqrSxp5hVxBxHBVtktqK2U2vRWuE9RpxtR6jvWMsGEfegBE8MRpN2gMHR9fp4bjSSv",
  "key25": "2NhUHBj1DGtLb24PDFdpEDztX3mkHKij6eFtVGm34FqJFaJ2azZcUAgCssmTTzkzsYPEjWcYVCbGZbBhq1DtV6MY",
  "key26": "5dthsGE4x65bHnyWTFYqFLeLkH7vBh1FvEWXXzZcqbTwwiSHpWYtnMNzdm8vtk2jJe8YxSsrm6F7c96CWMYRv7D5",
  "key27": "6h2WevLM4Nx77qcr3LQdKphg76qE1zkeES8fpysDCTAP7txxXZFVCenzL1FwEEPyyPfgXRYqYf9RtAyja1dKL4T",
  "key28": "2DtwwEGQ7uqwV41sbN6itmv8xH9ryHt7tREf86bU2m9TPqGDCDNLmBGJ274wPdZV2mZR9T97BmzELj2vUG11kqrr",
  "key29": "5GFQtmzKcE3HQFBBvV3x6oX3Hhd5Tk4W1pud7bnsA5CX3cRDWLKpcfDxbREMLcKs7WP9iZ1HqouJ4uysJSoJbqQs",
  "key30": "5dAGAhEgfHNWLSg4ZWsrAZ6uudj6C4pNW6uzQYxsjnmJZs7gEQrWVfvpjgM5bgTPV4edrpYNDoSfuL31vFU2bvpH",
  "key31": "2XCzghTAojNhMaFGnHqRPdrWjZXQqH7bcdpjRsrhKZ68E1gnTCYCPm3UfVGgDCw5CZukNN6zWkt8XuX4WudXcyvu",
  "key32": "4J6kWS1BUMZsjNEtyM9M1fPUCVp8yqLdfsEVbRcKksRLCUi7Hec2goFc8ntk3moVz5mPsAY8LYmkEHsiBLd83gv8",
  "key33": "5Sp8Wtg5DNxhF2nT1wD51zkk4UxUBTq2umz5taUX4vd4kfDRFbaRkoFWC6rYchZGuRHYgCvvfx4NEeTfQkkzp3QX",
  "key34": "5Jy9nhTVb5YbUBHYEhQTvEvXH9GCyYW5arCi9DtsBEbbMvor3ebggcRBsYcnzwQ6SxgV69UptrQzPcbK3iQD8sML"
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
