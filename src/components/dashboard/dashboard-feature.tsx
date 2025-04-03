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
    "29UpCcxBsLbq7D5QyLGQgfMdVBzfDeiJgAdAwy9x5v3aEggeoD3PDSW5HFyPzqwkHZg6YFXfYhAT37yJdaSs3VV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXKVfdvFw64Nms82PxzXm3eG5nNeuM6FDNcrbo3CZq6CQhDb9SiUPN4YH1hqixo7s2Eah31mFFdLx9FeRR8Gcat",
  "key1": "5jfPBFJuxB3impCEyjDWiKDoCW16Z4EfWMACvMdCL6HqQ5udv7C3doVz4jsPQPWGMCGhFAge84VhDm41m7cAHpbo",
  "key2": "4nj7e2PYzaXQSNYmeM6j3vSYE36ZC6BurAzGtRiCuDr962F6SY5kHZAMjKYd9WGRNZP2fvdZPpdQcned62uv6vYh",
  "key3": "5VAx7LkFYh5h7qF1SLmAbYT2R3fTdBfxybGgMAL8L6NzQEAZrDAyioXtzHJTmyVp6bRv9AkfrwRufEUh1pi6Pt4G",
  "key4": "5dM8kL36XopnyhZJm6jaiAHzQnYQM8VaDW4g1iqdhzsHLsLF2162YDJ58u6e4VCy4kB39fgD16SMtU2vjrX14W3k",
  "key5": "52VEeAdQ4KFNMXoFptyuyhYj4EMfJ2CAxEcTaJvdaK2xVyYneGmTfEqtyW8zckATBT8aWLUEodnMVXj7PDep6vvA",
  "key6": "2igs8y8xjPAGCUiVNdWbj3qwdqemqVTjCWvP7spVFWoy2fv3aJgMRde6uQ2XRsJTcRCEzfs1iPtrizbeA5fa3phe",
  "key7": "2k6G4AnoJ9d5MwiPiBv9FffBfR58nGzNDfevWd4QM3cXDBGKocEJTMugciEQXZuT61GVWtAjcTminyTMuMcr3tP",
  "key8": "3W7CpoN2usk3bJEsi1tKQ7VMAd3CjowutZcwLdajrfe9BrGRodbRTDA8BPUAYXdRgBsngtMMnwKUP5ykPqHgPZHr",
  "key9": "5vFkm5VT3VugmCfNcfTWnV9ZTKuZ3MH7Ms5KGKZyKL6temyzfdFBrENSw5DqcfZ4UnBX5U2R44VEPY71MxMbDF4u",
  "key10": "4LvvRwxZ1QVyAcx5y8qdP2UnD4NboeG18WkAKwdjv7XsyKKkmgPMGBCMWYgzcHsnbQF5T9yEyLdSaGF9F8oGMGHC",
  "key11": "915H7yNC4Jpm2ajLi73CacpqgabbxxyB7rCBoiRx7ZbXtdygN39ECu5sZ9z5RY8guvv98R5GbYvyZ1ZbhskuJh6",
  "key12": "3H8pw4CCWRYsbACXFX9qUEDC4MjDzCSpseCaxskFRhudpGnMrcjfUm1pVEYdmYFAAccAFqA8jMUkEmiuegj48PYo",
  "key13": "Nnm5Me3C7ANU73Xg9B4FYp8166MPA85Tn23pAL66hrYsz3eZNeySjT2CJP51aqqEpANfg6e5cidcqjtvkyjwLw3",
  "key14": "U1GTqvMSVwyXH3ojoeosB6LCCK6oCEwcKk8tdXsyBPkbheUUW3SpboUUqbGRYn59MvXQfgp1w9diVgEVyJA9U7E",
  "key15": "6siLtNNYn8KKh7mUPt3KgUzxrtt6HuSmMJ4RhyLELQhWfLaA7hHbX5NdZkFtxP9gm3fFo8R1awVCentWQK2a8U2",
  "key16": "qXZDe6qWcaqv7PABUUHsCXgF5iFEz6HQEGuzjhTSb9xGKijQY7ozWfmDokmZXneqqaWfyki68DhkL6k8y2H1SPm",
  "key17": "q9hiQWSJAXz6aMKZ2pYn95MDXNTTtm69dipAL3i6974oPJ8x6m1AAvtJXhCjaQJ2fHRwX8DXZ7ofFNKV1YAt4Z5",
  "key18": "28S5kxPb2BY5VD3PKrUVKF4y1sscf9KRBx4hsXV2iZ9qRD4pC5YocuhUq1XCKhLpDt6aCBv5sa9i5ZNGjjVQ5DTy",
  "key19": "M2bsre2YbVkTGmiNpKDtZnqqeCTCxGCZcsCA2kJ9Le53qrTzC8J7uj5g6QX7VxyLCDGAxiBoFfmfdZsGpiQ6WHZ",
  "key20": "3QiGKCdT6vdqB1ghPv4xaeHqum8HoK53wBbhuTyaYvmNePs3ESkZX3YRnjF66ccYmnjtPMo3YPaJnuYGabByoFQz",
  "key21": "5Wj2k2YkcboZ9XENW5LNKTCtwogfikPvH5ik1tLZmXNz9DuNFfdQ8Ui2DpfS5ESiSiNeSREJ6rVgJNj1nreTRKGQ",
  "key22": "4NcRTy47YDF3EHe17SaS1aUkVoNwJ46t6y1dNdQqz2d7uDLyQXWdJvohQBh1rw6GpKve7ZHqbFgYEAyktJCvVHJq",
  "key23": "4tFC3TeXzevRUjFTdUdE5PB9H2FomvfjwDkNqUxNybUFWpsm7ArCymEuy6SauX3vfoTETeqdJhEackya8ny9KcgR",
  "key24": "5DCtiiSXtXERiXXi5H5BoyyjmxqyZnaYPmiDbAxYY1vkdE98W9k86n3cucbHQu5ycc4hxygzjYqDPZwkM1jQUbEJ",
  "key25": "43oR2uLcELvChJLLYRQUHGdoPznuxgepeRJT2SV1FWFBaMVHnZHkippZaTFJvRG3wnn7QuPDx3dBJdAfYDaFGGqb",
  "key26": "5aKFjbSrB94YnPZzruEgSvL3i1GT53oP3WBQ4N98hETZ5sAnT2EEhhirPEapNk77VZ3DmMiTFCoV1kGE1hhCaXY6",
  "key27": "518qVfHY9uxNSFb7GSiqCK2KqrBVunWSc66so96fjgynguAgqyPAR8kXAZQ3DhswgnFUrWUqzBEHnri4R6tNQLaw",
  "key28": "3LVqGRBJsQr41ikXRonwLdN6WoXsAqwJn8jNpQUetpmQJAhsmkWkjAyoA31XDBsCy7fXvZMtvLTBtqXPjQB3rKZR",
  "key29": "2UHfMa8jpQCZeeL9NPoPYXrgo94uxkW8ZWeTxKFxckE2FLWvnJHJ6swA8fb4ndhbRA1QqjbizzfKFm9oQAPbD61z",
  "key30": "U65XuNcwg2o2RoPPoEZxP9buL4CnCuBtwFVyVPkVgNHcSfxSUg7W2itDsSbaHH99sZHSKTyD4ka3GjfH5mFVxVa",
  "key31": "41YDc4QyXTJpccL7xUsvahAGAGM73GadFWZS6J18yCFgM4gxS2yNCcHgNvTHh8tqgNqvbLP2YDvCcavJ9KZfE9G6",
  "key32": "5roiPdB5kFDzemYyox8vQRu8DDVm8ERkR5bSDk3UZ6hwYRQvedysdC7ziqSg3QCPtBe1vpFBudU8HXo5boEvP4pw",
  "key33": "8wY5N8z6U1B8YS3d6NZAFQJSW2r4ro8ZXHRySBo5KBHJRm86WyKbRnHkYzyAxwvVvZ8VTRc5CvG2s4JkbJjprgW",
  "key34": "4kBSBjHrrvYzZ3f7SNEWcb4CLCnySzd4mxuxig2kLKLmMjmG8ppbDErd4LsbiSfMMQ5AmrJqXUwzKBbmo5L3fAML"
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
