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
    "JuNb61JiAGTNy9jR4AjKtugGRMignnmeMZ5SP2oXBZhzSFPJkjcvqkipt4KRpvHRBA3cQHVnpVFzCGSxhwJvy5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXfKGApcjXXyy2SAUAz36tmzhsCHiqbBMDxQEr1WXL763WyfNRU2wyL6EtH5JjuwzB1Lkn8yzUQXNoDqjCBqqpf",
  "key1": "5HR2Focj432wYemR83SNz9ZAKCNtijxnTT41HMQadGD8nr6m3vuMmKEdT789ahdudEmVtJaWuRGFyhDrq7HSLMtH",
  "key2": "Hncw3ju1ynAAotZCEaoXbeQoJ7L9FqvMsHFmzvpnbeR8am2BMfTpMctKZp6VzmDxLSpYTPjYBJe3imJUFFNjj7N",
  "key3": "3eHXc26wsxCUiweg46gLnPaQAy3g6L2mro1GajLh79jSmt1YLY75nBfU3VJeB7Vp6wbsvyJiGeyHTQwUZMSwBtY2",
  "key4": "5o16syR3DS1Bd94NjZczDZUZPNS6kYrF579Gua6J3EgwDC9Zn5H9J9xqjyuCAicaCdNDLiontLgcSsuLpfY2VM8p",
  "key5": "4KuZ2viBoLQDRhwQgYzWVhCSgFFzkjhKNjr5sFuzWpWAcEu5k6UjNAi5VMgaG4W4Xpp3tsRAC6nSyjXLzB5AbJzH",
  "key6": "vx8EV7SiZReibrCQDjK4TNG6q212zPS4vVco49fzF3H7UXPZUChuoZWJXFLHqyGvqUuomZTikKhCmb2jFN2HrGh",
  "key7": "4ifAsE7yFZ822aqdVkPwCDjS8iAMFtD5AbmXrpgvx3Q2XqYWi1EADoXcjRXX7WXV2UE7UVhQRmBDUmNph2xXqe3x",
  "key8": "57wbzJG31Q6uoJb6RFGs26vdKyTukjnvSDFVNZBaArSJcgySGV6rd5XbGA8W9iqx13tKaGWdnnaFLUkXd8y9zcfr",
  "key9": "2f6327nwAkswRYHSgFeMm3pWL9eZPfxofyCUMpEgfqGwVfL6DKanqGDR4ZgbdYoPFtnqzs9u9dm6DKQDbMjtr1n3",
  "key10": "4TRa28dVcZaaatyUMxzHiw6E5CANYxn8yg4BRxxyyHmUmAHheiNL2coEjPCxA8q7GrW2w2ZUaxgqyqvPdCUT51JR",
  "key11": "5rGUxgNdKCfpWQN7YySpeGyutAVDypEcjMTwViJoH3sXMSs9j3i1ZaBf72nvFjd2zqjf46z6vbSAFeggtCvtJmfj",
  "key12": "4DevSHB5TV8gEz6VccFCrNM1pkgCf8oMcqoJ533tSu4xxS4Ag8Zetix2Z6Rf7exPTANyMf4nN2xmXvaqEtvMveUd",
  "key13": "33Ror87f7e4JtL8WKfKtosrRFYLiJp7vdPfJspCT1cPsLamfnqDUBTAyQnZidZwRsXxd6xDL4dx9mxKZnwqMPrmz",
  "key14": "446zyhfYcESvHEeGhqdNy7P2fJpu5SMMi5EM8HiyujV6ZvjURE9zknfdANk3B1jSGNd84L9C99c1cBzECnyyRZFu",
  "key15": "jQYo8XoPMdpgWgxofBp5BG2t4Nkc3WwHBQFxq75qBhFB1LH8WbTVX6tPNMkn48UegFfhFysyZ2NrAsfV38Mhq4T",
  "key16": "3nFaLCFtVexYoGihHys7sF9CbfjHbsDcx8YGBDFE5J1Xj8YNN6ag8b4TiEwzVJrigCDDfYxJYPtZwJUj5564uLvz",
  "key17": "5BrqwENuMVAM9amSgK6C8RQxiZEXg3wd6ocS1S8p31m4xJJ5k9XUomXKdf5Lz9ZtQdBEQ6sZZDRxyigeqHTTLjnN",
  "key18": "iYQKs2i2xH21e1v4muSTWKubqoUTFzGVSNXQV68Qmrd9E13CweRHAeFJetKMektas5m1vr3QwnoCGfiDPXvtNDh",
  "key19": "5WiGQoCrUGqAZKzmRhwDQLMpEgSJDqYfwy1oVHXjAUwnZXjwkwhywRhv8xCAbt5Nd3J4NwiNBhBqJjqmQqKUDNjK",
  "key20": "5vdJJC7BUvC3J4b4ajUXWf73zEtKupb81GDjCaZyHtS1yby9CVWRBvQkKdTYBcwp1aG725ZYb8W8Q3TUKf6BZxF8",
  "key21": "319k4ukKjaZo77GgPNbTpkYLMPVkipX5qgTgNZ37Qm8EM7K7xaXXVHiFWZHXGMEQhXWPhnGwEg7ufe3UfRKfi5G3",
  "key22": "66PViqDJ6ktwyb1fUQ8xLyPi5BfKV41Pbauoi2Cg5Ahbv4U2puUiLucRkKfBY2EVZ52Lyp6xmQArcop21kQSvy3f",
  "key23": "5KaBaXX1oBKPnDBgNqGsYb8fVu8D1b9Fr67yKA73XSF7yGDkwmCmNpRSkeAUyTcZbvLCyDhUZyd4oRthpvQMMcuf",
  "key24": "3R8xUrpHP3BhYtfsUe6jUtjroyoKqRzwb33pL9eaFSgykL5KYg9ZQTcmSM4syjhMUoz47CTseyCpqtAGvxhKsGJF",
  "key25": "5SHTbs5xrZuwYxYTkCyX9pjn6VaKnJoS6ywWrb6XKS53qrXn4KA6GcCUThzPLYDh2D9uTMhVKSqW6iCHUX5x5NY",
  "key26": "2RXcxiiLsdoAsGVhUCYmms8d3MTFcQJ9cgsVVTfrcViFsYhvUmVmuFUSjAhoRK6eviJ24a6gFZg4d4K9bzaSs9Gc",
  "key27": "29d5FYRX44KJVQfAGjcCknvFNN5ts9S8tTYrnnw6cGCeGCWTmWKv7PADMpA161ZefaaFTvjfnvqmacu8HzmmzudG",
  "key28": "bKrQ96LinjgKn11WVihGv5pKpaBRqytd6ToqeCzcc26uP4Xoum1aQDC9Pi9vaZvwSLKK2eDCsRid3e3bMvg7yxi",
  "key29": "2khzAXYHLPgFQfMjko2r1LqkAEzQGFTbqTbuw6k4skDpx8DoHJ2NSKEFmm63y5WjftTZgf5wwXSyWs5sUUAMMn4f",
  "key30": "5x85LSNpBk3BbP1pPeh4WyJbCZKyBQzpgcX6HqV8wpqkFRbE62LaYuhED3dXd654izACRXJuRsFNaopKThLhVg3b",
  "key31": "dUmXf3EVjmQzZpvwSBErwjga4eTx4coga4b3RZKrf8mGepmuT5uz5SuALkyzTU2Nhs6Jg1kSxwC4n6rBDSG2NVk",
  "key32": "63cEfNwpPBzjVLu9dta1ciQgtuf2DkMB81ycFNWZ8RrGBFx7NPnimXmvazKn1bz2sS8bJ5mF2Xj5k1k23dEowSvj",
  "key33": "5L7riBv8fDvmdvqr1k91BNpLpYYixyGAEeuUjtbcpA2Dke6YXzDD2H78mdkXjg9yepTWYqT1AHmpYfpgxMUyBMrK",
  "key34": "3caVJNYAxdiMpjZdtAonxF2rhZi3cXwbxv2ArBDWzogniGg3rLAPZJvfhMXiTLG2dZH1s1teyFJYkhxtVg8a74wx",
  "key35": "2v9uq7MmawczCoMJWhm8kqijES4ZWoeneC37rcPcRWU9K5kdCHJSVcXMrNJUz8SAhYY9Xh6wu66NheUESKKHeypx"
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
