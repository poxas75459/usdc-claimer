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
    "5C5Aoc6YCMuJcFGgX4kri3LCDFjhWMQ4kmHrsqnZKX3xY1oMnTLquRJ8vyKxmTYGjF9eaTpHfhvAB8SYe3gAoPrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3fwh4WM57BGxsPMn1cgQNqnWWzhBYba8pXMLWNFjGHBHQP8gujX5L3KcTJKhGeiyTWQ9aV39Ua7cyNzzXNED9H",
  "key1": "5b6nGjsVxES7RqZenFezdd4EmEU4Gp6c4Lsxb3GgDbY88FAin7934ozD2GdzVuTr6BsuFvfVXFR8Y4AFzs9N47Sq",
  "key2": "414F4SbUJ7bf8GsRFP2CvnLT5aLQ3s4BScnAPVVqfmG5Q3fdhjV1cgFjoYCMMXo7CJGtwYFTEpF3Hwyx6Po2HmC7",
  "key3": "5tvYZV5cx6a2booabRJi72LoAZ3ka66X5Ewmphcs9MfgjK5Vu3D5SZ6CjgUSb5ukfbihVLZBmbdRFbT1Z8XZPnSV",
  "key4": "3piku7mXgFqZzfxwCjJjTnYQxva1pJWHJ4wHH7tqhcq8giVuMbXM3i4JbCDmY5WxRmwAKPYfMdkWPBgNSVGYPDd5",
  "key5": "DxfFHNmQiAPqJSyey2eMYhvKXzdPk1GzCTd4yFUbh4Ad78g7KiyEvBGTg7FBE2c4EfrTc3VHT8QbZ2U2s1KECi7",
  "key6": "zw1sDwdLPbpnKd4FnC9ZHHFW45YNf44w2biqXGjMcrqeafP4191ZkuVHNUHoGydTutbufXYH3fLbguZLBJJKW54",
  "key7": "5Qa9xW8LdyWuh9v2PZGvmHYRgxsPBjSFRKqiCLSFNtnJhxySmncGPDYu45sq2PxDxNopn1WuSaWKPzkKis7v25rr",
  "key8": "56Aq7u1Xrvqv6WPBMp4uAkreMGwYB29T6LHHuTf2tEzuSaba64n8kexYBkn6UudsfcSpctoMDMKgGdLjpjwhKbjh",
  "key9": "5TbmjEiWcaxMViFz9MePcQBQu674KQRQnWe9mCKM3oGvMcuguabrpGttsW3KfoczaP463bKCJum25DNGk9AQLwMW",
  "key10": "46eKYey1bnvVoyNejb7XYNXc6FDbxzYnPZf8aUTMZi91GeJF5rKYmRXVfoamrGrDmZJq73yvJHsHXVAwaHY141uf",
  "key11": "5LqfbKYe8q8rVHg96xAL2HrMa2MExMP7n34mT3P5aM4f1qcdxkd74h2WvwhVBwjQdC8ipEseGubb6HwwJMVHxaBC",
  "key12": "5BUyQdExJiwuG3Bk1gMaR4uTtcTvfgY6zJPDByviKRnpaxgkdmB39SG6TgDQWGCWoQFFQpZ82EQgv4Tg6U5NMy5N",
  "key13": "5m8aQ19z8ozwxKtBTMJm1m11PEDzepX5KehT6EQrCEdySPYVVsdW8uowsLUvjkFSJ1jbFMKULv7bNrexhezV8ogb",
  "key14": "4xNYy3t529FVjc76NyS1YPDoHSdrUsSqPt4pb8WBuTUaCaEZKxPmHsKDxYWCShPNSt6ZfrRrzW2tZrzy6jYCSkhK",
  "key15": "MDn65HnLLQc9DVXwBJhZBcRrwwDaua6c3PsNPE8ESkHEZrFdgrehFibHW2jRyBpjXnv4S6cbNrP7LD4PXvNzw3A",
  "key16": "5AFLmQTw37qV9BdDkkN4PTxSQ4dGu4Nbv1FcarbzzPUh2JStaX2dj3kq52jFXVW2YLgjfPiNzWswjVfmRfUtuc4x",
  "key17": "4VAbhsqLMhz5Qbr854LPjaAgkNuF4Km7ZPL1HGZ3JuLksLXHW5vAVtdzEbUBnaDybgia1Dqn6MMPAb6yNQ1mupzS",
  "key18": "3WQf8jCXDrnJZcZNNFLvErFLABj5pqCbHJo9o75Rwe4Yh96cu8oQF4ZFdo9Juf3ans13RShxjtU3MeUrmyZhaYgp",
  "key19": "3uQikktuz3PJGaqHNzcv7wAphhnsD4Ubr8VWNaYzk1ktxTktm4hGwUqrmoxcyKqBMjv1LiztMonBRmLe5iUdaNAm",
  "key20": "545dNJpSRqPnGpdxQhetNimsnXDoRPYXyD7Yx4tiUazRcibVtrb8GjLqmuxyFEBdRcsHu5qA5nQhgKXbnYgiYhSg",
  "key21": "5cEmDrU7gpEGbsJnGTDoUkCrUdhwsCMJ2At3X5xUUgYSY3kYWhYT9XPsJb29MW6fV9rpL8EzK1nzd1EfnAuBeuS5",
  "key22": "42knmjs8yJgHSFLABjGAPC2oSVtha8RNqi2DjMXGFf3PRjBiYrQKRJCiXWprKkjnVG93sVAFG6A6K43aPvzBKs1y",
  "key23": "4Vqw3oUqLTVVLKU39LEGjtwdiECkFDkTRuCLUopGB8vP7S4qYcGpM9uAazgp8nMiYUzogLAKpKcBAW31Pgjhmq7a",
  "key24": "4aHm8aWeia58zqBPyyiJJpkUjqJZRJwiwL23CSV8tYgsyNjQCHGYXXf1YMJJ2oExYKmzcj3L5ed7tkZSMBDbSLSf",
  "key25": "32YFy88WzBhxmsXUzpH1WCSD74P5mqDyNWGJuvZ8CR3K9AvtKU8xxmBLXy9619V9vd2Xm2cQ2DJ7iSHgR7nLZyfb",
  "key26": "3EtDtmGpE62eh41Ag7soKhaLxVLtWR65UwF2rRD4KrAvMxCaLgEEqLFt4tzfSFiqwykmHrWyK6S3e81yfixdwEUg",
  "key27": "4QrivbgSFjAJHC2Yv4sGsF8muRfHcLJrhAtmQTwFuc6rBTtNnrYtT3oXFvGaEHwACAjardd2mTb1g4pvPFx1yEad",
  "key28": "3xDMct7Lwpp2fbCtWjBqtMoEvUXgUBjanWNFUqEcu66rqhDU52XYQA4vZUH9G3hZVVQTLgdixQWnoskexKat5A5J",
  "key29": "2WDGPV317eWBLkaJLTs6r7AVFHoyLKqJrtptnSU5vLhzhSUXQF45sCKJG9KgbNUezu5tQCuYHs2BmJQbFPAhAuxk",
  "key30": "4crzMoqdMKRwRZ5k7XNgwNunftLzWwJaSbMhqkN9GHxnwSGDUU91rm6D9MymwifF9iHuPVn5p1ZDdKNUUwVsDgcL",
  "key31": "toDiVXvrPNoCVB1EVC3mXQxiQALArj71veejknsyNRxEBUzXyTrVGGSqLBxWxYE3qm79DnqcC2oRuxowqoFZRn3",
  "key32": "3KvYQqs6parHC9W2LP5USrdU6wvJDBozoH2eVqVbe2LcbnVE8ZMzrbc88cbmwHWBukNaANGPKE2vw5StyBNgBzLY",
  "key33": "674LURPWT1kZQPShK9azw12SVSsekrQUA2rAhv5a5i49hYP5RLxysq6Ec2nobyaKeuS48oWwLjJbSuNeZjhaWpZK",
  "key34": "2rxwN5yKjud2mrDrBophbosjr8FQkTadV1FdV5Hsn5Z76CTBY7cUbj1LHFbvRbEyY4APXXQhEXdEXH62KqTn8c9n",
  "key35": "23Ku2nDm5MHu9rVes35EXMz36JpRcPz45rbKguvWTHLzqjKse8Z2JAGip9Q4ZemaisjtkGqegk6fhfg3P8NWDwZh",
  "key36": "5jAwcKyikcET2tXLDF7yLGQzuZJyhNzQzuEBa3NMbhEGmx3CQteXyM8pagWZUUuowHD1HSYVX29pFVkcLsGM9d9A",
  "key37": "v6hSoxF4dSBVVdVc9RuBHopjfoF86UeMQ4jEiisT5PWp38bRLgLck1P1iGSmJN76dpoZVRvKEqRmfwUo2iL34SF",
  "key38": "2F65H74epki67GjcYL3afZctpJHZfxSkmkaC8mditj8ZjSkfgdAKyNAuK3x4bqNZEki9JwqS3enShtcrepNnGuoi",
  "key39": "5wvDkptg8r6yqWCdMXWrVeixjeFWee1eMgrEDwcvjYH4nAXDSFvEWvMC8TDpSqekny3HcDRs4y9Vr2dbhSMMYXUE",
  "key40": "iXKJFMU7pwchAgrpYdsHeXuQzPiMDLgRaLrfbZKmQ8NTwJirynuaTei8zeQX7PBqvVguMuK2X7oTi8K3VoEE8U1",
  "key41": "gxC9WSXHbDnihQzYZgph5mic2DMTX31ebZBCupH5Ff9AEmk1LWtjPecMPFPwKYhwZJbKjHNcsAFDc3NEydrYwac"
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
