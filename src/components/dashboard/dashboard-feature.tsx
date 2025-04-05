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
    "4d9tQuQPrvFMVGKRmDio9UBzQw1h5Aja6cTBWqtPirPzxcZ6A3pf1QpPQ7viywZyEjmqvDfUCZ4CRGCj2sENykDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "87ZkNMd1KRVQQBcf8PYM6cL23CqCoCPjqUdbW61BNmC7pTKAdwQSB249PcwKFrvNTMP23Hi8bSpyhpiXSax9AM1",
  "key1": "3WW9EXiKpJ7sC1bQ8EhkpzHBDETqq2pocMFXRJ5n6DQMetxMKpAVM6G6yKxPWWrR5wXmg5LwPYpRqS3Xn8UomC3s",
  "key2": "4XvAtxkRWHZDgkJZRcY3zHgSv1Ba95Hby8Qay1x2nAsVtWwrEFfLVpdfsQsD7dbaGsNdXbUH4iZDRSevXjvb32Ax",
  "key3": "82HkuhtuCNZMFbiVNGF2CSY8tXRGHKXtUy4KaZnMaE8MRAw9U9oTKbMu4cN72bs6KQBtYrDLTeXNHytmy6UqjWQ",
  "key4": "49ozMXnWjwtwzqZHAZT7Rkuv1eRP8budBENoxcQqYDzKKUAdL1dFxc1HzdMrFMuTX3ZvUbN2MxneijhDU2ZCizEq",
  "key5": "sWwjQA8yFwwPDYiYAGCJsPuog7HAq242tnnhRkmEqAcgtiZziSdn31nU6RZxhckE16wLq2fQ1PcxmvfwMaG8gUd",
  "key6": "4RxvvYb3Nf6MWpwM9MT8MZ6AhTtWnfbGvo7vQ2vKmQKzYd1pk5nq41iQ3abyJwCZBcJQxwtHRVVo4vKR7fBFEeTm",
  "key7": "5qQNaz2JnbaN6LnjT68ehXZBAZBsjdQpwVfjov36iUiWAZenYd7CEwVK4kbTcvULgbkMzwQeuKuDwCSST7gMBHCA",
  "key8": "4KAqBoNSc7vmEEyRvbHgJepXUJZ7gmfRwPVvzTWzLjxk7X5UK6ETV9137kcJtCBmRWR65LVxPmNxK8NuWLceXFmv",
  "key9": "hZBddfNz6nJKkXLrh2nZjUXECdfAvvyyH4rNn1gduvrdCGSR5xvxn1K52Qc25ChWjbpYiqRZNtFwAXyDvDrifRT",
  "key10": "3s8LTygx3GGrRfGcWyEdXZDo31avKkGuE8w1b6Q5U6bZyVtHywpM4yNhNvpJUBi3sVdbbwcppPGNSj6ie5GwkqRK",
  "key11": "4deKwp5i57xMvjDiq6ShcxARrfvqg9jQ8iNQe8ZYj5cAoDST6Tf92y6yHHcWKUVABuf7fmvBPLH87JNi3DA4yQaB",
  "key12": "34Sq7uHw8pNRCnkqdUARrFYaDpND8mv9hqYaCxJNnndx17eMpkMrboPygU1Q2rko5kq3CdZWLm5Gc8pqMzhjgazK",
  "key13": "3sJa5e5sA2kcX4ht8fugBVwABquQrpA32r7xg4yWSFrMeVWbiPqGsUWPjxih5SVi5maf3cKbuh3ZTLgoeRkmAUCp",
  "key14": "5FsJn5oVzTeRN9wJEnFYgpKDwhRMktWEUyXGveVPdJXxvWVPFkcDtmbXmKsCT4RYG6DA1kbCM12YyKKTcqKkhSgh",
  "key15": "SZ6XvReY8v8iTv1cL3XiXpYnrKdqioUjdUw11dfx4VxCCen8Dkey1trjdiEo59kJNjckKeEB9Uaf22RgSpmZRLJ",
  "key16": "5rF8BzFU7tRi3HSoA6TU7zKsAMfx2hCYBmpndAbo1hF7WhAjJgTjATsSvM1gZA9dJWP68sMvC4U3YrcYyrXoGrY2",
  "key17": "3HRnAMqFt3kXJMUN1XqyUP4t8jpJZPryBiAjM3Ko1eFwTKJJZfFod4LnWnSeVQrvcyvcAy1jB9TAkz5hQiXDSkxm",
  "key18": "49yssQAT1pzYWxvcxacsKx3aMnDQRGQGh1dDhuETvxVTwVX5B6QczHkaoDgEVNiSLrseyYNTooKHWLDGEpXjJfJD",
  "key19": "25NoJRzTAt7cxsDd2FFcpj4xFLZPzRRPuYsCVSEBuW5r7Zi45biJB93H4HiH3e8Hvaor1yKwPpEGvdpzUW746gXB",
  "key20": "4HijZk43tV79C1juT1o7cYqVbPCrN4nox3nZHibRqPRaXZq6vVBcWJQd1GVS89nXBTcco7Cie9n5LXT4ArC8eoE8",
  "key21": "pkEhgBqjb9vtweRtrtXeZ9sgRJu8ETz19Hfrp9CrfVmViaPSD6SNqpxmG4JgXwAnN8KN66TrxsN4GNY6Rgjdp8Q",
  "key22": "DFCZgvNvLWF2STswCSiy51u7HetmTvZRMMEQYNCoA779ZY1wykbEBD61mNsE5J8uWk7yT2BepzTN6GWkETtRFC1",
  "key23": "2pu7EGGFCcKjFwg7KY2RD7yomRXsgCKmdwqo6CwQZ6cyHLbWGTvy1SMcFvT5gXcDTnpC2w4pTYuViPnTQ6Fv5W3A",
  "key24": "Mku62wQjHxNrc8acLpu9d77oaynTvLgpsXtxyUYitQPUFxPqB8Hct1deCkWEcuhGxG13tzNrRwqnqQxbZMaQLm2",
  "key25": "2w8Qar8BJeZ9UTiFRRXgg83y4eUaYwTSKFz8KYAoHuS3opYxBWUfp5eVDMB6c8wV1vvTmt3rSwkBYVbJUXh6Ddnv",
  "key26": "62YD93sYKjodAdFYyuzfUYdJtVehpwJDVvDNbJCrEz1dGa7uktriMnUpMEYs3orZMDd75wx9oMn5rXAYnK8dYvor",
  "key27": "4MZe3jLu2RjEijZdBpWcefcCFiEafxNTKNBLXFThu175czxvDdXg1uaxinNRS7j1rnMKbJtjswQPdqcyKexpsFCy",
  "key28": "3LQfL1mN4VJy1WM5dcoqegrGD2nehNP9kCn5SR8Q2ZWp2KrYR2tVDgQgauhhw4feCD2ZWgQSPbtZCcUzjBbS9fwK",
  "key29": "NSFp3wQiGKh5daAQj3sPWjH8Pa5DQe48uAcuBYBUamraEEGBDk3d9vVvKoTWMPZwudosM9vRQfteM8BV2s4ZaUS",
  "key30": "443bDPRoWPzLykSmQzGn9CQVqHH3iC7gws2UGF5HqMfA3EE3Co9pNe1ZzhcbRvtQ9WTfdofR8n3Zdg5Eov3uoZna",
  "key31": "36wX8wGqAUS2kB2B11oYX4bNRZ5GSJDQSpudnK2ZJMUzbu976JihPgDSUkb2nX6HyKvTvruwP9R7PDWDVLxAsLAY",
  "key32": "5i2G3BZWQrLRPdY5k3oQEUmRnVe1qFh6ERjF9bPjwnXZsEeZgmzSmMdNGSnFyG9X5BhRH9GPNiYQoLhyHcgGsX4B",
  "key33": "45vVebcitGdjTpLc4gthSUt2dp4uf9RQ63ktCmEBscUgRoMJu9NQsaXBqL4T7VmkLYzJkW1X77t5e7wpb1aRUK9h",
  "key34": "5HY8oVcM19QUSKP9kGtRT55oeAAuKVpRRkzuwwQC6mBMWLipn3F6DsNDiC2DVr5ALT4r5xTti2LHoZFDACZVyoeX",
  "key35": "2jhLFqtEa12XsZWiUbuBC1UWKDv9rEbxsQvFa4MaV1hcHRYkyGMNG2QKKZMWcC4Whn6GvU4frL5FgprsJNgcLn4G",
  "key36": "FBUXxxsWNL73DemPYaANacbjtLDPjo8oyE7J2PEMhGaiUDNd6qMhYeJJ3Qu3EU4kKPTyUPirdrLgwRH1oKHkgtQ",
  "key37": "i8BSGqbG9YpoiRwug9dtZW3bgYimvm5x3UbrXdr2FpZG72FztcGhTyxFDAHkq8EbG71zTu4x2dY5LhLaSChJYwz",
  "key38": "2vCgiVwvprsXZPo29s5zDYRGFzo8Bc4tTS5nQPhSQzz5XZMK2zUHqEWNjN71Vr12XfVwi5FPwVT34dsfw6bYVxoP",
  "key39": "5AGFUKGqF3tVSZBDZAFZWSMiG7q5FEL74hWLGVYqmCZNa7PpkVovFcT8k8Lokph2i9QhFjjaoA1fJcyVxFFRNEzk",
  "key40": "5zSa79WAVuGBjkZNUZkasMCPD9se4L81NiziLKtJK2mrEHcX1YepxfTMhp5Qgo1yE13reW8CG93h4btAGJsV5rZT",
  "key41": "3zdFhQd7ZB32TfJjqx7H8jxrexXxy8M7tBJfSu7LTYUH3q8Bm51A5GFsPVUbXYJPJFDmHiH8UfCKoNoRAj44Pna5",
  "key42": "2jy2xivzXL9UFruhKSAtjETSgf5hQWT56odfGxKjqW5obWa9LUrjW2YYfRrZ4kiyXfzu4U2h9rnRqeEMuSKMySft",
  "key43": "5TnDF1PZC9GFdhe9FvRs5LF4gTGYTjsxGCDRjJryzENUJ55AxSRkSdtHfzM2oEeMEiHE9YrAPKSGsNnYqEmqw5Rq",
  "key44": "4kPE6zCodL4PEoCuLo5fm24pwefzz6DaNdeA44tqnDUaWKtbyscTpgKJuq8kTMUc9PSj1szEHgr6dqBduA5tRivL"
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
