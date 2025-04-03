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
    "4h27yqPSzQSzf34myZ929wcN8hUYjoLoXbUAusQ1UUfpRZ45n5BERb2ogikLBn9Kf7WMyWgELQEFq6hKgcgobtwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Emsu8MDbLnzr4oxALSfD43h8Rrxnh6RKKaMUUC7QSMytBrS6ozNKpc3TtosGFz4JyzrbzMLJb7k1uhS3Fwsa4ys",
  "key1": "3nfbK98f3ifwJGfD71b7Dadn4jh5SyAS39rQkxs92beWfUEjV1919MCw7GesRbbFYzKQGwGCasQx6HvPQpaUHgR8",
  "key2": "2vqMvaewo66KMeDwoR5BT8nX3UuH9PiispV8ttgSSWZfGK5yywzeHf2YGJpoZQd4tkUvfBpLk4oMC625odfg4APw",
  "key3": "4A9JxvBGZLtc28RSiMtoYrEZcy1QKKiCz2a3auYMaARFWXi8oKcXjLTjwNcRLAS7UzAJwU1BAqkAPjHV8MN594sB",
  "key4": "4ZBZg45pK232GmsKQYweMpXmzUvyTucpbSjMr3UWj71Hp7tqCEzafMSwb5otfPXBQ7fxfTNvxnP4wauE4TC5L8dq",
  "key5": "3di9DhfzwqNBG8w2cPBPrcv8HnnsTT3cBqg7yHyTL5aPUUR9eD6mKdhqZdLxfvkNf2HzZJnUbrs5pkZfdSU1T2zQ",
  "key6": "1MKdcBz6kihS3ZLPMdYGstd4nxn5kMiSRVF924w26HQBuD7Dei9AEjuTFPijj56c4GUVR8SHgmmoVuHTJsjZSJs",
  "key7": "5i6HzQMsX6qAEqGwSxvyaiAGxrqpCE31PUrvWv22ScJ3rMMaLDY2sCq9RKaLRT8TtMdMbTFZkkFy8JrKvG19b8Xr",
  "key8": "4jkiuG2j9vmSCm1hFM5jc4b3ZzEHaVg71f6MYKX6HVGTdQ1Ufna1iUHqJyPVdFNSRygyDRBj7cMHRXN5E6BBzj7r",
  "key9": "2vcR27G112su1iRc1VPKnQVoKoPFURhNrSSxywdmZHzJyUu7D5aXpTBbULRJ966EMt2tTRp69wdxqwUGmqcvHapZ",
  "key10": "2Mg2uidbBap27MSS9NJuobNyrXPnb51Rr4JBum52fyo4bJqNGiGZzZEeVcDvgW3hM84hmmAi4X47ZnxgXdDS6PdJ",
  "key11": "3euCoDaPT3ofAi13SoGQ5hjuspWcZpg83x5mk74RzWksJKfe9ppsoUr6h5bMEbAMGGH7R3Dx2u13LNAs6jsHAC8s",
  "key12": "2jrWNPx744Xwy5tLx91RtRh51czWX2na8K7G5ruYMDer8SG7TV3zZC251oCeRtxfZZzromkTAq7nL5zfmQhWy7VG",
  "key13": "BSGh3iTpY7539GJZommfT98Eo5f29dfBVVKmMPZSeZQMHwUMhHFJpv8zmsANZC9zbaAdeYveGnHoczxG65d5GJZ",
  "key14": "51Bcq7ScqBm4m8V9Lg6zsDJ4h4LFpowk1idmjyjALCTdDn6BMfDzPhkE248FVNrnPnrZK35RsJhmQdz1oSVMwTva",
  "key15": "hMr3pGL3raGDb5w4VokHEB3nsm8HhbruBDUM92G1badYJ1CqoyVZX7YmRmyTxSRqHYfhjk88kQL9EjStYqnhL4x",
  "key16": "tE4UwD7qmYz2VdcktatQtJpuvsPQWvjfU7CEtuAxXGduwXMJbYuk3RztV31Wsvd3PE8xNKc2PWuxfVVeuMcNFRM",
  "key17": "sPLRbsT1GHd2hwcEYEY6MQkMCukisef2e63P4wcpfEF8dZeVGmUSvgyyVEjB76vNkwmiDCKxpqcNJrQJUxsrmXh",
  "key18": "3aNc3uhtQxXKPYnfsgk3LUyMK6JBHhjGPFPztzuf764jA2NJ9NFMq1wPySudqJyetudqm8s3T9gbBe7wT8G6Gj38",
  "key19": "eNU2aMumQQecfSRxN8CT1JTFTVTDUh8qjudL6jCTdfBGo5b6jhSrKuzkuGz2h1S46Pq6xSdpmpqKe8gWb5iAiev",
  "key20": "676QaPgKQ96UoZkvJDVkHiaATQ7joihHs6WF8Xk6NYvJtMAchAaFrYPFgG8zxZMx73cj5Y9Nb2LURF6YSJzJgWNN",
  "key21": "ALDnhFAERsSmfAftCianJdc6iymhhFr5bzK5pPEJu113UUwKDkdFxC1NaYQUYLsVF5rCBrA8KkPckJvLCJYEwJF",
  "key22": "3KpuxFeXJoXUJcLsDHPCHVH8TXkTHNHAsrjwXbZZFxJUg7fMdgobLotz3if4n2uL7eAoG1aBeev3DCFg7yQyEHro",
  "key23": "3gq3qCQwJdwALr29Poxe3dci7RibCzjBof96KSib8fQ6QYCChSxttt6YKJUpNKtGVwKDHENCqAmhHvnXNuddPHXY",
  "key24": "2mFejMn5dNUZMKQQeSFb6R3BEQ3414DUoTU8UiMMEbgLvLnZTQHLQ8kip6W7bLakDYtwf6byspT5wn5iNJoLGoSt",
  "key25": "3F1bGU2Mknp2GyRcEQ1r2cD2eJ7J69f1dSVvLTHUEkMbR9p5oiXMJBwoEcvt5j78TmvCX5hb8AgvqXPHKot6a7Z2",
  "key26": "3mgTEwUDuYcHwtFa297TMJqmtyS8zekeXAUCKwBsERDKo3rPbWSz1EfAU16wyGnPchGNUiyYCGjJ6iF4gGktjVbo",
  "key27": "3SLWpmK6cTECr8wn4Fekkj6znegisCVvL1k4NV6pJPDa1o27CDyYFJjMmXm4aXKRqmPZwKGG6tVek2MmbbuCuMCP",
  "key28": "56acpHGV3JGhvDCbbkJFxnLhNU7xZjsytyqCXXrVrC8VhEApjdYCuV3iSZCZTveySECUkM9VNiSPreecJDcfBmL3",
  "key29": "585YF7VJHXRcyyHUdiT8nSXABz7Pu1o7GTi4kP6DHEQi32LeVRXgPK1QAAKy7sQyUSdBSzWtx12bv3xnP9mxMX8c",
  "key30": "33pQgXfseYfZEwL6AsWx6xVF7JZZQeuYwB6kzgc3diaxYJUqfezBbQwTyKYDnxNVomzBDTS2Gmrg39jHnZtWme5x"
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
