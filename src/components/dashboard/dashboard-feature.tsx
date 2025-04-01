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
    "5uRUJCfsSe65gJvh9XR56C9xq1orxGu1ZDpfCQH9Rytd8ten44ck7a8TSHRRTTbG5NfwPSKRzyPirAeaNuhiU6sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eb4iJFLZcszCDspVBJuZoioU5hmhg9N6ThGfzTjRVTyJAcZbusQELkxyV12bA5P19yLLwj3xtgu5zBgb8ToaZbL",
  "key1": "3gbMM39dvVgihpuJQLMGfm7c3xYJ7hgpEk71nCqdAXQWtTK7dHXqhXswzKPyi1uSkg3PoPaZ9He2fEq3tVxu7fxg",
  "key2": "uq2kiN1qrm2Uq6ndARv7F4H68BEaDyse36mmNF5iAAvtXWeaGNB5HdrV1QDEhMKchrYuLGWXiQPR5PfVnhuWobH",
  "key3": "ax46FEDFQtainae3J3Yd6tyLeYNMTRRc2SAcaDbyQeWpbVEQrYn28GS5iryRc4eVMWZBWtHS38gXJpBkY9hpsXg",
  "key4": "5FRoZys2dd6MM8wnVYeizXjDBs4tJC7JX59zeU7i6yww9x1wUNZSbpXzwXu4qevoUXuihRR6GsWo1qC9zyojgBeJ",
  "key5": "JAtb97PG2pCGioQaMvYRTgxBJEEU5afRc1PRM3yL8rY4p14PMH9xcxR432wUfjLyVFTQi4xoZnHXud8teKBe8Fv",
  "key6": "56eaKeGMuT3BBEebEDzGRC8xTM1WzVH8QrRzUYR6i2T1XmuzNxZLGPrpXPDy5GohtwZPfMy55DmqtL7St7Zj7iFq",
  "key7": "3AGh84T3gUG4AaVgVpbuvUfqudzmqr2vhfmb8uHnubUBdRDccXbno8c8d8wLfuX7ZCLh5T5uwWoyVdkE8a6P4NDA",
  "key8": "f5VTga8QiP6RuG4b9knUCDzRqHAgh3c8kQGChaAQSGP92Z8Bs7Mx8timfgoUJhXaZbHoozErbu4DvPwZ4fPC4NJ",
  "key9": "5wVoSdJobZGNPmFqvMbyCSBowNBvdudBbFaHMcXyJjZxmf7aByUzQMqSuTNmAsY7iBnTqswZf2eEWgGJeTfFhQJ9",
  "key10": "4kQRj416LCC1oJbfCt6PXTQZLqVzK3D1p5DjJmLMJNRAESDYysVFzwnzi7mVeRSbc9VVk1AvA5bHge55pA7r8AH2",
  "key11": "AZbuBKPGeDNL4rdcJYTEJ6U4GU6rfTu3xAY9dybZ29atkUFpiqhUs2cxYHSow7g59YdAsC8rPYWNMZFu9o568E1",
  "key12": "4HudVeAoZgWga2kM9aeq5BGVTpXG9PWZv9TMgEZbxBMuxFy5PiaqFjWgrr1FFFt7rbCzStzg4Cy8HDf1R4y8z7ir",
  "key13": "48jvbjnhggDtYzJRjkSA7knrmCffirAcBsuQ47JeYKQmQTTagDaYKET5NwB7jU8rojtxTZ3gA2cCkvuiYy8MjNBx",
  "key14": "toeJFgVYHJviicgizaG7akAsr8TCsDe18Mcf6GAGEbB4BQQuZSrWBeGGCXb11wyk1ZzKJkrJKM3swDLwxFpmxz7",
  "key15": "2WAuFXZxdUbJVqeKsQ7MDzRELkyxecr5zcG8UcZrAebWWW3T7ptQGixmfba1y8fEEPoUWHBMygJ7uLQmtP8WbZH9",
  "key16": "335NPxmDQECjXen5r3ECTkyY4VprcAC7ECpZKQx8QxqBEyXktnWmJUj9t7E57VqHZB37SCvz5rLviN6udf4GZ7Bt",
  "key17": "4pdWFeDdYtESPkPSokZ1Yi81pk8FwjEzvMCqqoNbJ8VxDrj2jcc5jhSvKCRWoTDaHKe22aEyRPvaqpx8Q7Xft1mx",
  "key18": "5MurGefrUEwL3kBFHUhNQnHF2tgb7aCMgjSTDcUJri6BDihhZWCjPqzLBop96hXkTs31ucPFXTkVSx2cdAXtRpR2",
  "key19": "2F4XAtcBCurLbRskxjfBoMNpxhr26XtVuns8mNK5CDUNHqqorMbBQsstcZVAdtPEujXZuAeux2TTheWfxBupnLuy",
  "key20": "3NF49MRrfcrFQU1pkQVA93cZHGfnJkH2nxs4o46z7czR5sQhJhehtMqLUXEGD9yZ3ATiZzEQR9GtGzoLTSgHc1wR",
  "key21": "3cMQXufB4KPXX6ejyB84ajoJQZwgmCZG1PS4w6EortoqE6J45Y9y81CYxQVRAWuqvKArNB6d12jpQVwNTT918AA1",
  "key22": "3imx8xPk2Z6X9RkF3Bo9NNvY67eygfHsuDLUSnTkW9FkXeGotPbK9VmYjuZBnPmgbUPQtqCufosHbSDbkmmb44x8",
  "key23": "3QPFRNuwqvNrKMfTMbdMLh9iie69HvWgetUoQY9JntQJiaaPyQDWwQT33RXN8yLxDvcdyEsrRRqEiPAYHyA7wspf",
  "key24": "5ehj8xJKrVAHDWY5YYMBBNri7F3RdXghNauh9pZ99oHmMpDYaNox3nu9VcPvJ4YN7iBDks1fnPUKNAnb8wdL4QE",
  "key25": "2WVLq3cbnrMkosPtj5oDm7nvrAPvAckMpALiHtby3rZSu33Qh4mnpgosbCx1FGnPyM1bxP7dGtf1a4tfiKNENeaz",
  "key26": "Ca5Ex1wNhKVCde34CXEoJkxwZPkLWjXkQPQBPko4xYj2Nfe4rqDmVyD42BePVM7rs8Ti6v354Mzezv7M7uGufUJ",
  "key27": "jBSaZNCRvd8JQ3qzuEYLqGHV43TcmqTo7dBWQWwQUhqPMBqW8S4eebh5FFoGawohdB5rnbThVSuAaeU8V39LdDb",
  "key28": "5K5zLugDajVjGgmx5NxPzccTt23WZxKZZwDpt9sW5AYWTqE1PgQwsAvpNY8qJoCWr185VSdAfu5dZzEebFbSYabz",
  "key29": "5ps2iW2hpDbgUShPg2PHUe6zzyXcX9JJZaNxrRPoifup1AthkGxqxiTdmTY77FKnjDZTRBXWvjT7zFuWtqAmefwM",
  "key30": "3HyKGge1E4tEQhe5dzgZoSEugWn15iV2Ge2P1NqD9C4wMozNPHroGRmTEaaPh1BiZY9q8UJyHBzz9zT1bT1cjDXd",
  "key31": "3MA7uGnfCN78kvkoZATH2QvyxSSSznqY9uKd89hkCTRjMnNppd4ZcQBtmH3ypP6Exj3hSTwt4eZE5jjBprynN4Av",
  "key32": "2weniynKDxCH96yaVGdRSzWUB61DuSERQFfAmkFu3qKWinRq6HJxMBs39ZJDmGUrAfHp3h39RGpU24huDt7k5QwC",
  "key33": "56UDPTnEJ7bEK4F5HSuPkizuq3NH2qqheZvHnXgZtj5BsRdYeF3fNBVao9TBDad5QDGUW6BiJNgAjZqULGvBpRrP",
  "key34": "5Nj96FqtKncm3ZA1JPZQe7bpxsV9QnrZ16nJPAMHmyr4DMNRrTUwf2LUYXVXPoDogb9SVazUCt2GXXonSrWosfWG",
  "key35": "2f1RAnc96E6tzr7WKUxPtiTRjQsX92odh6gqQgjt1Em9NsJqjNFS69AqquJZxP4q6ugUXWDVEnCujhW2k9dXhwc2",
  "key36": "2D7JZXsq51u6Fpn8gAfNibSmqK89YLrqjdDgfrRgsUgXD52NMFyH8kDZpQWdXQk5uo5AmdyxFN8vS1jWXEC9hW26",
  "key37": "4xPQgKaumd8vrucEK3KVcyc4fNcAjnAyFFYQHssgMNviwNvAufCAdeCm6jMfiK37jX3C6hwisUN7KcV2NzgP4ENu",
  "key38": "4SRnzTZWjPi1nTG7t59s8mJJkdL4BUKpfX2XRtrd9BFTyDZL2oMee7kgTMYcdNpaEJVLUatgTn7fd2pvVx7FY5d",
  "key39": "4nqvSRhcNR5Y3597sj9U7RzVvkKC8wDwqYZcUvFogsQzKfv6bHWPKn4EAqASUhuyBws91tmQoDyS2pKjyCNBwtiu",
  "key40": "3NbYciCYdorXjeLsfwjEmGE38KnDbKNHW6LPshYfGy35E67NXAxdq7CaG4b5U9JHrKDFVhCv6K5vnWx3GjGeAUUx",
  "key41": "4VFYBkFGJMWMKPa712T1uZGocnWhKSHLGrifgqY6BLHUVKKRdUL5qGhPdcWXUzxMi5d4ESFW2cchdZKzxN4aU1Y9",
  "key42": "3Sa59ZWkw1SkCbyvCs3qGh6CcDbmmXkiU97DpAhnuYEjGhRRgW5SrYP7cz5Riuf9ZR5yAt45SMVW2JR8hm1LZDCC",
  "key43": "2Dc6CihCjzMzkBgzBBHf8x2Vhm5Y2zT7Gr51y96hpTzZpWcBiZKpHCE3BphMdyBYdeiAN6jRt1AcNvtsMh6jKpyW"
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
