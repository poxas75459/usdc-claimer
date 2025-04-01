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
    "4xTAKe3aEM89tEBAHXWcsKmztSpUygvo5RuabJpxsUnwkkw2jh3kBtqUSKB8fL12seJMGZ1B7eaX8PNSokrZXrkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52P6stdEvGUXyiT6MVfwkpPe8oytaHGvJsr3pwBKpzyjdkHV6stGJmfNqvvfngEshHeLRynkbswVS45i9EcZ21fx",
  "key1": "5AZya7RaHuRpWnDmUoJxKdk5Lz2ZqnqW4Fmq8GNUx23LD2WNckUPeqDs2CGgZmshPYP6jabkPuWLdquWzfVEmZfG",
  "key2": "2iwMh7r93SJgaoWooTXZC36GDNeB91PHPSgpspU8b7fXTp3XVvQCfhAuabzny2fkQdbGdn8Y6DhbdJSXt59Jztuh",
  "key3": "4doVz7R6JNQricjoRvpDvgmTNibcmq7xSwuH73Aab5woJW95Le1J8EsVzKNBWhByK5oru7qfKpqFU2KqCEwQ69ig",
  "key4": "oQf1PZRwEvZABoYqzLyAdJE88K4jZpSktXnKkYBCbDUBa2gt4XXJru8SpfQkx4waF8puAhe1tz47B2Ah5dJ3LNh",
  "key5": "557YPsFKXH3NSbqjnvq7AX1PjddLwuwMc66df7oVVG1zT82Y5MhyM9rg3Y1HSLZKEGjtwgkz8hyvWgg4Nw3qeTYA",
  "key6": "3tUD31BviavLro5d8PCY9Hu3UwoMhjDUgfTrMnUHe6GVxCzkNiEB489YipeLmRPx2P4iXFHa9jKLSCRLtFEcdGW7",
  "key7": "2oGm7H135BREn23odKQimfGUX1MVPNA5A7xDk2ZDVRUQ4gSBtJ3AdkfXkQxUXiz3L42evmxdeAkyWP6CMmWaAW3L",
  "key8": "3aYLD8c8fNLsJLh9k7KJThuE7NkcLGbiBuphVygS1ZNBXmKa4owvAN7pfA1KCDvQzu7H5HkxmTiYRFSnCDRyhyL7",
  "key9": "q6PwhhNBen2F6YU7jP2b3BHwBsVVUrUkRLu7ZLp15QydsHyPZsVFLN25tAkKb1vK1mQuLJqCmga2YGDEAsAJjJ5",
  "key10": "4XgTYbpedaSC3PTkXgSFQEfubHcXHzBmqMMDuyogKLmXGcpkr49uchnY4DsXjkEdYX9ftNp7LmCD8nRXR2LZDHms",
  "key11": "2XsFR3g1iN1eJJJDxZDtfzfF8qQuhF4skThJkhQREWYpaRUAoAoGMh2JzP9C7Yty9PKbzycv9yvCsN3UTJq5khxv",
  "key12": "5VsQD976kqgjcueXrioXF2tyPZFWqPDuvBYdvJLpECtEGsd9DH1YvJSXcTv4aCWST7LSFXL1296oDM64wf5S7gpn",
  "key13": "2ayZoYLKdpg8VM9ySk2yQEHVsA6hBFBwvfBrq8ahBYakVpHPXdP2r8fN7oAYJ286Htkpwp1RQmiXHcDym1BTsZdQ",
  "key14": "4A6u8yvxd21WPKeTEBUedm3XQUGuQ89GFj1g5HQexfAta4N3AFZh3Tw1ncY19AXS4vQrCU7cEEw3fo7SKYkaCbPK",
  "key15": "5fYVWYSypPJZsWg6HS88rND3b3jJvRaxyzbHn5scMTf2fquudQZLQFwSboKe29aF1jxRve6pEnFC6yE7kx9SxPDA",
  "key16": "5SyCDEtCYx2142s4tq3eZL95JSphZsSM8xAnWKT2wouFxD3Fj16MThnGEY6a1XAvLrVQMZwDds37wk4H5Euf8GFY",
  "key17": "NczZ7PCcQG7mqJDLWGmRV385q3m7Ruz9PrK1VES4QTAAXPKUpWn1svjfgfyTs2yAioUKXTqTuUCg6585rn7RxJp",
  "key18": "2f4tfynedNMGJQ5qssGt3kMVf3RSW1ehHpQPCNPa5CGYrDq3jyhjVHe8hMEZdv8bGDBrbnS72mpvvfPYSegj1V3d",
  "key19": "4Xz8PEL33Yik6UMcjoaJjNoacKeHg2iXpV2f2uqYhjnZeQ2w3rScZcysidCtwFJRMzmDc7fftmhjVCnyCZMZBTCr",
  "key20": "3k7UNrn8z7xdvzRP6SvEvwxm98VPzojv3NpQwvvDb56sZJeawwvCmnLXvrvtCjupS1LsMrdzN6X2V7ffjUt3d9Cd",
  "key21": "3jg3ZdHLRnWeTQFKCnH87jTksbDtj8r91qPwygxcpmAyggcsxf74UnQ1VwKRLnzgemuoyJqgnzVDtZT8yQXEkc5o",
  "key22": "3o2sLaGTJBQ7iEmBEXaL746PqyqhHKQzPbmELxS319iX2XrHFr7XkdLYyeuY6PKY4tcwksKEsPFjrKN8GNepySY3",
  "key23": "s6NHtjoum5c6eNKSAEQYL6mt5swYQ7Y8KCBaS1JNXr4JTgeujEt84JXsEZ6dPfW15nL6HwBCp4mRHLZdoJXcVeo",
  "key24": "5j45SpuZJxWw5Q8j2nnDhK4Fu2ACftoURyv6kgtRhYhi9ofkFKgkYqakru4CGcGdL6hhPdzWRjZwDuQRJuNPq78u",
  "key25": "VoVfGwwzXDpo7S9p8Jb5ETkytjx2wFUE8qsWwCLYGAUhZ4wemo6Uu2K8m5u7P8iKdozcTRwBUs4Gy5mxixDoyE9",
  "key26": "cCsUf5A3XMb17yfAQazZxUwxDCv5VjHS5e2dYny3MqeKERzLjhReKT5ujJZ9a8QZEokTxb4ArrxuoFJy8pua3N4",
  "key27": "9Uk7H7Nd853rFxKWunjoT91S9hVhNkhVuxCjTNmf1VnJdG2a6R1wedNefxd3FihZ9TZhLfbVR1LBJQCyCf6L8hz",
  "key28": "2RJDHgqn9QeHwZEM8in2FinWmUoTCydqjaAPMjwuGz4sjBUx8Xe733NZz2uF5ZxqsM9FmvoPgDtSdcr8RTg3YwqH",
  "key29": "4R5HLsncJJntwvKRBy3YvsGW9bcXxnuyo5dmThMy8Lu83jx8Nx6E6oWh9e7mzhSyct7RYCeRK4p7ZF8ohVeeVvVP",
  "key30": "aBSzvK3tGsFxFSJKaGuUwRjP23gLLVFJfqbLoG5zwt1xvKxdesNoju88QKbM7fseCezZiPSCcYhcyKchP1MLMD2",
  "key31": "PpTi57vZHx2w3g2VBt3LuHxxArgPWbEgf79437bWjtLHMviBwqLYSa4Dmrb4rmUy4Jk743LiAA2c5NPqQsJFDHX"
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
