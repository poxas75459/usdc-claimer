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
    "4kvfc4dRtiALzoLbUKacfjTE1P4fLYgQ43ULQxM2sA8rucRQF3gAwG9QahBbAN79589DqqNcBE7qkiJEfU1FZMUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5Uem31BL9eHTbqLtJcDkHngbeaMSPbNBZC8RuhjTWMv5q3U9EPppAC8Gz9yiHcH9FD7V3Sv7jcR3ev6oWj32gH",
  "key1": "2e4mkyUKJYexDWCf7MLHnxKU4cYhhHr1dCrqadWCRXRfFS1Vj1zpiDcgYXPA23uzVxY7JKxkNdfB7Wt1Jr17my3n",
  "key2": "4bgjBNTD1kYBiT5Wo6DWwgG4FXVnKhgaGMRKVgfCD26rEnph8g3khHmZ46Yn2WWNy8YfJVhw6CK3MLynQ5DdNbb",
  "key3": "25uyLHx4k43LPyNTrHN8cxQUaXZguTaGsXQsfcXxKK4hNkwzqHP7FKVfH7yDx1TvgPGn1gm7THiBiLQid4kNYbAW",
  "key4": "4fyHtSYvyxDUi6HAogsfw3e9ZRBQyfFDoj9VRrk5CuCkaR1YfuicngDYTTcwf3MYxy6acXmR3Nmgr6PNqhWy8JmV",
  "key5": "511CeQwng2eXpx168zaboNCJxEeiKfBkLTAGGaothLruSyu6AuWQwNMb2pTC6DSd4T11aizSQBkUqmoC7ZVZNAcc",
  "key6": "2QPkmgrjuDRN7SGKeVM5YY7AZsa7kMJvUmQYt5PD7Y3Pzxr76pRQzzFGDRpKvuBdRLZCfNbvAbXrd4aLgk1PHJnB",
  "key7": "o8ve2EVvDLUPat2ixmPR5dGCanBron9CgyhDhwAaExexLqo316YCr6Af6tfUErC6weCHAwLtMjhxfNUdMKmE8Jw",
  "key8": "B4tgTLGBKH2QsM5JiFNa32wTU2AXqVEDidSQh97vqwYLe6X8JoqAKpWuRvfY8ghatpvqDFcMxfDY55nUsBmCuew",
  "key9": "5bB1CXiLYuYnCwXk6mJJHDubS5TWPB4K5pCaXT37CdyxRq455mjCq6foXRvAzXeLgroVnWCwpsCHtAMyM5rFNQRK",
  "key10": "584iHFgvuZewwb2Gd8dpBHscpPDcrLxfzHQ5oMq9gXrTosxSoRETexsDQPnDrRCLahJykCJwGyRPGr6ST2KLHKe3",
  "key11": "3QsCjnvmDLx8FLubdgY2sr9QKQ6L6w7L88XrU2qdD5BZQ48wJsMf47xCbEkZw9opXdsYJzS873FVPsVPZnf1pcyo",
  "key12": "2PrmseyDyVxX8YE7s95mgwzsr9JH5rHbLJ7mssBeozm9RTEw3oHyRKtN5dAA2BQMch5Zt9Zhq1hDWbRgTBFKfWYY",
  "key13": "2wsjZPAZncS8B6gyJUX1rSciCYD1ai3kTQbyAoU8QSshQ1gkF36Mb1VPakJurDF3feuDGWY5jFavzkC3JwovH27e",
  "key14": "3Wv966wXkowaKqXFoN4WozR8jVj74RKa1uajWvk7WZJPAQxQ6u3JK5PGRXaN1ndtNhsRsL3A7CN27Jf1tSMTJPwd",
  "key15": "5VM8hVaW24NvVUfxaiXhGwyCYciPVT7EiH3LcwQT4XtGQ6CKT4cRKrQRWZ1TYeYJPf82RyRB22AmtZjiYMfgY9Zu",
  "key16": "3Kc1a9pUrXBnyJYAmMs29Mg69cTzDBPfctiBardnZBKUUSeMVdr4yrVACn8whDJpEEcouq6CZtfTQLcMHGJVhT8a",
  "key17": "4A4yixbaKeV4FAXbbSypNCt9cThmM5uR3iG4goy7iVZdFjpAcz7H3sdwEdHPNCFU1jQam9XvT1a3Lymd7aZ7RJDH",
  "key18": "88GrJUGGEpgf5jCivEFwfDF6bFvog2CUi1dNG9heK4AYna6M458ugZy93JXNASYsndo3DUXqfvnuLTa5JWRDva6",
  "key19": "dYEYYAJSwzBXp8ZR1UQQ8ViCg6TkTFhxRWBTr7fhhWvpQP6APnYE6RTDmJYW8XfGh6VXmR4ECBcQQ57ucRt38bS",
  "key20": "wpxB9GZB9qhAi89kCWRLuy9k3fssYi2vPWLFyeqsNT4aX9hatdCj7W8azBLZ1R7tZB3uyMzWuzn4kXHveErZ3ET",
  "key21": "3UUx6S8N76Tc1mfSVwg6SNidQb9Qy5aBX4uxv6KcmGPRUMx4EpAM6mtgUT3VoeXvBk1jhKG5JfQscR6kQSeAQ6P1",
  "key22": "2fVh3noZmudKD5tafxuTtBA331eqF8CGYBCscxBC81HQNSCb5WSzG8jsmezdSvn5ibvx9JL6FvWPEMwvwVT4QHf3",
  "key23": "5PLCqE717o5MNG2i23EmoTrAbes5Zqjs29QLkDEywD2h9z6Yfk8rZX9CF1KutfVjJgnvP4Bjn7iuAPgoyb5HgtzB",
  "key24": "55TcM8mkujsUuSCZquHZWmZNaMpugBxmZdEH1HxXzAdZbtbfpMg9mM7Z1kzajp6nsJLghFTren5Bqsfei7QoKRyM",
  "key25": "4p9CCFyK17XUaLpbdK9PkX6xqCZKtLT8TWYWwt5sAewjfhfe8aDKPataSfkKk6Rgp85MnVSrr7zME8JJnwbUmKft",
  "key26": "3pUs2s3DMfyQdneZFosQNVmMzQnxCp9MhDjD3mGUBJVVGcfXw7GoKEFbvbWGWbzTQdAu9NMP5xQ7wNxR9M1gJHg",
  "key27": "5uWdZU8J543XLPsJ7MYzz2J151cpepbk2ywhu1W4KDj6xiKVCetofvH7SFa2kWX1BfprJ5CBKHscwMPkJbHFfTEw",
  "key28": "2KrdA5aPDJi6vrJS6usqv2NV3NdqBpHzck3ZQC2FLAgyqFdesWT4iv2BL27jubta5Dten2EKp7JqDFjaS3o7pNMM",
  "key29": "4sbAujp11pzjN7w9DvGfLaw1GZApuaGp5CJUgdrP4w7DAe5EMkhTnGL5uPrAQAU6c4DnyDx5Rd8tE5JuiMuQDhQv",
  "key30": "55jvvj7tnmJoVPtLDLqa9jLjpqSexZkFi3hSvCYfKRno4xM7r3gd2xNYgJfUj8F9VkVbhf3FFDg865LbLVYK1bXg",
  "key31": "21oSLyV8hqWkuPJ27zaapHMXLkJWmSQCZuoNE5HrEssRs5nMhsoRgTdD85LwoHzoveRKZEE5dcfx4ZiqSUcEm5ki"
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
