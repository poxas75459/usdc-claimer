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
    "34w6cK37Z7MYAQpr1FKB9GzcZCFzsDRhXuNKCYx98kWhwmkVKwQWm7NEH1K9mXafUxxP9GMYqWa3MqEiMBT6UWJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HfWzZTZX1TAEs1M23uhsZTd4ZH8QW27UGiFhSGEK9RTZ969NEN6HqetTDMaPwJcZFrStXaV5kHfEDwES1v4MgWo",
  "key1": "4PFZFXNgcaYDeqKh6MLy4LTFvt5xCowUMSGG5pfym7ARewKZPp2ss3JXqCHjE18mX5LJ1wgPVsic7SsDjEns6dFk",
  "key2": "91Fy7xTWkVYhSzYEZ7yfRVbPwC5uwFZesZPeKdVgJQg3vqckbT3TYsBLJgbtS44cw7XRNJSM9GYCKF6fte1cKyf",
  "key3": "5Mjp4bQT8N3LNrPkyGf31z35RcgwR4g9AtQgmwXBE9eCKD1QDoAhbKECYAfkwctWb5K1iXbBAXwVBYx2N4UM5vpZ",
  "key4": "b1tdKwV9hhP2o6fN9e1bFCcG57DXC5tWAuZJGfEW1fbEFh7aUiYaTekbkWjEqJdwyCSNzzjPSpyB37Vif9g2ax6",
  "key5": "jGDJSrqhWaxTeFgyuEJ8AfUkKu24HSugKhh3tper7STWwsKfEb2J5g5RjWyLN7dz8KMXCFh9STaxVgccbA6BDdV",
  "key6": "3jBACBXdVLviYtCgNhzscGEeN6YmuPcXievDpDsLwodCurFh5P6ZsU6Vk4jReCDWMBXtmiHUGhV5pmYwTy4korpS",
  "key7": "3LkPqd9U41uJMbAtUMgasSyvrvhuFvqGZ3NRNHPhruSyF3A1GP7z9ukt8M5iy7YgQ2qxvA2NnEtfLB7waGdVGD3j",
  "key8": "66weNNHsAVUYPiBaurGiSCSimwUfJ8aAeorxyooEHvfRK3qCbWymMz3DdiXZf1Moc16zjTEAMB2xEpREKp1hzXKV",
  "key9": "5gxkCw87BiCirCM1nipWiRRAcjLjTQMTXS4neFQQUzbCmNbdx1QBg6EC81Sv8dM1ejrUp6uJa8zzb59zEE6Hytqy",
  "key10": "35qQjQDxdcC1LUQZ5qCTwTtwVAbmDeuqM3mG5hR7dm7jPcZUgAu36Ygciw62JMMEztQKBmH8RhtN1KQpVndjhb8R",
  "key11": "5ZQQVxHtK58XSyW2T6jdf41Cs9TiFn4HKMoYUHbQJdJCCMA8JcNzFouu2N9hzGgZZLuqRiUxim1H21svnFYsWJzj",
  "key12": "2MSDsu9tu6E8UFcQYcwbyUoA3Q5Vy77u1oNnrpJmwAMZvoUDiVpCdmiVjKnp1EAATKyzuuZaRWLqAHrh587cYYFp",
  "key13": "4cQFrjYLDW1cMYzdeaqZPfM8pRn6yQoBcZnVujSDDcv2TbSRfh23QbeSMZpwVdxeQprUvuzx6d219CooKHgxGSyg",
  "key14": "yKNpJVZA4i9zK2LHR3y6fhr2G9haqwVmzRupDTyfpbonjqh9RM4xNuNhHcz6tsagSMjxetaCz5i3jA7xz3WUokU",
  "key15": "3jY9YyoEagWhzqDtT4j2JrM1DFj3UK6V1CCrxMCRWVKcT3uZwmEebVQZfxJJsKpZRh3tZTasQB6mFCGxzdaR5W5P",
  "key16": "2h3oZ423He9hcYDfiSpPE4fG7tEPg92z9msA6SPPZd6AhXWkECwJELjMzUQ4P4zSyLGKHQBr7bkQraVR7NRfyHwU",
  "key17": "uC6sGuHuUmNHPaoAiDEhU55J96xm5XjinK67G75Sj8g1fBVc1jjibr2Nfm2oeGtVfS7QThT4QZeVNRKdb6MYeUK",
  "key18": "4PGDFBHAqLdsVD4WwxB1zptoTVHdu2PkWwyY8nepGp7ApyGehkmjzmrDn2qsvCeBQceokwhT7fCr2X8Fq9VpEsYK",
  "key19": "34DyTzquCpPHgsg5euMxSLn99MshPcmM1CF6UB7vA3zEHKqdkx8gPuaSWaciyewMs4W7CSJiCVhwDB2RYir22tgg",
  "key20": "5BpAsu8Tdd5LViWZyT69oSihb79S35dC9sJZmzMx1UyX21PzDvpmkAG22FKCcwGmYE2gureKz23oHm4RcPtxCtHj",
  "key21": "2wM8hqaU7chFBj6Gy8BCqprEeZfbohARSk73AQU1EYb5XsED6vnwkxsLuLEP2nJf6LmJzFTuNKCEhAZNGEZKxdF5",
  "key22": "L5QkJYYxsGJuUcD3M1E2DFxtvDpEmaUgvpkFoHwGMPFuJsQsckaxjjqE8UyDVryymDGYawrLjts7ncnCgvjZtfx",
  "key23": "2uzybDjKgaQSHXATqAEyADJPwyYtM2dRrEmpw6eTrBcaKjibC3oUAyN9FXfUfscZa4qsgiTSKhbaucZQxEHuMRY7",
  "key24": "5UqNKzype3LNNMF383Car3YagaFkGUebXcFkwyeTmPwuV3JVtbDMwGi2jbXK9hrvcYtX7QZkcG7xHkrjSyZZ4Gqt",
  "key25": "5b3ZDK4MgU8mN6kkVaFRaVCRrGYEkRMZwSfVf3DQRm81dHV8b17DCf9xLF7W4eLcqZTzEq1qbhprbi7h1YKqkxz7",
  "key26": "2Re9oL6jfRW6yHABxmauH1d1cRJyxpgTmwYGbnZqKW4zkH8FuDXJptyzVGKFeJV3Uk8HHmhTPXcyJhNXnXuP7Jxy",
  "key27": "3N9aEqDP5oR7XeFUBGEykP6xVntpXhM19nYY5LVYnH4UiMAQFa1pmvsaCY9sba78QLCcfshaW9Codh4HWxdESpR2",
  "key28": "4hgYHy33R1DVaq8iJy3pnmSQwmsprm3rkNTnG4XnuPejtZ2xc5bmr6vS3QFZNeoqiyvtxc3sbWDHmCfLfrRFxsVY",
  "key29": "CKYYTSJvk6UbqAz8fjqsy1sSXShGgYLPf31vWNPxHTDvFP2xQkQrcJXAJ2yPdxt6H5QLdh4GcWyK7BysWZSAR8Y",
  "key30": "2LcoBuaG65HrPEZAAZqQoPYYeJUCtym1b8HKqyN1H9TuEtdkMGP4bfzNTVMes2pKALC7phUtfmMbUFgLvxFtqbeZ",
  "key31": "3zXhsFWFSWHBkFysRTCDPd4ncphTxk19vHJTyjZEm87N36Kga1WLHvyutv9WdcbhHgaiAE6CE192RLJGJHws13Up",
  "key32": "GdJ1dJuih6YZd48P2RwsUCepVXh86fQRRGDGY9QiGXAw5xuHYhogeLgmp8JMxrGCtDa27TDyRnEXsgrDQVwE1K5",
  "key33": "qNxBpB8XHS6AFMG764ZuYZy4r8XrdB4E5z5NwNPcPoPhTCezZ2R6P5DhyKa8xLCxSmbLL1AHPHRmfsjX3R5uYAM",
  "key34": "4KjNLvYFCzxcRJzgh3291xwxssdWQBMet27QuUZRoQpYi93c1fxhpiAK28po59LdkJFEjHSYq1wjWBn4pCYg1GFo",
  "key35": "WpNj63mkahajS57AHU1KvmSWox4yaPgAzUe9EDLgU6EYW7Zjs57a4vuHpK4qFL2KUQwK7RDU4Juo5pdSXHZYwUp",
  "key36": "4eyFkwoFXP2bQ4YtgvhAkWq8YWdH3JBTBRMWCFMjZAkAjF8Rv2X3Gq3m9Pj31Mmnh8o5128C1aQJm8cZ74jx7DfH",
  "key37": "3sSarAZYC2nw9MBQz7A2rYT8BneuBzbSGfXd1dJMPWr5uZotg4QFJ3jo7DsQ8rxuSq9AQFh9jSMTSt1HmQQJsB7L",
  "key38": "Z4vtFQTz9JSHWKYVjDWSy5iq3bNH7t2DrPgaScBRdmNVBdTeFKJhpMjQ1rwfoeLKNkECkcxBGesg346vxdHZQSr",
  "key39": "5cZy7iLvpCiLBMtY2PQxCpySKVjFfV3VWFw4VPMWkjphmoyaLw5wtTmQE6rG8tk9owJD6q4HiJYwc3xcCocTTby8",
  "key40": "3opK8zc8FqiCmM7cu8h88jEw8b4SDRWx46aRGyJ17CSvvpXdAj6mihn1oimKM8YdAqRjWtByfVu2vRN6d6ewt9HJ",
  "key41": "4XkDs9CvkJHzuUKJC1nePwwHpSyRfH62TxaVHVY16t2jGgR2kHs4MrCB2pmbWt6mokGMNvUACKkJycXFTznNxKGe",
  "key42": "5EgWmAy5tNGim4fCiLLxZkPRGR1f6rqF7gVcumnqAY4HPkudDmvW3QG3fdPPZNS8JCvkX8DhERG37dtG3p43J21B",
  "key43": "5R5rezFs8ySs4qJ2WPfx4rKQMWGzDnWJPpBkcE1FaoKtx94Ssp3FJCE8Fasbm8P9yT8XhmcZmqrAjontpt2qAfA8",
  "key44": "4e95L3bnuNVBuRroTvtgT8T9mZV2rh2avgjgW19Z57jJa7jDAbNhqn3RH2hHX8FueMyqrh5Q4Ujy62ceF2vVeRiu",
  "key45": "4g2t7TUdghpaiY4KGbjFX9cedgH2893K1KbWr4aLGBGXV8UBoBzFjjJps5VHjq4odYFP5wpSJaqCHQWy2HuQc6kz",
  "key46": "2fG7iMMV8vKRU6qoYD9MsTt5vxLZM6PX2kKwBuYR3ZQGFut2m7fz54uAWAwH6MVUhd1S14ARVSQwZh7eAQn1Se5h",
  "key47": "3nMLup38xY8UwtuqpN5SzQtEP4geVxPgWGkPmZHbt55KuxX4j9zkymhJBadzHK1E1azXgGbE27vx2HuiZDsyX8Cv",
  "key48": "TUup5eNQTkVJcAoBPNAMYUzqLcgo2yrjaugTTtBbc7f1rdx6Hb47D7rpj5qMht9sqqKS1iWDo9hAhS97H3JZHzz",
  "key49": "2qQkHeXkxRidfBbkQBhyCiPd7KmPyG9d2whkeKmBZdBWLmmgti7sNdTLuaViNyLuEn9Fqgn2AULEgVtm59g5izZ2"
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
