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
    "587VmsgXX6gaiJuuPVbTpDKrPP4hcbfaiYgmTvYdHzZGAEzc5LKMLBgzCdZpemWXA2dagmbZJQ9o33YeDjYGXFkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yinz2VjXHicwiTnCyt2umvcofQdjqZboXjQnSE2mbgTMD67VrZsKXGduvz4h9JMXfK6TGbSHYfnAsWN7VqBfHHg",
  "key1": "5ePeBaGj6WHwq3wCXWykj4uqRW7WHtFH1XutVQvXdLChxpFFtt5kMBTwGJ3bcHC1b3U16aRmSN96z4yVTdh5fUGH",
  "key2": "528LvtVWbnyNEV4opLtmSrHgJkfy2NpXsPhmEZJ2eTvnoXNvuSM3uoLUxEKBbpKnxAq7i9WxQKwowewKYWscGgMq",
  "key3": "4bEgDuvqeTAUnqwR7uWGUwfdu3wQLr8djtGPNAHS8cyzA8KBENXVhgG39wz5Df2D1wrxXUK4o6fvNTgErmq2oHKP",
  "key4": "5kZTQbmD2ECSQdo7v8RYKwmCSvSxA8FRDQKPE73RCmFxMv39SCWhRP7e87CTKPazx22w41nKAEW8HaC4YQAZFuis",
  "key5": "F7h68TvcMvq6CbevexmDZmMxG7fV2aAcSbUS4Bbr2h6padizT1W28u7d9D76FGkUEez9CmEvJMG5gdkgUS7X6Nw",
  "key6": "5JYM3VtoUFoMjg8A5YBu6DUg6kJnubvrf5RbPKNrkBuMXLdbNPC4ejnez5y5LDSstbZjN2ftnbv7tHJae3THgiL1",
  "key7": "3vZaPCYydBcNyHEBytP3jAv3ZdjWP5F2erTabLzqpYPrzXebfw449Qhmj5S8RQusjscv46t4RdFCmAf4QRCQ3F3m",
  "key8": "5d7P8EbNESGuEViXGeRL8i7NfsJQiUNSMVzcUF2vy9agt9gJeFuhGgaqSPmV6aPFbfRZbBWwba8PMwAianor6KWL",
  "key9": "xNee34CqkQUoFkjv9Px6z1Bpxap5f96tm5ZwUiUq7bKC6nbCF9HCwymZnGRMMkWx4emin5WVYwkL4HPAhr1rWP8",
  "key10": "2YhvLfEU4hXtoGfKrjzJmyfD5Mn4bN1vVNifTCwgNRCS7wx8uVo2eX1BtVhncZg5Asi3ZfuGGwzeV8P8BTnCx8du",
  "key11": "tqbmpTQ1yoYrg3nzA64oJgVfWnUbsoz8d61nNH1ddNKj8m3KAwD86EjLcyWwFpf7wq4NLCYnBKgB6TmcTZfvuQY",
  "key12": "5pY6JtYFFZbqvzP81HTsiTxEu9ukZPKshRCdEZv9WiPB4Sa9tfFrSFpYRhw9nvJ61UyVMAtfmtJyVJgX337BViYL",
  "key13": "5PiafFX9ZBgBxn2hix6M8iAgp44ydK7RUQLnKybNGg9HaEfWPXCbKUvBSJea88MkHrisLbDd8hqZaM2YYPTz6A2z",
  "key14": "iQ1T94gSK4a3gW7BU8G6ViHfkBXBqheA4BvJLNZyDzeZ7o6ups1G2vAenuh1yk7BHpPrcq7A45zvrTSbmHNFatK",
  "key15": "3NLMewqADXFZiWA2evDzW1vu2YdMm5Zb83zcRoTnpqG84FmpWLbuUTg8Pxt4PzQHpWihbMB4Nb4NM7Eefzw39dRj",
  "key16": "2kAkHjiUPuKBDEKgjSx8WafReKqGRQRPhMqL7UPSYzubL5g1wYrcNeiQAui3Ujt3WC4KTuFgXR7Gsued5XCM17cK",
  "key17": "4uqDnubsHjNeiKSsohg9Gk8kGgwsnkN5jSAgXvXXYFKqepe49GeAc28eoxusLa4q7XLUzseB3MFEWqXowAXF1jFb",
  "key18": "5BuMyKce87j5AFBzi5fYm9pyPagiQmUerH4YYia5sftkv96J8HqVrdDDKViE9Ko6PCcRrpWFDThe5vVt735ezrTx",
  "key19": "32fKmYW3fV3vmhqRer6zL1f1C4QSuGjMCFS67kVgjg7E1ZnC5VBL1h31jd8gnXUULxpEt6SiQgBMqbdDExHRDWV2",
  "key20": "617CeVgf3VkD1XC6hmm1ib2UFz2e5CBVuTYpL67EyBhVfWhhjpqH87aTamuhEdxp8M8mydv1XFFJ2Dx3Cfyds5qT",
  "key21": "5iQDW9Xz2Ts9FzWLo4p1uGC86wCi78Jesajy8LfCbUiBFMoydMMpbkbWGiJMudLon4HX3Y4jsKfDo8ifLNQ4xbQt",
  "key22": "4qj4Qnqw1cvifP7DqrdS6M57UH6VyH7gZ4M2Vcf9je6kTPRswQcG7qEnEPApFTtEG2Bske6CsqxPbaczv1Ue398b",
  "key23": "9aU4HCi8neq4Dv7M4H4iSi4UBuBRAYkuuwnAxLa5inVpwfNHAbpxVxrxSEwZMNMxaNNAgoeLgUk3LcYDLun48og",
  "key24": "2QzTihjpLMQKmdqf85ALGegbcVtnVarBEUDF532fwNZXcckEfdxHZi7df6RxUPkAHYy8zVgpPsprPsoqa5ZkPSte",
  "key25": "5cH2wMSTusddmDTShWBFKYYCzufW37jn6AFwuoSTS9zzXGo5Kn1j3ifDecbzrYfN78CFqWcyKbP2UZRANFVd2HSe",
  "key26": "67kaGvhagSmnrR6449bo7YBURd6EiNaUiCSKTXFGyq2tKUppkvZo7ZwTYhB93Y1SmwdEzaz4EeoLE7gGXfdnauXq",
  "key27": "58HCZaDjmUMn5T2g41DZ3tqNYWU3Rhq2U6ddPy4CirSZG5S3XNn8H9wpUjyhXniEGMVTFm4AzDvE6qsUetJJWvpA",
  "key28": "637TKrE12eEjpSvsNTSwoMLVQkvbLM8uw6P6eaAcxUyQnyJG1EZh1adHDWLCbBk96R81LQdWetGYCF3q2kNVcVzx"
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
