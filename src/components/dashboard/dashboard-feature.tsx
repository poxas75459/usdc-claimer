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
    "Z28rgvGnEtyBpoxDBDsGCmgtNDtMeFk1Ayft5dgnNXpopnwoj1JpQxxopDLZoa9irn7QJ3HTz1UNqFcdmsgoy9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRGcecXavN2bq4NL2vfBkhTfxp4PFyQweDqGaw1a2mwL4cEgNgXBYFkR7uzw7ZLzkXdtuffmm1uqQPecrKgzj84",
  "key1": "4JUJb4u7VWg6jsKAWVxGoTXpew5ABs9Dnp6ZLzbNAEGFHi9eR7XR82LBaTgSx66VqubRzcUbwzykhkDKJD3ARPsp",
  "key2": "ha3YUHxZTv2KmFznFLtCQAaeXMTRQBPVgz6gzpMaduZtZNFX7JSyAa3KoYinAbyWTcrp1BHNceG63DM69S5bATR",
  "key3": "588k9nV71rVxw7JVSZ8VevWkutb1qZWXKkLL9R86Ga6DnVqeHTbiPrFAuJgRTbgDxkgrRs4GLP4uho2AEFfNKJQd",
  "key4": "Nxkm9ZSdkVAaRBNhsFhvwcfWkG1qaxe7bY46rCZwPsifMxw3Uc1rfV3pjJiT6dyE4T3BcdTAz1ZQqtWZKBhZbCw",
  "key5": "5B3WvAguodZeBbpR4Z3hsaGyZ4oYWTYU4qedahKfwqTgbo6KzvqfzJyHmvApFAQitCTUVbzHCXRBbwz8CVn8CNyr",
  "key6": "2QeKsZdo8xo2cS25yrYH7LPYWnRC3eTX2pMRydEjA52rNQeneN1Gh8Ax9QDsSLNZJeS7m6P39smhS9m5tmWgSwFg",
  "key7": "3Gs512RXtWiQ78xSCRLiky65cV9Yx44ngvg1VkpUbpjfWpJ9iZgMTKqFq6VMJVojS8ST2scD9BDcJDbcMbdyAu1B",
  "key8": "123hxe8jFfTty6hybwcevxEELHkxjZoqnbRGfPMXqdf9WXmz8GQWmECXkCQv1yESV4YPf8FRJniGEueGK6aGYAPY",
  "key9": "2JGkPp3866bYzYjr2F7bqVtiBEqXawUou82gp9QARZ4nvApHijJghrtz1bdzpexFGMCEaUhN82A7VYtxWWYnuaf",
  "key10": "4DBo9x9Ua8GU3jJehVmwm18v5QXEdHvSNaEp2C8VYz6rL9VbRZmeUNzLASYTLKrYCfgz8vCXtyFkLg2tkvaqtqWm",
  "key11": "2p8Pu9PW4k6PD2t5P1fmqgGfVd7ikBPj98idwS3vHmV1Bh5rctsUhVWjS3f93M4nzKnkoSC9vxPWdBfHYa5GEvLE",
  "key12": "4Mf6zYArFtjhyLN7s9Xgw3Wg9ckEVzy8B1hzAqKTH5BmqWRpWzeVmvG5iGss5Gnm6wuoqGDpgDFhancjHS6sjYCA",
  "key13": "57axzpKM1UN22WfEoZwsmZZMR87EsZuWDXbH4sS8cX46DTn5jxjrkZMdXc7gXwWgdjxQiXuDdKwC5qC32qhqpDhX",
  "key14": "34YG8Dqq9jNnMithaP87PpXTTzi8KkDczU1ULxZtB6zaZrYZ4vbHJQY9XbLoh3cFTroR8Z94rbk8EGKPVp23621H",
  "key15": "5RLkF3WxVV21V7F9rsJaPUAVTcrkshK1CU3JARGeV3QpHZMq8dRSVhueEhQuKUjqbYhp2Cfgw2Lvw4SCLtDGCnRm",
  "key16": "3byqNjJU6yieXo4xQ7AGfUDwPdsc4kzGpmGWhruRjapToMd2n7tL65tAeD32GwMcg9rSNQES5EsntbGogLZ3dnDq",
  "key17": "4SLjskcQrgVHjRG5DxvtHpUL328WYooM6szmHPSiNa4XQYoW24AB6vBW64pAjCNBzgA9LUowD8ZoC2dAhLjp3F8U",
  "key18": "5tWZcofTdSCHanPZVEHiLgow6do1ExWmskoZumUL1Lk5HTDoDuUEUotCvKEkCmxWiR1e4uETxgRN3RuDnEEsAqgF",
  "key19": "3FdRETdnogD3W8WBigKzLEAtDpJcPHxo5z1YYfLP9dSWqEbcpepw3yMpW4cZjHMMvDUaKqhcXepCi62j25uZUTDP",
  "key20": "3dq8EQjoKvnXyDBAYTyiUy27c9NtzxNu8maWEUspgqToDeB5xBBSHyNaaHeuH6N3ehNWPQ6yMK344QtuDYKxbAz8",
  "key21": "5riPAY3yeeJZyCwBvHonhXo6NVDdfPG2HznjpqYuf7x6cCknz2WSMtqwocacjgQ44SjeMdSaNr1WyFVz3HcxGgqE",
  "key22": "4AeQ3ZgpVSqhdFg9tn9FmRMHdjUp5nomv5AqSBhkAnkib5fedFBDUwNq8fSqxjEFUUJyazQaErziPjn7hPTXBJph",
  "key23": "e3doCFicFKsyvPauZV4MRUVWBZfBKc8Fwjt71TdQKf3KV4XFxMKmvPMPzNR2U5qaCpMs6xDq1hQRFLQawMwz1TT",
  "key24": "2kS6PHRtjEdgc4b3oyoGGqUt1vJkM6txXEwwaBoFB7k5gn3Y5LgD3WG52wWxmYK94TgpvbGezyTaZpJtjrgsNu4G",
  "key25": "4NJmYGj4pddbC46kGiMauAC9F3CeEjYHw1ESUaV4r86fcwPfJn5PLGbYF18Ukt7iZ2XHopzokpqgzTPvBX5wYdcq",
  "key26": "4KWSKj5dPydYcdDV3jYH1TRd1qEFkaJZsY3dZCSUeYyL6GQYF9T1QeJ8UxiHMzSoVDQssV2b9yaLrqG2hbdqp2x"
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
