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
    "3CeZqpDJmm466hfJW6hagEqGWFgzBZ7srbpthKfKowyzeaTEX3WToH6cbky6KsgEacMxMA6vG4NCNE8wixQZjj5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQCxK7YdKgEYVoCFnF5tAYEquQ2YP5kCs9Jv3UjFcWzn9CjeBzPRRUDCZBg28Vkz6iAHABFALCEbTxwBTaN7QkN",
  "key1": "3MgXb6RF11gp5fvtZnCHC91jLsfaHi7mKQkSPLLPM6xKV1ysgU2KRhhhmxDkvqx4uUhHEPv3SZTHQW5gu95ynFAL",
  "key2": "5sSdk4QMZdYu2LV6wngRsa2MDAitUDyrRLiA1k6WWM1P9JnoKUZDKTSEiCtPtRdDgSiFoA32KPXWSbU52HeJeQjY",
  "key3": "VkJAfbFWb92mttNb8B1q5RQFbuNmyUCCoMTcqvVfmx7xrcddwJY77hNimwLEbFQDrDdkiRQiCLPn7D2d5bCsKa1",
  "key4": "16KRBE1FZBgjTzbXp7TsN5Zd7DnwWmqkV1Gp4wRdeRWS9ezYtPjdkwwiSenUyWbxcJy37yBENFwxiYNHwZbAi6k",
  "key5": "4RwWEa2x66ScPDcGXQJ8ctXZng3bwNszFoeBTnb1WpRYD9iaMKBrzDzFE38vqe5J9uwUvvxod1zjh1RcGUQ2wTuZ",
  "key6": "4gr272gAH2yM5Ms6ouh6Be2iChzBLzwiDwg7DQyNZWgUUtb6TrFLXo1Gug5VHoAZGw6T3AajJLZpzFLzLsCXexAn",
  "key7": "opatgcf9dYrV9QtuubqpwgohmfbADibKR2MQbiWTx2Tftvhv4e5RM2FXzKvtHFpU8FPKtaj1Y2dVdjrmF9K86kX",
  "key8": "3k3iMvwZCTUESuw5sYaHQ8S9fek7JzeS6n8D1CT9QoPY54ZT4zYBJyBgmi5io5zNhKqM5ETfZLqtWQ1wXGL3USCu",
  "key9": "57AkaMyuouNhPPajHayLDL7iQVp2zyQNwjpZX58cktugud9dT6memDMibtT4qeNGcCCa1Xd6wz3TJHL5AKWSz5Pz",
  "key10": "p828Aq9mWAkFW5RqnrB4XRzkqp8wAY3soZCmKfA9zQkPyhivTo1nHAAB3Neqe4bmQCt6kVrjzJkefEBQ69ciUcS",
  "key11": "3PbxE2G222mcCPD7bLJpeS2WyhoPDu8sP5GFbR1coaob5LUsKU2dvPqzkF7V7BJYPU1wEZrCRcFeCLHdUh2Xpw62",
  "key12": "4FoJ9GEtgWo8XSVrQ6YHqrFUtnGwkoZpYnCFVzsCSggKhn7F7DWa54JgEjA8CgV2uwiuitasePaDR4um5zh5jBzo",
  "key13": "5sCeVZJkMjLBUXZkdKyvXjU3GxoKGtM6L3Z8tzj45CWHKS1DihhBMPewYBgEwXekphaLPjc72UDaoLb8QMab1dEm",
  "key14": "3NxMDcWjAJWciCFVNnSzRyvJKuZxAjTnByssRw3qPCQC5wVFMHExmHMyKXExaovyAV2qiqf7MMtShwkgfBcUMLsn",
  "key15": "2QoSmjHDU5YmjaaDYmeRKQGeJKm9AjZ72W14u9avAGdeB9BVGowp4rTAjPra8yaxrRjGhpZx3Ae4RMuacWjFJU94",
  "key16": "4KeukHP6Xxi93pfAj7H19Ar6qc1e2mvPY73fB11cY4SNY5ESxxxZhCQBpLSk91HMZkqAebPH8mkRj3o3iSFAkjWn",
  "key17": "2fjMj3ktJY5YUp1dwow9FDiVUbEZhidy6ZeFuVsKqZW83AnhQDKFJKZJk3g4k321JQGbTbMPC62y23LKENgdnT2B",
  "key18": "5LAp17TYpmFCWr8tKry8pTCFM1PTmeCs5Pk4b2pyuJTEQau7eSxXoTLs6KEDhBs2SxYWrYFhQZXDRakfMdHJBZ8S",
  "key19": "4JfmydHAZbmYusjwwF2SHNjARaY1t44prLt9T2nh36WZZS3z4Zy78HedXpKFgxSH3YLXUSPNKGzkLW5eUUpuhd6V",
  "key20": "2SyetA6tp25WxyBbRj4vRdzp9dfvYtfRZBbHrBf88f6CNh5XEjtfhBYZw2zkBjeLEvyNXp2TuWhD8Mg26FYzrwvJ",
  "key21": "3bnDLN1pQL1YSU3WKRcCY4LRB8cUwJQMWaL5x6onRNrA9MkHWhsAvL3oxMKVCRzYXckGZWY4x3dyKtgjqCBqxDP5",
  "key22": "3CSommoHSJkjxiFYx46yRxLTwQAuSAYanLm1ND2JG6Mbp5EUox13Xz9gEzV5TUkvTNzLxoUZY8JpDDvAejkB6SXL",
  "key23": "4aEkRJN7XcebDyHifLdQjrbCnPYVwbs9in7mLykbRq43XApkB3iCAL65vxgkRjj3jdEY3qXbnp84iqA9bvMN4Hws",
  "key24": "5hN2obrwhKpuyt8vN44deH5tSu4zpbq7RewcGQbbjFu5QNG4xRpsgJsG1BP1jVdFPecCfmPxeT1qMqmtwWQMq61t",
  "key25": "3ew7RxAHBXmQQv2CTjuMEifZSwbpsQPfwi1j1uzmnf3KAZAQzfyU6i8Uc62AqieGYbUrkBgytJMkGoUhHE5KRANz",
  "key26": "2s7fMRSm8qFJ1KSxccszGgrhxBrxq8CGPfi8hYo8UcxgYpbd9Lnzc32N4GxgMx4MGCtQg52SgeCox1MuvuJgVjKt",
  "key27": "5mG7qBdgYs1YR64tPsGXmqzDbFzBr5Dv9Q8iJzf38VB3pXhkbYKtibWz7GUXauQNcYS8KUb5u8efxMRVcyuLrf3i",
  "key28": "3e87x4Bca1Gth1FDQwLSnEfZPzTgA4SkfSGueEAZHUxUjePFB6Sn4rdqB6BQLgwSyCaAMg3YnhkmQ9ucXPW1dfoY",
  "key29": "2SGrhaXfBBxZvfwWRyWSYihRxCFPh5s2q3UAq4kferULxqpjUCkx1DoAtNiYSnDs4MFaQwUV4EuU5BLnD1F9RSRc"
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
