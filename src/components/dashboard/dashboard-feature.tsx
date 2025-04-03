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
    "2Zb3W7bjC5feF1dETkw5LRZTWLTq8hgAEZrpcsjVCxgWnvg7RGnbQaC5H3PcT4ZjwKUCQFmPTEsYghS7RReV9AfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MV3eG9HNxLbKCvDEuQ1BNaw8Xx1xSz6BnpjWuctgB1ws3TD8LdpZFwS46EwFzyM5T7ySZ37BtSy48WBh2TXb6zs",
  "key1": "2dHUEXhtgSoGsrmX5Nfjm4oQa3v6jnLwRcEJkJ71Q6GYAMYLdrXbrpinZQx7aei7a7DNWqWhC4Ss4TuGr1uKbHLj",
  "key2": "DFYT5CtmDYqxH75Ggx282KkD3dSqHreNVq5zboeQc8ujpsrgqXFBFPLkcmnC269HsHYqsL3hfmMUYtaBsnVLUvD",
  "key3": "5AT9pTrqEb6QNoSzxYxGa26w852hH39MFWdkuiL7u29PbPeLvEKQhY1JQPsK36rU1bmtMqmqwycL1GEeX1GUF6u4",
  "key4": "2ikxVqZrNxJunexy1YmHTK6dfpggLM9qmCRiahCysmByjs8ehxjgShNr1AEQX5KvTzoMyht8FJZiWtG4SfpXqVwr",
  "key5": "5dkW1JxU1zHsh6SQ9eGcpbWhutdq7ReaKt5sbkBW5ueLKaDpNFab3P1SSSHHifaMcavdkCnPgtUi1xZcJMX4GSZt",
  "key6": "2hJ8SCa9fQkhN5Dm4iRaJyFMmdYjBLGKFVYYpCNciKetSLHEVnnDbb9WZU1G4ELwfcJvMjLfNkQuJPzxLmxeWyZ3",
  "key7": "24zUvebyBwEKKbAciyfq1LqwqQSfFndZfvLXM6ifbGW5nH1kfHG84i8Hj9bpNjrRrNKs94HQZRSGEp7NWT1RPGMZ",
  "key8": "4rQZ4VPiWZNp4jxS271oAz8tBUNKDFTgfiboT4KAciuZAVRhPtnLzgDeq1jafirNatR7bTjYxiw6bQyPo19mdnUZ",
  "key9": "5NMA4ycKzFdBT9iJUjqACjswgMu6Dc9v7RV6Br9VJp76e5P9KFMJThRXdcEwpHDtNkJAd7tqcBRC3tcnKYXK43iA",
  "key10": "5oDwNjJbL93Wq1TiRUM2qTtM4k75D1unucnu2HpteaKFLTGbcK6dqTvXzmN5ArcieByyJAcEWRFY1e2YRWGN4AR1",
  "key11": "UZyVmn2r8H1R7ZqSvUZXQtkr2hxf6VmsUh2XexvtxbXJdxAMydKtCytZqRLq9ZoPp53jEqDcwA6TGmFPVpCHHtF",
  "key12": "5jxi1CnCAKCEAaGQAbEkoyJv5sFVbLwbcwMbVKk3Az7E5zULfJ9JUNg3iSDNCM6FsA3GmntMamNLeqjNcFF36MZ",
  "key13": "25GqKiL2zZD6Fgo9fwJXu9tCPnQrh8o5CjWsMCaTKwakckg5sLn4RTyiwua8jM8kNiABnaADuxuUYEC8NdjZeh7A",
  "key14": "23U6AaxA3fQ12pSVpMh7RDxVQgpPXofHG2VhhBXjF7z5vksJFB34UYBH847ive22ijKEzoqFn7XBfHyzELxjFyUh",
  "key15": "Bx9hWRMoeJRcTMF8kMgcXtWSyE2PwxowPnzkiUxfVx7Kt94e1TpLhJAU1ThqExPjtHfPDrza7XHWhLPiddhwyz5",
  "key16": "5RK5Lc3Kuujwqf4CA812VZfXLbAbUinMMxiJzTNxPbJtrz6oPmwkiaL5heqYpp83ELFA3UXTM2zmrTn8vCGTGLCj",
  "key17": "331CLXnNgJRFuYU6VwXQagsFVgvRNdVPWDJj3JYtCWZwxeoxaw6cxdn6brapN9GigAPnMBpZKTCwRnpzNYjqVCZF",
  "key18": "2mPf1D9S8fdR1tPHCNeDyy1WAEyKYkiBBZyNmuQ1NUvG3dkm6yyRhWQv7tTiiv7Jk53nMKQWEeXy8Pa3XNHDi8LN",
  "key19": "4xdJNq6jZEUF87ViXxoWGSz6TW85Q9xpwGoaB1vkFhce4iiFa4wd9j5um9j3mBCKaiNFMBFBRsgsBS6drRX3aU2",
  "key20": "4WKsufMZPTWPiFnjFLoK96VEFAVneRHWErv4N8VHVT1ommJX1SWgKFWp9FeMg27YY65C7EaoQ6otqcfXNahmhVR2",
  "key21": "2psDNjJzLFGQyZ8M1Ve5ySzrmkcP9bZZxorE5ynw469LkzXyAJHCEchCit4URrPgXFV411L8iZpxWcASQmJ1Zn9X",
  "key22": "5HUvHQcM5F6r821B69APHDp7wzYbFQeMJVeEYY7m8ruCVPzrwwY9vi7XgfMJyWAJ2UkmbvYNrmHhxPmi52UeNBVf",
  "key23": "56D5zdedAhbhoWagmAsMPVLXQo7dC1gz5cFKwahaFebw6hg9EJ4vxzosuJzVXnRGmHAknuA683eTCYY3szg2iEhL",
  "key24": "5YeARphznbSKfkioiLiuHtjf92VpqVsNPKqoadCqmzbhwyGfuNBXA45j5zksySNMjvottghQf86M1qAYTDvKg7Rg",
  "key25": "3M28vc7faYsDQ7GMxRwarL45hsLL5DnLbKkgKpRfyBf8HCkEMTCQo9UPAbJu2L76H5UnEFBsN6FY7swV6F8ofMvJ",
  "key26": "21uPX8bs6JTmgYza6hZFrm8xSGd2saAstkqbphzo1j9QULKCRzUhGEaSqfxbng4kRUwDAmUcvZCPbvUVqKZgHUqT",
  "key27": "2AyH4FowR26g69fMpGRqW62xz9gMnZEVGebPLdCjhA7VzMcvrVgzvePatjUZBpg3SwwybRPCEoSdCWoLUEqkmbxS",
  "key28": "QtiLac9PuAD47poBn88bijNHuEpXrK6x1qzBJnJpWcg6UJv88HgAQ76ka73LCnU79QY4tfdBVMQGYQsD5aH2H7e",
  "key29": "529mra775cszDNK56eszQe6CuATqBzSbjXdPdXjzn5c5mSqxJM8H99ue8wyxRZQxoequUQ5bYPMzEQHMHdzbynuu",
  "key30": "5q4Jnb19Q4VzFXhMeT7XiVKZdF7tLv38u8SQRz3j4GnAA2Bd14zPV9pgFAMkHXkqWNExuff22thQcMUE4AdTvV41",
  "key31": "gUiCsX7kks4tXmh6EAvqrALGfcJgLdG4ynZABVkuvSrEuFUkJS75yjDMkHAFQYUU3qwMxFDhZkEYZh2sVVomosc",
  "key32": "29XGXp5i49JKvscPtaR7avMeuWgMaHbmgwp9WJWpVZbkRaMDWrjwZbjmAgVaL8MumR1x8YtjAn7naXmeLKeCKi7E",
  "key33": "4dxcEwfWSR9CLKZVjmX3bSHSiXXLH7sAJR8pcDzMAd2b6SjvXA9qgmyQCzuzaJiQtaYLDdSg28MCixL6Rr4NuPpc",
  "key34": "22vHRimymKYYtvnuRSYedsHoxrWQLLZyUcRT3Ts2FgJw4wq7Y6qg6gBvpoub3VQrT9i4zpdjsk8hn6PL9GWJf6ts",
  "key35": "3Hrf4w2MznF6osaFW9d9HXVxbnmQzi2LDupPjMepGgZLBh4EgrKfcigsrSykJp17J87mmuua4Jg4RKofFEHADjAJ",
  "key36": "4xnQEprKYNf5mRKLev16HeuSbJ8rzXNJ96xYsqB6FAzyWk2k8sn45QKShUYpaV5K2C83h5Qy2oKnYnTSdHBGq4U6",
  "key37": "3xTGLP8mCFeh5J95pyhtaVw3ZWNuoXT5WxaK1p6b3xZU6dkB4t8aaRZS8TPiDrEzGB7wkg5veoFHkRMvwuj2HhSC"
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
