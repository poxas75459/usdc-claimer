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
    "4wKbd6nuQR7QkP5E6WJARe6GZBnqV5VqJHYouS6eoZYwJrzXvUBHjD4eqojYDpDVLZs8rrVoxqTWfUzvsVQNEnTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMyEXYcNPghRftGkpLCmV9HkZAHXhuJkD3Pw38Z4ro3dhqBPnSUnfoxmJmfHVRfCELDLyc22DJDStTWGqgbH2mk",
  "key1": "2XQMP6LTbYbjqaZVWMw883U7p72dZeW96Z61KadgSLzHr5zbru6UmosPybxS6mTWkmt7Cej6iwU3EFxzwkd1Vf6U",
  "key2": "3Pt54aAyxj3317peSH6XHrrzHef66FduyPSsmjZHK2qy3c8rzwVmDFreBpZy39PyX4av8nBPKhqZTUpP89DGw1vY",
  "key3": "5JCAzxC51NDj9T1Cx2kkbKcogvo8weqP8nWkecZpskmaWcxeUMXAq3DP4ZdwYRnNLK3eon9pDrHBx4oe9jRVJCNw",
  "key4": "2XDX8aWSaB7SEAW7TTCBiUZC7wEsGRxyrhNpo6wbbybezpkwsxVfQuYe2fRh3RexNd7vP6vbeRvVpHmRGFu2jR6v",
  "key5": "3BbjwQmgrnTELrUPK1gvvK58PF7YTGpg3t3C4xs5PKK7r9o1BgrzLUAAbWMNt6fw7DGzU7r9UR2nLzBGCnWUxbum",
  "key6": "5tCkZK55mAWmomVe1hqZPAMG9AqPxaKUA12btCbUS7r1AGFUWwqmXKCp48xQqKvezcUzYENoWXVqWHJCJrCEvitb",
  "key7": "4APPm3XEF3nC8S4rjaJN6spLrYh75Eu9ePEbDTpdKWdWofPryyj2CfhBMvDnggnG7KX9no2YrWj3XwtAArXABNix",
  "key8": "37H4NCpakrBNdgoEayCKDiE9VB85xuMJ2yTCUqaoAtVSZFVvFu6pDnnkX6P3n8vH7m9HkBZdtdaVhXve6KhPwUV7",
  "key9": "5F8im1hbYwRMCYcXRfTUJW9KNAchdvPDq2KLG3uUcNNrteqtjh12E2mW1V7LSuLVTFhdJbMuW5tU5JWMB7hLjd4D",
  "key10": "5tuVeLuCjHX33on7WBQkz61QQ3sGQpd3eq8pueQF4HwaehijyYCRfn9wH44cYbJ13j5UQodBFbQn31H6aKwqgxrN",
  "key11": "r88kKDr9k5iC2LCrWPnLYLUwuz2ZY71kCzwvnDzrCxk4asYCh78RM8sfeG3VscosqNPRPbBVnkNUoR1PRvfVtzy",
  "key12": "4fU9Y6NjCN18gTjjWSkorGiWCP53nWU5CXHVcuZsFUAytACs67gp1YnjYzhPu1YcHsRyhE5k6GypyH7YniafZaKg",
  "key13": "372vqDbH1fiWxDQxK1HbF3PQq4fSUBr8ofBJF48VAb9jBgnuVKdpTnxvi5L9cPRnzhR2aGfv7HRhtykbLXMCN8r3",
  "key14": "4go1vyN1vb9Yfr4wLHV5DkY3SQhEaNitd77z4Xb3dUAoBXUJGm4SSgxHmYibFpQt5GVw3d2YdT1PUkhQBHi3HY9T",
  "key15": "4n6uxbpjfHeGK1reCqhoeVy5TTb82tLRjxEitSJ3fYCMCkhcjZdcBZT4vEPvFxkFidaRVTSXbzSD4mW6XdUeXbS",
  "key16": "54zdN9gRvMHsY6noMjFYwDeVc1tHS7nqLn6WoZLgxCzBTasiqhwTQMNQSg6YnjkvYcNFXfyRv6qDNhnWvwdvXMx1",
  "key17": "VZwL3dtKP8kxAR1urYgLHXMAcuY5iStgQJG24pANJnxoarg9dgkZJhRCFvATwTebS1sgNYbB7ToJpp4EmE4mgtQ",
  "key18": "62AckkwUNWbU7GeVbNZ783GkCgexUXpUhVeotxjFAtrSNJCmpUUaNz2UpWf8iwibL1PuGGbpVzEhAsPAtGbUV7W2",
  "key19": "5Lgi8ju47kQALzUKHP8nqT5EzxA5goDuN1q3M1L2e9AfYco2puh8uXCDHxgvYaUaeDkyfqMqaAYeV5ouadJitiR2",
  "key20": "2RhbEPhktx52A5RFBvu4y4UQBJ9fuQMW8Jf49M3P5AnmhDh9jK615oSXniLUF3UtE9Ak5dnJXAtUhvmpvc2Zqe86",
  "key21": "4g27cFAs8kdAoLKJptUTo9ThvRYcKvEQ6hT2X5HN3oK1R86zwRM6qRpiMCm46K3PneM23F4bH9QYvvEknBn9Czk6",
  "key22": "35aqBLCciRnCbU2nyVZ3JMx57ZoH8FuUNuWSYX37LmVdXTSCKu7KQb5gqzagv5eHA4zW4fsqF2kSnkmfL8pxiCdv",
  "key23": "5r3hqXDgNQfddeBRGfutnNnbgKiUFe4obxSocRTYjW7HS2Uj4d7W5F1jtTYZqxE9C3wmmiiqeWLL7MLA4QTVDc1W",
  "key24": "3ttd2x7xFejidgSA17c3tkkebkVrpc2VUsa196w1MBXAUNqSifgY6VJK11QDA3dH2zZePQGmKQ92GymKiFAx15Pr",
  "key25": "2rzYW5txwkZUW3DV9bcKiJ42NXLZUgYTmfDqo54Cf7XMU3Eh9kdNnfq9f3C44HR33zy2JjfkTd3SeBLRYMsPKy7j",
  "key26": "4YGdkV5anddw95ENFcrDype3FNjzeHqwxYemzrAofSR9DZtuP4dyUAGNuSiru6FLegbotoMQaYLshEDLPZ3t6nhq",
  "key27": "5aPRfyabLT2kn4ocY2SM9XzBNFQprQWGaMoigrJ3k7DS7v5P4FkV9JQLY1pvkzJTh1QL4txnbtaXvXviiP3Cs4GP",
  "key28": "3QygsyhiZHjfeCiJwD3aGL4oXkwPXwCGbiGAEuGWPw5YUeJzu4UY276GPw3BvYBm6kTKndkJeM2ueoXZHjiL34GX",
  "key29": "5ebidR8CEkEayGwbw6KgRY7mpqRgEE4tjqZWXMUY41Ny2WqWyYpVvhvZyMAu9QYKtzi6WNnW2keqAKWqVoNLH7wF",
  "key30": "4Xx5SX47Fqwbe4hwqcwdxmLsDX2pHEabG5K5kHdv9iF9pEXRpVEb6YqqGbpjxyiDZpTXZRnPtqxR3Yq1Q6vqfayk",
  "key31": "2WmCagoCVBDJn9WkUwtfb668KwZc4JJtgrDc8QuhRiEhBNRXVUyerDav8Pbv36qSrppfX37zirhUNXeo87n6miWQ",
  "key32": "A68J9HyBDiFE9wEQFgApjxC7eGwNmFrVnThWewcmZHqrTQj5b8SFemsmk2KwR6b2HVQBjiMbdEiX4Jg8KtSAhoS",
  "key33": "2fQH1pHQJtz23ACxK9Cxjav2TPciVqdXrJL39GDQ22zfTTY8LzSvPeDbpGArKxvG9WN19fsB1Nu1hdkbXdjvc8Ea",
  "key34": "2Zt9yPxoe7LNQVHDcV6AP56UZFrJ81ph7Uf73sSioxw2dbqCcc6BHcqKJ6wff8GFdHMiQhCgY57qNvyAiErv6cCq"
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
