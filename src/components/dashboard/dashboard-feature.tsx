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
    "GQqAFS1KhxjkgLULWFQpnhomNrzL5UBg3Nu1fw2JSbex8WbKwUcg68eBXdBNoQNBEfviaqtwpTF7kqTzsVh9mMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2NcMeEcnRfLy8ntFJt25eTFJvSexRD4N5F5KPd6txNKPZjvkFsvxEGL1sJWGXq7Em33KmbYeAymVhXF4tUXJ9N",
  "key1": "3pB678PwYyb7UpeLqNT1ZJ7aHAV2grLYtUkA3uU5i1VanpstgDj8Dxc7sQeid4UBHo5La8mdhj5xcfFgV2xcndeR",
  "key2": "3uEyqYmuYhtDQLBetrjJVYAmSLixFwapSz7zXeNtQPSox7fARHKpS3X12pEw6KBcd9yGHSzBG9C7MR6hpkvMGNjx",
  "key3": "3q53fkoAp8t1AeTV8KV3bbYPaVFRh9NAJxXmyt7EmRCZLmWjZeXK2Jwv35SHhANW7P7iuc4x2aM2rtuUtipS1u8F",
  "key4": "YAb3Ny5YQHWtLerSrpXLFNVNQ7HLN3B35Cmy6U7mGfK4npzqkxrwePQsWLRbK7uWhKq9ZKcQHm1XbwCuthxbKLw",
  "key5": "5pkiWZLf3ERX9hmfFby4BMzoPbBfHfeW5oxrJqgtZg43MBEorjpKez4vXc33mF3d9yDpdbtcDTesUa5QqjssmTN9",
  "key6": "5tReHPuu3LQPwvvAaPi5KknsXfkaJqEawhJrn3y5euTN3gryAUmZtzQg7xEvyDS3NEuioWBiWWcsicp6iNVxLtog",
  "key7": "tHFe8eJAcSmxt2qw2XgdA9d7fv5quY5SpGvrsY5auskAMjsX9s7LwNG4mKCdQRxx1QfEvbo1AwaLHtekq8baZn8",
  "key8": "qbP1g1vDPJcXPxgam9v3MqC19pTW1QiaDg9qT6hUBNMmUUD23zKRDDiTE7LE1uLccPEGGUVnFh8AxkU1e2MNFn6",
  "key9": "38ZL7PExhvnKSGjyUzhiFunx7vWBBUciyhjpneesRDPZUp2JJsJYPUyoFneAzZXReJSbqgwZgPMxGijyigeNnGKf",
  "key10": "3m7E8KQb29gDgLD8iP2uRQtgNAyTs95b35CtD65TyQUnE5e5ZuKUxG5idB7UC8g6eohfTJBDfeFBLFa6Zjc9UhX8",
  "key11": "2QiMkPkovoq89nziJJ8jGBvrq6KprSFQVa7BB2GEzGFjBD6TcF12CC6fp8sap7KVRhAeKrpeXVJhHMoGUYQT74eP",
  "key12": "3MeYETgsxN7Q8K7yj6FSCWBy5bzn7jzkMT6XAxDjZMjn29J5JdypEYhM8bRi7VcatqqUuZzkFmYyrpMERvJJNYmD",
  "key13": "31mhBhbYzzJj7iw2ewWpAAxp7MDUupUc47QnhxsWg7ajibKXAwF9DWwKaiBSR49PxCxS893UfpQhmufFbjWNyEzx",
  "key14": "5P3BnfLRajv6Lzqk9NuHSAUjQ2Fu6u4oC6NSrcGt8F3hcbCpjJTcMxDtG5puhjiLBPSmJDdzk6wD99xkpMe9Ww5e",
  "key15": "3e5ENxha4r3nxPD8aiAkfT8wcEzc5h8Y8SfzWT3v3k9PRta9ypCFPkNQY9AYyTwyLTvRzKMpKaGhFSskAQN3gUyE",
  "key16": "3BgeShNu9sWeeRpBdHAn5MP3u7z6h8XKhWPa3QcGZAcKbqAWfGFTaVdskFK3rsASwFfHe3hrcNGHcDn7BKpm6AMe",
  "key17": "3YmYNUUvNaX7ew8gXRSWsuL6rSbSDo2iX79p3bCi8MVs7HvNntDhhV8He4fdQ8FqQHXQh3rFT5XRMJc36ytaXXiF",
  "key18": "2B7X4xk2R6vUDSFPcZs2FPrZ9jQVf9kcDVmoeTgh7WTNiLjVvbfyoELmduc82aVjyfa54VgDx2hupBdUsEm2Ybf5",
  "key19": "3WK5QZtgBxp8WNbNqg5fNcev2Qy5jGsLiq4AbyVG58LDGr9aFQ4ot13EUHZwt1Q6mTeXUUk6Qo5vsEReMf1PeEA7",
  "key20": "5uJQaZaHff9ZXwdsYV79HZsrJqKCiay4Fq1jZR5iqsS2mEK3RyS15rmAWwWeqmqduseZcgmNLLp9X82y1Bg4D2q2",
  "key21": "pNmWt4n1MkdLhBYQvb94Y9H8B1212NfTATqdtKkYwJvAdtfW1pPF2CA5LRGT3yQyNGJn7Y23ET6RLq2XymbrsQW",
  "key22": "38Yi4KdZ41pFP8qhjKkgDyvjBrieB4FKA7NZPasNU8zsLksekjmJbNzSdFqgQrChXabsLH8rN7MKxZiPXWR3zXva",
  "key23": "37CJvyPtPgErabPPugWwqmoKkPnWgd752ywZNsbZseestbfTbPuF7H57aCo8jXvLDpCoA3nLu6sh2f7376eHZUGW",
  "key24": "43mLveChSLNnVLh3qRJNNug9v8he4wLV4s8xzSQPhbnTUpjqQLvMPthxv9kvAW2GQWhr4F6URNN1XdugRQR9Cj48",
  "key25": "5FYp9k61xiTk4dp6r9dUbgmN2hX7URiw1mhS3eMp8DnGz7tAhhkJabFAE1H6qAy74XevUMtrP83RH6sQeZquPrAk",
  "key26": "2aEEokYB1xowwPitZRiZBg3HnBdhVLFbPyUA9iZuog7er7Xmk7d1CVxEcoT6A4iicHV8wW41PN4GLm2HBQwnSUYA",
  "key27": "2Cuqh3CHju9LjF6GMcAs2BfDWAJKgVNZZ5kE89Qj7MBkY5HbcjzFXYQDG8GsKc4quL7uHbndxhMAVyQsU2D3U311",
  "key28": "2t1Vav6BMr6YAs3RYr1teyJ1dAtYc2L5jdFQnRKXXdJX89xQdAHYoFShmNP1njkVh35i4H5GZS976D9k6EvQkyt4",
  "key29": "4FbZ46L7qy6ZUvffGFmpiNzGrAJAxKUQB7aGTAXrYepjwRY1BD4iR1cCroDuExqpUtkSKYkuVpo5S4iWUqTScyVg",
  "key30": "3G7Z5MXrb3rWsevLVZGPL88SnToTGCESFJbr5zNwGBqa1DB68WEqbXVm3TzrN2pS3ad3wcobDRBKDVjgv9SoBbKp",
  "key31": "45nAkg2h3kErwhUBvUCoSEggYTe3iEYNniyudAXcaLgLFS27Y8hSmiZQjjdwPHS6wuKd8oFkwkHK5Ce4a2Qtoxdj",
  "key32": "3ELigaazVbRQURCffTRqnVbC8Td9qZFyjBF8k5pqvuan5HPHFSiNRz8Mk2Cazi2CaDL6duFa1wGvRS6Hb3ax5KL3",
  "key33": "5MVuHPKPQz26kdjY9oCvYXFLTe6ufPzbjFMCry8KK49M5xGDUk7ZBWweJxNnPNQumfyTtsZukF7KwmSFASqSE9yD",
  "key34": "5ZNs35gSmM9w5f8FTTtdvGsjHV2pKgvRiLovWGyAXXYSvSUtYPhkbxdKz1mhEHYbAAH8t2L2k2k9Ux47zYxpmbB3",
  "key35": "5kQQax26nbdYWcTnauzMkkDQwdudRmfVA4pttu6Kw1xHYQr4H8hkyjRCJj5sJyMZv6jQpATV5MCfqG8dEu2WixjG",
  "key36": "x2cfj6a3FDoYGWi7mEbEJfrBBZbS2vzUw7gJR1kL1F4bVRAHe8GYQdsrKpcLd95vrqEWAo2k5CbDpckVfHDSUjh",
  "key37": "3STfqouF87pdiwX8LuVa3h8aqqaCj664EEKzaM2vWcdFgLy8Le1UEBiYyofvYMbRix64EpzohVoJN74eimjzSpsj",
  "key38": "3W423TBysYJdusJ6uKQq7WNzZaUt3kN2iBPMTyDW1Q8DzzhWmEhT5kULjkXWqFDavhFdw1dTmSYyHPt8tgipuC2K",
  "key39": "QGGYJhFLseNEpoWanRqn1KnBYVztG1Z3aCARzEYQK9Dmz5krgiyShtEdJsxAhHvVPhsxHa84PRKdvQqoky3vcmg",
  "key40": "aDqwHmSLr7aWu5KQdLswnr94xTmVqy7iHxNNnyf5G2yDgteR45an89qbGVBiagXd9vhBoSEj7eqwYFfZ4T1jkfJ",
  "key41": "3Z7e968w95cb9J1RiiVdCifGmQFu5NVawHCezTW7TxushnsrEbdqbgAY2FFfzKBodFKCou1Y5dqoP9bU53WjbPYd",
  "key42": "3BaUiWHhVxLqExkZArcpaDe4Xm6xcJdh8RBFFFkMniZwmY8cxPikysM1WrYiR8752nUbUwj1EBtrwg5ftaY7aMEv",
  "key43": "5dY1Tofoxt99x3WUQsF8fkHwQHXm111ydNxDd4srDVrAtFGzP8NXfgDz4um1hrHSztgF2rgDrJuXuY7exE37xnj6"
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
