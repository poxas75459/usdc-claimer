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
    "25hHBPYTNX1x6XdnVUzGtZJvHm5fCSSeeoCJsP9NXVhYu8ZgDRsekQTSvc5KauDrmbj5u1uXCviyvqXuhbtbHDmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "237gYTizuuUdBcEQ3eTuto9CB7VqtR2c1KMy3159Q9zDgs3nPYsEDmY29smZCBXKTwkWwtX5i7Yt24KefYEbrP9b",
  "key1": "5DALTrzgLE5fMtYhUnXLh68qmFD4SXYYLKPWnskHnwwhqsFzcdCnwEwkyUGMEMx8aFhh3GnFZP8UpphC7me8y2Wp",
  "key2": "4PFYjVECXxUi3P4c2eAgTyCGWj5Nes5DgZPeKaPjQoStZJoSAokJKh42s4iRvqXQQbz9JekwvpePC5JCrosGZPrV",
  "key3": "4AhD1mZnMVUC8boJcMmFU7EKfYey9CujWzYHeuxmAQHk52Xg48TqFhkUvWypdM3NGwcaA9grjWyaBgaMHhKNHY5h",
  "key4": "3DfsJkFxFwjsgqzGY7PXLM5Z5WUKo4Qyvt7Fkd6emxdkRzdFMehoTyU7uvv62bNax5xhikmZMSNSyA6RtCfskTkV",
  "key5": "tN5RFpW4ANgdaGveXnvj1CXnqV2CEPxYZbQZxpqXMVX29yevyTN3g5jM6d3b3ZDZvEoevVYTLUUFWY2B1FqHjN1",
  "key6": "521KrHb4GdfAk49t5EjPRttJFFcY9VegE7xcTDNZ3qs3uBi9FGDEGXTeH4APmuokVHuVRmktC8MJz5EvTiJArz1j",
  "key7": "2oEh4Kx67C4U7Xsr3KcMKmEyHBFZtvtdx1DbD8xJh8XSmMEgA4imdCnPLSVG6mQZdRtdTkGaqUwB5aBmwibVJD5p",
  "key8": "44WhtWidYmr5YC6eHWVcQPEsKEQEVHyYfTXsxWTgxcVwGENxY8YtdGjN8J7FYXVPkduJq1Ap6tjSYqUs8RpmQtsj",
  "key9": "2wkhABmtZG7XD4x1qH8RLxu82PbdBDgBcXf6APhSbRHGjZubTy1pfYCcW7RRd4nmLXKxsbcoEezKEBpafomAeq6A",
  "key10": "3q4rNX25y9UDV89REqHe9ZxQcStRQ2UdmCxTyo2MBAttuWPPzSDB6ZVH5KWaXPBB2a1XSf3QbXu8xSap8d7wnzds",
  "key11": "5prEg9kYaUZ8uyhpLHtRwmqz3S1V1qMMkN9toKNvQ7MjNniXDxeZAMqq2sxJhf6hQ8qhhsafcPTgwFkUP76qibMR",
  "key12": "SKHL31gBPmaam7o9ob5gSowumtLJsE8XdTMqgmYp4gmUiRMiUn3xnuw2F55EcAnKFbvKVk56eeBhkCY5sfbdWPp",
  "key13": "3DCAQDG4Nmj941B6Xq3z1MbwvV1yfNJgv2w2mkGDFRoUXKy71UFQMj8SCDQeGjytNAyaHHqyUyTSNzf5tYKx6qUF",
  "key14": "2WVc4iR5ms1fY1t48XN4aavJsk6jUgLivDeY4YggX9gkA1guyhjv45Q4rnVoMNLDFx2GfMQRhS3T8j3nSTUPrgwJ",
  "key15": "26LcVnjHABUBqfVcchMaDeywJPGvgdqcieRTpK8AU1K1dHVa4P6Uco9m3a1uoZ7gu67pzCxkkaPvWhtQYvcPQsBQ",
  "key16": "KHbB8g7poDmnJcqK1HtiFh2UwrnWs2vAsXVbD2p82PjX11EQNmT9v1X2oRfnDLEAiZzASPAEk7K7SwoJb3i2a8E",
  "key17": "YqbE1HYyhbYnzGha1dvy36RCyxTVFQGmYLoYpSFZhT2rXwpPA4hezVDfrieutZR8Htsth56ja6z3LEabUxRFfEa",
  "key18": "2HwcAmzb2yUGub3WFJGhzCFMuAETpMcqeuozXqVjth58b68vmPK5C9LJdx1wBofXFasZ633bk9AUNeVP6JYzUHrU",
  "key19": "52cVJepqKpKyD5hcnRttW1h9hgT38j92vhcjzDkqjmuKeEjawitkrhqNg3C6omDpeB72iT8Mne8uC4YjTqqv4XMr",
  "key20": "2Ey25kmWifjfccCvABhwaBMfK4YztTKXLAtS28JFRLESGpKoCVhYJV1MvyxZto3kXLBM2RfAutckCCqjHWfT7GUr",
  "key21": "53KxwGSpJFdwVAmsmVahodFajGPGt7kxQU5i1eeEfcbhshvJTcKHfq7uCLK5srXPMzkxoLacThRiYoo3HJaGEvRM",
  "key22": "4tBKvNnZZMPKc8djG4hXXZ7p3zpo5dRWLR2SFDSMHDoXf9geb1HVG4juUZF9QX5ArfCn6ayyzcmhBd5Z8M7iP5TG",
  "key23": "oLML24kygn9KUbLQFKbrbbgTqqBduiHNecMNNR7QnMdjv9E8rdC5THnF7LD9jbryjd3YBGjFWTJJAzrpbLgzrAq",
  "key24": "2Ybz1jFwwdy3KRCvnJJ1QCr3cjkHVMjaigkffk4ZWWz7yEhkh2BHSWgngoDBUdNXX5ian87sWsui37Qos6opDAEe",
  "key25": "2FsNQnuvoi7QWkwZJoCG7P2HkNuQxh7TvxuTu9jWnexQtRquxsDKW2pSduxK1B3kZimwykiShABCSoMqjEiq7iBo",
  "key26": "xYxhBnvgngPxsnV8sJhCnney76QBfhpgvFHC5bAMe3yaGPvvZHRWQV9tXRfP4qMpNJPrUipV9Yxzamjaw6mBD8Q",
  "key27": "h9rcNve2gT33FBJxe6CwKuLKGXAEGmZu8ZmcFwdGf2UJ324nhgwD31GmamcNHaNKkbsNPv4vTxEzgJcnB2tzDxi",
  "key28": "3sZ8y1Mc71qpaTo8abKgHy54veYPmKeH68SCGRCpqBP2GZHehMw31nAjspvSRCskPTdXY2cqpmAvR9uSK8ezGtjH",
  "key29": "2AALMRJLMGjKq5dwnGNCFvg54PqJeXXvSFRq9D5hdMFjrjQziGv1T7XKxyFKBVHUArKLnxsGhjrRQKC59NEFvEx2",
  "key30": "5DLraZhTRs5pm1usFB8aXVCqbUHb2p85z5kGxMeTwYYFRgNThJoMUMNdAVEGX5jZPnjLZzBDqKhDrP1i8GenhFES",
  "key31": "2JocUg1VUexfZwxuf7sKwrUwRSsPwNfgy9qBs9TNufzXsBn6CDm2EorQz8KZiu31EbV3wVEiPF8XvAzStdn3HK3q",
  "key32": "4hXKxytKKjuLFDPdmpK1KKy8zmUA768YxaKcDLWZxo2jrxvKcc3xS3FLZ1c87s5GCCEymwyytPZMQZCtefWAoizv",
  "key33": "4zYjDHGdba3QFCnPwB8k19ajoroXx5DRRaJfFVRKzFrYkQdmc7dJELHFBHz88gbaa17uuzohcfCugCamurAMNrE2",
  "key34": "5nQXzqHn5rGh6NcFT7QZpsNcCDEpu6zJYnLnzD2N8HGrMyYko1dmeqR6vb8PDLd3wxuyqgd4WkuU16VEoWFFAV8T",
  "key35": "2g6t4C9GoWLTVHpFgdDvW5JK14t3avzhrTwKSMk6iay4Fdn8zAryz3PHePHwYBpLQ7H2eNZqpZyL5fSigzYDeSWt",
  "key36": "2u4WGmrepEXPDqvtPvjpG9ttMQCyJkoCCUtKAeagQj83MtNPw6WZouUu2zcryvDRm2FQJZTe6bAqFGb6D9bWuY7y",
  "key37": "b7Cxtbj1LkJqGrd6sZQ1tQoQoVWFe8Sb5mW1hwK6vVKXRx1RFBzPfcwPpomggU4Qi8PbV2pfz1enGzkTVJH23en",
  "key38": "cQab7844hKViqJHVA8q5TvEsmNGoa2GZcdoFZTPjA5w924UHA89qderPLFGnFXDAvrKDNmGpr49siBJ43XyT3sm",
  "key39": "51ktbP131PwNZvFGEJKVYaJfBfn8bvD2F6t51TDFRYW6DPqVWfEytNrTJbYCFNxQ2G1YnJVAR62ztgxAhxiXdQtd",
  "key40": "64f3uAaxqkA7sYhetyTfYiXGB8iHP3ACYRgJj2MmJWT6r3SBzjDGUsz8omhqatQTgKtFU6arAotaHndkwZ8Atob9",
  "key41": "5LzdCpu8bCAQNkaNhz2ANtwesmiPZWvEsMGi9FeHohvCKunNVutszTPXvm3PRJd68rUka2ZKiiquwYa48H98En7e"
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
