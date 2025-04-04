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
    "4i5qpQaHPahy3BGoi2EJszxyC7gFFmAMxVQfsn4wVnfsV3Sop4nJogw9WWA9F3ULcJS7UUPoUVe9NfaqYUMALiFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Y1EUpeCYdtKBreR7aVEeF281hqTuog6qAgkYzVand7hfmiR7F59p8sA3myp98z7m9na4u1N6x4AkiPdAB2LQWk",
  "key1": "4fPhj6T7DPoCfmXyEnWCaEWtpxckhbGf4x61XLN1qM4ahDLrqYtCir3NiHFNKtBVyWdY1zXziL5Di4hv92Wko2Uo",
  "key2": "4nzu85tqYRWg6kxaYcHkmFuwbbSvCNeCGhbW1XRxZKHCXhxPCCbgzFsAKAULovuZZekNTotEcjacGS6dkRMMvfCw",
  "key3": "3uW3SGDHFHWfDBsnzo3ggDTyEBU1u2X6XttQ1U6os3Bvw6J2XNiafHgdwXfenHcRpg6N2MVBtV7rcF6h3CamWrve",
  "key4": "4uEpNG1zNMcUJXrcNksCMMcBY1GchB7j4EccA779Rc7rq3j7AfAKUXLEvCCka89ZtW3CsHmKDcUSXy1hjXCjQdpi",
  "key5": "48TS8dbD1i3zp19bUjXgUiJpBrBfQgEvLrz8769PSsH6dyYnp72imGqgYAG8Tr245N78hNDGUFbNajkbDZeH9heQ",
  "key6": "3KxUkeeY6uD7RQhDBtL5zfGGv5bC6JqxPGWH9tWqEBqVBDAD5DV7Wqs4nEtiiUi1VknSSsvyRMdVKaenHpWTPsBf",
  "key7": "38XqHSEmoCg2vtQrJvhmX31jUVUESc3LxoQSye1Zw5548V1nzQS4Co7HhPSkggBfEk9NPBynUE2LNEPVqAegQtjH",
  "key8": "3QCWguQy9TXtCqTt2oGfXUPre5va7bC9J8gKbgi1tw5NV9rAYMx4Gv3NUsJ7k8GsSyf7tyJLcTTsNjiY7YnrNMc3",
  "key9": "3VGoGsKhu8RmmWVT7h6JrD9825684iAN1SwLDdDGKVSx3GjfroUqUHbvxh45cuLyNmzBcY2WrxRAMXQLtEsCiJbQ",
  "key10": "3qe8pmfUc4GytJ1gD3t3YWhX6HFEMcZ51tTz5cgG5nY485Vv8EXY8VTbY95E3xEEaRu1FCNmGLWPiLyhSbRRSkME",
  "key11": "HwKgsTDbVsZBaMMzWZq9wQdHPCa1w3P5pAM7Hxk5aGSYE3v7aTD3tmM486SATtgyv74vmGRuWS7Db2enA4MD2rQ",
  "key12": "27GDpgU1oCwm4cdfK9Z4qpxTMxPriwQhtTViTDFiakiisSCRapcfDxUct7AD6D9oWWmtSVS6CmdLAuoPxvE7doke",
  "key13": "3PrFYcqVVkmqY8kDF8adeYaQZJd14auE9PviaUXdhfXfu649XWcB1Y31CYq1DerF124RGULdau2ouzVadC3ToZV9",
  "key14": "57NQSGYXXhPMnNVAAcb25wAEhcK6TYWpdhtzZA3JaUBfQeUM2WiCz7BHnt33Bou8ggPwTRCqjUz8fj7v956WCETP",
  "key15": "2XYoauJgn8M4VQJTWCR8vENiME8nKqz6Pn8cVdNcjZnXytPxZ4pK67VN3BtUCfKgDMzTu7ZCyb9yngHtsDb5RowH",
  "key16": "poaatNf2XmDW363861N6bsSPtcMFapJzxmUxQACMCN8CrcEYbYVqJxnXkNgYMNtuCcaRu2uw2wGGQMPiii1WYrt",
  "key17": "44K9qR1hWTaKX7UtJedNmbqEwcbYHbbnTDmSkDQ8D4y4YbozWxqzFm3WH26PbN9Yyem9UsJ9xsYg9WJotkXMoMJw",
  "key18": "4biHtgm7tUg1Wy3b1YeS2q1CkX39rpkQmzzkgrggGe5hX2n5U4uPUNh7KS3CfvrBQB35AUAxkwf7DnpVcwr3Z7XK",
  "key19": "4SihZ22YgxKENHRTvUHWbiiSJk6S7XfCsLRSyZ17bK39dkwaVKJG4jyjfsDZbbQ1bmyLevCHEyQ2nwVH8UDkZraw",
  "key20": "4pywXEF5qnbB6ek7ZxUMNcfNtFB2LMgPRLkcV7bbXEV2FeSWcEkJaUaig3txheKXaANKuL5VHqNaQ7qCYrJEk9HH",
  "key21": "uBKTqkmAPe469wR1YPXGy3HisqLjrzZifLZhG8WKZqEitjaQ9sweWy8NVPbeWtJ4vYThizWgpfv8fGDbYavWmKN",
  "key22": "3JTzf821HbAB22KXzZiCUcxuCT1o7KKTXEBnaZ9RsH1twYQG8fAbYSkgQtyoG7DRmPSV569RB7VgVjVRNBgSfLyq",
  "key23": "4qDWHtTH4fhw2E2Aizw1UcZVtVLXrD5uhggHmhEQKcptMMoAiXGet8UFDbh8ZqKLnUWTm1TcHMK76QhM8MRKaFBM",
  "key24": "3gVyGaeuWVsGvfaCZuDCfpkZ55H4KyEGhvWXEEPXmjWEtk7y2FUSuogcz1tQnNiG6q7KVHcskapdNerxn8kSmXVP",
  "key25": "3c3C8xXkDLHdKsCoJbs9VLSpgUDmNpR785cnwzD5cTmuE3DLsNvHBope8HZMRbfrbuh4heFLy2ycEJFGvrgKNgPB"
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
