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
    "3sNYPm4GNXVurRTEVqH6fSd8eLU3SksLHKLECgw8dCZzHZfcELCt4vf7z2PkroxzWoEHkCZz7s3JZpofy7GDoHjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6C4dMze7ncDKGVVRswsZc9uujqNqXKEue1huAHLMcbaHs1tjfnVBBgLM4HUS6AFNo1tPm6qasooZRcjZ6racf6",
  "key1": "QCMbtgNqYm7hFQHsdsW1TavWEq2pHUMcmQXnZDSDMaVuZG866gNSD3ow5XmZQVgzqimonywS7ukvuzK6vmvixxp",
  "key2": "5J5wjzVDuJVE9biNKoiWeSJnQuAu7ZnvGjg7Lmp5UnupHTS1pfgXQMohGxMLdGPcJQR3EovoA8UBTaqr2QDP5fbW",
  "key3": "3qo9rx9GR1MQTz2QQMhh6DdZV5gz7ewvVoecch5jU2pKuaRgMBKsyJUjiHtVDMigVqs8N6txLsLvGkJmfbNFEQ3h",
  "key4": "4pRgMUasKXktLpHpexwDNKXUPGkmv2uAH3tL37VXjxaD9219qoQgCfkBxuKjWrZpADotbhpReU45rcY3axyR9F5c",
  "key5": "2MvH9JwH6BDuZAYbw5G41W6F7EQbdPyumQPSPw7cjXXpZYKc8FwFAW2BGhvx3Lev95sc6kPo5sDGjcsJM4ykicr6",
  "key6": "32FiRLVJkafrG7TYMDdUEy3kEKFfXKCWBDtkH8wDtpjfsk2A3FK69GwnAKaV2kpSkPkCRgB1VDg6VeocqNfHQfoX",
  "key7": "5C78fENrrJVLcJwdU8c3JBU6jt18xHEAFFes75WXH96Dd3gHBjo8CcVhcnZTxuc8YFoGR3ugnEbSDsm8rwgYG7yA",
  "key8": "3P3AxNuCCp6EPTegxRYJ9caSfYyxTpdJfN9XpWs6984F32qZrUgHWeVYMBf5WLfGMQ1QF1BBaRDn5ZZ3CZdjLdxh",
  "key9": "g71Kp4vzrHsTXZ2s2gsKotBYst9PB3VNzXJE5ZyThr1xTZD8zkMVeSybjb2S9JELyy9h8pZJXR4sYPe2JLcLfM3",
  "key10": "4dW3fKWWPPprJ3b9CHmveRsbY5UmwP2M1DCwMtrnSfKd73mv2R1WAb4bJZAuznCquxFC99qHyC8EuUarcF21TQKx",
  "key11": "Uxtoq559PVRHWyYoRJNJQRCbHdvBLeRo2nCQSNsg1piyL3TnEPqDTEHYu64QeWuMkzrS3FXtDjY6KmC9gy6314r",
  "key12": "45jYfudUJptqBiFb7Mrsp1bo5qigQ2xhU9uYaYtKAwdjkwsiCK7rUNmntkpNWFR3Tgd2DGVA8ftDo3ALLGpsNJ4E",
  "key13": "4wED4NbDGXom4PCNVFhMjAaLSX2avBrreNTsRAdVjt8r9dmzzQjeTS9e67Hox6Mo3sphgfd89RT24jDia4HRdDbm",
  "key14": "2GM6Pz3b51ufkasLE4NZkcddZQyyPifntzfnxAMLfxftPabXgwEqsF4SoBy8zKuFHx2uwsRNsyvThnvWBL6tMQ8F",
  "key15": "WfkHy3rn93DG8vtAHgnSgtgnET2ar8raATPQMwkBgeFZZSjaRyvcURMhStxHJYag98yrRbtgPguJHx5C5u6GATg",
  "key16": "hTkVAkMivCmq9eHY4J2UqZ8iVRPGkqZyhZtEWYC5peCABkwqEZeM9DfhEoVaPPPMyH3qnmciQBdjwyDDY4ngUAU",
  "key17": "ra57CqtFyDoh4s9zWNQjW2zs2Xgonfg2WwFv9kLN4mi5JFX7tM7hGSb73dGD9AAT2PZ6Xj5rSFqifGkK7mTRXy5",
  "key18": "ndEN8DBj1QJd4knfLjUd1PdPMhDEyybAuxsPHzZNHdmvhh3ZNU3sdJMeGsXPtfmC6k4H3drqdKHozN6u5YHvGff",
  "key19": "5TNvmyjPegfzfy2PWJprMPDmW8K8hXgJKtDdwboiqkEbUyxWrAKEe93JxPGMNGvfnZQkXtJWipyRJAEkc5GLgZKn",
  "key20": "wyqzaQea44Yv7KS7BeYrwskWdy3iwC9ABTeJuD1ogQ2q2KHcTMiTy2wpL9XpisTAmPxutUQXR8bn8fvF7HTr8UT",
  "key21": "tCtWk9wqJrR7N9NTzdf6mpkLVvg5nMCJ9QD8WUKNr21FP1e2g2x7Ev6wKueVmowuPziFiyUcAvtXZFa12PG8koZ",
  "key22": "5GB6q3xrB3Dd6dbqXHvLUE6ErrPv5fNqxjgRgc7q3LVsM9C8JmzBKgZGW4DdUWpTda8ZXptK6815sZ2okbBxcvz9",
  "key23": "5KuGTFhYgZJ8Q1qMfGtHL8MnVPgzxGLwWiLNUL37RCvEATy3VrAXiX3326gZMc1sxQrpHe9hR9aXoeYadvJq4qhN",
  "key24": "j7i4UEGkm6qyVuk23svuND8LoJnLYgyLTZbJEDFWtBr5xD2EmowieW7z9AqgCeQG27Gyr8bR1nFSNdLRugBvPne",
  "key25": "59M7o9yZMw9wTpn5JD2Fx8YZJvKw2qCV8wW52J4yeG94NQVXmaKgGXP6BVnfh9qaTToNPG7wr1FnYpqLkPjhex8Z",
  "key26": "3tmCLNz2HUFjRBBCBKXivy17FbffJFRH8m5rVNEy8CN4Y63RfjcYWBdrr7EGpWPPhkDahCzVzjq2FG3NmDCstPiJ",
  "key27": "2BomM7Rq9p3FYTxso6H78436rW6wnL2tCoFHtvnw8pPCQYPxhK7W1JPCJ4FQ3c4K9oxzGAxpJpnxsh22Ke6zK1h5",
  "key28": "36sCqHz2pKFPbf4edzWm32hpiEmNfpyJgihXBbS49xzJaBpGpeJPRujY578E1NjVAtdxtaHDNXiAwDDZA9pw3xM6",
  "key29": "5tPcwYkxQyyH78ksqqCXQa75zML7BioZNhHZ4C1poD9vxqQvrxkKRByQ6ry1vt7cFmPikLEW3mitc3Y6pD598wH7",
  "key30": "5uVtohwpKjSyAcgapxA8F6fbPwvvYYtQEGP4BrsKCqT4FkAsVgJnf4DdPU1VSPQieYvCnd69n75ZXeKPkiWLfFAW",
  "key31": "2go1PHadorf5KrzHuREx4H3Hj8JHtbAfD5gLjbJhQyCnjDFqa4Pe5qXTm59j31epK6Dg8LRk8odu7P2p5p9QVXWv",
  "key32": "3FsahE196VsJXqKeG6CWsyoCyTQyycqVDHAKFJumRE8qGqRghzELH1EezmfwrhQKhJ8MVc1pfEYrfb8SvDiZ5gHT",
  "key33": "3c53M7WWxrniFaECejtLtVabvZ5yDTqZP5w5sXgrHX8B5P6jp5hudWb2nsHuB3GNhnfD2yHgkFtnYDdGva5zpsbn",
  "key34": "6xGrWnqZAw8nSKUZsDHXbd7TRPQuCGuidNn1qFv4h2g7mZ6wiXmkhyXNPjrF23HRoR89NzkjeX2FZryha4YvjTZ",
  "key35": "2bDZLxTB6MC1f6j7TtFdri7We7rDrReVWhCicVnc6beeUKR3VSUvuHaPtX8wjmWSKctkqfHnDfSLZmoxNSYvfdCu",
  "key36": "2tRriQ4iuPG2u3RRaLcJgJFAtvNUuyWCqVqXdGdZW24kGGMpKAYtcZQR1XjzixFEr8AAuMWt7gP5SEepo7PFdGee",
  "key37": "35y2NF1Ui26rMZK21z1XJdd55pD5KUoCfryJTSBN45qUhPxcP3XaCXDbviqesHwzB18yFvisdb1ygasFRtJeZCfd",
  "key38": "3AfmfrWaT2mrPUYM8YZR1Pn3WMsxfuTtLXSg6GWy3XNNsj89huE9bi1vgpTyaDLb1Gi8WVm44a36YjW1pipPueyB",
  "key39": "2Xy3kwUaryhNxuFn1QZfMqBF7du55Nc48XZMesJCR6a6y7akwakoGZyXFgt9H1kp14keUCHUt1oYGh7ou8BaGkM4",
  "key40": "2uVgGgPTP4tXNhsbCVMkw5pfLqA113eijU1waPchnzLKXGZaFrJ6yuetj5QohFXwF21MXZTqf7RaTq68JYHsMWPG",
  "key41": "4cBwebQ5dcgXaH81G2KthBVkHpKWx3V5dL3FfY4nHLWZFUDd2GnRU59Q51W18ev2ccRQPsmbMZc9fDANTSay8Vq4"
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
