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
    "5Xw1mfjRh5fVxSbg2toxtR4wirjRFWowxcg4vanbj73UpXL1x8EY5TVTGwvd92WYAZZKgtcBYpeWTL6egcci57mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57v8Q3gBaaA79yrpi7Rug7MVgxvyNvKfRUz9XMXZZynAxp6vc6DXTa7CjnYHpcE5wcMKijaBZeyFj95kPkQEaqz7",
  "key1": "5Z3aJa6drHmKRVj2S17mqK3eR1zK5an7ma3WjGxMdBgxnsUt8F6NBobKPkiNuXLqHUAzK6FzwNr1NCk9Ak8TqzAn",
  "key2": "5PPpmjtqNkknAeMmhkzednwxdEz4h4TGRd7i2mvoGJ2NQeGFviEhapxaVhDg14XmiZ1BDhraRSL2vSiYMZZsoj3s",
  "key3": "2zFoRZf2t67n2gz6pGPJyTwA8pXoVRG3SEeUsF2F941nr1y1Bh2iqeYU5wafbYZbPwmzVYE3R6GKJLvJom8s49AD",
  "key4": "2Sx7pQZV54ubf4U1LcD83g1C4EGq41moJCpHkBzA9Eh41kuvhfmHXBnxHfjARbXwkZrxe4FSq8yTmLUjQ6dxkamG",
  "key5": "666VArMiYpjBX9Qc19j7hoVkbycfoTWamx1PuM1dtrgynjLWxwWt4CXQ6KvUdnkmRGs7sWamfuykagzLppKD8WmZ",
  "key6": "44b1LTmUQpzwGmBQPiwnB6jm5mgQzKCiAPSwBqfV5rC8xCEFCj6nnvdSLykfRsbtZhuzSD6UjD2JxYi1cqoqigzV",
  "key7": "2oHcHmAV2dszKeYy8VATQiosCE4FaHkSMuSLipsaatwK2bJQqArsNA68sd6c6iZ23RChKsdUPRndicq5qoLfxxzx",
  "key8": "4z4We3gjAXKeTYKS1CsiLsE2HA38dtB8TN1mABwWV9KpdCo3dz3Vf5WqGXT7ZsQF4eiVMfgu1xHrQ5pxxhmU1FmP",
  "key9": "iqpgkZokVJjKQakAxag9kBVvWBeGatxQ67Wc1AoPwdRGcUe8qjXv3E3it6XwcsUui7zz2ULHSvvFnmzUGV2q45c",
  "key10": "2YdZmoMCTijCbmesimAPA9pDcd6ecjUnEGzTZcGtmP2nck65sCfTqgCLbvtD3XhsaLguptRpia2haKu9xQgEJ34E",
  "key11": "2poxB6GKqdHdaG3KoPQzRFah3fnvyspK9t4jFXVyvDXDVVzt7bmt7pRt8Qeu3ccTuYRF76PaYo8QTcCpzQzoGCT5",
  "key12": "3JQQyRh5QJNYhVrp83YJn54bkcHr4enAZGAfM2UKixkWG9q3n2C37fQnTVwivMBYbHnw62StdvXEYVZGLbz5iSV2",
  "key13": "6V3ZP1GkXLrD7mguUnYKtXDBfxKmB2dEA5QBHN2y6sxBiLe37pJbkfRxAvDPu7uKgqoSux2g6Sdpa5SUttT15Dn",
  "key14": "2ad5UTxgsUnmaiecaNdg6yjDiL7pdtsL9a1kNNms86DH5j1we2bN86wCXvCoWXAM3A2iuycJcyFzPhLf2xzQag7C",
  "key15": "4QY64QM1k5ieFcumqnGaqnSNp11yket9D7vKJmxF6mLcDQt566ZpsMBwoDEEJNkZuY3VZHYotADMuoAwfXH2GkPN",
  "key16": "siFPejhh66FSz9v9RC6ynw6xXArLXiBXW2GaxSuTMgJGWrgY4FgowLVADwtXmXQ7W43R7GLDVMQHyyLjexFtEKp",
  "key17": "2iskTu4pcoXfHcL2jftR8jy61uFZM6AW86oyDsJS1WxcpJkGMuGvN8L3xFvZN1kqrpDv9LrwwAFvfMWo5MZUQiNg",
  "key18": "5oVmZ51FionyrSWdPwi7wuWnhsvEdcKgLzwPthvSJ6gT2MhTyjckdFqU5t8idVQKitXGuGEPUy2imJPLc5beq2se",
  "key19": "5pjTudrWR6mL1dvTqhEaB8R93FpSrQg6MfmiVjFWtiMmQYEytfr97eVXzeRk1ThHUpRnFiePKndRG1vqhkhc8Zj1",
  "key20": "W54xUZBE2xWVq1qwq6ePVBAyYujZxKwrGwFuFidu9wgVCigpm9irJQDTcCiMoJw5nMMcALRU7hUu1JBvepNDT7q",
  "key21": "PAGVWjgfvBgtQXQA2NLrwCo5MsGi8kXCdsrMKcUtE8zPvnS7gehxizTdfNdKSKKA91kAhHX23wGsXyhg8wjKGx2",
  "key22": "3Fsjyq4V4PXymCPtj6tPb3bEPp3oz4RHs8YDXUGcKQ7u3WLJEmgPTEhbFpfHTvAo6fT7V7163SeCnm3yWVDSeWhW",
  "key23": "5QYQfd3YnjjkqLB9LkCZRQ4hmTAfJHS6sEuyyHc7yh5WtCdA2bFbrSw1D5GneRJchVYboT2ehKVurH7oSYQ3zqm",
  "key24": "4Jae7x4bFynCUQ4VdzHGcEDNwHjiaZdV4FinLomu6gjhkzPAaRyB475H5wMx3m5dDcUwp2wtf2hC9eKhFvWx4VR4",
  "key25": "TFDMYqmcRQKHU9JpYXz3xCr7cQzt8bFcT6gGTFCHcmA6dqtepTgRgnJumv8Ad6jgqyfAgr1dDNjfCb9bZLyNesL",
  "key26": "2CAZs3NJFM84zH3JFXXVvSfSz9xVZ7EiWFtzxG9QeE2Xone5MkY7YA75oXxrUCHTyJ2VBxuRDgRCSde59TPZ45v3",
  "key27": "2RxsQV6Tg9GYexBQHQMLQN5ucuh4zhmAcZyoJhsQqFozTQtJaABm1zM6bhZddPwx3vuPQYP5kVfTrxUjP5cEi11u",
  "key28": "2cobH1FLukkA8ChjPSRNX7tQSLYuFZVyhqAoVQscFqhJc7Mpgidw96w9h47jiHJ5QuRsZ858erzTA1RA4aTTnjyu"
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
