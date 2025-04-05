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
    "8LrtMhoir5tQ6zetpJXW2rDY1B7rYc9idCDwAAc7kmvC25xcopsscLKvYCXrLH8ZDh7vtuja7B8e3heGHaXT9aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rzc6P4PQqzZgXQUU4WKQgKUT5eivayV16dyRuAMPiufxtgnsZYNj2XJyUU4GKtASqm5KUEukvHTTtFV1GfZFTa9",
  "key1": "47cA2cNbDgGTJjAaNqzAfmDRA3CX2kV6pMNnTT8ABEwfmP3LMA9pqFZ1ADRL3nqWoyNfYC7K9FFDq2NDkJSzJWji",
  "key2": "2ruBfHPoDWUpze3ftje8LcAZQ5yt7nwLPeD8E95RL8kkkkefmkaqm4XANmeuK4REyMsm7HXXCGjtesF6jWPhUxBA",
  "key3": "4DB7tdet8VarsjTRKqgLGfMwUsKeBQasQwA7qd4J5ustXmYgNzdDCHWFKMoh5GAMxuBrDg55tz6EAoKmuZGHdukt",
  "key4": "3sUacqrN2w8pHgHgbLM8HfSL8E3VxmcyxPgqJM3hjqRaoZJDMQz1awVWU9877EzfjLmBw34JK1JHixbp7DjiCa7x",
  "key5": "eATaHc38WXRe1m3KMht8B4GLfryVBmUS73hk7qXxMBjqSGvLV9jyt8A4ipsyBXVBW9kqqBM2iFEEMhP1nGR7wvH",
  "key6": "28aLMCDDSKEWByfXdafr8eQ7TPZmM9C9qix1vzy9WZkSCAb8Q1mSZbqRiQXtsbsv1GgmTPvNYGaosDHU5uWkXtcm",
  "key7": "4mgPS6jifB2n94XRcs6R87y9XzYaqP8cxDiVPAUnpodZwEDXCRhZ5LNTcHd6Hkc6FPmR78YQ6ueK7Ni6aPjBcsNq",
  "key8": "3r51x2dyUpv8XNpGxdpmFRHvcAikfkFj2Ad2M5xfDacefHAaCk5pGwh8AqW3TX4UNdHa62MsJZA3Z4iq47i2ZRky",
  "key9": "3B5nU4LSb6wgN8MDZqJU5YR4KTKYids6TJUDRNkG3fYo2MkhG5eZpGCik8nmKnJv6DYki5d9yNeKou11EzQmxduz",
  "key10": "5gpSRvY7XcEKgCMgFFFjQQTMLGhNhoGjtjRusSnBE21GhLe5M5TvX1gPsCfb5xubSzr9jroLtLkBJ7dYyf6PRuzi",
  "key11": "3LizwW3GwEjxkzuZ7zmuPsp6eERug6qWmsTskmkgc75obryg6KuRRNxLp1R1auRS3SACc9zh88wU6KVmyCVG7J4V",
  "key12": "4fLmKTpKEyiY43mxA1YSTedryX2twY5a2CpU6Di2pAw8LoQekvyngWc68bfpkuoVJuU3R8VVqy4mnW51Y6UdHuRR",
  "key13": "5ixXpifdk6EkpRtNjVkehGikQuYjCm9uSgdDTcX74VGJsX4wd4hw5bZzXc3J5nBUj5P1Zsfgfjq7terELmYnWcSD",
  "key14": "4iVspHySQ84D45WCNJTrNuehUjo4yVQrTSR2sKSBVxSwEQJRrXiXj3H3nmVz5SERJrhhCdvD4Qy6RLSFPNX3u95x",
  "key15": "Ctzr6NGmhgwGttmmURLigMdzt7Fr9qN3cwwmq3F1WGF1g9HUS8Fm5F9v77jfk1gmLLfWSeN56DgGKY6HdxeLXRY",
  "key16": "3re1DEDkRATNfgFrrs6AovLyYe1oBsUxCSHdmkcyPc9PC5j7cStCLqqS3Gn9XZLwXQG3NqA3aMWYMuef3v36Z6LS",
  "key17": "52vZX45UisPL1X6VpHELvhzgE95YiDeGoMS6xmxKefum4ujeuP9rBx15y2ndBsPy2ixcth1RQh1PyvSN4nhf3Fyp",
  "key18": "2xmU2RJPvMtxJB44TRHgwHRSak3iaj7G1vyxwgXiibW9xZx7RwJ1mbzxSBAS9gHJhnfjecbueecK6v48cfphUgS4",
  "key19": "3tvv7t7uhz3uBDvfcbgD2wcLP6s4mJSgH2ZV2YEe8PYT6bNx7GEhUAxCtekE3SFjryrhhrRBAK6gQigSvXtj52bS",
  "key20": "273DBscTWLbh16CSFfATJahEVg1aPVdpaWJobUdLddzMPyBPzcAFq27CcrZatP3HvN7C2MfEf8EqgA6jEwQEwXUp",
  "key21": "3JsSFEEDfDmKWFjyRZV9fRRdBxbnkuNhcofMj7kPVcjKshYCgZvUS638o25rhXwLeyiXiQBBuubtmYRidTG1Fwo1",
  "key22": "v1mvSVRmA6L3oJmfHbEezAvYTFsbpasktHzRmu2th96nvraSaDhChtdm5ZAwS9MAaAG1LzCFcH8ydhtqs1q3M9c",
  "key23": "5Fxtn3UgJRqsDYiXWtuBYcA6JAULTZuwxHU6jXQsCJvwMhkBJEHdzvxoSZvEfuTVLA9LV4EEK58BgBTu2z7ZsrpY",
  "key24": "3LqpqktxEHBgvmwQi8b3rknvLpEgjFAgsDFAvdfPA8yJCxZ1aALThm9Hy9s2ZvK6Td8Ynh3otTxL8PzZeoo3a46T",
  "key25": "2CQ1GnmgfqpPdUvfdtZ2z7Xqb7dRTa5DZLYQzGZnSmfHL1PxGPn1AsWa8CwVM2Axsh4ruwDSo221uDXr4KGLDzyc",
  "key26": "411V74gPvaMLz4mzyc2wSbAcVnFxVDYJkVYJjECpUW5zteb24eC7McW2rodf9Mf75GiKSUBy3FmuNXad9fhyAfUc",
  "key27": "3XLB7GuSy1WwQwpp9B9RDWyQNCRboXswR83q6g89fE7q1NzYqufTcopHGD84BfAmyg6SDoKhvyM6Ca3VXc5z2z3g",
  "key28": "2vjsFYzGcrHDBReD3BA8TmakCn8Y3q1i2R2oC3Tyqizq9u3MdKxJnDny3qJnRyx1y62D3Uw5p3VqxpgYS6Ybmqxw",
  "key29": "4H4gJ5NkGTp23sqpzzgYBcCfqvK9MSqqwt1tyfMjPMnpFyoFxXLUzqvrgToFpSrL6zX46vyGCQQ3Ne4nQEX9SELa",
  "key30": "31322j8MDmFXnehhu4qGJJzrrU6ERnkVTpDe5a6uPTN2i3Vb6R5kFRZnQWzav2hy8zk7bDARpgsoopZvMCDpuF9X",
  "key31": "2oFwVsPXKpWmpn7QR2B146Q2uv5RmAY9guAVHwPSDN9WLXUfRmMCxEYA5GQhjY6nnqgDHyeyLmZAjhCYcFvr2EK7",
  "key32": "4kbzzPQkJQoSnkvBfZVPstrsPvpjd5V8ntowJwByUJEY6gef3zgQMA8gngG5X99BwkLK9mi7LLqEZAaGxZdqNFxr",
  "key33": "34irPq33MdsdJeGwidyFdTxQwapkABmzTyAuE3XFZoJ8izKutfay43kn1zcgZX9kS46upnMeBkxCdzvLVaZZni69",
  "key34": "2oRpe4Vr53iM8mKNLPcdy3xntzxjHzFiXeZKKFvWpbjsZUj69LJFiyEJx2zFDx57szccRzgTquXWwa7WNBfiqxZw",
  "key35": "27oqf8hhEoEtUHhn2oKKjTSdjN3Jw4EFW3NmecwU9nbaqHzcwLaueCLpiRm9ycC4auCZsZiYwrS1AViBgXLySW6B",
  "key36": "R6AR7iEkaVpp8yYfKiqTusMkq1rQ63kYadUgtr82BdM8uEqA5fPjNJ9toQD5fS8K3RyDbs3ZVDxRbkaqbcQmxjU",
  "key37": "2mfmH8GSVTwmJwb7RuHixmfUH6vjiUeez3SKCGKE2F1UK8pZgVbamzoJazq1b2cRQ2vwHzvmvAhKi2kEfFMwj9Gp",
  "key38": "3DTFZAEFfGRfT9NzmgHtp4sYTAokqbK4xvS753B3ysn4KVNAVBAe7PEX1ZZPrtcfTWENzmfCH97AN5w5RpkgiDVB",
  "key39": "4BWyA6KzJf2XbBj57LnRjGqUXeRg38otRUwT9yLR9f4KaEYEesjZTYzK1b97Jbo33bs6G4nSYaSKSUwsGti8KfT8",
  "key40": "4eywmdKFYZ1WYcy2yU4L14B1qamKqQ1A8HrEQEUfSxnGdnibnDNrU7u8CQbD6MMz3g8PdPb1qo127Kjutip8gRSs",
  "key41": "4YfkSBTP5hQ6wNh5uNYYdnd1mQKCqXycr4iPodpxJP1FPs2M6N1E4rsvWEsm8PoMe1kCtEdqeKCvixU7JktMZtDn",
  "key42": "36WhiWeAMhrMmQPL3PEUXGZ7VqpPN2zmEkbUK4QvKA3dX9iQFWiuLRFiNUmxzG3GV4D9Yaf8X8Rk5cUBYwRhebpt"
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
