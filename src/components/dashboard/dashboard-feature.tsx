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
    "3cWscc698HKuVPxroTzGGJtpcKCXkh9cM2fkyA4UFg9MURF1QPzRjN6DcdToPTr9q7gsnTGfMXJmAzZSVjeF1UAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tSBAehuGTHmPLknafxSQecSZbUM5guBTaci3FSysyiB8pY5NJSzADsn6doB1J6ZMyWxnfBdjq6Z1JUMBjzFGPo",
  "key1": "37ZYQAHSCVctaxNheQFZrMoyCWtPbe3TSS2bFLzKiZ1xJKDHcZNtn5KjnqnpU1o75LD2B9hJfbBeEGGwMzWFcn2o",
  "key2": "2xpjCkJoLmY3zRZsoaWmJsgx9PRKbgQTARqb5vgE7JHAWoG8ULao6BVM9UTZLvfc2nc2kDEtFU8YumfztVB49vZS",
  "key3": "3Acohh2CLW6TWqMbLShNgUDHpsYpS2diyywKFjD4nZddujsuUcYBHykEiFQqMyxxV1B7C3M3jfe6wo8UaJSrmsou",
  "key4": "2XgRbPHRXS5BpQxd9XqxoqCiEw5tZmgcrL9CAtCPn9qvRx3F5cMNcbWeLamTWZxCbccMeQZWjtSZP28urE43tYPF",
  "key5": "24N8Z9hkswAFnHCkZpbLVmqE2msrdL1hMXL1xmeSG6Ya24fJtB9bmY1MMfiDJKrdMTPGkWhUB8RfP9aKjQ4UFotN",
  "key6": "4iKTCCRrfLo6RK8xFfM6XRDV6DGbqMjLRC6GwekssUYk4jZh7t1Ha5okLZcjXTHxt2ZgffAKXwerTNDfW67p34u3",
  "key7": "3uibQ7oBKCtNziymqTm11Q2JA2MTbuBJYkF9wEMghxEUsAKFw1vheXnQXkvosPyrZWqgtDwxhc9gTGP654pwEJUC",
  "key8": "2aXRsPSQr31PpYpR1AvDJ959fJz2F6hTWXrLHDpvMZLrQomcVGHH4nmERBJeCmmhB6LnYJKjfWZFaCSYFgMXdpYh",
  "key9": "3k44g8vxCn1PmRpTENYrYbFhjWJawwqmM7PC421nMfe9UgAxmAsZCbEoSxAajHcFmdoiXJHTGfvfEVQRJt5dQWWL",
  "key10": "4FerHujfAdhf1Fv9XyXCDTh23bqvcCK87unPTSr7i9VXGcXEKH1h6JjXdGruPmgAc4DNsJm7mmACLcK8VLhxNV3C",
  "key11": "2SHykgaPsXBL75LebrGKPQjFchvdsQj57YJsxkETYry4n6Y5gNCbFnsX5qeVepvZrrqowZgNt5UVRct8gbfo6Ss5",
  "key12": "QooHUMGJL9Tj1Ndr2Ebi7qAcoWCfBShfDs7rH3x6wv7jqxJV2g9eaap1Rv2bpCNYDPbpWGkQWrBUvJWz2K8YY2u",
  "key13": "5SjCM1Qf4b3oE9dXSDhWQ5dMjLnU9x3MgYykTVn74yieufLoQDSq4GAtYdPNXpjg9iBy8jCgrB89PzhN9kkx3n9W",
  "key14": "4RQEd5dv8Hj36wujimUYZyHubZ4q6QKmVAcqWX2grJKXW9ns4D7A4R1WYEvHRoYLPzFfjMMjg6VH7d4zCRnR4bXh",
  "key15": "5eyD2Y4B3bR4VVLsYKEjLDKioDPcP3sgNH4hNa1pjwp7UprdSSFmX2PWQBFfwV3MrxsEBEWYkGuGAj56ESHw1tsX",
  "key16": "2MXBmzgwEx1xfia5gWGsP6FjfnKXbYEq46FgS8gmmF77HYXva8UUwbUYBMd8v9rQUTJJhb3N94XfwmgzzPE3KRQF",
  "key17": "hGb4hax1nUSicCEke4eYf2cJPmb7Ug4uQMyjYThvGRrZsGh1DwTMuo5eNDZEXqoxrPTLxKVNY5Pk1BRy4ZJCrU7",
  "key18": "5kpgTZTXEG9gEuE2vuLSfxZU7oFyLVFyKsAXkqWNZmxhzWuEcYfeR6WaUasMTTz1ocx7PBYnoggu55ntikzzjPLC",
  "key19": "unkWpTe7fWhmmF6fThhGgw6eLSctx44kkyTXBm2mAomJBk8viJ9hrmBjSBYPRpiVS3bHxEm2vXmLzBrVQ1ptcUJ",
  "key20": "62MFzVaeNdEKQP3MH47FwjtF7s3TiwBU7meZHzA4EGAv7fqtLkqYx9BtG6TDL8AbxhPjz3tLVbUk5L541ii3n6WP",
  "key21": "4Q3tJwJ7QWL8brV9r4rpLfovLwQUSXZjsAaujhmPihoBQXi591NiHJ6wT87pxoHLUVYT86jmXfJK46i7aCxJj7vV",
  "key22": "4WVGyr2ftpCNrQZaa59aJNP5zBH3oREY4FwhMFkd8bA5TXwjkytgnAysrsrYNGNRc2h9KohhnVNFxasqgqpcgMzX",
  "key23": "2xfLvferEAq4TVnkrfCCiUbfxcgToXWAbZraEmpjkYTVH43gEpnJ4drtPFPrtXvSSffzKj3BLADvHLzt1wudjhXc",
  "key24": "3etg3yXQsBW2TvPTdBqNsM1EdfceyDU5ffnNkLWtNrNzcC9tP5qJsBBRnxZAUj4XQDd3DdZSjV6GMNmXcyQGyyjs",
  "key25": "4336pZV3EATta8FggAZ9eXVzDik7nb5XLAL2CULqiBgL6J321A9oa8bQty3P5U4cNxGow7qeLdKiYKkgHuagNWE9",
  "key26": "gwQCrDPjepHi9pZ3qGkoshaBGcsojzQiu7qixgqFrCsgKyeDz2zwAhWXFFovJAM8gztGrB4Ub2hTynaTxJQkHdn"
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
