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
    "5PLKu7MZcs88wAN7mBQrJR8HXQ2SM51mXDxqn2khqeZ5nnDtxrPPhejFgWZncGqDqpp2qSESrPJq7NVMsy65nuhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTM3J5wxuJwhBzHhW3G2fWZnZkQ7y5Yvrrp8Lv3qkp5wCQ39uPhCSqf6k6cHnPSVBdKDxKYp4M99ordLooV4x5T",
  "key1": "2gqM8HtKfBbV2GLVKxu5ouevhX3VxnPG6nf6nZHWD31ZVWnrk9BgRwNfpuheggEatugz9cU4Cp9CF1VaJzsobjci",
  "key2": "fNSMHUTfBJn4Dxqv8sECiUNWGDt2rGyVdGvBQDfeYuR4B2DTfvccaa5yBgJzLTgEoRxSgPyczbepWs3ke3rZKRi",
  "key3": "5Fn93HJ5xowmpyoNBvCXVduRNBzQv13PRZqgDKPAjifAtAXKKbMWnNrRQLSH83JPpHczNjc7GU439TtP3tSWq5NZ",
  "key4": "2mJUNTcjyRM1j1wpKDHBwu9coLRmU37Vo2qmudJXc9xmXS2qyz4YdeFkQ5XGYcAQgXv6WA3gZVHfQ1nZZdDXrDdr",
  "key5": "32RNFADvYxUgTxjaPHj45FkPd5enPtRrxrTXz5tU4dtcesf151Lu4R3dmvsYzTHqUUqBD1E1ci1B7fpoMnHFYdGj",
  "key6": "4qjEJCGQPzzfv8jkmadr9VmKj7wnzYU4RCAMvjTPmAjqQCySwvfBeVZDu96UiGZdQ1m6VmfjY5d87YxefBAR4uVp",
  "key7": "5xKve52ef1Pi2KyVAgscW2z3yJ45BFeF8kL649qb91peTkQ73ehBqDM1i8EVA3T3iwAHGU8vykuG3terrhmZsrUK",
  "key8": "3f4gEewt1guXX9PHXha72ApDANAjAbsbG8KnAdtMwzYGR9g9JriaUb6fJ6DycfVjydS2jUKxU6ArdMVzn6Dn1R54",
  "key9": "3YABmKDjHkzdbjxe5yTPYUhjaEBXmrCiVcStJmmQ8ASaRoRz4aF7PmoPi7iptPEJpdJbM2skki2ReBaHNma9ZcfA",
  "key10": "jXdCS8U35vt3ApLywXDRMFTCi263gzk7RziLTXdoAtJb3FhhcRYsiczD1DfUA3zPTTvdRY5tJvmBhqFa2jY5qaf",
  "key11": "2jJaviCjnB7z9X9Kq4S78XdYpuKnPQN1omEQYgyLUiMsjAhXJrf4erCwN3WHKMGh5eyL5RhqWQcYkoxoQqvnT3AA",
  "key12": "46cLyeWvm8SX22QuaVqQKbBSh7i1XtYMrpVV2KVb14JuRiZGDRHZhf7t52CzzYgFBSLVwrmHKxKEop7HfwJ5qUaE",
  "key13": "5aYuLFTVpvGKtSGGUmKkibQqcdeE9NeTxjKgBki2As3qCvFCEfHCQiGfjFZ5hpwSrmPXefHndoRAxhMdp2m9491y",
  "key14": "5eq8ED8XBzyreuW1Fgm3nE9CaspNpq2o4wJkyuwpjJwzHx9w7nL2wEGDA1ci6rHwipCF8LywWo2UyrfuusjnuANE",
  "key15": "45ZPZQTZsZinXLXQkUJBpJ6k6DBDva7Bea3YN3fKfkP8Rutj6DTGAMGwVhmJq8cgYzAZmxVDS9Q8woc6xbSmPPhd",
  "key16": "4jQykuDTBzeGJdXTX9TQVpdNbVXPGbsfgrfr2GB1ejrRf2pPoFzwXmPuXmcryzLGdibQ8DfmHgeXXnoHVEFS3es5",
  "key17": "2rtJmDmKdUbaaLFqcXJbaqJ1h5Mhxq46XHrxBWD1gdiVC6xZmdZqTLuNwkeQuf6ioxJM2PQdPcTKjn9peTBo7zwK",
  "key18": "GgvnA2DvfrQDYtWV7mDw8g7ebqGKr2QPk1aB2s9jA5vvA246Ag9YHs1RScrhZpAcBH4ojQX3FDNTFPbn1UEyyNY",
  "key19": "4QypLfqLgYXrdbkXf4pqc4ara9yUK4VpUFFCizi26TDZ8RSmtSVJrTUwPhpYrTCwGoWKdcyLWrigR2hc7zr2zqc8",
  "key20": "2mRmMWtt4jk4YxmBWvytE1hMdSa6rrrS1ECufTFiE8reNp88mym4ywB3RXwhCorRkCjg4u7upyZgFo6dRD1V51H6",
  "key21": "5fGoUps2NA9ibeNNGUFMyRV4aHim2Ur9gFsFnyi2GmGkDGgGFUyZ3i7Rqv41ozxySH4Aim6yPcqRuGAXRF75SyC6",
  "key22": "4XTYeg6wjX6CQz5o3kxnq3wtgHECGQQLGEh8yB7XUXNM9YgJmEeMPXAtxGq6rMppZjgnuN34cEfqL3sEtguhzJuU",
  "key23": "51seVQHDLqXrt4WJCD4fh82YnYc9EB7Vfg7MfnnaauZPtXj8Xa9CbMSWFwPpGNbZWANFUWLDeCsV8WgQfYSHbDKV",
  "key24": "454XsoSZVCGazQdQwXFeuLt4hgtK3bfbfqLuWTfkf6MF2QeYivYnNX5MorUKw35bsospZ79zwWL9CYBRFpJ1sAqK",
  "key25": "uq2XtWLguEXYSmMtJ9oVhu2BgKyxWCVvN5ZJagApR68hQzLrMrBMYgjZd7fw6oUAcm7A4txwDNnX36GNyiDDYB2",
  "key26": "5F8nfTqyWEBdtixsku8Ns93aUGmq4xhJtdNX3j4wnZ3Q4PTDKpRB4Se269njpYXKrT6CeDwtuuYEhqsySdf3J93S",
  "key27": "3DF43V3jd48HDona47nHp9Ai5B39BQaYza2oxohAzNdWixpVq4zndRCTw4NTRYp8DnEFHdM7q6s98ojThfKXgnip",
  "key28": "2R79eEHRRAktDUT7ygGSSQL1cJc65VKu7J1iUwg2B5cjXZ2t66aYcvsk7fo4VwXsUxuUAVpH5hfRwCqLzEwjcnK",
  "key29": "5qcWq7egLTF35sA1EuS319APmb7yvA6VMUvBafL8MVWFzpYzMSBsDsV53EzVaYzdMfaEzgb6aradJBZpqG8ZxkEQ",
  "key30": "5BRsU5MmWxaYkEg2BsSkHF1DTdrdnURfgzvezYdu8bJwkScN8a9vseEsa6TCZ2ydRckrwZB3YYWrPdTJnu5zkVjk",
  "key31": "4s9x7cijG3djKDwhbTH6LTJqcSU5afYUL2uMMBsn9o6fbpASfpKUSrJDd8s3bBJGjUZyHTKs7GVCyNbsfv6w8YXC",
  "key32": "AC4dyXJ9KCdeKA2ar8WFKb7m3wjdimzk2wfu2MkRHimedLvvyVnTQJBPAVUmW4ZhP46nsNEiuw5Vh8Y7wKFkYP3",
  "key33": "3iqeJbYFEFmXgzQ6DnirnLtg4zLhNQVkAPzw7HuscbBnHTou7vzJ9PVk1ssbDjq2iaEFTLFLRM4MwCsuD6tQCn55",
  "key34": "36Q74mDswGsBCDTZcdkaSVW5mNxHJAG9eKCPQJqJhib8dvqL14xKAnkr9dwct5v8Kd5acoZa2VjxiXEhkP9EZfdV",
  "key35": "4zk9dgC4cKiRxyMmui1sC6BzCXwAY59mvBYm9endmjX5bSuyypTBQZjMXSjyT2bRFBtNhSjpdMj6hNywmZ3K9UPY",
  "key36": "61T1s7y7SRJn4xUhufGWeq4WVbLcxRe2hL2ji9JoqZS7ji4ASJq1UztRS9dq4T9BMwQ2m4g7bEpMfK2UmnxyXEyp",
  "key37": "5jzQT3c9ekq6jkxL2mjqRUa9vgYnTFvcmKPCqWrGXYLW4369Lm1nzdNdfCuu6oypKEFjaxK4XUXRpa3SWGHF8cHC",
  "key38": "z7iv5qHntXEmEicdZJE3nZaxCMceDLebidTPv6qwkuNA8Wmvg3zqJ3XqYhcTpTEcRG9UZUrF22RfdqFQwSfS1Wx",
  "key39": "3rBsmExhH5j8Htsa8k7DmJwYzthUNBogSs2YRJ9mb2MU2cLp3WBNY2BY63LEXhLP17eYJoTQBKKd2a5nprbEsVRx",
  "key40": "4BBRZhtrFqeVDjqx6phdDj5zg5JPhgyt5AsHCQGJxZ6j6N9ZxDQNnWSKcHtzxkhmjttM1soEZsVsQqoGv4CNJCVJ",
  "key41": "3RcrBPVPaEaH7gcHTrwGunYpsJnV4111gYaxQ8NgM6a5ChUYTJBKhByr43DjjymveV6QgCxXcu1Vee87gh5NmQCu",
  "key42": "44SVwfJQ7FRySPpkZA8SPpaPyP9BNFphSzXiAVkeiJiRNqt523ox6cU9gQnbW7cxtRhMWJ96khZL5vVqNosLTfMC",
  "key43": "PSUXswJfvp4Nsf6vXKve86cBBbPcGrvoMPBNQTRKP3mZSa1ynC9RBNj7ARBoFStpVYy3STZY2rqkzVSRQdjcdd8"
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
