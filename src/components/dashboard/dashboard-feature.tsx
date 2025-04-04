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
    "5B6YDFmNWY2xp5Du8ZyvF4VEvPaVksyPsu4YbXWkFvvdAstp8ok4LVvjfLCZD2aLZFqBoDpsWpeP2LaKjhpFiJ1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aggbZ9fNhyguJnirNS6eoDbGGdhm75x1g1j4NpJ2XyyB6brRp6qn7hhHAsz1KU9dzHq7TZa6jZXdJVxo2wCf5Xm",
  "key1": "3fkDnAzuTnTuujwMcKSXZ7mwMMry7EV5vkF8kLmX9NWJEkSebG317YtnbxT9evbUx98P3BraTNTLjvgVkzu2RAzM",
  "key2": "4xYQgpa4hKuMBiNoLDExmV9DPirqKFrD1mWS4iXhdpV74pH92ZJd6j4Ru6AZ7erNVeRw22Pe2Y2pR4RQBkAeu8pw",
  "key3": "4Qkt5cRs2drgWD5X3EvPz7ghfWYyjbKpNjaaCLAnkFgMmcSrU5v5GDi5zSGnvp44qhYoCo1jeqJK4BdDCf2FvcPh",
  "key4": "2uRTPvY1cUMfXMEYXGtse1xuxiZG6HYJDwk9aX3FxsqjyMn3snVFQkdhRs33Es2LPDnEm3sx1CNhpCLnAsYMe2iA",
  "key5": "5DEjEznKRWLAksW79WH71R7qiE4hsP7qfBNgjsXKmWvBa5i5iYjRWcD1pVy7bNqUnZ4fUdkTUQG5yZexodLeUq5D",
  "key6": "5Abbq3fMPMLsC15EebtLFaRuWR3woqGwTBhE5sWvskPU6NfKCPanV2bzqZ88jF2knrnbwSCuywX2ujosxGvM1GHK",
  "key7": "595rZmW3oM8ACvrVTXWLxUzy2skyf2Wu525gFHM1TghJdmykNAF8QSNWB4vY8ktm5BXnbMpt8N4xxY6CY1SapSBx",
  "key8": "5kXoSY7PJTGwbhyhmdM8bPU2eoTPPcvTXkRZbG26PMxT4yr1mjgXkiJyr595mEK1Nbtt8f9SVLC67cg6hssnAGhU",
  "key9": "mF4ix1Jz3uxxPAousA3tFeHwjEBD8ax5es7CgS2mZEPwgsXTzLevpoKebNX4xC7K3ZdC3uL5kmLNyLxV68R1Jq4",
  "key10": "5XJMBqQaEFMzLZUu1UuDuRFMF4Qzkq3hfjkHRANPufWQ4eSsxL9kou6eYDfZ5arjBXhkhiVPaqTdENJ1mW6cubYo",
  "key11": "44aeDFT6iM3WhwmuqS5d1RNKWjzMip9Dzia3hx4U9fT1EArN7e5FyNT5Qiw3RcVJ8nTea1jTpyejwy27YAtktruz",
  "key12": "3tTQDLoi5H9Cv8BUqev3otdxegQrW5Qdzfk4Gs8zZXPXrKAfCqvnBR1T3FKmAkTC1gmqWKEXRwtzZyzEF7GaAw2V",
  "key13": "54Lf4qX6mgFCS7naQ5B3Ac7Kkd6WGqGQjfAc79FxM4TZmNf38TMNz5VvzEzigm9yarsVZq9T2pbsPDw8THkvSeqE",
  "key14": "5LT1y9rU6FDwYsJDJQyWmWLfoRrmiDSm2vYsSatg67dAGsysh2ePehJSYGkh3uuVMWGJqxqPeaM4hZyQg8k8iuf9",
  "key15": "4vunXjuF2AY18BTWtTkNYey9u96cf9p17y2YxLTbXrX2bgCVVpY6p53SJDiRhhPFKSMELm6EpegyJof88kSQpAiG",
  "key16": "KAkKf2aFPPFakZrYaCZBeciyGqxkxpzgNKgvKjh4Hw4AR2qg8ZExFg3HpWnGWcZ2tqdaDfSWBfGqk1vafBih9kn",
  "key17": "3ejpqhFWPDWkheLDGbCB6x631adB8k1DNqTa4d2cHpVdwJt4hsMKj6XuMEwessRuzSirSvc4WxuWsomLvxeQdtDy",
  "key18": "5xNvrLu7UnmziFWtDANQvW7wsdzZZZat4E1dxSQrWfGeNfLLo1aodbTjU8SqSD4EFETqjeem7Uie8DhCXdCih1Q3",
  "key19": "5StLFBpoETgxpq5VS6sampuskrDsMv3zC8U5M4MKsxo1EP6jVoJ9nZzmqxKWEBVuheHwQKnVoVQaQzDLdVgr3bSh",
  "key20": "iRSHDWttJu9MnbR1p8ycc39Um7ikSxYjUkxALdjeSvPWo2A28VWyTaXa68cZLPUVzdwLJozXLtfc36fhdF2yNEK",
  "key21": "4nBWCTVTB4MpNdq34m6RFjUrAWmySGPwNVV3U9E1afgTuBngdo3gRVut5EYgTYDzb927tpoUGDHv86DMvfDZ5zhB",
  "key22": "4zrCXCJowpJMBkKTKS832RFnZSZZPaUREMC4gRvHcHtE3QnN9SJRWQeNKQuLLhheP4zVDbaQq5LDb67LvmNDbXog",
  "key23": "2XHouf2aPvPeFEoyiuftPQfN3GKgd3kyGsooW4qpc9wNnRtPwwyEKvrH6Zoj6J4W8qoAr4RrLvHJmpDfUFZ2DtSy",
  "key24": "4ckvKhdWZAyRnWkWRd5uxPwuHiS2oVP5E54uFHYuJsBVr7iAAU6hFgKPoRiePYgEE1hHG9dm6gBbvhBKxWZQ9yHa",
  "key25": "4KqcQVWseFNKqN6r2jk17AaEoDRH7pdDv5SMkERSKCFaHqxh4vgup92WH3ZhbfyohEZsNnTex7rF3ZmGaemvvHN",
  "key26": "55qipxg38meFUzXU5am2hiEQ84TGQ38reC6ZTDBr79aZggdczfwNfe5wiQET92v2LJcqimNwADzzbSQjo8RcKX1M",
  "key27": "5ZKBFFb51nwVxWiJzaimU6bPyoK1QyrTeM2LGXc6uY6MRtmgjYwT93xKp3jvc3BnuF15nLAe6H6ZpQkpdS6FLxVk",
  "key28": "2y5PHtwuhipmDdANWYPXGu9GeTpAMiC1dV1wMb2RKHG9Q4VKLTc1bXcosW43zfV9YBYxdFVX7cnmc1EwQHSgAzqs",
  "key29": "2dYomyJCmyE3sybBdQixMWnMxJ8xNP6RMU5eYmjcFA97JpSeRVRArDM6RPPvwVv4yuv695ZTok7FYMaYU1nBFgNE",
  "key30": "25b66NF2gdsGFapVN48VZGktVpMqZ2Rva6PnJvkJWLDaVVDduYzZmCqdjfGnzQDzd2GhiEN1pfKeppCumriEkKRV",
  "key31": "4R49RzzYwxfYepKas2JBhaBXjJ2MSDBAnEgEWD46jhGt1HDC32jA2CsTxkd2SccH9FHFdBB4z9E3Z4XrxjUQ7ciU",
  "key32": "5tRh7ZKv92gcodYqn1FtLdMFnMFbYiAiayTLtfY5j7TAmw3kjLN5x3An3iq98V3fncWwgo8C5hzoouCv5L3YmstU",
  "key33": "zPC7grPsgNRZwFJWNDy4N2F72omDtjgBXpgh7yChJkM2s8twGimDdDfAVaERngy6FboHxgtsky9YURgVg7xKdAq"
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
