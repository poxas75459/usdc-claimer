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
    "4uE1EXYiSHDoYnvwY4F5T4zqZzXEgYaqDA9hUVYqD4muJDJY7reLiLmhaDfNQvnZGiTV62VDfrv7e3sbiqio1NFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2HtsZVpCxbM5TbjUG5XXY9sjQ2TG6ki6Cq5kMYJsN5cvGL2QT9HNo1Gs9TrhEqUBVwduZ1gcjfTHCKas47HfFx",
  "key1": "2ewrXm3GtWVCRRCVHaasjX614ftWGwFvohit7w3tMKS5n36CDXU61RHHFhtz12i2DKDg5hA6WVNmXmzp5CF9NdLq",
  "key2": "4zMkNf6ttGzkxi1X5yeKGHc324YdHsFzMKPm943D4aw9NTPzkGQBKBksYwAFjQE8wzZMh8BA6zTc2uyq6NhD5N87",
  "key3": "4KvbT7yRjRLspdDEQcCQnd1Ef9yidJR7BYkoZ6rNKSRf2xzyhy96zVMB2HkVXbSFRwiX2s3VGaPwmHyEUU2nddne",
  "key4": "2kf6Rk6QtyHyNsAhuvciTHh5XwzYw2HGFLYSPXsk3tkxUmATU3QM6qRKQvQDuew2axz6ePQpvj42fJYs98vKS2tA",
  "key5": "fvs7FfX1bcMq8kgnha2jwprrHhUtsudqrj4abgGVSGnwUkMr6f6pZGmPP9nhqbK883WyCfJeYACaDB8RgrmxHw5",
  "key6": "5NBbECn6H8xo2CyaGprHUdJaHK4j3TNtYv6mfgWqCbtJ8JsvRwyxqRLFxhrFBFbvfXrqFR4AYsXztr9wVJExDDuG",
  "key7": "2MijJDQUrniv9kghM5YqN1SsyeH8sLPGjTk4ztcvchoASeBGzPiKJWi5UX3awV47Gm7ejDCc76VRsZpVLJiPyWAF",
  "key8": "49Ump8g6932Kc5gRkuD3YTFht6kNnENv7zUivE7MWTPEmasDeZBCarZjjknHX3U1zHsGa6n5tJ24TD7ZNsddZqMk",
  "key9": "5jVNaEok7pN3x7GhDayvP3Qbiu2njcNcDyJMDdECoUTsJeRfHDAWMNrNRquDFRYviwjCcSGmou9Cjo2v2qwMT1ir",
  "key10": "kvrHmZ4i2Y3rAzHoKWKmvmTbrb4vE6WjGh9s9RAP2oXruWsW8eovknBJ52CiBeDLeTwN9BPH7aLKJuhwkPr7717",
  "key11": "3XA6XLii4X8g3DAh926XMuUMcpAgt6FK3S677vmYeEUXUN9U4VULHKz7qXhX53cwgRGW3sywwK9GwfGnxdTwdrss",
  "key12": "3BuefhAstAD66Ldoq6EKwKZ78zPaoK1ycJWSxyqxcqjdJ2UAKifkfuvBynYHQjguhwmdyN8ukS2gTgBbD6Ed9AXi",
  "key13": "M2YFjGbkPxHbXtt6rWFtykQ2o8TVXBxgy367YoPLAH3ZzKmXuGrn3gXJPniFCRXLxVi27d3qRiFj52Kqc9jCaYn",
  "key14": "29Tr7rh1rFF3XYWgXL5kG984hNNMCcLTWsdJAUbYDfCQQbwvizcgr5VGsgfveXVxLmHZSSDuufxzfzFV6CZdSNQc",
  "key15": "2J1qLgAYVscaM8fBSXDubxhmPPZ4g6LnaVB3Uyuvp9oNuTqDeEJWaQwiVAgw4iZYMDVT5HsnkjtjYTAWzzrdLTW",
  "key16": "5JfYEoVt5ykZWyZvh8W3rCRDX9w76MoGE2K2EsmiGtXJiyyvtaFxcEPATz2UdB58sxxjEv24YX662GYawsYahqMA",
  "key17": "5TtPuPpLGo33hztozsC3TdXbgXALoTnsJ89jAzgtNGPrwDq9Roqktmhj2684pH8NyHsYFTMtRoXvKzo6uiE5bsSq",
  "key18": "2C6Nog5bYdMULHkKBCYrZfPGGjAo1ERXmvx3DSDsYzqHe75cgKfwxPXiEKs5bL7Zuget7K6eU8nBjRo1vcVJUYbe",
  "key19": "4wxxEqp5wksyPgwks4E5hvvf5ueM17e64g4Ncnt4P2biFgy17SVpLJPC6MRzqonChj2VVo8qUwotzonGwhY6AfMw",
  "key20": "4pSnGJ6FefR17F2bX6jNmq6Hrpg9ASsanunA9k3PmkSMtCYToAKC5ErFyNW3G1j2gn7J4Je8Z1uhcoJViWyYicr6",
  "key21": "5TphXtk7y9GZeZ1f4hTHurBXRtGP9inYDzTxh7CAKEja7N7NJUruY4nafngHyP4MQ2xHsheg2MZGv1sVUJ18CRjJ",
  "key22": "4CtvtqYjNosmGonWZ5T1TgTPi8fBtupKa2TT43ScXepMh6mcfRsniviLAc4sQyRkX9CwR6tEFTmt3H5366kRMxxK",
  "key23": "3bizbXdnd1V1hVHLdxGaGMGrB6M4GQnf1sdaRwTK7iZvKi5vZs2nSRwPTcKkEmKFwcWP8D3gWHJes8znSR5eub6d",
  "key24": "3hHQM1tWDnzzw6wKNnNmzBF5FqDSXLSETZoZLiJVJpPzBV1RnAru1guDWadXoGarnvhYq6m5EuUTynfEMJKeaToi",
  "key25": "jmbXpeUSGghEjnjidzQtnXgutS5pAgMAZuhDM8HNU7KyFvRBdXHKfkXMdyTSZ2oKf9cWzzoqZb6Kr4FX16qt7Dz",
  "key26": "4oT3npxTRvUsawtQT7JaNr8JrofhydfQkeHQC6debisNHrHEZdZsPMWWUdvk3oVAKEScjBddx6TxAGK62H3dkutX",
  "key27": "3i1JWMsbzfQwCMbAs7tj8i289WKAY4TXpbbjgYJdr1kubGLMKXL3H6HHR5orheRzJfuudXdM4ExzWG6R2AUDmWh3",
  "key28": "35Xo28kupp2V3zqsxqNKh9oJENMg2ub9hEh1FB1SBExHU1KLTGLvRKhsW4r5RwJ67ZC8aX1p8cGFpWFY8TJ2tdhi",
  "key29": "VJ279As5qmkPzo9XZY6Xaz6Dki6kxofGdx9s1RhZqceSatJPiT8n9ToXaMxH7a1bghRnb8cRKkn1xZ9SMiSksVZ",
  "key30": "4kBnMAH8fGoNRR5hmiHf7bPjqNqg3tsFdF2dLNFoYoifohSmLKbityG5PPmxjr9zPHVhTtyJJxHn52DDwv2d4Lvu",
  "key31": "fpwRiQgG5AWUS5EiDzEGcDL5o2kj72Z7bgygnijpc2kPQV7Tc1y8sNWNV5tKQK4Aa4572BPRpaL2nzLKkXySXqD",
  "key32": "3rrFa1tviGHSwi9KSEn6CpUTeSfVzkuKZccMpzPT4JwHFSKTpj8oiTJ5krahVMTRfRjmpHreCmE38BmaMC2BuAPV",
  "key33": "4XQqUwzTRJrrRtMj9ftMNT5UDpTKNTSG8YyBu8crugkRUEuDBbctEwsjeA7nqV32HGwxgADzUHsLCV18y1u2pmmJ"
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
