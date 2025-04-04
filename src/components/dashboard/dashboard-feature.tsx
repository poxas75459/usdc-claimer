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
    "2cFjXWH8EUuLfT1DfYkEbd9FMiytZKPevZYu2Y1SzyQExPFHQLCMGuWVqCartYmjmHRhaSn6DACBixWVebNkXzoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYMtZ5h4iUVSY3VaR8Gyy9TngN6vbUUr11LWRyRH3Gnjgg1D1QoU8hkpZcGaj7MyyV4UsNoMGnQSHfjmWdXcKWd",
  "key1": "2JZMp1ACtGeQjHNyVcyXH3GLneq64DjQas12Xa1jNEVYVxMNFcBfX1XqSic8opTix2RxznEpRUFZz8szhxNTwCP2",
  "key2": "2rrYG8V8RJmZL5DA1GX8kqFVhzzRwYZGyd1Y22pvDBYtADMFWcLF1E78QrcLP7vsryGtKEWHm44UXXtbmPRivwNM",
  "key3": "S9D7cFmW9SHGmv1dzYW6Qb2MKP4rfUKUVCxJEzvZpe4HMJP9Mf8ehCLRP2goPKy7XLXEftjpr5jZ16rBNkajvRv",
  "key4": "3ydfUHAB9kc3Q6kT4vB35qBKnQv1a6pGPJENrPe5yyCoPqcK1bmLaKyWg8k4c83mryomSMy1t65EadqfFxWytR4S",
  "key5": "2rNVCBZc4kckccixgBJnAoFKjvFUPspotbe8ndiJHKrrkP2FWsAg4BZYLvbVVqSyFrYXbdjZRjgXm2LnF33J8QEz",
  "key6": "5ruazPUDkxTrjqrLktnmwmiePP9JasQmexPm3D7Qb3gJDj2VrF4gTTgd4EAux1D2VcMDcQQ6KVgtw23sxAouzcZq",
  "key7": "BrEW19NNXrQ1YWEfigNUwGsbsK2igxssKfyDanqHSUHdsuHu24doUQTdRYoraxx6rBTDsSMLkoMvvjg51GpDVgB",
  "key8": "NCSgsZZEcAAxH3cProVM77PHXYJDW6TiKhvJgT4D8s8xCVDMn66ATuikuKXvgFiXCUfYQzijDe8jo4odAztyeDU",
  "key9": "vPd9p8oZK5jwEsuZDWknFEQtKS4qGyg6UsRpJgyk47nitycas3KiCdaeJNhcJPKkTC8yrYSEyQgg6LmmD9cFTPB",
  "key10": "4d9iyF7jGiLTZNza7HnqbJu7rotijJq6ZS5w47HXv1v7myb9qqHGkRaTewdtPiDjwyFFSYigBiz1zYUyzL5L3PHe",
  "key11": "coA8ZD3EKZ5tGVdCHRtdDAsCtzhBjMoiXUEYqYx5dGSfnx7bMAJui9DSFk29S1Ej4zxCQ4cjpya4V5eQsfTDU8Q",
  "key12": "2xAZDdpLnvVxYmp9fFXTxLQ1cJXWo5k3e3pE7X9DoysAVWTBG5Nj7rHKZVs61PxUU14cv9S1cqWXJt5L7RzEVmkZ",
  "key13": "2sWQuznN5bBgePkjX8iRMWyoatxfEsJ1WYijz8XyUiatVE5ChRdHfTCr9Dwq75nRRhQL2eQsuEmsANNX2Yq1vGJy",
  "key14": "486uRg6rpVnBgaJjb1fLau5dxuejBy751TvAf3KtCFBDwiwm1wD2WBvjrQYqs7iumo4xwLBcDYcKVUK1SBq1sE6a",
  "key15": "3jKYWCFBwUnTRuGCBrSpPv12Ss1wgnzPsRAfbTTe3oo26gy71shctaTvhjNCvfQfPYRaiGM2vURzmxVAJvWm8ADZ",
  "key16": "3NsiyAnuUnWYXXFzva3gPkyQoj8x8u16y6ZoeExpamLykBBaoRxuEZ3pfdGyXEpEj5AaGKphfpgNGhmNUgnaKv5w",
  "key17": "T9ByF8BYaPCLZz93DMRGrPSEHBvRMsAYpDB9FrqpHzdFwvwxrueirTu6nDGB9SGPy4F22VHj7oykabrRt63vJNK",
  "key18": "3TKuNJHtzW5CVAnRSSZwjWfqo1WbSNe1KdBrwTK9EuPs5YZpnXisnqUWXxcvhtttX5NrTZqq4kYS3Rowb9ECQ4kU",
  "key19": "39S6Nh75FY5LgBQbL7N5XvMe6tVRAYjqJ4ocmYDAwz6CoQuBabz6rhTrZa8uqG2zKbQADLoJSuoHYzB9kWeWZUDG",
  "key20": "5qWgyvhE7o9QRfiDtsJoDLmcrz5vzWXJ9phwmfcrS3wAnATXuwL5qyZLYvbY8njgmN1uDADDUJDrMScUReS5hiAF",
  "key21": "3SMP6r9rB1DptxJUZ8D7ait8T4UPi2fEsXteVh1aiiRsuzp3SBk9ccmsE6kvftMnrbGk9Bypy6yAYUbyH41ghMRp",
  "key22": "AF4nLvgWP4U6iJCVPbTgS81anMxnVJHfPnZT4QDsdCcjH1FMxKSsmVNMHHCa5cxCTnD1AAU22SP31KXWMGCnQgn",
  "key23": "54UiDLW9G4FgJT1w9NSjJVuGG9fGH4ehjGo1mXYZ9PQqzFh4bBpBZPhgDUZccNAbFsfW9B3FFtPxcufudpEQ2jNU",
  "key24": "4c1VKCoALkj5Go6eJSvDMG9zuMcMVeSEiiSRnsaaxRne1eoEiJykJZibnKz6iwz896XmhY2C9fBA3ZWCwAn1g8PJ",
  "key25": "4tRxFXDLeRVyJ4DG2ZfU9cukM8pzD81JDbrhToHg4soDuiPajHn5up1gPJ1qKdDPnZKxk4zQ8SdiPrhygSJXtMpj",
  "key26": "4uNgU3ix6H2Q2vCafSQt1B7nu8MDQt9PndzL9rTRSMZv9CqQHJ1yfwTEbs5MtjvdmhndnJ9aHXrmkZzH5rwrc7bU",
  "key27": "4WXQVCwomPBVoyYfwtVMVrWXp7Z1ErXagsXb1kW8c6ncq3N3XS54MEXhVB5cfn4gq4u8G49UjUX9HwYrUy8s5ffQ",
  "key28": "5FQ1MNtPkt6knFbREeiBD57yfjRgi8wbdD63DVfSMyywS5g2AitZcb12bGVWQDvp7jywL2KZfyszM1FQfQU3Eo9F",
  "key29": "3kjqvjVGknopwXHHtsjVgAa5mmyw3sJPdph3Shje8fXKxCGtuetUA1K98rjN4WTwzuaeWWcdqiU8n2FyzDdry3UD",
  "key30": "CMbURe4SuA46SgquV4pR62n8n6XRh54fymgFqpQ8Z582EhPEDEws9eGHwiCsRnLr1dskAsKrqLSbQSmx2kUervh",
  "key31": "3utTXZCBNZTVBeBuyJbqxyGAQS4F4yib5seK4bo7yipobByR8V4LDkfZancFzn5PrCEH3aasc8YR4UEAoFLD9iaf",
  "key32": "UacpFJLV2zYmsXVvhz7V926VTKNKxeDTzJu7D4kS175o35UHYFX6yENupZ4EJQmMxbncvnG16iNX1vjJnsR7Nmh",
  "key33": "8hh2wwGoeMgwDfeugrzBQ5nR2UBeLxNzW75LC6xA98T5VTvsqDUXxN8PQ7U7hMUSHxVNRYW9cVngNmUHP7RShJu",
  "key34": "QK1bFS9t7VK6H2EkViyPDeE1eKpkdcRVubmhobXFgXDDfXjc9mzdem6BeHGscTuQaWQsH2VZ4yeWXAD8V7SKiq6",
  "key35": "w2cmZLqvCYnaC78L6yTvxv9CH2H5XRv3e4Mv7mvAQrZXESzUaCbACaVFXxWLiRDY2c8opmCCajN2YitQ2rioNaa",
  "key36": "4mBKqw5nQeAzY9GYcjJcBar7ENiNhA3uVA4wNYUnhhZumFMyRKaVFmCeG7R5zkhi9Bv8ztP2NhcxSN9FxHt7k3XB",
  "key37": "XtMF4wGrjEedcf51vxKdDR8GzRhqRaquxxjAV5GzCrMNAZsd8dcQm7twz7BFX7uiPcHWA1D7FG5NZstsqRxunX7"
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
