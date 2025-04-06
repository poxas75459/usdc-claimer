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
    "4rEmS778JuLsmucxuRMWj2FVUdsZxThZC5keTxCYzBYfH9xwS59g1GnB8XUgpAvh6bs9rrARuCs1MGZ144WuVkc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DPiXecvpwN9Uky5BAPgdYRVC1FpMJxm3GxndEQJQRh5Vvtt8pMGh7QcmFVyuwLdjX3iud3WaMWx4CVYPgSoEP2P",
  "key1": "4c5vY2FFp2wfzVnFyQ9r5XRiw7hCLQX7CVjBpwMvSpJ3cQ1gDzmv5kKbTqUHkQtcCeEGKqYKsDrnmsz2G5g9yxpK",
  "key2": "2DYkMLFNebrxVbciRDVEr6tkvbtmaUQuqyL8EcnKryXfv6gpBfafDgFiiWfCZJysbBeA7W2wKgtQuaSmaTRiQ3QS",
  "key3": "KbnsKeqz6X5LQ6xvYyvrjCUSwS19oon1EVEYQSJvPtnRXEkTJXgneKndKwoAeuZAADswju8bZBDBqg9Zf3qAT54",
  "key4": "57PkmiAi66Q7cskd3cYJAFtu9T6orSRWgkVYXQVCp3HcHszK7hJsdH1wU1EJLcRoBR5D68DfTCavihScHhCjQ5PW",
  "key5": "4xzbaRzbvjDvfGFVa2ci4sLRLRsoPQ4veRaKCZwok35a4Hv2XVpThDnED6W3dyn8S2kLLUHtVj6vT45NJrjKbuvk",
  "key6": "383FaXnmeUtVPzNfK2pAdwzScA5PrQtuD5KTpnGMYFF5CHTSgZ5vEqWv11Wokb2qfsyMaXSAiAVvzGroB6Rn5ZGt",
  "key7": "5yPTCFksynYt8DfUmcT23vzkbSCHetNwhKCm3W6YvT78jRR25hg5cD7DgcRDC1C6yVZVD2d3Kfm7p1F5W8PavYj4",
  "key8": "2u1e6qUmhgTuod3MXTYGyhEK7jSmePcV1CkCYACqy1dj6A1ttKED7Y83jp3JsroCxiyRq4Qyi15ekJMFPHQQ4LSt",
  "key9": "2DLcAMCUbwBSfpXEMEK8rMSZo5UeUDXEkTeJpdMCYAdndm7UvLGQHLjZeSkRomiP3qpF6g7moRWHydDbH52T5gWu",
  "key10": "2VBUbm2iY5nDmPK5aCCJqwQm2cVoGbHuNmRsivEYKDVA1SaSXPMjyBWJDqPDfeMfaiZt8tf1Cw8GfgDRgf583r5c",
  "key11": "2bBkBuH1RxTacxgRpQvFxjzW3oLs5fbwgeSidRUkAkTQsefBWqttVS61K1UeLNCKHPXnPPJNXssMUn4rqeGmzDze",
  "key12": "4dyP9S98yv1uNDMt6ti9hm6WYA8p2Eu3ebcmH7rVjCqoLpygXtUq7Mbod4tScUb7saHh7iRVGpHLK99oD9Cmksvt",
  "key13": "kgTRUjiJv5ZXdcJkGtwhsqG4yApAxSR8MqqWCt42buerwDgu85fHsNWvod8fmwBovf2SfEBgqbw7c4idBLHZYMC",
  "key14": "iphVbM2CSrsxB3vtKMRUtD94z4cGo2WRnpmsD4ot9fQe4D3iFoxZpm357H8c8oZddWbK1TmSErSRUJJRqAipjGh",
  "key15": "2vtqb9NQ9Th74vp8wvUEaQMWwtuG9XXcoHJ2X2eqDQ9p2CcbuP64sYu8niR7pVbySdBbhFkYTVScYkk7bTziWrzc",
  "key16": "2QTu2wP4uYa9GGz2vJW2b5G2bdoQggJj713DtgSjtKdGmChNZnw75dTL368SxhS973GMpqj9XA8P9RVYFWkFUx7X",
  "key17": "5YgfWkFUYje34UUQKFaf8yX9HDEpQwUaNnsANLZBt1aUaxjhWgk8JAjmUa1Kke5XLeMbaZLQmsrUUTn7LEnRozUb",
  "key18": "4yRDpkEhnqedgg4vPBVYMSK6LKWNuh9Wyv6aGDsuHuefommYoypT364kkEtmbSj3GafzyiAbai4MHGNb9pX3abyq",
  "key19": "5yr8kcb5w1SPxdxm2WiojbS54PJdA4sBCZUnyCmwThTBKvj4L7JAmTL496P12XnFMScACdx5MHnv4USfhjkxw4rc",
  "key20": "29YZnXGAiKFYA934f9fKEQVNfGWECiyKNXiYsHPrmFkDSRfEgKJynNvfhcRC9UzGwZfHLHuWQ6X7vWYvRkcVBaje",
  "key21": "58w7o8N9iD8E85hsJr9YPb84mVN59MaGWnRUR3SpaH4byj7iw4XYTLPobUPYVvv9ZGWB85jHpHbmk6o9RTpQeyM9",
  "key22": "5S78zfqmwAJ8KHfQDkUF2zQ9FYQAcD5RWcRWW3bCyhirJapV9CRA3zDHCaKtbtJnfroFw9MHRy9EzMDtVLiU9J8g",
  "key23": "3zqa84Zb5i1ogsfE7UdjtuJNTmt3C2D3cbqce4au4f5GqVkvtPBxiDsVmZtdZz4CR6J7QydsPrwJkTSnv2GvVuWm",
  "key24": "3XoPe7xLTRcYr9V2o7p48A38RqdhUhQySAJETB5nF65sZNQ2rmnTj42XBw7gzrdLi2PxLwWya5UTt4KQaJaa8bNa",
  "key25": "6uDQyt6dS34mewpUx5aB9HFX3PDPDiqd6xtFQTN4qaEZSK4pLHW4jFSDih3kYJiivTmmU1qMwpgAmWv8zD4VbD4",
  "key26": "9Zau3XL6RpMDW51PDLMvAsd54AjwBDTYyyANGF2pJekVarPJyTw189UkgaKtLJUy1447ivU8ogLYyVfyWAWZY3K",
  "key27": "GsiL3UcNr4eUNWXFvhgm7qxYLkGbu3JKfVSziry6xVmJnvzPyTpQjwfqQq6LhSioPo6QoUs6vJ82m8D1omHQwkK",
  "key28": "2r3LxAjWirGqFcpxusNHbNYyJDKtHV9Sanq42Rfhn9TwN36r7ehiUpPaUusAGR26fypQQisehaWN7Xf2VDRcAa25"
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
