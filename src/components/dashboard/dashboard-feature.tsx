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
    "4CdR3cxt6qTKSsNqfQnZghPjK9jWvKvQxgFPDsR84BYUZmoGF1tmd7sH2aG2UkZd31CavVwj7BESVuBAemfHHhGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5QNCeeUvrSptkoT3fZ3YWpeDE1GjxZsgfSMj7yxCF2xPVo8hgosmhtEsvKM8wE5kgiKZ6sJJBxUVXWn1WcgguZ",
  "key1": "55M1QvCue7b5t23NbBtcdqfURx3TC82etaLAaYaCbNNVDfPpheKeiRbtBS5EGT87RfpBQZPDcCNMUw5bbP5vYvF6",
  "key2": "wdvGLsqeYGhum1VD4JYgBPYZRNbAsz73RXxjWsiZzpYsCjesjXfMGxU27VC4bCH2LBHd2C5eun7jpxGENSAt4st",
  "key3": "5HcSVe8a63dj58xmbK3KVQiSKGDvW1QJM5LE2faEM6q2HWba1gC7mZtCNyEEpCUVNkjPDqk19pqCF536Yof9cvLX",
  "key4": "3G2dYceAVFCAyubNJVGmm5j196p9xdfAyMX3pvT4cKfQJHNwp5Jc5khhgBbNkFDuWiaRCQB5quAuS76GPmHiqrfz",
  "key5": "4NNBC86cVbvTExQBT9kG9PLeSgKBJD7feuSNCQVvP8i15yuCCzoK5tgyRyUBEHrWsvvWNXKcionsvyY5r9mbJNTn",
  "key6": "2pRxXdZ3nm8i8GW4jmyArymsx7afqcf2CSBxuTYEVD91xmiWS97Eh1AejgBoiD4bJhNwPwKwCb8onkBUXigBHeiT",
  "key7": "3yA8EfLgcsqhT1YyKct9isNmLoYYrC4U2287GA1eiPSHDmHysz8MwhXU9GKHCT1yHJLpfN4CZLdteGyWpJ6HhnNG",
  "key8": "JVWKCF27cs8kKZAy5ijZedmA9NLJSJEz5cLMUhQphZYxUdwMpz4HbtMyrHyD4mVv82xgPaTwuEE97Yudq9Zwnm5",
  "key9": "27NLEP2ri83cYBN3YYdqEXCinn7Ak3QpFDVQD3Wt7aBTSZfX3rsHsFSqG52MyfpqiyEqixQhf68RMyjGruJcVGvj",
  "key10": "3tfKif8DLijGFRp8RYbL3K4npqSfxZTSjxZBM5HJJSVeYAsTZaVWTGWNydLKmPzpbrr8KiFL5c8kqJW93MpJ9XsX",
  "key11": "2AxXpLyRT8Ay2YvifA5WXp8NCvmTSsCBiNPCgs45S6LburwUpEMsisXtTihrSnikjpti8KFE5YViux2JpxNgbKjM",
  "key12": "3TcjqFRoLrrz6kBK4kozUwoSjmHa6yeJucvpVeSmntykTjn6pPSaqEAFgjuVzsakeRDV1dXNBq8Q519D3hpJeCCp",
  "key13": "2xhTxMGGqHMUd48q7P4kbDBHJvroreQ3SQ6yhU9QK35EZ8h7qjqRDKysmxDX43ub6fwycW2JaWmWn2ZTVjVc4KHj",
  "key14": "5reV2MYt1xbCy5NzijjURyHfK25bVqnLoS7mKMxLwHgJ4fkdGiPMcaJhz5LeQb3rPU1DkYsU8i8bk6f6U1P8vUQk",
  "key15": "BrEdNFq96v2vNmDMFvbMdPh3WtW2VUy6KGGTcPAZP3C68ofF23KhHN4uZhcz7aQStDK8gK9PKwLpMxsJ1HeApwg",
  "key16": "Sz8UKiELhoJP81aHy6KADoRtsBBxPohW1WFS8yEUgqiAsB6EUZQmbPjU3BMHiSdPKEiba5AyRnNoghxDLwwBPCC",
  "key17": "3Jy8oPcEk6g2XeMmKaF5RdtVB83eUC1xQXYRoQMURetosdqRTu4KTTafzRfy4tLX1KF5VzSWjJfNpeBYKKRqr6QA",
  "key18": "3DuTcsPJKacu6pr38gX36BgAzDLA4Jm9JVCBbHgG4FeG75nXyXsoFH51CUULpikpcPsXxrz65Xdxf8ZfnVqoV681",
  "key19": "5cTBne2h1PryjA2PaSn1vV9GkbC9aEEbsphCREHx8H1xgbVwjnBgagdXgPVzqHqv39yJibcejgwrFb4CvsYLWFME",
  "key20": "4XAN6NbuAVinhFasc86U2gM4ZrVM4pYpT6yxKaLpncY2MvZ8pNb3W3hk4p8sEjPAMPcZrRtvGvnE5siWRwcrDYTb",
  "key21": "3wmKtrikD8n1aemjLrLEg2zTykUiGYcvU8r15f43ffEVKJjfhKdAkxbTsUBxGcextTDz3TjZark95GtHTTLuuP5h",
  "key22": "UJZSzxCkT1uVEtnovRVTh3fQvoShrSTFBrDykj6hq8mhfFDP6n4AbpE3pmYZjFkqZgvxhEWsq83Ha97oJSRC75q",
  "key23": "4Jv4m1W7xWvX7djue8dpyVzhdT7BfdD64awkAf1wnooM37JHXBQPZhkkX66rhkdJM8PyrUKG4zWowyk6qcZ79GCG",
  "key24": "3Q5no5oiBdibDaymxPEVY7GcUaiXi29eLCn4PvuYF84o6ASmcpus5yKPuULRoDJKApVWBNUCPgUL9vxL2i2MNqtG"
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
