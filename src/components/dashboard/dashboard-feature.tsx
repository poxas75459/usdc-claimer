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
    "3Lny5g6jQxHzxsByKkZJLmhdMfYNESevD7wh1MLkUDMk7te4GqvhvsLMdv1am24uuqD1FVuJJwgF4wFWms7n2EpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CvosVBHc1iYxK9i1quaHn6uzrwYRSD7HyhRc19v74JTwg7f87pJ3TEkmb5S413XciwoHSZK5sQFxqqUZk8u2RhL",
  "key1": "4XdcVrC88woAvJap8Dy6sPT3qvtPKYJ4exnuLyQ2HadZaYLedpfrgfseivGfThuvNpoczH12m6GjGrDJAMvYDyAa",
  "key2": "4a485D8yzs3q1NJh2NtzTHii6kDeGhBH1jX1s1yVc8PhcAUuWRiz6vW3A7i3dWzZK4F3N2U8nxqLYzAToA3asyK8",
  "key3": "3QNJEgrinV94CYyh3GWiPeH1fxXDYmudMjE3uG9WARyUrxNhuLve4wa3yXkAPCNUDroeczuQcfdY7yVDinL4Ayfi",
  "key4": "vmSb9P2bDeeBZPWFQTS4ASijvCPztSiE2ats894ZXMSWtTGXEfab9qCDGTns9XkT4uyQmLCFnzNbFokbAwhgHb4",
  "key5": "4PcxEjraS8zEFfUzZLR8a1REnrvLTL2bcCvNiVZ7BK8xcQjakRJspQ7RTWaDAFK2j28GHJAzFVRD4SZy32AFsdKY",
  "key6": "q1yZFGEd59bmZahptxevzKdJbZ9oVgAdNojuncLyUmGic4zDwiaVzMe6ZfRwCmsKvGqyj5rabanYvMoKpbyZQZb",
  "key7": "2o7ZtCARJFL7XmnupFctkKxYbtNbueYs9HyYFVKUaosAyA9yAy4Lw3oXTVXQRZhpZRJUef6aXxZPPeyYTpEwDQ4Y",
  "key8": "49ZhhtXrhFjV12ej4BUUMYhhXB27EbqLzCpvELGab4itar1R4iW8jz5S8iiaBiQxuCW2iz2HjVPRrfnQUeea268C",
  "key9": "259Dw8FjW3x17sjqj73hV2ziSAsxqwuGa1GFgdYTVzJbZiYx1H46Xox7eBonApChj8XTcJmmLSCKub2behCy2r6w",
  "key10": "29G5R5e2jF1pitSXN2FLMXQA1tJcuV7ZRit85DaqDKzx1FQsXjiCPphKGXsWhJW17rz15RCLw85NE8Tst26TWk42",
  "key11": "5ivjwJ6r8gRYZDWoPSNc5NttAthqCuBwm3r26Kz6UTGHgixCWceCnc6hZPnC966EFZ6V4tBr1p5hLoH4PVWX5bDS",
  "key12": "2ibUemztb6zAS7uMxXra2EGcGfMmgkWtDVNC8Up6iN17Gg2RQJxU3fa6Sn99Qx5AJXJ391TxJD4hPsXZht5SnsMm",
  "key13": "4qSoSAcf5b76w1f6ZuKGXHtSpkchM1rjdWoz7c6Yi3hjhMuvD8hBHWtuqHRRKvvttSvNdVyzQkowoGMCzCFZcAZx",
  "key14": "3UMQJCw6AzX2knDUuCo7JZCVFYUKuKayuRMC4ioUXRuUitZMfCNvTgwDeaL54UEcPe3Ug3si8ebTYA5JMCqhRCA7",
  "key15": "3Wth2htVy4UJoRTurNnn82M557bu38LdkmvQWcq7QXMcqqZkaN2yKgZn78XAfGcxjN1oATbTzMRSnzFkW7YB2XZX",
  "key16": "5Zy8t5vfhNnq75ArWci7X1B67n1D72dDiyuSxLnkYJrFVr1aHF3zCTxyuoRChM5CatQDmYG2mN37sixPAbXzsjj3",
  "key17": "64z34mrRMkcCza3tYmKCMkuQDd3UBHsxSkpk9P21k2UQUU5LA43EbZFrXZemDGKWdmp4drhrqpTtTMNsTMuBUJL4",
  "key18": "5KsF4UVYYiAjBjBNHDCqW9K7vYnwSvaq6usAm43PSwBHFzmNRiiTobMkiWgPvACBi9GLvtNNL8213tkFyaRaQVNj",
  "key19": "2ujRM6qmFo4kLXUPphNjSaQERsTNqGwRJEmbxwAw73393JXN9Qoz9QS185yi3XbF81nXzLAG9Gd9ADYP3ooieiLX",
  "key20": "4PvhnTLDdADNTct2swExt2SHVYBEfA5n3WXsuTH6nYkH8vp8RsxTrMAg98HzP6qaqZTJXbWniR6VoyVWiDZE7i3i",
  "key21": "2QkBsnrVLVDK9pqtMy6nf8XHSbi6NhXaLhTEDZmYQVfL7YB6JRGmwhmdxbAeZNDEWcfZ7XdCCbnWvV7hovxgjebs",
  "key22": "F4r4U5W3DNg9bV39UbwpvtBFm3XqF8ch1AR5xEPRY7yyH46TC339qPyB4kgn2rek71hpLfMQ5qXAFv4DVcoJmZk",
  "key23": "53wJe1PTxZEJUahptHQN9UWtXR1gWMeYnn51Y5nMJqjzACQm9Ju8Skk3F6cavWy6GCd7rjsEqDSGJXnippVNb4At",
  "key24": "4v8cAwZcMhNx1PgfqgQrovTanV6fVqN8B6oxcgZkqV9yrXtKWeDqpw5WXCT2vnyqyj8xnJDh9xz2gf9XEDanBDxj",
  "key25": "2JjSfzBowKwU1QiwUDqjSMtawH9wgKCzd8XPZpPQcx734dmK5MR1GPgAC1hH5zP6c4XPkY5cuTnE2URktDum5Gb9",
  "key26": "3DWefqJDLKd9JWAsvod3gDAc1LAtHqMsWh2VJUiNpehj5KxcPx2euUhpMAjrFaKjZPfiecd5gP4B882oK9yrXxND",
  "key27": "4WdgwEiekj2kPPvs3eKce2UUTZfSLcr9ygzUy21GfQc9qQ5FNjZVkLKsv9bpcNGviT6ngzLHPGL92T4yTw2Mgk1C",
  "key28": "4MvdVxne4qf4ShLmekRsjMWtVku14Y2wpMBRMF7c9H6KJn3bs6rbKpcffUMsKSwnqvMQKUXQPFdgaiVN453YtK83"
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
