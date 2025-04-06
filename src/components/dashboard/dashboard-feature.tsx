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
    "39NQSQkjxKZggDi1vH9m7PSfbLGAoqTw8G4NxgPVgxSR3UWhodqPLdXSQS83EhDhKuEQ5YyozjM39PfoKvUad5ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whPHoEDL2K17SyunL1mm5c1EAbA9yLDYkLC9bggT7ZrKhTYWqH5jX6nVhTF9C969oyJNiubo4QiKJQiz6UC5DSj",
  "key1": "tVtuV14Jb7WjbLzQCofbWcGL9C5iEKn5uasozSndCkroMh84vsZXvq1aiUK1j1QM1VUVsy5jo6myXZySuhsA892",
  "key2": "nV7aZpnESVRYgGePUBQwozZSLgpqC8HC64cYVZ81m8LVMGamXQhUweip9eWgQkKBSkMS4qr8cxUL6rU283HkjU8",
  "key3": "3FV6pLXqxTrvMGJThrpuNH4s2FcJKCadakcjaGHyzPj2huKnsYFXHFwDmrUqt2VgLe9i2a4L4H7wL4yPFdmRaiCm",
  "key4": "4xcA5emj1Ngsfi14TwgrXUTerapa3KZcRu1A1X9Z83WVGa9voCuK2eGHbrcqhnHh49ERpqPFoSjKCFfqzu321uqM",
  "key5": "5EUPzfBW2D4h2BCEjPYXKATNSGp2qQQzVWxTuygMpyx6rbpPv87U3om3rSKbEFiq2hrGQDbAYPdYx15cHN7M33yd",
  "key6": "3H1B6RMHahLs6k4jyjKqXhHCtvp2migRw8VNYzffvY9METCVGt9ZRY9UojxqAUke1Nn7Khzzr4G2Jiwe9E8pzkrF",
  "key7": "2wC3MoBRSNjLeSvVEK7S1z7YjjHGuVDDGDmpxCgh4DZamdPg5Uh2xxGkKvNwoviXN7eVNVnE79uUHDG4phV5ACjo",
  "key8": "5mxYcYiUpcWAC6uLXSvrkTdzDxquqkZVs2gmySPwq7wQhqted4p6rDN9yonLLWGoiS82QPaaMLocUQzSXopWYWHz",
  "key9": "WYzoajUsm7Dfp9zofR7ofkbuSowGfZud7Ntohgazwo9Y7XeV1S6E46k5RK6fYkd9s2fruq1Q8J4eAnUvwM5bRmd",
  "key10": "4fyoWcuXBRsKmhL3uUYppF3TEqZpEZxpBDjEmiJisHhPj7PT7dZu6t3dVmvVQq8ud7CfMPpt6L4GoTKXiSc1S84w",
  "key11": "3H3xRhJXMZzcnCH1CxbkJKNodLeiBucAtiWtf9nouszCQr2UsTvW6VuUD5soTK9bcYiVciCMZCqb7474QkcKSQbU",
  "key12": "64JrB5Li7efiF4L3VG7AAbFtAbNVXCfucba8JyQcf2fcjcPrz3w4DQR7ofGGe7zvZ7Y3jueAC2dhbwgikV57V5Yd",
  "key13": "3FtkbKKy8fqth7zcsf4gsaLwVTJ6be5zckphyZmDR4sprrvrnEiK9MaSLJFrvxqjiAHG4pdVKp3BFtyGVh14941L",
  "key14": "58LiB2Po7gGSjC8tnVkrZmo427ucddtAswuGSL3kdXGCwG2nfDRaiJ8uJzY66ied1teCi5ojcDxa8PmKVVZ7AwVu",
  "key15": "Zartzyn3WgbCYpEPz4ALwc7WL5WiVvU7KjQysg3xZjJf7E5BNP5DaV6QuvDTD6AK3BbG14CpZuzVSV4FEJm2HBD",
  "key16": "2eb3yYLhy5kZDDdxamEmpAKCpqXM4ezLUcepJbXBqK3WHq7oqEgFyvwf2ubyedr9YmFNtABAJccfGUdjLZFki2sA",
  "key17": "2DVpnE42DgQgdzDyi6yzwQpWvFxLHBHerCVGPS3T1nVx2jT5JvknhL6ZGcw6AeoLUU1Mw9gCgDdyLfd7SgypHpdf",
  "key18": "2Au48847Fn4FkgpNg2ZwWC1xWJRSAUVP2bnEjT31QcpEqahEKp3VjDEP9XUJNVtE64qAW1KUgjdVya83Fq79R3GQ",
  "key19": "XsGexUr7bN8R9vss7dBJk1eVKxEVwRi7PkgGYXbuC4ARo1FdQCkmGJ6Zy47uCSRjS4CGmLATJhHJ6xh9tMdsEdc",
  "key20": "3NyeHSz2VHh3YuvSKfgpJyRVuLPRYeaG2SGCPgqdQNMjh1BjgkGsyoy4qjmT4dPKbyvYcugRnrZAvTKEhVkZSV1q",
  "key21": "5QEgU6ds8Cq8boDS2LxCR3DogxRu4BDRsyj8MV5YRwGZXkbNbCRnrSn569N854p6GKwZt9pUBxbP1P5EyWKwVNZg",
  "key22": "3xfryDPNtaqD93vnnoNMR3EZ5RMSQbarVMgRjQjzSD5mufd4xfu39BFWK24iDFt3gndhnk94B9K8yvCznEGT3moH",
  "key23": "5iSbmSPGz7Kz6QY9KsBKFT5jtyMmLwTST3JD5dcXhgu8t2Ek4jig41iEMppyHSWZv5MWJGujdEgJR6k9QYzR1NMd",
  "key24": "3osDgQfyugk2PeFqzxAcxNE2oQALGGj88yrBZBZifTzniKFGxZk6eKFd3YMJL3NfmHg6NUcHXbZ7v9n39pHCUzSA"
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
