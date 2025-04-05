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
    "sD6amBg5S71iimCXgSsjw9y31QZaeSppeDJoNYzGgZ8cDGTnCNX7MXyrptpaFuPFigVouTBy6Ak6NQwLv6Kj5Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMCEz3QEKgkuazZx5ftYaDFzPrAQtiunZZLv5LTXjQLJUP9fq3gewNYfR6SEBprMbVukqqztYWLRhJFBHJNEFxZ",
  "key1": "3UTm5qMhVGbZpiVwXTPZUXEyihTouAjYfC13L4D5sXUiP7gvWNBWxEgRQzHR4pHJLkq7CRPnMjLBq8PRkqGMenfh",
  "key2": "3wNmkA7CPhmbUNykaX91Tx4gnTD8wJeA1UZ2qsdSU2nd9F1WocXTrujYmv67tbw7oZztiuEEyYL24CyEQLGwrT2N",
  "key3": "5EkLkqXcFucDkQGjuKv86C2QX2aTHN1GGAbGq4MryxjayeF4yT6VLBHDLBWmaxmWT6hTHVrdG5M2Ujs5bK5j83qV",
  "key4": "2wGPVDnxAd8LqYEhskhniTGuoyyfj1wynbZhsRKNCfLmyzK71uzrgXx8KxTBtGP3JBsPAHsHb2MMoHmeLsV9abRj",
  "key5": "2jLBCoi7noawbHcZx4nUxktUpPwcKrTdVfi92B1LNpQRpDdSGH4HUvGzmnEA2wp7GoSkWTFSBssTMUADfp27GoSA",
  "key6": "5j4KVE5RBc6FypNsha1mAjS5ZDzivEn1Ce9dY3LAN154VFoxRd75zMo8bQpxYRPF69ZLq79KKED5etdV2YRpFKsu",
  "key7": "33MKeyptKhcSUKgXTkS7X6S329B1V3jZjbhNGZwCZcz4UitNh2AWeyWrR5oUZcCH8vg2NjKcyBTm4jekAZteMHf9",
  "key8": "4n2ZDM7aAL9uqFbdS9CTC4Ra3Lbjzy62Ph9UJGXhnksGJ16vdGmvAM8tmKw7ktNYHLskJ3dzAeDjFWskmroF4F4Z",
  "key9": "1sp2FApiL5jkRov5bEGRJA3WiwcCMdPUiUv1ipVcqaZ6j4GSMv9Q6wYLGQhvS5g6qbEULR4P8VHVjgSngZrz7Z9",
  "key10": "2BscpAVBnMHoYnRpApTkugzdLrRQMZJi7SkfzxfShAKyivUbWzBCrWeywDRj4QkoH72VQuFr32RuA3BkfbzYj3KC",
  "key11": "29abeNvWSjTP8wkgQyaPYs8pepHd2gTBqEaL6GxNXhsHCpSxeYmnpfPCWBNtj9LVweCrvSkTH4CY6XD8TXbS5id7",
  "key12": "2etsJEy8iWVRM9JCF9DQWPYYbFboT3qBAFwaadfyfEyRD2DcJnZxRUWz8xVFJ9GNNP4eJ69xdtfj4QpQr5BL3xEX",
  "key13": "5c7phgbqxGw4oTWQw8R4GpuhEDbKcDTMZMkCcygeHR5PAwEcm88TMVtTKqJZKwY1k9ofm1YMhk99S9cZRJEU9aaP",
  "key14": "2NUEzccvq6H1mEVS5cXz5Y2CM5H6Xmwa1hsgaCbNCcm4f71wFyER7v4UBntCucUN2NudCB1kvPjBJ2Ld6i93cqDh",
  "key15": "3Dx7g8RLrbqssrmMqBqqvfh8rjRhdeBVXu6C4AMLJZuUXTRx6bfUvXrpzsZDC3sU7b8svCEU8W3N9kVB4JCqtEmd",
  "key16": "2PmBQPEZh4YjPk6UkN1xrckBDHFVBR1kVWc5uYTJBwjr8ArpiE1GaZzN6H7sZze14P2AKzSFRGejwNiqnRYG24wS",
  "key17": "4MgTM5Uf2TUZwjexc7A16FGY923dB4wnshy8HFsG8yUrnyJqR5g3KYFrNt6oZRHbDTTAaasBbvk516BgMc3zpt98",
  "key18": "3SPZjfZGtTVwVfjhSDwDHm86VCK6EgESNkvBM8ZVN39zoX3nDHzc9teyQvL2gY1qERVckH27LtNrAY8oAixL6ARR",
  "key19": "5WSreCm3CGL2aSS5Hb7SUWoDm8VX3RygycYek58SuyvkZTArkRXfK8PimfJbcBhodPSgZqY3VVY4TTo3tRMnhedj",
  "key20": "5PbPASxcsjDmJ2bXU7DwxMD3cqa4TJMM8Gf84Wt96ZBrZUZqQ7fXtm8d6RJVEVeusASw6Ei48YwHi1gnZ3bud7xm",
  "key21": "4voFkwGVYRVW3NE2ZTTtPdcHCkQMzPHbsZhQougGqeQDno913XAdv86oryiVedG17D9BPDKsxMg8ks18NZn1Gdmu",
  "key22": "4PRKsCQ2rLreVg99enmzRZP7br2eiN43V4wdkPnYUCthNbHwWvyU7u4UeAdJw9NxZDoT1mCShjmUFWVLFZtDcEqb",
  "key23": "5SrTe1BM4qxz5tC16U5Q18TFxGm7Yg1hT291vfoHpr8ktRaKVv9pgUvoiGHbqwPv1na5Bxc8eWP8HWiUx3PdPiHh",
  "key24": "23e23rjEruqtBuNRQu1Q7ZnsY8vsGKBhpobSNf8X1zoeZkByMvjgTtw55triZX36BJY5XqYofJve613BJ11pQJLw",
  "key25": "CyQwG9xDtxYTrP51ZpYg6yeqcBQ8V7hEzJeJhSA8AS4s47YDatxRhnzK1NayfJrrU2seSCTFndnWnfrvNmQA5NP",
  "key26": "3ps7bhNYFLuvrhzBVzf6bG32FncwC5pq3MuFNWddLoj5T6CZHjH91XEfhH9MWff95VZ87iyjE2Va2DUBZFodho7T",
  "key27": "3Lj5gaVeL7LzwY4mFNB37moYiwvVRVHPTiZgmzXGCkwbLcunaokCYgY6rAVu3kmyuegQV1YsqQdzvM3p2ETxqatv",
  "key28": "3NhxZN9gqZNTELGWRA7ukU3i5Zppzhrfh5KvxXmYjyvAVmwRu1ugvALe2F3BWin88k2mgA8EgAwa8BrefRXm9PDG",
  "key29": "3p2tL5K8YJuFK4oAPqB8SFPkeeXhQfgYQiEzWxxNvhsUqTQ8kxBub1VPk1fhmCdYVHDzdHquE2mKbmWrANtR2GDt",
  "key30": "45diomc5zvRGHPKSCc1q7sYoAAPdTKDStSV26C8M26jsmZtiLqcYR8H6UuUQgTQVstMarVVHQHvoEdL3uYd6ze28",
  "key31": "4ddDZ7xQFspGMWfhGvCJE7scTnNEg5732WdhvXN8n9pjF2AcT6r6X4eTZGz7GqeiZMeksmZxg9kabarJebBNhoXb",
  "key32": "4RTXot44Y4CVz62h2xPseT4fa3buFEutg4tJjARMMgp1V7UwRGPPuJzaCZMUsBwRPYzKDpgMnmoubs5XHYPJY64q",
  "key33": "3yhKEyM9QnDwC4arPUD4y26kRD1Z2pejN6BSxfzHzei2Bn1h5MRM8HACuFZdLSRc2A4YWUQQd2RMzrLDNDUXqMTK",
  "key34": "44NeDQ3LeZShUnojUDjbt9bTXRKEJKoitv91NwFCr7auVTj2waeGCgoKsHQcc5Ts7Mc1VTzN5RDc1wFRH2PsUb9f"
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
