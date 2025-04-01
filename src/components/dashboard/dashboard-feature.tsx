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
    "2kAjj1bSJNtCWj324YQa9QhZPXKe8Q7m1yCD6pRLdyoE9YrgLvgd7TxT53G9Wgh7UJuhxUiZGUj7BfAY95E5Mkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368LqHjCuXaayWSdKiGVuxbuWXawhSQqcX26iESncCtXhbeDnoxwkxtWRUrZpDSvk47xXTr36yz6kQMcDEDVh5bm",
  "key1": "2z39HcHSDPahTDGfULVbLVzR7MS6yXsXSsDhD3mwhx8ppa5f5p5MrnWzGJSRRFMN59dQh5BRH314FfeMuuczuWWG",
  "key2": "67U5GSmRC7AVTo2vfqjMM6tJVEoFxWGA3hZwB3P4U535q8aJCtHyrPrHjcH341wEco8Ne6tY36PVdB2fBATXRaYy",
  "key3": "3KzZmzoFSbQjmqpkPGTFaRErhHUtCsGgZ86er8d9RoSPjRBqnSucsDWe1NibuqhAAWiCq7xQPZeMkbt5eFt31dRJ",
  "key4": "5UsaKTFgNSL8wX3AuybhNPGXVobvRt5po57tv1aGEhnNeJnipxYMXfEyVCvDU5jxY5fmGDx7uPCVj5HnqBeZHtZ9",
  "key5": "xdBhyEyRyyqhyFzkojuE6aNiYPNXcyDHhXEy6LRaK1ptiFuj9L9bbwAijfJC6yWh5vrGpYtqwirqXV4tvPtWZLc",
  "key6": "2bfgix2fyN9waiormQMUhorZq7y6xjSX2J87DXJU3Yv1Lv9dp9zrwNmMyk2YsykT9bFSfX4Wm22WbqZq76pK72SF",
  "key7": "azDBbuWxA3Q77YZemdaF1nYkjstLgXHKrQD2pncDB9VCSqtow1gV31gfnNhBGqRPBgaVCzH1cQ9QozGpFVX79WY",
  "key8": "2DRbSpPwHcfTVFHMGMi9BiHvxrNPfjUb8bZveu34WQWKAEo285HBB8cxs4gy4bDDex1h4iJMwtASi8CagEyjrw5G",
  "key9": "2enQium1uPnEVbyPEE2ZaCLAWQhe4iQvjY4g3FBv43retRSHoszeLNAcji6isoJ3gKkFPLEeq9ZJYA68yhidGRvL",
  "key10": "3Ep6gN2oKYKzeyqevtkVzKHT1fiF5KKNGb1d1KLATejssq9LDpnsaijQSFgGxnRrEx1n3aP2JPBJwNPPDd59Tfzr",
  "key11": "2AcC2EShNZ6pDJzCYp5AR2CkWGmu8nLFmJWkqEwDZoqnspUbAVuW55aiyizMh4cESkWcLRAHaebY8hRp8YCPJ6yf",
  "key12": "4UvNkuH1EJn6NawPx2BuRft6xjKJwaZgwjT8GndWW8E9ZGaiBvEWXfs16pWahqN5pp6pSqBQJn1R9QBzmtWrqdDn",
  "key13": "4RhF9QL55bKDdkmASncUGLTh5EAHCNu7bp3PAUzpMpkzG6WkGMWbhAbeSJTgghJ8QcUsDG9rDG82KSXoQG1VY7bP",
  "key14": "EAf6Xy9cnV593qE1N572h1QgxAtnWWcAe8XSwTab8um1Rp83RbPGorRgqUenHoYit1cMRBCWA6GxGKCYa6C2eY3",
  "key15": "5Vm1BPeyWKmJVTRAN4LsknWYdP3sPRPksZjuQYUVDJXPyiMFq2vfCWMZ6ebnPu3M5odAk9jPy4FvPXKHSmZVpNaV",
  "key16": "2MkF8Bur2tMa3dtep9K5JV84ftTw86SmqvXJ16Gm62cWyv35qm2nWLehELhLq331aLT5bQBy9SZVsVCVxjJTsZiK",
  "key17": "4NpKsxWmzouPqfRPA9qfKNBHTeDdPmsQLe6BAMQqMPWusyjyy8vEvBfFsN3YH3v4GUg4zvcXKjM6SJnxufpvSw82",
  "key18": "3CirNyzA3WG5FwWbn12GfpoJEieJ2yMXC9vK4fFh3vK9bciLDmrYPaWxC3xSnoHKFhMZgnL8ydoaMbjKRSwrHiHe",
  "key19": "3v7ugMad3VsxguEPAZfZUMnvGs7u1dBatuVdQSoT5gHFWS9LqtDWsd5AVSrdAinbCkVrZW4Ja4jMTZot96VYrcgu",
  "key20": "51yHEBaBm81hwYSZ43eY2EfX5xuz4JgoHEXb1ykEKDtmzr24ZP2Wk1KjveMkrdYJumpmMn9FtHVTrmpt8FEqbA7y",
  "key21": "2rG5UJMqRWSeLgudTFbPTVJL19K4bskLCfdqVUkq5LYKxed5vSz1aY8pKG54UrW6W78nz5u4cusW5uP4FKqrAH8a",
  "key22": "43Yp39UPibyfqfXkUYaz6WKYryV8WSmSQFAZo2Mabij2td3c3qTTAWFTc2SfDDmbLJWUCcsiCLgRrfYv1GsZzJsP",
  "key23": "48P2GGH97KqMQkJmKYWAQhgdQLrudNGAf8YyshPpw4XAUzeUPHYMqFZY1sTxEU49QT65dixPLgGn1gtYiyRAw7ej",
  "key24": "3tw3BE2dg9towsTbJbKFPNWaoP5gpbvDcdBmsZ5k6KKWgXCkEqhcDYNA6QSaN5gsQTsVK4AmLxVtZ3ZA8wnPBn1Y",
  "key25": "4qnVT4gZDQmdmjkSCg5hmYajDzMWFVV5bwF6mnTF2j1N2Yh4KxUk3fJDHsgHj3KWMDesHkVw8LUWoYHNqsUySrfq",
  "key26": "3VTSBx3qb8Judmza6c9vrmRrxbn3sxxgzw7emv2WpEMC7AZLsF5Nu66vXDm9eruEbHstMkekQh66Lp5mavqxCb7M",
  "key27": "3A7gGtYXuHeSKW89YvAgURCgvA17VprEjfeCJz2GQx7xYVJvXEqM8SiiNLUiKcij4HDeWjBYkibnYbUmy3HmCDR5",
  "key28": "57pamUHqGH3un2JJ7pTZ2XDjEjTKWG7CFSaxwESNP3gTNQ42DNGxUaATHWN7kq6qhZDRP5fPrNoarTGLJf8SeU9o",
  "key29": "5ZfcR7nQTjZS6cWSUtUzHSGQEYnSHg6BRxqLqg5Jw9eyNknWSVtbdA2Z3xjkLrZnymwmeYHJiia19UfPFqDqmsqN",
  "key30": "27DUUS7FDu4QSygNxRFdDZZQgC6WpM6GMQcoYujuJJhnAtwLJWsahQFF5TdqNBEtv8oqFFBP18p5CVkaE2oTVyZ1",
  "key31": "4mWgKE3p7d54vTSk6xJH5upAs2qM9pV3QTBBDfFu9LH5W9uqBYzfuHtu5taXdH6wFxeQeWZS3jkFvzMgiWWe6h5H",
  "key32": "5kXHwLtQN1cAULXKhs4ogMs18JoRhHzJxryApYg9SoTbk3ZdfZiT9GfZU74tvX16ouJmN1eQjRQgxc891xkL8APT",
  "key33": "55RoPAyDTJHhVZujyNz1zciEsGDVbQyD5Q51JhQuyJCVVfkFVT5B7nXgwHSYiBSJVhnyiYJEnAQWJxwKN4sLDQDN",
  "key34": "2Z7mo9MsmbeiyXkxhVfu9Y8g3dCwARZHSfZwx4CDDfJtjVN5UeXUVA8h49knpbfVJwPfPUZH5R3zNQsAeWWEXLCH",
  "key35": "XhLV9HMMcagbpcXevJoSe1tmX4HkVA6fAt2JxN2j4ooFAExrdCmazwVx4AifuwLrQwV5JL77BiWgmbVL7bVc8Gm",
  "key36": "4tuc7uy4e9ZYkKZ1duLnyewFXoPnCXPE28t1jEfCTh1nJimZHd7Lom69Vs3AMzTL5jyuGgVQ6q6zhnyBhdnbAkKi",
  "key37": "2e5mUqhdeBGjRxJ3roZdXTud1TDvFDEwYrieDFnuyyTXbphwBd7q5C8ssHrHEQsf1D1wadcS7Qk3PxfktaPunDjj",
  "key38": "4zgTupJB1DofRVznhe8CK4zbDLxRrkGM6MskUXsuAkk24Ajcd3GMT4WC9sVpM7vHq793ZQUtPJHF8ckZ7AUM7gCM",
  "key39": "48VGsxFg2PqxMsGuVX44pC98dGKkTYkGqYwtR9BfCycuCvNjSLJBfwiquxv6y1JGyjadiTBSTxxbXrb4tXjCBfNp",
  "key40": "yEcJRjKm11kSMh8Y8weksMbwX9HkT4wJuYVz4aDtYxuzksqbqW4cL23uoTU4d1kpy5uBnKhEci8XjQ1E4fkXNzf",
  "key41": "67eMSqa9UPjs2dCv49DPoPj5S7tfn2PBc3nR67GqMyyu56d6GVUARp1c2ScmrPGtRPZj7q5ph2hXaTNodjkjnQpq",
  "key42": "2e3BCDtTmJ3GbD3Lt12cEAy2MTzcgD2GLhFzgj8zwGqMYHzX8fNLe8DKDGviuUNLM4r4wbjhMXjuvpYdvUGk7Yrt"
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
