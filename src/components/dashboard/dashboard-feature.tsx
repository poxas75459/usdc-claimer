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
    "5pxSMJiV6p4CX8GbEAqjbjFSeFveo7BZNPhtryMsydwBbpfvZGEE8ykzbfSR9eCtCwwCiS7WKxfzRu91XTuyQAHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gr6iJPAWPrENxZoYfGJQetukhXwH77LzmXFsAH5gKscWDKEHY8n1JRp2XZ3gq2q9g7ivHtQCz2R3Q4metLRUZV1",
  "key1": "5gz8bQFt5rskowo7JFQ9JQxBPExrMehQNxbYv9RSuwXW9FM8JdMWhN45xxmH8u8vSH3WKYW7Hcu6Y512W1oARizF",
  "key2": "2wnYgdg9evw8Q12LWDdgRTcFtSWt5WFFHpy8WSaaahqJYkNFVYTea5DteEW66fR7i86h5cKm9gRCWV65DgSEwKVV",
  "key3": "3nvN4jy7X79mU1efLxmcdHPzogH6TxLho7dAmZ3eaVpD4ekYXJo2QvN9ah3zuKiPhD9iPMwmFLbB6t1jh676hNB1",
  "key4": "2q1LqLJZtZZMWraPGoQo7RjTsVG3svQrg9J8YHs5yuQm64EYEdKZCb64YbFyqD1W6YsZoNxjug4MZ6oVt8Rrana4",
  "key5": "271ZmJbSL5nBeR48c1AtNx8WzSc7MhW9GZEjjs25yanwrC2zxHk2vC3y123b2VL3zBrJoWrtJteRprsE4NvKcG19",
  "key6": "3uiqRxDJnr7Svt3mEjXn6enFoVkFaMk61UpBuPuED229uSLVvrBNA3tCx2NW5uA87E1uFjDMa4psynoqmsGyQfkU",
  "key7": "5NumMUTMuX6BdA8PYxPc1o9PopTeAZ29gBmr4beThtEjZwdjDo7hcnBTrLpTE2JB3aqfzB7m8eBmZiF7nvyHVakZ",
  "key8": "ViPaMaFrjtvzfN59xhPhfqozofnz2QiAye1ts8uWgk5RHZrb8tfMt3ZrECMnkkz8FUZgK6m2ugnmFNFY2hSKpqP",
  "key9": "2ViALaceJQvDivjunV6WnzWJFwFa1eAcdAN2ddfKiBFb84haiMKvoChsVwn2qgy3VHUfRf6bMXT8BfryoSXVMXN1",
  "key10": "2NAPZ5hN5ZPz8zfqHPcTvCq7XfiJcaBBHrZKb6epewwvnPQdYpYE5BcFLga8SaUpTiimRzsu8aoBP2vsU5noJAP8",
  "key11": "5eHhEFjYUDobW4kpn8fsvTJYTyrkyuNWhBDtccUCT881qgAzAHUQqec3tHuQb9NfvzJzFr8Xq6SPEEXTNF8JDHB4",
  "key12": "ZrhyBJLRsYYbpuX1Zfn8iG5nrRpG2WDCjZp5pjqi4UdLrHC8hMwf86fRAxF3LoFTMKzU2iWE2EfVP6TbiBhBdZ7",
  "key13": "4Sdx2dy85dVa2hMHKdwB9gdc9vTXDaiccxNMnQ5Ygg39U26Jc1kRHzRJVDXLX2RvnuhowNgcbNou9GtGQhrEH4y4",
  "key14": "5bYtktUmF5sLGD2UZkBiHux21U3BC342v6aftMsG9xZBBvb2Q48EHs4E2DTFMrzWHNroEHqNix5ka4jNcTadUxz4",
  "key15": "5mRU41RH3Bvw2aE1JncrdL7YzD5cPwGnYRGymnDHZRbbHvJ4iTand1wd5cXiG4WnpbAN1g85x1zALXsDumkCAgQP",
  "key16": "2XNpdfAhNVoUTTGgRQXh6yU5caQA6LhRHfJfKmJb4jYQum9uB6awcx7Wb33jPajK2ZeLyi6vbhYE4Spb6nVxVVaz",
  "key17": "5TLbraUbmPpHEJWGeF34zT6qfq75JYcnn4ZtTJqjA2zFH5FaAYyk7UFscv4A17vinwCSEwHAfbQrtxtBaye4cBVA",
  "key18": "27BSydwG33abWvN2RQNYQqonvWqWVEaug4MEGXjrjTURQbXThnvVEHsAKToRqAzpKQNzXrXuhVXDZ4BXY4e91zFg",
  "key19": "4oTZTsqYF61XT7vs8grWJ2n7pyrGh1fy6krYEGhjdPsF8XKfAAwFRpbaTMwdmpeV7TYo9XEAxzmUTGPpUE75XBP3",
  "key20": "7foD7m53V33XGTTJGFNzDE9QsNv9cARCUdPqBHLcnAf2NvH8xFV85B5JsTkBEf6nJUY6XEyv3Lr7ihRApUeq3U2",
  "key21": "Sppuk6phcEUBDGKjMzweMsBcZPt3oyLy2eWoFSUNe6FsC4V7ftpfuHw2jGq8Ps7cSFzkk9LWJwpWJMpxwZvo59x",
  "key22": "NuoAdb9tN2wafu3Rye9t2qJNqbMLqExxrt2Wgkskiqq2WnvDPwHJzacr1ipvRmpig5zRrXAMsDe9eNUQwkknDAf",
  "key23": "4AqDE9eChTEAHBUvCdzgmNELTTUHCGGAqNRNdcP2XM5jEZEgKU7ZdLG3ziwM3L7QGy9XUso9g4iQPTAEujyAi1yD",
  "key24": "4NaBncL5YxwjjAZn5G94ForBY1uSUWmsivWpfSSMREgdqPeNN3HLFAarAcwQhwaFYwANarDkMSgk1vdqZtQ8a6r5",
  "key25": "5p1FtyEFoNXTbmUTEug5PnaCeZyLfwR7SM4wMW9iNaqMpcuEgA8udNnPv2jKHzgFU7eTa9tQweZjUv9a9hRrPWEB",
  "key26": "3VjDmKc7yQEmGepBjpQ5HvyK6hBbHTJadg23Uzo93tEkw1ZcCSeqs9zab8SNc9XDtp9qcAocNsFhJHzQiv26bPuN",
  "key27": "5iQoy3piLzsPndqutdPU3rhM7XigqgDz4mc6rBoq9QtKwQC8sMEeF5ycoVNVHFH2efF6jyfBFTsBrKqvhRV8Dhaf",
  "key28": "7DpjMpLD2NLqe7RWJ9nwEDVDNjFNJ2K4LJA1Z9q2KNEcokY2E75FUBX4hCvmeZau46PB8jABDKVEawD8EQYLtMn",
  "key29": "58CZ6XFo8H4DjW3K15ryC22Sv2SEoJXU9ks4BAWE3GtEAMjUgjeAknD1omMktZV8nJUYxuCcUjtjMVcTxAzLD5uH",
  "key30": "3faKGsDSVQ9VGTjQZqZ1f5ciDvxaC8FYq1AsHjLiaTATmR7Y4oYvrdBPAPwJ7e819qmkUea9RmeaEmrHBXfyzMsT",
  "key31": "2u9HhnbLKdzswKRJNfWA2AL4HoQAizFNyb5Tc1xKPJ3HnGiZAEsJva5jG219975wYubSv7j6fuKcWYJgX2h4TUa2",
  "key32": "KQMjagLiUJ9ssK3BCbat31yZGCGzxuf6tPF3NmfZEBHKY4CSXqR6uDcbFesX8Bqh537NhRuNe51zy7w6F1qxMZ9",
  "key33": "49DUsgdrroHKtyX1ebHR7QYahq1B1HJP34vPtvc2v3eVKc8A8DopMZsMnZVyw2YWhBG4E6Hi1PrXDiuvQq5xH3fJ",
  "key34": "5nefZpXBNo2iR3nPcy7joodVq6oJ4pULug3GPnVhSNPY2fcVFMXGCSUdPotXASgbuz9Y5T9vhp83huJvBf6dyZ3q",
  "key35": "3m2dsBiFARbY14y9iKxdqU65csZZ9FA37Lkw3moXZSE4fRnno1yuT8YP8wsi88sMcVcSzojumLspj4fn8rEHpLJ8",
  "key36": "4CNnobgZmgGirk1ven1cRAnSStsUFzd8eECFJ3sLWq4fZijp4qtmSvwGSt2Uk22VBtrGDWwyBxvfcW7meyRsz3LW",
  "key37": "3kzcAzGjKYzPt98wJATTGcvAnQ19asbYQ22TNTqcFinXyMhf3on5Mw2AhLtjCosVHt8MinE64ZvBxeDTaqdqQPwn",
  "key38": "5i8esuEaWEHBrUotBkbbYNk9xdEsfkbAwJUdSYksrmvwC1yopnDHHX1zWMUnhFtLtD1DpH9gt9fn17BUrXDDXf4e",
  "key39": "39Reo5namjxGh1PVC1uFbQmALZqMReZVNXp8hyqWCmi25QF3AVcyBsuvpig34TFyE82qd2xj9foB59HerHKzZc1n",
  "key40": "33xixXd2KvcDdA7Bn2fgxaJBdzXWcVyL5B8Htx3ASWxK25WMsrvbyK1Mz3Uezi2KTqyBKLmvx4bA1Vw1JhXcGmmk",
  "key41": "4su4iKTpsNskqHVJitBPkLymQDTG7ee9oJmUQFSvTpxPgRRFL1DaczSeXb4qTyXbhuLZXEpELH9z3aqe4yVj3qYL",
  "key42": "61dMeQUWzgMZBcrNPriubm9YLgPZcbsgsMF6LsTdwAodhKXySrsdYSj7JbmmRtXWfoKXJhyDN4YLq27CNrid9Xsq",
  "key43": "5CdUCpmzmfYe5Tr59iQV2xZKQRhMge9bri5uQ5gNjKGHm3DQPzCF5Ujf6BzyQGKspEvvGys7sbmPi7g33XM8APJL",
  "key44": "2vMppEDk9yu26GsbPLfabz9Y1M1udpnKkbrR9CHE6qE8yaXVhT8mZu8Q79GRPrmNUTe6bu4SqBf3itua7xBqy4uf"
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
