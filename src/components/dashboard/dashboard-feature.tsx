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
    "57JN7nwU8AkmUi1oZFPUCGwcw2Eyj59e7T7mxa6wbx6egdUXiwqbhF7MxYKwvKt7o6LNdANCqu9eZJitKNT2jzG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V79XvBuzGZfjo8nGcHQUzZdorVxuDx91Ui4RqtmmGBGstydC4e1Bgkyk8nfJfmFkUc8jnQCxQYeu55ZpxTCByF3",
  "key1": "4REULvYFqUoxD4ABp9hegaZuZ1d4Wj8gToWzyFrecekFZzCdkwC2YxX7X5cjJEV8fBhCHFPMXhUjjEwJsd5J3m9j",
  "key2": "352RfzbFS6kn7ugLP5F9eTVmcHGQstwarUa8r6oiJALc6aAUo5u8KMBt7P2TACNomB6dzi9rMRwkytfdNXGTqAmY",
  "key3": "41QSrMcwWULrvJMSnjvYyeMPhQ9dVEKzimt1poUTVByjUeVKXngpieYVXbRdDNytRdQ9sLtbee48rGJkcpzzCo6S",
  "key4": "42aQCqvSnjdDZF12UAvE6DuJE7bSiTQjUX69vQUY3waH1cMRrc5biMs8hDmviPoCsNXurqeC5wkwQ9N4JrgMX8Cx",
  "key5": "CakSracR3DXwvR8XViu3Mruu8BbtyEZDg5Ft8vLdHsatHm6VwJejYXdGEksHx9A1ghzK1i6ZBW195k98LH5xGhM",
  "key6": "2FrSistVuvijnkwFQjzybeMBoXfiS2RHoK3n3NqwHPDvXMxR8pSYXHmWbyTRPppfsDDhsA9rUccFKSg8aKXtuDmJ",
  "key7": "j9kmt2UdY6puj2psUjoDBzXUPf7dVZM22Ma7fqqNCQfc4fcoRzMAtmFa5djzdUbE6LUzfyBV1AW4N9gbLD9kriF",
  "key8": "5Y4eNZPNxnxn2bkfgVMxNQc7ewUBtALZm71n7UF2VVhRfmqDEBGTktme3LmbYRwU1HVNNAT6EwiyeV1yQCDP9fSA",
  "key9": "PBTKvTsc8udrsmB7v2oLkAUxxQdt7gXqarGQqEiVAC4DHJPDemJEKU4Xpj7m2MeMWi19Ax7FrctMvHJjQ8A7FAW",
  "key10": "2k9UugsH9KEtBdRAFc7Lkr9c3NQG3HWEXjBcNhboNHgcxbiXkaXeiw4Y6iCmqPBconxFw8eR5TNhU1a5Q2ums5L6",
  "key11": "Fj47iGQm7NRaR8ycUGSXPbNYrt6X4Eu5AwJZKe1eAKobeWikaohnZNQQQP67SD7YctAdvsWP8UqBK3EsuJyTyjL",
  "key12": "3BcTBYULkTnN6GvtnjUbmTJmKbbJdQbcDJ6eqeR4qra6fSt97z7nXeVP8DB4u5Jtv5AE4jSnBXoagC4QDLRr9Lh6",
  "key13": "5LT9XGnpvozG8qrSikejywjvyFruwDAhZw4Gzwx6krbyfgPnayuozx2E86XBkikK9SQ2pxEsLC51MNS14jKMPW12",
  "key14": "WhwP2m6nwLrE8aGhCgyTCv1uScG7Ayawb3PFxtx55dt7vuMBRDvrmNs42pLQzwYSSBFZd4iEGpTHZWNy1eCiJ7n",
  "key15": "2UmcgxPSpfVCS4JbBsgW1hUK52MDxgTR7mDxsj4dtkdDeVNuwjse5dsWi3QQ6V1vKhKRs9BTypmiJMc42roB3VuU",
  "key16": "5cpBUsbdcZQWk8i83WUk8Vqs8tq1JuhhCVvguEHGEJXfYwXZdEjubKMz5Qro6TeKHMzA8tQizeooLJxP8pgJaa85",
  "key17": "5AeNrCsaKWEiBeJps8bXDv2WnqpXwVJwmxjmX4PRBuoSfDRom1Bn65Av2YZWaKckHWoESeXCpCqV2JjQY3W1RiZS",
  "key18": "a3qE3r5Wfxmz7U7aRfrXfNcbas7fmdmEewbqXCupbfbmzRt6PtAYNtja3fSrt3mi7HLk11oRHzrpCmCnHa6L9v6",
  "key19": "3nzzTtnQpR7a5n2sAiVb16MgYay1bp3cDHj1kKdADJbvfiggDLdbRvWj22CW8FQMp1YpTPNPwPQUhio43htdQair",
  "key20": "2M8WHxrzcDySKaphqvp9C7h7g2FoKKQChcPix6wj9kpGA9ozmssCR2Tcyrm6sSMS2iag5Xvatgbj6N2f5pFk8fH7",
  "key21": "ooeooCGB6u8CmKY5YXcC2dzad2JaS4G6SxkoP9rctkTdWkhkrQ3GF9s1UysprAtZGxsrcHvisJ5dZQTt9iWTnsD",
  "key22": "4sBeeUAQZ4ogVr4j1BdAABPeB14hXQ2ivbPJfdkQgTRDoYYNcjKgnkzXXaKNpVdfUvXyLHcd92rVQPVktcnUacM4",
  "key23": "5tNfBbU6qpNMC4tDNXU6vYSW6fjvXXEQXQDeMfypJmpciN79sZZDHA5tsezaPbXy3EU5TiTfKpBoF2HNKH2Kb8oD",
  "key24": "4aZvd3uYhTWqmEmTKCwvTXHH6BmRnpSjsJ1pRb2XEttH3WDBT8uHLxNTJrAkTSFpvqbX8CnQwsXhN431NdNc7qR9",
  "key25": "275i3PPfxLzzWU9uFFTvvupoeDFKaxxpeMgAM3wqWtPpURzv8q7kZxQ2NP35McTkJcJobR9rx7jvg1bkUXBmUj6W",
  "key26": "2m7UHeabpDWyXzkFiakt7gsDNMrk9RpM3NP9niXWtYdYKUPBih63TfxkyWaogRU3GJEZQEbqUCh6ijQwFZDSMCNJ"
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
