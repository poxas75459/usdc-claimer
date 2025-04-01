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
    "6MoXrEhfdzwYFKzMYjw1gC8Bmphurfbv6aJjQHiZr9jMwWpA5uLJYk4x87oxCRpkYNJvfp3K5p2QXpuGkUg2PgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2mezNGeJGS15FddmSMjY6nxd2bxVpCrvxvxM3bTypU6q1bMUzerMSjiKVaNQSFadqY1KVijj2GmdRQFL1qpcKa",
  "key1": "44iCu6xnqLfkUmu2AUvvE8FWhwh2aGFow34TxaMhvsSSHq7y9niohNAijgDXoWiDRPaxmevxJoKHFru7QgGdSQyP",
  "key2": "PXwxB79EYVCDRGZVUDd7u8pSWgAUmL9EXdsyyeMCYfPfis279sis2uB9zEAR1DUkUELWrPhXxxm56AYx4HUVKJJ",
  "key3": "5RQRoczi2NbS2T965sipq2HofkeyE93pKNG1s68PHZF39VdFBcWSi2qivML4Ddv6FXJLs17ZNoZ747DP2p8rFiU6",
  "key4": "4Q132zag11ffZsCGehiSDQE4QMzJcCwb1jWjHHLbhF8GEdVFcVPGEv3w8fCnFPxJvAdQpZGD6C2E8voH3SGKRQme",
  "key5": "MVNvjwCzn52q8t13muknmgWxyYNmSjFv1zxWs9eWTSnSHCRuAZ5ZPv5wvJm7jrmpnhRrk3HC8YYqCqFfukW6zDJ",
  "key6": "5Dt2vpcn5R35rJDsrLS6RpfXjjSP7o7XZ5g9d2jCCjtB5DSEmi3FvPJoKS5aczC2WkD4bgHXwePsVk5UT2SNRuxP",
  "key7": "2dUfJQrSoWcuzkny75HrdTFT6tPhHa5qfgCjH6775hLXaJGPTMXUkSG8ShcSB2opMnTYSH1DPDDiE3qyGeSRqrvG",
  "key8": "3UjWwjSxq7N884hAE4pwApRZVDhKbtZLufkwiKDYhoVkqUuH13Ay4qMEQh3td9P9pxqRXcnZ5TcBkZsP9xR3wzAb",
  "key9": "nbAuJfWKFTzeTVgYEqcjbJHpb7USLHFV1SzVR3FoA7zF6SA3xSPDheJWAdJgYrSWKVGFubhQf52N5durzV6qFm6",
  "key10": "34LLa4NG5i3GhiAjQhLRN6fC2wVuugsiBz7bJV6X5g6iMwskLp2CaBKi9VXq7jHYPz6Uyfiun47wiveqbwLAm9Ti",
  "key11": "3QN98XKcSFrPeTyTqCRQpSzBp5XogHj8pidLHx9qcRn1jUa5cy48eCuDhfLmLiitioDmTgJzd5qRQ3oqonPpwAKf",
  "key12": "EDGMgXe4WBFnLksHA2TPfgCEHKtMsaugUuYJSSoFztXZSLLw5i5fM5gMtRxAb6iWWUi5FsEjbXwnSnGTbAD7DoN",
  "key13": "4uEwcpYBfkTWfmtiFjbF3V7YLHetTpk7jVkSjGRkeQfFUyrwArkDMn2NZiSNDZUFUb29uzoTNiXyyN8BqFrDw5Sb",
  "key14": "5KKNXKCT5Swkjd2SgoxdqoAxuwWQg8qC4iHGo93g2HdUicWpx2PrJQTu9kJVNkBmXcGUKz8YKy7D6ViteZ2LtsMD",
  "key15": "4NDhaMe1guefjVQDbRea1HQQQqg8PyDPpvpRWjAvdshkr9Hzq9RKsdzfz8rrRPas1sp73MFGUHYteNbnN8ZjjN24",
  "key16": "4veHpj58qamd4MuPyNuhawQmdc9PK6Hu2aGSioCuQ8G3EvuosZrtRLz9sdZwJP1BgUXve449WWUBcsKsLDxXY2MG",
  "key17": "2c2xtNFvaFQfn6AJVGxSMvcVhc5FM5MbWv8Xfda6jLwobePzysWn846g2a43cndNo25LwhjWm97vKqiqHDJJfWzz",
  "key18": "4FjLH6FmDKZp3rzA44KC36sJt5WDu3KyWKDLQkEpP8jqq1xvEYaJJmf56ShUr3usijcpBMFcRLNZXToi2rA4CZBu",
  "key19": "2YmmXJ19j7Kg3tVwvdeHHMUWLr5GKC1uwyXTy8eaaKti8ozpxZ4WsCbxuvoJbp3YRa9nSW4PRfsWQkcC4rNArBtr",
  "key20": "5upe16M1rxQiTMLtBN4NPKxtWsy3ACftoPRGMA38TFkPdoypxxrocACBhBzyicZFCUJsS9YnaHhaf7HnTQ5VhTud",
  "key21": "62UcG18FgHbZqH7GVpiaxnJ5jpYF2DYh3Qp42wGhMMds3f4CVbWcbNKo3YY6h8GBVKg52HEanHVnYiUorj83Upqb",
  "key22": "4Y98Lsndk8SwBV6C62mS22TpUizJ6Fb3AjBnUyZMqWBuN9eBHYPCq5TeZEAdvQja5Gsp69DhHRsrky578csnyRSt",
  "key23": "A6rmvrc2SxnVPZuh28ZtamdBFmXxY3MhJe8BkFi1gLEVgBFUZmoohuqo4gCYwT6WKymeMbJ5B5gtJEZBJkLMZtq",
  "key24": "3SChfjY7CAsZbkB3iefuZpMkUjZGxZCKayPStpfgktYipEBntAioV71Ai1UP5S6tuMsfbfDNgTx9a6ipuh2ZAkYk",
  "key25": "5BspKSK51LNaEVmH8U5gQm4Uros7dx79TU3JUpHRcUFMo6VB77DE3XUPhcyMPGSCcxWYjzQ4QLvAkYHnzHRvohDb",
  "key26": "4XFvjnU8PrE7BiceHkMQTHHEQCxiQAAzguEwpn87Bt9jhfVgMYfw9YpFd2PwrHbDnsMw4an41jy3qyceXLMZEouU",
  "key27": "79gmdpmK62wyCMDB5Mcg7FGo1Pss8PnJ15f8ES9aWmSZb2DU4ci6qWuEYmjLyemwtkgWrJksYkQLbS67niyYsob",
  "key28": "3Wuj4Lub6P6GobVUgUDaFjfwJpwxJpPdeA7ebdSUnDMizGQoQJCoCtUrt183EEzmab7ndTv54jJNNoCciaTCNCwj",
  "key29": "enReoPo4KZGenyGshHTJenga2ZvuRZNSGVkrtgmRWp6Ptt8CshGrsgYYVJNjyoLK7EtqjzWxAUyC4TYZXSvVF6e",
  "key30": "eLprgPwuptfmxhpcGMcdccU1PkmgzwGTXbfoTmwCV8NsNeCPCG2SViNJLPp11bZE2U9nFvQxoe5XdyyEPb4m6Qz"
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
