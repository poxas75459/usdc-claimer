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
    "fvTnXSe6F6UNyUT58MFPeGiCeokLPT5WB4qXuLR7aDV9dKHtonpKvsQWzmGWzo5yKNeQn4unfYDGzRGZzKxxY61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8ZWG2ccdacM8TjpcxzKiPriqB7pwurW4j96BA83qoQu8MJ9h1EtMinkXfK6XMoTHiuypNPg3kMnCDvDDKGQLVT",
  "key1": "3PNMrFepJ31RuSvY8UD6Xpr4fv4mYB8zmSZF7XTiRj7HnFPfEQcW4YpsjKZww71WB8adfzvya8pWZW8sGmJF9J4m",
  "key2": "3ysq2DeGggSwdHfKSUPM4RjiwXK8MLUX1JRchp24UFdmK7HTbPpR8J4b27V5SqjevrYwn6ffdVoYZETxEodxTNDq",
  "key3": "3hF3avHjAA57SVueVMiYvCG4ARisQyAyuQU7fNbqfddDqYRyoy1eR633WXmGWg8vGfgR8h5z4LHuUtvFtkt41WkF",
  "key4": "scE5eWDNGnMpeLo5XTAJzTy2VSDLNZhNKGRbwxBeapVKSqpcG89tgZFfc2pFmNcuNpPgJjSLRXTZrtRQbt6XJiQ",
  "key5": "2KzwH2yQ9NPspeR3m6npGo5qSLVy5B19g3oXmRtyXhuFoDqRyS2MrLrwwLMLj3cZD1h7c3nvFdy22F5BomfhGb9J",
  "key6": "4i8FNbgtMNqRFYKepMtDg9KpEL4n9325buzSZQwd3pknd3wJ75jFxUsRHxWf4EVjbLZxS9hTbhXFYChspa2oAomK",
  "key7": "3vbrM6XZuMQ2ZPvVRknG9UurejjoFvdM7uJSZ5mtQNQDt7Nx7t5smbsDbUhz1yt3MYwFmUzx4HcD64NnAVZT178c",
  "key8": "soYPwZ9Mthjd1j5pVDcfCZQvvVEuGPCDUSetGKZYk2arWQyBV5qMTjS7wxZyNA8bpttLn15HUf9UKWo4xtsBRd4",
  "key9": "2g9yrGn3EnwkV1u2T2zY2kJz2smuSxVnz95vTXoyBmdm2pA4rgCU6GHfYtkipvN1sJg3RjtiHy9a2NmjgKDUpXnW",
  "key10": "2T5djnAmDj4h1xwnooEW8hHPQQoVs8WaRrZbamyPygnpCZf6HMkdcWZ3HBKShNt6wJt3HypW15YYWQmnaz2y7Ey8",
  "key11": "4efNtzQ5F6H7WYP9FqPUpXbcUtujsiLkQsL4B5qZDkaJ7FNZjfjPdfkxgAvCyxHRPtdvvwm4qo99D1x8UEry6VgV",
  "key12": "29xhbwxLFmtzVujreNWHR28twCrF27W35GKZwUscopGtH7j3hLZBSRngb81MiMNm9hPUkJhvDUYEF4P5S5MKgpKo",
  "key13": "673RFJamYDg57xnxorpruPVjvNQAg12wbjq8M8bAP1f5A8Ywim2uqcArpNBhhWQe6SKgD4K3npb6diE9HR3t5pWg",
  "key14": "3v3RUvLRw3YyQufVeRzsbTicSdf4aXscjC2nMaQQxxrSzKxnrY2WFjbfEKexLAZAPEeTJFEKEYCoFbhqPVng6fm3",
  "key15": "5nD56rUKzE9pNgWCAMUzDpnS8EF51DV3icpjvEXHB8TGajcUDuuVzxc4d4eRsuxKYwE1ivNdLwmpjp8u2kBAdL6n",
  "key16": "65wv7naiEpe1ELVwWiP1WtcaoFPXryDdLS12EyB3Bm8A78v1PGxPnEtSwp2oZfMdyhoRDkV5QArApWh2Rwrzs9cb",
  "key17": "3Hw4GeKbp1UHicYxyQKgEjC7greP8CKjf7Qh1PSqucuggVYrceUDqJxywoLDgm4WNm5X2HVqheM3ea6nkPPgNRAP",
  "key18": "2BaPNL4MoZJSpveGtNQYiojMK6XJRVcsEAqWMi1xPBEZmYEZ8ERZ5vm24H2SXGonXJpPBsGz9ct7TCPvusWhZUDT",
  "key19": "5EoBSXSfvrEwXg1KzzBeLDo7RiaFc78RbfmiEZsDdijU1SX76N93dcZqzwCiH1Vv3wan9rn3WVbHNsoa7Rw898zq",
  "key20": "45KLvVNsvBuzSiNpUSwp724rnmXqQrRoiiPy3nfzT2YMiA6VMHBvaS52kwkZpxii9XH7bLYkSPkh7e7rzvB9DzaW",
  "key21": "5YhSLsJdNjeSTnGQ9uxuNpXWwTYsNhcCzQxAtFjDng6Py8kspuDrypQkvmkM2c8F4c5qoMnPNcBYPc3QzpHBnG5i",
  "key22": "445BuNUDuMp6HzHyrYrbEB7KWYatgTquf9HPVM9XLBpMzMQ16sL8h6m3tYdsbtx6X69w7DgkiL727gtPJRL1Y7Ut",
  "key23": "2ki7Pvx4yTpdjtAfcumKjBxDiqAuuD6F4DSmbzYEmYzwQmz8GbWUTWJFd4KcHwGNVaYrsLZR63sfjavUR7X7wghb",
  "key24": "5CD8yY42jR15op8hm4hWMy5xVaUd9nMbco6oTtFmzVUa8cHrnp5dkr16er7Xdua8e6K5kF8JtAm79czQnQNXXjxn",
  "key25": "bXtxbi1868i7rfWEaxGsXwGYEnKbSHDmmmEWMdXWXaGWRXeHY7zzcazABUb8Ht5bT2K761tNXKF39h6Qmz42jDa",
  "key26": "4LjvCxMucwQSM2HZcHuJZpbXYhQbNCeiHYCrpSmhc2Y5EnJEJzNHhmuCuvGsVoC7QHoh3pVdAPqXumhwD5b1nuC1",
  "key27": "5epVui932XtBNYPuecyRJ5uosHF8QgXmzRmNXcDqXufKWeiiHha8Bo3orsnqbu65cU8MvfxMWgei4H9MHgnGMufg",
  "key28": "PqQbWz5GAbQef6puQZuyc6YVusmb7b2GJBC33Wi1raDCWfBMaZ59mTh211GacXU8p23ahRuev3G2Hu78vfRMHJp",
  "key29": "3s1zp2MtxwVX5y8gR6311Z1FhUzdkhyh48ccSyzVw3URzDowpPho1towx4v5amNHXCXWhRFHX45EDvjNBViAn3LG",
  "key30": "3bMAkrunFkQqwdiecbCQYvqRsJmb5HjPDfRLgv1ueqoSBFgePLsDu1nLRnQTaaDYcsMaZmScxaR3pCon9YynjG38",
  "key31": "3xfxk3miMRDrutgjbEff77HVvDg8YU4F7YcLzhZn1pJPNdn9jmpuHZBtj2Rc6gKiMB1cXPKH2zHVfCcbhsQYBUxa",
  "key32": "pQG3EwL3o6pGocT6Bd92hbXDoyCzk14kvfnnxPwXXUE8tcKPj2APEup37dJNcww2hEGCSn3TC9hvjTMbnSMmpQ9",
  "key33": "ThfJiLnzv59F9Dg9nuWumKuN5bdQZHxfjh6xPhyc3cC1hBG7iJA6VcHFrRgWtP7c9o18F6z7uXWXmqyHw9WJH8f",
  "key34": "5GXqsBqC5ZzGXRHtHfF3abAe5DqZ5dNxDU3pTmgJCAaqZ4dmpHH63BjkZcKbynEUEX9FjEoEFjTVxkjqEvjKvxga",
  "key35": "dYTmY2EriW4cURqAqJ8meqLytL7Vaez6ijPZoJa7tgHpZf5jYh44eRvVp3tr3kiXd2RVDYXkowLUh2E7vcBWYBJ",
  "key36": "3n9raFQjz28a8r95n7tVToYhLz8zYVN7G7xn3kFCncwf6NvG74urdffEBRdM4m8NrRCZPdpS46TnsVWwzDvFQY7d",
  "key37": "3yeupf6gMo5G4RPHr7oHxsiWxaWRJoir83XMK8PaouGoPcGnTDPQAaCXcSZjG1oaXB12BVPcY7HPcsUJ975bLtBt",
  "key38": "3weqkHyjhxwPVa5KXzkVNU6iFc5gz3KuG7PhpQkusZHgWvCWiq76qA3dRQZacst1bV76NK3Vow2Dnz7SPfdQdpJf",
  "key39": "4FPuZKcGoAyFrTY9ZupGVT89LbojFFjERDrNqjWtAhpV9XPt2wGFjcd94DZhPqsJ1egG9XoPvNvtZ5oTdtfpEjNX",
  "key40": "3pX9GsKEMkdR49H85C3WwCUxT6w8JLr5ugbYCZHcHmW8PB4C66EEMbHoS1vP5kspxgxfV8TMhVLr941FX4edaUjp",
  "key41": "2CEcXNGQcFmxEkBqFsuV4mn2K81wVythzrHoM1fu6Re8yZYub9tj19UWiyhiP7cvFEe4ExVmFTjNZ4FdaS8EpfGi",
  "key42": "3DZgvN7RKKPhJYmB8XqLSofAAfpHg3xhyxztuie4R2V4eUXBoBiRCNbXot2zLkuJuhErPXbnN874qL4h4igCW1vZ",
  "key43": "4fm6v7YHgo9R5hrA4XodkkFGTXeRQn2CeReQ5CbqaUrjwz2sHquYnmgLM99phyyMRFQ9ZS19RNn3ynPMcKpcMeSm",
  "key44": "5i7QK47Nos4Xw33LwnwnNadvxX9GCYPBfFwTN6WinE5puWJJzijNqjXyWRWZ6CDbtSTGhn92tXbSgqvwDXFoSrbq",
  "key45": "464PZf8MWjEzkcHpmGDqSL5MCCYmquFpskd3BSc8QMnH9P5fYLvKboUWD1st6fRvNdfRoiJu8xxh2B3ZxWsDpWVj"
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
