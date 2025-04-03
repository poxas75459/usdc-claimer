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
    "2b7SkgKNP9hzE5F1K52XZWfpY3k2wppV336oyQuXJNNsoEiPNLopc4QoYipTfxP6TvSsuD2uJ1bwFsHH8EPJ2cGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQGDSGSEoztzKDQyaWDqMHhr2iBNxAGA48Qh3izn7WLgAzD8jssuRGiMpYCbRdNwqTZgBawjWgZ9jd2E5jAWagv",
  "key1": "544CcNQtx3vJdgUCZxDrPETEZkoqMjynNP4dj8wJMX26GFRD2GQjMnkU8MiB5f6JDWT4U6S1xQyaik6Bj5iVsAzB",
  "key2": "2r7bQ6RHLW5iq42mpZUXspBM6YEouEMhq1C2QgXEbkJ39SDmV2KManhitHQGoz1SnXPGfeG2hcqjMfDDgP7FLuBg",
  "key3": "45sqD2gohPB418UFNjVfpWTR6jxdphkhH1uXgR21tRnZgaXekz9ySZFu1C2mvZPSSVgJaLz5L63ZaSvK1GXDXVeP",
  "key4": "56GW72mTmz7zn6UkCatfFzM9ubgcnup7Dr3Q2rid7RbkjpbvnJjyV7VU1GvaYovfwApkyQrubdnwZVKeuHopALiL",
  "key5": "rx3u6o9hdZ1fmDk9CcRZBsdyzNgRnpQ4AzXzdCoZdYvWzhdyUjF3q5VSMYnSVwLBVwGaGz7G6pri6PKn4mvjSnz",
  "key6": "4DXYLM9drRDtxr8sgHfuQ7RrDsoJLKizQBcjDEjDMqoWZTXTp3XFbebwCbBvJJ5t392uezbEdbmyGZYZtCjNgiHg",
  "key7": "4HRvEx8wCwdF3bq5CJ6qooZivKbfuLiEDNZCRNin37uFYJG9tWqQgYdu3wJBFCjkRsezFUhBa6VLqBcpnGNezHkK",
  "key8": "3WTCjxnRDD6zgGhhDC9VYQHqxfREuo4EfEnaFR65fSe5zNABawX14HuvqNSQ5Tg81kzF3PR7pqFoSR6jBSgr5Fks",
  "key9": "3b7gq4pKCkJKQh4UKhu25hm34T8qLJGnA2F9mMAptEhzvYoxxc2BJQ77S2vfPu3AHyigu8uB8YS2KQpjFVzujQjB",
  "key10": "catmNugTjSYuh4Tkq5sveekXDUu1yihLu62RYoGssSSQX1aRFQzHyhbtD6FvPHJTKqCejgxjUAsnt1CzDToehaD",
  "key11": "26pn1muukp4amGFDnWGdtU8p3pT5Rhup78Hu1CkZtSHB89tBKvrPt9sVzoiqwCBV7hcyUbSRnGSCgadt2Hy59fKz",
  "key12": "gohu78Ua2iwzvNHJh8Rxj61rt89jzgnc8SNH8ZZ82dhvHqNbDhv89p741Y57Bf3XzFKLfe4VRo1rpSEknc7T6DC",
  "key13": "2Rgq3pbzmJnt4g21k6MZ8iiZXcsJMf5KQhZpDFswYSuV3fwPHDeV5mA4YERxfcqv8R3tagr7xEDz2KXTAeFFRYkg",
  "key14": "2jtGLN4WB9prniq2ovzoVdk1yrx1hNzedyuug5fg3XRYHxZax17674Co8kJrrSeedHL2ha4L5tLUhq9gKVZcdJuQ",
  "key15": "X9VzwP5ynQbn3TuDZtuay39KCEPoesMAgEfngvGwPvvqpxtdXRprP4iVJBXRx9kLegckvnwSJBa5GZHgSXjseok",
  "key16": "6y6YJitmKJTy9fKCpse9B3dettV4qVAaEFEChk7Hz8uLwkpLtdUgLH2maeCScuGjwsnh9gkDZSrKF3yvRYwgwTg",
  "key17": "QQvNydRLR7ko855UB5WHTqfj6voEFmYVX9nUQ3EUfVJ96v21U1xiBdPR3LdNg63XB5412nXq8QbqW51d1ZgcMCk",
  "key18": "4Uyp2NciEQekGdZCE8mKWJdpTURQrv9xhKkr1VpmzAkqSMNCurEVbsXaKoWFcRnEjyp2yhpms4dbd6U5EDDfMpoM",
  "key19": "2rB6MYP2ALssvTwcY2cQ3dDiZqHFMinA7CsuEUX1E7jyDtauiyDnZNAA2MhSwaR54KcbrdDn8A6nen7JGBpKyZbC",
  "key20": "4naL8Nj2b2SYDxz6B5JiTGLdRuKP7HLsN5mRy1H5Wf1ADT38AxYFnfFN7RS9ojwg8PMSMamoFiYCYsXNoPTckBhk",
  "key21": "4MfV9ZsFosUb4HmcUNsmHD7q8ermCd1UNbg5V16jijsjQohHRRnmQRZAqVVAcmE3ngN8PEVUcM5VCySkg4ZMDbtQ",
  "key22": "2Khgbymfe4ZnR43zFU4bXVntWGYG8TxaPjgLE1PDqAM9SWQP8X6wgTkZar4N51HampWP6U9kQkFUHnva7UY8XTkt",
  "key23": "5dPLsNSLwwLXpkAU8uVKBfEkbde6REXcFcti3D7nhHpGQ6qsQxKtP7DgDwrRN7ZCj9dtJsJpiCAXMDvGnpL9PqUk",
  "key24": "H6TKgpf4UeeKEZ5PLnrmDPM3Kp7GpMbFeAYBF3zL36Xif1nSFSUvugdSnJKjtMwPhAVa5JHdSSw6tRdEudBv4Qj",
  "key25": "2Ttq5i6DYHXgwEnkwdzxBjNkyAZCTu1b9YqaSby9eEKnYJhqhVFwF7rKsTe5FbgzpnBgXp8j2Y8sJuAhuaBd3qyX",
  "key26": "3dZBpKVGJDBeZzpQpV2uY3yvehAZvu7BRREnHFk3Ep7YaYghowEkTAvditN24yuF1sNYFv53hgLHLK7dA5Mgc4vf",
  "key27": "4aXDQzPrzTHnjcKMfqBBWdC2mdpobXYEXiq6U79jkLbepZDuoRiPbtAWd7sMJb49TYHEhnZWuG1RGdfeqkHoXRPV",
  "key28": "3rouMHw6wufrBGsRnnWu7qqCU51JGv4rKP13zWBkdkdyn12c2MXPyAJZQmSZqpAVrJL84ybUbY8NVWFU1H4pa15Z",
  "key29": "2z4W4RsGh1AtvaKUimATZvUVKcYzNS7X3P8bPgjfsuDjoqJHkdHLUAmPWq95yaXAgeLdx8iWAzwssFAzNiX1bRoN",
  "key30": "4fujtPVo67jKtEe3w4hXP4fvLrnFnjcXjAkQPkpuLiZ9JntHa8ubh5VsfCzkJKbCv3jrWMBRHcpqpJFrYuiCMpTJ",
  "key31": "5jVvREpoGjyxFv7nbZV5rZt9V7sWTJiP54Lp49Ddr3N3hRjxZ4nwh8YsMABPq26toh5CddCYq4BEHy6znJQKGjCW",
  "key32": "5fXQvgC1MKupKKwf6XZXjynLx7uE28cKMfoMZBncNebE2YsRcwYni7oJPFmaP8TAkH2tV1opHkWT4ZK7TLrip8SG"
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
