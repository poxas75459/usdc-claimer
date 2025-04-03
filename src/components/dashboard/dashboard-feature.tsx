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
    "63uUWUEhZJKFsfPL2PJqoD1AquUmWaP9hjTDh7BqbWab3miu7Hwcx5narkdVqA8TeiGw2BBokYrdwkFRTw6YLU22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgKHJqQShe9E3MvjX9BUUChPqXZPLVrucPF2zY6TWeC9gQAXBuw4RDwKvtEu12goYnqBkRD7AQiXKdTrgYdzqDi",
  "key1": "4BSCwC9kv9VinqwAc6ZiSTDYhQrWcHukAURKH9CGezwqgBnv3HgvgNM8KM9y5h6J8zhWTNbFHrBi46rKMnpnvhTv",
  "key2": "3hR9SG6EqPKp8UDjj7DryNd92xn4jEmSwYXMFYxcgysK17w1NRjM1f19BCTjqZwETR8dW53SAAt9Ezy8zZg8pBwH",
  "key3": "PKVp2o1euqFhRcQXRBg7VHpTw9CVJ3gU7wBJcM9QquBGsGLauKAwWE1wsATfig5T8DwXK2U1C8n4K9heRdBGC11",
  "key4": "4tHk55PkaZGccezB86oH3T5scriviE7iWFTkDMSaZfUMcCfBz6gcUhw1g1miRjQPcnPpB2DCkeF8UAxLeHTQCctR",
  "key5": "mwxV4quADV9L6PeGUYK8pmht9ZkinUZ422VsV4qZLKGCE9Rckwc1Ezh3yHDhPsY8rbWtsNSMNhZgMUf7FSK6mND",
  "key6": "ipp6mKHAkCndiwGuygshxfLowuJ2wua9Uxi6DmvFGgeWAh8dBULy8MX3muSxmwKGkp3RvMTwr1FFp8q1t7BQABA",
  "key7": "56EknVNB43L4AXEoUf6dNraqZcqQPyZ4i4TKcQphcYX7uXhTYBRF47m1qG4DVfaeYooiPM6J3mFvKaqUbam9d29S",
  "key8": "2h6iSV9R2VsbpRFjEjortrq7pdpiTALjyzqUghngWfcUZqKV3vxfFYCjHNUmxkSRaqkDZZNJnvAU1gTKraAVNYJp",
  "key9": "5P7ixubJ4dgJBApBjTNhZBn5EwHeua3iLXxpdr2sHcmYcQDe6o2jGmfk1FjmEmXWWnDQktwNAhJ8hqHmFmQurKt1",
  "key10": "5e4CFZ6bvFEwaxMP1arJTNdej3U52kwobFAguEittfkVtutLp2Tid5s4bPsjM9psvnVvpfgPHn5uhTAujXCfBww9",
  "key11": "5fgoxEiNaZSNbMTfZwaBDvJv1JxzJBEm83Yg6RF7dkowgxopi2dtuAX4WjtdEMsebYX6dPvvsFUGh8ZMQcg3tbD5",
  "key12": "5mDDf6aanCH32T6Tem3etJ1mktySMk5MhMNwMHaRkucz7RXHTL91Cye45uX7kWG43PWtfrHLjUKbKavQTpGvqu36",
  "key13": "4Xue81DhtYtRDpvCZjUs1PsYuwnYz6gX5352xumr2cMgbApjJSJ7mF4yTFVZ4yYjtzbRYAu3fKsFLnfY5y65XMYo",
  "key14": "45brhjYgAj8Kyj8EWrKV9czqndMpHtMoik4KMuj3rJ23ocJ6EhgKePz6Zjpj7gCnNNf7kQLvCMC6QudnmUnxws7t",
  "key15": "5ZoZ21oHPUkn8mmjqV6ro8f8M22y9LTdPcByBd15VRTBJ2CaVqAvZESNtFfSp96iCqVHDzjqbYAnJy7fpsmGNCw5",
  "key16": "2vGsieKSwHQRzBzLi3WjaM5tR6BgSyUKhiB69iZyqN24J8GvKw48dNHPrife4QAvb7hiE57a5Q3oSebs7xfgeXMY",
  "key17": "LdQiZKcKvnicHyh3bTVDQJN9myKEg2wQGRpVekqKDMutXfBFDiAiDRmeki2sNSCFSU9JyNxynZGSGR57k64tnGs",
  "key18": "2zh4oQDcv8bh9JA2KZocMVkoBD5icCeaWKDLR8hseD5bGDNiewM31sNnuMe4qyea9Fwk7kBCHvrG3WeCAa8iKev9",
  "key19": "46Qf2EQ4BpRxksmtFkCtH6VHMebQZzrJdxsnUufCoN7k7PrnZ9PWQs3Hq85yAHm783GYvSfSyHVDfNPsbgtMi24S",
  "key20": "Rf1Rqe6buUCvFNeubQ9jHnWQAUL6Ctqxt2Zropujnjr3NgQPPQ35Gv4sZGSjBJBuxPcxeiaYKbPwBZ5H6h5hqVH",
  "key21": "2XzsF32Rxa6LwyRLPrjiysEV1PfP1dv6bFgzQcgJGc1o4cYdAQXo3kHgN4gQRm98ENid1drcjsTpMLvbdxKK12xZ",
  "key22": "3AJvARV1JFdS1wvSjNazQBG97t1JdqKnPS9RLc4pdNipYCQeUEL8c2xY9PK7RyZcY5s1P7vjA1zvAHoKyQdZk8to",
  "key23": "5QE7uuNkbJdWgpQ1pRXUUuUkNp7GKFWrubZm5KFbZpn7hzxMQtt3XrMWkRxaBHKTpR8nof1F6AD9xNvLihjW3SpM",
  "key24": "2SwMNfKtKU8aYXUK4ZoczEN8MK8oLn7thNbUGW7dg968ZTst3vpRSyFopxAAJyVrDDYjQ5PiHERG8i7PvnbRVvbc",
  "key25": "34jGjuvQjAphWeGxgEStno5kctG5mcRvFmgx18SVSmdFAGfmDo1gHfUiykdWPg9UwE3w3AxBfh3ZYJmuocLgLaWs",
  "key26": "5byxNFn5RjQXC9cdLJ3hjjNexpDy15vtqJdFrEwAypU8EEbGMBt3YmWUPwo4y68itEvUEkKHCvUwjtyY3U8Ckkuo",
  "key27": "2PPwr5mH6LteTD2deJbRAHX74eK2qx4XqGqcQsz1cJPniknyJrGwkTkSf896smMcP5qEM4siA8P1qnC34rgNirvw"
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
