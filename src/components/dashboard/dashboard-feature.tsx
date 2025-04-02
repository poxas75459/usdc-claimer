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
    "5R5YBLANAbWfQTda2g7efYDEQhqbgYdcAj2JDTvmEx9WLcGLh45kkh1Yc6BJuXC3Z6VXmknZMbtoJc5PSvU1XiDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VinS1ji7j29BUy7tNoqu3ZmdA6NzDJ6o1mcK7u8tMa8PB2AyBY2YwhiiwQcf48xKWvujzbwXh7QrhffiExzX7e",
  "key1": "5mpurE6oeT2BGiFzRwVqbcKJBXBsXk9hwVdTw6ycHk8mY4tvHn77sZjgPsS7T4yzKQ6c1WwxvT7MY42cpf2w3fWr",
  "key2": "5Xc2rQ4CWYk9X5EpwzjXCAXQYhrMHwyVBubizpYuLuG7L32qL8UPFht5rxwsH8SuWwfzJeoqVq3ZBVyN3FwMpoZb",
  "key3": "WB736WiFiDWBYum5rLeDzzgNu8wH1nhnKvySoz5ZfCSXF7XYWK3fdziatqRjh7SA18AYNVCBikn14WgseioRuXw",
  "key4": "49seMenzPeraKcoL4kLvH5p733jRk9XdjU8ZMzMB8sFaU42gjS4BQbokaP9vzzNz8GhGSZuxgSByo1td1sR83svq",
  "key5": "4MpaESj7d86iN8b4MRUsDDwQVJkWzcwwWGyGsw1KS6pdmRSD4Z2W9pj2cCCHxQG1SatmNcbzfSMzLU4HgwmZpDQi",
  "key6": "5ne8iKbKxjL6JP9xEWfFTQDtiPkXxUyR9kw9WpHSSyFKWQkLhTPnRoKDs2Dkcj4yJyYgvbxk6TKNCFw3vNcUAoE8",
  "key7": "2TRdxhrukqEM1L78ndPqgcL6f6xHC4RVtdC3Vn9Ft4WFhRZeFQhgAgSMkqkWBGo1eatQTbKade46VF8H7avsM2xd",
  "key8": "3ac7rpMXUSxqRk93owHcgKawQeR1VbjPYjRXqFAiDeCQLpVD3vpbDJ3CK4VoNiChcTq937SaUf3i2Bs9DfHU2mqn",
  "key9": "4PLWMd8ub6gUFZdJinFMqYWVB23WHmc5PnAQZCaZhQ9WaXgaG7gJnihUPmzHrd7z7VfKS3aDjyApjzZyWj6CZGMz",
  "key10": "3zUrYPiivyhbkiMFkZ2orBQnzkiAhuo61Z4jkaWwMTMdHkgbgv4HeXMF83nP6j73XtAkzcy9F6UzUJjuLc4v25Ft",
  "key11": "3DvkFAjPYJr8Rbk6pPtySGFfVeZeV6v7wkSDBRKUxZPz8x1aQ7Xy2zr34kqc1EJd2uAv9iTNtpjWZqPo98UFQxY4",
  "key12": "5t8288kWav3CMrFfcBeP79gA2Shrs9txnsv4Jfic6iLFoDNpFGf6VoxyKDPC9dmjeCtJRthHruynPtvzbsWiPrnY",
  "key13": "fL1RqQSn5Hu4cAUQpw51hh9xBP12MhaXEhAVrkMue2m4TBZNiei5vCGsxoQ6uCd5KHgNGcwbmQEhLwC4UgFBPCR",
  "key14": "FGAvQLXRjDCrXRCFJ67QmQMgT1e5CCHxh2drif6pZuGWxg8kysYSQsvob7e7obeA7KBzKaa1etpbkbMz3u9Bg88",
  "key15": "2aKgDu7cxPUmJ7bDwDmm1tqHnSHsLPDykqJvsNTVBw9FaLStwHe1EaBEgZaTwzc4xQbA8pYgeGoJugDXH3KZmVyD",
  "key16": "HthCfN7kHn8rzRkkNUicHAg149nmnRb6K2gJjzk1VjkXcAmXQrRbAN9wJ6Znp3ihk3KeCaU9h8jeUXnBFJ5BRSe",
  "key17": "3CG8hTasyja35i4m3rABdp2AELTMHe22Ncse463XgpRuPUXRLR2EhSJJoPoWsWbPkiBvcGH74v3WiN2hs9Lyt84u",
  "key18": "5mCTCfW4HXGMudfgkn3QHaLeCgbNwAPDcAc2rSGUvQtupEuQVQ7UgVjqWdJAfSTy193DbzTSd9yY7JPXPcQbHXJr",
  "key19": "5Quemn7GccaSuiTrS62sng8v3TaHNx72QhnaCeNU1F2xDiWbYY3GTKc1akcQMePu1NbY2X7tCs4BrxXrQxo943dg",
  "key20": "59qKsoHfWL11ugAzSdwYQtbKoAsSsCZwnaypTTpeenYFiexjR51LdRU8E354DBNYX7PFB2gKWR92Vd6BmiJjkZVb",
  "key21": "ZqTexdhYAbYdUUvUDsaZJqJQagWPuRr7CjdoJDcG119EuggD8oLL7ydUQq4JkKHAsbgx9oRDR4RGNJvpmtUDTxh",
  "key22": "5vGuFCBDJLFbhdV7jMp78KP71JpD7hU3hq1H6jhYNbRsbuCszKuhXfzZxXX6uyhXgJKR5FQPi697XEVQPbzGnGe4",
  "key23": "5tBCP1mjzF7MGW2vcVgt4LnBj6gELbyeiLvoUT4awBNZF2bndnmRuQ3rXbjWiXBxpuQA8G91xYejMhPjKTRbw4RW",
  "key24": "2YWueLUcZ6zVyFR8Sb9X9UrvqVwFUT2RxcV2CguhBCXD8w52Q8X48sDVgNgtwAMD4PpP6KUbCT3HnAU9Uy9Hruo6"
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
