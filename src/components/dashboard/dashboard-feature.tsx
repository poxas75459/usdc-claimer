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
    "5DR3gudy4Gx3APBDvvJMwZUg5c9s8m3JMYvND2DuNRsFL5xys1MifkzNyLFZYWSBhmuFD6s5TRMoLRNTtWKL8QwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCBTyJqB6SARr78NBcKbK1TdcefontGt8VfL5dyq9gkdZzPtdz4mWCRPFSQn3rAEwUebywJaXRahRNt4tnNe6Mm",
  "key1": "5FXMQ1JeqKL95ybaNmy747gNiZw5HibN8FYjKDaUW6DJ9XsKPrh6MheRLZjGvMjxgiMAPidueBp4QKue6Hss6HpT",
  "key2": "4HCaf7b7f3S1ieGKiyfJk6i95wbAX1W7TXGyXpdLHUpgnKoX7wYp9A7MtwRjzSQoQAcvzoHrEMUxGRAPwLQbBTP9",
  "key3": "5bdokfigeoNAGP4JrX7K8sDjJreEHHCUE6uJZMAWGMd9pbjeStmqth2P2hB9hBpj77Z8LidQKFiBExiszRWvccRs",
  "key4": "2HKFVJeNfnzuNyH3cG5NHD3HFZqAdePdCdNAYk7BZS6i6d94fYukB8epce2Ck7ZGudwFbbrZk77YfDvtNxxqT1g2",
  "key5": "3R6PusYgaaTfodLH8dPXYwsb9xmGjcekMmZTcS8PNCfcr4gnSkimnvqnqPA5vRAWizE4kdGgrQKjsZrVDYu71adL",
  "key6": "4wdkhVjMo4sumH9igVxYB4Za3mHuKP1VUnQb6VqrGJuMSoaPe6R95xXjLPco71syogCi4UsZALnHrEyd1nPX49n7",
  "key7": "36M5c3q5WzUZWtaxkNcg7FeGgNQaW51Gj946YPeHTG4n65QevLu4tzK6bfpACNENqgR8BNy7u83PZvg8mhmZEarF",
  "key8": "4C7QhUJvjVu3P8XGMb9ruAYnoHkTgirGw9zeAFN6t9E8UahgCWa9vfCRj3wMb6CVPmbnDrvHPZTWPKLB6P9WVQNz",
  "key9": "5HQFmt3S71DUWyHr8oXdqFVLcKFhKULSymxRjBnpE54SpyWQjbAhZMy1DTjo5BMgUt9dyrdkQF2wjV6FGsHKRD1m",
  "key10": "4HviAD9TGSNNyQGP6a3119EWSBFuPy7ivUYnX295mrL4z5v5KNsYMBPeAu6m125XUCioMNj9Z5FAyw7hpcmm71gy",
  "key11": "35bfmm8zon7cvBSyd6Kg79K2raJz43HxsdxSnB5CM8Z1HcckVDLJDQzjjNmDkXmw4dkozQc9vWLYc52YXgH87Adr",
  "key12": "kiqwXth9vJGvShKafimexaHhro9ZbWD9aJ7EQovDF4kdqP1NBojJZopfwLtzSrFNYvENAPWtT8Mi4rSW9LKHKyX",
  "key13": "2XYs5TqZM8xFbgYZrWBPucaHj2QBiSo8VkyCZLhQDoA75FwkPG5jpCGaX3fD4JZAFarrn6ftK76ySAGZV29FY8QU",
  "key14": "BcU7UBqyvZAZJAHJPWb46AxoemU7fwemn4ztBXTuLF58cNTfq65VWnZK2JDPiVfB9TUyaz2AzbAkXwfRxJeEnH6",
  "key15": "4Grp1RywG34qinD4w2J4pBiVQ7MQ36upLhAK9GF7DYCbkeaoZun55CPdFMGspMrGNDER8Mz7nnogvTnHhEyNAJzR",
  "key16": "4zigcMs6xsxykPqc45nyS5ph7A7MnvuLLdDbnAxfZUTmHWjj2NLYfhKURXvkb4wyXNLR8xWXoQHzekcZ1KePQbvs",
  "key17": "5UDUzMxdjscnT9PHQEeDbTUY6RgLK9PNW5MwHHV9DbJmpspdLqUhHRXZia7cLi2nnnJwoXaTVCpqqBPVKt76bZSZ",
  "key18": "Bh38iX5qBJ25dHyuY4BnDXhBACh6wA4GwFPyGB8yZYPnsMUeSzX8xe4sxwDtNoxYSi2yK5qLPcsfh1ai8qB7ogK",
  "key19": "42JPTcYDXdDF7T5ThzbYnvg9Wbqk4PaXzKWVuMp9C8WPVBMuxxRBCiuB39GDBV1zg3jKbnLPr3tjzvEEdKgw3cAv",
  "key20": "RgeTrgg9RGYxvaprVyG1rVTAaoYrEYfeQVjRPNzSdAMQdzPksVRCrwzbHKhaxFsn5Dcsmei54ApX3Tq3LJoozhG",
  "key21": "44g97yMik3cnMmtbp3rXduV83mrbcPDm9bxNihSqCwSxoiLHy3A1RwVeNwnhehPaBXQATzBZdSyFuScoJ91H1LR6",
  "key22": "2mcuSydZzqvMkQnEyaFMMR9atjgJ9V2nxnoL316Pa7J9xYzBepwroauaY1FoKhR73wjBVSR6p1GKdYqszG9hJAP7",
  "key23": "GusS3o4qp17rvLWnE6Vhvndf3WG6pL4wLrQqA8GCGSRHnGno56zXkHZd7Cj4Gfem5bknmGkwRzbeGetQZEYjYiH",
  "key24": "3kL38dN3hbmfR93xpvDdtpA9y9CeDF3NtH9ELfBqBC54KAV5dmwn7bV6Vk5UVUToCqmR4xiuSC5RicqJ4J2WNSUk",
  "key25": "5o4ksDqmC8FNFHAdmMfJNv44qn5KZrm9TpByTDSXHZcSbvmhWBVRix242uJEPdH5jPAjqdLtZ43bko5BVDMVFnJL",
  "key26": "2YiUAccjAafzVQS8vuPhX9iTq7xvQG8KRRkGmegoysDPq8hkh2g2wsdBje3Nxph4n5ZAtSWwRRH9zwkXrqYAGT28",
  "key27": "4hnQXcJBohV7gwSK3j9t36hR6wiwmTZ7y7tJErpYA63M4wqUEQFaPuTyUmYK5Qa8GAzKrdRWcxrymW3nbYTsgi1Z"
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
