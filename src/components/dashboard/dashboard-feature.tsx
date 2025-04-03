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
    "3m6Mrjq5nDEypPughhUHqQ6VhDfqFULMktZu5QGGcq3Yh5RSRGELpcwT6ymarxoP2j4HqrzXzDcieYA4w4JuyiwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXEJFqJLyXrKH8mgR7KJWtsWjsRoaEPPsRAKL74SFEQkCc2fvwxZyPybHxnsqC8zbf2GfyRX9hCoVP7nppEbVEC",
  "key1": "SBQAzJG4KU7jTkYSr5FdFbWTgAcNNoPSUBqb9C7R2nPdEhNvZE5gFdD44iesn1QEk4CBYjb2i97X3YncfZ9LSao",
  "key2": "26f3Z7f7pp4jGueiAB6u1uYvKs9jFz8rVdA2Z7AwRoLRBAXu5pRoJ3u2Q45pjwaWR3PPzh5x3dfGvWjr9Nmv7i8M",
  "key3": "Xuga98LLaeyry4WqfAg34qA9ZfqRbzEA85smqtwzdVLHyfJWDuLNLp9GmJPoF5ijipSUN5dwZQE5pmtf7iGmfQX",
  "key4": "5k7FWTQiEkR5WbSB38mAiUVgqxWrXSUL5M7W8ZyVFgN1ELZaeemQDBr8jCA9JSAv4XtcgsQ26cnCN7aJUPKyrE6p",
  "key5": "2ngJ6rx2nKLNS9de1zTXcBGqAz3fyfxwpRyKUr7Jee3RWt5Mad1MR8vmt7jaF2Shc2EVwvuuohzqnKr49Qw9JeeE",
  "key6": "5eriRkAQr1UrNaoFiEULAEsUA15ociiGXS8m9CW7riXgD5pZ38umHc2R6xkJQg6dYf2SuEtGL8JqGFRcVPxK8FNF",
  "key7": "WfWYgsqyvxqfe3WiZYY33qxk4xZCSrUim6aCoDAJLHLkHk5aBok72cJe4NNGwUbqXKsx9Jn4qvVLcdzMj88z7Ji",
  "key8": "5i5YgcYQxvDwHhvXUj7pPzgm9jXkSweKMzzjiSDYLqn53LqPzSisGVRVJnC6vorfCjTLCPnNBm8MFCACyPGno82e",
  "key9": "3n7cL2XJViUresZ7eYfHrN79JVsS7Yew786BVTpLsfKA6Ww1NsHWWvjqr5h9gWVuaJvtM3f7BM1kiSRJzv6tjj8c",
  "key10": "5tfefVgZin3eGKUqgrdqRgHQRmj5n3WCJYv3e4rynncwqabBJJYnoLsxCH2hzr3ZW1BR4AzB7pTrZHPNxnZ2LgR1",
  "key11": "5aHUhDsiRpRWpZuLdRpd5x4W4suTxsdLaVwAk6Y69LWfC6jpnuusueuygFsqmPEdgBcM2sti8MKqLQttaNNmEZMX",
  "key12": "3jxsCb1SFYHSEk9Pw3HCGyCwxXVm17kByYY2DFTMQqnxivn5vrCvPUDcM2w8eYe5zSKYcYb3ejcRo6M2j5CrmAtY",
  "key13": "3wUDaUzn4as6t7AHX52BC2obSq4VAkiVincPe1X3J1W8Y73dzd6j9RhL43rBGBXkrDUyrBypz1WPxeEX1Wu84fxp",
  "key14": "2TZifcGiJYYB2Cb5Yc2tuDuc61gRymtZUhmNvNu1thtsGVgrcFF6zSDTp5jV23Wvtuybu5oier7opKLjKTXoJVun",
  "key15": "4k44DYATgAiBCDwStWLLj2sSoMzA5U4vWagYHMtpFYkr68qwiYuz4V6vcTHjgpYdtQVrVcvfQ7MXqLeraAtEsCe1",
  "key16": "2jgy5vsMLUuhyucWwhhAP9t8v2bRFZ9mXAn9dGzAM13wneA648QJk2hjBz4udQocpPNzA4zxZqvrUgxANwb3ZM3a",
  "key17": "iP3czQcQH3AP2EYdbcGsgeNNYUkxbxetaqJmrESHoD8yd7TxyvcbS59ZyMvjDKv3Vsyyhm3ZRaBmKvQ9WhQuoYH",
  "key18": "4UhiYEjg2kCrtL79wMermVwdezKT8D9B5oW2nckVv2Ko42LAeUo3v46QhEfDdKfsGey9V5dZ72DxGWxrorHLEsXg",
  "key19": "435LRSM3QQhWBPgnbnV5sEbwTn7kicuVAWbSro3LbAu66FchA3yvANPFRXLwHpqrKtziHMDEJDRtS9FNQp9Fhkv1",
  "key20": "2dru1mNv86hyWVfYdQRjjp4NntAjGAiWWUX7RSPrptB2iGPrhkPuhGX63rvfhPJm7f9qcAsurzq1zha6rLTSvXgJ",
  "key21": "2aVAzjAEufmBL4V2wGRTQruQoc74XjPqT6Fi6iMx5RNjRz4seCasucCwuij2qsiY29vDF3s6G2a3jjxAwiAEDyb5",
  "key22": "41u8QvLw9xJnVkdMrLBjDxVi3sf7qXxg4M1CWKGCd8LVJeTisnw5foNvBQVuP2AjD59zZk4npWu6WATaJp8vsQjs",
  "key23": "5u2nrtT2LyGqYiEgbrZRcanAgVFCaCXxcbpfiBegpWgcsTE1EQdzxaLKts24mrGT4nYJAqWvYfG55scaV5hoWbWV",
  "key24": "4vZak84wLhh4pdPHcSyYaR1bCLQ6G2CYMLmaKRuAnLyFpvy7ReU8692qG35W2H3wmtLo46mSqJu7KQkNf8H9Ckog",
  "key25": "Gxq4PvXkPGSda3aQNDDjQJB8vn2DFMbcdmS7vMS3K4yDzuRucgZA5pmjSm7aJjawiA55n9YcE4sCxZ25aT2Cytt",
  "key26": "3JXor5bbWZGuDdZXNxRCQ7NArrU4BzzX4zGjUDrE1xUtoRgyHWU2nMhTdsaSJ6NT7oqz5xs8mhmEoyeoW4y1Eb8x",
  "key27": "438re7d4CpashbAXfDxKQawKJyUHbFHpHbKkMK1jfZ7zH9Xao6nwZ6iXzAnpUwTjeuKkxJabgewbJqtbZ3bgYHeW",
  "key28": "3Evp1Y29SYoGFsaMi788Ewv7Yn7Tbie375TJ1uXpqJf6RfmPzKqPmmViTQZGLc1FphuYMy9ZUUgRsaCV8em1nccv",
  "key29": "2Ds6CjA4jhY962M944vztFZakNhehyUfdxnZshSneAC1eMVuf8p5hnW1WZ8WEdrXXYkJLoeTcskQPGsQjzyYNkjV",
  "key30": "518x8kX85MvZQ1yLWuJ5JgV8fsrQNs6UdCjLFWqWM6wiVh7dcm2ZH6sf7n4FT4DGEhoiQRVjVyCx6hCKQU5q6HAN",
  "key31": "bHPRsdkspGqvKo5LcKsxNEvoZtqiAVuW4VZKHV8RWfHsbdYx9eWj3kMfN57jMDgHvrTKCiExsWAyLu9pAg3dSu9",
  "key32": "2fre9nGCWGCuhjG3SxRiaon4MkbnqNgd8kcmauZikN9E43BnMvMFmiB9U9JABgex5ucQPXECMitaV5pda9Cb6QRj",
  "key33": "5ft15vp91d2kx8p2qt2MmxKxZaV6RtqgvisEVuwAK5SfTT4V6Lxnp7WX2eMkqETDWrERhfYUW5X7QzJ6Z1sq6yqt"
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
