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
    "2hXdHSmDTox8Y9xBHne9osg87UZYtveFLLpNEniGYLidjVmo1kw71wPB7cchptENp21N18s1HnwzeYRxvTvFu9Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FySQmT3d4M6bCgoXABHH7ELTjrRUvfRPgV6raQnjkvxLUc1bM9bFYMWJbaVPw9ayJ7c93Qecd7tqfAiiA7T4gV7",
  "key1": "5xUJjJq6uF6q7BjokQyMHimZfxBhMnfnQWJi3WB24Cd2jVsZQM8gjaJ2mzPhQK3AnzPBmTDYFsQH1cCzgDn2ikPg",
  "key2": "RdjXv33xd398Lg5EZaK8SzkoxFpgviDk9HHf4JvBVcduFvWDfNJuxX7LZzM3zzkmjuczmQNAwZ4fdXGnjfyQpFL",
  "key3": "4EPrJFw6qEbx3MjV2fwGXYdCPYpdhPSLaDsRhkeVQTk2bAdGk3Sxfu1KgpcV7FkvFoHcq7R68D7z7LxzbdSsBrSm",
  "key4": "GGZvxQxMUSbFufLFAnsfuBrCA6ddbNE9ux9Zu85oeFyN1UdKALeH3ABKj7hMdBHZwxvRWQTvQ9CmkzC3mKDUEp8",
  "key5": "nsTvY3TgCxoo8dqyHMDi8fNvXQXHt6vKZX8KDhpVF133DgkQLom413npC34cDEE8MhtLi8namkwuZvr8RfeVYmN",
  "key6": "3tRSyPf8c6jM4XRLwJ1iXWJHmMG6hdnEuifGHv1xe8Wu4Xj9iL9FV78BCzrq5uBsA6Qz7WKFueTBGJ47X23H52iG",
  "key7": "5eTrG4PDCgz1NrjySTfHNrJ1kdy8b2xdbZUbkGeyVcRa7jcJpATrqRnTjAx2x4DDkDzjvhAVs4pkb2PDtHQ1iUY2",
  "key8": "2G1Xc6SGQ2iFreWnn9UYpfgxbZZfXp8Gt8R4RX9WiuEYriqY32hVVaGxDVeqJxip7bH1wts4zAgibq4ojsqdmoNt",
  "key9": "5EM2yb98F318ZdbdFoCcmb7JH7oGn86b8oaHdnkRTx6pzqDVtHPrVMb5ZxfShfiUZyPk5Jx98G9uzgcKoEPLtJkq",
  "key10": "5W4Pr9kEvyocXHzKN3cgJn15RAfhyuVf19jq8s6CRDkUGRdBseyBBcoMciLK2iKjxHy2BZjvPokRj3P8tdQbLRiY",
  "key11": "5pqmxL85UpAGweAmz4Wez9QXNhwvroKwtuQ8XMeMenEgRadqJFSkThibvhnKERpA61aANCvu1SxgCVTFj22BPYzS",
  "key12": "5fZn8WQSX2teannRZ59csKym6PxdvW7ppPYF625ku2EyEE9bxY1NaPRGNRVqJvAcTszRknhqxw7W13TFLY6EtL65",
  "key13": "4hz5nsQtxvmDxWHd6DMNutJJTttv8NyXYotfZCzKnUc1xUy85sczRQ2nw95WaxzGoenoK21edUUSDJUeEaDLieeK",
  "key14": "3g63hVpfnMJAKZ4FywMuxMvsJqnb36j2TRTqZBrxsYXPEEA3r8hSviLmQdFZgftkbP3sZ75NrwUDLhNsyVtbfgin",
  "key15": "F9wRvzNjWJyNmYijfXKiq542gtcAEgndeebocjT31tx9iXkguuWRK7nTF5qZaBaewaPGoWSMPBK8fBZv2zvukV8",
  "key16": "3S3YHhfNoVns9tEdjda7QZxozDpW8CQ2qfc7u6KUBedTwUudRdBRLZepoSurGCtgP5kVxHsWrNgtRMPMqfAhiXtN",
  "key17": "5otYmYJiG22NRhKCxpDBvLww6xFXtf9UoEGxhxzvdufrBKmYboUGJUo82Z74ZzfzfYYxsaAFMdrukKUkbuSzdwwx",
  "key18": "3pjErCFgBabUG3rUeEMswvjEy1dkY7az5zLatDAQm6AhwaEUxmkLpsSDVz2jZfWV63iptBwrwyfdT3aNJosvRibv",
  "key19": "4TRqHMahmzKQTLeot8s1mUXKrvSsgADJ6V8njJfMRge9oDcZ2j9PphUqGo1sEea29Um9cLvtJVB7zjZy6qPDGjww",
  "key20": "2Yh7MYdsaU8y8DrSaR5kCFnZsEo3MnG1XdGT4ybgSKkQ2dN3WsENdvcNZPTXRam8D3r4TAEmym3TWa7N9EJ6HZmc",
  "key21": "5sMzmkmoSfbRN1Q2X7nd4Umgp4SMLcTVeyJ6BiEVz9Y9TD2naAZ8AknLaJAWrznpB9ge4fyjkhX9VtNY4tvNcKs5",
  "key22": "2LebF5szcUJVyVnPa99mHGy2rHonTvt13XP5JjkWEyZDC7wn4veSWu6wFNXyUWKJ6M8ozG6dA67VnZXKDtq9gzaF",
  "key23": "XKW7fo5u9T92mRhRXoXaR1TG2RATLs2qh7LVtY4dBdaEKM3VBhicFYmz1PYTNsYiWPey3aTVhtrwN46uNV6F5J8",
  "key24": "2J674A3niz9W5YrCzdPNQUtbkdebKNGo1LjEJVUPSSGqTevtLhZpXuizerX1E9fymXKsC1w8KkNNwNDqAFqPDckf"
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
