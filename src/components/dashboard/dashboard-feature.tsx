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
    "2DEB1PRGGNHoqyo6MDmziuF69tftrCz4hbdNctJfnjgwseSKdWbZEWaCecvdD1ksSCyZkyQpb7SMj8Eq5otTcM4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tTAuFRwuppCETqABDpAGPBiD6183LD2FszdFrymKfTMVuYip9JCPKu2CwQQMxgYAEZtuptcBvgWwR3tioDGcHDm",
  "key1": "ow4hxnELH2j3JAQmBbU7DNbp3MvH4JyeqXsUkCbsX5m1jpzqNS4sTKEsPmgLFbUNUrPcHCMaNyMAZiN4jzh3rRt",
  "key2": "2FQwGe6LDMQicR6Jirc7Qn9LuELpSE1WPewmrQVYUWUeYZtsjNiSpXM9SWs5zKjt2Mcs5jZ21xPs54uc8q9teCY9",
  "key3": "8YW8wZGwa8M8nC9UV1VnECsLAJAdsQmnuNfNM7XyonTxMJV6uf3AV1RdMvGi2JU6bNGFCrpTMGsg2jhwFqnN6ZN",
  "key4": "2wkDbgs6n4nKez1xnRF9HVVyNj9xqbxENzrGSa9skEzzA927BquC5pwS31tjgw8gLjRUJigQC5Lqa5JBquckHmsY",
  "key5": "6Fp18peinusmVWA82ZH8r6SLpjDPJU5otCReJziAccy8ppS32PNxbHW3hs4b6HqpsHpX6VqbcrWt3QA9wemj5rZ",
  "key6": "3s3tBxbyujV62mBwV5ostaqcSs9kbUEsRDQ4tPXnJaNgsxENBoDv3XLMHsL5DznX23jyUvysrzrSyAKdcjVvT5FA",
  "key7": "2J3CvPdGwHa2P1DDELcHzSycTUPEM9XkvwRVTaX4t53AJknax9o4MkfRYpzyK3aVPq8Gsb7db9V3FeXtHP3jWs9s",
  "key8": "63rdckfb7XUhUuMA9QGo3VsQxzX7oqLmEEbiDmid86yNcdY8EvnuzQp2QearoHVuB8AdapBwjqy9zMoS1F7PHYBg",
  "key9": "3pPz8DEBNbLA6VNTgvbSnsuDjKFh5Si5w7CwJAL2p5mvAk34jQ9vNqRUQDqK97KRrBRHrm8VkK89t1w71pi1Tf3i",
  "key10": "4Dme9ytpFAAh5BdpRkjAp9n5J4Koq9ZAtcGamqdPP99WifpG6JcKDCL9wEzHF9uEqVjF2UtjC3P5CqtLLkjGqRGN",
  "key11": "3cJKRPN84vKKcKWhdmTexqCm5f8A3XvMy4bnY62ALChW28PGq82gJ8TqhFHPgwm5swCBuevMHMUex96MLHUHJwJe",
  "key12": "5nZyvWRf6qNu5e8qLSSCk94hgfwA9eShday8KwcRVC4eaG3teK7yyxPK2JzdYSSswkjgpgSAD7y4vvngeUyW1Mr6",
  "key13": "4ddL4jbF8Mro481WsDeNu2HvJdkhW32M5eJwCk7Q1d5N6eWf55TGt8qvkiqCQgJ58eVc29Gp2ZC1CPh5F1Au1t9c",
  "key14": "31cfqkzKyJkEJGiSkB8tuGZoDAfgvEuKvG3ofccocUTFUogfG8CW9eysXCtbavaSP4wwhCLhJYqr4o94o7Jx8tEt",
  "key15": "sLJDNmKnwt813RhWCuFdf69J3HHePMTAruF1RCfQoLFTm2qqiH76DzExobno8S4V2HeHfNza6orEvsePZUc9tZc",
  "key16": "NVtjYE7SGtPHzCq45eCKKvMHQumgDXmHGcVyvVonoWFALTN32wF1edNJGinLeZW2AqrNfTJA5CLfPJkrCrryASS",
  "key17": "2DhgmvYKAgeLE2RwC7gUYGmAD9majiHqwhfLuyzsWyyLCVQkLtkhXTx53LDnqaYgK3rwyNe62oPTqEcTZ7VV34WS",
  "key18": "5UJLoo2yUHeedq1ZevrtvtyAz6tURCvq8h9R8MEDZQYLAkx6nrY9rpU1VzP1vEZeu41gArfrvQaCQgdi4ZKmPqYE",
  "key19": "5N2gyrhZP5ubP1VZ77R4HmVKCiqXXE3o9j8RHXiGBU64HFNT93rEiJD9fx8WdjFH6RCvJiZ1ZTFfBZLwazCAatJZ",
  "key20": "3Bzw3wUKvgdFUgQLFrFNEZaZXaLo2MbyYjwTFKtjVKAjKJ4s7vvN4Y7Sj7MBhnXU96n5NLsD1kSQzMaZPrPB9Du3",
  "key21": "ut5EA4Yua7PFAa5Au6tdJFCSc4Q9aeTCZm2nsR6dfA5eaYB43ppoGDGusMESyVk596FrhftjmcfkhvkLtS3yJxT",
  "key22": "35fzLbpCUtrGEsik2Pdetd813sszhPTQ8CiELSc8CMJ6kws1keQmiYHVqSVPgwwwDHxfEsmdAc2XoBwZuWRgyiF3",
  "key23": "MEFxaDcrHyJU4kQxAvYZAzgeY2aM43HmmUjybdPYndfTyiz7CP27S9SxnM7XWvGWoo8LVft846GLVcnFhT9WkRK",
  "key24": "3MgVNFmzCtA9RUj1T7qZP5KJuRy7roK5MLLnVcrWCg9dojV6LaxZYJXHK4CuEk16V6ZqGozVJyXC14QxwoUe3Lkg",
  "key25": "3P1hCGiokkmVdgkVWoitqTEvnMZAvPztj1nDRLoxgmzshjBQF3gGcp7c1kkwEMRiHW5a1sTkZpC35UEUxGy6reDn"
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
