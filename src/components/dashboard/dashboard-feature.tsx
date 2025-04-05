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
    "5gbo4LbJxe1WXjDNdbmoaxSkN3nTx1BzXPEMkNeNWXtitB4Xopag7ngdfwBQenBN2EzFgP2vJZWPYawhgSgSJr43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGXjmbDTa5CDJNbo6VQjUmv5dpyxkx84TTduMvCoq3s939zf6p6t2JzfN9Z9XzSYhqEz7ddca6aqAgmU31cUWjG",
  "key1": "1ZCMXVJnjVxmX7occEbXesHau7uoSfymnYARPSKE82sgEBjVkcee7b3RwHst5GypiBU7bB8VYDNH3LTSXuBHAuQ",
  "key2": "4KNXcJPckrXNdA8WMgBoyKeTcR57RpkELHskB9CxCB7RzVee1hTcv79yHT6SunCay5mjdu3EMkUSBLFwgpugfHiQ",
  "key3": "2Z7FRXoLMtMX95ctP5FmELV1HVX7wMZaCz4tU3a1QnYUgvLegWucBaL9srZZNr6ywbrmyrHotEZRDMNTWeQGYYKJ",
  "key4": "ahzfTnVfyGQ78F9HrFpwXhLPHeqLjWnovfTqjRvnKYchemSTHUYzeeEuJMLD8A4xmXv1k6cutTYUwGcjPS5bUX6",
  "key5": "3MdXaM5wSj14gFQmQP9p92L1LHGGZowCyDDz5dsfYmtaaTueVwjWR1VUQgWRwTaKSbQXn4K8T2GwU83tuBZKqXWa",
  "key6": "2Y7RYRi6stCKcnEHv3ZYEyhwkYznv8QGcGzgeEaTcxA2LGY6nQJ5pUh6iHQi1LanjySk8aMgztuyu4Ep4yXXVebA",
  "key7": "47Qrb3KwkWpTdjC2kAH6SHDrqyeidoMqeqriB8tnRQThvszaGjKZ1HfNDXSEehaH3EEKJ1oSsBL2LWxMiYpTY8VF",
  "key8": "3eyC7LcYU6xy8mt7NJusxHUey4VskWQCQ4y7YEruauPWVWcoDjkQVn9HLHmoEEe86GfYr4FJsFR4GtxNeycMXQpL",
  "key9": "5sdLfTbGf2VzrzF4Ksd8xYieWXPgashb7SxapHFSMc9ujuaLZAekBZvU8EiJj8oHDQxGkvLAadJetrvawm69Pgx9",
  "key10": "1ehRwLkWPfaSqvVnM9afQ67GVYBzzkfmngesjd1zcjPPabEdQvRpi87UWkT5eRyqjv3scjUWsa6NTcBGwthieN5",
  "key11": "4sbMo2j5Q8h7cwvr34tYrj1p4yDJLZQuB6fErNYuyPotj1tvo7yiXpnsvnjWsTpKtZ7qCpA7GoqHhga9GpU1dvWQ",
  "key12": "2nLxziD5bYg6RsBJVRPgM5xGzwzzxSUb9FzgnVdB2yYXJmXKAgUB9oQxTjYGBXGMU4odcBCeJbXjQsVcCdWMNyzZ",
  "key13": "4AQNyFjM4Vzhx3y3EEwGmemv5jsGKvsnndbzwbonHrYYQmPAg1AHzsfiPsGJkdxsyQTy5EYZcYNbiiC46k9edwcp",
  "key14": "4CztSbZJ81aXsAYDbZWzAbXr6HrhRW2XWofMwtBqNqvbYx6pNKr4wJjzCPeTFSqvcS32qR6eRRZ8Cqh1v2mzAbcD",
  "key15": "2DDAwAPg3iMrtqkfG2r3wJ3vfHQnwEWJmSLQKDTgDZvSHJhpy6MYoCUX36iydAprJbxqsiXeTJDHMT4F6HiUPMcd",
  "key16": "2yDwamY84rjksrdtnrFsLR48EymZbrwrsjyht5Nx4SLHmcVym9jSwpVWtPVrXa76AeJgs3UPppVk7jcbtQRHZxgk",
  "key17": "4MgMuxZt6zqAEUXg1VTZiKoYVBevNag9neawZkF3FZE1YPcCkuVAmsxvJN2NjEEQjpwy9ndxYw1xhBi3HniEg9ue",
  "key18": "pWgFKrX9WtNmhMnBxP8DtqimU9tLiBxJfCkfswiKfNncdHUtWf3RAEHp7B2Sx6qNcVQbdYwnGY2aadQwBHCXJFz",
  "key19": "2Bcn8ELJ2JtojwmTUVg2D1cBBD436PXLSoryQkxvHywhxQVfMpgKoyV5BMzG5yPyHm6LrKjzgucHDrXmiQmjLkJ3",
  "key20": "5CGgPDfNkh5VJDe5jFYYVtFgcb7XWVMgb7jJSyBMAiTZMo8gVh3sVVEPhg4yEid2NDHEBYFPqFNTVhjs56iVB3Ka",
  "key21": "3aTAsSUn3NN5QK4P7NqZApRjCN4D5KdEYELtRrbQzP3gKUUoH43FoAyqNSMsWuWhmxbjTCuKLHJRnwZsa7AgeSCP",
  "key22": "29R6NT1QrKuucjStfySFfsmAESu9jLiJbcZ8fCuSGRRUcN2bgFt7jbfKg4UzefHhdc7L24A2vdvCvHrjHWyHHVtt",
  "key23": "5SEbVPVL93sh8wD8B2LUP6z4eLH5Ha4Y76Bd9aGXrWBtrXyaQXFb5QEZ9bc8zXq5kWxHysHQ5fCXPP9nCR6c1Y4d",
  "key24": "48m9rddY4qVAeuxSR157qtwTLChMEgEahsZvm2T9jyzvitx7GLYvty3Eq3jmu57xLpebqbZcLDiwtHwZpVdRv9qE",
  "key25": "RfucRx9meUFjXWypHBhMdio7bKRrt4WBeb5kfnjB1TtHpxtynPSD1D2vmDEndxMLvNDWWiELQRBy26EASuiZVRZ",
  "key26": "2UgLvEii1qU9g1UBYc91UMppVhQHF8PTbnnRdJ9pQGdY3v8QgcFyoTUzAJyJR5hwFrmbkyquFQqocxDCgoWwZJhP",
  "key27": "5Fpu5dGpm7yh8qAo2TDEmWVMqrxknm8zzZhV25iXin8k9FhwtoM1Wt6BDsURSEZhi252qcAshgyZJjJrFNbn5sUp",
  "key28": "4G4rvVrXEpdr86ECLRneiqxqBsHg7WiWyiyZa1cSFKhcL7r7DHtZ2s2ekeyqRswUbWWUNnnbxsWa1jE35STb7VGQ",
  "key29": "3VBiXGji1hE82tbQ5D7msth2SQ2tfYvpsgEbG2dHaySr8Tx9hc33arYCXyVXaEPwHntBKikQapiySgQqp9nvFBWE"
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
