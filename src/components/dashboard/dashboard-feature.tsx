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
    "2ZJG1r4nT7qbtTqybTUoz1Ss5Z1VLSx9vJppgU9Fx7guQBBQRgG9vhZLqwX43pcNpQsTFKYx4YRU5Us4D8QtmhDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35jTTUjADQssGhk3gF1F9aTDzTCHPaeZGc2xcdSacAbxZ3zfCw4Z9eqwNN9ZMGrsB9RP51JwsmUkDVfyWXj7MLus",
  "key1": "soCqQ3HZbZfvwESzEcfJW8wR4FGDjRJGCfmhPBwSggjrbFvS92rhvFmzp6qYgLnn8EuMGqCKCYGYryqegGud5AK",
  "key2": "3iXMLshJzifeqjTPtv9p4HSSRiWmnLzWB7usGUSzwGRiVC5N29UcqrhcbN8kBaBU4YuHYB23Cyr7hsHkod2zoVWm",
  "key3": "5KvhSCFjQdudij8Y79skxZ3BDRuhA1hEkhchdSdFM59yMGpjLpcBiK6NWyi789qccWv4cdXtvUfpKM2L5YbAYHAW",
  "key4": "5BMv9QWezoqS7hRLU1cqhZb3QSA1bJzcptaJQJcpVGFynhrCye1th46dvQD1nrbgM4moEm3BQVQK4zpB7tZpuCri",
  "key5": "2DK1hLSBTuoTmr7N3c2dnUZuESVPEjX7z4pAE5jTytFUkx6cYUByYx7pDcPhuzyE9J14vpQaW2gSUKhbSH1j55Sy",
  "key6": "3BJxbJUoXoX31nJtTUoR7anZooQhx871ELw3JnytncQSoXHkWgKbva9s4wiKDawYBCxA75Mj1hYCyhNYkLLiRbRm",
  "key7": "4h9NPxHJjRgPczqWgJguJtuYiFBt8ors5nwb42RNojmydqWpCqfJo2GY65wTLSQhES5G5NN5EGAqTyYRDCycW1RG",
  "key8": "2eFNwprSu9iF2eMtb1bgCdVM8YmzaSd8cXMjpubpaPCsqQ1KbgRXebc8YaNfQR2ScdBzfSL5Lo8CszZfJKoG1uhM",
  "key9": "5aihvbLcFQd19m8zot5b9bn7QY7rjmHFXGeqmYV5SdXQ3ik9n5fJxqUXSKjMdkRXmFWCB3EQENoBAn5QyDT9gEg5",
  "key10": "2yDGDEZUck49m2NF1wZjP5AG1m4AfW1rW2dyWjiLh8DiT8AvcmC8QaFJFDbpnd9BHY73Vb4aByCJ5x2vE13GwPPX",
  "key11": "5cMD9EXeiAWfQmnRKZf31yjGZNHwgCYgQmhL5cs7xkD8s4A7wYzH3mAHXCLHDvEz9tuTeS3oJpv9duXwgRemQYvT",
  "key12": "5BgRtZBdv8VcLY5Xnfr9GTAcgh6NGoAmVuJkhR8WiuuKXRnxxNqsv46x37woQdZiWPMQ1umbcwWmPFZ4rZ9RCzaW",
  "key13": "2tfUoaYixcvVuipQ1afPqngMK5qj9pCeMYjnRuNePVU9FXkPRhaSiDhL67ftFbvhNR39W6QPT9vaWAvfogLPPFSV",
  "key14": "TWWRe3RaGZEFKMxpY5hRnf6TujE6mP726kH8E6ZqRy87FWcJZ1V23Krin8zd5FNRP8W4X5NLQYXSLgsw6Jw7DNh",
  "key15": "2gjSQv2k77dH1wgqz6Q71FfaSMFMTmCrzV4FX3G6RrLUP2y68EfTjWZxoaj6du9psov9uBRoTdsgKLv7Fb2QNhV3",
  "key16": "5fjRXggnJ3T3ZfFHfivXQ5rjLm4Gy9kjhyt2juP4aB8LSJ8gu6szQbgHShyBMCND37n5WDLUfd5ZX1TkoE98zrj7",
  "key17": "jBwjMD2hRk6XQAXc8kzbjkW8qHeF4DRcYzw4CXgrPZrpf7THytBGJfxeaBtYKEDmzygPztF5m6Tk5Kkh4fpwdMG",
  "key18": "4uxamQN5b9kJxBLHhd71nhYnGbZUdJEza5NXS2VutY7tKLZTSpVhm3sYSX4Dnfbn6sE8LmvcaxTmK6sELPuzzHJt",
  "key19": "5tmEadqiRdYZ6w2FonSKyQtJbj34YhSXfsjmBY9yEFctpjKvpenHPhQR1jQTC7YZZR2cNpFNwwpRuVmkPyouYjzY",
  "key20": "5r8Qz4wxmiX7gAUkDPZhhYeqXpDqhAXhzWTmUcQ9CXKdc2cvXELsxvZRgEpZSdK8J15TXJcy1pEvcQQ3A5kKYuvr",
  "key21": "3ZnuKCCU3rpJAkNnA17UM4U2QTik3z8LiSEQvd4houJMRSjGoqcoivuAZ5uGy4aH9vePfkzrzbzpV6fEWE8w5gUE",
  "key22": "4dmTXNyehHkwk3k6gff8B3eSzmB5iC697TcgdFVAY3SbA7QZ3pAwWF4Mg5S1sBPJsyjcFfYcmkYHBEnGkta33d4h",
  "key23": "4xZpU13Ph2d3UF1hFXcXzoSxomJr2nL46EFqpPZtL3SFRTiZjgaepZEvs37SXXpbvT3D4CaVVqMChNXxzsWRnsuT",
  "key24": "HxGKtjDJDiwviyjdzZ9r5UekVq4K7wvvUj8pjPAWpbTebCFr37ZHv2Zz9W5DJkD65yGkXcuyBTtQoC2vjmvmPrd",
  "key25": "n4wpZb4wCfMw7K5Va4Ud59aRwkVpbG6BfcxRZCJ3Gfhb88UV5rkxyXLa7huApNfsXdS8RVRF1pepfd2w8SERgjk",
  "key26": "2vshhkLGRkne5e25Py8RKeTWip6U7LHrxhjBky1XxRzKpxzkgEziwNgsWrc8tnFH35CCMJAL6pwbPc9rkfXGtjiS",
  "key27": "2TuSpjqt3uh4BsSdrzEqSNXZnVYUpHGaLPH9dUF3tRnF2LyKGCvXHewovGmd4jYWtavUs2QmvPLNtJGaXjD8eyoH",
  "key28": "4A5SxbZTEeLLbh5ffdJompcDLWerBHShvhaUJMbFK5PbZ7bLKEDm8ShftiFPoMkXFvabDTyT2aeKzvPe36qka5Z1",
  "key29": "5HjxkQQZDpasdyEGWBjwGgbCvp954BGyQ5h5DDF5BfVzTeiRYV5xmsdQoLfrWeh3jFLJGkuHVDh9cdTcFhhLFmMn",
  "key30": "aRtHr5vuZqqdM99SrzM2eyyww8SSgNJDtctFTy9vybWMF3r4rMJgoSCG6fJ5weMLgD9qd4uCnJ6L7az4LvMKkNm",
  "key31": "HCG1juSpYYmvCuvQ3tdYXqvq23dPcPnkqtFwcrocZGSJ3DQx1YE7Ak4Xbydn2LntSphshLBaLR7U7yQtuzCQg9M",
  "key32": "5jJdBBY6UzdEkoJmno4XDC9XpiXvgUEFAFEasBFGZBikBneq776zKqyqq68TYc319Pt8NUaf3twTsqxVDbhEyMBe",
  "key33": "5WAW17ZNNL2RkbFpSq7ozmHdRRA4AX3LUZorHuXMGH6nnyWyFChdNi2iScDf5koo2jqMvrdUaXxBmCzsfUnu25en",
  "key34": "5P793NXLFpRVdsqVutatSF8Y8Ha52giWQjKGomygZu6mfj5MPzX9ME2nWHBfPpvkFM95jyGSkMLzkhwNjb3sB2sR",
  "key35": "hro9Hw6Mm8fnttDsAjtx1xVzmPmHmDKJ9aJDTPBgWD8bR1ch9eDYnmw2AMTZXDUQqAbfeGFwkXLBnsyAtw9w8WK",
  "key36": "5LwirWnA4pKT9ZjqRCWUDNytPWY1c2bXnshaBtxMCADkWP1xN5o6aah3qEi85w6wiVgAMnsTfHFsxkc5aNJkDF4P",
  "key37": "2f6E1ANWftzb7ZgWo8fPKwgGPdmZ9vQ43DHG7QWZMi5WNAzPk9a6TQzoyHsiWuGLAQCMoGN9k7bqZEXvfEto5gbZ",
  "key38": "3UQq4FdUGVfS8CB2yhLtj3iEz9WWGuQooCZco6ctnUnuZ7BzV1GbMYRF6SHWzXsoS8pVLjqXQb9k5nFCGZLn69iF",
  "key39": "3eWSJs5nQsZQTQdZDoJf8WFyzsRxWMZiTTMhrTHS9Piz6S9xbaknwaWqtUZr4XpQwzk6E3MsP43rfEbgmiXEQCyn",
  "key40": "AaTzideXasQQ3DQ8aMkj9Cv2AN9RZu1T2TF5d7ZL8oeQm2vDM9sfuU5VbqL3tC5fqgL6dbL4CiPmwcYGtfLo5aV",
  "key41": "5TJZFomoHK1cbxDBkZHeMQrYcocZAuJsBmSLdXayfsQPYeYsTr4zWZ5NSQd9meVSGUJ78HMVYen3PPPJBWb5ReMS",
  "key42": "35CweQLZB5xisnd7Y2Xuqd6N8YcVLFwpaM5wXe9ocagkPMyvWQvZWuEaTLT8XBxghwMdgEqgW5GAwB9Wy8Kvwoui",
  "key43": "5j2Hq96cd8ph8hNCJXKLvnjnt21PMQtmUAFBpdbZ2LyrTFeLzHhtnwDdjfGZ4nafj6MEu4yWHVbdX6to1uFuo1s1",
  "key44": "6s1ooZvzuNmHLCsXP4s5N7ugq5AYMohzwUeXNLfLEA46XhC5PHJbXfpnqJc9ihCGyGiDou9jbLM6ch3iTRrs1qx"
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
