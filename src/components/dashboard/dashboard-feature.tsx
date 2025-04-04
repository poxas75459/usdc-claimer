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
    "hWVmGqyyNwiQ4EMJ9bJ4JRaM8ZsN1BCK9XtQo1RavUAJ93251FFgNzzjNGeTvTN6e1eCEMivRkU7nvaqetLqrQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iafdoWpPA9gTrVgkS2j79iA8uYFgiNnYaAoXQt9mDoXY66R9mMNMHfmq4h2Roge7X8QjcXopVzgudwxhPrstGAa",
  "key1": "26eeAdyP12GNJYPSQ2vMK1wskPBMgDFEMUHHzYjAYniV5Ap1Ljs7sT6wSGQQzj16tiJCyQcjhtWNUS3PuQXzTNqx",
  "key2": "2Ba1qHKApaxi77pDjkt5qbqkADaZY131PRh7shAgBYLiznpt9rtZsxxfphuzLFkHtjYH6r13q2KDAR4hsELQMKF",
  "key3": "4LtzpJJUnHfR9oSoizJECvFzw5P7G5TT4iBHjcHPnhHxbttskN4PdXEiDCYdiKF87yjFPymbFtTsWYG1A4Hx1qVd",
  "key4": "mnMXHY8gYkwJaq65bEchup19JmGUJ8WMNNYQvCBg1KCmxu6gRYPpQqGYN1dyHtffPGM8SgGWfAVA8G7pRgZk4rU",
  "key5": "3hbfdPLC51Qq9SRHnHw2jcN9rj53tg3wSEF4zSFV8FAaPtQA83sXhbMNkUFQRhWGtWKsRNm8ifKohzc4gLMNqbVB",
  "key6": "3ttTKM9jZXYUuoFKNNEedMkF9tm3pUXfc9FHmMBs596UYP8Q6T76bd2FpVFccYH5K8kfWbSW4qRzBRHQudF4xcZ2",
  "key7": "Ps1jvDUP6x8zBE2bPvqjsMP1uUqY2n4bYQU8yghu6kcU8L5KmtoCRjJ8aKia664gT66MACqNVHULf9M3qKF1EXB",
  "key8": "4VSjehAiT1wepeXeYGaCu8oMsxo4k46yMmdeEQ7f2SQSPpgnxwngabDxrPpY9g95aizqffa8rbpRVHcP7T8qx3JK",
  "key9": "mF9o6USXaTLv8Hi1rQzoHqQFDB7XLMmNfEASpD4radM6k1W9AVC53JbnD4i6puXbDj75NRpZx8QnkXQWxKyxvx9",
  "key10": "5uu4qMbppRckCvwfvDj2ZUWEGSnKqPeQ8f85vrQ7yHCMLLbEpRmGTrXscRTpbHfTbKoQt9fjuvXYjj3HznrBTe47",
  "key11": "3YUKe6bkop7HHmFBcmTSooZrT8Cg8fPMfX8CpLEBkXi7qchLZ8FFTtEDZFk3wSrsZqTRU7T6XuivJrpS6qKAY5M1",
  "key12": "2a2v7PoTr9ouZCmMNDD5rJaaG9qTWXGPb8XycUKRRHNZ9WCv814HhUUURN3zd5CM4jw7Lh192yt1JW67xs6gmDat",
  "key13": "28EiTJuGsoGQkirQN1ei9VmrVEv9sPPNRh43t4aMrCbcDx8JcgkWeAVGA2gmwonwvpDYVmoZ3aVbXvd7PwVXTsRM",
  "key14": "BeiCF1oQxEYEsKiMBfggJEteuqGMAWndNjhmzXKo3Z3T4mCXchJTrHb4EY31Biq4YXaRMUbkmdjcrRVLK1eJF7m",
  "key15": "21bV9XpazLV1sDEARsD3q9C1DCd1BojiKpMUCxhcWx7iWXnTAjSBM7LsekGzeYv5E3QzLxTKRwF6m3oYhaYX1Jte",
  "key16": "2zuDc1vQZvKUhyfziWiRcBUDZ6NwViYKUJUWGhnvPWedS3zwtVVrXUHE5PfMVCWAztoEYj95sSWUfYMH9doAyf7s",
  "key17": "nLnKS6mx9NrK6SpZjov5QDYYYqVHG1ZzKjSs4DyvcmPm9R4fXRqLXMkW9CWPMbBWnMzJTqoTgpbXfxpqb8s54JL",
  "key18": "4D68JnhBMDRHiGwXZjgZh2a59yaorGHWgPLvzKg4mzHXZtP58GxXAxeF7JbKeyJqv4UnEDeHGfwAGhNFYQHoxBDk",
  "key19": "64rHGDsx6zMyRJrHM1c2qKeBURhhWuKoe8CK2pv84vhJS269RzXAYnq5x6MSd566NYRs3G9Cw3cEm8zCCo5JaJNH",
  "key20": "48RdNVuFxiZKgFkqs8wk3Utsm9sFMTBGebTM7Y9epeceHrREHTYvzg3wPTLBwKqbagwm52nTU1JubrLkjXyiZ6hi",
  "key21": "24WLJ9z1WZwAU8ZDSMXjB866vVuUBkP4hPP1e2VNthtU6xK8kppCuJ1uCVRyK9nJJ8YSvyi64tt282cSuvvkoY5y",
  "key22": "2vKJEU7691a6Us5kQfLWTJ55Wc1NKYE7C943oHpfPZSCx67RiQwAXHTapYsurnVM4KAq6q8TwKKY5RVuizheoFXC",
  "key23": "3oNXVe77k7yP35DgCgs1MAsitMhh1kYg44qPJSYvx5rpT3H8mwzXCpx1pCQ9BRJ64QnAt6HY8AK8rzj2UVqPS26H",
  "key24": "2yz1g84UHompJVz9RB3EfpX1hFnGKXWEG2btixowvDusNM6pC8vuHn5SLebJjnYsez2KMJYjTuWsTGHppCXp1euz",
  "key25": "3LWp87NcMBHAEefFot9H4yRBRAkSVJ6NXUAhhG4t6W4Zh8YGWcmwDs3a2w6mpsEYfpPD81CJUW1WKzKQbZ6Y69uq",
  "key26": "27pSVExexwdCaRGzMh7AXi1MnFwCEyCEoSQLMweevKJ3TfqzcyqRGRTJXbsFzecdamreFLM8XMDNsz3NBPwhqViA",
  "key27": "24jLJ8x2gn7gom9ZKUZPHtReaB6vjDVkgWdNdsNoSZBmvcpuYLkf5KWkviDmsNnTgQ3P28Hxv5WfNDUKrXR6pEDR",
  "key28": "4ay21EmqCn6kzAPDKJnjkEuj5quwrYzHpspiwKnWiabtmKB2DSrcjmyqbtHSb6xrB5geym9GgUHHLsVi4EAk7a8d",
  "key29": "5SrqETar8TSWgBc9vHGKTJrid2TV1dpbK66AY3JK48Mub7CEH2g63soxVhuTAYtiBq3zVK9ppvPCweWrus6mg4z2",
  "key30": "3LKot97RctB5t2VkSx1CDSWAD5QujTh9dCDdL47WGPkZJNumuEUcDEjifvG4hXFBYoxaLJtJE6x9uoK4VVuKo1HX",
  "key31": "4qVqdSS7aQnywg6AnxD3Ao4azuw1b33TfXHaWN6qwGAc2gbuMNXsi4GHAEKTvdU4zrcpxCn36XqVSXfh4UDKhAzL",
  "key32": "3FutfGPukrA9exnPetqfKAYuCrUkgc2mQ7NKfPRhbb5KKtLRLdATaNvBkL8qfeyy19p3HLQ1dW3tW4qTVwfLUPTq",
  "key33": "3XArF5JUwqhudv6wDq8pMeTmSFXQa1GPauH5vrY6VR8inCzx3nuTkewZS2c5NJUfC2z2UfA1Az35GyzW55CFEd7y",
  "key34": "3HP1vJhS4v15ndacSZ2WSQWCaRNkmA7Y8yfSDBhH8B32U7avLHXF1W9NbEuNug71Ysxm7HFK76qHGTTU84f5ozJu",
  "key35": "4Ap88dFvfBCC3sdVVWyeHDMDscZVkrd7msoJTpHQctfrjLt46wTWwqKW9X48LBJTyJZUpuFRVaYB5Uds2Ued1V69",
  "key36": "3py5VprBEVrTnu2fceX3Cy4fZxaCQ45yRykVyF7uyBZd3v4oReiSZT8rLQAtv2pBKQbiUMoihWm15KvBN2Br9JJz"
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
