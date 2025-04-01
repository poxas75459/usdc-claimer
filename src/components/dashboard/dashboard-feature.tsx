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
    "vM4zn62JgvCH8JB6T6gNQpyZZxsuX5f94XfvimhteFJ9T9f48VCMwT4mnHs9CzqbwHRBV9i2MizRHKKGJAwNBJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnrHtPqgXKxcRubE9X49j6ULHYCBgjy5n7w7BVVe7F2KNK87TxMS8nNUptDjpgSYbzDKjjzwnrnnMKC52VDb31w",
  "key1": "4xqg95X9fWGozZYz6HMrBZRw6ahSDvW8ZhQhUpfd9uVY9TwSJdBejYGAZZr61SypfpjNJd5C7bmsFbKUFkBQePR4",
  "key2": "4CtWj22Yfieb9UTQkuvGzMdiaXxeJq9qj763CSCFqq2SEVgCibjaZWJBtnRKNHQLM75HkdLH2u45F7cBfBoCAGmo",
  "key3": "4fnn8xENWeMxu3PUFdFGFzpPFayoYCoxJJkPRzemEq1d7cMyqADFGjNGiMBzRhk1D6917JFHvwoKKTRnkmJKULdv",
  "key4": "2F3ikVxWwARCkp6qFYpTmgjYsTS9q7d1mB5vaYb1WBw34o221VtkDcnxNcEiE2hG2nb36uFYA8vA8EahMDC3zvLL",
  "key5": "2Lr9QhMRxhB4xTXaxXwFJG8vX5FZQZzGZboFghRfgVnq8nCG3vEsH7Rfoq6QXAWEhXz8xtAcrSMspzVC4j6q5inj",
  "key6": "4kYsoWicjfgGiNJbcqrp4awW9kiaa66oEfFL9veoNwZU721tghBkCqyLJZUjc8G7nmobFhvw3JWEMAHhDNSVzSaF",
  "key7": "ppbLrNHGqJRQTiVUfh2XhrUTcFLUPL27AGep3ukbMqsvpdGMnjnAJRGYdf4qYJka9gftw4AXMJnWhbygQQrJUAV",
  "key8": "2qfxQLFVnRRWevABGSvASgW2fvVXR9VdRP5BPecnBrJaPcUVog7Cyh7hDkoCQFBoY8psbs4qnQgXayChuxdZJfCm",
  "key9": "5im2mJctauVBAFHbuYfg129E37CQP72ruCBih1365jj6Vnzey1e4rgdvDStyAYZUWdkA88wQ8UH93CBtwW4Mp48k",
  "key10": "56SzBPgZoHH9ePz6EiicfP1N4DCsecE4Pq519WaQWawXh7SBqWGsYeU9Vg4odmA7HraC6GzB4KURonk2svuguECs",
  "key11": "2whRtCaKtprtfH9GiL52Hni9Uz5FGccCGTySe8xePmjaRJy4T82V6FKSCM1icRfybWnLN5yMH5TVhciy7YtfHwAZ",
  "key12": "7AwFNZpwgxHxwqrJuouD2ujThGGDwcHGwacopPbvSBUXvNbmP753MSuY9TUsWzMSynAJAFURcqxM7J29s5ixqH8",
  "key13": "48c5H2AWEsJ9jhMS7xR6ZPAnnCHHkB14167fptvWVDZtQJxz2uNEkxcBADm5Lzr6mMx5NvZisSvBmmdiENncyQjd",
  "key14": "5FmjxfpAhb3FkCD3qjdsHvNTQLCGGnpjjgt2bipHtHf7s86ckW1jQichHr6v3YPYkaHHf2tzsrWPcceCHrGsA3mG",
  "key15": "kCKGw9dJfD86cctNGn6NyXvkXZaseY368Caw3TAkSAbDhKSikxgdy37jK2sNjPSRQxZGdXfnAWvxptM5E5FsobM",
  "key16": "2jA1qVuQ9AiNySphc7YRBy3BazxuwnPy536p1WLoB3Nz8MiXv3vFRmzvV8JYu6e91FCEHgfbKf4Q3dLne7ddwddq",
  "key17": "JgGd3TUTthRL5LpWDXDFfsmmk8GACMnQWYH9nHnzeLDJb4AnCtuRFYdCFkAbTvtzjtdjzsVecxtZYPw476uanej",
  "key18": "4X75XSiEQodcW2JSjBeWZm3GM6cjwfsEezioCXzGwmXDPWcZUHyVuxnBFBSw6qGxLTYfWfmRSYMJYE358y5no1g7",
  "key19": "4TdrJnf6kDsbt5NQCg9MVhiag2DGWCLSbgFcRSbk6PNgaKa6qD831bV4eUo55Z65xfz9trkegAwP5tiBKtbGSE8Q",
  "key20": "5katPmGo2tia5NkCcCZLzanxmXSVe6ZpW7qCcrkb4STfBdVDEpu4PFZCdpshdkHPs3WN2b8MUgUZv1DkBLQFEZb6",
  "key21": "5NdKS7dffw75GXP2fXGCDychE9su4mkDfg9KzUTG5we37zeFLwANfC2cJCZYFC1UeGm4cizwVA56DJVzyopaTA2Q",
  "key22": "4k6cJv2kX5k81Nc7xt4SPwySxVFksXgXm6gPYnHGGKZ23jbsBkQuoX4hWiMfiSBf1PN3pw4obqyEf3YdaBcEmWTe",
  "key23": "5N8ztJYkeaVZgNr71ARcTPg5Zyungeoguu69GLKbVpePbL7KZVafzU1h9uLXpsBfwjLwzFDSdZAiHEMFShgunV3M",
  "key24": "3RaCQN4xQizXe7oo3KPixGXAdNxy1NdwQF5CnGHw1ALnn5btiJG2sU3vcuV4nH2cdksX3UsLRMTboCh6Gra65yPN",
  "key25": "5FKymwcQn3jftJsDQC8Jc2tjMj4Ar1rPjQS7KFtYyC62T29tR5QC18nw92nPXfGhEGCyQtkkAfSwytNLGVhtFbLf",
  "key26": "3L2uePHuSLX2LRpaxLzi4V7My67pyMhNyTaH2t1NoqWbmxm7Yc9SvYhKW6MsN3XPvQZKFPhp7f2HhciPrN7rg9ZW",
  "key27": "3nEJ4dK1J1jVTW1qf73zrVxA5cFanKjwoWfBJuyP2dTmvMddbjwnT3Nvd9NCYgQrWoYE7xHFdrZKQrdpDMmgfpAi",
  "key28": "5nvy9QyHwAeUKeqz8nApAszu2eQZUU3q6Qksi5Un6TELKLUT9Af5bjjHtDazYxT45eWCGo9sFJ8FN6JnWJve8Ezz",
  "key29": "2JS8xLUsZMrXaGwXTGaxVzJwMC2qC9vNiSNQ6q9SF5JL8J9Ywy67eBzz9RtTFG35KerNSFjQxmRjEqF5A5mcwQPx",
  "key30": "3CNPNTeFKw1j7Bej33Hkxecax2UfWVBUWZGWrEmBsLyRFkdxGZg7B6cP3stRa4p3xfbPqsb7tPtfPFdSi8VvSAGx",
  "key31": "4vjgmU1iekhuk82PwSN6LhXssbCJKYHYf7JbhynPfA8LvcUbvv5mjfqgVE56jHFv3dJkCc9wvBKtWwSQAVX9jMTt",
  "key32": "jEgUwYPoXPBrQuFAHxhEFXva1GCuwrLSBPfqmhvoZMpfYWD8tccBWjYceS63oc2CgRKJUURyCQMTCpewPSUt85e",
  "key33": "2SDPm3RwXySq9QBu2u2RwqkkPWoUxg7CeuHLZNY1NMN4W2TJqnQoWxtaLvw6aFdjoA4oezsuVvhwbqaiZnskkPry",
  "key34": "4vAs8Fxkesm77EdhSY4rsZdgM7kM2xrVHne3AyMDHwsoxFCCTifC6mhdhDH4dFUvu4zyiHVXqz9WDj28yq5MbNyy",
  "key35": "3niF4jsVgAUnu2X9YZFysHoKQgi7BrnH2Dvr6xBuET9H2YXKgwid1juGytGwwAURyiKF85FJAHHFgDCmJ93ELbfR",
  "key36": "3vo4xt8iWjWgybtXoosWyfzzAmihrqbNFGpANrUxVH1eaUateeT25zeGyFzU2pZ3mUb9gzuJQmRDKbkoULNX9ttr"
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
