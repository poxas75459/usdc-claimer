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
    "qUtw56o2TxGsoUiWeRC7X3WBNZUAxcqp8EL4aRqbiuQ97z6C4SQtXHBGftfVc7TYWJ6G3frRD58Y1TSaNhFibHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LqCpnn5XvDJSBhUvGhYUTgXwfUqzCEFii58vKYHYeVh1yMBtE2JiTFjhjURcxNRbiwvrJta6DxH7QHZNzAtCk8h",
  "key1": "61shAyG7ox6rCdoNNSEwy7W1QTyNUNNKFgo1QNgDx1byCv2WSKUF2nYF6yATr4ynhbKz7BsBw4raX7AdEbseS1TP",
  "key2": "33jbfNKCzxj2JS4sPGEGWGM3Ka8jRhnKtTnW1orqmtWwMUUxAY79RJV6mR8FCqXVRRaZcW4VqL3ShPFZbYvYPEtv",
  "key3": "5dKYtG8vKGH9jdn7siPs6tq3E3cHsdQDXFSJ59uCkRth3sn4hEPorc3aYXzMc4PtYhFwLre8TrcdcJj3e5L5zZDC",
  "key4": "5rCVroDtJK7sM39YjtgXMa6xgDMQarfTxg27uMmbDxRjEXQgnc4H5R39MyM1A3fp7SQW5USmVznDgnduFxLX5iPd",
  "key5": "2pbXGHV1f78ycuYedNp1QV6mpuiURoLtmJBHGB5YKuA2mej1eJngbMehJgM537aEWPimDothLqzVdzemTGaCyvkf",
  "key6": "225qWGchWcU9JkCTz4YEYhpAoHfiPUXtcfENGpGqeMkbxZqEMv2CN9zbw7B35R3YoWtDsGAScv2jmUqB2FiLSynz",
  "key7": "5KTAhsuxeSUs3jHduyWp61AZfAPRbNMWLQ6pZpVUinDFcLtrbUSk7WT6ZYmdSSLVjKU3qDctmfD1SxLE55Eux9yY",
  "key8": "HByciQkDQtD6FtoGenmvujmjRmrgPFaKRYCrL31e9VpdhcVXX6G9ozcUVER4n8ZmEq2RwnHx4HcGUMvi5CcGsU7",
  "key9": "5ygYcNca4HE8o4Ftgy7BrSzRdgC6sumzhnK61ZM9oJJfVUjFZv1bodbmbDZJg2gM7CPmf65cTFE32NdCRQNzovpY",
  "key10": "5teJuiJF7D5LRMn9DwaX7cbefqDhyXps3LUn1gZQXNmT6n2KWGngAiMp6Gt5NHaYgvvqJEnw32LrWL4QBAXSWRHt",
  "key11": "Fhqip4VZ6WjbJcbGRYyZLdqNEg9pLXS6719h7h4Ft6YXW5EFUohohBaT3XmSLAML91FUx2EwEz8W6Hk5jZmVez6",
  "key12": "59ZH2xtuwicfPzLnER9nJBa8CHEygLC75vN6BcVzNUoJbjRGMCLnZZLJ4FvSynBmJBx22ZWRQcBARjNagraCyv54",
  "key13": "Gdgdt1Xd4Tfk5dzdTPgv8octybosK32H2HYfL4UhJbh15xyPT7j8YbYJzcZWPDimwnfZ5e6JQ5JgPM1unKdsdNf",
  "key14": "2MwbM4aJqDpzfEps1X294DQuUm5rqgCbWUEe64DLgkmR5BeqHEjhtEeyyp48B4bWKpW3bCv9gACvmkEsKkRZJCQT",
  "key15": "3mZ2jm3Mmw8VdrBC1tpd5nYcnkHNHyDDFrFrdTsLk75fgmNpXTJZxFVAiZXdzxvnVPKuPUeYTVLAksW52WpkCw8q",
  "key16": "CftqJJnQdmZ1sPj6w2MVeFcuin4dagzbXSVqCbkKQdXKSxb7gxZqcnKxqgzhUofU5YHev52Ki6fNcDrdnA7HqVN",
  "key17": "4UwFg4thVXyuhGtGS8Et4ziir7FyjBS8Zt7e5g3fbGAoQW3jHMc8ccotY8M8BhbKKMHyhtKZrn37sjq9UaTc7FLH",
  "key18": "cqspLPfq2FAgoiU2M4KwEMktSa75Dn2RMWQTdK3paLcd6SqZZqbTBMMxQ9hLf5EkkUxiv9WQyhGcK1Z6oVZeE6K",
  "key19": "4nJn5c6A3whBwnsgfYVi1MyBe3vpbr9DPZmEfWaTHzmMRFsUZ4jeAFEW5kXofTpPtVCHdZmCLeqW8T8QUc38z1XZ",
  "key20": "58Hn9DE4BwzcbLpJjB1cPbkoFe9cN76T7Muou2VR75maznXRucJD7MmjYe2jFzKPuBR5jSwoHQGwz3CFpFzYGmaC",
  "key21": "65NtRpettqgeBW86HPS35UufXnMSN3o18HVvHXHoaNv33wcx7ofty28tDjYcVF8BBbkfKTuHhvRR5iwwSz3VjG1Y",
  "key22": "5gkqPNaZhCxY5h2eVHm9HXVYqLAYkoKz64AHZjJXnHiWHn8Vz9ar86jRg5Q8JZaPyAficVQ8GZDTreh3pNepqdjD",
  "key23": "TNzGUfuutdAjJ4ubYNzxLmx9FSJNLYxZSwZqJvtJevXQkfjkyQNu9YoWgeJF9QeLPLznYNQFh3eViuE5skPs6Xd",
  "key24": "3UjMgSQz1ushsYz4SsP5Vm5hF9zThhM1Bxct9gb1kebZjWoG9LsGm8W3rdue149Bu8sf3eCyQJUFc5Eb2QZNvtxq",
  "key25": "5F8jooKza5ZnkAoAFnvHA6wM1b1Bntmmrpmd3B5rKhi6mP8DBzckD79pbVSHumnbmHoYjYqEj3aHC9ELyWykHEEQ",
  "key26": "4dQ9hL38RpsSpddzxYgSdVpgnxqXkmj5ztbzWUBUvSJLf6T9fditqpxLZipZgPVrc9vSuPh6fR3xbDcgAPqFBSEG",
  "key27": "3eB2pTzfrXGrg7xPbVRZL2mi8EZAC6scmXqP6hpjbjk7RhEJNjTxFJ1Nkk5DsGugzBi4cCpcU4i24gfPSdDX8rmm",
  "key28": "2X21tRHR2kJix5svs1TvJReoGkby1M3hEMeR3TYfJB61arxj5APknktVRsWnTYHjqD1HRQKXYDiKaByJnUXaGMf7",
  "key29": "2K68CyRhdRp9axnpcqibRXoqqLTMcxJU8p6cdctvATFh8ryu6KEp8FgFFPkRwv1ZGEx458SudFirYisoimdabSCi",
  "key30": "42c9NEATgTYqcDh22Q3LjnNcjoSguq7fEQnCbdeAH3SmEZNsKjdaJVq5PQtvTBW9kQu7PMLutKq7upkaRQYvZUhG",
  "key31": "53Ld41fMtZV6CGTBLR49aesHmfGfJMY4hiTkV7VURibEdNhGtPZQvsmyJkzGeKstsvbmdVPsPLG6T8hcEvCJ4X3a",
  "key32": "2d2CXUdg7ku3gx2cu1rgj21NybdYRH8VJtC1HUiHycvm2g1kqT7acgEkRo6kCmtTbsJQrhBN9uTVZgwWCx6mVd44"
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
