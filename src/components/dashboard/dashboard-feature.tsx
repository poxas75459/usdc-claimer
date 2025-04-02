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
    "5BjcanaSPJ6bBSaeFdirqKBsDsxPrrrcbgWYEtM1eGTHbNH9yKWN3yXmeKy73kUZd2r2quH4Eprfrae7QcHFoaSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6gRJQndYrmSim8S22HdjPW4gfGEwyD4PwuaBAFXUxsHySDeLP3jz5ddPMD7gLf9s4ujGkF3Ko3M1a3BMqgh5fR",
  "key1": "nVGUjbeP2J64vSnjvu9UnSRqMPT5BL2A3HGtRELBq8Lpr8UfQqVxRPRAJThRuJgct6WHmwzDzsRRm2oiUTJNeem",
  "key2": "4csFuCWjrjFHZBT8BYhkh3XAJ5EWZp91JM4f3k96ryd4HL3rWCWhdB27RuSQatKjF9tKDKw1ZbtphzqaDu688rKV",
  "key3": "sBF3d17MagqUbAghGkCWeKFHBWj7q8Q3XuTRLesAmtgPzg3meAKxUCEeKHWwdnhNe2QdVHus2scAtM7VG3Ehumo",
  "key4": "tRLgc17tmoGZ8tJMUDTpnFk1yEXUfperuWur5wcLXxRAky6bNKvPofKBCoXPXSVgUQeUTi2YtXTzoRrUR67KXRR",
  "key5": "5F9pN2Y75ybEmXR71wxrEHLZUbtvrczBLQj4eCV6gL4NarzatiXHqjYXCwFtj65kojtfazd39JQ1Ud4cqghrKwu5",
  "key6": "TSDxX4prmmxrisTYkRWMKSFUS1YQ1a9L9sXwvX1WpKvAEPNy4K69Pn1ND539kkG6dA3pGnzgk4YsmVGaqV5Gz3y",
  "key7": "2SuPWsjgJk5JLZP2s67ZX19ib2H6YSXzVNF8sn8bd4WsZ7W9Puqr2GJe7EgcM1KN6yDQ87kD4YuZ28VmZ5xo3HHK",
  "key8": "2RrnydNdWRrSTD1KVgXH39WLAgDdwtcUeUr9rMc6YiLLiwuev1fNQbdbc8S67hGHbxR36VpMBdbkpCQpt1ZXmXYh",
  "key9": "2qghpbPHosinexiyv9Z7xZh4RzMWEvTiYprnkwvGZH952a7tFM4sqkqpzMvQCdvZqCDdXYo3m6cWjYdvN9BjrCr4",
  "key10": "3YCoJFZJfvKN2tD7ZurerNRhdHH3qj7MhRquMt5wdqu26JxtPEJ8tMihyo69iwzmvevffArtMEtZMBvFCgt2BigB",
  "key11": "47ht6C7Mr8XT8kFbdHEoHzfUQZTgLjXBzpkX7n3QRkqtxB4EAxNDXSHKfE53m2wsnQzoeL3RDJjwwdT6FKjpHsqU",
  "key12": "2DR6TKMShjcjN6mvpzLw5GWHKVLttNhD3cQXtCQdVV6eunWMhvom8eqq9BVKcCg8jAu4NMyrGTCenUbnu87KjaXd",
  "key13": "s5843CExXizZgv9nnNymja7epZ6r32KY7fB3XXDj8eHJoL8tAdiG5ErF1vT4Y1izPp2yrYzCskivHvHzoTxEDC8",
  "key14": "37gBKPeNzvaWNJiqVMyDiWZ9xSYw3xnMKzxLCZJRkR3FDitMGKRQrhMFpMQqmPFiQA6r2iN8LfPg5J4jv4AHDoAh",
  "key15": "5hcJT4AUhqS2Eo5dqs78XNBU5o2Z2HxdeiEsppe7zW2QVHQUMMDWKMBi5Uxofybp1sMLcpXB13TSd63eXXopAvQ9",
  "key16": "3TYfojNbLWKvm5bKLVQW8So5QXmCXzSesXeXPk52QqcPLWaKk3KjUxMfR9a58hU6oL33MTDfUNasKnhVfBqABMWQ",
  "key17": "4Twi2Ud7Nkz1ZcPDEksBgzojP4TsjkpUkdcvLAaYMEcmGMKgwyTh9psCUwmXEtu9SxaBDSpUcAqah28v3tMJG69g",
  "key18": "2kk8m5RFz7N7y3qUMq3B8z2kNgYEd7pw7kdH9kTGDuxPULCD41PKLWYxYxt3LKYY9kzctYZiYKkd3cwpfNDKyVGA",
  "key19": "5cUerLDwEK6sRkyKn1oD3igwrDyw6HnF3gonmDcTFF8A74ARU7eGGgbYkV5Yb1kQsuHwNWRNkYVCiq5KDfD4Ty2P",
  "key20": "pA2G4EdDu4NuSHyDuUaqqntgDnRgkeoBuZVs5MoJhBpoyB9nGKNxhpjr8QNncwT3BECg3DyjrZqXB8hfdry38nk",
  "key21": "5bkvbezLxRDHrp874tKAvZhUMMLNTWQF6rWXzyoX6UknvUHfwDZe86ycsZXitWbNy2GWsqy2jjhDEgMDjGYBscJv",
  "key22": "37DuDnR4GXZFDgaMwFeR4kMK6swDixMiHvdBRBDGHtFLuzL9Gq1RHpTegmr1c58tgGAeLLknVnQkmF69ZQTjGtYm",
  "key23": "5sgh6h8rfQV4iYtrEnnVvLqtPLX7TawX6jxL6hMHNWtmXYwh73BwHujUbg92N4CyXBBRUoiU4MNigayhsxcomjad",
  "key24": "2sqL7ekvEQPjiuegS2o6jQvAHmoSvV9ZsMEPTmiaVXf4DNuii8mLV9W3Np8f5VoaxS4WRfewhPgUpCCdYA53z4jY",
  "key25": "2jXkdF1K4fDLmFX3xxH4G3hv72kaftJaFXHxEK1RuZzZ4bpFN1dykm2Z5Ed9gUfohvMGiSh7Tr67ugPcDANNJrvq",
  "key26": "3nqxqqvzVWggLUmqn6eBF21GQGjWYfQ7uES3LhaGSYSqb1SPvxP8XyCtFeDjfJiFokrZ1D4JL2xFfW833eaBBkSs"
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
