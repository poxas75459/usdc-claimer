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
    "3W2Pc9KbiY13eSHj72Vj3vStFEucJuCTr6A9D4qx8auBiFZbFVteygZFx7VYG18tDZxwc1WyeW3hX1fspf6xtruQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PtpnG13QPQ1fKDUbNaYti2ATHm9XBCQVHfigZabrR1ejDGLk6BJDHvXzRS8ocgxpvGxVzVRpugTaNqVyM5RXp9p",
  "key1": "3Qv9EP9J3edkgGb2MAy77Aqo7J3ftbn35JJqC2hor56DUBdqyFnKNVajNoNJeaEFYB2JUgKhpz8yeceGHGvU163M",
  "key2": "2ANgcb8Jy7ZnDNLUqD9qYf7q88GQ5n8tQXLuBJiddTa3zsoRpA99CjVoyx46HdATdKeB5yhAjRWb5VAX3ZX2dbHB",
  "key3": "28AT7dqTWPxBKsXGNDwYG8sCk3ghfFkJMRuY5nW7ABPLf4q4UttnVJ6qwwCDcmQxcT5bm4BBDYwhuRyvHvhfWDn8",
  "key4": "6SiatE9AaKBAWDDEmMunFVm6kbCkxFxmzezkoTRkneU92uuJXyjVermZkuMXhpEZMs2bhDBwUfHVGwT4jo58fAz",
  "key5": "5b9YAz1suuu7dX7ViHhBWbHdf9mra6ABV4GTwC5i8CUBiTg54iJgLpMnvCTWvZ1LuN2oXdwg6bCdq2pRrnSnCyVY",
  "key6": "2PGbEzWNXcFpjmcEDbGQhHD6RzX6hEQF7KuVTmLRLh6uZP5LorGRHay1Jswc6gScBeVphajT9sFB29TM6wiVQDc",
  "key7": "5RQc8ZmjMh9hn8QgsmNC3JhDuKowc41u2wr4saw7ZZa3Z7uwuFYwqPJZpz7jkNXxkuXwnEHzUu1DmswcgnNVVRtu",
  "key8": "gWvJ3ke2WyF7ZcY5V7qsNZAthEGV2wRWV6wAWZWRZKDQKzMzx17znhHqugubF9CGj6F1UeQfnSbtxTasixySgKs",
  "key9": "4b7Y2oMSTdW7535F6NsV5ZYYRL7FQ3mAzJ55jwVFFdhhrmkAQ9rh3dZYTqgdtPYHwhiqKYrVDC7XvfbA2hazfN4T",
  "key10": "2sopoqkdfxEyjW9E1jEjLy8ZdBcRZt49vpUDNFWu98SAEhPvDGzwxHFwHhGqZgxhoCyegbFwCyeRfAwo57yuCZPq",
  "key11": "2ayh4bsHt8SXQsL7TnrZHqmK5F4Viwyeoac72nfQnJbSVy5ktTHP3JrCwAYbWRf8jppEeXuh7K9TbM35UqVJ1FFJ",
  "key12": "5d3DzRrXvv6xps75vvpsZ8CSNUAhUxq9ErabbhzVJHVbaxz6jSRAXzrRCZyQArMhXjHWWndjm9Foxv7hrodauz29",
  "key13": "2KTj6ydHevHtfhYBKvMPGRy4HEuKCFApr62Q6g8RQaGzJJ7mbFf7HQGoGiBj4H2B6HYaJofivxD7JMSDoHrAyzSZ",
  "key14": "3urRPKdagEWRyXycB1bVN1enPmmPifnnZSJNt6qhDc51Hagre9CDttyHddqUH2e4Wd1A4YQc8H8anp1qWfSvBbxd",
  "key15": "3bC3s4ZBmQFAtMtJXFdaprwUF4up4HF3LDq2PtMzVvHKMAdKoG361fSib11HeNkLUZcSDTGF3NYCwEFtNqyL5WEG",
  "key16": "2jic3X2x3n6kVcsE5311eMjPNWb5CgWPeZSBjwignXNj9czmHrsrbnxo5BTUU9dchnfHtwenmmPrRQ6htnfZQBPB",
  "key17": "RQ9oEiFtDYdHBCpGFcjenYXJ78xRjqSmxYV3so6KjMuBtZWewHiUdwRWiLXsE72gxULvLYaCmAckA7q3RMZpy42",
  "key18": "3WqHtzThqbnnPsBKKWFZLFwnXnBC4BMVG6ghTdVCPGCj5jPRqXJyVppLBPwk1D15LHu7NWFyiHRbizz5sYJiNtzy",
  "key19": "2HmmQTFhQAaxVEVLAoTSso9YU8Dk6oEYijwyNVj7DyEBTpRR4QoZS8WrNWF8z1uhCu5ri51R2fVMBhqxaPc2R42x",
  "key20": "4kDL1ZtncsppiqqZVoRq3rrQbAnfAvmKV49mgQK4r2nHtcjRvupwX6Fkfh5z5H8tHDQQGbJk6txzznM9TVg2iAM8",
  "key21": "o7AJrdkeETqM8tjgRZKj7zA86Uon2SWJ4SS7fovivJhffoqAhKkqjq2aHbPT92e4vKrwHfbZJ44pYwCxqQUfj41",
  "key22": "65iMW3FGCtWZYNUhoTy8curyRJqzj5HiNbnbGuU3Y6CXTrSqmqZiBtjv2XHRWvi34zJmuG6ZQiK6tSNAJmLud9YH",
  "key23": "6cL13NYAX8yMHdP2ztiMS3b784H5fG6AvfgfqK3NSNstweEWjBLyYd5pgth38RBeLmgk8MY8SFMssWWySE3QGtp",
  "key24": "H2p44JpiJHgq6DHC52QUbRAhe3MeCMi27j5J2kyq5C3RotkmQ115VX8TZzYCdVDkAE9j7sDP5TiGwpbSYd5zotw",
  "key25": "56fitSV1nUkVsnmQZgdwEXjTAibQdEuDvV9sErQFX2V2ZWtrvRy6WpzG69pYBLbUp1eDya5ggCUmEXyA3K9JMCyU",
  "key26": "2sKz9zFfYQMXbJrQaNbQc74FJvoWxby1wK41SGkFQvxjtTC8efy2VBopmWymb3hNQn6BBojeNYwRZBzSi74g7BLS",
  "key27": "3edbmAYuxAipP3MayDjEjuSq2f1UnCZFTMdroFvKykGRM4HuQqvkPw531abVXoFMSeKsGPPLQ34d9w83StvAnXnM",
  "key28": "4H5Ucydm8MjVbZ2YkXXV2Bwm28eh3LmMG4h6wyKrD82FVuKN6cbK88GZ5HWpoo7RuAhrJLotrUGFXvF97zSuBRRs",
  "key29": "2ijaD2e83JEbQpLzMBTz8NY6nBADokrkenTjWDSSYpfToi77r5cfxWGW6AnE6XJCJNHrzVXZ76HvXCixRcnv9KjH",
  "key30": "3VHck8P7zTKC9VWxxNQ4PyFXEGQ2HC14Mr5ipjg1TTSZ33tFHyxgAwsesHj7bnrtEjDrn5rKZMrx4Szoqku2ffY6",
  "key31": "5SJFtVRQ7avjhFCffkSXVE5HKLvKGrDVRdMZckwgszUERARWow1PbxraYTzDBDKcsj2LurjNZE3SNoPwNfBBs9KN",
  "key32": "2J53ir2CrqJf7NczHsgUtiUxfZ6BNC4XA1Z2MVNhCx8hnZVjKf6YstLXURkTyX4W8Pk8j6oPoPiTt66Gki6rGbWo",
  "key33": "LyoNa25fsr545z79SQrZterqG8s5fgESbicm1G47ijLvTzaDWuX9HYNijQ3gaD1vAXEABqeEConjRG4Zxas2XHd",
  "key34": "39JBfWx96s8482Z97JPCFSEqoxdNqh3arbvtZ4kxLWXfAzujA5EwngT28A7E7pFsvvaSHLnXBX9D3bFjvNsR4My9",
  "key35": "4vgZJMKzTEPM9aXGf8qxXGQxV41roQaBHVwurKmWZ3Q9qWqNK1Crkg5vNJzTTBugm1eFRk7gT3stBtPxKMmmMApu",
  "key36": "2EcLSPYky2jitR3WAnRDAvt5WbzKZqDponJbTQmtZKMECqDQ5Hemx3ERgF8neX4G5jr2QdCZXoZzQFzirAnPD8fD"
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
