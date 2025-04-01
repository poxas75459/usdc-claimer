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
    "4vk3fpEr9RGydcqnwDuAHLnYu4ZDdE2UBSehx3zKjEX6DMbHdCc7Ax8oNsmtDVQsgmSxWrgkvKtWLg31JFEDaX25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEPiDJqdJxGNSChHKH2rgW6xhAcWAVWQTF2UeAznhoEyvk9BfmDXVJzX72wS3gyi59NU3jw4Hf1L1bsY1LXw96",
  "key1": "2oGCJMZ5jw4EpxxGv5uWj5K32AXj55o6QxQ1XCRrKVDBTFf6fGruHNuYQckY6CF2N6DaAZC9u387PfQTKjaiKDAg",
  "key2": "2j8KvSVK2sjxA6XiYFxDiK1a9XY3ZN6XPjWJxMJeFfCyQ6irJ6jUenrL9qPgKLoea35g3oQkBUBfhX1MSucqyMBw",
  "key3": "2KsrkNtGtpBcsSraSpds8CRQxbdwrLsnTo55XvNMttCu4vLnfQyirgdwyefKgYajMe3LM8yraABYpYF3NkS7TQxZ",
  "key4": "2LohnZvJuXYRQE4srPffNDJdxkWgmv3KjZhauEcmpKXrdbWNAMg43RAG3ynK4r7AQYL2M98U8xyRarAgbhc6irqr",
  "key5": "TcjfNtk3qpVFZytVsGrfLAG6dYC4HaRzKR3sKB6k8bC458pyGdFX8i4HdhBc73AUTnvcbkfUVLjfKLt11Mv15N1",
  "key6": "63p3bNUiPMoyqfPCuLLSLeU3hAH5ZsLzwu7ceD3nmCkZYgyrmpin84KQJCBtCjNj3D71Wjk2Tgdu15t2wQjJvHa1",
  "key7": "5h5D9NmLmsBAJmQd277WCDSkwMuNnZ6B5euaFRKjj6gb5x35Ga3BUnZBNH6GizzfbzLiUX3hFUUdAdibCCQt9GeU",
  "key8": "P3V7mUW3M3XhrqCnrAePX4dihkoh5XzWtRgkFu3DsgsSqM1RgYPG8DnWLoMPg8ojCjLr727Q7H8waq4bV1QiwGN",
  "key9": "YK33KfgoR4joFZpaCsi2sZfa6RBr9csLXpduRzHyhBwycxrKZrT7xUu6kSerXYAQEaV8uAdocA2MvquBLCD2L7w",
  "key10": "2XbwjgJ5giPMS1k9kuck9rcY6PAfxWiBisDmXxCCcAH4K8Vsa6RYFVBNcyZxdyzN9i8Tv4ZardXt7ZBVwaB6W9Be",
  "key11": "2hLXd562zat6zKhHtpy9ykYmUQLMPP77SHs2h1tDZWGEZKmYumC1uVfy9uqBjj2oZjgmR5JuYEypUE4nV4EBmX2H",
  "key12": "4YihnigemHASyFVT4akkMYQyQKWG1ZwMAEZbVTGjijEwmP9GnCxWG31Wcn5L7jCa9vikq73SjwcUm9JT1jDTWe93",
  "key13": "2usSFvHyxepJWYkT6bovAHiamKPYhDMywhmVR7UtAPKLuKHWTBiyNBfAsWG8bog3jgEPjanQ6PwwsccNdVb9U1Qe",
  "key14": "4K8LKGvdoqY78TFotp4gXQ51SWLgnkwnmPLAEhr5TPHYEfAJv7aLZ3xpywtnKZuXPc6ygmYvyqgifTKnvEvpWhFL",
  "key15": "5E5sCWLEbeSzJrMLhrCu5s26aYESRwW2ePZAYj3zdvYmpoBkRw5NT7JDRpvjTSwoPsg1TwCx2nrakXFUgxo5Drcs",
  "key16": "5eWj3WND6tfc1DhqrHPd16rSsyYETne9AtgAGc9C12J4TFtmpqBendjMURv3MXL4CJe6rFczP8PntZRFS8ReUP6z",
  "key17": "5U5FuZxz5KrrQfgD1EM8u3Y5nuKctDq3my9SPVyeZncwSyUHWSuJJJfice4EtDWnwGrUowRN8j1cTD93pBGcmH1H",
  "key18": "wRoZLrj6y3GWRSs2PXzTVKEvMYTyaqkRcBJEcq4pyACRmS7tdeQSP2dJssatczPTNLPhmQdNg7EzezWsLM3kGfg",
  "key19": "3fvxDaYXF7iyDbBiCDnJKnwopGdEPEh1DzrQw5aoCwjpT6THQT2NyseF8dRR46aGqPaiXQbbQvBDQiRX9M9qynPg",
  "key20": "5RHVMgjMu8o6KMuhW6p6hN5kJggKW8MLMCYYKKJsN9UM23tpUYtacGzgESzLuwK1yKbaYrw8Nf8omvPm513r3P2V",
  "key21": "4XuiZAKUKuy1JfNuw3kYmZLhAKVpXg55UbqUqpWYn9cnzcprWkKuSg1r3cPwz4p92WzYFfA64Aufq3eYbosbNx8t",
  "key22": "4JS1adW9BH4D6RkAd9ogRAv8ecYvPi4umsonk1hh1YchJscwNyaoEDBVzdWg5WiUcxMYkWx4LAz4TwnoSfL91aV3",
  "key23": "5k4tri1VJKr81xhSWAKbNUtefBWvBDXmyg7w1xJxJjo6QTCpJJwKwnS6RXU1HrbnPhkcFvUoomtm8SenaSKXPm32",
  "key24": "4Sqm6n3jkz4NCJyyVbcMJwYj7PYCXJpyi2Bb3EnTihQhPJB4GpozLfmnivAr4DeFXS3PGC7VpQxXg9t75voVevf5",
  "key25": "61KFQFQpCgrc7Du2h9Tb4CqXPNfLqNdmA3p2QwG5SiLEj4qZnPsDHo9hzjpea63U2h2WjAToGcPNiQDSt3tZoYyj",
  "key26": "27saoyfPGgS1c2Xa2agomBhtGvnasEQFuHw3r81Avy1dJanCK9Xa6D6VYrCcn66BhWmpFtXgtuZDfdvprmwak57d",
  "key27": "4yUS4EuxCFpWbno663yC7fQt3GsT2ZuNbeX65r7d4zSjmyqHU2P68nWFCsBGLEGZVgNh32Wfhf2EP39FG84YFWwf",
  "key28": "3Ydd8hv8vcQ1uyG5tggVm1xW1Px596PKLemU7bzq1depAydeqof1zxZdVtfSbD8Ydzu1ro6hz8pqfah2JLWJPDKv"
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
