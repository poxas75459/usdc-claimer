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
    "CweM17hsKdzcSuTHF5UZBef7Dk5SPJypb33sHVsjFMQpk6ubnUotusNTzE2PHEbHRKMQE5Mkr2hmSqEHFikdZnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzdcpKLC2wLC6hxERPvG9dQ6wqj1tV44SUZSnV9nhUNePdCcoyPy74L3poEtCj15EDvYqePsYMKbhnTmLj8X4Jn",
  "key1": "4dokctn8ugGfqx5h6oPqmLGQ5G2NLQq6EYzjFtfwBbiunuehskUNm8xBuDcZAZ1sWK51HEGCCu8SWy6V4KT4wGKE",
  "key2": "4hQ5x6DV8cG7ZbPrw9gHsrzn3R7JLss9FSjVx1TpqRQXAWrMffiqaHRHEtNfbJsAY3cx5ATwPVWy5NBfMMh4TDgo",
  "key3": "51QVdJFXuwTsv2n36TsMJ9XJ9AFu5x4dfrw4cL8tu9tefVeuDLS6vxRPAJdhbw4xtmC3YxrDo8qE4cbUYy7v5bZX",
  "key4": "3CbTNYuwPyPVLstCRGkYC4ShZsHF3EndtqnDJET2p3bBmPCgehPATK2omdGNrDKk1KkYgkgvw6iAB5HCAHXYEjRG",
  "key5": "3vZbUwRRMagF3NkM3LhpcTA25XAHUtV5HEzP3if2gKTqd7SKVeuJyU2CfMbcBV4jmDSoY6r1RjRRVh9UKXe7UG4K",
  "key6": "DBJBbABCkpvDsUapvPtnPTTbtWTTE29XHDrv6RvSpqMjjfTaLxhxqGzWprTNYUKBLzj6BefTam18Jny115ek3z5",
  "key7": "5ibdyeyh41ExebZWKMEBE7zbST5QQqB5sUMYVD9Y2ZFDVzDuTNCmYb6mPYq9qWAm6dZBctXkrSQCeQouyFELSDHo",
  "key8": "4KCqi6idx1TsWPjG1qpMEE3FKV8yzxGgfzF5ihjRnMNTYTdaStDnHEhJGkBquZukHEyeZNCD3uE1aW3GNK2VqDAr",
  "key9": "2NH6HmDkqQBLznjy6ziNsVBWcad2EpSj1eVVNaHyjHncXVdij4JFa2MVNfHsCgz587H156qFVNCQVt9pXMtomjb5",
  "key10": "3swXKC5bz1fGhckcUmQXqLzVjqQsfD95iCMKPBHg2S4zjFFrB4e3LcXBGP44zPN2DFHJ6XX8f7VzG1a4aGYwh67Y",
  "key11": "sTbDUfD7mhn89gzKigcJPrXbJ89sHfmMkHQ9A8kYZVF1ymfpND8uFq45gsLeWXFyQ8hLFPsinz6rrg1x3gCrJza",
  "key12": "5PHmU3iobxjRzRKyGiimYVsgXFANc53AZ4n56CTrVNPgrtsL1miyGnP4jXxwk3SXm9sm2yG12tQvWpMkx7kCsLGC",
  "key13": "2DAcNMCeWVD3A85CHYXHqhmEGGwTsKTgvcCssKmiem2AqmS6mfcxhYXhjmrxqjjaGYJGhp2KWdYgHfvavKjoojPq",
  "key14": "mJDkGmpADMp54ypS5z54QwmhWPV6v6WodK7QEUzQX9uvi1D8rgwUNJaZcriC9pPQY1qd6TRk2jHXS51ZReCSW2s",
  "key15": "41tqV8JTVoYaymv7zPXu1Xit6YMkjPC7QndNY2HziYVXo7ZPctGtA7daWqhss2DkHKbrDshFKWcjRupbf8zeoDVC",
  "key16": "5TJoohGtBD9qcWxYrPYq2DaJoybmHTEwwKZVuonPQHE7SgRgzyVo4Khof3Z4J6bhqvtPwkX2TVr3GCghqgTjupJv",
  "key17": "Jp6D3mR9XLd6kksFR3bZCfUgATPbeBTkpCUPRXbw2PwNDK6ZMJBFr583D4NCfHhCqW6HL65A11XrkJJ2FaCT1WK",
  "key18": "3dvKxkQaFJwYS6gskP6GBPKZ3asJoVwYdSmYp8CKYe2mGaddYZRT8faTyJnzxC7kQrLPxxHi18YVzcvNwNkUVjTM",
  "key19": "2NNaRwsXPoQ9g6kXjUGsJq8WcG5nH629BuM7v2z4xtPFrZHa8BeEtJYY1rwsMUvbhKDBo9HxGxESpHPGVdWfBSfs",
  "key20": "51FUGhC6ZW7dp3eYRoo6EGreFimfpCR3dZC2TdHFe9igqXv2iLiKqsGM6dQ41sBApSKM9rpWoFUWGzNcvoX5ReBd",
  "key21": "S9RXFsWBeDNUeryb4nUQY4eP2j8U4XAVwReFtDfXiys6tZE6C2xCE9mqKVPnSn3CZ9yHVWegGMA4VbAVefjePaJ",
  "key22": "4o8FWAbgTciQa2iWgWHai9NsTjXP4Dh1PX9ETt5DPdNZbwUtQNuwo5yNVcxrdJjVpvjDDfwNCXJXq9M5wePuUBWf",
  "key23": "fSSLuK6WsZ69qGnUPpJRRp3JHRD1TjDU7CKG9RAcokrzN2fd1WVmSfGLNA5Vb9bNKKRjpNKZ2GCjQ1pYAgzCurP",
  "key24": "293jdUbQNnBD6qRD1kYdaHb252wBUunwr9Hb6oY6gHJmJjxgR6M2ruR8SknG8F6hADA6XMwKy35jjV6k3EMyugYo",
  "key25": "3mnQRNcFQY8KufnbAGMsPnZ2XL4bEbXfwhnzzJDiY5vWc4MgP9crVG9feZBYNTFtV62aof312NigTALNQqNPbrss",
  "key26": "4RafieS9Cd3YDBsWi6jj6eVNSoSUyUr2V6jCu5bfEsbn7dgfvT96W17H3wsPk3a1Tvy8riH99KaGRmCBnm94xdjN",
  "key27": "5jh2yfuqURSdJGiidJzKmRkzdzrq2E628preHWPdVpuy3dY9XGogf6hK7fafTiJNP3iNoFHB2KYjRXcKkrJ4W2RA",
  "key28": "4m7hr2PG76Huew9Gt2U3DtnvUqq1B5oKij4E28VpB17jvaGjhpa9oZndZ5Qc4vrEoKfjaZ5kqygVCnETUzvCgwRF",
  "key29": "p3YAuybe2ekvYaZsUK7kLxDbZGFJjhtp6BsVQMCAubZK7d6QNYV28TYCt3uWpf7nbXpj7UBVQn5pZPfev3cUNxj",
  "key30": "3FU3WhUS8TZgRupXMcKj3UoKjiro7p7BnBsnkayKx3XAeHZhq2CgwKo9qLuoCXmVcxPbJjS4cyhFJxZRRLctRkYw",
  "key31": "5Jesu1KCTwcxSnz1EahKSAVNVPVNBM1oXjkwkCkxowHZyV4dz6Z1gH9MypcB8fe4R4QSfDtgQCCPnBi64XAq99gA"
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
