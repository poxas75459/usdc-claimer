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
    "4XyX6YqwV9wuK4GciFSCSNbGS7Qxsx3HGcQdJzt3fEudBMP45PcmQpbt9gNmepGyrMBju45ERmYjA4KRERcZ5hxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SoyyeFppxB2AqLCa8pMMtR9bqdyoY2oVbyWJZqrW4G6Xr1zESuHEFHZv9E4fR6JRmeMoJLjhYPikw7o2VMCYBg",
  "key1": "5paenX6gG3RczEUi6rhfrvr9j7sNuf8hRpmQ6rJfEBpfhYjJPfmFcq51pTw4KsCJhZRkVEwvVmRNThyUC1A5U7qr",
  "key2": "2LPbv1E68wCwLHjXn4H79Le5rXM8Y2jNMXCwpFpG3CG8gEnKgsyHE5p8vAYkYfpWQr3FkBFX6pDrCD4tWDTXJWKQ",
  "key3": "5AsSeoM55xvqrLMeuwDQxQ8iTcXJEFQpGoPy9HW7ctLJ8Nq8uEzynEbET9kmZWzwnjmiRXEJButc9wHjQeL5XgAs",
  "key4": "59bm7oHvSj7PMTadpBTig1Mr4ynguCKsng3vxwFbJfqrjLyGvGzSTuFHZpH21opCtJEdyEcKZYcBQ9De1Xcx3iSd",
  "key5": "3zpVJoxYLRXrwomfNz3L1cTNtfL6HcxJJe9dUuHNWDyLq3y9QnTBEkC84jzAhPHihXmWUuf75w6CZTCZ7fa8Yv1Q",
  "key6": "5TiJa4CJAzmVitneg32TFk4Kg2v3sEqh8FyqPwnPWQY1T4SvFUaQ4umG9PJEjtyZkhHjvkbPtfGKz4jRr2VK9xzR",
  "key7": "4yP6B1J6h2ZoUkoSRwm6wYkUL8W1QF7JYCM2tsXE5yu3jf14ULzpQwn3piK7WkRzNyRG4mejyz8dQ176kbv9bm3j",
  "key8": "6ySrBsdRMkpzBhdubPNjhQhC7KBaHq1isnA6CY9cCms1KSyxwuZBGi3EaetK92sEieqPjqgdT6dgdLHyvANfFiF",
  "key9": "55GLnqepQ8YB5RmVt3v2pvq2MEkhsTeKP9gNqQTwtkiQ1q6wJ6MPD1EqfCuyu6bwGUTtKXJZorySsq6kAJvGAWiP",
  "key10": "36wcCjLnKYWGYvBSA4i8GowDUek3o6aZ8zzMYrXi5WNq1M6FXJCGNLeEJTENzNtzK2SP7DRJkfeLnNUV3BrpdmZP",
  "key11": "2QJZ2kxaAGbzLCKoSrXnhHiuwndpfMyyPtVZEcCMo4dYjoP7YtYP4E87xWiZfnqGE9A9sdGgpWQbjNsRqPMjkVYT",
  "key12": "KCiTG7jp5m8pAv3wRmZppQqGkcgeDuQACP3kh3EWUG4bsFtv4Xbe9GSm6vGNqz4r1RSZRvStAzPnw8uJud95cPK",
  "key13": "3HQejoqnWmZS8XgD1uv9M69GQVWotsM4bMboqZ4Z5RzrkuAMXQmcxke9N4VFmViq7qsNjU3ZJCUh1K3bG6G1bfxv",
  "key14": "27LHXA2jbYodhD49RKG81jQbv7ewfvsTpRhWHonqpX71Vmv2mLo6TThyEqn1BT51v6fHrG8f1B7tCemBca5ptoco",
  "key15": "3aUSjZp1ZJRC5W3xu2JDiriiKx9fKubwQUVUJDe9jU91XrnjVaePn93GdHxZHkUKm1HTfurdDu6ttsu1fBq8bopn",
  "key16": "4EuqAjUYnPqSGyX7i1ionb8Ry6DJGA1YTmkYSyBqwtcZ9TwdRx7ZGvFU26ZJ7w1a5ZkoKDk5kRXvt34RzzR9rPNc",
  "key17": "4hdTFU11QFHy3dpPSbsxkAs8ouBcURZRvoZcBDyzcBTg8DJ5L63bQTMW7kKD7d5dV2qZWazvmPQ67wYsVi28tU3C",
  "key18": "5hXkV9AAj65zSWw9KjckWeooGA8Esqptaip3YN1FmVQdMfaufB9cLVmfPaBPvugZqeN3J6GvkXbXyeuvchTK1FPG",
  "key19": "t7EjX34sLMZkW5UZ646MjMdHevLRXvmGUjBdzeh6pZhp9C9wTsP7dnNvy4jESzsoWkZdWHphTLjU2fMGHiMbqwi",
  "key20": "628Md3hEd482VyGFLxD5QatS2aTbGxhRwpfh5zL4V5KnbM3nFav6JyTTu84yovQTi4PEtNv9x9BaNXozUBeLhvCh",
  "key21": "5RVhDmXLPf3yEYvDibc7skduC22qTYsy7XrYqDGRymFzqmvDWkoinpkvXa75rssCVrPLfa5kNcrhpDorHCqTwDJA",
  "key22": "3eRiNnn7udLP1YySUBqrCV6jhDMhpSQWhEgaa2ggXCUxwL6em7mmFwLkKVXJM37E2cTh1ix3jfTJopC9Sc3Wnu7N",
  "key23": "5Cw3M8CL7bdrifKu69heeQFZu8u8QbiQ5hC626xX5yAL96uaLwRGodeKDpQwuFHoHDPjZkFAEXw29qMu5JBgf5ps",
  "key24": "t8MfqR9ReqimEwWssFFGx1jZdXbdUqrpaxXqosBKDT7uqF4RssMvAba5oB2kbyDv6K5DruDwugdi2WaMszVNaEY",
  "key25": "2bxc7ncK99ZQ9Dg5g3pf7LXfpCshkECoqwaBpvZ3kxKJPfcMjERdi95yXkWZ1oGuHPr18pGuRCLNF81BddyAYXtz",
  "key26": "4jonMtES9fo5j7Tia8ZFxjE79DnCmbFgiFnDLNg5572MXmjt17nwLgX8q6REjo6iSvGpc182vwbbrfDf2mH7tcRj",
  "key27": "4CFoqocg57uifNFs5dRC16xuEhJDDVzLFJGoLEn8AiBLjfrzRBQybudfWxmHGWbTDhZRap9iFAJacBR7eJPDJi4h",
  "key28": "NcMSyMh8M2Ws1Jruwubd7z5o5CZHboBpq18raLJrDaTyVvEHFqJofknyoJtos5gkLCWd7sLGRxjWU5eMxsx8Wwv",
  "key29": "EyU9FTL8cZGRwXXCaxvTXVYGGTehsjd8C2oaxy1LryAjHnFiXMQEfcT7VDpACidpJG1zyyce7L4odN2ob5n2Jwy",
  "key30": "5yM2uZ1XC1q6syoWGcAPZmUfwRFDqHrvY1hs1zJ3HzUnz2FYW2c8as4Hte6M8ErbgdHVD2Bzqkz2PDkbkHBkiohh",
  "key31": "5dUgryiSSF4ZA8J4pnJVTLCCvUHrVfFUdvKkgBWhgiBw5ykybGvhKFkqx9PMQPkaPzZ9bAytuepKdqJGabcGqNNV",
  "key32": "52n6xixk4gxmACyQJxpSmZpDax4SQjGMDh55gmK7Rx86axnGS4EPiNfac265aQbf66mAXbR2UjzawePuVLGQpoxq",
  "key33": "2YC896hQdgjuYuLc5Bs255CgyfPx35x8nkxmLNLKbTt75xuGeMDoMFsm9nz6Saa1kHzYSFMFZv4C1fiPVVsG3nfH",
  "key34": "4tC3UpTj3sCVBTQmhGjfSPNAhzkYsmQE9T7kdNDnaCbPYErDeE8Kwey5Jz8cHioBwpZTpW9EUSD8f1mo1q9TNfDV",
  "key35": "2GCkQRo6EXseprM4xBQLxz4rBsHQWaqrsf48tqwU5kdZWQC7xRTySxcbaXnaCMnSWmyGTPLRog3LV8oZpCeP9ioE",
  "key36": "3q7wbaRG32yuWZkGvVeYfgL5u67y1dTr1rhuS2EwNRe8vH5A7b5S7wJRBsxXbsMtdJbUTtKgLHHztU8FMKZv5rED",
  "key37": "PviJSu5oyTSkY9h1s7WRhUrDtvP57SqwV79icb5YXQejQ3Gpxa57rhR55enmBJGM7Z6ShoDnA2TAD68ZQ2YhyZy",
  "key38": "4CDYkmWHCu7AZzBL7itXsdBbDM737aThkNvV9vg3JkythHUuZv69i5HfGZgHMbQ68ho4SEkm6PzLuEabUq3mywDS",
  "key39": "5EF26jCgNDgL15HV3o8gw6u1kTjaJCDp8imZpSQFFhYJgEmidncHoU9dFecjarwfQxsfqHq2mHEGG3TJeBkaT333",
  "key40": "5Cv4NNwGoHYjYVsVMHTnZ2su3ZHQBH8iQfrtshacdr9TwaRfsWdx2VsGXQJDrbH6XRQzgsfhxQqkcTm7Us7DKUZ9",
  "key41": "3d3kc1VRYEyxJ7m4tGHHJgyKDGLWrLbhoqF2Tu6y3sjXnLYSzta3wp8dVGxWGzpnLSgsBJ6EXNxcvVR8VpQJvDKX",
  "key42": "CgvbpysU4nVWNDYVmgvSZpAgvsaVqasRgHcsLoi69habqoNopMpZR6x5wqex9c3FEYvFAX2YSwGqYDhdqzfPus9",
  "key43": "4dEKgnc7kyzmThnvZr3AMu4zmiMNepHfck4Ppsx6ytVCnQzMscqet6kGwPgapYeDh8NguaJ1TkKbgGpGjGjKzEnY",
  "key44": "t5d3hXpPoMnA35mLDE3kxiCvgGBM7Yhj1RszSUDdzTT9AFEnSPtbAevLaDcw5jeCjLbKaUitkMPHjyH63n5Y44k",
  "key45": "5k2tWLLU6Axfx6b33CKoH1xfqkwttGP3MrBUp4MFLwqMezRLyK8Qyypt3B98Zs7TuGdnxfowChS7AaNszTuhDP9J",
  "key46": "5Pk3njx4TkV5Ab7zVGjxojbeCewc6QqqTE87yW4s7kMd8y2jt7CWwgGafhmRYEeMdnqA67sEtyDEPMGEi8GuNJrr",
  "key47": "4RVRHXeh2XveM8tEkCVH3ghwqbwqQtM4fVdsYJDQNbsQkgRDiwjJD8z173s3ifqMoLMQMRXikSFSCgBnHXb4wwGf"
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
