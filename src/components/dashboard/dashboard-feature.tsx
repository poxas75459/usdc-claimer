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
    "5n73Fj2666zRrFL8p5NCFjgCBjX7iKDz2bEt3BNcNuGYoj87Jd8BepK9ami1uir3WLsY2sh7tkFQxtPnMsEpZAbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41X6i2iCQqFfhAA1UcchjTW4AUy6dPt8TNK4Te9ThyPgPSPNa6hcRX5BVwUQciakVBA9JCTn5xK7uAwSLbYqq7Fd",
  "key1": "2rpzjA3QwCYvmUcNZpXCh9SPa44cpny6TviVG6WgoMw7DEtviN2R4KxLa5AjuKQS5JEuqfw7aTmfUutukdKsaFiC",
  "key2": "5NChqtGKFhpX6sAvFqkFoCKn6oLwuWhbTs1PM72k4U9yoT87PgMrDQB21ndCrtEiRjEcodtrtLxjBSxFcrfYz5dn",
  "key3": "5Sis8eYttj2DkArnXtaCrzjQU5HLtvQPV77LtvDSUAwfcafas2SUccByfZMQf2a8LbErqF34d1sPqrZTabeTbCCa",
  "key4": "2NXQKUFUdqFimxyhQ6pJT2STsZ2tvXzU2DiKkYNC1fAd5Surk1HZbxi4LH4e3Ks8aJdeGeAQBgou4GDqCuNZdSy6",
  "key5": "LVJjDXRpHVfkhS4CeYoNamqcmY1buvGTNpo3J7E2bKABgfsMPk5FtTWKQEvGLB5Qj8THrg9aeTAsRqR6xApaHbf",
  "key6": "55qftBwvgJTvKYEeB3y1y2LXGYLLEKZNqMo7yJRRqGFhimHapMKggmgvbYivKnjt2KST2QoR6Y9PFdts4EiBhkFc",
  "key7": "4z2aFAgAWBYuc3TRoRFpsjCYyNoLNnDa5h9uQPpX2gt9UkBAG8nm5aKHVEXkTooBZGvVRnu1Ez73jmheAsLM6TPL",
  "key8": "314GBRUZYv48p1jK9W1VZ6nhVvRvXN4NtpNZbGBXGs2EnwfYwDWAztaj1c8GJPt8p1aQdmofWDp21DDCnM8H88EY",
  "key9": "2BBiFYCRNr3dp3jMMg3rCbShMwz5cs3thVBGQwNjnwNPn28ofbcfwh5qMtNYirzRpJtxQz4bnHeB2QwvoieeorUi",
  "key10": "4MV9FoLnpcJEPYPAyHADUABggHH1vcvazv63ogYwBpWpohQeftV9f8Wtk3o2cojn8DZ2Jd5azTifTFQHsYi39xyu",
  "key11": "3N3U9smctWHdK9nYAfyThnZ67Wx3ZT2S7KqhdRtQYa2Qdcm5J9oWN7izMe5VGxVkRSyNLh4BPx2yriUYaeqY7tiw",
  "key12": "4JS2h1h4JZp2Bkja5h7AAAhfmfyFx26jQCKunNeTBfL4MUXozryjx5YDNkg6jACPYaNJyX4i2eBr7wERAjLbFavJ",
  "key13": "5PDyJzDXjrzqkEvn2CqvUm3hDxtqoDpJUDwUacyHmh6C8YXRAV4JLyj3yuZcR4dWLYAFyrWuhVdf9k9DwTiJR1NS",
  "key14": "3P1MZwE1RSzkNBqK7XmN4429bnigyBexjbVyiykbBPsLv6khy7Ry8UFKeNiacuB4Mosfp61SKEKV1M4r3i9z7ZJ1",
  "key15": "2rsjuDAgSzMk2abkPx5D2DC7KehfJY58hoTmpnuJTUoPFaDdwF2cTktqU9vs9386JcNM9umF8THDtUvNpMn81rB8",
  "key16": "3Kyfe15FwPXFvg4UnQkHCHV4Fa4SYG74eCsbSg4wcCUPo5wXWtRu8Bttu1NaNcyvdp4GAusJ48CL5XrKS68N6dU8",
  "key17": "4b3LrS6HS5XucSkUTDRTCNLnUzfk7DgYLfrG2bMLdWjHS2vHMmq5YtEmd6XtwEv58SiAo9mVxQJX58uYw8Efhxjc",
  "key18": "Dd4PtACafDtXyKQguG5fxcduGuNHtdbBTu8sudKQnub119bRrfuCLvVime15UuUEBdmcVBS2u3oRa1v83GgZE9U",
  "key19": "3kSdahVxyRRQKPTH8Hv2iaqLbE3CmqPReUhMQnqwBiyGTRWgxmdiVK5JPyvXUfMN2zSaKmDn45cGXuFHhjfbQXGt",
  "key20": "2yWmJPos99Grtr4rfs51WB9Fm7eS3tjSUe5trZoXiekNNeAAj7ddXAgA9jkbjP4tjQY67ewbAHqv8QcZtJA4iFdS",
  "key21": "2VWKyD5CgjhudDUMYZHsq4KtrT8JfipCnyuoNky18RYRNVoQSyssGkvHZxtpJEdFXnVWecARtnEytWurNyZJjGSa",
  "key22": "61XHwwUt5PxrzGgarNY2aRHJQcKa5tUHntxjJtmU4LggRfTghgXLLfugZ3N8QcsEYNx1mbH71PXRibkjWPBahUX4",
  "key23": "2EiykBhoNf5i2Zd4L57keEcg7awRQ1hCdPMf7fCbjz2wUeEfDUQ9ELdZmwKttsudaFL2VBywdgcsP9QmmX6BDYkR",
  "key24": "3kcV3Ttiud76gJgX2HVe5VR4rnu9X8uGZLutFSzU31uJ9cdRikum7yGBh8HRKUWu51eK4xjENL6PgggaNDj6fX3V",
  "key25": "3C5coCRgJTyLbdTMxGmtzGfhPJdqYwkaHp3HBpZ9bKiXWFShVhbM9srVKh95qhSJRR95rACTSi2yDhq1NNXUJntX",
  "key26": "2LFrkWHZXtN2KFYf7eBvud1Wiqh7Rntv88JcPNA9u4BJZwNRvZEgU7qu66sBCwHgASF3B6JqPiStsWhWwm9rmUU9",
  "key27": "GkyKpjRdgKMQ9J4NFjao2WatK6gyUAb4cxzYnAaJMcUjsdZiRwi54hEnHMaeYkDiqKNBu5WjppSxSAN5hUq7uaz",
  "key28": "3ehUmayGXvrVUksRvAYxc8pfPCphyR7d4YuD5m6VAY1Aq9yzuBsgQ61rzrWP7MKxEFnMuoXcdyNHYuuu1WKVK7Ch",
  "key29": "24tVCdcssPEXafEQvkAjFVaQdnej8ia2xm76wnvdspAxNStVyLeFsLG3mcdRpWTr2vNhcPK7E7ApJuDvuYvFkhd9",
  "key30": "n4F8bqmPr83doH5RdddvBCx4poGQwzw48LueNzcCF9uXEWgc6T4TgNr33zSLG9qgVST5uLydeZ3ydosPvhBPFgr",
  "key31": "4cBQdcfMTgwMZs3n1Uz2TCdRLbqU9aGYrmExKmoVSBPXVwFq1yvwBM9QpoPQ1qmEoKkiHu26GtYZVsAnSDHV2jzC",
  "key32": "pWTJyPzfuoxDg6TiZrqed1LLsekXL6oBc79iW83C4ieMb29QMk4fqBbBAktbavWGDFn429L1QN88wY2h2osSBTS",
  "key33": "66wvMvQwSMfYQdciRwg1s1Avu45M1ZecEimBdFdmuzenmBYY51DPgB314JeWVBmwCuwM9GCS71qQCwjtN6RR4iVS",
  "key34": "3R6VWwZsASq7NT6ajqZU12FyBq4iumH6RAUTk2WdHrEMPMXNpsu6jJWVGZdHPyNznNzQaNE6jmVQkNxp98P8wYe4",
  "key35": "4EQdd8hQXCXcCmUCnPPMaMLqJGPF42WdDSF2XJDg58h8BB6cxQ5q5ehzDPSj9A45nPhpdsYLsWr9iwzW63H2hjgh",
  "key36": "2mELowpDFZjAd1YAW8dEg4iwnpGJMJwAovQgzDZ82D9xZSL9KhUVMRA1ACQb8rYwUhNTcFa56kKAQYQdnbB69bHG",
  "key37": "ESFfdFCzVqxsQ6XJnpdq9KbWBweEE3dnsE45VZ98c888degV7amXT8Kc2FpyjNxcSZdPPG4r9QU26kSu4oYhs2w",
  "key38": "4u8mEAinR8owgPoVUHkqprRCKMq6hkvjg59zpekVocSsqUS4Tike12tLvVfexx9EJEfqAP7JFTTkSf4do4jYMj43",
  "key39": "3CFMp29QGgmjQPZVfPG2WRqQuE7uSPasNwTFd43W1Tp3hxrNEiW4W6EYQus3KGcJd773Ycz8m7rmAjjVUZhRykgq",
  "key40": "4L5NFufrS91E3YDWUPgTjKNWJnq87ShGKGbW6YkzBth24AEGuXejym32bygqzkV8qNnHQXb62Kum6ivaJpJB7Hxs",
  "key41": "3rMYUeYkCkMKQchK6tBADFqd3DJC653LTQiynaj7BU3nBnrVyXSynVaLcxp8f1qA4i1dKXtzrZZi2mCibrHoAkVm"
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
