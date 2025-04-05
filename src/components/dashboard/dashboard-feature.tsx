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
    "5t75ptUF8eJztPdDxDH1T9yJLFS8cBTfKvAqZTf3Rx237ACrfRXQJeAuuWdBKGsQkudjvbZLMLCbtr8stu6FWeMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y893hyC3HehaAXpZcv95Nm4j5pHs7QUvxXQhNNdLZzBF1meMiRMdquiQZz9XzkDU5kfsPqps4cga39zSD7byTtP",
  "key1": "3rj4gQFrmFD5tw2K6Tu8ARgoaK4hxAwq6mrKmPNaW8fTaKSPgCyaP5t5rH2kFPKAnVJQuHCUWszqJ4Wq7wumTgqr",
  "key2": "5r47YAvDxTEJhXQynHM8TTKBqU1ZSAAP1qDXyX84JdsYmoph8RfTJwgctM3hVZ8smhy765nS5kLxVuMg44Ti55L",
  "key3": "2EniEgXEo9JWxfN81p7TQkqL7f1uVAMgiHLGXjCTh5J8EnP78CxPw25UGmFSFGibgyDrNffUd1pUiJyFY2pPcjcK",
  "key4": "2xgUUA9JS3DRsgCDFZsggUGsLuSt8y4ay4LYLveKhijREs6eAZXYwqHx4btKwoBXLPmnq1nW9a1beosnuLWk7HA9",
  "key5": "5FhysiWyH57Az2Vozw1Vh5B5djqM9NFBsB4XJtgVxtUX9heBPzVkGUZnzaEYR2YW6MpghZZ52ow6osFkf9ySupDZ",
  "key6": "2kWyu5TW5ZJqLzVDmq4ZxXxXTvTzjxeHs5Xju6RxL1ubWdyAcm13EQLWU4ZXdJRiLHQHgyTPvcX9xLQTeDJjbsLo",
  "key7": "53tYZpxiB9oBSvE1AVnRaP69WvN2KLLKJWiVbcHzGzmJoh1pFpJLxKug9Ss2efzeRCWQEUVS37FtPZdqFmzVAXps",
  "key8": "2gLbrcAebgVjeUqBDS47ohmoEUehoyhZ23zThEpwFCBerMD3muiWfm3icrs5R43tQf9wsDAePmbdf7FQ4xADNRjd",
  "key9": "5a2qHuH6S6agrHycyrf6uM8VS9fDpoPU6d5Lg8VQ7tBiJdpfAPpbHC24up579K9MgQDaKFABLksNjeUjz3NyWw6a",
  "key10": "2PHUfmSpivZ381KLPdQ8JVA7ruxkMP8UTEKUdK34NqKqedxc7v4RmiG4nSRqSfqeK6AcK8Zx6A9s5iAeTWmEuiRB",
  "key11": "5rxfujd22x54uE71BWZMm3fPVhtgwSJUpUFrwA4TAxj6MtNrFreRpTrkVMortVcRxkLcZyLysSnH77s1AQyMuafK",
  "key12": "2ytzgQGcNUjN5MY2nw5E3LThk1s1sXYfTbjsntpsEGGEKL5kVCCXvN4g8E4pPcpauYkfWpLRBwfiG5N1KnYswHnd",
  "key13": "2MskG39JgJ5cZrTooVVwvNqbNGHw8bt7qzQiV9gT8jf6RxitS7xjzdGVDSENwBXgiFC9ZRGHEvT9qSE5aLDuc2PD",
  "key14": "2Dwo4hPwATErRPkGznJvGN2UoExXxAcbJxapqjR5ekYmHz7EDZf8o1jEgpBZogreKb5KcmpPRgsYFwFTBw9NtWAQ",
  "key15": "22ZS3YoCFierp7iVtT6M6PQzPEoZpB5ttodjQw5Hyhyg95QijFba1Vqg9aNd3VUm7W2rd5B2fi2tWpqvoAYDdegc",
  "key16": "3f4izB467iUwrfQnhsfyUWaCDe2VYvMieK2EZWkMb5yaCEWaRqvCirstuqJT63VF8q3dEhngyyYW5bMhquSR81T5",
  "key17": "3YWwmM63pqDBLNSdRFT4LgMYHB6bdnmrzd49hUXtAD1swbCrbvB3iy12hGFEr3Rhe9wrrwyppoCQv9x3WFod8P6Y",
  "key18": "5xJ32msTRnevapjAnDXKe6KUS9Db9aqvxQAHxCRQFaL86i1JKZLuuo5czaiWQQ9Qboi46zgdCB3pttPts8KkXzmj",
  "key19": "3pP5L5y7z3REzkwduNUm7DZ8Hj8paFk1CsehNnEkNRaAYX3opREjjibpt7HGy1ze3d4w8EXHfZYMxDnoDntJWhJr",
  "key20": "4e4ZLCoSQAwGX35eSACPNZRtWPVxp5CnpcD7XE3qccbPbRbt3LrsrjngkKwG4omasuuN4EnLbT5KaZrKs773Saga",
  "key21": "3HwhUxE5FfzrMZD6uJ75aG61bpvUytKyUithEjmjP7mK2TPcwPA8bNLHnbbLaCjwoxrkW1Tn3A6cxuTrnasLQthK",
  "key22": "2VwPPxq66KibpWEgzwusiUTgCbRw5egEiCDCkweGDNg57wU27RsuRDDU4cQcKwwwZVJZmRxjX5Q1X3ZTN2yMo1aH",
  "key23": "PVuSwdowZ7wTVTg2V4ANrkoyfqgoLABqEjMkpAkKw3ebHU85cJVo5NLGvNGSGWSx7yTZVscTTKiQiUa6BMTAgFi",
  "key24": "3V4uo7YJD39cYSFEQSmkEb7oEcAWHPPAW47S4gzaL7LrHixyY86ddGvmrSPibvP6dwNS9eo7S7oj6J1KYsax1vXU",
  "key25": "5Tbx1MgSW3Vrv7AkEAF2MMyNAXPSZGVBzBv6AEVz6HirswC1tPwzoJQ9qorJ3UxCgFXkBrbZEhGACjVjyyXVeN3d",
  "key26": "4pu4JJABy8Cda6frdSZVEFRvXUhztdPiA8b1wUHT36aBJp8reFJe4X9U1u33RFwDRmfYp94CzHyDtvdmWrvCaNUH",
  "key27": "2ch4RoSauNAkn7cdYpRy27Q9Xke1Xp4Bra5ogZmyTDJdAQY3dPThVztcdwn7hoEQZXFBKQDMdtEkbPERkNmdMM89",
  "key28": "btgVBeYbwhNcsFZiGnpL1Pp1pZi34bxo3ehV2CdxH3hyNXB8XcCsNfiTys4edicLGyJJmWuvC59yK8VMww9NoNc",
  "key29": "SHRTJ8Y3wrSVeRb19rKi76ywB3TnDhbLy3BhLw9X2x79qGF2pokQbz9Bdj7VmWNcA41rwb8DVAkpuX36FSmvTxV",
  "key30": "ju3r4YnCmjCqDMy72StXAaqSsK1gUDT7doFxqhFUyLwt7uz5KNRFz59XQAZVis2nXdUGbXyz6Bu7ReGYLFmPr5C",
  "key31": "3XXJBNNUJrSt4EarJa9EvUv6YJiUXBESwvRf9xPUfoyha12HPbGRKk3QYR9f8imqvXj5FaGDi4vkPFJEMx6tySaD",
  "key32": "j8S26okxWg49y3thVJrb3ow5WpWfcwNJqaYRQwaZa2oAwTJRQmGcETLsoPhstEEQHu5AGbMTqeq8eSCcAeG6kfs",
  "key33": "2ammt9JWW77S4ayyCStrhG9UNm2Qch1qtfdYRo1QrAd2ja6sQn93Q1wqE6XjMewM8Fqq7dz2k2MTmXYwuASeaLxK",
  "key34": "5LWGHXR1pore7YFuZZeBoksFDnpQovBjVxGsphGjotsWhiSUoSPhmgGv8ahhj7DbtB6MMWhDEakaVqFcV1PMfCtB",
  "key35": "3DX8S741HMgcM56m1DcWiQNvxtnS5n1XuJqemDc1CSFD7YMeqTfu74dJaUGpWkdcNASzHJWikRr62SBS8jjAGj6j",
  "key36": "3JgHQ9uNnRpj5DbqMVi9EnSSHrmmGpmELwtcMaPV9PkEM6ncC5t3YvApUMyb1EDYbn6h5PkZup8pxt2Ym6US3rwh",
  "key37": "4mFBzr3A7H1RHcsscCjLh13DSyZf1xWuU6NBk7BQcomNW2AEcWoy3NZ8ZEjEunUzbKdHGTSxgA3bdg13RojbsDLH",
  "key38": "4xSS3Vc3NXwife7q5uURcJPtUM4rV3uDkLDpF3QQLu6d5rjk3iC9HnqcYMytTFpQHydvas2ioVBjD45Qk3ysGALw",
  "key39": "5b7dJGrT2rmv2n53VBtmzAYqov8SFLg1YtdhLhfNuJS7HXhtm7kBWeeN28y2jHHzW6DdLiicc25h2JcPrsZS2sHN",
  "key40": "2zXipmcq8SqBnu3F4WrFsicQvVaFoWGYV6WKmh92ptPoLYQgPz1o9sNSnJWwy1uyPsmdXHFrkBjM6aNMzXSSQGxr",
  "key41": "2vdeUEF1sP6aLBiFtm8E5rLVG4qEF34mMbHV4X3ucrRvxyx9rVaCHUypbuM74za4QXUWbDhUcqyZsJMVMGE8QSuu",
  "key42": "4DZC8Hr4WdeLseJg9cQ8XbYtPLU8MurGzU6ZV4oQ4HV4bEfDbP8gU3ZYYUtCx4FDhmC3aHvL7EBsTjaqU4fAC9GA",
  "key43": "3XXJbaDSK5MZprVUquFv2XbGQckHjnUnwNB6tdqKpirus64jJkUo68t5m6jwpfgi2rbMm93Vw9nDQsjjzYPgZ6vX",
  "key44": "ejtw1WrSt9DJRvyiM2EaKxrzv4VyGWxYZu22F7SpQCKViY8b6VvxTM8LWm26VyjrTDZ46epLtVL1qixS1WRjuqP",
  "key45": "R9URrTAXjwkLTtqREhVnajzLoediGWouNCiRSpmg2TjhTz7LwxmJtkd2LVwmiS4WyP2kZFLhYe3FjoBX4FCB2cj"
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
