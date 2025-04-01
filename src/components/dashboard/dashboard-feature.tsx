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
    "4E7P36fMusChuHey8DkG38Eh2QZpmRvX119ZkEpBF7vM65p7x295vx2y3FCb5PNGxUQD7ErMRJVCABS7NKAJ4oZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbgDT6SYGh5a1Y78sADoU2BygSHR97RLesXGsTbynLmSt5GuXZZfS64QSQD7RGhGLjn6U6qdiMH2zm5TyDzcHyd",
  "key1": "6TCSap488WpRxRAskTjcD6L2wiPiesWrMYZRUNu7Xu2esQgLJYGTRQH6EVYhNuDUJVCZkL9AL1ZMzraSjMynUvu",
  "key2": "5dH7xYAXr5DKMdwfdLL8YdMg8HcXTGXWjLf4e4aBw8LSPN2cYjv1eEaZ9fWkRbiCAMPHWJWnKL6EnLGxSPtkkQb7",
  "key3": "3rdhgxgRojd2uxq8pyTumT76rh7JUkNVmtVvk9TwXu7WUe7q8Qi6ZArgx7L2vKJezPo3L7BJrnHCtS5WYis4D4Ti",
  "key4": "5hj42DBbs5U3yMYJBThjkxDbhHkQtdy4QPkaWyr3TsdbyyMe2HPQ2UgAm8qokAm36HvePDkZZLaczGxPKVCwr323",
  "key5": "4BV7z19smRHxAMKaFidKsuSGfeFxqp3tp6fha82yJmyja4Z7wtJ4tfsoMhbiWH9RtDGCddQ2EgxbDB6oDq3zh5zU",
  "key6": "5DwhZGZDTZJjmdMehXZG7VegN75ZuS7JmW958a7mCtdgqJTFx11nUvnzCq62s3yKpfrZb7NomhvWEc4BXuU86kpq",
  "key7": "4XDXS2LZNzsCiPwT64NoevTjF1CFojzXer5HwiA6dGjpRquTvLRLXSVqV76mMq8SptztzAdoZd8jPkkWCvtCAQxa",
  "key8": "4Ka8AYLFQu4qQwbiM2deqXWJ4c5pnEUAtumVfNKKgACY6rTecGxGoo1joxVJpoMXZYWnSFGQqa3cXEZdGZFDXmSC",
  "key9": "5ahYNAWaJsyo9rSXNwmv68HzUDwwxHGgyUEiGE5GysGU7EKVarET3ZnvervLmstYiGrHECsukqtSvGt3GmTET1HW",
  "key10": "38Zsh3v1mdMLTGcEhGZBaaxLfKCcaXcHCXWAhgE8xFzkQggjyDcbXMqPnNbBx9gY7QQ9XDU6a5X9RxrEYT3ZZ8pU",
  "key11": "uSmonjcyjYF5iVBnozd8eo16yJyUxrRMS4pkhr9D3jp1Y1Hc2jESptBr9KFxqyoJWLcFjZnQmn6bQ6USpiTNFQ3",
  "key12": "54ApgyF5zcaRcmRiM7tAV88bttqgNAxzq2K7DdxgVSY3rhCxXGrjSqqYNTr6uugLytwPRLBpcZpXJZaitWs9UMcw",
  "key13": "5hj76idb4heudqxPnM567Hsg2zvDRgTrR66f7KQJX76NEjsBVv5GnxAn4gopeVBtxaSdU7FXfJLihJE2NaRU96QV",
  "key14": "2pjQAoF9zyKiTem4AFqASRB8V6qLrd9ZQrpYjNpXuxtjBxeX4tpf9vLxa27nhZvZE2RZjz8R69dCdA9HRcrY2xZ9",
  "key15": "2cGmfu79oJBAB2RF3jTVfDE1coDwn1r6GXMzYy3kUf8V6gDzTCB5ok313P9qrMx6gHEgf5NaNWXsm1PU428EzUWA",
  "key16": "63637kqRA48YdkmAztd8wN56EFNmSJwYS7j7qk1CaKo29yuYZVed2Tfbmmt8C52ETGj3pMwP3u8KCQBCiTsJa811",
  "key17": "5F81rFYqLkupEMT7ZVJgGp1tcXGDnGfRBTtbSYH5wH3Y4JE1WNdqMSNdrn5cpfCqzVGpUB4xPGed84FWFaQYEcSm",
  "key18": "5jcn2VLa7bhsujv69wWoLRwY6UmvnEabfev7ER42D3fPK2F4SGbL9eMhw2AdPjvDRqu7oCtxu7AbUwMBNFaaYGfC",
  "key19": "k8iJ58yRBcETcnijcobMQGQfbyPKqUH2iHipNzgH3d9hqzueJsSQfjExKMT7sQg5pisWR3Fdsda3G7hBkyvMmuF",
  "key20": "2VfNXUjZA9KTHv2kQspBn4qed75TrhJBmN3ttHiUAwKTMafpHAEcMChh9BSSJcbLcvgyrcUD4q1c2Hq4ny1f2mqU",
  "key21": "2UPaT1icLcpMjAb71tzabtpnZQ9t2CdnGADAGqXyfx47VkvNovzksQiK5sgczNCXFq5mS8htcVhQzccgKE8Sx7Ss",
  "key22": "39WPiPzLggyH2XpnjsFYtfsX94MeMNrfrcgdbC4dQwbGCwM4ji6zS8JeyqZpJACuGMh8M9hc9jKS1pqDiCKR4rMr",
  "key23": "2UX8h766V95Kw5HaHiSaT1Gevqb2R6HumymLVvRYt2Hg4kQVjYQjc4xQfecY9x5K3no19mu6r44v4UiAtwojbPps",
  "key24": "5ZJL1tEb8v9Ko76mh46PE5Q3jZiy6ftpKdsDMpfKu3bbabzYNbbNxFhr3K7q7T3gSqMVxfTaz1rBbZyW7yZi2ivW",
  "key25": "3UPnF1Agh6d7nWDmEqCffQpbyR9daeoEnUZ7vsFThpdAC6U6keDedVStB3C5EfpmrSgrgZAQ3UkqwFoQA2TLCVU4",
  "key26": "33g1dSwWcc1gxMc6L9vK5wrxuc3HbBWfvtMzdEeo3igWocMp9GvBXHpb5mXKeKFCW9KEzYFYK9Ee6Amypr5YVANp",
  "key27": "28RjZGgzwFBzmevbCvJBXk9i6kwiNQyyS6Hchgcvdw5dAZQVWUVurUi9uzcztHnGL9zu3xeuTNDtKba4iN5a27Fv",
  "key28": "5oAMvcBHckyrQC9CFc9bf1CqbLf4B4L6wv1yJRBbwQVdPXmo7Unbi2s7XJ6PiYDSotf89C1puprqbhJsWgikpieN",
  "key29": "2TbETZQrD3Fhej3L4UhANNKnABPgjUdqknCFis1fzroHcNFdVbNmQ83xkpCvan4WnixPCxWvvb4Wfv7XHbaWCdzL",
  "key30": "MjvZFQXZszAeHhHaoq5bb9sK4uwVinLfLfs8nmoPg8J7x8nyVPFY4L1QTNkQe8WRXnnSkJpmLsdn6pQ4gSUwMQK",
  "key31": "3JN2TL8hpQFhno17GLmG2nW1kWnZMzu4jcUSZGt4Jym6miMeesx2XpjVEXLXmegDoMqZtPaVUidhRaxtJdXKdnDf",
  "key32": "28SRUdVKZwNtqgAk58agSoTiMWczoaPbV8CNPQGugr7v6SsmizvrQG3Xf3Wosb8heSjQv5PirjVaE9YJEAuKkMRk",
  "key33": "4PkVUQYcjoZjGbjGDxQbsqMV6rP91ckLjPGm7HEF6Xh6LaQLEgVcjGU3ZDDvqkkzbkYuiDbV5LMKtxrHWEbHJGqZ",
  "key34": "2qF3mt877Q8LpqSTxrY5NdsRTKcDFDWC2AobYB2S7wsgUrz9jsHPdH2i4gn3jPDQsHRRPDns72r3vpHfhbr9bZtS",
  "key35": "qwYTRiUyZTWd7ukjy1EmUESkD3XhsmbD1zaJUzr7SJQZCdfna5uNJfRhKbR1guEDhNS7AuWMT5djZV18F81VYjV",
  "key36": "21zy16GibeHDyQ81uywduFuwoQjMX6ZWuCNkG7ZMPh7CjpaqENBD9taB4YUtjnt2NMZNyPSqnLHb77WKxwtikYEc",
  "key37": "5zWf6porG9io18X2ZWedGrdtbwZFvY1VQgPbfjmvybY6gH3YUE8Nt6ijD6zADg5mjEySNcMBUumSMy8caYt8LLcx",
  "key38": "4woX3UWnQT8AQVy8ssNhS2MBMLRgv6NfhLGAN65HaEB6DfowaCxMYNqFhraAxB6FuZ22bKgfXNGPPdFuPurHfbLq"
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
