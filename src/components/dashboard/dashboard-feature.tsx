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
    "5KU4JdtFyPUUNmdUjULq3fmzxMfKuMJsPxwYMuHoUq1aQYMJawScunt4ajLrMQiAy5UoqoDNNqimLUguJqMBtJS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FPGDQuxUi8S8227V63HXgDYTXANALQASW3tYFMLjU9dd8qkkjHn6JeLvY8k4y6H836KfSLz9q77CZpoT7m84WAW",
  "key1": "47hqUnDKP8kuML1iwPCL3i8XtCtxcThg9ZtNRQz9t998Rofxd61kYyR6Pkjo47YjiFkRKEXgbgx29TAgBhf27M7h",
  "key2": "4JWdMDp9UyKTBxehNm2FpaGRtzq4ho81mWpRRbtahodikp2cqmvMSHCieobNg3gmPkHU5pJwG7NS8dzPL8m64Rfj",
  "key3": "2p3ztiPwKcMW4wKzbcMLyVdAEJjhoodc2i5F9ZGXdY5gAVPYquwqErAABbc5vhDa4rdd8zUXv575kgwhJ4E5CwDM",
  "key4": "2Z6K2Xy5KnagBhWrf3xtY19cMAHC7YxQjhq3WMZUasrc6jhgYbVrPK3ex42Y2YMmUwHR65UcC8qMUa4p9WkyZ4rC",
  "key5": "3ThrF5F54gDbgQ7ZkKj1jJcv7Ej65WzpPn4TnPTifEVKAVkxDKnv2DUxbFc34RQjA1RFB9HJtPFqwnbBxDgULMvG",
  "key6": "5ffjSGLhhZUykKidcaBxQWisYfsFAbQByJ7gY9LQtkHndVhMn8ju1cc5AUjs1uP8itKyFcDtFR6NXc7pG9TNCXy3",
  "key7": "2Yxhkx9cqGCRZqmHd2E228DHQuWhWJWA9tEPkuNQfAcx7NoUiVKDLjzdHknacRzA6BuqkN4fkbEt29SsR7k3F41g",
  "key8": "3DGnXUSBenD5enFkqykiKPSNCN4RC2cDQN2QSVqdakoP3DSpQ4fg3Y6DmuQw5XUNX2qMZ5grjZNJGNfK2qMdfyGy",
  "key9": "3bwdUfJYwbxEiydaeCEXXWk5sNvddLvGL4FWeoAGPBNwDvfJ1XdnxxNbw25L2PNLaqsiJBhcTU8RJsoyxTfAPDej",
  "key10": "H34fBYUh1v4xoHV3hxBDi4FvB7aKeXpXpEgvGg9eyxRUg1FRLQG9qbRLCnz2XEQCNB1bsWjKtba7y9E3CBreFSr",
  "key11": "2mhPkvFGj4u9q9jWv9wVyHmLzcJ9xkJvkBJYoG8dGbsiigns2imuHMQCgq49gJ3xj4Esc8zEESVd4MwyQVP1z2oE",
  "key12": "4iGEdEBm8iF2D7oDtsQ9dgkqmJi46t3yb4tT6QbXfiZfTm2z7BHMPUsJchc8FJRnKBhv1HQEfRersyuna33VpXFb",
  "key13": "2WEoCiQj4qbTaezkV6DDe17ZcNrZKDpSbsopS8cyjz3mS6JGtonwQDxM33uBgLDvaMxMWFrghHto628Sn5ZSgoZz",
  "key14": "2afTKk6kyRpUcSzR27QVvw5bN7HKoXfWGScPKi9vH5znPTocuZGE9ptYhchGHwpfiTih2yiTyVzXygWgsfrB84vQ",
  "key15": "5xY8bXg1x3Ty6vxC4J2dP4v3JP6reMwrLKVgYBZh7JeLB7iHSrPm6FeVwyvw9kYwvFMuqFHPAptX8ZwajzA6cfTK",
  "key16": "3HPdk3pbMZ63nirkKGzZ4PGig9PVD5sADCGesnwndKqQiQH5EjRmQvj8eyFfUBUnkhN4E7tsx3qb4v4R2P3ZGNBh",
  "key17": "2Y9qMLZ9AiAWyEouN2GsLVFPrMi6CuFKn5PH7feia39UAedYXCXgSr89c7pQqSfcUguTJVf6kzdvHdY7WzQfyttu",
  "key18": "3P5bpGnS7VoQsKjoBahW3dJZMZPzZHZ62Ly53N4Wsc3t4ZXNbyUQiTNpro65nAxWdWjUR5NLxBB3HCLAocPNSyH9",
  "key19": "2UUQikobWnUmXPYrt6T3hjc3Mks8SV8ULLTGGa55ZWLvy2te9UabZxj7nTUcEquEfaLGdBwiJXfojudW6B9S491y",
  "key20": "4qXhSt46MhrRH5i6cLWja2rYvoFT9AjjPfFecdomLyRUPQNq5fA4NxSLJJ47qA1gzXRfmJ5GNt7uVeBFzpRbU8oE",
  "key21": "2SPGxmTGG4vuAGagew3mc6LaPMPzCyELGxeK1tZmBZLqNVRTq3Heg1MUZg1eEjc2J4Bkqf1RZp6XGK5ofMquzTFY",
  "key22": "5ozPwsKn6aYxTmey5H9CXdKqmFV53jhGXSyFASWWdW5ZWWsTBWotyRPnDkxJSSjs6rwZWbmZ2K26eTEsqTLxHCgC",
  "key23": "5kTJdYjiBMZgD3WtqDdQr53NAVEx6E2oBYzHu9gbQKqdX5C1JGtkgAKR5sUnW7cHmCLYFD8on8JBecQAjHvmEFK1",
  "key24": "3Eq281TCytDqevCyYToNRBgiqFGLyPupUA2jkjnKTHzbpS694c2E7ndsYK1wDEpyxcrQ8veDhj7AHxRDcWWARrtH",
  "key25": "39MxqvdmPwQrxoaEnPSrGbBJ7HGwANziGTdispH3qqBhCYSd4LtQStxkQoKnY7S1qn57w8ubKhXgV9NeEG34LmPh",
  "key26": "4McEzi1VZTUiYZSmZEDtYEJYqB1yfvXgHDxgjB9ZYLpTFfbihgBfR1wHoemADdgkvYm9XtGut9iMjG2DSVCA63PX",
  "key27": "32drtLrntn56rQjmTwFs8EgmRJ6u8Rw1RX7oBohxf5VWcuudqAxkeyfyczJWuY6LaFYR5fZBpdnjQtk7XhtenHea",
  "key28": "DeS1grNCKRiW6nPQX2ujqVoethqtZLADysB35QAMmRebXNMb7H1BaTB9mXbKL67g5dBPchnH1DAYscq6cvZsUNQ",
  "key29": "2Lpe5uXR9C3Ch1EFTSMroQwYf6wLiunNUSPfKhNDSLXpi3iX7uMchv5cXiMHUqGF9maXLF2MxGxaaEcqnAMFP5UQ",
  "key30": "2d8ASKeDZ7oBJAo4BYQ7ijkQnZPh9FPEyhp7ttesFfheX8aDBR4pRUmhSfurwaTbLnJtsVcw6jXvGR4XzrUidA5i",
  "key31": "3vkM19xitPifR6i8NkvYqARqHzQzNHpzo35TR5LUsn2wzGrmXahyxb6nxYD3teapci4Z3rJS2KFqzgEQxDnPj8iZ",
  "key32": "3ZihHDxfaF9TmAd1j1CPT42dkhZAvdQhxyMHm3ahWaQ5VeNdTe5tzHZRSJGZQr7sMYpG2NgxXRo984PrPZHry5if",
  "key33": "kEUpUixBGFxrKuGpDScJkfiUuw31kusbEuWdXMkGbdK8Rt1ZRmYP8FJmeLBCQDqNR4hVbh27gZoTC2DK3JDQETZ",
  "key34": "3Mq8t5BobHDnLWPSiMPq6PYuLSnaWf8Y2TQgUjeXboW4hnNQomV74zpxRyDUMZRUVeoLDiAMwku7a7qSb1eaD3KV",
  "key35": "2fuy747JVDKntwsosVaUmWSYn3SwF6gC9EN8odrzowBz7Ccj4qNVuSeNat6qix3ek1YRE3gEF97DMo9xQHN1GsMC"
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
