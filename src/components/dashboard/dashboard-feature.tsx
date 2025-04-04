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
    "3f8sTox41CphiVeHQkZt3M2uU6vxxSehRx6xD43yEv9k8nuPMLJv3ttn9LHQtPStcngi6WCR2uLPEk9wK8SKY62Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKoaQNoV5BNWqYQQYEu23wUyhimogAjQt2ripZzVqTYG4uEafvKELAsVP7Ld868kocf4XsYZka5ZShfyVZ9hgkq",
  "key1": "hFH2W2G6kL6vRnNtAdNa3YqgBhnCbCTzbapKtsZBNSMPYusjabfq6es46VZkrwgpDR1uxoBfMmNuiD5RUrH9s4X",
  "key2": "4hGFR4jepU5WdhTsyE3K2nHziYvorx4LxYMn76h12d9VpQ2SFMvFJ5ia1kbPWn4bYT4cagPe7iwnHXn88EyEpeuP",
  "key3": "BtEmv3iz2R84fu3YvubFZaq9spMdRJUqJvYc4SboAxiBbD4dnbPpQpuwdD6jKjieaWpppkieiJioRPKsgW1Cp9p",
  "key4": "3st2AaUb6r35kfAZvoFURrf9EboVxNszELRgJzd1pwTZfnQm1fwQdKyzbFwTqpSm9fe4M3DsGNuYJPjLo2bqstzM",
  "key5": "5obXDHNtTDQ4LaVrhevLPiL7GYz5UYTMkQq7xAsazw4V6Su9p7MizFCEC6FWvTK35LSoorNBVbEKiZYsPkKfyafY",
  "key6": "5GubJdwVqWKmA3Ebr3tyNtUULCziDXdC7UQyDhXuGxkq6AJ1EAMgkmeB2NbcWEonm3m5LsDXf9HqGULAmWLePB9d",
  "key7": "2wGUkaMYVRV2pFz9peiVpEtGoC789LTBhVDPLKio5bsbNYZ9Suaa6cSuPzwk7yhZwwm52jF23UEf5aRDkH4geLoa",
  "key8": "2QjhedmXvAeaMoQeDJrtHFKtPJFYRKZz4uzVA6DLKqEKpZFjHEQwbbnsx546vtAV7xEpFUtW81vCPzsFVaZutNte",
  "key9": "3bUYMJtLjhL8BMFdLjQr5rroHojsghH313ymWRTciQoydvMAGg1QvHLBBxyhzPGTbzJKLzLoFtZ9Jd3WZgmV3v4J",
  "key10": "23fKhxAP7DdqfpjcdceTKXhGZwLjR2Kpc3FWU7FDarNtXPkbeLqiiKZK3RrpBgHqhAD3D7CGRj5KhnaY8hquevkg",
  "key11": "3URmP1pueDDyC7dCyakGPbF5oR5yb7Txk7NaF5QzV8oYqSe51fZ23p6nUNdH6A6RCd5Z5pM6A3JmtqGRyMVRh6fy",
  "key12": "5qVU4k359FQs7r4XXXP5q599QwU7eQjoqr7zSCtMLtJgSCkzdKxQdKomzvE2FtYehMjXoXMxqH2WnRDBmLuzrGrU",
  "key13": "FmXFaZyVRm1gdK8zWq3soPT1XejSbvy56FJsHwuGMwKgCSwxMgb6EhwCDzXoKe9zxjCi6DD86ZnqdK8rafzvtpB",
  "key14": "syRFLScH7CJJG7jr9Ckgyuv8ieqC1yPaPYtYnHtPH5n4wA7TGVE7eyDdUwLb41gCArysN6LeJHKTVY8PbMQyexR",
  "key15": "42J1rH7rPvZDKthcW1sfShspvXE1huhHDirMopv5nvEQvRc26eN6T6RiVkVFdTGyHBJBgwedZytVWuaaAW59pZ1t",
  "key16": "96shRnnKDct8MqVK7dbFiRT4fGMcQ21hw4wxWW2VNx2btZeoei4dFkP38uhqN6NspWhfWisUpfGPEcPVXXgBGtk",
  "key17": "4sdJpeSpyucR2C1nZ81T3qqSPkwgT9vov7wJEBct7vSo4mnEkCRoh5HUW4xAfrAv8QqeSwvg2ZrefPsT3CtsvfoC",
  "key18": "wbWstHqJCyyLrBLZZAEp1ZLPH1U1C5xFKMqicDVTFg3GTtEbnPm3NvhP1nYydna5PTnQXS4eRm4XxUVoyCCtWnb",
  "key19": "2gm9SssMfFn222peYmYJNEJ1vepQiE15T7CxUmya9FdxW6VqnHwReDaAMTknjDtuxvGttkbyXSnQYis2DyyApsjr",
  "key20": "5nPNr5reaJ2yxRkwCvBudZmzdbe2vwr11HzTAfwGgvJtW7CoUW9e7RMQKr6RYBquGzo86GvBz9g31wMAG7xiB3Wd",
  "key21": "4A6NDFADryN1U3ttkQYsVq8Qrrqx2nSK6SHnVCbxBbgcTCgr45pS7FxT8H5PHX5QSTKgYEnDH7oMAGz3dceiKadU",
  "key22": "3C667YjQNXJudERZqrwVjcX5esbwgpqW9VBtghZzjzyEoEy3c1QsK6nCWuvYz9KtH328mtDQFfxPaxN5kKWR8UXL",
  "key23": "3miywdpRN8cyiEw8asKiNTzsJBTpNTVV5pQTKs1ZqvhLdjEDegb8rrFkhpNTNwdasgMkbVa96Ew11uL2SmAFU5Eh",
  "key24": "4vX2ccjuTKnjPofztQK11zRqNgC2NVnngSx86PtVbbrQKY6qopnM4aSPorbXsXWR3z3QSQhbwkSDQ6tM76sPPfDm",
  "key25": "28jamEuAEj2LQK667vRcgQ7vt5cFBns17GkiWp66JHS44QB1KeKAJ7GcFYtwLwyarUVeam17fALR2stNFcpMfBAE",
  "key26": "p4ZiZ7NexFctfqMiB3SQNe4RJqCREj6Dukhj2RrwEPm9FXhQZiohupsMRrMucmTMhN2PnKGz9H5s5PwPLkGa2ka",
  "key27": "3HRhxbz88z3N327d9oZRJYWgWzwRqDjuo5Vr5Aas2WeWvxcV8RDTscW3KztnXV1weHkhKapZorSjmkrc6ExSbdNv",
  "key28": "4TBGFD61KwnXCcFPZR7X4KyhJnUHr7z5fbjFcXK52yR9WCb7Qbhkne9VVxe7YMpc5r8jSXBdtivfqheb2tp4FxUD",
  "key29": "3i6CQ19QKG4qSVaf5mbRUq4gVXtVcFw8ZEpzvqpHagyJRATnkeSceYm7pSrJqj2MrFuZcwmeXvtjqDL2DtJGW8e8"
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
