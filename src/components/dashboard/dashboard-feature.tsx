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
    "hrV1BypCq8owLEBKtaQ1uz4xnjeMVi5Zr2MWkLckfgfEoBdyzcGw69yzNNnzB8F3gh4EUcdwaMYPQoe5fRrCk28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHSEc8H3kKSLgt5iDArSonXjgfzibT4foPoJv8WAUo1UWbSA39nwKT4CTuvPrqKJgWAbBChM4FZ8i9LNrZaUUg9",
  "key1": "5a6wTW6RokKA8qWbpYViXJjkKTNLmqTvJq9zWDdEqkB3rfvJftRbY3PjY45w5UdayEFVVmnTCSiynopJRXrt721F",
  "key2": "kwmrx9X1iEqwqCkKqviaw7mezTwkAoBBR41Zujdrq8EHJsQJKqU72LcYzojAMEj4WB8Vk8qf3x4Pvdx9rE4f6At",
  "key3": "2uxqEPoXbjfp3x6Empkst1Aoz8ejJSGrbYWpNZiGrbeWdRkk7ENoiaHDkN1tLTC439nrfGYSg6KJGigJek9fuXFb",
  "key4": "42ZnJjKjd2vBFV8JP1ZnppJz6FxdWVNi3c8yDJpB9WBBzeVgRCSfNWCRvwr3ZGnVqjEJY79A4MtaXMs4cK24SPkA",
  "key5": "28MGcWrrxYyzoWJ4TcyBYe75Bvhrp6vJD6mDjMMqNgzPqRARkYn7P4dKFyQmaSu8qi2JEMSv4pQKCh2DJr3WL5Eu",
  "key6": "Q4yPR5EtjF8owr1zyBHgRwjCnvQEPvsEFHvAhVVhy8Bv4fjfvqthWkrWbx5M25tU4igN7aUhbbsPSDWeUf5yV7D",
  "key7": "3Dgy1wLFmYdfmRPByyuxqUKKSfMEYaqCrfLfNqtdqE4wGeduYNJBXoT5ri1mccX98nCHuqQzCFZvVo35L4E4cUFW",
  "key8": "2kCn3zUnFRaFeAGS63Q1DBCz9U2fpXjejxhXp8pzHZEt33Dm2V8yN8sPqWVNoazhUeffhd36Pt7aWqDoD14SUmXF",
  "key9": "5E2XRwXFiTxPzgbJGTkSXrpRa3Mgxw7dnPYZ1v9sEecuQHyhAA1mCgVc5xmphUTx62XcjLbqYFMK2rAfMBD2Pcp8",
  "key10": "VY7m21tzsD3TFHMHYG1h9ATjBzQvaiFP3gczedb52qiwPJZ16tVH51QPvKPrpzpn3AmJ88bdCD9No1nz3Dmwaxu",
  "key11": "LXJu33fYb6QPbnEq8HeaswqkwxtNud2GKWxTYDVacAgcbPWvnW65QuhU4DzZccods2jzS8GM92unpkJ9kfcYKL7",
  "key12": "zkDS1aUSJFVeWkLJ2fsvaAE3Pa9m3oDKXWgMQopuon9H9GCbuUoKh72mAbENCpvoykP4mDzUny4eEV9tTpKwMfC",
  "key13": "5tnAcdQz5KRQSdGpJvvNbz6vs1pTpg4W7TfTEgEGonnTqxXZrxy1ywNB7cpmi38wsQtsT8n633QVDeVhLrajeZsd",
  "key14": "4LuScF6RBJirgvMNRiGSCuyHC96pUNCXLrAKgs9YE63wWcdP6kwx9Szsk13uC3g1GVxSMJTY5EiGH7YsebfghqbY",
  "key15": "rh9xtoX9DW2JUjUcJY9Lj6H7yJQkyw7cAJYpLaz4dTrqM8HkfNrnNw64fD8rRWmRop4b4b17EyynUDtM9xr5Lbr",
  "key16": "5vF4Y7gruUNqfbzpUt8XfixxNbJN7WDke7dbyoza51aSVvVxLmBaYhc9x55jL4LdwJWCZ2rXUvXhLuidbsN2rDLM",
  "key17": "3dEpXsVh8piHiAKKBTiJbVfEUVsm3XG8N3AwQKfGXAKJGRtaGPeSBEoXGGnZHLYhYvop14vsatSo2Pn24EisEpB",
  "key18": "5ejdFxDNwr7isxs8N72D4zVvgVn4kkasWFVcsfhF8fugHqUpB5BNsMdxUxirwkCtNG5ycoDw4wRAfnptoPhEGT55",
  "key19": "5q829Ezo3mdv5rCvZZjxUEzbVVpyANZmiWd3u4nezQ9s48eQGJ7jqYcTixMQVuS4QcsTvRSbHVsdG4SysLxf4hfd",
  "key20": "sybiySiK5h1nnbRC2UnbRuyHZyVKTRkzZbKeApiEjvNRPqqyN8Bzt3xhjY1wVk8hFn6x8A5DNX3Gp5GAbrTETBX",
  "key21": "5obJfH2WKV4rof8AmunT2BtkaEfH7dtc1LGunmERdbFNa3JkXeMkd9g6J4ucA9rrL7PtRaS8gKaHPRcUGDLkEtVb",
  "key22": "4tyCvQNuGDidLm8sitxMZ4FhGGpYXaxhdAV3pSAjpfp6PKdWo8bnsAkwGWDuuCk38kx421vKA2XKKQfnoSCgjHBX",
  "key23": "49oQFBinAf6nkRBPctPc49L9pcjZrdTt963k4QskJX5JjVagkY2omCXef3LLXDpDtmmdHYB4867U61jbAh3QWgpr",
  "key24": "5hMDLvboeWsVQvXENpuqUdgfQ3Nb2P7LHcEcGLKqpyaFNCeepTd2hcvvmJP7Mg2mTVDCpg7MVSE2NCphvFhAtTui",
  "key25": "4GQrPC5ukBWpaBd6Sbrd2iPXFcnQVaLF6wvxq2FXfLggyAYSTwD8TPJZk31zdjsuYu3PCRkc2exLk2ZC3rDE5xhJ",
  "key26": "Q1ohC4kGxUofRoPDYiGUT4PkYjpRXEBWuTPrPbf1LQy7mGFoforPC6HuYUaLkoFWgLUBFTUb5s2BSAtnnbYxj2o",
  "key27": "4kY6xXcssfi5F3r65eBhCnTMxAwFaik5ph87tDaQQYVXeTNRg1nQSNdK6pxFKbi8kaAEHohVChWhznKGKNAZbFsn",
  "key28": "3cd8PF2ZRPDpK4t1peLyWMH1BdSYYEkDko2uyVPiALQt3B98xSizVC4S7B2WLkTHHFSsc34TmwejLi11R8s7481Q",
  "key29": "Rh51AQQoUpiBXo3oJSApMe8UiofXkTWAtdpsoGRbWRYYX2NAMn4onvwic7nRhG8doSnDHasmhAMoYLV4Vh7cjca"
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
