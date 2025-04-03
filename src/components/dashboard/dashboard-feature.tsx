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
    "3atov9p66X8ioQqvdvC125VwMguhBndMhT3szkZTHWEcND2V1MgTjB7cFKKEdWCMyPfbd2oueBaU4rNeN5MF91X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWhm6i3QpMcvEyBDgna8fMWy2v4t11FiBDhwgrUq8EueDGi9NqYGaupXHWHCtHgaDYAA3PGNJqd4cydUjuH3qAj",
  "key1": "3DLU26fYiZJqhVVc9MbmVRSbFcaCmx8BA1e1P2PaKe6zZMKXgNoP96ZXoNFc5oHRQx8TCcR7sWPMv9Zw2hVehKUt",
  "key2": "4s2krniUpAYhfADXFnCnu22CoVTaxVWFzhXCGN15vChAKurqgKPkosPU4ePDW5w6iAvED1kt8Q4FVKV49ZvGCtkd",
  "key3": "3qyBDiGjvBYADDyJbQi1Nj4oQ2SmDGCj85ncdbcKot1c9BQcYjwtUgyHnex8rgeRh2ZuPx172AAsPcWqPoK36P32",
  "key4": "j5wHs7WXh4RUee3qLA8Wr7ccz7xJAbzjgpSPkmaSHurAHVHKrbQei7gDsvt7fQZC7dWBocAhxF1fe395KMdfAxW",
  "key5": "3xCTZ8LqBxDmSKtFVkhTs69tXddcYZ9iU6CL9picPdZtbFw64QQFaRoJtuyZrWv2uBNZaKoDzM7foghs2i2xwKC5",
  "key6": "5JYoqwTeCPUb32TTQPtWHtinhqNQPvxvbkDm2Mp4i3vorhuFqY6p7fvHAKfZncYgxBECSXnH9E79g41LjgGVAxU6",
  "key7": "3q2JkUDMi8eX9rzRbw1JhZ4wQJziybCcfpMaxFem7o6vAM5d9MhvcADFuPEYDYXS7wog7YgcGx7EtceM3qAtZeyL",
  "key8": "2TH9R1XikPCmpy3zhxDsUPE1HFKmJ9ZvEv3dstNq9T7kyWzUXdR32RC5mt1g4bkXbCcaaqMVgQwGqf4NAwT5h5M",
  "key9": "2geiik6ZoJwBhwjMLdeKAzLXuYQFXZcWxuUMRd4tVSw6X4k8e1bAZGBh8C9a9bcjTkY2n8dBTJcsKFDbzzVP1cBw",
  "key10": "5iLnytKkXtmcGsRTmSM358uqsyqomga5AmaAQ57y4v4tqa2NeD7xwKH4AEnb81v6TevejnkaMPXQCqbzJGxHtrf3",
  "key11": "5rQTrk1Ec6NDPozLx9QbdPAkgKtF4sPnCQs3i2rcRFYa9fnETLT1TkN8mZsMp9LBofw3HBvVAymmPyaozXdy73Ee",
  "key12": "2wsJbUofsq78ANv2MsmB86pi8jXGZs1dBVxtiofUMxkrJJ7ysHNEjkYZYYRSmLNrcFbSneLMN8XExquaJL2e1F9v",
  "key13": "J8VoZdszaYGq4W7XCpvPLDmeCNECRzyRUe8xwxoTnFyvBPmyVVWacZJvdmaZF6DGQGkCrTJaR4G8h7jo5RTNPcV",
  "key14": "4SfqJQx1SEw6XfvGARGSYxWrEjwuxjn15TVV4kq9i4GRSTu3kmirKebRAopGwd14c4bpGJqaag3tagAj719fUNqv",
  "key15": "pNRmLxjZbJUpXdJHJyQt3jyCfr2i7HHc4NLD7NnBSUnvYHPTdPNZfq9RJBgNAswXfHpbpLVBFDaasfXfQHqzPeE",
  "key16": "3YHX1vrSatEtvTaU1nWVmNMx7foAwHy9w3onTd4rGJ2sZboK3vB37jAxvtJKqb5KGvJMTyUJTMKnwzYwrw8MM1Ek",
  "key17": "4hNECqCCdRyCGYbXsZvbEtftq5HCJnLjcAFKYGuhUbPoPQRD7Ho8dAgXdhyfWcUPhAqMDraNBPsFa6aMUzwZ2XZp",
  "key18": "41smQvijDK9sfgb9VuLWyhvL4ntvR89EL11X2DUGtLW49VBwyLpKrQi8MSZPaF7o3q29LP2W9BoKaxMGMKDnzZ7M",
  "key19": "3t3vfLwUNTLtBPbtYz8zUB1ZRhUctZdjQRqiKLzakb7K54b4eahXthfnP1qJm7PAk3MgkdSc1yniT4aZVov5JNXe",
  "key20": "4ngCr5KB3JNB5KGucB2xrsCU5FH9QHsqwrKhHP2CjS3mfr464VuAcAJxWxCsLg36dZADDLUg4St5bHTJxVX3PYRP",
  "key21": "791SsaXR2K3NtaVL6msjnZCw7LHYMYmcVmpXp1vESQVzBpvxahtz5tPkEe2p9BCMeqdAYQF461EqUvJ4cMNn4NV",
  "key22": "vsETe7NcHNTmv6WnfdPPzSijkTXcm3PVB8iPbxUAiLhSg475RqrN4KXLAJB5UBdCdLRcA6nm8zLAawyK1KiT73D",
  "key23": "3Gn9qsgXVNEJU5RddAa8ADnfxbsPyc2nTxws4KF6KCBjoyVahDemv4zP57TDF6KMtQb5UHHhiKBkZAYP5QLdj6aG",
  "key24": "33LpxEMFZJJyyGupUXfTh8tke3ryUafS7Ztmua1XcdtJwQRi2CdeeYjTkSET2JjJzTm6QTrkx9eZJyw6B3B8psGE"
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
