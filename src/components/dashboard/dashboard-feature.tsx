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
    "3jVtKn6FnVjKcFcqBLmXbFpDKJcWTXXQah5us4aUeJS6WNdGyYHssaLFbZvXmCo4qV3fUDkNjtNsYtoyaT4CqqNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEB7bWc1dgbJY818Gv54LsMZG7q6cydFHW4F4NfyKbpHEJh2HAS7HbFxMQSKAeXPXeWtRfEtwte3PBYvr4o6EMa",
  "key1": "3svzvqK8tQyciS6AH8g753WZU81ApAYxJvyaVTR4xE8jfzaSVj2QXm5k6Mufn7DoEdNniUBkh7zT6gNrSui6cLct",
  "key2": "xfRwyNyXiNbWKDsU7bVG818yG6wUA6seVHmaemWqwjEqDsWVS2gZBhEohGdBb2i7Do59KsERVvA8EzqaKAoervx",
  "key3": "2FDLLv4fHxYz5GmMhHw6n29SrpuNPat8kg5VDkP6vkh682T8HkmEB8eEyUPYVDo4GdUPTFFs9AW7K9RxTNvvmojd",
  "key4": "3ARwjBumuQui3rWFBSBnuuuFDpTPbc3isyDycFQVAa7cwDVCDmhGWkdFZ4C2SHwwDCbqs6zDt1F5XwmccpRM1KcM",
  "key5": "2vye8e7nFxdcdHGgv6HHsUVsAaiVatbXy9AwWX3p5Hz58RkW2husFrPcFDHXnc4C59o8wwYqsejNAuTSUWpkobxW",
  "key6": "cbrTRxx49irBHRkvGrns8TW9mpp55LRJbercdGU7KDBzfGgL5bQAoJp4ckrbQn3hzGzMgTugFwyaNa8u57YNNVZ",
  "key7": "2hRC5qmdiS7QCLwvJHrijH1arM7j5gULZDKLJBYUUNSxydFB44YycEhFkgx9NgGSpQ6M4F6BFTJvRsZoNES4yynB",
  "key8": "5Y3kQGq7UBUfbVdcmCEsiakpTopvTPy988ficjDy9JFmmwXAkSEaKtx3fCwpwjPpgrdNPBxb9wqgjzxddoiLQYNt",
  "key9": "5CuN5Do9Kx1unjWgBft9Psg9zKFFjrWJNu1sabHFnoXScefzxXyLnfgxhnXrbV8rou5g28Fzw7qSDqBVAMwMurUF",
  "key10": "3VMdFrJudE4AWnYAzabpCTPyXZ83vJvYSoj73wbTJ46vSdFKprRqDU2BLVV21GDQpZgh3qjEnrtRaBzGsNXZ2KST",
  "key11": "4dSkzTTvCx7bbMEN3YkvxbAx3N5yxwpPE1KbMyRhtn5uqaS8UeEdMxc3qsoKAiyVFRaLgfkPMuLFa4o9EYNoXs1v",
  "key12": "yuEsLhUDRm7E7xTHBWWqVjiHpT3MKsMtpWFN8vbXJkFeo5HdxnNyYwnjomuLXWCL7PGywqzmUGH5SvXXLJ9AmaD",
  "key13": "22u19KKXrHo3AjwDVStWcNg1T1QZjjkums6WDv7fTyorSsKozrAPsRKTBugDd57k8meGWDKUS2r5gnijTQYsn5RH",
  "key14": "5i91f5xMxGtWu94AGwyhfC5TEHfUWECZAWuddc1xkkoruKr2JFfVyM1EuFC7BkQV1pgJ8rQFjW6VBnSBoccnZUUv",
  "key15": "Mme3hT485ZhFjyEiZbsL17HN6fL9YgSgmTGXdt1GACycLYPuDL6KHimiVypkgHynM6tF8TojWPLihVzpkacBmRv",
  "key16": "3mjWzgFUema3TTi96HLsz3ky9LZugFweKwpdgJ1hBahuKrMWbEwncSii5Dh7EffNrRNAFiiFptB9D7dTpqm3m4je",
  "key17": "3dKQWU1JA8YoQyYxuhWuErHuLPzrWE9RQZg7uMi1TcjoNa63WMj6k5HBYZYGGmMHbnhSZ5VKpMDsFG8bVaVdPfic",
  "key18": "2rCw2gxtEq4PSwyc5pXXq2FtY1t8JVgr3PYsFonYbVuHqG4k1xHVqrthwPNN9HV69GgFjv2qbPiNY3yW6wKy4nLN",
  "key19": "4beUtx25iD52xQTnrux1YKwfpvRLKPx3AiDGR9s5cnbMxGXQuPJm1Hk2BrZ4SNXSNt16FBNNCooE14hJDpCPErgR",
  "key20": "2aYqCf8HiME8KymnW1CKUvLYWXgnrH6p9iU2mG7SSBtEYCN6q2AN18cos1GBWjVdyt1jtxW8hxam4o5owdNSbZJP",
  "key21": "Sk4SqWBhrTHGz4kazsHrsvJmPWK5i71uSMKcZA2HrztNtarnzm2AmKkU9jHekqaE6hWwTK7RfZUWH9SHpYkifCS",
  "key22": "2QwFm1uDwrZip1TDbkPziXNZrE5bmwbEGJ3s5KJDeeAQqn4KpSDhguhVAEa6UhrbLRzk3r3T3hN57wXq3HygsbAs",
  "key23": "kKuS8hsimN4uNrYiPx4f2paZBZxXPGNdzANfrk5M6qDDGudAdh5XFvhfg8xCBTVWme5HpwuhNVfBM9rHhwVYSNu",
  "key24": "3aivYWsjHkfWE3KVFtw16HnJ7kgWE4mwFhcxiojaoemYW4bheFdmun6bsNXy81wtKiNzowkVHp5vqcgroNdxcXGH",
  "key25": "dwZmc4gGCgNFUzLPuTFGMZDQquo2DjAH4AndFnJoN2kpVhFBAG1SnaEqR7SF4uwRQ5CoiHx38orJ33nGU2W6CLU",
  "key26": "yYoPf2sWFhyD5hg5sdZQUVXjGzxJ8kgUnaNCKcc8y8fBpyB2sBkxrecrv4bL7NQtNkAkviFZu4GGPNFiygxvJT8",
  "key27": "3nYQxTz1Ee1M7w69xyhvm8djQB9yJU8EghPGeGq4xjqTsTCxxYxCYRzu8BeJGz5QegLg31jsFZgaxPh1HTSALsD7",
  "key28": "27VArE7ZgQMJFekvwXD6cM27BsXerFaszda5PTFYQCQZAsVEnQVpRRNpjSDfDX5vbRwy8oMEy883uCXcpmUkRita",
  "key29": "3UxvKc95yeQQmfRkcwTePZmuDM1Bn7bGK7BjtmaD5FFJ4B8gMDM3SmVm6r8WWmuDekF8zN7mVx2tobKHBFD3oXU6",
  "key30": "2aGX4oR7UwTeV23zuQxKVp7hBh1WTP6DP4irVwg5XjHqxj9iD7sZcpNvsqtYLXs1S2tkuZg1dyq8Q7Tmazf4E7B4",
  "key31": "61P8xkiTb5w2jfzv7nUvhHvkY1B767W9HB9Sr4KjTaHfby1wuofTbSDQtG2HUqEYGWMWfKJ2RhkLQSRRiEWw6RRN",
  "key32": "4q66Hu4i1UKwESdCDiRbihkaVR51ZafoN6DBP3Z1NLyXxeArABVD27v5GQYGDW9r1dE9qcqXNpeuWW3H5UKQ78GC",
  "key33": "4VfcFmRrMdQ2uknLHqNBmwsXiVvB9xrtHFUkuNm1S41ru8vYHxw65niyrFTUNce8Tff3SyiKtk1L8AE5tQ2iYeJM",
  "key34": "95RmYNqFRgvD1wSCtSMkoo6YLMyhJovVUiMUHhZC6R5YVqnZcvb6sozPYURfHiUBXbBPE4oq93hRu9t8trgrthN",
  "key35": "B42ZukJqcgGCx53SXVRevETREMAYy13RndDYYx4Nt8cuXjfgZbeGgL1K9f5qRsTjcogrcF2L2Lx4FTYpmppe537",
  "key36": "2GLmBAVYCnFWBjW4sHU6mnVfkYTDjyJT5CYcumGhmwbJQvu8WGAwPUaT8saHDZDykbDExaFmdytgKL4ecSSKCSjq",
  "key37": "WCsm4wQRHPDPzp2M7Fd7WgqgNtjmW5cZW45fG4j4QX8YQwTVFBCxqBKqop8GKEVUhxSk8P87o1zXSk7CioG7tZs",
  "key38": "3k4z61PUqyn81yLJbCgxvVNu9bQrCkaH2zeRhtSbNS7XoW2x2EbAig9EG3G9JPwm4A5XongRuZihEonHuNQG4782",
  "key39": "5Cp43RtFdkaHDMuzw6zUhuDNy6LDcTexTLpCBX5HUDABEmUCXzWfKvQvQaVoTGYohNn2g9VgVy71rHM5tUtpQgwX",
  "key40": "hPYprNX5k3eCTvRv18v8E1UMBkN5nshH8AXoqJK3DCGcWebEZdRM8x68ioT76gSJy6AV9n8GE1o2BicKKgy7EeV",
  "key41": "4ePTJLb2wbEdRzDuDgg4CtaxHB7tefi5uXv7Hmkp2njjSFPBmiwmvuahknVQCkXwDTqfRZj77Jri2HqguJoeoz5a",
  "key42": "3ki3J2YERPc9fpygNRZacdUs84UtahDAdgFWdTVVxeEU6RBzh4hNdeLh1kwuLFdNvkrBAAjTZBmNDweV64gJVGxA"
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
