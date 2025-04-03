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
    "4CnNwFk77unDRoVQND5SUt6u4PBBHUbARxwPx8brAYB66s5kFAYQe3RKp3SGTto56sqgpMT5koeQThkkbif3N9u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N7rbTidUQ4GuoRXjWsACBCq7WK5nAKeW8M4BacKCW3CDk4YnihyvG7nc1sxsWNi5EXqgCghgcc4xAYo5yXRD6xF",
  "key1": "FA2Wz1zoPRQFtGEBTnr8HDE4nwx8ru9njNLFTyHQzq85oPnUGrvokCneKk8EqEMVZ3XuX692Ee9gpUN43M9KN5G",
  "key2": "3v4Vax8FkneA46PteRf8djgVbdmMCXco3AjuWwRAG5Gqxx9aygaMBGbENoqG5TpqF9Tap6tS5DXzQr2jXEzASFvs",
  "key3": "27TQqPvr59L1URFwrag4UPBMn122WFxxr3NHvrAfwPWnnAAdnRd9Hkjz6itEAHrPyx5mrQZtnXSYSF4DZSDku6qj",
  "key4": "64X8AaxaR4W4PyLnNPHPhoaQgbneGEPY2bKy6YazXntEA9kz7sSrYXtMr3AadR7xRsDpB1SPVioXW9R1kCkwyD4j",
  "key5": "3EwyiTiU9pv6MhVYJ6d6fcgAjxugrCArmAAzg1biK41Swvay7oDyxzqvTG2oyRBaKubVgr45uBfERk7RUhz5GUC",
  "key6": "3KhBMFyXcJ2SfGsiuKu1aA5XKZPd8SNXVghbc8GWL5HNk72eCfPhhwgo58qf7c459Zz44KeopK2NDUxWDorkXvut",
  "key7": "47ZvtGp7tJhQZZ2YUE5CeoEQ57wQoQQGYi9j7BffPZaXeFwb1iptPwwD5pohtrQiyGrdgKasnQ9jtAULyVrEeTEq",
  "key8": "4RVvsfHne6nH78wS5pEVrmpVB5ubsekGwDvpR7vfuKgo8L9L3WptaoXeJSrL1sdxLgjAyRDabTqXvEVVbUQ3gjTQ",
  "key9": "4cjv592KYkAkYH41JZSfMx7iFaDmAzWjCHAS9KhetiNbKHdepmouLyMvtUZ1u81rCfefsyZS7uBo5m3ujrFeZ9W8",
  "key10": "4rebphzeAePKjjXQYU6iLGWo5dfFZxrwh3TixEYg2KvSVntqNGfk7jGMEmFw5yjz9mMBjPAWDcGEb3DtzEnhN1yZ",
  "key11": "5KePKxB2Gwmg1JyZ1dcBSWroQAfGjMKDy82sh3rVjQAopKJ7LR3obD5naJtAxi2rT9zGyM64Fs4Nt2UzAzgHfcKN",
  "key12": "2iGgZSefSziKJjg1CVxamHzQ5cha2gcyerw3aZKuxiQeS6FyaCuCFmaNDwDQqEWvjJwSLGVUP3cysirBMWmFtsTD",
  "key13": "3bYd3nmqrpqicTgq2dsWTkhBr9i2Wgddjp4PEEStjfp5FdLExcR5UftzrQw2YTa8tw9hMNVFmWtgxDnJGoQDWLtX",
  "key14": "4Wmu2rti659qcutdegawmkv77bMuuvUn9CARA8kQPso1Dc1DipXkQxvRo9Uu9yDzbj8QUPRiP4v1YNHP7Ty3Pct3",
  "key15": "5GyXhTTSpKDVdy1AFsucSEcEUMk4C7bCdjWmSFoiesp2ZdcuRVZXdRWZdVfGKaeex3kZR6gPGwkQPkbDT4V6Ycs6",
  "key16": "4n2oEfobbL8NqEV52X6hgijQEitgXF3eWU7X7ahvDGeKpS8LC9Qsa6ZJtCmNDWxzY5WP971e6GLbxMPZvft7FmG5",
  "key17": "dBwUomnyu88UmuBmyvpAaxT62p7rDJNW5jiesh2QWFxZBWEau4RkGp6YEs33cJkYnLrpD6qV4ckxmKDXhvDEYSA",
  "key18": "3x5e7inWF61fQjtXMN5oHECDdMiTMFfkWi7ZZUiTQaNovcJ8HBrzKSThW1UTpSpzvAH2PeP3aSJszUfk9mBRhNMT",
  "key19": "4ephQp79BE6euLJvTrojKAsRv6ssJHQMSNCAY8iPCHAimKgNxiuAtTv524o5Zcv6rNxWohGTjKpYPPZQbSKmHcac",
  "key20": "4dYKL9LUKAPgbVcfFQLGSsCtdEZEKSAiN6fe9Ra2QBxokLQGtpbnkXNiP2XVYrgV2Q5eZBUYJpmreL9fAQiJCouX",
  "key21": "4ZrwRQ3wXiseiX5V65XxRzqcVCXDALvHGbuujCUoWufkr4E79SS6h46SVhKt55QaQR4U5ihZbX6qSaz5SQmeVAfr",
  "key22": "4YnzXFhdBLhR9r3uVXaKzw2AodUDPA2rsxa1wEUmfYYMwPvi4Bw2tewZk8efCArwnAnEKsSmJyGoQpJ3UeZYz2g5",
  "key23": "4XyRE2pwcnLtumVF6UDx3RBvjLzr3i4ATdSJ2zPaxLTHAAiA3FoWRpcE1HGwLFoE1oqF5xmGxi6UR4dUUV2Exad1",
  "key24": "2E5Vd7KiGC1N6whfDTENpx9M9VURPabF7CjYA71UhEbyf7yewP85v9XsDgE2rYHJH744jWUN9nb9LXmKgcT4zk5K",
  "key25": "cVigLKvu2omLtjrapomkk3PU9FM4uRbYz2DB93qBwNxA1CFGgWwdCk3dbYpYFtWRAJe4EeSR2xW94QuLWMbhdMy",
  "key26": "2rM8wvMYyjosvdSLGnYz1ssjMbkAqE3j8Wdyb7rAgxJRtrzNA4a7C1E3paYr38fSZNJNrdWxURC9Y6qa9f1W4z3Z",
  "key27": "3qm9jJXkJAi2amiMve3TYYqWFE6MHANahJrqA8PGg2asypm6eTy5te5DrndLt7yCeSEUFJKLXYFJbYomeZfPGmdk",
  "key28": "48xbipC3swbqUxtJUU6uC1FNQoJqroPG2yxPfs9ZbKiHEmccfEUAFHn4VFztwXLuD2mkXv3aPpMGb266BfnG2CeF",
  "key29": "uixbX8Aw1N5upE6y6Ljf7qsXqfHxWETT7rBPS5mCEC13jhPjMeTgmnLZQjTpLY9VrNhzWWA7ZPnx7YhHmjA3wWr",
  "key30": "g8B8yCFDgUdvfu4D15pDnFMyxesrFeraoZd5q4C1pPJuuk1JcVnVwjdNPGNGQ9oe4zVBNQ8r58vfcFoahbUBp2P",
  "key31": "439yjmUXZBKEV12TGmPoPgkTqtbabWxr86HCt19UkEhatY4xAiXrtZwXDtDNy6wwxedvxGzuL95Khta3rbWB9BNZ",
  "key32": "56NHs4WUFFmaccRCSUBr9Jcm8AHtPNPGvr8bvg3s2UJstngd6cRJEkekmJ4aTg6NZUbgv1sMxK1YMmRzXECCUtXN",
  "key33": "4w4nRcRv2zfm6kTErf6NW9WUKQq83YnB3Qav15xbyg67BMXxXRBtrRaVjvYYWzrECXADr7WT2UFq1PiT67gVGTJN",
  "key34": "44yhApx5KWRTy7HwXb765GQUkgVXT2oDTWWp9i1kqPMtNLy43ySErdfTJPi85jE53ZqNGXhENR9DRDF2EGQ1if1u",
  "key35": "5xUPXq7QAb2ANTzmyzhe4K1CyceFZpVCBZRZz42v2doiXuPRVPM5xnidYU9P1Wth45XCtaxdnuZj5yH59aF6kMz8",
  "key36": "656H4JmsZaDa6eHUAkj8hHEkYJ7qBsJ3TWShDsg5P8oqn6LGECqWkYW6gkxYUWhzCfpj7XsSrDTbzkxuowGtkGXa",
  "key37": "5im36kNzvtKoRQYYURvJZXmN9wcq86w4p67LGwXqSdtDnsx4fHw56C8cw3EMVT9FR8z6PxpwVKobi6JspfyCNSro",
  "key38": "4nZBBvUXT5qYTpG47EEp2q2Hx6ypvU55poTQH5UJZTpvTmtbEVih9ccMSojwsYxeAU2eH5Xg5uNCihC9nDP7h1iq",
  "key39": "5hkK6XTcSGcw7SEp4vUNpoKqaNcVRHgWXaQMNMaArRpmL3omxTDxJm96D2ZmA8o2myCPhxacJrWHLFHnt21X2643"
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
