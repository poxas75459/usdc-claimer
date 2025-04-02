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
    "37oDYH5h4huzrGNyc53azcBAVWKnvDYDjwRsqM34GW7QFEz3aufRQH5mcB7U3bxbL7ry9qyYcF7Xx3F4pXP6yWY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5erKgMCXuLAHF8QSwwmJbWiZX7MhLfi321zobBfYUVjUwDGhL5QDEKTq74TaH3D6mMJZRGFYAdXkn1DwSnLMZ1FD",
  "key1": "5JAFVARYXQMrit3H536pJesAQwWi91X5foi4KRrTtBN8YuCJ3tDpP7hhArc8yo1oPgmch5fPdpEXiSspq1PvFohX",
  "key2": "5w6bd2agYvULdzeqng7iwkk7GSGAL7tXv5N6Y2qxZJ2NsKdhPxKTpUKUXy4wxMQcxYFuwFc4PBThMp5mxpVtnA7K",
  "key3": "41jzMb7C3JqwsKrEtN9hyGD8mkkqWDhh7wXFRkq93SM1Cgays3AVPGeGXhLT7PScqrgYy1FohRyPBuWEAVEF7Bpi",
  "key4": "5XuQB8hay2DCWvEfDUWT5cB3aVFpkXEUsoDxhx1VVbmz6NB5q55fhPnHBEMritP3DbQc62BVAXY6UYvNLH9mLVxk",
  "key5": "iBQAP4AamTteohqpfckU8MbmMBm6A3AQnZ6DwKzZJ2KcStRMmUTBocCR7N9k5a1hbTkoFLLVA2hGg8mreHSAnZ6",
  "key6": "4TnxaAqjo8emsDoKTN4KewqmRXqNUdVEDxDLais7mXiz1mj1iejsJ7wkFJM5TYzZs52Ey3XpxnSYyyA1nBu6RyDM",
  "key7": "3ote2jnhs6pzMqjSbYidAZNuVA7kFxVwRavRUpbWjahCfy7SzemGiNdCQJ5uqNCcm8D6xw9LArKXWUMU8vv5MhYR",
  "key8": "26Ekbq4mPD1FjR6mSiPUqJn3R1kh31z8sNhwSP4ziMwppoU5eF1FmvGz3qxCxwCknUyhV6uuaaaJwZVL1PN8tmND",
  "key9": "qrxKZW8kJxFPRjYMp8qWF1jAHr6c9UxELN8ytt7ahdK8jxQ9RZtBsDe81tRkP5poxK18x5bgHjiBMNvGZ2axkeD",
  "key10": "2gBiEMv3mXk2iJqGWBZ7QSBKdo2dm1cLWPZLsK58uCait8k4sjcVHFFq7zGDr97N9Y4NAW7PdG1KaX6dBekMqLkd",
  "key11": "2TeCqV6WtQcKCDwvh2wg2enxDKeKynwd92XFk3TfY3k7ZSCkuqG6VSbYFyqdxCtQMHBwCxan3wvZBQuTUnsF9FBx",
  "key12": "4P8ogxbnRKL2eDZywEjvR98ixZwE3HEDe1sKZCGydqR72xkUoHuDBCFWcSptPQ4Hj6NpZ9aTkwnb9KqEcXMueygz",
  "key13": "5cLU2PJQByBNVcPR7LXeGqRoC8KUE6G3LuR8JcMvwQi8NTU8TGDjp2T6PxK2m2rqoCyUh2mMDnpjonKfDw9hvRCG",
  "key14": "46PWvsDZt8jGT9cH6mtfWnZG9wvTjJRRJGCWCzfzxVMcvui346DyVRGuFfz6ZzdvZCo97K4Aabdc8uvyQydUBDG8",
  "key15": "598CxnzpVFXHs1wwHZaXxViG5hTkwxAHepqx7XJDahgsF6a4cJyrtMGyLNQfFZiRmCCt83MWw8e6KC1sG6bPqnqf",
  "key16": "2ARqsdmDaKhNovTB3dp5oY9pKKhqwB5aqiBX8DaZj4gtQw1hqk9sCqgJdoRMr1SMBTtwzDr3dmDTPJqY4F1aSSQ3",
  "key17": "31gVHoLzXUyDFgcsrcKNvRGgBVESYvu75HC2Zc4nR5SoRAmucFX4Sgipkcm7iEDPrchbb1w62iLDGQW1QKjuEVSW",
  "key18": "3XsNLjyxYyUYtVmk3xnjyrrV2iJ35R1GUAeg1E7VygPVEE9sGGwB4F5EPfMCSwxqbs7ARiDSnrCEEeq8RUR9CV1c",
  "key19": "3ukeWvP2WNh4yDAMH6VDEMF974t1iz9x8nqp8EtXtkULdyTnTzbk4ckMNwbtP97Tqhvc8jYiBUvwedrT5ihyCXg5",
  "key20": "2NcdNfcZyZgKbx8utxf6eFMZ6J8EJ1oJrshSwnLusRSwcnC3SAs9E3mmLF5mQkGLnFQDxh7xhCAypqoy6PxfxB6B",
  "key21": "Fi9X7MywHpv7acfiHTj4Gr1eXUiWtP4LgTF5pCA6UaGyuKMHztPFWJ11kHWr155bU3tDTvDobtwm9daNYQ7Ra1X",
  "key22": "3TXFU1ZQ33wVrmJ6jKhMn8ZqiiAJPEhKnSnRT5gdR4ScUCPzqQ6Cy5h38peDy9XQFhDFVSicFQjUkWKhvZdhoruc",
  "key23": "K64oDnYHZZ4iYKNx8e1J2TuA4MXEWMnxoyWafu3napS3XfUJhUmkTMSdGudU5ezNdASPS6sE6AYcop5kaGoagKJ",
  "key24": "58xQ2AectZzDJffsVRtLcLPRK2DEsM7iPWQGZ9rT95PXxApMVV66b3PWPF54ZXHKbbcT1mrUxsKgjRKqHVQQQ3zD",
  "key25": "5hse8YihnKwin1nDz5a2H9gvyAQ8zbGuNfWhK6zmaueoDAkt2GRUpzsaXDqtMXzoVxtAT9G6mFM4AkneBYAXpX53"
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
