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
    "5e2XpLAJnxRx6ZotM4a7D26TbaQxgAWDo4Xyv1ZKfW4GQnT1ocAs7XVXSg4YZV2tr94ozW477noeTL9DALj9bVwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hv4zddnLuQpJG4e4bGGzYtntxUPEfGhiihAtq9VQXaP7jhWeQ12V1SmXPjMT3zGqYaJ1xLVj9QukzzPu8Nw3MFo",
  "key1": "23mJASMRd8KtX7QUA1uz6QdrcP5Lhedq5Lu7KixaWUtxorgE2N33jbRUghvof47mq6gaYH4sYSvmJEu7FNFA4BF6",
  "key2": "2APv3n9C3GR7nqWc8PaXTXmmPhuACKpKvUpqKCqdnK6bMLE25wXjyNoapTbrEBnQUigXeVMJz71v1PFQ8nQfm7gn",
  "key3": "54R37Zgsn7YTooBM29wuA8uVYJbwfkcNpcnYxvYCp7o98MT6UiDopX8XSfU7DMYJr1BAYMQPEnvqVhsVonKND3oi",
  "key4": "GgYH8mUaNptPNPF1i636wwt8CNDgr7ebxQxozqTaZxdYmmPb2SFmoZCrJ1s2mNup9kRyP7nMEBQLa7J5dgwpmsR",
  "key5": "J3TqirPuge3ugWgtr3Fi72CXEMd5zoPx2QK6wQpCX2MyMovUkxq7j9vRryYstRjggU16syo1vUCv4sBrYmUg2Tv",
  "key6": "3FRTQYv1aXqdDuCzyJvvAzMjuUmx8huq8QhgFGfWMXRs3rhc6Kevop1ar32FYgzZngcSraZRrcCrt8XongJQbd7N",
  "key7": "4PHpy9VifLzDS2QvPBeavX3PYt9VvgsPhhWBDNpqFVC1tb5RahR3JcN9bsXgQiiN5kG4dC8AtRcgCbU9PyjrJ3Gp",
  "key8": "p9uxDAkTdUCkBznoSnoJ5PoJGYC15osdaUJ5XEBGNopy7bEHNRuMWLWG6rhcvmbQPu6wafMxow8CTRvNr5M7UuZ",
  "key9": "5vMpzLqSg6WPzYY65zoUo8F5tauzv8P9xg5um9mKMhtfRCPnBvTG5PBGr7DvXbwQFSPhSAi76iyV6PRVDWs2EUgU",
  "key10": "3X6m3m9qM2pHy4BbNeoV17QQTjch2f4AFWrwGd7U1ndRUjwHsAArFGZAPuE3c1ZiHXNTzF3TxhHWEwokpMfFnpHV",
  "key11": "3V4jLW8TqFJzGNoLiqRoXKyBUMnH4aYQzpmU2VHPjFoeEPbU2NA6x6H9NHAM7pJKujZXnuRBn7hTbGmGBf3WB8BE",
  "key12": "64Ns6uPQqkk5wpwQeNLXn2KoWvx9nW5ZjNLcCP9GxtMvWEjD6bcJnLhxtTAAB68Dfx8CjGgYBuoAFWbQwecXpmhQ",
  "key13": "2u1Emio7RmbzdKELG553BsKgxBkfbGqCAwd18sT7xTWiAu6p37KnSSva9BTaKyyh7tgT13H6MyvRm9T1WH3CkiVi",
  "key14": "2zx7fqnyNtCX7LvvPwYoZB4HqQeKNcg5JehoDfqX9coeyFtJ9XyZvYikVhtHVhzspvycN5RNaP8W5XGFkmRWPAfC",
  "key15": "5t1ww6oTTmXXaAZGuSuMQqzUSgZYDd6JUFSdHFEUVNKn7Tn8TmMn9ap1pEpcVZHhEGn9TSHGeDiAGU1pW3pX82mm",
  "key16": "2MamwNo5Rvg6VHnLc5S6rmG2TEgFXfmBuXHrWkEds4tjuAykxLxYpQ9DXYFLuPpbvrjSwtqbbZZCqMDypbXd2tJL",
  "key17": "2NYFti1dvQpeZqokFitmcJgJj829KMXTbbBTyeHcBQWrDQYdkafFt1FiiicMnj73hftE1CWgtFjkDwJZbNAjSvRF",
  "key18": "4FHhvAvWpfaRxar5FB9Edqy4eo5wWmh2hpNoR4QDpZpAXQHR5jHKTjQCXS7mP8kHoj2nuHZpzxMmboJubonXZK6G",
  "key19": "3jt3uz6vresKRKTEKbocsYDU7ZyZyt7Q4cB14Hzf9G1Q1TKy9bSb2aMd96r68p7pGB4jNHSFYZH9hwKtPr3XEZiY",
  "key20": "3ewBhDTfjLRpmhaH8Q5TB1G8EuknnLyA7ruzZ7gbFTjZuF9e1MXnbX8YguCkFv8Tu3kGds5ScLwYrcdpQUP8urgB",
  "key21": "5Fc5FNuqrsv5C1f8jijvnJ5hpzhfKSJDbn9fYezvuvgzSaHUJpuMCUsiFG3EdG5yEsY5kAYpERQu2mFbdwsyJ7Cb",
  "key22": "4D5Z8kx9x9ZbRdNBk5jR6opWKQKmCUWE3JfV5YiUbgtFkWqJGyMg5B7s3DW5A75CihQ66mShn4Fy7My3Kp3XgM9u",
  "key23": "2Mxaysk13hBiVCiQidJUYDVbm7uMBvvehyLbZG7vrtWFvSgY7L6fH1fKcDMZehR4Rvw2yMFUMPXbqKovCa7pYCuh",
  "key24": "2JaxUf7f64oQHchcrtSk5TSM57Rjzz4tMQtcE4MWgrN9XHfP2tB6Ffu9G43PEvy5rsAtjKbqMDFmfLQg4japNV93",
  "key25": "3aenABAECMfn43KcQfuMf9fj817QJPg5QiD9vtrnV6Xrt7fbgV5xYuuaXLZ8t1tvZmnGvii8kGkw6boMd9uN17Bi",
  "key26": "4WXbZgH88wJQKnosJGcaFkg5Fsee2FF1uXJSmhq4FzqYG8Nyj98EJwRnoxSXJ9cFezaaXP6VxPBG4HsK9Hw6Fdna",
  "key27": "XCiKR7aHiX9LZyfLJAynR65UXzxj6ejioYp4W497V1GvCPznGWAM836g3srFfqkW7xTCfBtzc8D5js4u3SRVwgE",
  "key28": "3Vv2jDvQ3Dpij6N44tSKVJGmovhyduvp56TqeLVf8EJhyZrPYjbY9CeotpmqajrCJ7qNy6FnLjFUTNDP6scsLvEQ",
  "key29": "Bgs68iJ2nftz8cg7kK24xRwdHJ53x8GLAw8owAYJmF9uzvx5jHrYxchDfb4JFeYKEviXfdsEArGW2A24j1b8s64",
  "key30": "53g96sXTe2cb1eQz31R2TVGTdkdAxotCuNarb6deqzyu2AsP8vut915zHnFTe2ZcPd7jAERSCF4NDiP6eQUmSW95",
  "key31": "2PnsNdoZ8NwwwCiCUtqwqyUHKyppkWwxbjtzic3m9QYwf7SBYi8XKwMAf59seWcaSjmm9mgxyA9AoESTd2PeguXz",
  "key32": "3tA9Ra8gpAFtQFtVT4WpaSws9hSpF2AKTMCVwCJKJvRsaC1b7MhZiXiSD3GMYC1zUYtDq5zKkc9Dpe4Lhd31VWvD",
  "key33": "3fTcmEYVuwcmWvp5qvQ1LQfAuDzeeKL7AWwvSAWDHgeBmKssmBfX917wnAYCs9iM36nGXv2fCWrTHtgr7a5RLZ9o",
  "key34": "2tHv25ca6VJdmZYBPQXiQ9s84RQqoSguD5FaW98s8Q7tRybVgvuSxeAiV5qk6rz46z9iaiT7mrFxJB1dM4hr9maS",
  "key35": "3znLg4pCSVJSp7xZSsanVngaXGcP3sX7rSRKQE7uqjT2xzKF2jUBfyhnoTnsPERpMgFZ3cqVywT4jSYMjtEcuZP2",
  "key36": "2QNXZSqy1ghfWfDyMLY7cynHzuC6r6TD8gKkbuWV2ivPSKkccDkn6pAQXh5EfXnmvmN24U25DGYPurBB8Aeo6fjn",
  "key37": "2B7rZ2MBAfHkk86NaFCDtes9dU3QX325THS7AZ7WgWXDA5wv9hNs8Dcgknc9fgZ5E1tPS6wUCsezMaCnfkxJ9Eys",
  "key38": "5Dey94vEaVp4uSUx3tfYFQPVhwjNCBsmEkmCZcGfrNdJtgpzzZqedfdumdv9kQQzAcMV2wJkoxvhaiJJpixpYgrd",
  "key39": "42oEqnLfV7e9Qkaj8Fj8QGT5jpdnMz9uyXfWWFhqubzLkb781bBzxw9f7oG8YWN1bmzKdehsJpyZb3ohEMXzCkP7",
  "key40": "5i3FitDK7naem8nNMp2qk6SjxmcChtLTN1tqEi2zARRMHuGFgoYFgJeWffmsiJRCw6S26xHQJrZ8fHkojcCNZpQQ",
  "key41": "36HjeZRSsiTdKRnGEG6B4BJHvSBE2ojRLoAV6DYqWAdVis3ynDr4WG1DZVqL1EMuCLcm8cLc3Dmuyoy26zq8exBX"
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
