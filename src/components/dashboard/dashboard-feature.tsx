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
    "2yjySjf7qruPb3jb4kEgAoDFqKMQWSnipq8ywMkrwiGffp1j2oZk57ygv5rZREAErWhNWQMMpeZUYA9bBgKvwgNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfSG8KzEBza82FASBjA1JeoMxCdRkEQfjyM85ZFSTKj3T6JftdahDUoe6BBQZj3bFvSG4qUNSeucbm2kZVE2X8B",
  "key1": "5r4YUHYoyeM95hvsLkje34vCMGKdVY87TmAD9rMyP7HyDVPGJ5e1SBX4yUfKgSkgnN5EYTpqL1y98q8sXQPy1DHV",
  "key2": "2HDToSW9GgXmKjqCQV156UJ91ZE2S3ZRfYys6fb5MFT199t4ywhszDB9npjfTTP5hvhRdYPyMcSCDetqP4zoC1Gh",
  "key3": "3A9n4a4cgmXTS83RRTJkxP3WM6sznGABCPTaB3RMMrL9mqMdiv9KJC5BDiUHEH1zCbiMN527oSyAUfpCQFRMGq4a",
  "key4": "2FmtyWbMnmVQck4Xz8fW8U4EEGrF9XKUJvx9LLdmPzx2wfyz2MAK8MZbCNxPQLgbCk8XZjGcwysbvMd47LEPBJNY",
  "key5": "2Y2yFnS2aHbGqmYFQb8nabVHARuEPYMZ6QCocWuvhzfmr2GKwASViZxS3eoVaM1dJrmFFVGK2AKgydMmisBzrPk3",
  "key6": "4kRxzUfx5vs7DrQ8VW1UTNPdd6wgcVy7fq5oAMSUCe6ULWM4dAEhL2WL1TUBKXsFWDJLxCgahXBV1gdbj5xSGYry",
  "key7": "57Ey1urnEUQgXn3eXj1UAF5XUaWd85q7zyTGyxgR9rPXYJohtXdXWWrNZinavtnUdiVuB1FyTBsYH7ZGwX9Tz7mk",
  "key8": "5VpnXhCYGLabCWpPfCGQGFU3MjH6AusGG4xLeZYHedpPdRPNwceXE5gXTCMxpWN24JDVmi52cuWvncaVgrzkG5HQ",
  "key9": "5dvegHimHtGt5MNwrRuptE1RBLhaWY2CEbz6E3r1RP65i6wWe8mtwbKQR2NBTfpSPbTzRNSeiS6A65DRnQ94Rgyb",
  "key10": "4YPy5GMo6feWD6RowvHicgJbZzWFoLGhaWMjoRhtwwhnDYQiJjxUx6z6mmaaLWSRp1yC28FM8gX8TEQTFgcK1Z4F",
  "key11": "E5mnrEqbtktUt9EXN7dUA4k1d776VyeP8SMaJVyPF75qDJt9QgUapt6WRy11jHdwAFZxzdCPZVJMHznDgE4stv5",
  "key12": "thHcAd6Y5Y26sPrTrZ2S9MqWoEZKm5BQKTJJAsFEa1caCzRvWhjW8TkHTFcFxf7RuWDwvAhqZugA75VhY44nnCM",
  "key13": "5NHaHGFmH4ocmNopRDuQmsT6XQxNoinqawvn7HavpUiKoqayPj1yUbXtP43AXaNYhuNkPs7DAyCDkbhgvaUtmZaY",
  "key14": "4uyR63NTjTPCGpAKd4PJiJSmECQgXxiD89uqCqQEsgN5N8Zq6QqM5kmeMdXbtDyAsYv1AkTmVWXBuVkb3vrPtEUy",
  "key15": "4epfSSPZoEFdZU9FmXeUoiNB5iYsdGQfEZovEstQzUehWEBMc3r7gmkE1tQGALrZ6UdQb8NDkZpTMN92ME8WxCf1",
  "key16": "3Q2AUFdULsnMK2ib2ym6RWwdf7o1PmxkoPfkvBgnQbD4863kKsheRFyzzwgyj95KkYVpKp3stKUeJZ4NhmXUK6Ke",
  "key17": "5YGQ1vbp9SLfbCxvNAt7pXiVsEjBPzCpLFG2jMUQ65ckV3CpTReCXHXhe2PfKjEhQki91KcrnoTRsFgvLLahWnxp",
  "key18": "2punkd8ENJmR3YJZGVSSLgE9W4ppHTMXTYT5FXfSNMcuKRfVJuGU9pRbxAgiHNHibDuwPQvx6sADmHgWTdcZ1qcJ",
  "key19": "3aB15ZshfADDL8aDvuWLKNPL8ScSELDUQbAUxj97mkN4QezowQBPtoYoy6ANUd92pt85pmNBoxKVC94mB8GPszLp",
  "key20": "4uWvxTwg314MYyQFLX6SD2V9hTunFSZgxkopTJfxPiT6PVVcz13EKjj6MCKvi1uK1Ppt3tsW43nTvSicfRxodxg2",
  "key21": "DK3eMhzo5c4gfktKfkV7stVDtnfxWVQzL8jALjnYr4mbQ2EkUg3TXXyUbaKUnfzajd49erT8Xq5ECrJabeeRA3M",
  "key22": "48E2JTnuzxegJgE1sKzdXDGG4ixiFkqyQP1mBXjj5gRUNKBhM5QWKYoE6gAZY8eFAywdEbCQgmCgmJmsawQyiWXW",
  "key23": "442b6byWzLxAwGJooxMetv98YQ8dRWRU4PFQhhDR2X94TpEGXD2ucMdAaqNoALaPtmAHhQCmjJpWXKFjuFa5f8NP",
  "key24": "4ZJt7kcZZ7ew38enAZxkTw8E3nWr9UmmUG3yVgpLFnwB69zc5sU3XPeostgEEYf3mgWXWU7jDoWL7qYmx5H66d5D",
  "key25": "VMSX1aAci6FQSEonmR3xSfGdEMJttMvjYHb8sN1R882uvVthjcGnDWFSmqcD7kLzsSZTfRTKgZoa2tfkZKraosb",
  "key26": "db6Z9jNreSR889zkA8WQN1y5kwngaJQqLU3VRuwz8aRStvi3E4YdnLbuxEmkQ4YqvpnnK5WzGX5jhbUU7dYc3ma",
  "key27": "5zggtctv2LesRYkQBPkggj71wmDwdTtcuzCSdSYufCk2K8oC7kNbLq9yEuSWpYhgssLXi4TEXX6gnNNVMLc9i9Zv",
  "key28": "5szhPxC3B7Mxm5Cig2FXGdmAJBXWb7vQsND4jKZ6LdbC29PdaxG6EjsmM2sJSQwqBk6gDoPWjzQzYEAHrfYXsbHd",
  "key29": "2onP9qJDcRWw8DYCW9aGPjuiQakQi71ztArwPjkbzmZeST38Q9r2u2rRbYqjo13WuRvdnWTN4zqwYCTYnzWgT992",
  "key30": "5ZBNfVpXGFkQS6Ef3nadEppa1JuGbZ98VsrzMYX9kVyZYCEH7njEnFKzuPH45U461JqbLomdYpDDfwCH6wgefLDq",
  "key31": "4jcFX718kT8dwfHkkNTvXXnUihPP5pqbWcaeJbAVkwWCnaFVPfMsYvsGziTqDyNJRrHiMSpUzo7GSioA1D3FTMFe",
  "key32": "4RAnZuofMkBbuDdRgwMWVuzTV1orN356q8Bz9dZSU6NwVSqDjwuCvzJ7gTQgts61znAsHbhp67aSvCvF3B8Zovof",
  "key33": "22s2a4wGzi3VRwdwDEyDd4VATrGsF5HcPj1EjCr3iCrfSLJqYGUMRXYfcYb6kEbzFJ8WUAZeCRGK2VfaRbP29Y1o",
  "key34": "3ohnwqwmtippRoDQGcdTbCXykYDhSQPCjrN3FkrVHBn9WoWwze7ekZhsyLqcjmAwANSs76awQ1PT8QdegswuEfec",
  "key35": "5JAC6cxg8yZ4fFzWphDv87F7L7bdQQaynLfk5XQzyFJwcxwi8SRnWyJpM425Tudi8Jt1pdar96WGjxaM2KAQJ6KR",
  "key36": "5S2N8WVzdYqf3RVvEXBemHDXmrhpa5KDcHQk1e5bB3nqtSbx2HyqWXHLeP5jBvxcKaU2UG5JMLydtQf76LW9FoYP",
  "key37": "5DDAu4CVYURj6SCGd1dhfEPnQ2A1Mw5E1Zvp3zzPpFnwxEZwyVkMUzjRXoenAoNLiT1F2P65GxHd58esdGXWMS9o",
  "key38": "am2dyHLCTYtYAUbtoh5UzXCBkNdxTMJUAT239r3x7PeP2v6utmPoL4yXar8ZaLjUtDtJheDz4ozaiW511BH6Yxp",
  "key39": "3eeBG4bxThPTuUdmA2Mv88CTw85SCtumsTe2rqiApHZzwejvFTji5pHke1zSaFVjzN6Yi79MRovip12Tvwddfaoe",
  "key40": "4zZh8zZTdFqyyE42nb3FVdHEbr14GWU6DFhEgPRRRHBqAfgHqdnkk1WyUSHoPAPXoQJLq7M4VfYSWiByoNWMCdPx",
  "key41": "5YSwuLbVZCiteKV1f6NogchERfenFJ5jDkDn24aHDoaV3McqCtSvLFa4ARosouyDR7bUXqetjqY53UF6ymCphCdv",
  "key42": "3997AkZuWDzUPGVNn14a5QCiDGtF24XzqDvTuzSWiVMFKM3KiLs2Y5xrfUomaprf5uCDGLEd25shDESgskfYRE8j",
  "key43": "54EHsbVsZvNT6nAk5SSKYxMNkVpR2hsggbShFY2xy7jq787Wyasn19MgMKwRfayrk3Rh37zyJB5ewG3ppKxxFK9L",
  "key44": "eLtwHm1yjMZMHtNFuV9hkaMDn9ejtf6Aiig6pqX24GJ862Br37exubJTpvkrp1C5Ux5ixn8yEdQkDaTSzudPWTc",
  "key45": "udqeKCvJHHNeZtBZWaMrEkifUezmW4Zs5KGRmx4PpPyJEBWhSYBYcc58ek6QejcbniwLMrobrZ63xmfwHFg9GrS",
  "key46": "2mbv61vnwbhVdP1CzDagKt6njbDwHjdtzhFyk3XRH2bFioALH8CYEHH2BseStjEjVtVENBvjDuErhTERuW2SLEEF",
  "key47": "48W342h4mbTMTjcXX8KHjN2zVhHD9sJGhBHMiA7jjHQLM8Z47HauYA6iUdxLq5yTA7ZfL9Rqf6hL2XRCPF1uqbM4",
  "key48": "AP3k9C19EgmgWEQwLqeKfuBK3e79ERUeWsYkwzizmydPLYrSpWWRaXXBUU6nyjNx7179yj13rWtWQfRysZ9VPBy",
  "key49": "bMpbk7LbM1AVVpRKuEE8YcGn7ydC5SbKDoXoLwcTWqus5oMBVdYGwohKK1oi3NdQacWEnqvtTajc3DYXYchgAgp"
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
