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
    "38dgNoJXKa456BdYoiRAbXAaDx5Z4UGKXGPq3ZQ473MvLbMfBfRDF7AZvV3gusy6sZ22EcHieAVh6amm11mQs6z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AonsXUvSnz4mRjrmpNMhHaimSxwE9dCrLU6xxwHHPhMt3NPRaCcTjonqFgA5F3CK249rMzZr4wxfC192bBmzimM",
  "key1": "3vLd9nM2qwE4XGKv5jB4T5cHUy8wX3TQoKjumzahBFWW9GVSpgcGMyWkX95VYoD8dzh9aMmpjdXvhLnMT8CcvDer",
  "key2": "4XFccJvWWfsU2P4kXxyvmfW1CYmqSvZycEfGBpmD78wxPPs1Zs25L8oJDyPAz792TeMEQP724CKU86SsYqTquY3m",
  "key3": "PDToFw9XXJbjVV9EMUH1zXVhNgtyDP6Z74WrCGvz5n6Uwc2w8h5WVy9RbkdvBZfB9Pfb7G5ipTaCJyg8qHHb4nk",
  "key4": "MPGoJ4c3MJstmQf6LQ6Htof3Z1bXqw9MsAMxv9tR7LiscV7vDkvcMxR5z4rbP7c4cgRGWazsqpr3VtYGY56Rpcg",
  "key5": "7xjXtmSzmvYVzb3MoU4YdPkV2dFCQ4nwTiMFbmE8oEJF87M7HiasWowNEHs4BbCimGAQK8T1Rwx2RZarBbuvwse",
  "key6": "37yZVPKQCLSnf7U99pqzeCqPrzXRaoxUu6f6Z5K77wmo6AexeG9krWkGX1KqMcuGyFdCsLwFy9u69jmeEn8hM2Bj",
  "key7": "3e4kTs3PuWNQxK1HBDuBdXKmRTnS95AsojauW9xrJgErz1c5eYAoQRCkbQAd1T4u38uUE6pQWCNJpw6haJmTySpt",
  "key8": "2DtBaoftWAEkLURfWtByx9Q3AGGcWHVnHcuaZt3Eujhx5t9ct9zTyz43pGzxNsnztCNm3F85nzdKZgT5SeWirqnh",
  "key9": "5phG9DGFJajdr9TeEkSV7SvMDKZDwoq99LtpBXcsUVySx8gDzqFPY7DWfewoppSyLJYysXJU6HvPXiJqUXmoFiqx",
  "key10": "3C7kwWcD3MPdsTGzYrRyJyzMesv9FUXbqt3qVZhZY7v295WKdCujxXLSNVXgDG7XwcKTne1GJo64ckkxSUPRTkNH",
  "key11": "QbbSCvspsiv7qbFbkETbwT68zdfQdnahxsmEL2g4PxCPXNf9mag3FrBjzXnKjv5oHTsGThM3qipJePbrKaexFNN",
  "key12": "5X44Etqk8hVW1jtCjKSixXRM7jcZSTGD5aiNijknbrGwcJdyEorj9m29MK6SRYaWiG1JRnCiVCGnUrMivcFo3dH7",
  "key13": "2tUyZi8A36ec7h9t8G7AMoRzV4fpSx5hDWjyib6xMWCo4LSA8mGXSrGJhoNkQL5D5sZBAPdmsFxjWxrzBbsWbkw4",
  "key14": "41NxQXcHRfQhKKRmwHDzq6DHnhSGYgdBUfsRmZvrNtw27tZbudjNf2osSKykSNG6mDwzsLgY4jukwU54LqaY7uxQ",
  "key15": "yXkwrrdUQJjjNH9LkjStcKJMPfeKwZAmCSWC1gCTLRnZbe3UUGDHqHjJyPYZcKFENaM7w3cLm6fw893ip4bfikE",
  "key16": "rzqymXPukLnKsD9QoVpjK11eLW3JYu4KWwnGdWmava8Jv864ZBjZbTCocPJH9qHc4THFggUP9ZHnCAW8ep5Z5vy",
  "key17": "3QYH7w8FodUvSwQfib5YrLQvK9HUfmVVBweeLUmhJZTHTXE9EpAebCKSERuUXZ6xX3DgU2FqnLud4pVttRfHYJ3M",
  "key18": "2Aqj5vNfeb368nVKr7djwmTxn7DXHoBqVhdzmSWAMNn55M73vw5svQpmw2KZAWV7mDrDshAC1wCCkkAU5dFdRxys",
  "key19": "3eRpPXG6fJ61V8QXqr7F9AWhs1uD7oo7HYPhgtxhN38jB8DWxczbtMu93TUebjHM5rAEf4v55hPhQj1B1RRg7qTm",
  "key20": "5Qt3uXCvY6gVVoGYJZSfiJ6VMKJFUWVfoGWWFcbLiD8ZEWC2TYJRQAH622vuyNUwpPpj8qpTmfjDW5kPQ2XEa692",
  "key21": "d5sNpQ6BXaRCHUGzLRaqYhgNzjWokVUf4WSC9mnU5dR97HbKkyibp5NwoAn58WgbFu4n3TsHbqTFAsM6WpQTXSP",
  "key22": "5Uaz8SBeQUWSYV9FuvTSsLFRiBS2BE7UxCGoTv7E94RNnAJw2NehQJ5FWHLKZD6YeNkZ65M6ncYxCm95bBuzSzmA",
  "key23": "dVwqMaigu3svoJThnjbG63N1PHz3wjbRBG6RZGDd5R2m4zX933Eqjdvz6APp7Dc3uBRMvaEbJV1kwZ62Sfm4AxL",
  "key24": "4VqvEMBvxKZNZ1RacqxY8pckrA7aYs7MevdTbDVuVpKcQ931LDhKUi3SJgVujnBZZrPxzkWz3WMAUCUSYmWp1hX6",
  "key25": "4aH1LHBk3umhA2ghGje4Uwi32hBSyggtNr3ietD2UZTB4nqBsRmtep77SGTgRLmygfZPGFerfMFAZuHACKBjf6hj",
  "key26": "2zJpjA5ztcfcwMyX3miHMWKNbdeKw7kD2HDGQ8r4XUfqEDEjYSoLfP3rH4Vf4PPyhtG47Qm8Y9AXjjqJ5BgZion2"
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
