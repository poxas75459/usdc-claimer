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
    "32N6i5b8E4HcFzXiWViRnfTcErJDTouQXYn2hNiF9tfLVT9dsfutPj3vTnFDrmKLvwHG6ddporCtZWAuMzx21MvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TbaRjqCVDaqR1MSfkgoc23Lt29Mj8B98GfEjoUmogTekA73AFJyLmFU7VeStnrHaJCYvjvjW6qWCFWHJ91JKnv1",
  "key1": "5xkzaaebXBrw63cSbDDSu9qoEmPvQaeEXTFkAeF2xSBYMPwiCWvA26J8SfWgsgwTVMeib3NFvAymMXFUzL4TUx99",
  "key2": "fhdQNZbeNoXujNFnCXCj6uXWnUzPo9GqHaWsuykYPqRsMnvRXvTa1F9BpkRzZtQrqtHtKTWDqMX51axmRna4co3",
  "key3": "5sZnvsbbCf8vwwmgU6iTQ2ZhecVCjGEWWzHpb4715BYWuULfyYHpEfz8J7YjSHyZR4a7PpTB5paBng16CcuAaVKg",
  "key4": "V1g2JjUsieQaB9B1auTv21G3kETbgVWBfJ8e9fD3wpxQYtUjejSLRUnHjnudqNzBEsFvk3nxb6G5zS43CjEVvWq",
  "key5": "jJhYGmsPT8b32XSXkg8w1Tit15SGkfbAkzdHanU4gVcqDWaR3UXYbMQjxsdHff6NbhEHzezjNn6cEmoqjM4Yv12",
  "key6": "4ECsyq3k7FeYtZ5rReW8i3di2junaUGevC2p47m3EZE7z7z2YuCRwVgC5gqjrE96k1tPiWsDrhXWU2PKusKwQ9or",
  "key7": "24TWmdvzkrRk4wqy3M9aCMyBa5PBzkTyL1BRZohVTwxvZpQa6C69r5jgJyRD3A9CXd3A1YDc1sTtYp9YtpbWGzBM",
  "key8": "5f6QWTqPzfUwCrcSvyQfYtb6pU9GHNA1iF4CTpBjt6KkJGK1XZc6gRbeSCRbHfdfhVqJUwUL3Zvpv15JreeZcDpw",
  "key9": "2cRzQ2CXpwYtjzSNFgATtvvKuMoqJv3FbyzxaxwGDBPuBaHEV4PytEmfCNU2fYdATKZnnkWKtDxpBzWkanigAMHp",
  "key10": "5EvHpoBJecxKDfa6NU7KzYchDmbSGnsrKimvjLnxX36vPzYMXhMqdNNVEitfRcUMi2ANbEbmue36mc9wJoweLrVE",
  "key11": "6PeeYMKHKL6Ae4WkP8o5Aur6uEJpHonXy3pKeMirm92btDxcenEURzxTHgVK4zTcE1ZuhmZpmo1yKrtgZDz17nG",
  "key12": "2417VHDZ38S3S7ohBh2ZRGdSkdBbGhpexzuMh1yBx4NMcbQ7VYzt91NkBQXpzhwcsdgCA4FEaVqKuGKMtK5H6iTd",
  "key13": "2GRu4gm8hot8Br3nEtx5tqrUnn9T3tsP1uq76N8aiZsfkcU9itSAW9YXWnfripRYzFXPM3rk7gxpvXi4FEi31Tm3",
  "key14": "5TU2jnXddvrpDn4S55TwAry8WmFgEtUpeJYc1PpKRdmoqXnCirfPxDyQwYadR4xiucbPgEWcQCabPfWz5U8d4eve",
  "key15": "5dNRGNw3jgBvCgxEEK7CNZ1Sjqukm2qTWHQc7KRLmfVq7F83mEYXCDYZTcvcyJXxw4shrNXUvF65wLkKFUHtZh3q",
  "key16": "2LraR6zNqsiy3aPNQQoYToQswUDQXBYHeK9ojE3xZdiXspxfb4whvSL5N87Aawqr2ye79KSWwnkHA2bQbQ9hxXbq",
  "key17": "4HEmZT2Aj54CDFHxadqc4sMjR8qvfVqKn8J11fQLeJhZeuteY6zBQ2epbEkLHXC3iVEZuraZvpzv2mjMj1wNuUMo",
  "key18": "3EfqT26xVgx2wp3Vgsi69qAo82VRYMqEfjHwUa1qm6tekDw5YMbitQMKtesf1JZLmGQksD19J9zCkeeBeiX5b6rJ",
  "key19": "51SAS4Ryg3bbqtbe1wfmC2wRSMBriJ9iAkuYMvNmFS5U3qifrugrq1HJXbRP1iVTe64WkvRLHaVkTNyRJkNsxMPV",
  "key20": "3NinYf95euH1SawrE1SZza4QG4zahpHtfKJGvZsdSFfyZAV5U6JnMGTeaQ6WtoZwtYJ7aRQ3EnpHmqemyXDbBwQh",
  "key21": "2Sk6W7JkS9bxj6jiUX7cA3Mjp3jRM8dqfcj4Z1B9nJB7D8xp8euqpnkxJAVpfzHAVn9VfpoUvhNXWbXgPmCnLLNg",
  "key22": "3kANKEPPjWoWKmrw6ZLn8ehEsWkFj58bYRvEaL9By3aG2S8DYVzEFbGVaQPidpe2Up5eQQ53Ay515SAZev7CWgaU",
  "key23": "57LCZu7NKzZ8w7awwoHGk7vCJnsFGsU4tujbhBp9o5mRtR5zhAqCyMqRwgtDHwcuswnEaiXa3fLHGsGdZwkqHoAr",
  "key24": "2PofSfcJcJ2AqwpuX1Kc6wtXPJkVwaA6cC9esJqQmdFZ3TqrNxZLLpoqb9jH2EwCV3PWEHxW1FZgYK5rKypsYmyG",
  "key25": "3eWMr1toXWGXYfaYYphm3S5t7GkTwAtjHznviUEjgVjjpYLfw5s66rQwNNpZpqeYuwdg44yD5GkCUce811PpHbXz",
  "key26": "5nc9Ep7dVne2byZKXxmkRLZxMHyFWdD8eY9Lz9jK2VLakFpx7J1WMQ8LxDghcQbFr7Yey1vGyRyWUx6nXQYYSzdt",
  "key27": "GkZtSdMcWaaYoD5aywjBKN4dmzo4uMoJj7HdMTEfsNcUuu8eNMkeWjNfx5UXToFBPd14Y4mQJVmCY4ivzYfZEv5",
  "key28": "58nMQagEtm39pYiBCbXEqA2aieFiUYUMmt7bXinWju2CJ44bQPudqffNrz4Ct8m7HVHJBnUzeM9gft7MH4s6DAi2"
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
