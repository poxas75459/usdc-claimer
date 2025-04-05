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
    "37cQGCbC85MaBjdfQU1YuqEEScLAdnEEy8DXEcKuwWVvQ4gaWHMYHh2F9odB7mxiPHvGnH3dBdY7KE4RLDEo6NP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtPPcYLm7FNk1g3qBw5yaRjkcbJBsxPaNSzCYvMoZWRWq5ZLRQS6Hv4WVxcp9BT66Mdk2oReu6Qfj8hwv4XejFg",
  "key1": "2gRGxookRaaCSiD4uiEweotn4UNNqjb6Yi42Cr8AVLU6wiCHFhivcTQ9hjTwLuEHeg2KNnTuvfoCsh5rHyfZWg5U",
  "key2": "4nRB5VaobhZmKk1MJwVd3BJE5JP575bNjLrswvQQQU6eUn8V3RqTSTK6y9Nh1EnYZVZpd3Jsq4R9Jiv221ugURWk",
  "key3": "4aX3VMcdd8uDeLJMzpUNo6xVrqqhm8zJV67hbk456pqe3Nzv2XozErMbpUfMLh82dhQM9mSnGLN8e8q5EzYTrVhk",
  "key4": "3Mf2FGDhcDoadrqPnqdT9VgGabe2HLp3f5tSekDjsABpRWDRx3FX8h6U7kBdwKXTc4bnxX5HJGS8N9gzyJ7Z23eF",
  "key5": "4GkpDAfkXGzBggYYgq6q5eqjijDFQb4vQgxMJZ59L6ogXAvqczKTaUcASfuCaMpht3A54tHkJjSs8rQqigDnY5Xf",
  "key6": "2omyAFZkP7vwqvRVjPeyEFUcpmcDLMZm2VCKJ1KbnZJM3DAPnE2rTWjkXBVRVSQoUBTtMXrC13B7wi8eymYWWwPn",
  "key7": "3Zs6tQ2VEgWE94SXLRKfSWCNMUfyTpDZrEh9m7qeLSP4aDn6pMajgrrwhiHDe5gvT6f9vXEaff5kZqPeeXD9oBuW",
  "key8": "3FiMwzFC9qSbyY7qpwLycxw4tfX9qpuf4rJt4RNs2j5MtpuSPDNaQcvV9e53d38cwSou7n3aRv2W1emW2ruif9rK",
  "key9": "jQWrQiKoc9ekLdQPdebG3sQf1NWn75UyUeLCXDSf4sjNazrRMCz5XyH47waTdVmAk4TQzJtUWBY6GRx9KLrsjFr",
  "key10": "3P4zFs7A2NiHvCqEeXx7UddP8A5kvViDNaa7qWV2Z2ZHdzTtSm8e8RTiyPh9RYrn5uo6xjc7ACAcJEgZ8tTXwXE6",
  "key11": "3HXpkN49eh74d5rrwUtrZk8yPtYYFKieD3ZLYwCTWD4uwN4Uz18m4ujYnyb7ePrbi4b6phnqvNL8Qp11WSm2YFLu",
  "key12": "3Tyrc25rVTiYYmFxHctmgfQEUtpXeL6FUQDqEVnx9zRKwsRSiZNoipkPuedLkmUuBYJMutncdAH1W2o9UUsoCoCt",
  "key13": "4WHWzHL1c3PHgNqt5n4r2WbfxSEYzak1o6mbG4hd1CRDsrayoNFaLfVYNGbNr9qsy3ySadNp7QgBFaujXY29mdqo",
  "key14": "4NgjtrvhPU3AwzRxFP5CYwb5a9XWdDsJaZabfVTKcCezqnDpbTJpmtZH6zvsV3Tdizrm7qbfWuTpqgKc7affEsUH",
  "key15": "3sATK85qk7HQa6aRKzGwbtbguamW99C82btmKt6uWGCnFkqX8i2tScMiqYEP2JkTboeDuKwc3NF48usy7eDnVwfX",
  "key16": "4CrdjZdVF8JXGSDACCQ6o3bH2gwXjU5Sv6S8Z24PHcqR6U2oDTNgAEfG1yP1ptTveBi89cjbu7tqaKYwNj8PhhRP",
  "key17": "2NR8vj2wVMvCGRX2wPi3ZZ7BHGCkKUAXfPB5JMFiA2RAkqpDq97jrFDYPkJz34WDYN2ndms9xSnzJ7RZbRmDjca6",
  "key18": "2iwhJcFqn2MLuLX35ANQAhfz7FGbxPqNkfm68Ss5WEbzRaqRfHQ4fGyJ2k7hDmY8L3TXqvKFpDnZeSMRHBswvamk",
  "key19": "2xeUD36YAHJ2VDwV99SYQpgT8DxdDvsf8xeskKeprfCUPPfdJ34vjsTQ9X6P9Mv1D2VDfqyw87FEGWmWDwiYkYyF",
  "key20": "65qS5563U7zyVbF5cV4MxFZnv6MufNPT69Y5RcM5T6hvTqKQhoE2whLumVXahQw1vLZmq1BFN2cLwG7fDCr5Crgb",
  "key21": "3NbqNnYVMsksnvGNCWKxgc9JTprAj2GzmcmEGkQj981jXuQjSyUfsCBL55UtLRdwhahANyCfkFy8vAjTSwuU4yqZ",
  "key22": "3enrVyQyWZwsNYTC2vudhEsHKhftPQxwDef5b2J5SGF826G4a3uETGkMSVB6ZGiBDc8akNayxvZtTvDYFCPuurSU",
  "key23": "4WK5KKKjgqUqTmzjVG8tKoc3iXZTvnQUthHasSbuy1M5khrSrGqa43wY6JS3uR3m6y8EC8nF8GjMGQ6ordkpFgY8",
  "key24": "3EyLiuF5MeRbo8VbGiHEAXvHuczt8Be9UAL4eBc37PdkgaTWRvxUUWUn8QUR1AQyjj5ZbMBoDdnuqX2vFcCFSB8t",
  "key25": "2q5x45UZEN1c2M9JaPAy9cq6i8XyYWp7WJDfPP4aFThvsTqZCF2crB6WH7pKtqigmCwh1i17g3n4E7Dxn98uC6oE",
  "key26": "2cmxkMMwm5z2NZDVFEzZj8VyqH95oGhdXrYJRzTCZKJUzV7d5t9vUr2a4u6oEX1vELASki22p3NH24vFZGmXfojx",
  "key27": "2t5ccjjkmMWPz7uUP3d5srgZzN8YRpAVpTA6iVtXbdCYuYRwsH9BxgQrMuchiHpMWXDcWtFuRXon3o1RU8gx29z7",
  "key28": "5mJ2kjiephwwtz2t3BN1ZuTjLL5kPAvg14uhj6hDXHEvYKhBE7xRZ86NhwgxD95EFnSwSjQ3tTpuKraZ9DFkty6F",
  "key29": "56VZsB6tZVJunN2US96DBVjXbLSUy5w5XNJGWyZN48yxbKtXQDmbkFoTgdULc6p2DHxeofBuefzDBxmrsr14kfSJ",
  "key30": "3acHYhkxo3ca7EpvrF1efBzXQkst9zUQUFBz3B2GSyc1J7Hzh5FNB1cm4WwZCmiTxExrDiv2GfUsvux8XMpxYVrn",
  "key31": "3C46TcWeFZMJ9ZNZ2U7eqsGQf8WU5zmzy8feHKkrgGKpGgjRBAi2cuCnqgEvQEVSvrEwerubJ4FfJEVhPDr3uLx8",
  "key32": "5ff5pTZqY29P92HbmaSRC9SC8HPkvp87LTqwNnHbPuy9JD6RXrbR7npsuGKtYskNz3Ztezf2fddNkkCzeH9bbiRf",
  "key33": "4Zo99hMgxbqgg3ajAbLGLqQkiwP6HhgE3TQsV1r4QwTYWWJG1YqdHy5P3wvkyMP55eGfWjpsUw753FLUZbYWBKq3",
  "key34": "5qYvGFDSZHmhqv5j1YYehe4iez2y3Vm5FsTYLbEogdz8CAjSBnDPeY52kFweJaKUxe9HveepJsDRBbMTuacpVSSv",
  "key35": "3bPnULYmn6Vpf1jxSn4wqkcDujs9kLbKim6gLv2ekCx7RrMXFseTkjJQH4Sv7rHdqziQJtuS9zjfu9SZU9xTH5Vx",
  "key36": "66WkTGJqp2yoazu9E9hv6iB4Ef5hSk4rXosD9ngDmoYysYjHFjeLh444r67j6bGtL8ZFLBeau1KSg8ZKvhH24j5v",
  "key37": "3Rn8jKz5UmD9Ust1MES9TqG15AtRdqPHHKVvE7wij4iQYmi26k2qZY6dVnERcn2tiEsJLJc2rPkoUYgD1hrvmMK2"
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
