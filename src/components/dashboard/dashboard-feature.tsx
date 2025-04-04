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
    "SChFxxZ8wTaVa65tZfGb1X117as8roRewofzRAfRYAxxB6JgKY8wzgXaTLX83iRnAtMP6VPnrLFrUbK86gev9pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqarUb49ZCyXJtMPS8NvBgTbgdBVQsiYqgLGryBGRfcnj8Gp9wer5r4gWfytB396FXyG1Q3RXAr9RL3FrtUMDVw",
  "key1": "2Xu4tQw8iQuvgLnETM9p7GZE3B9FXfnsXD6rxeD9YkqhBnSDNABWsv8zGS35deRbMtrJMhcuhuFRFZjef424ZZX",
  "key2": "22P2LGPtnGgUQu3LVgYZqvAP7ZZ6cJGAepA5cnmkt2B3djSej6aVntQfM4oY93cM2YXQYDpe6rDbGwKaoFeSXuKB",
  "key3": "3s4D7Wa6NoCnymq2sDypgiYHepiCwDvTW3bAUvpZLZdFS1YNSeLJp4B1r8u9TDShJxmKXu3oEBj2ycgENYEgYSdo",
  "key4": "3o2jMJX4LFQhHkJcKcqT9qMNR4merHLnqE6YYi3HhZiuw9DrPo5WzfAvvTs1sMXukADMruNcVphQ4kYF3aNReAg1",
  "key5": "5yQpCLqzr5fPsWuESPv3eXw5U555peJKGoyLNHMbA7oHAr9bpJVU5zmv3unW3ch7GfsFB27GA6SFKpLtvMjptwpt",
  "key6": "mPJKBa7Aeghs9644WoU8rkXTJRiwayVyu79DY2A3msaWQ2VWBVYVPYcmBd1uJ65Q6EvLq7cab1oSEnG31G1jLRt",
  "key7": "2KkgxVpX9TSTF7Bme9Ybvs2mgZ4E7DkQ685GV3FgczX4wMyyURweQFeTw2DvRRh6stUQ27KVWCMeRXQwBRB1Bg9C",
  "key8": "5UtPwqvkUmKg8bNhMPP7husqsuNnPPLFi2CHMyRk1hzo8yURaYTxTpogAjZGGMBcm8zn5QCzAGjPCZrCXXQVn3hc",
  "key9": "4oVM3StGoh3rXNzZvQ1nJTPp7LnThpGoGCg15SoBpCLMkQyj1edR7svtuaPxCs6VcAfs4qqCsyy3vqtrH5kVuZCU",
  "key10": "4Zr5asqwaWnXD7JeF5QYCrghoF2JzvX5chka5oikDc55Gequai1Fv8XvFHTt22GxBcuim4YyDmNLZre3ZbRMK83U",
  "key11": "3nfwb7ny9LFDXqEZw3fGNUkZYSBs94MYiAf1Q6CA2qCVe5VqAorGVawUii2JyQ37H3ifyiXAGnj2nzvytosuBKcj",
  "key12": "4rJ4Cj6sSiRjjQhVsdj7Los3gxsv3tgKSJ15LFm5w3Jqie4rSe5Kw5LE5s9beaaeLx7Yywq5dJXPRqJFdm6fAfNv",
  "key13": "5DBBGPuFgJRHxaW5bdfjaShop6Hpnp9c7yaQGSZKFjX5dSR1ZHUVTru2nRKSDHt55rwub2RRCzVPjP41YDtywv4f",
  "key14": "2VUJD5DBkn1mrHRmB6oaKr6QKYNwBBgKJUiwEHmoYM6gN2wU2GK5oXvemwzwL2xmiozznft85EuJA7KPf9chQews",
  "key15": "5zSyErwt21SBDnpuWbK3dB6XkYnNtPWt47o2kNpiTfDtYxjNSz3UTpbcZ19t81Nm73dbHtvZH2CpPwV65hzFz3j8",
  "key16": "5tRigsDcYcQLpewzPLRe686T4QiKCDa9qNwQsHvJtyEDkwW6HhSYyzP7mYvXUFmctj78Q2MBuFsVFkRFXKTXzDSW",
  "key17": "64pTsRRbwnW89EzVEiNt1XXvaBBvNSUQeogtWM4VJ2Usqc3BBuJr66XbFDyiC52WjCRq8c3uS8aBBXWeinvyu8nd",
  "key18": "jCXYwyRfheTQETamQdT3cMMEPtEG3w2N2i9eAyZof64jSCMVKAU3P2PcTwYUriwkh3r4UjB6JZYRHwXBS2Bgfrj",
  "key19": "54hvKfMRrxRyfaHcsGmEdwqMVrf93HfGU2XF2e9t2zfi7U2iTwnYjwLwDxtJpevFctXd1YHgZSxpWQHYiEgR6Jn6",
  "key20": "2Eyd9zU5Qg1r7hc6oV963wtsP19jeh5xHB4kEavJUhvCcbCC84vVr498hKk6Mjmh8fveGPDHTncDmA9DhDBLFhHG",
  "key21": "2siUzAHtjzUbQVi2sEPAeC5bXhHSENPSqgMxxG2sm64xCmahgDSxuDE8cFcwA6T5HJiaj7s7unVdnW87YvtxUv71",
  "key22": "4oqHMVLuAto5gBpxHctYBPuAkweLXBqqRpH39iCR6Kff2ASYpRoC6bn65n1fWDG8AuiPLQY4JVMhEwXeyxgLhn8U",
  "key23": "4PYqjVewGE5jrrY9uw2fZLPtw5BrhtS82nB7oFVrH1WRrxPEHPLSkMHtvUScb7kxRUVFkMQ2t1xRLz3muFiH4w9u",
  "key24": "4mVCgSAxgNwEis5xWxjxQ5eXU1C9ELLv4CbrnHhcRsgCaZKTN7cbPD6nbtgLhVnADdjNLpciNMM1TR7UnDkVF73r",
  "key25": "5U311N3cc97W7m6dvNSTnKzhQLG5Yw2Am5mJRbHBzFTCutXoMfCXLGJizcyVsSjtCxXpNgQ8CDardFdMLKo62j8C",
  "key26": "5aEo5mN6vZ19NFuieUfw9bFhAPF6u9Ns6kXfJC36MgTB1hy2wHrR9FP2zbuesPEjrtRWUXWH8PBDu6QDQrboy3p3",
  "key27": "3BWSDmLsDCDcUSqjm6eKhbiX5fZbkoUjFLDThd2eR2TmYwDXP3PHku1pXFnh9g3LcuwdyTeXTRWHti46AkWi5SuF",
  "key28": "2Pcd1X84BSXLD7XPCXYndLrAureiKvffpUnE63WLZk9XXdJ456ejsh5zWBvedAMgGRPzzLiwH7dN6bVLrBcrUq5h",
  "key29": "5kDGjRSmsGY9fSEo5cew9SzMUtAa4oCaEdiA8mtPfAD6D3PixkYmfjiySGvsDe4C2U4Y8y3hjLtBYf7G4rg8mcq4"
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
