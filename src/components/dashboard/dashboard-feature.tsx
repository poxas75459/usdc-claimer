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
    "3Pdd8ZdrcKmcsZk4WmBXdJXvQyueJVGkjoUf3R8ekJgU21exwh9cgqZdUtPmQaEjkczUjmUZnMTaKrsLEcjirw3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4VcT8jbCYprS3xeKFQfQAYkRTq8vDLauenD2NaESJYj2TtE6MdPK7pZQeymyhQ7MeXX9BU1UN3ZEgmNw67ETe7",
  "key1": "3Lw5dZGqhseqD1KpnGskF7LpLJb3g49NUne9gpXLt3vYoQenZAGrt73pQ6MukNLXYbnAsiKJ6Vr78Jb3Q1HwTAb",
  "key2": "MYnBmTKtwWPpEtsAwCC5feRbKxK5LwYvp37QnLAjLqfmQ69gQm7DJX7bZrZPvEnMm2WbVKmTEYqGkVhcAw71haj",
  "key3": "2FmiHoqDyNKACt53ytJsHMApWjSrdWg81wnPKfU6ws8Kr2zVzxHbqWcNb1DdtssV41tycq6xwFCcJw2iymJ3RDkH",
  "key4": "5ufE5RHSuQjdgLUcSaeFKKdAaXBYinV7mbWbUZyyD4ZzwZFHziRxqbTXvrxCL7gsUfqynS3a1ESzQi4wmWi9YJ8T",
  "key5": "24RvRR5EiXoP37CJRX1mTE8yUyCVLQw3AV1tGNPJSqr8APsvspzxfxG6AvsDno8bbefM3vCMc8WcmBDmZhzcGNEa",
  "key6": "3tFKptndWBXw1LYYSYuuWkmCLSApgmkZKzaRNWjU5Q18mvMBdjLm9vPcisK3Rfk8NQrt1dtVGWiCfGmmgXm5MvTk",
  "key7": "2akDSoGpjGxhF5HXSmYPmWSZbN3Pog5Z7mhwDFmZaUjdSg8tm557kyBefQ3HyBE87AZHhRJhUFamDMFqEfjQJkDR",
  "key8": "3UuZdC1ryE9PNxowYfwuiTtF6czsSUZSviHTbUXPR2bSGaBkD55mi2dJ9q5aRMgaTJ6VbDMozxPZjfbd2cx8Sw2i",
  "key9": "5bQKp2LJrZoLZovvVTVib9VKKBpr7KhdHsWBqUjaoM7FR2dkTsWhupFf4yuCYy4MLDDM7eDz6H2PFMUwovpgGeys",
  "key10": "5LjviiCZT5mHTRBFcZRCa7Xcr7XUfjjYkTmbB1RjsrGYiBuHQJ3FjNVZNVo1eZopTLGvRB7eyVXKq5vyukQZ9sHA",
  "key11": "2bvZRJeXp3Zon1Zx77ZN8wXPFj3XDxU6UP9P5eAkAM5T8E2vhTV5Fez14fapwy9Ps9gbXNGKrbqiSY1yoxWhM15A",
  "key12": "5xsr2QVjraoPgdG2nYnSSrk1RmEy5nwEo8cQrBqSxX9hynfphiL4ZkPAtyDgu9GpjKdzvh9k1R1GYD769UHKM1UF",
  "key13": "2TnKMhTGA7pmPyYCbrBx9gsdtV1saBbcApoCgchYGGmrJdap2QZzVoXJ9VCctVPg4yvjfA6ictKdTBLRYEWjg5Nn",
  "key14": "5qwXmpU7it93NMeHUfE5oPwWwsDKGK5dW5j8R6HcKQWLB7HNZmQekejQNbvsGmfrbFqNoFbkujfLaCzqDNBwoPu1",
  "key15": "318JeMNuWW5BNGvPo7ubx2Kw6y359pJFsZ1t3aCyUQehvK61qst57yLKUnF9bEnFADoL1LLfcUfEBPkc4guvRSCM",
  "key16": "1i1QP4dqRS5hNbmQqdV5YrF11byL3BFhsn2gZga47Nqwzn5DxTmxwPdNiqji11bd6osKMhvcxGgYRawbYmtWW6F",
  "key17": "AQ6H58cfbB4wKEyyatTADgciqwetdsns6Ptz7rGqCKSRUJRYwiMuDvj1z4XsThATPuq2Q57SBZZxFNVzrZLUuRy",
  "key18": "2BJgaetNAZ5NnzMcxLQ2XUqQbfm1joWKY8semceyeQqWB7qjVAth78RNJPXuLmHwLe3wB6uZ8QfxXyVSTKKdyjde",
  "key19": "2fwosXYU9euMsnrRr6kcNKcGwDLGMTQNbY6UYwpR4dr2LKAymuHf87V3iQ2KY5f7wKzv6Zm93SjefJ5vke4rrK1j",
  "key20": "49DLxPcNSFXQxXJkvbErMtgU1Ah1HB1dUvVNzXv5JveMWP1SsMCX3c7JVgFDTD5rd1x16kCNqADctRuuERuCzWLo",
  "key21": "44EG7mM98wgf8uv5HBoVQizNjdPczLjmwU2JAdSVwrhBX5FtvphCMw6G5tzTLVaBJLRQSJdYV6viPQ3t77czxsyX",
  "key22": "2ZcZFn2N4eppyPVVrXLQ5mSLGpkonm5tzySWyU6gN5y5U7AsqhED5cFQpkB3MkF4ECYFgQrK6red2R5CPGVNYJWS",
  "key23": "5Cg58LbF5bAhBjAmgDoEEGuJegsTqF76y4BfVp4QReVheRhfwh7ir29xhPLkFHHVb5koAsvs6nJ7QLJPp2QkcAFV",
  "key24": "2FrsGu4wJ7bVKCj7yXSgvEweMWLZKsEuKuducJsLGHgbtN5Gg5muFzAvvxHnmeDeaWm2Vpj7b41bBDnSq7vBqPo6",
  "key25": "br4qAEvoZ5H7Jd7qQ1NActbtT3H3GwyAMXoC2UG7DEs7djJ7zTsctSQKzH8BtkcyJ1k3f6VB1YEJjeP6N1vV7KA",
  "key26": "3vmvDV6er4r7o7TzTTQ89N7w5RQtnwhfSrT73Haj2UUfN4U9fMMqafYyf7n6jRT5WXFUamMomoFRBMUxot5q5nN9",
  "key27": "3rp34EGJSXtCTLd7rVRzLirGACFb67ubsugSmYgt4yqZM5WpFWqA1hbx39QkLvc3XQLh6rDGf3WLUYpyhqvbFkT6",
  "key28": "2hv5Vf7SHnBQkNk9YrE6embAEagoX3fTcZPPJRGxAYb3XDpWRz9Uaa7SBtMtdYJ3eEig9EevnSGUKvWWJF2GuYSd",
  "key29": "5exuurwuMxMWrzXuDJfnVT3vkg8YLUQFHti9VZBanWi4yFqLt7BJJB5XQrXW62PRe6pfav82D8z9sZmnAmsyf9SF",
  "key30": "3SGaJdnoNAHn5UEEp4T8VV7eujkKKv1HftRDDA2yMQA61PK2sSA92ftHorBjKdzDMqMcq2dc6NggZtFyNAUS9jvc",
  "key31": "2n2tVc2AXMyLW63cTSxc98FzVvjbNjj1u8vYVNySCDWwQEGiXgiBBqgPcemHiPiVh1oFTPR5vWhnYNZcRWtSzRVo",
  "key32": "35poB8NN46xMa5uVtAiT4TpiskZ5w4Anpri6Y4qhE9xV38JhSudzreecWgysAsfJL4LrGR98maqV2heMXY24QzH4",
  "key33": "5qK45wh5DRsX6GDm8fzQNFh3RMMbWzH2Rn3TVGWQZE2gi7FLLDYZaqRiH8xwkCuqtNa3Pgoz7yFhYeCKh9oaiZ1E",
  "key34": "YHq5r4ntppnp8g3L1i4sK3BMkSDhWbQQcADJspRXgHvtW93Rn6wBLJUgF3TBRQ7GErHKv9HtW9gXpH7DH5P5enQ",
  "key35": "4agQSvNZb5rop96JhvSMkMCRudkF37LYkB2jVnpRTmCeQzyLMJYPAiGBerGAwfGvVPgAqdhTx34sCy3EjAxoj7jj",
  "key36": "63fc1Q7ZQQXxpFppLd8oDUUy2ULcfRA26F3Kc5JzzXnfhSgDPFJv1BS64hToUzprvmXFyGcZFjNvSRxcERyzcM8Q",
  "key37": "7TdQznbdY9zTrWeAiYyycWnH4MhzXzJDGhHcKwZdyY5MPNDsdPqB35hTc4khAqT8Rxz3ZoaVtPPD3LQgCG2EURS"
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
