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
    "5sT8NgRDsJA7AsGr5yGgboUiKVzZitTPtGYq8ajT7qwSXS8EYiWnh1xS8SwLhqmDgmojPm4BQrnzCyD5RbUU6inG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpBxRQyqUWc87r8UNsV2E9UbLpM9ETt1j1cioXCgmQN1UnHdT6YVv1H4zLrshd72tqQf6JJMQYR4vN2BTu8Nqqe",
  "key1": "49DFfuCCdaqWJuWpVL8BTTLCR8vTgkvaFW2yQ2TsStn8RreUAocV7t98mzYaaMSKXomGjtbzXXFd1Fadb2FZzdwE",
  "key2": "3FwoKSMnyfjmYZr1AYbTTyDTmA1vH56p75zsFm3A9FqU6uQ5JBEWZG3bbgSH8dDmwScyFw9M64eQfckXqV6QgSZG",
  "key3": "2mvDtmHpDXruocKa9UPBULXEcUbZxPiPuUfEbCa6oGC17wqb1gSxjAna6jXLB4UQQ84gsyRAea91BZRabNvXbkJN",
  "key4": "4LBpkrWFdocXGxbCBo3fQma1zCcNNWgvSZW296fN8yhvNTrauRnGALiA9My5bsirwgveVcjECDFDjEYVJj8LE8Ji",
  "key5": "3nSNBMNueBvHKHX8nb5Utq3jPiphaQT5HrTD7PhmsCkNETRxDkKjvE81e86J7dGNGYoMeHpapCveS3gdoVaiFAo5",
  "key6": "4RnskmvsCRjYaAzN1wy7mNsKbKfgZesnvpWhKDTyJ853upYfx22bchQABSYdNN8X3poUnPtqG1y3CfttQ5kpErWn",
  "key7": "2BZ9goLrFShR4G3zdAEC8fBErgA5DeK7DSN6S9SohYRLCtfDHARgM7YUumqGm4ztHZHjNVZer77gDCLGTWP4DHLg",
  "key8": "4yuCeAD3K9ibf4JA2q2Zb2DnLYkKH1amVMdopDuP4P9xze1cQhthWZTLUeHmShSEH1X1wrZqaggqX1q6n9N2SCZ4",
  "key9": "3PBTjxvsEhB1J2HLgfncMhZ2s3Um7Gey21Vg3nYbaEGHVxSDGesoaocqTWsiAiJeJmm6NJLcQZwcaiVdheCdusja",
  "key10": "toMgGWxTje65bNaG52b1A3rmcWBP3ESw1pkCW1V7svcyCYS5o6mSRV5FsrXvb9ewxtoz7MzrHoGUyeVMNStrG3Q",
  "key11": "2JDrCN7noyA4g1PnpFhcnnnLn7kgurgKER7i2pyg1p14o1ZnYVcitArdFZ9wYKs3g2onH4ZMDeXiDMBaPnEfSGS2",
  "key12": "5qoNUTy168TBkPn8bH74dkx9VVkoBHSGjAkkCtAH1288a6cJzwcqSZ9FWa5rhgxMbpQqeZ5BQy4x2GWHzExghPi3",
  "key13": "5f884iTpM6fLb8qF8PqAHyjQ9oqCg3jRCUyTKBi8G5v5xu9o625Hmg27HBZTcpJXe8q7xycdqbJAFshijUxwb5jK",
  "key14": "2rpaH46kEB8DY13LGK2bWBEBMEeCkfbSJEC7BiNsxm9Edx1sACHGnHRp9ML5x1rzBtMWxLw7EhjAb27ijGpc5RZf",
  "key15": "4csqzwVkcXHDTHecxzezNeHvBNJMnTJpuEjGwbBGH466tVGEUcnb1KYPBV1v3MabMRtHDcCTpKp4auV4XHb8jrAA",
  "key16": "38ua94pjsPktydZ94c145VmWXVCdXGJXsGF3WAz7ZRneqZYm43UvAzRpWDLKGmwyNmTh1YWQDrNnnHs9NVBLEfRw",
  "key17": "122qSBSfgrtXRQ5nD5FCXkQcdVkRCknzzZUfKNJNDHwtMnKu4dVpAJBfwg8vpgyBkNE8q1NnEmyeKcH2ezUc1j4H",
  "key18": "oAaBr9hutcBTw3ULGrzSfHHqp4Z8auYfukkffnHwy9fVCfzRva6TmRcPLFg3ELYPYQXkWmxw4o1icKgUrLGUKpq",
  "key19": "43jT4aN8Lt2NFDH5woMzUQNHMhq15EEUNyiWFZZ5wPV98CeQEQj8BKwNiy7nP4t7x7ZajwFVYQ7N2uavtvLZUq9e",
  "key20": "FrgVTT6StzaEZXc5XQ3XWZGpHpGNJGcWrLrnfoPyEDfapNDXuMyzyrA8NCgQbpegtERZbpChDQHABojWLmNce3R",
  "key21": "2KCcpecLKRncUj9xeLT2oLAzEowFQxoa3R57HoWcGFxhwNEimyxZYBdqt7mrjQSpwhqcF6gSqNVW7ofM7yVZLH2h",
  "key22": "2z5LnZqu94PNHnpyqavfRcMaD3KrQkFgN9oVTgmS24gZXdhStgkhtVsFEGw77D4PnnwmxmKXaNq3iqgX4jC2yHWs",
  "key23": "c4ZBGovei7R85wrZurcEBA49VW3KCBEjLa53uCwrMvjWGi43TRo9n36nh3eW43hVXjGweqfMAumGTryRLhduXg1",
  "key24": "53t2ngLxwkZyXq5gY2ZwuUvmH3vYmSiT6gYNJUL5S9kSSZvBh5aZXFXmtAUbD7C8wkxkC2Hf9nWjMkEknXKrwQQF",
  "key25": "CA7AS1CR4m7NY3yskAPv3SxhnGYEpTYMdWpaR3tVxbbSrBeEy5G6R95yqWCBdSbgsCVBQFXWPE6qiJNKnGKDiNx",
  "key26": "4Uk7FatSpXyVvs1dXnbmewCMLcQz7ASGXZnnWmbET3p2gSp6gU88AfhJYYTwfr3bDuzvKkUx6MPttVBQGprNKGNZ",
  "key27": "3HdewUGGWGfmi8FkAufPfSy5iPMYsRHTKoHyNus318mLYcWfLvFUqL9REQ6BYRadRJ5D44rduGoZMcxBZ535ugoo",
  "key28": "615VDDsAY7W55tDnnMCNssEVHnjBogvxRSjfuBi79qvuGZzQuKNMeqduvtiqU66U4GtStg29S3VA1X6RznxjNiwY",
  "key29": "4M1Mvyj4yBd69va9hTxnTWcJTNpSrEoDXw5VCFutWSeyjfpAcyEzRMgx7EweE2PA5VuHis2oYcYzwYr8E9cHLzAH",
  "key30": "3mzZJr5WTufjkGaehNJFfxAFHppNT8Wmx9YRRTxyYHQj1Wci2RPVV5adBAoFdPgFCMtEKEmdQECLmPiwB8yBzDNN",
  "key31": "vEyUswuTCAHzuWPaC7ErhhqBGAD3DNna517x7PmLRR9BFEN8XFUE8RMdrBa1J4XueAcu8FkSyzvkDA6R94UDvyX",
  "key32": "5yUQKN2DmY71EEn4AUFJFEFyb934UDtKczx8TjGx2D6XiJjyYFEAq9CiAzUPUWrM4NF2sUaz11b4D88UWvvVJD4Q",
  "key33": "4KFFDSt3ejcXiyEoAENzXpceWHRguS8zNnF4zG2TkzaWZPPTGM3Tbbpp2uzeGsz31iQoaKyn5raoGpAfGs3fASua",
  "key34": "418MjVp8Sa4AuzQoP9nefE8S6EUYSAs8XATewLe4V9Kt5bKSKPoWRyTuEMjLQB9yHQJQBxjsnvJMbG93cmNYVQfE",
  "key35": "412Bv5Tpj8ck93hARREH1cdf3xdPZGLGD6NuuRLHmxCFJJTqaRHjLvjfnwjZ2tPghe4PtqxEXyAp1zYPvPi2eeoQ",
  "key36": "3Erbjem2njTkfxxJB9QFL1AHjpE3Lq4bj3APwAUpxV4KDJT19iuWMnHcCrV5kH4vMph7cnFz582vj8DXcSo4Ckwm",
  "key37": "T7foPLAs7YLB4B6atnsNLKZ3U34LtUn7akotdJAaUYXDbkCzPuhsW9T3QtUGZ7gyLMbfinusJyWDZAJ4N5fwjVD",
  "key38": "4VHctn4FXwXf8E8rEXjBV78hYG78jGyLAi7TZqA3MdC1z186UgmJwXmhEKdS9ryzRtpCufsffAiWC2bsKu7Md2n8",
  "key39": "qjemzrCAL71XfTk9WYLruHKbPnC2hR4aoJR9Zmmyyhpg4n2REfmfm17Uj8zxirB8anuFNBLmwh5enHsQpkLZ37F",
  "key40": "5nUohcBFkJQtXTkZ1qid9zefPuq1ugypbBe6D4RaizrH2YZNvEZJK56i1Uz5LZPpwTF3XMKzK8VfTR8oWkfFyaBq",
  "key41": "66Hgv1GB9HGYsjR4BPqNM7hvPZqqAF9noN6jpBenAHzLBgdncJdEmN5JNaFL3E2239KUm5VEfJ64G4sQDrnawSfv",
  "key42": "XxqyaP7Egdz1aSMY6DXAUh5rJ5xNhRMAZxy84xeZhB1W4qY9U8z4KXMh9feGurZ351XQ9KzQNuB2cENtHqDhfU8",
  "key43": "4psXWSX6vaiY4qSgrJ83j4F4H6dofSZN9bLRNG1ztXhL3h4wpPKgMQ1avKpz2gmLRDJKXWP2gJYyvofHcBCpLmS8",
  "key44": "2BWqdNjENkYqHQUJh5UNDDfXYPmwWMHoRS7g4UASX7risFJdVzUnZBD7fmw276eufVexJTSVpM2fkrDHNBrtmWCR",
  "key45": "cVH6suKSioodmiVRNQ8DWtEGCzzv7LXr2BCJGeoY1HwqSTvg1M6LvdCWEZeVkFJX8f2rZCovztwTdR4Dfme5YCb",
  "key46": "5GmgLFGu9LpgE8XLb8yvCkq9onUbLNNt9VLcFALN9HW4Cg793e6rJqnrvtPXdZnkDWJmhRUMNrEJkJmxtGbucX4k",
  "key47": "4MceCTgpyh2S4zbnm7f4t6NkFWVLuFa3Vw8VgY61Vu8RjjAXr9ZD8ks8sAiqnx6DUd71XgfXkibg628uR54ZVFb6"
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
