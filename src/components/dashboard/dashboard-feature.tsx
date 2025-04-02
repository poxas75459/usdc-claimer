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
    "5EVPjezw94SmFmAcV27UtHa8zJqSMaffhXeNCh2o5QCJHrj4Gtbij46sF1CB5TeopaX4emnSH1DRpYWYP1p4pEDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wz1GUv2d28wFd1jTrKFPSXhFMR4XUcd9gX6R7ASAfcZv3H4LiGMxVkUVUQSek5AuLt4LBurDTRVewGMmfwEy9F5",
  "key1": "aBSuGpZNuCyZQxP14HmKF8Ak1LmWvxRKAxTskx1YytRUiYLRPqM7PGi3TGWEd8TjCFvmJ5LdU98L67X82DELmBE",
  "key2": "2CuJY3GCCPxTvsxR2E6Z2YUAQYrZva4TbitGXh8hkJLb6soAWG1wzDVzHkSdSiQXvoJT27Nyo1fjFxFFHwerqeVP",
  "key3": "5KQXnsibECHQr11bwu8z9aY6JTe7JxmsjYCtCxCPmuy2Jq3SRwfgwKxP4B23Fqbp5wGksKqkyHj4rhq5hDXqnPr9",
  "key4": "gj2UsnEXke1sLLPusiGkg3xTbaY8uZStcvLX6uggSC8S1is9K78uuDoH5XVMaYRSiAdrARnYHD3K1N51D3xreuX",
  "key5": "hrTZCmHZmfjuKBudQ88EXnHveS3Y8fNfX8qy9Qv9mh5Zx1FihM1R7b8nK39jJ3jBKnMQetSzynnby2CzUvqYrdm",
  "key6": "5ayFHgTnAfRSZMWQex7hyer6U2sY4H27fmMJbmhj6zs12gCXHfFToABekzsF8dVywjBYmgUuqPP6RAA1csFhRvuU",
  "key7": "4Bhp7G2F8CrXtdmeAkXhYarfRzfCQtKU3AWFfU8MtPNm83v92MhMjuvsVthkR3Kf2KejSBgjhjM6uP5UQExJaNxd",
  "key8": "4rmS612qbv1euoQ1goux1zFZg9wQvEp62gczh4saQNG2sVQ5KQDHgjG3jMKWqpoRHbq3EBD1eLkxJYDWFSJoHCy4",
  "key9": "3PHWFLvkZtcDF8bLxy13BNtdisKhgASANNQvw5DALri1HPZJevHqjCAjcFdpsZPVwuzB6gbWWAeXpH6G7mBFRHgn",
  "key10": "639EfxbX8a3MBwNvZpPjmLomKiUv8Lf8Hhz8vFrivxwzfkm8tMpnKmxM9QbL8RaiLfZ53rvioXCfArqPt4jf3kDC",
  "key11": "4efzmrDhiwRvXP4GkoHQBHEdcb61N6yZ2MXXd2Mx1b1MTsAXVicyHmkGx7JTuwpKjoWLbvfDdxRFNKKbtfdGjez3",
  "key12": "5h1woAJsvvQfXY1B5AfLZYYUyPYuH8H3N8BepixuGMfhZ41gVPJjEL1G91e5jVvHf11SwmGaEHDCvywiCyBX1sig",
  "key13": "39KJLwJXBAXQ4AWZYEJamHMBmrjac6ugfSZ9ZvpVSE4Q3R4jA6hyRMYmVzNdDwLeCWQpJo8qo4PXA9j2tfgwy3Y4",
  "key14": "5CLHhp8KkWh7QYmsihYFHnjszAqr4KnfZNVBVaTbA1rviP9CHrghcfr2UXdVoGj5kjeNKAHyAvYaguTh4u8hShzM",
  "key15": "3FW2ShxPpmjiuTvPWy3ve8FPAdsrcTbT9AoMxQEW9JYTBQy35a3hvkaLKoymDH443PCZ5EAAVSqucxwDZXGN1Z5t",
  "key16": "2EB9kiHyomEVrwTmC3uUKNrAKYzhE2wnV4oqchfei5XZqg2zxAf7PYb1nybpbxhZdf4AYu3NPYkkZEhRKJuiLNox",
  "key17": "4KrZxnshGjzoFrGS7SkJqxsEWA12E9To6T6HyndCMcGosp4rvwRUXWaKGQbtsQrMPG8ryFdxHHgKTaMitVCQCXtU",
  "key18": "3wzrnCjeCRsXkF53pahYi3b7qxNKPPpzYoVhh26bpjjRcAmRXpXCwWmDqF63MBN4yNRxjxWe5F1MZhzWsnPELy6F",
  "key19": "WRFCsWEi8o85wbwgVturtP1gKtKzaZo61mYUJTqoo88kJYRmk1mCaAqNi1SnK3Co9mh34DNYQ6wxqUjvc1Sw9Ds",
  "key20": "2Kgk77bD2kMzf6Fzy6JmWxybWXNznxL4sRLGxaj5u81uHvZ3RqPzaVrqjZ3PifxvawpgzYCEBUQkuKAb8L8dvRNs",
  "key21": "5rmvx9fZydQTYdGB6VRrjvtda18NbP1oZ81ffndhajjVGhhTchVq1GGEBaG3Gyz1SY26feHmvUrh28hUuaDywUCR",
  "key22": "3QSutovDBh8HzYnuXSrRdJphZzqFwYErg4yp1NY95jNeViR8AaiEspHwt46pmwWTebmG5JDQZj4jSLjWFrQ46HXp",
  "key23": "5TM6dJCyenz2PQF6yWDHfTarUC5jvGKYprzcz7Jcnp77pAL5YzF5tnwyKFnKwFMeECauweaWXbneCy35WNPR5QEk",
  "key24": "zqnyELtUNNZHdFKyrCd6hv19Z96acFH9dWraEM7J6xmh9DEYCrwWTDpX6MfgMWzxo6hTPcPucaaemitJHSF8sNz",
  "key25": "5Tn16deEB285MWBmkRvmp8pzRAbKtbbUaNwmtYHvZCBXaGWpwezA4r9nmHgu95aWQQVJuJtEn2ZoyZsaY1nw47hc",
  "key26": "3nt5qSx1iVT5AZ6esxUhdTQLDGAKhjYUUYK4nyRdRMiLRPMRqcRirpX9gdgcvpPAAzDEx8hCrnUt33xDH1sm4ivv",
  "key27": "5D64QV7yrpiux3z62CaHk8VcMnWj5gqPWasJHps2GKcMuRQbq1nMvMLod2D7Lf4URYABn18NtTVqKhx7ByxjdJAp",
  "key28": "2Y2zKKEn5gnNeC8tZ9PyfSVEeyPiRvKNqS78WLMkzaYcVoY9yVP8M5ihcVLaPLxWHRe9nXDgcCjpZJL4AP7emE3C",
  "key29": "4Gv9GAvgF99MNLwDrBaa62voFPeDie89aSnHchQ6AiXTwo3mrreji6j7V9akdGbBngat9kh1beNBupXoynEusXVm",
  "key30": "3gK6KEPMSL3JPaGrPmmpJA1VRoxeeL9oF5HrN1j9BLC1UmTj517Zz5bMV5sMe7N3Caqm44C6qsgsJ9XERUEBHJxG",
  "key31": "5GjkxkNhkPN3ez9tnhEWC7aaoJPpj6p11XXnT6W3xcDELBYhkqwMdANCm5N4zHZ5YWiv2y6RbLF6QaHNGA8XcfPT",
  "key32": "2Vssv7FbvX97BwPnbiGRVW5A9QbZxRNXrsbJoKLLwJj5QptLVqVdxsMsFsqWWshVfbyVhQMexXpCgAzKfrSHt4vN",
  "key33": "4g37KD6rHEvog1JmSrDXwTG4jj27LWNysxET7fFwaWxv9qEhjyMuqZAZ82pUpRLw2XBu9CWA9FbAWK7KCEfrixkK",
  "key34": "2V6VY5B5DLomj6apcZb13MXxkvndhEiYYzJrwTbPmkBoy4AuGqt9TqEHza44y3RJCG1LXJ1VVmRHLRk9YBufQqxQ",
  "key35": "47m4EtqUncxkFqZmKJPX9Y9fUdFcZEVdEkcV2CifAgyN7PrpDxiq4i34Bnd977iQT8Yhz1b73J7UDwhkmQYE7SV7"
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
