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
    "5rno8NEtzfW6y1mRqFTyNUfy6JBSbtmk1EWfBE8MtaDKXQFrPgqJUT48iZnjKJ7Lw92Xqz5C6hUoj5TazSRYn9MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mg2oeJMSy3V19fS4MNVU5Bf2rZyCWfb1r6SeK45auoDKVhdp9NRQrM9cqiubzUUd2pV8pepG183FXTn5HzT4UQr",
  "key1": "2UiUw2gX28GQ1QfQ2uXGPmhH6hnugQXudCWxF21TKdz6Cyc6fxpLkHcAEZA74TTm4Scs6bZgKBfoHdtNNtfW6WFP",
  "key2": "2Kt8UUWb8qp2HTkBNdsjWN9fU8nrkmSdNk4XkeYa1p3ET7FbFKoJTqA4qt1qEV4tfPWUWNiWHL6yzpsUrn2yuYjB",
  "key3": "4vWmhPGr7T81udYw9Lesuv38Yed7immFZPmJpH5dNDmTt7dbRq8Du7KryHiuHCgN17A3Lcy6pgmaeXGsAuuTNTrs",
  "key4": "3WSeyhJVHxfEmdJeQPuEvPL22KFbWKTKoevLwBQAPfNgeBo1xxr2iQMzc8GSg4gcf8DsrNpuepfDy6dcb8qmdKLP",
  "key5": "2Fzw4kcBniuqr2FG2HbnFfNDuaZqydR6mdiL4SuSDX4h1n7VmRS3YXkKDhUjve1BXqHYxv2vwwHdVRsiPch39fZu",
  "key6": "61Wx7u8J2oPYEuFFKzpRGZY4jWxf1iaZ4ohC5h8kFdYw1E58hpBGPZ6N3tdXo5LtE8edJCK9JyvgsyYzYoLSGh5h",
  "key7": "4h1N2pLku422wGYNctfLdfGNvLxVfaVxabvBopiqqo431ssEzLc1EcAf6x8w41VuqsaM9xG9N3wzprHFfHmMkBtC",
  "key8": "4FYEJdFRrFi1GanaSGV9bQsjtq7ugmcu3pvhfiU8JhvfMxyztK7QnHuwPSmWLHi7LGZCQmNUp7NDMVK9hGS1rYsC",
  "key9": "F16TmfCtHkgE58Z1frqVYyaYBiTTgyr39N7PoteD5Ftq3UyXGPny4JseWUthB2PAq3TcngJKGPNuM4HT19ECiBS",
  "key10": "2QkzqE7YHPaP3zqtsMX62MUbuPFdmoDGBb1CmT27WVHd2kjN88WWDiTbNzhBcVZPkcfttgug9374wstNNyyKuVkb",
  "key11": "3w2JRczxAkvDyCygPLwirX8HHN74acYQZnuKXLBrzViLERzQc2n6zpv9vwLSdF2t1qCfUVWfm1ucn6HUfomiX1vP",
  "key12": "2FU2JmTrUriZX3qcrqLgWTH81YW2wZoRAkgxvWQAZCrFKJmePKjgNFGQLqK4FYs6GXWvjDAWSAojzQmEsH8xCbEK",
  "key13": "36FCqffc7UACGmeR44f6WjifGPZhK1jdVRpAgXxueUmj9JDv5oDa5sKTfP8z7xpEjPxwingoaT8vznKSrSF37SfQ",
  "key14": "4F4VNJmB3WJvNU9ShEvJqFUzDaXaojW9oQd3chKYJQiGWBbu5cUnXr7UZSjfcBxCc738QaHYucvKQW5nupu736h2",
  "key15": "4vaEKYM5gfX2BY3tiMj8vWVUDvMda5H4JwHF5nfyjTdBwGjaXiqBkwwv7S4P39zVYzdaUxM8tkyWfijrvvgqNXJp",
  "key16": "8SMBB811WrQVMSQzM8Ju6gCvN1ySTcryvxxWiXvc3h8VrM4dvuJN8MRetnSY45c12G91zNyWWYJn1sq15vQr1EV",
  "key17": "2pXinjUNWo9w71SBRS5n93amfK3r2YxncioqA9NFQkDvxepWiX51o65Z8Dnm9kyzeMjGG6KtpembEhAFBknQyNGu",
  "key18": "hwjqycJThPHQzEhHMwDtqEXwLpUvz9HhNtktKJYGW6KbjEoSAGniC4BTgxxDfKX4vPDvUjZsZmJW4RbsCckyQhR",
  "key19": "5f6nAZNyXYjnNQfRH7M57hMRF1CRwR6jUZebQ8C2KkgmBRdtZ8uk5APJ524dKuxHki4HoicczHVHaUH3v39Hswov",
  "key20": "4M6jgi5bmzvYBmTdpdPsEPRsLia188hHu5eaCz7pBCw2qiDSPSVqYMXV7mRreHCkDQkzjJQUDds46HFm31QK2TXv",
  "key21": "5k9xRb8oA8FgqX75gCDJ4v2o4bzptXvxtjnoda6Hh3oKWQ8kGEfkHhSc3qf5jYPYPa8S2qh3h3VyKMjqxNpPpQ3n",
  "key22": "5geQCuKXXCBXEoPUZiv1TufrxP4BXgEbVzJqC7Hk5NV1SM6tLsm7cdt4MuDBrsvarhNm237bjnnGHrKYi47EDH7o",
  "key23": "32aX1P9Nec5x6qi5ocxXKahgKn5mympwhuowWL1KPgcdfQSEc1jKP5kSwdpiQrazQPMjyLdnjw7ttBSNxyDTBCFF",
  "key24": "ZYM9WaxcH1dqZiGznFRXWNZciXRAZkggcek7ztZPRGVx1MN4iBmrjziFVmTDJk8MwdtrVhUcbQxEAurdK8NakR8",
  "key25": "2ghhiWgPPL72qEJNwK6ckjvQo4mxh1K1JRJ1iCiZsMAqshf8b8RnXv772UarX6RDe4fmbu2vaUbyU6TW6iKWWufF",
  "key26": "5cMYF1wHz6vyiUV4mftHCeASiUfn56MbZQc6LoYmpYZaTs3ZB4k29ZjBtYJ6WZNH5XJcTLckSpZsipXkfDQNYJSr",
  "key27": "4by3oZVj9vRMCD6sT1kKR4gJNrMvoCibNbXHdR2daK3tQw779m5iGHZLfs4v2wwpqx3qfgtBAnfL5Yt2PdayFvT4",
  "key28": "4pLpByp1BozCJQsBSB4nzcHUJTY7FjMsy3yB333rd3jDe1DztWHsiehPLb47coA3h1KTTKu4TT9FRc4bdFM57bfz",
  "key29": "2bQ9gUGNhTvMii5PhTja6DLRqV6yz9yy8yHZb6dpLzph6EcveW1MkoQMRCr7wY8ro3M1eD3TL2VwP4XchgWFqZvx",
  "key30": "VSHcNrwjM48sF7ZFzncsZos8fhQLGjGEPjm7XitS73k175bsr3ZoscvRhywyBkyJsa4VvAAqEUYLfMSUdyGSWz7",
  "key31": "47CMP8BxAWR8DY3q4SiNqhGrecPrkjGwMwm3fDJzhfBssBFdNP5KBsmaKoqUge7twAEnnKZ58XHQrcL8PQ7eJkrW",
  "key32": "2734Bx5PKMuDvhCVKjNtsS4YWdR2ySQfeGaTkyYYtrgvkthfATZbe7A3xP6Tw6bKJGb52Qk55iWTv2xxnT9zh1Zb",
  "key33": "3QUaFeoGLM7WFmoXg2K7S3gqkqo1UjVrAccDeiN7AVH7Me3YUD1ZWz3QoEYkSuHvb5AwdSk11FpaCDdfWQc4Tfgw"
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
