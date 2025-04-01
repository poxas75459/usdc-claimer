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
    "2vKyqiHHeAQADPXfsavi7Z8pyuBhaAxPtdgEdtnSo47E4CFvQTkVqhE9xfJ6tor2LvtrFWWj6AzshGSWJS4gQoKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e9KwTSYVyK4tqHQYXPUj1VBUjnqyh4hxoXReL6vomRP589jwQJ4n4qMM5EkuAcyLcUWudZvMQxmcpwVbSgiGML6",
  "key1": "i3TWzsKNUiSxaYZZ7Smr9p8M5GReQ6N51Cs5mNuB5JDumsPVW9tGfckAWNRLNHddWPtrRNMouwSVG8YsYfHp3A8",
  "key2": "5sdr7FUAyeDQA9EUyPoy94vuEt5kuyk1fce75VyVWjZ3S63vNpHG1UhpBSMJbS7Bj7okMSK9i2eYNoMDWLKhxst9",
  "key3": "3deN2XBK7E4rXPV5bytnPyDAERVFtJ4GnAgtc1bPRXgmYNTWh5qaBwcMhDCb4nWUnwv72CQUDdRXuTCVVR8pwF1G",
  "key4": "6qwRCLUkBpmhGrZTGDgvHYbbQBLeDG7Z9cfgFXozUSY18pbVUUkXCxee297NKerNDp9knphEirJjqzTwD7igKEw",
  "key5": "vX5TBEnyJjVC1To31uaWLowLv1RRGZ1ZLY9jZEaxmq6hBfoQ1b1zSWTykhx7z2J2zNmDuyKHGT1bZJ6ThncJMJY",
  "key6": "5ymvt7bXLXDYqSuGYbA5zUAo6CKrTZ3UfdNax9pM152H6ZoHo2hbPbD2AJ4exseppczGEuF5sL4ffHDAA99xkRFe",
  "key7": "5JiTiM73LDVESYikGXyyMMoHpkq4TphD5FDAdX5vXnubRbrFHqvG6uVzyssgJj7xgFU7qWBTy3oVPX16HxNoRK6x",
  "key8": "2mUWR88NiVW1mBubj2w8UawGvQLZ9N1EFJkPhupVmXdmvm6ogQPmJWB44MpaBj9yFNbgxABWwGxgJdCWNh4bdpzX",
  "key9": "4W5VpVgquLfSNUqq1RgxceiQP3rchHcYAT5tPUdmyQQoQmEM6jeGAvZVvXsBKoBfbM8GWGYBwZzkKL3zp8x7hMbH",
  "key10": "5JWSWXzq5ywsrFXZNjyXwxqUbDeXPszeUfWiJLsJKVQtDshe4BHGmCvQgN2Dtrf2izs4MXCaQqrabkHfstoaR8Jm",
  "key11": "LsQLYZeaj8GXguVJKwLDN1XCtZ2LEgEC6ZqqCcXofkPZAPqSQz7zs64ZkNgVwoBb4NMxKrkcnSF8bDybL3qb5gr",
  "key12": "3grTDRS5njrCRhr6UfYRXLwMeAjE6qfJDEV7UYcqvdpWamyD4jRAY7qP1TAfTAS1Vcx5bsySpqBh5cywd8vdLhwq",
  "key13": "2AoEvfr4S3SorgabmQdGAZxVQ6DpRs3yA3shyxtuoKN4Jk8JvrbnKUMF2jjUrJjab2ZA1hX6gVYLsH7FMAJThmhT",
  "key14": "3TU3t7XjPpm4ShGdXgMiVJvZFXdUDrdjFKkMfkzcGErdgag65jraDwPPvJR8HHMfpnpYKwHzoYWwXAGstgNpzXPM",
  "key15": "2erB17Hpq1UBuS5uXhR6kn7ZnMegcvXmXJUrxm2cydHpipeQrZr2hUKNSvPqNijcbW5aM5W8jeCkRt6hvzZYvQLL",
  "key16": "3BMjfxcUHRB4Due3mDYcCopL6L9WSWCvqGyK2kZ75ighZju5TrH9jNEcwW17W24Dfk8fbBGHFSxgAjZ1U2VKEMQE",
  "key17": "2Nrj7D2PLvHAETTQPcQARBJ6p65uFLzZ6ZRifSQiFAteB2sewZeAtpwA2XB9cURUgNr1LYFVKsX128DLsEVH9zM2",
  "key18": "5HgSgN9Prjs8DNBCE1ntZ9WW4VPXueW43cRjjrw5hCR4FJUpVpcxdomy3xyLoLSyztfAD6KYn8qsYLE8XHtPKaQB",
  "key19": "vEaktBzKbRdyJotTr9fUpWoiS92GEnd7AbdiSvS8MyDpwkhWYkcqhzW9mUDGzE1U4APiQBFpsSsLJMSnpJVsvDf",
  "key20": "4FDtbpSVdjvnWZuXZSD97cdSy92hvjswLDPTF5fxHWtmFtsFjEHQzTRv93f3BmzXvqu5eBrfiUQCZZuZ5abmafAB",
  "key21": "4QhLo3yfddN6ELir1ZoNxVbgq5Zy7zMu2AaVd6wv8k7nbcyYm3h693nGzvbgxhofsecK36XprHMeV3RsMXEE3igC",
  "key22": "JTFjC4nM1qiaUbzyagqmcgDyFDZCijd5KbxkZ47FWYjjTB9WS2puqivengDy4AqTPLY3ZiadxPiHvp8Zyctywcb",
  "key23": "5bNc4pBd6v9YPLYtGDMVA2Fm5Rh4CsyQqcpc2MGRvut8WByn2HXXXU19Usradvo3MfeFHs5TckupQ9TyNdQkRrXM",
  "key24": "1MXhWRD1MtQNuh3sbYqKJNHNHDK3Csid2XDWMBkGYWhJrckUSmpnyxoe31CCqrJYGcLyjQcnvXKwt3iBEcmVT2U",
  "key25": "3FCeoNTaLWqqBnUgejJp4DyMvhttV5swTrbLCQGq4GycpWXvc76AB3Hdij7UyxkGksH4mmL9qdnbE1pXSrty3vK1",
  "key26": "48AVZVqxKSDTTnGgCqrrQbbUqFtBBXJELxFWQnkg6ykkbcgYVcmLWWxMPg6uQwLkdDvMnt6JKevzbrVFQPCrwXgC",
  "key27": "3w34vV7XhF9K4KHk7myHgDuX7L79NnYfaauMjU7PBEUwXBFoUQVmVmbhnS11HT5ND6xKZCFYCggdegfxwFFRcrAR",
  "key28": "35m1A7rPh8n89iVYPGvRUnJoEK5HXCDKbwjN9wwV3LRavLgQT7bMuduC9LitGFoGwTDJMH7QX2DauW8GwCmZtykU",
  "key29": "2NuCdLcDGCEaxVtH1puGDeM8e7kCEZRmeGntvhirsqYbWXjyjvk3RMrCh9FGebottChNV66GLCoMxhUi8NaWdwGy",
  "key30": "3ubeZDLkAHnSd4K6a4WwhPwRWMyZsGM5kZJoc3Caw8FUbcEuK1hQdPdnRG41aPPgqL879X5ft3zzF93Fn5kVSKWM",
  "key31": "3muFYkhX13DkRjjMSrf1S37oBSLzALfoY9fxt3gFnxNzD4zSPesuCpwTxhSF55xz9LWAgzaeroLqPjLj3i2voqJY",
  "key32": "2uCfNZkdYUjYhmhAoMae67tuNHy7sZYDZaUNraJ4ZBRo3a7b6RdTMBHorDyzbTBxVTKDa1z4s1HnZGZ2VNkDmnXU",
  "key33": "4op9JEphEXVfqSjL9wHvACkdufstmHCQ1pHejpQBBhGxkE9jwHLUBJqFeQUbwoYNuA2TpZQNgU3ijNFS6Cdo2dXv",
  "key34": "5AugvUzaGWWwSSoLfoHapjsBP8GxXLzypegS523XtPQ9tt2oNCJKTdphE8WzQuk2ca6PkR5P8y98p8BZhGKeMCqJ",
  "key35": "3iuWvqvbmrFEmZ7JDWn6pVw1ubMbrbndTUdUi4nerDhcSqi7F4ssnF8EwTTcox7T9BpDCff3U3bhhyFLTYrzDMes",
  "key36": "32pEzqhx9JdXeQJ4VCwRap2SGHMcfJmNfbkha1XCnQRDyYDwGL9rcdX5RMPFgKaZsb1qcvNwkSEAAD487rtdgRqY",
  "key37": "3t6sPeEpmCdZnugkczo8vP4boYLQtX1YcChxVE3W8MfcEM99877wz7cNHLdaQ2Yqt9n9zkq3RdAN9CUGvqXnKEiF",
  "key38": "ah2DbR4FBQE17HMWGPBGY3Wjv5oK3Xx4g7BectP7kP5KXjiktEgifRJfqRdhhDnnEgdsCc4FdnB9bQDWFDGHkme",
  "key39": "5a9VTyvZxXkKViFZM7Rkvn8nyv7hTXKtEfEkHueQ847HJY63D4mUq3pGoKmh9T4nQXEbfmubSGwXnuCSMPqsD5y2",
  "key40": "35CNCwTcnCEhwgN2Hyw7nX3njUhtrZdTENGmTEpbDVTmuPfj3FPv3r5pizKUpmrrQ1m1jsttHF6mDFPpLiMFD7jL",
  "key41": "3M6sdh1SebeTaktXPyU4AZUxSGMNJhkxvZotCLsngfUkfTequheJ1igtSEwy5cS7boi3Drtawo1swehQ6dTLDw7R",
  "key42": "5PfgKqfXnwPv91tYbGCHrVpYqWBVMWMqmYfh4i3AbD32vs6YXtj26vWXLYSDoetT6BDwGG7sGeXoybJj6sR4hKW3",
  "key43": "2MDjfXVFbXzse7NvkekfMWjFpxzkeDmRjQRRHa6FtZ9NUWg3xjMHsA6nf8bnvRYBWmg3FyxnWsSXvooR5KiRDpXR",
  "key44": "3V8B98R96WJkF19iTpPgy9pbG2gQ6mZBQdCEHhj32dSee5k79ZSiWisuNiqpn6b5kwvxxDc5AjjLrmTDbgabstgk",
  "key45": "in1v4CbLfe55WSUEMYL2SiazprdRm7AAPC2qsg8B4BC4rR1HVxznMtNbwS8twr3Wp9DBE3ncggVah1JDuEYbHMb",
  "key46": "4hGhPoMRjtJAUiFki2YiERuUrdmpqReMMZkQzZE1UXxgjDCMVaFdXgAPDnSQez9rdFJ9tYeqMXvcMxaHfTVpDY1E",
  "key47": "5po3KkZ64P7opqdaJya7gpUUUtvqx3AyaAKuGGnrPcdx5YjHBuoVfbjz9oF283ASw6Y33jeDKMUz3yCmwh6Gv77t",
  "key48": "3xJfMf3V5twVG5NfxE96njnwsCNratH8DAdE77ppvKwgDVAmPb8zN3U7yYUaoqc4BnyqUYAhkxwProwzw5CK8Dmg",
  "key49": "2HnW3gN8Ucxt8euat2VfqUbrP9A82UDeTMiZtQNz6po4vSxHXBeXUYoj2cSXenVnXXvXhrWjA1d7wnEXou1P3Lwi"
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
