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
    "3znMccN6pdLUR1APgNqkCKFD3S83ubKgkcrndRASQnKdmN2pJS6GpSfNVExKPQCZuEc2qet5VjYdtSZdp8a2Cmiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59KcjDow8qXmF9d4WGfYtCQp57XT7rgFbPdeg4LZwpxovYfWzbSxaPKxP3dyXejpsqx5nk8FuZA2gotMKUJdbuTS",
  "key1": "4nG2WCg7TiV8TkqozhgtKoua7QLzRFuUghLrq9TL9vCWfhHK78xcVsuLeRKpN8sWi7xZSTnhYorLRZZbspCV4CfY",
  "key2": "4Y4ghn26Rjf4nX8vzBQsooS89gyAy2RHA69G5MufjFFkxSXtcoU6BZG4fk41SJAJbXFEdT9Yq9nDV3EqsNxtzWuR",
  "key3": "2Hy3nfZUvmeo4fWwhewqD6HSd9YfApV4FUe8C7tUuakAK5oDB3zocofdmChswksnNuEgmK8PKzKTBXY9qAafjVFc",
  "key4": "67k7suvaVv9sjMjVVNNP9TxpCMYvr4ohA4LhTtmB5CTTiLXF2bWe4vwVaJ4gECKfGirztXKta6KBQrrdZ3wfNNiJ",
  "key5": "2piVTZj6PwMemAXmpd28KiqET2RznVv6mTomi1EJpDh5jMrWY7g3ey9mPtEVKsg52nKentk7wTyqwhD7HQ9CF4qT",
  "key6": "AyDrBZnAgZ3AKnqBzU8EX8bX7erg6T5Hufx7kx5Mp4U8Umvsxy5oggpeW5fKxQkyyqLwAUFQJh8h7ceV2f7y7Ra",
  "key7": "5ArdeNhdok6d12VgS1R9QztNdS5z5GBJEc3Lcg6uDXY2tm4MPmrLB3qWh2dk1CzUyY7u5hGZf6sGp66HdXKYi1ZL",
  "key8": "2pxjWpZmGLzrhVGqE3DaxuKHMRh8fdRZrDGxNs1FNdNSn7NoozwUbrypaw6LzgBrnP8sox3oL8T9TeYHSYmf38zt",
  "key9": "4vCNJuEAZxueryXCeT3LM9t2HzDMxpk9KPovLDLAiytakK6q8dmHmePkS5vddCPMPUMa7Tn6tyPXEbvvXN4yih9",
  "key10": "Kn4wbzKTVmcjpXeb18n7zvfehUmAFZkLSLfwAr3N6bTaV8c71hrtZsWY3sTLu54n6A2epE88tZcTTxHy9Sz3gCd",
  "key11": "55QCEqg5uw7eEyb3fRKZ8aBqqFwrxM8RmMZA8JNgZnsRmWZTbTWao5fbRr3q185jcVMSe67Jv68RHLduW2LFmq8h",
  "key12": "4nut7qvJk2EpsmjA8Nd7DhE2aTzVAxyZ1a5rZo4mNrMFRVdYevZ5SsVrsXyiqCL8mshR3rcYdMH4dppyPiygMP9a",
  "key13": "4SzegxbyhQkjQxXE4B2515Wex4eDdpeV7b5rKfM23jxXHi4RUkX7yoPqFTeWVgt7rFZ5BYXjUpaU73TVejMzt6sW",
  "key14": "2k3neeS6McvYCHYHKFvRvV5ohgEyy33QczNbE4TdTJbF87Xy8Y5Bc4kZrVn6mZQ4ei2VbmM2SEvwQU4bbs617XRh",
  "key15": "PKPaFFJZWbfk4cfzZV2d1u3DXqq8J5p2RP8FSxkwqZncqmYdRaiXWeD2rkg7kT64pYj1HQgkLq1Es45jhue8Fis",
  "key16": "5sAZm6wbJgyp8jZi1AjTFeFxpTeKojrVdebeosG4N47mqVGxqJXF1hSwegjjVQ3ezsLpG9R2pRZzZ31o3rTmGx4g",
  "key17": "55ArJywirk2fp92PcJ19A3r3TLdX12SZjW8s7jaNtZpgtfVTL3wAKUyh9Rgnd8YuHf5a8QLHQbpboiJ1q7Tsyrfr",
  "key18": "5ckVW5Xks1kP12QbUDi4hREQUjMb6pysbNqm49DLizEQt4Edevi31BKspChVJyEGRDuZfEHZULkwg5RP1AarGUF9",
  "key19": "4TB6KVNMX6hCkcjiWYnzudv29AhYrTDKeEnFtUvp7Eg4haSEcsFS7wgLgu45inDhUDyTfRy2bvDbWkEf46wRL2us",
  "key20": "2P4LbPFsKDhQsB1zYXDdrakDFAUJPtgSon8j77rLKfhruq9idtzdndkb9qjyo5J2Vgn12ZoBDgwcTqbDs5pgiLXL",
  "key21": "4r3KPBL96MrbuYdLgjkarENxz8MH9wQNMPzSmGhujtw8yvoj5C8cmuTkfigdeuqthUzeuxvBXWRU5VHBoctasBH",
  "key22": "3sCuMRbwp4vAXnjX2FtfcEhKJr9B12zQcyaFK7SF8JQ5QB2ZevCzf73PJPDviXzac7FHAzvDXQoP2xgjopApdaKJ",
  "key23": "4ReESQ5f6AzcJj8FR5L6k1ud4LB5wTQLcxjV5N5UEepPPEZet8oqLELZYKk7ASDiEcmrc9zVtmor9NnYBA1Vf8mZ",
  "key24": "3jHronN6zxVnNpJknFRGAC9DaCuMYPaeN3wenzSFepcTaSgFF6MYLCvKGpFS5nx5mDFn6L69dMrnVAUh44HpUz1o",
  "key25": "4uNggpbR4Umys96uQggGFrA5PaDvKmcqou6VNy2HziFzCPZZh2cPpef4q9WfUjXccXErjETqbhU3uug3mmbUfPGP",
  "key26": "5xxpx3RJHD7hNbif3iq564vtbimwdQgFXZnYJwBt2kwKFUrPBXEhU3teGWcrSfhj122GYyqTgxcghTzQvtmytSRP",
  "key27": "2UbMzaxo2PGkTebATSU7bVtUMPPTF8aF5DRNtcDFbUncXU8MVuZbLrEsrYuLsB7yqi2gJUCWjuUvGLWFCmqjHAEH",
  "key28": "4ZqmbMBERqAHiRkvaV8YvwvYLbAGAacDNWcgbDqx8Au3AimHifhQsvKjuzz6rkmVSAzFgipycb7vNRBga4rpgjzN"
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
