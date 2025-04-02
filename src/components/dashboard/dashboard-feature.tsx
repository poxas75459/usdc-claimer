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
    "3dzR8H6FL8eD7gea6E85f8Cbegq2Fe2T6XViwpaZqX1qfM3r15BvSGNx8jysDDTPQzKeJB5jcUeZHxcocxGHPnDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYbFfiofLV6PusjePPwnat4cNtHzUp66P8U56FvLbC728TwQmT8vpjaTFtwnvze7jtKBTmJKKzGKsJScEGqEbJN",
  "key1": "4ER9hAJvuwg7vYzgiiAbjPHXNn6ggSn76nkSzYJWPhU82ZnuvKPDx1Y77ygZ8AZ7KVmfvLshvQbLTWVkkGcYNKt5",
  "key2": "5KTeygwo3tUkPycokDA5HtZRMrQRncdAVLd3mE4TUJ7veuPNCdaQFdotYpFf8SqjgcconMwWU8gKos7Ss744exKS",
  "key3": "2CPGzRE548PiRR5ENbbwx4GzDS1Ri9kUBodSqsjMbrC6nqUwS73teW7v5dd8VQn6q7c8Y3AB1xHScHx2H2udzmFJ",
  "key4": "3mqw6woFqYwrLnp2Pi6rNU1ZahfXwQWYPWsYmZpiSMGbbzuMaRhhnYPKvsP76yZKYsQrLHntXgHUn59M4PmK3ReG",
  "key5": "4mE2vnABbiA6cGbsPJvNaLya5GcDe4cM4BjyLsqTCmEgD8fc9SFYvNLt2EBHFq9R8MD4fGspYiCyF2zG7RvDV4QN",
  "key6": "Wyr292qb82EZimYcc5T1pyMbVfHGxTNFMfZiaj4Pw5NrSd2EuCKjcuRoEtpLQpJX7Y3i3ntJqrRsYwFDY1k4DFb",
  "key7": "5ZgGZDwfctRGo5y1h1nGKiRCY39egWQpbmWag4MqFJAm9XwA1dj5gVdomyUE5SDfvfa3r9213oPAT6dZvibS2Sxo",
  "key8": "457sfSp817CZhQTipXe33wdCd1FJqWoBDTCmj36H1mWRg58PG159kxUXVXs4hotRHeVVsFW9GS1pLByhCbJeArNY",
  "key9": "4fe8Fvo4ekLsfjVqFeA5G57ssXgNqk4YFaJXBmf73yB51kG5Z652YbNYt2VpkTkaHP6WGrvpofG4k2aXkVRrm3Cs",
  "key10": "32nQb15R2RpBrN5a9rpuHFSdYYBmk5Tmack8vu8oc3i1mzRuvePpZT9N37u3WNrNvXuBV1pScugJHEwWjDte2e1",
  "key11": "4osbuXBRtyJApZaQofgAYq3WukDEdTeU6nSa53CkVnWtGWkHaisDZUkXeRdB8XjafwJi4XG6L4H7azGXTNPDPV87",
  "key12": "37LcxTgHyHK6881qUSKUXNRcfd8Hc7LfELyHwVHYRnB6UW2qJAQjUTg7ydxr8sc5pidEVhpWA4W3UqwtFiHYpDX4",
  "key13": "5kCPrSukDhso2mjEviQwhUbuTrwhPywhvyD3B5Kz81L2KiMufqhGbmTXDvUBeGB4vVgw2i7efY3FQ3Ct9Bzwdvr7",
  "key14": "2BetJoF7wbnKJya1h1fMw3UtRcuv5LVCsfhxe4iULQRf3tYG6o6CMaweGeeAL9RidmSFz7F1Fqdhcroeapi9g3w3",
  "key15": "3FdjQpWRJ8B4XmfC55ohtjPML9gvDykoxESL2tMoh2zDZP1n3yzLy9pyhErt1iX92akmHkndTSVnBqsrNWd5HZX3",
  "key16": "m25Ec2uhWhDognKX2r5rg1CxbMKXd6Gbej4ZKozn634nmEB9yVYuZ15of76ky75UTeyz9EkFSLuHuEePSSd7xEK",
  "key17": "2NADJBGTrapWhm3pBsdfuiuB624wopiVi6CVhm7yY4fhRN4Nh4PCmjGhwybTog5dj2r8jGC2WN67CyfkHQ8QNmBr",
  "key18": "4S2efNzyPtmyrWBNKnZ3evgbmKHo765VyRu26RBnvNND7fVKmPkJVENiyfaWXQv8LySYn2GtaCbEscznhcCKPe41",
  "key19": "2Efv15GdkUuP8ND7HrZaREZFG7GYYF94gz52SQ2R65DYWMNAo4pgn25KvCyDMa1aYudWvssCkcwepQwsHCuK3Fjy",
  "key20": "4tV3cdzJo4KwRw7sMPnCfrdYzSyuVAk3hF9vokyKK1xMEhK2YDbiiEfFrxfBgcTaAC4r7R4bsSxLiaZCoVPt3pfL",
  "key21": "3wDX6QUWYLAEK48quDEmHPvQ42MsZFwRvf4RNsVYSyUsXTET6YdDePp3U8ZPuNrDUr33wBGDT3zmorFWGhFxTuf1",
  "key22": "2CUisZ47EE8hskPHbhzvVjKPEJoH13cRFCCAHpu8Ss8N7LS12R7mADX4hgDRRErksSUF2KrSmVfKJcF5WK6EhH27",
  "key23": "4L9wiLumUACpHsMvEWdyPtN7aBqh4HaDD4hpWpin8Tp54RjkK6qSKtZn6io77fyrywbSFwqU2iqH5BCwNr7nEJ1X",
  "key24": "5RxGwXhMfyF2FCBDnKKtUdD1ioXD1AodRoPq52stCLYJ1tjus8yM7uzSaDi1PBRQbt4h72XshG4V6aijD1vpy7wh",
  "key25": "4aLu1ZsX1quEG5idDnFvJK3J6y2mm7LFuidZUsAkX6u8MHw1o49SHXqpCaefXB9XTaiyixzBdNLbsumht1HayVRq",
  "key26": "NaMzkfd4Mdqf8LgjZ4QRekdJZNQyKqpTyKwozjE5k3tArgnXoTVPhfMhmHUKrUffukxuhkohxgvbrwtYohXrzu4",
  "key27": "4eGaohhVMWVGM9EwrMh3BD5CG82zAgD325pnhSucbdjtNRq3tHnmDYSF8Nk1hbdZh35W5UJRgRKkueDSvmy2Qqya"
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
