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
    "jtjNeHZjdr9TNqDK1xzr113CK9NfVXC6Gk3VyV7hqBkJhsUjDx63zXhxfNTE6iY7WKC947mvsocYKWw5ppDaR47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzRGMQ1aABrhUvidtKAvBT6StDbJerDEEQeBuotPqUGASSoUyCzY94YGwxrXAXdwRwpApMQnHh3kgWJz7Y41cT1",
  "key1": "37kePvx13DzVnfxx8cuDSZenPNbjcGoo4crtUCbyHCRJHzPMotoYf73iDii61zvA634auSW3LfydDi8o9kEjWTmv",
  "key2": "BCZLTKL4T6TRoGVwfXn73Np7kTDEv6yYZk6wHYFhkdPBQ1xCUhRunKq1BDxhacjZSDocNZuzaUaktJ5HHLUuCfo",
  "key3": "24N93rLTu3A6ZidC9pav5x4aBpn91bNxWctyEEA4kr8VoHW7GmQNRsGW5mkGREph7MSarjZspeR7ZPVfLyXPEw8w",
  "key4": "4Sf5Ney2HRgZU6YLHirmMEkVAXsNn99w1PXdEfx5psX9SUrAjTLvzDjJLMNi7XDLFjXAE1YGUURFQHmcy5FR8gyK",
  "key5": "CtWHB4hCks6D4T7rj9BdVJEUCjPQ4GRWq5KbLL3pXdjJij5ia7rCM3DEh19qDHze1z2BiwtXUxD2KUqeeU7RcCH",
  "key6": "5YzaeFK7aqWukxB1LTUwRAhpg6aJ1AakZES1Q8Ufx67GmzR8qVkidizaeYUMWUkiSjBpcNbqKNVgTQqu3g9KysWR",
  "key7": "5mM4HkUXLRqccGi3NqkXbXtyFzkjYW559PBJmxtC2CTL7dDMvtppVR3v1WJJhgfpXFFj5beYynbwYmcr1p4HhCDp",
  "key8": "2cDrT1QrCYTQ21mgcqYeDp8XHmX4anoVxc5t3gAqnGKBVusom4v2NcA1SpAvtA6ZaLmzmaL2FdFKgKDanbkFKc42",
  "key9": "2fQ87phYbeGJEErhhLu6sgmQbAonHtJqzDkCN7DGhbphPpdh5gGaPMbkFKyQvMAXrZxDK8omxgg2ZzGSqP25GBi3",
  "key10": "3GwatpwBGRjqhnv7aCydnukUXmru6GTKn9G8SkQvYNncEo1tuUTJVKC8DToafCzrDAuRwNnFDEFSUhpvNkUjGQWm",
  "key11": "Ko7Sb75pwmNnVSAMrD8JXm7NTxix5wAqotw2Hd8fetwzG3sBtNSXPUniaFS2dE57hyevbHqDXcjrTtVVjZG5T9e",
  "key12": "4vN9uDWnGAfahK8DfJgHxCCAKM6UcpiG9WcWoaZ6JB15LTNaeK88kuKsLGj11RATtpb4TxkwKAUkVrPmgVT1Rkyi",
  "key13": "2t18tJTvfe7ET9Fh5nHG23b34SNMp6NbeLWDwhZYFyDsLHuJcwFUPv8THjeTKZ4RUdo789Jcfe2nvg5SHSBto7xW",
  "key14": "5sSwDVmC59yAGXK6jcdxGZN8b9qbp1wP71vyjXMU1pC7MZasDfPshFRYueDPbcRQhSAdxcUEz7XP9GZ1UZgk1LAB",
  "key15": "uJymbcMjoDoTmLRP3XG8PErbZakCgsRzGKthFvMdGmuKjc41YoijtDgBhnF8R2WkeB3xaJKP67PWeMzBEKm5XCo",
  "key16": "NTcDyVRZDf1Kv1FWWZMmiJBs6qApPtQLEtVoL7qt3AYd7VDApzRPEVC2gvPs6Ye8U22DiDnXPgzVFDjqwXZT5SV",
  "key17": "5e2FcjehMLDS1BbmDjtvkNvrsaTHhDJhtinz7vj1z58VfW6pGyZFPm4qM3ayYUCZJQUxqa7bEDu19CC8AgzxPPMa",
  "key18": "41s8AuexAtASay1XrDTdH3qU49P8iG5DPAQPTwSnW1Cp3tuN7r1ZebJLkqMza1FMntEjXw8HfEnaZAwPbG93J3Jq",
  "key19": "5dz2CZXREmLXPydCi621DP9XKjeQLud7nwUuKp4t6rSNMv6EBxz9mavJZB7MJzTKyHLwPBjsekyC3KUTg41Stif3",
  "key20": "uEJuAQF4T9NR4UKBahXoP1XXawdkHG6T5cnvieM45djoqt9eDziFTiK5BbG4BWxXAGB2gTgeWbcwMK7u1FLreYG",
  "key21": "5qZYPamcRmVxpU2KgYJ8kvNB16T5FqE7WQyHmy68JnsynXtiX54wvyHYGEAqN1VoV8pBQo2jBujKDWBmWToMMnAT",
  "key22": "3pnDnUmn7KFtQZFDSXbn3axjDuvjh4qdzcYgKuC2w8xeDes9NLfcSmiHXCprKeeimYcuUKuv9BR7M83Eow4roL1A",
  "key23": "3UU7oHaacAETneGtLtcLGg21JwwZx5tMudF3djRVaiaZW7KkVvf2uwYumdmXi6Fcc8unsogvBUNTLtKXBfMu4Zpq",
  "key24": "2J5JDh2CdndbPehz2smUgQ6ZhAG9EYofWVir2AQRR8hX3vxu6EJLqRuVDpT4hXoJkaWLFfm9tqZnjQpDTwnjMfs9",
  "key25": "nxioKg82KPk1JdrjYW9ccqhggtD4hdmqs59ehNxfkCBxmhXFdogC2jFoyCWSTjwUruP618hcUFmXMs4cfJNbdgt",
  "key26": "EhnBqsQQPehS239rfva5xrkb6sNGni5yG54DnQsvD6cQPoHnEqBwfC7iBioMXoMJGpsZ39KKbpizL8CVFpEa2Qn",
  "key27": "LnmrSo6BCPKUE65KekgNMJQepWEuQyaN1BeUy7xirFkTF1jfiQ2Egwxm7SRJaUBU25GGGcsGNfGVkg9W1s14giN",
  "key28": "JUPvxzdxy25EhNee2PP3hmQWxjBaFG4mLLbyGCCGseuocWGRSHqrPXwCo7YodQ9U31YXtPN2tSMixJKgCmF3cYc",
  "key29": "5KiuqhkLg1Fa2Zpsjbc385WAjQ1CyTMHiuhTjPc7bU7qoWMmYXRZvHKxpw6j2cRoic87ewhwpFdLdj2YGUx7cymu",
  "key30": "3DtFBi7QfY6ndqu55fiNmadKCmj4VxUBzRAveRVn192WuKVk1pkuW5whXco2fikkKsSBwB6y7rcvRTtHKSDRUDSW",
  "key31": "5PNSNF7hrHmTnKcnpnfD22tvVhPMXZfDTcSizYuXaKhVJ6hEwaCwKfvsosXtNgF55SkPteLa82n9cohZyNPudhnC",
  "key32": "5K6QZ5KhFpkT7FTSkbprnkyEQj2L7Qe8Z6AFRY5KXZ7gdDGP36GThNN3FgEptCa2aR4xpmodTaXioCMtpBw43M5S",
  "key33": "4uXi6ofXBj5yUatC6GF6UKdfnGmcmCCDXypGMF3bC48z3QvZFWeavwNBQBxaZmFxpexWvmSbDoDTtoTTNzUYru4N",
  "key34": "2XBcZsftYFytMUnkidWiVsf1ETPJhaWtxSzrUjcQby1Y18KCS6d26sGs6RqJD1zBabD1JgKuAbwAYSYWjhNFZh2T",
  "key35": "2gNPrqPoB2ftHyBhSo9AfaPRFPcfLn9YRKfjDdNDmA2fqqLcg5ru7DNFpdVuJqKWqYR7sTy8g9k2noDQYuZ2XUFQ",
  "key36": "3yBpmuNdbLoZmzemJRr18eDJZbvxNP3ZVLj6fKXxByRoNEz9uXpbFaqdRwDxswf6QFXAYzj9P5n7b5qeBUj7ECc5"
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
