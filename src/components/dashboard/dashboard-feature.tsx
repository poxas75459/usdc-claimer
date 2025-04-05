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
    "2bo12Z7YrZoLZsWEgxREY33Gyz8dvsWih2QdEneEUYeqX6fWcM3AHkAJAf8aYJu26PQ9NcbdNRCMm7XqWq8gsgj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juNAGYmCgEEefxGj98SnJGGh3B4r3F1Grj5yDUT4MJzU5rdei3D8pTQSRFxDYt5KEpWurKGJbEBnJSL655yaauZ",
  "key1": "nC7tEQu5sXvA1s9Dx7BcN45go5KMh9uP51VYPmBQ2CNr6Gj9rSkNPiv6zx5Txa5rAXRSpuZt9S6E4bX88DSGwPf",
  "key2": "4sHJyVPzWxmexcBghSBciuKAkxJLGUbH7NbCfbsr4gydbimQv4DttjuSaiYo3sBZB44d2towfgFeApKFLnw7g3AC",
  "key3": "4DYXT8R8JARWtaWvJFpuqVXM8Hym2bZBGsM68wBwuAim9tC1CFYAcP4o3kZanAunwkmsF5DDqRkz6oBF3L6j9Lfa",
  "key4": "3KgLTJSy859FBaKMZhbC7t3PYy2ZqV5difn4uaP7BX8KpYVpaJFv4sEPyQFx7R8VZKXRd1rt6i7S8ctzCWBK67DS",
  "key5": "aGcGVHjqaVvKU4vdkXZmeo1B4wn7aRKvRnANeQKic4ogDXXDwAXNB9CNWo437cBLwBrAtqqi5BEAvbkchzRw9ap",
  "key6": "5ZAV4wRxWSASDwJg44Tpe8XRi4NEtZsKkeRcaSyt6YTo51ycmzSzmNu1PSbosWUspq8sWhSoTT2u3qenR2Jb68cw",
  "key7": "e6RX4a7JnpmPXCFzDoLuHwgpeUdMxuNRHAo1gqbGPn6oD6c82Hc8jyB6yPnKb5f7c3dbirpXTWeBWqwpb6x1e5Y",
  "key8": "Y9NGphezwxmadB4hQxBJFMbECrq8V8yWdQzcAPWsSdv1xQVjEyGHh1XXGQK4o5RZDH1ZuV5uoAiYffokB3VCugb",
  "key9": "4AeEtbSGLaoxBkkQswEozo2RG4UaScKjtjWBhEY9BNyRrLDFekS27dsajHDmb9GtgcLEJWCECfV2H4yNNrXz2gco",
  "key10": "4SjBP5542BKqW6hi7AvFaN4BuNr2hDXAnhJtA1ewwNDsHpxkcgX5VRHMCxpVQLc3t8yyNMMd57Yc1MYZFsBHAyrL",
  "key11": "2VZc2fdEkWRHCQu1NAyBNi2Jt5iMdupW5V9GuZE8pQLCtKxW31BsFcvgFf5hnAbmedKLA6cCqzZsbvjvZQ9BJbyo",
  "key12": "RepxirfCHDBEJPAzz78MKVdQz515avitRBgWsFszsPBCivJ3NEZoVKDjzmJoXWoXNwwYTe5HckZjsMzEUBq9vVX",
  "key13": "3FwgEVBQBbzFoq9W9UVqkU8PwPtmtoA2qPK69Vg5PEa5f7vdAHZ8qry75TLWmYNddiv7tZSXW2NNfU8qLVoSD6CC",
  "key14": "2JjAnrrzHN5z6z1e1h3wShk4xkTesUNnfDNb33ox6RqtVqTUe6yYgpxSPe5uRXmdChgfoRZLbMYZErKSRVgpw8Pp",
  "key15": "3NXobbFXMaEhxhdug5dvZG5Vs1A7Dhr3Y21Jqa3Kjm4MzofuyZoVZiM1ZkKC4AiPuB2LUgDcpSJVmu5s4RkyDqKa",
  "key16": "4o6CARFq8FarDoUM9mEfPoYwRin5DaqMAg2oiT39wtQCBEMtmeSV6B1PX1mgr6Ya8Gnp9w7JR6RGUYvXehm8Y9nV",
  "key17": "QrWHvdpCZufahZ5mggC2M3atYaTzRmjCnZHCUvB65AncPDkf69QoVBfGHYJzhnHyyKVxdN2Xb3AeQ5CUh359qTA",
  "key18": "5KZXYfwNKaySuPwuNvJea14SApkGDnxfqTqDp8uWW3TnkHjkzeXFFbsmWmDWSipS3MayB96GXntk53VAt5Q6zgyV",
  "key19": "5FriW24tivKrFWsJmYAaBYcyRqS58poPevBsruLQ1c4ZVYUeFZ8jcCd4bN7VUKBEADofdYnp1KA2enczxwzroD4t",
  "key20": "5dVxJy2zoXabpatf174pyNRuSb4sxAWTBeB2cwRutiacgM8Wg43SfGACjbQBec9L9SE93scvbKZJXpJAVapqxptL",
  "key21": "XomNrxcFGCuA88BXg7XfPURCssP8YTuEqF24sEHDEGSNKSvYTB3jtF7zicNsbvhiWkddYcBB4CKzCV69Gqc2cjx",
  "key22": "5cwb3piusJxL64UmmT6ywhQ8YBZMdLHMe5DYqPeNhPPdxkbeXWwwt7qVXZsz6p2TUJoRUTBiYxqe84rs3ir8JTfk",
  "key23": "4qaHjaGxdjiRXr9DcJZbfAAkGf93qXYKuz3MCKePKUvxCyrta9He5mVYqHMUxnF765JuAfnLC4mK3yN2h7gkxkZi",
  "key24": "2CQtraVBHM7JRSpzChSQnfKr2iunMX3S8ENuSHTjbrxZRmKJSStqSQqudtzWM4p8GtJ2PtCQQC4BoL97VPy2Q1Fc",
  "key25": "33Gh9gniPELr31dS1bSN49opcKsfxWBg318TvdrQbpTWietukyx3yjirdZmUJFFKLfj5jaV278YVgR1ywCmMerxH",
  "key26": "4Bphzi8mMPTCYJAoXiZnX6XkZu55PfrZCo9ongPv4PhvYyEBS3G9hGgXFLPiWcKPZgpmbhzD2nPm9Kqv3bFNhb8Z",
  "key27": "2qvedhEacFPGa6izaJgYkYuvYDwoMNpLuRAQiEiLtH4YHCZNwp1XcbzvXVeyySnrU13gK75WejCiBERmRrSVrAkW",
  "key28": "4j39BrDDtLzVWAaPBU9X14isgfqhJNvUywPHyFXWrSRGg1tsUZSpNn8oYTUZrn2znhg9AH8n8ffa3tUZAhLSkYjY",
  "key29": "26SJ1Ssh7mj5Ccbw2QfS6bufikh1F24ELjXZogevNe5JNFtiV5kGg8uQogWcVgpgNNdA58CBhXM3z2Btbus7HJ11",
  "key30": "5r46hypezGDuVeQFvDUuPTpJDwZhTw3NTHE4T9tDnmmP7y1oFws4CTw25Pygxs64deP8eKBviDcTfBHtdiQSgRJA",
  "key31": "Q7v2HQXzo5ozvu5WK8zN25SjVtg1odmd8VV8Vfn1Df7iw2c1sTDyHmiDmd6Rfo7C5X8CzeqNZBrHt4MaYrs5EJS",
  "key32": "26nZffyM7TYPyvShRHHPf2S2TLwA2HKShPpWLXp7rzZ6u2E4CSEF3ZwTNwngJmYUHXJgSSBLrdKCh9vNhq2fgsWu",
  "key33": "3TVajpftRGpe8eu1ZkqTht8BuREeR27iSwUGfBf4t658GowUBTjioqPEhqwgeLB2ckZtvHjvALRwgVyUyrVRLrF3",
  "key34": "3sPueRCVXd7dcRdCmoCYXyNoeXuw7BKZEfAqFbsdGR5DtGiAZCDZQRqdvASYda7tn9tR33XXqZEpaSGmq3qv8Hm2",
  "key35": "3cyCSJnqmLVqdoBZiYRtqkjdZZPjBz3QCyq4ApGcwQR2u4TdzphPMzc6r2n5MDmsGRMfPRhhru13vfit4r26GGTc"
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
