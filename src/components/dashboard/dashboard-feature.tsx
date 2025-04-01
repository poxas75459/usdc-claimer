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
    "5PMxR9hHSzc8VkxQVnZjHxP1SGCmwkt9QJgV14ughjgPT1KaJF7zCVYA4zxjnLDsziBH39CQaSPT92bXMoJBXYkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Le6MNNwkQoGP26DbHSbNjfqN2f4cpxcYeFQRai6Fp1zmZxNsv2o3iWJ5CT5S5LsEY7pMJ4xw5xFq2fGRvBVHgcF",
  "key1": "5GCqLNTQGut2jdgbn9ec7GAXpPkJWgrQJiTCDqsX9Bw2cHEaR7xndrmq1Pn5YKWf6uy167dkT6y5KBRXEsqdxPBx",
  "key2": "2Luta527oBYPZjTkYCtEtK23WUWjEZwXkyyJqdeeN5dag85EJkbYv7qUbMPU69M2jKzh1P6XSFjDkcbqZWT9s886",
  "key3": "x3pdQbuaZznrdWVgvwK1195NbzmMKgx4LF3Ux4VusK4aAedKHufGHLPMBS7GpKTQcs8nkXFHQYzbacLMzUfKcTF",
  "key4": "54gJNyzQsGKUDFU7dkD81zfcBzjZUofpJBhcS2x29n3CMvUTkYA7YVdrnTyTSyrArgx2kheG5Fj5rTrJ9kiKwJsR",
  "key5": "4VHfqjQbL678H5g5cUpod4QRwUWTVgPd5Hy9P1MwNHbgRMdeoZyef1Uc8K91UhLYgtLp65HvfG1nEyHtisELDfuB",
  "key6": "5LsHgwv4K6u5EfDBCewLZcpGNAUeNTVZeq36NDd9Dy9SVBcEogytApiJDc4PcVFgAarnFHzUuxRRpxB9kxnmqjkA",
  "key7": "4fK36uNUgTCwmzdpiNmQXV9kWTFk6YqFgFxqmnTmtQjpy7jSi75GsFErb1KLpYPZQWih9ntP72UFQxmRNZ12t7om",
  "key8": "3SnbyvxREDQmZQjJTp5cCCTosxkjQtgC9dNCn2JF2XhbsSp2WA6TzZy3orNo8koHTxdic6AZtf233wMWEH4B9P9Q",
  "key9": "5AxEfBoYSkujettS9uGv7pycosUt7yeGdF16jFyHGF4NGV5tE3jyJ1NCBoDKSHGwupDWawff51vWYF2i6cfj4Zxh",
  "key10": "3wWJAjwz3mEUqLvEQhm1vcwrWkfXm6P4M6AgE419vn2f4cZjcLDWJJRKMXiSeQvvpjtjfe5YAnseStR1CbSmXbKP",
  "key11": "3QzZWWc8o5SzTzMNhnfodcK8tRpLW2x62RafTFdxcJX5EBdgE2e6S6yKTHn2RLhD7QRV5CJQKpVQusarw6Yb9PM4",
  "key12": "2o7t81EFT46TTNZALg85YQnPxZnhRbqkTH35y9XutfwbxyWiUxGfDoimDDqgZDTuF55QdCFvUMQ3iTAXQyMFYphX",
  "key13": "4PSkdg6MKzcUeyr9Wb884GjqbALi7nrxAsLhEAxY85sjkjmLwjphZ3TA6XSiefmSboQdBKqddvwExus6wMkGBzdo",
  "key14": "Lq3xSUJv75PQxevXoqqzNF9njukAcCBr27K3zodyHQt1sJcvrbAtWo7vQDvaKrp4vGSmAxy6XojFj5MUSj6E6w1",
  "key15": "4Uk1QP2sNJSm4MtFn2moKRTGMbfrhc55ekYvMGdo5ZGgpMjDDTdhqR15LACi85H4BrfrEJGJtkCeP6Dv94tzfNzB",
  "key16": "3TQuacaDkaCDxLheA8YuTP1GkAAGw8GbuRL4QCNh9E78CJLPTsFLHEhyyff3uHemtQmKB2kFFkVeUdbKiPrLD48B",
  "key17": "3hjeMXNUeMcCdEKdZPXVXnnFVhDFx7sJWLYZqwjagfq4TLh7hgiRZJyv4SLqLrX5iujK7eYdQ6YZFSXqudfHE49C",
  "key18": "5hah5JZNzbjVcx5Hz1p7zKQUk4qne6aVz3bmrrE4Mbex2WPA3wyqvQJ6YiiN2vbjDuDk9xBaGTSEoyivWay9BNqb",
  "key19": "PtqzGm71j3hZcVtyKtKkePzXASTVZAagvQr5aHmSZAGaDDbQKXzs69sLoEfcyk5h4gUS4wjGTvpTaCmSFeA4oSX",
  "key20": "3Rc5e4hf6D8YkwFqrCi1DePy1f6d14hPiRpv5QrtDbL4DdJ9osjqYfe5Asj77wGKPA47kgcmf9LTxvVG4gyHoWZd",
  "key21": "Sw2QbmSLHoXvLYx8rS6mSXVFWpAXWWXWmyWhGzqf8vCxsaBrrGTVsiSBTAgcbEsw2kCBsRTeU4BMEmNHhnaRgCL",
  "key22": "4TSQvGnBCK9UW6TgehxwPT8VNCrhFJwXRpmUDi8Ct6VFJfZhwTeYEvRBy8b3z2Gr1H8ZUwwMdqKwB7wpQe8PBm53",
  "key23": "TbmYkTiwjUUiHijvwPqbWmNZB5WPWRFjzAS35673qP3FJyzmvLZdzexJGdBN9a5C4S63Bnj7bNsdNg2nvXKfw8Y",
  "key24": "6wmnRhK5djueCCiqqYtHjKiYperJ688aqKXr7V1M1VAeLhhbwF2BgVkov4Xtx5V5Jmws2J1u52ddJZVRBXJpeQZ",
  "key25": "4fCo3jvPcJuDMCa939bSPtWQQvZuVcWuA6AeRrk9NriwXrHZ771Q2wsrDChc1bJyCrQrxDguR2bcZdkPRcZvzJxy",
  "key26": "4zFrpnAz1xGMro1gLUvwRJHwdQitQMYeHuiwuHtPzWVF6HLfaKNXathcFcdwDVSPT1fU5usLuGWamZ2m49NV7SMn",
  "key27": "2k4yydFvHdWMojs4d1U6zwkpWxM4sPu54mF9PuGT911TsHmCxf7iuVt7JuSpvUgaX7FRMua9JVTDZNevnYb1eFP6",
  "key28": "5YSmJ6ffKirme9RibamjSDaFTExFpQ6EgEZErLgGCDLkyXoKecBj4jf6dKpvLJUCJuxAQQTS3o6263uo7DB3cZeY",
  "key29": "2j4s8MNmLdTyb6TLzvwZiXBpgSofKx2es79Pn2XbfMNFzf81GzRnS667nDSLcw7kGseQpJSngP3feRmtpZMZAsnU"
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
