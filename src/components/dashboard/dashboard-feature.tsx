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
    "24LWJ52AKKSjypb1AWduXS962dabCdUKpAFHDNHkFbSYAW4CAsFy9CYWdEgvh4BxgbrcPfjmCVqXnebbHxcWhV83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LGsAFLGgRNFVEHbjxnx5Ga2hDzYMkMnq9tkrFZkFwTPKz9VdPhjzD6hCaHirWRuo5pfMjgPZ74vvFTMphp5MkC",
  "key1": "5CGFXGW3JZgUeb95td2ndQATA5mHkqv3Uy8z6wTc9T9k47DBqhqsakfxzE8qTFNpXQFDcoX6i6JWqaQ7NtgJZ6yW",
  "key2": "3ksLaNLUP99hxQooAXjXwonbYRcFGweuncDHkEYstCsDSxZ1fBH3V5wCB9VLgy6v6o3bNKdytw5ozCb2bzuHt1xe",
  "key3": "5DRyrKtsoDnWJr3BBRx9wzFMEoTBzAoFp4xQopQ8KfZewaAvAizdN2oxm1E3PzviwMEJzxv7Rrq957NxMWDspvGE",
  "key4": "27dvJ5fG2SW1hq99EvMaAxAzC9iDDSwn865psdPxAKvZgUhruXPNayvYo6nZ5JsfqapKPRbu11A9erJXBE3j9heV",
  "key5": "QN1QYaZq4GdBBL6bddRXWwLuE9qF79x3t2sMiQMQxgpoRX3kRBiGkF8rcH4c4eSoQALgcp2TGac9muKtycPCGtn",
  "key6": "2VAUKEQS5G1HBZhF5NmjzPxfid2JU3tJCASr8KMfeePZfyb3YLLJkBFvNBzd45MALt36dR6dqyTbDLo3TGw6iB9c",
  "key7": "5wVg3BVwHioobFs2iP31dBXDxV86E6AdwDSa2ow285ZFqnWXyixjT54KLbzikULgSKXquPiV8SKrbpELy6rwNiip",
  "key8": "4akAjPG7ga6ZdFoAboihXhax4JiX1yo1LwJvUo6GbvKAUpmnYpN9Mk5UNU2iBPChVHJmHPA3ihuEMD25nkY78y5Z",
  "key9": "4FA4Cwf3NLnJipCHMKbi5t87aDzgDGxdgYzL4aQoA7xpUxsCoyQvom8PnFvQogF18FqUpJbYJhKDU1sDhZbdEiPr",
  "key10": "eqzq4pyweyRTLFaj82n4iXf2GszF9xMPC65Y5pqCWLV2KpYZSwdoAevK6ELAC9LJu3wb3MjiFUZG27cGZchKWVH",
  "key11": "5FhBQWVkTFkuyY5syT34RJ8U1R6dLPzeUjEYMmw8c7VMHra3wtXkSvyZBaXtzjYJkyN4RvBVmTq5PxLeMqrHoiYx",
  "key12": "3dxsLr6pUj5iXBtmQnbjECJEejpu3gjGWxcLNJ2q6oXKDu741Qr4UBtvDLjX28yb2n6HRyJR7UEjdpuyj7TBFNX9",
  "key13": "2c45AkWfLscTD1L3ctVQ4dYJYymp6wzJf88WpwDv51RPMG3eM9nU3h5ModFpqfaBPtPwGyFFX4f4MXY6ymFFvkCX",
  "key14": "c62bjiiZ2KA5nf7dLAb6R5s5nWmZjKsREesEenwmEMSWQJL1ZS1FsYhiu6MohYc5RxWbra7Lu51w3sQ8NKaoT61",
  "key15": "3fy7oJq9vLjfYMPDL3FgP2KZtmtaj2MgJYNTwJQsqhN4ihP76qML7i3xbYZu2c55tMQnkCTAz5QxQ9s63k3VNYiw",
  "key16": "5dkjHLt9rc1pc3DcDTdt8dLdVYzxjjpprpDNxMKB5kgTewjdgRFCoZt6Ed12kRDpF67NvKR5DR3ye5bACTnp8anG",
  "key17": "5pCxYybG4bXoShuY5bH3B2VNMkyxYzdq9FY6e4RS4u4368hCvRRD85pfs7Kfudj6hFdT5sBcSjiC45zQN5fKGFJR",
  "key18": "3XBGdjqgf8v7oBYwacQxoRUcLDdyZdM8zbsECsbEkPZ4CigiWejuDJdtT5saiJPT56bGU5j3FZTeFzpeZenqNbcE",
  "key19": "447KxAtUK22ptHrQhc19BSc2MwZnPxHromUpgQtHWiJhshjhue7LcZXwWx58kkAHH5jytTt8iaYZnvDeUY49z6vx",
  "key20": "gjk6o2TqWxDzYD99E5qZkBgZ1XPSFYedAVnoez3WTr29aeQysyyd7cjGMMptajYwi7wZAZyMmePNSBU51y7t8Rg",
  "key21": "5A7bn3UYbouTVWFq4sZyTaAFGTD4KSk23urHxKQoFDS6GbcraX9exLdVZdadE8c2PRXy7bZeYu8vb864DQJqrUcM",
  "key22": "5Y7Q7pgvFh2aqzV7P3uyFqB4HjMYVFc6BK4AhrvTrknhhdgxEN9HUJscN6acgqSBJRmaqxQZqQNLSHqbp8Sy3xRY",
  "key23": "3PnBpjnJKMgN5AHYJWCxxSY5ShozWP1vGx6KnRpxnyaFiwjomkk9HDp8DAt8tLf71Nwx7pnpr7Ggd3jF3Cpy3WiE",
  "key24": "4jAShTAMYzMJKRvXCwHabPd3Lv6KCqdKhQkUacFL3TdCcSesuu1MwFDeBdXxdfAufFPU1supJmB5DwY8zJ7E1RGj",
  "key25": "2bqKG69GqG311qg11LeYsnYdPy6wM97F4msFLg6WK83tZXcLFsug3SF9zyHGGY7TfPC6kYYpEgKcAXaq2dv2ePqE",
  "key26": "5K4e1Vu49jmfBTfdLepqeeBSTtZrLa3LLxvYbVRUo5ztDaUKcRktPYmkHqDhT6589xQyrb3DqJ2S1TVifurHbKdb",
  "key27": "3nRtZVExatoHLBbinWeg1mMpb8saEqbTfodjr5Uqyno8ZR3L9e5VSdY6uoyVvp8rK8ZSxcNfcHifxJJEPhddKTco",
  "key28": "3jxELsxoTcjLGZcRTmCeAVhsyznf7m6gu6FQXrALww5T3gRdpDYaGsae6ngSes5fboMd9SCiA8RP1AQUTD8dsgwX",
  "key29": "2L2G4Y5iB4xwaX7ZU9wSB2U2bAimyZnABM4En7u6Y2wupFdtDyE2uKon5iwtu7tk2uot2Z3AeYKbZ6reHvp56SWn",
  "key30": "61mUFByeXLPUtTBUncp7secUhrYnhtLJvYDw8F3P7f4p3m2ghRz1v4BLUpso7VxREoTR6kYa9MEVaqXAJabLTPBj",
  "key31": "66722XySRRQeP9C5MkdAn9gjJULJj5eBAX6an19QWya5dBo8EHDmqmE92Vd7rArS224TwTvQK3887iT5c9jYwfze",
  "key32": "oPyTkRFh7PghGrnzpjFvCc83Y2DCH9SdCmaATZhMu5pR6732WdBx4A3fAQ2MA5yVXSMr1vfy8HRQYTWQ6ExAL4z",
  "key33": "44ScFkNtbTsPbSnoRwHhPuewBzpx3Cc6mAXDeL1jcoweTaRG2MBRuQETpCbEfoeRmiVeA9a2JWgxvZy7xkMfTfkr"
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
