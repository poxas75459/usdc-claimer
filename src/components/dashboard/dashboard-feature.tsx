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
    "3h4p6GVZN1viLBTTVYAmuvJNs81h7yxAaR3jgfxDu977HryGDkrz13xzaFRfzMYUAeyvUpaqEE19U6PufnPZwT1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEvemEBAgh5U1v8NojYeVzdQbfbqYQC6dCuG6Ro3NAJcoyzaP5JkcADxLnFonMbfaUqx9jA2iXn54AiVMdxjEhz",
  "key1": "4BCNQLt7e2bxLcsqrNmRojwQhgLLsWpAyvv9u9LrpsL2aGGCxJpYgC3MSAW9Yq3jRveZNAZeVXt2a7hXnW79332A",
  "key2": "2Tv5m83xH7ZDPxPiE7zqaBcr1HcU9Wpiq61d8tr6MtdA9Xvv7oT8LbgtVJXEYUvQNPmLdz7uahF4aMrfZFABTxeq",
  "key3": "5Rm5Fae52Ea3GyqYXzpR5nWqdunP9UHme46mHUWBFRG6T4zNA1oMJr6U4Wj8XTV6BtmomQhWnvQHVPVqHvg4nGjy",
  "key4": "5aU4rbeNMRPamBAUJeRoMA6JBDBD3tGYsSfHywMWk5Z9X3TseoGzfkQokWp9avfuFVNLFe8veMYsWq5TWerJkBWr",
  "key5": "2b6wQ4kL3ELYjHYRULECbzkmpA3HWSxefuxPPNigL6WYsJzmPntXAi6pF8xPi1q3V8MQYFJ2bE5S5APRn2bpoh5p",
  "key6": "4e5W7VXweJyXm3YSEgt1wSZ5bWu7QNpmKi8btFKmUZSt28mhJmnCjnpgA2SmbMFxL5cVPaK4x6LgcCKGaKmwNBNP",
  "key7": "5VpDCM5AHGDxcKHVQHGBSySHYGP1ZMt7EHr7Mv2iqPYebfG2CqFZXkSvGEC5BHZBdCPGus3hvSE8mSCpnZDvF3g7",
  "key8": "25kx4PmRH7tmJVS189GM2ALeXzdKFDVoHWdEpD78yXHyFgu4oG1BHoYjyuFptrprmb21tmBLkz7VDF6KPJU3HFZj",
  "key9": "4bA5bb5KXHDPSzPhmSdf9pegvaZQYC1yYQa2Zfv8RwWKPRjRUA4jFVrgRT4NzqrrihwazXBPio4aRhnXkqobfcps",
  "key10": "2Nq1hpt9bxXuwCEtKBPySs7DQkky7rb8Qe7YfEekzmSxUUjEQYoYAxeGxmVGjzkxmnKGbDMkSMMXjh9aLwB1czTv",
  "key11": "3Wthyp3NzeSV7k1Y3zf5FLsyt44tSXG7La5MW6JHcgt7Jz1f2vdyW2kq4RCsuERviRLQJAfRLSY3AYo267NJ8GUT",
  "key12": "3armFqS3gLBHugwNyUBieAp1Vy4UBywbyNbcbNctLCsWLaoBZgGAC1xEkbjbf51qwNfFQNM3AGh1muknfwwZ4aEG",
  "key13": "4ADexVakwxAARzAte3WBbYetS9k6SsACkBxc5zNKyLhQs5jZCaETJPTdJ8RLUiW3NgSzPqjxKzUc3yoTu2JepFQy",
  "key14": "WHWqkTKJBviGDjnMLxMsCXRGiGiqKo68H7GtpChFH91pc98s5C27R5jmTM4ksBJLnqvJ25rr6JZWPALTcDPkXyb",
  "key15": "5vttyRacUhWXJ87BmarLCUPa1Cy4DsCPnGd1MJxPtpg9w5NpkCTK9aRc1bCXDfVZGgaykTMkSaSN7wSTHAR5Bg2h",
  "key16": "3wXdz2kocckj32z5KtWyKAVhdpf6Q1LVbTJ97PDsk7cbcXKsNqY1NvQ4gAMqrhUTxW66vjZNmd5oSscb9RY8dvFZ",
  "key17": "2C5dypFxu9cigfLwFHVSXLwKm2zLhjxRcG3XDRoP6sjePeF1mt112Y3wTENd7aLTFr6jzH1mxtcEC2vUWBchGzyz",
  "key18": "2svDDWT4mqsqaErVrXKciBoGJVw5zp5AAqqUJxBr5LRCZVv86yGLppojjqjxXpwFEB8fv1nr8nYMmWR7qW1yLDJP",
  "key19": "sWztcaU9xL6dRKBn2QQAigro7LGJ7ZGED9F82zvc1hbXo32gnoF4ZX1y9ebD57kEFJJHPVZfrUzoQXphSDDkJJ2",
  "key20": "5hFu4h1bLsnazqRhkxvjFYwwMLvGtsVRSKSAExtGKU4LwKW9V1H7pZNeSoRpJtcDXQEzBkuiqF55jjRsHsuiiwtH",
  "key21": "2mHbbt5GbhHTKKKWq1oYTiuk8X2CSsBvD9MJ89zWKr5y451YMWFndjfincmtAgTx8hAtmrssMnZDmyHJurXyEoTj",
  "key22": "62HHjwdCfryZgzFoK9TZYq1UZ25np8dU2TZfhQMf1C8WkC269EYdwVHQL8Esz9qmzt3w5iAAGS2Zzi8SCHYwaba4",
  "key23": "2Ui4MtkLT6r3i1C8Hgx5Q5Ee8oE6kqbWPseD9duqk5uSASBzaB5Z8ipwrj1jBkRKdizUFDapThh4wtC6MPiR1aJ5",
  "key24": "4aNAFQUPFGgiivH5dr1sd9VykaQuNJPz8x3Y2H5Ch7iPKLAqGjzVnfkcgzr8xDULeBLNT2heoHM64pT4UKcxinJY",
  "key25": "4XcUX9X5MAomKrkJ54WzvrsFP9x8M56Sfhb5B9A9oXTBcHAtN87oCbnkNNTCXVon6LVjpKk8JJDwc26NTcDVMg1Q",
  "key26": "3beUsaAV3cRvSygA2DZjLjaL8A8vbvXyzDqW6yrQJq5dvdaneX1XipVtAzDUdYsU2C3GB27foT965FVVwZzgYBa4",
  "key27": "44AKHosS7FZ9SijLfd24csXVgzxH9sUSYo43pe6YSvigfF4yNZ1bFw55Mf3zTBYPFV2nfPPQuTcpkhgxzwd9Fwo1",
  "key28": "43qfk1qCdQgubC6jtXfyBNuwSupssckHDEdMs66fxcdepJhHcTVTiQZtxKhzasK9r5A9yBLvMog6RmRZKA3SCtaX",
  "key29": "4AwW7RCTreGkcRJe6DsC1jFzKfX8oG5pQS6xL7NWJDHcCpzUAcTUbtNZGn8WSRUV5RSV25kmEAGpWz13DdGULTQ3",
  "key30": "2gu1MWT2KaokM5uu7YZTp7mddkj4TFeB1cHefToXjLEyYLeX88DxjstHiyBYKtpZFczN1Z2mo7m5J7pUmxuA8Dsb",
  "key31": "4iXSFZPBZWaL7YxEfXcZKsNyJsBYDKmfgqKxJevg4VgdRSH2KVZ7axkfRZTRrnqUXp247XoxenLmCMDY8gfCYWgb"
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
