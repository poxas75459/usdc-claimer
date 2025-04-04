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
    "2QiWRho2tzsfBdrMq1guPPeYivXrRLvBU5cpcXje5RAs495kN6V9JTUZPjecwGfoyCbukMgJZWJMi5wwddWuSVpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwSbr22qXH5eaJZraJ1sCmunXUVYkiJBuQtp3zu6WViZ95JepWMMbgbwowoXE3waJtWmQknRAZzuevxKu3snwvQ",
  "key1": "nTmBY3iPcBTViJKBFg1y6Zg7cAWieynEYTN1nu63xeFYkEEiWAUiUFtmt2e6qo6F7JQxceHBKCCpuzNguzfGf9w",
  "key2": "2GAsUDbVwDf6uMrCBQwn44KCfPBmUPX89EGUoBVjus7kvQG75cYTpsxP92YBTpYMGYTHpX4kNyHnKTZUYJNcy5Vk",
  "key3": "5WWVzBsvjNFjZzHLcunRNxnqUmtzHRfqfQHE1AwCA7B4c3JQr269cwG5DXFGczwGnyEvHL6Vy2vXTZDhcJQgURto",
  "key4": "3NvDna7XyAQrRGhRi4V3N9desS6cyiLeejcETBrxHT5u8x1DZyDtijoo8xA8y96VDfxz9MAFq5RRkDLeA3jASgTi",
  "key5": "2uPSYNpwjz4HWRmr5n1qj5wuwS91q4VNsiR85xyyYf5tZFgxLS74ZMjagTxy81DuPnXfcjVwD7ekLSiQ9NtYzoHB",
  "key6": "4briwCHusKSHQGaKxa6KuWoJgYBJwDE5boa3Dk8BEevwbaCMzPXSPRmJBWh6fS8ATdoYQbDUMhzwD8cREtSdkXSD",
  "key7": "4Ph1UmbyAHyz77pub3hFFLkEhtnYFZmE7e9GaE49PHRs6iEahRgBxNmArZDE8xAvuvHhQH6s5T1Pjz2AJ5Mt8qJT",
  "key8": "5twHy1f1cCRX25gEoEX2bZZxNCNLh2xiXTwrJY6pfiBRQS69MzWgj56nww4YURtm2sqhJhy2oryqJuKXuMABW6z",
  "key9": "c1JQUBg6zBcu4NnxwM45j1YYxnJxvL41dHuVrJUkyUj9qx7rp7ig9WmMLEKCx6RQnBcjC7p7nFonWzKazrvUC9D",
  "key10": "29wqVFo2TaLZb7zTaMUdgWpX4CuiRLbejn592ERgXV3ArrBj8HHwQ6vz1wYMZi12x8QdrPxAEBDvb3dVQGZaKVyu",
  "key11": "3MtZY5hLNYCtLgjGS7Jz1mm6Fma7HCfphdxTH7gv1goFQ4FEupj8KskEn4RvF97JLDFexUMPvWsYpyBDDYXyLfHb",
  "key12": "4ebJXfewjoqR8Tk6Bgrxg8VzckMAyHPauCmJSHNmjsJmWcMy5rQgNARqPE3mwcidBfRrM75bGctTBSC6MvPDxET1",
  "key13": "3hHCkfkbGKkpmyTM2zuFyxfnQVPuwtqzWo41FwDTEpMMHRUPU9W2CvzLWFhtxcPBJQ9A3dYmgzYZRfzwfLLLWmBP",
  "key14": "4WQX5A6Dv4Bi7bLMhV7enfZj46QG7iLFSQCz6UxXqhnNzAj55HjEbSKmugh5Qv74JxxSu9KVE2QEJbAkPQnxUFzG",
  "key15": "i2ytmoJzvYmZB7Shr6DLNytRSifLVCNDS8cDnYJhVEUwpG7cDdFYX1iHAk7f2fCgdsZPwr2aFzs7nmk52QXgXQh",
  "key16": "FNCjReN9jrTmag8yFvCsDtq4gokP8F2QfZv1ryoSCffJZWdTS6gEvHaPUzKiz2H61xMFyBBZBmr6USVPkWDn2Jg",
  "key17": "3dUFruwebHc8MXHpz6AeboqnZCkKJ6q6CtNRYxu96sSWW3hrmDe4pa4u6YkkdwutonnFVXDT3rxMuMVrKjdSLttp",
  "key18": "4coeZac8xTZZhk5kJ5hkiiCd8Ljoq5x75vfsJ21ZBnzSNxTCzgCNYczWiyFCVhkGMCLzhdLjEMZ8haHenB5uS4W5",
  "key19": "5vLmeApBTz2qdf5bD85YcUDrwxtQY3HvgVjnexwX63jSjvGVXHrEqJyNtJ3pWVC6AERWwwEndhJdhpL9n7dQh67B",
  "key20": "4dBEXgvCg2ueYfbzFiKA7AzdwK5oA2E4KJuoW5Zk3mGiL6q99DdYbDYQEvAVWSFN3W2xChzwJGkT3jNorBtQhJci",
  "key21": "3XK41fG8BQ3VtS87cLuFZmfxXar4wMaFPpEVZhrSCAePw4rYFRM6bc7Lw6V3sJf8JboUDbDANzpUcX4Lb3NemLX4",
  "key22": "2PgJmWBGAPXdu2viqC5xTjuMm6JkdSv8Tg6SefGzW6Ko7PS8ynMEGr64VJ58BAt4Xj7BZqeBcwq2Grm3Td97wkwt",
  "key23": "4oaNBzmNd5ULHynPw3EwkpxysqB1qhdRhQ2gn4LhdCdAyyrcg5zRsiHfuciutbxc3wa6uvA5sjhkPAskuSsX4uxJ",
  "key24": "4jQZ1R5LTsQEQ6FDDYd2fdMapjUBedhDQUwmwREyDk1YJaQhkSMWrdZNyoi4P4YUQKtqWnboAHh2rBjkj8WNqVdQ",
  "key25": "3h8nGBiKhzv4f7xvcyS72Dk4P4ZLYgsdhTrt3iwvKWzL1uZQdedYw8qmffC32tp5orPHrdrmYyNr6iAwxawmdxC4",
  "key26": "4kpRAhgsfAk1WbPMv9KGPGQbVpwtkqA8swa4AX5dSFvvFXBkRgWNVWrPcAaVXqyCPKTktVEZSkMUppfAXvCdJAwp",
  "key27": "5MaHeBqNFLD5yvFh95Z8mEBT3GJyWotygTqYp1guMUihGhS8PtBEPdszZRQgVaWFJgY4FKsCasWvnGdunK6crwSi",
  "key28": "5BHmEPrT32eHHd7Xo4mccqf5Zaixnp2JJFodj8JMJV69ntjoVqNXeQdBpnqb8NjTQpGtxx8qL3R3oPZkgVxBEg6Q",
  "key29": "3o4NLkwXqgctCBTr9t6qhF5sLTcHVvwnUGUDaPf29PKsdTGfnzUBSoYuMGAcSmfgmEZEeGMvmA275eU9uV1d6bd8",
  "key30": "2WoW2M6NkrFqcHBkkRYxcv2XC5sKjoBto7P2udj2sRQdRPfwfiFVtsvyRyzTUfmDpmnsHE8ebkoCGro3R8LiGD7B",
  "key31": "5v2Ztv9Sj69nnfPFtNvjw4hNKm5oeAf6L5TQ1mDDZMdRaL36AGgqmZdNSQy6gxUNwFPoNcZ8R8mJp7yTHL6adwN3",
  "key32": "JLGstE3hLkjCF6iTgpFFB2uc4W6ya1wAHUrpg4GhXKU6Z2o73vs9r5BBjWoHGzPsvnf9dwWnNep8SyF9EKAVasp",
  "key33": "3PhMCFHyHWyXmUTFxUMnwYj2drzZDv1LDDR7dJPvLdDeprTxu235nnVGq2Dv85N9dN9LhRSggvrxEtbTjHSb5q2B",
  "key34": "2gGwKox5Lq83q66GRSe6Q5q28syViEGp9A3wt5RjpRLPok77wSdUMbCfDigTQUQXCWAVvidUT4PGWJSMdumDZxA4",
  "key35": "3sNTj7vsvd7D89dE8CrJ5pZyyP6sipaJuAURDirjNEHrZkojbx1zWU6yNtY7WFwtVJRp2DdYVGudcfHLv2gxbULR",
  "key36": "4RWqN5PsWCevUGvgM2WTzxvRfrAg1YETKux9fTAFfPhS6ra149j94y6TSyTX6Pje5eP68MgqDxi5U4hYDVuUVg9o",
  "key37": "3iwS5z93hhjGTaEhnUD5cpe2WxSvji3SeojFsXitd955r9HTX7SuZ85g8MRZVuQHb3RKdQyykqr4WtRh8sU3YW8Z",
  "key38": "5RhVW36iUWaseu8wUsxsAphzNkPoqSJPCYzp5qzomDDDxRQ9W9HyULSsRh8gX2Qr9D3ANbynp6bBrRwPeg6CsHX7",
  "key39": "5SRoaVdvN5MiUjNUGWbdQYaKtQqYfgVaQj4XKAR2nvdTrJBtUjN9gr2h4NScb2CEHPFs63fKjRZyHxWaSYmtm6Rx",
  "key40": "oqhhDaWr4kabCoCJbUNMjWPmRRK55v8YZTAuRBSCoJLSRe1YQL1BSmN7AovZzGmps9H7dokLYVQXsEW9En4dCvc",
  "key41": "3dvJVGpTc7rjTLrmZ5kxKt8Bf4VWxdB2pWjcfTZP2JBSPTQHtAoE4PBBCPVipE7NGxVu65zPG4n1RkogEFU757Es"
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
