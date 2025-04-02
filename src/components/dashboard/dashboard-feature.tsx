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
    "4uothcdsrqRGqUvXSpRu2KWUM2eMQkGBDWYqoCf1NTEoLt89u3W65bFPChbUauu56US1jKV9imu1qU31XPLXqLo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21thZ7MEYFGKmmieAotNtWNa89E4VwhDV5LzkHjRqrZzAWsNtw98cEQi8rjLbPFEkAxckfCPWaJmPaM2ggXwv7rn",
  "key1": "4ARKH4k3HqJqpXf8wLztdZrqxvBjQjxXvmkuTHLhUhYxVAd1E2rQmpGN7zDHfFfi85ncN7PofWYUb741d8oLVS1i",
  "key2": "5siXRhX2Fp728X9e25YbDnxAArEr51dHFtfcdyrtXyBjjZzot6oTnuqotnWMWJyBbtdnsbwtUW1KBTX8fV7txXBu",
  "key3": "4AvY6zD3qyiJ39VA5boMMRhgwg9HgfBPcVWUiQ7SKWaxznCYz5QTjf12zz5muxYKJYSu5rRTbDxiKsxQQcoVcVH8",
  "key4": "rcvaK6mc8AQwiyoxDixBV7wYYV3PMNuKor2RXdKAtAaeCUk8pd7KV2TQ6ynnanh8g9aYi2hcTNFH2stJhJJVTSX",
  "key5": "412dwJQJqFcKXVcn2F8a7C4JHUmAkKJibCF3xZMZceyqLGAVwT4FTCvL3e8GfEWT7G1FYnwZLRufZi2w6svC6Ax4",
  "key6": "3GijMsM4w7G3v1FW4PaFrgmhwx4DKbWCYwcfgSQifaX5sWdWN8o1uUArsfvVcZhTBveca62UzxptpNKebn18Thd",
  "key7": "5PrRteaDm1CZ9LhsTj4yR7fqJG6h2wr8T6LptwBAvEiR6idZGFKcptcmP8KNxXqzme1QDUsiT1yANScYkzfJth2h",
  "key8": "3bKadgisb1BkpsR9czZ4BMcQVjoaSdSc5rM2tJYjeEHsLVLdeL3pWih7YyikbjYQRgEpniq9VNEBThgJkfYrEw7R",
  "key9": "o1x6JZf1cr7HZwktMAqtPEjk6AJv6WjokaHia1yExYsX6zZVAfNt4cBntrKbekTrnX856Uo67t31nWi8xmi5D7S",
  "key10": "5Aphcx1piZhCUDSLdQeJbuq9z2wePd3u1TPUMJUVXAqceiJPsx3Rm2YxgUHjUwqktWkhNaTwbFVt8DXyXCQjKmg2",
  "key11": "4Uryccif2vq2v3xhsd8YF6y7VgpWgV6YqSjiYTLQDQ4RcZJ3UWrTyqhe3qWBmiEjTcVkCyK9neZodTWXd62PJvTV",
  "key12": "3gbuaCAHXae54Vyo64mxUPJNFi6D3wqu438TFTHEDQXT2Tm51hh6zcdKTKTHrq2KSwN3JHo7frQRmMurRJ6zST72",
  "key13": "2GkpXW7upepUzXAwEUWKL1xT9RwFcawP1ZEGY8xRine7T7kPwbU7E1JuymBRmYdKmND8fnApDCMRgh2i5N8sPXEC",
  "key14": "5usxNg2vcAt6fWejnHhaJbeyHoLaS7ykcoTSLe5h5Pq6i8E3QK4gxjtNEU7Y7w3sFp6tAhLV49ANsFeKkGTxaP7x",
  "key15": "5px7E1sqhNo9euAcAMC7nPffPGgkDbcpRbgwrNQ2k5Nx6H91Q7AsddLvBNxv42vth3mwFtDcwYrxQWPBNpQ643fe",
  "key16": "2masD2VueTqhR9vbuxayUwEyaEgwnUEd7AdSh1a7GNVEBpH3dbQLCNaVQQRdoiEohyEzQiMz623mEXL7uU3YKtdF",
  "key17": "3UW2xmGGhkyp1XjXiR65nidygCjdGLds84SmdaPFsdEfsWsMrjtzUipaECvQxCfxcGxVhtsZEcRe66ektUUzANsR",
  "key18": "66PCzCySQd7VFUz7nEB9i8rXTzRhNVqrZ4Jej4Vxz3kjH4ZpUwXSjwxnFACWtM1PUqjBi7Ywj6qE1wvUybMNnxya",
  "key19": "wVdABFaSyVk7uwL32NidSXXw7GgedViPY8JnnecqyXTSVP55XyXZuiiKd7gDiCjzXcYxvvKwtQh9Zzn1MPxz8qX",
  "key20": "Hqbxfqv6yhQP48KGH5K9jXwHLZzRZBmST2U4TRcyc4BPxtVKqcceeuqxhfEDKXwM7wnVdYiwnzbHrtmk5ZFWJvT",
  "key21": "2zQRe9WhM9Hswn9fJo7tgZ3dQbb7VFyCebUmGNUcrALG7d8xsLZpUXAKZGawQjzPmq11gJB71WF4ibLdxQYWE7YF",
  "key22": "QRvGybCyXiHBrCiGdBDgcaoJ9cAFDTTWtnzNyvo3Vp1VwPw1C6UfiJJbCo8y8voeSxwhrzWz1tyqmxnDp4LB8GN",
  "key23": "3VEVeQYqsA3EbPS8Q3WCAKPv4m7gnc4xA1i2ogx1HEu21do9XYGE5TmgJbZmfYS8veGJ88H48f8JF4dzDo1QhRMc",
  "key24": "3VcN8kZgAePz8uJ15X6U4r1YWFr8tzB83BvWwEWXWwU8ocr2VVkCas9V9fw64Ay9TvRrJrcyy187Fytt1rw1FesP"
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
