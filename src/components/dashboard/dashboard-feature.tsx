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
    "CV13JvyqnDWsdNVDnzGHd7PEwa4UvdUAvuAqa7oY639d1EXx7iahtNdgjsLzGgQBBRHYs2rmuK6bYX4Hrq3CPX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "461gXd7cinjw6wY1JLVENvv3ok9Az7C4KifSXZz4SaSWsXQKryF7vBZa9ApYQ68N3umgHCaF3sNYzaEHVMBU4vfu",
  "key1": "65A7fbiU7XRbua62rE1FnxSM3VyzYC8X4dwUkb45EzcHH4MeqREVXKHgLFtkjt8wEVjExEPhz3wd6UX8keWDCF57",
  "key2": "2c6k5efmDuTdNeyCdShskomPM282BYUWsEZPAEGvXLZMbEMRmRhURVBAXQW1KqufHsmUYXCVaAYWxMMhQkJMrFsx",
  "key3": "xsMM71qtqiQ1ZcvDM8kDeU9AYNPmCLq6dKVbVME8rVuJwtCJpFhaxuFW5RqyERR2XNxmtJDkaEUEWJtXPamQKf2",
  "key4": "2yVVdm4K6HN8gvJZFfGvTDgwcJ4F4zBYJmLntbVTsyFbw2vHRxwvQ5BUQkbx8vDJk5SoyPoavfdLSDLDZfPK4fpj",
  "key5": "2KxFwt4sxTA16YbbpsyXPLzd89srRT5GXAzSjWG4B4JPVF12HbnKYtmbmmQbz4niFEosVYQmTkCc589wpyHrtHXn",
  "key6": "4ffRfhZ5DvBdjqdJ91cRB2d7C8AUzjFerqKaYQihVCk6Tx3nqeRZFpRQFfDdYa6rJZ3kFUXvffmsxfJVJyTiZ84e",
  "key7": "4kEbgyrvTupW8ckiJkcAx4iJy3JrZALZrE3vNgk9fSGpiLLX2tQkmweSGehTNMN4ijffSoT6jZAuFZqLWHSirgb4",
  "key8": "4ESahkzQtfxjA4Gd933NQQqAmAuCwZNdtFm1GGMUmnAjJG5h9nXo5zK1RmgVHNVcqAPzzvUQEYEoS63iyttWd8r6",
  "key9": "3FWGGTQGkgpn6rALHAxtHiEbfuc7DPnq5tEz11JDkjvmZ3vbGKaZ1JoN7xBD38hA2pLJjjEofYEADnQZHFj3rzkr",
  "key10": "4fHpvPxLuva2amZcXvpW3TRz9Zxe8s1QFGHTQ9EfsjtAJvhVEDTCSmvmpKVCUhJv7HNofV2Hj7QLrPiJ8UjW7i1U",
  "key11": "Z3hHW39HrTfVnS7ubS35po6gtLmaSv9vGoDqPFPWuajHDc89PzmG48JTtf7CdfHYn37FiaDBinE23PnTVPa251M",
  "key12": "55aHtj8kxiSHE6SpwWZ9GJDxhn2fyk52CGmJ8B77y57Nxb2KAeM3J7QXwUaqyurPBaBGCxbJaJdFjcQu2Z2mu6PE",
  "key13": "2iuBAbn7SkcHDpsvx33MaeY4HSq6QLKfn5BZdDVYeE4EYas5zB3ARe9Y4BiN9fbhvcDaCjHPfEg5K5Gke3iorb4P",
  "key14": "zEgYyz8fdhVxZroQZ799JTcngynw6y3CrH3kPSBms6RNuuvH1y8goh2PY1b8em5QHhGhPovX2gQ5xEFPbsofYr1",
  "key15": "2dLaJ919gVfWoZAzhWbkyMpQ7UWPDDA86TNdxQBLzSWDqwKpGbkaXVaWk9Hia7cSYZhNrAiyXLm8LwPJsh3rBvEk",
  "key16": "5VM9wCnRJ5bwrHuemtZPkcD7Nu9tYc6cht28HCZwuBn7MoUzEJJn3cWx73JRjkybX3yKgstVftXgqjar9jNzxw1g",
  "key17": "3E89FVWUc2abWZq5MwGDCUFwo3P6XYUphBS2gEbomZmvtWX2c1rniSXiVSUzvByPJ1tDkfgzJM7ad197CukB3da",
  "key18": "3h8sSYKma7pEgncoUFpY8zRZGc6wXQ85pzeWKg86Qoxb1vyANhpCivwN4gykj5BNUgureYxJt6zxpChXq6zQxboJ",
  "key19": "2s3zwaE4XUucWgFuSJC5VMjEFgag1vfH7nJ5293bg9CzbBJ7pFjvVan1kkGCD2Ut4KeakigoX5KJyRTrDzvafCNf",
  "key20": "4BZvkRs2fGQvB7V6tAoRDFVibxSi5sHzPvMN4tE5UtPJQF8FxqK1GHuNCLhQBFGMbijGEpWZrNSqgpD41gwQ7jD2",
  "key21": "3Z6sDWG7ZeSSxc4VBBnpUVJcDwMttSuSnY5Mrs1WbfXBNRdCTPAZFf5qvP1MWhfEfm6prGKfpF561Zp1D1tFcmGz",
  "key22": "3bewg3k8q5MQCFLqnftajG6XSiydnA3iwDG9A2s8cg41PhYQY5KpxJruz9E8zxG3Pa8pamnroBTmmzKSma6KjTzJ",
  "key23": "5LLpcm9mCQCesc7fgNqpWZokZrMzenehBc6Qxqg738XWK6wTqGX9Lw9BLdFRynMXX9xxfCSyFSrXAUN8A9gaayXc",
  "key24": "2grTUvMVTrCVJd6JbGiRh8VwGJb6MonGPXmtosSoRRrboHsHwh8ZNLZRjKyAHu1MLcn4DzKALndR32nTNoLJktF9",
  "key25": "qRUPZsgsnJDEKSLp9UFuA43NHJJyoVcKyE4Vxr4JXsJSMEuhzKrfRH6E6FNr9Bx1NG3Pdv7uMFKucN3zNsfStpo",
  "key26": "21XMGz8PzAJrNCy7DNsqgA1AjsxxWPfosAxvzQEg6gC3D8gPnAwB4ma8PitVzG7CmwaDwrSQtzdwpAssLaQ9gzow",
  "key27": "57iu7xHgJfaLUwZrM3qs2TkK9FC7nGq7XSyVZknzRUXCKy4iRVWGMjyGNmDbtaGpHdtpNMZFNSewYzRga6ysGXus",
  "key28": "4viT6wLrKyGTmzcRtTzbuSkm46B9pRGr67TVvAooctRjrcTPvHZzSL4sCh4fVCUkkTcTwsU5Kpdqt6HMQFdU9LBe",
  "key29": "ATXyuvfGHVQvzhZKU7sXmeZxpHqZ5dRMtZ3e1bKryQF7iZc7YvJ5QpdTV1nXHKCXZEMfSd8m9WUjEJaaphcEhc8",
  "key30": "27Zm61ERaeWvMxMW3XyJ7Dh4qaiq8368MGxP49uqR7pqY2VVvmLADbfx6arQwouyyZ9pp8SDXoLb3srVTyXRScDY",
  "key31": "2FAVyno8aPDhxY1FD4ok8NXaxTQNSPiSBWDVaCosvCnVZN5Qy4zf73ogPmBZa27zaP7v6sXJHoskzRE8yEy9bXNe",
  "key32": "47KsgoWxPzByE7DzMwhHqS7tfKnfkHVEojZ8zMBDPtB8qziCuEzQH5pzzCFenTf2Mp7br1rAMm7U2tkV6V6pmjCp",
  "key33": "2s12YxoNWrbWoCPt9ApT1Z5Coa4QRs8Heg2APymwRG7A7ur5NKPt1gt9qfJMWGi5DRtM8E5h83uLfmZxxoYA8Sd",
  "key34": "2ZjjgbJRFDPTmCL9ehjpgotNERtkhHVo48btsDEYEkm1Nyuej1eV55zjrai5scyYk1miVnNijfWebrYaC6TSeXfJ",
  "key35": "4jQNwwn6GpjTyYfFcNh5kXGFewp66g9F3UxuUDGxmyiMA8zb5Ps6hsJjgFgUuwoTaHbTGoC4WzJXk4EYgz7bp6Bi",
  "key36": "H6cBn284SpWYsaBPEiXyH7oUA2kD8DU2HG4bBv7EYpo7cXXLXwG6PM4yc4UGpSW5bHXd1XyFJPhrpaaV98NGXCu",
  "key37": "3jqbSFSCfpjYjZcNyx8R5phWz82tU1qkNwo6ffDwxPpX8Md9Ew5sRfUdo2Eb7KHBhE1PbtFS3FF7Jxadu9wgw2of",
  "key38": "2HZh47rbfpfsJYfw6ALoVkHthbjR3JyUue5HWwbmYH2GgsTaxZYxDR1GKsCaFKJuCeGsEjgiX9imiW5jqswti1re",
  "key39": "4LgPRyTRYMczvUuMBexRC2R75Wc8QbjUkx5SokGGLo4c7udAnymewf18wDokwJmK5G4RWMmCSwrW8qCqbUL3GrHP",
  "key40": "4No9mbaFaucUq7ewB9HJL7wrVpUJnsWc81qXRndMAR2Hn8u6TdpEifjXxvkD3D2WQoBqoLSH5PeozHozNBN8iCxN"
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
