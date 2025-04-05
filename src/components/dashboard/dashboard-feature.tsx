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
    "2HXXCwbNoDifYrhw3BdpRrcFue3iWKv44XkXweqUnMYP9UUnCHhskyrrqmkY5ZM5NmpgDs5YD292o5pEHAvxnwyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39fFvgmDTic4eDMW1TC3HCK5pJw4ALZzqCd3ZtqjvhTQYMBoDY7LsMC7me2VYdLQurbrG1QTsJBxVpT8Vt8PRGk4",
  "key1": "2QUS5C5vP779qHut5KXG6N3ptZwGQpyZpAnihNiZMuEBfyYWYsCr2rMqcaaYM24EnMNBGMJrhhRbVFg6v1zRrxJa",
  "key2": "2tcxn8U6ty4MhnSGCmvJCRyaepmWth5NKSPHxXMHNz2AzX3SceYdGrB1VmMz1Grst9CbDYzVj1HgF7USfB8eWFDM",
  "key3": "4cJx8HXucFr8NqJRtdxk3bF7VXhK4r3U4j13J5NPMg7cxn7G4hUZwQBxNtgmc2HhFzkyeod4NHFoKv3r8HtGe9XA",
  "key4": "46uzMecWEvSHB53xRYbXF37KsjKgMXBJV7Y6VZva91C2eqX8qTgpdRbobsWU7EFkWe786iwyAsvoQF4XniTaMbBW",
  "key5": "5XSAt1bBQ1kgZzFQV2FHPsvUi88n88RoR11h2kSCjLAtxzVGUwP3wgjLBRX3cNgPqnAn2EZ186xJRq2sZW2URbPh",
  "key6": "3wb8a7wh4F8Dn3Sb5kuGejRnCaTk6EafXDn39pGk1q1SDYba3FcCJNwuRKZxYUYAwV9ZbYreYTbWJopv72aXzYYs",
  "key7": "5XXqSXyESDb2oZ2JqjzfdptJhNws1TSdV6gfdBpthwgBunnrzEPbX9Kya5TC9mNhUGpZYBrWf4WkVqzXSk874nLG",
  "key8": "64unee4XVpggXo7GZF7TL3CqGVNgNbokyHbVJdRtoB6W8ybN6KHFrKg3ix5SeukJs7ezhnr2rfQsLBcvoBiZh84E",
  "key9": "5hN4AgtNJRfKgXfUQq4cmFWG79y7mrZjkcjHAnjp6jWxnsof2ZdmC6kemxa6pqs1sbpMy9SRh7s4wQkjszLyXg39",
  "key10": "5FBxnVw6n23xSU4yQG1NvAoGhU3cjxZkTxWkR3zGmqVTsVPJPbNUXgddopnzJzNWRjmK4pLxqm4bxqHtir3DRpRg",
  "key11": "2GDvHgcmEDZfXJ3HYPA4nvmUS2L3XK5wRgZYNeqEtJffk238oAv14vDgPsJscGRcpqtytoxcbPznVunxVTCSvLmF",
  "key12": "hPWXc1uEKQjvw2RfHb6U4Fq4eYTEc9xGrK4SWVdouBCQad2PG4remqkU7nHRU5ftzGfofmse6nn4SVDSTQgkA3M",
  "key13": "5qiuEKUBdgAhaEM17J7tonb6WHmm1XTNVA3cBrByzTsUbnz5FcsTMR5VYotfXmGwbE8ovGwcGLjADWXLwGt77wKx",
  "key14": "5AWrPgp3LzmgJQ3NkBXHgVNTU1MA5PiA2rwV2aTyGaACgmX595v6GJcd13qKdAtNry2KZWYcHLrFaXjqpQAnDY99",
  "key15": "29zYFqK3nkHZaSWh6F9GqxHACK1Nr8HQsMb8sQDLhvcPznvaF2pMM8gMYUoU9769h5UgnXiETtzqxvjeb4CPsqHC",
  "key16": "24C9opf6kgNju8kzzswjtu8b9hyJr2dppEah5nXWdNWFV5GPcjq2zsD4szXHhYBGtsYMcPpj7Z1kKZyPPTgcHmSp",
  "key17": "HHqTjWB5gwrSLfPNjx1iEovsrBjpdqJLsmx3yv35VPw5FsfuTRi53ShVWTXs71WTpLLE2FajBjtM3oXLCPo5GMc",
  "key18": "5D38bZg3cRzVtSeSwcYDtJErDXy78MptdYp9FPfA7sx7pDBtqywriWx2jJ3SvHLkhApLMVTTJnkPmtkP2G5Bpa39",
  "key19": "RPM6ZKCUxHp8oD7uc9U7rGrcdLM5pEpfGRN7Hd4LvWme4NrvmqkhXZ4P8a148Mf8efw3gxm4UMhs7EHPSj22Any",
  "key20": "3h3fFXEYfNfQXjGZhtfSHmvZWTwhYbDKq6Weh2cDo53dGH3Mrqf7wZxzFJoNuoRR4AtqVa7mdVJSX9aUXw4ySQv4",
  "key21": "D2ti5J6rE3XDLKguSWcYSZbytkFSPwbFWTMjR2RGrtY3Rb2RAnFbjS3tRuvRWCie7oTxtJEPmqNiEmrzt6DbghP",
  "key22": "3q5CMvAUVJfJ859DDP8XpsjPcgSiB77otkP5FiAsMhnnfN4P1px8Q9prQLyiwUgJwGpGq8mHkY17Awn4jxgwnirJ",
  "key23": "518Hg3iVNAfmk41B17NTfBfinYKskshzxeRbwzNhBoL4mykeN1PwJxZuTRre61Djawtjci3R5veAmPzn3KY8V3Uf",
  "key24": "2SMsMgJCYgaeCyGDZMNqU1gHmDsq3ZS4EcEpCtEZouiteXfMk9F8rW3j7vp71xNLBfPx1oYdab5dohgYjrHp6wJ",
  "key25": "3wpEfV4sdjNuupzcbLyNJmtzP5zKqPqScbZrat5hNh4NCVMmdkXnu2VFCnzPUtwvY2nMTGhSdbwmPkx83XpaRwHf",
  "key26": "3xYTSX3pptym88NCLQA8iuoGJkgnroyhe1RdqukiRc1n65XAKk61Y9tXz1Qaaj757cyzg7aXQT9WbuTW4g7TFUks"
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
