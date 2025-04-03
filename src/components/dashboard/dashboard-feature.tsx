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
    "3S2b3tvgBP7f6JH6BwSm99YYndz5Hs1f6fiJArcPTqyqTH1XXdE6acJfGz8inSkW4R71kyssub9KpM4c5RyveocZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edzppvT5Et2rA3XZnek6hWhJmJGM1H44pPdSw3ijQEKNc7Yh8vxXb35PqBZfmcjKmZA5KGNNXp99LJoZgqYk5W6",
  "key1": "UnSJtA7JgCGdXtN55saoS8ztiQQj7JAxUPVLbT3EVA3LLxHhoQBA6vB4cwmx6vvHJoQimdFZWQzdYegqSqFMey5",
  "key2": "4HBBFviTCQ16DmX5BX3ULkiYLAGU68YNjgTPaLrUog2rdGy62ufoCkrXjv1o5hFKiyB67MKKRsAPJVj3fYVMUuRy",
  "key3": "4o9MJkAewWNBVfyUZ797FiRuAC4c44vpbahqeXnE2zTB78RNUQkdAWpHqkJVhEdDM5iHcQfdTGu2DYVj3TaAMNqa",
  "key4": "5VzEoxjXcxCm4rKN9a2wDpmKkQeTZtsz2dVgphhC9pfrivKAJgXfXHCf2eD8wfHaN7TmvGDUgcuJ7rCee7PJkNyT",
  "key5": "2eS1XHPzUdc1E6uxBhnvPsZeY42Sno5F86HbbSkRzQ4u8LyCERM933c7ZrCNgKv6LAcaZVU17noLiHk1sgahUVm1",
  "key6": "51RsHKg27oLcvak3e7bBywYMDAqkqaNsrnJEjZQh6LQY9xuq9ywWDpWmrKcHcH4RpFx1g5rfsimPeQniEoPdZcs7",
  "key7": "Lff5dqxc1A2VVRTkGBoHrfarvJV3rBv7YkmLXPP4TDDCLPv1vsJ2E2WF9HvaGTTPKn4B8UTcSszxNEDw9fnHkVZ",
  "key8": "224eHkYw9hzYXAW8rR2U5Pnoioba2r26Djk6cFULMhvRo4BaLoPpAJrtp2oyRNteS1Wq2jZ1PCFYUMek1UMBsrNH",
  "key9": "28yyxfjLGmZupUvLMEztQiNYRfERUmcBuEPUq55rSxfAjcikqz8vWt2gKG1XMqhgrpC4PRF7QRH6upzYiGmRQvyG",
  "key10": "27Mh5hinW6FoHUyUVK3D4RgjHgCAPSWScJbcXJWaiNKM4ii77WyZJi2okLbtyXi7fiyEb7a38xmw6sAyUzHcDAZX",
  "key11": "4FXwLpfQzADSouYDnyuE3J11NsZVzm4msHaD95CsaTMbKmpoCLzD4UPDdYzVDCZ8ktzSuNndQKbgrYQN3JfAAtuh",
  "key12": "5sN9PcWAkD2EZufyXKEooPV8WKB7auakhf2dcKLnfHU1TGGt3sw2oLqeR2c4cR1Qecb5bjFN3SZoY5gmPWAn5YrL",
  "key13": "4pw3aGABLZhBQrzLcifYUDZMXQFstDpQyjATt5sanVSKr44mHrHC7mKjSjr48M84jFxMTCrkmd887RBpBnWVbZdv",
  "key14": "jGBoqK5BxustR1iGmGMsj2LDeckSKumPZDDinvBzNaFN7wx6xoewoYDMj5h1WvHPH4gTq62jsTTFwNLfhdpURsX",
  "key15": "5B68enk87fX77JKSRYnT361sLM1yRWTXmmKG3zSCdAdFGmzyKPLEcfZRX376Hfum4LzmhANBLRjv3db1cgQ2shYP",
  "key16": "322hV9kuM8Ehu2SQtFNCj2sD36ehm1gradm8DFDmmHTMkLKjmeFBUM8YttWD7qCP19vvSz4rSCqoeLahDtUW9HzM",
  "key17": "4FRT3pCfwoxgZ8TkqEB5tsLzz7EomEtzcDb1xSWYbEFezY4mdrs3z3mig4gcm5D2QW9s6xm2kvLEs721YmB5j1NY",
  "key18": "64QknU3UAkzJq1pY6eTqpMsgDtcj48cB73fqUNyex4Rbwib9ztqwZmnv1pNpbnyFuorjXrngcQBGcH1H3Qq5wGsz",
  "key19": "4U1DfL9NkzS6nkK2mSDCJdRLCt53eR2Cfw336ry4unWU5SKeC8nbJuDFvUp17EdaZuvvULuPD8gXuY991wexQhro",
  "key20": "5nW9GUGyXribiNrhTzEGrfNudovEwzqL1iPXHRrb3dbRx64zkr5wQsdBZGzemfHoM7Hz4unfmbCEBncS5Q2giDaG",
  "key21": "3iYZT7SGwsgAANtKHLg6AciHDiZsNiMxfq8YMWRPyzd1aKGLLZj1v2oAifWz2ciimAvcocuxTMYP7C1LEf3Cy5rj",
  "key22": "44UWQzGWvEiYFDANK6rPGmNKxukd9zQRGqzzP1Xwk9aJkxNKZSypQiLL2sNoKY5gSveNSesKBmAunpm3AVxkTrHQ",
  "key23": "2Wnnd1js8GPps1kpyazqH2AvDxsyGWz75ACSobZH2tvrp2351DeksxA2DLY8S6m1Y4ZELUPChLSrrNR5A57KhF66",
  "key24": "3WPuptenCfo6F3yGV7y4S4szwMzmoBSEL5zGnCHQq7dVoqhBgyQU9E9zUbj7iXTPCqXLZR7MeNTc6K4dkqsvoXvU",
  "key25": "5MN8G9g3KrHMDFEGpNrYzebTmh3BdUzhZ5i2tTkTJSQBqBFRHAwkvvzVjrGxr2sc8rF1yaqVLDHHvuFtVRxpcCmU",
  "key26": "5rhXAqiSaAbjjYM659m36eyj8nwXqg1K2U6TtBwqKzDR8PevXt8DcqdLeYun2LCJN65FqMvDPs5YYctLVTbWa7SM",
  "key27": "4PCrwekEaNDnZp4UtbjQWpKHppcWCDn2JLBfbGRYMG1wrYn2fwWtjS9k5tUJhjY1Ecoyw8hhBFtdapSFnYCk1vJM",
  "key28": "64m3LjF2M9EdXtGodPZpCAawznJ3LGSmH4JzXKPMnBYGc1aadcJA1gdLbz5MXiz7Eeq4LxvooyMkuxGorK4m6Kfm",
  "key29": "47QymwwKhLAGydBRyH1zDfgN3Zg4UfupkUXJYTDGkWnRGnhTnG2mpktBdBVeARUWnomSx1zDdciJgFNLkqSttb57",
  "key30": "5FLKq6gA2JYe1EVVaJtQevXrc6B8o6WdUPBW3z6T8jmaij3ypbTzgCJs2JEPbUYc6U7aoZqABnK3NEGxfE9ABcHd",
  "key31": "3pAcRf5XNmvmQMXHAdYr47R3Lyj6sAqYqQ4eSggKPHG3LWd6K4yEMQJPoWuLmXX7a6TKZeCm3KQGWbZy9d7DoZXa",
  "key32": "LszffgKYDVd1dedEWrhJV3rHYhZi2ffcBLUkCaSaz3v7KV4S8EPsBiuZXSHs8pKcKCY934VvocWFsVSQS8mzMgM",
  "key33": "5NrdFbX6gDYCcupBnCXUiNDmTm5WuBEhZEMH9LbYeVRtitxMp2VkFTaUU6gNEheJKqN3uHQeEHQhV9k5NwhiQRjs",
  "key34": "5Cqm4f9MpGYTRJ5HRC9otfPW8eJ4Wy4yY1AiBXfuAcCmZccNFfFTRW1UHzxmWi8QYMjCwkzEhcFreCjbxdaREYsg",
  "key35": "SpPMBFEGZY8Tnqoj6hB1VurvqDseiQPRwATh94FuG4i3jSHWkW6MQQMkkNzbjwSB41JdpEXNRk46vMGRVCJxhE1",
  "key36": "31UbQG2mmZWaVN6ScTWgUyN4jzWUYfrpY9We65e1HutyDhNsVXLqfSZ6PZpd7ZwqZ2ddD6pZrcvxETCi3u7ZfMWB",
  "key37": "24AV48uMJQdVSAaSi23Skcm6UzWd2DdPaXHrVCQcVfbBewG5cnzfBK13KwWC9A8yqJdb2vHjm5Pn2vq7Pqb9tiXS",
  "key38": "21AWmyRkqGcBJgBRCEXSaewf9tS18TQJ9VFCy92qesm1xHGKPKBSPoRnaekCCpNkgoB6siB4jQrw8txeZGGfuT6s",
  "key39": "49vknfb8EojymYoUTL7pyHgw8XsKy7nTNg7fJE5PfY9dH2shC5LgVmQvpkWaXgrKjSi95HgjqbkKC1zXfTVp7UHo",
  "key40": "tdAzurNSonaJJcLUmbVSktpKDkfq3iYVCULgHWpV8YrB2qZnowEKfR6qJduRm4kLJrUhSBQSmidS7YSyuYUx3wR"
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
