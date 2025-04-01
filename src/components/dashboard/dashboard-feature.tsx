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
    "3F43ZCmH9RM6Uj5bMF2zeHBs61K9ZKK9QHPirLcHekGDtQWPvFQc6Tt6g2PE29J9fsVf1fSPR96b9ssUiPG6j8rE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LS7tdhxoSBwVvWAtve4XTwiUYB6dVK4UoFQYhyFfXyVnE5UiaRVp3H1pW3fJvYBz9p97G8jGBtLTmfunmCCQcB1",
  "key1": "5isJ4kPh9hYXxZSYMqy6HNtWBqRBaYDzeTuPwFZN9cq5geXAZVLWdDeMaJhC2B6m4wJ1yTarp4AFV61YDRLKSFX2",
  "key2": "4deWDD9srhpEEKNDo5mPWR6FH78HjFVE5VcrH82a5GW5RYp72pMQCUoe8vJCHouN3SJHR5ZhcmjtyxuhMeQwVGyo",
  "key3": "3PLRpxYRnZjXDBdLpaw58dwQc1TpSwe3WQCXPBpdaaZvBDZfNqaNXbzUVHs6Le2eDcW6V7GFi8AdrEFLqu5eWxRq",
  "key4": "2CNvj6qKkc69j4fQXBstdynms29y52igXykhEo2T1XfnBFZGprp3weXK71mm27CePurTyuSsUfQQGqjjoqSMvMxm",
  "key5": "3uFx66WELbWabQbYQfxgSHzazN3587hLERspw1diMSfGNVH8NNJANFoM9ezdc4T921M1tQ49Nxjsjas7a3gk58ad",
  "key6": "61s2fF6vHYTMm2diMaNaGX6zEDHzKdnzx3GogerQkfHQcAMAfwppnQCK68vxvkrqbnPt1PNTZKpMTtgmrSsPhsw2",
  "key7": "2wx5CeRnTaJxY4RemHa9dffv6kQfU1BSczdbz23BitNpd6gBV5VJChVKejpCBBX5ZLT2rcYeYCyDZRrh8CKV1r1D",
  "key8": "2ve2Ca67LPvCSjbAv4QhNfJ5Fd8UkKnYn8bJvimc4ETZYrAgqtTR6UP55kkgaxWkGqZpK7P9jbXZHyi3arwPUkAC",
  "key9": "2UWvtW7mgu3cCzEw9QEjuwkNQumJ6LmUCX4nCGNa1j3t7NsRKtYKGUP9HiC7r36gH5fbocAvTivL4JYLXi8G7Pzk",
  "key10": "49H36ytkwj3qGKTDfBafSiDby2gCimG5UFm1y6E4XH4atCiyEpd8XBvKhinp4s5L8vBDgoYowTjKGMeMETzTu1nk",
  "key11": "2am2cKcM4QZGdu9Ez9JzGu1SLGsdivpsAhhasaKGkrbyBABvp7FtgNLXuvYLyivwzZxq3Yd8SGgxFSNEcGGH1kMY",
  "key12": "2u6h66SLBxN4LPWfUbmVTb4x2Z6SEAV4B3oCxL3a5M8dKUgPdr3DHZ2WGLUEr2n271uLEvpB6U7djTiZe4ApyQBt",
  "key13": "3sm9wYxrozRGKYkoR3ab2FT4gxutG3oXjYdSCvjJdWugYiYJnoBReSexk1VwMPFFxpESyWAXWPFUHXXehq2Kd2eT",
  "key14": "4hLtd4dngS9t56roTLZJtbRWbnTFhTmdGkUN6mDLHNjiExZAN3Ybd2Bn615fuT3syeA8jCnNvhd3RD7WAZ7Rva4G",
  "key15": "5aeZcP2KiiqgnUnRzfeQhTbuQmLLkx6oBG9phL2YwTEy8KLT5LVsU2DyrpHjdE5BBvihq8iJNL7VBefQZVtcwLxg",
  "key16": "SfKpj71tkcksvXFVuBrE9Ko5ELLcNMCCrE4aTq19Qnp9ad3DZvSbaiDr27SgEg8dzKJeMYxhp1DBmueNbFSeBYg",
  "key17": "2yJ8ret5X2QmZ87RHvXmSH1KZAm3bMG6TkTqHYNULyvwFr1UMmx4ktdynXdUTTVk5groRMLdCJiknxreyrYKHhXK",
  "key18": "3VDfrvKkvCdAcxD3LJMG1LvogxrbbDL7bD52bLEYmdMz9xCRM3nh7Cwt3g5ttQiYU6Wm4g2Mx9myGXcRixbpXkjm",
  "key19": "2gXBLw2DXYsMJZMw81WR6xon5MkBAoEfyUbb7AfiEEoet5gfkBabv5CFj5cHRpPxfevbkHMJza3uyKjYeih7vy6N",
  "key20": "61MQQZUAmbuLksszt6hFXnhSutRKb6vw2mT7zt5pWtRsExsvnojkbWg9EbMrzEA9VS7kaQyH9Nvmb9pJnxQTe1Lb",
  "key21": "GgcTMKLd1nSuFMDBQVeFqBPbhg2adAyjnZv2esMJCrUL1kXAngTodp4ioGQUBBe8BajmS6jVQKgzYQx9qaQsTXV",
  "key22": "2UbxTyU2mFEqQmusrFtZAaZTbnJ2vr3tJQZ7UKUGSpK5Daib1yK7ZkXki1iSirEpgP16y5gsGe3DyNhmun7g9DE5",
  "key23": "5nnbUjSnPT5iy9YSMfk1fdpZraVuNJvQSkcsKmweVcoqxXGvLTwFjxBM7t2kUh4HtqbDwvNzp1MVWHAoMSd9zJHm",
  "key24": "2TYdqnhMBD4EXvKuNb1ht6paH4fiChsfR9jkaHeQoEWXaAbHX9j7KDU1yhveZv5S4nFc5A1CJVdFzbm8fyeVwErv",
  "key25": "2Phta9CmHqL5iQMbfPeXaeK6xGfyBDzZ1SuLjdE1ZKhyfBoU9v1U5QgEpiC9VAt4dD3nP68yVopcm1vVycFLMA1s",
  "key26": "3ni5M7KSzUjofZmSZoGN4uutrU3vVUSXXkJc3r16Afz7x1hFkgiyo6iLVHdkhYwE3vE5qbiC5QwibTFE4DH9cmBg",
  "key27": "2YM5tUCUQpmXm1KpgwLpQPmzLWsKgYAc7es3rp2iFPihryRZ2CXAEobrXWUBKD7G4RBCswuHUnMz9FkFB6pvPBQK",
  "key28": "58L6it9jKD9DWg52n55pN3VewPDbR7iWzoLKy824PXrzUXYnLae8EDyPmmWdB6Hhmnuye5TnyhwLtE5wdJn8VwrM",
  "key29": "4Qj9BLfSXn7ShQVbpHUwHe4o6AWjPXD8a1LNauX5Edy69tmvXQu5FsTnh6FNPRM3CTSeNt7ahZtx73kiinwZxkYP",
  "key30": "124QkYT69qZgU3JvWosUEWaPaZZaei83xvxoJvVVchyxhbyX8gDNXuP5Rc9K3u9a4eYdHDvmjb9GxrrGhjN5kWHe",
  "key31": "5yFTQyNVXUCU7JZumJ7dzqjJKLTscm6o54EASUbNfhkAWVrL5bU8iCzp8WbV3Z5N1YBAijcQ27YayotERbHub9B8",
  "key32": "9JMFt4jn5TQ2DSbcy1ze2CGYqdva3EHqvBK4pVmWgzkbAD2GCSfLwY5qg2zG5KcMma91XfnPu751GVqrRhyyUQm",
  "key33": "brSdJWojKiH7jqSQnX6UZ5ka4TXTNLPEX8mGi4YfoJBNmUQXFBj6Q9zCdKhjsXpu23bPV1woKTVHUWAbiuvKf4H",
  "key34": "4o9gJdWg4k4bS1KDksivNnDnhPh75wZW6YmQxvJdGrs2JKNpXYT5kUKsK1NtgTjjaMjwPghJZzJhiJPLjh1KxrCa",
  "key35": "25bqnn3DRnKwfRQEQ3ojk5tki7knXT4bTTJxrYLQvaKHBHVqZu9ES2pGxP4hcj9Wm7uanSZLikBZDwroM4qBRx4F",
  "key36": "2Koti3jeCLhYdZShfcc5mwb8kfngw9fZwgSN4zjoZ51LUWnxDnLNJomDVNwYxyP52bEWAo12v9seBhRF6ffLmXX8",
  "key37": "2xVumJVZ34AzHeKTwiAfbR6dAqZPcE5mnacGjpnTfyy1Zm6S8bVooM52XsCfgbY4EC9vyM2LuZu5kggaHFqrxEHZ",
  "key38": "4zPAFJEbXbya1oGSF7wCL3hWADwNxZ8ei4V6YqBfHV36ZsyjRifzaiMy9DJmrC95kpUHmXFrGQw2HLKxYTFJqaXM",
  "key39": "3MWkxbYjY5XnBf3zDgGFavJLKdCf98F53NqbRrVR8wSoxfJ3YuopQF6tbjzq8FdCUJaJntszCQ67Wvidi4bW6NGt",
  "key40": "3aKPwG4YpNGc2666RDxFf8RtoYBnv7L2rbThFB3nrEJidVinXVVWUtcseZioK8EvZtk4NGYr25N1AUE1KViMuZMZ",
  "key41": "4RMNV7BmRJvViuq7WdqvwRs22o6pKbbKRtYAA6mYMn1sujhgoUm4qh4VPbTaHuPFxrhbGWxyYZ9GA829r82G7Aj7",
  "key42": "5u7TRHkTKCdvoMK7FyH8jHCQKMLUPK771jGVqPk7u2BLQgmPcU7kmxpZvohEWyXJ1QQD5yg6eLwouuuQMN3aGW4f",
  "key43": "4B7G89v3wSoH9BydhRNAxeRoF3GKryuzkBu6JqmKPJCYm6ZdRttRJazxcFtu9gEppUVYKCsr5ueRPqsnVwooXdWE",
  "key44": "cFnFPsXi22cfedGkSYZVXocTKxxPgxYw1zvDzreBNUz5qnDBg5TATUV9Qs4KWY99rWyvJbDQC6XjygXerzptdeX",
  "key45": "2NHEFaWodfvSPMpxmPfhzEBLCZLnNdxiXZL4tEDyottwct8A57ViwUNq3NM2dKzdKZRrpojPGFz6vCM557YoFUvw",
  "key46": "DF47ddMUrSy4rBvs1QEZeBCEkqkVN8add14P6434rQrxYX9PCXvj6xWMvPxLgEV5nwtFsgmyvN5WfUUCSYMXijS",
  "key47": "2xVKaKv5h2moCWtzjf3QpQfjzFqnD3B52BT9n8bN7KvRse2bRXBAYYwScaE5AGBZoM4HfB45H7jnTguA9GcJeSbw",
  "key48": "59eiVmonZLhuBgBBQNVRUMuwtMymuHt5n4zu8Kd3T552LjYZ5qiqhh6FgTTmVcx6Djowg711CTEsFv8v6fG4yw7h",
  "key49": "sy3AQfmxct6BKEKVQMXrym37mAcvCc6iD61gbxfLgvJzkCT45xajFzrvYizaN9wDcAs61RucRCUaSYCXShEtpcq"
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
