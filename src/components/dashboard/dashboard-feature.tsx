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
    "4Kxos75QLsFyhXRpJCArNvEaDA8uw3rN35SrbTX2gjpBm2wkLFoxN54mFYwjRa2aEfVi7ETgaBM3Eu1athb4rQho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3puLTXGLueqaFBGXKoDYFrGhjsuuw2xrKtG5Jj7yMiSmc9b3oNvWRGAJVpM5EUBmK7CmMUJDts6kTWg1mardtHB7",
  "key1": "8wGop9Emr5XqTEG4MhroaMAtMvzjVdDaR2XfxxTYqQzd7k7nvqvsqLokxJFHfSfK9Rhkg3PJipVK1EgSu7wJteQ",
  "key2": "cWVry3s2Y2fABJjDxF3NNwycG9vvRXGBwrAoA4VF56jXpAF11co982Vc69BPhideefEUbhUW224adFoDMT7qwmF",
  "key3": "4qZXZuYx1LfoeapFBMbZmgCsdfizVxw1gw4LqeeaAmtRukVV3GTP8sKKG7dmGA5UBE5VVDYUHAscwWFrY1MeWRei",
  "key4": "2ATyEP1cgDoSkyR9Sc2JBM6aoeu7QC7aNyake5AAMA8QtTgGeTJwP56T9gFivRDuzhAozEpSqnTggadamquB6XWi",
  "key5": "66QWzmYPAp4v1j4hfS9V7JbbrvvDHkcejUVxw9iwGwYRteugcEQbzNdeUcB7RjJSsUxnpowj8nMCHwhBJaQFr2bu",
  "key6": "36Y4HkWhcc8XZ5LkBS6XvvhB2fFNMKEqTf9WDJFAz42YKKc13SKVvWa4XsN95s4Y6RzXkwBF2ywDcg8j8RgBm15",
  "key7": "5uDwDMq22DwvBQdzSMA5KZ3N4eJbHs7AyifYLegF1WU1BbD5XB1wHuDD7hGz4T3XkSXW8fwcoKUvLJfXVwg7Zqp3",
  "key8": "5mkMa2ZbUxWKLHFiB7Bzoy1DRZ67XAANDTB3WX8rmgNCtLTz7KSAFCR2GtA19Quj3JZ2D2tU422GkDfHopDutcYy",
  "key9": "3f8cVxx7SonSi69GTm8CtarESMrJzY9LdUwBdJP49MiijseuLBXowcXz8kUQv2TgxmjfDVZqogL1nCjsZA2CdTZU",
  "key10": "5EBMNx76SM4fUU3Ra1njZk5wnNJ8RC5VtnzqxizCnAkU5nUeNheQrQmh64EK6SXtq2opzMbutEMGBSkm2yE4ggzQ",
  "key11": "ZrWz6wnoDgLZtT7CeqBECACDpKDrCYZ1XSdGseR297sY6W44jbRAMQ4oQchAoaaESvRNa5AiZ2SjqCWRD54k4cv",
  "key12": "23dev517eyu2szPW25jkKA6VcvPSjUoQUBRTXr93L5CV2mKqPXwtNhZz6pht6Db78TonowyqiSPgd42bLVJNeFTY",
  "key13": "54FovL9prUuxQADSrx93h9rTHGKBNGXbpxKvhVxmPc7jPYKLPrJ8umNaafRBcpu89htcd2qS7xB9KJ7qJ16kDqY3",
  "key14": "d9EfQUpViEp6fAXV5DHmWf3ddkx3cstFAPGmjBoHHMgjKVCihnTP6YW5LNXxNPWczH3zMhLGz6AF3CnjhhxqoBK",
  "key15": "33sUTwpiUDgYsk8bVPgb7KERrzR9m4zmUw4esm2nJWjTyXeY6EhmprppsXdxzA1ymUQdhFEGUCp66cHHPSBUEbvP",
  "key16": "3PAREydMpxTaEXxS4qJKnf15YAx3Md8nxDCZAySPThJC5bvSCAKqX1GgcF51gSgwXgwtN4bCAM8bXpffvS1WUUEQ",
  "key17": "5SmNfngeXsAExbmqxUujPhVcTRLjWfsXkwWSPorexX4v2D9cvWofU6NNxDpikSnvDEwH2J74uJnqXZCsZS1HbY7W",
  "key18": "2QGLGKev9gcxRSS2zjhC3RDyv5HvU2JG8Jf8fMYm3HQNJ8sFrDRNNYCgzyF8h66gd2DrjWEzRAFKJfg3Tjjj2E4i",
  "key19": "4FEZYGxSJRm8sj9jfvaxZ2Cjygvnn9jNh5zKhrGKaN78GTibGXByneYSiyE9MHFh4699z6ETxKQEDmE5E3DCWXPJ",
  "key20": "4Fyqt5PaSAAk2CVGTDHxKBPWu1Mm5DKNP767jQJdnU1SwBb7wZ2zuFZEvFR8fhKTRW9BLb36Y8HZ8Ryk9RHLVw8q",
  "key21": "42g7ou62vHxgAuCsDf6ur4UBbBd8ozgr7aM3Zu2cQbo4mp9cKdim5zM7yMGGgVRzhrmphRk563fvsxudupom3LN1",
  "key22": "5nCKSDCvH6zL2dxV61uDzT7jWjxtKgViTkJ2XLRRaNA8DTHYRRmuHzdb9rgTQpvxMYyC1A92HcDrDVjYb6oSf3T5",
  "key23": "3dDopaaxrywtZzdpsZwyFSn594g3j9smN8E2TcVqWPFZ5T6PiyiAEdTU1Z8cvDhDfnyQDJgZYBbs7kmZtvfWJEk6",
  "key24": "2BeF8uymaX55pqj1Pu5cDjM7EDXmF3NAMFdmhbCozSV3jUf1uct1nGxEKmDEQy337dot7DwSpjTdR9K91UGUqZYE",
  "key25": "2JsYFkaEK91fwL6TGgDCbSFeCXHxw8UyyKFEQPbfadW3b1mwVkhgGMAYBVxmoUMVYCi9GoUxzocmkSawKwyaGv1D",
  "key26": "2JunHeqKUfbpmXpGiYS6F8nUpFB21b7zWbnrw3xWZGMCr6UYB5NpT6mbNAYhmREoShCZELi4Lm2AjnQqekTUerh9",
  "key27": "sNBUy9b4QDTULz79HgPPPxXWHnTYZJMPJbeDTarcbh1mPnteJU5wQkCsCgpuKLEvM1ughoesJUU14t1fWM2ooaK",
  "key28": "4QB2h5qkv4S2ephDJLRmcXft14wufn5ot3QX7aVcSrndYpiSeup54pZcLFSExcxqab4aiYhthGtPhP1QPb2nXCXc",
  "key29": "5HibJkkPieNzvz1KwALEq2KpkeMzJHSbPJn7mco8BFRw6fgxwX8ddizSsLwChL9QiKtuywPWgsVNm2SRqgUDLuT",
  "key30": "5JH8qBCfDtnssKjRGyG6z9FqmW8yBxZjKNvmWz4J4nTgorF6kKbMvkvyuG1tBsEGyxQxQCGk14vMmsPXHyAh1iJR",
  "key31": "3Qpp1RkJD9qW9TAohy4L7ugViNj1mnSMuHrrsCB4bBNyVvyQuBWnNmArb5v8PiShUqqCp77A8XpEJnJWzPaH9iQq",
  "key32": "4A2yc2smkVjF59beCeFDFk824J9t1QDV3jfxnfkTTESHAmGopTgJzyWamKExnXdqyF4Gzwm699dQ2goe9tVyNngt"
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
