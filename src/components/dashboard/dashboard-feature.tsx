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
    "4rnbYzyNk6UzE4q3KpEdwixw32rRjkuE8JjPEUQu4W1tvd2YM1YAXJLnQLQ9dWAXdQPSqz6XbmRBCuLUVYcB5jY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3At7Q89qe8kq6toqMVyV2X4fEFAvmmX2QDMaL36wyofMSwR16GoLLuc2f6VN7WSx9HuA7Cch6yUSoh4TanGSxkK",
  "key1": "rba19ojUYcYxTKfAyVLbHLJe5kc8rSPBu2hP1RaTeT74UJkXTAbCcxDFykaAsWNSVcahVeMee9hvoC6H3BaQ8ug",
  "key2": "38zSKXzqThkG2gc76WhyRYhdZmaPcnPzDJx6j5UqyiwaPt4Aw2rom6YvYN31RPNk4Y3jPuNiyxgnRktFkK4f7T21",
  "key3": "3whBjwap5PTvGpDojBdbvsEHiJLwYwZvAx4mK2dvLjvZCjoy1dRLMSMoKgUxVrcq1isJKUPjZeEgs8hE8wJ1nVkS",
  "key4": "2YDLQ3HYVQTgFmpH3JrZos4szwqf8LEVqjJwXJXbb16VDX3U1zUPErpn9qBjEgpvmsPuDQ16BN3wDmRC4nJvhuXZ",
  "key5": "5kJi39EhF5wnjoHjmYe2iGBxpyDfCcmoy4njRZ6rmdpsCn4TaEyuoZyJKQ6r3eCB7LHjwFcdST9EiN4m4vFXqb9c",
  "key6": "4tya6uMxCbkNzkx6cZEhcksKyyNEhjqFGpfinjeryDyns6yLjkbw2rrXRw4n3MzEewRamAB22jb9Zv4TycHK8Gga",
  "key7": "23eK27RaZYtXzSSJCYLnFf88b73TGZB5vL3RcqNmpEFi411fVB66CUQ3hWcdZDznWSjG1wk583zLgjzG2xNRf6Xo",
  "key8": "yTHeQXB5j1Srsrio69zExiCUUPXHQj919SPxRiLd5XYoTu6qckSLdUrasjthZyzJZ1vbHrV79SzLdwHBosYk3A1",
  "key9": "2j89tFviqPgAQszdXV3E82Y7zEvyKHpCzjNFsWjyCxBW5NzRSLbPvXBoCHMHu1okqwjgkqUA9FcrC9uYkAmY7Sud",
  "key10": "YJKKwmZT66Zz8F2pJ5PK1ECG6jAwWJy4kYuRuPtvqdeLGu2rgaguiYoUo9hXweMG9N9tWtjxYLzpTPYMMjLWnMX",
  "key11": "3fAad8wih1BXhFDqqoCe9MTy7fmudBLHsqfUQHuZwWf9G1sSLtbHP3UqFEBGJ8MBVHUMbf5Vbnzx1BABswucp4dZ",
  "key12": "5upgDa9ePNog4MJWSRth5WQZ29jfQrHwLxjUZ8pKc1tsNundJehpVndbnj81U7r8DTySXmiPzGPZ2aYeGDZunhyD",
  "key13": "66qM3CG2stNJvQyqsSt75Ut5ZP6ZFnfU1G55U2eK8pQKjooU4ywS9KiVYDdTTW9Y7meUekCpBgV3RDYqGKYSe3gG",
  "key14": "d1Lh6ibbwECohA2QnPxWcMAVCGP7SPv6VXUh9LdB3PNFJyk9u4aFADWehsdtPMY2saiHcmpmY58FPRDQi6QH7mB",
  "key15": "2PFkUP1ewv8bNgPq7y7MG1NQCaMWKiCpE6fUtbtj3pwue8V8N9uTLMERB8cBkYvhjsC33ztpydRr4N72t2efxbZJ",
  "key16": "4hHoJtWH1L5W3BPxJHaTRraW6xnXz9YprzJRqvDmU3ZYJMVNpCujauo33HSZz6CpJHFNqK1CnefXxCSZ1SDzBppb",
  "key17": "5YPWotg2ycwVtyQ2LxjN1MnwpCMTAoHKp7g7BGzJzSFYy9vTfWacJzYpb1dPK5KxD7qnn2J2tLc4hSMTa4jNQBxL",
  "key18": "2o3hmDr2f9Sf1FmYjZQdnv4qFTmm9xWdL7nbAg4LMZRCemfLvdfrvhLYNTXpEDht3sQ32ArFVGo7PikxFRtWQDZ2",
  "key19": "5tpUgrL81Rr6vNNR7zhLsbEjHco3SrwFQ6EsAERpgFr1CEm7qHvTsf5QYzh4huygnHd5xn5C9jfLVZUbbN1M1GP8",
  "key20": "j6sqvBkjQ6BdbKh9Gc1gQ92PK3eMvPeVPTn4reWxLtVpuKuiYKyQjHxop6Pb67EFhMLLicsMPoMSAEdNSVvKSWJ",
  "key21": "3FVHcqRDodFYrNzDvD97bCd2QNK7uJRX1M7v1PNySAXaE9SaKDFPNLx9v2BsV64fkmSpAWQxWFBhfBEmDNC7CPS5",
  "key22": "2JR9NmRPQqTio5Ff6V8n2TqpcxJbfLp3DeY61s1oUUNdm8nQKGNkfVvrW2TcuDPXSVnJKg3kKkuYFH2FVsyezHAd",
  "key23": "5stGsNKHCpkYBQLNGDnUYcpoyqbGHruDFtRGhd7nD7jxdNonSDok5aMxxqNumrQEBqq74PmBkD84h4v5a23sGCbG",
  "key24": "4rAXZUPtsQgxypupVAtPJuw6uEiyCh11bST13BswQUoLuvZsy5HTvS5Ai4y4B35WjFUUbdEFYiyJcEMkLzZEqRGM",
  "key25": "2sis97nFJWiZHeT2M9yFn5dP9U2UhnTpHKA4Kkv8etbHKquueYk6eY5WHpmLamHYUctuA5vWovyULFbaCN84tF9",
  "key26": "3DTMwBw4vcp3KyWzBNdLvsrNuDShUn64P7CcuLtdmG7PXTDcVvk858RdazBhjiYSCfEhJwXHhghufUJ6fCt5Aznt",
  "key27": "4AQTyJmsnepA72zN7CB6URKMccJoiriTEdRCcVXx14J4ZZmRNRDtzcqZyM9i4PEm27MtTBHDjGDsnekhCeCSiagn",
  "key28": "Pp2pM1Vv5JT4iLLfpzzZAigcw196nm1GYsXvXBS7KGpFbkeQjYPfbeKzwJbELzqcZvPSD9fSsniyao7bzuxVTFE"
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
