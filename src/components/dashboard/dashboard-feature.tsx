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
    "4QpsjQCWLCRQz3ZkjHiKVrtLdtq25dZVkek6zAA23HuJnVREDJosbSt4myT7BkTVZHyaHwH5u5AqFK4SQbuvZRws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9W2Fky6S5Ytrp3zQFWa6ogosMg3nLrGVM3oS6nSUiKyQb8xtwLwJjEaaX7RZHjcu8uwCbcsspcEa3WtXsCWzeKM",
  "key1": "4PpZyX91Nq4DaPwCG6RoEXVtBXW5Fs7CvrZP7fcsrrcy6fPTW21GRTp3TsxvPjWvnE4VKFZYN9U2rkCQvGFB664X",
  "key2": "4vxt2ofdH9SMsCXKBSG8p3Bwt6EanArumz1mCGYGnrY5ZAcHRP1K7HmKhJZeVSvVgXQBfmrhP8f5SVSHUWf7C7iu",
  "key3": "63Qs9spfaa7dL2JySBXwxv2LXSehpb889eGQ6HD3Gw9TYkSyvrteExoG4ZmyjK8ACLdBuvRnM2nihFz2WTLgarD8",
  "key4": "46aUtPdmwCfDAfjcvDgfY4wQgZGjYZ9DKDNqn2jeJDrEygF2JMHPDJobzKtaYeZkhYhBM8VXMZ4SdwE7y4qKMn5t",
  "key5": "2Xzz1AZ2Rs1zDNsxD76bVWNJz5mMZc5XBP2ABjT3q8nFAkTgRvNP14RD9wpSq4uvT4CWsdptYDJTBRUdnHiqDL7X",
  "key6": "5SJcZ4foie148iYRWW4sAvDyUMbgiKndaS8wQaeTHdJCL1frov8R1tRSGUx5egJkDDjun8FK7HtWk3GMRZiXSrqM",
  "key7": "2jZ38EmKveCBArrtSb7xKwqoVfycVB7gKv2C433KQBJytnma2GmK9f6H4MtpH7HiyFHtcbPtd378L12HLPJtZBhH",
  "key8": "3foCxc87fAnm65Kb2QXLVX4ivku79oHRwfz7Mwty9fg93ryjxgGnqn5LNWHoUzZ25uTCZcDy8HZdoZa7w6ZVmaia",
  "key9": "2H988YXRXXgEfsQx3veJN8rPj3YwXhxLBqN9qM52t3ACnY6NME4oC1wGminBxwEuuYWgWkRAbGnhJ5PXwRbWTyH",
  "key10": "4rveHPU88W95rwbSaNxZvfMoHbMkCFFBv2C6WW2DAykKq7FaBTxK1PTD7wjHvu4KbKVBvsYyRCK5KnXxAnxD81vW",
  "key11": "24gM6erGGrwnxFmaPNtnVZx4gFoJsu37Uo9qfdDnGVCYUaTFmeEPVeHpwq7pcoKWma3ps1AVJsuyafmTmq27HhP3",
  "key12": "23j6zJ5x5S215S1wvxKUsyxaXCAQVxeDnB6y8FS3Z47f1WHXnxpyeYBbj9LBi3nmK3xdqSuUuxAo1G8JRgxaBs2b",
  "key13": "4uPjy3GR4TXrxVctQEM7SpuFf6J9kX6AcGVuCBdywbQ99FZx9RyjXEJe68HF6iKAqq1j8qK7rQFtaWsVZM79wQW5",
  "key14": "5jSioGTDi3xGRAA3xLPh3qKKZTUf1Zm58QcVfseNSPxNyBqAEzMG2KBBBLqwaPpKdQj956HXvPq7btvoM7QtKamN",
  "key15": "2qyqrs8PRoJk9bS5oo6v4fKcjr5xxBtbAMqDSqfkHZ19aCAkp9vVF1cUsuJ33UbdjjEf8zqw8WxF6xDTVRwLYd9w",
  "key16": "4VAVsKw9hJ76HvVLvDvTUVSaxecyUrom9gU6AaTfFoQTsemKHZBSYJ9v4VznefShxoutVvrvuDP3GiG6ABdgm5RZ",
  "key17": "5b5Q6jMWk3cwcGsjTttaaNhjmVTYQ2jPiVDmMe8Ayx733HHqvbcrYFHBgNsvYTpsNprUBT6E4mVtdDfd1tNbG1sk",
  "key18": "3BVr59DS5hAmqh4wcDEadi6huKrgzx4fik4sV6FySt6C5XdHrs6uCyo6tHRcSk5CRozgyLS3RUHmFczC3cgS1hc1",
  "key19": "1yEzMtgu7KHef6EZYNNNTbtGfB1zHdaNjMBm64Skg6bMEvrPfhRDYKaNhQZUbAsUa2BcBGNwxaFVHPDNWPT8tmV",
  "key20": "oMkDCrpQV6d9AhUrySqiS5x7jzU16tprQuguQsYFZYU5XBVyTArVS7DwGNatZBby41T1UejfdGzLidoxvgWmavd",
  "key21": "pwbtM88qHH9A9gxNfwCW1SdPpsMXqqff8UR3APpSv4XnXuPgQhaFG9Hfg2pbnp9iuLYuVz5kG1s5mYXGhcNYqfN",
  "key22": "2Rdb5H6eXi3ydckrPVDqUrHoi5HrH2AmiAx6GUkHA3XzG4kBXd2DRnWWJwAtWBFmPCyRRK8shrEDStFh4E936owp",
  "key23": "w2NfBZbk8XBbb2YLypueJbUPJZCrKVAPeXAmXKDysfFkuuEB45KqJJWuvesdLmNfRfZZk7sJ2CwbNtx83B31VYn",
  "key24": "4s9axsiRpd9vdcvAoMWJjxamK41EzYXf93i27CKGxASN6Jrc9k454n9eCDoNLQYZPEvq3HCvWtpSdyCTGB2Gqg1H",
  "key25": "3pJ524ejM22oWDKWeFjrStU8iTPby88L7i3gGi29KNRgJuEQGvmx9sEth3tifnNkZamPHvYQSeNxqeMoBPUZ1rU5",
  "key26": "4s17FF9qf9ruFnNNi6Gc9pEMAqs6VZFPuvzSGPeQsLQpmQ1H6LjNSUGcpdimbfkHD1EEbuYQctULD2vei7ztbhUa"
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
