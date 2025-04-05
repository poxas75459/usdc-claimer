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
    "5u9NQ9UFHdsvUZsFqv5pZjG3QP5SZ4hGASKu6m8oGzNV8Hmk9Ptg6JmYyWHJWyQCXkEyUw8D78ZUSx1AmsemTo12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pqy7E1JCMHUR5dKrihtGcF3bWaRaN6miN4EJPpJ6PKRzhiHTxDf9Wh994GXfEwKCbnoGSwwzaVsjYVqrKUVwqSY",
  "key1": "4ce8rDawGbELJ7srjTirhyvj8n1jXLy7X4fVowbcKD3dH2jJtYSWUb2x6VBg2Ef3TNnGEHWwFzKfxJ5BvUugyVdZ",
  "key2": "2ihdidU6UbSSmsXsGVLsJtNVZM731uFAPL4qq2h1wKfVPpU1haWBSbftTXehw16mdCzBoJtXMrgDqzMgsDcWSDtL",
  "key3": "2sYo21RziexEL5BaaxxkQTKVqkZ4LH9ZtyuLSBWrdwZwsrDCagL8MK875jGFzYXqdNLdcZswF3wbPkYMuo4fSs6F",
  "key4": "4Y3hZCZx7RGQcaoPTPq9XHuBS4mfSdynPBC5WRrdfRHJEsACUE8vdJa4t3Hbi4KGSDBv1Ny9asFnQCCp6qYVtCWR",
  "key5": "3Nhmbaf5iPfgZzBeLc5AFa5SaMXzRCK7oPaLGCjNQKSythKtTe58LbvgZHvz1L3jmc1w4RvPjUBr2D2czLG7iW6J",
  "key6": "2Af8b6MrpvXzv7EAiEoZDYQwaqCP3jra2BhNy9k77BzCFNJ3X82z4okN9FwM5ctDEQ5iHH9LHNGS3UbxAW1TsgrG",
  "key7": "5swuD9gLH25gFTdrYzqcVPZcJrHRZkK7bqBeWAqat8tzZbxLM5pR3q9VEw6bt7vGPz4X7HiSJw4dEyYT9DD44pK4",
  "key8": "2f5n46cXTBmJX19KNrt5yMGsU1a5KusmscQwfrZmFwqS2e4BYitJxXbVCUzv2JkD5GZCg3TeKGQAFpsvqZfgApdv",
  "key9": "3HsFu2GRoSV7fFTxQ4FoWfTFsBaGVrAAhDjcKp6ZkQtji9Xa882D1h1d5zvgfbgH3ZDPj3BdbW5SDf1bC9EfqSuo",
  "key10": "4amFAixKu6wgw74GDpxL8dCTw9VTyY2m5jVQNTRVqjrPUdpFrf5tJnahHeyZniHNa7pvUTspW1GVCXVj3YvxtdnL",
  "key11": "zGnLEfgxPycAYJ7XGrLojAK115FymLEYEFPfHsc7sZkhGzioDGYAnkb1XTqBD8aCKS57kcocYdF1eVoLzCVwPjA",
  "key12": "4S6QiQrHyU7rDDyPR8R8BSxXiC1Z3TCvTRENaZ82Ns9wdokZBjq5dqgqnvakXauR7ZAuWXcSReytcpQiv7wbYeuN",
  "key13": "4v61C788MG7ZqaGJVY43wXrPiMgsgqPB5Q8Jj3z6Fj73WymcPj2uHpq5xEeGdom4EupXocHqf6x6wLbg3Lqk552Q",
  "key14": "4TQXAbnHhwE7XVTfjjbjacfxnP8eDpNAVR81c1cc1kqkyoFoEo5gdsjZjT266WPn5rZg634Ltyvet3tPVNhcaYNV",
  "key15": "64FW2aZE6oGwEB2p5TTwVkGpjTPSBsTbzw7ivyGFnfsrUZnCK8v3oKLFzMKtptuHy513ShyYHJnyZ7ut8npQPJCi",
  "key16": "3y2iPH8zmjUSmZ8DhZnWqZxy4qRV6SLc9EtMBmBgqs3mfyYmqikqfFtJDBm7VRSeP8iZHUx2eh1RDyoWHyKeQDcL",
  "key17": "2xX97BxUPTvN2r6jFWJf7xXyWVPsdd9qEaG8yC56HbdU7HyJRYk89nrCR9wNT5KZuDqW1FwJvdPgcW8XoiN4MDh7",
  "key18": "4V6qNW2BP5jCqXdfU7ShMKLUW8RXhSFggf8E2oJxYfLpbmj8NcjE7v6vsVhMX1zjVF3y5ja4DdYz8AZRCHn6AEEZ",
  "key19": "2aPXmDMSdDqRRezkdJ1wmP8DEcPsjRWCtsj1NWNMDy7BmynaY745VotpHVuCPidgSHQbotdWHaX1hSodZBAC9x4J",
  "key20": "39ET4iCtT6T9RNZzm4ptyfApbzLq8xD49e8hHCpfyogCVeidduyKu93FMtaWEmaRpiuZPVXcQRnf6JJD9APaBMsx",
  "key21": "3BCQmtANMUVHRgeGvKnymKeNwkgGMJCKhsXWJ1fswmUVWtYHbetUHfByZP8vYtH1vTALk4huVLaUu1AwT1qEccfH",
  "key22": "VuKMwurC1wJtjBGFUY8WERrwY2uwrZdy63F3cdC3k6NVpNzsjTfkQfa92FHDRyPRqzaQgZnzvf4ERSnmisTRkmP",
  "key23": "5wvk78zjP29bQVfZjr8qRP5hPcLqJW8t8LAiWEyftG2V7DGiTrCFUTPxhcgaAvFX832yddWAz3n5JR6azYW3MAQP",
  "key24": "56Cbz7BCyEZ1HqkZmAoMDpietrejtCxcShiuCUKZoGSabut86cgbbPz53WQPeybf3NbCRBsgsok6wLsspbtyzbbn",
  "key25": "2j7vVhaELpABxvLMv4ejYjeD8so5mQH7Usd164zaSb4Jk441L9J6MmiAi7VgN3p9e6KTcoid2zxyFT83yeL1dN5Z",
  "key26": "3vS5BSrY7JBZZEj6YdvGqqtN8gGVwKbspRmRiaMRuR9R22vM3bTvZ7p1u4gooV21SgpZ8sM2tqNh2abSbGL6DBh2",
  "key27": "59gfXiZK34gR63EJNuUB7GH5qiBUSraVKkdYc9UZmQgqKmFo5nt9nST4J1hAki3Ep6gDUX9MEJYzD8kfEt1ztrmP",
  "key28": "4DW2BefJ3Z7VNwnkcpxKz84vLsutqyzGyPb2D9d9s3BXQEdUvmJF6TK8uvUcttvzNt3ntM45F89Kb1tRmU31ptTH",
  "key29": "2q73bbVSbxM7Qf7Jp3nBAEfn9n7fJzR8kU8pMr3VkFjaoWFrbvvNZ48BvsmihLbnaSLYjbQRWMaiA4ZEsTAtVtnn",
  "key30": "3aQocyZtNyY8woyvDqtoeghxNEib31nhwnvmLKLMdvPqQgqqdtbobQuRbVZKvxTX83XTMRUXfdpm8kk9VLRdDzGG",
  "key31": "ZQf3xWMcBWDoFiKo6dYvrYN82zSHQGWtgVggim1UavKf61eoS3MPYTnGtEyHqP7ciNoWW6UZZfcAGyUYqP3dY75",
  "key32": "4iPPV1HLYLvzerCyv7iuwBHQ7h13aBVVsfAdUFngBHdo66MvNFBBL3FUAZ7CEtcMmvXQMZdQcSGcGH3PTFhAx7cc",
  "key33": "3KcaP3vrYWdnsAUmxzc7JqbgC3SPn8DrMCFSpTjfHWjBqznC3VEqFJ6JPKvxZMTHeZ6tyyfDdEtay8j18DaRSf7L",
  "key34": "3voMQ6dzX51ohPK7QBhqscVmwKVG3wdd4qGVWy7CcFgB9qQjuj8rF3NYowQR7dV7u5r5KzhBMk1ghmQHZhYNdAcG",
  "key35": "2rSvxVE7wY8JbwmiMHodNcpNFskCxGnnQX7foTFbpvNfMkNfhFRSGhaVryg3t5aTgvC85XgxqpW25q6vXG7xE8HM",
  "key36": "VQgSag42pXGnijEcWue4VCE3b51xc9EvTey4KMSeorRJfT5hawxzAHamuFB1iLBuSzpfrig4WupygKWUYDPGXyr",
  "key37": "2YY6P41Nxk2YDRvCZk6HLxWwun8cfVxd7qeFPS9mebr844xYv2ZLYZieuLFbrfZFNAvt6Wu1gdGCFrNYW7Z53zQa",
  "key38": "3QgG5nSmBBaBPDUZMsFsxDhVvje7suA9ocjWm9fXRJDsozpLZH1s8RxF3MSKJAYyyabhCogR2hM9wCbMn2p4oqP8",
  "key39": "66R6EGjRQpY7J4xD8pCF9zHwn23RMJx7izyBRbCi4ARtEy2m2QURQVj8XygTpL2fbqNcWM2wD5SdQpTWfwujzyGZ",
  "key40": "ARnDWFV1cmn6zVAD6F8WefgAUpYy8TqWmNHJYhTKdVAusKd2ZyF9uQ6mBjdaCRUcf4NRJV2T3mi5RSGRezPgJpj",
  "key41": "vSSj1mjJMW3Py3Nhjnrna7VCK4idFy3Zdrw5FHrZxBde4fp52VHsS1NeJTLxjPxK2KTkreuSbiZvuG9gq5eNxRS",
  "key42": "2dpRwd1N742BtSAisQDHoEz5429kS9jf36rnwqR4EtpqFGd6bH3d96P4QwYvrhS5ZREFhXtSm6Dxz9iipDLziVcV",
  "key43": "331YQCpsuD5MmCapknNeUcsbZgqY93dPSmybhkUUUQNJGuYyDbJwYtT6PvfVLhs6uyZLXbgk84cXamNsRN9zbp7p",
  "key44": "5YGLUo3rrstsWWz3a4CffMW5R85wnUJmDzYMajpx4gqsCGcE2ZV2SK2vdZ2Aih5uD92cDdvcNWnatxq1QFyFbNkW",
  "key45": "3kd7jM5tWPPWyHzGjqhUcULJT52bNTfkpxBEFAL2ebD1e2L7L28N33r15j1HZ68DsgQCW4FGZG4P4EKqMaD3mepf",
  "key46": "Sc4TzjBvtwHwT1VJsWA16cHqk88XVfWmqa9K4jLp9D26fQ6FeuXnW55R8RuC5TXmchzWtSr5v3h9Ni71tEjC6R3",
  "key47": "2an2AVMUzfFR4YXWDpfMMQfhhe5MTuZE7oMVFT7E7kYue8VzpCqfBJTV67tLSKHiAVezsNe5Lq7oq4YmBWDtphPv",
  "key48": "5Kvg7QMVWnogzLx7J4rJT3MmY5aR3St4BXsnMvfP9tHbTJurRYjJT1ScQHS9aJaLzsDpTmimVooB3zjqJfGxJ9y4",
  "key49": "4R7a4NjKmU7DjSN6Z1QmoPeYkekVcPi1bkJNdaYnpADcSmiahHmUMjnYzZQDuFwybXgqLwd46ncZSJHtTfpDXhyU"
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
