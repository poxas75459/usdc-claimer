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
    "5QYVnyv8UsrJmHR6VzwZH8Ny1ZAKXgLDTdt4tHXU9ReZtp5ooEyqNx3X5WrT2ooLvwV3TTPH2B3LAwYEPFQzn2sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9FsVgKpbEtiSGR7vm5pRTRHoJgief1qvL8Z97jWeevUjC9MP6gPdYhvetcYUBwBKoMKazKeLKGBF5yyL7uBUX6",
  "key1": "2dKzqM8GoFA2iAX8C4fRwaTJjgiTKTyo82qxF1dqRB98D9ZgeFWahUbUiLGNF8Q9hX9BYbxzRmfYjuNa4tHfHdmt",
  "key2": "2MGYJ6s7WDEd3gUyoEKNJFwjAyvWNKvfHoxoKKGUHYNn2UNUHFCkhogerGxypFxp7Gpsv3JJx5ZMp9NbZgeLjekr",
  "key3": "4TfuBzHVcfmJgJwdzywCvQVqyvSscQ2PDvUcwjxuF3XB7MqjtA5TR2TawqJECFSc3ofafPv5myocmGprCse8GEm5",
  "key4": "ssxjGwPLXBE71LVgq6CbDJ6g4RqZvojFCMXUEYAZNjgLQcAxwmxjDMnpEShZMDhoxJ8n3d49QtRYVpBum9j7NVC",
  "key5": "3TvKYfE7ASiMYFLrSmXhyrjqLj9bgHBtLstVpq6ePFQG1gP1kDcx2F5q6cvq5pnBgiieUUvD5CMTVXeg4Vzx3uJZ",
  "key6": "4Sy961oe8qvsTtziZLgZGay427pH83yDXZsfWQAHSngv68t5NyreeAMutJpkPGhHTitzrJV2QBaTFXE1QFsLTQGP",
  "key7": "cs2LBXEvJibsy4HHTcVyfFo39DcepwLxXZNfgii6H7Mn2WywW3XPnkeFBtB9kwjHptFvHcDGBdy4mDhgquooq4i",
  "key8": "4ihCgKh4fJoitxLjbxwPmgHswBGBfxDSfeRoqN9AKUfrFPqZpgmzExau7wLGoYwSbTjYewmJnhbihuPgM2SALZNA",
  "key9": "64cJUJ4Ps29C6qGYH3bvEcE5zJYYTkTdCinaU8e19UNquVYwWhvMaNrMtSB4KuVBBNWmgxKMTZ2VvSo3LJRM7i1u",
  "key10": "43ybE4ZoQvs8eJrbRZQamMdGo3DSjeN8ErM1fGqmvqWCdzVhY3zV7fxcwiFKrDWEzqchygfRDhuq2QaXhMrs71Qi",
  "key11": "2ASKHyTQqK8U2KgccCLsoRPwMGfo81pcrNHukdWJTBoNDuvbVfazaMPauAJUNT95qsxKdrn5rrRUPno8jPZgoGfa",
  "key12": "3MSCbTxtz7KcyGzBJb2VXGAHFfHxAB4BXydTwAeozqHrWjqZ4TuBgjbdwDUCuQdaaju9uNtn2k7NJP1Ft2fxbTUu",
  "key13": "3Dbr7DmYuRtsXaTTAsg4hueyfz3qNFVfnMPSHh7AgHRpBQqbeRejCN6WfZf3pgSD8PdgpqXTzFMxhjVJF6giPf8a",
  "key14": "5JKSmvmGPwgXYMjKR3qTnsabo6HhKKCRXQ4SE7bZdJa6Mqe3oEXetKP2QLYv4SX9HehvqU9CwyLFgk1ggnGiioQu",
  "key15": "jZxAh5pYgNNuEtSLd4trhVMPTMCsRjSAhTd9c6VzhA1d9FXHVprTUy7GCFeZsNRrXGzUsVcoC6unkt7iwy8gosp",
  "key16": "2JdqzxVg9ciyrdxDGuUvYNV2ZW9etn9nXJ4iDkHbLVPUfHTuFBW4fDRqRdTdWAFzHkAcRnwvZuXPRG1tHXS4RMaB",
  "key17": "2MG4UNfyS2WSm76vup8u1vj1jXm8GeB8wHAD5eViHYLaFK3afBMvtUMtPa5A5cYddohMR6SNxekHD3wt776Dy3Pb",
  "key18": "3cEx2cQoh3GfKTaMezb4mpAqS2ZQtYrBdfRRGS4LG4T2c6NBAGhwmcDCvEEtiYJYHdGX7DZEHFBfNu3226EHrg7B",
  "key19": "4fPfN5Lg9C9Coznhv2RqhRAdcxU7X1wp6SquhuhN2YXCEheowKN7ue4L6JTSxrdeuFQHsEttdEiyMkPj32z6Ksgd",
  "key20": "5XErsdN9ELYhWDTzi1yeAKoETcG14B6RGR6JgBfJynAiHCCDH6yTjQLM1PkJMxTQhgGB567XshBLAxirHnUAKGGN",
  "key21": "3VjgBx3XXBjBxzHs1Yqqa112BbuWgWbnuckLz17TSgx26Z4v8iDdNaRawSyjdrWGC2aXitbm6JtLhSW5Bxwf51X3",
  "key22": "47bFRiPWKLxp1PyoMFp3hx13zcD2F9UQFdvf2QXpJerYvPT6Rc4UT69uy3MfvJhTwQcE3BHkSwj9Ah8gqXHDCsLd",
  "key23": "gTHbfGLDEd9y9P2FSyDF4nYgMDfgYTvHHxZCWrHuUXgJxAwLAZ8sfX8cWFYzUkmLSBG3YFjodsstBXbDTdnRtKx",
  "key24": "L3KHpe1KGqXUWdTNb9sspnoYw4yN1q3pzDS9v6D9qHQ9AEhYamLRfWUhGuAmhAmWEDQLmwa8rmWmPaMUDXFz6pD"
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
