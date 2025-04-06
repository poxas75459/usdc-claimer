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
    "5XCbWaCPhMCkzDggMb45qJ565SAYk4MrxzNsy6mA8u3eUaUs2mji1Fah6NdSKzwCZK9HcdfPJAJ4s261nDkC7age"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVGCnyJB9eijJYmRZgQwK97vN4zZ7eQkVmhpqh2rRmA8reSDzDKSNTFRY8osUTqXvgTVumgVkQBA7dzVUYC9xCj",
  "key1": "4A4exZnZA5uZvCZPVA2oDguwVGSq2QQvifgBsSPkU3CeRhfxiUgAVYwcZVX3Jm5ib86ZQVHFkFamdUrKZfRZCFck",
  "key2": "3SshzWdrYGvL1GGcQNccChAqf1FyX4fFDW3XhAdhhandzgxFAaGZkHKVT8qPT2r7LWZSiYbTeA7e1GnRSa2cMKkn",
  "key3": "3JWg3bNAPYSdP89e95zDgy3nXPiQhtLY8YQTNuqW16hV6xRa9huRdPnB18hX8H9wjFfm86tTS2dGx2PFMerVwX1t",
  "key4": "4LVekoeZLSHBMNFAZetzLpBHKhVFMPyocqLRXGYpDnmDyZF8YTuasePCy5HTR6aK74ncY9iKXGyGKh36JqvZSc5M",
  "key5": "32NiHXJv3VbUg1HRR2mdn1xD6c2uFUytib519A9q1eLrFLDTbPd3CzqV9xy64ePW321dxaFuA5wEeiYvzP3VqU1P",
  "key6": "3nTS9sHvNojEzajYuqTe3tszmqWKhHvakETd9QQdNarYPRJAdLotRvVEnEuSVLix9Y6aMw4pvZCdCpMRtV7jM3AV",
  "key7": "b3tRLW8vvouhnM1nJUT2nowraAiVKzxspK5VXonAAtJaa49zdwHp5nfCpL2u4d18YmN1EMBGYTGi3QSThxG7HST",
  "key8": "4qYhua6anoje2RcRL8kWpFL6MeEwy7a6H8DzaonJw4W78swBgtLsGEHJGs2jX2GxbNZ2YLyeFGZecy3kohea5ATk",
  "key9": "5fxdBMJUmEaqbCZDu2Sbf8q6uhsdA7YyEUqdvMLUFmB9Dc7FnbEemXSTCGhRH5nz9NCXb9r8CTgfZC48TVzjLWNF",
  "key10": "2cdCHxN7ZWm9irNciYjahDFJZYc7cyEBMbh8yuWqvj8C2R9uue7XEgy8VwsxgKNCoRf5YyyrXkkvyTgmRcWFeBkU",
  "key11": "3CUmRCpsdbAwjNuvFP6GeVcmt27z3zc5SixHCJfr7cv4f3RUnkgwBcVgETrmGXERnT6Sx1JRzLXgGYNBx2dyWFiw",
  "key12": "4GYMaJCjdNjwTawkbJ7NzcMimtAjS9Mx9Fi7ViwZ6cujuWYaDHzGWE5Ar2CDacCCefQdb7nGBKtdMBppqeqBKBFX",
  "key13": "4b7xwDSk3QhHvERu2oWYTSXnpb2h9iwvRctd1ZomCNHxGLLaELiVdCQoREUjZs6Nw6iafp92kDfKHsquVhw9f5JJ",
  "key14": "37KzBmAswTVoaem78QVR8ocdmafr41iXSfq882iZgqzuHGEDG6cLEgTfRYAq8KkJvfwQHQMyKLhoE9WnfuajKueo",
  "key15": "34jH48rX5w1G2paxT521A7ZLvvXWQfi5EYiBfLuNi3MetaaNbKBheCbLgQgQ8H8bA73xnuHKQyx3GxAp6dA3pMjt",
  "key16": "P7s6pYAbkRriQjyPriYj8zVPCVnFyZ3q61LosijDaYTMbHkef9M1nsKAz4nyp1jdABcFVojRMHegD38GJMxRp4s",
  "key17": "25FmcbTKySVPWZvAYqXGotSZGUDQFcR7p3EQ1iZ32KN4mmpQM7X1hxytfwRutKfVTa29Dz1Z1DLZcMeecdETwZnC",
  "key18": "22WQAcuwuzfABCkuVztdArvs2stGrw8BcHX7iY81jWaqFPpKAMWtKhP27vgKUktNuj3EbiM7ZkCcbMapkwT3J2Km",
  "key19": "4NsFrk7QKuVa9MPAHg22w4EBx9hd7tPf8naWfMjfdve4rUvP8Hsr2ChLF6WSSmjXC4HHs5uq8duNt5UKQETuwHg1",
  "key20": "3mjWe5XYM7v973ehMSPQ3VGfFrpL7aDswRjzwg6Boo7W3ehGKfDt1dghrBWBrPb5XP4UXXWacdokDpzr6N2f68g",
  "key21": "UKsoLx6JrcCv4ALTyPRGGJQJtYw166cMd2rZU9zXjVvnL8dRnzqAaXxDfcXaXrEYomLPvB7Uzdf7nBPcray98YW",
  "key22": "zKQJY7mruo2N2FGQXnR31R8n22bX44kuTxkp1aaYwGhwdYkB7h1Kqq2kH3dvsoai86CepyeWTSGWo9YJiMtDUZn",
  "key23": "2UoVSzPDyA7u52qAuoKisKSwp17iHtS1mmJL6nb5uq21cnq92nYMpmLF1kMtLVDp2wQFuRv6ihHy5byfkhhsC6hN",
  "key24": "4hWJsPM4wtUKYPkoYpeJjRnWY1h7A6X6EThJj7EVpmPZSh2ayQGnTpn4g6QtiUKn6Prna91g3TYSMhMmRopbBYKD",
  "key25": "2npYWTitk8CJChV3ha5ZdnNDvTrLcutxDiRa7YTSNgtaMWDNphLY3jCe1Mr8BBXViae4HLnibishKqP7StNnFGG4",
  "key26": "3cxyJZDZJ7r85U1JYN3uDSeycx7Y7XKkePrfXMC6DVJmr5VGSc3TusmXwZA18M9oC9rU4BcJseBfbWAv1p44envq",
  "key27": "3ApCyVadQXKZLRU8vw6RS4pHdi3MPCfgPqgeX7dDMZD1PS54jVzqnL3XwoHGe9Y3kYMqsjX89Yk5xoUaRxcEVzSc",
  "key28": "61TEq45KRAyQvYmZ4JB8PYshYoDEu2KNRnYEsK9vkZgx9YPFq4J2kQnXza3SZ6D8iGFZfVncnRWgvg2bATUBf2w7",
  "key29": "4BJ9KDT57WPXKSNuHokqTp18Smp3iBx1ezHdaT7oCLtboJMgtvGHbsMmfdr8trvAwF2DEVEVLaN3DqAnr251SKpX",
  "key30": "3RZN9fgbj6t7QmRCRQJ6sVFvJFbeVykfN1gvawmum1rJ13hzWMTpCyKRh6iEtDAHjswAQPA66PitCri33EMrVzWT",
  "key31": "2v4eXf5D1TjZ192YnSLYoHnCxF2Ym2uiGUgjezNuQkX7QVaEsV4v5qcpiZHSXTowZfqy7CogNZwSrRmrryRHrwg2",
  "key32": "2mjDCoHuWinUp2kwzbfCwx6vgHV9UYy4K8Ufj1RszFSNurZMf4QJjcnr1xtBTLjC1Q6aUBHYdeTahu82M28q5JGE",
  "key33": "5WCoAduDnGyaCmA3wwEmg2hrmrT8xJX2VCjmvQgqXMvu8rU11jVDirXywvgEwjunBjDkLqshrSeneF7rmfARfWpP",
  "key34": "2cWjpae2DbtP5kMyFVUcwPbHsi1N8NcWyCprx4g7xWKodqhyidUtQ16BE7ggQaUAUqyMwFaZHXEXBw56PmKFXXq7",
  "key35": "5eszrNpQfSA1oeGRUkitHjX2oPfabHJBkBKmiKQjeKdvUGTSEWuvX7tuFU2hE9TVZUkJB7TvjUuFwj5C4tV3FkB1",
  "key36": "3dndpjTtoL5tFdwDzTmbTCBgnF1K7HEdieujX7TNUtGZ64ijkX5CYkJhrHoHHqj9BpF2fomtzC6ZigzM5fuJ7NqP",
  "key37": "LGyZAGG6MLEEdSiq2gkEdmBWUQyQbtj7xbULYmSyTBGAtBLJL7JjJVAGgZAqiDDmJJPQ8qdQPq4NeJsmJZ1Bphi",
  "key38": "2NbjG7ijCMBGmRay7E9R64hXXYanzBiMKto8fY9aWfwsVZ3a9ibZabsfv9ofwD9P6Sudpzepd7oMJAq18UYUxknh",
  "key39": "2Fmni6fSMPx7LEgjdefs6Y7XKb1gTXvPKBQqT8ZaYzUmWxxpAXJtmGtUoYxwvj8PpAYhqcMVyU8a8hwYaJW6ATyb",
  "key40": "2RvdTzBtrqEECs5QZ1v2q8Mcn8DgHApyKchQBidXCYwEPVHwGmR7y2YJs9E8rCoPjj1NAYTxYyuYuvxv5KuC1JT1",
  "key41": "4pRHHaFTsdzKBmhU4deT5YmheVPFAa7ewtDqa5bo8yc25xx45qT7EetNEc8F6dd38oqAEzVgRcchvy7Ka5TZ1Mxt",
  "key42": "2vFHCbGrey3W5B2e2F7DEoh2vTrKX2PfFEgysTv9kaU79KhbFLsABjkUfAVrtHWGpMXQBS2AG1Ric4cRJgMiSyzj",
  "key43": "4vaRoWdgrm6nLEYtDs2T4RE6p8uaeewcecKnoxnLEEgRJAG7421Dj1WfzZ4BHcQGjZ8VYnVcioBv1M9J1ThBjQZD"
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
