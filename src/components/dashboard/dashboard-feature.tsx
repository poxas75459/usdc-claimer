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
    "FpwR5TeRZeKm2WVkyBPrVQAQsPq5Vy2fJViEeyacTsRSheHp4isNjcTL8WTNwfxmcPYFxN752m9XJgcgJ3Lnbw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wo4apB5iwZtqFT5a4wqrxW3aU5WBsqPUcCmox4ttqvbsmyeDVRrTzSPQP72Srr5XoVY1UQC1ZLxDzpTkEowFQEh",
  "key1": "2BUVdnhD3otxWrkh4k4AW45YZKiMuWdsJTgdAjxtCo2Sjk4aFsvNhPvHKo57CmafMT8dbNwTBj22UJ4ioHwUMRuQ",
  "key2": "28wj87p73YhRVF8kdgTfnqtde669173PQnC2Rzsdtioyrnhq6NekVXD7MTH9rQjWsX4Ek3kQh2YXb8crwbdWhFtq",
  "key3": "4njaDqysrcKykXjmdYfbtCQBmUWn7oS6wDFQKaHQbhS5T5T2YxnCgjT5AEfg98DfZWaK3LjsQeaaQ1Hscmn4tgQk",
  "key4": "2n5CcgLxuHNCTALGn3aRhuJLuj5R6M792bFcoEhihA1PVJSkKxhWYYAUT4FtWUwYvme5HAUETb4iqTS5zsvv8JpP",
  "key5": "39EoBKc5fbb9Y2CDxgMBk5JqtPBPT4hHBUvbQyXK8UsZhF1V8oXZknwKjuSb4hwUNP474cBg5F4P3FaJgFYhezov",
  "key6": "4WJYC5V6VtkCY71AFp6UJ112hEucm26jTFUXHwNQ5z3FtvozsS2Whc1mJaNobj3qEjU6wr3RQTTKd8Fdm5sptJED",
  "key7": "2w4SE53AZi6XFVUnZHJyXvzRBTN29hRZq6vasWWcnXiDnhyRoDi1gMQBaqaTLkzoHHn9vXPwU9xmnMHbfyk1kMBg",
  "key8": "5aiwRFm4Vnr4v8JrVxHKBkDeDeGD3P9cTSFU4PWH175G4NivvZcFR2yCbLZshaquXBSVYKdzbXuVgoPqHSdUy5Vq",
  "key9": "4jPv4cf8PwxtRB9sdcPSFqjYfBETKQFyUuwbKWJhxjZeLMU9N9ni4AbwVh7VDv95mrAsU9Rinq4ySykb7jUZQdoe",
  "key10": "2xiqLsomaYK2jsVPFBnB7tmuSM6KU6Fmf5u5PP9xFG9o4NycHoXA5YbTbqhKkkEfBd9sNU7R2k7dhvivt2rHAgJL",
  "key11": "3MbcEVdiAsWJ8fDAj4wSEpUADVDA4RgShsuRifDRcJjVHd9zbBqFnhGobZcxSGnsSGG5tFJARy7jaaNGPWVT3xQG",
  "key12": "46cMCL1Agfnkzk9dVCLxELfQwWyMzyNNCHHLJ122As3iJsQxhNdkByE9gMqwMaNqpt2tj5NReMG2WxahCbvqS3Bc",
  "key13": "5aB5UtuXzHNtUAYds7K7VEH4ULfnaGHnkg47Dcn5Bkg5crcRhpBMKhLM63525222oCsLk5cBKin7uC6vDaxf3cDi",
  "key14": "NjSkuh8bo4wicaJydX3JQB9hiFodrqGbxg8NMd3Xg6uKY5BxadCC5e59tAUeCHBKGKz1UzxWMyVuev4VVxiJPQu",
  "key15": "3ib7fW7gGe2oRE8wjJiWGDYvKbTegK3wL5LNK7yt2qpFrjWXUfT58C1P4cGx3KBStWNP4GPmGGCgQ4yUGKWDBxdP",
  "key16": "4QheoVKYFc9aha6F1RrSkx6uXc8P68MSEQgwypurDZgMtaAgka7o72uVk1KVCtqLSGXda8ZBs6SKUPYsaA2B1wnR",
  "key17": "MFSnGcRFWVmR3EFAWuhTXjdrXcFAzFePsSdPJ2ACRntuBXCyAPumVdFHNCucKB2yHDBK6ihdUyeuk286RZGBKej",
  "key18": "4t3unGik81YtG313xbfHRHBCifRsNdPx8Gh1oJWTSCg6A76E1VKoMjbV7w4LS4yQaNyKE3z9z2Ri9qMbAj4PwcJX",
  "key19": "5bRrXQwWnw7tSP7cLu7xRZG8YWotJJ2JRna1GtMEeg9n67BFbkCdcqHw7c9CsJZWW7dY5MwsKFxi8NdAUpurMGnD",
  "key20": "2iFcXHTqhF3ozBk6GxoHwMtXVSgaYdU7yvmG7aJYD1tCcTk2xfZSSLuirhhJCPTND1rGQTVrPKpR2q2MkFCHUrqN",
  "key21": "3czkeuTu9PwRpcDuvWAJPk4hoXgmBr74ButjuknbYMc7GB4LhtFcgGtAJBKCQT2bhuufGwQFoAWY7MQN3Me7dQC6",
  "key22": "mVBt6hHHfdKoKWgAbEYBPMaMYNHyCJiqeLfbhKBDjXJzmKX7Dh4FoZgi2xaweYShcR2mw5gx8hdLhRxn5Fh4LFU",
  "key23": "5YXvysj2QTohAma6zG776pftEEvG8Q3adzLkQdt73q2DuAYdHSQTZt8hAzEGWDcQgQNVjxtadKUQznTPy5Z6pbev",
  "key24": "2xv9uETjtbGw63L82oM3atPrsZyYJscaXqyMGS3Ao7LMaeMRGeh9dZLBhnx1udq6VEZoRg3hBci4U1eRzDFoSgFg",
  "key25": "5zicHZkKN3iH3baUxNCnNFwsBcG3r2aVtHv9WNs1AibxAro7E3jTVnnse1Rt165Q2ptUTJk8tPZvjG49fjwxayjv",
  "key26": "564sm3uFB3znCJfsniqkEw9Uu7ALBjPgQwgvH1xVxUozkPHTxMP2tNXVHPRf4t83sL1keXq286UyKViboD5mt6o4",
  "key27": "4TTt2NfCaL4iyvWge8Q4qnwFsSzXCeLz64Xp4hKMLJEHXxzD2RRpQkT1EzgW4hXmMqRS7jpUSZj25FQnRJR4B2pr",
  "key28": "3JPkqseNZzmK9C16q16WCpmDuR6yUEK6M34mH8sRq8hy9Apc6W474WG3RGXiBVmBxF4Qw99ZAXo5tzPzgcgPojbD",
  "key29": "2J2endVgJwa4C6J46BFq6ejpMpc5ouNFb6pj3RWYY6qa1yG4h6yVfDggpkzWJZK5nskpSkXM1WAZUWoWZbu2fPHN",
  "key30": "2Gxmg6b93UBgg2PxSaENgg4si3PpCrze15cZmgVn5W5ujKsWiibT42xrnApQW2WcenFvJpZGxgADCxfh1VLxbabn",
  "key31": "52iw2DhGJhD5vMuZBf4MdTRa2fvvBcEYcL5oUA9KQ9aUpC6nEZoC12kicP4VWoQGidkV1a19F2t1aVdrypGwFkUM",
  "key32": "vZmJyRgGXg65vxnX8SPvFaFckir23Guqmx233Rt6sw3qCtQaLDZqnhfLeamHMzF1eBrjnZKEsbfcSbE11ZDYt1D",
  "key33": "Dk7AvC4jxJcGjgCQsRUr9MoRFXyQYFnWxsWH3u4sW5MXbZ5zHpX4297T1nytfxBSEma6uSXi3YiA5T2Mnb9F7qj",
  "key34": "RejvzYDnWMgtG72eTc3Tgenrr187FEhzvcvj1LNNKE93xo4k4SmSQMDcrznXRqpek5Whdio87G1cv1zgaQARvo7",
  "key35": "2uU5Xy6BCWgu1PXi2PyRKcuUTt5pBQmXBmCa23RgBk2UHZdtqRyuFfZoLKnbihc2qZVekH1DuMaCbFYsEN4GP7f",
  "key36": "5hE2sAVpCoGULKnswZ2TKZsVqWP7xc2CQc8e48KCunV9ySvuniMaxgK8VUFxcsfByfLbp2i5SGP2MsZ8WyjtWft7",
  "key37": "4gR6PnENjpDth56bPCeLZwqweSdqm9CFSe7Fp4JSNygrm2YmrsUEF3AJH6XrvmRucFgTBuLYgLcM71WNCKHYU8kj",
  "key38": "ntcnmcZXN3vj6nK4uqkWqbSVZgtxmaCKu75W88LrruWpmuT1mFSB9UZPgWRcFquUsL7xZqAqBCquoUUgTzCnKnw",
  "key39": "67YrNU7XSjyVYLAzwtu5ghFZNrGUdLyEXw769ThhSt2GYvCB4CAmnxDR2ShG9qVGCZzbxxAbNerBmHqZeWtxVyVt",
  "key40": "2m8eKAe3A74WTgVvSi15uexNT3EehkhbcuxxtHJcoGWAMedRAUvWRg1eyUZbHewgW2JrBGufEm2cjYa9hYBMRhE5",
  "key41": "5oUpogh6A6RpRrNa2b8dZJtJWmXj8kRfN3C47xogVnFYmHhugotbjy5R2fFTc4SVEPJuZtiyFP4DEiS58H4gfmKM",
  "key42": "4G69J918G1ZRpMFMTKhPjWUGaTCQA9UCF4whYEp2mLkhtMKB51S8uGk5vYcgo3gKGA4feKioHGQiWJgVysm2khrJ",
  "key43": "2qm7QFZEVLRk9W5sNZvDw5MJmbEemu4hQ4LicVUM8z6VtpcepWFXv5ReSMZQ436ZLriPxST9LwogZtNFUBkQ3A5A"
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
