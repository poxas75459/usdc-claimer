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
    "5E3nEof4Kosspq3ueAwtgFvoSSRtsZ5Nj4JSPHiJJjop4mp4VN3vwZtCgJ4mdPeWLmPa1hhWncWQTJeRDp4jDXk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AX4TbkwvHKMkv5qbHW7HcfKFTjxTw6B81YcthSS4QS6yMyDebC3JeLEbJyhmAgPVdxDzaFAzJ3Fv9CjmyeH4JHs",
  "key1": "4UXy8TimNMzjnquF61mvcWJ6xUwzaVD8H55mkLfLVzQnf4TeWPsQGZYDAfFEmKdMAvCCu8Qf4i23js1Vec8WXmt5",
  "key2": "53SMFW7on4G9gsdBbAkU5A1WDFSdHN4De5jSuTgxRPSD36JGwM3gdQzrdhVpwD2AqnEW4AB3R3A4uo2cGRyntDSU",
  "key3": "2NL26dxsYP8s3TZJrnKTB8tdhb2CzRwUV9N2SjgpGhbezXeS6tr6ZAEJKP6jo5ces1r9a5XcoQ8BSksWognDmUMT",
  "key4": "2HQevjcWeNAZ8p4hHGxaXu9tenyWdkt4YRxDxcV3ZJHwPcuTU5QJxBRrGJFccgGyeUsQRmKJDcUtYBCso6vMJxE",
  "key5": "6516proS1f5xyRj41bX8sik6Pw28rarA95i5qUJfxn155eLLfbN5Fd3FU1buFLDdXZTsC2h5f64vZ39DAYocV9qP",
  "key6": "27B5pa5SnoDxwzJS7PdCLukRDCdaYHDfEco2MiN2DiyE1nCtB1D2ybaqfrXouB4W9zcwiJGKjgRCzzfQdw8WBGxx",
  "key7": "43FKdfu39M8mne7vMuGQMEW7Tgxg8pujL41D3MbRt7Mix25gaPiCC173ePi6ncG9T37DHvAWygWbdeHHnKeERQAw",
  "key8": "LQhifm1zcyAPC2Masqnnh3mXEAxnEgCTp2dcJQ8mf2DSSg1YBcZnaVWnu16mgKcAoQqEmPAZDUTPD9SnnqjQ7Vs",
  "key9": "2fV51E2TyJ7E1WAZTRW6WDJepMnCEUwNBUybRkcuiLdmqNr9SDPjFGEqSL1qVncou46qnNnjo6kpXhMrX9oHTpAZ",
  "key10": "4yF3fL8NXSxgCjTHqVuhnFVpTtLqYgCpemcy43v8vXCq5noCtFNuEzHrmKf6LJQeHh1ccU6bsJ9fY2QJhGvap6Td",
  "key11": "WUjDHMAJXnbByF8negf8G8yxJWz4XjqEUs47yvLNWX6Ve8EjyDLveMHeVdsrCLGgcJ8y68xEYQE2xYDk3Mq28Sb",
  "key12": "41PyFnN9UC5UQ5fCwyL7gk1yg84juPfhLiYWgxmUJo1TeoKk7bv4kpH7Gi7kvnmtVYxX5XVeBqbqRYqdkRzJZzJK",
  "key13": "2PwDExV78rUVtEvoMrQR6JtYvghax7aWS8vgJ9vEijLM9SrCxn8aV6kNAxi1h975Nun3Nqnb8QkRi7edHrZ2rhy7",
  "key14": "48HYBjAsSeur6N6HP9bYReAwSY14moGmp2gAoFt5CVyK5WmKwSMvfV325GUD1m5eFMnnQqkYfTx3QsTSX5LdQEEK",
  "key15": "4cvfQMuUqhRfZffxRNgM4XPoRqkGMEqySfTDwHr3TTAKiqiPw9fz2QnJEqAfYt8J1cUsGeZ9du72EPgUWw5owJmn",
  "key16": "35jsQJfCYd3cz6MR2rAjBxUYvH2CHqSAz9nJpCBrz627X8iTM5eKLMq6JvPajiHMoEoA9tYCjrsAmy8kf3TBojdf",
  "key17": "3qjvAwU6cXcoedDJNYba48Y5jWAiSjpA9cnSDsUispCGXvSrMZRK7R2CN624fdhAKYsNfA831eYSu3K644Kn2MFq",
  "key18": "3GCnRCy37npCVbFqqtrf5favsm5BRnit1JmKNYSgzWuKsJiUghuXrSpe4HL1dJQzavsDjpn5Hkp61ttGAfMj9tpE",
  "key19": "4cCwzcyhySQ3aiowCobf6SdMXR6tLYcDDH37YyoVgZbmCVGXsKo33ReETXxyDrizBytvF7BsE3eXkTF9NnbMEgga",
  "key20": "5R9Z7NVJnHNDPojwJveYmm6zGbmP2K1SG6uqPKeRse588ev9BmYBRmUcGvUcgGufPpAJvzEaPdYcSEvbmKrXKfqA",
  "key21": "2m84j41FnvTyHATM3eQnQiRsB8JWVw2egGNUGKGGmeaw4jeDWuc1duKLKYywH7XJuUV2HHcVKBKfN24WTjRyCSbj",
  "key22": "2kphrjY8VtBGenkDMVcm58u2RzqFkJJdS8NvD8WuSYjoTrnsEJdB1e386LnTXqmVoZvWaEwjtsMqTYn8cAuWwYte",
  "key23": "4Ui9daw5K9wB1EjvrdpQhchYdE1qK8ujVMGDzfvVNbDAj9NKWYVbxbvhShWU5noTstbDWMZ9iYMuEyQoxScVP4M8",
  "key24": "484DTj2o4jbfcRUNbntzrVv5a3N7qbSvYeLekY3D6tvmXUT9tzmyaYWtv8FvZgEPsZx5WAVX8YF65B3qTC5csJHM",
  "key25": "2cxhbpVvw2Nxr3ood6kNK5Nb6pFNwzikh3UPVe7yQcAmieAtGVSmKksWyCFUY2ssY51hLnA5u2UX6jo12zbPFjws",
  "key26": "3mANdmsyFdULzc5BKH1KqBWqDH3Muy6BBCpeuP9ZVEnfXXzuJwXys5iqso7PCab8FvXkQMtxMudfQc2n77PLGmiz",
  "key27": "2EWU7inf1do2mZwMidAzqraaSeZdHGXZqsQVPimHMaqEiYnDHRAk5evQ7ZV422r3FSfee13jxSw1AkGFmXNtcpe1",
  "key28": "5LUcDkguMBM4v9Q8472YtduzLcjswxzdJn2ksnanfNANfcJjRrwh3ttj46nfoNFz8pdiNnqXcP5Dxx9Fwi25A9xV",
  "key29": "ZjBqq29VdDZRTocdBmsEKFzWkF9zr351g1vwy4VsNd7QUwtjDFXvgAPUpM76faFPdD43qMq1bKNSJ7QMHwsBX3H",
  "key30": "2JJ3bpv6n6XfzLxdkrm43S2uRaJnENKmFbPFWaNSZKqFdbZPbYkXCWdyTCefaHnZHpgTD96sA2AgDgCLqBE2tXtD",
  "key31": "2ncUusibocQzRYLGiNU7fFC3t3X9qU9yZukCYvRTz76HFATXZU7PJbqxJwfkdjhHGLxds353unMhNoUgx1XCsh1c",
  "key32": "2aJwbVhPE6z2bJdfuVHBk9im6GLHWJzMdMEDZpdAzNi9x4826955KfWLABaG17yWuRtUTaZQFxEsipH8PVoyUZXJ",
  "key33": "4qGbqt8UmX3BKy96P7BTkyDkZQkHedCdtguTtEhV7TbeNXmwnGJAp6wN9tR2QUujYnr2S2USun8FrptndoxCfjGL",
  "key34": "ddZjMvvTrVANM7anm6VGcqz94m13N4Fqm8RLNt5ARkYovtEtCFfP4qJzEosifZ3r52DXu3ZKQNXqaftjDE7sgt3",
  "key35": "3F595akzxjPKnsndC7V6AemsNvfV3rQoyTZkTEoMLJbzF12HRV4zKUEbtZVkFfZdZpLEMkSJoD6qycB5rDCj2fHR",
  "key36": "3K3We8W8PSsRc2pdmsqUeQYpQCEQCZWFfFC9igqdtenM3ZvUeGRBEDJ7wJpjUygNQCGF4nokRzZpjXMmDd7tFtvf",
  "key37": "2pncGTPgTfPEWw9PxAq32PcfVi7Wp8GZEg8RPyJcqmNywNsqWwRsx7emTr1BgwaPfvHUaTwFkgjifj9X6t5ChsCd"
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
