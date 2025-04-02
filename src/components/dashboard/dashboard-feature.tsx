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
    "37Gib84aMhB4tK5UCBLHiGEEohsaLj2nJLxN9BGBZmd275qdEQQzBgLTsQMeB6janVn3XY9R1oPmhtVS1t3D4bwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHqtQ8pLJXdB8uyTPHoESF4CRvYuFuFdo2GvzYUDXMXJFULr4a7QZt2FvJYdSrTYfLFnJah5tbUbLxSxxW9ibiG",
  "key1": "43jUnocCRYTe4ba8F3nLwEiyq6M5uvR6jTGhjjebXxwi2o9Bu1WrHiEat6PAc9Ezwj29hRqRvw8AvfQ2oGrX6aJG",
  "key2": "3wxviZKULLmq4E2MSFMjM2UdMWBwbFyDnHffspYDDc59qkWqZHqg6jvrG317SBijSwMyBtGeQZBSBpa67iyNMUwT",
  "key3": "2eSt1QdmKWmxnWKXqUXndX749BHba1ag2u1giy3dCBVvRUGRo9AXsj8bHvw5igz7vmzHjrnVKWYd41AVazEL9jGR",
  "key4": "3MNjmejRPXg6CQzivBH44rNRi4i7kfxNcPpkRnkfQUYy78r9kp5MkCEdV8YDdJ8mdtR74oUa8TGcCGm2u223JuQB",
  "key5": "557yN8MPArEn9LsLKyr5J18PaesrcZ6Qpq9qzJXDcgbkNytuWv1ptJAqZeAzVm27MZvuXRiD1bjC3DGW4boChCuC",
  "key6": "5i1RDSsZiQoK4gjMADGns1swBZScLP7bxWh5Xkf6qssjX5TAyoj49rs8kPUNqt4WdJZYCh6xgjzu8T561Z4p8X9f",
  "key7": "5H5PiugAH8L5JDxKh1ZxcWiZ43RsLsUxehkAJ37JKMF6waTvEu7wtCFVwomCYotb66py3cq9uS6XzBQfLh1j6nEC",
  "key8": "2h5qS4eB7auawJ7hA5b5hJsD2StkR3brppXP9Jf1Pi3cwM3t11B8sv5M8Xy79uHdSfeFxJv5dxiHiBHprtxXtKLN",
  "key9": "5d1TEv5YGNSX2ZmvBPnMbKyfsGN8TxAbND8QJDnDreGR8oLq9MYf5kjTyywUdyyGvUDcuAGBAdYTG6KSbt6sN4Eg",
  "key10": "59nJDxNbgThvFMyjXJDhjdfbV9fa317J2gyDfswsD2qXGWqvBJbfeoPQ2Gp5oLiRxkv4pjLt8suKWhGiifRwU7f2",
  "key11": "K8zoShWyRepQ1gUjnWppoaSPpEgYqmnY7Q4HpPExK4HZ1JZXUF2Hda4V5wWLrLfAe2AWzYVLhnNLKRSvZqdmCHK",
  "key12": "7utePcpa6PvTaNPcyiWtmPyN1SShkj4RTTobgnKMagzrST3yhkGDPyDjpfVRRPCgouYx3ZHcGGhv1hooWbwUmjF",
  "key13": "Mtrfmh1zVgckxHw3nLBxPQAimCV9uvNDbRJzpfT8jCRwwv4G7YV9hdhUkuhNX4JvoBnPGFTfpLCce7j4US8bSZa",
  "key14": "2e79DqewbAZ9Mzj6q7AEZYLbYKBPVSpxNB4115mSE9aYrQjfyDEdcJArbJMtFKbvWABKQMwDyRk1L2CnXEb7k9v2",
  "key15": "W7o1MmT26ZkdhwHMRJUar3v52yBxJ6gs4vz71aMZSHZUvs9gJ3m8TfbvmCZ3SAk49DeTreK3iLpAwkarPbBfwdr",
  "key16": "2irC29YpdBwigKXZaTkEaUgVhoLUi9UTMN97D9XKPmSwBBDG5G3Lystsn64Ngcq7AX5QHgPicrci3oLa2xTJwKsZ",
  "key17": "3PHJMvv8M7a8wLiSurDkZfqE9C67DcECr8nKj6S3jBSJVxxvQhXmdigSrcxzKQdjyRqy11ew7pRvNS3sMz2gXtxR",
  "key18": "3CA1XfPrBtT8yVJy5wKAf9Qzfx9sNDHP6iTQKiqSYrf8F9XTwmzwV5eASAooGQunWemXvpmxj1myfDy36XwbXbJB",
  "key19": "2d9UaUR1Zx8L8ExbcqXqee68ijhjrGkSAFS7GLrSRfs4EQhCrwdYkNrzhDuyiigMU3tsAah9rLdqi3aiW2dU2M92",
  "key20": "5naMyRFPY955eBajCeum761fZHNwTvHvtyuksXPuKKjXyWjNmhWfqv8u8TvGUq5VnFTa4WdK4pcGgqzmXn1Yjws6",
  "key21": "Hn8cufeYiuDGGkB47Ghstsrsm1KYfmzn9wBF4MhMtk52ZpXFcoAJATd6hZ5xqfAFy7jPH2D9BUtvpRK51TvXHHk",
  "key22": "5dPe4ggqG53aMcyzSSG6dpVnDXaArFRB8SNQiw1etppx6RKL9GjyT1bLHDcuoWyvjk8uE2pg78QPATi6hNWzeeoN",
  "key23": "4DfHNSixqLTyh723X6dMbNiTWAKnMtvN83avGnfQybeUSq6oJW9TP6KVfaeJGRRBFSPhQGZmxypTo8aM5YNUDZ9v",
  "key24": "uPKF6ZDrvjAPKSBJomunPyu1fkCvG4T2AaPRTondJ4shZQBv9F9tqvQVT2GJn7ctpPEmVeSag4PSYB5nPz4i9Li",
  "key25": "HtXzWfFCLmHqc5X938fza3zTMiR8pbW1piQvutzWkLD68NbQCzm8akhPWy9DAkd7tY2qCtWNKCmiuTGCysC3jo2",
  "key26": "3D9HVf6g9gUnMuF3R8eBTaifg6s5HSiKiNxb7sqgacukvY79kSve8ZscvVzTEsLDT6MwdkfNGDkEDWYB6pw3CSB1",
  "key27": "3Sx2u44Y5p21kFojnkqAYR8BszUfVH67vBFV56XiRMXCqy4sL3UMNnqCknyF4LvkZijFhHDLkbPusXqrNUpgboug",
  "key28": "5XyjxTKCGYykoQfDK1xoPKazLd8hEVTqRU3ckq9psd9nahYjzp6WDyi8kp6zMvpFjDjS15E2Jtfzw8L4oM5Fps7z",
  "key29": "4SRF4aMPCwYG1ff1RYvjiKw7KyjcU2kgv45tR3zJaSfLkvrEUJDigww6FjigqTK9rM57PNKtaZ7od9wRDHgP7CPm",
  "key30": "47wHToKXVtgUyUva2PGi9yK8NenhRbJSDrFXSCRcDNRhBqLDr8W2dv6LawAazF21phfyCA88YLF685FWxEK8i8Yo",
  "key31": "4iN8dPme4rNStVy31Vr4JfWii5yWBSXU5UTtDvKriiTEHGs3xe86N7Qcz7t7ycPVVJwwB2x7yo8hH35a42xdJ9wD",
  "key32": "2DDpBr17CU7D2dFcNuSnyYCf3TxLLXESwe2v8okeNiZZbMMJ5G7p6RTNqiugDMEACwRPVT7ci2WCEdhUUDRtRKLh",
  "key33": "Bjq1VAHtvnteXDdX3ZbCX3pt3f9FoGYzWqQRiwcd5irPHDFHouXcmp94xzKjghggiudsb2dvFQ5Cp2gq3VHJMNq",
  "key34": "3WV22DA4mro7nvdyGaJJvRnosouHYp6P1J2o2VctcLq18odAEdNwBv77pzvCTKWTyJwpej2Cr1dGDE8izmYCJ6Lp",
  "key35": "5MFHBQ7ZMLvK4GMGgTojdxQ14kTaAdPeA6QU8cqagG4M9zPQSrbCGwSVC4Er7otRGeqKSApAP1LMvnwUMeZPnCAy",
  "key36": "tHJXkZtPVErjkQZUtqvn64hgVrGx2WSrqt2u4EHCCss7AdgeLtcUveqid76aeyj7PNjfpW8hJvWfZYY2yZX5qCj",
  "key37": "2GjXTLwuMpvJRaTzxif8X4uW8bpSEvUBjuGLGrToVF7umaTQNQSrW4VjiZmnF7ArPZ8qEjfdQ7hwGxu7vXjYfgyM",
  "key38": "2DWxDEQNgSe9PvkH6joP9bnod1cRBzrwPEioayoE1MK3WWA7ecTBMBQ9DrnanaaBexQ3Uw8Z4YvHuypi6JgP7L4J",
  "key39": "4ucXFGMSYmKBzy9fNEzYtUa94d3wEcCCb9R8YyYyc26MNeLPYD3eh9xaCDJQC4YNyPXjDLdwhJ5GjGaGQaoLUDEJ",
  "key40": "2tZb75GYxsnZGpvMyPC7fNy3G6EvsyUqYpwHKrdkKEqUoHPWnctDEvxrif3heLTNwBgibAGJw1bz6ugPMKzDF2uM",
  "key41": "4TL6UHKoCeFzyAhrwEoNvaU75K3jkWyDKcAFHjyqPJNn7JR8wy6zT1rdjbBRG1EnyCyM76UeQVNBamGEzQEqbvNa",
  "key42": "3RQ9PVyccZRzJ5YcsFxdovaSeAibHeGV8SuWBNxGuzXuy3Qz1FnADuuxYgmK9NKeESuqZC758dn8gxBAdQCHnReP",
  "key43": "2BA8L8KFNp6txjpDhfN24QMqEKYToeT7m9vHz5JKrTAJKzPJ2GnEpsSrxcq3cQg4R2mEwKUKGJQ5TFLrwPEfP2x3",
  "key44": "384pPxehuaDaPL8qzCA6sE319Vp7Hkq7ez4DyRbAHWVdb8GepeSTePym9KYxYYaSMMHrFwfcRuvXkChHZ3qvVSNU"
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
