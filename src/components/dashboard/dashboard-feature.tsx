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
    "3hBuJxpc1LopnHwHqKVm9AUUVnUGfcn2nBQj648bmtxTYW7y7Qvwb4cksY9ANYmLVUxYvJfPpLxjSTSurdnVjwgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcJ2ZkANxCJFz5hDee7Jy87SBLifrBPsxpwhz6GSG8y9zgqws6PVisRoA5tp24tQPA3qWWYvHaef4ax7jEcG6xa",
  "key1": "4rTVHEPDHSjCFywMvKiHP2ouJtSdxpaMisiYxExzh3cpEsxgQxGMn1BuT2vVgUS3YjZHQWHzVstYEC1S5wFgy3uC",
  "key2": "3HF93RrpH2r8Aci8egKz4m2otyDNTJh65eSQJ1KciEg1yXcJHuv7tbez9LAkx7BxK8MX9StP7uiNE1yoQmuziwje",
  "key3": "49Az8JGwFJraAk5bN9yuDguJ3VHyLCzQsZpKU1TraUbkK6mKC9U15BFfHX6kccLU9eCfWqdqQiB7Fv5RhsmvY8ra",
  "key4": "5xmhx8KsQTKp4JAV7NTp6LZfZCGCEmSqD5YkgYGjNNmP3QkqDcdJq4mhER2qFZ5mt4fsmJVoyB3AH91xbcYF2HR5",
  "key5": "2brvGXegMUcNSGeN5saJJezgFVA6bTzox72oGAtBMjGrHVu7DGqYrpEL3r4PLogDccbgqfB6NWyvR9NimjrsAiTX",
  "key6": "34UmDTqFEX8HnytJohDFUpdXJY53vXXNXtCG8DbepVCTJeJfxBKDtzjSTEKRnaz1Ldb8sMJP4NirvX5qjdSspDY6",
  "key7": "2AsmZurtwKmuf27drM4Pni2CXsUQUA4Feu8Eeykx2R1pC8ucqdFXevmwfmWFMTuG4vJPmAcXhNgQLzRkmZDrraQx",
  "key8": "2m47aYpYFCENXPDy4JFtkJc39VxziFaGGck1aVex326HzTWa82ReK8jUqYeWc4KJxhGxnhTAYmxvqUuFnad3tNAQ",
  "key9": "3z7EzbsKQ9tZKXyEMhW7TsED8opHuZD1oPq4FYuEJpgS4mKHtAa9JhYkSNmCTkgcR7NQGTye6hFT7wpNoTrhrjvh",
  "key10": "2FTYwtNCJHDrpHfwQzKKNF98jDVer7tL18qKJZ3NUNxLzeUXHcKAWKtuUS7HBbC5xzEZnVkFAQmiMC8xpmtk81ho",
  "key11": "37gcWqa7b7NP5VLPs5uX5yJLb1TCec7MU2zrb5j4cq1HG1PNKxeRabRfpFd3H41f1CRmAfcPcZZBx63e9coT8PSX",
  "key12": "2LnvrXQDCBDjPGz6ivLQH1QPzY7Jb4Vrfpmpemt4rqc9ddNxLgW6osmzSt7FvRaNejajJqieDyMUr7vpKKjdpmQn",
  "key13": "4YWuAoV4bjFg2GERngo5Pz32pXdWr7PP382xorYgk1HbHST9pmEjDndUA9QmDWJhf3VQaRR6UpC6t4QU3JnmVuJM",
  "key14": "2APFVP8fJyZKbWVKo1NFfojDksMrx5NpTL6maR7t8Dg68kiaM6SWSgR4hGs4niKjbucZuyVhR3vh3kZDk71eXUZw",
  "key15": "5CQKMuWWZideZmrZHudmGRf3PNqdTnA5kn3K8XqJJKfPLCWK5qNvKQYd4Jbeuy8ZV2gzz5GXJJCLRgKoLxBpc3hh",
  "key16": "3yUh9z3J2RVnWAiRwRM8QVjF3xUCWgHdcfg9oat6tPT2dDKVQdPZ4ay4kbKUXcXshqoNzBPQ4ropwrvbqxkWDaMv",
  "key17": "4pv3R1QpJd7UwihMSKf6dfV2Cuef135mZnf92nvJro3UTNK1K2em8pXoTLbrFaaN5z1obZQduhgWji4kaNMRqTLf",
  "key18": "3CESNZLBT1aJ5Cnw8PetJCLf4vPjcFtT49wdCcFj3D7rrkns9KyzT7W1qum72vrbgpGwcF6zTDLipQEumhuwvScf",
  "key19": "5q6i2FuK2zVQSjozt3eB48ecUXeGH6nESHbHEmvb2CA2Hyg47oes1KufPB4pPPqcvfsFRyturDU8DiS4qDSg6mGv",
  "key20": "5qxcwM91wKnkqXt4LbiSHhQTKhqyW8i3QgBoaiPHQErHQQVCaFyT2o8AHYi8hFZQSRkxibKa9a9rvtMq6enbuRnT",
  "key21": "2zdvECtxQQYGKtR9PYt66t8LGYUnPjFBD7SbFCr8tMNVr9zkgnoTvsAq8TudcAkirXApN6S8k6ZAANNESqQt9wp9",
  "key22": "3FEUMGZfVd5ue7A5584Zpg8V5SAz1EcWfZkDVjvfcUGwELywqp2eYF9RaYTGVVZzNQrMiSXLMvzTpj39BBvMp2sx",
  "key23": "5zyQzxRVs25HtUg3DFPSr8WdQWrs6NbUz6r42Zfs8q6xxfEzqHHdah1VbJeD8DyYqNoz577RnAcop4r6Ztd9W3aA",
  "key24": "3HQxwtb5UHim1m6q5sJhNa86Sy5MUrHzcwxiCvoZ3DQSPLciNR1SSjLxH6umi3TTojNp7KMYfgZ4umhsqHHK4fC",
  "key25": "4vQNBYD4P7qZ94Wf3qQDdz8euAN5xzvVDHLcH7PNxKcT558evJFvGZP5yLPEkAtarJ7B24L9kbxTtgvCvDHeLsLm",
  "key26": "73YWWg6nQ3Mn8yqdMDTjJwdcM98QcCSDTkANCqTaHV1cUiLnSJrYna2y2haBzGyxgrkY8jee1W8oErsEboLMSPN",
  "key27": "55mnW2bFHjBwwiEFTBGmauUmtHkvLHgeEQSwtHGeeMUCPdrTp3f6MnooBfNmVLQQMLB6CuWzeN3c39MTjtzc3xqn",
  "key28": "2U1VEnHMZ5r3Ke3CdwKpuNpmYAtDCEK9iUBXs45EXj1oj7k5DhNJS6XekFNhGHms1U4LqaTKf4AHo1VFcmEDD2To",
  "key29": "5DGvEFkeb5ncQ5iyDJY8RHZRTLkFju4GBAYcFj2cvJRTdpQdBQj8s7n3t8aGN9UyR3mGBKaLtWDQqg2kE1wk2iXT",
  "key30": "4M4Z6ppsxtDk6cLbqrkVAu91f8BCEH8uNev6Nz52Zhn7F4dD93JZeiRqFNkjdyg9KSZZfT8x3eA3E2hmNqTP5cvF",
  "key31": "5E8XQB4HmQoTPjk5gJb6NKaQMDmBwkwq2XP2EFnwDBN7Ya74htUGF5xFS416SpJSXQ1SFvhPnP5B7rrkhxTfyMkb",
  "key32": "A1TouLKED2ZdhuYGvqgcMBY4d81o2JiPN12yjfgAPKs6XoTwNa4VSPAfLYAC3YLbwwTkhX6fi6UWqRp5SpZmd7a",
  "key33": "2hvuuPjCNyG9XyS84TmBMSaU5RPJKiGBkXsKGRHv1aFgpun4s4hafVvDVg492uzKz2KgWWPHueF3fTcimpZ8PxnA",
  "key34": "2JyLykuMBPnPJuFgaVzEYvTampEvQxrin9naFBjHVthtyd3GeCJYmgbyU5aoCF5dud9uLvWbCbDEpcAcbxSd1iqD",
  "key35": "3kyPrUdCKpW82oPDXNREWifPt95eha3fMbqqLL6xcSWoGTb4t8AJbYhhFCdbypJobKzP53uuUYdCAFWP2afPmqRq",
  "key36": "5T1j83etZGqTiEJjNEkuQpGubtf4V7wKVAfH3eqZbzFXVzjmvFSKKvYGHe6CNh58PgnTznaZw1hcFxiJjt7HffyU"
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
