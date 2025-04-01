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
    "417cy3k677N1EcCKadUbzpQtZaqwrvxVyHpttZjpGtLhYE8fmRiHYoCzuKkV6kRjGgqKExRGeFDqNDSnzhvWP4uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66heKEt4uUYoGC1r43a9Kekvo4ZnRCLSvvJTXPZGQ27sqzLZ6jnjmUAw3nLQPnig8QDaFUSBKWA7GDWffC6grRdq",
  "key1": "5bHQF3bxDKu5xmTQwTvbk6xSkJAgsu6R4FsbrAekN4zEcUtg6uicBQWSZ5NbhSytnapVZ1AvZzYzQMYL8RQVGycz",
  "key2": "wH9TqkcwvtHry2xERY3iLsx1P3Djt1hePonVVbdYKJk5kLgmoHSX4RHd3Xc24D3CDWqPeq9z5kfaByXCgdFw4FB",
  "key3": "3YudhaHqvzofRu5aLcZH8NVnhEPhTKNs21VymnSwnERZ3t7dPZdducYFmy2dwKPJjCYqegji8Aqvam4c1QuCwQWM",
  "key4": "4BNWa38DgjYVRzvMpDUj6A7ieGeMh5LM5D2EFbyYuf23mt295QDVNukwxxVhpxFowGo7drpJmAumCPmvrJ6NbhVc",
  "key5": "4KghMiXfAfoUSy3STmFER4pnEYY8R4ctc2XKihexkLsj5p5QnLA5A2rCkPZTah4DbkxHXvNTBKam5EBLDCP16zTe",
  "key6": "4iAEmDUaD14ZDEdADqMDE8JT5t2qb7SPboiXjCVEGHLfXU4C6RCxVU44a14EsQjzLJLLW8BBhCbvjQMj99pYLyDx",
  "key7": "FaaRYzAsGoi82BUFJw6h8mnkfTaRCW45GChF3oGsDqvVHwnJXPXLGqZZ9Z1F6DHFvmkQSrLcUEzrZtrwhNTKfkA",
  "key8": "34kkGSNokyPy8KH6L2n8QHDGSU9tnDdrzQ99uZHbmV7nEPLotK8DGxCW73v1p6QrvwamcHzKsdpLSFrTgv9bK7Yy",
  "key9": "4KbhbfyMTEj6yxSdzTpitbpFSRuDNAoHtb5Y8uUsi7k9SkD8fukYAJHm6zPt4usWMrmyUrp85Y3ijWuaSMY8aYGr",
  "key10": "uV7Zx35wacBTvxyFdAuMxxVawg69wuZCZaVvTajcwb7K1NjhGKDUfpMqsxMH1Q5i1Mm1F8DVhkvYyDcHk2ayWBi",
  "key11": "5emF17QqPyV9yQJDqn86TLVqh199mbftfb4MbEqcBBYL3ns9Kyoyd8aTBq2qQNJEUVd3vmDF2usTcfQhHWsAfvK6",
  "key12": "5nxJv94KaT1BnfYjACHYiGAxj8DoLJXqE7h1pXaAPaCpgqwFLGEoUxztypPQGgjk3LbubwDbfMMfdh8jySGq9QQN",
  "key13": "31LhV1X95aLNyyGpW1MkDnMcK5RN9vkyUgov31U2queaZbBYWbWtqtuiS4hch2uHqxSp7G37YWadp8rNKv8obAE8",
  "key14": "2E8uRoQFyGTve5vDQKfNXBKYi6tsBfHQb6eGqr7Lm6Tq8bZnW9DZSe7jGqL7BNdYgsFjHXSUwvasParHWPJR3Fyo",
  "key15": "4mcaBUM3TduoSPNrZXPk4Wd5Ja2FWi6A6gcDw8nfBu4pabRBjT952ZXgr44ZrfTmU2A84f9qP9ZU5YKqBm5zV1AG",
  "key16": "4gSfwg5o8KdXf8QvrfqjcTGpwuKysP5hYAJ2q4BkP824TGM9nYyKNDk1anVYbbiccWL9wsXjG2NGajLUKoVEPimm",
  "key17": "4Hj4KiX2Bg7pj8qCSqo1fFYs2d9w8RZf6gtBSuoQvEghY1dQ65T8YzoUb95dthRCS55y3gMUR3cTk41NYnpp78zG",
  "key18": "NAHGmUMyLuRuzHChTCF3kR3LXkBa1jMZKf46tKXkvqR4dPfuCAcedwBC8Qqz1VbB78Ugi2CHFfe192GCHJHXct7",
  "key19": "4z2FkJCGCzjbq4XWQxM1nYdcYE8mNunEZvo5k7J6wU8TZYts8z6MR3LsYQggtV2b1pC3QSFJBLYFtde6V9Swn2qk",
  "key20": "2BB359ZkvPab8d48hnQpHA8rdsauvWkebwe5CAsnMvSTmScxxYSZZDzcXtLyBZT5ve5RMcSgU5gxjaeE3EtJDDsT",
  "key21": "5GanyGmPFfEGVqhU5LtoAjnxy3nX5hMW3ZBnrRcrU8vzc9H4f88XoL4BrZ4XRW779PhMhpNmfgNUWhYh3ZYSYJvQ",
  "key22": "3L2Lp5jcnfkhKta1WN999gzJVf3KyTBJGdNiYycwbwasW9d9tSaDjcfzkRB1L3Lmp6iykDZLodUY6C1hoe1zGe3B",
  "key23": "WwAVTtzPhLnTjspB168CLnFEe4xtxLoGuNqfnCT8ZGJ6dwF3YrcxZpCn3aZ8wms3Tz1UKFh98eA5XFCeJLfphLg",
  "key24": "56ciaYpvuoULESVQrWmv8Q56QnXd9i1azpHnANtpnkJLMMTYUgnD7sf13S789f4fvmZ3dcEfhv6YuauYyJE2wMR5",
  "key25": "dwrcotpCDrYsP1viLxdd86Dpz9ucqzutzL8WZqWyet1Vv1K9uT4f4dVCq9FTGmaNXWs8syuZqtRseNJ7V6X5fMr",
  "key26": "5gy9LTvsgXn2GgWLdF9DxqcrbXR4k6Gam5qd1DWfmnxjp6TJhgG3fBpiyWBjJxqZcbmEXVGsYMtiAz4zLYGZHodV",
  "key27": "5ysiZgng8SA6ncL8o2pF5Pkq6cvL2tv9LnzN7sLa6RWmPPRxZeW9WaDvYB95eKaSebxh5RPUsio6hXzFruEx7nc7",
  "key28": "4NncmHBcYVSZZuAhzir7gv8uy5hmXqmsgWPJRSk4rwWS7wWAeMPvVBubSywj1PQFLEJj1av4mvkMHVV1WXR8qNYH",
  "key29": "3pBcR7o3CocSXGwPG4nP2wuLfDQLmVnUQQKoetopQ8xBwA1qen96HDqvfkVn9Svc7SAtmkZcq3ZYajPMd74UNWH9",
  "key30": "5X86Tzcw7r488rSkNL6k2vA7ChZGk8Axk1tPtBPuAtwfgiFmQhsTruHV42xuR9rLgM9fD5YCeySNLKp4CR8NqrmQ",
  "key31": "3a69MWYKv7wtATp7D5ngJHgaYSBA5eJumEjJEY1Qwy1JakxGMpHUzR42QaK6HMXuCwX1hZ7LaUEcpRAefZetHM9e",
  "key32": "3CtzA6K5ujZnWdPMuyf8HCi7CWjn3AeorobwxpeogF5tHAa5vWNHammDnGkrT6DNjc7WStBGDoNXHuq9geDZyrJP",
  "key33": "5WoAE6jTVFTtHscdW4xgfvJ3HdhvPCfaBBnxeVZQYtUKrpESSb4SE66D9xuLAnoB55djFsvwqGhQ6RGh8hvf4Mxg",
  "key34": "4jsvepp6LYsajCu7yDrNyegRJEFkwuMnqF9HG6AUbQ2CdmxC9CSAVkrXSeQUvpB7YQCZvBmWHHUbF4NvDmABB48J",
  "key35": "3c2rMFyBbAH181wSKqfXJr2Dn48UnhYBrSHjkNRVKcD73pR6naJdFXN55QnBx2nEkpFbjrEdNyhSbFhA5whi9QBt",
  "key36": "3Laiskhq21fQwPGFGKoTz5PCoshm4V6dAgVkDTzU8gnuUnkR5MPjkKCSiWT6d6nsVxCuavYy4XkCDg3sS2cFu5KD",
  "key37": "wPpSDu4iKBV9tbHPY5AM3jAaZkFDMjM7MjQDdvtghZ2qNrT6t25CzW4MEMCDZGtajPqknP6DyLn629QDVsd8C6v",
  "key38": "WjfYQmbqsNSQp4rAtFDRwz2G42XK6xCrDpuHiLk4xPVFYwkNXhygDSWPwbB1MCABEkGuVK2cUc3Yy1zsPqgaTww",
  "key39": "268dqF48pTwwsyHho8rXpWSNkjXg2i7TXycZ3A3XiNVrfZDRK71C9wUYXzUeT59p3q2RMhNQWqHn7M9AVbSiCePo",
  "key40": "5JwgxdJ1tSiwUJd7QSc9Jiads3T1SxXsWV3e4Qxn2D4B1goXbjuoo5TYnRdpwJYAWYGFvji3UjEp1mApEsCQxuXS",
  "key41": "3JexatU24TeNJWw9DheoeeRqg3qNYg5c2xXZfnQeyyH1FUNacM61yDMoTUvG5o4cCxd4J4ikq99vaPeCusW2DuAH",
  "key42": "2kUo6bWsqXzf7gAb2EteBxR3X11KA6JcvuwSvM3jG5XEMRwyy3nwkub2zzXn4iEXnQyQrxw4fjEBSQJes7scMz6g"
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
