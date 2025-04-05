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
    "9ocnpUow6vCCAWQbJZfkkaLjCJvX2hGHpEKoiCRJUQ1aFQRsMFLNrGpCP16QxrcfKS84hW8cKLTG2u8YNKBvjKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWjKK6abwogxPGseGvtAoaA1cb9jYzjJEaNN2VSu8FoJ6Zpu1PK16L76FMSwXSCtwzzzg74y44cuHYwGjm6k6wx",
  "key1": "3gTxMaQ8Z7hLoDrFe9AmNhahQ87377rYUnb9sEyzqnPA36MhZuoDz4vBF7ZP97KDhUpx12hZvQvT3fGJMQmywztL",
  "key2": "Q8RhmVFHeL13erT2F6gj27fAFFwkAr5zUxka9GqDAx4LP4jxWgrgFrXCGtAW3RZQ7ZgNpNbC9Xh9fy588F2bdKH",
  "key3": "434VfGghBQ1DNA9zRF2wi89EBPEJuenFiyZiCDRv9A2gSgh2pW9ttRf6wvNi34Cs653NFtsUYrkjtvX2k5AM1iA3",
  "key4": "24pMej3WZPEM2ZtpiLR8Hgxbu1nTbPNs9EwD8QCrEbov9pmPLAhhPrgNPmYbbvQuXabcWkjSk5kMcDZurpjtA4Up",
  "key5": "2u3C1D4XNoaUjZ71ZBmKSVkjS7y7HdpnXNYJhK7rfRnh7m8dXHVChc9WSYAkVMAR9RP8NqFdn4bQmsdijdXdeQmA",
  "key6": "232JxTjUGgM1kEehx1DxDvcgD1511FEUfG9LqKYBtHKrxqkKHQBAS4KCzzPuamWfE7dtj3PqKesZjFEY4RfmCKEt",
  "key7": "kWVDCZYAQcJtBi91p3fxroB2A4aSYsMhkwrg3mgwsYxZdmPuUHE79P6VtRw5FSznDzbqnw8muS4p9jZ7731eUQz",
  "key8": "4dXfCVZcZPuSzv3DHc8zLSFm5BUMVzXtUHGZYurJmyKPQDLVrn1vPBkMTkgPbC7jGMd1Mhwsf4EtHb8PdBkb4tYp",
  "key9": "3TMvXiMSJ3qJX7Zmt2jYGT4d8Vk43PGjtpc5mKYSEALndnckFt7jfpVwiKBZCHaa9uov6VVmgFGrgAibyr5uYGM",
  "key10": "mJQzdy6fTCC7PWHgv3WSpwgsRHFQvCyCm9kiUupXbEnVj9jFc7RjqXi4K2mX2AVw2pkninnGx13xT85eq4o2Dgz",
  "key11": "34NnjD1brsuex4MCHsZdGCriXe2Kso68e9QvYRLYCeJqCCJYiMYaxWaSG2D1hBS4gGEH4kucgzELWADwmt4HWcyq",
  "key12": "4TBY38CDJuphH8SbUr6b5Y2CiDvVmiNGdjM5BLhsMQ9FwVQM98nukjAn1JSXzpS2VuWePVohoHCwYMM651GyUags",
  "key13": "4NEb9B5ktTKMAUrgiBgFr3UBCFusUTzywW1pMp8YnmycHwuEWpfdLsPXZmhjLXXc2AZZXLrMGEjf6zNAG8wGMf93",
  "key14": "239bRLRqjh2T1z55mY9jFvth9Vg7hYYwDi8yhiPcGamnZgqKNngiJD6ovi49u9SNK6bJptqVMunWuU9hoJB1Nt2v",
  "key15": "3Lksgmo9sd7spFoDxvvY17bHET9MdtGsx7m8SBZVtdY4jkRRKjBBWEut3F1a7N2KMZYP3KdvVHSRxiCBEuNTQsvR",
  "key16": "2u1HXQicT7tE994CRSdJ6M6SEuNzbeL5eq5hfzrLJBRoCyhc24sadmrMnq89tnrWTGirWGe1FRRzg7ipV67d33rq",
  "key17": "5o3T1fPi36yHbhVWEAz8aiAeTre7tniQ5qpqsS4YvpibcyfBx8tYCaEATj7yLVU2b8vuKRsP8PV39zterraiaAGX",
  "key18": "55DA3KtPV87EGtqFjNTYNh8PnHjC42ttbFmGKiYMSYkVrXoYQt5xa3fRiz1CnyJwo11BUsMF3Bmckzn6idYWVSmv",
  "key19": "6Fwzu4a963o5SsW6EvGCtupyMmKVP4imB27PK2V7cqWaQSLYHX3bTTs7gt8cEVSgLS475HuS5fDsYJuEgxYBaxo",
  "key20": "3MLkqtbHzcSqH5JLsG8qmDcXyuBP6KfguXArE4KBSD1xWwnEt8XqZVWax4fUxdTD7Xo8XDJBnup4zPq3u5Ydqryu",
  "key21": "3edsPrrkYB77NMKHUGwSQh4vvvJBrTDRkVAZEaG8wugdc6LhjqTuqkRSfVUNYZzcuKNoPbsMfNohsbcnqzsa1GWS",
  "key22": "ZjEhZW2hJhWLmmwvSwEFZmky5oFEeZ4ixakQHPirj1cmC69pn9XTNVSJBHWYVzYf74oyoyffANwbGdo1PBA1tfU",
  "key23": "oqP9EyH5iGDg3UUKF8CXwBzT6GcsebBoUaLavhLySWQxNNDJXVYrXLfqYvaDYDYNXFeeUzqZD7eARhfuRZA3vMD",
  "key24": "3ozmnwpJ4JFJ4XeVSQPyT9B1TbL7PyZTAxFVx7aanU1K3nj8pd7AtoDRct5D3aFVHfZ7vLbhZZYXJLA2rqBycwRZ",
  "key25": "633yxsu3d44AudR1spQ5b7NRBmPPqHfKvuinhktpiaMfTdT9kPijCwr271gsgSxGAW9ozw6MedEuw8ShTRwLYSH4",
  "key26": "45WqJTrGVpJ4yvs6D4NkCUuxPYGZ9wdh9jvsXyKcR6XCBMuGx96YJSjaAbJ9f4GLsH59r18RwmWx1ia5RNXDrLqS",
  "key27": "46ZPEsLkxZ6tKPANBgc6kC1DeV2jxbP3pqdgCz3kTnM8b6dKe7pYWkhefevBdn1m7bCwiHM4X8C3j8yhModzc7ps",
  "key28": "4yTHY6apvrTpVR91XrwJH1Ua2TLV9Vj14fqysxTR9YBDU9ebj3ndoJHafoqqVtm2G3ZRySh65fmP87SaaXt4UtxG",
  "key29": "5Vf7YEzqaLP3efXTu9Ghht96ZwLA3z28eD8rjP2Ty8qF5Re92K9ZBBoJemWBaQjNHM2bMgzT6xGPJjqk5H1Jm9zH",
  "key30": "4ev8gmtNfKDcVyUV39qkDHfPToYKK7AugccfZf1e9786BZ9DLaC1B2ta7MnqYe5FMt2oJXHm12DxdFL6TYjQiHU9"
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
