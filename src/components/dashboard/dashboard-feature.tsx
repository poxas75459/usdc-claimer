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
    "oeV4YaUyQWkDXj9WGQ4Ui2v24EgX5NBzfkCXBnezZaPmxUgBFwykdVXD3yY1dws47A6HQFAH7Ax4SidpfWF2qgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Np3zgDReHyVehncC7skf11iHYokKPUg9EnUp8FTyWoeDs3qvSC85E6UFKeqLW83iQSkXXTbzbkbmuRqUCCqCtbS",
  "key1": "8GsbSWkSf7mFc9oYbVAhDwCeewwXuiT4V3D7Aco4CYh1Lt2SjeeiWYNsev27YiY141JwbhchhDFuLHui9TbdJt4",
  "key2": "JRKHK313jKsi2hz5tsNv43u691qbEZ1qRsa1Wo2SHH3QVJ4giw7GcbuDgasWUKCFzyh76MG1XB1b16HtF8EwW7g",
  "key3": "2f1zdvZEGMjMz6ZeNEcBVXbzXNRvkTRD9GE11Pp2LiMjURVezQTqzunL9hdoF28dEmc7RsB2WvpNQJgXFi4NLQPd",
  "key4": "23r9ytyB1HtXabpmF6AQVnDhuXkF9so87Lr1rQT87vzddNcLQQ6YrtLUrGiY536g6dNchBiCeJp43De3uZgcbhzU",
  "key5": "4guRFGjtrH73hG8b8C7Bpqq8pYQQSGRtALg2ps6eHeqfjK1PhUkYfSrgoVkbM7oi3KR2SsixTjRUSJWdFecc5vz8",
  "key6": "51tVvuT1oQX7F2536uCT8Bf8TH7E8Pv9nnqfWbwziCCKqoeiBSAopfvVEbfBRJn88qvMMVAuvkqQb4DsS39yTeoa",
  "key7": "Mran2MDLkZMFLJQ72qtF9kpQFxSMJFGPFy5XgVEgMKnMmdfWKuzAPPVxZvsE7FWDnVpPob4LZrEU5Bg6HQkPY1e",
  "key8": "2irzHYrwsg6MkRLatEfpM7Pf4vjx9BQPwAnq6i1tbpCXGP72YoRgYno8nMvgk8Z8Utm72yY3jV9Nm19MedbRWGtu",
  "key9": "5L6KBkApuN27TGknSygpSzHD4zAPKSfJ6AvgdH3zqaPEBFeK3w1iartqp5GvuSsV7tqyZvM3gDzUdJoPVUzBeC1Y",
  "key10": "4MjR69SeDFyLC3UF3BT4P4PAfrKJWhYiS4144wZNNnmhiJeCxxi1H5sKAztski4D5WJr7fkToEJ9rX978JLJnoXN",
  "key11": "GUQkZm6yMwERhJq7DiVyCx8vUY1fjTNiir6fGfWB9FBDKyMimWy6gKhts59jgbm6NxZxZcvGvVkB2N27pWFqb7s",
  "key12": "Hx7E7nkzHodpEy95WUFFsMppwrH2xGMEHeFqwqyjBeFHm2YC7LjfTDEsNQ52u6coCNHBGzaQxN9VDiy58ttRquk",
  "key13": "4KchpVT67bbAzHZNB6Te2KvgUc8gruzFPMmckx7ZrioFc9jNjKkSCF84iUbzh7kCWteiAZ39ho7uswc4U76wepJn",
  "key14": "5LmwuCn7uE2coaBonDHbbgdmduAUCs6EBACwbxSSfznyrQySvitBHt9Lj1bSYNrapiCvpDFx5KUD3nK7ZjS168We",
  "key15": "33stddyWNDYzNqtTD2jwXHvo7GN5ioAp4mKGh6WP4425boeefpE9K4nk2NknzJDn6eWWut825VTKRBNv7nQGAokM",
  "key16": "2PRTAv1xJG7RCKU1UPiNX2e2C45946vFLUHQjjLGULY7HiSA1SwjVJpRGTw381HGHyTKP7JxfXkNDFWJGzcx75f",
  "key17": "2oEM7ZMA5nhunh9FGmFSGfUKZovaoMx2qGz6VRRHikQVMSQrddYCs2KAihUiqf6Q9KxztnLdqjgo9PWk3iZ8x1xG",
  "key18": "4NmHqS9S6k4DiZAnh4phQ9KeHW1rtoiSQwURaDr3MBRijieW9xu1zTmerbwJzSkWzexKbGsoXZ4GNAarRxaN29xn",
  "key19": "5CJNmC8LT2LoB3WJ769wiSi6heZVDzrx5MSofCNBexsf62eej17SoxfFQ38BN1pwjpsysjaNBZXEGF7yFK85NJyR",
  "key20": "cktNHaKCsNBXQGHdnPgouJMAHf5nQ943dUciLcrWYfuVotd6FHbZnW9r8MtGHNfTbjitsZ1uTfE9HKRWoDorwyq",
  "key21": "61c5jrvumgUJxRPxLnZYL5Stb1yB9BVDW7qgaxjjVR6SEB2vS991BfMwKXJGbo54gCdgtJTYV2YwxREQqBkqaL9k",
  "key22": "4a67HGDE9xrLQbRzwXJhgmqorHyEKPF4hEp3JmjEydhKxretpB6odWygbVKNYTLdqNDBYSr3NrAjqCuwySGeZ7i4",
  "key23": "5roaJxfVh8wJ3QyaJyfC7bgHjXS5VYd94nKQmbnx8TSq9UgKrLwa2F1hzZm2UopWPYuZfWxgdwYaYXuuucB4adW6",
  "key24": "2cFYx5RqLQ62YbSpT5jAMCbPvsLvMSgnCJXyTHVaZCSrobeWPMvLtAtud31rsKMxFisfGJCKqDS2QoTL9kpPjBrt",
  "key25": "8SfRhcxCRUaF5caTh7EuxxvXGXYDHaJQ9UkaDZzXiZNoLe64S6LoWRhs8CQT7ncP6uixL4GmTEx7GCR5SuJT5Wn",
  "key26": "2ftuuq6p11mi1yv2a19PLZHjexhDYMRtypogxwm1HDik7GvqBdHNb8KERSgpr2XWmYmLuxfbAwxqGr8ZVJoDuKoD",
  "key27": "4k6LSt1dzvVAKasG4D23vHf3FGRi7Fc44Qkw4EzLZzw8TBF1Fqtf2SGunZ9oJzGzmhLdJKKj2knL5Jq6MBX9iKS4",
  "key28": "5V9GvPtZLFzfmspMSYp5dajpX1eWVBMGZCfHoEka3arSKN2TZ2U3ZAXZc4FE9CeyovHdh1yj578SV2AgzVhz8DZN",
  "key29": "4qic6uYT8S9nSDgyDYv2V2ycrgnYkRLMSizMki1q6VdLFrdsw6hZfEuD46nDmzNiskMLbcwTWavzZojRiyznoewa",
  "key30": "5FRC3WHoobNc6yBeEPXaKNktJW29g9W86xPZoxJoRCAfFyEJZqhiKjP7CQqMVBpzAAWUm5C7vzx3o3xri4ME79nj",
  "key31": "3qkoVnYegTKn7SHrwC4NNjUpWW98Kbrm8bp4Y6XsqcoWKhkZr975SEoJ7etmk6JdRP2XzGwn6jFQnuihMbMrTcv8",
  "key32": "3uKovvpGnhSHtdhNpefU8wM5ptZph3453gTVZLXXJbeaCbNJgxpQTdV18F9uReFvBqv8EG6Wa4X8DFESWt52FfRM"
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
