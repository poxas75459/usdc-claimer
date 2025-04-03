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
    "5TnS68wBsidhgt91XWvdn2CNsvcj62BEm8rTEsm1cBropdUzXw6U7vTEirb7qCYBMxnULUkqVV73mCpnBvv1ByeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4RaCxYsoufDXn2KArDWXsgJKdQLafZaor4PsRHJLNgSBSMxmcQzNPmsV7vye45DTVQKBHd6d5KmxU7yMBiikDc",
  "key1": "4yS4Za6dbJdoHBhFQjZ22enVHVFzeUnQ1QqgrRFHDPQg8prErDmYoeJAw3PbobTrHkEveRDL5sZ5uZ9TRzTDAF1S",
  "key2": "58ysdvVpULp3LCiToZYEF9LHJAMaWUgrocpPzNMNUXMGCLvL22LHLdXFKjsdLDUQMUMqu1vprz67QNHzse7Y8Y7H",
  "key3": "XSUWJRDu3YMjEsyTo3ouvySq6UKyn76KA2cboCYYqCxxxEnqkrDUUwVfpTb2hhvGtH8HMZHGnRU2uFS5VZumfTr",
  "key4": "2acWbc5xYG2b6GdzifAdGmtuPg1fi4LGEuHa4ELR2ZZBZw1cPXZtsbKLxFKtHR97Gs19Z5KT4W8BNoBD7h7JVWHG",
  "key5": "5Pe2cL7CCGoGmW5irQX5SjvMkNHjUsc8gAr1z47FLppyBcyKnHwuopDYkNSLzH9BFSPA5nFkRtL84i5xpp54k2Yx",
  "key6": "3Q3EE4iVCPopFgMsicnVaCLp317U2sn1ZtEdSNwajYiDuHKN9S4ee9FsT7G5jao4ydd7G7KR1VADsTMMVU77NsAP",
  "key7": "2LApNLUDyZMG4uG2x4rFkLx7WPnAtZYWzuEDSCrXHt99BUQzbdJzJzG5XdyiFPSQH13UjAHLy32RkXG2nNWa5Z2Z",
  "key8": "RmsfSsckKkb1fT1gyraMHrGaqefnuesx8qGvrDGxLMbrmpGUDTcp8eAPFjMe2hqRp4L6dUWTD2VRyjiaMveSebn",
  "key9": "419NwvVFBm95jaeyXac4dz5bpCGmYwmJ7wfoUbNxqUJ3WKpyTw1eRrB3XVDN3WejN9dckz9Kzm6PJAQMXti4UN3r",
  "key10": "ZqLx2ekSMvMTaVhAtmBrqq6PMfEu9dKUjq5anJfWc1Hq8kiMhP3KTsakQSiewRLRbqSTpQKb1iTGKYVemQFLYFC",
  "key11": "383kfPCxvr76b54VM3Gu7mwY1YQ5CVU65MkRXRWBZYdtQtx7UEX1oWGkwJsfF4ScE2SRGJW7VVvh7agbwYUVSPrs",
  "key12": "58kf6ZQyxV8NucmrRtfZSxQwSmev7CCyY4tTkGySYdeQR3zsziaBoMJAhthde2uMDREijJtEhcnBE1JFFZ81YsyC",
  "key13": "424FX9JmtBn6sG9rqxaMQH2mkE7ZuXfR7C9DCUiWKy2hdCzgsuexzxUmJ32KdAenmCrSmdMDDyQnQgt4NJgs8K5H",
  "key14": "5yucUkdmx7Ks2GwqfD3i4bKnsuy39zVAx5VpgKrKVfr4uTSgRFLduPecEmVdt8XGatxjBKBvtrQtgVRDcCybGzur",
  "key15": "5aWnKhWWjVpzNRXgGV3j95SQCYvkmDP7SCpHxr7K31pzjsxVsm6wURyW8hBugYzoxcukTKSUMZaQz7VLPQn8DYwj",
  "key16": "5kWJqSbzRr2GmVb3ZYgq7WfUBMCFRxYoC4CeNxYi9hDTUPS9Ao5Y3ruZn1hyXRWYLGNRtMbWqbNchGahfXni8fg5",
  "key17": "2CuRGAUoF955iFnio2RXae8S3MPoKYbemgyoYhWttFGD42962Eg2Dh92DCAnfhLYRoDvvyyPGC3ftZVtSHtwzLAG",
  "key18": "5HmN6kVsa8NpoA8RLzcVvukWyEMETVJzUAeTTontfhW2UENVL8U7CX5k73pvai83u4ZrhxfdqEzbQx5jxCaXnX25",
  "key19": "22nQMgR5hFhFHeNYVFrEaUsNjcApPzocxoxtBm8HKVVsSopGHk2kyfXYFMxaCsGNJvEkQSv3yDBkSEfweiKDi8Qi",
  "key20": "5x8rB3feKCxxVhgfHsyZYCXc62dv3xi7gZkFEJNnjKAaJi989uEeK6eVyNQbBU3J1tGSTcYVAyM6qjtBg3o4BgXR",
  "key21": "34PtK9HMpFv8daN4cxLupomX6xGQa68Ra1XYZ8baYPHsgWpsSFj2zg6AX8H1B9VW9un6CbJvrP3WCbGjaKt5ExYd",
  "key22": "PzEX92P1KVMyat2Gv9WBVr7KHdjcbhfijeRzaGB3ZcwHmFeV8HsPiedv8JhyicGYTVvZ8jv7qXzVPDcdAzbHpJo",
  "key23": "4zAi5KY3CHPvnSgkPKyPSBuTKbA2fnatgC6afZJ8ZYYWGmh1Xd8QtrYkQmcpwMetQyBdGttwG4uQDW7oG2sME5Ss",
  "key24": "qwx8DSNEMbn6RoV7oCv1bgEpfR3kNZcxYqSpG2D2jiS8aXCPAzmdWmn5yn4wvpGzhfMKqkZyuc2pWR5eZtUcnqr",
  "key25": "2Tet3JxPRKNKuYUgh2JkEyDdXHu6pLXJSjuCkxPRSaPLqL31y5K7XKVVcM4v6EgHVRJsZxgkaCFF9HQw3qe6sde7",
  "key26": "oGyeHs4ZRtvCAMndNCXmuCHSdRLH2bxZXq9y8WThQAbFqS1ocavs3N3fBKmQuG3WjtSSZNcaJQySCWDWeh9pkeD",
  "key27": "5z8b7iUxEFdi9SsqmAvX8juptBiKS64rZe3iyBkekLqSFtKWrEuqLSszQHdzzthVvfxzDwsmpdW1nTdutshHbpv7",
  "key28": "284YLPmHmaUKV9UZ8z1ppi8YtL4XXUayhzFdA9xgXETFWRZ35ButBvnCiPQ6YqtUSRNMXehs3rxWroR7xNHMJNsq"
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
