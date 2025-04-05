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
    "n4FXkyPEFkRChBGu3bRvKoTcH8EPkGVfgWDa9FDjceev7jMTXMxgLZDySsNxx36hu66fiCiLD84q8QxZU5hfCta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jkNKnKJMnJ8xAMEzUJuu2StnVvmnM9dvJdYHn8Qsr9DrHBduuYZUKd27euHrbKWA7o9P9bMpRFv1p7uzLh7oBb8",
  "key1": "47esb9KaiyjbweRYrV3SPGMFFStRBDnauKtD27jMKrRKcp3n8ixTgg3nSX9tieLmwJuacxreFmiKysp2BkMRJ3Av",
  "key2": "4X5z7rnNL1v1N3ZozdaDWmrtWDo7dtbJ6s8asQyono1XwXLTGmgnZBdz31e5hvMcpkmmufryVtcgPVFK92UQgG4R",
  "key3": "5aS6XxLU2n2wsrHGuHHC7gsWvpAqDHRAb7sp2gfPnZMMHXudeQA6rLbhyV3ibXNUEWMwY22aPSaaRNUwm9RL5GCQ",
  "key4": "2wYmc92t3hFabgnS8PQTV61AaTB6vfw7LHiMGTeA8VQJzrcxYBXohTfmkBtDmLxfHcALVpX9AgxMnPXdiyDuVCbW",
  "key5": "YaKT5ZkQnuGcfvBAHT7UgxpLuq3cBxKuXHPGP1CtDxpRXFKGM65sPUnGzorezcdzvU96PuZ5x6CEHkSZXNrjtqM",
  "key6": "25FbuwfFitymXuNsBPhWFpArRpVdnFKgmEW6gynJKBkjmRioUk9pUQeXVSY3G7dfXrPpBwXKCzsJgZF1E3nFSLou",
  "key7": "3JDwCJwDjCtj8xH7LRoMCmn8w9QNjYRjPogD2ksgKdXYeqYdKB1hqjbmubG3QSmRdX9rnfLJtnTYrqzcDUFpeabK",
  "key8": "3PVuyTAtbaU7AVctMKoFc2ozPv15XGFChQuXsJP44ZaXHES9Fb5gp2omngfBLXZBdAebQRtR5VAFVttmdzWPJ7kR",
  "key9": "KbLnGAoGwEgdRkH6CLUAQLkTEPR1KwFif2KL9dsk9uyuJDSt1diZgBsbS71SZgqCrB4MKL4hARMuKRx1TyZUeEC",
  "key10": "5f3Wc4c173bLwC6zpvwkh6WiWaTRkv9YL5cLkXJLVz7YbTvbdmpmVm6ucoEbNXyR4pcdDmwMMRFXy8DhmKcNhTqM",
  "key11": "5obohQfx34WgsEKnmhCrAoGfvd1Ekq9L1HdXDeJ8mGVTEGgpBJXsKguYfmHopszBQHXcsBMXqtUCmBc6uVMbu7mW",
  "key12": "57Ao3qoHqoyFU6btgW6siaPyRZB37umM8RrPd9qSCzd58h5cfQDnkVGVKdWGxGxw27p3dxhWMbPRYYZF6Udj6Kza",
  "key13": "gEVL9SmyNxgFsTRNKpsK5Z9rf9Z8a85Fz6QsNJxAUouJdBqeMmzKRDaEGEQ56mFxvSGyQkETagYDUE1rpoCdmPC",
  "key14": "5oV2K2dKCMcw58myS1XEBwyGVYqfrqUdCrqVq9Psdpa7NqJGuGKQ8wwzBA12eX3XQhbtoLcywcVd9Y3NpHjQxrsW",
  "key15": "35Wo6hs5KZNdQ6dtEhU1AVxdqSSJCLssjNW6hAk9aPi4ey8FX82jNAF5tbhq5RgEUhWH3TZUQuqr2oM53miVjtW9",
  "key16": "47Q1qnJPMKDks5P7frxZyCten3CDF1dcXfY5x6KyGu4ZfkFRnwsm7HW3rtKXtbZtus8Z3ABuryxzLVBMYFkzJ4W7",
  "key17": "5T752XnVQMWbz4WxDuLk1UDzaGcfrYEi26vUxpSS2vwuefjMLR7rGgXQ1qBWUqyFMsMXKDpjMSxtcWmhEQiG2WnU",
  "key18": "3X8ABdiVnrmXRvhv49i9MHaC3VmdZb8McRwJEuZSuLyjmj414Sy97LyMBVsFjQ3khuSxuNc1VzzJosFA73WVroTg",
  "key19": "4MUH6ugHMQZLmpULgD9KUFyZyqfiJXV2hWfh6FXWHcHySTDXFeLiZyFZBL92F97f8rWHkF9kARRMREspv1PYh4Qn",
  "key20": "LZ1kiGK6Vo7eBC3sKwyGaVNeXMLGxfeUiPchrfF1iPxFWhPLbDD3pzUBJKuAVuFvzBBf7W3osDnCbEHC7e97N1h",
  "key21": "2xWru2jgNjcEuBkVmZTYRkWrwGd1wQZAWcAVcgQz7g8dpBsPqRD3ehjt7UcN3USF8942YJYL4jXQ71ou16dDi6xi",
  "key22": "5PGHVbRG48PLSm3xtJxUAQEqHsJFYp3PCQK4zB84gj5S3aSLqKvRLs7FxT7LejZL8kmsrpjrjvqz37B5SkGPMdd8",
  "key23": "4AgBju5AoWiUXhFzeL8iVw1fbDxVsm34AswSpNPtYajggXRJU8UM6sGWoLjN4euA5Yno5zg9HaGEYYz1KgZFQu5A",
  "key24": "XvSnbe6jFQ5Km1gGYk2adnAxYqkwZBy7M1DK1yt9nuDR5Zg3wVn6rZoiAU7WWnnGBnRbkgGef1u8UdmQ7mCBCXz",
  "key25": "5Yndr4cDsENGHKaR9oSUMUb7VLxnYQagCLtrPkZ8EoSRSnGv9eYaGV9typcS2LZrEA8PBnN4Jnhfjd8r5nv4JHvK",
  "key26": "5QBizD7tTfdv3vDMrCsEEVPjqVt6YSGsjda3TEBjYo8iUoxca63vrXsEb6sn8fcDnuxL5kazyunAbPEg9kNwPBKk",
  "key27": "3oobfe2gmGDnJmsxyEqTvAXcuF4k7by87QA72s23pKFQ7F99tW7afKXmCQpCYMYUS2HaYyjMsDC3JzbwDfXpfKUp",
  "key28": "5iyueHzV2oZYf75Hoommq71u3zDVyw2oQ4xqhvbLy182rhLGYFC3saWVLK4L63oSsR9WyasUfqkd8VNNLoAK6vG9",
  "key29": "GgCRvTdcJbSzynitvNTNrFhdxyskdSE9oV5FHcShPt4Uea4bw6hrDqgQA31q6byXLAZ2531JjhrWH1UPuKKQEVb",
  "key30": "4wFqFyULE1NDHNLsrtg1zRCLi2RwKSjVjPEnjiLHbViNyAMaiEa2HaGMbmDEzbAJ7coPZhsHaLx1oCyU5FJSLh1s",
  "key31": "5jMbHCkoQzJ32e9PXQrgBKo4cvVfUHYyLkxoVxV9GsUvdXxj2MfHARE2qn8UDg4kRCS21Vsf6kekGGDfEyCc48ny",
  "key32": "2fJqVwEcSuVL23evEjA5sT9pNh7dnDenW21Zh8wKJYBZQJZ1dYvqPBKeqdRhcLRVNx6CVfo7bEpF3kwivUKUVjAE",
  "key33": "2CqMoaWqrHqmYha95A2CWFjER5ML1DEgv5WPwYCSDvd5H2ULaR78NWzR5UV6WAGhcqRVzHq4TWLuhDkgFR8TzJFh",
  "key34": "4k2rCzHgsRLmvPGTmkivKgH94gD57dn4GLNWqRcgRL21s59YrbSoJX3h2wg9rFKiN9v6kQ96UoKFMzdkft3PkyYe",
  "key35": "3EZabqwqh2VVo6imoUmSQYCbqfc2ebQqW1dntMp5uXucuKSEXTM6DzxDZtZVZLL7QF4CntVmj9XuiBzNBLh2foUW",
  "key36": "3dwzybfiVDNyuecEugGfkgLWTFtMiEFA8GerrXoQwvgj1uWjxednvDPXbxG81vQBtjvoFPtR8qoFhjtXXb9cNvCX",
  "key37": "49fU3nyHJwc3CQ4jdDSaBtGz7S1ft37GpgTD4WmQ9rcdXKuHrJAwvYYvV3q2GT6jgdqvNLiCJCTreDUkFWx6rdfh",
  "key38": "3tbN1KKVzeAxE1PrXFgebVGLryoM4mN2vprHhRGofZjtsZhdzdQHaswweuMkQEsvTrkYNmEKNahR3riPD5vBPtRn",
  "key39": "K8dVbWe1zt2Su4ADYvuDgjQ81bHDYgv7NBrm88FKNvC1c8kFXbmZWhZFmzjGcDtpksdaVi7pvdxwN2f5EppCEhU",
  "key40": "3LmBVFJ35veFYWBeocwsC2hkPvzkoreWWQKpuddXoke7bm5TyJhJXfDPkzhkGGwfYkHRzeAZejNMCD41xV14TdSB",
  "key41": "4hHkHpJQhdHr9fAr4AiSyqWTiW9xgPpshpw57UuK9WEnGkRS5cWn8sVer5JvUfNNnCMMeU3i7Fb8U2BQH38xrbUA",
  "key42": "3ge6b5cy6fU8GvZrY5fE1iHVRQv83kCMpiSpNpeeUPG1XaGLc6pmXABiP25wFK1yGu9511Tq62j2pN8RVNsMHxvD",
  "key43": "kRzLBtMEcWgEKTznuTCp1dpWkWrxGAfnUQ8u5vyd58D2MrhFW8L3ZbTxLDa9Qwz15iZsvzWMiRE3WW1239B5ESc",
  "key44": "teh19UyeqqKKd2cNco1kLAgGnf5y5HBV9z7KCfk1JGZycxANzuhSHEcUeiMYH9BQPjXMDQsp8aQAKZL3nDjaToz",
  "key45": "2MFFYCJNV9p9X7mue7qhxoZL8GZiY2LdN1JsS2yvpWopVz4zTr3i79vioXstDMvcpBZoDoDzNWhbhW4p2SxTontk",
  "key46": "oKqsu8mScwuCat23hMgxNWnvAYgnVsFpf4tyW3cW6VMpGhiJD9ZpCeq4tEZsWUvZbEifkcf2mHqXA5WBj9mmh1B",
  "key47": "4JaXTutrdmzVxkdHXodDaqc57C74Y2vXc8T9acQfxji4jVXrPD4nizAEZPiia5b8RxbhVWmRgrtpDYRqiiyyrrvv",
  "key48": "4fPg5yYtNScJ8F8RP9Qr9A5Ybt57VcuTgjZcfqsgzGQ15Fafp7bKavM1jjYnw5DiLdJQqqDT1HGun3rgaZRx14td",
  "key49": "3FG4WgSVXuhZRff9dZvQSCHsVdidYtRidFGUqUbW9J8EdaYL2z3nh9rAYoJ1pqsK48SCj9Q3Nae677hFmQTqVAZg"
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
