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
    "5ah5ThCaPva8fgvq6thn7SGKXiRdbfTvDK5UgvwjnS4VJNxCLXgU5d9nZ3k1ytWPbkdQchckYe55DBGib9U9NKb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2R3RUv9DoWqtk29wgamMYxukSRTu6wLeX8g5UqGuoQa9swifdmKZkxfnqxP5f5AjCKfVCsyHPa3znr3CkAkXE8",
  "key1": "5jF8oUSaCA7aZanXvpo9ZhUKCpRSibyf13TT8B5Up9nPtomKezpwCkGs3bLmvgWbKsCEDFLqStCDP8fLqjos7ECD",
  "key2": "MbyT4sqSmhWKuZ4aRBJMUtmYn73BERQyWxiw5LDydsKC8pHAidcYve3KMAZ4yDSfmQLrncoP3SMwAwUayNYVopM",
  "key3": "5zjWETr2Mm52FncEgtZQNztxYhuy7jB1dYJ8HJjG78ZJsDeGkzdQnxBYJthwhk5idXRHG8mbLHJVen1vEQuAsLzh",
  "key4": "4g33gZQZYtN91V7qeksuLsZ7HuwERJ3yTqW5293vFVgFswnu8Tssg9jZy7Pu2qWXQ4SJrq14ynN4f3SJKbbzEP8m",
  "key5": "3xDC7iPuzEYQeA9pkQSVNYcooLre8Tt4mx9Z1P9GCa38xonA8ynnR3E683Ca2oKmFQ9DPiAkC1M7Dgh6gz636fjK",
  "key6": "476DMhZF4ZqaTkZKvTuZioiDCi3J1g4nuDuYZgMk7LvEh4vJjyU5iZDeerf8mfMBWC9JcZvjZVZvyRDkctrTLMKU",
  "key7": "HLfTNycXHDkibZJ8r9Zga5x4RuJnKxZeHwL6aq2J4VD2TnLJm66fFdsiz4pzEzV2DKskEDr6KnrJDKpjLSUzkrk",
  "key8": "2bC1ikiedGrcyiZYiUe1nwK71615UHgaeZXXucNBZ4umu2oY8671tjsftXpErB19M9uigEjdxh6arreHy7hWFemQ",
  "key9": "4FgjbfPyqyTDb3qrYrqTcMegjUus8RGQo7283T8wdFEyqkZW34onqQzjmyXqqMD6pxTiQfeyJdFgDhQtWjEXWmDi",
  "key10": "3PjWH2TVnw6L8MVNrP7KVdWiQX9AYYFYEiiS6J9tq1S5fkDV7cb2ZcTk3iQET7KYGcUKa49Qrmd4WkcDAXpRhCZc",
  "key11": "2WC8xU7sZXTdZVpms88BzQUQA5w6PSAvWKgyEFFNKGpbtymSWEHjerffEZfcitmg9pB9PJcB87oxBJThipNPNEmg",
  "key12": "55bbAQN67QHXCHtKtse6NRyvmcpSyC2ypWo8ibcWgBkweh1e5JKsG3K4VM6ijraW917ZD8QWVXBH8eKsn1aspdAD",
  "key13": "prDRYaJJjH9RozMNtuJ6UKmtpckCuTPNdYyKdchTtWMySqdK41RVS8kUX7Aw58sLLKT41basBgQ8j5J36PaZePt",
  "key14": "5zVJMELc12Kfj7Atc2KvCdoqj7Z3UMSzpwrVdvShv1xBi1G4LyPF1XPas9CVXJYshYvHHFWwAKYwTNoNs7XJUVc",
  "key15": "ybbETpdu1pN9CCiNVATuz8bZtMWeG6hW2HzFRikwDvzDcVybcYa3jHq9yGhNrjtstWKgSMCawQ4c8KUKPAaQgBr",
  "key16": "4YYtjefwiQNfgT5sFb9ujwtwuGQ1c3so2gKAAi8yvwqtzsRUSP8cXxvX652rhhZGxCXYDb171CVpE8axUqCYTYpB",
  "key17": "42uYmT677MGAM3jRTBxsor832iNkMXjkayJXcMzmMcxQpMhSvgmfZnxkZsPZmyj2vNuZkmYv7kKN4FhRJHXuukzW",
  "key18": "2rjp5sZw4xNxpqt8F4PFJuJN5SVjpJ4Rf5AYfi4ErXajkZrgR1fnqoNZ3epzgvJPHGdEuefJ853x1wyAvkHKh2V5",
  "key19": "AM1NwmbdP8w17iPCJgmhPpWMR5zc98nAfqG9GavSezxAYgctH64Kkf8neuGcPVFfcsE5VjiHNPYgVNDfi3QZp1F",
  "key20": "2FZEXSSW6j5bZzZK4C7kkcmD2iEZZfREQ41ZuBYbBggPbA9CQy1PQBhf3DsWSPDBiZQX3DoZVpQXUmtbdAaF9JZC",
  "key21": "xdmvgknvm6VB3xfLWidUsmdiiPSmsqdhDyjmmzRXDDp2rAY5oFnVjUGVksLDfGzxXKkAyVMmRak3BTq7tSKY3sX",
  "key22": "61PkDZtd4KtLeKSAtNWDgSuMQ7MvPFyvcYsuktxW5haAE4hpaM8caZxEFpp16S3b41pUC3GXNKiZgD938ce8yqCP",
  "key23": "3AcQuBBdeFPhUzD8Wa7t1JwiazCc3abVh7bCfz7nSXcKnLGaRLCUbhF2YhGrVfQHapuW46ShjDRkJKzwsvAnZhdq",
  "key24": "2JewNWRREK67LtN1Xozeyjpn2R295sTdTj7ikbH2pJaeXQa8Rr1yNZsSXWCEwzdfmXwxLPB8vB9CcTccbvC4pQMy",
  "key25": "35cCaktHHUrzJHhSwSL7YEAJ9W3SK2o1y9tD7KBLWxCoVQ4QAohryEBhV4PeJJ1UYd633rxMimQLDHLuMQhFvFTN",
  "key26": "54SGh4E9F234ebEPYsFL7NPfDYXBwtPFbcPMPCZEEKrVJja5Y7KPNRc2wBrCmgaibDYuZNZTyzKadPMMRAbYAwdC",
  "key27": "269HbDbGxLcdwQ9fDZ9VMkNQsrhDCc5WkdnYLUgrnfZmgHLxMvCriwB8tF7ULMUAaTsypXKHQivECv1VoBRPVMJW",
  "key28": "21jn2qaJZd6J5n1xF5pc2NoTf7zVfsf1tPwrUkJWe4F4R9YaroTXAGCriUp3Fb2cSwkUrUw3UTw4UKoLG3UyVg8j",
  "key29": "2LqmQzWUtYSJ4ZsNGXoegvE4hwU7s4gZacpDcSZ1pec8MDfHhLrLjQfcfmn8v4WKGxAUWf6QyZRRif5fNw2Bwesi",
  "key30": "5S65NEJ5VZb1aZ6tsbfGvpmfHxWw73h5ax6e6pz9ioYgvSe1nGq7vHExDzFBqjMCTxZvmJW5tqSjdFrJrJgGvVqT",
  "key31": "2ooX9QazRWsRgL7WDz21Qhf3otAxChsqCKbC8CCixWWimCJXxgWsdHLv2KjTVbpkTPTpbe4qqLk8PTe22EL3pF1i",
  "key32": "4t5sJbVZEnmrKv52QZdC5X9TWoopUj4NCn47Hhi3voZXPhPKM1DeKGez1HDLKL51wvKuVV6igAf6SuN2KXD6jifX",
  "key33": "67oB6kVH6SDqrkwmp7ef4KwW9Z5DADAxZvKEfDiF55ZPVZWo8Cjx5RYFGgTkqLgpoos5Wgs7RWZbJ8h788anidVN",
  "key34": "4ZXZaAyCscAwTQaPdU4qZCSxLMJqub5Ytx3ZyRWK2EyiS6bXGQMBm6CYDgiaM1kcfC7vq3BhBUnJ3hYykJDjk6e3",
  "key35": "4eNzy1FzwfmF8J9PPZ3KEZbfarrBeuAr8Szdvp2JDM1iHgn3PwYMZaq9TVtgwzt8ZKrPNykYjZAcXiRmUPXBjoxJ",
  "key36": "2B4uAx9GwedodotSrW1gdi2iYzbZk4YmmxorPN3W5bp4vsTxqa3iGwx9nTA6q95EJxz39Cg7acSxtopySvCKYYLw",
  "key37": "4ESzSWuXM1mgodkAADDaBubqHTvbRJNYi2tkZRhKQRqCbi2UorExdqdpg4wk4APKLEEEP49ReZm3YSDAMbRNJLSH",
  "key38": "43sTwxFf9vLdAcBu63sRRt4RFu34TWKN7UdKJNrteJfN17tmbobeXRKFgZ5ULkojNyLwWJNPuo4A53n42PZRWDkZ",
  "key39": "443hhTj3cZjVEbpc3AaqXobMpQMyG5TJ6qvhRfuvL1fJ4vvWtGqS7isPEC9hiBTeRa1qwTPKrrnwND21ki53RbxQ",
  "key40": "4zTDUKbXYA32CHxEy1YSrZ8hRSFBiYCr6nouxiWk5LHk2i5ctmeCgrrXjRMUnnjje5q8pCa9wmpfkkq4BwZAoZJD",
  "key41": "67W4rSQT74pqnNKPbuGMrQiDi6i34mNMHUrPirKXumC22JYnQ4t2JbZeqTRz6rxnNAdjsuaTn6FhDrCFt6X1y3zX",
  "key42": "5cK2KGwarLAnjXkcyKrYXbCbE7zXXs7FR8xVesHGsgnpt2tptcFEtSeixfqEqpPxXZ9mEkmWJp3UtS9AjbsLVyPC",
  "key43": "3GvJ4x5dmtBvx47ykVWezyuqZL2j7Fp1QNn6GWfArvRy2qq7JnEciCXHTfezCMSd1u6HH26zi6DwU4FKx7HRTksJ",
  "key44": "2vXSGLKgW9Gu2GNN3YpYf3T5xEkqvrLPUojZj3Gy7oVZZsQajfAsunDaPR2YNXy6Q3JZf9TxJ2rdgmyRLY4WiNfV"
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
