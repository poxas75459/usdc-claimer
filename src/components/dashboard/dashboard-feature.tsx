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
    "37zf9BDYV2vbTDvPTh2PJiE9gfPUP8pkhAWDMmwWoUFYbebmELPZwr6TE6oJzThzx2wH8xWnhzyb7ZzDaPeXrMp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkcgNFm5CzcHpcmzNPJvrW1s8E4UU3jci8Z2GEA9FtWcfDing2Si3NMQ5jSEjQdE6JYcd3wg52Ufc4hTH7PgvHj",
  "key1": "9fh2ND73TPkWV7CHkncBG1PhAhk3gtPCYkdSHgmyyBpof8pQ6qJFHiEG58ZHNyT21NKciutYSnLjhDVyzBo12A7",
  "key2": "5rhrQQzeEactc8NodUNUcH1HYACLYMGDZHNHTErJdLeawyS16kbKLDw9NnkVqX4MLNPBZ2JPcTuP2jLtXm3W2BxT",
  "key3": "3usN5R66YgdiS4cAsckCCM6iG5HAGvAS2oyWGuFADEwoeZ7Dp2nEwYsQAkdx53hQVshx5sCXZJdi9h7iDMq5siLk",
  "key4": "3PwELAJ3QGfZJFFona4fUUBHtNVExERYjTkMgZUpV3DAKNenBV5qNHSUVUkjm6DRn12fvkNyPvPZf59G21nRy72U",
  "key5": "NQDFyGRfv3BjM9rVzeHxEd2a7NFBX5rAajHMrgZmGGYDnJSyPGcSi9WygQ1XrApThQTM4biuGomBgXvV1RqrWmz",
  "key6": "5DLvB3rRfzmwvpJvadZ96ZFeymNcchdh7WvuvCd1b3DoLcnrneyd4Q7BpCA3p9MYWskXaiSEaMFUh8wtbLPqdpsa",
  "key7": "5XYgUtwFYMCuYRgyvKiwaEBB23wQLKkuULhe6Y29Q6sptZAAqEVYaKquLkFVmh4cbwD5chJ6XDdFr6drsKJobmRz",
  "key8": "4Ru3tLt6HQHihvpfQAEmWxozYrW8E1L6au4UKxpzG3tkqCyTMSBL6dqtx2SAJxASTK7dDnk2qWmRpjSa6qQsmcjx",
  "key9": "8ZffagUN423USNb5MnhJL2jE59JtnZ2Kfood4rT9mzoxibp7V6Z2uVyNDbErjdRunfqcKXd6Ge48A9oGEoeKdmU",
  "key10": "3RoH5BsreTsRLE1f2Qorf6jLn23LfVRpnw9umLgCbXa5pVz2SQPjUhC6jQ3sqnLeQwBfvC1TH44BRvSHAchfX2Qr",
  "key11": "4ejU6yGotFp1i56jG8prVjkgQAk5W2oTGfwHUfevPhz1um8CJrvVK9RwRaRz6d7qAEAgCVmocPoU74p9p66Tp7eb",
  "key12": "5Mc8aC1BEsSC38CoU8KgUXrJS5ye7iNLUPBFkmY6TDFpZvrZ1hh7ByPkyTkTtt7bMGDSBThyjdxX6djLdmvd2Z95",
  "key13": "5JhZSX9QhesUjys3TPQ7B8C46a1Ei7xaFTuiKeJEwk9MuCAMEYNofdWTRihyayNjTFGA1vPfcfNTjgY6qGxoXsuS",
  "key14": "5rS3HMLiCuQ1RWijoiQztYE1M2CpYVW2HV7eQd2jiXWMVxP1qudhBiVJ9ySVSDMyNs5Gg9S4ThP1Pf9dH5Ynv4zs",
  "key15": "5EZsEyVWQopFTM7Xaf86D91xm58p7pyTucGidV5J4QKuwJZM8tkaR2JuTgFm2Xk4Q7PjWWNfa73QwdxXo8LMy5b4",
  "key16": "53MEVEdT2VxbqrTUovHnKDuFZmswdqbFBe2S3UyLc23Te8JwZHon2zcRJj8VVJCQL6UvtF978Zpryq6Cff2ms2PN",
  "key17": "5YQixpC5gH4YBs1iD1PpPpNLgLWD25Gxv1wBcCnPTfcwgJwZmMRoN1wYR9tSSqSHnZWeB5sRf1iCgtSKrb8GZSkk",
  "key18": "3pGHmg6jFFN8LGMU2Mb8BuQY1EMpTycFvvW8TFhUGtvTYikhaKrKmGtY7H4T2irGqZEmT9eP9m8Bq5xeVZZKqzck",
  "key19": "4pLgiND625wDeXoWCXYSm7Ac9iqRbJbUpvzpar68Y1n81dUzNVrZLgKfHewHm7gm6EphSyPZKWWjdMtokuK5GQaH",
  "key20": "3bwPHtxbw5RHbXNYdAmxBwSMLrg8mLwGYcKjjroiFry1NfGvhA4tBcvMs2Abdp3mA84JaxU96ndMdjSh3djpVVLm",
  "key21": "4SU27KCTXwgk5eqhX4yHszRnBD6ytfkBkBze6vhEmMW1RSdLHukgQWGYPkc8zFYfWfMDcHQkWuLNqNXXwbBRJ5sV",
  "key22": "LubCi7GMLX9Kfu1gqh8GSt4xCKSk49ugVKJf9iBaj7jG6MDmrfz3hBSrhW4V2cGd1o6cSSrHvZX5MHYxAQvXsbr",
  "key23": "2L3XfPuJMY9YUt9WdeLezwTRNhFH3RReqF75xFhsoTpBVpYxj6RrjEEmzZKRVn3FLM8fMCufe3C547kdJNpPZSSc",
  "key24": "3Mxmgu7nkdPV6iK45PujJWscXBJmRKPEQ6tML2fhdtuot5NF73yqRkkUQS64YezitUokU79zRUBjGmyb222PF4pv",
  "key25": "588d1j1PFzDWWU99fmKbM41JrxJ5prGipXUD4hokzsjY5J5uP533orUkxvqoR3zv9T771DCYbiTCA6LrKNWHXtG4",
  "key26": "2rcBf2BEd6Cgth6mivXBP28jD7CSwkAiqXWoCboMd83RbtBYYuvSUNue7upFvewycub8DDE9GiXtLAcwrU2oRE63",
  "key27": "5V31SppRU5W3Rhp7MoKXDRHzZRCNPbavaFmZXTopMFgQmJ1dMQQPao5sYf7bA4gMkh7wGAavNZmjD9kQUiTG69iH",
  "key28": "UKsJqMUUgzMgjws2YDUnH4oXk9DawVCptrs7aGtCamMp7QM527rHbxxr8RYXfYomL5ojEPGQ7R4mo4GXCT6f7j4",
  "key29": "VbftTsQNAs4y9uHFEEfPNucLd9gPPseamN7tBRAbErc8PbWavNm5ZHmtthhNUyWZu2vyaV9S76QZ3CryaMSu6VP",
  "key30": "PJXeTNo6N3YUBp3hty9ZXVHxn6a5xhdwmtB9WiDyrV87ToJPt5Xcgj8oJvPa1RVSDnDhKKiCquK3zs5WW8eGgHf",
  "key31": "5tHRVmGvsjX5Vpca6eCd7HALzX7DhLJ86TyAqkDewJZzkeRMSpoZmJQ9cZPjkJHYwrsAMEgxgbKVo8zkUJnrpikr",
  "key32": "2RXMCfs99yu4KvADqoRXjrMvy6pkDCJ2h6XTYX7Mds3P66TeUy3STwZUGZRBxsL2waRogdLmEyWgNpHGA1Lv52mC",
  "key33": "21HYakMqtfMvMEkb2LQ3z1u2JX2schVyNXCPNASY4YtBWn6CbqoS5xekUrM71aBq62neTeth4EV3A1YCvKBV8kuK",
  "key34": "4jUaykaiPxFhjn8Z6Mp7CNrK15xFWUzBpvqnwhV4WipCiZWGpQcMm9Yyk2jBzfu3VfbpiGxK8JY6Bbdb5TJf9BTT",
  "key35": "5Wwx9kUEAZkG3CdPtAwZh3E8GCAKZc2BnDK1M9soyDfbagrWQReu6ic54b4ditPhhYUFqLNyqH9vPxUazTaveX6C",
  "key36": "3qmn89n2tKovcuUAn656DhDQitCD9GwtGRQpTw7QaZSkzjcMkrR8hA8yKD3s9RTYtWpjGgYX6StdL1sCr9HgeQP8",
  "key37": "2weFuVaHqgsWYEJi75jjL9CxzizaCT6MX4yH5wHujFL7jwZQ1qccCmZ6haESDGefwaoT7vdfiynpKBXCX4q1hnWi",
  "key38": "3fkXugy7SC1EcpvxCTYmScLyRZibpMYUrNbZfRnSD2aiegfhEJZScyvnP85ke6VHZRphAjB3K6dAAYMCMNVyfTv1",
  "key39": "5N5k5xytL92wdvMfvjdH5WLkksDS14iHxGJyUCDuk4YNpKU2jYw1GgyFxpFHzpTfbfTvmdMWSCzmn876a43KSYND",
  "key40": "5g4J1jHCPfHRwC2Vyqpw485zb7T5c8DpXQrFmpaQLKCt5j6cahEfpdNSiyboz3tVan3nS8oPTyFQTNTGHyXc35Sc"
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
