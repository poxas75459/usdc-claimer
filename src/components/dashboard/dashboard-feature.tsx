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
    "5PgvdQ7KAzFqTQp5jpk4r86Ksvp2aAZNqS42or2kREoqLufyvY7VvxrXeHd27tiuqpbpYjFbJcsPAXaLLbghXfsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jL8Z3eKnSMK92xawrie68itm5cRVi18qRS37gEdaGEHGE3kHzE2UkmnCPZ2vgGJxZ1y2ocECT3x2tMBPy63NgAU",
  "key1": "4C1Hjm2MNWsx3jhpYeWvRrWXe3PQC2XcmWkGjr25n6XqwXXY7NLKo7gZLjuTWnAspin2ckzPAmiMohn2rh6PG1i9",
  "key2": "5a9BrcXCZvVgNSRMEyHQ6ecjtWKM2Bg5aihwPp1YuerreYedKgmtPTFvuF24whz24tdgoNRPreQLGUdNVFzf1fpA",
  "key3": "2ZUjLhbWJWLc3XhCiw5a7qawteeLCUNmKcZWhF9ZgqrQnt4saALJHbVMLzjSut8m9sbCRYVR8396sug5JY9kBRmo",
  "key4": "pdCNSnP46gRKfncJYLdJARsiTRzemLWq4cRQuKroz6Uf6SzB2tR35eHpEvG1MgYLpYBjUfD21DAnCsQzfn7ajPC",
  "key5": "4N6vEmVYbB8HLPvY58xRgddBhi5ZRXTebtH7FX1W7sokBi12UADfh2ibqYJTHR5MWdRYRtWGnx5d8ZYcjgWcUw57",
  "key6": "41KHJ11Q2ytfVJWPG3hFvyACvfcDcYn5fJNQ884aqKPr8sfgLdrAp93LqqPzkZ4FJKa7Fvtmbf2rR9SB1VQvJK1F",
  "key7": "qe6hmS31rSeLk76qSuqPYsYuPv8VHE7dQXAzJWM33LvqWy2iLRHDFJ2gYPU6VDPwvDtXqoYoxB8vzvScaxCPU44",
  "key8": "5bJ58bFGsnMQuHWEcUWx4igczgZayquREk1y57N1T12GkbFeX9LuWtVXeVqxnAE6W8a1y8QbAou8EEVeWBofycQU",
  "key9": "2LWaSJgGsASg1r1BrPmT2mNmGxRN4y3jc6SjQiRPyyeAaiZfiTmyitMD6KtjwkE3MG8hAf3aXPec9RK1qUczBuek",
  "key10": "3vMUQ1caAYutoeYFFY4d3US4B2zid2vDTxXF7tcgHvHHj7zvBXDHvgmfFSkRMKJyFY67xcWH143DR78ahDNoCjAE",
  "key11": "4kCFftYuJ7y3s94uoFBACwrG9jc4oTRrJ4YGfzUyfSU6ookzWL2AvLPpm1WnKxfwuRA7S71xaFeaKSt3pBf6BA7u",
  "key12": "vqj3TB4E4Ej9FLZyw7Eq4KzGM7rpAXtYfi1oJ6chPmjnw36zux3UW8dWHuuQJKjBSUfZpCdSvFP5Ehh6s2nbDvC",
  "key13": "4JY35xVLSeYufMVM1v35Cmn9RZRjXE5TJTFqd84peHmem9ioNAZXdZoTrio8J1apoUsNFkQsTdhBKf4mn6jrFYNv",
  "key14": "2J55cWhQmtV1XqjzZjex3DiUviJ2m6KuDXTGDgjsp8QiBFGsYBrSAprHfWtaBjArpYzz1wzRgQ88k8bC2qpRkCmf",
  "key15": "ZXBgocTcbj8Gy9HtNwwmRGwJNbsNGF97Cc1vpSbAUHj8figxLNerLfnWjjKsBbZzc4xfcr2fLM5RLR1gRumqcmL",
  "key16": "4CD196V61k6YLsAJ23nCFWNTbr4JNzdS4vNDJNMbDeMALLVgtrxzxaD13RaQ6NcLjpgribkTyuv2k7XakSuJ9b5k",
  "key17": "4jx5FRD9sPMP5Mh8wfN7j7QMxS5uLBjqGE4xh1eojuropBqGPZXS4PQv5DKF6yBtkmE2oDxzYRw2hVgXH356Keyf",
  "key18": "3YCar9Gk9LNGKrnC4HspfGV12dpon2DTz8AxP4RDPJ9u9dxjAEXQGkj1Z1SafEf8HmxAvHFvPrpV4NQvCRNs62yV",
  "key19": "2yNmEMPmashe6aWCzjMivcPhcWFDYJM3ryWP916TM5SvMrn6yvYfq13XErZAgY4DpnYHo4SzV1uqD5QmknwFB1u8",
  "key20": "4nr8fpX8KhtsQD3qjqk4Hq2xdSvL71WdbwgEBLTWcLJwjDJoQUyZ3xMsTM6nXiX4RZRCAaPZQemD6h5dWk3zGhrt",
  "key21": "2X82X649N3AKUkXmoB2z1HHwUH6mVbKrNyBdhLCvormu6YjLAjqRg1QfaF9y3QM3jsG6JYyy4KgdgVNWNFvMtHA2",
  "key22": "4NDJTcgxLVobNyQbuhgsKqV3P23HRUQKmBVGaNEQyMWdQrxoZfpnCxf9XRFerUZgR6JZAhZfrEUvDbZcGyvrvLFd",
  "key23": "5nxrVT3gnVy3gnEdwBNq8bH9RFXU2e1jjYqrdwyQubokSoJSDh6GniakJY9og483gxzkrcpqzsZpG9SNu8YPMGZU",
  "key24": "34VaQf5m3XcBDbWv37wPJPBytEdUxvkiz3oAGKohF3DnrdZBXXwu72723vFWAkAEKhJFX7HAEMrSZdr8xJ6LBSMm"
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
