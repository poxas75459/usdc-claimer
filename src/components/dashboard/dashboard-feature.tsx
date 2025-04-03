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
    "5m91wqjK6DWsoNqYSvvsvnAo6skMy1pD1WpTuuzvFmqVT4xGGSeefWHK2d24MDNWTEmw8yW3odmCFLUcbfnJiZKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5wD6FnXU3PZUgBiegTWnreyst3MoJUjBue5VmGY68mn4S2MWm1Y3bMfaw8A2VjAxV1RQF7VSjHxpnmnxTA28eQ",
  "key1": "7vMQPZtFb9ct3Ns9QWJjtYRJT7d3hEFXTJFLQWZdVQfyo5hqyFCE1obvLFRqVJm57LYvzf48rqPyopbrxwtH7Ar",
  "key2": "3oL4a9MBUBAEQZh9uYkS7KaywfoyiT22a4ENAHYMAHoTQa5QAon6tDGNVdFsRcKK9Z92W1ry6nWyVajeXpgvgML4",
  "key3": "4FePkqQcyosExQ33wSGPc8NSJUTQGkKrNwjcLobDwDR2q5RKeKYXhJMSKURND567t2rSqSiMqRd7D2e5RRLdFD9M",
  "key4": "4pVzSPRSc2ECguxgUqzRiWVdawc2z9R8Rra6xvgvv5mcxSyzrV3jFtqJ8yVhjniAauv8J81ixMDfkx3PNmAkLd6Z",
  "key5": "45Yqv391rYPVSPxag48rnrALmu2VAfZkWVhnRcDNGbnfqHdt5khH7iTJbqvfum5S52aeTnfFVasUDWqLu6i276D4",
  "key6": "3TeorTmvrJ8DoaFXPYuSJLwg2WyeUeepqJgMgQMkiYD8owsdrqrEs8Rt88iq7tsFJnH9jvd4Vv8xKxe16ygLLx6F",
  "key7": "51bXPQzGmz4KuymPLyZu4DMLPbQfZmMBqXBfnuTZTN7sV9rUa37wRRrMEgRpkqKepBdqpSwBaztgNYMA866TXN88",
  "key8": "26X2xgv5SwvEf3Gn1XZPRb8croEtncP5CT2C3EYBpi16CxdGfVmQryvxji4r5jmLSNGfLAAJBo5zZWMNFfmbTH8N",
  "key9": "4ESgVfZYYmhmroDfqN3NdwECwyVXNeTUjpAUiHLdVExsZuEMAJpBtthBTcmqbUMhB5gDq2BS76BgpXts42Lk2NkS",
  "key10": "VgUG1Vs8rrDUbfQXjRnSAgX9nrbSgjZTfPS85oLrq7NiA83Q6ms3NZPTmDRwg28QvP3fHEhyptNpkoT2cnpBjVt",
  "key11": "3z59QyTruiCayzKVbK1rFbXbp1kwaXytWaEjjdgj7LGnn6qhBPefGmGPex56NMCEpNFFYq2YJtfTH9bBMKZLbYZ6",
  "key12": "2fGmxm5wgYPpfPeThugJm2ce9nQDmvyAmBr7L3yGr7jJyoFqw1J8KBJyNbDrfTRZ21nyYVY8kFYprgdK8oCHzUJ2",
  "key13": "2GYkz7S4QZCBU1jkUpZJLhXbiaPq3MCCLHFy7yjvyxw1iTbGdxNpJP1R64P1V4jkBRCbz6nejJ4NUsEahr7YYdKg",
  "key14": "39gjNbC6UPmg5v79iRxfrdWF23zsvZxs5jvuRL2eBp8nhGrP24CWFNQpkhVRJ9WeBn3ppE53PxUZH61ec84kMnaF",
  "key15": "2HCqhKCkvM8SKFMg4jCwx3vi1fRLBAV1EEqSueMS9STUVEBbeyL8Gss69nZjPW8YECgdWXHC4vUykHQrPLMkpdgb",
  "key16": "5ksnZUo3xYrxmJvPJvErttEohyCpkrEoCvS7k9MaCLPb8RSwFXDQZyEXbxjRzga3GCeyJJzFuG9kFmkxUTpnT5A6",
  "key17": "22z9hPXx21fY5rQKYFXCM8fv5pJdqFMUovYY5KNm82k3q4ndaBQzN4SQzEre9ZbbmG4xzugkmuC1gTALYzNevHDE",
  "key18": "5vtmXVqLCyXVkAHWLYqvcuLteDxENjZa2TWMdmKYfQiERnDCz9Ks9JtuvGNt2UNoUYcXuxL4FR4DtQV4HauF6oM4",
  "key19": "3cmKMntKS9WjqNF21FiYiXhKKXP14XsNLWr5JSSoRZJ4dzvuoZmvoDvEr28hi5mN7wiuGMb1KEuNnVzj2XvCdTuR",
  "key20": "hLe6PaLv2wXFpRJNM7UraiaLV2HH7tXUjGJjkHgzG1nVnnGQcB1gkedwfVCEmim1TaabKkaze32JwZekKjAmxiP",
  "key21": "4PtAbXX629wMYRQsXP9zDmG7ZA9gNFc2yQbTesbYrZFfBrGpiHoS8XrvidL4eDkHRsp6gJ4XiCAG5gWzx4Jve1KM",
  "key22": "2pmaThjZhFMsiFHjC9JeaznCnPT3AuDhSdPhLBnPvBBeZCViRHX1xEjCpUhGpH8vpkwMQhYYXwVftMBLByrNXQSS",
  "key23": "2fRkLYRaP1BNQEqzyzX6LvwcY9fjndefFoxDFaLB89XCreMub4hLLRENkWnayWwCvCC3NfFu2eKLPg1yQENWhpNE",
  "key24": "5tGPCXu4s5wpTLh3gEWi5tXBqA6knj6vmw15KfG3STetVDvfuonrGtUYJsJ5tYG7btr4V8a5sbzbLtxdDca4rHeM",
  "key25": "2FidHTMoAKME4WVKpEvX15DUoK4pJfw53xoUSd7wv986oEzWXfDgMTK85RHyHkg1of9SrTiLEfehfmj4ku6zFm9Q",
  "key26": "5vkVRYVgzCrb2AqkVQGSedcdTnVGZQngHJ2qukKNniMdLzudeCuDjtotX45pWjGmsuosVvVgULa39hLRANM5VpYa",
  "key27": "2oGPyHxdpRvAWhrJPowCuBmKBEpC8Vt1XmdXarzThEML64AeZyRtgbx5hReFF5j7AXu14ZfEaMdB22YYMp3zuY7P",
  "key28": "5tcUHm56h9zRNzsCq1zYvcurxo9sjXysa4FS9X9vKrnRkFiPjsNRvHEarkZyZ7cZfiwRg6ZKmeMoxhR6r4rehJbL",
  "key29": "4yweTK9JoN1QE57iuJTqv42eSkSSQcsJrzpz77APXL6H1CP31m1AnLhA2ypHAFeVAeF9oHQ5toN6djUV9ygcCFww",
  "key30": "4FSmpdznA9tfYpNP93PbX7FayyvFWEjNJGN5At78nm85x8F92w8oRqoaofQoSqovHcH1hjMvac518M9PFbzQrCYE",
  "key31": "3tkR2Jo1WinprCZXP4hWtG1GfTFvu6sT7uYWJNHqnQC1FeQLstrT883n4Q9jzVHmf3YncMwxmdBUuoJDbLZGpb4w",
  "key32": "UzSznoCDv93yNpodHDphNxeTkvntZa64K7SxUJcHBK5HPSdZ188ztYFForBGs5Z4vuKr7cYsj9sugDy2ct2MAqV"
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
