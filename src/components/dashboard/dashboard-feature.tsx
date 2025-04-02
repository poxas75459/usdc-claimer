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
    "3YtDcdvLkxUZJxL3doHmJFQWNgqwoZnytura23mPczbdKcM9gHWa2UxycBFa8ZcyRQvtBRadi6DsJKV5URoyZr6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iR843u22jkNMhoogkv3RwV5HH7jhbGFtaE7RG2WsUsVgknEofy9YVKq8swmkcx4PSKNSaMnpYByNkA75bEB7VcQ",
  "key1": "46Jp7dNgX2cGyq48QwKnjtmytDpkM9bXY9fjr3qTCN3aPNBcDs1eo4MyAMHMN5LdryuPLUjTp7UEkzvBWYp5JQ2Q",
  "key2": "4pHsBFbqtFADiCyUcK9yXu7ciictgxrn1B2bn9BtLdN7YHs8Rhpk25jepvfzCtHYDGtsKYyeyJndLPbrzW7X6jdm",
  "key3": "3u1gDfvW6SGXsyv5goYrVhNSXuv11cK8NiZSJ1BBeq2N3jmf75XxTHfPvEzF9LPvk5VwJVmJ7b19w1UPsqG9SHnK",
  "key4": "E9L1fAcjsdSnERf8YQ6thnfdgyMpetu4gUWiK4oLQa8CaeMLdUmGJAEPEQ2tjzSCG4ZawYYYUGJ1FiwrZabhm2g",
  "key5": "xVhtJdj1RNFqT3aKQAmwARA4tBZLKEWdRJoDZkttV5PuEEYjw1vcUXayEfJXs46nUVKSgi8BYu6MnBxaaDHzwas",
  "key6": "4MXs1qrzJ6VvcH1vBGbYu592m4rW3Et1ae9yyn1jY5idbWZ94h9zvZwGUKUFQv7LDwbH8aaHuKztpPczhdvYxd4B",
  "key7": "EVx1L7SCvcCFT2bMEWJS9agx6FfZd3YCkqKhA4KsjHFwvFAHPbkwVggsWZ2vByrt7HMx6XBt3K9VSsbbAHiSKku",
  "key8": "4Bx5wtZPnSurRYS4YqZndPWX56Po6iNFEWuSL8ScLwBUU9yvSHnMP57YtMDTTCV9aLamZ9kjrR1FujrGPQVtMkBT",
  "key9": "3Pba78jeahHfZ6oN3gFhrtdhXHdpCZ5i38v3it6tMXPt4mYjub4MoiebLor95wGMbNSgNFcxEhQJxPbooiD5QvYE",
  "key10": "xmEAJwNEUsEPoCNLhx79HjtZ757Gzg11csgvbQ9CbdWpGHGgtbKgGnrsxiVyahUBkaTJH6k9iMmaezNRjS8xSFj",
  "key11": "2fCigkJ3GwCGVqokpYxdBgStaHDi6e6k5RiTMU5MQdp9TfWwmYsF3HPvgWoFeZmWMdVPw6bJc3CCEYdWkKPhV3u9",
  "key12": "4zfMu7d4BoVVcKuZPGvEZf3XnFreDMAxnhfjCQqfC8byTs3B356R9zMB9ka7xwwTAS2JuBeTfnr4ehY3Cr5yzj9J",
  "key13": "M9TKtCiBVUXJDogysb4U1EoUq6GNYj255NX46FzgknNwRq7HXVp9qUy2BKefC2TGGC3wmqMyZvcmGvnuQL1iUHw",
  "key14": "545rHo8xU9nqQFcTFCfZZB4kf8duRT8jA3gXHt3VMySGEAPqoXjkWC8vmTwqWvNHkYoNuxes9CZxvuXHorAzCBKJ",
  "key15": "67pm7nRJSYE6omENFVKfRDL2YeN2GXW1WWgLoaZiCZvodk7iSUFX2iWWN3y4WnXpoeJQzVHy1fMGYZq9Wrrb23Mp",
  "key16": "ehNszBA36Aov3R4RsZoayjJtfaCWtE7HibN4BXMM1vrQWPyFpfM7PFdiMXgNB2X2UBDg3riPMxUivRG1d1Fgbrs",
  "key17": "3fZPXcuWwbGjjnr1Jh8v7LYUfhXgjkcW1bG1wpZLQbsjwuYNj42TaMLgey7FhKYNpQxgQQGo3e2jZMcadAgb5aAr",
  "key18": "24oyX2zJ9XD3kfqGMjKj6sLaS9U8CdwfiCJoYW3N89cHAbqQgSZqoNiY8m1D4w3eu7SiBDKKJqbxU2XVnYPxKNmG",
  "key19": "3KVMVV2C97epLTdjkqWVXkexMCmNTjsx6MZEfFaZcpK92662BXW6UmAHEkVWcqH2BZbSCA4G7xKsZRUMDC1u8vPz",
  "key20": "3qmutj5W2vUDmNoQnxesMsTCP8tqHiKQwWMeVKx3TYL6wN5MkkBQ8p34b7C3d8abubNHFJMPjednk9wJBUpP3k4W",
  "key21": "3GjQaaSA4sPCZgN6Rwc9EQJVbwvWcu5e4AsN53ezccKtgfMes3BsZNnRX9vLiiNixta6TiGvFNNKuji7iT4mC9UQ",
  "key22": "4wMskrhmk8HrmdLUdSvppsPJfDe1J1kVN9XUtcBdv9HxJEwJ8NkDYdhvs7PRyZcJTJE3WaYHBauZd8zwrEyDbNfZ",
  "key23": "5HMNX1XVWhEaSyBq2bdnGNAFi98c1goZ4616jdjDhsts1Xu2TFv6UjSvzrVJKDCQEuR4Gjnx5tvHzrNhshJCdNvH",
  "key24": "5yAbG9irLBCaW7P3AE3XqsYwojq1rY1ehHQ2XdZRHpo8gb6nszAG65MfJY3WmpRWbJ1S8B3yuSLA1CdjgDFoJazY",
  "key25": "JYLQaKGLuE5YowLsmkAS3K64bdhpUVmmx3hiJpzXmLybU7D2mVUPWvKJsyMfH1u9X3hkc1EGk9DZkobNrsNU8nw",
  "key26": "51HRkrkeBz1puEaD9qmZZZuXk3ma7F3MaZSKbJ38uqKTuMYZpWaUk63JXhCytwfz193U4RhDBbLCMX8vnkAQEikR",
  "key27": "5jxvmCf5RUupPbZVUQxYF1JQXhFeCxSy8NyoHmLhHHkCGb4KyXcGe5exCXFWPwEPijL8cB4bX9Tr9YvZX8yECoMC",
  "key28": "37KaAgebrNFU7tpGV1XRX6f5nJRiikhXEeBo411uoozFfgLbeaiSgrHXXGXf8gPRe3ifiNacg11iE4zHGgpzAKdW",
  "key29": "567jM3aM8TGPojEgDnvqRBzd6eDdi8TAmsXwuPEbZs8zT8XZVRzm1EiVknWXTfVS4GP2aiZgLwz8xnweWHjoSprm",
  "key30": "2C2f7AtECAZ95PHbrwrLHG7P5CGM2t7tPho9oQsaCBhFRr58PGPPDN7SZRdGABMQAgu3sBL5YckgNsCgdvrsSK1R",
  "key31": "5vNPRDjnC8VXi5asvofX4magaTNWkHL93wYza1c2ek42KeKUgPGNvWzdby4LDVFRSBN79odyU632eb2vjtLZZYJw",
  "key32": "2pyL1ei2Sv8QHVTNtywSu5pNdksYNr9n1ZMGfyV2L6FcpbnLGpNPBRAMgujxnAWqoB4NRtMsQ9wZt78wH7xDeAyF",
  "key33": "3ioVMdtwLtUpZQp4q5XhmskDRPQoEyJTWb2naiUdVwGQsCCqDGTgkpd8qGEQc9788XbPsWrRa2NwTDTsLR8GXYv1",
  "key34": "5S4eRSPNVwS8v4z713a7xKwsVJ8QmPnCMvVLAnutvPo37EckTJ8cNdjxKL8seKHTMeooQG79F43ouEJiJPy1RV32",
  "key35": "38618ZLZZuCUQkShwEAj98eEMdZ7aDAiUM7R892YE7iimM1iFExQFLdbAdd8SaQLU7FGB37pnBBwFXwNyyepmkg5",
  "key36": "2wFSFL8xXZ4kc9gBr8PTJYr7wwcd9f8tboYGEpqY7QEesmihAUkcTE6ZWho2i3aD7kQJXZVa8ndroG3Fjibyz8W2"
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
