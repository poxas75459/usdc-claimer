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
    "3fAudPAeHA5PdZumsZ4SsHsoBm7UjzFrgJJ6BaiDuRgCcJ1bgRJdbkz7k5WXxnztRwLis1ErR1NGzqWYCC761t8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjdWBBrqsfJ8XZRUEYnieUyCbZvW8YJ4VMgTh84dGdzXBkjKrMCLXmZwoZ3GsRLw6hjW4dJM26YEPqgzMhHRJLm",
  "key1": "5JVeh7eBj54Y9gEi1GmSzHcN4rDbQhQxUaAy6XzBmFo5WCzAked1zVQRdfsaD1ybyeSxmozakMQD2JTKKiCPGips",
  "key2": "4AbWKzySFS9frdnWcYUqYLnchAQUWRMgdfhGa4mqgVpysqRcfoPQzLDctaefwqPiEAmFGxwRqiBU2XaMJtDv9Ypq",
  "key3": "UoL2f4zJP7CA7YHzWofa4oeswe2avQ7JifDYaXSjJ4Ap9zokR86dSexHh5KcRHaea6gG1F4R3MqMvGm645KLeUq",
  "key4": "23vJJnZHDBeNVasXNXneJ6Ar8bB86z34habCyd93scyWNMV8vcQzfR2Dg349eSV6fmQiXDwM8ocTDHEqZNvxpC2f",
  "key5": "EfnLfyYMzmuqk32Zx1SRvEDhXJhnRky1QjiTPpprRXDEtpeVRv5ZH8GLnMJHsDqhBrp2qgxAAxTUmPDGA8ndRSb",
  "key6": "3RCoTD8KH5WMkg1M6PM9BcM7bh1Ts8e4k9hVvGRpk7MRQo7QBopvWGb2xyygV1yBZ5f4AY8apcHW6Bjo8ikBp1Gx",
  "key7": "4zoqDNyad1AVxTHjT998XdRpAmN5vZYBq5LSPNgdM13EKgoSpayuPJZv71SNXVkBvCfqhGtfHxW1RH5ZzZ6T2jQ7",
  "key8": "4zjtw7YAfQjUx2UHhoe9PLdJUgbX8hnsVPeBN9zUfsdNtSDeB7u7U34kMeTUBjBoyKMji5waivssmqyfj4GY2ZnC",
  "key9": "3ZYPn5WThMGtso5KfPd3SZBNhWpuwVGidFdLGePnVT6GQizJbAFTPAhDFmbfQkpeRqZEqnMupC9YJnseyeHeEsJf",
  "key10": "64wABTpsZxtoJfgMM2oK5Fj9oMhaFsPsjkKYSaLGgbkPCWcStdqSza3ZL4LiZqdFmcZPpsSp1azLswiqkdhgnswZ",
  "key11": "sypWdXrmTCSq2aEr6cYvLsVzZGAEE8E18assLDQskymjEUcjC53m4pqF8LV4bDRC8M79MQZ1gWTHyheUqjcjWvp",
  "key12": "twUMe85gDQkRDCma1R3UUgrKxLcXu3LrCsym4cQpj9QH2rGsBdYx6RzToYAfLhzPL6rGsGce4qcLfL6dn2CA7Ji",
  "key13": "5Bc2fPvdQ1eZckP4RHpqCPPdewSvwxzS9JdpAqjJhy4TFJS12mP33u9u1sU2Y8pT4tYRbS5AiCZjUmD2EvKXfB7e",
  "key14": "5i5VLStMcdzoRunnMJNpoCiktxuPfvTLm77BmiaYsp27Dthdj17xxefPyHS6yYkvUShGEQ7gizTSbNZa7kt2Ux4B",
  "key15": "2ojHzZB9pTQAe3EnybkPUJ2znBBFbZMATU4avAf55APPXstaYS3L2moeRqCHB6CjxEdYfzFcgCu7sm3mhZ2TuzWb",
  "key16": "3N2kigcHX9xjgW6NFuGK6MoEVLyNzWL3ThLHqV13Ak531QTtEUL2jFaePzgTrRCE6m7ofogNMZzZboP9ijzqsF7V",
  "key17": "3Jxy6tt57pgT6WsvpeVTETZ5jb42B4BnGqeLtahyGqR91ykTpw6MJhsQ8HLTxAy5aZSFiNqbzb9vdXwFQorkdBEK",
  "key18": "4btnyGWDhDAQrjLyDUqQChZSSxYojyxVEmAwZb8G677Tvsk8ZngocCXEAq28fBiwqghof9oF3Anxyh99PXRLbWy",
  "key19": "4riyQWgD71JJ6QsBAKarjoD5mkVyGNSnqS5qPvzen2KgigV774tceCr6bkb7rRDFvvRAqUfh1UzVs22ErNi36yrg",
  "key20": "2iWMLZWt7La96rJkAZXv6Vc5GVRBdPNqpPPFFwLbdhvWMMVrMFayWjyM5eKWYJBFxUSX86Bptj2aQPmGF3jxWrZF",
  "key21": "a7p5gUeJW8bsFFAjv7dA65G4kESa1XCwpVhw6niSLyWaQciFctQQGy8DFoFSnSi8E2bDSyEdTD4Snyrhv3FBcyy",
  "key22": "4r6MXqQxabVC441EgzfbngzyNoeVDigC9oQSHVLYEVDXQLNEXQsW2Xab5zzZZ2peuLeWYawdx8XH5UJKkXgxn8ba",
  "key23": "3TsT7VerMfFNzvVAdWUdb8pZuz5wtDYytF2sZ7zHMwv1cSwZZ3PCy5rV72toavYrFZTLd8KhZeyusWpAACZPwF88",
  "key24": "4oMy7ZGTxtC63ApU3z4TwRqbmbATb7jTWJpqCzSKxjnrC8WAgvE7S7E3kCyLYyetm3vTh1e7ABYSdNPE83jD18bf",
  "key25": "jVbTbqq5YKq1t5Qq6qbud31oxD8KwFFpYTfM78dHJkZQUo7wbLGfvKDD8wWpDAmJBdos4voRK7BKJUwEbYGR9GQ",
  "key26": "4bKXB9UQouPASn9NTvAvUpkTADwu5RwHHpBrSxSusevMPK9NL4ZoxxKrv4QtSg57oEH2x1tT2mcftzmuF56uQRuF",
  "key27": "4FirLTYDVLgoRmh1dERn1AsvVCqkeu2qHvBFS3HYcddKEytzcNiSsAPp6D1SrmkxDzkzyhwDU1ooCfB4xrnbFYi3",
  "key28": "33ZdE9Uu46swPgUbK9Mo8XUkQLzPEkqY91w9bTDZwbHmwi2CGgcztBs47k315smCqQvTHGYYLth8HthUQGuUMocf",
  "key29": "dKo6rBKFEaxjmB3Ug63t6egXK4jEkBLLMvow7BnK7N3NL7n4WjY2J8cMddjioF5tDva4i6oGzbzwHT5KJevMAzQ",
  "key30": "ovJRRZsFwxLAe5HTWeNbyUyp9u3SGWPwBATikRBjDZKYpJXiiMQiLeZDSs2MRKKuFw6ysKP7ov9jDR8KYzGCr5V",
  "key31": "3iQbo5UvHiJi7CCv5jfdrUMXG7kpJnE5uFnuWqaxSXJzxnt1fxxbZMEWMfwan6PJSrB8QPHMG21LQzdsgRVKLXNY",
  "key32": "4wuNqWVpPXCBdmsQ2fk24ngsSyuKe98kkUXaK5en5iki5hs8NXmC1rTNpr9YWwhdrC34fZkFTRawkkpewVce5KnP",
  "key33": "9rWCEPfJdcBj6EnGzsaweokysb8APBmhq3DYmdC5MDu2Eh2rBTVDbkfZRaPmLj2QzMsx5nsQXRadKb3H2RSfYYr",
  "key34": "4tkKmHNCVmGpu9jEA8MbWBnyNKxwEsHt9HNbupFHr4ko38myncw5e19tEesHQs7afXma24mvKtECXU3o5dCMBbBQ",
  "key35": "4mHAiTexSXUE3f42T9zDv6zQ182X16DM2QEpgBvghCYXEifEcqSBXTUqFRQrhEx268RToi31KzJfvb7RL9oq2Tej",
  "key36": "4kQCPMTPLkw3JQRxkuYFXKVJVqt5V4JSeCpguC7mcx2gFnQzJwxerCa2Pd5jow8Ji1yCaricVJsxG3BnowUCafkg",
  "key37": "4Gi9yYJ2XabtPJCr6G6LwmABB4yL1xsstYVim4wLyyNHRYYSAmySuufgJXVBNF5BTAAxbmyTPAXcfThZrJtgEM2p",
  "key38": "3zisSL9MpYCNAPZfZL1ZUz5imUDe6SiK9fchkTBvQZP3x9g5fy3hq5kDQ7wF9bKV5DYSyyT5adZbiaRWTmjgG7gy",
  "key39": "4bSY5don4ZUi66pncTboQCVrTEixJSeLQWho26nigBUKcDKEZwGwYYhcSBMJHi17uGfhwY3Pz2d7Lp4hYe7U3zE",
  "key40": "5ajKoBrNzghWVtMyWorZcsKkvy54M4RphLVB85kc7n7gRjAhx6Ts1veJSQRDYSf2FhvER2TiUzCNyTUMRvQLt55e",
  "key41": "3VGFg2z2isRbVhokHDWNfHpaGDm1h98VVC5KEotm7VaG7vpBkquXfkmyfWbydSmcbD7tDwPVbus8vGivBJYHojpx",
  "key42": "3i4RY1jdHqjfMZuTUCk43NfVCeJ7b1kpA4avdrSTWa3jduyAkCxqzC7FpfCTzAQ7afP8kPqE2cLS5wkRR9GHsY8C",
  "key43": "2jthC8pvyAYYnVHtb2rwYybv5mNT4VJ9ecdVVHK1VHPAL3sqdA5bNS8ULXRmnaQdDZaVJnhx5f71oVi8ccRyFNEE",
  "key44": "2abzGmVBmDDqWKWuXhvjnbWfMLQBKihyc1QNhRy8CSou98KFSryQjHVJTPmvyHVtNEmq967ZfzSuG84EebYZyqNj"
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
