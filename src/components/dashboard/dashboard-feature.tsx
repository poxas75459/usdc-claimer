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
    "3mffDk3idgN7ZhDwC4QGLxKKVYfPwY441AFHK1Pki1LNB95J6biCG51TTw2jPr6pJbHaQ3sy6VrQpgvCoZrNM2kN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bh4dfcHfGth1H9K4ujFNVLUE6rcDE1E8bNmh2UnsMGKnkFgMva66P1vKJsi7N4e5EnvcAU4xoKFjbcmBnRh5eVW",
  "key1": "5nWr4e7orMrasFeSt8yahf9mm1ytn1tUhbdTbSokEmbNhMNxb76WTmnmisjY3BkBEw4nvPKiHH4Mq6gVEsFHxSd7",
  "key2": "51ffaFaRM4djr7cWtPcYnoD5xEWxFt1NKZCsB6k9Ccv5vcxP6TT87ecbYR7ys6UoiRHcTGt1wJJ9g3obvFoTx7sB",
  "key3": "4SgdVE8FMenW1anKWF3dLj3z6A8Ewkth3MsKX3a1NhcaiasAyQbS8WXuEurNyn98iJbo6LMknkf5brw9Ufdbgpk5",
  "key4": "3GNhmVJ9SwZ8qDeJH33g8cqqU8XFPdVB9L1HatFSQRL5jagdQeZ742YqRf2d2pRb18GCdCP5FcdApj3dEkE1JaTZ",
  "key5": "5H3Jo9rAtceLbq6gDsSexd99Woxp5P6zin4rvhKwvZ5D3iJWuEpqx5cgVEzVya8hhf2yKwnTpMQBjGpijhFsTvR2",
  "key6": "5e8PLd5TpgnJjxVtbVD6afzrbnc9KC5UDLQ6V5oTAeLJT2uJS4pn9hV2H69BexGq9kQSTw3iWVBoxyibekeJgnrH",
  "key7": "2xMUWKuZDpMFB8ieQeLLUFmUM8R6QATnijQ4uFquxwK4BbyajbNhT4ZRJL3K4QzPMgwgJzNRcNYP3ZArGzkV3jti",
  "key8": "5SB3NPDme26bbyeqmBcsGmQv8mUJzjeKMvLxcDqQXowsBDmBNFJK3srtvipisLSsUNaY1J1FqGhgnCkSPivS6uSk",
  "key9": "44iqTHrRt2qAzX8eH2354RqicDnwYY8o343TCVKp2dTjQN9wP1nNTZwiqW1uaAxeTFpn89quxrVoMmW9jUokPhYe",
  "key10": "3VMYBbFcKCmetJTv2kqoPFq4J3ipeVUXgywCK4xy9tPKeUXEEp8EY1aRmJebdJX3kzg6KXEnYCYaVbLU6RpTyGFt",
  "key11": "4N6Bjoxf1JaAP2MBm74F34uDbRzKxmMs3dbW8D2vz9TBebNoT22uX6yVx8oH65Xy6fnAR2c3DLdNeUqxbcd4LM7p",
  "key12": "2beiUbUwPTEaQnoDRErb4uBNZ7MJQNnpYhR7fiqwirC59ygHbFBcfBGYiVufBK3b6rbfCFH6GFbvGdXWKnX4sj94",
  "key13": "4jFXpMFAwNgv84VQj8a1uDS2v7zbHpkU3TEuwBJPpUNxtffX6wuNBDRAd9aWNjMCm7wQLymk8Pf3K3uceGRouUuE",
  "key14": "55gJdcVotr45qGhiVmQKsuoys6FDjLCqFoXtcxFqNnDUcBo6odycq5vTuLuQZpBZ9mvjpUuv5nJN4kDS1voJfowD",
  "key15": "2trNVa1PsnM5vLEziehJN1qeAHuTyMoYHKRfpj3GTNpgpEDGPtd2MbXaK3p2kLcUA1ieau36NFy4juS6y77xStCS",
  "key16": "4LAeo29xqoKywwL772G6SJZFLC9T47n9nTsvCVPeDXWYvUAs7ckWBdQcGCC6dP4kzK5BcmR3wccgUgDvVEGMruxx",
  "key17": "VjrrWruaUFxe1ShHitteSYGJxMgdQEQjsGvZcGpxSp8vLQq3HXLQhekByCsn4W8K1heYJktxWvCg4zWoGFWocpS",
  "key18": "4sABXeo4fK4NEV7eWrqKad7wsDn9uevsRx532PQFrDrd7aNCJfQhf745Du9ezy8dH3JPMk6wRQ2pEhmVeU1aisAe",
  "key19": "4s3w6eerMUzsptnRjHJUdfGSz24xXaoJZBiDz5s77wD9uKHNCi66c6G1NNgPkftFieuAjjKBipsFYd4xi4uUHViy",
  "key20": "2hsrR26JCDM14Tp9vutCgcWXJDRg58SDKXeWCTbQwgVvAoZyK2VKTF7q5vpkF4e7Hk98ckwMnJmPe6sWapHe75x2",
  "key21": "3ExFVSGmSbPbB6XRavAfCULAVmKbWMAZqrvemHkt9ufABHwCSVcRcwDdgkqFWBpBpjFWEt7iy9e2HiZAbQJkREG3",
  "key22": "2saFUtkMgQPX2VVW77zjVmYa6efKFVDYWvhZPLzZm9iKw3GxvL1i5Vc6D2ccsPSEnpdA67Hnm23DpqRLSabnbAaf",
  "key23": "FJMfggP9ohBDWzQmKFtyJ1KpvzeNc7xnE3fsDUdgQCXiGSNy2744S2QrUQy7iQn2bMMZDbYueVFp7RekEZoKjiM",
  "key24": "8JMAVXZSGSVAi1Aqawa1uGCtXw4XhuxGsdiyjDgjDsN1KXbNADrvWusGLmMD31ccvCKLUDWzp3hdcRXJ4fNVWty",
  "key25": "a4rBmYpb94Gs32dejcfA46cDuPHLNRJcqKBEH9VxMWztJpNmwMSwevRt1YSzG6cHXMqdsUReHUHfK4dQ9Aq9pUi",
  "key26": "4jh4usS6cYjpBbB1XaGvafmfexgPxiPtugX2yQVagpBJ7zBrt69fURWniM3pECG7mXW3zReyyErH7VHQ975BXVfE",
  "key27": "pmXCr4PaaDsyYYAptzP3sLoD9kFajhmiVZHQs1DYVkoTJvi5NK2oHnQ6rAUe1poimut9TA7qj3Kr3k9MZNPggMm",
  "key28": "3vjqNhd3Ln7e7DEGnxGoVP4twonnUZhNm5WASbafWwqYHgLXa98yLtx4UvYkByoA19tyR9zgtk62wiTSxjkNLNrF",
  "key29": "3VZnmisUhTFmMunmmJ9RCgXQ1Sj9e9QMmtpdJhWZETrvXjqAdXGdFeMirJT5DomuqC3xdXiwcGUbFJSddN9yzm41"
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
