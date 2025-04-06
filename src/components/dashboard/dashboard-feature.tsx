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
    "2Jn9QdSn2gW6xHuLgbjGCiMt5fVdQgAzPTP9b6xbk3B2VJzEjCXb4kBdxm63wourVkQtC6UtoseCHvWP8pXGcKoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDhDXLCTW5EXnbhcFW8C9Ee3ogU9gTwRjX8GeowWSPm95NGkVmkhGqHFdBkMD1d9kohk5G6TjSSAvvaFjvUXVRF",
  "key1": "D1WEmkL1PqDb9SwndnYb4rNRAfTS44UYerys3svKimEsWv1iYMT4RXwW5PWViaAzcrSsTFkjPqKPhEg3gF9C6Cn",
  "key2": "41StmEogp9d9AQqt78aavYARZDvonZuVsy8XMcjcfsuHEmJz759Dcm8Nh2PrFojxWwuK5RYWU9CSNduekmLWc57C",
  "key3": "iFCrBM9YKBeQa3gBzWUcY1SaVncm1LUH1mDWtuVbyJSy5UaNNxwyfRn3RXxMfxgxQkUe3TGR2ffC2CuajvC2q8r",
  "key4": "2Z8eGs1GLZ96ri6aVE8TxhxDRnnDVeBgPUmwXAANde7exMmRrQP6EotCQER6hziXMrwEQQuS4mqhAtu721777yXk",
  "key5": "2QSsYvTAiqaxKdYzzsfo2K1DNBqeFk2r41JUaGcdKBXH89uvArX6bp2uX1zGMniAEVV1yAhQ6Kov5JnQHCxqpu86",
  "key6": "2fbuAJvfUrenGxqvWd8zGya5hvdXUQNd2ibL4Zj5HMMLH2m6c9GwWpMAvvyK58J5AUfxi8kzhmQzsvi2eJ5YVJaX",
  "key7": "6WTbwmeEwaK9QQPPFUF6i7KuCeJxKewAnXoupCJ5C2TAz4PSHy5dh2uzjQ4ReDxtraUB97L1uS3EcSapT46CwAw",
  "key8": "2dbczVwR1SQYQwFdGYdXQNhZ94JsH8HC3sUKYAJoyWLVwwWRwXwz5fFWrjPtvzegN9jtCWDx7Bd3mgcrh3qnH7Uf",
  "key9": "BJFkxAmEnu3RZNfzDEA7BWLG1LutXRoKyRgYnxdWmrDRzsDUf4eJQwMKPJSntinKmVkXZPk3tkPzthMC2bUGGs2",
  "key10": "27ut3XiHjdYdV2VoG7Gf86BWJioB5bm8rPAoCUePVDVgqJRCEyWUYJTD9UkufAwymE49RVsPS5dVmTsrgku2sNLV",
  "key11": "5qM9Wy7TGGRacjnaYkF6w11UvAm4q4db1T8QqedwMtGJDDSrCHk6p5jhHyNAsiQFrtGaLbGnHZCbPTcYzzvhT7un",
  "key12": "61XgWq8RytXL1AnPryGoLxDtURdiKSp9VoL2JombPCPNk7BnBAV1VJ1kAEdYodSd6VCcZ2UDCX8488mupZAYUKG2",
  "key13": "3YGZWuSJE7xbEREYfiAn2nJAfGaoXGA92E2jpkd2K4FmbzrTevau94G5xojcqR4DkDQxvJieLNwi9GF1wxzpVHK",
  "key14": "2DN3Lyag3B4CcPor78VEQgcEGMxPTwrU2nFfVgfuhHodyFXH8gCYh8HAh61vjFnfFhw6KKEZvUw6fcg6ucTNutnB",
  "key15": "4rusUKb3fFUJbHsC51zMraRyMbJ4FW9ufe3NiNNqqgBSVGtGBZzD65fhgdvYaxAwDhNE44WK7Gs5epq21coGTrR2",
  "key16": "cpaJt9QcAHFrW7JjsyHUbPDfpvXGWPD1xNERvDyBJqQJP8HGgppScKGXDka8h5ZsqXv2bph7RMLA1BBx3LDEwPZ",
  "key17": "2QbEdadfiVrFoMfb8m8JCtqbnC3mqGdP6gDYQDyscmD6EZpPmxeUhUDrMno12it4KKi3bfcSimcDa7D2gdarmYD6",
  "key18": "2393S4VWkhgquM6WiRqRSJuwFjYvmUtjLH8mQE2ChPqUaCRsjRT3erz5f11CpjULq6mEC3xMSEAwCLDzzrZ1NqwJ",
  "key19": "1GRDdKANR9F7TyJ1DbPqpsAjncpmxV8JhJGUdSuWpsziiHdPdXNeyZe24TYRhAPM1Hd8RzqGZRomBLzjmc2oMhP",
  "key20": "2Km5t7StwnQuRDSEVFa4BHust7MvqbgM5o3wLRyDogWgdT6ypdm2K4g4tFgjyK2PopEYdazd6Lk3jxeorUJXaCku",
  "key21": "5uTqje1Wyv9xP5394fADyMPeCq1NRi44mqVaYKzppDp3R7MpBWd6RTr6vZSN5zdULDNyEkYMc88AGQ3mFs8RNoxr",
  "key22": "251JJP1Qz3pLbNJtfkUpJir6qDTj1pUJSqrHbdRH2iNDYjfwf55MRJFNDWUwdKNy5rca2xGaQAsVoQrq9zVUT62y",
  "key23": "QZ2cYX3ZcvKCBPFMbjgAQfyKwN8p3hXSnbGs6NVKYntpyswiieHh9cJ2xJ3NSBtxrHsGzB4VytiSenJoTJgzpdW",
  "key24": "2QsMLuzaZHQnJb3AWidmEX6AfoJT7CTsMmWG3LKwVaNegEJuwDtrYgogunLyo944MzrsuKph1LreoGn6bLV3KXF8",
  "key25": "3e4mMYgECi7UxkmmqygwmRpsFGLXBjh2iBmpDCDmbvpFyGwMcnVGjAzLRkqptE9bfWiqWhgrr86kfJDFidN7N6VY"
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
