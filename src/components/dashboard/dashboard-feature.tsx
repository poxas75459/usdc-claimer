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
    "2tc8zysTbVvrChp9newTpKYeUV7ap2AwPGjCMgy8gpNYUK3BjEtmzUhPyFBbe863nj3o7w6xYavsB5WBiSp892MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZM7UkMAx1vzAcfB94wXTGa68wowje4ySXCneSXB411QCi2S7wZ5jVHf9zmoAiTYa2sVU6QJ3FZDdArZgVkVhffX",
  "key1": "VA4TfHtf7RUNTHMtBX4CYftEFUJpZwopCBhyNFMkz4gtNC8chT9aFHtaiDMugyjMrzDhWhC1tPWRty24q4FvM1k",
  "key2": "2wSWePV5YwoxmgJ2YVnFSoFuf95PHeAVrBJCLieR7WshCBj5em1XZLDyCL6paXsHpmH6b5t7YHmDHuA6JTUTQP9q",
  "key3": "2r3U7g1gQthasxh1V2dXxBss7X9rUm1H9dVCLu29kVNtTXvBhBu2RyZVTde2wenGZG86Vpac4U4G69aDnzYfhLY3",
  "key4": "4zXu41XddmvDRxuDondBTEu78SW3idNhhyJqmsgpzNkbTMbPxZ9piPXYV21FnrWTWMtUKQV4j3ktjcwNBB5gSHyt",
  "key5": "5WY4KptKTqrdjxue9JgCFUmKmXx3aj7RqLhRz63q6zuASS4V736Weqew3Eu68WopK8B9vR74opoh7J8NaYyNaJzn",
  "key6": "Q6znb4qEYwmG76vt6NaqXk8ySqidSREB2ZeUJnHoLghvQkDr9H3FaDKmu8fq9wx4Q6iWEQqUXEcak9kmk1SvW96",
  "key7": "4SbhHZcBcWdiYnYW5iqGFQwg8TZz4hVB5x9yzh7fZm7toDdwf7aN3QYTsFV6Rfp4LMs8rUkqb7PXKBMjkezkFe8u",
  "key8": "5AvJzeQdhpRo89qQE5bm7u8GyTDTXXQpwzudAtagaFgw8Lh8mEwk721ZAQPyyaYuAwesoSP9DWSrhcMfcS52ePAn",
  "key9": "2ptvB9jQ3zFSZAMq7RdTVmqYhnsECJqFjKSa9NFsFrsEEMvLneAvV7rfyPQY73zXmA1Z8V4AV3mYc5U4DEcXDSJn",
  "key10": "2n8JaE95KDwNMHYHAR21tKo3KuxBnZuF8x9vuhWZFp7qqqV28vMU8FfGM524NS81W6ygB1qFHGJAacUY6Vby9xNc",
  "key11": "3avCYNg47oHzRBpWpCjocVbH1tnPzuyuFg8ye5mKjKbeadjZXsMVHVpMDkqBbtfp8QXnLhwvG1kp7tozMUw5UnC",
  "key12": "4fXUbAZsi5nNHWbEQZLSZEbU43i1bX5yx6HhRJ7Jxy9uoppr9X5D3hbkaZ19vux7uT2BsoANT1WBFWmFjzHQ1zqw",
  "key13": "i7i96nhbjwfKwDJwDNdTh3gSiokfMtotPHVDqCDPzJct9UDSMbwekVB1vf65fqXDMjk8oLDrXbnMaVvGUkrrqJF",
  "key14": "2ik4AdFtRy1Us6tkyCuiYMBPeJx1n81rzrnrUy5GRDTh5UG3yKJuCUUdnt6qr53pf3Kcb4gG6oDL2Fnsd3Go7eUT",
  "key15": "4KWPrY4wdSsDw6z4LKGqecf1n1nbRswtNUnRkPYy2FkeBpUY2D7GEqCBMpgPBF2NbWV9JyraSaMzM8h21PUjy8Jx",
  "key16": "5C8gutTS4pGzmT5WZjSXcQVws2VUDtqvTe1sWFUhCXmeNwGNYritNocejkFmzhMe4SeLHfeyppJciuM8qsmomLTz",
  "key17": "2WzHEie3WBvABCE33ADoKG98uEsLB2AQW31kVDxFKzMwuUmfaYqe4NepKk7qZMXTKnSoqD73MEe7ALiZSVCNGPJ",
  "key18": "5vdKseKGC853whXeRB7nUM5JrHVw8gcNJmArWKZWm9UQ1J7JSDQ42YpbcyYBRES5NB5aswRnGPREMPDppkmKdYqW",
  "key19": "1234Vm52V7A35TattG3MVZFZsCy2PkqRCTE5SBk3GrUYZA2WmddEmyTksnHtTB3kAESSrJBivkMSmkAKRKboG5KP",
  "key20": "23TBVoLnYQwutZVjQV69tq5TyySFnUGWYRkDuJoqxzj8tb7ioen7AwXo1dTLSTe96jfETqrqNzrXvmCD54rkrTqj",
  "key21": "4xLd2P6vy6rxdF48NcS13wemUF6ePrFAJVH1rZgiZcEAbGhTYo9qU3GhWhMYFao2qAw9vehYPFFQLAcWub8a98Kr",
  "key22": "CjMapNBS8KMuX4SgFogPoQ24E7adNVuPfCH5wXFnTq2qym8rgDci1Fz5jVZz9peeACNK38icfghvgH8A6ceYeTa",
  "key23": "3qo5R5FjTEFAxaGmb8CepxydDY1uY2mVus7imG9cDCsEc9PdcaLnUqVgXZ4z3YzpPuYuJzpefEyLwGiCQ1rxBHjg",
  "key24": "5iT2EhkHegqrLuFk96h17mZuRn6g1Bkb3a8vDCGYZAmYupEWWFMPNJsGCoLLrMec6QgpLicim6JY5ECSGX19kdfW",
  "key25": "3cgp3TSGMsdaVGdHGFfBHhVAqiFSjWiyoxs36f4huHPHdVpX91CbT6LHKJTWAQeVRiEpjT74uW1kUn3JeuiDLDb7",
  "key26": "4muyQWwS5iYWEdRGxroPtbemF7DnEQhZcTspCrDZiMnbfTczs1vk4b1JSUfFReYB7U3NSQPaHH3LLu3UCqZKwHPy",
  "key27": "2zk2mFiA7HjdTkm88kbHRQ5HhEqJ1fSVTapvHXhFXWX8pWThfgL1FQxb5VzVU65aVLNRG3C99fBtBwysMCAYeag"
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
