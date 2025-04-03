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
    "4dNSYKkWetDnK8BfxYKECd1MMx3JGGwKyF8MRpLc5QVMCYhti8Wv2DYyFHrh5ehav2j6muZ4BAdt5zRMJeXVKpPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqbdiCvB2KkcmDWLM13ted9JRfSr3sRzCS7gAxR3rsGQrsMmhkJCsiKxYHvdVozcdesuAdvPbtp4vYsh29kzGXs",
  "key1": "2ZEvw6wu56hUZtrR5HXBVqSoc419UaWnPcT5y3FwrJhR5gg7DseFh3yXktqiEfeYXzAX9uejyucMPNP9fs3wyZjT",
  "key2": "dMxri8FqZYvR2VCE3kJEhHEfu1NER3yHh4VRvL8CcJtXgxahDg82pfzg1yhjktbFutvpF9s9cC7rm1AL8dew9ZQ",
  "key3": "4R7oMkHkfph2gDyNUkSKprkzNfbCfqsYHv7kZ2Q4tafTeNdz5KMpn1CctYjD6FemRZZ1XRW9CF4fohtMye2etCvM",
  "key4": "3wJLVhcs3MYkL9SHVvSi7AkW5puW8FUm6X5sBvHa4FPBodjnwVHtj8fe1nZxVSvGBTVkZMFMXYxs22P1qRhLriYG",
  "key5": "2UZqTFVmSTv81rNg7miHw18DoMk8QSN2jhfmHX4efVhSXzrd15zPR6wAdRgMtwPe1yq3Kz9eAFWyYpgxTdnjnyL8",
  "key6": "31VAjrGbUXhCGvA2ZcrLGx66LWEggTi3hR2NjaLc75YcpWP5A1zSxSf2zjWQnm9ThHv1by1HeLKmskF9H33hs1xP",
  "key7": "57YZ3fXSA1z1ZMYDrYYHcNucpUFNFSS5HDSRJHxSYauY7W2MsBNNUjExrPmXC3NuaSiShmLWvxd2pLb5fChmuMaW",
  "key8": "iqzXz9JrAEox8XYX5VhW2qoE2QfjZymnn46b2MccbksM2vtFvx8UiVVrYf4nw4LF8PY2HG8NkGVyAkWY6rtufj7",
  "key9": "5KrYQpqSkifP7Mb2o23hZt5NcqphZahMDKR2z8fhQzJPsvo4VnrDUJZZ8djxRGT6b95TNp4D5yaDHUVqJST55mAE",
  "key10": "3e6REeUt8YdPXyAL7Nim17UamDQWBPc9gNKcKX28R5GkJJLndpTRwZS2fhEzsYRswv5wcvf8VGSDjwWN3B2RAx14",
  "key11": "3VEKJ9Bd3PxczCgyHae9aKihtPT4d6WN9RSoL9npK7e1X9xBGRSxxw4AhGAggR5RRA25ZQXhvubWjL1uE4ujnFK8",
  "key12": "BZoZbpyYnWtWrJ4DRZUcauamDFbhZ4sZRnN2cURx9KEyoF1FvefGTg35KtGh6eJ1VHHqpSkuYyDUC83ccdUqdwZ",
  "key13": "3wz4YqfejDnTqQb6PN8BLx7n2pzXHnUZZ3McuJkcyHb5tAMybptGSjUWhYGPPXNQvrnCj1tfzXfZCHLLUHgkYf8E",
  "key14": "514EsqVjgvA9YafvmuvAtPeNMizj2Ue8nV9sM5aX8Kh8hHpZjJUTyWzKyRMGb7quH8sz7JhNsttFq99Vh6HTKjes",
  "key15": "zUhBPcuKe7Tn9pMN6hrjBqS1iH8jhkyQBDRZXbhkWRwrHYskyYZ2vpxz8Cz85PEx2AHmNLEZZgqbWAG4mrC4mQ8",
  "key16": "5B7kSWVrAkFo3WU8qSTPpdEx5SPqQG4JQkmk7bAmjfcBw4AFLUGAXy1LDb5LLcBGyuf1jra96RUbFdnSKqBWrxUb",
  "key17": "48W3XYnrXBxMpEZrChvQXUeFuV1fpPwzV31d8kuKZ9gZvdgGvwNUVEMzowao1QBTVUHhpGquqfwkUHBg3GVXsMPg",
  "key18": "33uYErR5JtmZE9e3uBAXN3iFednfo6DtDmZcNx5K9Q1Wr9nq85xQg32kygXZ8daqjwubvXBAzbKCKxKkC7rCBvS7",
  "key19": "9yRtSU2AmTRJfpHxzpuuyGDafXRiW7Cvq98L6xEK4cxzCrUNRmicjw2vx2PPWS8LpwqUkgHQ8zcskVDQniijKGc",
  "key20": "5fP3DMru35DdU7XuUbfeaFPcb6g79HmyfkW9pyvhkFxxGHCYbH8vDxcbmEb4sAM7oRHhy1ZDoeGyHszLy5c2Jg9C",
  "key21": "2tQnHyvvpZLiD49xoRskjp4QRBgs76DTkcu8mhxtW2s1EfaRimmPxBeF4aq8LK2mD3MkzW8X5CRN5PsxEeThRbUo",
  "key22": "229UJGizgCrEqzttCr7DdHQVw9DkDbTCUeAPS9MBmLxShaiYCXP62vtQuBLRuj882QotFPC8Bt9T1DE5L2yYU2kk",
  "key23": "4WKsvLk48jkz9jckPjPh3CEsovoqHXfqGwYbDUrZeModgUrdLqZbLfCcfxnJ1D7jbSJvzAkX28tNT3aHSGBERJUT",
  "key24": "2jK4THTpvUeRbvN3Mb77qMQa4TPyek64Y4oqbxPZ2fwvpfpppxmhxBmrrTXjVtiMLXVsC7cYjn91Z5h5EqStFicJ",
  "key25": "5pVacY2uA6xdxT2bxCiQnq1tEbUKw2ZtN6KGKQh9KJk64LurMbL5uxfxekRG9guHzxxh28oZswWCkMgjsNXRMZPu",
  "key26": "3H4sLAyxYUAFFWYZ7tfu2ZbNduADwxQzu4CrC6dFG7Y4DsaBa9LH8bCCLPu1gy3GumkTJNvDsivKuwwRPhJFueNw",
  "key27": "4FyyCYSK66pBMDDKeZRD2Jmucf93RQMxm7tTPYJKbRbj6w6nBvejxwP2DrDT4SKfnLfekK4Lon57YeV9qN8z9HcG",
  "key28": "2oQihHLJTfmen9zKii4BWJVYRgtDnRpkckmF64rPK4o6aB7K89NfEeQL4ZD4e3b9uYooQLuQKqsiosfCtecJ35MC",
  "key29": "3MSF7YHyshgiEfzwJBLRHxzWtvceXvUsrYcnzDUL98162wcjwja9UgyNhcrwViK4huE8VwpdyUhsvJeuS8hWyRMf",
  "key30": "3rHXiAPeWZReiVDT2xwEK7ueCh11SkSM7Ye9m9zx38LaBbfjwSwdAtmxTK8zoTcQNaqxCiKLMw5Ei5oWRukeWfJP",
  "key31": "3Xbq75DJhUCGueAxhU3digmwrvCaVNg5jW4HRiHGpSFkhcJpPNUY37oNPi8SNm41HwgUbeBrcMPFGeMKFJPrCwxx",
  "key32": "3X9eegQ81ukUA2XkWU8hCDa9TYyN1o43ZsqmBznPUCDvAortKThJkM5c7UBZBSCikCEp6NU1wUy9dXc2kkRx3uZX",
  "key33": "3CXHdmoWkvqtxRbN4aCEUS6xicusefx8hxAKN1Q6Hy5FHH4KQmZyuhCpcbzgQDjrPTYQnwqxjabHH673vSrV7dWt",
  "key34": "4bh3SGHE5o9wFzj9BBV78K7uLepzW8fxK9twykVQoMqob2rpECo6Lo9RqssATNQJ6Qr2kGBBDUmWwRYnpYieFnc9"
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
