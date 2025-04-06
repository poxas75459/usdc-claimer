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
    "64rJgBuCjYLaicTHq3abBZFb8MbFmrBw55nFqr1AjmJ64coaDdGBjuuWbPk5denKnc8RdAB29KCQcxiwuf5sGgup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fqJGXRu7THrid3LHsguMoEJrqck12bfQQkp3dqJThw1KpLTsSip81GCcQeX48XX68qpHS5CmDM3PStLW2enmpA",
  "key1": "4w4M4JLvQTaAsUb2WB1rgYtMSaXKBw84E2oxT1XXGQ3AmrVXZ59DPCMGHp6bDtLkQbKYU1ac4bHPy37Y4zTKiNfD",
  "key2": "2mTBrF9pjZS2MnoBfb8FfoJ79968dz4boFEaUNq3BPmcwy7q2of2UGEPDjfkCzuPz3kKJB2eHp6exFpKwKsf7ERx",
  "key3": "3NBBc1ankuWXA5HiqdLq1HaJBfsqw2fC5vLRd69xTHFhcWVDM6gbTmRHk3KJZ92USu8bqmBYpkKiKS6Ku4SxWh2c",
  "key4": "4cRFow3MTrUP5g1KY15cUonxizTjvytiwHkURxGQb5rMWxM1yPAEMaAbrXSq1A5g3qDLd1U1mNj8MAgzwFwSdHR9",
  "key5": "2HZr8jWS9CVmEx9BDDSbMY9REbrTu4MSL2EkiuBs3NRU7gF1vTfwUmd1ei9Ex3CdRDiYQkbWmfcvGLUZwjpzvG1H",
  "key6": "AL1eVKZgUGee1JzwCpKaUd6AzCTF7ybiB2REBu4PtgSS5JJbFDz4VBm5hCoPkXhV97PbtZB2Zvp4UJ9eRvzRwus",
  "key7": "5mvmV5VzP7TMqqpZgwgyYtUK86vmZ1rwRw5SiwYhFRRUpi2aaPeyUvKpDTjyaZNgDNVSR2arZNibCwNF5MVLhFXW",
  "key8": "5GTsBadwMK6c6pqhH9hntyKbBBjuPhxWE1hYxMEhwoPDx5i2uwViPr2eCp57uG8xsbAqNMu1i1t5qndLnaqt3QnK",
  "key9": "3uFPYde4B5UNzWkiaq9ZNJVg8FgH9fYviJygBFqmvBqYRpGX2TtKmwaaNTGKN2GeCtkhH36CiwcV5pcPFDGQkiUg",
  "key10": "htnL5DgnDv3wdSbiL6WuWZfdyhpCaxCTA3fi8wPNrreZhUZgs2rrFNZvFXNJu13z2hDnPUMxmmUfSZMKXDzMsFE",
  "key11": "4Cn45Af8K956FDLfFGsDJyotcSvwj2McX7EMNmr4LHRAVzBmMP3NpbnQYrY7cpjpdrEgcgqWMfKDCnNxSWUT7F4W",
  "key12": "2621q6ftoAEkz7tBGjZdKaHvc8Jt84AV53bS6n8cuyUZw97QWeWgiZ38KDb7zcUCXrBNLNUVdskSEWm67BaGgBBp",
  "key13": "4VNySPiZmDbPxnzhKTXpvxJNttz91JhvpDYanp7jUK5jZUM2C3BJkxfubwc1qHE1yJY8XFcQTJL3mv3fP1HGeu1Y",
  "key14": "22gQozGLonsb6Q5pKdJvUCZ3KAVZsUToVZWJof1vhHaS4weDNnfmtddr1hwdVKLUJNHjq5r6919iKir8WsWhcJEN",
  "key15": "A5aLUgCGcuGbNMcg5yaEnx4bqFnHkPAC66WNL2hMjbmenzu5HbZAMgEH5Ys8GGepNUBprZfPEdWfeJzZf317z2q",
  "key16": "25rvgG4i1euh6MB3dBWPNsXqan6s9k2KsAzqvRRP7mZfXwLLhyjtJDbUakxkoyZkyRLNb6XT6HFyzVVCWMByGZbz",
  "key17": "2EkVE8hXxHwmoG1QRG3CnmMRwTtmN149HjVYnSTJPC5NaZJJQ1JmqF14cvNwbvFCT65zYjS2SgqBtuo4iq1GHSfu",
  "key18": "5YEfK767RfhFvnjkQRMzwujgGwsx6yMDPQmjdvsPUFL7frHvaAa7fPjDGoPxzanuiCPViHuqet1GdQFefyKAcb88",
  "key19": "3SdUVTYLnikNf6GSBZsgEzqx9g8UeqLfek6oAbHvoZFRi3ncb4b3RrFzWDw5BmRUovHXALTTDDrimFS3hMeTVRMv",
  "key20": "2Emm64YzFe9aMZWEco2ytyGQHpXyou3wc1hHTpNPUPMRc4DnVsfGeuysZsjknmdasfXXkYYLiHRmoy7ij1MteG3G",
  "key21": "5A9f3oKi7CT3rtuqmUW7ge4G3STKru31soUT6VDL7L9YrmL5BVcPzWLPFVGMZ4YF7BDCMG7FxKSWyfcv1GKMRovx",
  "key22": "kZuzaNXCRyJ5EhcwkDtD1anKKdVsUMTv2UuBqguA8JjMsjfFVpPesPp1NVGFSnMmCLVkG1ttQUGKh1LX45cG7RW",
  "key23": "3PeTHj8pgubwDB5A1dneLZ763514EgR2yNFnpkZiykzQa8nqqjRBXiywD3iaFpm6dmYpN76LWGKfP19JQcy7RsJx",
  "key24": "kCiyGDx2ZcHuyiN2sA1BUv2i6fXPsKKU1TwkLoLUAs3pW7uW7oZHvUHQUtvfrczEPpzemydRtLzWtovYksae1cv",
  "key25": "46wFM1x8dgze95vrJm5Q5SmbWSWH3DBiiCH4bxyjeY96Z6b8VkPMGRuyPrf5we6TUwJ5iKECGD95FwHzZE2LXfZK",
  "key26": "4MGmuksw6WSFqm2xEKpCjXiLW254sN8yR7VA4BJioxuRMEJZ42jPmfKEnvxgSS5qjwqZPbhoki9NLZM59UWFz2NR",
  "key27": "2h4PveoDSK89fNY1b2QKnQ7L4L5bGS4WamG9TRTM6n8W2yvpjqb12yH7WRZ7eeYf6dZfbRcMLz35ReTHsZi6AjVQ",
  "key28": "5ZyDfQ2hwBMwDuDTinaBHzAyLDwQCqKcTZHoteqwcUnHgp2ybf7Bhzgzd5kYQfvFbTq2qMaSHJa4qTTczBM83Nkg",
  "key29": "3wu5DPRN2AEsQrb5qrkrWmr58mYNSbCXMBYsPVax1RVfy43RDkHmzGZ4WcwjCpgdjCVXLTdi1FHP3dWANvtapS9f",
  "key30": "4XzsyjLxvwkKSWEhJ9zKYaRaX9sTsw7gaepMScT4bG91EtCCkXEiazkttZy2S4coW88cJfyddW14c3PYXiR4aF3D",
  "key31": "2gEuoigbMUP3dyGptkhp6VSXCbdTC7iWmEeDMBpk1h77LBbbybDULUDufgtM5qKXX1cpfkp9fc9zH4sdEBurALcb",
  "key32": "4PijbVjUWb3inLWvgGfXPiJ9fuAjNySdCxbQUXEufaeCF2FxNzTX8MjWJo3FicH5bBiS8qgje2ZwEW4szgt9LWDk",
  "key33": "2gncoxTuagjTYKyXHz9WpvAUx6rcWna7RwyUCnPndvF2nf2autqyXLfasSQNaxy54PGjE5pknoe8JWQXGN944fW1",
  "key34": "3Y6vCCKPeh4jPL635bkpgzZAXDKz2i6cQLjrverW92QGsyRaW4FgvdDVtm1BCm4NJBM5EoSt9fyCFHMx2RQAM3du",
  "key35": "2LugRrUu8ZM88ou3FUf7oyu33mBnZApDuezSUApQmDr31oUfsY1VyEBFJScdA3JdF19ivTBs2uzJ84dtxQKKgVnS",
  "key36": "2EHWe5NpRwwGASPLTqq96PF4qAsYenYuayurU2hTT7MMvS1v6AK92851Gi6ktssyGeDdaTMKTaQAPyroMgeUm7yw",
  "key37": "51Utu2h6WfDC5aQAqphMoWcJGYV3GunpzoFx6pTcEGAZvhVA1i5WFKp6HT8SwYbBD5gHuf2aDrYKXJQnGjS8DTuA",
  "key38": "2bpnnCyPdkAP5182h3dxADn7z64sCFUEShWVifQn2LpboZBRsq1c14zfNUK9Ca7KvM1FFZBpgXm9pB8nvVFabGXW",
  "key39": "33rWETxmqQQkFihwk9mSsLV2scDL2wG1ZiWKEUAjwWUNUZatxWsmfZK6dQfxW6T6dAh2bo4EuEAQ2uyXqhaYg8C7",
  "key40": "3A2bNm62jCgTbAypPLvrByfQQuNmiY4GD53oxYosk3AjfzSS6VvfaTM3mYk8GnW5RhNjzxihzfPphC5mATiEZmh4",
  "key41": "2NE8U8YBu96hL6nfLV36SUDVd3pXFbn8VyzXeDN2onD3aKkYmMLvmv2BMbbPiZiF4PRL6p1wEziXRZJK8JfvtSka",
  "key42": "XsUknfR6275mTfZJYkU7XfENmT8DLgQtnQ4RJ6hiuUWZ5igtMdmgSp37rTo5P6KzxDZ9H6mJpQuRftcgJ5PWbFa",
  "key43": "5VJfNwHxegLf7mB2boW22gKfzLPmmcNDvcV6BWkBRS6fXB3J95rBGFXmLqqLxbhCiWsrUKboEdTWgQqR4nXLk1CL",
  "key44": "5rXZtqpt6ySqfzazDw1Sg8DYycYTsxwqFcvDTsz5Z58xhbza8VtSbdXwvVQLPya144Kp8pgn2YYfLstoVBpweTYz"
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
