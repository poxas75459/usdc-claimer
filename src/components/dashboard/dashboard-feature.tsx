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
    "2xQZtwJ6j4ookvMnUcyu3wijKUpsMs7UFHgjpVrEUJh6aycqMDv39aVUbWDytexXoAb8KdUbpV3cFjGaeC1r9MPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cU2caNmwTtmRGKiSJEttaCWvjFb9k68X5XXTNobWa8KnjdDA7CUzE1EdUXyoZVaEdLiku27br5UsDs93grBs5ak",
  "key1": "wwQo3KMX2UuNAV9DG8KUsCQ1Yggb55ypU8vcX3RuA4avsKdxPT18AYszRmzhATEyY7aCzeSExnWKzyFELBtpJTp",
  "key2": "5zSJ29mHbyZSx2yPtAvjNNuGNbJXZxqMtH6Gm6V2eqohUN9Zfto4eg4gpenhEFKsf9Fz6sjzMPxv76jTwjqzQEaV",
  "key3": "3Sm5ZBazsSDzW16aVNYCMSiDvsyaw94Amoceok681y4zoeZhb5no4czUw1Zj5cmuw5Xd22wEKEVptksvUjHrA5F6",
  "key4": "5gj5Yx4ZkRQ2Y7fZzGUQ9bDTS5kENJ2eLtkfFVi7Smw1A6aCHzAASB8Uu3btxqPdTWSYU7J8ZfGDQJt9JFAeNZkM",
  "key5": "5TudbvDgmgs9f5F4UDRmoKNKKSvKmaxHqZTgyJb1HzFXSC7rK4dFHwm55FWsziAuQrtgFqLi9CEo6xfCnzFVC37c",
  "key6": "UC6amRG83z7akS5FNNRaJsiUJMyMfEbuEytoadPE1UkzMZ6jafartuojxt6bTRUR2W6SkNn5TPHXGfvCJw17rtm",
  "key7": "5fFiywUp7jbEVkKDytxeUazhGMSyW6buiFPkF777ekVGox6E4vduXwnHzd3fMyzig27cs1grzJuv5rDsQCB1c785",
  "key8": "4mZW6BwnwTxK64t7RbmVAsDqNLkfNfSqd3QgNSyByB5NBMY5U8BzfPuVPZPCSofdBBRte5SD7ET21Yy44jL4z4y1",
  "key9": "2aZUpCmcRNL9uqySsTypuMrpJcnD84fUuPDzbRpvq6VoDus4eEsjPbz6pBdUANJCC89Br6MwGPm3Z6q1sUn4T3Jr",
  "key10": "126Y7M941Dk8Xz2QrbHj6GWXGWq7zWdk8EXQRXVmX7DrzWDGRDK9JZgyYQ6m9m5UgnmcC8f9h9vZQidFJUfrNqcG",
  "key11": "4yfSJNRjhqz8xURjNtXvzsPumhNyprciDEXt7cRpwGRpuFscmzXu4SY4onpLUZAC4XNeWgSEJv8mXXL9XGDEjL3Y",
  "key12": "5UJojqabVoa7qVv7dPkB574VvkmFFCSeFeu2fxZAWbKtkU2AN5iEQPt5RnAKNQE9NvLh6hmuACLWYi7mQndmNoTo",
  "key13": "3rU9G439Ch8WEW9R6qaCb5xpXqcpCkYkoZoFFR2oxbnsZf4jNu1AvWQT1siVbHXkhGn6YY8sbcvMG8auCNYVsBMN",
  "key14": "wQ2EnZQkTUTuFVhPVEz6gy9fw1EQkx1tZcTFdP4nr3ptLBWcPYtx7q6pcWqfNHXsegCg2w2Ap2pKMa2gArXDRLf",
  "key15": "XzLEcSCm8VsJy6WERQ4Gr6HV3dWoHK9Z3uqaDbZMeLLTcSFKSDB7qwy4UXuwkSntQz3ecp5D8tfHcJd7XxkNG9D",
  "key16": "MB68zHxQToVYaVTPKPeyToaqMQM1z3AzVJg5yjXGKttyCFdJwbsFBHKU3wh88P2MgsbQuh8QJqz1k56z6PGxyEw",
  "key17": "TS8Rw24EbbMjepqnCK1UKe9n3PfNTJ4mcAsdwDgcBYizs1Ci7NPeSH6ShKvEtamdFnWfsrDtvWtsa3EFDevb3EH",
  "key18": "4NzenLkgKQhBCNYyDWPLst4ofrjLbdW3AEhRGT7ZDHafK94RzbCZ2WXrFyvEJwkGEuYgY9W3VWA8S2rNhafrBvKf",
  "key19": "4odE8bqc39eqbabnENoY99RuSjk8Yu2e8fiG2JWkwqo2CwbEnLT8eC17ToaWev3fzhvvydEFZqcfwZqrkDDYeEiY",
  "key20": "MegQtJSNTHhAEoMttv17AK7xYGqKUiyNCyFTeZSuwBDNJbgnaYQRDPDhpzEBFnQkQCJH2obK5tNdnH92fYtZqQX",
  "key21": "453JqY3cG521o1jCVzmYxZKyH6zSqjzPDPRCsSiQEDVbjGrxZx9UDNqKQa2VvoadWnHba1uaT2PfS9CLzUoAhCUf",
  "key22": "5L5JgHGXojkgCXVg49SNSm3rGKCzrdheLDfNK4XaofBRGTbK1ewZ26EuE9i74xkA9ezsMhaTRsomZUfvYrYYmmKi",
  "key23": "64PKX6USDJcz4Xu8DfepLCyBavcYysjmY4wERpjk1FBAdAr7k2w4pCZ3hdcTVMW7uqGBmZ5cEedgCyvGV6BGNCEW",
  "key24": "4AtEDMHaSFVz7d2TUBSS9MBcPThkgkpdQzhrzL5z6H8wmykUKPpMnctjNeCuWenrYnHxLbTcAXkcdHQ1HUk6bF7W",
  "key25": "2Q6sbZaVu48ZUTnWeHJ9iwzUnK3EnASzmXJAFgXTwX82obhpsQn5q94VfemdRqhr4topQpyQDxvXgKRFknVsZxaN",
  "key26": "4hcZXpJX5HdfEjj3KKFgKT3AgVYn8XB84znem2Lwu4bFSv7cnExNwiTf3SKFeTWQ8gYPvv6hv7RMQKJitTc2E3bE",
  "key27": "3FZoPTA6DqVzjz3fxP3Gxyse3CZcvvNQ8QyWiVBqGQZD4hrvyiabizqmRYzVc3aZkwuxV8RW5n8Jf1qtrEbLgJme",
  "key28": "3buXWyqkbdQT8dn4gesv8tiyhVFwVSAuu6y9aUpRYjdGAPuJ4LzRyUqKrQs5qsqMZBjUXVcdVUn4bxcsUxxQBnmN",
  "key29": "4CbFwkCqrH1SgsWMAJdtnDZUKssEFP2zWr1U8hGuf2YRd2dihTkrPQ6wGgrnoZATVr4HbvVVGsVcas3K4wuGvog8",
  "key30": "uAAmN4xU3Ss5pp3tGbxTNj483HqNPEP1QXPb4WVv1pvDVEVF2NpmHKZoPVeiUizU6LhJox7Hfxz99hKJurCVCti",
  "key31": "5TcusLvW3WNR59uSanfNGqBM1AjuxBAH17BFJPjGdGqXCq53SjEf1Rccjobqgfmo6nWXteUr5D1gnAXviuYwrtxc",
  "key32": "592AWRmhQGPwyV5nGWk6AGGF6u4hmCaWbnMD3XTJxdWJas46Cci9isPZfxfeXeVgyD2xP7FgAHYwkpTCHK2AuaZk",
  "key33": "41PGgLHjefypLwVEavvNhvgh51B8GSd7z2XuBVkxmApz7anPAsyWRbx65vXpUf9QP3SFU8gAsTLrBFznzHtT2sRH",
  "key34": "4XNwVt8odKW2c8hi2WxSu95K8mdiq61HpxTe5Fa3uU7uqYQVTFwXSKAr6yp1EdZvxZq4gwCZnCjf1HUFiJDH9th5",
  "key35": "5xZcoakXxKcm8SiWdkk9e2CPL3K9cKybiFyZFm7u9hhE8r1S6Fjvz7rBPx2eyCa7P7LbeYU9cy6P9ef1B4nhL4GA",
  "key36": "43Q7P2ogPogxF4epazovFspwGzwkiZoVnuXiFMMnWyAdS6noWFxCLAspu4799SSwMhubmTj7Mvuk8Ceh1ENr41gq"
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
