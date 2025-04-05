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
    "4JMHHc4uU3uwG96S5RMF2JiQuf6ybUTBpiXGBkVufU4AdeBzr7QaNeAd4NKghD9DVhAeixu6fZJ3vFgk8Vj6ktN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ou5eSPQqdytRs5aj3PaVphfgqRgEkbcumVaAZcJrXNkMTpvndqaT2gSVwGHg2kAwwP53aE5qE9NLwD9r2jq79n",
  "key1": "4gFeHxPWmMMwqt7yC9E15a9QQKWm6HzB6EVdcJamhiuFBA8mJXGrsgrYw4z7Rs9ruBwrRT1vDLK22uMzeAMtDDgj",
  "key2": "2d23wxSBNHoEsXH2zyudKHpKywoJwMUQL8yRjSfRtqUXdE72JUpALCqoQZYkMc49qsVqqfpTrUux38VBaFFceq4w",
  "key3": "328FiBwzpHRpBPxE1AR1muWzVMixAJVQGbQnJenJieF9EoL5TsJCZ6pheiN3RDyg8uJLxFdtggycxZpoewcVRzDi",
  "key4": "4WmPE3Kz1i7k9vgo1J8EWnQnppi6hnpkjgWa2XKwXPZRjXutfcEKiL3C7MzzcT8vZ7JNmunD27umiWLi7GwxHHjx",
  "key5": "2NwnuvLLd5TQrADGKrzf9YTEqdK51UtbaZishpZ5bVZcmMEAfotNhAdqAdYy7PpSxxmLkSRbzxdyQUDfPJ4hgYNY",
  "key6": "4DiUSDjKRaJvuH6fKhmBE6eDPydK1r7ZBm4LWgMjkoJGVGt2CCfAHxt8Fw47qGLno92KpswwB9C4ayLYdYwj791z",
  "key7": "65L1ZoUNySxVrrq6Et1sAG3wfv7YBv3imFD1wE2ZqWrwpj8mNHyPgEbtDF5j4izJbYxkWM7JVD4sNbNk9o2N9iAb",
  "key8": "67TLdd3UWudKHvLBQD4hosW8bf87fnueW7zNE3L44b6fZX4D8JruhffW2izPd3EsCNJ4xFwp27hxHt3ctasgNc9q",
  "key9": "3bjsedjCT7Zjc6kVbYQE7SEcsPCC6Smwz8AiaZ5kx33u7ufdGaTepHb6UgLYrBPaoTQqtBhKDgGVYjP1qCHw41U2",
  "key10": "5cD4opqZS1UDd9PbckmHUtcGrE8Zi9CwD6HGta3NggLGqoNXvF4FS7AyrSDqppNawfgYwHSxcoUMX3oLxGNnPQSe",
  "key11": "3pB3EaEtZbqEDQLFa2iZWHDQeV8vc6VZFK7kZ2cDbtT2aBonZErrSf18PPJyaRJZYQUMjGsdFR1oyTM358QzXSQv",
  "key12": "38nngaXQTxJYqQKH4ckkQt47jRaGYHtybKQyRj5XVymc7CQH72PhG3nHWT9rVCDAFpT8GUL8NXeTN2xkZd6MVVWe",
  "key13": "5X453QZCZf3g3x5PLb247hYMR9Tbjao6SzLCCk24fHxspbkSfZqg6nNduKXLavQqfsEvyGUpDhuiP1T4NWscdQuk",
  "key14": "5RReYNYpuQHuS5uT6QtLFKLF6MwLjw19M62pANBfDcALbewzKDhMNPiBD6nzXQHLdedL42qV4i1ZLu27HhewcCkb",
  "key15": "3j8v52pitg4Dvc3hTkxQPVwjm19qjJ9jYLBaXP8SuCojJimpU4FWoNL5psk9a9XqFywy7DD478z9aGreeB9gXULk",
  "key16": "kDYtfbnqWQfEpY6bNYZ5gRLmN3to4Q5J3x8duREjgMrdzULzC6DFPRkRGkwzFqsznwhbEkPF8tULZD1SAdoHEu3",
  "key17": "vxTQ12cBY4iqAqYu3e4NieZdw68EjN5oVeybvh4378W2upVGBGjdkvwhW7sVAGYcM6VCDMKBuWfeLLh4jQT5Gnt",
  "key18": "3aoP6KdSgWXJhu3i1fAvAsp8xyabPYSZWv7GrHk2VNY6FTc2mtebbPgRP5Hhg5NKCsU31yZnun8zMH4QeaRRD7b4",
  "key19": "5pJEeBenU3jhF8YcANSNmFLUzXZCkeQsowQTSdapHTHULxZNuGMaFu5QCoN6uyVLwPrUaoxv6LNKVG1Kw2JQMboF",
  "key20": "4Ps6bFzdb7TevjuTyVwj96SUTV3CQbfkrYoM4JnCWJyudbpZwk3NmAtbxbW4ZPCJvADEu7fUYMhMJN9mwV36dsyh",
  "key21": "yF9FVSeJ2oLALr1iNUGA8WoH75hA7tE7tgFU1p6DueAekKPtRsikXxnzq8JkWqY1puqFYaRZfpSeyKE5mzDiUiD",
  "key22": "5L2YtkmRHKGTXpvuSX91qMpfJvG1dyVx4zvpEwqvPkZZXjbFzb7EZrdHPWbK6N8vjuU4uK2jU2ianAq1uM6J8Rq5",
  "key23": "gd7z1qYWaFXxQgLDSH2fdBq2mT1cFTFCkNeFYSBdvX9XPRLz26qftAGnBbsfsgAsFGsLBJfhDxNK1zzcx4wKcMW",
  "key24": "4hknHbEi2xJJYVebsSVJb7azuspPhFEoXT6epyKHDzYJnKybWnPrDCPk2D2YEqwU7R8qGLPJPA83eQ4BrSVgEKZe",
  "key25": "4d6bpzGcmKzMQXZ1DYuKkUvRaxdVi49vyCXcgTUkvb2wwwQRrUtvNPT5znnxCjQ5TdKcM8fpEqPqHoRjsgD1hgN3",
  "key26": "2v44p1VNmbhezopVH4e8pGMa3UE7tcDhfR7niauTnkiUq9jXVE26TfgZLLCzgxzsaPzWV5V792r4361XhsFE1K8H",
  "key27": "gxyxGwr6ZBXP8hkjgQj9NiXiREBNBr5q27bhMmPMHnGKBrPcnmvegDKTTdrDNgHNFaF9maMNnCXwGH5PdwGWApB",
  "key28": "4J26wio1JqMGq7h5JjHBBzK1aK9vbXBsM3E67M9h9JCuWbBSio1wtUqHAkUNzzeUPEnV3e9XgYEpRqLfUWtMioX8",
  "key29": "yZEp2kPqkeT2wEuqSTEzZ8ESp5tSiUSRJE2xpE1oT31TQcnGTicVGtq8bExpQR5faqfMkR33g8d94mwRkZ2pMDh",
  "key30": "4NKD58Ed9DNv8zGbYiPEnuaq1DEsZUKDNB8t3bPcU3XrjB4GV3J2rdvhkJSLrLXRK1hUkN2Fbpi3utMdXpCLNQ5e",
  "key31": "5bjtpBegmVtrZRyeDgTPzoPz4mP14WW5QYbV5Bquq9W5qbFVcw4NbcgPNZDUsonfp8GM2oQ8h7PN7WSXimQ4CTK9",
  "key32": "2y1Un58fR3rANRJi57HDcTxuEnoRVGveofDfvaFfbbPxCGWpqepnqBtQEqYebBAUJVuoME76hmURcpEc1VX24mQb",
  "key33": "3bRjWkCMfyLYCoqGpccymroAAZ9WTywiZkEvNA8euVdB8QeTnwT8CPHUEXAtmUZTGba6wLbyv2mcEahBdysbGvWw",
  "key34": "5wPwW6zayDPhvAxibCgLB1SD2Br5DhNnxtuJz7zUhfhHNUhFnPu6CM29yKsCfPfTVvpkruXF9FuX9Y3gSTx6wqWw",
  "key35": "4HrxnzfShMXz2FEHshB97FbYGLK9P1LgPqu5gzeMRL1dbELy6HiQbTs3zwofPc54wmhz2ozhxaCm9Yydca9VHfB6",
  "key36": "2FMAGUhczxrfAxLt7diAVHPe8WonPpbYt91TYzs4bnWXzrZWUbf6wjzVGAbPeCBUngcBd1hmxmr3QShRio6F9atQ",
  "key37": "4Xxjm3NY9Nbjjfp7e9xfRfqs7ABjqx4TNTpQtov2y9jEki4r75QbjCKvg5kHADtgq8wJMtwPjpPpyHZiQY1rHcxe",
  "key38": "4bh96eRs5gdMmDcJnKvJVniusRHZGpticSbHZzvhf3edAm5ELJxdB2SyXzXY2V1dqdm6zNNuEw7TRfPTjoanTUox",
  "key39": "3WNoRuHbDxfPousr4WfMGoyB8SA2WXgQCskqCJL6MeBLjgfnPhTFTL5SHkeRgKPauHiQJn1Xpk8C9VAQ7dxyixt8",
  "key40": "Um4DK4gFqLGkByJrYgosNzGtZwMUgtAiKehA1YFVNjNsymnnCH5vuXpHfbJcdWjuK3uS3Sudyrdq8TbUeXMw7n6",
  "key41": "2FiP73pdukMyxaGVtp2fK2JLkSXgScrFvuvbJBkzjwVx4kwsWgWn97G1L1f7W8uzN7eX1o93EJ5JVniD2PbDu3DW",
  "key42": "3eKroUDLqwzz4tjFePdopGyo3v6pHbcoscK6Q3hsp2guVaabFpmQux1mysBG8cU9qLrMirodb5jRPDMMvJS4JLVt",
  "key43": "4FUN1HtxFUzURGxvoAdcN1DCRSQq9wijoExUNV7zbdxgTmwX7xoGQipR58p4gRtxYrGB5zRUn3cftosEcH8HY6Lb",
  "key44": "5FgauAAUBWpmdzLcrtAMPs2PccB9fA16cuJi2HPunQYjWFXsTVtBSj2YdzSzFk844W9wpbtCC8bQVbzGUVR3GuaM",
  "key45": "5WAU7sko883GJoi9Qr1qrqnyFCwEGP6CBd6bktzNjmaATiV4eRF4wjvCVqNvW72VhKKM3UXoLK5xqiYMNUw9Ktfi",
  "key46": "5SRjeUCrNgNsWhWZcq7hPdKm9gZcAThXTpVRdpHYYACbX99Z2P1NT3EPGj9ZQ18tpqJnbBPZm6974yjYaYbbTbfV"
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
