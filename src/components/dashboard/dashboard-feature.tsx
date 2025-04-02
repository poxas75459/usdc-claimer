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
    "27Gc8phS52k72nocirzdiMVx5ZtkbyiHqWM63eULSfLWEu8MfDc7N36TLN27jdYgrSADGnd9XDU3r14jo6Ke8DuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HH8FKN2tx944EPrPm9DPRBBdTVBfa8uYPpUftt9Bj8Bg5gHVGcadtZ2awfZqfSmoe7dnGA7K7QjGj8xZYmtDeEj",
  "key1": "5JNHEjhR7YPBtEZmd3WB9KmzYpdfvYeUMc2UquSzbG12q3r9DKCeYZcZ9YAwUgYyw9xujbSyEFw47BkeeZ48jbPF",
  "key2": "3Ya1U1Wah51snTX53KSURgaf5yh1n6whm2WEYFJYpnRqS29DrcQCSsXQdkpfxgFS8yrCR69yjVviM3GSp1HvB3Aa",
  "key3": "4Db1LoKDB1M6pj3YLuVUywEPE1FaCSdMDnzqv6dKXuQkRS4a5dskHf5xEHLKqfwdCRYNGuihSRy4WpyhV7Nys8hm",
  "key4": "4S1UF7rmLrfSZuxhdTevTzVQzBXaf1qMMnCkGsMARbbbJeDLH3kh1Y48ztUusuphqJD15T95SgAbXtwEbqtJ8gnk",
  "key5": "Ppap5TNZqSCcVY2ZcaTydeXkThkgwxhP92mjAj6VkRV2vw21Yjcy2W5q2VzfHNS5KhhZ5AokXMv8hXxMEDn3SRc",
  "key6": "4DNYtRx8eAqSmaJGEqGZ5mrySAK7dN9GKbXm6rHnCPqnE34nxmVkCW3HuDucQRENVGHDN4TbNPti99eEeZcvFncH",
  "key7": "3ypbapzW9DghqDRxFKBgiHoiAtFK81w8q21hozNmJ97kfjyKtH4Ws1REgbdJGr1phSYJP3GhqghUp5x6AReHDqvk",
  "key8": "2ctHAnFms5jz8gKvheMcmKaZJ4915cj9uewNAHB5J7koCKEcA4SibumcG1FSiCuK9mZteGPUPTXnVrobrBwhyrZT",
  "key9": "4xt9S5ULjJrsG7FGNZa83Dx5rxbUfSMha1ZLCVjEMdJcMfJaGxHCwooZBrFYJ6PBMYdt4oGDwaH6bYkZ7dN4xrpX",
  "key10": "319vGcE4H2wBFTDkBLdFsygZteq6e5TetC6TwDFio3RFxudVn6vqU4mUaC1ec5KXzqGiPhut9z446jGvkxvFEbin",
  "key11": "xpoVsQs565QZ2GzSm1kcAAtXmHsco7QZppq9h2ukKCUkiufhxfjib33bkiAvuMesEztSPypk37nf7MwidB5xmYc",
  "key12": "ypeHTDwYu7Vm3rBTWrWYLzzCJU5Mf5d2ufMijeVrxxaA6rQHBYq8jbbBTDLiWz2jgSW4MQNycK28D1nqfEnV2QX",
  "key13": "4xypcLXTgPRXQt191XdyRkULbtHk9EhNcVRYqLi5MyqNSJFspRAkphF1D9A6G1mVKDotXUNYPeUoVE6aPmv4eFfi",
  "key14": "VRGUwKXhmKAtta9dC8qrbmzXbErYVjsT1ymLYyD3dxgCcZT3wpUu4NQKB7PjUoYWZw7Vxu81kgfJbVgAcrDBzqt",
  "key15": "4GGUBSP3xwfd3ByTxtYjCUNUWhq89An8GNL16a5gGPZyPmVK3MWs78aKs5BJda9u9zEbEFqWFhAMmnmDDwSfXFkF",
  "key16": "EVKqVLjnWqW2yfQoiHELgearx7jWspkcUFSWxd2F7vXBJjhUxBBFBoAcV5wtDk8vd7aABWXxjSskfeSbkrQWXNq",
  "key17": "4HGcFWQPZaMik7XXSf3y48GK3dLrymeJgo2RCEVPLFMHfALNuPjGJNyTYNvJTAi2uQVBnFCMw5ycbqJppRS1KAk1",
  "key18": "54mRgpF2JV2foQvVdvZiqVLZJvfckE83Vf4cHZsEhCj5fAaDmDfjAUat6BfktGzWaJ8EzwMi9Wtf9nb7pV6WHxmx",
  "key19": "34TUrFXJjy89ncdJ5kPsueq6RSHG2TXYmqdFPjqYRYmfSdxhYs7wDTgvt9LcQfBAb6wzJjyNhpwQdPxybX215Qzs",
  "key20": "3Djsge8wHFoadyfrgQsqwgkNxFNE4Z7ifDT2o8kwFYQpCyrwb4vmy7bf5b3csuvvitN2KmDB2ZSgdkekeFCyYvB1",
  "key21": "2GF4YWtBXRrqWjPTT8QhM4UZ37QEX9i46B1r9MzYwXkLE3b2zPu9ofbGTgaxymf9c1oSgbSTq1v2q6KbQHLY8jCu",
  "key22": "5MZGh7kJ3qkDyxvFYSXns8wtcu9uU7GRTvk29nNs7w9KM3oCvbFLU7fEby55wG5FmEH1MhGGbqni227ioxPeFt5s",
  "key23": "CcpxLWS2YMNLwDyCuqhqaatoqTuM5pvWdGqyyRyVwY1URm4p5JSudnNvQ4VYAYa9khWaMPQzN1VQJM38KWPGH5L",
  "key24": "9SR6nQmBxsfT6W7RUqKe4xdi5NGrGouUFaLH9WnLiCf71dZgYgUDVvH36Jd8JDoRm4ubQrcGnEh9VMCo7w9hi4T",
  "key25": "5L4FsyqfWH3FTorAMYou4xpvkhpBaDWpBtD2niTQdugJ21FZnwYFtx8Mde9EWV3u2F5CueZC46mLKauwTHyxtHsv",
  "key26": "1fsLVNcEodZGuQJ3Prt1rc7Co9fNHiG9ExwPQjDdDtENFcbGwnwZ4tyJNixVBemkbPKHMGi7at4XFDNWZqLaCtp",
  "key27": "4gkVaEakshg3qqKHKsebJG9UdpjoVNiEXWbpsB59cBWx32qepBdhSKHCWNmb95WqU1bsa46xRfUcgsBEjNSTUNn5",
  "key28": "5RN4A3ThevrBbdmL1bEX8W52Cvt2zkYBs2j9VFEofj1ymcEFcfJKTk6pX4Vb4cvQkiTB15XtAyYKBJ5oybyfADa1",
  "key29": "4v7JULPmRcySECUyW7N2kmibtnY8pLjbX3A2v38xMN6dMteJ3Kkx8qncvJqiXFN4gRKz59BBzS6dramujSpG6QVo",
  "key30": "KnfsyqfR6kd7AVwJePRzA4dM3w7jdnTRGwCjAqm2KKuFEmemBPiDPzMpRjfyRzhJE6Tmo8GcsGn3r6zrE8R1F2j",
  "key31": "3j5pryryLMRrNmuRxMQbatqMw9Qytzap6rUZ1GDt3JCXe7PjJbmzotsCCRfFNGUpEyjNFXrmoDhYEbu2iZXoFAut",
  "key32": "FQphgD7jnaGt2py4BDKgn2A2PwyPZv3xn1FAhPGmnDx8MyCUj7RkWxPcBTRVjjWVvMmAD2qQvkdY9GgNvCw94to",
  "key33": "2CvPpbrHxhspLCDTgaX6ZZFJ7SQcC3C74V33cBf3RJeU6sfwjYKphN2ei9GRfnUPFuBdYR94UNewjXGe9tUZwmR6",
  "key34": "3WNXCpYrPoTpMeGPSrw3ntJiYW95t3vuSCVcQqJ3bJpEPPsiAph9Pn5DvPdjN81fKr45LZ3NKUviKgYTXQWkGPW5",
  "key35": "2QbDE3Q7KDDLk9w5qiVsANdV8AkkqrQ2sdx3sdLv7HKm738R8z7BPAKRYt72EtSJdsrC7hv7GDkuLzkGSU7P5iSG",
  "key36": "4G7NW1JnNuHbfUpPYoaLijzYFGMJWWvyGJre4nH9PFzJuRkvB7mogwmUkzgficsDQZwrTtfuSfX6KdvfpUE6MTMK",
  "key37": "HL9pLxKzvPjwpfo4cUTKmyufjhSL4EDj97yTYzWAFxS3U9Pp5L36KG2GqFfQfnD7NMZwFY9xLMD6cK478Tpkzfm"
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
