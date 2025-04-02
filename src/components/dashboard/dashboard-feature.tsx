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
    "2JqiC8ksvBHnudCkasfPR3zq2AVBgoLfyxAkzfhcCM9dBsXbLde1UQ9CuzpaWH4J83mHHDMia6G8m2SEkWSfrAv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUsAodB2CVSmZjk5S5EBuYopp5zeQwzGdfMExrS91mvCEZkMMKzfoGgymHNd1T4U8Z3CLvo2G4MJmYSA5YFAa6g",
  "key1": "2DSBGJUwiooGGE1NsjttZrKvk7RAPEwugZuKqRzyw7L5mrbp9y4qDfcc6K1HeDpt6HrY3drZrUsCSdWKUCQYG1qV",
  "key2": "4TbM6ThMro6eotc1fXsNpz9yirMTDNUFbqRmHdGtfpzJETrS8eeAPuAKLDdF1kiDPibLYVq8jaFc6XB7y9dNwxaw",
  "key3": "5RUR7Ho8nvUFLKj9pxXnPSw6LkynN3H2BdD7vcjpsxcoWrpPuD23x5NKEwQae7B4hob2JbkrA9NN8eZR1j8GepQ2",
  "key4": "VAaDm3TgRr1tpkACJ3w6qqZ8gg71vSCZssaoLg7Ug7mcMRzpLPxYjxYtYQpJyVRAXSEb2XH6FvM87MwgcDFktYu",
  "key5": "41kxeo7BmmakaWFdkDW9WHVGYTtjszQkKYSp19yyuWBLRk7419t4wTesHqLJhYGatxorqR8ddwN2TCVikXN6UmD4",
  "key6": "4uyTckdQzf6kdY8p2VXE7WT8kWqxMDJoQeA5eBeV9uD65myT5KGKmnNGzCnRZtm1tg7VoUH21X7NZRrjZNWqBmph",
  "key7": "zdsU5Z8UAPGnhdhoNHsLUiUB6EvDnwbYJBoWD5BhZsTTZnTz8kkMvN7CYbpKLW6YLjuFAgAHqo4gprcfzm4wpEc",
  "key8": "3RwNqXjLH6frWV6EtTFUbTPCBsKuiLRVQc8CY96PSjtZoEv1L49v4yiwqjd25xUXuZ4Miwh19YvfAcJGdvxTHbvt",
  "key9": "3rqwDpuhUiBviSdJP2LCB7Vym4Dv5fEPWu72sCEdESK5tGnJt1tJorvSez879ER32xM4b7CT5AWL7jDCMoHSqJt8",
  "key10": "2BFC4KshM6uDVNETwYBXQxnkRLL5kdeAGqjDsZdWu7EHTFmRTXr7huq9TMkenUpGjgiC79j1RNRPW3z57gTAtgNR",
  "key11": "yeN2e885hnDsDEYESwGaSzQCfiTxcReTY5dcuQ94AnzhfgHeUZ3cVgqKMapjSWb5NxrsqoZKq6BELU9s7ofSq44",
  "key12": "9isT5tE2pBcGghLvTVznfAjpYp4KDH1SMCfPjLAA5HP36bgnhNhjoJDPmWEFi9P1HXNYVVBQmC61TNC8wCz14CW",
  "key13": "JCVRkvN8PgrkyMpXtji3joFxPCyXLqWd1W73dSqHYhQHubziES3k42aHwhZLauKJgY7ejAQM9RcwhvEroGPpvxf",
  "key14": "4tENKUHdbcvbrYwxdQ56Y7MRhhm7L1JwVVFhtadS4deCXVbMmsqPoPeQBNt7uEzAZGPFgND9ttks8AN6VhvjUp9A",
  "key15": "3NWEi92DedeuWCSxsW5HVoxpDoLhPCuodj2E57SwqVTCHcnCASq1QkLWWdjXbshvjD6bKVoy8iqsJ2X9tad6nFU5",
  "key16": "2sJkpCK9kZm8aG3AvcwuzZtBvTSM7BXRjB6nUy1h8vQUVnBgwErxub8ZFimwypeMBuhYEmmPAi9yxxJ1UAEk1u6R",
  "key17": "328kndWriA85izQRaaw6BrrA49K6o16J7vNWk5UTuS6s1EKMWGZjsqjojkSX8gBuNJKbkS7aYejnKwMXNars1Wwh",
  "key18": "4ekQU7vrymt8je8tUvWNZTZ5vKwzUa6CGD3GSFTKhZ8NGR7YvktDaZ6C8jrkSSFZHyWPEoS3XrcQYKyqMVujZ6Su",
  "key19": "JvAguXxBv6UUmRgGdf1zRMHdTaFAoGEAdfgWHCb4wgxY1pswj9WwRJJTKCpAeiyCNqMNGqDZEutiu1oLehhAd1j",
  "key20": "4AwXtK8G3CcHKvLpiK2gcTkxfYn36NvegiFgY3RNqBAW6pmVQS9LzkX1rXXiHp4p2rL2XSXHdoMNGjdUnGkUuRx1",
  "key21": "2tzwotWQYvTux3LBPT41kTYgL3HEtcgz253sGjM4fFMuHFDZXgVRr8iYgi3Sjc43bRbS2vd7kLKhR5aNMZjBfENS",
  "key22": "4iJkzpmKEg9vbbGrqWPuhfF5zM47Sq7hzwHdXLettPYneKUEgxPoB2eVCjUfJcJqapEzuGdL6wt3ttki6kDrv1oc",
  "key23": "5yNjACzXFEUm6sZRovLppGJRUXciWw97vkv1sWeVD2vXyQqruGzci2DtKHoV25t9MRctPF7zge5DhQpRLj1wfAs8",
  "key24": "2WwKsgtUj9weYxDrkeARNhfnzAVUZz1awL2p88acnwQdCRW1HjD9wdhP2SeFvDJ84yYbx4pmSYQMECXLawCbYBkP",
  "key25": "4NQSzyU4RWmX3JLP8dVjj5uWdvT5yH22DdfjEiJJTfzCiSjY9H1tyYRzMpVFBbosWQU2THmqPtATT4Kq2znk9VNq"
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
