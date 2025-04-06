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
    "NKb7h2WPq5i84bXUBMu6ceFxxmQSjT5Ahq9oN91bcBM2jt1qiiNhhuFJaukAvdEEncpwQ2zP9QewC5psL62QUfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCAnEV4JtYLuUyWMs6v5qdPc8vM2utyrmThfRqMLai8fV6Ga47dP35zuPqMD1xbMtk295JCf8otLjBtcxHYTmq4",
  "key1": "5sJSHmXAGRNdVssLuTidW9wkC7EZBZ5LCFuT3MU2h3v2i62PbLZd5QkNAhxxoaKA7UYbLcTHhm9tzwKTnjjJQoKv",
  "key2": "7bCVHB5gE86sQXDGUa4ZA7QaLovKXCEgmT4KFVeBfy8sM4DkcyKAMFN875TrvfWBEMG6Cw7px6UFCJd3aEVrvng",
  "key3": "nXpRBX4H97jJ1jLgLuc25ejXWaytgzCegP9SBwcsP6ZTAUEYrv6RXGSyHJaBSJLsomc3ccFfLR4fF9tMFLQkFT8",
  "key4": "5rvfu4SNn5RA8DCuXRPfQUEc8tgQrs17Cd2bZRMLtKuPNFVvTDNtPey8Vw4yZEYiHe9AfvgFmCwCkrHXRcqoksNb",
  "key5": "2iAVNnJiFtUt69vR3CaE299Yt6ZuUY1TRDzdepY54j9yvP1VQiTavE6wzXRb7DTKuaK3j5FomZvQTP23FaGo1XVF",
  "key6": "3bZ6jrPWETTzDCLDE2ngp28QWcPEDCye56gGETZ7DGHN4gW6zhyCDc3swyPBWeV4qcEq1BkkVU9ho6j39i4o9k9j",
  "key7": "4vwZ8Cfxuvs1YiSkgaNFuMPo5URQqCKhSVPbKMtBUwoRCQaDx73CrjtVHCTAxyDksFRN5hppthTF35j7b4fQzJ4s",
  "key8": "5qrzKw49tsLWRz6GyvjJmsdqsg5mYSboBrdDL1zrMN11qDHYx1cxiKkJb5pnHd1LhEMxwW6JZehvdFsxv7Bd3ECX",
  "key9": "4KLLVZR2nHabeSWSSM1h4LVLi5QvzNp2SwH124ojJiRzJo9J8um69DxLUb5bGpHoYPcgWSvbgZPGcdkoBYapofdo",
  "key10": "3HyPyMDhzQQF8Uh5fGXQMXyvjqjvFatqibYvzuLTAe12oeEzw2LGrYWP6bgk9GHBGZg1VQjHJgrszQMyWm6hAsQ",
  "key11": "z6FLUaDDTDctARUByU1H1a6g3cPCqq3cWV8f6d8nDp7y7pVywtLwjAHHieAQ3yvfegz7pECoTCCJPKMkTo2JPHR",
  "key12": "PF1wFbdR4ssKyRj6EEmGSs5ThT84x17vFsGt5zZmSkND8vZxxz2zqKcnhLuRAGoUX72hSv2eiSbub22VdquuFt3",
  "key13": "GNdvEqiny6aDKByvUtmBwCzNfJ7paQQPwLPvbosBK5DFXA3FKGeQpKExLhxvjJbdUcaourgXZKSRHu2N2a8FJi7",
  "key14": "34Qs6XULfvT56Vt9vDvhJetPL6Y7mNCKzo345ww2vyGjyG8QrwUVr9uQYapLHuu8hxwTwNykq3HkboH3Y8JeXNkE",
  "key15": "5wwCKyuwzxKmcotjRShVv1rdSJGsnsUb9tXPB3RRPayJeUvNC3zrj2uzas2yUwTRa6pcPpgXXyjeamSgizUsmYPa",
  "key16": "33HjEbB4By98y4ty5v7cDGsWbrSoa5RrbxFUm2TchhJHBGtUUUUwxXibBn6YXEGG3xftb8dd3FcnXgT6FQLoh5Eu",
  "key17": "2JwW2seRRw46xuAd5sRh7vS2caXenZJRw1d5SG1wBX7qnq9ZBsJFDYtbHgSyEm21ttCwF2eEAuzgxXstxKTC1NNQ",
  "key18": "2XsYbVmtwnAb18Lw27gB1jgwkiVBagAtgWdMNbFDZyr5JzqFWEy8JCEg66h1ZkcuvFZMtMxgwsueAUWVcUUvgQgA",
  "key19": "W35eCvSpNvAeXBSu3yBMP721oxuAWNEjzzreqXTbfYwrNwT5zpFSACNZmpSbZRYrfSvoWdvxiqzhzYRnyMdbM8g",
  "key20": "5kQB37Nt5KxrzYcwzRWdk8MimbeBEfDpbU99o6rKjqLX5TRBs2bkudXWwtLptYVbuU6AMEkmw6fh6dXNYvDXXzJz",
  "key21": "4efyXexTFMD3jkuVGJyHJrtbusuDHV4YVPTGiahsKyFoFh2DcMZ9cXFGpqP1HGMJYohysWaATBbovmKYrGRVzKpU",
  "key22": "4vDDSJYwV1zPNnQUdGPtUAAFhEi2xayWQiN3pqeeUkco8UrgEwgM3pN7xobckxzU8pSgfSepZgEdwJDMwfkN7jQd",
  "key23": "3ui8vNwcpiXd9evbHVsdtCr3ajAKAkuYEAuTnr1HACgVWzG1TWbQJhZDMuDMcBv7Wo8KYs5wvv6bpg2hojipTYF6",
  "key24": "21Ns2chJU9Jgmmv6XtB4RBfQkHmMNjEcUA97ojPMkmouEdKdcXdurjSxyw2pBhEnrKVLk9jkE9iciCVJdnvwhKnV",
  "key25": "q4VkBwzrZTesypUbSX99fHFukzgabq6CktCCrojWxp8rsW7Dt9XBucEqKA4vpogdXeotNyY9iExzmLRpgUyLRLa",
  "key26": "2ZEFb9r5smw5Wb6Jro4owm6kz3d9UGQjyRCUtMztf7yj6kGEDMVFKbhaGaBUbDVQkaa2XJygGWPXgEi91c8LNwSq",
  "key27": "LXaafiU51pJuJfX8VMpGaPR3bgtbSnVK77zusNbMJejLPo2MzJ4zggSxxA1tYGzo39DazWvFhcqPCtzeWTFqprX",
  "key28": "KhAEaHmw9Xx19tHPQ5ey2sBL63VbMdvVUNDP1dGgDqud3oEJtF3bScuec6fvsq95viHEBdza5XJCynsQF5ebjK1",
  "key29": "5dM48MHB8HHss3itXn4Fa5DN9TaG4KtfaGKawHveCWD4W1qbtT8w3pmHXaeQJPbNnmjvCPRfnF6tHFYAjeTyNGLP",
  "key30": "4fUkpG1JTJzcBxpjZgrUuPsaxQik6JQ9vGcHV8mTnxaghLocnQmht3jMmkj7TFhq6aqQJdCwMK3vtsW3A4hv4Ze6",
  "key31": "2ybvc7x7AtzSY6Qn5EAC33YJvikrmwpnsDohYbTCwrojQHXGVBWr78f1kVioSNwN6KZsbG7sypCZsdM8aWk7eaD5",
  "key32": "3eTb4REfeKJWfLANCqF4f65Z6ExFaSMWaX1ufAdkRgYEVKvBbwWhjMaKFP2gUViEQcw8MxwqNZJMKY6AfDtZibx5",
  "key33": "4RUSwsbVzgViMieScNyvg9prKUKfXdmf6i4HYrDzh2j9VkGXr8WhNKh74As4FUkK8UGn8am9TucsCUjkMTwRFPUw",
  "key34": "3eMVksdsMFSiSkvYUJSXgk9iyLSEMsY1vb4XKDLJiRF2xVdTvUyTx1PfSPLDpVaFykVTXsHMJYVarLMw8eGtQprj",
  "key35": "J4Lwe8A46X5amhcYAjyA35nyf5DTZzQNvnCWXaTXGvMAeddSP46CXKVsRA9XESuHJiDtoGxero7tu2pMcvxBpLr",
  "key36": "2zT4ebek48yJCTb8QPo8qWbRWGRj5foxMZrSEwPN9YNA1CdWE7Ek9TSZcZxz1W3Qm1eQntLxKXXQA9gnwFgk4D97",
  "key37": "56MHKEbGfED1rRX4e7A2A5Jk6pRoqbJjCv95dFQ5aoQA5vxPfMrzxG7WXW3RHTkgShQwqgRU9gWmHoucnxuL2QqG",
  "key38": "29f8p57B2t8ekfmTcoLXTXkUBHtGmZrdKics9apvbbN7pDTfjYVqGFNUk8WkGtauW7uqYLSZuX3o4Nztg6RRLq8g",
  "key39": "4SmAvUeqQ7Z7DdpH3rYpiRoeSZJg5FiWoAZHiWagSspnejBhTxNbg12d96KYaXjdRXSKD3c3adrtQND66RTkUhVS"
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
