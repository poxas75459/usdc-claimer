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
    "2WzTe4wMuYgwyiFwLAcrQojfpZtQ5pinr4SZTXVuBeMD4mEF24GQC85D2efw15daHKA6FBZKpVvoXgJun9ggCdZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrcmYz5sZyoPLPjybrFhd6jpsHX92z8JTKbSYJWLsbzrmYg8m52FV7sMB7j22zXheZHVrMUt5EhEn4LrnxCjNp3",
  "key1": "44n1azJB2gAojkRiMtGfE6ALckEi31R6wB2HvayPEHEbbeLVnsfJuo9kLuiGbRoeGyndnhZAXT9Gq1Tp56RLYHJ8",
  "key2": "42526nCamQRVFLtZXDoaGEkvVNY4bkBV72upwiXZbapTcfj6UouUv2Jqjy3XJRapWJR4ghmchJDtwjqUzrqmjeK4",
  "key3": "4zg6K276HoYLLG4C23uT17cFr5XBfNhK3Xbsgci9YtuobByBzNTaWzEQRmwmtr44drvBoPHuf8ydKPDdcucmK5ne",
  "key4": "3BfLB3miP9DhkY91ABECegTXcS5vCoRctXGakiZfQohQMgQ1QHsJRDj85svcSrJyRTbkDJv8LRuag1DBqFtZUBao",
  "key5": "2tXQ4dgdetGQfiC5Z94YZ8ZEiWv1EN7A83fUsK9Wt3KwYUXAjWC4BBJDfqnFzmCkC8MRjjsnwu7Ri3m7GiEyh9jD",
  "key6": "5225A48pLwgmtZ9icR746oA1prBbbkJ6ysn1sAy27USovCZ8F2aPvZULDFMtqmQuirkxc8LbXmfXcy2oiqdGMR2Q",
  "key7": "2PVupncdy9czeAzc6sHd6MRAk5oPHJPLoN3GzwUg13fuy2toX7xxWMj4i1gvVNJX3rS1Q7o8VJ6Rrcaq2GQ6vvms",
  "key8": "2Qs4bMJ9uUVSnWPT5SjThag8ipQqJ33YRyEyuQH3kYLz8SCwyj75onmuDJE24VwGa2tqmrAr3xLq2ETGiG5618Cu",
  "key9": "4TaYQ2jMZtTQR3Ekg3uHj5SwxYswiajPY2U7mTKJJ9RTFAxhXL7ixYLNdeWVcdnQDFeDoTrswo2akFg9edtwXiAn",
  "key10": "2h7RHqeNDUgD4Yc4ETeXCCxEx52jVyaMEDAwZSv7z9bTqQxFN27WQBYzNTAK6jjSmihpdREkp2eCx8d5Di2nRwDE",
  "key11": "3uAkHtotM1BHhYByGx8MqHjETCyfwfEVWNFsee2vg4KDRtNVbasPK5pbvL6MhEa5CN3711jZ8vXB4iB8UdkdiPtM",
  "key12": "9Xxy7UrxH3VuRY8S3DKdMeeTmFb1gRv3tLSx77668oSK9Zw5TvuxKoEHG53v4RRYNmsPqJJzd3Uodw1jNjbcG1C",
  "key13": "3w3pnYGVgHEiVTNQfe7RSXHWz4jaL2ikyj6raruokdX2TahDVZWDPTWpRq2fNQK5XTmZiV51J7YJjrKwKGG1mWy6",
  "key14": "wtnrxtfEH7qajRvq3HKHL1SZgw4PvvcY8MmkHYAvUoQ1VLTfgpnaGsxzgXj7R6seLUrthdFGL67gV7VJH66EoQi",
  "key15": "5UNeoRa3ruuyQmgPG6h2kHYGTc5vRNhG7wfNsb6inea6FwU2CY5q1h1BT9V2dJfNQKj6jBFEssjYDHij799rjuX7",
  "key16": "2da2PPShMBV2yxJj4R4Df1YBfjWhxDwcNsk3HuRneYSLXEF4bgyRRnTPF8MtCGZiwF3PMS1q5NWvmbRxpZEPihhU",
  "key17": "3qpsSZPB8Py7Agh2t57dP1zoTf6gZh5rAp1NTWD3MrhG4EmXzzyRWhZp1GPEsc43rkqXmuKQ4xMrrgzwoRmo8LfR",
  "key18": "5X467NGPYLGX5Fad49Vfcq1SxdJBYuFXowyp3H6TpEAPqUnt3MyiAr3HS9yFKFd9GgGbsBCuRta76ZvENyDvBuyR",
  "key19": "3uYa72S3eR6uhp2BzTZjnSP65ZVqtsxcRVoYyBQRRiTLR9FQLjmHiuNAxchdGLfYcbhncsxSwKB3dJaazNXQT7M7",
  "key20": "4wK2YGAZgY733m4aTS1q1MtZrfRtxcam3wuFkpXNwEgHSFsAx8JoRE7Dz2Tngwm4k5PXrfVveGui8LX3m9qTwJ85",
  "key21": "4gss7973xytcCp4Rfem9kUpEFbyVyFYcVvrWmffyqXMMzmbqk5zwY4eiA86rjACEG8bAkUDbqg2umTH8VaY9YaD4",
  "key22": "4i8h3VwgiAUVJjUDuFwpdTUryvTYzsYoZ3sNEEcBP4AQbgvVEe4QhU7N8NfwzcyCDg8ve7uYcu9GB2q2RMhNaaG9",
  "key23": "s858gqFPZjipoYjSJBxQLUrYu95FtzxDaA8eDnkNK3dXHLr5QoFEKLsoEBtnz7LyjHGCPUZwM2ZCCsg35E7SCRf",
  "key24": "3oMtFT4iSqtihUB5ZgvKibyvW1J6TtFkS4nUbn97GcPgLs9heKG5JcF4J8FdptWYEoHmNPEdr6cJt88irJkQV5mA",
  "key25": "4FLJ9BdqrZmcRw1H7RrJuBTE1QJ5rXu8SUvmnCxya3jHjK18A6832eiERrfZw5pnzts1zs6JofKL8jgFLD1ygGGK",
  "key26": "2dxqft1gabzEkqnjp6PY8qgKrFWVuVpvjSMWQUdjX5Z8sEQsxtUHM7UxNXvk15ygwx3c9SZajvTrtTTR28xN5Q2V",
  "key27": "5wiFrx9p44fCEw9n1j51awCyf4sZPDT9EhcrWwZZ2tNjurp7av3ktxf2RiwQ3xRAkmMz78BohtTeEs76ShcyBL1B",
  "key28": "5comJqP6fGDPqAfh7Z7UsdivYyyRJBE372msbATp5s6njHqKppgo3eQWARHVnEa3TazXkmsfyvK5gBFJeDSUVekP",
  "key29": "57SipK7e9hTaZBdwZuKPsx19ALdS2YFH4mr7ajs5Zc6vp9JhVZF5PAXU9wgnSzQ9o1yRME8MPfrCuKgZya5Y1tPA",
  "key30": "3qJ8XvonXtrtFxBK9fgyiiZPrqajSYcg4ECoXPBwvwPkwYS9zKYtWSfoYfJux2mAfzSa9HqSQ2UKWrp2ut5Gh7wT",
  "key31": "2pP5Q4zeBWM9ppFhc7qQXX9ZMLbGZi8Xc7TN3fbKDQU5cRgwcSLwHjQMFHwV9vnBmdwXPPtquJ6cL1r9MK9ya3DK",
  "key32": "ePa1K4mQWJXJpmfhpRGEAMd6bfU1rckmMJE5GHyvDJ5c7XdkqAwgMnM7J9xRPK7AhVBfJnvWMWjMeQMAP1mEdjb",
  "key33": "5QZEcXSuzFw9ZmRdVUAD1WFLHrBSjT5qEM1db3DfdVn3yXJR8BNWJr7JYGho7aixxwQ3qnA2pBwmsT5SvnQJSB67",
  "key34": "2Zs9Z3fmDzvGxqYj4goejghyFdcZct7qW4SWMZLTT4fsgraLuVS7daBELVBWYCrZdRauDBvRR95M41ZrGSw9DuTz",
  "key35": "32JybqFEa8MkS5KWAdjHj8WW438kXxrqiM8k413ovT3SbG9g1C8tD5sjdHQgNWkz4WrshM3rJEaFQ4mACX5CuiL3",
  "key36": "2zTFvArFij6pyEb1AfATMQap6mrAoX3hDgAHTH7ehxyPqaGJgo5x4TXzmKpWumLtGGiCeCAWPDhWix1xgVjnpqko",
  "key37": "259tb81dsFHpz7nyFQovmaZyWUSHGvig63tPj87wJZgbjP9ai7aZyRr2VpUaYGVx7MFDS4n6c9ge1EtdtQ5WwtCK",
  "key38": "3k6DZM586DxNmQZo5gtTcLmkAsAuuYUjVSdZjyyrupgbbGvVyCymibcVAGiYgw3yasAVGLWtZaXcp4GvVEihFVPj",
  "key39": "4srXwregdGBb8eyoXWMAwUUd84vWK6xc9ui5GsZEbe34T3fPYDWmrTjGhTnKNJPtQNEHrkfLsJHcWYF5a2rxy4va",
  "key40": "4fsgTmaYAq8yzZwJmWsahMkQkhrkFt79bgZPf4XUK8nxVMzrkD2NueNsBMDciptWZxKxcFEzmvenfjUZSWFDUUNr",
  "key41": "3rv5KPutTmhc41yxvjaNS8iWCoDC1xJZvYJSzUy37jJPv2A7WbpoFoBfTQbzrf1uqTWK7cWjgSqUdPQSke32MGRC",
  "key42": "39QCGgt4GQDCMyX1m4kAqYzr3SdAnfP4XUe3uREywjcmeGbGNFZGrL7gxjbXBYvSrgB8MiT6XPjqdkoBQksrrM6J",
  "key43": "2ta4S5RH2zxrmYq2EkZSJBcMirTYwjcv4mN2ye9Y9fUHHMBRzCFhCWXCSVbJxsz3ams6jfAYv8bExfz3UtUNW8Fb"
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
