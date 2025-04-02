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
    "sNBNpR2ULmMd572UVC9M3QhpPTH97vVncjPpiEneFbfTejVGuMn21rLHFCRC83hwStdxWoL4iJk8EB5BhdK43Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEamUakc35PNgJVMjQjsg4RXqNGnCXyQnJBagaiAvRXd37UyBRf1SJtT7sbGsmgmmdKxbnb11cHbfNVPVHPzmtv",
  "key1": "3zfegMTkdiMUkoqFZCCi86bFb7SrqxGaHw6S482511DmBTAzYHmcAsTo2on425d8MgKuMGr4rbukp66frbYS12qk",
  "key2": "496i1Qi62VkXeTXGEnqVgs4BB3SZsS41bzdmPzG8Szez3ZcnmdKWLBCDahfFH7Gb6f6odcuWWSkAq5VaRR4e66dj",
  "key3": "bvx3jcLUbJyr65D7u3WZPqmgA7DWs49c9V96uQ1fGX1QhA4RTbTFxEotxDjZbxWsZ5vnuwZr3MgoGj9Rqv5rtXT",
  "key4": "5xd9m4gGyPLmTx6i3o4ZpB2rDnTwvMqb6CmctXkS18d5mEjBsXNC1fNQYE94yTo82tcyGytGdWapASDsrCZN2aMs",
  "key5": "2TTypXr22uhEXQLdjEDJZmLnvGM6Lm3wSgcYwvshTZLnVpQ6xoU6eePvk3ewW3QLq3UaTmx2VGqUQ5vyG4D1xFJH",
  "key6": "2NpEjojmjURMPY3ipU2VSFyz4GDiZmuCCahp5b4J6Gbg9kuF3cGApFjFnDWvGKJnVrXiMSEy3pUWFFHpv7ewJkR5",
  "key7": "4Q82P1B3XnTHvt8nzRkvNbFBuozRaCrHD2vpnTuMicWKj5inVyp6D2eYsLSWk8U9BrHvqDQ2mEvkD6qa2MaAbPgq",
  "key8": "3vRHeqppFeom15o1UJ4SoucakAXUpWrTzKnhSMZYzHdnKoAv5cfg89PzBttKTuiuMdtoKb6cBKJNQvM7wKxF311M",
  "key9": "3TVNVWm7guY2rAEUSFeJc4BavKXBAt1CJ3DC8uKaJS416ZJHJNFubUJLodB4bSg8Lb8ZKdAjL4r1SxWrmgPsJVt7",
  "key10": "29ofm9s5XVFTnNtgf1YsPjMBZoF4QhVweDGH3VjadsTyyKjz3LesAamj5B1975r9Jr8UWF2z2HWM6tC5x1HudZaF",
  "key11": "2S9YAaJMRNKuP4AxWu2kufpMCVm4dSNYzmvBB1wTWZB5FuRbG65iE2HNKTr7SZf3wPBFCY8aXBA4DFtzFvJa1nMJ",
  "key12": "w4vna9rDNJyYN3ogdpdhNBg8kN9fPNHP2frRoPAvWKJqDGor4SD2BY7VQ3ZwUDN9PLpD3NogoZGC84F9BFSYRUn",
  "key13": "fxt2d8tnc24QqNtQpHrNiBxbV5nkvoU4itWQBGXZjRBUkieMgh72z93zysfHWMa5UZeGkfvbmJwf7BBMKBHhXJP",
  "key14": "psExMMTET6QAHX7zDMR61rQzFJ15y47pxeQcTaN4k7YwDEUoYpCUtrHQ6zfic4mX29Atg3cxTAohNitqAeYxLUT",
  "key15": "4UpzbKKQBUkiswng8E6k1TbE7f8RXA2qbUkF3gPSeqdQhJnncQsZxTpZJhifhh2oGgrXwrkb9GeG965AnUaYmk8t",
  "key16": "4snG6MqaoEMS2ou2tQLhXNB9FoFQUCUqKG21o82YhohDatAmokq1FCgkR6ApCHJAYRiWADk6wGoGgbfh214TuatZ",
  "key17": "5AdzUR6wVHTiWxEkFgSTfXKTTcUCJWDcxcBQC5groXsHsY77zUCa5kNEhgAnxC5Ur7QDee5Ha2oA2usWGh2z2z17",
  "key18": "2ZdQvXViNQvDWiTRyUqTxe8U4ARXfW1EAL6Ma9FGymTJgwPifAgAVvg2EMrprroHqVyDcQuBdL4EWRJgUVovnPnM",
  "key19": "4jmfP1VGhf28nuYToBwLW1Nc8XkfCSq28nDy9jqMi67X8Pou8aS3oodJBgs4v2uVoLMw2gCZ2no1BXGj9xdj7fKv",
  "key20": "72nizXVKPyHwYAcJdFfKHzXPAigyG1iWanpunG23b9cL1QLmkueUPEYWfrEnksenBP4sLMNX6khiZMzUbTd2794",
  "key21": "4EXPCjUVDPateakpht4EQYkKHfC28zg7XqHhCPW3SvrYu3K7d15REJyuzyrkUJ3WtyvgAVdRHDETys99YnXWYtG",
  "key22": "3bP3P6arYmEKBViX5gSMWBSvLDBLDNN9UDPj4xairWP7G5hL7RZ6GhQkv1gHj1XCuEDHzV4bd1iY5U34DL8Z4fyy",
  "key23": "2qixBQjrZVcXznFXD6pMpCajvTxvAdG9sCa5dCw44S2RUwPfVm1j7s4om3jLjR7KpCS9bXJA5fJN3LesykRN4aNK",
  "key24": "4SDKe29uRREf2DxzBm82ZeffoHZjrkREQXxwYZ4MBsCPD77WDoGUJWLNzUYf5PNieqG99eVgY92Ja8AdZPtXDycK",
  "key25": "2wyUcyPqW4RAik3X2YSUa3PpaBk3zVyJLAAWaw8X5UdoD8m9rCFNCT4zdSrdFXx9SKJ3YYth1J9e3iqBumwMCjaG",
  "key26": "5kYSmHYe5nGrm6pCXQd8moRUwpsKWKzWZDpfk5KuujX6xWVYoypEi3MhaxDzRam5FXaEkLYxBeqsRwcBipri7md2",
  "key27": "5KzkDkfdwQ5pE7KS6rwZgJBExqbYVvGcv9suWD55VT2G6Yd9QJMmcHHRcGzgz1yWKsRPwFQca7k26bkFNNT6Vfs1",
  "key28": "sTvXrQYpL5z9zDiLKbuzSodsFM1LRfDbJqMhJBTLHw1Yu6SaipF7EEpg71gw5kzBc2RQKi7pc5hjWAoJ2NMimL8",
  "key29": "2TiKBj78t375MLL6hp7YxawBPPgpNqoLQBDao6SvFzMjSEJD32R8YgYvr5cHhPewkPghK7H8Rz62qrgL9d438jSe",
  "key30": "2yDmvAyunBcVB6oWEqR1dhztZyZT1KbhQQiBAeka5Pav8XiMCkuGruGDDdbJWCPsvBhKBNrtbzyunSzrW5LwvNR1",
  "key31": "3NSYL9MmG1XN4ZotnFvH52bqtjb1qbbNMktVvBgzGZbMAMqytdYXCL6dZb4zHaJihkkhVD2AmXexV49eGEjdpUTu",
  "key32": "7k3FQWD5ch1XJzYKp5mMdqpaCqFRu6GkqqGD7QxqDSiHZ6Xg1oCejcpXdyATkjbkL2jxoAGe7TqYZjQp4sxsHbA"
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
