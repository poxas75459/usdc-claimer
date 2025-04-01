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
    "3QDUZm9CnLQrSFLgGp9KsGFdUk85AqW3wbgHW8EHFJfCTKSvZzxpQAbT9fbt5a98DxkikbUUFgHpCuv1SEgke6V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwaTMa2kpYQqGdTNwoNfGrDFBxNFEMmmzHDmcgqaSjWcWitPQGEf3Rz6frEm2wA4mG8TnAwYcsXczA4RHwyeGCg",
  "key1": "4WDZb9kz39wTEzL8L3VS6fgRmfpQP7RtprQWNRbCrpKz6hT3oZTYtU9g3WCcGxXrNZSM5a8WtFwWqD2DGW8LQuzY",
  "key2": "oZBNUHnxyEifgZXY2yBDEp6CcGfdSeibTyQ1er2q6b7s3PKP2gaTBS1bxHBEQ7gnpRfxNtQsuwg1EPZ2kU9b9bi",
  "key3": "5GoUrwYkQeK4VP8vsJiRvSts9azxpZEJhhGC1nqCmh3JwZji6So95RqAHQKZmRgRSmLJNZmkTSLeqjKmamG4rxpL",
  "key4": "4E36GiyCDEVK7GH58n958ij7tmR4hxMLxFbjGJJi7DhY5Q2yvPRqhviJ5qwpDoBvBjKaXcfW8pzMT1qygWjYNGvk",
  "key5": "6PFkb6Kp6ScZMKkHqZ8PZ2aVi1HRed8z7uAqN8fX6gAxQJiHRa5EZPF1EQrkAYQsJCUSYSbFEc44YHuBa8dSbce",
  "key6": "58UQ4ozM5Wp1FDqCWLvv6Vk8mRuG3LojoJzJY8kiqGVPCJnWSDodSa6689NUAfGTHR1xWP3TR326NYUeriLajuAp",
  "key7": "34kdyVW9D3VQCKBySfqwQukcVbS7xS7nfwL4551GTFfW4Dk57VjCnBAPqJgPShFz9yq8FTirTLB5LgyX2tyZS3RN",
  "key8": "3pcc175WSgMVk839QekHKipCRWR1gGzDApa4sudKwdoggvqgqmvbM3Fn45JeGQh6fMRD5J7qhbdS2fXU5PM8Kov6",
  "key9": "5xX4W4oLjETSGTGQC5aj158UYDpu9PtvWnfBUQakQXdCPiQwAqADN1Gn6fAF8nQETFoLhr9tyR3VQUcZwHkXJRBK",
  "key10": "4PzsVicV3inaPHQTKZrQ1ss33wGfaWs6vA2PWm9kNVbBauV3RQPsUghTAr5bcnAtD779SbnPXN55PjUexUa72m9L",
  "key11": "3rXKjd5njEutgJ7qEVKrvPgEh7H4Ts3gq9JxCh6J37ofvzdLTprm6auPj1ya2b322ZaKsYo1pu94XgNhwxGEn5iy",
  "key12": "55pmiE6s6x7kL2vCyMB37dQD5UKwLhu2rt92h1pG5TkQ4c3pod4rNRcgrupiJtv2VwPret9vJAQB6JnvEd6BVSEb",
  "key13": "4d55yM6c3L3fpHENbAKY4fRS9RU9isV5Sp1j9aTZ2f9KCCMKBaAXP5aYL98vGVqdhM77nxabYLHocUWQhE3dCkJz",
  "key14": "3wgb9XJarUk5aYmD6EBy5HB9NQXqQSsXv1mKqL2sbPZKHxCuxFVdcX4MeV9CtzjuZQTTdxTrPitAHR5rRtBAzTsF",
  "key15": "vwtorWo2dmf2yWpcJ6dKdFwfH7Xwq5VVggnsXDq3syBwwGKNF8B6LECKBtrHaRVgeJZNPEuZHPmv6QmC6kBTYRa",
  "key16": "339DM5cPWpnmviCidjdKXgYHF6wzGzkzgzS6K7KseuxbcLXREHhgSMK59VvGFa6Fdh17CLYT3zC3aPMEz6XZpbFe",
  "key17": "5rbFE1KVkDwsabGmnXBGqk2nwzX4LqSsngVCx7Da4CJnvHT36vZquPcMnHXwTopTQ7hJmYH5XtPDCZPUfGdoEEaH",
  "key18": "4BKTi3JjdFtcyszLuFriE8RxB5WJCj4aN9ZJNF2h2xgjwWKYKJH6d4y4XNsAnJ743ZBwTcCmnoLDUYGoZiTh6Ffd",
  "key19": "WByyB5FtWzdvvw1nsCuoJB53JT66AZVuphdAfWG1qJNzHsao6VsQZPUctXhiqgFgyUUdnE62owmhaoimMbJtAUR",
  "key20": "2qs2W9kGWFLemwLHvGZvcqUiFcCgNgm5pxSdq4Hj6kGv8hEBtfWSoCNitZQgwoukdTtmdgTkN1tzAYo1wyfYh8Br",
  "key21": "2TKn9cHmuL54fDva7M4QWdgb1HhtSY14kWSFYRyiAToBTckXcwVHAkwdGXh2i5D4TEyNoRS5PNbtbccXhNzvAdAS",
  "key22": "23861U9Kx2sgBMbaTTeXUjboP2DyBar9by2iRewHB1w1WX8GryQdmqPNtwRR1Led1F6xYCKZPgFoJZXbUvXYxAdv",
  "key23": "5x5xwBBHGk8TbYFNiFrYuevULuhiT3kbHjPDE4DcctziYkWurqPpAkGnACeyaMKTGqS7cuza5ewjA1n8ErqJziaW",
  "key24": "4iojPhDoRGwtJaMuybshnsDHQbvPaMVofZskec1mMHFJsk3Jn7hDjgNVPUce6eVAL7vAV1prQFcFKg4b2MosY1NB",
  "key25": "4GyG3F9WZ4NXSE6NZJtoy7GiNSMi4Heii6LtjEWf4vimFdsotEL8HbNhdfSjW6NESJjowSAozhRwtdPydZCwWhZA",
  "key26": "4GbMneCeiQgaEENaX16D9fsajPL1FughAGeQmZV13y3RvP4fD5XBVSqhdvvc1L3xkSD4nveEJBAiVKJURDrrQ7Fq",
  "key27": "5WZUbz6fqYVBU58D572K2adyv1iJiRUMSgdYLXs1UExdLt3pMhkaHEZupNNcMcth8QEPnhFmHZKacGyir2GeNow1",
  "key28": "2i1VoMT4sKHSjcpTT2zZyadiXZkTWdZMACza3XVKFXir5jsxMHUmHEJVB9gd4JEygRpbkB2KbT5nvuvksToZJKfj",
  "key29": "3ZSPQWdnhTPsEDiaimYAKaBRoNim5HFKYxgdfC4pnhkocWqZuAXfqCXKQwfQiGFUW4Pp4GaBfphMB83SzpGHEwe",
  "key30": "42oY3MsdZcxqhxYb8bAcMTY9tDkBKjPJUfzqptsnLCoyYBiF1c6AgCUdSyDCEks2KGbzus9s7F2JahP9375TtnkW",
  "key31": "3uDgNGM5QGGJ6Y1oyG1cJv7H7WUwHNk3TMfcK171o8vxVTWvHrKDsMoqc3Cav1F7LmZmWufLZeqhVL1ZmQaKagQs",
  "key32": "5uAikpdgaAbKVRnq4JcjMai6oCVSYWWvLhxD6eVS8yRvHfaoH1PTJzYhgYhfeXpjzVnKZYU52iU2w2Ps4uFNZstM",
  "key33": "2zDmrGJqLrnjjDpjJLYPgbdKG9TXMsKyhusa82uX7YNCLcNwq6P5B1J5jo8KwZtHpkERzow5fFjrnCaJTHadopZt"
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
