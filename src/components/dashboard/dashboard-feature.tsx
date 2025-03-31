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
    "3h7NW4uTvvhUXUJR9X8gKot6iZvcJT5r7b3ocmLH6YQjHKFRYAMkjNmGxwg5uoaM8zccJz2dRm9L6bvgNtKpMmkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LVPtwfvABfQqbwk2qpVqyq7qsLxkfmLeuRQHLxcjpdfx2EjcgQEnVMFn85xpTbGsuE5NGtv2hNRyivkGrp1o4b",
  "key1": "2Pkp28teynGzQ951FkiWttGkwDDpurveLJbwvoaoGLxmreFKKYJV8FVDdLEhFXMXHrqk9gz4ahPonCkPRNGjpLB5",
  "key2": "4rAwuUKhwH7dAcg9SefdY29F6K6SwCTdrciRzD2SJHf8k7p54AfCKZvNBwCZYaLnMnXDihm6Coo636tfNZ84YP5U",
  "key3": "4AQVK9VZsEst7wmnX7jTtZLC5GmurbUM9XqiQ4zYxpvxPNvD4mSGJpRjCETuTmLqtPes6nqJYKUS9cSM5vjLGfQe",
  "key4": "4fDwfVCynMjm5iNtAS6oetRjp7RaUn78JNCyF4uLvVqEGeN8T2wojs9hp3wvG6YAAhqnQsuBCriAhy4K8VzHUcQj",
  "key5": "49rMycHLH852Z5Zm3fzGuCoA6vGjAXQR9uwgMc9fzcV3Lg7TEUKVTPgYQeZFWY6jFKyPMHia5NsFjYPvFuBjT7x8",
  "key6": "Pe4txDAjie1JCBfL9RAdhcTgUFdnvWkYEaoAJCgTQrkpSDgM2yuEyEV6nnbxC34Zf2uVriSSKJmsCx7HTB989zk",
  "key7": "4yNt1WW87gfr6ciRa4GbQPD9FDWAMD2NTEYbWkKbofuRiatgqe5JWevsQ2rxHnPJwMmcwodwo6VGJzN9pkECnU9u",
  "key8": "rf4vcUHpTsYgp99xCVyj2SzKP4MQEaZJ18EnwECi15DhVhw4UnX2uthVzvoTBt1yhqq6PCzfXuWk6cJfBw8xfxC",
  "key9": "2C8uSdZbQw1TdreiahJhsuvGLemPJ6kQUdGEME5fBGGGEksicqYJgai2ULBva1RnouGLT1LWv7hWptXm9iNpcHiw",
  "key10": "5gysyT3gFVfqVV87joFnxPREmwVforyxfZ43pjaHkJT66DeELix559DDu73Emu7YBiQB9qvownU7NiQdq3bfdunx",
  "key11": "hhpKgz692Z4ZudsbYyGDSFR21GTLujRYwLJ4fwh8a3doBGZV3sQ67gN7p7DqSHQVeKtzRdXP9GoUniTLz7hHJvH",
  "key12": "3YaTo4BdzkrjK78sEvvsSEhygXf4mn9n8pPc3HbfxW2tqS8VUkdQ9fETiSHua5VeWhRezXzTeDRU6KnvNUfbiXPs",
  "key13": "63etQ3qNtZiUbGyhoEEcuxGEzXegDKh9ihCnNDBQyp2YcgXaxGp95Chiq4AMoqH1V7ED64FfrJHBoksQoGnndgsi",
  "key14": "3RyW8itpyU5cX9jaWKQhDqpA1fRWKzFMZcVhFvD8aXp12GHpCEcpsXKgxmdHqDokM5PVCnY5JAhcmgfAFruGsmMw",
  "key15": "3Gu8EarCoPFbJBESpMzRKe5GYNpfRjXkQtRA7NLS9xS64uQkBBBQ3wecy42Q4sBrvcN26TnX1bKREQwDn2jdMXz9",
  "key16": "4B9W4YHMCGFugDEqng9CQmEj9oVYiaUAbuQenA66gzbGfgkfH7muYTs4QuFC58c23PL2rBJy6DL3Ny5fyRJQCFH9",
  "key17": "4XTaYtoPadMKHFBkFH5kTaDdoUiHtzUfxgs4eVHHDggrxJPucfE2ArWpqRnZ7dzZ6y2b8wBoFBUGds9KzvELNuFZ",
  "key18": "3iLBjh2VRBSELLbFKXADYtGneg7PBrPTKBtEn5nJeL998ZZNZUb7VCYZpJpNpSSKLTaM7tvgZ4fHSEptsBYN3iFt",
  "key19": "2FfkXxX6gfiTqdR9ksUMQ1heYuKqf4tDPbfN9UgjT6dGmcqPMaii6DdTbBDkBCSmwGkCGZaY2f1mMKhefg1q2XpK",
  "key20": "LD8UguCUAu5nd3esptJ7YK7hSwHgswpBZHA714AydXvEJq1yToDWd1xA3AvzhSeeeT8XFfuanXsSdqo9wEohBne",
  "key21": "5p6y27wVhbgvpHQbHM7jRWsH6Ky5PYFaJTrW3LQZkd7dtzFzFK1UqRmbMZ21Ji4QEeKaVjKGYAFuuqfDMjTBMyoE",
  "key22": "LT64TxE8UWYztKkMpdQwyPxypYBC147f5KGH61pj3XChggwz9U4nPKZya6FsBUQ2sgnLJ3BFMA6LR2Qyc1ikj2z",
  "key23": "57hwXie9WLMkabawBvqeMs1JFYuW6xkGNMzTGdLPmSRBdJ7xymFD6eZNfv723RHe1hp6CgbwszSfA5Sd86yeYPCx",
  "key24": "2kYVdG3pk598SJHhcRnmDk4PkBxFTUfvnxc2CEoKg7hhiNi9XHYnGKXvCkNFWZvhb78Brc2tnEm9hCtUaooenVSE",
  "key25": "5mjFJgWqBAQ3MM3abc85whJr4YxcZFFe5RTVNdLaJcowt73GcbJJ3WUg9mL1ZVzgYNbaT33qsZ1CdybuKF1hRpxT"
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
