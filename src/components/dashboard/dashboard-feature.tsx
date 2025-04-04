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
    "65Di5ppkJwJoUUUF85q8oba1BkVQPFLgsBQZ57F5eTnoHnJsxCu77ohCfLoq9QoMoew2xK15GUyTKpzgaAoNvxHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTTi8EZt3VxJqvwpGw3dCgUZi5W7W3KBSmmT2eDQ7hNvePzmA7m58XURos81CzfsxtsKiGktLCHiHqJJSaH64pw",
  "key1": "2od43YUBGAoN1Txs5UbGxWaPKJo2UCBD71GkKUk1mqMCV1hB1e3eGMLNXLEY7fT41nKmmnrgnG6MJGRCo8JzLD94",
  "key2": "4qQ1eVtiar8EkWiHK7MPqwDSi3zigwCUsTbTqVScfqVMaCv1kgHmZjpRb6FCePjh2sKCGXbHSEg1Ej9h28MfiNuw",
  "key3": "2g2X2t7MiAJNnCkc1cVirR2ofg2Hqe4esxeCLsXCfn4DghBjoKLSTkk78raHU9LrU1kXRTjyW5AdVLnL6r8oEDn",
  "key4": "2beTVn9RDqU2VkbSvxbPWT68oredZB612s8VSF6HtwqmWt3w3dv4j6ZjpbtrRa5Brs6VyzHRBcdUwJam2DCHAK93",
  "key5": "3vXTMQekY8qXziFznkksip2Qbyb4pgqGaTFC8sKstTzwqfRrw2YjgSTrBoUb5iLd5WXvRPni8KUAf6Gbt2JDTrar",
  "key6": "4Wx8NQsbyvpNn7tMSUhHBRnHQXKjkhZMSKWeU1m7XQLNfe75z6dknJvjWKgB45pP8fEV6myQaiEbLp2wTGoa3Cuh",
  "key7": "3y886AfPXfomqG7qjpWerSxFk55qtBLZ3vRJQcZ7c4vSEVvzrzHLTaJ79QG3kZ7XHNbSAhpKXGxj4Tr59Y74Y4kY",
  "key8": "2aNSJaofVhxAAk3tq2n2PvKq2dnr6hSBMY1Hhv9gvKDN1zbVaELyEiSL7bNAqj689oSg9EEd34ZPpMATNi7Nz9Ln",
  "key9": "2x7sgTUtGh3wjeqasMjEW5dXnCcB5AMZpjFSZWDexWnU549TZT2TfF6WehHpmEvqG48YjMkkCq2jzdtqz3tsJt13",
  "key10": "2WLtCYK3mBRHmJ4R4gMe7PzwNA8kat2iiEEQ7N8iN7VAxNFeRF6LA4cxokrGBCaJCBQN9KpLWsbrd3ic4wkDMrqK",
  "key11": "iHvcGACV1hxMpoGF1DJa8maFsh3qbtvbiNHW4V9WDNdMgtTQfD49XvfDtkszmg5NNWouafKAJE3efPJX6B3e5Zx",
  "key12": "2LdMs3G1YRYAGjf2KPVD69mexdVshk8X1Nff9yiTQD74xCjcdczXrCE1HbFv5xwrTjGm25aae9LxW5DJ15tjJXHE",
  "key13": "MXGYx8jxkmYwT9EaHXNYfM583UDCq1gwkCUrm9r8ckPKkdEyqamYPEAo1YeifR3a5UfbrNNFzmzocuNTBg7w2HR",
  "key14": "5QB9R3VRQBq6kJx5NJd95UeqpPf31kQBGVaZZ8jkEN9fNzemSFHMcnNySYsjxA8CHUZ7kzFX6odB5SfTuPBQrShN",
  "key15": "2FoMXZ2rvoHL8f8M8JKMsQGVF1X5ahyVTgmigB2tjsJPhcWhSSrmCpx6ZrvYReQWstcc6C4w7H4HnY1mWj3Hfzqz",
  "key16": "2zd6f2wPCdGxMDGcHTaW1nkWhZZxjLCLCQVZai49yPuR1b1UVtBc8cHorPm8VG8ZLTfLz8GBioAgDHGbjYEUzBjJ",
  "key17": "JwHACCs9atFH25PTT9qSVWLYW5RQvZy3vdJrDTWJEJJRCos3phUpm4bQkQEGnxadktQMBmUn7AzUTTb79jcbLrZ",
  "key18": "5yzDRAJDQy3ZRBMKfRgKQdNTN4z6XZHh1uNfbadcu7CrxdVk2ZDaakxSojdvdGyeLh16Z1iccbwLmUCu6LU6WeKQ",
  "key19": "3WQKpoBxp19MGUjJxTcFYGanLhzM4iSwktkTBcuyosHHQcP266agiCJrsAsyDG9f163ienQzXRv8JY312mzX3kjZ",
  "key20": "54Sp7QLApmuJqa9dU2n4bMyBEJRYngpFyhmYymBReu2mDeKa6vtLgMzVZbiYMNitRhvw5nnuakFSJVpMVTKZHy6U",
  "key21": "2VfPkPvAcpRJ1Pgr482nEHkLuWxX1DzeB62dFvghWTqbPK1Weed4fwsAwvKJJCgabQC8kEwgMWHehUieKEFwkrnP",
  "key22": "2MaNCUMb8SpphDUWEJ7KCp3n6ttfhmGXFPbM7nBvornGu8SH4fLSzW3fq3AUDUx7Xorc58eEv9Zpm9a8jr7r3YVQ",
  "key23": "3hi4ce5BvvQHfRx9j3vbpRzycKtz8NaBcbJ2sUwcZSVNpew4VG4KBwbPi7JRFVotrH9swi7XUebhpNsS24HDkLUv",
  "key24": "2iVf1s7GeYBszjmwFtgibZJm2ZA8XyCoPcKdMwdMZcR2xftUHdJtnPNf3Z4C4z3E6Q3BCwwXVBm42hidUvAmmFfc",
  "key25": "2UJFtKy1BwAnVS69ckenk9LHFYbf7oSoA4u8L84afRae37AB7jUpTT7PCtDu8WsnGxxZg2a51vhThHzqcTvxJvGj",
  "key26": "5NV8pRh5YLhJAoBDn118QcM5NRrHM5yEmfCy1iHoUNrFgPacwDVLwTpfWGmvnfTDrFqJ7mitDcjZzDaK7FC4K75y",
  "key27": "v8LLndiTrEbrb2HYX6G9RjRcP29nHio7LXUGAKcSfQuFRnDPTyEBgeAsC9GyM3CeM5HJhfDd2BQ4BVJGstT3aEy",
  "key28": "2PyygYd5nM3n1jxYrEfmurHZaGQW8vZDYTAqS7pJWsmN3ecxktf5W89NProkPwBGXTyQ76CW3pxQtRtCEQhZP9SE",
  "key29": "1D65cxfbi19YR32vSDkVYZm7xJgNt3CPfCnV8cTC6cJKcci7kDu6WgQUzpc8nfoPuXqvgyjo5Y7VP1CzZKD5hm6",
  "key30": "5frpDwJM7sBiyXAbfnAe8peZsmaXEU3LEqS8nQ4B1oUAME1Vj13BdiHcCkC4GAVkkCABsE2AyTNFnEY7isohgkLR",
  "key31": "4kgzAHNJQEe78RHRd2FBfSd4wNmv3AJUXPENCeGCnRy6fy3C9JKxvYU7dtwivtbbMkS3pMoj4uQ1KUJ5jrMNnegm",
  "key32": "48s61eAcdL9XhGW64GF2JM2waN3fjhevyFbAxzyY7G21vjsRiGKa1N5Xggdq5vKcLMkHCVgw9zbGFCWRT4qiERGV",
  "key33": "5g1Rxa4FsEXQKc8UZHSF4ytLQvCQZpv4Mb3BoCNDV7vPJmvAu8mqRmjc7Q991k9ea9K4hJVYQUgyEpCYTsBWodW3",
  "key34": "3qBpay4FC59QcqDRWfwVM5c96trreGnSUurFjqomqEjEomSR9uDP7anw8e2yYLqL9hvutRdeujfNHyEbNYPkgECY"
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
