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
    "4r1ZE9tPTpfPN2kPCDieatozLfBFqZynd9UTurtfxQZb1gQXhMDSaoUntRU4UWJn2eraZnfopYLfsfuTSYJG3dkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9HQvKkaRLtbdo18k627ddwJWJdqXn5isWaoVkZjtikQ76WSbfmj9x4uydzAHHThst3xTpVpUCMjNpEuUqhZn51",
  "key1": "21hTQRUG7YxLsbGtmDW2YUkwzsE3uuHMYK2JHQH4qyY5WMgwgMb3FFSeFmCkrUgALKPhLeNe2sULRKuJ7Dn1mbgg",
  "key2": "2vBreUZmSohUFNqgrpiuWY3yib3cqpHrutqgFGDrBtVPYAiGUqCErnadURQgkPkueiQGnHQscvLZwUy6qJ5dahfQ",
  "key3": "2k5XScspxsuyWnhRC1ruax7JsQuefTnPS5rrcx8P9stFFe4fJGiiUr2i8ZD1qzUcFufCZF4tDFbo2e86ioTknbAA",
  "key4": "5m4465MPxJ3RkokQBFgCBv2UZ7MtjUJT16DKV96UE2wUuT72MMW9Ub7VhgkY1XAu5GNDX7WMdZrWVZmDoD5zwWR5",
  "key5": "3aTH5moWKHfvLjK3wNZaAjYv4LG4BAppYtrdK7xcS85ZrU5K7hTfuRyGNNsRvmBzMmvDxfmPtihtEdXC6CLYD8Dg",
  "key6": "3jFWxA26Lus8jqZzsNJwLDvDewTCFq4g34qsPZrPB77tY39UmufDxufLvGkMtorJYr8jTYHVPVqqUYSxE111rPZX",
  "key7": "5opvQAujqUBD4YsnHaNPhrBbCSt5r1q2dMcHVnuhDnESUUmcjayEsGcgnahmki5JnhVr2Eh6LF497fbYdJKVYMT5",
  "key8": "5gftPjFjgaAJHzPmL1dBkSt5hfjaFaXroPyxnLTKaEbYE9zf71ic1iHKfcHHF4LSV4c4dy7H7Wf5Qe34Mt6xf1SX",
  "key9": "BnUoMYkSJvhhtpnDuZGZmU38Da13eEECGVPpn3mws9SM2PCDoEUF9HDgQLpjrujbnZj19WpLRmWgPkNd94CQ25N",
  "key10": "1kPgDSSev9jwynin2kybYkPPMQpBE6twB82EKuendxasSK1XWQcfqrciiB1Rdq7VK7N4eNnbt1Go3KT2JzMoFYd",
  "key11": "5phFNRQfxNJ1rTpZvvVY5RkeGPH5VRaNcEZbwnrAVazHd1cCSzK3oCeCGuJsSBDhLcHgD8Emm9JdjZ8KrjFC65H3",
  "key12": "54upFKVnmNHQJncp6Z71VgxsTaDufgDGo5yvkCW2CQdemyKruCqjGRsyKu1qZiJhJMTGcuffD7dDMoMpZihC8H1w",
  "key13": "26f3xQzzmSQ7wg2WCvXskv7w4edNr3hRpyDcayrFVmvuwFABVjU8wF1XvWCj32Vohs9q2NdJ8pts7ecDPLZUVBTb",
  "key14": "5JDW81LT8UDsJEK7dA6tR3CUA789LjWnVjfaDPZM2GgQ21LcBUFB13rRebRHMyB6vPiqTkSkBTxQ9Sy2qS23ZQKW",
  "key15": "3m3TQf6NLNoEpXp5ksucehAAVY8RHeYFuvt33HpMKuwPcL6a3aJ6Fzf37dYpiR1BdpRhUBHVJP3Cgc28KSpCw4VH",
  "key16": "26YS4zPYfT46S2ZN49mbgNVhNcGTfNETUhNUhEyHm3MeNyfr4Tg1D4VSerwqyPVgpz7KRUX3uWDpu8BRUkebQxZ2",
  "key17": "47ihyjVp1VbitPcRmxRMqZKQV7DnsFqvbrfwP8mHfXSN3xHxPbwzZKzqbGu9K8PfkyutBnt6XHEyxNYsmKvvoMAk",
  "key18": "5QZRsbQdbLGtb5abZHgFMwk15sRYXLfq8CfRsPUJLBHPGT472AJPvTtgjr2tRkPEU5UE4wQjGqJY21QaH3JAa2XN",
  "key19": "6UwjM6ztokj4fQBjS45p1qwrpynvjXTysgQHr1bf689CaFuBy7isXnPNNVXCEuRKHH5RHNAouJpP7RUitjrMhoT",
  "key20": "5b4Za9eui9MyfptqD3G2vyu7EjaCyJvtNDshMZYZitsRUZu8RvX84cbXRsVXA9NH5QJ5BcepokD6TrzMxB5gwn2U",
  "key21": "5ihvqot7zWuhUMWLF9xJ2QZvje3nfLrP1z2SR9sMLcw1ApcJ8pe5kqzJmrkmHEoCag7kJTtrQf8TGYFqWMtKrvvV",
  "key22": "3tbHRRZh4y2RkseuCXeg88BK5bEqZ49zkmZR9Enrr5b9AN3EusfUok6EnHmb7G4gRPJrGNNYM5jK64JfvvAsuHZj",
  "key23": "qjBBsCNrGf77wE4wznTJVKbZ2oR5HTYa1DJzASscAVKAbsFNyN3mqPhprofdpJ8nFbUH6grzSV5VFzqY42ebDkm",
  "key24": "5RQbpgV7pKtKZ1zA3xir7p2Q5WaZ4pzT5M1yuh63ZaJaQMy7c5rUeKV7PSw1fUcsbc1b5krCvWrTEgE65uwDHL9b",
  "key25": "3abmnqRyfQnNRLe7UYLRCMtKnMyE9uFEso5WTM97RS1CPvMifigSCnDFuG1MrqmG3a1pTcmxrCpMC1m8xnZ3mNPD",
  "key26": "3dHo7jFMqo3bTppfqrWvRaVucWRt8gRdT6HfgcxdqJZRrDKoqbcLg1zN3KjtFMfSQxUirDMA6qvGruoTy59fRmNi",
  "key27": "27kfQ4x4tJx5tz2LKqw86jaWTWXziuRbJPoAt7htxPY1AEBifb7BxAbfSxPBG4kXfXyT5MJDPH7yt9p5eZXFVXPc",
  "key28": "5CL7NRtBXdtUjcHHsfn858Qgnsag4jwj8HZg5FbgfH4KVRR9WrARde55MBu8Do34VPhKaFPhSf32BP7x2NiNEonA",
  "key29": "2x4Fkti1cyt1gMyvDE7reTeuEfon22svGKtezh3aRYWjNqHMAWHpaEVu135HwVx6NZ9HvcUF3GmHexjWjsKynVNZ",
  "key30": "58bPfHGqqS9F9cT3bkbUETJQRHaqrCuAsQD8HyiSzzRgjxSi1eQBHLnqb1VJeBB4eZx42CTV5wRwYWsK2XnoREfo",
  "key31": "5ThAkoHMpe8GCzjZjVbPhqaV1k1MoNmjHkaaF2LwqQgUPLb5SUqLGrEiof2eMQ65pePKw9d94TfexAsizVqqtHj6",
  "key32": "2zMsb4e3MEsKHWN7T66oocf6ieFHNrSFC2CEBKHbYR8eLHAtk34VYWYLZQTFAqpgdDXcPQfTXhc28NuSt6mUsM6R",
  "key33": "4YzpmxXqHt8yU22nZ2RhtpLxrv3jXBAqfB9ah7wCZUorvHmeG3proLjw9kbWv1Vi5ZqMzonzmaW1aUhh4cCmiQBw",
  "key34": "5nRaF6nDtSk7Nm2Ri4X1uwpGezb4jiEJyv16hwroWFi5wrJaAgeic59YWAsB2x1wfFJwM9URTptLfAqB5qX7n5Nq",
  "key35": "5yaMMHj1oC3AYARB8usW2RuBguhq8fSkwiTMTw91obZ6Nyend1Ed5GxALdZ4R8zs9XAyLHjEsfGrPBHpAjp6nRDF"
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
