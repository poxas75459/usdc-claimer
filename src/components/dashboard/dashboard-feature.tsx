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
    "3VkG5TfTAxSNCJnYoMXJJ43fedmdocVRw4r8yVLXxaKJHMpgcAKwNV5C6f9xwnQhVTX45fsuiS6G6Cg2iTChCAoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aiZwzt139urpcpqEmNQRxMv3KvccKCnJBKA4zjtv7vWNmw4qLrebmEeVaHBSu6FtSRWi3nkkFrstuJKrZpR2zTQ",
  "key1": "14D4DqcftP6tYS6sUzk4FBQtdUNWE868Bd4CoZB7GdivyYZaJAmZY8aFXje4YpevnoBr1QAY52kX4ivRuYbruru",
  "key2": "QPaEswNgR2x2ae6sCoPHzx2N46JphQxhh5HJWcLzvg5zoq95Eh9hDG3Y6PLUJWcaowZV7UM6qTBM7zRLKS7j2sn",
  "key3": "2JNeRoH28jhtgVJoaCakn9Us58RBfxXn1M57wv3CWqHhBXDQHfUZ7RvWVLj2Xsw3e58pemrEFoHti6j5zPKKZuta",
  "key4": "4EV1X9pRjaFucHjMxL8Q9vynY8Hn7VDCFfh53kCsTdoEbcMdLk9TRmfHDYW1MPS6mHP8DcYSXkCArBc8UE7nV1g5",
  "key5": "4Le8crKgvrA3k5s1rmz2UkHWCfoDQyxvWuUDsE8mzqtWLeK1rMsaJdWs3Cn8fdnuxrrDo12JVKqw5vKXtFHjuVA",
  "key6": "qyjPNgf84StC54pwTqNaDy6fb15NEojs5D7gTqKzmrMmMJXZZsxeevqcCSKUmNN7Hmgr6huyiJNNG4qbeH1MrV5",
  "key7": "3x8QffyWNNtgKqTxRGjckL9Uh1R8JJUrZYsmezzavucR1CZPBVfEvT7FHUYLcdYgqecxQJVvKfMRoDcCwApvajvG",
  "key8": "5duPjsU78MCgBe2j66aVck6T5ipjQHFZ51oAhThkuEz8VQ4cg6RXuoNxZXDeVTe4zDuXy3tS8K6c3mYuw1vV8y8s",
  "key9": "2jhoQCx99XMTJPpjaiRh7mNnFbruzLhAMGT8CpE4ZAEtBnbSbXqydZDLSs4SGhNWS43psw3BHYXCzEAjkU2hDDq3",
  "key10": "2CqrHxt4CPWmwXRRAqXqwKRsZAfXibRQq4QBb9Yi889JVwH2d963kGeUVD7p3wLCpjTwMKD4TwWY9ZpzK7GuUZ1Y",
  "key11": "33S9ipzfsECsduftEcpn3R2SLktkfpQYP3eoSr2zcbXV9tmsiy4LfpZTyC84KjcU3yX2BbNEcncQMVJEWeGidKQ8",
  "key12": "3vVpQmU2EjjWTKtLWCcqEsjkE2WS4FhNDMGEZAapby4siPw1ydVJyNx9iTEwASdxaNxCvGs44f9hiNmSr1m8R7r3",
  "key13": "3Ha48RmVgG4CVnVzHeXvo9oEnQLUKxnu9mtMWQBVNGt7bLC4USSTUXnaFbQ6Km49u5aZkgSap9jquwKiTa1LghHY",
  "key14": "C5PUUnaNdg522RN5pzmJW2yEPChi4fHk82VepUzikunozZGA74aNR1wo2o5vuvQ6xvcQV62en45TRYfdBYEbwSh",
  "key15": "NJE18HTCPC1fGKtENPYDKyPnLsU3qan3qZu8Wihzjih3AdFi4GpMGi3sVgGGSPQ1dCWsnvPaXMUXTWAkfWPX4Eg",
  "key16": "c7eXD919Cpmf6vAqFdpjNHS3wWTAhzsZVAooXvL4FQPeVJ1q2y4vXzLjf6oia5QxNYiELCY834gwbnGWWpAy4Su",
  "key17": "2bjeXhEfNNf5fcUCig5qUD6mmNTEmPQAZLKLxk52kr1gLZYkzapg4zfXjaBBW3F7qNVFP8agX2bnxD5SxwiRXnkR",
  "key18": "39qPVwsBdaqbYYyUaCaMU9oKK3CPt9D8PJizTMf8RbwWN171oao8T9DV3PwYqWVGzabqifgL2JKsuFEoAsG9j9Pz",
  "key19": "3CdkNqhRvYyRDaKV113SxT1KbwWwCDPaBYU3Tj7NGB9AriFvYkZKoVTL1Q3B1vtkQ3h5CeqChcrZRdMkAZspF3m4",
  "key20": "66z6AL2wxokPFkahHKqHzyBgwFK87HFJQHrMij5mRTzKxiLJzoei8DCgyBNUomrAtiFi2sBKpM8Xx3rn2GpFwJqT",
  "key21": "5KCxGN5m86DsjNFZX3DCZW5c9mgjLaFLKEmNcTndkTsygfwFAVxK2Fmru393gCc8Gu3SU26xw6XimW6KoPdCDPiS",
  "key22": "3G2RzsDe5RpouwxQG9yV5fWWpSLsDBbNvAcxBy88wH1T2cMbeVgLhZELBvFBinVTK5s4XqrCyC2K2pdJV8p7fdeM",
  "key23": "3a3cmDQh6mDS4mgqqw67dFfsawBngFBdUTD4agVs5mfF8u9o9z7otXJrpvW6AmT7EKhyJUBKqF5Y6ZkS7HuKYqv7",
  "key24": "59BQeYvryPNkgkmSCPe4SQXD3at1j5DZkhUetWsTmqPjTqABb8iK5eyTXKQGQrQvN9jAPpcGr3h4Zw4t5rCQKr6A",
  "key25": "3B4MUqY9hG1YNkBEMXconose91mPkyhdfVFzZ4HNW3iVyGPJLAUzJn2z82t7jz86Mczv4uY6sthtSHvzHCNM16gi",
  "key26": "5yj5wtr1LQhLAaZ21Dk8gKviiXPRgXKLi1Z9junSdxGJeh2b7BqwX7PeWdncT2ipCS8DigErowXiMbRFuxPciTns",
  "key27": "wJJUGbiCd92Jt5VpdpxtZEjewbc5JDTCpLAk2cJQDPQLdahuara4iD7tCiRGxdrLxeevrw2uPtF4QLuvsLAuYUL",
  "key28": "QUe5achN1i7CJM77jny175dtiNZVABugJJso1Xv8cVnvHvHJ4xeD5HBByWwJKT3s2hVZMbP4advoW3H6sMFDqGp",
  "key29": "2P9YtuNZAB2ZHTm1ANnwxm3u3erd3VpondubcJsz6EbJN3mANC5ZrbR2Yfppq75FeMSz993vczNcbaE2jjEgVPQn",
  "key30": "2gMNDxiVHAv1g3TGAQZoe1pwENgjErTjwWBTupr3cnaLC8RWk2aJrDD3Pryd3doHc3KoUenQ2F1hJtf9AQk9j4Fe",
  "key31": "5isjV3R9aaxUuzJw1pPLyKf8SmgZqgMM5BbM9RcNsvsm6v4u8KaSkmJ2rifcZ2SKMQmm1Vvfit5UBuYnY8NV17bX"
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
