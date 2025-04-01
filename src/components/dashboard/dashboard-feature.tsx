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
    "BXoeSnqZbHeDQwoEGiigGuuDN2iwSscrPho3mgk1QCRCwR2bQ4EgAihQ89gj3mDqsXDDVVSiJSTPbdnYcEgJ2tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TG3VpZbwrsjQ9wb653za8dKDiibjrMX29oWp8KWYFEm5tW3geiinfoBBobYLGukq5E6PahDtv7kxLZkNmaS5bUg",
  "key1": "2DsVsmrKUJh5ByZPGT12MRDBcqD48Ey99xtik5v9cX2g5RBvbDianFyYdFkvK47FoKs5obSY1naFxrZ9ybADwcH8",
  "key2": "5A34HdBdssqdBs15ehYWnurx8q6fmQccLomzegbXhWm9RMsT6bm5KE6gVtcBxyjXW5SfoBhVsoxsbFfGf9bYY3UH",
  "key3": "dsc18HTsaermKNE33DAvEWKjaJ7bE4kzu14vrGS5vpLH6xMDmj3VCAjnr26zWjNVBFKkaqqj5BHH88wFsrptxZE",
  "key4": "2AfdMnYu9G2Meu1g1ADq9uCMWFsMUPBGzehwQFRBLUfyM9ogPEAjjhbG7eyzUCd4Ed8w4aSYHxTcLbqwm7TUy1K5",
  "key5": "2SJ5aDog2mHm2QavPabXV9zLyvwZpLHyxD7J99TNcdSRG1j7YKYndYHm8DrPvqJyzrfmGwTPUgri4bvranwDZj4D",
  "key6": "21STHViRkhRqWn9Cg15KV8xEdrB3kynTSvbk5PmVdizchVpm3SpAMH2hmmEk6ngRAazbdk5XV8LL2GdkZJUFnFUs",
  "key7": "24uVkgdCiYcg4XSawSmPcWCexFffYNkrkPPssb7DwcpB8UqzseKjPB9PJNou3Wbdzbei2vyjFEdVMDVvaGHBfx5b",
  "key8": "F78msE6ku5VA1Qg2vkxqt39fa5ym9cAia1P9uUxeMJZj1aXdQ16QzJB5GM9BZsbgT82hK3iDb7ZRERjVXdHWUyM",
  "key9": "2CVfAu6i9dj2pqdLfijewAgGD4Tqr9os3eNKVbMyPft5EkKVrTpKyQKpFAoRudJZxb2CuYk5hPeuEcEUsEEipHJX",
  "key10": "3CkkJpfKUmECUmrxy8ioSXBN23uzFyszNzu84xaXffcZVXzthdaWf4LUn7Yo1cc3zDRzkS21HHisqTNVrj2oToNb",
  "key11": "3oPrPPALJLHHk8kACZPU5ZfFyT5zRoCx3ZKrYFjDJV6SbV45mg8ifo4afX4Zex22NZag1ndTffWsFUUPnAFZ148x",
  "key12": "5Kc7sLynWXTmBgn5eewBRkqi87uX1kTpnmrm9sbJSm5cHbsDqoH9TtNjYbzzuL4hsyhuZqrroMTWwH9qe7aPYzRi",
  "key13": "5k47e3KzFTYg4vhNCoPN58TSY693FyYqGA74VPx1hutgcB9ZWop5B53Fktq6M3SiSynjAcumHPJZYvq8GwQwY4T9",
  "key14": "5g6qaXzP9DLqeKe8hSHFdHvj7scK4YiXXeMzaQqxCja1Wigdz5WgZMWyX4iNRBoCTo5sYZVFPkTVWrGqwjXp7MzL",
  "key15": "3yVguz3r1ByfHpRikfrkq7g4ctxt2U7i2yJ9z9mchizo33aBBPqD8NeoGiNYVapfKmp4ZMq5WTXXUGmV4uiNJNVH",
  "key16": "5NGUtstnC3X84rgnNKKZrsHFynxjAtGD8cVnNX5XR5MNhyriA4ia5wtKp4vFZqN4TEzkvbk9AB8m1Pkda5us6v39",
  "key17": "41ZwMWEx8f7RsdkXF8EoodzZ63dhA2rMKknCiVTgahoD5vzbtFJAhCjUNmXHCJK9zye8EPCL1xk4uaJQ9manw8m7",
  "key18": "5xr2y9WUkeUmV7sFfB4CZ7cggUjH6ATd3iQXvLpj1g5qU5tDcrq9ymwYnS5zV7AGCLjvT4Vr9x2B32JoN3e8q5bJ",
  "key19": "25NQocvkrk6jozxdLdFRZd1qvZH45jaTbZuvqV3PZRPyxiqUjvfz1Yz7wg1ik6Gw2bNRLiDMQTfEiqmm3APtxLos",
  "key20": "2nSf328uLo4fT6GBu7hKW9HxmU6hMnXCX5udqvB8TgQ2WNcymKgR9ry8Lg2LMbC4BRRUX5iUhr7Ahycq887DDJ2P",
  "key21": "4iNity2xPtubryHhM3dHMypYBe4jg3Rs5nMfKDcd7KYcbk2Tj2vavTP1aKsk5sDXudx31z72bmbrTsVBFPjsDJyd",
  "key22": "3m1Z4m9vNgarZTkSScnjumkckJinyWHCjMJHu2xn2vyhJHKD8MAoRKXK5TSkeLJ1P3t8yxMRDxqLSS9P3N7QN5KN",
  "key23": "34EhdPyhhcGRNkr7ULp8X4zHUJZHnwrsA6NP6MZ5Bcwtrk8pSq7Zf4HQjDnJeTDMDqfWk1B6SzguW7rY59HBFRyp",
  "key24": "5rQ7GQimY9K4QAEqRAoGXdaH1NFvrWGbcxj9bUNiYEGPBH1Z8tnzFMKaX9K6hrH7kVuQnSbNC9Nny1QE1XeANeqA",
  "key25": "2LtxTngmPConF7ndqK5n4aa12YrbZDcBWZH3uCZrBAb2EpQm9Dea4HQXz9k47DkSjfWKPQkWBGVf9ByXm8qUtiRe",
  "key26": "64DzxxosQZ56hFCW8RZr5C1B2NPvESLPGJJnWpQYsB7jBP6jptsPaWb7n89puouYX59vtdc81oXMUaqDJfZzWyHe",
  "key27": "5yBHpLGnmXk9hW8DrCZbzetStaNx49Y5mv64dZQ8RhtqgnijTVuD73fcyMRtrG3y9U4KR7B7Yv48QE43M9SSR9Ed",
  "key28": "39uf8o3jnZSyuMjbnRQkKcuoKv731vpcFazQBTJ25yDiCdohoKvNzKbMFrVzjj5VtusTXhxsLGnx7zrEfrbXYHLC",
  "key29": "64pgCfap2cFxssVb9UpBthEK2cRxk3cxMfE34dP45CkStuE6wtUMgFhUAwTuash3VyU5HhmFgyWQmf7pJ6Zi42jJ",
  "key30": "4fQ7kgxXNCvG3snTJNKYMs9ZVrUTia4WjnAazVat6g4iTxNDs36o14Lshf6agTYPKJDMDHXhZVhz38giTrD7nhdh",
  "key31": "21V44uztS1USWE1EbWojAuDSmCfx75zwMNTABNs2nxVoejqkxNk9bxRfivkLTwfFJMPiAx93p7CprXPYruENNku4",
  "key32": "2aDpuE3yMuoDmYV9gUNXs17s2b7wihEVekZiBczXWeYTQdjzbLNaoPbtKDbWWaJBT5LaSxK4awD2RDchJSnmHbQq",
  "key33": "5HAPzbhnMemExh1sgLBcVEmDEZRMCjbNmSRxPqbk6gu41V1ojFDqdYRyeSt4M9VnD82WofTJbyL1MGzTYAQJBxq3",
  "key34": "2TQ1S9SELX4A4RcvEz3y6NsKdPxgPDHzJoVM6H7o8VP1oRaASyayT2cjkWLMGrdTmo1Sy31JpGU6dTThm6nHviLD"
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
