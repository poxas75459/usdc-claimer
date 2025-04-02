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
    "3B3HLTi2VjjYp8TBrWxWF4VakF5waHBfLqqHzHgAg4S75tdsKyj2NxHchYWeANCgLjefG2vym1n3V7Fqu4Th3FLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ERGhdNwam7bmrNU9ECt3G6oDNyhne4nvZ6bPyqbbBzMtLP97VJxb2VeiGpBTgouXHGgwCgruDzjp8MgF3aHs9Re",
  "key1": "2R72hzL9pK4fXZX8cF9d4HgRKDaTiGtqkMAhe7FZuF9ZVKFNj3cTvJcfRYmmk9TanRzo9aLdcb8j7EqXp7aCirM4",
  "key2": "21B9TCjM7RyNVVeqUzbNyViQZpFeCRrXvfTC6hG3tRNj54SDkHXQuSSwfgxsm39Zeq6oBeANA4dfbjSrgFshvYwE",
  "key3": "4CMfBfbQas1ekjsg732t7684vobvnQZG1Qp4JZmknVyAFVaAEzzGVYfcfwKVPMEq4Dnfc66VzKpk6yZBtmPwQhL2",
  "key4": "3MTjZRPFZJwyuYGSzdAk74pSZd8TyB7UVHPyao5Bwq9Q58K7HvEEUjwoueSBGL8phLrvr377sSU4zjyWo62wUsBG",
  "key5": "4RkK5NqkM4hwnETjxRzF9SegG5FFNTYT6h8d8ys1VthFNcFbZZfSvb1nqE3Gf2jZFQTweTjmme5TMw6RCng9qyLX",
  "key6": "4DVRSMRacePLDsMo6s4BhjLmEbiCTm69u7FiGVafEQc5UPt4KQ8DYqWKaUFYTQBJSU8Yejphgw18ess1on7kAjth",
  "key7": "3QHtCwds8hEioLzkuTaWd2PYWq9PsEHGUcnm7QH57fdcxtaTgPmC7a5ziqnN5XiXhfW73ZwYdnbng88XtuxgC1Rv",
  "key8": "CrT5SSkkfgm4Q85GwJtzgzp4S9NU5gkDyWUGoTJC2sMsfrDJ8tZwZnYw7ihiJRws5nXLgzaA8U53rhSFhTsaTJu",
  "key9": "3GeNvX4mVEP4GfFWKN2WRomjRseDbWnth8M4fQutRv6TuKv5qNPf87jixeTEjs6VVi8JBMVYAKPwMmUnnthvs7Cy",
  "key10": "3Z5Pmv3gTyKQQNrA4CVeT6F1SatqrvyV7K8YG8KnoTAVEejn5wWFUDUzaixWKfUYxFRWWgePxpnUaVM8HKRYS3XD",
  "key11": "466k9M1jVbNevSfCCgncZjDJm3cANRG2RSvcss4dCyKCWQwkuLQJYBr73c1ftUUWuddYNdQw6YVwyyGtgjmcFt6z",
  "key12": "3DdXmknUy3Ptjg9c7QNCVFKvjqVKbNaRq5wWTkph2TLu7qiHMgGvsCyowTpBzyM619Tp56Korzf9yd3CgHvurThq",
  "key13": "F4wh9FFmcktdSooCHv7rLuT5hZhoqcn3CCsCCugctYJGJpngsoJVgLQnbaeCA15k6w8RZVxne6t6mgj9C6bhPRr",
  "key14": "51dzQQKraUKBgBR89Yzq7pntcCegkCXARs9rzZ4RwwNdtK5naV7HofZM3awQAmQch4HrurNoTTtzN3Yzsz7yAP8k",
  "key15": "2JLerGZ3eBGCu98a4g2i5tAG87sZRMqPD8asav6W8zyn46zrmG9gRpt5XuPQzrhoKLagGopQrmn1Licea16tJfa3",
  "key16": "49E9VZP6PcjoVnBycE48m4TdwQVyUVSRMJe49Sg6ZKBVu3zPymfbX9TdtdXpgKzG9md3m1R7GsKfjm8BWts78QSz",
  "key17": "5k5LUP3NNZw6noQsfwKFnf8VG9BsAMPucT1ujT417FCxTVVknJoYDidL2SHjqB53tkjHGYhvLkgqjqkhBtB2HVgc",
  "key18": "45oXfL6c7HytU4qRCZZUn7AcFrpXgkY4h8bGSgaYvqtZvTh9eahEm4kuQPsuL8DPdfrz7twJwUieZ8gWVyYR6G5A",
  "key19": "5S8cwsBA3LmT2VC9t6FWd47HTYQjp4ydfSBkYUNrKkAe7rAxDnrnkiwUf68pB4pCHzW8HiGp6RHscDSszKkgeBym",
  "key20": "2UQ5dEgo7esGKHhN3o3GMNE6dZWb9hR8FefQt6KQoFsqddqGkeSa221qb8LJYrXqCbMiSPFL4Mn4nF2wNAmWqPTe",
  "key21": "5s4sLespReEmmNqDtQ9rx4qJfFQoc8yCi8fHCeEsbAF9T37RSBe1fnXMzsxBKUdNRiWesuZnpCJzvmwyt75vVC8s",
  "key22": "MA5akoXhHhThDb3DsessKzTrfYWqYxgoQBAY88FdgNaoUxy2rc8DAdNin2qVjnjNorGVLGEaJPrL5krkByK7c8j",
  "key23": "9EQHRucA36whzJzVRn6Z7ubWqGHnzqVbwkPCAmu4nWtYGaZVSM6hR2BV1k3UXGSw3yno44es1TL5txiYjRN51h6",
  "key24": "3SKG4AmakC4uK2gZw6c2SrVaXVAqsCK2fMTAQRHD57Sf3pRCRM5wq8PekeabUBQEKV4ggGW5gLQ57Zr4zDuEBJA7",
  "key25": "8LnNYSgJvS2gzCcQDNEEi4Xm7ZHu466sD31G185zLFW2WsHpdJmDiYSMLHiEK2Xp5hEEsfSy3P6ww2bHHDS9fTM",
  "key26": "32shNyUWV3iaS1VTVV2rAYDbJRRjZmVP2ES7g4JtKXVg2158eRBWbnkdQGRfLPy1La5shbtbq2YkmWjDmDVmjDWZ",
  "key27": "3MjKGR6RTmLxhbrDk1as3vkUJaXwrzT3Cs4eVd7G5ES2EUXSei9XyScXvQUHngpWsacTJZi4Aqbv4GNGczAbhQum",
  "key28": "vv5FG4w1a3wUZ8pdqeinXxvLfmSj8UVYme3dXLWy8Uu5sVqiP62ySbnP6gL3Gc5ewD1Hm6rAkmABJVy6f1xVy8r",
  "key29": "4GMeGVGCXeVTqz3x4XqvUKS7wR2cK4kECcRTKzgEVJNYFzaMTHtmc5vi3LyW1u9XNJYKHj3hJrU5Xjsc9xRDnKen",
  "key30": "5T3FzGtEQKMqQdWztYBAXSxtVPpwHmioBUukpNRtrr88HesVtvMU1s5DF44Y3qgUwGP7KPN235BsyVb8ZbQUpCr",
  "key31": "gXkJtLf1157ARMnmauehMCY36KFjoRDVC7d2mhvcqn2kF15AYCc8EwhzChozdD88RFy4kBmjGuJwU4Ev5bn9BHH",
  "key32": "2DJ3U4YywHtkmFq6coQdDPjKQyZxUuEescTpqpSdKV7MYxNaEju81wocim7ndLNpKxCnaroP5S3FCKn7RXxr6BSE",
  "key33": "67DkMePx1wAMWfRvz7oixeJappftDyiQPvKCZfRy2eUrSH5Lx31mZGYi4GhdSWmJ9KJYs7vRShYmXkCJzuhsgxXs",
  "key34": "5DprRq9hX2srkVQkavsQkBP8kvjDHdREq4LPthV4hTPoURajhGbchno5JXwMqNa1cs9m7KmcaNaq5h6bHG1rRC7C",
  "key35": "2Qv7k1ZEVkjx3ErR2C2F7bDrnhZ6VeZcaE8fSfh1da8b1pvoEV789BFf7HuBpUyEG6BSY6JVEigyK7vdVm7Dpg99",
  "key36": "4ZE2ocS83grRCXdtmtbZWHCu7oJ9MXwqq1WKZ8zhG13SKb25R426gDpE8AtwHKToKVi1HtNkX4xhjNUW54wusHF7",
  "key37": "3dxLoCJa4TXE5P6tVe3uMq6ALkLpR63LXPFc9jaViJq7cAZ3hjEccJLKEytMrvRt8AWQ6dLmKKnwYDT2fbe18W7n",
  "key38": "M6wG4tgRo4dVNvvVeWuB8Mjja94viufyv33WL1YETskMi1snRhhdLMUiihy31VPCTWHiG7bRw7jiWxAD5vF4iPY",
  "key39": "C4YDVBZQeJd6QtX7ZLpUTmMsPXF7RQY7axFFwNmoHCyAWesyvRQ4mWwFWZ6aAfQStSWbY4dm1GBzk8BhKJoXCKS",
  "key40": "mms2hQz91ozNn71YjVEfB7mp6S2jqvW3XKreapBHamz6kAFfCBGSfn92AX4cu27ymJcoMBhnHxBufVhQe6Uho7P",
  "key41": "3Qg95K35Bq7oCjsz5UERbSTwuGCPzZ4ecmLwRyotvnhcp9wSndwtv4dBLUj5eQRCPcHFHdVDaBwrtSitLukx8XEE",
  "key42": "XG7c3eeBxH6LaiPZyDAMJhv4goeiwssvSw4qEiH6Yx8KHanaHGUyK13bUMqw5tgYRDhrwfNca7CVZbn6vmX4krW",
  "key43": "4di13pWCUhzQB9HRTNafQPEkHMgXGKZyGAg663dPPXqP7geAZTWGH9JAG5h73oj13NdyqD9M6vTu2AMhPK5FBRvt",
  "key44": "2ivhQhVsTX9vtD6nCEFNwdvemuSYf6fp2sEVeCRgTs854VmK3ZWjFGiVP3TyyGJfuqQg3EjmrdLDrg1qy9NAQAWD"
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
