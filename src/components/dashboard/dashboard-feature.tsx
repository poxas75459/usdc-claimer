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
    "4i1hk8ToNkoxdfAxja3w4BcKjRMunFpmVXtP6QMZCGyckgRMe5figkJxCfojuXQ8bnuWdtLp9DZTM8DKWD9Q4Euj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XvBeCxygNH2mMMpU1njigGxy9TRuus9tYmn8pUKTNWjL6HkhioP1M2foiJzJ84U7MvY23YbWQu2xmuXkMFpXaw1",
  "key1": "2jQxMmevsYbTyZjHWu7YmTfPeg951ZACVvdSmJxjCNpnrL18ssQgyQXgWpefQah8RqjU8cFekXsS4hTzbNrfzJq8",
  "key2": "4fwTFdsEx27zLLYqcjNtXKmJa21LumPdZKt46iqSmsA4A2g7foNd3CVq7sVKC54wLxbm2cfSg9Hrhz1EDnaDGKSJ",
  "key3": "5itVTUMkzmktdHTsGktYrvkYr1vnnZ4Rt6q6DcGXzoHFvGLoxM5LVu1jyesCubbD2qjfcEcwe3i57Lwrnxp1eEPy",
  "key4": "2wiR1XzVXN82bCSJ9g9iSFG3f9z8FqH4qRtefkTHjPzM83CuBVBXtjde4iFXXPCRLDhFU3vUQtTKTGke6FXKW1Ew",
  "key5": "2akY2ArLkyc59s7jwDktzkhow1f3JgbKX2VJdRyJbkNF9eUrX2gR5PkU7ZbadEhPE1AUGTjFmaEuSTWG3fu1EUed",
  "key6": "3dM1DtXi1GgMAuux8P2PJNmatdhxwsGV6UnuZniU1atjjyUDLiPAZTeSYLXKYvcMvBRjC5A56BqDTEV2yYPCXy9K",
  "key7": "4bRUjz3B7wMMfZPeLoAULD1htF3QZxbPwhphzXJjbjLBpaMsZ7xhcmKNgyUMWeNscyBqiguXyWT5fXB9QdvwYu29",
  "key8": "34p44tKQbQjzec3NBp2zFujD8mztcrANjvDk5hXcDcsXmHwn4khwAzuhZqicNEAN3ooXw52EBeT9QTC5E5yaADcZ",
  "key9": "May1b86bbD2ro3ntgqwnU5q27Cs2ZqhV4u3jsoMXz535ytF2VKGJavJMYk9HHDvqCAsEGGScf4EjAuuSRESHHLo",
  "key10": "35qoxBeduEaYmGUgCBsK2dgAnM1PjqGNJRHqroseCYmwqCiz6mNCe7pQihCbGZZuuvKiyRr7LxC7jkqR7YB2QYv",
  "key11": "4LGpFoQBGYQ6NgpNSTsF44LFYqTjgBbmuoPVK7hrHprYmwzBkf53RRpgVc9Yz8LujNtmKfPcAaY66b4g2unQPvCy",
  "key12": "Vq6ivPAHsbvNRNLNVjGGct3Ln7gw1RpGsyEJEjRrYkUfuqpVpgd7Sc8NVhd6jqpRuwRfLot7kQDAqtxreua83Wq",
  "key13": "3qDGM9BWRdTK9m2URYPJixLaAGMsiQANT5ZAtqYHQnw6NvjXuYmLaudM7Kghn7cxPWB8AAu3Lp1VQNejLhy9S4GN",
  "key14": "3dLwDKxwXqjvQCDMAoTMQCCfcfnJN1SGVunPsYffze3PoQ61nr65K77X4Uur95BoCch6Z1b8YSh8PskGdtYPr3Xg",
  "key15": "58CDiZepSM78e9JTm6GLGcUpM12o4URyEdHqs9fH1XBqSk883B67W8dQZXwUUwsxBaKvGMhMQfxFXUNVHM8yEpRY",
  "key16": "3nHrQSw5nLJGWF2HPrPyeUtqMEo4QzBCaPZkEKpzErKo5ZdfBwKFbd3LcM6myuUXAtxZm3KFMo4wgttg5RbD5Mfv",
  "key17": "AGqBZPS7Lmp1t2Rcce7syrbguu9pJva7Tkx3Wcvj9WtgtrfxF6hNutUchhi4QD7Mxy1nyPg6B1pGEdQaZqem4J8",
  "key18": "5cEsrrzh51x1ZPYSPucfCFWV7iMz6hH6BM3KubBNE7WwwecFJ13qd9YKZoTfYcCAXz432YQD8UsKNjbbMg5M3xky",
  "key19": "4i75gpZzx3qE9GDd9Ckgtr3FHLpcje1cfgEJjpd9UChE3t6ZmC6ATaAbn3ARuEJ7AgKC7fxJQoB4Z6ucGHzMDHAx",
  "key20": "376LRqdPgnnJrmzGsDPpRGwBJHv8tiMzQonZ2kpFyNx2qcyUZ9w8zMRXsyiu3FoK99M8aYe3qfGMEGzaHcKKfmHJ",
  "key21": "5fKUXe5sJ3B5uxvQ76dH5iQ4oPTnvb1FBBiSqfdAMsJLAquditdyedY3fU83qrF8oDNmRrkysopYiwb7micN28CD",
  "key22": "3ut9CtBvRMR1meyPWcmrJirHKdozGKHgowJBBKk6HzscJ7rWTtmbLTCvh7VRCbFowy3fzVGVkzn9Gt5PsrUtMDER",
  "key23": "3BsLFQCCVh3BJqCEg8EDX2SPsZTPMiSMU743VkWbz6JwnQ5jmBvQYwiEWX4mxA59W3NHcwsAdqZTzU3jBsPadnJs",
  "key24": "2LxUKJiZTyWME558PCfmR9Y9AzP5q9ov9h8itnDiUUP3K3sMSzmmUh6aC2mheMBqZtADDTTKZufiKm6UcS5Yk5PD",
  "key25": "5khBa5iSpNQpDcsUZrZ9ZzTe5n6x7ug2nvzbvGMoBXE1uxTh6BHKn6UVnp7wkDPPnaJL7f13NAWG6DwdjmesXGNh",
  "key26": "3Sxn4CGBb4UBUSTWhTcntCeBekkhX1b1kNgtoCebEdrdjhe2oCQjQh5fbu9uHAtT74LoUZXekUd5w2MJSVU9D2Vt",
  "key27": "4xFHeDeEF6kMSPDFdGDJLXPDcqNwLZLGsKTVN8gnJWETuATKfy8JgaVg6rtJJUXrD7mw5styrZ6Gx2Lnu1i67uTg",
  "key28": "2dAKwbcq29SNYGSUz7mDnrVqdGrA6Uu6b86huE9eB1sdrq8Wi1PtJZW8fk1LmgHCbyp4vXwbXc4rc53PeTV5ak2v",
  "key29": "5nw3RPqM2gpAgxUZhLpubLvPfPGHNn6qRddbjPG1EAKifyS825BLBko2qxrsSPnRr5m9qNVJ3j9rJRuY92suMpDP"
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
