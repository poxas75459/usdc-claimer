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
    "23seSv1Zr6eePrqUk8KT7F4mWHSNrKtJeGVVeEEVHzGVXiyYJW8b5cBJ5QkbXTXvYjYtetNHNB6yBcRVExfZF7LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1vcBzrCRxkjVtQVAznQu4DL5n2yJb9Z6fMybkh7bSF2F8b1CrFtWzSW5vb4KCsjcrVMWpfPocHZGEUzu57H3aj",
  "key1": "27R4wmTU6i5zHvYyMCs1xjw9AX7AMV59jk1GsS9KRrjXVDR9ZTWhi7dca2VniD9GSwbgq1dBXW8wngwmQZbKHgci",
  "key2": "5pyNnw5MhVj6Ex1w9FGgoipZYt6srSsTwUcezsNZnPDiM6EpihTZfkFLZ2TJcJSGVVRop8sd6BvcKgmopZUFeeQP",
  "key3": "Adeqje1KXUvyNyh6A9v1TcZk7ozh88cjN9eqGNNHMAPzJoq2o9J4BCeEBF8JFtzy8AC8vD8DpbDtGogebks7apf",
  "key4": "22qUtmH44FpK9M894RvzSWMufEdokKmVuMb49YNoKUhbgLHfH4CHQkN1KSA8GUeHrRhfFDM11eKtA2juZJdEaA19",
  "key5": "4M3bgzx7d698APy8EFAMjQpy4mEGEXGUZXCb9ww9qica4c7eEj7UJhNE9oG3vvMWmhzsonMDY9MYwhoQv3KKxH6J",
  "key6": "4B7x9uJ5V293HYCVLAVUB7K5bcLFzhpoiX57tu5pwkzAEFLWH4zssMwXjFJwd64YwX3RFwzsXeNMpobhqkv1Cnph",
  "key7": "63FvBWgDWC1hgcYbXc6n6DrwrvhAnVJfqEcfN3uwPk3fGgSJCe4X44tHkxk5vibwT1q5C7LLaqSpZcg7KtGrJWoY",
  "key8": "2ve6o6Xcw4j5uk18MHTSYdBtuxqZgbHo2TWd3k8pBeAUUQ39qGgLDTEgGKir1FCH9Zz3G8NTzjrFGcfGssPMbJCS",
  "key9": "66PNoVMJq3gmLXe2B2sd5LNjZcuqYeS8ZiFPPQ4tsTgX9drfc46ZaCDLBZje7dn4wyvXR9qR9vQRwL8KJzQJXY3t",
  "key10": "WkLXAsH215VGaU9qfvX3sWnmbS6TCZhradYuDNn1ubSEPo5Bym4BKgmb7LjnFZXp72xvLrpMB2sMbfRqW8rJXk3",
  "key11": "hJ2sLc2HPdsqPekKksDEisF1v9KosjN9ZKvz2rPdkScsaECyhA9okMqVrEQzDxkxevdFVHDTA84iSgmfzGnzGbt",
  "key12": "2YncYkWkmjAeAYxGFkEyktMfwz8N1pKLU938E1ha6Z7G8SwAmNnpZjWtJxa89poPbbjdoJWS4V4yHmqxSKjJ8hK",
  "key13": "4sBx2cMRuzcrAM6k2FqEFCtKqwwsVSRR3mmJNBNDaDGMYM2Hn67Rzmrcq92M7ptdNkqMUroBJmpvYVu8LrXmtJf9",
  "key14": "TQQmAJY4nXdcQ2j9kCwhPNBU7i58dR8b2MqV1N6RZD7mUmuD4Mjg8MW2rnWFYCDQX2R4ixXTxWrBtqW8fgzA7Ms",
  "key15": "4Xxj8CoS5JdK2cdqnCjghNwatLGEqwmSULRxaUcxwkBrJJ1S64gyqCjgjEkiNAYf8GTTuTpyWYxcBAerZinUkB38",
  "key16": "4ehvThXjTPHAx74LfYAHVNQ6yPB2FgeZRSwJSo7YKx46uh8D43ViWKCbL3z4HQBbz5ifAzssRB1SYhLF944n75Q6",
  "key17": "4g7RPjUkeL36d8SZu6qDBdNEsCE6C4TsedbBgHfeyv2436DW6GrYDc4VyU3YC3KnX3dqGVwC2dXdskone66Jmibu",
  "key18": "W5F12jw5WwkM8oXrYicVNgnruc6T9SREPauUQ6yfkGdeb6XEZULRRBfrc879zKZRZV5p38w9ZF35miNXmPiRack",
  "key19": "a31DysAznxCieJF4CB1AWdnDUwE7fGfAP88NbeVu26oUFZn5uNqDrudvqWQ8zrdEA8e2vL5foMftA3bH9WZnu6Z",
  "key20": "5EgaqsJEhd9ypxGUKdEFQNuMhXKFycMnJqcEwTijsZtXjpQcmziiZYLKYyRFWRgp2raTF9VGWeZdSZ5uLp1Bcyaf",
  "key21": "2SxeTMofBmsDAsJ8FGSpQuyozds4e33LwcJajZ568DDXmNGqZjaVJrfEkLdyCF7MN5eTZ6ZbeGG6usfrKQfqDpHu",
  "key22": "4MqSAq7Kk4ohqroqe2HHJYdTJZa7UFYd2z2H2KK4kgmvgy1ybHctwNRvK5PNgvvqwRa6S4bFgjCWC5FrXERyessi",
  "key23": "5ESuFuWAkRRMcxsiWL3QgxMxkcqaaHsif8Bt1U5jce3e7qr7Z4LcJMhKLsLwmVLG8nK9V5SuPGqCQYxpAceAiP3W",
  "key24": "38EqvzH7XLAtBeT6nXQbYNfAgsusnKggbsN71jacDNrjpicZ3dTmdEqHWZ5RqT9Yhazo9woQvinKEcuDhtcMYn4J",
  "key25": "51WtXSuaLYqexYnAuJwNGJhcc5AqJ5RDYj4TtXND5pCXfNoXZe2DrrkZebeUWeyUU6Qrv5qwKKntaBGcSBoM5yDV",
  "key26": "3J2CBd4xZtx4bcKeE5HtzE7WbiHGZ55E2nTBYnv4Nzk9m5yDDiWPqxzG9tNoiZNDVCU1EHdfWowJf8u88CNUm3G5",
  "key27": "2nBLpgqWgTb6aZKgv4QFro6d9oxfAXNpeKj6x3dD8SbTW73d9pgnsan8M1ELGGRQf8Gxc1TdiUPSoorL8yii8sF9",
  "key28": "26QVvnQqQaZBg2ATL9rrQo5hB3neMyfnwQqi9FcLyFyAZQ4gXigh3hU8HXmmfFccsmnddCjy884B1tCLyyxaLmN2",
  "key29": "3Gg4KhwaLKkapvxuojmpcynDsc5ZKyWSd41Sd91ZLb1SAQyeSDy9vLZz7h36hqf4obP82freavo2LacU5HiBDuKd",
  "key30": "2A7dTAYoNghFqS3piE6KrotRCNX8MpxRQ81D7ti75JaPEqM3nn1egS4KtdBV7zK1HXStohXJEGzvdtNDbP4yDAHo",
  "key31": "2jdRprm3f28euCqtccsmFto5qFcE4KmK7tbgh1k2h3TqBunDwrtDauwo31Vq81LsTH6NrpX3iuS8CR7FXz2kLN8B",
  "key32": "3JjYGF2crQYHC2Db6tTG7KGUumEfBR4wv1WV6MsVcsYMwEzuQzeGuWQSqHJcSJmkSbBrWJru3hf2guujmzUaeoFY",
  "key33": "VTFx5EJVfmwTLKxFQdJRQTi1yYjT4VugjQY1JwCjbCF2Le5vyRDXNNd4xBzwsCeYP7XCqK11UuBbjAfiSTo2s1e",
  "key34": "Lutx13ixMgC13LSXh2V2BytoP93VgWwXkWieHQeAdqyDG4dExJY3GEo5EM57wHMWwSjwuvmXN5etCF8TQtihJgi",
  "key35": "2h2FnVyWh7ey9jhK2UfAV9rBT69vad16Ev63BZnaNqg8AynrYHBCuJZsh5pgicEWtMsqR5JEKsFr5xxEtHZY5MqA",
  "key36": "i1gjLQFNgsEuggNuEdU9pQmLNTCn2ygbpM4F6HNFUMDxehBakqSXqpeeHDb91ofbPxWaBZQUaSt4WvCkPn9m8i3",
  "key37": "2BuutU6KYp4FpteNu4dU2yrDdypn1HSUn5f2VyrUccb2nWEVzxz1Cy1e7g1szoesdwfcAkBS2L6WSL9JTdaznhEs",
  "key38": "31dhmtgmvhUdzxx9qpUTLa3KVov51k8XSz1fmU8ntgK21ayJhcg8AQCUCoNwbAsVEQSbPt5bTWpvZDzknhrTiLBT",
  "key39": "aKGhzjwBrZTwfwBv6imCogNvuYhDkcNRcwGtDPYjFoqYLWjS9rWApAmcBXuC1H9JDXpSaAfPTbVfPVjWDY9fNQa",
  "key40": "4uacb1c9KtjLnLabTosM3Q5qkjDYjzoidHbjRNBsVLAP4t5PUsTQsj4cBC1BzNLGez8ivZ2qGaJ9uV1MGUkFXhz5",
  "key41": "VHVpGDj3bax6P96MeC2XTjM1h5jANfEnWZxyDemF1AYTCwYsqpjNCo425qGwLxBxNG6jD58ZwpjJxcNFZ5Vmpta",
  "key42": "657N4JAWZAoQDhB9YuCuPA18tBmbAA4yvHV6fPEgJAHa6RxqmM8V88SdfDGUXFFiXq3arReb3qQ8dyg1Gvi75auQ",
  "key43": "5PFaQnryRGasEWXYdx6iUSpUL1cxt3NgkA3Yetp1rpc8ZgSQKyaZ58vyDguTLiUg1J7XkqJXgHG23Ds9Z8fGVrvj",
  "key44": "U2juHbXLYNBXj8aaXjxFGBL4mnpRhyWTVPHhNmfN7BGzcXifsXHd8UL6Wb75dQJBahq8DoghTp6afAg35tx6TiH",
  "key45": "38bFSe2iR6x5iKtJ27ehtgAKJBQWe3fq5e5xoVizqPCcQsqGRFixYz5ssqCMFfoHpUM9ecHY6MzeSSAdNGjLrpsY",
  "key46": "2DZRBdaXE4TVT7fXF4stH9JAf9ZtR4yG7DxQqDoj1UtKJUoosCkaYJEkJXdJjwqG6oEch9SL1seDmnNZXQNLSpHn"
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
