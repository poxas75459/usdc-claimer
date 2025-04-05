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
    "3TF3sr4QvMj5X9HTdV5kNTTG4sX1WyUxWgsf62pUyEN84V39z7MNCKvnPvVwTtmUwvfXefvRGQecrJFogPbEcHa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8iC859sn1Gp5qGvpeaqzR8nyVLK6b7CUNp4QU9tehnoM8ZXmrfj9J9tDmtLZpHhqRPJAfFC9KwKZJE2qAXCb6",
  "key1": "64BpPTh9GVFUpjbHK1apKtXabQLNnaK2e1X3o4UYri5QAjZNYiDi9xZi3XWiHGbt8Q7C1FaL7cFxf3NXFaDrnpLH",
  "key2": "3H1NrjDeUWCktW2sSzoDbLLqyB3pfgwC7BobAcStqaotx7jv4JWADjNyWwehTVDPcaxLWdyG1cZVuxbd8Epp1bZ7",
  "key3": "2fnybGjUw6Z9Q7FrQgjtV2Kajhyx45psLJdNnWucK93iigR94rr3wojrSYVegZP1UVLD5dg1wMzEqZM9swZWx7y8",
  "key4": "56JHs26QzRJ5j6Ba6ps2fDjMEjmWSRXxMPprdZyEpTaMK1cR5xvT8LW886mCVLF5vsqvHBJPCekbfaiSqM2S5smZ",
  "key5": "62k33d62iVbZp3YMeFjxTr7gzafbuio4z3knnBNdQ68PwDh1oeroKdRjaBVpEWJU8nnB2nu82qovJcvBReX1DFCV",
  "key6": "5MYCR6itj9tgwxuQbey1PwVe938ajqEcxDE4wzkH8cXdrVzAiuH71hh3MYQCRLHpA2tKHztqMYrpitFYSZDkvVe2",
  "key7": "3phC7hEErzNUHyACjxwa8zKPmxoehdmacsUrHGYcPZacx3gwPnyWuPWWR2FTFVD2W6HCaRf8w6fznJN5GRAgKtEy",
  "key8": "4CXCFD5JTZw7QebNwQ4hnjL4moMV8P2fBkCGENDRtYSrhLZapKWDDvXwVh5RHeX5qvAttJ8NyhVAjoPToQTiFTFa",
  "key9": "3CwYHpZ18Xdpxz4Asv9nbe2NS5zm57yw5EQdvGLYHqnr8GXnukKpLwuiNi1bWRiu32VMyywzLhEgqokA8xpwgmXK",
  "key10": "MkRfzTWfUkT8RRKwvugTpyaQTh5YhudzzuittoGQehjysLSuY86KaEB6kG5HB1Zih2CCRAbShgPBUgppc3qNjoV",
  "key11": "4cmZfiK6J9637BMYyFk9d5bME9oY77dPACKrRzYWHTwPgbhjSPkLBSrvGK8Es3ZqbPo79HRvoGtFs7FqmPMXtN3P",
  "key12": "49dvvZoCrmQZHLxweprMRup8Ri6AGX3HpFa1tVQqruTuT8vHvXfzJJP1uXp26fp7j5Xeq9ELCzpfQtA23nwvauPK",
  "key13": "4Z21QTLm2vXok5hakY5oQ9jF9YBqNWwiTkZHqqVzTPFAQqjNAJ1cy9xYC7usuSztWcGSP6CFNcmFZiNereRSKSCt",
  "key14": "5LvG6PB7ANj3gkCPdxgdqMPNnqRtmMiJT3FVYFShg6jpu3x5WgMczwuXJNN7Kx2iy3tPhfxHgZeZy21CbqAMUpF9",
  "key15": "nW9hRjT94383TZJM8cNQJqiwe1WxgwEPMyhSjLqH2ud5fX9gFkMckfMghDCtt1hwJWcPcBmdT4pLo8Gw9aS5VAh",
  "key16": "5AQLgH4bPGywZy9vdHHsFP5xd6qERDgzeNPrwMkbZ1C99LMv45Qbw4sJeY7kjnoGCar3tmGSnbZmC1f2MhrNukVn",
  "key17": "3DqeSgcvQCwkvUSuzZNwWuMHKhhAjw5zVyqbo52fvwriZwjWCu8jJZGUGcVNUr2rybgDJhX5shoGnxv2WWCfNpeh",
  "key18": "Z8ASbLvuyAGD1SjAH3R9gZWt3phQHntj4Yuygv4S1bS41kUEBQiPXxynEwBQW72bctbZsp9sMpn6GVk98mNt2Mx",
  "key19": "3AMTh8mqrb3aNMU19cJLL7p6EtVrnVb94dGKbivQwoabCHWHwtFTUjK9dQETJmac81no4noNtP9H18rK451SwW4v",
  "key20": "5PPURXwe7rZwPMh5EuNpeaxCyQqM4uM6MLN1Grs5rZzS8T3E6HJgBhbJ2fRwLmyArEpiq5ayiX1XP79BosgvCsjt",
  "key21": "2soZwp4E3GEQcmk2mEhtqsa13qDNLJegQ4di4eZtjmFyCRz7n7iioP2MirmtZBuj1kA4iP374xQcEnu5SBBsvxJK",
  "key22": "QCNLHQ7uhggbDfXcCUiYSy3yr96nnehea2TvRxz5krNungRoL9P2P3XFc3VgFy2bMkCCC3fxmfzPbetpq3cxr9e",
  "key23": "ZczphHJRJtakpFiTJ16QX8K6xfMjDh1GhVQvt3Xph3iuHnuEMH1mw19hGvQfU9jDYzYpDErW2KpEm98vppUMHiS",
  "key24": "URrwaskvNWPf8UtZZh9LByoMRzngQk3GAyS5JfArYm9sS277Xt7poTfvQcwvvePkCEcv1Gu7WUSpDViSGZfsfMq",
  "key25": "3FycxyZWUsmdKkZuP8YHpby2jxg66K1Yd2vuQXGEFFQx4k15FyhRyF7M8xnB5pYpV9gLMLYSNMnaEfVQRLHVFQfg",
  "key26": "5hJFs3F2fCt8u649aNWhwtWt9GGrL9JzZJtyJ6d7demWMGjFL9VJ5MmPF6RAoZKRfhQUqQnPCF1mc3MUPAncCuXB",
  "key27": "3JEKjH88TmkAzoEufxcWK269h5DcWH2hgKVV5yAYuBzFYj8yAuntd1aQTMcJLRVrVES3NrLd3tFLLEZWcfPT8iUn",
  "key28": "4MjtrgD1RuadG25qT1zLkJJKT4BYRYbiNZv3Fe1ey8SWaDRUeDFP2dSWjvnhHN3MnzreXQnkc1kgv6sEmPfvJzmJ",
  "key29": "4hg3pzosdNDMTTkiu4H8H1WhxsbyQjug4Rd11uaLj6GHcqqXYeedny7CV9DXa1bj4TYMwNYTSb1uaB6sxWNsiuTm",
  "key30": "5gkQd9KDDHPtgenEMankz4rspV3gfVdZuXTjYKwQk2uHwWcR323XbNM4Cf4rpnKh5dpE1kieLc6N6WtEkTbs9BpF",
  "key31": "5stwe8SziFXTbPoqMbpmjrEoBL6AVatV6B3jiFB5z4topzqqv7PcfRdeFe6ueJsuqxKtabTP4eYWkpRNw2RcXmBE",
  "key32": "3ZvDCBuemaRrSjwMfvtQpx4QjY58wQR2gNFPN2xKds1LG732bdGsNwGZWzLMgzQj3PmTUQuvzyzA9yasD4y1bxkD",
  "key33": "1QQqckJPpajJ2wdehdtwWDsgpd1riNACGwdei1eg7dF8Q5TdsTbsAhVXFBexMP4DiAVE68249KU5ic7a83QyKyC",
  "key34": "4f583kaWU7aKLY2YJpxf7DwxGhf1V9hWmHQV9edkKB2sD3w3eBnA6uefG3sPUe815qPqyCXb3y6F3XLYvuXySCnY",
  "key35": "5q3jEWYuUMcrHfCQugBAP7x1HLBXmSVL8qjN1kZBbdHLTmCCxLa33myrertd5GFiskhu5MJNKvBEohj4SoZe2Lcm",
  "key36": "PfTcQfMxWvMP93BA2rkKZ5yLNypHuRHAePqu6sZ7bEAJgJCcAmNpJDTsVAwzmodmZUipj6ntuQtpKZgdyiL4ErD"
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
