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
    "63dAyKuj9FeBRFqwpyVqNatM9eJyYCuPJtv6K1CYpQiSp3gtuTyRRsmxDCL4VUTshzXUnv1toG5CmoxoX9aA469g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nMUFok4rBRibqp2XQDMcekbheFD5PGpfNLMT9h1gNSkRvauDqKifnwMmDR1iY7dhYzMD4QXZRFDdu3A59T7WzR6",
  "key1": "tQ7sWd9EbDqxDJ9CBzmZwFk31fRYTRy2bUkkQ1ozqDqB1uKLy9MWd4kSZWQqVbtACn52eHJb9goxNc9E7Dc5xWJ",
  "key2": "3v7h1PatkJ8xJfiLNWny9HFnzQSmUAbCCNqz89b8b8MV32NynmMsRWBcd6KJUH17vwWKTCayEDeaQwmeEch9SXdZ",
  "key3": "5hRk61Af489uFCZcNJxcPXsAXcVQtGkZq2dGdqWBoHrz9YwD5jXhMKizMnzL26h3d5zxuA6cFWDPHrUW3xavWUuM",
  "key4": "4pNRPXPNzMc9ekWNCjVZWgqPDpihymWVww1VfxaGaoqum6tkWK94WXPN9jCRt8HGFpHE4Am2vdKJQVu9kojsTUPf",
  "key5": "5pDdfn8vhRhBKEppzEzArmrnLPNPAm3wdujdyLB48vohwHEA6WrWrXoTSbZJqButVHrZXqjP4d7gGmPHjdHhHRru",
  "key6": "4bFcvBS8DVGEDHci5KyVB5KN7xoVf7nttE8Py4dD4o9XMvUQPVXr36Q7m3xXc6qJMSS5cdNwrWKX4a4cy4E1w7Qt",
  "key7": "vhy1FTsGgK9UptSEYCaVmMuVVPcv7RGhEYHwtF6pqmnUazf8da1mG3exiUcd5s4wnsqFUtGjpmdqfKiSYJ1vm8m",
  "key8": "5fNFqQedCBiTGKqFqY5GZeGgBURDxGvXpy491mTgCb6CNmck5UH3VssdNYRG82t1eRUMY1LfMLKS7xHtxrgLXbCb",
  "key9": "3mLRn2kTPDYypRb6tfc6FvUTNXagwNaQ6FaDqht55AWMXVPU1scpLLvQXdUjNdhynyXb5WbS6Akr9n54hPfctyi",
  "key10": "iGEjSbMhQDpYAtRVntjKyvQsJ46fwsTgw3eiMX4mhuYm68ycKzoMS2eronyfTejVZwdX7UVqd5cKcUupKPgv94U",
  "key11": "3vtYAQ7RAjPeFjV1aHxtTZk8Df9BzTjCBYTdF5CAxKEmfoVrRGG3MbfYTuh9jfTnTT2wKobC43sXcaA9ycixESpV",
  "key12": "5QRY9gEJaf3rx8asH3phrEVG9KstGqW7AVUtBAnJFAxTpdq2uyJ9zEFKPVkkkDkt9hSjy5TXwZGVUh4dLs12gN8U",
  "key13": "2NGSdcRp6yrdCvLi6x5HjsSF4zPH3d7Uq1NF9dzTcotDXWVj3AXtkbDx76MeAMttPEZC44aSfW5ZitFX4ygcUJr",
  "key14": "4pCsuuG9xtQtK6Y5sQoCvTnWJ9Kxud3tDSK9N6AmLZH74ggre3i5BrqqhJX8zX1TztEtiYU72EUhxQpFNmVmRBR8",
  "key15": "4vqYbnRjMAh5iFXBP2shRQmwkDbS23KLASMVHcGi4n3uBTpUwMAzvhQJAPYX5hUd5CFTW6VSbSpu6ccnQ9Aytz67",
  "key16": "2ZJ4mmBsp4SKpdfRKJVwt8A8vnNvPsXJBm5bAUFegTJLLPNzzk8drktvvAFRXmEfj6MqZQEQKRkJRg4Fct1T8eQL",
  "key17": "3GPDnGctw3ncjD1EPrwLLoUcjtn2Qa9DLXJPjqkBtdLviKmqNh9RSSjGqqbFu53XVKG55RSPENHSLiAVrJPZVEY9",
  "key18": "58PMaGvu4aTHhCtwAsce3MwE65SbpvayS39tPtDUBaZ1j4jbLTL1UvBVjm2XBvexgtzgMCeaTawhGX8TKCy3j3L6",
  "key19": "22GDrG6aJC6Ztchkwm5WuA5NfmTLsSfg571bKPBJRKuk8wMMCCbbgWjhdVMx4DJ1qkSvDKoqhzayrU1vf7Qax7Gx",
  "key20": "EkJKWWEpLih2E5ZiAnH53592PrfqvXKQ4DJoo2eWcTQB9qCsU78jz7wfoec3ffaMhoR7D85VyQc8vcEBikS5Sb3",
  "key21": "39sAhnrdt8oMADVaXrxK5d8E95wzSyNQcdBCnggFY4JaKMW2Tr7zCYa7C9xuC3Vg4Xred9DZf8KJn4JvFifJLd7v",
  "key22": "YQA4ExGwGwd72cLeDmC5iA4yqGoVZZQcFfULGZrytZxYRYSGNPmuGnLiJpYLkYAmmyLo5Es1hMUqDRa2eg9NY9B",
  "key23": "5NyhPQE9HaaYSNo4trrvXpmkHX6QSkk8yvQzAovLvfnmhJY57H44rLKg3kEBcqE39u8cxcQtEBWf47RLy4V8CkSN",
  "key24": "5UsvrvqX9EunMm5vGHYUhJbEWJQFivMpxzcCmhApQRqiNaRr37deJyfXriJF7aEP4UDh3FcsrjC1uEJFAX7U9Vi4",
  "key25": "5YDZ1psCKn3Q7hS97vXu5EFvLa94Aqbb6cTwTETugamggHN7PQeGVpT4DZFdgBiUETic3nBqjXK36FnaRWu968Jv",
  "key26": "5QhVtQNqEgzE66fTw5sRjFGt9VFhrYwkwp4kuT8QcMC9m7HWL2bgWmsSpoJUSEamFdB7fS72VpbhUxsKKnZyHa6z",
  "key27": "3hUvJcVfpC9We9VCXcwG4z8EpfoczX2tKPZnb7GwqTYWLMrDvDQs1EecGmc8xZ35jRPQBYFnsPPGzpPbPBPkGTFU",
  "key28": "2aN8EJjJAWqF7TwkDxTbq5mu3uEd8yKLyGM8GsTDNYrpUfCJdhM9N7thgQK1R4bzTPeMUViC9RYSFCHmeRTRQkLn",
  "key29": "G2Trbe1ucSqeX4CwcpJ8B8yJryZ9mmEwyibbVcNMACudsCSB6TVxDXFjUw3ZEWjLL7MFBxp5aoAZgtA57cnMTbU",
  "key30": "3Rj8MRfR4NjcnPTM1Z8qpdkecKi95fvn7JXa7rrS5C5Ae93iTL4QvBXXEVUnqUmpy7wuhmfg5S6aM2UJtvRvfeiJ",
  "key31": "23Kny9MUTgTVSmoXBEESXqBmKucssAYwWax6smg5yV7LnkaoSBJDXUT68Yhrx1S2XtEeznni144u9di33mAs8idZ",
  "key32": "2LscS6oZpW1eQKznrfkgQ7aeNkj3dixtbV9f3KaNRQRQ1UfrKUoRYWaMJeM1kpdCr5Kn2j8mj3vihu1ek991JaiF",
  "key33": "3NwJBkzTiABTciYGA5fk2sLn64ms3CY9fKJB3E4RZDCT6A98Bs9yLbFae7P7m9RcNAHn67WTrFvJmkVkDnLizYeR",
  "key34": "367w3RWqg2JafDohXaWxctQcYkxWfeUefMhJHN3nDaL1PGUkhsdLPLJ9C81YXDzgmJzTpAiE4ECcpgTriU46rLE3",
  "key35": "2su5Aqvcotp8Krbi4wCTvDufAGyKQCiC7Q1tpkmzpdmrZoszgwZmj4x3tBStkk6LesuFidst7rZQfPjEmM4U84FP",
  "key36": "27CV9qnJrKLBPaQLHgP44kgBYt5wcUdxqJXW99GTRbm3thVioQiz61QBGzeBU3J46u2u72EtKkP5ntnmc1AEUkMR",
  "key37": "3AkV2DpNg544a4M1ssnc58r1RLqbciEA8qeG3BykXMRPjV28Xse1FRfDVELSF4a87bQDEy9w7kFXaPmafyLyJsHc",
  "key38": "57TXhr2dRtaQgVcj6uGS2poT2PSBMwaLCwFGqutMBgcGUr1oBeasE36AmqhNgwdR3ComGD8M7PM3xM9FPyMhoKhU",
  "key39": "4XyPT6hsM5Azjs1Ebde8xaYV9ouZK277nVijwz3z6JWbuhXkztBt1WeqLkyBuSX6iijFP6hMSNfgMZrHvPgpjU6Y",
  "key40": "4d9dVaB7NPf8YRLwDUvsZQHf8n7H3Txkht1SRbB2kmkwADtMyrqTQ68zEw2T8bfkAZVjHGDV6fT2HRyo5YcbMBKZ",
  "key41": "4f4WzgXb8uLZ8QVwh7ADZ4ZzYngY64bo8YP1fXbBgpttCuGVY5MkescxQYMYzJwQv3PiYEN3rK4VqW6SAmBpiMP8"
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
