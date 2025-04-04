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
    "4ucHekDgApzDSccUxPcf6o3GgruszCg1suDPxGHCXH3vh28tux93u2gQfM9A2DMArz3ukZKqWee6QzpSTAB4gJKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmUx65B5rv5WZ6K4y51PnrdkCSE1apZdiSm3vvreH8ZipEUEZj6AiYny2aEHbcKG1om6txTzQpz6xmnGKgmRoKt",
  "key1": "5fvy2wTSJ4JUMKAypGGQ1ygbhww1eJqojogzLGfWNAcY3361nuaSK1e5mM4nET9FLGwz8VeBXYGz58ijr7GqGtPS",
  "key2": "4dTGoiQDQ7hAKQXRiEcsXyq9MZUcLYnoT8kYnhvqL4bZuLhHc1iVPWXpwd8c1t7TUxSfxHMEdR4eXZfHdStb1UE4",
  "key3": "xR7bJnwoozYgFuNgn8hhE37FLGi46ZRmHiaDJXD3ewBeLtmRLiREK5XZJ6uKJWY5zgcDFDVDaHLDW8T41oUBSUc",
  "key4": "574r37tUY6jG6vjNvpG55pXThbbyEp7RGjtZ8AJF4q7aPrR1g3dfT1GUMTMudv8AGLtxxr1hwfkspvErLL7P3Trs",
  "key5": "WoAUsUm7EeXkAf52jaJCZC2KNtHsZS7jMbuPaGQ5MTWj7bBzefjFt55KgLEkfoZGMAnAS4jRbMbdXukSC2h8BtU",
  "key6": "4u4eyUd4W4yeRLJr5mX3oa4RobnSQCdky5qwnCHGacEqnf8Ghv8WgauzVqTA9xdfuQMvPaHyHxeHiD9xFKP6Ew5E",
  "key7": "3X5ogvbPpXEYgR2A3H4zfMxGZJs1CvWi6LChNat58gGUffnWBfGfW82x6kp3qqXfLM4c6MrMXxPGpSFje1VmCjnV",
  "key8": "3j3S6uwdVMv71iWMfx7hQ38BpYZtxHbp65YciyYZtwtAHG8B3LFV4bBtnC92JUF4fpeWqK7uQyxeDtTvQngA4uQs",
  "key9": "3QdvQLFGw3rm2HmyQyG4Z5pTND98VDokRL9t49XzWFJf2q7Qb5D9bD5beGbomqvKWM9Xb8M8pG3yE9iBr3FZgoVA",
  "key10": "vruDv5gQVpBcA4ukzgosqUA8TGKpiUgK5hMg8MUivFqDE2PJvoqnENuoKtnca6axjD3oA92afzu7gtAeuMg2P6B",
  "key11": "4zzpFA553q3iamRaLb7EES5TxJ6VGTgcFxscByepnVPcCDuuVwNZbdNg6s4UKNemVrfDGEbAja5DgcniD2QRyMJJ",
  "key12": "7T8GYUTbgcPacq7FTPxjerAdfF9m6jUCf7D1kDTApeyNYehcH36NjPPk7hQSduq6iZL6vqghuVzTrKdBtWQDTh3",
  "key13": "1FbSwuAp6mZWA6R9EAQsZNB8QLwNP394dAnLcme5hKGTc85QNY7dbfGkJd7KUfQkWzDsd4Cgo2BfQWSTcanp9Jt",
  "key14": "4KqLWSiXs2fg8mUyAVym8e1Uhzs3HhpVN437ARPSN35kgTy5MoUNYmHtEJYuwUaHWgb6N9do6AmLPmuDZm9NG3ro",
  "key15": "4KnujSxvDgQximHzo6s7D2e8xjMZ78nvvjPD4LwZeEAE8huKZDH1DnvQcwLLGeXjhyUuhLhMKQcVrxdUPmiwJ7Pb",
  "key16": "9gwpLrfyVoMRfBwBefkw4nQVDJ7TgmkFMXeD5BdZW67DQzQgZD5xyct7FrSVERLbK2J1ZDv4pX4XTucq4Lt5mHW",
  "key17": "3L7LzvMYRjsDSo51VoSj9MVBGYhLZ1P34hKZms1bhwXNG491NqWTLTPxRCznTumT22cdMC33cDwckuF42uMbkNHQ",
  "key18": "2pKZZ33Hpg5Ukt38TwaJTeMijLyz3Qzmcgdk9uRzbM5vFU4Wu4zBfwZTRwpke4DEMsQfKyUsbB2PBWMW2EPQbEGV",
  "key19": "48gUhEKcqew3c62TxejrhfZNSie66FczsjxSvNuy6hMZZgnpK36kxNFRWZmpmKa8v6Eso3BAaR6U1oFHDHAKhxvq",
  "key20": "4KpZDKTVJQdL5Z2G6wysXv7UPfEbYXsW1eppBQUmiyidvKpTS87kuETxdfmeorcdxiLN7AS9usboqWDBqCBGWciT",
  "key21": "5pdV5N3DQtjTRVQLHLnX2RS891XtawRzqFnyVeHhHVS669fTWp188gfFJcTPZ3yRoSHeun9yB7y2D6PwCaVQtbNv",
  "key22": "MkDMjX1QK3JSBxGgMQhmeGTZ71ekeav2hqqHBFkzPw5bjxNLcwbeBPsbksPG528eRehKrR3dJYmWkchLLg2cSD6",
  "key23": "2N6jDw4ehkUXETvPcmvrkg8rTCeSJUxYhheHTh4GjRieanncCEp11kTu27MQQEMByHrJiyjQetzP8R4iZbrzTvcb",
  "key24": "3LuKjePzwY9JxraBCK83QnGtFFUZgHoK2mug3YB2chJy8hzL19DfRYzDUVnURQntwv2V5ePzrPTNNGPSBZUzD3ma",
  "key25": "2NW1J8XaD6MtJvCQUBTDX3XbA6XuPmv3CEREvkENN1SWyvpSYh79m86vwnNNDfugJ23zd9kMmQJVh74vjZyaAKSZ",
  "key26": "5tjY3XPGuQntikLktowVugiSaK3JfDtPmRb4KrnCZgSMHZXX8p1qJRLa4CU5v74Ubt15R2MJ1ZLe9Q216hX1nCtc",
  "key27": "5hoj4ZYpiELcW5qTDTh1pJED3rLpmFMnqpKermQx2HW6zjcKa6ZBGsJWi6NPkmghEgsSUe7EUCFQxHRp17UxDact",
  "key28": "2kEdkFVxFbNmMbDF8yeqp7fGrTaK4UfAG53bu6CB4ivA9ArPNMTXVJY7SV2NUBpHz361cmENo5WB1DzyJookknRw"
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
