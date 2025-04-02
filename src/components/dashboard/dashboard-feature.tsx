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
    "3rtEiTqazRAY2yZk98wnq9s1MVaUcxpx6QZDajmQzTVKPugbeJVfVCrYNKpqiTFjfndr8cxxHzarPeS3RogpoT2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rneCorxUqLwpCME56RZNrGg478ra3BLGTWikcKvu83j9UCKJeYdQ19YxTyoQkrzdxAkeHuGUKmwyqiUAdK278Sy",
  "key1": "Y94cs4a4kcMkyRnN5btxf9NRhb6MopjJkS8NCpgzPW4kJo7VbAU9hGDdQcRCGDCzbHFdPuPkwTCgQARNmeS7L7e",
  "key2": "8e1xjr7HPj2qU5R9hMmDZmHni9Q9YFhvEZa7h8MKRM4rNtZkTniizTCH3uJDq5pEdNjRFhR3SnnbzN385DbAsNm",
  "key3": "67nvM7eQUkGuA6Y8eq3Ry29hMZyc5VGtYdRdNFRWFmsgZmsqWpeRmMATk8SpdrG3zpZeuVdrMQ1pn83FsMoB4C4C",
  "key4": "5ncAxeqKsCDGua7H7wCGiZ9LmYHdEHSUS63PkwtpuDNasNYEayzZD5t4Mcfcsj694jUQSUF7TpR3f9qgAkqZaxMC",
  "key5": "3AfNjvNbPYzBUPjAX8oX3fD1fvPZ7sSyJHCVxHJoByM7P63HUXtrRVp1KRng79wsiWohCxihUvkQra3Jx3M74Xun",
  "key6": "5DbMTqHyodweK46vzURfwaz534CMk1zzUN4z7aXmgDRzuG559xYT8jt19vy9w6z5VppopiA7eFSZh6E5wcq2cf3P",
  "key7": "keUk2NK622ag6ULewx5bKAD3zBaiC6rwNstjSV9aqimpiQ1rQHWTkhiGTbr2r1ZW8hX7eikNr9YRkt7qrt7KqW4",
  "key8": "5Z9xQxXoCDyEjoSKFtwcT5BRkxkbo6ChebPazTp4ubkgCojxFENTMBdzq73uTLPQmbRZJAqwRhom93DteE4BjMqW",
  "key9": "2YgTKZ1bEoprpAe1qS37TxvVqu9yhzZs5RHDcwaf5CGfdLoNErPZXf1RvfRHpUbXnKofSu73Q9ZgVqTpuU3yHyhh",
  "key10": "35s4u2r1DTUNG6G3g5doXyCp3hNf9d1azSn724qhCFP5svzMutkjTt4ZT9YwxQ8Q9xy1C7rxk7CfpoRL9wdgDY3q",
  "key11": "4MsqCgKaFSWfLWySXp4ywWkgXcRivK8TnnobSe8qhKdTBAJanjdZ5XPBdDhRucUoYYzBT1F9fCByJ46GEsAxa4mC",
  "key12": "3vJptbBCkBcL4aoWtiXbQ6kRYGczqRyrVxBFGHstWeLCLye727dqRGcop8Kvmvpa7ydNkYZ9C9S5wnfniYZtprYf",
  "key13": "m6QtwNQqjkPaNcFxVXN7jG7kJ6S7ZJJchULxkW9H7Wey7fnJqCKp6GuKhcfbFTpoBxPLmcKjTbp17ArsPQP53WA",
  "key14": "3rDov5wwsC53E2fFp4mLE57q46wRJZGZxXVDRFacF23cj3HTbC5YtgwF73FcTfQA6fesxgQEF4FBhxQ7cKP4kYRB",
  "key15": "5e4rCRTziuHvo9KgcP93q131cx2kNdfdb74ZJwm7yuycX6g6toZPtMEFSVn5SFMQwqcdf9UcFgBvQPyvQnjiGmo3",
  "key16": "4CgBCv8EjkSUopVjQtZ9U1kWm9sfpFzX8hzrQz8S57u4VfyAQDJ6JjNbD9E6WUwCjWvkZxSm4H1WwV1nK7p32isL",
  "key17": "3PExGefPa68bky6X6PwxVSGZedghHCVFmoN8QeWrPUB2bTkytCiSH8fPCsgDWufvpTQqdRafP9EBWQszNF8dtTiv",
  "key18": "4vvvm7xk6Fp3EFtEb1kNexGAhuJkzcYqEMZuqMpTdC65rNSRbq1bTrw2UF5ZaQB6zKx4BxuJB2KF9APjcdgxePZq",
  "key19": "2UjJ5wV76gPAzr2NdPni3wgW2paWFgd6cuwxezH4LVGyuJdM4nXrF8TrUsWL3Nh9bwGgpdpCQ9XoNFYa7xfcYzsq",
  "key20": "4LhRVd9MUDPN8zbc9ZQuYA2T8NnzoEAH2c3Kvzm2bx45X9mYiHKHAEKs1tfC4JtQkJtdUr3KVYhm2WhjVNN4Tikm",
  "key21": "3s4rmikm2EGtGPzy77mFCeYWrpZ19kKXxWV1h9Lbv6r6Rn8iTb5bYawxDmCj2nkDXh9yUjExbeeNoLfbbdmVo9sa",
  "key22": "5Dpuj7SFkkw3TPDDfPbfj2Sj2shRRbQxh8uJeVERP9rx1p6nzXBHNYmpEVQEJ5DkCDmpdxoRQy8FMxMbyPLg76b3",
  "key23": "33xFrjcpY8FuRMGdfd2pYQd4UgJub8LGfqDb8bJHjYxFqrkBZVUQMdeQyHooiBykk6pNEdCCnZ7YSM46CPXjEAKM",
  "key24": "434DoWxYzx1xbJBHK5ZhjDMKTd8EbDuf61bGSoxGvY4UScNbCAN17wx2n4hDqsV4g7MAXcX9HjJovfKajEXN4cwP",
  "key25": "2pJeSjL541T8XTXBGd7yXngfsB9Ku79bvVyZSywdA6dNXbTkaQ4SCXKd2LDYcNBnK8xsXg6RzmYAQTUQXVSE8zcp",
  "key26": "5TJnc8hNVAtaTbxL2GBhyLvMHgBzgxYQ3Fsk1viXfjaAGKqhUT6gsBf4SHtXkkwiMZqrcqbcUB4wosZ262Kn6Jup",
  "key27": "bq6RZveAYHhy54ezY5Hstg2oeSsmJRMNhqds2GTgtPPtdBnYXrN8AwJQQKu9M895CGBn5ohsjvsTdsAvt5YkrVk",
  "key28": "5p5GBFWsFNSuXj6F1CHoTQ9z3JbXN36tEGyHKxzzSv68kn3GMr65sAaagf31rTFBFRvksrNdghYvY9GAyZZM26QD",
  "key29": "5V1ifyQyQz9ZBT9qsqbyM3R9qkSVLuy9oos1uHowTqq6ZSKds222jUafzskgZDUcm7GSEvzbtfQ1zEpYAaDybE1w",
  "key30": "3hPgn2g8uyFBMcP3mDND8t4MwtbLgGEP1F9qwGqjTusTrEtJrhaL6PtwJBkdyb8KJ5nT9bpfTDDWZadr4mgzNEvA",
  "key31": "3kpGkgN7GNPktRtTJVX3KAf27Ju4zpe2MvYfjs2SfJirusvB3GoQgSM8QwrG2FtcKFN8sVgTt4j8yy2MG569koFa"
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
