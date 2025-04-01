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
    "HVjqVkuEY2ZR3ScL4xTn11MPgSQruAb4hEsYrSqn2NQSDWBFZhVe8JTXge45oNzAXuUUmFVQgRNXXLsQu5GJwjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5qDnoArXJj7ajPrtiMKGuJHP83xDV8nMUizRGVNL4cd45r5DgPodYWGhEjXamQcti5sPVndHns7PGkTw61TNK3",
  "key1": "3WwxmJ1qtzMMiB8SDdXFWvykBriR4xzLjPtik6WXMchWVsH1JCJ4EHh2Y9TZFv7fa7cAhGSppR4UUqdyAESr61dP",
  "key2": "5DjXxYypUmfQwZUq6E8KoFddPidCmjrtFN8CH8PbfETiSdcTVFvGqELNhiDArKJ9o5qUb253sU5tNdoRkNiBpxXA",
  "key3": "4wyqeJTbSL3t12M1GGhcTqYWA1tnT6cK5Bn4dncDkRGYuYwzyBbKW1GvLXZEPSUc4EYB9NzHGcAP65XfwXykFtQG",
  "key4": "xGsbrU1Q5B1ER3YVtJh937TfNXTCXwWdosPUfaQS2gCooYwYypFtejAXd6QD5qAoGBAo7J9kgJ7vAAF9x5b5QJ6",
  "key5": "2pTfdDLxfJEra9UE3TyaYRKYVYK4TgezWijAXYJQZz9LdnfmD9JWhAv6azar2GrCzKKoyq7FF5dzBzEJrDuVootB",
  "key6": "5axjuaGSNkMGagfM7re2yGbHkhAxSCmMGtjU6YJSFzGLQjvXQPVRzXumbFcAKnMi3ex7k7fxYrVm2FZcXNKESryY",
  "key7": "3JPMJx32cintaHeWtMZ9EgC8Z3qFX61J2nP2NYjr8LQ2uD1iun8EFwKMoKqGnWmzMN1di4mLjQLC4oDJPXz8hiYh",
  "key8": "2jmXhMGpAxShBiXFcaeZwTnc1DAh3We4soMhDtneLoKmjbfEws9MtUPDXsJfsPDNZmhH5yGeMWfaJW99exmiKu75",
  "key9": "4bK5pVrhnGcRTZL9q9Q1u22Nq4v8g4sNuuq2b4zFdq6rZkvBtUQyBP8somLmdYtFPdtPtr2jf8m9QQHUo7qkQjEH",
  "key10": "5qtQDQ3QqmtHmRQQVmxpJLjmxFqcuAatKxS2r64Yxn19pvzhcChQ3438sEcmhV9TMQbWuXEtZmR1ttcVGUo5Q88X",
  "key11": "4VQxBRb6urvuhMEbFnf1VDphKwDe5RxdbX3gzdPVCS2o1sa1puRKUHEmUmpe99yiRrQnAGLP4WZ51ULmTJ4okS4z",
  "key12": "CRRZaLVNNpR7mnESE6KgLCtoU8VqRCGHqA3aVca4mRAME2aBueLuPPZG4YDXJCBHxHN8Uw4eoftg7G2R7hzGBdH",
  "key13": "3omDyNN6SvNjZfoU2g1xKbcc8HPXH2kq65YV2Rmq9a6XXQAccjggnFwu9rwGcec46eJH9nUp9J6vXzKYwNwMyYvd",
  "key14": "KCnLVxVFXbqz2FsAEXPd7U71M2g1WqHUMTFMdiRFfXnfDXCd7ajS3sSeJkWNu8N87gaVFLJnd5twP2hJHAhietD",
  "key15": "43i1QU5YAFsFT68MuD4fLi1mNmfQaTaSpZfTACm6zSzmJyyV4Dv2ZyRZaN5fgmv4hGmATMdapoG8tRME1TMnDoTh",
  "key16": "34GSgnbJQwLQGLbaunuA8Y3iYvmgJFKSqiNEzPAxcXCLHBxyiHsnjMaqzQuSdKi1dD5PNT5DMiFZGb5hWkkZcdNz",
  "key17": "39ujwKDcjY52D7tD4BdpKEhXQzmNoAocZeSuj28JcCFLZwTNHmLzyuhSWk6xjeaH4rA7XA6Qimk25iDZkRAGnG4Z",
  "key18": "3nGdgDKL6h5YhdRkKd4mrUEvNH98CeXeno99jT6twozG4m5LULgk7wrzRNhPAcdMX4tPGb7j6UbPcMCds7Se5euA",
  "key19": "2K5gZPeBrL1GsEhqt9LgAEZPUN6PgJyYLQeUJuiun3MNmvwhZW3pwCLCmpmbXuVNr5MLT9W5M6EtdFDhYoNmE33e",
  "key20": "4LMXa38MAyRHNhqcWqwR5Tym2dSVegWu6FxuDyg8vryc8Pm5ZyQnTT95mzYHFJ62g9QJREA2psBu9BekhyPZXojq",
  "key21": "26LhKBvNyuitEiLd9WtxcpPEx9tB4yCx7H71Vn1fmdqMhS9BFr2CAcEgk4gaoytpVpZ4V9DeUjxBCgZLMWJH99pP",
  "key22": "5r5fzLrNDWnJGf1j51osNqJ3LdMW97KrTN1AXFpbMBCgygN9986Y9bUtjsST87H5dhvP5vtJRBT6F889uV8GJNjM",
  "key23": "3dBg31omPrCx6n44fKPtEuCBwWnBiEuBR5anY1su1nc1LZcMQ41tUtyx3JpKfEG9zb7bNFiBngvLpH6zFXyVHmUq",
  "key24": "3JZD1aqoFp4MBCEeJ6Tq7kVDDPE4A2ku85TaBE4kroQK2c2kDFEoW2n5G5EewcgunnJvFjU98GYL8i4vn1tqtWX2",
  "key25": "61E2CWwWpCTK6ygiWeR1iP5HouNCMAq5YSpen9cMLDx4ubXq9xtWirHCxw1S4R5gceJo5q7GjUe9fdLPYzQghs6u",
  "key26": "3NyUeP7HLfDNmSKMc3ap1SsvCJNyf5VmjHnKH8LuFiF3GD8wbbzbnvvVAjqakhodUwfSUfB4zwaNrWZTTKsC3jrx",
  "key27": "4gxCPkeuFnYy3sptxTN1ZRqYdK9DX9P7LJQiQoJDURfjvEyH3nVKJNYfeaiZ5vmuvzgwLjafLpxpoqZohZsak2GD",
  "key28": "2zGCDmCnCT7fbmM5hRdYA5NFSpkKxeXATugKTNq5RnGPyFSLEdX2ERDSzMURtofgmfmti97efZjUNek9461w3v4M",
  "key29": "4dqHPN9hZWv4AyRfZvXjRb9ECQqRVzkm74myNkfBcSTGxW4yJyZkEHj1FQZEzQSC83USo2kLz8TkKGRtrkHjrbr6",
  "key30": "44LqLVkkwrBrH3A2Y15MEJqk9fbP84EbS3qTxMEWowgoL7bMsDURR7LkLDXGNvtDFYTzuiYCGjds95PSny1GSVdY",
  "key31": "2fzW5LqHDiJNFc8VWmZGZ1ZJmZgjKZG377fLxxBeHfDKqr3KacCeCJpMQQXPbmjXd1prJv62nj8yGobVgEmHHajt",
  "key32": "29QEELQPXC3zBh6cEw6mcfvBi1x5dHaZCVZa8vmQDPDZNwVZAdjHa1n51oE8GnQdLJo3BAMFQZSKA1tS1s9qi1bA",
  "key33": "SgdStvkHBFz8gqNNvbjQb3EZSfZv58neAd9kfowMS6b1nMF2E8f2NEj1T2geDUVKgAijLf3Jef9giZbHGRgXmsi",
  "key34": "VmbFTUQD4KChtko8KfHnJ2NjJAH2qeLRMFMC6PvJqtFvCdaB43zGPT2n3qF1FLRCQLRbVWe7JhKyphbJAw3ExC6",
  "key35": "47irNfvw7hB8ePyokTss7J1ooRU58BzuULdhEiEnC5oEGGUxAiLSXDczxWbXUcNaR17Gya4L1tZNqZqoas8tvZya"
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
