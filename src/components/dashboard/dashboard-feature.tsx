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
    "3wgWYcBjpnuCr5YyCgD6zNCR966kZs3qADPWpxKXubitnVx2UT8uQf2CZcLTcv99kij7iUNK6uEx8A329zXTscmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLq3TH22dwFmHpU6SEz9cy5UPX8ywoPShU1KB4LTsBfFx71FwwEhtpiHowuE2R98BH7VEGg5a8ZgbjeyvPeezmj",
  "key1": "5hJ17oaTY3BSKmVmZTz9tTYv7LZZeuQwM2VkJ6i5xVgVMfJy8GQf33Uqo6WPGFUowTGW6ykgQVAA5dCTbmapvF3c",
  "key2": "WH4whFkjdVVepQ7MAu56wA1N3UdqN3dDThuGLqEtq7BatMvhLSiTmNfQcPSscmCu9PmneJwWLGgkXTQVaPGXTfG",
  "key3": "2GUdG4aVux1xfVNtKhvTrRVP49AAHwxXjufuFe5CPMKGGwECuJx1c5kSfPoMkofdb9wbQM3Zg1oPzDvHTEAYYhSY",
  "key4": "E26dsh8uD9kPAFRTYWwcRwPaD627P24Lsvx3ZJJPA6QMFecEgvVxiGVeKy99VFKcQFmWAw75LVEt6KmM4kxkyy2",
  "key5": "6wz4Kct7ku3ovyeVdSY5nZs9Vg5hbp2S2uqDWuEJbeXYSbdstHtn7yEoLHCNfLwNpCu3VeYUYFrqDFhEst7VbWS",
  "key6": "4u9qai9LyPFXR47c8LUFLMYv3sLU5jsrbjBnbh6mvhBjoWxkiE7Ebk555zgcSEK2TuPhHKRJoRaQi7rQnuP8Y92",
  "key7": "xZBjeA34bJWKSHyZd1sDEZuWNh4CnJGBdLGBeoa1DYJuU2HCLHwLaaEL3xVE3nrgZ6J8EWMDNDCZYgKncizHXje",
  "key8": "5LJXjGgnvaXDEgYc2aoPARdh5vYr8duMgo2MtEii4nbsbpNTbp53Qo5FpEJFZA5rFcrfE9QrrSwr7iHKeYLyf7TN",
  "key9": "56D8ijiNMajA1H4X1ueFBqV1NC1aN1rvx6JZfqYDzBpc4ZQuyPcz2dn16DuoNtRVnkANWDuERv9UCSjpvCmYe6zB",
  "key10": "Nfb3Vx3egVpSNkN8GGiaLCMD7ywsS4YDpB6FDYNA6Jah2cVuF3cQyAyCeqtW4965sdAJf6Cij2bJkJLs1wfbRmL",
  "key11": "3LiuC1NhiLNAnaLscX7Nj7Pqp12VwzcGyM5CT6QZ4DcaL2nEpEzouGsaBo3JSrognGqoTSsgBTDP1hVoSZLMeGdZ",
  "key12": "2ixgNCJDhuuHNeUkgHFCYHHgsn2Hf1ek8PV1Stt2ekXfDCULsNjcSN7fygswQeKLaG148FosUtEB2YKwg8aeVbkU",
  "key13": "2DmoteHHToAHgSmu9b9DL9JFMcabBnCwfp4qmT6fmJiVcMM6P4dsRLHLdGwLQyjXL8RTtUYkDmnwUfKKGsK61gGC",
  "key14": "4ekKVMrnggy9UPYAaKaSnsooThqo9TzKMKPksCHVYxjjaq2LaT7rRfKiXRVscSwdHkh41UjM9L75ZbEtbNgC8eik",
  "key15": "2mwBHgwhECd78cfxvtArQVnRZbW4UxeNnre9LnAuYs1H3RuKbDLBztVYbsywyzDSr4E9qb7rSvga1yZnRy3Pd1pV",
  "key16": "2LERypozQhdGdVicHAvUTMTtS1BZgCWgtQrkX46sjtqvYDqVGDTYEU92YRYVuQQijij8SJbk9YGep5vm1rnUpuJr",
  "key17": "5dfzEAP2TovyfdtrcHQwMYDNhrUu1YAjDmyvPkgvojNoEKuA3NewZh7oaPNGPUfybYygqcK6gNaj7tbhrp8Hg49C",
  "key18": "35njdJhpUj1B7qrjEjGLBBXMzmnDWoKsytG9d5atscRwPrUQgextzBkzRqVbPwphpiLjWcUaPoGnkUiSLWD3Weyc",
  "key19": "tNPJ4RWksi6WdSDmxJnJyRWYVEFDrh9cMYuSaXpQz9BxDT6eKkThgJaHeEJshLWeXwamvBPXo19AVZ8V8HhjCHS",
  "key20": "1nQWBBjVpjxguCWird89HnYPUrVEpfmHLp5PhvuitjaRqFuPLYZVV1zjHD7byMSt5eKdWYTNo9Tg8BbAZ956naM",
  "key21": "4kim8EyqRQqaavVwppHsdsybcSkp6rtWJ6ciTh1heSHZCtZd5dKpzu2k3LTHTbd6BHsNRCZk9rWLwEPP7Uqjp9wF",
  "key22": "sx5UuDsNj9NGp9QKQkRkUmVFFaXPbp419hipqNQVeXsAQYCCaypVBgc2YENDqbxZJSJ1ynjQ79XuxCR9o2vBYKu",
  "key23": "2Fohw6BxWV1ZohRRpVRqdieNfxUGDT2io7Brw2dUKoUKzjYQ6CHENnRnTNWMQWcDW1RB1PENfeDExFuZL2DHk74C",
  "key24": "EFMKkNSP4ujbFZ7qQCdGVpY4Wg7UG3jvhb7jce6GxGUvM65dhcP4MnYCQM698uMWRRSFr6EpEzBUwjjZJoHwmBm",
  "key25": "4ZLqkmaJV7PXaQtzJBnz7etDiufkpCSwqjGKGghuhjG6gTi3Cwn34bvAQwtQ54k88nYuY61etvC5oSETUQXW9Tok",
  "key26": "22egui3ZFHSCsfJnTY14JPwhFKB8CDr1qimphSoMX5C5FPSB7jWP7Zwv4bvcFUUGQ9QATVnv32srxEuL1WA7noHa",
  "key27": "2ockN9TiCamGnoihfCQ5EWmM5H2T8xq8htkLCpPbehDNTRtvEu9MnB5gBxzSRwerAUhgAEuEdR3kAuJToeqNVFNi",
  "key28": "AJLybSJrHu3ixPZx4Xm5BwaYvV1FpSA3SP5Taa1HD8qMe36jqUGQP1u3trqRRGKf4aMboo4UXE3MDyBiKGbcJQs",
  "key29": "u2o1rqxTrY6BCgKUv5nHhXp8KZQh9s7JH2LUZUySYusiNbwDvG1mcTL5Hh9oMzQkWy118pesp5sn6e8Em1Whrke",
  "key30": "3XrVd6kLohcpnjhUKdBGWgVwjMSB2BCx1vXggDg7VJ3a6vSB8EUHmuEsTGTrk7mBvKBs7QDXzAcrY9smAiqXGiaJ",
  "key31": "3vng42QEpyadohy9Rj8ZoLLnzeEWTbDdP5ncwYbiruoTsVS5DKyE6fpKXYhqL8HU4VDrSX3BaLWCdkj2SrsRBm3U",
  "key32": "5msftqxAFX4MGufyXuccnS2mLcQGeJeMmMpekDq1bN2Ws9XdQLPJaGrt9waQcZurGRTuF4Ma5R3q6pZuZkEdk8qM",
  "key33": "4gLrCxxp3o3cQoKNfnnmbpcdC8kqAPny9ZhBmG1DRdioyUpwNbFqkKmF2mjqvw1Ai5ApRZfqMJejnpYPfgraTfkY",
  "key34": "5nyADi9XBrnxssF6eB58rXt8dcJ6FYvfWryhM4mZm9zxJAoZsXRfLpVSJ7wdf8znuWdAyehGW57zB8civCBAxJMp",
  "key35": "kLPRDBhk5SC6uKwwcbnJAFU8dVZBdSrbhhSdKhYGcunDcgCVqWfJCpeYzA4CHTbbP7y61tyKSPXqrBNfGDjejVN",
  "key36": "MurM7MSmLinEJMresKENuVDwj1cBYFYcBbrCyHEw24ep4df6vsZ5hgwX1M5vwUhaoPw3vfiZwkM2hVVRdD9oAhn",
  "key37": "Dcdr1nCBF6NYgGFbdHW5q6PUiQqf5miaceNuCGpGLfHbqTfgBi6iGJZh6iawMoo5qu43yzzLevbPK45PJdA97mS",
  "key38": "4FsdpLiykNPpCZUKDQqZgp7jMDt2aDzRehtF2u1rhmhSJfZbamFq1wYMyHKtHaori2t2xLXQQ4V8TmKBYndFrzxu",
  "key39": "1wRrgeKyLL2gqHHP192dqWNa9cJqzv5N9ZBwifj1C4KcBFmfuzyzVDq7LbEXfdMhVbEwK2vYuSBxTpsdWMaKSYm",
  "key40": "4ogbRh759TxJ6F6MWk8WeHhNB3bnEsSXeViywV4Q8XeTdk4ztbtuJ2bMr52rWjgt2eoeLVBbSXLceyV7kNDAJD6e"
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
