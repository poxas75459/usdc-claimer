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
    "mzxu5khtLQtyG2VLBAKNacJRTHx6nZ5Dv3gurAPFZVbDE5YNA7D1MFCUqpYFwoHpXqGZVBbPpeyQyZABAp7E9RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ViJ1cMPjsnbwkDYpszhTwPwM1sYkaMvuEyi9Zj2iRktUSfq9UYQnpScW13175fULuj2QQDs2zhsKB8fXFjRB994",
  "key1": "25CZ9uyhaTZTSv824bnFhe1b5U4BMsVUawVXZVR8X8SHpUVFtCpL2yEQDXg3m6QRKFzJsthxwZxfy9wizCrEsb69",
  "key2": "5kw3XFyBz45aj7cmVyBwSHCxmGXcd2kVNQ84cS44afhF632eknezfTDe3AtxMLWz85ytLT8PJpAj8wLoHwxNHYRR",
  "key3": "BH64isvJrmjuyi7Xyi9qF8oDwVfBmdWpXAQGBEA1ogNM6CJ5kFoWMjhL4mQFFwXtCLDCTdfHpzBo3M9zstUdfib",
  "key4": "64nQ6Hob7Uqgu5dn5XnZn1xX7WWsZUPjcfPbbDJSAaNpqZ2wbraNDHWzP48YCv4XA9GErph2QRXDJXik54DW8THE",
  "key5": "2vhUQCVmpzqt6mArUdNFN7TgR25ktof7qpq9fECpe1uJcVMi9pLAKReF1sNB3yMo21bSkvkTdwxqvq1XfKtJaM9W",
  "key6": "4AreYqogB4fsmPrH61Qe8wqrt53dC2N9nbhfowp2QwZXaxRFfbdrV1KcNxVnR9TKhQ3uEDrZoxfCbZvYVYCG4TSM",
  "key7": "2zLSNVdnDqDcJUPZThuKMNrj5vQbEcnGHJiVuqaKvpYTUrqMiR4ubi7ty4idgme3riRwQp85puene3ttq96JG5QA",
  "key8": "BTZkJopCv165HLArta2ubGHCnf2rHRb2ee2sbgXwi3sWaFoGXU48yxTbJrZagVfbHg6cCv7e12nTzUg6UsZekof",
  "key9": "3jVGoF1HckSR4U77EWC6KfDQ7j3Yn7VbWDHDQKJDMkbUiPZRra5Pvv3kDL9HXtm3KWyjQuswE6V34n2ifqfJdXEu",
  "key10": "5qMzH8iNMtZWM6TcDsyEJVXwJk7AQdx3Ej4GgXgaNXYWXQeEHVdPQMu24duMcwYywybG6z9vCsheTNW1uqX5VL2X",
  "key11": "4dCdP7xEEJLJbcdPtYZRQ3WWpNiqqXfBw9bJhm2fht5PHCspaPFUa9TfFqjX6zURuYWyDveZrCwxCgtEkfdCLsEF",
  "key12": "4dzJDRvxB9kXVTy3F111irpLXWvNqZMRcryzcXw8qbWnQBBWN7ZkJwvqB6Cg5fhEjqb31wHWdEZjKXqjNNH5QK2y",
  "key13": "5qme7Wvt7y4GT1UdmxwTgyaj1STMD21ieYJjPKjZSeDwrUvu5tWarWacAtk1Z8meu5woiPiXnJp2gmPSgkXgkUsG",
  "key14": "acdc4gSyu1nD5GJykuLnpo1DgYkW1JUy2Gc3usqiNsGtuof4tNRZxxzjv4LJN6tH4ZUgQjYZhiR9wFcEf2AZj3Q",
  "key15": "51wgg6W6uFhnfoAJcTaqou6KJwQMABkzdfmDR1hkjenMSXZkdYjBCaWanPwUMihR7ja4LCKu6M3razGeqUindMY9",
  "key16": "2ctZvjFtKeNnWinW7B8uVnV5MAtNuh4c2HnBjSF94Yv3HTLT9WdkszKpqiCNjsayA58EhgioMvb4sEVGYP28J61H",
  "key17": "4zFWPrRw9n9ibtPBKEHPH9Wpssor2C53DQiLXLozAjt3AwuD7qYiaMxvDLY4Fbt1fJMssoh3zvzTzsHJj5gGiyAN",
  "key18": "5hGQ27VFnXkpWriS1yKLyE3oFTYoSqhFEzRY9BM7TpSiwxQtCuQ16HCGuNBqqhmuq6wDiWBXSttmUMw6s3G4o6XP",
  "key19": "4v2oLwtbj6NwJgSv3zAfLeHN4S8NnPuR6dDTvntB4CeTkX35LgDbRuPPSzDjN4uvrg2HfeLnnkjdzUmfVJH7hBrJ",
  "key20": "2WT7Rgvd2QE92614qmG5c4vEUmRAHar3ZA3zedCXFxBttB21SSpCTjntLzrzNTEWNQzCE1GK5FBo4fRTTsMZ78Td",
  "key21": "YFPoLiazFkq9LqHpBpvd7BnZpk9umnq1NV3UPRdDdyQkTA3A4sWoSFv1UX8n5TKeXHcwbCggqYsNbrcsAUaLZAp",
  "key22": "2ay8yp1YVvWjoYiNbRxncPeebkWhf2jKRjmkHPEg9WA9ZZUEJdbnSc1FstueKgyhwX2P45jV4Lk21muhYqA3ri2L",
  "key23": "4UpFDCEFTU7NhCmkUjYAtfDnBpHzbtFcAY2hrbLAvw34NKeuEjMUUZeUQt1Fz8NuVrqG6CXcKAmQ2iMcdDKkvzLu",
  "key24": "2rnxKvDLv5ceCd2dE4xvJBberEhuWdGGM7c7KSMqpvMmHCxXuS9D8kn9fQ288qQdnYq6CKmCxibRc5mkvhseLKyx",
  "key25": "3VixrHkzunXTV9N5KJwy6hyyCXJchpaxf7orLgAxK5CPbJ6n5hi9jUyvs71LDKRRvSvyd27Bu8NWN9D9jYEaXyMn",
  "key26": "29a1izz2BFCQ3YwCd7kwLrb8vMapvn9pK4Ns11c6GU682nBaZ9deTbYM38YtsmUnd1f2opr6dVmPJfKUypktZbhi",
  "key27": "21mJyACNQjP74gWQQXcChxWWokNkj8EMQnXPWVNzaZ3JtYEQ7CK75x5ktutGeELyDvFBdFetk1G65Cwr27RsWf1C",
  "key28": "WGNwYg2sX5dwKZBeFH8pqPYaB8aqmSjtZBjXbJkpSnVqLtG28JydcS5yfAJqS2jwiXp46efVGqhayneef39jMoR",
  "key29": "466Eu18nfvUhfsBTE3yKMm8TzE63B9Q9abTYdxn51pej1R9Zp1Yq1RPC9un2nADuQHVYDUj9pnEa49jF7tP4u2iF",
  "key30": "3d2uHGGt5LZizsYEcGozYQLPR661PrA7j95xhEtHAxgxp5fZWbzW8ftgjmpCjUdRj7F9Brukx5EvEQGDJmuqTQ2t",
  "key31": "GAbd3KNuDArT4LPSXfPg7ZTFwEpXrShY4mcN9rPavhMVSgjEzeRkbB7j9JFTaxNRVZA62EuMSbCCzz82F6ooK2a",
  "key32": "2vq9wRFtNpuAaWCF9VcwQn1Hey2sAZEg79jvCMDTA39Qs9xozakRmT6Je1W58r3W5HX3Zh4ZvtQxk52QD9txyLj2",
  "key33": "DTFvC8DpEngSoZHgiPcMQizDNHLLHSM78gXvXahJhCBSezjQpBsiuCbLpWQd1C2cYQu3PMhxjnvCHtA3wdyn7ks",
  "key34": "8qegMq6JQxvUGqyXKAy2m92Gg4Vj2LVfjygdxc8jWwcjvYxoxJPhb6FvDL3DGrZGE1nz6kaDKEA1AmoVpjAYUoJ",
  "key35": "5DPbUZBU6QfsVUaLqLLnuqEnSb6Nt3BFp1TGvFaWB47uh2uFsP9v3MjdpjUp6KWj3FE9yc1S9725bYE7upoWFJVN",
  "key36": "2u2FW9UfAi3Pf9Gqfh1kiTrQ2Cmxqvm1daWWGasgDZ1RyWSuQPeB31RMAeBBfH65LpeAMc5zC2WhLuuhj2nAuxBW",
  "key37": "4ryEnA41CPB5iKu11wewtXHCXRQqDq6nSMa5DUF6ZuvE4hQAjhpZngzN816emjAShHFekD8WpKfXELAKzEg7jaQE"
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
