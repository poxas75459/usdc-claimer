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
    "42JpMVCshroR49BQBJArMFKgWzhuwbgvNDrMSYwTAF19Y5KCX62UYifiJNxDMCuMYoHvBPsqhH9iewj5NjuHr7TL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wmxFgXBMnAfqQWUvn445pEGgHymsQnVoEMVKb8CG2aJtjGb2jZ12ruGue1svdNaDUeV8DD7EDboKayS8rifRxy",
  "key1": "4HGtoJ9hfFw9hzhGkS1zedeU9yufr1uvokzGLGitY9rvRrv3kAjW3wNKyUHjUw7HV618EihLwdFNSsMDeuz1ZgiT",
  "key2": "44fdBvBJwMe81LeyFzTLQqK6vCygLcfU7xVkEuW9XVnan8XPXMfYrZqAUasNLHsb9P7oHUcXqseugzbKdARtRBoy",
  "key3": "4ddHFaxsNjrPkeYemLNpUNRvfDaPuM7KqSAVCRRdRuvmAqsoATJFKH6Pm77KkUPz1gJp8tqN1icm9VVCzMR2afeg",
  "key4": "24CqfbNmPXPevBg82QgvgTaAA1EnESbimLkPvLtPXVN1wUmuF3amCz76oeXfRJQJdwR7fP2oGoueuRxP7smyWfbn",
  "key5": "4VVYUuVm3eShduDu5DCnLHXzYqHX4PdNyXmZvVbt2Nn8Z3EraFvnsAbgSvQFSk1vKctR28KtKQFAzKdx84ZtA8b9",
  "key6": "4sXfxdNxnVdiKBExYTG5GGviR4fSEh1p5kJ8mXpaKe17YPn43k9pviHyqxjuH1seSdvGxgKrnwQcnbEcx8aCbhqq",
  "key7": "44NSNpZEJcKR4HcctZ3oeK85799Di9M6XiCeL1CPxD3EYPLUvGHWuRq8AJbtuqoe7FXDgL3xzeUzrqEZjxPPycB1",
  "key8": "5ggSSP7Lqk3TpXnu6duMveMjeuVCJuiDCicL5raMmEqjZXDZpWjXSn4mPGVjozXhvt6WAf6t8i5KFFCuTgZZckQQ",
  "key9": "jWAH4h18gq9d1Kb7UrkCktqVSvQCuc2pWpKuYrAWx2jVz4ZQWUvpDR9XwaSZsjmxAQ23yZDNQArreAyUPzXNJDV",
  "key10": "62M2qgDgcXjL4iGazsQErGttvr6jAcFSxWpGgiYMcdRGHZVg39NCxurykT5ytt9kEAZefxgFuwHVd4rxFAjTxBYv",
  "key11": "5482MidAaXs3eVQun9nwyffy6kMd7kk7QxF1SSP4sEboz8DkuMReLj4nbAH2XAtJuwZUZrEZ2YXTnKs7vcrNzxWF",
  "key12": "57aVdADUarv7uyAW42mWBzgdjUe3TtRn7Pr944jP2EBsh4wNJW7ZYJoJB7uYH15HGyVDU9quJGFouXRaTK98dBny",
  "key13": "31dpnA5Tc8ij7oh8BUxc7Bpbi8EL6fVECA4CWYBErCuSKjX4BqmqSep7ZyDad3WryE6zM1EugBNw2jqjEgykJJRK",
  "key14": "5kYCpLeoyT8qw4Tu3xsf1odcgZWwMeiWUBEhmmfKvcYWDGMSKSRG25q3VUHMtGmFVPU1vDuVQXMAqsRHQtCVh7c5",
  "key15": "TwHJZRSBGnYYxKEuohYebHk21EpNF8c77ttdec2VpWgVH4xC5PfR9pEosD5384VXSkr2o1NSN1Pw5KCv2qFQgbr",
  "key16": "3LT4FRVMjJJLYMRBbwPthCadm66visAyspKTfSKZ2tR2ZjKvKnAwYAbzVYTqza51x84ZqZB8971Jyn6FjFXEBG6X",
  "key17": "7GmB32xs2siLEFn1z1dcHtNMS8wNsM5cWdtMWMUEPYzzcU6G61KWoLs8YmKayJmd26BCzHpVbk16SSAmfz2by2y",
  "key18": "5gdv1pgqZNfF2KSY8ksFEW1fTqHsmHgWpP8Gui6Nx1kjWnQhUePndZermqRSrZ7apLourvJnycxHiknfK1xBbEGV",
  "key19": "4MMnjr6sMmMfiTvPBx2njLyuLBvdQq72EPLkrVVfvQTYHr1dhUYnXCcJmfiYUZ4zRsRUVy74YnsjLieVoGUZSVt3",
  "key20": "cpUpXWRNkLUYrV3NAZKWtuYHw2EcmB3LbqpjgY7VhmLxVeTowH915roojzRdrdrQWrt8NXjL6tkPmMfcYcbKjgV",
  "key21": "2WhWPQLQt6fNBiMTKbFJXDJSucpg4WTqgphivdEWDczP7dGRqFgcAbfC6YhxutAyxCtgFZdMihV6UtV35nCbqiUg",
  "key22": "31wQW94Q5fxYZy2sMcYSyowMrxaamuFULK5iukyQuGPnLxXbCCkVf8y8hrU1SgZA968Zbhx6V6uEJ527rg5HbLJZ",
  "key23": "4QtQySwhjUyH1u8JKBvLuhi7meoQvCV1QwWhBeWwmFdcRLdxXdLKhjoBB9woone1EHLQ1iQMNd4HvViwPktcJ6gD",
  "key24": "2LZz4gN3p8ph7AytuFwSbuYTtYqePiEQo7nMA8NZY5JTE39u7emRQG2wbLWxbxa9FFisi6AcsWv27BfsUfAaeUrg",
  "key25": "5tyneKESxRG1Sj27bKDJZMthGiCpzPRpmMrtzvTTia7czxakpYTUz73mHJ9fimnbLzTaFBmCeMSjguZncyQPCUBr",
  "key26": "21gkgCvPS8BNanUUs4PrV3C7AdhKWdzXqG3QaYRYRcrVpfpTGuLfYhVPCVV3mApBAhSrxc32CjcMw2sRepmK4xqW",
  "key27": "4uWS6rsPsucsTJZifNC2CdGWhn4qeEDr9qYcg1ZKesbqPMbz19AV2Do8pkVWeGdxaRDGNn13SvSPN3qNEWrJQvVM",
  "key28": "3AtRCzTXVqrLVy5YUXVvdjRenhpsF1P4B974T9buzKs5WrT5vt4DcSngG2VC2kzwLVYpKu5cfkNhF7vtQyutrPtC",
  "key29": "4FhP9iwQLGBmDWLRkC7q69sQnX67L2Wmk56toxYVmcJG4ipLAxZrh2FZSQ8bgWcfsGBgU3NE4b39KCGbpZMozWn5",
  "key30": "4tk8Jfj5grFv7PJdVBkUUqmdU58fPHikSLYQKmKQdxhEBZxb1FmcEafynVXbGUuhN8ubE8XmmnMjBohuoF1mhcPB",
  "key31": "2iiQwC2oQKz1RJbsCD8F6AeM6fDup58Q6HntLepKBpHS2MwctHoZykfj8FAmcYjLReH8oaGi4eVcz6SNDQBswpVA",
  "key32": "2bVNBnuPjdEAw6DTT4J3EnVx697BdCHxQC69Uz7gWcKSocSehHGnR68hKQ5Hf5zwT39k6pbzxkfnByzsMqaZMHEn",
  "key33": "61Ahp7xGeygtNGEnTtyiKVXEBt8G5YgJ5GxpjaouhfAi4GJvUrzUnaYD9tgRMmcx2d7EMjAGt8fZMB66dcMBN16J",
  "key34": "2QUrqEY9sSivmZFUXfxrGW3SNMLPAFS74Y8ob71dZsKFTFcYerJLGMCLFfpUFdD8vSafnxxPeLo5zDJqSdXKwryC",
  "key35": "unjbPLDyAfs3G2mK1TLqMhZZxP965o2SMArnQrh84JohA26cPjUHAiZFdDPbHcgRGsj1KtLHAggsHrdEMCgtKgf",
  "key36": "2HbhCQ4qkp5zo2BZ3DwiAFp2QnPFuPTuK7wnCtQ9i1mqfUDADpMYX6cb1tcJLDyEuySdQQV7djB87D7jopFmA5at",
  "key37": "61j2NoT4USFZSUM7ctRLaNMAfE1nqzMt7v2kFuMitE5TLwmC7St3ytK7fKWHhSdcHBu7SJzj1vZqHCpzjGryzvc2",
  "key38": "2Hdyq9Syz1yGWtfdXTNXJS2QyYRAxhN4Yj6dhPYyFAywmAYxnbsXWESDLKh4ACUkiyWznQevyah8zNroMQwCHj1k",
  "key39": "43vjy6NgCNsowrzkGRBgdE3GewakJ1XfbzrD85bAnsMPyqh4KYMFHTiRg13Q5RaBHgc8wdaux4Pft2WTjsZoUW3u",
  "key40": "5j9cwXNcUPmRumqyFEDT6dXXAGDD5V91GumVbmx9XK5jJzjb9iLPzW66LuqCesJpWUrtjdhgJ89pbcyNzzVwLZjM"
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
