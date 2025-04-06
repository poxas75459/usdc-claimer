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
    "4NA3SLLXxxTHBgn1aMAYjCSyrXyM59dQrrvSQHQsMAV7PoS2x7tSP4sunTSd49xxf7h3QQAzDRzsnkmWVL4eRz4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crCVBLuEWwY4EnaEPsf5LTRZpwpboXt3hYusDMcKKmatTui8MweskmnUbTayD21DxkE7bnLp3T63LphfJWF4QLV",
  "key1": "4eFJq6NAfGw7qscKfpGQjsUUKj2tgyWKxx6BYQAQf3czmic1mutceMErCpgTQRG97rqTpewZaDLLELmcbQGdCvva",
  "key2": "3DDm7WYuUaaBv8qBfbysKmqAaDXmGj6UAcEFNFsFZVDHu6ZLn51G4MuJt6VTr4vnCbY8tuysEXyiAbfbPM9DNEFq",
  "key3": "3gw1H2F77HnoQ1XLuWytBaytFPbqJ1GTTZiZovt1xPtGTn5Q8bujHkMFsuCa193Tr8y6rN8VHYmJFRXnon328Jn",
  "key4": "4QyqekT5efcKKfDZbuHsLGxrPsgpQYt1yBQERsx1ZuVjUpv9gUivamqykAfoDy3k5E4Qg3nNuqaELnHPSo1HkNon",
  "key5": "4VeTkSeQam6xVuCKSTxvLQiKr69QJkixnoiJ2MNPDkMJc6hnonY3zhioxYENQq8EEbaRGYpWwPrFRixfUdjstRSb",
  "key6": "42gU14kSyFYhTGsjTM6PsEtuqwDfi9fzixkVAxjaZj4TM3kwL2MDbeF1S994pYhAxwSKSAjMajCuxKHziQdvMsQQ",
  "key7": "ZJhutd2WmgVSZF4bobvtuq3F653ZR64XSEWYvPmkRJuMaPBEBR6XpYBGfzFzMMUTYkGEKrncrFuEm8mzZFvgttp",
  "key8": "4mHjKSWdmVyxHHkqaSeTZyWn2BLd5nf6xMdSh68Kuh4Q9wG22sh2hc4dPD6HvWCSFHBp6QArLFW6h1nNrtuedRz3",
  "key9": "29VcmqXqVvK2xxXXJzWYrgPPcRzrQuqV8QFStg4zb5N281wZQ6Dfs4yvM6g29FfaiDvGAoAwRYrxB7RATbmRxw8G",
  "key10": "tZoyXadFVC6BbxKQ6rh5LrLSRAaAtqdM8qbtHvaWbng6ZNM3qgAkdBA9N7zCDA2xhGhQCdUZpAKfGVMTxbcB3xv",
  "key11": "3TbJ6XYNa2d5idd6z6zSujyJ8uQgLycPKKU23Vcovdrkw5yVpD96FsaF2Qv2BZoBeE7yDHjmaLLPof5aKTdjxA1N",
  "key12": "2s6SPPyNi6dsgHNwJ2GW2ZCFCQxCsvRhJU8LTAndCiAKAonN879KEqesSLbBDmPg7iazY4MUMEy5ocxsbnoww8Kg",
  "key13": "4hHJ3znmn1PHnMTMW4SZvZgGwkVxDe5SfWLF7jqEqWhoRPuB3HiqVWxFigNrYy14Ph73LRrCHWjKzXnd1dywLQWc",
  "key14": "3Fy5ssL7a2tXJmY5P9UFBQGMjaCKFNL7EeGWDDeELvbH3BRpgX92CNMHdYyuh9VJDBBTau5YVLEgLPBRpcv21cgs",
  "key15": "FZc64zaxv67K61ATTkQy89Q8VZc9ScJJvGe2VMKmqYLHnKukVB7camgJHj19PA2An4jgCVDmQ29yeF6NAZ5HqUi",
  "key16": "5Zrudne6xGXmYTsFkeUkb13CDfNrRFjhCkdCspQokEQvCHm8uSSd1SYc6SqoZjWmAXxWHYEfjce4fRro9wKqgVRi",
  "key17": "GFGdb5EXV6wqJ5WhcFsEZtpS3hDxokE4mYAcMTcA1b5hBcByDSQ2pAJiKUwa7PDoxSdAct5Lc27rNALtxJEpYVe",
  "key18": "43uH93u2HqKPiJtnGW9ExTTMUEPFCta24ujZ6KqrbWcgp3Jv4a6bk8waMC719CmA2ASkq8ys2G9Qg48KfmVwpb1j",
  "key19": "3vXPNhasLfX5j3FytVNqzeMZo82Js1RaKG1xxTwkyagp662kUzcSzoDNyX5XUTYbM2Q2Fo7SyRFpD6jtbCXmo3ZL",
  "key20": "63QUdFybYSqm1PHq5hdfGz9cVjwsPnHhM3qyS7Ypk7TcGY1BRVokoN1rQPkriSXeFiU9eg4AXDhNaiPKm5R1VN2G",
  "key21": "43adrZUrfiBj7WgZJk6sQSY9nKtCTK5FpDUs42aqeVLndvQtUdfXuTCsFzgXxSHiYLfhcv6acGfkP4JZp4WDKai9",
  "key22": "5qB77q6DERHqr5JSnfxPw2m5stDwnMAfFLBssZtaWT2vjyhQHAn7Fiw6GnrMjBCR9RKBN9Q6LH5cKs2cUxv9Stu5",
  "key23": "4w7Y5fhWbevYJ9rfF1Y4jPgyDvQfVsRw9xz5Zx55edAaXNBYqB1GuM6iEDHKDiTeLu8ZSY1tCdvS34rquNDqqq3Q",
  "key24": "2FrpYjVmo1K7TUMAsa98pVnhdvkT1X4vuu9EgHLivPqBzLbzzW78xaQv8ZZ2rEgya5Gq2WdyK3zjJjYigLJzTEc4",
  "key25": "2PycM8ZM2CWznqvbPzKaz9aJx1EgipeqUS6SVVfBnY3rDHfPbTioRqy29LVeHUq8sWY8AZQzgSesfH4Vm9NggbB9",
  "key26": "tC6Yh5PKR9n7TxgjbswFwzQn1fiLuC5qyWpi6W3WqRo7byTvdbEzparBrMvoLs2XVVHwTgPNvASrchxZDjX7vE3",
  "key27": "5pf6SxY9yKdMAVhw75wvpm59C6gSKzBcN19ropKEL3wiQ8EndHkSatYN43hY6v49RiTjT4vWG1upxPP13PxGdwB",
  "key28": "3fFQ9Eb9V2f3CrP2KQa1AUP2Mc25YsgvmXdFvMsdwTVpN54RwWSpBauP9bhmPCczuoiD6CaMdXQCVhM88AY6hhoN",
  "key29": "5aA9RQQgJ8a7VGPQTH6cXPNPyrcc4u2Qco65gDXFPNicgAtsRNfT66ZfaX5szNF79pjsTT82MruBG3QaVNczks4b",
  "key30": "3ZFV4ZufSKkDcV1WgqDA7XRqRfm44BsD24YZmV7HAD48yHUwyaHFeYcsWtf5UVHtDG1SgiTkurjdH8RQ8NjbsfCq",
  "key31": "2fh4deJbHgmmBrHPzqtBcQ9ocsY7tRqYQmoaS5B6Mt4fZYnj6zymLtsMidtKJAFZ7ieyhbsZc3u2vi4v7M8xPNiH",
  "key32": "2dQioTdsHdiR3fga1MNRt8gX682nZ7s7cgAWZS8ECWXsWm33eaRwrVMszDGneZsbfZHQaGHbzM1KJrcE9SWGQDY5"
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
