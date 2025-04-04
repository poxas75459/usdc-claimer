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
    "3BkaTxHz5M4bnyChu3ZXgj5S866WesaTAYEVytajsnqVgUgYKWJSwEExud2p3P7a8JqifTc5y2YHaj9gEt56efW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFadA2CTSYtSJQJYsCAzCssJdvHg63FhYUvSzRU3nzAVVfMSm4tsHc2psZapz6VawLjbtBisTXbeNPMvGXujKce",
  "key1": "4UrQL8hwnYsbMPPRW2RgBeErwnWEcyAcEpQ6iStdteMCc4Bz4TxRhLQKzd8Wimnsqz7ch92UbeSPSFYgGGvqeCYt",
  "key2": "3aLw8AY5rZS2dDDfRXcvYWsVKME7aMdqW26kUDrUBTJ5t2D3mWr2JRApNM9KYVHSE9ZoCTp5AgmWkp4anN1mG7po",
  "key3": "2zBt6b3CiaahGaakLBXkxpnbDJFuMNPkR16wCBNhudKNjizgG2jiea6NxvTokpkQiSa3SRvzCMRwooXDcKnj2S6m",
  "key4": "66kZEKhRvbApHE4W2SqavWCFzZA3iHuFYzwdd1MuNPPVXvDpjNfbnyiyaYbSwMQD4q5fYUV89b5Hx8SLvd4e8iw1",
  "key5": "2KABCd5QDmcdyXcyW5JvxEYBDZoUndn1xZ5vcvEun42D2UrhCigt55xHr6B3xUABpDT2ogUmWUy12v4XmZx2fvPM",
  "key6": "5zPhFmFzA25vp7UNZqisxwaSsKw6YDgiGWQeUV4h8H15cc7jfAv41hbi5cW4dFdtEg3q9Lmp9MmgB593qsj2yAnr",
  "key7": "4XBaHLwrdvzmwkwdWkzYgAgBWYtwTZHjVJL9MXBnYrxSZBThSwDnNcc9CW3r8xPe88fhuPuexP6LV2YvQHSY2FNh",
  "key8": "3zwLsYoLez8Lz15S7SZsxqHEBrk78PUHo8HxCH4jtWiEt3taQggtR7d9ASoWU3kW13so33sVMTUkr8TFKVn4EcLb",
  "key9": "3NPbxXe79Wrr1MGAuVQjGfSmTxVu24na4Ujxrduvw138E5zGo3LLVwrViYkzGQ7wzP5gLHva3caG4zNACQrhc1J9",
  "key10": "FaBZGXAzQgDPtGKxN4jezGEX9i1p34pLYHk1FJMoJ2QnkSUEjY4eBEAEadcGWt4g1mKsKvdXesSzvwvTiz1LXS9",
  "key11": "5Z5w2y4r8sN3ZZJeNtsov267cDXu6ArUmKWrKrDJ67bbPbyUc61LB4ZMxHT5rUMwM7NkDwhBPgKHkKwUBDg7VdDN",
  "key12": "3JasjnCfrJjFSxg1Umgyo2kFmZJZd1igHHr3vMD1oo658pSkarm3Zb8ynbL5hUxPiYJytKis1EH7NZML4WPS4Nrq",
  "key13": "2c7JCJhRZUFWYLdDQxaDWHdEpcxv8e59FqSX6ViFabx5Pcw7dRCvnVLSMc56z1M77WVVsij6RwZvSY5TMuB5h1ur",
  "key14": "61SnyUZbDsjUeYyVSiffunyVCwTXMXkjTKCJvKL3xzSmxTXq7pMvzLxJnsTsVATv9VBcxkRDWQBtkq9135KUmaXD",
  "key15": "vdNjScvPouaYEyZVJ8vcJaB9QorhH5opqj3JxX6XNQXm6X5viwMqGg3WdWhr3kPebJVsYZVcR6EFgZH3hfwfEXd",
  "key16": "3hDMySxgSgG1D4XLqMkf7cVFnsYFiL5naSieNqtuDN59FHjwBHVuppMxLXC9Cr5xinUGmzAQ55xxmvijkrS4DeQ1",
  "key17": "3pfsjBMFNA6o7cHzzHLUuuwGZ3LSVQY4QkRv3cXtz26STnUNPWb7g8zqZNBTbCrPWw4iyGMEQRiQLNcgS63zzo4h",
  "key18": "4H9oKsu9vGz2XHFJ93u17dC3CofNXWYBJbb3FA1aoSaupbbFGQpg1QVDejtA7NLxGTQ1wniRmAyzCxpfdcS8oUaH",
  "key19": "GHGR8tKZFYywhgGVPYCEioVuM47FEUfwyKgXQjqs9mSqJXbD152UzuoUKDwUpUyBAqF58KRfDW4r5VaXMPCwfDX",
  "key20": "m93mebd5uRd2F6H2dF2yGwAwtMuLLFz68Rvm2MrF82cP1fFD3UPLFgZgutH4Yb9FSkMqknitWVAhdyVFsaz3aTL",
  "key21": "pwoD9pJNf46PLJCyoG5f1vWjZdrpcX8dhdZXpVBBHCt6Pvk8JQMcZGmCsmrqZXWm52JUVedFYfeEFzD6pDhiZRW",
  "key22": "28xHTxKLUHvrt4Rdmsn4CCGX1DLqjHzgQH7oGN8F1JNSzuhSdz4wRA2vsVrYkqiADhLMZgk6nebLrxvSKrXmNxp2",
  "key23": "3VqdRorXWL9aANFbnK1BXExFa4Zx2Czecmpzsd9sbmYmBRvhjt9HMvmbPE476LQYMRqVuTiRgidqpKoPPhytnR4Y",
  "key24": "GNERHp9hfdSMPV8uYgtLAVjN2FCGgRbwYFeEqeUAuzCmB3pWRy4WNvsEDAGbtpB4sGcYV58bTv9QZurZs7u2UsM",
  "key25": "2kXbPhNfJNpRZwTNGbtRufQkZ5Lf1tsQx5AHmau7r7bUHUMSECDXDP391vHG33TQTGt8iZvmbVipJsrfxRZ3MB6s",
  "key26": "4UqrypDNRPXGfAmb6Vjh8xhWumo5MK9tFkriPua9RTRWm3cnzBVVaENft3ewXyyrerzg6ZjQz9egnxjdznMeyVPX",
  "key27": "2eyAQLsTnyFfWCm3u7FjLomQu1aNXNApCF3R7dsroCugn7aYGxxVocYpk777KMEFZdyU72ddUbeVqXNzcrS4Xg2q",
  "key28": "4M3oF6VwDrzwP9bdwdM6QbY7boWQfoaXbcyDTC7NAoRyAx4t4zUGNxy2f4RniSsLAaXuvLkaTXexwKjH2z7EgHvR",
  "key29": "27nRKa9Cxu9xWqzvkkLC95R58MBmBoHamDACY52PFqvP5BFzjTJWmDw4oD21vCGgVo93fNfumGemQvNv8LnNrmzm",
  "key30": "5RmiyyDbV4chtGBuieZxvaxGywa78Ko2VsFk2aUagMbVM6GcryYhBnoQTD4Pzyz77W7i3T6XhPsXax8hxvkxjH25",
  "key31": "4TQe51i43N53NCTCHt5BcifkQ7wYiJughuX7MkexdfZJaTDtXeWhNZpefPJbeT4PRnGAJwdFxBi2B2Eb3o8Aift7",
  "key32": "ucrAnRBj8Go8KkMRenuJj28nHnmWxPtyGNNuu6YQ3bkq1ZjrGnLKEXMXH7LXbZw1CxqFgZyVuC3jZ8rszaS51kN",
  "key33": "wG1AXG8D8gkQE3zxQcgtXoyi9qT6FBqnjzHsyPWgGGfD6K7ZDo9Papasrv6kuXxaArqoAhwA22T3j7Nx7ib6Mn8",
  "key34": "43BM4CdUqLq7P6FJKbikZNdapznzwUbdEsYfHguTKxzUJEmakxCpuPUftg6MezTZp2jqECbHXPUeCZ96xi4fmmv4",
  "key35": "2RikLCAxf9y8kRRLJnYEF1YZGdBU1LAUd5WwDbRFZVjxzoGDxqafpYVhMVuZg1FFKzPf7VWuzYsSA4FsMYwx2fi2",
  "key36": "4dpFfFm9ReJwvegeY2n9hPc1RMZrF3Ri9L6p5TteZKGCP6NygfTCKcJhqbAsd3NUYkKnxYssZweRyacTBrmxSX8M"
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
