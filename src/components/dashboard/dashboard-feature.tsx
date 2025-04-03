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
    "2a68dMN1LKAZH8yzTe3E1XuvxEr55b4aTjEGfsxrsaPegicLEhWbzAXoAuStwspX594iPFkgcQEx7TNac4eYfGUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfWTYe2aWnGSwJqGtibCGv24Q2ef81zJ4vEE5mxkvgP1YBoSyWsM4sXkgnpSGTUr6Nwj31iRUY9RmH4Y5v6EpbE",
  "key1": "3k7urLxGpJfNXKKPNx75PQLwAf6qD17oHghqFm5sEtg6JfSzMUqzB16LpVGZ8sVLxY7s8E59Qvfsx3jYH2ggo48E",
  "key2": "n4B2YhNYiKNzmPWH2hPxHxovXSPmS7na2kP4VsDSEz2a6A2SYnnJiQ4rz7uwqUMR4Dp2C6ZJkdm2BPL6RvK96CA",
  "key3": "42T9qAvFUqmhdYdjgCQoTKSq7AR6DQGS6fW9MJmQeXDvTdxUz5GydMfjCFvCW5uph4nUFYqBFfsDrREJ4Tp16Vk8",
  "key4": "56F7bcp5MCF5Z91CQwSiwzNMpSckdqeBj3xD1nMjkSQC1zRwfEpT1fFZYjwRDjoDLKSQW6oDKJCqqDkeh3kvh8jo",
  "key5": "4msPUZJZtHqda8f9kL8BkbfJxusaAFXKnTtZHPhtGikUq1zLatatnJQg6c5c2oEbyJ2eHgvg5NvWKz9YbqagCDQF",
  "key6": "2qJuHTPGEdyjSiLrikdanmAiNAB2dWtYfNY9SgEVP6Caf2J3DjcQwqp8zXYWDu7UpKiRfQuz6VVzTQXoB9UM5y1h",
  "key7": "2wFvBPDbWyuC9qCKVNmvrFU2rBQeGjU5eKoufXtFY6YqXcXQqqyLrqdagdUSvrrWqAxKik3fawAweAe3Fbhnkr7g",
  "key8": "4mbVQ7hR8y5dHxUZ2dVw4b976Dj7rU8vpYd2YYVLjEjChJcA5rp1XRTdgNavV2nRStarjhpHqjPZPMePwLN3aQqZ",
  "key9": "5nRvzQAM5rTvsPKqNBW8xpyGDqQox8qM45K4btGJ6cJ6vXSkedL7dskycorvq1yqdJzdAS9dM4tKP8ecaGpvXsiu",
  "key10": "3dBym7k2hyfBcMWCK5RreKuAWca7P2hrKRuQDd7meLbDt2CwWbCDNDMBdn3hZtwnnwsHCDJHkDEvNcAYFDJNLKYc",
  "key11": "21HqgBeMt7Sw4HwJWmp5NGKkk4sNBDkxZXNL3kLQFCPVUseBbt5kG4YW2VF4u1z6XKCLXu4AkQmUbyPgMhCtRLGT",
  "key12": "PqSNV3TsPKF9Kxt4sUKAHKfYHim2yxdh1sUU1Pd12y4BENMF2UwMhpsxEUVUC3b2bmpXyZxouPG3EKNTQygw4v1",
  "key13": "4nupsV92iA7ppHmhKWJwnAjzkEtgq3aC9Nrkc32RvtJK6P9oEJJAtfVScFaoRA9DxJpUX5bX89hdvcrVKJzWAPZR",
  "key14": "2Rfxwgk1NBjBKAfq2VZ2Nrwdg17yNcUADFtrvQD8Qvsvjmig8nbAPxwZ5Szwp5KjLwVJKTKv3dobunRr795cRqdm",
  "key15": "2hgAejBevsXbESFnh9255VLynEBi8e3oeQAW9oDgy47MmCBKe36vTCjf2HemaczTeiZtSdRqkrAgw33MKB3r2Lb6",
  "key16": "52t3qszQGreU5GB2u1xVMNSTY6qDXJ5TuxfcCYAG7x1PmhhkGuyS7QThA1ps1KEsA9Zr9QGq2LvjHUkS4z9bh76L",
  "key17": "2WPmPoxLd1KuqwjkxKknmXXYX74EDJBj2xCCywBGfivpKtkYFZsPLFe3M4Pi3nwTTufbDxHobyndoGZwH1PiH4Xi",
  "key18": "49m3DxwALJNTAdx7NkZDw5SKLWRtE1wgQrMu2JhYqCYHkTayMSBE6uuAMuCqB5bYc2QekYxNpUFSNXdhP5FJvaNA",
  "key19": "ZVD4eUJneFh8bVnw4AGVQd5QLX8wFaaY6WUaMe3tuGk28zFTYjWCoZEuxq4u6Q5maCs87h5L58WFTogE1f38t4X",
  "key20": "7DmvuG8m3ke2Gzoqb5CrwhQ71QyAxLAy3rEyUAwLC5ikjpotJvG6zEt4ws1gu8XW182h36tBgPjXnP8rZEZmS4K",
  "key21": "4CPP2gPHd8rfNq9m85Ko2Haie45uUXFfUddWwNTwdtPKwPLTi7SD691otr4xX6cUL8g53K3oqUovR3wzovU2bYZt",
  "key22": "3i62YMdYn3WRYgGqYtQnmVZwA7HbVcgkP7PBuJMSx4H1LH98rG7EuthPLiL1UdJPXk3kwFevfaTo3FGqsjA4jctY",
  "key23": "2ZN2k1isS2Yzied9W25ovKCEiGsdM1Jf9TK22u78dKjayoowixCQmwwRsxBse2tYW2XcuvriN8W6qCpfYCUe7GYy",
  "key24": "3sNTkSF8QgHQhUrYsHMqE1YzjFBhJKrWKzzJgpAVKUQgJWv1PTgS8Rx3RfKhYj8PKuSSgCa26yXQgBJXMjPGUygU",
  "key25": "xpzNsEgQm6bb6nSJwayKxNR4jkhaUrxwArZ4dGpiMv1xxdSkSry1J35UtoEN1ec56cXtb2oLFT5Y6KosquRBenX",
  "key26": "5ZP81BKHUBQ1Lbt7z8vZin4yUypaqS5WdXMbejX2Z3FibJ3TVu6ooGQovYk6dKDcy2HNzs4KXGW9179Tjke6ddpj",
  "key27": "4NYkWTua6SZJDytN1abUCZKPbedqScZtUjYLQv3My3T6wsdkejJAKyjcgn1pGgpy49ixQ8omdexPgjaAYpSw2VV2",
  "key28": "59JftMP5XCZa5getJGAbfc3zw5UxX1A3EAgHqHpk49ddAZM4c9dibTadoiyM7JkdpSyHfQUgZrrznybhyekJaasr",
  "key29": "1Y6xjFZLuJgc7x7EonLzwnJANi2u35B4hFAP1WsFNMpKJdeamRgZiU3jS9ai6aNqs7dpJaryjJQPysmeKEoYDYi",
  "key30": "44LvBWX9bQByhmZooHiKxPNx5jWUFrXmVT8sFzuQtJnDetYwmwhC8rDXfqGqfX3dYpnjyL8nZhSwnuovsPTmZDDd",
  "key31": "5Hh76yjPwrdxx1qGXTny2PsHxDeg8bE54xwrLBHzrnghZvUxGtFPLPzTVSqv5dEgPonTvYZ1hJbkoMPbyQUkUbvN",
  "key32": "24vGsHaRN1psyb8tXEyTATM76yq4KXLYJqQkweqpWAueJQRspyYNLwbeaknV6Nx8BtESfqKewPLoTbHrX5gZ1QZ4",
  "key33": "3MLMnMAsrTbe7sDuqX7AP5pDDC81efiZHaSNDNh6CPxpRUiu8aWgYo2b4tJDgt1re555cMxkV4rA6fQth2CHCDPH",
  "key34": "YNU12RkQzuwDV1T4WMKsCVaKhkSLNYaktJmeSXfDb5hni5Va5kJAmqjjwRM3Nvr3vdzbFNMrBq4gEe2j4oKTTaR",
  "key35": "41yGsVkiH97UDL3XhPcARKkJqyrJfKAbvbGYrRU22PESHYtDbVgXBUnoc9eRvEMcATamWenYFx5jpaTPwuxSdMDw",
  "key36": "67ctmTCNEJ4LB5g8yoacVhxbc9e2aQty26Uv96goLX83Zh6rUfbPpHs15MS3rsiawyrmsCA6YDjCaM9CttJ8rRbL",
  "key37": "tKd4bdUBH38UVNfxWGGqM76Azi2GcYD6NsciyVYmTodrijGxXsqV1KVapdeHeQcUqk3mkX3NZtz7iiMSyJVrzAt"
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
