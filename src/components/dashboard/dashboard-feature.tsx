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
    "2bdCkK3HgxcRnGZXsHEidyBxeZA9vLiwZNzhQ2wCQ1T64Kez2wGnTrNMVySrJjeEokgzYVriNNpXvSAxsm3VjBiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zsyZrapJdf6dAzYM4jd1KctCNhPzkGohLybZifnQvYw1KSmCggamCZMkJyxszv7RQTcKxvqFkc8wq8zQdaGsK5V",
  "key1": "4AougvRLPXTsgLP6yocbP1289k8CTKa12wZF86BpwuXGcimQmtByGrFr5qHzZEAfSG7cnY1WKZJFi1LU9U4iTVRj",
  "key2": "TqCyYFijBm9UZNj3N5x7JAXiPqpUqfeuxhXqJeLLndmHgftEu2LkZHWYbhYRPF9sx4B4soFTBPGhTH4TQPTjdNw",
  "key3": "4uQTU2VYYW1GTJfxcATEsVVHZ1MZRhdhYCKnZbPAzejVtT5cN382tHFWmhJsC4qH8pg9Hbndp4XSALaUJV98VV15",
  "key4": "F2u2kKdnNmYNiLGSCp3jhNpZb6BQUeuHdN9S8WeML7fLA7QXJayvvcmaJRApkhwtbHVVzkUaXP81KoZL4oSw7eQ",
  "key5": "5fp83rMW8fNfaF8nPN59CfisgPRpDsMQuPhheD4kDwnsV2WEnrRs41x2P7dSTM1PqUv5a5H8uMtuxuh3jeAwrytn",
  "key6": "43pVLRPc2gtb7qPB9vgCevUxXDwkWG9qUDH6ERDXwTQyz2n5R9QeTHtNu7NsueBRn69483KETMByypw659RxMGTQ",
  "key7": "3uvVXnHsDaYY3shh4sDdZmmxV9qc1shtBhkWsfNdRP6RB7RnBSK5s74Vvtsh6uwLaM66VoF5VM4o6wiYyWjfyZU3",
  "key8": "2MTT4DMbHfsG3PAWAYnmfNt5gYZvy81JeDnVm28aHisiume55TAZJEQHW4BVsTzczg6wUTCgJPJ6yitEcMyEddn2",
  "key9": "AmRenEragufYxR559MpwnAv39Bd7QVCKVakSf86mvZEhrRnW5wQXXASnXTsMWB9bsBRazn7ksr4DiRoZs47gcch",
  "key10": "5xVL3Vm9EjUHvXpxngDVzEmF2xtRQ8CaNtmvm3879P7YHx9Mz7dYikfz4Djoexh5ojwHsj4MztfgruhBSUDfSQZB",
  "key11": "2vgQf7PKViLPzpUnR2qqxePFGnMHLGyPuNeFHRJUV3GwfX9P47zKWciPYP1QEAvGuwSucPmqhWtUhkn5WTKdfBZA",
  "key12": "2BLnAN34VG55eBkdZvepWMFQttLtg8GyMVXPX3KGqbUeLbmsVt4igxgmKpXTQAkbCBkJ1RcJWMUiT6AeH6wTqjfv",
  "key13": "4aoqxYDvUmNpir58Mq1TG1pis7pLKd4D9Yya7PXe25b3q41AMRGFN7aDKJAmJrAdvu1RGN1CwpURnnZWfkv9ZBvH",
  "key14": "3LzxExtWenUA2BEBzUzpLfUMKf3JbpDYMJuQ6P8xjs4dSkqEBkcxd1qVEkUPPbgsBLoVW2amiJ8UoHHV5rdvsHP8",
  "key15": "5Gn24hvhVaTpgVJHnaspMYFwq75s4RhyeqPX7od2svuLzHnQJMrtNbASKrSpv43KcmfxW3vfzFiTLJ3eQev4ESwq",
  "key16": "5mHPyG8uL7qTL7F1VbREh2tJ3F5DDd8uy4nrADckvb6GaeAfSYXguRG4AwUhLqYR4cfL7UhaVqMiooX9aVLxu3Yn",
  "key17": "jTtmPivCCZfvH8kAzyeCrSe54pmLBwDdyvQGN9sRxLi1JMoHXckXvx6JejPjqJjNtrddYkCo4BVYbFdVPBSGRRR",
  "key18": "3HK5YB85gLve5z8fqvMSDYi4nQ9i1DegYTgJXCKgBHYnQNG3M7UicWGn4rExEcg5RCP5JRdSu4JpWUWAd8CSSBf",
  "key19": "49tNt68ejHG9S3ZzToJQPHv9sh4crX3g4TKTEq6eACu7yvjXxZmN4hsXjxzya14j2s6bM4pWAbJPrNKP5aRz6Q4w",
  "key20": "2FbkFtCYhQ4yB6n42gtZNw3MpJHiBNqJ5w8SMZqXUBb4WpyHFmcYyn45NtYHNbGJdneMt7wxHGAyG2T3ucZBeX1o",
  "key21": "29t5hucUHX7mNwYvRXywKEFHaHefNitHuczzfWv7xhcNCrx5RPChU4Y3Qe1TgdV1PLW8yDw35GobKzCVqSGPHs2S",
  "key22": "3YXLXfVHgfF2HbAbXAS5ttu7e4kpcuFwDDNE92Magea2Qv23oqLqmFYaM4jSVYnEJfSTvguSioSkhncXSF3htLeN",
  "key23": "3BX8fywghGZ4kR1WD7SnyJ3QMSyZgU8P6FJgBZzTDESbQ4WfcerEhUnotTptJoWoajT2vTpL8FKTjHvpNpgqhBg",
  "key24": "eTYD7jhA5crSuMeQhYh62jBkjC2U95B6M2vH49CpHyskfL5UDnjpdNzaxirZwrvnhBZtcNWVSqLhzqmd7BVRzEq",
  "key25": "66Gv9CKoGLEF6ZdmqPU9QPSAjmUVPVhvNAB9t4L4nma4Ltwp6zQVPPT1zbxCf52DnoiAXuXKmVybSimKTZ13WQiN",
  "key26": "5dr6pPCMR9ZC8abryxUipVvLMYF7QF3h9Df82SwSSkrp4xNZJsEEiTxt46myqqBtvHYfz8cUog9UpS4VB5e4QzF2",
  "key27": "4X4Y6v4HpqUFLrR8BFFuEMaKG1sW2wVUjBNoTiLWY713BuhtMLTn5SLgY4z3TLSzFPnSzN3NpV26zTcgPEF3dirH",
  "key28": "WVnyKTpnbSncKf3G1sxPe3TrhnXUL6q1m51NwUTVohQCirMWbvN3QGrSh17Gqam4jaxrm1gjVoZjnUSvMe944Dk",
  "key29": "4t6Hbh75KU7P8jpWzg7ZbhRuidYsWN61kmaBLJ1Savg7mEDKvq6F2s8j6YDxAbmu3pJXsAiRVUatpMEnrRpnshkF",
  "key30": "5AoJ5umckUHyec8BekCDAsaJwPVBfPZmNq4os26SxuZh23aBwPdJuYYrGF2q5AUxpcb4U6owy3SMzqXTAqZKhKtS",
  "key31": "3Ua4MZGxnYLFZeNiNE3FyFUaY6TqmQmxJ5FuBUHW83PpiLTfp5kJc4vUw1kZNtXwPgu7Mi2fbPjJp1QYjtRtZUyQ",
  "key32": "26QpoRiptUQDFbpELVEuTeRvVqmonpxfhCkNXec5dWNv8PESngAxnLdzJUizZyHTcctM4DtYAjfPyfroZw6qLctu",
  "key33": "2mZxu4cUAQpFGFU72Yvajv27ieLB3rmjeakMQ9sRtsjuuNFgMjL7F5GD6CctoypkZA22SHyAwbntgCcoywYCKFjM",
  "key34": "fEK2ubr9WgMXWtmtQLgvjjKefCqgZ4bFhr9En9sHAKPgMvh93vATmidhwcbEKSpQpvu4eTMTfeHGJE4nykdW76M",
  "key35": "29vsNNeGqVJFCjakGMsUGmAqWs6K3faBJwGT9YmVcRdf8nYPXTJkNiXzxSxNeD3TcEKfhU1q35gqBWgAmgNmGg6a",
  "key36": "3HaBrFd7ENAT4n94x8TXykX6ewkZkEasyS7kK8qMvim8teKsMKXX9ZanSSG85XMgTacMS45yv1DvdzbjfrbTMNXx",
  "key37": "5uBbFBLL6n3dLfcKFSGL5c8yweQrGtBof4Uo8gBjYJNBnWkpdVpiABTpiEHSwsfEU3EtsNFNVMLiagSXm8GiZbLN",
  "key38": "468zfxHMvd1MrWr1RpQRN2f7ZnPbk5uneZWKZ2BEvwDwFE781DyLowN3rgzXWXxmgr4pYDpbFj7A4XADwEcPHGQ9",
  "key39": "5gGFfKzErQ2PZNfhnqmrGrMqjFo5kR9cUzbMveg1BAmVLHGodPp4Fq39C6TmbBaTgNMvrQv6LFMygEx3uwAUMEbx",
  "key40": "wXS25FnWpRFaSgfn7UNTWahHoYj5THjG5SkpnEXMtKrrvJ3doHyE736FGG13KZEeZS3nbSB3d1QkwMBZ7p5hrcq",
  "key41": "bV2aiAY7L18xvrWcMWfGeBQdezLmyZpUG9y5xrd9186EAtTYJ2y9Pns35ErvQc1fjnQRtAajKYpFmFXuJZhnxpu",
  "key42": "3dxFXGhRAysgmoHqrFJyTMmjfCGaChFX43mgEc9jE4dpp6fDDDWBYuJDuoRabkwPULaCBSqc6pbKCBEYQyfSGJmU"
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
