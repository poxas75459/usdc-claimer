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
    "2MryUsXDHiJognDQaqM3jT6S2DbkjuKBXr67v88tfptB56hSu4PywTH6iETmrCucKy4vA96BtwLZgvA8xg6BdQLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dqQDXKgFPfuW4a2rzYXDwUfKM6EuJVQ3LXquMCuLST2hEqy4DpveCvQpSdgo1dgAgE1zAELbzqK8PkYSrh2eFPR",
  "key1": "2hDmBXjXGsa77fE5i7b1nZZhSHYLrA3EKCTuqoKQqTGL7eCvxrwciNrQsHy23JqUqCpEt3nLyLJHFpU462S39mW",
  "key2": "CXKNvruBANANAgYQdKJQYnpJ4nqGpPh57Tiw6m7ieuXpeYJ1dBBcopdCgVitSFUU9gBkKXw9cj4UjFYP4LLkep2",
  "key3": "4mmhrAzZQukJ2yHWvzLHepunDRbodYh5suXJFsNRxhyA2NbLmAtsjkC2g1QvuaMRvmS5CsjJUsZKUZpPx5rnqGLS",
  "key4": "3bcHL2ZtfQBM3nR9inkrD8GhK6yBWgLBsX7daLJrpfRMGbquodtMwhuha3QryMf95t6otap85ZCs57jBarGbfgdp",
  "key5": "3rVVwBWS7h1qg4Vqd3m54CRYCeJziS56ry2Vvi8ppsL276xEK8YKYKBEfUyfCfwaz852r3PVVcXVZzc7zms2F3Er",
  "key6": "3xv8BV6NndRzKj6z7NuaW3FkF2xpz1E9eUJeJ1wa7516YHLD4gfnsUqbdZracXFvGU7npnY5Va1eLp9cuSPHpnR",
  "key7": "9oenYFJLPimcGTaxFP3C87JT6TMnJeCdriee4oG67neiUe3zVQq4MhRw3tjiDtTskvP7WUMrQEwk6UokJDmGKFj",
  "key8": "4VmkRYEDRopXX3wdDgr42qLEAhqf7RZ2xTsyTTKySQrUthtknbdGeXNSDeD6nd5jTnUbR6amiLafoE7B7sS7XUh4",
  "key9": "44eco1J97J5So9wusWRmpUmC3UUvsLUHt5Gf3Lmo1LeufYtrQ4GCAFwXEjQcKjpiPjBtxZtkF7oNeGSm5yhG4tVw",
  "key10": "msd6YshFti6rTpyKLenUSjYN2bDJUhAMSE46kJ2aP42dVsEtBmaJ3s7m2PhRWGJUSVNBfcdhuinGvtC6HPsJyzx",
  "key11": "3n4LYRiexrW17iHY2tutPP2v9aCmPuHZY9JcFurcS5nWRGNPySugbnpwqu418G9nKxq1A2RQz2YtckYbGe2rsSk8",
  "key12": "2LX4jBSNqYwM9fJ1xgnaFk9jxZPHzD1WrhHz2KywCrM9hMfQSSpReRQ7xRvGDubLTk9vixhYtqivCLUbAMqjKQn4",
  "key13": "4MWEwbD9uUDxeKX1QNXP6tV4eiH6fU1zadxUpMYW41xfDLCR2feD6ckv2vrVnrVEFrcD5H9BB3YqhHfHA7mf1xjt",
  "key14": "9cnShiSW6JgpJJB9UyZFNkRGJPoybFo9FnVtPDyFwWLc6VyreM1dZK212JVPniGGvHuKHgkL4AeYkV5Sudfxkrs",
  "key15": "5pTvhZMuwmWg5PAVc59X27fQ3A54SSuoXbvDvjtN8PcKYEGg3tS5C2MDqJ6dHDthrmSGyhr72ai1m7wJMrahJS2w",
  "key16": "2633qc4VAi58JYdbhhVZM697XiaRQZCPLsgJDShtTmzTuWv7LNmBJqe1fUnyyB715m5gK46HkGXAn35rWiy4P6HW",
  "key17": "2BCmCfmePk4dUH2nspWDNWuZPeuiPKUmAtGE5hbDc7jX8ebPCCzqyb4EEedQgwBmnDKqZzPFhoioahTgkw4rfZ29",
  "key18": "4GSgqpa8LUdBYhdLhMPnf78G911UDiJWZEL5fuxQppJLjvTumLEqja83T7eVzvQo2z9YAPf7Z2zgCqBt83jNQgab",
  "key19": "4geNXtiYfbt5g8SU5jcLAR67y4kpXZBs6NTyDkBvBrWZ4W5zwg5Fhq7pk7SU3wd4dSxj3HqN312fU9z5yTqX6KGE",
  "key20": "MJBTEsr8Ppg2o9HawccVaiSuKW7KvVUXVNHo4eAPkeFz51chrtZzuwfCR6txZKnLuzTCy4dURTRfomJxGwcEfDo",
  "key21": "JubuLiGcffwJdyvwJiK1Q7W8rpv8nqFoSR3b1KEvgAhtJUyZcVo1GoUHtR8H2FS3vARoWDTmVVb19mKQWaFR2Qi",
  "key22": "5rTk1Z2TNCEnTDLkDrGJMo4cePaGYLUBMuHqeyuz17Qkh7DuN5K2UhTHj2ESqEgxTQf468ozpogR2oeVUFjqSjjN",
  "key23": "2hriM1qRdg5CAAgUkQRdJGht41cAYzN1Kreniguqd16qTjEvBU5iogUaHthhBZRsQ5dzcTeGACNpx5fnMpYn6j93",
  "key24": "2a6Pi2BDWNGh2KHJRDjsDPciS8b5EV3VKLia2nFLL9zi8UqYwjKUvjzf5NeR6KeDG6bzw1RHid34Gm1EMafNCbsW",
  "key25": "4Uvnq5EqY9N5zTSHFACaadrL65TFgwWA4yzSjAZCkS9T86EXBRzP27XjS81fXeoPy2NBFUgVmr68tWeAucZaobr7",
  "key26": "5fWh4JnnDLSojwN2oenTdzxCnMD9e5iHH9y8Lp5vW92oPMuAFD9MLUXoNf82LpjfkUJJGqG2Q4at9eFDfx1BbSpZ",
  "key27": "61onNqkkJEkYUQGyqtb9uFUmGDhzuac81CXHw3zmqDqK6q9jYfFmcrrnG88h9dyWKmws2CbZtCxK6P5J7VSfFKJN",
  "key28": "4smeZNrh39udi8bZ99aeqHVVbL1ni9cnjzYAAttvybGyRPXGhiTNuMVNh75feJGjcxwv5ruf4dp1RKwp9EZEmQLr",
  "key29": "2MzUbBUqFVLqmRwjXszNAiZPtqqPNQ1DnKxWLnrWNjseSMUQqLYgzpoQKuF9ncUhzigy3nqz7QEjd6XDHVyyph9f",
  "key30": "2mLPsMFbn8eUZ6upR2FFXgvvVZGcQZnugAmkNFLxkNPzxUBrL8383cEtxbj9ffFRwqAzdpLSvstmQr2yXLDFAXf8",
  "key31": "3EVzr35mkaqsHZrk1u7bCP2yMR3dQWayN2Xm4VzBfhP4WpgcmTjnnyGXUJcFsKygqKGsXB1mftXPDnjiwaqfCkcU",
  "key32": "zV9H8BzaRjkkSyQ88WBjsijjx3TjbXtkDg7Q5Uqs7C7T6J9rVhSogz9ZFxH8vsRrniUXGn6uGEU5CDL2tDuRWBy",
  "key33": "5aNzwVC9vmZ9ktsyarGPmTuJ2DhZmZqZmV1pfxhPaxNTLS2qgtWVervUZPfRKVPyRDxZqtm38MSDRGKELe374j17",
  "key34": "47hKuqEHA8Sk3SLYteBwLcVs2wX6b3oNFEoAAJxQFT8QJpQRx44kayGcEzwGAcYQuNTCKu6vH3iRTkk7RH5goGxt",
  "key35": "53fmpNGB46b8wkdo6NdcsWVxLbWMJsccCQ74Wvj6LRSBvxrU8A4H9QsbAoCJJxYb9eQu5of5KcQhCgGPMfR4YZdF",
  "key36": "4nbg9ejYG1S2BYbpurKn1s4iQ5jtHPvbEJkvzi2EhPyt3TtM8sP17koz52bYj6DXswprHCVXj7pspJ9UR5WSYWHR",
  "key37": "RuA3gFvYqeUjEvDBpgucTpUP63Bi9Ms3C3Ah63BhJmK93fxkgBRG3qLbaAHUpHhkCy8hEoi2MafoxaXrXE96ku1",
  "key38": "5suPpe5uGCT3TP1y1UPqKnyNf73tKRqgm85SUr8i657qNZRS3oHoWd1fsFgjUJkT2Sd99QZz5YLausrQa4sr56iy",
  "key39": "3eSvsLtk1aC5PceNEgr554WTuXHHkrQTsN5NSYt8cZBPj7a23DZAs6vdbNAhisphi1MRZspJDTRqjCUK3U9uLjXx",
  "key40": "2LALwaPemy7F7sKanQDReMjHxEf2ktpy9WrpzTjL1ANBqQbpAtykkFYGfacthepiAQZ5F7J4AUqABU4o9P21dcgb",
  "key41": "5kVyp9XMt57YaUfwd6yxfGHrCcVc33uRkRwnFRDK75DYpyvn1o9dD3Eo1ur115mBJiPd44bpRQ8dJ2Hns7gvXH5E",
  "key42": "3XQo54q3aTYg5eRpWiSHbmUcLtUTdRN8u5kCDecuZAr8J1xvQvDFvWVSAwY3kYSnRUUk8Tq7s4SDYRcZb11M3KzV",
  "key43": "3VrBWViNv3qrUCciXpqHpxxijTGGwQ3CJpLBGh33qDKDmC6cMNJwEj2TYKBUHa1aajbRExxaza98XYFK4hrD9SZZ",
  "key44": "gijPGUWkqianZ1US19FhxC8p3RePo1CuSmqzfeDLDz7FbZqNFUAUv8vYHziesJJVvgEJ3NaYVdzex1EvpJ7cKfZ",
  "key45": "3o7MYwPGiorvFReH4faxoErHmw278Q2MpCHr1YVpUJ1WK3VgTs6ZpPG9xfiGV9hAWkcbAaxcdLwxDTPxm836T7gf",
  "key46": "4bzDD4F5aqzDPcE1sr9LkVVwQmU3j1KcWUgwVuGfXxTSpFCCLsQKg6SAHd8cmVxmm5bBLWV4fiyej9UiLM5DB6T4"
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
