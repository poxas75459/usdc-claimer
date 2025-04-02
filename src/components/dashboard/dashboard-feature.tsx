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
    "VQrKjDJgVN5aG7GgXJ5bv9kbbfASWxNhcgoSHiVw99wB7Js9pM8AbvL2tjiaySpL96KsWGqqqdLVHVQ3XASBit5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDorY7mGzvYQ1DQLXC7L6X78eLusHJwK43Diz3uNRoCrLfqPWBsr6YnUwUb3q6nQZcnPtxDZ57LAQNrySTqnNW3",
  "key1": "BQ15xNCdSPSERPLvAfwv28CncHyryjTVEeTgUVfN9MomAe1iJoqsd3AYSg4SsfcbxjnxesxzqKTheDFnMUJ94pg",
  "key2": "4567TtPudSREUGxLkp6CbAbTWSi6P5kBu9uw1ZExr1yUDP784BmBRLkPhAd89YyvboAGGHrAjoVWmhhfCTDeuw6t",
  "key3": "2BSzJuszsfyxCP1V4HLNY6cm5E4qKpSeuBhp3vqzPxsSb2P5XigZpjnAt6JCSSdzuiDfdBB9bzEvutMkEfV2oD3k",
  "key4": "hLUTcCmKqTEqf6e8FPuLBPCrsF71h71eirPKSRzMvrEC42WYPFrkWTUFrAV4zni2Z5c4s23esMue4KGx84dr3Pa",
  "key5": "3eDCNCwQ4qvgvXTd4NWeCQHnyYzQLtm6G727pgybKUvrKGGX7mih5k4mHEA2LbwNuMjnhTTz1Z5YdvhkzT4oVejf",
  "key6": "GjZYqmJDG4UYAQFUTv3H9EgDnMdttARZdGaZakyFGEzZ6Y6ax9y8mRiJjLgHphbGuDTPEzxT1SnAseaj4y7uour",
  "key7": "PbgMbSq5jScYcaxmnb75AcH7oFaB8r5fq8D3AydK7M2uP3i6txw8YkfndkqUXYAbD7voarkN4KBBxSawDNb7zXb",
  "key8": "ovN2hbYqugWiVUdc3XdV5XCpfNrPTMF8Qi8RWoH7eigeDtxtPGVuR9o9qRCDLaHfd6ukVUxGEaMwbwHy2Bt6qNm",
  "key9": "4NwGJQddc3J4ZaL2Ht3DR49QXf3kNPEoaZ61iy4MHyjRcmYfmT2Ez2yBmfUPme3tPGAFpXfgtxWfeuHPsL1jUrzq",
  "key10": "4cTkpoQTtnCrrWW6tCjDcgQvtBZJw8hFMyP28mpGsGyAgLELb5FbBTBvW7eT7tBaBLemEfwNLjo1TS5oPqczgN5P",
  "key11": "5kxkCYnS6LSmSzvr7TNxd8RgXWDZUD7nLMgu8avkCwoAfK4cUyA5WvcNGSwQWJbsKqYJdjLdT32ZhR8uHd67iXu8",
  "key12": "SHN6ZMezQWvL691DcVEsxoVVzno8wmeRafLzAxkg1BA6EfSF6d5QNxSprRkTCAYX7ariKirnLy2b7MXGNMj29aD",
  "key13": "2M6UQvdrr5mkC2v7MXmnirDYM1VkekcyBhP93qCCyCfVyJZ6d8Z6UnotwyzDDsAmtTpyCDmSC8yjVHfbyzFzDcFw",
  "key14": "52YBRwk5kid2X3sBEUmDSVhPDv3gt6pfpFbpBKDg12CA7udt8EFuvJCtte4GxCJRBFHzkkJBCtKsD5aN6A4P9w13",
  "key15": "2PE2fFdZaw58cTi4oF8LEUAjB4nrZGh8aPwfkdykCKZv9CW9yJJPeuTPvbfVcNqwRgHjrpnxA5qtQBqvCkiCzxA1",
  "key16": "3yY7MDNMorSyWHctL213eseBEW1TM5ZywVTwjNTXTgQ13rrwzexmLQBnR85P1kJ3H5VabmGkc6tFYtKDN4JxfrDV",
  "key17": "4SseZ5xzx6sfaN5GYM7nUJm9H6KTBuGRzYNVsSoggkdLHVzZceYxHa1CCPXDxndLxF7XgggDp2nV3n9ves5zGTJQ",
  "key18": "5ihYrCx7Q7BasaJUNVTP4bGyLChs4wukoBe4F9vmB6Q2L48BXTb2zaBtLJeP9Ts9Safxw2P7eJPiPgeCGBN9FAx8",
  "key19": "5h6wPiMJMQ8EUtX7qkXDDEtP1Zq9sxQRTJQaAY8ka6BDbEa4Njjt9Cfiz8QtqFtzz5GkTDK9JUWgKhC1yM8GejCX",
  "key20": "4xHBNMAwspRu7zMvRWuMFDLXukkFiCEN46nwNyXrLySEGdLXJMiBAgHeXotatKLruhguYpPftgLJ8RsWhxvNT8o7",
  "key21": "3nRyiYZbfZ3hjuQqCAMJ3ZSWbjH66wgiCFLSQxT9AKtRVkZgwvFfRdJ3dbyrSaRkDFKrm8XWNjyZZaDgWYjsAYuW",
  "key22": "54dCTKjr13DkusaiMTWpaLWdJTWLXUrRwDRzZEiiPVwMSV5EP77wHdrXPw86kcsKGpqasP6BYCYXTe5NzLbhAYoL",
  "key23": "35qnF8J2RNj5nMTSfJcQxrikpaY3crhMXzmCfbng4MmCkTc7zJTWpRwJ9yiNUrCTt3ovmB9Tf3vT1pLvaCXXbjZJ",
  "key24": "2oT1haePCEAnFJAX9VQj6FG8AvKyq1RThsVurRGYf9ViFsrzRReRrJGhMXqhxbXuqczVPKpQsfmdW2P3mBehpnXw",
  "key25": "GAwMaEFvsZQ1LuJU9s28M5iJ1jy7dEv4WqHDzeF9ihcpaf9uxcuNdeGudNtAZvbXGdFYrbMR9s1E9ySmY6REgLK",
  "key26": "5ywXhzh8fukP5jFHbLDttRG8CUxyxUXSXwro3Dcuf8CWFbengG2uEyDYsEHLewn8MoavmSpVvAoVhRyZysdT4m8M",
  "key27": "4wTCdHcZ8GzRP8LtdZzVxpHjH38csJYYtqe7XNBAMZgcqYFd7SPm6Pz8Wba3Xz7WR2khJcqAEgm2gZzEzpaq7cmU",
  "key28": "2FTYyao23bBeeu9owJGa3pjsn2UPYwBVwfG6WgLGTBzz5HCeXMSTkBev7mp3J4Cv4vU6vLutk3aceLuT24G5RpnZ",
  "key29": "5VnuUe4dmgXdnN3M7yruoYbhUAzcbrAZ6yG4B1YSjqogYjrV6wXEC1qwDgUtLUtKx72ZwYpCB3gJLneyWhmvci53",
  "key30": "58bM9VmGqnrLkFbrGZebLQThYCotkS225fgdeLKR2vKHX92bKHmpw2XYJWvE5K2fBoAZ6soVC7Aqored4MhVSgzH",
  "key31": "5VssC1iLtweVxMRKU5vg91AnydJXjdbkVPuScE6nbZqUDNAR1gMHjzQf2D3UDc97AoEtMJeDqY6Um9FusZjuHXC",
  "key32": "nho8QHK2LVgpKn8nx7qQwHNtjLL7Te2m47gTSxj7g53uk7Xt1dhNst77eYCBK9M5h8GoncpZ2yzx8cQWvhpBpjH",
  "key33": "4NxSGfYhMXgfPqrr43qEPRwyMVKLqhgfSsUGDZkVmhpggV6SZ9auvNonRiuDR3w5CjJbSwMjjVM3FMU62Mp7dm3u",
  "key34": "2M4vUmen7yfgqaonb1wMjcew9NRJKLHrmdw4hk6hG86efBrBdJRz2ctGyRzSQRXVuxN1NdgpoKxQSHVYCS4rNXwX",
  "key35": "iZmLRJR3GMG1cRwndPcP8pZfcpTksP9SeYam7RKgq3uhi4ovEsvmGKuCf7kexS29bfWMybZpHMogjSpug2Noq2S",
  "key36": "65HNAXJCFD3UeMuHx5RQMQrGfbTSDV54QpjErVYvwzSX7dx8W4kNuABrydzC8FTtjfMXZ6MkmmRNB6a5AjDKEprP",
  "key37": "47u3xWwAVi1a2vnK5iVAcT9LsuWNdBec4D9JCNRdprgTQB2v7PmYmm1BBs8ccVrWbcKZFj8Nw4zPPcgH4eSX6QrW",
  "key38": "3Gn89HF3nhWcftHds7wBmDcvmZbByJzdxaaU82kaUaviNPskSnTpnvheCvRDkgBr9x98PUte5eHhomH2R62TGUy1",
  "key39": "34CzmrdEVAXjsAHxbmaS3SKya626D9qrsTyGTcQCoEHF2niNusbfBMGxh24WYG3k9NkBy98VsK11RQ3bcMgTBRti",
  "key40": "2KTAUaFAS4btYsgRiCwgz2hapHV9eobiS17n6cji2V1m92SyU6ct3rL5jSDuyUFFaPUNNQSJf23C12jRKs2ZTuCh",
  "key41": "31ku2SE1twTs7oJwLCyyS8fTGTGtZyvXvamCE4Ngg6tz7L5FPcNN2JxL6hrnqZ2XAPVny9wcWagR1bYib7F3mgE4",
  "key42": "2L7yp9Srs61sBBzVMQ21fVNysewXgAfZRBC5D4pw3uhPsSxyGencpaHarJSrXVgHgkqiZams5KVsmkCA6NMaTQfR",
  "key43": "ESsX8NnWnSKZNx86Zkev38T2u3jLprWULVWU1agdKnHrdmqGjKhs5AVJuAoc4qkHyzHZyuLEA4se38Y4i8GUyGd"
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
