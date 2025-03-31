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
    "3D6PboqyPH6DZUbxQLX9LvdTQfN9KoNf4MnSmcXmazTzgpaAWEYmKcWJBUykSFMBUGsUZvkdaixF6hu2AnXDbhgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uieGL5ou58yX7aaoyB1D1V7BcxeX5oucqCRSNR7QahfuUrEA4wtFDecWayEBG3kMJwDFuPjPpiNCcuMeq74tPGK",
  "key1": "2k5DJRsHQEgACSVSKBBgBwcpaMqUGnbC2pnyNedm31pse1HyNQdpY6xHdASDsspre6mJarkNL5KfZdvW3Ddpje4p",
  "key2": "5ZPV4BYQWQnxRGgufW4cRd1GjfewDxHjQZjTxV7WtmcnWunLfBnV5dCuidS4guRrg4MDu1ngApS2iawEUfB3EqQP",
  "key3": "2p9DjL3c5oDFZV2mNjrXjGjdKLhXtaPcYEGMUgtmRptLPvG6cMEeLWbnr6qe8vgdT4wmfMcK9tVYnMmhZkZkH1nA",
  "key4": "N4ZZTYd2UzXEdSTQS2p3swFi8qmHyd6WpFrSvJVwdNQ3ahpPpzhyLaHnWB1imYL8R46ypW4sVvYPETVvAWZujcd",
  "key5": "3QmAJjwzdLqrKoJk5mw1gAzMQEkKLcuDN46Pyp9RaStdmfjKya79MfK4v5U9QWuDYekBZDRnEW4NiTnuUyCEyJSa",
  "key6": "64mCSybb5s1DtmgBLngRiQdAYqmMEVFpJbq81VHRXhDZ9UEUoBqZwW1hLYpViigYVvS9YeEVvtpHKWFQ974A8WVt",
  "key7": "auMYRav6Zjci6R6AN4neoNdEA7HSLxv8MxvPPbKUNrjJFwBuBoUXK8Q17L33PicoAdghpanmZyhD3cLnVUee2Dd",
  "key8": "2gM2GFxTunWy2bPpydoCT3unx717wPyesuGCh3UeorUM12u5BahPMMq9B4w4v5tCVxbQpyy7F9m3RYPMxBnRe56F",
  "key9": "3VfL5XtdmXVXYqmDckDvtPSaLV6Z6U77cjEnQ6ufyRYn6aGRSDvxoyiB6vULK8bXMDvoZznPZbRNPhdepVBjLMz1",
  "key10": "2KPWpRnnnCme1Q8jvUe1RaGkY8u6Fpw3QtzB787oEtXsDjwBygnJKxnw7Jo85ivUnr57ck23bueeyhJ8Z25Ri84o",
  "key11": "2fs7s2BwAbwqb2LqaJnRBqqbC4jR7rLsv5ZcNZzUVN3JhK7kGdrEMfeD3nmC4YwGHujyMQiCXy3kaobenVkPH4wV",
  "key12": "T7fNQoEwp8QVDkK5wMMr34RSJCV6q4WfLXWiGp18rQYq3sxVmuJy9T6KCpsUo9DdsV6XJAshb21epJDHPNntHJk",
  "key13": "22pNa7oRaMiCDP8RmErac9Ra8nQ9sesR3Zp95JCzT2e6cLtj96LW4XJUQVeXq1zUiizJ9ncC2AoR71rS5TzuF7WZ",
  "key14": "2g9kuJBZ3MM54CwVGFEcgS2286N9K9SvEYwPJLrn82kygxR4Nr75D3M1BnNE8JJaD7pX4UZLwcgiqwa8rkZnoH7H",
  "key15": "2LX3aXAsXMZLR4UQz37GSn69mpdcP82womMAEdWtJ9EhsNVJAuP8kauXV5SjpNEX2bM9HYqrCL2PACSaCjJ5ezuA",
  "key16": "2SaVg49YM4pvtRHPzf4R4zNk2QhZdushXfZ6WSxNzCWLCA9ZNVhq8W9Sf7Uw5qME6nMnb6VYD9YwpWNkctgxAyUx",
  "key17": "2K9Jfvm8SDrcg5H5HyxJNBbSMnsonSUxAEpn5KBMwPBtvibyivpWGuaS6K5pfWESiZMnEfC7Poq2s5oxuenhD5aF",
  "key18": "5X5Mi3keBaoHY3UVpiVdBfJ6FGeFumfD473MLaXX8opNGShy7jc8LpnwP2cu5TzQy5GtBNvErA3f2YYgJrZrnHnR",
  "key19": "3MHxCNfDDPKWvazRRA4YNqkF6i5RueDatKE7hBCqoC3xEvG7phxM3tt254Gbe6xfi4LBAARWp3UH8zPdqLbp6s25",
  "key20": "4yf5h9Rw7AmTxbCezvzTYUeJKz7N1MhmiRmGdbCyMkaEptd2hhDPYyDFaA2ZqbPZ7W6xfJKfxDdyK33CTuc1To11",
  "key21": "499d9gSPvf27H7H6XoQNyZT4mQGD4dm8WGafztHgq55CMR3dz8T3MPehLaV3C8HxWksYaDuuchxNZhATYKUf6Agq",
  "key22": "3fF7kZGV2QQkzhLGQz2t2xSpM6iPtfJBYtRfykrXXVc6i2SAv64kfTfNdc3DhSMHNTtvPsnYBFhxEC9weSz4WyqB",
  "key23": "2gjtdkzhxB9bnCRd1wavuP93YqvanC67iEeu4fLkAFt8XBSZ6ynmUjE7Zy3b67fPs3rNUeCp15B5CP32927PozkY",
  "key24": "3fKdPS4qH6geXGK5wYfvSHt6DrP8cgf62uEgyRMmijzsbtTATKeRAvBGQy1JzRqrdpYbjQ7ui5pRNuTWzermYgjA",
  "key25": "dDvK2T4fRwzg6nesXACjp9kG5KZr7JCM5DkV7gdagJrHFycYaoDH7GMByCM9bSboNWSyHSToLAP8ybmzovF5KuX",
  "key26": "3FfSUAFC4jrBSfDBC1AfSX1DRVRnnoiMwD9bop5nP7hQKHHxPJNvncZExH36AnK1trpFQefDkK3LqDKLDgeS9BwS",
  "key27": "4n8Xyaroxj99qaMMynSnmLMSk5vg4GepJ3N9fq3LqWn6u8GkcMSpzzjWJ6wSaeQhKSE3xBGUPvBvzbW8bpKUefEJ",
  "key28": "96bNLmgFtEUCjMYmooqX61euvNrWw1zivs5JqevSqtzpGwprPmpNEWfaLocyedrsavgmVBHh8RdhXj6jeRdPewD",
  "key29": "3N3eSbpQs6YVvm5qCVy8XfxCfpYbc5UFdEQRwNwmgAHHJKvPxrjjxh6JGeEFHJGN1WZrfsPmUJynLeUhGHQQbaRG",
  "key30": "5DE8eJm6xiybv3QdyDptW1rEFdDWpKYHBAwnBa5XFaX3e5XNEhijek4BFS48Fxv2XKku2P5KDpN5EYMjfprpEaDA",
  "key31": "3ugK7Wk4JnWJvPHS35e3PRvY98oSdyvM3A2ndiPAEva2GGR1gV19ihAj1B4GT3gX1GahmHoHRSwkib3Qkt4tfdD6",
  "key32": "4Q9JVkoVKBkmkYXmxmpEAoHgv7BaDaWuTnQup1fujt93whcu3sBqyXwwDoowbyN5An38TddbYyS7noZsiCRNjfsR",
  "key33": "4VSSPfiY6F43abiCaN9PvXNgzQywbtGsoNKDrNw93N6K9PJQnH7TYLfKDi7pj91rVHr6MY5icjBnr5n59HTz5B41",
  "key34": "3Gap9YQsjVmgTPrb4bNd7EcLqrReRLqHicCvi8RpzjaQTyMMwY5ScpE2Eizvph14v82FFQn9Rp9hyuUQQ2ppg5ob",
  "key35": "66hPWe2id52BFAJdvVWvCEZ9mKBsEnQgEL5Duq7HP9ojfs2PrQuQ1KjxNepaJQ1oyxwFGt9Vm8v6bRktpPYgBStW",
  "key36": "tYLZFSZrqky58bcW37FTmjuSYbndavMGaMUTxeKwPai1wSfptJF4sD2HLjmi6oVKiWQh6rorA8UeoYqAvwT5zpA",
  "key37": "4hEfHSmtckwpEm1spXQaGJyb97uTBkoekHBmspSqGpDxGWXWcxYXJWWQirBaBUTZzj3MS1sa1QsNAtoSTatTmzdC",
  "key38": "2vppfuFhoSPPJGjtZJNXmChpJZofo4rBmZgE9BdJEjcnUgBEu2Ux9WgxwQehCP2EZUsywvbe8Lx8suXKuSuL2FG7",
  "key39": "QwRCbmBZxgJfgdYAu9eEGQiBevZk4YCbj4azGgFhukx2Hru1Ub84NdVGq35cz3nV87zzo1NTftHFSjrTweirM1X",
  "key40": "27ewKYjZnYH2hxe9TTq7pERYfQ14M1vVDcD9mDqHtAzsGc11XamXspoq9mEUTsFGaapdMrAucKree2Mbi3JHj2ib",
  "key41": "jeYUCLtG1dvMY8SvbrGz838XeQzRUAW2PQeVRJ1tzaeUkGhhHFNQYLWaGZuh2rESDwJMfgsmB4fo4EbgiZ94a8W",
  "key42": "4KVhG2ciTi5yDQVqb32U6S2ka7DxdN9V5ujZsym3URTuvWfQMSeaJDKMK72VqAZjRHSjNmgziKFXsEkVSaoZNe1u",
  "key43": "3RTXMRFJrUaSCSR4SGPA4b7BcFPpNZLgPy5HdvwVHJFjJVRzWx9jmH7dLWnW6ujAoL3QCbqmiDRarcb7xh4UM3Wo",
  "key44": "3x3EWzfQHZkNYwhyMSv2mtr3sxwrozun1jAGzQ7T5wvscxuHawww9pNs8BEdRHoJDDUFPMbokR3RJirH1ofc7Vu6",
  "key45": "2Tr3dexQaqGUq2noK3x86pNtkFQTFRMYF47kL8PFzCdZxryRzDMjftDfZAEAapjrkbMEDwrCPEUm5iRptQuzmRUs"
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
