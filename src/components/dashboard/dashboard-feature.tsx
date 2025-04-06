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
    "3Nb2vvVaezeJN9dnrXGSPHCEuYEcSZdW784WYN3uHTM41iLyiHPyih1tMR9zGQycJWf6yoCjnNBzYwcUq1YgCXJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVt7pDJMhP5NZfjKvZKiLWH4aJazarg8QkGedx9EGDeJwNg4WecUVqv36cTLQ8hfChHbj89tQRVbRBTsEYrMPRW",
  "key1": "5RQW6ieKbr6PK8sFZhzW5GeSHTDPJhQQCb1BTyzZcKoGovbkDz71YUnq7GMA8n4ocUghRfYj3w4DBFz926FqF6p9",
  "key2": "2n8XUyjWhsHLEUuhRT3Xf1Qa7eixjmaxnjvMq8gVhfpH89bUGP79UBzEPVG3vNm14kZJXa1sgNk5cz6ud48y2Q1J",
  "key3": "24JbMetN3KLN1trQEHvDyAN8TUHpHBJbj6Awc9U1KdNSqwzZh1XDmArHDguTSyADAHmuMGXZ18EJ2ntRx3r5a93p",
  "key4": "w3xraDrF7vAZww7eLRXzD9LWGs1JvTMrxy22yGHrTo6oAe1ECrDGowHrfYYux1ANpifHvEYSNoFvKx6yyXTKgjd",
  "key5": "7QgLHxuG6BviGdsG8juFMtf848TSpcafmBM47BBx67Zr13x59GbTY5sFJhVo9FS6aFbnLCPNDF1XF69zxSXciwK",
  "key6": "3DiLHf88V2pcUmivCYLMwFQkGv6SjMa4ZTsnLB6bsePBfJ2wN5CyaN54KKdVu7o8d2FbiMHLdvBbWUJdaNBfS7vE",
  "key7": "3ixwenNpgthbz6qGxurAtSfffY2pUVuhLeSBTdkXr3BJC9TnNhctrcwJuYpPFKbabEPrP6WidjFir2jzrVXmziMR",
  "key8": "4PURsmRjQeSkfzEC8ETQYxWgpsz15BVhkPJcJbkrj2X4UzzE8aXDtWtMDaJYZg3mCoHVFW1CKCdhLvuoUy5H2YvQ",
  "key9": "2e8uDNNpiE8pN7imrK41qe4b1rxyoaHwNwXeFugaCAeDhL2BfDuHdJQvf2ReYcnmhzcvyJBDWA1RZcDaUHbqCpkU",
  "key10": "2QYK4MzvHKn9rmRRGdg8Ch1vVMH1CSXEbLQaaxVSJ1kNASdq3TBAA7qz3hkQd5AFVPqD2m7sYCpNaqeiHf7ktXpM",
  "key11": "4Ze17jqL6SJT9YW2FiiGAETBbWCcJr5kXuM6PLqwQHCqoA3mSNi3mCZH1p3FFyTpcb3SrhTrwov7qjy4NM5hYd1g",
  "key12": "2DsskpbT1mZhvtuA8BWzD6KfyHrqy3jSGyKcT4vC6a2ADb1PZsDC75r1P12G9TVhUcWXXCbrGtf9Cz6NVu8t69GP",
  "key13": "2HoCqFFfUp5kEhHkZzmcaBzpztM9ZYEGGMiG3U9ZNi3yG1kMXrc3KVmtWTuRWe2VdwTbV189bmJ1Tmnk5VqYQ5EV",
  "key14": "2AMh1iywPT54rTHDC638GJC3tXiQ5eMGaLUdGq1fAazwiEQSi1jEbt9McfCJXBJGwxnHjADSokZFXcvTkz8ajybq",
  "key15": "4bZ48BmZd91zho9785KKE94RTcLKnCv6MUWm8QfEW5utbbhPTZGeYWDsFkWnDZfQJrgg3WTqU2UJxFaSa1Nm7T3T",
  "key16": "3ncFnyVPcj7mw1vvstSZXo3yXUjSzK3p8nv3iXVU2c8QR696APPafraQRzbuAbyZVCHDQJerUPHc6imrB7qjcrTu",
  "key17": "5ANjDXHYKWCfZ4MfPpk2G7URA6TmhkxJWt1t6VngT77hSFvuuw9itrUTvckK8uH1RUMUQ1ar2UdTFMws86nXim2u",
  "key18": "rjTEiZ33n8SmCDHJuUVpwYPmhjWejSduxekeGe76UJ8baANMxDpTdkTq7428ZCqiy6wwuqPekd4xGwsB7QZG9pk",
  "key19": "4o9VdwQeRrsm5rHQht5BLm7Ao2SqXXCZLyGbxLTV5cJVwsN3WxYHFUgVy9H7mfT23byEXm3KwcaRabqKgYVW4BAj",
  "key20": "2Kday6sFASMgr7ANaA26orESZs3E21JRvNukA4MspXT5N2P3jy7ptpscpPP3g4jEpSEKm5NXBesq5DuQeiBVGffn",
  "key21": "3PctkPzcz5qv4boEkhoFbVPD2w9EcgUS1XW6erPdUVDdAiirn2NPbETKjitvs6JA1qa4bfngkGeofuKzJciFxa4",
  "key22": "2gXKSGbx2rAWCQr2MoMAFQAWHc2vCRCPcvRChAkNXqAwc2Ympd2BVdRJjD4BjLMbvyz6K4EwHzKcyKNqJsvcDGAz",
  "key23": "defe3QiNmahAzLJ5cC99sy39YMDALiAJGqQsopbeqCZLuU5H4Y2GPCaRvUSxnnKV9d5yGzGCzoWQ4wwoM947ZZa",
  "key24": "5yJwCYNroBCjyjrSevTdP87tVAJ77bQHXh8CprwTcbbYasUneFiQ4i3oMVAgh5HWtpGKP3Emcj94BVJZTNr72TBf",
  "key25": "3T18cf2ghtfdbJdNyxqebb29AaDkX5rtRs7gjBLdcoLRrYgt868yh75N28gt55frCiVr9LjBX7oVuXirvm3gKwKY",
  "key26": "4RsTxNPWkDCB5bmMFTbidNUBQQ68gk4izkao4nC8tsVUnppQJ68akVztZoMSs3GfVRtbr2h4mufFF8B5ezZWSrJp",
  "key27": "dCqXtxRi8GgEkPFRnJM9DtdyVapVniesbyE2DNPhbysyqtJPPy1AAt8h5WsiZFrVcbXgdM6heVkk7pk72aSchP8",
  "key28": "3FrNExUnRYq35UbjCzgwhseNq9PVcb6TkZ1k8j2qWEH1cKnc4WWeRPiU5DtaqZzzP6TZpGuvs4fKSAyJchf7yPJm",
  "key29": "2tLhEY6kWrwZcEtEmibKe8528cZAXX4vgCtmbtMoEJTbVz8u2UW5chCLmkrbVvzXWk5dQJDxY3fTRWKuyoTDUQDG",
  "key30": "63SWL5Rhp5gQ5zfUVoxdpZazrjT9usrzR2wX5vGYYe8cDnxdyw48jD42ifiJuVdWD1HBQKb8uNUUaVsVaU3H9odh"
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
