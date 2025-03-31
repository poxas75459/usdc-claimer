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
    "3yRexSY4dascuPUxp1ougrboDEuFFn4HyihThn9afT57LyeqXvtQT23EWuveSmxbGN2rTgFJnoXzVWNSsacEXpEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48uWkif22HYLKugWZv61upho6XB6nJy4pDVSRTXLGNGkGQ13eYYzHgesRvjDRMYhp4Go482FL29J8Ze6aTJsc5Y5",
  "key1": "23ZAN9U23ptVuBWFn7ggtk7zB2eCN5ertiQm35krzAyugw4PwcokyGbvZH1kc3Vjkt5BgKJ8QsQccU1Af7tnva7P",
  "key2": "2es3SGuGsCfhwvYqWktNHDniMQJQNXbnJ143xgmvx6db19bnU5ayZ21bmaBXPt5RpVXrtBNhZu29MfcmdAyZMJH6",
  "key3": "Kb1LVo2WfZEEv4vwM2BAFo5V8kAuPs8fvjC9YQW9RMmcNC8Vj5c3vZ83Ay8RCgDjjpHHPZkWa5tEZ9BcHcc7ZUo",
  "key4": "5pvRuErmB24yVRz6N1nZ92AqP9yeaVRX2Et1FezSStfn39iuA8KW1trjCbGpxgRppsEggmWFyHHrovzuMnfg21my",
  "key5": "58E96QGAsNuaE64YdcwTKZSs5rxvTA3jHKx9Zu534kovwADUWLEcFoFjF4xLobJZKRCg8mreYbP7yDCiSqX7UtyZ",
  "key6": "LAN2KJdfzseVotjvzucn3X445sSTLpYsReCDrsxR74U6tvn2TwVTxWejNjSBr4Z4kst4fyJupJx61sZ7H9e274x",
  "key7": "5ueXCSnFoqCfQZSqfVPEmDfdiQPVaJoYRH9ZkKuZtmAxJ9VEt7zVQsE2fzEe7KuheEiLRmFtrUxa6nAV3uyMEBne",
  "key8": "5wGkBwMYXzE4ZV1iMAWBa5nCECWBjPdMLTFoR53TSamNvGg7KpZFUEXKbj2W9yz5iVmfEDsULGQdDDCczVXg4Rp6",
  "key9": "2AASHPQsifThCAve5Bfa1sy72GmFXTrhEtT5vMmYqYmoXxNkjuqCdo2b3WadFZWQZf7NdRJEUGsZzeTBVxVcXhm8",
  "key10": "vfMocMG3XUdrJCxVZf2YaL3T5izFNTtLu5FnMXxf7SxKXciUFtbyJzuZjBtYhCerwLvJoe9kYK5i5WtL7PAQqSb",
  "key11": "5AisjLSuQ7HArEg92qGReyiwJQir28SC11keyc8cvqQeaTZMnqSK3qbThhRGt4AbvGtYEcXhxnhWsBFnkcYEa5w5",
  "key12": "5QD52YnMkoeH7QL9SKt9KAcUSANQ1uYHhtpWTnELCACp1Xwnwgm9F5sSBUBgELxNUMK3vbY6LTGG1CV17yioqj8p",
  "key13": "5mKbaXHZb3rTdEoT6VW2EnkokCUdSkJBkvZ4tUhp2prXQz6JhZD9sfvFC9CPsATNCvDWYHGq4CjY1xWH21JKH4aa",
  "key14": "4iYCTWgkciwQdyd1GFy49J9qcP1mezfgdPNJw8rRr77ATwfECUYgLZf94dDrjED3319dGH4vQQDfJFHGnvBm8nHk",
  "key15": "3x5JYd7udKz46ng3hMAhGT96skSDXgHxfcJuyK3owsvXk7394c1i6DyzwZYRxGhbKh2bmqVarW4CyMqB1bBmNVc6",
  "key16": "21UYYkfdAbixnhvdZkd1c27dEScBaFEPq747tCWiq9mD5uvrUHLoFpy3uMpGH52gm7Bc3jyEnL6yvDJGckJXng25",
  "key17": "4rfDspyV3jmeyd6hcFSQx4zjQL4yHEvsJtRUntSBEXSQkfDemfmuZmiV869H6K6RcvczDKdV8cKSB3T8bikCHqvT",
  "key18": "vDVZWxev9BHLZELaQrGTCe5Z4zv756jv4Tih7TuaUDnNUE6Rd6tt6fgfXjbp5kL3rgzDZC1QznFSZVyPqYhHfWe",
  "key19": "4kGcz4PmiVR1ywWERngGv5GbAqKvUBsv8DZHuC7cEwuBHCbnLLokHpxFUsc9BcQJnYcxWZuAkhw5Ww2ayCMUeyXJ",
  "key20": "3ZLh2QGnXwt8QbXLUchmCuBePXV3GY57xQ3NnoZQHfrb1Fi5nitE6DXts23tCK5KswREZG5rYypNGTjh1DXZ6xKY",
  "key21": "5C4Aar9mGFHDw8Msn3S1HcRKxuWwpcw7psUXybRQafR1rteV6JWpJWeT2hafbNMZKHXrXVubXp4qVeK2xqH4ZPTY",
  "key22": "5FMVB4RTmb3pg1cGNxefVttbg2L7AZQCGa9uvuZGnaVkdmsxp3psTeQ62EU3vVu9eDWYakue5JRDHwRKZSzgf3jZ",
  "key23": "2XzR8beyiaQWPNwpBDnEgf6Wm4btampDnF5ucWC2tsBcfimKh4LXyVr7fuc7bFEdHCp5Z2rF6UrgiAN9WLq6JybY",
  "key24": "3XEokd4ydqqmg5N2AsNxzVHqfjhVmHpg43hcBnxhdgAqeaLr4NCp9iSDxR3jQtG9FR1rAU3tEjkwK79uqLrzkq1U",
  "key25": "5S3dFSBB6VaVNRcqzWbof4RW7PyryXEdjUg3ciEonYrVhLvkEB8J9ZGXw2gvAcinRjZmbeQwHm5aAmRQk5CMWrya",
  "key26": "KUJ3FWJXXFbBigVjCGL8u4Y41es92mwg297WLG7NAsRL4mkpe5aaKFuUfQQhTjmGD8SDmYBQPEWT9iyQr8EBeoG",
  "key27": "32vi3azD7cwf4EHhJdMx1XWGjUbStb2QQ5Aj7wQ4BAsSQbz7PG3H21kZEcAnh9EQBK85jeN5eAfefEP1L1NNjGEX",
  "key28": "3DDKPhKDCv7LtdPcAL4ez4fiwD8n3TExVSrrcKounHU9UwZAjNTzoZJU8UkCDFNhC6o4uK1XpGnvSJgGpXX17Jeh",
  "key29": "3AWutRA3oMmQVNfRR2c3m1yx5nPEfgHYM3hCXyhGSEdynm871G4b9MBiwzwZRRSGsuC3rJw5ZQmASSzRuWV55x5q",
  "key30": "2VwdoJX7PBnW7yWLUnCUDua9PPVShyyw5t3odT2bW1yuio6jAqVCCbR1apdwu4pGSb8o9Km66gq3QYoc6vp2tnvW",
  "key31": "5w8H74iePb4YdhbLv3wGed4VvLYia1rkcfc1VtfNM87cGE9MuHvyFEaKhf2a2xN6nT3gL8Knhnca5ggUJKUxvruM",
  "key32": "66KXQZbnCKuSnPeZTUjjsu62xUzDu56igRHpe3vUK5adMW75WdgXRCWWQCLHLZmbELdCAJf1cx3yU6qzuYbVmiq"
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
