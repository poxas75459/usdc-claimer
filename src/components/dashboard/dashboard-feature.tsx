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
    "NvKZBAQVankJ4FZyPYzBvKLTnLRNLpxJ1s8PHPD2mEmxLNq36Su5XG8iDe97d2AGnt865stVJHNY6VW41Y7zJKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546nehwgu9bsPzF9EBB9f3Pq2jKUwAvg7uudqkXER6JxFtiWCqh3bw7HQ1HTRaBGhgfRmbBsNPhHibS8Dckg1Ex9",
  "key1": "4HnKzzT5NXsA8Qz2TS2nkZZkwV4GGAh9kC8eZkL8LrvhKrCkQgoWGJEANpj7Cfiy2r6Twayf29tAF76uqywAUU4J",
  "key2": "2YH5cTouW65ikcMxbNdn8AnuufKDQWfiX6VSK2CzMUMRUqSyHVM4BDVstMbtfcuc66noVeoeX8y6d8vsxrrt4Xxu",
  "key3": "4FoAgPuNusRZNuYosKbX6o5ZCNuuDVNBSey4v187X8ZnNJiZYbPxMmaPURh6zUzqWpJ5soyWpzQAtmpQ2UkUDaen",
  "key4": "GamaUZFe2tSZNbqygDAvcuRN8RwJN1zn7pa3F7T7iQd1FPCK5CRiX8c79FqaDZ43ZGVdVXmdvt8D7qqENpJNc3f",
  "key5": "3KSUXNtrYWmB6rPFGkZypKCArVEPj5P9xQcDGz4W7TJcMHWWP9mVmPtS7hUDVAi7m9JhDhRmnANby3pyMS5mhL2J",
  "key6": "N9d311uhAmS93By46EqqNPbTnv1by5KvDe74bT3AnosS76R6grnrAwAZUAwsj4UbfatAcn3YGu5MHBc4xQzT87R",
  "key7": "7Qy1y7zFarwxtfdMYhUiwSnpqqYUC8xmK5FBwFDVcVsUDWroQkB7JMPD662kLHU1YRyCHpa793XZc7Cz3wPT5CN",
  "key8": "2uRbJze6Lm7ptFA7cT4TzSoTBCeEBnQcdhALW77yinauC81x5ffpjeiLQTmThojyTXTLMMF5sK5xVhH5e4wpDnPc",
  "key9": "3JiVt4nKfivEaVNMxDoY5SAmrGDprcxKRbE2YYzM767B5tDQJQsC53roR6a2THsPhmUBBFLEjKQpqufEFcyxFUan",
  "key10": "5azFbBdkTBus79wvfVLTA6596YQnoJYdw75fjMupSgm1HEnapcMYaGpXmvtBBqH2P6jYF32xQNE6PpTMbqfx2ALs",
  "key11": "cJAKnXw3YW3vgFLLwHrkLwuEzHt9trEzKpjyhPq6Xb7j6XVXnKPHcFnWoXBUDM4uHgD2gPioZrXVY2SdQEh5DLd",
  "key12": "LZaAkQCCXa1N7djGQ9n66z5RT1pygvLEZJJNNJquXoHkh2SiXfGq1t63wDm94TE9Z58M6QhjoAbb4qhHs1k816x",
  "key13": "7UtsDMsbVMMzDkgyvKVjuecXnFf1pP783UddHZhtnniDJ1DK8rbfR2TpgA5KSmVZdtfvF9txwmc6mw2bpBhHTp3",
  "key14": "2zxyddLUR6UWpGNexLdrXUHhTPkDa9S29kYJzVXapPKWFi5MDbSabC8NGVzmvaGRK8nFbpK3DpqapHCGXWHS5oLm",
  "key15": "2CUu67oCKVtTe5UdZ2JndCshazpuup8XfBYSkF6Pm3uhqpT73FULToxYk9ti3i7FinjcMVjFPUwQV6vmVFiNuQfm",
  "key16": "5Ypuw4kuSJgaSFMb7geePr8cQFkxbvYv3kSZWmfg8optPBcRnDTMAYMsZxWA3fgBYggA9Us6jkHenK94ZU7HFf2M",
  "key17": "3At5wkwTMETEqtDt9VaYNHWFGwzEu7Advmo81zgCa2F1Dd75zYFnPSAFEcfau1o26d91vi3vtmWx4XNc2ZEQbVfA",
  "key18": "3e8x1p9TxF8LiXKNkEUkfKA3RmEVWr8ck1inR9F4iUc9oKDPzv6aNQztr7Msc4kh3HxacKataEdEpaYvQTt6Bad6",
  "key19": "4kTf8SxChmzXMbdyZKRYw7UsypRS8ASzdxSkj7g9fCY61DvweiFUeQyjWWuV651RSrTVgSgnooLxggVvg3ECbcze",
  "key20": "51umYoUx3zN1xRCEgAtXfJw8F6mDFh2rZNxmDwpvVB3XfCGJ5yi4sj7PSynwb6JR6vT6SbzPQ2koujjUCTmbsmbg",
  "key21": "2KdXmTFT9wbM7DYrSWFCcgz82EpUCSywsUXxKNUL5LW4d6uTT9sBmh3hRrJTb7HcyVDsswATptGCWFpVtuE7MMvo",
  "key22": "2eTEqYCxH1XsgHP9prNgC2KWxwSVmgiPUiYmRzwQkJDnY3pYuvAoBimUHeqNQQPhBREwR24TCX5fy8uPFtShXse2",
  "key23": "5LHRCD2Fgyq5CmjaPjEywiR6wNWGc87hnxVSL1ubGiJozNgutQiQZ9orzcL8pcKtnBeiNASJvo2s1YoRopXK2d6E",
  "key24": "qkZYg71ZEFVkrho1z3QP1yhi7aWqdxYQB4J41FUfGwxnrt1AgyhtKUgoc5xx5EyrQ4ZfN1EhSfMvvjs73JfKt7U",
  "key25": "2HjE3qVNh98FggtRfouQ7jefcix9Dg3sqhq6E5GaNe9tggUN6GbTuTnCJ6rucfcYZE5Lh5a5DxBWYxjg1GxYQ6DQ",
  "key26": "3XyLv1N9z2doBcum8Sw5dvgUEWBomcMfrmECCwvoDSorwSmvccMrN8YdfeaacZHC7QYyaepq8NVgQX9MLFTzdwyR",
  "key27": "U43f7qwsUAzUBKjrD5ayLeVzFGkZ5tFwSE8vjH3vRWrzWrGdozfZJvro6koWXqWn41iSJX1Jcb7gpjpHGb9SUET",
  "key28": "56BHwwUr49CNC9DaADFaGyxQjWrHRDnCMzqxNR3n2s8iKoCxapGEyjqYaKj9USuX1JcBWptzRvixMNBohh7aM9qM",
  "key29": "67NVt9ASJYGjppAXPexiBVrKaDGQgdeua3n8ZaXDUYUgBk6yUXHDGmeU4HQ4DdtTxsdaiWEMAnB4s4yz3EENRZRS",
  "key30": "5wQyS2uUekG9J44GcvnwNbYbDfzRgaiG6AgnDYtgyWirhRBVu8g2E3gfG8Sq2U1THDRHGNvpXfFQfWoK6swUiqaJ",
  "key31": "2AQ3Yy65txfG9edgjEVge1GsngpvKNLvNg8fTDQobhpZHQDfnptqTYJnfybUKVQySy2q7V5gH4J6BDL4vnRYHjg3",
  "key32": "2xeZV5tRtrxwosRSQXjTaVm91ymmTr6fmjcjg3EqURYHgMy7UCN1fBAtrmDEpQPa4qHxm7o3Eiag47oDYioonAVA",
  "key33": "5z8ermVQjwdkWvS2xfMbvYreJ7Jd6EiDehedNfG5m3Wfi2BUjshpG4ReVWza6GTYrT6LqAWxVKPfeTn2GotgcGSo",
  "key34": "5ZxbJ2zd8H7MGRrRJdevYNLgeuZ6VFop5CaBauS5dbfRQ5tTJy9TSH8bWTYxwHmY9nucz8SToVmFS4RSXP1YJHAh",
  "key35": "qsFQkgaAVnvQa881NBSJtm7gCiRTQZgdS46TqFnwonwjfrLEgCH23dNJGs7BoVcHeYZ42XpRd4k8XDVsYMFZbE6",
  "key36": "5RpaTNoKszGtZDcyTwTmvagDkT6mPLKXxgj3VbAenpvQZevhvdyaxQGHxNCXDZn3HiS5Xz1LPo8SVkNLGi7Xjr2u",
  "key37": "xGSGorDpfmht1aUswE94ciwoTFXWgfmZatgP5pYEyrqRBrguTXYSBokmjifgD6r4fgmMC6tupLL6N5Tan6BBeYq",
  "key38": "61nmiDJwBetDrsBKgu37Y8toh8542b7c7PgwZtg3v8y2duWSgY8uYVEosQTvFaBDuN6c6Ns7YayNpRhRNJCbETM1",
  "key39": "3hMBuvywQr6vSF8NChmBL9XiJh2hdrqeZFjumaPeX4ftudaUkRzhNCLnmr8j8dNpgeGmFNwbtkDEMYhZEwRbAs2Q",
  "key40": "4C7nMp1DipBJBrtNnfjZwUTqo3N1ijRFUB2XWjnnQEx2qQNwqUqtWNzNbUpaTm9kZBtZ7xdrit5BmFbVS6tTqiYm",
  "key41": "5mhxpGRGdaeJxQEpENPBcSDMHokrMDqzsoAe8gjiLYjfo6zuQNg3qvw8LAp58nhrsN7fjzYjaHgoR5JqCYY3Z4sw",
  "key42": "2ssqKDF97dVRXpSyfufcbMHnZ1ZwNEitKbBWhKaQh7xDpavmuz2h1uoyVsmT1ufeoSCQD5vU2NCYmAjeeNyqJRJS",
  "key43": "5NagHgx6dwaMhBb8dTrodaewaCeNKcYBNaCXg9cpKFjn6A4TmfmrqHX8vC3p6FdJgJyG7bjarEu3XSE61CEj4NG",
  "key44": "TimYKCZUNv2iF7x9G9HtAS7KBMRUMHrBbuRTKP39nXGJ9wNi9Z3T2sSN5yoiiKx8aTEtqgpGwuKzBcnxSk89GpX",
  "key45": "267Segyiy2A5QFF2mvA1gwgmq6vvGh6LuupEBNjV2txgnNT6h8GXbmigPLW3dcLRqXgpuR9aPiVgo9R6ZncXHrqX"
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
