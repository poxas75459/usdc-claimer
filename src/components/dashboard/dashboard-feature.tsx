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
    "2RXmQkmribU1M41CeekyFsQBTcsoPZxS3EsdXdYr7MgBQFYvmNsSwJyo4ChYBMUdrA2CDHb41J3pbybXzx7y1riz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UEQhG2Lid2hmMU3mdjVm5jFvoddPHaPgwZ6DeTvNfvdrDaqHyt4LjA3Go2Fj4haEao7SuTBQit3MGjSXT26zfGs",
  "key1": "2TLSExvgxLn8mTZ8uHoGvCu7gCHfxWHP44mUBpqkgMg5uw3Sx952MeaG1VXmtN4zANm5ZBcyt6K42Rr7Ext4reMq",
  "key2": "3nrmCnNmAEF9EaYPRgjuiSkjbjYKgfU3mZTYK5L2S1SxHVXqsA4xogZP198tsA8HGGxotSw9NZaV68SxZE3mJLAC",
  "key3": "5dznvgXtrawGW6gLLce7WPPpwyEYnofMCWi2HxDkKYRy9xmXRoQTPGMVFE78F9EH1HSfnHYCrhWB3NAzfZTTebHZ",
  "key4": "4kWMexsrLsBJbHbdGWpY6YweUDEdZLtmkyAymsaEvjfwnHnqTNpaWn9Up1Ecmxbje8sJMabDFSqnD7UKtmpEgXZL",
  "key5": "v3PXAHuHbdmhY4nnmvFhjsHMnQMKXwMshHBqU3iq2YKngyu53hXvGvYBA4nuqCBB4SH1epa7fTYXLeaW5f7JgMX",
  "key6": "5RFXHMa5w1v9usdvyEJ2MASA7D3qzVwgu1QFN7fRj21smcbxXC73q7knHwke6cFYZYVfMYjk5RvKy4R1pbwNrhUe",
  "key7": "3GH6HuzgVzYRomYpGorLQtpBpG3VJU8T7Ab6kQCU3RCaPnd5K6hyR34dhjPR1vK8wYEA4vytv6oGGF9YG7jTuYfq",
  "key8": "4B2qCtYJRYS1ebtozsVBbtq914Xs8EF3xm8d8QQywk6UXjaiZt4W5eGmpjrFXNe3ssp4fXfSVnKTd4gnpZi4wo7T",
  "key9": "55tkPHCe4wFEzZ9nwjBUN44iFGSu2Vx2nu9YrtpVtcZfeNqwpZiJZY5eb4WtCbnfokW734mpqcwrJv4k8YZLCUTg",
  "key10": "2ZtcBwSLEcqRrUg9xAgSUJCntwkdvNRXrE7VZfe8LY4RsWdqqUD46Ex5xnaPNH2LRcVyXzpoGuPR9LvERjoCF2VK",
  "key11": "xdy7Nwb9JRzEqhTSooo3gT9UStsJ5HXZJrDtA7gXB8gndN2RMebfkyknXWT7768srR96CS5HMEhmFRRn7b7RrbN",
  "key12": "f3JqUUQbQptUWBx11jM6iQiXEnD8qsULbWLxTKEnvAbg1opFCv8XP1nRG1ar5nmLAAdKhcSQ3Wz6voAy7rE7sZN",
  "key13": "gNT2AGYWBK4hMNMuMnuFYz8iEcxm8KpNoRidXeSZ3TbsEdur4doWyKpkH8QMoG9ns7zN9XyQ7huXCvEkdWXxu1D",
  "key14": "YvZ1s8JRQhhyDhhrL5Mi6f9je1GZakHu7aKBzFa9RUsXVZqSFHG6xqtfrbT3fht7sn4gDL5Eqd6Yhgzi67wtHYa",
  "key15": "4zGbST4U12HDj4r6rEYA7HvoPdUcDe6w1gj1snQdJj3Z1yVGXgZjxFhxQDwSFHaw9hYhYfNM24Ur8siPnKnC9hiL",
  "key16": "VQQGcCafrKvdawmXxY4WyZyNPL7t7DB826Z3S95Hfe1BGbjymANvpF2wq865qb1MUxdh1T9WrMdMgkVe7hPGjTL",
  "key17": "G7aoD75xaK5RLiF2N3WQmTVi1MgiMVmntJT2TBAxUDu5xVZfEjpoA4hpG7fq3RMCvt4yvpqaCEBqTF5FHftBRVm",
  "key18": "4WkBkzwjiaEmRn1U2Cr7VvZCJEUnjjoqiSEsWpsbJXz68NcXy1n112y4gyxjszGT3ncYRAMv5gv1xLCpXyRegCfb",
  "key19": "37DtWzWhqch57vXrtQBmLdzb1b4BDSd5knvoA6aJx2cQ5YzUNA78F2fUN8zu1UN8DpVzjsp1HPjWp43zoiewEmQy",
  "key20": "3N1mfQ56TcR3yWu9H1FsNNCSbRXaBre94PKCjzt2N85ru4uxfxqU663HJTBkJWp6SF4PicQWB2U8DJBQooe2HPXt",
  "key21": "57bKQadbg5AEjiedqJ7MKTfH7NXfawRkGzv59BXAJHaN1jzjBYJEgnpgNNiPWD4ngYpisQ3t68MCXej2KrNK82M5",
  "key22": "4JDt6zLZLh5MhLu94DyrrjHoBwXtwfqDWYqM5RH4ePSRYkiNMcevYHdseykJBSe9cpKJFtpyVd5US3oPriicefup",
  "key23": "3uQZevJSSQTbuTU8dVeYejLgqUaMbZHn32jLHZVjyMEf8eWqQVJ5aZcvYQiAHBQYN29jiroXP9Aza6bMUMS6rn2V",
  "key24": "4rn9w5zNhtuBLcxNFLCoDnP6cE1sKNuvQiiuLKLU2BwMUDU9i4HMjnTEXcpf79iM44nEr4e7gY6V52TwXYG5NJob",
  "key25": "3xLvtvV7v35C13NzBUZyiUCatwYyq5Aa1d6dEqFCKu7pDCAdXqz2Vz1wdoh3dMMBvbfzm3rtamNV8DnvFk15uyVZ",
  "key26": "4kz1xPb2rENQqXeQqqmJYJxH6y18VbisKqfzvKwtrr292qNo8ria57dysCFSqbLp12UQKDRcX1jy42hfTkBMZBox",
  "key27": "2zBWuFZHky15XtCpbceqLM2MoaVLDnACKjG2U1uVeHvyiJVWYi1DJanLGuX48v5s59Lmv9gJoegmkg944TP5ogAu"
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
