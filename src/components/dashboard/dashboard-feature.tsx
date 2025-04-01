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
    "5M7xhvzeABfTDkBHAm938zKnE23npRFLAyq3hUHTkCXSb4A2jnTrxojskdYp1GcYoEyUf8QdVGsqUArZBnE5B75b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rj6uKvzEo2omrtwfUcAESLR25nwrTXXktosXwjr2RVvCKMdHtw8TxMA5znZEeSiM3VqZkPMhkdicdPtRSBbUfKZ",
  "key1": "2N6eb5H3DRT986DFRKjWujXcNx5wbRL5qZuhmCdR9GDhQpi7M6wbAfmhxizaXPJUMZUzgs4UBPydThwQqLcFiWuZ",
  "key2": "2vpUeWAnmcJEiVG14BioTeN2fgc5b47J8khnRx7zGxGG45K7gU1dn3wAW6qyiCgnhyTBktQwN97pQrJ6CfNWuY6e",
  "key3": "2ZXaXUsFXkoethfacp5vPA844ZHBXjgqJVGAiHiQ1HeDVCCob5F9etvWCmR3kReXfmH9FD61gaF3tdSmT7WJRrCq",
  "key4": "2pqGfdiKuVnWdCMww79sfr94vUUMQvUD9kRRf4ESSUhFtRxp2VnuSs8MviCVLAgwFoyDVYmKWckD4Hynhp41vjnm",
  "key5": "4yPHD2BQq1jqtw1jCBPG9xsLW4q2RLcfSc86HsZGW48qvKnJYEPBaWMvn7rkSJZaQ327wQLEP3FiBSXfjVtfdy2z",
  "key6": "2YsuGEiiexUWGFfJ5NhMHuNBua9PotuHA6HFWPZZP1HrVzxfYEzpH4miqM8EWCAniHZdPcqbfccJq68nk6wwCWAL",
  "key7": "Dq9TonUCtd6YsZwohLkZULpSeYjjDoNF2SSf8W5eESuFWgHU4FZs3ywSgxw6MEDdpXrAnSJ9j7a1jj4XfYL2JAr",
  "key8": "4qbQC9pwweBeitV7PJw9fjv9kuEp1DrGJYsGHCBW4rodxvi2USd2QdZaQ3pm4B1ZJ8SmFzRJkouNgDXxeAe3QfEA",
  "key9": "2EMUZMmfcrFPhYLj1YjTTLtDDdvT8DFjisWt7UzD3Q9nMTHHdQwueoPQCvxBYP27ZsmubSvV6QW5jsC91Y8HNci5",
  "key10": "5JuiWFFwkBSRsj2WCiXzSTyREi23YfkNHVj4anrAwhHuSvCPYAykSAGe6JaXun8YC39A997kdWGniTafMm1kMorC",
  "key11": "zwGuPFvqwW8hZ2mhSh4cr31vwsFgr9dgAHnjRsVDzttjky6cSqKyWxTy4kAACX3JgCY5PrKqBGyAsffPUanT32D",
  "key12": "38yJXQUs5aDcYNeb2CD4FSpCQjpPsamWskESm1YrWo7dpKcGfeY3JiQUgPw98NrR9KaSZKZs6RDcrgp4FNoxeurH",
  "key13": "2dpVdpdf7tq8h9mrTU87RkbANEuyKRw6z8T87AZR9RDZd3wYnrnaKJNLuzbVH3kg3ouKFq2PWmHjYpBq6mz4FrFN",
  "key14": "p9kSezLF1roi7V1s1RiGkunZxg65RrbGCaAkY7oXthwZ8sSx79atdJcNeSdVgi1XGcppXJUWkwnNQ9PDaTRvrVb",
  "key15": "5n3R5Vfg85zj4p2YNgx2BmUYUfbq853omcwZhrdPWq2w3bRYtmrJXgLJqecoxshH2gZHpQcxTFiuZrU5DYPqSzRC",
  "key16": "2FkjkWeSwaM9SFzWkgcm6PbxNgTmFKuXXpW4AYrhBj5BGeasswB9i21LYNkf82R5WWVEXJJMMFSgFCzWmrCRaF4e",
  "key17": "22SeHMSBn6fZksFb6GsgjvYRdVGPnby7DsTddc3tJJ71W5EG9FG9onBNFSQUr2Nk2UJhMnNXKikZeKw5owzg6izQ",
  "key18": "5w5Rg3nk2rkyRcWB1BgbXFyx4bwedECmp7HZAyLEH8ogvBpYEEXWXWJFKm5UBPJfc4yCYcqSkohakC6k1etMcyuM",
  "key19": "4g2tBvDFztaXNrzk71fCCh1UcjjjpsUdXCueAPTwP1AFQhd24vH8XVCqcFz7jowcZ4HmSNBw2yotPqcDuA3ER33R",
  "key20": "51ozJ2ZoiiEBe6b9vDfoFUxeBvcQ6ha7xzNw8UdbmzyPpQs36pPnZch1hEfcp2MTjDZq2imMYu8DvRwbxr7PEfcq",
  "key21": "4M2EXNjqGV7pPcrzhde2x9ydWypQz3kZdfoSaY83RQjyo5Y3bemMEYN8CgVsVj1R3x2po9GMXxP3P8pEhtqP1SU5",
  "key22": "yLbgX1aDLa8JaykmBtiwSCAMRugTMfRz775vkh9u4warZfbr3MS7EE7rDVboM6a5qLKmoeWtXdzLjTU5qPB9THX",
  "key23": "3KzqP1wtmbUcttHcVTEx5ZeXpS4iMQZKAjSTXEACQCRTpAfBDmZy9Uu4RtRBnYfNw52gemtvbpDxSrzfiaCkshDJ",
  "key24": "u5yjVi6XPmQ11szCDTCWuCdCQdUxq5cyf64KHA4ufNAWbqTHZCquTApr1AfJamp56GKv1pgpBMu4huCsf3uwRzh",
  "key25": "4XroaqrP2KhdZjG77tUESZudRgL37MQpUh2uQdJcHNrzPtZZkEdmFFV3tQbUVKzUbxpUUq5JSa71Xv1EagNDamjz",
  "key26": "2zGSxHgAVQQ6NK23zinVEqYc6UojDuNwSyms55pRzkFZ7MRcpFRKJvUb1JGt514eKYcNSep1BZ7wYzhYyv8sRHw2",
  "key27": "4A7d1ppj6pNDfw6J1L8z3X32KDKzn8XVmEZN7bvXGYwhhV7VdGDgaSh4hNZqGZ8ApTxjoH7XqrCs3Ms1vmqZJ1yo",
  "key28": "5NPGCbHwMbXZDPJsvv1DykK7b2PBBpeK1BysX86NfQLFuPPTYR7PTzsYeorLm1DEAMHGkXTZF8DKA1R76A8RHQ7G",
  "key29": "5s2ewsmtNvp6kaLQDgryp5XV4vmxiuNmf2Sza7h5Lwt5gtosUE1iwPcqo43VhYmsGUQPNRCsc97HjKdBGssmh8zg",
  "key30": "2V14i6ZwXoohjCw4P4W4KTKgCqprf2qnFLcqP1xqQw6ER5Avzd6MKdeVVcvNCBgShUBfbWYQgQhNHL7jcR7iD3fN"
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
