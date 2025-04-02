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
    "3rq9JQ6qjaZVvRSjmqE8BJK48TezYTBWkSMcsAL3dnAUh7gBhMWEBPm5fzou7UMntkxT7ToJ7Se63kMeLM5SkqTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCk71awtahc9XT1cUWbPn59P5rv2xWPX9Mw9uA9RqZ8W7gAUrkuQvoZHjeiAkSLcsm6Wn8FszGWUepKHm8ssiZm",
  "key1": "2TjYnBGLQmtPEW875xhn5BfxHefKNuXyiqa5WdGSjrrG2Lh9asxconhfTJDT7fXyAhY5Pnf9GEnCExHc4Cqd6STG",
  "key2": "36HfCLWahnWw4ZzsFaEC3bmyamtxxpHLhCSBU7bBPzNfcbPHrFG1dy9i7u7KkVPrbgDWPJNgMBk5rq92NUf74ZhP",
  "key3": "5H4mN785fZYHVcf54u3XM7k8W4azTovaUtJ97ky7J9bXiv1vo2FNATzcv1AXT2WCjzNV23QMQ6SHd3LhWuH3Smkr",
  "key4": "5pBDbrDJBAEV74EWxXKgbaaq5p4As89DtWQbQyWtduFzKtubgLQfQtywoR6ZESKTsiLuKwS4FM4xS93h3V4LSEe3",
  "key5": "4p2G2hkeSqsmyBAPT33qGEFtvKbQhgbSMH5d1TSmgcLwemKNDyycYmVe53KVzGTE2baH2F2YG1NTPcpoAABp2DT7",
  "key6": "2VTtwHg1kwgXqRCctk2gNRithrwrfAFYrKu8NrvYXTmXYMGQtBeDDbV8TVZQ31dhaXMA4YX1HWWne8kjEdw7NFu3",
  "key7": "3VNU25fEFzhtn5xQjLB3pWpzcA2z1UWruqHZ5bFS3ndbwEaZwUExHCh7Du7Au1PJBtEUiuANbL8GipE6xtZkx3qC",
  "key8": "oRtyEjiD9UQFj8T2SqcGtEciKutAeXE2dVdLrZFgxqATJbotnhCYSeY4vppGvYJPNZRkeckf9mskLq2ZCSoqomi",
  "key9": "AoWLysKc6Ze3pjcyEwMJge4rV9kVhJv1qc8Z9dsPWz67AH4vgBFrfSzTGJ5jJN4ig97XYhF6Rm9NwacPWhpxgKA",
  "key10": "3ctBEymSRBwCmLXLLe2CTUEMJSLQqKiyLdseDFhHDKQr6E4bqLPkpkxNjm568BdNej3VHuZFZ6JRbhYsMgvnCdXL",
  "key11": "3fiiYVGr9TshA5gXz4BPm7BExK4zY8vvVbuhEv4A6JLTVioSX8jWsE9zYCegZcn9RngJFemQhZwoLCW778WEpg2S",
  "key12": "4ibSbXHz7CpDegTyNDzS3CSCF25ARHDKCWXY3BNPzy1HgmbgDxwZvob4npfvUooj57t8RogmTFihMQTPERMEwNSK",
  "key13": "nZxnd3gtowGJnT7WDNzYbsZbvyupvDijLe7ezv7HM5a59daDqE9eoZKxoWjnMJQyW32FMhqKoYF74pAyqrUQdeG",
  "key14": "2KHuqRtAptxLD7TMSAJLy7VBtZzqCgm1Lwn6Bwc38PBtR8pPPF1zaHdJNMTR5Bg3ziuX6Hg9saiVDtuBjbSs8TS5",
  "key15": "4VDc9DzzqEcLrxGgkGDVbfeB5ibFjGnHEwRA1GBHKGss4assNoYKxrVHPmKoyGpQszg8SGBgoy7pWWKSf38ty5uS",
  "key16": "2DbBHzT9cgXN9SVRqb1CXzqN4USjKGaPNq7tEvPWx3YnhesJDZKxbeYjRUCkjV23BrHuY8wTCpx4pminY73SshWz",
  "key17": "378LYw78iVsH11nf9ek8JK4UjueGxnHa6qYXUcDMjT4keboDZdn3Fhr6GAvWdfVDeAB91ypJAevMTJN9AYTMZx5",
  "key18": "u9yJiXJHo3wvAvPgczZrCWuQjL8Gdy7XZCrXm4bx6t7fJzh2M5XNHTkDdpXc7bWK9sWeD8zP6aagx8oAy3hsY8U",
  "key19": "5RnkMvBYmWpYvgAzuBXqkZxkzZz4K8utKmqD4ktaEoF57z7fFuQyWFyPgx1avmfNSdWtP5eF84MF8YaFFPEkHbgL",
  "key20": "2XV6oWq8UzmiT4BfZBWv26cmTiAvRGkZM7tsmvGGG3nfYUoBk19RKYSMaz66CGVuwk7ro5jcGwtdH89gse4tDsPL",
  "key21": "4gYEj3YoQA5Y6xzJum5TmELZD3aYUEsq2cY82ofxUEMbrUxhjkZFDyyXz2xjoUcDHNqCN2Yuir2z6v4fbRDaHDqo",
  "key22": "4aUg7UBim4dcbNyM1jre3xuhDzT6NHe7wGCT1dqN4kjZMQW9AUz7P7XMcKr4gHkBbq3c9YVi8MBxDCJCujHfqX1P",
  "key23": "4qCaBksw3Euphv4a9czn3GgvG4pkjmLJesPyH5wn6Zfv311rYKULHxFRn61ET673g8A64kDW2cJV7vLMy5x9252w",
  "key24": "gCAfygzJTLSXmDX7DcEQwd8XKVPqDL3E5bwWzMwe43Lk5Fz6mjc5sczub2cycffCkh1hbEZiZmZk4pYGKAouAfg",
  "key25": "2woFUEakgCrU55tKnxAkiAyLgQ1ny5wrbS23J54dRG5qvFo6GXqtz2ir71b52XfS7zgiGvYFpZP19T8qs5MbNDK4",
  "key26": "4BwFuq54dBkhLkZxEFWxx8uNzmbZDKQ7TZkPPbWfzZkgCFWtyxeKFxDmiN7eWBRDh4CeVh1PXLkVsWkZzA3fzhEb",
  "key27": "61V1aiK8dNoira1fo41FPd1oPLAZtaMHDFcUQbuhDUi3ZbnUbXGfzicpcSj3XBHFpYjmraq5gnmdJADz5L1Xv8ZY",
  "key28": "467Cjj3fajMRDVTX2fSG4wPfvQN6SNmT5QQvy8RTR8TNVGKEgGbriQMYwRFAPcYsJTWcC7xM88GCkJHcDHep5k8c",
  "key29": "HYWzS3s5WxaTWnLfBV9b7rNYnt3FgupsLByh8dHkfVccT92SpmXQwkFronRCabKaa1VUk3jfxqUtFa9gqrkYFa7",
  "key30": "3hsWFrJPCwZExKMAgXEykKmYBZND3cRY1VwoknGJ3gVfKnmxcw2eR73taRxKaccUDDfnH5uV1t9821qmVkjXN2ge"
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
