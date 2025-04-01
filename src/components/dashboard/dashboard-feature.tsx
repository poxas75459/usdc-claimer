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
    "QnWtkCcy4YU1zFqXwc4EjYkyofL2QL9Yxb1TxDgxS5CWedkaB9RAH2g37CJEM5KLMTgJuTwHxGRdH9iXKvbDXYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hA7TF4BbSCSvNyqCgCWdqGEgUb8vHsMM7TFbKiLFxpsWuJK5WEfeZmWQbumMGeCCJ7gLshNGV1Dcx7BB7m1wbxJ",
  "key1": "o9sJZw3NkSveirei1AQ4QzNJoyZWKPv6htpJyYdyuKQQ6N63PeFoodcMrhLh7BsXAWBFhKoGvS3WPDZJL76UmeG",
  "key2": "3MrcB8XkhFAcbbbtVZfuAQ2W2FE4G5rxy13TAWLgUEfE1VCAn4VVaeKynCNaaHa9xhQn2Eohm3XJepdBrWmfbCag",
  "key3": "5sKVRYjpXq4uNFT7RBNWMfW4x8UGTsBsUL7Mgoyr4fFBGYHAsHDdHq1dNU4w5H3Q6XHUopWYXqBcSE6qFHXrfJSS",
  "key4": "2BihNmHMB8dpCww4XNUKdJwAYsntmNoaukXaQSkVxzsDnjKRDgeEiGWoi85xNmSe2AhjwP7UnLmw49sNqy7rftaF",
  "key5": "543KXFtMzpLreaTPce2n1k2bp4SxCjscXSzf1YfemdGY5Kp5EZjnUweDq6cqhAgKVCLPkcR8763s4x7Eci7VH1mR",
  "key6": "4ZBtgjv2c775FhemeH7bcXH3wrRkn9eLSmnr3Ma67pXCW9bSzoSyMbSHrJcUt6DVT5hhJdD2rB6C1mXMTh5zzZ9M",
  "key7": "2t618q7gnLXg1eRxjG1sTPFscewCL4LjrA52xZyUhcyzB7CpA5xSA1XWwZMbTC4Whc9CCxkFoRg1GoEp6kWrhDXx",
  "key8": "4G1Ld5nQtwjSvo3cDuJp31WwHvE68NMNoLNAJnPBFpdpp9U6Qcm4aGM23Hym9qF77qYJFZJeuyA3U827ZiwF4Dyc",
  "key9": "639hjnrwwAJYYFFm75AYXeC3NDLjQC4aMTzb8Ecj1eodozo8FLFQzHmEkF7Lw2eNEgdG5sqXbtvmQfa6DoV4J3c4",
  "key10": "Fni8foDdk8kYMNx5LJaUALB4MWc6y4At4pBMjJZ6uiU4nR8NruKp9ybdQ483Pa2BMthQzJKwSUxffAufDCfAisr",
  "key11": "4BLn2ioZsUTBqZwxsEnGHXRVYaP4YQxt7hhNjZSnFRfvDZh5mouxWtyYLwSRLSrnYEsYWySs4YERT4g9yCjjKsPy",
  "key12": "65ZFcJT7Ezjq38VSoDRDTfuXDi5vzbXZ6MExKbzbsg1tdbRcb1G6H5d12JEqyPRFsT8357A1sNZxfyxGnHg2bH2Y",
  "key13": "mymocWidnDpcZ7d3WG2VMDv3vrZ8QcZZ9f99fYKfsGLWhKoVnotSvTFYDW58qBjCqB1xcDCGJurBE4rWaSvEhx7",
  "key14": "kXsLSQQEkBCfAD91NJzY2MVszWbYEbJs8MWBdv3qsbNHQVhZzrsfggrRhergRiwgYbnYSXvB4aKBeTeoJZyDjp5",
  "key15": "4pV19Zr7vkez88BxDoP5tPeBZuERTD3buunRHZPxyDQABAc2Hjsv9jdVDPLqXfwhFfhmg6aXRJ8RnU14r8Dz54Pu",
  "key16": "2Kh2Cj72PdNYP8y6tt6JQorr9Am61NeMwYWrCcNd47KevDLZQhb4Y2QYAGYXa5fRqLQxrhAZzLyxByWdXJj5RYQk",
  "key17": "554FkyHbeoZ34c1rzvMvyNQeWy2MqKtZwMqNfDWLCsZEp1u2AjBxCCkNXEtgaXsA111WsL2GwoRtP1reinwNacC4",
  "key18": "v6yQazbdTJVfse4DfHzTPM5rRMfKa53H5am5HqfBAG1ukgKeXzWM7g9GydgtGknhYp5QVdoUz8EpjdENxpBCd7t",
  "key19": "4PavxhMsht2gua1uFzEPTTx23zoihH2PksQdrrEEmiuFxNUqWKJ4C7HtQ5z4MbxXdj53EYNZjAqn4i7XmPgbbQ5U",
  "key20": "4E8sxeWxjBRaG6z3MMbByuP7pcZ1gJq9PGeau5i8XKKwB9EZz3eA4tSkgQSUCupZffrCAPKh1boVQdXJmhBWRTAw",
  "key21": "5Jp6mni7xbc3yqkSGeD242yQMHrtqYtGc4mwrz5ebXvmsUwGxWM1AhdnnPhmstM3VNee8FPt4RoH3Q4sLqDCaqxS",
  "key22": "2h9Z415KTDY218AqiebB9zc4ob2y3QZiwFqPa1BsDWzDX9ie744uZdVzemXwZEcAds7oKxeeUQv7Kw5u1KoHkdeT",
  "key23": "dYo4pXGSVbnQokVqurmfRFHstynxZk6apoFvfajdFeRh8NHVjBBsTCBgE5MTrYWaVR1wCBMdjC5hSasLhvSbe9M",
  "key24": "BEEGNWcLWPWupzGtZKND5YECh2RbsQfhiNJK17yVGeboGUizWmtsawpMinikZSTvh4aVbKTmjQGzTgk7AwWDbYs",
  "key25": "3amkmNDBze8diZAFJr2gE8Mg9GbYY4WEUpB3QKD15sfJcx7CWZWeYHMegZ3bovho5c2EqbdfPktCNf494ovyrA9f",
  "key26": "5QHxVh1b2N988xR3gdZoAPvLynFcqrtFHwyHBYi5JKCsQmyycfQWaXTJMS6ArJar4GRbpa5EHpZWUWsMoUiHtDRb",
  "key27": "3DchpRdpZRPh1vG2vMovLqPwtThm3eE1X14pG83URELFsGo9pJDHVXWKoWpdkGQGJBSatjsBAktQWxiubcKUZtqU",
  "key28": "4unhokPk4coUizPgoEzQqgBHLdJwVUdSAAr8mQt4pML1vNWBin7qnvQjCJExjESXx66kbthGt5QUjWHUiTRd5bSS",
  "key29": "2VuunHyqF8Yib1PZn1oPCuxHpBHLd1r1UTUg4kGNrHkPi3sBecqwrADaT3J582j86QeC3t5orYyibaD7eVsoYFsi",
  "key30": "35quPSwa4iXAnH8tykLJ4ARPNzZw2qndpQrYXRwmDp3g7j6mSVF8h4evwGdS4UZdCeyDtyGKnXGa8MchhNJQKqMX",
  "key31": "2k9rFHz12dPjHwgP6UhAstZgFPWPaWwrRbjX7ohAeZa8peXX9quxrCviW5DP9fZT2fvN8t6w6NhsmsV2HDXfogJr",
  "key32": "4jQRYrPRoB8nvoJKSy2Unt3Wc7Zxmrbf5cfcK1DwB2ZsLjAaTy9pqr9MpGZA2vTPB5nhYom6jFyM5ehwSGaRQK1J"
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
