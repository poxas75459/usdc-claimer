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
    "4AzEuSLLovCr75YNFXasTWmDDtBgngEAk6TbwgJxasRmm2AUxVQdmVLUJmMnH4SJoPaWfA7KizBtR5FszZ9ipvDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMur2Ey6eExW3mj4QHLUCziNkx5Bv4eojcXb1odikptJ16rXo6qkPiYxMBcVmYgwWAbm56X1xbP5ffjJK1BGVbR",
  "key1": "4EMTux7SCBMi99AUKp7WHyQFwsajKW12EjBDVMBLiUuMKdmbyJ9fo18RE2KhT8mwqnN8cKc2TQzXFj6XmnRfaNJA",
  "key2": "tKyGkx97PpBjGiQFXzYvL7ggGmCrNZrbp2iCsGFtiZxtid9QiGZMWTRdvUxuCpnGJJpb9bYSG6N4i55tZDzwhSp",
  "key3": "fhQ3XHSs2ma9eYVCSNHo1Qm8una73zQiQ6XYyUm7NnfnPo9CxzZ8pWGMcsPZ4oF9odmWqNThDMnYaEAaeMswHuF",
  "key4": "5DWKJbR2RJp9HdDtbfHav81XWDjp2ssAs6CHenUGMWo1BBwqmxP51wHf9bgB2Y4cEcNnPcdR17JwLwrH7aNPsD74",
  "key5": "59gMvQrUfLCnBD45VuwtQJNBxhxrPJp8kkzMTqdwaM2x7S448FUCgYcPYJqSpyM453SguvVr5pj8sSsNDwT2zwgm",
  "key6": "62Yn8YttcWBAnT2Bh9BBpq32THVbHoSseqwv8VKj4vJ2EPMZ7y6sgiCs6J2xEMkH1PH9VFuRsJBcPcWaip5tsHDL",
  "key7": "2du5eqdGXcr4by35QncbiR2219k97D9n1UC8MnGegPjBreASHJdtzyPo4MRgoAdqjaBnTR5xsoSbXPsqvm12Ax2X",
  "key8": "3CKyBdsHpt4wr2HPitPgx3Vuzb2GRPcXQYYVqw3C9LPMvpKze31XQh7hRKegBUTwnRfSEYAjsHw5uR21cxRcRqBq",
  "key9": "4vNaFD4z3Z3dNGzaoHUR5AYAEkVPSqWepMswy3AdSGSPtKfwN997kxqLnGXN3CDiokD9dwWe4Wn4Atoz4Lip43wM",
  "key10": "4SV5phC3zKszFBNMCyEaHqAZr8sasbgFxG7AUXPrGsaf9hrVTw2LysNs6PceUREJjw8Ee6NsykzvHbb8ubhenLJ5",
  "key11": "34eFBKmK3AnwLDMANse9j3xf6P1ntmQMMrMxWEg2vCN4xktnp9EDh5rdKBpLa7WQCMi92zhQFdWZofvecaHxfX2s",
  "key12": "2SrcTQcmx6ZhFpCGBUJogNQ6xaQg3jfG5Nu4CUXLYwfE4vRGoRe2jW65cWJXRigty2x4QyGE188UEiuunV1eEBdt",
  "key13": "vnmdnWcaAmtKsFJGq2HBqcchdDyFgtckr7xZabp1yPrhq6QapU3oFhBgGWtYNtpX6dzpdY3HM6ADY3em8M1W1z1",
  "key14": "3AXz2MuSm8cPQzJ5rpStaAuSAPkvbqzShjmjTvSRuyQCJWpZQWrky5XNDuPqFivmFo9ec1FJHToHPadXavs3o2wu",
  "key15": "EgHUwFymHhZseiB4TovVeQbKqphxhh5DAjkXayB2ScbD1pPe99WD1DwfJPNPcG98sKgtGPqFTvdh2DyLoz1SshS",
  "key16": "2Qyqg9iwahyqtKyckhSpf387dzjmLFAE9pxH9iLPyyBb7Ph6s9ABv4WdgG1fzFu3LcVfL397jeVyMwiDC1L8KXt7",
  "key17": "5FCE27BgQ1oiSAB4SGrnz9Ag3Ciz2cPLXg8qre2cVsRh8SaXuSqPCMb5cX2J3ypJFrHhQkJffitBfN8eYktQR7Dd",
  "key18": "2wNAPvyAo3iiqGrMcNFxzXgPj24vHfrnFGfTDEfoThcrdLirnBDctvuqzgvG4wDyCEnaHwZNhJSBjZb7WtWXAUCU",
  "key19": "5Ni9EcNuQv1DTyuYmik5P9Cpq3e7BdtizYApNSBvdcxiiUBpL47EzGkT7GKmBoYM9KDgH7aXFkKD84nNSZbDWMG2",
  "key20": "4DLJ8ctNUAT32mrADDjCj9Xbr74mhAtFHBi68Z8D8zESJ2BPEDh9x7NVyzEEGjXer1twZBVrFJdH9AhvJrpspEaW",
  "key21": "5tPRe3WbiUDEHY7i5v5xBqM3arBcDyh9dSxhf9YgK7MVSYyiRSAc76Cds1QoC9drsv6ehfSnf8M7tBYkiWTFhTk4",
  "key22": "2LVNKr6m7nJdzXwsKJiwt9QkNch8CiX1JL42BRmfjB3oLNuPi9CHQMhPccRyZW3A64wyP4UVcAkkbzjqssJdHjRv",
  "key23": "4cX3XdAN8kxupjdDeuZoN7Hcif2Yfi8W1UZFVxmdVhnxM4CrRE1JahL9zDC6b86DjfTEhazLfomT4M1xhz7eLVww",
  "key24": "44qYUa19rCiw2tPAcEcTFRVb3vkepuBQHfV94KECsbMaKA65dQDGv28gsLAWTeDxi7zyKrAHCAZLcN1s86cMnifK",
  "key25": "szpxsJ91Q2WbFG3Ak3xwVEmQ3PWgbJHjbcU5sMGdbi22SvPZGU4ZYpmdpZjZ3tFbguXDHgwUdR1TnNdn8whYwNS",
  "key26": "55bZy2GdJkRtJiUJBKznsu3fUw6KKu8JqMKWnpMjTwZLK63T1BePJwBLXYuB1m1VZ9Cyx4akKryoRx3CateyisQm",
  "key27": "3E5KwoMnW6igVa1WVPVTvPfbYnqyz4zFETEPZ2ggcDGMYUFsATSLvaGhDogUAqRBAwMRaZo6U9sU2uEuwx52CM8e",
  "key28": "39PETME5Z8Dm7JkEeWJpkpM3mK4iGBZKK1h6QzwxLg9sNrMyjAAenRpoNCAKuzKcvav7tSea3RQwWfjFh8S8ngYV",
  "key29": "3xjG4VRYLyNRnn6nb4JCrJq89d9HNtQYruurRKfTGG2dwVs4kWVePGT5gygQ8y1fP5K6zJX5uk4hqL585LMAR4Jn",
  "key30": "62b1zXpKPePXnVQ4CEcRmUMLQxS64DfzfeJ7BRuqhh1FzEXvYN76srHPt6B2skpXEWxuA9mxuSr5bnDr9kghFnWN",
  "key31": "4ks7wuL8FehPGTmPd9NZDBewAKoy4PMCW9yxu4bfPokWfTZYJnAE2jP8E1EAtTvAk2n9xQR9fGnPgM1CXS9eLtkj",
  "key32": "4az3Euf1FERMQagNsJxrmpopPhsRfwqN8p2fxXkY7VHUNhxQ5g8gXwrS1cueMjP7EkXNAHCmyDHKGJAkS7VY9XUQ",
  "key33": "2oXzagmtS5yB5odbTXGXbVAbt7J2GxuyRMDoS6MFMpYepZ3CRvojj5JfY7Mt4CRPGJJXeetPxY88tJHd6DDkmDFb",
  "key34": "rTLaNypR9MAdwoe5qHB5KBNRSWTG1HjimnwGdVowbAX78qJnNYw643vT8nzpeEnENxrXi2Te1iiFb4JgLY4dzt8"
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
