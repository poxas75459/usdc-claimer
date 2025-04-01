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
    "4NBSyxFea17JkB5qsnKWB4RnCE4zieM8mEUNS4NL8nHJ8NndHh8nH9WFUigoPyqfUR5YTpFwJ1rWdkgvbX8efAFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vf95167L3f7KcMweXqt7tRwg8sbkH56XjmC15Fg7YuVrB8zkBe4tAziGPtGJBmHb5uqTDXEDzoWXcQfde7TcGic",
  "key1": "bhfBiSpNiS94J4t7UNw2xYsoDpnE7DJ1rZiwVNNA66EPJ86zVReLyQUwEKasPoPYYxeDhRjS4wzAHDcAYyuFbDE",
  "key2": "4kWdZqjHEvfGjQQpNdKRhXdKg8k23D1hQg8zHm1tXJgsQrKy2TrCpUmwYgqZW6VAh5MDJJ1hXS1GMy3xDwYbPLvV",
  "key3": "U66yVsd5uA64c6T4AyW6AsSY6he7ENrrQdZsEn5AfFMdxYEBuUuke7dDQYs7YgyNpATctso7S2LT9c7zzgMQQPE",
  "key4": "3rtAs8Dnvwje2QhaDkjJoqgfn5Z4boamUVrne341HxWxMxLTfQNxy6A3Hke8WpXRLTtfXS1C9bX75KQifx88vHsP",
  "key5": "2qKte9WHfF2c5EZNv6dzsaCpRRazDNCutDscjxWG2R6Mdg2hfszut2ZHzGriJhhpUKpRtTqmi2dkx3Dh3jVnLqS5",
  "key6": "3d9BBMKKZDDuYTFvbRc3NwZiovBRjyZshXDp9566ULNBG3tLQt3mMvu76g2fL6a1uy8x5DufStUWPqgS1FzgHJpw",
  "key7": "4gEubacTsJaVk4vjnVXUsLa5NGsFtkuVdppPAjsEji4SzEYwvkV6t35CehdBksvYqq2QJyDNec3t5tbc2xvLsbxr",
  "key8": "4s6JdzJUTfwnjBsDVuf4UNoqU8c71n7BAWLpNmurmZYmu5oYgUu1moebpnfCx8pDisR5WBcYm18i22FiK6orjp2p",
  "key9": "5SZ1q5ZLeLnbZVo3aWBjozTV59A9oN8uECUX4PbegNXqX1xCH23Zfz4Y18jkzsRTQKsBzn4TBNXTf925PkLAPiLq",
  "key10": "5Jzp6zkdFF9GDKUQsSe6rc7jXNgRTozCht2AcTa9J2UB4PtRuM8VJidxjyiHHgpfKwBNjifFDKhNZdzh6FEuLvAy",
  "key11": "371vrqp5K6NEs9Cvn4HW4Epd9vuXF7CVXh8A4mmNGnpkTJMHKzmb23F1BrwtjY3T6XdyeiHHMkwhnekiJkmnAdDa",
  "key12": "4qe2Vv2Gveox1gqMcMexsDjETUDGTVpqR2PNn2cXgRtH5qYPeAQV8tHoY4gyUPssKtQTVQHEjPJwaAY4SwnYPCSb",
  "key13": "5shw7LpqP4GeBEGruf5EMxCB9EBihJ1mNrDag4jp7gdfJuR51BQHiGx5Kiid9eWYYvcXZM6Md6KFV8ZWgaCWWfxM",
  "key14": "5dEACyhPofFMFLNyXc5JJt4cU1RPdBaVVBzCdH3AvVUhQzrV4SHAjf5h4iYJWTDwgiyqHnkDW4DFb4vW96jQjAd",
  "key15": "4wtTdFUqcXDkCpqknke6Ub7bjjcs7UL8vgobHe4cpt4Pp7zvbUa1rCxFq4ocL5z8nGWve8N6xKiy9Tf4DT5sUKVa",
  "key16": "3MDxuBmRUbBmcZf8aVWyj3Us4hriD5cgACT1Nid9r5J75bZLkiWfRkN141HCYEByduZbg8iBHAQc3xxSZdVtZj6w",
  "key17": "2gx3nFiDmYaotTc7qRtRLvw4Jsf4J8VxtLXded8zgHcwVqQ9rw4tWKbEHAUUKXyNSbBaVS2SwqnzrNhd6FwnT8vy",
  "key18": "54AVhwLetVJxn2QvonPHh5oGejWfCt3uwAbfrf199tFJTok1DgP4odSKqH8XdNsaC46fNtkuKDL7MzzJqV5CeUp2",
  "key19": "5MrF8TJuAohXsBH8S9nrLu5vfhi5C1R5iRjVc5Su9SnJdSQhur69VT5PMoXNFq5URfnKGH3cTSDigypaxdhTqYvS",
  "key20": "4UWQbCjNdH4d8xgYFKNbq5uowdQ1GHuUzvnTsFoAYAEtDLSJZmfpUMKDvXDuWoc79JiwSwuF46mSVkHJnr7kjpeL",
  "key21": "4UdAizK1mjTMghimb47zi4wgjnXfctPhK1mEHF35qkQyecPnToZ37fN4F3NiYgsxxa7ovVVtBj2yMFd7misC9DVe",
  "key22": "ri99G7cp1jWg4YYJnFsjKbTej1HaL3hfaSAwBYaaEN7vgLrWC1YSKYhQhutkGmLT9WfY3bcvrQUrN6NbKJr5PhS",
  "key23": "468hJgQoDbVDUKSDLS7vvPP4dbneGDW3YXq2jNdgWF1tNrywWE8yVpiNvrtEw8r2wRyPJ2WyaKxxmYW7ow8KVEvN",
  "key24": "3zjLXDdPsJXmHvNqt9TbmrfYw7W7WUyPwyAn53kSfZS7XuBxdeKRAa2EbNN21GL3ZnmuqFGB8Q8tvVWvDwzXAh6A",
  "key25": "5BSDTd87PTxrbPVJuBa5hoE8N2iyLkyqDksTrYhe6vMMNYgu2GqumNvm2zN3xKjvMLzudBHbskAAUYaVWrhCxRUc",
  "key26": "2znFWLsv2doP2gMUUcqVYyLBgcZMYNw1s2BEbQyhh56SSVZU7rx6sMuFiciir26HYreCedsf7SpPtNQc5vU1fRri",
  "key27": "53CmF3J16PecWDmCfYJVYVzVV4cBh7bzv4jPZxnWv2UCaLy65y6Cg6q52vbH5iHK6bjM7K1DdemJQQKUAiaQvwkP",
  "key28": "2foHQ2R6iRFqaY13tbnp6ga5rhsSMhujifeBL5N85CxbUq51T4itGw8UCBEM6bEnHRp48ZYHAMBPE5GBFhSK6CM1"
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
