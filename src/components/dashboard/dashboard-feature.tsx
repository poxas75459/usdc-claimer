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
    "2rjndkYoonjUzw4GSK5CAMGsJaEhKjwqPaUSgtNb3YdgK3Zoga8GzaDA86wgFbiQ9RR478nF3DJvbyvMtueCqRsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gwSyKgphTsMLns7DLhvK34EMitmhr8iVt2Vyk2dxsREXkt3r92ZAVahq9s2izYKeGPSFt6nugVhnwGbQRMgj9v",
  "key1": "4xvoi2GP8ZRBwLtETQWAJ2nY1r5sR1TJwnSCkrwAtY8TYrjZmCKDGg4kXyqGZBUZY9TQmmjYA8ZbDFigEZ8jdJH4",
  "key2": "5zCktxnSHiv7Aq3Ai37sSJEZDjwR8xgHKb2KbkqBeL3RGCjuZ9YqjXkLTuJ7QKDYUm2XWEdwNbo8Z5RmMRZoQ8cF",
  "key3": "2eKBiR1XiQHBybL4Jr6hwPVVnhxeJo6qKbB8qmZCL29EzpTTLAPNhZRKysdmZsaNvPnKeQ9Qz9dVpaL9Y7KDogVb",
  "key4": "2PnFwKR67ogoWzuk3C7obJr4KYqLivVbsVmAZxbvy21y4cRvTeAMmWKotnWttGdGNpbwrh6Pn6FNVS4ywayr8F1Y",
  "key5": "261TpFGMGRMJUXvvRN6ta7Mc4rYF6jDsUKWr4PdGKMHLnJvDi3Xi4jvooW5dfA6MHMNiSMQL48FU68YSX6zcVk6V",
  "key6": "5UEH4EpVULPe4H4DDJiSXiqRKymADema6VYPdNyTAngFmrT2BLyg5fy2fbSM6MvreQQ8Gt2VQ6qRNMG19gi6iDeP",
  "key7": "nmB2fxdbdRu7uXAbfbaMKkjaoUyyQwgQHcobo5NhQ9WGFzveL5gc5brDDz7VWLNtpQ14WTwfmFsnRLt9ngMAzAw",
  "key8": "3svhXTr6Ekp9xxmddRYtwjAKpqCgYb5aNhLJbnpftNN8gh11zwSnXPjCLRq3fQnGdNsUpdJu1SMAAugCUjhDhhKu",
  "key9": "31iF1k6p6Ap2mPpXCgMaf62gVMuZ7EzCto3t5RHnTYg7C3bPJY3NRztJ6XCv7kVawHNjSYPvYBMMLb5KguhPJdRZ",
  "key10": "2VHzHcQPk4EQze2QU5fSEsh31kzbLZoWjQXTMR75GqsgdKcNbRA7xKtVkaAgkhhWqQUJCfZovPd2ucYnC6hKH7FM",
  "key11": "3HPcPiNBM39awNQD58LsTq6VKgPxtN7SrRr4hJ1Jqp6TEqSEhBLeKwN52gPWwYmUCyFZsfswGqLZyfRcAQQKDhsH",
  "key12": "8qZNwK3YyNabEPaT6KoLBgv8VvJzP17hgJywuB5qbYu71RxA3K9GD7wriVJJoBiLmn4t9391rkFU5121h8jU3fU",
  "key13": "3YUTGT5AzgFMi2hT6JKscYBCa1kJSnkNf5UoEKAevoYhLb62y8aqyceSgyZFNx2MP17jccmMDLr4aHFNc4G27Aey",
  "key14": "3bXcEXPXPTN9HdEcCsn6F32WNpUwyeM6XteLxHhaEXKMP3LE1xuq76uNvaeQpPHQ9gsMF4NWbh1Brff3mg6eiDR9",
  "key15": "6oxadTC2a4bv7kKccRTKLAUUsoQFyZcuBgtw7djg5KAYTo2DhbmLuLaKrPq9QmgY9p3Dm1g1kLGKjpHWPq6rxtC",
  "key16": "2xHK7cWqfaRQh9JgE5vcrCKZGKmszzQigRn2X8W2UV5KNDRM2WmwdUZopCf22KWMtE6b1LLv8AP2wK33NAzZAEk6",
  "key17": "RAjDMB9Hx45X7G2ZjxEx72VTpBAYGCaGofNcabUf24oNQJSf9pjSwdjkefLRgWVG8rbM7vXT5NohvFwm5BJ4xms",
  "key18": "2bEuZAdeEyR7hAJS5dw9N2rAcLi8qS1rp2JigC6KCVGYegZeJNavqKvtUK3JQEEUzCe8KzMzKRhRngk2okHjg5h3",
  "key19": "4EwP1xT8RWt5EhL4H8TbcgFvSJXvwbU1Xf3Ktc43EmcMUv3e1CVKkunSHr41VZUqdmYgVwHjWMP5uhBftpK4YHKC",
  "key20": "4uYFnFix3jEpK5Wmn8oqUHgrg1Y4ohhxx4jKpK44maX42zktzGnJTdfcjGK5hZhdnQr8r4QXQybMyZQQUq8XaD3s",
  "key21": "2j5amgPbpDt8RdejBxjfqTyShV1Js3ZbRKhpchUEBAQSbxy4Cc5JsmQJmH9ZWH9gWREdFv8ZdTmHNNvh9aGNveBe",
  "key22": "2meJiMBru9j2Kw41q16Ee47fm1k4LEX7SSYnshgFxL1jNsrFCWnsmQaMmHF6Y6K3mCvr28BXmNUtitwHqF6cvCXX",
  "key23": "RmotJZHczsbd5Yk7muGaAN7TpftRDzmFZR7QowDxXXGAFJekTALD9HUvQ5f6b15YVYuxgQLQhpwnf9vtWjBguzp",
  "key24": "5YEhcM9ENrYjRBTzfabhnwFHwua9huaa8hvcHgU8Gyupu2tvjR63gbxPrjDQ2kS6Ua8N43TFuJrBWCMFV9Ax9Ck8",
  "key25": "nHsiRV8NR5BvmoypzgC1ofqNZiMyVttE7Lq298BU4w8qyjTfmp6jpA1zj9GJZgtH6yT2NsmVFd3m15K8wmvjbFf",
  "key26": "5DnaSkYuLw2z2fdGvXZyraQWBCMMnH7YhL2nA22vQevoj1szfEZWtEHCTdcirjehPozAcMSM6x7HRAM1EhYf3PHX",
  "key27": "24tc4f17s4PByEhfphihR4N24YfVdwrtLwcA9Cw79SttPaV2nz7yUYFs695wkdUvrqNA59vuMFFRsupuonMXtdUd",
  "key28": "3rzKAvvLWsRvMzwz237LyoEYe3tMnnYmGGLcZZ39qwy6byrjD4rjCh69RxiZ2KvLwGGmhEa62sbSEz8uWT4Js5uw",
  "key29": "61FxFAtJQy2S9myZcn1b8D11JQTHnJCAodxWewqzQwtJNBLxJwnUZbudVFQsTPtYHQZx8THTqcT4c4AxPnAE6gho",
  "key30": "3iac92P8WeVPu7vQSgwKuJra2DiWzGKtei6XNDeXpuLXkynafAfa1YvZM4fvpNYpoGWqvrzsHhCVjahEHntBHJ7b",
  "key31": "2W22mG4MSqh7eXSydPjnBbeMw3VtbuV4tqFQDFXMNc3Hs2Eex1NS1H3V4ZYFGZ5AQXvYDiu1W1z2ABrA1wZxwsSU",
  "key32": "2WmNHVPCEPkykfuHg4VtRhaf13EgyK7TUhoNZ94yXvimZBqRvLNjXhDaUqGkwyRuHFhbTuCgrPvLyMiyPwmWr6GE",
  "key33": "3jLaJeqNwCynqioFtSV8WLcm9yamNyoiNPKGWMeMkqw5XWhdd62RjEFunGbmjJ3ZUL7qCZj5aJNtTdidFn1BJk7o",
  "key34": "2uZm2xQJZygoJx83ux1XPdzQsvc6hMxi6Gc5pFZG1yxsACZLWxknX3ufawUuhYX4W25u8qM4dBc3y7i4K4SdHSmj",
  "key35": "3gBdEuc78LQHKXMW6nt6buS8DFQULsfbXoRqbMZQ1D83soKoqpNkqSfswMieQZK6krf5VnuEFwKrGpa3wBifatFQ",
  "key36": "4hzHbD8TcJsWiubsP9F9vusb2fU5PNvYU38u98EEKW8dVq6Egq5g1kfxndb8QDu3FiThD4zv29yYytPrpG3AZ8F1",
  "key37": "2HXjVwpQjwoiM9MKUacZ1gxe5YagPzhkBUr9dRPee3Sdipd5v4DVykiT3p5WDXsRFaHxj8iHPjkp7QFHHRwxkh1c",
  "key38": "5DN5ww8kjQCqDzcQQL1F77n4MJRxRtFNuY1rx9fQJmJi1V192n5hz2jiJD1K1cafhuWvYT9TeZZ5frcdqxWNnywS",
  "key39": "tXftDTrzvDtZSTy3guV95GLjMrfP2UmRNQDWkzD4XM19kWG7NNzqFjRU9RjZLR3Ccsf8JEXymCMiJK3jCGbEMxM"
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
