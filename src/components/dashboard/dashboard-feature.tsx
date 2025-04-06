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
    "3YRrMvkmQ5TAksvm9yf15m2FviR1wc5yb8G1zAsutWN7mwUKWkFRjqwxXpCgUmNcyqe8pNLNb2Fou3nTLnZQNBYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3b2ARaMUWU5CzV7jGQJCM1fRwsxayNcYkafP6iMMDA15y1Rj8gz5rhox7GcML4LaQaNhxbqzHFqFvAHedHqS9s",
  "key1": "5gA8cj5ZkVr1im32EwnzYNFhW16UjGZivkcKT7mufm9WMR5qUUyjtc4nnUH9tNKfmMdANnE8CU5Xt7wbEcAicXz1",
  "key2": "5W42WaeVAFKuR1veAE2LCNTxWefXBxkM62YFumLgz9bpqgEzVJA5ttZvfUUMf2wCZC6ZQj5EgEcU1N5wgdEqdXFE",
  "key3": "2XHuVNZpBZ1BvUqwf69oWWWarxVbuH5reByhYwBmDPTP6n7PU5zeNgFZ4ebj81eNYejXKGpLpbnE3CTTp5YkHA4J",
  "key4": "43PHjuGvnnTw3DZk78JtsTNhCAtzQu4FPuJAKN3BywYTBJ6x6pRSvt95GnqGBbNDTgdzz71sFeEah8eNXLFCfSR1",
  "key5": "5uHwECKmMzP3n3fhdm9D6MBmGC58bTSEJt4CZM3vQgZwfr6JLNDpVgFqSNPpGCZtqdvpv2w9vV5geNGRJwQjb57G",
  "key6": "29TKEb9XoePqptU6heE8SYjqnzSCBineGRiUnGNcMmYQrknLXqecVBhuU7QPXX6hUtkcHG1f9Av4Xiqykeha1tkh",
  "key7": "2FXnZ2Mm5i7L2SkexkQeBLgfabdzrDcGAJVQd847rxgQWdgtjSwZMvXm9wxg78rG892crWsvdaQpC9ftLCS7xQx3",
  "key8": "4nRjGqiq1aVUjQwAB5zTBEeDQEgeeysV4UoMXrbJNdgDrBBKkyfdQJHdjErVAqjjmQ82o2oxv3PbeFc6YrfGvvxK",
  "key9": "46g41FcTVLH6DEzxkkXfvgmT21MpbjRbDxnvyubDinvvNqFUNumLNhHqKBs4duGt1BF5hiUwLrXJrzuzR6ueXKj7",
  "key10": "7Hxr8r2yj7isWYPPVMkgaM4MDrfmkZ9rVL3QtRXNMC27sRWFUyQ4Px7w3E7nMKwa56EZPmb18XnDxYJ67P7J1Gz",
  "key11": "2ggtSyaviFGo7iUzGPnramWwJUNPsXK5MPoJiss1L43f5bRhLW9zr2nTGKKmbbAuS7FwdsmUpjx1pJ9AVx9e1x11",
  "key12": "8f89dq3jxgyKETyPKasAjXfiFcebEYjsj9kyYwW1ryw6f3MK4QFJ4QUNpy1esRodrvxucAcj4LZprgaGV6WwDYX",
  "key13": "3tRvWhZ3Axa9sRrgngcf8Zz1mhxf2n1fSAE1djdwmc8DLcBejPPwVzwjh7NekS6yJaSkgJHHGLiVSEoh3jCUy4HY",
  "key14": "WwFEceePWd5Thng7z1u2knkp2WoFZVhbsEFpLF55cWhJ9VMSoq83MSAYcuUpHYNfsTJPwhAjrQuBPUyusrqPnRc",
  "key15": "35t624Wri1QEJ5kkwXHQFXDEcuX21JyP5gjLqy4NgncgcSfCsCnxJwUx6ntg74SjtvkuEu66Xgv7Kd8AMAocEKU6",
  "key16": "494UxefwAwdsRuzR8DoVFjMUNnTmCphkAWKK8RUScwo2dHWHMhE8ckhVbWg2Qpw6RZHcrFZg1r1xAgModqxrx8Nm",
  "key17": "38nysUtwC6VsjACivdxFg5dsEViYugSWzZ4nzsCFxwp6V5HSkjH7gYEx7HRZbSKCyGANKKTATsi7GsvBYUxMuPwG",
  "key18": "4P7X6rpGiGaLSPbsXFgF1naAU66qpbsUBKGdK14eA7rhHHDnUHR1v7nqnzidrkPVNxqngVvmjXq6oqaBrPzP6TPS",
  "key19": "4HX9qLKaqFxKYVQD3AWMtH9yvPJNM2Tzibr8gaZnNq7D5gTsYYj5YcmGWAoL58XxZw6sV5eMzDDbprgaHWipUqLu",
  "key20": "KzB8bGXzg21pppWfEM4UaKjQfPYoUKFFU5pNHGAQ2ymvVN6QvcyPb1GQ9jx5NATcUaQKHfsNAokXta85ZLmtLi9",
  "key21": "5RY3kDcEZU96N1iWMQe531zJmaAviD633tE3UoAYYSpDgriJdrxnXHGgYtt5mp3oQkhCMhD7RJ3dAtJ7zbkTVQWM",
  "key22": "DoVzsaWVaz7MaCf8uG9gGyEve5dKTRgJpqKjaFm7Pe91LSR6PvxB3UJ85Y68AZPbKgbpQ3Crczj61fJcdPqs2a4",
  "key23": "GpjreeM3Qk2391sNA9J4SaSZ9PR8rWm3uR9m3HXwJVAjgDrQSYFZ7Y2wdnV2t7GsfZbyrdeMi4Po8CPMDzftWEP",
  "key24": "24CSmku3eDD3opodPCtNNciWDCfhei6JCiaTbdiuJP63La1huH6qyYMyY6mnJW2z2vRXtUt1UtDg5yCW1ZBeiARc",
  "key25": "4JHHQFFfizbPw1gWXgqUKSKmg9NQ9JCKtGP46SRkYsFYQ2eqfErjwoC7aasfLUAT6ckmb46RV6BTLXmNuoZuYJvM",
  "key26": "5vFhq7TZDdUuSv5tMhSSHDz6CVwyxFoEPGyT6tAf7KKQDsAjG5bHdsMnthpkKqCQ5EatT3ZapLAxxxx1JTzmGMv",
  "key27": "iCgBxbJNFiCykBwgnL2pWDpt9auHLwcaXoCc85Q1BmLfsa4Yff8hEJWyGecyh3dwEFVCQrMAQaXsTSVrCL4RdAg",
  "key28": "4285VsQngtYiSCWY51nNLxSwt8Kx2fJqViZqrq5dcArcM7zpDzAs9P8W8FFUwEKoFJz2jzYpMDL7UYdDXyS4zZ7F",
  "key29": "6JGVrgUMjZStdzy46uNRZUHNXWUXYrgHCbkDSzWUVMPmS9VXCMJ3yYgN2cUqjd4qU6Vm8WRpX9F7PXMkxUPrJCs",
  "key30": "ZU6Amdnc7pPujwjW1sJD8WwTGDPfowXgrW7f5kcKe1gZatdepyX1AK8rhDbRw6aqrmLWWHGKXRY3ag9qWnLGWbh",
  "key31": "3Yx5uRymgU7EZhjjCeKmg3Fm1F8yGeP1ZdcM6xE6EVD2at2SAgKRmUNfkhCK4TVC8kYkTsf5qNX4MbXz9wV6isYB",
  "key32": "5Wdh4HSfGyhwaVhGb8FbjTbnBf7FU5VGfpzPaXuBYbT98wxnDFsH5FZGuQJ6gDShjfoy9EpBpobMKTJdEsshj96b",
  "key33": "2VMZ91oMXDQ2RsMxyaQ99o3KuEbzCYcTi3tZ5fV6u8xbuPfVYVRHjtspUoyw3W6HsMSBdXhXcktbTc8ZtMGZPccx",
  "key34": "2evS6Zvf8ELRWMrLeMkCemfns1FidfWpcGbzgntYAhNyvFUPh7nA22Z7HsKwMY9Q8x6cvUzPA3V3iSfA3MbXPV3c"
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
