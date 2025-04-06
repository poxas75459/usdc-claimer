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
    "r1Pk6JT7aVK8rQorJgiecXRs5hxeSNHXQ1gcxZDWxTkXfAfWKSzzYsYZ1AxXegHo4BHAZkdhG8yWPetQTiNZ4DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SA8kHoKpFGGuxYJdDVoNBmDpdKz9KAUh6i6DMZeJbiXjnCaPWkhhh6hzV9qeGHECarfi8GkKY3eWLcs1GBHeRVa",
  "key1": "32vmoxcMhJXSS14ewTRTUBzuUY7GqFWbrnHe6yjFAByR9FCpbA3FnEj3yMd1qnv36eFM2u9qRA6Yc9U6f4viAZXJ",
  "key2": "SGTfuW6KkRFW4nqRgA8NspQe6EZSr3ii37ZFZ4mwJaJvp51vFAoYRzGKidJwFhXCz8Ctdy6ZPiesa3fQNRDF2d2",
  "key3": "4C9JJgiY37SfwF1obMqRm8JtaVmi9xko2ZnVeYLMWFe8cEw1C7JVmJhTrTgCNV1hvFXd651kbVQSYNx3Sf5TzxmC",
  "key4": "4VRGJtfiMVqk39qWHm7VNqKrLioNJhCEDrfyJyUem1ocnwuF6AoT435oXddB9mXUyUjytdT8wG1j5Twm9Kfdoetn",
  "key5": "4v92hdYrTWApr6vZKVkABw5kgFVjb6iLMfE34KUAasRsaY6U9EYcTqEVMKxAA9b9YMbb2MHnjdfCMoYY2dCvPjJ9",
  "key6": "3N9jLkGJXLeEMNANF318tbRARBkLqhNaERpZVxP9qnB9HuTp6FNjY9Q5FSPV3LaKoifhZqecPn9ejaRymyDCzz19",
  "key7": "q4ARwkZTHoUyda2oT11drKbQPxxVWaLAXqYSSMzsUuuHhq7yqA38T3DYRje5noZ5vxd9v9NYoVicwWH76GZjEbA",
  "key8": "2NyvmBChL2GwhCP52zehfaUCXgZp5PNzSkxop7buxpauiK8StuS1spBrdkX6qzwWEA6fc2hsquBPBcTKonAtwqf9",
  "key9": "3oDCrWUy4HZNm3YY1kCJ66vV9zBgHr6GYw8t1XCXfS2YhP4jzQgtFn1mAhAyTeDy1jPNTkSC1bc21wpqt7Z6QukM",
  "key10": "RsNpuUwgr8P6XiMVYYfBdMmFTfGcVVFQCTZWXpmsW3VA9rTNMekDo1bFbyiBDKNJVK9FDjpX839CPmjGLC5FzFg",
  "key11": "5Gf5KL9ry8Jz2AYsMc4TFfBWHjeffiQhFPsizYp4WEyf29d5xVxnHRWbVSei635bJFVveK6YtZ9nTr3deMnCPWXs",
  "key12": "4mnPb47L16wxAjaH8xD2vCWRYu3HCr4emrJHD8REsdPD4NHop27H5viBpFs1tR4wXNTBJuixWhDVNH3UusMjr5w3",
  "key13": "3DS751dJ78fRquC1FEaBFKyNrLjcHcHoWmBSeK1vViy6PgFCfJZ7TLkxHmbeUFWcuD1in6p3uaxXdg7qJUwtJLXk",
  "key14": "4LcousGQ43FxVSndjniop689G1WX9WwxyrNa1CkCFLt3WckYaJwVYJNadd3RetF13HBxzwd8DsnwmL8z19tEtdkg",
  "key15": "2hQP17TmX4nziygq6gCNcT39kBQJyBfKDGxArgBPuC4MgGGL5qgrgDisJWdT42DEpNbmSPW1cUvV9Kh9LTUK3LnE",
  "key16": "qZVxUz3ZqCCSVeNdwP1L6ARRJJPyqaQy7DCLYYxoXV8uNgpawiAEX9ZGDAE6tMfaNysRk3ksGP1SfZkiHHJYmxw",
  "key17": "2v3VKWQxWqMx8AyXW6sMCLDXCoMAzxJbPv23JpMTBoKRm9uYwnz8L7h5Wd4zmEF5Ch5eSDWgpH4EieyKaiV13m5W",
  "key18": "4ja9bG775W52xwigJkz881jhG5GktTKcxiwfDftLT2C3rr4GQ6RumChP7eynNmHELffGkqB4Wriy6daZQcchmASL",
  "key19": "2NrzY1qtrZWvwaYNPG1yhY2NXmapkxvUdis3kPnb2ajVAEHdjToCVycc1aWXedxq3jX4M2ZtgUfyabi8uSFh8rZ2",
  "key20": "34n3m6GrmD977jLhKcgrMxthHzdAigpi6KB2dkSzskLgHuivGqzXNSby2NX3uPPPjVEok1Z8Yg1LEjTLZaiUpmpo",
  "key21": "3QfpdQsNLz7b6hswd5JPX2xjNm8SEcpD4RZ4dGXqxmqWnbT9EyeLxuVuPfizhYoUbrA8K2suNt4xDFtD7foxYNYA",
  "key22": "5HMLNyFvSVuAKb81vFrHpdaQsakWPuQQfa9BMv6DfBAMiMJnj4rSfzFLmnvEhm7DtZ4tsdbVTewUB9tN3yQ8Szvn",
  "key23": "A1LuXUuvY3w9sKRyo1uRDLyeCnLz2Fi865ytumKcjQBBtghja6L5m25nRvgzvsULRhMzZMBmz3Bu7pXZz1Ktax7",
  "key24": "2VKt5AL1FwS9gcywFof4Ds5LYbs6uhW1uJsWoo4dNhCtHkBtSNQqCfXXmLvmFuVDaZ18iTkc6awxkDNgM8gma1kG",
  "key25": "gar5djUUVwsvTvwVuVSTReBrcHthoty5jqfaBLUpW3ZAgyiFYoJkg2pTpR7AeT1zSvcrtws2fnmNGU6y66a732d",
  "key26": "2BBxmH3x4Z2W7hbaV3BTCmcbCinhYygSL1MsLhobMNrqCKTZnzbkLCViadAkFHHkYmwegdf6FBboueisXCf46jcA",
  "key27": "3zbiay1FAhrY8oMuAtngtatnBiMKAKcjtiE6WjWLbTTMP1tWkbvK2PkJCy9XFBU9YSK5yaN5wUQ1CpUKpRFUoEyU",
  "key28": "2ToFCRFGPPGo6KCkz74T1nzCgykYDdALvGvG6fEa4zcskmjyS7ihT8BWQijWHRa8n9hU1GufCWjw3fv8HAxyrTSp",
  "key29": "45RBkKxkheM1JD1LXkBWQ8h3c3Gnpz8haMsBCDXp6eGAf3vVuz1m6v4fZSNiXfDvsnsLBfeL69atQp3gBJyJqSoE",
  "key30": "2Yt3E9Hjf18XNoHkavStW24hvS4ARfEfZ8YqgDUPi2GemxF8bQ629ibUvZ98uPLGPV2YkqLWBKUJvPJwN63h8i2V",
  "key31": "62hWKKC52uCf2VxkSDNszz7uGmF1S43DVZnUmtZR1yViSaND6wqKePuspAqa5QYSkn9w2dETHQdsQGdZMTXGeRFv",
  "key32": "2NL9s5kXuAc5FT23FvaxsZWroEaf8ozd4GDtjMgk8iXXS5vRCutiXpK1jzC2UzoVkJ9x1Ux8gGxBVAcjtLFKjcuk"
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
