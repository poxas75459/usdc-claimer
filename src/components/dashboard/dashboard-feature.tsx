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
    "2wksp2i4dx6evMVEYHtCuaoWApm7uHAjb47iCN6hLgpXdZtZ7RwkQG61CgLDpxF5dxcjGg2iH6CsY15eAtPj2TJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGG8s7aGQU8DyCTMQaEz4L6CzcLarcbMKrcxYw2owrrhbzP1iun4ffdaZkYNmCsfDvTMuL2effUphEQ9Wed1wJT",
  "key1": "4Wzz9w5rvb1wnuZkmQskEaU61nb8x61AmafBxy8Nvi2LRbfqcWn3tT3FiDpzF2cHJHu3Z7sJqAAVqS7HhifDMGhp",
  "key2": "ggu9joddhRMLcQ3vqguidYe8MRycQCHpk1gH4qStJ7dYhT6CxLSNRf7CHfNJDXdGi2vWQrL3TAYqaXsttBgS1p9",
  "key3": "28aDSjPkDGwkYsC19amrSuYSDsS65u8cu4iG9zMQFDGq933NwcyQJWGb6nwupj6Y2pvKvdeRJCuEdYbhMCPiobt4",
  "key4": "de7WC2kcwhN3xvKqaSY5NBALUVuER3EBHUizDUmdi7t4KEYTcUbtNfn9BDEnvcqNn8cWAxbVLd14UcGs2sJ87tk",
  "key5": "QEhRe7oWzJyndkc5tnYeDmMXfRntJxx8nxJBAgKNxQPXB3ZGJo12ZdEUGiJpfHHEKjv2Br1UncSjhMmeZu9BNKd",
  "key6": "4uuXZenfXaaEGPk2GLjLFdNdXZo7p4ZTmAvt8o8rxMcmV3hxt4QE1azrwFhBPrQ8rYvq1zAeiKiwR6YPCn11EYYg",
  "key7": "5GAW5cRmCvtANPMufagJvkJEGQNcNJvYwuZgKmtWnkYrP9owJNtnNadHzqEFuraA2hdhwPhfr75MBXvz6TPVDfp7",
  "key8": "57CQKWNm7DDsNgj5sNyG47KHXb7f8RwufYQQmM1YUeePeVZXnGx8yUSnSZUCNeEz8J4LuHnyrAE9g67w1TadK2np",
  "key9": "2ozMHbN5jUB4Am9MjTypM4XigYNEKwUttB4waDBvSpWYp2WS5dfFStCAyKod9jVcmqtrxKz8QCXM8NzdA8MT5Sgr",
  "key10": "4bTWUYXczaymuyngsANohza6L5cFhkzJopmF4UJTMe6HqyvtfRf5N3yn5jeJcGbaEdPP9LpjYJ9qTekpPPnEuGYC",
  "key11": "2NErEoJuNrdPsdMkuPx52ztffHfDbM9Dij1cLzkGhdxyeXe2ACenpdVcFj2Bz4o3wh6iAPJmz8uG5RkvSoA9k6CX",
  "key12": "2efJqpzjKuMpCVfUPbUwgYRFc67RpqLEBHWeT722YZoXcPjU21JqpfQjXDuH9aiyYfqPzRSGyn9GUTDDBGtceeFu",
  "key13": "5XeMvxrVysKCYs7RpAiLKGtTB1wNY55Hth6vLTSz4sL87DZaumQ4Nv8PsyDUMtojFevmon8LExBXSfgsX9pyP1P1",
  "key14": "2tvP75akT15FEbcgJn2mg3fbzGhx5Vr2NjK2mfjRb7QqJ6PsjWn3aRdYTAwFKBvc5eq8mL5wqxVVgMrTxZJaLyfH",
  "key15": "t5tj4GtV3k5U96kT69q4G64ncx6e1Dpgmkx8CTpRVS3jerwUbU56kptEAgAQB91yWedwHXru9bZemNsDDPxTAn2",
  "key16": "4A77MWCo4S93UtUU9gcB3Vtz5fja7GRdLCbub4YqWRPcgXHCjerCm1vBGvNJC2zxiCY2T3jwB1FaVoYYNrPZuyg7",
  "key17": "2mBWGtwFefgngFu29VSz3En5E6aeSLyXzRx6153kJfnuYeuKWeszsjxd1UueLEiPGuE6wbqcd8aWmY3uBPZ3Q1Ru",
  "key18": "3VGEdsW5KmDEM5WhknAh9HQwydBtom5KW7DW6xnhYKvtXP7fpytpcjoaFZ8rXjjb6jzkz16BGs6HJfdpMMnWAjru",
  "key19": "2rrChCeCKe1JEPcncPciCP5PhsmtaRxNUboLSjPXUE1SX4sF7UJLpdGrvrgg32pUmVMWaKdTREgdEJHEkXHQcKNB",
  "key20": "5DjeQJwBLmZZitGVA5VUUTLptfUMs8jiNVUvU91UaXqcoUVsxb3TNNKfZ2ZkLiFnpbbNT8n7GCWmsFAE4vuebLeZ",
  "key21": "nX1YBHatawLaRijLqUEPE1uT2SPaxauBZ8fgZ6YjiBC7F3Rzvmq2btRE6r2ube8V2R4H8U39QuPPiscxGZWw3kK",
  "key22": "3eHiDKXJmhenLFHmNyuQ6qzNRhqCksKcGDQD5EjATiBccAt9wZwaYLJDgbBc7zemTGY7zk3Swa6VifXKxuk3a5nz",
  "key23": "3hXkxwfepL26PEhZiTxQBhGQvs37aJHgzqqoPUiu7eG32i3xn6qhyyh63RpPgycrKSPyw5ChzpbynjfBZ4dbSM39",
  "key24": "5CjJ7WmR5qoycyDLPS9fRt7KS6xBVqq7Z4A2ePq5TuScuXxENMFnR32egMJbgEriBQKoSxd9nUuCa67gt6CiZH8t",
  "key25": "3x9q8KrrJHb9LUndL48g46gz1XoF2iu7EbL5eosj5EMRbxFp5adn37NQTZ4fLPrk5HeUfQfu4mvkui6YLWivLMq8",
  "key26": "5cmzD6j5BcfTyPTtJKG9iD2WjThsxhRBz6wuBZtxP4jyAo19R9PpzjrNnjMFZNTiABwB4fPYfvoh3sDGCMgKccpc",
  "key27": "2GCRuMsYnFNky6jQmar8s9uUi56kkYNkWsS2gEcNkLxjTVorZyTHzLMU3p4jDtMPkhWmMg5ABdi14dAsoXAXz29d",
  "key28": "5BuAVQNMrpzaAawwYiR8e9F3zXAym3f74qGL45QsJAd5qpnKw646uhtE3JzWckcFkDL5XvEzFttZMrDtFq7252vG",
  "key29": "54VMPJPBAVEGMdWvuSUqa2EREwLrxT4atDzXBcoSRwypVQGYHDhotr1gf77rN9cnhj5z3jwWJdxsjpJSwMumUwA5",
  "key30": "3S5KvcWjjg8R7y2VUujzU4HUnp63jV1qevrGbWbizdbCdQ5R1LKTQVnmvsDhWbSmyivrRfP97ii3aymqphbXHQaz",
  "key31": "dCZYyfWynPePmCT9FpnLk9fmXQXpyca3vkpKYFRNByRM8rs559doFrgevcY2cqEPHqUtrE8Efw4WpskQM4EPMmm",
  "key32": "4u9NkDrB7mPkVSmxKYcovWBLuSh19z8GBRYrYcYUoUVSCTr62gtcADs5xfWbc8DDBik3NYUPa2puDk9vg8Q5HET4",
  "key33": "4xTTvCzrvPZfmQFEt7zrmpCNLV1DbVmwoKorzfSHzQMhGDqo6ty94HF8SpfSqyTLncthBsiZicxokrbouQufRMHr",
  "key34": "3iuQkpxcUco6raCNTyaawmCKJekKYUAaovvGwngb4sMUaJo85yn4j2wRFmRoYN99TQ8zwPBUexEo3ceCFmgBsRh5",
  "key35": "33xjpkTCRaHeD8syfo87LB8X4FHJBCDkuhJfkDnNoDeiQneby3v42zj5i1xmBKyf6A545dyxRsETaQLSZeDn3RgP",
  "key36": "2BnETcctyJu2CfBxnDTpB2U3CjrBbfLtLTAwQJbGbGzJeN7f8iYaAfRKDQgx1HZ53BvTi3oSVuWrDymYGTP6NzG1",
  "key37": "5sBChECU8F3WdjznEn1XEajoxkfLwzzkHDajhzEPugxQjAN1rxNGjwjaccQhM8t7PPgFLSVh3aKPJMACSxWDM2QQ",
  "key38": "2HYNqdcJ34R3A7ouXRDAKTace6D8HXhYgc8bTP7qxHZVj9wnVr7a3tft53TBJuGJt356PXJYqReW1Ybjc4Tak1ia",
  "key39": "4kNsKwxmvKgXeHCCdkRUi3JtBseLNq1X4F9UygUrc55dNtTYfv1xUFeynQK7VMyGJ7w8JaxATR7UZ5dJvF5bEA95",
  "key40": "5dWginaSJwii36ZXEJqoUq9HU6a6dQfrEs2ehhj9x5dTQnxVd4CukrkR2e9DNjkWudtCvD3sFHjNVmPBk2hhWWLy",
  "key41": "5npavVjtUyubvUYd19NfhSRHgNDKWyxjG1KR8XbGG7Lvo4fUWxY46z4eNdp4FFPENJTQ28D98ViQ9p2hLzNw2NW",
  "key42": "61tiZeTy7V4YcJjiNgbvnaVPaWo44mDbxU2qk5R8ohev3HQzDkVdofAd4Q5UYzMGup3c6z2ro2MsjYdxqFVRCVaK",
  "key43": "5kJemv6MvLCvLiD7XiX3aiPLC1J6MgAWsULmLrMwADb81ex7WHzKoCSziHT2EQgE4wX1fyBocGWXXaj6mbi63SjQ",
  "key44": "2pTeMzDin9aiiTwvohUBKf9fnfh5nRKZbfPk57adhpXbvcsLXZZj8t6iSGUxtparqitZ6AE49ofi2vmPv4YPXsDj",
  "key45": "2kmF79HFV9RV8KukJwBUVyJE1d1ZPeZcBRYgBoDXzJcTPDquPMLQMRAMTpnT9jsg3xBekJ2b8iKT9pPYtENXH24o",
  "key46": "4dTbFuKXmS6A3bD8wLky2Mq5WizLzrdqnRAXiShrtCNm2cALH44ArVWL1epGrtmchxv7jkWsW5MX76byLGapY2tg",
  "key47": "3pCbFTfAZpR8xsAEVZctfgbqT5VsQzhaV3Usuc2phJUHZ2pr8cgRUeL5VV51zdZnvee69Q3VWHg8na4Dy82QifhT",
  "key48": "5txQ3KfLiZUx62GfHT2GUDAPnGLMNnnQRiyir17piCEo7bxyYv3sWzcT7R8EWDT852ywLKDcdQEZoE6sDeS6SJ8i"
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
