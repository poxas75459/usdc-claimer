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
    "2V5Vf8FiP7nYtpggVVqPQeEPAHpS3nHs1qomSie2PstG7e8Cvor49ZkE2R9QGWUEDW1kQkHDDuDYGvYeyxitv5wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Kk6YQzHMHZQjBd3WdRQWbNDj9GvvE8nBYxvS5B17PF1WbU7bAGLW1vtYBQ2HLyGP5q6Qf36nDafgeehquXrrz9",
  "key1": "3iQtquVkuRi5QgbC6xA4gbDL8N8EXd1u7CetGPZEjKe8CUtLDnnM5g4ALGfYVkV32PgcBGKD9PWYw1hXj2jZyntv",
  "key2": "4uSZd6NH9NMZcZJr4Fd6eysbgHRHqPFibgtXBkrPtHb7TbrSnVjLqejBmd889wKPeNYwiPiEg8RoPyEse9Hq86eC",
  "key3": "2gpXE3er4PTFW6neTvgqvRhVUwZjP9caEoarT9NXF1FtN2bj4nhzxRwj43rtifvSbeR4kiWo1zmZG1qWtq4pogKL",
  "key4": "4CvL5Ex88T5kWM4jck4778n2k1jGsjDgmVYgmqV1DeMS3izGMqgd81VUVkUgwigEAU3Gy6BLX38E2DG69Fbt96mR",
  "key5": "5dphKCiSNhqdd3LDzpXfYLwtEvew8r1aqTH56NfaQL4UHPZcNk5yF9f7vFqRLEge9pgFyVhea72vP72xMVtCjZSs",
  "key6": "eQXFWXhEJ1AzqbPuCrijdYDYK52oEmUsKTq5zuoSKCLr3fXK9iMYYfAZYmPd3PVwExzdh21dGdWumRZ8ZXq9daL",
  "key7": "F5n3Npo7QjsaynfGrStvXGtCv64D1b57jBQ4xRSpRJYhL2PNGC9emvP7NWzb4JBPenLngsyR25CguNQed39TCrc",
  "key8": "4fgj8Trneh6oFruTRCtsWN6A4E4daGkEB6Tr2vWdpESPii5nDQCgq7jDHhz782my1uvN6jQksCxLLtyXb8QsEEME",
  "key9": "3TAbrQ7Y78PgJnbn8ibtCfKZhG9BFCQsnGkF54oYSXhALv6Rebk9G4wto6FTBMWU8q9pVZgyGQJCu1nBBfo6Mjmr",
  "key10": "2YDYJdRYBdn6UDLU2vP3nGAUeHH9MkxgLiwhNj2Go3nvwX9M4H1eGUbyQQWqm8BiPbv6pkEDCfWKCiJZzfD9rXWL",
  "key11": "3rLk8WbXUf7Z79PoVXBceVxHTQVkfhddt6xX748kyyHLgraxrkzZELfRTuihkKNv2iQZg2Pw789p1GeYzA5GBvvD",
  "key12": "3vrLAXAnL1ohx7k4wmGUQV1JJKNZhZJXkHgjAsyYhzgkgQJcUHz1w8NAicFgQytaxHbdVyLEcKPqdcvAWxxkvTUr",
  "key13": "28N1tNPB5W5pBTCMHhAgLc7ZkQEgEk1Hu9HMThn6pMHZanm4baZvBiSkeFCx7wo2psQwCAksCDaKZn9Dt9dkYeid",
  "key14": "2vrMZiqvc5tWwhgfm7gwhiifUD76d2bhJf4uzWnzkdSBtUKgbF65R7gQ12quwnDjCsHz6tGe97rH2gDWtMSjsZ9R",
  "key15": "3dT51v4iQjVE2MsMykuYL2Q2PxSA7DjBKEyAWer5E6LUGP1fDRZB4KUXR2vvFRrDWD93LnbLtsa2UzgDMYHqu1QS",
  "key16": "jAX4VeHAohLHyz1wumLca6N2kdUpCjwRBXaeLTJ2kx9xoPCM79F2EpgL3FUSMfxkFpkH46xutap43k9cskAUCgY",
  "key17": "2paGYcWYSReExs59A3R4sTUevdCUrz8p7fAMSfXzsbS7nND4he8Aq23oNFpvTwbzqyB8m2aNQMPqDLFVGfRXes8q",
  "key18": "56cna7r1tDeJbafXjwfxD6oQXSAtQFjJ1N33KzW5NJXg81ieXATuzNrqK5qQpzxi4zyYPUrNzu8S4zN9Jauo5GqX",
  "key19": "P3es7TdMDrzdQkYoB6qY5S32RLcbUzzNpPo47wQ6Sk4uUtgL5gPYordqtSCV953hXBc48cS8118sHH3SotnQBqf",
  "key20": "zyuX6pCsaYrQCGEgtPWDGrtTnjoXbEAmvuj4rSwApdsZrwXebxXDqqTaigvLjStBSWTQ99YcYrtm6153sAaNtEx",
  "key21": "5yWWAhzp8cBeRYDvc5jktuSCHQetFXeh8WaSfZ8azbUcGNVoTaAqAc2QR5mdYG3KhhXUU6P6S4xURuCDE4n43nLs",
  "key22": "5fhxvLcRouoHXY8F8vE1YnabdFwUimrnQS4QAjLBjzgtLL3ytqy6c62TukUSJu7S9qAngmmcjoGQyvQNPM8tDuGf",
  "key23": "3GLqYXC7sZymdJgQ6GS3EpvrBHauk8PsGuhEfsCvG9i8UD8tFmitHxfLRYPNc67Uy3A6d1oCw5VVKqTMJ5U4Mn6A",
  "key24": "45eMUGekNeyd5EGsv2WVu48DJy6Rhhe1G9EMBrFyea3tEDjHUKsNqEb7osedkw9FbXV11vMhC5BqRJhfdxhbqZE9",
  "key25": "Uj9EqPVS9PC4eVSuEqBhn7rokjLZ7a18BojcddgGmKBLp3mN1hSLep5tphWLdZj5UqXzXi2QG37TSxE6Vci9TQ2",
  "key26": "4vXzFuRXV4Gd7hqF3ECdEUcByUYAGqCmD6uqVD18C5s3tjSeU8CJUYJF7U9Zbej9ZLnHTN3gz6BFMZkPXU9huNoe"
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
