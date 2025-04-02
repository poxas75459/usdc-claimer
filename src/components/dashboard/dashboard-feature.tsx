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
    "5b1NArtcXTgGjJTZWGQU6waq8RdiRswsPqZBoBjsVzwch123yzasnGytmdUEeEPrLQFkDa594ygywv4o9KYRE62W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k89EMbFUnJrWx6YTe3RksQB7Utot4G1FasaGzyaHNPTGbJNfRPoKW25YQS8i5XQiGiWW6gZV5WPegGeCKPK1skJ",
  "key1": "4uo3s1cg7n5jdPavpGQ3mnw73BETb9wDyiv3g3aTpf8P7njAzmvSp11GwxZVby4QRVAT9xH7AKrWPuxUpL8oE29h",
  "key2": "5msgfewoM3MuJdctbv645Wyb78SvsLm2NZseE54Trs2fvu1vacBA4UusfcBAXPBcC8cX1Gt9GWuvfsWASd4aVBvH",
  "key3": "ByBASN44z7qsNdwKkVDNFGKUwY9N1NepeNA4xyVyJJtiHewpdivmxtmmtqGDyL7qAbDdZKxNnZQLNT7vCPs8UER",
  "key4": "WEkFQNZac1TD4hMngJJ3VeKks2My9mVfxNSsKqE8kwjze2oAEQiwaVtFKxzrRDZvLFKitAH2sVG75uGYLkN2pVY",
  "key5": "4R7SNdPuqKFercFx7GmoMYSE3ZYkDe5PxDfufvjxNMjBqg8FPxdMYggLjcZycQLBuP9v5WVWYFzLxoNYMJcQm1bb",
  "key6": "kbYivZNpuAvR45CZ6p1j5qxyDVzdELehhBeuF2PGFEM6GpsQXXNZ3vEnRZc2YyCUQ6ugWHdzfQcAMNRWDh6iZmV",
  "key7": "GS8fQXHqhkEoYHY6w9CHB4Vr1xqr428RsV5isVgD6j8FNR93ELeJ8vFaQMtBux8DkBjNTZUzeuHXgDf5gao4dUz",
  "key8": "4ousubMZMGnt2Vm5efYvW929FvgaxT8VrwERCHNsV5pDAGetkg2VMvhr6qYx9JMrRLStLKvWqhbnL8iTgvMLqZkk",
  "key9": "4dtBVeZHXKDCC9FnGYQYKXxXzPLEP8S7ock4w3Vmpiza8KoXfEpX6iKKhD77vb9Xh7E4e5Ln5R4MCwDAqEw33MAn",
  "key10": "4ZGgpE2vz8Ja1qFvGKg1KpdxaLsAgmFzB52RqBkYQAxcyJN6RheNdydLZzJVxdrP3g56jeW9iZTuQzr6fg3JsSgJ",
  "key11": "61wuqdvGp9xeniKbctDg46Sy1WGvRshVNLMNMqxogxcEZx5giyCAKpmTR86cTtzPFH7Kmokud3xByhB8qsR3Mzwt",
  "key12": "5DML9E9SUjQTtUAQka5BWmP8Gtt6LRjVrwDrkkEDf7UTiQbrNTHtdERLg1CiYU2zZGFF78dYkxRh2hH6z6fSs6ze",
  "key13": "3Pq1zA7UCJQJChhRq4v5WA9d7A1zP11Knn4Qdnz8UzoivfRyT67oN6RcuvhYqKf8uj9mG9nFNpupw3RXvxpCaDMn",
  "key14": "59bMfiiKGwskKxWo4oecMTHxGEYoSdohwmDhuAUEPLtWyTMRuNNPPeKCsK3s6mGp814AVxuZeH2MLhV38HMhmmZQ",
  "key15": "5jRUFa7FE58Zd6z9TdXJgvDm6pBtDr42U8cxzHCGtHCqVBfhxN4cuGjLFLpGLuU1i4cYNjuWCFm9hEndkLQkRFHg",
  "key16": "25ZxVVqMnZpLXFLCkYqwT3Nc3mwEX66RGPZ6XFez7J2DszLHDcH9sDy9GkM5yott3VF1CTKGhAe8mtnESAGo3tss",
  "key17": "2pQ7LWGgKeajQmfmQQgfm7pcXPgGxnCdTQ2ZxZ9Z4s1GNnDcr6LNaqjaUFD2xSnHJztYUqrv8uT6SXRHhTjhmmYH",
  "key18": "5Pjmu6MkBaQN8cbiPfATxqFNKMH9imm7TCP6NMScDwmyaJcWLrcCKfkvdpijxUjUtK4P3naJvbSyCa3a3nxJm5vh",
  "key19": "3dsnrFB1TJxks9sQ3o4g4X2DoJfFbDF3DeZTcCUXWi4ydNv7gfoH7qf5wvxjBypHC3eAeGEuw75dee9sZqqN6KWL",
  "key20": "2xHWLvbMy6ART2wgTz4Vf27cYNsViWFhRAK4Q8EbV3Ee4rZgy9zS5YjNL8HTzyPfvPNrqSidVbUKwGkWk84kqDuy",
  "key21": "3L9T1LGad28EANhMM7DoYHLy4Twr4JM2ELPq2C8BjtGzrCzREtoVG7c1Teo5bPDAbsYDSJyVnouRQ4xkEv9955Jb",
  "key22": "49YnbBVfH5WiLKyb4BmkJb41BdntrgK52amqTLZCBTGxq5UAnMH6rkzrsvAdkPqYCvh1ixFJNh9DeXsuFzTp15GV",
  "key23": "5WjzRoUvR6Y9wzhc33LWt7enG2kEmhPEgLFzggB5wBbVTezHea2Gxc65wswdxLcb6iYwGvE2gmyNF2De5yvQNdUH",
  "key24": "25MNaGR2Ep5mLwbLTnebDwAG3SwvYhWSsbRxRpJxcmc5rGmmCUVJmApKhAeaQ89kP7srofVbcgYzpqd4UGiiWGEz",
  "key25": "vSQx8hLgG6er1eS8CErvgRAsQU7qPE5sXj39ABwve3iGd7USrCDtrakBQedHLhWrzH3SkKHVjsXvNzt3tFS54fy",
  "key26": "5tXwezyGPYuugu372aaEMXy1EBcc8b1J9GiYo6cCALAq7sDxsV9zSpoecEnf5PTg7AZiZGZCvXXg2pW3zLxDnLHk",
  "key27": "5wM2DENHerBs56TuJheFE4JMLRbiHsMu7AYgdxz5feG2gm2sT1odUkBrXQR61TCWQ7bE81R6SMTFzZaUBxtmRCKo",
  "key28": "22D3ecmjKCWaJQvXDDnb1E8y7ATAAaroRXVShnX6BCay14a9ZmQd5bGm3KoaR6W9irsxhBNC41XFjJSsWDmahcvW",
  "key29": "5T2wvMSM73TB2GiYMapWpAWNQPVzoXFctUSPrD12mvibQxGrjbQcdD1HwfvP5Qq7MJEWqrMTm9Z42hYtepc77EeK",
  "key30": "4jB5BpxTQsNZyQqN6HSV856E7hjRn5CnPpsL6GWxMDwdq4GBj7ZdRe17wLgdK43UjtRRG67jJciSgE9r2PpYS72i",
  "key31": "EuKpZKLnKyeNAD2nKiJj7FoFVKgwrD8F8aExuwrzLDUZYtJMuKphS1xyQAK2J6PDz5Ev39eXGod4pMLvwBDkyyu",
  "key32": "3uSp4Zd447WQfu5KRpsQWVduTLshv9mJFCVuu4v5mcF3q8pqnNbTgXtfbUdHJ7eoK8f2vxmC4D4g2zBzhi1vDUfd",
  "key33": "UTaBDPC7CwRsnDdF8A2rwvxea6Ta6MC2GNiUiB2FQRBPHFpihA2g17yx5fjYTBH5DNkiP4VHNXLrEs87gWQt7cJ",
  "key34": "4aSWzTjmi3vg7rQso9tzGwZmPgMtbqufyByWmEnDnKmuLxBymVENPD9xKczMFiutNUiqzPW5fabk2P8Ja3WfH6U",
  "key35": "2X97oaPzYtRmmvTTGMdivUxAvWaYsJiR1h29DzroTxarBwrmuAaZMmFreHjDgz61NwgW1iJAfpDpGorq3EwYMLhy",
  "key36": "3cgzUqdZjhCxmLb9y95JcnYmLian4LtkduReNjdKp4KiVRW1jb6vM9VUqvz7ysuiz96ihvizY9ZvJdQwMYGUBw1A",
  "key37": "neEuKfR3qHq3RjJ6eUK2b6XP2tKv451Ya9WjkvAynddUBDaV6Bxc6qNteJxza13MyRWXT6CaFVRdwQGpQiRDeBW",
  "key38": "5y74NuxfRvCnJZ5vxkPKnkKLsjC2hUAcrz9wVCK3VVVz1TJuQp93kgSXGSvbjD3FMbL85orNvU4rnfM156h86gEr",
  "key39": "35adXiaNriS8LP6joKSrAZ72DU1SmmD6vjhV8jv2M49TQe5oEYQTbgF4tWH4nYiE1bRYvMPL7FMoAUkQ5jiEdGhq",
  "key40": "6MNceMJTT4T4MLUrqy4Z4CofGNfDbKTkWFU8Gj7z3DjdZimd1SVQwmW4CQQGi8YFSJV9mfqwxz7J5eb7tXcfXZi"
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
