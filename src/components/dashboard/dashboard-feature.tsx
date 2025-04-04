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
    "4rmGKtdsbUk5zVRrNTepMYmtzg7soHJi1BxQqbVQQfTg1B7DCChgqYvFzi2vvNguQYHPX6qjmcDKmgNmitR5vCGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNNGXXXdAwcwzMhTfXMbDZ7FYnDog8WGvfHJbaCzthkRwqM8B9qex7vzwdHfUPv2mB4vV2A5PHdHiR2TRchEsUq",
  "key1": "LbacAHDzxc1vZickbaRP5rgXZHCLmnqnRKSeCXGXVjMUp7emjUf8iHPQmiZ4JkpyUKnshiLfjQUGaUEhPftLozV",
  "key2": "626iQ4ywjRcnAbJJ5p1h1WaGVqXBKnf6Q9DAQF2XmBVsZR23s56GnEcXvkkhMVBmhj5Qup9KB2YTfn76z5GFsnzo",
  "key3": "yNmpFojFs17jN1nmnZrBSRBkD3PcRqx6YXFtBZPgR4KDB5eRs445HgsSN3qEc6BG4zm1uUyqXcuPCBpipKd4T6b",
  "key4": "3cgoW1xQSVzWZQJYfx228uwF1ygUhUxNjrBBtRDjFLBsC2AfjUvoEWZwtfNHu3yRv4Rmrvau54XbdKSZfWakLJsQ",
  "key5": "5yxjGZaXbmdfXvGfmRNL4ra8942jh1NjKxC7c4rwJnP9HPg4Q2qUHQPw2cn2ZdPFcSP68MQy9kLMT6YTJpNcrGRe",
  "key6": "66PtCuL8Rs1bM4NXgkec19pQwKHFN4bdYYmjdHdF6YcwbZgQjdQ8a3CkH4JaJzpXRuS6vAz7VBy5Eghya2bQkCUP",
  "key7": "2GFPZPKteeaHtSTJ6aYyEiKouqM8AX6zyVz1tiPDh5Ksmty4y6AXDWTLr3Wdjqrm2KBgJqUxXDy1S3NZE7N5zJJ9",
  "key8": "4aR34ZK1T8RFnnUH5AegwtW38Z7LQCrKWCi8wwNKYvoB675LiVhhrqaWSLXFBF99CFoK9pBoF3cRZN7bw6UCGzwk",
  "key9": "4QeFsjxq9eVMaZtqojAaWsR2gptTfDkEguaRuq4iPUVzkYskZLdc1ypia4AvpcmXCKFyu2sciUck1b81JbtcthL7",
  "key10": "5z79zzeTjWpaTaCaLFgDAn4UXqfodpxPwpbcVtgZRyKgECMytVBVjDHAk3a5GfCXU69RB6jtfPDNLrWB4y7KcVSu",
  "key11": "mEtDdwBAoVHJixGLq2BMxESjW3WjnFPzjimMH632bz5zzPKvwsVEEG6njR1ZH9SvzQuBKhYTWTB9c7WZ7UMGckT",
  "key12": "41JUsYdQipeKKLnQAy6XNHc4S1edR7iuhxVwq2h6DobUfkfhCzx86pxrzR2dNxpqqiVSJcMdgCJWpc3EBzcW6q7Q",
  "key13": "VMJj7ChUfTiTdFW8rBMGhWXt3tV8rWi86G8czef5hPXYX6TBgij6W1y7dfUCkmxaUX28zym6eQL5Q6xg6QoZVeU",
  "key14": "4NRvsiEqd8bKUc7UXsJyzhbtuZ96bt8FnXhhq6jxRwt71SVAKyS3VqZho47jT26SEdaqd7dUxco7oPxAbWfYFHsu",
  "key15": "45WjUqYHSPPzwEBJJRVMSgp9CPbKNgMdosakpjjVPfhjwdnaYW57XBF2KdypqQSjm6mvUSieDMMUmGoFsKG754Du",
  "key16": "5iXkPVvg18pSddVVpuDAcL8JcaJbJczR1yYX9t5pp6w6UcNq1GN5Bh67LpTqSV7HKVxR1vuXirBaetvxWwHjWoeE",
  "key17": "5MerbXH9HozYgdSuKLH4y1aVksQK5BdgetB9H37ojrwLiYW93k6rfrq1vVYAgbyD4GXstTrQ3ebzyeiJbH5W11dX",
  "key18": "37z1mt5WkzG7mY1BSc1mvtmrJx1SLbsQt4Jq7h4XxaAqghrRtyKpxEtTGuCWnZrsyyU2o1RCgATsWmgtGTqBN97f",
  "key19": "29uz6F4t3FScmUMffe8P1hvMzkTPeExUqYVtMUWa2Jmgn6KMZYoAJWoYiCmAcAvCAq9QmKxVHZ5oy1CYJPMpUj5t",
  "key20": "64YVJoHcFbvK2zwbQZ2R92Wb9QENR1bShxxGYYiHEbk4TdeKxBF8bx4aNcX1YWTEartPLiLH76jonPQHTZ2Jra7i",
  "key21": "5DrE8VMZBKxWt26xVjwHrt2D3NfWi7fNA7oGypeTtEHHLNEq2wCnYBGqWXi8CPjaij1q3P6X4KHJkVmrx8BdTWFx",
  "key22": "4YosW4US5oRKLKjT7trAv1Evnws39HEvVQhmxkzqTVizQBqWKXfiVUADT65WpssNLMwdAUtovT3DcG91jbaMSHUd",
  "key23": "39wEkHrutz89md15z1U7ovBfs1mcEGL8NAV8a4UVVJDvRKCveety97eJzaCwjEiaAUdwSP6Sumi19k44mTZn2KH",
  "key24": "3GYyLVS6pQRMyws7gFqe1gnyna9i5M1py2TNdXy6AyLBzX1dvjYWnMZVki3v38zi8SEmFTpsu1ZK7qMjYHm3aGUr",
  "key25": "2m6xY3brWPZeCKP364yL3ScCu8FaokuT1tUtbGUf8Xu7hsyzeREofeG1RLKYNz9WdKVMjf9jDvdbMKTxaqpsR3Xy",
  "key26": "5KeEojwEUw6XWSez8zpQFPGuMWRvaM8sCTWKd5vcLVASSHMZscvSLqQmVP6vsL1VTkBgcgFkmn8mSYRcGfMHDy69",
  "key27": "XQmpAZYsofMESAoGHu7QbiyD9yTZEi3vWRpr2DRRpdGkpqwZR7GwZkJ7wnSnXDj3DwDaDpPMg8zbg82Qh1piRDd",
  "key28": "3Z8pFqe5qTeiHgm8YE5WfY4HCkDjhBdLR1etnsZAtnWnpXP5W2XVwLxf1qwTyucFVSaxHrKXPqBmDKbXXBF5Nj34"
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
