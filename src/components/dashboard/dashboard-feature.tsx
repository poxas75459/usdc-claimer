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
    "2fzfmCUsxpdjQKZk99W97detv9CP3wdguE9CGd2zCS5rU2yZYmc8R8ZFs7PkMAHGnQtjx2vQtdSEqnLZZcmv47x4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYJ7eoghU6UtbdLDYZDNB1XRZY9joqphNyox2Ey2Ci7wiN9ehpZPAPSD7JpS3S8mnAbHmqVpX6Lf55LePe7EsPd",
  "key1": "44LL3Shavcm2tRFws7tGh2Tb7jAqRzWhGQPz1cqivuuyCqG6KRRFRXFYJ9xMQawLLopKbPiCLBagDZR89RDhmCEy",
  "key2": "128ztTahWUWtuUDVBPSZtNoEDi2M1PTsKLN7U7vn92nqqn3K3mUuJNhxEZH2oB3QxXV9ucRAkhqTWqrTFsB4ohjb",
  "key3": "tta7vH1fMFik3A92GgT34HQr6LXCWjtCJ6eEASBsJygLm1B6wM8KxBPSc7mD5Bih3KVBgjFcQGLB9DtQWxSQhPy",
  "key4": "C9ncR9jpCWjRB4QCiFK1LEAmuLqyG6oHTKuDsMYhVhtqUjcMB5zEu2aoXgFmWGtgDVJ8QWe647HqPrHeQNsb3Vh",
  "key5": "q3KHiSgxHWwQiQ4t6biMMT6vSBgPQ6DvzfPEFrmmL3dwFaDrmWNtFnJew6jxyPvUD21GBnpwxMgVesVynYNBQRP",
  "key6": "HsRZB79ySLaFA9zHteJmh4caKchNvxZDnYmL4VK9rcDrwpzCDoQPUfQWqftG68yNqn26Ghrp6hgDodns5yQf4wW",
  "key7": "r1KKo2fW4rKPiKgsWzLRrHGtY4YMt8w6AneXnwGhZQ2RwjiySbh9VL2KL1cj5nzppkJs5w1FQistDBPp5YJVqim",
  "key8": "4DzBFQ611tyNpfoVHnG1uwAzS1Kmm7jTvWhAYgXgqy1u8Xn2N1i8Hs24H7hTzfBCzevG2qzVLAWX36gjZsUexPm7",
  "key9": "4qbkJS3a5eQ7ySjKTkkBaD8ouaiZ5SbaSbp4nTWaF3jurKsQppBbuwBcE57MqZgHry28WukSoBYG2YWE17Ftjs6Z",
  "key10": "3zTa7RNz34Ko69FpUubZbMtiXzpbSXB6sR3xbKYSZaQhNaKyaxAH9zTyTeguD38ahMUuikfVfgSTQDQYB6uJmysw",
  "key11": "53qVEXPEWuxuNodmpq83qGwxVMwq3pRg8FKtVEPKmenZ7j7L89PEUYCM4GTBD8q7kZsp554wxu9AkZ6PgJcMyhp3",
  "key12": "5x9vVS4T9hGksFUyPrfQZrEHgQ9egG79PovdQzKrgKBhbJ7ufFFhLpCqm42YCkDBfhxo2mtQcojamUY4ut5VTyJA",
  "key13": "aaY1GRD4mfYJiD4KjYMoQFicRndJYgtEgcMzVe6EWe9r1jZpbETDThKWJeRGhAVHiympmnpjz6SbACGTykVFcbD",
  "key14": "GP6TCu8W4mJjZMnpqu11ky1CJrgpTYQge3pok7CGHWAMfDTxmQ1zjRHVHHywcYh9BAxiyacuKeWrgpzpuazi3he",
  "key15": "CSDeArCw3UdBJZMh427uH5rVhqcDgdEo11AyTcETDjypdPqo9e2WBqENTd64tNCuVRAtVdCWMkijkkFgiMRc61M",
  "key16": "3CyHRWBiUmn2PtFLB8Hr6oxxknpvFmJkMSCbKfxUE7ek5YzQGNNu6unYuExUyPSmo8sgeEKGBt7516gVBsLRzRz7",
  "key17": "cLvEyFw2BnaVF2VoceYgEHWQquJq6m7Utw6suvbfvSvshEpVg6Y6FpAVXnATno1YKq3jM7r8H7BduNYTF4Ed3u7",
  "key18": "3UtsPPqm7FcBGtoAtNZMZjgAqX4bGjdXqrWrXa3hp3GQaugmPqtTVawvfwmcKCUDHUPnDMpqAETyTSrt17cvmkG4",
  "key19": "uNGvpyUmhMZxpN4qyT5PF5e2UkNrqFtBw54TYKhUgVgcCN4Bc4Zr9wKHfSVjf24rL53mcguqU5yQxhue4VCgC1p",
  "key20": "3wCpi8LjyxYPVxfL7EFD3n45ZnwcaxYWJcAbcfZWN7ts7Uf7agd7RZKm9ASgNo6bsrKsC3y1GURqQ2QzDZRAnNSv",
  "key21": "34tjF7LV4Cgr1QahVUGHVQ8SR88EVcG1Cc1LcPU2jDw8xUT3DwiKWMezbE5WCULELSM5HcZxtS3ydWAMqByQCFrN",
  "key22": "h9CWsFQEECKdrShWyCABLs81KtWxt1cyDNsS4wEkTMWMCGRNzAYtkjHWVBY5Uj4o7kfS2VfK5A3nNU82K9TysKY",
  "key23": "SYwkTYPvScy6dnwDqkNRT337xoS41DH84p4iy3xHGskaVQFpfXVPjCWxYLyszbsXVSNRGVPBXNaqb81sPna3vif",
  "key24": "B6XS4H3pXMCc3rTQu2RFHXwLCVzhmXTq2pQjegrkFBqJa4F5kD8XCDVHX2UA3TkcWpoYih9i5JG1UMGunMLCviD",
  "key25": "kWxdXcaawxY2znzEDdTogX5QnjSSMVV8D9c2MbmRyyUpq619uv8upMNVgfxjgLUS6d2ATsCAJxzjbspcoPPzotP",
  "key26": "5MAQng9DNjprUhMajAq8RWmLTcgAm4houcyguLT9MJD4dqXroY6KrmwrwPx4SD5x2QAY65psVsZ4k1UYDA4KECrz",
  "key27": "3jw8EhYe8ZyBx3Xpt7TXMxBNDYFk4AFt6qUWnL7nijj1Q1qRfmwrRfcauWtiWH4FgbpbSGGcTvVq9VS3UEaDaXsy",
  "key28": "67Bdm3doHvKsHoB3zotn1ScLF7r33QGgC1ZTAScpjc4oCPFwPTVx7nxrCSuMPxVLGmqqTkn1pzvM759ybcC2Qj8V",
  "key29": "5Li3aH7Bp39UAvXGEkTEZCUu9HfdrfnN1CLwm7VyuDevjBxdzHnqzaXQuJZq4ZL71VyDYkeuQuF4Cn4EhG9k7NPr",
  "key30": "5wBEMBEksfkgES6cvLbxjhseVy3xJwQsAJwrPfASLMco38jETm4hT6X8sh6jMrZRoicpDyJ9YpHY6uEKHfPoZ1qj",
  "key31": "FHirjnw84jqencTuD8MA7nfhHYnGwv2UH58HoocR7VGtjqk2HgUFkx1Zu42CXWE8LNXwiT83xhVfPTfSBHbakeu",
  "key32": "5Ci4pAJjZooT7oeyGkJUF959rtjndZuEYigvprHNgLvSRofMXJXHxjMhbQLhCfRirm24p5rAucvxLiotJkGniCDs",
  "key33": "4gpNNYgFHYypJdC5gQzbEkgwTRvmybhgUZeSB1K6DGCg3zU82vgWEeTc2HiCeK2eKboaVL2ALU7XsdXVmCRb143M",
  "key34": "4w99DdtwtbTT2rSAjYX1ffUar3evUZEVnZbxKLetM6cWfk19AAoYWxTkzFbQF443uBAcZzhLApXwfTAsstjVYWhc",
  "key35": "3DG7otvBqAPsyPH6wfWw3AU5k2CiNTAjhCMM3EWuFzYAMHrXZP4TTkjYuByoTb2eLtFYMqf7oTDJj8DHh9CTq4TU",
  "key36": "3UPjNKBYzxFB85a639Y1pZ8sLQaMNEMfRdzHMf8gMDywCN7zt7dbqYgyTkjuLB2SLgftmoEJxCHL4sFP2UTwhVqn",
  "key37": "2vxEWhJKJzLt6PYYJsa9b7Kjr57T2ycj1hzXLN6EtKQQ9W6CTUVMrNHomqUQmUbdDeWuRo35bu6N9ihJyjtXawdh",
  "key38": "4zazo38Es23szMMzEWrd5R1KkaDsCx1Gx9R9kz1fPtN7Tux97nntiW9REUkofhRFAxSSCHnPeTXRBfijm74cWzh",
  "key39": "2X29nUWjApbyrd79LAtCpNy9YRB93z1xiL9F9ram6tCdxGd7E3TGLsRismUxV539zJ2TUFLkMXrtroQZffi6KJNW",
  "key40": "42QdZunYgSVYdfc2JYn98989Vqw1DpNWVYQHjtpHVV15iF5md7pkdtaYobqk5wcuPNefC9bDiQ9qLvkCqbQHTtme"
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
