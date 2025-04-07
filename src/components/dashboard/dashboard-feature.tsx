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
    "3G2up7CAepjFtmvG3wgmm2YKJLG1DpHt5EAkNg2D5auwhBekCQp6H57VdH7tzvAGTgjuURSkjhAp5R9ewZ5vsp1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gZdjzRY3j5ZvoQ9wbjy6rvupqfxCGD4cGbPfjS6z5E2fk3PdFLZPmbbiSSqQnJ5QMWne4eyJLjCJdttpwwFTnV",
  "key1": "5gPLjntvG4Xq4CSG33yY2TK5WsPHgMSVYCRi8thbh29vyY2wKUGCEeKNe2SNneteQWXmUmzrcmsy9VoWvZXxDUdC",
  "key2": "2oSs2BLwAhgcjXrjMMWyGQBSWo8SKQjLfKioR636nKkmaAMc7eZ2WbtxKGRz1dy4f9ccaFkDVhqBPkSLdP9tSu6e",
  "key3": "2RvkxSVuRVDmhFHeywjqBR41hRXCkRWH77Cbnc7Jbvrw35Yhkv6mFRUXEog5ozLnhoUWamKUBRuGdChXUp3v7uLL",
  "key4": "5YBZNf7atE4e2iGQimw2MciYqNrxFtrj1n3MriXDKdguy4pMQmEwE3TtmB1uBSWuvFsCbuKjajGHGnUcjSWyKAuw",
  "key5": "4obCupgYeAvtwQEGT7bL9t97Akq5fowW8CuKH7eNhYavESVLnCQAhoKe3faDp6vGxZPLpdh2ao2Pi6Ti92ziu78s",
  "key6": "xsPGqbUhLzf1JE8LD5SHujbepSKF5TqTRivapNqrWUt5Vjrb5BBNanBaSfA1GAT6YfcMWyriWDcJ9f1ThzDXJTs",
  "key7": "38odvM64azzEdNzkG5JzsarFcuHCwoNZ9uQGrUmfycSp27WNGAYSh8iT7RhFMY28p2dfr7so9nxykYTyxqkBHSvx",
  "key8": "5TnZxZbS8jq7Y1gkg84Jh1rP74pyqKWtrNz3qyepED1PzLFA91a5x8RHjqUk3sjHhfp98cnASLrjmtVvWWK2A7rq",
  "key9": "51Dhr4V8bVHkNj3XaQy6ntyG2ps7bdMPdyTEwTPCmET8RNrdW3SBHMySmqsm5eiDB22VycwaaNj1fWiidgTf7g3x",
  "key10": "3HQ19K2WC5HXSJrmMVmTgi15MSFQAQTWctZuo9NipfS9knRSYnREAbN8neSinbxsofycdPQaQaNAvc6i6yY3ouzr",
  "key11": "2FXFyQD5asb5NqbEwp5EUTF9Zhp7UBLP6B8Wp4ioVQdn1T32tftfV3SfXrFAapT8N4v2kng8JKQh7FQUqCYBo6vo",
  "key12": "43r6t6zhTETCP6fTCxq42nFUt8p4rkHi4bmTnRJ4xioKAmWnBBWezeGg4FipynTp3X891TyMSjAggcfY9a9KhgU8",
  "key13": "5VTnKtDmibxFT21n13XT2iqqG3qfDmXzdzASA7mRz5RrBj7fgANWjWFVdiknDCedcU925UKPHUQnnFjDbty4HjwZ",
  "key14": "45bp6D3zbpqnjMdCUwwtYrudLVUSVLBUhMMLjMCzgzDcAsXF5FkwQUN1WYhpUpRULCHn1rRrLadbf7VkA6sn1HPM",
  "key15": "4oQumnoCw3oKUFCZjXkk7xSzCmxWAW4ELhJkFqLxkKahL79o71VxY4dkhM1naueD47h3onj8uFp37MMK395fJB3T",
  "key16": "5KTWJ8uQi4ZEKmGrBEPU8f5KBjsiGi3dHQFU66Jo6gkcB7gpWHCeDGujCEnzrTDKJb4r65szEh1rd5RwDiTe6Hih",
  "key17": "2FBGmAUwAmGPirRHy1z36HbERjpXDKxudXZq4D6PrfVUXJ3f8TfKHMqfwBpoNeE43tbjSTb2g4sYGEs4rUQam47h",
  "key18": "5HTwa8emxBg83gcg9u63XSBnQAYG2q3SMXvEEhmRpkwpWQjcs4CfLyxCRQD22XTdJVuPmtoTVpm9AQx7byVtRU8T",
  "key19": "2hPhunnqFiLVCvpjSVJ8RXiRVzck4MG1fApLY9MWiAzSzGmQrwXPAJeZFhxb6m6GAF57Q17b3ru3biPfRgXk2mq1",
  "key20": "2yevbBFQsA5VzPAvaFaqtGaseJKf1vz69QBh1jzVDqyDeYbHVKNouhvFrbYPpCMD6u5fJFXyy6KzA99fRfX576Ds",
  "key21": "5m6JSdVyRNa6QSsZ8ryy2YLdk63MjJJQG9ABAUMnwVViCAZFq1ZM9FasMZ26ujwZBjC4FYfyeKdQ2fjWDE7uS46i",
  "key22": "4HXQGMAWb1yrjqdweq5hooniny5NmV3L1V9vmmdZUJ37HaxGJ5FQ3DAZLcDDKnaH618akhsnw297HHZ1pH2VAvTW",
  "key23": "3ry9BKQUCWJpe5mFTLFK4UmYBZYGMnszgpd7mKQMeaiadAGpJB96E6vYW2HXEvRonrCvAa3P9NSxXLjxGBLEnr1n",
  "key24": "hH3tMhkTMj2wZCCGVDGNhq7xmLUHV3ajgNuQ29taSVB1pxxkTWwEJVHo6gg9aeNqupdrgDgjhaChncwBez87Lyz",
  "key25": "4aGLrzS8xXLc74aTMQxdfotU2G5CYpro2cLkgQVwrFsiKmCe7ubCtgcWpA5vEceRYAbWC5i8JTMjNcf18wzLTitm",
  "key26": "46i7UUDpPfyVx1uKPjFMBVHPMKomEGiNigRJgKadwjMhyAX3UyFRiGKHA4XKggGa3Ry7N2zM27Rspbmk1tTxrvEH",
  "key27": "4jcNZ171naSL5Mw6mEq9eeDihuPnfXx8KTnvf7NSUeASn4neZz34bCXvn7yHffSFURbcRsb8UDGfd1KtNuANi1Ms",
  "key28": "86uxp3uzjBbbkmuE84KK79EEwaTQdeiSDrTc311SoYc4a6nxoJY6TYCvsyv2xt2QCLbhqFDVrvFTd77uHp4iDut",
  "key29": "4uoTmxWgVg9dve7rCSecXZ1wVfcPi88xUynQbNSMR9e7aVz5MeS3vLcCnaYbLJorn9S4RMT5kmu4Ho5MHC647S14"
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
