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
    "5C6oQGWpZaWJnEnwuF3SXbzVudLrweQX3vFZYZ5Rxj9Fejfdtc29xihydz1UgzHVHrLKNayYFxhQR81ZM75GxUkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUcSNjMpzjG7LqF1JNWxjqgK33tnufTihS1QwC1n21p9ac6WeCpcC7McGP33XzWmgkvdonUiGfwpUrde9YY9paU",
  "key1": "2GsVjtDRu69nosoKV84uxPfJroEgJZakhA42HUxze3xAtg7g6Jj6QM5VtimsMR6dvyprSAviZJBWoG8FXbEHF2H7",
  "key2": "eBtZLf3pWLWnyvX6eosn4tphkpwLwmMLqpsVhBpUpgiZJWEsWDnq96nhnTPEGGxamhhapR3uYPw5GxWKFCESpB6",
  "key3": "52VMiRwiy8rt2bCdMxZdDBM9SC1qGapr5FLqkubAzTcVyvgfJ8o4H4aNicbcTz2MtmapjEx4VWyfkXaagNyr98SM",
  "key4": "5QJuKuCsVPfdEpkmFmySZDjvxC7uMvyuazkzZWXZUsy7TcvBgqKA8dqXoKPDjZ7udrfNWzwSzznLxcjun3oU5L2y",
  "key5": "3o6x1NeajaXPhZFAJLwXYi8QQWk7kC26FrfcoSPS8ToBzyY8aiKQiogXnxyZmSR4nzVryJfGZaadqozPgC2tkk49",
  "key6": "5VpvGhoAgPz8HdLpPzfdLX7TrDJyZtFViN4irbmR7QD3jwNEQEvXBQrCL2ZDgFh6Ncnss7L9E4n6RFtJtw23t2JR",
  "key7": "fj59WMFG85mStvJWDUyMFXx8YZ1gckdo4Qs6tKhEEYpeWSP6pmtSgPN7BTnEEpFM3BHCuDtmTof6R3fSEBb4WtW",
  "key8": "2B8gqMdcXkYVG5Ek65s3n7NAsqYpiLTUGEdgbC8sokJ5dwSjQzzGtiff3VE3YgPBe3CyLnc5XFQs1ZyNuscPgoEy",
  "key9": "66t31sxDebQirt43gYf3QjgX54jXebQoaDyW5ZZyAMfgP59zNK3RTNSjP5WWc5sxBEfiCbNEng3hQ51PoQE4y6z8",
  "key10": "4TjuTB2YyoJzJUbPRxsRBeADF4AeMUyxE9U1ZLXngdSP9GRUZk9pTstLkVGk3M6tc4vGoPg8bU15x7pWPqvDM1pZ",
  "key11": "5kWtpEg4RSuvRtuqGx1UMzi5odSHQ4CZhjmcSsBJp3usVDTuQYQaSXMPkEEQ2fPYeCmza4iskegpwswHSQ5xCsNL",
  "key12": "3SqcnFs9w8vt1LeGTvTVcwHr651aWJMmJHZsPxFyWxYbEgsrcyzrtBuvNWTn1qLXbfXrf3buUuVmByAkW3rEqhq",
  "key13": "KVqTGb8jqeEJqmsgppx3ZW6Qj8VzZQvQ4Tp6nXspWFMVZXs9QtB4mJRkHwAwtQzsPj1BZtTVWdyDtdgmmWpCBpU",
  "key14": "3KLcUSdTiGuyMb6DqAiGFGELprn45PuxdEE9Tw27rHKnpSF6fzi2oNPaTN2DThia3ba7sTJXvKtEHGD5hkb9kUJ2",
  "key15": "5wq31Yqt25u6pReShQ5KpWGd2j3Z9gkQXXLkQ27mBZ82Ew4ZgfPpePBioaZSFAnNuyvPmeTfB8N2t42SxNVDVZBE",
  "key16": "3321jSQhWj1KbuLf4CE9wiGjJqgGWVaSUY2AWr4WkLLjYDgS9YrYct4PBTuF4m5pBFWCo2PWCwtAUtjt5ibpEwGu",
  "key17": "9QqK2MqHKyHpNrEw34GanKe1zfjw5e7kQjbfctkYqf1LLxaY9xC7sgTzCh7SroZGBn1jKKxhWJ7anu1uvUWio1p",
  "key18": "29qisL9vqtCnksWDGC2tavbd7XZJ8RzaRbEkbiq4P64MVZWFRfDdYLAxAerXsD1kb7pKhSUjpQuVGdeHF2M69zXn",
  "key19": "eGWPLtaCfqcKcCemSh68ceozALQxXqAQapv58bafPdLhKqGRbiriWAqaZoLGvVCVsG5icxXPtNjy3GoQ83vAbqu",
  "key20": "5h1xSrjecVjLb7bRpJXxk6tn7L6QwtN98USghMZB4we7SUgLRPgHZwyrR78ACk5BfibueGHeJmiJA4sNyC3F9Dnc",
  "key21": "4qGE8cu5zTsRdCbpCGFDedKabdxsHspcpNK9xpGJCai2vQU8VN95Cyu4BEWui2W2QyZwYnKNQv37MMCdwaucp5rx",
  "key22": "21J6EnoXppH6irE2HZCa82sq6zw9QCmUevcxZwvPxWiUVJe2cfASGxc1FR6oBHStg9TUKHuPWQJHuwaVMPcCbkWE",
  "key23": "371o7bgRnyQA3epw44zcrJUBpUaBNDuRj7DXCmDdSZTxHtf5Q1L1shEdBQZT75R1Wan8oKHjA1BTip1zXa4WqSBU",
  "key24": "2dzwa4w4gNabtmGft6hZLCvpDAhDr8yTQCQrh8cLWX2uwSjmncEsQouXUzV1beCDDz6A2ghVyxhANRaXLzKYiFA9",
  "key25": "2PpgKCMkv3jDreFhXyVhp8wH59LS7zi5DYdxPSVk22Zto3jTmUU3HCUdLDrDa53jKSmz9bWocUkMWfapWXXhmzR8",
  "key26": "faCEhSYbXXXiTgGQWQhR21fQ5av4FKcXVyx3KE4kR9zL3meJx8NSHkatwyraQgz3ttZ6es7hhoJPhUeZNX1iApg",
  "key27": "YTKpTowMyq3HELSGY82pF7P662ZS79yJEC5BFBBkvQvmUajTw79Z4s641kbFFkfdCx39gJ8ke5eJUkNLgQ8EzQd",
  "key28": "TRdQ2c82tRav9QdU7cufsDHb8KSkSdPLp2P1CmVSAMFHy1b9j5rcLiTPC4dyKfXMTUqSbzHEvpSfUd5xfhQw65g",
  "key29": "34Cr6DGsC8BBAixJwanugxfGex8FfVVHoh7FRicUbbQuRXBAmzHChRPs7j3HLhscPW9wAxbcz3KQzUz9Ld8ZNRN9",
  "key30": "2sTDGtTDYWZuX9mvKiqwTLcaui1kwvQJJzzLtzrXejwveWUnrb67K2YizhLs3fuXs3DqnheTkjhhMfmFtRZ4A78k",
  "key31": "3sxCuYSC6Q5QzTP4fyXdcUT6ZhqN4bTgHPgeAzZ1ue3X6GwwrGJeDJqAJDVGjNQtVv23x2aeHGVySB9zgFSRngSZ",
  "key32": "3oZvfjGHq6cQwfitkMLj9d26ANmwyCRdPUXF2vYjTMVStmGPefSKgsFMLmtu4BTE389jR9UwKuZYGpFwjMQm83tR",
  "key33": "3CRNKujWKLjo1PevLEvB7X42yPJE47QcqvfH61sNSnHQP8bMRiEzLggQhC653CY6PJH1GHVZsUvWND2qcrbmExQ5",
  "key34": "3uK3Vv32UmSTGKCHNNoN9jo76BiqN7c7brCmmt744cKdxzk4j6Tegw92R2CDhPUMMSHsL23mZvE49fDgCuNwdoAT",
  "key35": "3kJhah3ohNLbLu8asP5Yr88UcxiaeQqE64esFPQ1LRsmMGDSp1qBFLqnLEFyxmjDNbc3EunpbX5dyEaNXnNmKGaz",
  "key36": "3uDUxDd6VXBtyLK7hN7waGYqadomdSf5AcFnHyoewKAUt4naZrG5ZcJZScbpEpGXF9tE9kfc3mJ5EDRabRDMBe7X",
  "key37": "8pi31FTbxRS5SEPNXiZL4E3A48gRDjHdQCQqT18UAVyxfoouic2px4xvVE5qtmNbwNFfQNm14WG7jibYgJpvHe4",
  "key38": "5wsw5vThN3mHXR9oB24FT6vR9aU9a7UpMDLQxHjCiVDGpq825xADFoRtdJGCGSTxFYvarWzyTkMVQJuB2CPE2bX5",
  "key39": "5ySUBXWM6NpMgbghDAsQAM3ozQ4xuy1asTLuDQ6gKbdwi2iguCCQd1ZJ72L6yiWN7YH6624NWVKrSUangTer7u5T"
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
