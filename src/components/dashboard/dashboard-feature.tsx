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
    "5gyuC9gpmN6hcoZEaceMRQRocpkWAZZMt5AHJVaEgHWS4RQZ7oV3wKKKA2HWUGx7DkcmS5MXugLHBDmzv1fvrFvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAEghqTC22Ho6wyjyQ5UmF1f7qyuSDo69qQbKgx3M6wGZqLav9XQGt8zFkcFo94mH8L7FCyRZQVZN3Jo62zYUJX",
  "key1": "4wV6FDv65Kx9CUtMSfrQbjecaRZt21VGM1mCPjGXufDnQ5jUNCbjEQNoEJT6BrTGKkBRvZPdVChGUoYxHP1kxgBT",
  "key2": "BZuDe2ZkdpNzeR9GJUDT7C6wThWjRDTJECsd4Usei7j6TZ32eD5QR2tzno6EckTzJgDm47Rg5rYFi7F6ufDxPQP",
  "key3": "o6W7KtYAqQmPw8A32bGRLcvXBVsHLhm66wrgbBH7QHPgMXTbwAezKYi4ihGPHvw3AFrVh8ho1bxWNCU1ykYDQqp",
  "key4": "51w1nMaeQLAEzLzvy5K5NKgtw8V4AS4Z8qbwjqPg5kL2kj5T3U6TXCGeJwyasP7smkZLDgfdu1j1KoqymoYXPBhF",
  "key5": "5QUaudvEgBwgwtMs1ZqSY1JzWQDBz4QyY88Pr7XVfRqMnYmpCMrDCYVoCAzy72rE1YadYFfaKoAkcdzcUFBXPREu",
  "key6": "39cSLmgj3iS9WhCHBdkLnoZNpaFbdmvrXKfMw9sLHaVZ8ZxAckYSgghGbsqffM8NFwFKr4h4MxFmxLQWacoiWbrf",
  "key7": "2aGuyiWPvUnKQeNX8qfth9ZG3v8ih69dGfo9PHHycqS2DKz5pt9koLKuwdB4eL4DS1rXnNXunyD2CiTwMXRiSQ37",
  "key8": "4pAqdyyEmHWaTsxdtwayvYTXPwv9dCYFVZkuw7UZJBvjMytBYwb7CSMaUszNf5ndSrFTroMXWapGGLFX3XADHvdH",
  "key9": "5j1rnkk1eMJYJJTiXU5zLB1nNitEpaax3suEzjz6yYRnrqT7TSA79ccaA3b9yJsugx6EbpLAjPYJRiRFzszCZ9NK",
  "key10": "4sbBYFdvE1tMWkEvHRbCbUeSaKeDqe31tQBa4zijoezs3a1iAU5GNQ3PQzcBusdewjtMJME76Ktp8GWKjmsNkRLS",
  "key11": "5Wa2pqHevk5xzoXJY5hhWtK5xS1AA22CSk9KLtw11An9UtE3p3J5xcmdB8rYTSTNWhp3Jn4AFKwgPAEHJukXnSkH",
  "key12": "hcsshwjJVRfhrCcNk3RrumWZBZGubHY7MFXagRRb28ETLE22oCv71N7L7yu6Qoj4t3ffj6LfCyLGHfJAgVGx1tJ",
  "key13": "34FJAFr2qHnr5m585aYaYX9fp7mqZWrhwZtH3QbnhgsuB9ZC363T6M9quzmwpQjBmEoWqNXNdZ5PvBKd6YZtbfjr",
  "key14": "nScKF8Bavzi98tD7SwJVdU94TceAeW6a2aPvqph3dFYpEsyDxHLM59tL2h2B1kEizKjx6hxHRFuhm8ZTHbJ8gdL",
  "key15": "5tb68757H6S1qRx4ZfY6THZ8dnrKt7QsRDDD6LSZU6ET8vRSx3BesTGs3RbpkioeTAJkXAk3Rn8GvhYLcSTirDi",
  "key16": "tWiguSCbexnUJCDXvYnhVmaJRgBcwCZSDcjdEBTQrzMGaqMNiCKS1jjFxGiCEStQY7Ukw8T36AL314MxLFVAiZN",
  "key17": "4T4BRpQEujEUR8dqBydm2NjTSBso1QZrBiVhioMeXysaYNeXqxe3NRUsttH3yvBSvjyahJDpM1EuzVrHhrDDRtWc",
  "key18": "4P3thBCZ6oiSRgeercWUwcLsMroZNmhydPyCo2fJC3cnq6FW2Akq7FF1WvGkiyiohKJqyXzTomkSrCSgzqdA2yiK",
  "key19": "3WUeB4iCXM75hybSZc45NHPH66vWWojr2kgaAoEddXzrW1vSeo48PwvofRtbJqgxe1kaGQ6WxQxKbhwBi9XJopFg",
  "key20": "5LUdqF5o7vCKM2RQX9UawKpvWj4S87tJm9k8wU45hKt5U8AJktnNWSzBhaCq17pFjhxSzc9WEiGQ14HddRXCvV5u",
  "key21": "2GPE6x7wiXvXASyqdioqwqbky9WY9zCAaEo8DW6u4FtErxF13Gx9itqJBLv4FmgSGUnryy8PZqCeXNWrHczcrp6k",
  "key22": "dSpFrmeBuS5AdSAXukg2r5rWj4r5taq43RW5tQ77E6mS1CSE6ayr6xRcjaLeCanBSjvnY6j7cFg6ZgC9X4U3sLT",
  "key23": "4GqzD3UCgSGcemigrf4hcG5kk6V83PVM4mQpw7axi5q2XrQeE7UKg7KiEAEciEMYV3gPqoCfyAem1ydp4Emrybix",
  "key24": "4NuebFsjR182H4d5nxCDUBnfhwpadTUHJCFss7KdAmKbLsw5KAMpt93QPcqbvC5ps924TLJtYtQvRem866h26y5V",
  "key25": "4kHx1QKMr54XBByC7jLjnVc23zbyBicM9MTwscToNp9Qu1raBK5ydYHvg68KtFnJjs7zefMqBTnF8oDhMCMgFeuy",
  "key26": "AL9MRarhdnw2Z7Gp6yoaxtMiYyUukCteNgoFnnVmcgGFPgX2exFdmcqxn64idJjnh86kLd2uQnhT8w1pTNV7MNi",
  "key27": "HKcU6MCiu47y46z1jbjLACh2Yptpv82ESMJ4mqQJsPn13a29XkpwsW4cspfqooAiyoEasbQcEgkVM651RHmsT9c",
  "key28": "3wHLJFyMo9SyoVQLUf72UrWHtQcK7mPwZmMXA8eJqxMMj4mmXMPbVr4cU84vunLHH1iKLZHMMxrZocwD2VyijiRw",
  "key29": "QUiMALdKM1z83GgR2ZhrADPwnSC2FSeJhHvjGVtZLB9B5za2PuEPRE2yZ9diYv8YossrrXGx7GBNhYyzGYNvdK2",
  "key30": "4W245bzp4Qzjj1tUt8zdnFgSN8cvns8PZpYfSuxECDu7viNNJTJLXmPt5N9YysrudYKMaLr9R7FmBV86MG2wt5LT",
  "key31": "3jbLjG32qJhN89Dd8jn9PhHQqD3e5kRMPJ9TigGGvraCeETkmzWYcSvEWH4iUTpozk8gLzUaK92VA7YQJx4jxSLP",
  "key32": "2D2fUWpT3fq5aoKcXaspZMGVb8i5RGiiPvttnjXcfybyQun2Yu219ctYC35fTtTm62uupKTjXzqHd5AjTo4J6F2b",
  "key33": "5v4LgxSvBrjTeu9g3CbUVkY9cWDtnb9BJi9TgNyb1DNrsmjVJLgotjb5SrtWe3v3kdXZweBs5VQ7YrhL31KzvwLa",
  "key34": "3NxJG5gswjzGY9dfM9mMDVd1WAvGQuzfChKwVALgoYtJXdgvqnyqF9tHWakycGCEaPgGg65kLJVaGhMPKyLJaMvt",
  "key35": "3Xpcuxu1s7kEzQcsZmHmVDiMB7sj6VoGLvswe1PvHwsXCjNvSGcBgs184FrhNUuf3uTgX6nicGVjue1TCXNCzDyF",
  "key36": "4HZPxDCA5thDSK6ptJyariupb8vEMFk17RTWezEESmTooPma7wYL9AhrJGFjogtRqSe1nDjSxfKUzf5r49eNGrii",
  "key37": "F2om4vFaPxxT2tN65qsndF8uNvNFyEs4jncmtsxikDUoJauN3RdBFhEkf8By4htkb9zCE8MfhMFCjHyvpoJAzrL",
  "key38": "5hjZtXTL53r7fksYSbFBYBTBXZbKTarC8DjFKXMwFDrBL5cLPwQM6gkEqkngfd1b5KkhXPTRWfsWhtwDA1vXZyFL",
  "key39": "5nPUcTwrcHd1cpduHF3kHrTToukFnFu2t9Td21HUrZEL3j1jPTH3YknMZvV58xAJ4aYhaByhSaoV6S6MdJP2RTNs",
  "key40": "By3xvPbVm9HtDtLtYPtMAac2j8rJVQz2mQRsSUcHjiw2iXvEd16UWeQYnfxq9pNdRcezMncqw472K74JJsaNeSz",
  "key41": "35GPfbFj2yHeEdNuoYrjmKC4i1sVRqTBtm1tMgcsDWwZxCdmKj49drCXhzVQSh5YyxXVk8EZNtYtEZbsfgr7muQt",
  "key42": "2aMvhQNQBPs3oTVGX4nx3i2dCbK4booppzFXghiE8MSGLobCMRHNi9j5PnvZ9KK56LEsFSNCKevDxJvAuKU3BP3J"
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
