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
    "5ZXVKramM6c3K9ooo2K9c1GatYS3qAxcGJu6YULEei2K3QyThvADjzgqXbRXwrtNpnqWDsmoV9GTtj1WoVbk4i3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PfAF5WaZZLEAceSNQnehuMXADeTECsDSSScxMrbEokwEsaFp15fa21nhjEBMZWpFdUgXHkHFzefPkvZs1tWvvu",
  "key1": "2sL35UfcpVqiHWnr8LA9gPN42BzwjUEzARxseTeQcxwhbogftah9xwvYn4biuYcbaVKKxFkWzyXpeTog8EHM4xjn",
  "key2": "k5SoJhyctWoVPPDbUZpyRcS6KgybffMs3AQe3t7AHuXxyFzGSVmVxfwxCXh1j7YCk7rJkdC9HbA3T3Cwbiw1YbZ",
  "key3": "MxJmPQcSJTZGnm5diwPJpaCRzZBbuLB8sdgcUJC93jYBV55NFQtdW3e3mG42c7ooXort9vbEv36P3p5CgBsXffX",
  "key4": "Q4kSBAKVWchJJPY95UZLywg82JvZreMXSv5fsvAX5KqMEKyvTJ4i7JsJ1Brdkq3oJdzhpPoYMfgAdfutV1gjE13",
  "key5": "4zRp5aaCwpmNwVRee2hxztPU6fXj5BgRQYqTfR8b5rdXguTmGbJ13TJePaqMCAKqysxidqcPEpeFiMAwgiJJeULR",
  "key6": "2XRgwR7bv6wrXeZTisswRoqPdbJYCfwBb6KCXg6atsWnGpcFLobJzJEWAV5w9jzZU1Q4ZTvHyUStFcSNfC1uCXxY",
  "key7": "3uAiboMpM3rqutnTsqN46hdMt7pfw9UenZ4MdFVZaoV9LSHDq2pghX9dqiiH8M9jiofdJqKAqPyqw8gYPudmhaem",
  "key8": "UQoRHXuHqBsPgEQVe6XqXyBq6Ch4uR9s36sZX85sNE3v5N8PPcn8dEBZkEYKpsf7AJ2to2UFoVVWUZcDX2j2w8e",
  "key9": "33iN6p7VGiWEvuSu4taob71FU4ZqYZC35SsRBrAgecoAMvPFFa9Bdy6NASw6ge3jbz7cbYuw1dbAYNxxywhNmMfp",
  "key10": "3cgQdFingcXNbd4h6CGDQP6MK2dn7vD4LJJrz5heUCcuyKyhnQUY5nqjiWGdq2aYR69x3MhFwscEVZiHGzZhDimP",
  "key11": "BH5ekoANfW4MQYxyLh6Cr5phRdkEgum7vuquXFXfPCEGjzebJ8KmnQ3LwUKaaBfhJKqQ2vYyF14Giqddnw4beB4",
  "key12": "jQPyQtcuSwbuVgxLz6WvShCfYPjqY92LLZwXsPtSwQuWDRcXWSxGXnv1WXcDNGWzcxDviFwXon2sUdb2RJ2vS1t",
  "key13": "4aAfpGxXSZ552dAvJkbceRzpN1weqG7K7aDTR93H2nwHqdojxj8cRtDqv8kjAd9f3YMxzDjACsBTKg683pr85PxH",
  "key14": "ZNuFN2KVNZ5XrqcMoGZDXNpb8Dk33M3KruLS9JFXHteeDAJiZv5pzbj3oXZz2sJNxdcNG432nn58DPtENZzNAft",
  "key15": "4vcRrtX7qbEsfuvpTKmo4r9mmxq6ej5AD824n6tZzv3KYYBnkcteV8dcyXp4iC5b5XcaDj8cnDAxQiG2XazbRoJ2",
  "key16": "2uCXty4bQ5WrDTobXHfdpmWXmtxXxKmybdrBd14VzRa9DLZvKDZdNAbciU24rFAQGiF9rbMdJAu9i14VSCF26QGR",
  "key17": "4Ak4GXZVLNYbPKQ6DiwnTx6b8DmqoP67rxBebfKeWUdGsuZih6DdqLWQigM7BRHtAULERxPpDfasB5xCMEt32cc3",
  "key18": "KdT2KMXR354FEdkXVHPsFpr2EaVZVvgdRADBK4faGdxRJJjLqUUjnqbeZKDh6nxRSF2V8ijhHtJNLvVjy8nxg8w",
  "key19": "32eHJmCGeuVrxfHc2DFPDQNuxckL8gs8cVGY6wYh4WzaWToHtZ1HaZQFabykhYUfNwH2JPKX9MtM1mVo9BuFsw4D",
  "key20": "NcQzxfth4BBoo4i89X4zsrFMEkjVHwqxTgywkmmx9kkfY5bYVMziGJaa4fHAtVCYhPzhs5BipdbFc5bD3szYwy4",
  "key21": "2LGKJMa66wXQXFjdmq5iPHjK72k7SxKE1pm5MFre6nyNJjgxsVbgPVuXGzMTxqjzJSVcfndjHSVV6SZdX6aGuC29",
  "key22": "4ejVhMJbmbFa78HbCGpj7B3JFTsrnixxhd6DmqTTymFfmhdxDyomQ2Q9jCPmmmQncaXj1wajhGBDgLQRrqckuNrX",
  "key23": "3TR8nbYAFuUhZb2PzZMx79QF3wdb3eCE8dvcb8xWJdh5iCVLjgnqKiu9EvgWQbCTrqYRSpx4kYMxSGwZBxv9Z8As",
  "key24": "2V5ThqhCmZPNDjasAZzW1M38DJNdp1X79WV2FxykVGDBjNgXagDDRRfGTCqjLJXd8RgXq7XzAEXcHFRz89A5JV7W",
  "key25": "235wmFtwGRGNzEd66XgvqeDpCA9cgNK39bNU21uSrxkfgeyG4CAJJV6L3xyL7LfaM3U4RzQUztJ12RrMoVvnygSw",
  "key26": "3KNVy7tzTpmg1VBNnDicpw6A31JUsXzFt8Qk51BWsHA5dW11yK7xyF8y7AqQfSAutn4nkhpEQ8T3TVvTTwMXNjC",
  "key27": "4gj8QcEv5RVqtb7dTemzGQmafdZyZ9wkryr6JDc6dbgecYzRQvpEXxFsJWZ9ZYb11KkXARpwscGcMNPK5a2MPeZF",
  "key28": "5GkxhFmLYwHaTKRY5kMtLMi82StGKNtEQsLYsaE4hmPV59PCYBtXkMq7Q1McfoK1nGEeK8b38FyUid95mkiouadz",
  "key29": "9UeBeVZHDEEmNTHitmz7Ho2XJ3Mea6vuv3gUJ3DFr5nLnapsDAWjedg4U7qB8pXdB4vDDt6oA7wuFXHrN2gh7jo",
  "key30": "2EqXis5YzaM72iiCR9sPM72vPWDdpwHy3YL7rfDhme9uEc1CaZftFuZNMosqxE5cxntQLz1CjtQELPMGiH8VSEpk",
  "key31": "3xiAQqwqwr4dWQK7kZK5QGBPHG7WEpRoZGpeoVm74MFuFb9hnFtkpwh2E1JZqSfhDeXenhnsodGZfzzCD2c9KKEb",
  "key32": "2ejX7fs9ybprY2EU1DfQAZU88Jiy5sypm8JeKkUZ3gyZRN8ArFcYu7gtUMEELag2WG2wufVcXQobSbgkNjSdrLB",
  "key33": "2RZj7dbYYZjZ2GX4CH6m6Hg4AvKpZ4nKtsWetCzFEzrPucNjhXyJHy37PNX64gZsuu6KSq3rQdz7Yjt4ZdqRH5wQ",
  "key34": "22eBsutEyDMLZWvgn1A4BTiYqr8ozB1cXAURPr1tZng3HhFgm8d3w28APwT4GSKujvewm77JWxbb2Ec43YPmqBZD",
  "key35": "2KcEUDJGXW74Da3bTz8qtnBCkbS82BZwurRdhLzHJSetkYotLj9z5inkQ7VQc6MtwFLsk6MFjMLQ6x4xgiyWRvc6",
  "key36": "3gxgsaF9nrSAVxDMbF4gwvHWowgox943WBpuabfkMUf5o7QpBhTmcmjJvwbexufUB9UCSZZU1AGF89612euSkXDN",
  "key37": "3xKT4CoQ9b2HNUSpyuTZwKPmL5TfvtWuwhJT5GFqT98KhgRvVAzFzp4Gs1yVbsZhZCY96pduitvwbuDMyceuosLX",
  "key38": "3n1rPgNMW1VHTZVSKVvA3BQHaY34rETWoj3yViDf5tLM4oyk5NUjJfqP4xYDBhA34XPEqEBkxDB4bR4mfiXRmoSG",
  "key39": "2yin8vaZhotNPhDZhXQT2DaAhdo9bnKGhNR9JUAsLTdTDPHX2vRYHx3Ay9Sc5tvNHt52Y5c23vXq4FcbhfjgiNH1",
  "key40": "2NHaHT8ATUzDicXkFTjqyEZ7fCSVPKMuLAPuKrDeTmQ86qVEE8iNz2hzutLvZZDPx15i13ueGsrCFkDqXpiJQMgU",
  "key41": "3hJrwZX95rigny11LYFyQKWJBsQRwnpyz4meheoK6Qf9AmPeeTB5Q74f78ThENoWdKHBtMBgznpdY1SdDf75gViB",
  "key42": "4EWfBnZbL5BmLgByEYhc714skmawFoSAJtSy43Kpz2ArnNX1w2hMpU9FVX9ynvqCMz9z7R3AsTtaikCDiksw1kk8",
  "key43": "QsUUepxNSjeKAyskzdTqK9pbGWGod213FnbPY69EJgbe27BRMtWSqPeB64R3UuVNKgTEpqaxCxKbqRDdQGieR7g",
  "key44": "32rSJ1TKMRys66VvNhXedg1GpVwZfriHNPuvrrDu9bMf3ABFpxbRgBJMJXosdDsHkX3axemcgQR4TfQng6jHh9bd",
  "key45": "3FuRV4fAxiyfVgDxQddHSiyHz9Pji8mPTiEKnpZinMBNYfCmdpZhB8JAxsTx8bangCtxvKQNVdGcpGsVseRt8ho2",
  "key46": "2e51R2fRCDeaf6wA55LcKxzRydRgkrmmyapdE9LThcwMzbNDqPJcjsT3i5AoM2Dx3DWzjqs1QcAANncWe4kxNPPk"
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
