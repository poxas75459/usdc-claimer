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
    "oU4aS1dJPnFoRBSCC5zC28XbR3RyvWyBxBTAcWWVFUAqw3psgTjhAyZUT4vhrzvfNPo1EWJaAriYMxsk2No1szQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nU4BHfLFtCJ1vAeeWkrF5yuQVCGnNYU6h3wxgERN59cwQfae43SG3KEnWawLtDbc8f4YQ3CyzaC52mshxiMmMc5",
  "key1": "zfHzeUS2WqkWLBLTUMbD7kntSmoksPJfVfTnnGo4C5ZE6CszG2v4yAcodyYmY8xWcyYoncNzC2rzzYKsWJRoszU",
  "key2": "PkpFLcqLabGNKBrLE4TsbYDSpjvUASmLefdxPANt2SzSZtLnPqVEJ18gPX32YgZgnyxR6HTz8MjJskbaHP6Bwds",
  "key3": "5H28C4pZTbS28NYiNPLpCENPdmjsrg6R2KuXF4wHTcUpnQhPj1bq7ry2awWhLAYwBeX77QTMashd9Y9UnrC1vCVX",
  "key4": "hcZf7HJwWve8FxCNvHV8iw9cF4fwq83Rg4iRngBfdMuV2dRm6AU2B78n48TXpGxr3FiewA5cA6dQ3kvAQRpMJPD",
  "key5": "3Hp8MUjpa41PABbj12raAEssKuMyqKQGXuaxsXraSusniM85XGmCqshnPprdCyPGxsGnCRj9kzSr1QTRsD63SmJe",
  "key6": "29j2YGkci4VNyUBJViQD3BSsyCcEiSpQ3ydfc9a1eQfwATDWxjPd73iFZJakEkhRJavckcg7x4EjVwwAYoiSTLH6",
  "key7": "37TcHcgiUDo5xU3xgbLCwx1bSkDbP6zZyS9WJA6wdSsKgsr9DWU6uJRXVunoyHkttViAQFaD7UgZ16EgHCX9LWsr",
  "key8": "3BD5tb2UzYN53YCWyhC9ZoBB8rResNWs4FDgcruttgHz4RmoEJYok5eNRzS8Vy7SRadgKmJ7akXGHGWAQEV8dmM8",
  "key9": "3MEzH85pzwt2awqnCjQo27ivzfTG7FYownJrWchwbZ3Avzvce1j13H8NgvAahey1WyybhH7SBekUZhe7EWSukADK",
  "key10": "5c2jqx2DUGSDUS9ZYydjpJzNREdDNLxU5RDjZQ1XZHw1cVPkvFbUfZhvZxHeS3EMKQQhiDdUCpDddyhmQUKBWfTA",
  "key11": "2yWzc2k2iUtC7pHFxjbuUMNLmNWh2v6TpmBqnbFbTju6ax7G8rp5TDzfSkX8e3DMgqXZUmVuFYtDCbUrkBFZKzrp",
  "key12": "5UMmxEsV78zGinqN2GmTEAzCdFviFjbFPsV6vt1hNboyAjAgEoxRmrwYpvaBh6b3yPSDpyEei7ZfYkZVXSjjH2yQ",
  "key13": "5q2VPbrrkeuiHeCJCaChXWTFE2aSiMxwgn58VLcFvhtMQi1zf22FLhnA9Mnu2BXqLH9Royav6Lxvy4SrZAMSiAT5",
  "key14": "2vdJRiPanmnY9U8T7NHqTrMcnkuz2PkSL1ZfUYrNBXfTQven2Q6TL7Tzq9SyxuottP8sLSPqN198ue442ez63hur",
  "key15": "22Nx71buyaBcF162htd6VvGhS3hqKAULYhkDAFFfPsNYrc8PRPivXMcoXXwNDfqppX1NtafseMgsFrdcz32iQwk9",
  "key16": "25UknmSLqVPgdvh4FJAyQHM1tPJgHHEN7K73Q9Hvq66P4zRriFzu9SuyjKwGtt5LrVMFqAUyH9FbJFs6SMHBMJTJ",
  "key17": "3SnDeVx97WztC6HSdBaGFRvwXBaSe94C3QcX1BLidvF9EV2kiX8vatsMXPM13WxdgMmvyF2NBgQWHaLiu4VDogWx",
  "key18": "5Fr5VyKzt2D5MnXnr72AYFGApCuHSg55zSetFpsRwXRH6fF55Y3nChTYj316J2SYraRcaEZn5sW2bZZPLFDYGmFZ",
  "key19": "pwXesJAsWBvTNsRywGydtNyxKcPST24Vgp8DdRyS3Db2vSUvcjprDKqxzYne6AMrbr1GU1e4uhykZwKpsu4apw9",
  "key20": "2uKBMLPC4EM6w1sM19PMibv6rwuYWPDPvqypM21b5iAdpDQEG7cCpFjCYkafqZWNHaMH7CmvjykZPv3jM7MiKzdt",
  "key21": "64BQcK2w9HrdpyXrPwjCn52w7fNod87N26edhPpZyhrpv6N98GDrGaasPSCK8YQxAXAgHcaFYbasE2eFfEqeBsUX",
  "key22": "5dVNGZiymteZfhyi72YERUzmZfXnhMxubsyT3xa7Uc4hci4vk89DLmbLHy6PSH5bKLDNcMuR8yc6nLsK9ZWmD311",
  "key23": "64bD4MdpNXxNo5g9Gb455o4br4wTdsTYmJfZSGjjm7hoKL92Yr8Sk8Sbc1tRn21wftkhxHEW7heVFVRioEqNo57S",
  "key24": "AKQZjk7iavWCkvrYkh5pEwPFp87uG6gyYzKqhstTiZ4uUKeLkcF3CkqiBbevgeFHcKjHZZZ7nuXx385KYUB9d7Q",
  "key25": "43zrYSw2NqWSCk1P3Vu9kzWxSaPNwmsYYWWYt2YYgWiAomRGpVTai7zF2H2qhSgV8Xd4aod421ULcKWnabAemUkY",
  "key26": "5SmXYm3BW813heCPoGi3FE4GvwM9gHwv7bLtbEiMn3AhvoaV5x3Qx6qU2mn9G8bxStDuU9W5brb6fSRzxqyQ8EYw",
  "key27": "2tJAn4nngfkzYTDdSo8hpREctG25w7NEznJqr1k7tvGGewEwLHLPhGuQT7Dp6DvF3UPJVt6R4unkC5Te24uEco6Y",
  "key28": "3sKkKAdFUX5t7VkGh5NYD3HUtsPomnTBZNaS6WTuwZXFes1YRoyQa3VDsT2CbCDKxxKiHwfPWoR4d6JzwTgbeU7t",
  "key29": "4B9ztdYAvDdAZ3NZMVAxM9kjZqgZzArmvUe5JkUQpxA395x9EesAzjzRC9vKr8G6184McYwBdSpLfLhczPz6Xx5D",
  "key30": "3NFLxwhz5kUNdApiQEiqPVEnUwRCRUXG4Exk8Vmh388qUWbRoQG76SFRmhUHPXB7nm3eFUacnMwWCsPon5WLEY6j",
  "key31": "2N7HREx879c1LGfZjm1NDiBHhhA14yS7TfX75RDgfUdyQszgbfYSeFqMorXBXB7RtB8cJqPuDWzvQyP9s6Rdz2Ju",
  "key32": "5jVgJb5LikniMPZWBVdLn9S8fRAXafRCR78b4NtCpCTAzMQVCS8KMixvEaii1Rdb31P71LX32e4pg45YM6is5EsX",
  "key33": "2cCA72sMKZeNYmXfHu3Pbb9GYVy7pQi3YNcwjqRPtZYh8zeAA6daEfNqyEZm8HhjGaXzQLFmQ6Rc2bTcPu2DtjyS",
  "key34": "6L7LAMuMFZpFwF2ynyV4rvp5pm43xb8rGLVPUUB1wir5tWNU776ojVWF4SJSQfHUdCYXc3fVJvQT1ugWcmFw2Hs",
  "key35": "3yLSCs3YG9xBxGRMDtrNATpLbR8mz8caMLAQA9DK6wNFpdgBqDYNVG1a8Qb2xfcKHxyYDZhgmcAHemCGpLBcctA2",
  "key36": "4cgGvhBUVS2uS3WM49YYFD4diHaN4gGwWhzG1rgs4GV46Jy3xtbeTY7nhYQtYYbRd3iWEwF551gRPPj7tHVfFpNL",
  "key37": "3jrbHziSWTAGA5Wgv5cGLzvuMVPyCLcCzbBGpxDh44j8Cgq3Cgrr3a5KtcKpvnK8JRUVXjSoLwdaPhNHKRzJAPv3",
  "key38": "2thYjQuWptC8hPcbJHLTMjH2vWDfqEBJ1wmcMGCjXwexf9o4YRfzNPFgkSmbZcPNSVv9WMUBbKsK7Knf7DSE8MS4",
  "key39": "32hxN8Z7Pj5BykRrLeReQFoQAfxkb7ToyX8UE4FAkiHrn2RbP3Mv5zN7BRhZsCRL8z8euDMPfWMY45sfPgbMdYaJ",
  "key40": "41FHymYyb5dmHg7GqaorR4hr3YKyotMm5ybhzpubVTQZRVkP5QWsJ26JQY6w677e4CdHM1TB662irztQ1LSpU2UN",
  "key41": "gHeqAPgU94QaZ8eWVh7FyccFYsTcNmWzUsGzyxqL354gQszi7cV3u6DKHcFSE99Wt91SEw5gePZYuCuqmCXhrEr",
  "key42": "3Gy93Vu3DVw1hUFnVVKiz4HtqwjKCsgNAFYiwybk4eJMxEFwcw6HRPTjTHdQDKaGKcJbvZo5NtJZKrfHRXudo36m",
  "key43": "3u2LNP2Av5BEUD76fuAEgedQFF2WsWtHauBL4wA48DhmcK1H3QgFFRxYN5YiHXQRAcbugNFwPsh68aJJPEMHiWNE",
  "key44": "4bE4D9tvnEhmDqXjakxP42BaxaqYENXnxpkWuUaeqGPLmZcgVeXjCFrA5TLMJBd4ubZQFb9NvyHXtu1SPd6WzegJ",
  "key45": "3eNzqzND1tuTmW6xRAp2rZEeg31wtwi38av2nipYqUsuzYzNxf72cZCErE934P9eFTWkJLem6BjPWBVCvVVNsodE",
  "key46": "5HuXT6Pz57BSkV2Giq2A6BVbEFhMzvibbpShGbzdvw9WeuGCE2GF364JrAfdB5JajW4gWNhGufb69v14dnnggkF5"
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
