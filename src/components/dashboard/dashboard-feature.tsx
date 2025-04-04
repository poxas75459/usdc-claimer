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
    "3GTAjnDAwxmE2K5xxoXQQxMRgiwBDHASqQmCznGXKkSJWJZBBraaDXfdyZUE7p4vRnH9sDtd8zk5CRXNZ3PRH7r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KnXAZNnkwb9x2DyE6fjzYgibgTqJqx9tBFT2r4ss3WBsRUCq1QJo9hPt4eVm9o19JCHYztnGTuDYnM2giLH5Q8C",
  "key1": "3vm9Qmzh1dVbXCX4hhcfivBE8cMp1DnCpanjuVE6jLFy9hoyR6gPfpw3amumou27b8796SXUDtWgPGVhtzwmGjJq",
  "key2": "3JQXwzmo7DtWvkSVV3fyZzZ6wg1fdDfsMYNFD8wXzHS7iy9bex67Fg6nmhaxL1tBbLvj1L8ZcRZYuRQnATVMbdWP",
  "key3": "3rzuuDxUAgxscSDVAtMhTkCXR4jVZpvVx6TWe8rYvPeJKW6CYA63nyqxeDz2rozv7Hgdf7euVUEKeo5zzi35UueQ",
  "key4": "4CNL9MpgbcgDWTb4EFdkKRENa8YYoQ7VUa9WyZnKeyLoeX3CYENmvD8bhKhtEyRRTif8NU8aBTNs7HzkysZucUeA",
  "key5": "42iWKUA1M4Do2FANo3pwkAuVGVPZJjt2w8rfsR2GhEzj6Pjq3RvfVzd7eKnjHxzT12S2ePxEcD9UaR3rtsqvjQL7",
  "key6": "2h24mkSfQRSz6zJMfSiaDrgE1oKLRT6csLVowk8gsJGQN3W7UUrA9UE619NrHngvSNr3P4mENsdqftgQgsBfcVuF",
  "key7": "2ufS5tdb5vpvSQr3A1jq7eS9zS72erNoc4vn5ktvdWE9ZyFC2aSuvL9o5JvX5hf51386apJ5DqFQCzywQTtjMaDK",
  "key8": "cSHu3nTqUgNdGLWWCd6XVCincwoBjkYEmRehB97hzjiffhf5duz8aKcn84JqeqGjYwTmiqwJDK6XLmjCYiGhev1",
  "key9": "62NgExSJtAT33rvWjmRFPVa3YY16KwMnSwFG2h7SQH53ANqXWyaYmSaLFoy6eiHeJrz1oMxD2sjsYuNmUrfHcbBY",
  "key10": "4ZH6hZ8uG5CLL3ujLdzXKsAXkfHr9WWHeFrBDfRYEPMk2rN3bGCUbFSNdmCq4QWsRtZ3FRNBR1N4bC1qRJnAhM4h",
  "key11": "4KVurJrvuAvo2qDemiJQoVvi9ZTaUdgqSackmLbUs8c8eDK23ryp5q5AQvy5AaJbZUdtw5rDswNLJ4JwCNnyK9P8",
  "key12": "51TmfaLwxgUsNpNrKhzPE6bHc9KmJnymHGcDcaJP38F67bRj1VJ7uh3yTpvnzUtjWhkYo23y1XhK5UUksJXpTPer",
  "key13": "QsdezfV51TWmZySjw6a27dPXqsxbyK1jRkHjDqQUkiQ3MNBc5st9bsmCEMRGPkH1sP2c3B7UY4w7MFpkHf87YMk",
  "key14": "4GpSBxrTdpi1HMBcy6t2zmHwduXuZxWfSHAJHWMJwYp7w5ChjiepPUeYPe7VTcN3WU7aih7dtBVfQG1zYV1L8X3J",
  "key15": "219jokkWLPNNQ3DkpNmuujsCiFAsdBoKbLJx4CBtR5JNdEAmD9YUpK2fqas6gQ4WRBUqNfu1xmEC4JgAX6MiNpQ7",
  "key16": "44GDdpFaKiXJnjwABa8xLRZ49fnFGC5F777DL1bkrNi1wWRaeZdXjBQvbn44H8JdF8yKwsTA21xiAu7REAnJCqfo",
  "key17": "2CFju4btdYwQHNaRHgWATRGC55HcHQWLgWuJ1DVuS1E21Yk52dUXrX2maKUNYrLRhKUnK9S1VEKbLVSVFzwePSqQ",
  "key18": "4GFFgCuk3PZNx4RAatoTaaJJsCNr7xJgYpiCdLq1G2eSFwbc7jKyKqJjPw2VgEf63CrsizMDkws7BYqj9gUsNve3",
  "key19": "5YgJtSngoSbEeNhmpG8C46NSs49nbNjt2yym1Xz8FbdjDjy8dyeG1CLua76oQWAL4e1Gk3wR79SvTsJfathXTPRQ",
  "key20": "YD8SKUgcPB5W4mWHjSTaJPRQe1aBVZEP7sa4KEjp3H6sJWZCwVzLnQ6t35ESoxccuKoCKxpjDsq2m7yn9YxW5T9",
  "key21": "3ATeqmUtKwMX7bsBjM44sMTFycctYmTr8XFwr54UJVgKMJenQbbeU5xZ7b4MZV4b3QVa7STPPdn2JvhvS1guiadL",
  "key22": "4qUwx8oMD66E49xriwephgz4Vnt7ao4MHiVgwfmtZP1RVWwqu7rzrtjxxoUd6A2VdjRKppPWJ9QdFARrQpkQRTPT",
  "key23": "4ixK6UqtnKSC4P4NutZYVCGP2Au3GwNsMvjjHrPg1DGRwngGth2Gh9u8APWmy8DCaJTD6bTDexh9yBAo3SxM2beP",
  "key24": "3TCgiYAgGWffaLGWWxAeanKswaZEp6hqvagVCSma4Pfqv4P9z9jQUMEKq3sEjYkU46rzMzjSLKXQirkasqhYLKn8",
  "key25": "3ZVWRcvCuc1FFwoVK6Xia1f44tisGmfHfC9Vzbi8qJd9qNJQSDdK4zhJmyW7nSc7kHi2kRrwVytDdbPbSinBKjQX",
  "key26": "5nJYp6zmJZwpTro13WFkz4RdUibuMNBZZc1rRtfsQVifxue9DMvuyfLEN6HRqawTM9Kcd2tQthJGRbe8vH1fqNid",
  "key27": "4QRcmLA15roQ165okxpNTnaA4HjaNkujUXfa87bWfQp8M6V9HWtVeBMDupBNVw1BqMKBU2utEefBoCRsV541jCJN",
  "key28": "2NgGdxr2mZY4wXwzqdN1sLGoQKgnKdeM2eACfN6wegmGBvZrh9G6Bij1XCw6WsT6gQq73wtt1BNE3m2YywU2NwW8",
  "key29": "255eo2R5FTXJoKjCgVWed1jV8u6iWMB2wj3VR4yAqakRR97VK1Q89TL1jdEui2y6bhyb4euGvUpLo8Cb6QU5ihsR",
  "key30": "5F7Bzwr8yJnHm1Yhh4GBE5V8HYxX1Gy2ns65bFQ6hwbUa7QQZnUra5X21foV8QurT9UmcPjNttqLbbSSBJnV6c9k"
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
