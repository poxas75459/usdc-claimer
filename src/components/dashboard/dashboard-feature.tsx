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
    "66UAMkighVHgTQBFbuWd9UnsYTjzDQKDpy39XC4rik38NDJrKxygrHWnpG9gD1URDUdWEe2qkjL6UE43A9JD6W5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fSPFqYkbANMENE96HbUviZmS37DaMKZj8UGHYXjTC9z4BCGCGedkWJn4TnsHZVFFkkqFVeE2NEUwpWzPcsWj41W",
  "key1": "35VSK2npWbbdbyRSPuXVz8kLH77HucQwLgJnzttfDvDfAbjbbfXGUc3xc9wi3xTrHX9gPAxC8eZgf62fc4hG1xdp",
  "key2": "2BJjJNgkqRHDfCXnGjRs2QmYudiTTWKi4UABEBbSTa9Zk9HFvL85kjWUJgvztTXdzfYugZcEzrAU17VN61W5ji6t",
  "key3": "54JpxyKrXYe4iQEtx5KTUARCL4LU2o9ntgNyJEFBAKuYYB5HKAy7iBfCoC9kBTtdL45DZQxhe4QiFczrtTViEmVt",
  "key4": "5NcZzNg3rEfduVvgPvACshpL9812gnJhPb2dSQdzNQpqMKpK3MDXphppLt2N17Nsk2TpcePv8n5jD7X6FEpkwqgk",
  "key5": "3vaALh4C12T6qMmr1W2DmnE5PHweauULwK1diReDVYGLStqnEnDa36xYVVovr549gGNbbGiS8MYBN8iWfiLa9mYF",
  "key6": "2QGrCR7awwPvGgqmcoaLYjBW7hjx6Dx4C5YfetizRkzXLTsTPD8S9rMShCdmTgSL6vgPSVw1zaPK41KwrHHU73DQ",
  "key7": "5ZtKUFJ9RZU8mzKLrw54Nn4ot8R52n7kL3qw3K7BRm8AgkkidmVU8hPwyaBHTH141wYEENS7C6j93LyzToAiyYi3",
  "key8": "Sq2b94jhXELZaHFVSf7BcukQEFQhKir8YgNiBBs9zfRCw3C4Zr7ctfsV1hwrKJS6bSS3aQEyFe4c78c6QeXcgJD",
  "key9": "43dPpafXx1NBa4VpqzuerL5jfM3Fxbn9eCgadHY5Kzy1kRTHiyqx4MMApH9osu3Ehis7eNMfPQWZsPpHA6S4TV3p",
  "key10": "4S1k6iF2MKPaupBx2oPMcNV2LaniXkxLmzXEfzegsBRFgPNm9g8t68ZRxNEdHK4FXUMatmXPHBaJh5wVWGv16RXD",
  "key11": "3jkHibJ9GeubGzbSGZSa2YbAtv1u67G1UkfMHqTDL4rrfxPF9WJ3vf14opPPGfPjossH5btN8D7LMJJCuxkC9924",
  "key12": "4N4CXRN1zVXNAZ15DyM5qUEs1EPDb6dE87Qg1PboeYi1baeaZTCWEZZNbBFuUxHEhgMGZmhPahGWN4YRGJnGPp6h",
  "key13": "22n822tMBvVBTtAuNHFLLrfkpMgb1EJfCoWAUut4v5fyW9PTVwbGKuQjDZdXzRou8nt69D2UKnZjf2DcxE47tQ5H",
  "key14": "66PPAVZCEqdQ8Huw8WXpujhXrTsajNfMpJYr988LdksYM8CoBge5yZK2MeN2WGSwM4t9EUTjAaRhkV3wpLZ1aDyy",
  "key15": "2MC561dGqUYeJHhs3L21ExBdtW32oLCVjqk86rF3gfBWoYeL7PbuaCbUhnbQ9qVHbRcWYD1zGJdpfZyPdn95grKi",
  "key16": "2RDC2ewkvENfZgwmXPdBnN4P21Nnc8L36PAZXsVT84cHETCrB6UdBLCTtKcLTDiqUpP8a56weLDAHNfGbW2KRHjB",
  "key17": "3dEfqoBtUQwLj9Rs49X2XwEkBSiFuB1Dx1pu42EQRfwFw6PGbwyWurA9RsSERtbFQo2A1N2LPjZc5BoniigarRMK",
  "key18": "4WFLNokCVNpWdsm1kC6SHW3xztAF43gAnYKH4kbdest4VrbUnaUtdtwT2YXtn48uD1FgSkq3gzYuBME5y3Mr4Wux",
  "key19": "4K9Dpg1YxASuGK3oVzCXEeN8gLXRHUeH2kVy5KVefRuoW9JdjKpuQT3tLqWtEsofBZWsbTbt6zMho2cDJbKvMxSL",
  "key20": "3sfSunVDTsRZ6qX4Kxowq85KoLuAirFcmvunHGjKN2advcVhwzhTFm8K8cLzphuLNTuy1RtHatMJpSKWW85Wstdu",
  "key21": "553sCisvEweBmqk9dDv6iCVqSb2BNMcV4eh7X9ZW3DXp2dJ4rDBfeWMV6HeSeQ2pbztCP6MVMCE3vhWfZY17sCkF",
  "key22": "2zpnGCot1MbKGKVhQezSC3wNo5zfTbBPpPVNLWgZCHjKis1K5EJxxxv53SZ8FZhckzfrJDuZpCVkkMjCrNywzsny",
  "key23": "5sa4AHz3ETqG9BNcjEC9Xv1A9cLXmrcBzquhGwvsQbzM2mqRAFzMCweQkwGdP6nvViUGYeJDxBH5Wc2NYLZibLCk",
  "key24": "3tsgu91fTsp7iVPcdxuHdujdxWzuytvSYKo28S8jZnAB8NsndqwhYFX5AuDgf7zDRU7gZXHegZedo9rjrYVbzU3f",
  "key25": "2L7cEPg7iXcfFaiumhnrF6NkSAkND2tmqiBy4CnNW2bmauNe9iyTNRAYaLZdDybLB8M5GS2DgMCh5d74B8hZyps6",
  "key26": "3v8pLZEFqGKRkv761GnZWW7LziYTCatQBvyeuFvfiDB42nwmevxHhpc9gfDQH1tD9yNb31P7xh7QB2S37dwRRjvF",
  "key27": "22AzYSehnfgxXsntBw6Z6Xep3ke3vukFexpKmGybvKHbY2sL3svDH5oXJkMfTgeRmuELimLAvpeRBdH89YTg6ZKU",
  "key28": "34neuLbByETzMMZfN2YdN3AK5tFhFjsVmv8Pt8zi46CF1cFRHvnBLjajBqNRQSHcWL3Ju1AMXrjPSp18kWkcfa2n",
  "key29": "26MQCDiexDMaSpoHrapxrXoERT7GgJE1vxLNb1QfQxJ9fpDhb6JmiDdDTjT4gutHxKmR6kMYReDx4fkkkg2ZbsVC",
  "key30": "5PPgXonsWimMGjEEzZ3TWp3yprk1TQf8ngen4rUiT1FHehHCPm7bFPikkPEtdGqaPXta4mxXVe1FhUXctZLAUQok",
  "key31": "4UTxPu9itdx9QpaaqpeBp8Jx48rzvkgGoGQ5QsPCXPTUesPrxKNGL3BFQFs8fW2ZVhGynfYJdLLQ5mN8yqneZb23"
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
