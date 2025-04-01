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
    "2uZZeraimEz36sv3qs9hsCxVuqsHcuV2bgGVvSEDK9JQDnhBJqkqtfVxSb9Uycaa6KchbscWqECa2c3odVDHSfLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjmeKNpmYrnZiAS7UTgJkZiRkm1k7vSn9QgMCP6bT2RrWfcUq4xK6eiXbSRJ52xPUZVjY7FCjimFsWm2JezP5hr",
  "key1": "3VyUj3yv6bVnCeozsgGNn7WCNVHYHSFpxcTXRfuzgrnPoi6vzJAvA7Xa96ThDT8JAmavWUbhbpq5V1souD4QqD3d",
  "key2": "3MTRNsFj3ejN64hUwxDp8wZSFK2Q7UmDEKyirYmkVTwswRDfoBp9AVevYRwamtC9hVQwbmCCmjLzscTk5fx3bfYn",
  "key3": "3WCqA6Djffw8jKAdL4g1Ex8MwCAMndjKrQDdzRfkLrvPqBGKXmAKZfeuqwMj5r4Eg6iTccMzGJao9Y1juGEybeM1",
  "key4": "5snhA9bjkjroG1yPawbdSLwrWMSvWSzYjqT3NA56FhVzDeUXsYQHq55fxg7TWvanWEptHBctkPzdvBqyFUnF4EaB",
  "key5": "kUxv6uax5siEtnvVb4hBZgJH6KNdyMeqbQSu6i4tDKWarhvjcNred6acUVAuKTMaRjRQKRzJ4ZEGTFNdKERKdn1",
  "key6": "5rgfXeuyGtuADBCPQp7uGSgaZLnSpkqdR9R6q49ZQTHJqi95cDbfvgcCdFUcNzchMKfmGVTSLd1ne5PtrwGqQL1G",
  "key7": "BT3KjCuiouraVbCUrxaNxAVw5v5AodhALNPvXjybrNQyz8hzN9wxeQoCApD6JUhZTuAcVbnkNZpDeY3azre7uXA",
  "key8": "LzSBTcc1f1Sv9MYzMEYKgbqyWdk2GtdR3b6tS3eYeD5bNec2sBLpSFJvWDWKcF8bpVqp7HiYsfzT3vkknDnVvio",
  "key9": "3Yjn2ibE2Yju9bJbYsG1dz6XcYMDqKLeX7NGRSC1Xnn7tWVVbbF1o9RnzZa5c2vdWJ9JsPUGL45xdb6zWMpogYAM",
  "key10": "G2qZAiR6iMS2865DgktGBjBVBochi9aAagFhHtrBTDeZFvKj2eswZ9NNhS1TH552pK6q2KqVpWm81TP9aC2Avig",
  "key11": "55nt5kkWwbJAGY9GAAPrBDYeJNTeuH1tjJ9zbBSrDno9qfPs8m3npicuiFvYXC8BYHjXxkWQDcV6r4S8uUfabfKP",
  "key12": "31pwN5vZRw2UritQ2R5xX1GtmfN11vFg4TMMohVcxfSv3rWRv3YMEW369RATL9uwjKXLg2ipBh6j7hX1Rj3qHUWA",
  "key13": "3KQWLhBXLnXe5bPSLVtAVyRL3oamzjgjUJuBVHNcVwb3UswV7t3n8fot7iPt9HefU5oShHBEctzb8v3Jv8LUhfMA",
  "key14": "3CuFsBAA78gKnv5Fbwcd7dH83f5WFsL9CMYNwM27VdYwawdaFmQ6BLVF3rCRb7mqHKJmDiTGs8YARJejZS2hSBWh",
  "key15": "32HdHztz9fdS64q2tBRTByXZUHd3rSEWTseH6nxP9vP7Fs1K7AZXczRRS8JzLVhKVYiqt4Ligc3FLgsjypAfQfki",
  "key16": "bD6dRnAk2EjQwgM2UWhcGUDGx4b3wc88DsvnNzzUVjrt1Srm6X6MGQ6gh6jdDMjWvzdkMrzH4Yaxa3jgEvFK88T",
  "key17": "4aTFV2bjNNNM31YVCZKcbCBRafx27jkSGqfsfujXYhYTNy86urNZ5tMSeadJhaTXc524NVbUt1QufFJbJWSNNVvT",
  "key18": "4w23LtPGGQXZPzzAbvPDGRfpztNUWN6dTujNS7c2ypsnv4a8Vqnc6GT7SpemV8mVDbejW5yeLB1kE2sQSrNKe6ge",
  "key19": "21YVsuLKbBWiV7nFTuGjuhWGiy2ohQcKVanRxiatBdKLPf7N2PMxwwY6DUg5nPonDPu8CwXEM6v9a2hR11HCwCxS",
  "key20": "67eDuw683krihgjNpW1zhih3apq15AJj2SG81eGUs7XnBvzGbHeacBFFLzHzfBKKNXzsCGA7ck4WpX6DRtw7mZ9C",
  "key21": "2VzCQFo2JNoV4UocKu5jwNSE19eEE6Q8iccdDNPanhAv3DcS8TK1qZV5N92LU2jus9JXWqmhHQyHXV4HU8yZfoYm",
  "key22": "4kumM1YEpCc74F2ragLxdg9TLV9FU18H6bSn4YhUocYCKhkPeuXFmWQFWWsFEJRz5dGfFq9unUxdrEassoqwCzXP",
  "key23": "3aARfKQDXnBRsujeREzG1bAoFXQSokw3qvfBJEmzukZhJdrMpXsxzwgnLUt9jLeryABer8c51w3r57ZXJHQBJKVN",
  "key24": "3e9EQAoPX2EK9CbXBfxcvp4YECvrYR3Fp6xWDWqzeHZ4jd2SrPDmSN65JHsX1cgkVcnMrX8yNt8bXGa68TXMQteb",
  "key25": "5QHJ5DEJfUtbLYT2rgHixNSHZeUm7HWZEnjpWeZdLs7zLRbNMExC3NQAwbSFJMQi8awqoPwNMU5S6LasRdhBCnF1",
  "key26": "4Fqywpu356qmak4GAkfD4e2khSbeHSWnWBJKLvNm9VBtBJnQAEkVkFAgEwa3YqEYcZtXTuj2oKhochWFPNUSqFFa",
  "key27": "bV8gH5TZsMvLqLMPhkm9PRrfnyYXzKjderpJsmqq2PZjYowH9Ly1ZCQRRBENqeNA7y6fQkeiymFj1RwWBicZhkD",
  "key28": "2AdaiqEyQi58n4QKaog9B5Uw7L3Ao8wZ5gofh1J8oFwQC7f4pK7THLCFAjP3jNSNmnjjM2jWbriE8a4UnZKCcypz",
  "key29": "CVydwgEmcPiaGr4AKTWmNE3PtHSiPeZcJEbVV6WhM3QjpvSc1vT4W1CqfLaQJqBLt8QLjH7uWYDbZV9nN3BKcC1",
  "key30": "36oVudRBfGoHKRyGExM1eU63J3swbdyURE692g2te4w7MgiA6KjNmWKWiWmmjWvwegYHMV4ahx68y6fXVeLhtCic",
  "key31": "38RZKBaAZ8XV5mpe5G9mJa73CHSmk6gq5gFArCqyAQBX8mt4Br2qeALuyqYQdpyufkSz5sBnChY1LxtZQ481Q4n",
  "key32": "KdUcmEQ3BE4KRqesAzvkbaryjHb9BPevQdUBFVCCRUtyAugxM9oqP1kt1TbFGDSZqv4GYyG7TXeNmvJR8E8MqP9",
  "key33": "5fv6LKpR3dPBDstMBaDsFzhzoaS3LEHSVnWfLbz9VWQZVg8wfWdvegpLQ1or9epZwoxLxnAKas6c1izxcqeP5EHc",
  "key34": "2k11C12eUF1easZP5zFGx3igDpq9jvtprtwm1UEbvTHMixyv3Brc7GWRTM8VQaJkGBt1xeLieZkGSDq7wtd7Z6TG"
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
