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
    "5RZ9UBKoajWutv4W62JEwgnyf8CeFwgkpZBnx68D7khJ9ekorh4RZTmUc7VbUCAVbK4a8PZ2g2Y5AMLGbKHwrNZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SVSu6x6XZFDm8Fg5uDikFQFQsG3Bo9Wt2BiSab5dBtnwzQQJbtiB2gn9ePxDqZiiERA8RwN5bZM1xbsqTUrwUp",
  "key1": "3H9t782jFNKbhq9BSHjUXWLNXv4JifX7LU5vx1bWSAk8rjha9Hoeuf1J8oxCM4Xy1wqmmwcrQenHFimuG6CH9Awa",
  "key2": "3ovnPBjC63pLBrxSdh8QTtN6mEa5basVEWQ5MY5rn8DPjrfdnxV9vvyA5sqBSaueH8UDufSZwgsjLXZXL4JRCmDQ",
  "key3": "55VjM456sSuegunTP9xg5QEyxdQ4rFk6ms8Qiqz5c51iRWuP6tJEMi3Zmrg48opKaxstuw86QVkgztuhQQ72Vjp6",
  "key4": "YNTCyoPFZquiuFiCYRRaQYfYKQ1GCCmBWsW96q96SgrccCasBf27fAynEez2cbxXpSENxo5E439mro6LDWWpE45",
  "key5": "3Fy1RHNJLqSvPSu9ajS1xVPA2hzkz26RWmSRQomFttUQFNVpJQupXxvsaxTqfrXfspJz2t9978Yah1ortxVjLQCK",
  "key6": "5bp1JqM6TfAsxACKz8ZPKduuwZ1ZSzWPJ8pnrbot2xKxZnRKyvyGX6ZP3YuoYstS6sSnr5mFkgybDcjSMXDRuMSF",
  "key7": "5tTdHHmyecqqM4ih5Kx5kFtLLnXWzTEDqFMBgMzwTa63gudjQz2KbfMVMpCU7jqAcNktsnDvYkiMT63f5KJmigEC",
  "key8": "5tHoSzEzE2SDEM7c6YHf8BDTd8aip68R4brh7ZnUSm2zB58jguxTtyJgY5SqNik2aGMpHvpkBoF9dy2zQMP5Nz72",
  "key9": "4cuFpuTCAE4RpFd2QV8PvU3MB5AJcyng8wxejayQ9NTk7tWJ4MiwiwrAyWEYNU5fm21FdKZfQ9D1AqTbs9YFYhHb",
  "key10": "549HFSrGdtg7Y86zzcJwhFfWwrPDju2VhQW7zPXmJhwYT3fXYW89ZDgVmketcHvVDfrZLk961a8ZVKExrG6yqYwp",
  "key11": "4nKc34MLZmo6xeDK3RUmu2EibRp6Bj4aBKdcsV96n1TmUKWy9kSGo369ptaRYeyZhCJJuMxPsYfZLFWo8S6cFp1n",
  "key12": "4eJitmMxERZZPhfWD8u5kazsbmyLwFdpibsLNtCGaY5dBCZ3Bfxwoqmf3n74WJf9mK775XByAB9zdH72rbVSUs8Y",
  "key13": "2xqwkXfgnbYa72BGfzuuJ7EnXg93oQBWeBuuvZEPiu8DqRZawUDjCfy8oYK3MHzeSwVJFRY2zDYj6cZNYnokDdBG",
  "key14": "uvkWZUJ2k6TPCVZqgA8pEytJFr8pXFonV4AhyywYo5dJj4poCGcNA6f7rkreqxsFEC1zZpbxm2JTN3YstVTmJci",
  "key15": "58bM9Ehud9JYtWURTtWpj1DJZDtdMMH52phxAdfHSc6XejMWVboXoBwFNKS5zzZMQrb9xZ5txD2R7EPJ8cUJhPvv",
  "key16": "3zH2hv38TmfnSqHrAbG3KBYZcAygVuWSHspS1BRiTXrAgMT2rrEVr82MJWqxK4zVYatAfFMzhHj4rWPv1jfJCc6f",
  "key17": "4cJ9qBF7E5H9oP3La9tM98qATDZ2PYYyRdfJZQFp1HKdYaV9AkNxcNyXVor6EeZGrV4Vbj1Nob2mC8tqfwBgrD4o",
  "key18": "5t5rquW1X2d4j49N4VAQ23hBBvcoeLcjgUjMbuo83tEsW26GQeyR9NVeTQZ7t3azeBw4r61Vi2Hw3asAfRBRgcpq",
  "key19": "2AAoRU7syBoqTASQcPeJCfKaW817iQAUZCyYkV4jiMqpYHCP6YLnBzU7QnhefKBw4zwsr7mTRFXceHap72kPpnW4",
  "key20": "2eUVC1QFs7h1Xp8wdRBRryRnPPNcJ3C1KeDhZgSHDq9H8fD6MB2ew3jqxGBazVWGgcHjtS6BLJPRCxmvBd6F87qR",
  "key21": "3XCLbkT2671DRFZ8jdydUuYBFk1Uh9LaBvGPcmwS44avNNknTQQCTM2SusbJWmWVATYCW2tM8LPx6TsWe7kD6dZ7",
  "key22": "PzATtLzQQuYRRc4U4fTPN6MCPQp18VZCMdedYLs96Lvq6CFbkbsY2uwkmYtgB4QxjsQw2YYmp9ZGGA9sEfiNJBs",
  "key23": "2LsNMwBFDfmeW2hh2F6T84BKedfYywpJyTV5Wq6s7twA588RsHBuqvY7eT6xbDpUSHqKQFHTvn12qvXNSkHohbiH",
  "key24": "2fEdXkK6R9aupgKMBqKtp3ZrLnLwevR9S6eWpDtm1YfmFZaXZ6MqSgoN8bLh8KAohQFZcyoVLGS8MEaGQ29obEAG",
  "key25": "3qTeWHvtEHtAF4nUUk5Pkg66rn4t2yy82cZjsguqnev3HuNtiJWcn8HrCm6xV6QiNeJrwSzS5752Q9ZJzDnYgEFE",
  "key26": "4QiiZi9n2GXiZZJgKt5xqHkTJyVmKf4AA1z4cdgqgY8E2du9F5FGJmbYZDDobrAHVpuWSwB7LMhoFHuKrLbshUqa",
  "key27": "3tkBbUU2VY7Da9zyvSJC9HnZzsbqFnNqqWdRvZEkX92DHbZXuvMTUsN9DfpspiHWtSPPWpfhgdzMo7iHBJFb7vaE",
  "key28": "5SLBZ4DNwBRXYA5YSmU9PkUNr9LXTH7CKuhBUDGmJye3odu9nCjqp1qouP9dfUrDwoi4nPapyagzaM6btj7fDNjb",
  "key29": "4jsSL8tmwiqpjUim9aq4Zydu7mgkWHfrv7HdoYSK58dFRqUyJ2i3kdTgtjDL3giW8XadzjFnqWT8NMj1qvJzwmkg",
  "key30": "2rgVjhPE61LEjPigfWB5Dj2qMfzQwNeN22g1QLuNVaEP7pDJ5RtaMWNKDGL9MqjnFCJmGGnT2Kc9UmsDBKFrqPyo",
  "key31": "3soxnDgRaaVHjLDgRNykN3i7aZZfrrfRUsji2X3kgL5n6a7nYqX1SPjMv3bAYWpgJi5N7MgGU8XUzDNYtdht2eMh",
  "key32": "2x256QNX2ETWbzYond789fXpN3B4Py1zcV9Wz9NggxJGKMn1YCkts4g6wQZQwggZfHHcYaJMhxXz3VkYtiPT3Fx8"
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
