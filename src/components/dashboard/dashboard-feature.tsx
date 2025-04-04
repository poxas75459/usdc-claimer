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
    "66W5S746jpAyz4F9qXpJ7GGbzAo54DuUBCnrh3ZkVp3yUEsxFjDnMYKbjngaQMRLt1kcpfi2P1UBEJtqRPH51ST6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxAFmG7rXRNbJYihWVHCsEaFPuCtQ82pmqCxu7MnC6R4WVCFUAZYzc11pE6g7k9pYmhjghq32RUynD6mjtRCvFC",
  "key1": "3FeZHyQcJi1yNGPVhGTgq3iSKXFNj2vRkE7nM3n6bkSzYNe8qM2kZcsJtQSj3TVso8oXNfvhW7EWLH87ru3TRyAo",
  "key2": "jt4TbCCw2t1gbdjSwNSgj2jK3zbrUtCATHCX6QYHSL6oFoZrT25U6Mg3vafQKymqzCeR1Wy9y1tL8uwPTqXMiCP",
  "key3": "2VdJn87aWRU7YwNVYG4yh3sMoeup5txSZsU88i1snnZJKU4h2qhXHQMxxHXiXdc3havLvMkdzR2BqcUVfVr6k9za",
  "key4": "Goy2VCuD4AaGWQ1ZxBHoKcLzZwTSpeDnG6jobAjfGp6Az48Vz1rD34ZV6JHVoDWYkizCEywZoLU6rZ9Ly8fVD1y",
  "key5": "2hGMVmy81stqXzG4RnZV3Eb34mnXxSEGKfnux7tu3ww1jka6PKs3y37ZyEJGF1xp33xJk4vUvjEPEnynmD2wjkGp",
  "key6": "5MC4Qzijy1pi69c1GG1Spc6A8dcRuTFXsnnBSsgkKE1NhEAZupH3johgAWnXFbMgUqUHtvV9ourNEzX4HxTiwquj",
  "key7": "4WetnrmM8LL3pzZSrtUfVzB5dc9ReqTxGWia5WfhgzDHiCj9GazZnU8RshV6Bb7RPkMTKusCwJfbHfDyAM39aHTM",
  "key8": "5bgj6RG8qQb2FjhXVPHwfSoSq3Wrv9gVHkpCHpGcGAVyVMsR3TrgtzExybCy2R9L2cqA77okh87RpQYUmpH2cudF",
  "key9": "2voeCodCJ1egsoXqH2r74zyYhffWGdbXzJfr58sHMygLr91pA4BoKii5h2nF7fnKg3vrRjJoJ38unHThxfBdagK2",
  "key10": "4cJVNUdofeYCbw5mjsdKEufoi3CuBW5dCeDnhn9zw4wFNG7ydAo2rw8QTiyoMCKWojam1PJUxzfQkLgQhoLV8Uac",
  "key11": "3jdCuRJcgEwiMxjkGL6fTSzPtuMfyPYv4Y3S8w6qmaFHHVzv2JKLtNHyCeu26y4x8BkFj3EipVDbuGYFgXDnomBU",
  "key12": "2yPSCNFngZZ15atWvkrkoNeUpmXnEewHEQz1m91gtdjdA6LQa2QXFnN1DvGpc19yUP4debE6T5twrQouT5KvXxLF",
  "key13": "2RxshVs4Pz5H58tr82SfjZTLhu3bysAeawYxEs7fiqbjdUaxUkGgmwetLN44QbLideuRREd1N9tJC5E6yN8BbDTy",
  "key14": "5iHS7mJswbT4NJsU7iksxAXGJgA3Cj26o1ugjKftFi3jLjKpzafwJtoo8vD8rUMwbn1ZPzth3RABKE6sJimbBQPy",
  "key15": "2ZxAZuJu6DpdNR2pBdQgJqQnxYyuQMKJ6xTacKXezQ13NPwHQtJ2wNPB7EKVm7CgsZKtWcPnyqDEV85FpRd4nrtX",
  "key16": "z1vnEcz8XhqE2JGWsmF3QUAJfGuN6jBHfQZBQaB8LFvYN9Bw2SdbxtDhmcp1Fi7kR1XgMGt8VcXjfpJJmBYqHKT",
  "key17": "2LVs6w42U7pAWuwgdT38xDMEz1Xz5xb7quGFgeZzAVaVquFpbtkMDUEJXiuPbd87P1pqsM1y2QgftvY2NFxKZWug",
  "key18": "4o4dfv2o92yGDML3fhi7m7VttTHTx9h6xXd3BN1YqRygdhd8dQAoWWaMXxwfocQrV9WH2r2v5wpWjJahNnHjJ3wS",
  "key19": "5iWQ2g7e1uwACjrUBi1SGkHL5vj84j7Y7w5EtPFwwNGnMssLhyQBCez2QfGrRCsgd1cuFXhet7ksmmd8eveCTeDb",
  "key20": "3US892TBkEj2J2Ui27DjEXTrynWLuycDY1ijy1bzcXwBiH5Un4nEHog9vbhfCA4gUMwKNiUgZCpK5653t6MBYEb9",
  "key21": "TkpTxHqXreQniRuimtTStmvNa53XXGn9GA581PXTJ5cNkekiCocV9kSDdjn94tLzCdmsZSLt9KMzf2Z7T4Utokd",
  "key22": "WrGdyosJDPX6Y6bk5Rj5M17fHFvdo4vGW5n9e5vAeNbz96ZPGmxdHTiY6jQY3SRxZpXQhbwu3jzgC83wPZQuam9",
  "key23": "4etV6WfgoJ6BU8KBEDhjA6uYqgGxg9SCEZY4cSU4nSNRUUqwWpAMwZ57Nmt74qjQNmr5ueVRUHe3feMs2EiH1mS8",
  "key24": "TseUgKJ48ibAedb5Gq3kbJA17PLf51QCkjV1CTiT2gqfitf6LfzfQpmLPkNwKo1teHoN5GmQYrsKjv89Nz6PwDw",
  "key25": "4pj2BpmbS66FerC2jxVLijggaTCQUTDpH3VAuruzg588hcHqggkX2qUTNFb8BUtmQhYK69sxbu5VwzqmczwWsTsN",
  "key26": "4eiqrV1ej9LXSMmkkoXBX4Mjovzmf3h9sTSHCf8qWauC19RauxNAfRRPYctATx8ewfvsHidD2jXGdt1eusdqJiTi",
  "key27": "4kBRAMxV5rckqhFcgiXm8qvxuWMSmeNVBUi3ohJTDan9bNHLWsDhSgo9LtLwc931j1TBDCcxxYBRGuREH3kkZLeC",
  "key28": "4PCXXAyWLcEcmwAVwJ4iqG175wnkWUHFqwm8cYBi18QTZb3in9DQYT33Bx4X2LvhyXC4acfJ7Ns8hBjm6ikyE8N7",
  "key29": "WFwoZU8puoSASN6jEmqYdscNN6u5TxNDoYwodS1ofoFtzWuUrdZP3RepXRJMjg9LjZpzZaHtecTTxrduRzfjYku",
  "key30": "5hwD4adcBLx3Sy3smZE459Gk1ca9WcRtBuv5KLyF6r4pPmMQrctduQsiZMaLfwisNUf4bs3iBNxCtncGD7JTsDJ4"
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
