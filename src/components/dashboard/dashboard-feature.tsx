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
    "31ynXWAdFBwKNpSBEatVQNpcMxB7H5Lt3U5wv3NbvjyHEfyEH37VecbrQzQW35L12jLgciGgykV2ZTnnoCw5v5yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DuKq5Aio7CKFwrLBec71q27nX7pePUnM9zzaWRuqNAgBbMDnekMYSGd8fzmmQNFoFo2ApDGeHxRpYKRBg3xa6xY",
  "key1": "5drQvmWzpDRGk89WczR1jofC1ACstDNPG35QgB3B6fAF8Cav4qv45LfhnPZaeUUB26CXuoenWEGbYfcCnUjhCLP",
  "key2": "q47QTFGQay4FUo3C1Jr5APJHSUeNYxL57K5yBMjmpVDxqPMwEjFMemDuyB2rGJME5oYRyu4T8SBmRKWUxhuuXWP",
  "key3": "5HqpdJh8zBWpU8KrCKJMYju5T7f1phicKgt2YRPgTd749Azzq6Me7irEAu5Rxacc8qTLtRBFw2DAjzwRENo7wRJe",
  "key4": "4rx4hs12PX3MF12LLSHaesvDANo2dxUB1ZVDkL5HvspNkAQ1wjfV6by1darFK9gq1zNuncocuWa86QE5Fud712Z9",
  "key5": "4ZR7hopeq3bDFAGjg2biUawUSMtq4vkwq9g3X23UvkJNaREEvhGEJk8PjhMFG5o5FVqAfeXcCm3GgAYtWhq7SdJe",
  "key6": "63GqVj6yQ5iNkpLHCBt7gibUjyXe2kuQPC9wLqQFWzvUg8aZjZrCDxEH72jpWTFP3J5GmcFxX4Wp7U917DEMNows",
  "key7": "mtFbjvhHJu6D6NSj3WeiaAuQZPyhpFcW5VH2fkEyZzW3p7RZmMwujzSr3d5yuHFAr1vuNEaCAQfQyd8jKRN3A4C",
  "key8": "5LUHR4qvmKMpzdhFJ7LLxYdmL4LNNMxeSFoYk4HqPcLuLCgrg68Mo8gFJvN5UQUn6qE2DCTsVzBWiTQm5wyJ2LL",
  "key9": "63c3CBdL74jrSTko3KdkiyguSLc3TkDNUgtzHwmdSmREMkYsTKAuKD8JaW4kWGrbH5kYF1v7au3ZhKkajBVrSwp8",
  "key10": "jRieLWY1c4YfqAH4JCYsx3AdH4cCNBxJKgustPWRd1bXH8BsmVg6G3uKkawASj826uriJDR8up3XQ3Tx9B4YCoe",
  "key11": "217kGhhajaFpNJJtkEgdmwgurwoTPiWRcGXPc84Dxyar53MRPNntMXGpsN8UCyGLj33QJQY1x5fYMq6i7ZSewPHr",
  "key12": "4f24WwtJSD1fqav7sHsPeiLecXfeQM2fUxav333z1KENJuho9VrCh4JpVHXhpdr3zgPUUykN1VVfZ8RZ5fi96U2S",
  "key13": "8ikNq87KthGGCNKTAcNz7NtphFohCsx8MxZgWCGtwAfVsoFEH9NSuhUDJNQYJhBgafc16MGNfCu6e7Tv6LZXKWt",
  "key14": "61oRWuW26rSGEWUG6LnzzwBuGzBYVQh4qSfThSARL7k15c4EpAHQM3ZrCMzFLCtkWUFJX7izHs8TQS6RLMUMUnnH",
  "key15": "5VnMQNaEsaMa2Wi4PPhP8Nym8CApVXvmv1MQmaLUhpzVupJHBqCdgjKVYoozf9BRauc8xh2hRmH8VjoWpkucgKKd",
  "key16": "59ZpkWouudaxUKCcKaaSSKtce2EanYK7Ss8WWNab7WwoQYY4zDhVewrNirnS3uA6n7NWFp7Gt6WzscuAktJLvKdT",
  "key17": "TCqGchG2Xk9DHu2zCENusK67tE8H11GKknBciDqzzefxuiq447cPY2eV7R2nsKUGNsNZ27RbrEdVQ4GPMBtg2Ci",
  "key18": "5NqyHcNkQCHUb24qZn4inJi3i5uFpStz59TH82uLoUL5MQ35kT77i7gTRkoXojCxEJTxz1n6p6p8zHdsJBz57EAj",
  "key19": "3UorZgcDADFYfHj7kcASVsg6tZDiC9QKMCQKWgUMT5YQWB9mcVwvMeh5mXLGD8Xy7VYbaYVurhvMpDWPj9qh3Sab",
  "key20": "3wkZB3Ua6KHGm5wYHrhwgnEWSYLp5rVj3BTcFgsBkZrrzACNBuxCFc384Abb3KJVCEazCpd8NTKHv1k3EA7wEjB1",
  "key21": "ZJBMF53TAo3jNUSUJTdz8Tbwy4Szi35WHy2C2xUS476BY1P28beEuwMpCmHW7Vex8Jm5Zab14LWUE5xZPQGiZUD",
  "key22": "3iEe19msmi3MFEPojzcE1Lbf48iiBmewFbJvf6M9UM2SQZaM9vZnK7osVdrRZrQr6E7qYHUJyxWPqStrXbTWtvUN",
  "key23": "2uhQyfRanUb1MrNFvPgQBSnuuGHK3zgGhMvJp1zr7tF1i71Y4uTqASGJinedNCeecxP1RgBaG2wtcTY6kLSwzxZ3",
  "key24": "4BgGRoTFXGLZj4WbNK9U8Df1uinyXprNJ4fDzowp4dPvBnZ4kXCanEaHNWSeoq6nmd6EsrXzCW95ZfwUXeKZruyN",
  "key25": "5EApsqe68DaCSxCygWP2U5HWSDCWog9h3PD4WrUEzogfNDyk3v6pwbRx7EWekgAhY3YyhA8HqHt8nndxK17ZpEKU",
  "key26": "5T7FZPqUc7aXmE6DKFQSP4NR7NfxLA9ex3eqxHYbcyCtqh7V9HU6THbVHxNKqcSkPmMBWwRhHLi8bsD58JA9faec",
  "key27": "Pk6EGqFZVQPnYSfNqvoHugktUXb9v6Nzvq3K21xoYtsYedhYChtYCtFi35wgUZWKuwpCHTKGUD1H5QF2b8zr583",
  "key28": "6733tRHctb9wTeasiyqMLyaf4gMjZsk11Vf1NNemuk6musd99A74LiBk6n7r5BFmJBgMBRhFmPXRQeeaha1TmbDu",
  "key29": "5S5wRB1RxyxpmURzd5V2fVPqhHj5jwh5gQzWcnQJ6MgtUgthJ6gvH782wM25F5vBpWCJTL9Z2xj8cR2xwNX7FHv2",
  "key30": "54qR5BHZ5jaVCzpcpTY8ytSPBw2juXSubHqqB84PvCeURh6a2xnKsRy19HiKTBHvrovgRBJhpQZfC38WmSipuNrP",
  "key31": "51xbA9C8SwtwytdMWTDHXHNEWgbhKbgAu6dsfhjVcGMdzLG9LCXjbxbGR4QJ5cx1fXa9qsciF7iQrJgQDmeBuxeP",
  "key32": "4qKTbjXD4Vc7dqtYoehVt8ovJWZAZpfBmeMbSdpZrw4uoNBC6Tt1QcAywXzaGf2QVnUMyxDgdUKdV93qirdVma6v",
  "key33": "4jkEuXssSEaoMaefa4Q4zqxaNb7fw2t5ummkGJcUpDLRUDvYVC3vZgokrDRMecfZjwMXf6xzDEd5nsFmQ4jpvz3p",
  "key34": "2NkUpBwpLv49QrK8AMQWeh4k9DjRgQBLpm6phX55RkuGKbtdVSXz76EtLvNgqSUdfBQiazB2PTw9BMjbkzqRqYo1",
  "key35": "5WD1CNXRGCpCgWnwTWJ7RxJyea1nysBBqqSzB2o3ov6NwjWHhhDmkvjoCCHEi7H9zYS8yGvs4bQTEEZtJr3CAw6y",
  "key36": "4uJWHYkqmPF8tXsuzY1e7gbU5TwfQNBuDfx8rCoDtDHRHQvWzMJhNAbvkgVkp2LTwZPvwUpgSPjjQc5ykdEzUF95",
  "key37": "48Y4NHAgSYveAFWwVTafVem8XJ96Cw6mynz8dNBPxGARiFXCArw2q2UAJty66QUNT5aNZahYBndBCGjkDa5hR6Kr",
  "key38": "4E8WWu4YUxVKq4jg1hnsMss9YXohxP6J1ScRTUptZGRZMpQCXHULecumFnaADSpFxyCsmDn2pQUTQ3tpddmfZJov",
  "key39": "eYgVsNL3JX3Uo8yVUCfXqC3YmyqmTCsYpkvD476zq7zVN5mcdSp8yBzJmHvi81yTByzidQqbJdFxzpY3iZdnJPV",
  "key40": "3FaQLTqxmR5EWp2fkXmVsnwqaL3C19E2rZ2PEe3F9hSeY17amCj2KCSp2VUk1rN27QcT1VLryd26iZ6Gms4khbBZ",
  "key41": "5LtTiUgkwNEsFpMzeo3QKNPSEEuPwmc2oSotPsP3hAde5MQNNgHcgcRXRpaX7cRXa3hXMMMoWmfgKRQsvLbRXwYV",
  "key42": "munjL3FLuXVPUU9C8n52L5CGv8RNn99vziLaaHZKdxNLgh5h4XTpsLFyoYSXD6D5rNR5TrPLq89rcKomymNwZ8P"
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
