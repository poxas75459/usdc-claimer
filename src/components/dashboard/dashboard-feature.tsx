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
    "iX9BmWhuEnVZPnh9fELKSQaJ67tjU14XQghwyXJr8EhAJWpatFeVkadVpUot8pEbqiQk4CNNNmCpKbnMfQEHw15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1E5DXKgxG8JnHz7JvkoiYhhWU2d8VUGoB6Jt6u5UZJN7odnkkr85qVRv4N2eS92iEC9ZxpUM4W3FYgjcmBV2wb",
  "key1": "4DiYMuS5X8hrC1Br12Bgz3MPmzqR4JJqhbkryyB3vsmFTs9oYaCL3wPKRktfJXurMjuM2kVardVVwrTgY6WTa7NS",
  "key2": "4GbTY5EwhRMAQBn218SUiP7BAssSodCHZzr9qNz9UP69WDBY4jQThCPmHkkc41Hoyxajyqd8ayxEx5RdYtwhjPT9",
  "key3": "2nAztzPpNBD1P5egF7eCD4FxHoXCeXEyFExAK79HLmgcU8QnsFNFbuPSFPaopGgqvTQVuZTfJYSqv2QFQbTEbPhY",
  "key4": "5GjsxuoAVyQz6e58ebqGv2E57VFkBUaj9f68V1W7T6r2S3yDUEZiU73UoJhXZGzRVvLM1ZQewVWtzwmSwfLuL32H",
  "key5": "3rTtjfP9VSPc31KDp6Nw6KPRydTwx2aCZq4gCJ1dJ7EPChJHni7AkcztcYTHhBLw7mqDv4hEoFfKr4JsQaYJnKjW",
  "key6": "DQ8LMnvtAqr56Bqrs5reK7RUFnYFrBAGcsCwzzoLByyy2gc7Wnzr5ZhPhvvBJ4w9rUQTNFxrEPSwTmVtKYph6oD",
  "key7": "5cYDMwP7PTGY2YEa7RzAPnNmJHxsMkPNNw7dqSk8jKxqQexRykpTDGcF9kixtbPngixGPU6VBP1J59N5wHXoQcVo",
  "key8": "2Axz2hF48n5gxSf2F36Z63UoJLdQWas4Yc9aLHKZ8h26hK8AUstLxdTNJF99inRRyY3aynK7ZcmQPKLjvV6GcDDy",
  "key9": "2iMH21qYELFGepmJ6DhNWUVAYxe3jz2hFPXr9qm8uERsZ6EmRvjQhDmLdenL7pS3qFsWfbxPvV9UgAJo9izPXiZi",
  "key10": "3nzCQEjLFGgvjqP7DNwNcypAACaw3YmusLePWXjCuRMbdBhi8YqA9goAFHynXxYatNk1SfrK9QUiNEdijgKTM8yv",
  "key11": "5mXBGTQnX9Zj6KTnUZHVy7MCbR6W9cKKE5gZ7RzwDQWouqyxcXACVwNcX15exYAUZSGNAabnqE4MAe5mRQVhdmKs",
  "key12": "2k4mfh1x6c7wY9DW72KKrwqyMqYkQ4s9RHgK5n6LFCdqGNTWW4XUq6ThyrMRZaZ5Y2Mu9arGWQ8odGdQVQPhiCTx",
  "key13": "5SWiHb9Ywrz9r2qnXKLKmoTQFSwKzgJ1oUiZ6rUWVY7hmvFmSppyLnJ7qFRdY1hYEdCgySeDPdQziCg4K79GmBw8",
  "key14": "5pFvHLNCBHXvTszBX9uMzmUXRhDfLMBSeWtgVYn14q7QtyHY6hcu1m66MrvFPBYBaMXLzpitarqsaacDhnQBYnEP",
  "key15": "2muu7cuLxi6dCYPtUeVNMUoxmBN3mfyA5EXhLrztyjqDxbZPow6zxxdUJndMn6EyCHVPkfFXNPnRhygkZUoSRhmv",
  "key16": "3cRhXowBH5f3VPcoDyB2buPtMbzCwhZJSZ8hiqNaxHLrct8xaEiTC94teQkK1FUseBrUnsetBArDpRLHEn1ZSsFP",
  "key17": "2FZTu8rBAete3JqdZV5TQGmir6i3K5HG7z6gu2hkBQuM9LA4XMScAbPCtkiVSvK21cryHC5L3dQxanciLFsBes3B",
  "key18": "H3yaSLwVbrMyANWf1yztzPUhLaq35P5Jqsbm9Ss8djcVgbCGhKLcVJ7c482mu3iK6smKEZCHM6hc2jpynybRUNG",
  "key19": "ZijbJ6kkNoWmnQxn8UgveY1EDL5PhFrKZS4QTqTUvKJKmMja2KJonRqkEuo3P1j86yk2yF22aZWpEkCecvaPCg7",
  "key20": "43crUjgxoHwAxYz97S2374BSf2yr2MGQPpvqPLwwgeD6gi2p4v8H8WW2hPManuTDdoKLSTuc4QcTHUWuURAiaKiv",
  "key21": "3vPL64jwMyVj8SeNNqhdktZgcbKgYWyDomTXV6EpCd7Uix8EwY1mvF1RftvSCrmSa4k5PH13YDeeEbUWrgQvgpjB",
  "key22": "VdAj6frrXBu8o166ebqhHDLFbvBF7e5yoMHgyGCDa3e5uSWq1UYLLryuQXQU9ayPSiZtPmbrJJ4nmwK35QxU8UC",
  "key23": "21MxVqx81DgkP4A4k7XgbzuKh4Qd86ZFifDKkfCQR9VNyKQRhcZGWrERe5XhvmxX9Cv3FQApVvc4gSPXkwtLx2fc",
  "key24": "5iGFSKD1bQRRtp7dog9XC4N69sECZkZvorU4P5Do3cb53XMdytD6Xw3iQopMFGPcSP5QtrxPT4NY58QxotKqaumZ",
  "key25": "4m7G1UdqpZVJntQ8qNmNHEsJ1bcVf6u4rHXebFiubHxenPu88fJNjFPGQpKYVpvBS2Gar4HShXR9dFzs8PL6Wsaw",
  "key26": "4PWPcwsDhrXV7XaYqG37duK22ZJhEt8GomWAha38f34VMrnp6Fehb6D782DJVBP8BtNrtS7oBvBHw92UC451VA1R",
  "key27": "61SFPzxecWYFhTTW58SsVBpWV33eAKXEqF9YzfokFoLRN8v5vzonTtWxWUdQmfqkwTcQ98jTWbeEmPyjDN7dM1rq",
  "key28": "LbtpLEdWBMt4r9w2KCNn8VGGV8PBieVNxxKXF491QZRR7hyhAywaUzqL2pFRQghHDUvJH5tXe47dYJWxnzs7PTH",
  "key29": "4qrNSBS2Znd4zx78bX8efH8TEEas6V8QKyS1jSYZea9mCTHr7DJxPd38xEFHoiAZRow3AGMsiEczpaouGWmsv6K8",
  "key30": "3VUnKPaW1aQWkR7dCtqyEcS1bRP5kaYKkYmAcpK29ANBzsiZpFfc4veKk29ZyyFkL5oSWZJdC4g1sCptPjdkgGYC",
  "key31": "5hjJbjDP33RukB7QaRiv932akvc15McxginAtyyNjTNGwUAxsvd1eGcw3XePc6aU9uzbrq8ynYq3MQneKY7K9Kod",
  "key32": "2TrnjkTrrneE6cajWH4KZRpxjLfEYwC8hSRmdw2au7UF93aBFjxvmv2v7PXrs3fF9mnW44ETjc8jrovsEiSt83DB",
  "key33": "2GKw1NJL9itwFsKPFGaKCZNgx2hE5LKFrKMUMbUpCENoAAZCD1hFNWNZnW7krYkPsoZk6df8FMe5jFmjFxQyfWnx",
  "key34": "22Pc2eGKXvMoPbQEd7CbfMCXinMmg4SoHT3EKaQhZZmeEwtDPTADH97JXJbJ3w1UFm3FqywiHj5CRhZpg6xm6YKB",
  "key35": "4vKuvZ41ggD3g4Xb3Fnr2qwPuZoKW8wqxuM5xd5Np71CMD6DmSWBEqkUDQqGk9E22Dgkx5VUnYSwWWrCcs7cMncW",
  "key36": "4uhr6tB8jtAWBs1Ga6MAsUJo8YY51N4ZAwzHqUSkQKYJ6XZWxWRVRijQEDuNSBFqsQvFz51nmWzNovcW8b2FqtJY",
  "key37": "4Mh6GJhKmo1zFjqKnetNdZkXPS5AnZ9HMusDPzv1xEH3sg38vAvrXo5SV5bHbb1ifhzFFJmJz1yqFWGQaGMAtJFt",
  "key38": "29uuexKtdGLbCnpkQPp5AA52SQjihztc92ahribjKysC8QX6jQxzkSMkMJuCPoGhv9AfSMyMPD8JoDpoMXABdpaV",
  "key39": "35Bhtv53gipQSJtpWmEDj5S527hijHLoWDkau1MvDPxy5ZTKwBqkoXymP6bJzxGhxKuTuqRWziHZqnEtiEkBFqm9",
  "key40": "3ecGp2154PmwBrqbNxwZiECpXodxGN5Hh1oZAAJgdmVBrJU2q6spas2taTX43ZoRs9rcU9oU2CFS1sUemLxgkSHN",
  "key41": "43gYzzwMgSoUruVHM1v2X27mTKTBqwW5DpyzLtvyeZZ8QH53JDd713FX1TtZF7DqLJDWePoZzGMuLRuS8Ch5vsC4"
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
