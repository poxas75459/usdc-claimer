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
    "qrz6Hi21P1wHyVd9Pnpbpb6RDE1JDJu4hBNabKd3Zbogvvxm5j4GKXwqmtXELvz72EWPT2Q8xcBeQECgGtQRivy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9Ub6iSr8s281J3HjkKi72uRGsDhVpu8ZVAedHq4FKbJtAM6pyR3dHEqvFbD2k3pg8YiLVekYN2GePYMHTeLoN7",
  "key1": "MNbPFM15EmvkLi18E7fT2iSgTFocBZBZWFtTdvxWGpFPBrhAc8o9X66pwVSFXpNiPaECGF31X95KS2gT5guu1vi",
  "key2": "Py1yPx8PpxWPvkLSVoNe36A9bymtXYbkBmM4Wbc3HpaJfmcxzUFfBaNReHBeCKfUMezf4T5uoFiibqbiNUi6xka",
  "key3": "4VDb12SfzFXgyf98FD2FaCfDXR2S1tehsxdxDXWoXZcpMs9WvJfiZTgkSkuHaFkejsoCikoLBGsbJuuK8ANm2Js5",
  "key4": "5ypETqhhauXFDEJbNAAfHNuK58iF6YpWg3CLMoMmksF7SCHL7RMXpMX1YsZ4ZXEAnXv9f2JULxfvmE3iJCfpq6Ga",
  "key5": "2Vy7h4foRUEurh1iADGT3w6MGAFEQb2pqQHxDFoe5YqQ7EKiBQLG5JCWgYPxoEx2BpQCvmCH3F7yQuw3qAGRLV2s",
  "key6": "5e77wusrUYnB65uc6BhXRZDLq59XeZenrhKgdWWHEYJhsmJngLTWBSBya54G8y2nJCxLNmdeowqfe2NuYqZtXieK",
  "key7": "46AAmmXjN64dyuvmsDgTGn6iL5jWj2Eu6Br3joJidn4a73G9R4EvDZ4UtMUxkZHnVdYhH9mAk5RP8taYMcVBHnVV",
  "key8": "iibPQBgiCc6U9zAKWBq7SSMKF2Kc1eD6ahEDvW3ZRG92MLTs4JaXvEsAmZXD9nCUqG8nDpE6mFksFiJJ84EjsCx",
  "key9": "8bG5G8D2Knjb4AzVth8Y1ojgGsgPJByfnhENvrbkQAypwpsTH3LJuUWensEm6VoTLGV7aYT987AyiU4xWVwctVn",
  "key10": "9iMGZDuZtQaBQGK8YuWsJ6DyChb7qiDJY3ZSSyLtqp3sqEVXAoUk9twLX3Zf1W2VDhNZHG2xwAEyxkPLqPV9FkY",
  "key11": "4n3SstEeqT79rtCDMnt1M5CV9Jm1pM4QmxgGXxN3HCj7ssr56J4Whz2Rg65Xwip8MooNxKre94aAdpehNpYQ4EoW",
  "key12": "3VsEBCC7FR9p8e4UQ5VqDSn8HDMjngVDC5KSbRP8TkJA2Xe582WkiBoXwZbYSRPFMAkHMXExz2sbaWuR4mGDBBUE",
  "key13": "ErRXrwCbKn5cPkTCMLUNYjjp1iXkQnMwoMVvqzqMyoePZXw6iSLppwQjBkWKVJqRM89NnTCW6D4uTBhXnZEchJk",
  "key14": "268fKdmrYVvcdYGqAMphKrkcZQTGJ48YFNam65mAaDvg4QdCYWSf7KAEUgtNRrXx1Hyke2WrBmmKyzfJfAS4v87b",
  "key15": "AVoSuDN3XuvqbrP4UrfVddzyBQuYHtdwfzV6AtuCTm7Mso24uyM7JsrmFqWyMYhTuStyKpvJM5XA2uaVi2JTpeB",
  "key16": "5yB7kYmzjCEJ9jYcQfm1CUUuvSi8Gu8nCGCNR5gyahAeZ9ArNyEhtc4QX2WWfdyNEAwDTCCn8fePohQSnGy59hwr",
  "key17": "2BvQ7oxDkdoMCL3TmYZ7MxKcNm97pWEGAyuAD5rnuPyYhjKdnzeJRDUaXRXhpq3JkqR54GrMQrwUAVLn4y13gk5o",
  "key18": "4eph9vuKK9dXMbotP8t1Bdu35TNtGr6Edi2wnaDJXKUBTqz2EpDGxPWeenF3H9YAC9RCfRfGUTGUWtBxcBZ3JDHT",
  "key19": "FdbAahWL163bMdPQ8kep4ThnXXSzSHn8sXJHRCDWB8LJRLBBNKxrqZozppd14jfd1XB4Hk3nVfep6TAVnXqgoz3",
  "key20": "4FJy89vim11jtYqUGz1kGjWhAkefnYja9sMYYhGNRZ6kpD5j2jK4QUrzXi5zn5tGRKix1HmVqT6CQ28fASba34Zm",
  "key21": "4nEqS5A38EW7B5R97xUrCJcrA4cpau3iUPi8ckp4QpViUTrKwCe9xwUQwJ7FFncawDqxKUeZjT81raZ6wM4uk6wo",
  "key22": "5H1jomwVCXHsCxKNyBCXEFjxZz8n96xwMQCGvSRDB28PnhzNnmF6gzpNZ2VA4QhhtH6xkZhgQ3QxgziguSmc4Sus",
  "key23": "2CFqAoVrxMfp8wiHqANLmedEAbo7NMoH8creE1osxtwYaeFEAK3qceJdU824ibceaGY9QNvzvpLyXzyeqBEQ45Kw",
  "key24": "4yMYKGNJFDWohJ6mm2tAi4XqjPs5QgGJb3ARsXdSPiW7pV1boZ5juct1ZhWCLba7YcBPAEbkiFYxq9Ntajvvf3ML",
  "key25": "ZnGHUyQii54efpddSwFpU96WRRhjLzUGvU9hAY7413xNsQzxhnd6V5FucF7sms2zrX9xg6zstmRjcoxcgBiCPfW",
  "key26": "G4GoefN9sjFtHwfFvVmS76NkBosAwM5jLyJ3tJmsbXZnPsw6XiJWzbEqfgurWDLmNWh8nsdyvvoGWoNaJDFVJxn",
  "key27": "2kLAuUo9DrkpqB1YaFqFixc6SE2g3KFnUDq5xdoWjDARtfnBNe8dRGDfRfaHhr9dNYpLc2F2sfPpWnxeETED7ctZ"
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
