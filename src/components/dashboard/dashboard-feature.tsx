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
    "2te4FjBocNnXuviyyXNxxz4VQepQXXeQ8wDumL1MXSHU6JrsMJR9VVCignpwywajgxgpWeHNL6GNHdvAWsWfH3Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjnZbDmByZnUd2LMo5AGEMj7t3KaEJCsi5C85x2r1ULtEm2zHQHdaj6MXtcR5q7GbExfwSPEdhWWXBnWAJkUXCF",
  "key1": "997pVKpT8FEc266rJTFRhnqWpooAatm2cUhdpMQgj54aR8CyXYvhH6C8ogqRpiFP2CYFF6Nt69AA6zYzPrpVPh2",
  "key2": "JMtEzymViFVd36wTU2SwggaA7NY2TcZFewcKaxKJH4v7s7oU5MzQVT8paimd1L5TTbMAfoB8KUDnauq9eFu6g4J",
  "key3": "3msELBv4wqRKfhzw9dhdK7Eic5mRkPQyoPHQirpjtBJc39zG9XfNFy5segHfk6kbjR4GMVDEhJnPVK2iLUSbRvbu",
  "key4": "5TwTCtKbqUyAEHoxitooTc9cDq3nyvozHWTGWcDjkwGe52HWPuDAJsuoJWq3Ds7FMhMSJZfRS8p87oM4UfQsTBTH",
  "key5": "4x9EJrBFJDsPH1k88pu3ZRznLy2mtpo6vzjEtRXsiApAt96yomCaoxobaiyCDXuWmVZskx4aUMVmPusA1uye457S",
  "key6": "mkkWDyMF2s5yFsCu37rZKzgyyjnkh2yStVKVYXZ3LGw2EeZnAM3up5RdoHbqGNAV8d4FasUCTTiaM1dSBaqdnVM",
  "key7": "JkzAVaVA7X75FYJgkP1s9HpK8RhDqne9LxHGAfqowdPoM5NQmKpnJgaUxtV7HLHphSFhv9YHunb7MnqaWDh6djq",
  "key8": "xhJDx1a6Bu62zysRthEYRVQwb69NJfgvXWjdDvtEemH8c27CdCsNyTKV1ccxHT3sbjaRz6VUF3cys5qZUykHkDX",
  "key9": "49R6zZMxMjt1kushAxRVy29kGBnZhADrxXWi4KojiwAHeyxkJ3PfFeebGg2u23bxQMf9njbimdrfCgtbExkF73Y8",
  "key10": "E5k8FSNRcCheZ9u3UQGMfZHZxU6fHVvULWo7TYemdVqmUzBLb7am9Ezv5fGTsy647g2WzD3b8PjCSHn7nJwXih8",
  "key11": "3rq1M4CMxj3cAPdPb877xJVQegq8qbw7Y4tXZHmPALMsKu1FMHghjPseXLx1VXaucPcLXwGVaXZBebpvh37Ga4Jp",
  "key12": "2TDHRntZQBF4FChwRhNe2fDn9NUDjyTemrf3SegTuSja9nQ2MkxxcTy7To6mkYrAYckxVVvVLA1d3ageDnuhmEq2",
  "key13": "2N2Luh5KJkShSw1k2WmqdukH4fhYvzfTa3kKch46EpjCgHRoMDQvWh4pJfmrAfomBTjGpYxU4vvrrun3cydaQoLy",
  "key14": "QyvHQJhxne5hZZGoBzvEajv6zP5hH5pxGCM93pT8M7ULBRdN5JHkxtshgPLk9qaHTB1QUy9dVALa2nRmg6vMnKo",
  "key15": "dkM3A4dePNRQxC9DVRzfgXDA46JTE6kNAbCaqzxvHw5LrQfUghmqXM7kSw3n3iMwawBvpeeqhRVuMK3Zugif2ce",
  "key16": "afBTARMA1Wdcu6G8fY4x5aacYFxPRWZMLqxoeKBb5mgx3XLXjtuHSg5FwxZRDpnF5QihnXjzRubrgF43vgh5Hfm",
  "key17": "3PZcnbKbhYde6Mqo4acYvkbzAsNCyprkahUhniWCXYidZboPZeYBo4MujqbVYncr9kwSwrDbtZu8zePTjeGUbHZf",
  "key18": "w5G5A68Kvv3xkCKeXtZVRaBZEws8CMmUuAQZySgwxqtHmNEAwAYdCKEfVsJbxauKGmHtSchg8XYkraRZBQke1By",
  "key19": "5WvPQGYrn8iXPGj2FLFZLi2ftgH2FKphhZeQGxZcJxK9sGHbcE9qKhN6fiZWaraXSPUGfrQDZonD5v1fKBcLW1F2",
  "key20": "QEwRtZme4Pv7mD67g8BfjxJWYnMxF2JzkNtFCWi7ejZHXt6RVPPr4EmxLspH5GVxubrELCZL47geDpW58KXNNML",
  "key21": "4Jo8WZyPnj6t3jfsX9o6c3wW2e5RdnjhqP93PVBHUrURogznwmagfEoTvtX6LQCMYSZ1mReFnu5h2X8qLyYsMrjQ",
  "key22": "5QY45XvFHpLeWF9LD8ZLj7YbpN7WHbAocFprx6Q6BuCbJS6TUzBcpa2YToAfL7R1uUjfgPZVUurURm9HCjt1ktdN",
  "key23": "5wpKYfSQ3CZZx8UtDDxfTYpRaTEdfuyN3nDpXtba9waL6kTQX4nE8q5ZUW6VSWu9krwkGcN6dhjLACNumnwoy9DN",
  "key24": "3XU6nqndAx6sDGA6EHWnEUyK89oxhG863GSS4ZtxVB7BSaexaqMFhUGYXY3bT91TKoutPyGnMntUCNpuwhGqqPqD",
  "key25": "4EMYh8yZDp4GS24hp32JzptHe5hMPdGdWF5jNJAXUMwXMKjMdF1reEcuAFQ28brQpryQJo9cHKw5c8qGWVZX8hFU",
  "key26": "5K4Mo2jirAoM3aqKBApwHPAwazU47nUSscwVzpnuB5U1g7YfJCcN9isBxSdrYMJtMuBXLJxHtFLb4Ab4KUidd5r3",
  "key27": "cmvHrNqUTeEHT73zPVe2hSZ54AkWbQ5k2L9KugS9z3uWyJyN4yYS7g8UDWGS1UniEeJKLNapYUdGsGbDr2zKozD",
  "key28": "bY7TdezLHCXbFvC7FnitBPBGPxsMJRwhYwBez5VLHwQMaJJCC1HnCQp9eteyMk12h2A3CsZmd5xZdeb67mZWVmM",
  "key29": "4Xip9cLrya1qpZ6C1u2cJSBCzuuLVCLnoa4jTpMSs3djji1R6FfPAyfpFUvKVEehcAtF1LZTfUAhozYgR6AUN1ih",
  "key30": "5JuKJEn2f3hroBWzbibcmbLvV3EckAZJUcWoGsUQxfhMFVhbp6WVbrmeTnacFYvqtcgJv9yMk6bTJ4YesN4BWgBZ"
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
