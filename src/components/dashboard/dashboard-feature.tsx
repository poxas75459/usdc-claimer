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
    "2ixpQLCvXvH1rmQwTnpE34k8XEtZhUfktU8VdhKCwhZyuWesf9ZBnBRZ9HJZ4LM752sHHbkQLYFhamXmsixfT2Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gADtWQ1EuL9p74USA95o4hxrtfnTG8m83SM1nBhLLCbM32b99dYtKNcJYhftXJMVjARNbCGBzXDBPcU93wwRXot",
  "key1": "3VPXBzuZv9DWYQdBgAGabfjbBeMYVQKP4PiKjRQDGSTrMH3PAho8N9xuQfrpgY7ud4FnPpgzMP8pxgYyYgmkHxC9",
  "key2": "2gmHz3zKBjv35qEJrEkaXwy8woo8zDFnT4gH2QwbgCKrb1WXNYH8jrGgzXx3VnYXrNJrkVaGrFEe4QJ2UADQf5V4",
  "key3": "4wRHXrubrbREnr9xCZcA9L3gohi1sCHvxWtJ64v4f99NqeD577ziotgL63zC5KwZYxukPkeLngNqAE9viHqgk8mp",
  "key4": "5Y8Wzu4pXoV8PSgCcFyK5fjgb49JBr9GCFKhMLpokfSyP88MEBrw2dUkmjWBeUGJ2DXGfKUuNT87uaNsH4zy4jEm",
  "key5": "5KsUWa9T4HJMwVC15uDtNVNDKoczgHy6fYknzRAQcs5M4JbGqMyKWmXN1yGoMgwAxN5AZPfX4eCWMbLU6HjW6LTe",
  "key6": "5UYzABwvXkGX6NbYCLRWWjHcD7xMEZsTtPSpMWetRgBrNUWCqKYZHM4n5xjo2Buu35UUeUujRaJ7f5y29RTYYTNn",
  "key7": "4nY25qSVaG9yS8xcvhNU2HmJ8Y9ypTraNBgmhSM859oTrniXcCXhSeFKG1d6E8MP4kqnBfr9ZhtfPKiy7mcsU3cy",
  "key8": "2Vm3Y2msmxWuwf6UzzhpKLTtnAKA4MpkAHo7T1hxg9nkvwaPe8CUHTBn9SAq4rVpySEZezd9BTp3F2fZXRhYCfed",
  "key9": "3cSZFSdpyQ1mxVVa2RvTXzrRphUhKdXF7Q7w5z7BfULur4VuWuGE9bmJTnx2Qeh2wGa2y6SmLh3eEi7XyiiBkxnm",
  "key10": "4HQbs7Xgt2hAD3nyZtksem5ydWVrHDuBYw48KjxdCDUtbto8bEAbFFLY1PZM2ihdAzYRfyhUnLRXm7ATUErHHLsu",
  "key11": "4fGEuBTfV7EENsTNEPCJks6URujsxC2KnAbfpfjaCj4GCRu7nKbb42pcMS3xRTXYYJvNepGAEY8Bqz7qn9iFd67g",
  "key12": "3etq1Qwzq7n2QWr9CfYVgw69XHzYtxKo7vHZWAcDW6viqKPW8xU73BiD7Tkcsd6jtCkv6HdXQemyup2iJ1Ro3jfw",
  "key13": "3BnPaQ1TK6gViQY49Q1CmU2tYyuBnknjx7XQrtX9G8GkX6E5hUb26vi7sr3kb791q8kLWtNT27VbwMBNtvt1A4kT",
  "key14": "29Z9tHAczMSyCEdpPR97U6my5nzT4z65CAk5xTdFwxkJrBuuHhQ4QS7AvWfDMGuedn5JcxxYbfrhdVuPVd7aZtHz",
  "key15": "w7uT29YHytxmJVzY3zqrup5wh4cdbzVsP45zzVAtTpkW51xoYxsarRPRC117Q4orV7ZjTrua4yKSoDJQX3Q85Jm",
  "key16": "4C93hs8PnSCrjnorz6d7DGeV1qEbSW5TNT3LPfBJVENwiXJZ6YcZt61vKZcCNisJYJDKzMoqQCvB4bYYbjJdzWb4",
  "key17": "5guNRbrbk96s4mCeCoxt5JTYBDeF6mXRtoQxNLBwMoqRjPg5sxhKaR5UFVdeqDLZ8yN21jPWVhqyBq9u8nH4J7Mg",
  "key18": "4eihURxacbGAPporFWjdAz3NKt7SX1os1LJLVnkhzfyjVE4Q8tc3uDvaYSeTNqH8XfrgfkXBFdGFNRzAoD6nHtUj",
  "key19": "5Go4LEZCJgwTh8JMHe33sBsYXRCLu989dhQ7J7HuBGkigreLtBtPaEGmzbxVYCKdbMmykrkRjyupU8CwKbFZLDoj",
  "key20": "4PXnjkR5fNGHS2R1BrPJgJpgmw8kTHtXSW6dPazYTbpRttjLW1TrEAvYZLoSbGTddZBuPeAXPTUvFfmLAqTisYES",
  "key21": "4MH4ZZqjL93uYLQBbaHPZa1GWSwHAPsK2dq2YHjXc5cdE1BVgmu7QSDxCVocD9MuHXV39aR9VCn4sp9KSQkFj1gh",
  "key22": "2djDyBKi7c4mFVEv2xsBtJwPRmDCyJQeTuTWC4LZt1kNapUTPQhtMSVNXYnTAE8grB5KaL3GbkqPAhC1qQCpC5eJ",
  "key23": "58kXyuuRUUFZXYUYgP2g3H4N4RFBJLTTRQGwGrZnA6S5n6n1jCS7CjyUwedES7Hsyp27xTzKft8QyBe3S29pTq1G",
  "key24": "2w3PZp7p8btvqB4EmHxDT4DL5qANqUbTShiE6bSyzL23d2EtHjMtYgvUeC4Mpk88ZTYrAUJS5NUJx6hGxohta3Qm",
  "key25": "4ufemSmC6gxGYju2n8BM1tjoCCNoNMabskqfNA9M8jUoQ8hW9kaisKSocovEB7mu2MLmCT9P21RGn14jiTDPAS4",
  "key26": "2dbseJ6SvfDmYRjfGZh68p3FKyRxhPGSdZD9agVMePpdxXoig3mP9t9CGHh2EfpHPoCNRQsRwgWB17vhWJEjfKn7",
  "key27": "5UshPF1kX1oVMZdkW6HyAp5hXP91RsztirsKTWeCd6WPRMS8CoGF7BZHpNFSbfxEtjHTUHyoN9BuzY6iQWkAeso",
  "key28": "4gWizZGsbEYG4zSyHwak1vs1gznJ4DuKxsLyABM92Ff4iBCmNUeTY5WXTHSg8zrNoM4eMo4PSuk2jFutrxGZyq9d",
  "key29": "hTsvVLQAkhPw2XE83vJmNnQvgpL3nzdyjg8rop3zdeGDRMb45KbuKXJXfJ4wUM2gLNW7YsuysTg9nd6APHZ4fWi"
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
