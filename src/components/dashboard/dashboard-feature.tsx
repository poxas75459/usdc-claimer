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
    "2Nn68Ym4ox1s693cKmhx1v1YFaa1T8rpsymkqCz8JVmjjKMuFVX451vsdFLczvWewDBW3AyCTkTnjwiUVjfdEQBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwrqqvSwcMSPv6uVJZdrQCDbNq5ubb4AcDg9TeZnCT1hsCdEX4tya5AShxhmzdqH4QAL1DtPt9eXKyWWfjA3iTg",
  "key1": "3nvG6KXtMTzD3QmdqQSf3MJz3fYV4tGroYbkcEpvEjvfSQsT8Kof2Htg1ta5Vaz7AF5itge4fG1gtCNbFVsM1sJ4",
  "key2": "2kqcTpUeWkCuLreRiVt3vm78Fxyx4B36k5L6fXbt2oi8McJxxmoHfXJwNi5TAQtTnj8GksbHbQuGs6BqqyJYAw6y",
  "key3": "r9BaKbFYQkeMfZSn6vghP8ojWmk49qiQGcTFqqJSQ3Q2M2wQL8vLwvFYMC1rQQ1fbnp8eSMzE1yGu4ZaZAptgYo",
  "key4": "3TDbMtY1w4JcH7SamCcQ9r2R8ysbvjD4rcfTnJkyNGv9WE33t5tfLJMcoEXkFgM9pjrJYxjF36MKVAWNwgs5xy8r",
  "key5": "5XeWCUTZeMywAbzgMWCHfgZXpN21DnZTt3WALA9AgroFTTtAVpyj6oShxDZbi5iDw1UE5HjWZ5otKnDjNnNHVgjL",
  "key6": "2gKMxiV1Xd374R8UVXSY3abbXT6cAov4ahwzofTthPJTvqjj2PhSwej3uW4SGNeCpqnRRSb3oEtmhGzA37gEUj75",
  "key7": "5vjGYdcqbDcPkejMoEiqDLPJtHzGmAxVtfBVwfxDz12R42rY2foHbpwNQLsaghHCdc1NNbFSb1PVzrxgwX5TPHCQ",
  "key8": "5evW95HLo2SLNHH56Q8JanNDEfLk21kff5YpSPbkxchtfytEBkiAu5CZbgVgEMPksPkuX5B4tiiow78acoYA7Fof",
  "key9": "5vbuh8JugURgLGqN1BJAwZ3F9vNyCuj6RfAoFG7jeMc7VxBkGojPbX2XkQs5Uarrm96L6JScc55KkWhbLCpCu6X3",
  "key10": "2uX3EkhEyer2nufyP3HUpRTa4vepi3Nc1X7CEny9chG5RfNWT6VNCYiUzbp9WT1jVXaFqiDPVPFo99STvMwH3KJC",
  "key11": "3erKQiCjHLARpBqiT8f9ci2DYxA5AgKqXWxZqFRXmw6QBjaqxiubfLoZ979c8Vsqy4U6u71qSq1EY7zNikjWsY5y",
  "key12": "qproP3YNsTjqcohDc9aL93RrENZEjMkC2QHPLfCz8Z33VB9rBB42Thu1WxxX146c5vhau3PCHGhmHrmdGog5jEU",
  "key13": "2k2wXuKphJadt7njDs7LUC2MWMf8DBhxfzVcJcomgPvXQ3jwHDo64BfYkEgcW54ufLqu8DCZDYHjeDgFmWGK5HQ7",
  "key14": "4aG3tbcn7S8tNK87SpaSVK6KjpAk33RnsoUpVtwJzqyW47x2dhxPPkewr8yUBDCUmYJN52zwv8NJ5S64yNFT4o89",
  "key15": "9r5YPEKLJfHYrpVcnoPJUMHYYJh5yGRMrpktDjGx5a5cuUQbYTRVvHzayy2e5gcBcYTKmhC6AUqvKAcS2y2zZAn",
  "key16": "5KyAoiuT4VQYgwKY5UinqnA2SWavZBBMbXMCgKJTuBDMorfvm9q8FMSHLmDGKQWLqWhAUc7KqE2hfUpuwvtin8zw",
  "key17": "h4VojFFq5TdyFL97jCePqtJTvELPoHoNFRTj6x8S4fKNcTSScbnjNUJbKDCyH7Ua8aoWP3VBDTnaKXEQRMhna9J",
  "key18": "3t5GuHAeSx2qofp11xuxfXYVP8xnvxr7trhjHto7c6WkASrxmJqvFGNrCv7upnZRX4DwX4m3EKzHKr62HC1G4zX3",
  "key19": "VqTZBhovYHwc1BedKLY1RZPaNYhtqL5VnXqQ6YKpaYXWmapnDbfxPzgoqvxQcyUSEayoZWVNDqutcmy36euFeCg",
  "key20": "63qfK1tkJT4fKQGdU7vC6ivy5ro9h4yrTv8UG11sTqrGGpePFGUEqp2LFL3UJAun7MaGnER7ug1of9v8gMCBGiRx",
  "key21": "256BN13uyg27Kx6brq6yY5qBWfLSg8ipivrykKCYZabVUWpwnMsz6QK59x441wspSELKs1EvoLfMLc7WLgVwzhtv",
  "key22": "rDovFEpYXaRpGpCdxfZnN4ptN8rxb1vydnuN76b9NGf9JtJEopp8aNFnuSLtwAxjobnbNnnVMiVX3nKqnukPuyi",
  "key23": "2VP2CLpVcjjswstp3rSWu12z4q6AeR7J5TZHkF56a9oh562ewBhPVzPY1EzyhK2J3oq1zfz3zAugVGfjgJxmEgBW",
  "key24": "2fpV3CKc6XHK7cqmX6QFDPAjCR4howEKNi651aobPttAeosaMjMmufKUAP83YaXcPgKEg5zXFYZRHvZ3au2ghEo1",
  "key25": "2pKw4wwTKup58wRKbqyCPNtu4oEHT7EzgS3Ud6N6jK5ZhinPNkcix1i9B5qiTpdCkxdGv1MvGqaiMbRT6JUSsXKb"
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
