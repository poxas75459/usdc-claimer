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
    "3ReQwmFGjwpY1VKbAxNi1raC8FPyfhkdmNpqyQo9T8UHH6GGBCYWRB1FpZZjSgirX8ALgn6Z8ieMfh1uTLTBNVoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjPPjBFfTnvgyUCyUrvFtshehiPTSmT1vcc7gufF2QwX9YHRiE2r4bwuN4dMb7Kegm1PfQBvQFcCTCsmhHSYJAA",
  "key1": "418vB9Zvg4ryXkfFxGmHLsqm3YPnkU2hoSAi5XFAZBekEfjJEuMSTrPZJWng2U6jTtyxTaeRa8tYZfCAGfsfvhQ4",
  "key2": "5j9JTsG7yiM8U83FVUF1vho1bzXY4L7w6Dn6ZtM3TQgkcUS5tLAsBirNErFV7ajbCSiD9vykrT2PqV2wBwK2B42h",
  "key3": "3fUzLTF95divWWbWtdU9GQgmxucmHgPVe3rtRzzJ3XM3CsZoKgng6M5svMcqUx3brzvPmux8CJoQNaJYJv2zPWkQ",
  "key4": "3KVuf4eeeApkKnXeVpniYgPzvCTssVUqC2aT9sgSzCZTSuTrSXxPhxZxkzwKyixKnsr4d5NHiA7ViC4sXPU3n7pK",
  "key5": "3STEm4dMP6pTVGPmaH6oaYn4j91gbxeEK94zxpG2GVhefbMyAVMpRtJzTBxuwXraBfbeuDyYTNjKAgBoqhZH8SBX",
  "key6": "4GWGkHdGETda5N3P8MdFRfYDFkq43QNvwDtm9LdXbo5vQZpVm25EyJ7LDeS4Q9Zt1fSwsNneA9GWFeBaFGos5vkG",
  "key7": "DFJJBjpfupezF5J9Ba1wstkXyUVsGWsMa4o7isTT9756FP5xL7DbQmzG2fcAitYXtPQNv18MH4wgKQNpUzEUSmR",
  "key8": "n8ee7SLCBTSjzSdnDKyoVF2P8eUmo29sQnuXUXM9wrY9T8wyVVjnYYw1zrQStJmGBCJMaxuEw386bS6Ft7fb8DY",
  "key9": "4mnEp8v3Cs1vj4s5GaprVEEHzcH9GzzqRwDpwxxwnw71UBbgPrZFeyRUHq1NbFv9b9CfdemXr8uzWqWXgQvaGkbS",
  "key10": "3qsUDWiMX2xbzcCgNkcTTxoyBRVQ1fKniBAubWumZpeGPCm9hMBp7iyABndQ9WYFvJVJQWbXCVZUAZvfMstdMkRv",
  "key11": "4GTpvWi8uNxqbiNshuktrhZDWD1txfjNEpYJCNwDXDsfVAe8qcY7NPKZ68buGwFvSPaKV164RvTHHR3ZFFnZ1Kp",
  "key12": "4wjka7g7VifPo8Zkncj6mCqb1x5GQbauwySXY9p5izjnJ95Ms2GmEHnTxpiEjhn64WwjyTBjWVKsZMjogjQ1mbPR",
  "key13": "EsU8kW7Tw6YgJ9fXGzudstZ9dN3YtkNSgv4gHrQTXVzH8Qs82kfJydiFGm9qEZfQp12784krw3CLrTNLo3RNHBb",
  "key14": "5dWoTeirq37dfzmDQBruzcVqFN2v2Pu3vkopapcU3tfdW3j4kFUpnzcuqGp7JJuWAZJW4498pRLz1qiD5UX4RNNg",
  "key15": "2vDmDEN6iP4rCLtfSgB7tYkLLnveSPEMT5GRQEGejWNgSLvmHbmWUCuUQ8XymEidK6U89589jG28Dy1DJSLab96t",
  "key16": "3QgnMxDz9xvu72SXioeccZnBnTVuAv8oJBsopGtUigk9itmtodKdrgN2j3wAL21SZGnPE7YfSa2spwoNfKEW5iLi",
  "key17": "4dWzet6fi2KU39DDzDHVyDdU5YQ4afe2dQFuvHLsE7Sjtf2QQbhrJUPgFMdzCB1YkS9ncYyP4p7o8RZSfEdQz6iN",
  "key18": "4HZ4p5L1uoWFzqc5gd3T41v88HvPbGdfjNMjsZFo2oTbxmVprfREEenJ7uoEFYvtWr5YmLxDzo2Xb95wKVWujon1",
  "key19": "33Hg7eXj5rBicPeaomr6Mu7zn8Uj8DD1KWv8Q2456aU8Kgaqk7WUp8BNy6b1mNZiqPwtDNQsvhPZ5tJcUCsYvprW",
  "key20": "3mnydVQPVeUZVghZypj5Khpa2gjmXTv7NBzSFnBhuPTu9yEE95bRrCnJUMLH3v5LiuFNGgWB1eDqQ5Hod4GCFGQk",
  "key21": "3wFGFftXdcntQhiAvuRDUHfmSJMbrEeLeve17WYmWMZjFUut6BZwWiewuVxxmj9LjNkYzFaqNAWRvS4PVChtx7uc",
  "key22": "52vapZqHr8gdvRzHAZ56TPGiDd2ucnSuyVJdDSxe5HMre3N4MZnAvjJtXxSceiadgH24XW74TuWmk5zGpXnW2oMR",
  "key23": "5YFB3zhc9MWybkQ9FAzR5FgnxD5FZMz6Z4MFviUDaCNPCV4ZL6bLwGj9HirxRk16kw1hiGBvdWZwoBFN1bv3vSQn",
  "key24": "kmTbixVetT9Pzp5nXs2nKyzsCeKbnukWjFV1FyuBqfwV9kRCsEpt6da5kLNLxE4eiNHK3oRtuhmGY8RWGZcuig6",
  "key25": "3vPeiHhNfWKMcSoRE3a3roNUbE23AWXMkpM6yRgsnbJh68DErQskDuYgoAJ4fKVFejEL7of55aHT7rXYEHrML1Tn",
  "key26": "5xbpA1YjuHn4aCfbEHM5VyerHoKwiNCW6QFV2qYecPt25WoUTDkRqxqATRZogcAuzuenkJjMMUsMk6CLhmFbXkjh",
  "key27": "5nZcbXNPc11Vnxb3pyGp3v2DExfqzih5djmTjPDad85RGci1yNdogzs9QhJGsrwsvyKu7xN3RCbiq1z1tTtqhzEp",
  "key28": "5Wx414SCbt6ESWax82Zocje8m68tCwzon7JNKDxx9FodCibHKvmvhUGKqvkrEV1aGXfcsVv71Bf1fzMQ4QCh7WVb",
  "key29": "2i2R5VnWLn2v7pKesSDVKBmkby46qdmkMfCe2xhExs7v96A7LjJ4ppsKhCecbMSYLsSU5fQ7uYNoDsHmWAsCP2AP",
  "key30": "2vEFJEnUpSf3mfRwLdyxfNDACZLDm1yKQDcC2kfZ4AAWfuXBU6ognCkdtMmS6prem3BFeE4ZVux1EdFGgJMbsR7x",
  "key31": "51YwAz1jA8fwTnRjLnLgt25n4nr1738GMs9yY5PyhP5NQRQcMP7wmUJiXeAK3EjEZ5gd3iNdfEUm6Xgq1qK2Q6s2",
  "key32": "44o81j1m1Kd4xXeyBrG56sk8VV7Q3BZCRaFnGTHq2j5MMPNkZsSca1GUDgHJZmpfK7h5Rm6Mdc684iV8zsroJHSX",
  "key33": "YSZBe61CYfMoSbHA3Zu6XTSc7mef72D5wezhZq35UdyTsGHQfWwYetMww2eBbqnhZitV82FTguRxAk1UKqovCfU",
  "key34": "4bC4X8a3R9F6tHRye7AiMXgsLr19sDsjGnH7YAjL5GVzsnrqChQfy2MDtzQ4mtFbMZbF7Rim25EPYCdGHL1G3WP4"
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
