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
    "HRZg6qhSGjFupzVnUGW3F1Mf7RjkqBcGvMjseJPkKjJNfsjfiLdeo6JL4JVGsh7mfZvCGSYgzCrqprHDcUkE2ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UV6eojWAPjAYNMDQrprojAcvnpYWqEwH5kLgudHwiodeJANmEsQ3yAb4JfVfkF4vidqQ5MGrr1oNZoW4QTiRZ6F",
  "key1": "sVK9CyfcSwsKA63KTdpR2EEk5sTia9Ej4geb7xifjoXCoVMn1yjUqWWTTiXRLdQirpLVbNt7utprPWjDizTjB83",
  "key2": "621EnpRfivej3qcoU1jhDnfXYXvYCSuGnzFmMeS7mt4us8R3v6KNUdcY7E3N4aXxXMAES2rC7bpMF73unBAyEwpc",
  "key3": "4HQDGumiV3Lv9qMLTCjc8Y5z1nSjXetx8t4tR1yEtFtyUk6UjMkn8SncAPvF4NW2bvDi4qZgC9nW3Wgck2XqBmsm",
  "key4": "4SEE7FtK8iqLQPveDCNCuwyUVPCughyp8H69XKV17cLjvgdKyvyf16JYctLfLTvxBhj9DgLKwLnTKr4YVZFteP7b",
  "key5": "4uAY7J5jAviXLohk6AtyoYMq4zbq4WXjPvi7APXFU1L8jH9qdFbE6Mh8gbJqEVXHVxiBY4EQJJWSBwZBqNLC2PYj",
  "key6": "EgPFBmfTniAJEV1nowXyqT12vkTTujoqQW8DvoY1U5T1tzyCjHDMK2cidUGpNd84QJG4UYzL594cgiwP2fH3cRU",
  "key7": "31jCxADHECN42oYTUUjDiNXmXncrZdR4i2koq2dwYfkyaaS8YjBxuYftrk2C1TJ2ypSLv4FYsvUfje5xfmXCg5o1",
  "key8": "3GiNUhoXXmMnLftGWnnWqAVrWzoSVvUvBP3FzfRhi8hvPrABPseUZzDfBPy2hAFSEkhSRzLjZP9tTdGBkStMf6EK",
  "key9": "615GGAsuP63FHBvLGk3UYUQSNtPT94GtP6HMue4hyBhkirBUaJ2ed3vhLmQR2TnAVM7TmwohsK4TX8weVv16F6op",
  "key10": "2wWJXFAAZriiSuSqq5NPx54RJDk7gh7sdNcow5VDGW6gmk2GGm1mtdKwvueRAV8u8gUX4o4SqfnCuZhraRNVQdsn",
  "key11": "eRYGqQrMMw6g4CZWYpNJhcW6gtN29vSMQHV6K7cmNYALyu26N9jUsqueZjAfUHsbrPShh8SYKiKqo9chAB8zybb",
  "key12": "2MbsywphKEpAsMKNGQyjxCV4tSnQNmY6a1QKmyKW4xWBihVkRK8SDNvJYMcvVLj3APDFyF2mCL2sgcy7VLRQtFh9",
  "key13": "41La9ZnGN1vKYTPnwWgvQdQ5emGPtxVCsa73B8spVjK9SK9Q8KYuva9Gpg72Je3FEp2K5ZmAF1Vh3jtZBKT8goq5",
  "key14": "FbyfKTu7PeX7gWh36kTLMT4dQ28Djd6u89rfaUkjwGME6RwowAzucjXX1K75Xr4hiCFLqQNxNeRgh5tzzGwzRrX",
  "key15": "39GbfFzjcHkeVTA1PDdmQWwFCBogUMojcZud9sRbJbe2vi2Tp8hvhnWweZzQwykbWjN1ZhpFzEBx2wAdu1mkh7Pe",
  "key16": "5hkxXLj5xULBn7psZAhsjFvxYY2mowfNQeo9JPTn5fZ75MFRfY6HcRcW2zAdzKtGt9wP8PB1M3YWt7hJ2JR2m5Uk",
  "key17": "2QvdU7cGm9gg7JZJEysQjvb8w5tVmUktEL1tsbr7LV3tK5dy2STLua2ZrjmMr9sfn4X3FLgKyhb9rMfmm9WVBdhS",
  "key18": "4CDuUBShSddfUBMh2pQA7VWLfd3t9AeNDTjYrMSAxxRDnJNJXV6skaztvctNYZfyUTXZo7rzG3X7zYSVvRtMJD2z",
  "key19": "4pBNBrTMfKJUXaPvrKUAwSNjgqXt4mBFr3D5VEyAmEAxhpYGq3TY988Vopwji3xSKxgkVze7u7XjZrSXWJE8Yedb",
  "key20": "5EPKJfeyULHgcoumxM9U7N874HCNVQVjyooZe4yPGBnZiQGwCpoDTzuh8L34yNRrqhVppWX33Tmyk6pjDDJC45vk",
  "key21": "4u6z74EgWx4qcmdPpk2u549id627RfAqQsxWTxJ1S7zo21ZbqbM73RDqXetMgpJKmNSYp5Vo9RENxc4Bxfsq7k4x",
  "key22": "22kYTja2sB3UMfEWivo8jst8r5aHDHmpvWxERdnGdXXVeD2qFR4fdFRGJZoQ3iJCiw1aXJMmMu9cKSMha1ShiaFC",
  "key23": "2PBn1EHW7qw6UCG5XQitme3hWsWDTc46mLEdd78dgoxg92JCNT5vAkrS2NyupoaMFbuDYbCmTXemzAm7HtjwiKQg",
  "key24": "L14fWArhGU7Yd38ussZJdtPJeLBEA4QeoZhBi68bNLWG39p36p5AGJiw61m1ZU5KyEmnRaVWkFgt9vydhnJ6CEu",
  "key25": "3u8qMJSjuGHaRcmSgHughrQdsFEvVXNsBQrhqSiyspHbEbjZhR5YFC3RHoR2fwfXKB4gET2AW6iYh7YuU9v1sMx3",
  "key26": "4iEsyfM5rh3LkA9Uc1fXkGKKMVwZa9HMds8MRV8Vhy2pNyq5g6MSaCdKiNdxj7493eUX6yLmCPMd8PccA2Eo51dH",
  "key27": "5iS3E8ffK4Kgwv2RfmADtiHY3K4jHwPmsrxXJ7PCFdReCjtCqsw1b9ZTppmhwpm6tFrTtmMrhisdQ3gPLznUA8Gf",
  "key28": "3NKKFEDJ59QgY8Yx24kEC3hjwoXJUK4uJj7TVRL2dZnsxN9TsQD4PDT69BSFkMWM7XYSqbzFt2qZeh2wjG3dxQ91"
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
