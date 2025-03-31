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
    "TnXdwf34uJz2FedsuuYfZcr1GM1HUgHYW5H2fwZDPAkHYfFhQaBW12m729mNKyhFcfQ98mczViCknsBy5mgJY7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epRL2CuLGPfDjGkCF98q2n85wdtPYSBvjBbccKACZSu62Sc1AMy7FRZFLtYXo7JH9EGyT63TNeHx75hrpP7Z2dG",
  "key1": "2f2ZKUa9Hoc9qr5Nf4z236F7dRVybsaZAPhyKtbt1GbKmAE4xEh4v9QpmuC6TSpp43XG1YDHvsdDSadnzosV8dPT",
  "key2": "5dc7qUczSVr5FCmDrEPjmVJXQZVozSFvF4xrurEBNS9i5QS7ddhXAKxaYttPEDv4CgdJ1ovm8Z4QamPLvLpSy5Xf",
  "key3": "2JT43RVRyrwtDSLSQNUtt9SckHzdbsPG8pwTKJ8hDdPV28FoWRn62NYagQmbje7okngFqzMY8r5XnHSD5btVHy95",
  "key4": "5qp15RU9P59YbG5FRtg7dtjekVNEKyMsZB69W2ewSkHzzuM5ub7YSaiheAF9eS4VRBZpMzMZG7YavA8GDSd15Bbv",
  "key5": "31JG2bj86VRXSY3kGUGw81hEEpVpyJEHzTgwTZN8wVYqkb2xEto6kfDLqGFj6z2KAXmRiphLXa88g85gBbpNMJxZ",
  "key6": "2w4WuvNiBcHRtoYbA2ESYNzPBQ8fUtcVR2djtzN6hsMjFhziUmYK8g3RJ3Wf6FwQr3Q7LVUR9SKjSP2dn3EDqbxJ",
  "key7": "2TE5t5Kq4DxQ8RjzqfFAhMqRAoLuMfdwJiks3oYYspHMVjrSpHsaAiLkyh1uUh3vvUNJjWYLabevWcxvLCpn83AD",
  "key8": "gRm8zYhfYNT8pq7gzjPzquq5fP5Y1QWQK5qR2cvMCpbxkGiWXne4uu2GXwo1f79DUQDFpxmDQhJpzwMxFSF57jv",
  "key9": "5LjMwK5yPGGkvZUerN4GJeh5zKoiLbhN5NJGvasytrU6CcffALbJxqwAUCaRfhmz2xjsTzKuKHfrcTJbPFEWdtyw",
  "key10": "47xcKuS21nR5Zcwqq7EBk1FqdupLJYy8PhKeGT9kiNhTfVD1DXa8MiJ2hLix12vF25i6rygJMN4TWUG85FhP7hxZ",
  "key11": "2wXbs662dExySMMbAQ6LzrqtLWYL7mdPAq97D1tKiSDG3jiTYgvdLfJhiUgF9a77PdoWwRZw3QCLueEhJYovpecH",
  "key12": "4AYHEr7W3frFGiezAU9xgPufzLUyBn155tXyZTjvaVBvVkAikZAiqxZC1NMbcyt6CunUARWeSCWQ4i9CtSukMoMY",
  "key13": "2Qj4nZ1dA5bn9djhKXFqU74XFdyTy4RC87rAmwRRZfcTpUCCqPGExCV462zxrDWcRrKHEcf8EQ6n3nKmHwm3FaS3",
  "key14": "4ZsN36tjX1zu1gFqAKV4wFzVu9Chc7FFC6Tx2tghAEioXrkPu6U6FtMBJTYK6pwUvKJRCforkNn7crWHFy3g49Kq",
  "key15": "3zpTR4HzgESjYjCXxenTPbfP3BPpNx2VSreQHvLsp23Av7zzPKkgNvKSVS7UghpvYCN9APqSR6HC6JLPmDnXtNVX",
  "key16": "3Adwx7U5feUQkN5VFLLBB1fQZpY5V2SdkntZxMgiYz9Mo3NeoDLM7tfD9MJQhnqL9iDCkLESMfDcrigpFE598HpA",
  "key17": "4cgB6sAnPTtxc3aLkwdTScg25Vudd7zit5uMLq4pvdEbFjF4WBiULNmchQGakErPkUtxjdLLr8riV7FKg9fsVZet",
  "key18": "3dTkyxAXrAec71GyR1vBGnVtKNBEq9AA6qemBEzJw4NiKGih49FSCmo3ZeJPkVs2oizrKFkGnPQzQpms18fNgDLg",
  "key19": "3A1WXfbuaVaQEdoJ9cEzVoFv69ohv93TZqLiStHvHSLovPK12A5GxTocGoZRznxtg7RfRpNX35NpvvaPABX6RMeV",
  "key20": "22zxjtzU2u1d3zqLLPzRtRPdwg3Qe2Ku1ht8dA3sVakp2XMKcLF66YCUNKmFhV4i22kceE5JMsKxUivp1B4zBHW4",
  "key21": "45bUg3mpXPeFtUSbKUbTqR7bAfduhvu4c297oPtBxKBMQf7VUpzgBpgY7pmb6cgdyY2jaVZ1TKDxHYbdqzZzZ2p5",
  "key22": "5eitrkg4aCc9UqUgih2bt16nn9QL1cmyDsnzRQJsuPPSSXMZEEQYDMtFzZTYZ3XMw1jm1YDa3o5cFPsdKCXyywyj",
  "key23": "3EWo2dc9gShw5yZnfiVUfBDrhGocCSadiwtpKzYVwGUogLteWKgN1yUq1Ve9Ru9baLbawed5sLuSFf7SjJBHLmW4",
  "key24": "2cPUKaYdHWvJrSnNSQUTzGLUq1b2kGi3Bm9cShJsHwgdRXxt4kLywzWLreEc9xN2Dcy15zm6omqPafMx3A4vfJc",
  "key25": "4GebYuacA7QNhWyeQ98DLC7DcZ7jeiQ6WKpocBxLPKuyTUDAGjenZ6m99xeHpM7huY12viz1ZfCEQ5fkGGHcrVF3",
  "key26": "2qvg8LG1rfmRqXBskwxog7eVLu7AeLXcgbp5XAv4JJVrEsDV1yeFvL59C7Tst1pjGLSPx3sFNyawD5wcWxp4RxnN",
  "key27": "2CcTtEBksSHjSEMfrk8zWuM5QSD3EHtxEe3nio8gDZ1dKNs9FguY2JBXhyrZGhc9hXchAA7cmEEvCmembv7XnBku",
  "key28": "36qMvDsaRgKHoHu6SrRKKwqk9Yx1qKtgjP6x646u1VVkBVfPetZEF42AXnqvPcz33wbVLPLujUTNKMXf4TDmvotn",
  "key29": "3ErdqQxWfTB9vv37YcVVMRXBqpzTvA6U4H9kEb1kfPjuwFh9UDX8R3DtuFQ9fJ5Cui7SXYCyNEKDQVyzRaex2J3v"
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
