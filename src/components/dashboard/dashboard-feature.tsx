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
    "MkKMFP1YMgCa2ruXL8xYkmKc56kK5K7Rz37Ee5wyLNx2HTPn3Mt1yhK2yprsGFJgzDk9wh6tzcKpn2soe6iipzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vQ5g8DmLmUFQtPRtNXeA3J33sY4dV41rqcCD9mYiyJk5rzkGwzswtvjaWNZpfeBV8K3M2M1SRAyhCZutYPjgiM",
  "key1": "3bc6wEeZHjz76JjPqB896gDnXV8QYKizD9pbsFa1LXdQExcP7T2pHyRbeTgwYD8ZWeVJPoJM9ujdZpdd8xjmJ753",
  "key2": "tWbCFeM7xHrznuS6qVSgFSp1mgNgnnBgmz5Dyn9x4V4oHo2bkcQs38CYqg4mJd7bnuxvuEYftg9rFLMSFoasPR8",
  "key3": "38PLWvhQD7NHvBiq69WRUzz4xwh5qJsuP955EQeyGJ1mv3q3FiQUaC7r9BBhb8WuZQCm2RpGNSfJXyjZudo8hYQu",
  "key4": "2maj8ocZVk8YHDhJxHFB3t5z22vBKC6WALHaZzo5zMohbKJKXEc5Pz6oRcuzZoPWQ714E2Sr3qXXVh7EHbF5tjKv",
  "key5": "5TMxMzGXNV6W5jjH3Z78H4tC7w2Yg2u92qpzbtuWX9hCq22nYW7g3an41pSTyJBicubYU89rw5DSTPb6atYsU2m",
  "key6": "4dbnjtD5MpEqfQpb4V8U7WML9rJ5eFPtGqDmM71y32T9W6Rjyvi1Utg9gvapSa1DMtk7LW2GfouGbn13gSX9bK1B",
  "key7": "5jYyRGZTRDcfY5kKKXDGPtzjQwfbQJ4FPAY5E6vWvEssjnhDvC1TZeKEmu8wAcieCML8KqH3KVmUHAd1VsNN2vYb",
  "key8": "f5FCtyxxreMVdE1NAhmPAh97ydjSEwW8JiYHvZSwmzsLXZTnhmgXyah1Uocw42MNrjgVxYYW7bQKpEqnS41EB5j",
  "key9": "5DyRGFzuRZWr99PpPZXNeN9GYdZzGHozTZXYJKWqGZtHx7SGEepNVTGKXansDKorD94zieUsnFCbXCg9bGbj1q2L",
  "key10": "3mbiL3DrqXVYK8GPqbF8NMX7KWpb8Pzs6KZv9Rj5y7VVfcj1vZtXB4GbUFdG6cX3SKWn89x88RvBNmUv4USUtonp",
  "key11": "42Jj8EbH58UrA1X6gpt2YxNoZuViw11rBj9KT3ZgQcjgg2DK1nMrjpmPcQWMN2xhftfE8qsKHoPbrwTnuHgWo37D",
  "key12": "zEmLCqb3cuyoQgipt89XtHYhewEBfMLRxjRf8z5bNeRvxyfBBEmdghqazcrKMb6n4zNAobRdc1fNfTivDMjWD5a",
  "key13": "2WF7aDj3Tm3Cvrdvn1L3mZ1nC8Fx6EJgf3xvYfURmMKURqPd5ToGw2roqsu3TKUARaB3yNh9xUJjbN5SQHrL5Zje",
  "key14": "5V8zqVTwCS26edbjnGi82QuUPa575MbJ1DQbw4QpYA55gUHxVMo1sy9y99ztcY3zrQyug4VqtK3mMfStF3FAUW1T",
  "key15": "ddnU2YFYqiQfEHEQPKvA8hsbJ9ZWgems7RXdVwCtLaJ8PdzqH6C9KVsjzFd5yvdwSQWPn3YGoPmjt9sN3qfsL7N",
  "key16": "3NpPLJ4PiKtLz9yGRhgrXfsZWRByR9hP3DY8u4z68TWCgFpqQJV427FiiDPdjHH8Af6Ten3fQ9yYUUKynEAqVd8U",
  "key17": "5xmCzPRaBWx2ZuZ6978maoRLwEfLYdMhbK3jgkrjnVjiLA4AszRHMY3suopF2EoK5BuPRPqV2HRhD2pPNVbXu9Yd",
  "key18": "381XUxjbCQEXRqRx4s7NFTidimvTuZxMitEZphPiJrrQt9gWwDuPwJs99CiAQH53193uk7vPfWEBQXWDGYyXzVPL",
  "key19": "2phhjYi3ft3eeuBTQjs37yFuwATyiqcSW57Bs5eXfpAxrF8rQVrekooze7deyPuqAtyNad5Lve1VyCD4KZuaMKQ",
  "key20": "43weT1Emv3K7CKZsX621kqidu3j8Vj6vmsQdVx3ATxvaK6vfgSt2Y1pD9Pj4gyH6g1ZNPvY87p7wpKEh1ve8FuSh",
  "key21": "CHyigDpEhmX2cRtMi3zkPbt5DZk2bzEdNq5mfnVwoM2KLEgLcEb5qC9s6AQpsB7HNPNh9o8N2LU51vpWdXDQpGG",
  "key22": "3MKwGSXQp891XYYysvKe8Tn7AeQewXLjfZVYcr4RfwoXmSYiLykr9wktAao1WEwoovnBLEUoTup26mS9uoGhk1KL",
  "key23": "4FBqRT61rFUguPEaZWeWwwi5qwXwRgXGEZRYmyefu2nPVntZ74SthfadCmAioByMnmE397vF38jA53xgu9kB5mr2",
  "key24": "5FHJorCoeUWhAEkJSG3KeH1cKGBzoDSMuBkeRjdbhrWAYFoS4Fr3i9zYomXWudFUU9CYSp9KC2WTpLMr185jwdt8",
  "key25": "3rNwvaKCztfx6GgGqsbNQv6sfuEy5UX7YAB7Q5KfoeNCG4gu3GCwXp4fvDdi7HAYF1XwTbakuTcdZknHKytwbBht",
  "key26": "2fYRSGNuzdMNszoDGxr6FjNNd6qq4SaVhwFkbuStM3RhEK9tm1GDbV9Bxv19jg7hMWePTnCEZV7F2Yajox56zfy4",
  "key27": "4a5ogPxzDqL3VnhUNizHvAHPL39WHBiJX9VTKTgRYWMnUUdbqdJPUGTsgD73DPXei3akhPW6CQUcrUgDPY1fsMRN",
  "key28": "irUdvwZDxQVQ4bLfbbeNiF93gBYAWTDKu2DePz3FkCvPc6WFzFRDX9bxwXxkT4GjxR3UbsnrXcA2iGUmbVZMK4G",
  "key29": "3LbS3BZsrkuafdXxguV6mhmqzKbiH9H5GBv9vPKadW6D9ViEaQfo9bExWjVWk9iRXAsyJUaEnWJREWyM8ZR9RXV3",
  "key30": "3BLknuHyqGdT87BhKrcdUyrejxLFVh4HvDa2iaaCv7HAuyeASAW79zvQMPisQc7FbtnV6cWtpvAjJGq9emf1dxC7",
  "key31": "5gsK9hZVEJ5tBtLCoWcbnGk72KTDmUg9tVKt5AnpyEv7DNi21j9TvoKbJxdTotboZZjyq4US4EmzCSfnCjPJvSsn"
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
