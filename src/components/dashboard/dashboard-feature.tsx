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
    "36w6X7hvUJjpWESZcmHpHeE7za52miETKzV3catxyirkziPk1odSzPWAJXx2dwtbLfa116Dm1YoqA7dw94zYCFfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5WoRpVmnWjEg62TcoqujuTXe65sTPC4Enp46u4Z16xpc5JpjzMwh99cSoPokfG8uC861DNYecj3EgFLYYemuGm",
  "key1": "2M5T5xYWhKMotJnuWLHipWNdfhm3uJFXRUu64GNdNDV31Ztxw4H8zj7guywHLNfEzf8UVNAySJbrjTB5oNLgnV1u",
  "key2": "PpJ9sZR6DE79pHiwUaSMf4o1tEz3PYE1VzSLaNHdJF21tYfot2bLEvzpQBMcm1u5NHSnuQtM5XZcoaTG3ZUnYZW",
  "key3": "UFEpdaumDHjrEBbXq7QH7H2DK32nH2KfguJG6iAwJajKL5MSHGkYU4UpaGgjNEzVrnau2o4ZKjUdHXvw8XcRcqN",
  "key4": "tuC8C6MhgWL254Nthcmn682zmuoo718bidMtvmQv4E1SoZqF5whLEFf4q9djqnm3DahoxtKPeWShQybfVx9QhdC",
  "key5": "2yU2UcCv5h7wegK63azd98VQSoBg4siqMSTbuxypJdV5mMbX4cCAhWX4jDejSoKX1HSPM3U629uYNKU2e5v3K9Wu",
  "key6": "CL5DfWu1DZR52fP1x36G75vLSYSsR6x6gsrTrgZTzFf8ZCfJors4GzShZi9P8nyDpsZqt2rErpLazvwN93tLmUU",
  "key7": "3JomarXBgDUL3M8mfANMybUqQaLZ15e3ZJ1exa7bwpPjezfSwxjwfvFcF1BWGVt7iZzssQYX4vKG8K2vt8uWK5YD",
  "key8": "2WH9ETTDN8fbmZ6anfoFHAm5YHTSLZ4ofNfM5ZWaiSXrV4pC4PDavQppkqEi4111dN52z5BqNJ9xJbC4fxcctQd4",
  "key9": "54pw7AHNYKoCr6dVur2CajDuVgZBMCKgjJJUPQwD1atsZvFsRXjUmSM56nRjN43ZsemyigWKAZSMZXgjdz7MV4Gg",
  "key10": "2jcgK2iD3Q7HajaZ1ycCBWG8YKC8X8tcvKoojuEtrE1sXFfFUwcjf3NFYLwwe3QoEm6E65XkeYnwdmmesFZZ7B8r",
  "key11": "9czDyzCRBrtHZ24cKsC3Mfv5uYcmx5eU5Em5KcwxD7q9RNo3g7JeDyLWDxfAGRqSJ69cSZk5PA9TMexeacj9FRC",
  "key12": "86nGKczDGHDfEuHDA3riVsXawgx1jDF1eeorcL9JuZzn5ynhDZHAi2KR5NPoVCzNgddSWZToAwyAxpZwWXGp2js",
  "key13": "7w7GipJVgraEmHXBPsESvuYvSGECthuTau14mncfmfw1icFRh3jpzXHPMoejwyATq4KztEhxq8Tp4a49JuL3FSR",
  "key14": "5W15izzp5vpo3HHixyjkEmgZKfqkTDBW6JUq5geYv24Bv8tZfFQuSoFGa3onz9AM68q4PtJUpKA1g5FnCN6cERTx",
  "key15": "LwvND9b7Jf8VzQZoFJdBQwrTf4RXj7Cy5DbEwNYzoSdk3KbGwshngZWMdLRqiopCapVCTbJaYyJZK8dYe1ShFmv",
  "key16": "PsfKDeaoW8if8bVGyWECcqcTSL2YFMVTfAkj3yvSqWG2KxRKbfsN97jKELfJSE3rqWgdj6eD3cmMepm4VKDr5jY",
  "key17": "4QAWDurhRvNRQm96LQPkwukhQLUgN4p1wiF6gmmiAbMTeYT4BFhuUyT4zeh86U9yg4RbRnqccV98VrCB2U63AF5m",
  "key18": "41J2Mv7agJdLFbEx7p6MjujiMc2Gf1pwiWx7pZSFL4jD85Je7he7HTrHSwyp5FUpB8eyhLcj9kDdjyJa3jG7iMZu",
  "key19": "5xjXB89csMMGbVDyfWuMtSpRPGKBnfahvWExHqSCenv7mWn6t7bxE4HXnoxoUgdrGJPFynfuyedZZzdL9WSjCcnM",
  "key20": "3B9Khsb69y5LvmNQRhhDTnkB9St3JbjxQdVY28XiTYYNS56bcBXaXG1Qnc8fA4uDpXPXHheerRFXV8FZ7r5mMgcb",
  "key21": "4YguFVmgbM3vobEduUMap9Zc2FDsmRY7wU9YgxsRVgWppqpEJtV8K1wapx7hDHufAn7EoTTNvGWMbgEMwwG9R2Pc",
  "key22": "2jfU8mUu2CWNLSfZBSQr8PLttLaNXxQn1LRU5bZDXJ3BvQEv41zS5upHgQfdwqMjCPfYmax8taXELbiTi5XwHjpK",
  "key23": "4xGfgQJWYS6pedk548h88tSBZ2TskZ3E7rKs26md1QbpFRnZee4cex9Md3CGBXTtgaAY4y9cYEZATpbDCJw8rES2",
  "key24": "mNfeyqhHZroJgmhiSmfZTLak7d21B7HAet1ZTGRg1oLMQpTiq8W1m69Wo5pBbhGGpWPvPU7gB6Q2RcxopiaebTV"
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
