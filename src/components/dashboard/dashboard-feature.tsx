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
    "5drZXcSk28ZFn3FSMNFENwxb6ANKZmMxwWPmrjyYfEoLj2G2PWF8ExPTGsmnvdLxppqoriiTnNJWdDfunnzVYjup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eq2Y2tySo94c2fMTdSoQJXVVW7qaWsZQjj66HAsoxTnJRj7LdD9hRBM2gvstfuq58vxd84hMb32TR6oAHN6Wbwt",
  "key1": "5iAdXbRqybuhXgLiysyi9jTifFoYh9Uvz6zQayruY6nzg9i7dc62gKDYd2JxyXawPRJrTbJZVwuZKwiM5mdTF3mF",
  "key2": "3taG9uFPh4XKEoA3W5qpZ11qEVczyeQCzjUNWQLDoAma82UytqhXiz52H4PhYvN3yQPa1iqgHTsr4WDp6DcpZ4qc",
  "key3": "3XKWT2Bn84aDGrvnyXxDw8UtRvyjJnwZQX3vNL61jq8mRJxZyYbfk5f9k3pXy29hUV33b8ndCPQmVp7jkhK8AgH9",
  "key4": "2mr5jMSBq9T1FxQShJVtpToDVFasWvrSACAQGgwnd1njKdFSxGCLKmpdaBSCcJJxmCL6cg8ciNqq6kVKruJ8pZaq",
  "key5": "4p4XDU6N7yaCy8GUycskbszAXJrEBPW3jyehWMMtEhgHaDFiV2upakvThBphUay8sowrBRpmvFkTgigumqnLFJjR",
  "key6": "ZeBkEN9VNtm61jW73CuPmgoYYEagAZNqmGSVZjqu6Y9waXfBMcD1ynfZExBCX7RFSEv7sqsdb1Rt41AcpzBhnTV",
  "key7": "4CsQS54Medb9NkcN1LJbcKPxiXp5eXTUpWXEhKNusZtQcKTJNb3TtPyCuU5gKieT3aBH1RizLNazQf1PuWFs5svA",
  "key8": "28CY7nC3YKAiyEGxxutc6KPDBrTu2D9B7Gkv7nr8wPprr5zLmfCDEXyzQoD74kysKV7yL19oryV2ppL256Tapyfu",
  "key9": "3Lt5yPEbrFsMdBsfwvg2SyCBbz4Eg8gLJNy1hfpC42Gnzg7gLAa4Gc44YTXqqTmzZxcigwytdumCQySmd6QfGW8t",
  "key10": "3RMnRStwU8vDGw1nz77GXA4uWXhM75idoB3NPTTe4e9gGaqKgAXiWS1yEM66HgSeoogrR3F63TJABxhD2Y6TQUjd",
  "key11": "53zaVxoWWNduFwys2oBTfPUx36TdA6ebJ6gpapyS87BQh5mDBZu3N2SdaX4ZHBQgjsUsF7Yw1P84Rih5VVfp1fTN",
  "key12": "2vWoEba1ZQdEvqSZHLJrDz42H3zNmueX18eiHxsG2wGNmYCYPF67iXRDhhcTV5W7DmaDiYXVz8mBXDpdFEoS7fRF",
  "key13": "3gLQL4uBa1j8ryhSZTLr9TyJJg2SaLgFhipBWgz4RnTGJgJbGdxF3WmNJXwH2oKRPZquZacyDq5uyaedDG78sE3F",
  "key14": "h9bri327ickyg9Dq72yHbkTCfAsaBJNdJTaMke8ZpNZz8Qp5M8fwHz1oRCUdM2f6ZiqS74o2JDkH8PRWojfM1iW",
  "key15": "5bx1XKqeciMyggQm2XSTGU7KM4z56L3TWcmavdLKXxipWFXNxTMWdTw3QDRTy4kNxCXt8VfYQfpmQpcaYxwKNWaX",
  "key16": "1Fy3M7WDCe5gsJdPCriVig2e6oNoMzqpphB63ZpdGa3wsoa9xmnu9LHzzsN9NFVS3f7sb84g2CxfTzB2QFdMjqV",
  "key17": "kMZ5vrjLycpYQUGfjXjmHJhSAAzFHggYJkKExpmZ8HH4nHzgfAaAsjeyG5MAfd26gxk8upsSpqFjGpDjGR1ioqt",
  "key18": "jCj6zFopejYVNB9ssNfkF9CZJpHGyGxPJPwNrN3zs3YuoVEB8p167vQqygmU6cMbQeGgdx8H6oubsbGsQCqTqS7",
  "key19": "y5tVzB8rPz9s6mDHfmCKqq7QEZeHVkQGqHEpCy77RHX8oWwuZqLWZbyZeZYPQpqVyBBoCTZadFQVyoATCuxoUoU",
  "key20": "4q8RS9gu7whEgLHjL1bh12v6NSfJLjMRDkAusp51cNHMj8rpV48pc5BQfqtCDrwZDKCjCbm3Q77Kc84PoRUA364G",
  "key21": "3Dc5Hyfu1DgWTLTFhamY8mnfYKe2cB9jCpoDcjDiN8wnQpweFfJVDmoWYRMV66mhDxxpfqLhYXhUBmdzKkTG6KPN",
  "key22": "24R5mnm1NpACd8HG4xLgserSpcSHH9WhZ1AHtQjvmJyWuWx9kCmQ47BeANCh6LQxwdrTPc7un4dZvkRSLHgs6dxo",
  "key23": "5F71Rtf2cZbcTbQmXeEfYQNUkKGnGuEhxosiGPqc3ZEYn7o8U2QoCAiVFfD2MBSwoLdxVpuFk5GPKXCua8GAgVyV",
  "key24": "S9p3FSpzwfC4541417Cyj97wXZSYJrHVBHwNnnSXfPJnbMoMCJZP252qudULQq1McxWD8qRTeyYif8V1P3c2z4i",
  "key25": "5YGPu6PUyZMGax2JweirBvWxAhntaJR7JsxJ6SNM1r9XfCYicUmVkHp1RStS9xeBVrFsGgT2FRx5Way3eH4n7nN2"
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
