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
    "wMhsnBNCBwRhnwqP4Aci5XabnTLCWRBucPWL2pMcK1n4Lh5Wj5Kxoh4hSnQw6jqXwbVCHHzA35sj9LmXQZZG85Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PKBr7BLobBYrE7m7gnVrnRZ3t1S45kYg6Fh1fEpyD6gQRYg4uLXfhxDSqEzHdF79oZifNhVRgJFHEbxLbB68jpT",
  "key1": "ntFtZe444n8vAPTLqn8dfi8SUv8rvfnFRbHXwSWgVNFfjh9icapP7sHU7pE49p7DFeZuHJ49M4GExuFvjpsL3eH",
  "key2": "2mi8JzBftbj5vQeeyUS3yfe5BovPZWhoiUBvYovLxJHANG7wTeqkfaPqqQaSmXehS9zTJXU5BQoZVw9yyi7LtC2m",
  "key3": "23rQvcGvkfm1GVhiywXRVLVNQqCBJ9VDNCGxAAXtXo2qXJ5LWQfkiNbePAu8fCujgzvnVa233sYrj98prP45f6aD",
  "key4": "2VgNGqwa6Gmmt75v6zqfSHaFmAwCY8qQa8vph1kETVbAUBG6xhjD1yaVLnGwBUkHxeoyGXDF5VDCjr3Knkjfy9RX",
  "key5": "mjpEqwysHgV39wWzkdoZu5P7VZJ5gCc1P5U512qcDokLUGq3Ma1MCqMmak8R1xVb44SSWJNPvSivWAmvcLB77Ub",
  "key6": "5ijGHGivaYrkDwSFZ9i4v8tGxA5bBQ5jign1RZqLpAoV1Kf8VQFes4J95yZEo6RDSwDV6sxJFFRganp4F3Rw8iE6",
  "key7": "4GNkGa2tyu2ryd4nw1MhkqvhFGuRyktQvtpgtZm6P4V3YjrgbJexuyRUqMiZbB5qm3MS1eKvwfkzpZKmm78XZu6h",
  "key8": "2CLNtpv3pziXKko4DbEJKL1WmxVf7SbP6zBSf2gk3uJnHTpNT9b7jaLWvws8RsvhJ4KAADkviGbA3xCZoStraTK7",
  "key9": "5N4SRmgkJxw1LNPMXqFBZvm5XuytxkATiRsccHyroswxwvbsAq7cMDMb3vhHyxZ35vhAJQZxFni4hYxvwsZnQM6t",
  "key10": "67jsffK719XibEVcq7RRdFWBdgmdfTX1Gbvqru4Ym4h3jH67EMdd9ZVYFhc7YqA1bUgXgtXwsnydVkNgrkmZE8sd",
  "key11": "2NEyfp87soQguUUa64ihgazyVdNMF8Z2JbBuU1bZgaSNNR1y1j1TNRNMEZGJHYiQatuPNR2SRnFWZv2kWkm5PMQJ",
  "key12": "4oBJsN9ur9bzLi8JajnhTSgpCQjV58Jeq2uSBJvUqPMo4wogn9ENq7yAANTY2jS5iAaZF834LbJc2zNHFZPnnYYo",
  "key13": "3X3HpDd2VUepeSuGP6xsUgEDRyh9XD3BcwStxmpKDXnYPpGdSz3deJWZNTxuDUiBjiRJgf5BeAdyD7sgKH2sBHWS",
  "key14": "iAdue5ctc3LA8SZGH8CesM9csihGdGyfZTWRmMRpdyjja2bgEmejGLoSGpUjjrNS4LUN1QUWwkpGtXdhtXeZDwp",
  "key15": "4tobSsfrDfFdup3DnZwohDRssbh2LBCKChAJafuwgTD9pkGnDFDUSQNaajXLkqv3qVcjrY7GZCa3z3fK9MhLXio3",
  "key16": "3U63EKw6h57rcJ4XDBAq9Au7WUMAFPa38zPQsRY6J8VYVyR3yznvgMbUNqEgUcAMoiBWLrUjQPsbwfDeHFUBLGDz",
  "key17": "2JLugWzqEy5Ghiq6huGyFuKirwoQELv2DgTUiCZTBriSd7m3xHtCJHpFEyXwMSw9fNrSy4U2p3GKLvQwXzE6GkfW",
  "key18": "5EFK6EbYEngdMiUL4VoqyQvnxpffosrEnx59DSi43rLTQPGBCQusfnxH5qFi7n7Yiz9HANWMVCpWD3XHKvjnwrez",
  "key19": "25snJpkD4TZLC2C6DTS2aaQCWYaHFkkYxDNx2nVKCAGnvQEHLseshKWrcKjbPpTJR8wVAAxWdFLTqLtC2wTVu7qC",
  "key20": "JfJfskWDWHY42kNWBKrQXKJ2jwYLypUjWYELyBVoD6AgKL12XS98K1oLoQHp6WiDRuC4x3Muf8KSfr1eNCfivff",
  "key21": "3jVMc5uM1RAZHWkToFGgyjGcBznSwtpNpzzMHw711vRcQwGvqnAzoGfiKGsrumfT3T4AgeyyiG8KvMT3CZBixYHQ",
  "key22": "5emC8J9vkB7PcbP7DNFV9yqykFFAsyVmVURJD1HL7X7YPWn3hbbDJvv325AT5oEhF1MaUGNWoaYJFAEW3ZvfqxZq",
  "key23": "6LAuVCAnpMphx2hNeSgXbEMGD6mkzMSH6yW7zjpQdSqadNQpmadhWoHgfXsYeJbXnRVbesaGFZX5kD8AvFC471U",
  "key24": "5K3uNYtr2tbwaLsJETa8ixvmZXrme35zgWUXkv3Ec4kqRMdh4HVfjXNQeT9jRpyfYKmPCcVvbNYY8pX8tSgrZmT5",
  "key25": "2C3668aMzYPVe2SMHoFiaUHFtx1H4oJZxVPCEvZM1yFRF2Qnj82ywd79JEvzmw8YdGRaeryfi9AEdAWeibCxeHZt",
  "key26": "2KbN7eKtiVf5J5PaVJkFhrA2JHwiyKAo47DgxUM8D2JRgQS1VoTMgby3AFCkbfDBUWufG7o2fNy3yFrBQMVZrWXh",
  "key27": "3cbpsfBDzNJ7xPdMQ3CTjAPRE3D8dxgMpweAfNK2PHwffvhgahJP8JTrBoiuztqMNdq3365uybmAG8YqgXS1dokD",
  "key28": "2B9y1izh3Uco15c8SwafbWQY8DbxJtHWxke7fxg6gx9ajo8s1EmUNNx7DCu84FGoRuHZozGkTFcMGxJeAFTRfGtc",
  "key29": "3fCsnJ8aF3xQY9bsvdUGq2mYfG2mweZTAsQQHLMnNc5vRoRFjDDe42P6xBAscq1GDD69HJJijFpdv2WRsZjzn7UW",
  "key30": "5a7JA3FxBceTvUVMepQaG1oFtvDcWdp6dxmCzaYjdEpt1jvcGsCuAMgYbNYuee8CKjUF2TbkMm1yZX2vHRkotqqD",
  "key31": "9CEHbwbPo2dBDEwrDM9G5mj9SYkeTwLeWtvAsKwtgfPjjQR5YQTts6ijJSXfNkk1fjWhDjzzcpkfdfU78UVtZ6M",
  "key32": "2G4eQEX9obeU1CAZKgeXqB1BYti9mkdYAx6RppEuBFAJvaK68B3dpsDGYLTcME2vyUFAGTmgMezedRyBcSzgSo7B",
  "key33": "2a7CV4wvFtNUzVfxGo8Y8ekDwaUb41nZQUwkSzw3eYZioegBe71PvurchexufPBZG7Uusaw7HLhVSiVJao9w5yDg",
  "key34": "3ZAEsz8jEpLQm1S4WLAvPCooj8s92NSuosdhHu9FXxcvJGDvmw23Xi82FHtjWk9WoenKS41mZb9k2xGGLRJX6Ci8",
  "key35": "3saHjLVSoxYu2UNp4KU8zm33TmoVwNnRkzXqaWjbryYTvxW4mjMwgQMMZScNphETZn2fkaNNEz1hec4MuqVfDtAf",
  "key36": "5k8VmhV8FSRcTTixYPyPQoq9fXjc3FmxSGddWVyvz43nVxMirAsDz3uffvPMbUzsgPyNd7vpPGPPnTXvQC9VocEb",
  "key37": "R6CuAAqVYbkg6bAv1LAvVT1Ys4fQXrz5A7cQSbbtksT6grhjUJEuXi8QgLSbqKvzRLF9gGjdJQzTAE1fnsjhnxs",
  "key38": "54nrK3Fw3Euy4b2zShGqsZkYrABqReLxTcKzAuPSrBMaqx75iCn18jpPgTD4NoL8opPggwrdaY7GCSnyqCs527as"
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
