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
    "3spiXfJLL8UqfSs1Sqi3L1XpKhJjoFzNsNdL9QnjaVX7qzEeT19eKNXmbYriDjUAUzY9Xmf7SnkFcekaQA5rRXaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2furPK4nmExe1Rn4C1NqDwdaRrhG5dqqg4sMakZEWE6A48Xcnmt3kq5zu5p3A7ZGCGkpdcBNwjPyG61hWUCs1Qya",
  "key1": "4cnVSTS5yoge8r9G9XwwDidtgVtdro3AFvMMgamRTb7Y2f3zp7Y7MYkQhMnCeuGUEo6A4uVn6QEXNL93kkfSV48M",
  "key2": "BF5HBWvq7Mj51gHJ7koCiKpoPmybjpkKmcRAEwMwM34vYg958yu3eETnq9Px2ERM7qptthg8n4F5m63opYSKwkV",
  "key3": "64qEZTnGiXJfMG4QdTQDRwgaSjH36JUBbrCnh5DP5zkv2N4pg3RLbDW5TR9medMMhvLd6C52hrEkzQMaUfMzPZzp",
  "key4": "4fvQ91ripCyrFk3wzsAbyms1W6PCMmjqUzdjEvF7b8JEW2mbXxb87v9CXhVsmM8ydS8TDJUQkia9qXaiTHCtsqf8",
  "key5": "4f3DXpJ1CPDJf3LDHqgnXzD7ESRX8PeypReGUFzJdb7bo6Bdh9HaJP4mvtRv16eNYj9xKNZPLjCLcf85kUR1dwUN",
  "key6": "5MJcHi6YrAN6BeyCN6rwJrwnLxPheCrSMdV8h4ih6kosPA6ZQuughDcbpiPYAwFeYTHCfeFxEQNjuqZPiA26wn9W",
  "key7": "KNZvRc1GgcPYa1VhYc3uNU27THAhX2bCYLdFBtXyknzcMKs2n2Cy1NEhxumVthMJmvspW554yAu1xTPBAF3eqLn",
  "key8": "2evadpKqEnDbRo7e6gnRknBTAdjZUTgGUkWTCyFfm4jjSmrs4wJtZHHdRR3ArYk91xGDV53t9Rw1CWkbrsEFyX7G",
  "key9": "Aj8AC3kYNC4t5TTz6PeoM4tCGF7RTEYagQH5s8fUJ3db9quQjRNSmUrv635Tyr5YaNwZqT5wiKQFyUu5WDScFo6",
  "key10": "21zSfpbMZdGSJXseX8XJmgPAmiSaYxvQygZjAeNDxMpEQADMA3QCFVQ5XBe7B6GCyfmupt3D9WsDgjVuG7s9abde",
  "key11": "3kEoCkTAuA3a2dTTxQrJQPjjMbv5LJpRsyRjhAiVseFB5G9nRVfVKgThr9BK7UK8YwziPTMjtiScz15jc3rCopgE",
  "key12": "3LpLrecZ1b1wkdGquiSsEjFpEBdJohUDTRmuFyUPLXK7i7vbBdMMTQwbVHVrJBj2wVhUcT5UMtZgsvfszC9iNEQz",
  "key13": "5PmGLCWdmXiumyvcx5TY1bcnwmULx5hoyXfiiyTiVfxvu2ehqrG8eJzdsrAigph3rqFF2ADd1Y4gnVWMpa5QDqwW",
  "key14": "5Gdsphw8r11MCCpqqxLwo8MViCWfmGntMnwHUdE5nvPaEswKbUR3i4nwv3UNmd7uuaJW1dL8pXQwYpvFttcpw4qz",
  "key15": "2wg8SisJVPWB2ufv8KgNgJhztnH3dhtyBpFQKqeMuB2UABJaMb3p7GCjECiRwze7SaB4jn4ofE536vWu4k7UAGvx",
  "key16": "5cDFn1hKoax6TC7UWNHVgXPMNLvo3Cvc9RpCF626mqGZg9ji3ZUHZq8SXFNUzG2Rt9EggZauPZ6cWGygjUpLsVV1",
  "key17": "3KZSzzbzZeMsprpbfX2fo6ep1bEL7AeVrLto7gmcxm2rdYiCWHRzzibthSh7kyVnTtWSoWhwQLgPrQJaHLu3F9qx",
  "key18": "pVLyH6TQP1MnQU5QpdpAb7MBaEXzdJZQtvND1EYb8ZFyqGjLSvTsFGL7pNxkPRWd8jT79a1pNkuZzcoUPLsco3c",
  "key19": "VWrVaJMmTnHud2jPKbjDZPP6JF3VUm7DpnvM7sGbGnVmHtrfz49ZsP7Cifq5vrerevQZL11RzvgMo1xMTK99bsC",
  "key20": "2JjmBbZ7DHVYWFq5xGSTMzfqviirfTvZHXy2aEbFw5SMrHf9eor8qSiiv93Zh5x4YPwAkQyuVQey9Bq3vXu7XhBB",
  "key21": "4c4UC9pAmQnV6czFrTeaq93p7PJorK2JCSPUBZhak6T1yRY3ruNJ6G9HjpyzZvxTEyzGGVP2LPJX7vrEazgmqB83",
  "key22": "5gdatUqyYrTVqoT5FwQUSRznxuA8D6CqtDzpGwQd2yULsbFnWc886BwgAHZSZY57ruVnJ52LfPvjncYLJTBJMZnf",
  "key23": "2YnUsbxeHgtTn9uyWvki2QCTHzqEMk33hjPNyrX4AmZBBS6ZxjgH3aJQY3i94GaCfnZv1yvsjNSiy8ZchCHwZZGF",
  "key24": "2ZAiuLdbL9Y2QCpaqpFUNZQm2ETPxsRPhuiZXsPQScHxv76bYA9K7uiAxoV1rZceHgwd6H2Ctzc56LaXuCdpLrb4",
  "key25": "MKJcRV1T8s72SQSV5UnVgPNg4b2ij6yQejeTHcqC9x4yrabm1SVAH3FrrMpqWz6FdvodaMLs1TurCouG9mJLiqB",
  "key26": "5egV219c4AjgBsSc7bHayPPHcy1wHTRiuGmeu4kx6HgWH2XkNzqVgYLfHPoyjKcu5MhocsFShWWroiBtyXAa5ErP",
  "key27": "5uvXipJ1318bFJ4SnWe8WUAmkjQDDVAn6tyGH6nwvHdy7hfKWgxTUydMr4wvNaLs9gPGnebrXKb3vAHPxeGYL9rP",
  "key28": "2rSGxHw8ezxPfvGWrQ9oaEdf6edFJ5UQ1Qdo4XpmQz6nW4Bju2CwmfWiHSxJXoxShG2VtdwxE2gwNpm8jdTGtejq",
  "key29": "NpPfyVL6X68Bt4yEMyc6JzfGAUuJithYTmBfX8zEo4f5HqGqCu4UY8zMHNbobsFXqqquud6oPxAzfmGCfDgcyXB",
  "key30": "3Kqh7CUa6KJ1tE5gJn15k9rsoMZ7kF6Xj2Wx8zcEwDpzqHbnX84dc1xQiYXsc1PiQu3hFMinCfbyBBtP5rrbJuun",
  "key31": "ZErzpoGE8e92Ez65yXqSkBFKEwpqEWpQPCx5SRLNBwKaHZkSdyQx9AxX7EvhKk8ePqYX11UudwrgE7WeUpHu3Di",
  "key32": "4QLCyaC2HsRvgd8H5S1bdTEBCWVoofFgJRyFErwj14V1QZpn7SWfdGyAfzkp7trVkepc7DNb2CXJJgCeESf3FGjE",
  "key33": "48DcV9RzNAocTSASBefHE14SFFn3q8DzRupsar6eiBZWEPJ3dc4SjG4L1nJzDbZvi59agkpKKaxzz9UC7kjF2bUN",
  "key34": "5wY8vyKCgu6d2pugSBSWXyvDauZktFC19Yn8HpzioiTw5xB3BdH7DS581fYdQNWg5s9XdY9xuo9iWNwSETjcg1hu",
  "key35": "4HtRr4Jmfthmws1mZ7ssg755y28gzL5GHgfDYcwRinRFE9AyVw6AiLEZjPvSS8wNFeBxbPdJJKiDJNtpKoN4bbMk",
  "key36": "5k3FMKWyFvdQSbkLdRTssChN9XJLT3VakF28WL3FCjDZD8QFdHHTCge8RKRLUJzR53Nxd1eg8waWwzhwj2m4LyGm"
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
