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
    "4zQfcTav1LtAJBm9qB1k9bD3KRdLpsXZEjPY8wmGYbpo9DigUKdt6gRT4aCTEFJpPMpJycaFPJaZLCTp1zWUbWSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N1riFdcE8yxiMdVAUTEcBnmmewtBfZ2rQWkfZpMofvY37fMgRZceSXEMRY8BiHW872iFsAcF75P17QuhjZju6kK",
  "key1": "4jYMaS6HDf8N8qpBu7Dngbe1he5TwDfMR8WnKrx5CwY8Hs1MsVjDPZoZkXbXHFCEF13yH9oGeazNR6VsUkSPMp3s",
  "key2": "5BkiUMBEQMpirJAUCt72g7mNNw3GF3XJZMkqgH8wrpMPjvbUbRDxRB9dQC3YZehPZNmeyYrDPFpdynFjSQ6kH6Yv",
  "key3": "FELJUM3RMDi7NT92xFo8h7kvZfRQ6HGnrrF2krcQknSfbCKxQkRvdFiTcVZFuVs2HwpdxAUMQiiEEBTUBf4cGkR",
  "key4": "Sh5vTKXRHt2XkaqGSywsJz4jZUPC5pPMKyfPHVGNeUe2ohJaegkwy9TzfucPFrCDfuXmxXVtEuSDw2KToszVfFo",
  "key5": "2ws3tmSPyLGDqEieKPd3zm1RWuEWWkD55mxt2dETiHv6PLeA2vw8Y6ynRdcNXRFv2qoQHU5LDzKnLpgnyGXAfXPu",
  "key6": "3nSeoBxzB4DagnJHCJWjL4m8rfrrLw3C5Z3WBv7ekiz3z6zCohJuaDRveabX52VMiRh3QSdUrZoEkaVqG1HACmsq",
  "key7": "2JASd9iXNXFMJ8y68QRSJsCJAUNcuVXtEQtD5srpx7qdxPKbJneaq8inwopYd1TtKgeqtRzreMJrrWK5Yv9LzGUQ",
  "key8": "3Y3oHqn4vdyNA6AHroD4zoUJYmTbRdkbNKRMy67Kwo2z54TSRujh7N9YhTxfThVrUFWmuFFrkEdJQJoT85Bhoni",
  "key9": "4oDG9jKBr4njczhsoocWjYJLV7JPuFGVSzGziNRsBU8XXCRR2f56SAGYC1sP3NZTRMeHr7R2pidWWAQ5ctekb2aw",
  "key10": "4QFeJKETdwxFoC5ukBYVAcDqEmvCfSHEcoEwNWuf1YhBtN76t8i8xkreWt6kuTFeU1zcbXvEPYeQRhridWH9oUSM",
  "key11": "m5UfaXqJwPAfRMTRp5HTPKNGbtxmct8yxRA3D9aK8uX5yqW6REKaaPuH9XMviFbSMpiwyeXW932fi8jyffpAyvK",
  "key12": "4ZBCsJ4nAAxRtL6sLJ3mmChD89f7A9vkSAQTCzgJrKVojDF1r3mkyjbnFTffywbdopcTRzBA7mXZLMSuK9Qn1ghE",
  "key13": "2sYMztzZDuX2Jde87ecpx1iBN25hdADGqQpZKZqEzU3woyCR5uZKG2AHZaxKXEhpHhMboBEvxs6ucEcBntVkeKz1",
  "key14": "2LwkVfuGkc8f72FuJoBTGu83WG5Mb2sti5tY4DBRLaCFWk1HJ2waVHEHHrkMqehW2mjP3QBE2zD1JKvvw7jYJkNX",
  "key15": "3yEkUu3tccz6WZP2kASJxnV6KrafUqvMorGYTC6zB27KN9p7KbPwxqcRHz1WB4FWdzZN2sceXrKDJX7QehLfMZFg",
  "key16": "2Mmg3Kpc5NXijEQDmV7UW7Tm4tHjrXGjdjA4tnCwDcAz5ntodpbXEfcxAp8yuvFKuCHHWjYZhmspNGVmBKwKRd53",
  "key17": "2kGhfPVUFBUxQMqUEWV4HrWnmxoyrxxtrt7BrQfdCT8sYGz6KxxRFn3id47ZDNtXTqJArCH7YiswevVuwvZtJzRT",
  "key18": "4CnSAiAX76hUsZwTma64TMLLZQtVbo9XUaptMijii54dUgm9KuptRezHPm5m2wgzyvBxQC4DzKoMezRoJLkcqqgc",
  "key19": "2Js21R5wAxXrycCQijTPrbJdahET5eHZ2Tv7DBxfG2W3vc61URJRyQzzBYhDNsJwSJGFYRreBtsWEmqNSuvyPfYS",
  "key20": "3yzLa3YUW3nHLKfZB3wf48onrHXkDoJZjh7Rp8eumpft4yZhQVtAJXTyXe5Po4gAoZYZ7HAEYCv7gLABJYwxRHt6",
  "key21": "2dNK3uV5XrPWEcST2jUBGuJEua9R2fcfg83TaAUUsaEy8HroYK2gKgqHtVVeX32eJ8hpDx732kZBtjxY5DuMWNaD",
  "key22": "491g7W8PnevR9ydnPQnVTwuQoFrtjaPVzwcEUXTCEUNJNeZ2sWugAHfvNPZL4oRfPg7sdCneR1c7ZDtAroh36BLE",
  "key23": "tgcFj7aW59nYYabLeJpGWDpXiaFuSZg8sxvHSX2r3NauM56bTwmjctQ16FtEdiNX5kgPveZ2buGnZmS91M4dGog",
  "key24": "DBSs4GCURQz7V21wcgg19EGrBS2oJYDZZU79Hw5tDBbJULu71WcVxHyMQvhb7PtR5Ae3fed1pyKEWnbNu4JTsgP",
  "key25": "2ZF8smPBvRFBmf57AWFtFnFsGnLZg2n6oaaJcvo9uzrYm5FQcptssRrWRJKQoCxX8UbkozdMAXabjKSwsufrkJP4",
  "key26": "3NsTM23ghGdRmxk32a9Keh9RPFPfX8wFKsS1n678urAbwDSzmEJeixRuWgDWWGfzcRg2xsUkXu4NDzBvL4z7zb3T",
  "key27": "2dPK92P2UdugfYpVz6cPwxa3vAGHCTbSnzFQvVhbNJ1DoduPXbdSuKTxPoX87JWJiAbseSHV3JFA3eZ7JGzh7Dn8",
  "key28": "3PJrwym82X3mxqxez8whqskMoa2PVadFfqtQnZ9PrkDMNxgMgXfQG7JQ7S642KQtiq2eHcqzaX3EuxwdPh488rUK",
  "key29": "WRHjAsRtFBwZ9x97MwWA1n7h1yFZwyRQHopBcTnHzzuBqekFfrR2omST48Ay8dFady7KT7X9eYMmygjGZb6cceo",
  "key30": "3xuMtAfH7SvmoXQLF22CARzazFikKR6XShpfqhSeUanKAUpjNoYkzqssjzMLYMWsxJPSkrmmRktzgV7yffTT72Uz",
  "key31": "2PuzgTHuhaTu2T1dCN9CqouvCG6iQxUpmjJ2RWBAUYgg5i7nESYXTnk13y5Z8VBbvL3c1MNyQGY5MY1SeM7CEywy"
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
