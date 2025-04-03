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
    "5wUbDpWTpsZbK21m3SbU3eWAHZ3TdF3oqkCXtH9LVdyhbr6ekJgEuA9ZwepjKGWszmJSQCS8DJrsU5Xz1xjjufEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QRMtHJLn7Fds5X1D37FS8jKRBcnXvMdAvc1vcinjAZ65QmpAQZ27W49PzXbK19fFWKfeo4wrW99GiXSaUmyWTss",
  "key1": "2y5bsha5EMs87yqraSTj6A1xguA4f8CdBMgZb2mkxBHQrS9wiwZkqiMQSNEbe5Zh6TKrNS9LuqmKPtkr16z4ac9S",
  "key2": "4NKYeHrK1quEjZ6mtpJL6um2ppzTJESSCGffrYu7z9waKs9n6H9wgFWKC1Lm3gQkXAU3YQCN9JDtHWkQ2maEJLzA",
  "key3": "5kFnifz5wZyGnmjSZLypeAFSDgdAW98mexhWHpv1ALh7vd5ND6TapTmzMXAugTZYHrZdCeqTBbYXZQiMbZLNbVZk",
  "key4": "31GTFpgdsHsqdwL4ipxksGhmZtdGbuvv52fkx3uM7QFiTjkMPRpkwXuvipgnnGpKMXWSxQNrSZAqPPh7VaDyv4ws",
  "key5": "4wkefEAbwdPkab3Mp4qRij2gPZ3NcGxrp2zpXqPDHZpYr1VemjGYnMUx6cVwaAuN1RfUKw6iVeNFdSKxtEaC2LEV",
  "key6": "3SbmGqnnAK3moTcbCZtiRBq7DEf7dpFmPzbtFTBWvwVQVbcLA18ViGCLoX9H16ij1FiJGdmaoB9dsvpe4SB5SZxW",
  "key7": "3yUcebi9MGBzJEEGSgmizFigAGTGWzP9u3ZcSX8E8sy2MBsc2Jc9xUmQtqGTQ4XVLDtkT1qVGLe3rAFtcqqfnNWE",
  "key8": "w2MB4JZFU6DC2h8E3FX6atiLVrv96UPDJSkPRLvV2xvQoENjiy23ecsXcDJHx9B89fkDJLNJFKxVy92kY18uE9j",
  "key9": "3JZsDfzrWwosy2FZkEDagQoyn1CQ1svbsU68Lzjd65NKKn3wVH4VTGGNdXxfe6JoyYhdqJY53kV8eVWWYAzK7B7P",
  "key10": "2Jwx7gie4xH9Ax9ZHzy3G8naPLjphNtZuP9W2X46rJ3qiDK7UVx6JcomGfyE77Gz5WyAgaC1fV9JEngou9NkV3WZ",
  "key11": "1HsFAYq55AWnWXY9GFqS7Sv2LWaofm5o2QCDNCkkobHwDAmcv9iZWt1sEMKDhwVg5Je2ZzN7u29p6ydAcPbibGn",
  "key12": "4FY9rt73qZXxYSBZ67Spd3GxWrmxSf1pFm2GTr6vXTQHwgCbqnYn5HCK8zcYN4J1PVtqojKkw96R1YbkJcYH2Kk2",
  "key13": "hm6ccremaWXcreTEAFiNx1Eird6WLvVByyh6jh81GkEqGF61LR7nvDh6x3GyUQbEdSBuSHWHuBLJEu2waHtkNxU",
  "key14": "5JXJhZAycbEK6qEgjD3YzdC1RZbLDQrNw2h7CngPuQ9bwcWEF9Awq1RaGi34mhfrngFbjzZbxinxCDckUC3NT4mi",
  "key15": "whepGnTtGbzQsfEHdDmoCEgaLhsjxoy8dY15oFcvNqZuBnS1ZtJLV7CKaTiW52ar1S34J51iCb8HdGdqC9QHT6c",
  "key16": "3nVHgvbvecbCKnheTQgcNFcQnXyAVcBg9EoHH1it9kWenbZ2efJ9pobUZoNwijqZm3QB99VaMXVrxEKn5f2y3H5D",
  "key17": "3yC1wp5AtxGt3aMaepiMpQTeKEwnnWaKwju2HXJAPQaDE3Kow72GRqyhh9AbsTPewqUb7k6Z6chrfaanNRGgAj8U",
  "key18": "58JhYeL4rP9eRdBBH1VKizJhx5kF1FvRXcy8Mh3CpLath98mT3Hi4wcA6ZHJZvtF1P8RjnBYd1KtZFnNthGZu7Cn",
  "key19": "3dmT6yNMPcYzKVpaNZokqhT5zxggdropwu7cXUyn88DniXvy1x5oH5xTNwZQE3YsCzqkm35t8gxkrduHUX7D8eMq",
  "key20": "3n98kZ28mqq77FHpJKsQ8BwqgniE9u8fzYXC4utk4TUySiPpNiW6zbAVMqscDwnREDae59ah8WazVstsJQcQuLeN",
  "key21": "4q5DnyaYPSqQ1oH2aypXck49TqMP9fJUUULeitJk4Dv22dr8PgBKcz1ZjgRnBAmmZZBYMFTDfFBvzZLnY29ttXFD",
  "key22": "3w21VLUivCkrsh4bWk8ASWN8KmAc5sBPmoto3Up7KixjyxRFDYPkSenybcAmepknpkkXLjTXxbZMrupEuxVcNQWN",
  "key23": "2bBD8YmjF3BZd25yuSvw2LMEsxtW5oWkFoEpTnpxiFQP77B8ER9qcJK71eqgba5wSNSxr7nJW7S1X6X51QaL1xCH",
  "key24": "4kdoE2Bc4BMKm4RXMe619CiQwcDRjHcTvMvg9QSaNX2hyAisw1kuN69WxGnUStRU9tshZX4vcxUarSvhNpgWWBcP",
  "key25": "28bPosbhhSUFAguPpb7iSbY6kAahioTrM9FHCYg72tVwiPTfS6CwercaMFYASqNPiirQwQP3fZTHgrFhjcz83znH",
  "key26": "4cfQRejY9vtkM64CDYoQb8CBnuVVYKCKKbq22kuAYJbc4UfCMdvQQMpg8TgHKN9KUa37hUo4Mvr5zdt6BMuJfmP1",
  "key27": "r2y3QpFS5CP21REXjTLNkTL1c35vVg27M34nG457b6hn8QBxFQ7Vxuz2vGS9E47SSCe5nC4uomQnzbjj2rTPzA8"
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
