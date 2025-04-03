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
    "Ykp2Wng1wNWJv2p9KnS1DVRp7WuxPQxJCczcTys6ZCss1LUcqXjg49kmgMDF99b38638bhGYzeEy33Sab7KZBGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3aTdsymZT7q9JbYp3jnL5Wt9dxqYd2T1Q8AvDAGP6QwZJQL6VdvwSmY6ETi4VpPhvqJB4eXQNcftew9i5mbgnb",
  "key1": "33ox2QF7i9EUPfWJrCTU24VSqAhrW6iDE9eGZije1MCFQ7mewx7HiFPMyYgFRk4iH7ukK46sjjxUdiYsCajbYZfM",
  "key2": "3r71cx2BTAgaXumsg2uFaV5JyurFdsHsSw816m2FS5USZVmwJoYTKvDj5CjWY3cJEEjnaoX25aGCA4s7PSJv2mML",
  "key3": "21Rn6hCHnmHdydJ1SsWNrmNYHGhG8gUTboXDGZuQoJM2786u4SYQPkUJcydoETjrNcTF2Lu7t6c5zzYJgnsrugbe",
  "key4": "4PkUsHMh3gachMkLKiQqXfxdF6XW2YszP1gSfgxUNqpRAqR4QeKBuubnErd8LUBm5SbuPXr8qpv93QczvEsLjJ6b",
  "key5": "3dex81Fcbe9dqMtVGfesDmeeZthRu8RFRaMeyKX3n1gZuTPbLokh8EtzQ8wbhsvaU7oaZu8xdkC4drf4z5kR7pev",
  "key6": "2fgxkkaqZvrp5cjTZfYBzoATHx46KWzpt5FCea9EcTRRdY7ie337Xaynj6iTRtUJ5AU7GTWtVfbW1xBdDHUMXWxE",
  "key7": "3nrE9EWaHtHNJfGvzrxF9FrGYx9bwPqXw6yNwF4893wXyvSNGvouRtPEVJ4ArbnHUPz1gtFCB2wtknjTvADcLYyP",
  "key8": "4JAK6HQn3qf1Rt7mFgAkmazGyq4bntp9phAwbzS7dsHfY8pFF3h7mVnePQ9RwWwFUokD2J1CUSnK83sWFCgv77SV",
  "key9": "3RTBp2iEAEL1Hn6WnKKceo4F8Nur5sgyn1XGJZpKiMJCLNaJsqxeDXFYgM7TfCiSrvYPTbjwXpzd2kJQKqhTWiWY",
  "key10": "32iGF5zK1CKPHjF1u3qtfpJCvV3MhbHpLXmntB1bKErAgvtgm1XAdbYd2AjPHNnRNFyfBJ4qZDXSCLv6DvpBzLgn",
  "key11": "5DGJa9NtAT1SsTKmAZZ81tGUbpHb7q2qLdxzZXUg9h4enxp8BLz9S84BmGZGXxgBBiiAe4PWpHR477YTxjjDFGmm",
  "key12": "5TdZbbxnW6fxcaaah52UWogg9d68q3hMHfQHmTebrn6tbASw3nu6qAoWRbeQn4YL4ibY3kWQdtvfj1Rn6Ncpm139",
  "key13": "5ffhL3CGfMCq7291YTevmYwTWfopQR7FmCxCXKURMA2Ng6wKTafGnGDX1ebZVqDrprX4hn6mvoDbz5MVmZYJg67A",
  "key14": "Np7wnizArcupbQVazpkLTyMiJgr7tD3JypBhWbWDFMSQBw9ckYGoxvj2BBjSuZs55Gxb88G21E1N8CtcrsVzFd7",
  "key15": "2XcMZ8cA6niiy7PKA9PycCXGbi5e7epUW4JrEopSF2BGzGAy4qBPhkpx9rkviRhgQUdUGX5LYtgUJLgGkwSFrqy",
  "key16": "4FNTQjJzhkRB8ibgxGTFVSXhHsnWxD27QX5Zbhj888RXZ1Xvkk7LRBBAVPcuU6aczc4dKyHCwEnuiMkZGuuDsnME",
  "key17": "383vEt1cs68PC8CSV4Uk9iMUFDDS5EvkBoTrPzNqQTDrgd6BsH3QSGegyZjbyP5VNzYQp2S8iYfzYFkEi1EEZqMe",
  "key18": "65tA3BnP2rmJh6pDnUvBqWxmMpD82eAzEEBTaC2SpV6ZgmT4DPYYYVdtwZjmeShd1DVpgF1qjBK6H3Lqqk5aESjJ",
  "key19": "36uBDiTMEv8zeMzKe8N7t1XFgNFGQ16fsbYwRErJ6sgBS6NDYmEp4DCkfFKW6aSfPq7cEkETX6biTWjNYJvaG7oY",
  "key20": "hjrUWNxeKd5Lfd6FgPrb6K9sTo9YgYq54aryskBjaq7CCTqNy9DkE7WjFbdfXHPWQ3jyB3ZXjNH1JBkL3quhQXk",
  "key21": "3dgudUvXib3GutXtXqVwbmfVuZJo3zafsi5GEz3ZFFS9A38ZmYxnyHJmGPCJXDNdqy4CEEBvnxZjeRVJFJN98DT1",
  "key22": "3EZ9WHqHWuRmRiPMbjCfknjuGWK11HuNPgJvmgFVUdqjjDpBu8zrcPoLVbuabZWthus9z9A55U8HHgAhWSvmQMJj",
  "key23": "41XZAa4nStJy3VGiqL1Kk7FBJku62CAWMzfvyuA2vLK3QYkaztD5prcxf93PVTvfpixKUbRdndUgX9fV6iuKytEv",
  "key24": "4kD7Ho3YmGXpBjFYK1mkRwwAkc3eX1SST1uUfHXG4k1eMZvUbNzafKPESs6JYkwCiuj7MadoGvLRRRzQdpKGmPov",
  "key25": "49mQ31fbhRur3z8nCq5wfnTX1NKfHzqMm4LU8xnQ4HDaLgzHFqKD7eGceJbfx35gPaLLvANyoSJ9GZN6hSzVbe5H",
  "key26": "5ZQBj12GsCdGKsuYBaPgAKJM4b89P12gTRLaKFDvUrCian2GwEZGhTB42vPfYAUB28vet2empVTfYgGKSJRtbm3j",
  "key27": "Dx7HQADKVrj3qAPxSvkeit24nbR9UaveB2PxmWxjQEpFsu5QdcWamGiQCct2kn2wtyEQdvMtV6psbyNg3iDRMtV",
  "key28": "2idtNV4RB5jdE9h4BeQF45xZyvi5Fo97V78kZfmem5bQLS4ZK8shx3ZUygnKAHdctDh46vyXwoLLtJthZ5E3hXnh",
  "key29": "5kjMmcvMgswYVJwaDQhwggcmtE6hqiz9eE5wJEauH9t8NgLUWyqD5DspWQ5rAhjBMqRCdAorjot2yEmZLS9caQUh",
  "key30": "3ruG1CCZskdo9guPgW6Xfo6g6TyeXF6TKyWqSxuNnMtgEwXJnszAmzP1nL1JfJJmUbV8KtfiipESJoP3eDJDuXL2",
  "key31": "4SWMV6TqU3aVgLwkcPJBkVRafdcCPaDX8V64ruzeZz9emC3woGFjJnm3DS2632VqWm9qJNuAEyN7ot1kZ4psRvsR",
  "key32": "3UdTzALWLuJusJHCAoE9VXiYitzsonpLUkMLrNq8ZmMvfD9Bwj85VrJRiF5rPz27UMEpSG5Bnh7xeozhmyYSkCPL",
  "key33": "u7gve5zVHkju4PWHVZbM7ydDaX8Cz3sxNg2GT1s6fY4U76z99eWHSusutYYEuESUektbGJJEegVYr9a77rK4SZ2",
  "key34": "5oNcKj2QRCkcKjnXZkFn9fMBgE4YKhHvWf7t7PQ4Mpbc1oGC3ccQZ5SUaqvpqug5eBFGzakdEoZJuoj8wPXGYPj8",
  "key35": "2q3yXE1nz38EiDtvr55J1qqdHk7EM8Q8odZKesLn9iX55YjEikxBqU4zy1o2z6kgZaMvhfmEnaFAk1xQcfuDNJ1c",
  "key36": "4o3UnyE5WSsq2ccnLgcSppSwtDVuPbKg8BznvYRFgwPmZsv8ZL9YP2vXo3dRyeUUJo5N66BK1fuZPnr3mrzqQ2Yz",
  "key37": "gv1pjWoN24hyNDMqZuAkakx1Wv5pJ1p6PrkD6MoeztsTPBaSY6ZpPshnuQ1MGsD8v2d2iqXBtb5nQAuzrHt1SPh",
  "key38": "4Pu36uCUU2TgrRWy3uJNW6yXuihkBduvZ5v1rj7kC7r2fefrpP7AynSvaQBxEuP7zLQ6ZrzSsKvMQtQtEXfLSJkY",
  "key39": "SVE1RMfcapgwXk5B2RNTXoJsh2YB1sFkwpDqXjDgGBJkoAN33osbmKD42PUAHPCiWeMhKYNoruidheLgYtwYCc9",
  "key40": "33sA5sFf9BbQZepgfi2QYC64HmpMjwUqU7rDNiLcKdSy1GDWaFgGhUA5WpB2JvZPJRtZdW5oCK1bAodKHKhaBhNy",
  "key41": "5oQKYB7xRNiSj6kuMqfkVNKFjKuMTfZsxBKWReXARqzMgWcLL8qJyMv4sb3drex3dHpa35TMtCfKAcx6CZtBhHFS"
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
