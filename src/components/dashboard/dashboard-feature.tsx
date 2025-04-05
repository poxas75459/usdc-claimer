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
    "KvsfJXibvN5K78eRyEHB6yiqFKqrtSG4LXvkksa6PAEnzKAnbydvj62aSD59JADbMdocmYjdRfHXUiByhXArjgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQ7sTepRLoWP43RcrxcCtz8TJMYaR2uHna2RhRu3aoYjx1Km6X8gcK9n8McSCJNzD37ZT7mnxpstTjXWnFLPyt5",
  "key1": "5ovgqq77a9AhewrRRSeXWUX7cEbcwULaTZTEyeBAgKSTSZLJg7y5kZBZxyXaUcP9s7A939hY3hJQCA1pUgbtSgxH",
  "key2": "XzYGffgzmfsfTiVaLLYdwx1TAL3kzRAvVFeKb9fnuLFNCh3ZDMN1VwNshdy17Tb8i4isbceXa9tZzdJVKYTj5gK",
  "key3": "43tR4bTGjmCrvzxAdw8zvog1RcdqFD59T2DBA9puqpD53XJdMkuvQZJcVx6mHyaXCbudM6wczoHLk7qvQFD4JVE",
  "key4": "ANXLS9w51fo4zDRJu4zjuP7jcc3iromq4ubNmDV7NmwKBK8xhtrCTTg5J3aBbEpqcyVcYRTkrb2tsvU3wgwHXdz",
  "key5": "4eWktpkoLxawR9Eju6XPjQC8DWiVWfkWbwTcrtyaMxQJvdtTvUzQJXpKdU5JcbyK4yd8E2hwrB68U57ARr9Y9LgM",
  "key6": "v4kkXN1qQjrwaHJNomA8SJfuWzU1mY9hgayKuzx34EeibZbCJgMyeZmJUsbSKt3GWgqYThKasYDe9q3wKyzTZey",
  "key7": "3CNheQ9e6ogFG9zes5svoAeHN92ywyifBi2LQckMyYqisMK2uvpsQYC6pYZSZH4WdPZE4khcat9vEmapFW2xXJgo",
  "key8": "57osux8MkdVq23ri1g5UmJ3RVNU2xuA1t4VCA8EP8ikbNUQ7ajptuv9zSZAEzZMy2J3nXV7nFo4woGWM1qAj2x1Y",
  "key9": "3RcVTbBbxWTKuHT6cphJC56wZB5GDnuoKqUvxDPzuu1mpZEkvEvJckbp5GyYKaEj5y4SkkS1tTj8CXDFTafYmLX8",
  "key10": "3yPcS9qi4zZYRohH3xtSPg7PdGimgXZhviQiLq1iygmw6CJjAj7Ed9Uch9xHR2RLRsaRqJa32DQksRa3Qm884Ngs",
  "key11": "3EGeTfYqaYbvEZj9VoPArPCQcJgRsnCTGfwRiZhgLC3fTUHdjVtdFbVX3r5rJguwFSQBRJ2BJbpMNZf8zGCdR8cv",
  "key12": "3aSwBbhzWaft6cGhjSmkpjRaWn4WvSQMEKTYTKFyrV2d5qPHNZnUeRP7db5e43RYPSaYG3L8VbtvnGnwoSJUKTaB",
  "key13": "45aRNE8Lq1udr47USkpzpFzKgWomzXhks2k1wR1hCZdok4q6CJ9ebuznw2Mv86yZU62rPTeoZUwQR75CA8bVUHY1",
  "key14": "4SiLbGX4qKQCDGjL37erWXyuVxG7TAvEpm2JthjbQoFWBF77rcJ2cGZ5VjfqyyTpj7zuys9AXV12gEuMVNBqDk9C",
  "key15": "2MFmUNevSqrmerMxrmY4GFBeuxThvCxtSEVjX33poc8331p3rEafurip4Ro5wyH8m8jAUgXziCAeW558snSusK73",
  "key16": "25KvDTJYFjtQmLAkK7aztSDHZGUADPsJxc1qLnjoT3HAAyVMa7hDYZNE9cJh9v7UFbdTVdjJpAo85EM6FCyif5fU",
  "key17": "tSta4YbYMzEvgMtV8DfUkzPHhHqozYPCZer67TAhmsj69raf8Uciqnoi2bsXCWz9rqAa3MfwYGj71ivqdepJNGM",
  "key18": "wZ1p3C3hQHALieeQyJgNeUoBqNoWxo6zWiurYwCTSP9fswTWRLzsuk7To3zQgowwNtB5UL5EUyNvK9mJCdwGrta",
  "key19": "58U7sHCpcgH5TnJ4UYpZi4oBR4Pyb3rLzSUpVgUWwrjJpS65EBJu2hvTaB3gAusj4FRMJP33JAbJRSYnNM5fz4Z7",
  "key20": "3DqDuLQFHgTykNzCbNxomTJm3XuxChJ9T6jg4f1ssWSrwwB75yQVCwvzWgyYthfasx4ZZzsJBmKzYSGPzXs1wJfZ",
  "key21": "3Bh2RT39UWTDKamJkicNDiyJEvASC6NLkUZG6FFJ51DcsbQx3Dw45cieiP46AgJ9TEKf6xQxQ8FoMRCBh8S85KRH",
  "key22": "jg7RS3Qsy9soZ7cvi8vNNNwspKSJiFZoWGA3vQNxtxKpWUXwuKFRXZxLoeveFDytxNLqhcj3QcYxnuzTqVwwKBe",
  "key23": "4PXKgZEbXZqZ6CbRhmpoXofjTwpvt8yWveSq3iHSkJ3g2ZyPXdRj4cxvNJ2rmqYbWdC2Ud8CUgCwfjivCJxZ6jsN",
  "key24": "2XYN44g8icEPxsgedM7Ko1sK5s8kcC1Z97MMV62U6dpcwqC5Y8HSbvJEBovJK1fBD17VRK34obq2QmbiwiqYKUBJ",
  "key25": "4amxYJxL9tVajduQbxX33h9nvMB7vsK4RTfqWBo6twujWMfkig2bRjcMGUDqbLC1sfDWg6N5GP8TDKb9Lf1YfMh4",
  "key26": "hNj1E1hk3ZXqeCMNv9FJbWvUQn5SpN2Sy8k1LQvSDx9NbfJ8qpibKKRb3NvH2mLFJTAKmDjKDbYkQfNoBmw3ibv",
  "key27": "3PJPobjPxubMmXzbnLZJc2PHU4CXqvSDZojgSiTGvA2b5okYfmGeqjgjZXCLsuBn9xhkrVkn5f1ccXjMVx8cgrJh",
  "key28": "2ENxPCwtE9CDJEkMhUx75uHCu6D5K84aJCoNoE15NuFbXhjSn3qwuCqKCqTp94j5b14eeDYTbEUaEL7Jv8Jpyqxh",
  "key29": "4X3mYsqWiupH6aLLgEKaTgh1hdEi78iJ57wshCeVg5TCikEfYAf16oUCmu3VSFNQ1tq5TvM9v8iDY7e22cyRCRzW",
  "key30": "4qvgdKM2oJWq5LC7tgDruR42QEKUagsxW5NWPojk9TBMa2cuXDmYr7prGkAjDgy1AentM5bi1zwXWn5zFA2B8GB2"
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
