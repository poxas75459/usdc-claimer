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
    "86h8zDgdoVdtvNgSfByR98g9GBpts46LR85u7xqcMPhWsgL1ByYABixkn7gERuJm1GYu6kKhwXY4xnJTxeU84LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGriMipUHwBcxSzvnWKidmrncKXyK259WAUZCfvoQXFnV2CL5GccoiWqBaSqPgqTXd5Sb9L9Zve8smSSDzhDVLj",
  "key1": "63sw4vo2xshyTD3gwbcotvGPLp3FB9SdbbM7EdFDsrRECVmngRZTgfMGYWpxciQLNw7Vh3QNT8pSsyTA3JsdxJXs",
  "key2": "DjM1p9rGaSWGWD91g1fLxXTiRgaX9LeznJMYDrVBvghdRonmVHNWWHnXyJaecx6z5snSNQ1mWaUHojJDxfEHJsj",
  "key3": "3B8SMURs67m2LUWhLe5tm4cekWx8SCZDmv7bsnQmn1krDwjbu7W5gM7J9gWVphRfmqaPa5trPTuLMyisCYzP8edK",
  "key4": "4TfhSfV6Fw6UY2uhp3WEvzPfMumhpUpxitP7MG7Wh5dSydKwq9sAzAgVXJgLeHS6bfxLtxhrkoYgN3ZXZxR86yjU",
  "key5": "5gnymMqXg2EgESL6UKnH5gnQurMdDcXShHcGHJSTdXQZsRwb7BLRdxxx7SY1V61mvhc5PhFRhSzwdjMsCxZn6rNJ",
  "key6": "5JhcgjPKXvmPhhxNk9WGjBdBLxvbUxdbrNNoMx6yqkKUi1w7ByX9irHL9r3zdcXsMH2o5Rxz6StKKiaDi4FafR7U",
  "key7": "3hcRsDeShnfNm9ZZHhi6wi4N6rAzYTJepzZcQ3jFjY62JNVgap9cEaaXFdvjbhfmkuGaTgjNXyHz4L2AKjMwVQPY",
  "key8": "4hK6mpVksNvztnFZ5GSs6BpWdStPs3Gm94LLMLJKAf5eY8Yu32DywnSGzjixQREHmPm5Au8yCaKL3uR2f7chHPfT",
  "key9": "5JVWy2vdwYJNbwu11xWX1iQ1SCNBHZGpxEmK5NmWHrtEzBNLURQ8twPButqGRFrovVFScQZEPueP2ZgeyWNEqU3c",
  "key10": "4JoGEUj2zV1nC1zwxe8CMkBGtxg6QtniJCR7Dx2kYQQ7Uez4qNTdtchvysQDYFVpaLD4DseDdaPC6AoXjXxTee74",
  "key11": "kesDRpKo4zuTHPA4vEKqEj2CMrc17YQSKqAhv4fZ8vxWpSsYqwBnxyPpZqKbvXTNDpBkLphmPTuuM97KmQVcAeH",
  "key12": "2qgkjbmKo3LGgGpeTcnehSQ4tXKd7d9HKqghQ1rPdF2xeNeGVafb5qF5WA6Q6Bdwwzsx39dgLoQXCAKhLLeLAcWV",
  "key13": "2WjbRGyY9HcmxvVD8h41eSZWSEHBRwSojcVTJQjMzb37C7NVj4ZKLkyej7PKNeHgYW5khuu8eXB9vG2RPFZDJnkV",
  "key14": "Dz5Egouw8dqnMxMR82ka2YweqAoA5N7F21BtAY84HaxjsoDJowyd1jtgWWSXZTdxnpTMVLePUhYkYrSGZXL6B3J",
  "key15": "36UMHNVD2VGMbpJiEFTFQCjnWQzJBqcjNUmnhthgRTd9Zr9ijAHTqeJ9K4EKpT656QJP7u72PS4nz7fFUyA9N4fx",
  "key16": "2NUvxngFFnhCtYVe6DKCbEwnZqndm5yjLiydXbpog4DH6P6e9NXjzCrGokPK7dSf4w3xWaKhL8fPexMRbZMpH1xS",
  "key17": "5qrFdGUmjAxEsz7Sub4Y4cf8EKXrCUNUWtWKMRLhPHCsNT8LXxobsBBTwDvvu6JtWhCfqSP4SvRkEHfZDePdemBm",
  "key18": "4bhmycxR56CfZ4o5C7v4VoQCFFwQeD1rCdQzATYWnudazqPsLAH8ELgmoHAZSs1dv9QqLStVBnp92oSV3twFkfBV",
  "key19": "cB8UzoJMsNbk2uMvZq1oMqEityAEpZaYYu7n81HwMbKJRhzXf3tUf74bHqYmGyfdMCs3m4bSP5Ry5Kr3q5qsL3Q",
  "key20": "2RuwLdwGWV9bmx3FRNpcH8yEdhZ51tM41e8JNNfhwhpyQJvb8X3pM8dJPLSe4QmUuch4usc2BEA2ozFwSQoEMiCZ",
  "key21": "54uRRWo9Rsmy3GnPApPZ9tRfryqKiihpLoCpVEab22MYDPDB1CBiTZ7XkorU7DofMZUTBBwbNHBkc5i1ermNb3a4",
  "key22": "4Cx5zuiaSD618twbPn58iKdhhzZ97FSzcHMcgNVSVHtDiehd3z7Uf4irfX61CHUKNFvuK8wEGi8Ga2DEzX66XYGx",
  "key23": "YVJ7kHZJ7WUhNJagaF3RTVoTVuFseB3PstFLKvtzECn8JtDG9hbTUmVFRyyQZhqeoytXUZpoyasEYPyj7BFEcny",
  "key24": "yTEfYHitdfK4iF72JjXJts5sxSDpQ88RaNoNJeV1J3oHDXhTAwfveCJNBhqHdbMtsm54pcW6ATgw8Uf2ppfBPYg",
  "key25": "2HXwwskFFE8N2eaMkUsAM3MR39P33QRuGPxNa4FCc8FWw1fgztRavogYLo6ZzUw5S2PipAJD8Kd6xMmGQxU3vDjZ",
  "key26": "63qjnDBffwyR8JQqz3x5ikTJfHjoUPAXvRY92vWqm1VW7hP3SvZYydwC3nehA9X7769C8JW39U6L7e1ZhpU4qyJu",
  "key27": "4BfgBYCYmaxx3bwjr62vWhybmPTTrL3GFaSa2fM6E5jMchdWyU2JihqTHPTPMhgbGp8AwXZQif6jrdMDGLV6RKGi",
  "key28": "2Gh9HSvNgWU3a8whPPxJpJrZgR9m6QyNixMSb1V48hzAssvim6qiExW27LpDg4XoE8yZLidnpZCDzhEyAcv4VMMm",
  "key29": "41zTbfPrzCEDVmRoMH5BGKhPETEgeKC2Z7C5zBdD8gxBWceU4gyXMfqu1ztUoaZFrEHWTh9LQXfVepeKVN2QJyZw",
  "key30": "2maptUBKPAdP29UguSCindPhX6QzjiXHQkw6Z5NQWwyvR8aamUGAGyiJFHt6ip3gmgbbQXNBpTH8jQoMrn9Zr8QU"
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
