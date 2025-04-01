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
    "2uXhaTJjxUoNS3EmEhyRhK5uZgYXuT5Zg8T6YbbGeYxGqxMovRxxAdQ9gVsbkspPufEaixXH8q55S22i3S2BRxPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrtKifVEpqYP2uXsftUiSeVfme1S5UaikAee4rRBPuBajR5qr6PTN6jRvGQPYaCtTXH7em92tF7S1mA8Sq4aFx1",
  "key1": "2H6xqCFWysf664jEVDNDSVswvcccB525Ue9XFry4N4FquQhEAn6gRJSLbigen1pvXEoGwCoourzspvsc18Q8Gv5W",
  "key2": "YZDC2CvFcxJCbDkxNWqvVL1LdajNfZtC5LCekCBYbaucUvqJDcasRPnBxNVqh3EBtuvYijpbfz8Q49vSfe2TJ2s",
  "key3": "5DxKXkJkG6uRi1CUVQpb14oA8erhdEjLQPm3wa7Y7dKhxd6srDH6bYYzMRGcWH6TAwYvJ5RdEh4Nhg3kAQEm6Ueb",
  "key4": "47ev4gtKacBaQVoPD8BCZ5j534doHP4RZ7Mq9L6xxMmNkyQBFCex8F8MVf2M7sc8b1rjdaDZg5MsmDYunFPbY2wi",
  "key5": "5XDU6GsCPGrYstegtEywfunTyVRhFRA14QQSXTWxUJ8pr8uSNNKyAW9KSpaaVTnWqgjvvj9ZGoWMGRzYCWgg6mVC",
  "key6": "8ccw4TMZ58EBhth9DoBBDHeAxhuDrutZ7u8fNFt8iwkVDV26oNdEZh3z1xH1uzAXYjVmAmDHarmYsPz4cwfJtHL",
  "key7": "3ykQifBhxrENHgoMVtRXty5wzFFshF5hLzgmk49Hy7tVaA6riqx3uBv57PqaLnUvpEqjR7M97mBiToZz3Gv3kymx",
  "key8": "5BC3U3vs91eRZi55mWeQ3ycv5S1mKcdsSZ5xvPogYgkQijphfCqm19Soc3kodHMk7FAdw1ir9W5VGmLLLPRCBMbK",
  "key9": "5Guwym1LU8KSx9d5sZDWb9tEyocPLiQfHFZuBWtSgm8aTx5hpCG7L5SzHez2xDyyC4ciCYwFDWbahgRzaPHJvKdu",
  "key10": "3CbEASKij8Y2t2CTci7ehDS3JFsfTcAExvTSpkWGrQMsTdp7DomeEREo7aWbixQ6ZtYWsCFdTR36hr8qTb73RTFK",
  "key11": "cU63kNgX2N9T97cLvXC6krj5sYxMYXV9UDCraMbdUaHv4nvjipo3rEuFnTovc3TsH9vuipGEMsJ8pRPSJG75Nuz",
  "key12": "3qzSEFFbSSnhzwZSqyz1ZYeRK1W1NvpNoQFBpx9EkTfgTtHJ2p5xak1ruiRrSAGM9CEEZGFxyqFk2bx7qCrVobbL",
  "key13": "ozkZw6Z31vB8mZQrt3ejXTL5W6CLYWXXpy29WG8xCAvvueTRc8ATJgpxrty8yHNacUFUHj1kZZtCFezDnQHnQWc",
  "key14": "h5y2TVhFUjqRgZ4catueSaFCgS3ceVusUst2hxZyvbyJhdNS688CWbnvTtq59m3Qq8EJvPViMrYJ8irDBsuJx5U",
  "key15": "NSggN9fZfhoXpMjRPkwy4bHkMECcjSod8mfrfUYNptS1nZbDrdLoL5sGD3jfQw3s9F1cqGutYapJqKaRUJHdH2i",
  "key16": "4M9GsoMfu7oxsjPbwivNT9KNTPx2fhpUJ4SgicWYgic9sdHkzLs1wo4FaBMfBCNSnFVgU1VJQokybxhMaWSLgo6b",
  "key17": "39myqQozSowa5SQPAxnCgDS5DGchryYpwBXaS91rEieVRW7fS3H1zReKgtYEKuYgBrv3iY2HC5zRni5a7p9pbLTp",
  "key18": "2XNAmHq9dmTq3D6im9hFQ7aS79pQoawGZEecujF7UeuBSAvVTBePSbH9oJ2Rh8HSUx8H1o7s8gYVscvQW5BuXdJi",
  "key19": "fmrkAncAbyiV9NEibdaLFokxLjJ3uYWdMKNX2PoxRNc1v2dLjt3qxZfo8YuJvTeEp3DtoLXFb7Mm6igEmrgU3W7",
  "key20": "5xNxqzMV5dLPn4JYUdXzSx2WGR9VLDuHWy9d5ih2Kw47JZYvppzc8YwtKZRsrQpNSEPdrCtPGQVrS9U3ZFc9H9vn",
  "key21": "XZsmnXtmKBfhzQdqADojdDc26ZnCPm7kZd7zxwrW5U2cax3f5YdGxtRninW6e3owtaEhAG424fVeopdrRHCZWBm",
  "key22": "4zUWZrrkenmRgkWpXm3ANWsQKRRsozGsDZvHpBr84VNfXwSsHTz9UZs8Bpw9JKi8K3UK6D3G7Y6JyLA2KKy1k41R",
  "key23": "3RZ3KUzqMGyZhjQR1qyDqwng4RmMeALwMvCmQZoxXZct6j1NqDxLtqwSmdfK4RuH5sGcmud9ueKiSAjbGQUQMCm",
  "key24": "58n7BrbF2NwSasRvpsv6JGddWQzLho1skzGYQCQ3cnoVwvnpNwjWSisaweVsCszTduPbc8ufKQNSBfsFgVG53Vno",
  "key25": "5aV231dWTk4pez51B7RE72X4GRCed26pr4JKeSss59mN2nSmPEpgrpcEeLvQd5ZQLdnLhcGFF9BuSn1hTF3s7kfv",
  "key26": "5fDwcUZAYDqL2rQGvVY9iVs9rFzNw4kc5BFV4urrHz41vFqzdwhStq2SLYGd6kEKhH8AyxN7MTVN9kpnsiEU4hu",
  "key27": "2anzkf3nMfuxe8BWuXkNjXY2aJNmCSf1MRz6GR472VULsWRYVqG951N7HNeqCC6ryRjHB6wKEN9fuvvAT5sbPYG2",
  "key28": "615Lo9zgDZyswWLsfuqu47mKziaNHekJYm3sF5NJtSQ3K34ckhgVicXcCffdVJ7bLAszoo4MY6BZmVMJ2RixMibq",
  "key29": "3UZpB2ouDLKBv2j6638pgfTK4sKepACQYv9QJR1EV5QGvqe3U7hC2eXVe8AfN26f59MVccWBrxonLjNp8zcw6CTj",
  "key30": "4gT8J9Fz6QS5jZnW3AZ8nA5EixAMz4AbD9cfWwxp37xJNqoGZUYeQQkrU3UkYevuojKr2SFDmEahoyhR7U6JLUVh"
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
