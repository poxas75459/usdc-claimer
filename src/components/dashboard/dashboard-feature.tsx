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
    "hBNLGci6CjgqoZGkr3VidU3FwfUEusUbwwH6HBoDHaobLBcjdjoKQ5fpYRKfo8wxgDhSRkHpyaYB9wbPyXR6Dd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Ty13XeQmUc4sUAXkJjtHXGdJX2Z6hKJxvDQ54uW2y5tD6s5Jjp68gpj2ZK8VRHLxLtSB6DyLtwRtAirKQLygdR",
  "key1": "53xC4TqH98uhFfnDxu6cgdSUUq2nGoRchP3gsfm4iHkknC6qLaFknqSgsqQA1x6JFav9RQ5vdoSz3zRFPeL36v8C",
  "key2": "4Ez1rPs5fuDp3EneWUbkEfErWSbLHj32kstCLz2c6ggtLoseJnMuYqSiiu7rhBjgCxMufW8ceVoLpaUFy18GEStK",
  "key3": "21m1LmJhbkf7XgEGwrNDDPfU2qDjJbn8V8X46U2dUXMERFgJMMrene6A2LjdVreMsGoDAnrBgCCMN1KZHSdZvcxX",
  "key4": "2WrEGdThE6c6BqmS74vFYw8odteCFyu7zju3Jkwda9GKSLQUnEs2Wd3FrefHWXiRtSZeYMC9baNaUamkCxUzpb4e",
  "key5": "ceA9xAb9V3AJGQ6DtBcbhbhnXqd4h6LsDcRsN1THMWy55F8zrGRbNQxerz1XGH5i6qaGjxi8jwVYaLRB87hqZmY",
  "key6": "27gMY4ky6Ht7wZqcq64xnruJiKk7whsB6jbPBcYnD4ioT5WpvjnCKr73hdWjGMjfPyCGDYKt9gDs5ekRd4YmGkPp",
  "key7": "3NpPsabKbz559EsQxsaBxH748tnbCANPSMNtuKH6MAMRKHbkM1Gcrt3gKWPSMntkgZrfmcYxZdTbAH4T79pEXMQ5",
  "key8": "2LB8aVmPWRT1a8VwaosrKLPUwwk4ZdsyCredE4Vz9EF47pASGTEoeonrGCigEWLTmBJ3yvTSagE4JPFf5RkxUUPJ",
  "key9": "2KruqEMdeGPL8evkgN9BEq594x4o8UiZ79CjNKokxd4U61mmwyf24wYYLMWppV3uMgDipoCku1RptNKHie2CoVye",
  "key10": "c2Ycnmmw9kwrE89muGHRciGpqA9uTCPRxVavpUjq15HN9kwuD1gEEM6za1iyFrDCQVQ87vfWzp5zLD9F5np1ypc",
  "key11": "4W5R75PvTUL5JeBmQ8DJ5PHMjxKmZ7tWrk6txCeEsZDrpW3wzmscbwhuN7Rwy5mSLmbnds6onupPZviDFNxe1aM8",
  "key12": "gsEAJQQQSMhSQr85Nuzo5v6PSP4s9tvp2VZHu85c8tJ84t19KFkTFgYG4sm1m9CoDFpPR7ynFN9GGPLK9kBKrTi",
  "key13": "qiYmfTftr1MgBLCmHixxqA7x7V5J3pRnUwoieeVzMjjywr5M2qE7VNTyZwgf7oDNgGYvRJuqKmLmzqRzBdUpjYi",
  "key14": "3FrMSZDffTiQJXVDzhKwmMLivLoMwZjsdkVokWZc98zjrJJNeLc4cQAyPFP95dohm1W1zKeb3q98dP7dyvcBFzYQ",
  "key15": "5TVRkL5TBFpXHfoK5mVSpSS7m6eJp8ffWzpJomJTCoTzCh5ZWxe6vhgQncBCmGZMozVTNzbGAxZaCUiqFVHPCj5U",
  "key16": "3jQb5ZBdpxQUeM49118r6n6kChaicWgFq35VX4MuWBGpZ2oVswcQrmbsfVPdya6mpLTqoppqL2RtANYRCvhsQTsM",
  "key17": "2hcu2ndWsLkTAbLVq9tLUyMrVbsdnLBBJxcG9yLygfZwEGfFdamdjYF2RzjTd64fayEUMGy4M6Zqdna5WV5M72Rk",
  "key18": "5rsH6ASpgVzVWC9Rv3U33XALSyHDdUYnxYhnAXj7VxrHix3JGCAXGwCAukkTxcwaMzLJf5eLxMEWkSaLe536FDeR",
  "key19": "2KK1xMhhxM7BcgUhuLt1u1nd4FR55Lw1MMRRWBBqNV2P8Sugf59zFNoCc87FDRMoo7cEsmUX8qGNYEsiW2HFNJP5",
  "key20": "3WmysnkxnVHhcdouxruoEdEEBAYTy14Br5Cra28GQpTuZt83Cc2DCVcR2eUYF3vAZsazzswtUUyX7V3ZvEUPEZRN",
  "key21": "4auLMTQmhgJY9zVwsh9y35PqBkeUFzK8yugsN3Ee8VJ37CudeN4HNnXHRW615R4PnUEtex4LBCSVSj9LfB3c7Gp7",
  "key22": "e6bGR3obJ7bzxHUMVNsV8M2zkuoRT4atfiP8bDxea25a144vDvfhtRiGzSddB1xnBLueX8nBDaK5CgRnRonhvD4",
  "key23": "3hsST3E16DxAqzRs5KTwdgTn7xjEax1R9ggvoCwFsuu6rEZgb1EozDoG19PE8WLwwYBSbXBD6w57utB2B2ZtNDGU",
  "key24": "ia7jnNFWvXhkXGxd9mt5bfq8wNkwh6opKN1iMLWFHPb89KaBbxDyY829eNEmWmqXouBMaeqZ4wsDAWzznmGBwhb",
  "key25": "4RnL8MY4KTUL8KbFSd3FcxJ1tuEDm4AXD38CKMPMa5AcY2JTX1rJQ3VgyoBx1jeFqzWXAMrBhrj6ensdUDDo8ASc",
  "key26": "d6Vfzgy8LyiCPqFKkzStkcxbruhkX2TNz7EaTTNgB4BxgRZKNC8GvqkmTavbvmpztGpodAe4whmepW4u3ffrta6",
  "key27": "63FQ3s63tJDasApjR7VaEN1wVhvamnD3xAXcvxKoHE1NByseEMHjqeihuPCs4Gqnbk1sksWgJYQizfCwJzuWaupw",
  "key28": "2nPspCGd4LyZHvJ6L1tcM9eJyssa2ydPtNJxhkk2Tno29GY5h33UDb57kkTBRNugCcvc63fsK9uc5L7vVsGhChnB",
  "key29": "2afr6xDhi5ufTYe8Ciw9pTyD2LUaoEsd57atgyB9Wan9JPUvAyZcbShTKzzgqbzRCu8yz1MHn3eStzmEbtc9HLpW"
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
