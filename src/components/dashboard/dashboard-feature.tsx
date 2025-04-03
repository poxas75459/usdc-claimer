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
    "3NyEjg9b9FDHA39R7MafYcpeQbK6boSb2AGxgSJWuW3gMvcEsiWFykPnGG2ySb7sPaqBTY5BMujsQLCiyLvcka3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgqh8Ns7TrnVNqmYQpQSMccMWP9gePDLSHre5ZSeisdtnwtRmNrXYUQN3dh1oojoU79MxVYZaQCjYrsZSuxdUzv",
  "key1": "2kTrUYSZMv5Nabo9cVjkzXQmdx2WfAMtYu32cxvr2fQ5nANYouWwNV8WQYzVp8vHvHjN8mrWCyurEZ58iYixXchE",
  "key2": "2iC1RTWfAh23AugtNraAQ7Kdk1HiWrWMpW3DE51L73ptshTp9GTybSPMGkeNcC466R9ssnAbJZ3TZWezgzcrU91J",
  "key3": "51nCsER3MR3rHcWMsmnuGmwsTyCZpF75bARYaeMN62L6au7wynUBb9Xu5otaLJ7BHAojC8U8LEJC17JQGBrmf2wc",
  "key4": "3CCN9KtnnSCVR5V8HZDeMJnMmnuGy3muqRhPyAZ56yKMdqGyWi39EFiScRwiugFrUdkkPXctT4fKRBmyz43oyQ39",
  "key5": "tVucKKnPbJDsr7qLQ58w2agNGdGdFu5LtA3dkSqWZ66A6NkUgz3yVy8TLpNnKHQReht5ebthsBNkK1yn5z3ZGkk",
  "key6": "3TcCPpUUNkoT5R2zvNQnZ4orHorcXmioAJUFQQVigCrSF5RwFHugzeU9gU1WdKEHsyAUgVXHHSk6DRv4q99pdKAr",
  "key7": "3xJKxMMhkXr9sMVxjdhUfYBumyo98oRGJMAUX9yn1reRHe9kNndEuds24UbKqaUeqWeTNkZ5BuCgbFCzx12PzBSk",
  "key8": "5SdgcwvgtQF8hnTyAVtFAqrWTH6ih7Fio9GtQpd7s33Pjitpfn1yswsfQPi6pdVEMLbPW6jQPhqg3vvhMiirYASB",
  "key9": "3w9y28Hs8XAn9PGLz9QZCnjES1xeZU6FbejbUoR6QoJAsG2Z3zZehZRXevk6ouvboxLK8vLznEVLHusPEsmxkZoU",
  "key10": "2uGGnodE47GuAQ19zvPExNujhWLSafdNpoq5XYoqitpHSe1LsM6t3oWzUBmuNNpURtRVKkmBxroj4DhGsYqb6xNg",
  "key11": "3H6Vh9f2T45jGw4qLSSDrrAEmR7uVYvn9BQuXsaTWH9qnqwkQ8k6FS5rhV6aVNyTZSUPUNHhmkWj6WSnicthkk5q",
  "key12": "3e4YemYp1idouWUwCYTeTyKCcBsUgv1XLyB8hwF5YE4sDuhEtWnArGCZZ6RVv4pinZPDnpF2shBitDSEL7VYEzcN",
  "key13": "4iGPsF3BjgPtvXWHHnRJwVDRR4nKjLyLJvaFU9Fg4ynNkzEVEYrjTZFjsD5XAazZnGPPq41BdDSinqFY76XMvpiX",
  "key14": "4FV2jk7f1LXNL7iAbJ3UnbZiooxVAGN9j63PceKeLVtMoDmnJcogTsJUVxxmB5oo7JN9VAU6VzetcSefqKbjvX7U",
  "key15": "WsWD2nskhvFHwSmGS7su9vqLJ5nSNtm4R1yiDjdtCrWzuTwP8Jf4w8KYZGP51i1QwyQaujxS3eVfYnUMPLeGy7T",
  "key16": "hTwy7y6Dgr81BhNHdjSQ4cDmhJwMvpYWSwgXYfcKUf5hPd11m3zdkb5d22SrzLqPcNP2NkUBKVSquK6kpRbUoSW",
  "key17": "4wtshsvu9WUgRp4UM2F1voPFCrsvEthy1o9zSe77NR9dFdkFHSXkoU4Xir4JYjjj6tVNzHrWQkHkfw291fxh5zYW",
  "key18": "5bF5gq8RnbJi6qGXDau1dnx4xmbtKqcaKZhTPxjqW9NsPJtcev4bEw7AGBQtNusmwtzLRk9DjWgeSUVRQVXF767U",
  "key19": "2eZUZU6mKNWgoysM81HpEWTR8wTvYvqxqozpFg4Ja5En3XjYQthEnS2r9kVsoNH9KcfVB8AkzVqnB6RYE8XLbbCo",
  "key20": "5wJGQcwaxB8NbV7TrGcUQUYtMBA81DPe5WqXzyCUgmvqbTS8JWPHXLt3uu5Q4idoXukMpqqsVtDAa8By6bsXosmc",
  "key21": "23cAMLwdSUKcGd6V1M7Zc3b8DpGWuR1EeFShTArbZ3szcWKZfTyebg7CiBXVSeMoVMYMTWWZS4yviW1ccnAeVdUt",
  "key22": "5ZmgoS8fHw5KQsEikHhy7R2FKTYTokN9kY8uCTK5RBeupxznNnrRRE4TgfWcv55RC4miUqNBh441izcpwx8KUQ3L",
  "key23": "4FAqhUtrwJW8bHF7MGYTEYwxQDBsbGjnsMjKoZNCd1KzoFeZgkq2kkMpS3ZdNQvQDVfAhLE8XGiE7H7aX43e2or7",
  "key24": "8vhDin8thbsSCD4Ux37oDZSCHwsTvGDPeUf8js9FAuUL5GRufz1wgpf9w4GwfVnDPuHTE24HjUrBRPj4vYWP3HD",
  "key25": "gJQ5rNgz8huh7BbE4NhbDRZS7YYYyGarASgGUGFmreRgTWUxdPqGLizZjfWC32J1eMdbNJ59cFugTN6kYFyoqAb",
  "key26": "3h4nz4nueBraBuxoqnhBY1JyNovQyCX76KMKSjUSyuWZUstwn2Leyvuqqj8VcrGrekuQsYWRR2r1P32Q2hKWJGp9",
  "key27": "5vDhE1twbbkYtvT9LKwQgbpaDygX2dLnjnS5n9Dmt3ZjDjNTFpnHU3B9KwaCvCCeFouSG1FiSmxVy8M5bC3fdfXH",
  "key28": "2x1hheM5qJ4K8Kb4FGZEudcxds73RDqAfFEYEoRf9G4KyjSA6JNXB992i82YYKtTo5nfH8djAnYBJoFbZYb5zdqx",
  "key29": "2dyFzMfoGmATVAMuyuRRkFmcFxMytHiyDwSnWHaMK8rTqZtBUoHkY25jjfap432GVUKooeDeV16Wko7iGFnSfiVs",
  "key30": "4BvFZJpwk3iKkHGGLU2VLosSEWh29kAeN21jcZ4pNNtQxHQ2nxHBcVRCuTMXdjAqxGFuYFZ1yhyuLVYDSy6oRsdW",
  "key31": "kEiopwUwgZ687WYDGQ6YkG9fpaxXL9aEhZzvtUWP8yqviAvFxFJQcRa5KZ3trxRpKGTyEytAg6TtcQD4TUjdkba",
  "key32": "2PBdGrXphDK3eaSho1xMcZ3H4EhL31k72VPEabNrwrVKWKp8K7fWWBKVfwyQfsZiJQQ9AP44FFNidZuwk6X3jJoH",
  "key33": "35oWz6aqTmrMuyJsNt5BuWef4ACyGF9XTNqHQkB6ywwJEX9XfW7N56UbPcTLsspFXNLFt6h2UHvgUBGyDiC3GMnv",
  "key34": "4D6wqReTjRPBNoZJerbyJEdz8G3do4nfwYXshRbjdEJwprfJTn9yK5a8AGgzkubSdNb3a7bDjTh3w62RvfdaYmd4",
  "key35": "VM71WbWTknXXoGKQDPEh7z8XmLZ9jijo8AZSJeYpPaSL6pK8aDpp9i335qyMH4k1LUcfxPeJZFBXz5u6G1LSnNJ",
  "key36": "5FK8oBT8wbuqnYthWhLg9bve7Wy46nC854yeo7JLE98Har2osVDy5Gr7znxvdyR9nyebjHZyid7qq889SPJrUN4y",
  "key37": "3Q6nRsboR2Dx68bpHu7YJTwVLCSL32TSugvGpv1gx2t4SrabDHdfejT2cpWqFvSmQSZ3ATFqPnujm9LBYEgoaTti",
  "key38": "2gJnfvXXd6uKuxescAfzG9eAU6bxREsNWCEkShbAfr7tqE57iVgH98j36RJfYeHPhuFSq89v2DRZtZ9eM7cpBBbg",
  "key39": "SHtNaQJPfoLbTchjnBmGNa8nx9ULUv6Gsd2RwFTtztHkCnk49nLHgcm4Ef6gKmexhhkyjtdZsN7P99UiTiws9Mn",
  "key40": "5ktNFaqRMhweAhasvRu5LqxBqa2CQuhfKtshEYbUXPFR6eFQYDThKBtphtJHZqDzw8bwa9wDvdCAyfhGT8Ps1XJS",
  "key41": "5jpHV18gcB6JsH752LXA58veL8CSD58vKQ9bddYybLQN4t1gYdvGVJVj2c4SZgeSeqmGKqnCaX8Bdh7k1H7DCGMF"
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
