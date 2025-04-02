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
    "59xYHgN4n1ZeNzFRfcrofnDi1PDty9NSrF7NfDxLrZ6k6Q4qVTzJe61vjz6Ej9QjhzcVJBotwpXoPPG8CYR2fRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m52UpuQUUhanU2HSmk8ReZHLZj5eYijJ8YDKSGNhLC1zzau4Fe5itjNgmxiyVh6pEnYCvnPciJYgTDUaZSohakZ",
  "key1": "4n1TERhzkn1v6K7Joox5ZvKEYxFDj7hgttvbn9HeNEbfbtEWgKEErqR8YhYJuA2HK9sjZMVmEwxNo5dQBPzpo9Dv",
  "key2": "4y7hD3DZgohgDJWQsYqZvtmxEToXrVMR69WjcSjKyvo1KaxZRQ54GgixSiMipEEEHfr43cCQfZUnnnu9pYLFc7Vd",
  "key3": "33epdzEX4hjDmJFmLdQK2JJ5SkitkzGuhgPZnp6ZzcKaTTVmHH82zk4AQyZzeuo5HmcxUCmC49rsSG7dyBcLkXf8",
  "key4": "4ViXiqLj6yczi5B91BAPxZKTcSiy5XyDJZ1q3n1gRyJXMvzwaivfbvdpxTVGBhNMH2xdW51zBQiNLHCo2UiZ1LLp",
  "key5": "4dkWhxcYJ397oqHkpNHcDLZWpeGnRR12bDoQkSMYhJESDwbSHNzmjcarCZcazHW8z29BroKNmE7vGibMQe78E8M6",
  "key6": "xE9kh6mw4BsVz5hff2ZZYAKGySVUZdsQUqu5ZDPZNiiWRFhsXjNB2R4fqvhtcXRQe9fKuXGZAjR72aB64FURowC",
  "key7": "5YPueB5a6mrEvRN7wZR6LT9WmnmC34fDBEENqkdeY1m4Xp9UFZppYKFreStMxYCPnRGEdxMCgZfxg4qeziTDVeQU",
  "key8": "dKMKAFC1jVnCnH2Y6UjnaYNcJgparaU155jog3AQNWwms8E4Hqwbj9NCiiCDFbAREAWsQtapxZJHvYJCcuBeCbs",
  "key9": "38Gu5MNMbCUgp9EP5Jh3B23RLh9rbxA7o2jUVfnXkp1Q2DBBiWwsepKtEDxg5itEH1gnyJ3AZoojfqsMvG7215w4",
  "key10": "498Ldj4okAjrKHyNiNJUZTeq3e9myao7q8nud2DXCpLaRrmB5HRAhcLwh71vJtVb9pqRdFiqWcmr7Qx488ryXNUP",
  "key11": "4uLEKdcxSRCbYLV3T4jy6MQuHAVoWJNK1MhY9VhVpWUbLTVGH9ji4cvkfPRPEuM6DzsrXRgtHzLEsR2L7gAbdn5r",
  "key12": "22oBWAs65gp5H8xBLBnLejAGwU6eMQ3JMog3jZUVR3W8HTEHuCJkf6xtwQfinRxpAXSZiRusM9sivUafsnzjc7Yb",
  "key13": "2sqKn8Uu2LsFGomv1Dhd9Eac6TYdLL37BvP4J4rGs1sUFhGfeXqwq8EkEuhapX8kDYmLXYvtHmi9EGZaySMq65R7",
  "key14": "3Woi3HMawXWY5utBjYFpdfe4Sq8ExfsrQkuZh9wpPK3xkrX39qHacZkywH7BcFE58wHCPpQwK8CSSY2fWYXNWweb",
  "key15": "2FZXpGPNma1ye9XoHz1T1PM2R4uVTH9PFtwMmyLA2vzgHeqgmHKnzJrdjMWmPBEp8sw75NL9zWBxu9yp7DYszSuh",
  "key16": "5ZCvkFEFRry1gz3xP4Y8Krh5Vr4qXLYETa3qNaq46mXfZWdLVxgnrKU9qMwPNNL7x7bUDW5DCMhqG4qPaXbubgPj",
  "key17": "ZDU9AhKTL2jvBHPQUztYUrX4HmZXaLigb57v7v2KRfKhcKRTsTqNmkyMXKPAKb64EbnP3eethLpybPgqzGQcSmj",
  "key18": "3oDZSi1HADNUk3a2KNDBNw5GkV8JSZ9P8fWd51Xm4ZvxAnoLpAwPbduk14T837F1Wwyzb5vD2SZzopVAQAjxDf61",
  "key19": "3ijGVaY7dyiq9opfhbiy7bhAXHjwrFk8qsAkB2VQZTAY6JC4Un22QfiR3HQi7G4cqHkndkcTJiD8xpV1PNoqhgW5",
  "key20": "5SJ9ufZkDHjn6fj4suHgEaTmfAr52PUMr3QWhDGkuG6RGQw2tw2jEhuZVp69UTNnMko3LyH2iuaG2fuu2RTgY5r4",
  "key21": "3vtZLbKdxW4ybZZDSA8x5qJhafBkxLAetbAS46TLGrzAUQ2MCP8VfUDmaRB8VXB3hzqUEkEsK4SmxvFJqouC5Svo",
  "key22": "3KLEobbh4Uq7fKsoQSoFb7Qu68ce29V3G7MYWgxp4bvWGaiJqAobrDptXuMEujmX3Xfxwy12v7kJASG3LWsjxXwX",
  "key23": "2VfSdv2fLDPhr66Du5h3yApcThYi4VnvLyD1CJBvSeovrRpLEnXQErvFQsRpBk9wMcNF2AK8MoZtSz94ycUzyVgi",
  "key24": "59myiTunYMmBbkAKs2o64yWJJnMZVhseg543GL5YRmCXXQb7aYvVSnHMhsp1h8gGhbQ1AcUGwZ4fXjhZswTcbPcH",
  "key25": "tFH1kbQUbb92hBSWetq7SYVoueGmtN8iRX3yLP5uTWW1SYRxRFdtYucZw5U2e5bUjxerfdb3DJRESFGUvRncAXq",
  "key26": "2zrpjPPfXcoQbDme3s6tLZ2MeCEaE9akJVBAmMKrhHB69drKgCfzksZBgKdM99ASBNHtpFanBfAU8r6x64zkiH6a",
  "key27": "5mjxRHKLhxNC9RWCkVBoSb7cHizMzRp6xX1ZeEyWkU7dZFMGPo1tsLEcXwKvpXkHPTJvgcrCtxitt8mCikrYHEq5",
  "key28": "1HaBLgZFzBwbmrwftVvS5KXGQ5ufZcNQoxnmmieiDTJfZJbNW66VoGsfcuJcEnF1828LbMiajRAqM5qG73ru6BR",
  "key29": "63FStVLE2dtz41KZaLLXrCwtwmfF2xpzzM7gfAKCdiiMWLPQkJEZ2nWGBftuj8bNraRM7XndDk2QS3bjqVkUX3xT",
  "key30": "5bbkUBkHjBBR1SgHPK2MxA6uzybougQqpECMmdQTRoZbEFpMH6mnBx4MnmuGRuV5MVpatjaafB5azXzJKUK2aPKh",
  "key31": "3Pbys9DJrGLJbkzh1ZM1p1Wr9JCyutEpA1VfQopJScNfmytRSYcgaQ1yzsaxWK3dcXS7YutuNCFWgmz484Ndewhv",
  "key32": "5hcFppXankFMoojqd7FRSyuzg3XwzQMY274RUpuQnGRNESpBqdoSm3T5p4BaV7qR2q4y485Lyr9TshEXfm6R7Y2P",
  "key33": "466uWMwirWF5MZADnvMkaG6MtRfvUiJb4BBzoo6eXnfrC9YBsvp1ZU8GBE4d1CoVqw1VXLgSZncgrao2g5EzefFi",
  "key34": "3cUM6VdpqKu76mPwkvMEJk3YMPY13DNfMxXFGMdst3TaQw5Dn8cBCXf4s9GV4xya8YxkdH2ZEneAvrdYLxXQdDwG",
  "key35": "4a8zshnQcwRAy2pEZKGx7rrdMGrjkiyMNsBek1PDxVfynfmqENqQWFJobe7gGd4goiXbDh9Ch5umktrQkSnWa49G"
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
