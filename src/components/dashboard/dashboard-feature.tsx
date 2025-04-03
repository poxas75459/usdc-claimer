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
    "3mLu8sXhvWHebYC9gPrCLghMZ88aMdnsR8rVAssZJDvbFAnp5owxcznQ4AwJbSjVemVB57gpp2RNgevcxRgcjysy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exa5wRC4Q5M2xh97thDkoUz9B68BLGNeiyEE6pvjxPRhM42HCNpnucneKZKEXfKBGfYh7j3VkqZVpZZJdCJPVgD",
  "key1": "4pn9Gx3djotUzyJYmQh9Q1RYGYJgAwmdxqmZqhcWhpdL1CSEHBpWLXzHxfrvumpbAwuYUppDxmWSut8mpw2iUzXX",
  "key2": "LXsgYxkzVcx9sS22N1ZUZWAPN5moFTTn5QfkeKt5rfeMokYsnaohRnAfVWHEVKBHNFFbvQ6XpgsqMh77mpRGo3M",
  "key3": "jKkyf31rdveD4ezKv2Yd2NJmyzinCJFPWR9FGQZ3PEzyebjTk9yYN95P4YawPhTVNzbR6ZEkUwiM7EEpVic1Dez",
  "key4": "2DT15naSnynouxhTerC3RjM37Ra7YnKxMpWUnKSzrkbNnVYFqGL31tn61Bi9oGAApjEjByxTHinxxVawAJfnFkYq",
  "key5": "4yVNZ2pmSykWJFXygMuTCKgr1SFJ7kBJo9bmf1ay7evDgkFQoA5GLeAW6KYei9PpXL4JcvvGWNJhvistC5HQvG8s",
  "key6": "4jLF1PaJMoN9LSCkNYa2SyqEmDdbvSx1NSKcf7vp7hN6U7DGFpJ5HZv1Xf2xWaePF2TYXBKdmdp961769pVhWQVo",
  "key7": "3jyGGYXBKSJ2THyjpcHf4YWqxCkpVbYdQdodpTSBQ2p3cahgZRbrjzq4LWndsMSfFq4XDEo41bkR1QM9Tzfzu9Mi",
  "key8": "smBPv4pPbNeBmQCveU2PTH7DDeYtmbS1ctnHJ9PMbFif646F8bzLGftbTb5uWJWGCizx3RFRex1dMmC3f5h9dMb",
  "key9": "2CYzvKLpdoPNVZzqATTZqQrdwwywNrDjajcahF3U89PSF2XfG1qbY6ABFZin1C3F61699RtcNJ591NqwXSBsvBk9",
  "key10": "4jnruhqZFeKSXj2ygwEbHFP4Yxb1gxpjQsESXryyVc3pBHtyokngtCJHbMN1pxCQXceVDZVjMxPzG2jK54cxovLL",
  "key11": "5mSDAP7QeKMqeQ3MCXPwAN2bv1ARUJsvTvjJ3nx3KAzUF6hWW2xLYVMFFVxR3MYrwQvAcdHrRGuiPMB9RfFfVedj",
  "key12": "u54RBgAPJirHS7E8bQQFXr3Dzn4rp1RTLZSVq2W1CMKLQDrKmAnY1SZa9H8e87NAK5iQNGyfjnuXuNuvtyo1hms",
  "key13": "xYaVZmHdTsTs5nes7bhDFnfJyf5DKXfh97XW4Ji8azZmq8F5oVXCNQoy6v3jmXyVgRAZhjE1ZiXe5ob1moTunWw",
  "key14": "PghCH9w9gUgsSmdc6tWhTQo1k2q1x9xGePJp9LKhiTgBM4Xci9z6TCA7Ui4PBUABpfBYbesqpMQTVones4GS7WZ",
  "key15": "4noRSA2Yrnv37z8yoiC61mNEVGTiQucv7zm21Ncd5hjFDGFcKUYcksxeAff5v1V8gJAKWkwetVUpAwQ7SDJ5gHVp",
  "key16": "5Q7AdQLP2n5NpzCBFJ25AJhGhrEDtGe2thoDUruGjVyoemadgFbxxgQ2xQmNF1TTRMigNsghyatyxwvLPgNyyyGF",
  "key17": "2xzDRhxAKCDNu2KPN988K1TCsnrjQD82DHPcTYxXNZX8TcXbE8qX6Q6VhPoyzZCD5mYwtpuwr8qMvMczJy55nKcZ",
  "key18": "5kMfcvCpbSzWA1LmvrE6pTSxVWFT6YRo3aKHZ5amMnG73CzjUmA2vhe3kiLSt4neQS9D7GiC2SVskHKXLffhKeR6",
  "key19": "62bz3DrWAQXipUHV6JpLWjFBGReCF968SrAHQV4RZLQgtxCyT8XYQn151WdgXb4kCuhiUEnCKnSJCzFruwxqPrZ8",
  "key20": "3j2JH8oHiW8rne8ypGMGFBTfnkAdKuJV79Xf7y9PXN1t1XGm4choHRfT8crLmv3myPxdmfW65dV1RGV5JTnPKT2f",
  "key21": "39EmN1HN5kCCBgRXAcH9cE8bRcZsTqJbj3S4399Hdr81v137fJ7n8NTN4mysCEDU2J4j84Jw9wt6X7P4JsPaW5Ho",
  "key22": "31QAobE1DUbZ9Ko5M6MCcnTHSGHwvAa1p7LDR2PVcPu1Cw21VgecxBFHGjw9K7TGbrYLLJcyh6VLCkqCi7B4aEFu",
  "key23": "36bZmXB66uNMUEkVsvekjNrh97FKjBhFnchJYr8oYR8NNAT44mLHXoGbExS1ED5EJbaqBQF8zf9VmTZUQrm5Xfpf",
  "key24": "FtXZ5Mre3mjcbBmik69yEtBEAXkrbTdY2ffXTd3mex7jQu4PdzkZXrZhKv8uwjcZxEy2N1WAxUn4ekjr4VgaEgA",
  "key25": "4VtoygJSQzpSgnG5bgvsQYGhLwvY5TZ9DsjjiYiUAko9zA5WyjQLqWNBkUddJfDhEKBGCMARgrP7VyU3oSv7yDZp",
  "key26": "4WBt9jKRpYijrPnUjMjVtvkFs6MEKHKbTKHzWYeCP1MLwzZ2aSeQ1etuzwmuWjeF18tct3HTWRKR67HxVfZNyRNH",
  "key27": "24yuGaxZTVyK4ay8cYW5NsrWC715xd2KrdX2FPM5TqALJGG6tG1qqSvWhnfUuXyTVKdkA8B4TnPPiGc3M9DGMq8x",
  "key28": "2dP1v7qJQ8VQ1h1BfryATTpRMNMBsuvYvHWJxHdSjTtihuApTJ5KKQKmjmJx9pG3CqnGEnAUAsuWBtSJ9PzKjBxs",
  "key29": "5d7xCi2NAwew75rgJ1NjukoWNNM4pBMwzMvgq4GW6uxPSUitF9fha1FgxPSVHi2wmH6T9AmQXyoomF5U5jffp1SJ",
  "key30": "65o1iZW9z69Wzk838fVTVALum7gG9dnDPiqZipKiDuxCZ38dSchigoqLkVbn5dScKGh14XfaPuZYo81wm4UfaH72",
  "key31": "3kkZkcDfgacP64XA2dRFzapc4DCgmGEFXHv2QBnF5TCZYeLwaQJAKbvKVEMdF67qeyTf3R7c4jQg4ojS32GnzJAa",
  "key32": "65rSSDQ1XZ1frH2jp9ZzbFBXQFvgVnLm41Rn7oqqWP4Np6k62nJvFvXjd8XsRgXbysxmrhM2XBSyB8JPwzzGCp21",
  "key33": "39e6ecCuJqG9QYTMjX9jMR1BJ1JBjaqfVMoC1ptzF9EBzu2t5WSf7UqLp5Mj7HSywXFa45rUATzAqLN4yBZue8WH",
  "key34": "3wd2LQyPzXRifkaj1Jj9V9psTdBSQkyAA5hekX5reGTYUzxeKD4dZPRX1ZWPKAN4kyXsLFmW3cah7FczqgTurVvZ",
  "key35": "Hc7CjkfSgd5Nj2aNm5XVf7jhey1rAmBYKetqhqpyywiU3nkKBJtAMjj5jpAjpHKuETAp7UkNekMZ17jnqhYuLmB",
  "key36": "NySugepXdq5bWu5uYLWh63SBx5A3noWxxu5NkWNaPcYCCVyEKHdujkXWkBR1QYXfJ5cCe5xsNieukicrL3yos7D",
  "key37": "3KhckEkDviuBgCk8c632qp7spU8kjeBFxw86CMB5pAUpsavQVV7uFSpx8vaJGNTm7KkTxFy9CiNhnWXrJWM3eMTJ"
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
