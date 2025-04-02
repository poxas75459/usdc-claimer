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
    "GrKVapFW4NFi5Go8gaWGmJsG8MQYVMiZj5DG6eEYqMTNgoTZ53TnY7darf7xqD2g6BHRYnyGhC91ubqxoS7MNP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nniXU3czXgNxp3Co55z25quFJBW2Yo2rEZKLgo3BfNk42izpNTAfqLEuCmLh3cw5Tu6zBKuQskvUgEFwXfym6z",
  "key1": "3RpkSaEaxnNvCodKFTUFbCWd8i5BgjHbTnffp5ZDNAZaj3rTjFPpuj4mL9Pj8sz1g4Jqi7AMZB5wkSPFHP31fozZ",
  "key2": "rpfv3PUKzdDmwGQmmt9rtFxoNheV9SoiwtHDuFB9QEVGygL7kvMa7NzQzHbMpWhtVZSxniPZ5khAnhry8WVzTSy",
  "key3": "3yh2ZNUfQhZW6VLj9qYU3WWLQyJHwA53UaokYYpgYRpVvXYA5ZLu1NvEdWUeau2QrbV8Y77Xm6PomotJF8P3e6EX",
  "key4": "41f6oaZpp7TXDFBD6Cmw7kJy8UZeT9DLaWNGDZELWKDKtPUYGKCzZa5hMBSbtazrgMoc4a5EhWDqzhKTbdhpRxj1",
  "key5": "25KcstP1duurJYgewc5z6N8CUfcHRg9bUCS6qipyz76VKRy64vqaNfZiqwSSMBjtmnTV83v3w6vP76dvDMY4H1qK",
  "key6": "49vbsvGLeUL4izFPaL1CHHGnWQoMJT2F6e6GviBiozi83PqD2Mewu2nTt9zxbu6FAtxLQ9EYxFQrDCrpjENp7FGr",
  "key7": "5uZ2Wx8mhqJdoa2cNaJK9KuBzSK6h3jU1nAiWkBB6vxL5UzEwJgMRPqxSCjDH2yvCd2VRToh63oNRSvvSa4MrT2N",
  "key8": "2rSs5LWhhcQmnFArdodD4mCKev8bBNFhVQ5MSta92thwdsbnFnwhxhrGKC39EJ3gJykJPRLEwTNEKNQP3BU63yV3",
  "key9": "3k863niQrRpra4undHMVjbfhKLdm9wGabraEM6zP7kifPocE4gphesuJhSg19j8837gv5fQxrScgsiBNt8cj2Kxa",
  "key10": "4EzUYAPbo7tYC7GyyG6ndP6FysZd5B29t4SrcTDGmD5M2DVjrLmZEqJY1qjgfzFrtYBXskbSuacgRV4qximv7HJU",
  "key11": "mFJVQPJEYUc1yv7uQTf4afJ8KUW9Z1CUwwwqLvoJS9mRV5eDWq2r4hMp4hKzGuW1jRqSc1bXEaX7pgXoLsMEdSN",
  "key12": "4BgDCUrjngXjPSNHstbHLPJDn92JhVCtPS4BSZJZZRJkBKSnjv8Zqh2TeMyhe7jBs3cmt3xJSdaFvU1E1qQWSHKn",
  "key13": "2eEUZUhsCyjuDYPQQ8RUa8NBmvCbvNMFkpKgLYoPUv8SFEknbZRBknPvErtYE7UF9MUPPSEdpxRNMhYcmBjj9yGP",
  "key14": "49Fsx8LDDHrrUBJHS1YAUP8WK6nxW7ZCx2Kwee63wKvgCYeMfokfgWqoZKrD51HsqX93H2D2pFDYphYJEeZyeQ6G",
  "key15": "4Xof5abHMVXb997awrrMRE5ENNAAw5JkFRxGwbE62uK7vnfSLztTiaLsBa6iwYhqAZU35mh1muKdhjAnPXH4Hogc",
  "key16": "597SZ4kyWAusCFaBnBhRg9Dn3TUTChQxD8zzSaqTKXM4ykSeDrTQWo7uuyhJ8CmLKgf1ZKyV5LMy8u5HRkNvxoch",
  "key17": "5c8g43ST3faghoR5UwsvZEqaRB4A5rCzDgiTJBACXBFQrk6b8sR3FfEWhfJqDcY1wcss2kSMnr3eMmih6SA7mUPM",
  "key18": "2RXL9HaMCpFF9nCcqvDdVQJhmtUM83mhxPiMs26YtDUyr93aPXhGvv5hFCevveV2xATdSJWCT7Gvn8JXYVzBVEyk",
  "key19": "5YACJwL1fQ3rzY9gFdJwtVCVdjcdZabGodRUUfyuJeqRF2Vba5s2D67VjDgH1r4ohpKYBXy9LjQ8tSeUKxfFfigM",
  "key20": "2cNSTeRinewADx8WoiRH9b1ABgdmWgg3AqFxWAAXbs15CrZSaLN2qUcmcc8ASHUyanNCJ2UJkuMaJ5dVXSY2VujY",
  "key21": "27xQ8q4ZUE9ez9F5oh2GyXamYaQv6eZ1BQJqqxgn52zBFmd9dKfAipTETQ5StTcutrxDDfi1apcp5xVHC3FQZDwn",
  "key22": "2NrA8J5ZYxx39EmCigHC22g8ux6ki5QvqS4qWULedCdHKNu6CHmcnyYcEEQ9xG4yknLhSCU5YiXtcKu75w1jPAoT",
  "key23": "5wSp7hB41ogWTt4m9JQygjYQeKcZaMD1N7EQzn3stQttTzaQ6B8cK5iXnAwy7ATMQySuMhhj1xwuhHmcKXfBCBU8",
  "key24": "5au7gWCsXTuPir9Muo5y5Q7JcFp7ZdedWGQ5BV12PjP11a4XveNYatHH1LL6yfEdm9tFbmZWo1zcbpmSxXggZqLd",
  "key25": "JMDeHA2y5SBfkKT2ie3YdqAxpXFLc9aKGATqeUHrNXF8m2GDeCQWB7WCbCidhCB6QzYjavk62CLAE324116n3Ev"
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
