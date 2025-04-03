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
    "3oQpHqU9uVSafd76wALNr2j7xCTXwUKWsVnDXuAVgsLNM7T6xKEKnUfkpYZdraooFKUng2DVGgZFfLRcJhjcC9wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DApNBL9saDt9cu3fH9poafQUbEHWeZceJiDLRwP9Fd3aNYbpNxLK2UaQsmhJpkppbDKybRM7mwNBYK3Zu2rr2cH",
  "key1": "46wtbPcBBUQVxB2mzFweXAgrEvMi57vzk9gvC6oysLKsWEYnWQRjve29RFcpj5NF68ng6p4Qc4qZf6H3Va12Td9U",
  "key2": "fXH3XZGTW5qUqCTXqXh8GEm8vgVxFQmtG8MCpgwPoQx6Y9ofcQbJUY2dEyYnvHL768RY9kwZD75v36aFfgnZRLo",
  "key3": "fhge9bTecLUXMFE45DQB4RaFXoFfrkPwTTtmGpvzTU69qSqwLKGSJ9nrz6WJr6H3TbPwidHeqz4F884UDzQ36Hc",
  "key4": "4Gr5qToQeDdpE9bsULfFSLhqRcLTnJP97BtNWmifbMrqUgv9hqSGd1WocrLcCjantPwUFqo5yEDvKB5xeGTGP3sq",
  "key5": "5B62ZYtKv1rUV7vWWkiNpW74fi9dbRAraZJuzBh83sHrvENNHDTxkDtVJZG8Z7e8YAqXHmH5TSqiHKZXVEMmQ2DG",
  "key6": "3WswVJaa6RY3wAPKuUaK2mb1HVcpsh6f5zLrAYMzhMAifuqXv6qkJCUczDwtQDKwKQPSCc85i7fH2YdZaFNGnxRf",
  "key7": "xekEybcgbQPwHzrra1kGAWSrRMJJ2RxxkzG84kp95cmGzRqsE8hPRVssA79QmmM21WUcrKSYxPtP6X76vabpYuD",
  "key8": "2diQjYEhr6evT3Bi6Yeit5Naos63RJuneko4WNJSVLSP6vT7K1L8CQmEzmtgnbtR2d6HmAJxLf7Z4TqQ3oGk4FwY",
  "key9": "4JLJMpaeS7KPz8xF6e9f5EGyJcK9iDpgt6co2DfzcVt9sQ4wWrUL8cR924m4HcmDnhZXTy8YSh3dww3eRxJeej9p",
  "key10": "4kFZ6dNDCZkVTi4kGiyYQsbgYymTBYXWQqL44eaauRMDRnDuU6VTVMfrhqJ75amqFbNDvwRL9SPpN9xyVbq8gqZs",
  "key11": "446RD1e36a63rftFWUpT5Eg61U1c7QNjPNTFF7zxCVshnnEyeksdpMd6J93scMMzUHx5TzjVB5qkXyWyULgBYMyr",
  "key12": "md1kYkhpmKKZq75S5i9eNS2mJa1k1bEitjdHfL7YpiREMCJ31cCDkpzyHnqAypZXDP7kgHbfumkKiGpX2w5bsmb",
  "key13": "4vpLLo6HzMqdLEyMS6f6wnyBhBjspt5wCffYb7PgLGivb7ze4pzYtAqiqZUzpw6LrxHrm5w7ajJQXVhGS5JoQhjv",
  "key14": "4B29nBrAju1LVKpjVspugqzzEZRwovxyWN3ZGMaTvX2hEK8HyAnVdyCk7ereesvgv3GkquSZZji1i1B6fpKV2KAV",
  "key15": "4pGH4KVUrk6G3dWZv28eiFLEXTrig8hKJfvmfunwLjnt7M3KtsxV52CK3AY4bW3a9dXg3kZLM1vEFQfmFcxnKj4i",
  "key16": "3Y4dyMyYdVGV9GVRfonZn7nqwaPPxsPKhd7fs1gkyVH1Q3yM5oHLrvWguk6Wt86oRN8b4PyT6tRNNd5DohChZZAj",
  "key17": "2fjLEWzUE4Meu1ZkbMCBWMKCkdGfHPUJTB2WRWmj9qe9kuAzFcB4JrquCG3viNL1ihb1m7TPKuvLEZEk85PMmBCY",
  "key18": "1y9DiXnm9TTTLAcMjB1NrGm4BRG5s4c6abeyjLAZbbsJSRpST2z8yZBjdSUXgxkM2e85mGM2Vb76zuP7cRd4H5b",
  "key19": "4KukqtrS5i5BVzUcnwP1A3dvBQFSVEVdRYYjdzg8qcEMn2nMWkPwoV1cDpBCGxDswLfUhqYjsPcScrTgjQpPbWju",
  "key20": "64JP4Ny7uUHvSZ1ZwE6Xb9dHc6hTbJ8GRSWHu5eXdegfYPsdznhZHrUoRqZmJuGWeVDEsoP4pyoLT5in32S431dr",
  "key21": "5xAzN5rMVwBCHCDXkgCyrPyMDRN8y3L6PVKXXimWwhSdH6ZsAPRFHHG4zNG4hMhW2zAdVpSoo9dm7SLJogZH1Jdw",
  "key22": "3emKQRmdhsAzcAfu9wXJtcbSmypDRGMfpXxeFuGZjmUB9QuEAMKa8TPbVU12XFNjLjyhCoyr6KThaerHoWLhxFLV",
  "key23": "4eXPy8sV9DPaU3K3PqUChUGsozNQ84tgVJYF5DHunciipsQJ6JdCEXSnr3dxenHxxfrvJhfPhxGgXQjrMLCwC1Q8",
  "key24": "3h8d7hUcen3C3QbShoAW1NGu1cNpKkT57P2kLyxwSWXLgDpfME4GCAjGEDd5a5vP5DgcetMBkXcUSGoyWEz9nu2W",
  "key25": "5rKqq4ZToRZy9k3dh2ZyCdYEYwNTGjw7iLcd38g9pPPoEpGf4pUe7FhsQ7PU3qsgvLW8CqZg9FAy12C6vFbq8ubr",
  "key26": "zcPftYhZRCSWseQzwwz2oaUsCY286fhLysKaCoQXA8vC3ZgkroHt9MqnUeTDua5iqquphVdbKcbgkteiDe9UMYP",
  "key27": "2K7kRKydbj8JouHUMaTWsdT2S2TvqRikJckaGLW2u45SUvgf5JnJvg3q8ojNkK4z9J5WMvzAqMkoLLxo38w2mw4o",
  "key28": "2j1NLzGDiymJHSF6c5xcFVheYG87qsaV4aBT3HNiSeW4HjJBDrDtN2m72VvLnJJidq3qWL4D3g7y6GW3Fq1dMMmF",
  "key29": "pJEAbzZa2z96pW2NYYBnKXfT6jyjQ4F4gzmYMy7RVBEh2JrdGJGPAcNmHsgMcEavQ4wywDDxAdiD5qt1MDHWFU6"
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
