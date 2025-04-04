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
    "fTJtDiJqQVB2QjQfjob1HPEKD7LGg1CxSWSi6pGcPEdH2qAzh9QPE8EXd36KxXaDxjatnhApUnsKLsoUcekd1WU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mGEbUZKixzkBEJ3mqWdVgmyqZSCqnfAJ8q8oDKu51d5jzxu1ydRfYuyJvyLRTR9cUJJuAHSi9k5PzsZ9FAZLmT7",
  "key1": "3Lthc9SR5gDafcx5QrEN6WovHRDxLsH8JdZeAwCPY57ghZo9w7UtvnBogysLmJensJVFVVBLi933pw67vPUCsVWE",
  "key2": "3FJvbRKJDPtN4UZQ1ab6ZJVXFi1S4cEnM37PEMBy1KhV8BqWZ7GHmT8vaRoryF1a2CNBFvDYAYDQMPBerbR2kVFL",
  "key3": "5pVQbFZedPRftyRgjATB79sYxk3cnk8NM8Bmd3wiCPugEfTKMWNUGReNEbAFZ9UGj2JEdNZyU91Z7vFzoEfXp5zU",
  "key4": "J6MFk1k7JY5VoAUmkQXYQV3pmRgfwgw2rFtP8qQtcgLL2H2rVefGQd8UNFugiD2oyfFnNaujxrASJQFUAJvjaLX",
  "key5": "5LeC3kmFgLB5dS5MhWSNnnf12fHZMhCyEMcyKRqddLxKr3ZnzChKr9A2L3FQb2PrYByZfX8qGwWpvEudjY9TeQoP",
  "key6": "eELGrWrhpwzaohitJhUsqkrYuhkHGd4RWdZUDdVWA1PaXRvwP4Pf2BXwv7gdvDKXkgv6WjUtMDWhfPit7BNNy3c",
  "key7": "3EP31NybjcUxBa3ScWPkyrfEWbx2RTkua5uz9WWovE8HySmUv236B7yd1XQUbZUGdrN5swyDtXypbEyoeVCC5TaE",
  "key8": "5aVXFq8RaPSeQkwcsHDxeMT5ELkKUuyx32pZxhpVdy14fY32xWUH96txNvKHh85BEwSHG3NCkqRufmPhjxN1XhHm",
  "key9": "46TC7hg2otWcjQrK5m5AmhU7MpVB3qeMFRBznmVtwPXpt7VK1MgPZuwT1f1Xv5qnnSVYo6FELwunw5zMee4NYiqW",
  "key10": "5S9LzzG8vH9u46X8DXPEqe8ZEFT41JvYj2n5q6ZJoUgF8KT7CZmWijn6nXpncnyB6BUMVoc5MQuD7fXDpvHGyVci",
  "key11": "3NMQ56azhT4zd35Vh6Z9td2hJyiVsmvfrdVR8cXkj6LjwwsW2n9B5AEP4XQZdMS18WNyhuiwsq4oSdtqfrnvjdoS",
  "key12": "5hQq3fwrXzQKJZeFytVxKnNivr9GRYufvvbbcr4tbVrSZDftMzJ6rTco2nkfDXMKaypDPUsvhpMUa1xGXrV4aHn",
  "key13": "PKh1pSRQbcUewgrU1nX17e7RQe2P2Y2Ppng8SNVVAuSdUYdfDrWhN2Ruiyhp618E8YDe8pY4GKdJM9D2MeiRFPF",
  "key14": "5CtwG3xwVMoNkPVB5uW1ixyKgPngdAMPoyGsi87Pj1ArFrQ9Bo2LvZGKEuS7HZsfqvjrJNEbGuxn5TmwMKoFXpEL",
  "key15": "4tXF9dTeJMFCCCiQJiWjT2qXy8PEpJboxcPwHVsMor13Cyc6XMrEMCqPCr1Tz1cNTDapdtq5gvyJZVgHUQ74VjhU",
  "key16": "Tm7HnNdtCfh5PfadhNo8LnweXov1UiYzggXwhYDNs7EN69bRhy35AeQwdgAcBG1pZRRHHa7HEGXU6R3KjXTdUF1",
  "key17": "58QtQz97zdbGdrPYbjCZ6eb7wAgKDWB2Mn68fj81Q3uUJtbTCtyM6bsiLhNoBYm6yDqQZn6qpxmeYLKW62hMaW4e",
  "key18": "4TPQfuH1D1ZE6byFAr6TxM8PvPUYetwRJTLc4up6T55D6weq8C6Bv7RZ3KZJ157M3orSKrceQMJNyEkTdL7j1YpW",
  "key19": "5ZFv58imVvJUj3vNpAV81N4Lb9MEJ97Dk4WTRseQNmM1SsH4xPDnpsAi84avWD8nadwgS3GMF7qp2YLGR2F35apD",
  "key20": "EDUpf1UWwcJToVvq89ox7eZbtFAaMdBsuiMNr1ZL6V5imToe5SYq8PXNtEfKMcQqeS8dRCHDKe8UPhaQrpARW6h",
  "key21": "2qYtMcmoGHXwXM2nkZvoAd1WtoVTvcQq9sSw5dDqAjGqkFJpYB5TAZ1Hqv6nY4Sh6B1AKQjYT5KFNXT1iir1yuBS",
  "key22": "2qvXj7VRGNb6pA3M6vTfdSUR5jcDiyV3QuDNknr5MDRTkaEWP1ViMVYZhozUXZS2LSFjCsr9ex2KmNiLRkSXdUrB",
  "key23": "4suucwmTCh8Fs5mjNWiVDP3pgRBFZhxzEaJ1uJTvGfSrSk8FSG2MdKRB27TgTUSEat6cjZ7WfcLSSqoAsDEaJrRL",
  "key24": "5HGszvcoTyTCXLhAUzr9yZKJLanUwYBRozed5Sq3WJkHbFhYNobEPMRNuHDkXMNUbPD1HhW4s7zGyfEkLzvYZQQv",
  "key25": "4hzRCNJMwfAC16gyezeDPQ4eAFsUY7swRBmN2c3Vn7qXBALi2RErBJ74f6bRuLaikrEHhoU4m9owFbGxj2H7DQkB",
  "key26": "5bf6WD9H4TAX2K3Rm8J84UF2fjcqQjPPRfhjGPWCoS1ALdbQsDcLbWwY3KNxh96PLgjwmoBBAWEQhaWfTratgHPz",
  "key27": "5cp1cXnoSNNPUk2z38h1fiZZkRwmmGJghhJXNuEj4TAJpPw7bpeL7VqqQH2gAu8AVAahLQEbS4ivz2Gb6Yexso1D",
  "key28": "2ggSCRYeBJrWimpoNkDtFAf8ExYehDHFmEDG9vWfqpSYtNisJ7gqBHhdo5FePktV11UbZZkU8DTikqn6FEphNQSA",
  "key29": "AXMJZvhvhPfv6xqg2DVwBeW7oYAwLha8LXv1Ago6n35Ru8ESar3CYR3nWFL6Vn5rTaTSyUJhmtiPowUJpnA2sJe",
  "key30": "wSQ2mAA2hak6gqNHHUK7P2kpL66FsC1WxgLJMXXT35FQF9oKVWBaPLLkM42R4KGqUVz8ChA9jVHfgHfa1yyb5fx",
  "key31": "2QCtEpogBZ4pYYpAcpNsNTZr12TBKEepeGidcBuvN25BniR7cwQsSD9Bx2DfLdecFHaSgcN7puXNBfwcJYaPo8Mb",
  "key32": "2NbgqTi51ASRTbu6TvP9x5Eo1HkuKsVvkZdf9mEdube4tTdxbTgXUv8JBUxBZwQxQhmZCeyroTbFq8Xp1bxidQck"
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
