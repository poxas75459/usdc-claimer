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
    "2abRPTCjwhNATUYiQjEtpUs5mUGsLmGM26Cac7bqhV76hiQtSUs1MQfXR1gr93pgKbmBfq59h47pWTEZMMp52bof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxcEyAPdoudUcv4Pw3ifzuRJHjhHnYdSXSvMiSMhMgVspEXKMGpqesRCdWLSMEPT6YcmKyqzh8wtdgUZj3LePsG",
  "key1": "4n3C2RCLDcACyPkt7pUrrRX9aBEKCjwBANP8zzqQojgkzesZSs7ANaKM8neq4GUrav8VU7KWTS4nJkNRsUGf86Rs",
  "key2": "2NA4zhmQiW9fkDCR4vknq3D836xuBF3qMfNw8yS7CPSg6KvhVKPgUVEZe35GaNzdHbdntbEbG4JZURS7WyZ1hVig",
  "key3": "5d3bhfxEanDjtuToBmEBujUz2ted4aLqGJF9ffAijNt8xUPQtysDDkAy1qNYa7nNihUwxxzFP2KXo3ghx3pb9vCR",
  "key4": "2J9LouUMg2yjA2NLAnd9BzBHdS3MYTHXjTxSgNHMF4MSQuzo42Kp7TKhcyDfgqy7isj8jXnY7KmYsSVtzvWf22Bn",
  "key5": "5t8KaKnd6w4ZiqxA4KLSLHGR9XFtsywN8DNQicbZRyTCc6ubrra8HDgnwJimUyoPEfCPsEeyNSrgsYmRRvKnG4Ft",
  "key6": "3ZrY5PvNzPvLCNoHFAgp4dy1A3bNgNHhwuHf3XchUCX9Lh85u6oYtxubgmFg5fKwZm9RR1dX9FJ5sXwufLajGaCh",
  "key7": "35m37BK4Cd1eP3D3sNHvMi3d1GGfnApX3UeCiF7Qwsz5HUFGJz4PSWzqFN3ziCbkf4ouAtbANfpyGTpdyF1tptSp",
  "key8": "5CidZTaBkBbCb2u3K8Lkn3Z8Se9XJyYMLyXKVZsS5LMStJoKAw8D53UXGnfBHAdyMEssNf5WtepVAA5QkrbWY9e7",
  "key9": "2QaoBcEKuDWJ4DE3fm2npcUrb1dz8q6x3AMA3YFPjrysChi27uPLjLMYn6Jf4NyZgv1v32vh4K3PfeYYPQYrS8Zv",
  "key10": "2qdBi19PpqEHaLdd5io8qNnXdewySDSUtxmpsrEfXr2eyffkpmbd3e8PF2HgAnvsGXP99uTQ5SX1vyTAvM7k1eKP",
  "key11": "4MfQKRDFAvKfXEgLVvrHF6rbJkt1g3BSyd1BZsQ4miqV5t4w2aQ5uQM7Avpuh2gLncwahmHSAW8YHpg1ZecCVGwN",
  "key12": "24jkmpsUKBxzc72wfzUH8CyYs8zRoqhwLV9k3DKQaS4rSmn3NYVfLHyxwFTfNsamXzswPWvM2R2b8SJBeBXdHwKi",
  "key13": "4sarAqXTqhCvTo33xuKEjgLMztXo3PPxmJ7kD1cwEg6uokGuZ1dyZatYMERJPcuBQB2AjjByGtFEojHh1W8YWKsX",
  "key14": "SK86F2w2egyhr6pypgwh7wAnWK4WcL4D2efkFJ2t8JTj2pVRb7ojNsbyYoFwBMAfiegbx94N3R4aBDBAFpicBwf",
  "key15": "4dv4HEPjHnzNc7sXYWigu4kuk9uHxTTcE4cuCccA17KLANgNoYqqCj2Ctj62dKVRR1LZtgnuhJkPo8i7tX8hE25g",
  "key16": "3wYAA8GnHktBmeiTbmHyNkiLdryBp3ttzvQzaBy7Fx4YRq17uasJwQ6pcK1K1UXgQn5UnwVV3FANhKEgMmgoEwxN",
  "key17": "55cXfAd8FYSg2AZgodfY6yCTwZGpRNACkaiB3qD2rCm22wgBnnrM7hEGBUHMDfPGsvi6D2eXYEu3mjt8PjzkD243",
  "key18": "2rCB6Cy6kzGnvTm2nDBizjRK4oAGFkRmTua7xL6dQ7cwJNa2EwFTXAoTKAF8sq7Z2fxyc9rRHHNTxTAgawviRrBB",
  "key19": "3UBHvjMViicAYVsQjBXSoBS3rvbzvc8ncu7RUnP3ueuFq3fbq6eUDponKDP2R3Cc2iQTiaPucshU9P3T81yJjHG4",
  "key20": "4kQN4FY3c26jMb4hEBkDK5dzeRU9yYN3rej6sAiiM7NqfGmf6ciKC2zBGKMmZ7QtyHXhZAbEQQFU7PjM5q8iSdut",
  "key21": "7EoTY7oG4R6zbat8y5Ns4s6r8qBzWccaiNgdWuB3W21hAE4ixMjiTYvra9gNfySrdoMBa6ngodtHzw9PpWHuNmP",
  "key22": "3QPRi56S5fu8Zb2nHM48yyQGoqvsB84TkCVHHaNkafEw7BtZDBe4fwcSy5cD6nz8sErbyYy6cxEPYMMZrzssj28v",
  "key23": "3GBc8TcDCECmCbwvtdiG6Ybjvs5FKEhLBeShq1tQAXc7r2zG2RCRYa8GDCB5wzTDUoYAHCrgatvmntWu1qcgbodJ",
  "key24": "4iro9e2vs71anHFjYZkDAoAifqgqrxDcSh8bv1xgHbvMXCLzUBy1xNhpxs636CfwVwoVfF562ubvMjjGc8UGvoyb",
  "key25": "4iSCfHDEu12z2nDRXWz2Do7CbxeGk6CdfbDoGFD7MPVLCc3EQU1Q3XuMTT7c9N2fxrzw7qqnDeTytfyzr3Vxu4Pc",
  "key26": "fo4Gq2FiW1F9Y5syFksgs68aNhJdDoEFsAoYTaGS9qTGAZu8nRTyNQpD8AVQyYsydWr6ZRKtFQNVNcRTgKWeyqN",
  "key27": "2XNNWxi6pWV6hhdkKHcbRWKG8wxbGs7Z3gAFCBmv7GVYD5DPL86xQoTVV4cYr1LmZxTtvmxPpjuswTp1siEWqbkd",
  "key28": "5we6NWADqGTFrebxWWBu4j84AxQKurquR3vJRydyQrNyeifSdYE4X1zYWvjhkoziteYZCRPmFjJP7HTZdjuAvwQj",
  "key29": "3H8FmvKWQoS96qnUFmP8mWUCnpFpw5JuAnS22117L3C6bsXzGvgxZ8KW3jgYQTEYAAByjD4eN8tDDRidcNCCRdvo",
  "key30": "4SF6Ge2dhGYsrDQqNoJ7hck7VUnZSDqx4gbH49aEPo1YCf22GWofDAWNnFDTBRV9P2U6WWjb53MVHX4yVkDn3rYB",
  "key31": "2h63ddQqz7XKJWMt8mCCtbQwKhaFmcYvjjHJ2zdy9nJWtHbPjn5GoymgGnrgKXktnYq6tEdcqjx3JM8871qLGwDc",
  "key32": "fE5Y3MiHaY8zVNYrouuZycPfQxQiv82BSZ8k6JexzceLoGwamQ25B1jaxoAfissPQar5CUf7jFbRFL5WTpd4xRU",
  "key33": "5kVzepfzPJ2hvdTo8ZSaiq6ZYvAKvaBqxbdhRDPVTCkDBX5MjVDfinLtNGv12gwXjaJsF75r35RFgSSVXUnDaKny",
  "key34": "3UxZNGzrd6CtHLRovsftX1a5Daq2MgAWMRoBsQUPWz8LBWFPCHixsrFnbHkAdCdP8XCeVX9W9kvTetionM8ip4hL",
  "key35": "3sWL4uN4ipfjhu5DSi5iQeP128VreQupgAsw3kr3N27CwESWofyUTaukjtaq2EfefxoV4RupuBhchYjCkVctwvup",
  "key36": "te8rEkXekjX7iAQYmzrUHceRgwZVzvuRkRSPak4LcW6hbMXkN8a5sxa8jpqbw3TSEVBoWkVmQNW4EyYLSzeuh3M"
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
