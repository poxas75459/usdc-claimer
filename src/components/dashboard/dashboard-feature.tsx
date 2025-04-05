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
    "fBK2tgxS7Q9LBQfUUr1HziXCQckjvGdvpEHta7gFk4bJYNt2HiU8mVzMN8Dq1PpYvHAjKdpCXHeYkPgNtVBDyZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obHYQdSuDePyM8BKmgix2ZSjW4pBNaFzq2sHyg6r837oweUvRqhJ8VHepcYB9NfNv35YgFWHxTscWVWDgypio6T",
  "key1": "4dMMFPSaeTmkc9zhLYnUSjd7kzXz3arEm3fsXwZVTepy8ZDEx4cssp6fWLL11HmWkufS1558jjQzjBZzGEJDgMfF",
  "key2": "61Lct7xSKu56uQoAxP1QdgfdWzbbhXRzPkDGZawdGr3fnCi2S1WJV4RThmGk4Tp6BAWrDEcGgceWsF3Y1eHCbDBF",
  "key3": "3js9yRPG7SnuxeJaruYWsaHdUaYUxhUzeGMHwMGLwAXMUhuSsVtYQj69GjBunS1yA39sknHg5cQDexhEV75gictf",
  "key4": "82UvvbuNC7TWcUSWddwR9wxcAhamPpc3yE74BqL4fZ8jj1JW33qAfWrvYBA2XBNUoy4ph4aHJm5mB8FSh2QRnF7",
  "key5": "3UbD4NtxCnSQk4fKkFcTFZxDy55C8s4j3Adhz3jRFMWvKoUVhkpYVPbM26a7V2qAKqEeqooUQoW8hQgLGxuPxCvT",
  "key6": "4tSCwvKfv3BzR9EpQH2dnsbvKGbmysFysVXuF9B2Y2gaHnE9WW6ufoRxPQUyEi7oGnogRFbPoak84ZqTm6nEYvM4",
  "key7": "4VRLCoMWhwhPDokDrHH8ppNRj8U7PfnjUe8pj6zJ9TPaEVJDZaWvnKunWZ8dFKJn2LARWcsNK7JS2bhq8dSx83GM",
  "key8": "5kQrKkkGrCE1VZpAwWdyEAAbvmKsXwEnKjzty9VGFrK1gHK1Xk7NxHsLDx5A4tKZDwsdXeSGXvXFwTEstQiHz9BT",
  "key9": "4Fk8xKDavtebQDFoY3BUcrSkFb6nmGsEHUTp7dStgJH29goDMP6AzgSUZBiy85buKQihYfHsMoReky7XFVcME8fu",
  "key10": "29yk2s5kAJtXrZMw5YzjquY3TZB2Qf9razG1pPUCbXP233ULf4QaZJ9F8J3Zz9E8tiTcN1Ec15hyKnMag2mJw4fK",
  "key11": "447qBVFN4m3dotTVHGoMp3MHYFW95cSXiFJG86MHvpcdpGaN1dLHfd2xTxjd3ASA4rU1n83q9oqLFv5JwxuJmJnt",
  "key12": "hWjyreJqxgAdxQuegb7GrzUPE42Ncb48nbsLwsJY2rYYiz4HY5DBRYYua567cNmpGjLVEdDHPp7uU1TXcUt925z",
  "key13": "2x4xY47GhADypHseeB7rbssn31CaBuXtDTH1Xy7wNPRiFPv5YdR6RZF8SSuqhg9dj13R9jzJpadskfLJKS21Vmri",
  "key14": "Xh1KsUhUWrg5GgeatfxRhMi7SZTYKtvwnFgYWizhFrgXKsfQuL5fcBQGwuUSJL6VU68QPNhL3E71CYohneFJZXd",
  "key15": "2B3Vqz9u1U3s9hmAxEveQYP75FtivrhqErJDwmJ39sVJKyKyCwJ6de1ZESZZGUMY3CDUpXJ2hP9hebfo5mEBP6Ua",
  "key16": "2RGL5FJoMokfCTHADbSq1FW5EsSc9q47PZFeNVQiAciNTqETxtKFCPzxLEMwtbGkMMSqxYdD4JVzyxYVGrMPWT8o",
  "key17": "21ED4LAd7qMpvGisXyn6H4XT5Z578oWg5xSMuHDZL2eq5wHS6KZsj3JY7Z1vSMdnJ3iNJFtD47A68A3JbRctYRFe",
  "key18": "3yho82neSNiuSiD71W7KTq8bXH7zjNFfcoamBx72ec4Uj5RRQsAT5Hhxz7rWELFJ1sJ6JKMMdnJr9chuP2R8ZYb",
  "key19": "26RQgcFJB98pjvYQ7jYNypAM88S8JftonsGESoiKjdp9ga63fVi12E3zQ5zcpg8ciCBg3z6ptcZTAgJYPHvbzXmy",
  "key20": "4z9MNhopFx4uYbsdqPUcL7mDDUQngH4W8MnQpZbNXKVFG2zhpLH7gKDYvJfxRNrSVarzv9wdSkZbXfE7sF2ZnD9n",
  "key21": "aAk5GfJ2acs2cwMxJvfQnwdRLECb2CgD67LMwsQiCG9AnbvfN7eaNqQ1zPWiBADpnBq9nw9dvPKiXHpfWTE4dDB",
  "key22": "2JmBLwJbFzBBDyTAFU292wsGxqKvpcpB8fKRDW5tqV7NnpiNTQmQEhF2P2msAwKSGMs5Hry13qvpTAderJcmzUJ9",
  "key23": "3MHCyd9c4gSfQUZvsjCNPPd9xPK3vRigbkn52BmzQJ3JqfzckQ9V1DJepgLL7ZLwGvT5oib1swaNmk6ArCBa8pty",
  "key24": "5gpriKL8DwxZmtMKB3abT52wwbVcHGm8xEDi4TyV1LF7eymNB6rqkuRKYbUhkK4rSjDfNUzL2tZej1oiFQG5MzRr",
  "key25": "39unTuqQ2eog2WYAkX6jppknTtSXQCUnvLDBFTED4UYPkBCqptzNriJXFk24i2eG1iMoieeejHdtkLpQMf6i5mhT",
  "key26": "2sxx1ozjboFCJ3xkksLVzF1ZbkpWrnGTaULTwo3pTngRU3MTmMznMPaE7fQyK65gXtdJH4Fj4qrFoxZNSyK1reNg",
  "key27": "5Nf7ZxT8NNiTxRxzjuFMsK42b34gnztDCZpSQUnPUXr7iTPHm1cSfhkxadRt5W8wKGcKrxzbrEjmpdrCg6YR6zQx",
  "key28": "4pHS1MQNhxs9oStMaWpnnMbPMKxwvrphaZXEbTyFmn4jemNpiSRAwiXKxW1sU54Vtgvi3DStPVrLV1TotpkqmBrP",
  "key29": "4WxFqLWAh8bTjZbrooMAPVnrm7CBqZPZcCSyGMkXjkBEb1TaxhEApovmrQ4cHyXnnMh64yJfVNmABq9n1AGJx3Xo",
  "key30": "5SYyt7cvaoAAzKscddJnPvfNwX1vo3CTrUttvn92u7mbUjFq5xd1enAqTWMwZXwWKwHHN7VjEEDzkgptC7UWcs5C",
  "key31": "8h9UHoNJtpt9JruL1HwUtBxcRdNP3SXMz2w4HPwP5BApiCh5G9TGvWdQNp14ukGXwXiHd893N9C7FBiMK3bUcd6",
  "key32": "5NWbFjS1Hgd7a7cqJcdcQ8dimhU3uMrh3fNyWs14sLfwM2yDCsBS7tnPxjv3dj8hfDQw3YAHaYYbdB1mJyeQJkEw",
  "key33": "5SN5QL22mi2fqa8nXamzrsguW8FiMggoLCnQd7Rd2fqEq9nYTK16dBkztKxdUUJhx51Z8ycUT4wxCiEdSrS1jnM2",
  "key34": "1rggdNc5hHNtXzH5yN78fEJrHyHw3M7Gg4X7uAYjW1MBfTMiPVrS7ovnzTvf8qHVxpGW7dSF1gQGtQvJg99nhC2",
  "key35": "3oy9HKAVNRoHLJmRyCYJmRNxuWPdZjoh1nA3wVqpevwhtimuxALbmaAYB41aupZgJWa5tBCx4Fs5kv2mmQfkJHPB",
  "key36": "5mQAiZz892DoSqN8QXeGnJSWradrWi4nmUhFuL4asaUqmxEVMNoBWtPkyksD9Z2fD71eLVxqs6QhvJ6pCsWCGAUD"
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
