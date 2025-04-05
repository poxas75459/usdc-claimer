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
    "24EGH8gtQq9ZfejPvDu1MAuBfdJyo7S7izkLJmaNcyMbT482PN4zxXGGDmu9Av3MhVFE4XtPYzpmeDh51LCWdoJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuLaNSEaBpGexbMYCqCqJ6PJTgAG446pK5hB7vfS6KDDjwcr3YfAX6GMY1rJjb2Kqtx235UKbDGM4ensDgaRG3A",
  "key1": "1XgjJ3Mb4rks1zDDwCVYeQ7bTDrp84chUtEfL566JiuVQfrT4noHaeWaZ9sa1B9Tvim1mUq8brQ7QE1c7JkuTyT",
  "key2": "2Wj6zxcerqU6VdEjiXiZbtrTtH4i9dVoAV4cCPuCBZB4Y4ow7b65y5McWfCJ9EDfZmGn1P4SW7vksikm6Zw4KNZ5",
  "key3": "5KmNAYsckqKjo4ctuNXC5waKUVs2XSaRCNoMTjagccnV1qeaQ5jxA2b4aGwv93W5NqjCKtGunaXGrRS79P2HRsMi",
  "key4": "3Ji61kDaC9KDPjLwJBEKzdDoJV5nDuA91KEag2rBviJB6EM1PLaLnzX7LQ8EKCpbxyAbmCYVPdM3JkTcVZky4FtJ",
  "key5": "3Yoo76HPUiVwrCP4TxUSoL8UTiTQh7sTmDU5LJwU5f4pdVKUQrWXxC8oWHad3M6XEwbQ6BBSNCYo3HxGS6DmZUfJ",
  "key6": "4wVEMnbVKAG1BGcyp693MwXK1x1sGWJX919RX8amCHPjg8vNDqfKaSK2V9AzGTkEDb6VV4MHdoyBytadoanjutJw",
  "key7": "oqWmsx3t9dc6RWDDEXvEizBaEFMfmZ6EgrQegQxqew3EDkMnMBXZDptvqM8njRSgdKYvNucbZ69VK9po5NVmv9t",
  "key8": "5bAdkTjY7Ht94dqYN3NSmXdTER6wax2WGrL9BENKQrZzPrqcsbn2Ee1cChYcgwMgCyh28ugweuELSaMkhsn4s5Pn",
  "key9": "4SCAEKe9rwkN2qA44fp7PvYxo6cwpGQe6U8RWA7nkkcqJ8pCK3jBBjEiJZWqKRc61spgwVd5GcB4N9RdpzoiG8ts",
  "key10": "2cQCqnJUP1kscRoXSBp6Q6HrtQ8DzPJrLpPY8AFG7XwsFTtnAZbE8p7kzzyHFvjKZBxUYY7DBhMPKt13KoDyDmLy",
  "key11": "2Ji4TKSbk8vYKQtBrpV6op4zRfYSdoByGK2YK82ad1xTHpwSNi51TpF69tNbuR7vepAGwW5JBJBouydPAyP5rnjE",
  "key12": "2bCS4SYb4V5KT3tZZovEPvLvkto85FwYBHA5MwVPUFkQ7gu3fDZTBDLqZWBPA4QmvMNDMtqfVo2eXJEiBbEFqaTi",
  "key13": "4csZjsqP519trY3nWswHjpf8ZzUWBtnKyp5MP49X1PgmTYdNWmW34mqnyXZ3QPvGKbonAyQPAaB83VQVzfdcSGgw",
  "key14": "63EUL99QhVDz1pn5h6NpspVPNDrFCDe8nptsPKPX4CDnCpRb7vC9taHnuifixWu33aP7PudkF14So2nnhB1Xhuq",
  "key15": "4q3sQV1tdJyyRcAaGRcPGb1VFiagNyYYEui9hWGfcPcNaViJQdgqvp3JN9rTBKmEpSnF8gGvj2WPc13c3FCPRh94",
  "key16": "4Qaoh8sXn9poq1Enz5vunJarEsNDho981YfspZTKSgUG9BZhwo5wAnCNzZVYBi2zMjBtafyvzP9EQh5p7Tgz6tpY",
  "key17": "32xykBKGYwcTWX8axL6wJ5sGQouFAViKDmQxjxTqzFpGuHsUdxvVdmaxm2JCr4zr5mpfW7XJccE7Mp9vcbBwv4Ka",
  "key18": "4pVRog6F4c9VKUrxUySnUsVurU7xYPFvUikdZK8swAH6F8nAgj4qErxFGNEEpHRxVEDEhaAxmue7CnJqhHxxDPFy",
  "key19": "2xE3TFPDafKrv3MkRmZoCMLfgtxrsC5GNPyU4gDVetjQKcXr2vWeud3BGZ7FViLZkHDTxTvmA39D99jH48WnzxnQ",
  "key20": "3JNFSAxwmo1tJpZWVYR9kBJiUDrbiEVmESsRKzdhaogNWZcGjL1ne3jQYQhaV1dXB7GewbS77eu7UN7uAe1MGCF4",
  "key21": "39KrFcyXQw2PnxKNwoC2Nd2BnkkmXAcMWX8R39f7Q3d8AN7kqsa7ZRJ61Hb2BNFv9MX93vA7wG3CahW3bVex4kWe",
  "key22": "3ZZ51KgxReXeFL5MLxMMaAe8KxMdjdZqtZMwrRDQdCxDm1VaCUN3ya27igNbEuoYWKhZ7Ps7vErnWkJLAAYeNewb",
  "key23": "4AvDTh3WvuyVt7s8TgUKySJvCERWVBDQHdUYA6xpyWTBGYx5CzaAo2prdeyGCGXJnSn45LyWbLfkuuZSTr3JqGAh",
  "key24": "256zyP7sK1tcqT4xBHho1J5gHxbmW8CwouNdVDaD9bL2EPwEFh9u4re7iDXcTLFGtwj7AvG3U32CDBNtQRuxgxEr",
  "key25": "5nYANgmM7hHu5gfADDV1wcPJ6MAeVbdb9zqKTSa7k8h8ZkPz36nfTzwNgcVp15mcsc1vLDLGLLmW2s4AFNMMKjPR"
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
