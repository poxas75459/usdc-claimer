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
    "5xUWFKwA7MoUwhmR4AyW4AkSr1DTRJYisF2pwK8guR1GSjnC1EntyG9EPQUvmE5KtdN6e8tAsBNrHRyfy5MKC6va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JcKh7XjhUHb6gyan4yDYJ3Pn2AtCswxKdwqbCNpS6tXuRZBzNgkkKUaDbv4M1Z7ErYXUCmBspbpJoCGDtb43XmY",
  "key1": "3mJRDb655HWsrXEWQGzMBtPjoFGSriQ11qx1gCNXsktZWe6TUiYsoPxqTwD3mrrpHMEJ2rNUtzhxrUwuxQUnb66A",
  "key2": "MxCYERyJe681W42u9iBFtpcyXtgXrNDcLw2Y7n4eARBoASdJKYQMFoj8DJhWCJ6FcjxKUSUuEFzEniMn8KgUg9b",
  "key3": "2Nai2FU3EcaPuir6BFfsDn2WtDVCzZt4bcLMcS86u2Exi7Rceg5m4W8hkxM2w28Nn5S97HoNHcyZv1vB6VQVgEJd",
  "key4": "5N2PDjyzJ6UPNaAgsYEVw8fUzirYXUJLjbT5BKSkL9Axff4FXPEcKwazjXZT7J4tqkttCRspXRZVEXpFVvw18G9B",
  "key5": "5w5mhR4FVZUWnwC5ZBxKP9eXgSXgyF99pcezJRSdtA8gcSZoWUC1VLfGc2nuCcJmF2AEBaYPbqc3i6diswbWjokZ",
  "key6": "2pFxaHt8XYCme8yToA9qBonJ9APnx3uMBPfB1AbeVF1DZevyW2RpiFuTZt7h9Kom2aC4Cv3mQ5KFykPypPNBcovF",
  "key7": "Ev817UkZsq8FqxxBix7PgKsCCUbfNM9yyYa7VoCqdXWcyD3pj4ho4nEReJ464HoDDTdWLw462zkdK9goS5DviV7",
  "key8": "3T6ixtZifitANg8isVnLwtWPj1jRo2tgfNc6cDcGcnWesPJhF4fisHnYQBQPEyxrRRWRpuPAJKzDETeGif7Fah53",
  "key9": "2H8FsQLEiYT21WHEUzaEXAv68HhSS3yhHARStxBDYQiHKm4hd7LAJd5gAZSeiW8e6bQoYud14VDTaWgwAdQh5Can",
  "key10": "4zZPdwyjH5Y5hCFjx7cEmZqVn8Lu7HiYhAnDmZcDWDBtiwqnJFynVhdyJKwcTnLd3m6JzdRbaZnbNzby6RKfATjq",
  "key11": "5xA5pcv34vmFFfmp13xMefLtmfsXePw1oJULST6HsZQrwr2GZHDuMGsaEj9PVBxkjG8FUaVu9Su9JfpGRig5AExz",
  "key12": "5rmxay4uS22yXgPdVAayq4mAdckZMjA3awjSPCmMGk3bDyW63aR5rj566J4x1ajfDqHGPpepGgLpFKGEB4AeCch4",
  "key13": "hgwowqQLDcvRiraMEm68MjKM415WoaUhEV2ySuq3J5nErTjpiDswqy3gjQ4RgZ3Po6uF7ZwUzoHTFP8r2gFsEK8",
  "key14": "2ZXrctih15VT13dMwiVoVLffYYHwFJJubdLU5Xuu2dwySjxHFwcEi9tupt6RtFT2p9UEoZmpDKZ357bZqFkXLakJ",
  "key15": "4vE3xW1bbVTAarzgATDpbsQydiD6tB2XMrDFPSDwdXXbuC5pgaY6nrb549gSwhepERdnj3xgenb7vLao2UXSrN3H",
  "key16": "379NxJHXGx8p8LDYZLZSqB6VtfyXf6EdvQKCSua9xsap2jnawPN9UNKQ7vMcmGkB2NXRgtBHoQHnSukWzNm8aPUC",
  "key17": "gxCyo6xankJb9mYXD57UP6GytfeEuCcwSSrxjiCueCfX3fgqh1kegxro6Mc5N2MwUWtAhf26HRUhTheet1FiYvf",
  "key18": "DJQNoKeixAJhEqzuNy7ipi69tbn6GTGkDzE4ScnQbymVscgk8aXb98qAou6Z8EBYEHob5WcmrzRvd5UcYtPw9kJ",
  "key19": "2T5rn2yeg7tkUL4QnsuN5WLagMz6yBWgMsLtUSmYbtbKqjcwwd1VEEspFuJkq7vTSiBLubdBspYU6zsDCNTrEhj5",
  "key20": "2AzaE1zQmXmFUjxqB2xTGJfLvZsfbgs3yq1soo9L6gsok79d6MNbqpo5d6RnA5JNP33cXX5HTWSWcoyYcsrxJRk5",
  "key21": "3xz2kcvaZEeYMtxui5mrumEmHmSBbXXbYZHjGaMoJUUsMrZksMcytAGU7SN9dKTS389ZcuMq3bvxtbeaWnDLCfZZ",
  "key22": "4ggpU9NhPe17atY8ujG4PFHDHkAL4nvo1FMenFZ9qdjUvRsU7GBYVniThNiEkd7Ffv1AzXhhxx7Pbv2G4KhyENys",
  "key23": "32eDX4sceSyWQ5675EHdWGawGY2DPZabcujmmnr71hSs7q2JRsMFWCeZeiYG1s6ZrNwMUQ26HwfT9X1mBicuacrQ",
  "key24": "4NoMdmuYFV7w9doR86opFuCu4vqqTbRft3hKNz3LhuhxMXSr6VK7UpCvZsDchsFRexmrTPpXdJfxDw5YAZjF95E2",
  "key25": "3DL9xRmRBUb1uo57knYWz8rpJZDm7Y7sBwUyiSU91VxsxgBt4AJEsfQaG11fwCNv8a2bdjRXWousDwdS3rksZdVh",
  "key26": "2ivSPYAAf9BKc4G6sYxwk7UCGazHehEVFPQHkRd1qCZWLucJfWYEjJsY4ey8opvHUbcGFpqzow2zdyMqBQDppyJ",
  "key27": "XpxYY4BJXgkbGnKsVRmH65wXHGfeNWX7NKT3BkWmGgpboyMo633qRVKhcmd5VhNa3JjweqE87kjDExnVdNKMXVS",
  "key28": "56wENrbrCUvV4mBgJ8qLVPkwRfn9NZt38xzU23GiPCPj9gCFdSMUT4yV884bHaWnhCP8SGfLxMtCLrADNaMYAJ7L",
  "key29": "65eUbEQFFW8pUQkGcaaQ6KwtB7n9m9UF6LMGCURDPbiJ9j1NwAHEmATTCcT51ktLNS7dFZA278zmj21TcbaVpwve",
  "key30": "5QRmVvTwQQ3jSutx4fRc6A41KsJcMY7MHunPpySkpQ46rN4CH6w4nPPvaAwEu2SpCmWqvq9ZsqFToNq9GfydVGG",
  "key31": "2uYYfJhyaR3zucrBrHk8ohdVriy1HSgDGP88dnjyQ1KMnLhB9va1RmsgLaoGHyL4Xt1rgKoTiHNohCQfFosTXEkn",
  "key32": "5EL1KvvYVaYhnY8ekioRWZq3QXshaSPgnQ9w8xB6cs7spXRwB9ZCeeSbmLZSWgXrR1a3PTX7yPFXccG9UJHphVWA",
  "key33": "Pa55J3ZSLruADTJmeosjNpzRNrwJfkSDAQHBJkcd4uzEVbHcAkv8twMG5LrHSYK7HqY2YjdQvjQVopSQA5CYq2P",
  "key34": "SYpoHWesY7FwkDPyVmVqCAfoK9i85pQF5EFDQrm1rvwjqtAZVCrfaJ6uhPu6yfdm7fXNFh74rXoampQjT6MznpP",
  "key35": "3hDv8qQJnJiKY6ZV54FsHD7JkCt7xwp6amMJ1RxrcNxruMAcptD5MDR7bqzxPLp1rg7hULBrRFzvBMiDMEsA41fQ",
  "key36": "5W2nUJ2tyXbVYgTVNYuaNDMgCE5Xy16j2wiY8xEc5hZEXW85K9Uc97wWGEJfUCDddLiBT7jdB96JgkkB4eTBaAMK"
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
