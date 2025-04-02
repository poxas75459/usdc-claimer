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
    "4FMZ29w8xQjRagay6WBhyLvXRpAwzcZjjnc3TzxfumKJ7TwwsvAn36JEQRauGvCuShZ26WhdQAjuok1UVC54PNAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dosgSUZ4LKCdvD5PUu4YEVGvwdyFLWVkrYbvg32LKqUN8HrrwPzjjoqwQRJ8C3j9HehPC3mqQzEguLc8GwqC7ni",
  "key1": "2gDEcyJyA2ehh8ML6GpJqA23GovG5cq8LX2VtPkqPBpLRYUbVYif6XZx4mwDZZEuAp7grEvdfE8TzpcN7Nh8BT21",
  "key2": "5Ve4crtsSdY9aA473SAeuS8hzQpNakzrBdW6jCx2akzPwdGfUE1jibbtYFqDDtbjPTgJqKW7mNrfJXezvb67nWHD",
  "key3": "CConzpwUjYkCtSM8SQuqURZeCFTcnu1kpRgeFn6Q3buiaR8sGEBezAuqfhQwFEp1RDuCZVACrotgkqNkHzWM1Ye",
  "key4": "2d71B4wg4CpwrVwK5Nu6fyEW4L1sBcWoiPV3Qcpc5gsfi1oKdQiPfBvhWbXtxwUFh8GNbuu3TC2HxXF6nuRytbpu",
  "key5": "2Wy5UCnKhbbfE8fNdVgafBN8za4JYagwsaCz1NiaigynRxuWWfJYkDGwHGSfypyd7eEyUxC9qsMENctf1MMhE8wh",
  "key6": "2D6HcZKk547Kt3s3N9npkk7qUHE7N5BEzUSoJ1Ms4k6PezhFMuY9docbQU75Ps4nw7Ct8FWp5nyGAqNcj5XBddDf",
  "key7": "2oHtPVYw8qGVQmCEiZEtnYkSKfJ3ppBZ1pPHroJXwFe4fzPrrVwWrXJsmQRNvf1SkgLdv1gtWqFmfR5RsCyCoqtb",
  "key8": "3gH5PpPrbFmkDfTReo5GRAhuCsgMbN5LB8MQ9RGYfTCVp5donCvQneqTTsLjhMuz3ZLRQK8jbB86ULGTqaRdMWhj",
  "key9": "3YtfYXpVLWFEJzmJX3QER4uRRMZzbXcbYmBwb6QD8WTZqAjGMsRv3EqicintsN4So4BkQg93TaR4mDYB1gfF3s1c",
  "key10": "4F7nZGeph156okMq4QwzPaecYK2SqtM21GHRbF6y5RHzSTKEmzZFeQ8MhxFYWxNgszMNip7Jg8tNBex6eYitV6CM",
  "key11": "4orRSJ5qsFAd5WKUDqViMYLFQurSrKAKwW5ZMHTTVopGUN63TZRyseVTLCf8bRYvfYiectmZpj115HFGY2oGFtnk",
  "key12": "Ei5rKZWFxfR34UWHdcjAiUQiQ9pYrv7EmrAFXqjxm9DNXJuxbXWuUSZ2S4YFkXryFabmbdWkvpGetfk26NngSih",
  "key13": "2t6RoAuRS3Nd5uDAvxp6i1NbuLLyQkXngFC6HSGieFfWXewD3UMhhSvrE8iY3WL53YU8B74vLeRiLeEUNzvr9SnN",
  "key14": "2TGAngtaVpPcyhkTVJeG2yBh3BUW3J7o6bMWvzSAiuvZpGmoi4UGoAmnqsBYLU9zYRfN2uQ8df2ZzVyUJc6pPXZ6",
  "key15": "ZVGee7WKYjfd8r6AtSPbHxBXXCrQa1Jxz5LUtEY6x9z2fTr42NMG6vHtMNve4ghe7in4J8p3K3aCTgFWR56faAF",
  "key16": "ipBV8JCChs4aGCDsn31HGvmo3HchEW7DEMWsj3V9iFHypsoLRXNGgFvE4HhxDLy8a1nTSzvr8srHi2igWbRGwHi",
  "key17": "GKRRz173CjyQyGyZ6vLjzpnCP4ce5mGtfXJ63QDCY8W7p2fBJD1xtq9UeG3j9nn5KZwiT7XCKPgFdr1opJ96qZ3",
  "key18": "39X25YAEc7iCWP8yjmWFzDNeg18eXpcBFRk2ZmPqDisPVxTFGJWQHoGLpnxMU6WxTotQNq89PA5Nn77LLTN1diA6",
  "key19": "52DsYXWVjrmU1bfhddKQwmJtPjjAn7t2Sacvmm3VwaeWFZGGSmAd341FEmKii9r2BcyThoWo9UipggaFTX3trydT",
  "key20": "4QnqJM4NhVu5bU34vKEA89dGHrmD94Thn85w5ZvbBMqpSFbzQm59byRnCuhkUwuafwDoWwXBZ78xeceGasE3baJB",
  "key21": "2cWXcBmL9LDTuSdBH4aFQdscQcbFDuqqafUrCBGsVSohQ5RbMEMjmyCjC62VyNJwjbGpV7Nzierp41MN93tbwtkY",
  "key22": "4cQmRV4F7oh1T37n67iTN1AFpikBVSazv6AtwQ6kA3eVu5y2tew5wnG634PgstDGFbsHTzeSGZhUcvAPMgo7inDj",
  "key23": "2HUAEwzDaH4xE9dhZxk6pMUsfBy7tHKVmBzTuX5TCFL7WSTvQftPZT2DTrqgNh62WeAJ1No8xVab5aqt5NfzQcqy",
  "key24": "5ZAYDYMLBUxHi9uVjqWwY9gX1xToqsd8NejWNB7T4TJdpPKimQoJyhmN6c1UDC5YeMEM9nDiBGetaYA2hBnthcpD",
  "key25": "2V7ffhnbCZek1v4v5hxDZ9swRjkW6e46P5x3Vrc5MCo3f2FQe6fi1ixZNevmDQfiLe6x1exShKdL1ZX72RFYAbQU",
  "key26": "2gx3ZfYqXxzgXeCPZuQnKv3gHgipTThoSrkgPZHRMGL8fBh6vS7Xfm9bhS4RAXVfbEtKiPeCembCBKqtUMFG9ohm",
  "key27": "4CwCevnW52BSdK6L6Du3MGbNuPDysCNksk87HTfVMGLnobYECY91bViBob5kvwsMnJyD8Bk1syC47t2xAo5v2pWx",
  "key28": "4iLbAkTxCQWnkdNZ5CWZtCS3gAAZHLcuRkjNc6cdtUosJSi35cLrHQkzY2Eo7hehPp7sZuPQR6fsU7Vhakya7PFj",
  "key29": "25rBjWytYWPbng5h6ku6REdMjisEoESC79qE38uoniCGAg1b2fMJ2peG1tzcKn4NdQSGaHXc5g34yXLtBAcRos6m"
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
