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
    "cAZJyXeZEKQgD5R18G5QoF4zgt4YUHtHnVhKsCcsC8gsh2uVSmt8TP5cdbu5VGsUoQAVctyzRboDRsWQBHfNPKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xDMC6ngR2r5CJBH8FfWPspNx3XBySTKLeCQdBE6msH7kpfYLv2wRu5bp7FLkQGRjNhnojWDGnLWYLAeS13esgF9",
  "key1": "3V7Q2GUp46Qxgp23SPXmUdvHYJ9SZ7su7oJHBcNdQx8ei7LAoXkzSwQs3KZNrgk3zkscj3Ur6Y7oSLkvGbSFa2N1",
  "key2": "2smopeArJ1h8uBtGMWiuFfCTPpDUEG76WnguZM7PiVvdUJefEnTbmzfCDsSzcVyF6XL4GtLx7PUpzSyw3oM7w1re",
  "key3": "2HdztLhfHjpFTpssB2hC35gAzvwjSAeZJgBfEkN2QEM6WmNMvfj4wttkaWcATG3MLzRnZvWwSmt1M5mv1Xrormut",
  "key4": "5dcMn4oRgGnCZNhNjfeELqSjV2sW6wkQSyr7uxSX7rXEnhBFmBpgsgg1sNk2HSe5CnKJnFGdx5mNkXERYx3ZGSjA",
  "key5": "5NNAsoQkCV8zuqjLKzhpKuZwx882QCMEPqwTULhvbmg2Bizv2yJtdUDmY2j1pWTAEYw7abPPaPCxk66XpoQcr46w",
  "key6": "38W5f8be3XSZF4nikhqwQkVr5PoXpPQzwAudywVEGKFWdpCuajwgfA7Zwu1VDEC362VcNHr3aNuF6QZKRHwDF6p4",
  "key7": "3vB2gA1XGttz3azsZ1vgjHs6Q5k9igcrJqEJJ158Y1gaXuo6xQqtQjWPVvCqbVgXsBhUbqHddkjpnEz3eUxXei7Q",
  "key8": "5cWk59cSEtZ5uHtHn483pV4mj2kDyZTStj2KCuFZnaju14WDEdNjxsytwMWvxb1AcUgZj8dtCppNSvJbXtwYna3m",
  "key9": "4s4R125Eh3Gzv3QcZirUcZdBRsdMmjZPq4vY1AUqmGX3R8ho11y5AYacNFK755j95Lujc7DVSsTpzyqMP5eBdus7",
  "key10": "AYpiQU6djdXN6fx4xRNJmCfGYkDLoBCnzrvtMFvSjtbaTSMp1bWAGBg3evKDBrqXg1fnX9XCbexd1GXU8k26zeX",
  "key11": "2voNF4MEtNNztNnenjRFBcUKdFRHAFWjqrp3L7e989LxECpjsW4RDgYbqBR6DrsGSDvy1fTpaCj7kxGnCWddjsjn",
  "key12": "3Eib273VB92YY2rYQAe2ZCvjC7mpTPmeejCxePs25aEqxP7C7vhNVaiJ2tmgiXS9LwbtJAtAPB44p3tvhLAyjuHC",
  "key13": "3d7AUd22Z6YjdPyZ3nXUatFEbzi8eAzCUGPh9uKZKEFSMNWrNXdrAx3mgLF7q8ohtr9Yb8uQzFhL66Mk1my44CbW",
  "key14": "3Qe4VbWBEmqHAGWygmd3yzrAedU15914uvty9vKxusVvMuX6UHX9vyL78qYgWwi6sd9S4d97iGF1YLCp2xLGzCc2",
  "key15": "4gCU162jxywCjQxnDGz9nKyt1LBueHEbuy67xkiu6nu7HaGR2PjDiywrj4fdwbMVXpXVBgSbRmh1nKREMPrgdokx",
  "key16": "4ynJLAqnZPfztziCeT9cERD2VzB5MT1SFojHW1Da72xP9xWXSP2Bc8JRQVdHBJNcEEFgTcdwsJQQGeAEAfxxwXHp",
  "key17": "4YVSYBn4uvc1QgBB4mvdCv4htNkkfnFkSqUAZ5REC1JbRAMjrjJBBexNW3pLw6nWdqe1opLA4w9qBUCFCNbg1Rh7",
  "key18": "5TWFfvuWZhrWStwaTfAXsPCn4a2cHAvVYATPN8uhaH4PP7LS3QGCEazMb4REdTyXqpYHkeZWFcGnGfrrCzFJ3mf2",
  "key19": "3z1k4n2tWpa6X5CpG9VDnyhG2gfmzMGz2ARERyz4T4wPexREQcRh6KvTStnRD3UyPofEyZooodLKNCUxkFVfEiTc",
  "key20": "W6RMkpqbAkTDRkdAcwNGDVLQjKg9MgbWCEt7vjQCdrrDZrSYJgbLEcYUrHuhYte8g5AoaaV5ZK7CdZ5zicHEJQf",
  "key21": "WpU6ZPdXS9hWVMCodQEFgUTpHJfiwVPCSRmEmzEK5sgaYK23x7KFEvZDUZznJoDzNUcjf5AxiGBgre8C9wTEutx",
  "key22": "FiuA4GhQA5iE5G4vQa42M3HRMeGBq1fiFdL2vZ7uHAVrSigwzwSCNQypGLvKiSN3JSd5jUMRwj6eLBrHopgqKn4",
  "key23": "5f1QnWhmZLZ4eKczsb5p6QEN1Lbsk9RNTe3RAQ9U2zwUDtQP1MSLVhKCx6L38pPLqr7TNxe9DS6fMakUUitQYG2Z",
  "key24": "21qWUNPmLyGNwNBD5AUG6m2FtvUYcH5wCD8ANCLs5oXziEgMzzHocNpNvLrvLoVsxY2rDRYUUhcyhb6aXBtfyu2D",
  "key25": "5SabY5YuJ4nEcUpRcdUDndte75YqWvkopb1aXhR2nNrMzHGguYEeS89vWaUaEjexFBFgbqjgYC4kbgxZhCLb5x8a",
  "key26": "JiSCXTqQTWTkahRtLfwF3YWoWojKf1n74Ka2GsHpoFdwKnqpxwUcsUcWLVQSy6C2r6fd61gAoU9N5Fh3RCWYQBm",
  "key27": "31hJbEaiUKmBLzE2Muape27PDJU63krtxcUjYNmUu4Qq3sq3BMpapVmQwwWKp1sqvELFqMyVpX9L3aZr2aq4yEke",
  "key28": "3Q86ZUKLU3nYoxgoYMWhgS8CDdgZJBRzhbT4pgh61sYW4hw3zyCvToCkL9rGw4F1MD5AKgwy8cou49ZZVuQhBH3o",
  "key29": "5fTDamAK8DC6NoudDHBjjoBCX32cGC2vV6cehPYMpPJy19Mtg9vJBcWJ13WQicV8dnznbjo7JMryxR8VsyHLv1rQ",
  "key30": "5or1xVzRdifa5R9QwAkXqkZWhNrrxWoixmNbKUaPUEGBZTPdj6xjofBA5cocqDqdrfiacM5UzZEeNUuiJHFLza6e",
  "key31": "4z5PXooJC4Vub3W6YmoifQXy4Yn43vFybzsQH7Dzv1MSAbC5V6P7gHDzNomn8UqxWRgxqWWn1wbJHwqox1Pq2U7Z",
  "key32": "ByvQChzePydYGp6WdbunGV6k8nagUhfahfWBPTHui3tr7ctF72u5KQrBYqsy44zmXTPXEKgG45y4dgCTC7EJSGW",
  "key33": "rDcRHsxDavqga7a4ToUNZ6itR6cgc5DYwakSTZo68znuTPWDiDuUYmh7t6qQqvFyc8Z9gSbNASxqHa19KsMHmNt",
  "key34": "4XyzPH9wFGDStziuF8HKoNfbJD7jQarR4LGm9QdSc2b9ZQmHDJvH1tJE4V9kGLXxTA91VjHSvmsw9M6ZmtQdAkzv",
  "key35": "2mGR4JG6JZzooHSXoT9HiWy6X6BpVtHAziVVDKYdNaS25K9jd3oVfjAWcA2KpieyMRabPBXCZ4NBXjFDMLNiM8iP",
  "key36": "HaktUByZxVNgC6nBPUVwzk2F7PZQD8XnZzxM7NEWsEDP7EzQWsP1GPa7tRuJ7fCeR2tX6QhENXkHGMpLaaHCyYQ",
  "key37": "2tSWfSkpSQ8fpVXa2X8RvoqKf8ziV1YkLFRiduUj7zdDXRQpmrc4PXMMfRAhyDHTQWEFuuFStinp4BUg5W3AnLy1",
  "key38": "Nrw7izn3ekZdLt5vD4bRHNvbQh55AGqhsvDmQ9acZYkjRDVZEEyQgpsygc1kJGyPEe81WmzXHhsfYWZ5s45J9qH",
  "key39": "21shaxbWmWayFj7xEykawbNh5zjcqKeUPD6RkFNqGHJkRYZ8YbDjvxGPbuMeXWnCWknyGRpPDVyoRsgP8iVUMr6m",
  "key40": "3yHcrUqfr5cyC82BAFme8N7JNFELrUdmNJAMts2V3KLbSGwzukj4xENnz25Zoaqv1SEUdyqoKyhWZuCEbwKSsW5R",
  "key41": "5o4zTWi7nJfgt2qZnzyfAdk1Gu6o36vuwBzKsbRC6twFT86VkawDvikH3stvxgBHk7WQdZHKNhYzwjaU5y6aAcvi",
  "key42": "4skhaXVCRH3fJRjs2UWvxmaiDCtKcEJYBUwgoem2Dhaof9uBg7UmGXsxuNh8JJESj3z9r64hdqAg55VsMAyqSX2S",
  "key43": "51HAMWW78iFDuwFKcBwcnEt3zwdMC1baPoMhVrzMohaP2sp5DAKESbQc7FyitfZwxjuSevZNjdj3PGZcxhXj3pWq",
  "key44": "5KRKcQLz1M8iReFgqjswVxMPAt6V7vbKVf6ropwvyfiKteCik3TsfNJm8MuBZpaqh6f4XnPdPdao4qvo9ConhDEz",
  "key45": "7d6XPkTrAYTNa2Mb8c94wKMMcAh8HMyMRseZj4pinQRHyBb1enxUhGmUiDjV2DKmJ5urxLzEb2EAYUFVVNd5Wej"
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
