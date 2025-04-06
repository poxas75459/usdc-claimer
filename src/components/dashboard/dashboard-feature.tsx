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
    "57yZhueGFVeHvhaEyLFKvztnvKN74WfcJA4KUH2tnsNBv19MgitbShZJdgHUcYteFiAPBR289JZnyJZbTiHKXTiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mdrfjo3eFWqBK1cJtsNJhK98u73weQfDrJTMg5UCYvswqSGcF5zXxxC3aqQemhyyLBsSsZeKLUUT7cBnhWxDezb",
  "key1": "3QeuBd7FvdLXKApdpKq3AF1nB42rtpM4kvJQQJRhcZPPasBSH59QquR4VYQzq5FTfkRTuonuuJXVRTv8zC61cdXg",
  "key2": "4JeFzabdwDPqPtSkEuoHzt2NoCq4c1vKaCq8r9KBG2qRTugbZgEDa3CbbN4KLPNaUeXQCCXmgf6xHrW4nBTD3Vz3",
  "key3": "247dPBHqVNTsPzqHzGuaHdPhPo8AcdJwSUHfJmGa6ckViUCYkq2JHtwJhPuaV9LafP2GMNS8ALuU2hsyL2YoHakV",
  "key4": "5ceNLT2jmShBJVijy9bBMkGSAMquebPDfP1UErVekiYV2zx8dJwYMSPCBB2pXvZaHioDjSRH56GeXNYBzpcjP4EP",
  "key5": "4KySuRuZhJxHLWAhvwbbtw4J3rNrVUGZVQUxRbMZXeUwPai5PRHKjHJcKycmkwEGa5Avc3vm3k86zo1B57xJcQw8",
  "key6": "4AuPdfJgtNVQ4ifzreFsQcHmE99yquvGzMHtwyqNCDaeAefeizccXvt2jkheB5oeKcvmAKGq6NpMCPyMSh1urfXC",
  "key7": "3j9EFyyxrC8NxrAcn2SgPWvQsqPbVZUwxD6Xzgi9Cwh7GS41CnS1uj8X5cJeaogLmFsMdHeiJRv7KUyYNAuUtH6m",
  "key8": "4GAZoqSqzWAs7X8ZByAxokpjLPyNcK33gFeyTwGuUfibhRRsb616j58LNLhy3B6hU5jQ1YGu8j1XRWe3Lqd3LsMD",
  "key9": "2fys8mM5FXWWomfQY3ri1ahAozzqwf44Sew3ZjfeMUUGUs3YQHSLAAqY5bzmQw3Awqw1gU7bKWTctjuTPNNXj9LF",
  "key10": "4vC2zzLngBqqt2EXGBCZupoiwwkK18qx17Uw957n83Jm7KeiRfPuMbgKFAazg5TxGnfguGpopFHHkfTr31nVaRQn",
  "key11": "LDM5fQxMcfb3zDNmav8hRBTDJ7482CJwnsHA9s9ca6Udpto2FeBuspRHWBrn6UPpDkq6FHA8yRpzk8PTaH5axzr",
  "key12": "4SAvuwtwUEMKc2CzTE8rJeh63krYRkbrhDUGSWwhmZtBNtWmwcpSMRK5DcmP6qYiaowJgzummadqnZ2K4VHxwqRT",
  "key13": "67994Lt6xLxdawuV6r41Ui1EAvhbPYnEArCn623dzsjNVwqpJPuzKDX2zvpoyoUbWarBS7oC4pp2N8NLpga5cg3Y",
  "key14": "66gxy4wLMLaRX2T3CNqPvWXatBmjZPFzzonuGecgV2cayEr6JsovfhkEwRdqwMywzF6PoSUPJPbZSkXcfbhE2Hvg",
  "key15": "2i267opLjCFA1365dgHnVK4GGVi6PQcmYZ1f31ESH48H1UePQxSDCfJvzmp2gf8UWRi5yjpXR7xMCyKVV3zfvvy",
  "key16": "3LvSEPk9kEn59dZhFUxf9B8zoX5pkzaFUgkrsBCwAPE1qs3aAyv4pHiLq3Pb8DF4QxAkj1nU4s5NMHNnL7c6L56V",
  "key17": "3aKNfs4ZyLotmnkLbyADZX62XEj9vPvLAgrPH7b7yhHvpqFNP6b1tktvGqCUYVKg9TnHbhyXj9oPHLCnBQ41Bv52",
  "key18": "3E5ndqPJGxZ3DkMMrWWZea3d1gWcHqhrHpisTF5fVURmCqBZY3j2J3nmg7Jiim8uPUw4sFbh2Dc4c35Ee3QFExHC",
  "key19": "23LUXPYwsZSk4BfoyDgiDxYeGhyuVxJoyK6AjjyUGwbYWQSqFWUhc7ygBp9xE9W8mu2LvKDgt39bjxso7fjkDURx",
  "key20": "jnNr5LncNcDPcFPrtupwFWAbiKEavZZq1RZn2ydYf364dFoJMsW3vd1BwVcKG4tcDP6XDBysQeZBUU5J9sC7S86",
  "key21": "3RyeqEjW4SBXRvpsvvaiCFJQweKWyfCbKRCRRgBSnk1fc7jmm2BMuqr8ekbvoiLeTTDg4zLfjSxG4k832HoLkXe4",
  "key22": "3zNfGVjgJyqcBsuXbN7hHPkoUJhZv1UHEyZJgJPBcwKFZSzWw14RrFps2n6AQPyrHdteNTkSPkernFopAc87G4pB",
  "key23": "5duaLXRJe27q5cWpeDyUxnjxMr9uDwH3YRhbP7kTTU1ht2ye1ARZqQEDN8Dc6VN3B1qPGjKZ2puk2p15pc2KKf84",
  "key24": "3Hcf6MJ6wHdaen62WXkHdnxEroQCpk99dgzKBHpPjcuhaqAzrHz888SFYrCMjEtMuCfFfbpfGDxT1xxr1obXqKU8",
  "key25": "2REPgjbQJxAEekFFh7X7pCLffCjzn2SCA7MtDJhHa46EPZVxqBY8YostWCJfwtmF9JRzryM7i3Hmcmmb2f2o7rKo",
  "key26": "36tnT5iL43xK46quDqYdXJVVpqLNwwA8FfuugmG3mDV4izvbHRwk1wi62Gq7fHoNqMQhSbLGT1UErXdNSqBZpecH"
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
