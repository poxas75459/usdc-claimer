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
    "49j7WYzPVSoPjgc9x17Z8YjnWtUBSPekmnms7yF7hGEgo4qxQ4QWw6VYZxRRLXKfxcDSPQ6rj5WG2s19tknkTovT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5pUHotf7sjdoGb7BVGDhwyZhfprPShGRxMmvf95BBmKzSBVS1zcM9vKauvVuky4B8NT4n1JqgW7MeYRnqBHMx6",
  "key1": "3Fj227CEvn73wHN2Wcd6rZYKGJP6soLjsk7JgoFAJuoiqCmWxp7KpNytzq1wgaJJnsZFzHPbvMfr4dQmSx3gKppa",
  "key2": "4rQQa87ZCbU8Jh3pncJsAoFmGwUw3LcVDXtmJGhaXzLPgbvdNumsjr4B13RuVGs2hEjcbPDhYE2NMa2KPKycjcsG",
  "key3": "2hx29cmZcFEmJz7eyB6LY8VWqu4yjJ8cZMT9C7ep9vTZsfZ8JnsAFCzWZBucAMF2ag7RGSVFV2RY2ZDNpJEkXoED",
  "key4": "29yQEi2FwTLBWdDgH6sFCZCndmii2xhhrvi1Ce4XnAJgvfh5Zs2BHJVC7wJYZvuRzrB6V5vPX2Ap6ZME4okRDU83",
  "key5": "4y4mY5XBinHRQqPm1MDYMt3EQ9vJtqnMDfGKT9AbPx99wxQKqqCDKk94JBsKW6Dq8wtgmwSrD8QD1GnBJKaamdsy",
  "key6": "3cXDEMb8pngrA3YfARchyGfaA4jikzz63WqcEPH4rfhqY4t87trhh6xw6LnR5TFa24DjxvYWhfXQo2m7kgEjyWxG",
  "key7": "5BMxxS7jU34S16ft1yfteCycTuPLGgtxRm7TVFCKzVWXJHPmUymoVzmtFL8hL56VRVQ9Ao5khoaZfiQDPAhSXkSn",
  "key8": "ydcFfxmdvwSeYhpShufrBQPggVRAgrxFJ1wFritGbKBwhC21UZja6rEVX8JGErkeirPnCd2WV5DEGiJ8arrC9VW",
  "key9": "2gTeGj844qcTdatB2xEK29Tq5BYZv6hbWs8GSBisKhYgZAej9z2TcDAqTBK8qoXxUgiqS4CkGnE3avAQ6V7qA3dp",
  "key10": "59VC1GUsyMEVwk51ny9DEDDQTyTSZcu4owZXS54j77KTFKSecr6brGa5YbjnJwZKLzyFs5yZuBv9Zhrj8xVBMjiE",
  "key11": "5YRg5fXu7wmsmh4jfLmeovdm3YbsD1nG899GKJGQCrCFAbMEsBrYPrvSst7y5EJ31Cpnxm4p9NLEuNY1GcT7iP6d",
  "key12": "3Qbraf7ov9bvuKUdp5i8H59mkxYZ195LDUYaxAwKHLBzEgQwi1KrZd5mV8km4RJLRwtStortS9LTTmrhypv7ZME",
  "key13": "656271TusZ1WxHMTxSmW6FAvDQmyvQiAHNKsuj2xmrMbfA2smcWY2R6H64aDhkiot3L9fYaCXHHJpKrvZEN3quww",
  "key14": "5cMoBpht3LaHC2fVR5Z7tsxoKUNXY8n4BL5FCWgqXZea7UpBJNutuA5FA7CCmJt6FYR7fLJdMxTLnacJEd2u4f2D",
  "key15": "K3nXcqH83yrexPDbkrrmaNpvVn2pvLQSPzuwsmThVNtQisqtfLFcLvYVHtc8k6HS5xsUGjKowXcJvP9dtiU4Jw7",
  "key16": "Yb6c32nVkbJbi4FXZohBmy24XW8ihiHdiTGfkj63zQz1BxudUDEdug5xgU7xsFtSF5dEiHYN3x6smiS9JuYWemk",
  "key17": "2Pjf3cem7jxZQ96dJ1nYLNNYHCQm4YxqtY8WrRZD4xxijMRfduAJmWUtUGtpV44RghYUv89JAdZ5NasMrif5rRy6",
  "key18": "3pPytXUefcx1qJibdNhxYjHoo2VAuetsGbaUJMNFZECedX9MVmonijcDuXSDiX37yRnSSAgMyQrvFHnHkEwPEqbG",
  "key19": "5Svkj4GCaLbMB21bbgvkjZhu7fXqJuci9L6MkophVL78Z7RfqTFZSiBfteH5qS4PqbHF1dQhuqvpNExyrVJWW59H",
  "key20": "3poLnZDFNJFAttecr9viLi9HFLNAHnY3StQpPgxBs2irUDNUZwMCcDLemR9G7JyQZLbVKfXNDQ7saZu1vNExDKvB",
  "key21": "4vtKY9ZopiXgxrnj7Er3Dsr4CL2wRx28S6RimSyBjdwCxkQs2wqtHMRBFX4hACTtLKtqpmfjbLdUxpQrquZuPJ48",
  "key22": "3DpAUXZwkC823cDLhnMW5cceuv9Bo5NywjMUQ6yGJbofzVCCQuNNdnJwFG9UNxHjJL2BRhdbQeKcgmGNhmmSG8R7",
  "key23": "2CF3fSUGNQiWMiB5tB3zX2XSGgoRdChL2RsyopDmqc9UP9ED38MpFMMhcLxprbUYxxEszCc7ZetL5VtiGKjbwVXS",
  "key24": "2Byn2q3bdFwJopnnLKhu1LphFaubJbh9emY4df4ZjBZ8kD9TyqxGZwZoG6y64YAW3s5DMhX6ZVSkf1hFbAVykkN5",
  "key25": "2J7Be5oe5phmfAU1r5NqtTKHsapAn2mtJufSpEcFJAPimb4My5NTZJrZciR27HDd3gbbbq4pF6v2pKA9zptQYgp3",
  "key26": "5iBWpZgbw47EXLuGymR7cNcP2DtiUMVb66zaritx457DbXGhGKY2ZyDNCn8EzNcCDJhcdchzVNous69PW5WmcqLi",
  "key27": "59htAB7FzNzvS5U5cXSG3Ast8izFsCWUUkT96YPAw4etjrpi6jnBrou6Fxd9eAn7DBc4Ux8HMN4XkVLZ1PaMwjC3",
  "key28": "4Vkrt11NDfQirEfXemmLrHfngau2ftJzHCPeH8aLkp1Y9ZCqCrGRLshQm31LSPWac17RnEfcasNnWDMa6Y6R931a",
  "key29": "29Gc4xVPT1geTirLp1ihSAxYyHgF4gmgA1WLkGGKpkiJaz1cdRgiJqSCRA1RQuxXwryemrjBx8idfWR431aK1Ldz"
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
