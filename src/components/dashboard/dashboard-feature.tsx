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
    "3ipo3CynjfKGmxZX16zvApj3ZEVrW5v6iX1XMXUoGZXxL22AJ4VBjQiDd4RAhW7mixenZVpCk4vkKTf7b3DqpKnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59W1eg55AQbARLH2LHwiiKYoTnPY1xmcqAanGxpyF9XWPw5NeakZrwuyTit5yVCqEcmZrt4hMUxWTKUdevtQGQm8",
  "key1": "2AsqS8yeUcCtVecSTi4Vh4TAchxmGBTTuBnPTxjoRamXNBegLx6MLaCWeyCHYKM7mv2U7NR7j4QHVEzziUuriBVN",
  "key2": "32nmAdoRDghTECbhU12QoihUvnCNFGojtpLSgpNefFDWZfcEzWUfAjVJP8iE67h81FZULz24G6zySuCkXr7fp6qK",
  "key3": "5F34eh1XCMsZroyEM3wExz9Nr8qk5vZPJ9iU5N6mMRgwgt8hJ72HHbnG2NRVURe4TXENLerSHknJSj8sMQnaKnRE",
  "key4": "43pjChojRYWRGNSpXA2U8xtvLXceKmncxnguenvXBqox71jqgvyk6Fatn5UcgRkvuN2xuiUvm2YiB83CWXeRr67T",
  "key5": "3xd8BNadry5H1uhFUYaHgaEatSk9UTEmd2FAHrcbL93XjXcjPa3vopmJJnpPYyhkuWPKx6i3CLvYh1mzA1gQTBzC",
  "key6": "3zs8v39chmUpao4uEdG3PhHYRdmbu1E3c7WhduuS1GKjC3fMHNmyy475pHmjFmew4mE6Z9PPU7LVpDSSXWuA1NNS",
  "key7": "uGCc89ouMjTxiUr3kHW6ywcxpJr7dXLupiTxw4HuStWtbQW3h9k8LVxF7Cw7iziujMT2sk4GVhiyXoAN16j2skH",
  "key8": "55ujJ31FV4JwhJcA75PAfio5RajiySXtAA2caBF1Lz9broetCLnM8kczNnqytu1u2GtyLwnAd5nFYzB7EyFRjBiz",
  "key9": "3jF9cuxcWazBJ9jZfPkMz9SEvN1HSovS7tzqEyvrZz128mnAxzaFhpyGQkF5VeEji2uGfUJ5MVVi4Vr46JSYa1qG",
  "key10": "5gkgwLpY2UDmwJCPGRiZjN8AvRQPoSBWiNxsX5BnvsRuGiXBU7vB8nMDnrqBoU1ZudGrhzVCbwPFemynUkAs5rGo",
  "key11": "4ZZLzGdErxi2tJi8PMm1kJa7aarCXN5CNHRyueS1Kjq6Pd5p2jCV6HVyx89EZpXBcdxzP2ioSzCRgDEU6hkdkGvQ",
  "key12": "4g6ccqUzPvv4SXaQC9mWGXvRJsC3pxUcphB8kkzccE8xZGocRMBSbon7N7pcUsg4sYHFXBXY5qtriKi3iSN1wqKL",
  "key13": "43hE9KHvsptdt3byfTkZ9TVZdjoeYKEmHvUxLPXzgsiCeyp4khJjVeuehFYh66fxUYJSNViKmbKaHnnF57TjckWH",
  "key14": "4gkT82GPYmq9JdG2gVnCMYmL4wRzx1fKFcT4Cs3oUU5FrMgrF6zzQUVqhe8Gb3v2atTLdFnoH9sbGSryWF9d9rHh",
  "key15": "49az23pQGxUDjW84bPCduhihWkYhuC7krVYJXgZ3qbrjzbqJRBdEVEJMhJpH4yWxjSRRexj4cAC49NL7x5cmodd3",
  "key16": "4aX8hLj2xTcsyKQsvXVAtMnmhe1KwNGgM1Bb7F9Ua8YsWBgFQiQeUD79KTRZ1h6uPZGdMrjnonaryyDFsrF6s2sS",
  "key17": "49qQMrKf23hb7Nt6mNFyMeBd9EZemJragtiRJw5VAPoFCiHYYLYJTAHhprkcuAWwJFE8ooSyHgvFuJcJvBEvj9fy",
  "key18": "42qQkTywJ8KXbF5MBhTJvGB9Cyrkaz9Mbwk52E6rjrHD8QcR8c55fUecqE6uUTr56EbWoVQuCHTug3ZG4qWQGK4L",
  "key19": "5RoHCH5Db9Ta7yWket7dzEmP7VW9Aiumxoh2gH8sCK27pvesrytZVqgjkULo7Y2PcACqrLSEukh3wtGabDTSxRpF",
  "key20": "2549Fh7QL6Kv24ughyraHS8j76U5dTQsmsgkY9tFV3aHgNtABLutsGgMUz4dqMV4iNZzdHJBKaw1XiodBkf66GqQ",
  "key21": "3UFMzqHHyRQnnKweNBnjPRDLnoLcj3EY63eMNixv8zyVDsXDEDs9t6btEJ7CdPTgNAnJSDgRXqgdP8LuCEXd6e41",
  "key22": "rfYjAQ4AMKiiUAgy3aSe8MQAbLVVwDifBAEjSioFkhNqv7fGY76g58RYJPVygbbkvty2m8D5xJYNvnooBrkV3D2",
  "key23": "2njFYFDJH9DnSh2G9VAFKxKUPAsnvQunB2ZoPCiSqxaqDM5PHbAzo4Z1LiLDSai29BSjfc4nf7waNtoTDXT6yjSQ",
  "key24": "4VmGz8rATVVYkaAwdRjhtD74mXcwww1UTJrvTDGtKTH3oUf6xZ8SA5Cv5sKjij4kkPyMD5ahi4mroYzcu3nzLV9z",
  "key25": "z54RWZjknPQJTnEesnfmfvh8eLZoAsdzPrQ6EXZ2TMQdkYhbsjsDErsAA7XHVjo8ADwqcAu3epLN6MHEik1waq4",
  "key26": "2rFm21RhMQT62SGcYfepqikHFKKAAVh5hNPh8BTb1a9tfWwFchffpKZwcpHwpg1LKXaCPNCskC3EFqHunMNDqHbv",
  "key27": "4vALpMxLH1YoCiqN84GScSRnz3q4RMe5ufs6PuTcZoiJP3zNJ1Bja86BQfcQbNjotv3CshzH4bgjxPJxW9jvPDxb",
  "key28": "5Erb4iJNErmj6HvHCCKdbwfVf6jJmJPKHuxLceY4xVeksmVfi7E7YezAwzUUTGoaec4HUGMqtmDBdGU4WoThTsZ",
  "key29": "2a6ZwqcUijvNVtfL2oCtu6SWagPjrLN2uAZRJ8DqJ8QNVAHFHa6Bkt86oT3kLiqBRor7FsDDk7s9jwYMNQfprdcc",
  "key30": "farnUCgMKi6VxKFy4xiYdefcMPpt8oQgT3yUFq6XcUjPeZhWx1xQr8oby5Z5EFvXw7LF2yqgyQ4144w92btH4rR",
  "key31": "3oQKMPx5xyFWQ5GjxLUHayRCeiuLwTdK9qhUpGotvH1gZ6AkuXXV4paQzTyg4VD9hSUg4dEgkFQDuH234qZmetYS",
  "key32": "5CLH1QtqTEpSCPibKZC5C7sYW6WdeSm6aYrnbnRKHyZ6CTM1SKsXRe3DzAoGkyQwbUhNcJmvis5YpXVHRe5yf1qr",
  "key33": "4ZeDcQKjJwoPkRSWpAvNqoBbZAQ2A5sEa7Rh9xBhFVb1Ut5u4Smv1PDdvowndptqLSqQ6p1kpmP4P718QiT24zVf",
  "key34": "3YWvBAr8EmxnrD2TABJgtJYjxdQZHTmdvbx6kYpZfB7SYQRwHvnkrVaT2HzYfZPYNGBxooby2ude2gRfaK6qdx9N",
  "key35": "354KYCck2j4F9r4Efi7VkmhtroDVcPjytqLt5Fjc7kYP33vGNAtzzWztf8hb47WAznCJpUy7xKyCb1uMHibcugoa",
  "key36": "42HJcEfYXSEspoiarwgANvBGKFNzj1AoTa3XnUA1wz4hQ2BMrhTBbhVgyB6DX3hMbTTHpoZuYjFt1PkiPtF5j9ZJ",
  "key37": "5zoRtUjJzLXpZwc71iN5fvHUA9KA4cc3QM815ahs9SftqxfMYJy3vh1dYzyva5VEWVPfwNkmXsD9ZAubh4nJVuab",
  "key38": "4zSSbokyqhTKWDFTAnWoSuGS4ofC1KLhKqUKnWzqep5F8PMDTf53mFWxirgxyibRDQ9VtN6XfyfmCovquYjGra7S",
  "key39": "fNc9h1acHC2NbUGjXxiR5UfCfw9hX2Lbzi4ChF7VaDFLXkXDv1FA25hoBZtjPwWEqJYoftMzMbfXGReqZjeWRQW",
  "key40": "3YuDP3Uava5ZdF1iakqZL2vGy6w5Y86h5Ap1aJQAfsmcR636HH8RZSoNbXEbteBJm77s6JxzuHtbAHmx7Gnv9BHa",
  "key41": "2FxCCszoL5bACCRcS2b35782jd4pKMaFfwiSJLeWsA8mz9YizJwfiXJsSBnHetLPAhR46R5parwNcjDhZULDjhKy",
  "key42": "33JE2Hq7KN68JpJsnA4x8ed6r8ZFnzUHtPyjKDNaYfcjgErhJk9r1zSZwU52b1q6SQTcKbJw1U455KPYcrHoDKwY",
  "key43": "wPJ6sFZNuNbW2wTEaBKi1zPzfWrotkxzacNYdDHUQQ351UTvjmyvkYhmqHVwNtK7xkwuvC7VrNwRdpKQsaqGP1Z",
  "key44": "67CY2QRA87uiF8ruK6hwdZRrWKUFFtuaJ8FExuS761e2aEEo3RH9NWV1YtqY8VhfNrE7wtU8HcFGLuq9WA2u9Vdy",
  "key45": "4G7YQ33oB87s9P4xDA84shyCYcR7WoYvWV5jueowaTUmgezyxJLAw9LXLxDeW6rPpJLkxot5BjsTGRbgxVjEioA8"
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
