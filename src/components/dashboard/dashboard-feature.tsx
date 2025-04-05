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
    "8guT4eVwZ1gjTYhNB2jLoELHv9CFb7bBqhJw4p1zBAUp21yF2B2Dvc7FENCAGBNJzik8hoJBowCi8YbRdJVuLHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bhWraABnawBLZ6jx9UJntLf4A6AnxzPT9mqBAaLQGndTPgWUDg7vKvpJ8yeu8PAuaZ3Bc8B6RqpnidmbqpDenJP",
  "key1": "2AV2u4z7i6yczYPUppub5giRRGoPP5CXKwJoSp6XSEQAGwZujcSMwTeeucaqEPjc68dd9FTvNbkYZ7KDx4XE6cbb",
  "key2": "3d4RDYkBwLcJKPU64cByVS6xKGpC4cDoBNUG6ChCFeEHXeFSVgSorbgkqjSEcudaNdhY6gdA2RAsPEZ5EbkVeJEE",
  "key3": "BMcPisK7bQbRP1kjxKPW1j68BxGpEWdVBytzeT4hpYf86SwgoPsGe6xTFNJGUtAskvXVh6XbVSGzUw3TASqpnyV",
  "key4": "jN55khrqMFunw9a2c3oEBAz2qZAa68RAPTduob7QqXLywyo8RFuXKswoGh7aqSLTLfemEj6WRGpVZfwGmdqGJ6e",
  "key5": "4nq4odwnjyzWd7x97QTLt7L1NcwFo76jkHQMkd6fJHNCxpRrcw5pQ5sAC599sB2H66iYdNFnLN2t2Tm8DUXYHuz8",
  "key6": "4Hu5V3G2SMw8Z2KmfdDqrDgzXwVYHDCBzBpDT6wsJHEVwq8E2Rv8Fn82zgeZzjsSiZmpk1He9fi72AELz5aQf5UK",
  "key7": "29oPytiebH2BDRTBfRZdm2X1SttCXEG1f5xT8WAASK4uncVAqyBp2BkdRvMp3TWzk29n4iNQLhrFknU3ki7GLzXT",
  "key8": "4788zu2pBZgggRR6MMBwhrKYeSFf2hiUcbKEsSMrZzUQDcrDEyH5YmVBqhMvz6s5yUJQV2noixqsCD99sUc32tip",
  "key9": "4SxXuSQYQsQRpW5iV7h76PPK5QH4kCQR53ZyM5svfGa5R9qrUF8TJagbw4jcHUwy5LsypP4Mv2r54eJtnSgxreB6",
  "key10": "ikF1CC2JTztCXHrQzG6Mwg3zHJ8J1JSAn5rTSYknxux9jVuU2nw5TD1Ct6YemrTSXJMDyzdoPjFbyuDTxXDVSgJ",
  "key11": "75Jy9FAacGJaPMgdeva7DbQPixRhcmMUaVL7KMR56pNDyVo5y5AWCezNprjNn2B3piVrYSKKeWqmaeQYkMJXPWa",
  "key12": "5aZsJrefwP2t3ofs2VVxmdoku79eLKXKG3rAfyapVtFucLw7tZX54ghjTgAgH7X2cMEJydPwqZZwG1oW13m88VR1",
  "key13": "35kHScusbyDe3Cxq8aWVmS4giajLG92eoSVUioj6wcC1Xh4ru7AZaAiq3ZrRt3xPC7Jr19oxibWuw8iqoWT32EVS",
  "key14": "3E4Y7MNrywnu6XGzjYhc9q2DXDNgLdq34Vnh8HdekUQT1BQrthprPhCmhf8kewY1D7oMoTBoEka88uxebJ4YYGx4",
  "key15": "3VktRF2rU6dhEnK8PgdHo1uwnozNzfzo6uyrdUa3rmf4vTzTFAvLcSq5NypgCafSsCYG153mchRbcvNroJe9mpvk",
  "key16": "2GfTdkvydQdg1WUiC71HCtYgjTi77CLsExbEL7LhTmUEMXL15PGwXUZo6KLhByXKANEpj5BUiFLuTTbpsRbsrFmc",
  "key17": "3GAzTQgm7zpeDwwNsxwDunFEjWoSgz2Hju16exBqpP5Gp3tW6YrY9yz8eCiM85Mzn3EU96kW1FCGQd5Lkvdzy8nz",
  "key18": "2DoXXh9RKqjNqr36siWTyDhj5EJ1U9ozNTjdprjR9dGVG4STzGiZPBQ25NVDbcvy1o5KPL5fdAcJo4CQmUfFzBxF",
  "key19": "24MJ6jdQVKNTHX2bxXa5TwzQLyMbRi79xDBj61eEXJSXmPetHHeFh6AFM3KJhBsUyHJRwaTX7Y7gDufCQjU9AgX9",
  "key20": "4rqF4qNGsPW2FhSWsSmKxobkNNpnXgS2VEb8WJv4acNmNRFFpEvC4g6HYZrU1fD7m473CZQUHU77qQvHFBVeCB4Z",
  "key21": "EaaRWsdqY4asKjTSJ1mA4Wgx2vLLvRiibKcdM5Vxsz4VgP5f9QzN8fhdDAfqnecXbqpCMrd88SXweF5P1MHJ3wD",
  "key22": "3DirXemaA8gGmxigZqvbsYkVrqtLpNL2Mh23tmqKBHvRQo8gS3BopuEqEJWb663iq7jZefBf92sdiWk1qsQBrH1E",
  "key23": "2BM12L9xFSKN6s1f5U17Csh5rGtjAFjNCzbJVkWG9eDbipydSwgrjDn6eqEFvdoQ7D6LRZcodTp6PCUUoBTWFQTQ",
  "key24": "3QVcA8XsvYTLRPQC5qvJjhGNYbLQvECHXoftB6Gmg2H9M4Pkpr2TH5Q2qRhudR4XbxsiAZjbUt4hdbZxwxby1vVi",
  "key25": "4cG7yc6ntnLHJY6TpanNZXM5KAdP72vq7bD82ZQmcB1YBBfbKLAGYKfycqqS2xksatNWggXaF59mygjEmzfiRwMF",
  "key26": "5S8DoEX3uJSZsaQBD73MU9QkZHvaAfm7yqVoK17UBrNoUFPWnMphdidNp7bmkZr5yiEVDvf42MDSYuQZHykF2uT7",
  "key27": "2XsceVeLmUSERvPt5fjAqn7stwQVMGFiaoD33bY4LNq8rCnK5zaAWNs8tN4H4LhQGTJoggZYFHurhtAwkfT79K3n",
  "key28": "4fjPXuqeoXz2pJrcx9XBYpoxdjhpPhdZLHAQjBr6eYU8PFCSccZTFizEQWgtUQeCFdrrUfN4vkZbAS9J1F1wzYrA",
  "key29": "4XL7hfMzQZLBHgZtghPeStefDTH6ULEBVYSaU5bMP7a8NRSqkKiWmfcZhmSwmWLFSW8EU4DrJy9CoUeYqRmTdEAf",
  "key30": "61Z3ZEHQYtSNyqE6kQzLyjQwyxQYPVBXU9euLqdQAeNZ3CicVfTLsSScH5G7UXzEk4XDrz13oyS7pQmKu2GR3LCZ",
  "key31": "6kV74rdRDCJP1msUGGRve4rHCqQ6T2TggEr72USeL1RfSWsBVAMEWXcSfPBBmLzv2Zn4H4921BwhiiRJ5eJzNGW",
  "key32": "2vdGnByGy6i8Etf1e4iZJ3XWSwBAG1BY5QvCfhD3tkpLpQKpTfvSdF97nF3FN4EWkbG3ovKJUnrhU3EeY99rcnBR",
  "key33": "4nTksKbFVmbaxcrLajgScLgYtErfchbW77hx7z9B6y3Av2sHcdPb47AUZVj8qcpu79AQhYcAj6sqeHXUbLmFJfsx",
  "key34": "3kSuwXuRDVDLp8rqHhdsxfY8hnDZaZRV8n9CPPbgdjR55SLHrgzcnpwtNixTcyb2m96SbjA9cy9kie4CD92a3T6u"
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
