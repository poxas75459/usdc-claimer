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
    "rKrC3RZDrmdBpd9hbV6P5vpAt3MYVtE7PHFojE9R8UoY8UYVhRj63bpnxrvNSSKepgbrRc524we7b94cJ2PeCdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLtBxEdXjUbfDHEa2mVWp4JcaZzW7deJ73yb2uUnARNrCpcwms5t94P56XZTngKfasVurzFV96jrd7UmKzjnDyv",
  "key1": "2kTMzvBFrff9FJWBrWSy1YwGBUamdaAmSPg9kWw18pLyvq3jWvRgR9AH2S9ZZt2QvSu773fe8etoVjen5aZ7367m",
  "key2": "5pheBNq6Ad2svWfZ8G56FmeMgzFmb8ZjmY5yqaB3N4eBsmnSRN6gj37a4yTd5HHHoRAXXjEjhjzjtKqDyC3RztoZ",
  "key3": "kcaqQg7n2788WLHpwh7as7W6UG1omVUBKhRXfvx5XtByioTCgxapyCWuxTWXudehep6Hpgx4omRcUdb66Nv2BSQ",
  "key4": "63vC8qgecZW2agARsBZDPvZ1dnoVatNtP7A2V3skX7YRmnGe5Y1np5LxfKJqwZkNbUuMUTPgo7UTWK5Mstj6oFXa",
  "key5": "428ZZwT9PESBAXch1J3GUhGwVrvPggx7UVwJYvR9d9rvSk9bAeJP4bSH7Doj6kwm5boUS3MGMKvm8GcbwgEMigHA",
  "key6": "TmEDTGeC98mWhvGYxm7yGTmT3iDkmsF9h8UiSDVmMXpfZKnVfwtjqp5pyrK672hDmtVE8BSNuihHUkEKACVB7QA",
  "key7": "2gCx1rxzjYZwfaCfiLEDD1ane5tcVgvSV1hSDpiECK9EHmcskR8ET8b4hmwy91WBE3EtBdzpE2HvypwbG1ZJUHmd",
  "key8": "5bzy1rqjKNtvaev7d2tyzK6ZAchrGEjg6CysNHPfMFRNFKdqKHGGEpbVeFj1gTHL4Kxu6FRupgDMBF2sVSAEqa3w",
  "key9": "4Yftd9nCu8r7MNeUg472yYS15QT1VF3TTFQCN7qEyoRahhX2aP2wvD4SDhLvvnG329BQgtt6rdzY9RgYM2rnrRi3",
  "key10": "2jteFtWMnsEKavN5GYWLFrRZkQrQe1G2x59FtAvN4bbaCkWp5a73WcwLwEHFF6TNAh7gfgz3qyNunM4T3869Xvi9",
  "key11": "4dApSubZ8fK3cf9QaFLKbvCLa9ytQ1AdhENxB4E9u42xAxxJmoaU9kQigh9ocry6J7F8m7zmSuqGGFV8USHGQfJb",
  "key12": "3wc7rb9GLDQS22YXwTmr3oeZtKxwU2yRQ2tP6o3mFEdvFKAhevPzangtPWWqWBYZLy3HrAU1LQtXzWFE4JvFV1dn",
  "key13": "3YicB4Z47wE8ZqGwKT6n6z9Kp6KH39jfvUoL5hPG8terrENsyhpozYremPUQj2vDzzD9SNckHmuJAcpZq8wPmCEr",
  "key14": "59viegki1XG3UzFhY6TwUgcf6WZB4GDQc1W7J7McfcxAm1mgh6E38GYM3mMBb1EHkrz9U9GN9ReJCbaA8BKtEeXM",
  "key15": "5dEFSM9Q1hk6GtB1Wou7RPjcU55HB2R5BCsjxmUuyvfrzsQF6uYPF9jtAf3v1dDKFSqJj7n1iDroHopFd75UkStu",
  "key16": "o6VkFQJToPxUNxA5WBWKzXedccGiZ5WexwXPBznZvGvdEeCPZogYCpimCsAKeA59i2f4EDJoBWvYCSR3yUDfMN8",
  "key17": "39xui3WPYykE4oeNmv8YGgvbTxzbZYbguRvGcdgoSLv9Ymzz63btHW7YrBHDxe26JmQEQz8TYdVVDaPQCVzYyqwk",
  "key18": "3DUirybfhUp561jB3NuywUXwzUwekxjSJEHRvWifiACuwY5ekpyjsDNjY1ctu9rWhb7APoskMtDSGgM4q9Fuh19v",
  "key19": "3q1hfmKayeF8qbQfrunobN6tor2umftPQt2TCAAW2Hm5Yqfmomiju1475ixwQ86DC7fTC1iRNnA1n7EJ2AMPwqRB",
  "key20": "kWrEk1NZbLT3aXKKby1B3Vc1L9NWnPnkVJ81HPCLzCgunBnAsFD4H2xg1A6XCt4boMKvRaQjwgubUGaYZEcNQcc",
  "key21": "3sXkMZj3gXrvsZG67hA45U7KatTt6mT11YvyDEY2E9NBUAHRvqGFWhLFjMcDsK48FoeZnPEkHgbvszJLTN3Pr3sG",
  "key22": "4kgMS7w2FS1hX29ZrDWnaL41WdCMUGDR8wJQppvqhwsV8mXNZpdhp1aTiSnSqGgjtSQHhhRCyXR1xrrvbSJxXZMJ",
  "key23": "5bKXY64Dh4AC19Y4yfLgUo68dbzbFucQNYnEVyFCCVorbWukJxgXJHCoCvX44qmDaimMBak7os8GVQgxtyGUMJBu",
  "key24": "qQw8g1K4DbRZ8J6ZrJddo5yhaMLmhx3AHotACuna9e1erkwfTmXD84W7Rev2UPcSFvryybbhZQ98hFYtaDj8rkL",
  "key25": "5itYWqAefaVEda1yGuAVZK8mcJnLSB3K4XpupuH8yrDbi7NSz5ijd9UwxtX9qGYYbBbnvTiQ2mNUJqTk6WRTGCgQ",
  "key26": "5Jvo4SZCoZ9pzAykaWriPEeY3kjdahSrFwS9o37dmSULBGQKYHPUC2g2t3nDxLHzagNmabUQTVfx9bPYy22JF3Kr",
  "key27": "4XZMaHWx1QFPbMWvjxrBA6njZwEDiUVAhurNEQfY5NYatZSoPn3NAW31tukWnL4EPyAbMb3eTPM2XzDD69YZAAJt",
  "key28": "4op3khm5S54pmf7aVDG4YwffX1THX5RYrkNNE6YVwwfUqmTnumRXGnomcqkkpeNc79KDnFufDzNAAa7Xsx1JLDSM",
  "key29": "27VMmrJfKoLrip47CgkzeZGXGP96QaeLCC7NaGKqHVhn7DbsmW7x7tE2mvvqyDeyc3khNqaR2oVzWSBEv6xXFzqF",
  "key30": "XmsP74An6eSAodGCvHD9ctmBRezfY4quQH2o2ruk1KVsiFxetYTL1hR6Lr43izUxJQj36gQa8oSJjHfy46gansv",
  "key31": "2Kd2KFTARf52wHV7REBrGvuqpY2sJov6qKA9fqe3Xvz9YfTjRzAza7pzShU1wBuW6izFtY4ceqBR255VvKHhwPGK",
  "key32": "2N3T6R99dJj3WQrLZdQqS8qJQGYrnpR8qPMxAVofirDeC3G9qgnwSVD2HzPkpQEe5moovEDRerYsvQaR1moCDfZx",
  "key33": "4XpSDWQkT2o8e76t6yCyT44nvyDgkGYKVXTW5F9QcWrf8VqgxLy1AgmP6mCjAvpdggcynssw3RApQjfZiUWi5Kgt",
  "key34": "3BWh7oVGun9oQJ6yE1X4JPwYp2FdiofDL3xkJGU4gVaPo7TJ7pajiZvWTbf39LNazyxqwr2LYVh8x4HmnM1skE6f",
  "key35": "4WyHRgv6qmF2xYo4p9QAd85PFSTDvx7odw4euHQkh5EEeZQVQvFiPLs2Yk9Bnk3SGdQwriNy22Dc8gLcC8TgZVC4",
  "key36": "5WaCnuMQ3JizDzYLEjwLcGi47zaAezxaZ7T6vrog3jDZxDU4oUHyKZAnWxms2DoxymdR1urmqQteaDdkEJWaLYAZ",
  "key37": "41kpoGUD9EJbCxfDqMwXvcxrpb1pFcNkiJJmAXwaoP7ifgyhk9zSUMN4Mcd6zf8dSYspPiXMgm7EMydDNkuSw7AZ",
  "key38": "5oybM5iffRJhAd87CouGbNKA9K8SJgyripMy1WCHBRQPqu2VMrZeFpDeXu7ufowohk8vbEZk6NPTBGzKMHxEfvd6",
  "key39": "4GDja3sgNfrrnCHChCMiH5LnKEYszf39znFAxggMYsxSmrwAjaeiLKZ2qHvvtNPJ1bQkRycxLUzgZxpvdxdeMhfV",
  "key40": "52M4Zx4me7GJjVTgXYpJFhpj3g8WL7qAT8ssLTTC5aL7akPb9SejWWSRy3e6nRYHR9nLTLPVP9X2zYbvuNtMRReP",
  "key41": "55Apt27feZzNNHqxyxNKxxHxkTd4AUiN7yNBczAycGYDs2CJCVtUNPKGsN5NLrAVLieAyHV1pzePVSmVJ67jsvG7",
  "key42": "2tswaMTB5ct3guSBQkjvwUevG1P86jE7341FrxpDpAVuoNuWmcC1VvyrYa8Jg8DaKiVuVJQJXQiFL6dm54gjYbBH",
  "key43": "5qugkVdU4EW4CpPQiG8hwFixgpQB2UTkJhUL5551dc5AfVT8VhdTKEJx2VaaWczPkM98Q8Y4G3dAXe2QTAgZNpYN",
  "key44": "5PmXmcjxiwMDavnonCLNxsALk1t4kgS3exkrjvoSy5VStFCKqi8evZmehfKZ86BkCRQwkAYCe3iqJeBWxg2WpKsc"
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
