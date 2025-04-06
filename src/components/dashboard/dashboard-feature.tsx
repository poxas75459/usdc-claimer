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
    "WAHJfLk13arWt8YzeLiwHaRXa4QXW6nRMgQyXp7Y1NVWYeq6BRnWd7Pk3wuifcaMMdDGY9QfUqyLXgCAmG2KMG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1V3Xx35eywPwYjaw7mST8iwCzBSczPoBiT8PGgvDa4UnYwZf6PgNsoqvdvNCcxChzq9yZHnunbTXotkCkZdhg4",
  "key1": "638NahKk276xGwCsPFeeqQaxQWXaJ4uNLuaEsDt2cQgZgKQCVT61Gds4dyfKVk8aUV6JJPZQv4yfqCZAZDihJxQo",
  "key2": "2PvhkNGy6Rk3TMkZsQfhCjbvhfeFg44eDrx2qAsbgeMQEucQFNN3F4H6KpExe1j61a9PW9yoW5VkSYnKSxhZQNs5",
  "key3": "5GFXg1gbE6m1VdmfHv7cLDhUL3sfBEbRRd1QW6RcPXAsUUuQdiFkDUK2oJrf5P539a9xTPa85xkwzw94uTsJcz5o",
  "key4": "PyBUuxAZJKQanTgmfxyzCa6BDVGdVxdpmQ9z6mf2wkwiKbriCq3qABazRa3SACLqHNEsoihZ5PoL85LjnLpiXk7",
  "key5": "4LKXUtfZQ5J2YYcSNdLLdsgqwoEuWmdhDuFmRsfipiFkNP1A4BWXxChKtUB8zumejt8EURiimYHqFaxJyUMfGUWM",
  "key6": "26AUjN3Jk18JesVzA9fHsrJMKXDSzodi3fQHZTvpVSHmt2TCe3yBmi6VaM79YLbq5mwhwHmWpWMjxKxtoXnrjPEq",
  "key7": "4xcAZuFC4KMsPEhk2Dr8hA3mL2uHqMs6PsddngJmQ3pb9Tg4pm9rbEHo5nDEUSdxjAFf3obJvmQUEEwVdNJJ8dCA",
  "key8": "4uC8DkbAuY91ihqb91KgB1ZNVZYeLHB2JmFmPubQX3Vv7MZspY8LEPtexA9cSW4od4hmREXE7EWToJojLxZh6xb7",
  "key9": "xAgkboW2KbpGdfY7sYZ7xGCySwhXzwg8RAdDXFYvtbRubcEbMcud3aPRGohinyPKZbCmaanj2x8qGoxdwEzzGaC",
  "key10": "3sW6CPfcb3XLK5ZYwSaS1MjkVSockf2xcwqqAkk3gVq7ZHgYFvDDG2FoPAKtq4EwVoTKSsSu1UwdVyyPngFyGvkP",
  "key11": "2dg7z6sMCJSgkf4RnkqixQ79BgrW7cqhLepXpdxVuktXQFx8vcTZWFUx4E5ZLn7ByAxBZyCCSE6i9W9qdGXoq4vg",
  "key12": "3pM36um6nVVj23M9xVi5BEChAA59EEfXoRhLyhSxQ5zoeem7wZp6F4V5Bo6gtq9wdjeC18NE6Cw8CxYTo1XgZQpm",
  "key13": "4ypp4Sc3BREmTTwqcPAGmjpmGgainhRZgm61acxNnbWJWiwN3SE1tpN7J3eSSygMecCpBUNhqjFYc4UgHbeAXn5r",
  "key14": "5XcEp2PLQKEU2kKuS4522m9W1X1hcvZFFGsW7wbtoysvTNSm2EWwTRypXLVvxJP9TNQYECvUi7pVspeBJEMNSSpw",
  "key15": "3ZxWJii1uwk1pABtPWuMoNwBwWHC2qxikJZeqRxpfshokPkuXCxeU3Fh6kvqEJSXcMS3kDVbzY4dMe1E5EcqESZ5",
  "key16": "fxcKVNLmPQCaD6tndvkrjwnkFR44FiUiepfnYMUbgdbR5dtWB5uaX3rJWukbDQMwuXsRfFLq2ht1ny7tdeEnoga",
  "key17": "5XqEadqw6sGazHXxSdxWMZPZ5pM2Rtcte6QKBEvHFNT5ye6tiqffCpaZkgwHZfia4feUZY3rLnbyHHT9WRXocrKB",
  "key18": "5fiouVgCYaRoUYmMtyWCs5N9rwfSbEBzp9nA3eZyiJXFAEEC9fMpx8cdjGPifcphbTYADujhyi62cL3aJzvP9u3q",
  "key19": "2UefJnE2z8f1Yy7Fh3yW5LJwXnAEoHjUWduaMRVNJ5R3SiE6QeQ5ifJ14fTk21ztDW63DrdMgjBLRou2g6WJ8ZRR",
  "key20": "4z13xd7Yi2e8TyZHBDPkXD8iqo9xf3ENnUbZPDpvNvPF4PSwSYN81cqbNhMwvtNsF9oktKSGKD6Fr5y8K7nQZJMv",
  "key21": "2WfphWnsyHNwEs1gnZLdzVh6Cmd2ujZHpbJVuevKEiDCb21qRUnnG5v13LaQUtVupuSbo62PBqBwkcdhAXNW6NFS",
  "key22": "9m5T9r9G8tiRrUWPnjKx7KMGR7wiUmWKfgoM7TrY5R1FfMMh2QpivPPowwuQS7itcieZHKuB2mXdxXe4XTVtFSR",
  "key23": "3x6D6FF8NifNitkmZpxe1MaBBpedzuPg7qtWfpd66y4tptkQmcJaRpeouUePDS3qiDDuEwsuJVcC3saSs7idAfiP",
  "key24": "Erva9nbg7aE3Yds18VV4XNcrrPPEnqMxyiYndVEawnNVydDMzgM21pKFx56V8cVAMSwaiJHBHcKWNwYVQq3eSNT",
  "key25": "4uhsJsLJ8T95WiPFkAQwAAQ4FwsZffxu4ZqYdDQMJbPaFoQAYbVPAF3wak5AMNEsbtFCRRZmxFiqSiWkFZV22CFt",
  "key26": "3RKSSDPUk5u9dBKqwaWkmEMrvjqHo1fxmbVa8vpBeCfKUs7DwcC3JNzqNihTuNJ54eCBRtbVPGwoKwwFTEQ4BiU8",
  "key27": "4JyMzX2uEsGzsvHBLfBaAW444qVg4XHeM9rXuu1ksePSowvJjGPLSbcCG3ZGYYcMPGo5fjFqbez4MMVnwYQspBaj",
  "key28": "3CscNAYkt58FX8jMFe6Gx5fMZsr5TzwMPjb8koKrM1ZpswP4CiVrv5sVimujHNkLUKPXW63mhKCr8jjwh7BLSGDe",
  "key29": "3ccyMSi9cQJDkZhQXtoBUtWjxHsbMSTDWnnWFruRW2mzmWEjkhZEWN3MHefAVwBXPwsSiSNz8bbJQB4Rn1qWqRoX",
  "key30": "qjoq4VRvx1kXgjhMDrSoDjDyUiwpgwBcM7TNqRJ4XEDQgJsVK1jhjs8pmysvkxFQ7MMCsfJtiCP91YqCvN1rbBL",
  "key31": "4UqDLq6NgTP3q8Ry5JcDPGaags3EZNDCzcnKznGPgcZmxg9QDBHZQY5hifpt6aEdmWHBC7woGPaiZuEMPnsCzzUx",
  "key32": "3n1LQZKtSHnTeQaKSZWU68M21E4wF4waB6DyHNumzrbLuTGJgNS4ic47ntxN31RqFHkUmWXWc3UpunqYjk2VUZaw",
  "key33": "3gQ8jT7a4r73NsnmGvavyg2zxnZGQ7vFPhG7CRqZsXAKPCqZRHbGbtWCvR8P6vJh5Mpa3deUHTmDoSU5byEL8WDt"
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
