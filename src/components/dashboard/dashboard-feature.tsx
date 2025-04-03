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
    "WiMD61LidtsQ8sJ5nU8hj1nxZEYosvqQCH5Cu67i63xX79Hkh4S1TNSyo4JzQ8fqo75R1Gwech8uSKwAeBx8xcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4LhjWjqWYHtcTvaq76o3N36LLPbCNm1fFbJipVySEVH2XMheuD6y6UWKhg1nt3JrougUXRiDfbdEkAKqeQ62s7",
  "key1": "5sg9kkEG3a2Zsv1MuVDCzgDhjf3R9v3RzLtrws3N9Btc4twcFhbR4HCKeFc9WaVzWU7qAZDdwzaRLW6r7LUDV6xw",
  "key2": "23EJuSKoLSCGNSm9mwkvUrCDSEg2xafgoAwgPgujCq9f6pDWNoHhRxkqPxq8kdY6uaa5Mn4nd3Ldg1JGumK92SVd",
  "key3": "5YAQgzVH4Xhvd1eEw3TtVUQy9zcnPhqdiXfbMkFFNQq5dnS8pZSJ8R9DwpNaJyF5iR6463xDtemAR28aNKiL2JP5",
  "key4": "34eP5vGKo3u7Hi5Pwou6uUAZTrS7CTnhiafkR9Tpz1Q74H3bJeoDqAGhuhYHzSPgrP6S5i72aQQ5SgTcWH5dLCRn",
  "key5": "5R1R6ge3nHwaAi9evanBYEGQHPW4psoGiqcic5oxQRUVi4DquHoRtP8W7uBN4QPriYEH2DsJrmUwEkqSYEpRcuQA",
  "key6": "2kwgBMrqemvEnf55hkfvC3hvVskzeqPoyR2irqSTCgTNgatHCCsnom54BsUULStpYq2eaAUq1Bs2QY1JB3HYM7dr",
  "key7": "TxFcvWzx3SxE2JbiN7TpkkdnrTiScw2PKPi1zyX9NYmFUHoBFXnPQn2tMbvoeerHGjweF4PqUkgJdoetM4pUcXb",
  "key8": "263GPvqEwcLQDuBCbjQKBxQK16sAXksfMZj98hYK59aovm5gS2ev1UjmBFtSKi53KCUcs5uWv77pcWQfkNribCKp",
  "key9": "2r7aBUEQBJuncjiVSePddxMuYCVy9n2m55j2sRd8nDH846WAwbxnFo2U9i8bvjitU5adsMUUGZBsQpzNzWipstj7",
  "key10": "41we8CaFxPGSetZEAHM8n4VR5MutgMoxLaHW6n6ceNMicCaEztTzVH82dEiq6nZp12W9mPfYnizEeNoE2PM3yHMq",
  "key11": "1h1Q7zZ4jEHy9uMcthTK1qCiXYmQETKAhKAsGCfAcS697N6M8XrppkTNKqJNE4df6rv56DLNaFSAvaHRPQekTV7",
  "key12": "45sDZivZZYDb8N3TxPPH16gT6UvzAs9zs9Cww7iomH78FxFrKVBgN28s3JnrRAevhV1jZxot5tAq5QE9c5krnVfv",
  "key13": "2Xx2gHXFnGc8orYKbfq1hkNxer7BsfesabccfPnCECEfp2pXwX5fTgzELqctH5B5W9aXzQLoidSFH7AZ2cTeC9fM",
  "key14": "4V7Dwz1aKQd65jsh9PCkw6HokToprybQgfKYxDFbwWHEzQWk2tuUggrupr3rdiU4hbzXZrx1sCRjDkHBmFk225y9",
  "key15": "3w1h6MXzPA3f1J5ebiFF5gk5Ja9C1Kn9mZJkrWz51WBpbiYqaUq9rzdzXKu2tutm2UQv1PgpA4oksWLwMQJh7Wgt",
  "key16": "VM54DmPfBjCpS5depugZx1mMHwtvyrxMnrTAJvWyqJSXNDJsDXFuzCuDec1KcgSDDHN2hLsrfymHjkoLxw38kcu",
  "key17": "4hqqo5bJmhBAKd3dzH266d1NKNfrQkLVkFFHqkcpM9z4D84gBeAh42WpHeYABiLgtaS5SrwhSV4QDJRfnfQKNaJx",
  "key18": "4S3D5yvgzQjKJjWPSuW8uZLjDUocaBW9RpJBfZX1FakrN5mvFXPHME9Nti5PxZKX8V9wqT5UpMgwHAEFWMZfyF7Q",
  "key19": "sJTY2ZCpjgtRP7FsPxnpaTCYpHUphkuAz7sHvxvJMAPJCHuFa1mR7iHSB9c3fMsxD35ESP7JRomsnuhqZxQuRA9",
  "key20": "2g63y8AgTAxv9NN4w3TYNjKnX3ajq1LqoGAz8SVCDJAyKvrHrJMgwcgG1TH3zZvF4D8mnRwQRHNXbM7F7APx4Yfu",
  "key21": "5gwM8PPT3PGfFDJ6TsRLLxror4JfdPNhxaoUV4w4k1e6SK5crKntqVHCdZqo9tTXqrMC1G7tyJcVYL31QChUc4Mw",
  "key22": "2ZuJoVJVrS9Wq6sws7GYe91uawGLUVML3YXwkJrFxDmwcVxMqpAwAsubxVU1amzwkW87SoaE4KrBw3h5ABn8pRVT",
  "key23": "49Zjq1qxjB8DBad6snFRDTxNcsBRLSDh2nSmbhgBrJ7zCqEvyFwRYz5RhVhijpBm6eXsfHnHockWSjHyPzu84H3B",
  "key24": "48yzHPwFUYV7xCjcAN6BCpfow1ry4hrrhpuH1NL2rwR7opVrGwxqPW86Ht4aq8xtUFtSB866Yze9hxb7oqpBvDjk",
  "key25": "21qQuGksKqnkfUPBJtU6YJoQqJ3iym9K38JdVgXUstCRFMMNWe4rp8Hk4hBWiF4fHyJRgjFFsqUBrc3zizpX4T74",
  "key26": "3onvXW2fyu7NpvQshwf3oFCQM6FoFEKSyaKJCXwUTrTLb5f63DPXXp6gihkLmbWNqagW8NsH6CuNrcG3HGn47CXx",
  "key27": "2T8QhyMcMFCYi4Pbv34zt5VWgvgaxqQEgFCVWDRRZeCxD4dSvY4vsdQWZNHiELRQ8A4KJyeuL5JhWkTRF87SWx3i",
  "key28": "5gqtAS4MxQgrujqQrFmzwBBWqUGv5a4wupPCyPFQvqdezNYGgywbHaTBksoBuPL1pyhH2vgqR7ZwPN6PUUwwBJNs",
  "key29": "5ZLXQ4Er29mRgEVH7rQQFqzHFzXZFqr4zjDprXqoyaB5ojHWfFtqfaLFe76BmafKbzHqsXgSz1SdeL8YM9D6Z5Wj",
  "key30": "3JxN89BRreLxZps1nqnLXD49qLhGQb3HcHC1bYVuXdmGU7oTc8EHkTiZG7Szf9CsHwbvZozrBP8t3mJvoyjPrni",
  "key31": "2jqs8oZy8enxBV8PyG8zZVA3TagkcPMnRfQUwAxN9jswm13G6DgaLtLk1mpXqq69ueEsYnALr7CmvnBCT5TK19SL",
  "key32": "4WCmeDN7ytAsTy1dpcyCZTWB1zpjLHrg2X46QdLmLwDtJkwP3Ex5NEhW9idifGa7TXgCtYTtmp1mL6yJLzFFu27n",
  "key33": "4X6CfrWVyq9RYLZ6ZdysMHPa3qf3AwDWKUr6b1ZRjy6QneshNFnr8K49tg9nwLmx3HrWZquTaQXQYoCkvoqUE2ew",
  "key34": "3gg3oTZJoFSwgvr17tG7SMuTZo6zZhSvH5wK5kzoUoA9taJwx4WHeSjPnEoKhZV1v2PJdB2rzQAGp54ULGiGK9jZ",
  "key35": "2n8CTcuBupUVzAgEsBcpAng4tA9XNNgq5kJgwWDW2hTYnUNGEWtJjmuvDJTR6nqYSYhua9TUyXL5pRDXmBQ9mhYP"
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
