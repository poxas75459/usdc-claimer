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
    "59eGgyrWYQJEXF7yqntnQ73fYwjXzgW7EWkELtrG2ZYVKzi1LtgzxCwku7tfGAtQEmwUqwJQhfxxjrx5MxuHTZQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GdoKyaTCUgfbGvEngPH8bhkWqzAztiGGXfspMRxi7t8HZWTXdjJcj2cTrGXusGFN9fRqcngrtqnVmxNas2P623N",
  "key1": "4AwqAFMqSvvpVT9iG3af26PVqks5e6dLCAjLAyxD5bXy5Kg4DDScJE3CYdb7eTKikvR5cAw3GKdoytNfS9NSsjuH",
  "key2": "4EkRhRrwaxxGv7qM14ViEeb1kPGWb9pyTyaVFmLbokDMpDWcrhxWimbada2p71sujZD1LfpDQ2Syy8h3FNEc7CQd",
  "key3": "EHsVrdJDCNKTGMPc6AQoGcc8guiDkWTStoQz4GUL3yKJuRfCK8S8jPMGDSYdpkwSzxWKXZdWamoNX8PaB6PjN9Z",
  "key4": "3Jb4aq7adCqXDNrGe1ZksKgqZjg5nAkcdYVSoDucGyNAhhujDSDh13VBb8XBwdS4kWh6D6DrnE6nKaCcZ2DUUqwU",
  "key5": "41Lj59mEnkPgCxzY5MpAsjDS7kqoFgBczdMqq14n5UYSs6wQdrcfZuH8oKEecGxAFw9Zt4rwbQxYwiSAfH9ngYss",
  "key6": "35tJ6DabjpDS92iprJZJERfbds9oCrKKFzq7kYZzTrmUzNW9yfxhiLFQ6b7M3MypQaLjtDATa7UPpiUzcmshFCKG",
  "key7": "2xAWfr2ft8Hus6zoaCUg3zmFW31qdQErqgrkaetmDpeUKwiQAmKoaTWcDdKUsMD1sWs85hjUvcieoToUT387MBkF",
  "key8": "5ZbdVA4TWJDD2ktTwrMz9B6J4tregRJtii8TeiPr4WzDpYWYfkC6icvGGnZy8BsJAquVQ5L9kpK7eA9maFUwS77d",
  "key9": "3H1nRBM3SSkoG4hqa2f9BsPPYTc4vdpE3LiukgGnLBX32Ceck6A6ANRrxjaH1ZvpKH6FnCKkbgH4uTwkdALHhGdZ",
  "key10": "3rtN6AqUJvDnPmeHXe1hPyezWqhxohtFuD2RXDQw6d1qdvDEYSChk6JyfEJ9d7naTeTwMCboH84uZUTaPzs4nS1J",
  "key11": "2LUME1PddkzDNhWAvzo2FbDFFF9PXxyzk1PnprKF5yaw6cBis3BxRY4mkSmh63agRw5751uHW66SfotreDnRcTKW",
  "key12": "527Ay2CDhUjcsKmGiouupfyK5sVzsCER5mX42Y15sVd9KqwSV1uDageFb4UXrso3Jjz3zvutnYu8hBSmNJvcJbCQ",
  "key13": "5i7m4wNnAsGoGWX8A84M6Nuc3xSDtFgXvFN65rXrEkSeMA9Fzku2afZJtEzSvkm17rY4KCTLDaQX9gBhohi9LNX5",
  "key14": "4XdPGYApfMLzReLs35mmhJL74wJSh36rHNaxuMU52Bn33CLybScMmvbfHFAPrpjsSYmbNDNyTdnfszq52ccHb2mX",
  "key15": "4PDeDRoCLdQjpw5ACKH1eNAzcE7fYfCythAkRfuH14HUV5w4M6iBRjNU71WiyLpigHS6ah6cRhLc38siPzgYJDTM",
  "key16": "okwSJA2APVmPmZ14J6PByZWDyNkpraup2tKoDnrhYA8tALvfpRBHshFm13Z6MdrnyMBTHXCGA93vJrXb8ry7PXy",
  "key17": "2RNXf97SrFfj4fdCJaNapXzjdCi5anpg98JE7R94oMWg4rDSuJVHk3uY78qsGNiZMyKySVcGeZ9fkmnJzx61D3AQ",
  "key18": "3tDHym7i3xsy65aUX6wpp2FnfF7cmoU2CMVGogoqPAntLu5bwanEj9UAwzRu8TN7TU5cSEUBrmnB5cSJ3TPTAE92",
  "key19": "4mAnQnoWyEd2W7HVjS2yLt1cAAGT6vxCJMKuY9sr1L2ZpRk9V4im443kiW89jczVQZm2YabpP1fquKcXuhc2Go9x",
  "key20": "4fzVrBnd3yz5pv3f6duRRV7AejehPTmjVaJ7e9s15ZLxvFcZX2GbauVmgXDXu53JyQx4hbRZDQu7HzWzB9yDsJRX",
  "key21": "5nm5Wx74Uthiu1ZEsokzeKn9SrKy7fyYbDBameuCLdwt97Vvt95QTf8fWaqusKuFnXZ8991oV3ieyHz8CwH5pbVN",
  "key22": "HAxaHPNEwS5ZJYLmfWubDc3LuszqLRCLTxZbBuGjhKt4Q67sxfbqySnacBMnCBwcKzn5AmaK3xigJDTHPkbhnJN",
  "key23": "2aAmAGTNakjYWy5MG8R3RDji4N6XnHw1jaGdmTMLSqG3PTsQwhdqQMqGjGrx6gke3DmQqGdsRiqYpqkQvdDgbFfJ",
  "key24": "3SCNo2WV9yB12uteU3qzdboLcVUoaxHUTcMSkVb6d8cvs15Szh7LBqNsdxf92ktuB5rrNsBUtdQcADv4uMyeHM57",
  "key25": "5wGJ3WdnXe6Y425GmK1FRU97nsn6fkr6vAbznfAF7S4dD4qGVbQrp94mTTewgH1kTXT5DsgtT8wq5GAGUHtfNEqS",
  "key26": "5RwWfH4qostVcuWryg4kfzNyLtfrPuQwNg3iujph5Mo61TZkJt96tM12Bpw53ys6zEK98Ysuh86hpv6DYmm3eYxo",
  "key27": "m34J52wudNFxeEycX3xhhZth9srnupAbf3mMCJX1Fvhr1nGkvsN4sfP9YsiKLQKmtGp8fs1dvsgpY7fixZYSwKk",
  "key28": "666w7iDu3NeW8ucuA3tJoyzbQLKtyE4y2Xve6dHxRBSV5w9DLXwMcPHVVvXxvN8WG1UuAbAmoEcFCj7CQBwgo4B4",
  "key29": "5WnvzCntKep5yz4sWYyXnbEcEWdWFKYAZjp6z2irLA9gNec66MBvYH39zJsDp6xfn1MtAV9rdv1vFiWcnS8i6JQb",
  "key30": "313xGNb8fd5iAAEWrDuHqoCJ7Y3rYQrpbQmeMimcBQS1qtiBFdvU5ku2jcc4coLKq4tbUp5N7pXPkXGhKAhoC523",
  "key31": "k5pBBSZMW9Dtpnp6e9ZZAz9BB74YABR6KcNKSq5JwXY1s7wsWRf22N8fAJDM63tmwYp9gGLPNoApvWp4QucwEse",
  "key32": "48p8r2U6zqu3bvcGyJsHCF5yYp5J9rwNxWQhvpQp3TnxRvRy9FbXHdEXWcWt6rrPvCRHhTCbAWh6PJ2Zaf69W9JH",
  "key33": "c7scT1bfEGKiJ9BC3hNRH1U6SpY3eYEn5qdPYTy86bGxPUfQDbjCuUdwWa4Zhsuth7deysCEEAWRiMpj2ZgiWDR",
  "key34": "4biBqMC9oFNMTsSUiXahSqDaNENA4AKZEfMXzhmGSo9NcgvqfUurT5yxVAGuZvSgdGSfsPuTTZ3MmCtjL8DvhYqw",
  "key35": "3oZVnvKewuEFgwdLdC6YgebuD99uUCR1yQ5uBJmFynJoYceUD1SgSHAsmdve7C8WCthZRdV8JGLt3ZpEBMec6exs",
  "key36": "KCEssuGpCjdS86s9kom6qVCm5AKhtCTsnt2EMhSufw2Fxy5winTXwPtKnT1eKpmR2KLadoNPJVaLwNnaL1K7nk1"
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
