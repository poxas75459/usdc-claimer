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
    "5MugUeBqTTik7GWry6WqGHR3ALnNCCvhCwdiPctiXu3wZ1W9R7kFT8MBLQdJ5AgGxRKruvdSAwD6TVMhvcJv8fYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isHsWm7ZGmeeSiaSrBkErmHtGg2zTys6hFdC6F7ghib752hQGcs1j1suzGanMA4xdcLhbBjAqKmzpdd1r1eBAzP",
  "key1": "423UA777KxPkXduqHmcx5PYHfaLqskEbwZf9FEdpZDXbv4sbfPP799qam2Gwre2ChnxWEokjevU8XQqcKivRjhWT",
  "key2": "5xdH8qVVb9GX3C8cDAdt3MyWTGUR7hQiMfbkvr8sEJAmwz7GcwvctE3n9SiM23cwNceiMAaB5WyZXG2DTyRsxoR1",
  "key3": "CSCoPKbMbsUrHABXmLS5WNxHkcgh7krnJSYiTUv7uYfgmnDPzhJdo8GaxHNXtcEZ3VMGJ1aHZ5QeCkaStiqs21L",
  "key4": "5Y2n7YqZgV5REtsqvJMh2DCJ2iosDKD8tKkQNoLNjHMvAdJEn3uLUVA99XzeDPpo5XpimpWzKmsMfHcPgiBh56Kz",
  "key5": "6dehwuDQzCN7kY1UKQGwHNVF4swLbyZum3g3uBoLzoUBLq2k6C7pc7vMDLNNR9AJhoedERvRjWjnVgQK2ZAKE8x",
  "key6": "5oL4sA2FU5RoYLXNNSeoYcGZAtbYiKqjtJbYpE5ASzgpVrzq5CHMbPkpbyi17nbxmAt2p1awNLtuqfx2z6DYYYY7",
  "key7": "5NdejWrE1zKz9CZTTJEjrHqL31P8q8jnq2nQy8jFhGBcn4hLRMPM4dNpAtaVstwk6829dRMSHecNKGH2BRyWctt5",
  "key8": "2rVDppezMWRpTewBuBXWsUbqQQD5p6oL3Enwbscm6CP2EKCwgaRtDTJCuYuQbuhoBKrfxCP9RMMATwKSboWSkjJC",
  "key9": "2BRAPYAvWNgYGRk3Wqb23SkAhQgmo4PsrDR2HsB7RN2ZyQoj2sFnmu9ShbV9rF5m7K62X9sbFxmoGdYYf2ToiGLA",
  "key10": "2NkL6EaWjEEn87nsTPsTWCERyf5J3sK6iayjCvsuumUuRWSfrvtDxCsaz7PRH1UzJZHSmgPBtuTJxxuyy48c2bdi",
  "key11": "2AksXzzjsnjvPhBnfu7FatihQpFSYrSuLipGFicpdeno8Amp7Y9hsZaxv1H5aSGVXn21XpYvS5TRt6V2F94VMubQ",
  "key12": "ttWGX9WgBjGBa9MSasHyUjHZNgfNUNiVEXVWo6MEzYvb1vjkZMd5nqxNDJcNv4jmekzSN9Fn6ZeyyWV4zPdHfeE",
  "key13": "3zUnZkdD6tya75zFzbxb2npcqbmJptmKkqbsEjdVcR1bckkn28NXioPmiL6AjNco2d5GHUi2EiDsmBXCRzuFAS9r",
  "key14": "3craWvyLUnqAtofj1FJtGqA1NCBMVudmXm9cXcFDAmthTs5ZaqcDUHopEyvFmLuVZm2N2Vg45W85grAguw4mxq9e",
  "key15": "65A7AqZEEf4Rv1varZyfLyCYMX9EFeDbno7PHHjuaTHCgKyK7NkVUjAg4BYN9YT4Fa5DY25cSvjuDpUALu3ooFyp",
  "key16": "4NWpDwsqmSJHFrXJcaCfnfsBBKXeKq7CJZxjxTNsds2tCxgp2TUc4gobYtmiyseh6B1dJ3vdz1vaKBBnzeLDNRqu",
  "key17": "5GkKdNsa6S9T7YVg9rEdLCszpaLhzZ2XKTWr2zxRAoYbV9i6xTJmDKrh4aqS86t8nyi9R4AFUu3Yx7XeP6pAwQrg",
  "key18": "4CKyAgXrMpajVX4ARN4zq1i1RV3aXtZwTDTwVwBJuHj6m8sfFuWw3pEPt1Re4xLQTgHuiyTZtooWKqDbn2vst74L",
  "key19": "UCidaag5exQczv9L4RfEqYkVcXyV9FPCNK3jbQUKe75jvPLNuK5afTEULQfkQEW9V6TCk2Ccq99CzjpMxGZDfEd",
  "key20": "2MKYhDKuGfF2HirwRRUaeAdKxSWceZHuN7AFUrQ2BMMWddkdezFVw54Uano9rPEXUKFQJ1KQQw2drYXCX7LXG2u3",
  "key21": "4aeFUXKEuzAXYnNMM59Sv1UCMxFpe7JUdEEajbg4qjZRmrS4t39w6rzaDMtzLKzYwLATFfMPgXn96nywhXzTTdv6",
  "key22": "3gP9qXSVy2nbuH1CzWhBWCyQ4VNF1PTbhNkhbaL3idQhZ7e55djPLnFuWw8BqY14VBAj71x2WipMGVSgrh4k7MbV",
  "key23": "mWA4Z4Tjrjs7E9SRuto6xWqsJLvcAoWEDsXGifSCqRfyTjM92EejsXndDXwHj829mA9uFSEESGRpC5Grp6gp12o",
  "key24": "Yng6YBW2AkVoGPQLfEgp9EWbVyKnXsABsp1toqxoz6p9kHqhvxhdmi9XC82iJeTZYu3V5eJC5HBctQ5fRy2YwGQ",
  "key25": "4b2KUcc6Y5pYHsVxHMnDAnZ8zJEhQLs22V69bzniGsiBoeooUa2Cr6QyGz7ZzhWyEk3YwGrNmcDxvfaan8E29Mx8",
  "key26": "qYw4aEksmjjgZZDXC4dn9YKpzSwo7BHMm5FEi93vKmv83a8JZxn5C6cCAkg8r32GP5792paJrM1RSqVKkjRSNwk",
  "key27": "gt6McArB9MsR3BGMJo3qfv2KyArJ5CnmrYkPCRcQCa4TSS1W3wuVYJdt1pkgJS3Wj6FmYtfD97gg8TnEJzAba4b",
  "key28": "2YZrpyj2ZpseKNrLcJ6DDLtdrPA9K2fXSXTfv86eg8QGQyU353eaKNDPCmRrQ4WB9CiEZzfNrcDMMR16BosuqmLX",
  "key29": "5viYK66bG3NHQJq6ideBuyDChajogjFqwHrK31vz4DnjhsRmK5HzDnmoFfjvr8vHUaBuMCA3xBjLFkTZFvuFmpnj",
  "key30": "2jTfcXECwh5DVT3oRphCwFpoYi8yazWDXGHJWuoJHBpyDZDSGstt9Pog1Q3fzGnF4yz3TRQzTzmGLtETNfsazRtn",
  "key31": "2hRAUAHKATR8uLvacxt6PxvmcaL268zKueSZm5cHg7q21fKgNmMyNPfvT54cyNWkHWB7RfSjUaptM1hk4EmYEMCY",
  "key32": "npy7fPeKafUhiiwmBsurYKzYxVCLKHomAvnqueNKZYaRQgAqQ5fudLtAN3CKRBz5yU9qEQdnoxChYXwGDkt7sxb"
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
