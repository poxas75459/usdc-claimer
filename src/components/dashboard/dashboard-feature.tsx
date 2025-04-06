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
    "5JeXhQGpWq8w7L8WX69BWwm2WzSh9aCBa5gQzzENGJYyThYiQ2fp6PaZg7KdxSdhstWhdmZkU7h5huEzxDG3AEmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23oJTkQTb5wAgkqcx9WnnkUR3dx3vT9zAnmNYiiEp29vxCSiPBopCEgwTXmC8MQW67hnUP8bUVJkj6YjMMwtSU1R",
  "key1": "2nwTFu8uUmgJiMUEyHLwoNCY2Di66e1c9PoddAdPAnBnaB7JowsUGxkjB5XZYK4WffWq5s683yb3egf5bCttkcxb",
  "key2": "4JnaJ8P3SmrEPDGRYLZeBr7gPNVNM4X7gGiMgRXE4SotXR9XL95RDuf1vnjX6bootAKdqoCdmj3MQRditQHENu7o",
  "key3": "3BUmTLPE7DPeSUWLQm7t6LzMm6ntQsJi3fg1j7w7q9jSrvZpWrHMRiVnxaZY5DL5mZuzN2idaLGqy8PBZT53dzxw",
  "key4": "5fiY3j2Bz6pYyHwj18hcQH6Q8dnpJaha9ByGXZVEAJPWxnht6t3QSWnHeZdmcZMQJEaNj2uhh46S6xifqV89UjG9",
  "key5": "3RCMeiGZLWdDiuYR8arg8Gyum7XeXMZ3zAqR69xMtKAkvxtmKhabh2fWZHXcwVsYgMWoWsLoveC6eGi2UR2RFA5G",
  "key6": "239XzBkWXNFQ6NNFUvaZiPAiGsPVwCzxNbHrTu7AApTVLRVo1cNUfBkcMCbR4sCycDa1pzY3jNZ2kNC6qSDyUCsB",
  "key7": "4iASDeGEd1HzU5DVpNzaSC5PA9Ceo3Pw7DC44MpGqvTKXBrxZLpX9CHVCuA5obZtqGpeMuD2BFEcLSejLLNTJnm1",
  "key8": "bT79LszjkRa7vQP5C74KEV2HHJ9TrgBqd3ctQXfyQBmJpfu4P6z1KHzQY8KbtU48NKf7W324h8kcXsjKg22mQ2D",
  "key9": "4tx1JNELZVCnsQbskEdxivZewunxTp4ney1agEwhm3crY9mXMc6sBLLPZ3JRC4qtewQocfafHxkqpP2CQCAsfaVW",
  "key10": "3gfgnT9d7h5wAxqzDExrhaaGxiL1C3muXbaVARyvxH8DQfNKoZwxFqobiYeGsCYiBojqSn6rXC3bxLVKdPwaRnXz",
  "key11": "5oex1yJJAeMwuz22kwprYWbug98whZLt2VY4rUQEKbcFdasfY6eWU7BbnEbteZoZhFLJtmW1HtXo9V4nGW6BLvub",
  "key12": "2xSEHgkWX22XyPb6skSeHorn5auymPvcrBnEV3aGjJJDNP15n3aAx4yMAVNhvU7YwabTwS2gYCWGo3f4Qws5b3Nn",
  "key13": "XL3GdKHv1dPPxV8zwc9Y54Lnfg1pQRGGco7ksERAJShJCXRW8N74zkgvTCUajtAtkcquRf8hgQ5BXVxmL7s6vEc",
  "key14": "3D2158PUHxdRsqF17zQ78j81Wr51kE9nzhZYrxbMp9PioV3JRRYqLJPA3aV8CPmUac3wAasE6Np4Ek82jUDkYVXQ",
  "key15": "S9Pxf3fe4YwBgPaFpVW9kfTDdsqzJbr47GoonFdCBsuYKSZ1Y3E9LM8VuY76Ti6BuFNspSDFh6m2KkKt1z5sqoT",
  "key16": "2Zioea38ppGMKosm7TAmERaJ1Y5fsWaShKRpSm7u8At2s5atEXCXzE3Bcp2XLJHqriX4qiWaSRoBSvYJhqRuopyq",
  "key17": "hqsyUF1TgPkLYPNN5HkqbGwNrS9jUSrJ128dmw7wpKqsZrKyjrrcQ5iB5HniEy6M179PuTUsAXg9yJDBkUgKkFh",
  "key18": "XFKR9gofmQZjJ77VKbqsMQg1iYZY1cJGMmjiN3CuChRLQwZkv8rwwyEgkXUg3kzTu2PdA9TzQ7jyug1RrZmgSFg",
  "key19": "4EuNhFDNmHHHXfVVVmiWNkFWjNFuoTaBfoVh48x5frKFBD6KJubwSvXcoscJBN1tSbwkKSSGZ2YPYFFYKVGjArGo",
  "key20": "4e91AavKPzLXyBo7CF3FNkNQEPFrp3uPYKdboprYHyygHchKfi8x82bt8x8kBfXHkZ19rNapaf3536MmJpU6iDLH",
  "key21": "2TXMEeBBi6iw9CQjwquMov7WR2BdSv1zFUechXYF2rHvBuf7RLqYqnLCLHPvAsP5H2kRZrAkdz1iJ8xRG3NCAPps",
  "key22": "3HmKUodLg4t7F7ZTM2pNkyUAHhhtorBVQuq7AzdM6BD1Yo7BK8FVJdYWxsPdecMkGQKhs9AspNuP41c3qmaRDTEo",
  "key23": "2PTokDfMY5KUVudZz89usX2bJuj8qvwBkcqBhyJ2hBtwqdrvVrUFwmdCvponnzH6uhBoGHSd5xDPGQA48pWU67gR",
  "key24": "49kyxSR6B1SYidPwyYn6AXu8giE1VebmC6F6aWrRu3rMgjMMNRrbU9a2qtQE4ih3mXrafZpuoV61exfq58TrCCtN",
  "key25": "2W47MrFBZersvbmV6j7UoSgF9vACY4ARGeEoRg4m2x4eCwrgu5d2gNnKNEo7pGpBkyJUSfYnhzToFifUiShzTwhk",
  "key26": "3EmX5fGUoZE13SCXUgTArKT8wtwBPAxe6Qm1R5miDVPGPLdFbbqRHJd6C9bczkDaV2jyWKaZQQ9tL7hDuLTxWcyM",
  "key27": "5hADn51wX6ZQa7pukmZ2UB4AySUn9XFf2XyYqXBMF6yb9MeRWiGWh9QV7qZWMxWaoEDBkG67KgrNgn6t8gkkzvJb",
  "key28": "4H3UBUMRDPu6EiBQVvtsZVggCRzBMyspKyjmTxTtrQFYbk7VpmeVMAJxnvKDut6gTN2q1zimepDQpfetgXHqFnts",
  "key29": "4A1WHXw3id77w8GkZeDKegkgL9qxTmDug73JMCvuVGY5CDiBYY2f2pdtGn9TaHvsrxgZgmCSWzHx4xj3onk9gCkv",
  "key30": "3JZkiN9PP16o88tCLFa23FX2t9t5N9qK1nz2oRYCnBj8y2UnCX9sbpMRtxNEtChHHbg9vYjPQou9xF7EwBW6reBW",
  "key31": "4yUSgzYNK7js66xeHBetm6FtwnnGurjteEb7agSWz3ncnxTB497gAFopwqujgkZtQPK5bwNMiDXGxsfhJUUAYjkF"
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
