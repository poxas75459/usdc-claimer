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
    "v588417sGRtpUSTgtAQiUfbTt8Le2p4XfN1XB7CKUMLV5R8dY58bLAxFp7bo5A9k4g3CJ8F62bJAaWx3RKfprYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENoA4khhpeS9UnwcQJEYob5zEbjfFbjDyiFNSqVquKiFFirrDWsikisao3VaQ6zQ697XYnQ3dgsQLYuNLhNE95Q",
  "key1": "22Rhk1G7jzVMCcUK2wWkkUWaoPG352bz87djbq7wQ2RAoU4ZzCbfbq7G4YA5FRNSFtrARepHdwhAwwHQKFrkug5X",
  "key2": "K9eGVtZuuN7cV3k3toXXpaae9tWLLTnNgprLnaWtQA582jppBqgECtkuPcbJwMAVPVLS3jQfpdkCuVrp6TzPJtG",
  "key3": "3rpK5aNFhEqyvbJH68Ne78uwAMhzgPoRqnAp3Ms8NHc7eJEx1nuAc3jJcDn3SvWVdJXGMSYpxvBN2xRZtzpAgBpX",
  "key4": "2nJ9xh5UiZYEPLNZx1hxqXis9hdL6Au3xPWCPXF99TaXMY2o9NQzPAEq6G4jpo2o81EYWwND1vdsPab19PuJzQgQ",
  "key5": "4eXFKscqSZeZxWw8yd4RkGLdj3HS6s7q3dWMrksyhBqVbDh6NWtiXXHjHdt1rUQWXmrFiKinJgg1VPwzmZRKUs7C",
  "key6": "2ERRov4LeGi5Wx5XzBQ3bfdLZt2xMMgoxd31R4cPzpzdDpdqa7Q56zdEzMRnPJBWKNsdC8WWwgtTQkafDXkaVJYs",
  "key7": "4JzcKRUK1xgDFL3XdTNiMUf2b2XhEG1RVrjWuESueyFioDhhuMFyWsxgdsEuDXp97Fa3FHW8ZBqxDceJRKVo15H8",
  "key8": "5aDhVtk5j5HyYKwAZpWWecUx4GGfRVDZRMFHLghDVttdViPLaPrRVpksdtzwa6Azxb8WEzhM2kPQR2nikKDV8jQE",
  "key9": "3LKngcfh5PZ1ra54F9p73F6UaEQjAoQJVJiwKVKwGRZh9uJAcL6McHGxsDoyjKAwcgxUsnpWi5G9nxYtJ4DriGym",
  "key10": "4cELwbUh484MSrZEsif3aBBQ6pUWuC97GESvUsj5XH1qNwRcehxiQ4wrAiynTKVRL587EhuG7wL5FCRk2kWwkjye",
  "key11": "5UyJJgnzRa7Dz8Ygq6cJvwyuaHc8PFBRm1qQ3Z2RfvrBmBgAyG4FvXBxMMQt7L7usyuJJRRJutVdn32E9R1ZsQCd",
  "key12": "5Bt7SqXpbgXpygWV9x7ACfQnsEoBkZ1CuGtpSim8AJkeMzBZCQEF6RfgBoGXZ8r5g71WLMxZfQxN7MeneePFW6gY",
  "key13": "8D9d7qJvECp3ksRc3t8VLV4BXYRmMWJbJqcbdXSvrEgANUEyuJjWpsAFedj15rroTzScaZT3fMk9fEa2bQDM3pa",
  "key14": "4mUGXTxHxvEUofKWArQGKGBTtCu6tLAdj6oDkcQGqssTCNmJhybkHWprdr4Rmf5RCDmsSQtUjDxXyc5iEMH9twhu",
  "key15": "29CPMSXpnHbzKyUVciZLjmeZkjhemRrZBRrpihgeSQ6e4JuV7j8kW8LXdVPB5rvfd4hBNu9m45SKtPTVtv6okG3f",
  "key16": "3Zeov3ztWUPEsgpKsMJyaj1UKnzgPHqZG1nffgCQqdp7s1V7EoUgSjQ3J3T4qDGL26doatxB5CjLnmtZCQRXLgqs",
  "key17": "4RPLXwPvggKanoTAUVShYjiQxf3VainPChWdxHSKgtNDDt1Pfc3CmTmGzun3yswZXFp984GM4xF8rFrQaSho7erq",
  "key18": "2z478LHzUMzMLu5xKvzqMpiQMTnn2MuX5qjtsELZ5aQFNE4ZT72aL3Ejp64aRScnb5pk5fitQWnwkbZugqUSwPzE",
  "key19": "4h1k92SxzodeYPZSqbTbS94vWQfJrcn6ehJbhepVpZ2z1sAqwsbKeDeEEPhyCjuoe56m4kkK7dncj7DKzAEr7tMr",
  "key20": "5wQPiFvhtVeQvqeEgTyX9aR2WSdrZ3BXxwrNnmJ4PwtXxi1xLcH5xy16UoKKm3wHPLtuWLQk5tgSnZAzauVGHzkk",
  "key21": "2wVCwmbkUc12LsbUJK5VQ7N9rFtjQQuBW8pjnV7178b7nsTmTzSpThZQbMV25pKarCaTUFu7mR2ju9yphdRap8g2",
  "key22": "429rWcUBaRczL3dmHJcjhXJz7caBDaH7kwrSZx3TEMCxiBCPQkecMs9KhqRXhA9eJAJtZ6yZ9v2j2z71v6ZxvFSa",
  "key23": "34GPq2e7KtDnWzCqxzwAZvhYcRzgycedn9LysZAmTQwWFnp4AEAaD9Vnk1531jBNPmq3aPMm2VD65Ft7PDuYuSwT",
  "key24": "4jSF5spZ2Vsnbrmac62SQkJUhr1MECLBmxkauaYUsfX8Sp4xXaENPiWpcssmLsXt8s2DxxmMrBUqP3yBbFQzbTL4",
  "key25": "2i4VQosjiJ2jU2W8xzvBf3dHUFpEC6F6eruBddZGV6fhHCwWkbKkSdCxES7HBCp9pm8Zpvq6gVaHPTrKodkd7Da9",
  "key26": "4ugGFJwVasXLvoKnkqkjk2bxuk9aD5z2ChTEe3Gdmr1c5tRMakCbxVKzy3p6UiiznH9UpuQpq6KcoK6Ysg3dPHjq",
  "key27": "4kzeArhKmhSrbBCpfDWmhabHucCyQSBM91TK37nBNN32qLZaLrD1ZeWk3S2KZEhTA1BXAfRRBgT4eVXAxCSWXxki",
  "key28": "4s1F6FQRrbv949e5wyhadJuH54Xh9Nmdk4LH2aYraY3mx3ceLocs9XNR7cjhSt4QtioJg1HKPNYq2FmJAmg76g1F"
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
