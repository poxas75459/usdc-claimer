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
    "2YkeFG7Fd35jesZP1o12Qxa2oFtK1eMkoE1U11TSGeMhLd39UN5sUEmPW2NjF5YWLvFWBiykrHL6AqYXshHyfCAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ktfRsnzsaxnEJ4dHVrbNDJ6imMhzs7u57QtpDYy4oABvTYjfZT1FXoXaU9s8NsixXS79yQ8jHRDdU9HcAdhq32X",
  "key1": "2Rj3tpHbg2UGwFa5B7P7SkSKwy8D7Br3azHqAkrTZYPEBoYV3mjwdgDG2TsgWyB8nFQuEGgk1Zy8EYwfXQsxNtfj",
  "key2": "3ZX34JTravNXSN1wqJvgsrjLLVtgordqPPagetrthXSSQAthKJSqRC7kBqjazVqBiZEGRmjCcwJxZ1KKH2QGNygs",
  "key3": "3j35oYX7KwTv75xS8UiHJ35UEYD6GBxmHRckwrCbQwxipB222yRmZ9fbBeWjdECHeRf1NNXacHKSkoT6vRPs3t2j",
  "key4": "1y8VhqBGzqCp5WtJKHYpnerBikV4C5hBrUvuYQxcMg6C4CP6ak1FfzEfpSdokMvyugn4QbWmtL2HWa5gzDN53d1",
  "key5": "4719ygzj5GGi5uE4ajuqB9MPrnNvS8oEA2EEcXB6G96AGQsM8AAdeCZCTAgqCkqRwwCui226xFxthqEGWAiHvPdc",
  "key6": "2P6wCungUe9dyYhbFLFVxLHpPw6SrjgTd1Q9j3iMbYz6u8SWab8w6HuMerbT9BvnGTaWMu7tcUtNwfAvR1aUuuMx",
  "key7": "5M2tXfbCGA6MtRUaaA6D5CpoxYFCfEQp1VPF8NH4sUMvcppkzvCessTEPeq5xSG5APVbH3APxMEh7izRx9g4Geuv",
  "key8": "4bBEtNmqJFQNnQ6r2e9iLAtDUR8BN33U1avhtqKamoxQUECtppyvaqeKqzZV4Rs62uuDJRADTkyqqhjtnvkzk3Xz",
  "key9": "2dPuC2Dk4V57gQ9dPsiBXMNyMKvxBNGxGaMizR6GKfAuBEUh3oSBuVGDF3S6cKNEdwjgo2P8XwbSWCDtGHZq4gpW",
  "key10": "26NjvR3Ha7u1t7wiHSa3ggiD1rnoXRn1j7B3BsQvbpsMmShSjrH7oFpbzCDLXxUumMEdcAuanvHMCZY43aFfFzPk",
  "key11": "2LBHwZPsMvaVTRbRm43NKPa2Cr5H1ZUJ9Wp2GEXHjReLfnU2jXPKdDBNA1nwACs5jxRs1ARHtF71Ef1UYYnLQvq3",
  "key12": "3dT3dzEFytFNUU4ZJ7mNFL7kJ8PCabMzk6jPDUrKUZz7kNVcakiDkmMf8vXpfW5u44ta2VXWULXZ7F4VJWrRkqwy",
  "key13": "2yu4E9CVq9aLNWC7gKcfGHhRZCbzyYeVAEyBP2ZpMHnWb2XKDNX5Kwk9qF9QdCUMQZCXKDiQ4HHkYKdBnmLRT1yx",
  "key14": "4SngNnZ5AbcFrVfHmqPedznye6C9oAFSF4fud7JDmyRreHMKh2K2bC3exMR7KrrGdciXPfcf2Gv71tXQMZ9MQAmQ",
  "key15": "21UWPDt6LyykTB7jGcYgkN2dR8awh7PrAq2fVsbPru1r2HynaMpTW1YsUwWovKMPq82h9HTX32Ksvyy6jgAL9MK4",
  "key16": "55SqrvDW9NxME5R3UUHoUyEeuXDKYye9MRQLAuxLwZKKxmUMG4FvyXhMzMhoTnnkMcsnbaGR8zJ4gQi3ESzpLj8w",
  "key17": "59ZcrFvgZXQw7U2XJFhCErR3v72N9DE1WLXSWt1bMpLxAWRKYzh2jkcPxdQirpVAiSYEThJdiGxECQ1VbTXk8ynY",
  "key18": "41xW41mCFc6WrFHRP34WCvEXvQUofqZuHZ2rZqaBeCBb3bPNyhwhpGukkXBizTsFm8nJeKEhypYjyAbPdB6FbFsh",
  "key19": "2tkvTtCi7xmKTWx1f33GP139X8nLJfjNwxyu9FBkEtmDRnobspyMHKZ3m2LWZopoT5Dg1YB1hFy15xt2hUHxRWxE",
  "key20": "3h1RvWQNizXr7gsLZAW4W52c4HebTqhAvDR5aLMCCKd3JwmNWLYf55f1FBTZkr2hHPV5ViRv1Jcu97gdHa49U9Nj",
  "key21": "6d2kL7UvckVmX7K58H1yW8aDqxdV5gEgUL7b4LtG2BVyvW4bnu816CrgRuWV3FnJFQk8WFpPRhsJKAZR9oA8qfK",
  "key22": "NQr1N6ovXR6cZXFBhqDjdqx7ADdaXhGmkgmjhW33jQuA8u515WgStxSt7iQ75EJ68p46HxkA8CjLMN2JeLo2SgM",
  "key23": "5tVj96VzxVkgd341KPory8MdHaUpvFzPCsDKZHtxgCqTRmfnSBUQML7Gtymiv8CBFMVV5KgBGQogmZmX7EdHVQiS",
  "key24": "45TKcrbkDLY9jdzfuyRRfZsfnNV56xiDDNkBBsYc3PZHxgSC3BhqhWtM4pb7RRKjf8e9bRKkxdTyubVxzcBJfwVY",
  "key25": "4U4XthknECz89n9oEWH1RRD89MmXT3z2jSBtVngoYz381QyFjRejqZXdnUgx6AtTnJwqwVZaoXmo7LPysPTvtffv",
  "key26": "2UcYJvw6UoUXNZzwBUo8wCBffgwYW1Cf7HKytPXzNJiEv1HSMMxnyNfTn3nUA5dKUG3qHDMYaF3cRGM1eF354HaV",
  "key27": "3u3mTW8uh84xhLR5ixLaavXEMtrpgDLj4G8Nfc5JQjYszhDLa3KEjc6JvVGjZZB8eyGKd9YJK2k6QvwBRtq1wpqG",
  "key28": "3RgV1TGXYrSGZLEX3pQ3vAzA4LURnAS6ELy3ExwyN7w32PGAw9TjhN5beN4kD9NaBFiDdmv9fkwemBvgwLjDY65E",
  "key29": "586w3znLiehYibJHwtNZ7xpcNzqSESDfUtYABU9DhmxXxSiAm44bt2KksUy2F9nh5pSpLuz8NmG2fChJQ8e63yQk",
  "key30": "4sEbAEEhCsjJs6mh522t3gPMLiuV5KrqwxJVdKyc8y5FfvgFJWwaoAi11STHoggrnbyGPxVWPHrRosYLAVx5JGHx",
  "key31": "3M5L3SG7nSQUuiozUmBNkEMJMCnuMKAA6yiwhTvs8LnHdSqonHHdNYmKeavAbwJS8SvuXM4HSgFaCweWC8Boo2Ur",
  "key32": "65igD2LCkoBRzdL9Dh5NCvr75EGc7Upa9xugUfWkkVNViUkRQCyBr7wrBy7TNCyFMtUN61qqcFicermHVbNtpJei",
  "key33": "5SfvxVe25xfuvgi2ttWocQN9UjSeNLeRNAvcLj4vzCCSMn3srerG4VQAf2Nj15pqrT72ov4LLRQUjrw8vnyCdkmy",
  "key34": "3JZHBQ6ocGxD4NsNsGPJE1xE3BwxCTBcgaAYL2ZnmxDm843w3zciwXDGmcsD88mpZviqUV3k1eaPQZ196khjbvWq",
  "key35": "XJbbebaWdfr11o9j4epoRP7DdeDtFEuQuiMPuNnY2K7v5rpAmt4ndoYcxJiAWZTGcAdqLVfSXSJLw1qqx9aqxLj",
  "key36": "2TJGPvMaWb9MUTx4xNeDTcbT4wWDSGF7Z51jHoWqYPypreFkqEi6aDJZimFcbYVDBhXCn6x7YoJCLwCBHEk2q6Hx",
  "key37": "S7hPyvgr47f9UpJws7F4QZNDy3wFnGSiHfjk3hPEEh9CqcpKBk1Wo94ss1t72QNVwQSm8Ei1Bg9W2V6vEXo9AJr",
  "key38": "4UcSgKufsoJuah9ZiQYZKayw2HzeHv1mRsN2ougxdWkNEUhAneAC9fkRk6raDCpunmeVSnkYtnd1s2g93Smx9q5U",
  "key39": "5VpfhvyEkvjfmavFeft16PEmRGDFPhRYwTAShM47SGu9BU2zpR3DWxKex7v711aWpoZtFTjngjCMadYTyQThV9X",
  "key40": "2XorW3BqybJdT7RNRYrcR21GjSZcAdemi4ZsR5dpCLr5osDTsnXfADUVibZb3YMLScLju5MiorJrzqLRXhXHUDJa",
  "key41": "4SjXk1s4tSncuSCH94s78iJnN5kuDNjGWa6V26P8Qw8byE7YDQ9NJegEHV2peP52iPipspRziEp6pF41WGvZcwv9",
  "key42": "3MWgejzfiau6GCCmYVsmnbdjHpPD4XP3qc9NpLprCAuKH4kVEH4BWiiu4pe18pQUTXXct2pjtyXsQdvYQuqvp37b",
  "key43": "4ALC2T5bZ1GSN1A9JhQZ5t4NgahqtcLCXawSiYfRpMJhTSB5x2x5s6DM7ZvmWEhMkAFKrrzuyFTVkRUXuqvk5e2o",
  "key44": "5jQnGs2j6fG2YAD6EzWabkB6J2LWzKGSfobGvWpEvFLFLKABs4ZvX47BoErH5dGweT5uka2GMxwUNkhX1AnmGExt",
  "key45": "2QYokcivNKnTxKFKujY72tXMqnf9YDTJRrCaSPQxsXyzXoN2FYpaCWnH85MNPVj54Emhgqns7jVCcHqw2fXXAHU4",
  "key46": "2V2HoG9cRfKkdEX21AER5McDdV9J2BGoGds6TapAsWouLddN5jQkQWAz7NtPczQrpsFsFRhZtWUbNvdjkPW5CrQi",
  "key47": "5FBKjqNqwjfYd2A4sNdD1h9pBY4vZKdSc4WrcZrX62y8zjoDbGHSjmND23u3V67N98rNhjfAQ3dJX4mDgV2EuMFk",
  "key48": "i5wnaDtG7aDzVJ6Lvm9c8kWv11sLtxaRHE6qP8kcpwp82uay4qZpSpeikBteNBGxQqEcir7HzXhe1taUueAuJuH",
  "key49": "4tcQ9y82z5NE3t8P6fqSyJMzTGn5aPVucApg9AyUmvPMv1HhQmXwWFjHLngKDFfWJjSotdoWQNBTF316P6ajbSAD"
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
