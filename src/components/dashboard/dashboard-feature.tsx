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
    "sr2MF3y5o71eRQRawcsPncBeyvpubGR7kuuXzxrVxS6ViZKJVFUhE3KGwC3Du7kyPpPtDnhsWxdh6CterP5Dkie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cfxp5yUEYn95f74TVBWVhqkTr83HGkQZj3CTS7s9Z2a7fhcj6t9QwEJnyZvG7NemnwFc3vgikxPp4XMXm7DrnZL",
  "key1": "31eHnyGov1eMtu5BKU6qAnXXXbu23Djy4HxQj93u7GCyMNad9E7hrUvH5H6qd31Cy5op3TRfCG7XHf5zbwHvyf1M",
  "key2": "BrNQZeDKnzo2bU7er7nkBp8p8kYXKe8bGnA7w8XhiCQWXjKHQNhPPLwi2DptdSyBAWqoikQxsB8vK45obcbtqtr",
  "key3": "3KrMQmidZApRanhquPcMSePNnmd97o1fCJBpN8ZbbM9gAb2iPBJYzBAoU2esBTuEcmNvNW4huSciSBk22vBbQA1J",
  "key4": "3e7Bz1ahjJLa3uyVo19E8kadqubUHThAK8JtWJCUuuNGqWgVxap4vZMG2Z3dMqo3C3UCkVwhs6robEL748aG2GaF",
  "key5": "2ZrL2QxsV69JUnKEpFW3YJ3dUe3emQCfiT93dMCEmrREWnppnJNaP8Ftj5yDEKbMuRs8gAuiHwpbq1cpAMiPrN8A",
  "key6": "2tA9SEfrRm68VMm2dNSdeJ7bqSDZqVbjURDJzjXH4CY7KZ8XJ4RyanR885sYGucxBVvViovdtGGZSzuHNiuWBesW",
  "key7": "4bhSGrz6w7dhPBT8VwUsKtuKRmCTDkv5EHy3XoszePwVvo8rNiyfcaqd9xGW5iQqop5K1eDH6cfMzrhgwtFqneZo",
  "key8": "5A5BnPbjSNao9Gkvo3PV3DUP1q2y5xc9nYhYipqtgEhg7bXJ3PC8uPNxWaEGqEYL3T6ofHxVdndfFvJGwGKu14ES",
  "key9": "2dS4ihSJo6tSqpXMMJjvFgrC1MGXYTJWtF1TcnzcTRVrQF7EL9WEi6Pu9rj7bPdTpPWARzEeDjWwvhyjAFA3unUH",
  "key10": "5p7sgARUPELHHkxHVSMfAT6q8R1rnNvvPus652zZbsq4Eya78xY8nVFPn5LtAWHPcKGZ1T7siGvJ3ohEiAdXYZaK",
  "key11": "3YA3jeCuWZC4QrUucrnhVLreWqnZkeXSB7CNxrS5yrdjAB9t1YA32FHPhBdtYd8daS5TNs8KNSrxPk773MqnfiTu",
  "key12": "2V4bQCxoSTf2gnS57ThWwTKaGwg79LZM5zLWtFvgevnBUTB8CTfnx96MZnSmG32CrmfiUZkSkGgDwQziqGCJCjcC",
  "key13": "rbvZbVhhyqd9MmqCCNSCixBk81EYHnY8xuKXokKZxR2P9rKHGjtnDhoa1r7MXpEVbDNYXeKnH3wFTBoD9enTaDd",
  "key14": "4LQrb9ekuuRFGtvRioway3JNvPH31L14qZXWiNjRsSwUK3AbPRjTowX9njy1ZwvHSVeF28z6mjg1heHekBDbK93j",
  "key15": "61b4nHsBdmtnGdbBaWHJqSW1iLKszRDDb3EifenJgzYNznfUn33NK3SRTe2uR1GUERPdGnm4hNb2LasXrUY88FQW",
  "key16": "H325N3JS31A4yFbYsVY2KnLcremk9LNWfXzC19KUSkfQ5ckwP6C72K1wnma111d1XaxD5B7tAfEdfYMx28Lv1Wt",
  "key17": "ADBb8pc9sT1pSVxRgLGXbry7GsEvXmk8aWbgZ2XkX4WHAXn5EyesDQZDHPta4UdSYmF3wqnhVwUajUmaTKQtB6o",
  "key18": "3LCdHychoAwF8nUbh8PM7ErUmFvqxirN1Q4J73UHFpZEenjwKJoMPVFHhWUnzABQUtqxGR2LhoPSsbidBNZasbJu",
  "key19": "2A6FDFNar9rSxBVhJzmQc7Ce5Ci3hVG7tiRfv2emBTm4ubHLaPUhMRpR6Su7v27wW7tsdxeWGFCTe5PRKF1Qp7xd",
  "key20": "7nCfLoaBeCZ8vjpCdT1vMs5rS4PwzfnD37zME5KwRPPoca498xf5r2d3gC1GEpXwzanB5k9ZHD9aueYKnvNqcYK",
  "key21": "5EjnvqEtZC1afghfeQmcWN8tDHDBSxXqRprukTTd2zDEq6FU1cXVcPuVvJ25bzEXG2vVqETXxEawds7Fx3NCVZFm",
  "key22": "vJ7is2WWuZSDwgbCPrTaFXJ5rUHNWQ1vRfjYXADsuMFRt1TBhtCBQVQ2mN7motVNVeAXcztrWXXMMuBcuJ2LrdY",
  "key23": "3T37P4R5CgHWPF3EW7bvzUE6RUjN7gnhLS6LNtWBXVLq4Auqcnp2uWBXadJfPgvdX9H4rZDwUgFoLSf1ojKZhPyK",
  "key24": "Lg31xXpE5yPityqnQcDCWgD8enGbajBAJy1Kf5uC4tGHDqJNyoZq1z3aBeMvGpwQJm4aEYtU8SB3T9hvqwq68Sz",
  "key25": "4LUx6ZVcRjHWtsnTnX9iVxuio9HJJgD7KKEgyMX8dyExv8RDUWQMAV17HoRLeSQmExMNZi4gxZtQMqWbUshVjp8y",
  "key26": "31F7w63JGUGPDouwbmSW7ewGumaVRwLtTyLzPNoAgk8UJ8GLhkijcc9BTstbTfFYpqfsqix6MLkRxU4gkJZcitbW",
  "key27": "5hbnQYfioW2vVypAA6i2a9FTPp4AbyT5eXCMfcqrAt7haNEMpwiyFh1WgTGNUiM2dMWzNdqyEPnoki17BWHHDA2J",
  "key28": "57QrcEJFxr6uv33cwGgKfWfoPKxZint2QmtwTqyvXZTyA7NzBS63sJ2RQbe58Sx5VDsddFfMVSMwHLdcd25MufwC",
  "key29": "5vDEXkgo3ejGYsFMWR22Gs4Eydyhp4jKcqqwseLvhxMrcHow8KHSuVm6h2LC6wA2CeUxic17JzyGR59NnWhbZbyH"
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
