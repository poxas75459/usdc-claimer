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
    "3Je54b6uPyJLyhYqnJRXELvqwYTuDAegV4C6np7uMW3tSggJTPW8JfXXwS177tqTdrW9uMnjxVB8jLNrwTguA1m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AicEcyndWmRS4uZvfiBcrp5dibNXRr7v4q4haid2Rx3nAYXmXyi5MmR7bcuzLNjw88WeD4dUCUWVm6Yd5TdBSH",
  "key1": "5wLGtzKZv9ua7orDNJSzPz27rxMFUkjrE2HiaPgDtWjM9qVzBvANrj5foemFqJG6kFCk7EnemF8MXyF2MSxCPTHu",
  "key2": "24WNP9TkMrJptLTdpW6dEMXj3oaFaL6d4AJpLC5HtoUeMqHFfYxTHCRP2WoDWLFN6eazauCycFeuv94EDMw4UBFs",
  "key3": "3NW6atcePoA6AWRJERsjT3Lh6UDh3mkcZWKKDxbgxsuUowytGUY7RB1JXhniN7qMsv297xAhoYJbZ5hEtMESobmE",
  "key4": "44w1PojdR7UffsF1jWS4AYenBDBKcELVizNAZrpYAKrzFd5RFLGzTTS4B5EcxZepm6756JR7dEkTheG839EqdB7B",
  "key5": "2xjrDYDc9BEZcXH7gNLwHj8omLgc1aGEQSE64xShPEUVyjwqbQspXmD4wdopvuT3M7b6pJ6GVcD58uuGfeDE9uht",
  "key6": "4hAswXfMsp2hV22tTR1agNMF21MdMCTeLj8VMw461orzNKGipp98WFxWhrC2eR6DKsRjD7ARQKuXTSas7mUZbRGw",
  "key7": "3XsawYh4XqS7DJb7sYkvkNGZkQGHU23d3s5qctUgLBYHzr8V6kKa2WLn2HipVdyJyHCj3QmBmgKfx49nqHvJFH25",
  "key8": "66hWSrsV6qerW1J7MMfZfdppgsp7jeqjSTS66hFn517NJmo9cyqirC8aD9kGYwaM6zMfn5QKRiERZrCryaEzfTd6",
  "key9": "TebSe8y4Y97hbgzxbpv2iNdFdGrDAQpkFPpohEkc9Mwr5z96xZ1kDkb9FEewz4a1YSsDphvzop2Wgjp5e43L34L",
  "key10": "61bLW4XphE2Mcd8RdoJooqBkFLd1dKRf2PDQe4o73G8D9FPJw6B5ZED8ndJYHQcPjyVnwbMTPuJMMSt7oDkzXreq",
  "key11": "2niWWNZSLo6pjcX8QgsptsJj74ZHsU55f8aqTADbUZaFcfvfenJaLbiUdWMi9oDpj54SfJE6zt86e8ppKChFcCPa",
  "key12": "4DKEFSw5jxY9QQTERguiEdWE47zt2zzjyF9Ba8A32rky5AbBG5FtzMzH3BG4ze8eWvrQ1sn1fyKhH5AKgooa5qoT",
  "key13": "4QyYG5sL1i8zCMU6GEcyoab9TSYzzXhWNYdWvS2vtq7tqrwQLR9r7UHz5QCvxP8pKxuP6CP5iMKamTtZ8kQcTdF",
  "key14": "3KK1P1gPomfQ5QJ5qwH8iZPPtD1hYqJr7s5wKjYfksY5XTsHaTMfYiSmPwGHbnpRw8YWzxvmSw4y925LZGH4KmdR",
  "key15": "5Y9BDYqGPcnDdfo4neDXBAyTG1WheAi8JRn2c6s1UTXLTpDizVTtgpmba3TvXFAyTF1UM9jxUx2xQrZJgd8efWgR",
  "key16": "4j8Ss9thDcWda1wRhqPU2c1GztFCHJdtsnQb7XR7hnWoddE7gq8ABHS3po4W46n3TRz8hJCEjFtFCGW3n5EChamj",
  "key17": "3TP2wtcwsyALGkkRFgxkk1hhco4QgaDzqwmDRvkSWeR5QX8qabNRgyEWuuNZiTFwnx1PQJbhzyxVDYebCmAsQuME",
  "key18": "JGMfhqz5biRH3ENtq26iy2dFozxZ62u8JyaN6pXYDEk4WXVYhY6HWimTVP69CTUnykV5cZSubeyVV3WmbzMdPmQ",
  "key19": "3ZW8V3beTjtZVPQ2rjkT37ijJWadu8WdYjUUo9XxesjRHSehM3f99ZXsYeFWrchCPUX11aaAEbNqAVqR4mkKngSY",
  "key20": "62yBbS81PSvstxhyXkW7nEWcQmrmEWKLV1Va9vfe9TF6HwEEYa6YzfxsF8pJSwiF2jdJKDULrKAcMKgUNo7WGQ7V",
  "key21": "57d6PcKfy1fZ8d8VCmDVuZj9GbZzn6HJevH335MrWVn7JTrkQyTVyPXx8uTxB2sHNky3Y5aSRsVAXXKoWUsQVjSr",
  "key22": "3QXfCZMCgqt6qXFfoatnmgDosTVijSaxhyvsEXDrGQ75xwiVXGZLTLhC1vsD61wT1AdN5SLLmjqAhckz6AQPamnj",
  "key23": "4rDiC5fJnATyhxsVMon3gGe52xpuRPga625NztLTeH76idHi5Sz5UPZQMofuCYmPgxLoFQvvYkjzmJpnV2xiXreH",
  "key24": "37g5zKTfMetBQ5ABRX7E7m7wjtu4VQACDy2RcRLC1eL9NZxJ2z5wE3HUgpMUR4uMkUPf6WrwWvx5vLEA8h4eC2Q6"
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
