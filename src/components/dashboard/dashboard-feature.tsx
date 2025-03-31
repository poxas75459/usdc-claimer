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
    "qkcUhBFgQBGAG8dQgWiXMWo9UH8xTmddK6KAd9NtDYmKzTTgRmd8AkHFiMNW2yXikc6MqH8rcvdR6NzwT6ABezU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frzbjZQotjCgepaVmQJr6Ym1wsJgKwefPaRkQbovU6AdZ1q9QFRDDwqznqxNHu3VXXZC32W3G6fS8WUvyuhfeH",
  "key1": "54yGFWJitW2ef4omhDCwm6pr1zdb98yhcu48WM1PTtj76zsy78spXocxUvcL79zsVPBC1YgKybZnUKbNGuAzDgRq",
  "key2": "5yRvYYKC1EZbv22dXH4UhZA8SwtYR4JAgZgczhidFP3pi1H4rsJAwnCprhrngFedXrtvXJysFCDBFmbDZffRukG8",
  "key3": "3ascQvNsQkogoRoWiUw9BcnAqgCzEZQrtQpERvpkRqvm7H7gHrz5dhtpUerozJqSZPx9XYPRCLFHPgqZmBpXiqmE",
  "key4": "4UytEXVGqhkbpRCSf544TknyuFHU97hWPmwTGMFxHhqrNseSnH34v6zvYvqfBHKQRVLisPbdWxtjLsiTFfUZ8YFn",
  "key5": "3NPusaKKcWAjQbbrfieKc5Mh7jfyo98fu2ymEk5mjAHAKbdGMq2iGgkNu97EPKXnQ4ZnJxxLcKD3fJT7sTgh9kMH",
  "key6": "4SE7yxEAyRiHAsNSr8qa1meGT2tSMHcVkgc8FV1cznoxduMk3TMECivEGZqE5eN93usYPd57N4G3GygMGSM4SsfF",
  "key7": "3hf8BsBC7xyLYSpox1jRvDeJYcVAsax2an6zBeqjNNmBdNCcovLykFsgKatVuvpiLJS4sV5XGv6hNw953rq2ERoE",
  "key8": "5BJYBBbQadmj8RfG1oYKpuE8fGXAvS9KGBMtm1hhQEDkYmYiBGXWuXEM2eFUHxJVzkxoFnNqehDJ7xSJJkjncRAV",
  "key9": "5wyqTfY7Mk9NtqY9oaNdvnEDj7id3qrpwc7yJmcPghZcQmRAUUor859Fpcro1sxsVAgD4pFwtfAoujVS3vLxKcMa",
  "key10": "46tzgdhKqkShLADsGVLQFZgHXW7bP28rPGvx3RhRiVeJ8zecWBu2GbtWb7qMKDJp1P1joZcUarKFoJ6yYNFqjMM",
  "key11": "5tDnq146vUSzGgcyok83XeQvPmk9qf9o2J1Bc5xogYPYSnoiUwGDMzZJN5wQqL2fmPzC4ptcANSUrWjofzXBbWhQ",
  "key12": "2MZeuicotq6MDbf6NazRTRckm4uX7qbwj7yjqZtPMzfCh9XQZnLnjLHkHo2Y3Gfmw4SYjbbT6t11jdTVUjsKhocX",
  "key13": "2TyRwagi3RFhQXDkjrhVjfs22GBczj1tidjGWGa3hb8bbfA179UGeFy5YkeqmSkZvL7t1uaJdphGW9MCXeGY6q4Q",
  "key14": "4mKVZuJFvWtdxJ6kfanE3H2NyLtmcyNF4q2oPLReKydmPdJiK7sJPVh4aofituiXFkXADHwmPH2DYT2zsTm9MQj5",
  "key15": "3dcZ6SsNdp7yjYkq5ThCbFwJF6FN3fPfZLAVrfJgdTte9kuu84KwzpGyF8TAd6E3TdZozmb8h7uL6ft9Hdy9ipbP",
  "key16": "2V5ALNdMqzGDitmzWqphqSVBd7dsEN9Hr3GJ9pUbUF4jXV5BtJgE8oTfBB1SA21kzyuC5k5e2iuVVXzNLrE36m1v",
  "key17": "4UW8xxJp5pKGyW5z83AXRDK5H92pDNzPbBCP62vE4gsVyXA4Rwz3tCS1JKPLo9TRc4kTrzQPVaaucnmVEkZFHHgK",
  "key18": "3jGm2ASbVB4H8qAtMorVfY59P5ZCaF3urgg1gQBZYwgh8SWoLBXdJX9ZxLpFkQMxXNHB2FcDTg8Bky3NkEBSognb",
  "key19": "3mobd1QL3G4RwTUtYMRs1nrtjxAD43Gjnyp3uU2GMMJwNWg8tcLMU1wPoV8SfbCKNfnfc31mNnWb95kpfPG23QkF",
  "key20": "3m288Bgv3seLsDwXtVEEn2V8RuCAe9DfDX94b9osFAkZdWUi5Tac23fuhJ5uwopBvFttDxpJ8PSGHN9QzWY6YSa7",
  "key21": "3GGubdUiqnERwPLkQnmqdACrmgGR759ZGSSMAP1i9XyGwRs7vLXXb1tLF3hojkfgVhjYd5MPGop7gbwx212R3ixw",
  "key22": "3brnysh9RJNgJjWdbBEbnyFCiQM5cwDoDxM6zX36o6LD4vs3NsRTPdRaXFVFBnYLWWLf5Rt9PmQDezUZSh37fqru",
  "key23": "h8mNAKP9iBmS5nMiGhdXTHjsVhn9XpgrMP4WguG4h1rtyavqpi8cRvDtcxLYxEpbz7p83Nje4bMhFwRR7ZwYcuc",
  "key24": "32JpeHrYGnULMg7FN1vsTHMwqt5UfaoKvoytnExJwPPAYKvbHcf7cXEfZrm7vbG3tMkqPJ3Cvk45KU9oG5xRZfBq",
  "key25": "2fwZai6AF6WFazH372aNjJbXBz45zGAQQ8HbWQvhTi2pZre6kCiwn832LP2RQaBLE2Mm58xjQjAU4nbUYt1EPSbp",
  "key26": "2esADjwVHwmNdeQUEJFVsjoF7enHvToM7htgKojFYo8ezvNTQvqFjM8D75Xje4PkpYAJafEQzyLwGv7BqbACHWe3",
  "key27": "2K6ywVFzjaqseRsxEg4mSwqRBAUubJmb7F4bjtsTq3qdwPAUrz4xhE1zUQXMNnz1HWwQPz75J8pYGoNwMYGRLKZL",
  "key28": "3LPU8MM2VwEQWFCAgobfP9xMNwCGCcSaH3EwKXWC4qkoCZja11vuvRZd3gvRpsh1BTX6cHJsPhvDVP6SDYnfkEnb",
  "key29": "2SthxaEVE5iKD7AVzk5AN68CcyUjLuE358cZVzZRXEN9nNVN4dykA5da1EaLMXRHSH4q9cDEGXZu8qjbEfHxTQDt",
  "key30": "4rew45T2eTcMYKfvJMZX6xTS4W2gmDAy9JR8xfHVLUcmEGrb8dgAuMJEDhxnapLAbRKbA4D6ybhYauQ61wBbVkjS",
  "key31": "3FB9WYKKnm8AXEbGb7wGYi1gni5Q4K7QZ3emiDU48pbEoBQUsQ3dYXyDByERC59excJzoaXS5mN4NdTwBCaPypzK",
  "key32": "uAm2vDHAUXxszw2e5Tc4UbZAWtV4yMcqH11JoQ64TpiJpj2uBpDhoaAqFL7an4N9UkFXiMH1gereAQEDFpUXLFw",
  "key33": "2TutNg4K2CrGPwuXxx2nfioMrV4khWkVjTuZHXTQuYpr9UuQdQwx1CFrMhHuFWZZEfRLeBuCq96crxPD2QN8usrh",
  "key34": "4iPRoZ5E44iekGe6z4qumTpuGRmyLRLXV5MDmBpYycwniks5fka2wFrTQkXi46Md7gtTvYVsPViwUNuPvDA5UgYq",
  "key35": "3jwYA1sbbfe7KQJeexMb14SNGjCdgnpEYyavzYkgZRP4vzxhV8EmShjwLQ25WLSESwrPvdCYmehtsGr7FrSPRerD",
  "key36": "7oHAHRN1YUAVgy1u9jVPZSm5CszyMsxspcBXEUoe82Q15etxk9WmTDKSpo41Gv4Z7JBvgrLtsHRZVkNxYAQKCW6",
  "key37": "vgGz7osohgaeiGqcs19771jwUaBGq2HCPKVpWjbTktf2oPayeYJA7hdMzjQrY2JTRagk3w91eMrAVfAzx1SRro9",
  "key38": "iHnu5eabZPD2uC3wFUFm1LhnCihaf6tXmY68Qp26uayxry5qUb2GqpaUvQwYj9XLqL29gKpD5a5Vo842FT4xwCW",
  "key39": "5kHu1dVaVDXoDFjd59wUtRTyHRwoKrzZsbGhtFVZS9neATrMi5gnkTvdBh5SLJvzEZ48BPsq6GXqoyYmUHafuCZV"
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
