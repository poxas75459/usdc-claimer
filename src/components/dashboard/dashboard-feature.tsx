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
    "qAWgSnDZkF5BYerzdzEP9Gg7vFEKfkU2c3q5ZdAt6v3DPdLE95opixSkyPpirw7kLfZ7sJ5gS8H7YqXLjHbJewG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GsgPnZeeV1UmTJpBcDVty6hhsmug3h6bkUnkhLk4q1rNZq6RDovTs8qup8PK6UfmEGiP7yjcRudS9xKMwXFheZE",
  "key1": "36cQuDJ7NaPpghkJYV8mzEc2xctBcepH6agj3JowqGN5BS2qGFFct6LuAB4Q8VwSSvHgYaSwwRFBTyCT14sXey4b",
  "key2": "eTbqPnoQxVTMUzf4rALA7DAE8ko3PDRXK3otPEB2nH5MLPM3rbkNamCVfRZQGq7pZBBF35x3q7A4cF2ZCeybppE",
  "key3": "4f1ptHe7DVo4tHhAngq1ZPfCmPXqCeJtarU4rQrq65dJVCeKQc61Eqi6U6oaSVepYi7ftCVXDG6CfDmtdouqxEb3",
  "key4": "3YZ1JP1DiMes1ZcExQsfQc7mPEYiBmKK1mcembmid7ggK9R82Jk3EshZnuP814SdSyrSmQP1hJcFV6QE9Nq9xpXJ",
  "key5": "55Lncdt8u1MivxtaoWCh4azkg73cv1yfqDWeMRPiuHSNkXEAVNHeXMk8BX9uzEiaxTbzfYLRXt6vpeybVXw9xYG2",
  "key6": "8QphJUaWNQeShaowkKYSNA4w4MJiJWnWbmzGcgensapeStxKqxUsB6SSNiyYtmiUJD91hfr5YgSU588E7Edmc1B",
  "key7": "5JcwQSxsgwZVJuCXXHeBmQLae1mik5K51kyh2H6oAkigrtkth3BBZ821R4fmPWEQ5dNKR5ihRLFdJ7eerEi4m5wL",
  "key8": "3HZsKhm5xnAB5LtQTY66TPPRzRmtkGFWvQxAVWe6zW4oAzTD7v1jzrjzwbwp1a1GGgHCpm6uapHhAfzNhCrwCxre",
  "key9": "43K6GSk8BvuCMvPf1Vd7GJSByJLt1m5RASF8yGjyyqYF7uhoxkzh5yby64CPJ4vuXpPCwCdKJoCx8tMHCBJRRkcB",
  "key10": "3VxDas9ceU2RtQFATWwQuXVdk9khF3Dbsuv4FxJWwJSWFhBTmvZASsQjaDjdRtHDFVbGUcmC5TAo1Cipk8u8QmTi",
  "key11": "5hTbsPJ8c2LRY4ruvXVezzoaMAVrF4ACNaSYMUewGchkGr6MoQVWqninMwXHu6t5f4c9LXfeNbJzhEr4e4mSMcta",
  "key12": "K37oBtKboBrdpfarL3duv1QJEEAx92UBnmaETzcUKpEJYT61sEbuX1JcZarc6B11KqHKgW57yjZxf7WAWDx2muy",
  "key13": "43vzLWsGbaoCsx5B9eC7wZCbo6CynWBwFNS7Fte8KgJmJcazi7FxBuVKbfuD5pTE9MTWKUeiSfapVunEXx5uP8AQ",
  "key14": "DJApEnWRxA1fprpcyBw4xtdEiTGmqFVvSiqTdqpx26NHAWAxoNQfatqTMGoHcSmYzPPwNFXbN71Z4tMcUkPGTL6",
  "key15": "3Vpikf4wcy3BS8zspPFopXauhgn2sTKyvSBCKwf2jTQ1oSBd4p2YgjUAHURQZdQ7EeqorMiNsPZinncsnJyZZrCo",
  "key16": "675xt9tUc2q6zNT6qo3htsybmHQGkjyCNcKB8fT6Z3zJA4hiB2aSU9X83eBoLfMkcKgg7RMfFihewmbZrnCayCY4",
  "key17": "Mz83SqAjberTyNwVXeC3E1xySdUU7dHXJFvUxUcYtiWD9wQZpyPxmFPcbKkmtFwv99xs1qC9S7AmyHen3hkvf4p",
  "key18": "4Gm3TAFAdAQ3vEfUnxmQkZj7Ub3kQ1JX6cUMXAQkWLGMHHQUm8Kf6yoKE8yiyKwgVYM9Dybnoan7AN5tNctQmrgM",
  "key19": "4DNMqgPEHRLoeFXZLLhMMKuLSMDhTAETx6y8WYMeqd9uJYP7fda5JH24cB6pTFau8QoGNi4r6SBdeTXCzmY95mVk",
  "key20": "61XEDu8vxYvnkB2m6W4tNGhSQRMjQpTUkQoiWw68UnH26NeXyT6ggP8RKY4N3CPLehiDy9TvPVw55nDrvFWBW8SV",
  "key21": "Z7UDgA3rPyKhawa69dYJC8LwidJbEet6gFHj3YTrfHDANaRFxkB79uQdVFhbCKmvJCA8Eae5hy6YfQR5ZrDU7hr",
  "key22": "QoKsx3pJnyQiCdMg1nsXY27NMyAaAiR3jWqZAMUK2rJZwe3txZcdeDfkUFvSjvbeNqm5NX62zD8pE1pKmmKg2gg",
  "key23": "piC69D1DC4t4k4Z18NDVWYegvWdhTxCfpfqdYUmpd6T8PeXoN4Zn2vTJv2HwNQswJiTV5hfyvsFmg1nP73obdmS",
  "key24": "4Bixp3RGCSgWE7zrwcQrJ9HU1bZQKvP8MTwe1wzW278xRAMPTQ1Ng5fDygZicDKpP7hpbGdkXNLendjQhUM8DCGN",
  "key25": "3f73Xfc1XR5bsZuHMog2tQ21CKn4Dh6XU7D9LKxJ7ijRemNNNb2AZStXQ9rXF84pxXYtgfZX7jYfCJuuzsGrM9zh",
  "key26": "TdVUfHCNWVvUtudjr4rN1c7todTxiTiZv79wAFjPQ6sz9NathHjaa6VD6rB58EP544NNRnxfZZetjLDg4mqrzbf",
  "key27": "4xMfvcEaA34eJD8kwmrEpiRhHjzy99QAiAsnPkUJuj9m87BFMSf55apcDoyEuzAVHwokjiP5yntUuMHk7qmpoVGW",
  "key28": "ZpvLW9o7P4C695rFfA2GNtHdyvRkyFvFMnxszqDuJWrGKSR71XBu65r32dQc6pzLZSRoiHSx2AVSDc1ua5WyfJV",
  "key29": "3Qps2q3X4vdMbjkVmwXqUabyt7ZXqEs2wZWBP3xTUCZpHq34DSNJnbUrA1b8dU58LCWExZZ4AwxNznCGqUFjteBm",
  "key30": "5kxdFv4eKpNzRokzdxtkVrUe795CXGmZHPpDeERScUDJSG3BW7Yv7ch9X6KBK5zh2UVGNxn5Ruzn57TQg4rt1cjG",
  "key31": "32gQpPBEfyZJFbanRsd4QoWZP9Cs7pBBBBYFeaivJefP8ygwpdfLZB2GZWQ7L1X3higgVCAjsGW1LkPCKEMQEG2y",
  "key32": "5CgbqVLuXtiiWsmy6y8Utc3DbRrrjgovMLfiA9yfYJVr4aGfU1GCkRShAPu7Zwnq8KuCa56rokc65J8vbsxA4a85",
  "key33": "PztyvctdCHE5oKhEy3cKMz2ke2yTnCDCY3XsFjrvTGa4X9MK1GXoBVsAU2REdfcA7HMA8ymXzG4BCXz1Nx4nGJg"
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
