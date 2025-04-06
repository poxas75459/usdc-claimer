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
    "3SWP4ghn3RY3VvSENcp4roj8cxktBLbKEXkUAoaP7dxgHrn9fxyciBLzXDyva6u6ynimU9jmeWgA8qui44no5Y9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjkMsuRAXpmmkb5CYQ36wTiXmJPzG4j89FC2fRv6p4RFPZNcCWd9Ddmvua3JFWo8pJaSWZaPUKpby1RvG3qjunj",
  "key1": "4MZvggVPJG5XpczpNuW9XscM6uGiMjA7Dw2WiXN8RAvFvfkvSb3AQYZSJKYgzr2Us2A77QYPLpizC2F5ABU8Te8M",
  "key2": "1RRmJG8RgFvxEDQEvqeiFBJ68W1w9iQjR1u4Z9Ar5a4neDrL3YhkNi5BZ6aK4u9zDwrghVpMfg9W2UeFNCWE9Fn",
  "key3": "573v1shiexAXeeEpG1Qps33t52ycaPp2ky5dXTcE6zYxanTvSyReJTQeYanqPkGneh6SR6A7NazY4mkZciL2X5yS",
  "key4": "2QBPGs3fVEEupHbHhaADaARnG6RsBhxbNW9afnTK61bRNsoLCn2nupRxWurKv3W6F7PpuMyGEc6CpRzSkj5py9z7",
  "key5": "3BbBEYKBF6r7eJMaMZiLwFiZNa3qWhcmsYtKHCP1UJBtQA5szWQactgR5kiN4ix7NRxCbNnnPRbXGKx4CbdvYkmM",
  "key6": "23X4xqqcAs1Hcrf6PzwPxFZL1gdHXNGHL4ydtKDtvuPigRdUojefXnfT8HAC2Msg5sJANjWbeLFySQQDMGTEdaNf",
  "key7": "GQWv6mUyTALWmuTDEMS4sC5HAhoQN9Ng89wqVXrnMtX6SFQPqowAzH8Y48m7PsThMiLnxX4yebArAqrhm1hJThe",
  "key8": "3rP7Bb6pnabuwcw4nXVTaV98ChtzAc1DAP1dKdw7DYBZgqboTkDJH7sG8sjiPa59PkVcwKUMJBy16UcDacPxXExa",
  "key9": "5cixRNtkWa83w2fMATA4TWQEvtgnJL4tmciNAoqLAB8nX2KzvrNquZoZHwjDnoJkrCbxKWFe3JJ8udVaD83hzbqM",
  "key10": "2uTDh4uBdKP3FLU4FDjLrTEktBWSnFxSXUwWb5wbb3aoTaEyhuWAfPNmFb5KbsF2LPgae8FrDAqzZGcgsz8HFmi6",
  "key11": "2kWs7JB4usDbKzxL7KW3bsfgYoUweWqy86zrPCUzH8caG4FTuMoPDu1Yf2FRVSbskAraYj5J1AkVqJZ4xMSKBC48",
  "key12": "jV5i5L2GWTXg8edWFTsJPdF4kq8XemCoVTjHXCeKuquECzP1qYqKspqfH9DXpYZpYYDE7hnKuN62uiFn8MMabbw",
  "key13": "wecocGNDfmeUWZd9pDQK9Q1oZucQwSLEHcDrMfCj4NPQEpeq5dg54x1Zsv5M1ApTLvGczSmm1mnnc9um2FBhvDk",
  "key14": "47gz1j4NUvZSH9osumbidvqJT9oWpVd4CXAHhZCERGvAhp617ovZHQ9dYWaiLHXXXPU7qbECfnPtfwdBWec3Eahc",
  "key15": "4utg5kNW7xNi7VVYvqWpCMQehLHWEqpeFcUiCFBKyvLK1DnVi3KWsFpux4m76T8xAATS9cFx6CcHo8zVzYde1vC6",
  "key16": "kPo9tACVTfudgYnGTYZ8ugKdRr2jqhyZUL1WnRiZP4D1YK242Q4GVSgqGUJfyJfkoWsMJ82vmCWeeNt4qNsNGb1",
  "key17": "W8voAUnR5k4f4TZzeFe82bs3kicmKtMzp6VPur8rDJuci6j8y5UuPfMTwrQQh1rMuhvfBvJtRgiinE8grR31LzQ",
  "key18": "j8dgig2vSkvdwwBzkrfgrGdG5AmzdnCiW4PeWp1VG5VHpnZZsxFpMYDEnQC2FdfBbieMdEQy5V5NBKq72fH8SiS",
  "key19": "4qH4YvV2Qtc3dAiFaC7A1Sye5XX3tZovVKDm3FSqEVXN722tscc997xiH7yfUGSad19Jur83Hmq85R7E9tPE18uS",
  "key20": "4tKsj33anH6Fn231szDiPshGPLPSRw8cciQz18h6frPxCDHtCqrQV8CERpMm2gEpgiPXJcahK1hun7hRkx7QacVj",
  "key21": "4xozeVnCYmfLJBfb1FjnHaSNGpTVB5j6eVW3QB7uoBCTLttKaYqp5XW96GGqrby1cwq4U1Za8XqhfVD4WkwE1Bef",
  "key22": "4kTfocFZBYkKMxha9GBMpT2roTDSNPuYgJwopj64YjPwZSmdi9Ns5jScCUgtRFXReaLfBtGyXT3ZrfMi3KL3v1BZ",
  "key23": "2ihKiAN2wPrJwCogAfoN97Nfpedwk3F8cwoS4mR7vcDaP6hWP4UCbcEQyZUorqUon3cyx7Xdf61wcAsLN3jixb6N",
  "key24": "59jwYBLxUfSwWPEtkHYA6KzrGo4tMqxK5MXrTyLzmo1R4RWarBVo2p433AN7Quez7xJqB1BPmZNDzVKvx7AJ1dzv",
  "key25": "3T6EqEkpFYjxvxFGXxGHi81EAgyccyXyxin1P4ponKKfxmCW9P5WdSVi5PfVKY39CiAwBKud84ichfPTU7fkFTgn",
  "key26": "4YMikS6577SU49uQb8iU1JJeEw1ixQA1soNo1146MW3A2ETKaakvoyPeTqF7YJ89Qd1RRzUZEyfSMvGNc9Vm3x63",
  "key27": "4TTyTwgLogS5Cr91V65CWsMSkGghG51vZqPBXMLuwHiSwwgE98CZckZ1R5T9AZVoo9qnNSynZVodWAkbmGqw3FQF",
  "key28": "3rvQsLmN94JiHkT5pea5KUQNdSgJShcjc1uLXfQbb5ZtQGahX9aNfVHS2uZNwdh8ZBvrmncteMbeL9vXVjoJBBJQ",
  "key29": "4iherdbNg4t3iTX4RQD5YRySiGrzsJYnPjLVpM5GhJ93wJBQdTWP44ipJZUzKUXm3f3vwpGCF2Qyk78c7HRiVVoq",
  "key30": "FS3FovXPz35vCp25kw2Sktp8sDDRSHTBNdeJrZQogy11xJ2VduSicfJzTjbF7EnmPpNuPc1ezoSPbJmZuuaXDpU",
  "key31": "4e9V2RugPnRvsu5R5U1gY34beqTwShG5GNvU7bMNzGz1VFaHp3YCAkKSnwvxtED76Wv2mQTUbm33Xz8MmGaiHinH",
  "key32": "3XNP4irsYTRKbHKsELnoMCBQgkzN2nu5d1FTorwhiMQCcgWTyvv97JS4BDn4ZaXxsVPyGML3i37C2AA777R4kw59",
  "key33": "5m2WYDFtzVKhVaKDKrAoh2DKZ2FMAUAvmrhKj6LiKZ8FCAaznz9L1M5iRriNMjDHr7hV97TYxRhCr75afKXDspQt",
  "key34": "2UUU5kT7WzdGn1ygBio2vpXZWyRPTGxDMw9DjRTEraLBZ6eo95RvrkTK5yrm3vLDmfhacFyMcvcozNXPpu8T3djh",
  "key35": "2tLsAVSuyAWKqJkfArcrHsA9rbhKtUqRdFqeQKrmjv6cSxHTfPziSoEXG1WPQ8czR5JsYSZqd2qoC4zmFrkYg2cP",
  "key36": "5kh21RipE57LPFNyMY3cYTmeXTPaqTyKyKMMMhS7JiXwrT4CndTQpUB23VrSz8rLBh2psGYB3uss6X2K8nYt5kCD",
  "key37": "JQ4Dk6zp3SEA8vQuDxaZM5Dp2E1pF3uZTLBFTJMNMX4vzNkdf3MC3N8qfJob3hdKhRQqJU2cYVnt4DBpeV6MiTC",
  "key38": "5KHXKnBE6HYSgnXQs8Fts1vgi7QhUbx379CSB2e84bb1EN5dQKC6dUh5zxKsL3kWAZi2NPQg8BpR2LyEcosR3wKU",
  "key39": "27rFgYCz7AdafAG7HTaTYvN8f59JH1oEXu43vuxMzGsiHe2j8QadbA6aw7yXyY6bGixqNqtzno5QaMoe2QzForkn",
  "key40": "3FtTYtuYJVxqZk2Lp1m23x5d27eEURTrpHhG9fhkA7NL3vNDpPFBueXVVTGuYsfZU5gVJyLWUwceKFy4RmFnpHbM"
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
