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
    "5BUH7QDR3EiHTJuKTsdWKsum6i1Heh1MkQmPsuhUN1iSq7RkmzuVHbc1XtMxj42LsQTRAuscp7JApfLYxPkHdd8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdtCLfZmJ5rjEJpoUBDdUkkKKtWry1kDowh3J6P8q2Ag1Gzkt3qGWF86BkoTyxQBL1f371wFXeRucjndLXHpwuw",
  "key1": "2YRvkXoQQzRdPttc6TmfN1vfVteUiCJCK4zFEW7CNrGRjEjVAZbtoaxfRffK2UPghq42VkhVKorxw5647AaD7jVo",
  "key2": "2ZiQVCUXbp9KkoH3zwTxotKJVhD7nJPipcvG3LTaob4omVa5gnWwtGs7Eqye7kdUNB39opigFaznHavfxZ8eoA86",
  "key3": "5XV8cKsKyiNXsMu1sFv4cfvzsp6tiJMwDKpQLHjhTneDJE6k6V8NiNxAGexCFwdDrxXRC9jqXFZEjJVfemrr6Bs8",
  "key4": "5k1pTHgVTTYxCCHY7cG8xK9on4WQzJUdMrfVZHLgJZboCcxCfpDvh1CR4i9g5m5ebanyfEJjzSp672pAdcPAGLHP",
  "key5": "32RssdEFBu6ftxcB2U2JvwLZDGvvm4654sbFoWX6cuRf8CpdSX4opmnzEw4B5fYkNVAiS8P792YxM7bUidnHShZ2",
  "key6": "2fgU77n39kT4KWAgwrzzXM5o3suiD9QNAkkXsXM7VR4ZTysGePoJu9m5ZrSXABvvfr6xzQ5kD2XGC8PkADeSEQTS",
  "key7": "5vEWGYAWEAZ2CYXzxi6k9QKy6AZiTYMpp8PKK3n3sLTTUKUahVY4cS8B4mZ5ZAHuBGfWMwoKpMojZkgrT6kM4Kyz",
  "key8": "4J3Bb7QdEkMNeV78hCmpEXYxQTdRUZWfnmN1URpms7VX8ap8r5p9JVgSqiqDNnuVNTzpQUCpXb1bmRkDA8jksZ5o",
  "key9": "XRxrjzGSjXZZuuijsXs1uCqrDEimjUmPtX16YryzHBYzRgSXSAnkfjWEqMsrfnvrbaytgtsybsVuZCNGPoceNaR",
  "key10": "35WJKBLkPLyxWsoYm4be69mhYzrmHxswgt8LSTPFBH2vutU3LSmSZW7oWPs2jN4mQfRAMncRaUNUrZZmyqxYDtH1",
  "key11": "XRwim2tTe5f6L8xWQm6utgFyKjYSwsZsc7sqaxdV5PX1roKd2WzsP1z8vzyXLnZHV6TrGDJQLH65aDZi4yvdTVJ",
  "key12": "3iPuQPRgKTYhC2QCvy1WuQyjMRwBxWaTKFfqbouVWmwaFW3eG6dk9oNgXQBybn3E7LJXhPSZdSd3tD8rejvLhTay",
  "key13": "Fxigg5A6ti2VwkWSNnSH7S916eoHT4e4eefjcyCLwT9e4iznC7rX4ytgv2Lhixyqru2CEsYarTFLzAfXnSaD5yC",
  "key14": "4rsoXQV21MMxAhzzkmjfZ8YGgZYfw2WNuJS2G3b5WCbH18XSLAjafuDaDW4oQYhAEwm15pWc4HYbsocpfNF5rWUR",
  "key15": "3H2MBCciNvuWUk4rR23ZLc66cjSuJRuvFhoaPwjoBnn3hBfp3x8ukEbVzwjgfyGSjzmQZ79YfzQgVWkwts43FEcw",
  "key16": "3oNEserVFqvAxX2znBqfmgYAX8GZyWm5j9826ugJp6d9c7o7pYU4eGZxfSywxhakfvcE5LxxzVVABQzVzx1ou8zW",
  "key17": "3WQKVtRwj1c3aa6muRd5fvcAicG1TSPQCAVJRK3s7oWrU9qTEBzVKVEmBJNxuPVGKfWETtjBTfFD6S1RAan4jFa2",
  "key18": "DgU69AUnLSMfSdvMs2ABmckkYNrbD6k3y39q1cHvrx8GqiE4PFwVsYfWawcZr5ND7JJYpDuqVcVdpXCbYb3NWgG",
  "key19": "5taRZLQwGAFdvPA7jgRXzsGirYHK8Tgcs6fyhvGbCkBCrzTdNzdZ4WnxheZeyE61tcsiCYViYoQEZrXVfUsWtqPd",
  "key20": "57soQ2TA9L3NJxQYg2RTaUxfcA2UqkwTDcsjt4g2PCy6CvWftAc9vsjKqEAGvn45cy3UC9CE4dcXwnAtVUwXwbMp",
  "key21": "4EjMJsuw4AznWMX4V1pgXQfgCRRAt6GjqGCJvU7mzrXGDTNpd6iK4qFLbu1ep4ZEB2yA9rmuYM71giMaU7Snvwxf",
  "key22": "5EtYaHbfGEGUWT5cd7TSfJQG25wrVPgFkYo3PjVtssK5aharp8He8iQGyNjDjEZ86CHwpaj1w1T4BeezLhgZ3wQd",
  "key23": "mQPNjtgF6zeoAcSZyM3rukHF55xpaTP9eUr1Lbd1sEvYdDZTUpBc4jJQuA9rkBpNrA1Dv4bYT4Ere6UALUE2M6u",
  "key24": "kACjiHCNU3tDanF4X4wBJ8KuRg8NQg2A84WDnXMv7DkKaSpAZZ9DfQW3hqZfKTCiAhKHUnghRNVcTeSL1htuwYr",
  "key25": "5diLDddfaGVX2SeJpShEuiwN6qhPGHtQ6rWWKGyUkG4e9Jwsv6ygWoodBP6DNRYNYZaKTWY5ZU8A1Z1vA9KPk5dN",
  "key26": "5sWzuCq9uRSXhiWw5SwhF5dYfU4HDgEHvwojqzzMTrvbRqfwLwfKBUHQt13FxsVo4JN6cdKE2x4PpTJ9WDeJPeeW",
  "key27": "5Efgx4CoAbDRBeSyj1KkaMqM3jmbiSAm6qDCs7iEd8xDLNyRVyqb9MoeZem3qFfNtvALcj9bi8kzqWfhyf6LApsb",
  "key28": "64cGKk8onqA8mt5TFcWgEK28rvHj15YVBcbY6U51QfB7NKpX7g2kN8tVSp5rMK8NA3Adr4YrbrxWbWFQBytDNcSH",
  "key29": "XRa8WhdasGqrN52AVGtcyss2vLuxxxHnT7w9iQpGhJ6DKBKPP7YDJqdPG54pKPPMbyAERMq6twEvyw5Wn81toQL",
  "key30": "4dKinvLihdXMtUFppXHUmtCqRQV66eBzHQTdLJjFij6ncs8qm15csEYQxpYMz23ui99i5S5mu9PHjjhijq8s9bWf",
  "key31": "61YkCgHZPXnu5XsqgZyw1u8uo7CYZeMhTytC12GnPSU2CLjDr7dkZGHi4WmafGAeyX5o9te8A52NxfBDicjosifZ",
  "key32": "eyMEaZHwJEoqexfoX4GtDh2TTvrAB6jrJMBFWhPwS5bKTmdfwYSs3fc2GA8925ZTCwagPAgDjDqE4sRdEYYMfwt",
  "key33": "5rC3jkyvxrwudS7gJ6tx6MfaiaAmt3kPUTiGvfcsdTfcUiEPFgzwppttUZkPPz8SqVkJo7gQxoaSxCZDyV9iFJ63",
  "key34": "ybqrwBPDTyopUxFhntX9YtBoqdYSDYytVs1rRp9MHx4fHpicfUHnAQcz55DvsuAz3cmmM32VYXFmEMK8d2syoLG",
  "key35": "4UjVcYrEpo7rXwrUBJ9HnQEarVLPs35kXTy1hJUysbuJMz6nkFh9EB2q3VHeS4oMbx7pWuLFH8Exx8F9KghL6PFQ",
  "key36": "4t7Urmwto5f3Mqep7zqSSKDUTFwzhqLtHnfNCcL3wvpR5juKSEGr7xLyrapSVFxc2YAiMtQVFCobLLWk8cEKGFBA",
  "key37": "5zbaXWzp5VFNeFNQByB1Ns6nkEpDA2VPPLb9RRXbwf5w8aNyys2MsQUTMKCApA1iCEMJJ6EGTMtF4xdShrMX9VEw",
  "key38": "42SBAv5wFXkE5fTtnSHQW8ceoVk3S5JkKXENrofMnk8hGnxqqxg5bsMKAtjMN9FmNQ3YxHpQppo1U1FHWT821TMt",
  "key39": "3afJVo9wSkdvXwdEKfW4G511msW6aynWCARVNodVDpLpG8P3GoLc4uDk1G5hGyGmyn9SirQMimfaHX15ZwTQ8UvY",
  "key40": "5KeuBd9MMVZHs8JRF2X6C2fVTHqUf13SWmR7mU43bPSPsrPSzKD5fMjiuSvGGvVzqCEudeDApyQmzqjRSsbGxKUx",
  "key41": "tqUWHukm2NZ1jUQn4Qio9ouzJiE4mM3vZF3VKGAULrFEfHg2w4zy88MKLs5WMJ5EYP2aLHodTWMg1PaaDHmxB8V",
  "key42": "iJM7KEfdvjQd8JnzovtnZw8Yg6ULKRJ3Udd9tBjuXaUAhQuS3Vh7nh2NgVywxnKTWBEtwsyRBCPVPXTXZSmqSPt",
  "key43": "3oie4gAjU4HTF6oWGH4Jwep7vmKRmZCSVyb8sxnVjJUNuJTBfem8txQf943KynjcZrxqgPD5YxM9H38jrYknDxKu",
  "key44": "3VKkphx3uz8fPZr9LUTSbHayiLTJVUce65R6WpDeysZyoXwNPsqDW6w4qZUeBeewTH5qDxQyrmL53DGxVLnSNGMH",
  "key45": "5DpsMunkEkqvvyh6fs7481x2gVuTmKfx9S5CvTPErWKUJc5QCs2ny7kmp1BzAR5Ln9D3mM93VFEsCWFBt7VK29dZ"
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
