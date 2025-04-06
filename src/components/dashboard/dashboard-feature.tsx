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
    "29weLvZE12GkXVjch5YturjLDPKeVgooHye4rZt7so3eHh2nv9DU7Rf5oo7DjQ6podxgMcpcKDrfakLxUYStkfbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V71m36fgJU1XB3Z39WQoD9HGS5VFBoasEVwQKiUrPKBEizQibDAUy1bpoVENKStEhNz9BviUymuHtgFwaF1vK8W",
  "key1": "5ygHYsVcRJUGhMJG2MZYujFAsfpb7oHdmiJcV41BaNpX5psYKW3wSG2ewbpKZWy2GfndqJgrimH37V3qv34RHpHg",
  "key2": "5D2yYbiX7c27r23rvdTAYwU9uNtQD83ZfBCvUi2wzLF7VcRVMfkC5HXF1kMKXUBPLPK58tfoei3cuy9rxsE6tWDM",
  "key3": "2GLsZ3PXZKNKmdz9mPih7CgcFZcsTecK1QMZZn79BH8TWVQyMgHkgHh8gAXVrkqm7a1VQUhcfTuYPgKfwpHefDip",
  "key4": "yuVqF7qJnQrBLtSu9n7vLnh7QEfUgooT4gzvr7iLkNQuCMidkd7JRbtQ7F6pZyL73g5sjY34zoXTXXyFrddHCpq",
  "key5": "2u3QNPSpF154wqW7D4X9AwQwGpsECYdJVpiTFKCPbi3RXfKPdbrUydTXkiibsJfmymLFBv7UbAzZEjNSLeNp8aAW",
  "key6": "5FXbDnkeKBDbNmpHSYXvpjA9HR7ju2dPts8QPDM4hwrSGLKMrjJdHZPcPG6DeWGWggmJKPgrJAsTgUr5D1Vmzq3",
  "key7": "5z6K9CKsv2dUttyic3EWUY5m6Vb5o1vLMNckZBTfdRugQBr4pczq3bNe2UvPkAJ2t86g1yF79yAWwsKsyYH8p5GG",
  "key8": "2X8DRYBDTxv8Wu6Kv1d8nf6YUE6JGJe1EVieha9Gka2uurFpoVqaFq6oqSmmciBNFQhKpErTt1AMSCjvkbaySo3u",
  "key9": "2F1e9spHVKGSWWfa5BKytk4w9PqeLfsEfYSJNJSnAxZWLdJPZkiAXzGfQvN1DuGyc2JBvm8rLnr9GJwx9B2Fhg4u",
  "key10": "F8jqKDySfoqfPSCtm6VQ4z3kek41mYTTY5NQGo44uTBEafK8otnc5462Tv4GqK5sJHL2LSB5LLC3g8p8WbmwuwN",
  "key11": "5V6Y1g9HsNvyzxSYMHPhkzNQFGfwdZuyaNU6nLFqXAbHMoK6WP7PHiH5rQnTv3z1UafxjkwgpaCqKLuaAHSMHoFp",
  "key12": "KWi5xDYUBG6y2vYhQv1KNFBHmdx4Rvfy8kfxoVjsZm3i4s7DgJGjiDCCzpip8otTDgoWQamDkpGskqYyNDyPPgC",
  "key13": "oeLvkAR9QZMs7BnwrQb12aVUn88ZkrvkekUg34D86RVHwSDJTr3KJKeZfnP4JJeGtKSkCF6mZoXX4RGT8cRmzYj",
  "key14": "EUkobJHdWvn4XDLxpfNn5gSLgFNrc6327wDXiMa7pZf5ZD4XxBs5chxHdve1k2Wa4aqD768md2kxrb7seXk7oCe",
  "key15": "5xeQaB2DToD7mBC7DGpMad3YFxoUjg9qVWufWujwYenJJjqxnENiKvZcXMyTeBaJu9uCiSgyyMRi5v6jETYKXov4",
  "key16": "5eYk12TNcLfcADo8UAD8wpZfKcePqCR5ACDc44AcBJiS7QGwDgtDa8BXeaoZst5wxgZFWaRjfcmCFBxXJimehDy1",
  "key17": "4MnhWSJVpdj6cSzuKzWrD7a5m39rny85Cqhjj5mnA1zDi5KHQSy6N7TVyyizMGernqM6Sm1Ww3pjz8dMQgwF4Wgr",
  "key18": "57msE1UHEW1SHyVgo3qpJ392hHKvuZ6zishjgh7HTNa1WWNoihxQcXpRfqnPKMggXC5heb5ZTpcRsj2JS9DnySva",
  "key19": "f3LqjaigMbT2qFbHGuZmfDdKLQukihENig1Hb42EEucbF5a3cQViktxRz256gDTxZjh5or74MfA4y994ZM5UDHN",
  "key20": "3nxywM8nRx1yn1dJeukTt4ZhT6ts4TNaAoePqggX83uHVK3BqVAHVFcY5a4YwPHKdVbwSq9eXwwNnfxW9DXqCJ9x",
  "key21": "MLU9VG563bpNgLEb73vHFXPmKMMTAy9NFVCadxebVxW87QYFWxJfnqJfdoeQtH3z2ffbCeiMME4EgdGdEp61ber",
  "key22": "3K48qJBTZLQCocQVutNFXBmWg5CPAaMPHWXU2h34AySY8ph6uZAFYzDAsWr6t6bazwqDVUSzxWqzP8w9mrf3uqfs",
  "key23": "2cHdnyDAkiSiedG97rLHeEyS1C13frJPKKzoZzGP9yk32LnSyE8QgNTJZSyGMKQxE5nLq9ycCrcDheEmypXv1JK8",
  "key24": "2gp7Y54KkY8auc58oVKkQgt9uAS7uKZSD6ScLqag8bWMCUPUCL6mZ7eFVp9TefSHzEkEYXvGP4vRU7zCBKQoRvad",
  "key25": "5tUD3wNJbQZb6irxitGhq4t6LmFCGhFzKLzDUZmyFUi1sVVDGsS987V3M25hWwqapZAc19omTfsCJjrZrk5owZXG",
  "key26": "R4daR52sFdvT4TPpxv3eSKA46Sx7uDiG1ozmgWvnRvsSAdZmXzeMYgGfwyZMCa3WcKycyhPm93bGWEoAi3aQdcU",
  "key27": "4esgBgBEoJoYXtnFjuRkiU6JWZA3qyTFt8KcfiUprzFVuky5hSgYXhHv4jpFD8FjaJHJP2FFCKtqYXrB368TL1JZ",
  "key28": "1DfNxiWWB6xtymHYkKnT5L4e2jtikV9YV2GDtv79PGG11NGSpfLP6vCc5AAQ1LeLU6USf9C1h5qcsjuFxURsW4H",
  "key29": "3LnZrqHobbW75YJ4F6kHcWqFhdThfFioUftRuDvzhtrJPCViGKXdSv9uMnstibwmg2wT5vDG9p3pj8LL5Cm9zrob",
  "key30": "1jr87H4fs8QfBs2S57MnfeFDyfKHE9A3E7ERiSVA36k5kFv5m4cJuxMy2bLaAXUwg6sqbRrYprjnniNkXJ1zSDo",
  "key31": "4bjKPM8pFFYxwa2hb3m1kSu89jyJpD9DpM8TAARMQ77Xd7p2y2ByRtjDWrGZ3FcYYF8ZM5MB2CDdphbyd6CTwomy",
  "key32": "3VA9mMnipDLG8mxKDL9EcmvNVt4UfS6axyrSpueK891bRYZCWmVA5sqpRHuZBJxrBYjbWibqGd1KowTqycyMAuQY",
  "key33": "oHUVS6RsPLeaKUvjCihofJCa6ZFrWKteyZTZfCNYCuAQe2soNbvYJsCeB47FkWHdgzChLxd4RGJsH7AHzZY5YZm",
  "key34": "pnc1ePTCV3ngGCLrgmoKrVczH9Xavx5C8rL8G6AUTqmpyGhqwudGxbNFQvpjCfWmcihzbKUUgCwi9LWhbwZLcDf",
  "key35": "3wjo8UKSMeFxT8RjpfNMVhTgCdCEBkgmZBs43ryfc5J1ThPPYe2b5f2eyvFWpdJVfYTEKSqKDxUPfWfocyueTCxp",
  "key36": "4zAyonrFCmQQ5eyeMMc9DGnYj5a3eKXrjVdDgZrButQouo67M9EqRcmg3qMXdfSUMXEEbiRe8L76APNTTijUT4cQ",
  "key37": "3ZEMgrX7PUNAtXLBsqZo13CqK6Q9RJRRRPTSFUVpv7RrZSivZuqPmCTna4YTSJXZpuhZZpfETmaAGbvNdvbKuBbs",
  "key38": "65cezet8F2iLDSpERXzRDykPsJMVsLPkFp3nBkbfzTtoFDfwiG3jVCvNR5yQFCZfYfE2zgdSmKrACdUve1SgRse7",
  "key39": "4KmhCPdtgTUcZUhoWUt1G1mASSyz2a21zX2nkihuKa7Hud4NJFUt7sr4xN7YGbh1KD5BdC44rbzK8gSYqx8JZ6Kx",
  "key40": "5ezHzPSvyiBYFCuaZu4nbXBdGEWWmR6ChQoHqiN7wHnfvgG5XAoFbpcxe4pVmKPFf1yFtN3reFH7k11hkHPKRy5L",
  "key41": "Bk1g1dCxH6vzCfQ29ok9xQoj2qcXMQQ4Mbg56B1Tawkfjbx5XSGgkYJ5HzizWFtkmGApD8bVDDrgm4d4RbTBCmY",
  "key42": "3SU6B6y5TWwq76238e4s65MLVwVaGq2rwmtSjJVSyyXonzR6yoED5P2ypDLgNkHTe1aYFTv9morVptpTieiGKpoF",
  "key43": "5P1eJzxtFSfAuzcBGSnQrWz8QzK1fmt3ysRzkaWadUAEerGJn5xZDMp333JCRUtd64N99U67kKzWE1CZTHNMtBSe",
  "key44": "DC83t4hDsS5ABiwMD2k2n6VMKcB8uZ8J5C5RCNLAGK8E9HhgvQYtEV81GT7nL77thMLPizRvWVC9DyibNT5yQH4"
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
