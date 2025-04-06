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
    "5zHwdTaZ2gGzxconmUYYd2rmZLrzHDTE4zws6V2vjUencAqHgak18MH4Ws4nSmF6kXnG3WuXMax5WyQSjiTaRQ8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fYM68KP6EDAX7GiW6QdRk4nZchHS2z23SvJrNN7zhQTK8cugfXzsyDRirvYA2L1koSoDg24X8TBLWUUiyMjoT9L",
  "key1": "4BnYHoCJhMZu4D1TpSkG3WmtAdBRRENrcPx7Ejg9SiRiP4sMb3vxN8Myj1dKJXnBwig82RzDEXFYzssjLEF2pkqx",
  "key2": "5WUwWamnjTVSLyUQU8XH5n8Z3WfdDLyfaxAWWUDoCL5Bj1s19moJHbHVeNkjboWvw6VsHW8bhpfUUXXkBSSukpDh",
  "key3": "5TdpUc8guDv387A1cksywKvL2v46n27BBrrcCrX96FezajJG6hdJpjh8ncfYd73bugnbTY3kaL8JXMFd5PsjV7RW",
  "key4": "aHML18bYsdvW5Zkuq4u7fUTZCTem9LLXDXp6z4wpSQAWLYJaC1Zg1eSPs4sS85HUgg62BsQEkFrEe1ztdCmw8ro",
  "key5": "21BWZc6Y565MqtQT4prpWHgXo9ciVRS9aanfRDwwHmriTGnuHs75NJUXtALC48SwqDWybmV39knANBTPk35r8689",
  "key6": "3b7PUJVtPRN91QrVQFEfcxqc2ok9EhGP7hLaKHx7TB9hU14VSvVJnrEtbngsLGihpxVeJ25Ut6eanvtzLJVKvid7",
  "key7": "5MUAGFGFL8iV2G5yexyDrmr5ZSqNzu4PT3Rqo6VeYmTdETv3YcR7PpNtmAbwTrTr3rcfyN86fEq9Z9EUDhbLdomF",
  "key8": "3xhSUQFWhUBXH7ovNm3fiUFBrCFFeDhFdTsH3PAWK89up5D8twdD63UbvwFq9ggUGHvvaxhLvY3UwHiVAeEhpov2",
  "key9": "5JmtSfAVH5X6RfJ8dBTY5qRRdnMr6foSWFtNCTDZ6yELFVqfdQzhjrgbJYCJBBuQCKCiCCvBC3wLusF2SSt4BCkY",
  "key10": "5hKMhDLtvcVK7tnHVNEqEodRpSh7XdKB3ewG5nbuFasw28ecNiQVLhgCtejEfvvHM6JcBQfcbMW6oscBDL2NaWNK",
  "key11": "5kaHhWuimzkMuFgLPGB7t36xCXEnR9grvBixQfyCvuH2ohSpYhMEjc4VqxBFtFRSAes4TCovTNERsRFFR5mouWxq",
  "key12": "26FEGn1c97YQunFRz9ZucMWw938pN7dsmqQKefvhvJeGr6gakvsDTuDWLJnAiZpEqpKVP3FMGWgiMty8KfC9QpgR",
  "key13": "Xc2D7CxAaPn7DZ7thYRvzxc6CZ2se6s2RAFfb9efMTiJuHNvcuAyDKZc2dWMfCo6rpHPUih1aqTMK3L9eYeHqy7",
  "key14": "2i7PEYhXCAStpvY6DRfwu7nb81WqbrMGNns1UxFZBJ66yp4vKekUCcTWQtaaJwL3Ae8T97nzBagMPWpAespMEGoj",
  "key15": "5EA3GnaSVVoVrmHqQ8X1vtTxjxLoT7JRdqpppHn7q3YX4uDorYYGwW7HRz3MAmEyNmwhgaEhAeewLdbBvw9cRJM6",
  "key16": "29gQwEMGSNBsL2dDJqMYByrNQBGoiwNh3Bu7GaX9GrbKuVc154JGeFdgDGQnDdPFXiwAcoQiBsoub9mLbyhhDLZB",
  "key17": "2uab9DXAKNUMEeabKvReCF45xxzY7cKGzEt3JbkdL1ymhFveM2FsKVeLuYAVTcAmBbT1afXkGcpfyH7H6ZbGMjC",
  "key18": "4Cm2Kv41o9C9DyzRnfjjDdP5pcvnNXtcvm34dprgH5xsvbYEhzfXdqQvVUGLsiJfy7awGGnQX7s4pQK3FambXvH7",
  "key19": "4gYn2voGYLT9B2s3wxvAU6j2TjZ8x35M9NKptTXRzEwtELBT1dJMuZAqLDCbCJRHt9X9EdcPwZHnQmbp9Zk5sm8h",
  "key20": "3Xy2PVbvFZsyw8Z9GquACx52bx4AwkiRiUY7mb5kD5Vd77iacqU7uTWRyGzRrys8ujTtQyjgg1nerUQudRNF4B6q",
  "key21": "42LfBkk3DEJYBCygxfrjftgXms6q5NdYVeVaTYuKxEN4DPiHcwGH2XMdFB5BX5yNkUPWyBQAyB85eEYPUYd69b9Q",
  "key22": "3brPwwA3NvDxEDbWJrZR5qj8MMmM5sEPkrFqzoAAv6eNTe9nTthFfy2j4ZhAccexSLJw3XZKfdNaBzi6hiHPRetz",
  "key23": "3hyE3TWxXkXUVNx3AX8bRGNHvNEv8S1r2N22tBC95QknUUdyFKSXnxaYbrGyqB64zBxaasM6WFvqdXwwBT1rHjy2",
  "key24": "5RETyKb2wdBYaT3p9LEQJYSA57AtFN6evbupXDfUntX6eWZNZMk7tJn3gqQKieTBzHsxK7f6pEyPmiyEzDcH4K8F",
  "key25": "2vrKN5QCUuqzF9irM7Lo14FdWze57UAJ6AEwzaVX1Pu1R6HPA4vLxQvKek4ZFYSiVFg2KMJ2DG9D95aodnjUMwaM",
  "key26": "4DZ46i2Pp31Dotr9dJnG8VHAeHSFYFAvRZSpNz9eAuvhdEok2P3S9C2C7MMNg3cENEknY5nLQPcYW9D6q3L5vE8h",
  "key27": "avEVkBxK1wsuBDB3com43g627eVKg7jCP9rtTyhorEBCr5viJTe7ps4Khxd3QxK2bbLfCxw3WbAkVkVQap6MWej",
  "key28": "27i3xqo1QJ8vZpf9ntbBT1HrWeh2cHcSHQgnQ5YsiSBbsg6Hg3LZtUnb1wTaPtja1gChWwU7915a3Vqq27wgvmtz",
  "key29": "yxCv4SFhfFZoAQ2SRmP1jxyaxefe4tF941vg6X81SahSNAVmCyEnW1HuYvVPHEtsUzuJhjsLJ5h7JQNhLEu4bRN",
  "key30": "2kLvytfwDsadSgCKjaD2DECa7rTr8DQ9TdbSDvgzm7yn5YkcooPhLxXKAJndTUgZbHW9rMWYuT4neBdVsYJ6kz1M",
  "key31": "3ng9xxQXtuqQLxdB68rFReZGFfVQo5KxWHbrCVotX5Psxqra1NngsJyCracJG5Yb7psrXYCBYrsh6akArjVFTTxA",
  "key32": "5dBtPF94r4swVo4erjZ8kcn1Jo4eWjJ2dWM5vWgXGaQgTNYyFnLzrPb2MgxtCizy7rtMCq5NfsfQt3KXp7B3nLka",
  "key33": "vPsB7Vqfxy5VtqJpXE3xumhLhuFW18MvLFZEtvFcpgpt38ArprU3FjvuW6mEdE7D7jSczPSKoUiHxGRznn3cbx3"
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
