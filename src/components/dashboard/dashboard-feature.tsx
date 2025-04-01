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
    "stkEkdNNsVTCnaRB2DsN1MppaXdS8dZPkDnjMsRYKrnMyKZcLBXNdEQZRwAxCzMZxkrM2fP4JyV4E8aqXajatNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k8Axi7nL6NjT7zN3JT9L7MZCXRWN7pQyKremTRmNecBq9V9eF4rFtjcfr2KdPepVtwcfWG5ewjB8eo5XnR3brAx",
  "key1": "3s4tXZNBW8ho1JiNaFAEhRqrpz8Q4d8Ne6fZsmTUXgPTLoi2pGi14QT25BzgbfvxLySR9qRQ6kdwYZ16U23Ltzv",
  "key2": "4MXam9h2oCQCsfwbubCFRW1QM8kJuTjbDU3HRQSCd7aZDpRHfGXq4uTBSSaA3YY11NcnEGEUbifGfMVeEtWyHurj",
  "key3": "2FdVW2tNViAreRgwReqB9R4dFQedNH7i3sZcp2ULPKCGYNm11SDikcU9biKjWD5kj9Y7rKN6dCNtcAENAwqH52DY",
  "key4": "5Uf8oVCgSJLmUt5jHA1eBiJ5rKepi7ttN7LjAiEA242vQzpogD9BSjfNziHA6rqvFdi6ArD3xHQ4e7w4mvE3v6Ej",
  "key5": "3JHAHDBRPotcK8XtocJDC6YZTZ6wo4GkW54drqAWxZEKqUsqYP8XybwwHg5ztBEveKFuVmLY85oU6gkAB5Lq7rtw",
  "key6": "2UDVtNkhLEoLChd9c8PzhrbaFCJjjkgrL3HT5jGnAhYqwMGCwAohtoG5ZPE5Bp6DhD5qGxJRbvs6URhg3UfA9fCi",
  "key7": "3C3HMjmfEvSBscyCNdxtAz7DWxMtiFffXDEi3KvFfvS2GPrP96YELe93yg8LvvjCXYA2CeCfgoy1GMGNSV4SkAg6",
  "key8": "43oyKqCC4zZjk36g7WCDokriapPLHSyCyP6xNLbGqDKqFCF3JhGNG3sAGEySch7Ezw9QSvJQpRhX4Q3zA2gBE3ws",
  "key9": "3y5RHRZ7MK93TEE6yZYRYnUNzurKqjpkiJWfEK9Cm24sW2D5foCYwTA2Fn4xoJnXnZGSaopzznTLjdyF2DxuBnxh",
  "key10": "3dFv7NPBg1eXu3tpx7N8zjSNkWFXuZYByjQWWNCjBr1Dw6u7iaJukSQSL27rvZJYXeyNwSGDnj3ivnfUh8E1nfi2",
  "key11": "43uLXtWbCgwvfUMx3n1wwse9fDbrmYvHhwgTa5K2SoD2ENVMXdT9Ltso9JHHfHFzD2uDyJSgaQUfNUWFqduvvo4F",
  "key12": "3gFERTkCwJVZzSXh7HYmhYBzXwn5LQY37fgak3z6F4a4S1zPhY7XjLs8dHJp6eLCnG5NshVrenBzm2VdMosE2b3T",
  "key13": "31E3eUj1DpmD3gzehD8nwWfBjJ2duTwdreBSXM5obNKjDGThedsUyVnGH7jb9iYYy7HRykn5vgX1MzR3RZWAkDrV",
  "key14": "3yQASwAva2fX6cNiNhVkc91pCwaZXLbxdgjF6fqZKogQfk2G6PCn5MXYJ2j1tJvFnvteUA2AQ7kwCnggMZbbviry",
  "key15": "3jucZJk58TDU5ZwuiHMBYHV9wpff3xmAhn2bwp359UTy43h7GXo5jpTFqwzhgY4WWDMFS6AeCGqy8wr6HbyRzHAh",
  "key16": "8doBAQS7iEBNDQTqiEGDfcw3NdxmPhXAL5Zj5XBpqNUd94ZAbauidLsaxommdEgUJw62NM6HDHch4mdgfcdMGC8",
  "key17": "2u8cr2Gmbc45zBr17MKn4dXJvS5M6Jr4R12dVkBTNSe1yBjY6ksMs9faLUsUAMSbGv5gRrgJH8e3RoRrXZsnkjCt",
  "key18": "5BCTEK6mo9E3K49FKFZdipiNLaH2VbBoZLYbF643eG5jWsbzAgg3isucHxTZbdxVr9dDSbrLx9L2hMGdzrz7wjE1",
  "key19": "5TJh5vpwFy9tM7bSjJxahCmAF1HoHCNmScRnbSJU2V7cwxCWhP4akBNUBuzXk855s6TUJKUuHFrQCsoBomJ2nCyB",
  "key20": "41mWgpuN5XpJFVLcbDNpXW9QeaeNgB3hxiRALSabZCY2dYyRn7ZHPhQFaT3ckL3R1JiFQCpHPF4drasM4dN2VkhB",
  "key21": "CwqGMCgBWMRvaV1qXsYYX1sYi2rETCtANMLoPg5T8BeeFXUByxyARrKXwAQkGhi6BZ5gJB2DutKQgozZyu6DS71",
  "key22": "3tbrdPhhcS3jqYWeRP93pxuEx31XzAQ8M1y9d8xtaFp9tyWLahAZPtXaktj71oqz8EeUz2fSFVZLYNByFaaKoVoG",
  "key23": "2PnCH2nqqndH2VLTLh7RRcQ4Tx6Ar525VFA8F7MrzZDXBmbKZ7bNWdhJowjUs9BcJnpXFcArJkNt5yQ6ptT4haCU",
  "key24": "p7dAwiJnsZEn6GJeveGbXFUjZhZSYYtuULNBkvVGZms9kvHgL196R1xtcmYnQQWf923XQa4gzRxpA4mqLNbf29u",
  "key25": "3UYATCMutnDFZVExm63KULXdaNdAHFf3C36FUw77Eq2jRFkEUiEWqnSyTpA3ysS5mm4tp7gghvEH1ujiDRCiAEQ6",
  "key26": "48ocCb9NHEpRonT5e8UZbhoyRHc1V6HuTv8f56fA5Eku1C4p6keVJfmjKiXzQU6nB37bubC3CqyAGFDSQnwKfisP",
  "key27": "2zVdMuViQAiwnGLdfaA1WpDeW54fuwCPCzcPNG4TS5imqaBNhdKXZCvLRDuVHEuEAvuWJwZfirgmU2diDXJXiRVh",
  "key28": "9LbQE3EP5uBjSGcdvWyP4J55NmG9g2bja3ebGP94gHW1KbiwWhYzj9pni9cq1VbtkZTf1cdU6qywVWWTW4f1MxA",
  "key29": "3XHB6YRwqgr21kr3DCZpfq3nh1ZkD7WNi6erBqUMwRW9t3h4rEuCWGcQ8eSXscjgADsB8JfcNpGs7gPeitUCZeo7",
  "key30": "5ogKJfvvbnHwLsKWiwxz1p6D9QP78UiJFEBg9GBv2ZGbReQC3hnTpgAyJverTcnv8WNHX3fL4LWnP7LUn3aYsE4y",
  "key31": "Dhv4vJ6GgRjQEe2bBx2gDj8cDT6qqjf1369dgr1Wqw8zVwiQqXN1DooqVYfnFV3bs5to7yL3NZVXJpFcBpD1Cuc",
  "key32": "39HLHn8kGL9TGc8mE32s3hnWTEhNNg24RAsXYc2Y6KsenzoTf5YWrLRL1cvGLaoZNfEZD4MRjBcLZz7CMjNxcXxU",
  "key33": "47a2Vm97pqgSDF6YHv39Rk9gz7Kip7Nj1eGadtEAYRyiFQGcRm1VVSxLFSter6sDdbFzdxGGqGSooywYsEyYmm6L",
  "key34": "4Bg9jSa6NrrnNyW1bVLy8n6FMYBm9m1rEbMFyGq8B2fENWRPZdHvhFyShfD6DMfmzT7yJjMye9FXsM2U55fgn18i",
  "key35": "5m98efTQ43q6dC4WeqDfxDwturk5gPE2QxihuaQPeGWmn5QCfd9RmiXhghmVPy6g57Kchu6HPd728TVY6MuGELx5",
  "key36": "4xfSpcSCoq3x6gE4eAZmn86ZUpMjZSsKQyHmhktcwQKtDa15mLKJr4z9NZEopbdsgnd2owSuTtbLQBQZyeWvvaPs",
  "key37": "4afXNuPu1dxpm4co8EmpWxT4mKUVUKKg8F8dRUBVVvbBHEXubwzHeTHa3uM3jVUnxg5aF6kvPXcH8dcsCbRf9Y4",
  "key38": "5BhTkmqXQCswWwF51pGhgUAxvrJBgwSkFmzFywcthorxEFqe9Ws8rPeVQSSdqMrj2sJmNFFdcU6ZHvoVhuSbkNtJ",
  "key39": "3fsH1Gz1SwgqELoqdNhAt8mJFhYE8QhTXTfjTfAwSzkgLk6BRVAe3cnMVpN1cVfmsgBP6rhYK7E283amVciLK9zR",
  "key40": "bBKRAvBdy9WNRh19DK3qeioP4ftxQCHcjSJ36i2oTbfcsrzaLcin5jYvWBw37gK3j8LgiYcuxTriJeQKDWNjZou",
  "key41": "ngYpC6qvZR8tcpSuYB197Hz4sbNBmfPnXALk7kcW3aUNX7SKgC2hyHa7m5AmAsAezKuLxrkLw2VNrsgbcf54pUN",
  "key42": "Z7FeWK8ULzYghnQacGNPeypnhh1MqZyakqTGLRhHmtsUxrWpKL5P1nav6NAoSfQGWRYcDwWY7eXX9qzbBWKVmvr",
  "key43": "3MkC4DBWtWJEvNFiMXzWtZH7SFNq2i3umQfopbqQvAxDWwpT6ca8sAXKTY3TFHkHqHbfJepzNhfHFqbY4Dgn3JwP",
  "key44": "4nKas2zVS5kgLMA1D7kwx32SqrZNaQ2S7c26S33DzS9hprDj1FHs1SXgxQRekZ2dLrTuGSjSL5iZrssW8btMZrC6",
  "key45": "4hWrKWGpRyZF97VCJfxkPSeYvbpnngkjfMortRG5PTEP72p3RFihDvqEw8yU7hdUgNzVWuTcXDDuJnjrMV4GZ2HT",
  "key46": "2QAG1ZquyAc4UYn9bjbvdpXq1XxKmqoo3PSnUkRV9TFrGc4qGhHSAjM4A7qMNzGQnVpFKnUMjgf5TeC3sgbm9VK",
  "key47": "K2ktUmGsyLtbGYXYEumC5LTQhzjotkpmB2Yy5tNbP6YJEELsNzkHHnCiirQfDaT5ox14iCV879FqV4jDczLnvXQ",
  "key48": "2YvXpFdQKncVTRhmfM9TcUTJATtgHAPg24J3rPyKaXjbZbUdv7ss4cnDY2tLub23M2kGRasT9T7xHCE8FEkyKdKn",
  "key49": "4wNKnXwCkMssvJA31hSm14uhwUaRShARK5fq4sRQeufENhPEyMgeVWdRLBK246NnP1FxZkeSAuAjLuCpA8MEWzRa"
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
