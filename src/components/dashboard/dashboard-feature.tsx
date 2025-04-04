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
    "221ULZ2Yibpso7GwSi8Dem3d371ZWSfW2Jgisk8vwzWsg65327zJwD5k1uSMcXEz6CUbHYgDy8eV6RXp8JfZ35uT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vebxyXRBgTYf1KM3RfU7fa6qymcZtcoPSSAFCy9CnbANBF8akAKUVw9oL8ti6g3L3SPeDAfK2FdRqvJZMTrVgNQ",
  "key1": "UUJsFbyQp4p7dA9tmw2qo1w3jUL2X7c6fmevY1ULm4JRzqyhSVQ5s9jwNeE5nMyABA1XU3VKxERT5fv236uBX4o",
  "key2": "5WcqR9DDrMgWhP5B3EB1R5zRdHH7puwFU3qDhEHAAewZgPLQSoAgjUV5LewVv2JMSA7iMCkecFHqkzwYbCYvL8aq",
  "key3": "9evgKmVKEcaExKP9U9s4Vu96D4SKA4NEAqh2KYkhCUY7PxD9HFeDRm1XhCnSJadcZHCgvH5HnM2rviC6NWQ8cMz",
  "key4": "23ZaVsZYENJagwFudY6kaHjNhDR8S3bWxJsgUhKLBzUamf5XQr9kJDwVa332VhMfF5awRdoam2M6kHebVERSyiKV",
  "key5": "4XJLpztPaVWAt1At7FT2YsNirwTaTyzKymbn4KoLXCgAn8NZQd978oAg11dhVSZJKw4RTJkkkUgRMcJdTCRFFxnF",
  "key6": "3vT8LJvPPuy8znBFGsSXSghLjCJCFUwpQH9SWYabTrk89VbtG4LdKZyi3ikp5VXoVXV8PADuejefiz1i7ZCSdcz1",
  "key7": "4bcfkeozKo9ZicdwLaZT2Nz2ehCNS8gPBYcmLNzPNTRTnWcFZMcH4sRqCZuxBPLHTXgmZQYovPdRVFNcADEYA9Jn",
  "key8": "63qPSBb5weAkceK3oi3JE6tqf4P3JH57XstA7W5vJ4YdN6ke9Vh8kpi8e93JMdBHziWNcsHNTYn3JEPc6B8VN6eB",
  "key9": "4DTQh1nU6WgquxjFzviDrLqBJuJxmivxDPi11RDAepe2xcwJ3zMs6BcD3SDH9f3ikXEhdC71x4XatjLFtwR8LCRC",
  "key10": "65PgbEkHFqJXHTPb3vADk7VQmt4n8aFNrnQsip5P57AhhFj1fTFYP5v5jB8jkk3vVGFbQc6yqhfbVwL1AxzB5WDy",
  "key11": "3nKDc6ZRan3kWohBL1DQkgvk2iVxehFiwf3pw7qtgsr3ro5J86QEJkJhsVek1SvpiMzp8pppieodNGXZkEMG5hVV",
  "key12": "4MbriJTpVndyynE2HJ3dNZNTwmTE6e3apFms2agXMWv8zArYfvJW6kJyvhkENXwkyXXmMWGJF5LJPgKBtjG9MwYm",
  "key13": "RBMoE77LDpXuc6wMBE3kN8dLrSAHSVTKTfiCzpghSV8dm4sUkMyTPyHmm24WWzy13GP3ZeFrvC6w4zHtytcX6yQ",
  "key14": "4wf6kTJqtviAQn4fzMcfnjpVnsdoHAzhu72SWLwGg3wKyGBjTu6DuEsuCiHMMg8evD3F4MFyBKctmgHieTFvCT17",
  "key15": "4zAmLhtL1HVs94gRx6zxJAUPiLxwZzSsPn3oCrm7Y58kq1wrHv468iBde9z8PiU7EFixWgU5mHettDYMdTxkhWHN",
  "key16": "4Nxe9nJBG2MNr5q4X49zq184zksqDQHeKivAxtNpSybMC1oBVo83gKgEgAz44ngbMwbryi1r7GsfNkcZsMoBW6kw",
  "key17": "3WqBuEm1j4bx5SkvZU96fsEZBvoAQfGgwjrak4wSnih3NLuuhr47jdooe2rd4zjfLDFoqgmfEizZvyfGv8pCx3yU",
  "key18": "4HJ32gGMoRMF3BwNWgm9Hkok2cjwJxdMRn2bnBF3gryUrdHJyTdw7tuaug13pv3Y98pjhT7aeydnczcwco2W9yrN",
  "key19": "4VPpmV8o1sYkaZgRouxUYi5pb9QxaCirq9HdszvLborbzvdB33sAL4WddrFkVqb2fRxoHJLKwyhH5T1wYpeQkh4e",
  "key20": "44jvq2kUuSWYxgxsHRcSRkpPRg9bSsSe5ywk12QKStqxEP1mrebQQj4dEFiCfZpQRYsEvoqzEQpcPc8i52qFvkR8",
  "key21": "5zeAoERREfEaJMvesiMfNgMskn4ADfZWprc9kRxswpuoqpVZdUDncPc8sjmNAb4FSQwp2TuZrDsyU98wFv6sdgxt",
  "key22": "4nBmqJ4qdRw9HxLVkG7e9MaC79cDAvtB3cCshmET1ZbV632Csk37rGYGkFXXUomdzzLk7cAjwLWF89VBrbkNneYJ",
  "key23": "2fRLaniJDmTufKV8ziKsJdBiLwJKJAB31WZhUMqCP3aAG4Ypj3wXSk6n13wFNw2sF9ALkU8YB7MNrc9PsSfXFdeb",
  "key24": "4uA48MhaqNqUd1H2zNq3ZXDYmkxnb8oqdxBD9p2XxGTkB3eyfnzYcoY79omU3Jvo7z1625cWX4fojePZjX2qyDra",
  "key25": "5Q5bvk2XmYt6rLPXwjVZdSZsLJQCKqP9t2vCa6ytYDvgDJJtG7VuCyBUyfhB3mW2PDuF7KRW6ccAdJ1tayNWdPXD",
  "key26": "5F8utyth8CmbcGJL6ETRLB5H2BrrYCLYUG3r4PMQYn1nej2HT26rx5Qes3c3d5vZhpfrYXri9PmZyPw65vgJaoxZ",
  "key27": "5WGaY918sDL2FFDrittnDx1WBY51UcX5avjpNquvQ6qwmzALH63zJhqk6qX2Vx9NJ5QTCDkXKpkZyetkPvsPuWNf",
  "key28": "4Gkfx5XLEdkWbUEFA4Sq7axFuB2PL9Ux4cP5CMqgwq67B8874AArKqD5niK636dx1dSvbMrZwr1feAZAC2kVKYTD",
  "key29": "iafQVrbhH4Cx4YCc5asaX1RgCiVPZkJdM1Kftfa2uv4iY7tnc8NoSQdA8mxeczT3HhMvBFvboSSBE1GyCqjMU7K",
  "key30": "5CS1A3orJYctNXwBcQknQgPd4VhBmuzUiopHihEYZNkFnzY3zapnDwQrH1taerHyxGweH6jbWBkBGsxf6yuzqiHE",
  "key31": "XwLmHSeJDdAThvWN8V7BcmZd7UknVLr7xfYap8jDXCfFLSqTj7vVjDn9WSPoV1buRw1mt2w39P4Vos7n9D9JTcz",
  "key32": "4YfsdALCBwCGqsNLbkKWxACt2SgQVTcSsnJVfzm8SssJWdYEZrc1vU1Acyk1xGxvqoijTRgsVWEC2BJPxREDi54p",
  "key33": "4X4YQ9rgsHHvKGF2ax5ZjC32BayudX5wUUfMx22mrGFinkcz1HrbmnroRDc1y2TERtRktx69dntWB5CiA8BoMd9m",
  "key34": "3XhKZ4wsEkWxT9H71d3KzAx8LZJE6u8FU4xbv44XwLBxwQBVANknwGCsgu3u45Hg1V4XYVaFkMHYaqAFQKnX46Vp",
  "key35": "55w51ATiHYrQ2PDcvFhnmayVpU6Pis1riaVcvpovhJmXifQWSpbWN5rhRvFsRF69rZrd7tmgyZu5X5VZZwcWjmnZ",
  "key36": "4PowdjSqLN413yZKFnX5MiwgYeazmQgQCvL6PD9Ra3WdmMMv55qC278e9Fyyu8t8T7zYWi2RjZSqmRebZENQXZrZ",
  "key37": "A6eTbsFdA76zWmdGFsTctdDMbC2fmm3aChpGKMemyLoW5R5NLJh58JeBab8jxy7AbvnRSpiAGQqJkVgnLVccESE",
  "key38": "1P9vP72erQJbgQxULKFCvvhUfM7s4P91hLefWXKv5E46SjRHhzariF5c4rUbo3pomf8ypk5oie4yF5Dm2pPAd1H",
  "key39": "2SnVLyNatok9Q9kdZv8XQ3NGeYbijojLYaSxuFGNu3nFrMMwPbHrCfPYmMXGPu5wKM7st5HoGJyAXH28vk7jt7Ek",
  "key40": "2yQQYoGd5R8xDs42nJom2koyvcRzjGGDJrCDHcJY7k13djJCMbjS2LXQncJb5eTd6ZZnaw4x6w2nYXYEqhhdZ1WW",
  "key41": "HPsJckx17cffYqGb5JPLXbKLeekEw3b4MK6FHRiemgqctF9qyC1ZtTF2NmQinYzeUwL8vq61Ln8p8TgCa4GjQ8b",
  "key42": "JMaoG713yRwLt7kVVMbtt19ReBBLiXwUEdFPXD4GC9fsswdvfTqynoPwb8o2ZUPf7Qy2AT1yErxn6WWzCYS18rY",
  "key43": "mkrpZuL64DBEe3xsUuNdyDCL9htXRRUSQpAh97cvbGL7gQ3tTzsu8WNZ373LaJz3x4BTAuK4qqE34xr15AFf51K",
  "key44": "4vdDFUb2ux5VTCsu6eV7ZAQ4cg1M9QcxcbhTJZQ6Pc9YitAtM8hgbBS2RB8xooQRtD2VN58cRVFnHWp4rRHe3vcL",
  "key45": "2orJHb9S13g5TTgjhJ3HZLV7oQSHJH3RAeywUJqbp5m5bvYdsLzbHGSLw14eZ1Eu5VyEuAsAh5xFwoL2EaY9YwQF",
  "key46": "4Xwd1rQ5URHRMJB5r6BqAJ58kByjVFyBa7ofrwyDpjgfB6T3NuaRZiLx77NBPW3mz9DTMuuBUFs2xJpJ88reKPeQ",
  "key47": "3zjUkDZzKQScBY5mPWnNVjoRmRBcohCKhHQhPNFKS4ZzNYxbeSdGNsace9osvbUKuwBmv4U9VJASFsMx3nnx8pjK",
  "key48": "2Zzw7jca5YVPnrRRnpFfTj71XdhmLyvZB3B294D2FMaU1JFFXMnmrJ8JY1DuZ7xuCdEgXKHdtRB2BgRNAHfNNVc6"
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
