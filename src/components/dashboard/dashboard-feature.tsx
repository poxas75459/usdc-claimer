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
    "2MJVqVKKsAZDrDS5MN3LKunsLbDJUsKsRj4CEof22Xm7nBHBSdqjJqc8LCSXcEdLojgQRdLEChLcwRo8N3b4BdcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JaVfTMZobWmSsVFjfwcZHjahXRw21BewuUbKyJGVXtD2yyt5Xa9YGjMCKisJPb6EWzKCJpryLiBaUwk65WVreQ",
  "key1": "2iBPWAXtMNn4kirm2QHxQrptYtjWKbbost6skpZbQ3epEugfGm4pWZviU82v2PTahVDeeGgShE93FDFhE2Pxkjd6",
  "key2": "4f2VqDHVzBWy17DmQFoQu8GMAnGBLiuXnbxrrr7Q2CLQBVJ14BmPmtEJtAMaPvXDK96vVGuCk3Fh2Mym8EcStiLG",
  "key3": "3Le4sqY94fMVisSsJRF9JMF7ceywPWoVjVfBz2fYhyjqhFmqChqkNiygd6bMSMrCifG5e5chr13DQWqZi5DjtWni",
  "key4": "5HB6KTKDZDy16yY2rnre7T15SVMYb42XZL25icfkhjtbrgB83YVavBGtYrXb2jn3ixf83V7GUFQyNDK3QFFcajE8",
  "key5": "4RwUmqzoVZ3GgfXBYvPCy2r2mdr7LpH5efKLNLbuFq4MA7ueNEBRQ3Bx9UKVgHqNK2ehaD6BkbiZDAdiMV5g4WiH",
  "key6": "4c454k2KXaWK8qAanU4pVVFXEa9SmZbfvPhpHcEBqGzqRh8GBHyoEtU4sF7BC8E1vmrn1exoB6TXM4b9RzQzLedm",
  "key7": "48KTSupjHYv2c3KV8nXJNBQEcHMSJGYqa16QrX4qNNhtSNB4jLTX45GpfszEmEA8pdVaLfqJm22RR76LzHc7ADho",
  "key8": "3sYF1XYZ4H3seu1tsC8RVYexLVFM33FtvUAuk2okEAKTQc3HdPGWpB7jYwTQTb1fHzWgC377v4Dtt7eMKwsb5MWg",
  "key9": "LMcro721G3LpY8SXktNpHs74UH7rvHHhhTMSKXN1odF5WJL52gnC9pcnUoDodiZkgN3QDMQwiba1mdnYPxdybPH",
  "key10": "hBfmwb43o9NfyH6zBt2BPaq32BneySzSTFgTNfn5sRcJK6zJMk9PTrvfKrwfNNomqhvmDfAFHVSqkhND75dMyrt",
  "key11": "2Sb8fm2AEkwNoNAnvhiiiq7ojXQcCggF1RNU4S6NXUT82U9m2W2a5JHZQoDJgW6pryUJaw5orYPaVAPheTkJAZv2",
  "key12": "dDcAR7A4eKHuq1TNM92PW8v7inynzycvq79UpK7gfg3wDRkeSopAjDzRvqGYiCxAKxvZ3TaWFTnkN4gD5iPGerC",
  "key13": "2GVMa1jcjPkhyrPedBYCXCSRETuTdkFQXZMkfKoU8dEJnAUBBx9H4h2ixXyJb8oduJBgV9b7WuXTnkJunRdt3C1o",
  "key14": "57qSPJ56WcHi5GyFT3D9TaqPJX5FRDnxc3pXz5Y21BPre7c541gvYYg9SPat3qaCUAw4gP31w5RrngNY8Vf1fLfi",
  "key15": "2YtiHC7FwXK6k8ZorAPhDsLgy9VLBnqB4rvsirvZWR4mCdv3xZM6vGqspUTQFdesLzNQVri9Sn3MioKFs4spyifk",
  "key16": "izUqgPSSWkNaHTTMyTbHJuTPjLnNqZc1NuxZfWZKvfft8DDfj1xsY13qg5m8jSngsj5HneveQc3BQbpoKDLqePi",
  "key17": "5YuYrGaYuvhb9hWQ5pJVn1jEey5KmEsHiqXj7J1LHKUV6i8jkmrWPKvBEgCf9k8vvmGdWGhXAYR9Hxs5CBdjQh2N",
  "key18": "HfSVx47VSvWwFZm8GdhEQjd6MQqdPygd5EZA4Nbypb4skff58adAdmYwm6vmYLcm7gAmSzCt7PZqHY6cF6tAZYp",
  "key19": "2AYxVtxretxfxMEkEQYMFp5n2GJCv1qVgk79Nv4dWy1eV6pV1N4tXJfnc2663kRbDgrvwxEccgWiw1oXKP3umhMT",
  "key20": "FLEwG4VzEJgTerV1Ccv3ex8c3yDS5555dffUmUTgr3hypJgXVnhYikX42pqMhKKWDWx9T34gP1kPv3nzb379U7x",
  "key21": "4zwHFgtAgTnfB4ro6i6dgiANkfwscQz9zJ6xS9QGhhFSm1Kt3t7VEjZ8vvTdn5E2cNRSkEJztJPzLx4SzvZrUV2J",
  "key22": "2X6T4tVSNzfzfStHXbAnVAjUzCXDmcux7vnSCMrQB99vFXUAYE9kjW775q4UhLzCDErnudVbFxrd4gFTajuuH5Ff",
  "key23": "5e82yUU3rfqTJ37sY8iYJaQ4YxWAcpweu3WiXFoh43EMPvVyK53J26JUNWFXb2dRkHSrgDQKiS4NF5gRTk4bvSu4",
  "key24": "3uLjHex8NE6Ta4p6q4yBsqNStVmoM6CFYk78fwPCWJPpWLgpWM1sD4Rp9QeUXwQcqCfET2JvXeEbnBkDjJQk1bnp",
  "key25": "3nSnhZ9AMW3QoWBLknK7B26wyntYgWo6DuArZMFyppMhWZy3tZ4KtKgXx4Tq7cyEx3SpYmx3Jr4YyiTDxXSgnsMT",
  "key26": "5spkZJQnygp5cLR5xYfkqTo4To953MbfLfV4BdJRiSWZjeWG8F2LeJ3CcDFn6oyYC8Vz3FFekSYvitmF2WXGMpzb",
  "key27": "4zr9qCeczXbsguDrdk9BVMs7w4vLKoVP5uZBDzjFkdhTzhewHEAXYrpe2JCahvrpUs2tBSL3f6FTg56rAMWQPwEq",
  "key28": "5bQTCuYMv31PLeyrPAW691gTC5RN4GBTLNyyA6R7fznktKVwNchxAr8fUDW2pGwCxsLVQzZqeDJQHfHDxuomNAie",
  "key29": "4DEWCDi4N1j5HsNDMaRT3rDwwxpyCTCmLpfJGnsmaCUy7ZijyNCqkMuHSnSiDgDVb49GDsNMrkVwR41k7n1DCLBL",
  "key30": "5o3tjhjqXAugoJBA5JZkVYjtAtqrCV7DsntyzCci5aZLFZEuAkCPRvb3MnaFmnYnCDGyWR6nqJ2GuNL8WBfEtX1A",
  "key31": "4JL8Fjs4nLoJc6YRf2512paiLwjP9HFVoWH5ohc1BiHVbBNW4Lkh2xUKPUT6nAkYwsKnX54w5E3QTwLBK6SBioR6",
  "key32": "5z2bHx1p9TuMnmk9m12Yea4tG1AzrbbsmjwCutEJrUxsYj3hDtMPui9JGbGprCoEX4jQ3qYXJcRtFKmx3fpWGERc",
  "key33": "2AA9rbFJBXeXDPvUHWgUBQiZGBj49LEpAUxa822rdTwjceAR4XpWATtGym2TntJ6EWav6CwJS9ta3XHakZRW7QWy",
  "key34": "5peJn3qQ8f2u5jAT4E2aQekrANgWD7ko63gUn74HirAD14AQiZUiWarZzncAWQQC6jzFmEh5ez72DE7MtDUyeykF",
  "key35": "5gefBooBdVmPkDNvx48bET6HRiTj6emn3JbckdQ258ahm37uXZo6fBFHnvvvJmsM8SYLpsR4piVa5wjXrQAWFSjA",
  "key36": "2Pq8V4A9wBoQ4FDFkqhjEaRpLtJcHC9FXhEPjdgXBkEPPmQTQxZrtkXdrHwUcQ2resH5zYzkgZCasGgkKZ4FieVz",
  "key37": "4gM7jc3JpPqb1YLUj5QngWTbugNTivUUA3LA5ECZeZaAxemQV8jWx37kMiCyCt64kqJ2HyZ1N3MzBXwGHvgomdsj"
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
