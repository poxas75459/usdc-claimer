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
    "5qGsy7bUBR11Su5dJ6vCqdWaWYYY2R1XRTGv9o68m2GYXwAshJMWFVV6Asr52ozWfGTxhCnPvSnjiFbFBRD6eGrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDzqnC2FfBhGRv2t8NjPiPd9zs2PZ6aSimDLn7iW7XzzhgFYZKX7YP62Nzotb5WMwYwK2e9cFsbaA2cwfzHMvh6",
  "key1": "4rNtnqjjD6aqDJjRMgYcgomsDbYYmmL73DxGdrRBPoNpAbocP7yfY75AKdpYHo4Gez1tLYo5DGu2T5AiAtJ3xWPU",
  "key2": "3qnC6quWtqHeGvox4WbiLee89X9YmyMzMD3k1qQt9DPwjDeeMjf3xQxPxEYrUYBKK14GhBV99EcN5YVAwKmMAUsS",
  "key3": "51kDL6QwAvpYbq5sdQYGkeC5i2BuSDH2Qr1JceKSDZGY4dSwr869kUSskEWaTRiWCmxdjNgwvGcXPUDCczZAaBhF",
  "key4": "4vinsmU2huXiKcYW8zEPDxUn1SrHxLnQT5qCmasR8eksA28egxRrPhVV9qTafFQUZnj7kQjhCW5qs2cgFsYodLkJ",
  "key5": "2SSD5jzs4bn85edFYCeW7Hm2BsDYxCKaPNPHGgNUzXTYHUdHrx87Wg6NiEcpcoaurBRQAPq9tLrbXk1wKMCU9zVa",
  "key6": "3tEkSfonv3nZaDi9a2QeiPUUyWZSRx6t9BXk8ekGhDnXg9dxzpx9xJDo7yKBJFNy14R6HTAwEmVKT2gdWJvTxAH8",
  "key7": "3pMbBYttUbdAepr74UA97fJ1rBAKDUZCACww9YbkW8GbdnWBHFn4XMoN4tBFQZmreg3jouxaQmzWXRmsUgnK2FBH",
  "key8": "3tQJ87aEmhLD2Q3ZrYDvjUWrjJB4Ttjzg3PGSwBNxH3aNW5EPKpwpQd1yhsMEPbpdrmvpNtXRkGy6yohFaVtnN6Z",
  "key9": "aVhDAmPdmHtHfekynEGKjCAgXpZ54ALy9fPfKKPhvnW4LtSS2KVMMfXzzrEYBSFWdkeXp5RRWVNUEM16U8tTWuz",
  "key10": "4kuciL93S49n4HawP4xbMQ7LJxhyETFGuxFQhYmFcuYXT7rw6E5DQbJanbqTiwwodNimu9VM2CWDUieT2vj4Pv3a",
  "key11": "5fyHGuPHrdaUzRBDYoar2iB42Rb94neNWXWMnFg8kr1UEHwWvwR2Znm8waK6Q5nbfEfSXgDsJupCboqgd1bZrjUs",
  "key12": "31UWuFx4oEiN8kDUz6ZTyTmhC5njdE6i8bwnvP2kPcrexx7aPueCRwxvEWxTAzoUeF2sh3qQpfGpZtq83NtopHua",
  "key13": "ri1wy6tU7e6XptYanRg5t4FucaJUhfFic7dSEi1BiQbdq822DjBJ5a56hP7fNAof6YQdLExL7PoTyqnqs5GmCS6",
  "key14": "uM3eDYNRLE2t9neHYKGttDnLwn6wJTnLTLdLUFdYPye9HLGANW3fRJSDgsSD1Q6Wgte6XdU4WVPmuYCmKUb9nRt",
  "key15": "1yjs78tKKw2qrnFJfQau1v5WNfMah4TkP3NQNzegsHiK1GT6vuvYr2xCsJZwRXtifW1QeYwxxUHhgdTkK1Gje2G",
  "key16": "3YqhE2faKjSV1Jq3hvEzP3z8oCSdoQTmd8erY5kKk8ADoaUiYk61LLaTEzu1VAXRWzsjAQHxERb5aGRL3D2e1CAy",
  "key17": "G8GuKEGSiaRzkYn3uSwHKALZpacbsuv8fqu5oaw8qmbAaHQcNA4MrPxzStKNqLe1RjvPRNrNGqqxLpgWBGfpm8x",
  "key18": "5ZC9C9ottPtc6u9YWN34i6AGzNXyqwxv8n7jaaZ6sRnFmfaGa3S3HpMLKtCkA3Ho9Vp6Ewpw967Vgfpd2H2p5ZCy",
  "key19": "4durXe9VbNoTVcppep9Uoot8Pajj6q1yeicFUYtJWg85WZRyPWywhroG3WAak7yPcp2MPrn1t1Bhy9ov32zVShsZ",
  "key20": "gGjmyV529TmjeDzYJkZXcLNsF25qAS3QBvkvcSh3s69doedRiRXQH6qkMRW5Bnod2ChnRj27bvBHokV6tpQjTLs",
  "key21": "G3e2cEVDACDgFjFkaxh4GHBi2vLeoL2it1s4prtWg7vFrJgzZBv414dr71KQPVi7nSRALTzaT8bUsrnpW37NwTg",
  "key22": "2h2DfS3XSYTvd2wZtQno3woDAH88kimik9FT6wbxo8HPMGMTNc5uTNFZNSwbG74WMDR95ip5aF7VD41RVucEqbs2",
  "key23": "i3epUeiUdjYU9uicQzXHNVvVmbnCXB4jXmax2p7nigVnqjENtgkQbQ6NWAAcykHVX18RfSTH2XdENgsmP6ZdS1Y",
  "key24": "312RN9zADdvaAL4az1rUCAq6PBKXqogrdwFJSdr8uJ3P6XR95k8T4EuBaMufcRwAoKch6S5sFUatzQ8WzguCJLvM",
  "key25": "5e6gRzUVBwMpDA7Mscfdju7bw5xBNxKhj9FRLd7d6YsU33MBEWbAh3qDqaD5nJitsnKdhdNCN9iiESM9TgGYiffx",
  "key26": "2gn1jmGfktqSH8WfVTF6wLawxyiMQ13q2XRfuF7JhgTZLd1JwsukHTBHxryfi1QmwUiPBPJ8uxmbrrV5qetjnnB8"
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
