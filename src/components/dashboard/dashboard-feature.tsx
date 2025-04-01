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
    "66kRKH6Zg3AT4KYkXnogF1BrS2Sq12dzo16n9BxoEB5QctC96upf9yTVPinu3Wig5hQJuek76WmpvzVyj3aEZEbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4skzgXwdA9dBYcVTbEChPpq6YazPAvBpwmQM6fLEReh5YGYpSAfXmXSE9oAafezUAmq6DbeZUEwdZCJJE5crs9Dm",
  "key1": "4e1Ge78pfhjnrNHj1orfJbgF5doCDGqfdvgUim7g98bZqGUfoDvEkWGxPSV1FCefvaTnZ5BQrzZ45Aqbdhwroi82",
  "key2": "2tYebpQ8JpwVfcCGJA3UNFCvUeuiSBsPRYm3uSoFEVmZh5fHQkAfYZD27sZYMqfVUSmNufWXhpjARYEZ47yJYBCs",
  "key3": "viZ4gAFJ8ehcypATAfC6MHzyUubGPBE8g51h8et7W2LNW3ZmgC1hrRwzCdZ9B7D9gx7u5HELSLC7pWoLQaBrFdF",
  "key4": "46f11rurRSXUwx6MyVyyVb11oq2xhT8LRhksnkMNqALtiTY6g1CykYcveGwuNg8V2sNro6yh4TzzuN36MVdeVurq",
  "key5": "3h1aceWSLbpdxKQj9tFoNNoiP9w74MnRuH5mAdsuNuRgtMqq1EY6NhaasY71XiRLHo4Ri2RYo3fg2kx5ysdohasP",
  "key6": "4fvwrnmEJ8x3th4hz8pxfucqD3qbEsik69LzS7P9hSPWp2YeMtYzJ38R4AW5CGur6r6hZ5EvTAwDMpBXH8UnnP3Y",
  "key7": "Bxb3FExxtPMCakY8s72wmxsbicxkrhtdzwudJTC434Fk3LS8g9e68vH2hqBE9YJkP4H9fWio5rhfDjsL1JWDZJe",
  "key8": "3GGxDHVEivyUGpQWZ5AB4x5rcbgx5R7Nt6T8CsuESMgiBHeRmhSwFKCPc5Mru81iEGwcchdUGvvvoTQmtUW3kxe7",
  "key9": "5bcW5pzU4DyhZpAbgmsVeahU8QLaF4XNVtif3uKd5GU2VJ5j7dZWdhY67MXXH8QHEvt7JzcX5AbZxW7zmTaZnGiK",
  "key10": "32kTEdJYPZLWNLLLs4x5B4MTceWrtGTVCEfPVxCb97UwgDhhwHRybyFyHNgBX8ZPFuu75BjCyUSacvf5MvrctUrH",
  "key11": "MSy2zKXThDBKcgnGEj28kDpCSWgZ9iTm1NCd1qQpDjQ2wVFeTDbgQBzxKHpCW1jtxbtevHbYa3E5tL6Bmvjs2RU",
  "key12": "bz5WSccrApQpHbqhJWfF7MTG36eYxzcYLbb8VatA5wtusBu6bj1AcDfHFRvykHoLFt2v4zBXZgbTt1s2dfoGXHR",
  "key13": "g4GaksioA7vWwQJ9vcAVXnSzx27Ja5YuxqAXDYSXWUK95wokgpnVyrjCL6FdPzLnrgXYWFmyb3bLDiuFY3HA6EA",
  "key14": "24tojzV6XRSU2irJJQRg66gbJdi3YjCP44Qg2F6GNZfGiNUySCkLUAJaoVPGiYSpUaChyEWjrbDU91SVieA4owgu",
  "key15": "zMk4YuJQ5QyXJa6d2rNe2rKrPvqaVz8tzbwzBDfWB3LBMVCcS8rGKfS6EE4TwhbKaJDEHPveVkkFV1bPgL3P2gW",
  "key16": "2QrKfgDiq9cfLXW8SzfmCdQhaJBZnvZ3kP9wdaKSspxGurWJQ496AeyNSWqqqok1gwrNZTmi5gR7LQgmppnkpY4x",
  "key17": "4GW7aEQgeDWecJAhsbRpMzrzJT9q1tMEiET8aRcc8ujWEEjK9mtcJq5pw23F5itLki9UQABLKx9dzNJ6aKV8vPcK",
  "key18": "5XTV6UgkKdbxEqWdNZJgkoSLbbfVwTHeWtfTnjziNBiCkThHmH8GuXKffDzgLCLnGJGCeYvXk733tWMQvumEuc4N",
  "key19": "4Hu7mVm9pfvbQcrUVAc9gY4cipZx1ovpgBxYT6YgEB97F3HF3MQn2Usa7znP5dnYBji7fwGT4TfoTAXWSKnY5fEy",
  "key20": "5zC4x2eEwy5Qtq1jzd6SmQgvEQidhswLkdHRbgjoSRxg5aRPjZgHYgBDKpL977hPmeWNMmAC18GYeFS3PhPjWKHz",
  "key21": "41vbixPPu4AQRWPpNfHyEVqacPdFwLWKKMJS2VJimpgLWrmt5GperjertErQT7EjWTv91LBmpnfo2PRoxkFqZ2KD",
  "key22": "vg2Pb9R668GbcCRquidoySTbAeKJmG8DwP7LFb53dE6xE5eCqKXn4gh8hqpYaZCHKEz4tNUR4dzV7JyccQN9Txo",
  "key23": "18jiPnHc5ur1kotojvJxpckxKPkNpqfu3irngidHpnEbSZmUNyDXp4y5MpgBPjAc8xSiAAwiTpZg8tgsVSdb9HN",
  "key24": "2mmSJF26qkLGiyffmVzZrmeem5T9kmHeo2rWG2yEr9V41zAGzJmXxP9uJ1UqZY2t5GKJPfTUFCZSoUugErqsm35J",
  "key25": "2hsv9AjrfV3nqQzuPsnpK9XkcEntpmc6jggu22XTbC2dUWoSYRQ1gzSopR5Z3A8c7PkudSS2EMMHjHfHL7R99nbM",
  "key26": "4QJG1eNVu3D3etPFKA9x9uyqTLkNqy5YzMSMSzWLMdo2c5s6Dbnco2yYWHCAGMAP5xQfxMYoz3ZKYy7758Xy5P6L",
  "key27": "3AyDcPPE6vpEFhNzu1s18wmkikEx5ypAThKHdqm4eGNX7j5B2kbci66JLzDKdLQVZwz1sAN3HTvMyhRj164yB59x",
  "key28": "4K32Sf3hqQv6rdsHEPtfhpnvCdWneXg6DXBsUB5Ceqwg6qhvuYt4RBntJufB1eRy1a4Cqif6FqFQyDqVoHgmkiug",
  "key29": "4uAtW8CFtxXjpbXY5GjX3dv1iijDiwxjkMkh6SNJy9Vu93HCqZqsVLeKHD2QoeUgimtrQ4c1wwH9WUMhcRi2BJjf",
  "key30": "2SR6qP2JomsTmGQgcvrHPfQJqNsYJ5tJgnkKzyN84PZo2Ay9v6LZRzcvSVqrNvgP8fEcoJqqRKFxo1dy1z41KXmF",
  "key31": "2HGNqW8839pqg21zFf4Qdw1cMEjWsp52ztEEJZufHFVFPNRgXohSuhGnMFSgHCu7FLVUosWZU5A8kTB1kfwe3Rt4",
  "key32": "2mF4XFtpz2AEALWMzrHh2xni8DqDNYay2nFqzkasXFwLtnuSuCmAy46avQoyxYgTZ4pLga45QG73cxAiKDTjsMWD",
  "key33": "4QV5B589hbAZA8fHrj4DiHVjMzCopCZeJAGNadGQuuctFxZBegtCfoddNBdoQ8y1eFgdKaEdUEuPjmiqFhsNo2pV",
  "key34": "2a93xXe5rh27UUmGZQygyMCuG6aVRW4bFeXFNftzkDK1Hew2Qtrq2urVCPGtSuvkyT4dxUwjXsvxg9j5nNd6FXL",
  "key35": "FX8wUjJsVFDBcVaVMYWTKfRDo9AkWDUER1z1Hsjh6Q9ATCtrV8mAmM5X3RHNEtbzQ9GnWHyzPd9nsfzeddvuo1c",
  "key36": "5fBo957gXZPXNuDjdg92WrRZ4a2ceQK86mYUcjkJonYzy7PKNva8GwhhnpwxCiXMcXqbMfG77zzcEqQukTdP6wxZ",
  "key37": "4SJCU5N3qpYC2goHaTEi6U4ksY1HAJ248AMhc3uViEtKv3F35M6AZ6S64gQ13mTwyfC7hJ6u5bNJw6YA9onLBDnz",
  "key38": "52VJDHmcxqrAgV2TtV7xSKGVCeSMucqUFNgpPUNPE7XQztGSkHAAc6C6oddPbGJJMkMGCivTAQaDnnrcMVpyEPaf",
  "key39": "4RtNqizqqVWxQceP3vb3krqMuDJUY2XGtqz1FuUHasHF9rZxhpFimps3QZsrydhxYLL8ywddnzUV6B7h6SDJVJXB",
  "key40": "4zURSbNGjmSSoBmuEwFDn6ptpi38FDLSSFH7bzbAaGqbxHdf992YcdNj531mARx3AUZCLjn5wU6QhqfkwDExco2Z",
  "key41": "4pwMYf5NTEtf4wSSxTqjYJohMQ9EEfMVZMXAyTeT9MVrmLpdY11JUgT6ZbdB4RDGHxhwm7S7b8nJTuT1GdCTSHPq",
  "key42": "5qxVAiwehB3UkSgE2gDPvDpmPUPdDN6uWifWRG9WZQYDqJMncKd4WoctGgax2vZHQvRRLbYeaF3M7L6W9KGW9Ve3",
  "key43": "5g52emgpJCGFefWjJxZYZijo6M1TnTia1uVTxY8TNqTbuWicwVPpNwX62X5Z1t6R9xgcU12xPK2cXtPDwiWWZHRa"
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
