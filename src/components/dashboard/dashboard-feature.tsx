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
    "yrwVExMhK1ZJMmBB1Ux5tXhXQ7HZXS1Rh5qMiSDJTY6aCyZUoFYoUsZDpsBcHL29VCeKAuowFVbnp9Nwi7je1VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTG4Ce5WGPoTu9WCH5ew6ff4bRsdS1eWubgyT7NqS1DcLXYiphBtVo6C6X8UWafuz4iLM38yMxDX4SV7yMaShrH",
  "key1": "fk7F8ibRbdbJPEiBiPEtVrNZMhTta6N5ZXEZ3VJp8nwBzCEMdMhzGG48P3VkHfzsnLPgK5Uz9EkETdUimEqazYv",
  "key2": "3jRdpTVGrmJiSFnwpwAJfTReokvwCtD8ZYcuqrUXoqz5sLCaKL9QRqsaiWbNE31x6WfktjE2CB6HHaiJrRtNjR3W",
  "key3": "5zWwfCt2PPdJmoQ6DhSZywddZPGw4vA4jb1eCZpkHX8ipwffbBBdY24pTepRiV4XRhkggzFLFPbtGAi51yARGHbd",
  "key4": "k2qwYrxk3etUaJaH7SUr6pAffdLgbLvs4f6Ashbcrp3Y4LS77TJFZCtpRSoiF7XduHsnLJrKu8dBsZN5Q8StFVc",
  "key5": "wRTe6mpUUAmRcha5AK7FWFbDvcznUxb8nQNR1Phmovx2UMVrHjkpVq8v8kdFuC2PDnNf6H58sr5t8gR4RjKSgCX",
  "key6": "3pbzCxJ4U3YGW6kyTqZcUVmKrw3G7TzHwGUQLUkn6wNTEj8QFyn6nPyXVgZKq1SNUZnYhb8qeqx37zF8R9LyMgwW",
  "key7": "5VEUMmtfrdzvBPKinnMHb8n53x86zVik4csJn5oZyRTbnU5f6hrQuotWBPxdZqqXMAJbi6CCmDrYSi1gnptVfAAM",
  "key8": "2SsYcBT7atN26k2smQDCUAYD19DNsrEYSsZDSmY5LFJBrgAS5KkHjTeMFVnSvYgd9BTtVeGGDS5PcfYrk9m3iD77",
  "key9": "5babqYNkAagA8jMtfS7VJc2vJHx9iXwTwW5Z46CwQoNGTpYALAZkX9GzpfV7SttN9H1MzpnWurZ5X5KWfvqSbobz",
  "key10": "emrCAJuY1Di3uHE1D4fgeNFt1ujwH7uT9f2KZrGbPibRUwvi49GRRiSF3DUNeoVQM7SXyMB2PJpp1hRuhyANrmD",
  "key11": "5mdVpVLmub4NAxvuxrVc4BN8ZkLmZNZu9iaVjK3amrhTzDM7vQZb1eVzLh79fFFsbFGBUerUVkZWiNVd5a3GyHgB",
  "key12": "4fo1ExKbtvexfcpXGwGF4SJCTThDGa2pNiVWTNUpz5akKgfZZxEpkRBeQUbe83t46uByJmdDSvjsG5oQPiRRduKp",
  "key13": "4dcZGEPQVVqhYf7tqHUm9zJJoQatemNkuoTzDTbMnbJvf81Znnh6LKNKESrsJJyyyAQDTdMhvvh1Rpt84KfLUMQy",
  "key14": "UFpWioM99FbMhpeThJ7zJVLTF35ffdycjPGVTUKD8xu9fniAi7YUEZt2dV1YSjSFxaJkZEnWwewb7KrcrrV7Bbz",
  "key15": "3MnScdRBGD6KXm9Qp74wd1n9ubbFLhhXg7KsApe3xEBgdfwj39czfiFmRKAd9z5Fcvs7SsoT5zZg2PYuqXt15muw",
  "key16": "pwfYSNV6boDPTbPkrt57N9amPXjcir5gg8nSq4pkaftUyAXG3oprrmMaSEt23N1cmbxJPdHgcPSt5EBWmEK6fdA",
  "key17": "49Q9ipEdNqPLL3NTiVk1D7SsjuqUxpV1xeqeb3vTQPkWAGPJFVqN5MNdwhnwXt5uWEavMNRTceM6YZeoBbsx3w6X",
  "key18": "2NGNrnrihrTmiGcJ5mN4JkJLnHMc4HjbngyGjaYUCbLpheQUF5buUGcMMwub7Z9bfcTUDXQmx8sQrXgRxD11p5Rv",
  "key19": "STZs1AfDamNXhmHWenWvokYXhnWsxgkbziaC6RbxjtV6JwGJK2H9z8mXp4TERnJNj8pDmFNaDhZvWaEAmZLiepD",
  "key20": "41QBdv7A2geDh1WJnrrwnPmotrQ8ufPAC8tozHfyg1zroxz4Nx6XtVhzFNM2Pae2s99cNHShxtdUHEYvvJ9vFdSj",
  "key21": "26Fw2Vy1NhjNiMuy3hibmE84Y7AyV8c3qj6A2wKtPFcu3FaBUVxbL4VgfR6f777mrNnmEydg1EMyxsHhD2e1JYhJ",
  "key22": "tiyvhyEZE4uuBrF5aYV8nFHF7ojhJi7V3w5uukwRKRHirtf7ky8dy5ZYZWktJP615K8pgmnxk1SPC4CS8jXmjkH",
  "key23": "4Y7UegkkAbqgBwCPjirXnxPy4pxZbMVF1acWkkxZRZMWa2Bg2UjGgWve8W3KiXRRZyd575GAs2Zd8aJ4xbox4rXP",
  "key24": "4BBmLfSoibwvsPdo6rnTFXjbJwKcE2kbXJeuK3os9djEUasb4mFWCG1sV3AS2PV3NULfHe4WL19jJYdgXYnJx3ZF",
  "key25": "4w84oCDMEz4bVSqhHicu7TdoDcdPvHKDvw2dDQWE73mFptdkVBxC9TQWTecP8sXn7A4UFswRzym1oKqQGcuYttGs",
  "key26": "Gzth1gBoZYaUtFdRLqfeigMcxw2z8JMDy8MqtahUWRLDBVwNzNgr38J13NaTRpxGrqNhsMvCe8GFZnzGuvVGHfH",
  "key27": "4JV3qMRrDCbzrmM7wckru1oXSkSiWgc5mws8Vua22PPj5qEPWNLnxyGRGh3FxHRBXyf2952FLbzJjFfm43pVNHTY",
  "key28": "4BWZFskpwDiG7PBUXrR4oAZaGpVEkjB32EWLhBBkqvKya5jpSxwZmbXSSntEnqnWD2DvLtSAaGGrf7tmtvm6xPvP"
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
