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
    "RTv787GfiYiiicmgKGusLcVbFykqjwr7RcvqkAx3Mm8XJf1i6hia3xB8LSz4j49E6vRH2GysaHhsBS3gUkzJHJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9cZwjWHC54G7M4ZDqUf7Brrxy2kbubvP5rzhLCVoms4nSEetnzFSzjzfXbGc1ResCTXBBTVMx2shor8t9DxcSi",
  "key1": "cGPvnpMA4oj6DAZ4FUMA38AhS525ZguY74SGqpgH5MeH2g4u4koovUfRfehD1rUJqoshyojH37HZrLkiLx9KBkY",
  "key2": "56eY2bfL5CyD8mfwTdGgxU3AuxmJp1uTNRtKQMabCH9UvmUYRt71VHjMXbWmMvD7qVZPoCxoobzwusuy5WVAbNXL",
  "key3": "3CAq2Li5uvuEJGemvjL19DvzJPfzobKryviF2dkZbwKqM5QEjmLgXcQdzdPz1SkYrzsksYgm86owVZyCcaMeVi8w",
  "key4": "5VDCvuXE4XytB17eEKFgPVUwY4WWVm7qD8ZTfeZQBLyzxSv7AVnLXV58P6YVMMTEqmE7yPqyokD8ZK2DajARCPrE",
  "key5": "65adAcd9NRuDyWHXqb5ngbfFXMu62ABKkjmouezsUTkeUSr3PjuMemKStEnjJhHEfGBubgmZKagb83rmpGHqJPhf",
  "key6": "3YLeNPXETja7hELnpnkQK3gDqnXfh9QSM6rvHFAnFYtpANASU1uaUg3ebpiHrz7CJFQKgMQqsw5WyEtMbbJdm4jf",
  "key7": "3traqFEUaD7dtyTyJcMBuaDGkyjN7xW8YgCMpijxZ9qziDq64seouJsk9wg53khWu4iTavuUj6yKMvNF4bt6zABW",
  "key8": "44M4onfgDYc14JkwVQT9WVeCRnnei9WFd4Cv1VhGZRwSSuLYFtEzMptZoeqsxogocbm7V6DCj1V3K8J6iqVHuNfw",
  "key9": "2SUdRoymCrrM7de9D3cpMX7KZp9Za84v8RkcvpN1wgAg5G2X3z6hgwRnBLLeN242jjqu8yfqLPBBV7Mcv5sVfzFi",
  "key10": "4N23zGBZTjGohxLbSEs12J8V9eMvem2n3FhRwY2Tsm4iVEvYX5fD6M5RYxFmWkVkyRyZ2xTaET8y2PKt1hinRKSX",
  "key11": "4LTLjDpys5XriK2sXiJszPUTkZTqJzzZs5iyKheNjJL8SvK7NTmEpRhRAvALurR5bELev4c9P1ogVEmzLNccXgvo",
  "key12": "3mihHYR7r8KKVpXrvi2kdzFwfYcfTy4KzSgVL4qYjNCY3o1xvsmX73sUdVbNrii7Wm1Js6KYcvaah6u8wguCD1NB",
  "key13": "44dQAaZKrZJqC4E9UJQUL7WGdxsg6GAmXeD6KR5BjQYE9XZEsi8aRiZL3CuH5h4ju3i7bDf1N4Vsx2KtHGh6niy5",
  "key14": "2Lxz5NpTwbA8uPWPEQTkRuTff1zDP6DKG34LKENeSYFPyAnxqa2CZGmGktJxdVUeN3BaAit1TU4e4Vqtk674jh5e",
  "key15": "3vY9QdESdsqHRk8hGNaSHoLfnKu63QXimREUyUzvU96TUb6PeS8BeA1KxcV6W1KQmJZPNj2vYykCp1BtVgdNWwPK",
  "key16": "42TMaSGRgpqJ5bBJdtJp2xQbWTySJ7iMgDMx51b7ZVVRHNy1x3QBru2igVrXgYvcU5vybLcTT9pvtMAqR5pm2G7S",
  "key17": "jk7tYHbMn6RQJsnfPmmMXYYzwFHAdV3BmopxLG292y2iVSkx2Xu6tHGXJnn76tb6ufAd5ZeKDs2qNKFtH9WJTgv",
  "key18": "5R744m4aiSfpV16PJkixMPtKyo5vdrHeDe1aPVvyGYfehyd3mCDeBntD1sydgVYqaaLPFAfpzu6fNLVvr7TtJUeA",
  "key19": "5CpsQDYJ7nKJesBTAXyyd9PHhSGnjDAyXLV1qzNqpmj4xXRgY62v74MAdYSvwzbTd2iU9W2EY7BJh72ZmQp1rtfK",
  "key20": "56AYfQ5HoUyb7SeSqiPL8cqdtEQUUe1qvnKT3XtEKxdGYm5hPWdDrQvg5mV9vx7My85aVGScFc92z6CzwVjaedra",
  "key21": "2KqKuYxmH2ZAjbZKjQMiA2VPkGcXJHQdDgGekqNmku3svP77aeNxrg7dGLFh34Yjwbj7TYyfuFHZxxCfPKE9kb8g",
  "key22": "qsevUWFw1MhGBx4CsR5z7x2iy4pTaWcxtoKy4PqQpaCgWxB3aNKcT9bfS7hmGuHqG5MzQ35TV4GrrR94CGBBELL",
  "key23": "62zVb5c7qCAfHKA5pc1CFNC7GXmL5HMZsRLaWrPMgALEknM6LV8ndgYydofkMRv6b39wLebQMQiZ4KPFkDBLrWRF",
  "key24": "3g2s98TPmyiACrgdnQecspT8RmMjG3go57HKSnLChA2NM3Wj1WmDeqmbcibd1krKW1pbt8UVZqpxXbWqfYFgQQMz",
  "key25": "afJMcUifQ9YwSTXmaNfPNmZRmQFehEsQSMLKQwWB91Ly8wArV1F2EbF2Zcqs8pEk9BJhxbKdfn7EgFpFet2NkhH",
  "key26": "fshc2A89LKwvt57ZpZVf5xVLUVASmksJNbUeBXN3rqWsHm5Foq9uQpyXp66V1WsFyT5qSEWrBRL236oufbh4FZN",
  "key27": "2eksdiiVw9jS1UGiPKmz9TenZgXWtQvjnMxMRqqxX3HLCybNrjobv81R1ri1iKVRwUFZXMbjnmxCSEPwVKQJwhap",
  "key28": "2NeNQ1Xiv2h8YYX5XBT7H4iz1w8yyBWBb43WrfXLwE1NjYDSFufMuaTPikaGi9WZV9yAgkYfAFc4QcHZ1rqudsrv",
  "key29": "3H54D2x43daG8mAdLHJabhMeHQjjaXo12DFJkTGZuCGKfh35c76PdkkJ4KHZDZQbuYbHJ4bPjSgyQR2a3vFEiGG6",
  "key30": "3rfPG2LbopQxLpg7FYmWMQ8Wp8tRjJjUsfw5toHt4tR9NTQevtYV3KMhBP4Fb6Q1bh1X8JWqXoennFu4YSEbrGqQ",
  "key31": "m6C2rVnsGmvuBep6sq18R4v8tdjcZLnULD4bvQfNuPmMXqQaZfUWNuMVSje1DocCwK4ENCwsFBaeizX6ZeRpL8Z",
  "key32": "5B7imGkVNqkWzer3nXGKFzqHn8Eo1yjtnjquf1su9cKDaUPFnQV7CZUPgV4yTXF7c7J1SCAHGAoQvY6JodYkPFWf",
  "key33": "Yf98N9AdosF1C41tmf9QBJCirzrxTrTqFfjgDzETzWDkstJ1k7i7S13vwEC66hpCJXdoVevjbnghdofxCoNTXjP",
  "key34": "4kRw3LUopZinVATsWBWRdtt9PeNSMYFAFoz35SdeU9TJFSv4CwC7R67yajiY2kjB9CHXKhAatf9atGuk7uHKeYgF",
  "key35": "ExDY7xmNyw18uG9RuD2CatR2ZgwxzyUKMW9FYZZBwLM42iYMN8bV5wnFtnyoRTvLj5bmdTJEYXBwowkpDYjR8iQ",
  "key36": "4R8YkTxcxUa1MeHsRdxXnG697Zf18oMK3u14dv6QTM6S821EDaKvYiDvDpdEHTwwBGANpyTRD5Wo8b3iXZwtWJ1D",
  "key37": "3HYUuyiuJsMfW5N5gE2vBb8MRqeCyCq8bdqEfF2451wCXySKpwsYBEqvAmPDfMrkxc8mL4oveWDK6B8yjnKuig8A",
  "key38": "kzARV2SyqYUjFDCNJQUVBx13Qsevfvq6npbE8tYFqM3Ep29DZcDiifCTQvSExee9b1YTqSGf91v7QHzFQsd3nH5",
  "key39": "5bHZfTAUq3X3FQNFV8GAv4bmZzRN877VgA58joJW636UsVy1J6mQqR5BNitx6XMzV62HyywkmsxHn48STb6zXBN7",
  "key40": "3ypZfCxjSaXNr9WwhvHjv4cYKsHnfiFkTX55GdFxmAgdgRoKtRoozjaTZCAt8q5dq7aAEan9ZZSc83DhG8CUu9hK",
  "key41": "3u5ywsU46GTK8T6SreHzzJbrM73zCazEAyziBfDA528jjPTxypd27orQRjRSHRapRtzR4CUAZPu3ayQdhEytqPfe",
  "key42": "3Crkdo3uZLneoMJvooPv3ckuSHtc77d8pGzqnVG4uveyXa8W7iNqkcZsxBwaTGWrwQXr8yK4T2924g2ewLq5cLCa",
  "key43": "878KZmJsixXxNjWVX1WJT83HrRTtMnw51HbyKpESPGLJKzFY557GViuixontFpaMZJkkRmC5ZEuAEMtxhoTJv6R",
  "key44": "5ktBep5Emr5MmhPSXxJhiu2jUPZWfjLuyyd8xT1bCpP8C2hL5fzSKyaKczD3cAtRgkrK69sfd9Xrrrzw8R97KTFe",
  "key45": "2eL1qR1M4jUYErv4wBFTYQJ6RvYS6YJLcfBcZrSupuSwr1nKCfz2SYJtNF8peawBZRN5ngMYNn2jJLtw4PhdVAS2",
  "key46": "3gtj3J8RrEjmTGJvHquLBgPUNyKfZSn7PMxfLhTTuyKtwwbGjgLuaLoeJixRLHirCnZR9X8ewc2v7Qv1DUEhVAAY",
  "key47": "3ba39w6TXiEPDMkxDWztfXtpCWNXmDQeLhJeqqYYY9gqsNztAYVEL9tKfiNfrR2Q6Lb44NgNH1QCZRcnJBZKWLVi",
  "key48": "45te5yXrhAfmEU7p3XCkzVUz9eWFVKvyMjMktWWHfiDPmhqPgkdVdnjwe1WNV6MtE8wfA3MrHcwUd9qf8kL2uahQ",
  "key49": "9bisV9XGaXgQcW9wL2MWV9d2Stu9PD9XGS4qi7AfE6pzCYd77bPs9VN84MSFU5G59UYjK5ms5qmivmpJMcKPbqW"
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
