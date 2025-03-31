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
    "2UNEp3dkwpb3aYRpaSqj1Jsbe82roQtUSut1zy9ec2iA1cb86pmYcpJUryHQ2FuPAcF84dxwEGBv8C7YP7dm6m33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yaAaAFzzRVWwnwuFCuQGESkVojUYtX6yBW7s72UuqMRX3wGnHHW5VhBaNqbiSiQ6DSk4gQ68ivQkkkutZwb73Kq",
  "key1": "3v7UA8JBhMuDsQzn3zjbcVZApXrAz7WhaVRrPcxHu7GRHsX7GweVMd4Xzn2DAdTpq9Ce89ni4hhRUPynXHdnuPbD",
  "key2": "2GuK8cV1ppp6FhpKq43oUXQsVgLScobrnqzDv4N356KBAJkBds3a4WXtiSMMuHAf85ThzZsxpggkE46xMidMPPfY",
  "key3": "3Rsobpgw2c5cctJuPvZbse7mD3Fkt1YRgMcKLCrLUaRUcNzjDLy58b8neuK4reTunewXEGPjVDumY6vTT7izALJq",
  "key4": "2PMWjBFfD43RUU8iM86ozhPKBZ8yGPo2ifbQZ2eJWEas8Lt1B7WXsSk1nCShXj9SSYQDHzZ9xahtyQJNahdyMhuL",
  "key5": "3BwHAWHZjzs4rzXFjUYby3MSYmMzyzoPu2c16cCCteAx7q9juJnzaJ6LGXxkGQgfEG4kX2pN1cKqmFitvyoZUxgG",
  "key6": "2DhPQUuvjYWJGB1zcgzLh9irS1crYQBzvCXWbRF8cye1t55AhXBkk2BPPnQY762Behq75xPXijLhtTqDh6zdGzjS",
  "key7": "3XmDQtUeszFZ7QHQADaMDSdeF3869wrxu5XVmBG9tqNvx8XuZNySLVVk4mfS2bS5PsfGXet4D96a7dHzUy7kagfc",
  "key8": "5WqaoSL6F3JpJnMtiLxHsik9HUsDiVqmn6TfGJMP9gczCW8NRxUDnnN9p3SAs6JDLUMDQsGjYmfgVaEkT41Pcx3c",
  "key9": "5XYCJJsvP3SEg8RDbdodXGDpCJiu1AwgKkZEdTNyJHa5Bnww2nEA6XdaDYPmXWmXBDChgCmqZZs3e3E1A9NhZBPD",
  "key10": "4oLKGhMSL6nykGYnSX1KczfxSNnFDDNGYDartzybk5mQ5NUsrKX1Tz177bo1ThNbTmu3Mj3x3UdYbNFJFF576HnN",
  "key11": "4oRc3cieYcYMTWdzGJ1bd7UurXavaj4qGGKsTKzAAgZA6koJPNDgEJaGGN7xbgytp8qVWtM3bcvM1gNYGDtAEqfj",
  "key12": "4fJB7Y9nXbdq3PSR2PUeuaUjLzEVEKtYW8pGsk1zugdKjPttywbQpVw63UWNtiR76VFm8qWKPmoeFSd7BMGf8AoE",
  "key13": "49Psens6UPw7opL37PzMtyWYozZdW3Y9d7r7PwAVekL1pDnjyeuxWw64ctVkFad4JdCuxrUtHtbF3QTaoy79PfrT",
  "key14": "25VfBwCb1uGTvevovdxKxfSPJxWMBafA4CLp1v2ATikijo4UDBM5Maeuisi18JeQ46nmdR946NFCGbqk7Kwincq6",
  "key15": "8XBN2c2a3X2B611NeXE3teZTQ5UXrwbzsniNYSm3wxygx4g7x3yV3Ug1vHx13VKWnqvPRsUZzefJ7BMcMsVXSzN",
  "key16": "RtKkpqtakoMneuCxe58HDG3MDtPufmF46KY4iz8gL3qq7WgDgRio8sVdAhR9Yj5e5tMLFtFHg17NPrwMuuYkw6Q",
  "key17": "gw3wJSxQc2eMLX1Xj3UvWD9hKEUKza8AbXvLfMVN85xbxvZdNu6kpeJ5qDU6msXgcxtQLWdG9oYV3PvzXDxee7x",
  "key18": "4FvwGARyckDhTe6dF8UKa2FzbTej1dcQgt2ssHid295e1NTjoGraPiruwf31GAVe6Wcy3hh77u7uM52uuFnXJVBp",
  "key19": "5fD5h9jck9Hp3EiWJZECvn8Q6biQFX42mD8i2q8NdY3Vg85zTXhHCvyRrMiRY5yu74vjYe4nXMHbtH6TcHCi2bUv",
  "key20": "3E6BrrhufqRqq2HzM8i9umQ8oRMypXSq2NQ9D4ksrczrcJdwijjyyQw6hYa5XtBfGVZgVt29KwgxRyugaK9qwajk",
  "key21": "3TnKbQLV4GsKDDiuHhvT68kuSx1PP3AaKQn7V3czucDxi53RRShuN49sX7RiXvHHMX4jK1Q7RWqb3v1VibQrBV9U",
  "key22": "3eXkyR58keLetYpNa6WPVNfNV4owG8PrXkE5G9eZBBHCvaGHAcfR36Fy5ppJ9PT3doUWZ6qccTrsiDEe3qUQXbA1",
  "key23": "27uWb6nAY5MHS9bqLCbaiDrRTmDVHWEohakfD7xgaJtHKC8DsDuNF74LjCeZXmVrqfry4BN6gaFGAKNPc3MGnxxQ",
  "key24": "2HCJ5HYrr7KPV7pR2sp2wS1JQQjHDW6jiAfX5imGzuGiUpvJMdzhaAzzBNRoqbYFYpzVXtP7bjDPdmPgEEwtwsc",
  "key25": "32PS8cSE46tFZTKRQ52LYon9GqXvzLWTpngXxrWuhwaVtnoVu3Zu54Nax2S95kxSbVuCrxK8KrospxoUnvF4Hvej",
  "key26": "3phoLeeAKsW3sN8rocyhU7xyFK3mFPCwDPNQ2FtniNLM2buKt91HGycVdWn4oBSLFoNtaJ5S8eHJ9QhzyZWTaPXU",
  "key27": "3QrT2m1p8vQ2BBpqfcw4t7tyNbuvHbWP8ATiyA57VdZH1esj9FxNeXNtrmZJXfqPby5Z3odxHCingV6jj4CQBBR3",
  "key28": "5B6HYQFc3EsZNmUh1tgk1YgfE6hnS69yrrDXufaUuGMAZNedj7xUKwZQdjCsV4mJbn766vxBcfZUJXFaj1TfnnHb",
  "key29": "5nEKqf7fL9PjGzCZEoUv5frv93LT6LEhafSCoc3A2XTR7qepvgZRX1JTNo1wGwGLMFkySTvfwkvq9PWtYQsfxBHk",
  "key30": "4Jb3ZQKcTXPV6toLqg7L1ibrgPDgNzeQojNK264DQxqkbC3xWF2SZTdoJv647Uk6q5XSPZJpsXR4PdT2JwnQVJRJ",
  "key31": "3JVUEBYUNa2YLzRmjtXdnUyzqfdnTYjgkbAqZi2CqhrNm8SuJZMPtc9TBULmi5VbBzdYAMW4jYeeXown1uCCkVAY",
  "key32": "3yzSZ3Z1EHRYzbTfhpYSZMPpE3rwmGPSiBVVSNtTUhLqrks68Tx4zQ6bqs2CNsyPWaoifZkSZXeTy5GafMAs3BLx",
  "key33": "2aRh2UX8VvsWQejAEAeUpZs64vEHoZ34RJgifWSxM4BvL11giNhPkXrYgvgEFUUeUszA9GaRBtQYhh1vp6DBN2mA",
  "key34": "39Gk3TxHMigu7FbK1eRXBxe6Uzs96Ca8WcF3z1C28zrgnaRyh59jdiLpaYDNaEYVeaNNWip7FJ7SzsM69FPKSWjj",
  "key35": "28jQtcdW7fvgwhgsx4w9SFnnaYkPiq9LMSDGtXT2c8MEK3XJnHjN213VT7Mujj98TWAZbDumgYUjCerm2AFhdZZn",
  "key36": "5fnVzUwuyZ12SyhoydfmjbTTZ91zwVAeKkqrXUMSiycvfRzDzHSt62uy8wk5CSqAng8s2E5sLuJaopSdVqNdstc4",
  "key37": "2bHRXoC1pQrKjSpxZuxASiqvpFgJgPY8sxLRPrJa24K5KWmPoZf7wV2ipqFL6q44tEodkwTgD7B171aDBzUx6jMM",
  "key38": "2dcDiXUmiyJgjABRujBdQ5GYbN3w3mTQXa2Xg5mFaQrYQ5qhhRGNrknLz2T9M7WYc4WbG3Gam3MybfLf5uXgPw29",
  "key39": "3imNstEeTtAwT8TCXsUkjDwU5Qh4UNLvwntPXaAWJn5DrRNDaVnBxoquGbx9f7k2XgQf4ivsKhheDHoXKpFk3QoR",
  "key40": "2NdJPNJMTXHFzYPTj9XtUKJnWRusgNKmWPaQdiTCKRfGrBBGfmuHeQzDu4ShnqbEUvUNUhwEADJa1UE5ksCR2dsU"
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
