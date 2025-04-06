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
    "4u8pW9PH2CQiJ7K7rbKFJb74EXiHoacHcdLArsB3L8JYwdvAw4FrMTEGos34WvuYeFfrQgSqYiFTGPKJQkHfkxdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTWmbmLDgSmLApWHEgFonzTJsN59vRYJXVgtyuJtpCEdwUKe8PtJd5EPwCn4f6TBz7AexNT7tvQvMMTsss5HzkE",
  "key1": "t4Z9aTPe37C8b1vEnXB2NAHmZ9eVEtQfCakg4qhPFShi5qUA44BGwx9TUsQNVQurQvXfjj6t72qpiMYy6TXBLPT",
  "key2": "2KeweM3tXakqXyFM6fW9u9mZWYCkDK6sv7v31j1cYz4ZTsAUwYGNKG98jQp4FXXjbfyfuMK5DhuEoNAh46Boxj9d",
  "key3": "5oBeQg6AUCJE1LToW1VH9zMgcpfnQKs9CW85JLqNCvizTV2KTsNdSHh2UeeivkzvFN1mRZJdfZVzyjRhUaYYhkn",
  "key4": "2oeYNrziqAz3dHnbWnTg64TrRg14ZwcABor2pMqrqsctpb8Si9i36jbEqmynVVHKcJSGNeBDDFukSXtQr1r6AXkX",
  "key5": "5NZaGNh4jEt9ZaFtqRtNbvdXT2GAU3kZFSzwj3EHq63ynyesCehEyk6z8TQJwH7whHTSASYwT23PVDFEYo8fFY1p",
  "key6": "3oAKDWNjMERnfqQdxtNkNifkYiwy4Jw6HKNMz5KojspGGvEMQEZSTw8AZepx9nmY3ZNrvQPRWKirYgj7MM8A5iBk",
  "key7": "5qbYwUWT8jLNLR2r9m7fCKBy3y6zVUCibDqFK6PPnBitGYJGxjy7srrysmJFN8hMV3WL5PKfrqPwsgQnbry2wCfA",
  "key8": "3anACrhtGDJzLP8S5w23FwtXQRzDx4YhH6tJxHvy4qx2qFcUPsDXMn7fyEh8f6grmDiqb5BQU19dgUsDKF6Dn7NN",
  "key9": "4xXAPvbHZc5tNVQxXjqXJt7ycKaLm3Yz1W9S1Qo3VetMgwdjMf2H8JTZ7mgthiuz3Ym8FCHhCZ17ZEeCmKq9MtiS",
  "key10": "CE6wWq19BLFUtuQrkvvnkPcJbZnpWLMzChPLErDsjAAKPe8HLFmfofMS7HvvRSccYc2KrnGsSLEb7L3AnCtSGEv",
  "key11": "3cR7caJX27y42oK5hvG1Lhw8a2x25NMa1LZn6YVg2oc8PcngwenrZHeDwmBnmFCgyNoN9ZkwdtwKHKANgVp3L9wx",
  "key12": "67B9XKGCfUKV2mpRXrV5Lbd4LXywSpto779fwR3f4kwfCLWcU3qXj73MFJ7dC9ktPkQv4cuxAnmiu9C37XX4sJy1",
  "key13": "3XVnHVPeFgoo3tsskdoJKJ9RnJKbJZx7TQhvMqj49dHbU7ta92C1CCkdEFgwKx5hvaopo5vSmnFX6cQmDtMpEDWK",
  "key14": "5iSkUU3Fr83zE6hJ28RGqHLGZpNeJnDWqcKVmCSnxsqCVb3AL8R4r2SCTghv2LK998BcWfB9ayPnph77zTp7FJma",
  "key15": "456p6hGjsXnB21tCoMzekhSEetH4nUvf1yuoyBbinGtGgxZdmXWAhvsiJDmnvr5snPLhzNuMdtwixZEcvTAGSnqh",
  "key16": "4pcregij2fBynfJoNYh2PcgX3PHpqLPtmeb6up13ZhQpfhuLLvnrgPYqLVcqqLaWfLV4RT9B284S7bop8ykFX7TR",
  "key17": "41otjRXr93USnSkRHC24bEzQrdPU47zfJzpKUq4JuXnDVe9PRsgKvKeAGUjgQMay7d6erzMvRj7CNRaRuNDsA1h8",
  "key18": "pZnpzdDXNMybQW6t2e1BGFfaUYs5Fc6XYKEicTbHwZMJqPpLD6AF9cfCjgPrdcHdQpMFjy9sEsPoiVfq4og9JfY",
  "key19": "MqUME7ZdVHnCVoiVuBMPaNbkjsLebigcgDqfiEk5kKB2dgMVgmKDXaknPCwBW6orVeKsdEdSUdxKAnVo3TNTHGe",
  "key20": "3pdWBNUeaddXMYMjwKbiNXCM2kR9Eu15U7GKNbDVqPwh4anZQQcBCP3aF2Arz9YTsoymL4keHtdhGLZRFmAgbj3w",
  "key21": "4kWSjLbUb7a1qnwvwTR96FAYDq72QNR9CXxJbAsJ52aSYsssBFgQo1cPkCAWhMCVUGubs9DnDtkRQdVDvmAtGVNC",
  "key22": "4AAwKsFhvZzmChwS2rRLSPxicbQHbMj8Zw2mJWWFhr9EpJra5wcpFqtHZkA97exTaiASFvWHiu1MFiHmb8fCSw8u",
  "key23": "4skFUVyM1PdPVHh65asSsku6HT3ds3RkjXVHN6m4mhMkxU6kXQoWDWEwKWNqiWQQhqDw2QJUs2iafrRJ6i3e8kMw",
  "key24": "46ZX7nU1b2nnSBFvyRmwoVDSNyqp4Joo2RRQ2N3qsNcmBXUXJeM9qS6cbB3erdJ4RbzaSuffBEDx8y7b4TeUJvMj",
  "key25": "65dsWKnUmVBbVmB2MorN21SCpiytdKtjSn35XSSSnh2FGv8jku6DsgUXG6zkhvc4iYEwL5RhDzF8c72d2ERrADhx",
  "key26": "2QPtcDRVRHpd5BYWsJ2FcenVeb7Ro4MqyEdYeHywbf5xeEvVygYHKgmRfPLk9bmfsmzNKNmQuHqzWmHjKWVv4a6G",
  "key27": "49rfvKmS1vgqWqF7M5C9EgjkRKs8tM27gbh788dgmNCoErh5k1SMEEWy5intsbXW2JyJxj1ZuP7fEbmEZ9RfctTT",
  "key28": "3sAcHXY3bHgDTBeAaDGVNtBvFMQUPkwBfsxmR4B3enKgNX8Kb7cMPbZvoWCRUzihi1DRQ2Kf72rrabNgMZL542Zf",
  "key29": "rb4aouQpaMJb8PmaXCrDdTLr2pVQbKnN6n6m2k8RV7uFzgvEeJuHCgf494fA5LJRnckF1rr4wDF7UBqDMKAHnym",
  "key30": "4V9dbuMZoukSz2AT4xw5psKkGJyucdTDtPQTkaWZike7uptK2sj2Je8FaWBLgw3dSsccPcs4NbUN7GVD9e1YrYqa",
  "key31": "2LwfczpyVd9a5sxwkdCYCctZ6JgHkSYdxshNC3uvxmRKhNPHn7Bb7VcCuPBNFhruKNZWCQBKPSKFoC7cx3SYHhwM",
  "key32": "5zTo8S9YJpBrLJebbvqJ6Ut6zFR4PPZnYC6tLBupw9Jdo3Cd7pNkkRG98JwbHoJDyKVjZGgenUmmm6BXurFdh4BD",
  "key33": "3xZV1seQpDo6HFSAs2xcf32G26SVrRLuCe3QAJjC7Jqr6ZTx2oPnNEzGH95ZmMUrXBDvqDaMgrMT1qbreupQtFAD",
  "key34": "rUaDqCuS8iJV1hZ9XzHHZ6GKPJiip7aRYRaYsjA1JLPxvUrV7AfSZ4Kovt4iRkwEujYmMVoLj3j9TdWR5fShAbU",
  "key35": "2kVYx76mYtR4eBPNZGmdcgEDWGy3WHujxLr7tRHZtUt8BouPL1uMBEKYCuDF6XkyzvjL2aADmyLaMEou7dBgzHU1",
  "key36": "5Y9VjxG91m7qD9JK9euEfidrqEPNjBctkj47gujDiFiwGg9ygf3qGfuFGsC5nHt3rm1LkDM4yNAeNU5NNkJJDsCx",
  "key37": "3aDiVQg5DHXz2tu8fqAFKpwxTSdG78TrDByD3HGef4TjWbr4xCPa3kAjebYuwbjt1LYXnsThwLE4KH6Akw4wxFEV",
  "key38": "3PCUMaZ4Xgd6YpoaatFtvxM9o6BjB8usnzcgaiJTPMFdpFks1TQQ1ujPMZk3nMEfN7cutNcXfSMz5K9cHN4a7yMZ",
  "key39": "38XF4XNdvvdgUfNX9QPGYfHjLCBZnWxs8JZW36jkX7QKnmyktdK6WS6Ju5vLnyw3YWMtPddKNZaGvhthsdKrG6z5",
  "key40": "52VPHmPS8hnihPArrZpGZoox2NQzdwWBmfavrk5zWHLpPz6bHogjYonshp8tQriUvz7nWbEr4y2ctwocU2tXjyve",
  "key41": "3UzhZ7ewM6d6qz1BjEgZQwoR1FDgFnZTnwSpzRiwsWjbmx9e6T2iKFXgyFDofuusmQH9YqDRUGfPrHfayt4H6CMP",
  "key42": "wrGmct2Aru3eHV2zVpGG8rpBRu8nNqbZrxbzqbQDXSnjxvKRjEochT6F8YV1GLZq6u3qLJf9ZoPCe7qeKDdFBcq",
  "key43": "5BrpPASCQNa8v4Hq1YixK6gMXdiKVkXRNJzDJtUp66cby8f7dn7jxcY1g4AReKFW2fPzWsEBCMoV6CkdGSMNV7Wy",
  "key44": "pNC1b5trH1MA7knRBo3DnsQDxMMFVUXmURyAmEJUujdsJELBFjVUk2HhougxwMWJzJcuJGPf7U9G6SfTBfLChpr",
  "key45": "4BVsHwtqHEBXAiKZKpso5Dsx5NkHSaWoX2XRMZDVhkvPGBV3wK2SwCtzUmjj44UKWZA7gsVqBtqqZrmebufB13Jb",
  "key46": "v1yT1ZdspdtEYMphyPEmo3z8RzGiyCybJaYFJGSDySCej4nMB73JhgZu1WhpqwHuKBoaAekbGL9wgwtwqEyZzqt"
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
