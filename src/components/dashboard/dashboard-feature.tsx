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
    "4DfrEEA3qZ7wDB4YJArkYt6MpcceFxMoqaYwit2Gyq5d7uEyPum7o744aopfZ9dHRHmpUYpve6Zg7S5fASYTnAhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jY1gHP8Bp1DaEXr67GyriVmGdTyuKVosbMWbQWThcz6bh7LCu3fmjcYEgnpFNE42xiJGTkivm5hT5iSaSDCBofx",
  "key1": "3wJs9rDZ3a4AWN7qpHoUb2c2rf8uPswLTczdKPs8WW7xqJatC3nQTTRXR5LERPVFJDsLYjc8LtkNswtvpayiPTCc",
  "key2": "2jqfHTR9a2d9GjbpgpcdHxUCWNiMw1Jebgegng7y15oiWKuLs51Hsyx7753zX435JNRzEzVDndxQX9UeV5XzLywV",
  "key3": "2uKXVpt3JMKMaNFBRD6pAWWbiEaVm8XbgoY3LqPhBNuzZuxLrWXXdZC1SA4FP8r4vGwktVS5gDDsWPy5at7oy69d",
  "key4": "5pvnqomcGm5X16giKdahxU7iCaWP1uHQmggzoB2jnVbSomWuuFWJAXeWGagjtFn7ThSzxNmaYrjU4KqzUorkAeLY",
  "key5": "3XQ5fKrAPi63EdxrrDV4HwXwYANs2gZX8J5ij14WJzWjp7ewqC7U8akUCjLPTqx4foX9xbUkHTuwGEBYCL8wmyn3",
  "key6": "4R396JVrVgAHF6M2AmNqumS2RFvWmvDaP6W1fTB8b4VVjCbbJroCHiZbqfDv9vpCF9uNrC5GdKV5ssaBPXB8xLiP",
  "key7": "44DAL9y15j3h8wzH3di64A8AywEEKSWj4J2qmVKhQFEzEk7sk1wqvBcZgRKXYgXXobkiwLngSE9pLmtfR3tjxRVg",
  "key8": "3G7Ts861KDPdMJXdPPJn99k2vnFLfstWeDk7gYKVwfLJw6ChqEZa512mfu49CcuCYbWyoviweWWLPQFD3bsD4JzN",
  "key9": "47iCY6d1HSVUWA6FEYtLTYiYiR4zrVM7kYyzhmxDU9B6FT7E9xtMs1R2U7mjTvKWmqrs3HP1YhCEaD1jFWXFQDX3",
  "key10": "516UeAUkgrFYsphMmYxk9E41FYxmHiDXRvr1snE9LH7qSPm9jKpbSBn7XihsNnDEyMjUqCkhWxj4FBBgBZM6Eb3o",
  "key11": "5y1gGhuNQqseJjjNSrLrgnzz3MZfeEJPhZGh71TpARpMkfS1Ctb1poKruCrrfDEqdCZQBpe2L1fSRjteQeomy2Wq",
  "key12": "j3SEemMRVKmnZTQnTXJjDXGcZzseCMbKQ6uYzEcJ56KpfbBJRXVkhjCMSt42Pw9GURnzzYLK6Z8WFZQsvsnFW85",
  "key13": "4H7Ko49JXumEqHRTxSWSH7wPdfeSJghsn9dZEdyy3ub23nAWqBfn4s3Mh91BFZ41ToKzrz4pzgVPBMmySjAq4DuG",
  "key14": "28nPaMp6hzWiBVcLkuGQ4r3fwVLygAFpUkHrnH1xDy9HqsFzaAt1sCeiYhs1SZtg4yTTHsYz3o45p3KAMChRVojZ",
  "key15": "5SWoGCwwysdj9ze5mxGgKCHsko6Pkc5bUTSAjN9E5hvQDnxncCBRMoCTirWzezEDxRwDr1pXsXzGApLgWg1qPVUV",
  "key16": "5jZ111mQniJBGWUqTonSRGQiVGLzyhEuwuw8XE1dip5sJU84gsbJmeB3rohQQgVEL7y9j1KQiY2juyzf4qLQVecs",
  "key17": "3qUTvxeWutbQvXyHLBx4Z6q7UQwAxTV5Vhejkgk9oX5k1MwfTJem2uyyzy2TEmAzPsJj7mE9vcWA166NWeevnM38",
  "key18": "4yF1H3iqjsp7rd75GUFnHXWKBRdYwaDsqgZpk8bMyKimFSJgiLZaACr4jDWBvxmLLNrWPSuP3z8LNDgfngACsuit",
  "key19": "4RPaNkpYoQuEMWvJx7dpaRENSaeTEfg2G737ZYzhP6129SqvEQLQSJ8Ly4CRPnF7efiLnkLQ5S5jq3W1t3NAXXfx",
  "key20": "znxLCBrNP2FzjaoGgngKue9G2mSwUJ4tKtYgWSzRcMCW4pFYJ1ZdQKGcXScehnexBbPRtFPs43R9c5kJchPx9gT",
  "key21": "5asi15apmTkeWNsjTg5WQNWzWUxVmVjxJrvY8cyGvxqjvH74VuuGhkwEt4puwFaA4NSYhNbGNChi293XGaiCKDdR",
  "key22": "2UMTnDJLXjWKVsvr31XhTYkCL675PpDCPN4oGUPM9wg6EKoY3b76CT7K4mmEgvddPbrfsspKRZygKiE7NRYKqVZ2",
  "key23": "2yMDNdBS1nQR6WygU6KSvqY93TCqU3SDiB2BsSRzrNvcLPBJKEwLNAS6gADtsDVJjU842vNEDcoWbzxwymVuBhuT",
  "key24": "45AzjPv8kTzrgmWsyUEBwH5qCpNsXYjSGqpy9RTpA42M53WjTbT8jj3VtsMSZSKhaYjnytZhkp99PrWd6dhpuLtv",
  "key25": "3b64bnnxCspoMAGTBUv5itqCgDUJr1djaGTq9s9CA7DeRdJDExdKHeVjZPejAYVGMz9aPPW4Q4DkY7M3CvJ7a7Sn",
  "key26": "3etP4Er7Ftozavd5oUDpd8btspt8EUdh6jAVDt12i9pmNV1CPTrc7vVbHtwvcKoLrGjGYgfNYaZLHJv5ZMkiXZk1",
  "key27": "5ipQFjr4fX8s5KzhLH1rL3ityPoPvzqTaaNn8Z1q2SqbX2av39BFnWzD1mxfJamNhhLsko9EuCRV9wuKEw8G6YAf",
  "key28": "5cTGq3K6LTtXSnaf499pVbkosvRWxm1VyE2k3LMHG4s2yVmembofUtGKWed5qJJh2Fj97wYNVjmS3RuxadcHVuzr",
  "key29": "kD5FCfCP6XdqgqiX26fivBr7JnL3Nig4jFfVVNH2mtaj8gQZKG1Fxd2nRfxFSeMPi7ioVoRW7kMRhVX2eByTM6t"
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
