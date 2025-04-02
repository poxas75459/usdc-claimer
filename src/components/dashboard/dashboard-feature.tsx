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
    "43xnK8p7yWRaXTcwhhmD6R1E19iHX2Sbg1cSG5xtFRm12rGx9aaH7bSo5Hjcx3gg79SG4Typvp8Cf87HGAXNY4LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ke8NazPwV6S2VGUiqxYq4HTsQ7igD211zh9quayxvxkp3thHct2aiASnsF4PNi3gh2hxpwaoPFhQJuHuY5TGwCr",
  "key1": "2Mw7Nw9kuGg7QaVtDEXBs7fHeXX2DnJk9YtU7uFKynKGDcNoiWQt5Fje3ELwD2NCHRrY9583HsJEjSFSJVGBfzTQ",
  "key2": "2MSdXVPk2JtTLRPmVqqKAJpmTE7RwnA4bWZNpGrfkqGkorAgTLK2c8CSemF2g5UND4s6pcKccKE3LxRZRWEyPrNX",
  "key3": "3rd9UqAMR81vv53Qnu1qzd1AFmf8GE19haHnDS6FHqt8dRfPuipqDhpc8qpwZiuvM6NPKKA5C1tXSPsMM5u7tPtL",
  "key4": "247C1Kw5tBrBRpjm6r68AJnPTz7K2JZeZW8Rb634FD9Jk2QHf9myngZGB7y9uRN3CVK73qvmac6bYmAzqzUh7LYh",
  "key5": "VPgAuFDUzTd4nvR8sDZfcHLRkHAXmKZS7oAnd3HmfZwLb1WZrTQDWyjkMVw9JJm9v3AG6yYaXWtaMmEJapDBhu1",
  "key6": "VoRGvpnxH3FUhZrgd9HG3UMVUUqafkREFf82hTHrRU8E1QWGFoV1i6NRnEMUZHWP3VZFbdNgQ7SKsua3XRfKVAy",
  "key7": "25j9c9jjrMk5EqJPa88htph5q4nJYyDorXFQ7K66NNEZeRaL6hnPdGpnaCVRjcznYY4GFsKLEkg1A8LnNw4dQmFu",
  "key8": "5gdF1RwFhavKkfCCsJ1jDhAzUVmTgwBk74o7X16ynY4nJT7v8NatqtnUkobGqVuq4iMJhika5bJ3MpCYaAwCcWr7",
  "key9": "4iCX9DryEWhkPMgrPZJ9M5gPMVwPjhd4t2k1Z9NakEcjxNf2k9dEqxPtngsZe1NeYyFJZFgtAkn3q8Gi3Tx9BdFK",
  "key10": "48VE1zSVNJAwFDUDog8adPqu4qwNLjKbHfbSb1jsmx3pZ4LhWPn3W8K9Cky7fo8sG5tcrdvuD5sDvaR81D7kC5E7",
  "key11": "45yymz6oqL26VUCbfRwpjA7K5DXjLMX26KFJscKaMZaCaufbmWyTQrKsLyN1UHByNn1WTY87CMfJ9HFA4ikFC7J9",
  "key12": "4Wv3px7w8DTHzwFduEmJh7rQRSnCruGjWAfZTmnhEPdnw88sdtVhn6Y9LoiNJS7W3fiyEUmVgKUzhJAE797ybsz8",
  "key13": "4K2MAQvtbUUj9SZd3nz6qGwTEZaukhYBGPyLN6ifJ4i4HSMk25jvZsheJFrJKipfABfkDY7bEKoncUuakSbT8nEt",
  "key14": "5GuPSjYNfXpEns9qJEWzLs8Dz8ueqy5Nv33wXYdyBjAT5pwHg2N1nSDCJC4G2NjMWJkDPn1bsRy6RHc314YPXaB",
  "key15": "3WnpeoZm5xVEyWRFzNWyXTpv51RWMe3RRJ1nBShhCRw82PUbkJL7u8GHC7GVmPDd57zUkMSAND6nBDUtbU6eAKUA",
  "key16": "3BhcEsVEWHxnY7WEkNTFjkoJYEPCqt5PxEm3ttjwGzTXgFqN29oXFj7MadJ3GjjAjmnDSZPhruD6voLKDDdXohXZ",
  "key17": "3MVgGpBDSB7h9YBtGk9VpXzn4zBocrtGmefFVpCVKrmPB1UtakeTCoSvgRZS4UWmdjtuu1vr9qjrCWinzFzSRMBL",
  "key18": "4b8xKSVnJw56drZG976KEbYHffDwYAnZpbw7J6QRUZPyQDnJRrahwH2FRGMrASiK3WXpmtseLufMGz71mSnGqDTV",
  "key19": "2QJAAJMzMsqQfbNgbvp9zTeE5LnhtQjVQ1dkikYAzxNo8ZMKL1gFauCgsDyirJuA5R2iiQa9gebWjL5P7iDHw1sK",
  "key20": "5PS97WYRmmXc8CKRUNaM3GnzBo238jqVX4Vbbo56DtEU6D7vTCcVipHRjoi8J8BztkEwmBohAdjDRqTSDzR6qQ2R",
  "key21": "2FzKCqbThmHSDEP4m4BBkMWMY6bNwufnuc653LpSMeSx3LRaL1upP3awG9xb8zPEe2vEmkgF5Fg3eWgPmu26p8kq",
  "key22": "31i9f7EH3nrJ6iE88QWa7wiwxq7gPFiEwwvrAqhWzkwyEyAAC9kZi8NDQTkGj93EkeYUw4prSfVbdgHmk4B2aUaG",
  "key23": "5Z1FxX4v9c3mG5d8N4pfx63dvrihG3ijkuAVTnxYLCg1Kgz6caSN2JRNQGzbtp9aC5LzPu4eYfzQjiP2mjhr2Z3A",
  "key24": "3pkVZANuhNoEa5KSiXH2yAoUz8DLDghgLmnS4cwAGYREjB2mnaJ8x4FKY2hvWTKKjdJbfoey6pppVqJtEtxkLfMv",
  "key25": "2dhwRrMPb1X26gT4PcxfiSAQGANPUJtS5cKw6s1ZNTFAFkm8gm8nSwhPFuEKgyvQVksGs5smkacKnM78urD6xBui",
  "key26": "4sPjEXEdEgLZnywmvv28YLnFinmfXU3a83H9LBwPXCcyvMrBaw5ToJvHKYBXtUazgvoT67DemS2z7WKaX8A6YeqY",
  "key27": "4b37BAeuw2sYDvfq921S1utfPgzVNgprbmZY3gdxh2AcArj8mJ37GN5NmrAvaBfjfYpt2esDDNVU2TNCJVnicvMd",
  "key28": "5qLg1ELy6cXdE9ocWngKurVWP8Z3XCrdy4tzi5ke1dMWfhjddTE2E3NmwpwxbZsY3dQq1etW5sA4sxLSVd9vrruE",
  "key29": "2MuocvfdqLJrUcKgW9kriLQyagFikBgPB3TCzkva9HcxKDnv5NbZcgz2VdFvgdtH64zU5KqS8LX8h8gMMZ97dZG",
  "key30": "3pXYy3p4kXwVtmA4wKFze1vKkbwfS2eHc9xajaF74DrhYcXH3m5gVeXqb3B8AkC1k8M8jCAcg6rN1vztTREYjyDG",
  "key31": "54bbn6eFKZwmw7xybovYDbppjpekjyjoWXUcU4ctzTPDrC2fuBEHvM11q95CeE981gwLX2DXrTbYkXzZodw4kC1Y",
  "key32": "4fuK4AmwQpc3AA8G7Nf87QK9mqedQJ4dFoGenUJtoDXJbe1wX5tCHvkTZEJZtDYnNuDh4kUiiPwZv1KuQrLVXrDp",
  "key33": "5XAXyDk2BYHf1ybaPQPGPyD4AmujBVfVJhRsyTXmYUB193hNgFJL6fGjNrYL9k3ENpXdFHjrNYBfcU6VzgyX3fen",
  "key34": "25iGBigF3whibUY6YKbuHgheTQKbJkPj7iwUTFPq8iBa3zTiSofD47YryUxZCWSNQDHSoy9h3fmoJA2wGjPaHjXS",
  "key35": "4Hyur91uiJpe8zuBRYjzeisZniaqzeULwdmNp9j75C5TAqLv5ciQyQsA4T2w5V7a2g2zuRDJgktZiQZC5246hDfX",
  "key36": "2uFEB8dW5WbyN1zyQowNdS3UKhtq6a2LwcsnShninbi5Z5FuFYS2Uc2QczrNxgTg7iQfzS17rtPMCXggNsSeDWyV",
  "key37": "5tcMtCBtJTJiK2vvKb61uT8AQUDtaSzU5QbBgFS6e89wizCCUYxxq8aRRb95AXnjZBgtXzYfdwXXtbt2FpPTMia",
  "key38": "2ENexrnigqryp4qDdXjCuNLgXSMRcRkZopu2n9oycCieB1iYuR8LQGtTyygTb1G9FjJoSrrBHMXmRBL8Mh2A1RB7",
  "key39": "s4E9HjkoqmWtYkbqrcrZYZHKwrc9tNCtbF4ofj71goNRKh1piqdc9pwKFMTi3umeP8Qm2M3j95znzyYwZ5z3crN",
  "key40": "4gmaAYTxVUgyBAXj98uAuDKx6CgBFA5tmEU3eZ6nr2gs8zA3TB8EAoGATMeU1FQywwcHGZYkjgjGQA38msqGm3hg",
  "key41": "4zgyBW5sWwrEfkGMpwDyUNFfCLMqsD4T8BUZMnKii3aPVivc8cMN6A5c1mjPUfepzGzzX8y8WiRNpCTL8Wd4Bpnx"
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
