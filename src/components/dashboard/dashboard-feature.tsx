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
    "589L4Qiedrnu2qF6Scpi4fLSnQ36zb8r7vVt4qBQePUdpLy34jgUnueXrtWnQVFEYw7VtCjYyPd2LTKTfCZ26PAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AefjdZNBe3JokEgjMS4rwooFg3MH4LQr7cFunFGE8dFhRoBBtKnQBgtsCtCCCYJWrh7gtACDxdTWTUDg8wJpx3d",
  "key1": "2wqSP6RUXckFfnfWTEho27TXCCUFEQKdaNSquizDaxqsMuTxnqbVawRP7iEXd1U3U7MbMCxvxGGJn1QdzFDV4qQG",
  "key2": "3VMtCAPCDTMuQymd6oKYfwuqjJW28z31jXqbhvEfiWZ2ThrYg6TRPxbg9tmemEkEAFGhuENXY3mQsXVCKQ2DP75P",
  "key3": "UHyDVHLrd4tZEZeej9NHw5L7iyaEcon3YyHVgLoTApaiMySJe31tyvHrFTLAW4JTJN4iRMYVvaGBczV8bdZgpcU",
  "key4": "Cg9AwF6FnDXoE6xQfjh87PNfhjsgupHKagsEJf16pcZ1GDLEmQhsBA97Kj6abS5iyPTYx3LjbNqhpwPGHfYhS6m",
  "key5": "4KTBhKUQjgRwyqKUxJoFQE7DtJQYzsWLubJUQusUgCA7qxLzbvVxBrY4bjGg7syFXRESbaRfDsmz3EeZjTDQMzDY",
  "key6": "4ZefhButSn3w9pZaRPrPci6zg7tEP887LDyCx7brBSawTPWujynUjSDhHNNh7a2zhiwc7MbA6bRdCKtbW4oaU4qF",
  "key7": "4RgjzmBy8CcDqanj2BR4eNFfzWvJ4Ty1emfxbVKsXrzw1RDopizKXWFWR5r7LguBnUPU17qXF1ksPfs7uxqY77oV",
  "key8": "5NBrDdCkMBhgDpHrSEUXkjjb6SRZt4vSDwuMwb653ZLTfg4ssSe8HiGrrqw71Kzy4upsqt5E4H4bBqQqNyY6pUK5",
  "key9": "54hK4D8gRRBCxkmffvPRitXcnqz8yvH6EeUuRHdDoprTfYBdvnY8uLv3iGxeX6n5zxyz4KQEPrskLf4if6LpivT5",
  "key10": "3wrybzbCaEo6BF3BuZx2wJADWpMcst4Cp2e2ddrgqHXx5XCzmLo2PEFvQsk4w7aMYLEEXmwAavT3zfhA4KboQmmA",
  "key11": "3yEQUir35ZCSjhZsYJH3gMcLgWKu2GaJhsUJdCqGQm57VDTLhEKphvNfbxEhsfXXkctxi4ZV6EoB7wmdT3NjSGkE",
  "key12": "2cZiA2yyy5Aniq5aV6SyFKW7qb3cuJHYgzUzfZZin1vbsEuxGG3aZBVYCmsH5G6rci2buozFnNaraKfGzBLU8JkC",
  "key13": "3pg1YY3XBLb2u3Nhwajaqds2uLt79Fpz8b9hcpxAUe1ekuhHmcGerjkqhjayDEdm6cKBh29cQG9su12SVgrYNL7i",
  "key14": "5zyk1715d2RRaF4LcCH7vwyfCtmbyAbMDacoEtsUJNqK6KVrYvTfiDACpWqedNwRNgi4fXJBtPDeRxG6JuhUUAuz",
  "key15": "21eScDSVyRz3J7VugFTt7bfREiYqNp1JPKiFgmxwMmrdRNpZUU8SA9uchEzEGnsa5oCHmzgDtjKir83RxmuGRWbK",
  "key16": "65dLLLvQkCT4J98BhrMxxYQta8iDqxTNp75KUzaZsJBAVEXqNuP9ZyaqEYucTM599spxPRKdChZU2VPEHTEi4NDy",
  "key17": "25tkNH6cwpxGkE8BE1s117GNKCfwYmyHULjmtvvHcKoFqAWe3PeB3TAMEvMXbXU8ZfsKUWJaFNkG7kBkasDnvg8e",
  "key18": "2f63PsYWwMjoQ1tmgx5Pb2HCZk64mVWYJdjvD1RX9KcRokFuvx8gm93s2xP8ys3cg1MnFBfkjiR7mbBHxAVu1wtG",
  "key19": "39isDhN1Zj3bWv2wCW84hh9tZ59iwH6hYT5Bkw3XMu81jkczk3U2C4WxyhdyhvPQcPj3ayHjViTd4orAvowYhTQB",
  "key20": "25bF6JyBDDkcso13PWXQMLV6G9N1XpsdB298KscrfxHjhjMmhMkt4K1oXYvYaJgRkaUyq4d2sqGVFckuhKcEYkCn",
  "key21": "5rpdbrmyaf5gKY9yBh3gUdNKWJc4gdN6Lzpat9VLSvWeXE7XFvoev9wMPNGyWdsxdjvajVxQA6fAJ1QzSrWRErhh",
  "key22": "sfoMMRT51Xqn4hyUjXbv2Am6Sz3nKJwxGU76Vu5dhTfkk8mpRtyCEBgp6kv2ujRrbGBHCuRwGZS8vjDM314Dei3",
  "key23": "38MJX15e7eDz5HjmZJkXDrcTA9Y3YiTxobRVbBt5kdPp5KYW2GQGcvGWu5PUARQnb3DpDVoJjp7vKeKmykWhB57A",
  "key24": "4wtUV1vQr4T2vnjRGg37xJxLmizsoGjgtUugyWtond1SMiSifJm9WmJYh93U5xsf3GSuCCKhSQzGJiS1f7eKyFut",
  "key25": "BJ35SgBFaZZ8D6SUp4GiaZ85audNYAzZU6ScZR5MPB6XQ35awGbx2Knppo11CrJP79ReAzKtPDCi2c9V8vdDjXS",
  "key26": "LCJrCcA1RTXc6J1Cp8PWefJK676ofHemhH8xHA5UDTmC4BzbPoch7yNkPvsXSheMe6VnKPCKiy7B6SEDkeAW1h2",
  "key27": "GTFZ4TUskgMSeqDBQErwiZfNWW92tYxR8YSgFzwVaABeNquvsbpm9dmqbckfLruNJuei2jpJdScuPPTSzXBXXPi",
  "key28": "ijTL3F2eioPDdGtKcbdYfeWkhx1G7vDVP2oSENomLh3nqAzwSvF9wcwDmjyPqM6RxwFdpndUrjAwCMG4cLZByxC",
  "key29": "5fAucJchkadSHi3jmTJPvooDxmq4NsQz87ZUDDMCveLKxgFPn8PQBnVKJFkTK1vECKDaNC8c575ky7RyFntE41Fw",
  "key30": "5QT9J7rN68ccei1jdtWQh2bpsdeocCjR2z4AKNdFCxHvcrSmDDtGUPCx8pjXsSHPpbNPXb6h7636BwhfAnURnJNm",
  "key31": "4AzdLKQwMXPjBuTc6wHqLTNNJPLgokwwyn2KMdFvHrXC5tybWiFxXZg7R93vCfEPHy8Aqn7xmSyVwwbFs1ceLKch",
  "key32": "2FTtNNkQoY3Dv5yEMKXQCSxXU143yWUZzfbZYHmj5D3R7Wz6zNv5ZZ7eZ87bgwEUuGfAtJ1NkEWo1uYScmNgaVPk",
  "key33": "cArFKxJKnPD333eThwaB2ArskWs8nV4Z82sgoajiBVSBgNJ3mmwbBurPycA7terGUTfbVaptK3F21c3uFUi5Z4V",
  "key34": "54QfWxEr66FZnfgRtYKYYxEv9JNq9SuAcAoEgmjjTyio4R2MBjyhRLQqtMPePy2v8ivvLXxTocErCMcGv8yAjgKW",
  "key35": "3aMuwozekEhpD45GwdZ4Xg6ouhQG2ZfVdnFu5SnFaS9gmYdEvoAzQBnyCk5LNkXWe7cD1xyFKDVdj3bHnf1EhSgj",
  "key36": "3HQetazdbTHExNKcEHstKaMLsab2RieVSVZyZa7arVBygW9oNVGRKWF9cbCi373ubkgDpt3Ao1qS4HdM3qmhkatM",
  "key37": "3YNFF17XqBB4YH6accun87Pm5cuT68r76oRemYDSJEPHHD47jyEwiy5DDZ5qtcxhHMJyzbcNPpuj83AK8BEGsgi4",
  "key38": "5H7zaxjV3kN3V1JaYwdCsjVithMg2NoEtLtZMFzvXZpjvXZY84GDPGaxccShNqexSa76xn62KV5bWsuJz4Hp7LWS",
  "key39": "2YpQq1ZQAZGTvtUP7sYjQ5iZvLEZ1yWhxbBDGRNLec1N7zoVo9wkFGsVEJpkWM5CjN1QZDz7B2SujGqvr8Gr4ttC",
  "key40": "23aDJFAjxhsrE1H5tdwez6Pm9ZD889sr5yjP9GFNugt6SkvunVNXJDsoUt36U1Xi2DYEgkabhJkMEDSs63WAS4ud",
  "key41": "2aUZJHMWfTJQYg86LtpD1Y7TB8N5TX6XNpSxp88C1fi2xW637yP8mmoYf8GTknaQ3i3eSyUpaahrL3i1wFBpxS9k",
  "key42": "5qr4wCoj4ruJFiFMdhfnpbBKNytbaHMcB3VDKD5yZc4UyFDJMhmXHoymy1N2pb8rozKe6eMC6x1M9dWQzzDhAhiy",
  "key43": "5AhBibztaTZZgG1w8omWW4zZ4FDeEtaht3Kx1EecmX6qCt7MN1e4dAVoxEApPNVXMindjZqeBP8z5TeuYsyTz5Ue",
  "key44": "4ygGKXoA4CiyenGenxRBKHWRv4HhK7dHz5NWBtt9ULxJVHJ39mtLFg656Ndf5tLaagEmdtgMUwhSWyAzPVbeBNVq",
  "key45": "3dRVM5ccpkH8dveT4hKnxeCtageuCTNnnxGY6L5YzMaFbXdPuSATFg4GDGRUfBe4VWJwZxQpB2S6JeQbSrhR9tDY",
  "key46": "3bToQz5ntWRYSqUqF2YHc3wqV2RjYN1guon2M6qL82q1M7GThKWrR4UH3HuyDnVf4joSUrJuvu6mHpkbyLU6rjyT"
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
