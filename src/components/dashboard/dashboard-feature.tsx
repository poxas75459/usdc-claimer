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
    "2JfLkrQyhYWTsWwGDe2reP4J9dKSBiW6xPPdY2whVGN2TBnxHrY98dYqfKcPxyXfABFMHDG5J9wjjUrT4oTF8iPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ft5bsx2Q1oKVMiktECXEAUjdK7yAxTs1iZp9k9EPyg1HgaQ8fDf6MAnhsrvUvc6bQJMmFgmN2kDi7Rbwid3Fv6N",
  "key1": "2qwP4hVjbwqcqDKAB2bzHWXSADNnsHQVmMGwrtoqyeSrd9GjvsNyyoxJ11M6Hd1pibqtXGXe2BhRk7fzDvt5z22j",
  "key2": "56qyxeWgn5iCFLgHbdFmQ5dXNKQPAfVmdtMaBTqueJvMo52LdAARVjFxbRjiWJdZc1MS4pR1UBhuacgezfWSCRSu",
  "key3": "3sceFSY4aDWGtYCqosxePxeejp9HVHeNGx3ALFEbPS94UsNo7w1KL371aQnWzuNuWnyfXckqfLprt9rvMSzwJpsN",
  "key4": "2zXdDwn8Tng8vteSZ61FDQtDjGDiC6ENbtLrH8RWN2Szn1qsg7ERJVf7QJrz7L3HzZQPqBm2jc7LXyBbTzBghmux",
  "key5": "buJScANuE2Scsui1Eq5kDKhdkApAk6jMtqkH7WdAYuXihXL6Siz8RUtbUzxWhFDWAVqWxqw8HqBrDixMXUrC3WT",
  "key6": "4iMzGq6NScQg2Cwa8m45RPN9n8T9kze3HLVVSNwkT2NwX575fgVgaHxtDmWdnCYGMoXVFzeeButKDpcAry3zwgM2",
  "key7": "43cEfXt7k3wXZfcgDU5xbV6M6AruYVY3u9tgUvcLuG2qoCBBUoN5BfVu5HVPa5s5iB4y5WVraN423oqpQd1qhAK8",
  "key8": "3pd6MQVADcpnc9iLx7ycmWCnxDD3QhcJcY6yCJHpUPa3Zyrh5X9RW5uxkSSSZmn48siKwCiyCw1ejujZYMprGb3z",
  "key9": "5PkCvZ5dRHiqYV1RbDXQ6x8QT8TnoRink3pzjVVNAQ7RMPSbRQJNbJU4XjYxYXc9j4SSPcACPebFaHse1VHueKWm",
  "key10": "fNwQ4PBuHfii9uo8kaGkhN2qGaCkRSSASJHCghjcgQBr8ZnFPsCdsRAS97FRabY4MGoXRxdh7ALN35ckHH2wrue",
  "key11": "4tkM8ZmTjxGfjzAFMyy8di46yrm7F9jw5Qf2NgiGCyszTnzmfkihLN6wdkHeUV5ike26P8Kb3uTrsA97wNVRtt7k",
  "key12": "X3x9J6WMug74tMAFcAh4ZJhyAgH4TiQ7dCVfmBMz75FpLJEWjE1Mx11KYH1by71qKXL3feKR7knuZt5Y6AEbJZq",
  "key13": "5sV8oz3j97yzLKbMXqCAR1Nj3Smx9Y4Vi6J9qkFUVAaLqUoN66uktArkND3JotXXnNZSe4LdvxT7B1FBkUb2GHLu",
  "key14": "2FjcCSeX5MtrnsuVck7dbsQTNVMNWAuasNjyANrQibsYgA4RJqnyzVDhrDX3mhJuvDMCmD9QwbMf4WrTWue42SNJ",
  "key15": "3FZhHANtdAnPW1DZtNmeH85Xxq8b8EqqjeEckYWx6KSwnG9wsJDhNffnxYdDvZCLisL8ZsWJgxXxsqhLfgrKwSMJ",
  "key16": "5368CHewPK3SNvpg2iovKoFB7xwxMDi4CDvpCM4bv1Wjjiu2MeE9JUdy2VdGZTFTjkNNhvS7RK5wgHHc6hc16LNo",
  "key17": "uTtcWza5BV5oHufsxbEommsV2PLXqkV4Hmg3yF17TAscg4ghaBiJeShfsWfgoQHNWHDhvU19HMKjJW5Ws6nF8xk",
  "key18": "2cyNBrnUNfxyr7smQFqugs8qNyCtsWojvxpBPftmq22rGfP5saSnYKh31m1qQ7DfNo87peVyq592N26WxzPcwQb8",
  "key19": "4DfjjA7xdy4VDAFRtFAf5dEefyLgCQXshjwhKceHir7KQn8kzgWUvj6LjNQ42BHkf2HNt71A2UcKTv3wZCB1J5wY",
  "key20": "2YtSWytyZhx956U6rhvMCRZcW6MkXHL1ZaoKj9pG2M4DjcUsmUVTZevsQdY41cJEa5kRQrQ1EBcTxCCZfSLWu5so",
  "key21": "5BQVDH1zUmYHmdSFiGKzn2XKnoFTLagp17g8nusSTDQKviZJmm26ZGiKUe3QQSiFgdxTd7WDmhKjtCPj6HTQBTPj",
  "key22": "4ayagFtvpYTMzZtUuPjLgui2VmG77SS7RmEyD2T3utdUbxcY1Vcj4LgiYBXRfMu4AUgkMr7kZHqpyAWNKfPY8PtZ",
  "key23": "3iDpGGvsvcBovGrzNLwN18sdfpGiatQ8GmmyNL3kuPZ5ssiRgmsyGy17cHFiUWgf4tnThqS8enCMDEWMVk3kYtwq",
  "key24": "515D36z2AZgbdeDtWxRZw29zndtURRbPF2R83zaJpEpCqmFe9c4bpkmhvwGxGss2Qw97ZQowcjZdYokhf4u8RRvr",
  "key25": "VPwdkpykJSDvgf7Qf7TMpQoAQL3PR8niAZXuTxceppE5njKCVaQRHmX4VQths83RDPjRVgdhgkcXwihcbGqqtKp",
  "key26": "2kW7Bo4u1KVLhKbdYt3ihq9fDaQA7hcH7R3MfvGNTAJvpVdAD44vaxPwL7NTGG5N76hFZbsidLXv8MCNsK9CE3Yp",
  "key27": "5jnBQdgKqRwe6hVBVTugqjzN4fTVL8N1GeTw5GArawY1WjvaLNu9M6943VF972AuMcAad5ctMiQu6zrJrFSBMKW9",
  "key28": "4Kd2NrZDfe8fWwes4wRTzfHVMouN3i3YhQ2C9PAu1XJHndzLcd3sfHuqzdFaSjCdMMMxPUTXVnyHCUUoBvCqcAqx",
  "key29": "57Msi6Mjctt1yUcYWtYRihUvySK8wbkiH9nBahCr4zRRJYjhoJrfhvYAZT3Qgew1FeLEN7S54HhG44EAXPuCAYvY"
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
