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
    "4PzSomuo1r5787kw1Zkbkj3Ffp7HfjHM2wcfw5SX5e4145ciADBVW8wCsdmA6K3S5oASCQ7HxNismkm3KgVqYi5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umQsbp1j2QyfXouUuzKafCWojxi2YCniVLuGJ19FVnGsT3S7MfngW7sZRWFFiAMqFBF3BBeXPkik9Z43JAjiUsg",
  "key1": "5XjqcGL3xZvuQb63SvmkmMGUK9KN6ZRPkQyWd9cVmmgLMkXdwfw2PvCtakn1Gpz5UC3ruYUXkNAuhTHRV364wBdL",
  "key2": "4HPUWxDNyyHNFbGcYvJEA4GMH4ufy19sLhhz3Xt1hA8rtcv8iHQHvJ9GouMZKgcYsRxnvx1Dj6oiZ2wXwEAW9gN8",
  "key3": "75HKxv5kBN8PexPA8SuDzs3qC2dunADyffs4z1XtN8i3xasvksDt7DG5yKhJAQgrgRvJ2JBJNEQVXwutKsdy41z",
  "key4": "2F7RPkd4tp1XuZVv8JXmtxh3sePqFjoYYSemBaXauHhVe8SxthUb31G4Ccpn4oGqcg1ETda9FV2x5aJs3nk6ocHJ",
  "key5": "2eiHiH1zSsGJpEwtjwcUmRgiVQQEisEKTuzmTQE6XK4rCx2PNZaryPZPrnJwHDyfkPRZhuxRBkL7hboX6h79mPTy",
  "key6": "5PSRRP9kXcPXsGqRg7womyTy9YK9TgC5DbuhTLYAMxJ9ro9rELQFRTKHPfYB3sUreRjScW1xKdA4tRqfi6bxrVgB",
  "key7": "56tWmCbtZb5KdYmjvogpuKLH1ttHhz3nuxp1kfnuiXctL4Y7GMEEYVKvo5gxmqbDHajPTQaMTcEf3AyydF4uPbHC",
  "key8": "2cxYqJTrdQ2JJWeqpTXBzd89MZ6oXZ2UpekbBnsZqnPUR2JmJiibCVAZYcq2q4e8SGc1EC1ou2X23KtbKUaVEpE5",
  "key9": "3MYZRkS8wEhjz4pRB1odfrXXLybCQzLQCk8cGfsHD2uHMgtZeJrbZ4AA7PD3jQqCqvET9vHvxkouW1poTptCVj5f",
  "key10": "45RgdYGCjgjb2xF3e4eTV6fMS1itCkjC1wb481giodV7YTKFVZhZ7rXcyxRNnKPZ59fDy65jzRfpPtpSYGjx1F2a",
  "key11": "Pqz2HVWTAgz1c8W8CwEriA6S8yN2G5peZGch6kAqdgoJa3F8eyNU8YG4Qx7mekZ5tFcz7PRpiWprggUi8QKjxY9",
  "key12": "34ZCg3zJNv1WbMEPPA4efvGSEqku8PHujkPHXaQPyturW6U1Ygub1LZ8zEK4MHaVAXv53hjkttC7so67rrYGxS2Y",
  "key13": "3yQYoPVhCmAoMX9VP3ktEMNfuXU5mwB1HiAxKaYUzsiAYF7iR4DsZHCxK3agtUbrF4yW9BiH1F7kugDauca6hfMr",
  "key14": "52bfByeb7YmEKfxsATtcjq9AGRajV7QL43fdFn6n5h1dZBvYzf47V3hXquBgwS3uDbGz2feFRLh1TMKMeTmAqAQE",
  "key15": "2VdRZ37KEc6NRex2cKDiKumRwhn4fCQmvfDa72kqt5EK2Prhwfh4p7gQhd2KdjqKQq7UUhJtmANGLVD45TdiWiSu",
  "key16": "4Q1e6jDJx69zyVwwwir27j6qw7bZkEDUJT3AnTtSqZ7Vd1fNRXPMnS9UX3ySCyiaJCKtjArsCnuD7TDUm88hrbiW",
  "key17": "CeUpVAAertdyCfboZ9rLYeCkqn9bAekUu5xyQzERdoDQLquWdLt3zw1fb416ZYTgqrUFxF9DNfkPstzwm7GE38Z",
  "key18": "3rPcV5sg8od6H8S1LfpcYop6Ky64hZnhKLqbbPmzpXCJBvebqbmma24K4PcfxboAi4VKiFHaP5wE8yswNtSDC7C4",
  "key19": "5LqxwVE7DKe2iYWgepEFJkuMqJmruXggo3MWURWP8b9RyUghkE8pjVTacUCszoers7rJRjr9NdvNpVaB7DNZS79P",
  "key20": "4Q7XQuufGiSeHarNuKzyvpL93WMPYYHxTgdw27synW45E2TASxGYG2B64LxBkVaN3NPeWasawUA78mm3e4F2BNrK",
  "key21": "3jytP6TQ4oEQuikCKQVuDwtDyC57BJPqwkWRvKYYHJvFv6uS7Tu6LsLgN1F8XXonjB1nu7QPDxCmEKLu1jWhwpz3",
  "key22": "2Wvsihf4MkRRFtdKPSpXiykgQPcWBVSWHjZPHDhXruknAn4iZ3tqJg9j9BnUegpVJteW4JEcN5m5EdSs9wsU3HQh",
  "key23": "5Xiw7TADeWTCib9DzeUYkmtQjFvoCke16qon3L35KSeLMMrC33smes8CPbptGHBshdjuawEzi13arzwR64TcZTLK",
  "key24": "5SMvzQ7PDXZBbs16xZjZY81mgmAUs7aCcNR4oGGfGsQVzBz3WJt6NDUxQfHYY5tY5zoeKbcxWyK3wd33aoAwFEAd",
  "key25": "49MVqHxFKtdC4H6y2CDnudrMzVabBoy4qoUwKqaPZr2eShM57wSihAX13eA6XzqVNRCdXskCf23La8v58gVvovzz",
  "key26": "3MZqkCmhmhiyiW5s9AAHVYCP4sEzV1yVq4k8WLc1ZxxTYtB2m5Cy9F37dUvTQeZNpYPKzx1ytZ98VsWPhpA9xKdZ",
  "key27": "3FDGmf75iZBwbxvo3CRpdxQt5Hvd284WRhyXqnBELUWcybhqnt6Zb728EDqcEXE7Wk4E5AYRpCpihi48mMWUdVpM",
  "key28": "5KcmBT5TeJHzDSCbcreud9LVhtxrtzB6a1ws5p6aaajCRYpeFyTHUxoUskVr5BdP63L2N2Sv4vwSv736gbTnuY7Z",
  "key29": "3AzgNNy92aa8DJXsSKtWjqejARi7K424MGnQ9fRNMeAw2rDEU4YstthbVaDaG2wbC3UE6ZK3bC9RtGnVeWUy8NGQ",
  "key30": "4H9hAKY92YnTuCnH5D8fcf9fvFuMh11eDHaHTpxgHSqMYCeeaCViwpgbBZP71DguubsjUccxFoyMXV2F6Hrfj4Pc"
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
