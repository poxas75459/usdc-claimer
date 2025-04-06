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
    "MAxBcqixzLnZpnaqbawfGtsfnzcHPxD6im9BuuJsqxQTX1U7nxFJ8rsW6jo1iEAi1LH5rBrAu5xawxgmDEZkDDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVJDS4vrg2F1XH3W7zseHwQ7BbT6MQJ6ZGjWt2mDGpCo31bBs1M5Vg2REFaEWWniseN8449RzCjcM11xT5b6qav",
  "key1": "2CvooFsv9oC4Eo8bpLRZjxxguynrDG3A7UkEWsainPAjJBvfBUPNAMn5CGiYPQxXMwVDGXsDWns3aSD8FTqCxXfG",
  "key2": "4WmEJqjESimHMuxNWuoCDD1eenTNvQ4iJAjSmXUx4atSnTYGusbMrhzYg3FHqprrxoeG7xxpCAPZgEJMWiqtcNG4",
  "key3": "2fPV4LuFCw6WFPuGcfH9CG2RsZMDkyaqbbTVeTJ76vrXi9oPwcxnhjq6ZpaZs6W8aNRxEX8wS3hfVtyGLG3koEM2",
  "key4": "mLqC1dNgtnSs68o4c3cjrATQdpUvM6sYYijhwwZB4noz878iVJGJeN4gJBxRe3bVN1G9TjWf2FsArCZ6ccFL55P",
  "key5": "2WddLzx9vc9eAA1zhjKtDbNHvxogcKLahPrsGWXHgRSUrT8Af5jgHGedqk1oncNFMcUZYH2cVMYHdQbRfxYmkhoG",
  "key6": "zDX7HNwn8KpwkrJRk6z4hGikxLEXXavP5PMGWn2k4XaCzTqiXPbaUx4RRp14PxGUuDJu8fzcaK4WYL1iDnBJRh5",
  "key7": "2QefLPH2QZS1Djpu5NExHL9LuzPsYKissyn3e6HoQDa2V2oYEJpjBVrkXfwEUQRyBu9z7Ng2gXS1krSkgCR8np3t",
  "key8": "WT1i77L3M8zmKHnXPprofrpw3zVwE2rEANu97RvZ4B5D8t3NEjGcQyegvM6D6hVDhGidE42eHQChWREtP7e5DUb",
  "key9": "63dRZdARUnCxTqaHYA51pPZWwJVh6ADhSvRT6ZW5zgw2qkFmG9yTvrjxBTQycwKEFs9oBSUfbUwfgvjBSSmPb3LS",
  "key10": "33S8Xiwhmo3KTFowFQ1HTtMtmXVVQtdJokK9QnKVrBi7awApbuqtbomi6V6ZdMnopNkRmvmLeZtZRv49FSXErG7Q",
  "key11": "5p4UQDyt8BNn6HzG3kATJNMphi33kKEVKe8cWc8Vg4LH2cqZpTMGwyb3Exjnd1mSDVGFEn5znyPRFK17yRJgoVNS",
  "key12": "4gaSDCuGa3yWskPyX7KabXgd2hcUZ8twtLYzWiAP9NvP6SSkxRGhfGANGkXnxXPxpkyRvGEt1jXMTH4KFmLJ2fmN",
  "key13": "PJNqreaQJYxJLv1cZXiifKHmhypTTWjtK9TRHcGjC2tFiHPU8pffaEyjTbD4uF6viv8U5ZjPfzad1GdGctnEcaG",
  "key14": "5kTU2kQn5yydv1vuN8UNA8pqXkY4RvktqLrHXKnTzwZpRsCdiwHDcC7Be2cFar1MEsG4mZ6QYqGFnVXUAoM1CuSn",
  "key15": "2ubeTe55QZTJugy1HReKm5qE9ZRBtXm3bLKBr5dXhfBPRLrwkh4RrRrLQ2PEEYsnd6vwWCZhX6cdCothZEGNrTzq",
  "key16": "2N1GotuT2sn3iUZ2U98yunWFyw8QiXE55QnrteYVhzB6J14CWAMkex2B1WVPBJK2v4F9CUDW9B7X8AcSG8474YZ6",
  "key17": "3wpEMoWmFGvGzaV3taGTbr81XHNANPSFonQ9TKgmPafXdKgZB8XgnrtpHGoNRkzRXLLLUzsQfr77V3dLPuSrVqat",
  "key18": "5PapshrMdmFJh7u14DAMfCvkNiJQo1XZTn5UyYWEqF4r3yJzLEgrHW16vSrw7FMoB6uqHJKbdiSv4QeMea6Hhenn",
  "key19": "29NPWnvpCwHoLEGJ5Zcz8C2UWnjpShWBnDNWfSCDXfeGZEh1MXekkCvsKH9SM5feofffpTeGTpN9fekjUEfyGSaQ",
  "key20": "4J1pWe3rmGRgLK63Y8DkxJEGUwi1sUfSZD17mCgpXdfVBmZr5AADReDiaJnhUFW76E8Vc6TqZxQGMmpfDggUcyL5",
  "key21": "33u7RqPcrEL2tbXozWzuCXzgmqqK4QfW7RwZSamaMTusmzb8uP1tD3XptRtEthcjEnDjPdYTJvgaaY4whuAaBKwy",
  "key22": "8EL6um8SN156jodPXMkNTrsvQmKbJ1Nf2BDiouGzA3CB1r1hiGCJHojXcST4P5jvEN3rzW5hupvjytgwKmuTZfg",
  "key23": "U92oSUWN9E5JTYPEb6zGTQanKpk8cb5FhJ3P2xMTtCmKkZAkufwwqaEfPq66FNRnJnr5NxbQQdbJpKzPkZ8aEHo",
  "key24": "64LNQNayr9F8Kj4sNyUNLPogQBtV3qaSvXzz2WfiPzPV2btTiuJ1VzJqKYK71rYbD1TTqLcWURCQj27rFCy5o6FL"
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
