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
    "54CYwg1FCDE3VUexxsWZ4P3wHtYdyLvbvTs4HvUs4ZpruXCmrzdWLY76uZez2dQZWmKKRssxk454SuFJLG515zRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKAGN81utiMkpwwS1fvAufSAyEWkUhqQXppA8oeKf12C91GoroNhgTDeVtD4q9R7wKp9xNswJq39Wyk8TUZ2DET",
  "key1": "21s29Ag1EjXanDeRoCdDHkGdRZFF2nEzFUmnDZ4JTFGmQ1bzitEs3yVNpgGeXyGhY9bV2LmQU7a3xyhT1t3VnDaT",
  "key2": "2WicTgrFHCMqffXHnbFEwbauJaRq5qbz5Vxo3eJpNwXgfg3FhMU7a7N2FC2ffGkNARBdgSTTCJzj3DPq9EMQJ6hJ",
  "key3": "4eD9s8kt1kNeb9gWedw87wX3NTAdeCzrQCqJy4318rJPhT9schQkT2VJfVL72aPXTHkdGsyvvfnZUK7wG1K6eot",
  "key4": "5Tjo6ymb3YR5fzmXDNQyk68rs6YaPpPNFGL8Y28rXo12d2jamYDkN56faKHrbgRs4ExLRm1n49dQpEPEwXkbLgYr",
  "key5": "4zaHh1gNT8jPdQGfN5gTCREkmPXAYbc8RtCC9KBs49a2zAEhKXGhUx5HSDN9Gtt2cM7xPUQtf9Jr6PnPTYWi5PDw",
  "key6": "4pWXAASHMA7a4cf21uLD9RG2WP42RaUMNR6LoPaEXA66Y2ehWnxcggcK8sFEYhhEPgiRZW1y7KNN6AwKrEnfCyt6",
  "key7": "5aanRjTRJpQZ6YwLLneGUm8zSmu8gFDeYnoTxEuPFFAekEo2RK1qKwj3VUjfgdKdWozk5ws44SPyELEyyVpE5PDh",
  "key8": "5C9SWpEC8afjU1b3aYFM84Q1NenQAbc6gJ3eYbeEgaarYs8FkvDwPQ6iKPmYkt2XkxmZQmQsCpN1AmtA47cqndVt",
  "key9": "3fWZBmcLzy7Y8AStGfd8DtQmGqDFjmYtqBtmZ1vakBGJ279AkZoNKt86H2JUogX1p1Vpx59J6rBgyj8St8C546b5",
  "key10": "4yNFAvoo8BoqRQwHSGLdZHGrsYUyeBnq2qL5zQiv8X38sUEQAN6bBXgRxsrpcPP75LsX7mSRHzQfDCNGWzAi7BtE",
  "key11": "3fo6pkpjFxRYXrMMXayKkexFui6rDR9D3DqCzj86m3NsA2LhtXWUHhesR2sXpBE4C2V3E4HWvifJ8yRUNWiecNPo",
  "key12": "3DpLFMgw1MR5ArqUSxG94VSqh58nj3eVN1AgtW2JuzWKQigYBjwHe7TXJeFyLDkzoXzcK8PpUYejJ92NtorKfHfu",
  "key13": "5Kvq8xsQ2Vn6cbcpn4YJcU18LcQdDj7qNtSvpUm8WGksXPyp6WrBXZpJXRGLW1TtLd5C31tbz3oEbE5xQbkGdha6",
  "key14": "64UGKBXi3KJWxngkTap82Co87q8RbFUjTkMrrkDakmwyRqHfQUeRSZUQ8wHRtAjYsLLnLQPu4SNHtT2a746mF3SB",
  "key15": "4WunURFk7p9dN8Qfm6ZErQQ72EfdyRnVd2dBwmkgv8Dpb2w3ATnWiUmkNALpnQtkq72TzTZyCBBFfFrN9cfqSUcJ",
  "key16": "4Gjn2rNRFQwVR3TJmYzXGEgHQVrireFgcmd3ZgrWceg8FzZsjeq4rv5rx99TcPmyiJmABMr5Vn4x238jg1cRjZ2e",
  "key17": "2tu3Djo91XJESgHDMXdiKP7fDG1Gd896FfTZ28vvbEmSXNKSAtMDJ91qJxN5MiKA7YrhoecrgfS7qNQfGvFSPzkg",
  "key18": "29uuDuM5WHtZxtNrcAQ3mRgNYSSeSqTav3RMNeoFjDWTRpD1EhHhYeFug3kgNG2Rtn7uTs5ch4oNMrCACFmYwGWN",
  "key19": "5XJuRmkgQD1mwgxPjGNeUCHwwS7pkP2W72e1UvWGsStKreSSmNzQbiN7dEX1rgCLngn7tdEFx1BpjgvTykdvDdhh",
  "key20": "3kk5Gqdg1vTUU7VNA5fQhHW9JvAagziPg4HjWN2CW9uQ6fckqocnXTH47xK1RaiHyXGNTZQ6cHLybz8T5puQ4rCA",
  "key21": "5o1UnTDVTBwL7NpSbDHD9921xHvCHFLv1RvZv2cv6XxRW9bSGTqG8BTvHADDnoMVcRkDRzWmkERSZbrEcRvo31uC",
  "key22": "4Qt2hjmb4o3CywPdvnyGfDriZQXA9PGC7xZShYzzEHpNiyeuFqi4u4DkHNzbm91Gh6D6DAujyGqRUcjnTzEDCU4s",
  "key23": "47RWDnA9RMz3HAMNLuuT5CJBzTcHBiBy22ZsofoneWfozredPpcCkct3RjLMkg2qMZymVqXmRh9fnbkCFhfSRjfb",
  "key24": "4VRF9GtkLa87N3MFi53W1Rb3idcYP9LeGHuBCkhPX5zx7RrAZ4nzGRYeD3cwWNH4tSqVeGLn1vcjwmG8uFeh4Btt",
  "key25": "UFEaBtR8uaGcZyabQXFxPvvWfjfgdLRZrW1npx2wMTgBFPeSuRUb2pZsE4VuHDiHZCGuevmxT3LPuaGJwTokUvA",
  "key26": "oHrtgDAEXojsAwwKs5ztLuiozgGu6vwAbRkbTNzmdx8yEa42S3oBF8hnMKADspMgRQ2q3XaPPNfmTrL8A19Nv8j",
  "key27": "5zwnqAndUd5MP5z61sCd9wUk3QrDxRBjWUAxgBenxrNast6EWbhSegtuQsniNUjvHFR9y4yXhnkfWMicU7SVBRR6",
  "key28": "4LExxU11VqPSPUGsUjz3SQ34uFYL4UFgtH9cSafbjkU1ihJ6uBCjk4fAuxKucoGsCZXTN8oYtUJd1x8DxFvVSMLq",
  "key29": "2mJdo7r3Ryjc1JP2sdQra249rCsBW9wW2NGLFr1WuQ9BGzs2o9LaZjbXoH2BaBGUzX9NQtADjJEtbDmyu8gj8HSb",
  "key30": "Z2G8xgZmZY4BM5LZMs2KKG1hwrgf4d8mkBFMtueDhr4uJUJy9rVVm8HmADn8NkhfhH2LNFG3hMo1yNNVu4Awqug",
  "key31": "2cNVHiGuGkLPAjik9wfmmmsWNsWXy65sQNoC2G7Wzcxahxns4f7apmyfyg3qBpjLUsfrhoaVvHUxKyFE1VZbv1T",
  "key32": "5YTEwUTZxjvcbeV3yX5Ec6g7Jas4dFj65QY1YWi6fzhAtnDGWtWKqWr4aYYVjzAcYmkhhgCvz2cUbATFM26kPB15",
  "key33": "3maWw76Mw9Qtewu9khn5GEQzT6is8dFAcPWEzUhaw31mJbFshCkqNEzch2nduBM9eWsdpju1Znod8qUFv1w8XbM1",
  "key34": "5uaFTsZyg21AcCq3YKdvfWotQq9LcDZ2EGoWdgqtgXottwr6pJhcf2wcNBQ1uu3BL9sKMVnYRK8Ky7bQmdzvzQWf",
  "key35": "s2pB4pfmTWzB1zkREGaoZXBb8Zd52ihRxCoPbH3MJ6VMsBpWW6tsW6w4dEnCw2Mg71MBR8qFAQh8pxbyuz6M5PR",
  "key36": "5Vx17dMhVbp9Czwjb4yhUvegzVHrweuMFV51kCJbqXgzPg9UigPQLV4aW1xWd85GZewLbMzCx2X3Gta1PtKUK51s",
  "key37": "5h15zmqnMTMGZRJTcKTjz9Xg9Li4Axqu3mzaFiwm1JiLJakp8Y8nKj1KhByPKAkaKWUkECQzDKNhVYUy9jpeuZ1q",
  "key38": "3CYZAwNgqU2vyuA7bm9gHnMsPkGPeoWSJivRZePZsbM2H9YbUmAFhHF58KFo4QUfHsQuTf4FvuQhrjzbgexM33st",
  "key39": "3zbUft94zTm8voiPpNZndPsDqwZgxqAudZcv7FnJeRhpZ4CrtdYQXUhNCABxhWMJdgttBUggLAgDmkUrSCB1PeBV",
  "key40": "3wqQaoTSY2L4siarxfVwLF8iVwyB5RLnh1Wvj73VuPauiNoAvaBc2dd1Hvhm6XSyDXFArdDkGM22YixSWzDo9LkV",
  "key41": "3DodNfqRZUNzPpZWKJkmaTr9nBLsW8rn1AZTbQpmomNPZq7hKgQn7tcYDuUwcNaYwRYGQ5Hqarf8pTqRMU9tbXEs",
  "key42": "3fQF5TKZKKdsGiTGpiCVjxnXDgAxmhMzJujz7byEiRBY5Aos9Rm6hL1rTTkooWvWPn63GychLiCqXADxDUQJtUxF",
  "key43": "5uXRULiUUEDxLfQnofBXnxhYotapU6HfsD4kYtF93Wy5atryerruMCd1djx3w788ttPze9zSHfxm8aUuNn6TWJ4q"
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
