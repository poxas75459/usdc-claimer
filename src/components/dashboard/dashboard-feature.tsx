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
    "23TZJ5QC44qXwEio5itkw57RNTsD8HFvPRE7691gXRSA5YnDe6q5fFhDSR9mAETJGQwyHMW5yTmuK2CFTu5VtjjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgV89X8VSmcqwDXEEcWNTiUQ5oZ1zfG5Enqw1y5hQGEYZKDyJEQBJTS45qwkHVSTiWCfsg9UCVQu5tuWxQtuNuH",
  "key1": "e9joXVHknQ8NnMrfZFx2mznmNzGELTAjFWgU8cr6US1Y3LHb1tVwQqSxV1uAfcWV8gxqkif7rzprtQHb9JMwfyB",
  "key2": "CbgZE4Z4ZmiTVisvhW5TbEXat3vcu6UHGJCxh3BqCHh9q5UawBMJwDKr3uSLyCwjsjutgmBFqXcsSujsvdkeoaR",
  "key3": "5a5KYp3kYREGg1W6kqTJqv26jsvGhsqN6Pv1oEEst2WYsm8PCARSmbSPRG1joW2EseJ6RavcPnS8qe4vq8G5QQZ4",
  "key4": "HD228S4eRDdrFA3Xwpu4hNJvvTxz3hWRJsB8GU5iXPqWGrcFPjB29zc8gzwZp3eBCW18eVUA21miz3SRZGCCE7z",
  "key5": "34ybxBTY9r49hoi8YHgd9tQZPhPFaUA1ekrpUoAoBtGjULKCGAXrYfKiCLH6cqZs1kLoosdeg3BB3Db29Sc22GYC",
  "key6": "2mGsZ1ULgeHrt75GPHaGKvmBCVVshq6naPsAmPXGc2qwWL4ncTPmBASNoThr8NW95aKh95QupBDRLTFA32kWvH7e",
  "key7": "3g2zQ4DKf6GyNsxVwUsm8gYHj19QvG7bqvPP7YXmA8GSj7eVKFUxESqrnqSVVh9qH89gUhPRCEKfwiMsWB8H3PPV",
  "key8": "32KZviqCFtFj5Fzh6wiNK4g7yVU2tYjrjYEni6xuhKRfUi3zLvFXt7oKVW1u66BmEs3wM3cD44sxvYRuRMci2Miw",
  "key9": "3ZXrUna9QaV72fjaCZVb6cEbNFc8CEuqmArK94BEnBYhgvwxnAfpqDJAyUY5wMeiqZr1W52V1bW38s59k5H171PF",
  "key10": "5qKDGhLPP7RExXBUKmG7cVrPEaxRwxw394WHcPNYAq88a3VGP9T9YCmuiULH2m3nC8pFCtBZsxFgVu7EWPcsyy3Y",
  "key11": "z5sSyD6SbkHFPMttUM34Nf8MgZNxcm5e6VjKhEgwfnmxSUAV3nt12xnWu1GvTku8qBfr8eVFLKa6JbxNjpUhcUU",
  "key12": "9RSHg1S2NrbFEoxhFuZxzxXgAkzCBeWcPmSQJrsr85vJxQHgm3A7hioGnb1ZdxsQkYiH59QFRAEv3pzygArwKyu",
  "key13": "5pz9cmjsHhD7z3XDkcKsYjRdgC5WWUvktayEYyk2ZmUePWU87wCperAnAjGFfX1d4Lrj7iTtgVxCZFBCMKBhbCUQ",
  "key14": "4QjxxHsyZux1uKL31rtWCaNE9scRHksGhdLSjWMoSLd9RktJP3EZdKyChMN23mYsW7eTrHvap8wDHuUpvqWJP5up",
  "key15": "2cH8WYXRCsp5EYPAMKioSpXx2EQzoRxRv9C5qMDM1iBFctJYZxTzzjCLZcoYpcMMm3uJc1TL4f5UbUjX1YVqbJdc",
  "key16": "5DEexJu1KV5zYiHJ2T6JfX58PKEk2y51q4Wa14LVvpSEUWini1XpVUPSxTEwe8MwNAS2oQpH4AkUXWmQ6arCgqE",
  "key17": "4JAxFamiRKta2kaVy62AMypCDgsbZkNcm7R21UojpwhpN439ZB9mCWVhABMLz7gWL5q7FSELjhqnR4Pxc4W8LuJL",
  "key18": "2DXkfQCyeWuTy4NrR866AckFRcd8zVLeyf8m3AbBwnXQD4juiMq5s2U2HAYiGzCcXYkHkFanHb8AaSN15tSYJbHh",
  "key19": "4XCy2A6DuCdtFyhReZ6YsBkBJAXknzH5PYo3goDDp3pLhzQX5Jy1QVZCt2B55FZZb98xNSicDA8DAK2WkQHoPU3G",
  "key20": "fmfnS2ERHK9MQsZtzR7wE84rj6XPPgmku9euuSVpDpB6ZqfsCECKBQPL431uVcaxB9ef8DoRA9nhDgCthYjE7di",
  "key21": "4SAKdpC8whMdju6sG8fhRWRX8Z4W8AN3P3xWojcRf8TFhRRso2gJAmt6mCb5DbzA1eAb6Bfb49dDCtzUjr6cUgot",
  "key22": "4DNnXRJgRAWkb9Fwj3fkjtMxMjrdVnD1ywkfQNWvhd5uFgGY7ZAtsAS2f8Vpb4g1k1ZsmRmAWAs2epxQ3Go3XQvt",
  "key23": "4eRxy5MRkbPZDkTofmVAn9FscDBSbVgEk1BSQr6RJQsE7f1eCREjazkUsPJwnBkqFH3x47vt8Ty6yYh79Swueuw4",
  "key24": "24tHqwdXFsTmCME3fUrR58251ZN6pk6JVYVLfaCqkPSvF28BWsatj6pRLuSWeXYAyEi3fR773b7yEYYSUFHrQHr3",
  "key25": "4dLmE2D2NdVrqkZTmoEVT9CdPqF4rwXJJcwupjdE1aW1CX3yT15VY5LNZc766Go6HYyn4p7aKMFhFnLsCfcipo9x",
  "key26": "5JR3fp9XhDWMycndtmtGCkj8zTAHBLbgPbc41E4i4T2opWDEi9KodJ1tU9yhVvP8CpqC7upbE683koZrCP1vASZu",
  "key27": "2Q5zdJm8dHrXRMUTefpYN8ty2mU9mcNWfbsL3b1aVtZ5jewPcQp8WtEwepNTRyTyHx7tWaxTCQ5ikqsahXGHr68U",
  "key28": "5wQPYYLx7fSxgmNyPrTjvyA1a7U3CACttALywzXnuzmi1k14A59bp7gyNQGcrtP7Xeekaqo4U38vNzrNhC8BFJGq",
  "key29": "5eTGDDsNaCGmfxum81ao2usLjd8LHRMGd7rUs8NMbUbUg3pksNHK943wn7KwbL4UEQ364JG6uNXC8ZQv91V33H7h",
  "key30": "219SXhGRmpmtgzfRpa5iJm7GqsGvCqFbcZRHXF2WneJUetncK4a4vWqPmjVrX4VeXwrXen4rJE1otx2xrAznPXDU",
  "key31": "5yzNtLZgdLHxSXk2aucH3SJWDuZBzGvb55LsBqxvg3bejRgGEWXfbQHWUYtrpcwpESkLA4yVeQqJgNkpHK7zVL9E",
  "key32": "62gdbbXog3J1BbmZvfbjw5sWmRLYAVR7niBkx4Ty6Am549vAW5sAXN9iXJknz8T4Rs6EC83mYBGVRkncCTzG3FjY",
  "key33": "2FB3egTAKN7VwqPS7debMSFfZRmTcjdEUzmYzED5VD6cgAEPUDgQ4npqGGj5JFL9gLDMpnQ6DrSWbobXaWAHVNPP",
  "key34": "Eu4UcpBtEiyJ2piRWD3cnnzfWquNTdfzBLvViEjtwjArdT5VfLv8spFSvnCazpttHakeMChqzLYh3B67CQpLPei",
  "key35": "2YLzHwRUQD4Z7yye31cqzTsGNsK2SBrequZ5dFNm4tKy7tNRxsZWgamehjzTiZDfDMysjXNSdgbbgixHA13uff9G",
  "key36": "2oyaTsYo37sg5XYEJq8UWPpMSHo8B8KvpkiCXLRTAhGdR6ArKydaUb6pV7Ndxo3qAs9wMDiyQpz3Xmxu1APZYwTg",
  "key37": "4oP15VPw3gsxAM4Ly2GoMrS8xBy8YT5RzD4VZ6khjAiScMoX2oEt7252fmT6yKkjnhuV9xS5JviTf39irnBjyhYw",
  "key38": "8DDvgwvGf7CWWHBL8vfe8BTjUmkfNCeMhanUFf4ZTWTVnK6a45ueNyWfAWLbyBr3LrEVc4qmRjS79AVvmYMsM9C",
  "key39": "4rHsM7DhwhLsKxr5Xwd8yXFGK1EjoZfdULavsnkDtinMM8Bzt2aTo8AsqW25UQMbqzTj6zWSyf3EsbrJYooA7dSZ",
  "key40": "Y5kzxeV5cPY3xKzqt3jeyG3M4m4H2xsAt1VmWqFgijWptUbYSCQoJMYME6jy6Cgje3pt2Vwq4ckazkjkiaET5Nr",
  "key41": "Ykj3XbYm7TtJZSbzT4mUzvUfNS5NSc425pbxro5sZ9VjFWs5dagqfZYUpx2Y6mUNTU1GwgDbQf7CAYjPi1eVwyU",
  "key42": "2kSaNeZyG9wAvHTYLT5QsP7xiNSkYJeHusWhF1KqM6Tag85U2wHBY2Noe1h14LmbpDnXtRghQYPqqWjQhMfZ1eVQ",
  "key43": "3ZeYLoRFX4AYpaRRQqLekyZELwCBDywC3JcVwdhs4sk7A47YV5nnmsydpLW95dPFonHhFUSjN6vsadC2bhbqsuyh",
  "key44": "5Gs6jjFeGn2oM8BdHPg3ynfLsmyUKnZZcMvpRh5CCRyfMWQzaZKSiEZYf3iVpCpx76uWYfKorMBJgMSa9xXtn4kT",
  "key45": "5VWBmJ4nhott73em6ruc2JhuumkX3DgANHbcZCKSEbPgt9qjS5v9ALoZwb2vBYooBepEu9iLs1A6s7p8FK7fEaQB"
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
