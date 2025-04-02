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
    "62GWZZxMCWqd9G588wXyNhgFwJGF6LXCKBhW76iSjApN2KNNJmu67W2zvR9KSHcSqFjhYUNVsy5JWcEqGsQVNcFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zEnVrhPyorC17QKZHH9GeDrCCUWWxbzQesJ3t5naRfvsRzYbputtWEeHnAsPjxhM9nuiKZuhPrWJuSgSNL3HX7c",
  "key1": "2bvUmWBu9ZkfD1i1V2tyk2KFUNqp1tz2LJfA8fzQrfW6nj1TRJdbB1r9eWgA1Ma4iQvqYp1qW7YDASbChu7BkkHF",
  "key2": "2gwd7fLudG3eGyZ316EYMxcZQGZ2obPX5yuHy1u7xGxwWuoBiZu9CNbouUGA5cbthsq8Nm79iFP5EWLvEbd7edER",
  "key3": "4NAAhBvHxPVtdHyAYpRFKdUvqqAdLJAmDojfnQ1Mzbf78RP1XorgfpqRDqWrebge1PwgKxqdAxxFyqaiWnxGoZtW",
  "key4": "LWu8kkMms9FevWmdDMqWdcdLeMfF9wchMDytsCY5Vt8kFgrP3DBVqQotCd1NXCG4Mg8D7qZ623enwwTvyZoE5NF",
  "key5": "SJxhG5Ju18UyEwRCzcgqRADuahLJp3Dytk2aS44PHrKwZ2fxRqYrXtrrK2U99fgT6m3mWuWbGkSHbcfzaA51jty",
  "key6": "5mgDdj4S4d18KLSDRNAQFra5b346oE6HKP17rrh1AvSJPLYbdgS88SYh9zMPQteE427KZWXC97sAZif7dTiCvuae",
  "key7": "3j16KPcXnX7x2YGPG9ivE6dYZMLtkqKNSpeyLtpfY4v2MDU6s7WVKAPjJZcVe28D3yYpDvRmqb6nk2fycLNi4P6q",
  "key8": "493WMRtRHjMXyaWLTvsLbTD8NhAsoL4Cw7jbVsw2uRbdHfL437Jv9S6vf12CC17HZdwodGG9cYKDjqb4HyCfUqC3",
  "key9": "4wHuri92ZbUVyKQmxH4JdDy2Z2o1pQdzxcXAaXgEyWAzh4pMKG6D4rBjF3GVSmGUYyqYDmc1TyAiAYaDnzgNsBsP",
  "key10": "4tosJm3XWfmesH96ZUDTQfqwMkumKUaGYo3BwDbxxzpamaKSoX6SeHJ2EqVxAbE42mLch7RsrLU1HKSU4AxyaFkW",
  "key11": "4gE5RzUTX5ny5LTM5s67UnsCdDQzvxN5KXhix6eCUiRF6nh5EXgGLwuV1tWZ7wvpWgCjVJsriQtfKU25Mbtj4Hms",
  "key12": "2wqm3BrRhJsAwG7u3BzUQXZnNn6nNgw4jxDhysRGhzbZTSUv8XYuCW5iGddpoKUKuhdWAckAzyBZNwqcFjgGUPoW",
  "key13": "5q1ufUD1aqKSfkimVCh27zL5CdSv44ZB35YyntkfWD98k8fAHXTCwU4shir2EEf3fBj6cFm7Cqy6jvbCgwLEPWAg",
  "key14": "3qSBEGHpTW47jTdhMzo3VfQQzucpyT3uKkmcMJrZWvPz79c1BpLKaNPUgGm4h25hvb18KwcAEyHSjvxbUovNBU2T",
  "key15": "vUEDEsAJQ1ERgSa7ymKTjshyGHPMqoupbyPwKkteCyfpy8mRdS6msHGuEprM627rQKmQdDh11HZKaubaQBph1jY",
  "key16": "4mthbh4BmjoY1VTxnVjVd2TYESEnkuMC7YTfGLPhBk78qJtRSQ3FaYR96QNNvgxEEC3wLYrbjN1hZ9mhuExvXPav",
  "key17": "37Z2uApX3NR1wjhkSUKHefvwGu2f26EpQU25vycVowrLojfweimNGAFN4Ru1wX3EmJVeapnNzVSYZXawy4LZQwPU",
  "key18": "4vrkcrCR7fvbvkyXAGfe9yKGpkHo8VZRWyCR7db1FgDpPpyfhAacyySscaJy89imX4v9Qmn1bkgcnYu7XhoBVPDN",
  "key19": "4D64BPWPfbHiphCtcssmJ22e8QW2m6DEyBRFysPrA1kTqnLH5xsMb2yDxjribRhHtxLfEpDPaNveeRu9R7wEmMAi",
  "key20": "5hKJyjwfqFRHmSYP9wowBPZdf5dU5xiRYRQWpDZG6NiQfuASQVsQGPJafjAik85oJdpv9Z2fNfhWgzTWWTntdhWJ",
  "key21": "2ZD5Wu6tYYjpTEqZc3Y2udJD5jsKNC4KZLGg9RxVTfnMcWAMVDAawbJAHsW31C3aSa9NRkm5mnnkxPxkC2527XAT",
  "key22": "64Kcc4wcjA9M9N2qv9wpMbkoHFHC4MPN4Tjrz27VPX1Esk2yi5fsihxTkMKRoU5XQ5Rn2hrxwTNdgnaqqKy9sfNt",
  "key23": "67Bo6mMPpF93gQQXZsFh2LuE43i4HCG5VpM3dYYetP297EUPCne63tWMhJXsg7wQpxyu79q7HZy7ZWkBTxVBc4MB",
  "key24": "5dkW6ciz1J8SaXgmHJtJvgv6wV6Gp2e2pNTN92xRDgWkawgodUySKj3cJdDmwQ6vJgZr4b4A2qxmcoQGqRpoQ3nn",
  "key25": "4PZQeEAgUZwLzQYwacG7hr1Dw3LMVmnKdgJQbMQsHp4PyJoSunjhiaTgdisVfw3wZcM3qzFita4zrng1YGk79k5",
  "key26": "2qJMYFz5tmVjJxcQEs3qBkVv9L9jGxS2NVer97S4t9j7kU4vZ8GKcWUDtGpnbLRux2NSJMHi1oHNsNkRLuygjtzC",
  "key27": "5K2aRrtW9mQxUH1fDFo36jcRRntMstJbBRVwNZqpwv7nEFeXitK3Q1xPoSP9TPTRZ8f97ewy8o5D5GfHKnaLryg5",
  "key28": "5EqVzvuWdvuZocozGjBFAebmxS8L36dQxPrPDsYZD4BeZDbDkWkc9LAmS6fNqnfSe4eU98mwne8ckmtpSQQfwjdz",
  "key29": "5T8QmxXxJ1y5BgfwMr7MXPHNNoJVvDF8CS1Mwb5vBzSTtkkDy5BQLTj1FekHh5ZNHrCvfACgXcyjHJe2vJ9P986t",
  "key30": "2LJowCpjQ5uG4FdUGCVDHp99iqGcmAJuJRiyE5RwBBsRwp1awkoLWKDc4aRbe3g91Sbi9iwTjdWpqwQNbTBbgFzs",
  "key31": "5UkpsFQ5bZVxmNNcz68sNDoW65D9d7fFLrvnXjifodKeRwtNq1x4KDocx7S1WLnQmVdgttdqngU4HPMfJ42MtJvr",
  "key32": "553VDtKCSP5P7EN8oZ5rGKo9J7fARRUT1rLeNRArmmXjdKsUdg6jQSRibE2cdBEvYT3JFu627oBAo3FHmiwfvfPe",
  "key33": "5XekVxxiQrYdDLWsSt2G7DnWb7VfQNMMYbEbSupKpP2qd2iqzum9gnokjCNuhWKG64XBDYwm6TXXt7BtbFGYucy6",
  "key34": "2ngUjFZXRaWXEVYvApi81Gqgxu4KXrtb6Ah65n74v73VQd9NLRwC9Nf7FCgiFrJYToJfi3BdKNdCV5mekx3MuZfn",
  "key35": "5BL9VN2wXUZwQsTaDyD6J4rMEKxj6TJDyLWFHRdqwbLvT14hbFouzSt2n3ccDT673B6zxQcaNAdj48RcqdSCVyBS",
  "key36": "386KYi1bdYdVhSX3WRoNrBVUyJKHk831py5LCZBuegwvY84QftASmYrtkNnKnvNfnmQrMg9zyFopbuEy7bMDZVPH",
  "key37": "2mkmsktSU2y7GzmkpPQBuf9L4xxHGeUFWs4ZoZnGGF5cUYSkYFCb6aZyVR4SLfzJY4C1fA3rwwLAcz74jdKNR6fq",
  "key38": "247gZu9F6nBULWmDxLqXsBMs3UqV6fYxBbZBA8EoTBhbRFVVKeYRmdJuPYf3iTt8PJgXr6zV9c8G6QexDyv3R228",
  "key39": "Bgp5rdi5K1yRW6sA3d7vzYLcjFRNJCayHjGKPuZU33GtMxN5D9KxsAa56UFfYTGG4CbVMpkdvvL8H3QGzYAC4Zm",
  "key40": "43zRUJTGfdk9SYsJfy8V88LH74k7T6rEfpn6trsoz74Pa7PVbed7WiWzuZbuuETHSsepsC1nx5nGiRvRgHTVEep6"
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
