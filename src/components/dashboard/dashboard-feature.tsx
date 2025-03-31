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
    "2mZUCsUwxNiwr3K3Qg6bx4R31FBbWSPjpUYpNoPAczo8zaJ4dRn7KTBNz5ezRpHgPgmRhzyWxv4G1N4hJBrwK7LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLajoXfSXRNGKoLBRSJFqhkeC5avsMKLXfvZ5bTRaBs6hnbKjFNtAs75Kkqzd5QYFmihcnDqLkgL8YPtTYG3JCd",
  "key1": "4fAhXSHZwnhk4Nq6VyeeQ2D2LMBrseYPo4U1hAXjdPe8LY4Vb1Jx7og8MML8DxGH3RBPifJZ2Svk7tJTaLZquQYa",
  "key2": "465oEwv3jgda4dqQb5BzVkgQjeESBd5gXqoRNwYZS7hcR5yAWbpApYhA6buXvXHZygFwD74W2EgQ2HAqyNUpcd6r",
  "key3": "anQAjyyG3qVAf5io1dJbqbkH9Jz9Ri5zFzVbFzUoaunedZe76X9xC3uw3AdZiZ5SFQcDpzNxPcUiDC6wfrhZfEZ",
  "key4": "5TS7jBpDxB4DeLcMPvYc97hPgZSk4d2cVcu5tGUi1pcHuc13Ezq8F6W7Mec6ebyUeCrN1g7uub8NGv4uF1SAiTyL",
  "key5": "BaErDiZAxuFTEA7HRtdTXqHS4eZzmsqCgMwhaFe9wmUVa6nuRiTRYTAPzze1hWkCn6kxNsh3BGUudJSysaCoSxW",
  "key6": "5PZkZ2HTMxdLomySraiW34t1LdmJhEhG2nUhNoR5U98i1sxqP9JWP6zyPNjYSifsrwwsfBhgB1gArgThpZR3sJBo",
  "key7": "66KbUWsL5qp2ruWc9Zo25f65Kgsa7ELHNLX9tiEJcdP63RBsRhhkTZUHERQPNbuuMwPEFSWZJYTDtEJAaY4ogZSx",
  "key8": "2ZMuGUG9GuRQyAgCgdsaRz6DSLXVofhn1YVtAKTfVMqfoLdhrJDyEEcvJHnKJ5PgGDny8aVsy3EPJFgmMJNodc3H",
  "key9": "3xMARjkhpmE7XD8T2HHsPA7LQN9ZoxDN9K5rQjhML2bsj1Mm9BLyATktapcPPKrGbywHQL7QoZRuPnpemTDsfdDV",
  "key10": "2KftqJyagazSz5tFMEjKz4s3Zov1NpqMAWd68RdsuJv7xgfGaxm9FtQrVc7pfbRuX3A1NvEBg2qmBmUddRa1Ktgz",
  "key11": "4QdtST1GKxdquVvdAsnJB4aFat7cqixv4kbDFPsvu5kicGAtphr4MzNsC7uwzsFz83NwT19KYEy1AgaUdebTSU91",
  "key12": "4JAhQwZZnJcnCp8zaWP3eXmJLu9MP6JtL2XzsSmojfmSFreXtKNVhJETxdRdwtuE2WmMa3bRAeTcykeZ9cDjQyXT",
  "key13": "3qsGtx39N7CiL2ow8PV3uT98zLtpVyCcequwkt38L6VLU9hzkyqNrk91t1VcXft5dD19fKwF2uee6NChf2kg1dP9",
  "key14": "67LinphLyzgAAvjyMKyd3aeEadAJtN6kAcj7DPkpJcXaJiURZo5FRT7Ct1PThiNxHC9yHxc8RyRYrf1U4XWsUyEE",
  "key15": "565BskoXnhxCv83QTCJptFYudjsecn7tWSRkoMRpg1MUb3QpyyfsfuCkPw3QTuznKfmb3AJZDhQWZ7pBN8VQTETf",
  "key16": "384FKeyFWyP311x4HvvmjqhmpcegZmykoz264tFxSyfXZkNxjBxcwksHe1AzWicsm2Hokyx8dBWf6GomdrsCysRh",
  "key17": "5uPNUZcsk8RQu3uhiNxwkH1B5kzLHgS9N8EZELmYdzxewXsrW3Na7tyKzGPSioq4jLszGo2iHnJNGNnCWHDv3qLU",
  "key18": "2z7USBAVyQ7UeEaDNTXD3ghPp87kYXkEQ79XBmsDjD1H2hR3y29sm5BxNiLsV9M57CXXn5jx4XUVffnPUDs9rHEX",
  "key19": "3kLAuibyYGeZqsinNUzqWNBos8J6Y8ojHkKyeWAq4Wof4V5yCHsDsGsnrvqUvEUU19T1t8JU8NoKQbLC6mN4JYjp",
  "key20": "5gHB8xLL5PJoksR6ZYWnPVeRMB1jPhFeRZRabY7Ncer7LaDHyZnLuob4owgbesVPuoBxRNf8yybhhrfY7mu2z8bW",
  "key21": "2TJYoGuCBht6mYoy2vqtB3ArSWHXkkQVy5Ed29xg3pafigwaTasanhfpUch2w3Rna8h7E5qJ2J2k9ijDM5XJ4PSe",
  "key22": "598AznfxwaYhp5KCSy6Xa5QyaKhwFW5aUw6FP4ajpX5rAwtAQnvJFCJxSEutumC7Asf7FeAM4fDLFL2Quej6DXpD",
  "key23": "3uj9nXUThrX9ZFnmKn93Wy7FUYvr7Zyg43J3CaTyvVHTF7MPGXYNDjzbpG4A532wxHfnHqCFKqjg8zjLwJ4RV8U1",
  "key24": "FcMsp9cWNzSzXxpRuoYumVsaaxEPJURws3DzUtsJXDzA1J9wrBkWAEk96sjZQgHwKTC89cs3nzXpkSLG48UhPvr",
  "key25": "2zw5ZkVeECCFq13VczRgfJCKaHwbkV4yRxMUCYZRxqEzRLfW3vyv7So1ppRi98F8msbuZFJAW3vdJAQRMBV5Lt5t",
  "key26": "2y4nxAvaNxeq5YcywPfDB1ErQV7wVoJJQGYudJP9hT7Zi52e8H2Qy6kvDzfr9MUSznmEHKaveVHk9qx8bP9PR4NQ",
  "key27": "2q47MXoWY33LmdPHtB8rxhZngq3JdVTQjafqrgBvXakATqqaFr3t6WAZ9VtZMQktnBN1i4oByjqFxZCpzcXMqnbX",
  "key28": "2S2pT9xVhyUJp45cLaRRJuqy19vcaFVjhqPFKNqCud6jGzMStKd3WvGVgJP3xNz9yLuQsdPdtAFEu7eBDRdX6sdX"
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
