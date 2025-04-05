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
    "4yKzaxKr78HLiJzoGyMkbN6wAdJRE2GSXZ1FLmxoiBSNKqhcTJCX5MAfXnFNN9Gs3DGBWzaoa5Qcu8ySdJ6PqXWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhPpV5cQqupLdGHcvsX8vPtm3W7CnbfGwKLwVcE9sGmpnDY4BrCvZ61gb5NPXvH8HTeqFVmAxrdjqyZXeWZEpfr",
  "key1": "43xC6PDymtxRyzVChyCexwoWsMjkUokNY9fFuAcy4UxTPXQmjuTgZsHWQSEkU95CJmGBm17CMsZZwc82sxHR4PnH",
  "key2": "42V41d3G8ALwhZmCUgD7Vi1Hha4B9KSKer6gvDPeQQQqVw2fPzJVLiJ5TcKiCsjWcV6nbi5eKUnxRzDGddcExaDA",
  "key3": "5TUFJvW4AyCk2adHSTek3Zj9XKFPfjcumwwLFk9xgYrpfV7vXoMTRkiNBkGB29WoUCctBhEN7EwLYe3EhxRGV4za",
  "key4": "2jvEiy69uRRVhSzBpp6HMK3A96FfzML3s2NQHPP48kTULACSf2Mn8bzP5az2rdKoX4Ews8cLCFsfxG8Z53sVmZ3C",
  "key5": "5znZgGmWziwTU5HZy6YuwPVYCN2D1Lf3qWpwfh4YBF1FmTRhRKBx6iR45X4yd2Tfe2jspLr4hnafrQ3J44PafQ5J",
  "key6": "2yzvZSMmdNiZVVSFdvFNhDPWKgFQXyqwHTnfp1Cq6VYAVqi5QaY9AtXBig3CVyLdYUypum4Z4sfKnfxKFkZsTwvK",
  "key7": "5jRXK8n1f7vgrhN4XbGB4z9kGchpoUajTtHdSfsRgBxCxdksQTVsVBh1W67xDWFz8jkJgzH436PZBbiTBk2FUmEK",
  "key8": "4zTKGj9tr2US3ZLob9US3vcfnvh9GdcTnpCxErDy4Xkyp2x2xC4pHjagbptszN1DkybjgtEzv7tH3hVmTunAtwoZ",
  "key9": "3UrVkcPeDMRksXYSng1gtHmYMkMbQSoeW9aQFVQuVdN1K3RPaJFgXoUAFdiUk9XTnQX6gSArkk9FZCsfWPAsViMJ",
  "key10": "56oXakWWzVZqHLhSTJpuV2f4fhYeDMVZN5LjVsMTdt2qtcwDR2SQaPkqrG4ezfKoro9KEV9QP35HkUT6R557jhht",
  "key11": "5TZpFkt5H69wwLgMWk8q5UGqSCitoS88b82bLRzBon4v7kiRSDzK7ButSxASXGupJ8JDb7VxU4CYW97mdHgQNhi1",
  "key12": "pQGNXpZWtsWDEozAoxiUoStT7AWmZq2B95QMxnRFWF82AKdZZ77pEyJZoCxFRDTpd65DUyje2dee7thnL8eErh1",
  "key13": "N2Q4gSkwDrkpJiHpeYbSzugTJgkAZSSoH1vazzJzfm8fzutjs9YdAZnLndoboDBugSM7dotYGnAvtbyXeAhyd1A",
  "key14": "65f5gwnJGpfEnNq4kZTQSkFgCUBWrEwMM2WhSbUkAzFSa59U6vf1niCiBZDuCqsYUx9oBkHoq8qYQj2G82ZgWgW",
  "key15": "3QMBfgGsZMZctMFH35WpC34VWLPEJHt4Kp7FYon5Fx91jNRyijaKRkGFqAyvnLmgYHF24N6tvNDmHiV3ptceVXTw",
  "key16": "2xBU3wro3AFf8dudb4wVHiS15SFxPm4HCuDARVPzX2EqETfMhYRNieBrnHEcqA39WjR3o6yepRXin7gez5VQCBLp",
  "key17": "4UWngpuveEHD8a2PgQKGhyiBhemomzGieMbTh4LK4Pv6DtrxTGvZsZm79jKkVbRnf2WiEP9rpa3h3uieV9Notnpo",
  "key18": "4WKzv6qs8u3X5WJu6pRtRB1DkH3dP6eLTSAzhCuxyGFieoRVhgbnLwVACHfQZQ5MXrnUzm3Ghq5cBKXLQhafZsBe",
  "key19": "2e6zXRgZCGTECjjBj67hZau551hSHzQdZKiHTkjr9EZ1Jc1ziLxRKHGuMACCFigYt48EWwSZTwxuMboBL57yi7a7",
  "key20": "3B3srFAnPzDnq1ibshtEX5pWnGgKhYrunuwZbsty1FKAueD5qCZBhjor9FEVj9RMVPEBrSZRLru5XBtXUsamvmKm",
  "key21": "5HNE15hoar6wRcWymf1SvoNbU8ouNKoz3utEY4efvCp7yzRFowgbPtzNbSjDw42xfXqoC6hqSAqie7ZRY7Z5KCV1",
  "key22": "2R4o8tyuiojeDAYiMCV9ZX7FxYeYmEGr15diPPv3iA1PFzWZhgjhDndboSXUALXiigksqBruNybnQKj3KsjcBhre",
  "key23": "achhynBvneUw35HFWYo22Q63TZfEggzFApNRHkoSSKsvxofvaWCLycJgNoTS1Sc965GiwVvJLhmAssa93vBasqa",
  "key24": "3f9W6jkSejDaPzpFCPyJqADXgKPJPC78rFSxPyaGibeYy1ozPgtpnvrcpB5GV55UPTFDhz8XbXDzK1SwFuJLdRLs",
  "key25": "3QceLgPN23wJE8vxUTEZQs8aKYmGBKaMQxXtXJ75eVBtPWLujEXKP4MGBf98V5utKJKnwSx6nzu2RDw5TVhHmBkn",
  "key26": "4EmsAGJfn8MY4kbN3qfPTL9e5NarnzVDE51w8QJcdDVAuKR2RkG1zfswVxogttXm22YLqqgS2Pm6vCPiuzGeeUVa",
  "key27": "2SJPgyENJpixZj7ZVq8k2f4Xt7SyP1fTgawvCEMAsR2YrSKQV34bzLjDoii6EUiUhJksEJwcLns8H9HF5QyxTptE"
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
