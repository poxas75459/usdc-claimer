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
    "2awJBcFSDa9qM8P1YXh9ToGe3xoTKaD92gXmpHNQvD22Lu8KYuuapaqc3cZykRJVgR3tLsSeLUwxeueWt76vnwTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ud8ou2MLXWJtuhz5eQYQpsriR9VDJ2SbbRpReDjk4Bh7ecADX3kannK8ZGrXtLSAv7GugqBYykg17hLAiSATHzQ",
  "key1": "5q5rLVVXeJ97fyEkf78Q526s48xYHNNWYZ4dwrMV4xxYDD7jVSNHFnr1gnnhdhEhydHUwNYjcQwgbx4pjeHLSKHD",
  "key2": "22LP32YecyioYSrp8LeiPCgAS2FMp7iCPMkd6j9ZmNsYS5VEjkesNknbKbAnqMBb1VfTyGCti8FLCdYtfWikiTHc",
  "key3": "5SneQ78tU4ZbiDRGHA4tgKetioapVViVgDLi8Fh7ayD1R6PpMX1HGhcV2WNNxyi3bVcbfY4pQJpHbmEinJH6xH6h",
  "key4": "yiqYfeoHUZamybj1qR7TfP5LWCp8wnBkRiLdX7aitH6BMQX8JGJs8yxd2TCV4zx8tQt9qTEEVnXjv4ujvSyKiV9",
  "key5": "4XpDkYpiEkhAonKKRTmQB7coXDeu7sRrpSfJRBWgRPHDyNuAeaT1m6PScuw9NEHH3F1rxAqmb55cTYH52AcpRv1c",
  "key6": "5KRbFKEwTr4uUya8HkC7AmXhpZKsjTeTepbJip5ozFjbmncF1RW4TJuJ3kZZckVQcLEZh1LLYnXShWmumYsyPVFe",
  "key7": "63AGgzzhSgiEM54exZG9TwWt7ErgFBHu6mAf8BmytNA5CtyiLSkw5FP2YXVXcpPEG1n9TECDPXSboiqEfBvdAU3C",
  "key8": "3YCvj7KbymCJuJDEsWGPpopjnhP6KsZTxStMEBFWLUe6o4C97nmcfoNM1V6zZh9JusxkJT97jhuD4acSpguPF94j",
  "key9": "2oXv5rqQEtjv9Xsmtnf5FN4cHdToCDg5jan16zUhExyhQaPnD7ZPA33AZ9NtYLK6eTTurQgY4WN73PfEALyit29n",
  "key10": "4zjVggSVfZTBZXXAXiL5gZMCL1tN3jvdh42oQ2yjbC8yGJzKAu41TvBJ53WNcfLHAqkvmSMYjZjLnV9FinTCjcPn",
  "key11": "2w3sRpFeEbnQDZPC7iccKezewqviMAdDcRp8MDnp3aRGEhxy4EoNjyQPgjnHdkZALLSgE85iYEghoNYF6nCN1Rtb",
  "key12": "2U28SGV4jHDrStikde4rZkJfTuszvTPHSj3zX6L7sPPyrp91E88HvF4rDHcW8yoqdNisathLL4wRJWhpmKpAa3jL",
  "key13": "5Rjqdhrvio6VWksxubCkqzidbT7F5G33QLcXjDbv7SuNhQRM2yWPXp4pzucJXNW4T3mJLwiWSL7rohFZ58vc98Ar",
  "key14": "a3tpkAt8tmN1eaRGPrZZdx4uzxgamiKmcJnapvU1q2Xk85TQz8rEH6cJjenFH6CxtuGPckESYmcpttGjJpcu1K4",
  "key15": "5Y32k1wu5QtWFW8mmpeS9VAd5WacDKjD16xEZRZ2CaoUxmPGAjThoTAuLaybKg4nRVwLgkZbAScvZNddPYYC6gFX",
  "key16": "29myQKTSVVwRjVbnwadNmsTMo1QAGBphNri8SAZKmCGCYzqx3fDDxp912hYKbsyWaPNnALu5AMKe64tkjpCUrGLG",
  "key17": "3k8R2A5n4cfBZsA5LX4uXyQ28LzQdtcnWxbnpXJz8Wu4JYhnuTzEVMNp6oqySUGbooucGobENiiaMW4mq96eo4Nd",
  "key18": "2gyPtidbGM4nuGNC38T7ekvbyn99FNqxBq2jgFHGVz42bs2J25hdR4XKMaehYT24Z34qmXbG8qSDS1eDKWhBopck",
  "key19": "t3CsULRzP5x8KqL2tUR4Q4rd9wV7TqaDThiyBsfa7ht77t3PE5hADSgn2q1MFj6qVCsqtaNK2EbQDWyEw5DxiCb",
  "key20": "3MGj2oLdHXJPk6GXphufBDiVySuRHkcXFgjeqzJntdVCdNnTL5Kucf6bNDitedDtgsQfoMAecyTEesm3uNoy7Qqu",
  "key21": "26BS6jmzwi3fwDYU3zC11Siwon5RUbBGxnW58ApUbAw9bK5fnNtNw39bLuhyLcqVA33yeNgScMMWTmU4GoWFmAht",
  "key22": "5vaBjrEqLnJpt2HbQY2bzedBej71XSaDFXKRABMhEBL3JL1MMpr54TR7pQzxzSFKUE8d4FGa7Pc5Wzz7Pdt5gjGw",
  "key23": "bRUVQmjhU2CwDnUzUpDkbAaDNUncZaemZxrtWLMWvufcWhCgCgPhzejtXA6hCKssqNFuYYaxNjmqYHThY4X3oVf",
  "key24": "3Jjj9W4S8w7bfNc6of1DKrcUHjyXmZyWkfc1Yti5GVPwggmm3ig5W6uT3FDJFRd2ZMwbV5ksZQqpHfJWcnKYWwh8",
  "key25": "CcWUKFFgcGP5pv643od9wxjGVTrhQYL1HuMNVR3uUvs5Jbuhx3RLdCT8wWHB4zSMgipYe4WpToCeWjpNLddc58R",
  "key26": "4Ugvo912hd1bbGzZftnt2Km3iS6NKkbwFKsoHsvFg3hxL7DW7EKvJ6GFYWMUeqntvEbebeogdMToYhDWVafLzzJq",
  "key27": "5yMmyYm3d1foeWar3fk2waHXs2abgWzSqeAU7VpsU5SzoH9Zm9c3P75ufUFx9QSW9rgce9Akzq3JKEtC1fztA6K9",
  "key28": "4j6Ryp79M6mT9LaUZYKMNGXg27V5JFmmytUhca3yM3aZMKnUGijNRfc4xDjpYmNcNaMy6mqKoXYZhNH1PiJEGrhd",
  "key29": "ZKDJuWpKPUJwtaqYwwPwTR9ecbxe8nCGH2MEeUiRyb9BfTCjfmZiB1trLgtWrHYH6KhoC8Rj4QjVzPHvbtXRsPD",
  "key30": "2nPyeC68WTLCsvzeyfDQKqvgCXKpnePECjCqvz5jqxA9fLx7crgCrj2PTftxoPEa4QJU95g68iX7yAqMnGhPbCFV",
  "key31": "4ybUPRuRpbvrQorvC9kb1hStBa8JmTSFhVTWEhPMUtFhXbvuLe6XJ9tPBn1Cr74EQx6GGRPyqxBtP1DJyjd46rJJ",
  "key32": "KKfZ88PMhtQEiz6W8387hKrVnbzcerFx25HdcKJ8F4GWsNJ4kKhbA2x8zfqtiRE69msEZf7ohfrgtobLPCUwhH1",
  "key33": "5d77EfGhCUU3crqbxfVYxGrqgCJDrs2PxHneVjybks7XDeCAX81gcyvAecbFiSUu8PQvugVD8i9NCAoxeCggnrDB",
  "key34": "rzgT5MQuDkDGFD3pbMpwRC4YxqYBYRyZykn9jmQS9o7A8WpVQzJaYRzw3fpVq7v6h7vWLQDJNHs3AtTEgDB75RH",
  "key35": "vyWq84tL6V7tYAivfvkw1WWAfaqwTFv3WkN9GaFcRNRjbP55Vg8KGATg25jTjdHj2pk4bEP5j9EoNh8iZK86V1b",
  "key36": "3xyhYDjXWsh4okh1sPh5yuhZSh9UmydYzaF5CKtzT4G4R5gckoqfb5VnRZoXF81ojoP5wSARnb877DEoKvZnNSbm",
  "key37": "38QWkWjxEkEEFBjjtcz18yDtGcUnrixs4LHqXrxqVL4Hqk5EmbowMKSv3Mb89B3S6LPwUh5h989ChXhPhGDQHFke",
  "key38": "4AsHG1u7BPo7KwgcQVhqVoS44gpmGKdHfqZLLpbwp8uFmF8WaYyvTK6Dyp6N8rsoG1isFo8iaWp5vMexLVxc36f9"
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
