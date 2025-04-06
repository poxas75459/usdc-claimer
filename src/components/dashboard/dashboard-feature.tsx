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
    "2BE4HKZUGyDRdSseUMfernthfhHotm4AWxkxN3hYN17FxAbt1VmM2DJ7nMZRGDWi2hsNnGMdNouwtii4fxQXm1GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YriqksG9NYmcp4MWirsrqv7K6adBEe3R1MCKQ2fMFTo863fFeMxqRY6M8EDr3msuZWYADbbw5PkzgFscNnmpeC2",
  "key1": "4CqXUZFShMYQLn8mhPtiRi1xia8SmbT3hMskPePimEfe3uHpjhmNLcFvWfF8pMeRJK4AREKxmvUqCCnZbF2g6Xo7",
  "key2": "5XgSqXAALJrxVRe4zgi31jocYDgCD7GDzyBvzW25tgAf1xcyAAAUfcKNLF8whfap2TFgdHSYnFzRgbGcNQGdqdPL",
  "key3": "35zj7w7mQLxQz7pwchStHpP2ikXSRH6uje1hSkkEMHvu6z9xBGnVQJpAeddASLej5pRnWmQvvcbjYdE24UQsBZ4R",
  "key4": "2QGhU7SzGZojDTDaVmx6Lj7hsygQRamKV6NmWyQsUFop4NfJQJQJqWzBuguGrJTzDdZCccmWRtH6ya99GN2vhq8T",
  "key5": "4g9DoCgtRE4YNDfVkASx6HbVR5Yo8DVggzEA6e8EHpfbVGPN3hDNGDnnh2aiQWKvNaQFfFk3eXo41WyC5TsPkqg1",
  "key6": "59P3nFnaxPLyzXQZhZEiqhjtqG5t7aCWkSmpBpyehXM83HpFBP8a4CSmj1kaHNspjHdbdNQnTf9TfFmvLVcAk5Cb",
  "key7": "4cTeX3Q78C2qRuiQ6zQdyWxk4TZuTh9GpUYy9ubgQt1VLV2b4PVPzH8N1QAZs1qPYQFSjXjjjNqnEq4aED183xuy",
  "key8": "2k3ZaZbLXPv2wypXKoCmQwR2h89nteLSiyjf1iNYRoRMayabQqch9GY2rEzNEsPJd3P9SwgsdaB1Wa4LXtyWrq43",
  "key9": "5reMRMk3u7Zy9sN1VYj7UZ2ur8MeCZKpHtC1UBerbcGbMk4k5zwqVHQXgsxNM4cUfP4bBVzybpERbU5ruzjmqMqH",
  "key10": "2GGvtX9oU3YBy7hhd8h5dCHBqwdEMefwXebndRzYeKLkdcELL6tdyzSWc9AEJam8NpZfyz8tDNPAdqVzb7tBdYQK",
  "key11": "47hbLKGnACEzRegV2fxDQh57Cf8fHf8vwULuKvzJyQSWZ187qjiVEUaNbMGKRGYX8M16H5cj8cRHtpFWFHMXuoGW",
  "key12": "34UotRiDQqZnVTcJ5GvQUwMC5f8Z8Fi7zFZrLvbkioeqBrRWDCJC4npMAeYLpUPjyp5BfBKL1erVP9vt6dRnBW2r",
  "key13": "33zHCcdQXLSHeME8sfAag8kTT5SmtBNhWDxrCAgenspuxzUHgU9dTxD6J4Dvpcj2CKnWTBKZJmGjbfx31n7oVBfU",
  "key14": "3eaGThZr1tNV6nmTmMttyQX3dbwPUVkKVENL83jidH3swN8X86zzehJ4qupSdyCE6GUoPRjN6KzxLWmKrnJ4TE6A",
  "key15": "5ZqDpMjDdcnaC4NVJxWajYxjNPUsiGHGmapLw5EWu4DxLbHGUHTWbi4yN4RysEADzYUAoVQRSLSzJ9MkNaeyQubm",
  "key16": "3WJqCStApvr8AW1pyUT7L6XAogZgG1vKyrCnfnUSjZUhfaDQekPzdw55jXZncWNKqriUwDV6LLqjxoSzfTmguq98",
  "key17": "4aukCtjJwH8bSWVHXeaaHZNTzYJh7YfitzzCPj62TV6wAbmgGQE6rvkZb1gKxkET1bZvfBZgD82M4cqgk1XFKMqE",
  "key18": "4Aq2ZBChFvQMe7kQcnMD3sa3nT1fkDJbHqqPRMnzj4vGC1hM39xkyDZFAAbk24jgC1bLzus2svzkcncdGanTLPeX",
  "key19": "4kx23qSCtZ9cRbdVKERsgvAraZ6r1XKFcTbrFMZT9qw7tBmFBX1R2D95MPDDhQXmWaT4rtZFepXQDENxjXvTHRSn",
  "key20": "4bGNYqeEvMgEA2eaGnEK6jvYEkQmKco5eSiRHxUkUsgL7rsXxSJ4zuKjTKVPcuDsYPAMDNCyUVHGXN4Lsyu9SDFN",
  "key21": "1bsmeEbeTQqwfFCysnGVxg1oAgX6SXbgKAYPRCArcG7jef79fTmqLKjcQk7vE2JM8pz3vauHFNj1AiBDmbjbrHe",
  "key22": "5yQM7LspcLo4HwEtFa5yPQGA2Lb61tR19NW9MqKBagdxmdSmdqdwkNJvEKe8AYSqucEnDzwNuW21iD4kn7w6ySkM",
  "key23": "5LZxZ3ucmjJkp2ZCtRbGCin72Hsu2S6aYPBu771qvCAkupzM9Yg29TPjbiWCyFGSVMn734rDkaWD4GGcmNvj8eWT",
  "key24": "2kcKxrcmwkg8VnAPHH2Uw5E3FsUpz3jx3szWK2hZetARH2JJf2jqKyJbe8Pfft43fTV2EgUrXMeifCA1guF9n41r",
  "key25": "5ZvL39avnuNjaDAXGKe1CjRvpGDEg9LHyYEgTBwhjRvaWU3nrs6D29Wf9YALrf6y9bk686YqY3uZi96WHh1zF1vu",
  "key26": "639iqQKe25SCYRJUXkDZEWw3FURtikgGRr5XCjhM1sXqzNq76P1qv2enLHMN1HYu7CATfgH3Kp1i5zmkth1VF3nh",
  "key27": "3G7vSyA9eqz2DrSTp3SXbSP3DPLKKUJK8XJW9Hh4HAEPRNwsZptxKrzANgNz5rtGiKcKZ9CKX3EFDbZ51ghq3XA4",
  "key28": "3Tfu3ertU6XrXeSCTJmCWb216gjSxNEyGc8uRzrPmPHfpoJR1wDbzpCYxrFMxbLMkzKuSRxn6NRnjNHE8E7m4SXQ",
  "key29": "31LYBZ37MZRdg7NrDL2VpdZUyHaVY9UnK9VMfQKVebaBMTSvTEsvkENzhKGJT9zTMWUqEwViPVzDqpAuJiJctYQv",
  "key30": "66W2w3jEbwvkkBiT5HEhMESDBviMroKWH7zy8P2XQphsPC1SPfPdf9cd6ChMhjDoazsKzVCN78jaJjf8DTxpncDQ",
  "key31": "4sh4R8cniBQHvF9S1wE2Kr4aePmChvHLBWTTTH9YCcfJMknWh1JNKNyBBSvXZA3xJ5MtB9JbuQZRfVTHymBbm8jo",
  "key32": "2SPJEn8891FKqM4ysDhoeRRAu8Qb7C8wCtFW4v7aAgZoexSGe7tE6XCoYJbVoDvrXoTiguLDHsAytsiamxHeB6jq",
  "key33": "3fVudQzPB6qVbBfGg9hcTBVa9Am82gjyV4uPcte9yKibgH6qrfLxHC257iN1eKRWJCSyhzLPUDwUWcbGLYT85JX9",
  "key34": "2TLBsSvG92ZCYFXednw281akHo7o45WZ6rFKP6cC9tu3E8upxt8af1qYhwZxZ4HPm1sPGc24ravBaHtRwZZ1Zj6z",
  "key35": "2qBGqztiRxPdiujx1gjQULTVm5YWotM56iyueoxtuCXD9RrqGiKjCsYw7XrFQTpNtykEMwrhYCCt3evdhwMDdUiy",
  "key36": "4yApDW5W1yWAzn9DxkpKWrEeFbPuDHhfVpa2Yt3WnbwHyTE8XfgCuXKM2k2RZ4Erqc2ayUvRYEnLCbA7LYNmc3yC",
  "key37": "4rmHybeeUZrd2SFjXm9ABjwBwaapRYiSs8qZzSf3XGfaAfrUrrC9VzMaq7n2dSxrF98LZtvFZnptTQoFeGaUaNh4",
  "key38": "2iWC81yg3KNcBXEnXThWG3PF7ggzz2wLioZ4dXD873MTn8vcxCvLJinQhixEJPzWMv7jpmyqjXqVGcrgS7ifxQNu",
  "key39": "wfD3LCsmffRccid2kFJwSDLNHqVtK75VjPayoPPDFfNFUjuHwXxWSzToVAS2w5kPvbH3jMgE4CQy2aJ6AJiPAu4",
  "key40": "3d77yjQaMomWDWTvo4mriXBQLSjGBfLWBGjVyX8wnmkrEjRHfrhWhS8wytGKY8T2Fu7mEfTFugEMWhd2BDPGWVut",
  "key41": "57t5BfqXWUbmah7e99FGVrXGrEpgitbMqk8w7Nueo8PhRqCKR5i4afVKqXGhYEL5vXGCdoRFwK4TobJkxBKyC1X4"
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
