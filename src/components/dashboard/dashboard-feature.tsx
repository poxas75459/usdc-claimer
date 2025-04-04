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
    "4QDbQLmgsCdjYgs9Dv4VR1rbncHZZeu911u1cwkaU1yB85TdXmkV4MmL7A7wzgEAsm7FpTMLCRHEmsYEFv6qjRTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478hPk9Vcv9Vzv43FHzjnjL5PybAnxZDTRC3bif6JZhnHXW11ynhvFvW52TgRkG2SsRabVWHeXt21NLVZqcs5SPh",
  "key1": "5B8jqtQ3ZWgj3MhTcq3ecJNm7eyty9yEJeS4yA2eU598xMVrY3GHESwTCyg2MgurJUaeeL44Pdn667aPYrkC2g2M",
  "key2": "4ZCaTEBjtPKanwPy67yKzNmxgENkP9uA67x7sVptDVF167tt3LAG8EJASnqvd9fLoM6NHciqMfUYXR7oP6RP99CL",
  "key3": "mjFbFFtPEQGLdo5kEKAKBJqupzxAQTmNaAyYByAcGx9goH9Rjkgk6zwLRi7xLMGnTzJebUjhzxNzfqMqpvfpSqk",
  "key4": "2CRc9V7oJtSA9yQ1ZCuSFK9cAQCWrZLhWL463q9Uc88ix44iwv8JfLa764fF6UXFyrAKMkMJNSwjsE52tAneFES",
  "key5": "2zpJx3MrwMuoTqtbFKJ6c64bjKXMnZUnXnzB8C5Uw9ZyQvpJHPVtqSfQTWuNycu6LDSidfs8ccDRzg2BbWdiSV5G",
  "key6": "Ez4e5XV8CnMZDZoequxJ4r3ndbcoYS73ot2NLpqHmNXbVu3EuJ1MPZfZFgpxnMDCyHQVEzHSsa1NH6NQ7dXD7br",
  "key7": "3oAcmVHFRjvCx3CDwuLcBovDaYpcWCjNoKcDESABGgP28YxjUpkkpGixEomyzsNjitxt2vLHZTfa5opUsxpqSF9e",
  "key8": "5T1Ce3T7Ud1KN9krzjddawYeUNeMG7ihysBwZKPcBoC4SfbavjigsacLfufMBBWWiFCgkSgpW9CLTqdzhWjeMFs7",
  "key9": "2qUMNPjyzenpWCHbYL4WGgVCgdLiqrW4c5XudGyKQCJ7z15uASrSNzhvMbahtkW8g8RAqAPpxnMKQtmshXhKMTxf",
  "key10": "jsNxBbSdq1c2SCRUPZXmVdAio3yQhv4FivZtzQrhdjqg4n71FDc6Jo8ZL9WeQr2yYtCdvGG3yLp9sXZTTcaRzpo",
  "key11": "W9NsKkJPr6EyKJWhLdp5Bh1xdrQ5pubXXnBSTra8f7zJvyv4ad1We3Uhsb9V3DaTr5ajcP8LVi9PicLTbak7nr8",
  "key12": "euZgNKo6HiC17MhT7dFyn1JHhpuC5qY2e5YQ8e8TMmRyuoWbwf7kndLUAqhop8xwWE7yQ9hWMchWbrpikJQFk8G",
  "key13": "f4Ye1yJiiJ59fUbPPjWk95rN39GKSEMBtZmtT42Up7srULcFS8aQEDKsovBKQnjcfEJUjBrviedjihzsQP3wfeq",
  "key14": "2rs4mNx2urGhVMh4eHJWHQ6o53BvwNPU4FyUYRrweAgCFEUWw7PFD1iUHqs7TQx46e39J49D9H1g8CJYRkSLSJ2X",
  "key15": "2m7i9u5MpjAYFqnFC52ziTqHpmMjMCoDk7eff5Q1X1qAVhgYCodqbZy11wHKQK9gXrzDpUK3RVxX6cHvsrUJUx76",
  "key16": "3ZRdn8JkXDHwpxy9vyavM2x3R7GYwWVhKRGkJghb1uJ11tC1tPGWEka9LHvGLizRmJUUfYAH9psJXAaQHc9QJipi",
  "key17": "4fRcGfTrgBsyX546EtqGjeVmXaMcpbX9JGGRjXNRAb5y2CH9ZXvHZdjUwkrZb2AvysDtMNpKUNuUcAcKHDF88JYU",
  "key18": "1NkhWD5nJCVKDKih6hybJT3ZSSsKEUso6jqGz2GcH3DBnNM8e8NexW6YHKwdWaEeRox2RRNVBgDZduWwhd9a5tN",
  "key19": "Jk1ypESJLqu44HwCba9T1VBZhWQDEopzXyfhMvxEKuE9V6Uk7GXU2bTm4e7iwkz1ztvoi4iyjPxDuEWfgWTsRkM",
  "key20": "3Lx6TrrkP8QmPfcQTRSPueWoq72p2z3XhrGf63HvtkLCmPAB1dtT88xWQoeuvzRe6BoLFviUYvgGHPEGAmVM6xQQ",
  "key21": "2Q71YAZjvKzZHnrcAEQnmzmpvQi15ESKNjbxX97KDzZkXgDodEKfDRsCVE6eR9YmtEEFJnabLJ31ZF84b26h1vrH",
  "key22": "28Mf9J8c68dS4kAZa6s1EcbSXswBV4wSySqQK7VMLEtXVgiQKXKwgM44Sb5JNLB228Ctw2GxEDsRLzkSY129Cdui",
  "key23": "5SaMqMq3jymQXmwyVzW8vrAb7jJFEV5D5JeHskLHACkhJu7gHuRAivJJWD4PyZuycjj2Vqnk29zVmzKuKDhTQudh",
  "key24": "3DY474puqytXSJ9Zud3LtCoohv1kgioDBHrgNcVa75RQZCBAoTmE4sT27x1JEv6hjsageJev8U98HrvZWt5ur6i8",
  "key25": "5v2THuozx8WUmHcxRjfdAuma8MQCm7XH68gJi9mmPXmSU3c8bpd2UYzJmYZBpV9WSr7JxskarwpM7EtfJtSYReDs",
  "key26": "37vEzbxHdLo5NKSnCmGxkGGapxTGd1hnPwTjwuUSP9ZjocPrHGDikhe3DfjUnKjWwdkBJddQB5rTBwzvuaUTjrxC",
  "key27": "3AZJapTd78ghp2pW6HeFqbLUGvhR8VogChcEeuHmyosPpVrLPuCrEcyKqhYACAvqGKvQc9uDjKjxU8Cmm27sgUM3",
  "key28": "5ds13ALDLuhTwbTjinNzCQWG6aDGauczsGMrGyBYhLUH1hWrnQaZc7acFQbr4ocEnuaTwfdsxRFJ8pHvScHWugQx",
  "key29": "4sDEicU92p94apZo9cxqSrKkvSbrXUXrEv9eoZC9TyU4oGT1UT4umM1TgmKBT7wzJykrQ6YidWrVbaFPWrrkMxGh",
  "key30": "yDrG1Hda31DB1ESmXfepvsTeTqE9h3WAcaUpsCPg1eUGCPuhFfwwWA8PXVPDAPF5PWSqAa2uecATJrD3h9mcFXo",
  "key31": "2d7UE5FENoqczNh39U3Ma5qXRBSLDeTGSrcBEQBggfqJdE2ercsLwDowkXZETMhtHPjVcbhosLnwHZAwBbxvUCgb",
  "key32": "5q1XXcpE6gamCpbA9ZaWjjJSuzPMr54DjDmpMtuoqa3obg1u9fEdWxMhGvmyTFcFw9F3uDsRqH7XHggyq6YLnvDS",
  "key33": "2jYLxJQxu8oWK886yvA54fkrxBaKpj5j6Vcwo7BFT1XtFU8LWsmAtcDNcCfjQ7MjKMyKPzrG4RugcuCoPDLuUWNZ",
  "key34": "2STLcEYjPapckfE3jj2489zBEFf6cUhkvi3C2jes61eufo5etghpPP7ep9JFS6BoJCBRF9eerxiGpQdywWnRQD5q",
  "key35": "4jodbr8at3gd849NyQUXuupruSqfuQpjmt5s8YK9YqKnK7XzkWJYcJU5NM8WXCviP9V6tqdA7g8pEUmxYeCFLREz",
  "key36": "5WYRdXYz6FJ5CU4es6phhfExEpZUazdfDFnxsaBdJZ62YdVywa11drso7xigSqLU3ghH9r7FmGqCLzGk71PhYyEL",
  "key37": "4VRzQWDHBbwDa547r6d2ywFBh3i6GMreq3zoDZLPxJG8X7xs42FjCQqHwv8i4mxBJVyKUjKA3hEFX1oDA6otFR6Q",
  "key38": "2rKsHXjk7KdQvu1GLPrM9c4Qh5e169GrfWmLfPZ1nH2oUqhrhgP7B2BmRsdMHUvnzPTxNmEMN9RBbzuABqmatku7"
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
