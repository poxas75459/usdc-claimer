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
    "4uSDBznz9qK71UVk7zugMgurAZHiXRx9U9RUgnyooudmmu58Tt42EUN2sp9fXGg5r4bDyyVfwM5ykDKb3ojeGwr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYJf76jSaDe11NRFTzV7w8KvrS8jKhJvvRFKkV1GyaogEpmSvQkQN4TCfUSitSi7Gr5cYZMpbtk2JAXaWjeuivS",
  "key1": "4RgSGtXpWGJ8jcrVer9hp1t1Da6zUDfocTH5i97vjBHGT2eRTFj68KEjqz3reUsryVgkR3f9iBFj3rRKeBGULyEW",
  "key2": "3tet6PiAovcGQgC3Brr22JGGmznrYh1iix4LkNL4eMGakTB1VWFptBJkazXBT8vVtXRyWPmxu1ZsojgY8XYgmW74",
  "key3": "3ddMnLbkqiQje5JdapySZuScP27nTyFUCS9udWJgWKVQdZG6VQQfNJyuSnN5vVXRBXRqS5iJ8TSYbXWVfJs4926s",
  "key4": "3ThzAbLV5PUurhXVqXtpZRFz8kZqwXrhJK28ttdSvxE6ztPp2yU34q2mRXzXHsRfAJeh2tBkb8oznoykgiisMBm1",
  "key5": "3qG3z3Nz4XvjxxwgshowSTgit3hoCXSbjMeDZue6upmUr5EEMc4TU5Xs86aBP4rNi8nmYsypM4ZmjrufwMSZSjqV",
  "key6": "3wPbHV7So4mQ6XjfgLfwBTjnpk6ocDCkpk86RASRMjYP886atHmFG18CCXzPBNTYTsM2myn7uJo75CSLPKr35MnS",
  "key7": "677fkhr2bzk35YQvqseCUAB9qqgcordtkHsiWLBDEAhKUgJHm5JCN7FRp8BNJMMW2bSVzAo6ma5f9DGk6QjVfuFM",
  "key8": "4wE2f1KAC3rCg19Z4AY5P61rcoPLiDDXWpdBMA5dc1ANLa8fLQSbiWRmWzZqpSLwnA3vULKqtfzbm8gPV8422dRw",
  "key9": "4hkBeR7WhR5kJ3PJeDT32VMQP2x8QbYxaVN85GA6ZuYp5rELPupfhs5zhYDAX4WBRfUx4q2cCkAtdV6yWVhRyi8h",
  "key10": "37uhWfFc9aLSeDkD9JTaiLRZwTVbAmp1FWB3a8K5FkpANZ3yUjxWZ9ecz9MRzTXWqw4N4G6CepXhLtNphBCrjNAC",
  "key11": "vP6JFS5MMvXvuHJp2mKUcpD6ncuJ3F16eTJLr1kMmodQrKuSnEtuuq6hjnCEigTaaAS8vYXXqRgM66L5de2do5o",
  "key12": "4AkHSwpZdWB6d2UFU73P13Dy6BdgR923fGs6mChtnc9pxDG6gAKAMczGtiEbv9QDAuyxSffsqPkiz2ps6xvjJWCm",
  "key13": "5weGxafVuxPbQseXDnwjntzToWwDK3wKbuszcac5zeCBoUkywifEZJCvEzjBKGdZmzsw4N1dLryCXUdSvkr9S9j5",
  "key14": "2dJtAuDoFUj7ddxkDNb1Aef28zaUgcuTQPzQN7NxvMa8mxehtQ45EJHDEwhd5QNLXEzy6fvU7jtZ8JvQYyDLhCTk",
  "key15": "3N8ViDuyEk39YFgpsGn94qYMmhLDR95hM29VGXZb2qCu8fR7if6tavc1Uur2136sgo92t41fCosMinrkNBYDVGJ7",
  "key16": "2jYr8Xcwj6W3Jf15vDbjq5tinqEvwfav2BudavSbgMoE7JvGfnEXEy8kZnfNffr6gtdtTnpGpzUbJMa62zHF5K4A",
  "key17": "33dTF9dZrof24chxMgReTFTxenPiLN9TJJWq5ht5zodXwcjeKjteXQpbXAJDmjrfV9SpPRvMH4bhKWxEzDmYW98V",
  "key18": "UTTCx2TBeAJXkPjkSioadPnFE5i6WXi3mjKZgL5nEHSjHydaSXh8ig24A6LQ4rJj5z2azJK5wmpXzEj8UMbRHn5",
  "key19": "4SfGWr49mF2aNUEqBRqXtYpFrgQwkGJCNYTBvYfURB7Zd6h2D9ZL5Pj1fd9LKGV2v1idsEqKPUvnPgXcYcMcFBtY",
  "key20": "3oGpWtzL643b3kRxTDVToHx6dxqEyFsuS572m1XUkaLfqsXePfR38C75jm61UEzWiAnCmujEwcap3bRYiEAuHKT4",
  "key21": "2cEUby1Na7mAcQUkzSY9NK3MNihoyjw35KxwTQ2F7E8SAfVtuspGmU95Wvho5UQihEfWSqSaBXmvJzmXSHjFNPs5",
  "key22": "2PESsa1fNBk9Vkt7K73KyfcZSq4VagZkZpqey5YowfdvLAVc8uK4dBbYcbQe7gJhD5wK4j2ufwYKmhc1hTTeLe83",
  "key23": "3riLSRZo3TZWB1LmwxX7kR6JA6FAVAunrqB7mrJyBMVbbQmgBhoqK3vigViHPPmv8j8TsKgcrmkAcgrzVobUBCEj",
  "key24": "3J2epGtJjhCapCLZf7hWB3Cmb5QDBEPGxGn3q7hEypzhR4fpywRcTsXWGP8zuddkSyqdNb38uuLYUpMvJWrPFxxs",
  "key25": "5KeMBtMAiptKA5jNnmwYa2bZQZPzmVZE1RgjSfUzWLK8MrkDhQp3TtGoqyy4eD7zWGhV9yLhwghycCxZdmbDQNjU",
  "key26": "uusBjSJ98yGqXevTEF7S5kRNGT7GyvyEtjeMygaWxQPFinQpJaX4jB1AgHkVeeYZpj8aCYv5V7UwPbBURvQnzzE",
  "key27": "PKHp7PTkkRnRUW7WjaM4HJ9t3BCXMPL13MmHmPngA1ShVBsCFAsYoroATDQ93oFXmAfQeY5yU5pM9DhBSAaVj3X",
  "key28": "2Gjtm8uFEcZx8kPezN4dEfzwAhV5HGG42t8SdL4s3ESdx2rWCXrdTCRbcZVxECfLL9FQYvS3wh3vqi1sv4VaHpYW",
  "key29": "53rAwJfcXiXP5UihzQPuAPcuTMTscKKmqoVd3LZY28PkivqbiU9STZbCyjUnBRoau7gHc1Ng4TrAxbBw3cj5c85F",
  "key30": "3w3ML3rtH7hJGzDopSD1E8Xt42stc5UmWScaej3yZyc7nW2S2D4UW6PS2y4LWS17NUbwQijTcctGjBivxUUa1SU3",
  "key31": "5xnvzkqbBChX4kFgpT3mcb66MHibPQm8BkWw1GFnBrcShh9ibNpnemQmG8b6HTcLKJSEZeJZHshhTACunb684BQy",
  "key32": "5vHw1eVDZ25E956TCyWXZMeUw5PdJsASkrjT6CVqQWY5tjEvywvqKFN29sX4boahZntKyyxemwPDTZXneouyhAmY",
  "key33": "5p3JU55BaN5QMa5hmJBKvuwqcnKi7P76rfSsY7iEopp45Udsz7TW5v3zcUQ5eFq8zRpnM7tYZA4yzd1Hw5TvZUpR",
  "key34": "4KVB8rVoHSg2gvPzVGgNPJAg4vHwDKChgQevC4785XKaynXJMJvxyB13a6HkBWmRH1uwvT5KVHDcZmHc1WoAjpLk",
  "key35": "4tSKeuhyXkdL6fPzAwM9QFhXswf7s4EJRMku51ZspwpBE4djg9ir6V6eHo8Ho8fhxPuw6U6mfyhU4FTVVhgkoJuX",
  "key36": "4RP7t2EcY95zvSnoKbr8y84A7aHAM1TZbyiEXKygkqpkyfnZBdM2zbwK9mVh5SBybwYhueqeKv2W9k6jEAdcCDws",
  "key37": "5V6mgB2usNRxZrPCGodDDx5RSE4d6Wq2VP3eQkWq7vwixTWo4gHH6sSnapQWVXHK7xKVPeS6s7tJM75wY4jjXsss",
  "key38": "4L5t2wvfKrzrzkqtZQbuP3ZVsEZFGzbApAPweucxjfR3yZtcmvN4sio5L8xcTRFqw7c3BiJMTXXhGQsFhdAKueaC",
  "key39": "3ozFZEdwydc73wk7GJgMcvsnSLyvshMPD55TDyJoXVriEnErvGVyqT22hEhqKcrHRSaB4LWPmGPfEW649kFzXk39",
  "key40": "MhoLHahzMeXZggnmDGUUDTy4fxxEdtUqwm7vQ3o44zz3bnaEGS7c4rnpynEfuaXntnuqsEF1YDg386A1X3rXznC",
  "key41": "414zcJBn5hRtiLqpkKsFGTXcewLZcHs55m8zitFrqra47QN8aGg98XTJJibJW8rhcvvQ5EjXfBpHdnBAP2bcEAyY",
  "key42": "4exSscNDdSE5Mvj8BafTaL4UVLJ7w9yzviWoeWPU6B1ZuzyoQ7S29U6faGNxSNZZpDqWU7nibkDC6GZqBVNwzjwo",
  "key43": "4gu4op3yJV3UM7LDgUArrWEzu3ogQzJi694vveueLsqUBjpFE5o61Tvq8TpXyZ5YhLc4yPtrEq8hvfDzaJyEBZha",
  "key44": "4QMwQbsALSjsqS5huciJN2Ycyd3UHz4octuAfPavx1gGdY6vD5mBX1f8URtJ6WdUFF6abbPYhpc5BzQQf3VLcA9n",
  "key45": "52wzEfrYooDgW6CJUWEGVx93ZpHNB9ohsNYU9V65i2ZGCMYCKFJNskKtb9Re6VzvHg5KLLGLLqLoCd429yL9xt1E"
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
