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
    "3gKpPkqRJCL998KvxY5FXJD9iep1RxogLQHfpQHxS4A7EjWaNzdpi8kAc1PKYbgh6gsW4RAEn5ZkQQGkRqHU9D4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jD1Mw3bcb8g7BBUVQqDSnyZJoyqWdNM1HrzqkVqyRUGmCmhCWWPBp4pH9tgcSbHiSSuoRq4YjmwVzyoisX8sSdV",
  "key1": "4mKEPqi3ZXFeHRnjpz9SXAqbweidkQoQ6NfFDcynNLh9ioHvADihVHcB6BckxAQ7yvvUFEWnuxLdZSFhvUVZVtja",
  "key2": "2u5zV2CSyp3VMJ8LayEhM2WUp9fU5k9Lu4Htzj8MNVNRLCcJgXCniSQhMYUVL7S9AyTuCVrNPzu8CML1YqJiuSe3",
  "key3": "2GRchpxko5bs56sGDZLoeCV8N4qH41DazfyVUYdL3wQgH6XpYVgMNUp5jMfuSLZ7Miiibv67hd4ydqUC5chH2xJU",
  "key4": "2XKM7m4UvzghAjsADt4odCUxvvhSEgZHzarrWXpcKuJwEzQcUA1xr88urStWQXp1dNHsSBKFaz27gFJKwxDqcqqV",
  "key5": "4GtwDU5XTV6zmSzeUHpaMaBFhgos5tv2dKFq1zHnFgeJdwVJgnA7Ny1Lu44m8xjkBqeFA3L5m7XvCRE6HcyGDP2Y",
  "key6": "5U6VgYbyng5aurqm9PYiYWx8cGnPWW6bBPiriTESeZnVo6u5STR8KfQkCmM8TrLVwGDEe3JhuG8oeTGdBSEEHqfT",
  "key7": "2biRDS8QiB2qBV7wwYtkSDEjzMZ2EjoHdFXkQz6EyGAto8emyvXJzKRHSpyvsrRP4djUZbR6zVSYeqB3tySG9s27",
  "key8": "63sdYHBgWALp1NmDn3sjZHgTu4dMjudQoDqY9tr6cXLfMUcfBex2EZtJgLw8dLfMD9bZBUN8GWW7eXnNPfVawCxv",
  "key9": "2qYfYZ4Kz6g1f1EpTQfpqo7eGxiNc2AGrMiAtugthpViVVajvGYT8gksoeVZsvpJSrAECvDfFmtwXgvjojbQcQgV",
  "key10": "2sUxLyUrFcABHyUgnn8uP13yAGZi5QaZovCWY4frc3aiayuLDre5524xwQQss4zmcowEaQYNk61uiUxTSrBarYcD",
  "key11": "3ctfEXQDustX39bPHGahTNLafv4xzMxtBRchccm8ah7r2r29Nej9oF1iKdPrHnWe251A2NvgbSpVVwQ43DABp68z",
  "key12": "4yj9Q1bFSmrTBcD21cNGSeqMUUBr8C9dzMT1SyMM6VS7PjyukykeNtJh1dtGtbYHTkibs3shTPrxKPokxKmLGaAQ",
  "key13": "37fqVDc36pq6Y5eRhPCtNbtua64FDaKv1sYkyvD16XdpsRr6X7M95WSNZqLGwyVBgh3zoKL8nBuK9RHT46QmKWn4",
  "key14": "2mDsPRenSd43oCNFchP6hNj93HcG3Autckq8Xr8q2cDMc1xRejSswePz7xVo9PuVK5f98Wj4GALEFUskWDsmM3qc",
  "key15": "3qptPerNcpqKeKHrKethuVaZm44osV54PuEd2LVpabuDwwQx1VtGUysQeWWxshiXKGcS7omZ3XY6VvS79ThoFGNF",
  "key16": "2WgR79aZHFQQ7KBFg7XVFS5D97pPLY8eFkuscnZK3DzTzvG8p8A5B6sR5soi7KVBPm4jdgdebjeFtPAqUhBB1yKP",
  "key17": "5A9VcdzfXLE7DaD8S2NuNSzaAPNEfgNDVnnfpTEVL91TdVpoCuHxVo8rS4sAwtubVbMVrZqu4ntHUYmDqcrsCMCy",
  "key18": "4u6G6v5b7jo8LdkS362mCUaiVhPzG62Pn3EG9fhS4VekBXSsu7c3CMCahR9eHyJtDQ2BoCJpN7xGcge1ALDDvjUs",
  "key19": "TJKZuvRqT3Bb2yXF5uUQpFKQb5LYHj1HVYhkvhppFNFAwsKb6fJokzjozcT7hr4AEabWBExsQaLZBuGVBX77Xvw",
  "key20": "3HzDwPMWpDrRuSELbh9zJTALckKTLvZgpCqgazASZRiJcgQfe2MEXPpNTV7aucdqD2uQWDU6zMw7zi6BUAXk27LE",
  "key21": "4c45uKjJ9foTGqWB5HXUJbRVZ8KYTKocpK2YcoLGiuZUisEqrxXNrTK9Mee1Fvcq45eoVv3SXcSJqo4JxvCBGCDs",
  "key22": "5epDUmWKLzaL5814jsGp4WChrjXPcHd58Gkm6b6S1aPTmysDQGG7Pc6XNHg2yejiKgZfvLg5AA5vke256k9qufKq",
  "key23": "3d7Ler2N7KRfoNgyfJ8B8jkguKG1UbThZoWGcsNfijuLeqhyP9nPemRush31z1omA2k9ah3MNu2G6VVL6A4wUfo",
  "key24": "4EQivovrrxYoc9yGsmSmScyYyACuuX9fU9txd4qgPKRvimR5LW2ZrPMUohog2kqVF7EDAVuwo1iix89tkFppiPvH",
  "key25": "5yUeiYCkxogihdGbJWecDn2xSvhRfb3wSBDemZDTkxbuwzUDCRzLPiBL3Lp6K8jUiiq8BHsLC3o6C4mstojrTBRJ",
  "key26": "4sVtfbBXqVaKWYUsTfBjouAMALSAAoJtQk9gJzDQcnNLM56XKKAzV1rK3UJMZSotPkSjELkpateoBr7Un74nxuqT",
  "key27": "4Bary3Pjv9JCaG9i3gax1VH3xP6hH5ksaoUjRgXw3S3ZSUCuVCYfEsGfc9BU7bQ8a9cpdGQWykrR6bUkbfWPJtfM",
  "key28": "5Y2cqH61VqdozXKZzmtjneq5s8MFtdhVfbmoYaYTWsrpEYokRiYAyCif3UyNF3cPzzruRME7QsYEbiZ13EeiPkv1",
  "key29": "VfRvu7qbSEZFRyaiaSKt9h4nDkwZYKaPKJsqbkWWNwChiFbKZe7T7sxmoE4TFisqUtvWPvizJFxtbyQbxe6fgFv",
  "key30": "3inYb9oxuEDf7THiqhxianhsNU33ARVsppWNaUrC1GxEeUNxSjRcx7mmkzrmAjRj849fTbW6ZiZF3w4qWzi8kMhu",
  "key31": "39Wqj9EJ45j2MUErRWV442ZQ4ppUx5tATfsPMbmLY9B52AME1zCCrpBKkK9SY8JZ1f72bm4jpTU4Gj9Rz9jdAteu",
  "key32": "3YuQk9WN5QSLgDdS9hc68B9qnab2EECsNAjY7LsYUYRxhEsBptUBRejC1g6xT3a4ohwgGuNWsj88JJpMtiDhT2VE",
  "key33": "2LPjPGsGth4KMqjFgfcMciDuVZFBbDegUNavdQRRPUf2CWd7LRZPyC5F4zfRWnCK9TrcBwoAwfi8NNML816dVFr3",
  "key34": "5SR9wojQBEof7VpqSYoqZAkfxsQoagwEV11ojtF9QFuHNusRcco1RWzYMnQEHkpHGhs9eXyfu961cjTACxQ7UMWQ",
  "key35": "4hWoeA4H7VT5mwFZbPb24HD4QcBQ7jXdv5qLghhaHQxABsTwgX1BTWPcXS3RFEoFaksqrGa51vr22Vc9SAKJk7Aw",
  "key36": "4MJ3ErmejCj1rsSMCfa8b6nJz6LWnYAkiNxu4GqE41irff8jqK4wXcXedb66wM7A2H4VuEJ81f6DF52HPuMTdupU",
  "key37": "2aesiU4t393aB3SwcHidjqJmS1Lpb9oPgNSSTeHoQerkbU6waQtr7SmCrTv3UgPBnfnat7c8mMH4HHAPtGm7rnt",
  "key38": "ruWzNzFJeA8QD4bKqcnvYBbYCmub3qhS5skRBnxhjquSn7FKdjhh3YKN87JVW3zLoi1Su6Adnmy1xBLKAzwiMb4",
  "key39": "4EqqVn3vx3whZrZxhBiqz4fQ5yvycmsqqrzKYrPyaHQWt7YJQFQWtGab6DjouHjnKpKKcRhJed38o7NVkf5vjmYN",
  "key40": "fR3KNtR8rbB1KxhVXYHcBq4YzqQHkzRpuZK2h63iyDptoydXqoj9TCbi8xJPGmDWo9oWLkwu1gouEq1DXnvt41X",
  "key41": "bEuqtfmk2cBZQYq7hCJRoCBJDsfEtR1eEcMuTg8q8jsTTHUkaxBPcPc3AaobyKV6TpB75yM61A3gQfch7WyEVnu",
  "key42": "2uShxCVkxw2Hy4bN9hdTsev6WeAKsf7C9kmYsD4aZMe9gpWjF3yRjQdW6YNwW5iBeYpmy8yvhAkycVAfo7X1T4rT",
  "key43": "iDphcQ5xASqbhrHynHnFxyUZuLRZ2KDC92iZCqiTiTgLiLdJoBsUKwSoNBoxN8SVhBLkVyju3fuPZWvmDdssmRy",
  "key44": "FyaWHYqgxphTGf9CAbSLmccEGx3HKfM29PqaSrAtRKYwwQ59CZPBQY1J1NHwxmZb8Pi6p2s6AZQ1DuxTQ52g9o6",
  "key45": "AG7WKQKYyV3DqKg68thdAPGe5vyCsmPHfrCYXxt7QbxYhSWqg3rtpejdX1vAQ9uNSCgr4jJvMfeqD5RGJVVgXur",
  "key46": "59z3Nt5nA1Qrx9GGSZ3KMHRCfLS8RrfPa5gieHmyE4BSivmfXpd5XkBzZEqqmwYGYE4APpXdcV6yohjc4AmGuhNb",
  "key47": "5gspGNGN8paPff872vxiH6STXk6MAQbHrmLUwwpDaUkF2MS2rUETENQMtCTrq4Cym3WZtokU7X66UUQRK1vns9ah"
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
