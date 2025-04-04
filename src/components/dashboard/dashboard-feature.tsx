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
    "4DgydPBJL7tcDUoV2P5E4KvKAsoZDKaH8bNbmG8yAHqZ6indPLdMVXXaQaWk7Kj8wczJdbqFaMky2kJ1EtBcNeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DAzdy9Le2kbR8fYsocDWdPSHuvBmnQe6jc2xmA3iynaXuz7Q7bSMT4T4FeqcNy5G4zMoUvK3iX85JKaV1CBRatb",
  "key1": "4HgTQihpxq6bNewV7JbCFGoB8oPtNvU2hwu5n6KRstBwW1i9378FL5j3DUvKcp34s4hLrU5iamxsgDPFnivYhKSq",
  "key2": "3Sn4oU71qdsvSEcRS8zSkD4XHbRo9nMVe3CV7J18EjxM7q6basvGPgBohpPCdyHH3LQD6MWcBTwsY17kCfcwZsDT",
  "key3": "4uWCZtTdq6pKNK6Pd3aVtZbKhXdgRF78SbW6J6fZy3DNkwj4dskwUggJUTk8EfP59dAPJzroEm7gT9YtzM5MAxrp",
  "key4": "5gXYSgBQkSfKjsWaMbBx8ngsHAz43FVKkpJL3HdpYFUmU976gP6nW7VhWa8naT2hmKbu4H3qknUZBbYrfHrnehyv",
  "key5": "FKQjrrc2e6pvANvt7gZsY52aS5BeQENMVmt4vdRYpozRLZXGC8LvgMWei65HBRSkPhB9SE3dZ9362kQKLbkzCHv",
  "key6": "J323dBaMHub9tb52hNwCD1WMjAbFQVjdLq13Xgxt5R4tUEESPdnXxtfzVrj65jc2a2i5BhmBgaQiiBPULokN7y9",
  "key7": "3GuhSjVfaMW6wvZgrnepzqPht21zjmpUyCAdgJQ3PJFVfoaxSXcqazhx2j21dQmkXNZd8X2mipZLcrWk4BPGU9b3",
  "key8": "4k8Xgc6eTK191rnmcnZAUVYs8ZnSP3pDY8pCjGGXrdXGUsYxQbTzgupNERQ5iHKbnGuW8Xvh86zX86aLo5svuVEY",
  "key9": "59KduFMcfJVFY6z5ECUZZRtnoDongLs5Pr7qrquMfHrDPuW4itnbv1AxXxg9YGAs8zQDMm2cHD1Fpxa9heme3DYo",
  "key10": "2wNFvkkyqRjmoHi6jQWP7ZPYQmAFviiYzRQrX9iof2ZFon8Lfd7PbNBNtgZqwPSb2tkGHgX7hjujqeXHqMfyneta",
  "key11": "2JB6WJaVo8HZaodf7jddmTVtGPb8U1hsn9KwXnxjx3vaS7yeHhmUrtnu92VVYR7D6dzVfbPrbYQuvYussi8KrC9",
  "key12": "3KwbZxtDNHy4pinXahzjLzwnDnVTAqf7ZPxdrTrs3YECzp2YFVRSW1gKHKg6k6qatJAzHVb9dStoTE7EAjD5mWHj",
  "key13": "3yX4y5GD5QiRhCysk6qd61r3UNho6S62vaLzXSMV3XWHj9WKzo7StR8te9fZRJaayxpsLdBt3cjenj84fkDC3w5T",
  "key14": "5fNQJNdm7GnvFUr9wcdK941LeLAHqdvg3wxFXmUTMqkwepe5FtBaBsHvwjLUK4Au6F97HtTZHz7Vqh5DM8vMPhAK",
  "key15": "3h61Hdk9miNKnW62XrrwZEStZGY1fL7w6mY8rtpS59dcCHHJct7ZqTQnPF1Uy6TQLwjgDssDGf2FVoYXqnovmK22",
  "key16": "2FGgVDTsCPtBHjzHv6eHJXhTxNuHSDxdiaMikCLVYUsWXNXAZHWKnU4pNnAnm3f7QhnmS3qQCYbsSnJSw2VfUp8K",
  "key17": "3JnhsRdZGGQRnu2V6ecikZgzDwFDkyrZLG5GctR8vJ1CUja36PPUvDnCH4wkPcty7hmRksfgRzvUDPCb6t4wMqfw",
  "key18": "4AH5xUcjcMXk564jGN7M7Nwt1Dmp1NHsacssrBS91hVGF3sRs6iDYtKuXkzp1qmpT692P6JvD4VPMY95x4yFnZrU",
  "key19": "5PwVsrsN3zLKmjNww7TKMB28dWVi1qLG9Db4xntuKBN64vvy6MGZJRiA2jH8MrB6qmspUb6Vnxoz2MJgguysVt2J",
  "key20": "5f59yaXeADkCiy32eesAUp11xrzWnU82gHn7J9RPjZ2U7sjv9h8ozkBPWSwRrzbbZCeUpwS1X1ZW3F2xxcqoBZJ5",
  "key21": "mNKBi4LwNMczu2CJWV1Lz9WZuduSTfnsdXULrWgMuNeZ88jvTJFHBD7DbxPfipeoLbu939ikcpKneu6QFVUPM1Q",
  "key22": "5DrKApTU2j7EFTkqqBeHp9y1vbNeJeksDaEudiAopKuifLjpz2pRVCwa58WbGhp8AUT5TUggekJ4Pcaq5BHHkYeA",
  "key23": "2h9eriLHxQeE5oLTxMnFaandvevpwpUV8nET9PPeE6xWzCHut7unMVEFnuq4mvbMsQG1mWJM9FxzS4YbtmF83XB4",
  "key24": "5Yx9phPE2n6fz535nYJPXnn1u9yyWKvXwWhiHXCkc1pbBDKY38FfGrTJ3tFK6nFMVs4zGrY5uH3YB7SjhfLx7kaH",
  "key25": "4XJmb3STpn9eJjEyR26rSQrHNNeNeejRxHXFF2raN6TbMEU2kNS1RKmaYFArCTVbPJjtDkraCzMfawe8n9dZ4NGa",
  "key26": "8yq7BUrC9WZW7HwEJq9rUg6TuNAhFcHXTedBcDtpyTSgRBZMxd9DwnUtmJ94tf5tLrRRPaMjrEbKEnay4nzKnJe",
  "key27": "2yZAVJZu4xXEbbVPGzzFaRfR9Zqc2kRAkn9RiyGfoimhAaRiEtSTkPedfaZLeB8wB1xebwXHERGDqXpH8KTah323",
  "key28": "4f2nah3DXux9FaePENZ765iixopYUS2sgnCp1w1BAoqpyzacLFM4qaVfAsaP2ECiMTLJbEb2RB4xKzYfnq39iRpd",
  "key29": "4uoFLYpjrfYLv9WE6p1R7G49QLpVQGpn6U3MyFgDn2dMyYsT8AC9sbi3GUfXF27R3ghEPFtVKZykEpEhiLJnaQMW",
  "key30": "2A1ruFfeYycbfTRdr5MWNGpMspkcqvevtq8oTFQCuoRpowivvrT8pBXW2zGf6y7xX6MR1FVBXSaarKiN3uM6rAAB",
  "key31": "xV2DztsVdWM6YqcFndEKPKzGkmQJw3HTa3CYrCG5USsUT6ggPou17iPi52Cn97QPmQ4UMiNVn8pLcANhAoMbAxq",
  "key32": "59zuyW4qE6dXk5FZC6htvAPtpt3hWarFKimEnBrpukNAgn22SJbqKx38BgDJTgWEQxvEhxha1okaeLSPuUgB8DcE",
  "key33": "5bSpfYQogTgLF3AEL3aSkgSw6gJDTmTJcTmazBxGrnSt7VxXXvydmRcySu6oe3FenhSePhtyvhWBJhy25ZvREyg2",
  "key34": "4xEZzKLNrtvQ2bd9SLMoMURzHod6UcccN9qU5DMJV7YLGoQSS3uJZ9gffYRSahYUwzQCyqo7Shcx6DvoDE6kqeoz",
  "key35": "2xVNBBAFEgNBJ7cxtXtw4FoTcxWsPfriXfjZ1DcrrvNfVXFVLaGUnyPUsqzAELRh2KM9BmoY7VtYx4NnWVtiGnq9",
  "key36": "2mPrMjaGAepZX4ESu5Xeci8UjuosiA6r3gEpc5suJbvbPx7VKL4475gYgs1cj5153BWqq4hsoM4hAH4bkJCrNdtm",
  "key37": "3JC6k9g5wnxt78uxD5NU4VHzEV36EGGNfExw2fAaHsHYXF2o6xa9VBnzZjf4RzgppMRSSHftC6dM9grTAq9nza1L",
  "key38": "4YSM3rknfwzBjPNF9HU8hCv2uFskYocoZcWZ33WaT2mMrNPduNUjQHDd3CtGVf6nwswXZJvbLTNk3tEKnfRzEF51",
  "key39": "2Ty1qTyGC6uKR6j7PqNx3aeE1TzgQNd84PwfQiReZYVdBdb1eSSd77Pg1kbsqwzrpFMERUqPJYvJ3HEV4NnpBA3s",
  "key40": "5u4tJCVVyzMAjPvT8wAMUvHL9hDi4eN8mVjSixuoXb6iXfpqdctwM6Zyu43K1F41ureBchHT6HoEaPXWyPT57T6n",
  "key41": "bnZU9F4DvLnxYdeYdGxNmvRcyE7BmAtekYESAxMtHe8imuNxqLtkuGGNF4jTgzJmWENejkP1seafsxjU3vpXcgZ",
  "key42": "2trWyZSzr9MW2GCFKVCdvgWkLFDJZb37TDztvnXu4XSd2vsQ3mxdbstMU4V5hWwaBM38b3VgVU4xXD7JDFQN9ft1",
  "key43": "5EmH6PebApfQPnwqa6oUogLhKzawbGLiT7sXCqc7KiCKCkvFxTGT1wsfThm4k8vxabv814vbp5bHpnpmnGZtKMD",
  "key44": "5uHDRWTcv5sNWas9uZJg9bmzvvwHMxPEkGWMgnMoGsVdhHBuF5vb2Vf2KrVwVsoNmKddbr2iwG3QA9yaXtfezg1g"
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
