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
    "4xVgFzjko2jJMo92Z5JuzPRfdrW3z7NFRGscrK9q1jMwn6kLJdZ4QY4mqpPbQweEQbnmz31FD4dat5eXZkeQUa3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65zc9dZxdfP3zNvzcowgz5TsKUK1o3v4V57RYwq3KVHoeST3JMvNngycsu5ZRwHAyAPvVyAk3Hvbe4ToS3VgCo1F",
  "key1": "5LhxhgUaKFAfsJyTFvTpGmxKF6ZLxDttPzUd3SQkSHFTsa5am2zxH23UyBdCPsNL2RuHehMadk8pstJLjwUiMKRu",
  "key2": "2bwr6epMtoJtjRkWteDmebfdciDD5zw6zYdcaqtRW4s25skphAAyVWEqe9FHifFc674NHD9X1B4EUTMpe2pb6z6z",
  "key3": "BrDp1Y9bLWSnZRbP5aobuLBUdoWg6NJLTdU2pfdCMYTFLW1rWJadCk17fHsN6kg9dKtXC3a6dGNKqfi9SfuwSD7",
  "key4": "4pkSAsyNWGFuAFpMEctMgvv6LVmBTX1aJX6pZf2ydNNoNyGHVKffArK53F5QT6emFYvRo24qMPE7ncJrDpDUHsw5",
  "key5": "2Rbi9Ewk35sRKNHnp479488oA1V6at2bqJyXXLu9N1R8n2yXLMBU38nUvU8VSegaDKGcYBsrCnaGYCxpwvmWFoKd",
  "key6": "5KvJbeLEhdeoLv8uHDayzAkcp8Ux5h68RdjGDT3EFRN7VVzmeHmUSC6Lv2S5NesNvcrGwZmXbLn1QLDECcE5UXC4",
  "key7": "4UWKF1mb8JZCBexGmTzFiCknXTDrTKHqnmhfAPnGG97kr3Ad4Mkb5fQS5J5dUP7GqfSK6RR8PWzHQXj3in2zfQU8",
  "key8": "3gBJWSii4pCUDmJLUcqHRGYBpxqXgvqLsVBFGc4UC95NBYMoog628YwP9n3mYzUcZWaathXMPDNptZhNTMMmEh87",
  "key9": "BCg4cbmr2Z2BKjXWhz7aJDDBUF2ysZwfjcaPqCyYXg4bsL1ersvxkFAMFhMeMyrPm2CbbVdjNPgReeD7VgMyYFu",
  "key10": "5whPDGB7rB29vDEjpqAd8AJtkQibHTLdwHoaxL6a5WvFLEoDfsabifEjCPboZ15tDsdoHNJCXAP2yHju4h7WKhLD",
  "key11": "3ZJ4iRCQzLTGhucZRuMG4vDX4qwicSxTcg8BX94XsisocuxuDSCU7LaKgXCNNdPg4uc4QEjRe5hm1hcksXt46JuS",
  "key12": "4YeDybih71HRuHpwP22uaZE4HSAFW3cRqBnegwphy8szzFF2tZsSou5Y29TYwAuCsfyJjjpyQysuvwh6QdbSyNT7",
  "key13": "4U8MuYEwJqKssZsNsxGxm79X72DtaLrgTRSDysmN85CqpbGydgjfky6QQtQqsuP717SJmEkdwpP3GDLg9VxNATpV",
  "key14": "2Zh5QCr3NEZ1Sfg4drseztJDtFy5UK4JnL5NaaoVuGAx44b1bZonqj8F2AMasjEm4P1RRGhSvtgRUW7Y52Ry2WYL",
  "key15": "4cVjJbTwtTy1GLj5w8XCJZ5xRqmoebYnsCh8ifRPFid1noANVbgzwUiQZ1ToAUjrpzo7jZ8Ecaf2RXMbaTvfEBBw",
  "key16": "QPzKqHmMTToLdCBy9uqYMq63ApJuMcxhzM3EGe9ywnTVTUude4eWGFdHFbXZVcaFBmMd9zKgWiRpBZodEjTF2sz",
  "key17": "3sTrbDWAb8y4RFanMS7y3G1JwBJz5tYr1HBdCqotCcM6y9JfdMD1ojC2N9voCotVQNDKH9UKHcUro1eKBxN4Dc3r",
  "key18": "3J74bcQNhqigKpZWU9JJ49FiZKqa9jebQ5vniDCoPSD8jpZq2ZqxUQnEKm1vUjoLqYKYyi9H4KBGbLyq3s1GMDTa",
  "key19": "5fuD8Av4YZH3adFA9zUvPSPi4dzbdbBPkobMAK6zVEWk6mQxv8xf4dhBytGDbgCoVM6hANRTXAtXnfPHH1h4hif1",
  "key20": "3TEfEMzAefk74CtiReSveF73WvfjdbnQKtwyn7NYeTybm1kECoZqMbboE1NiweiFmasmmEiowQdXtMb73WPxGE9p",
  "key21": "2dAJa57HMvjdeVdhV64q4EjMa4GiozyHGyqXgw56f8B8vPRNEgssERHGUJfHtoYkNFP2B9aF4jXcTtQoevMuBhSU",
  "key22": "31eqKrrZEHW9EHyxSetZYKpJ5BMV5frRQTkAHCmvQbiszLiy8uHjDsb4rSi1nTtn8UXyiHQRKueDgi8deLJ2vUrj",
  "key23": "2CqEZARmi1w58nKRaP5hWqGdNW3ZRmKEaPUdSzYm9LjGLDvWa7JCbeLE81LtANNFvya95UXpXuR6GUWQACt86Rt7",
  "key24": "34HskE7aCdA2megrah4E8EPzz5vTtiryCTvmiysNhHSR8Hvd6FU7F6GkjTiSdu9s7HD3tSGgPwPH5uGW8vXK9mqx",
  "key25": "2h8St8mmBHBgy1ixZU5tppsqzJypPcjVHowKkHDDakX1iVFdniicDG2aWsxjQEqLfP7P2UMGg9KT7gsiwS7ZaUiC",
  "key26": "39VP6KUXGNSoZBH578ppDHNuwdRsRhaSmtPqEKx9CLtDRi9vpV3gr1SDsJt5AvLnJf5nhhxJEHJCR8JsU1znNidU",
  "key27": "Lfba7cb1Gqa7zaAUTmyPwyvhzuaNeoriy7MXdpABb2FikprHhfzJsuKwyuPYFMYT413Mxm8szGnJimCKQHV2ND9",
  "key28": "ksuN6nZuy99HpGq5fDxcU3hed4xwPo6greWW2MXs5kekaCucp9mMT5P436PCju3GNQFLH6q5Ezg4C243nS6FgwC",
  "key29": "4UzeeJmB8NRC8uysveJnxGn4sFiDkD97mUPjUW7peTYupk5TrPHtfXFknM7V4X1HLr8T48PJcfh7DosxmJndeRiX",
  "key30": "3yzA9UfPrSvwNtCYRnsMaKZLAzbLj9k6fQyyJuHEjqYa4oKsN3oVegFWEpVgFbtcFNFx5CwV54c1QVB4ujm1Ambx",
  "key31": "y1PEWoww6TPqJEGaVjQBcjiGywHefk8jwav9XC95jHD3674K64oaQFDL9zHbCEqa2Nt4QqhDW2HFUv8vkBVKcbQ"
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
