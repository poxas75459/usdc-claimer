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
    "3eQ5uESqRaTHthtodmSCWNeWSCJri8c8jzk7kPgizuM3RHfwacAyaisQRtaQMofujYpUT5D7vcFnB4QqEZePM9hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ka95TD7aH1F2fErZ2Bpf3hMqroRQavRYUPLkN2ognHFo6bBapnQPa5Kpr98mNp8L4hrACKDPXLHe6BXpJnKkLpm",
  "key1": "RzGLhMxYu5XnDEEzahdFqe755wmo69GASZ6DkSGvyzK8B5wG7m2TZRVwfKL23fdM6wfNvhQmaNqD2QzJPAeWCt8",
  "key2": "4mKHYZUeyyowop4yN1QtKrLbpzNGeKa87EoDEkuB66ouyT1baX19gHgwv7EuozNEbRCPfwKK2v7EP9y9QfuKcrBN",
  "key3": "5CPMLALeD2uGfSMVtGFLekL8iw7UCJgunrYm7Moqp8mCHxiLAkRFqZQD9h9wED88Y9ZPfYbxexaBqyrQNkxqdw2W",
  "key4": "2YQ63tyXXXqQCkSUMnN3EVRgMZ7VN9vbZrVAVPf65EEtKC6Lh52VVNgXp1P6HHtBF5q96hkcZyv1P35trA8eG1f8",
  "key5": "HEixmrESTDVkoUaVcT4F3SoVztpevkapiwZBcXghZd2XA43CSSCCZwZkVTXXLcbtkUVHS4s7qPtxb4sFMtTYM16",
  "key6": "2QoZbDNZzRCyrU2kwX1YHkkJFpSGV4A1QMSQVhzJFfZhAdR59Q7sNf9dA1dcN6HnBVZ6Dx5fWzVDMejUm7tJUeGE",
  "key7": "2k6tieCx8avkvY7AZapavsZ9YVGeDRxUnMAbDMff2CjsWNW2W9uopkQqEMk4XmEquHENCBeMrWEgdZdBsizVBHnh",
  "key8": "54ZgopvX4JS4kWF8HYS2h6qio7YtmjfK5S3ubYfgGgyraHCdusAwt8ovfLqZFzmFQFVSvncMnX4VyQwUx7s5w7X7",
  "key9": "iUW1XAqVRasBq3HNGc8hrZXiUMWzWrTjaCeyi9H1nXqNxtgU46J7i92zyZbxf4C6aczDHELbjHUQgZ6AQWnq9Zp",
  "key10": "cj2SkBoj887qdgT78DErNKZaS5xsBRacKue4hHHt8Cu9fC8xkS5GvnvXcSWNvbLH8rgjtaoBcyAmXNQbqxrehCu",
  "key11": "5ViesHyBi7EfD3mtB7dieSjodTsJPfWrGBFJw6JimgBzvRLwcgq8Frugoeoy79TUB6JGo3vjvNHuVwordK5oFBxz",
  "key12": "xwQNFSGcc96fvTPsmW8WXLs3UniNB4ctUsToPogXZAfzBPeduQu6djjKcKxaCvNiQ4KR1zv2LgsB62oSy1TS63D",
  "key13": "4zABUa4U7vmf74DnbNFnFqfCwfPp1c2rsxbeV85jcMupekq5edgDNzUQTVeDdpmPfoysznP8UbfkvFtRZYSpNUjN",
  "key14": "4tUA9K3MNgL6fRRqm7Pfg45KiJRjrFydQ2YWUXwSL9PVQTzQvbf4ZVUbmjn7MqJapjZJk9pTnSkFEAEujMbsRq8Y",
  "key15": "4khX7HJsQ7GsKYAyPPs2DjCr5jMyPYi2uvVvPo3E7oTqvth3s4n6aay7osGdYHPqRe5Z5xpFpk22qRSKxQdpB7Yg",
  "key16": "46JK1ZkzuUYSW5SMFc2EE4Sqa9k8a2NGu4tMMk2bAWS2nQ8sEvJJ6vjfARXfgmbXNX8qeVWYmWiWXN2NvNmTaByU",
  "key17": "2CP3TeXuBm6efd9h8EbBjZbyyt758CkcPXaAJZGrRc8TAx9Qgf3b6pENF92DoF7Pd8Hm9Y3CTRjTKLufSxMu9P1g",
  "key18": "ziJayzfBrbzoxkBTidGKzmLeEWu1U3mJ5sXM3UGuZ9mArjy3cUKvN8mVxjQvDHdqj5bhQHAAkiR9ce2tkcRhxHz",
  "key19": "656TrLbnHjo9vdATCeQqJ2HYyegKPpzkL18reCLUM4YzkzYZbUEore86wNQ6jnwnqzC4ZtFg3WcziR3pFKnn9ugR",
  "key20": "3Yp3BBEPiLi6faAS8nKot6PvtwZfyrZ1mVQKepvgUVSk1drz7N4EgUoQvKX48vMfkGqBJsKArwJFVAnaGV3gaZFx",
  "key21": "2FWc5wd9WGDQW3aTMAuRZTW6TtQTwC98aMq9qMgmaWArHbkzj69aDMuKmGbScoP5u2YugX5bCwkqFPdKfjM2TRmz",
  "key22": "R1tesauaSLHGnmG5hRynjjk9eLsuJVtpg53S5tvsEukFyka2Nm6rv9wo48tv7Adm3Er7phUWrrR65j5UF92ELfT",
  "key23": "sQcT9yGdGRGpBbqq3PpkvyeWEMV4NdoDYZXe5GTEaVzy2ccV3XWNHyy5oiawK7y1rDVGu6FbJnfXNneqaiWTAwE",
  "key24": "4RdtgETnVEqznW99d7eEEuekDTFrcby3Uri56538RK2gdKocSP9tWiVfrs7cpYPQc7JE1qxVGQvhu9ENqdK3FG5w",
  "key25": "3Fesh6HhG9tjV95kQPCcGjP9uXmvP2uMDATrstgZHVgkfe9MDxps5iXZH3teSpGisj2aQx9MtvW8zriYaCgd37mc",
  "key26": "3HK9iAaqjQ3WoUYQ8gctYVNJWZYncbBuzQHHqLyt6X5uF5JgYFnWGnrEsZKkbLaVrgaNzzC693PvhYhirnMVNhsE",
  "key27": "4cFWdJocoMyvzRr4ZW1eMT49Ku2BLzR2reD3suFA6uo729x1NZJqxjQMj7fbXPyE7o7LU24QAeqTBFXmELpx28Tx",
  "key28": "4r5UpMBkBqn75f5ggadYdKUQnBSKQ6gPHfLdc6sYJgayBUiiFkYYpzgMvqCpe9ZBwLCdW69GApAGU7BYqVmaCeSP",
  "key29": "3ThnFrGk4rbBiCAbJFP1EP33KwVTmS2hMy2kqTy7q2tUNoGzujTkZf7pH11EPLiwsAH5YdmyX7WF3GRcEFpoaQTb",
  "key30": "4sZUvgf9ae6iZkGzRsQDRtnw3RzvrS654EWZUUkahmo2bCViFd2X62ShzYV17cSAGDSruS6gyeKULD2jUrqt7DHY",
  "key31": "4hYR1TSrUVLsSmDSHhxKvMYHxK5qB4Nz7wxWR5ZaS9GEpFx4RyhSBQeBwS5fvN9qUUhewwMe9s143JNoN9xgoHnF",
  "key32": "3MySnxCq8RPWJBoa4rRm5VSSTA9sSWmZK4T7g3e8re8PUXzN5R7cZtgoeFYEHk7NaotXSmA8foW7D12s3gF7yNfT",
  "key33": "58D71V2MvH6XVWy6mGHLKAt6jzVRDm2fh6kr8RDvkjozg5uVZLW8NahhKsWrs4abxZisbP4cMG8YBrecs5L2W6gM",
  "key34": "2kXk32EitrCAwExBHi5KbDgoWjg8zsHSRco4f1Bbfj9bmsApsnmp9EHs2pAvDFs3LjuMuB3uUwQnAZaBkWtzC9yw",
  "key35": "45xCqNhb3RRb3n3jnKG7vAVA4tXUf2YJ5QisLbnKetFLJcZ6ipb5NVpNFJ7MEHCrqKis6LK32pwtZXTdaSZzxUPr",
  "key36": "4MRZGVkeDWdbTsLQcAPViKqEExLwBFoP32TuBMoHNLveXb7nM8KheYR4gSBwYgyFPt6D49Bd3PZ5K9BFkRqFC3Aj",
  "key37": "2raofCK1e2QWPpy3fj646ofgb9z5brXk7MXdWmr6aNMy18ynQLNzLKMk83Bs7Lyw3tZecaZsHE32MY9rTJrWo7LM",
  "key38": "3oTX5kvpHWPgqVYqSPTnhQurESF2WMU7uTjpBdmzRGwc9gb3fC4Fm7pCjqJba3s79n7JA6S1CjM43d9BAHoTBDyo",
  "key39": "2kPJjQkLbuJPbe16YH86uyca2KMwP7bYg15wserfUXAktncMYFPRTjxHUraKjf8kLaTGeiG7DiRYmT4tScT6HTVS",
  "key40": "2mur6L5VDutKDSFE5udCM7pa84bGyZy1dd9AyFWV6NRxiLGuedDyQvyRtFfwr5W9xQWaUqx5FMHso1cxrrVN1Ea9",
  "key41": "2FVv6kmgDYo3gS43e2V4N8FrhzokdLdRdVeEnLmoucUqn4fGNQcseaqEMzGHWUMGhe62LheiVyPBbaYhjn9fmeSJ",
  "key42": "5gDreHtyJwX2yUd37YsBPaBCLqXeZuniu7GPvmQrvNKrWZvtCGden8Jw94BtnYUj7ZBiVhceUSMkiqZEZUEKiDj3"
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
