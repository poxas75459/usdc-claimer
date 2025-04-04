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
    "4spNJ4ckW4thzxsHKrWd1Crd5JQxkA65KMym38C5gxSLVP5AD4jDNNWV3jH7XZezfW69QkDX56ZrTARFBAzSteFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdrMrY9EFmmUDvTAGXWp9hzmz21monoQmnB33oF7L5ppUgvGBLisRauwTxtL23Syfo7M5hrMSEuBSGsQsefV66V",
  "key1": "4taL6LmTkRrtWR2518uRRpLnf5UjmdQQxw7YMpdeUGyUi7fxPeUkxD33reuC2niYeUbtfG49R2zwHiJMPqQjYJYc",
  "key2": "4vxGLMGrSL5aNYntjvyLGJR3oZj51R8usY3Hv5xVkUqsRcnuciXZx5W27JAHCjrc9xxztRwQc1uJxMjnqRzWXU79",
  "key3": "5QenQndzjtb5cLtQXbxuZuAC2gCn79VnhkD5tnhrHFLnNXBa4yNe8CbB8PHbBV2TBVmAAkhLfHX1VFHfxeJhnjMV",
  "key4": "5RVRgtWCFCZwbshzaLCFLn8nSkGrQpJMDs8nEmn2PptQwN9uAxE8ndosGWa7acdri5DF4eSrakZp5YNR4eQifHms",
  "key5": "bonHWjbwkJqVNkeCsQjzewEBsYZCA7NQKCcHjV4KtNMA3GJBdNicP7Sr4VVRbKxPQYqRPjEgoBZ1pSaY5peAGo3",
  "key6": "3ucHSJR5qoVfv1CdqmGPdpRnvgGWRVcyCbLZYicHKoqyAT6o4irpA6jhgYjWmY8zjeQoE3q4JeoeEsKHxwj8XJU8",
  "key7": "5jsLTPMBhReeESp3BbRxmJuHYjXSg946neK86y7byNjQSRF7Kx33sWHyRjtfnCNKqR6LM8U6UcicFkaZkShL7vXG",
  "key8": "4dGpX9xvqrsGxKNZxo7XuzKPxMFq6BSvbWEwewLckAQbdjVBgbx6LFZRiTzqh6EnBocMq57yYrs3ngu6JfkxT3ri",
  "key9": "2U4r9gcMosQMxB2xHv11JxBXMqSUwXGg3J7LPkPBQNEzVnYBBvHZP835XquE7i7Emi8ibvJSnaose6ouzzBwkaQD",
  "key10": "4bFTxwf81wiZuyRvTsGEnmTm97YhfBT98FF5iR5UDtVCiT7qTrc4V7cPsL67K71nPqHbFruX4TuCbgL5REptEAb5",
  "key11": "3nCUDui7abvW5mzK8S8wZBFwGsMxrBssoj7zwuLmpp8oSgVFh3dGbxMErySBMVkzBjTeUESyq8d9g5bb8fmBNhS1",
  "key12": "5EVmF1cw7DLtc9R1wh2pqCSBGaf2VAn4Q7pVSTAFUT8MdWkHfaEKy8grYDXk9FPK39h9U3rUvZL94YMXoUCaDWT9",
  "key13": "5F7nZfAUFhd9qPL3qW6zS4jSexUzMcFejZLe5zJZDw8pqMKU7QJ1Ze6vPhCc9kDF2JtxXdwgx3cPr8ZsxWQJBF4t",
  "key14": "dwi84NqNfntaRFah9xqLqRWECbhuGnPfzgAzfrAjPBofBaiakbzmCzCUYUCKviAtd2XzkxdboxvPorTV98FZS22",
  "key15": "3xvEsoqa85Y4MK9mgoM38eeUtfBxutTPznbaEwXRtEgMPvMb1yqn5inNToqxJv5CfNaMXtBR8wJRZEqFQ7252wRa",
  "key16": "2Ux3X1YBs14kauPMsV3Pu9YXiosyGGj6iwwmfe2GXk6CMBkmDLu4D8FVNuf2CADFKwALBigXhf1FNK6snESvS5C6",
  "key17": "65kqaU7i3iLMoJk6dWz74AG1ASidE8PNmwZFK3yeVAQMnbpbdmJT6MqGjR4DyUQAjNBcjdBPPjHtTELDbvpwGrrM",
  "key18": "YvRnJB5yFRkgHSiUj3S9hM6odE5e5NaJfNCmrZLs4c7Q3wGnhHxgtXq5AcmdLhAX5TPHddbdP9ENCTXZgvb8LZk",
  "key19": "2AbXfHGYW7L9K7oBV4WavCX8AxpPK2DyadVDnEE6Lf8tB4Up8eeE85ZohAeDqnCX77WmCVExThWZcu5iFLEy6uz9",
  "key20": "5bRbSFs1gHCq5mitg5FHYvXfvcNQ6Yq6qqtwnC29bgzgVdDxr8UZg1JAYefYMqj7HPLqs72iaL2HjwhvrRJw6KpV",
  "key21": "4A1BiFbqfFmVkqj9SxGiZysmXUzZwJsxJUfDAUEXjREAR8dueMeRy3qetNLjmyd44UVQCM4KFD3QSPqYkbcjatoB",
  "key22": "xUhrTimwo7yehdxrTD9jAkTfRavK3dq7zePVFjuJ1SYWA6AboSkguM8KmrjMCqWi1aobAvaijtjL3nseTrkC6Ct",
  "key23": "2RPS3hwQGQj7iyvMrkCa25RFgQqSFYwHayruebuYBoedKgT8nHBSzUEJjf2irmo9tHitkLJd7eRq6NJ7MKc9JY9S",
  "key24": "5gkhSP3N4pZS6aYPrh8cih24QxrkpnMw7edTqvdxCE92EyfNTZ3TFZ7XYMU4QCBfbz1WPXD5wt5zTKJqGMLggo4z",
  "key25": "5hWDCFnvWo4A7YGSevYrkVfzd5rdvDGHGEKjewNKCcrmxkFAyQd9JYfaq7otp2MeqbBZ9sBsfzP8hBF5PVrYdZWV",
  "key26": "5fPU1jrcL27TCP8BnA1YA8AtYQPYjJFyEvcv8diQeg3PfuS34GRiwFvFaARNAv2cNu9p9hJrkSuQxh5LmMvpQxQg",
  "key27": "M8XLJ6gCtVfiQvKAqbvsEmSCqtzxQTTHzDV1REbocPYSLs9MnAwvVYNTfvs6PfmPf9rzeR8fAgyK2CXBaeCNUni",
  "key28": "2tTN3LgLt8ohhMujdzoAwEdTnxWidpttBsLL4ZTMFu4jz3F63jDpew9TfJzdUsQVV5pNFS6xSRs3wwHq3Hbv2opa"
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
