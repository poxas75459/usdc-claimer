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
    "5s4kamqPp7bQjJ8xLDvuFvmMipzp59P62AKEytB8KWYbCkn5ByjG8RBxncLUwbkWufpQE76H92kNiPnyKUKxujR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yChCM4zamJsXE3cYwpnbhz1EWDFSPf26BeadN96rJEqEWujtTsboVuv69qFqMGDXhzGuoBZ8hc3WtJEEyvUYq3",
  "key1": "tsyNeuihXjPNu6Sh7Bt27t4rrWaNaevrM6HSJT2FamYjvLz4g1ZBSCAZNTZtPNBEs49Lk3uYEWw7hGwQGAonPfb",
  "key2": "3Mv6j49veUnDsp1jipgKrun72SkW21twFJpD7GoocPVnsUH9qt2t4C2XGPvzz6LKQH7H9rEq1PtRgZnx36gpqiEA",
  "key3": "5DcoLJc2Ft7DwwoJ2Cbb9kGNdQWHpTBWjggRbMi6uKafGcFEvGAZgy5SWSPMp399MmQXvtPBKuLwTw7JuM8SLwvo",
  "key4": "3kkarntYorVkmyDn3aM55frYJrs3Qj58DxJaXqQhPj2xqX2r9mKcejMtNXPfCQouW4kiAtmCVK9ex1aQw9XBRumw",
  "key5": "548EAhwf91CbVCFk7QDrMHuzjC2sxewXDxh5Gi48JTjPwQwUbm78C9vmb3JoF3kxvGRwymZEBmbtgboxea2swDd4",
  "key6": "5x18Cg7AAowJqDP4KULB4RJiSeB5TTCyvSjNktfwQoSnixDYUf9jj2BGKpebGTf4qrWT2bLP9TshqnapFcNzPJ1f",
  "key7": "cQ6jSTWZVdwmsNzh27nHt4LWPnH6ifhMMkGM2aj1daKdnFTGn8LdgQonS4frVALohiXkPYv2byrfvC27bHANj5F",
  "key8": "4Rrjkk2UieeLe5F3qxMfwQF25ETbyhCRWJW9B7Yq5ectoMX2wszU7vafZLBmMzSgqvW4y8fkUadTHab7ixNdFC7e",
  "key9": "tS7DJU2RQazM2sqtosAvhgvWBNHa6AHSDPFbRQyEJsFtPCH8dPQS4NW3oUrTGvFKDbNowckPmqs2vJYT18s6AFh",
  "key10": "5HKAiQbet9dXfa6hpXM7SjfKYbFzW3HWybtEFU2ZqsDgnvDcE9nvqXdU1HLdMcs9FwvobKcuy5vdwTY8WpqkNoDP",
  "key11": "3HQA5kYGdYkeFpJgKb731w7z6kA2hf4EkLfeksVB6RX416ry8zj6NKjLnJvUYUt68EZxmAy1tNM9qxmcXfYabx1S",
  "key12": "2tx5ScBvfcjiXsqJGayvyaTCeatzXZWVkBti9n4LdH91snDU7rKVBf6rSEMs7uf7pijfX6SPPMP2VYDNjoG53jdL",
  "key13": "2weqCGACZL6HsnaA7kiYmeQHKWUQxCfxdMTqLyTrAiFrVv7s4iry36R3vCGrByDoaq2hLNgcYbhBBXg8TKTXTGwv",
  "key14": "3ygTzcby9sRXZU2HWoCJPdAL82jQbfK75V1QtzEjnnwwNQ1j2xWgRgC2aseoYTtiX28g7zyvutj1Q7JHPGvG6DAx",
  "key15": "4UVeq4VUBJ4HybEgjboN1rsYLRi73eRGAvgE6sXBz9cSHT6fWtd7znzoqYZ6FwZzeGuZaNFY3zE6Be6XuDJ2Rntt",
  "key16": "Y7iMcpLMrE98ttbJM2D4WZ1gwHpBoR1ZCe3o4oZufwiLdhUYnRSUfmcWuViCyaqLSFSQgNVtb6uH5PvTRvnrGGe",
  "key17": "2m7FML9nTaxreGsPpmrSpX1Xkm8qxtdTKGcKnAYGsPL3NfoBpTEg1fDvK5BHbhbqLQ344P8RYWDmjV2Y3bcaxySX",
  "key18": "4ptoTgRY9yDEBRr5Acz1D9w9nfDPPDGoTVps79Yrqw5duUMfA5Yzq8xeTJ5ud3qk6d3qGbYKojS5hJBosHoegcSk",
  "key19": "3PTfNFQkMffDwAENNyhBrYe6mjXJ3D3ViBamwUDaSEFC1saEBipQiC2Ct4BNg1KpBQEa5wcK76P5x7Z11RvgEtYt",
  "key20": "4GRJQt96AN2zGJx14WTjnP72DVREG4UqZ9UjG8TemjE4yYG3xrBUS1AA1JfkJSDtcew6hxJPcpFmtXHKhp1eqEUF",
  "key21": "5KaL6jvPGHwXYhh34gpoMTwQbZy9kXR14xZKYDcQ3TfeRb7HtdZq3Cux5o3Jzc4GV2WuJSsePNsFV4HanTycft8Y",
  "key22": "eBpqQkMvuLxnPKeBJuVozPKbygNTkDSKvAsipvNTB17Xuh77S73roAuZ5rZgXDiwcxTV1CQepX3bzVmN6Pi1ajT",
  "key23": "3m7ucuWjTa5ZM3cD7QSojDmGYSySRT6RbwFjouz8PDzGbR7PxZw548kXX3WDXqoUHEGfsahPdfMNtUsHcHySacGo",
  "key24": "34xQwLCXabtkvEDoZbtKUycQPahj3UEfbEc287HzqEkjs89h42cbBaD8Hg772FjYVHEq2L2ZPcLBfBYLLnWhhKUa",
  "key25": "55xFMZmMpi2gy2WJdKddbmjcXvpV4o88EEkPogcaDcK9FMcHFqk1r1PwJdNo8jQUc2fAJWnNTzaVZzzVaiE4pyN9",
  "key26": "41rEfW5uBzLPkaREspYWrzr3fqG45j9hyJNLb36ycvpYhKmBadnPBzxwnyeaS35cWGVXnGt3bGPCVsQ49GYBw1sm",
  "key27": "5usyjZXdr57qnm4xGp1qYxqCcKQVjhrq4RXYWNoqEAqbfWmgSXLwLMSPaFZtULRCHqUHVaZxDB8VZQCYgeun6uHv",
  "key28": "2sD4pZoqEqpsAACkznYu1BHZeq7jPs3VPk6vrVgWcxBpa76ZKk1BNxcsnkzWRJc8YvHkUpbaX5wLTZRPa6vJxQ7e",
  "key29": "3x4njKfxNkrzrWxHxsFrb6XDn1NoHEK7TYEmFw3Es3Sg5WgpSDeyjn4NBXUTULvLaMnF9uburQT1L9k6eWVS7cKQ",
  "key30": "3WDfsRSb2hLiiLzLih3hVKKsDj3HwizzaNZQarV6fMiCGZf95LqdHStisZVvfBWB7wyCaTw4TYW1RBD3yxmFSmco"
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
