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
    "3bvXW2VaP1VYWMRh5dBBMsYMkBCTgsVZWQDjqkFy4SUgu4RvKJ3VuvAuSeJ9e3ZakkSSq6uqK7NBENMeMsWDzsww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvGEJsfy8roqunJeaawcsX4HHuruMWobViNNzay62bdW4vn4cLdvwbYS7MZLBN18AmNZtLJhtcG4ejTDksW4cbs",
  "key1": "5E3LrcnwAQ1Dgx9jtgvuyTTTVhLmWqNkfs1KpqPAUPC5p1jDeFPcnrEQk8bcYE7y3MSRSLYtWBNjwnoEW2jpVRhv",
  "key2": "2VT2cLeU8EZKKLaWZETD56tHXkDCMvKEo7FB1KsHC2u9fJVEdFRtzw27ryVCyufM7ALi45RQN3bXCykd627vrn6w",
  "key3": "5eVefKgDH5bmPLGUG2Z7SYNT8pzWqakTaX6VTVE4U6myNVCiAgbsxxY7kPkp4M7oFdBkjBfYGkmojWqhY93SbAkr",
  "key4": "2sVnxUvcBpZHLmKUKNAYXtUcc7jhb8dzNQXQyD8XBHPEsCoerVj9E8EL54jyg6Zwffwue4appBnXoE48JBir6ysr",
  "key5": "3QenWGWZb5GUd68jDLnJSTMHPu2ipvd5W7VYqwnTsxFWNHpoHqAGPN3eMotHkyXkeJvHZHfxW8nmV2YAK5UyNUKK",
  "key6": "2g3HtyxPwMaXduK4y7d9oD4wkVv6BzFakbWeGmx8mUuA5JXzHXNRmTj6VvesvaPVA21kgeZWhcz6Eyot7tn5F4Zd",
  "key7": "2hw88mGQiU3AJRv2ey63dB3krtybRgNVLHgJWKgUEPg89G4nzTY6LcVsaGjeQpx98jNXAHehnzJBeP3bxXe2PKtb",
  "key8": "5YNnzrSeN12cqJz7xWcrgnHd4VfQDhnTtggfZ9h3E1hFdhn4Yexqn2ea32SbYcCgNQecx9qULddmmV81KjbFd84V",
  "key9": "5T23gARt3oi7L3jvxDLrWnnNJruFETqWeDCApkzMXjZKY7ETA7mCbhuHNB6E379rACN2GJeM69m4QAYkobpaWC46",
  "key10": "62FToJo5x32178pU37hLwUsimpKHEXZrTNEqDA2z7n3apDaKNWgaFMuQ6TGoeHcHFomSdEkm9y6fPN6mUkcv7NeB",
  "key11": "2WzsxC4Te5C7Hp6LwxLjwNEKRkBTrqDB9xHgrHw8AVWawHwp9kxfsMAtSJVtayVMFu4xpsMD9tVo4VUud3Hmg4jf",
  "key12": "D8XUWoXP8BXSHukXhBDQ5RvPDpV4x1hxPJ4r3bwNdBjy2gkACNghJA1iyMafVvvg5G6g9csgkcozosSHX75Ph6p",
  "key13": "4Uize4po7C5UPAkbETVEqy9n6tLDJ1zLwkeYk8LHFE3AsZKATDCR9Ly3NTx3LJrLnPT4UnGAVKVVR2hAUPUV2wWt",
  "key14": "N24xVPPho8weZrv9ZyFnyfATsXjqJcGGbGkTcX2GNr4f8RFN1aeTLMwxhaknKPj39UQUz4MSoaWSam2TxJbngMF",
  "key15": "53xUPPtshfJ3LZKZPrRtkrw173r7bL1CHGqFCv5o8fQqmnhPHr3NmVcARcFsVAfkfeFJ5xKVN7HHAkB35RbWJ726",
  "key16": "5AexQZDeXmQg2PvBXe9Yz3mG8mW5ddPuQszFbR1YAwEfCWXGh8rF3jZsjE1jymXQaGkuNbQFDigPJayTW17Zg7qj",
  "key17": "2CgwPcnEzXsYLMba6dv9pMaPAzmCjWdg1BQUnHxwqy9X8KnPPC5VFpdCe1Gm4hZdxa9xpfEBYywpaKNDA48CqiDJ",
  "key18": "24kjYJfmLbZBMLfGHiTxnY1nc3WGEBTv9VavjBmns4kHgP48puKqMrZvYyR3C4QYStGTco2RDVFo5XRFgmuiJpr2",
  "key19": "D4dPV6j6LcjUidhKMkfTjxp5D9EaH65yQvwLVQxxyXJqg7964JwxSMeUeaX9XshE8KoGmA586XRfSME5q7iz619",
  "key20": "3tCQt67fNkXFPT4pYeEXxqwPSmJ3BfxWbGXAb48xzCGRT6iQLbx5hdLKC3Ggd4bjB6GNTFMo6DTLjLEddXU8eCrm",
  "key21": "4g6KQdHUrgtewUCR4BLuF2ZTtsgx7up3HjRsMqs6AF139iHWBz8dTRCg8djuHfEbyAEwZ49N2dg53jeauwdPGVqg",
  "key22": "5YQ2gTxpEun33KsaPY7izf2XZsNHp3bk15hnwmMr3ksx9wmH49LWe6pf8xTaKBZb49snJ12MZd2PTPB8oci5JKzq",
  "key23": "3WAUHyNoEVyP19M4DJ57x69BTqoKagdKeh4ZA1PdWESnpXKRQT9zSP8yGyjGfLGqmkuYzkYNrHrRi8Fo2APXz1vr",
  "key24": "5cY1gQoMARKZduEkhEwtvksVKvwR91DZ5dAE3fB1ERKc4PPercgBNPsyGEBRCx7bPMZndZPbtKe5EveWdBVQ93GH",
  "key25": "4RQ9qU4MWzDvDwVqKEc81qyfrSRydLUd2LH3PxgNCpNo1WAwt6hWJAyHXCP4qVNAhf2J1brbp8CSAdGtbPeyMXCf",
  "key26": "36YYshFqnLdCHzecAFLNj6ARPtXRBaueGq58bfDRM987PaxnorHMsQcjuDXDtBpwHhrf3BamE146CM63FAWhUZoy",
  "key27": "3sU3emYCis2dXEjtcY9hrPB1QWcEbrR6TwNDYCMkiWhwKqPsHAeruaF9Zt3qykiSSK9JEEhY9v59xSedBeUaJW2S",
  "key28": "3Wq4WojNVT3ACYWd8XkuQSWwMqp8Lq1AZLMo5hSNZFdmKKkSnLsuoJdQtaGNpJK3Z6469azhcrh8Y33H9G6dFwtR",
  "key29": "4NSFFVNjcs7utt1dzANtNuBUA6dDRaVvAm8qDJZsdUcrCU88MMrqiBZpiHSZrZhtARxqPirfBcahJzfqvgyC7UnE",
  "key30": "3DvwVADxeS71WAv677ysCcuQqAsighuGig4Ka6EhP6oMGhvpHDidoR9AzZ5kVqgNrvwCUhUdfp25nheKTDcSKSbM",
  "key31": "XNR5qpsKaGGJX93cYdtAUNMcSboudphPLVMz5XNbjNdDAAu44AQxzqtDWrkaMTCAnVf9N95v23M8Tzw2dfMhKcM",
  "key32": "dHe4hvshjzWyRmZmN89RuEHE71xBSrF4vVzM3BzUDmPP3UgqtFx8oRtwJixdz6kTcqfEVenNVjhdAbJHbk2Msvt",
  "key33": "3a5gDrcgCQut4UnKy43huwNZT2m7Kh5GnmC7UpSHGCWYuG6DGz3PEACBRNaUdUGZgGxUtQA1856MSN9XB13hH1eg"
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
