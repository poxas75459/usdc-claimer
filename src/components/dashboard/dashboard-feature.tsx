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
    "2Y66SZt4jAHcEfX1VNcxJTQQedEWZFNBEmmYbYSTMn93WmCFXXNnX5cS2zepS5SMhYu2e55mJmsKFzetz3fRPcWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MZAeLdSnhX8pUbEDTt7hhEJdu9E7XM2A7XETJuKuKBvh592GuWzVEivHhqtQ2E1yz9pwuCFCSMEmKjjNZ2BmQFv",
  "key1": "5Mu5bdsjsRtE4YAivMTf4SzKM3bHE6c3GpzFR2ETPvTeYdR6UqtYVtkZYqScaAuqWntUtnwyqHicsLrgd1SptqDA",
  "key2": "5gDWUAHf8hCE7wgGEZpJc9CDTgZHGoJQCUxAdnqQSGCWssVaNEYUfkoQsAbR4FFk5jtHsiE8id9zkNcoqbqRrV6K",
  "key3": "3kDrJ1VFERHGBj2FLpy6Z6qTGDfu8FMe2xwwm38owhiDpVqPGTZNjebQzyRgniXeF8CPqo1U3DTS8Vfy3yCXbp1e",
  "key4": "4NCidXyrk6D4KJBDTZzSxbRfa8BUNfgucAz7KtcYkTnmY9HmZ9uadajwpKuLbMnDNQWGuAou78NcKSscs3EpMEFV",
  "key5": "36M5pJbNw3ypv2a3Cr8uLdFkVXrMVNWqbUQGoVXHQf9sbfvprCGVBi8QShk8wz4z3X8rTfZKmCNqnoaHJkPCBC7A",
  "key6": "cwKo2LWAr9TUpT7frvepnRsrv2Stf6Bu556Ac2krBneCSyqYzbFraxp3Bgw7qx8gMuSAPkJ316PbWTjGB6WVtD7",
  "key7": "2VsbHMXKqiyfMWHxjAHS69C9XuPaaEUUprRsCMcoJ5TWtcQxz9EdDHm77pGkz3LF1e7MWRvPGox8addwBuTMrvCn",
  "key8": "3qfgBGsXPdE8sj3xmzoNps62Jjm6aLgCqZcJWv6Pnv6qQeSJdJMFbzRxFept9hzb9GuzxnrbRPkvgjRZAB9ottbi",
  "key9": "5UoewqyU98UHsihue1by2622ff9BXsb6Lw8aunte8s3cNsspFhFdPEKaKUGhYHhv5AWDNkE73UWAG7Ldq5KFPy74",
  "key10": "3yDM5pvqfPqMxmaT4gG1cjCYmcxg1U5B1twMkBWQp6FaB7GUNAxisbhZmogiZh5jqzkSPvYH92XLDpBi6Sd17das",
  "key11": "5wpEPzDMnFCdCZyrjH7UZYzpA7fi7HAmNMBskekbqpTG5D8CKkKrSJ4uPwdxmLE2vV4KZNujcibbm5f5XcJ6uxpt",
  "key12": "5Cb9CyLSvR8w3F7yWz47sZYRnRed6qphAWvtVAnpenBo74Ff9Hp1jwh2TZP4QoMzQKk84646zmMVLbYGxPJ4Hq2G",
  "key13": "BbddHictGjTf5rWJaTxTvjwq42ZxsrA74idr8N529RcH9qC2Vvmhkn2w5tyfoqC8Gf53Xih8A8XiEB1Uk22NhZJ",
  "key14": "r4UBQpXDi1A1Dad2ZFaWBJ112xwpd3kFLZxC5HVFKAJt4ELcXz25QUAcQmiWCCgyaRuuuLbGoUsyKns6NE3TGpM",
  "key15": "3UTso1LVJNr914BbKJEXbk1iJLaRkzg8kE44WvATkQWgeWK5LEBB45Z6D5FBy763Nd8U8eShv7RCAxqurGf5qhCR",
  "key16": "9YAofoLYz9QaYfm7YcLaTqxLJwb2oX6Y1EtGeAWFwDcktGihTNMKv1fxyXjk66QRNfNmPwTpQqPqxzXzPwmY1r8",
  "key17": "2eHrtHWvcUHUPTbDdW55gtDaK55EmwjrPmZpw62Cit4bVaEKkaxXvGmyAfGtZF6fwrQ886oLWaJJvhRHcshDuXkL",
  "key18": "5FrRSUEAkfsn4V5s2c4KfRimzxYZPF6vYkSbqqHtiPW7s7PuoUbryeyHKVk1KpTuvajdpY6sgkuo73ShnRhToWmB",
  "key19": "33pPxyLr1Kkfr7vqa2Swwc2XWAHeonUubbfYaKaTY172aZMzED2VRPuW7MX3Sa3pcHDjE1g2mkHg6pJ1dw2Xm9Mr",
  "key20": "MF8ueW4BmVYUfmCMn4ShttwS7SQK4DqseRcVLMUDuKnyn9wLkBjkLsncnyhUsV6YvHuq3JMhQ4Z7CoKr4jQiUV9",
  "key21": "nsAzc7fUBwaXwnnjemPSAfdTKmooQgZvnTjLt1yCvryQCoShmK3Hp4rgP73uzskkAQaYNHzWv9Zrg6CPLzEwh83",
  "key22": "4eAhU8TayBs5dcXEsUYxPF7SDGqyzvAwbzrLS9SaJF6HFfLUNKkyLiRzJB9nqzPVnrYvNjdoHufoPcq2JX8Jm6sh",
  "key23": "3N82UtRMcAuq5cU4jf8oyWZWS52rYhByCwHGErSZeGrErZaG52vasjWzbMSzGQsgZ6kHNx5JkBGWvcuQWG8RTetr",
  "key24": "3U9hvYDMjTmHDNEw8rASVtR4Hn9o516k5FG7Jp8ckJrzPb9EzohrfmZNcsGTNFvW4TwoREd4tMzRxX8EaXwyPWqS",
  "key25": "h9xYQctedzWBuctrrke5zprBNibpJsaRuwRzz43PR2VEexq21QZmnXaRTGdYbRSeyrgq5xfXv2ZAJBbiV1vME8y",
  "key26": "3kxpHQjjv1fYfgtn3ePQK8s8aE5U6iEin4VFNXHB6qRFfXbC2CQpM7zL4xu1rsUbugZFB1XZvgc8CbVnqgxLKFo8",
  "key27": "5LmanNkgR6qPbkhUcuoGzYh6P7DRkmZzk8TmWbHbaCZ23pM9rKQRQEi9rH9D6y9bpow56aNpbd7E3yyiVx3z1nMn",
  "key28": "4Rm9HsF61VurQnDpVsDYQwaQqUvt3KBKiGRiPDhCou9hAKPwERwcqwh49xvw6R3K4TCwsk1CcxfnU5uDw2Qgou3N",
  "key29": "gifYyT8WR9S6hrbFpnDZ4LHZLSkQLpJE34NQ4cUaVDcSHSz3pBqUMuttVpn349HURpkUTiDGhJZUmZaKXyxVziY",
  "key30": "MbwRk288YTwnqVyyEUq1FK2jjwRFx6cZGTQBi25i5WkMPHQsFNho5JTYffwi83tUq4sqRYCvVvp4ysJyN99xq9D",
  "key31": "5QGenhWNv9WL5Q2Q9TkbJ6aEgqUGfZz9r4JnoShuk8LVGU4hZ831rwS5vEnMqRVKM8C9as9yohm3qad3FDwSk3Wy",
  "key32": "2uzyYBGCQshH2cnEMjgF86FXL8WyAc1iqKeHd5DqdJveq471Mukf1xyEAPZG4sanrrjjYW9ErtqjCUgSXpTC9z7y",
  "key33": "NohHgC1pNAsZa28PN9hxmfdejZtmKvrrYnHJQz5A4pENb7aKYuT5CR8tZVvdbATMbYkBRCAZhcXxoBJG3JgxT4r"
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
