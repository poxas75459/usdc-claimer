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
    "2X9ahWjndPvMoZxkmqSjwYBxi3AiJj6UdBxGHtpLBJwAo9cAEd3jYwNrKa6XSFQvercwVVW6Bw8fVdZd64zyA9e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9r19w6WAw7DxdaLdjBMKVTP5KLvhBW65t491y5J31SGGBXiE7qjcL1q1oEsYzcUSnkh5QAGB3J17iF7j7ydgJg3",
  "key1": "zN6TDqrbZTQWHA4LFFb6z1xXuwfRr9MxHmF52MBjoG2Rp7cJAvyFWH2xoCxfscoAAcSNmfiKXu8sLXEieKPctVb",
  "key2": "5RMTpQxxrWGcqp9jiLGsEkhdhi3uJMzcYBbXsBdGR629VgpYKK5ujSGQF5twAVsa8jSV5JutAZDjoeEZqceabWEu",
  "key3": "5BpkuBJq1YsXfu8GDDZ9ooxiSVpwvZj7RSLFNFtzAc8sNxS6g2Vk63bwhihYSLKjSz9TDV4tm4X6rmEcDU2iXvp1",
  "key4": "5UTgMMM641bWYqsu1bkrkFCr5VuBttPBPYZV4x6ksf2j9QoFxc7TDZJQiNKP3bNvEYeebsGa7LdovEC346mxME4a",
  "key5": "3sa7bQYz19azimPG2HHs3XD7XnnHxMgXotPzoE792GkLRgHG3Dq9wRxBKfKnnNjxSCA9YN9WLwQfGgjYgKGaujye",
  "key6": "BQAiVtEEjSzjcPzdC5pMfrixgKJmbnRdCkyRpCAfY1nAuwiQW48jmfB5uiaEjhkvHJUqv9o8irLo3b5GXWVoGdK",
  "key7": "vVBYScHosdmXqwdW34NF3CQUioygsQs55B8EiM6Mf3eE3bVLqhdF8ncM5iuJ2XQLf8Len2gbvBYK75uTLciYRg6",
  "key8": "34ReeCKUqkNj6DhvzBJij5k1KUAU5cZfZy1yE7Ko3nMQoc9RcH3ou3U6P6Z8BrKSADhXCWptAiVApSFkdRZs9hTH",
  "key9": "46oqLhHqYPapTc5rVhjz67mNFTi3163dP5Ysbb6DXSzQvKBVDFThY5Z3fDnhKmfg5NpTQKmocF3uSTTVtiQ8mKiN",
  "key10": "3884WkdGptpUDnybwRTxWkzoZcJbBWG3uBnjNDZ8KdevEMQ9wi8n5TCd6zV6c1iFJ7Xn6odCkJgPCpjnpGsGJZEE",
  "key11": "4B49JZUyq5FoBD44Eu782tebnH6Yz13HHKP33rHi7u5rMaB327pu38Xvp1tSajeN6fKw7yvwwepjgnSc2CaGNgSt",
  "key12": "5cEmQBxf2GgEVZj1gVNZjV8uN6YGXvch9rk3Dpbb47pdpzyBUQfw5zkvXqqufJyWZazKJXcz6gz9jgywgWKXR52i",
  "key13": "9ysnD9ZVCa5nkGWq7tWhxK6jdHWK19LYA2VUPP7aK47c11tKiojvxy21nvcUVXfN6mgyzzc4UXuC2exHcPyQZ9a",
  "key14": "r7rkqjHuAbnxtwJoYbkXnXAFJTbuiFXbi3WHzAJvFsAmwa5oFXNDZgoiey3655CBET9k7sAsn61sTXKagyyhxmz",
  "key15": "2Cn4xg3D6kJytSy61e24uBuxgMD2KZ1MafDrvVKWkicGcyBFndNEnSJEVr84qovg8TJTNcNWBcqCnRERjBCWt7U1",
  "key16": "3inCVcBwuEjUNUkMPjvoZaeHt3Y2eoWXPoUrjt8wJzEGzheiJaAxbnyA5mWBJCgCeVpj9Fkmnx9hmYufdvLQruBi",
  "key17": "3daC4awo1qAoo8yRMuqjUJ3Z6j2p1TQSnuqNrfCdZvzEjNUHh9c2NU7wDVMB3gks3FDKTkeVyLqcodEpRenQXNf9",
  "key18": "2ZELhHXS3tH1yp1zPneprR5Dnw8dVsg7hit5SxCJPHLcyfVPYT8pGsVgWTu4avE8qAHTdrkh2ifUJr7YYHvdxsZ2",
  "key19": "2Tn1EzJxMqDyJw81zftrzZsFvJfzPCNBFEzPGtassrnvZ1jH7sAhL2Zuk3c7xSGMuFBk8qJM9MF8e4AV8kjKDdx8",
  "key20": "5ahgH8gjAp17wcCbo1LgJdH2qcghhHuxarKriiajTihX8BFpJwMUxt11ygCrxXRXJrtCCw2dgbfToacbCHHfV7F4",
  "key21": "Bja5YFMVcBdVRsH3WSQ6ZQj4dvvjfv9vBEgizSqLhNuXt9AA8ocMcBLXMA9J2YQTT8VETkC1HcKCJpncgqbXKHf",
  "key22": "5TkiLVRnJSF7fxiSQ6rqgq7n8G2FeMQPtuXuCyeRkNrUJMieYzwRYWymwBWyeHTiugSE6752y4NTEGHfedzaYpKy",
  "key23": "4RoPe9sxrB9SUpBSnaBAwAD4xTLwJrvNYckpg4dbLuTnk1uwFCkHVaUaCRyuxiod16Vxf4Wrm4eb7CrJR2y4W1u8",
  "key24": "37Np9okk1aj6Qgc15EoFN9Qg1VskZw3DQZGk8LeRs7jT6HFwDAQKDksFqpkzWYZ8hrvRZXzjWDKEbZZZYkYUE9bz",
  "key25": "5HoQ5A5fxHCgyxeAAuzFdD3G22rbcQMqJ3crvcwScvMvXQjjCFexeGUk78DrBQ5jVopT4iPcheizevtjzwcXEjzn",
  "key26": "2uU2ov1JdqYXCyTazDrMziLybGHxstF7h6gXvCVhv4VpdHsszFXZCx3Xbkp69iEutSVvTUc85HQqpwvmgvgTunHD",
  "key27": "3g8aCuGP8jnDZwgSqide2SX72kDeeyXuVhrfG7pzM4cfANhGKPZ3PEzp2yPwL364zgoWsr4PS8CubMrSaoT2yc7C"
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
