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
    "3uy7T32s1Fys4BhpAuTR4NeJ1Z8AxR5Aac7edBnBAHBCRVdCb5iL2CiDB27iVmnWNVUsMRHXqyGCh2aDX8H1friM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpZAPR41Mfg732G2Vn4FBMQeq7bb4X18WoCu5N9JohjsyKqL4dJadh8vKB26SXY51VT7PNzfHujxAHhZL1djLbN",
  "key1": "2fFwwms9iZ6piomeJDcnfHe1rGRkP96Yh9cf1G2aVMtKYcucUqQDMvESNcAnRVgDYhwMhNWgrVDf9PLqGTwmuzzW",
  "key2": "5PRiHyQv1gBwksRuZecL1GUz4D3i768JFGponULLa343QwhVjsrc4gLxFXZXNthdSCoznfbd8rkA5zPV1sCTUKtZ",
  "key3": "3RtKbYx6VPwCVznUSJzRiJg7Qdfz1mQ38oTdgpkMfqMs6qacPy8q6e7CwUeJaeTyjmU8BxrQecFX1f5yhM98qA9z",
  "key4": "apEasjrTtDkxzZMeA5e5BQ5DvJxPiYC4PnbnRxPxinAju2ygkVKXBsuprshYfN44J8VDdNP5dHfGR22cix8nCSv",
  "key5": "28Scc55QCYTd9fHTC7JRyXEmcrp3SGCKsoBUWtMVPmdYjRJzHShUuvWBcZyuBdLhkSb6AcobKUsbcYgKFZddG5au",
  "key6": "25U1gcbtHwPB4R51MTo6jGEwn1zDqD26cXf3EgWe8VjLKoD3ZAAeMN58PmZ7ec5BpC2L7d1DJH88soFBi4Ag3Cxo",
  "key7": "cwa8Jhhc9AFjrpEK2GnD3F8gRtMqgPKMEXeeBDRLM2hfR4zrQSRJ9nZMzKKhXaZFJUqNASSfJ7uf6npdc2tyrHv",
  "key8": "5soA3jGC9519SzzAubnxKHYnZcgfNZWDALuRPLcgqPdC1sbPHzK8fDXx6WQDWVXmZMhGe3dEXARrAE9dJb1MGNTc",
  "key9": "3FLrtmXvNjyLv2DGEUoZWzZ8ZJB5SwG3XgEjpC1RaMcpbaetLuC8x7cTRZ8nr96gnAk8fmrj2wq8TqrYbwx7MHqY",
  "key10": "5QNWd82HJsp7o3REfmMEdf6dvNPdpznhntSXeVoBrbmR7oeXYrr1nAuHYT778jh8b9F85sePUJkzJDHjk33D8ZqQ",
  "key11": "4tyf8r7XRYzxbCvrVFBimEsy5SsYW8QSebxWoR2ijoipnPdaaxprwVAgFGLpCqKXWwARryHADYqTUfkHrNBiz8QG",
  "key12": "3TMQRGDew1nYqR7B157dhLw4qMXEYLdayvs27rCJxRtwmc6BLx871RAPjyqWN111Qa5oVyTEWAuwQtymzi71F7D2",
  "key13": "4mcUykGG3rEsLLRfeXpT22s3LfrZkMWuThV5Rvsxh7jvfZFQ5Zd2db9jcT9M3BEgZ2WSh9y16Nunw2S6WGUeLVca",
  "key14": "64rHXMHxr6j35KK2pMQZ3SzpomM5AdaZLr6BuJWJqar1z3iCBK1uStLbFPuR59YKFS8TVc6gUCLQcgvaUPcc6maC",
  "key15": "3CxBfkcbXCaAJKGpfJb1NEmJNv4LqZcxB3T6TwB2x9rENUoVvbXAFye4WQgNUKRGkkNyM8tf926dAa1UiqGdNar4",
  "key16": "2tnsrkJuZkkfPXX11V5wGZUezhMekdjxXU7fa2Uj6qnXBju2TDqFQzTY9jhSDvkLtpiFrQVv9d9kVixH6kUD79Kx",
  "key17": "3RusTP7RgwooZ9vDvdWaddDpbXSx2PAiXfGdfnFhytCxnAZr5B278Q7LTuskU481zsEvba1N48BnkqcGkEaeCG2",
  "key18": "4nNRmG8N7icuwDpYH3TtoLK7KqRdgswQMLNnWYmSVfmiXPp4cAZTTpenJNyagwapWjpB1rf1exrdUDxD7k5QMAKg",
  "key19": "4dCpErvfEf7T2KqmJioM5FopDh98tvyA8ifQMY7nSZEyTtDGzatP3Ruz6pAxc2KzGRXdYqnX4EBZZfFGRuH5nCgy",
  "key20": "4vf7ErQJeVu7f1taFTJ8eTt7H9HVeaQnpoxgKpZXw6gVZ9kjPeVC6n5e1gJxz3adqZ2Y9qo9fPbExwkxvcDT67Gd",
  "key21": "23kgSxYTzxPfKiY3oygqm2uwc2D6mRkS7Fppyp29XnZMgXUK9uq857YLf7uksx9kaf4uWFLQmQ3ALdxeVwfBYfg9",
  "key22": "4tSihBf95ohibAJCqsHqf51y4vBR5f99eUbJbkNYzcu7yFDjisnf3myy9ieBPvTudGJSurpTDzA7PNZw7SucrToV",
  "key23": "5fG1fz8KCjWUg88ctXUEtggzeYaPMeMde87fpQUx8aRdxQiYY5rt6QWzx1yxymU7CiPV8eUYcBBu7Rwh6tgmytRp",
  "key24": "2ty64WMEb86xTLhiS1KUdBwrTw98W3gBbshNBiDTm3615QGnGzNaC16nnYmYcMtsUErxVyQfzgP4MaLB3sfsvGVW",
  "key25": "3djbAgPVVg8xrhanD2vRB5xqWinuDWxN1CMmKfDoE7DiXwwLkef1o6vg1Z6jr3CFBUckuMpvpKNXv5HG7YHr1rJh",
  "key26": "99ryHvbBUdT5Xdbm8g1ri7xTTUQ2FDFXvfQ27dvnb2CCV4DFPu8gJdn8wzf94WcUo8YZkW5MLVbwwQwm1EtrVgy",
  "key27": "2NA2uWGVekV1iNMAadX9s3K5fZFnWdTXv97KV6Ncxq8d5zBbRePHSh8aX1mwCfA3gzLPVi5accwJMSmw2ECW6Ajm",
  "key28": "26Qfg4JzunRWj6sB8DQFTSzU4aGta26KhZA2AGaQ7ZHq2z6Mbs2AGa8D5UcbB6wzTK5xriwA2FEhJq4g9LHsaX8Z",
  "key29": "sWUSjGnnk8LhQtFdZRgWQrMofhhwpgXoXRYD9W4boJpPtiuKtcUTvAgzqYXFHpSZCuQ765vUcsZu4LsuEmS4iob",
  "key30": "2eaUkK35K1dUvbqPHtcMm6wmsuvoDGERnS8ghxkgR6FUjCmuLtGi6f5nUXTzEdNXZwcDmkdHNdPkiaHnaSVEsLV4"
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
