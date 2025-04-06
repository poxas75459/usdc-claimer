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
    "zVWeue3QQM9vT1f8PWEmiuf42EMh8wG8VzqkXhcvAypdRRkqSxCNeW6euPej74U6sxgojLzzyWhdHrbRPjkGkxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jLavw8XFdtmYKCijBWWtB24q2FkuUHop4VTvZa3HwRK9aQZ2ahiensZU92uzZnWJga6JiWpcikgSisanMQ4gyP3",
  "key1": "2pvC3Tn1szPk223b6T5j1iL6Gyaf4nCpyTVjyoyqKF6nt9dXEVSkyKiFd8eQuQahD6ee7HyTVFEGVYEJieapt8b6",
  "key2": "VAKQsFYbNddcnPoPsntTxJ5BK5QRRgKucRPr4J7okkAUrWMes7om5qRFnChgN8b26zHu8R615mT1AS7CRhvohPq",
  "key3": "PK4gfAMzQuq6t8Zifzppo5tZt3byCJDQXBz8DSSi4CbYpLZJWbHE9XKUu2aLaK25A9MfsjAJdJDqzTX2SfnP2Fa",
  "key4": "6Ceh63EjuEEqqHpTi7fjBPteaJViY6VbvrRkbebgbJXD8qaq42pNLVuxdzsVnzLTwBNDLmZvuY1oNWTPv8AjqyM",
  "key5": "aT1kECb6Hzr9ADMDPmGbWYDh4AqRD459Fvnbvr3S8UjYJ7fEs52aRU4Tgyw3QQvrkmUyqM563EtbbjtefEhmJLp",
  "key6": "ajcAK4RLX53mK1bhn5SzznXDV3eXYmt5VfAkx9mdUBTqCS3TvR9k8DYVFCMMHM4uSpGt7j8NdbFYeajxU3gUqrE",
  "key7": "5wpJcZnu81utfqYMjW8kM368vgk2HCXpA6RixeXKNR786YFedpuAxSvEheRecwMdvGScVX3zZLHpjXeCxWbJ1Fim",
  "key8": "2bY3bUjrhQpVpiRH1Znh8vGX5gkR3v6FyBge3D25ZB5jHGk8ynErw8QWEZo71DpdGa7MyQzvXMX5UbRdggMZKcQc",
  "key9": "4anySKGC89BjQUSw7iTdHui5rLbU2XfJ1uKzw8jchcTPoedKug58fDwgi3eRLKnqW3JzbobAwmEQtY9XscaXQtyk",
  "key10": "y7VASDQqrg8r7ooXgvqQoY2cihCdxofuQHd3WWL7yCXmGyq4Y469c5gmfHG382EWhGSxHCbRoa5wDmQnd223ieA",
  "key11": "3NbB2etNFzkuWEpqZAaTtNypRCYN8P8jREscQEkeKVTyhMw3Uks72kuVhFXUa2HV2KSK5pEwi8FmzSHLNhceMjQh",
  "key12": "5WG2nusut5cRq1CdnFt3ySLxi2fPwuc7CU8FwKAjRbpwYRBdjqj8Ah2P9FyGyYbdEdtS3GytLWtsv6p7b2FifVBM",
  "key13": "wnwG9Ry7QgHLaPcJxs4mra76uNmV9hV2BVgA9x1q4zaKqf9VTbwcyDUk2iNhAFBBoHCSLdc8pqAWux7bfrd8ArW",
  "key14": "2W6MRDnEsZrRdfHBuVZZcaPCweMU1TE9M17e7DaQmuKfwdCT1jQ6X353C4NtbkTJgNUbbBroe1aSk6nS2EKvQjKG",
  "key15": "2MbXB5Yax6bp9tHf5CbsSV2bVt4wsTi1LdQp6F3X6FXdW9t6D16V359qqZKy6JJriwdQChNaAbHeMYBzqUYKwD8v",
  "key16": "5TbHqzD6AdDVDDAL4Kvt3fYQ7oJwEEWp5sEC689PJEhVwyUEN2madXaXPYq2fes6jgtcMbAtvXXehuKyc3XGLysU",
  "key17": "5oe1tieWUaK8Re3a433ZuFjsiJK8yshtBNT4uypQj29C1e56KYSUrkvpvVqEvgHBv5f9fnxzDBkZG5sgVRMkS2iq",
  "key18": "4wf6fkxECYNVBtxzmahbub4mPs6uRx3ZPSWUZConxxQVoPQzRJR54wKgfkxTP4d1VtDrWq5yqqfAua9hyBrW1XHA",
  "key19": "4E92jYEShWwFgyUYaYKCPUAZyJVfkacVz1AMotvJ4oCeWTF7JZeS2WaTb8C9HNMrEiXHpyNVbvHSyZn6c1vNfbmF",
  "key20": "gxHJw3fvqSjWx1gHHsZWUa59NcC2qskS4r38A4fDKUE6VCjJE7cRdW7ory1vankzBKfhqDZQCyaKBwCZEGasQBW",
  "key21": "4Mvyej1eW6JG1RbgQwJgeAKWfX6ceXYzNp5wD1YX1xJ7SfnpFzWYeAwKgP2Nro9AQwC7cF2CGfp7CSiEHemvSw9N",
  "key22": "59FeMuj5VUYmWXL2g2mvZhWdsPQwVgDzpkYFzZ1zPxAzb1rNxCJFesAwKBwUYynNj9dKiLRbeRbw2E6koi4Wotnu",
  "key23": "hmkJGvQEqYzmrrsrRBgS7kyphLTQ7TB5sQGspHF9Szo9Vgge6rNhqzdLUkMdhwWpz5BjzBqPgaN4NmJtuQDhZCR",
  "key24": "2Xu8GHHPn4dZrtCrG9F86Ka5BF483RVuWq2mrvNtvgfii1nQswGqbULTAovLssJASoPzbDwiS9Eyd9gNzqKCcVbJ",
  "key25": "yFvnuhQYikazPLj3FH4pDsLXw9FFtNGGnKFnUuqWyiRqJhLkLaa6F4mSJbco6Cusi178UsMHeCw7qm1A3csREia",
  "key26": "2XfgdeNw31QsBYwV8Azd3FpnmQ6KffgDJKGLAXCVT2A12fteGKqWK6ieBfj1QkLEyjKKiiNzNEQGf3geZ3NYX1wU",
  "key27": "2LgE2R7RLW7v8xGbU7f1uuokHHHUsVW4iyGwFbq2gW36uMomDa81uLXNBhnre6ubAMKRCe1SiuEcft9PZyDcS4eK",
  "key28": "4rojtkVZWeJJSQwq4srnxiWzSb6LdZKv3BbsQPAMC3UgFe11YmgGci1yHXE2CVbiaKf8DYmTtzZ4YsaYZ3K8WiF1",
  "key29": "5RZjU1wJww7rYUJKTZcF7wyaSQQnNxfc5dD5XT9xoktyB2oWFJarvtPkJGzqrRbaXXpqZgEKVyXeXXHy26TFYqxR",
  "key30": "3bCXaVf67LcMuyMaiFuAEPmWLCZpLUNnj43Gdpbk4VhLjzqsEynq6QX1FFdxbM142NNUiE743Dnxmucame8RRxpF",
  "key31": "3nroGe3TN2p2EQdn6kR8tUF5YW1nLdZc7iThUoBDN592aiE6g4ZJcSL7FzeW97GkYp5zrz9XzHUd7chwJMSVRJK2",
  "key32": "4H6AzyNnwkiNq3mbKbZ4z1N95MTkNrW1cqirRSq9GZcbQJ5N3gH7bveTetELVJYKBFvJK3ZtwxgJA8CWspNSKKci",
  "key33": "dWiu2ZTqmw7kRZhZ5hEu6Wq9cKM7ftQBXV3mioXd9rh4mcrHmH5sPYp2wUinFdfyienKq1r9defNancRLLvKCua",
  "key34": "5aZDtkoPLAD5khj528cGsEWTxhmtgoZ8kGPc2cpVj5JCw2QYCcRoYFhFqsSiZQwF4Urue53bkeyL5AdDitTHzeXd"
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
